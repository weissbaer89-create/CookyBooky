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
		  {
            id: "it-ossobuco",
            title: "Ossobuco",
            file: "rezepte/it-ossobuco.html",
            tags: ["fleisch", "klassiker", "bergrettung",],
            time: "180 min",
            difficulty: "mittel",
            description: "mit Erdäpfel-Polenta-Sterz und Ratatouille"
          },
		  {
            id: "it-brennesselgnocchi",
            title: "Brennnessel -Gnocchi ",
            file: "rezepte/it-brennesselgnocchi.html",
            tags: ["fisch", "sommer", "bergrettung",],
            time: "90 min",
            difficulty: "mittel",
            description: "mit gebratenem Huchen und Paprika-Vinaigrette"
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
            tags: ["gemüse", "vegetarisch", "klassiker"],
            time: "1 h",
            difficulty: "mittel",
            description: "Französischer Klassiker"
          },{
            id: "fr-spargelhollandaise",
            title: "Weißer Spargel",
            file: "rezepte/fr-spargelhollandaise.html",
            tags: ["deftig", "bergrettung", "klassiker"],
            time: "1,5 h",
            difficulty: "mittel",
            description: "mit Sauce Hollandaise, Osterschinken und Erdäpfeln"
          },
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Österreich
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
            tags: ["feiertage", "hüttenküche", "bergrettung",],
            time: "180 min",
            difficulty: "anspruchsvoll",
            description: "mit Semmelknödelfüllung und Kürbispüree"
          },
          {
            id: "at-schlutzkrapfen",
            title: "Tiroler Schlutzkrapfen",
            file: "rezepte/at-schlutzkrapfen.html",
            tags: ["bodenständig", "hüttenküche", "bergrettung",],
            time: "60 min",
            difficulty: "einfach",
            description: "mit Frühlingskräutern und Rohnen-Himbeersalat"
          },
		  {
            id: "at-eierschwammerlgulasch",
            title: "Eierschwammerlgulasch",
            file: "rezepte/at-eierschwammerlgulasch.html",
            tags: ["deftig", "hüttenküche", "bergrettung",],
            time: "100 min",
            difficulty: "mittel",
            description: "mit Semmelknödel"
          },
		  {
            id: "at-tirolergroestl",
            title: "Tiroler Gröstl",
            file: "rezepte/at-tirolergroestl.html",
            tags: ["deftig", "hüttenküche", "bergrettung",],
            time: "50 min",
            difficulty: "einfach",
            description: "mit Himbeerdressing"
          },
		  {
            id: "at-holzknechtkrapfen",
            title: "Zillertaler Holzknechtkrapfen",
            file: "rezepte/at-holzknechtkrapfen.html",
            tags: ["herzhaft", "hüttenküche", "bergrettung",],
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
		  {
            id: "at-wildgulasch",
            title: "Wildgulasch",
            file: "rezepte/at-wildgulasch.html",
            tags: ["deftig", "hüttenküche", "bergrettung",],
            time: "3 Std.",
            difficulty: "anspruchsvoll",
            description: "mit Steinpilz-Rahmwirsing, Butterspätzle und geschmorter Williams Birne"
          },
		  {
            id: "at-feurigereintopf",
            title: "Feuriger Eintopf",
            file: "rezepte/at-feurigereintopf.html",
            tags: ["herzhaft", "hüttenküche", "bergrettung",],
            time: "1 Std.",
            difficulty: "einfach",
            description: "Ideal für die kalte Jahreszeit"
          },
		  {
            id: "at-roastbeef",
            title: "Roastbeef",
            file: "rezepte/at-roastbeef.html",
            tags: ["herzhaft", "festtagsessen", "bergrettung",],
            time: "2 Std.",
            difficulty: "anspruchsvoll",
            description: "Feiertagsmenü für die kalte Jahreszeit"
          },
		  {
            id: "at-wildbraten",
            title: "Wildbraten",
            file: "rezepte/at-wildbraten.html",
            tags: ["herzhaft", "festtagsessen", "bergrettung",],
            time: "2,5 Std.",
            difficulty: "anspruchsvoll",
            description: "mit gebratenem Rotkraut, Selleriepüree und Nussbratapfel"
          },
		  {
            id: "at-kaspressknoedel",
            title: "Kaspressknödel",
            file: "rezepte/at-kaspressknoedel.html",
            tags: ["herzhaft", "bodenständig", "bergrettung",],
            time: "120 min",
            difficulty: "einfach",
            description: "mit Tomaten-Gemüsewürfeln und Pilzen  "
          },
		  {
            id: "at-lachsmediterranesgemuese",
            title: "Lachs in der Folie",
            file: "rezepte/at-lachsmediterranesgemuese.html",
            tags: ["herzhaft", "bodenständig", "bergrettung","fisch"],
            time: "60 min",
            difficulty: "einfach",
            description: "mit mediterranem Gemüse und Erdäpfelspalten"
          },
		  {
            id: "at-zwiebelrostbraten",
            title: "Zwiebelrostbraten",
            file: "rezepte/at-zwiebelrostbraten.html",
            tags: ["herzhaft", "traditionell", "fleisch"],
            time: "120 min",
            difficulty: "mittel",
            description: "ein klassisches, traditionelles Gericht"
          },
        ]
      },
	  {
        name: "Vorspeisen",
        icon: "🥗",
        items: [
          {
            id: "at-ziegenfrischkäsesalat",
            title: "Tiroler Ziegenfrischkäse-Salat",
            file: "rezepte/at-ziegenfrischkäsesalat.html",
            tags: ["leicht", "hüttenküche", "bergrettung",],
            time: "20 min",
            difficulty: "einfach",
            description: "mit Himbeerdressing"
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
    flag: "🇳🇵",
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
  
//  // ════════════════════════════════════════════════════════
//  //  LAND: Slowenien
//  // ════════════════════════════════════════════════════════
  {
    country: "Slowenien",
    flag: "🇸🇮",
    code: "si",
    subcategories: [
      {
        name: "Nachspeise",
        icon: "🥧",
        items: [
          {
            id: "si-prekmurje_gibanica",
            title: "Prekmurska gibanica",
            file: "rezepte/si-prekmurje_gibanica.html",
            tags: ["strudel", "nussig",],
            time: "4 Std.",
            difficulty: "mittel",
            description: "slowenische Nationalspezialität"
          }
        ]
      }
    ]
  },
  // ════════════════════════════════════════════════════════
  //  LAND: Thailand🍜
  // ════════════════════════════════════════════════════════  
  {
    country: "Thailand",
    flag: "🇹🇭",
    code: "th",
    subcategories: [
      {
        name: "Vorspeise",
        icon: "🍜",
        items: [
          {
            id: "th-fruehlingsrollen",
            title: "Frühlingsrollen",
            file: "rezepte/th-fruehlingsrollen.html",
            tags: ["asiatisch", "straßenküche",,],
            time: "30 min",
            difficulty: "mittel",
            description: "ปอเปี๊ยะทอด - Bor Bia Thod"
          }
        ]
      },{
        name: "Hauptgerichte",
        icon: "🍜",
        items: [
          {
            id: "th-massaman_curry",
            title: "Massaman Curry",
            file: "rezepte/th-massaman_curry.html",
            tags: ["asiatisch", "straßenküche", "winter",],
            time: "60 min",
            difficulty: "mittel",
            description: "แกงมัสมั่นไก่ - Kaeng Massaman Kai"
          },
		  {
            id: "th-thai_curry_noodle_soup",
            title: "Spicy Thai Curry Noodle Soup",
            file: "rezepte/th-thai_curry_noodle_soup.html",
            tags: ["asiatisch", "straßenküche",],
            time: "20 min",
            difficulty: "mittel",
            description: "ข้าวซอย - Khao Soi"
          }
        ]
      },
      {
        name: "Nachspeise",
        icon: "🍡",
        items: [
          {
            id: "th-sticky_rice",
            title: "Sticky Rice mit Mango",
            file: "rezepte/th-sticky_rice.html",
            tags: ["asiatisch", "straßenküche", "sommer",],
            time: "60 min",
            difficulty: "mittel",
            description: "้าวเหนียวมะม่วง - Khao Niaow Ma Muang"
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
        icon: "🍙",
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
/*   {
    country: "Portugal",
    flag: "🇵🇹",
    code: "pt",
    subcategories: [
      {
        name: "Hauptgerichte",
        icon: "🥘",
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
  }, */
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
        icon: "🍖",
        items: [
          {
            id: "de-gefuellterkohlrabi",
            title: "Gefüllter Kohlrabi",
            file: "rezepte/de-gefuellterkohlrabi.html",
            tags: ["leicht", "winter",],
            time: "50 min",
            difficulty: "mittel",
            description: " mit Käse gratiniert"
          },
          {
            id: "de-griesschnitten",
            title: "Grießschnitten",
            file: "rezepte/de-griesschnitten.html",
            tags: ["leicht", "winter", "süß",],
            time: "50 min",
            difficulty: "mittel",
            description: "mit karamellisierten Äpfeln"
          },
        ],
      },
      {
        name: "Desserts",
        icon: "🍰",
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
        icon: "🍔",
        items: [
          {
            id: "us-chili_con_carne",
            title: "Chili Con Carne",
            file: "rezepte/us-chili_con_carne.html",
            tags: ["amerikanisch", "straßenküche", "winter",],
            time: "40 min",
            difficulty: "einfach",
            description: "ein Amerikanischer KLassiker"
          },
		  {
            id: "us-orangen_feuerhuhn",
            title: "Orangen-Feuerhuhn",
            file: "rezepte/us-orangen_feuerhuhn.html",
            tags: ["amerikanisch", ],
            time: "120 min",
            difficulty: "einfach",
            description: "Die rote Farbe verleiht diesem Gericht seinen Namen"
          },
        ]
      }, 
	  {
        name: "Desserts",
        icon: "🧁",
        items: [
          {
            id: "us_apple_berry_crisp",
            file: "rezepte/us_apple_berry_crisp.html",
            title: "Apple Berry Crisp",
            tags: ["pie", "herbst",],
            time: "60 min",
            difficulty: "mittel",
            description: "So schmeckt der Herbst..."
          },
        ]
      },
    ]
  },
];
