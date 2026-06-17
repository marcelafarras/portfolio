// Navbar scroll behavior
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.timeline-item, .skill-card, .work-card, .personal-card, .cert-card, .ai-placeholder-card, .ai-category, .step, .about-left, .about-right, .contact-left, .contact-right'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ── CONTACT FORM → N8N WEBHOOK ───────────────────────────────
// TEST URL  : use this while testing in N8N (workflow open, test mode on)
// PROD URL  : switch to this after you activate the workflow in N8N
//             Change "webhook-test" → "webhook" in the URL below
const N8N_WEBHOOK = "https://n8n-bjje2k7bz6nk.jkt5.sumopod.my.id/webhook/88e1a423-75f7-47b7-8a12-25aa7e2aa2cc";

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const [name, email, subject, message] = [...this.querySelectorAll('input, textarea')].map(el => el.value);

  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    await fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message, timestamp: new Date().toISOString() }),
    });
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
    this.reset();
  } catch {
    btn.textContent = 'Failed — try emailing directly';
    btn.style.background = '#ef4444';
  }

  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.disabled = false;
  }, 4000);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--yellow)' : '';
  });
});
