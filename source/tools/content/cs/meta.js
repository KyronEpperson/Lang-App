/* cs-en course metadata in the learner's language (Czech). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["První kroky", ["Pozdravy", "Představování", "Základní fráze 1", "Základní fráze 2", "Abeceda"]],
  ["Cestování a běžný den", ["Cesta a doprava", "Restaurace", "Kavárna a obchod", "Nakupování a placení", "Čísla, čas a datum", "Cestování (letiště a hotel)", "Lékař a nouzové situace"]],
  ["Rozhovory a vztahy", ["Nezávazná konverzace", "Pocity a reakce", "Komplimenty a sympatie", "Telefon a chatové zkratky"]],
  ["Práce", ["Práce a e-maily"]],
  ["Jako rodilý mluvčí", ["Pozor na výslovnost", "Falešní přátelé a čechismy", "Frázová slovesa", "Anglické idiomy", "Filmy, seriály a slang"]]
];

exports.TAGS = {
  basics: ["Pozdravy", "Představování", "Základní fráze 1", "Základní fráze 2", "Čísla, čas a datum", "Abeceda"],
  travel: ["Základní fráze 1", "Základní fráze 2", "Cesta a doprava", "Restaurace", "Kavárna a obchod", "Nakupování a placení", "Čísla, čas a datum", "Cestování (letiště a hotel)", "Lékař a nouzové situace"],
  social: ["Pozdravy", "Představování", "Nezávazná konverzace", "Pocity a reakce", "Komplimenty a sympatie", "Telefon a chatové zkratky"],
  work: ["Práce a e-maily", "Telefon a chatové zkratky", "Čísla, čas a datum", "Nezávazná konverzace"],
  media: ["Filmy, seriály a slang", "Anglické idiomy", "Pocity a reakce"],
  skills: ["Pozor na výslovnost", "Frázová slovesa", "Anglické idiomy", "Falešní přátelé a čechismy"]
};

exports.DESC = {
  "Pozdravy": "Základní pozdravy při setkání a loučení a přirozené odpovědi na ně",
  "Představování": "Jak říct, jak se jmenuješ, odkud jsi, co děláš a co tě baví – a jak se na to zeptat",
  "Základní fráze 1": "Poděkování, omluva a co říct, když nerozumíš – věty na první den v cizině",
  "Základní fráze 2": "Toalety, ceny, wi-fi, prosba o fotku a další věty, které se hodí hned na místě",
  "Cesta a doprava": "Jak se zeptat na cestu, porozumět směru a jet metrem, autobusem nebo taxíkem",
  "Restaurace": "Od usazení ke stolu přes objednávku a alergie až po účet a spropitné",
  "Kavárna a obchod": "Objednávka nápoje, velikost a úpravy, účtenka a taška",
  "Nakupování a placení": "Prohlížení, zkoušení, velikosti, placení, vrácení a výměna zboží",
  "Čísla, čas a datum": "Hodiny, data, ceny a velká čísla po anglicku: desetinná tečka, „půl páté“ a měsíc před dnem",
  "Nezávazná konverzace": "Jak začít a udržet nezávazný rozhovor o počasí, víkendu a zálibách",
  "Pocity a reakce": "Gratulace, údiv, soucit, únava a další pocity a reakce",
  "Komplimenty a sympatie": "Jak pochválit, poděkovat a dát najevo, že je ti někdo sympatický",
  "Práce a e-maily": "Věty do pracovních e-mailů, porady a domlouvání termínů",
  "Telefon a chatové zkratky": "Telefonování anglicky a zkratky ze zpráv jako LOL, BRB a TBH",
  "Cestování (letiště a hotel)": "Pasová kontrola, odbavení, sedadla, zavazadla a přání v hotelu",
  "Lékař a nouzové situace": "Co říct, když je ti špatně, když se zraníš nebo když něco ztratíš",
  "Frázová slovesa": "Frázová slovesa jako „pick up“ a „figure out“, bez kterých se běžná angličtina neobejde",
  "Pozor na výslovnost": "Přízvuk, th, w / v, æ / e, ŋ a znělé souhlásky na konci slova – dvojice, které si Češi pletou",
  "Anglické idiomy": "Idiomy, které nedávají doslova smysl, ale rodilí mluvčí je používají pořád",
  "Filmy, seriály a slang": "Výrazy, které uslyšíš v seriálech, v hudbě a na sociálních sítích",
  "Abeceda": "Anglické názvy 26 písmen a jak nahlas hláskovat jméno nebo e-mail",
  "Falešní přátelé a čechismy": "„Aktuální“ není „actual“: zrádná slova a doslovné překlady z češtiny, které anglicky neznějí"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Cestování", decks: ["Základní fráze 1", "Základní fráze 2", "Cesta a doprava", "Restaurace", "Kavárna a obchod", "Nakupování a placení", "Cestování (letiště a hotel)", "Lékař a nouzové situace"] },
  work: { label: "Práce", decks: ["Představování", "Práce a e-maily", "Telefon a chatové zkratky", "Čísla, čas a datum", "Nezávazná konverzace"] },
  social: { label: "Přátelé a seznamování", decks: ["Pozdravy", "Představování", "Nezávazná konverzace", "Pocity a reakce", "Komplimenty a sympatie", "Telefon a chatové zkratky"] },
  media: { label: "Filmy, seriály a hudba", decks: ["Filmy, seriály a slang", "Anglické idiomy", "Pocity a reakce", "Frázová slovesa", "Pozor na výslovnost"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Příprava na cestu do zahraničí", weeks: 3, decks: ["Pozdravy", "Základní fráze 1", "Základní fráze 2", "Cesta a doprava", "Restaurace", "Kavárna a obchod", "Nakupování a placení", "Čísla, čas a datum", "Cestování (letiště a hotel)", "Lékař a nouzové situace"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Noví přátelé ze zahraničí", weeks: 6, decks: ["Pozdravy", "Představování", "Základní fráze 1", "Nezávazná konverzace", "Pocity a reakce", "Komplimenty a sympatie", "Telefon a chatové zkratky", "Falešní přátelé a čechismy", "Frázová slovesa", "Filmy, seriály a slang", "Anglické idiomy"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "czenglish", "phrasal", "idioms"] },
  conv: { label: "Konverzace za 90 dní", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master);
   stage names, not person nouns, so that no title shows the learner's gender (profile §10) */
exports.TITLES = ["Začátky", "Učení", "Povídání", "Na cestách", "Jako doma", "Profi", "Mistrovství"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Pochvala", expression: "Běžné výrazy", polite: "Zdvořilost", saying: "Rčení a citáty" };
