# German speakers learning English — course profile

Course `de-en`: English for speakers of **standard German as written in Germany** (Standarddeutsch, Bundesdeutsch). All explanations, `why`, `hint`, meanings and interface text are in standard German. Answers and examples are in English.

**How this course is built.** It is built from the Spanish-speakers' course, not the Korean one, because German has articles and plurals like Spanish. `tools/content/de/` is scaffolded from `tools/content/es/` (41 lessons including `false-friends` and `make-do`, 25 decks). `profile.json` has `"reference": "es"`, so `parity.js` compares de-en's English side with **es-en**. Every English-side difference from es-en therefore costs a `deviations.json` entry. This profile says, lesson by lesson (§8) and deck by deck (§9), what stays as es-en has it and what changes.

**Evidence tags.**
- **[research-backed]**: an empirical study or dataset fetched for this profile. The study is named, its sample is given, and "abstract only" is said where only the abstract was read. "via OTHERS.md" means the claim comes from `docs/profiles/OTHERS.md` and its source could not be reopened here.
- **[curriculum convention]**: what German official bodies, school textbooks, school revision sites, style guides or courses do.
- **[practitioner opinion]**: a teacher's, school's or guide's stated view with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of German**. Such claims are flagged for a native check in §11.

Untagged rules in §6–§10 are design decisions, not findings.

## 1. Summary (10 lines max)

- Teach **American English** (`ttsLang:'en-US'`). Write **standard German (Germany) with *du***, friendly and plain, gender-neutral by rephrasing (no Genderstern). **Infinitive on buttons** («Prüfen», «Weiter»), as the Proton German guide prescribes. No Austrian or Swiss usage.
- **Standing rule: keep the Spanish course's `verb-core` rule**, keywords `Subjekt|Hilfsverb|(?:dritte[nr]?|3\.) Person|Übereinstimm|Kongruenz`. Every es-en practice item already satisfies it, so the English side carries over at no parity cost. German inverts the lexical verb (*Sprichst du Englisch?*) and has no do-support, so the auxiliary leg is live; the subject leg is weak (German always has a subject), as in fr.md.
- **Pronunciation aid: IPA, written exactly like the zh-en, pt-en, fr-en and it-en courses** (`pronPattern` copied). German pupils meet the «internationale Lautschrift» in Year 5 (Klett Green Line syllabus). A German-letter respelling would carry the exact errors to avoid: *w* = /v/, *v* = /f/, *z* = /ts/, final devoicing, *j* = /j/. IPA can be copied for **458 of 480** card targets and **317 of 340** example rows.
- **Curriculum:** keep all 41 es-en lessons in order. Change the English side of only **`pron`** (German traps: bad/bed, final devoicing, w/v, th, j) and **`false-friends`** (German–English false friends: become, chef, handy, also, who/where, will). Add six technical item deviations for Spanish check options that parity reads as English. **No de-only lesson**: word-order transfer is attested but residual (Rankin 2010: 8 of 421 learner questions non-target).
- **Decks:** keep all 25. Change English targets in 5: «Sich vorstellen», «Das Nötigste 1», «Komplimente und Zuneigung», «Aussprachefallen», «Falsche Freunde» (26 card targets).
- **Learners:** Germany ranks **4th** in EF EPI 2025 (10th in 2024), with reading 623, listening 609, writing 564 and speaking 521 (global average 488). Speaking is the weak skill. Abitur targets B2 (C1 receptive). Motivators: Abitur, Cambridge, TOEFL/IELTS, work.

## 2. Variant, register and voice

**English variant: American English** [inference].
- `ttsLang` is `en-US`, so spelling, examples and the `pron` aid must match the audio.
- Rules are the same as es.md §2, pt.md §2, fr.md §2 and it.md §2:
  - US spelling (*color, center, practice*);
  - US vocabulary (*apartment, cell phone, vacation, subway, soccer*);
  - dates written *November 15* in English text.
