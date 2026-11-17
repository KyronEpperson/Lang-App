# it-en cold review (IT-REVIEWER), 2026-11-17

**Scope.** I edited:
- everything under tools/content/it except profile.json, the deviations files and DECKNAMES.md;
- the `t` fields of tools/i18n/it/ui.json and tools/i18n/it/roadmap.json. A structural diff against the pre-review copy shows only `"t"` values changed.

I did not touch any generator, pack, src/app.html or other language. I did not run build.sh and did not commit anything. No English changed anywhere: every edit is Italian text, a note, or a respelling.

**Read in full:**
- decks.js (480 cards: every meaning and note) and extra.js (DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS);
- meta.js, lessons.js, practice.js and every checks entry in lessons.js;
- the bodies of all 30 stage lessons in more/a1, a2 and b1, every `ty` prompt with its accepted answers, all 90 stage checks with their `why`, and the whole `false-friends` set. The other stage `mc`, `or` and `fi` items (about 330) were covered only by targeted scans (do/does "action" rule, *any* in questions, -ing heading, Spanish leftovers, stress capitals), **not read line by line**;
- in ui.json: the tab, feedback, settings, greeting, plan, goal, title, tag, count-pattern, calibration and language-slot strings, plus regex scans of all 1,041 strings for gendered user forms, formal *Lei*, infinitive buttons, off-glossary terms, «feedback» and spacing before `: ; ? !`, and the 26 strings left identical to English. Most other ui.json strings were **not** read one by one;
- all 425 roadmap titles.

**Status.** Every check passes on scratch outputs (final lines at the end of this file).
- Verb-core `[vc N]` counts are unchanged in every lesson: no `why` line was edited.
- Lint meaning variants fell from 26 to 23.
- New files:
  - `PRON-RULES.md`: settled IPA conventions;
  - `pron_check.js`: fr's checker copied for it. It reports 0 phrase conflicts and 0 rule hits, and it-en is identical to pt-en at phrase and word level.
- Edits were applied by script, which asserted that each old string occurred exactly once. The edit lists are in the session scratchpad.

## 1. What changed (101 edits: 81 content, 17 interface strings, 3 roadmap titles)

### Wrong or misleading teaching: 16
**Card notes carried over from the source course, or false (decks.js, 11):**
- *Is there a pharmacy near here?* «"Is there", mai "Has a pharmacy"»: that is the Spanish *hay* error. Italian «c'è» never gives *has*. → «"Is there" con un nome singolare, «ci sono» è "Are there" con il plurale».
- *Where's gate 12?* «Il numero va dopo: "gate 12"»: Italian says «gate 12» too. → how gate and seat numbers are read ("gate twelve", "seat fourteen B").
- *Is it spicy?* «Negli Stati Uniti "spicy" di solito pizzica meno di quanto ti aspetti»: a remark from the Korean course; for an Italian diner it is the reverse. → «Se vuoi un piatto poco piccante, chiedi "mild"».
- *Ten thousand* «3.5 si legge «tre virgola cinque»»: reads as the English reading. → «3.5 («tre virgola cinque») si legge "three point five"».
- *Twice a week* «non si dice "per week"»: *per week* is correct English. → «"a week" è più comune; "per week" è più formale».
- *My flight was delayed.* «si usa il passivo, non "is late"»: *My flight was late* is fine English. → «"delayed" è la parola dei tabelloni; a voce si sente anche "My flight was late"». The meaning «ha subito un ritardo» became «era in ritardo».
- *Yes, please.* «"thank you" serve per rifiutare»: overstated. → «per accettare si aggiunge di solito "please", mentre "No, thank you" è il modo cortese di rifiutare».
- *I'm not sure.* «La negazione con "be" si fa con "not"»: true but teaches nothing (the source course's note). → «"sure" si legge /ʃʊr/».
- *seat*, *ship*, *sheep*: «se la accorci / allunghi diventa…» taught the /iː/–/ɪ/ contrast as length only. That contradicts the pron lesson, check 0 and profile §4.16. → each note now names the quality (tense vs relaxed).

