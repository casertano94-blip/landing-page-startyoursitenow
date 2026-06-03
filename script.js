/* ============================================
   SCRIPT.JS - Start Your Site Now Landing Page
   ============================================ */

const BRAND_NAME = 'startyoursitenow';
const BRAND_LOGO = 'assets/start-your-site-now-full-logo-circle.svg';
const CONTACT_TARGET = '#contatti';
const BNB_URL = 'https://bnb-claude.vercel.app/';

function trackEvent(eventName, params = {}) {
  if (typeof fbq !== 'undefined') fbq('track', eventName, params);
}

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  const navbar = document.getElementById('navbar');
  if (!target) return;

  const offset = (navbar?.offsetHeight || 0) + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function brandMarkup() {
  return `
    <span class="brand-mark" aria-hidden="true">
      <img src="${BRAND_LOGO}" alt="" decoding="async" />
    </span>
    <span class="brand-name" aria-label="${BRAND_NAME}">
      <span class="brand-word">start</span><span class="brand-word brand-word--accent">your</span><span class="brand-word">site</span><span class="brand-word brand-word--accent">now</span>
    </span>
  `;
}

function applyRequestedLandingUpdates() {
  const style = document.createElement('style');
  style.textContent = `
    .brand-logo {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 12px !important;
      width: auto !important;
      height: auto !important;
      max-width: 100% !important;
      overflow: visible !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      margin-right: auto;
      letter-spacing: 0 !important;
      font-size: 0 !important;
      line-height: 1 !important;
      flex: 0 1 auto;
      min-width: 0;
      text-decoration: none !important;
    }
    .brand-mark {
      width: 74px;
      height: 74px;
      aspect-ratio: 1 / 1;
      border-radius: 999px !important;
      clip-path: circle(50% at 50% 50%);
      overflow: hidden !important;
      flex: 0 0 74px;
      border: 0 !important;
      box-shadow: 0 10px 30px rgba(0,0,0,0.28);
      background: transparent !important;
      display: grid;
      place-items: center;
    }
    .brand-mark img {
      width: 100% !important;
      height: 100% !important;
      max-width: none !important;
      object-fit: cover !important;
      object-position: center !important;
      display: block;
      border: 0 !important;
      border-radius: 999px !important;
      box-shadow: none !important;
      background: transparent !important;
      transform: none !important;
      filter: none !important;
      -webkit-filter: none !important;
      opacity: 1 !important;
      mix-blend-mode: normal !important;
    }
    .brand-name {
      display: inline-flex;
      align-items: baseline;
      flex: 0 1 auto;
      min-width: 0;
      white-space: nowrap;
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 0;
      text-transform: lowercase;
    }
    .brand-logo .brand-word { color: var(--white) !important; }
    .brand-logo .brand-word--accent { color: #8b5cf6 !important; }
    .navbar.scrolled .brand-mark {
      width: 64px;
      height: 64px;
      flex-basis: 64px;
    }
    .soluzione-text > .btn-primary { display: none !important; }
    .soluzione-text .check-list { margin-bottom: 0 !important; }
    .pricing-card {
      display: flex;
      flex-direction: column;
      min-height: 100%;
    }
    .pricing-card > .pricing-cta {
      width: 100% !important;
      height: 52px !important;
      min-height: 52px !important;
      margin-top: auto !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 0 !important;
      background: var(--electric) !important;
      color: var(--white) !important;
      border: 1px solid rgba(255,255,255,0.14) !important;
      border-radius: 10px !important;
      padding: 14px 20px !important;
      font-family: var(--font-display) !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      letter-spacing: 0 !important;
      line-height: 1 !important;
      transition: var(--transition) !important;
      text-align: center !important;
      white-space: nowrap !important;
    }
    .pricing-card > .pricing-cta:hover {
      color: var(--white) !important;
      background: var(--electric-bright) !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 34px rgba(139,92,246,0.36) !important;
    }
    .cta-form-box .btn-wa-form {
      width: 100%;
      min-height: 58px;
      margin-top: 14px;
      padding: 18px 20px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.18);
      background: linear-gradient(135deg, #25D366 0%, var(--electric) 68%, var(--electric-bright) 100%);
      color: white;
      font-family: var(--font-display);
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 0;
      gap: 12px;
      box-shadow: 0 14px 38px rgba(37,211,102,0.16), 0 16px 46px rgba(139,92,246,0.18);
    }
    .cta-form-box .btn-wa-form:hover {
      background: linear-gradient(135deg, #2ee879 0%, var(--electric-bright) 72%, #c4b5fd 100%);
      transform: translateY(-3px);
      box-shadow: 0 18px 46px rgba(37,211,102,0.22), 0 22px 58px rgba(139,92,246,0.30);
    }
    .cta-form-box .btn-wa-form span { font-size: 19px; line-height: 1; }
    .faq { padding-bottom: 132px; }
    .cta-finale { padding-top: 132px; }
    .cta-finale::before,
    .cta-finale::after { content: none !important; display: none !important; }
    .footer .nav-logo.brand-logo {
      margin-right: 0 !important;
      justify-content: flex-start !important;
    }
    .footer .brand-mark {
      width: 64px;
      height: 64px;
      flex-basis: 64px;
    }
    .footer .brand-name { font-size: 18px; }
    @media (max-width: 900px) {
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 62px;
        height: 62px;
        flex-basis: 62px;
      }
      .brand-name { font-size: 16px; }
    }
    @media (max-width: 640px) {
      .nav-inner { gap: 10px; }
      .brand-logo { gap: 8px !important; }
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 48px;
        height: 48px;
        flex-basis: 48px;
      }
      .brand-name { font-size: 12px; }
      .faq { padding-bottom: 88px; }
      .cta-finale { padding-top: 88px; }
      .footer .brand-logo { gap: 10px !important; }
      .footer .brand-mark {
        width: 56px;
        height: 56px;
        flex-basis: 56px;
      }
      .footer .brand-name { font-size: 16px; }
    }
  `;
  document.head.appendChild(style);

  const navLogo = document.querySelector('.navbar .nav-logo');
  if (navLogo) {
    navLogo.classList.add('brand-logo');
    navLogo.setAttribute('aria-label', `${BRAND_NAME} - Homepage`);
    navLogo.innerHTML = brandMarkup();
  }

  const navDemoButton = document.querySelector('.navbar .btn-nav');
  if (navDemoButton) {
    navDemoButton.setAttribute('href', CONTACT_TARGET);
    navDemoButton.removeAttribute('target');
    navDemoButton.removeAttribute('rel');
    navDemoButton.setAttribute('aria-label', "Vai all'ultima sezione per richiedere una demo gratuita");
  }

  document.querySelectorAll('a[href*="bnb-ebon.vercel.app"], a[aria-label*="B&B"]').forEach((link) => {
    if (link.textContent.includes('Vedi esempio') || link.href.includes('bnb-ebon.vercel.app')) link.href = BNB_URL;
  });

  document.querySelector('.soluzione-text > .btn-primary')?.remove();

  document.querySelectorAll('.pricing-card > a').forEach((button) => {
    button.classList.add('pricing-cta');
    button.setAttribute('href', CONTACT_TARGET);
    button.setAttribute('aria-label', 'Richiedi la demo gratuita');
    button.textContent = 'Richiedi la demo gratuita';
  });

  const whatsappButton = document.getElementById('btnWaForm');
  if (whatsappButton) {
    whatsappButton.innerHTML = '<span aria-hidden="true">WhatsApp</span><span>Prepara messaggio WhatsApp</span>';
    whatsappButton.setAttribute('aria-label', 'Prepara un messaggio WhatsApp con i dati inseriti');
  }

  const faqSection = document.getElementById('faq');
  const ctaSection = document.getElementById('contatti');
  if (faqSection && ctaSection && faqSection.contains(ctaSection)) faqSection.after(ctaSection);

  const footer = document.querySelector('.footer');
  const footerLogo = footer?.querySelector('.nav-logo');
  if (footerLogo) {
    footerLogo.classList.add('brand-logo');
    footerLogo.setAttribute('aria-label', `${BRAND_NAME} - torna in cima`);
    footerLogo.innerHTML = brandMarkup();
  }
  if (footer) document.body.appendChild(footer);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodesToClean = [];
  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.includes('-->')) nodesToClean.push(walker.currentNode);
  }
  nodesToClean.forEach((node) => {
    node.nodeValue = node.nodeValue.replace(/-->/g, '').trim();
  });
}

