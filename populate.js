// Reads SITE from content.js and populates the page

document.addEventListener('DOMContentLoaded', () => {
  renderAiWorks();
  renderGallery();
  renderPersonal();
});

// ── AI WORKS ──────────────────────────────────────────────────
function renderAiWorks() {
  const grid = document.getElementById('ai-works-grid');
  if (!grid || !SITE.aiWorks) return;

  const statusColor = { 'Live': '#22c55e', 'Done': '#22c55e', 'In Progress': '' };

  grid.innerHTML = SITE.aiWorks.map(item => {
    const viewLink = `<a href="${item.iframeSrc || item.videoSrc || item.image || ''}" target="_blank" style="font-size:12px;font-weight:700;color:var(--yellow);display:block;margin-bottom:12px;">View Full Screen ↗</a>`;
    const media = item.iframeSrc
      ? `<iframe src="${item.iframeSrc}" style="width:100%;height:220px;border:none;border-radius:8px;margin-bottom:8px;" scrolling="no"></iframe>${viewLink}`
      : item.videoSrc
      ? `<video src="${item.videoSrc}" style="width:100%;height:160px;object-fit:cover;border-radius:8px;margin-bottom:8px;" controls muted playsinline></video>${viewLink}`
      : item.image
      ? `<img src="${item.image}" alt="${item.title}" style="width:100%;height:160px;object-fit:cover;border-radius:8px;margin-bottom:8px;">${viewLink}`
      : '';
    const linkBtn = item.link
      ? `<a href="${item.link}" target="_blank" style="font-size:13px;font-weight:700;color:var(--yellow);display:block;margin-top:12px;">View Work →</a>`
      : '';
    const badgeStyle = statusColor[item.status]
      ? `background:rgba(34,197,94,0.15);color:#22c55e;border-color:rgba(34,197,94,0.3);`
      : '';

    return `
      <div class="ai-placeholder-card">
        ${media}
        <div class="placeholder-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <span class="placeholder-badge" style="${badgeStyle}">${item.status}</span>
        ${linkBtn}
      </div>`;
  }).join('');
}

// ── GALLERY / BEST WORKS ──────────────────────────────────────
function renderGallery() {
  const grid = document.getElementById('works-grid');
  if (!grid || !SITE.gallery) return;

  grid.innerHTML = SITE.gallery.map((item, i) => {
    const media = buildMedia(item);
    const metrics = item.metrics.map(m =>
      `<div class="metric"><strong>${m.number}</strong><span>${m.label}</span></div>`
    ).join('');
    const featured = i === 0 ? 'featured' : '';

    return `
      <div class="work-card ${featured}">
        <div class="work-media">${media}</div>
        <div class="work-info">
          <span class="work-brand">${item.brand}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="work-metrics">${metrics}</div>
        </div>
      </div>`;
  }).join('');
}

function buildMedia(item) {
  if (item.youtubeId) {
    return `<iframe
      src="https://www.youtube.com/embed/${item.youtubeId}"
      style="width:100%;height:100%;border:none;"
      allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
      allowfullscreen></iframe>`;
  }
  if (item.image) {
    return `<img src="${item.image}" alt="${item.brand}" style="width:100%;height:100%;object-fit:cover;">`;
  }
  const icons = { "UP at Thamrin Nine": "📱", "Thamrin Nine": "🏙️", "Agora Mall": "🛍️",
    "Le Parc Luxury Residence": "🏛️", "Thamrin Nine Ballroom": "🎪", "PT. Jaya Real Property": "🏢" };
  return `<div class="work-placeholder">
    <span>${icons[item.brand] || '📸'}</span>
    <small>Add screenshot/video in content.js</small>
  </div>`;
}

// ── PERSONAL PROJECTS ─────────────────────────────────────────
function renderPersonal() {
  const grid = document.getElementById('personal-grid');
  if (!grid || !SITE.personal) return;

  const platformMeta = {
    tiktok:   { label: 'TikTok',   color: '#1A1A1A', icon: '🎵' },
    threads:  { label: 'Threads',  color: '#101010', icon: '🧵' },
    linkedin: { label: 'LinkedIn', color: '#0A66C2', icon: '💼' },
    youtube:  { label: 'YouTube Shorts', color: '#FF0000', icon: '▶️' },
  };

  grid.innerHTML = SITE.personal.map(item => {
    const meta = platformMeta[item.platform] || { label: item.platform, color: '#333', icon: '🔗' };
    const embed = buildPersonalEmbed(item);

    return `
      <div class="personal-card">
        <div class="personal-platform ${item.platform}" style="background:${meta.color};padding:20px 24px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:22px;">${meta.icon}</span>
          <span style="font-size:14px;font-weight:700;color:#fff;letter-spacing:.5px;">${meta.label}</span>
        </div>
        <div class="personal-content">
          <h3>${item.handle}</h3>
          <p>${item.description}</p>
          ${embed}
          <a href="${item.profileUrl}" target="_blank" class="platform-link">View Profile →</a>
        </div>
      </div>`;
  }).join('');
}

function buildPersonalEmbed(item) {
  if (item.localVideo) {
    return `<div style="margin-bottom:16px;border-radius:8px;overflow:hidden;">
      <video src="${item.localVideo}" style="width:100%;border-radius:8px;display:block;" controls muted playsinline></video>
    </div>`;
  }
  if (item.youtubeId) {
    return `<div style="margin-bottom:16px;border-radius:8px;overflow:hidden;">
      <iframe src="https://www.youtube.com/embed/${item.youtubeId}"
        style="width:100%;height:200px;border:none;"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
        allowfullscreen></iframe>
    </div>`;
  }
  if (item.tiktokUrl) {
    const videoId = item.tiktokUrl.split('/video/')[1]?.split('?')[0] || '';
    if (videoId) {
      return `<div style="margin-bottom:16px;">
        <blockquote class="tiktok-embed" cite="${item.tiktokUrl}" data-video-id="${videoId}" style="max-width:100%;min-width:unset;">
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"><\/script>
      </div>`;
    }
  }
  if (item.postImage) {
    const link = item.featuredPostUrl || '#';
    return `<div style="margin-bottom:16px;border-radius:8px;overflow:hidden;">
      <a href="${link}" target="_blank">
        <img src="${item.postImage}" alt="Featured post" style="width:100%;border-radius:8px;display:block;transition:opacity 0.2s;" onmouseover="this.style.opacity=0.85" onmouseout="this.style.opacity=1">
      </a>
    </div>`;
  }
  if (item.featuredPostUrl) {
    return `<div class="personal-placeholder" style="margin-bottom:16px;">
      <a href="${item.featuredPostUrl}" target="_blank" style="font-size:13px;color:var(--yellow);font-weight:600;">View Featured Post →</a>
    </div>`;
  }
  return '';
}
