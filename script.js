/* ============================================
   SCRIPT.JS - Start Your Site Now Landing Page
   ============================================ */

function trackEvent(eventName, params = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
}

const BRAND_NAME = 'startyoursitenow';
const BRAND_LOGO = 'data:image/jpeg;base64,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';
const CONTACT_TARGET = '#contatti';
const BNB_URL = 'https://bnb-claude.vercel.app/';

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
      width: 46px;
      height: 46px;
      border-radius: 50%;
      overflow: hidden;
      flex: 0 0 46px;
      border: 1px solid rgba(167,139,250,0.28);
      box-shadow: 0 8px 24px rgba(0,0,0,0.24);
      background: #050508;
      display: grid;
      place-items: center;
    }
    .brand-mark img {
      width: 100% !important;
      height: 100% !important;
      max-width: none !important;
      object-fit: contain !important;
      object-position: center !important;
      display: block;
      border: 0 !important;
      border-radius: 0 !important;
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
    .brand-logo .brand-word {
      color: var(--white) !important;
    }
    .brand-logo .brand-word--accent {
      color: #8b5cf6 !important;
    }
    .navbar.scrolled .brand-mark {
      width: 42px;
      height: 42px;
      flex-basis: 42px;
    }
    .soluzione-text > .btn-primary {
      display: none !important;
    }
    .soluzione-text .check-list {
      margin-bottom: 0 !important;
    }
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
    .cta-form-box .btn-wa-form span {
      font-size: 19px;
      line-height: 1;
    }
    .faq {
      padding-bottom: 132px;
    }
    .cta-finale {
      padding-top: 132px;
    }
    .cta-finale::before,
    .cta-finale::after {
      content: none !important;
      display: none !important;
    }
    .footer .nav-logo.brand-logo {
      margin-right: 0 !important;
      justify-content: flex-start !important;
    }
    .footer .brand-mark {
      width: 40px;
      height: 40px;
      flex-basis: 40px;
    }
    .footer .brand-name {
      font-size: 18px;
    }
    @media (max-width: 900px) {
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 42px;
        height: 42px;
        flex-basis: 42px;
      }
      .brand-name {
        font-size: 16px;
      }
    }
    @media (max-width: 640px) {
      .nav-inner { gap: 12px; }
      .brand-logo { gap: 8px !important; }
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 36px;
        height: 36px;
        flex-basis: 36px;
      }
      .brand-name {
        font-size: 13px;
      }
      .faq { padding-bottom: 88px; }
      .cta-finale { padding-top: 88px; }
      .footer .brand-logo { gap: 10px !important; }
      .footer .brand-mark {
        width: 38px;
        height: 38px;
        flex-basis: 38px;
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
    if (link.textContent.includes('Vedi esempio') || link.href.includes('bnb-ebon.vercel.app')) {
      link.href = BNB_URL;
    }
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
  if (faqSection && ctaSection && faqSection.contains(ctaSection)) {
    faqSection.after(ctaSection);
  }

  const footer = document.querySelector('.footer');
  const footerLogo = footer?.querySelector('.nav-logo');
  if (footerLogo) {
    footerLogo.classList.add('brand-logo');
    footerLogo.setAttribute('aria-label', `${BRAND_NAME} - torna in cima`);
    footerLogo.innerHTML = brandMarkup();
  }
  if (footer) {
    document.body.appendChild(footer);
  }

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodesToClean = [];
  while (walker.nextNode()) {
    if (walker.currentNode.nodeValue.includes('-->')) {
      nodesToClean.push(walker.currentNode);
    }
  }
  nodesToClean.forEach((node) => {
    node.nodeValue = node.nodeValue.replace(/-->/g, '').trim();
  });
}

applyRequestedLandingUpdates();

// ============================================
// NAVBAR STICKY SCROLL
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ============================================
// REVEAL ON SCROLL
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.dataset.delay || 0, 10);

    setTimeout(() => {
      el.classList.add('visible');
    }, delay);

    revealObserver.unobserve(el);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -32px 0px'
});

document.querySelectorAll(
  '.problem-grid, .servizi-grid, .esempi-grid, .recensioni-grid, .pricing-grid, .attivita-grid'
).forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.dataset.delay = Math.min(i * 80, 400);
  });
});

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  if (!question) return;

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      question.setAttribute('aria-expanded', 'true');
    }
  });
});

// ============================================
// STICKY CTA MOBILE
// ============================================
const stickyCta = document.getElementById('stickyCta');

window.addEventListener('scroll', () => {
  stickyCta?.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

// ============================================
// SMOOTH SCROLL - link interni
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    scrollToSection(href);
  });
});

// ============================================
// COUNTER ANIMATO - statistiche hero
// ============================================
function animateCounter(el, target, suffix, duration = 1200) {
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

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

// ============================================
// PARALLAX LEGGERO - hero glow
// ============================================
const heroGlow = document.querySelector('.hero-glow');
if (heroGlow) {
  window.addEventListener('scroll', () => {
    heroGlow.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}

// ============================================
// FORM -> WHATSAPP
// ============================================
const btnWaForm = document.getElementById('btnWaForm');
if (btnWaForm) {
  btnWaForm.addEventListener('click', () => {
    const attivita = document.getElementById('f-attivita')?.value.trim();
    const messaggio = document.getElementById('f-messaggio')?.value.trim();

    let testo = 'Ciao! Vorrei una demo gratuita per il sito della mia attivita.';
    if (attivita) testo += `\n\nAttivita: ${attivita}`;
    if (messaggio) testo += `\n\n${messaggio}`;

    window.open(
      `https://wa.me/39XXXXXXXXXX?text=${encodeURIComponent(testo)}`,
      '_blank',
      'noopener,noreferrer'
    );

    trackEvent('Lead', { content_name: 'Form WhatsApp' });
  });
}

// ============================================
// META PIXEL - traccia click su CTA WhatsApp
// ============================================
document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('Lead', { content_name: 'WhatsApp CTA' });
  });
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
