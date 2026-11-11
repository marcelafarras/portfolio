const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const safeUrl = value => /^(https:\/\/|assets\/)/.test(String(value || '')) ? escapeHtml(value) : '';
const externalLink = (url, label, cls = 'small-link') => `<a class="${cls}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;

function renderSamples(filter = 'all') {
  const items = SITE.samples.filter(item => filter === 'all' || item.services.includes(filter));
  document.getElementById('works-grid').innerHTML = items.map(item => `
    <article class="sample-card">
      <div class="sample-media">
        ${item.videoSrc
          ? `<video src="${safeUrl(item.videoSrc)}" poster="${safeUrl(item.poster)}" controls playsinline preload="none" aria-label="${escapeHtml(item.title)}"></video>`
          : `<a href="${safeUrl(item.image)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(item.title)} image"><img src="${safeUrl(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" decoding="async"></a>`}
      </div>
      <div class="sample-info"><p class="project-category">${escapeHtml(item.category)}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><span class="sample-origin">${escapeHtml(item.origin)}</span><button class="project-button" type="button" data-project="${escapeHtml(item.id)}" aria-label="Details for ${escapeHtml(item.title)}">About this sample <span aria-hidden="true">↗</span></button></div>
    </article>`).join('');
  document.getElementById('emptyWork').hidden = items.length > 0;
  document.getElementById('workResults').textContent = `${items.length} ${items.length === 1 ? 'sample' : 'samples'} shown.`;
  document.querySelectorAll('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
}
renderSamples();
document.getElementById('workFilters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (button) renderSamples(button.dataset.filter);
});
document.querySelectorAll('[data-service-filter]').forEach(link => link.addEventListener('click', () => renderSamples(link.dataset.serviceFilter)));
