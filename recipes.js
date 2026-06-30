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
        ]
      },
      {
        name: "Desserts",
        icon: "🍮",
        items: [

        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  //  LAND: Frankreich
  // ════════════════════════════════════════════════════════
//  {
//    country: "Frankreich",
//    flag: "🇫🇷",
//    code: "fr",
//    subcategories: [
//      {
//        name: "Backwaren",
//        icon: "🥐",
//        items: [
//          {
//            id: "zitronentarte",
//            title: "Zitronentarte",
//            file: "rezepte/zitronentarte.html",
//            tags: ["süß", "klassiker"],
//            time: "1 h",
//            difficulty: "mittel",
//            description: "Frisch-säuerliche Tarte mit knusprigem Mürbteig."
//          },
//          {
//            id: "sauerteigbrot",
//            title: "Rustikales Sauerteigbrot",
//            file: "rezepte/sauerteigbrot.html",
//            tags: ["brot", "vegan"],
//            time: "12 h",
//            difficulty: "anspruchsvoll",
//            description: "Knusprige Kruste, luftige Krume – echter Slow-Food-Genuss."
//          }
//        ]
//      }
//    ]
//  },
  // ════════════════════════════════════════════════════════
  //  LAND: Nepal
  // ════════════════════════════════════════════════════════
  {
    country: "Österreich",
    flag: "🇦🇹",
    code: "at",
    subcategories: [
      {
        name: "Ausbildungszentrum Bergrettung Jamtal",
        icon: "🏔️",
        items: [
          {
            id: "erfrischendebowl",
            title: "Erfrischende Bowl",
            file: "rezepte/erfrischendebowl.html",
            tags: ["erfrischend", "hüttenküche",],
            time: "60 min",
            difficulty: "einfach",
            description: "Erfrischende Bowl für den Sommer"
          },
          {
            id: "spanferkelrollbraten",
            title: "Spanferkelrollbraten",
            file: "rezepte/spanferkelrollbraten.html",
            tags: ["feiertage", "hüttenküche",],
            time: "180 min",
            difficulty: "anspruchsvoll",
            description: "mit Semmelknödelfüllung und Kürbispüree"
          },
		  {
            id: "eierschwammerlgulasch",
            title: "Eierschwammerlgulasch",
            file: "rezepte/eierschwammerlgulasch.html",
            tags: ["deftig", "hüttenküche",],
            time: "100 min",
            difficulty: "mittel",
            description: "mit Semmelknödel"
          },
		  {
            id: "ziegenfrischkäsesalat",
            title: "Tiroler Ziegenfrischkäse-Salat",
            file: "rezepte/ziegenfrischkäsesalat.html",
            tags: ["deftig", "hüttenküche",],
            time: "100 min",
            difficulty: "einfach",
            description: "mit Himbeerdressing"
          },
		  {
            id: "tirolergroestl",
            title: "Tiroler Gröstl",
            file: "rezepte/tirolergroestl.html",
            tags: ["deftig", "hüttenküche",],
            time: "50 min",
            difficulty: "einfach",
            description: "mit Himbeerdressing"
          },
		  {
            id: "holzknechtkrapfen",
            title: "Zillertaler Holzknechtkrapfen",
            file: "rezepte/holzknechtkrapfen.html",
            tags: ["herzhaft", "hüttenküche",],
            time: "40 min",
            difficulty: "einfach",
            description: "ein Gericht der traditionellen Tiroler Küche"
          },
        ]
      }
    ]
  },
 
  // ════════════════════════════════════════════════════════
  //  LAND: Indien
  // ════════════════════════════════════════════════════════
//  {
//    country: "Indien",
//    flag: "🇮🇳",
//    code: "in",
//    subcategories: [
//      {
//        name: "Hauptgerichte",
//        icon: "🍛",
//        items: [
//          {
//            id: "chicken-curry",
//            title: "Butter Chicken Curry",
//            file: "rezepte/butter-chicken.html",
//            tags: ["hähnchen", "würzig"],
//            time: "50 min",
//            difficulty: "mittel",
//            description: "Zartes Hähnchen in samtiger Tomaten-Butter-Sauce."
//          }
//        ]
//      },
//      {
//        name: "Vorspeisen",
//        icon: "🥣",
//        items: [
//          {
//            id: "karotten-suppe",
//            title: "Ingwer-Karotten-Suppe",
//            file: "rezepte/karotten-suppe.html",
//            tags: ["vegan", "warm"],
//            time: "30 min",
//            difficulty: "einfach",
//            description: "Cremige Suppe mit frischem Ingwer und Kokosmilch."
//          }
//        ]
//      }
//    ]
//  },
//
//  // ════════════════════════════════════════════════════════
//  //  LAND: Nepal
//  // ════════════════════════════════════════════════════════
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
  },  {
    country: "Japan",
    flag: "🇯🇵",
    code: "jp",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🍜",
        items: [
          {
            id: "tantanmenramen",
            title: "Tantanmen Ramen",
            file: "rezepte/tantanmenramen.html",
            tags: ["asiatisch", "straßenküche", "winter",],
            time: "60 min",
            difficulty: "mittel",
            description: "in einer scharfen Suppe"
          }
        ]
      }
    ]
  },
];
