# White Hmong speakers learning English: course profile

Course `hmn-en`. Audience: adult speakers of **White Hmong (Hmoob Dawb)**, mainly in the US Hmong community, plus speakers in Laos and Thailand.

- **What is in Hmong and what in English.** All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **White Hmong written in the RPA** (Romanized Popular Alphabet, `tools/hmong/RPA.md`), with the English words the community actually uses. Answers and examples are in English.
- **Codes.** The HTML language tag and the app code are both **`hmn`** (profile.json `native: "hmn"`, pack `course-hmn-en`, interface pack `i18n-hmn`). Note that `hmn` is the ISO 639-2/3 *macrolanguage* code. The ISO code for White Hmong (Hmong Daw) is `mww`, and Wiktionary files it under `mww` (W-KK). The app keeps `hmn`, as the brief says. The course blurb names the variety ("Hmoob Dawb").
- **Scaffolding.** The course is scaffolded from the **Korean-speakers' course** (`ko-en`: 40 lesson ids in `lib.js` `ORDER`, standing rule `article-plural`), as zh, vi, id and kn are, because Hmong has no articles and no plural ending. The structurally closest finished course is **Vietnamese** (`docs/profiles/vi.md`). Like Hmong, Vietnamese is a tonal, analytic, classifier language with adjectives after the noun and a Latin-script writing system. This profile reuses vi's decisions where the facts are the same, and its section numbering follows `docs/profiles/kn.md`.

Evidence labels:
- **[source id]**: an opened source; ids are in `tools/hmong/SOURCES.md`.
- **[inference]**: this profile's own reasoning from the sources.
- **[native check]**: a statement about Hmong that a native White Hmong reader must confirm before writers copy it. **The author is not a Hmong speaker.** Every Hmong *word* in this file is in `tools/hmong/GLOSSARY.tsv`, which cites a source per row. A script checked this. The exceptions are flagged where used: *hloov*, *kom*, *suab*, *tsiaj ntawv* (NEW-WORDS candidates) and *lawd*, *nkees*, *ntsab* (discussed as unattested). Every Hmong phrase or sentence that combines glossary words is **[native check] as a whole**.

How sources were read: all web pages went through a summarising fetch tool, and direct downloads were refused by the session proxy (SOURCES.md, first paragraph). So spellings are attested, but glosses are only approximately attested.

## 1. Summary (10 lines max)

