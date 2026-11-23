/* pl-en course metadata in the learner's language (Polish). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (FINAL names: DECKNAMES.md, plain spaces). Lesson ids are the shared English ids.
   Group names, descriptions and labels carry U+00A0 (written as \u00a0) after one-letter words and between a number and its noun (profile pl.md §2).
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Pierwsze kroki", ["Powitania", "O sobie", "Niezbędnik 1", "Niezbędnik 2", "Alfabet"]],
  ["Podróże i\u00a0codzienność", ["Droga i transport", "W restauracji", "Kawiarnia i sklep", "Zakupy i płatności", "Liczby, godziny i daty", "Podróże (lotnisko i hotel)", "Lekarz i nagłe wypadki"]],
  ["Rozmowy i\u00a0relacje", ["Pogawędki", "Emocje i reakcje", "Komplementy i sympatia", "Telefon i skróty z czatu"]],
  ["Praca", ["Praca i e-maile"]],
  ["Naturalny angielski", ["Wymowa: pułapki", "Fałszywi przyjaciele i kalki", "Czasowniki frazowe", "Angielskie idiomy", "Filmy, seriale i slang"]]
];

exports.TAGS = {
  basics: ["Powitania", "O sobie", "Niezbędnik 1", "Niezbędnik 2", "Liczby, godziny i daty", "Alfabet"],
  travel: ["Niezbędnik 1", "Niezbędnik 2", "Droga i transport", "W restauracji", "Kawiarnia i sklep", "Zakupy i płatności", "Liczby, godziny i daty", "Podróże (lotnisko i hotel)", "Lekarz i nagłe wypadki"],
  social: ["Powitania", "O sobie", "Pogawędki", "Emocje i reakcje", "Komplementy i sympatia", "Telefon i skróty z czatu", "Fałszywi przyjaciele i kalki"],
  work: ["Praca i e-maile", "Telefon i skróty z czatu", "Liczby, godziny i daty", "Pogawędki"],
  media: ["Filmy, seriale i slang", "Angielskie idiomy", "Emocje i reakcje"],
  skills: ["Wymowa: pułapki", "Fałszywi przyjaciele i kalki", "Czasowniki frazowe", "Angielskie idiomy"]
};

exports.DESC = {
  "Powitania": "Powitania i\u00a0pożegnania oraz naturalne odpowiedzi na How are you?",
  "O sobie": "Imię, kraj, praca i\u00a0zainteresowania — jak opowiedzieć o\u00a0sobie i\u00a0zapytać o\u00a0to samo rozmówcę",
  "Niezbędnik 1": "Dziękuję, przepraszam, proszę powtórzyć — zwroty potrzebne od pierwszego dnia",
  "Niezbędnik 2": "Toaleta, cena, Wi-Fi, prośba o\u00a0zdjęcie — zdania, które przydają się zaraz po przyjeździe",
  "Droga i transport": "Pytanie o\u00a0drogę, wskazówki, metro, autobus i\u00a0taksówka",
  "W restauracji": "Od stolika i\u00a0zamówienia po alergie, rachunek i\u00a0napiwek",
  "Kawiarnia i sklep": "Zamawianie kawy, rozmiar i\u00a0dodatki, paragon i\u00a0torba",
  "Zakupy i płatności": "Przymierzanie, rozmiary, przeceny, płacenie, zwroty i\u00a0wymiana",
  "Liczby, godziny i daty": "Godziny, daty, ceny i\u00a0duże liczby po angielsku: kropka zamiast przecinka, najpierw miesiąc, potem dzień",
  "Pogawędki": "Pogoda, weekend, zainteresowania — jak zacząć luźną rozmowę i\u00a0ją podtrzymać",
  "Emocje i reakcje": "Gratulacje, zaskoczenie, współczucie, zmęczenie — emocje i\u00a0szybkie reakcje",
  "Komplementy i sympatia": "Komplementy, podziękowania i\u00a0zwroty, które pomagają się zaprzyjaźnić",
  "Praca i e-maile": "Zdania do służbowych e-maili, spotkań i\u00a0ustalania terminów — oraz czym zastąpić „Szanowni Państwo” i\u00a0„Z\u00a0poważaniem”",
  "Telefon i skróty z czatu": "Rozmowa przez telefon i\u00a0skróty z\u00a0czatu: LOL, BRB, TBH",
  "Podróże (lotnisko i hotel)": "Kontrola paszportowa, odprawa, miejsce w\u00a0samolocie, bagaż i\u00a0prośby w\u00a0hotelu",
  "Lekarz i nagłe wypadki": "Choroba, uraz, zgubione lub skradzione rzeczy — co powiedzieć w\u00a0nagłej sytuacji",
  "Czasowniki frazowe": "pick up, figure out i\u00a0inne czasowniki frazowe, bez których nie ma żywej rozmowy",
  "Wymowa: pułapki": "Akcent wyrazowy, bad i\u00a0bed, dźwięczne końcówki, th, w\u00a0i\u00a0v, -ing — dźwięki, które sprawiają Polakom kłopot",
  "Angielskie idiomy": "Wyrażenia, których nie da się tłumaczyć dosłownie, i\u00a0ich polskie odpowiedniki",
  "Filmy, seriale i slang": "Współczesne zwroty z\u00a0seriali, muzyki i\u00a0mediów społecznościowych",
  "Alfabet": "Angielskie nazwy 26\u00a0liter — żeby przeliterować imię, adres e-mail albo kod rezerwacji",
  "Fałszywi przyjaciele i kalki": "actual to nie „aktualny”, a\u00a0„mam 20\u00a0lat” to nie I have 20 years: fałszywi przyjaciele i\u00a0kalki z\u00a0polskiego"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Podróże", decks: ["Niezbędnik 1", "Niezbędnik 2", "Droga i transport", "W restauracji", "Kawiarnia i sklep", "Zakupy i płatności", "Podróże (lotnisko i hotel)", "Lekarz i nagłe wypadki"] },
  work: { label: "Praca", decks: ["O sobie", "Praca i e-maile", "Telefon i skróty z czatu", "Liczby, godziny i daty", "Pogawędki"] },
  social: { label: "Znajomi i\u00a0randki", decks: ["Powitania", "O sobie", "Pogawędki", "Emocje i reakcje", "Komplementy i sympatia", "Telefon i skróty z czatu"] },
  media: { label: "Filmy, seriale i\u00a0muzyka", decks: ["Filmy, seriale i slang", "Angielskie idiomy", "Emocje i reakcje", "Czasowniki frazowe", "Wymowa: pułapki"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Przygotowanie do wyjazdu", weeks: 3, decks: ["Powitania", "Niezbędnik 1", "Niezbędnik 2", "Droga i transport", "W restauracji", "Kawiarnia i sklep", "Zakupy i płatności", "Liczby, godziny i daty", "Podróże (lotnisko i hotel)", "Lekarz i nagłe wypadki"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Rozmowy z\u00a0obcokrajowcami", weeks: 6, decks: ["Powitania", "O sobie", "Niezbędnik 1", "Pogawędki", "Emocje i reakcje", "Komplementy i sympatia", "Telefon i skróty z czatu", "Fałszywi przyjaciele i kalki", "Czasowniki frazowe", "Filmy, seriale i slang", "Angielskie idiomy"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "ponglish", "phrasal", "idioms"] },
  conv: { label: "Swobodna rozmowa w\u00a090\u00a0dni", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master);
   gender-neutral stage names, not names for a person (profile pl.md §10) */
exports.TITLES = ["Pierwsze kroki", "Szkolna ławka", "Luźna rozmowa", "W\u00a0podróży", "Jak u\u00a0siebie", "Wyższa liga", "Klasa mistrzowska"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Komplementy", expression: "Zwroty na co dzień", polite: "Uprzejmość", saying: "Przysłowia i\u00a0sentencje" };
