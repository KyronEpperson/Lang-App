/* hmn-en course metadata in the learner's language (White Hmong, RPA). Read by tools/content/gen.js.
   Deck names are FINAL (DECKNAMES.md) and match decks.js. Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order.
   Every Hmong word is in tools/hmong/GLOSSARY.tsv or a sourced NEW-WORDS.tsv row. */
exports.GROUPS = [
  ["Pib kawm", ["Nyob zoo thiab sib ntsib dua", "Kuv tus kheej", "Lus Askiv txhua hnub 1", "Lus Askiv txhua hnub 2", "Kuv thiab kuv tsev neeg", "A txog Z: lus Askiv"]],
  ["Mus ncig thiab txhua hnub", ["Nug kev thiab caij tsheb", "Mus noj mov", "Kav fes thiab khw", "Mus kav khw", "Pes tsawg, sij hawm thiab hnub", "Mus ncig teb chaws", "Tsev kho mob thiab kev pab", "Nyob hauv Amelika"]],
  ["Tham nrog neeg", ["Sib tham", "Zoo siab thiab tu siab", "Kev nyiam thiab lus zoo", "Xov tooj thiab lus luv"]],
  ["Hauj lwm", ["Hauj lwm thiab email"]],
  ["Hais lus Askiv kom zoo", ["Pronunciation: hais ua tib zoo", "Final sounds: -s, -ed", "Lus Hmoob thiab lus Askiv", "Phrasal verbs", "Paj lug lus Askiv", "Movies, TV thiab slang"]]
];

exports.TAGS = {
  basics: ["Nyob zoo thiab sib ntsib dua", "Kuv tus kheej", "Lus Askiv txhua hnub 1", "Lus Askiv txhua hnub 2", "Pes tsawg, sij hawm thiab hnub", "Kuv thiab kuv tsev neeg", "Nyob hauv Amelika", "A txog Z: lus Askiv"],
  travel: ["Lus Askiv txhua hnub 1", "Lus Askiv txhua hnub 2", "Nug kev thiab caij tsheb", "Mus noj mov", "Kav fes thiab khw", "Mus kav khw", "Pes tsawg, sij hawm thiab hnub", "Mus ncig teb chaws", "Tsev kho mob thiab kev pab", "Nyob hauv Amelika"],
  social: ["Nyob zoo thiab sib ntsib dua", "Kuv tus kheej", "Sib tham", "Zoo siab thiab tu siab", "Kev nyiam thiab lus zoo", "Xov tooj thiab lus luv", "Kuv thiab kuv tsev neeg"],
  work: ["Hauj lwm thiab email", "Xov tooj thiab lus luv", "Pes tsawg, sij hawm thiab hnub", "Sib tham"],
  media: ["Movies, TV thiab slang", "Paj lug lus Askiv", "Zoo siab thiab tu siab"],
  skills: ["Pronunciation: hais ua tib zoo", "Final sounds: -s, -ed", "Lus Hmoob thiab lus Askiv", "Phrasal verbs", "Paj lug lus Askiv"]
};

