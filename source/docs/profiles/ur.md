# Urdu speakers learning English — course profile

Course `ur-en`. Audience: adults in Pakistan who read and write Urdu (most of them with Punjabi, Pashto, Sindhi, Saraiki or another home language, §5), and Urdu speakers abroad. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard Urdu of Pakistan in the Perso-Arabic script**, written right to left in plain Unicode (the app sets the font), with the English loanwords educated urban speakers actually use (کارڈ, لیول, ای میل, میٹنگ); answers and examples are in English. The HTML language tag and the app code are both **`ur`** (profile.json `native: "ur"`, pack `course-ur-en`, interface pack `i18n-ur`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: today 40 lessons, the shared `alphabet` lesson plus the 39 of the brief, and 21 decks, the 20 of the brief plus the shared alphabet deck; standing rule `article-plural`), like zh, vi, id, hi and ar, because Urdu has no articles. `parity.js` compares ur-en's English side with ko-en's. The two closest finished courses are **Hindi** (`docs/profiles/hi.md`: the grammar, and so the learner errors, are nearly the same) and **Arabic** (`docs/profiles/ar.md`: same script family, right to left); this profile says where it follows each.

Evidence labels:
- **[research-backed]**: a study, corpus or expert survey, named, with its sample.
- **[curriculum convention]**: what Pakistani schools, exam boards, dictionaries, style guides or apps do.
- **[practitioner opinion]**: a teacher's, school's or blog's position, or this profile's own inference (said so where it is mine).
- **(as cited in hi.md)**: evidence on Hindi speakers or Indian English taken from `docs/profiles/hi.md` and not reopened. Spoken Hindi and Urdu share their grammar ("identical syntax and grammar", CAL heritage profile as cited in `docs/profiles/en-ur.md` §2.1), so the transfer argument carries over; the numbers and speakers do not.

