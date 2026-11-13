const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const nodes = new Map();
const get = id => {
  if (!nodes.has(id)) nodes.set(id, { dataset: {}, hidden: false, innerHTML: '', textContent: '', querySelectorAll: () => [], addEventListener() {} });
  return nodes.get(id);
};
const context = vm.createContext({ document: { querySelectorAll: () => [], getElementById: get, dispatchEvent() {} }, CustomEvent: class {} });
vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8') + '\n' + fs.readFileSync(path.join(root, 'populate.js'), 'utf8'), context);
const samples = vm.runInContext('SITE.samples', context);

test('every published work asset exists and carousels contain the complete five-slide sequence', () => {
  assert.equal(samples.length, 29);
  assert.equal(new Set(samples.map(item => item.id)).size, 29);
  for (const item of samples) {
    const urls = [item.image, item.videoSrc, item.poster, item.previewSrc, ...(item.slides || []).map(slide => slide.src)].filter(Boolean);
    for (const url of urls) assert.ok(fs.existsSync(path.join(root, url)), `${item.id}: ${url}`);
    if (item.format === 'carousel') {
      assert.equal(item.slides.length, 5);
      assert.equal(new Set(item.slides.map(slide => slide.src)).size, 5);
      assert.equal(item.image, item.slides[0].src);
    }
  }
});

test('format and service filters count all work while limiting the first batch', () => {
  const expected = { all: [29, 19, 5, 4, 1], social: [26, 18, 4, 4, 0], ai: [25, 18, 4, 2, 1], production: [2, 2, 0, 0, 0], design: [7, 0, 3, 4, 0], events: [0, 0, 0, 0, 0] };
  for (const [service, counts] of Object.entries(expected)) {
    ['all', 'video', 'image', 'carousel', 'workflow'].forEach((format, index) => {
      vm.runInContext(`renderSamples('${service}', '${format}')`, context);
      assert.equal(get('works-grid').dataset.count, String(Math.min(12, counts[index])), `${service}/${format}`);
      assert.equal(get('emptyWork').hidden, counts[index] > 0);
      assert.equal(get('loadMoreWork').hidden, counts[index] <= 12);
      assert.equal((get('works-grid').innerHTML.match(/<article /g) || []).length, Math.min(12, counts[index]));
    });
  }
});

test('show more reveals remaining work and filters reset the batch', () => {
  vm.runInContext("renderSamples('all', 'all'); renderSamples('all', 'all', true)", context);
  assert.equal(get('works-grid').dataset.count, '24');
  assert.equal(get('workResults').textContent, '24 of 29 samples');
  vm.runInContext("renderSamples('all', 'all', true)", context);
  assert.equal(get('works-grid').dataset.count, '29');
  assert.equal(get('loadMoreWork').hidden, true);
  vm.runInContext("renderSamples('ai', 'all')", context);
  assert.equal(get('works-grid').dataset.count, '12');
  assert.equal(get('workResults').textContent, '12 of 25 samples');
});

test('AI-generated work is clearly labelled and featured work points to real entries', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/work/manifest.json'), 'utf8'));
  assert.equal(manifest.length, 24);
  for (const entry of manifest.filter(entry => entry.source.startsWith('03 - AI Content/'))) {
    const item = samples.find(item => entry.output.includes(`/work/${item.id}`));
    assert.ok(item, entry.output);
    assert.match(item.origin, /AI-generated/);
    assert.match(item.category, /AI-generated/);
  }
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const match of html.matchAll(/data-project="([^"]+)"/g)) assert.ok(samples.some(item => item.id === match[1]));
  assert.ok(!/AI-assisted/i.test(html + fs.readFileSync(path.join(root, 'content.js'), 'utf8')));
});