exports.DESC = {
  "Nyob zoo thiab sib ntsib dua": "Lus nyob zoo thaum sib ntsib thiab thaum mus, thiab yuav teb li cas",
  "Kuv tus kheej": "Hais koj lub npe, koj nyob qhov twg, koj hauj lwm thiab yam koj nyiam; nug lwm tus",
  "Lus Askiv txhua hnub 1": "Ua tsaug, thov txim, thiab yuav hais li cas thaum koj tsis nkag siab",
  "Lus Askiv txhua hnub 2": "Chav dej, tus nqi, Wi-Fi, yees duab: lus siv tau txhua hnub",
  "Nug kev thiab caij tsheb": "Nug kev, mloog neeg qhia kev, caij tsheb ntiav thiab tsheb",
  "Mus noj mov": "Thaum koj tuaj txog, thov mov, them nqi thiab muab nyiaj tip",
  "Kav fes thiab khw": "Thov kav fes thiab dej haus, hloov yam koj xav tau, daim ntawv them nqi thiab lub hnab",
  "Mus kav khw": "Saib khoom, sim hnav, nug loj me, them nqi thiab thov nyiaj rov qab",
  "Pes tsawg, sij hawm thiab hnub": "Teev, hnub, lub hli, tus nqi, ib txhiab thiab ib plhom hauv lus Askiv",
  "Sib tham": "Pib tham thiab tham ntxiv txog huab cua, hnub so thiab yam koj nyiam",
  "Zoo siab thiab tu siab": "Zoo siab nrog neeg, xav tsis txog, tu siab nrog neeg thiab nkees",
  "Kev nyiam thiab lus zoo": "Hais lus zoo rau neeg, ua tsaug, thiab thaum koj xav ua phooj ywg",
  "Hauj lwm thiab email": "Lus sau email tom hauj lwm thiab teem sij hawm sib ntsib",
  "Xov tooj thiab lus luv": "Hais lus Askiv hauv xov tooj thiab lus luv zoo li LOL, BRB, TBH",
  "Mus ncig teb chaws": "Tom dav hlau thiab tom tsev hotel: qhov chaw zaum, hnab, thiab yam koj thov",
  "Tsev kho mob thiab kev pab": "Thaum koj mob los yog raug mob, poob khoom, thiab thaum koj xav tau neeg txhais lus",
  "Phrasal verbs": "pick up, figure out thiab lwm yam phrasal verbs uas neeg Amelika siv txhua hnub",
  "Pronunciation: hais ua tib zoo": "r thiab l, th, sh thiab s, b thiab v, vowel ntev thiab luv, stress: cov uas nyuaj rau neeg Hmoob",
  "Paj lug lus Askiv": "Lus Askiv uas neeg hais ntau, tab sis txhais ib lo lus ib lo lus koj yuav tsis nkag siab",
  "Movies, TV thiab slang": "Lus hauv movies, TV thiab ntawm cov hluas",
  "A txog Z: lus Askiv": "Lub npe ntawm 26 tus tsiaj ntawv thiab yuav sau koj lub npe thiab email li cas thaum hais",
  "Final sounds: -s, -ed": "Consonant kawg, -s thiab -ed: hais kom hnov, vim lus Hmoob tsis muaj",
  "Kuv thiab kuv tsev neeg": "Niam, txiv, nus muag thiab he, she, it, him, her: lus Askiv muaj ntau lo lus rau nws",
  "Lus Hmoob thiab lus Askiv": "Yam uas lus Hmoob ua txawv: adjective, be, plural -s, he thiab him, lo lus nug",
  "Nyob hauv Amelika": "Tsev kho mob, tsev kawm ntawv, tsheb ntiav, daus thiab noj peb caug hauv lus Askiv"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Mus ncig thiab txhua hnub", decks: ["Lus Askiv txhua hnub 1", "Lus Askiv txhua hnub 2", "Nug kev thiab caij tsheb", "Mus noj mov", "Kav fes thiab khw", "Mus kav khw", "Mus ncig teb chaws", "Tsev kho mob thiab kev pab", "Nyob hauv Amelika"] },
  work: { label: "Hauj lwm", decks: ["Kuv tus kheej", "Hauj lwm thiab email", "Xov tooj thiab lus luv", "Pes tsawg, sij hawm thiab hnub", "Sib tham"] },
  social: { label: "Phooj ywg thiab tsev neeg", decks: ["Nyob zoo thiab sib ntsib dua", "Kuv tus kheej", "Kuv thiab kuv tsev neeg", "Sib tham", "Zoo siab thiab tu siab", "Kev nyiam thiab lus zoo", "Xov tooj thiab lus luv"] },
  media: { label: "Movies, TV thiab nkauj", decks: ["Movies, TV thiab slang", "Paj lug lus Askiv", "Zoo siab thiab tu siab", "Phrasal verbs", "Pronunciation: hais ua tib zoo"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Npaj mus ncig", weeks: 3, decks: ["Nyob zoo thiab sib ntsib dua", "Lus Askiv txhua hnub 1", "Lus Askiv txhua hnub 2", "Nug kev thiab caij tsheb", "Mus noj mov", "Kav fes thiab khw", "Mus kav khw", "Pes tsawg, sij hawm thiab hnub", "Mus ncig teb chaws", "Tsev kho mob thiab kev pab"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Tham nrog phooj ywg", weeks: 6, decks: ["Nyob zoo thiab sib ntsib dua", "Kuv tus kheej", "Lus Askiv txhua hnub 1", "Kuv thiab kuv tsev neeg", "Sib tham", "Zoo siab thiab tu siab", "Kev nyiam thiab lus zoo", "Xov tooj thiab lus luv", "Phrasal verbs", "Movies, TV thiab slang", "Paj lug lus Askiv"], lessons: ["pron", "articles", "be", "he-she-it", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Tham tau hauv 90 hnub", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
exports.TITLES = ["Neeg pib kawm", "Neeg kawm ntawv", "Neeg txawj tham", "Neeg mus ncig", "Neeg hauv zos", "Neeg txawj", "Neeg txawj heev"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Lus zoo rau neeg", expression: "Lus txhua hnub", polite: "Lus thov thiab ua tsaug", saying: "Paj lug" };