A study read only as an abstract, a landing page, a handout or someone else's summary is marked as such. Every web figure was read through the fetch tool's summary of the page, or (for three PDFs) through a home-made text extraction that loses phonetic symbols and Urdu letters (§11). **I am not a native speaker of Urdu: every Urdu string in this file needs a native check before it ships** (§11 lists the ones I am least sure of).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`); Pakistani and British forms are never called wrong. Explanations address the learner as **آپ** with the Pakistani polite imperative in **-یں** (چنیں, لکھیں); buttons use the same form. School grammar terms in Urdu (اسم, فعل, واحد / جمع), **tense names in English** as Pakistani grammar books teach them.
- **Error evidence is thin and mostly qualitative.** No Urdu-L1 learner corpus with error rates could be opened. The best sources are Ahmar Mahboob's ratings of Pakistani English in eWAVE, a course handout summarising the Pakistani English literature, two phonetic studies of Urdu-L1 speakers, and the Hindi evidence in hi.md. The ranking is this profile's inference.
- **Top zones:** articles (dropped and added), the **continuous with states and durations** (*I am knowing*, *I am living here since 2015*), *have* + past time (*I have seen him yesterday*), question order (*What this is made of?*, *isn't it?*), plurals and countability, prepositions from postpositions, verb patterns (*looking forward to meet*), *he / she* from وہ, and Pakistani English usages that are fine at home and puzzle listeners abroad.
- **Pronunciation aid: IPA, required, written exactly as the Chinese and Arabic courses write it** (`pronPattern` identical, `pronScript: "ˈ"`). An Urdu-script respelling was rejected: one letter و for /v/ and /w/, تھ / د for *th*, unwritten short vowels and the spelling اسکول would write the errors into the aid, and the engine's `.pron` box is left-to-right. Most transcriptions are copied from `tools/content/zh/`.
- **Standing rule: `article-plural`**, keywords `آرٹیکل|جمع(?!ہ|رات)|قابلِ?\s?شمار` (no flags); zero parity cost.
- **Curriculum:** all 40 shared ids kept in order (6 keep, 34 reweight, no English-side changes). Add 2: `pakistani-english` (end of A1; deck 22 «پاکستانی انگریزی: یہاں اور باہر») and `stative-since` (B1, after `perfect-2`; the same id and English side as hi-en's lesson).
- **`nativeScript`:** a whitelist of Urdu letters only: no digits, punctuation, vowel marks or tatweel, and not the Arabic-only code points for yeh, kaf, heh and teh marbuta (§6).
- **Interface:** right to left; Western digits and `Intl` locale `ur` (never `ur-IN`, which prints Urdu digits); counts as **number + unchanging masculine noun** («{1} کارڈ», «{1} دن») or **label + colon** («باقی: {1}»); language-name slots at the start or after a colon; no direction marks typed by writers. The engine has no font rule for an Urdu *interface* yet (§10).
- **Biggest gaps:** no native check of any Urdu string; no opened error-count study; whether adult learners read IPA is unmeasured; Nastaliq in the 390px layout is untested.

## 2. Variant, register and voice

**Variant: American English.**
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings. The pron aid must describe what learners hear.
2. Pakistani schools, newspapers and offices write British spelling, and "British English is the taught standard" while American media has added American usages ([Wikipedia, Pakistani English](https://en.wikipedia.org/wiki/Pakistani_English)) [curriculum convention, via Wikipedia]. Educated Pakistani English is a variety with its own stable features (§4), not a set of mistakes. The course teaches American forms without calling Pakistani or British forms wrong: a card `note` may say «پاکستان اور برطانیہ میں: lift / flat / colour» [practitioner opinion].
3. US spelling and vocabulary (color, apartment, elevator, cell phone, check for the restaurant bill, gas station for *petrol pump*).

**Register: آپ with the polite imperative in -یں; never تم or تو** [practitioner opinion, decision].
- **What was found** [curriculum convention]:
  - Mozilla's Urdu style guide asks for "formal expressions" and marks «تمہارا اکاؤنٹ محفوظ ہے» wrong and «آپ کا اکاؤنٹ محفوظ ہے» right; its own example instruction is «فائل کھولنے کے لیے پاس ورڈ داخل کریں۔» ([Mozilla ur style guide](https://mozilla-l10n.github.io/styleguides/ur)).
  - Zulip's Urdu guide: semi-formal Urdu with آپ, because the informal form is "generally seen as rude" without a relationship, and "many top software companies (e.g., Google, Facebook, Microsoft)" use the formal one; its glossary uses the -یں form throughout («تلاش کریں», «خاموش کریں») ([Zulip, Urdu](https://zulip.readthedocs.io/en/latest/translating/urdu.html)). (Zulip's *Hindi* guide asks for तुम; its Urdu guide does not.)
  - Microsoft's Urdu (Pakistan) style guide asks for a "clear, friendly and concise" conversational voice that addresses the user directly as *you* ([Microsoft urd-pak style guide](https://download.microsoft.com/download/d/a/0/da076f1d-0fc1-4336-9b9b-97159456bae9/urd-pak-StyleGuide.pdf); only its English text could be extracted, the Urdu examples were lost, §11).
- **Decision: آپ + -یں** (چنیں, لکھیں, سنیں, دوبارہ کوشش کریں). Reasons:
  1. Urdu has no neutral peer form for a stranger. تم from an app reads as talking down, تو is rude, and the app is in the teacher's seat. hi.md made the same choice for the same reason.
  2. Pakistani Urdu has two polite request forms: **-یے / -ئیے** (کیجیے, لکھیے) and **-یں** (کریں, لکھیں). The -یں form is "very common in Pakistan and slightly less formal" (`docs/profiles/en-ur.md` §2.3, that author's inference) and is the form in every style-guide example above. It is also short: «چنیں», «لکھیں» fit buttons and the tab bar.
  3. The -یں form shows **no gender** for the speaker or the listener, which the present tense does (آپ چاہتے ہیں / چاہتی ہیں). See "gender" below.
- **Voice:** a friendly teacher in plain everyday Urdu. Use the English loans urban speakers use daily (کارڈ, لیول, ایپ, ای میل, میٹنگ, ٹیسٹ) where the Urdu word would sound bookish, and the plain Urdu word where it is everyday speech (سبق, مشق, سوال, جواب, غلطی, مثال). Prefer everyday words to heavy Persian and Arabic ones (استعمال کریں, not بروئے کار لائیں).
- **Never:** تم or تو to the learner; mixed آپ / تم on one screen; officialese (براہِ کرم مطلع فرمائیں); Roman Urdu (*aap sahi hain*); slang addressed to the learner (یار, بھائی, باس); more than one exclamation mark per screen; religious formulas as app chrome (ان شاء اللہ, ماشاء اللہ) — they belong in dialogues where a character would say them.
- **Praise:** «شاباش!», «بہت خوب!», «زبردست!».
- **Translations of example sentences:** *you* = **تم** between friends, family and in texting, **آپ** in service, office, email, doctor and stranger scenes; that تم sits inside a translation, not addressed to the learner.
- **Gender in translations and in the interface.** Urdu verbs show the gender of the speaker and of the person addressed (میں جاتا ہوں / جاتی ہوں; آپ کیسے ہیں؟ / کیسی ہیں؟).
  - Translations of *I* sentences take the gender of the character in the scene; for a generic *I*, alternate, or write both once in a lesson body («میں جانتا / جانتی ہوں»). Never the slash form in a practice `p`.
  - Text addressed to the learner avoids gendered verb forms: use the -یں imperative («اپنا مقصد چنیں»), a noun phrase («آپ کا مقصد؟», «آپ کی پیش رفت») or an impersonal sentence («سبق مکمل ہو گیا»). Avoid «آپ کیا سیکھنا چاہتے ہیں؟» where «آپ کا مقصد کیا ہے؟» says the same.
- **Error marks:** **✗** wrong, **✓** right, joined by the word «درست:» in Urdu lines, never by an arrow: `I'm teacher. ✗` «درست:» `I'm a teacher. ✓`. In lesson HTML use a two-column table instead. (Arrows flip or misplace in mixed-direction lines; ar.md §2 made the same rule. The arrows in this profile are for the writers, not for copying.)

Three sample sentences in the voice:
- «اردو میں آرٹیکل نہیں ہوتے، اس لیے a اور the یا تو چھوٹ جاتے ہیں یا غلط جگہ لگ جاتے ہیں۔ تین اصول یاد رکھیں، کافی ہیں۔»
- «"میں 2015 سے یہاں رہ رہا ہوں" انگریزی میں Present Continuous نہیں بنتا۔ یہ Present Perfect ہے: I've lived here since 2015۔»
- «اردو کے "وہ" سے پتا نہیں چلتا کہ بات مرد کی ہے یا عورت کی۔ انگریزی میں چننا پڑتا ہے: he یا she۔»

**Typography and mixing English into Urdu text (one rule set, applied everywhere):**
- **Script.** Urdu in the Urdu script only. English words stay in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into Urdu letters, and never write Urdu in Latin letters.
- **Urdu letters, not their Arabic look-alikes** (as `docs/profiles/en-ur.md` §2.7): ی U+06CC (not Arabic yeh U+064A or alef maksura U+0649), ک U+06A9 (not Arabic kaf U+0643), ہ U+06C1 for the round *h* and ھ U+06BE only for aspiration (کھ, تھ, بھ), ے U+06D2 for final *e*. r12a notes that fonts often draw the two kafs alike, so "the ability to search and compare text is impaired" ([r12a, Urdu](https://r12a.github.io/scripts/arab/ur.html)). A phone with an Arabic keyboard types the Arabic code points; `nativeScript` does not count them as Urdu (§6), and reviewers grep for them (§10).
- **NFC**, hamza forms stored composed (ئ ؤ ۂ ۓ). **No ZWNJ, ZWJ, LRM, RLM, ALM or tatweel** in stored text, and no presentation forms (U+FB50–FDFF, U+FE70–FEFF).
- **Vowel marks (اعراب): none by default**, as in ordinary Urdu, where "the combining mark diacritics are not normally used" (r12a). Three exceptions: the izafat zer where the phrase is read wrong without it (قابلِ شمار, حرفِ جار, ردِعمل may also be written ردعمل); one mark that separates two readings (خالی جگہ **پُر** کریں, not پر "on"); and a lesson body that explains a sound. Never in deck names or tab labels.
- **One spelling per word**, the same list as en-ur.md §2.7 so the two Urdu courses agree: چاہیے, لیے, کیجیے, گئے, نئے, سکول, اسٹیشن, امریکہ, ای میل, انگریزی (never انگلش in prose).
- **Punctuation.** The Urdu full stop **«۔»** (U+06D4) ends every Urdu sentence, including one that ends in an English word («… یہ Present Perfect ہے: I've lived here۔»); «،» «؛» «؟» are the Urdu comma, semicolon and question mark; `:` and `!` as in English. Mozilla's guide asks for «۔» and «،» ([Mozilla](https://mozilla-l10n.github.io/styleguides/ur)); r12a lists the same set. **No English full stop, question mark or exclamation mark at the end of an Urdu line**: in a right-to-left line it jumps to the wrong side (ar.md §10 (c), rendered check). «۔» and «؟» are right-to-left characters, so they sit correctly after a final English word. No terminal punctuation on buttons, labels, tabs or deck names.
- **Quotes.** Urdu phrases in straight double quotes "…", nested in single '…'. r12a lists curly “ ” as the primary Urdu quotes but notes they "are *not* mirrored during display" and that "ASCII quotes are also common"; straight quotes have no left and right to get wrong. In lesson HTML, English is bold `<b>` and not quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare.
- **Direction (binding, as in ar-en).**
  - Every prompt, question, option, table cell and hint that is meant to read as Urdu **starts with an Urdu letter** (the engine gives `.q`, `.prac-q`, `.opt`, table cells and chips the direction of their first strong letter, `src/app.html` line 31). «خالی جگہ پُر کریں: I __ a student» is right; «I __ a student. خالی جگہ پُر کریں» lays out left to right. A `why` or a note may start with an English word.
  - Put the Urdu first and the English after a colon, or embed short English words mid-sentence («فعل کے ساتھ -s لگتا ہے»). **Writers never type direction marks**; if a line renders badly, reword it.
  - No arrows (→ ←) in Urdu lines.
- **Digits:** Western digits 0–9 everywhere, never Urdu digits (U+06F0–06F9) or Arabic-Indic digits (U+0660–0669) (§10).
- **Spaces:** one normal space between an Urdu word and a Latin word or number on both sides (`a لگتا ہے`, `سبق 3`); postpositions are separate words (گھر میں, آپ کا); no space before «۔» «،» «؟».
- **Dash:** a spaced em dash ( — ) between clauses; a hyphen inside English forms (-ing, -s); "سے" or an en dash between digits in ranges (2–4).
- **Do not inflect English words with Urdu or English plural endings** in prose: «دو آرٹیکل ہیں», «ان ٹینس میں», not «آرٹیکلز», «ٹینسز», «وربوں».
- **Alternatives:** ` / ` with spaces, as in ko-en.

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI. "School" means the term is the one Pakistani school grammar uses; **these tags are from my general knowledge of Urdu-medium English teaching, not from a fetched textbook** (§11), except the tense names: a study of 200 B.Sc. students in Multan is titled for the "present indefinite and past indefinite tenses", the Pakistani classroom names ([Din & Ghani 2019](http://www.ccsenet.org/journal/index.php/elt/article/view/0/39216)) [curriculum convention].

| English term | Urdu term (use this) | Note |
|---|---|---|
| article | آرٹیکل | The classroom word. **Standing-rule keyword.** The Urdu grammar terms (حرفِ تنکیر / حرفِ تخصیص) are bookish; do not use them |
| indefinite / definite article | a / an · the | Name the word itself: «آرٹیکل a», «آرٹیکل the» |
| no article | آرٹیکل کے بغیر / «آرٹیکل نہیں لگتا» | |
| noun | اسم | School |
| countable / uncountable noun | قابلِ شمار اسم / ناقابلِ شمار اسم | **Standing-rule keyword** (شمار, with or without the zer). Gloss once: «جو گنا جا سکے / جو گنا نہ جا سکے». Native check, §11 |
| singular / plural | واحد / جمع | School. **Standing-rule keyword جمع** |
| pronoun | ضمیر | School; in `why` name the word (he, she, it) |
| subject / object | فاعل / مفعول | School |
| possessive ('s, my) | ملکیت ('s) / my, your … | «علی کی کتاب = Ali's book» |
| verb | فعل | School |
| be verb | be (am / is / are) | «be کی شکلیں» |
| helping verb (auxiliary) | امدادی فعل (helping verb) | School says *helping verb* |
| modal verb | can, should … («modal») | Name the word |
| he / she / it -s | he / she / it والا -s | Not «صیغۂ واحد غائب» in `why` |
| verb forms | پہلی فارم / دوسری فارم / تیسری فارم (1st / 2nd / 3rd form) | School: learners drill go / went / gone as three forms |
| -ing form | -ing والی شکل | |
| regular / irregular verb | باقاعدہ / بے قاعدہ فعل | |
| tense | ٹینس (زمانہ) | Tense names stay in English |
| present simple | Simple Present (اسکول میں: Present Indefinite) | Give the school name once per lesson |
| present continuous | Present Continuous | School |
| past simple | Simple Past (اسکول میں: Past Indefinite) | |
| past continuous | Past Continuous | School |
| future | will / going to (Future) | |
| present perfect (continuous) | Present Perfect (Continuous) | School |
| past perfect | Past Perfect | School |
| stative verb | حالت بتانے والا فعل (stative verb) | New term; gloss: know, want, have (= مالک ہونا) |
| passive / active | Passive Voice / Active Voice | School keeps the English names |
| direct / reported speech | Direct / Indirect Speech (اسکول میں: Narration) | School |
| conditional | شرطیہ جملہ (if والا جملہ) | |
| relative clause | who / which / that والا حصہ | Avoid «صلہ»; describe it |
| infinitive / gerund | to + فعل / -ing والی شکل | |
| preposition | preposition (حرفِ جار) | Contrast: «اردو میں یہ لفظ اسم کے بعد آتا ہے (میں، پر، سے)، انگریزی میں پہلے» |
| conjunction | جوڑنے والا لفظ (conjunction) | |
| adjective / adverb | صفت / متعلق فعل (adverb) | School |
| comparative / superlative | Comparative / Superlative (-er / -est) | School teaches "degrees" in English |
| question word | سوالیہ لفظ (what, where …) | |
| yes/no question | ہاں / نہیں والا سوال | |
| question tag | question tag («ہے نا؟») | |
| negative sentence | منفی جملہ | |
| sentence / word order | جملہ / الفاظ کی ترتیب | |
| phrasal verb | فریزل ورب | Deck 17 |
| idiom | محاورہ | Deck 19 |
| Pakistani English | پاکستانی انگریزی | Deck 22; never «غلط انگریزی» |
| pronunciation | تلفظ | |
| IPA / transcription | آواز کی علامتیں (IPA) | Toggle «تلفظ دکھائیں (IPA)» |
| stress | زور (stress) | ˈ = «زور کا نشان» |
| vowel / consonant | واول (حرفِ علت) / کانسوننٹ (حرفِ صحیح) | Gloss once |
| syllable | سلیبل (لفظ کا ٹکڑا) | |
| consonant cluster | ملے ہوئے کانسوننٹ | school, street |
| lesson | سبق; tab «اسباق» | UI |
| practice (set) | مشق | UI |
| review (SRS) | دہرائی; button «دہرائیں» | UI |
| deck / card | ڈیک / کارڈ | UI |
| streak | لگاتار دن | UI; in counts «لگاتار دن: {1}» |
| hint | اشارہ | UI |
| check (3-question quiz) | چھوٹا ٹیسٹ; button «چیک کریں» | UI |
| correct / incorrect | «درست!» / «غلط» | UI |
| answer / explanation | جواب / وضاحت | `why` is shown under «وضاحت» |
| drills | مہارتیں | UI (§10) |
| level / XP | لیول / XP | |
| progress / feedback | پیش رفت / رائے | UI (§10) |
| settings / sign in / sync | ترتیبات / سائن ان / سنک | UI; native check |

## 4. Persistent error zones

Ranked by evidence strength × frequency × how often the point recurs across lessons; **the ranking is this profile's inference**, because no opened source counts errors by type for Urdu speakers. Format: error ✗ → correction ✓. **Every "Why" line (the contrast with Urdu) and every example with no named source is [practitioner opinion].**

**Main opened evidence:**
- **eWAVE, Pakistani English** (variety 53), ratings by **Ahmar Mahboob** as informant ([eWAVE](https://ewave-atlas.org/languages/53); single feature pages such as [62](https://ewave-atlas.org/valuesets/53-62), [63](https://ewave-atlas.org/valuesets/53-63), [64](https://ewave-atlas.org/valuesets/53-64), [89](https://ewave-atlas.org/valuesets/53-89), [100](https://ewave-atlas.org/valuesets/53-100), [165](https://ewave-atlas.org/valuesets/53-165), [227](https://ewave-atlas.org/valuesets/53-227), [228](https://ewave-atlas.org/valuesets/53-228), [55](https://ewave-atlas.org/valuesets/53-55), [56](https://ewave-atlas.org/valuesets/53-56), [170](https://ewave-atlas.org/valuesets/53-170), [10](https://ewave-atlas.org/valuesets/53-10), [88](https://ewave-atlas.org/valuesets/53-88)). One expert's rating of each feature in educated Pakistani English: **B** = "neither pervasive nor extremely rare", **C** = "exists, but is extremely rare", **D** = "attested absence". It describes the *variety*, not learners, and gives no counts. A B rating means fluent Pakistanis say it; a D rating means that when a learner says it, it is a learner slip and not Pakistani English. Thirteen feature pages were opened, not the whole list.
- **A University of Groningen course handout on Pakistani English** (2009, a student presentation; it names no sources, but its examples match the handbook chapters on Pakistani English by Mahboob 2004, which could not be opened) ([handout](https://www.let.rug.nl/nerbonne/teach/varieties-eng/Presentations/Pakistani-Eng--Handout-Engels.pdf)). Second-hand; used for example sentences.
- **Rehman 2019**, PhD thesis, University of Kent: acoustic study of Urdu vowels and of how Punjabi-Urdu speakers hear English vowels (101 participants in all), with a review of the Pakistani English literature ([Kent](https://kar.kent.ac.uk/id/document/3205959)). Read through a text extraction that lost every IPA symbol (§11), so only its prose claims are used.
- **Syed, Bibi & Shafi 2024**, *Linguistics and Literature Review* (DOI 10.32350/llr.101.04): 15 Urdu-L1 women from Karachi with at least 12 years of English; acoustic study of /t/, with a list of known Pakistani English features ([LLR](https://journals.umt.edu.pk/index.php/llr/article/download/4955/2735?inline=1)).
- **Wikipedia, Pakistani English** (phonology list citing Rahman 1990 as a general source; vocabulary list flagged as needing citations) and **SpeakShark's guide for Urdu speakers** (a 2026 teaching blog, no data) ([SpeakShark](https://speakshark.com/blog/english-pronunciation-for-urdu-speakers)) [practitioner opinion].
- The Hindi evidence **(as cited in hi.md)**: Khan 2021 (10 Hindi-L1 professionals, qualitative), Demszky et al. (22 Indian English features in ICE-India), Van Rooy 2014 (abstract).
- **Not opened:** the Pakistani error-analysis papers that searches returned (§11). Two were read as abstracts only: Saeed, Hussain & Fatima 2015 and Din & Ghani 2019 (below).

1. **Articles: dropped and added.**
   - *What goes wrong:* *a* is missing before singular count nouns and jobs; *the* is missing with known or unique things; *the* is added to general, abstract and proper nouns; ایک is read as *one*, یہ / وہ as *the*.
   - *Examples:* `My father is lecturer. ✗ → My father is a lecturer. ✓` (handout) / `There I had bought small Scooby-Doo toy. ✗ → a small … toy ✓` (eWAVE 63) / `He said that Education Ministry is reorganizing English syllabus. ✗ → the Education Ministry … the English syllabus ✓` (eWAVE 62) / `The England is a good place. ✗ → England ✓` (handout) / `It is the time for us to leave. ✗ → It is time … ✓` (eWAVE 64)
   - *Why:* Urdu has no articles. ایک ("one") sometimes does the work of *a* (ایک لڑکا آیا) and یہ / وہ the work of *the*, but both are optional; definiteness is left to context and word order.
   - *Evidence:*
     - [research-backed, expert rating] eWAVE rates all three as **B** in Pakistani English: zero article where Standard English has *the* (62), zero where it has *a* (63), and *the* where Standard English has none (64).
     - [research-backed, second-hand] The handout calls "differences in the use of articles and prepositions and the omission of certain auxiliary verbs" "the most commonly cited features" of Pakistani English morphology.
     - (as cited in hi.md) Sharma 2005a, via a summary: zero articles persist in Indians with otherwise near-native English; Khan 2021: articles "omitted or overused".
   - **Content consequence:** both directions, as in hi and ru: *a* for one countable thing and *the* for a known thing, **and** no article for general, abstract and most proper nouns. *One* for *a* is a third, Urdu-specific trap. Articles stay in fluent Pakistani English, so never gate on them.
2. **Continuous with states, habits and durations; *since / for / from*.**
   - *Examples:* `I am knowing him. ✗ → I know him. ✓` / `They were having a horse. ✗ → They had a horse. ✓` (handout) / `I am seeing the sky from here. ✗ → I can see the sky from here. ✓` (handout) / `I am doing it all the time. ✗ → I do it all the time. ✓` (eWAVE 89; handout) / `I am living here since 2015. ✗ → I've lived here since 2015. ✓` / `I am working here from two years. ✗ → I've worked here for two years. ✓`
   - *Why:* Urdu uses رہا ہے for an ongoing state that began in the past, with سے: «میں دو سال سے یہاں رہ رہا ہوں». Word for word that is Present Continuous + *from / since*. سے also means *from*, so *from two years* follows. Urdu also uses رہا ہے or a habitual form where English keeps the simple tense.
   - *Evidence:*
     - [research-backed, expert rating] eWAVE 89, progressive for habits: **B**. eWAVE 88, progressive with stative verbs: **"?" (no information)** for Pakistani English, so the stative half rests on the sources below.
     - [research-backed, second-hand] The handout: Pakistani English "permits the use of the progressive aspect with the habitual and the perfective" and with stative verbs, with the examples above.
     - (as cited in hi.md) Khan 2021 (`I am living in Delhi from two years`), Demszky et al. (STATIVE and HABITUAL PROGRESSIVE in ICE-India), Van Rooy 2014 (abstract).
     - The brief's *I am knowing* and the *since / from* examples are in **no opened Pakistani source** [practitioner opinion; the Urdu construction is the same as the Hindi one].
   - **Content consequence:** the most Urdu-specific grammar zone. It touches `continuous`, `tense`, `perfect`, `perfect-2` and gets its own lesson, `stative-since` (§8).
3. **Present Perfect with a finished time; *was* + verb.**
   - *Examples:* `I have seen him yesterday. ✗ → I saw him yesterday. ✓` (handout) / `I was went there. ✗ → I went there. ✓`
   - *Why:* Urdu «دیکھا ہے» looks like the Present Perfect but is used with finished times too («میں نے اسے کل دیکھا ہے»). Urdu past forms often keep تھا («میں گیا تھا»), which learners render as *was*.
   - *Evidence:* [research-backed, expert rating] eWAVE 100, "present perfect for StE simple past": **B**. [research-backed, second-hand] the handout: "a preference for the perfective aspect over the simple past in sentences which contain a past adverbial". [research-backed, abstract only] Din & Ghani 2019 gave 200 B.Sc. students in Multan ten Urdu sentences in the two "indefinite" tenses to translate and treat tense translation as a known problem; the page gives no results. *was* + verb: (as cited in hi.md) Khan 2021.
4. **Questions: statement order, inverted indirect questions, missing *do*, the one tag.**
   - *Examples:* `What this is made of? ✗ → What is this made of? ✓` (eWAVE 228) / `How you got here? ✗ → How did you get here? ✓` (handout) / `I asked him where is he. ✗ → I asked him where he was. ✓` (eWAVE 227) / `You are ill, isn't it? ✗ → You're ill, aren't you? ✓` (eWAVE 165) / `You like tea? → Do you like tea? ✓`
   - *Why:* Urdu asks by intonation or with کیا at the start («کیا آپ چائے پیتے ہیں؟»), question words stay where the answer would be («آپ کہاں جا رہے ہیں؟»), nothing like *do* exists, and one tag, «ہے نا؟», fits every sentence.
   - *Evidence:* [research-backed, expert rating] eWAVE: no inversion in wh-questions (228) **B**; inverted order in indirect questions (227) **B**; invariant tags (165) **B**. [research-backed, second-hand] the handout: "Lack of subject-auxiliary inversion is acceptable in Pakistani English", and "omission of auxiliary do, did and does".
