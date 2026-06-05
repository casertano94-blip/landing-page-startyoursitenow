/* ============================================
   SCRIPT.JS - Start Your Site Now Landing Page
   ============================================ */

const BRAND_NAME = 'startyoursitenow';
const BRAND_LOGO = 'assets/brand-logo.png';
const CONTACT_TARGET = 'https://wa.me/393274813873?text=Ciao!%20Vorrei%20una%20demo%20gratuita%20per%20il%20sito%20della%20mia%20attivita.';
const BNB_URL = 'https://bnb-claude.vercel.app/';
const MOBILE_VIEWPORT_CONTENT = 'width=device-width, initial-scale=1, viewport-fit=cover';

function enforceMobileViewport() {
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    document.head.prepend(viewportMeta);
  }

  viewportMeta.setAttribute('content', MOBILE_VIEWPORT_CONTENT);
}

function injectMobileConversionStyles() {
  if (document.getElementById('mobileConversionUxStyles')) return;

  const style = document.createElement('style');
  style.id = 'mobileConversionUxStyles';
  style.textContent = `
    html {
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
      touch-action: pan-x pan-y;
    }

    body {
      width: 100%;
      max-width: 100%;
    }

    input,
    textarea,
    select,
    button {
      font-size: 16px;
    }

    .problem-grid .problem-card[aria-hidden="true"] {
      display: none;
    }

    .mobile-slider-indicator {
      display: none;
    }

    @keyframes mobileProblemMarquee {
      from { transform: translate3d(0, 0, 0); }
      to { transform: translate3d(calc(-50% - 8px), 0, 0); }
    }

    @keyframes swipeArrowPulse {
      0%, 100% {
        opacity: 0.75;
        transform: translate(-50%, -50%);
      }
      50% {
        opacity: 1;
        transform: translate(calc(-50% + 13px), -50%);
      }
    }

    @media (max-width: 640px) {
      .container {
        width: 100%;
        max-width: 100%;
        padding-inline: 16px;
      }

      .section {
        padding: 58px 0;
        overflow-x: clip;
      }

      .section-header {
        margin-bottom: 34px;
        padding-inline: 2px;
      }

      .section-header h2 {
        font-size: clamp(27px, 8vw, 34px);
        line-height: 1.12;
        letter-spacing: -0.4px;
      }

      .section-sub {
        max-width: 30rem;
        margin-inline: auto;
        font-size: 15px;
        line-height: 1.58;
      }

      .nav-inner {
        gap: 12px;
        padding-inline: 16px;
      }

      .btn-nav {
        display: none;
      }

      .problema .container {
        overflow: hidden;
      }

      .problem-grid {
        display: flex;
        width: max-content;
        max-width: none;
        gap: 16px;
        margin-left: calc((100vw - min(82vw, 310px)) / 2 - 16px);
        will-change: transform;
      }

      .problem-grid .problem-card[aria-hidden="true"] {
        display: block;
        pointer-events: none;
      }

      .problem-grid.is-marquee {
        animation: mobileProblemMarquee 24s linear infinite;
        animation-play-state: paused;
      }

      .problem-grid.is-marquee.is-running {
        animation-play-state: running;
      }

      .problem-grid.is-marquee:hover {
        animation-play-state: paused;
      }

      .problem-card {
        width: min(82vw, 310px);
        min-height: 176px;
        flex: 0 0 min(82vw, 310px);
        padding: 22px 20px;
      }

      .problem-card:hover,
      .servizio-card:hover,
      .pricing-card:hover,
      .pricing-card.featured:hover,
      .esempio-card:hover {
        transform: none;
      }

      .problem-icon {
        font-size: 28px;
        margin-bottom: 12px;
      }

      .problem-card h3 {
        font-size: 16px;
      }

      .problem-card p {
        font-size: 13.5px;
        line-height: 1.55;
      }

      .pricing-grid,
      .esempi-grid {
        display: flex;
        grid-template-columns: none;
        gap: 0;
        width: 100%;
        max-width: none;
        margin: 0;
        overflow-x: auto;
        overflow-y: visible;
        scroll-snap-type: x mandatory;
        scroll-padding-inline: 0;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }

      .pricing-grid::-webkit-scrollbar,
      .esempi-grid::-webkit-scrollbar {
        display: none;
      }

      .pricing-card,
      .esempio-card {
        flex: 0 0 100%;
        width: 100%;
        min-width: 100%;
        scroll-snap-align: center;
        scroll-snap-stop: always;
      }

      .pricing-card {
        min-height: 0;
        padding: 28px 22px;
      }

      .pricing-card > .pricing-cta,
      .pricing-card > .btn-primary,
      .pricing-card > .btn-ghost-blue {
        white-space: normal !important;
        line-height: 1.1 !important;
        font-size: 14px !important;
      }

      .pricing-card:first-child::after,
      .esempio-card:first-child::after {
        content: "\\2192";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;
        display: grid;
        width: 48px;
        height: 48px;
        place-items: center;
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 999px;
        background: rgba(6,6,10,0.82);
        color: var(--white);
        font-family: var(--font-display);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 14px 34px rgba(0,0,0,0.35);
        pointer-events: none;
        animation: swipeArrowPulse 1.55s ease-in-out infinite;
      }

      .pricing-grid.slider-touched .pricing-card:first-child::after,
      .esempi-grid.slider-touched .esempio-card:first-child::after {
        opacity: 0;
        animation: none;
      }

      .mobile-slider-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        margin-top: 16px;
        min-height: 12px;
        transition: opacity 0.25s ease, transform 0.25s ease;
      }

      .mobile-slider-indicator span {
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: rgba(248,248,255,0.24);
        transition: width 0.25s ease, background 0.25s ease;
      }

      .mobile-slider-indicator span.is-active {
        width: 22px;
        background: var(--electric-bright);
      }

      .mobile-slider-indicator.is-muted {
        opacity: 0.38;
        transform: scale(0.92);
      }

      .servizi-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
      }

      .servizio-card {
        min-width: 0;
        padding: 16px 12px;
        border-radius: 14px;
      }

      .servizio-icon {
        font-size: 22px;
        margin-bottom: 10px;
      }

      .servizio-card h3 {
        font-size: 13.5px;
        line-height: 1.18;
        margin-bottom: 7px;
        overflow-wrap: anywhere;
      }

      .servizio-card p {
        font-size: 12.5px;
        line-height: 1.42;
      }
    }

    @media (max-width: 380px) {
      .container,
      .nav-inner {
        padding-inline: 14px;
      }

      .hero-title {
        font-size: 34px;
        letter-spacing: -0.5px;
      }

      .hero-sub {
        font-size: 15.5px;
      }

      .problem-grid {
        margin-left: calc((100vw - min(82vw, 310px)) / 2 - 14px);
      }

      .servizi-grid {
        gap: 9px;
      }

      .servizio-card {
        padding: 14px 10px;
      }

      .servizio-card h3 {
        font-size: 12.8px;
      }

      .servizio-card p {
        font-size: 12px;
      }

      .pricing-card {
        padding: 26px 18px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .problem-grid.is-marquee,
      .pricing-card:first-child::after,
      .esempio-card:first-child::after {
        animation: none;
      }
    }
  `;

  document.head.appendChild(style);
}

