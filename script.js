/* StartYourSiteNow landing page interactions */

const CONTACT_TARGET = 'https://api.whatsapp.com/send?phone=393274813873&text=Ciao!%20Vorrei%20una%20demo%20gratuita%20per%20il%20sito%20della%20mia%20attivita.';
const MOBILE_VIEWPORT_CONTENT = 'width=device-width, initial-scale=1, viewport-fit=cover';

function trackEvent(eventName, params = {}) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
}

function enforceMobileViewport() {
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.name = 'viewport';
    document.head.prepend(viewportMeta);
  }

  viewportMeta.setAttribute('content', MOBILE_VIEWPORT_CONTENT);
}

function setupMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.setAttribute('aria-expanded', 'false');

  function closeMenu() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Apri menu');
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Chiudi menu' : 'Apri menu');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function setupNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const update = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

function setupFaq() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach((openItem) => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
}

function setupStickyCta() {
  const stickyCta = document.getElementById('stickyCta');
  if (!stickyCta) return;

  const update = () => {
    stickyCta.classList.toggle('visible', window.scrollY > 320);
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function setupWhatsappForm() {
  const button = document.getElementById('btnWaForm');
  if (!button) return;

  button.addEventListener('click', () => {
    const attivita = document.getElementById('f-attivita')?.value.trim();
    const messaggio = document.getElementById('f-messaggio')?.value.trim();
    let text = 'Ciao! Vorrei una demo gratuita per il sito della mia attivita.';

    if (attivita) text += `\n\nAttivita: ${attivita}`;
    if (messaggio) text += `\n\n${messaggio}`;

    window.open(`https://api.whatsapp.com/send?phone=393274813873&text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    trackEvent('Lead', { content_name: 'Form WhatsApp' });
  });
}

function setupWhatsappTracking() {
  document.querySelectorAll('a[href*="api.whatsapp.com"], a[href*="wa.me"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('Lead', { content_name: 'WhatsApp CTA' });
    });
  });
}

function setupCtaViewTracking() {
  const cta = document.querySelector('.cta-finale');
  if (!cta || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    trackEvent('ViewContent', { content_name: 'CTA Finale' });
    observer.disconnect();
  }, { threshold: 0.4 });

  observer.observe(cta);
}

enforceMobileViewport();
setupMobileMenu();
setupNavbar();
setupRevealAnimations();
setupFaq();
setupSmoothAnchors();
setupStickyCta();
setupWhatsappForm();
setupWhatsappTracking();
setupCtaViewTracking();
