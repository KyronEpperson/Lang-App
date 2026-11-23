# Telugu speakers learning English — course profile

Course `te-en`. Audience: adult Telugu speakers in Telangana and Andhra Pradesh, in other Indian states and abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard modern written Telugu (vyāvahārika, the style of Hyderabad and Vijayawada media) in Telugu script**, with the English loanwords speakers actually use (కార్డు, లెవెల్, ఈమెయిల్, ఆఫీసు); answers and examples are in English. The HTML language tag and the app code are both **`te`** (profile.json `native: "te"`, pack `course-te-en`, interface pack `i18n-te`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: 40 lesson ids in `lib.js` `ORDER` including `alphabet`, 20 decks plus the shared alphabet deck, standing rule `article-plural`), like zh, vi, id and hi, because Telugu has no articles. `parity.js` compares te-en's English side with ko-en's. The closest finished course is Hindi (`docs/profiles/hi.md`); this profile follows its structure and says where Telugu differs.

Evidence labels:
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what textbooks, dictionaries, style guides, standards bodies or large apps do.
- **[practitioner opinion]**: a teacher's, school's or blog's position, or this profile's own inference (marked "mine" where it is mine).

**Native check.** The author of this profile is not a native speaker. Every Telugu sentence, term, label and deck name below was composed for this profile and is marked **[native check]** where it carries a decision; treat all of them as proposals until a Telugu speaker has read them (§11).

A study read only as an abstract or through someone else's summary is marked as such. Four PDFs (Wiltshire 2015, Payne et al. 2019, Demszky et al., Renuka Devi 2025) were read as extracted text; other pages were read through the fetch tool's summary (§11).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations address the learner as **మీరు** with the polite imperative in **-ండి** (ఎంచుకోండి, రాయండి); buttons use the same form. Telugu school grammar terms (నామవాచకం, క్రియ, ఏకవచనం / బహువచనం), with **tense names kept in English** (*Simple Present*, *Present Perfect*).
- **Error evidence is thin and mostly not Telugu-specific.** No Telugu-L1 learner corpus with error rates was found. The best sources are the 22 Indian English features counted in ICE-India (Demszky et al.; speakers of many L1s), two phonetic studies with five Telugu speakers each (Wiltshire 2015; Payne et al. 2019), the JIPA description of Telugu, and one contrastive paper on postpositions. The ranking is this profile's inference.
- **Top zones:** articles (omitted and added); **the missing *be*** (Telugu «నా పేరు రవి» has no verb); question order, *do*-support and the invariant tag *isn't it?*; one Telugu verb form for habit and future (*I will go to office daily*); continuous with states and *since / for*; uncountables (*advices*); prepositions for Telugu endings (*angry on*, *in bus*); fronting and *is there* at the end; Indian English lexis.
- **Sounds:** a vowel added after a final consonant (*bus-u*, *iskool-u*), θ ð as dental stops, z → j, v as a soft [ʋ], vowel quality in *ship / sheep*, *caught* said like *coat*, a y- or w-glide before an initial vowel (*yevery*, *wonly*), no word stress.
- **Pronunciation aid: a Telugu-script respelling, required** (`"pron": "required"`), not IPA. It is a one-to-one table from the zh IPA (all 776 zh `pron` strings convert and pass the pattern), with **pollu (్) on every final consonant** (bus = బస్), the **Telugu nukta U+0C3C** on the sounds Telugu lacks (**వ఼** = /v/, **థ఼ ద఼** = /θ ð/, **జ఼** = /z/, **ఝ఼** = /ʒ/), **్యా** = /æ/ and **ˈ** before the stressed syllable. **Blocking check:** U+0C3C dates from Unicode 14 (2021); if a device font lacks it the lead must bundle a Telugu web font for the aid or switch to the IPA fallback given in §6.
- **Standing rule: `article-plural`**, keywords `ఆర్టికల్|బహువచన|లెక్కించ` (no flags); zero parity cost.
- **Curriculum:** all 40 ids kept in order (5 keep, 35 reweight, no English-side changes). Add 2: `indian-english` (end of A1; deck 22 «ఇండియన్ ఇంగ్లీష్: ఇక్కడ, విదేశాల్లో») and `question-tags` (A2, after `modals`: tags, question order, embedded questions).
- **Interface:** Western digits only; counts are always **label + colon + number** («కార్డులు: {1}»), because Telugu nouns take a plural ending after any number above one; language-name slots at the start or after a colon, never with an ending glued on. Tab labels of at most 4 written syllables; taller line height and a Telugu system font stack.

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC freezes the shared English strings. The pron aid must describe what learners hear.
2. Schools, newspapers and offices in India write British spelling, and spoken Indian English is its own norm: Sirsa & Redford (2013) conclude that Indian English has a target phonology distinct from the speakers' native languages, with only subtle L1 effects (abstract; §4.13). The course teaches American forms without calling Indian or British forms wrong; a card `note` may say «ఇండియాలో, బ్రిటన్‌లో: lift / flat / colour» [practitioner opinion, mine].
3. US spelling and vocabulary (color, apartment, elevator, cell phone, check for the restaurant bill).

