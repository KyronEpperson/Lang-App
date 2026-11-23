/* ceb-en course metadata in the learner's language (Cebuano). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (FINAL names: DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Sugod", ["Pangumusta", "Pagpaila sa kaugalingon", "Importanteng phrase 1", "Importanteng phrase 2", "Alpabeto"]],
  ["Biyahe ug adlaw-adlaw", ["Direksyon ug sakyanan", "Pag-order sa restawran", "Kapehan ug tindahan", "Pagpamalit ug pagbayad", "Numero, oras ug petsa", "Biyahe (airport ug hotel)", "Ospital ug emerhensiya"]],
  ["Istorya ug relasyon", ["Istorya-istorya", "Pagbati ug reaksyon", "Pagdayeg ug pagkagusto", "Tawag, text ug chat"]],
  ["Trabaho", ["Trabaho ug email"]],
  ["Mas natural nga Iningles", ["Bantayi ang paglitok", "Mga lit-ag para sa Bisaya", "Mga phrasal verb", "Mga idiom sa Iningles", "Salida, serye ug slang"]]
];

exports.TAGS = {
  basics: ["Pangumusta", "Pagpaila sa kaugalingon", "Importanteng phrase 1", "Importanteng phrase 2", "Numero, oras ug petsa", "Alpabeto"],
  travel: ["Importanteng phrase 1", "Importanteng phrase 2", "Direksyon ug sakyanan", "Pag-order sa restawran", "Kapehan ug tindahan", "Pagpamalit ug pagbayad", "Numero, oras ug petsa", "Biyahe (airport ug hotel)", "Ospital ug emerhensiya"],
  social: ["Pangumusta", "Pagpaila sa kaugalingon", "Istorya-istorya", "Pagbati ug reaksyon", "Pagdayeg ug pagkagusto", "Tawag, text ug chat", "Mga lit-ag para sa Bisaya"],
  work: ["Trabaho ug email", "Tawag, text ug chat", "Numero, oras ug petsa", "Istorya-istorya", "Mga lit-ag para sa Bisaya"],
  media: ["Salida, serye ug slang", "Mga idiom sa Iningles", "Pagbati ug reaksyon"],
  skills: ["Bantayi ang paglitok", "Mga lit-ag para sa Bisaya", "Mga phrasal verb", "Mga idiom sa Iningles"]
};

exports.DESC = {
  "Pangumusta": "Batakang pangumusta ug panamilit, ug ang natural nga tubag niini",
  "Pagpaila sa kaugalingon": "Isulti ang imong ngalan, gigikanan, trabaho ug hilig, ug pangutan-a sab ang imong kaistorya",
  "Importanteng phrase 1": "Pagpasalamat, pagpangayo og pasaylo, ug unsay isulti kon wala ka kasabot",
  "Importanteng phrase 2": "CR, presyo, Wi-Fi, litrato: mga sentence nga magamit dayon sa gawas sa nasod",
  "Direksyon ug sakyanan": "Pagpangutana og direksyon, pagsabot sa tubag, ug pagsakay og subway, bus ug taxi",
  "Pag-order sa restawran": "Gikan sa lamesa ug pag-order hangtod sa alerdyi, bayad ug tip",
  "Kapehan ug tindahan": "Pag-order og ilimnon, size ug uban pang hangyo, resibo ug supot; apil ang tindahan nga abli 24 oras",
  "Pagpamalit ug pagbayad": "Pagtan-aw-tan-aw, pagsukod, size, pagbayad, ug pag-uli o pag-ilis sa napalit",
  "Numero, oras ug petsa": "Oras, petsa, presyo ug dagkong numero sa Iningles, dili sa Kinatsila nga numero nga atong naandan",
  "Istorya-istorya": "Pagsugod ug pagpadayon sa gaan nga istorya: Sabado ug Domingo, trabaho, hilig ug panahon",
  "Pagbati ug reaksyon": "Kalipay, katingala, kakapoy, paghupay ug uban pang gibati ug reaksyon",
  "Pagdayeg ug pagkagusto": "Pagdayeg, pagpasalamat, ug unsay isulti kon gusto nimong masuod ang usa ka tawo",
  "Trabaho ug email": "Mga sentence sa email sa trabaho, miting ug iskedyul, nga walay \"Good day!\" ug \"More power!\"",
  "Tawag, text ug chat": "Iningles sa telepono ug mga pinamubo sa chat sama sa LOL, BRB ug TBH",
  "Biyahe (airport ug hotel)": "Immigration, check-in, lingkoranan, bagahe ug mga hangyo sa hotel",
  "Ospital ug emerhensiya": "Kon masakiton, naangol, nawad-an o gikawatan: mga sentence para sa emerhensiya",
  "Mga phrasal verb": "pick up, figure out ug uban pang phrasal verb nga kanunay gamiton sa mga native speaker",
  "Bantayi ang paglitok": "F / P, V / B, TH, S / Z, ship / sheep, bad / bed / bud ug stress: mga paglitok nga daling magkabaylo sa Bisaya",
  "Mga idiom sa Iningles": "Mga idiom nga lahi og kahulogan kon hubaron pulong por pulong",
  "Salida, serye ug slang": "Mga bag-ong pulong nga madungog sa salida, serye, kanta ug social media",
  "Alpabeto": "Ang ngalan sa 26 ka letra sa Iningles ug unsaon pagsulti sa imong ngalan ug email tagsa-tagsa ka letra",
  "Mga lit-ag para sa Bisaya": "CR, brownout, open the light, fill up, borrow me: Iningles sa Pinas ug direktang hubad nga lahi og kahulogan sa gawas"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Biyahe", decks: ["Importanteng phrase 1", "Importanteng phrase 2", "Direksyon ug sakyanan", "Pag-order sa restawran", "Kapehan ug tindahan", "Pagpamalit ug pagbayad", "Biyahe (airport ug hotel)", "Ospital ug emerhensiya"] },
  work: { label: "Trabaho ug opisina", decks: ["Pagpaila sa kaugalingon", "Trabaho ug email", "Tawag, text ug chat", "Numero, oras ug petsa", "Istorya-istorya"] },
  social: { label: "Higala ug date", decks: ["Pangumusta", "Pagpaila sa kaugalingon", "Istorya-istorya", "Pagbati ug reaksyon", "Pagdayeg ug pagkagusto", "Tawag, text ug chat"] },
  media: { label: "Salida, serye ug kanta", decks: ["Salida, serye ug slang", "Mga idiom sa Iningles", "Pagbati ug reaksyon", "Mga phrasal verb", "Bantayi ang paglitok"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Pangandam sa biyahe sa gawas sa nasod", weeks: 3, decks: ["Pangumusta", "Importanteng phrase 1", "Importanteng phrase 2", "Direksyon ug sakyanan", "Pag-order sa restawran", "Kapehan ug tindahan", "Pagpamalit ug pagbayad", "Numero, oras ug petsa", "Biyahe (airport ug hotel)", "Ospital ug emerhensiya"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Pagpakighigala sa mga langyaw", weeks: 6, decks: ["Pangumusta", "Pagpaila sa kaugalingon", "Importanteng phrase 1", "Istorya-istorya", "Pagbati ug reaksyon", "Pagdayeg ug pagkagusto", "Tawag, text ug chat", "Mga lit-ag para sa Bisaya", "Mga phrasal verb", "Salida, serye ug slang", "Mga idiom sa Iningles"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "pinoy-english", "phrasal", "idioms"] },
  conv: { label: "90 ka adlaw nga plano sa pagsulti", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["Nagsugod", "Estudyante", "Tig-istorya", "Biyahero", "Lokal", "Hanas", "Agalon"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Pagdayeg", expression: "Adlaw-adlaw nga pulong", polite: "Matinahoron", saying: "Panultihon" };