**Lessons and examples (5):**
- extra.js EXAMPLES *I'm not sure, but I think it's on the second floor*: «al secondo piano» → «al primo piano». The US *second floor* is the Italian *primo piano*.
- lessons.js `pron` body: «puoi nasconderla con «Mostra la pronuncia (IPA)»» named a label that is not on screen. → the «Aa» button in the drills, or the setting «Mostra la pronuncia (IPA) nella pratica» in the Profile settings (the `qromT` button and the `quizRom` setting in src/app.html).
- practice.js smalltalk fill 3 «Hai visto qualcosa di bello ultimamente?» did not lead to *shows / movies*. → «Hai visto qualche bella serie o qualche bel film ultimamente?».
- practice.js email order 3 «Verifico e Le faccio sapere»: no tile says «verifico». → «Le farò sapere».
- more/a1.js false-friends body: «*realize* non vuol dire realizzare un progetto» contradicted the deck card («Coincide in "realize a dream"»). → *carry out* for a project, but *realize a dream*.

### Unnatural wording: 38 (examples)
- **Phrasal verbs deck: "Verbo latino corrispondente: «accendere»" (8 notes, plus «Corrisponde al latinismo «raccogliere»»).** For an Italian speaker this says nothing: the "Latinate verb" is the Italian meaning itself. The notes were deleted where the card already names the formal English verb (*enter*, *continue*, *tolerate*). *pick up* now says «più comune di "collect"».
- **Deck meanings:**
  - *I'm from Italy* «Sono italiano / italiana» (that is *I'm Italian*) → «Vengo dall'Italia»;
  - *Everything was great* «Tutto squisito» → «Era tutto ottimo»;
  - *You made my day!* «Mi hai fatto la giornata!» (calque) → «Mi hai rallegrato la giornata!», in the deck and in EXAMPLES. Colloquial «Mi hai svoltato la giornata» is Roman in origin, which profile §2 rules out;
  - *Take care* «Abbi cura di te» → «Stammi bene / Abbi cura di te»;
  - *I don't get it* «Non lo capisco» → «Non ci arrivo»;
  - *I'd love to* «Mi piacerebbe» → «Mi piacerebbe molto! / Volentieri!»;
  - *Can I get oat milk instead?* «Posso avere il latte d'avena al posto di questo?» → «Posso averlo con il latte d'avena?»;
  - *Could you take a picture of us?* «Ci scatteresti una foto?» → «Ci faresti una foto?» (deck and DIALOG).
- **Deck notes:**
  - «Lo dicono i cassieri dopo aver incassato» → «quando paghi»;
  - «Come in italiano cambia l'immagine: un cespuglio, non un cane» → «L'immagine cambia: in inglese un cespuglio, in italiano un cane»;
  - the garbled *get home* note was rewritten;
  - «"address" … a differenza di «indirizzo»» (the two words are not related) → spelling plus stress /ˈædres/.
- **DIALOG and EXAMPLES:**
  - «Ci sono frutta a guscio qui dentro?» (agreement error) → «Contiene frutta a guscio?»;
  - «Ti va di passare del tempo insieme…?» → «Ti va di vederci…?»;
  - «Lo penso anch'io» → «Anch'io la penso così».
- **PAUSE glosses:**
  - «Illumini la stanza» → «Sei solare»;
  - «Sei un talento naturale» → «Ti viene naturale»;
  - «Lo apprezzo molto» → «Grazie, sei molto gentile»;
  - «L'onestà è la migliore politica» → «L'onestà paga sempre»;
  - «Abbi sempre fame, resta sempre folle» → «Siate affamati, siate folli» (the current Italian rendering of the quote);
  - «Assolutamente» → «Assolutamente sì»;
  - «Prego? (molto formale)» → «Come, prego?».
- **Interface:**
  - `#media` «#media» (in Italian *media* also means "average") → «#cinema». «#serie» was ruled out: «serie» is the glossary word for streak;
  - «Quanto sai di {1}?» → «Quanto ne sai di {1}?».
- **Roadmap:**
  - «Dure e morbide, sonore e sorde» → «Consonanti dure e morbide, sonore e sorde»;
  - «Present perfect: esperienza» → «esperienze».