- German schools teach British English by default; the Bavarian Green Line syllabus says «korrekte Aussprache und Intonation üben (BE oder AE)» ([Klett, Green Line 5 Bayern synopsis](https://asset.klett.de/assets/c368e4dc/GLNBY_5_Syn_Bayern.366388.pdf)) [curriculum convention]. Learners know *flat, mobile, holiday, rubbish*. Add the British form to the card `note` where it is common: «Britisch: flat».

**German variety: Standarddeutsch (Deutschland)** [curriculum convention].
- Neutral standard German as written by national newspapers and software localisation. Duden spelling (reformed 2006). Write **ß** where Germany writes it (*Straße, heißen, Fuß*); Swiss *ss* is wrong here.
- Never use Austrian or Swiss forms (table below), and avoid regional words (*Semmel*, *Sonnabend*, *Moin* in prose). Test for a doubtful word: would a reader in Hamburg, Cologne and Munich all write it in a school essay?
- Anglicisms: the Proton German guide says "An English term might be recommended when its use has become very common" and "The use of too many anglicisms should be avoided" ([Proton](https://localize.proton.me/t/guidance-for-german/120)). Use a German word where one is current (*Einstellungen*, not *Settings*; *Wiederholung*, not *Review*), but keep anglicisms that are the normal German word (*E-Mail, Feedback, Quiz, Smalltalk, Handy, Team*).

| Use (Germany) | Never | English |
|---|---|---|
| Handy | Natel (CH) | cell phone |
| Januar | Jänner (AT) | January |
| Abitur | Matura (AT, CH) | (high-school leaving exam) |
| Tschüss, bis bald | Servus, Ciao (in prose), Adieu (CH) | bye |
| Brötchen | Semmel (AT, Bavaria), Weggli (CH) | roll |
| Sahne | Obers (AT), Rahm (CH) | cream |
| Fahrrad | Velo (CH) | bike |
| parken | parkieren (CH) | park |
| Kartoffel | Erdapfel (AT) | potato |
| Rechnung, «Zahlen, bitte» | — | check (US), bill (UK) |
| Geldautomat | Bankomat (AT, CH) | ATM |

**Form of address: *du*** [curriculum convention, consistent on every source fetched].
- The Proton German guide: "Use the informal second-person singular (“du”) form of address" and "Use the lower case spelling for pronouns (“du”, “dein”)" ([Proton](https://localize.proton.me/t/guidance-for-german/120)).
- German school revision sites for this audience use *du*: studyflix («findest du hier eine» Liste der False Friends; «Wenn du im Simple Present Fragen bilden möchtest») ([studyflix, False Friends](https://studyflix.de/englisch/false-friends-3943); [studyflix, Simple Present](https://studyflix.de/englisch/simple-present-2823)).
- OTHERS.md: "Most consumer apps use *du*, but confirm this before building." Duolingo's and Babbel's German interfaces are widely described as using *du*, but no page showing it was fetched (§11).
- Decision: **du** in explanations, prompts, `why`, hints and feedback; **infinitive** on buttons and menu items (§10). *Sie* only inside translations of formal English (service sentences, business e-mail: «Könnten Sie…?», «Ich freue mich auf Ihre Antwort»).
- *du* is written lower case everywhere, also in feedback («Gut gemacht! Du hast…»).
- In the `polite` lesson: *you* covers *du*, *ihr* and *Sie*. Politeness in English lives in *could / would / please*, not in the pronoun. This is a real German point: learners hunt for a polite *you* and do not find one.

**Register:**
- Friendly, direct, correct written German. No chat spelling (*hdl*, *kp*), no youth slang outside the «Filme, Serien und Slang» deck and the idioms lesson.
- Prefer *man* («Im Englischen sagt man…») or direct *du* («Du sagst…») in explanations; *wir* sparingly.
- Keep sentences short. German nominal style (*die Verwendung des Hilfsverbs erfolgt…*) is wrong for this app: write «Du brauchst das Hilfsverb…».

**Sample sentences in this voice:**
1. «Im Englischen gibt es kein „Perfekt für alles“: Mit *yesterday* steht das simple past, also *I saw him yesterday*.»
2. «Kennst du schon *does*? Damit fragst du bei *he*, *she* und *it*: *Does she work here?*»
3. «Gut gemacht! Wiederhole diese Karten morgen, dann bleiben sie hängen.»

**Punctuation and mixing English into German:**
- In lesson HTML bodies, mark English with `<em>`.
- In plain-text fields (`why`, `hint`, `p`, card notes), put English inside straight double quotes ("the") and German quotations inside German quotes „so“ (U+201E … U+201C), with no spaces inside. Proton: "Use curved quotation marks with lower-upper alignment". This keeps the es-en convention (straight quotes = English, typographic quotes = native), so items copied from es keep working and the two kinds of quote tell the languages apart.
- **English strings never contain curly quotes**: „ is part of `labels.cueTest` (§8 trap 2).
- No space before `:` `;` `?` `!` (Proton: "Colons and semicolons come immediately after the preceding word"). Proton says "Do not use the Em dash": use a spaced en dash ( – ) in German text, including hints («three · tree – mit "there"»).
- Never inflect English words with German morphology in prose: «die *phrasal verbs*», not «die Phrasalverbs» or «des Simple Pasts». English grammar names are used as invariable names: «das simple past», «im present perfect».
- Use German exonyms in German text: «London», «New York», «Mexiko-Stadt», «Rom», «Lissabon». English strings keep the English names (*Munich, Cologne, Nuremberg*).
- **German capitalises nouns; English does not.** Do not let German capitals leak into English strings (*the Company*, *my Brother*): it is itself a documented German error (§4.14).

## 3. Glossary

[Curriculum convention.] German school grammar of English uses **English names for tenses** and German words for everything else. The Klett Green Line syllabus for Year 5 (Bavaria) lists «Zeiten: present tense (simple/progressive), simple past», «Verb: Vollverben; Hilfsverben (be, have, do, can, must)», «Syntax: alle Satzarten (bejaht/verneint), einfache Nebensätze; Kurzantworten», «nur rezeptiv: going-to future» and «die wichtigsten Symbole der internationalen Lautschrift verstehen» ([Klett](https://asset.klett.de/assets/c368e4dc/GLNBY_5_Syn_Bayern.366388.pdf)). studyflix's simple present page uses «Hilfsverb **do**», «Verneinung», «Fragen im Simple Present», «Signalwörter», «die **Grundform**, also den **Infinitiv** des Verbs», and the universal mnemonic «he, she, it das s muss mit!» ([studyflix](https://studyflix.de/englisch/simple-present-2823)).

**German learners already know these terms**, so the course uses them as they are, including the English tense names, which German schools never translate.

| English term | German term to use | Note |
|---|---|---|
| article | Artikel | |
| definite / indefinite article | bestimmter / unbestimmter Artikel | |
| zero article | kein Artikel | «hier steht kein Artikel» in prose |
| noun | Nomen (Substantiv) | «Nomen» is the school word |
| plural / singular | Plural / Singular | not «Mehrzahl/Einzahl» (primary-school words) |
| countable / uncountable noun | zählbares / nicht zählbares Nomen | deck name «Unzählbare Nomen» |
| subject | Subjekt | standing-rule keyword |
| object | Objekt | |
| subject pronoun | Personalpronomen (Subjektform) | |
| object pronoun | Objektpronomen (*me, him, her*) | |
| possessive adjective (my, his) | Possessivbegleiter, besitzanzeigendes Fürwort | «Possessivbegleiter» is the textbook term [inference] |
| possessive 's | s-Genitiv | |
| verb | Verb | |
| lexical verb | Vollverb | Klett: «Vollverben» |
| auxiliary verb | Hilfsverb | standing-rule keyword; Klett, studyflix |
| base form | Grundform (Infinitiv ohne *to*) | studyflix: «die Grundform, also den Infinitiv» |
| infinitive (*to* + verb) | Infinitiv mit *to* | |
| third person singular | 3. Person Singular, dritte Person Singular | standing-rule keyword; mnemonic «he, she, it – das s muss mit» |
| subject–verb agreement | Übereinstimmung von Subjekt und Verb | standing-rule keyword. «Kongruenz» is the linguistics term; it also matches but school pupils do not know it |
| tense | Zeit, Zeitform | |
| present simple | *simple present* | Klett, studyflix |
| present continuous | *present progressive* | Klett «present tense (progressive)»; accept *present continuous* as a synonym in prose |
| past simple | *simple past* | Klett. **Never** gloss it as «Präteritum» as if the two matched (§4.1) |
| past continuous | *past progressive* | |
| present perfect | *present perfect* | **Never** gloss as «Perfekt» (§4.1, §8 `perfect`) |
| present perfect continuous | *present perfect progressive* | |
| past perfect | *past perfect* (Plusquamperfekt) | |
| future with will | *will-future* | school term [inference] |
| going to | *going-to-future* | Klett: «going-to future» |
| irregular verb | unregelmäßiges Verb | |
| past participle | Partizip Perfekt (*3. Form*) | pupils learn verb tables as «1., 2., 3. Form» [inference] |
| -ing form / gerund | *-ing*-Form, Gerundium | «Gerund» is also used in schools |
| modal verb | Modalverb | |
| passive / active voice | Passiv / Aktiv | |
| conditional sentences | *if*-Sätze (Typ 1, 2, 3) | school term [inference] |
| relative clause | Relativsatz | |
| relative pronoun | Relativpronomen | |
| phrasal verb | *phrasal verb* | keep the English; compare «trennbare Verben» once |
| reported / direct speech | indirekte / direkte Rede | |
| adjective / adverb | Adjektiv / Adverb | |
| comparative / superlative | Komparativ / Superlativ, Steigerung | |
| preposition | Präposition | |
| quantifier | Mengenwort | first mention «Mengenwörter (*some, much, many*)» |
| question word | Fragewort | |
| negative / interrogative form | Verneinung / Frage | studyflix |
| signal word | Signalwort | the German school device for choosing a tense (*yesterday* → simple past); use it, it helps with §4.1 |
| short answer | Kurzantwort | Klett |
| word order | Satzstellung, Wortstellung | |
| contraction | Kurzform | |
| false friend | falscher Freund (*false friend*) | German sites say «False Friends» |
| cognate | Fremdwort, internationales Wort | «Fremdwörter» is what German speakers call *Information, Universität* |
| idiom | Redewendung | |
| stress (word stress) | Betonung, betonte Silbe | |
| vowel / consonant | Vokal / Konsonant | |
| IPA | Lautschrift (IPA) | first mention «die Lautschrift (IPA), wie im Wörterbuch» |
| lesson | Lektion | |
| practice | Übung; button «Üben» | |
| review | Wiederholung; verb «wiederholen» | |
| deck | Stapel | «Kartenstapel» on first use; Anki's German term [practitioner opinion, not verified]; never «Deck» in UI |
| flashcard | Karteikarte, Karte | «Karte» after first use |
| streak | Serie | «Tage in Folge» in counts (§10) |
| hint | Tipp | |
| check (3-question quiz) | Mini-Quiz | button «Prüfen» |
| correct / incorrect | richtig / falsch | feedback «Richtig!» / «Nicht ganz» (§10) |
| try again | erneut versuchen | button «Erneut versuchen» |
| answer / explanation | Antwort / Erklärung | |
| multiple choice | Multiple Choice | the normal German word |
| word tiles | Wortkärtchen | instruction «Bring die Wörter in die richtige Reihenfolge» |
| gap-fill | Lückentext | the German school term; instruction «Ergänze die Lücke» |
| typed sentence | Satz schreiben | «Schreib den Satz auf Englisch» |
| example | Beispiel | |
| level / progress | Stufe / Fortschritt | tab «Profil» (§10) |
| settings | Einstellungen | |
| feedback (to developers) | Feedback | tab «Feedback», page «Sag uns deine Meinung» |
| pronunciation hint | Lautschrift | toggle «Lautschrift anzeigen (IPA)» |

## 4. Persistent error zones

**How the list is ranked.** This profile ranks the items [inference]:
- Items with fetched production data from German-speaking learners come first.
- Within the rest, items come first if typed practice can test them and if they recur across lessons.

**Main fetched evidence** (thin: no error-tagged German learner corpus with full error counts was readable this session):
- **Rankin 2010** ([Transfer and optionality: verb second and inversion in advanced L2 English, PhD thesis, Universität Wien](https://core.ac.uk/download/11589622.pdf)): ICLE-GE (407 texts, 221,621 tokens), the Vienna WUCLE corpus (62 texts, 176,843 tokens) and LOCNESS (324,304 words), plus a grammaticality-judgement task with advanced Austrian students.
  - Finding: "a residual tendency on the part of the L1 German (and Dutch) speakers to transfer V2 into English", limited to auxiliary movement and inversion of copula *be*; thematic-verb placement in questions and relative to negation was "consistently target-like".
  - Interrogatives: 8 of 421 questions in ICLE-GE non-target (about 1.9%); 0 of 49 in WUCLE. Examples: "Do times really have changed?", "Shouldn't be there a speed limit on German motorways…?", "Did it anything to their cruel and brutal way of coldly killing innocent people?".
  - Stylistic inversion (adverbial + verb + subject) per 10,000 tokens: ICLE-GE 0.72, LOCNESS 0.50, ICLE-FR 0.43 (no significance test in the part read).
  - The thesis uses *I read often novels* (*Ich lese oft Romane*) as its diagnostic for V2 adverb placement; the results section on adverb placement was not reached (§11).
  - Learners are advanced university students; beginners' rates are not known.
- **Murakami & Alexopoulou 2016** (Cambridge Learner Corpus, 11,893 scripts, via OTHERS.md; not reopened): progressive -ing still below 90% accuracy at CPE (C2) for German learners; possessive 's ranks lower for French and German learners than for Japanese and Korean learners.
- **Dose & Götz** ([The progressive in spoken vs. written learner language, TaLC 10 paper, Justus Liebig University Giessen](https://talc10.ils.uw.edu.pl/wp-content/uploads/sites/189/2011/09/DOSE1.pdf); pilot, no figures in the text): German learners "tend to underuse the progressive in spoken language", unlike the overuse reported for written learner English. Examples: misuse "they are speaking so fast", non-use "these supermarkets become popular now".
- **Rogatcheva 2012** ([Measuring learner (mis)use: tense and aspect errors in the Bulgarian and German components of ICLE](https://www.ceeol.com/search/chapter-detail?id=837568); abstract only): both groups struggle with the sequence of tenses, "although their accuracy rates for the individual tense-aspect forms differ". No German figures on the abstract page.
- **Smith, Hayes-Harb, Bruss & Harker 2009** (*Journal of Phonetics* 37), read **as reported in** [Brown 2015, University of Utah thesis](https://core.ac.uk/download/276266793.pdf): 13 German speakers producing English and German word pairs.
- **Practitioner sources:**
  - [llexi, Common English errors by German speakers](https://llexi.com/l1-errors/common-english-errors-german-speakers/) (no studies cited);
  - [TEFL Academy, Common problems for German learners of English](https://www.theteflacademy.com/blog/common-problems-for-german-learners-of-english) (the source OTHERS.md used; reopened here);
  - [Cambridge University Press, *English Grammar in Use* German common-error card](https://www.cambridgeenglish.org/de/Images/655040-english-grammar-in-use-german-common-error-card.pdf) ("supplied by the language research team at Cambridge University Press"; no counts);
  - false-friend lists: [studyflix](https://studyflix.de/englisch/false-friends-3943) (100 pairs, a school revision site) and [Lernhelfer Schülerlexikon](https://www.lernhelfer.de/schuelerlexikon/englisch/artikel/false-friends) (27 pairs).
- **No learner data was fetched** for German speakers' articles, countability, prepositions, comparatives or relative pronouns as error counts. Those items rest on practitioner sources and inference.

1. **Tense: present perfect for finished past, present for *seit*, and *vor* for *ago***
   - Typical errors:
     - *We have discussed the Acme contract yesterday* → *We discussed…*; *I have sent the email two hours ago* → *I sent…* (llexi); *Then I have made dinner* → *Then I made dinner* (TEFL Academy).
     - *I have been working on this code since three hours* → *for three hours* (llexi); *I live here since 2010* → *I've lived here since 2010* (*Ich wohne hier seit 2010*) [inference; the classic German error].
     - *before two years* → *two years ago* (*vor zwei Jahren*) [inference].
   - [research-backed, abstract only] German (and Bulgarian) ICLE writers struggle with the sequence of tenses (Rogatcheva 2012).
   - Why [inference]: spoken German uses the **Perfekt** for almost every past event (*Gestern habe ich ihn gesehen*), and *haben* + participle looks exactly like the present perfect. German uses the present with *seit* for continuing states (*Ich kenne ihn seit Jahren*) and *vor* + time for *ago*. Expect **over-use of the present perfect with finished time** (the strongest German tense error), the present instead of the perfect with *since/for*, and *since* for *for* (*seit* covers both).
   - Design consequence: teach the German school device «Signalwörter» (*yesterday, ago, last week, in 2019* → simple past; *since, for, already, ever* → present perfect) in `perfect`, `perfect-2`, `past` and `narrative`.
2. **Progressive aspect: avoided in speech, misused in writing**
   - Typical errors: *I drink coffee* (now) → *I'm drinking coffee*; *I go to work every day* ↔ *I'm going to work every day* (TEFL Academy: "may avoid it or overuse it"); "these supermarkets become popular now" → *are becoming* (Dose & Götz).
   - [research-backed, via OTHERS.md] Progressive -ing still below 90% accuracy at C2 for German learners (Murakami & Alexopoulou 2016).
   - [research-backed, pilot, no figures] Underuse in spoken German learner English (Dose & Götz).
   - [inference] Standard German has no progressive (*ich trinke* = I drink / I'm drinking); the colloquial *ich bin am Arbeiten* is regional and marked. Stative verbs in the progressive (*I'm knowing*) appear as an overcorrection once the form is learned.
3. **False friends**
   - Typical errors: *become* for «bekommen» (→ *get*); *actual* for «aktuell» (→ *current*); *chef* for «Chef» (→ *boss*); *eventually* for «eventuell» (→ *possibly*); *also* for «also» (→ *so*); *handy* for «Handy» (→ *cell phone*); *rent* for «Rente» (→ *pension*); *sea* for «See» (→ *lake*); *meaning* for «Meinung» (→ *opinion*); *will* for «will» (→ *want*) (llexi, TEFL Academy, studyflix, Lernhelfer).
   - [curriculum convention] Every German revision site carries a list: studyflix's 100 pairs and Lernhelfer's 27 overlap on *aktuell, Billion, Gift, Handy, Meinung, Personal, Rente, sensibel, spend* (*Spende/spendieren*) and *will*; studyflix adds *bekommen, Chef, also, eventuell, Mappe*. The full grouped list is in §9.
   - Function-word false friends: *wer* (who) / *where*, *wo* (where) / *who*, *wenn* (if) / *when* (Lernhelfer: «wenn = falls» → "if (bedingend!)", "when" → «wenn, als (zeitlich!)»), *bis* (until/by) (llexi), *also* (so).
   - No count of false-friend errors was found for German learners.
4. ***will* for *want*, *will* in time clauses, *wenn* for *if* and *when***
   - Typical errors: *I will a coffee* → *I want a coffee* (*Ich will einen Kaffee*) [inference; Lernhelfer lists «wollen» → "to want", not "will"]; *I'll tell him when I'll see him* → *when I see him* (TEFL Academy); *If I get home, I'll call you* for *When I get home…* (*Wenn ich nach Hause komme*) [inference from Lernhelfer's *wenn* entry].
   - [inference] German *wenn* covers both *if* and *when* (present and future), and German speakers use *werden* futures in clauses where English needs the present.
5. **Word order: verb second after adverbials, adverb placement, verb-final in subordinate clauses**
   - Typical errors: *Tomorrow have we a meeting about the Acme contract* → *Tomorrow, we have a meeting…*; *Next week will the client sign the agreement* (llexi); *I read often novels* → *I often read novels* (Rankin's diagnostic); *…because I it forgot* → *because I forgot it* (OTHERS.md, no source fetched).
   - [research-backed] V2 transfer is **residual** in advanced writing: limited to auxiliaries and copula *be*, 8 of 421 questions non-target (1.9%), stylistic inversion 0.72 vs 0.50 per 10,000 tokens (Rankin 2010).
   - [inference] Beginners are likely to show more: German puts the finite verb second in every main clause (*Gestern ging ich…*) and last in subordinate clauses (*…weil ich es vergessen habe*), and puts *nicht* after the verb (*Ich mag es nicht* → *I like it not*).
   - Design consequence: no new lesson (§8); word order goes into the `present` (adverbs), `questions`, `joining` (subordinate clauses) and `past` bodies.
6. **Prepositions: *seit/bis*, verb complements**
   - Typical errors: *since three hours* → *for three hours*; *Please submit the Q3 budget until Friday* → *by Friday* (llexi; *bis* = *until* and *by*).
   - [inference] *warten auf* → *wait on* (→ *wait for*); *abhängen von* → *depend from* (→ *depend on*); *auf dem Foto* → *on the photo* (→ *in the photo*); *interessiert an* → *interested on* (→ *interested in*); *am Wochenende* → *at the weekend* (UK; US *on the weekend*).
7. **Make vs do vs have vs take** (*machen*)
   - Typical errors (Cambridge University Press error card, German): "What you make with your talent" → *do*; "We would like to make a training course" → *have*; "you've already made bad experiences" → *had* (*Erfahrungen machen*).
   - [inference] *machen* covers make, do, take (*ein Foto machen* → *take a photo*), have (*eine Party machen*) and go (*Urlaub machen* → *go on vacation*); *Spaß machen* → *be fun*. *sagen/erzählen* → *say/tell* gives *He said me* → *He told me*.
8. **Modals: *must not* vs *don't have to***
   - Typical error: *You must not come* for «Du musst nicht kommen» (→ *You don't have to come*).
   - [curriculum convention] Lernhelfer lists «nicht müssen» → "you don't have to, you don't need to", not "you must not…" («nicht dürfen»).
   - [inference] German *nicht müssen* = no obligation; English *must not* = prohibition (= *nicht dürfen*). The es `modals` items test exactly this (§8).
9. **Countability**
   - Typical errors: *informations, advices* (*Informationen, Ratschläge*), *furnitures* (*Möbel*), *homeworks* (*Hausaufgaben*), *The news are good* (*Die Nachrichten sind gut*), *my hairs are long* (*meine Haare sind lang*), *progresses* (*Fortschritte*) [inference; every one is a German plural].
10. **Articles: generic abstract nouns, institutions, jobs**
    - Typical errors: *The life is beautiful* → *Life is beautiful* (*Das Leben ist schön*); *I go to the school* → *I go to school*; *in the bed* → *in bed*; *She is doctor* → *She's a doctor* (*Sie ist Ärztin*); *in the Switzerland* → *in Switzerland* (*in der Schweiz*) [all inference].
    - [inference] German drops the article before an unmodified job (*Er ist Lehrer*), exactly like Spanish, and uses the definite article with abstract nouns, some countries and institutions less often than Spanish but more often than English. The es items fit.
11. **Possessives: *'s* and the apostrophe**
    - Typical errors: *the car of my brother* → *my brother's car* (OTHERS.md); *Peters car* → *Peter's car* (German *Peters Auto* has no apostrophe) [inference].
    - [research-backed, via OTHERS.md] Possessive 's accuracy ranks lower for German and French learners than for Japanese and Korean learners (Murakami & Alexopoulou 2016).
    - [inference] *sein/ihr* follow the owner as in English, so *his/her* mix-ups are **not** a German problem (unlike es, fr, it).
12. **Comparatives: *than* not *as***
    - Typical errors: *bigger as* → *bigger than* (*größer als*); *more bigger* → *bigger* [inference].
13. **Relative clauses and commas**
    - Typical errors: *the man which* / *the book who* (*der/die/das* for people and things alike); *everything what I know* → *everything (that) I know* (*alles, was*); *I think, that he is right* → *I think that he is right*; *The man, who called, is here* for a defining clause [inference].
    - [practitioner opinion] "German punctuation rules are stricter, so learners may overuse punctuation in English" (TEFL Academy).
14. **Capital letters on English nouns**
    - Typical errors: "The Company needs to update its Marketing Strategy for the new Product" (llexi); TEFL Academy: "German capitalises all nouns, so learners may capitalise English nouns too".
    - Not testable in typed practice (the engine ignores case for English). Lesson prose and e-mail notes only.
15. **Conditionals: *would* in the *if*-clause, *were***
    - Typical errors: *If I would have time, I would come* → *If I had time…* (colloquial German *Wenn ich Zeit hätte / würde…*) [inference]; "It would be perfect if there are sockets" → *were* (Cambridge error card).
16. **Pronunciation**
    - **w → /v/, and v → /w/ by overcorrection** (*vine* for *wine*; *wery* for *very*).
      - [practitioner opinion] "Learners may pronounce initial /w/ as /v/, for example saying 'vine' for 'wine'" (TEFL Academy).
      - [inference] German *w* is /v/ (*Wein*) and German *v* is usually /f/ (*Vater*), so *very* is read with [f] or, after correction, [w].
    - **th → /s/, /z/ (or /f/, /d/)** (*sink* for *think*, *zis* for *this*).
      - [practitioner opinion] "German lacks the θ sound, as in 'Thursday' and 'thirsty'" (TEFL Academy).
    - **Final devoicing** (*bag* like *back*, *dog* like *dock*, *bed* like *bet*, *his* like *hiss*).
      - [research-backed, as reported in Brown 2015] German speakers producing English **did** make a contrast, mostly through vowel length: they lengthened vowels before voiced final consonants by 24% (English speakers about 20%), but their closure-duration difference was 17% (English 67%) and voicing differed by about 11 ms (English 29 ms) (Smith et al. 2009; n = 13 German speakers). Native German listeners were "no better at identifying the tokens" than English listeners.
      - Design consequence: German speakers already lengthen the vowel; what they under-produce is the voicing and closure difference. The IPA writes voiced codas (/ˈbæg/), and the key tells learners to keep the final consonant voiced.
    - **/æ/ said as /e/** (*bad* like *bed*, *man* like *men*), **/ʌ/ said as German short *a*** [inference]. German has no /æ/.
    - **r made at the back of the throat**, and post-vocalic *r* dropped (*car* as [kaː]) [inference]. American English pronounces every written *r*.
    - **s at the start read /z/** (*sun* as [zʌn], *Sue* like *zoo*) because German *s* before a vowel is /z/ [inference].
    - **/dʒ/ said /tʃ/ or /j/** (*job* as [tʃɔp] or, by spelling, [jɔp]; *age* as [eɪtʃ]) [inference]. German *j* is /j/, and /dʒ/ exists only in loanwords (*Dschungel, Job*).
    - **Diphthongs flattened** (*go* as German [oː], *day* as [deː]) [inference].
    - **Word stress on Latinate words** (*uni-VER-sity* said like *Universi-TÄT*; *CHEM-istry* like *Che-MIE*; *in-for-MA-tion* like *Informa-TION*) [inference]. German Fremdwörter stress the last syllable (-tät, -ie, -ion, -ell), which pulls English stress to the end.

## 5. Learner starting point

**Proficiency (EF EPI 2025)** [research-backed; self-selected online test-takers]
- From EF's own fact sheet: Germany ranks **4th** worldwide, against a global average of 488. Skill scores are reading **623**, listening **609**, writing **564** and speaking **521** ([EF EPI 2025 Germany](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-germany-english.pdf); German version gives the same figures). **The overall score is truncated in both fetches** (shown as "65"), so it is not reported here. Germany rose from 10th in 2024 ([MosaLingua DE](https://www.mosalingua.com/de/ef-english-proficiency-index-2025/): «Von Platz 10 im Vorjahr klettert es auf Platz 4 weltweit»; [IamExpat](https://www.iamexpat.de/expat-info/germany-news/how-good-germanys-english-2025)). The band was not stated on the fact sheet.
- Of the regional values returned in full, Bavaria (624) is highest and Mecklenburg-Vorpommern (585) lowest; North Rhine-Westphalia, Baden-Württemberg and several others were truncated, so the true range is not known. Cities returned in full run from Karlsruhe 673, Aachen 672 and Bonn 662 to Berlin 625, Hamburg 622 and Mannheim 602.
- **Conflict:** `OTHERS.md` gave 598 (rank ≈10) from a secondary table. That matches the **2024** rank; the 2025 fact sheet replaces it.

**Speaking below reading, but high overall.** Speaking (521) is 102 points below reading and still 33 points **above** the global overall average. The typical adult user has had eight or nine years of school English, reads well, and makes a stable set of fossilised errors (§4.1–§4.5, false friends, w/v, th). Many will find the A1 lessons easy.

**Exam and school culture**
- [inference] English is compulsory from primary school (not verified). [curriculum convention] The KMK standards for the Abitur expect «B2 des GeR» for communicative competence and, for English in receptive skills, «auch das Niveau C1» (KMK 2014, as quoted by the [IQB](https://www.iqb.hu-berlin.de/bista/bista/UnterrichtSekII/englisch/Bildungsstandard.pdf)).
- [curriculum convention] Lautschrift is part of Year 5 (Klett Green Line Bayern: «die wichtigsten Symbole der internationalen Lautschrift verstehen»).
- **Cambridge** (B2 First, C1 Advanced) through schools, **TOEFL / IELTS** for study abroad, **TOEIC** in some companies, and **work** (English as the meeting language in international firms) are plausible motivators; no uptake figures were fetched (§11).

**Cognate advantage** [inference]
- English and German share a Germanic core (*house/Haus, water/Wasser, bring/bringen, hand/Hand*) and a large Latinate layer that German uses as Fremdwörter (*Information, Universität, exzellent, komfortabel*). German speakers recognise more everyday English than Romance speakers do; the core verbs *get, take, keep* are the exception.
- The traps are the near-identical words: false friends (§4.3) and the stress of Fremdwörter (§4.16).

**Implications for the app** [inference]
- Keep the A1 lessons (parity) but make them quick: short bodies, and a «Das kennst du schon» opener where German matches English (articles, plurals, *going to*, separable verbs vs phrasal verbs). Whether to add a placement or test-out is a product decision for the lead (§11).
- Spend lesson weight on typed items in the tense lessons (`perfect`, `perfect-2`, `continuous`, `past-continuous`, `narrative`), `modals`, `first-conditional` and `false-friends`.
- Spend card slots on false friends, phrasal verbs, uncountables and the get/take/keep core. Keep the five es-only decks (§9).
- Show IPA with stress marks on every card: the w/v, th, voiced-coda and /æ/ errors are all visible in the transcription.
- Use goals and plan names that match the motivators: «Reisen», «Arbeit», «Freunde», «Serien und Filme».

## 6. Pronunciation aid policy

**Evidence**
- **What German learners know** [curriculum convention]:
  - The Klett Green Line Year 5 syllabus (Bavaria) sets «die wichtigsten Symbole der internationalen Lautschrift verstehen» as an objective in the pronunciation strand ([Klett](https://asset.klett.de/assets/c368e4dc/GLNBY_5_Syn_Bayern.366388.pdf)). So German learners meet IPA at about age 10–11, earlier than French or Italian learners (fr.md §6, it.md §6). One syllabus from one Land was read; other textbooks (Cornelsen *English G Access*) were not opened (§11).
  - Bilingual school dictionaries sold in Germany (Langenscheidt, PONS) print IPA after each headword [inference; not fetched].
  - OTHERS.md suggested `pron: "none"` because "a respelling based on German spelling would teach the *w* → /v/ error". This profile agrees about respelling but not about "none": with no aid, the learner falls back on the English spelling read with German letter values, which is the source of the w/v, *z*, *j* and final-devoicing errors (§4.16). IPA is the one written aid German learners already know.
- **Against a German-letter respelling** [inference from §4.16]. German spelling-to-sound rules would mislead the reader exactly where German speakers go wrong:
  - **w is /v/, v is /f/.** «WAIN» for *wine* is read [vaɪn]; «WERI» for *very* is read [veːri]; a respelling cannot write English /w/ at all.
  - **z is /ts/; s before a vowel is /z/.** «ZU» for *zoo* is read [tsuː]; «SAN» for *sun* is read [zan].
  - **Final b, d, g are read as p, t, k** (Auslautverhärtung). «BÄG» for *bag* is read [bɛk]: the aid itself would teach final devoicing.
  - **j is /j/**; /dʒ/ needs «dsch» («DSCHOB»), clumsy and still read with a voiceless start by many speakers.
  - **No letters for /θ ð æ ʌ ɜː ə/ or for /w/**; *ä* is /ɛ/, not /æ/, so *bad* and *bed* would get the same respelling.
  - **ei = /aɪ/, ie = /iː/, eu = /ɔɪ/, sch = /ʃ/, ch = /ç x/**: any respelling must avoid these letter groups or be misread.
  - es-en's Spanish respelling cannot be reused: it writes /h/ as **j** («je-LOU»), which German readers say [j].
- **Reuse** [measured locally]: of the 480 de-en card targets (es-en's targets with the 26 replacements in §9), **458** already carry IPA in zh-en, pt-en or fr-en, identical character for character; so do **317 of the 340** distinct es-en `{{ex:}}` English strings. Of the new targets only *bad, bed, bag, back* are reusable (zh-en); *wine, vine*, the 16 false-friend targets and the four localised sentences (22 in all) are written fresh (worked examples below).
- **No study** compares IPA, respelling and no aid for German learners. The recommendation is [inference]. It inherits zh.md's caveat that the OALD North American notation is used "as remembered".

**Recommendation: IPA in every `pron` field (`"pron": "required"`), using exactly the zh-en notation and rules (as pt-en, fr-en and it-en do), with the key taught on one screen in the `pron` lesson. The interface toggle is «Lautschrift anzeigen (IPA)».**

The binding rules are zh.md §6 plus `tools/content/zh/PRON-RULES.md`. de writers follow them unchanged, so a pron copied from zh-en, pt-en or fr-en is already correct. Summary:

1. **Format.**
   - One pair of slashes around the whole transcription, words separated by single spaces.
   - No capitals, digits or punctuation.
   - ` ‖ ` between two sentences in one row; never `|`.
   - Alternatives are written as two slashed groups (`/ˈhaɪ/ /ˈheɪ/`). Never `//`.
2. **Stress.**
   - A closed list of function words stays unmarked: articles, pronouns, *be*, auxiliary *do/have*, modals, prepositions, conjunctions, existential *there*.
   - **Every other word gets ˈ, monosyllables included**: `/aɪ ˈlaɪk ˈtiː/`. A function word cited alone (a card target such as *will*) takes its strong form and ˈ (zh PRON-RULES §B, "strong (alone…)").
   - Every pron therefore contains ˈ, which `pronPattern` requires. (`pronScript` is not needed: with `nativeScript: null` the validator only asks the pron to differ from the English, which the slashes guarantee, and `pronPattern` already demands ˈ.)
   - ˌ is used only inside long words, in -teen numbers and in letter-by-letter abbreviations.
3. **Symbols.**
   - OALD North American values: oʊ, ɑː for LOT, ɔː for THOUGHT, ɜːr, ər, ɪr/er/ʊr, ɑːr/ɔːr; æ before r as in zh-en (`married` /ˈmærid/).
   - **ASCII `g`, plain `r`.** No ɡ, ɹ, ɚ, ɝ or flap symbol.
   - DRESS is **e** (`/ˈbed/`).
   - Final unstressed -y is **i**. Unstressed long vowels lose ː.
4. **Weak forms** as in zh PRON-RULES §B: *a* /ə/, *the* /ðə/ (/ði/ before a vowel), *to* /tə/, *for* /fər/, *of* /əv/, *and* /ənd/, *can* /kən/, *are* /ər/, *was* /wəz/, *you* /ju/, *do* /də/, *could* /kəd/.
5. **Codas are written in full, voiced as said.**
   - -s is /s z ɪz/ and -ed is /t d ɪd/ as heard: `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/. For German learners, `played` ending in /d/ and `bag` ending in /g/ is the cue against final devoicing.
   - Syllabic l and n follow zh PRON-RULES §A.4: `people` /ˈpiːpl/, `student` /ˈstuːdnt/.
6. **Names** as the en-US voice says them: `Germany` /ˈdʒɜːrməni/, `Berlin` /bərˈlɪn/, `Munich` /ˈmjuːnɪk/, `Cologne` /kəˈloʊn/. Numbers as words. Abbreviations letter by letter.
7. **Practice items carry no pron** (PRACTICE-SPEC).
8. **Copy first.** For any English string identical to a zh-en, pt-en or fr-en card target or `{{ex:}}` row, copy its pron exactly (zh first, then pt, then fr). Write new IPA only for strings none has: the localised targets, the rebuilt `pron` and `false-friends` items, and the new cards in decks 17 and 21. Content agents may copy `tools/content/zh/pron_check.js` into `tools/content/de/` and run it to catch conflicting transcriptions; `lint.js` blocks two different aids for one English text.
9. **Convert every Spanish respelling** quoted in card notes, lesson prose and check options: «KAMF-ter-bel», «LI-rel», «SKUUL», «ther-TIIN» and similar. They are in `pron`, `numbers`, the «Cognados y acento» notes, «Supervivencia 1» notes and others. Replace each with IPA or with a German description. A search for `[A-Z]{2,}-` and `[A-Z]{4,}` in `tools/content/de/` finds most of them.

**The key for the `pron` lesson** (one screen, German reference sounds, German traps flagged ⚠):

| IPA | Sound | Wie im Deutschen | Example |
|---|---|---|---|
| iː | long, tense i | «ie» in «Liebe» | sheep /ˈʃiːp/ |
| ɪ | short, relaxed i | «i» in «Mitte» (gibt es im Deutschen auch) | ship /ˈʃɪp/ |
| e | DRESS | «e» in «Bett» | bed /ˈbed/ |
| æ | TRAP | kein deutscher Laut: zwischen «ä» und «a», Mund weit offen; **bad ist nicht bed** ⚠ | bad /ˈbæd/ |
| ʌ | STRUT | kurzes «a» wie in «Mann», aber weiter hinten und entspannter ⚠ | cut /ˈkʌt/ |
| ə | schwa (weak) | «e» am Ende von «bitte» | about /əˈbaʊt/ |
| ɑː | LOT | «a» in «Vater» | hot /ˈhɑːt/ |
| ɔː | THOUGHT | offenes «o» wie in «Sonne», aber lang | talk /ˈtɔːk/ |
| uː / ʊ | long u / short u | «u» in «Schule» / «u» in «Mutter» | food /ˈfuːd/, book /ˈbʊk/ |
| ɜːr / ər | NURSE / weak -er | wie «ö» in «Löffel», aber ohne runde Lippen, dann das englische r ⚠ | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| eɪ aɪ ɔɪ oʊ aʊ | diphthongs | zwei Laute, die ineinander gleiten: «ei» in «Eis» = aɪ, «eu» in «heute» = ɔɪ, «au» in «Haus» = aʊ; **day ist nicht «De», go ist nicht «Go»** ⚠ | day /ˈdeɪ/, go /ˈgoʊ/ |
| θ / ð | th | Zunge zwischen den Zähnen, ohne / mit Stimme; **weder «s» noch «z», weder «f» noch «d»** ⚠ | think /ˈθɪŋk/, this /ˈðɪs/ |
| w | | Lippen rund wie bei «u», dann öffnen; **nie das deutsche «w»** ⚠ | wine /ˈwaɪn/, we /wi/ |
| v | | **das deutsche «w»** in «Wein» ⚠ | vine /ˈvaɪn/, very /ˈveri/ |
| z / s | | z = stimmhaftes «s» wie in «Sonne» (**nicht** das deutsche «z» = ts); s = «ß» in «Fuß» ⚠ | zoo /ˈzuː/, sun /ˈsʌn/ |
| ʃ / ʒ | | «sch» in «Schule» / «g» in «Garage» | she /ʃi/, usually /ˈjuːʒuəli/ |
| tʃ / dʒ | | «tsch» in «Deutsch» / «dsch» in «Dschungel»; **das englische *j* ist dʒ** ⚠ | chair /ˈtʃer/, job /ˈdʒɑːb/ |
| j | | das deutsche «j» in «ja»; **das IPA-*j* ist das englische *y*** ⚠ | yes /ˈjes/ |
| ŋ | | «ng» in «singen», ohne g danach | sing /ˈsɪŋ/ |
| r | English r | Zunge nach hinten gebogen, berührt nichts; **kein Rachen-r**, und nach Vokalen immer hörbar ⚠ | red /ˈred/, car /ˈkɑːr/ |
| b d g z v am Wortende | voiced codas | **bleiben stimmhaft**, nicht zu p t k s f werden: bag ≠ back ⚠ | bag /ˈbæg/, back /ˈbæk/ |
| ˈ | stress | steht **vor** der betonten Silbe, die oft nicht die des deutschen Fremdworts ist ⚠ | university /ˌjuːnɪˈvɜːrsəti/, chemistry /ˈkemɪstri/ |

Under the table, the lesson body says three more things:
- «Achtung, Buchstaben-Falle: In der Lautschrift ist *z* ein weiches „s“ und *j* das englische *y*. Das deutsche „z“ wäre /ts/.»
- «Am Wortende sprichst du im Deutschen b, d, g wie p, t, k („Tag“ klingt wie „Tak“). Im Englischen nicht: *bag* und *back* sind zwei Wörter.»
- In American English a *t* between vowels sounds like a quick «d» (*water*, *city*). The aid does not write this; the audio does.

**Worked examples** (all pass the proposed `pronPattern` and the validator's differs-from-English test; 37 strings checked locally):

| Lesson / deck | English | `pron` | Source |
|---|---|---|---|
| Das Nötigste 1 | Excuse me. | /ɪkˈskjuːz mi/ | copied from zh-en |
| Das Nötigste 1 | Thank you. | /ˈθæŋk ju/ | copied from zh-en |
| it-there | It's raining. | /ɪts ˈreɪnɪŋ/ | copied from zh-en |
| questions | Does she live here? | /dəz ʃi ˈlɪv ˈhɪr/ | copied from zh-en |
| Sich vorstellen (new target) | I'm from Germany. | /aɪm frəm ˈdʒɜːrməni/ | new, frame of zh "I'm from China." |
| Sich vorstellen (new target) | I live in Berlin. | /aɪ ˈlɪv ɪn bərˈlɪn/ | new, frame of zh "I live in China." |
| Das Nötigste 1 (new target) | Do you speak German? | /də ju ˈspiːk ˈdʒɜːrmən/ | new, frame of zh "Do you speak Chinese?" |
| Komplimente (new target) | Your German is really good! | /jʊr ˈdʒɜːrmən ɪz ˈriːəli ˈgʊd/ | new, frame of zh |
| Aussprachefallen (new targets) | wine · vine | /ˈwaɪn/ · /ˈvaɪn/ | new |
| Aussprachefallen (new targets) | bag · back · bad · bed | /ˈbæg/ · /ˈbæk/ · /ˈbæd/ · /ˈbed/ | copied from zh-en |
| past | worked · played | /ˈwɜːrkt/ · /ˈpleɪd/ | copied from zh-en · new |
| Falsche Freunde (new targets) | become · chef · gift · handy | /bɪˈkʌm/ · /ˈʃef/ · /ˈgɪft/ · /ˈhændi/ | new |
| Falsche Freunde (new targets) | also · map · brave · sea | /ˈɔːlsoʊ/ · /ˈmæp/ · /ˈbreɪv/ · /ˈsiː/ | new |
| Falsche Freunde (new targets) | rent · meaning · art · fast | /ˈrent/ · /ˈmiːnɪŋ/ · /ˈɑːrt/ · /ˈfæst/ | new |
| Falsche Freunde (new targets) | bald · receipt · spend · will | /ˈbɔːld/ · /rɪˈsiːt/ · /ˈspend/ · /ˈwɪl/ | new (*will* alone: strong form) |
| Falsche Freunde (kept) | actually · eventually · college | /ˈæktʃuəli/ · /ɪˈventʃuəli/ · /ˈkɑːlɪdʒ/ | copied from pt-en / fr-en |
| pron (prose) | The apartment is very warm. | /ði əˈpɑːrtmənt ɪz ˈveri ˈwɔːrm/ | new |
| false-friends (prose) | Where do you live? | /ˈwer də ju ˈlɪv/ | new |
| false-friends (prose) | She wants to become a doctor. | /ʃi ˈwɑːnts tə bɪˈkʌm ə ˈdɑːktər/ | new |
| false-friends (prose) | My boss works a lot. | /maɪ ˈbɔːs ˈwɜːrks ə ˈlɑːt/ | new |
| false-friends (prose) | Can I get the check? | /kən aɪ ˈget ðə ˈtʃek/ | new |
| perfect-2 (prose) | two years ago | /ˈtuː ˈjɪrz əˈgoʊ/ | new |
| §9 places | Munich · Cologne | /ˈmjuːnɪk/ · /kəˈloʊn/ | new |
| Fremdwörter | comfortable · photograph · information | /ˈkʌmftərbl/ · /ˈfoʊtəgræf/ · /ˌɪnfərˈmeɪʃn/ | copied from zh-en |

The four es cards that needed a Spanish tag to differ from the target (`SHIP (i corta)` etc., es PRON-RULES §4) need no tag in IPA: `ship` /ˈʃɪp/, `think` /ˈθɪŋk/, `sink` /ˈsɪŋk/, `milk` /ˈmɪlk/.

## 7. Standing practice rule

**Rule: keep es.md §7 "verb core" unchanged** (Verbkern: Übereinstimmung + Hilfsverb + Pflicht-Subjekt). In every lesson's practice set, **at least half of the `order` and `type` items together must hinge on the verb core**. The verb core means:
- subject–verb agreement (-s / *is–are* / *has* / *does*);
- the auxiliary in questions and negatives (*do/does/did*, or inversion with any auxiliary);
- dummy *it* or *there* as subject (typed items).

The definitions of "hinging" for `order` and `type` are es.md §7's (as fr.md and it.md reproduce them; es.md §7 was not re-read here). The validator kind `verb-core` implements them heuristically (read from `validate.js`): an order item hinges when its `why` names the point **and** `x` holds an agreement twin of a tile (*is/are, was/were, has/have, do/does, did/does, don't/doesn't, am*), or an -s/-es twin of a tile (*work/works*), or `a` starts with an auxiliary or wh-word + auxiliary; a type item hinges when its `why` names the point **and** `a[0]` contains *has / does / doesn't / is / isn't / was / wasn't*, or *he/she/it* + an -s verb, or *do/does/did*, or starts with an auxiliary, a wh-word + auxiliary, or *it / there*. A noun subject + -s verb (*My sister works…*) does **not** count in a type item; write *She works…*.

**Why keep it rather than a tense–aspect rule:**
- OTHERS.md proposed a new kind `tense-aspect` (perfect versus past, progressive) for German. It is not implemented in `validate.js`, and tense is lesson-bound: a perfect-tense hinge in `plurals` or `polite` would be artificial. The tense evidence (§4.1, §4.2) is served by `perfect`, `perfect-2`, `continuous`, `past-continuous`, `narrative` and `tense` instead [inference].
- **The auxiliary leg is the German core** [research-backed + inference]. German forms questions and negatives by moving or negating the lexical verb (*Sprichst du Englisch? Ich spreche nicht Englisch*), so *Speak you English?* and *I speak not English* are the German errors, and do-support is the English answer. Rankin 2010 found residual non-target questions in advanced writing ("Did it anything…", "Shouldn't be there…", "Do times really have changed?"; 8 of 421), so the leg is live but small at the top end; it is presumably larger at A1–A2 [inference].
- **The agreement leg is moderate** [inference]. German marks person on every verb (*er arbeitet*), so the idea is familiar; the English problem is the one surviving -s, and *there is/are*: German *es gibt* is invariable, so *There is three trees* and the calque *It gives…* are German errors.
- **The «Subjekt» leg is weak for German** [inference], as for French. German always has a subject, including dummy *es* (*Es regnet* → *It's raining*), so *Is raining* is not a German error. Every `why` that hinged in es must still contain one of the keywords, or the item stops counting: for dummy-subject items, «Subjekt» stays true (English *it* and *there* are subjects exactly as German *es* is), and the `why` should explain the German trap (*es gibt* → *there is/are*, not *it gives*).
- **Parity cost decides it** [inference]. Every es-en order/type item was reworked to hinge on the verb core (es deviations.json). Keeping the rule means de translates the `why` lines and changes no English. A new rule would force English-side changes in about 37 lessons.

**Validator keywords** (`flags: "i"`):

```
Subjekt|Hilfsverb|(?:dritte[nr]?|3\.) Person|Übereinstimm|Kongruenz
```

- Use them like this:
  - «Subjekt» for dummy *it/there* and for inversion («das Hilfsverb steht vor dem Subjekt»);
  - «Hilfsverb» for *do/does/did* and inversion (matches «Hilfsverben», «Hilfsverbs»);
  - «3. Person» or «dritte Person» for -s, *does*, *has* (matches «dritten Person», «dritter Person»);
  - «Übereinstimmung» (or «stimmt … überein» written as «übereinstimmen») for *is/are*, *was/were*, *there is/are*. «Kongruenz» also matches; prefer the school word.
- Tested locally (Node, `new RegExp(keywords, "i")`): «Mit "she" bekommt das Verb ein -s: dritte Person Singular.», «He, she, it – das s muss mit: 3. Person Singular.», «In der Frage steht das Hilfsverb "can" vor dem Subjekt.», «Übereinstimmung von Subjekt und Verb: "is".» and «In der dritten Person: "does".» match; «„Bekommen“ heißt "get", nicht "become".», «Die Person am Telefon» and «Sie ist eine nette Person.» do not. `/Ü/i` matches «ü» in V8, so the case of «Übereinstimm» does not matter.
- Bare «Person» does **not** count (only «dritte/3. Person»), so everyday uses are safe. Do not use «Subjekt» or «Hilfsverb» in `why` lines of items that do not hinge.
- Sample `why` lines (plain strings, English in straight double quotes, German quotations in „ “):
  - «Mit "she" bekommt das Verb ein -s: dritte Person Singular.»
  - «Im simple present braucht die Frage das Hilfsverb "do/does".»
  - «In der Frage steht das Hilfsverb "can" vor dem Subjekt.»
  - «„Es gibt“ + Plural: "There are" – das Verb stimmt mit dem Subjekt überein. Nicht "It gives".»
  - «Wie im Deutschen braucht der Satz ein Subjekt: "It's raining" (es regnet).»
  - «Im simple past trägt nur das Hilfsverb "did" die Vergangenheit: "didn't go", nicht "didn't went".»

**Translating es `why` lines.** Map «sujeto» → «Subjekt», «auxiliar» → «Hilfsverb», «tercera persona» → «dritte Person (Singular)», «concordancia» → «Übereinstimmung (von Subjekt und Verb)». An item that hinged in es still hinges in de. Run `validate.js de` and compare the `[vc N]` counts with es's: they must be identical lesson by lesson, except in `pron` (5, as es) and `false-friends` (6, one more than es; §8).

**Count:** as es.md §7. A 14-item set has 6–8 order+type items, and at least 3 (for 6) or 4 (for 7–8) must hinge.

## 8. Curriculum deviations from the Spanish-speaker course

**Policy.**
- Keep all 41 es-en lesson ids, their order and their English side.
- Rewrite every explanation, prompt, `why` and hint from the German point of view (PILOT-SPEC §3). That is not a deviation.
- Change the English side only where a Spanish-specific item would mislead German speakers.

**Verdicts:**
- **keep**: the contrast is the same in German; translate and localise the es explanation.
- **adapt**: same English side, but the explanation and German prompts must say something different for German speakers.
- **change**: English side changes, which needs a deviation.

All verdicts are [inference] built on §4. German differs from Spanish on the points that drive many es items (German always has a subject, has no *gustar*-type *like*, follows the owner with *sein/ihr*, and says age with *sein*), so more lessons are "adapt" here than in it.md; but the English items still fit, because each tests a real English rule.

| # | Lesson id | Verdict | Note for German speakers |
|---|---|---|---|
| 1 | pron | change (lesson deviation) | Replace the Spanish traps (prothetic e, b/v) with German ones: /æ/ vs /e/ (*bad/bed*), final devoicing (*bag/back*), w/v and the overcorrection *wery*, th → s/z, English *j* = /dʒ/. Teach the IPA key (§6). Item map below. |
| 2 | be | adapt | *sein* → *be* is easy (one verb), and German says age with *sein* (*Ich bin 25*), so *I have 25 years* is **not** a German error. The German twists: *Ich habe Hunger / Durst / Angst* → *I'm hungry / thirsty / scared*; *Mir ist kalt* → *I'm cold* (never *Me is cold*); *Du hast recht* → *You're right*. The es items on obligatory subject (*It's late*) fit: German *Es ist spät* maps one to one. |
| 3 | it-there | adapt (not a core lesson for German) | German has dummy *es* (*Es regnet* → *It's raining*), so the subject is easy. Teach the two German traps: **«es gibt» is invariable, "there is/are" agrees** (*There are three trees*), and **«es gibt» is never "it gives"**. The es items with `x:["Has"]` (Spanish *hay*) stay for parity; their `why` names the subject or agreement, not a German error. |
| 4 | articles | adapt + technical deviation | *Sie ist Ärztin* → *She's a doctor* (German drops the article before jobs, like Spanish; all three checks fit). *a/an* by sound (*an hour*, *a university*). Check 0's option 3 «(nada)» is Spanish text read as English by parity: write «(nichts)» and record the technical deviation (below). |
| 5 | plurals | adapt | German plurals are irregular (*Kinder, Frauen, Autos*), so irregular English plurals are no surprise. Adjectives never take -s (German *rote Autos* inflects; English *red cars* does not). *people* is plural; *police* is plural in English (*Die Polizei ist…* → *The police are…*). *this/these* /ɪ/–/iː/. |
| 6 | present | adapt | Subject is never a problem. **Negation: *don't* + verb, never *not* after the verb** (*Ich esse kein Fleisch* → *I don't eat meat*, not *I eat not meat*); the es distractor *I no eat meat* (mc 1) is Spanish, not German: keep it, explain the rule. **Frequency adverbs before the verb** (*Ich trinke immer Tee* → *I always drink tea*; check 2 fits; Rankin's *I read often novels*). Present for future (*Ich rufe dich morgen an*) belongs in `will` and `going-to`. |
| 7 | questions | adapt (core for German) | German inverts the lexical verb (*Sprichst du Englisch?*), so the es distractor *Speak you English?* (mc 0) **is the German error**: say so. Teach: only auxiliaries go before the subject in English; every other verb needs *do/does*. Question words: **wer = who, wo = where, wie = how, was = what** (a German false-friend pair, §4.3). Short answers (*Yes, I do*) are a German school topic («Kurzantworten»). |
| 8 | third-s | keep | German marks person on every verb (*er arbeitet*), so agreement is familiar; the -s is the one ending English keeps. Use the school mnemonic «he, she, it – das s muss mit». |
| 9 | prep | adapt | *um 7 Uhr* → *at 7*; *am Montag* → *on Monday*; *im Mai* → *in May*; *in Berlin* → *in Berlin*. Verb complements in the body: *warten auf* → *wait for*, *abhängen von* → *depend on*, *auf dem Foto* → *in the photo*. Point to `perfect-2` for *seit* and to the body note on **bis = *until* (time span) or *by* (deadline)** (llexi). |
| 10 | countable | adapt | *Informationen, Ratschläge, Möbel, Hausaufgaben, Nachrichten, Haare, Fortschritte* are German plurals → English uncountables (*information, advice, furniture, homework, news, hair, progress*). |
| 11 | object-have | adapt | *sein/ihr* follow the owner as in English, so es mc 2 (*Ana loves her brother*) is easy: say that German works like English here. German object pronouns go after the verb in main clauses (*Ich liebe sie*) but before it in subordinate clauses (*weil ich sie liebe*), so the distractor *I her love* is a German subordinate-clause error. Add the s-Genitiv to the body: *das Auto meines Bruders* → *my brother's car*, and **the apostrophe** (*Peters Auto* → *Peter's car*) (§4.11), with no English-side change. |
| 12 | can-like | adapt | *mögen* is not reversed (*Ich mag Pizza* → *I like pizza*), so drop es's "Pizza likes me" emphasis from the body (the mc distractor stays; harmless). *gefallen* is reversed (*Das gefällt mir*): mention it once. German twists: *Ich kann Englisch* → *I can speak English* / *I speak English*, never *I can English*; *Ich möchte* → *I'd like*. |
| 13 | polite | keep + technical deviation | *du / ihr / Sie* → *you*. **«Kann ich… bekommen?» → *Can I get…?*, never *Can I become…?*** (§4.3): add it to the body. Check 2's options 0 and 1 are Spanish text that parity reads as English (below): «Grundform (open)», «to + Grundform (to open)». |
| 14 | continuous | adapt (core for German) | Standard German has no progressive: *Was machst du gerade?* → *What are you doing?*, not *What do you do?* Use German *gerade* as the bridge (*Ich esse gerade* → *I'm eating*). Progressive below 90% even at C2 (via OTHERS.md); underused in speech (Dose & Götz). Keep the stative distractors (*I'm knowing him*): German learners overcorrect once they have the form. |
| 15 | past | adapt | Spoken German uses the Perfekt for the past; the English **simple past** is the normal past tense, not a "written" tense like the Präteritum. *did* + Grundform: *I didn't go*, not *I didn't went*. **-ed is /t/, /d/ or /ɪd/ and the /d/ stays voiced** (*played* /ˈpleɪd/, not «plate»). Word order after time words: *Yesterday I went…*, never *Yesterday went I…* (§4.5). |
| 16 | irregular-past | keep | Many English irregular pasts have German cousins (*sing–sang–sung / singen–sang–gesungen*, *drink–drank–drunk*): a useful memory aid in the body. |
| 17 | the | adapt | Generic and abstract nouns without *the* (*Das Leben ist schön* → *Life is beautiful*; *Die Natur* → *nature*). Institutions: *in die Schule gehen* → *go to school*, *im Bett* → *in bed*. Countries: *die Schweiz, die Türkei* → *Switzerland, Turkey*, but *the United States*. |
| 18 | adjectives | adapt | Adjectives before the noun, as in German, but uninflected (*ein großes Haus / große Häuser* → *a big house / big houses*). **Comparative + *than*, never *as***: *größer als* → *bigger than* (§4.12); *so groß wie* → *as big as*. |
| 19 | going-to | adapt | German uses the present for plans (*Morgen fahre ich nach Berlin*). Teach *I'm going to…* / *I'm going to Berlin tomorrow* for decided plans. |
| 20 | tense | keep | Add «Signalwörter» as the review device (§4.1). |
| 21 | joining | adapt | **Subordinate clauses keep normal order**: *weil ich es vergessen habe* → *because I forgot it*, never *because I it forgot* (OTHERS.md). ***also* = *so*** (*Es regnete, also blieb ich zu Hause* → *so I stayed home*): the classic false friend (TEFL Academy, studyflix). *weil* → *because*, *wegen* → *because of*. |
| 22 | numbers | adapt + technical deviations | Decimal comma in Germany (*2,5* → *two point five*); thousands with a point (*10.000* → *10,000*). **German *eine Milliarde* = one billion; German *eine Billion* = one trillion** (Lernhelfer, studyflix: «Billion» → "trillion"), exactly the Spanish *billón* trap, so the es point and items fit. Numbers are said units first in German (*fünfundvierzig*), so hearing *forty-five* and writing *54* is a German slip: add a listening note [inference]. **«halb vier» = *three thirty***, and British *half four* means 4:30 (say so: a real trap) [inference]. Years: *nineteen ninety*, not «neunzehnhundertneunzig». Dates *der 3. Mai* → *May 3rd*. Checks 1 and 2 need technical deviations. Read *25 €* as *twenty-five euros* in the body; practice keeps dollars. |
| 23 | smalltalk | keep | Localise (§9). German small talk is shorter; say that *How are you?* is a greeting, not a question. |
| 24 | false-friends | change (lesson deviation) | Rebuild with German false friends; item map below. |
| 25 | past-continuous | adapt | German has no past progressive: the Präteritum/Perfekt covers *was doing* and *did*. Teach *was/were + -ing* for an action in progress and the simple past for the interrupting event (*Ich duschte gerade, als…* → *I was taking a shower when…*). |
| 26 | will | adapt (core for German) | **German *will* = *want*** (*Ich will einen Kaffee* → *I want a coffee*, never *I will a coffee*): the most damaging German false friend, put it first in the body. German *werden* + infinitive is the *will* future. Present for offers (*Ich helfe dir* → *I'll help you*) matches es's "I help you." distractor exactly. |
| 27 | perfect | adapt (core for German) | **Never «Perfekt»** (§3). The German error is over-use with finished time: *Ich habe ihn gestern gesehen* → *I saw him yesterday*, not *I have seen him yesterday* (llexi, TEFL Academy). Finished-time Signalwörter force the simple past; check 2 and mc 4 fit exactly. Auxiliary is always *have*: *Ich bin nach London gefahren* → *I've been to London* / *I went to London*, never *I am gone*. Accept US *Did you ever…?* |
| 28 | modals | adapt (core for German) | **«du musst nicht» = *you don't have to*; *you must not* = «du darfst nicht»** (Lernhelfer). The es checks (check 0's distractor *You must not come*, mc 1, type 12 with x *mustn't*) test exactly this: say that this distractor is *the* German error. |
| 29 | to-ing | keep | *Ich freue mich darauf, dich zu sehen* → *I'm looking forward to seeing you*; *Ich will, dass du kommst* → *I want you to come* (not *I want that you come*). The es items fit German exactly. |
| 30 | make-do | keep (carries over fully) | *machen* = make/do (and take/have), *sagen/erzählen* = say/tell, as *hacer/decir*. Add body lines for the German calques from the Cambridge error card and inference: *Erfahrungen machen* (→ *have experiences*), *einen Kurs machen* (→ *take/do a course*), *ein Foto machen* (→ *take a photo*), *eine Party machen* (→ *have a party*), *Urlaub machen* (→ *go on vacation*), *Spaß machen* (→ *be fun*). The English items are unchanged. |
| 31 | articles-2 | adapt | Generic plurals and abstract nouns without *the* (*Katzen sind süß* → *Cats are cute*; *Ich liebe die Musik* in the general sense → *I love music*): every es item fits. |
| 32 | first-conditional | adapt (core for German) | ***wenn* = *if* and *when*** (Lernhelfer): *Wenn ich nach Hause komme, rufe ich dich an* → *When I get home…* (certain) vs *If it rains…* (uncertain). No *will* after *if/when* (TEFL Academy: "when I'll see him"); mc 4 fits exactly. es P10 accepts both *If* and *When*: fine for German. |
| 33 | relative | adapt | *der/die/das* are used for people and things, so learners mix *who* and *which*: *who* for people, *which/that* for things. *alles, was* → *everything (that)*, never *everything what*. **No comma before a defining relative clause or before *that*** (German always has one) (TEFL Academy on punctuation). |
| 34 | phrasal | keep + technical deviation | German separable verbs are a real bridge: *aufstehen* → *get up*, *anrufen* → *call (up)*, *aufgeben* → *give up*, *ausmachen* → *turn off*. Check 1 is Spanish text (deviation). |
| 35 | perfect-2 | adapt (core for German) | ***seit*** → ***since / for*** with the present perfect: *Ich wohne hier seit 2010 / seit zehn Jahren* → *I've lived here since 2010 / for ten years*; never *I live here since…* or *since ten years* (llexi). ***vor*** → ***ago***: *vor zwei Jahren* → *two years ago*, with the simple past, never *before two years*. *Seit wann…?* / *Wie lange schon…?* → *How long have you…?* |
| 36 | narrative | keep | German speakers mix Perfekt and Präteritum freely; English narrative needs the simple past, with *had* + participle only for an earlier event. |
| 37 | conditionals | adapt | *Wenn ich du wäre* → *If I were you*. **Never *would* in the *if*-clause**: colloquial German *Wenn ich Zeit haben würde* gives *If I would have time* → *If I had time* [inference]. Cambridge error card: *if there are* → *if there were*. |
| 38 | passive | keep | *Hier wird Englisch gesprochen* / *Man spricht Englisch* → *English is spoken here*. *werden* is the passive auxiliary in German but *be* in English: *The house was built in 1990*, not *became built*. |
| 39 | reported | keep | say/tell recap: *Er hat mir gesagt* → *He told me*, not *He said me*. The German Konjunktiv I of reported speech has no English counterpart: backshift instead. |
| 40 | email | adapt | *Mit freundlichen Grüßen* ≈ *Best regards*; *Sehr geehrte Damen und Herren* ≈ *Dear Sir or Madam*; *Ich freue mich auf Ihre Antwort* → *I look forward to hearing from you* (not *to hear*). **No capitals on English nouns** (llexi: "Please send the Report to the Management Team"). The es distractor *I stay waiting your answer* is Spanish; explain the right English. |
| 41 | idioms | keep + technical deviation | German equivalents in prompts: «Das ist ein Kinderspiel» (*a piece of cake*), «auf Wolke sieben» (*on cloud nine*: seven, not nine), «ein Vermögen kosten» (*cost an arm and a leg*), «Wenn man vom Teufel spricht» (*speak of the devil*, same image), «Ich drücke dir die Daumen» (*keep my fingers crossed*: thumbs, not fingers), «Ich bin ganz Ohr» (*I'm all ears*), «Es liegt mir auf der Zunge» (*on the tip of my tongue*), «Das ist nicht mein Ding» (*not my cup of tea*), «Du nimmst mich auf den Arm» (*you're pulling my leg*), «wenn Schweine fliegen können» (*when pigs fly*) [all inference]. Check 1 needs a technical deviation (Spanish options). |

**`pron` lesson: English-side item map** (same item count and types as es; under `lessons.pron`). The three order items and three type items still satisfy verb-core: order 5 and 7 have an *is/are* twin in x, order 6 starts with *Is*, type 11 starts with *There*, type 12 starts with *It's*, and type 13 has none, which leaves 5 of 6, as in es.

| es item | Keep / replace | de item (English side) |
|---|---|---|
| check 0 sheep/ship | replace | q «Welches Wort bedeutet „schlecht“?» options `["bed","bad","bet","bat"]` (answer index 1, as es). German has /ɪ/ (*Mitte*), so *ship/sheep* is weak for German; /æ/ is the German gap |
| check 1 school (options Spanish text) | replace with a final-devoicing question | q «Wie spricht man "bag" richtig aus?» options «Wie „back“, mit k am Ende», «Wie „beg“, mit e», «In zwei Silben: „bä-ge“», «Mit stimmhaftem g am Ende und längerem Vokal: /ˈbæg/» (answer index 3, as es) |
| check 2 comfortable stress | keep the point, rewrite options | «Hinten, wie bei „komfortabel“», «Auf "for"», «Am Anfang: /ˈkʌmftərbl/», «Keine Silbe ist betont» (index 2) |
| P0 sheep | keep | `why`: German has both vowels (*Miete/Mitte*); the trap is the spelling *ee* = /iː/ |
| P1 very/berry | replace | «Welches Wort bedeutet „Tasche“?» o `["bag","back","beg","pack"]` (final devoicing; TRAP vs DRESS) |
| P2 shoes/choose | keep | `why`: «"sh" klingt wie „sch“, "ch" wie „tsch“» |
| P3 fool/full | keep | |
| P4 joke/yolk | keep | German reads *j* as /j/, so *joke* read the German way is *yolk*: the German trap exactly; rewrite the `why` («das englische "j" ist „dsch“ wie in „Dschungel“») |
| P5 My school is in Madrid | replace | p «Die Wohnung ist sehr warm» a `["The","apartment","is","very","warm"]` x `["are","wery"]` (*warm* and *very* are the w/v trap in both directions; hinge: *is/are*, `why` names «Subjekt» / «Übereinstimmung») |
| P6 Is the soup very hot (x berry) | change x only | x `["wery"]` (hinge: inversion, «Subjekt») |
| P7 We are from Spain (x is, Espain) | localise, change x | a `["We","are","from","Germany"]` x `["is"]` (*Germany* starts with /dʒ/) |
| P8 __udent | replace | q "__is is my sister." p «Das ist meine Schwester» a `["Th"]` o `["Z","D","S"]` (voiced th, not z or d) |
| P9 __ink (th) | keep | o s/t/f: *s* is the German substitution; rewrite the `why` («mit s wäre es "sink"») |
| P10 __ery (v/b) | keep | o `["b","f","w"]`: *w* is the German overcorrection (*wery*) and *f* the German reading of *v*; rewrite the `why` («"v" ist das deutsche „w“») |
| P11 three trees | keep | `why` names «Subjekt» or «Übereinstimmung»: «„Es gibt“ + Plural: "There are" – nicht "It gives"» |
| P12 It's very hot (x berry) | change x only | x `["wery"]`; hint «very · hot – "very" mit v, nicht w»; `why` «Wie im Deutschen braucht der Satz ein Subjekt: "It's very hot".» |
| P13 I think so / sink | keep | `why`: «Zunge zwischen die Zähne: weder s noch f» |

**`false-friends` lesson: rebuild** (under `lessons.false-friends`). Only *actually/aktuell*, *sensible/sensibel*, *eventually/eventuell* and *realize/realisieren* (partial) are shared Spanish–German false friends. Five of the 14 practice items and one of the three checks keep their English (check 1 and P8 only localise Madrid/Mexico). The items built on Spanish-only traps fail for German:
- *embarrassed/embarazada*, *pregnant*, *constipated*: no German look-alike.
- *library/librería* and *bookstore*: German *Bibliothek* and *Buchhandlung* are not traps.
- *attend/asistir* and *assist*: German *assistieren* = assist (true cognate); *attend* has no look-alike.
- *success/éxito*, *exit*, *carpet/carpeta*: no German look-alike.

The rebuilt items use the German pairs with the most source support (§9): *become/bekommen*, *Chef*, *Handy*, *also*, *wo/who*, *will*, *Mappe/map*, *sympathisch*.

| es item | Keep / replace | de item |
|---|---|---|
| check 0 embarrassed | replace | q «Wie sagt man „Ich bekomme morgen ein neues Handy“?» options `["I become a new handy tomorrow.","I'm getting a new phone tomorrow.","I become a new phone tomorrow.","I'm getting a new handy tomorrow."]` (index 1, as es) |
| check 1 Actually/Currently … Madrid | keep English, localise | "…, I live in Berlin." in all four options (index 2); q «Wie sagt man „Aktuell wohne ich in Berlin“?» |
| check 2 bookstore/library | replace | q «„Mein Chef ist sehr nett“ auf Englisch:» options `["My boss is very nice.","My chef is very nice.","My boss is very sympathetic.","My chief is very nice."]` (index 0, as es); `why` covers *Chef* and *sympathisch* |
| P0 actually (Spanish options) | keep, translate options | q «Was bedeutet "actually"?» o «eigentlich, tatsächlich», «aktuell», «aktiv», «manchmal» |
| P1 pregnant | replace | q «Wie sagt man „Kann ich die Rechnung bekommen?“?» o `["Can I get the check?","Can I become the check?","Can I become the bill?","Can I got the check?"]` |
| P2 attend class | replace | q «Was bedeutet "eventually"?» o «schließlich, irgendwann», «eventuell», «sofort», «hoffentlich» |
| P3 sensible | keep, translate options | q «Was bedeutet "He's very sensible"?» o «Er ist sehr vernünftig.», «Er ist sehr sensibel.», «Er ist sehr sentimental.», «Er ist sehr sympathisch.» |
| P4 success/exit | replace | q «Wie sagt man „Also, was machen wir jetzt?“?» o `["So, what do we do now?","Also, what do we do now?","Also, what we do now?","So, what we do now?"]` |
| P5 Where is the exit (x success) | replace | p «Wo wohnst du?» a `["Where","do","you","live"]` x `["Who"]` (wo/who; hinge: wh-word + *do*; `why` «„Wo“ ist "where", „wer“ ist "who". Vor dem Subjekt steht das Hilfsverb "do".») |
| P6 She works at the library (x work) | replace | p «Mein Chef arbeitet viel» a `["My","boss","works","a","lot"]` x `["chef","work"]` (hinge: agreement twin *work*; `why` «„Mein Chef“ = er: "works" mit -s, dritte Person. „Chef“ heißt "boss".») |
| P7 Did you realize | keep | p «Hast du es gemerkt?»; `why` notes that «etwas realisieren» often means "carry out" |
| P8 "__, I'm from Mexico." | localise | "__, I'm from Germany." p «Eigentlich komme ich aus Deutschland» (a `["Actually"]`, o as es) |
| P9 bookstore | replace | q "My __ is on the table." p «Mein Handy liegt auf dem Tisch» a `["phone","cell phone","cellphone","cell","mobile","mobile phone","smartphone"]` o `["handy","hand","handle"]` (British *mobile* accepted: German schools teach it, §2) |
| P10 carpet | replace | q "Put the papers in the blue __." p «Leg die Papiere in die blaue Mappe» a `["folder","file","binder"]` o `["map","card","mop"]` |
| P11 I'm embarrassed | replace | p «Sie bekommt viele Briefe» a `["She gets a lot of letters","She gets lots of letters","She gets many letters","She receives a lot of letters","She receives lots of letters","She receives many letters"]` hint «she · get · letters – nicht „become“» (*letters*, not *e-mails*: the engine does not strip hyphens, and *Brief/brief* is itself a false friend) x `["becomes"]` `why` «Mit "she" bekommt das Verb ein -s: dritte Person. „Bekommen“ heißt "get" oder "receive", nicht "become".» This item hinges (*she gets*), which es P11 did not, so the lesson's `[vc]` count is 6, one above es |
| P12 He didn't realize | keep | p «Er hat es nicht gemerkt» |
| P13 She attends class (x assists) | replace | p «Sie will Ärztin werden» a `["She wants to be a doctor","She wants to become a doctor"]` hint «want · doctor – „will“ ist nicht "will"» x `["will"]` `why` «Mit "she" bekommt "want" ein -s: dritte Person. „Sie will“ heißt "she wants"; "will" ist Zukunft („wird“).» |

Mc options are listed with the correct answer first (PRACTICE-SPEC: `o[0]` is always correct); check options keep es's answer index. Every hint above passes `cueTest` (checked: «nicht», „ ). The lesson body groups the false friends as in §9 and adds the partial ones: *realize* (German *realisieren* = "carry out", and colloquially also "realize"), *college* (German *Kollege* = colleague), *discuss* («diskutieren über» → *discuss* without *about*), *actual* (*aktuell* = current) [inference for *realize* and *discuss*]. The lesson keeps its deck link to deck 21, «Falsche Freunde».

**Mapping of the core pairs onto the rebuilt lesson:** *become/bekommen* (check 0, P1, P11), *Handy* (check 0, P9), *actually/aktuell* (check 1, P0, P8), *Chef* and *sympathisch* (check 2, P6), *eventually* (P2), *sensible* (P3), *also* (P4), *wo/who* (P5), *realize* (P7, P12), *Mappe/map* (P10), *will* (P13). The remaining pairs (*gift, brave, sea, rent, meaning, art, fast, bald, receipt, spend, college, Billion, Note, Personal*) go into the lesson body and the «Falsche Freunde» deck.

**No de-only lesson.** The brief allows one only if the evidence is strong.
- **Word order** (V2 after adverbials, adverb placement, verb-final subordinate clauses) is the obvious candidate: no es lesson owns it, and llexi and OTHERS.md list it. But the one corpus study found it **residual** in advanced writing: auxiliary and copula inversion only, 8 of 421 questions non-target, thematic-verb placement "consistently target-like" (Rankin 2010). No beginner data was found. It goes into the `present`, `questions`, `past` and `joining` bodies, with no English change.
- **will/want, wenn, must not, seit/vor** are German-specific and well attested in practitioner sources, but each is owned by an existing lesson (`will`, `first-conditional`, `modals`, `perfect-2`), whose es items already test the right English.
- **Possessive 's** has corpus support (via OTHERS.md) but no es lesson owns it and the source could not be reopened; it goes into the `object-have` body.
- **Final devoicing, w/v, th, /æ/**: well attested (Smith et al. 2009 as reported; TEFL Academy) but typed practice cannot test pronunciation; they belong in `pron`, the `pron` field and «Aussprachefallen».

**Technical item deviations (no real English change).** `parity.js` decides which reference check options are "native" with the **es** `cueTest` (flags `ui`). Six es-en checks have options in Spanish that es `cueTest` does not catch (no accent, no listed word), so parity compares them as English and a German translation fails. Re-found by script over all 39 non-exempt lessons' check options (the same six fr.md and it.md list; every other hit was English):

| Key | es options read as English | German |
|---|---|---|
| `articles#check0` | «(nada)» (option 3) | «(nichts)» |
| `polite#check2` | «Infinitivo sin to (open)», «to + infinitivo (to open)» (options 0–1) | «Grundform (open)», «to + Grundform (to open)» |
| `numbers#check1` | «En teen (al final)», «En thir (al principio)» | «Auf teen (am Ende)», «Auf thir (am Anfang)» |
| `numbers#check2` | «mil millones», «cien millones» | «eine Milliarde», «hundert Millionen» (and option 1 «eine Billion (tausend Milliarden)», which parity skips) |
| `phrasal#check1` | «Salir corriendo», «Quedarse sin algo, acabarse», «Llegar tarde» | «Hinausrennen», «Nichts mehr von etwas haben, ausgehen», «Zu spät kommen» |
| `idioms#check1` | «Hace mal tiempo.», «Estoy al aire libre.», «No me siento muy bien.» | «Das Wetter ist schlecht.», «Ich bin draußen.», «Ich fühle mich nicht so gut.» |

- **Spanish-origin English distractors that stay** (English, so compared and kept): `present` mc 1 *I no eat meat* (the German error is *I eat not meat*), `email` *I stay waiting your answer* (Spanish *quedo a la espera*), `can-like` *Pizza likes me* (Spanish *me gusta*; German *mögen* is not reversed), `it-there` x *Has* (Spanish *hay*; the German calque is *It gives*), and `idioms` mc 2 *You're taking my hair* (Spanish *tomar el pelo*; German says *Du nimmst mich auf den Arm*). Their `why` must explain the right English for German speakers, not translate the Spanish reasoning.
- fr.md's scan over every practice mc `o` in all 41 lessons found Spanish only in `pron` and `false-friends`, which are exempt anyway. Practice `a`, `x` and fill `q` are English throughout.
- Pipeline note, not for de agents: extending es `cueTest` with `|\b(nada|sin|al|en|mil|cien|millones|salir|llegar|quedarse|hace|estoy|siento|muy|infinitivo)\b` would remove these deviations for every es-based course (pt, fr, it, de). That is the es owner's call, because it also changes es cue injection.

**Paste-ready `tools/content/de/deviations.json`.** Deck keys are **0-based pack order** (the order of `DECKS` in the generated pack, as in §9), not DECKNAMES.md numbering. `false-friends` and `make-do` are in es-en already, so they must **not** be in `extraLessons`; parity would fail with "ko-en has it too". They are only in `profile.json` `lessonOrder.after`, which gen.js needs to place them.

```json
{
  "lessons": {
    "pron": "profile de.md §8 pron: German sound traps (bad/bed TRAP vs DRESS, final devoicing bag/back, w/v and the overcorrection wery, th as s/z, English j as dsch) replace the Spanish prothetic e and b/v items (checks 0-2, P1, P5, P6 x, P7, P8, P12 x)",
    "false-friends": "profile de.md §8 false-friends: Spanish-only traps (embarrassed, pregnant, library/bookstore, attend/assist, success/exit, carpet) replaced by German false friends (become/bekommen, Chef, Handy, also, wo/who, will, Mappe/map, sympathisch); Madrid/Mexico localised to Berlin/Germany (checks 0-2, P1, P2, P4, P5, P6, P8, P9, P10, P11, P13)"
  },
  "items": {
    "articles#check0": "technical: es-en option 3 «(nada)» is Spanish text not caught by es cueTest; German «(nichts)» (profile de.md §8)",
    "polite#check2": "technical: es-en options 0-1 are Spanish text not caught by es cueTest; German «Grundform» (profile de.md §8)",
    "numbers#check1": "technical: es-en options 2-3 are Spanish text not caught by es cueTest; German translation (profile de.md §8)",
    "numbers#check2": "technical: es-en options 0 and 2 are Spanish text not caught by es cueTest; German «eine Milliarde», «hundert Millionen», long scale (profile de.md §8)",
    "phrasal#check1": "technical: es-en options 0, 1, 3 are Spanish text not caught by es cueTest; German translation (profile de.md §8)",
    "idioms#check1": "technical: es-en options 0-2 are Spanish text not caught by es cueTest; German translation (profile de.md §8)"
  },
  "decks": {
    "1": "profile de.md §9: I'm from Mexico. -> I'm from Germany.; I live in Lima. -> I live in Berlin.",
    "2": "profile de.md §9: Do you speak Spanish? -> Do you speak German?",
    "11": "profile de.md §9: Your Spanish is really good! -> Your German is really good!",
    "17": "profile de.md §9: Spanish traps yet/jet, very/berry, vote/boat replaced in place by bad/bed, wine/vine, bag/back (TRAP vs DRESS, w/v, final devoicing)",
    "21": "profile de.md §9: Falsche Freunde rebuilt; embarrassed, pregnant, library, bookstore, attend, assist, career, exit, success, carpet, constipated, pretend, bother, parents, support, introduce replaced in place by become, chef, gift, handy, also, map, brave, sea, rent, meaning, art, fast, bald, receipt, spend, will"
  },
  "extraLessons": [],
  "droppedLessons": []
}
```

**Total English-side cost:**
- 2 lesson deviations;
- 6 technical item deviations;
- 5 deck deviations (2 + 1 + 1 + 6 + 16 = 26 card targets);
- no extra lesson.

**Four validator and parity traps for de writers**
1. **Cue words.** `validate.js` requires every mc `q` and type `hint` to match `labels.cueTest` (no flags, so the list spells out capitals). Shorthand items in `more/` get « Was gehört in die Lücke?» / « – benutze diese Wörter» appended automatically when they contain no German. A hint written out in full in `practice.js` must contain an umlaut or ß, „, or a listed word (*der, das, und, ist, ein, nicht, mit, ich, du, sie, wie, welche, bedeutet, heißt, Satz, Wort, Subjekt, Hilfsverb, dritte, Englisch…*). "pretend · vortäuschen" passes (ä); "attend · class" and "she · disappointed" fail; «attend · class – mit she», «Wörter: pretend · asleep» and «want · doctor – „will“ ist nicht "will"» pass (checked against the regex). **Words that are also English are deliberately not in the list**: *die, was, will, also, an, in, man, hat, bin, so, den, am, Rock, Art, Form, Person, Verb, Ende*. «Was bedeutet "x"?» passes only because of *bedeutet*.
2. **No umlauts, ß or „ in English strings.** cueTest treats ä ö ü ß Ä Ö Ü „ as German. An English mc `q` containing *Düsseldorf*, *Jürgen*, *Müller* or *Straße* would get no cue injected and would then pass as German. Write *Munich, Cologne, Nuremberg, Zurich*, avoid *Düsseldorf* in English strings, and use the umlaut-free names in §9. English strings use straight quotes only.
3. **Identical cognates.** With `nativeScript: null`, a card meaning or gloss spelled like its English target fails ("differs from English", case- and punctuation-insensitive; PIPELINE §3). German has many: *Hotel, Taxi, Name, Hand, Bus, Film, Team, Problem, Information, Restaurant, Sandwich, Ticket, Job, Baby, warm, September, November*, and among the false friends *Gift, Rock, Art, fast, bald, also, will* (spelled like the English target, meaning something else). Always write the article or a gloss: «das Hotel», «die Hand», «der Name», «Kunst» (for *art*), «schnell» (for *fast*). For the false-friend cards the meaning is the real meaning, so it differs anyway («das Geschenk» for *gift*).
4. **Accepted answers are compared.** Parity compares each type item's whole `a` list, `x` and mc `o` with es-en. A German prompt worded differently must still accept exactly the es variants: do not add or drop variants. If a variant is truly wrong for the German prompt, add an `items["<id>#<i>"]` deviation with the reason. German prompts always have a subject, so *er/sie* in the prompt fixes *he/she* in the answer; where es had a subject-less prompt that accepted several subjects, keep the German prompt equally open.

## 9. Vocabulary and cultural notes

**Localise everything in lesson bodies, `{{ex:}}` rows, card notes, dialogues and examples. In practice items and checks, change English only where §8 says.**

- Hispanic places in the English side stay: *Lima, Bogotá, Madrid, Mexico City, Monterrey, Peru, Chile*. German speakers know them, and changing them costs deviations. German prompts use German exonyms: «Er wohnt in Lima», «in Madrid», «in Mexiko-Stadt».
- *Sofía* in `object-have` P10 and *Bogotá* in `present` mc 2 stay as spelled; the fill `q` and mc `o` are compared. Their accents are harmless: í and á are not in the German cueTest, and practice `o`, `a` and fill `q` are not cue-tested.
- *Ana* (card targets, `object-have` mc 2) and *Mr. Garcia* (decks 13, 14) stay: *Ana* reads naturally to German speakers (alongside *Anna*), and *Garcia* is a neutral foreign surname [inference].

**Names** (lesson bodies, examples, dialogues, new targets): *Lukas, Leon, Finn, Paul, Jonas, Elias, Felix, Emma, Mia, Hannah, Lea, Lina, Marie, Clara, Sophie*, mixed with English names (*Emma, Jack*).
- **Never use a name with an umlaut or ß in an English string** (*Jürgen, Björn, Jörg, Müller, Schäfer, Groß*): cueTest would read the string as German (§8 trap 2). In German text they are fine.

**Places:** in English strings use English exonyms: *Munich, Cologne, Nuremberg, Hanover*, plus *Berlin, Hamburg, Frankfurt, Stuttgart, Leipzig, Dresden, Bremen, Heidelberg*. Teaching the exonyms is itself useful (*I live in Munich*, not *in München*). Avoid *Düsseldorf* and *Lübeck* in English strings (umlaut). In German text use *München, Köln, Nürnberg, Hannover*. Abroad: London, New York, Dublin, Edinburgh, Vienna, Zurich (no umlaut in English), Los Angeles. Do not centre Berlin.

**Food:** *pretzel, bratwurst, schnitzel, sauerkraut, apple strudel, coffee and cake, beer* (lower case, no umlaut, in English strings). Culture notes: a US *pretzel* is often the hard snack; *Brötchen* → *roll*; *Sekt* → *sparkling wine* (and *sect* is a false friend).

**Sports and media:**
- *soccer*, with the note «Britisch: *football*». *Bundesliga*, handball and Formula 1 are natural German topics.
- Genres, not artists (*a series, a podcast, a comic book*).

**Money:**
- Practice keeps US dollars, as es-en (US settings).
- In bodies and notes, *25 €* is read *twenty-five euros*; English writes *€25* or *25 euros*, symbol first.
- Tipping: about 10% by rounding up in Germany, 15–20% in the US (`smalltalk`, «Im Restaurant» notes) [inference].

**Exams and work:**
- Mention *das Abitur*, *Cambridge (B2 First, C1 Advanced)*, *TOEFL* and *IELTS*, and job interviews and meetings in English, by name in `smalltalk`, `email` and «Arbeit und E-Mails» notes where natural.
- Goals in meta.js: «Reisen», «Arbeit», «Freunde», «Serien und Filme».

**Neutral Germany vocabulary in meanings and notes:** see the table in §2. Prefer the word understood everywhere in Germany; give a register note when the common word is informal («(umgangssprachlich)»).

**False friends for the rebuilt deck and lesson** (grouped; 60+ pairs). "S" = in the fetched studyflix list (100 pairs); "L" = in the fetched Lernhelfer list (27 pairs); "T" = TEFL Academy; "X" = llexi; "inf." = not in any fetched list, from the author's knowledge, flagged for a native check.

| Group | English → real meaning | German look-alike → English | Source |
|---|---|---|---|
| Verbs | become → werden | bekommen → get, receive | S |
| | will → werden (Zukunft) | will (wollen) → want | S, L |
| | spend → ausgeben, verbringen | Spende, spendieren → donation, treat someone | S (*Spende*), L (*spendieren*) |
| | realize → merken, klar werden (partial) | realisieren → carry out (colloquially also "realize") | inf. |
| | blame → die Schuld geben | sich blamieren → embarrass oneself | L |
| | spare → verschonen, übrig haben | sparen → save | L |
| | overhear → zufällig mithören | überhören → not hear, ignore | S |
| | control → steuern | kontrollieren → check | S |
| | must not → nicht dürfen | nicht müssen → don't have to | L |
| | discuss → besprechen | diskutieren über → discuss (no *about*) | inf. |
| Adverbs and adjectives | actual → tatsächlich | aktuell → current | S, L, T, X |
| | actually → eigentlich, tatsächlich | aktuell → currently | inf. (from *actual*) |
| | eventually → schließlich, irgendwann | eventuell → possibly | S, X |
| | also → auch | also → so | S, T |
| | sensible → vernünftig | sensibel → sensitive | S, L |
| | handy → praktisch | Handy → cell phone | S, L |
| | brave → mutig | brav → well-behaved | S |
| | fast → schnell | fast → almost | S |
| | bald → kahl | bald → soon | S |
| | sympathetic → mitfühlend | sympathisch → nice | inf. |
| | personal → persönlich | Personal → staff | S, L |
| | decent → anständig | dezent → discreet | S |
| | engaged → verlobt | engagiert → committed | S |
| | familiar → vertraut | familiär → family-like | S |
| | gross → ekelhaft | groß(artig) → big, great | S |
| | massive → riesig | massiv → solid | S |
| | regal → königlich | Regal → shelf | S |
| | brief → kurz | Brief → letter | S |
| | consequent → daraus folgend | konsequent → consistent | inf. |
| People and places | chef → Koch, Köchin | Chef → boss | S, T, X (Lernhelfer pairs *Chef* with *chief*) |
| | college → Hochschule | Kollege → colleague | S |
| | gymnasium → Turnhalle | Gymnasium → academic high school | S |
| | sea → Meer | See → lake | T |
| | undertaker → Bestatter | Unternehmer → entrepreneur | S |
| | warehouse → Lagerhaus | Warenhaus → department store | S |
| | bureau → Amt | Büro → office | S |
| Everyday nouns | gift → Geschenk | Gift → poison | S, L |
| | rent → Miete | Rente → pension | S, L, T |
| | meaning → Bedeutung | Meinung → opinion | S, L |
| | map → Landkarte | Mappe → folder | S |
| | art → Kunst | Art → kind, type | S |
| | receipt → Kassenbon, Quittung | Rezept → recipe, prescription | S |
| | lecture → Vorlesung | Lektüre → reading | S |
| | note → Notiz | Note → grade | L |
| | billion → Milliarde | Billion → trillion | S, L |
| | rock → Felsen | Rock → skirt | S |
| | fabric → Stoff | Fabrik → factory | S |
| | caution → Vorsicht | Kaution → deposit | S |
| | lack → Mangel | Lack → varnish | S |
| | list → Liste | List → trick | S |
| | rat → Ratte | Rat → advice | S |
| | dose → Dosis | Dose → can | S |
| | stool → Hocker | Stuhl → chair | L |
| | tablet → Tablette | Tablett → tray | L |
| | technique → Methode | Technik → technology | L |
| | date → Verabredung, Datum | Termin → appointment | L |
| | promotion → Beförderung | Promotion → doctorate | S |
| | provision → Bereitstellung | Provision → commission | X |
| | concourse → Halle | Konkurs → bankruptcy | X |
| | preservative → Konservierungsstoff | Präservativ → condom | S |
| | wand → Zauberstab | Wand → wall | S |
| | mess → Chaos | Messe → trade fair | S |
| | chips (US) → Kartoffelchips | Chips → (US) chips, (UK) crisps | S |
| Question words | who → wer | wo → where | inf. |
| | where → wo | wer → who | inf. |
| | when → wenn (zeitlich), als | wenn → if (bedingend) | L |
| Pseudo-anglicisms | cell phone | das Handy | S, L |
| | tuxedo (US), dinner jacket (UK) | der Smoking | inf. |
| | projector | der Beamer | inf. |
| | vintage car, classic car | der Oldtimer | inf. |
| | public screening | das Public Viewing | inf. |
| | working from home | das Homeoffice | inf. (*home office* is a room or, in the UK, the interior ministry) |

**Deck-by-deck notes** (pack order, 0-based; this order is also the deviations key):

| index | Spanish deck | **Native name** | keep/change | notes |
|---|---|---|---|---|
| 0 | Saludos | **Begrüßung** | keep | *How are you?* is a greeting: «keine echte Frage». *Good night.* only for leaving. |
| 1 | Presentarse | **Sich vorstellen** | change 2 targets | *I'm from Mexico.* → *I'm from Germany.*; *I live in Lima.* → *I live in Berlin.* *My name is Ana.* stays. Notes: *I'm married.* «*married to*, nicht *with* (verheiratet mit)»; *I've been learning English for a year.* «nie "since one year" (seit einem Jahr)»; *I work at a bank.* «*Bank* ist auch die Sitzbank: im Englischen nur das Geldinstitut, die Sitzbank ist *bench*». No DIALOG/EXAMPLES key uses the changed targets (checked). |
| 2 | Supervivencia 1 | **Das Nötigste 1** | change 1 target | *Do you speak Spanish?* → *Do you speak German?* Rewrite the «LI-rel» note on *a little* as a description of the American *t*. *Can you help me?*: «*can* + Grundform, nie "Can you help me with?" ohne Objekt». |
| 3 | Supervivencia 2 | **Das Nötigste 2** | keep | *Can I take a picture?* «ein Foto *machen* = *take* a picture». |
| 4 | Direcciones y transporte | **Wege und Verkehrsmittel** | keep | *U-Bahn, S-Bahn, Bus* in notes; *subway* (US) / *underground, tube* (UK). |
| 5 | En el restaurante | **Im Restaurant** | keep | *Can we get the check, please?*: «die Rechnung = *check* (US) / *bill* (UK)»; never *Can we become…*. *Is the tip included?*: tipping note above. |
| 6 | Cafetería y tienda | **Café und Laden** | keep | *Can I get a receipt?*: «*receipt* = Kassenbon, nicht Rezept» (link to deck 21). |
| 7 | Compras y pagos | **Einkaufen und Bezahlen** | keep | *Is this on sale?*: «im Angebot, reduziert». |
| 8 | Números, horas y fechas | **Zahlen, Uhrzeit und Datum** | keep | *It's three thirty.*: «halb vier = 3:30. Britisch *half four* heißt 4:30!». *Two hundred and fifty*: «*and* ist britisch; US oft *two hundred fifty*». 12-hour clock in English. |
| 9 | Charla casual | **Smalltalk** | keep | *Have you been to Latin America?* stays: it is a generic travel question. *How long have you lived here?*: «present perfect, nicht "How long do you live here?" (wie lange wohnst du schon)». |
| 10 | Emociones y reacciones | **Gefühle und Reaktionen** | keep | *I'm so tired.* «müde»; *I'm upset.* «aufgebracht, gekränkt». |
| 11 | Cumplidos y afecto | **Komplimente und Zuneigung** | change 1 target | *Your Spanish is really good!* → *Your German is really good!* |
| 12 | Trabajo y correo | **Arbeit und E-Mails** | keep | *Best regards,* = «Mit freundlichen Grüßen / Viele Grüße». Note on **no capitals for English nouns** in e-mails (llexi). *I'm off tomorrow.* «frei haben». |
| 13 | Teléfono y abreviaturas | **Telefon und Abkürzungen** | keep | *Mr. Garcia* stays. |
| 14 | Viajes (aeropuerto y hotel) | **Reisen (Flughafen und Hotel)** | keep | *under Garcia* stays. *My flight was delayed.*: «Verspätung = *delay*». |
| 15 | Salud y emergencias | **Gesundheit und Notfälle** | keep | *Call 911!*: «in den USA 911, in Europa 112». *Do I need a prescription?*: «Rezept (Arzt) = *prescription*» (link to deck 21). *my embassy* stays. |
| 16 | Phrasal verbs | **Phrasal Verbs** | keep | Notes name the German separable verb where one matches (*aufstehen* = *get up*, *aufgeben* = *give up*, *ausmachen* = *turn off*, *herausfinden* = *find out*). |
| 17 | Trampas de pronunciación | **Aussprachefallen** | change 6 targets | In place: *yet, jet, very, berry, vote, boat* → *bad, bed, wine, vine, bag, back*. Keep *ship, sheep, shoes, choose, school, worked, think, sink, three, tree, this, walk, work, beach, leave, live, banana, hotel, milk, McDonald's*. Notes: *wine/vine* «*w* mit runden Lippen, *v* wie das deutsche „w“»; *bag/back* «stimmhaftes g am Ende, Vokal länger»; *bad/bed* «/æ/: Mund weit auf»; *think/sink* «Zunge zwischen die Zähne»; *walk/work* «stummes l; /ɜːr/». *school* keeps its EXAMPLES entry. Meanings must stay unique (*wine* «der Wein», *vine* «die Weinrebe», *bag* «die Tasche, die Tüte», *back* «der Rücken; zurück», *bad* «schlecht», *bed* «das Bett»). |
| 18 | Expresiones idiomáticas | **Redewendungen** | keep | German equivalents (§8 idioms). |
| 19 | Cine, series y jerga | **Filme, Serien und Slang** | keep | |
| 20 | Palabras esenciales | **Wichtige Wörter** | keep | Notes for German traps: *still* «noch (immer); das deutsche „still“ ist *quiet*»; *already / yet* «schon / noch nicht»; *though* «aber, trotzdem (am Satzende)»; *It takes 20 minutes.* «Es dauert 20 Minuten: *take*, nicht *last*»; *I'd love to.* «sehr gern». |
| 21 | Falsos amigos | **Falsche Freunde** | change 16 targets | Keep *actually, currently, realize, sensible, college, eventually, discuss*. Replace in place *embarrassed, pregnant, library, bookstore, attend, assist, career, exit, success, carpet, constipated, pretend, bother, parents, support, introduce* with *become, chef, gift, handy, also, map, brave, sea, rent, meaning, art, fast, bald, receipt, spend, will* (23 cards, as es). Why those 16 fail: nine have no German look-alike (*embarrassed, pregnant, constipated, exit, carpet, bother, support, pretend, parents*); *career/Karriere* and *assist/assistieren* are true cognates; *library, bookstore, success, attend* and *introduce* have no misleading German twin (*Bibliothek, Buchhandlung, Erfolg*) [inference]. Notes: *college* «der Kollege = *colleague*»; *become* «werden; bekommen = *get*»; *will* «Zukunft; ich will = *I want*»; *also* «auch; das deutsche „also“ = *so*»; *receipt* «Kassenbon; Rezept = *recipe* / *prescription*». Meanings must differ from the target: «Kunst» (*art*), «schnell» (*fast*), «kahl» (*bald*), «praktisch» (*handy*). |
| 22 | Make y do | **Make und do** | keep | *machen* covers both, so the whole deck is relevant. *make a decision* «eine Entscheidung *treffen*»; *make money* «Geld verdienen»; *do exercise* «Sport machen»; *do the grocery shopping* «einkaufen». |
| 23 | Incontables | **Unzählbare Nomen** | keep | Every target is a German plural trap: *advice* (Ratschläge), *information* (Informationen), *news* (Nachrichten), *furniture* (Möbel), *homework* (Hausaufgaben), *hair* (Haare), *progress* (Fortschritte). *luggage* (Gepäck) and *money* (Geld) are singular in German too: «wie im Deutschen». |
| 24 | Cognados y acento | **Fremdwörter und Betonung** | keep (all 14 targets work) | German has most as Fremdwörter (*Information, Konversation, Universität, exzellent, Fotografie, Pharmazie, Chemie, komfortabel, exakt, delikat*); *famous, probably, opportunity, different* still teach stress. Rewrite notes for the German trap: **German Fremdwörter stress the end** (*Universi-TÄT, Che-MIE, Informa-TION, exzel-LENT, komfor-TA-bel*), English often does not (*university* /ˌjuːnɪˈvɜːrsəti/, *chemistry* /ˈkemɪstri/, *excellent* /ˈeksələnt/, *comfortable* /ˈkʌmftərbl/). *ch* in *chemistry* is /k/, not «ch» as in *Chemie*. Write meanings that differ from the target: «die Information», «die Universität», «exzellent, ausgezeichnet». |

**Groups in meta.js:**
- «Erste Schritte»;
- «Reisen und Alltag»;
- «Gespräche und Beziehungen»;
- «Arbeit»;
- «Wie Muttersprachler»;
- «Wichtig für Deutschsprachige» (replaces «Claves para hispanohablantes»).

## 10. Interface wording notes

[Curriculum convention.] Verified against the Proton German localisation guide ([Proton](https://localize.proton.me/t/guidance-for-german/120)), which also prescribes *du*. No other style guide was read (§11).

**Buttons and actions:** infinitive. Proton: "To translate call-to-actions, use infinitive."
- Use: «Prüfen», «Weiter», «Starten», «Wiederholen», «Üben», «Speichern», «Senden», «Abbrechen», «Zurück», «Schließen», «Erneut versuchen».
- No final period on titles, links, buttons and checkboxes (Proton: "do not place any periods at the end of titles, links, buttons and checkboxes").

**Instructions in content and prompts:** *du* imperative (Proton's own examples use it: «Öffne die Navigation»): «Wähle die richtige Antwort», «Bring die Wörter in die richtige Reihenfolge», «Ergänze die Lücke», «Schreib den Satz auf Englisch», «Tippe, um zuzuhören».
- Keep one verb per item type. Imperatives without -e («Schreib», «Bring») are standard and shorter; be consistent.
- No «bitte» in instructions.
- «!» sparingly: "you should use them sparingly" and "please don’t change a period into an exclamation mark" (Proton).

**Gender-neutral wording** [Proton: "when possible, avoid the use of masculine singular form to refer to someone whose gender is not known"; "You can use passive language to avoid gender-specific verbs, but only if it doesn’t hurt readability"]:
- Address the learner with *du* and avoid nouns for the learner: «Gut gemacht!», «Lektion geschafft», «Alles bereit», not «Du bist ein echter Profi».
- No Genderstern, colon or underscore («Lehrer*innen»): they hurt readability in short UI strings and screen readers read them out [inference]. Use neutral forms («Lernende», «Team») or rephrase.
- Card meanings for gendered nouns give both forms: «Arzt / Ärztin», «Koch / Köchin».

**Capitalisation:** German rules: all nouns capitalised (Proton: "Capitalize all nouns incl. proper nouns"); otherwise sentence case in titles and buttons («Lektion starten», not «Lektion Starten»). *du/dein* lower case (Proton). Language names are nouns and capitalised («Englisch», «Deutsch»).

**Typography:** „…“ for quotations (Proton: "lower-upper alignment"); no space before `:` `;` `?` `!`; spaced en dash « – », never an em dash (Proton). Keys in ui.json are English and unaffected.

**Count patterns: ONE translation each, number-neutral** (PHASE2-BRIEF). [Checked locally with `Intl.PluralRules('de-DE')`, ICU 78.3 / CLDR 48: categories `one` (1 only) and `other` (0, 1.5, 2, 1,000,000).] German «1 Karte / 2 Karten» needs two forms, and the engine stores one string per pattern. So never put the count before an inflected noun. Put it **after a colon**, or next to an invariable unit or symbol.

| English pattern | German (one string, any number) | Note |
|---|---|---|
| `N cards due` | «Fällig: {1}» | |
| `N cards` | «Karten: {1}» | |
| `N lessons` | «Lektionen: {1}» | |
| `N days` | «Tage: {1}» | |
| `N-day streak` | «Tage in Folge: {1}» | «{1}-Tage-Serie» fails at 1 |
| `N words` | «Wörter: {1}» | |
| `N questions` / items | «Fragen: {1}» | |
| `N decks` | «Stapel: {1}» | *Stapel* is also the plural, but the colon form is used for consistency |
| `N reviews` | «Wiederholungen: {1}» | |
| `N XP` | «{1} XP» | invariable |
| `Level N` | «Stufe {1}» | |
| `N% correct` | «Richtig: {1} %» | space before % (Intl gives «85 %», U+00A0) |
| `N min` | «{1} Min.» | invariable abbreviation |

**Dates, numbers, time** [`Intl` with `de-DE`, checked locally]:
- **Numbers:** «1.234.567,5»: decimal comma, point as thousands separator (Proton: "Use a period for thousand separators"). **Years without separator** (Proton: "Never use thousand separators in years"): `Intl.NumberFormat('de-DE').format(2026)` gives «2.026», so format years as plain strings.
- Numbers below 1 keep the zero: «0,5» (Proton).
- **Currency:** «25,00 €» and «4,99 $» (U+00A0 before the symbol; Proton: symbol after the number, non-breaking space). Do not hand-format.
- **Percent:** «85 %» (U+00A0).
- **Dates:** short «17.11.26»; long «17. November 2026»; full «Dienstag, 17. November 2026»; day-month «17. Nov.»; weekday short «Di». Proton writes "dd/mm/yy", but German practice and Intl use points («17.11.26»); use Intl.
- **Time:** 24-hour, «21:05» (Intl). «21:05 Uhr» in prose.
- Use the device locale when it is `de-DE`. Fall back to `de-DE`, not `de-AT` or `de-CH` (Swiss numbers use apostrophes, Austrian month names differ: *Jänner*).

**Bottom navigation at 390px.** Each of the seven tabs gets about 55px, which fits roughly **8 characters** at 10–11px (es.md §10). German compounds are long (OTHERS.md: "Long compound nouns need `hyphens: auto` with `lang="de"`, or shorter wording"). «Wiederholung» (12), «Lektionen» (9) and «Fortschritt» (11) do not fit. (es-en itself ships «Lecciones», 9.)

| English | German label | Chars | Note |
|---|---|---|---|
| Today | Heute | 5 | |
| Practice | Üben | 4 | verb-noun, as the key's context asks ("quizzes and drills"); the page heading can say «Übungen» |
| Review | Abfrage | 7 | the flashcard review; «Vokabeln abfragen» is the German school phrase. The page heading can say «Wiederholung» (12). Alternative «Karten» (6) |
| Lessons | Lernen | 6 | «Lektionen» (9) is too long; the page heading says «Lektionen». Alternative «Kapitel» (7) |
| Drills | Training | 8 | the canvas heading and `{n}/{n} · Drills` chip may use «Training» too |
| Progress | Profil | 6 | the stats screen; «Fortschritt» (11) does not fit; page heading «Dein Fortschritt». Alternative «Statistik» (9, too long) |
| Feedback | Feedback | 8 | the normal German word; page title «Sag uns deine Meinung» |
| (Read, if shown) | Lesen | 5 | the key exists in keys.json |

The two longest, «Training» and «Feedback» (8 each), go to the lead's real-layout check.

**Language-name slots** (PHASE2-BRIEF: filled with the dictionary form). `Intl.DisplayNames('de-DE')` returns «Englisch», «Deutsch», «Englisch (Vereinigte Staaten)», «Deutsch (Deutschland)» (checked locally). The German dictionary form is a **capitalised noun**, so:
- it reads correctly **at the start** of a string («Englisch für Deutschsprachige») and **after a colon** («Sprache: {1}», «Kurs: {1}»);
- it also works after *auf* and *in* («auf Englisch», «in Deutsch»);
- never after a definite article or in the genitive («das {1}» would need «das Englische», «des {1}» would need «des Englischen»): reorder so the slot follows a colon.
- Set `name.de` to «Englisch». `nativeNameEn` is "German".

**UI glossary** (use exactly; matches §3):

| English | German | Note |
|---|---|---|
| lesson | Lektion | «Lektion 5» |
| practice (set) | Übung | button «Üben» |
| review (SRS) | Wiederholung | button «Wiederholen»; tab «Abfrage» |
| deck | Stapel | «Kartenstapel» on first use |
| card / flashcard | Karte | |
| streak | Serie | «Tage in Folge: 5» |
| hint | Tipp | |
| check (3-question quiz) | Mini-Quiz | button «Prüfen» |
| correct / incorrect | richtig / falsch | feedback «Richtig!» / «Nicht ganz». Avoid a bare «Falsch!», which reads as harsh |
| answer / explanation | Antwort / Erklärung | `why` shown under «Erklärung» |
| try again | erneut versuchen | |
| multiple choice | Multiple Choice | |
| word tiles | Wortkärtchen | |
| gap-fill | Lückentext | |
| typed sentence | Satz schreiben | |
| drills | Training | |
| level / XP | Stufe / XP | |
| pronunciation toggle | Lautschrift anzeigen (IPA) | replaces "romanization"; a settings row, not a button |
| progress | Fortschritt | tab «Profil» |
| feedback | Feedback | |
| settings / sign in / sync | Einstellungen / anmelden / synchronisieren | «Zum Synchronisieren anmelden» for `Sign in to sync` |
| quiz | Quiz | |
| level titles | Neuling · Lernfuchs · Plaudertasche · Reiseprofi · Insider · Ass · Legende | nouns whose grammatical gender does not mark the user's gender (es-en `TITLES`: Beginner, Student, Talker, Traveler, Local, Pro, Master). «Lernfuchs», «Plaudertasche» and «Insider» need a native check |

## 11. Gaps and unverified claims

**Sources that were blocked or unreadable** (none is listed in Sources):
- **Murakami & Alexopoulou 2016** (core.ac.uk PDF): not reopened here. Every claim from it is marked "via OTHERS.md".
- **Pronunciation Studio, German speakers' errors**: not on this session's allowlist.
- **Smith, Hayes-Harb, Bruss & Harker 2009** (*Journal of Phonetics* 37): not fetched; its figures come from Brown 2015's summary.
- **Swan & Smith, *Learner English*, German chapter:** never opened.
- **Cornelsen *English G Access*** and other Länder syllabuses: not opened; the Year-5 Lautschrift claim rests on one Klett syllabus for Bavaria.

**Read only in part:**
- Rankin 2010: introduction, ICLE description and the inversion results table (Table 8.1, interrogatives). The results on adverb placement and verb movement over negation were not reached; "consistently target-like" is the thesis's own summary. Learners are advanced university students; no beginner data.
- Rogatcheva 2012: abstract page only; no German figures.
- Dose & Götz: a pilot with no figures in the text.
- EF EPI 2025: the overall score is truncated in both fetches ("65"), so only rank and skill scores are reported; several regional and city values are truncated too. The 2026 edition is due on 18 November 2026 (it.md §5), the day after this profile.

**Quotations.** Text in straight quotes from Rankin, Dose & Götz, Rogatcheva, Brown, llexi, TEFL Academy, the Cambridge error card, Lernhelfer, studyflix, Klett, the IQB, MosaLingua and Proton is verbatim as returned by the fetch tool. Corrections of learner sentences are this profile's unless the source gave them. On the Cambridge error card the colour coding did not survive the fetch, so which word is the error and which the correction was inferred by the fetch tool from the card's explanations.

**Practitioner-only or no fetched source** for:
- present perfect with finished time and *since/for* (llexi, TEFL Academy only; no German error counts);
- *before two years* (*vor*), *I will a coffee*, *If I get home* for *when*, *Ich kann Englisch* → *I can English*: the author's inference from German grammar plus Lernhelfer's word list;
- prepositions other than *since/until* (*wait for, depend on, in the photo*), countability, articles, comparatives (*bigger as*), relative pronouns and commas, *If I would have*: all inference or practitioner;
- verb-final word order in subordinate clauses (OTHERS.md, no source fetched) and post-verbal *nicht*;
- every pronunciation item except w/v and th (TEFL Academy) and final devoicing (Smith et al. via Brown): /æ/, r, initial s, /dʒ/, diphthongs and Fremdwort stress are inference.

**Curriculum and culture claims not verified:**
- Duolingo's and Babbel's use of *du*, Anki's «Stapel» for deck, and German textbook terms «Possessivbegleiter», «will-future», «if-Sätze Typ 1–3», «3. Form» were not checked on a fetched page.
- Bilingual dictionaries printing IPA (Langenscheidt, PONS) were not fetched.
- No uptake figures for Cambridge, TOEFL, IELTS or TOEIC in Germany.
- Whether a placement test or test-out should let strong German learners skip A1 lessons is a product decision for the lead (§5); this profile keeps all 41 lessons for parity.

**Author's own knowledge of German, flagged for a native check:**
- German long scale (*Milliarde* = 10⁹, *Billion* = 10¹²) is confirmed by studyflix and Lernhelfer; *halb vier* vs British *half four* and the units-first number slip are inference.
- Which es false friends fail for German speakers, the partial cognates (*realize, discuss, college*), *sympathetic/sympathisch*, *who/wo*, and the pseudo-anglicisms except *Handy*.
- The Austrian/Swiss avoidance list (§2).
- The new minimal pairs (*bad/bed, bag/back, wine/vine*) and the distractors *wery* (P5, P6, P12) and *Who* (false-friends P5).
- The German reference sounds in the IPA key («Löffel» for /ɜː/, «Mann» for /ʌ/).
- The German idiom equivalents (§8 idioms).
- Deck names («Das Nötigste 1/2», «Café und Laden», «Wichtige Wörter»), tab labels «Abfrage», «Lernen», «Profil», and the level titles «Lernfuchs», «Plaudertasche», «Insider», «Ass».
- *du* as the right register for this audience (decision, §2; Proton and studyflix agree).

**Engine and pipeline points:**
- CLDR `one` covers only 1 in German; the number-neutral patterns (§10) sidestep it anyway.
- es `cueTest` gaps cause the six technical deviations (§8), the same six as fr and it.
- cueTest has no case flag in `_dsl.js` and `validate.js`, so the word list spells capitals explicitly. It was tested against 2,823 English strings of es-en (no English hit; the one hit is a Spanish prompt that the `false-friends` rebuild replaces), both cue labels and sample German prompts and hints.
- The standing-rule keywords contain `3\.` (written `3\\.` in JSON); `validate.js` compiles keywords with `new RegExp(keywords, flags)`.
- `Intl.NumberFormat('de-DE')` groups years («2.026»); format years as plain strings.

**Pronunciation aid:**
- No study compares IPA, respelling and no aid for German learners.
- The OALD notation is inherited from zh.md "as remembered" (OALD not fetched).
- If first-attempt logs or reviewers show learners ignore the IPA, the fallback is `pron: "optional"`. Do not switch to a respelling, for the reasons in §6.

## Sources

Web pages fetched and used:
- [Rankin, T. (2010). *Transfer and optionality: verb second and inversion in advanced L2 English*. PhD thesis, Universität Wien (core.ac.uk)](https://core.ac.uk/download/11589622.pdf)
- [Rogatcheva, S. (2012). Measuring learner (mis)use: Tense and aspect errors in the Bulgarian and German components of ICLE. In *Input, Process and Product* (abstract page)](https://www.ceeol.com/search/chapter-detail?id=837568)
- [Dose, S. & Götz, S. The progressive in spoken vs. written learner language (TaLC 10 paper, Justus Liebig University Giessen)](https://talc10.ils.uw.edu.pl/wp-content/uploads/sites/189/2011/09/DOSE1.pdf)
- [Brown, K. E. (2015). *The influence of explicit instruction on failure to acquire a phonological rule due to orthographic input*. University of Utah thesis (summarising Smith et al. 2009)](https://core.ac.uk/download/276266793.pdf)
- [llexi: Common English errors by German speakers](https://llexi.com/l1-errors/common-english-errors-german-speakers/)
- [TEFL Academy: Common problems for German learners of English](https://www.theteflacademy.com/blog/common-problems-for-german-learners-of-english)
- [Cambridge University Press: *English Grammar in Use*, German common-error card](https://www.cambridgeenglish.org/de/Images/655040-english-grammar-in-use-german-common-error-card.pdf)
- [studyflix: False Friends (Englisch)](https://studyflix.de/englisch/false-friends-3943)
- [studyflix: Simple Present](https://studyflix.de/englisch/simple-present-2823)
- [Lernhelfer Schülerlexikon: False Friends](https://www.lernhelfer.de/schuelerlexikon/englisch/artikel/false-friends)
- [Klett: Green Line 5 (Bayern), Synopse zum LehrplanPLUS](https://asset.klett.de/assets/c368e4dc/GLNBY_5_Syn_Bayern.366388.pdf)
- [IQB: Bildungsstandards Englisch, Sekundarstufe II (quoting KMK 2014)](https://www.iqb.hu-berlin.de/bista/bista/UnterrichtSekII/englisch/Bildungsstandard.pdf)
- [EF EPI 2025 fact sheet: Germany (English)](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-germany-english.pdf) and [German version](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-germany-german.pdf)
- [MosaLingua DE: EF English Proficiency Index 2025](https://www.mosalingua.com/de/ef-english-proficiency-index-2025/)
- [IamExpat: How good is Germany's English in 2025?](https://www.iamexpat.de/expat-info/germany-news/how-good-germanys-english-2025)
- [Proton localization community: Guidance for German](https://localize.proton.me/t/guidance-for-german/120)

Local project files read:
- `/home/claude/docs/profiles/pt.profile.json`, `fr.md` (in full), `fr.profile.json`, `it.md` (§1–§9), `it.profile.json`, `OTHERS.md` (German section and conventions). **Not read in full this session:** `pt.md` and `es.md` (headings only; their §7–§10 rules were taken as fr.md and it.md reproduce them), `PILOT-SPEC.md`, `reports/Grammar learning order research.md` and `tools/content/es/deviations.json` (its reasons were taken from fr.md and it.md);
- `/home/claude/docs/PIPELINE.md` (§3), `PRACTICE-SPEC.md`, `PHASE2-BRIEF.md` (rules and the 2026-11-17 section);
- `/home/claude/tools/content/es/` (`profile.json`, `DECKNAMES.md`), `tools/content/fr/profile.json`, `tools/content/pt/deviations.json`, `tools/content/zh/PRON-RULES.md`, `tools/content/setup_es_based.py`, the `verb-core` entry and practice normaliser in `tools/content/validate.js`, the cueTest lines of `parity.js` and `more/_dsl.js`;
- `tools/i18n/keys.json` and the es, fr, pt `ui.json` tab labels.

Local checks run:
- the generated `packs/course-es-en.js` scanned: lesson order, deck order and sizes, the `pron`, `false-friends`, `it-there`, `questions`, `modals` and `first-conditional` checks and practice items, every check option read as English by es `cueTest` (giving the six technical deviations), DIALOG/EXAMPLES keys of the replaced targets (none);
- IPA reuse counts against zh-en, pt-en and fr-en (458/480 cards, 317/340 example rows);
- `pronPattern` against 37 worked examples;
- `cueTest` against 2,823 English strings of es-en and sample German prompts, hints and both cue labels;
- the standing-rule keywords against sample `why` lines;
- `Intl` de-DE plural, date, number, currency and language-name output (Node, ICU 78.3 / CLDR 48).