- **Register:** American English (`en-US`, the same English strings as `ko-en`). Hmong explanations address the learner as **koj** (singular "you"). Hmong verbs do not inflect, so buttons are bare verbs (Nyeem, Sau, Mloog). Grammar terms with no settled Hmong word stay **in English** (*article, plural, past tense*), never coined.
- **Who:** about 360,000 Hmong Americans (2023). 31% are foreign-born, and 43% of immigrants (vs 85% of the US-born) are English-proficient [PEW]. The core learner is an immigrant adult or elder; US-born heritage speakers mostly need English less than they need Hmong.
- **Top error zones:** final consonants, clusters and the -s / -ed endings [MCC: 15 adult learners]; tense not marked [BIL, MCSD]; plural -s [BIL, MCSD]; articles; **he / she / it and him / her** (Hmong *nws* covers all of them, with no case change) [BIL]; adjective after the noun (`dress blue`) [BIL, MCSD]; questions without inversion (*puas*); th, z, r, sh, j sounds [BIL, MCSD].
- **Pronunciation aid: IPA, required** (`"pron": "required"`, vi's `pronPattern`). An RPA respelling is impossible: in RPA a final consonant letter is a tone mark, so English *bus* written `bas` would be read as *ba* with a low tone (§6).
- **Standing rule: `article-plural`**, keywords `article|plural` (flags `i`). The keywords are the English terms that the Hmong `why` lines keep (§3, §7).
- **Curriculum:** all 40 shared ids kept. Add 2: **`final-sounds`** (English side from vi-en, after `third-s`) and **`he-she-it`** (new, after `object-have`) (§8).
- **Blocking caveat:** no Hmong text-to-speech exists in the sources checked (§2, §11). Hmong explanations are text-only, which the least literate learners (the elders) cannot use. **Do not release without a native reader** (§11).

## 2. Variant, register and voice

**English variant: American English.** `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The US is where most learners live [PEW]. Use US spelling and vocabulary throughout.

**Hmong variant: White Hmong in RPA, US usage.**
- **Why White.** RPA "mostly reflects" White Hmong, which was "chosen as the standard variant", and "Green speakers are more likely to learn White" [RPAW, WPH]. White and Green Hmong (Mong Leeg) are mutually intelligible, "comparable to British and American English" (the CDC, as quoted by WPH). About 30% of words differ [JXD].
- **Green Hmong speakers will use this course too.** The interface must not mock or "correct" Green forms. A deck note may say «Hmoob Leeg: …» where a common word differs (dev / dlev, nej / mej, lawv / puab [JXD]). See §9.
- **Spelling:** syllable-spaced, as `GLOSSARY.tsv` column 1 (`me nyuam`, `poj niam`, `hauj lwm`). Joined spellings are real variants (`menyuam`, `pojniam`, `haujlwm`; RPA.md §6), but the course writes one form.

**Register: koj (singular you) for the learner** [inference + native check].
- **What was found.**
  - The Minnesota Department of Health's Hmong guide addresses the reader with *koj* («kws kho mob koj ib txwm ntsib», your primary care provider) [MDH].
  - Phrase sources use *koj* for "you" in polite questions to a stranger («Koj lub npe hu li cas?», «Koj tuaj qhov twg tuaj?») [OMN, BSL, FG].
  - **No opened source discusses a polite vs familiar "you".** The pronoun set is kuv / koj / nws (singular); wb / neb / nkawd (dual); peb / nej / lawv (plural) [WHL, W-KK].
  - So unlike Kannada, Hmong has no "respect plural" for one person in the sources read. **Decision: koj** everywhere.
- **Politeness comes from words, not verb forms:**
  - *thov* "please; to request" (thov hais dua = please say it again) [OMN];
  - the polite request tag *… puas tau?* "may I / could you?" (hais dua puas tau? = could you say it again?) [BSL];
  - the softening final particle *os*, which "sounds good to Hmong ears" [WHL] (Pab os! [WV], Kuv tsis nkag siab, thov hais dua os [BSL]).
- **Kinship terms as address.**
  - Hmong speakers address relatives and older people with kinship terms. Wiktionary records *niam laus* and *niam hluas* as friendly address between women (older / younger) [W-KK]. Whitelock records greetings that begin with the name, «Paj, koj tuaj» [WHL].
  - **Rule for translations:** keep a kinship word where the English line has one (*Grandma* → *pog* or *niam tais* by side; §9). Never use a kinship term to address the learner.
- **Voice of the Hmong text.**
  - Plain, warm, short sentences, the register of MDH's guide and EnglishConnect [MDH, ECM].
  - Use the English word where US Hmong texts keep it: *hnub Monday*, *mob cancer* [PGE, MNC, MDH].
  - Use the Hmong word where it is everyday: lus Askiv, lo lus, lo lus nug, teb, nyeem, sau, mloog, kawm, xeem, txhais lus.
- **Never:**
  - Green-only spellings in interface text (dl-, aa);
  - coined grammar terms;
  - Lao or Thai script;
  - jokes about clan, dialect or religion (§9);
  - more than one exclamation mark per screen.

**Speaker gender in translations.**
- **Verbs never vary.** Hmong verbs do not inflect for person, number or gender [WPH: "Verbs do not inflect"]. So "I'm tired" needs no gender choice.
- **Kinship words do depend on the speaker's sex.** A man calls his brothers *kwv* (younger) and *tij laug* (older) and his sister *muam*. A woman calls her brother *nus* and her sister *viv ncaus* [WHL, GYL].
- **Rule:** when an English line says *my brother / my sister* and the speaker's sex is not fixed by the scene, translate with a neutral wording if one exists (*nus muag* "siblings" [ECM], or the person's name). Otherwise fix the speaker in the dialogue (Dialogue A = Mai, a woman) and pick the matching term. Mark each such line [native check].

**Third person.**
- *nws* = he, she or it [WHL, W-KK]. A Hmong prompt with *nws* cannot tell the learner whether to type *he*, *she* or *it*. **Cue rule** (§10 of the writer conventions below): add «(txiv neej)» / «(poj niam)» / «(tsiaj)» or a name.
- *lawv* = they (3+), *nkawd* = they two [BSL, W-KK].

**Error marks:** **✗** wrong, **✓** right: `I teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice [native check, built from glossary words]:
- «Lus Hmoob tsis muaj article. Lus Askiv muaj a, an thiab the.»
- «Hauv lus Askiv, ob tug dev = two dogs: plural -s.»
- «Nag hmo kuv mus tom khw = Yesterday I went to the store. Hauv lus Askiv, go hloov ua went.» (*hloov* "change" is NOT in the glossary: NEW-WORDS candidate.)

**Typography.**
- **Script.** Hmong in RPA, ASCII letters only, no diacritics (RPA.md §5). English in plain Latin letters; English words inside Hmong text are not quoted in plain-text fields and are `<b>` in lesson HTML.
- **No respelling of English in RPA** anywhere, not even in notes (§6).
- **Capitals:** sentence-initial; peoples, languages and places (Hmoob, lus Askiv, Amelika, Nplog teb, Thaib teb) [OMN, BSX, WHL]. Write `Hmoob`, not `HMoob`; mention HMoob once in a lesson note [HMB].
- **Punctuation:** Western (. , ? !), as all opened Hmong sentence sources use.
- **Digits:** Western digits. Clock times as US agencies write them: «7 sawv ntxov txog 6 tsaus ntuj» (7 a.m. to 6 p.m.) [PGE].
- **Reduplication:** write the word twice (kheej kheej) [W-SW]; never 7, 2 or ๆ [LY].

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.

**What exists.**
- **No opened source gives a set of Hmong grammar terms** like Kannada school grammar.
- The one Hmong English-teaching text read, the EnglishConnect appendix [ECM], uses **descriptive phrases**, not terms:

| ECM phrase | English term |
|---|---|
| tej lus piav txog tej yam yus ua | adjectives |
| tej lus piav yus ua zoo li cas | adverbs |
| tej lus txog khoom los yog chaw | nouns |
| tej lus txog kev nyob qhov twg | prepositions |
| tej lus pauv lub npe | pronouns |
| tej lus txog kev ua li cas | verbs |

- The RPA tone vocabulary has *cim* "mark", with *Cim Siab, Cim Kuv, Cim Neeg, Cim Niam* [JXT] and «cim ua = the flat tone, cim siab = the -b tone» (UW page, SOURCES UWC group).
- A course built on long descriptive phrases would bloat every `why`.

**Decision.**
- **Keep the English grammar term in Latin letters**, introduced once with ECM's Hmong phrase in brackets, then used alone.
- **Where no attested Hmong word exists, the English word stays and the profile says so. Never coin.**
- **Standing-rule keywords:** `article`, `plural` (§7).

| English term | Use in Hmong text | Source / status |
|---|---|---|
| article | **article** (a, an, the) | English kept: no Hmong term found. Standing-rule keyword |
| plural / singular | **plural** / singular | English kept. Hmong *cov* (plural classifier [UWC, BS1011]) is mentioned as the nearest Hmong idea, never as the term |
| noun | noun (tej lus txog khoom los yog chaw) | ECM phrase once |
| verb | verb (tej lus txog kev ua li cas) | ECM phrase once |
| adjective | adjective (tej lus piav txog tej yam yus ua) | ECM phrase once |
| adverb | adverb (tej lus piav yus ua zoo li cas) | ECM phrase once |
| pronoun | pronoun (tej lus pauv lub npe) | ECM phrase once |
| preposition | preposition (tej lus txog kev nyob qhov twg) | ECM phrase once |
| tense; past / present / future tense | tense; past tense, present tense, future | English kept. Contrast with the Hmong time words *nag hmo, hnub no, tag kis* and markers *tau, lawm, yuav, tab tom* [WNT, WPH] |
| Simple Present, Present Perfect … | English names, as kn | English kept |
| -s, -ed, -ing | -s, -ed, -ing | |
| be (am, is, are) | be (am, is, are) | Contrast with *yog* (+ noun) and *nyob* (place, state) [UWB] |
| classifier (Hmong) | classifier | English kept; examples *tus, lub, daim, rab, txoj, phau, zaj, tsob, nkawm* [UWC, W-KK] |
| word | **lo lus** | W-KK, BSL |
| question | **lo lus nug** | BSL (W-KK writes *lo lus noog*: spelling variant, native check) |
| answer (v.) | **teb** | BS1011 |
| sentence | sentence | English kept: no attested Hmong word [native check: is *kab lus* usual?] |
| English (language) | **lus Askiv** | OMN |
| Hmong (language) | **lus Hmoob** | WHL, OMN |
| translate | **txhais lus** | W-KK |
| interpreter | **neeg txhais lus** | MDH |
| read / write / listen / speak | **nyeem / sau / mloog / hais lus** | W-KK, WHL |
| learn, study | **kawm** | W-KK |
| test (v.) | **xeem** | W-KK |
| tone mark | **cim** | JXT |
| pronunciation, stress, IPA | pronunciation, stress, IPA | English kept |
| mistake | **txhaum** (to make a mistake) | BSL; `why` lines use «tsis yog» (not right) for ✗ [inference] |
| correct | **raug**, **yog** | W-KK |
| question tag | question tag | English kept; nearest Hmong idea: *… yam?* "isn't it?" [WHL] |

**UI words with no Hmong term: keep English.** streak, sync, quiz, deck, card, level, settings, email, password, sign in, app, online, audio. Where an attested everyday word exists, use it instead:
- Today → hnub no [WHL]
- Lessons → keep "lessons" [native check: *zaj* "chapter" is attested in WHL, but not as "lesson"]
- Progress → English kept
- option → txoj kev xaiv [PGE]

Interface details are in §10.

## 4. Persistent error zones

The ranking is evidence × frequency × how often the point recurs across lessons. **It is this profile's inference:** no opened source counts errors by type for Hmong speakers except McCurdy's 15-learner study of final consonants [MCC]. Format: error ✗ → correction ✓. Every Hmong contrast line is [inference] from the glossary and grammar sources, and is [native check].

**Main opened evidence:**
- [MCC] McCurdy 2010 (Hamline MAESL thesis abstract): 15 adult Hmong ESL learners; spontaneous speech, a sentence list and a word list. Syllable-final consonant simplification: /d/, /g/, /v/ deleted most; /ð/, /ʒ/, /θ/ replaced most; stops deleted most as a class and affricates replaced most as a class; results varied by task.
- [BIL] Bilinguistics (speech-therapy page citing Ratliff 2010 and Tatman 2004). English consonants not shared with Hmong: /b, g, z, dʒ, ð, θ, ʃ, ʒ, tʃ, ɹ, w/. English vowels not shared: /o, ʊ, ɛ, ɪ, æ, ʌ, ə, ɚ/. Grammar contrasts with example errors: `He hit he*` (same pronoun form for subject and object), `Four dog*`, `Dress blue*`, `Sally jump*`, `bark dog*` (gerund). It cites Briggs 1984 for cluster reduction as a frequent process.
- [MCSD] Multicultural CSD page (cites Kohnert 2007): "th" sounds and /dʒ/ have no Hmong equivalent; "most Hmong words do not end in consonants"; multisyllabic words are hard; tense, plurals, possessives and pronouns are hard; adjectives follow nouns.
- Hmong grammar facts: WHL, WPH, WNT, W-KK.

1. **Final consonants, clusters and the endings that carry grammar.**
   - *Examples:* `book → boo`, `bag → ba`, `five → fi` (deletion of /d g v/, [MCC]) / `asked → ask` / `two dog` (an -s not heard or not said) / `I work-ed` / `this → dis`, `measure → messer` (replacement of /ð ʒ θ/, [MCC]).
   - *Why:* a Hmong syllable ends in a vowel; the final letter in RPA is a tone mark, not a sound [RPAW]. So every English coda is new, and the -s and -ed endings, which are codas, disappear with it.
   - **Content consequence:** the added lesson `final-sounds` (§8); the IPA aid shows every final consonant; -s / -ed are taught as sounds (/s z ɪz/, /t d ɪd/) in `plurals`, `third-s` and `past`; and deck 18 gets Hmong-specific minimal pairs.
2. **Tense is not marked on the verb.**
   - *Examples:* `Yesterday I go to the store. ✗ → Yesterday I went to the store. ✓` (Hmong: «Nag hmo kuv mus tom khw», with no change to *mus* [WPH]) / `Sally jump ✗ → Sally jumped ✓` [BIL] / `I already eat. ✗ → I already ate. / I've already eaten. ✓` (Hmong: «Kuv noj mov lawm» [WPH]).
   - *Why:* "Verbs do not inflect. Time is shown with temporal adverbs" [WPH]. Aspect markers are optional and sit outside the verb: *tau* (attainment), *lawm* (completion), *yuav* (future / intend), *tab tom* (in progress), *twb* (already), *tseem* (still), *nyuam qhuav* (just) [WNT, WPH].
   - **Content consequence:** reweight `present`, `past`, `irregular-past`, `tense`, `perfect`, `perfect-2`, `continuous`, `will`, `going-to`. Teach each English form against the Hmong marker it most resembles, and warn that the match is loose: *lawm* is not always the perfect, and *tab tom* is not always the continuous [inference].
3. **Plural -s.**
   - *Examples:* `four dog ✗ → four dogs ✓` [BIL] / `many student ✗` / `two book ✗`.
   - *Why:* Hmong nouns take no plural ending. A number goes before the classifier («ob tug dev» = two CLF dog), and *cov* marks a group, replacing the classifier [BIL, UWC, BS1011].
   - **Content consequence:** the plural half of the standing rule is earned (§7); reweight `plurals`, `countable`.
4. **Articles: omission, and *one* for *a*.**
   - *Examples:* `I am teacher. ✗ → I'm a teacher. ✓` / `I have one question. → I have a question.` / `Dog is in house. ✗ → The dog is in the house. ✓`.
   - *Why:* Hmong has no articles [inference: no source lists one; the noun phrase order "(possessive) + (quantifier) + (classifier) + noun + (adjective) + (demonstrative)" [WPH] has no article slot]. A classifier with no number often reads as definite («tus dev», the dog), and *ib* "one" + classifier often does the work of *a* («ib tug neeg», a person [UWB]) [inference; native check].
   - **No study counts Hmong speakers' article errors.** The zone is ranked from the structure, as for kn and vi.
5. **he / she / it, and him / her: one Hmong pronoun, no case.**
   - *Examples:* `My mother, he is at home. ✗ → My mother is at home. / She's at home. ✓` / `He hit he. ✗ → He hit him. ✓` [BIL] / `I see she. ✗ → I see her. ✓` / `The car, she is new. ✗ → It's new. ✓`.
   - *Why:* *nws* = he, she, it [WHL, W-KK]; Hmong pronouns have the same form for subject and object [BIL] and for possession (*kuv* = I, me, my [W-KK]).
   - **Content consequence:** the added lesson `he-she-it` (§8), and the cue rule for every Hmong prompt containing *nws* (§10).
6. **Word order inside the noun phrase: adjective after the noun, demonstrative last.**
   - *Examples:* `dress blue ✗ → blue dress ✓` [BIL] / `house big this ✗ → this big house ✓` / `car red my ✗ → my red car ✓`.
   - *Why:* Hmong puts adjectives and demonstratives after the noun [WPH, MCSD]. The possessive comes first in both languages («kuv lub tsheb» = my car) [WPH], so possession itself is easy [inference].
   - **Content consequence:** reweight `adjectives` (and `relative`: an English relative clause also comes after the noun, as in Hmong, so it is easier [inference]).
7. **Questions: no inversion and no *do*; *puas* and *los* do the work.**
   - *Examples:* `You go to school? ✗ → Do you go to school? ✓` / `Where you are from? ✗ → Where are you from? ✓` / `You eat already or not? → Have you eaten yet?`.
   - *Why:* a Hmong yes / no question puts **puas** before the verb and moves nothing («Koj puas hais lus Askiv?», Do you speak English? [OMN]). A question can also end in **los** or **los tsis yog** ("or not") [WHL, BSX: «Koj noj mov lawm los tsis yog?»]. Wh-words stay where the answer goes («Koj tuaj qhov twg tuaj?», where are you from [OMN]).
   - **Content consequence:** reweight `questions`; also mention that «Koj noj mov lawm los tsis yog?» is a greeting-like check-in (BSX lists it as a useful phrase), so *Have you eaten?* in English is a real question, not a greeting [inference, native check].
8. **Third-person -s and agreement.**
   - *Examples:* `She work at a clinic. ✗ → She works… ✓` / `He don't know. ✗ → He doesn't know. ✓`.
   - *Why:* Hmong verbs never change for the subject [WPH]. The final /s z/ is fragile for the zone-1 reason.
   - **Content consequence:** reweight `third-s`; `final-sounds` follows it.
9. ***be* missing before adjectives and places.**
   - *Examples:* `I happy. ✗ → I'm happy. ✓` («Kuv zoo siab» [BSL]) / `She at work. ✗ → She's at work. ✓` / `I am live in Fresno. ✗ → I live in Fresno. ✓` (over-correction).
   - *Why:* Hmong adjectives work like verbs, so no "be" is needed («kuv siab zoo» = I am nice [UWB]). Hmong has two "be" words: *yog* before a noun («nov yog lub tsev» = this is the house) and *nyob* for place and condition («kuv nyob hauv lub tsev» = I am in the house) [UWB].
   - **Content consequence:** reweight `be` (core lesson for Hmong speakers).
10. **Consonants and vowels.**
    - **th /θ ð/** → t / d or s / z: no Hmong equivalent [MCSD; BIL; MCC replacement data].
    - **/z/, /ʒ/** → s: [BIL] lists /z/ and /ʒ/ as absent; Hmong RPA *z* is a different sound, the retroflex /ʐ/ [RPAW].
    - **/ʃ/, /tʃ/, /dʒ/** are absent [BIL]. Their nearest Hmong neighbours are the retroflex RPA *s* /ʂ/ and *ts* /ʈʂ/ [RPAW], so *ship* and *chip* may come out retroflex, which is still understood [inference].
    - **/b/, /g/** are absent [BIL]. Hmong has pre-nasalised *np* /ᵐb/ and *nk* /ᵑɡ/ [RPAW], so `bus` may sound like *mbus* [inference, native check].
    - **/ɹ/** is absent [BIL]. RPA *r* is a retroflex stop /ʈ/ [RPAW], so learners must not read English r as RPA r.
    - **/w/** is absent as a consonant [BIL]. RPA *w* is the vowel /ɨ/ [RPAW], a reading trap.
    - **Vowels:** English /ɪ ɛ æ ʌ ʊ ə ɚ/ and /o/ are absent [BIL], so *ship / sheep*, *bed / bad*, *cut / cot* are new contrasts.
    - **Multisyllabic words and stress:** most Hmong words are one syllable [MCSD]; English stress and weak vowels need explicit teaching [inference].
    - **Tone carry-over:** learners may put Hmong tones on English words, or hear English intonation as word tone [inference; no study opened].
11. **Gerunds and verb + noun compounds.** `bark dog ✗ → barking dog ✓` [BIL]. Reweight `to-ing`.
12. **Serial verbs and "give".** Hmong strings verbs in one clause, "often up to five" [WPH], and gives with *muab … rau* («muab rau» = give, W-SW). Expected English errors: `I take book give you ✗ → I'll give you the book ✓`; `go buy` without *and / to* [inference, native check; no study].

## 5. Learner starting point

- **Who** [PEW, 2021–23 ACS via Pew, May 2025]:
  - About **360,000** Hmong Americans (Hmong alone or in combination, 2023); 330,000 Hmong alone, up from 175,000 in 2000.
  - **31%** foreign-born, down from 55% in 2000.
  - **71%** English-proficient overall: **43%** of immigrants, **85%** of the US-born.
  - Top metros: **Minneapolis–St. Paul ~90,000, Fresno ~35,000, Sacramento ~30,000**. Wisconsin cities (Milwaukee, Wausau and others) are known community centres but were not in the opened Pew lines [native check of the local list in §9].
- **So the learner is mainly:**
  - **adult immigrants and elders**, about 57% of the ~100,000 foreign-born not English-proficient [PEW, inference];
  - **newer arrivals** and speakers in **Laos and Thailand** (no data was opened for them);
  - a smaller group of **heritage speakers** who are fluent in English and want polish; they are better served by `en-hmn` (§`en-hmn.md`).
- **Literacy.**
  - **No opened source measures Hmong or English literacy among Hmong elders** (§11).
  - Whitelock's 1982 lessons assume a learner with an "informant" and oral drills [WHL]; MDH's guide is text-heavy Hmong [MDH].
  - [inference] Many elders read neither RPA nor English well. An all-text app serves them poorly, which makes audio essential, and there is no Hmong voice (§2, §6).
- **What the app should do** [inference]:
  1. **Start at true A1.** Unlike kn's false beginners, many immigrant learners may have had little schooling in English.
  2. **Listening first, with the IPA as support,** because final sounds carry grammar here (zone 1).
  3. **Short Hmong explanations.** Long Hmong prose costs readers who are slow in RPA.
  4. **Never gate on articles or tense.** Both are slow-acquired features.
  5. **Use what Hmong gives for free:**
     - possessive before the noun (*kuv lub tsheb* = my car);
     - SVO order;
     - relative clauses after the noun;
     - a rich set of time words to anchor tense (*nag hmo, hnub no, tag kis, tam sim no*).

## 6. Pronunciation aid policy

**Decision: IPA, required** (`"pron": "required"`; reuse vi's `pronPattern`, which is IPA between slashes; `pronScript` not needed because the native script is Latin).

**Why not an RPA respelling (the kn approach)?**
1. **In RPA a final consonant letter is a tone mark, not a sound.** "Tone is marked by a letter at the end of the syllable … Every Hmong syllable ends in a vowel, so tone letters at syllable end cause no ambiguity" [RPAW]. An English word respelled in RPA is read as Hmong:
   - `bus` → `bas` = /ba/ + low tone (-s);
   - `book` → no legal spelling (-k is not a tone letter);
   - `map` → `mab` = /ma/ + high tone.

   The respelling would teach exactly the error of zone 1, the deleted final consonant.
2. **RPA letters have non-English values:** x = /s/, s = /ʂ/, z = /ʐ/, r = /ʈ/, c = /c/, w = /ɨ/, q = /q/ [RPAW]. A respelling would mislead twice over.
3. **Hmong has no other script that Hmong Americans commonly read** [inference]. Pahawh Hmong exists [KNAB] but is not widely read.

**Confirmed:** respelling English in RPA would be misread; **IPA for English** is the policy.

**Cost of IPA.** IPA is new to almost every learner. So:
- the `alphabet` and `pron` lessons teach the symbols, **using RPA letters as comparisons, never as readings** (the comparison table below);
- the pron line may be hidden by default for beginners (same switch as vi).

**Comparison table for the `pron` lesson** [IPA of RPA letters from RPAW; the matches are inference; native check]:

| English IPA | Example | Nearest RPA letter (comparison only) | Note for the learner |
|---|---|---|---|
| /s/ | see | **x** | RPA *x* is English s |
| /ʃ/ | she | **s** (retroflex /ʂ/) | close; English tongue is less curled |
| /ʒ/ | measure | **z** (/ʐ/) | close |
| /tʃ/ | chair | **ts** (/ʈʂ/) | close |
| /dʒ/ | job | (none) | new; ts + voice |
| /z/ | zoo | (none) | new: English z is not RPA z |
| /θ ð/ | think, this | (none) | new; tongue between the teeth |
| /ɹ/ | red | (none) | RPA r is a t-like stop: do not use |
| /w/ | we | (none as a consonant) | RPA w is a vowel |
| /b/ /g/ | bus, go | np / nk are *not* the same | no n- before them |
| /f/ /v/ /h/ /l/ /m/ /n/ | | f, v, h, l, m, n | same |
| /ŋ/ | sing | the nasal end of ee / oo | e.g. *neeg* ends like *-eng* |
| /p t k/ at the end | stop, cat, book | (none) | **say it**: Hmong never ends a syllable in a consonant |
| /i/ /u/ /a/ | see, too, father | i, u, a | close |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "article|plural", "flags": "i" }`.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately) hinge on an article or a plural / countability form. Their `why` contains the English word **article** or **plural** (§3: these are the terms the Hmong text keeps).
- **Why English keywords:**
  - Hmong has no settled term for either (§3), and the brief forbids coining.
  - **Do not** use *cov* as a keyword: *cov* is the plural classifier, but it also occurs in ordinary Hmong prose (*cov lus*, *cov neeg*), so it would count false hits [inference].
- **Validator note.** With `nativeScript: null` a `why` only has to be non-empty, so an all-English `why` would pass. **Writer rule:** every `why` must contain Hmong words. Lead request: set `labels.cueTest` (below) and apply it to `why` too.
- **Sample `why` lines** [native check as Hmong]:
  - «Lus Askiv: ob tug dev = two dogs. Plural -s.» → hit
  - «Ib tug xib fwb = a teacher. Article a.» → hit
  - «Peb hais txog tus dev uas peb twb paub lawm: article the.» → hit (*hais txog* "talk about" is NOT in the glossary: NEW-WORDS candidate. *uas* "that, which" is attested only in WNT corpus examples)
  - «Nag hmo = past tense: went.» → **no hit** (correct: not an article / plural point)

**Secondary emphasis (not validated):** final sounds («Hais -s kom hnov» — *kom* not in glossary, NEW-WORDS), tense with time words, he / she cues.

**Proposed `labels.cueTest`** (lead decision): Hmong text has no special letters, so detection must use frequent words. A start, built only from glossary words:

`\b(kuv|koj|nws|peb|lawv|yog|tsis|puas|lus|muaj|nyob|thiab|ntawm|hauv|rau|txog|ib|ob|tus|lub|cov|li cas|dab tsi)\b`

Test it against the English answers before adoption: *rau* and *ob* do not occur in English, but check nothing else collides.

**Lead request (cognates):** `nativeScript: null` demands that a Hmong meaning differ from the English (PIPELINE §6 "Known limitations", cognates under `nativeScript: null`). Hmong keeps English for many modern words (*pizza*, *cheese*, *hamburger* in ECM; *mob cancer* in MDH). A card *pizza | | pizza* would fail. Options:
- write a fuller gloss («pizza (zaub mov)»; *zaub mov* "food" is attested as a page title only, so native check);
- or add a profile allow-list of loans kept in English.

The brief's rule ("keep the English loan, never coin") wins over the validator; the allow-list is the clean fix.

## 8. Curriculum deviations from the Korean-speaker course

Definitions as in kn.md §8. Ids and order are unchanged (`lib.js` `ORDER`, 40 ids). Every Hmong example below is from the glossary and is [native check] as a sentence.

| lesson id | verdict | note for Hmong speakers |
|---|---|---|
| alphabet | reweight | Learners know Latin letters from RPA, but RPA values differ (x, s, z, r, c, w, q; §6). Teach English letter names and warn: English *x* ≠ RPA x, English *w* is a consonant |
| pron | reweight | Teach the IPA with the §6 comparison table. Then the zone-1 rule: **every English final consonant is pronounced** (stop, bag, five). th, z, r, b / g, the new vowels |
| be | reweight (core) | Hmong *yog* (+ noun) and *nyob* (place) [UWB] vs English *am / is / are* also before adjectives (`I happy ✗`). Over-correction `I am live ✗` |
| it-there | reweight | Hmong *muaj* = "have" (W-KK) and also "there is" (WNT «Tab tom muaj ntau phau ntawv», there are many books; WV «Puas muaj ib tug neeg…», is there someone…) → *There's a store near here*; weather with no subject («los nag» = to rain [W-KK]) → *It's raining* |
| articles | reweight | No articles in Hmong; *ib tug* ≈ *a* (sometimes), classifier alone ≈ *the* (sometimes) [inference]. Both directions |
| plurals | reweight (core) | Number + classifier, no -s (*ob tug dev*) → *two dogs*. *cov* ≈ "the (group)" but never an -s. -s said as /s z ɪz/ (links to `final-sounds`) |
| present | reweight | SVO in both; no verb change in Hmong → *don't / doesn't*; habits with *txhua hnub* "every day" [BS1011] |
| questions | reweight (core) | *puas* before the verb and nothing moves → *Do you…? / Are you…?*; *los tsis yog* "or not" → *…, or not?* is fine in English but less common than *Do you…?* |
| third-s | reweight | No agreement in Hmong; -s must be heard (→ `final-sounds`) |
| **final-sounds** | **add** | after `third-s` (§8 additions) |
| prep | reweight | Hmong locatives are **verticality words**: *pem* (up there), *nram* (down there), *tom* (over there), *tim* (across), *ntawm* (at), *hauv* (in), *saum* (on top) [W-KK, BSL]. English *in / on / at* has no height element; *at home*, *on the bus* |
| countable | reweight | Classifiers sort nouns by shape, not by count (*lub, daim, txoj* [UWC]); English needs countable / uncountable: *much / many*, *a piece of* |
| object-have | reweight | *muaj* = have; object pronouns: Hmong has none distinct (*kuv* = I / me) → *him, her, them* (preview of `he-she-it`) |
| **he-she-it** | **add** | after `object-have` (§8 additions) |
| can-like | reweight | *nyiam* "like" + verb (no *to*); *tau* "can" (WNT: before or after the verb) and *taus* "physically able" (WHL lists it among pre-verbals) [native check of position] → *I can swim*, with *can* always before the verb |
| polite | reweight | Hmong politeness via *thov*, *… puas tau?*, final *os* [OMN, BSL, WHL] → *Could you…? / please*. `Give me water ✗` sounds abrupt |
| continuous | reweight | *tab tom* ≈ *am doing* [WPH, WNT], but English needs *be* + -ing every time |
| past | reweight (core) | No past form in Hmong; *tau* / *lawm* optional [WNT] → *-ed* always, said /t d ɪd/ |
| irregular-past | keep | Memory work |
| the | reweight | Classifier + noun often = *the*; *the* never with names or general plurals |
| adjectives | reweight (core) | Adjective after the noun in Hmong (`dress blue ✗` [BIL]); comparison with *tshaj* "more than" [BSQ] → *bigger than*, never `more bigger` |
| going-to | keep | *yuav* covers *will / going to / want* [W-KK]; light note |
| tense | reweight | Recap built on the time words: nag hmo / hnub no / tag kis and *tau, lawm, yuav, tab tom* |
| joining | reweight | *thiab* "and", *tab sis / tiam sis* "but", *vim* "because" [W-KK, WHL], *thiaj li* "so" [WNT]. No `because … so` doubling found in sources; light |
| numbers | reweight | Hmong *kaum* = 10, 11 = *kaum ib*, 20 = *nees nkaum*, 10,000 = *kaum txhiab* or *ib vam*, 1,000,000 = *ib lab / ib plhom / ib roob* (sources differ) [WV, BSL, OMNN] → English *thousand / million*; *fifteen / fifty* stress; dollars |
| smalltalk | reweight | «Koj noj mov lawm los tsis yog?» and «Koj tuaj los?» are greeting-like check-ins [BSX, WHL] → *How's it going? / Hi, come in!*; clan-name questions («Koj yog Hmoob xeem dab tsi?» [BSL]) are Hmong small talk and not English small talk |
| past-continuous | keep | |
| will | keep | *yuav*, *mam li* [WNT] |
| perfect | reweight | *twb … lawm* "already" [BS1011, WNT] ≈ *have done*, but a past time word → Simple Past |
| modals | reweight | *yuav tsum* "must" [WHL, WNT]; *txhob* / *tsis txhob* "don't" [WNT, PVI] → *mustn't / don't* |
| to-ing | reweight | `bark dog ✗ → barking dog` [BIL]; serial verbs (zone 12) → *want to go*, *enjoy going* |
| articles-2 | keep | |
| first-conditional | reweight | Hmong *yog* = "if" [W-SW, BSL] (also "be"): `If it will rain ✗` |
| relative | reweight (lighter) | Hmong puts modifiers after the noun, as English relative clauses do; *uas* appears in corpus examples ("yam uas peb…" [WNT]) [native check] |
| phrasal | keep | |
| perfect-2 | reweight | *for / since* with Hmong time phrases; light |
| narrative | keep | |
| conditionals | keep | |
| passive | reweight | *raug* "to suffer, be hit by" [W-KK] is an adversity passive (*raug ntes* = be arrested [WCG]); English passive is neutral |
| reported | reweight | *hais tias* "say that" [W-KK *tias*] → *said (that)* + tense shift |
| email | reweight | US workplace email for a community where many work in health, schools and county services (MDH, WCG domains) |
| idioms | keep | |

**Totals:** 40 existing lessons: 9 keep, 31 reweight (5 marked core). No English-side change. Plus 2 additions.

**Additions (two):**
1. **`final-sounds`** (after `third-s`, A1). **English side: copy vi-en's `final-sounds` lesson and deck unchanged.** vi.md §8 gives its outline: -s as /s z ɪz/, clusters, voicing at the end, linking, -ed preview, no extra -s.
   - *Hmong reason:* McCurdy's 15 learners deleted final /d g v/ and replaced /ð ʒ θ/ [MCC]; "most Hmong words do not end in consonants" [MCSD]; the RPA final letter is a tone, not a sound [RPAW].
   - *Hmong explanation:* «Hauv lus Hmoob, tus tsiaj ntawv kawg yog cim (tone). Hauv lus Askiv, tus tsiaj ntawv kawg yog suab: hais kom hnov.» [native check; *tsiaj ntawv* "letter", *suab* "sound" and *kom* are NOT in the glossary: NEW-WORDS].
   - *Practice:* vi's items satisfy §7 (plurals hinge); the Hmong `why` must name **plural**.
   - *Parity:* new lesson id plus vi's new deck (count deviation), exactly as vi.
2. **`he-she-it`** (after `object-have`, A1). Title «he, she, it — him, her: nws ib lo lus xwb» [native check]. Deck: «Kuv thiab kuv tsev neeg» (deck 2 or a new kinship-and-people deck).
   - *Reason:* nws = he / she / it, and pronouns do not change for object or possessor [W-KK, BIL `He hit he`].
   - *Outline:*
     1. *nws* → he (a man), she (a woman), it (a thing or animal);
     2. subject / object / possessive: he – him – his, she – her – her, it – it – its, they – them – their (Hmong *kuv* = I, me, my [W-KK]);
     3. *lawv* / *nkawd* → they / them; *wb* → we two (English has no dual: *we*);
     4. a respected person is still *he / she* in English, never *they* for one known person;
     5. pets are often *he / she* in English.
   - *Practice sketch (must satisfy §7):* half the order and type items also hinge on an article or plural:
     - `She is a nurse.` (cue «nws (poj niam)», article a)
     - `His children are at school.` (plural)
     - `I saw her at the store.` (the)
     - `They are my brothers.` (plural)
     - mc: `Mai is my sister. ___ lives in Fresno.` → She / He / It / Her
     - fill: `This is Tou. I know ___.` → him
   - *Parity:* new lesson id; its English side must be written new (no other course has it). If budget forbids, take **vi-en's `noun-phrase`** instead (adjective order, `dress blue ✗`), and fold he / she into `object-have`.

**Considered, not added:** a questions-with-*puas* lesson (the `questions` reweight covers it); a classifier-transfer lesson (no evidence of classifier errors in English); a Hmong-American-English lesson (no opened source describes such a variety).

## 9. Vocabulary and cultural notes

**Localise** (decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets; parity rules as kn.md §9) [inference; native check of naturalness]:

| ko-en has | hmn-en uses | Note |
|---|---|---|
| Minji (main), Jisoo, Minho | **Mai** (main), **Tou**; alternates Pa, Kia, Nou, Chue, Lee (given names) | Common US Hmong given names [native check: no opened source lists given names]. English spelling in English lines, the same spelling in Hmong lines |
| Mr. Kim, Ms. Park | **Mr. Vang**, Ms. Yang; alternates Xiong, Lee, Thao, Vue, Moua, Her, Lor | Clan names from the brief. Use the **English spelling** in both languages (US documents do, e.g. MDH, WCG). RPA clan spellings were not found in a source [native check] |
| Korea / Korean | Laos / Hmong (Nplog teb / lus Hmoob) | Careful: many US Hmong were born in the US or Thailand. Write *I speak Hmong.*, avoid *I'm from Laos.* as a default |
| Seoul, Busan | **St. Paul**, Minneapolis, **Fresno**, Sacramento; alternates Milwaukee, Wausau | Pew lists the first three metros [PEW] |
| kimchi, bibimbap | **fawm** (pho-like noodle soup) [W-KK], **mov** (rice), **nqaij qaib** (chicken), **zaub** (greens), papaya salad, sticky rice | **Papaya salad and sticky rice had no Hmong word in any opened source:** use the English words in English lines; NEW-WORDS before any Hmong gloss |
| won | dollars | |
| Chuseok, Seollal | **Hmong New Year (noj peb caug)** [AAE], **pov pob** (ball toss) [AAE], **qeej** [FG, STO], **paj ntaub** [FG, W-KK] | Keep *qeej* and *paj ntaub* in Hmong inside English lines with a gloss |
| K-pop, K-drama | Hmong New Year shows, school sports, church or family events | |
| subway | bus, car (most US Hmong areas are car-based) [inference] | |

**Sensitive points (rules, not suggestions):**
- **Religion.** Traditional practice (shamanism: *txiv neeb*, *ua neeb*, *hu plig* soul-calling [W-KK, FG, UMD]) and Christianity (*khaub lig* cross [W-KK]; many Hmong-language resources are church-made [ECM]) are both present in the community.
  - Stay neutral: no example presents either as superstition or as the default.
  - Health dialogues must not set Western medicine against traditional healing [UMD presents both as lived practice].
  - Avoid religious scenes in A1 decks altogether.
- **Clan and dialect.** No jokes about clans (*xeem*), clan stereotypes, White vs Green accents, or "correct" Hmong. Green forms appear only in neutral notes («Hmoob Leeg hais …»).
- **War and refugee history.** Not a topic for small talk or jokes. The word *neeg thoj nam tawg rog* (refugee) [MDH] appears only where a real service context needs it.
- **Gender roles and marriage.** Avoid co-wife terms (*niam hlob / niam yau* in GYL's sense), bride-capture, and marriage-age topics.
- **Food.** Pork and beef are fine (both are everyday: *nqaij npuas, nqaij nyuj* [W-KK, WV]); alcohol only where the shared ko-en string requires it.

## 10. Interface wording notes

**Register:** *koj* (§2). Impersonal statements for states («Raug lawm!» "correct"; *raug* [W-KK] + *lawm*: [native check]). Bare verbs for actions. No *thov* on buttons.

**Buttons and practice instructions** (bare verbs, from the glossary; all [native check] as UI labels):

| English | Hmong |
|---|---|
| Read | Nyeem |
| Write / Type | Sau (type = ntaus ntawv [W-KK], too long for a button) |
| Listen | Mloog |
| Answer | Teb |
| Choose | Xaiv (from *txoj kev xaiv* "option" [PGE]) |
| Open / Close | Qhib / Kaw [BSL] |
| Help | Pab |
| Again | Dua (*hais dua*) |
| Start | not found: keep "Start" or NEW-WORDS |
| Save | not found: keep "Save" or NEW-WORDS |
| Next | not found: keep "Next" or NEW-WORDS |
| Back | rov qab ("return" [WHL]) [native check] |

**Tab bar** (7 tabs, ≤ 8 characters each). Hmong words are short, so width is not the issue; missing terms are.

| English tab | Hmong label | Source / status |
|---|---|---|
| Today | **Hnub no** | WHL |
| Practice | **Xyaum** | WHL "practice" |
| Review | Review | English kept; no term found |
| Lessons | Lessons | English kept [native check] |
| Read (Drills) | **Nyeem** | |
| Progress | Progress | English kept |
| Feedback | Feedback | English kept |

**Counts:** number + classifier + noun is the Hmong pattern («ob tug dev»), so count strings need a classifier per noun. Card and deck are English loans with no attested classifier. **Rule:** use **label + colon** («Card: {1}», «Lessons: {1}») to avoid choosing a classifier. Lead decision: confirm with a native which classifier, if any, goes with *card* (likely *daim*, flat things [UWC], native check).

**Language-name slots:** «lus {1}» (lus Askiv, lus Hmoob) [OMN].

**Typed-answer cue conventions (for writers):**
1. **nws → cue.** Every Hmong prompt with *nws* whose English answer has *he / she / it / him / her / his / its* gets a cue in brackets: «(txiv neej)» man, «(poj niam)» woman, «(tsiaj)» animal, «(khoom)» thing [W-KK words], or a name instead of *nws*.
2. **Tense → time word or cue.** A Hmong prompt has no tense. Every `type` prompt whose answer has a tense other than Simple Present starts with a time word (*Nag hmo* yesterday, *Tag kis* tomorrow, *Tam sim no* right now [WV, WHL]) or ends with a cue «(past tense)», «(will)».
3. **Number → explicit.** «ob tug dev» → *two dogs*; a bare classifier phrase («tus dev») gets a cue «(the)» or «(a)» if the article matters.
4. **Dual → plural.** *wb / neb / nkawd* answer as *we / you / they*. Never expect *we two*.
5. **Kinship → the English cover term.** *tij laug / kwv / nus* → *brother*; *muam / viv ncaus* → *sister*; add «(older)» if the English answer says *older brother*.
6. **Names:** English spelling, the same in both languages.
7. **Learner-name token** `@@` and blanks `___` as in ko-en.

## 11. Gaps and unverified claims

### Reliability

**What could be verified (opened sources, see SOURCES.md):**
- the RPA inventory and the tone letters [RPAW, JXT, BRU, KNAB];
- core vocabulary (1,274 glossary headwords, every one with a source);
- the pronoun system with dual forms;
- the main aspect markers with corpus examples [WNT];
- Hmong-American population and English-proficiency figures [PEW];
- one learner study of final consonants [MCC] and two practitioner lists of contrasts [BIL, MCSD];
- real US usage of English day names in Hmong text [PGE, MNC];
- no Hmong text-to-speech in Microsoft Translator's table or the gTTS code list [MST, GTTS].

**What could not be verified:**
- No Hmong-L1 English error study with counts beyond McCurdy's abstract (no article, tense or pronoun error rates).
- No Hmong grammar-term tradition.
- No data on adult Hmong or English literacy.
- No Hmong UI style guide (Microsoft, Google, Mozilla or KDE).
- No RPA spelling of clan names or common given names.
- Sentence-final particles are thin in the sources: only *os* [WHL], *los*, *yam* [WHL] and *ko* [W-KK] are attested with a function. The brief's category (for example *lauj*, *nawb*, *no*, *sis*) needs a native source.
- No Hmong words for: papaya salad, sticky rice, airport, computer, internet, minute / second (time units), lesson, sentence, start / save / next.
- Device voices on Android and iOS were not checked.
- Heimbach, Jay Xiong's online dictionary, the WOLD table, the UW nursing lexicon and Wisconsin DHS's 2025 glossary could not be opened (SOURCES.md).

**Where sources disagree:**
- **Days of the week.**
  - EnglishConnect: Monday = *Hnub Ib* … Sunday = *Hnub Xya* [ECM].
  - Wikipedia's *Hmong calendar*: Sunday = *hnub ib*, Monday = *hnub ob* … [WPCAL].
  - US agency Hmong texts avoid both and write *hnub Monday txog hnub Friday* [PGE, MNC].

  **Course rule until a native decides:** English day names (*hnub Monday*), as US institutions write them.
- **Greeting "nyob zoo".**
  - Every source writes *nyob zoo* [OMN, FG, UMD, WV].
  - Omniglot marks *Nyob zoo sawv ntxov* etc. "not common".
  - Wikivoyage gives *Kab ntsab* as the formal hello, found nowhere else: **not used**.
- **puas / pov.** The brief mentions *pov* as a variant of question *puas*. **No opened source has *pov* as a question particle**: *pov* is "throw" [RPAW, W-KK]. Not used.
- **lawm vs lawd.** No opened source has *lawd*; *lawm* is in WHL, W-KK and WPH. The -d tone is a phrase-final variant of -m [RPAW], so *lawd* is plausible. Native check; the course writes *lawm*.
- **One million:** *ib lab / ib plhom* [BSL], *ib roob* [WV, OMNN], *plhom* [BS1011].
- **Zero:** *ntxaiv* [WV, OMNN]; no other form attested.
- **Ten thousand:** *kaum txhiab* [WV, OMNN] vs *ib vam* [BS1011, BSL].
- **Tone labels:** Jay Xiong calls the -s tone "middle" [JXT]; RPAW calls it "low".
- **Green Hmong voiceless nasals:** RPAW says hn, hny, hml are White-only; BRU names only hm.
- **Joined vs spaced spellings:** menyuam / me nyuam, pojniam / poj niam, totaub / to taub (RPA.md §6).
- **Week:** *lim tiam* (W-KK) vs *as thiv* (W-KK) vs *plua* (WV, WPCAL).
- **Tomorrow:** *tag kis* [WV, BSL] vs *taskis* [W-KK] vs *tagkis* [WHL, glossed "morning" by the fetch].

### 30 points a native White Hmong speaker should check first

1. Days of the week: does *Hnub Ib* mean Monday or Sunday in US speech? Is *hnub Monday* acceptable in course text?
2. *koj* to an adult learner from an app: natural, or too direct? Is there a more polite form?
3. The bare-verb buttons (Nyeem, Sau, Mloog, Teb, Xaiv, Qhib, Kaw, Pab).
4. Tab labels *Hnub no*, *Xyaum*, *Nyeem*; is there a usual word for "lesson", "review", "progress"?
5. Keeping *article*, *plural*, *past tense*, *sentence* in English inside Hmong explanations: acceptable?
6. ECM's descriptive phrases for noun / verb / adjective etc.: understood by an adult without schooling?
7. *lo lus nug* vs *lo lus noog* for "question".
8. Classifier for *card* and *deck* in counts (*daim*?), or avoid with "Card: 3".
9. The three sample `why` lines in §7 and the voice sentences in §2.
10. *nws* cues «(txiv neej)», «(poj niam)», «(tsiaj)», «(khoom)»: natural labels?
11. Kinship by speaker sex: *tij laug / kwv* (man's brothers), *nus* (woman's brother), *muam* (man's sister), *viv ncaus* (woman's sister). Are classifiers needed (*kuv tus tij laug*)?
12. *pog* (father's mother) vs *niam tais* (mother's mother / wife's mother), *yawg* vs *yawm txiv*: right sides and uses?
13. *txiv ntxawm / txiv hlob / dab laug / phauj*: right relations?
14. *Koj noj mov lawm los tsis yog?* and *Koj tuaj los?* as greeting-like check-ins.
15. *mus zoo* vs *sib ntsib dua* for goodbye: who says which?
16. *tab tom*, *twb … lawm*, *nyuam qhuav*, *tseem*, *yuav*, *mam li*: are the English equivalents in §8 safe for teaching?
17. *muaj* for "there is" (`it-there`), and *los nag* "it rains".
18. *yog* as "if" (`first-conditional`).
19. One million: *ib lab*, *ib plhom* or *ib roob*? Ten thousand: *kaum txhiab* or *ib vam*? Zero: *ntxaiv*?
20. *puas / pua* after *rau, xya, yim* (600 = *rau pua*?).
21. Is there a usual Hmong word for papaya salad and sticky rice? (Neither was found.)
22. *fawm* for pho, and *nqaij npuas* vs *nqaij npua* for pork (both attested).
23. Given names Mai, Tou, Pa, Kia, Nou, Chue, Lee: common and neutral? RPA spellings of the clan names, if the Hmong side should use them.
24. The Hmong explanation line for `final-sounds` (§8) and its words *tsiaj ntawv*, *suab*.
25. The title of `he-she-it`.
26. Is *Hmoob* (not *HMoob*) the right default for a general audience?
27. Any Green Hmong word that a White-dialect course must avoid because it sounds odd or rude?
28. Religion and health: is any example in the lesson notes one-sided (shaman vs church, clinic vs *ua neeb*)?
29. Are *zoo siab* (happy), *tu siab* (sad), *chim siab* (angry), *ntshai* (afraid), *txaj muag* (ashamed) the everyday feeling words? Is *nkees* (tired, not attested) more usual than *tsaug*?
30. Is the course's syllable-spaced spelling (*me nyuam, poj niam, hauj lwm*) what US readers expect, or do they prefer joined forms?

### Why these courses should not be released without a native reader

- **Every Hmong sentence written by the course writers will be new.** The glossary gives words, not idiom; the author is not a speaker; and the sources were read through a summariser that paraphrased.
- **Tone letters are meaning.** A wrong final letter is a wrong word (*pob* ball / *pov* throw / *pog* grandmother).
- **The main audience (elders) depends on audio** that no Hmong voice can give.
- The kinship and religion areas are easy to get wrong in ways that offend.

## Sources

Full list with URLs, what was taken and reliability: `tools/hmong/SOURCES.md`. Ids used here: RPAW, BRU, KNAB, LY, VW, HMB, JXD, JXT, WHL, W-KK, W-SW, WPH, WPCAL, WNT, ECM, MDH, WCG, OMN, OMNN, WV, BSL, BS1011, BSQ, BSR, BSX, GYL, FG, UMD, UWC, UWB, AAE, STO, PGE, MNC, PEW, BIL, MCC, MCSD, MST, GTTS, AZB, PVI.