### Pron: 0 IPA edits
- 41 hand-written rows with no zh or pt counterpart were checked for stress on function words (PRON-RULES §5); none needed a change.
- pron_check found no conflict: every transcription that zh-en or pt-en also has is identical, and the 19 new words are consistent with zh §A–§D. They are recorded in PRON-RULES §1–§2: Rome, Milan, Naples, London, Canada, Marco, Umberto Eco, the 8 new false friends, and the new minimal pairs.
- Respelling and stress-notation fixes are counted under formatting below. They are recorded in PRON-RULES §3–§4.

### Formatting and consistency: 47
- **«accento» → «accento tonico»** in 17 deck notes and 1 meta.js description (glossary §3).
- **Stress named with English letters:** *Congratulations* "lei" → "la"; *exactly* "sact" → «sulla seconda sillaba»; *comfortable* «con-for-TE-vole» → «non va verso la fine come in «confortevole»».
- **One respelling per error:**
  - the *worked* error is «uor-ked» everywhere (decks.js had "wor-ked", more/a1.js "work-ed");
  - the *milk* error is «milche», as in pron check 1 (the card had «milke»).
- **Same English, same meaning** (lint):
  - *Could you say that again?* «Potresti ripetere?»;
  - *Would you like some tea?* «Vuoi un tè?» (was «Gradisci del tè?»);
  - *Is breakfast included?* «La colazione è compresa?»;
  - *I hope this email finds you well* «Spero che stia bene» (*Lei*, as profile §2 sets for business e-mail);
  - *I'm all ears* «Sono tutt'orecchi».
- **Other:**
  - «15-20 %» → «15-20%»;
  - meta.js «I phrasal verbs» → «I phrasal verb» (borrowed words stay invariable);
  - meta.js «scegliere dimensioni» → «scegliere misura» (counted as unnatural).
- **Interface: «Pareri» everywhere (12 strings).** The tab is «Pareri», but the page and messages still said «feedback». Now:
  - «Usa la scheda Pareri», «Bacheca dei pareri», «Pareri della community», «Aggiorna i pareri»;
  - «Impossibile caricare i pareri…», «Ancora nessun parere — inizia tu.», «L'invio dei pareri funziona…»;
  - «Invia il parere», «Il tuo parere».
  - Three patterns follow the same rule: «Riprova oppure scrivi in Pareri», «Pareri · azioni rapide», «{1}/{2} · Pareri».
  - The page heading «Dicci la tua» stays.
- **Interface = course:** the plan names now match meta.js PLAN_PRESETS. «Viaggio all'estero» → «Preparare un viaggio», «Amicizie e appuntamenti» → «Fare amicizia in inglese», «Conversare in 90 giorni» → «Conversazione in 90 giorni». The calibration line already names the button as it reads («Non so bene»).
- **Roadmap:** «will vs going to» → «will e going to a confronto», like the other comparison titles.

### Interface decisions (checked, no change)
- **Tab bar** `Oggi · Pratica · Ripasso · Lezioni · Esercizi · Profilo · Pareri`: kept.
  - «Pareri» (6) is the best Italian word that fits: «Opinioni» and «Commenti» have 8 letters, and «Idee» leaves out bug reports.
  - Settings «Testo» is kept, as the lead set it.
- **Left identical to English, all kept:**
  - `Standard · 5`: Italian word; it mirrors «Veloce · 2 min» / «Lunga · 10»;
  - `Audio`, `Backup`, `Privacy`, `💡 Idea`, `Quiz`, `Mix`, `Pro`: the normal Italian words;
  - `🐞 Bug`: the usual Italian software word; «Errore» would be confused with wrong answers;
  - `~5 min`, `2 min`, `5 min`, `10 min`: «min» is the Italian abbreviation;
  - `⚡ Blitz`: an Italian loan («un blitz»);
  - `Nickname`, `admin`: standard in Italian apps;
  - `Senior`, `Sensei`: Korean-course level titles (Korean honorific terms) that the it course never shows.
  - Only `#media` changed (above).