function trackEvent(eventName, params = {}) {
  if (typeof fbq !== 'undefined') fbq('track', eventName, params);
}

function scrollToSection(selector) {
  const target = document.querySelector(selector);
  
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
function closeMobileMenu() {
  mobileMenu?.classList.remove('open');
  mobileMenuToggle?.setAttribute('aria-expanded', 'false');
}
mobileMenuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.toggle('open') || false;
  mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
});
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));

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
    navDemoButton.setAttribute('target', '_blank');
    navDemoButton.setAttribute('rel', 'noopener noreferrer');
    navDemoButton.setAttribute('aria-label', 'Scrivi su WhatsApp per richiedere una demo gratuita');
    navDemoButton.textContent = 'WhatsApp';
  }

  document.querySelectorAll('a[href*="bnb-ebon.vercel.app"], a[aria-label*="B&B"]').forEach((link) => {
    if (link.textContent.includes('Vedi esempio') || link.href.includes('bnb-ebon.vercel.app')) link.href = BNB_URL;
  });

  document.querySelector('.soluzione-text > .btn-primary')?.remove();

  document.querySelectorAll('.pricing-card > a').forEach((button) => {
    button.classList.add('pricing-cta');
    button.setAttribute('href', CONTACT_TARGET);
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noopener noreferrer');
    button.setAttribute('aria-label', 'Chiedi su WhatsApp se questa opzione va bene per la tua attivita');
    button.textContent = 'Chiedi se va bene per te';
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

enforceMobileViewport();
applyRequestedLandingUpdates();
// Mobile conversion styles are kept in style.css for predictable first render.

function setupProblemMarquee() {
  const grid = document.querySelector('.problem-grid');
  if (!grid || grid.dataset.marqueeReady === 'true') return;

  const cards = Array.from(grid.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.remove('reveal', 'visible');
    clone.removeAttribute('data-delay');
    clone.setAttribute('aria-hidden', 'true');
    grid.appendChild(clone);
  });

  grid.classList.add('is-marquee');
  grid.dataset.marqueeReady = 'true';

  if ('IntersectionObserver' in window) {
    const section = grid.closest('.problema') || grid;
    const marqueeObserver = new IntersectionObserver((entries) => {
      grid.classList.toggle('is-running', entries[0].isIntersecting);
    }, { threshold: 0.18 });
    marqueeObserver.observe(section);
  } else {
    grid.classList.add('is-running');
  }
}

function setupMobileSnapSlider(selector) {
  const slider = document.querySelector(selector);
  if (!slider || slider.dataset.sliderReady === 'true') return;

  const cards = Array.from(slider.children).filter(child => !child.classList.contains('mobile-slider-indicator'));
  if (cards.length < 2) return;

  const indicator = document.createElement('div');
  indicator.className = 'mobile-slider-indicator';
  indicator.setAttribute('aria-hidden', 'true');

  cards.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === 0) dot.classList.add('is-active');
    indicator.appendChild(dot);
  });

  slider.after(indicator);

  let touched = false;
  let scrollTimeout;

  function setTouched() {
    if (touched) return;
    touched = true;
    slider.classList.add('slider-touched');
    indicator.classList.add('is-muted');
  }

  function updateIndicator() {
    const activeIndex = Math.round(slider.scrollLeft / Math.max(slider.clientWidth, 1));
    indicator.querySelectorAll('span').forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeIndex);
    });
  }

  slider.dataset.sliderReady = 'true';
  slider.addEventListener('pointerdown', setTouched, { passive: true });
  slider.addEventListener('touchstart', setTouched, { passive: true });
  slider.addEventListener('wheel', setTouched, { passive: true });
  slider.addEventListener('scroll', () => {
    window.clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(updateIndicator, 40);
  }, { passive: true });
  window.addEventListener('resize', updateIndicator);
}

// Mobile cards stay static so visitors can read and compare without hidden horizontal gestures.

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
stickyCta?.classList.add('visible');

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
    window.open(`https://wa.me/393274813873?text=${encodeURIComponent(testo)}`, '_blank', 'noopener,noreferrer');
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