**Register: మీరు with the polite imperative in -ండి; never నువ్వు** [practitioner opinion, decision].
- **What was found** [curriculum convention]:
  - Google's Telugu help pages address the user as మీరు / మీ and put every instruction and button in the -ండి form: «ఖాతాను క్రియేట్ చేయండి», «మీ పాస్‌వర్డ్‌ను ఎంటర్ చేసి, నిర్ధారించండి.», «రికవరీ ఫోన్ నంబర్‌ను జోడించండి»; a short noun or adverb where no verb is needed («తర్వాత» for *Next*) ([Google Account Help, Telugu](https://support.google.com/accounts/answer/27441?hl=te)).
  - The Mozilla Telugu style guide (2016) has a section "Honorific Usages", but its body did not survive text extraction (§11) ([Mozilla l10n, Telugu Style Guide](https://mozilla-l10n.github.io/styleguides/te/Style%20guide.pdf)).
  - `docs/profiles/en-te.md` §2.3 (the reverse course): మీరు is for "strangers, elders, shopkeepers, teachers"; నువ్వు is "rude to a stranger or an elder" [that profile's inference].
- **Decision: మీరు**, as hi chose आप and unlike ko, zh and id. Reasons:
  1. Telugu has no neutral peer form for a stranger; an app is a teacher and a stranger at once.
  2. The cost is a few characters: the bare imperative (రాయి, ఎంచుకో) is the నువ్వు form and reads as an order to a child, so there is no shorter polite option. Buttons stay short by using **one verb** («తనిఖీ చేయండి» → «సరిచూడండి») or a noun («తర్వాత», «వెనక్కి», «రద్దు») (§10).
  3. మీరు can still be warm: praise with «చాలా బాగుంది!», «శభాష్!», not formal Sanskritised Telugu.
- **Voice:** friendly teacher, everyday written Telugu with spoken verb forms (చేస్తాం, ఉంటుంది, రాయండి), never grānthika forms (చేయుదుము, కలదు). Use the English loan when urban speakers use it daily (కార్డు, లెవెల్, యాప్, ఈమెయిల్, ఆఫీసు, మీటింగ్); use the Telugu word when it is the everyday word (పాఠం, జవాబు, ప్రశ్న, తప్పు, ఉదాహరణ).
- **Never:** నువ్వు or నీవు to the learner; mixed మీరు / నువ్వు on one screen; officialese (దయచేసి గమనించగలరు); romanised Telugu (*meeru baaga chesaru*); slang address (బాస్, అన్నా, మామా); more than one exclamation mark per screen; Hindi words (अच्छा, ठीक है).
- **Translations of example sentences:** *you* = **నువ్వు** between friends and family and in texting, **మీరు** in service, office, email, doctor and stranger scenes. That నువ్వు sits inside a translation, not addressed to the learner.
- **Gender in translations:** the Telugu first person shows no gender (నేను వెళ్ళాను for anyone), so no slash forms are needed for *I*. The third person does show it (వచ్చాడు / వచ్చింది): a prompt for *he* uses అతను, for *she* ఆమె, for *it* అది, and a prompt with a bare వాళ్ళు is *they*. Never use ఆయన / ఆవిడ / వాడు in a prompt whose answer hinges on *he / she*, unless the lesson is about them (§4.8).
- **Error marks:** **✗** wrong, **✓** right: `I'm teacher. ✗ → I'm a teacher. ✓`.

Three sample sentences in the voice [native check]:
- «తెలుగులో ఆర్టికల్స్ లేవు. అందుకే a, the వదిలేస్తాం, లేదా అవసరం లేని చోట పెడతాం. మూడు నియమాలు గుర్తుపెట్టుకోండి, చాలు.»
- «తెలుగులో "నా పేరు రవి" అంటే సరిపోతుంది. ఇంగ్లీష్‌లో is తప్పనిసరి: My name is Ravi.»
- «"నేను రోజూ ఆఫీసుకి వెళ్తాను" అలవాటు. ఇంగ్లీష్‌లో Simple Present: I go to the office every day. will కాదు.»

**Typography and mixing English into Telugu text (one rule, applied everywhere):**
- **Script.** Telugu in Telugu script only. English words stay in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into Telugu script outside the `pron` field.
- **Quotes.** Telugu phrases in straight double quotes "…", nested in single '…'. In lesson HTML, English is bold `<b>` and not quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `"నేను టీ తాగుతాను" ఇంగ్లీష్‌లో?`, «two తర్వాత బహువచనం: books.».
- **Full stop: the ASCII period.** Mozilla: "Telugu language is following the general punctuation characters and rules which are applicable to English language"; r12a: punctuation is mostly ASCII. No danda. `?` and `!` as in English. No terminal punctuation on buttons, labels, tabs or deck names.
- **Dashes.** Mozilla: Telugu "only uses hyphen in all the places" and "usually does not use em dash". Use a comma, a colon or two sentences where ko-en uses a dash; hyphen inside compounds and before English endings (-ing రూపం); en dash only in number ranges (2–4). The one fixed exception is `labels.typeHintCue` (« — ఈ పదాలతో»), which mirrors the engine's separator.
- **Unicode: NFC, and ZWNJ in one place only.** A Telugu ending added to a loan that ends in a pollu consonant is written with **ZWNJ (U+200C) between them**: డెక్‌లు, లెవెల్‌లో, ఇంగ్లీష్‌లో, ఈమెయిల్‌కి. Without it the two letters fuse into a conjunct (డెక్లు) that hides the word. This is Google's practice on the page fetched (పాస్‌వర్డ్‌ను, ఈమెయిల్‌ను), and the Mozilla guide notes "For some words, we use Zero Width Non-Joiner". No ZWNJ anywhere else, no ZWJ, and **none in `pron`** (§6). Prefer the nativised -u form when it is the everyday spelling, which needs no ZWNJ: కార్డు → కార్డులు, ఆఫీసు → ఆఫీసులో, బస్సు → బస్సులో. The lead must confirm that lint and the duplicate checks accept U+200C (§11).
- **Spelling, one form per word** (the lint compares whole strings; forms taken from en-te §2.8 where they exist): ళ్ళ not ళ్ల (మళ్ళీ, వాళ్ళు); నుంచి (not నుండి); ఇంగ్లీష్ (not ఇంగ్లీషు, ఆంగ్లం); ఈమెయిల్; ఈరోజు as one word.
- **Digits:** Western digits 0–9 everywhere, never Telugu digits ౦–౯ (§10).
- **Do not add English plural -s in Telugu script** to grammar terms inside Telugu sentences when a Telugu plural is natural: «రెండు ఆర్టికల్స్» is the one accepted exception (ఆర్టికల్స్ is the usual spoken plural); otherwise «వెర్బ్‌లు», «టెన్స్‌లు».
- **Alternatives:** ` / ` with spaces, as in ko-en.

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.
- **Convention found** [curriculum convention]:
  - Telugu school grammar names the parts of speech నామవాచకం, సర్వనామం, విశేషణం, క్రియ, అవ్యయం, and uses లింగం, వచనం, విభక్తి ([Telugu Wikipedia, భాషాభాగాలు](https://te.wikipedia.org/wiki/భాషాభాగాలు): «నామవాచకములు», «సర్వనామములు», «విశేషణములు», «క్రియలు», «లింగ, వచన, విభక్తులు లేని పదములు అవ్యయములు»). The page uses the older -ము endings; modern prose writes -ం (నామవాచకం).
  - Telugu-medium exam pages on English grammar that could be opened were written in English with English terms only ("Articles", "singular countable nouns", "vowel sound": Adda247 Telugu, opened, no Telugu text). **No Telugu-language explainer of English grammar could be opened** (§11), so the choice between loan terms (ఆర్టికల్, టెన్స్) and Telugu terms is this profile's [practitioner opinion, mine; native check].
- **Tense names stay in English**, as in hi-en: *Simple Present*, *Present Continuous*, *Present Perfect*, glossed once with the Telugu school name («Simple Present, అంటే వర్తమాన కాలం»).
- **One term per concept.** The standing-rule regex depends on **ఆర్టికల్**, **బహువచనం** and **లెక్కించదగిన / లెక్కించలేని** (§7). Do not write «ఉపపదం», «ప్లూరల్», «బహు.» or «లెక్కపెట్టలేం» in a `why` that is meant to count.

All Telugu terms in this table are **[native check]**.

| English term | Telugu term (use this) | Note |
|---|---|---|
| article | **ఆర్టికల్** | Standing-rule keyword. Plural in running text: ఆర్టికల్స్ |
| indefinite / definite article | ఆర్టికల్ a / an; ఆర్టికల్ the | No «నిశ్చిత / అనిశ్చిత» in `why` lines |
| zero article | ఆర్టికల్ లేదు | «ఇక్కడ ఆర్టికల్ రాదు» |
| noun | నామవాచకం | |
| countable / uncountable noun | **లెక్కించదగిన / లెక్కించలేని** నామవాచకం | Standing-rule keyword (stem లెక్కించ). Gloss once: «లెక్కించదగిన (ఒకటి, రెండు అని లెక్కపెట్టగలిగేవి)» |
| singular / plural | ఏకవచనం / **బహువచనం** | Standing-rule keyword (stem బహువచన, so బహువచనంలో, బహువచన రూపం also count) |
| gender (Telugu) | లింగం | Contrast only: «ఇంగ్లీష్‌లో వస్తువులకు it» |
| Telugu case ending / postposition (-లో, -కి, -తో, నుంచి, మీద) | విభక్తి ప్రత్యయం | Contrast only: «తెలుగులో ప్రత్యయం పదం తర్వాత వస్తుంది (ఇంట్లో), ఇంగ్లీష్‌లో preposition ముందు (in the house)» |
| preposition | ప్రిపొజిషన్ | Explain once with the contrast above |
| pronoun | సర్వనామం | |
| subject / object | కర్త / కర్మ | Give the English word once: «కర్త (subject)» |
| subject / object pronoun (I / me) | I, he (కర్త) / me, him (కర్మ) | |
| possessive (my, his) / possessive 's | my, his (ఎవరిది అని చెప్పే పదాలు) / 's | «Ravi's phone = రవి ఫోన్» (Telugu needs no ending here; English needs 's) |
| verb | క్రియ | Also «verb» in English inside sentences |
| be | **be (am, is, are)** | Lesson `be`: «తెలుగులో ఈ క్రియ ఉండదు» |
| auxiliary verb | సహాయక క్రియ (helping verb) | |
| modal verb | మోడల్ (can, should, must) | «మోడల్ తర్వాత V1» |
| third-person singular -s | he / she / it తో వచ్చే -s | |
| base form / past / past participle | V1 / V2 / V3 | Indian school convention [general knowledge, §11] |
| regular / irregular verb | రెగ్యులర్ / ఇర్రెగ్యులర్ క్రియ | |
| -ing form | -ing రూపం | |
| tense | టెన్స్ (కాలం) | Gloss once; plural టెన్స్‌లు |
| present simple | **Simple Present** | Telugu చేస్తాను covers this *and* will (§4.4) |
| present continuous | Present Continuous | Telugu చేస్తున్నాను |
| past simple / past continuous | Simple Past / Past Continuous | |
| future (will / going to) | will / be going to | |
| present perfect (+ continuous) | **Present Perfect** (Present Perfect Continuous) | |
| past perfect | Past Perfect | |
| stative verb | స్థితిని చెప్పే క్రియ (stative verb) | know, want, have (owning), like, need |
| passive / active | Passive Voice / Active Voice | Telugu school term కర్మణి ప్రయోగం as a one-time gloss |
| conditional | if వాక్యాలు (conditional) | |
| relative clause | who / which / that తో వచ్చే ఉపవాక్యం | |
| reported speech | Indirect Speech (పరోక్ష కథనం) | |
| infinitive / gerund | to + V1 / -ing | |
| conjunction | సముచ్చయం (and, but, because) | Or simply «కలిపే పదాలు» in lesson titles |
| adjective / adverb | విశేషణం / క్రియా విశేషణం | |
| comparative / superlative | comparative / superlative (పోలిక) | |
| question word | wh- పదం (what, where, why) | |
| yes/no question / wh-question | అవును-కాదు ప్రశ్న / wh- ప్రశ్న | |
| question tag | question tag (…, isn't it?) | Lesson `question-tags`; Telugu «కదా?» |
| negative sentence | వ్యతిరేక వాక్యం | |
| word order | పదాల వరుస | «తెలుగు: కర్త, కర్మ, క్రియ. ఇంగ్లీష్: కర్త, క్రియ, కర్మ.» |
| there is / are | there is / there are | |
| phrasal verb | ఫ్రేజల్ వెర్బ్ | |
| idiom | జాతీయం | plural జాతీయాలు |
| Indian English | ఇండియన్ ఇంగ్లీష్ | Lesson `indian-english` |
| pronunciation | ఉచ్చారణ | |
| pronunciation aid (respelling) | ఉచ్చారణ (తెలుగు లిపిలో) | Toggle «ఉచ్చారణ చూపించండి» |
| stress / stress mark | ఒత్తి పలకడం / ఒత్తిడి గుర్తు (ˈ) | Not «ఒత్తు», which also names the subscript consonant |
| vowel / consonant | అచ్చు / హల్లు | |
| pollu (్) | పొల్లు | «పొల్లు ఉన్న అక్షరం తర్వాత అచ్చు పలకకండి» (§6) |
| nukta (dot below) | చుక్క | «కింద చుక్క ఉన్న అక్షరం = తెలుగులో లేని శబ్దం» (§6) |
| long / short vowel | దీర్ఘం / హ్రస్వం | School terms; used in `pron` for *ship / sheep* |
| schwa / weak form | బలహీన "అ" / బలహీన రూపం | |
| linking | కలిపి పలకడం | |

UI terms are in §10.

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; **the ranking is this profile's inference**, because no fetched source counts errors by type for Telugu speakers. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Telugu), every Telugu example and every English example with no named source is [practitioner opinion, mine; native check].** Telugu grammar facts come from the *Telugu grammar* article and from `docs/profiles/en-te.md`, whose own statements are labelled there.

**Main fetched evidence:**
- [Demszky, Sharma, Clark, Prabhakaran & Eisenstein, *Learning to Recognize Dialect Features*](https://arxiv.org/abs/2010.12707) (arXiv 2010.12707; NAACL 2021): 22 Indian English features in **ICE-India** spoken dialogues. Table 1 gives counts in two samples: Lange's (2012) annotation of 10 features in 100 transcripts (19,059 utterances in the paper's Table 2), and the authors' own annotation of 18 features in **367 examples** (317 conversational turns plus 50 interview examples). Counts below are written "Lange n" (large sample) or "own n" (small sample); the two are not comparable with each other. Speakers have many L1s; **nothing is Telugu-specific**.
- [Wiltshire 2015, *Dravidian varieties of Indian English*](https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/01/2015-Wiltshire-IJDL-Dravid-Eng.pdf): **five Telugu-L1 speakers** (and five each of Kannada, Malayalam, Tamil), aged 20–27, graduates, recorded in Hyderabad reading word lists; all five Telugu speakers began English later than kindergarten. Vowel formants and durations, VOT, rhotics, v / w.
- [Payne, Maxwell & Volchok 2019, *Tense-lax contrasts in Indian English vowels: transfer effects from L1 Telugu*](https://assta.org/proceedings/ICPhS2019Microsite/pdf/full-paper_631.pdf) (ICPhS): **five Telugu-L1 speakers** (3 F, 2 M, aged 25–30, University of Hyderabad, English from age 4–5).
- [Bhaskararao & Ray 2017, *Telugu*](https://www.cambridge.org/core/product/546440D379A9139BFBB590254E50ED6B/core-reader) (*JIPA* 47(2), Illustration of the IPA): the sound system and how English loans are adapted.
- [Sirsa & Redford 2013](https://read.qxmd.com/read/24860200/the-effects-of-native-language-on-indian-english-sounds-and-timing-patterns) (*Journal of Phonetics*; Hindi-L1 and Telugu-L1 speakers): **abstract only** (the PMC full text was blocked): acoustic measures of vowels, obstruents and timing separated Hindi from Telugu, but only three separated the two groups' English.
- [Jain, Pal, Vuppala, Ghosh & Yarra, *An Investigation of Indian Native Language Phonemic Influences on L2 English Pronunciations*](https://arxiv.org/pdf/2212.09284) (arXiv 2212.09284): 18 Indian languages, annotated speech of 80 speakers plus literature.
- [Renuka Devi 2025, *A Typological Study of Adpositions: English Prepositions and Telugu Postpositions*](https://www.languageinindia.com/dec2025/deviadposition.pdf) (*Language in India* 25:12): a contrastive description, no learner data.
- [Wikipedia, *Telugu grammar*](https://en.wikipedia.org/wiki/Telugu_grammar), [*Telugu language*](https://en.wikipedia.org/wiki/Telugu_language) and [*Indian English*](https://en.wikipedia.org/wiki/Indian_English) [curriculum convention: encyclopedia summaries].
- [TalkDrill, *Common English mistakes Indians make*](https://www.talkdrill.com/blog/spoken-english/common-mistakes/common-english-mistakes-indians/) and [Bilinguistics, *Telugu speech and language development*](https://bilinguistics.com/languages/telugu-speech-and-language-development/): practitioner pages; TalkDrill cites nothing, Bilinguistics cites grammars but also Wikipedia and Reddit.

1. **Articles: omission and overuse.**
   - *Examples:* `I'm teacher. ✗ → I'm a teacher. ✓` / `Give me pen. ✗ → Give me a pen. ✓` / `I went to market. ✗ → I went to the market. ✓` / `She has a business experience. ✗ → She has business experience. ✓`
   - *Why:* Telugu has no articles. ఒక ("one") sometimes does the work of *a* (ఒక అబ్బాయి వచ్చాడు) and ఆ / ఈ ("that / this") the work of *the*, but both are optional.
   - *Evidence:* [research-backed, features only, many L1s] Demszky et al.: ARTICLE OMISSION `(the) chair is black` own 59 and EXTRANEOUS ARTICLE `she has a business experience` own 25: the two most frequent features in their own sample, the extra article about half as frequent as the missing one. [practitioner opinion] TalkDrill ("Hindi, Tamil, Telugu, and most Indian languages don't use articles"; the three examples above); Bilinguistics (Telugu uses "numeral 'oka' or context").
   - **Content consequence:** teach both directions: *a* for one countable thing, *the* for a known thing, **and** no article for general uncountables and abstract nouns. Treat *one* for *a* (`I have one doubt`) as a third trap. Never gate progress on articles.
2. **The missing *be*, and *is there* at the end.**
   - *Examples:* `My name Ravi. ✗ → My name is Ravi. ✓` / `My parents from Guntur. ✗ → My parents are from Guntur. ✓` / `She very tired. ✗ → She's very tired. ✓` / `Near my house one cafe is there. ✗ → There's a cafe near my house. ✓`
   - *Why:* a Telugu sentence that says what something is has **no verb**: «నా పేరు రవి», «ఆమె డాక్టర్» (en-te §4.2: "No word for 'is' in 'X is Y'"). Place and existence use ఉండు at the end of the sentence: «మా ఇంటి దగ్గర ఒక కేఫ్ ఉంది». This is a real transfer zone for Telugu, unlike for Hindi (hi.md §4.12 calls copula omission light because Hindi always has है).
   - *Evidence:* [research-backed, features only, many L1s] Demszky et al.: COPULA OMISSION `my parents (are) from Gujarat` Lange 71 (attested, far rarer than the tag or fronting features in the same sample) and NON-INITIAL EXISTENTIAL `every year inflation is there` Lange 302, own 8. How much more often Telugu speakers drop *be* than other Indian English speakers is not known (§11).
   - **Content consequence:** `be` becomes a core lesson, not a formality; `it-there` teaches *There's …* first and names *… is there* as the Telugu order.
3. **Questions: order, *do*, embedded questions and the one-size tag.**
   - *Examples:* `Why you are late? ✗ → Why are you late? ✓` / `Where you went yesterday? ✗ → Where did you go yesterday? ✓` / `You like tea? ✗ → Do you like tea? ✓` / `I don't know what are they doing. ✗ → I don't know what they are doing. ✓` / `You are coming, isn't it? ✗ → You're coming, aren't you? ✓`
   - *Why:* Telugu makes a yes/no question by adding **-ఆ** to the last word (మీకు టీ ఇష్టమా?), keeps question words in place with the verb last (మీరు ఎక్కడ ఉంటారు?), has no helper like *do*, and has one tag for every sentence, **కదా?** (en-te §4.6).
   - *Evidence:* [research-backed, features only, many L1s] Demszky et al.: INVARIANT TAG `the children are outside, isn't it?` **Lange 786**, own 17 (the most frequent of Lange's ten features); LACK OF INVERSION IN WH-QUESTIONS `what you are doing?` own 4; INVERSION IN EMBEDDED CLAUSE `I don't know what are they doing` own 4. [practitioner opinion] TalkDrill (`Why you are late?`, `Where you went yesterday?`, `You are coming, isn't it?`).
   - **Content consequence:** reweight `questions`; add `question-tags` (§8), because ko-en has no tag or embedded-question content at all (checked: no tag in any ko lesson or practice file).
4. **One Telugu form for habit and future; -s; tense choice.**
   - *Examples:* `I will go to office daily. ✗ → I go to the office every day. ✓` / `He do a lot of things. ✗ → He does a lot of things. ✓` / `I didn't went. ✗ → I didn't go. ✓` / `I have seen him yesterday. ✗ → I saw him yesterday. ✓`
   - *Why:* the Telugu form చేస్తాను / వెళ్తాను means both "I do (usually)" and "I will do" (en-te §3 calls it the habitual-future: "one form for 'I do (usually)' and 'I will do'"), so *will* turns up in habits. The past form చేశాను covers both *did* and *have done*. Telugu verbs agree in person, number and gender, but the English -s is one weak sound at the end of a word (§4.13).
   - *Evidence:* [research-backed, features only] Demszky et al.: LACK OF AGREEMENT `he do a lot of things` own 23. [practitioner opinion] TalkDrill (`I didn't went`, `She didn't saw him`). The *will*-for-habit error has **no source**: it is this profile's prediction from the Telugu form [native check; ask a Telugu teacher of English].
   - **Content consequence:** `present`, `will` and `tense` carry the habit / future split; `third-s` makes -s audible; `past` drills *did* + V1.
5. **Continuous with states and durations; *since / for*.**
   - *Examples:* `I am having a car. ✗ → I have a car. ✓` / `I am working here since 5 years. ✗ → I've worked here for 5 years. ✓` / `I am staying in Hyderabad. ✗ (meaning "I live there") → I live in Hyderabad. ✓`
   - *Why:* «నేను ఐదేళ్ళుగా ఇక్కడ పని చేస్తున్నాను» uses the Telugu continuous for something that began in the past. Telugu separates a length of time (-గా: ఐదేళ్ళుగా) from a starting point (నుంచి: 2015 నుంచి), which maps neatly onto *for / since* once it is pointed out. Owning is «నాకు కారు ఉంది» (to-me car is), not a continuous, so *I am having* is an Indian English habit rather than a Telugu calque.
   - *Evidence:* [research-backed, features only] Demszky et al.: STATIVE PROGRESSIVE `he is having a television` own 3; HABITUAL PROGRESSIVE `always we are giving receipt` own 2: present but rare in that sample. [practitioner opinion] TalkDrill (`I am having a car`, `I am working here since 5 years`).
   - **Content consequence:** lighter than in hi-en: handled by reweighting `continuous`, `perfect` and `perfect-2` (the -గా / నుంచి key), with no extra lesson (§8 "Considered").
6. **Uncountables, irregular plurals and 's.**
   - *Examples:* `many advices ✗ → a lot of advice ✓` / `all the musics ✗ → all the music ✓` / `two childrens ✗ → two children ✓` / `Ravi phone ✗ → Ravi's phone ✓` / `one of my friend ✗ → one of my friends ✓`
   - *Why:* Telugu **does** add a plural ending after a number (రెండు పుస్తకాలు; en-te §4.8 lists `రెండు పుస్తకం` as an error), so plain *two books* is easy; this is a difference from Hindi. The trouble is elsewhere: English uncountables that Telugu counts (సలహాలు, సామాన్లు), Telugu mass nouns that are grammatically plural (నీళ్ళు "water", పాలు "milk"; Bilinguistics: "mass nouns are plural in Telugu"), irregular plurals, and possession, which Telugu often shows with no ending (రవి ఫోన్).
   - *Evidence:* [research-backed, features only] Demszky et al.: MASS NOUNS AS COUNT NOUNS `all the musics are very good` own 13. [curriculum convention] Wikipedia *Indian English*: mass nouns such as *evidence, equipment, training* are treated as count nouns.
   - **Content consequence:** the plural half of the standing rule earns its place through countability, irregulars and *this / these*, not through "-s after a number".
7. **Prepositions for Telugu endings.**
   - *Examples:* `I am angry on him. ✗ → I'm angry with him. ✓` / `She is married with my brother. ✗ → She's married to my brother. ✓` / `We discussed about the plan. ✗ → We discussed the plan. ✓` / `I came in bus. ✗ → I came by bus. ✓` / `I went another school. ✗ → I went to another school. ✓`
   - *Why:* Telugu puts the relation after the noun, as an ending (-లో, -కి, -తో) or a separate word (మీద, గురించి, నుంచి), and one ending covers several English prepositions: -లో = in / at / on / by (బస్సులో), -కి = to / for / at (ఐదు గంటలకి), మీద = on / about / with (అతని మీద కోపం → *angry on him*), గురించి = about (→ *discuss about*).
   - *Evidence:* [curriculum convention, contrastive, no learner data] Renuka Devi 2025: English is head-initial with free-standing prepositions, Telugu head-final with suffixed postpositions (`udyānavanam-lō` "in the park"); there is "no one-to-one correspondence", and she reports Rao (2018, not opened) that learners "overgeneralise case-based patterns". [research-backed, features only] Demszky et al.: PREPOSITION OMISSION `I went (to) another school` own 17. [practitioner opinion] TalkDrill (`angry on him`, `married with`, `discuss about`, `cope up`).
8. **Word order beyond the simple sentence: fronting, doubled subjects, dropped pronouns, *only* and *itself*.**
   - *Examples:* `Minimum one month you have to wait. ✗ → You have to wait at least a month. ✓` / `My brother, he lives in California. ✗ → My brother lives in California. ✓` / `She doesn't like. ✗ → She doesn't like it. ✓` / `I was there yesterday only. ✗ → I was there just yesterday. ✓` / `Tomorrow I office will go. ✗ → I'll go to the office tomorrow. ✓`
   - *Why:* Telugu is verb-final, puts the topic first, and drops subjects and objects that are clear from context (Wikipedia *Telugu grammar*: word order "tends to be subject–object–verb", head-final and pro-drop). The emphatic ending -ఏ (నిన్ననే, ఇక్కడే) is what *only* and *itself* translate.
   - *Evidence:* [research-backed, features only] Demszky et al.: LEFT DISLOCATION Lange 300; RESUMPTIVE SUBJECT PRONOUN Lange 287; TOPICALIZED NON-ARGUMENT Lange 272; OBJECT FRONTING Lange 186, own 14; FOCUS *only* Lange 95, own 8; FOCUS *itself* Lange 24, own 5; DIRECT OBJECT PRO-DROP `she doesn't like (it)` own 14; GENERAL EXTENDER `and all` own 7. [practitioner opinion] TalkDrill (`Tomorrow I office will go`, `today itself`).
   - **Content consequence:** full SOV sentences are rare in adults with school English; the visible problems are fronting, the missing object *it* and the doubled subject. Handle them in `present`, `object-have`, `relative` and `indian-english`.
9. **he / she / it.**
   - *Examples:* `My sister is a doctor. He works in Vizag. ✗ → She works in Vizag. ✓` / `(of a baby or a girl) It is sleeping. ✗ → She's sleeping. ✓`
   - *Why:* Telugu splits the third person singular into **masculine vs everything else**: the verb for *she* and for *it* is the same (ఆమె వచ్చింది, అది వచ్చింది; Wikipedia *Telugu grammar*: `veḷḷāḍu` "he went" vs `veḷḷindi` "she / it went", "feminine and neuter sometimes share the same singular forms"; en-te §2.3 notes that అది is also "she" in familiar speech). Pronouns are chosen by respect and distance as much as by sex (అతను / ఆయన / వాడు; ఆమె / ఆవిడ). In the plural the split is human vs non-human (వాళ్ళు / అవి).
   - *Evidence:* **none for the English error.** The Telugu system is documented; that it produces *he / she / it* slips in English, and how often, is this profile's prediction [native check]. Treat as a light zone: one body note in `be`, one in `object-have`.
10. **Comparison, connectors, reported speech (lesson-local).**
    - *Examples:* `This is more better. ✗ → This is better. ✓` / `Although it was late, but I went. ✗ → Although it was late, I went. ✓` / `He said that I am tired. ✗ (meaning he is tired) → He said (that) he was tired. ✓` / `If it will rain, I will stay home. ✗ → If it rains, I'll stay home. ✓`
    - *Why:* Telugu compares with కంటే and no change in the adjective; it pairs అయినా … కానీ; it reports speech by quoting the speaker's own words before అని; the Telugu *if* form (-ితే) has no tense.
    - *Evidence:* [practitioner opinion] TalkDrill (`more better`, `most fastest`). The rest is this profile's inference.
11. **Indian English usages: acceptable at home, unclear abroad.**
    - **Not errors in India; unusual abroad:** *prepone*, *out of station*, *pass out* (= graduate), *do the needful*, *kindly adjust*, *revert* (= reply), *updation*, *tiffin*, *hotel* (= restaurant), and in the south *brinjal*, *petrol bunk*, *ayyo* ([Wikipedia, *Indian English*](https://en.wikipedia.org/wiki/Indian_English); most of these entries cite dictionaries).
    - **Treat as acceptable features, mention but do not mark ✗:** sentence-final *only / itself* for emphasis, *no?* or *right?* as a tag, *and all*, lakh and crore, British spelling and vocabulary, retroflex t / d, monophthong FACE and GOAT, an unreduced clear rhythm.
    - **Errors in any variety (mark ✗):** *discuss about*, *revert back*, *cope up*, *more better*, *didn't went*, *Why you are late?*, *isn't it?* after any subject, *I am having a car*.
    - **Telugu calques** [practitioner opinion, mine; native check; no source opened]: *Where do you stay?* for "Where do you live?" (ఉండు = stay / live / be), *I'll go and come* (వెళ్ళొస్తాను), *one* for *a*, *What is your good name?*, *native place*, *my mother's younger sister* for *aunt*, *simply* for "for no reason" (ఊరికే).
    - *Evidence:* [curriculum convention] Wikipedia *Indian English*; [practitioner opinion] TalkDrill (*prepone, revert back, do the needful, out of station, cope up, discuss about*, emphatic *only*).
12. **Things that are *not* zones** (do not over-teach):
    - r / l, p / b, k / g: Telugu has these contrasts; Wiltshire 2015 found "a distinction is clearly made between p/b, t/d, k/g" by all groups. Keep *rice / lice*, *right / light* as warm-ups.
    - The plural after a number (§4.6), and the idea of vowel length (Telugu has long and short vowels; §4.13).
    - /æ/: Telugu has it in English loans (Bhaskararao & Ray: /æː/ gains "phonemic status when words borrowed from English are included", as in *band*), and Wiltshire's Telugu speakers kept *had* distinct.
    - Indian accent features that do not block understanding (§4.11).
13. **Pronunciation.** Background: Sirsa & Redford 2013 (abstract) argue that Indian English has its own target phonology; so the course aims at **intelligibility to international listeners**, not at removing an Indian accent. Each item is tagged.
    - **A vowel after a final consonant, and around clusters:** `bus` → *bassu*, `school` → *iskūlu*, `bed` → *beddu*, `film` → *filam*.
      - [research-backed] Bhaskararao & Ray: "The only consonants that can occur word-finally in the native vocabulary are /m/ and /j/"; clusters are commoner in loans and "most of the consonant clusters of the source language are retained in formal educated speech". [curriculum convention] Wikipedia *Telugu language*: an emphatic *u* is sometimes added to loans ending in a consonant ("school" → *iskūlu*). [practitioner opinion] Bilinguistics (`bed` → *beddu*; "may insert a final vowel casually"); TalkDrill (*fil-um*, *es-school*, all India).
      - Telugu itself spells the loans this way (బస్సు, కారు, స్కూలు, బ్యాంకు; en-te §2.8). **This is the top sound zone for the course**: the aid must show a bare final consonant (§6).
    - **/θ ð/ → dental stops:** `think` with థ, `this` → *dis*, `three` ≈ `tree`.
      - [research-backed] Bhaskararao & Ray: English /θ/ "was rendered as /tʰ/" in loans. [curriculum convention] Wikipedia *Indian English* (citing Wells 1982): /θ ð/ are usually dental stops. [practitioner opinion] TalkDrill.
    - **/z/ → j, and the reverse:** `zero` → *jero*, `zoo` = `Jew`; `fridge` → *friz*.
      - [research-backed, indirect] Bhaskararao & Ray list no /z/; Perso-Arabic /z/ "rendered as" /ʤ/. [curriculum convention] Wikipedia *Indian English*: in Telugu /z/ and /dʒ/ are allophones in some cases, "fridge" → "friz" (uncited there). [practitioner opinion] TalkDrill (*jero*, *jombie*).
    - **/v/ as a soft [ʋ]; /w/ mostly fine:**
      - [research-backed, 5 Telugu speakers, 30 tokens per spelling] Wiltshire 2015, Table 8: for words spelled *w* the Telugu speakers used [w] 23 times and [ʋ] 7; for words spelled *v* they used [ʋ] 22 times, [v] or [f] 4 and [w] once. So Telugu speakers **keep the two apart** (unlike Wiltshire's Tamil speakers and the Gujarati speakers of earlier work), but their *v* is an approximant, not a fricative. Teach *v* as "teeth on lip, with a buzz"; do not present v / w as a merger.
    - **/f/:** light. [research-backed] Bhaskararao & Ray: /f/ came in with loans, and Sanskrit /pʰ/ is "often realized as /f/ in 'anglicized' pronunciation"; Telugu spells f with ఫ.
    - **/ʃ/ and /ʒ/:** [research-backed] Bhaskararao & Ray: English /ʃ/ "was rendered as /ʂ/" (the letter ష). Jain et al.: the literature suggested Telugu speakers replace /ʃ/ with /s/, but their data did not show it. /ʒ/ (*measure*) has no Telugu sound. Light.
    - **Vowel quality in *ship / sheep*, *full / fool*; *caught* like *coat*:**
      - [research-backed, 5 Telugu speakers] Wiltshire 2015: "Telugus … produce heat and hit with nearly the same quality" and tell them apart by length (172 ms vs 74 ms); *hoot* and *hook* overlap in quality only for the Telugu group (148 vs 85 ms); "the vowels of caught and coat overlap for all groups", and none has a *cot / caught* contrast.
      - [research-backed, 5 Telugu speakers] Payne et al. 2019: some speakers reuse lax vowel variants that Telugu vowel harmony already gives them, others build new categories for English /ɪ ʊ/.
      - Consequence: length is already there; the lesson adds the *quality* difference for /ɪ/ and /ʊ/, and steers *caught, talk, walk* away from ఓ (§6).
    - **y- and w- before an initial vowel:** `every` → *yevery*, `end` → *yend*, `only` → *wonly*, the letters M, N, S as *yem, yen, yes*.
      - [research-backed, native-language description] Jain et al., on the Kannada–Telugu group: "front vowels /i/ and /e/ are preceded by /j/, and back vowels /u/ and /o/ are preceded by /ʋ/" at the start of a word (sometimes). The English examples are mine [native check].
    - **Stress and rhythm:** equal weight on every syllable, full vowels where English reduces them.
      - [research-backed] Bhaskararao & Ray: "Telugu does not have lexically contrastive stress or pitch." [curriculum convention] Wikipedia *Indian English*: syllable-timed rhythm. [practitioner opinion] TalkDrill (*com-FOR-table*, *de-VE-lop*).
      - Consequence: the aid marks stress on every word of two or more syllables (§6).
    - **r after a vowel:** [research-backed, 5 Telugu speakers] Wiltshire 2015: r was pronounced in 97% of pre-vocalic positions (a tap in 54%) but in only 15% of post-vocalic ones. American English keeps it (*car, work, four*); the aid writes ర్ there. Light: say it once in `pron`.
    - **p, t, k:** [research-backed] Wiltshire 2015: Telugu speakers' mean VOT 40, 27 and 50 ms: lightly aspirated; voiced stops fully voiced. Light.
    - **Retroflex t / d:** part of the shared Indian English norm (Wikipedia, citing Sailaja). Light: mention, do not drill.
    - **Voicing between vowels:** [research-backed] Jain et al. report "interchangeable voiced and unvoiced consonants" as a regional feature of Dravidian speakers, "especially for Tamil or Telugu". Light; no item in the course depends on it.

## 5. Learner starting point

- **Who speaks Telugu.** 83 million first-language and 13 million second-language speakers (2011 census), the fourth most spoken native language in India; official in Andhra Pradesh and Telangana ([Wikipedia, *Telugu language*](https://en.wikipedia.org/wiki/Telugu_language)) [curriculum convention: census via Wikipedia]. Abroad: more than 400,000 Telugu Americans; Telugu was called "the fastest-growing language in the United States", with speakers up 86% from 2010 to 2017 (same page).
- **School exposure** [curriculum convention unless tagged]:
  - **Telangana: 73.8%** of school students were in English-medium schools in 2019–20 (UDISE data, reported by [The Federal, 3 July 2021](https://thefederal.com/education/preference-of-english-medium-instruction-rises-in-south-india-except-karnataka)). **Andhra Pradesh** announced in September 2019 that English would be the medium of instruction in all government schools (same article; no enrolment figure given).
  - So the adult audience splits: learners under about 25 who had English-medium schooling of mixed quality, and older or rural learners from Telugu medium who studied English as a subject. Wiltshire's five Telugu graduates all began English after kindergarten; Payne et al.'s five began at age 4–5.
  - **Pronunciation notation:** the *Oxford Compact English-English-Telugu Dictionary* "gives accurate pronunciation of words in IPA and Telugu script" and was distributed to Telangana Social Welfare and Tribal Welfare schools ([Deccan Chronicle, 29 August 2023](https://deccanchronicle.com/education/290823/telugu-language-day-2023.html)). Whether the state English syllabuses teach phonetic symbols was not found (§11).
  - Adults typically read and write English better than they speak and listen [practitioner opinion; the EF skill pattern below agrees].
- **Goals** [practitioner opinion, mine, except the cited figures]: software and service jobs in Hyderabad, interviews and campus placements, study and work abroad (the US figures above), IELTS / TOEFL / PTE, and government and bank exams with an English section. Name the real use in lesson blurbs («ఇంటర్వ్యూలో పనికొస్తుంది», «ఆఫీసు ఈమెయిల్‌లో») where true; never promise score gains.
- **Profile figures** [research-backed, test-taker data; self-selected online test-takers of many L1s]: EF EPI fact sheet for India (companion to the 2025 edition): overall **479**, rank **69** (global average 485); **reading 531, writing 494, speaking 454, listening 408**. Regions: **Telangana 510**, **Andhra Pradesh 495**. Cities: Vijayawada 553, Guntur 547, **Hyderabad 532**, Rajahmundry 502, Visakhapatnam 497, Vizianagaram 464, Warangal 461, Tadepalligudem 444, Chittoor 432 ([EF EPI fact sheet, India](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-india-english.pdf)).
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, move fast.** Most adults are false beginners. The value is in typed production and audio.
  2. **Listening first.** Listening is the lowest EF skill by a wide margin (408). Weight listen-then-type review and minimal pairs (*ship / sheep*, *zoo / Jew*, *three / tree*, *caught / coat*, *bus* with no final vowel).
  3. **Never gate on articles or on *be*.** Article omission is the most frequent feature in Demszky et al.'s own sample of educated Indian English, and copula omission is attested there too.
  4. **Make the article and the helper verb carry the answer** in typed items (§7).
  5. **Respect Indian English.** Present international forms as "what listeners abroad expect" (§4.11).
  6. **Two states, one course.** Use both Hyderabad and Vijayawada / Visakhapatnam in examples; avoid words that mark only one region (§9).

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.**
  - [curriculum convention] The Oxford Compact English-English-Telugu Dictionary prints pronunciation "in IPA and Telugu script" ([Deccan Chronicle, 2023](https://deccanchronicle.com/education/290823/telugu-language-day-2023.html)): the publisher does not trust IPA alone for this audience. Whether schools teach phonetic symbols was not found (§11); hi.md §6 records that CBSE does not.
  - [curriculum convention] Telugu already has settled spellings for English sounds in loans: **్యా** for the vowel of *bank, cat* (బ్యాంకు; Bhaskararao & Ray give /bæːɳɖu/ "band"), **ఫ** for f (ఫోన్), ట డ for t d, ష for sh. Every reader knows them.
  - [research-backed] Telugu spelling is close to phonemic and **every written vowel is said**: there is no silent inherent vowel as in Hindi (en-te §6: "no silent a"). So a respelling can show exactly where a vowel is and is not, which is the top sound zone (§4.13).
- **What plain Telugu loan spelling gets wrong** (బస్సు, స్కూలు, థింక్, దిస్, జీరో, వెరీ):
  - a final -u, and a doubled consonant before it: the epenthesis itself;
  - థ / ద for /θ ð/, జ for /z/: the substitutions themselves;
  - one వ for /v/ and /w/;
  - no stress, and full vowels where English reduces them.
  An aid built on those spellings would write the errors into the course.
- **No study compares respelling, IPA and no aid** for Telugu learners. The recommendation is inference [practitioner opinion, mine].

**Recommendation: a Telugu-script respelling in every `pron` field (profile.json `"pron": "required"`), with pollu on every consonant that has no vowel after it, the Telugu nukta (U+0C3C) on the sounds Telugu lacks, and ˈ for stress.** Shown by default and hidden with the toggle «ఉచ్చారణ చూపించండి».
- **IPA rejected as the default:** it would let 776 zh strings be copied byte for byte, but Telugu-medium learners cannot read it, and it cannot show the one thing the Telugu eye needs to see: *this consonant has no vowel after it*. /bʌs/ and బస్ carry the same information only for someone who reads IPA.
- **`none` / `optional` rejected:** as in id.md and hi.md: every ko-based course carries an aid; an empty field needs untested engine rendering; and the short words where the aid matters most (*bus, think, zoo*) would be the ones left empty.
- **The cost of not copying zh, and how it is cut.** The key below is a **one-to-one table from zh's IPA symbols with five context rules**, so every te row is derived mechanically from the zh row for the same English string. A scratch converter written for this profile (not delivered; rebuild it as `tools/content/te/pron_te.js` from the rules below, on the model of `tools/content/hi/pron_hi.js`) converted **all 776 distinct `pron` strings found in `tools/content/zh/` with 0 failures, all passing `pronPattern`**, with only 3 words where two zh transcriptions give one respelling (*from* strong and weak, *he's / his* /hiz/–/hɪz/, and two zh spellings of *McDonald's*).
- **The risk: the nukta.** U+0C3C TELUGU SIGN NUKTA was added in Unicode 14.0 (2021) "for representing additional sounds" ([r12a, Telugu](https://r12a.github.io/scripts/telu/te)); it is not in everyday use, and **system Telugu fonts on older phones may not have the glyph** (not tested, §11). Before writers start, the lead must render «వ఼ెరి, జ఼ూ, థ఼ింక్, ద఼ిస్» on a real Android phone, an iPhone and Windows:
  - if all render: go ahead;
  - if not: bundle a Telugu web font that has U+0C3C for `.rom` / `.pron` (the engine already bundles a font for `nan`: `body.tg-nan`, src/app.html line 245), or
  - **fallback: IPA exactly as zh** (`"pronScript": "ˈ"` and zh's `pronPattern` copied from `tools/content/zh/profile.json`; every row copied from zh; the `pron` lesson then teaches the symbols). The rest of this profile does not change.
  - A nukta-free Telugu respelling (plain జ, థ, ద, వ) is **not** an acceptable fallback: it is the loan spelling criticised above.

**The key.**

*Vowels.* The independent letter is used at the start of a word, after another vowel and after ˈ when no consonant precedes; the sign after a consonant.

| Sound (zh IPA) | Independent / sign | Examples (te `pron`) | Note |
|---|---|---|---|
| FLEECE iː | ఈ / ీ | see సీ, leave లీవ఼్ | long |
| KIT ɪ; final unstressed -y i | ఇ / ి | live లివ఼్, very ˈవ఼ెరి | short; *ship / sheep* = షిప్ / షీప్ |
| DRESS e | ఎ / ె | bed బెడ్, yes యెస్ | short. **No collapse with FACE** (unlike hi) |
| FACE eɪ | ఏ / ే | name నేమ్, today టˈడే | long |
| TRAP æ | యా / ్యా | bad బ్యాడ్, bank బ్యాంక్, asked యాస్క్ట్ | the Telugu loan spelling; after a consonant the sign is య-vattu + ా |
| STRUT ʌ, schwa ə, NURSE ɜː | అ / (no sign) | cup కప్, about అˈబౌట్, work వర్క్ | **collapse**; the stress mark tells them apart |
| schwa at the end of a word | అ / (no sign) | banana బˈన్యాన, sofa ˈసోఫ | Telugu says the final inherent vowel short, which is right here; no special rule (unlike hi) |
| LOT and PALM ɑː | ఆ / ా | hot హాట్, copy ˈకాపి, father ˈఫాద఼ర్ | American value |
| THOUGHT ɔː (not before r) | ఆ / ా | talk టాక్, dog డాగ్, coffee ˈకాఫి | **collapse with ɑː**, as in Telugu loans (కాఫీ, టాక్) and in most American speech; keeps *caught* కాట్ away from *coat* కోట్ |
| NORTH ɔːr | ఓర్ / ోర్ | door డోర్, four ఫోర్, morning ˈమోర్నిఙ్ | as Telugu spells it; distinct from START |
| GOAT oʊ | ఓ / ో | go గో, hotel హోˈటెల్ | |
| GOOSE uː | ఊ / ూ | food ఫూడ్, two టూ | |
| FOOT ʊ; weak u | ఉ / ు | book బుక్, good గుడ్ | *full / fool* = ఫుల్ / ఫూల్ |
| PRICE aɪ | ఐ / ై | I ఐ, time టైమ్ | |
| MOUTH aʊ | ఔ / ౌ | house హౌస్, now నౌ | |
| CHOICE ɔɪ | ఆయ్ / ాయ్ at the end of a word; ఆయి / ాయి before a consonant; ఆయ / ాయ + the next vowel's sign before a vowel | boy బాయ్, point పాయింట్, noise నాయిజ఼్, enjoying ఇంˈజాయిఙ్ | the Telugu loan spellings (బాయ్, పాయింట్) |
| NEAR ɪr, SQUARE er, CURE ʊr | ఇర్, ఎర్, ఉర్ / ిర్, ెర్, ుర్ | here హిర్, there ద఼ెర్, sure షుర్ | |
| START ɑːr | ఆర్ / ార్ | car కార్, card కార్డ్ | |
| lettER ər | అర్ / ర్ after a consonant | water ˈవాటర్, later ˈలేటర్ | the r is written and, in American English, said |

*Consonants.* A dot below (చుక్క) always means "a sound Telugu does not have: do not say the plain letter".

| Sound | Write | Examples | Note for the `pron` lesson |
|---|---|---|---|
| p b k g | ప బ క గ | pen పెన్, bag బ్యాగ్ | |
| t d | ట డ | time టైమ్, day డే | the usual Telugu spelling; tongue tip on the ridge behind the teeth |
| tʃ dʒ | చ జ | check చెక్, job జాబ్ | always the "ch / j" value, never the ts / dz of చాలా, జరిగింది |
| f | **ఫ** (no dot) | fan ఫ్యాన్, coffee ˈకాఫి | in English words ఫ is always f: upper teeth on the lower lip, never ప + air |
| v | **వ఼** | very ˈవ఼ెరి, vine వ఼ైన్, have హ్యావ఼్ | upper teeth on the lower lip, with a buzz you can hold |
| w | **వ** (no dot) | wine వైన్, work వర్క్, twenty ˈట్వెంటి | round lips, teeth do not touch |
| θ | **థ఼** | think థ఼ింక్, three థ఼్రీ, mouth మౌథ఼్ | tongue tip between the teeth, air keeps flowing; not థ |
| ð | **ద఼** | this ద఼ిస్, the ద఼, brother ˈబ్రద఼ర్ | the voiced partner of థ఼; not ద |
| s z | స **జ఼** | bus బస్, is ఇజ఼్, zoo జ఼ూ | never plain జ for z: *zoo / Jew* = జ఼ూ / జూ |
| ʃ ʒ | ష **ఝ఼** | she షి, shop షాప్, measure ˈమెఝ఼ర్ | ష as Telugu spells sh; ఝ఼ is rare |
| h | హ | house హౌస్ | |
| m n | మ న | name నేమ్, since సిన్స్ | see the sunna rule below |
| ŋ | ం before క / గ; ఙ elsewhere | think థ఼ింక్, English ˈఇంగ్లిష్, long లాఙ్, singing ˈసిఙిఙ్ | no గ after ఙ [native check: ఙ is rare outside the alphabet chart; the alternative ంగ్ adds a g] |
| l r | ల ర | rice రైస్, light లైట్ | |
| j | య | yes యెస్, cute క్యూట్ | |

*Derivation rules (apply in this order to the zh IPA of the same English string).*
1. **Words and sentences.** Drop the slashes. Words are separated by one space. zh's ` ‖ ` between two sentences becomes a period and a space: `. `. zh's two slashed groups for alternatives become ` / `. No other punctuation, no digits, no Latin letters, no IPA symbols except ˈ.
2. **Stress: ˈ only in words of two or more syllables**, at the position zh puts it. Drop ˈ from one-syllable words and drop every ˌ (`/ˌfɪfˈtiːn/` → ఫిఫ్ˈటీన్). A syllable is a vowel symbol or a syllabic l / n (rule 6). The `pron` lesson says: «ˈ తర్వాత వచ్చే భాగాన్ని ఒత్తి పలకండి; మిగతా భాగాలు తేలికగా, చిన్నగా» [native check].
3. **Vowels and consonants** by the tables, symbol by symbol. A vowel after a consonant is written as its sign; otherwise as the independent letter (idea /aɪˈdiːə/ → ఐˈడీఅ).
4. **Pollu: every consonant with no vowel after it takes ్, including the last consonant of a word.** This is the opposite of hi rule 4 and it is the point of the whole aid: bus బస్, dog డాగ్, school స్కూల్, lived లివ఼్డ్, asked యాస్క్ట్, months మన్థ఼్స్. Inside a word the pollu makes a conjunct (స్కూ, ట్రీ); at the end it is visible. Where ˈ splits a cluster the pollu stays before the mark: Excuse ఇక్ˈస్క్యూజ఼్. The nukta comes **before** the pollu or the vowel sign (థ + ఼ + ్ + ర + ీ), which is also the order NFC gives.
5. **Schwa.** ə is the bare consonant (the inherent అ) wherever it stands, also at the end of a word; at the start of a word or after a vowel it is the letter అ (about అˈబౌట్, idea ఐˈడీఅ).
6. **Syllabic l and n** (zh PRON-RULES A4) are written as schwa + l / n: the consonant before them stays bare and ల / న follow by rules 4 and 7: people ˈపీపల్, table ˈటేబల్, seven ˈసెవ఼న్, station ˈస్టేషన్, isn't ˈఇజ఼ంట్, didn't ˈడిడంట్, student ˈస్టూడంట్, important ఇంˈపోర్టంట్. They count as a syllable for rule 2.
7. **Sunna (ం) for a nasal before its own stop, after a vowel:** n before t, d, tʃ, dʒ; m before p, b; ŋ before k, g (friend ఫ్రెండ్, don't డోంట్, lunch లంచ్, number ˈనంబర్, bank బ్యాంక్, enjoy ఇంˈజాయ్). This is how Telugu spells and reads these clusters (r12a: ం is "a homorganic nasal before a plosive"). Everywhere else the nasal is the letter: since సిన్స్, months మన్థ఼్స్, sometimes ˈసమ్టైమ్జ఼్, name నేమ్ (never a final ం).
8. **ɔː is ో before r and ా elsewhere; æ is ్యా after a consonant and యా otherwise; ɔɪ by position** (vowel table). These, the sunna rule and ŋ are the only context rules.
9. **Weak and strong forms** follow zh (PRON-RULES B), mapped by the table:

   | word | weak (default) | strong (alone, contrast, stranded) |
   |---|---|---|
   | a / an / the | అ / అన్ / ద఼ (ద఼ి before a vowel sound) | — |
   | to | ట; టు before a vowel | టూ |
   | for / from / at / of | ఫర్ / ఫ్రమ్ / అట్ / అవ఼్ | ఫోర్ / ఫ్రమ్ / యాట్ |
   | and / or / but | అండ్ / అర్ / బట్ | — |
   | can / could / should / would | కన్ / కడ్ / షడ్ / వడ్ | — |
   | do / does / did / have / has / had (auxiliary) | డ / డజ఼్ / డిడ్ / హవ఼్ / హజ఼్ / హడ్ | డూ, హ్యావ఼్ … as main verbs |
   | have to / has to | హ్యాఫ్ ట / హ్యాస్ ట | |
   | you / your / you're | యు / యుర్ / యుర్ | యూ |
   | me / he / she / we | మి / హి / షి / వి | మీ / హీ / షీ / వీ |
   | that (relative) / that (demonstrative) | ద఼ట్ | ద఼్యాట్ |
   | there | ద఼ెర్ | ద఼ెర్ |

10. **Contractions** as zh: I'm ఐమ్, it's ఇట్స్, I've ఐవ఼్, I'll ఐల్, don't డోంట్, can't క్యాంట్, that's ద఼్యాట్స్, there's ద఼ెర్జ఼్, what's వట్స్, isn't ˈఇజ఼ంట్.
11. **Numbers as words; abbreviations letter by letter**, each letter a separate word, by its American name: A ఏ, B బీ, C సీ, D డీ, E ఈ, F ఎఫ్, G జీ, H ఏచ్, I ఐ, J జే, K కే, L ఎల్, M ఎమ్, N ఎన్, O ఓ, P పీ, Q క్యూ, R ఆర్, S ఎస్, T టీ, U యూ, V వ఼ీ, W ˈడబల్యూ, X ఎక్స్, Y వై, Z జ఼ీ (TV టీ వ఼ీ). Note H = ఏచ్ (not హెచ్), Z = జ఼ీ (not జెడ్), and no య before the vowel of F, L, M, N, S, X (§4.13).
12. **Names** as the en-US voice says them (zh PRON-RULES D): listen to the TTS once and transcribe what it says (Ravi /ˈrɑːvi/ → ˈరావ఼ి). The `pron` lesson tells learners that an American says their names this way.
13. **Codas in full**, voiced finals voiced: -s as స్ / జ఼్ / ఇజ఼్ (cats క్యాట్స్, dogs డాగ్జ఼్, buses ˈబసిజ఼్), -ed as ట్ / డ్ / ఇడ్ (watched వాచ్ట్, played ప్లేడ్, wanted ˈవాంటిడ్). No inserted vowels, no doubled consonants: never బస్సు, ఇస్కూలు, ఫిలిం.
14. **Unicode.** NFC only. Letters used: అ ఆ ఇ ఈ ఉ ఊ ఎ ఏ ఐ ఓ ఔ, క గ ఙ చ జ ఝ ట డ థ ద న ప ఫ బ మ య ర ల వ ష స హ, the signs ా ి ీ ు ూ ె ే ై ో ౌ, ం, ్ and ఼ (only after జ వ థ ద ఝ). Never ZWNJ / ZWJ, never short ఒ / ొ, aspirates other than థ and ఝ, శ, ళ, ణ, visarga or Telugu digits. The `pronPattern` rejects all of these.

*Known collapses (one spelling for two sounds), and why they are acceptable.*
- **STRUT ʌ / schwa ə / NURSE ɜː → అ**: the stress mark separates them, as in hi. Stranded *from* is the only weak / strong pair that merges.
- **THOUGHT ɔː / LOT ɑː → ా** (caught = cot = కాట్): most American speakers merge them (Wiltshire 2015 notes the lack of a *cot / caught* contrast "as is common in American Englishes"), Telugu loans spell both with ా, and the collapse pulls learners away from the Indian English *caught* = *coat* (§4.13). No zh word pair is merged by it (checked on all 776 strings).
- **KIT ɪ / final i → ి**, **FOOT ʊ / weak u → ు**: the same in zh's practice for the weak forms.
- **Word-initial æ and /jɑː/ → యా** (*at* strong form = *yacht*): no /jɑː/ word occurs in zh's rows; if one is added (yard, yacht), the writer notes it.
- **ŋ + g / ŋ + k → ంగ / ంక** and bare ŋ → ఙ: *finger* ˈఫింగర్ and *singer* ˈసిఙర్ stay distinct.
- **Checked:** every pair in the pronunciation deck of zh (rice / lice, right / light, fan / pan, coffee / copy, think / sink, three / tree, very / berry, vote / boat, walk / work, leave / live, bed / bet, card / car, cap / cab, mouth / mouse, wary / vest / west, know / low, bad, friends, asked, months) derives to **distinct** respellings (converter output, 44 rows).

**`pron` lesson additions** (prose, not in `pron`; they change no English string) [native check for all Telugu wording]:
1. How to read the aid: «పొల్లు (్) ఉన్న అక్షరం తర్వాత అచ్చు లేదు: bus = బస్, బస్సు కాదు», «కింద చుక్క ఉన్న అక్షరం = తెలుగులో లేని శబ్దం», ˈ = ఒత్తి పలకడం, the American ా in *hot, job, stop* and in *talk, walk, coffee*.
2. **No vowel after the last consonant, none inside clusters:** bus, bed, school, film, friends, asked.
3. **థ఼ / ద఼** (think, three, this, the): tongue between the teeth; not థ, ద.
4. **జ఼** (zero, zoo, easy, is, dogs): a buzzing స; not జ.
5. **వ఼ vs వ** (very, vine, vest vs wary, wine, west): teeth on lip and a buzz vs round lips.
6. **Short ి and ు are not just shorter:** *ship / sheep*, *live / leave*, *full / fool*: the short ones are also more relaxed (Wiltshire 2015; Payne et al. 2019).
7. **No య or వ in front of a vowel:** every, end, M, N, S; only, open, old.
8. **Stress and weak vowels:** about, banana, photography, hotel; one strong syllable per word.
9. Optional note: Indian English t / d (ట, డ) and a tapped r are understood everywhere; spend the effort on items 2–8. Americans say the r in *car, work, four*.

**Validator settings (profile.json):**
- `"nativeScript": "[\\u0c00-\\u0c63]"`: Telugu letters and signs, **excluding** Telugu digits ౦–౯ (U+0C66–0C6F) and the fraction signs after them. So "Telugu" means at least one Telugu letter or sign. The class finds 0 characters in `packs/course-ko-en.js` and `packs/course-zh-en.js` (checked locally), so "English must not contain native script" is safe.
- **No `pronScript`.** The aid is in the native script, so the default check (`pron` must contain native script) applies, as in ko-en and hi-en.
- `"pronPattern"` (in profile.json with `\u` escapes; validate.js compiles it with flag `u`). In words: no nukta except after జ వ థ ద ఝ; every word, and every part after ˈ, begins with one of the 33 letters of rule 14; then only those letters, the 10 vowel signs, sunna, pollu and nukta; words are joined by one space, `. ` or ` / `. It **rejects** Latin letters, IPA other than ˈ, `?` `!` `,`, digits of both scripts, double spaces, a word that starts with a sign, a dangling ˈ, ZWNJ / ZWJ and every Telugu letter outside rule 14. It does **not** require ˈ (one-syllable rows have none) and does **not** require a final pollu (to ట, the ద఼, sofa ˈసోఫ end in a vowel); a missing pollu must be caught by the converter and by `lint.js` (same English, same aid).
- No `labels.cueTest` is needed: `nativeScript` is a real script. In the `more/` shorthand an mc `q` or type `hint` with no Telugu letter gets `labels.mcBlankCue` (« ఖాళీలో ఏది సరిపోతుంది?») or `typeHintCue` (« — ఈ పదాలతో») appended [native check]. That suits a gap question, not a translation question, so writers put the Telugu frame in themselves: `"నేను ఇక్కడ ఐదేళ్ళుగా ఉంటున్నాను" ఇంగ్లీష్‌లో?`, «సరైన వాక్యం ఎంచుకోండి.».
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote the respelling in prose and tables (`<b>వ఼ైన్</b>`).

**Worked examples.** "zh row" = the IPA string exists in `tools/content/zh/` exactly as shown; "new" = written in zh conventions for this profile. Every te `pron` is converter output and passes `pronPattern` (node check in §11).

| English | zh IPA (source) | te `pron` | Rule / Telugu trap shown |
|---|---|---|---|
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ (zh row) | ఇట్స్ కోల్డ్ టˈడే | no ˈ on one-syllable words; weak *to* inside *today* |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ (zh row) | ద఼ెర్జ఼్ అ క్యాˈఫే నిర్ హిర్ | ద఼ not ద; జ఼ not జ; ్యా for æ |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ (zh row) | కన్ యు క్లోజ఼్ ద఼ డోర్ | weak *can, you, the*; ɔːr = ోర్; no `?` |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ (zh row) | ఐ హ్యావ఼్ టూ ˈబ్రద఼ర్జ఼్ | వ఼ for v; plural జ఼్ |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ (zh row) | వి వాచ్ట్ అ ˈమూవ఼ి | వ (w) and వ఼ (v) in one row; -ed = ట్ |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ (zh row) | ఐ హ్యావ఼్ అ డాగ్. ద఼ డాగ్ ఇజ఼్ సో క్యూట్ | ‖ → `. `; ɔː = ా (American) |
| Where do you live? | /ˈwer də ju ˈlɪv/ (zh row) | వెర్ డ యు లివ఼్ | weak auxiliary *do*; final వ఼్ with pollu |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ (zh row) | నైస్ ట మీట్ యు | weak *to* = ట, *you* = యు |
| Thank you. | /ˈθæŋk ju/ (zh row) | థ఼్యాంక్ యు | థ఼ not థ; ం for ŋ before k |
| Hello. | /həˈloʊ/ (zh row) | హˈలో | ˈ; reduced first vowel |
| See you later. | /ˈsiː ju ˈleɪtər/ (zh row) | సీ యు ˈలేటర్ | ే for FACE; lettER = ర్ |
| Excuse me. | /ɪkˈskjuːz mi/ (zh row) | ఇక్ˈస్క్యూజ఼్ మి | pollu stays visible where ˈ splits a cluster; no ఇ before s |
| Have you eaten yet? | /həv ju ˈiːtn ˈjet/ (zh row) | హవ఼్ యు ˈఈటన్ యెట్ | syllabic n = bare ట + న్ |
| How long have you been here? | /ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/ (zh row) | హౌ లాఙ్ హవ఼్ యు బిన్ హిర్ | ఙ్ at the end of a word |
| Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ (zh row) | గుడ్ ˈమోర్నిఙ్ | ɔːr = ోర్ |
| I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ (zh row) | ఐ వర్క్ అట్ అ బ్యాంక్ | NURSE = అర్; బ్యాంక్ as Telugu already spells it, but with no final -u |
| It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ (zh row) | ఇట్స్ థ఼్రీ ˈథ఼ర్టి | థ఼్రీ: nukta, then pollu |
| think | /ˈθɪŋk/ (zh row) | థ఼ింక్ | θ |
| sink | /ˈsɪŋk/ (zh row) | సింక్ | vs s |
| three | /ˈθriː/ (zh row) | థ఼్రీ | θ |
| tree | /ˈtriː/ (zh row) | ట్రీ | vs t, the Telugu merger (థ్రీ / ట్రీ) |
| very | /ˈveri/ (zh row) | ˈవ఼ెరి | v: teeth on lip |
| wary | /ˈweri/ (zh row) | ˈవెరి | w: round lips |
| vest | /ˈvest/ (zh row) | వ఼ెస్ట్ | v |
| west | /ˈwest/ (zh row) | వెస్ట్ | w |
| bad | /ˈbæd/ (zh row) | బ్యాడ్ | æ |
| bed | /ˈbed/ (zh row) | బెడ్ | short ె |
| coffee | /ˈkɔːfi/ (zh row) | ˈకాఫి | ఫ = f |
| copy | /ˈkɑːpi/ (zh row) | ˈకాపి | vs p |
| walk | /ˈwɔːk/ (zh row) | వాక్ | ɔː = ా |
| work | /ˈwɜːrk/ (zh row) | వర్క్ | ɜːr = అర్ |
| leave | /ˈliːv/ (zh row) | లీవ఼్ | long ీ |
| live | /ˈlɪv/ (zh row) | లివ఼్ | short ి |
| mouth | /ˈmaʊθ/ (zh row) | మౌథ఼్ | final థ఼్ |
| mouse | /ˈmaʊs/ (zh row) | మౌస్ | final స్ |
| banana | /bəˈnænə/ (zh row) | బˈన్యాన | final schwa = bare న; stress in the middle |
| friends | /ˈfrendz/ (zh row) | ఫ్రెండ్జ఼్ | sunna before డ; -s = జ఼్ |
| asked | /ˈæskt/ (zh row) | యాస్క్ట్ | word-initial æ = యా; three consonants, no vowel between or after |
| months | /ˈmʌnθs/ (zh row) | మన్థ఼్స్ | న్థ఼్స్: no inserted vowel |
| fifteen / fifty | /ˌfɪfˈtiːn/ /ˈfɪfti/ (zh row) | ఫిఫ్ˈటీన్ / ˈఫిఫ్టి | two groups → ` / `; ˌ dropped |
| bus | /ˈbʌs/ (new) | బస్ | బస్, never బస్సు |
| school | /ˈskuːl/ (new) | స్కూల్ | no ఇ before the cluster, no -u after it |
| zoo | /ˈzuː/ (new) | జ఼ూ | z |
| Jew | /ˈdʒuː/ (new) | జూ | vs j (plain జ) |
| vine | /ˈvaɪn/ (new) | వ఼ైన్ | v |
| wine | /ˈwaɪn/ (new) | వైన్ | w |
| ship | /ˈʃɪp/ (new) | షిప్ | short ి |
| sheep | /ˈʃiːp/ (new) | షీప్ | long ీ |
| caught | /ˈkɔːt/ (new) | కాట్ | ా, not ో |
| coat | /ˈkoʊt/ (new) | కోట్ | ో |
| measure | /ˈmeʒər/ (new) | ˈమెఝ఼ర్ | ఝ఼ = ʒ (rare) |
| photography | /fəˈtɑːgrəfi/ (new) | ఫˈటాగ్రఫి | stress on the second syllable |
| boy | /ˈbɔɪ/ (new) | బాయ్ | ɔɪ = ాయ్ at the end |
| point | /ˈpɔɪnt/ (new) | పాయింట్ | ɔɪ = ాయి before a consonant |
| My name is Ravi. | /maɪ ˈneɪm ɪz ˈrɑːvi/ (new) | మై నేమ్ ఇజ఼్ ˈరావ఼ి | localised name (§9); listen to the TTS first |
| Five hundred rupees. | /ˈfaɪv ˈhʌndrəd ruːˈpiːz/ (new) | ఫైవ఼్ ˈహండ్రడ్ రూˈపీజ఼్ | currency as a word (§9) |
| It's a nice day, isn't it? | /ɪts ə ˈnaɪs ˈdeɪ ˈɪznt ɪt/ (new) | ఇట్స్ అ నైస్ డే ˈఇజ఼ంట్ ఇట్ | tag (te-only lesson `question-tags`) |
| I've lived here since 2015. | /aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd ˌfɪfˈtiːn/ (new) | ఐవ఼్ లివ఼్డ్ హిర్ సిన్స్ టూ ˈథ఼ౌజ఼ండ్ ఫిఫ్ˈటీన్ | number as words; వ఼్డ్ cluster |

- Rejected by `pronPattern` (checked): `/ˈjes/`, `yes`, `బస్?`, `ఇట్స్  కోల్డ్` (two spaces), `కోల్డ్ ˈ`, `ఇట్స్,కోల్డ్`, `౨౦౧౦`, `2010`, `్క` (starts with a sign), `పాస్‌వర్డ్` (ZWNJ), `క఼` (nukta on a letter outside the key), `ఒన్` (short ఒ), `థాంక్స్ః`.
- Accepted although wrong, so only the converter and review catch them: `బస్సు` (the loan spelling) and `థింక్` (no nukta). Writers never type a `pron`; they convert.
- Before writing a "new" row, writers grep `tools/content/zh/` for the English string; if it exists there, derive from that IPA.

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "ఆర్టికల్|బహువచన|లెక్కించ" }` (no `flags`: Telugu has no case).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **ఆర్టికల్**, **బహువచనం** or **లెక్కించదగిన / లెక్కించలేని**.
- **Why stems:** Telugu adds endings to these words, and the final ం of బహువచనం drops before some of them (బహువచనంలో, but బహువచన రూపం, బహువచనానికి), so the regex keeps the stem `బహువచన`. `లెక్కించ` matches లెక్కించదగిన and లెక్కించలేని. `ఆర్టికల్` also matches ఆర్టికల్స్ and ఆర్టికల్‌ను (the ZWNJ comes after the match). JavaScript's `\b` is ASCII-only, so no boundary is used. `బహువచన` does not match ఏకవచనం, which is right.
- **What the validator counts** (validate.js `article-plural`, as hi.md §7 records it): `order`: the `why` matches **and** `x` holds an article tile or a singular / plural twin of a tile in `a`; `type`: the `why` matches **and** every variant in `a` contains an article, or `x` holds an article or a twin of a word in `a[0]`. Put the competitor tile in `x`.

**Sample `why` lines** (all tested locally with `new RegExp(keywords)` exactly as validate.js builds it; node output in §11) [native check for the Telugu]:
- «ఉద్యోగం పేరు ముందు ఆర్టికల్ a వస్తుంది: a teacher.» → hit
- «two తర్వాత బహువచనం: brothers.» → hit
- «information లెక్కించలేని నామవాచకం: ఆర్టికల్ a రాదు, -s రాదు.» → hit
- «రెండోసారి చెప్పినప్పుడు ఆర్టికల్ the.» → hit
- «these బహువచనానికి, this ఒక్క వస్తువుకి.» → hit (stem)
- «లెక్కించదగిన నామవాచకం ఏకవచనంలో ఉంటే a కావాలి.» → hit
- «ఇక్కడ ఆర్టికల్‌ను వదిలేయకూడదు: the door.» → hit (ZWNJ form)
- «children ఇప్పటికే బహువచన రూపం; childrens తప్పు.» → hit
- «Simple Present లో he తో -s వస్తుంది.» → **no hit** (correct: not an article / plural point)
- «advice ని లెక్కపెట్టలేం, అందుకే advices తప్పు.» → **no hit**: the point is countability, so the writer must say «లెక్కించలేని».
- «ఇది ఒక్కటే, అందుకే a.» → **no hit**: name the ఆర్టికల్.

**Writer rules (keep the count meaningful):**
- Write «బహువచనం» in full; never «బహు.», «ప్లూరల్» or «చాలా» for the grammar point. Write «ఆర్టికల్», never «ఉపపదం» or a bare «a / the».
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `why`, `hint` and `q` needs at least one Telugu letter (§6).

**Justification:**
- **Articles:** Telugu has none; article omission and the extra article are the two most frequent features in Demszky et al.'s own ICE-India sample (§4.1) [research-backed, features only, many L1s]. No Telugu error rate was found (§11).
- **Plurals and countability:** weaker than for Hindi on the plain "-s after a number" (Telugu has that), but real on uncountables, irregular plurals, *this / these* and *one of my friends* (§4.6; MASS NOUNS AS COUNT NOUNS, Demszky et al.) [research-backed, features only].
- **Parity cost is zero:** the shared `order` / `type` items were written to the Korean rule; only the Telugu `why` must name the keyword [practitioner opinion; consequence of the shared English side].
- **Why not a *be* / *do* rule** (the `verb-core` kind that es uses)? §4.2–4.4 would justify it, but te-en is scaffolded from ko-en, whose items were written to `article-plural`; `verb-core` would need a share of the shared items rewritten (each a deviation). The helper-verb zone gets the reweights of `be`, `questions`, `present`, the `question-tags` lesson and the secondary wording below. Revisit with first-attempt logs.

**Secondary emphasis (not validated; do not add these to the regex)** [native check]:
- An item that turns on *be* says so: «తెలుగులో క్రియ లేకపోయినా ఇంగ్లీష్‌లో is తప్పనిసరి.»
- An item that turns on *do* names **సహాయక క్రియ do**: «ప్రశ్నలో సహాయక క్రియ do ముందు వస్తుంది: Do you like tea?»
- An item on habit vs future: «అలవాటు = Simple Present; will కాదు.»
- An item on duration: «"-గా" (ఎంత కాలం) = for; "నుంచి" (ఎప్పటి నుంచి) = since.»
- An item on -s says «he / she / it తో వచ్చే -s».

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, id.md and hi.md):**
- **keep** = a fresh Telugu explanation from the Telugu point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Telugu explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

Ids and order are unchanged; nothing is replaced or dropped. The table has the 40 ids of `tools/content/lib.js` `ORDER` (the brief's 39 plus `alphabet`, added to the shared order since). ko-en's own extras `konglish` and `articles-3` are not in `ORDER` and are not carried over. All Telugu examples are **[native check]**; every verdict is [practitioner opinion] grounded in §4.

| lesson id | keep / reweight / add | note for Telugu speakers |
|---|---|---|
| alphabet | reweight | American letter names against the Indian school ones: H = *aitch* (not *hetch*), Z = *zee* (not *zed*), W in three syllables. No య before the vowel of F, L, M, N, S, X (*ef*, not *yef*) and no vowel after it (*em*, not *emmu*) (§4.13). Spelling a name aloud: Telugu names with initials (K. Ravi) |
| pron | reweight | Teach the aid first (§6: పొల్లు = no vowel, చుక్క = a sound Telugu lacks, ˈ = stress). Then the te traps in §6's order: no final vowel (bus, bed, school), థ఼ / ద఼, జ఼, వ఼ / వ, short ి ు by quality, no y- / w- before vowels, stress and weak vowels. **Shared checks and practice stay as they are** (rice / lice, fan / pan, think / sink, vote / boat, right / light, coffee / copy, bag / back); their `why` lines say plainly when a pair is easy («ర, ల తెలుగులో కూడా వేరు: ఇది సులభం») and spend the words on think, three, vote and on the final consonant of every word |
| be | reweight | **Core for Telugu.** «నా పేరు రవి», «ఆమె డాక్టర్» have no verb; English always needs am / is / are (`My name Ravi ✗`, `She very tired ✗`, `They from Guntur ✗`). Then the opposite slip, *be* + verb (`I am agree ✗`). *he / she / it* against the Telugu split (§4.9): a body note. Short answers *Yes, I am* |
| it-there | reweight | «చల్లగా ఉంది», «లేట్ అయింది» have no subject → It's cold, It's late. «దగ్గర్లో ఒక కేఫ్ ఉంది» → There's a cafe near here; the Telugu order gives `Near here one cafe is there ✗` (§4.2) |
| articles | reweight | No ఆర్టికల్ in Telugu. *a* for jobs and "one of many"; ఒక ≈ *a* only sometimes, and *one* for *a* is a trap (`I have one doubt`); ఆ / ఈ ≠ always *the*. Both directions (§4.1) |
| plurals | reweight | Telugu also adds a plural after a number (రెండు పుస్తకాలు), so say that *two books* works the same way and move on. Spend the lesson on irregular plurals (people, children; `childrens ✗`), *one of my friends*, this / these (ఇది / ఇవి), possessive 's («రవి ఫోన్» → Ravi's phone, `Ravi phone ✗`), and -s said as స్ / జ఼్ / ఇజ఼్ with no vowel after it |
| present | reweight | Word order: «నేను టీ తాగుతాను» → I drink tea. **తాగుతాను is habit *and* future**: for a habit English uses Simple Present, not will (`I will drink tea daily ✗`). *don't* for the Telugu negative verb (తాగను → I don't drink). Preview the -s |
| questions | reweight | -ఆ questions → Do you like tea? (`You like tea? ✗`); the question word moves to the front and the helper follows it (`Where you are going? ✗`, `Where you live? ✗`). Says that tags and embedded questions come in `question-tags` |
| third-s | reweight | Telugu verbs change for every person (వెళ్తాను, వెళ్తాడు, వెళ్తుంది); English changes once, and that one -s is easy to lose at the end of a word. *does / doesn't* (`He do ✗`, `She don't ✗`) |
| prep | reweight | Endings → prepositions: -లో = in / at / on (`in bus ✗ → by bus`, on Monday, at home), -కి = to / at / for («ఐదు గంటలకి» → at five), -తో = with, నుంచి = from / since, మీద = on / about / with (`angry on ✗`), గురించి (`discuss about ✗`). *married to* |
| countable | reweight | సలహాలు, సామాన్లు, పనులు are counted in Telugu: advice, luggage, furniture, work, information are not (`many advices ✗`). నీళ్ళు and పాలు are plural words in Telugu; water and milk take *is*. *a piece of*, *some* |
| object-have | reweight | «నాకు కారు ఉంది» (to-me car is) → I have a car: the owner is the subject (`To me a car is there ✗`), and owning is never -ing (`I am having a car ✗`). Say the object: «నాకు ఇష్టం లేదు» → I don't like **it** (§4.8). me / him / her; *it* for things |
| can-like | reweight | «నాకు టీ ఇష్టం» → I like tea; «నాకు ఈత వచ్చు» → I can swim (`Swimming comes to me ✗`). The person is the subject. like + -ing |
| polite | reweight | Telugu politeness lives in మీరు and -ండి; English puts it in could / would / please: `Give me one coffee ✗ → Could I have a coffee?`. *Kindly* + order sounds stiff abroad (preview of `indian-english`). *You're welcome* as the reply to thanks |
| continuous | reweight | Telugu -తున్నాను = am / is / are + -ing for actions now. Not for states: know, want, understand, have (owning), need. *I'm staying* is for a short stay; "ఉంటున్నాను" as "live" is *I live*. Preview: «ఐదేళ్ళుగా … చేస్తున్నాను» is not Present Continuous (§4.5) |
| past | reweight | *did* + V1 in questions and negatives (`I didn't went ✗`, `Did you saw? ✗`); -ed said as ట్ / డ్ / ఇడ్ with no vowel after it (worked ≠ *work-ed-u*) |
| irregular-past | keep | Learners drilled V1 / V2 / V3 tables at school; use that habit for typed recall |
| the | reweight | Both directions: second mention, shared knowledge and unique things take *the*; general uncountable and abstract nouns take none (`The life is hard ✗`) |
| adjectives | reweight | Telugu compares with కంటే and leaves the adjective alone («రవి కంటే పొడుగు»): English needs -er **or** more, never both and never neither (`He is tall than me ✗`, `more better ✗`). కంటే → than |
| going-to | keep | |
| tense | reweight | Recap table of Telugu forms and their English matches: చేస్తాను → *I do* (habit) **or** *I will do*; చేస్తున్నాను → *I'm doing*; చేశాను → *I did* **or** *I've done*. Mark the two one-to-two matches; time words help but do not choose alone |
| joining | reweight | «అయినా … కానీ» → although *or* but, never both; «ఎందుకంటే … కాబట్టి» → because *or* so; «అని» → that (He said that …); *because* before a clause, *because of* before a noun |
| numbers | reweight | lakh and crore: 1,00,000 = a hundred thousand; 10 lakh = a million; 1 crore = ten million. Dates DD/MM/YYYY vs US month / day. Prices in rupees («five hundred rupees», no ₹ or Rs. in English strings) |
| smalltalk | reweight | How are you? is a greeting. Opening questions common at home (salary, marriage, children, «భోజనం అయిందా?») are personal abroad. *What's your name?* (not *good name*), *Where do you live?* (not *Where do you stay?*), *I'm from Vijayawada*. Deck localised (§9) |
| **indian-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | reweight | The other half of `present`: *will* for a decision made now, a promise or a prediction, **not** for habits or timetables (§4.4). Keep ko's contrast with *going to* |
| perfect | reweight | చేశాను is both *did* and *have done*: with a finished time English takes the Simple Past (`I have seen him yesterday ✗`). been to vs gone to |
| modals | reweight | -ఆలి (వెళ్ళాలి) = must / have to / should: English splits by strength. -గలను / వచ్చు = can / may; కూడదు = mustn't; «అవసరం లేదు» = don't have to (not mustn't) |
| **question-tags** | **add** (after `modals`, A2) | See below |
| to-ing | reweight | Verb patterns: `look forward to meet you ✗ → to meeting you` (common in Indian email), `avoid to go ✗`, `suggest me to go ✗` |
| articles-2 | reweight | Generic plurals and uncountables without *the* (Dogs are loyal; Cricket is popular); the unique *the*; country names (India, *the* US) |
| first-conditional | reweight | The Telugu *if* form (వర్షం పడితే) carries no tense; English takes the present after if / when (`If it will rain ✗ → If it rains`) |
| relative | reweight | Telugu puts the describing clause before the noun with no *who / which* («నిన్న వచ్చిన అతను»): English puts it after, with who / that, and does not repeat the subject or object (`The man who came yesterday, he is my uncle ✗`, `the book which I read it ✗`; §4.8) |
| phrasal | keep | |
| perfect-2 | reweight | **-గా = for, నుంచి = since:** «రెండేళ్ళుగా» → for two years, «2015 నుంచి» → since 2015 (`since two years ✗`), with the Present Perfect, not the continuous Telugu uses (`I am working here since 2015 ✗ → I've worked here since 2015`). Body note: *have been -ing* for actions, the plain perfect for states (I've known her for years) |
| narrative | keep | |
| conditionals | reweight | Telugu has one unreal form (-ి ఉంటే) for present and past; English splits by time (If I knew / If I had known) |
| passive | reweight | Spoken Telugu avoids the passive (-బడు is bookish), so learners either avoid it or copy Indian office style (`It is informed that …`). Teach when English prefers it (The road was closed) and keep the shared items |
| reported | reweight | Telugu quotes the speaker's own words before అని: «అతను నేను అలసిపోయాను అని చెప్పాడు» → He said (that) he was tired (`He said that I am tired ✗`: wrong person and tense). *told me*, not *said me* |
| email | reweight | Indian office habits that read oddly abroad: *Respected Sir*, *Kindly do the needful*, *PFA*, *revert* → Dear Mr. Rao / Hi Divya, *Could you please …*, *I've attached …*, *I'll get back to you*. First name and last name on forms abroad, against initials before the name (K. Ravi) |
| idioms | reweight | Telugu idiom calques that do not exist in English; note that *eating my head* and *It's like that only* are Indian English |

**Totals:** 40 existing lessons (24 A1, 9 A2, 7 B1): **5 keep** (irregular-past, going-to, past-continuous, phrasal, narrative) and **35 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 25 and A2 to 10.

**Additions:**
- **`indian-english`**: title «ఇండియన్ ఇంగ్లీష్: ఇక్కడ సరే, విదేశాల్లో వింత» [native check], after `smalltalk` (end of A1), deck 22 (§9).
  - *Same id as the hi-en lesson on purpose:* the English side of hi-en's lesson and deck (international forms of *prepone, out of station, good name, pass out, revert, do the needful* …) can be reused, with its zh-convention IPA converted by §6; the Telugu items below are added. The lead may rename it; nothing else depends on the id.
  - *Framing:* Indian English is a real variety; group 1 is understood at home and gets no ✗.
  - *Content:*
    1. **Fine in India, unusual abroad** (→ international form): prepone (→ move up), out of station (→ out of town), pass out (→ graduate), do the needful (→ please take care of it), revert (→ reply / get back to you), kindly adjust (→ sorry for the trouble), hotel (→ restaurant), tiffin (→ breakfast / a snack), petrol bunk (→ gas station), brinjal (→ eggplant), today itself / now only (→ today / right now), and all (→ and so on).
    2. **Wrong in any variety** (✗ → ✓): discuss about, revert back, cope up, more better, *isn't it?* after every sentence, *Myself Ravi* (→ I'm Ravi), *I have a doubt* for a question.
    3. **Telugu calques** [native check]: Where do you stay? (→ Where do you live?), I'll go and come (→ I'll be right back / See you later), one for a (→ a), What is your good name?, native place (→ hometown), simply (→ for no reason).
  - *Practice that meets §7* (sketch; every order and type `why` that hinges names ఆర్టికల్ / బహువచనం / లెక్కించలేని):
    - order `p:"నేను ఒక ప్రశ్న అడగవచ్చా?"`, `a:["Can","I","ask","a","question"]`, `x:["doubt","the"]`, why «doubt అంటే అనుమానం; ప్రశ్నకు question, ఒక ప్రశ్న కాబట్టి ఆర్టికల్ a.»
    - order `p:"నేను ఈ వారం ఊళ్ళో లేను"`, `a:["I'm","out","of","town","this","week"]`, `x:["station","the"]`, why «out of station ఇండియాలో వాడతారు; విదేశాల్లో out of town. town ముందు ఆర్టికల్ రాదు.»
    - order `p:"మీటింగ్ ముందుకు జరుపుదాం"`, `a:["Let's","move","the","meeting","up"]`, `x:["prepone","a"]`, why «prepone విదేశాల్లో అర్థం కాకపోవచ్చు: move up. ఏ మీటింగో ఇద్దరికీ తెలుసు కాబట్టి ఆర్టికల్ the.»
    - type `p:"నాకు కొంచెం సలహా కావాలి"`, `a:["I need some advice","I need advice"]`, `x:["advices"]`, why «advice లెక్కించలేని నామవాచకం: advices అనే బహువచనం లేదు.»
    - type `p:"దగ్గర్లో మంచి రెస్టారెంట్ ఉందా?"`, `a:["Is there a good restaurant near here","Is there a good restaurant nearby"]`, `x:["hotel"]`, why «భోజనం చేసే చోటు restaurant; hotel అంటే బస చేసే చోటు. ఒకటి, ఏదైనా: ఆర్టికల్ a.»
    - type `p:"మీరు ఎక్కడ ఉంటారు?"`, `a:["Where do you live"]`, `x:["stay"]` (not a hit; fine, half is enough)
  - *Parity:* new lesson id (`extraLessons`) and a new deck (deck count deviation).
  - *Reason:* §4.11. It mirrors zh `chinglish`, id `indo-english`, hi `indian-english`.
- **`question-tags`**: title «కదా? = isn't it? కాదు: question tags, ప్రశ్నల వరుస» [native check], after `modals` (A2), deck 4 (the deck of `questions`; no new deck).
  - *What the course already teaches:* `questions` (A1): *do / does* and wh-questions in the present. By `modals` the learner has be, do, did, will, have and can. No ko-en lesson or practice item has a tag or an embedded question (checked).
  - *New in this lesson:*
    1. **A tag copies the helper and the subject and flips yes / no:** You're coming, aren't you? / She doesn't know, does she? / They went, didn't they? / You can drive, can't you?
    2. **«కదా?» is one word; English has no one-size tag except *right?*:** *right?* is always safe and friendly; *isn't it?* only after *it is / this is / that is*.
    3. **Answering:** Yes, I am / No, I'm not follow the facts, not agreement with the speaker («అవును, రావడం లేదు» → No, I'm not).
    4. **Question order again, now with every helper:** Why are you late? / Where did you go? / What have you done?
    5. **A question inside a sentence goes back to statement order:** I don't know where he is. / Can you tell me what time it is? (`I don't know what are they doing ✗`).
  - *Practice that meets §7* (sketch: 4 order items, 2 hits; 4 type items, 2 hits; articles and plurals arise naturally in the main clause):
    - mc: «సరైన వాక్యం ఎంచుకోండి.» → `You're coming, aren't you?` / `You're coming, isn't it?` / `You're coming, no?` / `You coming, aren't you?`; «"మీరు ఎందుకు లేట్ అయ్యారు?" ఇంగ్లీష్‌లో?» → `Why are you late?` / `Why you are late?` / `Why late you are?` / `Why you late?`
    - order `p:"ఇది మంచి రోజు, కదా?"`, `a:["It's","a","nice","day,","isn't","it"]`, `x:["the","aren't"]`, why «day లెక్కించదగినది, ఒక రోజు: ఆర్టికల్ a. It's తో మొదలైంది కాబట్టి tag isn't it.»
    - order `p:"పిల్లలు బయట ఉన్నారు, కదా?"`, `a:["The","children","are","outside,","aren't","they"]`, `x:["child","isn't"]`, why «children బహువచనం, అందుకే are, tag లో aren't they. isn't it కాదు.»
    - order `p:"అతను ఎక్కడ ఉన్నాడో నాకు తెలియదు"`, `a:["I","don't","know","where","he","is"]`, `x:["does"]` (not a hit)
    - order `p:"మీరు నిన్న ఎక్కడికి వెళ్ళారు?"`, `a:["Where","did","you","go","yesterday"]`, `x:["went"]` (not a hit)
    - fill `q:"You like coffee, __ you?"`, `a:["don't"]`, `o:["aren't","isn't","doesn't"]`; `q:"She can't swim, __ she?"`, `a:["can"]`, `o:["can't","does","is"]`; `q:"Do you know where the station __?"`, `a:["is"]`, `o:["does","is it","it is"]`
    - type `p:"మీకు ఇద్దరు అన్నదమ్ములు ఉన్నారు, కదా?"`, `a:["You have two brothers, don't you","You have two brothers, right"]`, `x:["brother"]`, why «two తర్వాత బహువచనం: brothers. have కి tag don't you.»
    - type `p:"ఆమె డాక్టర్, కదా?"`, `a:["She's a doctor, isn't she","She is a doctor, isn't she","She's a doctor, right","She is a doctor, right"]`, `x:["it"]`, why «ఉద్యోగం ముందు ఆర్టికల్ a; she కాబట్టి isn't she, isn't it కాదు.»
    - type `p:"టైం ఎంతో చెప్పగలరా?"`, `a:["Can you tell me what time it is","Could you tell me what time it is"]`, `x:["is it"]` (not a hit)
    - type `p:"మీరు ఎందుకు లేట్ అయ్యారు?"`, `a:["Why are you late","Why were you late"]`, `x:["you are"]` (not a hit)
    - The writer must check every accepted list (PHASE2-BRIEF: prompts must lead to an accepted answer), and how the engine treats the comma tile in `order` items.
  - *Parity:* new lesson id only; the English side is new.
  - *Reason:* §4.3. The invariant tag is the most frequent of Lange's features in ICE-India (786; Demszky et al.), Telugu has exactly one tag (కదా) and no inversion, and ko-en does not teach tags or embedded questions anywhere. Articles, the other big zone, already have three lessons and the standing rule.

**Considered, not added:**
- `articles-3` (B1 article review; the English side exists in ko, ja and zh and could be copied at no writing cost). If first-attempt logs show articles lagging, add it after `passive` as zh did.
- `stative-since` (hi-en's second lesson: states, *since / for / from*, *have been -ing*; English side ready in `tools/content/hi/`). The Telugu case is weaker than the Hindi one: Telugu separates -గా and నుంచి, owning is not a continuous in Telugu, and STATIVE PROGRESSIVE is rare in Demszky et al.'s sample (3). Covered by `continuous`, `perfect`, `perfect-2`. It is the first candidate if the lead prefers a ready-made lesson to a new one.
- A *be* lesson of its own: `be` and `it-there` are reweighted instead.
- A separate final-consonant lesson (like vi's `final-sounds`): the aid itself, the `pron` reweight and deck 18 carry it.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies and PAUSE sets)** [practitioner opinion, mine]:

| ko-en | te-en |
|---|---|
| Minji (and other Korean names) | **Ravi** and **Divya** (main); alternates Kiran, Anil, Arjun, Meena, Sita, Priya. English-speaking characters keep English names |
| Seoul | **Hyderabad** |
| Busan | **Vijayawada**; alternates Visakhapatnam (also *Vizag*), Guntur, Warangal, Tirupati |
| Jeju / beach trips | **Vizag** (beach); hills: Araku |
| Seoul National University | "a university in Hyderabad", generic; no real university name |
| kimchi, bibimbap | **biryani, dosa, idli, pulihora, mango pickle**, tea / chai, filter coffee. Chicken and fish are fine; never beef or pork |
| soju | non-alcoholic by default (tea, coffee, buttermilk, juice) |
| K-pop, K-drama | **Telugu movies, cricket, web series**: genres, not stars |
| Gangnam | downtown, the market, the mall |
| Chuseok, Korean holidays | **Sankranti, Ugadi, Dasara, Diwali**, New Year, birthdays, weddings; Eid and Christmas where a scene needs another festival |
| 존댓말 / 반말 comparisons | మీరు / నువ్వు comparisons (`polite` only) |
| won (₩) | **rupees**: write `500 rupees` in English strings; never `₹`, `Rs.` or `INR` in English (TTS). lakh / crore only in `numbers` |
| Korea / Korean (*I'm from Korea*, *Do you speak Korean?*) | **India / Telugu** |

**Name and TTS rules:**
- **Personal names: only names the en-US voice is likely to say close to the Telugu.** Ravi, Divya, Kiran, Anil, Arjun, Meena, Sita and Priya have no retroflex, aspirate or long-consonant contrast that carries the name. Avoid Srinivas, Venkatesh, Lakshmi, Swathi, Bhargavi, Sai Krishna, Padma (stress and clusters), and any name with ళ, ణ or a doubled consonant [not tested on the engine, §11].
- **Surnames** only in `email` and work dialogues: **Rao** and **Kumar** (Mr. Rao, Ms. Kumar). Many Telugu surnames and titles signal caste or community (this profile's caution, not sourced); these two are widely shared. Explain once that English uses *Mr. / Ms.* + surname or the first name, not *Sir / Madam* + first name (`Ravi Sir ✗`, `Divya Madam ✗`).
- **Places** in their English spellings; listen to each once on the engine's voice (Visakhapatnam and Vijayawada are long; *Vizag* is the everyday short form).
- **Two states.** Learners are in Telangana and Andhra Pradesh. Balance Hyderabad with Vijayawada / Vizag; where everyday words differ (చాయ్ / టీ), use the form both understand. No politics, caste, religion as belief, or state rivalry.
- **Abroad.** Scenes abroad (airport, hotel, office) use the US setting of the shared English strings; a relative or colleague in the US is a natural frame for this audience (§5).

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS and some PRACTICE items (*Seoul, Busan, kimchi, K-pop*). **Leave the English unchanged** (parity) and write the Telugu side literally (సియోల్, బూసాన్, కిమ్చి, కె-పాప్). Do not file per-item deviations; if the lead wants them localised later, use one bulk deviation with the reason "localisation" (same rule as zh.md, id.md, hi.md).

**Deck localisation vs parity:** any card whose English changes (*My name is Minji.* → *My name is Ravi.*, *I live in Seoul.* → *I live in Hyderabad.*, *Korea* → *India*, *Korean* → *Telugu*) needs a `decks` entry in `deviations.json`: one entry per deck, naming the cards and the reason «localisation per profile te.md §9». **Reuse hi's positions:** hi localised the same cards (Priya, Delhi, rupees), so `tools/content/hi/deviations.json` shows which cards change; their IPA is "new" under §6.

**Deck names (FINAL proposal; all [native check]).** Plain everyday Telugu with established loans; a comma instead of «మరియు»; parentheses for the travel deck; digits after a space; no terminal punctuation; **no ZWNJ in any deck name** (the names are keys in `decks.js`), which is why no name has an ending on a loan. Rows 1–20 replace the Korean course's 20 decks in the same order; row 21 is the shared alphabet deck that the scaffold already has (ko «알파벳»); row 22 is the te-only deck, appended last.

| # | Telugu name | linked lesson or notes |
|---|---|---|
| 1 | **పలకరింపులు** | greetings; no lesson links in ko-en |
| 2 | **నా పరిచయం** | articles, be, present, third-s, object-have, perfect-2 |
| 3 | **తప్పనిసరి మాటలు 1** | polite |
| 4 | **తప్పనిసరి మాటలు 2** | questions; also `question-tags` |
| 5 | **దారి, రవాణా** | the; auto, metro, bus and train scenes |
| 6 | **రెస్టారెంట్ ఆర్డర్** | countable |
| 7 | **కేఫ్, దుకాణం** | no lesson links |
| 8 | **షాపింగ్, చెల్లింపులు** | plurals, adjectives, relative; prices in rupees for home scenes |
| 9 | **సంఖ్యలు, సమయం, తేదీ** | prep, numbers; lakh / crore, DD/MM vs US dates |
| 10 | **సరదా కబుర్లు** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing |
| 11 | **భావాలు, స్పందనలు** | joining, past-continuous, conditionals |
| 12 | **మెచ్చుకోలు, ఇష్టాలు** | no lesson links |
| 13 | **ఆఫీసు, ఈమెయిల్** | first-conditional, passive, email; interview and IT office vocabulary |
| 14 | **ఫోన్, చాట్ షార్ట్ ఫామ్స్** | reported |
| 15 | **ప్రయాణం (విమానాశ్రయం, హోటల్)** | perfect, articles-2 |
| 16 | **డాక్టర్, ఎమర్జెన్సీ** | modals |
| 17 | **ఫ్రేజల్ వెర్బ్స్** | phrasal |
| 18 | **ఉచ్చారణ చిక్కులు** | pron; append te pairs (below) |
| 19 | **ఇంగ్లీష్ జాతీయాలు** | idioms |
| 20 | **సినిమాలు, సిరీస్, స్లాంగ్** | narrative |
| 21 | **ఇంగ్లీష్ అక్షరమాల** | alphabet (shared alphabet deck, 26 cards; American letter names, §6 rule 11) |
| 22 | **ఇండియన్ ఇంగ్లీష్: ఇక్కడ, విదేశాల్లో** | indian-english (te-only, at least 20 cards; needs a `decks["count"]` deviation) |

- Longest names: deck 15 (28 code points) and deck 22 (33). The deck list wraps; check both at 390px with the larger Telugu line height (§10).

**Deck content changes** [practitioner opinion, mine]:
- **Add deck 22** (at least 20 cards, linked to `indian-english`). The target is the international form; each `note` names the Indian or Telugu form and says «ఇండియాలో వాడతారు» or «ఎక్కడైనా తప్పే». Start from hi-en's deck «इंडियन इंग्लिश: भारत बनाम विदेश» (23 cards) and replace the Hindi calques (*see a picture*, *eat my head*, *I belong to*) with the Telugu ones of §8.
- **«ఉచ్చారణ చిక్కులు»:** keep the shared pairs; append te cards (new targets, not changes to shared ones): bus, bed, film (no final vowel), zoo / Jew, zero, easy, ship / sheep, full / fool, caught / coat, vine / wine, every, only, about, photography.
- **«ఆఫీసు, ఈమెయిల్»:** interview (Tell me about yourself), client call, deadline, team lead, appraisal, onsite; no programming jargon.
- **«ప్రయాణం»:** departures from Hyderabad; visas as a neutral travel fact; tipping.
- **Meanings:** give real Telugu glosses, and a Telugu-script loan only where it *is* the everyday word (ఈమెయిల్, ఆఫీసు, బిల్లు). The validator's "no duplicate meanings" check compares exact strings, so two cards glossed «సరే» need distinct meanings («సరే (ఒప్పుకోవడం)», «పర్వాలేదు»).

## 10. Interface wording notes

Everything Telugu in this section is **[native check]**. Evidence for the conventions: [Google Account Help in Telugu](https://support.google.com/accounts/answer/27441?hl=te) (మీరు / మీ, -ండి imperatives, Western digits, ZWNJ in loans), the [Mozilla Telugu style guide](https://mozilla-l10n.github.io/styleguides/te/Style%20guide.pdf) and Google's [UX playbook for Indian languages](https://thinkwithgoogle.com/_qs/documents/13326/App_and_website_localization_for_Indian_users.pdf) [curriculum convention]; the rest is [practitioner opinion, mine].

**Register:** మీరు with the polite imperative in -ండి (§2). Never నువ్వు, never the bare imperative (చేయి, చూడు), never the honorific-heavy «దయచేసి … చేయగలరు» of government notices. States and results are plain statements («సేవ్ అయింది», «ఇంటర్నెట్ లేదు»).

**Buttons, menu items, chips: the same -ండి form as running text**, or a short noun; no terminal punctuation; no «దయచేసి» on buttons: «మొదలుపెట్టండి», «కొనసాగించండి», «సరిచూడండి», «మళ్ళీ ప్రయత్నించండి», «దాటవేయండి», «సేవ్ చేయండి», «వినండి». The bare verbal noun («సేవ్ చేయడం») is not used for actions. Where a button is too narrow for an -ండి verb, use a noun («తర్వాత», «వెనక్కి», «సూచన»), not a clipped verb.
- *Justification:* Telugu has no neutral infinitive that works as a command; the choice is between నువ్వు-form (చేయి: abrupt to an adult stranger) and మీరు-form (చేయండి). Google's Telugu help pages use -ండి throughout. One form everywhere also means a string can move between a button and a sentence unchanged.

**Practice instructions** (one verb per item type): «సరైన జవాబు ఎంచుకోండి», «వాక్యం కూర్చండి», «ఖాళీ పూరించండి», «ఇంగ్లీష్‌లో రాయండి», «విని రాయండి».

**Telugu vs English words in the UI.** Use the Telugu word when it is everyday speech (పాఠం, సాధన, జవాబు, తప్పు, సూచన, ప్రగతి); use the loan in Telugu script when that is what people say (రివిజన్, డెక్, కార్డు, లెవెల్, సెట్టింగ్‌లు, సైన్ ఇన్, సింక్). Avoid textbook Sanskritic coinages for app concepts (పునశ్చరణ, అంతర్జాలం, సంకేతపదం). Google's playbook gives the same advice ("use colloquial language", transliterate technical terms). Never leave a UI string in English: the playbook quotes a user from Vijayawada put off by exactly that. English words that are *content* (the sentence being learned, *a*, *the*, *-s*) stay in Latin letters.

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The app's bar today is Today, Practice, Review, Lessons, Read, Progress, Feedback; the brief also lists Drills (a separate label key), so both are given. "Characters" are counted two ways: code points (the brief's limit) and graphemes (what takes width; counted with `Intl.Segmenter('te')`). A Telugu grapheme with a conjunct or a vowel sign is wider than a Latin letter, so the working limit is **4 graphemes**.

| Tab | Label | Code points | Graphemes | Note |
|---|---|---|---|---|
| Today | **ఈరోజు** | 5 | 3 | |
| Practice | **సాధన** | 4 | 3 | |
| Review | **రివిజన్** | 7 | 4 | the word students use; «పునశ్చరణ» (8 / 5) is the widest and bookish; «సమీక్ష» (6 / 3) means an evaluation |
| Lessons | **పాఠాలు** | 6 | 3 | |
| Read | **చదవడం** | 5 | 4 | |
| Drills | **డ్రిల్స్** | 8 | 2 | two wide conjunct clusters; «అభ్యాసం» (7 / 3) is the Telugu alternative if «సాధన» and «డ్రిల్స్» read too alike |
| Progress | **ప్రగతి** | 6 | 3 | |
| Feedback | **స్పందన** | 6 | 3 | the page heading can be longer: «మీ అభిప్రాయం పంపండి» |

- **The risk is height, not length.** Telugu vowel signs sit above the letter (ి ీ ె ే ై ో ౌ) and below it (ు ూ), and conjunct second consonants hang below the line (స్ప, ప్ర, డ్ర, ల్స్). `nav a` is `.62rem` with `overflow:hidden` (src/app.html); hi needed `html[lang=hi] nav a{overflow:visible;line-height:1.5}`. te needs the same rule, tested with «డ్రిల్స్», «స్పందన» and «రివిజన్» (pollu at the end) on a real phone. If .62rem Telugu is unreadable, raise the Telugu nav size before shortening labels.
- No abbreviation with a dot, no ZWNJ in a tab label.

**Counts: one template per pattern, with the number after a colon** (PHASE2-BRIEF, last section).
- CLDR plural categories for `te` are *one* (1) and *other* (0, 2, 5, 21, 1.5) (`Intl.PluralRules('te')`, checked locally). Telugu nouns **do** change after a number above one (1 కార్డు, 2 కార్డులు), verbs agree (ఉంది / ఉన్నాయి), and case endings attach to the plural stem. So a sentence with the slot inside it («{1} కార్డులు మిగిలాయి») is wrong at 1.
- **Rule: label + colon + number.** The label is a plural or count-neutral heading; nothing follows the slot.

| Pattern | Use | Not |
|---|---|---|
| cards due | «ఈరోజు రివిజన్: {1}» | «{1} కార్డులు రివిజన్ చేయాలి» |
| cards | «కార్డులు: {1}» | «{1} కార్డులు» |
| streak | «వరుస రోజులు: {1}» | «{1} రోజుల స్ట్రీక్» |
| lessons done | «పూర్తయిన పాఠాలు: {1}/{2}» | «{2} పాఠాల్లో {1} పూర్తయ్యాయి» |
| remaining | «మిగిలినవి: {1}» | «{1} మిగిలాయి» |
| new | «కొత్తవి: {1}» | |
| mistakes | «తప్పులు: {1}» | «{1} తప్పులు చేశారు» |
| learned | «నేర్చుకున్నవి: {1}/{2}» | |
| minutes | «నిమిషాలు: {1}» | «{1} నిమిషాల్లో» |
| next review | «తదుపరి రివిజన్‌కు రోజులు: {1}» | «{1} రోజుల్లో» (1 రోజులో vs 3 రోజుల్లో: `Intl.RelativeTimeFormat` differs) |
| position | «కార్డు {1}/{2}», «పాఠం {1}», «లెవెల్ {1}» | |
| units | «{1} XP», «{1}%», «{1} KB» | |

- Where keys.json has separate singular and plural templates, give both the same Telugu wording. Render every count string at 0, 1, 2 and 21 before shipping.
- Relative dates («రేపు», «3 రోజుల్లో») come from `Intl.RelativeTimeFormat('te')`, never from a hand-made template.

**Language-name slots.** `Intl.DisplayNames('te')` gives «ఇంగ్లీష్», «తెలుగు», «కొరియన్», «హిందీ» (checked locally). Telugu case endings attach to the word, and a name ending in a pollu fuses with the ending into a conjunct («ఇంగ్లీష్» + «లో» renders as ఇంగ్లీష్లో unless a ZWNJ is inserted). So:
- **Never put an ending or a postposition directly after a language slot.** Put the slot at the start with a colon, or after a colon: «భాష: {x}», «{x}: కోర్సు», «నేర్చుకునే భాష: {x}», «వివరణల భాష: {x}».
- Fixed strings that name English may use the hand-written form with ZWNJ: «ఇంగ్లీష్‌లో రాయండి».
- The course name in the picker: «తెలుగు → ఇంగ్లీష్» or «తెలుగు వారికి ఇంగ్లీష్».

**UI glossary (use exactly):**

| English | Telugu | Note |
|---|---|---|
| lesson / lessons | పాఠం / పాఠాలు | |
| practice | సాధన | |
| review | రివిజన్ | button «రివిజన్ చేయండి» |
| deck / decks | డెక్ / డెక్‌లు | ZWNJ before లు |
| card / cards | కార్డు / కార్డులు | |
| streak | వరుస రోజులు | |
| hint | సూచన | |
| check (button) | సరిచూడండి | the lesson check is «చిన్న టెస్ట్» |
| correct / incorrect | సరైనది! / తప్పు | always with ✓ / ✗ |
| answer | జవాబు | |
| explanation (why) | కారణం: | |
| try again | మళ్ళీ ప్రయత్నించండి | short: «మళ్ళీ» |
| next / back / skip | తర్వాత / వెనక్కి / దాటవేయండి | |
| start / continue | మొదలుపెట్టండి / కొనసాగించండి | |
| multiple choice | సరైన జవాబు ఎంచుకోండి | |
| word tiles | వాక్యం కూర్చండి | |
| fill the gap | ఖాళీ పూరించండి | |
| typed answer | ఇంగ్లీష్‌లో రాయండి | |
| listen | వినండి | |
| pronunciation toggle | ఉచ్చారణ చూపించండి | |
| drills / session / level | డ్రిల్స్ / సెషన్ / లెవెల్ | |
| progress / feedback | ప్రగతి / స్పందన | |
| settings | సెట్టింగ్‌లు | ZWNJ |
| sign in / sync | సైన్ ఇన్ చేయండి / సింక్ | |
| saved / offline | సేవ్ అయింది / ఇంటర్నెట్ లేదు | |

**ZWNJ.** Telugu UI text writes a loan ending in a consonant + a Telugu ending with U+200C between them (పాస్‌వర్డ్‌ను in Google's help; the Mozilla guide: "For some words, we use Zero Width Non-Joiner"). Allowed in interface and explanation text; **never** in `pron`, deck names, or anything used as a key. Whether `lint.js` and the validator accept U+200C in native text has not been checked (§11).

**Numbers, dates and time** (`Intl` with `te-IN`, checked locally in Node; never hand-format):
- **Western digits always.** `Intl` for `te` defaults to `latn`; never request `-u-nu-telu` (it gives ౧,౨౩౪). Google's playbook: "Use English numerals … Avoid using Indian languages for numerals"; r12a: native digits are used infrequently; Google's Telugu help writes «దశ 1».
- Numbers: «12,34,567.5» (Indian grouping), «85%», «₹500.00» in Telugu UI text only.
- Dates: long «17 నవంబర్, 2026», medium «17 నవం, 2026», short «17-11-26», full «17, నవంబర్ 2026, మంగళవారం»; day + month «17 నవంబర్». Day before month. Week starts on Monday (Mozilla guide).
- Time: 12-hour «3:35 PM» (the playbook recommends 12-hour).
- Punctuation as in English (period, comma, ?, !); no danda; a hyphen, not an em dash, in interface text (Mozilla guide); quotation marks " " or « » consistently per surface.

**Fonts and line height (engine, not content)** [font names from general knowledge, not tested]:
- A Telugu-first stack for `html[lang=te]`, e.g. `--body:'DM Sans','Nirmala UI','Kohinoor Telugu','Telugu Sangam MN','Noto Sans Telugu',system-ui,sans-serif`, and the same Telugu faces ahead of the fallback in `--mono` (the `pron` line).
- Line height about 1.65–1.7 for body text and at least 1.5 in chips, tabs and buttons; no `overflow:hidden` on any one-line Telugu label; no `letter-spacing` and no `text-transform` on Telugu; no `word-break:break-all` (it splits conjuncts).
- **The `pron` line needs a font with U+0C3C** (§6). Test «వ఼ెరి జ఼ూ థ఼్రీ ద఼ిస్ ˈమెఝ఼ర్» and the stress mark before a conjunct («ఇక్ˈస్క్యూజ఼్») in the 390px harness and on real phones.
- Truncation with an ellipsis must cut at a grapheme boundary, never by code point.

**Language name** in prose: «ఇంగ్లీష్», «తెలుగు»; not «ఆంగ్లం» except in a formal heading.

**Feedback marks:** ✓ «సరైనది!» / ✗ «తప్పు». Always pair a mark with text.

## 11. Gaps and unverified claims

**Node check run on the delivered files** (`te.profile.json`, the 58 worked examples of §6, the sample `why` lines of §7, and this file):

```
JSON ok; keys: native,nativeNameEn,name,ttsLang,nativeScript,pron,pronPattern,standingRule,labels,lessonOrder
nativeScript, pronPattern (flag u) and keywords compile
worked examples: 58 pass pronPattern: 58 fail: 0 
must-reject strings: 13 rejected: 13 
digits excluded from nativeScript: true | labels contain Telugu: true
why lines expected to hit: 8 hit: 8 | expected no hit: 3 no hit: 3
sketch why lines in te.md: 9 with keyword: 9
deck table rows: 22
numbered sections: 11
```

**Not done or not found:**
1. **`/home/claude/reports/Grammar learning order research.md` does not exist** in this worktree (`reports/` has no such file): skipped. Lesson order follows `tools/content/lib.js` `ORDER` unchanged.
2. **`docs/profiles/OTHERS.md` has no Telugu section** (grep empty). `docs/profiles/en-te.md` (the reverse course) was used for Telugu grammar facts and conventions instead.
3. **No native speaker has read any Telugu in this profile.** Every Telugu word, example, label, deck name, `why` line and glossary term needs a native check. Highest priority: the 22 deck names, the tab labels, the grammar glossary (§3), the cue labels in profile.json, and the calque list in §4.11 / §8.
4. **The nukta (U+0C3C) is the blocking risk.** It is recent (Unicode 14) and not in everyday Telugu; font support on learners' phones is untested; whether Telugu readers accept a dotted వ / జ / థ / ద without training is untested. §6 gives the test and the IPA fallback. Decide before any `pron` is written.
5. **ఙ for /ŋ/** at the end of a word (లాఙ్, ˈసిఙిఙ్) may look strange to Telugu readers; the alternative ంగ్ adds a /g/. Native check.
6. **No error-frequency study of Telugu-L1 learners was found.** §4's syntax evidence is feature counts from ICE-India speakers of many L1s (Demszky et al.); the ranking and every "Why" are inference. In particular: *will* for habits (§4.4), *he / she / it* slips (§4.9) and the size of the copula zone for Telugu speakers (§4.2) have no direct source.
7. **Phonetic evidence is small:** Wiltshire 2015 and Payne et al. 2019 have five Telugu speakers each, all proficient graduates. Final-vowel epenthesis by learners rests on the Telugu loan pattern (Bhaskararao & Ray; Wikipedia) and practitioner pages, not on a learner study.
8. **Sources not opened, so not used as evidence:** Sirsa & Redford 2013 full text (PMC blocked; abstract only, via QxMD); Prabhakar Babu's thesis on Telugu English prosody (SOAS, 403); Rao 2018 on preposition errors (known only through Renuka Devi 2025); Lange 2012 (through Demszky et al.); Sailaja and Wells (through Wikipedia); Unicode proposal L2/19-401 for the Telugu nukta; "Lexical plurals in Telugu" (403). The Oxford English-English-Telugu dictionary itself was not seen: its respelling conventions are unknown and should be compared with §6.
9. **No Telugu-language explainer of English grammar was opened** (the pages tried were English-only or behind a login), so the grammar terms in §3 follow general Telugu school usage as this profile knows it, not a cited textbook. Whether AP / Telangana English syllabuses teach phonetic symbols was not found.
10. **Mozilla's Telugu style guide** came out of PDF extraction with its Telugu examples garbled and its plural and honorific sections empty; only its English statements are used.
11. **EF EPI** scores are from self-selected online test-takers of all L1s in each state or city; they are not a Telugu-speaker measure. The Telangana English-medium figure is for 2019–20; no Andhra Pradesh figure was found.
12. **Engine and pipeline points not checked:** whether `lint.js` / `validate.js` accept ZWNJ (U+200C) in native text; how `order` items treat a comma tile (`question-tags`); the TTS reading of the proposed names and place names; Telugu rendering at `.62rem` in the tab bar; the font stack.
13. **The scratch converter is not delivered** (the brief allows two files). Its rules are §6; the 776-string sweep and the deck-18 distinctness check should be re-run when `tools/content/te/pron_te.js` is built.
14. **`question-tags` is new English content** (not reused from another course), so it needs the full review a new lesson gets; `indian-english` reuses hi-en's English side only if the lead agrees to share the id.
15. **The count 40 vs the brief's 39 lessons / 20 decks:** the shared order now includes `alphabet` and the scaffold has a shared alphabet deck, so §8 has 40 rows and §9 has 21 + 1.

## Sources

All opened during this research (23 November 2026) unless marked.

**Telugu sound system and Telugu speakers' English**
- Bhaskararao, P. & Ray, A. (2017). Telugu. *Journal of the International Phonetic Association* 47(2), 231–241. https://www.cambridge.org/core/product/546440D379A9139BFBB590254E50ED6B/core-reader
- Wiltshire, C. (2015). Dravidian varieties of Indian English. In *V.I. Subramoniam Commemoration Volume*. https://slam.lin.ufl.edu/wp-content/uploads/sites/106/2020/01/2015-Wiltshire-IJDL-Dravid-Eng.pdf
- Payne, E., Maxwell, O. & Volchok, M. (2019). Tense-lax contrasts in Indian English vowels: transfer effects from L1 Telugu. *ICPhS 2019*. https://assta.org/proceedings/ICPhS2019Microsite/pdf/full-paper_631.pdf
- Sirsa, H. & Redford, M. (2013). The effects of native language on Indian English sounds and timing patterns. *Journal of Phonetics* 41. **Abstract only**, at https://read.qxmd.com/read/24860200/the-effects-of-native-language-on-indian-english-sounds-and-timing-patterns
- Jain, S., Pal, P., Vuppala, A., Ghosh, P. & Yarra, C. (2022). An investigation of Indian native language phonemic influences on L2 English pronunciations. arXiv 2212.09284. https://arxiv.org/pdf/2212.09284

**Indian English grammar features and usage**
- Demszky, D., Sharma, D., Clark, J., Prabhakaran, V. & Eisenstein, J. (2021). Learning to recognize dialect features. NAACL 2021; arXiv 2010.12707. https://arxiv.org/abs/2010.12707
- Renuka Devi, S. (2025). A typological study of adpositions: English prepositions and Telugu postpositions. *Language in India* 25:12. https://www.languageinindia.com/dec2025/deviadposition.pdf
- Wikipedia, *Indian English*. https://en.wikipedia.org/wiki/Indian_English
- TalkDrill, *Common English mistakes Indians make* (practitioner blog). https://www.talkdrill.com/blog/spoken-english/common-mistakes/common-english-mistakes-indians/
- Bilinguistics, *Telugu speech and language development* (practitioner page). https://bilinguistics.com/languages/telugu-speech-and-language-development/

**Telugu grammar and the language**
- Wikipedia, *Telugu grammar*. https://en.wikipedia.org/wiki/Telugu_grammar
- Wikipedia, *Telugu language*. https://en.wikipedia.org/wiki/Telugu_language
- తెలుగు వికీపీడియా, *భాషాభాగాలు* (Telugu names of the parts of speech). https://te.wikipedia.org/wiki/భాషాభాగాలు
- In the repository: `docs/profiles/en-te.md` (the Telugu-for-English-speakers profile).

**Learners and schooling**
- EF EPI fact sheet, India. https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2026/ef-epi-fact-sheet-india-english.pdf
- The Federal (3 July 2021), *Preference of English-medium instruction rises in south India, except Karnataka*. https://thefederal.com/education/preference-of-english-medium-instruction-rises-in-south-india-except-karnataka
- Deccan Chronicle (29 August 2023), *Telugu Language Day 2023* (Oxford English-English-Telugu dictionary). https://deccanchronicle.com/education/290823/telugu-language-day-2023.html

**Script, typography and interface conventions**
- r12a (Richard Ishida), *Telugu orthography notes*. https://r12a.github.io/scripts/telu/te
- Mozilla l10n, *Telugu style guide* (2016). https://mozilla-l10n.github.io/styleguides/te/Style%20guide.pdf
- Google, *UX playbook for Indian languages: app and website localization for Indian users*. https://thinkwithgoogle.com/_qs/documents/13326/App_and_website_localization_for_Indian_users.pdf
- Google Account Help in Telugu. https://support.google.com/accounts/answer/27441?hl=te

**Local checks (no URL):** Node `Intl` (`PluralRules`, `DisplayNames`, `DateTimeFormat`, `NumberFormat`, `RelativeTimeFormat`, `Segmenter` for `te` / `te-IN`); the repository files named in the text.