- **Weekday headers** «Dom Lun Mar Mer Gio Ven Sab»: standard three-letter Italian abbreviations. Kept.
- **Count patterns:** a scan for a slot followed by an inflected word found none that fails at 0 or 1. Every count follows a colon («Lezioni previste: {1}», «Ultimi ripassi: {1}»), sits in «{1} di {2}», or stands next to an invariable unit («{1} XP», «{1} s», «{1} min»).
- **Language-name slots:** none follows an article. «in {1}», «di {1}» and «: {1}» are used, as profile §10 allows.
- **Feedback wording:** «Esatto!» / «Non proprio» as in the profile glossary. Kept.
- **Greeting** «Buon pomeriggio»: unlike French, Italian apps and broadcasters use it as a greeting. Kept.
- **Gender and register:** no string addresses the user with a gendered adjective, formal *Lei*, «Benvenuto» or an apostrophe for an accent, and no string has a space before `: ; ? !`.
- **Level titles** «Principiante · Apprendista · Parlante · Giramondo · Del posto · Pro · Leggenda»: identical in meta.js and ui.json, and invariable for gender. Kept, but flagged below.

## 2. Edit counts per file

| file | lines / strings | wrong/misleading | unnatural wording | pron | formatting | total |
|---|---:|---:|---:|---:|---:|---:|
| decks.js | 535 | 11 | 21 | 0 | 28 | 60 |
| extra.js | 298 | 1 | 12 | 0 | 0 | 13 |
| meta.js | 69 | 0 | 1 | 0 | 2 | 3 |
| lessons.js | 257 | 1 | 0 | 0 | 0 | 1 |
| practice.js | 231 | 2 | 0 | 0 | 0 | 2 |
| more/a1.js | 502 | 1 | 0 | 0 | 1 | 2 |
| more/a2.js | 277 | 0 | 0 | 0 | 0 | 0 |
| more/b1.js | 155 | 0 | 0 | 0 | 0 | 0 |
| ui.json | 1041 strings | 0 | 2 | 0 | 15 | 17 |
| roadmap.json | 425 titles | 0 | 2 | 0 | 1 | 3 |

(The pron column counts IPA edits; respellings and stress notation are under formatting.)

