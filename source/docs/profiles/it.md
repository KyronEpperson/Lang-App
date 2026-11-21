# Italian speakers learning English — course profile

Course `it-en`: English for speakers of **standard Italian** (italiano standard, as written in Italy). All explanations, `why`, `hint`, meanings and interface text are in standard Italian. Answers and examples are in English.

**How this course is built.** It is built from the Spanish-speakers' course, not the Korean one, because Italian has articles, plurals and a null-subject grammar like Spanish. `tools/content/it/` is scaffolded from `tools/content/es/` (41 lessons including `false-friends` and `make-do`, 25 decks). `profile.json` has `"reference": "es"`, so `parity.js` compares it-en's English side with **es-en**. Every English-side difference from es-en therefore costs a `deviations.json` entry. This profile says, lesson by lesson (§8) and deck by deck (§9), what stays as es-en has it and what changes.

**Evidence tags.**
- **[research-backed]**: an empirical study or dataset fetched for this profile. The study is named, its sample is given, and "abstract only" is said where only the abstract was read. "via OTHERS.md" means the claim comes from `docs/profiles/OTHERS.md` and its source could not be reopened here.
- **[curriculum convention]**: what Italian official bodies, school and exam-prep sites, style guides or courses do.
- **[practitioner opinion]**: a teacher's, school's or guide's stated view with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Italian**. Such claims are flagged for a native check in §11.

Untagged rules in §6–§10 are design decisions, not findings.

## 1. Summary (10 lines max)

