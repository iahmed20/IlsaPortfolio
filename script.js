// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after tapping a link (useful on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Dark mode switch
const themeSwitch = document.getElementById('themeSwitch');
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function isDark() {
  const theme = document.documentElement.dataset.theme;
  return theme ? theme === 'dark' : darkQuery.matches;
}

function syncThemeSwitch() {
  if (themeSwitch) themeSwitch.setAttribute('aria-checked', String(isDark()));
}

if (themeSwitch) {
  syncThemeSwitch();
  themeSwitch.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncThemeSwitch();
  });
  darkQuery.addEventListener('change', syncThemeSwitch);
}

// Float content in as it scrolls into view
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealTargets = document.querySelectorAll(
    'main > section:not(.hero):not(.art-intro) > .section-heading, ' +
    'main > section:not(.hero):not(.art-intro) > .section-intro, ' +
    '.log-group, .log-entry, .stack-group, .experience-entry, .art-piece, .contact__email'
  );

  const revealObserver = new IntersectionObserver(entries => {
    // Stagger items that arrive together so they drift in one after another
    entries.filter(entry => entry.isIntersecting).forEach((entry, i) => {
      entry.target.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealTargets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