**Verdict: the decks and dialogues (decks.js, extra.js) are noticeably weaker; meta.js and the interface are not.**
- Comparing fully read files only: decks.js and extra.js needed 73 edits in 833 lines (8.8 per 100), against 3 in 488 lines (0.6 per 100) for lessons.js and practice.js, about 14 times more.
- Leaving out the mechanical «accento tonico» and lint unifications (22 edits), the deck/dialogue rate is still 6.1 per 100 lines.
- Wrong/misleading edits: 12 in decks/extra (1.4 per 100) against 3 in lessons.js and practice.js (0.6 per 100).
- The stage files (more/*.js) needed 2 edits. Their bodies, checks and typed items were read; their other practice items were only scanned, so their low rate is not fully comparable.
- The deck errors are of the kinds the brief predicted:
  - notes carried over from the Spanish or Korean course (*Has a pharmacy*, gate numbers, spicy food, *I'm not sure*);
  - false claims about English (*per week*, *is late*);
  - length-only vowel notes;
  - the meaningless "Verbo latino corrispondente" lines;
  - glosses translated word for word (*Illumini la stanza*, *Mi hai fatto la giornata*, *L'onestà è la migliore politica*).
- Their Italian is otherwise grammatical, consistently *tu*, and correctly punctuated.
- The lesson files read as native, explain from Italian grammar throughout, and avoid all three recurring teaching errors.
- In the parts of ui.json that were read or scanned, every change is a consistency fix (Pareri follow-through, plan names) or a wording choice; no wrong text was found. roadmap.json needed 3 small fixes.

## 3. For a native speaker: top ten
1. **Level titles «Parlante» and «Del posto»** (*Talker*, *Local*). Does «Parlante» work as a noun on a badge? Alternatives: «Chiacchierone» is gendered; «Loquace»?
2. **«Mi hai rallegrato la giornata!»** (*You made my day!*). Standard but a little flat. Is the widespread colloquial «Mi hai svoltato la giornata» (Roman in origin) acceptable after all, or is the calque «Mi hai fatto la giornata» now normal Italian?
3. **«Pareri»** as the Feedback tab and its follow-through («Bacheca dei pareri», «Invia il parere»). Natural, or would users expect «Feedback»?
4. **PAUSE glosses:** «Sei solare» (*You light up the room*), «Ti viene naturale» (*You're a natural*), «Siate affamati, siate folli» (plural *voi*, the quote's usual Italian form), «Il meglio di entrambi i mondi» (*The best of both worlds*, an accepted calque; kept).
5. **«Stammi bene / Abbi cura di te»** for *Take care*, and «Non ci arrivo» for *I don't get it*.
6. **Slang deck:** «Racconta il gossip» (*Spill the tea*), «Questa canzone spacca» (*That song slaps*), «Sul serio, non scherzo» (*No cap*), «Un po' / sotto sotto» (*Low-key*). Current enough for Italian teenagers?
7. **«Sono turbato / turbata»** for *I'm upset*: kept, but «Ci sono rimasto male» may be closer.
8. **Respellings** «uor-ked», «milche», «bigh-e», «kuz», «fo-TO-graf» as Italian-letter illustrations of the errors. Do they read as intended?
9. **Prompts with sentence-initial «Lei»** (*she*) in practice items («Lei è in ferie questa settimana», «Lei sta lavorando oggi»). The profile prescribes them, but they can be read as formal *you*, which is not accepted.
10. **IPA of names the en-US voice must say:** Milan /mɪˈlɑːn/, Naples /ˈneɪplz/, Marco /ˈmɑːrkoʊ/, Umberto Eco /ʊmˈbertoʊ ˈekoʊ/. Check against the audio.

## 4. Found but not fixed (outside my scope)
- **DECKNAMES.md** keeps the source-course deck names in its "Spanish deck" column. That is the only Spanish text under tools/content/it, and the file is marked "FINAL — set by the lead; do not change".
- **Labels next to a big number** (`day streak` «giorni di serie», `cards learned` «carte imparate») read «1 giorni…» at 1, as in pt and fr. They are exact labels, so the English key or the engine has to change.
- **Shared English roadmap:** «Ordine del QCER A1-B1, adattato ai parlanti di coreano» and «Trappole di pronuncia: R/L, F/P, TH» are correct translations, but they describe the Korean-speaker course. That is the wrong message for an Italian learner; the English source needs a change (same note as pt and fr).
- **Korean-only interface text** (the "(han)" reading drill, «Scrivi la pronuncia. Le parole si dividono in sillabe…», `Senior`, `Sensei`) is still reachable in ui.json. The engine should hide it for non-Korean courses.
- **Parity-bound English that reads oddly to Italian learners** but must stay:
  - Hispanic places in practice items (Lima, Bogotá, Buenos Aires, Cartagena, Santiago), as profile §9 allows;
  - the Spanish-origin distractors *You're taking my hair* (idioms) and *Speak you English?* (questions). Their `why` lines explain the right English.
- **Lint meaning variants (23):** almost all differ only in a final period (lessons.js meanings end with «.», more/*.js ones do not). Two differ in wording but are tied to different contexts: «Tutto bene? / Stai bene?» (*Are you okay?*) and «Piove / Sta piovendo» (*It's raining*).
- **i18n validate warnings:** 25 strings identical to English (reviewed above) and 31 possible-overflow labels, mostly on secondary screens («Ripassa le carte in scadenza», «Preparami il percorso»). The main screens were measured by the lead, so these were left.

## Checks (final run)
```
PASS: all checks OK                                   (validate.js it)
PASS: shared English side matches ko-en               (parity.js it)
lint it: 0 blocking · 23 meaning variants (info) · 0 K-pop leftovers (info)
exact=769 patterns=272 warnings=2 / PASS              (i18n validate.js it)
roadmap strings 425/425 translated                    (road.py check it)
node --check: all 9 JS files OK (incl. pron_check.js)
pron_check: phrase conflicts 0 · word conflicts 1 (new / New York, intended) · rule hits 0 · differs from zh: phrases 0, words 4 (intended) · differs from pt: 0, 0
Spanish / Hangul scan over tools/content/it: no hit outside DECKNAMES.md
```
