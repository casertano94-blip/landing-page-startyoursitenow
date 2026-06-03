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
