const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const handler = source.slice(source.indexOf('// Netlify captures'));

function setup(fetchImpl, { valid = true, name = ' Test Visitor ' } = {}) {
  const values = new Map([
    ['form-name', 'project-enquiry'],
    ['subject', 'New project enquiry | Marcel Farras portfolio'],
    ['bot-field', ''],
    ['name', name],
    ['email', 'marcelafarras@gmail.com'],
    ['project_type', 'UGC & talking head'],
    ['message', 'Brand brief: café + launch\nSecond line.'],
  ]);
  const button = { disabled: false };
  const status = { textContent: '' };
  const attrs = new Map();
  const calls = [];
  let submit, timeout;
  let resets = 0;
  const form = {
    action: 'https://portfolio.example/thank-you.html',
    querySelector: () => button,
    reportValidity: () => valid,
    addEventListener: (type, fn) => { submit = fn; },
    setAttribute: (key, value) => attrs.set(key, value),
    removeAttribute: key => attrs.delete(key),
    reset: () => { resets++; },
  };
  vm.runInNewContext(handler, {
    document: { getElementById: id => id === 'contactForm' ? form : status },
    FormData: class extends Map { constructor() { super(values); } },
    URLSearchParams, AbortController,
    fetch: (...args) => { calls.push(args); return fetchImpl(...args); },
    setTimeout: fn => { timeout = fn; return 1; },
    clearTimeout: () => { timeout = undefined; },
  });
  return {
    submit: () => submit({ preventDefault() {} }),
    expire: () => timeout(),
    calls, button, status, attrs,
    get resets() { return resets; },
  };
}

test('static form registers the same fields sent by JavaScript', () => {
  const tag = html.match(/<form id="contactForm"[^>]*>/)[0];
  for (const attribute of ['name="project-enquiry"', 'method="POST"', 'data-netlify="true"', 'netlify-honeypot="bot-field"', 'action="/thank-you.html"']) {
    assert.ok(tag.includes(attribute), attribute);
  }
  for (const field of ['form-name', 'subject', 'bot-field', 'name', 'email', 'project_type', 'message']) {
    assert.ok(html.includes(`name="${field}"`), field);
  }
  assert.ok(!source.includes('sumopod'));
  assert.ok(fs.existsSync(path.join(root, 'thank-you.html')));
});

test('sends encoded fields including form identity and special characters, then resets', async () => {
  const state = setup(async () => ({ ok: true }));
  await state.submit();
  const [url, options] = state.calls[0];
  assert.equal(url, 'https://portfolio.example/thank-you.html');
  assert.equal(options.method, 'POST');
  assert.equal(options.headers['Content-Type'], 'application/x-www-form-urlencoded');
  const body = new URLSearchParams(options.body);
  assert.equal(body.get('form-name'), 'project-enquiry');
  assert.equal(body.get('name'), 'Test Visitor');
  assert.equal(body.get('project_type'), 'UGC & talking head');
  assert.equal(body.get('message'), 'Brand brief: café + launch\nSecond line.');
  assert.equal(body.get('bot-field'), '');
  assert.equal(state.resets, 1);
  assert.match(state.status.textContent, /received/);
  assert.equal(state.button.disabled, false);
  assert.equal(state.attrs.has('aria-busy'), false);
});

test('HTTP and network failures retain inputs and offer direct email', async () => {
  for (const fetchImpl of [async () => ({ ok: false }), async () => { throw new Error('offline'); }]) {
    const state = setup(fetchImpl);
    await state.submit();
    assert.equal(state.resets, 0);
    assert.match(state.status.textContent, /couldn't confirm/);
    assert.match(state.status.textContent, /marcelafarras@gmail.com/);
    assert.equal(state.button.disabled, false);
  }
});

test('prevents double submission while a request is pending', async () => {
  let resolve;
  const state = setup(() => new Promise(done => { resolve = done; }));
  const pending = state.submit();
  assert.equal(state.button.disabled, true);
  assert.equal(state.attrs.get('aria-busy'), 'true');
  await state.submit();
  assert.equal(state.calls.length, 1);
  resolve({ ok: true });
  await pending;
});

test('timeout aborts the request and preserves the enquiry', async () => {
  const state = setup((url, options) => new Promise((resolve, reject) => {
    options.signal.addEventListener('abort', () => reject(new Error('aborted')));
  }));
  const pending = state.submit();
  state.expire();
  await pending;
  assert.equal(state.calls[0][1].signal.aborted, true);
  assert.equal(state.resets, 0);
  assert.equal(state.button.disabled, false);
  assert.match(state.status.textContent, /couldn't confirm/);
});

test('invalid email or empty required fields do not send a request', async () => {
  for (const settings of [{ valid: false }, { name: '   ' }]) {
    const state = setup(async () => ({ ok: true }), settings);
    await state.submit();
    assert.equal(state.calls.length, 0);
    assert.equal(state.resets, 0);
  }
});
