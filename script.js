/* ============================================
   SCRIPT.JS — WebLocal Landing Page
   ============================================ */

// ============================================
// META PIXEL — tracking helper
// Definito prima di tutto per evitare errori
// ============================================
function trackEvent(eventName, params = {}) {
  if (typeof fbq !== 'undefined') {
    fbq('track', eventName, params);
  }
}


// ============================================
// NAVBAR STICKY SCROLL
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });


// ============================================
// REVEAL ON SCROLL
// Stagger corretto: basato sull'ordine di trigger,
// non sul DOM parent (risolve il bug delle grid)
// ============================================
const revealElements = document.querySelectorAll('.reveal');
let revealQueue = 0;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const delay = parseInt(el.dataset.delay || 0);

    setTimeout(() => {
      el.classList.add('visible');
    }, delay);

    revealObserver.unobserve(el);
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -32px 0px'
});

// Assegna delay progressivo agli elementi della stessa griglia
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

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Chiudi tutto
    faqItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Apri se era chiuso
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
  stickyCta.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });


// ============================================
// SMOOTH SCROLL — link interni
// (gestito via JS per compatibilità Safari + navbar offset)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const offset = navbar.offsetHeight + 16;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


// ============================================
// COUNTER ANIMATO — statistiche hero
// ============================================
function animateCounter(el, target, suffix, duration = 1200) {
  const startTime = performance.now();

  const update = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(eased * target);

    if (suffix === 'h')  el.textContent = current + 'h';
    if (suffix === '%')  el.textContent = current + '%';
    if (suffix === '+')  el.textContent = '+' + current;

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
      const nums     = document.querySelectorAll('.stat-num');
      // [0]=48h, [1]=100%, [2]=statico "0€" — anima solo i primi due
      animateCounter(nums[0], 48, 'h');
      animateCounter(nums[1], 100, '%');
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
// Compone un messaggio preformattato e apre WA
// ============================================
const btnWaForm = document.getElementById('btnWaForm');
if (btnWaForm) {
  btnWaForm.addEventListener('click', () => {
    const attivita  = document.getElementById('f-attivita').value.trim();
    const messaggio = document.getElementById('f-messaggio').value.trim();

    let testo = 'Ciao! Vorrei una demo gratuita per il sito della mia attività.';
    if (attivita)  testo += `\n\n🏢 Attività: ${attivita}`;
    if (messaggio) testo += `\n\n💬 ${messaggio}`;

    window.open(
      `https://wa.me/39XXXXXXXXXX?text=${encodeURIComponent(testo)}`,
      '_blank',
      'noopener,noreferrer'
    );

    // <!-- META PIXEL: traccia invio form -->
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

// Traccia arrivo alla sezione contatti
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

// ============================================
// AGGIORNAMENTI RICHIESTI — portfolio, navbar, FAQ/CTA
// ============================================
(function applyRequestedLandingUpdates() {
  const logoSrc = 'data:image/jpeg;base64,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';

  const style = document.createElement('style');
  style.textContent = `
    .navbar .nav-logo.nav-logo-image {
      display: inline-flex;
      align-items: center;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      overflow: hidden;
      background: #050508;
      border: 1px solid rgba(167,139,250,0.28);
      box-shadow: 0 8px 24px rgba(0,0,0,0.24);
      margin-right: auto;
      letter-spacing: 0;
      font-size: 0;
    }
    .navbar .nav-logo.nav-logo-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .navbar.scrolled .nav-logo.nav-logo-image {
      width: 50px;
      height: 50px;
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
    @media (max-width: 640px) {
      .faq { padding-bottom: 88px; }
      .cta-finale { padding-top: 88px; }
      .navbar .nav-logo.nav-logo-image,
      .navbar.scrolled .nav-logo.nav-logo-image {
        width: 46px;
        height: 46px;
      }
    }
  `;
  document.head.appendChild(style);

  const navLogo = document.querySelector('.navbar .nav-logo');
  if (navLogo) {
    navLogo.classList.add('nav-logo-image');
    navLogo.setAttribute('aria-label', 'Start Your Site Now - Homepage');
    navLogo.innerHTML = `<img src="${logoSrc}" alt="Start Your Site Now">`;
  }

  const navDemoButton = document.querySelector('.navbar .btn-nav');
  if (navDemoButton) {
    navDemoButton.setAttribute('href', '#contatti');
    navDemoButton.removeAttribute('target');
    navDemoButton.removeAttribute('rel');
    navDemoButton.setAttribute('aria-label', "Vai all'ultima sezione per richiedere una demo gratuita");
  }

  document.querySelectorAll('a[href*="bnb-ebon.vercel.app"], a[aria-label*="B&B"]').forEach((link) => {
    if (link.textContent.includes('Vedi esempio') || link.href.includes('bnb-ebon.vercel.app')) {
      link.href = 'https://bnb-claude.vercel.app/';
    }
  });

  const faqSection = document.getElementById('faq');
  const ctaSection = document.getElementById('contatti');
  if (faqSection && ctaSection && faqSection.contains(ctaSection)) {
    faqSection.after(ctaSection);
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
})();
