/**
 * Großmutters Kochbuch — Menü-Logik
 * Burger-Menu + Untermenü für Desktop & Mobile
 */

document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burgerBtn');
  const navMenu   = document.getElementById('navMenu');

  // ── BURGER TOGGLE (Mobile) ──────────────────────────────
  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // ── UNTERMENÜS AUF MOBILE PER KLICK ────────────────────
  const hasSubmenuItems = document.querySelectorAll('.nav-item.has-submenu');

  hasSubmenuItems.forEach(function (item) {
    const link = item.querySelector(':scope > a');
    if (!link) return;

    link.addEventListener('click', function (e) {
      // Nur auf Mobile (burger sichtbar) per Klick öffnen
      if (window.getComputedStyle(burgerBtn).display !== 'none') {
        e.preventDefault();
        const isOpen = item.classList.toggle('open');
        // Andere schließen
        hasSubmenuItems.forEach(function (other) {
          if (other !== item) other.classList.remove('open');
        });
      }
    });
  });

  // ── KLICK AUSSERHALB SCHLIESST MENÜ ────────────────────
  document.addEventListener('click', function (e) {
    if (navMenu && !navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
      navMenu.classList.remove('open');
      burgerBtn.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', false);
    }
  });

  // ── AKTIVEN MENÜPUNKT MARKIEREN ─────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && href !== '#' && href === currentPage) {
      a.style.color = 'var(--gold-light)';
      a.style.fontWeight = '700';
      // Parent-Menüpunkt auch hervorheben
      const parentItem = a.closest('.has-submenu');
      if (parentItem) {
        const parentLink = parentItem.querySelector(':scope > a');
        if (parentLink) parentLink.style.color = 'var(--gold-light)';
      }
    }
  });

  // ── SMOOTH SCROLL FÜR ALPHA-NAV ─────────────────────────
  document.querySelectorAll('.alpha-nav a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const targetId = a.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