5. **Plurals and countability.**
   - *Examples:* `I have two brother. ✗ → two brothers ✓` / `one of my friend ✗ → one of my friends ✓` / `many advices ✗ → a lot of advice ✓` / `furnitures, informations, equipments ✗` / `the alphabets A and B ✗ → the letters A and B ✓` (Wikipedia: *alphabet* = a single letter in Pakistani English)
   - *Why:* Urdu marks plural on many nouns (لڑکا → لڑکے, کتاب → کتابیں), but masculine nouns that end in a consonant do not change in the direct case (دو بھائی, دو دوست, دو دن), so *two brother* sounds right. مشورہ, معلومات, سامان are counted or already plural in Urdu.
   - *Evidence:* [research-backed, expert rating] eWAVE 55, plural for a Standard English mass noun (`these advices and edicts`): **C**, rare in educated Pakistani English. eWAVE 56, no plural marking after quantifiers: **D, attested absence** — so *two brother* is a **learner** error, not Pakistani English. [curriculum convention] Microsoft's Urdu style guide states the Urdu side: nouns "are never pluralized after a plural number" (its examples were lost in extraction). (as cited in hi.md) Khan 2021 (`I have two friend`, `one of my friend`, `peoples`).
6. **Prepositions from postpositions.**
   - *Examples:* `What is the time in your watch? ✗ → by your watch ✓` (handout) / `to combat against poverty ✗ → to combat poverty ✓` (handout) / `discuss about ✗ → discuss ✓` / `married with ✗ → married to ✓` / `I am elder to you. → I'm older than you. ✓` (Wikipedia) / `at evening ✗ → in the evening ✓`
   - *Why:* Urdu puts these words after the noun (میں, پر, سے, کو, کے لیے), and one postposition covers several English prepositions: سے = *from, since, by, with, than*; میں = *in, at, on*; پر = *on, at*. «کے بارے میں بات» gives *discuss about*; «سے شادی» gives *married with*; «تم سے بڑا» gives *elder to / than*.
   - *Evidence:* [research-backed, second-hand] the handout: Pakistani English "may omit prepositions", "may add preposition" and "may use a different preposition". [research-backed, abstract only] Saeed, Hussain & Fatima 2015 (*IJEL* 5(3)): composition and essay tests from 26 higher-secondary students showed "various types" of prepositional errors; no counts on the page ([abstract](http://www.ccsenet.org/journal/index.php/ijel/article/view/46210)).
7. **Third-person -s and agreement.**
   - *Examples:* `He work in a bank. ✗ → He works in a bank. ✓` / `She don't like tea. ✗ → She doesn't like tea. ✓`
   - *Why:* Urdu verbs agree in gender and number (کرتا ہے / کرتی ہے / کرتے ہیں), but on the participle and the auxiliary, not through a lone -s.
   - *Evidence:* [research-backed, expert rating] eWAVE 170, zero marking of third-person -s: **D, attested absence** in Pakistani English: fluent speakers keep the -s, so dropping it marks a learner. (as cited in hi.md) Khan 2021 calls missing -s "the most common error" of his ten Hindi-L1 participants.
8. **Verb patterns (to + verb or -ing; that-clauses).**
   - *Examples:* `Javed was looking forward to become a millionaire. ✗ → looking forward to becoming ✓` / `interested to grab power ✗ → interested in grabbing ✓` / `banning Americans to enter ✗ → banning Americans from entering ✓` / `announced to take out a procession ✗ → announced that it would … ✓` (all from the handout)
   - *Why:* Urdu uses one infinitive form (کرنا, کرنے) where English chooses between *to do*, *doing* and a preposition + *-ing*.
   - *Evidence:* [research-backed, second-hand] the handout gives complementation its longest section (adjective, verb and noun complements) with newspaper examples. This zone is better documented for Pakistani English than for any other variety in the finished profiles.
9. **Pronouns: *he / she* from وہ; dropped *it*.**
   - *Examples:* `My sister is a doctor. He works in Lahore. ✗ → She works… ✓` / `I bought a phone but he is not working. ✗ → it isn't working ✓` / `Yes, I like. ✗ → Yes, I like it. ✓`
   - *Why:* وہ means *he, she, it, they* and *that*; gender shows on the verb (وہ جاتا ہے / جاتی ہے), not on the pronoun. Urdu also drops a known object.
   - *Evidence:* [research-backed, expert rating] eWAVE 10, "no gender distinction in third person singular": **D, attested absence**: fluent Pakistani English keeps *he* and *she* apart. The learner slip itself has **no opened source**: a FlashAcademy teacher sheet that says Urdu speakers "sometimes confuse male and female pronouns" appeared in a search result and could not be opened (§11) [practitioner opinion].
10. **Word order: verb last, adverbs, fronting.**
    - *Examples:* `I tea drink. ✗ → I drink tea. ✓` (beginners only) / `I every day go to office. ✗ → I go to the office every day. ✓` / `Wali Khan pointed out that at no stage it was demanded… ✗ → at no stage was it demanded ✓` (handout)
    - *Why:* Urdu is subject-object-verb, with time and place before the verb («میں روز دفتر جاتا ہوں»).
    - *Evidence:* [research-backed, second-hand] the handout documents only the lack of inversion after fronted adverbials. Full verb-final English from school-educated adults is rare [practitioner opinion; no source]; the live problems are adverb position and questions (item 4).
11. **Pakistani English usages and Urdu calques (vocabulary and pragmatics).** The split is this profile's decision [practitioner opinion]:
    - **Fine in Pakistan, unusual or misunderstood abroad** (teach the international equivalent; never call them wrong): *out of station* (→ out of town), *cousin-brother / cousin-sister* (→ cousin), *pass out* = graduate (→ graduate), *prepone* (→ move up), *batchmate* (→ classmate), *shopper* = a plastic bag (→ a bag), *petrol pump* (→ gas station), *the light has gone* (→ the power is out), *papers* = exams, *numbers* = marks (→ grades, a score), *copy / register* = notebook, *timings* (→ hours, schedule), *Where are you put up?* (→ Where are you staying?), *I am elder to you* (→ I'm older than you), *thrice* (→ three times), *cent per cent* (→ a hundred percent), *expired* = died (→ passed away), *flu* = a cold, *sugar* = diabetes, *Miss / Sir / Madam* as titles for teachers and bosses (all from the Wikipedia list; *cent percent* and *flying coach* also in the handout).
    - **Errors or false leads in any variety:** *open / close the light* (→ turn on / off; Wikipedia: *open / close* an appliance, from کھولنا / بند کرنا), *drinking a cigarette* (→ smoking; from سگریٹ پینا), *same to same* (→ exactly the same), *too much difficult*, *very much true* (→ very difficult, very true), *my head is paining* (→ my head hurts), *Even I didn't know* meaning "I didn't know either", *Myself Ali* (→ I'm Ali), *What is your good name?* (→ What's your name?), *isn't it?* after every sentence. The last three are (as cited in hi.md) or my own knowledge; they are in no opened Pakistani source.
12. **Linking words used in pairs; *that* for speech.**
    - *Examples:* `Although it was late, but I went. ✗ → Although it was late, I went. ✓` / `He said that I am tired. (meaning he is tired) ✗ → He said (that) he was tired. ✓`
    - *Why:* Urdu pairs اگرچہ … لیکن and keeps the speaker's own words after کہ («اس نے کہا کہ میں تھکا ہوا ہوں»).
    - *Evidence:* [practitioner opinion]; no source opened. The same two points are in hi.md §8.
13. **Pronunciation.** Each item is tagged separately. Background: educated Pakistani English has its own pronunciation norm; it is "rhotic, tends to be syllable-timed, and shares many features with … northern Indian English" (handout). The course aims at **being understood by international listeners**, not at removing a Pakistani accent.
    - **/v/–/w/ as one sound (و [ʋ]).** `very` → *wery*, `west` = `vest`, `wine` = `vine`.
      - [research-backed, feature list] Syed, Bibi & Shafi 2024: Pakistani English speakers "do not differentiate between English /v/ and /w/". [practitioner opinion] Wikipedia ("often merged into one approximant"), SpeakShark ("Urdu's wāo (و) is one sound, /ʋ/, sitting between English /v/ and /w/"). No Urdu-L1 error rate was found; the studies with numbers that searches returned are on Saraiki and Khowar speakers and were not opened.
    - **TH as dental stops (تھ / د).** `think` → *tink*, `three` ≈ `tree`, `this` → *dis*.
      - [research-backed, feature list] Syed et al. 2024: speakers "produce dental fricatives as stops". [practitioner opinion] Wikipedia; SpeakShark ("speakers substitute the nearest dental sounds, ت and د").
    - **Vowel before or inside s-clusters.** `school` → *iskool* (Urdu speakers) or *sakool* (Punjabi speakers), `sport` → *isport* / *saport*, `slide` → *salide*.
      - [research-backed, second-hand] The handout: "speakers of Punjabi have difficulty with such initial consonant clusters as /sk, sp/ (they say s[ə]port and s[ə]kool …) Urdu speakers also have difficulties with initial consonant clusters (they say isport and iskool)". Rehman 2019, reporting Mahboob & Ahmar 2004: Punjabi and Urdu speakers "insert different vowels at different positions" in such words. [research-backed, abstract only] Mir, Afsar & Shafi 2023: epenthesis is used "on certain CC clusters at onset and coda positions" in Urdu-influenced English ([BJL](https://journals.luawms.edu.pk/bjl/article/view/36)). [practitioner opinion] SpeakShark.
      - The spelling shows it: Urdu writes *school* as سکول or اسکول and *station* as اسٹیشن, with the extra vowel built in.
    - **Vowels: quality, not length.** `bad` ≈ `bed`; `cup`, `ago` and `bird` with one central vowel; `late` and `go` as long single vowels; `leave` / `live`.
      - [research-backed] Rehman 2019: Urdu "distinguishes between short and long vowels, and lacks an open-mid front and an open-mid back vowel"; Punjabi-Urdu listeners had trouble with the **central** vowels of British English. Her review: studies of Pakistani English "show a distinction between short and long vowels" (against a general claim about Asian Englishes); Bilal et al. 2011 (60 Punjabi-L1 speakers, as she reports) found /e/ and /æ/ "less distinct" than in British speech, and no distinction among the central vowels (20 speakers); "some diphthongs are pronounced as monophthongs" (Mahboob & Ahmar 2004; Rahman 1991, as she reports).
      - So the brief's "vowel length" is the *weaker* half: Urdu has long and short pairs (دِل / دیر, پُل / دُور), which help with *ship / sheep* and *full / fool*. SpeakShark still lists *sheet* and *leave / live* as a merger [practitioner opinion], so the pair stays in deck 18 as a check. The real work is **bad / bed**, the **weak vowel** and the **vowel of *bird***.
    - **Stress and weak vowels.** Full vowels in unstressed syllables, stress on the wrong syllable (`deVELopment` → *developMENT*, SpeakShark), even weight on every syllable.
      - [research-backed, second-hand] Mahboob & Ahmar 2004 (six Urdu-L1 speakers from Karachi, no acoustic analysis), as reported by Rehman 2019: in two-syllable words the unstressed vowel is produced as a full vowel. The handout: "tends to be syllable-timed". (as cited in hi.md) Sirsa & Redford 2013 measured fewer reduced vowels in Indian English than in British English.
      - Consequence: ˈ on every content word and written weak forms in the aid (§6).
    - **Retroflex t / d (ٹ, ڈ) for English t / d.** [research-backed] Syed et al. 2024 measured the 15 Urdu-L1 speakers' /t/: retroflex in *teach, tart, tool*, but alveolar after /s/ (*steal, star, stool*; voice onset about 11–13 ms against 20–24 ms). **Light:** understood everywhere; mention it, do not drill it.
    - **Unaspirated p, t, k.** [research-backed, feature list] Syed et al. 2024: "all voiceless plosives as unaspirated". Urdu has the contrast (پ / پھ, ک / کھ), which the `pron` lesson uses: English *pen* starts nearer پھ than پ. Light.
    - **z → j, f → p, by home language, not by Urdu.** Urdu has ز and ف. SpeakShark: *zero* → *jero* "appears mainly when Punjabi, Pashto, Sindhi, or Saraiki is the home language"; the handout: Pashto speakers "use /p/ for /f/ (pood for food)". Present these as «کچھ علاقوں میں», never as an error of all Urdu speakers.
    - **Final consonants** (`bag` → *back*) and **silent letters** (*Wednesday, receipt, walk*): [practitioner opinion] SpeakShark only, and it does not tie the first to Urdu.
    - **`singer` with a hard g; `measure` with *y*:** [practitioner opinion] Wikipedia; Syed et al. list /ʒ/ → /j/. Light.
14. **Things that are *not* zones** (do not over-teach):
    - **r / l, p / b, k / g, s / sh:** Urdu has all of these contrasts, so the ko-en pairs *rice / lice*, *right / light*, *fan / pan* are easy warm-ups.
    - **z and f for speakers whose home language is Urdu** (item 13).
    - **The verb *be* in the present:** Urdu always has ہے / ہیں, so *She very tired* is a slip, not transfer. Spend `be` on *be* + verb (`I am agree`, `I was went`).
    - **Accent features that do not block understanding:** retroflex t / d, a tapped r, long *e* and *o* in *late* and *go*.

## 5. Learner starting point

- **Who the learners are.**
  - Urdu is Pakistan's "national language and lingua franca", and it is "widely spoken and understood as a second language across the country", but only **9.25%** of Pakistanis named it as their mother tongue in the 2023 census (Punjabi 36.98%, Pashto 18.15%, Sindhi 14.31%, Saraiki 12.00%, Balochi 3.38%) ([Wikipedia, Languages of Pakistan](https://en.wikipedia.org/wiki/Languages_of_Pakistan), citing the census; no share of second-language speakers is given) [curriculum convention: census via Wikipedia].
  - So **most users of an Urdu-medium course did not grow up speaking Urdu at home.** They read and write Urdu from school. Grammar transfer is much the same across these languages [practitioner opinion; no source], but sound transfer differs by home language (§4.13: *iskool* / *sakool*, z / j, f / p). The course explains everything through Urdu and flags regional sound traps as regional.
  - Urdu speakers in India and abroad are a secondary audience: the script and grammar notes hold, the Pakistani references (rupees, Karachi, matric) may not. `Intl` locale `ur-IN` differs (§10).
- **School exposure** [curriculum convention unless tagged].
  - English is an official language of Pakistan beside Urdu and a medium of instruction in schools, colleges and universities (Wikipedia, as above). It is a school subject from the early grades and a compulsory paper in the matric and intermediate exams [general knowledge; no syllabus could be opened, §11].
  - **"English medium" often is not.** Punjab made all its public schools English-medium in 2010 or 2011 (the two reports differ) and announced a return to Urdu in 2019; in 2018 "the medium of instruction in most of these schools is still Urdu" ([Dawn 2018](https://www.dawn.com/news/1400201); [Business Recorder 2019](https://www.brecorder.com/news/amp/518136)).
  - **Teachers' own English is weak:** a 2013 British Council study with the Aptis test put 62% of private-school and 56% of government-school teachers in the lowest band, and "94 percent of teachers in English medium schools had pre-intermediate level English or lower" (Business Recorder 2019, reporting the study; the study itself was not opened).
  - The usual method is grammar-translation: tense by tense, with Urdu sentences to translate into English, the task Din & Ghani 2019 tested. Adults therefore know tense names and "forms of the verb" and translate word for word [practitioner opinion].
  - **Phonetic symbols:** whether schools teach them could not be established; the 2006 and 2022–23 national curriculum files returned 403 (§11). hi.md found that India's CBSE schools do not. Treat IPA as **new to most learners** (§6).
- **Exams and goals** [general knowledge; none fetched]: matric and intermediate English papers; CSS and other competitive exams with an English essay and précis; IELTS and PTE for study and migration; jobs in offices, call centres, freelancing and the Gulf. Familiar task formats: fill in the blanks, translation from Urdu, correction of sentences, active / passive and direct / indirect. They map onto `fill`, `type` and `mc`.
- **Profile figures:**
  - [research-backed, test-taker data] **EF EPI, Pakistan** ([EF country page](https://www.ef.com/wwen/epi/regions/asia/pakistan/), which serves the fact sheet in EF's 2026 folder): score **496**, rank **58**, global average 485; **reading 524, writing 508, speaking 485, listening 463**. Regions: Khyber Pakhtunkhwa 508, Punjab 497, Sindh 487, Balochistan 481. Cities: Islamabad 532, Rawalpindi 524, Peshawar 518, Karachi 503, Lahore 500, Hyderabad 469.
  - The fact sheet in EF's 2025 folder opened only as an unreadable PDF; the search summary of it gave 493, rank 67, reading 512, listening 470, writing 515, speaking 517 (**not verified by me**). **Listening is the lowest skill in both.** EF test-takers are self-selected and of every home language.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, move fast.** Most adults are false beginners who know the forms and their school names. The value is in typed production and audio.
  2. **Listening first.** EF puts listening lowest, school teaching is from the page, and many teachers' own English is limited. Keep audio on every row, weight listen-then-type review and minimal pairs (*vest / west*, *three / tree*, *bad / bed*).
  3. **Never gate on articles or the continuous-with-states error.** Both live on in fluent Pakistani English (eWAVE B ratings; the handout).
  4. **Make the article and the tense carry the answer** in typed items (§7), because translation habits make learners good at choosing and weak at producing.
  5. **Respect Pakistani English.** Present international forms as "what listeners abroad expect". eWAVE's D ratings show where a form is a learner slip and not Pakistani English (dropped -s, *two brother*, *he* for *she*): those may be marked ✗ plainly.
  6. **Exam and job flavour** in blurbs where true («IELTS Speaking میں کام آئے گا», «انٹرویو میں»); never promise scores.

## 6. Pronunciation aid policy

**What the two closest courses did, and why**
- **Arabic (`tools/content/ar/profile.json`): IPA, exactly as zh writes it** (`pronPattern` identical to zh's, `pronScript: "ˈ"`). ar.md §6 gives four reasons: Arabic script has no letters for /p/ and /v/, so a respelling writes the two signature errors; short vowels are not written, so *bit / bet / bat / but* cannot be shown; clusters cannot be written without inviting an inserted vowel; and a right-to-left aid between a left-to-right English line and its meaning is hard to read. With IPA, most rows are copied from `tools/content/zh/`, and zh's `PRON-RULES.md` and `pron_check.js` are reused.
- **Hindi (`tools/content/hi/profile.json`, `PRON-TOOL.md`): a Devanagari respelling.** hi.md §6: CBSE does not teach phonetic symbols, Hindi learner's dictionaries print pronunciation in Devanagari, and Devanagari writes every vowel and already has a habit, the nukta, for foreign sounds (ज़, फ़), which the key extends (व़ for /v/, थ़ द़ for *th*). The price was a one-to-one table from zh's IPA, a converter (`pron_hi.js`), a 733-row lookup and hand cases.
- **The difference between them is the script, not the learner.** Hindi learners and Arabic learners are equally unlikely to have learned IPA at school. Devanagari can carry English sounds with one small extension; Arabic script cannot.

**Urdu sides with Arabic. What an Urdu-script respelling would write** [practitioner opinion, inference from §4.13; the Urdu spellings are the usual loanword spellings, native check §11]:

| English contrast | Usual Urdu spelling | What it teaches |
|---|---|---|
| /v/ and /w/ (very, west) | و for both: ویری, ویسٹ | the merger itself. و is also the vowels of *food*, *go* and *law* (و = v, w, ū, o, au), so *wood* and *vote* are ambiguous twice over |
| /θ/ (think, three) | تھ: تھنک, تھری | the aspirated dental stop, the error itself. Unlike in Arabic, ث is no help: Urdu reads ث as /s/ |
| /ð/ (this, the) | د: دس, دی | the dental stop; ذ is read /z/ in Urdu |
| short vowels (bit, bet, bat, but) | بٹ for most of them | nothing: zer, zabar and pesh are "rarely used in Urdu content" (r12a), and there is no short *e* at all |
| /æ/, /e/, /eɪ/ (bad, bed, late) | بیڈ, بیڈ, لیٹ | one ی / ے for three vowels |
| /iː/ and /ɪ/ (leave, live) | لیو, لو | *live* looks like *low*; only a zer separates them |
| s-clusters (school, station) | سکول / اسکول, اسٹیشن | the inserted vowel is in the standard spelling |
| word stress | no convention | nothing |

- A respelling could be rescued with full vowel marks, a jazm on every cluster, and invented letters for /v/, /θ/ and /ð/. That is a new script the learner must study, harder than thirty IPA symbols, and Nastaliq stacks vowel marks so tightly that they are hard to read at the aid's size (`.rom` / `.pron` are .82–.95rem).
- **The engine expects a left-to-right aid.** Under `dir="rtl"`, `.pron`, `.rom`, `.ex .r` and `.face .rom` are `direction: ltr; unicode-bidi: isolate` (`src/app.html` line 29), built for the Arabic course's IPA. An Urdu-script aid in that box would need engine changes, and a leading ˈ (a neutral character) would land on the wrong side of an Urdu word.
- **Cost.** With IPA, the 356 shared card targets and 325 `{{ex}}` rows that zh covers (hi.md's count) are copied byte for byte, ar's rows for localised names can be reused (*My name is Sara.*), and `lint.js` (one aid per English text) passes without a converter.
- **The counter-argument, recorded:** whether adult Pakistani learners read IPA is **not known** (§5, §11); for Hindi the same doubt tipped the choice the other way. The answer here is the key below, taught on one screen in the `pron` lesson with Urdu letters as anchors, audio on every row, and a toggle. If first-user data show the aid is ignored, the lead can revisit; the table above is why a plain Urdu respelling should not be the fallback.
- **No study compares IPA, an Urdu-script respelling and no aid** for Urdu speakers. The decision is inference [practitioner opinion].

**Decision: IPA in every `pron` field (`"pron": "required"`), written exactly as the Chinese course writes it.** Shown by default; hidden with the toggle «تلفظ دکھائیں (IPA)». `tools/content/zh/PRON-RULES.md` is binding for ur-en as written (copy it and `pron_check.js` into `tools/content/ur/`, the lead's step, as for ar). Where zh.md §6 and PRON-RULES.md differ, PRON-RULES.md wins.
- **Why not `optional` or `none`:** the aid is where learners *see* v against w, θ against t, the weak vowels and the stress that English spelling hides; an empty pron needs untested engine rendering (PIPELINE §3).
- **Why not a hybrid** (IPA plus an Urdu hint in one field): `pronPattern` forbids it and the hint would bring back و for both v and w. Urdu approximations belong in the `pron` lesson body and in card `note`s.

**Rules for the `pron` field** (summary; the full text is zh.md §6 rules 1–10 and PRON-RULES.md):
1. **Format.** One pair of slashes, words separated by one space, no punctuation, capitals or digits. Two sentences in one row: ` ‖ ` (U+2016). Alternatives: two slashed groups separated by one space (`/ˌfɪfˈtiːn/ /ˈfɪfti/`). Never `//`. **No direction marks** (a stray RLM fails the pattern; checked).
2. **Stress.** The closed function-word list stays unmarked; **every other word gets ˈ, monosyllables included** (`/ˈjes/`, `/aɪ ˈlaɪk ˈtiː/`). A stressed function word takes its strong form and ˈ. Phrasal-verb particles take ˈ. ˌ only inside long words, -teen numbers and letter-by-letter abbreviations.
3. **Notation:** OALD North American values in the school symbol set: iː ɪ e æ ʌ ə ɑː ɔː uː ʊ ɜːr ər, eɪ aɪ ɔɪ aʊ oʊ, ɪr er ʊr ɑːr ɔːr, unstressed final i / u. ASCII `g`, plain `r`, no flap symbol, no ɚ ɝ ɡ ɹ.
4. **Weak forms** as in PRON-RULES.md §B (a /ə/, the /ðə/ or /ði/, to /tə/, can /kən/, you /ju/, your /jʊr/ …). This is the rule that shows the rhythm §4.13 says Pakistani English lacks.
5. **Clusters and codas in full, with no inserted vowel:** `school` /ˈskuːl/, `station` /ˈsteɪʃn/, `street` /ˈstriːt/, `asked` /ˈæskt/. -s as /s z ɪz/, -ed as /t d ɪd/.
6. **Numbers as words; abbreviations letter by letter; names and places as the en-US voice says them** (the content agent listens to each once, §11): Sara /ˈserə/ (ar's row), Ali /ˈɑːli/, Karachi /kəˈrɑːtʃi/, Lahore /ləˈhɔːr/, Pakistan /ˈpækɪstæn/, Urdu /ˈʊrduː/, rupees /ruːˈpiːz/.
7. **No aid in practice items** (PRACTICE-SPEC). Lesson bodies, `why` and notes may name a sound («آواز /v/»), never two adjacent slashes: write «/v/ اور /w/» with spaces.

**The key for the `pron` lesson** (IPA symbol → Urdu anchor → example). The Urdu column is for the lesson body only and never goes into a `pron` field. It differs from ar's key wherever Urdu reads a letter differently from Arabic (ث, ذ, ض, و). **All anchors need a native and phonetic check** (§11).

| IPA | Urdu anchor (lesson prose only) | Example |
|---|---|---|
| p b | پ ب («pen کے شروع میں ہلکی سی ہوا، پھ کے قریب») | pen /ˈpen/, bag /ˈbæg/ |
| t d | ٹ ڈ کے قریب، مگر زبان کی نوک اوپر کے دانتوں کے پیچھے مسوڑھے پر | time /ˈtaɪm/, day /ˈdeɪ/ |
| k g | ک گ | key /ˈkiː/, go /ˈgoʊ/ |
| f | ف | fan /ˈfæn/ |
| **v** | **اردو میں نہیں:** اوپر کے دانت نچلے ہونٹ پر، آواز کے ساتھ (ف کی جوڑی) | very /ˈveri/, vest /ˈvest/ |
| **w** | **اردو کا و نہیں:** ہونٹ گول، دانت ہونٹ کو نہیں چھوتے | west /ˈwest/, wine /ˈwaɪn/ |
| **θ** | **اردو میں نہیں:** زبان کی نوک دانتوں کے بیچ، ہوا نکلتی رہے؛ تھ نہیں، س نہیں | think /ˈθɪŋk/, three /ˈθriː/ |
| **ð** | **اردو میں نہیں:** θ کی طرح مگر آواز کے ساتھ؛ د نہیں، ز نہیں | this /ˈðɪs/, they /ˈðeɪ/ |
| s z | س ز | sea /ˈsiː/, zoo /ˈzuː/ |
| ʃ ʒ | ش ژ | she /ʃi/, usually /ˈjuːʒuəli/ |
| tʃ dʒ | چ ج | check /ˈtʃek/, job /ˈdʒɑːb/ |
| h | ہ | house /ˈhaʊs/ |
| m n l | م ن ل | |
| ŋ | "رنگ" کے آخر جیسی آواز، مگر آخر میں گ نہیں | sing /ˈsɪŋ/, singer /ˈsɪŋər/ |
| r | ر کے قریب، مگر زبان کہیں نہیں لگتی اور ہر جگہ بولا جاتا ہے | car /ˈkɑːr/ |
| j | ی ("یہ" کے شروع والی آواز) | yes /ˈjes/ |
| iː / ɪ | "دیر" کی لمبی ی / "دِل" کی چھوٹی آواز | leave /ˈliːv/, live /ˈlɪv/ |
| e | "دیر" سے چھوٹی اور کھلی آواز | bed /ˈbed/ |
| **æ** | "ہے" اور "بیٹھ" والی آواز کے قریب، منہ اور کھلا | bad /ˈbæd/ |
| ʌ / ə | "کب" کی چھوٹی آواز؛ ə وہی آواز، بہت ہلکی اور بغیر زور کے | cup /ˈkʌp/, about /əˈbaʊt/ |
| ɑː | "آم" کا آ (امریکی انگریزی میں hot, job, stop بھی) | hot /ˈhɑːt/ |
| ɔː | "اور" اور "کون" والی آواز | talk /ˈtɔːk/ |
| uː / ʊ | "دُور" کی لمبی آواز / "پُل" کی چھوٹی آواز | food /ˈfuːd/, book /ˈbʊk/ |
| eɪ / oʊ | "دیر" اور "بول" کی آواز، آخر میں ہلکا سا ی / و | late /ˈleɪt/, go /ˈgoʊ/ |
| aɪ / aʊ / ɔɪ | آ + ی / آ + و / او + ی، ایک ہی سانس میں | time /ˈtaɪm/, now /ˈnaʊ/, boy /ˈbɔɪ/ |
| ɜːr / ər | زور کے ساتھ "اَر" (ایک ہی آواز) / بغیر زور کے ہلکا "اَر" | bird /ˈbɜːrd/, water /ˈwɔːtər/ |
| ˈ / ː | زور کا نشان: اس کے بعد والا ٹکڑا اونچا اور لمبا / لمبی آواز | hotel /hoʊˈtel/ |

**`pron` lesson additions** (prose; they change no English string):
1. How to read the aid: slashes, ˈ = زور, ː = لمبی آواز, «ترچھی لکیروں کے بیچ آواز لکھی ہے، ہجے نہیں».
2. **v against w** (very / wary, vest / west, vine / wine): teeth on the lip and a buzz, against round lips.
3. **θ and ð** (think, three, this): tongue between the teeth, air keeps flowing; not تھ, not د.
4. **No vowel before or inside s-clusters** (school, station, sport, street): «سکول کہیں، اِسکول یا سَکول نہیں».
5. **bad against bed; the weak vowel ə; the vowel of *bird*.**
6. **Stress and weak forms** (about, banana, photography, development, hotel): one strong syllable per word, the rest short.
7. **A puff of air on p, t, k** at the start of a stressed syllable (pen ≈ پھ).
8. One line: Pakistani t / d (ٹ, ڈ) and long *e* / *o* are understood everywhere; z / j and f / p matter only «کچھ علاقوں میں». Spend the effort on items 2–6.

**Validator settings (profile.json):**
- `"pron": "required"`, `"pronPattern"`: zh's and ar's pattern unchanged: `^(?=.*ˈ)/C+( C+)*/( /C+( C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. Checked identical to `tools/content/ar/profile.json`.
- `"pronScript": "ˈ"`: the aid is not in the native script, so every pron must contain ˈ instead (PIPELINE §3). ˈ occurs 0 times in `packs/course-ko-en.js`.
- **`"nativeScript"`: Urdu letters only,**
  `[\u0621-\u0624\u0626-\u0628\u062A-\u063A\u0641\u0642\u0644-\u0646\u0648\u0679\u067E\u0686\u0688\u0691\u0698\u06A9\u06AF\u06BA\u06BE\u06C1-\u06C3\u06CC\u06D2\u06D3]`
  - **In:** ء آ أ ؤ ئ ا ب, ت to غ, ف ق, ل م ن, و, and the Urdu letters ٹ پ چ ڈ ڑ ژ ک گ ں ھ ہ ۂ ۃ ی ے ۓ.
  - **Out, on purpose:** the Arabic-only code points U+0643 (Arabic kaf), U+0647 (Arabic heh), U+0649 (alef maksura), U+064A (Arabic yeh), U+0629 (teh marbuta) and U+0625; every vowel mark and the tatweel; all punctuation («۔» «،» «؛» «؟»); Urdu digits and Arabic-Indic digits; presentation forms.
  - **What that buys.** "Urdu" means **at least one Urdu letter**. A `why` that is English plus «۔» (`Present Perfect + since۔`) fails, as do a digits-only string and a word typed entirely with the Arabic-only letters (all checked). ar's class takes the whole range U+0671–06D3 and so accepts Urdu and Persian letters; this one does not return the favour for the Arabic-only code points.
  - **What it cannot do.** Urdu shares most of its letters with Arabic and Persian, and Persian has no letter of its own that Urdu lacks apart from the Arabic heh, so a Persian sentence or an Arabic sentence with ordinary letters still counts as "native text". No character class can tell the languages apart; the class is a script test, not a language test.
  - **Wrong code points are a separate check:** before merging, the lead greps the Urdu sources for `[\u0643\u0647\u0649\u064A\u0629\u0660-\u0669\u06F0-\u06F9\u0640\u200B-\u200F\uFB50-\uFDFF\uFE70-\uFEFF]` (Arabic-only letters, both digit sets, tatweel, direction marks, presentation forms) and expects 0. This file has 0 (checked).
  - The class finds 0 characters in `packs/course-ko-en.js`, `course-zh-en.js` and `course-hi-en.js` (checked), so "English must not contain native script" is safe.
- `labels.cueTest` = the same class. `labels.mcBlankCue` = « — خالی جگہ پُر کریں» and `typeHintCue` = « — ان الفاظ سے». Both are appended to a bare-English prompt, which then starts with a Latin letter and lays out left to right; they end in an Urdu letter, not in «؟» or «۔», so no mark jumps sides. They are a safety net: writers put the Urdu frame first themselves (§2, direction), and for a translation question write «انگریزی میں: "میں پانچ سال سے یہاں رہ رہا ہوں"».

**Worked examples.** "zh row" / "ar row" = the English string exists in that course with this IPA, to be copied; "new" = written by the rules. All 38 pron strings below pass `pronPattern`, contain `pronScript` and contain no `nativeScript` character (node check, §11).

| English | `pron` | Source · Urdu trap shown |
|---|---|---|
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ | zh row · weak first vowel of *today* |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ | zh row · ð, not د; æ |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ | zh row · weak *can, you, the*; no `?` |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ | zh row · v; plural /z/ written (§4.5) |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ | zh row · w and v in one row; -ed = /t/ |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ | zh row · ‖ between sentences; a, then the |
| Where do you live? | /ˈwer də ju ˈlɪv/ | zh row · weak *do*: the auxiliary Urdu lacks |
| Thank you. | /ˈθæŋk ju/ | zh row · θ, not تھ |
| Excuse me. | /ɪkˈskjuːz mi/ | zh row · cluster /ksk/ with no added vowel |
| My name is Sara. | /maɪ ˈneɪm ɪz ˈserə/ | ar row · localised name (§9) |
| very / wary | /ˈveri/ · /ˈweri/ | zh rows · the و merger |
| vest / west | /ˈvest/ · /ˈwest/ | zh rows · the و merger |
| think / sink | /ˈθɪŋk/ · /ˈsɪŋk/ | zh rows · θ against s (ث is read s in Urdu) |
| three / tree | /ˈθriː/ · /ˈtriː/ | zh rows · θ against t |
| they / day | /ˈðeɪ/ · /ˈdeɪ/ | new · ð against d |
| school | /ˈskuːl/ | new · no *i* before, no vowel inside the cluster |
| station | /ˈsteɪʃn/ | zh form · اسٹیشن has a vowel English lacks |
| street | /ˈstriːt/ | ar row · three consonants together |
| bad / bed | /ˈbæd/ · /ˈbed/ | zh rows · the vowel pair Pakistani English blurs |
| about | /əˈbaʊt/ | new · weak first vowel |
| photography | /fəˈtɑːgrəfi/ | new · stress on the second syllable |
| development | /dɪˈveləpmənt/ | new · not *developMENT* (SpeakShark) |
| zoo / Jew | /ˈzuː/ · /ˈdʒuː/ | new · z against j, for some home languages |
| I live in Karachi. | /aɪ ˈlɪv ɪn kəˈrɑːtʃi/ | new · localised city (§9) |
| I'm from Pakistan. | /aɪm frəm ˈpækɪstæn/ | new · as the en-US voice says it |
| Do you speak Urdu? | /də ju ˈspiːk ˈʊrduː/ | new · localised language name |
| Five hundred rupees. | /ˈfaɪv ˈhʌndrəd ruːˈpiːz/ | new · currency as a word (§9) |
| I've lived here since 2015. | /aɪv ˈlɪvd ˈhɪr sɪns ˈtuː ˈθaʊznd ˌfɪfˈtiːn/ | new · the since trap (§4.2); number as words |
| I've known him for ten years. | /aɪv ˈnoʊn hɪm fər ˈten ˈjɪrz/ | new · state + *for* (`stative-since`) |
| She is a doctor. | /ʃi ɪz ə ˈdɑːktər/ | new · *she*, not *he* (§4.9); American ɑː |
| fifteen / fifty | /ˌfɪfˈtiːn/ /ˈfɪfti/ | zh form · two slashed groups for alternatives |

- Rejected by `pronPattern` (checked): `/ˈyes/` (spelling), `/jes/` (no ˈ), `/ˈjes?/`, `//`, `/ˈɡet/` with U+0261, `ˈویری` (Urdu letters), a pron followed by U+200F, `/ˈθri:/` with an ASCII colon, `/ˈVeri/`, `/ˈveri /`, a double space, and a `|` between groups.
- Before writing a "new" row, grep `tools/content/zh/` and `tools/content/ar/` for the English string; if it is there, copy that IPA.

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "آرٹیکل|جمع(?!ہ|رات)|قابلِ?\s?شمار" }` (no `flags`: Urdu has no letter case).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or on a plural or countability form (-s, this / these, many / much, a piece of).
- The `why` of each such item must contain **آرٹیکل**, **جمع** or **قابلِ شمار / ناقابلِ شمار**.
- **Why these strings:**
  - `آرٹیکل` is the classroom word and has one spelling.
  - `جمع` is the school word for plural, but the same three letters begin جمعہ (Friday) and جمعرات (Thursday), which the `prep` and `numbers` lessons need. The lookahead `(?!ہ|رات)` keeps a `why` about *on Friday* from counting. JavaScript's `\b` does not work on Urdu letters, so a lookahead is the only anchor. (جمع کرنا, "to collect", would still match; it has no business in a `why`.)
  - `قابلِ?\s?شمار` matches قابلِ شمار with or without the izafat zer (U+0650), with or without the space, and so also inside ناقابلِ شمار.
  - `واحد` (singular) alone does not count, as in hi.md: it does not name the point.
- **What the validator counts** (validate.js `article-plural`, as hi.md §7 describes it): `order` — the `why` matches **and** `x` holds an article tile or a singular / plural twin of a tile in `a`; `type` — the `why` matches **and** every variant in `a` contains an article, or `x` holds an article or a twin of a word in `a[0]`. Put the competitor tile in `x`.

**Sample `why` lines** (all tested with `new RegExp(keywords)` exactly as validate.js builds it; English bare, «۔» at the end):
- «پیشے سے پہلے آرٹیکل a آتا ہے: a teacher۔» → hit
- «two کے بعد اسم جمع میں آئے گا: brothers۔ اردو میں "دو بھائی" میں لفظ نہیں بدلتا، انگریزی میں -s لگتا ہے۔» → hit
- «information ناقابلِ شمار ہے: نہ آرٹیکل a، نہ -s۔» → hit
- «دوسری بار ذکر ہو تو آرٹیکل the آتا ہے۔» → hit
- «these جمع کے لیے ہے، this ایک چیز کے لیے۔» → hit
- «قابل شمار اسم واحد ہو تو اس سے پہلے a ضروری ہے۔» → hit (no zer)
- «دس سال: years جمع میں آئے گا، اور know کے ساتھ -ing نہیں لگتا۔» → hit
- «advice ناقابل شمار ہے، اس لیے advices غلط ہے۔» → hit
- «عام بات ہو تو آرٹیکل نہیں لگتا: Money is important۔» → hit
- «he کے ساتھ فعل پر -s لگتا ہے: works۔» → **no hit** (correct: not an article or plural point)
- «جمعہ کے ساتھ on آتا ہے: on Friday۔» → **no hit** (the lookahead)
- «جمعرات = Thursday، اور دن کے نام سے پہلے on۔» → **no hit**
- «advice گنی نہیں جاتی، اس لیے advices غلط ہے۔» → **no hit**: the writer must say «ناقابلِ شمار».
- «فاعل واحد ہے، اس لیے is آئے گا۔» → **no hit**
- «Present Perfect + since۔» → no hit, and not Urdu text either (`nativeScript` fails).

**Writer rules:**
- Write «جمع» and «آرٹیکل» in full; never «پلورل», «بہت سے» or «a/an والا لفظ» for the grammar point.
- Use the keywords only in `why` lines of items that really hinge on articles or plurals.
- Every `why`, `hint` and `q` needs at least one Urdu letter (§6), and the letters must be the Urdu code points: آرٹیکل typed with the Arabic kaf or جمع کی typed with the Arabic yeh looks right and does not match.

**Justification:**
- **Articles:** Urdu has none, and all three article features are rated B in fluent Pakistani English (eWAVE 62, 63, 64) [research-backed, expert rating]. No Urdu-L1 error rate was opened (§11).
- **Plurals and countability are a real Urdu problem** for learners: Urdu leaves many nouns unchanged after a number (دو بھائی; Microsoft's guide: "never pluralized after a plural number"), and eWAVE marks number-without-plural as *absent* from fluent Pakistani English (56: D), so it is a learner error worth drilling. Mass-noun plurals (*advices*) are rare but attested (55: C).
- **Parity cost is zero:** the shared `order` / `type` items were written to the Korean rule; only the Urdu `why` must name the keyword [consequence of PILOT-SPEC §1.6].
- **Why not a tense rule,** given that §4.2 and §4.3 are the most Urdu-specific zones? It is not implemented in validate.js, would need English changes in up to 40 sets (each a deviation), and a tense hinge inside `articles` or `countable` would be artificial. Those zones get the `stative-since` lesson, four reweights and the secondary wording below. hi.md reached the same conclusion.

**Secondary emphasis (not validated; do not add these to the regex):**
- Duration: «"سے" + مدت = for: for two years۔ from نہیں۔», «2015 سے = since 2015 — Present Perfect، Present Continuous نہیں۔»
- Stative verb: «know حالت بتانے والا فعل ہے: I know، I'm knowing نہیں۔»
- *do*: «سوال میں امدادی فعل do چاہیے: Do you like tea?» (in a real `why` the English question mark must not end the line: add «۔» or reword).
- وہ: «وہ = he یا she؛ چیز کے لیے it۔»
- -s: «he / she / it والا -s».

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in zh.md, hi.md and ar.md):**
- **keep** = a fresh Urdu explanation from the Urdu point of view; English rows, checks and practice unchanged.
- **reweight** = the same English checks and practice; the *Urdu explanation and lesson-body example rows* shift emphasis as noted. Lesson-body rows are not parity-bound; check options and practice `o` / `a` / `x` / fill `q` are. No deviation entry is needed.
- **change English side** = would need a `deviations.json` `items` entry. **None is proposed** for the 40 shared lessons.
- **add** = a new lesson with `deviations.json` `extraLessons` and profile.json `lessonOrder.after`. Its practice set must itself satisfy §7.

The brief counts 39 Korean-course lessons; `tools/content/lib.js` `ORDER` now has 40, because the shared `alphabet` lesson was added in front. All 40 are listed. Ids and order are unchanged; nothing is replaced or dropped.

| lesson id | keep / reweight / add | note for Urdu speakers |
|---|---|---|
| alphabet | reweight | The English side is fixed by `docs/briefs/alphabet-spec.md`. Urdu notes: English runs left to right and has capital and small letters, which Urdu lacks (say so in section 1); letter names in IPA from zh; **V against W** as names (/ˈviː/, /ˈdʌbəljuː/), **Z = zee** in the US (Pakistan says *zed*), H, G / J, E / I; spelling an email or a name aloud; *double L* is understood, *triple* is not used. Card meanings start with an Urdu word («حرف A a») |
| pron | reweight | Teach the aid first (§6 key). Then the Urdu traps: v / w (very / wary, vest / west), θ / ð (think, three, this; not تھ, د), no vowel in s-clusters (school, station, sport), bad / bed, the weak vowel and stress (about, photography, development), a puff on p t k. **Shared checks and practice stay** (rice / lice, fan / pan, think / sink, vote / boat, right / light, coffee / copy …); their `why` lines say plainly when a pair is easy («ر اور ل اردو میں بھی الگ ہیں»), and spend the words on think, three and vote |
| be | reweight | Urdu always has ہے, so leaving *be* out is rare. Spend the lesson on *be* + verb: `I am agree ✗ → I agree`, `I was went ✗ → I went`, `She is knowing ✗` (preview of `continuous`). Short answers *Yes, I am* |
| it-there | reweight | «سردی ہے», «دیر ہو گئی» have no subject → It's cold, It's late. «پاس ہی ایک کیفے ہے» → There's a cafe near here (`Near here is a cafe ✗`) |
| articles | reweight | No آرٹیکل in Urdu. *a* for jobs and "one of many" (`My father is lecturer ✗`, handout); ایک ≈ *a* only sometimes, and *one* for *a* is an Urdu trap; یہ / وہ ≠ always *the*. Both directions (§4.1) |
| plurals | reweight | Core: -s after a number although «دو بھائی» does not change (`two brother ✗`), *one of my friends*, people / children, this / these, 's (علی کا فون → Ali's phone), -s said /s z ɪz/ |
| present | reweight | Word order: Urdu فاعل-مفعول-فعل against English subject-verb-object («میں چائے پیتا ہوں» → I drink tea); time words go last (`I every day go ✗`). *don't* for negation (`I not like ✗`). Habits take the simple form, not -ing (`I am doing it all the time ✗`, eWAVE 89) |
| questions | reweight | کیا-questions and intonation questions → Do you like tea?; order after question words (`What this is made of? ✗`, eWAVE 228; `How you got here? ✗`, handout). Body: indirect questions keep statement order (`I asked him where is he ✗`, eWAVE 227); tags *aren't you, don't you*, and «"ہے نا؟" = isn't it? ہر جملے کے ساتھ صرف پاکستان اور بھارت میں چلتا ہے» |
| third-s | reweight | Urdu agreement sits on کرتا ہے / کرتی ہے; English has only the -s, and fluent Pakistani English keeps it (eWAVE 170). Make it heard and spelled; *does / doesn't* |
| prep | reweight | Postpositions come after the noun, English prepositions before. سے = from / since / by / with / than; میں = in / at; پر = on / at. «شام کو» → in the evening, «پیر کو» → on Monday, «جمعہ کو» → on Friday, «5 بجے» → at five. *married to*, *discuss* (no *about*), `What is the time in your watch? ✗` (handout) |
| countable | reweight | مشورہ, معلومات, سامان, فرنیچر, کام: advice, information, luggage, furniture, work are uncountable (`many advices ✗`, eWAVE 55). *a piece of*. *alphabet* is the whole set; one of them is *a letter* |
| object-have | reweight | «میرے پاس گاڑی ہے» → I have a car; *have* for owning is never -ing (`They were having a horse ✗`, handout). Objects are *it*, not *he / she* (وہ covers all); do not drop *it* (`Yes, I like ✗`) |
| can-like | reweight | «مجھے چائے پسند ہے» (the liker is not the subject in Urdu) → I like tea, subject first; no -ing for a general liking. like + -ing |
| polite | reweight | Urdu politeness lives in آپ and the verb ending (دیں, دیجیے); English puts it in could / would: `Give me one tea ✗ → Could I have a tea?`. *Kindly* + order sounds stiff abroad. *Please* is not a reply to *thank you* |
| continuous | reweight | رہا ہے overlaps Present Continuous for actions now, not for states or habits: no -ing on know, want, understand, have (own), see, need (`I am seeing the sky from here ✗`, handout). Preview `stative-since` |
| past | reweight | تھا is not *was* in every past sentence: «میں گیا تھا» → I went (`I was went ✗`); *did* + first form in questions and negatives; -ed said /t d ɪd/ |
| irregular-past | keep | Learners drill first / second / third forms at school; use that habit and spend the time on typed recall |
| the | reweight | Both directions: second mention and shared knowledge take *the* (`He said that Education Ministry … ✗`, eWAVE 62); general, abstract and most proper nouns take none (`The England ✗`, handout; `It is the time for us to leave ✗`, eWAVE 64) |
| adjectives | reweight | «زیادہ اچھا», «سب سے سستا» put the comparing word before the adjective: `more better ✗`, `most cheapest ✗`. سے → *than*; *older than*, not *elder to* (Wikipedia) |
| going-to | keep | |
| tense | reweight | Recap table: Urdu کرتا ہے / کر رہا ہے / کیا / کیا ہے / کرے گا and their English matches, marking the two false matches: «سے + رہا ہے» → Present Perfect (Continuous), and «کیا ہے» + a finished time → Simple Past (`I have seen him yesterday ✗`, eWAVE 100) |
| joining | reweight | «اگرچہ … لیکن» → *although* or *but*, never both; «کیونکہ … اس لیے» → *because* or *so*; کہ = *that* |
| numbers | reweight | لاکھ and کروڑ: 1 lakh = a hundred thousand, 10 lakh = a million, 1 crore = ten million (Wikipedia lists the system). Dates day/month in Pakistan against month/day in the US; a.m. / p.m. shared. Prices as «five hundred rupees». *double five* for 55 in phone numbers is understood; say each digit when asked |
| smalltalk | reweight | *How are you?* is a greeting. Opening questions that are normal in Pakistan — salary, marriage, children, age, «کھانا کھایا؟» — are personal abroad. *What's your name?*, *I'm from Lahore*. Deck localised (§9) |
| **pakistani-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | keep | کرے گا maps well onto *will*; keep ko's contrast with *going to* |
| perfect | reweight | Key lesson. «کیا ہے» looks like Present Perfect but takes finished times: `I have seen him yesterday ✗ → I saw him yesterday` (handout; eWAVE 100). been to / gone to («گیا ہے» = has gone: he is not here) |
| modals | reweight | چاہیے = should / need / have to; سکتا ہے = can / may / might; «ضرورت نہیں» = don't have to (not mustn't) |
| to-ing | reweight | The best-documented Pakistani English zone (§4.8): `looking forward to become ✗ → to becoming`, `interested to grab ✗ → interested in grabbing`, `banning Americans to enter ✗ → from entering` (handout) |
| articles-2 | reweight | General plurals and uncountables without *the* (Dogs are loyal; Cricket is popular); the unique *the* (the sun, the internet); countries (Pakistan, *the* US, *the* UAE) |
| first-conditional | reweight | Urdu uses the future after اگر / جب («اگر بارش ہو گی») → If it rains (`If it will rain ✗`) |
| relative | reweight | Urdu «جو آدمی کل آیا تھا، وہ میرے چچا ہیں» doubles the subject: `The man who came yesterday, he is my uncle ✗`. Pakistani English also packs the clause before the noun (`under construction bridge` → a bridge that is under construction; handout) |
| phrasal | keep | |
| perfect-2 | reweight | for / since against Urdu سے (one word for both): «دو سال سے» → for two years (`from two years ✗`, `since two years ✗`), «2015 سے» → since 2015. Hands over to `stative-since` |
| **stative-since** | **add** (after `perfect-2`, B1) | See below |
| narrative | keep | |
| conditionals | reweight | «اگر مجھے پتا ہوتا تو …» covers both present and past unreal (If I knew / If I had known); teach the split by time |
| passive | reweight | Formal Urdu and Pakistani office English lean on the passive (`It is informed that …`). Teach when English prefers the active; keep the shared items |
| reported | reweight | Urdu keeps the speaker's words after کہ: «اس نے کہا کہ میں تھکا ہوا ہوں» means *he* is tired → He said (that) he was tired. *told me*, not *said me*; `reminded that … ✗ → reminded the students that …` (handout). School calls this Narration |
| email | reweight | Pakistani office habits that read oddly abroad: «Respected Sir», *Kindly do the needful*, *Sir / Madam* + first name. → Dear Mr. Khan / Hi Ali, *Could you please …*, *I've attached …*. First names are normal in US work email |
| idioms | reweight | Urdu idiom calques that do not exist in English (`eating my head ✗`, from دماغ کھانا → bugging me); cricket idioms that travel only to cricket countries (*a googly*, *well left*; Wikipedia) |

**Totals:** 40 existing lessons: **6 keep** (irregular-past, going-to, past-continuous, will, phrasal, narrative) and **34 reweight**. None dropped, no English-side change. Plus 2 additions, the only lesson-level parity exceptions. Every verdict is [practitioner opinion] grounded in §4.

**Additions:**
- **`pakistani-english`** — title «پاکستانی انگریزی: یہاں ٹھیک، باہر عجیب», after `smalltalk` (end of A1), deck 22 «پاکستانی انگریزی: یہاں اور باہر» (§9).
  - *Framing:* Pakistani English is a real variety. The lesson shows what listeners abroad expect; no ✗ for group 1.
  - *Content:*
    1. **Fine in Pakistan, unusual abroad** (→ international form): out of station (→ out of town), cousin-brother / cousin-sister (→ cousin), pass out (→ graduate), batchmate (→ classmate), shopper (→ bag), petrol pump (→ gas station), the light has gone (→ the power is out), papers / numbers (→ exams / grades), copy (→ notebook), timings (→ hours), Where are you put up? (→ Where are you staying?), thrice (→ three times), prepone (→ move up), expired (→ passed away).
    2. **Wrong or misleading anywhere** (✗ → ✓): open / close the light (→ turn on / off), drink a cigarette (→ smoke), same to same (→ exactly the same), too much difficult (→ very difficult), my head is paining (→ my head hurts), I am elder to you (→ I'm older than you), Myself Ali (→ I'm Ali), …, isn't it? after every sentence.
    3. **Urdu calques** [my own knowledge, native check]: eat medicine, from دوا کھانا (→ take medicine); give an exam, from امتحان دینا (→ take an exam); What is your good name? (→ What's your name?); my real brother, from سگا بھائی (→ my brother).
  - *Practice that meets §7* (sketch for the writer; Urdu to be checked):
    - order `p:"بجلی چلی گئی ہے"`, `a:["The","power","is","out"]`, `x:["light","a"]`, why «"لائٹ چلی گئی" کے لیے باہر The power is out کہتے ہیں؛ وہی بجلی جسے سب جانتے ہیں، اس لیے آرٹیکل the۔»
    - order `p:"مجھے ایک تھیلا چاہیے"`, `a:["I","need","a","bag"]`, `x:["shopper","the"]`, why «shopper کا مطلب خریدار ہے؛ تھیلے کے لیے bag، اور کوئی ایک تھیلا، اس لیے آرٹیکل a۔»
    - order `p:"مہربانی کر کے بتی جلا دیں"`, `a:["Please","turn","on","the","light"]`, `x:["open","a"]`, why «بتی کھولی نہیں جاتی: turn on۔ کمرے کی وہی بتی، اس لیے آرٹیکل the۔»
    - type `p:"میرے دو کزن ہیں"`, `a:["I have two cousins"]`, `x:["cousin"]`, why «two کے بعد جمع: cousins۔ cousin-brother باہر نہیں بولا جاتا، صرف cousin۔»
    - type `p:"مجھے کچھ مشورہ چاہیے"`, `a:["I need some advice","I need advice"]`, `x:["advices"]`, why «advice ناقابلِ شمار ہے: advices نہیں بنتا۔»
    - type `p:"میں شہر سے باہر ہوں"`, `a:["I'm out of town","I am out of town"]`, `x:["station"]` (not a hit; 2 of 3 type items are enough)
  - *Parity:* new lesson id (`extraLessons`) and a new deck (deck count deviation).
  - *Reason:* §4.11. It is the zone where Urdu speakers' English is fluent *and* misunderstood abroad, and ko-en has no equivalent. It mirrors hi `indian-english`, ar `arabic-traps`, zh `chinglish`. About half of hi-en's `indian-english` rows are also attested for Pakistan (out of station, cousin, pass out, prepone, isn't it?, Myself …) and can be copied with their IPA; the rest are replaced by the Pakistani items above.
- **`stative-since`** — title «"سے" = since؟ حالت والے فعل اور "کب سے"», blurb idea «"میں 2015 سے یہاں رہ رہا ہوں" = I've lived here since 2015؛ I am living نہیں», after `perfect-2` (B1), deck «اپنا تعارف» (deck 2; no new deck).
  - **Same id as hi-en's lesson, and the same English side.** The Urdu construction is word for word the Hindi one, so the writer copies hi-en's checks, practice answers, distractors and body rows (and derives nothing by hand: the IPA comes from zh or is written by §6), localises names and places (§9), and writes the Urdu prompts and `why` lines afresh. hi.md §8 has the full outline: (1) stative verbs never take -ing (know, understand, want, need, have = own, belong, remember); (2) سے → *since* (a point), *for* (a length), *from … to* (with an end); (3) «سے + رہا ہے» → Present Perfect Continuous for actions, Present Perfect for states; (4) کب سے؟ → How long …?; (5) *having lunch / a meeting* is fine.
  - *Urdu prompts for hi-en's items* (sketch):
    - order `p:"میں اسے دس سال سے جانتا ہوں"`, `a:["I've","known","him","for","ten","years"]`, `x:["year","since"]`, why «دس سال: years جمع میں آئے گا، اور know کے ساتھ -ing نہیں لگتا۔»
    - order `p:"ہمارے پاس 2020 سے ایک گاڑی ہے"`, `a:["We've","had","a","car","since","2020"]`, `x:["the","for"]`, why «ایک گاڑی، پہلی بار ذکر: آرٹیکل a؛ شروع کا سال ہو تو since۔»
    - type `p:"میرے پاس یہ فون تین سال سے ہے"`, `a:["I've had this phone for three years","I have had this phone for three years"]`, `x:["year"]`, why «تین سال: years جمع میں؛ مالک ہونے والا have حالت بتاتا ہے: I've had۔»
    - type `p:"آپ کب سے انتظار کر رہے ہیں؟"`, `a:["How long have you been waiting"]`, `x:["since"]` (not a hit)
    - A prompt with وہ needs a gender cue (وہ = he / she): «وہ (لڑکی) دو ہفتے سے بیمار ہے» or a name.
  - *Check before copying:* hi-en's accepted lists use *him / her* and Indian names; any item whose answer depends on the Hindi verb's gender marking must get an explicit cue in Urdu.
  - *Reason:* §4.2 is the most Urdu-specific grammar zone (handout; eWAVE 89; the Hindi evidence), and it is a three-error package (-ing on a state, Present Continuous for Present Perfect, *from* for *for*) that `continuous` and `perfect-2` each touch from one side.

**Considered, not added:**
- A verb-pattern lesson for §4.8: `to-ing` already carries it, and its body can take the handout's examples without touching the English side.
- `articles-3` (zh, ja): three article lessons plus the standing rule cover it; the lead can add ja's English side later if logs show articles lagging.
- A pronunciation lesson of its own (vi's `final-sounds`): the `pron` reweight and deck 18 cover v / w, th, clusters and stress.

## 9. Vocabulary and cultural notes

- **Names.** Sara (main character; `My name is Sara.` already has an IPA row in ar-en) and Ali. Alternates: Ayesha, Bilal, Hassan, Zainab, Omar, Fatima, Sana, Imran, Hina, Nadia. Surnames only in work and email scenes: Khan, Ahmed, Malik. Avoid names the en-US voice mangles; the content agent listens to each once (§11). In Urdu translations: سارہ, علی, عائشہ, بلال, حسن, زینب, عمر, فاطمہ, ثنا, عمران, حنا, نادیہ; خان, احمد, ملک.
- **Places.** Karachi, Lahore, Islamabad; also Peshawar and Multan. Country Pakistan, language Urdu. Keep ko-en's foreign cities where the scene is abroad.
- **Food and drink.** chai, biryani, samosa, dal, roti, naan, kebab, lassi; tea rather than coffee where ko-en's scene allows without changing the English string (parity: only in lesson-body rows and new cards). **Halal default:** no pork and no alcohol in new content; where a shared ko-en card mentions beer or wine, keep the English (parity) and translate neutrally, with no joke about it.
- **Daily life.** cricket, Pakistani TV dramas, weddings, Eid, Ramadan, Independence Day (14 August), load-shedding, rickshaws and ride-hailing. No politics, no sect, no India–Pakistan comparisons, nothing about religion beyond the name of a festival.
- **Money.** In English strings write `500 rupees` (never Rs, PKR or ₨): the voice reads the word, and the pron aid needs it as a word. لاکھ and کروڑ only in `numbers`.
- **Titles.** Mr. / Ms. + surname in English; *Sir* and *Madam* alone, not with a first name (`pakistani-english`, `email`).
- **School words that differ:** matric, intermediate / FSc, *marks*, *paper* — explain as «امریکہ میں: grade, exam» in notes, without ✗.

**Deck localisation (the same card positions as hi-en and ar-en; each is a `deviations.json` `decks` entry the lead writes):**

| Deck | Card | ko-en English | ur-en English |
|---|---|---|---|
| 2 | 0, 4, 5 | My name is Minji. / I'm from Korea. / I live in Seoul. | My name is Sara. / I'm from Pakistan. / I live in Karachi. |
| 3 | 12 | Do you speak Korean? | Do you speak Urdu? |
| 10 | 6 | Have you been to Korea? | Have you been to Pakistan? |
| 12 | 8 | Your Korean is really good! | Your Urdu is really good! |
| 14 | 0, 1 | Hello, this is Minji. / the Mr. Kim card | Hello, this is Sara. / Mr. Khan |
| 15 | 8 | under Kim | under Khan |
| 16 | 15 | the Korean embassy | the Pakistani embassy |
| 18 | appended | (ko pairs kept) | Urdu pairs added after ko's: vine / wine, vest / west, very / wary, think / sink, three / tree, they / day, school, station, street, bad / bed, about, photography, development, zoo / Jew. Copy zh, hi or ar rows where the string exists |
| 22 | all | (none) | new deck; `decks["count"]` deviation |

The positions and ko-en strings above are as hi-en's and ar-en's `deviations.json` record them; the lead confirms each against `packs/course-ko-en.js` when scaffolding.

**Deck names.** One row for every deck the scaffold will contain (ko-en's 21: twenty topic decks and the shared alphabet deck at position 21) and the ur-only deck 22. All 22 are final proposals, pending the native check (§11); each is unique, Urdu-initial, free of vowel marks and digits other than the two numbered decks. Linked lessons follow hi-en's `DECKNAMES.md`.

| # | Urdu deck name | Linked lessons / notes |
|---|---|---|
| 1 | **سلام دعا** | greetings; no linked lesson |
| 2 | **اپنا تعارف** | articles, be, present, third-s, object-have, perfect-2, **stative-since**; cards 0, 4, 5 localised |
| 3 | **سب سے ضروری 1** | polite; card 12 localised |
| 4 | **سب سے ضروری 2** | questions |
| 5 | **راستہ اور سواری** | the |
| 6 | **ریسٹورنٹ میں** | countable |
| 7 | **کیفے اور دکان** | no linked lesson |
| 8 | **خریداری اور ادائیگی** | plurals, adjectives, relative |
| 9 | **گنتی، وقت اور تاریخ** | prep, numbers |
| 10 | **ہلکی پھلکی گپ شپ** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing; card 6 localised |
| 11 | **جذبات اور ردعمل** | joining, past-continuous, conditionals |
| 12 | **تعریف اور پسند** | card 8 localised |
| 13 | **دفتر اور ای میل** | first-conditional, passive, email |
| 14 | **کال اور چیٹ کی شارٹ فارم** | reported; cards 0, 1 localised |
| 15 | **سفر (ایئرپورٹ اور ہوٹل)** | perfect, articles-2; card 8 localised |
| 16 | **ڈاکٹر اور ایمرجنسی** | modals; card 15 localised |
| 17 | **فریزل ورب** | phrasal |
| 18 | **تلفظ کی عام غلطیاں** | pron; Urdu pairs appended |
| 19 | **انگریزی محاورے** | idioms |
| 20 | **فلمیں، ڈرامے اور سلینگ** | narrative |
| 21 | **انگریزی حروف تہجی** | alphabet; the shared alphabet deck (26 cards, English side fixed by `docs/briefs/alphabet-spec.md`) |
| 22 | **پاکستانی انگریزی: یہاں اور باہر** | pakistani-english; ur-only deck |

- A deck name must never be reused, and a renamed deck orphans saved progress, so settle the native check before the first release.
- Deck 22 card shape: front = the international form (`I'm out of town.`), meaning in Urdu, note «پاکستان میں: out of station». For group 2 items the note says «غلط:» + the form.

## 10. Interface wording notes

**What the engine already does for a right-to-left interface** (`src/app.html`; read, not rendered by me):
- `RTL_LANGS = {ar:1, he:1, fa:1, ur:1}`: with `ur` as the interface language the document gets `dir="rtl"`.
- Every pattern slot `$n` is wrapped in first-strong isolates (U+2068 … U+2069) for RTL languages, so a number or an English word dropped into an Urdu sentence cannot reorder its neighbours. **This is why translators never type direction marks.**
- `.pron`, `.rom`, `[lang=en]`, tiles, `kbd`, `#hdrStat` and `input.ans` are left-to-right isolates; `.q`, `.prac-q`, `.opt`, table cells, chips and review answers take the direction of their first strong letter (`unicode-bidi: plaintext`).
- ar.md §10 reports rendered checks (Playwright) of these rules for Arabic. Urdu uses the same Unicode bidi classes, so the same rules should hold; **no Urdu screen was rendered for this profile** (§11).

**What the engine lacks for Urdu, for the lead (not a translator matter):**
- There is a root rule set for `[lang=ar]` (font stack, line height 1.75–1.8, `nav a{overflow:visible}`, letter-spacing 0, `--mono:var(--body)`) but **none for an Urdu interface**. The only Urdu rule is `body [lang=ur], .tgt-rtl bdi.tx[lang=ur]` (Nastaliq font stack, line height 2.1), written for the en-ur course, where Urdu is the *target* inside tagged elements. With `<html lang="ur">` it matches nothing at the root.
- Needed: an Urdu interface rule with the same font stack, line height about 2 or more (r12a: Nastaliq needs "quite large line height"), `letter-spacing: 0` (letter spacing breaks joined script), no italics, no uppercase transforms, `nav a{overflow:visible}`.
- **Decide Nastaliq or Naskh for chrome.** Nastaliq is what Pakistani readers expect for running text; at the tab bar's .62rem and in one-line buttons its sloping baseline may clip. A reasonable split, untested: Nastaliq for lesson bodies, meanings and `why`; a Naskh face (Noto Naskh Arabic) for tabs, buttons and chips. Test at 390px before translating the interface.

**Digits and locale** [curriculum convention + local check]:
- **Western digits 0–9 everywhere.** Mozilla's Urdu guide uses them; r12a says Urdu uses ASCII digits or the extended Arabic-Indic set; Microsoft's guide writes decimals with a period "with English digits". Node (ICU 78.2) formats `ur` and `ur-PK` with Latin digits: 1,234,567.5 · 85% · «23 نومبر، 2026» · 23/11/26 · 4:05 PM.
- **Never `ur-IN`:** it prints Urdu digits and Arabic separators (U+066C for thousands, U+066B for the decimal). The engine should pass `ur` (or `ur-PK`) to `Intl`.
- Never type Urdu digits (U+06F0–06F9) or Arabic-Indic digits (U+0660–0669) in any string; a number inside an Urdu line is always left to right, and Urdu-digit shapes for 4, 5, 6, 7 differ from the Arabic ones, a known font trap.
- Dates: let `Intl` format them («23 نومبر»); do not build dates from pieces. Time as `Intl` gives it (4:05 PM); do not translate AM / PM by hand.
- Percent: `85%` as `Intl` gives it. Units in Latin stay Latin with a space: «{1} XP», 5 MB (Microsoft's guide keeps KB / MB "as it is").

**Count patterns (a number slot in a sentence)** [local check + curriculum convention; wording is mine, native check]:
- `Intl.PluralRules('ur')`: 1 → `one`; 0, 2, 21, 100 and 1.5 → `other`. The interface pack has **one string per pattern**, so each must read correctly for 0, 1, 2 and 21.
- Urdu nouns and verbs change with number, and some nouns change after a postposition (دن / دنوں, ہفتہ / ہفتے / ہفتوں). Two devices avoid every such change:
  1. **Number + an unchanging noun, with no verb and no postposition after it.** Masculine nouns ending in a consonant, and English loans, do not change in the direct plural: «{1} کارڈ», «{1} دن», «{1} سبق», «{1} منٹ», «{1} سیکنڈ», «{1} ڈیک», «{1} سوال», «{1} پوائنٹ», «{1} بار». (Microsoft's guide: nouns "are never pluralized after a plural number"; its examples were lost in extraction, so the list of safe nouns is mine.)
  2. **Label, colon, number:** «باقی: {1}», «نئے: {1}», «غلط: {1}», «درست: {1}», «لگاتار دن: {1}», «ہفتے: {1}».
- **Never:**
  - an agreeing verb or participle after the count: «{1} کارڈ باقی ہیں» is wrong at 1 (ہے) — write «باقی کارڈ: {1}»;
  - a noun that changes after a number: ہفتہ / ہفتے, گھنٹہ / گھنٹے, مہینہ / مہینے, غلطی / غلطیاں, کوشش / کوششیں — move it before the colon in its plural or label form;
  - a postposition after the counted noun: `Intl.RelativeTimeFormat('ur')` gives «1 دن میں» but «3 دنوں میں». Write «{1} دن بعد» (بعد does not force the change in everyday use; native check) or «دن: {1}»;
  - a gendered adjective tied to the count («{1} نیا کارڈ» / «نئے کارڈ») — write «نئے کارڈ: {1}».
- Where the English pack has a singular and a plural key for one message, give both the same Urdu string.
- Ordinals: avoid («سبق 3», not «تیسرا سبق»), since ordinals take gender.
- No leading «+» or «−» typed before a slot; if the design needs «+{1} XP», check it rendered, since a sign next to an isolate can sit on the wrong side.

**Language-name slots** (the pack inserts a language name into a sentence):
- `Intl.DisplayNames('ur')` gives انگریزی, اردو, کوریائی, جاپانی, ہسپانوی, فرانسیسی, جرمن, عربی, ہندی, چینی, روسی. `name.ur` in profile.json is «انگریزی», identical to the `Intl` value (checked).
- Language names do not change after a postposition, but words around them agree (زبان is feminine: «انگریزی سیکھیں» is safe; «اچھی انگریزی» needs the feminine). Put the slot **at the start or after a colon**, with nothing agreeing with it: «کورس: {1}», «{1}: آپ کا لیول کیا ہے؟», «جواب کی زبان: {1}», «{1} سیکھیں». A postposition straight after the slot is fine («{1} میں لکھیں»); an adjective before it is not.
- Never build "X speakers" by adding a suffix; write «اردو بولنے والوں کے لیے» as a fixed string.

**Tab bar and short labels** (the bar is narrow; all are 8 code points or fewer, checked; none has a vowel mark):

| Key | Urdu | Length |
|---|---|---|
| Today | آج | 2 |
| Practice | مشق | 3 |
| Review | دہرائی | 6 |
| Lessons | اسباق | 5 |
| Read | مطالعہ | 6 |
| Drills | مہارتیں | 7 |
| Progress | پیش رفت | 7 (fallback: ترقی) |
| Feedback | رائے | 4 (page title «رائے بھیجیں») |

**Buttons and messages** (same -یں form as the lessons; no «براہ کرم», no terminal punctuation on buttons; all need the native check):
- شروع کریں · جاری رکھیں · آگے · واپس · چھوڑیں · بند کریں · محفوظ کریں · منسوخ کریں · بھیجیں · سنیں · دہرائیں · چیک کریں · دوبارہ کوشش کریں
- «درست!» · «غلط» · «درست جواب:» · «وضاحت» · «اشارہ»
- Exercise instructions: «درست جواب چنیں» (mc) · «جملہ بنائیں» (tiles) · «خالی جگہ پُر کریں» (gap-fill) · «انگریزی میں لکھیں» (typed)
- «آج کی دہرائی» · «لگاتار دن: {1}» · «سبق مکمل» · «تلفظ دکھائیں (IPA)» · «ترتیبات» · «سائن ان کریں» · «سائن آؤٹ کریں»
- Empty and error states as full sentences with «۔»: «آج کی دہرائی مکمل ہو گئی۔», «کچھ غلط ہو گیا۔ دوبارہ کوشش کریں۔»

**Bidi rules for translators (from ar.md §10, restated for Urdu):**
- A string that should read as Urdu starts with an Urdu letter. A string that starts with a Latin word, a digit or a slot may lay out left to right wherever the element uses first-strong direction: write «لیول: A2», not «A2 لیول»; «XP: {1}» only inside a left-to-right element, otherwise «پوائنٹ: {1}».
- **No Latin word directly before a colon at the end of an Urdu label** («IPA:» flips the colon); put the Urdu word first: «تلفظ (IPA):».
- End Urdu sentences with «۔» or «؟», never `.` or `?`. Brackets and quotes mirror on their own: type them in logical order and do not "fix" them by swapping.
- Do not type RLM, LRM, ZWNJ or tatweel to adjust spacing or direction. If a string renders badly, reword it and tell the lead.
- Keep `{1}`, `$1`, `%s` and HTML tags exactly as in the English pack, each once.
- Before delivery, grep the pack for `[\u0643\u0647\u0649\u064A\u0629\u0660-\u0669\u06F0-\u06F9\u0640\u200B-\u200F\uFB50-\uFDFF\uFE70-\uFEFF]` (§6) and expect 0, and run NFC normalisation.

## 11. Gaps and unverified claims

**Process gaps**
- **`reports/Grammar learning order research.md` does not exist** in this worktree (there is no `reports/` folder). The brief's instruction to read it was skipped. `docs/PRACTICE-SPEC.md` cites it for the practice-volume figures; nothing in this profile rests on it.
- `tools/i18n/ar/NOTES.md` does not exist (only the ceb and tl packs have notes), and `docs/profiles/OTHERS.md` has no Urdu section; §10 is built from ar.md §10, `tools/i18n/ar/ui.json` and `src/app.html`.
- `docs/profiles/vi.md` and `id.md` were not read in full (their profile.json files were); the section structure and depth follow zh.md, hi.md and ar.md. `docs/PILOT-SPEC.md` was read for its headings and §1 only, `docs/PRACTICE-SPEC.md` for its data section.
- **Reading method.** Web pages were read through a fetch tool that returns a model's summary of the page; quoted phrases are as that tool returned them and may differ in detail from the page. Three PDFs (the Groningen handout, Rehman's thesis, Microsoft's style guide) were read through a home-made text extraction that loses IPA symbols and all Urdu text; a native reviewer with the originals should recheck the quotations in §4 and §10.

**Evidence gaps**
- **No learner corpus or error-count study of Urdu-L1 learners was opened.** The papers that searches returned (on article, preposition and tense errors of Pakistani students; on /v/–/w/ among Saraiki and Khowar speakers; the handbook chapters by Mahboob 2004 and Mahboob & Ahmar 2004; Rahman 1990) were blocked (403, login walls, broken PDFs) or reachable only as abstracts. The ranking in §4 is therefore inference from one expert's variety ratings (eWAVE), a student handout, and the Hindi evidence.
- **eWAVE** is one informant's judgement of educated Pakistani English, not of learners; only 13 of its features were opened. Feature 88 (statives in the progressive) has no rating, so *I am knowing* rests on the handout and on Hindi evidence.
- **The handout** is an unsourced student presentation; its examples probably come from Mahboob 2004 and Rahman 1990, which I could not check.
- ***he / she* confusion** (§4.9) has no opened source; eWAVE says it is absent from fluent Pakistani English. **Verb-last word order** in adults' English (§4.10) has no source.
- **Pronunciation:** no study with error rates for Urdu-L1 speakers on v / w, th, clusters or stress was opened; Syed et al. 2024 measured only /t/ in 15 women; Mahboob & Ahmar's vowel findings are second-hand through Rehman 2019; Bilal et al. are on Punjabi-L1 speakers. Stress has no Pakistani study at all here.
- **Whether Pakistani adults can read IPA is unmeasured**, and no Pakistani curriculum document or English–Urdu dictionary was opened to see what pronunciation key they use. The IPA decision (§6) rests on the script argument, not on learner data.
- **EF EPI:** the country page's figures were read from a fetch summary; the 2025 sheet's figures come from a search summary only and are marked so. EF samples are self-selected.
- **School facts** (English from grade 1, exam formats, grammar-translation, CSS, IELTS goals) are general knowledge, not fetched. The British Council 2013 figures are as a newspaper reports them.
- **Home-language transfer** (Punjabi, Pashto, Sindhi, Saraiki speakers using an Urdu-medium course) is covered only for three sounds; grammar differences were not researched.
- **Hindi evidence** is cited from hi.md without reopening; it is about Hindi speakers and Indian English.

**Language gaps: every Urdu string needs a native check.** Least certain:
- The standing-rule words: whether teachers say «قابلِ شمار / ناقابلِ شمار اسم» or only *countable / uncountable*; if the latter, the third keyword is dead weight but harmless (جمع and آرٹیکل carry the rule).
- Glossary "school" tags (§3), «متعلق فعل», «امدادی فعل», «حالت بتانے والا فعل», «ملے ہوئے کانسوننٹ».
- Deck names, especially «سلام دعا», «ہلکی پھلکی گپ شپ», «کال اور چیٹ کی شارٹ فارم», «فریزل ورب», «انگریزی حروف تہجی»; tab labels «دہرائی», «مہارتیں», «پیش رفت», «مطالعہ».
- The cue labels « — خالی جگہ پُر کریں» and « — ان الفاظ سے» in context.
- The sound anchors in the §6 key (which Urdu word best matches /æ/, /ɔː/, /ʌ/, /ɜːr/), and the loanword spellings in the respelling table.
- The calques in `pakistani-english` group 3 and the items marked "my own knowledge" in §4.11.
- Whether «{1} دن بعد» is natural at every number, and the list of nouns that do not change after a number (§10).
- Spellings fixed in §2 (سکول against اسکول, امریکہ against امریکا) are taken from en-ur.md to keep the two courses aligned, not from a Pakistani style authority.

**Untested engineering**
- No Urdu interface screen was rendered: Nastaliq line height, tab-bar clipping, the cue labels appended to an English-first prompt, «+{1} XP», and mixed lines ending in an English word + «۔» all need a 390px check.
- The en-US voice's reading of Sara, Ali, Karachi, Lahore, Urdu, rupees and the alternate names was not heard; the IPA for them is by rule and must be confirmed by ear.
- hi-en's `stative-since` and `indian-english` English rows were not diffed item by item for reuse; the lead should confirm which rows carry over.
- The deck-card positions in §9 come from hi-en's and ar-en's deviation files, not from a fresh read of the ko-en pack.

**Node check** (scratch script, run on the two deliverables; output in the hand-back): profile.json parses; `nativeScript`, `pronPattern`, `keywords` and `cueTest` compile exactly as validate.js builds them; 38 pron strings pass and 12 malformed ones fail; 9 `why` lines hit and 6 do not; this file is NFC, has 0 forbidden code points and contains every checked string.

## Sources

Opened and read (through the fetch tool's summary, or the text extraction noted):
- eWAVE, Pakistani English (variety 53; informant Ahmar Mahboob): https://ewave-atlas.org/languages/53 and feature pages https://ewave-atlas.org/valuesets/53-62 · [53-63](https://ewave-atlas.org/valuesets/53-63) · [53-64](https://ewave-atlas.org/valuesets/53-64) · [53-55](https://ewave-atlas.org/valuesets/53-55) · [53-56](https://ewave-atlas.org/valuesets/53-56) · [53-88](https://ewave-atlas.org/valuesets/53-88) · [53-89](https://ewave-atlas.org/valuesets/53-89) · [53-100](https://ewave-atlas.org/valuesets/53-100) · [53-165](https://ewave-atlas.org/valuesets/53-165) · [53-170](https://ewave-atlas.org/valuesets/53-170) · [53-227](https://ewave-atlas.org/valuesets/53-227) · [53-228](https://ewave-atlas.org/valuesets/53-228) · [53-10](https://ewave-atlas.org/valuesets/53-10)
- "Pakistani English", course handout, University of Groningen, 2009 (PDF, text extraction): https://www.let.rug.nl/nerbonne/teach/varieties-eng/Presentations/Pakistani-Eng--Handout-Engels.pdf
- Rehman, I. (2019). *Urdu Vowel System and Perception of English Vowels by Punjabi-Urdu Speakers*. PhD thesis, University of Kent (PDF, text extraction; IPA lost): https://kar.kent.ac.uk/id/document/3205959
- Syed, N. A., Bibi, S. & Shafi, S. (2024). *Linguistics and Literature Review* 10(1), DOI 10.32350/llr.101.04: https://journals.umt.edu.pk/index.php/llr/article/download/4955/2735?inline=1
- Syed, N. A. & Bibi, S. (2022). Emergence of a new phonological feature in Pakistan English. *English Today* 38(4) (landing page only; nothing cited from it beyond its existence): https://www.cambridge.org/core/journals/english-today/article/emergence-of-a-new-phonological-feature-in-pakistan-english/36DFA46EA00647ACE70271A9AC0C2A60
- Mir, Afsar & Shafi (2023). *Balochistan Journal of Linguistics* 10 (abstract page): https://journals.luawms.edu.pk/bjl/article/view/36
- Saeed, A., Hussain, S. & Fatima, S. (2015). *International Journal of English Linguistics* 5(3) (abstract page): http://www.ccsenet.org/journal/index.php/ijel/article/view/46210
- Din, M. & Ghani, M. (2019). *English Language Teaching* 12(5) (abstract page): http://www.ccsenet.org/journal/index.php/elt/article/view/0/39216
- Wikipedia, "Pakistani English": https://en.wikipedia.org/wiki/Pakistani_English
- Wikipedia, "Languages of Pakistan": https://en.wikipedia.org/wiki/Languages_of_Pakistan
- SpeakShark, "English Pronunciation for Urdu Speakers: 10 Fixes" (2026): https://speakshark.com/blog/english-pronunciation-for-urdu-speakers
- EF EPI, Pakistan: https://www.ef.com/wwen/epi/regions/asia/pakistan/
- Dawn, 8 April 2018 (medium of instruction in Punjab): https://www.dawn.com/news/1400201
- Business Recorder, 19 August 2019 (British Council Aptis figures; return to Urdu medium): https://www.brecorder.com/news/amp/518136
- Mozilla Urdu localisation style guide: https://mozilla-l10n.github.io/styleguides/ur
- Zulip, Urdu translation style guide: https://zulip.readthedocs.io/en/latest/translating/urdu.html
- Microsoft Urdu (Pakistan) Style Guide (PDF, English text only): https://download.microsoft.com/download/d/a/0/da076f1d-0fc1-4336-9b9b-97159456bae9/urd-pak-StyleGuide.pdf
- Ishida, R. (r12a), "Urdu (Arabic script) orthography notes": https://r12a.github.io/scripts/arab/ur.html

Repository files read: `docs/briefs/profile-ko-based.md`; `docs/profiles/zh.md`, `hi.md`, `ar.md`, `en-ur.md`; `docs/PIPELINE.md` §3; `docs/PRACTICE-SPEC.md` (data section); `docs/PILOT-SPEC.md` (§1); `docs/briefs/alphabet-spec.md` and the ar / hi alphabet briefs; `tools/content/lib.js`; `tools/content/{ko,zh,vi,id,th,hi,ar}/profile.json`; `tools/content/hi/PRON-TOOL.md`, `DECKNAMES.md`, `deviations.json`; `tools/content/ar/DECKNAMES.md`, `deviations.json`; `tools/content/zh/PRON-RULES.md`; `tools/content/ko/decks.js`; `tools/i18n/ar/ui.json`; `src/app.html` (RTL rules, `RTL_LANGS`, `LANGS`); `packs/course-ko-en.js`, `course-zh-en.js`, `course-hi-en.js` (character counts only).

Local checks: Node `Intl` (ICU 78.2) for `ur`, `ur-PK`, `ur-IN` — PluralRules, NumberFormat, DateTimeFormat, DisplayNames, RelativeTimeFormat.

Seen only in search results and **not** used as evidence: a FlashAcademy teacher sheet on Urdu speakers; the EF EPI 2025 Pakistan fact sheet; error-analysis papers on core.ac.uk and other blocked hosts; the Pakistani national curriculum documents.
