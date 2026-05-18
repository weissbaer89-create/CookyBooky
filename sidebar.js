/* ═══════════════════════════════════════════════════════════
   BELLA CUCINA – Gemeinsames Sidebar & Theme JS
   Wird von index.html und allen Rezeptseiten eingebunden.
   Erwartet: RECIPES, COOKBOOK_TITLE, COOKBOOK_SUBTITLE aus recipes.js
   Optional:  CURRENT_FILE (string) für aktive Markierung
   Optional:  INDEX_PREFIX (string, z.B. '../') für Rezeptseiten
   ═══════════════════════════════════════════════════════════ */

(function () {
  /* ── 1. Theme ─────────────────────────────────────────── */
  const THEME_KEY = 'bellacucina-theme';

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    // Sync alle Toggle-Elemente
    document.querySelectorAll('.toggle-track').forEach(t => t.classList.toggle('on', dark));
    document.querySelectorAll('.theme-label').forEach(l => l.textContent = dark ? 'Dunkel' : 'Hell');
    document.querySelectorAll('.topbar-theme-btn').forEach(b => b.textContent = dark ? '☀️' : '🌙');
  }

  function toggleTheme() {
    const isDark = !document.documentElement.classList.contains('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    applyTheme(isDark);
  }

  // Gespeichertes Theme laden – Standard: dunkel
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = saved ? saved === 'dark' : true; // Standard = dunkel
  applyTheme(prefersDark);

  // Globale Funktion für onclick-Handler
  window.toggleTheme = toggleTheme;

  /* ── 2. Sidebar rendern ───────────────────────────────── */
  function buildSidebar(prefix, currentFile) {
    prefix = prefix || '';

    // Logo & Subtitle
    const sbLogo = document.getElementById('sb-logo');
    const sbSub  = document.getElementById('sb-sub');
    if (sbLogo) {
      sbLogo.textContent = COOKBOOK_TITLE;
      sbLogo.href = prefix + 'index.html';
    }
    if (sbSub) sbSub.textContent = COOKBOOK_SUBTITLE;

    // Footer-Logo (Rezeptseiten)
    const fl = document.getElementById('footer-logo');
    if (fl) fl.textContent = COOKBOOK_TITLE;

    const sbNav = document.getElementById('sb-nav-body');
    if (!sbNav) return;

    // Suche
    const searchInput = document.getElementById('sb-search-input');
    const searchClear = document.getElementById('sb-search-clear');
    const searchResults = document.getElementById('sb-search-results');
    const searchResultsList = document.getElementById('sb-search-results-list');

    // Kategorien
    RECIPES.forEach((cat, catIdx) => {
      const div = document.createElement('div');
      div.className = 'nav-cat';
      div.id = 'nav-cat-' + catIdx;

      const hasActive = currentFile && cat.items.some(r => r.file.endsWith(currentFile));
      if (hasActive) div.classList.add('open');

      div.innerHTML = `
        <button class="nav-cat-toggle" data-cat="${catIdx}">
          <span class="nav-cat-icon">${cat.icon}</span>
          <span class="nav-cat-name">${cat.category}</span>
          <span class="nav-cat-count">${cat.items.length}</span>
          <span class="nav-cat-chevron">›</span>
        </button>
        <ul class="nav-items">
          ${cat.items.map(r => {
            const isActive = currentFile && r.file.endsWith(currentFile);
            return `<li><a href="${prefix}${r.file}" class="${isActive ? 'active' : ''}">
              ${r.title}
              <span class="nav-time">⏱ ${r.time} · ${r.difficulty}</span>
            </a></li>`;
          }).join('')}
        </ul>`;
      sbNav.appendChild(div);

      // Toggle
      div.querySelector('.nav-cat-toggle').addEventListener('click', () => {
        div.classList.toggle('open');
      });
    });

    /* ── Suche ──────────────────────────────────────────── */
    if (!searchInput) return;

    const allItems = RECIPES.flatMap(cat =>
      cat.items.map(r => ({ ...r, category: cat.category, icon: cat.icon, prefix }))
    );

    function highlight(text, q) {
      if (!q) return text;
      const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(re, '<mark>$1</mark>');
    }

    function runSearch(q) {
      q = q.trim();
      searchClear.classList.toggle('visible', q.length > 0);

      if (!q) {
        searchResults.classList.remove('visible');
        sbNav.style.display = '';
        return;
      }
      sbNav.style.display = 'none';
      searchResults.classList.add('visible');

      const lower = q.toLowerCase();
      const hits = allItems.filter(r =>
        r.title.toLowerCase().includes(lower) ||
        r.description.toLowerCase().includes(lower) ||
        r.tags.some(t => t.toLowerCase().includes(lower)) ||
        r.category.toLowerCase().includes(lower)
      );

      if (!hits.length) {
        searchResultsList.innerHTML = `<div class="sb-no-results">Keine Rezepte gefunden.</div>`;
        return;
      }

      searchResultsList.innerHTML = hits.map(r => `
        <li><a href="${r.prefix}${r.file}" style="padding-left:.75rem">
          <span style="font-size:.72rem;color:var(--gold);margin-right:.3rem">${r.icon}</span>
          ${highlight(r.title, q)}
          <span class="nav-time">${r.category} · ${r.time}</span>
        </a></li>
      `).join('');
    }

    searchInput.addEventListener('input', e => runSearch(e.target.value));
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      runSearch('');
      searchInput.focus();
    });
  }

  /* ── 3. Sidebar-Toggle ────────────────────────────────── */
  function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    const inp = document.getElementById('sb-search-input');
    if (inp) setTimeout(() => inp.focus(), 400);
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openSidebar  = openSidebar;
  window.closeSidebar = closeSidebar;

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

  /* ── 4. Init ──────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const prefix      = window.SIDEBAR_PREFIX      || '';
    const currentFile = window.SIDEBAR_CURRENT_FILE || null;
    buildSidebar(prefix, currentFile);
  });
})();
