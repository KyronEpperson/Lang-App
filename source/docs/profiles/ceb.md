# Cebuano (Bisaya) speakers learning English — course profile

Course `ceb-en`. Audience: adults and older teenagers whose first language is Cebuano (Bisaya), in the Visayas and Mindanao or abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface are in Cebuano as written in Cebu City; answers and examples are in English. Machine-readable twin: `docs/profiles/ceb.profile.json`.

**Evidence labels** (as in `docs/profiles/id.md`):
- **[research-backed]** = a study or corpus opened for this profile, named, with its sample. **(Cebuano L1)** means the learners are Cebuano speakers; **(Visayan L1)**, **(Philippine L1)** or **(Tagalog L1)** means they are not, or the paper does not say. "Abstract only" says so.
- **[curriculum convention]** = what schools, spelling guides, dictionaries, test bodies or reference pages do.
- **[practitioner opinion]** = a teacher's, journalist's or site's stated view with no data, or this profile's own inference (said so where it is mine).

**Two warnings that apply to the whole file.**
1. **Research on Cebuano speakers' English is thin.** Six studies of Cebuano- or Visayan-speaking learners were opened; all are small, single-school and descriptive; two do not state the learners' first language (they are placed by region), and one is on Hiligaynon speakers. Everything else is Philippine-English description (mostly Tagalog-based, Metro Manila) or contrastive reasoning. Each is labelled.
2. **No Cebuano sentence in this file has been checked by a native speaker.** Its author is not one, and the app's first Cebuano profile measured its author's Cebuano as weak (`docs/profiles/en-ceb.md` §6, §11). Every Cebuano example, gloss, term and deck name below is [practitioner opinion, inference] until the Bisaya-speaking reviewer has read it (§11 lists what to check first).

Not read: `reports/Grammar learning order research.md` does not exist in this worktree, and `docs/profiles/OTHERS.md` has no Cebuano section (§11).

## 1. Summary (10 lines max)

