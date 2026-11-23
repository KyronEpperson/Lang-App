/* tl-en course metadata in the learner's language (Filipino). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (see DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Unang hakbang", ["Pagbati", "Pagpapakilala", "Mahahalagang pangungusap 1", "Mahahalagang pangungusap 2", "Alpabeto"]],
  ["Biyahe at araw-araw", ["Direksyon at sasakyan", "Pag-order sa restawran", "Kapihan at convenience store", "Pamimili at pagbabayad", "Numero, oras at petsa", "Biyahe (airport at hotel)", "Ospital at emergency"]],
  ["Usapan at pakikisama", ["Kuwentuhan", "Damdamin at reaksyon", "Papuri at paghanga", "Tawag, text at mga daglat"]],
  ["Trabaho", ["Trabaho at email"]],
  ["Parang native speaker", ["Ingat sa bigkas", "Mga phrasal verb", "Mga idyoma sa Ingles", "Pelikula, serye at slang"]],
  ["Para sa mga Pilipino", ["Mga bitag ng Ingles-Pinoy"]]
];

exports.TAGS = {
  basics: ["Pagbati", "Pagpapakilala", "Mahahalagang pangungusap 1", "Mahahalagang pangungusap 2", "Numero, oras at petsa", "Alpabeto"],
  travel: ["Mahahalagang pangungusap 1", "Mahahalagang pangungusap 2", "Direksyon at sasakyan", "Pag-order sa restawran", "Kapihan at convenience store", "Pamimili at pagbabayad", "Numero, oras at petsa", "Biyahe (airport at hotel)", "Ospital at emergency"],
  social: ["Pagbati", "Pagpapakilala", "Kuwentuhan", "Damdamin at reaksyon", "Papuri at paghanga", "Tawag, text at mga daglat"],
  work: ["Trabaho at email", "Tawag, text at mga daglat", "Numero, oras at petsa", "Kuwentuhan"],
  media: ["Pelikula, serye at slang", "Mga idyoma sa Ingles", "Damdamin at reaksyon"],
  skills: ["Ingat sa bigkas", "Mga phrasal verb", "Mga idyoma sa Ingles", "Mga bitag ng Ingles-Pinoy"]
};

exports.DESC = {
  "Pagbati": "Mga pangunahing bati sa pagkikita at paghihiwalay, at ang natural na sagot sa mga ito",
  "Pagpapakilala": "Pagsasabi ng pangalan, pinagmulan, trabaho at hilig, at pagtatanong nito sa kausap",
  "Mahahalagang pangungusap 1": "Pasasalamat, paumanhin at pagpapaulit kapag hindi mo naintindihan: kailangan mula sa unang araw ng biyahe",
  "Mahahalagang pangungusap 2": "Banyo, presyo, Wi-Fi at pagpapakuha ng litrato: mga pangungusap na magagamit mo agad",
  "Direksyon at sasakyan": "Pagtatanong ng daan, pag-unawa sa direksyon, at pagsakay sa tren, bus at taxi",
  "Pag-order sa restawran": "Mula sa pagkuha ng mesa hanggang sa pag-order, allergy, pagbabayad at tip",
  "Kapihan at convenience store": "Pag-order ng inumin, pagpili ng size at pagpapalit ng sangkap, resibo at supot",
  "Pamimili at pagbabayad": "Pagtingin-tingin, pagsusukat, pagtatanong ng size, pagbabayad, refund at pagpapapalit",
  "Numero, oras at petsa": "Oras, petsa, presyo at malalaking numero, kasama ang in, on at at para sa panahon",
  "Kuwentuhan": "Pagsisimula at pagpapatuloy ng magaan na usapan: weekend, libangan at trabaho",
  "Damdamin at reaksyon": "Pagbati sa tagumpay, gulat, pakikiramay, pagod at iba pang damdamin at reaksyon",
  "Papuri at paghanga": "Pagpuri, pagpapasalamat at mga sasabihin kapag gusto mong mapalapit sa isang tao",
  "Trabaho at email": "Mga pangungusap para sa email sa trabaho, miting at pag-aayos ng schedule",
  "Tawag, text at mga daglat": "Ingles sa telepono at mga daglat sa chat gaya ng LOL, BRB at TBH",
  "Biyahe (airport at hotel)": "Immigration, check-in, upuan sa eroplano, bagahe at mga hiling sa hotel",
  "Ospital at emergency": "Kapag may sakit ka, nasaktan, nawalan ng gamit o nanakawan",
  "Mga phrasal verb": "Mga phrasal verb na laging gamit sa usapan, gaya ng pick up at figure out",
  "Ingat sa bigkas": "F/P, V/B, TH, Z/S, ship/sheep, full/fool, cat/cut at stress: mga tunog na nagpapabago ng salita",
  "Mga idyoma sa Ingles": "Mga idyomang kakaiba kapag isinalin nang salita por salita, kasama ang katumbas sa Filipino",
  "Pelikula, serye at slang": "Mga usong pananalita mula sa pelikula, serye at social media",
  "Alpabeto": "Pangalan ng 26 na titik sa Ingles at kung paano baybayin nang malakas ang pangalan at email",
  "Mga bitag ng Ingles-Pinoy": "CR, open the light, brownout, for a while, luggages: Ingles na karaniwan sa atin pero iba ang dating sa labas ng Pilipinas"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Biyahe", decks: ["Mahahalagang pangungusap 1", "Mahahalagang pangungusap 2", "Direksyon at sasakyan", "Pag-order sa restawran", "Kapihan at convenience store", "Pamimili at pagbabayad", "Biyahe (airport at hotel)", "Ospital at emergency"] },
  work: { label: "Trabaho", decks: ["Pagpapakilala", "Trabaho at email", "Tawag, text at mga daglat", "Numero, oras at petsa", "Kuwentuhan"] },
  social: { label: "Kaibigan at date", decks: ["Pagbati", "Pagpapakilala", "Kuwentuhan", "Damdamin at reaksyon", "Papuri at paghanga", "Tawag, text at mga daglat"] },
  media: { label: "Pelikula, serye at musika", decks: ["Pelikula, serye at slang", "Mga idyoma sa Ingles", "Damdamin at reaksyon", "Mga phrasal verb", "Ingat sa bigkas"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Paghahanda sa biyahe sa ibang bansa", weeks: 3, decks: ["Pagbati", "Mahahalagang pangungusap 1", "Mahahalagang pangungusap 2", "Direksyon at sasakyan", "Pag-order sa restawran", "Kapihan at convenience store", "Pamimili at pagbabayad", "Numero, oras at petsa", "Biyahe (airport at hotel)", "Ospital at emergency"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Pakikipagkaibigan sa mga dayuhan", weeks: 6, decks: ["Pagbati", "Pagpapakilala", "Mahahalagang pangungusap 1", "Kuwentuhan", "Damdamin at reaksyon", "Papuri at paghanga", "Tawag, text at mga daglat", "Mga phrasal verb", "Pelikula, serye at slang", "Mga idyoma sa Ingles"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Usapang Ingles sa loob ng 90 araw", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master); same words as tools/i18n/tl/ui.json */
exports.TITLES = ["Baguhan", "Estudyante", "Madaldal", "Biyahero", "Lokal", "Pro", "Maestro"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Papuri", expression: "Pang-araw-araw na pananalita", polite: "Paggalang", saying: "Kasabihan" };
