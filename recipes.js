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
            id: "it-carbonara",
            title: "Pasta alla Carbonara",
            file: "rezepte/it-carbonara.html",
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
  {
    country: "Frankreich",
    flag: "🇫🇷",
    code: "fr",
    subcategories: [
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
//        ]
//      },
      {
        name: "Hauptgerichte",
		icon: "🍲",
        items: [
          {
            id: "fr-ratatouille",
            title: "Ratatouille",
            file: "rezepte/fr-ratatouille.html",
            tags: ["süß", "klassiker"],
            time: "1 h",
            difficulty: "mittel",
            description: "Französischer Klassiker"
          },
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Nepal
  // ════════════════════════════════════════════════════════
  {
    country: "Österreich",
    flag: "🇦🇹",
    code: "at",
    subcategories: [
      {
        name: "Hauptgerichte",
		icon: "🍲",
        items: [
          {
            id: "at-erfrischendebowl",
            title: "Erfrischende Bowl",
            file: "rezepte/at-erfrischendebowl.html",
            tags: ["erfrischend", "hüttenküche", "bergrettung",],
            time: "60 min",
            difficulty: "einfach",
            description: "Erfrischende Bowl für den Sommer"
          },
          {
            id: "at-spanferkelrollbraten",
            title: "Spanferkelrollbraten",
            file: "rezepte/at-spanferkelrollbraten.html",
            tags: ["feiertage", "hüttenküche",],
            time: "180 min",
            difficulty: "anspruchsvoll",
            description: "mit Semmelknödelfüllung und Kürbispüree"
          },
		  {
            id: "at-eierschwammerlgulasch",
            title: "Eierschwammerlgulasch",
            file: "rezepte/at-eierschwammerlgulasch.html",
            tags: ["deftig", "hüttenküche",],
            time: "100 min",
            difficulty: "mittel",
            description: "mit Semmelknödel"
          },
		  {
            id: "at-ziegenfrischkäsesalat",
            title: "Tiroler Ziegenfrischkäse-Salat",
            file: "rezepte/at-ziegenfrischkäsesalat.html",
            tags: ["deftig", "hüttenküche",],
            time: "100 min",
            difficulty: "einfach",
            description: "mit Himbeerdressing"
          },
		  {
            id: "at-tirolergroestl",
            title: "Tiroler Gröstl",
            file: "rezepte/at-tirolergroestl.html",
            tags: ["deftig", "hüttenküche",],
            time: "50 min",
            difficulty: "einfach",
            description: "mit Himbeerdressing"
          },
		  {
            id: "at-holzknechtkrapfen",
            title: "Zillertaler Holzknechtkrapfen",
            file: "rezepte/at-holzknechtkrapfen.html",
            tags: ["herzhaft", "hüttenküche",],
            time: "40 min",
            difficulty: "einfach",
            description: "ein Gericht der traditionellen Tiroler Küche"
          },
		  {
            id: "at-huettencarbonara",
            title: "Hütten-Carbonara",
            file: "rezepte/at-huettencarbonara.html",
            tags: ["herzhaft", "hüttenküche",],
            time: "40 min",
            difficulty: "einfach",
            description: "mit Speck-Pilz-Ragout"
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
            id: "np-nepalesische-momos",
            title: "Nepalesische Momos",
            file: "rezepte/np-nepalesischemomos.html",
            tags: ["asiatisch", "hüttenküche",],
            time: "120 min",
            difficulty: "mittel",
            description: "Traditionelle nepalesische Teigtaschen"
          }
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Thailand
  // ════════════════════════════════════════════════════════  
  {
    country: "Thailand",
    flag: "🇹🇭",
    code: "th",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🍜",
        items: [
          {
            id: "th-stickyricemango",
            title: "Sticky Rice mit Mango",
            file: "rezepte/th-stickyricemango.html",
            tags: ["asiatisch", "straßenküche", "sommer",],
            time: "60 min",
            difficulty: "mittel",
            description: "Khao Niaow Ma Muang"
          }
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Japan
  // ════════════════════════════════════════════════════════  
  {
    country: "Japan",
    flag: "🇯🇵",
    code: "jp",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🍜",
        items: [
          {
            id: "jp-tantanmenramen",
            title: "Tantanmen Ramen",
            file: "rezepte/jp-tantanmenramen.html",
            tags: ["asiatisch", "straßenküche", "winter",],
            time: "60 min",
            difficulty: "mittel",
            description: "in einer scharfen Suppe"
          }
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Portugal
  // ════════════════════════════════════════════════════════  
  {
    country: "Portugal",
    flag: "🇵🇹",
    code: "pt",
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
  // ════════════════════════════════════════════════════════
  //  LAND: Spanien
  // ════════════════════════════════════════════════════════  
  {
    country: "Spanien",
    flag: "🇪🇸",
    code: "es",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🥘",
        items: [
          {
            id: "es-salzgambas",
            title: "Auf Salz gegarte Gambas",
            file: "rezepte/es-salzgambas.html",
            tags: ["meeresfrüchte", "straßenküche",],
            time: "90 min",
            difficulty: "mittel",
            description: "mit Paella-Sud"
          }
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Deutschland
  // ════════════════════════════════════════════════════════  
  {
    country: "Deutschland",
    flag: "🇩🇪",
    code: "de",
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
          },
        ],
      },
      {
        name: "Desserts",
        icon: "🍮",
        items: [
          {
            id: "de-apfelzimtkuechlein",
            title: "Apfel-Zimt-Küchlein",
            file: "rezepte/de-apfelzimtkuechlein.html",
            tags: ["süß", "fingerfood",],
            time: "30 min",
            difficulty: "einfach",
            description: "von Lotte"
          },
          {
            id: "de-apfelknoedel",
            title: "Gebackene Apfelknödel",
            file: "rezepte/de-apfelknoedel.html",
            tags: ["süß",],
            time: "30 min",
            difficulty: "einfach",
            description: "mit Preiselbeersahne und Vanilleeis"
          },
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: USA
  // ════════════════════════════════════════════════════════  
  {
    country: "USA",
    flag: "🇺🇸",
    code: "us",
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