- Teach **American English** (`ttsLang:'en-US'`). Write **standard Italian with *tu***, friendly and plain, gender-neutral by rephrasing. **Imperative on buttons** («Verifica», «Continua»), as the Proton Italian guide prescribes. No regional or dialect forms.
- **Standing rule: keep the Spanish course's `verb-core` rule**, keywords `soggett[oi]|ausiliar[ei]|terza persona|(?<!d['’])accord[oi]|concordanza`. Every es-en practice item already satisfies it, so the English side carries over with no parity cost. Italian is a null-subject language like Spanish, so the «soggetto» leg is as core here as in es (referential subjects dropped in about 43% of one B1 translation context, Matteini).
- **Pronunciation aid: IPA, written exactly like the zh-en and pt-en courses** (`pronPattern` copied). Italian learners' best-documented errors come from reading English **through Italian spelling**: silent letters said (85% when reading aloud), *-ed* after a voiceless consonant right only 28% of the time (Bassetti & Atkinson 2015), double letters said long (Bassetti et al. 2018). An Italian-letter respelling would carry exactly those habits and cannot write /h θ ð æ ʌ ə ɜː/. IPA can be copied from zh-en or pt-en for 462 of the 480 Italian-course card targets (the 17 new ones are written fresh, except *bad* and *bed*) and 316 of 340 example rows.
- **Curriculum:** keep all 41 es-en lessons in order. Change the English side of only **`pron`** (Italian traps: h, th → t/d, added final vowel, vowel length, *a* sounds) and **`false-friends`** (Italian–English false friends). Add six technical item deviations for Spanish check options that parity reads as English. **No it-only lesson.**
- **Decks:** keep all 25. Change English targets in 5: «Presentarsi», «Sopravvivenza 1», «Complimenti e affetto», «Trappole di pronuncia», «Falsi amici» (17 card targets).
- **Learners:** Italy scores **513** in EF EPI 2025 (rank 59 of 123, down from 46th in 2024), with reading 534 and **speaking 417**, the weakest skill and 71 points under the global overall average. In the 2025 INVALSI tests only 55% (reading) and 44% (listening) of final-year students reached their CEFR target. Motivators: maturità, INVALSI, Cambridge (B1 Preliminary, B2 First), IELTS, work, travel.

## 2. Variant, register and voice

**English variant: American English** [inference].
- `ttsLang` is `en-US`, so spelling, examples and the `pron` aid must match the audio.
- Rules are the same as es.md §2, pt.md §2 and fr.md §2:
  - US spelling (*color, center, practice, rumor*);
  - US vocabulary (*apartment, cell phone, vacation, subway, soccer*);
  - dates written *November 15* in English text.
- Italian schools and Cambridge exams teach British English, so learners know *flat, mobile, holiday, rubbish*. Add the British form to the card `note` where it is common: «In inglese britannico: flat».

**Italian variety: italiano standard** [curriculum convention].
- Neutral standard Italian as used by national newspapers and software localisation. No regionalisms (*mo'*, *ammazza*, *sto a fare*, *ce l'ho* written *c'ho*), no Northern *-ino* affectation, no Southern *tenere* for *avere*.
- Two tests for a doubtful word: would a reader in Milan, Rome and Naples all write it in a school essay? Is it in the Treccani or Zingarelli headword list without a «region.» label?
- Anglicisms: Proton's Italian guide says "Avoid using too many anglicisms" ([Proton](https://localize.proton.me/t/guidance-for-italian/119)). Use an Italian word where one is current (*impostazioni*, not *settings*; *ripasso*, not *review*), but keep anglicisms that are the normal Italian word (*e-mail*, *weekend*, *feedback*, *quiz*, *smartphone*, *film*).
- Italian keeps borrowed nouns **invariable in the plural** (*i film, due computer, tre weekend*). Never write «i films» in Italian text, and teach the English -s explicitly (§4.15, §8 `plurals`).

| Use (standard) | Avoid | English |
|---|---|---|
| cellulare, telefono | telefonino (dated, informal) | cell phone |
| e-mail | posta elettronica (formal, long) | email |
| fine settimana / weekend | — | weekend |
| colazione / pranzo / cena | — | breakfast / lunch / dinner |
| fare la spesa (food), fare shopping | — | go grocery shopping, go shopping |
| il conto | la fattura (for a restaurant bill) | check (US), bill (UK) |
| la mancia | — | tip |
| la metropolitana, la metro | — | subway (US), underground (UK) |
| il bar (for coffee) | la caffetteria (sounds foreign) | café, coffee shop |

**Form of address: *tu*** [curriculum convention, consistent on every source fetched].
- The Proton Italian guide: "Use the informal second-person singular (“tu”) form of address." ([Proton](https://localize.proton.me/t/guidance-for-italian/119)).
- Italian language-learning sites for this audience use *tu*: Wall Street English Italia («così puoi iniziare a esercitarti», [WSE](https://www.wallstreetenglish.it/esercizi/present-perfect-tense/)), Studentville («Se vuoi imparare l'inglese», [Studentville](https://www.studentville.it/false-friends-list-15-errori-da-non-fare-in-inglese/)), UniD Formazione ([UniD](https://www.unidformazione.com/false-friends-in-inglese-attenzione-ai-falsi-amici)) and MosaLingua Italia («Se vuoi migliorare la tua pronuncia», [MosaLingua](https://www.mosalingua.com/it/alfabeto-fonetico-internazionale-migliorare-la-pronuncia/)).
- Decision: **tu** in explanations, prompts, `why`, hints, feedback **and buttons** (imperative, §10). *Lei* only inside translations of formal English (service sentences, business e-mail: «Potrebbe…?», «In attesa di un Suo riscontro»).
- Plural "you" in explanations: never needed (the app addresses one learner).
- In the `polite` lesson: *you* covers *tu*, *Lei* and *voi*. Politeness in English lives in *could / would / please*, not in the pronoun.

**Register:**
- Friendly, direct, correct written Italian. No SMS spelling (*xké*, *nn*), no slang outside the «Cinema, serie e slang» deck and the idioms lesson.
- Explanations may use the inclusive *noi* («In inglese diciamo…») sparingly; prefer impersonal *si* («In inglese si dice…»).
- Write the subject pronoun in Italian prompts **when the English needs a specific subject** (§4.2): «Lei lavora in una fabbrica», not «Lavora in una fabbrica», which could be *he*, *she* or formal *you*.

**Sample sentences in this voice:**
1. «In inglese l'età si dice con *be*: *I'm 25*, non *I have 25 years*.»
2. «Conosci già *does*? Serve per fare domande con *he*, *she* e *it*: *Does she work here?*»
3. «Ottimo lavoro! Ripassa queste carte domani per non dimenticarle.»

**Punctuation and mixing English into Italian:**
- In lesson HTML bodies, mark English with `<em>`.
- In plain-text fields (`why`, `hint`, `p`, card notes), put English inside straight double quotes ("the") and Italian quotations inside « » (*caporali*, the usual Italian typographic quotes), **with no spaces inside**: «così». This keeps the es-en convention, so items copied from es keep working, and the two kinds of quote tell English from Italian at a glance. Proton prescribes straight double quotes for UI strings; this profile keeps « » for content because the es items rely on the distinction [inference; decision].
- No space before `:` `;` `?` `!` (Italian, unlike French).
- Never inflect English words with Italian morphology: «i *phrasal verb*», not «i phrasal verbs» or «i phrasal verbi».
- Use Italian exonyms in Italian text: «Londra», «New York», «Edimburgo», «Città del Messico», «Lima». English strings keep the English names (*London*, *Milan*, *Naples*).
- Accents: always the correct grave/acute (*è, perché, così, città, più*), never an apostrophe for an accent (*e'*, *perche'*). Capital *È* is written with the accent, never «E'».

## 3. Glossary

[Curriculum convention.] Italian school grammar of English mixes **English tense names** with Italian grammar words. Skuola.net's lessons say «Il presente semplice si usa per descrivere azioni abituali», «Il presente continuo descrive azioni in corso», «l'ausiliare resta sempre to have», «verbo forma base», «terza persona singolare», «participio passato», «Forma negativa», «Forma interrogativa», «verbi irregolari» and «La forma -ing (gerundio)», while naming tenses *Simple Past* and *Present Perfect* in English ([Skuola.net](https://www.skuola.net/grammatica-inglese/verbs-tenses.html)). Wall Street English Italia uses «Present Perfect», «Simple Past», «verbo ausiliare», «participio passato» and «alla terza persona singolare devi ricordarti di usare "has"» ([WSE](https://www.wallstreetenglish.it/esercizi/present-perfect-tense/)).

**Warning.** The same Skuola.net page calls the present perfect «Il Passato Prossimo in inglese». That gloss is the source of Italian learners' most frequent tense error (§4.1). WSE says it plainly: «Nella struttura assomiglia molto al tempo verbale italiano, il Passato Prossimo, ma non si usa allo stesso modo». This course **never** glosses the present perfect as «passato prossimo».

**Italian learners already know these terms**, so the course uses them as they are, keeping English tense names (*present simple*, *past simple*, *present perfect*), which Italian schools use.

| English term | Italian term to use | Note |
|---|---|---|
| article | articolo | |
| definite / indefinite article | articolo determinativo / indeterminativo | Italian school terms |
| zero article | nessun articolo | «qui non c'è articolo» in prose |
| noun | nome (sostantivo) | «nome» in prose |
| plural / singular | plurale / singolare | |
| countable / uncountable noun | nome numerabile / non numerabile | |
| subject | soggetto | standing-rule keyword |
| object | complemento oggetto | |
| subject pronoun | pronome personale soggetto | |
| object pronoun | pronome complemento | |
| possessive adjective (my, his) | aggettivo possessivo | |
| possessive 's | genitivo sassone ('s) | the classic Italian school term [inference] |
| verb | verbo | |
| auxiliary verb | (verbo) ausiliare | standing-rule keyword; «ausiliario» is also correct and also matches |
| base form | forma base | Skuola.net: «verbo forma base» |
| infinitive (*to* + verb) | infinito (*to* + forma base) | |
| third person singular | terza persona singolare | standing-rule keyword «terza persona»; WSE, Skuola.net |
| subject–verb agreement | accordo (soggetto-verbo), concordanza | both are standing-rule keywords; prefer «accordo» |
| tense | tempo (verbale) | |
| present simple | *present simple* (presente semplice) | English name first; Skuola.net |
| present continuous | *present continuous* (presente progressivo) | Skuola.net: «presente continuo» |
| past simple | *past simple* | **Never** «passato remoto» or «passato prossimo»; accept *simple past* as a synonym in prose |
| past continuous | *past continuous* | |
| present perfect | *present perfect* | keep the English. **Never** gloss as «passato prossimo» (§4.1, §8 `perfect`) |
| present perfect continuous | *present perfect continuous* | |
| past perfect | *past perfect* (trapassato prossimo) | |
| future with will | futuro con *will* | |
| going to | *be going to* | Italian has no *andare a* future; say «per i progetti già decisi» |
| irregular verb | verbo irregolare | |
| past participle | participio passato | WSE, Skuola.net |
| -ing form / gerund | forma in -ing | Skuola.net adds «(gerundio)»; use it only after «forma in -ing», because Italian *gerundio* (*mangiando*) is a different form |
| modal verb | verbo modale | |
| passive / active voice | forma passiva / attiva | |
| conditional sentences | periodo ipotetico (di primo, secondo, terzo tipo) | Italian school term [inference] |
| conditional mood | condizionale | |
| relative clause | proposizione relativa | |
| relative pronoun | pronome relativo | |
| phrasal verb | *phrasal verb* (verbo frasale) | keep the English after first gloss; invariable: «i phrasal verb» |
| reported / direct speech | discorso indiretto / diretto | |
| adjective / adverb | aggettivo / avverbio | |
| comparative / superlative | comparativo / superlativo | |
| preposition | preposizione | |
| quantifier | quantificatore | first mention «quantificatore (*some, much, many*)» |
| question word | parola interrogativa (*wh-*) | |
| negative / interrogative form | forma negativa / interrogativa | Skuola.net |
| word order | ordine delle parole | |
| contraction | forma contratta | |
| false friend | falso amico | Italian sites also say «false friends» |
| cognate | parola trasparente | |
| idiom | espressione idiomatica, modo di dire | |
| stress (word stress) | accento tonico, sillaba accentata | first mention «accento tonico (la sillaba pronunciata più forte)». **Not** plain «accento», which also means a written accent and a foreign accent |
| vowel / consonant | vocale / consonante | |
| double consonant | doppia (consonante doppia) | §4.17: double letters are **not** long in English |
| IPA | trascrizione fonetica (IPA) | first mention «la trascrizione fonetica (IPA), quella dei dizionari»; the Italian acronym AFI is little known outside university [inference] |
| lesson | lezione | |
| practice | pratica; button «Esercitati» | the tab «Pratica»; «esercizi» is reserved for Drills |
| review | ripasso; verb «ripassare» | |
| deck | mazzo | «mazzo di carte»; Anki's Italian term [practitioner opinion, not verified]; never «deck» in UI |
| flashcard | carta | «carta (flashcard)» on first use |
| streak | serie | «serie di 5 giorni» |
| hint | suggerimento | |
| check (3-question quiz) | mini-quiz | button «Verifica» |
| correct / incorrect | giusto / sbagliato | feedback «Esatto!» / «Non proprio» (§10) |
| try again | riprova | |
| answer / explanation | risposta / spiegazione | |
| multiple choice | scelta multipla | |
| word tiles | tessere | instruction «Metti le parole in ordine» |
| gap-fill | esercizio di completamento | instruction «Completa lo spazio» |
| typed sentence | scrivi la frase | |
| example | esempio | |
| level / progress | livello / progressi | tab «Profilo» (§10) |
| settings | impostazioni | |
| feedback (to developers) | feedback | tab «Feedback», page «Dicci la tua» |
| pronunciation hint | pronuncia (IPA) | toggle «Mostra la pronuncia (IPA)» |

## 4. Persistent error zones

**How the list is ranked.** This profile ranks the items [inference]:
- Items with fetched production data from Italian learners come first.
- Within the rest, items come first if typed practice can test them and if they recur across lessons.

**Main fetched evidence** (thinner than for French or Portuguese: no error-tagged Italian learner corpus with full counts was readable this session):
- **Murphy & Poli 2017** ([Investigating L2 errors in a quasi-longitudinal learner English corpus, Corpus Linguistics 2017, Birmingham](https://www.birmingham.ac.uk/documents/college-artslaw/corpus/conference-archives/2017/general/paper285.pdf)): 340 handwritten texts by Italian learners from middle school to postgraduate (31,480 + 53,678 + 3,675 + 10,264 words). Tracked categories: incorrect prepositions, present perfect, past simple, conditionals and word order.
  - Errors in the first four fell as education level rose; **no percentages are given for them**.
  - **Word order was the only category that did not improve**: texts with word-order errors were 51% (middle school), 48% (secondary), 55% (undergraduate) and all 12 postgraduate texts. Misplaced *also* is the commonest sub-type at postgraduate level ("A widespread system of communication improves also our possibilities to know the world").
  - The source has internal inconsistencies (231 vs 258 secondary texts; 12 vs 14 postgraduate texts).
- **Matteini 2018** ([University for Foreigners of Perugia event paper, University of Siena](https://www.unistrapg.it/sites/default/files/docs/eventi/180913-matteini.pdf)): written Italian-to-English translation by 89 university students (B1, B2 and C1 groups). In the long-passive context, the subject was supplied in about 95% (C1), 75% (B2) and 57% (B1) of sentences, so a **referential subject was dropped in roughly 5%, 25% and 43%** (χ² = 6.181, p = .045). Postverbal subjects with unaccusatives (*Is arrived a letter*-type) were harder still (about 14% target-like at B1). Rates were read from a chart by the fetch tool; the paper does not test expletive *it* or *there*.
- **LEONIDE corpus thesis** ([The acquisition of English by young Italian learners: a corpus study on the influence of transfer, Utrecht University student thesis](https://studenttheses.uu.nl/handle/20.500.12932/46306); abstract only): young Italian learners (number not stated in the abstract) compared with L1-English children. Transfer errors: "the overuse of the definite article the", overuse of *must*, and *make* where natives use *do* or *have*. Common to all learners: omission of third-person -s. Missing do-support attributed to beginner level. A master's thesis, not peer-reviewed.
- **Pronunciation:**
  - Bassetti & Atkinson 2015 ([Applied Psycholinguistics 36(1)](https://iris.unimore.it/bitstream/11380/1298727/1/BassettiAtkinson2015Prepub.pdf), prepublication copy): four studies with 14–15 Italian high-school learners each (age about 17, 9–11 years of English).
  - Bassetti, Sokolović-Perović, Mairano & Cerni 2018 ([Language and Speech 61(4)](https://iris.unimo.it/retrieve/c550e5d8-3d09-4d84-bdb4-d59cd711a8bc/BassettiSokolovicPerovicMairanoCerni2018prepub.pdf), prepublication copy): 30 Italian high-school learners, 30 Italian–English late bilinguals in the UK, 30 British natives.
  - Busà ([The Italian accent in English, Università di Bologna](https://www.openstarts.units.it/server/api/core/bitstreams/d5b55c0b-b43c-4575-aec0-e9d539714638/content); journal and year not shown in the fetched copy): 19 Northern Italian speakers living in California, 7 American controls, 11 vowels measured.
  - [Pronunciation Studio, Italian speakers' errors](https://pronunciationstudio.com/italian-speakers-english-pronunciation-errors/).
- **Practitioner sources:**
  - [FlashAcademy, Italian learner profile](https://support.flashacademy.com/hc/en-gb/article_attachments/7503603466397) (the source OTHERS.md used; reopened here; no studies cited);
  - [The Local Italy, Ten common mistakes Italians make in English](https://www.thelocal.com/20150206/ten-common-mistakes-italians-make-in-english) (paywalled; four items read);
  - false-friend lists: [UniD Formazione](https://www.unidformazione.com/false-friends-in-inglese-attenzione-ai-falsi-amici) (25 pairs) and [Studentville](https://www.studentville.it/false-friends-list-15-errori-da-non-fare-in-inglese/) (15 pairs).
- **No learner data was fetched** for Italian speakers' articles, countability, *have* for *be*, make/do or double negation as error counts. Those items rest on FlashAcademy, the LEONIDE thesis abstract and inference.

1. **Tense and aspect: present perfect vs past simple, present for *da*, present for the future**
   - Typical errors:
     - *I have seen him yesterday* → *I saw him yesterday* (*l'ho visto ieri*: the passato prossimo looks like the present perfect) (FlashAcademy: "Overusing the present perfect where the past simple is needed").
     - *I live here since two years* → *I've lived here for two years* (*abito qui da due anni*) [inference; the classic Italian error; WSE's example «Abitano a New York da otto anni» shows the Italian present].
     - *I was been to London* → *I've been to London* (*sono stato*: Italian uses *essere* as the auxiliary) (FlashAcademy: "I was been").
     - *I go to Rome tomorrow* → *I'm going to Rome tomorrow* / *I'll go…* (*domani vado a Roma*) (FlashAcademy: "I go tomorrow").
     - *What do you do now?* → *What are you doing now?* [inference].
   - [research-backed, partial] Present perfect and past simple errors are two of the five categories Murphy & Poli tracked; they decrease with level, but no rates are given.
   - [curriculum convention] WSE: «Nel momento in cui dici quando è successo qualcosa, usa il Simple Past.» Skuola.net's gloss «Il Passato Prossimo in inglese» shows why the error persists (§3).
   - Why [inference]: in most of Italy, and in all of the North, the passato prossimo covers both the English past simple and the present perfect (*Ieri sono andato al cinema*). Italian uses the present with *da* for states that continue (*Lo conosco da anni*), the present for planned futures, and *stare + gerundio* far less than English uses -ing. Expect **over-use of the present perfect with finished time**, the present instead of the perfect with *since/for*, and the simple present for the progressive and for plans.
2. **Subject omission: referential subjects and dummy *it***
   - Typical errors: *Is raining* → *It's raining* (*piove*); *Is important to study* → *It's important to study* (*è importante*); *Is very nice, your house* → *It's very nice* [inference]; *My brother is tired because worked all day* → *because he worked*.
   - [research-backed, partial] B1 university students dropped the referential subject in about 43% of long-passive sentences in a translation task, B2 students in about 25% (Matteini 2018; one context, rates read from a chart).
   - [inference] Italian, like Spanish, drops subject pronouns and has no expletive subject (*piove, è tardi, fa freddo, sembra che…*). Dummy-*it* omission is not in any fetched Italian source; it is listed because es.md documents it for Spanish, which has the same grammar.
   - Design consequence: keep `it-there` as a core lesson and the «soggetto» leg of the standing rule (§7); write the subject pronoun into Italian prompts when English needs it (§2).
3. **The verb core: third-person -s, *do/does/did*, negation with *no***
   - Typical errors: *She work here* → *She works here*; *I no know the answer* → *I don't know the answer* (FlashAcademy); *You like coffee?* → *Do you like coffee?* (§4.13); *He didn't went* → *He didn't go* [inference].
   - [research-backed, abstract only] Omission of third-person -s is frequent in young Italian learners' writing, and do-support is missing at beginner level (LEONIDE thesis).
   - [inference] Italian marks person on every verb (*lavoro, lavori, lavora*), so agreement is a familiar idea; the English problem is the one form (-s) that survives. Italian negates with *non* before the verb, which surfaces as *I no / I not + verb*.
4. **Articles: the with generic nouns and possessives; a with jobs**
   - Typical errors: *The health is important in the life* → *Health is important in life*; *the my family* → *my family*; *Is he teacher?* → *Is he a teacher?* (all FlashAcademy); *I love the music* → *I love music*; *The Italy is beautiful* → *Italy is beautiful*; *I broke the arm* → *I broke my arm* [inference].
   - [research-backed, abstract only] "the overuse of the definite article the" is one of three transfer errors found in the LEONIDE data.
   - [inference] Italian needs the definite article with generic and abstract nouns (*la salute, la vita, i gatti*), with country names (*l'Italia*), with body parts (*mi sono rotto il braccio*) and **before possessives** (*la mia famiglia, il tuo libro*), and drops *un/una* before an unmodified job after *essere* (*è medico*, alongside *fa il medico*). The possessive point is Italian-specific: Spanish says *mi familia*, so es-en has no item on it (§8 `the`).
5. **False friends**
   - Typical errors: *actually* for «attualmente» (→ *currently*); *factory* for «fattoria» (→ *farm*); *parents* for «parenti» (→ *relatives*); *library* for «libreria» (→ *bookstore*); *educated* for «educato» (→ *polite*); *pretend* for «pretendere» (→ *demand, expect*); *argument* for «argomento» (→ *topic*); *rumors* for «rumori» (→ *noises*); *sensible* for «sensibile» (→ *sensitive*).
   - [curriculum convention] Every Italian revision site carries a list; UniD Formazione's 25 pairs and Studentville's 15 overlap on *factory, library, parents, eventually, estate, educated*. FlashAcademy names *library/libreria*. The full grouped list is in §9.
   - No count of false-friend errors was found for Italian learners.
6. ***Have* for *be*: age, hunger, cold, being right**
   - Typical errors: *I have 12 years* → *I'm 12*; *I have hungry* → *I'm hungry* (FlashAcademy); *You have reason* → *You're right* (The Local, *hai ragione*); *I have cold* → *I'm cold*; *I have fear* → *I'm scared* [inference].
   - Also *I'm agree* → *I agree* (*sono d'accordo*) [inference].
7. **Make vs do, say vs tell** (*fare*, *dire*)
   - Typical errors: *I make my homework* → *I do my homework*; *Say me your name* → *Tell me your name* (FlashAcademy); *make a photo* → *take a photo*; *make breakfast* for «fare colazione» → *have breakfast*; *make a shower* → *take a shower*; *make a question* → *ask a question*; *make a walk* → *take/go for a walk* [inference].
   - [research-backed, abstract only] *make* used where natives use *do* or *have* is a transfer error in the LEONIDE data.
8. **Countability**
   - Typical errors: *Can I have some informations?*, *I like your hairs* (FlashAcademy); *advices*, *furnitures* (*mobili*), *homeworks* (*compiti*), *luggages* (*bagagli*), *The news are good* (*le notizie*) [inference].
9. **Double negation**
   - Typical errors: *I don't know nothing* → *I don't know anything*; *She does not work never* → *She never works* (FlashAcademy); *There isn't nobody* → *There's nobody / There isn't anybody* [inference].
   - [inference] Standard Italian requires *non* with a following negative word (*non so niente, non lavora mai*). English allows only one negative.
10. **Possessives: *his/her* by the owner, *'s***
    - Typical errors: *Peter and her wife* → *his wife*; *the pen of my brother* → *my brother's pen* (FlashAcademy).
    - [inference] *suo/sua* agree with the thing owned, never with the owner. Anchor: «*his* = di lui, *her* = di lei».
11. **Prepositions and verb complements**
    - Typical errors: *I depend of you* → *depend on*; *marry with someone* → *marry someone* (FlashAcademy); *I live at Rome* → *in Rome* (*a Roma*); *arrive to Milan* → *arrive in Milan*; *listen music* → *listen to music* (*ascoltare la musica*); *wait the bus* → *wait for the bus* (*aspettare l'autobus*) [inference].
    - [research-backed, partial] "Incorrect prepositions" is a Murphy & Poli category; errors fall with level (no rates).
12. **Word order: adverbs, *also*, adjectives**
    - Typical errors: *It improves also our possibilities* → *It also improves…* (Murphy & Poli, verbatim); *I drink always tea* → *I always drink tea* (*bevo sempre il tè*); *I like very much pizza* → *I like pizza very much*; *a car red* → *a red car* [inference for the last three].
    - [research-backed] Word order was the one error category that did not improve from middle school to postgraduate level (Murphy & Poli 2017; figures above).
    - [inference] Italian puts adverbs after the finite verb (*Mangio spesso fuori*) and most adjectives after the noun.
13. **Questions by intonation only**
    - Typical errors: *You like coffee?* → *Do you like coffee?* (*Ti piace il caffè?*); *Where you live?* → *Where do you live?* (*Dove abiti?*); *How is called this?* → *What is this called?* (*Come si chiama?*) [all inference].
    - [inference] Italian yes/no questions differ from statements only by intonation. There is no *est-ce que*-style marker to bridge to *do*, so the auxiliary must be taught as a pure English slot.
14. **Future after *if* and *when*, and *perché***
    - Typical errors: *If it will rain, I'll stay home* → *If it rains…* (*Se pioverà, resterò a casa*); *When I'll arrive, I'll call you* → *When I arrive…* (*Quando arriverò, ti chiamerò*); *I'm late why the bus…* → *because* (*perché* = *why* and *because*) [all inference].
    - [inference] Unlike French and Spanish *si*, Italian *se* readily takes the future. This makes `first-conditional` a core lesson for Italian (§8).
15. **Plural -s on borrowed words**
    - Typical errors: *two film* → *two films*; *the sport I like* for several sports → *the sports I like*; *three weekend* → *three weekends* [inference].
    - [inference] Italian keeps anglicisms invariable (*i film, gli sport, i computer*), so English words the learner already "knows" are exactly the ones they will leave without -s.
16. **Pronunciation: spelling-driven errors** (the best-evidenced Italian zone)
    - **Silent letters said.** [research-backed] Italian high-school learners added a sound for a silent letter (*[b]* in *lamb*) in **85%** of reading-aloud trials and still **56%** immediately after hearing a native model; 86% said the *l* in *walk* when reading aloud (Bassetti & Atkinson 2015, Study 1, n = 14). FlashAcademy notes spelling problems with silent letters.
    - **-ed endings.** [research-backed] Asked to produce past forms, learners were target-like for 95% of /ɪd/ verbs, 75% of /d/ verbs and only **28% of /t/ verbs**; about two-thirds of /t/ verbs were voiced to [d] (*worked* → *[workd]*) (Bassetti & Atkinson 2015, Study 3, n = 15). [practitioner opinion] FlashAcademy: "Over-pronouncing silent or schwa vowels, especially in 'ed' endings: 'happened,' 'played'"; The Local: "Pronouncing the 'ed' ending too strongly".
    - **Double letters said long.** [research-backed] Learners produced a consonant **1.26–1.27 times as long** when spelled with a double letter (*Finnish* vs *finish*), against 1.06 for natives; the effect persisted in bilinguals with about six years in the UK ("Naturalistic exposure did not reduce orthographic effects") (Bassetti et al. 2018, n = 30 + 30 + 30).
    - **Vowel length read from spelling; homophones split.** [research-backed] Vowels spelled with two letters were 14% longer (237 vs 208 ms); *sun* and *son* were pronounced differently in 93% of reading-aloud realisations (Bassetti & Atkinson 2015, Studies 2 and 4).
    - **/iː/–/ɪ/ and /uː/–/ʊ/ not distinguished in quality.** [research-backed] Heavily accented speakers' vowel space was "largely triangular" and Italian-like; the /iː/–/ɪ/ and /uː/–/ʊ/ contrasts were undifferentiated; Italians "seem to be more sensitive to differences in vowel duration than in vowel quality" (Busà; n = 19). [practitioner opinion] Pronunciation Studio ("heat" and "hit" the same), FlashAcademy (*it/eat, live/leave*).
    - **One *a* for /æ/, /ʌ/ and /ɑː/** (*cat, cut, cart*). [practitioner opinion] Pronunciation Studio; FlashAcademy (*ap* for *up*).
    - **Final vowel added** (*I like-a them*, *big-a*). [practitioner opinion] Pronunciation Studio ("speakers add a little 'a'"), FlashAcademy. [research, indirect] Miatto, Hamann & Boersma (21 Veneto speakers) found paragogic vowels in English **loanwords adapted into Italian**, more after voiced obstruents, and fewer with more English input (not significant, p = .093); this is loanword adaptation, not L2 production, so it is not counted as evidence here ([Miatto et al.](https://www.fon.hum.uva.nl/silke/articles/Miatto_etal_2019.pdf)).
    - **h dropped and added** (*'ouse*, *h-I h-am*). [practitioner opinion] Pronunciation Studio: dropped in *house, how, horse, hard* and added "to compensate" (*go away*, *she isn't*); The Local. [inference] Italian *h* is a silent letter (*ho, hanno*).
    - **th → /t/, /d/** (*tink*, *dis*). [practitioner opinion] Pronunciation Studio ("replaced by a dental /t/ or /d/"), FlashAcademy.
    - **No aspiration; weak syllables not reduced; diphthongs flattened** (*no, go, don't* with a pure [o]). [practitioner opinion] Pronunciation Studio items 5, 8 and 9.
    - **w → v** (*vine* for *wine*). [practitioner opinion] FlashAcademy only; Italian has [w] in *uomo, quando*, so this is probably spelling-driven (Italian has almost no words spelled with *w*) [inference].
    - **r trilled.** [practitioner opinion] Pronunciation Studio. Post-vocalic *r* is right for American English.
    - **Spelling of *ch*, *g*, *sc*.** [inference] Italian *ch* is /k/ (*chiave*), so *choose* is read with [k]; *g* before *e/i* is /dʒ/ in both languages (helps); *sc* before *e/i* is /ʃ/ in Italian (*scena*) but /s/ in English (*science*).
    - **Word stress on cognates.** [inference] Italian stress usually falls on the penultimate syllable of the Italian cognate (*informaZIOne, conforTEvole, foTOgrafo*), which pulls English stress to the wrong place (*information* right by chance; *photograph* said «fo-TO-graf» as in *fotògrafo*, *comfortable*, *develop* wrong).

## 5. Learner starting point

**Proficiency (EF EPI 2025)** [research-backed; self-selected online test-takers]
- From EF's fact sheet: Italy ranks **59th**, against a global average of 488. Skill scores: reading 534, listening 502, writing 462, **speaking 417** ([EF EPI 2025 Italy](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-italy-english.pdf)). The overall score was truncated in the fetch ("53"); MosaLingua Italia quotes it as **513** («Nel 2025, l'Italia ha ottenuto un punteggio medio di 513») and gives the fall from 46th (2024) and 35th (2023) ([MosaLingua](https://www.mosalingua.com/it/ef-english-proficiency-index-2025-perche-litalia-arretra/)). The band was not stated on the fact sheet.
- Regions range from Friuli-Venezia Giulia 553 to Calabria 482; cities from Bergamo 575, Verona 567, Milan 562 and Turin 559 down to Naples 528 and Caserta 496 (some values truncated).
- **Conflict:** `OTHERS.md` gave 528 (rank ≈46), which matches the **2024** edition. The 2025 figure (513, rank 59) replaces it. The 2026 edition is due on 18 November 2026 (ef.com), the day after this profile.

**Speaking far below reading.** Speaking (417) is 117 points below reading and 71 points below the global overall average. The typical adult is a false beginner: eight to thirteen years of school English, reads simple texts, and cannot produce a correct spoken sentence with ease.

**School results (INVALSI 2025)** [research-backed; national census tests]
- Final year of upper secondary (grade 13, target B2 in licei and technical schools): **55%** reach the CEFR target in reading (60% in 2024) and **44%** in listening (45% in 2024). Grade 8 (target A2): 83% reading, 70% listening ([INVALSI press release, 2025 results](https://www.invalsi.it/wp-content/uploads/2025/11/COMUNICATO_STAMPA_Presentazione_Risultati_Prove_INVALSI_2025.pdf)). The release says the gap between Centre-North and South «è ancora molto elevata». INVALSI tests do not assess speaking or writing.

**Exam and school culture**
- [inference, not verified this session] English is compulsory from primary school to the end of upper secondary. The **maturità** (Esame di Stato) assesses English in writing only in some tracks (for example the language lyceum); the oral exam may include it. The current rules for each track were not researched (§11). INVALSI's grade-13 English test is a national reference point that students and teachers prepare for.
- [curriculum convention] **Cambridge** exams are widely taken through schools: Cambridge English Italia publishes school-specific material for **B1 Preliminary for Schools** and **B2 First for Schools** ([Cambridge English Italia](https://www.cambridgeenglish.org/it/exams-and-tests/preliminary-for-schools/)). No candidate numbers were fetched.
- **IELTS / TOEFL** for study abroad and **work** (English in interviews, meetings and e-mail) are plausible motivators; no uptake figures were fetched (§11).

**Cognate advantage** [research-backed figures as reported in es.md §5]
- About 28% of English words come from French and 28% from Latin (Finkenstaedt & Wolff, via es.md). Italian speakers recognise much of the Latinate vocabulary of English on the page (*information, possible, important, university*).
- The advantage is lost by ear and in spelling-to-sound: Italians read the English spelling with Italian rules (§4.16), and Italian penultimate stress moves English stress.
- Italian schools call such words **«parole trasparenti»**; false friends are the matching warning.

**Implications for the app** [inference]
- A1 must be a true A1 in production, even if learners read well.
- Spend lesson weight on typed items, the verb core, the subject, and the tense lessons (`perfect`, `perfect-2`, `continuous`, `going-to`, `first-conditional`).
- Spend card slots on the non-cognate everyday core, phrasal verbs, false friends and uncountables. Keep the five es-only decks (§9).
- Show IPA with stress marks on every card and audio by default: Italian learners' errors are spelling-driven, so the aid must show sounds, not letters.
- Use goals and plan names that match the motivators: «Viaggiare», «Lavoro», «Amici», «Serie e film»; Cambridge-style tasks in «Lavoro ed e-mail» notes.

## 6. Pronunciation aid policy

**Evidence**
- **What Italian learners know** [curriculum convention, thin]:
  - A consumer guide to Italian–English dictionaries says «la quasi totalità dei dizionari riporta ogni lemma utilizzando anche l'IPA», but also that the IPA is rarely taught before university ([QualeScegliere](https://www.qualescegliere.it/guide/dizionario-inglese-italiano/)). So learners have **seen** IPA next to every headword (Ragazzini, Hazon and school dictionaries [inference; their pages were not fetched]) but most cannot read it unaided.
  - The same guide notes «non esiste un sistema ufficialmente riconosciuto» for Italianised respellings: there is no Italian respelling convention to build on.
  - MosaLingua Italia teaches the IPA to Italian adults as a learnable tool («spesso trascurato da chi impara le lingue»).
- **What Italian learners get wrong** (§4.16) [research-backed]: the measured Italian errors are **reading errors**. Learners say silent letters (85% when reading aloud), voice *-ed* after voiceless consonants (only 28% target-like), lengthen double letters (ratio 1.26–1.27) and lengthen vowels spelled with two letters (+14%), and they do so even right after hearing a native model (Bassetti & Atkinson 2015; Bassetti et al. 2018). The authors note that a transparent native orthography makes these effects stronger. An aid that shows the **sounds** instead of the letters attacks the error source directly.
- **Against an Italian-letter respelling** [inference from §4.16]. Italian spelling-to-sound rules would mislead the reader exactly where Italian speakers go wrong:
  - **Every letter is pronounced in Italian, and double letters are long.** A respelling inherits both habits; «WOKK» or «MILLK» would be read with a geminate.
  - **h is silent in Italian** (*ho, hanno*). «HER» for *hair* is read «er»: the aid itself would teach h-dropping. There is no Italian letter for /h/.
  - **No letters for /θ ð/, /æ/, /ʌ/, /ə/, /ɜː/, /ʒ/** (initial), or for the /iː/–/ɪ/ and /uː/–/ʊ/ quality contrasts: Italian has five vowel letters for seven vowels.
  - **ch is /k/, c and g change before e/i, sc before e/i is /ʃ/**: «CIUS» (*choose*), «GIOB» (*job*), «SCI» (*she*) are clumsy, and Italian readers would mis-segment them.
  - **Respelling final consonants invites the paragogic vowel**: a consonant-final Italian-letter string looks foreign and is "completed" (*big-a*); IPA marks the coda explicitly.
  - es-en's Spanish respelling cannot be reused: it writes /h/ as **j**, which Italians read [j] or [dʒ].
- **Against "none" or "optional"** (OTHERS.md's suggestion). OTHERS.md proposed no aid or optional IPA because "an Italian respelling would push the added final vowels". This profile agrees about respelling, but not about "none": with no aid, the learner falls back on the English **spelling**, which is the documented error source above. IPA is the only written aid that does not carry Italian letter values.
- **Reuse** [measured locally]: **466 of the 480** es-en card targets and **316 of the 340** distinct es-en `{{ex:}}` English strings already carry IPA, identical character for character, in zh-en (349 and 225) or pt-en (the rest). For the it-en target set (es-en minus the 17 replaced targets plus the 17 new ones, §8–§9) the figure is **462 of 480**: of the new targets only *bad* and *bed* already have IPA. Copying them gives consistency with zh-en, pt-en and fr-en and saves most of the work.
- **No study** compares IPA, respelling and no aid for Italian learners. The recommendation is [inference]. It inherits zh.md's caveat that the OALD North American notation is used "as remembered".

**Recommendation: IPA in every `pron` field (`"pron": "required"`), using exactly the zh-en notation and rules (as pt-en and fr-en do), with the key taught on one screen in the `pron` lesson. The interface toggle is «Mostra la pronuncia (IPA)».**

The binding rules are zh.md §6 plus `tools/content/zh/PRON-RULES.md`. it writers follow them unchanged, so a pron copied from zh-en or pt-en is already correct. Summary:

1. **Format.**
   - One pair of slashes around the whole transcription, words separated by single spaces.
   - No capitals, digits or punctuation.
   - ` ‖ ` between two sentences in one row; never `|`.
   - Alternatives are written as two slashed groups (`/ˈhaɪ/ /ˈheɪ/`). Never `//`.
