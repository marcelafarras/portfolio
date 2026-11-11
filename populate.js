// Text stays escaped when portfolio copy is updated later.
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const safeUrl = value => /^(https:\/\/|assets\/)/.test(String(value || '')) ? escapeHtml(value) : '';
const externalLink = (url, label, cls = 'text-link') => `<a class="${cls}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;

function renderSamples(filter = 'all') {
  // A filtered-out player must stop before its element is removed.
  document.querySelectorAll('#works-grid video').forEach(video => video.pause());
  const items = SITE.samples.filter(item => filter === 'all' || item.services.includes(filter));
  document.getElementById('works-grid').innerHTML = items.map((item, index) => `
    <article class="sample-card ${item.videoSrc ? 'has-video' : ''}">
      <div class="sample-media">
        <button class="media-open" type="button" data-project="${escapeHtml(item.id)}" ${item.videoSrc ? 'data-start-playback="true"' : ''} aria-label="${item.videoSrc ? 'Watch' : 'View'} ${escapeHtml(item.title)}">
          ${item.videoSrc
            ? `<img class="media-backdrop" src="${safeUrl(item.poster)}" alt="" aria-hidden="true"><video data-hover-preview src="${safeUrl(item.previewSrc || item.videoSrc)}" poster="${safeUrl(item.poster)}" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video>`
            : `<img class="contain" src="${safeUrl(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async">`}
          <span class="media-action">${item.videoSrc ? 'Play video' : 'View sample'} <span aria-hidden="true">↗</span></span>
          <span class="sample-count" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
        </button>
      </div>
      <div class="sample-info">
        <div class="sample-info-top"><p class="project-category">${escapeHtml(item.category)}</p><span class="sample-origin">${escapeHtml(item.origin)}</span></div>
        <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p>
        <button class="project-button" type="button" data-project="${escapeHtml(item.id)}" aria-label="Details for ${escapeHtml(item.title)}">The idea & output <span aria-hidden="true">↗</span></button>
      </div>
    </article>`).join('');
  document.getElementById('emptyWork').hidden = items.length > 0;
  document.getElementById('workResults').textContent = `${items.length} ${items.length === 1 ? 'sample' : 'samples'} shown.`;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
  document.dispatchEvent(new CustomEvent('samplesrendered'));
}

renderSamples();
document.getElementById('workFilters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (button) renderSamples(button.dataset.filter);
});
document.querySelectorAll('[data-service-filter]').forEach(link => link.addEventListener('click', () => renderSamples(link.dataset.serviceFilter)));
