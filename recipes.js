// ============================================================
//  KOCHBUCH – ZENTRALE KONFIGURATION
//  Alle Rezepte hier eintragen. Aus dieser Datei werden
//  automatisch das Register und das Hamburger-Menü generiert.
// ============================================================

const COOKBOOK_TITLE = "Cucina Sonnensiedlung";
const COOKBOOK_SUBTITLE = "Rezepte zwischen Gipfel und Meer";

const RECIPES = [
  // ── Kategorie: Vorspeisen ──────────────────────────────────
  {
    category: "Vorspeisen",
    icon: "🥗",
    items: [
      {
        id: "bruschetta",
        title: "Bruschetta al Pomodoro",
        file: "rezepte/bruschetta.html",
        tags: ["vegetarisch", "italienisch", "schnell"],
        time: "15 min",
        difficulty: "einfach",
        description: "Geröstetes Brot mit frischen Tomaten und Basilikum."
      },
      {
        id: "suppe-karotte",
        title: "Ingwer-Karotten-Suppe",
        file: "rezepte/karotten-suppe.html",
        tags: ["vegan", "warm", "herbst"],
        time: "30 min",
        difficulty: "einfach",
        description: "Cremige Suppe mit frischem Ingwer und Kokosmilch."
      }
    ]
  },

  // ── Kategorie: Hauptgerichte ───────────────────────────────
  {
    category: "Hauptgerichte",
    icon: "🍝",
    items: [
      {
        id: "pasta-carbonara",
        title: "Pasta alla Carbonara",
        file: "rezepte/carbonara.html",
        tags: ["italienisch", "pasta", "klassiker"],
        time: "25 min",
        difficulty: "mittel",
        description: "Das Original aus Rom – ohne Sahne, mit Eigelb und Guanciale."
      },
      {
        id: "tantamen-ramen",
        title: "Tantanmen Ramen",
        file: "rezepte/tantanmenramen.html",
        tags: ["japanisch", "kalte Tage", "würzig"],
        time: "40 min",
        difficulty: "mittel",
        description: "Ramen in einer scharfen Suppe mit Sesampaste, Sojamilch und Faschiertem."
      },
      {
        id: "nepalesische-momos",
        title: "Nepalesische Momos",
        file: "rezepte/nepalesischemomos.html",
        tags: ["fein", "nepalesisch", "dampfgarer"],
        time: "120 min",
        difficulty: "mittel",
        description: "klassische Nepalesische Momos"
      }
    ]
  },

  // ── Kategorie: Backwaren ───────────────────────────────────
  {
    category: "Backwaren",
    icon: "🥐",
    items: [
      {
        id: "sauerteigbrot",
        title: "Rustikales Sauerteigbrot",
        file: "rezepte/sauerteigbrot.html",
        tags: ["brot", "vegan", "aufwändig"],
        time: "12 h",
        difficulty: "anspruchsvoll",
        description: "Knusprige Kruste, luftige Krume – echter Slow-Food-Genuss."
      },
      {
        id: "zitronentarte",
        title: "Zitronentarte",
        file: "rezepte/zitronentarte.html",
        tags: ["dessert", "französisch", "süß"],
        time: "1 h",
        difficulty: "mittel",
        description: "Frisch-säuerliche Tarte mit knusprigem Mürbteig."
      }
    ]
  },

  // ── Kategorie: Desserts ────────────────────────────────────
  {
    category: "Desserts",
    icon: "🍮",
    items: [
      {
        id: "tiramisu",
        title: "Klassisches Tiramisù",
        file: "rezepte/tiramisu.html",
        tags: ["italienisch", "kalt", "kaffee"],
        time: "30 min + 4 h kühlen",
        difficulty: "einfach",
        description: "Das Beste zum Schluss – cremig, kräftig, unvergesslich."
      }
    ]
  }
];