2. **Stress.**
   - A closed list of function words stays unmarked: articles, pronouns, *be*, auxiliary *do/have*, modals, prepositions, conjunctions, existential *there*.
   - **Every other word gets ˈ, monosyllables included**: `/aɪ ˈlaɪk ˈtiː/`.
   - Every pron therefore contains ˈ, which `pronPattern` requires. (`pronScript` is not needed: with `nativeScript: null` the validator only asks the pron to differ from the English, which the slashes guarantee, and `pronPattern` already demands ˈ.)
   - ˌ is used only inside long words, in -teen numbers and in letter-by-letter abbreviations.
3. **Symbols.**
   - OALD North American values: oʊ, ɑː for LOT, ɔː for THOUGHT, ɜːr, ər, ɪr/er/ʊr, ɑːr/ɔːr; æ before r as in zh-en (`married` /ˈmærid/).
   - **ASCII `g`, plain `r`.** No ɡ, ɹ, ɚ, ɝ or flap symbol.
   - DRESS is **e** (`/ˈbed/`).
   - Final unstressed -y is **i**. Unstressed long vowels lose ː.
4. **Weak forms** as in zh PRON-RULES §B: *a* /ə/, *the* /ðə/ (/ði/ before a vowel), *to* /tə/, *for* /fər/, *of* /əv/, *and* /ənd/, *can* /kən/, *are* /ər/, *was* /wəz/, *you* /ju/, *do* /də/, *could* /kəd/.
5. **Codas are written in full; nothing is written that is not said.**
   - -s is /s z ɪz/ and -ed is /t d ɪd/ as heard: `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/. For Italian learners this is the cue that *worked* ends in /t/ and has one syllable.
   - Silent letters are absent: `walk` /ˈwɔːk/, `lamb` /ˈlæm/, `listen` /ˈlɪsn/.
   - A double letter is one consonant: `Finnish` and `finish` are both /ˈfɪnɪʃ/; `happy` /ˈhæpi/.
   - Syllabic l and n follow zh PRON-RULES §A.4: `people` /ˈpiːpl/, `student` /ˈstuːdnt/.
   - No vowel after a final consonant: `big` /ˈbɪg/. The only deliberate exception is an error illustration in `pron` lesson prose (zh PRON-RULES §D).
6. **Names** as the en-US voice says them: `Rome` /ˈroʊm/, `Italy` /ˈɪtəli/, `Milan` /mɪˈlɑːn/, `Naples` /ˈneɪplz/. Italian words used in English take their English pronunciation: `pizza` /ˈpiːtsə/, `espresso` /eˈspresoʊ/. Numbers as words. Abbreviations letter by letter.
7. **Practice items carry no pron** (PRACTICE-SPEC).
8. **Copy first.** For any English string identical to a zh-en or pt-en card target or `{{ex:}}` row, copy its pron exactly (zh first; where only pt has it, pt). Write new IPA only for strings neither has: localised targets, the rebuilt `pron` and `false-friends` items, and the new cards in decks 17 and 21. Content agents may copy `tools/content/zh/pron_check.js` into `tools/content/it/` and run it to catch conflicting transcriptions; `lint.js` blocks two different aids for one English text.
9. **Convert every Spanish respelling** quoted in card notes, lesson prose and check options: «KAMF-ter-bel», «LI-rel», «SKUUL», «ther-TIIN» and similar. They are in `pron`, `numbers`, the «Cognados y acento» notes, «Supervivencia 1» notes and others. Replace each with IPA or with an Italian description. A search for `[A-Z]{2,}-` and `[A-Z]{4,}` in `tools/content/it/` finds most of them.

**The key for the `pron` lesson** (one screen, Italian reference sounds, Italian traps flagged ⚠):

| IPA | Sound | Come in italiano | Example |
|---|---|---|---|
| iː | long, tense i | «i» di «vino», più lunga e tesa | sheep /ˈʃiːp/ |
| ɪ | short, relaxed i | tra «i» ed «e», breve e rilassata: **non è una «i» corta** ⚠ | ship /ˈʃɪp/ |
| e | DRESS | «e» di «bello» | bed /ˈbed/ |
| æ | TRAP | «a» molto aperta, quasi «è», bocca ben aperta ⚠ | cat /ˈkæt/ |
| ʌ | STRUT | «a» breve e centrale, più chiusa della «a» italiana ⚠ | cut /ˈkʌt/ |
| ə | schwa (weak) | vocale debole e indistinta, come la «e» finale di molti dialetti del Sud | about /əˈbaʊt/ |
| ɑː | LOT | «a» di «mare», lunga | hot /ˈhɑːt/ |
| ɔː | THOUGHT | «o» aperta di «porta» | talk /ˈtɔːk/ |
| uː / ʊ | long u / short u | «u» di «luna» lunga / «u» breve e rilassata ⚠ | food /ˈfuːd/, book /ˈbʊk/ |
| ɜːr / ər | NURSE / weak -er | vocale centrale, labbra non arrotondate, poi la r inglese ⚠ | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| eɪ aɪ ɔɪ oʊ aʊ | diphthongs | due suoni che scivolano: **go non è «go» con una o sola** ⚠ | day /ˈdeɪ/, go /ˈgoʊ/ |
| p t k | stops | con un piccolo soffio all'inizio di una sillaba accentata ⚠ | tea /ˈtiː/ |
| θ / ð | th | lingua tra i denti, senza voce / con voce: **né «t» né «d»** ⚠ | think /ˈθɪŋk/, this /ˈðɪs/ |
| h | | un soffio che si sente, come quando appanni un vetro: **non toglierlo, non aggiungerlo** ⚠ | hair /ˈher/, air /ˈer/ |
| r | English r | non vibrata: la lingua si piega all'indietro senza toccare il palato ⚠ | red /ˈred/ |
| ʃ / ʒ | | «sc» di «scena» / la stessa cosa con la voce, come la «j» di «abat-jour» | she /ʃi/, usually /ˈjuːʒuəli/ |
| tʃ / dʒ | | «c» di «ciao» / «g» di «gelato». **Il *ch* inglese è tʃ, non k** ⚠ | chair /ˈtʃer/, job /ˈdʒɑːb/ |
| m / n / ŋ | nasals | come in italiano / ŋ è la «n» di «banca», **senza g dopo** ⚠ | sing /ˈsɪŋ/ |
| w / j | semivowels | «u» di «uomo», **non «v»** ⚠ / «i» di «ieri». **La *j* dell'IPA è la *y* inglese** ⚠ | we /wi/, yes /ˈjes/ |
| ˈ | stress | va **prima** della sillaba accentata, che spesso non è quella dell'italiano ⚠ | hotel /hoʊˈtel/, comfortable /ˈkʌmftərbl/ |

Under the table, the lesson body says four more things:
- «Ogni parola inglese ha una sillaba più forte delle altre. Il trattino ˈ ti dice quale: *photograph* /ˈfoʊtəgræf/, non «fo-TO-graf».»
- «In inglese le doppie non si allungano: *Finnish* e *finish* si pronunciano uguali, /ˈfɪnɪʃ/.»
- «Dopo una consonante finale non c'è nessuna vocale: *big* /ˈbɪg/, non «bigh-e».»
- In American English a *t* between vowels sounds like a quick «d» (*water*, *city*). The aid does not write this; the audio does.

**Worked examples** (all pass the proposed `pronPattern` and the validator's differs-from-English test; 52 strings checked locally with the validator's own normaliser):

| Lesson / deck | English | `pron` | Source |
|---|---|---|---|
| Sopravvivenza 1 | Excuse me. | /ɪkˈskjuːz mi/ | copied from zh-en |
| Sopravvivenza 1 | Thank you. | /ˈθæŋk ju/ | copied from zh-en |
| it-there | It's raining. | /ɪts ˈreɪnɪŋ/ | copied from zh-en |
| questions | Does she live here? | /dəz ʃi ˈlɪv ˈhɪr/ | copied from zh-en |
| be | I'm hungry. | /aɪm ˈhʌŋgri/ | copied from zh-en |
| Presentarsi (new target) | I'm from Italy. | /aɪm frəm ˈɪtəli/ | new, frame of zh "I'm from China." |
| Presentarsi (new target) | I live in Rome. | /aɪ ˈlɪv ɪn ˈroʊm/ | new, frame of zh "I live in China." |
| Sopravvivenza 1 (new target) | Do you speak Italian? | /də ju ˈspiːk ɪˈtæljən/ | new, frame of zh "Do you speak Chinese?" |
| Complimenti (new target) | Your Italian is really good! | /jʊr ɪˈtæljən ɪz ˈriːəli ˈgʊd/ | new, frame of zh |
| past | worked · played · wanted | /ˈwɜːrkt/ · /ˈpleɪd/ · /ˈwɑːntɪd/ | new |
| Trappole (new targets) | hair · air | /ˈher/ · /ˈer/ | new |
| Trappole (new targets) | cat · cut | /ˈkæt/ · /ˈkʌt/ | new |
| Trappole (new targets) | bad · bed | /ˈbæd/ · /ˈbed/ | copied from zh-en |
| Trappole | milk · walk · hotel | /ˈmɪlk/ · /ˈwɔːk/ · /hoʊˈtel/ | copied from zh-en |
| Falsi amici (new targets) | factory · educated · argument | /ˈfæktəri/ · /ˈedʒukeɪtɪd/ · /ˈɑːrgjumənt/ | new |
| Falsi amici (new targets) | magazine · camera · lecture · rumor | /ˈmægəziːn/ · /ˈkæmərə/ · /ˈlektʃər/ · /ˈruːmər/ | new |
| Falsi amici | actually · parents · constipated | /ˈæktʃuəli/ · /ˈperənts/ · /ˈkɑːnstɪpeɪtɪd/ | copied from pt-en (first two); new |
| pron (prose) | finish · Finnish | /ˈfɪnɪʃ/ · /ˈfɪnɪʃ/ | new |
| pron (prose) | My hotel is in Rome. | /maɪ hoʊˈtel ɪz ɪn ˈroʊm/ | new |
| false-friends (prose) | She works in a factory. | /ʃi ˈwɜːrks ɪn ə ˈfæktəri/ | new |
| perfect-2 (prose) | I've lived here for two years. | /aɪv ˈlɪvd ˈhɪr fər ˈtuː ˈjɪrz/ | new |
| Parole trasparenti | comfortable · photograph | /ˈkʌmftərbl/ · /ˈfoʊtəgræf/ | copied (already in zh-en / pt-en) |
| §9 food (prose) | pizza · espresso | /ˈpiːtsə/ · /eˈspresoʊ/ | new |

The four es cards that needed a Spanish tag to differ from the target (`SHIP (i corta)` etc., es PRON-RULES §4) need no tag in IPA: `ship` /ˈʃɪp/, `think` /ˈθɪŋk/, `sink` /ˈsɪŋk/, `milk` /ˈmɪlk/.

## 7. Standing practice rule

**Rule: keep es.md §7 "verb core" unchanged** (nucleo verbale: accordo + ausiliare + soggetto obbligatorio). In every lesson's practice set, **at least half of the `order` and `type` items together must hinge on the verb core**. The verb core means:
- subject–verb agreement (-s / *is–are* / *has* / *does*);
- the auxiliary in questions and negatives (*do/does/did*, or inversion with any auxiliary);
- dummy *it* or *there* as subject (typed items).

The definitions of "hinging" for `order` and `type` are es.md §7 word for word. The validator kind `verb-core` implements them heuristically: an order item hinges when its `why` names the point **and** `x` holds an agreement twin of a tile or `a` starts with an auxiliary or wh-word + auxiliary; a type item hinges when its `why` names the point **and** `a[0]` contains *has / does / doesn't / is / isn't / was / wasn't*, or *he/she/it* + an -s verb, or *do/does/did*, or starts with an auxiliary, a wh-word + auxiliary, or *it / there*. A noun subject + -s verb (*My sister works…*) does **not** count; write *She works…*.

**Why keep it rather than a tense–aspect rule:**
- OTHERS.md proposed a new kind `tense-aspect` (past simple vs present perfect) "plus a subject/*it* check" for Italian. It is not implemented in `validate.js`, and tense is lesson-bound: a perfect-tense hinge in `plurals` or `polite` would be artificial. The tense evidence (§4.1) is served by `perfect`, `perfect-2`, `continuous`, `going-to`, `will` and `first-conditional` instead [inference].
- **The "subject/*it* check" OTHERS.md wanted is already a leg of `verb-core`**: dummy *it/there* items hinge, and their `why` must name the «soggetto». Italian is the clearest case for it after Spanish (Matteini 2018: about 43% referential-subject omission at B1 in one context) [research-backed, partial].
- [research-backed, abstract only] Third-person -s omission and missing do-support are attested in young Italian learners' writing (LEONIDE thesis); negation with *no* (*I no know*) is a practitioner example (FlashAcademy).
- **Parity cost decides it** [inference]. Every es-en order/type item was reworked to hinge on the verb core (es deviations.json). Keeping the rule means it translates the `why` lines and changes no English. A new rule would force English-side changes in about 37 lessons.
- Unlike fr.md, where the «sujet» leg is weak because French always has a subject, **for Italian all three legs are live**: dummy subject (*piove* → *It's raining*), agreement (-s, *there is/are*), auxiliary (*Ti piace?* → *Do you like…?*).

**Validator keywords** (`flags: "i"`):

```
soggett[oi]|ausiliar[ei]|terza persona|(?<!d['’])accord[oi]|concordanza
```

- Use them like this:
  - «soggetto» for dummy *it/there* and for inversion («l'ausiliare va prima del soggetto»);
  - «ausiliare» for *do/does/did* and inversion (`ausiliar[ei]` also matches «ausiliari» and «ausiliario»);
  - «terza persona» for -s, *does*, *has*;
  - «accordo» (or «concordanza») for *is/are*, *was/were*, *there is/are*.
- `(?<!d['’])accord[oi]` keeps «d'accordo» from counting: *I'm agree* items will mention «sono d'accordo», and that must not make an item count as naming agreement. Tested locally: «"Sono d'accordo" si dice "I agree", senza "be"», «Sono d’accordo» (curly apostrophe) and «Siamo d'accordo» do not match; «l'accordo», «Concordanza soggetto-verbo», «Il verbo ausiliario "did"» and «terza persona» do. The lookbehind is plain JavaScript (`validate.js` builds `new RegExp(keywords, flags)`).
- Do not use these words in `why` lines of items that do not hinge. Note that «soggetto» is also an everyday adjective («soggetto a cambiamenti»): avoid it outside hinging items.
- Sample `why` lines (plain strings, English in straight double quotes):
  - «Con "she" il verbo prende la -s: terza persona.»
  - «Al presente la domanda ha bisogno dell'ausiliare "do/does".»
  - «Nella domanda, l'ausiliare "can" va prima del soggetto.»
  - «In inglese il soggetto è obbligatorio, anche se non significa niente: "It's raining".»
  - ««Ci sono» + plurale: "There are", con l'accordo.»
  - «Al past simple solo l'ausiliare "did" porta il passato: "didn't go", non "didn't went".»

**Translating es `why` lines.** Map «sujeto» → «soggetto», «auxiliar» → «ausiliare», «tercera persona» → «terza persona», «concordancia» → «accordo». An item that hinged in es still hinges in it. Run `validate.js it` and compare the `[vc N]` counts with es's: they must be identical lesson by lesson, except in `pron` (5, as es; es.md §7 lets `pron`, `numbers` and `email` comply "where natural") and `false-friends` (6, one more than es; §8).

**Count:** as es.md §7. A 14-item set has 6–8 order+type items, and at least 3 (for 6) or 4 (for 7–8) must hinge.

## 8. Curriculum deviations from the Spanish-speaker course

**Policy.**
- Keep all 41 es-en lesson ids, their order and their English side.
- Rewrite every explanation, prompt, `why` and hint from the Italian point of view (PILOT-SPEC §3). That is not a deviation.
- Change the English side only where a Spanish-specific item would mislead Italian speakers.

**Verdicts:**
- **keep**: the contrast is the same in Italian; translate and localise the es explanation.
- **adapt**: same English side, but the explanation and Italian prompts must say something different for Italian speakers.
- **change**: English side changes, which needs a deviation.

All verdicts are [inference] built on §4. Italian sides with Spanish (not French) on the null subject, *piacere* = *gustar*, negation with *non* (→ *I no…*) and *resto in attesa* (→ *I stay waiting*), so more es items fit Italian exactly than fit French.

| # | Lesson id | Verdict | Note for Italian speakers |
|---|---|---|---|
| 1 | pron | **change** (lesson deviation) | Replace the Spanish traps (b/v, prothetic e, j/y) with Italian ones: h dropped and added, th → t/d, final vowel added, /ɪ/–/iː/ quality (not length), /æ/–/ʌ/, *ch* read [k], double letters not long, silent letters, *-ed* as /t/. Teach the IPA key (§6). Item map below. |
| 2 | be | adapt | *essere* → *be* is easy (one verb, unlike *ser/estar*). The Italian twist is *avere*: *ho 25 anni / fame / sete / freddo / paura*, *hai ragione* → *I'm 25 / hungry / thirsty / cold / scared*, *You're right* (FlashAcademy, The Local). Add *I agree*, never *I'm agree* (*sono d'accordo*), in the body. The es items on obligatory subject (*It's late*, *È tardi*) fit exactly. |
| 3 | it-there | adapt (**core lesson for Italian**, as for Spanish) | Null subject: *Piove* → *It's raining*; *È importante* → *It's important*; *Fa freddo* → *It's cold*, never *Is cold* or *It makes cold*. *C'è / ci sono* agree like *there is / there are* (helpful bridge: *ci* ≈ *there*). The es items with `x:["Has"]` (Spanish *hay*) are harmless; their `why` names the subject. Write «soggetto» in every hinging `why`. |
| 4 | articles | adapt + technical deviation | *È ingegnere* → *He's an engineer* (FlashAcademy: *Is he teacher?*); *a/an* by sound (*an hour*: Italian *ora* has no *h*, so explain the silent *h*). *La vita è dura* → *Life is hard*; *Mi fa male la testa* → *My head hurts* (all three checks fit Italian exactly). Check 0's option 3 «(nada)» is Spanish text read as English by parity: write «(niente)» and record the technical deviation (below). |
| 5 | plurals | adapt | Adjectives never take -s (*macchine rosse* → *red cars*); *people*, not *persons*. **Borrowed words take -s in English** (*i film* → *films*, *gli sport* → *sports*): Italian keeps anglicisms invariable (§4.15). *this/these* /ɪ/–/iː/ by vowel quality. |
| 6 | present | adapt | Subject drop: *Lavoro in banca* → *I work in a bank* (check 0 fits exactly). **Negation with *don't*, not *no***: *Non mangio carne* → *I don't eat meat*; the es distractor *I no eat meat* (mc 1) is a real Italian error (FlashAcademy: *I no know the answer*). Frequency adverbs before the verb: *Bevo sempre il tè* → *I always drink tea* (check 2 fits). Double negation in the body: *Non lavora mai* → *She never works* (§4.9). |
| 7 | questions | adapt | Italian asks by intonation alone (*Ti piace il caffè?*), so *You like coffee?* is the Italian error. Present *do/does* as an English-only slot with no Italian equivalent. *Dove abiti?* → *Where do you live?*, not *Where you live?* The inversion distractor *Speak you English?* (mc 0) is less Italian; keep it, explain the rule rather than the error. |
| 8 | third-s | keep | Italian marks person on every verb (*lavora*), so agreement is familiar; the English -s is the one ending left. Omission is attested in young Italian learners (LEONIDE thesis). |
| 9 | prep | adapt | *a / in / di / da* → *in / on / at*. *a Roma* → *in Rome* (never *at Rome*); *in agosto* → *in August*; *il 3 maggio* → *on May 3rd*; *alle 7* → *at 7*. Verb complements in the body: *dipendere da* → *depend on*, *sposarsi con* → *marry someone* (FlashAcademy), *ascoltare la musica* → *listen to music*, *aspettare l'autobus* → *wait for the bus*. |
| 10 | countable | adapt | *le informazioni, i consigli, i mobili, i bagagli, i compiti, le notizie, i capelli* → uncountable (FlashAcademy: *informations*, *hairs*). Add *any* after a negative here, with the double-negation trap: *Non ho niente* → *I don't have anything* / *I have nothing*, never *I don't have nothing*. |
| 11 | object-have | adapt | *suo/sua* agrees with the thing: *Pietro e sua moglie* → *Peter and **his** wife* (FlashAcademy: *Peter and her wife*); es mc 2 (*Ana loves her brother*) fits exactly. Anchor «*his* = di lui, *her* = di lei». Italian object pronouns go before the verb (*la amo*), so the distractor *I her love* is a real Italian error. Add the genitivo sassone to the body: *la penna di mio fratello* → *my brother's pen* (FlashAcademy), no English-side change. |
| 12 | can-like | adapt | **Keep the es emphasis on the reversed verb**: *piacere* works like *gustar* (*Mi piace la pizza*: the pizza is the subject), so the es distractor *Pizza likes me* is a real Italian calque. *So nuotare* → *I can swim* (*sapere* and *potere* both give *can*); *vorrei* → *I'd like*. |
| 13 | polite | keep + technical deviation | *tu / Lei / voi* → *you*. Check 2's options 0 and 1 are Spanish text that parity reads as English (below): «Forma base (open)», «to + forma base (to open)». |
| 14 | continuous | adapt | Italian has *stare + gerundio* (*sto mangiando*) but uses the simple present far more: *Cosa fai?* → *What are you doing?*, not *What do you do?* Say that *I'm eating* ≈ *sto mangiando* but is needed every time an action is in progress. Keep the stative distractors (*I'm knowing him*). |
| 15 | past | adapt (core for pronunciation) | **-ed is /t/, /d/ or /ɪd/**: *worked* /ˈwɜːrkt/ has one syllable and ends in /t/ (only 28% of /t/ verbs right, Bassetti & Atkinson 2015). *did* + base form: *I didn't go*, not *I didn't went*. Call the tense «past simple», never «passato remoto». |
| 16 | irregular-past | keep | |
| 17 | the | adapt (strongest Italian article lesson) | **Generic nouns without *the*** (*Mi piace il caffè* → *I like coffee*; *La salute è importante* → *Health is important*; FlashAcademy). **No article before a possessive** (*la mia famiglia* → *my family*, never *the my family*; FlashAcademy): Italian-specific, explain it in the body; no es item tests it and none is added (parity). Countries (*l'Italia* → *Italy*, but *the United States*). |
| 18 | adjectives | adapt | Before the noun and invariable (*una macchina rossa* → *a red car*); *più grande di* → *bigger than*, never *more big* or *bigger of*. |
| 19 | going-to | adapt | Italian uses the present for plans (*Domani vado a Roma*; FlashAcademy: *I go tomorrow*) and has no *andare a* future. Teach *I'm going to…* / *I'm going to Rome tomorrow* for decided plans. |
| 20 | tense | keep | |
| 21 | joining | adapt | ***perché* = *why* and *because***: *Sono in ritardo perché…* → *I'm late because…*, never *why*. *a causa di* → *because of*. |
| 22 | numbers | adapt + technical deviations | Decimal comma in Italy (*2,5* → *two point five*). **Italian *un miliardo* = one billion; Italian *bilione* (rare) = one trillion**, so the es *billón* point and items fit [inference, flag]. Years: *nineteen ninety*, not «millenovecentonovanta». Dates *il 15 novembre* → *November 15th*. Checks 1 and 2 need technical deviations. Read *25 €* as *twenty-five euros* in the body; practice keeps dollars. |
| 23 | smalltalk | keep | Localise (§9). |
| 24 | false-friends | **change** (lesson deviation) | Partial rebuild with Italian false friends; item map below. |
| 25 | past-continuous | adapt | The Italian *imperfetto* covers both *was doing* and *used to do*; teach *was/were + -ing* for an action in progress and the past simple for a completed series. |
| 26 | will | keep | Present for offers (*Ti aiuto io* → *I'll help you*) matches es's "I help you." distractor exactly. |
| 27 | perfect | adapt (**core lesson for Italian**) | **Never «passato prossimo»** (§3). The Italian error is over-use with finished time: *L'ho visto ieri* → *I saw him yesterday*, not *I have seen him yesterday* (FlashAcademy's first item). Finished-time words force the past simple (WSE: «Nel momento in cui dici quando è successo qualcosa, usa il Simple Past»); check 2 and mc 4 fit exactly. Auxiliary is always *have*: *sono stato* → *I've been*, never *I'm been* / *I was been* (FlashAcademy). Accept US *Did you ever…?* |
| 28 | modals | keep | *non devi* (mustn't) vs *non è necessario / non sei obbligato* (don't have to). Warn that *non devi* is also used colloquially for "you don't have to" [inference, flag]. |
| 29 | to-ing | keep | *prima di partire* → *before leaving*; *voglio che tu venga* → *I want you to come*; *non vedo l'ora di vederti* → *I'm looking forward to seeing you*. The es items fit Italian exactly. |
| 30 | make-do | **keep, carries over fully** | *fare* = make/do, *dire* = say/tell, exactly as *hacer/decir* (FlashAcademy: *I make my homework*, *Say me your name*; LEONIDE thesis: *make* for *do/have*). Add body lines for the Italian calques *fare una foto* (→ *take a photo*), *fare colazione* (→ *have breakfast*), *fare la doccia* (→ *take a shower*), *fare una domanda* (→ *ask a question*), *fare una passeggiata* (→ *take a walk*). The English items are unchanged. |
| 31 | articles-2 | adapt | Generic nouns and plurals without *the* (*I gatti sono carini* → *Cats are cute*; *Adoro la musica* → *I love music*): every es item fits. |
| 32 | first-conditional | adapt (**core lesson for Italian**) | Italian readily puts the future after *se* and *quando* (*Se pioverà, resterò a casa*; *Quando arriverò, ti chiamo*), unlike French and Spanish *si*. Teach "no *will* after *if* / *when*" as the main point; mc 4 (*When I get home…*) fits exactly. |
| 33 | relative | keep | *che* = *who/that/which*; *quello che / ciò che* → *what*. |
| 34 | phrasal | keep + technical deviation | Latinate verb vs phrasal (*entrare* → *come in*, *continuare* → *go on*, *spegnere* → *turn off*). Check 1 is Spanish text (deviation). |
| 35 | perfect-2 | adapt (**core lesson for Italian**) | ***da*** → ***since / for*** with the present perfect: *Abito qui dal 2010 / da dieci anni* → *I've lived here since 2010 / for ten years*; never *I live here since…*. *Da quanto tempo sei qui?* → *How long have you been here?* |
| 36 | narrative | keep | *trapassato prossimo* ≈ past perfect: warn against *had* + participle for a simple sequence of events. |
| 37 | conditionals | keep | *Se fossi in te* → *If I were you*; never *would* after *if*. Note for the body: colloquial Italian *se avrei* is the same error, and is stigmatised in Italian too [inference]. |
| 38 | passive | keep | *Qui si parla inglese* → *English is spoken here*. The distractor *Here speaks English* fits Italian *si* impersonal well. |
| 39 | reported | keep | say/tell recap: *Mi ha detto* → *He told me*, not *He said me*. |
| 40 | email | adapt | *Resto in attesa di un Suo riscontro* → *I look forward to hearing from you*; the es distractor *I stay waiting your answer* is the Italian calque word for word: say so. *Cordiali saluti* ≈ *Best regards*; *Gentile signora / Gentile dottore* ≈ *Dear Ms. … / Dear Dr. …*. |
| 41 | idioms | keep + technical deviation | Italian equivalents in prompts: «è un gioco da ragazzi» (*a piece of cake*), «costare un occhio della testa» (*cost an arm and a leg*), «lupus in fabula / parli del diavolo» (*speak of the devil*), «prendere due piccioni con una fava» (*kill two birds with one stone*, same image), «piove a catinelle» (*it's raining cats and dogs*), «quando gli asini voleranno» (*when pigs fly*), «mi stai prendendo in giro» (*you're pulling my leg*), «in bocca al lupo» (*break a leg*). Check 1 needs a technical deviation (Spanish options). |

**`pron` lesson: English-side item map** (same item count and types as es; under `lessons.pron`). The three order items and three type items still satisfy verb-core: order 5 and 7 have an *is/are* twin in x, order 6 starts with *Is* (x "are"), type 11 starts with *There*, type 12 starts with *It's*, type 13 has none: 5 of 6, as in es.

| es item | Keep / replace | it item (English side) |
|---|---|---|
| check 0 sheep/ship | keep | `why`: the difference is the **quality** of the vowel, not only length (Busà) |
| check 1 school (options Spanish text) | replace with a final-vowel question | q «Come si pronuncia "milk"?» options «Con una vocale alla fine: «milche»», «Senza la k: «mil»», «In due sillabe: «mi-lk»», «Con la k finale e nessuna vocale dopo: /ˈmɪlk/» (answer index 3 as es) |
| check 2 comfortable stress | keep the point, rewrite options | «Verso la fine, come in «confortevole»», «Su "for"», «All'inizio: /ˈkʌmftərbl/», «Nessuna sillaba è accentata» (index 2) |
| P0 sheep | keep | |
| P1 very/berry | replace | «Quale parola significa «capelli»?» o `["hair","air","ear","here"]` |
| P2 shoes/choose | keep | Italian reads *ch* as [k], so *choose* is read «kuz»; rewrite the `why` («*ch* inglese = «c» di «ciao»») |
| P3 fool/full | keep | |
| P4 joke/yolk | replace | «Quale parola significa «gatto»?» o `["cat","cut","cart","cute"]` |
| P5 My school is in Madrid | replace | p «Il mio albergo è a Roma» a `["My","hotel","is","in","Rome"]` x `["are","at"]` (h in *hotel*, *a Roma* → *in*, not *at*; hinge: *is/are*, `why` names «accordo») |
| P6 Is the soup very hot (x berry) | change x only | x `["are"]` (h in *hot*; hinge: inversion, «soggetto») |
| P7 We are from Spain (x is, Espain) | localise, change x | a `["We","are","from","Italy"]` x `["is"]` |
| P8 __udent | replace | q "__is is my sister." p «Questa è mia sorella» a `["Th"]` o `["D","T","Z"]` (voiced th, not d) |
| P9 __ink (th) | keep | o s/t/f: *t* is the Italian substitution; rewrite the `why` («non *tink*») |
| P10 __ery (v/b) | replace | q "Welcome to my __ouse." p «Benvenuto a casa mia» a `["h"]` o `["r","m","l"]` |
| P11 three trees | keep | th → t makes *three* sound like *tree*: the Italian substitution exactly. `why` names «soggetto» or «accordo» |
| P12 It's very hot (x berry) | change x only | x `["makes"]` (*fa molto caldo* → *It makes very hot*); `why`: «il soggetto "it" è obbligatorio e il verbo è "is"» |
| P13 I think so / sink | keep | `why`: «la lingua tra i denti: né *t* né *s*» |

**`false-friends` lesson: rebuild** (under `lessons.false-friends`). Eight of the 14 practice items and one of the three checks work for Italian unchanged in English, and P8 and check 1 only need Mexico/Madrid localised: *actually/attualmente*, *attend*/*assist* (*assistere a*), *sensible/sensibile*, *library/libreria* and *realize* are shared Spanish–Italian false friends. Replace the items built on Spanish-only traps:
- *embarrassed/embarazada*: Italian *imbarazzato* means "embarrassed", so there is no trap.
- *pregnant*: only a trap through Spanish *embarazada* (Italian *incinta*).
- *success/éxito* and *exit*: Italian *successo* is a true cognate for *success*, and *exit* has no common Italian look-alike.
- *carpet/carpeta*: Italian *cartella* is the folder; *carpet* has no Italian look-alike.

| es item | Keep / replace | it item |
|---|---|---|
| check 0 embarrassed | replace | «Che cosa significa "He works in a factory"?» options Italian: «Lavora in una fattoria», «Lavora in una fabbrica», «Lavora in un magazzino», «Lavora in un negozio» (index 1, as es) |
| check 1 Actually/Currently … Madrid | keep English, localise | "…, I live in Milan." in all four options (index 2); q «Come si dice «Attualmente abito a Milano»?» |
| check 2 bookstore/library | keep | «La libreria apre alle nove». Italian *libreria* also means "bookcase", which makes the es distractor *bookcase* a real trap |
| P0 actually (Italian options) | keep, translate options | «in realtà», «attualmente», «attivamente», «a volte» |
| P1 pregnant | replace | «Come si dice «È un ragazzo molto educato»?» o `["He's a very polite boy.","He's a very educated boy.","He's a very educational boy.","He's a very political boy."]` |
| P2 attend class | keep | «Il lunedì assisto alla lezione» |
| P3 sensible | keep, translate options | «È molto assennato.», «È molto sensibile.», «È molto sentimentale.», «È molto simpatico.» |
| P4 success/exit | replace | «Come si dice «Mio nonno ha una fattoria»?» o `["My grandfather has a farm.","My grandfather has a factory.","My grandfather has a farmer.","My grandfather has a fair."]` |
| P5 Where is the exit (x success) | replace | p «Dov'è la libreria?» a `["Where","is","the","bookstore"]` x `["library"]` (hinge: *Where is* inversion; `why` names «soggetto»). Same English as fr-en's item |
| P6 She works at the library | keep | |
| P7 Did you realize | keep | p «Te ne sei reso conto?» is gendered; use «Ci hai fatto caso?» |
| P8 "__, I'm from Mexico." | localise | "__, I'm from Italy." p «In realtà, vengo dall'Italia» |
| P9 bookstore | keep | |
| P10 carpet | replace | q "I took this photo with my new __." p «Ho fatto questa foto con la mia macchina fotografica nuova» a `["camera"]` o `["room","machine","chamber"]` (Italian *camera* = room; *macchina* → *machine*) |
| P11 I'm embarrassed | replace | p «Lei lavora in una fabbrica» a `["She works in a factory","She works at a factory"]` hint «she · factory — è la fabbrica, non "farm"» x `["farm"]` `why` «Con "she" il verbo prende la -s: terza persona. «Fabbrica» è "factory"; «fattoria» è "farm".» This item hinges (she + *works*), which es P11 did not, so the lesson's `[vc]` count is 6, one above es |
| P12 He didn't realize | keep | |
| P13 She attends class (x assists) | keep | stronger for Italian: *assistere a* = attend, *attendere* = wait |

The lesson body groups the false friends as in §9 and adds the partial ones: *parents* (Italian *parenti* = relatives; *genitori* = parents), *discuss* («discutere» also means "argue"), *realize* (modern Italian *realizzare* is also used for "rendersi conto", so it is half true), *constipated* (Italian *costipato* usually means "having a bad cold") [inference]. The lesson keeps its deck link to deck 21, «Falsi amici».

**No it-only lesson.** The brief allows one only if the evidence is strong.
- The strongest Italian-specific evidence is **spelling-driven pronunciation** (Bassetti & Atkinson 2015; Bassetti et al. 2018). Typed practice cannot test it; it belongs in `pron`, `past` (-ed), the `pron` field and «Trappole di pronuncia».
- **Subject omission** has partial research support (Matteini 2018) but is owned by `it-there` and the standing rule's «soggetto» leg.
- **Present perfect vs past simple** and ***da* + present** are owned by `perfect` and `perfect-2`; **future after *se/quando*** by `first-conditional`.
- **Double negation**, **the + possessive** and **present for future** rest on one practitioner source (FlashAcademy). They go into the `countable`, `present`, `the` and `going-to` bodies with no English change.
- **Word order of adverbs** (*improves also*) is the one research-backed category that does not improve (Murphy & Poli 2017), but it is served by `present` (frequency adverbs) and fits no single lesson.

**Technical item deviations (no real English change).** `parity.js` decides which reference check options are "native" with the **es** `cueTest` (flags `ui`). Six es-en checks have options in Spanish that es `cueTest` does not catch (no accent, no listed word), so parity compares them as English and an Italian translation fails. Re-found by script over all 39 non-exempt lessons' check options (the same six fr.md lists; every other hit was English):

| Key | es options read as English | Italian |
|---|---|---|
| `articles#check0` | «(nada)» (option 3) | «(niente)» |
| `polite#check2` | «Infinitivo sin to (open)», «to + infinitivo (to open)» (options 0–1) | «Forma base (open)», «to + forma base (to open)» |
| `numbers#check1` | «En teen (al final)», «En thir (al principio)» | «Su teen (alla fine)», «Su thir (all'inizio)» |
| `numbers#check2` | «mil millones», «cien millones» | «un miliardo», «cento milioni» (and option 1 «un bilione (mille miliardi)», which parity skips) |
| `phrasal#check1` | «Salir corriendo», «Quedarse sin algo, acabarse», «Llegar tarde» | «Uscire di corsa», «Rimanere senza, finire», «Arrivare tardi» |
| `idioms#check1` | «Hace mal tiempo.», «Estoy al aire libre.», «No me siento muy bien.» | «Fa brutto tempo.», «Sono all'aperto.», «Non mi sento molto bene.» |

- **Spanish-origin English distractors that stay** (English, so compared and kept): `present` mc 1 *I no eat meat* (also the Italian error), `email` *I stay waiting your answer* (also the Italian calque, *resto in attesa*), `can-like` *Pizza likes me* (also Italian, *mi piace*), and `idioms` mc 2 *You're taking my hair* (Spanish *tomar el pelo*; Italian says *mi prendi in giro*, so explain the right English, not the Spanish image).
- fr.md's scan over every practice mc `o` in all 41 lessons found Spanish only in `pron` and `false-friends`, which are exempt anyway. Practice `a`, `x` and fill `q` are English throughout.
- Pipeline note, not for it agents: extending es `cueTest` with `|\b(nada|sin|al|en|mil|cien|millones|salir|llegar|quedarse|hace|estoy|siento|muy|infinitivo)\b` would remove these deviations for every es-based course (pt, fr, it, de). That is the es owner's call, because it also changes es cue injection.

**Paste-ready `tools/content/it/deviations.json`.** Deck keys are **0-based pack order** (the order of `DECKS` in the generated pack, as in §9), not DECKNAMES.md numbering. `false-friends` and `make-do` are in es-en already, so they must **not** be in `extraLessons`; parity would fail with "ko-en has it too". They are only in `profile.json` `lessonOrder.after`, which gen.js needs to place them.

```json
{
  "lessons": {
    "pron": "profile it.md §8 pron: Italian sound traps (h dropped and added, th as t/d, added final vowel, a sounds cat/cut, ch read as k, il fa caldo -> makes, a Roma -> at) replace the Spanish b/v, prothetic e, j/y items (checks 1-2, P1, P4, P5, P6 x, P7, P8, P10, P12 x)",
    "false-friends": "profile it.md §8 false-friends: Spanish-only traps (embarrassed/embarazada, pregnant, carpet/carpeta, success/exit) replaced by Italian false friends (factory/fattoria, educated/educato, camera, farm); Madrid/Mexico localised to Milan/Italy (check 0, check 1, P1, P4, P5, P8, P10, P11)"
  },
  "items": {
    "articles#check0": "technical: es-en option 3 «(nada)» is Spanish text not caught by es cueTest; Italian «(niente)» (profile it.md §8)",
    "polite#check2": "technical: es-en options 0-1 are Spanish text not caught by es cueTest; Italian «forma base» (profile it.md §8)",
    "numbers#check1": "technical: es-en options 2-3 are Spanish text not caught by es cueTest; Italian translation (profile it.md §8)",
    "numbers#check2": "technical: es-en options 0 and 2 are Spanish text not caught by es cueTest; Italian «un miliardo», «cento milioni» (profile it.md §8)",
    "phrasal#check1": "technical: es-en options 0, 1, 3 are Spanish text not caught by es cueTest; Italian translation (profile it.md §8)",
    "idioms#check1": "technical: es-en options 0-2 are Spanish text not caught by es cueTest; Italian translation (profile it.md §8)"
  },
  "decks": {
    "1": "profile it.md §9: I'm from Mexico. -> I'm from Italy.; I live in Lima. -> I live in Rome.",
    "2": "profile it.md §9: Do you speak Spanish? -> Do you speak Italian?",
    "11": "profile it.md §9: Your Spanish is really good! -> Your Italian is really good!",
    "17": "profile it.md §9: Spanish traps yet/jet, very/berry, vote/boat replaced in place by hair/air, cat/cut, bad/bed (h, TRAP/STRUT, TRAP/DRESS)",
    "21": "profile it.md §9: Falsi amici rebuilt; embarrassed, pregnant, career, exit, success, carpet, bother replaced in place by factory, educated, argument, magazine, camera, lecture, rumor"
  },
  "extraLessons": [],
  "droppedLessons": []
}
```

**Total English-side cost:**
- 2 lesson deviations;
- 6 technical item deviations;
- 5 deck deviations (2 + 1 + 1 + 6 + 7 = 17 card targets);
- no extra lesson.

**Four validator and parity traps for it writers**
1. **Cue words.** `validate.js` requires every mc `q` and type `hint` to match `labels.cueTest` (no flags, so the list spells out capitals). Shorthand items in `more/` get « Che cosa va nello spazio?» / « — usa queste parole» appended automatically when they contain no Italian. A hint written out in full in `practice.js` must contain an Italian accented letter, « », or a listed word (*la, le, il, di, un, una, che, parola, usa, soggetto, ausiliare, terza…*). "pretend · fingere", "she · disappointed" and «attend · class — con she» fail; «she · factory — è la fabbrica, non "farm"», «le parole: attend · class», «attend · class — usa she» and «homework · every night — soggetto alla terza persona» pass (checked against the regex). `con`, `non` and `parole` are deliberately not in the list: they occur in English (*con artist, non-stop, parole*).
2. **No Italian diacritics in English strings.** cueTest treats à è é ì ò ù as Italian. An English mc `q` containing *café*, *Niccolò* or *tiramisù* would get no cue injected and would then pass as Italian. Write *cafe*, *tiramisu*, and the diacritic-free names in §9.
3. **Identical cognates.** With `nativeScript: null`, a card meaning or gloss spelled like its English target fails ("differs from English", PIPELINE §6). Italian has many: *hotel, bar, film, sport, computer, taxi, pizza, menu* (Italian *menù* differs only by the accent, which the comparison keeps), *weekend, email, OK, stop, budget, manager, banana, radio, camera* (!). Write «l'hotel (albergo)», «il film», «la banana (frutto)», as es did with «el hotel».
4. **Accepted answers are compared.** Parity compares each type item's whole `a` list, `x` and mc `o` with es-en. An Italian prompt worded differently must still accept exactly the es variants: do not add or drop variants. If a variant is truly wrong for the Italian prompt, add an `items["<id>#<i>"]` deviation with the reason. Italian prompts drop the subject: where an es prompt had an explicit *ella/él*, keep *lei/lui* in Italian so the accepted *she/he* answers stay the only natural ones.

## 9. Vocabulary and cultural notes

**Localise everything in lesson bodies, `{{ex:}}` rows, card notes, dialogues and examples. In practice items and checks, change English only where §8 says.**

- Hispanic places in the English side stay: *Lima, Bogotá, Madrid, Mexico City, Monterrey, Peru, Chile*. Italian speakers know them, and changing them costs deviations. Italian prompts use Italian exonyms: «Abita a Lima», «a Madrid», «a Città del Messico».
- *Sofía* in `object-have` P10 and *Bogotá* in `present` mc 2 stay as spelled; the fill `q` and mc `o` are compared. Their accents are harmless there because practice `o`, `a` and fill `q` are not cue-tested (and í, á are not in the Italian cueTest).
- *Ana* (card targets, `object-have` mc 2) and *Mr. Garcia* (decks 13, 14) stay: *Ana* reads naturally to Italian speakers (alongside *Anna*), and *Garcia* is a neutral foreign surname [inference].

**Names** (lesson bodies, examples, dialogues, new targets): *Marco, Luca, Matteo, Lorenzo, Francesco, Alessandro, Giulia, Sofia, Chiara, Martina, Giorgia, Aurora, Alice, Emma*, mixed with English names (*Emma, Jack*).
- **Never use a name with a diacritic in an English string** (*Niccolò, Nicolò, Mattìa*): cueTest would read the string as Italian (§8 trap 2). Italian *Sofia* is written without an accent: use it freely.

**Places:** in English strings use English exonyms: *Rome, Milan, Naples, Turin, Florence, Venice, Genoa*, plus *Bologna, Palermo, Bari, Verona, Padua*. In Italian text use *Roma, Milano, Napoli, Torino, Firenze, Venezia, Genova, Padova*. Teaching the exonyms is itself useful (*I live in Milan*, not *in Milano*). Abroad: London, New York, Dublin, Edinburgh, Los Angeles. Do not centre Rome or Milan.

**Food:** *pizza, pasta, espresso, cappuccino, gelato, risotto, lasagna, tiramisu* (no accent in English strings). Use them for culture notes about how English uses Italian food words (*a latte* in the US is a milky coffee, not milk; *panini* is plural in Italian but singular *a panini* in US menus). Remember the identical-cognate trap in meanings (§8 trap 3).

**Sports and media:**
- *soccer*, with the note «*football* in inglese britannico». *Serie A*, cycling and Formula 1 are natural Italian topics.
- Genres, not artists (*a series, a podcast, a comic book*: *i fumetti* = *comics*, and *comics* ≠ «comico», a false friend on Studentville's list).

**Money:**
- Practice keeps US dollars, as es-en (US settings).
- In bodies and notes, *25 €* is read *twenty-five euros*; English writes *€25* or *25 euros*, symbol first.

**Exams and work:**
- Mention *la maturità*, *le prove INVALSI*, *Cambridge (B1 Preliminary, B2 First)* and *IELTS*, and job interviews, by name in `smalltalk`, `email` and «Lavoro ed e-mail» notes where natural.
- Goals in meta.js: «Viaggiare», «Lavoro», «Amici», «Serie e film».

**Neutral Italian vocabulary in meanings and notes:** see the table in §2. Prefer the word understood everywhere in Italy; give a register note when the common word is informal («(informale)»).

**False friends for the rebuilt deck and lesson** (grouped; 50+ pairs). "U" = in the fetched UniD Formazione list; "S" = in the fetched Studentville list; "F" = FlashAcademy; "inf." = not in any fetched list, from the author's knowledge, flagged for a native check.

| Group | English → real meaning | Italian look-alike → English | Source |
|---|---|---|---|
| Verbs | attend → frequentare, partecipare a | attendere → wait | inf. |
| | assist → aiutare | assistere a → attend, witness | inf. |
| | pretend → fingere, fare finta | pretendere → demand, expect | U |
| | annoy → infastidire | annoiare → bore | U |
| | adjust → adattare, regolare | aggiustare → fix, repair | U |
| | realize → rendersi conto (partial) | realizzare → carry out, make (also "realise" in modern Italian) | inf. |
| | support → sostenere | sopportare → put up with | inf. |
| | introduce → presentare (una persona) | introdurre → insert, introduce a topic | inf. |
| | discuss → parlare di, discutere di | discutere also = argue | inf. |
| | record → registrare | ricordare → remember | inf. |
| | retire → andare in pensione | ritirarsi → withdraw | inf. |
| | attempt → tentare | attentare → make an attempt on (someone's life) | inf. |
| Adverbs and adjectives | actually → in realtà, a dire il vero | attualmente → currently | U |
| | eventually → alla fine | eventualmente → possibly, if need be | U, S |
| | definitely → sicuramente | definitivamente → for good | U |
| | sensible → assennato, sensato | sensibile → sensitive | inf. |
| | educated → istruito, colto | educato → polite | S |
| | brave → coraggioso | bravo → good, skilled | U, F |
| | casual → informale | casuale → random | U |
| | consistent → coerente | consistente → substantial, thick | U |
| | morbid → macabro | morbido → soft | U |
| | terrific → fantastico | terrificante → terrifying | U |
| | grave (adj.) → serio, solenne | grave → serious (true); grave (noun) → tomba | U |
| | lunatic → pazzo | lunatico → moody | S |
| | sympathetic → comprensivo | simpatico → nice, friendly | inf. |
| | fastidious → pignolo | fastidioso → annoying | inf. |
| | large → grande | largo → wide | inf. |
| People and places | parents → genitori | parenti → relatives | U, S |
| | library → biblioteca | libreria → bookstore (also bookcase) | U, S, F |
| | factory → fabbrica | fattoria → farm | U, S |
| | college → università | collegio → boarding school | inf. |
| | editor → redattore | editore → publisher | S |
| | audience → pubblico | udienza → hearing, audience (with the Pope) | S |
| | attic → soffitta | attico → penthouse | S |
| | magazine → rivista | magazzino → warehouse, storeroom | inf. |
| | camera → macchina fotografica | camera → room | inf. |
| Everyday nouns | argument → litigio | argomento → topic | U |
| | rumor → voce, pettegolezzo | rumore → noise | U |
| | confidence → fiducia | confidenza → familiarity, a secret | U |
| | sympathy → comprensione, compassione | simpatia → liking, friendliness | U |
| | estate → proprietà, tenuta | estate → summer | U, S |
| | notice → avviso | notizia → piece of news | U |
| | romance → storia d'amore | romanzo → novel | U |
| | novel → romanzo | novella → short story | S |
| | lecture → lezione (universitaria), conferenza | lettura → reading | inf. |
| | agenda → ordine del giorno | agenda → diary, planner | U |
| | comics → fumetti | comico → comedian, funny | S |
| | fame → celebrità | fame → hunger | F |
| | preservative → conservante | preservativo → condom | inf. |
| | firm → azienda, ditta | firma → signature | inf. |
| | stamp → francobollo | stampa → press, printing | inf. |
| | cold → freddo | caldo → hot | U, S |
| Pseudo-anglicisms | tuxedo (US), dinner jacket (UK) | lo smoking | inf. |
| | sweatsuit, tracksuit | la tuta (il jogging = running) | inf. |
| | basketball | il basket (English *basket* = cestino) | S |
| | jigsaw puzzle | il puzzle (English *puzzle* = rompicapo) | S |
| | beauty salon / makeover | il beauty | inf. |
| Partial cognates («Attenzione:» notes) | constipated → stitico | costipato usually = with a bad cold | inf. |

**Mapping of the 20+ core pairs onto the rebuilt lesson** (from §8): *actually* (check 1, P0, P8), *factory/farm* (check 0, P4, P11), *library/bookstore* (check 2, P5, P6, P9), *educated* (P1), *attend/assist* (P2, P13), *sensible* (P3), *realize* (P7, P12), *camera* (P10); the remaining pairs (*parents, argument, rumor, magazine, lecture, pretend, eventually, brave, casual, morbid, confidence, estate, editor, college, constipated, discuss, support, introduce*) go into the lesson body and the «Falsi amici» deck.

**Deck-by-deck notes** (pack order, 0-based; this order is also the deviations key):

| index | Spanish deck | **Native name** | keep/change | notes |
|---|---|---|---|---|
| 0 | Saludos | **Saluti** | keep | *Ciao* covers *hi* and *bye*: say which English word goes with arriving and leaving. |
| 1 | Presentarse | **Presentarsi** | **change 2 targets** | *I'm from Mexico.* → *I'm from Italy.*; *I live in Lima.* → *I live in Rome.* *My name is Ana.* stays. Notes: *I'm 25 years old.* «l'età si dice con *be*, mai "I have 25 years"»; *I'm married.* «*married to*, non *married with*» (*sposato con*); *I've been learning English for a year.* «mai "I study English since one year"». No DIALOG/EXAMPLES key uses the changed targets. |
| 2 | Supervivencia 1 | **Sopravvivenza 1** | **change 1 target** | *Do you speak Spanish?* → *Do you speak Italian?* Rewrite the «LI-rel» note on *a little* as a description of the American *t*. |
| 3 | Supervivencia 2 | **Sopravvivenza 2** | keep | |
| 4 | Direcciones y transporte | **Indicazioni e trasporti** | keep | *metro, autobus, treno regionale* in notes. |
| 5 | En el restaurante | **Al ristorante** | keep | *il conto* = *the check* (US) / *the bill* (UK); *la mancia* = *the tip* (expected in the US, unlike Italy: a culture note). *Coperto* has no US equivalent. |
| 6 | Cafetería y tienda | **Bar e negozio** | keep | The Italian *bar* is the café: say that an American *bar* serves alcohol. *A latte* (US) is a coffee drink. |
| 7 | Compras y pagos | **Acquisti e pagamenti** | keep | *i saldi* = *the sales*. |
| 8 | Números, horas y fechas | **Numeri, ore e date** | keep | Time is said in 12-hour form in English; Italian uses 24 hours. |
| 9 | Charla casual | **Due chiacchiere** | keep | *Have you been to Latin America?* stays: a generic travel question. |
| 10 | Emociones y reacciones | **Emozioni e reazioni** | keep | |
| 11 | Cumplidos y afecto | **Complimenti e affetto** | **change 1 target** | *Your Spanish is really good!* → *Your Italian is really good!* |
| 12 | Trabajo y correo | **Lavoro ed e-mail** | keep | Add Cambridge and job-interview notes. |
| 13 | Teléfono y abreviaturas | **Telefono e abbreviazioni** | keep | *Mr. Garcia* stays. *Pronto?* ≠ *Ready?*: on the phone say *Hello?* |
| 14 | Viajes (aeropuerto y hotel) | **Viaggi (aeroporto e hotel)** | keep | *under Garcia* stays. |
| 15 | Salud y emergencias | **Salute ed emergenze** | keep | *my embassy* stays. Note *I have a cold* (not *I'm constipated*: *costipato*). |
| 16 | Phrasal verbs | **Phrasal verbs** | keep | Notes name the Latinate Italian verb (*entrare, continuare, tollerare, spegnere, ritornare*). |
| 17 | Trampas de pronunciación | **Trappole di pronuncia** | **change 6 targets** | In place: *yet, jet, very, berry, vote, boat* → *hair, air, cat, cut, bad, bed*. Keep *ship, sheep, shoes, choose, school, worked, think, sink, three, tree, this, walk, work, beach, leave, live, banana, hotel, milk, McDonald's*. Notes: *hotel* «la h si sente e l'accento è alla fine»; *shoes/choose* «*ch* inglese = «c» di «ciao», mai «k»»; *school* «*oo* lunga, *sch* = «sk»» (Italian reads it right; rewrite the Spanish prothetic-*e* note); *worked* «finisce in /t/, una sola sillaba»; *walk* «la l non si pronuncia»; *milk* «nessuna vocale dopo la k»; *three/tree* «*th* non è *t*»; *banana* «accento in mezzo, come in italiano». *school* keeps its EXAMPLES entry. Meanings must stay unique (*air* «l'aria», *bad* «cattivo, brutto», *bed* «letto», *cut* «tagliare / un taglio»). |
| 18 | Expresiones idiomáticas | **Espressioni idiomatiche** | keep | Italian equivalents (§8 idioms). |
| 19 | Cine, series y jerga | **Cinema, serie e slang** | keep | |
| 20 | Palabras esenciales | **Parole essenziali** | keep | *It takes 20 minutes* = «Ci vogliono 20 minuti»: Italian *volerci*, not *prendere*. |
| 21 | Falsos amigos | **Falsi amici** | **change 7 targets** | Keep *actually, currently, library, bookstore, attend, assist, realize, sensible, college, constipated, pretend, eventually, parents, discuss, support, introduce*. Replace in place *embarrassed, pregnant, career, exit, success, carpet, bother* with *factory, educated, argument, magazine, camera, lecture, rumor* (23 cards, as es). Why those seven fail: *imbarazzato, carriera* and *successo* are true cognates in Italian; *pregnant, exit, carpet* and *bother* have no common Italian look-alike. Meanings: *factory* «la fabbrica», *educated* «istruito / istruita», *argument* «il litigio», *magazine* «la rivista», *camera* «la macchina fotografica», *lecture* «la lezione (all'università)», *rumor* «la voce, il pettegolezzo». Notes: *attend* «attenzione: *attendere* = *wait (for)*»; *college* «*collegio* = *boarding school*»; *constipated* «*costipato* di solito vuol dire "raffreddato": *I have a cold*»; *rumor* «inglese britannico: *rumour*; *rumore* = *noise*». |
| 22 | Make y do | **Make e do** | keep | Note on *make a decision*: «in italiano si *prende* una decisione, in inglese si *make*»; *make money* «*guadagnare* = *earn* o *make*, mai *win*»; *make the bed* «*rifare il letto*». |
| 23 | Incontables | **Non numerabili** | keep | *hair* is a real Italian trap (*i capelli* is plural; FlashAcademy: *I like your hairs*); *homework* (*i compiti*), *news* (*le notizie*), *furniture* (*i mobili*), *luggage* (*i bagagli*), *advice* (*i consigli*), *information* (*le informazioni*) are all plural in Italian. |
| 24 | Cognados y acento | **Parole trasparenti e accento** | keep (all 14 targets work) | Correspondences hold in Italian: *-tion/-zione*, *-ty/-tà*, *-ous/-oso*, *-ly/-mente*, *-ent/-ente*, *ph/f*, *ch/ch* (*chimica*: here English *ch* is /k/ too). Rewrite notes for Italian traps: stress is **not** on the Italian syllable (*photograph* /ˈfoʊtəgræf/, not «fo-TO-graf» as in *fotògrafo*; *comfortable* /ˈkʌmftərbl/); *-tion* is /ʃn/, not «zione»; *pharmacy* has no double *m*. Meanings must differ from the target: «l'informazione», «la conversazione», «eccellente». |

**Groups in meta.js:**
- «Primi passi»;
- «Viaggi e vita quotidiana»;
- «Conversazione e relazioni»;
- «Lavoro»;
- «Come un madrelingua»;
- «Punti chiave per italiani» (replaces «Claves para hispanohablantes»).

## 10. Interface wording notes

[Curriculum convention.] Verified against the Proton Italian localisation guide ([Proton](https://localize.proton.me/t/guidance-for-italian/119)), which agrees with this profile on *tu* and on the imperative for actions. The Microsoft it-IT style guide was found but not read (§11).

**Buttons and actions:** **imperative (tu)**. Proton: "To translate call-to-actions, use the imperative form" ("Accedi" for "Sign in"). This differs from fr.md, which uses the infinitive for French.
- Use: «Verifica», «Continua», «Inizia», «Ripassa», «Esercitati», «Salva», «Invia», «Annulla», «Indietro», «Chiudi», «Riprova».
- No final period on buttons, titles, links or checkboxes (Proton: "do not place any periods at the end of titles, links, buttons and checkboxes").

**Instructions in content and prompts:** *tu* imperative: «Scegli la risposta giusta», «Metti le parole in ordine», «Completa lo spazio», «Scrivi la frase in inglese», «Tocca per ascoltare».
- Keep one verb per item type.
- No «per favore» in instructions.
- «!» sparingly.

**Gender-neutral wording** [Proton: "When possible, avoid the use of masculine singular form to refer to someone whose gender is unknown" and "Choose the plural form if you are unable to find a gender-neutral way"]:
- «Ti diamo il benvenuto!», not «Benvenuto!» (which agrees with a male user). In the `pron` item P10, «Benvenuto a casa mia» is a translation of English, so it stays.
- «Si comincia!», «Tutto pronto!», not «Sei pronto?».
- «Ottimo lavoro!», «Fantastico!» rather than «Bravo! / Brava!»; «Lezione completata» rather than an adjective agreeing with the user.
- No schwa (ə), asterisk or «@» endings in UI: they divide Italian readers and break screen readers [inference].
- Card meanings for gendered words give both forms: «stanco / stanca».

**Capitalisation:** sentence case. Weekdays, months, seasons, nationalities and language names are lower case («lunedì», «novembre», «inglese») (Proton: "Do not capitalize… Nationalities and languages… Names of days, months and seasons"). Capital *È* with the accent.

**Typography:** no space before `:` `;` `?` `!`. « » for Italian quotations in content (§2); straight double quotes for English inside Italian text, as Proton prescribes for UI strings. Apostrophe: the straight `'` is fine; do not mix ’ and ' in one file.

**Count patterns: ONE translation each, number-neutral** (PHASE2-BRIEF). [Checked locally with `Intl.PluralRules('it-IT')`, ICU 78.3 / CLDR 48: categories `one` (1 only), `many` (1,000,000 and 2,000,000) and `other` (0, 1.5, 2).] Italian writes «1 carta» but «0 carte», so never put the count before an inflected noun. Put it **after a colon**, or next to an invariable unit or symbol.

| English pattern | Italian (one string, any number) | Note |
|---|---|---|
| `N cards due` | «Da ripassare: {1}» | |
| `N cards` | «Carte: {1}» | |
| `N lessons` | «Lezioni: {1}» | |
| `N days` | «Giorni: {1}» | |
| `N-day streak` | «Serie: {1} gg» | «gg» (giorni) is the standard Italian abbreviation and does not inflect |
| `N words` | «Parole: {1}» | |
| `N questions` / items | «Domande: {1}» | |
| `N decks` | «Mazzi: {1}» | |
| `N reviews` | «Ripassi: {1}» | |
| `N XP` | «{1} XP» | invariable |
| `Level N` | «Livello {1}» | |
| `N% correct` | «Risposte giuste: {1}%» | Intl writes «85%» with no space |
| `N min` | «{1} min» | invariable abbreviation |

**Dates, numbers, time** [`Intl` with `it-IT`, checked locally]:
- **Numbers:** «1.234.567,5»: decimal comma, period for thousands (Proton: "Use a period for thousand separators"). **Four-digit numbers get no separator** from Intl («1234»); accept that, do not hand-format.
- **Currency:** «25,00 €» (U+00A0 before €) and «4,99 USD». Symbol after the number. Proton: "Do not convert USD ($) or EUR (€) amounts".
- **Percent:** «85%» (no space).
- **Dates:** long «17 novembre 2026»; short «17/11/26» (Proton: "dd/mm/yy"); full «martedì 17 novembre 2026»; day-month «17 nov»; weekday short «mar».
- **Time:** 24-hour, «21:05» (Proton: "use the 24-hour format").
- Use the device locale when it is `it-IT`. Fall back to `it-IT`, never `it-CH` (Swiss formats differ).

**Bottom navigation at 390px.** Each of the seven tabs gets about 55px, which fits roughly **8 characters** at 10–11px (es.md §10). Italian text runs about as long as Spanish, which es.md puts at 20–25% longer than English [inference]. «Progressi» (9) does not fit, so Progress needs another word.

| English | Italian label | Chars | Note |
|---|---|---|---|
| Today | Oggi | 4 | |
| Practice | Pratica | 7 | glossary noun; button inside is «Esercitati» |
| Review | Ripasso | 7 | noun, as the key's context asks |
| Lessons | Lezioni | 7 | |
| Drills | Esercizi | 8 | one of the two longest; the lead should check it in the real bar. The canvas heading and `{n}/{n} · Drills` chip use the same word |
| Progress | Profilo | 7 | the tab holds stats, backup and account settings, which Italian apps call «Profilo»; «Progressi» is 9. Help strings that name the tab (`: Progress → Backup → …`, `Manage it in Progress.`) must say «Profilo», never «Progressi». Alternative «Percorso» (8). The screen heading can say «I tuoi progressi» |
| Feedback | Feedback | 8 | the normal Italian word in software; page title «Dicci la tua». Alternative «Pareri» (6) if the lead wants fewer anglicisms (Proton: "Avoid using too many anglicisms") |
| (Read, if shown) | Leggi | 5 | the key exists in keys.json |

**Language-name slots** (PHASE2-BRIEF: filled with the dictionary form). `Intl.DisplayNames('it-IT')` returns «inglese», «italiano», «inglese americano», «italiano (Italia)» (checked locally). The Italian dictionary form is **lower case and has no article**, so:
- put the slot **after a colon** («Lingua: {1}», «Corso: {1}»), where lower case is correct Italian;
- never at the start of a sentence (it would show «inglese…» in lower case): reorder the slots so a colon comes first, since slots may be reordered;
- never after a definite article or articulated preposition («l'{1}», «dell'{1}», «il {1}»): Italian language names need *l'* before a vowel and *il* before a consonant;
- «in {1}» («in inglese») and «di {1}» («corso di inglese») are safe and may be used.
- Set `name.it` to «inglese». `nativeNameEn` is "Italian".

**UI glossary** (use exactly; matches §3):

| English | Italian | Note |
|---|---|---|
| lesson | lezione | «Lezione 5» |
| practice (set) | pratica | button «Esercitati»; never «esercizi», which is Drills |
| review (SRS) | ripasso | button «Ripassa» |
| deck | mazzo | «mazzo di carte» on first use |
| card / flashcard | carta | |
| streak | serie | «Serie: 5 gg» |
| hint | suggerimento | |
| check (3-question quiz) | mini-quiz | button «Verifica» |
| correct / incorrect | giusto / sbagliato | feedback «Esatto!» / «Non proprio». Avoid a bare «Sbagliato!», which reads as harsh |
| answer / explanation | risposta / spiegazione | `why` shown under «Spiegazione» |
| try again | riprova | |
| multiple choice | scelta multipla | |
| word tiles | tessere | |
| gap-fill | esercizio di completamento | short label «Completa» |
| typed sentence | scrivi la frase | |
| drills | esercizi | |
| level / XP | livello / XP | |
| pronunciation toggle | Mostra la pronuncia (IPA) | replaces "romanization"; a settings row, not a button |
| progress | progressi | tab «Profilo» |
| feedback | feedback | |
| settings / sign in / sync | impostazioni / accedi / sincronizza | «Accedi per sincronizzare» for `Sign in to sync` (Proton: «Accedi») |
| quiz | quiz | |
| level titles | Principiante · Apprendista · Parlante · Giramondo · Del posto · Pro · Leggenda | all seven are invariable for gender, so no title agrees with the user (es-en `TITLES`: Beginner, Student, Talker, Traveler, Local, Pro, Master). Gendered forms such as «Studente», «Chiacchierone», «Viaggiatore» are avoided. «Parlante» and «Del posto» need a native check |

## 11. Gaps and unverified claims

**Sources that were blocked or unreadable** (none is listed in Sources):
- **Flege, MacKay & Meador 1999** (native Italian speakers' perception and production of English vowels, JASA): the PDF redirect target was not on this session's allowlist. Nothing from it is used.
- **OrizzonteScuola** articles on EF EPI 2025 and INVALSI 2025: client errors.
- **Microsoft it-IT localisation style guide:** found, not read.
- **The Local Italy, "Ten common mistakes"**: paywalled; only four items read.
- **Swan & Smith, *Learner English*, Italian chapter:** never opened.

**Read only in part or with caveats:**
- Murphy & Poli 2017: no rates for prepositions, present perfect, past simple or conditionals; internal inconsistencies in text counts.
- Matteini 2018: one context (long passives in translation), rates read from a chart by the fetch tool, no data on expletive *it/there*.
- LEONIDE thesis (Utrecht): abstract only; a student thesis; sample size not stated.
- Busà: the fetched copy shows no journal or year; small sample (19 + 7), Northern Italians in California.
- Bassetti & Atkinson 2015 and Bassetti et al. 2018: prepublication copies; small high-school samples (14–30), one city for the 2018 learners (Rome).
- Miatto, Hamann & Boersma: loanword adaptation, not L2 production; effect not significant. Not counted as evidence.
- EF EPI 2025: the overall score (513) comes from MosaLingua Italia because the fact-sheet value was truncated; several region and city values were truncated; the band was not stated.
- INVALSI: figures come from the press release as summarised by the fetch tool; the grade-13 target for vocational schools was not confirmed.

**Quotations.** Text in straight quotes from Murphy & Poli, the LEONIDE abstract, Bassetti and colleagues, Busà, Proton, WSE, Skuola.net, QualeScegliere, MosaLingua and INVALSI is verbatim as returned by the fetch tool. **Not guaranteed verbatim** (the fetch tool's English paraphrase of the source): Busà's "largely triangular", the FlashAcademy and Pronunciation Studio error descriptions, The Local's item names, and the Studentville and UniD pair glosses. Matteini's paper title and year are inferred from the fetch summary and the file name (180913). Corrections of learner sentences are this profile's unless the source gave them.

**Practitioner-only or no fetched source** for:
- present perfect over-use, *I was been*, present for future, *have* for age and hunger, make/do, say/tell, uncountables, double negation, *the my family*, *Peter and her wife*, prepositions (FlashAcademy only);
- *da* + present (*I live here since…*), *If it will rain*, *perché* = *why*, invariable anglicisms (*two film*), intonation questions, *I'm agree*, *It makes cold*: the author's inference from Italian grammar;
- dummy-*it* omission (*Is raining*): inference by analogy with Spanish; no Italian source;
- final added vowel, h dropping and adding, th → t/d, *w* → *v*, trilled r, flattened diphthongs, no aspiration (Pronunciation Studio, FlashAcademy).

**Curriculum and culture claims not verified:**
- That Italian dictionaries print IPA rests on one consumer guide; Ragazzini and Hazon pages were not fetched. The same guide says IPA is rarely taught before university.
- Maturità English rules by track, and Cambridge candidate numbers in Italy, were not researched.
- Anki's Italian «mazzo» and Duolingo's Italian «serie» were not verified on a fetched page.
- «periodo ipotetico» and «genitivo sassone» as the school terms are the author's knowledge.

**Author's own knowledge of Italian, flagged for a native check:**
- *un miliardo* = 10⁹ and *bilione* = 10¹² (rare) in Italian.
- Which es false friends fail for Italian speakers (*imbarazzato, carriera, successo* as true cognates), the partial cognates (*costipato* = with a cold, *realizzare*, *discutere*), and every false-friend pair marked "inf." in §9, including *attendere*, *assistere a*, *collegio*, *magazzino*, *camera*, *lettura*, *largo*, *fastidioso*, *preservativo*, *firma*, *stampa*.
- *non devi* used colloquially for "you don't have to" (`modals`), *se avrei* as stigmatised colloquial Italian (`conditionals`), *Quando arriverò, ti chiamo*.
- The Italian reference sounds in the IPA key (the Southern-dialect schwa comparison, «abat-jour», «banca» for ŋ).
- The new minimal pairs (*hair/air, cat/cut, bad/bed*) and the distractors *at* (pron P5), *makes* (P12), *machine/chamber* (false-friends P10), *farmer/fair* (P4).
- Tab labels «Profilo» (for Progress), «Esercizi» and «Feedback», the level titles «Apprendista», «Parlante», «Giramondo», «Del posto», and «Ti diamo il benvenuto!».
- *tu* is supported by every fetched source; the imperative for buttons by Proton.

**Engine and pipeline points:**
- CLDR `one` covers only 1 in Italian (0 is `other`); the number-neutral patterns (§10) sidestep it.
- es `cueTest` gaps cause the six technical deviations (§8), the same six as fr.
- The Italian cueTest leaves out `con`, `non`, `parole`, `per`, `come`, `dice`, `uno`, `mia`, `chi` and `tempo`, which are English words or occur in English (*non-stop, per hour, come in, dice, Uno, Mia, tai chi, tempo*); `come` alone matched 35 es-en English strings in a trial. Hints therefore need another cue word («usa», «è», «la») where an es hint relied on *con*.
- The standing-rule keyword uses a lookbehind `(?<!d['’])`; Node supports it, and `validate.js` compiles keywords with `new RegExp(keywords, flags)`.
- cueTest has no case flag in `_dsl.js` and `validate.js`, so the word list spells capitals explicitly.

**Pronunciation aid:**
- No study compares IPA, respelling and no aid for Italian learners.
- The OALD notation is inherited from zh.md "as remembered" (OALD not fetched).
- If first-attempt logs or reviewers show learners ignore the IPA, the fallback is `pron: "optional"` with audio on by default. Do not switch to a respelling, for the reasons in §6.

## Sources

Web pages fetched and used:
- [Murphy, A. & Poli, F. (2017). Investigating L2 errors in a quasi-longitudinal learner English corpus, with particular reference to word order and the position of *also*. Corpus Linguistics 2017, University of Birmingham](https://www.birmingham.ac.uk/documents/college-artslaw/corpus/conference-archives/2017/general/paper285.pdf)
- [Matteini, S. (2018?). Paper on the written production of unaccusatives and passives by Italian learners of English (title and year inferred; Università per Stranieri di Perugia event file)](https://www.unistrapg.it/sites/default/files/docs/eventi/180913-matteini.pdf)
- [The acquisition of English by young Italian learners: A corpus study on the influence of transfer. Utrecht University student thesis (abstract page)](https://studenttheses.uu.nl/handle/20.500.12932/46306)
- [Bassetti, B. & Atkinson, N. (2015). Effects of orthographic forms on pronunciation in experienced instructed second language learners. *Applied Psycholinguistics* 36(1), 67–91 (prepublication copy)](https://iris.unimore.it/bitstream/11380/1298727/1/BassettiAtkinson2015Prepub.pdf)
- [Bassetti, B., Sokolović-Perović, M., Mairano, P. & Cerni, T. (2018). Orthography-induced length contrasts in the second language phonological systems of L2 speakers of English. *Language and Speech* 61(4), 577–597 (prepublication copy)](https://iris.unimo.it/retrieve/c550e5d8-3d09-4d84-bdb4-d59cd711a8bc/BassettiSokolovicPerovicMairanoCerni2018prepub.pdf)
- [Busà, M. G. The Italian accent in English: Results from an experimental study and implications for language teaching (OpenstarTs, Università di Trieste repository)](https://www.openstarts.units.it/server/api/core/bitstreams/d5b55c0b-b43c-4575-aec0-e9d539714638/content)
- [Miatto, V., Hamann, S. & Boersma, P. Self-reported L2 input predicts phonetic variation in the adaptation of English final consonants into Italian (consulted; not used as evidence)](https://www.fon.hum.uva.nl/silke/articles/Miatto_etal_2019.pdf)
- [Pronunciation Studio: Italian speakers' English pronunciation errors](https://pronunciationstudio.com/italian-speakers-english-pronunciation-errors/)
- [FlashAcademy: Italian learner profile (PDF)](https://support.flashacademy.com/hc/en-gb/article_attachments/7503603466397)
- [The Local Italy (2015): Ten common mistakes Italians make in English (partial, paywalled)](https://www.thelocal.com/20150206/ten-common-mistakes-italians-make-in-english)
- [UniD Formazione: False friends in inglese, attenzione ai falsi amici](https://www.unidformazione.com/false-friends-in-inglese-attenzione-ai-falsi-amici)
- [Studentville: False friends list, 15 errori da non fare in inglese](https://www.studentville.it/false-friends-list-15-errori-da-non-fare-in-inglese/)
- [Skuola.net: Verbs tenses (grammatica inglese)](https://www.skuola.net/grammatica-inglese/verbs-tenses.html)
- [Wall Street English Italia: Present Perfect Tense, utilizzo e regole](https://www.wallstreetenglish.it/esercizi/present-perfect-tense/)
- [QualeScegliere: Come scegliere il dizionario inglese-italiano](https://www.qualescegliere.it/guide/dizionario-inglese-italiano/)
- [MosaLingua Italia: L'alfabeto fonetico internazionale per migliorare la pronuncia](https://www.mosalingua.com/it/alfabeto-fonetico-internazionale-migliorare-la-pronuncia/)
- [EF EPI 2025 fact sheet: Italy](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-italy-english.pdf)
- [MosaLingua Italia: EF English Proficiency Index 2025, perché l'Italia arretra](https://www.mosalingua.com/it/ef-english-proficiency-index-2025-perche-litalia-arretra/)
- [EF EPI: Italy page (2026 edition announcement)](https://www.ef.com/wwen/epi/regions/europe/italy/)
- [INVALSI (2025): Comunicato stampa, presentazione risultati prove INVALSI 2025](https://www.invalsi.it/wp-content/uploads/2025/11/COMUNICATO_STAMPA_Presentazione_Risultati_Prove_INVALSI_2025.pdf)
- [Cambridge English Italia: B1 Preliminary for Schools](https://www.cambridgeenglish.org/it/exams-and-tests/preliminary-for-schools/)
- [Proton localization community: Guidance for Italian](https://localize.proton.me/t/guidance-for-italian/119)

Local project files read:
- `/home/claude/docs/profiles/pt.md` (§1, §7 and structure) and `pt.profile.json`, `fr.md` and `fr.profile.json` (in full, the second es-based example), `OTHERS.md` (Italian section and summary table);
- `es.md` §1, §7 and §10 (spot-checked: the verb-core definition, the 55px / 8-character tab cap), not read in full; PILOT-SPEC, PRACTICE-SPEC and the grammar-order report were not reopened, and claims about them come via fr.md;
- `/home/claude/docs/PIPELINE.md` §3, `PHASE2-BRIEF.md` (including the 2026-11-17 recurring-problems section);
- `/home/claude/tools/content/es/` (`profile.json`, `deviations.json`, `DECKNAMES.md`), `tools/content/zh/PRON-RULES.md`;
- `tools/content/parity.js`, `validate.js` (verb-core implementation, pron checks), `lib.js` (native-text normaliser);
- `tools/i18n/keys.json` (tab keys).

Local checks run:
- the generated `packs/course-es-en.js` scanned: lesson order, deck order and sizes, the `false-friends`, `make-do` and `pron` checks and practice items, every check option read as English by es `cueTest` (giving the six technical deviations), Hispanic places and names on the English side, GROUPS, GOALS, TITLES and lesson–deck links;
- zh-en and pt-en IPA reuse counts (466/480 cards, 316/340 distinct example rows; zh alone 349 and 225) and lookups of individual forms;
- `pronPattern` against 52 worked examples, with the validator's own normaliser;
- the Italian `cueTest` against 2,598 English strings of es-en plus the new it English strings (no English hit; the only hits are Spanish pron-check options that §8 replaces) and against sample Italian prompts, hints and both cue labels;
- the standing-rule keywords against sample `why` lines, including «d'accordo» with straight and curly apostrophes;
- `Intl` it-IT plural, date, number, currency, percent and language-name output (Node, ICU 78.3 / CLDR 48).
