// Text stays escaped when portfolio copy is updated later.
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const safeUrl = value => /^(https:\/\/|assets\/)/.test(String(value || '')) ? escapeHtml(value) : '';
const externalLink = (url, label, cls = 'text-link') => `<a class="${cls}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;
const workState = { service: 'all', format: 'all' };
const sampleFormat = item => item.format || (item.videoSrc ? 'video' : 'image');

function renderSamples(service = workState.service, format = workState.format) {
  workState.service = service;
  workState.format = format;
  document.querySelectorAll('#works-grid video').forEach(video => video.pause());
  const serviceItems = SITE.samples.filter(item => service === 'all' || item.services.includes(service));
  const items = serviceItems.filter(item => format === 'all' || sampleFormat(item) === format);
  document.getElementById('works-grid').dataset.count = String(items.length);
  document.getElementById('works-grid').innerHTML = items.map(item => `
    <article class="sample-card preview-card ${item.videoSrc ? 'has-video' : ''}">
      <div class="sample-media">
        <button class="media-open" type="button" data-project="${escapeHtml(item.id)}" ${item.videoSrc ? 'data-start-playback="true"' : ''} aria-label="${item.videoSrc ? 'Watch' : 'View'} ${escapeHtml(item.title)}">
          ${item.videoSrc
            ? `<img class="media-backdrop" src="${safeUrl(item.poster)}" alt="" aria-hidden="true"><video data-hover-preview src="${safeUrl(item.previewSrc || item.videoSrc)}" poster="${safeUrl(item.poster)}" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video>`
            : `<img class="contain" src="${safeUrl(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async">`}
          <span class="media-action">${item.videoSrc ? '▷ Play video' : '↗ View sample'}</span>
          <span class="sample-format">${item.videoSrc ? 'Video' : sampleFormat(item) === 'workflow' ? 'Workflow' : sampleFormat(item) === 'carousel' ? 'Carousel' : 'Static'}</span>
        </button>
      </div>
      <div class="sample-info">
        <p class="project-category">${escapeHtml(item.category)}</p>
        <h3><button class="project-title" type="button" data-project="${escapeHtml(item.id)}" aria-label="Details for ${escapeHtml(item.title)}">${escapeHtml(item.title)} <span aria-hidden="true">↗</span></button></h3>
        <p>${escapeHtml(item.description)}</p><span class="sample-origin">${escapeHtml(item.origin)}</span>
      </div>
    </article>`).join('');
  document.getElementById('emptyWork').hidden = items.length > 0;
  const emptyMessage = service === 'events' && serviceItems.length === 0
    ? ["Let's start with your event.", 'No event samples are published here yet. Tell me about your event and the support you need.']
    : service === 'design' && serviceItems.length === 0
      ? ['A design brief starts with your message.', 'Static and carousel design samples will be added here. Tell me what your brand needs to communicate.']
      : format === 'carousel'
        ? ['A story, one slide at a time.', 'Carousel samples will be added here. Explore the other work, or tell me about your next carousel.']
        : ['A different format. A new possibility.', 'No samples match this format and service yet. Explore all the work, or tell me what you have in mind.'];
  document.getElementById('emptyWorkTitle').textContent = emptyMessage[0];
  document.getElementById('emptyWorkDescription').textContent = emptyMessage[1];
  document.getElementById('workResults').textContent = `${items.length} ${items.length === 1 ? 'sample' : 'samples'}`;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === service)));
  document.querySelectorAll('[data-format]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.format === format)));
  document.querySelectorAll('[data-format-count]').forEach(count => {
    count.textContent = serviceItems.filter(item => count.dataset.formatCount === 'all' || sampleFormat(item) === count.dataset.formatCount).length;
  });
  document.dispatchEvent(new CustomEvent('samplesrendered'));
}

renderSamples();
document.getElementById('workFilters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (button) renderSamples(button.dataset.filter);
});
document.getElementById('formatFilters').addEventListener('click', event => {
  const button = event.target.closest('[data-format]');
  if (button) renderSamples(workState.service, button.dataset.format);
});
document.querySelectorAll('[data-service-filter]').forEach(link => link.addEventListener('click', () => renderSamples(link.dataset.serviceFilter, 'all')));
document.querySelectorAll('[data-format-link]').forEach(link => link.addEventListener('click', () => renderSamples('all', link.dataset.formatLink)));
document.getElementById('resetWork').addEventListener('click', () => renderSamples('all', 'all'));

// Reviewed logos fall back to the supplied name if an asset is unavailable.
function renderBrands() {
  const track = document.getElementById('brandTrack');
  const items = (SITE.brands || []).map(brand => {
    const logoUrl = safeUrl(brand.logo);
    return `<li class="brand-item">${logoUrl ? `<img class="brand-logo" src="${logoUrl}" alt="${escapeHtml(brand.name)}" width="168" height="56" loading="eager" decoding="async">` : `<span class="brand-name">${escapeHtml(brand.name)}</span>`}<span class="brand-group">${escapeHtml(brand.group)}</span></li>`;
  }).join('');
  track.innerHTML = `<ul class="brand-list" aria-label="Brands and projects">${items}</ul><ul class="brand-list" aria-hidden="true">${items}</ul>`;
  // A missing future logo still leaves its brand readable.
  track.querySelectorAll('.brand-logo').forEach(logo => logo.addEventListener('error', () => {
    const fallback = document.createElement('span');
    fallback.className = 'brand-name';
    fallback.textContent = logo.alt;
    logo.replaceWith(fallback);
  }, { once: true }));
}
renderBrands();
