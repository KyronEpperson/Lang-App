/* de-en course metadata in the learner's language (German, du). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (see DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Erste Schritte", ["Begrüßung", "Sich vorstellen", "Das Nötigste 1", "Das Nötigste 2", "Das Alphabet"]],
  ["Reisen und Alltag", ["Wege und Verkehrsmittel", "Im Restaurant", "Café und Laden", "Einkaufen und Bezahlen", "Zahlen, Uhrzeit und Datum", "Reisen (Flughafen und Hotel)", "Gesundheit und Notfälle"]],
  ["Gespräche und Beziehungen", ["Smalltalk", "Gefühle und Reaktionen", "Komplimente und Zuneigung", "Telefon und Abkürzungen"]],
  ["Arbeit", ["Arbeit und E-Mails"]],
  ["Wie Muttersprachler", ["Aussprachefallen", "Phrasal Verbs", "Redewendungen", "Filme, Serien und Slang"]],
  ["Wichtig für Deutschsprachige", ["Wichtige Wörter", "Falsche Freunde", "Make und do", "Unzählbare Nomen", "Fremdwörter und Betonung"]]
];

exports.TAGS = {
  basics: ["Begrüßung", "Sich vorstellen", "Das Nötigste 1", "Das Nötigste 2", "Zahlen, Uhrzeit und Datum", "Das Alphabet"],
  travel: ["Das Nötigste 1", "Das Nötigste 2", "Wege und Verkehrsmittel", "Im Restaurant", "Café und Laden", "Einkaufen und Bezahlen", "Zahlen, Uhrzeit und Datum", "Reisen (Flughafen und Hotel)", "Gesundheit und Notfälle"],
  social: ["Begrüßung", "Sich vorstellen", "Smalltalk", "Gefühle und Reaktionen", "Komplimente und Zuneigung", "Telefon und Abkürzungen"],
  work: ["Arbeit und E-Mails", "Telefon und Abkürzungen", "Zahlen, Uhrzeit und Datum", "Smalltalk"],
  media: ["Filme, Serien und Slang", "Redewendungen", "Gefühle und Reaktionen"],
  skills: ["Aussprachefallen", "Phrasal Verbs", "Redewendungen", "Wichtige Wörter", "Falsche Freunde", "Make und do", "Unzählbare Nomen", "Fremdwörter und Betonung"]
};

exports.DESC = {
  "Begrüßung": "Begrüßen, sich verabschieden und natürlich antworten",
  "Sich vorstellen": "Sagen, wie du heißt, woher du kommst, was du machst und was dir Spaß macht – und dasselbe fragen",
  "Das Nötigste 1": "Danke sagen, sich entschuldigen und um Wiederholung bitten: das Wichtigste für den ersten Reisetag",
  "Das Nötigste 2": "Toilette, Preise, WLAN, Fotos: Sätze für die ersten Stunden vor Ort",
  "Wege und Verkehrsmittel": "Nach dem Weg fragen, Wegbeschreibungen verstehen und mit U-Bahn, Bus und Taxi fahren",
  "Im Restaurant": "Vom Tisch bis zur Rechnung: Gerichte, Allergien, Bezahlen und Trinkgeld",
  "Café und Laden": "Getränke bestellen, Größe und Extras ändern, Kassenbon und Tüte",
  "Einkaufen und Bezahlen": "Stöbern, anprobieren, nach Größen fragen, bezahlen, zurückgeben und umtauschen",
  "Zahlen, Uhrzeit und Datum": "Uhrzeiten, Daten, Preise und große Zahlen auf Englisch – mit Dezimalpunkt und Komma bei den Tausendern",
  "Smalltalk": "Das Eis brechen und im Gespräch bleiben: Wetter, Wochenende, Freizeit",
  "Gefühle und Reaktionen": "Gratulieren, staunen, trösten und sagen, wie es dir geht",
  "Komplimente und Zuneigung": "Komplimente machen, Danke sagen und Menschen näherkommen, die dir wichtig sind",
  "Arbeit und E-Mails": "Sätze für berufliche E-Mails, Meetings und Terminänderungen",
  "Telefon und Abkürzungen": "Englisch am Telefon und Chat-Abkürzungen wie LOL, BRB und TBH",
  "Reisen (Flughafen und Hotel)": "Einreise, Check-in, Sitzplätze, Gepäck und Wünsche im Hotel",
  "Gesundheit und Notfälle": "Was du sagst, wenn du krank bist, dich verletzt, etwas verlierst oder bestohlen wirst",
  "Phrasal Verbs": "Die phrasal verbs, die Muttersprachler ständig benutzen, wie pick up und figure out – oft wie trennbare Verben im Deutschen",
  "Aussprachefallen": "Bad/bed, wine/vine, bag/back, think/sink und die Betonung: die Laute, die Deutschsprachigen am schwersten fallen",
  "Redewendungen": "Redewendungen, die man Wort für Wort nicht versteht, mit ihrer deutschen Entsprechung",
  "Filme, Serien und Slang": "Aktuelle Ausdrücke aus Serien, Musik und sozialen Medien",
  "Wichtige Wörter": "Get, take, put, keep, enough, though, still, yet: kurze Wörter, die Muttersprachler ständig benutzen",
  "Falsche Freunde": "Become, chef, handy, also, will: Wörter, die wie deutsche aussehen, aber etwas anderes bedeuten",
  "Make und do": "Die zwei Arten von „machen“: make a mistake, make a decision, do homework, do the dishes",
  "Unzählbare Nomen": "Advice, information, news, furniture, homework: im Deutschen oft Plural, im Englischen ohne -s und ohne a/an",
  "Fremdwörter und Betonung": "Information, university, chemistry, comfortable: Wörter, die du schon kennst, mit der englischen Betonung",
  "Das Alphabet": "Die englischen Namen der Buchstaben: deinen Namen, deine E-Mail-Adresse oder einen Code laut buchstabieren"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Reisen", decks: ["Das Nötigste 1", "Das Nötigste 2", "Wege und Verkehrsmittel", "Im Restaurant", "Café und Laden", "Einkaufen und Bezahlen", "Reisen (Flughafen und Hotel)", "Gesundheit und Notfälle"] },
  work: { label: "Arbeit", decks: ["Sich vorstellen", "Arbeit und E-Mails", "Telefon und Abkürzungen", "Zahlen, Uhrzeit und Datum", "Smalltalk"] },
  social: { label: "Freunde", decks: ["Begrüßung", "Sich vorstellen", "Smalltalk", "Gefühle und Reaktionen", "Komplimente und Zuneigung", "Telefon und Abkürzungen"] },
  media: { label: "Serien und Filme", decks: ["Filme, Serien und Slang", "Redewendungen", "Gefühle und Reaktionen", "Phrasal Verbs", "Aussprachefallen"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Eine Reise vorbereiten", weeks: 3, decks: ["Begrüßung", "Das Nötigste 1", "Das Nötigste 2", "Wege und Verkehrsmittel", "Im Restaurant", "Café und Laden", "Einkaufen und Bezahlen", "Zahlen, Uhrzeit und Datum", "Reisen (Flughafen und Hotel)", "Gesundheit und Notfälle"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Freunde auf Englisch finden", weeks: 6, decks: ["Begrüßung", "Sich vorstellen", "Das Nötigste 1", "Smalltalk", "Gefühle und Reaktionen", "Komplimente und Zuneigung", "Telefon und Abkürzungen", "Phrasal Verbs", "Filme, Serien und Slang", "Redewendungen"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Gesprächsfit in 90 Tagen", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
/* nouns whose grammatical gender does not mark the user's gender (profile §10) */
exports.TITLES = ["Neuling", "Lernfuchs", "Plaudertasche", "Reiseprofi", "Insider", "Ass", "Legende"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Kompliment", expression: "Alltagsausdruck", polite: "Höflichkeit", saying: "Sprichwort" };
