// ============================================================
//  KOCHBUCH – ZENTRALE KONFIGURATION
//  Struktur: Land → Unterkategorien → Rezepte
//  Aus dieser Datei werden Menü und Register generiert.
// ============================================================

const COOKBOOK_TITLE    = "Bella Cucina";
const COOKBOOK_SUBTITLE = "Hausgemachte Rezepte mit Seele";

// Schwierigkeitsstufen (Reihenfolge für Filter)
const DIFFICULTIES = ["einfach", "mittel", "anspruchsvoll"];

const RECIPES = [

  // ════════════════════════════════════════════════════════
  //  LAND: Italien
  // ════════════════════════════════════════════════════════
  {
    country: "Italien",
    flag: "🇮🇹",
    code: "it",
    subcategories: [
      {
        name: "Vorspeisen",
        icon: "🥗",
        items: [
          {
            id: "bruschetta",
            title: "Bruschetta al Pomodoro",
            file: "rezepte/bruschetta.html",
            tags: ["vegetarisch", "schnell"],
            time: "15 min",
            difficulty: "einfach",
            description: "Geröstetes Brot mit frischen Tomaten und Basilikum."
          }
        ]
      },
      {
        name: "Hauptgerichte",
        icon: "🍝",
        items: [
          {
            id: "pasta-carbonara",
            title: "Pasta alla Carbonara",
            file: "rezepte/carbonara.html",
            tags: ["pasta", "klassiker"],
            time: "25 min",
            difficulty: "mittel",
            description: "Das Original aus Rom – ohne Sahne, mit Eigelb und Guanciale."
          },
          {
            id: "risotto-pilze",
            title: "Pilz-Risotto",
            file: "rezepte/risotto-pilze.html",
            tags: ["vegetarisch", "cremig"],
            time: "45 min",
            difficulty: "mittel",
            description: "Cremiges Risotto mit Steinpilzen und Parmesan."
          }
        ]
      },
      {
        name: "Desserts",
        icon: "🍮",
        items: [
          {
            id: "tiramisu",
            title: "Klassisches Tiramisù",
            file: "rezepte/tiramisu.html",
            tags: ["kalt", "kaffee"],
            time: "30 min + 4 h kühlen",
            difficulty: "einfach",
            description: "Das Beste zum Schluss – cremig, kräftig, unvergesslich."
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  //  LAND: Frankreich
  // ════════════════════════════════════════════════════════
  {
    country: "Frankreich",
    flag: "🇫🇷",
    code: "fr",
    subcategories: [
      {
        name: "Backwaren",
        icon: "🥐",
        items: [
          {
            id: "zitronentarte",
            title: "Zitronentarte",
            file: "rezepte/zitronentarte.html",
            tags: ["süß", "klassiker"],
            time: "1 h",
            difficulty: "mittel",
            description: "Frisch-säuerliche Tarte mit knusprigem Mürbteig."
          },
          {
            id: "sauerteigbrot",
            title: "Rustikales Sauerteigbrot",
            file: "rezepte/sauerteigbrot.html",
            tags: ["brot", "vegan"],
            time: "12 h",
            difficulty: "anspruchsvoll",
            description: "Knusprige Kruste, luftige Krume – echter Slow-Food-Genuss."
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  //  LAND: Indien
  // ════════════════════════════════════════════════════════
  {
    country: "Indien",
    flag: "🇮🇳",
    code: "in",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🍛",
        items: [
          {
            id: "chicken-curry",
            title: "Butter Chicken Curry",
            file: "rezepte/butter-chicken.html",
            tags: ["hähnchen", "würzig"],
            time: "50 min",
            difficulty: "mittel",
            description: "Zartes Hähnchen in samtiger Tomaten-Butter-Sauce."
          }
        ]
      },
      {
        name: "Vorspeisen",
        icon: "🥣",
        items: [
          {
            id: "karotten-suppe",
            title: "Ingwer-Karotten-Suppe",
            file: "rezepte/karotten-suppe.html",
            tags: ["vegan", "warm"],
            time: "30 min",
            difficulty: "einfach",
            description: "Cremige Suppe mit frischem Ingwer und Kokosmilch."
          }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  //  LAND: Nepal
  // ════════════════════════════════════════════════════════
  {
    country: "Nepal",
    flag: "🇮🇳",
    code: "np",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🍛",
        items: [
          {
            id: "nepalesische-momos",
            title: "Nepalesische Momos",
            file: "rezepte/nepalesischemomos.html",
            tags: ["asiatisch", "hüttenküche",],
            time: "120 min",
            difficulty: "mittel",
            description: "Traditionelle nepalesische Teigtaschen"
          }
        ]
      }
    ]
  }

  // ── Weiteres Land hier eintragen: ─────────────────────────
  // {
  //   country: "Japan",
  //   flag: "🇯🇵",
  //   subcategories: [
  //     {
  //       name: "Hauptgerichte",
  //       icon: "🍜",
  //       items: [
  //         { id: "ramen", title: "Tonkotsu Ramen", file: "rezepte/ramen.html",
  //           tags: ["suppe","schwein"], time: "3 h", difficulty: "anspruchsvoll",
  //           description: "Reichhaltige Brühe mit Chashu-Schwein." }
  //       ]
  //     }
  //   ]
  // }
];