- Teach **American English** (`en-US`, the same English strings as `ko-en`). Explanations address the learner as ***ka / ikaw*** in friendly, plain Cebu City Cebuano, spelled by the app's existing house rules (KWF 2022: *u* early and *o* last, *og* marker / *ug* "and", *mo-* / *ni-*, *kon*, no apostrophes or accents, full forms with *l*). Grammar terms are the **English school terms** (*article, plural, verb, past tense*), as in `ceb-ko`.
- **These learners are false beginners.** English is a school language from the first grades; EF EPI puts the Philippines at 565 against a world average of 485, with **speaking the weakest skill (517)** and Cebu City at 582. The course is an accuracy and pronunciation course more than a first course.
- **Top documented errors** (small Cebuano / Visayan samples): past tense not marked (58% of inflection errors, Abansa et al. 2026), subject–verb agreement (the top grammar error of 317 Bukidnon freshmen, Nueva 2016), prepositions (one *sa* for in / on / at / to), articles in **both** directions (missing *a*; extra *the* copied from *ang*), plural -s on the wrong nouns, missing *be* and *it*, and *siya* → he / she.
- **Standing rule: `article-plural`, as in ko**, keywords `\barticle|\bplural` (flag `i`): the terms stay English inside Cebuano sentences. No deviations needed.
- **Pronunciation aid: IPA, required, written exactly as the Chinese course writes it** (same `pronPattern`), so most transcriptions can be copied. A Cebuano-letter respelling would have three vowel values and would write the very mergers the course must undo (*ship / sheep, bad / bed / bud*).
- **Sounds:** /z/ → s, /ð/ → d, /ɪ/ → i or e, /æ/ and /ʌ/ → a, schwa → full vowel, shifted stress (35 English majors in Argao, Cebu: Momongan et al. 2023). F / P and V / B merging belongs to less schooled speech and was not seen in that group.
- **Curriculum:** all 39 Korean-course ids kept in order (12 keep, 27 reweight, no English changes); add 2: `pinoy-english` (after `smalltalk`) and `aspect-tense` (after `perfect`). One extra deck, «Mga lit-ag para sa Bisaya» (22nd, after the alphabet deck).
- Latin script, `nativeScript: null`: meanings must differ from the English (many loans are identical), and `labels.cueTest` (a Cebuano word list, 0 hits on 2,752 ko-en strings) makes Cebuano compulsory in mc questions and type hints.
- **Interface:** `tools/i18n/ceb/ui.json` already exists and already translates the English-course keys; §10 follows it and lists 9 changes (two labels over 8 characters, Korean-only notes).

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision]:
1. `ko-en` uses `ttsLang: "en-US"` and PILOT-SPEC §1.6 freezes the shared English strings.
2. Philippine English follows American spelling and grammar (*color, center, realize, program*) and is rhotic [curriculum convention: [Wikipedia, *Philippine English*](https://en.wikipedia.org/wiki/Philippine_English)]. The learner's school English is already American-based, so nothing has to be unlearned.
3. British forms appear only as a card `note`, never as an accepted answer.

**Philippine English: what the course accepts, what it flags, what it corrects.** Philippine English is a nativized variety, not a set of mistakes; Gonzalez's position, quoted in [De Castro 2020](https://ajels.ust.edu.ph/wp-content/uploads/2022/07/9-Same-verb-different-particle-phrasal-verbs-in-Philippine-English.pdf), is that errors become features "when educated elites in society commit them" [practitioner opinion]. The course teaches the American form as the answer, and uses three tones:

| Class | Tone in notes and `why` | Items | Source |
|---|---|---|---|
| **Accepted as it is** (never called wrong) | none | American spelling; rhotic *r*; *Sir / Ma'am* as address in Philippine settings; reading prices without "and" (*two hundred fifty*); month–day dates; local words with no English equivalent (*jeepney, barangay, pasalubong, lechon*) | Wikipedia, *Philippine English* [curriculum convention] |
| **"Sakto sa Pilipinas, pero sa gawas lahi ang gigamit"** (understood at home, not abroad): teach the international word, no blame | card `note` «Iningles sa Pinas» | *comfort room / CR* → restroom, bathroom; *open / close the light* → turn on / off; *brownout* → power outage, blackout; *ref* → fridge; *aircon* → air conditioner, AC; *rubber shoes* → sneakers; *course* → degree, major; *batchmate* → classmate, someone in my year; *traffic* as adjective (*It's so traffic*) → the traffic is heavy; *commute* (= take public transport); *load* → prepaid credit; *salvage* (= kill) → rescue, save; *high blood* (= furious); *for a while* (phone) → one moment, please; *dialect* for a Philippine language → language | [Wikipedia, *Philippine English vocabulary*](https://en.wikipedia.org/wiki/Philippine_English_vocabulary); [TalkDrill 2026](https://www.talkdrill.com/blog/exams/philippines-civil-service-exam/english-traps-for-bisaya-and-ilocano-speakers/) [practitioner opinion] |
| **Corrected** (not an accepted answer; the `why` explains the rule) | ✗ → ✓ | tense, agreement, article, plural and he / she errors (§4.1–4.7); *furnitures, equipments, informations, advices*; verb + preposition pairs *based from* → based on, *result to* → result in, *cope up with* → cope with, *fill up a form* → fill out / fill in, *discuss about* → discuss, *comply to* → comply with; *Can you borrow me…* → lend | TalkDrill 2026; *based from*, *fill up / fill out* attested in the ICE-PHI and GloWbE corpora by De Castro 2020, who calls the particle swap "an emerging feature" of Philippine English [research-backed, corpus; the judgement that the course should still correct them is mine] |

- **Pronunciation target:** clear, internationally intelligible speech on the en-US model. Th-stopping, /z/ → s and full vowels for schwa are described as general Philippine English features (Wikipedia, after Tayao), so the app calls the target form "mas klaro" (clearer), never "sayop" for the accent. The app does not score speech.

**Cebuano variety and the missing fixed spelling.** Cebuano has had an official spelling guide only since 2022 (KWF, based on the Carcar–Dalaguete dialect), and publications still follow their own rules [curriculum convention: [Wikipedia, *Cebuano language*](https://en.wikipedia.org/wiki/Cebuano_language)]. The course does not invent a spelling: it **reuses the house spelling already fixed for the app** in `docs/profiles/en-ceb.md` §2.2 and `docs/profiles/ceb-ko.md` §3.1 (sources opened there, not re-opened here), which `tools/i18n/ceb/ui.json` also follows:

| Question | House spelling (one form only) | Never written |
|---|---|---|
| **u / o** | *u* in first and middle syllables, *o* in the last syllable of native words: *buntag, kumusta, tubig, dako, sakto, pulong* | *bontag, dakû, komosta* |
| **i / e** | *i* in native words (except *babaye, pangadye, dayeg, sikwate*); *e* stays in loans: *kape, Lunes, leksyon, pero* | *dile, babayi* |
| **affixed words** | keep the root's vowels: *kahulogan, panumdoman, himoon* | *kahulugan* (the form `ui.json` avoids) |
| **l-dropping** (Cebu City says *wa, bay, di*) | the full form with *l*: *wala, balay, dili, sulod, kalsada*. Short forms never appear in explanations, prompts or interface | *wa, bay, di, suod* (for *sulod*) |
| **prefixes** | *mo-* (future), *ni-* (past), *nag- / mag-*, *gi-* | *mu-, mi-* |
| **og / ug** | *og* = object marker ("a / some"), *ug* = "and" | *ug* as the marker |
| **"if"** | *kon* | *kung* (also Tagalog) |
| **short forms** | joined, no apostrophe: *unsay, naay, walay, koy*; no accent marks | *unsa'y, walâ* |
| **particles** | *gyud, sab, lang, ra, na, pa, man, ba* | *jud, gyod, pod* (notes only) |
| **loans** | Cebuano spelling where one is established (*kape, trabaho, eskuwelahan, numero, ospital*); app and school terms stay English (§3, §10) | respelled English terms (*plural* stays *plural*, never *plyural*) |

- Reasons [practitioner opinion]: (1) one spelling per word lets the validator's duplicate and "differs from English" checks work; (2) the interface pack and the `ceb-ko` course already use it, and a learner can hold both courses; (3) it is the form nearest to print (KWF, *Bisaya* magazine, *Superbalita*, per `en-ceb.md`).
- **Not** used: literary "deep" Bisaya, Davao Tagalog-mixed speech, street slang, and Tagalog (*hindi, po, kung, ng*).

**Form of address and politeness: *ka / ikaw / nimo / imong*, never *po*, no *kamo* for one person.**
- [practitioner opinion] Cebuano shows respect with titles and tone, not with a pronoun or a particle; *ikaw / ka* is used with everyone (`en-ceb.md` §2.5, `ceb-ko.md` §4.8, quoting a 2026 SunStar Cebu column that calls *po* "the marker of respect. In Tagalog. Not Cebuano"; not re-opened here).
- [curriculum convention] The existing Cebuano interface already addresses the user as *ka / nimo / imong* (`tools/i18n/ceb/NOTES.md` §1).
- Commands use the plain command form, as the interface does: *Pilia, Isulat, Paminawa, Tan-awa, Hinumdomi*. Soften with *lang* or *palihug* only in longer instructions.
- When a pattern is explained, use inclusive ***ta / kita*** ("we"): «Sa Iningles, mogamit ta og "a" sa dili pa ang noun.» Use *ka* for what the learner does: «Kon gusto kang moingon nga…».
- The app never calls itself *ako* or *kami* in buttons.

**Register for explanations:** everyday educated Cebuano, short sentences, the tone of a good teacher in Cebu who explains English in Bisaya so that nobody is embarrassed to ask.
- **Code-switching is limited to the glossary terms (§3) and the interface names (§10).** Real Cebu speech mixes far more English (*Na-late ko sa meeting*: [SunStar Cebu 2026](https://www.sunstar.com.ph/cebu/bisaya-or-english-words-cebuanos-use-without-even-thinking)), but the learner must be able to tell a term from an example, and English examples must stand out.
- No English discourse words in the Cebuano text (*so, then, actually, basically*). Use *mao nga, unya, sa tinuod*.
- Mark errors with ✗ and corrections with ✓: `She go to school. ✗ → She goes to school. ✓`.

**Translations of example sentences (binding for writers):**
- *I* = *ko / ako*, *you* = *ka / ikaw*, *we* = *mi* or *ta* by context, *they* = *sila*. No *po*, no added titles.
- **He and she both translate as *siya*.** Whenever the English answer depends on the gender, the Cebuano prompt must show it: a name (*Si Ana…*), a noun (*ang akong igsoong lalaki*) or a cue in brackets, **«siya (babaye)» / «siya (lalaki)»**. A bare *siya* prompt with a gendered answer is a defect (PHASE2-BRIEF: prompts must lead to an accepted answer).
- **Cebuano verbs show aspect, not tense** (§4.1). A prompt whose answer needs one English tense must carry a time word (*gahapon, karon, ugma, kada adlaw, sukad 2022*) or an unambiguous form (*ni-* past, *mo-* future, *nag-* + *karon*).
- **Articles and number:** *usa ka* signals *a*; *mga* signals a plural. A bare noun after *ang* may be *the* or generic; add a cue if only one English answer is accepted.
- Service and office contexts keep *Sir / Ma'am* only where the English has *sir / ma'am*.

Three sample sentences in the voice (all need the native check):
- «Sa Bisaya, usa ra ang "siya". Sa Iningles, "he" kon lalaki ug "she" kon babaye.»
- «Ang verb sa Bisaya dili mausab bisan kinsa ang subject. Sa Iningles, kon "he", "she" o "it" ang subject, dugangi og -s ang verb: "She works here."»
- «Ayaw kabalaka. Tulo ra ka lagda ang kinahanglan nimong hinumdoman.»

**Mixing English into Cebuano text:**
- **Lesson HTML bodies:** English words and sentences in `<b>` (as ko-en does). `<em>` only for a Cebuano word being discussed («ang pulong nga <em>siya</em>»).
- **Plain-text fields** (`why`, `hint`, `p`, `q`, card `note`): English inside straight double quotes («Kon "she", dugangi og -s ang verb.»). An English sentence that is the whole object of a `q` stands bare: `Hain ang sayop? I have two book.`
- **Glossary terms are bare English nouns with Cebuano markers** (*ang verb, sa plural, og article, mga noun*). **Never attach Cebuano affixes to a term or an example** (no «gi-plural», «nag-past tense», «i-add ang -s»). The interface verbs already fixed in `ui.json` (*i-type, i-tap, i-save, I-check*) are the only affixed English.
- Alternatives are separated by ` / ` (spaced), as in ko-en. Standard Latin punctuation, no space before ? ! : ;.

## 3. Glossary

**Convention found.**
- [curriculum convention] English has been a medium of instruction in the Philippines since 1901, and since RA 12027 (2024) Filipino and English are the media from Kindergarten, with regional languages as auxiliary (via `ceb-ko.md` §2.3; the source page returned 403 when re-opened for this profile). Grammar is therefore learned **in English**, with English terms.
- [research-backed, as usage evidence only] Philippine studies of learner writing name their categories with the school terms: *subject-verb agreement, verb tense, linking verb, helping verb, article, preposition, pronoun, plural* ([Padilla & Padilla 2021](https://ijsses.tiu.edu.iq/index.php/ijsses/article/download/232/220/426); [Nueva 2016](https://js.cmu.edu.ph/dev/uploads/Students_Writing_Needs_Basis_for_Language.pdf); [Manto & Hermosilla 2025](https://vjol.info.vn/DHMHCM-KHXH/article/download/136561/111679/)).
- [curriculum convention] The app's Cebuano house rule already says: prose in Cebuano, grammar terms in English from a closed list, no Tagalog terms (*pangngalan, pandiwa*) and no invented Cebuano ones (`ceb-ko.md` §2.3, `tools/i18n/ceb/NOTES.md` §1).
- No Cebuano-medium English textbook could be opened, so how a Cebu teacher words these terms in Bisaya in class is [practitioner opinion] (§11).

**Rule: one term per concept, the English school term, written in English spelling, lower-case, exactly as below.** The standing-rule regex depends on **article** and **plural** (§7). A short Cebuano gloss may follow the term once per lesson, in brackets.

| Concept | Term to use (exactly) | Cebuano gloss at first use (once per lesson at most) | Do not use |
|---|---|---|---|
| article | **article** | gamay nga pulong sa atubangan sa noun: "a", "an", "the" | artikulo, pantukoy |
| a / an; the; none | article "a / an"; article "the"; walay article | | indefinite / definite article in `why` lines |
| noun | noun | ngalan sa tawo, butang o lugar | pangngalan, nombre |
| countable / uncountable noun | countable noun / uncountable noun | maihap / dili maihap | count noun, mass noun |
| singular | singular | usa ra | |
| plural / plural -s | **plural** / plural -s | sobra sa usa | pangdaghan; "mga form" |
| pronoun | pronoun | pulong nga ipuli sa noun: "he", "she", "it" | panghalip |
| subject / object pronoun | subject pronoun / object pronoun | | |
| possessive (my, his; 's) | possessive | nagpakita kon kinsay tag-iya | |
| subject / object | subject / object | kinsa ang nagbuhat / ang gibuhatan | |
| verb | verb | pulong sa lihok o kahimtang | pandiwa, berbo |
| be (am, is, are, was, were) | **be verb** | "am", "is", "are" | "to be"; "linking verb" (allowed once: «sa eskuwelahan: linking verb») |
| auxiliary (do, does, did, have, will) | helping verb | verb nga motabang sa laing verb | auxiliary |
| modal | modal | "can", "must", "should" | |
| base form / past form / past participle | base form / past form / past participle | "go" / "went" / "gone" | V1 / V2 / V3 (an Indonesian habit, not a Philippine one) |
| third-person -s | -s sa verb (kon "he", "she", "it") | | third person singular in `why` lines |
| subject–verb agreement | subject-verb agreement | ang verb mosunod sa subject | SVA without a first full mention |
| regular / irregular verb | regular verb / irregular verb | | |
| -ing form | -ing form | | gerund in `why` lines |
| tense | tense | ang porma sa verb nga nagpakita sa panahon | "time form" |
| present simple | **simple present tense** | | present simple |
| present continuous | **present progressive** | be verb + -ing | present continuous (gloss once: «gitawag sab og present continuous») |
| past simple / past continuous | **simple past tense** / past progressive | | preterite |
| future | "will" / "be going to" | | future tense |
| present perfect (+ continuous) | present perfect / present perfect progressive | "have" + past participle | |
| past perfect | past perfect | | |
| Cebuano verb prefixes and *na / pa* | **aspect** (lesson `aspect-tense` only) | nahuman na, nagpadayon pa, o wala pa masugdi | |
| time expression | time word | "yesterday", "now", "already" | |
| passive / active | passive voice / active voice | | |
| conditional | conditional (first, second, third) | sentence nga naay "if" | |
| relative clause / pronoun | relative clause / "who", "which", "that" | | |
| reported / direct speech | reported speech / direct speech | | indirect speech |
| preposition | preposition | "in", "on", "at": sa Bisaya, kasagaran "sa" | pang-ukol |
| conjunction | conjunction | "and", "but", "because" | pangatnig |
| adjective / adverb | adjective / adverb | | pang-uri |
| comparative / superlative | comparative / superlative | "mas" / "pinaka-" | |
| question word | question word | "what", "where", "who" | wh-word |
| statement / negative / question | statement / negative / question | | |
| sentence | sentence | | tudling-pulong, pangungusap |
| word order | word order | han-ay sa mga pulong | |
| contraction | contraction | pinamubo: "I'm", "don't" | |
| phrasal verb | phrasal verb | verb + gamay nga pulong: "pick up" | |
| the small word of a phrasal verb | particle (phrasal lesson only) | | (the regex uses `\b`, so *particle* never counts as *article*) |
| idiom | idiom | | panultihon (it means proverb) |
| trap, false friend | lit-ag | | |
| pronunciation | paglitok (as in `ui.json`) | | pronunciation in prose |
| IPA transcription | IPA (ang paglitok sulod sa / /) | | romanization |
| stress | stress | ang syllable nga mas kusog | diin |
| syllable | syllable | | pantig |
| vowel / consonant | vowel / consonant | | patinig, katinig |
| meaning | kahulogan (as in `ui.json`) | | |
| example | pananglitan (as in `ui.json`) | | ehemplo |
| word / sentence / blank | pulong / sentence / blangko | | |
| correct / incorrect | sakto / sayop; feedback «Sakto!» / «Dili pa sakto» (as in `ui.json`) | | husto, tama |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking:** evidence strength × frequency × how often the point recurs across lessons. The ranking is this profile's inference. Format: error ✗ → correction ✓. Every "Why" line (the contrast with Cebuano) is general description from [Wikipedia, *Cebuano grammar*](https://en.wikipedia.org/wiki/Cebuano_grammar) and [*Cebuano language*](https://en.wikipedia.org/wiki/Cebuano_language) [curriculum convention] plus my reading of it; that the contrast *causes* the error is [practitioner opinion] unless the Evidence line names a study that says so. "Theirs" = quoted from the named study. Unsourced examples are illustrative [practitioner opinion].

**Main fetched evidence** (all descriptive; none has a control group or inter-rater figures):
- **Manto & Hermosilla 2025** (Cebuano L1): 28 school-paper articles by students of one secondary school in Danao City, Cebu, 2023–24; 32 sentences with interference, each with a Cebuano back-translation. Qualitative, no counts per category; explanations partly generated with Grammarly.
- **Momongan, Sanchez, Viray & Ramos 2023** (Cebuano L1): 35 third-year BA English Language students at Cebu Technological University–Argao, four recorded class sessions, errors listed by sound; no counts.
- **Abansa et al. 2026** (L1 not stated): 26 first-year education students at a university in Caraga (northeastern Mindanao; Cebuano and Surigaonon are the regional languages [my inference]); 50 inflection errors in 26 short compositions.
- **Nueva 2016** (L1 not stated): 317 first-year students of Central Mindanao University, Bukidnon (a largely Cebuano-speaking province [my inference]); one essay each; counts are students who made each error, not errors. One printed percentage is wrong (29 of 317 given as 0.09%).
- **Padilla & Padilla 2021** (Visayan L1, **Hiligaynon**, not Cebuano): 49 Grade 7 students in Negros Occidental, personal narratives, 1,366 errors in 15 categories. Hiligaynon shares the features used here (no articles, one *sa*, aspect not tense, no copula, *siya*); the authors attribute most errors to English itself (intralingual), not to the first language.
- **Saavedra & Coronel 2022** (6 Visayan / Cebuano speakers among 32 Grade 11 students in Zamboanga City): read-aloud of 10 /θ/ and 10 /ð/ words, rated by one teacher.
- **TalkDrill 2026**: a civil-service exam guide for Bisaya and Ilocano speakers; it states that it has no data by first language [practitioner opinion throughout].

1. **Past time not marked on the verb; wrong past or perfect form.**
   - *Examples:* `…so you use the money and you got the job. ✗ → used ✓` (Manto & Hermosilla, theirs) / `I feel nervous (about last week). ✗ → I felt nervous ✓` (Abansa et al., theirs) / `Did you passed? ✗ → Did you pass? ✓` / `I have submitted it yesterday. ✗ → I submitted it yesterday. ✓` / `She works here since 2022. ✗ → She has worked here since 2022. ✓` (TalkDrill, theirs)
   - *Why:* Cebuano "generally does not use tense, rather it uses aspect": verb affixes show whether an action has begun (*ni-, nag-, gi-*) or not (*mo-, mag-*), not when it happened (Wikipedia, *Cebuano grammar*). *Nagkaon ko* can be "I am eating" or "I was eating". The particles *na* ("already", change of state) and *pa* ("still, yet") carry the rest. So the learner must add a time decision that Bisaya does not ask for.
   - *Evidence:*
     - [research-backed, L1 not stated] Past-tense forms were 29 of 50 inflection errors (58%) in Abansa et al.; 18 were a wrong form (*feel* for *felt*, *stand* for *stood*) and 7 a missing *-ed*.
     - [research-backed, Visayan L1 (Hiligaynon)] Verbs were the largest category in Padilla & Padilla: 361 of 1,366 errors (26.43%); "faulty verb tense" was 54.59% of all wrong-form errors (`…because my tito die yesterday`, theirs).
     - [research-backed, Cebuano L1, qualitative] Manto & Hermosilla trace the *use / used* error to Cebuano affixes (*naka-, ni-, gi-*) replacing a single past ending.
     - [research-backed, L1 not stated] Tense was the second grammar error in Nueva: 29 of 317 students.
     - The *na / pa* explanation of `have submitted … yesterday` and `already not` is TalkDrill's [practitioner opinion].
2. **Subject–verb agreement and third-person -s.**
   - *Examples:* `School uniforms ensures students safety. ✗ → ensure ✓` (Manto & Hermosilla, theirs) / `One of the applicants have submitted. ✗ → has ✓` (TalkDrill, theirs) / `She live in Cebu. ✗ → She lives ✓` / `There is many people. ✗ → There are ✓`
   - *Why:* a Cebuano verb has the same form for every subject (*Mokaon ko / ka / siya*).
   - *Evidence:*
     - [research-backed, L1 not stated] The most common grammar error in Nueva: made by 80 of 317 freshmen (25.2%).
     - [research-backed, Cebuano L1, qualitative] Manto & Hermosilla attribute it to *nag-* verbs that do not change with the subject's number.
     - [research-backed, Visayan L1] Only 4.59% of wrong-form errors in Padilla & Padilla, far below tense: in narratives about the past, agreement shows less.
     - [practitioner opinion] A US teachers' page on Filipino-American pupils also lists agreement as "a challenge" ([Stanford-hosted page, no author](https://web.stanford.edu/~hakuta/www/archives/syllabi/E_CLAD/sfusd_cult_03/amy_leigh/amy_leigh/languageerrors.html)).
3. **Prepositions: one *sa* for in / on / at / to / from; fixed pairs.**
   - *Examples:* `The past few years, I learned how to write better. ✗ → In the past few years ✓` / `Last month October 20, 2023 … ✗ → Last month, on October 20, 2023 ✓` / `hesitate to participate such as sports ✗ → participate in sports ✓` (all Manto & Hermosilla, theirs) / `I was new on class. ✗ → in class ✓` (Padilla & Padilla, theirs) / `based from ✗ → based on ✓` / `result to ✗ → result in ✓` / `graduate at ✗ → graduate from ✓` (TalkDrill)
   - *Why:* *sa* marks place, direction and time alike (*sa balay, sa Lunes, sa eskuwelahan*: "Moadto mi sa eskuwelahan", "Tua siya sa bukid", Wikipedia). Cebuano time phrases often take no preposition at all.
   - *Evidence:*
     - [research-backed, Visayan L1] Prepositions were the 4th category in Padilla & Padilla (110 of 1,366, 8.05%); a missing preposition was 17.57% of omissions and a wrong one 12.01% of wrong forms.
     - [research-backed, Cebuano L1, qualitative] Manto & Hermosilla: omitted *in* / *on* where the Cebuano sentence has none.
     - [research-backed, corpus, Philippine English generally] *based from* and *fill up* for *fill out* occur in ICE-PHI and GloWbE-Philippines (De Castro 2020).
     - [research-backed, Philippine L1, Pampanga, not Visayan] 44 Grade 9 students made most errors on prepositions of direction in an objective test ([Tulabut et al. 2018](https://files.eric.ed.gov/fulltext/EJ1247198.pdf); abstract and opening pages read).
4. **Articles in both directions: *a* missing, *the* added.**
   - *Examples:* `…and has big important role ✗ → has a big, important role ✓` / `the Sabang National High School celebrated … ✗ → Sabang National High School ✓` / `The technology is a great help. ✗ → Technology is a great help. ✓` (all Manto & Hermosilla, theirs) / `Is there still slot? ✗ → Is there still a slot? ✓` / `a LGU ✗ → an LGU ✓` (TalkDrill) / `…is going to the Jollibee ✗ → to Jollibee ✓` (Padilla & Padilla, theirs)
   - *Why:* Cebuano has case markers, not articles. *Ang* marks the noun the sentence is about, **including names of institutions and general ideas**, and learners render it as *the*; indefiniteness is shown by *og* or *usa ka* ("one"), which is optional (Wikipedia). So this is **not** the Korean pattern of simple omission: the course must teach "*ang* is not *the*" as well as "one countable thing needs *a*".
   - *Evidence:*
     - [research-backed, Cebuano L1, qualitative] Manto & Hermosilla give both directions and name *ang* as the source of the extra *the*.
     - [research-backed, Visayan L1] In Padilla & Padilla, "unnecessary use of articles" was the most common **addition** error (29.90% of additions), while missing articles were 7.21% of omissions; articles overall were 45 of 1,366 (3.29%).
     - [research-backed, L1 not stated] "Determiner" errors: 6 of 317 students in Nueva, a low figure that may reflect what the rater counted.
     - No accuracy-by-level data for Cebuano or any Philippine first language was found. The finding that article-less first languages keep article accuracy low up to advanced levels is for Japanese and Korean (Murakami & Alexopoulou 2016, as cited in `id.md`; not opened here); for Cebuano it is [practitioner opinion].
5. **Plural -s and countability.**
   - *Examples:* `freedom of each countries ✗ → each country ✓` (Manto & Hermosilla, theirs) / `weaknesses, strengths (where one was meant) ✗ → weakness, strength ✓` (Abansa et al., theirs) / `informations, advices, equipments, furnitures ✗` (TalkDrill; *furnitures* also in Wikipedia, *Philippine English*) / `I have two brother. ✗ → two brothers ✓`
   - *Why:* nouns do not change for number; *mga* marks a plural and can stand before almost any noun, and after a numeral Cebuano uses the linker *ka* with no plural word (*duha ka tasa*, Wikipedia). So -s is both left off after numbers and added to uncountable or singular nouns.
   - *Evidence:*
     - [research-backed, L1 not stated] Plural errors were 12 of 50 (24%) in Abansa et al., and **9 of the 12 were added -s** on abstract nouns, 3 missing.
     - [research-backed, Cebuano L1, qualitative] `each countries` (quantifier + noun) in Manto & Hermosilla.
     - [research-backed, Visayan L1] Noun errors were only 7 of 1,366 in Padilla & Padilla, so a bare missing plural may be rarer than over-pluralising. **This weakens the case for the standing rule's plural half (§7).**
     - The *mga* → uncountable -s link is TalkDrill's [practitioner opinion].
6. **Missing *be*, missing *it* / *there*, sentences that start with the predicate.**
   - *Examples:* `Easier to choose what to wear. ✗ → It is easier to choose what to wear. ✓` / `Which very agreeable … ✗ → This is very agreeable ✓` / `Ensuring that only authorized personnel are present. ✗ → We are ensuring … ✓` (all Manto & Hermosilla, theirs) / `There so many people around my grandfather. ✗ → There were ✓` / `My first day of school it was so very exciting. ✗ → My first day of school was very exciting. ✓` (Padilla & Padilla, theirs)
   - *Why:* Cebuano has no copula (*Gwapa siya*, "pretty she") and is predicate-first (*Init karon*, "hot now"); existence and possession use *naa / adunay / wala* (Wikipedia: "Naa koy ilimnon sa balay"). English needs *is*, a dummy *it*, and *there is / are*.
   - *Evidence:*
     - [research-backed, Cebuano L1, qualitative] Manto & Hermosilla tie the fragments to Cebuano sentences that begin with a predicate adjective or verb.
     - [research-backed, Visayan L1] Linking verbs were the second most omitted item in Padilla & Padilla (21.62% of omissions) and were also over-supplied (15.46% of additions).
7. **Pronouns: *siya* → he / she; case and reflexive forms.**
   - *Examples:* `Ms Abad said he would sign the permits today. ✗ → she ✓` (TalkDrill, theirs) / `they don't have to stress their self ✗ → themselves ✓` (Manto & Hermosilla, theirs: *ilang kaugalingon*) / `…but me and her could not close… ✗ → she and I ✓` (Padilla & Padilla, theirs) / `Once a person has been bullied they may hesitate … → he or she / they` (Manto & Hermosilla "correct" singular *they* to *he*; the course accepts singular *they*)
   - *Why:* the third-person singular has one form with no gender, *siya / niya / iya / kaniya* (pronoun table in Wikipedia, *Cebuano grammar*), and no he / she / it split.
   - *Evidence:*
     - [research-backed, Visayan L1] Pronoun errors: 76 of 1,366 (5.56%) in Padilla & Padilla, mostly case; gender mix-ups are not reported separately.
     - **He / she confusion among Cebuano speakers has no measured source.** It is reported by teachers of Filipino-American pupils (Stanford-hosted page: "Filipinos have one word for these pronouns, siya, which is not gender specific") and by TalkDrill [practitioner opinion]. Manto & Hermosilla cite Canoy 2023 for the genderless Bisaya pronoun (not opened).
8. **Pronunciation.** [research-backed, Cebuano L1, 35 English majors, no counts: Momongan et al. 2023, unless marked]
   - **/z/ → s:** "all speakers produced /s/ instead of /z/" in *choose* [tʃus], *lose* [lus], *sins, desires, conditions, symbolizes*. Plural and third-person -s are therefore said /s/ everywhere. Also general in Philippine English (Wikipedia: "/z/: devoiced to [s]"); in Metro Manila's most English-dominant speakers /s/–/z/ still merges at the end of a word (*hiss* = *his* for 3 of 4 speakers: [Lesho 2018](https://www.cambridge.org/core/product/F041BD5DCF9DC4B66F822D30F784EF82/core-reader), Tagalog L1).
   - **/ð/ → d, /θ/ less so:** *the, those, that, they, other, father, with* said with [d] "by some speakers". [research-backed, 6 Visayan speakers] In Saavedra & Coronel, 4 of 6 Visayans were rated excellent on /θ/ words but only 2 of 6 on /ð/ words, and 3 of 6 poor.
   - **/ɪ/ → i or e (the three-vowel base):** *miss* [mis], *conditions* [kənˈdiʃənz]; *forbidden* [ˈfɔrbɛdən], *optimistic* [ɑptəˈmɛstɪk]. *Ship / sheep*, *live / leave*, *fill / feel* fall together.
     - Cebuano had three vowels (a, i, u) before Spanish contact; *e / i* and *o / u* are "still mostly allophones" (Wikipedia, *Cebuano language*). The same habit shows in spelling: *discribe, divelop, previlege, oppurtunity* (TalkDrill) [practitioner opinion]; *fivoret* for *favorite* (Padilla & Padilla, Hiligaynon).
     - Mesolect and basilect Philippine English "merge tense–lax pairs and lack /æ/ or /ʌ/", linked to Tagalog and Cebuano having no such contrasts (Lesho 2018, summarising Tayao).
   - **/ʊ/–/uː/, /oʊ/ → o:** *woman* [ˈwumən], *holy* [ˈhɔli]. The authors note /ʊ/ was mostly kept, so this is weaker than the /ɪ/ finding.
   - **/æ/ and /ʌ/ → a; schwa → a full vowel:** *that* [dʌt], *attract, advantage* with [a]-like vowels; *symbolizes, consider, courage* with [ɔ] for schwa. Wikipedia describes Philippine English as having no schwa phoneme, with full vowels by spelling.
   - **Final clusters:** /t/ dropped after /k/: *attract* [əˈtrʌk], *distract*. Also in Lesho (*gift* [gɪf]).
   - **/ʒ/ → ʃ:** *decision* with [ʃ]; low importance (rare sound).
   - **Stress:** *faTHER, perSON, chaRACters, heriTAGE, passioNATE, seCRET, couRAGE, symboLIZES* (theirs). Wikipedia lists *ceremony* and *Arabic* stressed on the second syllable, and *-ary* words on the *a*. Cebuano stress is phonemic and mostly penultimate or final (Wikipedia).
   - **F / P and V / B:** the best-known "Bisaya accent" stereotype. Philippine English description lists /f/ → [p] and /v/ → [b] as general features (Wikipedia, after Tayao) and places them in the mesolect and basilect; English-dominant Manila speakers keep the contrasts (Lesho). **Momongan et al. do not report it among their 35 English majors.** So it is real for some learners (less schooling, older speakers) and absent for others: [research-backed for Philippine English, not measured for Cebuano]. Cebuano's consonant chart has no f, v, z, ʃ, θ, ð (Wikipedia). The Stanford-hosted page reports the reverse slip (*fritty girls* for *pretty*), i.e. hypercorrection [practitioner opinion].
   - **Unaspirated p, t, k:** "all stops are unaspirated" in Cebuano (Wikipedia). That English *pin* then sounds like *bin* to Americans is [practitioner opinion].
   - **Spelling pronunciation:** the authors' own explanation for /z/, /æ/ and schwa is that speakers read letters at face value ("the English sound production of Filipinos is primarily based on how it is graphically represented"). This is the main argument for an IPA aid (§6).
   - **R / L:** Cebuano has both, so the ko-en rice / lice pairs are easy; only the American *r* quality differs [practitioner opinion].
9. ***na* and *pa* carried into English: *already*, *yet*, *still*, *anymore*.**
   - *Examples:* `He is already not assigned to the gate. ✗ → He is no longer assigned to the gate. ✓` / `The papers did not arrive yet. ✗ → The papers have not arrived yet. ✓` / `Until now, I have no reply. ✗ → I still have no reply. ✓` (all TalkDrill, theirs)
   - *Why:* *na* = now / already (positive) and "anymore" (negative: *wala na*); *pa* = still (positive) and "yet" (negative: *wala pa*) (Wikipedia, *Cebuano grammar*).
   - *Evidence:* [practitioner opinion] only (TalkDrill). The Cebuano facts are [curriculum convention].
10. **"Iningles sa Pinas": local words, shifted meanings, direct translations.**
    - *Examples:* `Open the light. ✗ (abroad) → Turn on the light. ✓` / `Where is the CR? → Where is the restroom? ✓` / `Can you borrow me your pen? ✗ → Can you lend me your pen? ✓` / `Fill up the form. ✗ → Fill out the form. ✓` / `For a while, sir. ✗ → One moment, please. ✓` / `My dialect is Bisaya. → My first language is Cebuano. ✓`
    - *Evidence:* [curriculum convention] meanings from Wikipedia, *Philippine English vocabulary* (*salvage* "to carry out a summary execution", *traffic* as "heavy traffic", *brownout* "a power outage", *bold* "erotic", *course* "an academic degree", *commute*, *load*, *ref*, *comfort room*, *rubber shoes*, *eat-all-you-can*, *accomplish* a form, *go down* = get off a vehicle, *advanced* for a fast clock, *middle name* = mother's maiden surname). [practitioner opinion] the direct translations from TalkDrill. *Borrow / lend* both being *hulam* is my inference.
11. **Do-support in questions and negatives.**
    - *Examples:* `You like coffee? ✗ (in writing) → Do you like coffee? ✓` / `I not like spicy food. ✗ → I don't like ✓` / `Did you passed? ✗ → Did you pass? ✓` (TalkDrill, theirs)
    - *Why:* Cebuano questions add *ba* or use intonation (*Kamao ka ba molangoy?*), and negation puts *dili* or *wala* before the verb (Wikipedia). No auxiliary exists.
    - *Evidence:* [practitioner opinion]; only the *Did you passed* double marking has a source. School English probably makes the bare forms rare in writing.
12. **Passive: *gi-* verbs carried over without *be* or with *get*.**
    - *Example:* `They get bully because of their appearance. ✗ → They are bullied ✓` (Manto & Hermosilla, theirs: *Gibugal-bugalan sila*).
    - *Why:* the patient-focus (*gi-*) verb is ordinary in Cebuano and has no auxiliary.
    - *Evidence:* [research-backed, Cebuano L1, one example]. That learners over-use the passive is [practitioner opinion].
13. **Word order inside the noun phrase and doubled intensifiers.**
    - *Examples:* `I wish a celebration party birthday. ✗ → a birthday party ✓` / `so very happy ✗ → very happy ✓` (Padilla & Padilla, Hiligaynon, theirs)
    - *Evidence:* [research-backed, Visayan L1]; Abansa et al. found **no** misordering in 26 compositions, so this is a minor zone.

## 5. Learner starting point

- **School exposure** [curriculum convention].
  - English has been a medium of instruction since 1901 and is the language of most textbooks; under RA 12027 (2024) Filipino and English are the media from Kindergarten to Grade 3, with regional languages as auxiliary (via `ceb-ko.md` §2.3; not re-verified, §11).
  - Children are "taught English and Filipino as subjects" from the first grade, and both become languages of instruction from Grade 4 (Padilla & Padilla 2021, describing the earlier mother-tongue policy).
  - So an adult Bisaya speaker has had 10–12 years of English-medium classes, reads English daily on a phone, and mixes English into Bisaya (§2). What school did **not** give is correction of the fossilised forms in §4.
- **Profile figures** [research-backed, test-taker data, self-selected, no sample size on the sheet].
  - **EF EPI, Philippines** ([fact sheet](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-philippines-english.pdf)): rank 25, score **565**, world average 485. Skills: **reading 578, listening 553, writing 590, speaking 517**.
  - Cebuano-speaking areas: **Central Visayas 572**, Davao region 581, Soccsksargen 573, Caraga 563, Northern Mindanao 556. Cities: Tagbilaran 595, General Santos 583, **Cebu City 582**, Davao City 582, Dumaguete 574, Cagayan de Oro 569, Lapu-Lapu 568.
  - By job: students 531, technicians / maintenance 512, customer service 574, teachers 597.
  - The sheet's URL says 2026 and its chart runs to 2026, but its footer calls it a companion to the 2025 edition (§11).
  - **Shape:** the reverse of Indonesia or Korea. Writing and reading are high; **speaking is 73 points below writing**. The accuracy gaps in §4 sit inside fluent output.
- **Self-view** [research-backed, Cebuano L1, qualitative]: Momongan et al.'s English majors make the listed sound substitutions while being "proficient"; the authors argue the shared accent even eases talk among Cebuanos. Learners may not hear these as errors.
- **Exam and job culture.**
  - [practitioner opinion, press] IELTS in the Philippines is now taken more by skilled workers (welders, butchers, drivers, poultry workers) than by nurses, for the UK, Australia and New Zealand; also for study abroad and for BPO and virtual-assistant work ([GMA News 2026](https://www.gmanetwork.com/news/pinoyabroad/dispatch/996711/british-council-more-skilled-workers-than-nurses-taking-ielts-for-ofw-jobs/story/), quoting the British Council).
  - [practitioner opinion] The Civil Service Exam tests grammar and "find the error" items (TalkDrill 2026).
  - Familiar formats: 4-option multiple choice, error identification, subject–verb agreement drills. They map onto the practice set.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Keep A1 but make it fast and adult.** The first lessons are review for most learners; say so («Kabalo na ka niini. Susihon lang nato ang mga gagmayng sayop.»). The value is in typed items and "find the error" items, not in meanings.
  2. **Weight speaking-side accuracy:** audio on every card, IPA that shows /z/, /ð/, /ɪ/, /æ/, schwa and stress (§6).
  3. **Name grammar the school way** (subject-verb agreement, past tense, article). It shortens explanations and matches exam prep.
  4. **Recycle past forms, third-person -s, *a / the*, plural -s and he / she** in every level's mixed items.
  5. **Two audiences inside one course:** the BPO or OFW applicant polishing accuracy, and the learner with less schooling for whom F / P, V / B and basic *be* are real. Lesson bodies should serve the second without talking down to the first.

## 6. Pronunciation aid policy

**Evidence:**
- [research-backed, Cebuano L1] The errors to fix are vowel-quality and voicing contrasts that English spelling hides: /ɪ/–/iː/, /æ/–/ʌ/–/ɑ/, schwa, /s/–/z/, /d/–/ð/, plus stress (Momongan et al. 2023). The authors' own explanation is spelling pronunciation.
- [curriculum convention] Cebuano writes five vowel letters over a three-vowel base in which *e / i* and *o / u* interchange (Wikipedia; §2). A respelling in Cebuano letters would therefore show *ship* and *sheep* both as «syip», *bad / bud / body* all with «a», and schwa as whichever vowel the English letter suggests. **It would print the mergers the course is trying to undo.**
- [practitioner opinion, inference] Indonesian solved the same problem with é / è and doubled vowels (`id.md` §6), but that rests on diacritics Indonesian readers know from their own spelling rules. Cebuano writing uses no diacritics ("Dili kini angay gamiton sa pagsuwat", KWF, via `en-ceb.md`), and a doubled vowel in Cebuano spelling means two syllables with a glottal stop (*maayo*), so «siip» would be read as two beats.
- [practitioner opinion, inference] An English-style respelling (*sheep* → "sheep", *think* → "thingk") collides with the English itself for a reader who already reads English, and keeps the learner inside spelling pronunciation.
- [practitioner opinion] The author cannot check a new Cebuano respelling with a native reader; the app's first Cebuano profile measured its author's recall of Cebuano stress at 2 of 7 (`en-ceb.md` §6). IPA needs no judgement about how a Cebuano reader will read a string.
- **For IPA, weakly:** Philippine teacher education covers phonetics and phonology, and a Philippine classroom study reports gains from teaching IPA symbols to Grade 12 students (search results only; pages not opened, so not counted as evidence, §11). Momongan et al. transcribe their Cebuano students in IPA. **How many adult Cebuano speakers can read IPA is unknown, and probably few** (§11).
- **No fetched study compares IPA, respelling and no aid for Filipino learners.** The decision is inference.

**Decision: `"pron": "required"`, IPA between slashes, written exactly as the Chinese course writes it (`tools/content/zh/PRON-RULES.md`), with the same `pronPattern`. Shown by default; hidden with the existing toggle «Ipakita ang paglitok sa praktis» / «Aa paglitok».**
- **Why IPA:** it is the only aid that shows every documented error as a visible difference (ɪ / iː, æ / ʌ / ɑː, ə, s / z, d / ð, f / p, v / b, ˈ). The learner needs about 14 new symbols, taught once in the `pron` lesson with a Bisaya anchor each; the rest are ordinary letters with their Bisaya values.
- **Why the zh form, not the vi form:** zh marks stress on every content word (stress is a documented zone) and avoids ɚ / ɝ and the flap symbol; and identical English strings can carry **identical transcriptions**, so the content agent copies them from `tools/content/zh/` and the lint rule "same English, same aid" has a tested reference. Only localised names and new rows need writing.
- **`none` rejected:** speaking is the weakest skill and spelling pronunciation is the named cause; the engine has never rendered empty prons outside ko.
- **`optional` rejected:** empty prons would land on the short words where the aid matters (*live, this, is, bus*).
- **Risk accepted:** some learners will ignore symbols they do not know. Mitigation: the key table below goes into the `pron` lesson, audio is on every card, and the toggle hides the line.

**Rules for the `pron` field** (= zh §6 and `zh/PRON-RULES.md`; restated so writers need one page):
1. One pair of slashes around the whole line; words separated by one space; no punctuation, capitals or digits. Two sentences in one row are separated by ` ‖ ` (U+2016). Alternatives are two slashed groups separated by one space: `/ˌfɪfˈtiːn/ /ˈfɪfti/`. Never `//`.
2. **Stress:** a closed list of function words stays unmarked (articles; personal, object and possessive pronouns; *be*; auxiliary *do / have*; modals; prepositions; conjunctions; existential *there*). **Every other word gets ˈ**, monosyllables included. A function word that stands alone or carries contrast takes its strong form and ˈ (`Me too.` → `/ˈmiː ˈtuː/`). ˌ only inside long words, -teen numbers and spelled abbreviations.
3. **Vowels (OALD American values in school symbols):**

   | Sound | Write | Example | Bisaya anchor for the `pron` lesson (native check) |
   |---|---|---|---|
   | FLEECE | iː | sheep /ˈʃiːp/ | taas nga "i"; ngisi ang ngabil |
   | KIT | ɪ | ship /ˈʃɪp/ | mubo, tunga-tunga sa "i" ug "e" |
   | DRESS | e | bed /ˈbed/ | "e" sa *kape* |
   | TRAP | æ | bad /ˈbæd/ | bukha ang baba: tunga-tunga sa "a" ug "e" |
   | STRUT | ʌ | bud /ˈbʌd/ | mubo nga "a", dili kaayo abli ang baba |
   | LOT | ɑː | hot /ˈhɑːt/ | taas nga "a", abli kaayo ang baba |
   | THOUGHT | ɔː | talk /ˈtɔːk/ | "o" sa *oras*, mas taas |
   | FOOT | ʊ | full /ˈfʊl/ | mubo, tunga-tunga sa "u" ug "o" |
   | GOOSE | uː | fool /ˈfuːl/ | taas nga "u" |
   | schwa | ə | about /əˈbaʊt/ | hinay ug mubo kaayo; dili "a", dili "e" |
   | NURSE / lettER | ɜːr / ər | work /ˈwɜːrk/, water /ˈwɔːtər/ | |
   | r-vowels | ɪr er ʊr ɑːr ɔːr | here, there, sure, car, door | |
   | diphthongs | eɪ aɪ ɔɪ aʊ oʊ | name, my, boy, now, go | "ey, ay, oy, aw, ow" |
   | final -y; weak *you, to* | i / u (no ː) | very /ˈveri/, you /ju/ | |

4. **Consonants:** p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j. ASCII `g`, plain `r`, no flap symbol, no ɚ / ɝ. New symbols for the lesson table: **θ** (*think*: dila taliwala sa ngipon, hangin lang), **ð** (*this*: pareho, pero naay tingog), **ʃ** (*she*: «sy» sa *syudad*), **ʒ** (*measure*), **tʃ** (*check*: «ts»), **dʒ** (*job*: «dy» sa *dyip*), **ŋ** (*sing*: «ng»), **j** (*yes*: «y»).
5. **Weak forms** for function words, as in `zh/PRON-RULES.md` §B (*a* /ə/, *the* /ðə/ or /ði/ before a vowel, *to* /tə/, *and* /ənd/, *can* /kən/, *you* /ju/, *are* /ər/, *was* /wəz/, *of* /əv/, *for* /fər/). Schwa is itself a teaching point here.
6. **Codas written in full**, endings as heard: plural and third-person -s /s z ɪz/ (*cats* /ˈkæts/, *dogs* /ˈdɔːgz/, *buses* /ˈbʌsɪz/), -ed /t d ɪd/. No inserted vowels, no dropped final /t/ (*attract* /əˈtrækt/).
7. **Numbers** as words, **abbreviations** letter by letter, **names as the en-US voice says them** (to be confirmed against the clips, §11):

   | English | `pron` |
   |---|---|
   | the Philippines | /ðə ˈfɪlɪpiːnz/ |
   | Filipino | /ˌfɪlɪˈpiːnoʊ/ |
   | Cebu | /seɪˈbuː/ |
   | Cebuano | /seɪˈbwɑːnoʊ/ |
   | Davao | /ˈdɑːvaʊ/ |
   | Bohol | /boʊˈhoʊl/ |
   | Manila | /məˈnɪlə/ |
   | Ana, Mark, Joy, Carlo | /ˈɑːnə/, /ˈmɑːrk/, /ˈdʒɔɪ/, /ˈkɑːrloʊ/ |
   | peso, pesos | /ˈpeɪsoʊ/, /ˈpeɪsoʊz/ |

8. **Validator.** `pronPattern` = `^(?=.*ˈ)/C+(?: C+)*/(?: /C+(?: C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]` (string-identical to zh's). `pronScript` = `ˈ`: with `nativeScript: null` the validator then requires a stress mark and a string different from the English, instead of the "differs from English" test alone. The pattern rejects English spelling slips (`/ˈyes/`), capitals, punctuation, U+0261 ɡ, `//` and a line with no stress mark.
9. **Practice items carry no aid** (PRACTICE-SPEC). IPA may appear in lesson prose and tables (`<b>/θ/</b>`).
10. A per-word consistency checker like `tools/content/zh/pron_check.js` should be copied for ceb.

**Worked examples** (all pass `pronPattern` and `pronScript` in Node, see the check note in §11; rows marked zh are copied unchanged from `packs/course-zh-en.js`):

| English | `pron` | Shows |
|---|---|---|
| Hello. (zh) | /həˈloʊ/ | schwa, stress on the second syllable |
| How are you? (zh) | /ˈhaʊ ər ju/ | weak *are, you*; no `?` |
| Thank you. (zh) | /ˈθæŋk ju/ | θ, æ |
| Where's the restroom? (zh) | /ˈwerz ðə ˈrestruːm/ | ð, final /z/; the word to use abroad for *CR* |
| My name is Ana. | /maɪ ˈneɪm ɪz ˈɑːnə/ | /ɪz/ with z; name rule |
| I'm from the Philippines. | /aɪm frəm ðə ˈfɪlɪpiːnz/ | *the* + plural name, f not p, final /z/ |
| I live in Cebu. | /aɪ ˈlɪv ɪn seɪˈbuː/ | ɪ in *live*, v |
| Do you speak Cebuano? | /də ju ˈspiːk seɪˈbwɑːnoʊ/ | weak *do*; iː |
| She has three brothers. | /ʃi ˈhæz ˈθriː ˈbrʌðərz/ | ʃ, æ, θ, ʌ, ð, plural /z/ |
| I submitted it yesterday. | /aɪ səbˈmɪtɪd ɪt ˈjestərdeɪ/ | -ed = /ɪd/, schwa |
| Two hundred fifty pesos. | /ˈtuː ˈhʌndrəd ˈfɪfti ˈpeɪsoʊz/ | numbers as words |
| It's hot today. Let's go to the beach. | /ɪts ˈhɑːt təˈdeɪ ‖ ˈlets ˈgoʊ tə ðə ˈbiːtʃ/ | ‖ between sentences |
| fan · pan (zh) | /ˈfæn/ · /ˈpæn/ | f / p |
| very · berry (zh) | /ˈveri/ · /ˈberi/ | v / b |
| ship · sheep (pron lesson) | /ˈʃɪp/ · /ˈʃiːp/ | ɪ / iː |
| full · fool (pron lesson) | /ˈfʊl/ · /ˈfuːl/ | ʊ / uː |
| bad · bed · bud (pron lesson) | /ˈbæd/ · /ˈbed/ · /ˈbʌd/ | three vowels a Bisaya ear hears as "a / e" |
| this · these (pron lesson) | /ˈðɪs/ · /ˈðiːz/ | ð, ɪ / iː, s / z |
| zoo · Sue (pron lesson) | /ˈzuː/ · /ˈsuː/ | z / s |
| ceremony (pron lesson) | /ˈserəmoʊni/ | stress on the first syllable |
| milk (zh) | /ˈmɪlk/ | all-ASCII letters still differ from the English by the slashes and ˈ |
| fifteen / fifty | /ˌfɪfˈtiːn/ /ˈfɪfti/ | alternatives, ˌ |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "\\barticle|\\bplural", "flags": "i" }` (JSON-escaped).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, each + singular).
- The `why` of each such item must contain **article** or **plural**. These are the glossary terms (§3): English school words inside a Cebuano sentence. Flag `i` lets a sentence start with «Article…» or «Plural…». The leading `\b` keeps *particle* (phrasal lesson) from counting; *articles* and *plurals* still match.
- **Why English keywords:** the app's Cebuano house rule keeps grammar terms in English (§3). A Cebuano coinage (*artikulo* means a news article or a clause of law; no everyday word for the grammar sense was found) would be less clear to the learner than the word from school [practitioner opinion; native check, §11].

**What the validator counts** (`validate.js`, `article-plural`):
- `order`: the `why` names the keyword **and** `x` holds an article tile or a singular / plural twin of a tile in `a`.
- `type`: the `why` names the keyword **and** either every variant in `a` contains an article, or `x` holds an article or a twin.
- Writers put the competitor tile in `x` (`a`, `the`, `book` / `books`).

**Sample `why` lines** (plain text, English in straight quotes; all tested against the regex, §11):
- «Usa ra ka butang nga maihap, mao nga kinahanglan ang article "a": "a teacher".»
- «Human sa "two", plural ang noun: "two books". Walay "mga" sa Iningles, -s ang gamiton.»
- «Article "the" kay nahisgotan na ang butang.»
- «Ang "water" dili maihap: walay article ug walay plural -s.»
- «"These" para sa plural, "this" para sa usa ra.»
- «Ang ngalan sa eskuwelahan walay article: dili "the" ang "ang".»
- «Plural ang "countries" human sa "many", pero singular human sa "each".»

Lines that must **not** match, and do not (tested): «Ang "siya" babaye dinhi, mao nga "she".» / «Naay "yesterday", mao nga past tense: "went".» / «Ang particle sa phrasal verb moadto sa luyo sa pronoun.»

**Justification:**
- **Parity cost is zero.** The shared tile and typed items were written to the Korean rule; only the Cebuano `why` must name *article* or *plural*. Any other kind forces deviations in up to 39 sets (PILOT-SPEC §1.6) [practitioner opinion].
- **Both systems are absent from Cebuano** (§4.4, §4.5), and Cebuano adds a twist the rule suits well: errors go in **both directions** (*a* left out, *the* put in; -s left out after numbers, -s added to uncountables). A `why` that says «walay article» or «walay plural -s» is as much on target as one that says «kinahanglan ang article».
- **The evidence does not put articles and plurals first.** In the two counted Visayan samples, verb forms dominate (58% of inflection errors in Abansa et al.; 26% of all errors in Padilla & Padilla), agreement is the top error in Nueva, and articles are 3.3% in Padilla & Padilla. A `tense-aspect` kind (listed in PIPELINE §6 as proposed in OTHERS.md, not implemented) or `verb-core` (agreement, do-support, dummy *it / there*: the es rule) would fit the measured ranking better.
- **Why keep `article-plural` anyway** [practitioner opinion]: (1) `verb-core` and any tense kind would need rewritten items and deviations across the course; (2) tense and agreement get their own lessons, an added lesson (`aspect-tense`) and secondary `why` wording below, while articles have no natural home outside three lessons; (3) the counted samples are narratives by school pupils, where tense is over-represented. **Revisit after launch:** if first-attempt logs show verb-form items failing more than article items, add `tense-aspect` to `STANDING_RULES` and switch.

**Secondary emphasis (not validated; do not add to the regex).** Where an item also turns on one of these, the `why` names it in the same fixed words:
- past form: «Naay "yesterday", mao nga past form: "went".»
- agreement: «Kon "she" ang subject, dugangi og -s ang verb.» (term: subject-verb agreement)
- *be* verb: «Ang adjective nagkinahanglan og be verb: "She is tired".»
- he / she: «Babaye si Ana, mao nga "she", dili "he".»
- Do not write *article* or *plural* in a `why` that does not hinge on them, so the count stays meaningful.

**Prompt frames (`labels.cueTest`).** With `nativeScript: null` the validator recognises Cebuano by a word list (`cueTest`, in `ceb.profile.json`; first letter either case). Every practice mc `q` and type `hint` must contain at least one listed word. A shorthand mc `q` with none gets « Unsay sakto sa blangko?» appended **silently**, which is wrong for a translation question.
- In ko-en, many mc questions (107 by `id.md`'s count, not recounted) use the bare frame `'<Korean sentence>' =`. In Cebuano **always write `'<sentence>' sa Iningles?`**, never `'<sentence>' =`. One-word prompts such as *Salamat*, *Ulan*, *Init* or *Kumusta?* contain no cue word; with the frame they pass (tested).
- Other frames, all tested to match:
  - meaning: «Unsay Iningles sa 'bugas'?»
  - forms: «Unsay plural sa "box"?» / «Unsay past form sa "go"?»
  - find the error: «Hain ang sayop? She go to school every day.»
  - choose: «Pilia ang sakto nga sentence.»
  - answers: «Tubaga og 'oo': "Do you like coffee?"»
- **Type hints** end with « — » plus a short Cebuano note containing a listed word («three · tree — tulo ka butang, mao nga plural», «teacher — kinahanglan ang article sa trabaho»). Otherwise the DSL appends « — gamita kining mga pulong», which is acceptable.
- The list holds function words and task words: *ang, nga, mga, og, ug, sa, kay, kon, unsa, unsay, asa, hain, kinsa, dili, wala, naa, kini, kana, ako, ikaw, siya, sila, para, pilia, isulat, tubaga, sakto, sayop, blangko, pulong, Iningles, usa, duha, daghan, kahulogan, gahapon, karon, ugma…* (89 words).
- It matched **none of the 2,752 strings without Hangul in the ko-en pack** (tested, §11). Left out on purpose because they are also English or would appear in English strings: *man, pa, na, ba, human, Bisaya, Cebuano*. Rerun the 0-hit check after any change.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in id.md):**
- **keep** = fresh Cebuano explanation from the Bisaya point of view; English rows, checks and practice unchanged.
- **reweight** = same English checks and practice. The Cebuano explanation and the **lesson-body** example rows shift emphasis as noted (lesson-body rows are not parity-bound). No deviation entry. Do not rewrite practice `o` / `a` / `x` strings.
- **add** = new lesson, with an entry in `deviations.json` `extraLessons` and in `profile.json` `lessonOrder.after`. Its practice set must itself satisfy §7.

Ids and order are unchanged. Nothing is replaced or dropped. The shared order now also starts with `alphabet` (letter names and spelling aloud, deck 21), which has its own brief (`docs/briefs/alphabet-lang.md`) and is outside the 39; for Bisaya speakers it is a quick review, with one live point: the letter names *e* /iː/ and *i* /aɪ/ against Spanish-style *e* and *i*, and *z* /ziː/ [practitioner opinion].

| lesson id | keep / reweight / add | note for Bisaya speakers |
|---|---|---|
| pron | reweight | Teaches the IPA key (§6) in one table. The shared F / P, V / B and TH items fit as they are. Add lesson-body rows for what the studies found: s / z (*Sue / zoo*, plural -s said /z/), ɪ / iː (*ship / sheep*), æ / e / ʌ (*bad / bed / bud*), ʊ / uː, schwa, final clusters (*attract*), stress (*ceremony, person, secret*). Shared R / L items: the `why` says Bisaya already has both; only soften the tapped *r*. Tone: "mas klaro", not "sayop" (§2) |
| be | reweight | Bisaya has no be verb (*Gwapa siya* → *She is pretty*) and starts with the predicate. *Naa* splits three ways: is at / there is / have. First he / she drill: *siya* needs a decision in English |
| it-there | reweight | *Init karon* → *It's hot today*; *Sayon ra* → *It's easy* (`Easier to choose what to wear ✗`, Manto & Hermosilla); *Naay / adunay* → *there is / there are*, agreeing with the noun; *Wala* → *there isn't / aren't* |
| articles | reweight | *usa ka* ≈ *a*; *og* ≈ *a / some*; **ang is not the**. One countable thing needs *a*: *Maestra ko* → *I'm a teacher*. *an* before a vowel **sound** (*an LGU*) |
| plurals | reweight | *mga* → -s, but English has no free-standing plural word; *duha ka libro* → *two books* (Bisaya drops the plural after a number, English cannot); *each / every* + singular (`each countries ✗`); *kini / kining mga* → *this / these* |
| present | reweight | The verb stays the same for I / you / we / they, as in Bisaya, but the negative needs *don't*: *Dili ko ganahan* → *I don't like*. *kada adlaw, kanunay* → simple present, not -ing |
| questions | reweight | *ba* has no word in English: *Ganahan ka ba og kape?* → *Do you like coffee?* Question word first, as in Bisaya (*Asa ka nagpuyo?* → *Where do you live?*), then the helping verb. After *did*, the base form (`Did you passed? ✗`) |
| third-s | reweight | Key lesson: agreement is the top counted error (Nueva 2016). *he / she / it* + -s; `School uniforms ensures ✗`; `One of the applicants have ✗`. -s is said /s/, /z/ or /ɪz/ |
| prep | reweight | *sa* = in / on / at (and to, from): *sa Lunes* → *on Monday*, *sa alas siyete* → *at seven*, *sa Oktubre* → *in October*, *on October 20*; time phrases that have no *sa* still need one (`The past few years, I … ✗`) |
| countable | reweight | *daghan* = many **and** much; *gamay* = a few **and** a little. Uncountable in English: *information, advice, equipment, furniture, luggage, homework* (no -s, no *a*). *a piece of advice* |
| object-have | reweight | *siya / niya / iyang / kaniya* → he / him / his **or** she / her / her; *naa koy* → *I have*; *ilang kaugalingon* → *themselves* (`their self ✗`); `me and her ✗` as a subject |
| can-like | keep | *maka- / pwede* = can; *ganahan / gusto* = like / want; *gusto unta ko* ≈ I'd like |
| polite | reweight | *Palihug* + command is polite in Bisaya; English wants *Could you…? / Could I have…?* Address: *Sir / Ma'am* (+ first name) is normal in the Philippines; abroad use *Mr. / Ms.* + family name or the first name alone; *sir / ma'am* only in service. Phone: *One moment, please*, not `For a while` |
| continuous | reweight | *nag-* + *karon* → be verb + -ing; but *nag-* alone does not say when: *Nagkaon ko* = *I'm eating* or *I was eating*. No -ing on state verbs (`I'm knowing ✗`) |
| past | reweight | Key lesson: the verb must change even when *gahapon* is there. *ni- / mi- / gi- / naka-* → past form; *did* + base form in questions and negatives; -ed said /t/, /d/, /ɪd/ (§6 rule 6) |
| irregular-past | keep | Lists of base form / past form / past participle are a school habit; start from the forms the studies caught: *feel–felt, stand–stood, see–saw* |
| the | reweight | First *a*, then *the*. **No *the* just because Bisaya has *ang*:** not before school and company names (*Sabang National High School*, *Jollibee*) or ideas in general (`The technology is a great help ✗`) |
| adjectives | reweight | *mas* → -er / more, *pinaka-* → -est / most, never `more bigger`; `so very happy ✗`. Bisaya allows both *dakong balay* and *balay nga dako*; English only *a big house* |
| going-to | keep | *mo-* covers both *will* and *going to*; keep ko's contrast |
| tense | reweight | Recap built on Bisaya forms in the lesson-body rows: *nag-* + *karon* → -ing, *ni-* + *gahapon* → past, *mo-* + *ugma* → will / going to, *kada adlaw* → simple present. Previews `aspect-tense` |
| joining | keep | *kay* = because, *pero* = but, *mao nga* = so. Do not pair *although … but* (*bisan … pero*) |
| numbers | reweight | Bisaya uses Spanish numbers for the clock and prices (*alas tres y medya*, *singkuwenta pesos*: confirmed by the owner, `ceb-ko.md`) → English numbers throughout; pesos (§9); prices without "and" are already American; *Nobyembre 23* → *November 23 / November twenty-third* |
| smalltalk | reweight | *Nakakaon na ka?* and *Asa ka padulong?* work as greetings in Bisaya but are real questions in English [my inference, native check]. Topics to avoid with strangers: age, salary, weight, *Minyo na ka?* Deck localised (§9) |
| **pinoy-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | *nag-* + a past time word |
| will | keep | *mo-* → *will* for decisions and promises |
| perfect | reweight | *na* → *already / have done*, *wala pa* → *haven't … yet*, *nakaadto na ka?* → *Have you ever been…?* But a finished time takes the past form: `I have submitted it yesterday ✗` |
| **aspect-tense** | **add** (after `perfect`, A2) | See below |
| modals | reweight | *kinahanglan* = must / have to; *pwede* = can / may; *basin* = might / maybe; *dili kinahanglan* = don't have to, not `mustn't`; *unta* ≈ should / I wish |
| to-ing | keep | |
| articles-2 | reweight | Things in general take no *the*: *Technology is…*, *Dogs are…* (the *ang* trap again). Names: *the Philippines, the US*, but *Cebu, Japan*; one-of-a-kind things keep *the* |
| first-conditional | keep | *kon* + present; no *will* after *if* |
| relative | reweight | *nga* joins like *who / which / that* and comes after the noun, so the pattern is familiar. Focus on choosing *who* vs *which* and on not repeating the pronoun (`the man who he lives …`) |
| phrasal | reweight | The particle carries the meaning and cannot be swapped: *fill out* a form (not `fill up`), *based on*, *result in*, *cope with* (no `up`), *pass by*, *look for* (De Castro 2020; TalkDrill) |
| perfect-2 | reweight | *sukad* = since, *sulod sa* = for: `She works here since 2022 ✗ → has worked`; `Until now, I have no reply ✗ → I still have no reply` |
| narrative | keep | |
| conditionals | keep | *kon … pa unta* → second and third conditional |
| passive | reweight | *gi-* verbs are everyday Bisaya; English needs be verb + past participle, in a tense: `They get bully ✗ → They are bullied` (Manto & Hermosilla). Prefer the active in casual English |
| reported | keep | *kuno / daw* = "he said that…" is a useful bridge |
| email | reweight | Replace Philippine office formulas: *Good day!* → *Hi Ana, / Dear Ms. Reyes,*; `Please revert back` → *Please reply*; *for your perusal* → *for your review*; *Kindly* (overused) → *Please*; *More power!* → *Best regards* (the first is TalkDrill's, the last from Wikipedia's *power* entry; the rest are my inference) |
| idioms | keep | |

**Additions:**
- **`pinoy-english`** («Iningles sa Pinas: mga pulong nga lahi og kahulogan sa gawas»), after `smalltalk`, deck 22 «Mga lit-ag para sa Bisaya» (§9).
  - *Content:* local words and their international partners (*CR, open the light, brownout, ref, aircon, rubber shoes, course, batchmate, traffic, commute, load, dialect, high blood, salvage*); direct translations (*borrow / lend*, *for a while*, *go down* from a jeepney → *get off*, *I'll go ahead* → *I'm leaving now*); swapped particles (*fill out, based on, result in, cope with, discuss*); uncountables with -s (*informations, equipments, furnitures*); *na / pa* calques (*already not* → *no longer*, *until now* → *still*); he / she slips.
  - *Tone:* these are right at home; the lesson teaches what to say to a foreign client, examiner or employer (§2).
  - *Practice that meets §7:* `Where is the restroom?`, `Can you turn on the light?`, `I need some information.`, `We bought new furniture.`, `There was a power outage.`
  - *Reason:* §4.10. It is the lexical zone specific to this audience, parallel to ja `katakana-english`, zh `chinglish`, id `indo-english`. Sources are a reference page and a practitioner guide, not a study.
- **`aspect-tense`** («*nag-, ni-, mo-, na, pa*: gikan sa aspect ngadto sa tense»), after `perfect`, deck 10 «Istorya-istorya».
  - *Content:* one table from Bisaya forms to English choices. *nag-* → am / is / are + -ing (now) **or** was / were + -ing (then) **or** simple present (habit); *ni- / mi- / gi-* → past form; *mo- / mag-* → will / going to **or** simple present (habit); *na* → already / present perfect, but past form with a finished time; *pa* → still; *wala pa* → haven't … yet; *wala na* → no longer / not … anymore; *sukad* → since + present perfect.
  - Then the two rules Bisaya lacks: (1) **a time word does not replace the verb form** (*Gahapon niadto ko* → *Yesterday I went*); (2) **with no time word, English still has to choose a tense**, so read the situation.
  - *Practice that meets §7:* `I've already bought the tickets.`, `She's cooking an egg.`, `I haven't read the books yet.`, `He no longer works at the bank.`
  - *Reason:* §4.1 and §4.9. Verb forms are the largest counted error in both Visayan samples, the standing rule does not cover them (§7), and ko-en has no lesson that starts from aspect.

**Not added (considered):** a `he-she` lesson for *siya*: no measured source (§4.7); `be`, `third-s`, `object-have` and deck 22 carry it. A `sa` lesson: `prep` already is one.

**Totals:** 39 existing lessons (23 A1 + 9 A2 + 7 B1): **12 keep, 27 reweight**, 0 dropped, 0 English-side changes. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 24 and A2 to 10 (plus the shared `alphabet` at the start). All verdicts are [practitioner opinion] grounded in §4.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies, PAUSE sets):**

| ko-en | ceb-en |
|---|---|
| Minji (and other Korean names) | **Ana, Mark, Joy, Carlo** (alternates Grace, Miguel, Liza, Paolo). Chosen because they are ordinary in Cebu **and** the en-US voice reads them predictably [my inference]. Avoid for now: *Jun* (read "jun" /dʒʌn/), *Inday, Dodong* (titles as much as names), *Ma.* abbreviations. English-speaking characters keep English names |
| family names | *Reyes, Santos, Garcia, Cruz* (read easily by the voice); Cebuano surnames (*Cabahug, Osmeña*) only in lesson bodies |
| Seoul | **Cebu** / **Cebu City** |
| Busan | **Davao** (also Cagayan de Oro, Dumaguete, Tagbilaran, Iligan, General Santos) |
| Jeju / beach trips | **Bohol** (Panglao), also Moalboal, Bantayan, Siargao, Camiguin |
| Seoul National University | generic: «I'm a student in Cebu»; no real university name needed |
| kimchi, bibimbap | **lechon, adobo, puso** (hanging rice), **dried mangoes**, halo-halo; drinks *kape, iced tea, buko juice* |
| soju | *beer* or a soft drink; no change of topic needed |
| K-pop, K-drama | genres, not artists: *a song, a series, karaoke (videoke), a basketball game* |
| Gangnam | IT Park, Ayala, Colon Street (Cebu City) |
| Chuseok, Korean holidays | **Sinulog** (Cebu, January), *fiesta*, Christmas (from September on), Holy Week, All Souls' Day (*Kalag-kalag*), New Year [my inference; native check] |
| subway, KTX | *jeepney, bus, taxi, ferry, flight*; Cebu has no rail. Shared practice items with *subway* stay as they are |
| 존댓말 / 반말 | *Sir / Ma'am*, *Nong / Nang*, *Kuya / Ate*, *palihug* comparisons (`polite` lesson only) |
| won (₩) | **peso (₱)**: see numbers below |
| Korea / Korean (the learner's own country and language) | **the Philippines / Filipino** (nationality) / **Cebuano** (language). English strings say *Cebuano*; the card note says «Sa atoa: Bisaya» (owner's decision on *Cebuano* vs *Bisaya* pending, §11) |

**Deck localisation vs parity.** `parity.js` compares English deck targets per position, so each changed card needs a `decks` entry in `deviations.json` (one entry per deck, reason «localisation per profile ceb.md §9», as `tools/content/id/deviations.json` does). The eight ko-en cards concerned:

| Deck (position) | ko-en card | ceb-en card |
|---|---|---|
| 2, card 0 | My name is Minji. | My name is Ana. |
| 2, card 4 | I'm from Korea. | I'm from the Philippines. (note: *the*) |
| 2, card 5 | I live in Seoul. | I live in Cebu. |
| 3, card 12 | Do you speak Korean? | Do you speak Cebuano? |
| 10, card 6 | Have you been to Korea? | Have you been to the Philippines? |
| 12, card 8 | Your Korean is really good! | Your Cebuano is really good! |
| 14, card 0 | Hello, this is Minji. | Hello, this is Ana. |
| 16, card 15 | I need to contact the Korean embassy. | I need to contact the Philippine embassy. |

Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely.

**Pesos and numbers** (numbers lesson, shopping deck):
- ₱250 = *two hundred fifty pesos*; ₱1,500 = *one thousand five hundred pesos* / *fifteen hundred pesos*; ₱25,000 = *twenty-five thousand pesos*. Philippine and American usage both drop "and" (Wikipedia, *Philippine English*).
- Separators are the same as in American English (1,234.5), so there is no comma / point trap (checked with `Intl` for `ceb` and `en-PH`).
- The trap is the **number words**: Bisaya says prices, clock times and ages with Spanish numbers (*singkuwenta pesos, alas tres, traynta anyos*; owner-confirmed, `ceb-ko.md`). The lesson maps them to English once.
- Philippine habit to mention, not to forbid: reading ₱399 as *three nine nine* (Wikipedia); abroad say *three ninety-nine* or *three hundred ninety-nine*.
- Time: 12-hour clock with a.m. / p.m. in both countries.

**Checks and practice:**
- Korean proper nouns occur in shared English strings (in the ko-en pack: *Seoul* 25 times, *kimchi* 23, *Jeju* 21, *Busan* 18, *won* 11, *K-pop* 8). **Leave the English unchanged** (parity) and translate the Cebuano side literally (*Seoul, Busan, kimchi*); it reads as a learner talking about Korea, which suits an audience with many Korea-bound workers and K-drama fans (`ceb-ko.md` §2.1).
- Do not file per-item deviations to localise them. If the lead wants them localised later, use one bulk deviation with reason "localisation".

**Meanings that equal the English (Latin-script validator, `nativeScript: null`):** a card meaning, `{{ex}}` meaning, gloss or `p` identical to its English counterpart fails (case- and punctuation-insensitive).
- Cebu speech uses many English words unchanged (*bus, taxi, hotel, menu, email, OK, pizza, coffee shop*). Write a Cebuano phrase or a fuller gloss: «sakyanan nga bus», «mosakay og taxi», «hotel nga kapuy-an», «menu (lista sa pagkaon)», «email (sulat sa internet)», «Sige, OK».
- Prefer the established Cebuano spelling where one exists: *kape, tsa, bangko, ospital, doktor, estudyante, telepono, kompyuter, tiket, eroplano, trabaho, opisina* [house rule from `en-ceb.md`; each word needs the native check].
- Interjections and names: *Hi!* → «Hoy! / Uy!», *Bye!* → «Babay!», a proper noun alone needs a gloss («Cebu (siyudad)»).
- Content agents should self-check that every meaning contains at least one `cueTest` word or is a full Cebuano phrase.

**Traps for deck 22 and the `pinoy-english` lesson** (at least 20 cards; `note` says «Iningles sa Pinas» for a local word and «direktang hubad» for a calque):

| Said at home | Say abroad | Source |
|---|---|---|
| CR / comfort room | restroom, bathroom | Wikipedia vocabulary [curriculum convention] |
| open / close the light | turn on / turn off the light | Wikipedia; TalkDrill |
| brownout | power outage, blackout | Wikipedia vocabulary |
| ref | fridge, refrigerator | Wikipedia vocabulary |
| aircon | air conditioner, AC | Wikipedia vocabulary |
| rubber shoes | sneakers | Wikipedia vocabulary |
| What's your course? | What's your major? / What are you studying? | Wikipedia vocabulary |
| batchmate | classmate, someone from my year | Wikipedia vocabulary |
| It's so traffic. | The traffic is really bad. | Wikipedia vocabulary |
| I'll commute. | I'll take the bus / public transport. | Wikipedia vocabulary |
| load | prepaid credit, minutes | Wikipedia vocabulary |
| go down (from the jeepney) | get off | Wikipedia vocabulary |
| eat-all-you-can | all-you-can-eat | Wikipedia vocabulary |
| salvage (= kill) | *salvage* means save or recover | Wikipedia vocabulary; TalkDrill |
| My dialect is Bisaya. | My first language is Cebuano. | Wikipedia vocabulary; TalkDrill |
| For a while. (phone) | One moment, please. | TalkDrill [practitioner opinion] |
| Can you borrow me your pen? | Can you lend me your pen? | TalkDrill |
| fill up the form | fill out / fill in the form | TalkDrill; De Castro 2020 |
| based from | based on | TalkDrill; De Castro 2020 |
| result to | result in | TalkDrill |
| cope up with | cope with | TalkDrill |
| discuss about | discuss | TalkDrill |
| informations, equipments, furnitures | information, equipment, furniture | TalkDrill; Wikipedia |
| He is already not here. | He is no longer here. | TalkDrill |
| Until now, I have no reply. | I still have no reply. | TalkDrill |
| slang (= an American-sounding accent) | accent | TalkDrill |

**Deck names (FINAL).** Separator: «ug» (and), not "&" or "·". Sentence case. English loans only where `ui.json` already keeps them (*phrase, email, chat, idiom, slang, phrasal verb*).

| # | Cebuano name | Linked lesson or notes |
|---|---|---|
| 1 | **Pangumusta** | greetings; no lesson links in ko-en |
| 2 | **Pagpaila sa kaugalingon** | be, articles, present, third-s, object-have, perfect-2; three localised cards (above) |
| 3 | **Importanteng phrase 1** | polite; one localised card |
| 4 | **Importanteng phrase 2** | questions |
| 5 | **Direksyon ug sakyanan** | the |
| 6 | **Pag-order sa restawran** | countable |
| 7 | **Kapehan ug tindahan** | no lesson link in ko-en; *convenience store* glossed «tindahan nga abli 24 oras» |
| 8 | **Pagpamalit ug pagbayad** | plurals, adjectives, relative |
| 9 | **Numero, oras ug petsa** | prep, numbers |
| 10 | **Istorya-istorya** | small talk: it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing, **aspect-tense**; one localised card |
| 11 | **Pagbati ug reaksyon** | joining, past-continuous, conditionals. *Pagbati* is "feeling" in Cebuano ("greeting" in Tagalog): native check |
| 12 | **Pagdayeg ug pagkagusto** | compliments and liking; one localised card |
| 13 | **Trabaho ug email** | first-conditional, passive, email |
| 14 | **Tawag, text ug chat** | reported; chat abbreviations; one localised card |
| 15 | **Biyahe (airport ug hotel)** | perfect, articles-2 |
| 16 | **Ospital ug emerhensiya** | modals; one localised card |
| 17 | **Mga phrasal verb** | phrasal |
| 18 | **Bantayi ang paglitok** | pron |
| 19 | **Mga idiom sa Iningles** | idioms |
| 20 | **Salida, serye ug slang** | narrative |
| 21 | **Alpabeto** | alphabet (shared 21st deck; named by the alphabet brief's writer, proposal here) |
| 22 | **Mga lit-ag para sa Bisaya** | ceb-only, linked from `pinoy-english`; at least 20 cards from the table above; needs a `decks["count"]` deviation |

**Deck content changes** [practitioner opinion unless noted]:
- **Add deck 22** (table above, appended last).
- **Bantayi ang paglitok:** keep the shared pairs (fan / pan, very / berry, vote / boat, think / sink, three / tree are all on target). Add, in lesson bodies and deck 22 or `pron`-lesson rows only (never by changing shared targets): *ship / sheep, live / leave, full / fool, bad / bed / bud, Sue / zoo, bus / buzz, day / they, attract, ceremony*.
- **Trabaho ug email:** BPO and overseas-work English: *shift, team leader, client, deadline, resume, interview, contract, overtime*. Note *resume* (US) for *bio-data / CV*.
- **Biyahe:** departures from Mactan-Cebu (CEB) and Manila (MNL); immigration questions an overseas worker meets (*What is the purpose of your visit?*, *Who is your employer?*); tipping (expected in the US).
- **Istorya-istorya:** weather is a thin topic in the tropics; use food, family, work, traffic, the weekend, basketball, *fiesta*.
- **Tawag, text ug chat:** keep the English (*lol, btw, omg*); explain with what Bisaya chat does (*haha, hehe, char / charot, btw* as is) [native check].
- **Optional later deck:** «IELTS ug interview» (speaking-test and job-interview answers). Not required for launch.

## 10. Interface wording notes

**An interface dictionary for Cebuano already exists**: `tools/i18n/ceb/ui.json` (784 exact keys, 274 patterns) with `tools/i18n/ceb/NOTES.md`, written for the Cebuano → Korean course. It already translates the English-course keys (*Learn English, 5 minutes a day* → «Tun-i ang Iningles, 5 ka minuto matag adlaw»; *type it in English* → «i-type kini sa Iningles»). **This course reuses it unchanged except for the list at the end of this section.** Everything below quotes the existing wording; lesson prose must use the same words. [curriculum convention = the existing pack; its own author flags it as unchecked by a native speaker.]

**Register:** friendly and plain, the way a good Cebuano teacher explains: *ka / nimo / imong*, no *po*, no Tagalog (§2). Toasts are impersonal or address *ka*:
- «Sakto!» / «Dili pa sakto»
- «Nahuman ang leksyon. +25 XP»
- «Naabot na ang tumong. Padayon pa?»
- «Kaya nimo kini!»

**Buttons, menu items and tabs:** the plain Cebuano command or a short noun: «Sugod», «Padayon», «I-check», «Laktaw», «Balik», «Sunod», «Human», «Sulayi usab», «Usab», «Kabalo ko», «Sirad-i», «Kanselahon», «I-save». English app verbs take *i-* / *mo-* as Cebuanos write them (*i-type, i-tap, i-save, i-share, mo-sign in*). No *palihug* on buttons.

**Instructions in practice prompts** (same verb per item type): «Pilia ang sakto», «Han-aya ang mga pulong», «Pun-a ang blangko», «I-type ang Iningles», «Paminawa», «i-tap ang tubag». The explanation line is headed «Ngano: …» (pattern `Why: {x}`); hints «Hint: …».

**Counts: one translation per pattern, with *ka*.** Cebuano links a number to its noun with *ka* and does not pluralise the noun, so the same string is right for 1 and for 100. CLDR gives `ceb` the categories one / other (checked with `Intl.PluralRules('ceb')`), but both templates carry the same text, as the pack already does (`{n} card` and `{n} cards` → «{1} ka card»). Never write *mga* after a number.

| English pattern | Cebuano (as in `ui.json`) |
|---|---|
| `{n} cards` / `{n} card` | «{1} ka card» |
| `{n} cards due` | «{1} ka card nga i-review» |
| `{n} decks · {n} cards` | «{1} ka deck · {2} ka card» |
| `{n} days` / `{n} day` | «{1} ka adlaw» |
| `{n} XP total` | «{1} XP tanan» |
| `{n} XP to Level {n}` | «{1} XP pa sa Level {2}» |
| `Level {n} · {x}` | «Level {1} · {2}» |
| `card {n} of {n}` | «card {1} sa {2}» |
| `{n}% correct` | «{1}% sakto» |
| `{n} lessons` / `{n} words` / `{n} min` (if added) | «{1} ka leksyon» / «{1} ka pulong» / «{1} ka minuto» |

**Language-name slots.** Cebuano names need no case ending; a marker (*ang, sa, og*) before the name is enough, so a slot works anywhere: «Tun-i ang {x}», «i-type kini sa {x}». The names to fill it with, from NOTES: **Iningles** (English), **Binisaya** (Cebuano, as the language's own name in pickers), Koreano, Kinatsila, Hinapon, Tinagalog.
- Problem carried over from NOTES §5 item 2: `langName(code,'ceb')` asks `Intl.DisplayNames(['ceb'])`, which answers "English" and "Cebuano" in English (re-checked in Node for this profile). Until the lead adds the override map NOTES proposes, pattern strings with a language slot will show «Tun-i ang English». Not wrong for this audience, but inconsistent with «Iningles» in the fixed strings.
- In lesson prose: «sa Iningles», «sa Bisaya» (what speakers call the language; owner-confirmed in `ceb-ko.md`). `name.ceb` in profile.json is «Iningles».

**UI glossary** (use exactly; every row is the existing `ui.json` wording unless marked *new*):

| English | Cebuano | Note |
|---|---|---|
| lesson / lessons | leksyon / mga leksyon | tab «Leksyon»; «Sunod nga leksyon» |
| practice | praktis | |
| review (SRS) | Review; verb *i-review* | kept in English in the pack |
| deck / decks | deck / mga deck | |
| card / cards | card / mga card | «{1} ka card» |
| drill / drills | drill / mga drill | tab: see changes |
| quiz | quiz | |
| streak | streak; «adlaw nga streak» | |
| hint | hint | «Hint:» |
| explanation (`why`) | «Ngano: {1}» | |
| correct / not quite | Sakto! / Dili pa sakto | never *husto, tama* |
| answer | tubag | «Imong tubag» |
| try again / again | Sulayi usab / Usab | *Usba* means "change"; never use it for "again" (NOTES) |
| got it | Kabalo ko | |
| check | I-check | |
| fill the gap | Pun-a ang blangko | `mcBlankCue` « Unsay sakto sa blangko?» uses the same word |
| put the words in order | Han-aya ang mga pulong | |
| meaning / note / example | kahulogan / nota / pananglitan | *kahulogan* with *o* (root *hulog*); NOTES §2 prints *kahulugan* once, a slip |
| word / words | pulong / mga pulong | |
| pronunciation; aid toggle | paglitok; «Ipakita ang paglitok sa praktis», «Aa paglitok: on» | the IPA line is "ang paglitok" in prose; never *romanization* in this course |
| voice, sound / speed | tingog / katulin; hinay, paspas | |
| goal / daily goal | tumong / Tumong sa adlaw | |
| level / XP | Level / XP | |
| progress | pag-uswag | tab: see changes |
| feedback | Feedback; «Ipadala ang feedback» | |
| language / course | pinulongan / kurso | |
| weak spots | Huyang nga bahin | |
| English (the language) | Iningles | |
| typed sentence (*new*, if a label is needed) | I-type ang sentence | follows «I-type ang Iningles» |
| multiple choice (*new*, if a label is needed) | Pilia ang sakto | reuse the existing string |

**Numbers, dates and time** (`Intl` with `ceb`, checked locally in Node for this profile):
- Numbers: «1,234,567.5». Currency: «₱25,000.00». Percent: «85%».
- Dates: long «Nobyembre 23, 2026», short «11/23/26» (month first, as in the US). Weekdays capitalised («Lunes»).
- Time: 12-hour, «9:05 PM».
- Do not hand-format; these equal `en-PH` except for the month and weekday names.

**Bottom nav at 390px: seven labels, each at most 8 characters.**

| English | Cebuano | Chars | Status |
|---|---|---|---|
| Today | **Karon** | 5 | as in `ui.json` |
| Practice | **Praktis** | 7 | as in `ui.json` |
| Review | **Review** | 6 | as in `ui.json` |
| Lessons | **Leksyon** | 7 | as in `ui.json` |
| Drills | **Drill** | 5 | **change**: `ui.json` has «Mga drill» (9) |
| Progress | **Uswag** | 5 | **change**: `ui.json` has «Pag-uswag» (9). Fallback «Progreso» (8) if the reviewer finds «Uswag» odd as a noun |
| Feedback | **Feedback** | 8 | as in `ui.json` |

(The advanced "Read" tab stays «Basa», 4.)

**What should change in the existing dictionary and notes** (for the lead and the interface writer; this profile edits neither file):
1. **Progress tab** «Pag-uswag» is 9 characters: over the 8-character cap. Use «Uswag» on the tab; keep «pag-uswag» in sentences («Pag-uswag sa Iningles»).
2. **Drills label** «Mga drill» is 9 characters: use «Drill» where the key is the tab label; «{1}/{2} · Mga drill» can stay.
3. **The pack now serves two courses.** NOTES says "The only course this interface serves is ceb-ko" and that the *Iningles* keys "are only shown in an English course, which Cebuano speakers do not have". Both sentences are out of date once `ceb-en` ships.
4. **23 exact keys are worded for Korean** (*Koreano, Hangul, romanization*: «Sugod sa Koreano», «Ipakita ang romanization sa praktis», «I-type ang Koreano…»). keys.json marks them as legacy wording that an English course should render as English / pronunciation. One pack cannot do both, so the lead must choose: (a) leave the pack literal and confirm that every one of those 23 keys is unreachable in `ceb-en` (the English-worded twins exist: *Pronunciation hint*, *Type the English*, *Show pronunciation in practice*); or (b) move the Korean wording into the `ceb-ko` course override (`tools/halves/native/ceb/ko/ui.json`) and make the pack neutral. This profile assumes (a) and asks for a grep of the built `ceb-en` app for *Koreano, Hangul, romanization*.
5. **Language names** (NOTES §5 item 2): add the override map so `{x}` slots give «Iningles» and «Binisaya», not "English" and "Cebuano".
6. **Grammar-term list.** NOTES §1 lists the Korean-course terms (*particle, counter, honorific, 요-form, romanization, block*). Add this profile's §3 list for English (*article, plural, be verb, helping verb, tense, simple past tense, subject-verb agreement, preposition*), so that both courses' terms are known loanwords for the linter.
7. **Spelling slip in NOTES §2:** *kahulugan* → *kahulogan* (the pack itself has only *kahulogan*).
8. **Share and onboarding strings** with 🇰🇷 have 🇺🇸 twins already («Nagtuon og Iningles 5 ka minuto matag adlaw sa Lang App 🇺🇸»); for this audience the flag is a small question for the owner (US flag for "English"), no change proposed.
9. **Roadmap titles:** `tools/i18n/ceb/roadmap.json` has only the 40 Korean-roadmap titles; the English roadmap titles (including *The alphabet and spelling aloud*) are empty and fall back to English. They need filling when the course is built, in this profile's terms.

**The linter's forbidden list** (no apostrophes or accents; none of *kung, po, hindi, ng, mu-*) applies to course prose as well. It does not check *og / ug*, *ni- / mi-*, root vowels or *l*-dropped forms (*wa, di, bay*); those need a word-list grep by the content agents.

## 11. Gaps and unverified claims

- **No native check.** Every Cebuano word, sentence, gloss, term choice and deck name in this file is by a non-speaker. Check first: the three voice samples (§2); the `why` and prompt frames (§7), especially «Unsay sakto sa blangko?», «gamita kining mga pulong», «Hain ang sayop?», «maihap / dili maihap»; all 22 deck names (§9), especially *Pangumusta, Istorya-istorya, Pagbati ug reaksyon, Pagdayeg ug pagkagusto, Salida, Alpabeto, restawran, emerhensiya*; the tab «Uswag»; the Bisaya sound anchors in §6; *Babay!, Uy!, kapuy-an*; whether *Nakakaon na ka?* and *Asa ka padulong?* are felt as greetings; the holiday list.
- **English terms as keywords.** Using *article* and *plural* untranslated follows the app's house rule, not evidence about how Cebu teachers explain English in Bisaya. No Cebuano-medium English lesson or textbook was opened.
- **Thin, small, descriptive research.**
  - Manto & Hermosilla 2025: 28 texts, one school, no counts; the explanations are the authors' and partly Grammarly's; some "corrections" are questionable (singular *they* → *he*).
  - Momongan et al. 2023: 35 English majors, no counts or rates, some inconsistent transcriptions; the participants are better at English than this course's weakest learners.
  - Abansa et al. 2026: 26 students, 50 errors, four morphemes only; first language not stated (Caraga).
  - Nueva 2016: counts students, not errors; first language not stated (Bukidnon); a misprinted percentage.
  - Padilla & Padilla 2021: **Hiligaynon**, not Cebuano; Grade 7; the authors blame English-internal causes for most errors.
  - Saavedra & Coronel 2022: only 6 Visayan speakers, one rater, word lists.
  - Tulabut et al. 2018: Pampanga, not Visayan; only the abstract and first pages were read.
  - **No study gives error rates for adult Cebuano speakers, for speech (grammar), or by proficiency level.**
- **No measured source for:** he / she confusion from *siya*; F / P and V / B among Cebuano speakers (described for Philippine English generally; absent in the one Cebuano sample); *e / i* and *o / u* interchange in spoken English beyond Momongan et al.'s examples; unaspirated stops being misheard; do-support errors; passive over-use; the *na / pa* calques; borrow / lend. All tagged [practitioner opinion].
- **Pages that could not be opened** (HTTP 403 or binary), so they are **not** in Sources:
  - the DLSU 2016 paper on basilectal Philippine English of Region 7 Cebuano speakers (search snippet: "only three vowels"), and Flores 2011 on the same topic (repository listing only, no abstract): the two most relevant phonology sources;
  - the DLSU 2015 paper and Manila Times column on *based from / result to*; Bautista 2008 was seen as an abstract page only and names no features;
  - the ABS-CBN (2025) and Cebu Daily News (2024) reports on the medium of instruction: RA 12027 is cited through `ceb-ko.md`, which opened it on 2026-11-22;
  - a Philippine study of IPA teaching in Grade 12 and a study of teachers' phonetics training (search results only);
  - IDP pages on IELTS / OET for nurses (search results only).
- **Local files missing:** `reports/Grammar learning order research.md` is not in this worktree (skipped; evidence labels follow `id.md`); `docs/profiles/OTHERS.md` has no Cebuano or Philippine section.
- **Pronunciation aid.**
  - No study compares IPA, respelling and no aid for Filipino learners; **IPA literacy among adult Cebuano speakers is unknown and probably low**. If the reviewer cannot read the worked examples after the key table, the fallback is a respelling built like id's (doubled vowels, é / è), which would need its own key, pattern and native testing.
  - OALD was not fetched; the symbol values are taken from `zh.md` §6 and `tools/content/zh/PRON-RULES.md`.
  - The name transcriptions (*Cebu, Cebuano, Davao, Bohol, Ana, Carlo*) are guesses at the en-US voice; confirm against the audio clips. *Davao* and *Ana* are the least certain.
- **Philippine English line (§2).** Which forms to accept, flag or correct is this profile's judgement. De Castro 2020 calls the particle swaps an emerging feature; the course still corrects them because exam and overseas readers will mark them.
- **EF EPI.** Self-selected online test-takers, no sample size. The sheet opened is at a `/2026/` URL with charts to 2026 but a footer naming the 2025 edition; a search result quoted different figures (569, rank 28) for another edition. Use the figures as orders of magnitude.
- **Learner profile.** Years and medium of schooling are via `ceb-ko.md` and one sentence in Padilla & Padilla, not from a DepEd document. The IELTS note is one press report. Nothing was found on Cebuano-speaking adults who self-study English with an app.
- **Standing rule fit.** Articles and plurals are not the top counted errors (§7); kept for parity. A post-launch switch to a verb-form kind is flagged.
- **Interface.** «Uswag» and «Drill» are proposals; the 390px widths were not rendered. Whether the 23 Korean-worded keys are unreachable in `ceb-en` was not tested.
- **cueTest coverage.** Tested against 2,752 ko-en strings (0 hits) and 15 sample prompts (15 hits). Writers' real prompts may still miss the list; the validator will flag them. Localised English strings containing *Cebuano* or *Bisaya* do not match it by design.
- **Check note.** `ceb.profile.json` parses as JSON; its four regexes (`pronPattern`, `pronScript`, `standingRule.keywords`, `labels.cueTest`) compile in Node; `pronPattern` is string-identical to `tools/content/zh/profile.json`; the 30 transcriptions of §6 (22 table rows) pass `pronPattern` and `pronScript` and differ from their English; 8 malformed lines are rejected; the 7 sample `why` lines hit the keyword regex and the 3 counter-examples do not.
- **Not researched:** Mindanao varieties (Davao, Cagayan de Oro) and their Tagalog mixing, Boholano and Leyte speech, Hiligaynon and Waray speakers who might use this course, and children.

## Sources

Opened for this profile (2026-11-23):
- [Manto, J. M. & Hermosilla, J. (2025). Cebuano-Visayan influence in English language acquisition: turning challenges into opportunities. *HCMCOUJS – Social Sciences* 16(1), 88–106 (full text)](https://vjol.info.vn/DHMHCM-KHXH/article/download/136561/111679/) · [article page](https://journalofscience.ou.edu.vn/index.php/soci-en/article/view/3488/0)
- [Momongan, C. P., Sanchez, S., Viray, H. M. & Ramos, A. L. (2023). Influence of phonological errors in English academic discourse of Cebuano-Visayan learners. *Journal of World Englishes and Educational Practices* 5(1), 96–105 (full text)](https://al-kindipublisher.com/index.php/jweep/article/download/4767/4149/12592)
- [Abansa, G., Pitogo, P., Guitguiten, R., Roma, S. B., Villa, A. & Alda, R. (2026). Analysis of inflectional morpheme use in the written compositions of pre-service teachers. *Interdisciplinary Research Review* 21(4), 35–43 (full text)](https://ph02.tci-thaijo.org/index.php/jtir/article/download/265942/174427/1046817)
- [Nueva, J. C. (2016). Students' writing needs: basis for language intervention program. *CMU Journal of Science* 20(2), 30–43 (full text)](https://js.cmu.edu.ph/dev/uploads/Students_Writing_Needs_Basis_for_Language.pdf)
- [Padilla, J. E. & Padilla, C. A. (2021). Morpho-syntactic error analysis in written compositions of MTB-MLE policy students. *International Journal of Social Sciences & Educational Studies* 8(2), 39–52 (Hiligaynon L1; full text)](https://ijsses.tiu.edu.iq/index.php/ijsses/article/download/232/220/426)
- [Saavedra, J. L. (2022). Pronunciation of English words with /th/ sounds among senior high school learners. PACLIC 36 (full text)](https://aclanthology.org/2022.paclic-1.70.pdf)
- [Tulabut, R. J., Guzman, R. V. et al. (2018). Common errors in prepositions committed by Grade 9 students. *TESOL International Journal* 13(3), 113– (Pampanga; abstract and opening pages)](https://files.eric.ed.gov/fulltext/EJ1247198.pdf)
- [De Castro, G. L. (2020). Same-verb different-particle phrasal verbs in Philippine English. *Asian Journal of English Language Studies* 8, 223– (abstract, introduction and examples)](https://ajels.ust.edu.ph/wp-content/uploads/2022/07/9-Same-verb-different-particle-phrasal-verbs-in-Philippine-English.pdf)
- [Lesho, M. (2018). Philippine English (Metro Manila acrolect). *Journal of the International Phonetic Association* 48(3), 357–370](https://www.cambridge.org/core/product/F041BD5DCF9DC4B66F822D30F784EF82/core-reader)
- [Bautista, M. L. S. (2008). Investigating the grammatical features of Philippine English (repository abstract page only)](https://animorepository.dlsu.edu.ph/faculty_research/552)
- [Wikipedia: Philippine English (first 100,000 characters)](https://en.wikipedia.org/wiki/Philippine_English)
- [Wikipedia: Philippine English vocabulary (first 100,000 characters)](https://en.wikipedia.org/wiki/Philippine_English_vocabulary)
- [Wikipedia: Cebuano language (first 100,000 characters)](https://en.wikipedia.org/wiki/Cebuano_language)
- [Wikipedia: Cebuano grammar](https://en.wikipedia.org/wiki/Cebuano_grammar)
- [EF EPI fact sheet, Philippines](https://www.ef.com/assetscdn/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-philippines-english.pdf)
- [TalkDrill Team (2026). English traps for Bisaya and Ilocano speakers (Civil Service Exam guide)](https://www.talkdrill.com/blog/exams/philippines-civil-service-exam/english-traps-for-bisaya-and-ilocano-speakers/)
- ["Common Language Errors" (Filipino-American pupils; unsigned teacher-education page hosted at Stanford)](https://web.stanford.edu/~hakuta/www/archives/syllabi/E_CLAD/sfusd_cult_03/amy_leigh/amy_leigh/languageerrors.html)
- [Untalan, S. (2026). British Council: more skilled workers than nurses taking IELTS for OFW jobs. GMA News Online](https://www.gmanetwork.com/news/pinoyabroad/dispatch/996711/british-council-more-skilled-workers-than-nurses-taking-ielts-for-ofw-jobs/story/)
- [Quibranza, L. A. III (2026). Bisaya or English? Words Cebuanos use without even thinking. SunStar Cebu](https://www.sunstar.com.ph/cebu/bisaya-or-english-words-cebuanos-use-without-even-thinking)
- Repository listing seen, no content: [Flores, E. R. (2011). An exploratory study of the phonological features of basilectal Philippine English: a case of some Cebuano speakers](https://animorepository.dlsu.edu.ph/faculty_research/5084) (used only in §11).

Local project files read: `docs/briefs/profile-ko-based.md`; `docs/profiles/id.md` (model, read in full), `zh.md` §6, `vi.md` §6, `en-ceb.md` §1–2 (house spelling, register, sources there), `ceb-ko.md` §1–5, §9, §11 and its owner-confirmed notes; `docs/profiles/OTHERS.md` (headings; no Cebuano section); `docs/PIPELINE.md` §3, §5, §6; `docs/PHASE2-BRIEF.md` (last section); `docs/briefs/alphabet-lang.md` (opening); `tools/content/lib.js` (ORDER), `tools/content/validate.js` (standing rule, pron checks), `tools/content/{ko,zh,vi,id}/profile.json`, `tools/content/zh/PRON-RULES.md`, `tools/content/id/PRON-RULES.md`, `tools/content/id/deviations.json`; `tools/i18n/ceb/ui.json` and `NOTES.md`; `packs/course-ko-en.js` (deck cards, Korean references, cueTest run), `packs/course-zh-en.js` (IPA rows), `packs/course-id-en.js` (lesson → deck links). `Intl` checks in local Node for `ceb` number, currency, date, time and plural rules and for `Intl.DisplayNames(['ceb'])`. Not read in full: `docs/PILOT-SPEC.md`, `docs/PRACTICE-SPEC.md` (their rules are taken as restated in `id.md` and PIPELINE).
