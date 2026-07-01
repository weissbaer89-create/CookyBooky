/* ═══════════════════════════════════════════════════════════
   BELLA CUCINA – Sidebar (3-Ebenen) & Theme
   Config-Variablen VOR diesem Script setzen:
     window.SIDEBAR_PREFIX       = '' | '../'
     window.SIDEBAR_CURRENT_FILE = null | 'dateiname.html'
   ═══════════════════════════════════════════════════════════ */
(function () {

  /* ══════════════════════════════════════════════════════════
     1. THEME
  ══════════════════════════════════════════════════════════ */
  const THEME_KEY = 'bellacucina-theme';

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    document.querySelectorAll('.toggle-track').forEach(t => t.classList.toggle('on', dark));
    document.querySelectorAll('.theme-label').forEach(l => l.textContent = dark ? 'Dunkel' : 'Hell');
    document.querySelectorAll('.topbar-theme-btn').forEach(b => b.textContent = dark ? '☀️' : '🌙');
  }
  function toggleTheme() {
    const dark = !document.documentElement.classList.contains('dark');
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
    applyTheme(dark);
  }
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved ? saved === 'dark' : true);
  window.toggleTheme = toggleTheme;

  /* ══════════════════════════════════════════════════════════
     2. SIDEBAR AUFBAUEN
  ══════════════════════════════════════════════════════════ */
  const prefix      = window.SIDEBAR_PREFIX       || '';
  const currentFile = window.SIDEBAR_CURRENT_FILE || null;

  // Logo
  const sbLogo = document.getElementById('sb-logo');
  if (sbLogo) { sbLogo.textContent = COOKBOOK_TITLE; sbLogo.href = prefix + 'index.html'; }

  // Footer-Logo auf Rezeptseiten
  const fl = document.getElementById('footer-logo');
  if (fl) fl.textContent = COOKBOOK_TITLE;

  const sbNav = document.getElementById('sb-nav-body');
  if (!sbNav) return;

  // ── Register-Shortcut ────────────────────────────────────
  const regLink = document.createElement('div');
  regLink.className = 'nav-register-link';
  regLink.innerHTML = `<a href="${prefix}register.html">📖&nbsp; Register</a>`;
  sbNav.appendChild(regLink);

  // ── Ebene 1: Länder (alphabetisch sortiert) ──────────────
  const sortedCountries = RECIPES.slice().sort(function (a, b) {
    return a.country.localeCompare(b.country, 'de');
  });
  sortedCountries.forEach(function (country, ci) {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'nav-country';

    // Prüfen ob irgendein Rezept dieses Landes aktiv ist
    const countryHasActive = currentFile && country.subcategories.some(function (sub) {
      return sub.items.some(function (r) { return r.file.endsWith(currentFile); });
    });
    if (countryHasActive) countryDiv.classList.add('open');

    // Land-Toggle
    const countryToggle = document.createElement('button');
    countryToggle.type = 'button';
    countryToggle.className = 'nav-country-toggle';
    countryToggle.innerHTML =
      `<span class="nav-country-flag"><img src="https://flagcdn.com/${country.code}.svg" height="13" alt="${country.country}"></span>` +
      `<span class="nav-country-name">${country.country}</span>` +
      `<span class="nav-country-chevron">›</span>`;
    countryToggle.addEventListener('click', function () {
      countryDiv.classList.toggle('open');
    });
    countryDiv.appendChild(countryToggle);

    // Unterkategorien-Container
    const subcatsDiv = document.createElement('div');
    subcatsDiv.className = 'nav-subcats';

    // ── Ebene 2: Unterkategorien ──────────────────────────
    country.subcategories.forEach(function (sub, si) {
      const subDiv = document.createElement('div');
      subDiv.className = 'nav-subcat';

      const subHasActive = currentFile && sub.items.some(function (r) {
        return r.file.endsWith(currentFile);
      });
      if (subHasActive) subDiv.classList.add('open');

      // Unterkategorie-Toggle
      const subToggle = document.createElement('button');
      subToggle.type = 'button';
      subToggle.className = 'nav-subcat-toggle';
      subToggle.innerHTML =
        `<span class="nav-subcat-icon">${sub.icon}</span>` +
        `<span class="nav-subcat-name">${sub.name}</span>` +
        `<span class="nav-subcat-count">${sub.items.length}</span>` +
        `<span class="nav-subcat-chevron">›</span>`;
      subToggle.addEventListener('click', function () {
        subDiv.classList.toggle('open');
      });
      subDiv.appendChild(subToggle);

      // ── Ebene 3: Rezepte ────────────────────────────────
      const ul = document.createElement('ul');
      ul.className = 'nav-items';
      sub.items.forEach(function (r) {
        const isActive = currentFile && r.file.endsWith(currentFile);
        const li = document.createElement('li');
        li.innerHTML =
          `<a href="${prefix}${r.file}"${isActive ? ' class="active"' : ''}>` +
          r.title +
          `<span class="nav-time">⏱ ${r.time} · ${r.difficulty}</span>` +
          `</a>`;
        ul.appendChild(li);
      });
      subDiv.appendChild(ul);
      subcatsDiv.appendChild(subDiv);
    });

    countryDiv.appendChild(subcatsDiv);
    sbNav.appendChild(countryDiv);
  });

  /* ══════════════════════════════════════════════════════════
     3. SIDEBAR TOGGLE
  ══════════════════════════════════════════════════════════ */
  function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
  window.openSidebar  = openSidebar;
  window.closeSidebar = closeSidebar;
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSidebar(); });

})();
