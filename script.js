const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function closeMenu() { navLinks.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  navLinks.classList.toggle('open', open);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 721px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();

const dialog = document.getElementById('projectDialog');
const dialogContent = document.getElementById('projectDialogContent');
document.getElementById('works-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const item = SITE.samples.find(project => project.id === button.dataset.project);
  if (!item) return;
  dialogContent.innerHTML = `${item.videoSrc
    ? `<video class="dialog-video" src="${safeUrl(item.videoSrc)}" poster="${safeUrl(item.poster)}" controls playsinline preload="metadata" aria-label="${escapeHtml(item.title)}"></video>`
    : `<img class="dialog-image sample-detail-image" src="${safeUrl(item.image)}" alt="${escapeHtml(item.imageAlt)}">`}
    <div class="dialog-copy"><p class="eyebrow">${escapeHtml(item.category)}</p><h2 id="projectDialogTitle">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.description)}</p><div class="dialog-details"><div><h3>What this demonstrates</h3><p>${escapeHtml(item.demonstrates)}</p></div><div><h3>Sample type</h3><p>${escapeHtml(item.origin)}</p></div></div>${externalLink(item.videoSrc || item.image, item.linkLabel, 'text-link')}<a class="small-link sample-enquiry" href="#contact">Discuss a similar project ↗</a></div>`;
  document.querySelectorAll('#works-grid video').forEach(video => video.pause());
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  document.body.classList.remove('dialog-open');
});
dialogContent.addEventListener('click', event => {
  if (event.target.closest('.sample-enquiry')) dialog.close();
});

// Retain the existing site's contact integration. Do not submit test messages to it.
const N8N_WEBHOOK = 'https://n8n-bjje2k7bz6nk.jkt5.sumopod.my.id/webhook/88e1a423-75f7-47b7-8a12-25aa7e2aa2cc';
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('[type="submit"]');
  if (button.disabled) return;
  const fields = new FormData(form);
  const payload = Object.fromEntries(['name', 'email', 'subject', 'message'].map(key => [key, String(fields.get(key) || '').trim()]));
  if (!payload.name || !payload.email || !payload.message) { status.textContent = 'Please add your name, email and a short message.'; return; }
  button.disabled = true;
  status.textContent = 'Sending your message...';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(N8N_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }), signal: controller.signal });
    if (!response.ok) throw new Error('Message delivery failed');
    status.textContent = 'Thanks. Your message has been sent.';
    form.reset();
  } catch {
    status.textContent = 'Your message could not be sent. Please email marcelafarras@gmail.com instead.';
  } finally {
    clearTimeout(timer);
    button.disabled = false;
  }
});
