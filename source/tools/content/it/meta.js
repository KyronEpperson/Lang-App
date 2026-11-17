/* it-en course metadata in the learner's language (Italian). Read by tools/content/gen.js.
   Deck names here must match the deck names in decks.js (see DECKNAMES.md). Lesson ids are the shared English ids.
   PLAN_PRESETS: decks "@path" = every deck in GROUPS order; lessons "@all" = every lesson in course order. */
exports.GROUPS = [
  ["Primi passi", ["Saluti", "Presentarsi", "Sopravvivenza 1", "Sopravvivenza 2"]],
  ["Viaggi e vita quotidiana", ["Indicazioni e trasporti", "Al ristorante", "Bar e negozio", "Acquisti e pagamenti", "Numeri, ore e date", "Viaggi (aeroporto e hotel)", "Salute ed emergenze"]],
  ["Conversazione e relazioni", ["Due chiacchiere", "Emozioni e reazioni", "Complimenti e affetto", "Telefono e abbreviazioni"]],
  ["Lavoro", ["Lavoro ed e-mail"]],
  ["Come un madrelingua", ["Trappole di pronuncia", "Phrasal verbs", "Espressioni idiomatiche", "Cinema, serie e slang"]],
  ["Punti chiave per italiani", ["Parole essenziali", "Falsi amici", "Make e do", "Non numerabili", "Parole trasparenti e accento"]]
];

exports.TAGS = {
  basics: ["Saluti", "Presentarsi", "Sopravvivenza 1", "Sopravvivenza 2", "Numeri, ore e date"],
  travel: ["Sopravvivenza 1", "Sopravvivenza 2", "Indicazioni e trasporti", "Al ristorante", "Bar e negozio", "Acquisti e pagamenti", "Numeri, ore e date", "Viaggi (aeroporto e hotel)", "Salute ed emergenze"],
  social: ["Saluti", "Presentarsi", "Due chiacchiere", "Emozioni e reazioni", "Complimenti e affetto", "Telefono e abbreviazioni"],
  work: ["Lavoro ed e-mail", "Telefono e abbreviazioni", "Numeri, ore e date", "Due chiacchiere"],
  media: ["Cinema, serie e slang", "Espressioni idiomatiche", "Emozioni e reazioni"],
  skills: ["Trappole di pronuncia", "Phrasal verbs", "Espressioni idiomatiche", "Parole essenziali", "Falsi amici", "Make e do", "Non numerabili", "Parole trasparenti e accento"]
};

exports.DESC = {
  "Saluti": "Saluti e congedi di base, e come rispondere con naturalezza",
  "Presentarsi": "Dire il tuo nome, di dove sei, che lavoro fai e che cosa ti piace, e fare le stesse domande a un'altra persona",
  "Sopravvivenza 1": "Ringraziare, scusarti e chiedere di ripetere: l'essenziale del primo giorno di viaggio",
  "Sopravvivenza 2": "Bagno, prezzi, wifi, foto: frasi da usare appena arrivi",
  "Indicazioni e trasporti": "Chiedere la strada, capire le indicazioni e muoverti in metropolitana, autobus e taxi",
  "Al ristorante": "Dal chiedere un tavolo al chiedere il conto: piatti, allergie, pagamento e mancia",
  "Bar e negozio": "Ordinare da bere, scegliere misura e opzioni, scontrini e buste (e perché un \"latte\" americano non è un caffellatte)",
  "Acquisti e pagamenti": "Guardare, provare i vestiti, chiedere la taglia, pagare, fare un reso e un cambio",
  "Numeri, ore e date": "Ore, date, prezzi e numeri grandi all'inglese (con il punto decimale)",
  "Due chiacchiere": "Rompere il ghiaccio e portare avanti la conversazione: tempo, fine settimana, hobby",
  "Emozioni e reazioni": "Fare le congratulazioni, stupirti, consolare e dire come ti senti",
  "Complimenti e affetto": "Fare complimenti, ringraziare e avvicinarti a qualcuno con cui vuoi più confidenza",
  "Lavoro ed e-mail": "Frasi per e-mail di lavoro, riunioni e cambi di orario",
  "Telefono e abbreviazioni": "Inglese al telefono e abbreviazioni da chat come LOL, BRB e TBH",
  "Viaggi (aeroporto e hotel)": "Controllo passaporti, check-in, posti, bagagli e richieste in albergo",
  "Salute ed emergenze": "Che cosa dire se ti senti male, ti fai male, perdi qualcosa o ti rubano qualcosa",
  "Phrasal verbs": "I phrasal verb che i madrelingua usano di più, come pick up e figure out, al posto del verbo colto",
  "Trappole di pronuncia": "Ship/sheep, hair/air, cat/cut, bad/bed, shoes/choose, la h, la th, la -ed e le vocali finali: i suoni che costano di più a chi parla italiano",
  "Espressioni idiomatiche": "Espressioni che non si capiscono parola per parola, con il loro equivalente italiano",
  "Cinema, serie e slang": "Espressioni di oggi dalle serie, dalla musica e dai social",
  "Parole essenziali": "Get, take, put, keep, enough, though, still, yet: parole brevi che i madrelingua usano di continuo e che non assomigliano all'italiano",
  "Falsi amici": "Actually, factory, educated, library, college: parole che assomigliano all'italiano ma significano un'altra cosa",
  "Make e do": "I due modi di dire «fare»: make a mistake, make a decision, do homework, do the dishes",
  "Non numerabili": "Advice, information, news, furniture, homework: in italiano si contano, in inglese non vogliono né -s né a/an",
  "Parole trasparenti e accento": "-tion = -zione, -ty = -tà, -ous = -oso, -ly = -mente: parole che conosci già, con l'accento tonico dove lo mette l'inglese"
};

