/* ============================================
   SCRIPT.JS — Start Your Site Now Landing Page
   ============================================ */

function trackEvent(eventName, params = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
}

const BRAND_NAME = 'startyoursitenow';
const BRAND_LOGO = 'assets/start-your-site-now-logo.svg';
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
      <img src="${BRAND_LOGO}" alt="" />
    </span>
    <span class="brand-name">${BRAND_NAME}</span>
  `;
}

function applyRequestedLandingUpdates() {
  const style = document.createElement('style');
  style.textContent = `
    .brand-logo {
      display: inline-flex !important;
      align-items: center !important;
      gap: 12px !important;
      width: auto !important;
      height: auto !important;
      overflow: visible !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      margin-right: auto;
      letter-spacing: 0 !important;
      font-size: 0 !important;
    }
    .brand-mark {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      flex: 0 0 auto;
      border: 1px solid rgba(167,139,250,0.28);
      box-shadow: 0 8px 24px rgba(0,0,0,0.24);
      background: #050508;
    }
    .brand-mark img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      display: block;
    }
    .brand-name {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      color: var(--white);
      line-height: 1;
      letter-spacing: 0;
      text-transform: lowercase;
    }
    .navbar.scrolled .brand-mark {
      width: 42px;
      height: 42px;
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
    }
    .footer .brand-mark {
      width: 40px;
      height: 40px;
    }
    .footer .brand-name {
      font-size: 18px;
    }
    @media (max-width: 640px) {
      .nav-inner { gap: 14px; }
      .brand-logo { gap: 8px !important; }
      .brand-mark,
      .navbar.scrolled .brand-mark {
        width: 38px;
        height: 38px;
      }
      .brand-name {
        font-size: 14px;
        max-width: 118px;
      }
      .faq { padding-bottom: 88px; }
      .cta-finale { padding-top: 88px; }
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
    whatsappButton.innerHTML = '<span aria-hidden="true">💬</span><span>Prepara messaggio WhatsApp</span>';
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
// SMOOTH SCROLL — link interni
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
// COUNTER ANIMATO — statistiche hero
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
// PARALLAX LEGGERO — hero glow
// ============================================
const heroGlow = document.querySelector('.hero-glow');
if (heroGlow) {
  window.addEventListener('scroll', () => {
    heroGlow.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  }, { passive: true });
}

// ============================================
// FORM → WHATSAPP
// ============================================
const btnWaForm = document.getElementById('btnWaForm');
if (btnWaForm) {
  btnWaForm.addEventListener('click', () => {
    const attivita = document.getElementById('f-attivita')?.value.trim();
    const messaggio = document.getElementById('f-messaggio')?.value.trim();

    let testo = 'Ciao! Vorrei una demo gratuita per il sito della mia attività.';
    if (attivita) testo += `\n\n🏢 Attività: ${attivita}`;
    if (messaggio) testo += `\n\n💬 ${messaggio}`;

    window.open(
      `https://wa.me/39XXXXXXXXXX?text=${encodeURIComponent(testo)}`,
      '_blank',
      'noopener,noreferrer'
    );

    trackEvent('Lead', { content_name: 'Form WhatsApp' });
  });
}

// ============================================
// META PIXEL — traccia click su CTA WhatsApp
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
