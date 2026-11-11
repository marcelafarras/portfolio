// Navigation and the service shortcuts.
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
function closeMenu() {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(open));
  navLinks.classList.toggle('open', open);
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-open-service]').forEach(link => link.addEventListener('click', () => {
  const service = document.getElementById(link.dataset.openService);
  if (service) service.open = true;
}));
document.querySelectorAll('.service-row').forEach(service => service.addEventListener('toggle', () => {
  if (!service.open) return;
  document.querySelectorAll('.service-row').forEach(other => {
    if (other !== service) other.open = false;
  });
}));

// Direct links and reloads should open the service they point to.
function openLinkedService() {
  const id = window.location.hash.slice(1);
  const service = id && document.getElementById(id);
  if (!service || !service.matches('.service-row')) return;
  document.querySelectorAll('.service-row').forEach(other => {
    other.open = other === service;
  });
}
window.addEventListener('hashchange', openLinkedService);
openLinkedService();

// Automatic motion is silent, optional and disabled for reduced-motion/save-data preferences.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const saveData = Boolean(navigator.connection && navigator.connection.saveData);
const heroVideo = document.getElementById('heroPreview');
const heroPlayback = document.getElementById('heroPlayback');
const motionToggle = document.getElementById('motionToggle');
const dialog = document.getElementById('projectDialog');
const dialogContent = document.getElementById('projectDialogContent');
let motionEnabled = !reducedMotion.matches && !saveData;
let heroVisible = false;
let heroManuallyPaused = false;
let heroUserRequested = false;
let sampleObserver;

function updateHeroButton() {
  heroPlayback.textContent = heroVideo.paused ? 'Play preview' : 'Pause preview';
  heroPlayback.setAttribute('aria-label', heroVideo.paused ? 'Play silent preview' : 'Pause silent preview');
}
function syncHero() {
  const canPlay = (motionEnabled || heroUserRequested) && heroVisible && !heroManuallyPaused && !document.hidden && !dialog.open;
  if (canPlay) {
    heroVideo.muted = true;
    heroVideo.play().catch(updateHeroButton);
  } else {
    heroVideo.pause();
  }
  updateHeroButton();
}
function syncMotion() {
  document.body.classList.toggle('motion-paused', !motionEnabled);
  motionToggle.setAttribute('aria-pressed', String(!motionEnabled));
  motionToggle.textContent = motionEnabled ? 'Pause motion' : 'Enable motion';
  if (!motionEnabled) document.querySelectorAll('[data-hover-preview]').forEach(video => video.pause());
  syncHero();
}
heroVideo.addEventListener('play', updateHeroButton);
heroVideo.addEventListener('pause', updateHeroButton);
heroVideo.addEventListener('error', updateHeroButton);
heroPlayback.addEventListener('click', () => {
  if (heroVideo.paused) {
    heroUserRequested = true;
    heroManuallyPaused = false;
  } else {
    heroUserRequested = false;
    heroManuallyPaused = true;
  }
  syncHero();
});
motionToggle.addEventListener('click', () => {
  motionEnabled = !motionEnabled;
  heroUserRequested = false;
  heroManuallyPaused = false;
  syncMotion();
});
reducedMotion.addEventListener('change', event => {
  motionEnabled = !event.matches && !saveData;
  heroUserRequested = false;
  syncMotion();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) document.querySelectorAll('video').forEach(video => video.pause());
  syncHero();
});

if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    syncHero();
  }, { threshold: 0.2 }).observe(heroVideo);
} else {
  heroVisible = true;
}
syncMotion();

function setupSamplePreviews() {
  if (sampleObserver) sampleObserver.disconnect();
  if ('IntersectionObserver' in window) {
    sampleObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) entry.target.pause();
    }), { threshold: 0.1 });
  }
  document.querySelectorAll('.sample-card').forEach(card => {
    const video = card.querySelector('[data-hover-preview]');
    if (!video) return;
    if (sampleObserver) sampleObserver.observe(video);
    const start = () => {
      if (!motionEnabled || !finePointer.matches || document.hidden || dialog.open) return;
      video.muted = true;
      video.play().catch(() => {});
    };
    const stop = () => video.pause();
    card.addEventListener('pointerenter', start);
    card.addEventListener('pointerleave', stop);
    card.addEventListener('focusin', start);
    card.addEventListener('focusout', event => {
      if (!card.contains(event.relatedTarget)) stop();
    });
  });
}
document.addEventListener('samplesrendered', setupSamplePreviews);
setupSamplePreviews();

// Content stays visible if motion is disabled or this enhancement is unsupported.
if ('IntersectionObserver' in window && motionEnabled) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  }), { threshold: 0.1 });
  document.querySelectorAll('.reveal-item').forEach(item => {
    item.classList.add('will-reveal');
    revealObserver.observe(item);
  });
}

// A thumbnail plays the full work; the secondary button opens its context first.
document.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button) return;
  const item = SITE.samples.find(sample => sample.id === button.dataset.project);
  if (!item) return;
  dialogContent.innerHTML = `${item.videoSrc
    ? `<video class="dialog-video" src="${safeUrl(item.videoSrc)}" poster="${safeUrl(item.poster)}" controls playsinline preload="metadata" aria-label="${escapeHtml(item.title)}"></video>`
    : `<img class="dialog-image" src="${safeUrl(item.image)}" alt="${escapeHtml(item.imageAlt)}">`}
    <div class="dialog-copy"><p class="eyebrow">${escapeHtml(item.category)}</p><h2 id="projectDialogTitle">${escapeHtml(item.title)}</h2><p>${escapeHtml(item.description)}</p><div class="dialog-details"><div><h3>What this can help with</h3><p>${escapeHtml(item.demonstrates)}</p></div><div><h3>Project type</h3><p>${escapeHtml(item.origin)}</p></div></div>${externalLink(item.videoSrc || item.image, item.linkLabel)}<a class="sample-enquiry" href="#contact">Discuss something similar ↗</a></div>`;
  document.querySelectorAll('video').forEach(video => video.pause());
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  const fullVideo = dialog.querySelector('video');
  if (fullVideo && button.dataset.startPlayback === 'true') fullVideo.play().catch(() => {});
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
  syncHero();
});
dialogContent.addEventListener('click', event => {
  if (event.target.closest('.sample-enquiry')) dialog.close();
});

// Retain the existing contact integration; use mocks when testing delivery.
const N8N_WEBHOOK = 'https://n8n-bjje2k7bz6nk.jkt5.sumopod.my.id/webhook/88e1a423-75f7-47b7-8a12-25aa7e2aa2cc';
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const button = form.querySelector('[type="submit"]');
  if (button.disabled) return;
  const fields = new FormData(form);
  const payload = Object.fromEntries(['name', 'email', 'subject', 'message'].map(key => [key, String(fields.get(key) || '').trim()]));
  if (!payload.name || !payload.email || !payload.message) {
    formStatus.textContent = 'Please add your name, email and a short message.';
    return;
  }
  button.disabled = true;
  formStatus.textContent = 'Sending your message...';
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(N8N_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }), signal: controller.signal });
    if (!response.ok) throw new Error('Message delivery failed');
    formStatus.textContent = 'Thanks. Your message has been sent.';
    form.reset();
  } catch {
    formStatus.textContent = 'Your message could not be sent. Please email marcelafarras@gmail.com instead.';
  } finally {
    clearTimeout(timer);
    button.disabled = false;
  }
});