/* goal keys (travel/work/social/media) are fixed by the engine */
exports.GOALS = {
  travel: { label: "Viaggiare", decks: ["Sopravvivenza 1", "Sopravvivenza 2", "Indicazioni e trasporti", "Al ristorante", "Bar e negozio", "Acquisti e pagamenti", "Viaggi (aeroporto e hotel)", "Salute ed emergenze"] },
  work: { label: "Lavoro", decks: ["Presentarsi", "Lavoro ed e-mail", "Telefono e abbreviazioni", "Numeri, ore e date", "Due chiacchiere"] },
  social: { label: "Amici", decks: ["Saluti", "Presentarsi", "Due chiacchiere", "Emozioni e reazioni", "Complimenti e affetto", "Telefono e abbreviazioni"] },
  media: { label: "Serie e film", decks: ["Cinema, serie e slang", "Espressioni idiomatiche", "Emozioni e reazioni", "Phrasal verbs", "Trappole di pronuncia"] }
};

exports.PLAN_PRESETS = {
  trip: { label: "Preparare un viaggio", weeks: 3, decks: ["Saluti", "Sopravvivenza 1", "Sopravvivenza 2", "Indicazioni e trasporti", "Al ristorante", "Bar e negozio", "Acquisti e pagamenti", "Numeri, ore e date", "Viaggi (aeroporto e hotel)", "Salute ed emergenze"], lessons: ["pron", "polite", "prep", "numbers"] },
  social: { label: "Fare amicizia in inglese", weeks: 6, decks: ["Saluti", "Presentarsi", "Sopravvivenza 1", "Due chiacchiere", "Emozioni e reazioni", "Complimenti e affetto", "Telefono e abbreviazioni", "Phrasal verbs", "Cinema, serie e slang", "Espressioni idiomatiche"], lessons: ["pron", "articles", "be", "tense", "smalltalk", "phrasal", "idioms"] },
  conv: { label: "Conversazione in 90 giorni", weeks: 13, decks: "@path", lessons: "@all" }
};

/* native names for the shared level titles in gen.js (Beginner, Student, Talker, Traveler, Local, Pro, Master) */
/* gender-neutral nouns on purpose (profile §10): no Studente/Viaggiatore/Esperto that would agree with the user */
exports.TITLES = ["Principiante", "Apprendista", "Parlante", "Giramondo", "Del posto", "Pro", "Leggenda"];

/* native labels for the pause-screen phrase sets; gen.js prefixes the shared English label ("Compliment · ") */
exports.PAUSE_LABELS = { compliment: "Complimento", expression: "Espressione quotidiana", polite: "Cortesia", saying: "Proverbio" };