applyRequestedLandingUpdates();

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = parseInt(el.dataset.delay || 0, 10);
    setTimeout(() => el.classList.add('visible'), delay);
    revealObserver.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.problem-grid, .servizi-grid, .esempi-grid, .recensioni-grid, .pricing-grid, .attivita-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = Math.min(i * 80, 400);
  });
});
revealElements.forEach(el => revealObserver.observe(el));

document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  if (!question) return;
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

const stickyCta = document.getElementById('stickyCta');
window.addEventListener('scroll', () => {
  stickyCta?.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    if (!document.querySelector(href)) return;
    e.preventDefault();
    scrollToSection(href);
  });
});

function animateCounter(el, target, suffix, duration = 1200) {
  const startTime = performance.now();
  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const current = Math.round((1 - Math.pow(1 - progress, 3)) * target);
    if (suffix === 'h') el.textContent = current + 'h';
    if (suffix === '%') el.textContent = current + '%';
    if (suffix === '+') el.textContent = '+' + current;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  let triggered = false;
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      const nums = document.querySelectorAll('.stat-num');
      if (nums[0]) animateCounter(nums[0], 48, 'h');
      if (nums[1]) animateCounter(nums[1], 100, '%');
      statsObserver.disconnect();
    }
  }, { threshold: 0.5 });
  statsObserver.observe(statsSection);
}

const heroGlow = document.querySelector('.hero-glow');
if (heroGlow) {
  window.addEventListener('scroll', () => {
    heroGlow.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}

const btnWaForm = document.getElementById('btnWaForm');
if (btnWaForm) {
  btnWaForm.addEventListener('click', () => {
    const attivita = document.getElementById('f-attivita')?.value.trim();
    const messaggio = document.getElementById('f-messaggio')?.value.trim();
    let testo = 'Ciao! Vorrei una demo gratuita per il sito della mia attivita.';
    if (attivita) testo += `\n\nAttivita: ${attivita}`;
    if (messaggio) testo += `\n\n${messaggio}`;
    window.open(`https://wa.me/39XXXXXXXXXX?text=${encodeURIComponent(testo)}`, '_blank', 'noopener,noreferrer');
    trackEvent('Lead', { content_name: 'Form WhatsApp' });
  });
}

document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => trackEvent('Lead', { content_name: 'WhatsApp CTA' }));
});

const ctaFinale = document.querySelector('.cta-finale');
if (ctaFinale) {
  const pixelObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      trackEvent('ViewContent', { content_name: 'CTA Finale' });
      pixelObserver.disconnect();
    }
  }, { threshold: 0.4 });
  pixelObserver.observe(ctaFinale);
}
