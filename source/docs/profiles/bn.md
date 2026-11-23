# Bengali speakers learning English — course profile

Course `bn-en`. Audience: adult and older-teenage Bengali speakers in Bangladesh (and Bangladeshis abroad). All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **standard colloquial Bengali of Bangladesh (চলিত ভাষা, Dhaka standard, `bn-BD`) in Bengali script**; answers and examples are in English. Where an everyday Kolkata word differs, the Dhaka word is used and the Kolkata word goes in a note (§9). App code and HTML language tag: **`bn`** (profile.json `native: "bn"`, pack `course-bn-en`, interface pack `i18n-bn`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: 39 lessons, 20 decks, standing rule `article-plural`), like zh, vi, id and hi, because Bengali has no articles. `parity.js` compares bn-en's English side with ko-en's.

Evidence labels (the file `reports/Grammar learning order research.md` that defines them does not exist in this worktree, §11; the labels are used as the finished profiles use them):
- **[research-backed]**: a study or corpus, named, with its sample.
- **[curriculum convention]**: what textbooks, reference descriptions, style guides, test bodies or apps do.
- **[practitioner opinion]**: a teacher's or author's position, or this profile's own inference (said so where it is mine).

A study read only as an abstract or a repository record is marked as such. Most Bangladeshi studies found are small, single-institution error analyses; treat their percentages as indicative, not as population rates. **Every Bengali string in this file was written by the profile's author, not by a native speaker: all of them need a native check before use (§11).**

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`). Explanations address the learner as **আপনি** with the polite imperative (বেছে নিন, লিখুন); buttons use the same form. Bengali school words for word classes (বিশেষ্য, ক্রিয়া, একবচন / বহুবচন), **tense names kept in English** (*Present Perfect*).
- **Top measured errors** (60 English-department students, 120 paragraphs, 706 errors; Hossain & Ashikullah 2023): subject–verb agreement 69 (9.8%), spelling 66, fragments (missing *be* or subject) 61 (8.6%), prepositions 48, word order 47, tenses 43, articles 42 (5.9%). In a 15-gap article test (74 university students; Arafath 2010) **64.5% of zero-article slots were wrong**, against 27.4% for *a/an* and 20.9% for *the*.
- **Standing rule: `article-plural`, as in ko/zh/hi**, keywords `আর্টিকেল|বহুবচন|গণনাযোগ্য`. The shared items already satisfy it, so it costs no deviations. Agreement (-s), missing *be* and he/she are secondary emphases (named in `why`, not validated).
- **Pronunciation aid: a Bengali-script respelling, required**, not IPA. Secondary textbooks carry no IPA (Khanum et al. 2026, abstract) and Bengali writers already respell English in their own script. The key marks the trap sounds with a dot (nukta): **জ়** = /z/ (plain জ = /dʒ/), **ভ়** = /v/, **থ় দ়** = /θ ð/, **ওয়** = /w/; **ী ূ** = long, **ি ু** = short; **ৌ েই** = the glides of *go*, *name*; **ˈ** = stress. It is a one-to-one table from the zh IPA: a scratch converter turned all 740 distinct zh `pron` rows into strings that pass `pronPattern` (§6).
- **Skill shape:** EF EPI 2025: reading 529, writing 559, speaking 526, **listening 472** (the only skill below the global average of 488). IELTS 2024–25, Bengali first language, Academic: listening 5.85, reading 6.26, writing 5.85, speaking 5.91.
- **Curriculum:** keep all 39 ids in order; 26 get a Bengali-specific explanation emphasis (no English changes). Add 2: `banglish` (end of A1) and `articles-3` (B1, after `passive`; zero article and *the*). Drop none.
- **Interface:** Western digits 0–9 everywhere (the engine fills count slots with ASCII digits and matches them with `\d+`); `Intl` for `bn` prints Bengali digits by default, so the date locale needs `bn-BD-u-nu-latn` (§10).

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision]:
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings.
2. Bangladeshi school English is British-based: Wikipedia's comparison table gives *lift, flat, petrol, biscuit, football, torch, queue, mobile phone* as the Bangladeshi choices ([Bangladeshi English](https://en.wikipedia.org/wiki/Bangladeshi_English)) [curriculum convention]. So the American word is often the new one. Give the British word in the card `note` («ব্রিটিশ ইংরেজিতে: lift»), never as an accepted answer.
3. Rhotic American /r/ suits Bangladeshi speakers, who already pronounce syllable-final r ([Islam 2021](https://distantreader.org/stacks/journals/elt/elt-45061.pdf) reports that the syllable-final /r/ is mostly pronounced: *barber* with both r's) [research-backed, n = 50].

**Form of address: আপনি, never তুমি or তুই** [curriculum convention + practitioner opinion, decision]:
- Bengali has three second persons: তুই (very familiar), তুমি (familiar), আপনি (polite), and the verb ending changes with each ([Bengali grammar, Wikipedia](https://en.wikipedia.org/wiki/Bengali_grammar)). A choice cannot be avoided.
- [curriculum convention] The Mozilla Bengali (Bangladesh) style guide: «The user should be addressed as "আপনি"», and machine messages take the same tone; it also asks for a tone that is not bookish and for no সাধু ভাষা ([Mozilla bn-BD](https://mozilla-l10n.github.io/styleguides/bn-BD)).
- [practitioner opinion, mine] The audience is adults and older teenagers. আপনি is what a Bangladeshi app, bank or shop says to an adult it does not know; তুমি to an adult stranger reads as talking down. School materials for children address pupils as তুমি / তোমরা, and some Bangladeshi edtech for school students does the same. **Neither claim could be verified from a fetched page** (10 Minute School and the teachers' portal returned 403, §11), so this is the first item for the native check. The switch is cheap if the lead wants তুমি: only verb endings change (লিখুন → লেখো, বেছে নিন → বেছে নাও).
- আপনি can still be warm: praise with «দারুণ!», «খুব ভালো!», not officialese.
- **Never:** তুমি or তুই to the learner; mixed আপনি / তুমি on one screen; সাধু ভাষা verb forms (করিয়াছেন); Bengali written in Latin letters (*apni kemon achen*); more than one exclamation mark per screen.

**Translations of example sentences:**
- *you* = **তুমি** between friends, family and in texting; **আপনি** in service, office, email, doctor and stranger scenes. That তুমি sits inside a translation, not addressed to the learner.
- *he / she* both translate as **সে** (familiar) or **তিনি** (respectful). Bengali does not show gender, so a translation of *She is a doctor* cannot show why the answer is *she*. Where an item hinges on he/she, the prompt must name the person («আমার বোন …», «রাফি …») or add «(ছেলে)» / «(মেয়ে)». This is a hard rule for practice prompts (PHASE2-BRIEF: a prompt must lead to an accepted answer).
- Bengali verbs do not show gender, so no slash forms are needed for *I*.

**Voice:** friendly teacher, plain everyday Bengali, short sentences. Use the English loans that Bangladeshis use daily (কার্ড, লেভেল, অ্যাপ, ইমেইল, অফিস, মিটিং, সেটিংস) where the Sanskritic word would sound bookish. Mark errors with ✗ and corrections with ✓: `I am student. ✗ → I am a student. ✓`.

Three sample sentences in the voice [native check]:
- «বাংলায় a বা the-এর মতো আলাদা কোনো আর্টিকেল নেই, তাই ইংরেজিতে এগুলো সহজেই বাদ পড়ে যায়। তিনটি নিয়ম মনে রাখলেই চলবে।»
- «বাংলায় "সে" দিয়ে ছেলে-মেয়ে দুজনকেই বোঝায়। ইংরেজিতে বেছে নিতে হয়: he না she।»
- «"দুইটা বই" বললে বাংলায় "বই" শব্দটা বদলায় না, কিন্তু ইংরেজিতে বহুবচন লাগে: two books।»

**Typography and mixing English into Bengali text (one rule, applied everywhere):**
- **Script.** Bengali in Bengali script only. English words stay in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into Bengali script outside the `pron` field.
- **Quotes.** Bengali phrases in straight double quotes "…". In lesson HTML, English is bold `<b>` and not quoted. In plain-text fields (`q`, `p`, `why`, `hint`, card `note`), English stands bare: `"আমি চা খাই না" ইংরেজিতে?`.
- **Full stop: the দাঁড়ি «।»** (U+0964) at the end of every Bengali sentence, including one that ends in an English word (Mozilla bn-BD names it as the Bengali full stop). Question mark, comma, colon and exclamation mark as in English.
- **Case endings on English words:** attach with a hyphen, as Bengali print does: «the-এর», «a-এর আগে», «-s-ও». Do not put plural endings on English terms («verb-গুলো» is acceptable in speech but write «এই verb তিনটি»).
- **Digits:** Western digits 0–9 everywhere, not ০–৯ (§10 gives the reasons). Lakh-style grouping (12,34,567) appears only in Bengali UI numbers produced by `Intl`, never in English strings.
- **Encoding of য় ড় ঢ়.** Bengali keyboards type the single code points U+09DF, U+09DC, U+09DD. Unicode NFC **decomposes** them to base + nukta U+09BC (checked locally: `'য়'.normalize('NFC')` gives U+09AF U+09BC; r12a says the same: decomposed sequences «are *not* recomposed by Unicode Normalisation Form C»). Both spellings look identical. **Pick one for the whole pack** so that `lint.js` and duplicate checks compare like with like: this profile recommends running NFC over every bn source file before validation (as hi does), which gives the decomposed form. Every regex in bn.profile.json accepts both forms.
- **Dash.** Spaced em dash ( — ) in «A — B» cue lines; hyphen inside compounds; en dash in ranges (2–4).
- **Alternatives:** ` / ` with spaces, as in ko-en.
- **Spelling:** Bangladesh spellings of loans (আর্টিকেল, ইমেইল, রেস্টুরেন্ট, অফিস), not the Kolkata ones (আর্টিকল, ইমেল, রেস্তোরাঁ) [practitioner opinion; native check].

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the UI.

**Convention found:** no Bangladeshi grammar book or explainer page could be opened (two returned 403 and two 404, §11). Search-result snippets of Bangladeshi explainers showed English terms kept in Latin letters inside Bengali sentences («… Noun-এর আগে বসে … তাকে Article বলে», «Singular Countable Noun-এর আগে») with Bengali school words as glosses (একবচন, বহুবচন). That is a snippet, not a page that was read, so the rule below is [practitioner opinion] and the whole table needs a native check.

**Rule:**
- Name **word classes and number in Bengali** (the words every learner knows from Bengali grammar class), gloss the English term once per lesson, and **keep tense names and a few technical labels in English**.
- **One term per concept**, exactly as below. The standing-rule regex depends on আর্টিকেল, বহুবচন and গণনাযোগ্য (§7).
- First mention in a lesson body: «বিশেষ্য (noun)»; afterwards «বিশেষ্য».

| English term | Bengali term (use this) | Note |
|---|---|---|
| article | **আর্টিকেল** | Standing-rule keyword. Gloss once: «আর্টিকেল (a, an, the)». Not আর্টিকল (Kolkata spelling) |
| indefinite / definite article | আর্টিকেল a/an / আর্টিকেল the | Avoid «অনির্দিষ্ট / নির্দিষ্ট আর্টিকেল» in practice lines |
| zero article | আর্টিকেল ছাড়া | «এখানে কোনো আর্টিকেল বসে না» |
| noun | বিশেষ্য | |
| countable / uncountable noun | **গণনাযোগ্য** / গণনাযোগ্য নয় | Standing-rule keyword. Everyday paraphrase in lesson bodies: «গোনা যায় / গোনা যায় না» |
| singular | একবচন | |
| plural / plural -s | **বহুবচন** / বহুবচনের -s | Standing-rule keyword |
| classifier (-টা, -টি, -জন) | -টা / -টি | Contrast only. No school term is assumed; write the endings themselves |
| pronoun | সর্বনাম | |
| possessive (my, his; 's) | মালিকানা বোঝানো শব্দ (my, his) / 's | |
| subject / object | কর্তা (subject) / কর্ম (object) | Gloss the English every time in A1; learners meet *subject* in English class |
| verb | ক্রিয়া | |
| to be (am / is / are) | **be ক্রিয়া** (am, is, are) | |
| auxiliary (do / does / did) | সাহায্যকারী ক্রিয়া | |
| modal | *modal* (can, must …) | English label |
| base form / past / past participle | মূল রূপ / past রূপ / **V3** (past participle) | [native check: whether V1/V2/V3 is school usage in Bangladesh] |
| third-person singular -s | he / she / it-এর সঙ্গে -s | |
| regular / irregular verb | নিয়মিত / অনিয়মিত ক্রিয়া | |
| -ing form | -ing রূপ | |
| gerund / infinitive | *gerund* / *to* + ক্রিয়া | |
| tense | *tense* (কাল) | |
| present simple, present continuous, past simple, past continuous, present perfect (continuous), past perfect | ***Present Simple***, *Present Continuous*, *Past Simple*, *Past Continuous*, *Present Perfect* (*Continuous*), *Past Perfect* | All tense names stay in English |
| future (will / going to) | *will* / *be going to* | |
| time expression | সময় বোঝানো শব্দ | yesterday, now, already |
| passive / active | *passive* (কর্মবাচ্য) / *active* (কর্তৃবাচ্য) | |
| conditional | শর্তের বাক্য (*conditional*) | |
| relative clause | who / which / that দিয়ে জোড়া বাক্যাংশ | Link to যে … সে |
| reported / direct speech | পরোক্ষ উক্তি / প্রত্যক্ষ উক্তি | School terms [native check] |
| preposition | *preposition* (বিশেষ্যের আগে বসে) | Bengali has postpositions (অনুসর্গ); say «বাংলায় শব্দটা পরে বসে, ইংরেজিতে আগে» |
| conjunction | সংযোজক শব্দ | |
| adjective / adverb | বিশেষণ / ক্রিয়াবিশেষণ | |
| comparative / superlative | তুলনার রূপ (-er / more) / সবচেয়ে-র রূপ (-est / most) | |
| question word | প্রশ্নবোধক শব্দ | |
| positive / negative sentence / question | হ্যাঁ-বাচক বাক্য / না-বাচক বাক্য / প্রশ্ন | |
| word order | শব্দের ক্রম | |
| contraction | সংক্ষিপ্ত রূপ (I'm, don't) | |
| phrasal verb | ফ্রেজাল ভার্ব (*phrasal verb*) | |
| idiom | বাগধারা | |
| false friend / trap | ফাঁদ | Lesson `banglish` |
| pronunciation | উচ্চারণ | |
| stress | জোর (stress) | «ˈ চিহ্নের পরের অংশে জোর দিন» |
| syllable | সিলেবল | [native check: অক্ষর is the school term but also means "letter"] |
| vowel / consonant | স্বরধ্বনি / ব্যঞ্জনধ্বনি | |
| linking | শব্দ জুড়ে বলা | |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking:** evidence strength × frequency × how often the point recurs across lessons. The ranking is this profile's inference. Format: error ✗ → correction ✓. Every "Why" line (the contrast with Bengali) rests on the reference descriptions named in it, not on learner data; where no description is named it is [practitioner opinion].

An example with no named source is illustrative [practitioner opinion]. "Theirs" means quoted from the named study.

**Main fetched evidence:**
- **H&A 2023** = [Hossain & Ashikullah 2023](https://isu.ac.bd/assets/backend/pdf/journal/20240625060039.1%20(7).pdf): 60 second-semester English-department students with a Bengali-medium background at a private university, 120 paragraphs, 706 errors in 17 categories. Three of its printed percentages do not match its own counts (tenses 43 is printed as 6.66%, word order 47 as 7.51%, punctuation 53 as 6.10%); the counts are used below.
- **Arafath 2010** = [Arafath 2010](https://www.aust.edu/storage/files/lSfhlUyxV08qBgOpE3JbutPNS6RsBlxWlSGY7YAY.pdf): 74 students at five universities, a 15-gap article test.
- **S&S 2023** = [Seoane & Suárez-Gómez 2023](https://papiro.unizar.es/ojs/index.php/misc/article/download/8760/8355/35379): the Bangladesh section of the GloWbE web corpus compared with the India, Pakistan and Sri Lanka sections, frequencies per million words (pmw). This is edited and unedited web English by Bangladeshis, not learner data.
- **Saleheen 2015** = [Saleheen 2015](https://deh.ulab.edu.bd/sites/default/files/Saleheen.pdf): 120-word compositions by first-year Bengali-medium students of two departments at Jahangirnagar University; examples only (the number of scripts was not found in the extracted text).
- **Islam 2021** = [Islam 2021](https://distantreader.org/stacks/journals/elt/elt-45061.pdf): 50 first-semester BA English students at two private universities read a word list aloud; findings are described, not counted.
- Reference descriptions: Wikipedia's [Bengali grammar](https://en.wikipedia.org/wiki/Bengali_grammar) and [Bengali phonology](https://en.wikipedia.org/wiki/Bengali_phonology), also the basis of `docs/profiles/en-bn.md` (the reverse course), whose sourced contrasts are reused here.

1. **Articles: left out, and put in where English has none.**
   - *Examples:* `I am student. ✗ → I am a student. ✓` / `I am a student at the Northern University Bangladesh. ✗ → at Northern University Bangladesh ✓` (H&A's example 10, filed there under prepositions) / `an hat ✗ → a hat ✓` / `He is honest man. ✗ → an honest man ✓`
   - *Why:* Bengali has no article words. Definiteness is an ending on the noun, the classifier -টা (formal -টি), plural -গুলো; "one" + classifier (একটা) does part of the work of *a* [curriculum convention: Wikipedia calls -টা «the definite article»; en-bn.md §4.8]. Neither is obligatory where English *a* / *the* is, and -টা also goes on nouns where English allows no article (আমার বইটা = *my book*, never `my the book`).
   - *Evidence:*
     - [research-backed] Arafath 2010: mistakes on **64.5%** of zero-article slots, 27.4% of *a/an* slots and 20.9% of *the* slots (range across the five universities for zero article: 41.7%–80%). Learners left *a* out before common nouns (*girl, couple, housewife*) and wrote *an* before *hat*; the author links the *a/an* errors to spelling-based choice (*honest, hour*).
     - [research-backed] H&A 2023: articles 42 of 706 errors (5.9%), rank 9 of 17.
     - [research-backed, repository record only] [Uddin 2024](https://dspace.iiuc.ac.bd/items/61d6dd6e-eb32-439b-9bf5-46c959ae9f6c/full): 52 Class Ten students in Chattogram, essays plus a gap test, seven article error types (*a* for *an* and the reverse, *the* omitted, *a* with plurals, *a* with adjectives alone, *the* and *a* with non-count nouns); most were put down to simplification and overgeneralisation, a few to Bengali. No counts on the record page.
     - No accuracy-by-level data for Bengali speakers was found. That article-less first languages keep article accuracy low to advanced level is known for Japanese and Korean (cited via ja.md and zh.md, not re-opened); for Bengali it is [practitioner opinion].
   - *Content consequence:* teach **when not to use an article** as hard as when to use one (`the`, `articles-2`, `articles-3`).
2. **Subject–verb agreement and third-person -s.**
   - *Examples:* `He write poems in his free time. ✗ → He writes ✓` (H&A, theirs) / `they tries to copy ✗ → they try ✓` / `He or she never read the main text. ✗ → reads ✓` / `this two is the main cause ✗ → these two are ✓` (Saleheen, theirs)
   - *Why:* Bengali verbs «are inflected for person and honour, but not for number» (Wikipedia): সে করে and তারা করে have the same verb. So the learner knows agreement, but not agreement with *one* versus *many*, and English puts its only ending on the form (he / she / it) where Bengali has nothing special. H&A's own explanation, that Bengali verbs never change with the subject, is wrong for person.
   - *Evidence:* [research-backed] the most frequent category in H&A 2023: 69 of 706 (9.8%). Saleheen 2015 classes it as a "common type" error made by most learners.
3. **Missing *be* (and missing subject).**
   - *Examples:* `English very important to us. ✗ → English is very important ✓` (H&A, theirs) / `I studying regularly. ✗ → I study / I am studying ✓` (H&A, theirs) / `a boy or girl deprived ✗ → is deprived ✓` (Saleheen) / `Shouted as loud as they could. ✗ → They shouted ✓` (H&A)
   - *Why:* Bengali links subject and adjective or noun with no verb: আমি সুখী = *I am happy* (Wikipedia: «a zero copula language in some aspects»; en-bn.md §4.6). The past has a verb (ছিলাম), so *was / were* is easier than *am / is / are*. Bengali also drops a subject that is clear from the verb ending.
   - *Evidence:* [research-backed] H&A 2023: fragments 61 of 706 (8.6%), rank 3, split into "no verb" and "no subject" and attributed by the authors to literal translation.
4. **Plural -s and countability.**
   - *Examples:* `I have two brother. ✗ → two brothers ✓` / `poor womens ✗ → poor women ✓` (Saleheen, theirs) / `all types of evidences ✗ → evidence ✓` (S&S, corpus) / `informations, advices, equipments, researches ✗`
   - *Why:* after a number Bengali adds a classifier to the number and leaves the noun bare (চার-পাঁচ জন শিক্ষক, *four or five teachers*, Wikipedia's example has no plural ending). The plural endings -রা and -গুলো are used mainly for definite or animate groups. Nouns are not marked count or mass, and অনেক covers *many* and *much* [practitioner opinion for the last point].
   - *Evidence:*
     - [research-backed] S&S 2023: plural mass nouns in the Bangladesh web corpus, pmw: *informations* 2.36, *advices* 2.63, *equipments* 6.18, *evidences* 6.26, *researches* 4.36, *moneys* 2.61. For 9 of 14 nouns Bangladesh is the highest of the four South Asian sections.
     - [research-backed] H&A 2023: noun errors 31 of 706 (4.4%). Missing -s after numerals is [practitioner opinion].
5. **Word order.**
   - *Examples:* `I my breakfast had at 8:00 am. ✗ → I had my breakfast at 8:00 am. ✓` (H&A, theirs) / `Where you live? ✗ → Where do you live? ✓` / `You are going where? ✗ → Where are you going? ✓`
   - *Why:* Bengali is verb-final (H&A: «S+O+V»), question words stay in place and a yes/no question is the statement plus কি or intonation, with no auxiliary.
   - *Evidence:* [research-backed] H&A 2023: word order 47 of 706 (6.7% by count), top five. The question examples are [practitioner opinion].
6. **Tense and aspect.**
   - *Examples:* `I have seen him yesterday. ✗ → I saw him yesterday. ✓` / `I am living in Dhaka for five years. ✗ → I have lived in Dhaka for five years. ✓` / `I am knowing him. ✗ → I know him. ✓` / `What the Bengalis had really been wanting … ` (S&S, corpus)
   - *Why:* Bengali has a full tense–aspect grid of its own (simple, progressive and perfect in present and past, a habitual past and a future; Wikipedia), so the forms exist but their borders differ: the Bengali perfect করেছি is normal with a finished time (গতকাল করেছি), and a state that began in the past is said in the present (পাঁচ বছর ধরে আছি). Both mappings are [practitioner opinion]; no fetched study tests them.
   - *Evidence:*
     - [research-backed] H&A 2023: tenses 43 of 706 (6.1% by count), verbs 28.
     - [research-backed] S&S 2023: progressive with state verbs in the Bangladesh web corpus, pmw: *be wanting* 2.48, *be knowing* 1.34, *be loving* 0.66, *be liking* 0.38; similar to or higher than India, Pakistan and Sri Lanka. Low absolute rates.
     - A Chittagong University study of present and past tense–aspect errors by Bengali speakers exists but could not be opened (403); it is not used.
7. **Prepositions.**
   - *Examples:* `discuss about the plan ✗ → discuss the plan ✓` / `married with ✗ → married to ✓` / `in Monday ✗ → on Monday ✓` / `go to home ✗ → go home ✓`
   - *Why:* Bengali has postpositions, placed after a noun in the genitive (বইয়ের নিচে *under the book*, আমার সঙ্গে *with me*; Wikipedia), and one locative ending -এ / -তে / -য় where English chooses among *in, on, at*.
   - *Evidence:* [research-backed] H&A 2023: prepositions 48 of 706 (6.8%); Saleheen 2015 marks omitted and misused prepositions in most scripts. All four examples are [practitioner opinion].
8. **He / she / it and his / her.**
   - *Examples:* `Here the bride and his family takes dowry. ✗ → her family ✓` (Saleheen, theirs) / `My sister is a doctor. He works in Dhaka. ✗ → She ✓`
   - *Why:* «Bengali pronouns do not differentiate for gender» (Wikipedia): সে is *he* and *she*, তার is *his* and *her*. They do differ by respect (সে / তিনি), which English lacks.
   - *Evidence:* [research-backed] one attested example (Saleheen); H&A 2023 count 27 pronoun errors of 706 (3.8%) without saying which. No study of he/she confusion in speech was found; its frequency is [practitioner opinion].
9. **Comparatives: *more better*.**
   - *Examples:* `more better ✗ → better ✓` / `more easier ✗ → easier ✓` / `more high ✗ → higher ✓`
   - *Why:* Bengali compares with a separate word (আরও, and genitive + চেয়ে for *than*; Wikipedia), never with an ending.
   - *Evidence:* [research-backed] S&S 2023: *more better* 1.44 pmw and *more easier* 0.96 pmw in the Bangladesh web corpus, the highest of the four South Asian sections; *more high* 0.18.
10. **Pronunciation.** Islam 2021 unless another source is named; regional speech (Sylhet, Chattogram, Noakhali) changes the picture.
    - **z → j:** `zoo` → *joo*, `zero` → *jero*. Bengali জ and য are /dʒ/ and «most foreign borrowings with /z/ sound are replaced with /dʒ/» (Wikipedia phonology). In eastern dialects the reverse also happens (জ said as z), so learners mix the two in both directions (Islam: «interchangeability» of /ʒ – dʒ/, /s – ʃ/).
    - **f → ph, v → bh / b:** `fine` → *phine*, `van` → *bhan* (lips closed, with a puff). Wikipedia's Bangladeshi English article: /v/ may be /b/ or /β/. Also reported by Rahman 1995 and Banu, as cited in [Jakir 2020](https://jnu.ac.bd/journal/assets/pdf/10_1_250.pdf).
    - **w and y treated as vowels:** `water` → *ɔ-tar*, `yes` → *i-es*.
    - **th:** /θ/ → the Bengali dental থ (*think* with a stop), /ð/ → দ (Wikipedia: «Bengali approximates English /ð/ as দ»).
    - **s / sh:** /s/ said as /ʃ/ (Hoque 2010 as cited in Jakir 2020); বাস *bus* and বাঁশ can sound alike in some dialects (en-bn.md §4.10).
    - **Vowel length and quality:** *feel* = *fill*, *fool* = *full*; /ɑː/, /ʌ/ and /ɜː/ all become Bengali আ (*bard, bud, bird* alike; also Hai & Ball as cited in Jakir 2020); schwa gets a full vowel. Bengali has seven oral vowels and «vowel length is not contrastive» (Wikipedia).
    - **Diphthongs flattened:** `go` → *go* with a pure o, `make` → *mek*.
    - **Consonant clusters:** a vowel is added before s-clusters (স্কুল → ইস্কুল; «native Bengali words do not allow initial consonant clusters», Wikipedia); difficulty with clusters also in Hoque 2010 (via Jakir).
    - **Stress and rhythm:** Bengali stress is «predominantly initial» and does not change meaning; Bangladeshi English is described as syllable-timed (Wikipedia). So *hoTEL*, *baNAna*, *phoTOgraphy* get first-syllable stress, and weak forms are not reduced [the examples are practitioner opinion].
    - **No puff on p, t, k:** 60 higher-secondary students from 15 colleges aspirated only 127 of 900 tokens (14.1%) (Jakir 2020) [research-backed]. Low priority for intelligibility.
    - **Final r:** pronounced, which matches American English.
    - **Spelling pronunciation and a / an:** choosing *a / an* by letter, not sound (Arafath 2010).
11. **Bangladeshi and South Asian English usages, and word-for-word Bengali.**
    - *Examples:* `ten lakh ✗ (abroad) → one million ✓` / `I gave the exam. ✗ → I took the exam. ✓` (পরীক্ষা দেওয়া) / `I ate medicine. ✗ → I took medicine. ✓` (ওষুধ খাওয়া) / `today morning ✗ → this morning ✓` / `my cousin brother ✗ → my cousin ✓`
    - *Evidence:* [curriculum convention] lakh / crore and the British-based word stock are documented (Wikipedia, Bangladeshi English). H&A 2023 count "literal translation from Bengali" as a category of its own (19 of 706). [research-backed, abstract page] [Hasan 2024](https://ideas.repec.org/a/bhx/ojtejl/v3y2024i4p53-63id2344.html) reports a rich Bangladeshi English lexicon but the page lists no words. **Every individual calque in this profile (§9 table) is [practitioner opinion] and needs a native check.**
12. **Capitals, commas and spelling.**
    - *Examples:* `We need to learn english. ✗ → English ✓` / `When I was at school I had many friends. → …at school, I had…` (H&A, theirs)
    - *Why:* Bengali script has no capital letters.
    - *Evidence:* [research-backed] H&A 2023: capitalisation 49, punctuation 53, spelling 66 of 706. Matters for `type` items: accept answers case-insensitively where the engine already does, and teach capital *I* and capitals for languages and days.
13. **Passive and possessive 's** (lower priority).
    - *Examples:* `Dowry means something gives the bridegrooms family. ✗ → something that is given to the bridegroom's family ✓` (Saleheen, theirs)
    - *Evidence:* Saleheen 2015 lists faulty passives and missing 's as common. No counts.

## 5. Learner starting point

- **School exposure** [curriculum convention unless marked].
  - English is a compulsory subject through school and college: «all the students of Bangladesh learn this language compulsorily for more than twelve years» (Jakir 2020). University entrants have had about 1,600 contact hours (Quader 1998 as cited in Arafath 2010). At SSC and HSC it is examined in two papers (Saleheen 2015).
  - Teaching is grammar-and-translation: rules first, then exercises, with «very little emphasis» on listening and speaking (Arafath 2010) [practitioner opinion].
  - **Pronunciation is not taught or tested.** Islam 2021: teaching pronunciation «has never been considered»; none of his 50 English majors had had a pronunciation or phonetics course. [research-backed, abstract page] A questionnaire study of secondary learners and teachers in Mymensingh found no pronunciation lessons or aids in the textbooks and recommends adding IPA to them ([Khanum, Ahsan & Hasan 2026](https://archive.aessweb.com/index.php/5019/article/view/6318)).
  - English after independence is a foreign rather than a second language for most people, and access differs sharply between city and village and between Bengali-medium and English-medium schools (H&A 2023's literature review; S&S 2023).
- **Profile figures.**
  - [research-backed, test-taker data] **EF EPI 2025, Bangladesh:** rank 62, score 506 (global average 488). Skills: **reading 529, writing 559, speaking 526, listening 472** ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-bangladesh-english.pdf)). Regions: Dhaka 527, Rangpur 504, Rajshahi 498, Khulna 486, Sylhet 426. Cities: Dhaka 532, Cox's Bazar 479, Sylhet 438 (one digit of the Chattogram figures was lost in text extraction). Self-selected online test-takers; no sample size on the sheet. A second sheet in a 2026 folder shows different numbers (rank 54, score 503) and was not opened.
  - [research-backed, test-taker data] **IELTS 2024–2025 mean bands, first language Bengali** ([IELTS test statistics](https://ielts.org/researchers/our-research/test-statistics), [data file](https://ielts.org/cdn/ielts-downloadable-assets/ielts-research/ielts-research-data/ielts-test-taker-performance-data-2024-2025.xlsx)): Academic listening 5.85, reading 6.26, writing 5.85, speaking 5.91, overall 6.03; General Training 5.88 / 6.49 / 6.08 / 6.32 / 6.26. For comparison, Korean Academic: 6.52 / 6.53 / 5.95 / 5.87 / 6.28; Hindi Academic: 6.62 / 7.14 / 6.36 / 6.66 / 6.76.
  - **Shape:** in both data sets **listening is the weakest skill** and reading the strongest receptive one. Unlike Korean test-takers, Bengali speakers do not score lower in speaking than in listening. Both sets are people who chose to take a test, not the population.
- **Exam culture** [practitioner opinion; no test-body page for Bangladesh was fetched]: IELTS is the gate to study and work abroad; school and university-admission English is tested by gap-fill, transformation, 4-option multiple choice and "right form of verbs". These formats map directly onto the practice set.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, expect false beginners.** Twelve years of school English leave adults who know rules and read well but have never been taught the sounds.
  2. **Lean on audio and the aid.** Listening is the documented gap and pronunciation the untaught skill.
  3. **Name grammar the school way** but explain from Bengali outward (classifier → article, যে … সে → who).
  4. **Recycle -s on verbs and nouns, *be*, and "no article here"** in every level's mixed items; these top the measured lists.
  5. **Typed answers:** expect capital-letter and spelling slips (§4.12); the `why` should correct them kindly.

## 6. Pronunciation aid policy

**Evidence and practice**
- **What learners already know.**
  - [research-backed, abstract page] Secondary textbooks have no pronunciation lessons or aids, and the authors ask for IPA to be *added* (Khanum, Ahsan & Hasan 2026). [research-backed, n = 50] First-year English majors had never had a phonetics course (Islam 2021). So **IPA is not something a Bangladeshi adult can be assumed to read.**
  - [curriculum convention] Bengali writers respell English in Bengali script every day, with settled habits: য-ফলা + আ for the vowel of *bank* (ব্যাঙ্ক), অ্যা for a word-initial /æ/, ওয় for w, জ for z, ফ and ভ for f and v ([r12a, Bengali orthography notes](https://r12a.github.io/scripts/beng/bn.html)). That is the same situation as Hindi and Indonesian learners, for whom hi.md and id.md chose a native-letter respelling.
- **What plain Bengali respelling gets wrong** (the usual loan spellings: জু, ভেরি, থিংক, দিস, গো, শিপ for both *ship* and *sheep*):
  - জ for both /z/ and /dʒ/: the z → j error itself (§4.10);
  - ভ for /v/ and থ / দ for /θ ð/: the stop substitutions themselves;
  - no length (শিপ), pure vowels for the glides (গো, মেক), no stress, and one আ for four English vowels.
  An aid built on those spellings would write the errors into the course.
- **What the Bengali script cannot hide** (en-bn.md §6.1, r12a): a consonant with no vowel sign may carry the inherent vowel অ or nothing, and the reader cannot see which. An aid must therefore never leave that open (rule 4 below).
- **No study compares respelling, IPA and no aid** for Bengali learners. The recommendation is inference [practitioner opinion].

**Recommendation: a Bengali-script respelling in every `pron` field (profile.json `"pron": "required"`), with the nukta marking the English sounds Bengali lacks, ˈ for stress and ː after আ for the open long vowel.** Shown by default and hidden with the toggle «উচ্চারণ দেখান».
- **IPA rejected:** learners cannot read it (above); the course has no IPA-teaching lesson; the toggle-off rate would likely be high.
- **`none` / `optional` rejected:** as in id.md and hi.md §6. Every ko-based course carries an aid, an empty field needs untested engine rendering (PIPELINE §3), and the short words where the aid matters most (*think, very, zoo*) would be the ones left empty.
- **The cost of not copying zh, and how it is cut.** zh's IPA rows would be copied byte for byte under an IPA policy. With a respelling they cannot be, **but the key below is a one-to-one table from zh's IPA symbols**, so every bn row is derived mechanically from the zh row for the same English string. A scratch converter written for this profile (not part of the deliverables) applied the rules below to **all 740 distinct English | IPA rows found in `tools/content/zh/` (decks, extra, lessons, more/): 740 of 740 converted without an unknown symbol and passed `pronPattern`**, both as typed and after NFC.
  - Recommended to the lead (not written by this profile): an `ipa2bn` tool in `tools/content/bn/` built from the rules below, as hi did with `pron_hi.js`. Writers then review its output and hand-write only the localised cards (§9), bn-only cards and the two bn-only lessons with the same table.
  - `lint.js` blocks the same English text with two different aids inside one pack, so derived and hand-written rows must agree.

**The key.**

*Vowels.* The independent letter is used at the start of a word or after another vowel; the sign after a consonant.

| Sound (zh IPA) | Independent / sign | Examples (bn `pron`) | Note |
|---|---|---|---|
| FLEECE iː | ঈ / ী | see ˈসী, leave ˈলীভ় | long. Bengali says ই and ঈ alike; the aid uses the spelling difference as short / long, as the letter names (হ্রস্ব ই, দীর্ঘ ঈ) already suggest |
| KIT ɪ; final unstressed -y i | ই / ি | live ˈলিভ়, very ˈভ়েরি | short; *ship / sheep* = ˈশিপ / ˈশীপ |
| GOOSE uː | ঊ / ূ | food ˈফূড, two ˈটূ | long |
| FOOT ʊ; weak u | উ / ু | book ˈবুক, good ˈগুড | short; *full / fool* = ˈফুল / ˈফূল |
| DRESS e | এ / ে | bed ˈবেড, yes ˈইয়েস | |
| FACE eɪ | এই / েই | name ˈনেইম, today টাˈডেই | the glide is written, against the *mek* habit; Bangladeshi loan spelling already has ইমেইল, গেইম |
| TRAP æ | অ্যা / ্যা | bad ˈব্যাড, apple ˈঅ্যাপাল | as in ব্যাংক, অ্যাপ. After র the sequence needs ZWJ (rule 9) |
| STRUT ʌ, schwa ə, NURSE ɜː | আ / া | cup ˈকাপ, about আˈবাউট, work ˈওয়ার্ক | **collapse**, see below; this is how Bengali already spells বাস, নাম্বার, টিচার |
| LOT / PALM ɑː | আː / াː | hot ˈহাːট, copy ˈকাːপি, car ˈকাːর | American value. **ː = টেনে, মুখ বেশি খুলে.** *heart / hurt* = ˈহাːর্ট / ˈহার্ট |
| THOUGHT ɔː | অ / **no sign** (the inherent vowel) | talk ˈটক, dog ˈডগ, coffee ˈকফি, all ˈঅল | the one place the bare consonant is read with its vowel; these are the normal loan spellings (কফি, কল, মর্নিং) |
| GOAT oʊ | ঔ / ৌ | go ˈগৌ, hotel হৌˈটেল, OK ঔˈকেই | Bengali ঔ is the glide o→u (বৌ, নৌকা); never ো, which is a pure o |
| PRICE aɪ | আই / াই | I আই, time ˈটাইম | |
| MOUTH aʊ | আউ / াউ | house ˈহাউস, now ˈনাউ | |
| CHOICE ɔɪ | অই / (no sign) + ই | boy ˈবই, point ˈপইন্ট | বই "book" is said the same way |
| r-vowels | vowel + র | here ˈহির, there দ়ের, sure ˈশুর, four ˈফর, car ˈকাːর, bird ˈবার্ড, water ˈওয়টার | র is always written and always said (American) |

*Consonants.* A dot below (নুকতা, U+09BC) always means "a sound Bengali does not have: do not say the plain letter".

| Sound | Write | Examples | Note for the `pron` lesson |
|---|---|---|---|
| p b k g | প ব ক গ | pen ˈপেন, bag ˈব্যাগ | p, t, k at the start of a stressed syllable have a light puff (Jakir 2020): said in the lesson, not written |
| t d | ট ড | time ˈটাইম, day ˈডেই | the usual Bengali spelling of English t, d; never ত, দ |
| f | ফ | fan ˈফ্যান, coffee ˈকফি | plain letter (Bangladeshi ফ is already close to f; Wikipedia: /pʰ/ is «commonly» [ɸ~f]). Lesson: «উপরের দাঁত নিচের ঠোঁটে, ঠোঁট বন্ধ নয়» |
| v | **ভ়** | very ˈভ়েরি, have ˈহ্যাভ়, vote ˈভ়ৌট | **extension:** dotted ভ = teeth on lip with a buzz; not ভ (bh), not ব |
| w | **ওয়** + vowel sign | west ˈওয়েস্ট, we ওয়ি, work ˈওয়ার্ক, walk ˈওয়ক | «ঠোঁট গোল করে, দাঁত ছোঁয় না». After a consonant: twenty ˈট্ওয়েন্টি, quick ˈক্ওয়িক |
| θ | **থ়** | think ˈথ়িংক, three ˈথ়্রী | **extension:** «জিভের ডগা দুই পাটি দাঁতের মাঝে, বাতাস বেরোতে থাকে; থ নয়» |
| ð | **দ়** | this ˈদ়িস, the দ়া | **extension:** the voiced partner of থ় |
| s | স | bus ˈবাস, see ˈসী | always s as in বাস, সিট; never the sh of সব |
| z | **জ়** | is ইজ়, zoo ˈজ়ূ, dogs ˈডগ্জ় | **extension**, already used in Kolkata print for z. *zoo / Jew* = ˈজ়ূ / ˈজূ |
| ʃ ʒ | শ **ঝ়** | she শি, measure ˈমেঝ়ার | ঝ় is rare |
| tʃ dʒ | চ জ | check ˈচেক, job ˈজাːব | full stops-with-release, not the s / z of some eastern speech |
| h m n l r | হ ম ন ল র | house ˈহাউস, rice ˈরাইস | r is a glide, not a tap: said in the lesson |
| ŋ | ং before a consonant or at the end; ঙ before a vowel | think ˈথ়িংক, long ˈলং, English ˈইংগ্লিশ, singing ˈসিঙিং | |
| j | ইয় + vowel sign; with u-vowels ইউ / ইঊ; after a consonant ি + … | yes ˈইয়েস, you ইউ, year ˈইয়ির, cute ˈকিঊট, menu ˈমেনিঊ, million ˈমিলিয়ান, New York নূ ˈইয়র্ক | the Bengali loan habit (ইয়েস, ইউ, নিউ). Lesson: say it as one quick glide, not a separate ই |

*Derivation rules (apply in this order to the zh IPA of the same English string).*
1. **Words and sentences.** Drop the slashes. Words are separated by one space. zh's ` ‖ ` between two sentences becomes the দাঁড়ি: `। ` (danda, then a space). zh's two slashed groups for alternatives become ` / `. No other punctuation, no digits of either script, no Latin letters, no IPA symbols except ˈ and ː.
2. **Stress: copy zh's ˈ exactly**, monosyllables included, and drop every ˌ (`/ˌfɪfˈtiːn/` → ফিফ্ˈটীন). This differs from hi.md, which drops ˈ on one-syllable words. Reason: in Bengali script the weak forms and the strong forms share the sign া (*can* কান, *but* বাট), so the mark is the only thing that tells the reader which words to say lightly. The `pron` lesson says: «ˈ চিহ্নের পরের অংশে জোর দিন; যে শব্দে ˈ নেই, সেটা হালকা ও ছোট করে বলুন।» Every zh row has at least one ˈ, so `pronPattern` requires one.
3. **Vowels and consonants** by the tables. A vowel after a consonant is written as its sign; at the start of a word or after another vowel as the independent letter (idea → আইˈডীআ).
4. **No guessing about the inherent vowel.** Inside the aid:
   - a consonant followed by another consonant in the same word takes the hasanta (্), which most fonts draw as a conjunct: school ˈস্কূল, street ˈস্ট্রীট, asked ˈঅ্যাস্ক্ট, Excuse ইক্ˈস্কিঊজ় (the hasanta stays visible where ˈ splits the cluster);
   - **a consonant with no sign and no hasanta that is not the last letter is read with অ, and that always means THOUGHT /ɔː/**: ˈটক, ˈকফি, ˈমর্নিং;
   - **the last consonant of a word has no vowel and no hasanta** (ˈডগ, ˈবাস, ˈডেস্ক), as Bengali readers already read English loans. The only exception is a word with no other vowel (saw ˈস, law ˈল, draw ˈড্র), where the bare consonant must be read with অ.
5. **Schwa and syllabic l / n.** ə is া everywhere (about আˈবাউট, banana বাˈন্যানা, the দ়া). zh's syllabic consonants (PRON-RULES A4: an l or n that follows a consonant other than r and is not followed by a vowel) are written া + ল / ন: people ˈপীপাল, seven ˈসেভ়ান, station ˈস্টেইশান, student ˈস্টূডান্ট, isn't ˈইজ়ান্ট, canceled ˈক্যান্সাল্ড.
6. **Weak and strong forms** follow zh (PRON-RULES B), mapped by the table: a আ, an আন, the দ়া (দ়ি before a vowel sound), to টা (টু before a vowel, strong টূ), for ফার / ফর, from ফ্রাম, at আট / অ্যাট, of আভ়, and আন্ড, can কান, could কাড, do ডা / ডূ, does ডাজ়, have হাভ় / ˈহ্যাভ়, you ইউ / ˈইঊ, your ইউর, he হি, she শি, we ওয়ি, me মি / ˈমী, that দ়াট / ˈদ়্যাট, was ওয়াজ়, were ওয়ার.
7. **Contractions** as zh: I'm আইম, it's ইট্স, I've আইভ়, I'll আইল, don't ˈডৌন্ট, can't ˈক্যান্ট, that's ˈদ়্যাট্স, there's দ়ের্জ়, what's ˈওয়াট্স, isn't ˈইজ়ান্ট.
8. **Numbers as words; abbreviations letter by letter**, each letter a separate word, as zh (TV টী ˈভ়ী, LOL এল ঔ ˈএল, BTW বী টী ˈডাবালিঊ).
9. **Three encoding rules the converter applies and writers must copy, not retype:**
   - **র + /æ/** needs ZERO WIDTH JOINER before the hasanta: ran = র + U+200D + ্ + য + া → ˈর‍্যান. Without it the font draws a reph and the word reads *rya* (r12a: «add a 200D character before the hasant»).
   - **hasanta + ব** inside a word takes ZERO WIDTH NON-JOINER (U+200C) after the hasanta, except after ম and ল: football ˈফুট্‌বল, husband ˈহাজ়্‌বান্ড. Otherwise the font draws ব-ফলা, which Bengali reads as a doubled or silent letter (r12a: U+200C forces a visible hasanta).
   - **য় = U+09DF or য + U+09BC**, one choice for the whole pack (§2). The dotted letters জ় ভ় থ় দ় ঝ় exist only as base + U+09BC.
10. **Names** as the en-US voice says them (zh PRON-RULES D): listen to the TTS once and transcribe what it says (Rafi → ˈরাːফি, Dhaka → ˈডাːকা or ˈড্যাকা, whichever the voice gives). The `pron` lesson tells learners that an American says their names this way.
11. **Codas in full**, voiced finals voiced: -s as স / জ় / ইজ় (cats ˈক্যাট্স, dogs ˈডগ্জ়, boxes ˈবাːক্সিজ়), -ed as ট / ড / ইড (watched ˈওয়াːচ্ট, lived ˈলিভ়্ড, wanted ˈওয়াːন্টিড). No inserted vowels: never ইস্কূল.

*Known collapses (one spelling for two sounds), and why they are acceptable.*
- **STRUT ʌ / schwa ə / NURSE ɜː → া.** Bengali has no central vowel and no letter for one; Bengali speakers already hear all three as আ (Hai & Ball via Jakir 2020; Islam 2021). The stress mark separates a strong া (ʌ, ɜː) from a weak one (ə). *From* is the only weak / strong pair that merges (ফ্রাম).
- **KIT ɪ / final -y i → ি** and **FOOT ʊ / weak u → ু**, as in zh's own weak forms.
- **Kept apart on purpose**, because these are the documented mergers (§4.10): ɪ / iː, ʊ / uː, e / eɪ, o-glide / ɔː, ɑː / ʌ, z / dʒ, v / b, θ / t, s / ʃ.
- **Checked:** the pairs of ko-en deck 18 and the pron cards zh appended all derive to **distinct** respellings: ˈরাইস / ˈলাইস, ˈফ্যান / ˈপ্যান, ˈকফি / ˈকাːপি, ˈথ়িংক / ˈসিংক, ˈথ়্রী / ˈট্রী, ˈভ়েরি / ˈওয়েরি, ˈভ়ৌট / ˈবৌট, ˈওয়ক / ˈওয়ার্ক, ˈলীভ় / ˈলিভ়, ˈকাːর্ড / ˈকাːর, ˈমাউথ় / ˈমাউস, ˈভ়েস্ট / ˈওয়েস্ট, ˈব্যাড / ˈবেড (converter output).

**`pron` lesson additions** (prose, not in `pron`; they change no English string):
1. How to read the aid: «নিচে ফোঁটা দেওয়া অক্ষর = যে ধ্বনি বাংলায় নেই», ˈ = জোর, ː = টেনে বলা আ, ী ূ লম্বা / ি ু ছোট, and "শব্দের শেষ ব্যঞ্জনে কোনো স্বর নেই".
2. **জ় vs জ** (zoo / Jew, zero, easy, is): a hiss with voice, the tongue does not touch.
3. **ভ় vs ব and ভ; ওয় vs ভ়** (very / berry, vote / boat, vest / west): teeth on lip for v, round lips for w.
4. **থ় / দ়** (think / sink, three / tree, this, the): tongue between the teeth, air keeps flowing; not থ, দ.
5. **ফ** (fan / pan): lips do not close. **স vs শ** (see / she, sip / ship).
6. **Long and short** (ship / sheep, full / fool, hot / hut), and **the glides** ৌ, েই (go, no, make, name).
7. **No vowel before s-clusters** (school, station, street): «স্কূল, ইস্কুল নয়». All final consonants said (asked, months, friends).
8. **Stress and weak vowels:** *hotel, banana, about, photography*; one strong syllable per word, the rest quick.
9. Optional note: the Bangladeshi r at the end of *car, water* is fine in American English; spend effort on items 2–7.

**Validator settings (profile.json):**
- `"nativeScript": "[\\u0980-\\u09E3]"`: Bengali letters and signs, **excluding** Bengali digits ০–৯ (U+09E6–09EF), the taka sign ৳ and the other symbols at U+09F0–09FF. The দাঁড়ি (U+0964) is in the Devanagari block and so is outside the class too. "Bengali" therefore means **at least one Bengali letter or sign**: a `why` that is English plus a দাঁড়ি, or a prompt that is only «৫», fails, which is what we want. The class covers both encodings of য় ড় ঢ়. It finds 0 characters in `packs/course-ko-en.js`, `course-zh-en.js` and `course-hi-en.js` (checked locally), so "English must not contain native script" is safe.
- **No `pronScript`.** The aid is in the native script, so the default check (`pron` must contain native script) applies, as in ko-en and hi-en.
- `"pronPattern"` (in profile.json every non-ASCII character is written as a `\u` escape; validate.js compiles it with flag `u`). In words:
  - every word, and every stretch after a ˈ, starts with a letter the key uses: অ আ ই ঈ উ ঊ এ ও ঔ or ক গ চ জ ঝ ট ড থ দ ন প ফ ব ভ ম র ল শ স হ;
  - after that only those letters, ঙ, য / য়, the nukta, the signs া ি ী ু ূ ে ৌ, hasanta, ং, ː, and the two joiners;
  - words are joined by one space, `। ` or ` / `; at least one ˈ in the string;
  - guard clauses: **থ দ ভ ঝ only with the dot** (plain থিংক, ভেরি are rejected); the dot only on জ থ দ ভ ঝ য; ও only as ওয়; plain য only as য-ফলা, and য-ফলা only before া (the /æ/ spelling); ː only after আ / া; ZWJ only in র‍্য; ZWNJ only between hasanta and ব.
  - It **rejects** Latin letters, IPA symbols other than ˈ and ː, `?` `!` `,` `.`, digits of both scripts, double spaces, a word that starts with a sign, a dangling ˈ, and the letters the key never uses (ত খ ঘ ছ ঠ ঢ ধ ণ ষ, the signs ো ৈ ৃ, ঁ, ঃ). So the loan spellings গো, থিংক, ভেরি, তিন fail.
  - It **cannot** tell জ from জ় or ি from ী: a row that writes জু for *zoo* passes. That is what the converter and `lint.js` are for.
- No `labels.cueTest` is needed: `nativeScript` is a real script. In the `more/` shorthand an mc `q` or type `hint` with no Bengali letter gets `labels.mcBlankCue` (« শূন্যস্থানে কী বসবে?») or `typeHintCue` (« — এই শব্দগুলো দিয়ে») appended. That is right for a gap question and wrong for a translation question, so writers put the Bengali frame in themselves: `"আমি এখানে পাঁচ বছর ধরে আছি" ইংরেজিতে?`, «সঠিক বাক্যটি বেছে নিন।».
- **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote the respelling in prose and tables (`<b>ˈভ়াইন</b>`).

**Worked examples.** "zh row" = the English string exists in `tools/content/zh/` with the IPA shown, and the bn `pron` is the converter's output for it; "new" = no zh row, IPA written by this profile and converted by the same rules. All bn rows pass `pronPattern` (node check at the end of the task; its output is in the final report).

| English | zh IPA (source) | bn `pron` | Rules / Bengali trap shown |
|---|---|---|---|
| Hello. | /həˈloʊ/ (zh row) | হাˈলৌ | reduced first vowel; ৌ glide, not লো |
| How are you? | /ˈhaʊ ər ju/ (zh row) | ˈহাউ আর ইউ | weak *are*, *you* unmarked |
| Thank you. | /ˈθæŋk ju/ (zh row) | ˈথ়্যাংক ইউ | থ় not থ; ্যা for æ; ং before k |
| Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ (zh row) | ˈনাইস টা ˈমীট ইউ | weak *to*; long ী |
| Excuse me. | /ɪkˈskjuːz mi/ (zh row) | ইক্ˈস্কিঊজ় মি | hasanta visible where ˈ splits a cluster; no ই before s; জ় |
| It's cold today. | /ɪts ˈkoʊld təˈdeɪ/ (zh row) | ইট্স ˈকৌল্ড টাˈডেই | ৌ and েই glides |
| There's a cafe near here. | /ðerz ə kæˈfeɪ nɪr ˈhɪr/ (zh row) | দ়ের্জ় আ ক্যাˈফেই নির ˈহির | দ় not দ; জ় not জ |
| Can you close the door? | /kən ju ˈkloʊz ðə ˈdɔːr/ (zh row) | কান ইউ ˈক্লৌজ় দ়া ˈডর | weak *can, the*; bare ড = ɔː |
| I have two brothers. | /aɪ ˈhæv ˈtuː ˈbrʌðərz/ (zh row) | আই ˈহ্যাভ় ˈটূ ˈব্রাদ়ার্জ় | ভ় for v; plural জ় |
| We watched a movie. | /wi ˈwɑːtʃt ə ˈmuːvi/ (zh row) | ওয়ি ˈওয়াːচ্ট আ ˈমূভ়ি | ওয় (w) and ভ় (v) in one row; -ed = ট; াː |
| I have a dog. The dog is so cute. | /aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/ (zh row) | আই ˈহ্যাভ় আ ˈডগ। দ়া ˈডগ ইজ় ˈসৌ ˈকিঊট | ‖ → `। `; cute with িঊ |
| Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ (zh row) | কাড ওয়ি ˈগেট ˈসাম ˈওয়টার | ওয় + ɔː has no sign [native check, §11] |
| I'm a student. | /aɪm ə ˈstuːdnt/ (zh row) | আইম আ ˈস্টূডান্ট | syllabic n → ান; no ই before স্ট |
| Have you eaten yet? | /həv ju ˈiːtn ˈjet/ (zh row) | হাভ় ইউ ˈঈটান ˈইয়েট | weak *have*; y = ইয় |
| How long have you been here? | /ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/ (zh row) | ˈহাউ ˈলং হাভ় ইউ বিন ˈহির | ং word-finally |
| We ran out of milk. | /wi ˈræn ˈaʊt əv ˈmɪlk/ (zh row) | ওয়ি ˈর‍্যান ˈআউট আভ় ˈমিল্ক | র + ZWJ + ্যা (rule 9) |
| This is Mary and her husband. | /ˈðɪs ɪz ˈmeri ənd hər ˈhʌzbənd/ (zh row) | ˈদ়িস ইজ় ˈমেরি আন্ড হার ˈহাজ়্‌বান্ড | ZWNJ before ব (rule 9) |
| think / sink | /ˈθɪŋk/ · /ˈsɪŋk/ (zh rows) | ˈথ়িংক / ˈসিংক | θ vs s |
| three / tree | /ˈθriː/ · /ˈtriː/ (zh rows) | ˈথ়্রী / ˈট্রী | θ vs t |
| very / wary | /ˈveri/ · /ˈweri/ (zh rows) | ˈভ়েরি / ˈওয়েরি | v vs w |
| vote / boat | /ˈvoʊt/ · /ˈboʊt/ (zh rows) | ˈভ়ৌট / ˈবৌট | v vs b |
| bad / bed | /ˈbæd/ · /ˈbed/ (zh rows) | ˈব্যাড / ˈবেড | ্যা vs ে |
| coffee / copy | /ˈkɔːfi/ · /ˈkɑːpi/ (zh rows) | ˈকফি / ˈকাːপি | ফ vs প; bare ক (ɔː) vs াː |
| leave / live | /ˈliːv/ · /ˈlɪv/ (zh rows) | ˈলীভ় / ˈলিভ় | long vs short |
| fifteen / fifty | /ˌfɪfˈtiːn/ /ˈfɪfti/ (zh row) | ফিফ্ˈটীন / ˈফিফ্টি | ˌ dropped; stress position |
| months | /ˈmʌnθs/ (zh row) | ˈমান্থ়্স | full final cluster |
| zoo / Jew | new (/ˈzuː/ /ˈdʒuː/) | ˈজ়ূ / ˈজূ | the z / j dot |
| vine / wine | new (/ˈvaɪn/ /ˈwaɪn/) | ˈভ়াইন / ˈওয়াইন | v / w |
| ship / sheep | new (/ˈʃɪp/ /ˈʃiːp/) | ˈশিপ / ˈশীপ | length |
| heart / hurt | new (/ˈhɑːrt/ /ˈhɜːrt/) | ˈহাːর্ট / ˈহার্ট | ː |
| school | new (/ˈskuːl/) | ˈস্কূল | no ই before the cluster |
| football | new (/ˈfʊtbɔːl/) | ˈফুট্‌বল | ZWNJ; bare ব = ɔː |
| My name is Rafi. | new (/maɪ ˈneɪm ɪz ˈrɑːfi/) | মাই ˈনেইম ইজ় ˈরাːফি | localised name (§9) |
| I live in Dhaka. | new (/aɪ ˈlɪv ɪn ˈdɑːkə/) | আই ˈলিভ় ইন ˈডাːকা | city as the en-US voice says it (rule 10) |
| Five hundred taka. | new (/ˈfaɪv ˈhʌndrəd ˈtɑːkə/) | ˈফাইভ় ˈহান্ড্রাড ˈটাːকা | currency as a word (§9) |

- Rejected by `pronPattern` (checked): `/ˈjes/`, `ˈইয়েস?`, `yes`, `ˈথিংক`, `ˈভেরি`, `ˈগো`, `ˈতিন`, `ˈগৌ  হৌম` (two spaces), `ˈগৌ ˈ`, `ˈথ়্রী,`, `২০১০ ˈসাল`, `ˈ্ক`, `থ়্যাংক ইউ` (no ˈ), `ˈহিːট`, `ˈফুট্‌পাথ`.
- Before writing a "new" row, writers grep `tools/content/zh/` for the English string; if it exists there, derive from that IPA instead.

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "আর্টিকেল|বহুবচন|গণনাযোগ্য" }`. No flags (Bengali has no letter case). None of the three keywords contains য় ড় ঢ়, so normalisation cannot break the match.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much).
- The `why` of each such item must contain **আর্টিকেল**, **বহুবচন** or **গণনাযোগ্য**. «গণনাযোগ্য নয়» also matches.

**What the validator counts** (validate.js, `article-plural`): as in id.md §7. `order`: the `why` names a keyword **and** `x` holds an article tile or a singular / plural twin of a tile in `a`. `type`: the `why` names a keyword **and** either every variant in `a` contains an article, or `x` holds an article or a twin. Writers put the competitor tile in `x` (`a`, `the`, `book` / `books`).

**Sample `why` lines** (plain text, English bare; all five tested against the regex, output in the final report) [native check]:
- «একটি গণনাযোগ্য জিনিসের আগে আর্টিকেল a লাগে: a teacher।»
- «two-এর পরে বিশেষ্য বহুবচন হয়: two books। বাংলায় "দুইটা বই", ইংরেজিতে -s চাই।»
- «জিনিসটার কথা আগেই বলা হয়েছে, তাই আর্টিকেল the।»
- «water গণনাযোগ্য নয়: আগে a বসে না, শেষে -s-ও বসে না।»
- «these বহুবচনের সঙ্গে, this একটি জিনিসের সঙ্গে।»

**Justification:**
- **Both systems are absent in Bengali** in the English form: no article words, and no plural ending after a number (§4.1, §4.4). The largest single measured figure is the article one (64.5% of zero-article slots wrong, Arafath 2010), and plural mass nouns are the feature in which Bangladeshi web English most exceeds its neighbours (S&S 2023) [research-backed].
- **Parity cost is zero.** The shared tile and typed items were written to the Korean rule. Only the Bengali `why` must name a keyword. Any other kind would force deviations in up to 39 sets (PILOT-SPEC §1.6) [practitioner opinion].
- **`verb-core` was considered and rejected.** It would capture the top category of H&A 2023 (agreement, 9.8%) and missing *be* (8.6%). But it needs new items and deviations in every set, and the ko items already include many third-person and *be* sentences. Revisit after launch if first-attempt logs show -s and *be* dominating.

**Secondary emphasis (not validated; do not add to the regex):**
- Where an item also turns on third-person -s, its `why` says «he / she / it-এর সঙ্গে -s».
- Where it turns on a missing *be*, the `why` says «be ক্রিয়া (am / is / are) বাদ দেওয়া যায় না».
- Where it turns on সে, the `why` names he / she («বোন মেয়ে, তাই she»).
- Do not use the three keywords in `why` lines that do not hinge, so the count stays meaningful.

**Prompt frames.** Because `nativeScript` is a real script, a Bengali frame is detected by its letters. Use these [native check]:
- translation: `"আমার দুইটা ভাই আছে" ইংরেজিতে?`
- meaning: «"ভাত" ইংরেজিতে কী?»
- forms: «go-এর past রূপ?» / «box-এর বহুবচন?»
- find the error: «কোনটি ভুল? She go to school every day.»
- choose: «সঠিক বাক্যটি বেছে নিন।»
- type hints end with « — » plus a short Bengali note («three · tree — তিন, তাই বহুবচন»).

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in ja.md and id.md):**
- **keep** = fresh Bengali explanation from the Bengali point of view; English rows, checks and practice unchanged.
- **reweight** = same English checks and practice. The Bengali explanation and the **lesson-body** example rows shift emphasis as noted. Lesson-body rows are not parity-bound; check and practice strings are. No deviation entry is needed. Do not rewrite practice `o` / `a` / `x` strings.
- **add** = new lesson, with an entry in `deviations.json` `extraLessons` and in `profile.json` `lessonOrder.after`. Its practice set must itself satisfy the standing rule (§7).

Ids and order are unchanged. Nothing is replaced or dropped. **No shared lesson changes its English side.** Every Bengali example in the notes needs a native check.

| lesson id | keep / reweight / add | note for Bengali speakers |
|---|---|---|
| pron | reweight | Bengali set (§6 lesson additions): জ় / জ (zoo / Jew), ভ় / ব (very / berry, vote / boat), ওয় / ভ় (west / vest), থ় দ় (think / sink, three / tree), ফ / প (fan / pan), স / শ, short / long (ship / sheep, full / fool), the glides ৌ েই, no ই before s-clusters, ˈ and weak vowels. Shared R/L items (rice / lice): the `why` says Bengali has both sounds; only the tapped r needs softening. Teaches the `pron` key in one table |
| be | reweight | Core lesson. আমি ছাত্র has no verb; English cannot drop *am / is / are*: `English very important ✗` (H&A). *was / were* map to ছিল. Subject pronouns: সে / তিনি → he **or** she |
| it-there | reweight | আছে → *there is / there are* (agreement with the noun); বৃষ্টি হচ্ছে → *It's raining*; তিনটা বাজে → *It's three o'clock*. *There is* is not *have*: আমার একটা বই আছে → *I have a book* |
| articles | reweight | No article words in Bengali. একটা ≈ *a*, but English never drops it: আমি শিক্ষক → *I'm a teacher*. *a / an* by sound, not letter (*an hour, a university*; Arafath 2010) |
| plurals | reweight | Number + -টা / -জন leaves the noun bare: দুইটা বই → *two books*, তিনজন বন্ধু → *three friends*. -রা / -গুলো ≠ every English plural. this / these. Irregulars: `womens ✗` (Saleheen) |
| present | reweight | Bengali changes the verb for person (আমি করি, সে করে); English changes it only for he / she / it. Negation: না comes after the verb, *don't* before it: আমি চা খাই না → *I don't drink tea*. Word order S-V-O: `I my breakfast had ✗` (H&A) |
| questions | reweight | কি and a rising tone → *do / does* + inversion: তুমি কি চা খাও? → *Do you drink tea?* The question word moves to the front: তুমি কোথায় থাকো? → *Where do you live?*, never `You where live?` / `Where you live?` |
| third-s | reweight | The most frequent measured error (H&A, 9.8%). সে করে and তারা করে share a verb; English does not: *He writes / They write* |
| prep | reweight | The Bengali word comes after the noun (টেবিলের উপরে → *on the table*); -এ / -তে = *in / on / at*: সোমবারে → *on Monday*, সাতটায় → *at seven*, ঢাকায় → *in Dhaka*. বাড়ি যাই → *go home*, no *to* |
| countable | reweight | অনেক = *many* **and** *much*. *information, advice, furniture, equipment, homework, research, evidence* take no -s and no *a* (the plural forms are frequent in Bangladeshi web English, S&S 2023) |
| object-have | reweight | Possession is genitive + আছে: আমার একটা গাড়ি আছে → *I have a car*, not `My a car is`. তাকে → him / her; তার → his / her (`the bride and his family ✗`, Saleheen) |
| can-like | keep | পারি = can. আমার … ভালো লাগে puts the person in the genitive; English makes the person the subject: *I like tea* |
| polite | reweight | আপনি / তুমি / তুই are all *you*; English moves politeness into the sentence (*Could you…? Could I have…?*). দয়া করে + command is not polite enough on its own. ভাই, আপা, স্যার, ম্যাডাম have no everyday equivalent: use the name, *Mr. / Ms.* + family name, and *sir / ma'am* only in service |
| continuous | reweight | করছি = *am doing* maps well, but *be* cannot be dropped (`I studying ✗`, H&A) and state verbs take no -ing: *I know, I want, I understand* (`be knowing`, `be wanting` occur in Bangladeshi web English, S&S 2023) |
| past | reweight | Bengali allows করেছি with a finished time (গতকাল করেছি); English needs the past simple: *I did it yesterday*. *did* + base form in questions and negatives; -ed said ট / ড / ইড (§6 rule 11) |
| irregular-past | keep | Three-form lists are a school habit; use them |
| the | reweight | -টা / -টি on a noun ≈ *the*, but Bengali adds it where English allows no article (আমার বইটা → *my book*) and English omits *the* before most names of places and institutions (`at the Northern University Bangladesh ✗`, H&A). First vs second mention |
| adjectives | reweight | Adjective before noun as in Bengali (easy). Comparison: আরও / চেয়ে → *-er / more … than*, never both: `more better ✗`, `more easier ✗` (highest of four South Asian web corpora, S&S 2023) |
| going-to | keep | করব covers *will* and *going to*; keep ko's contrast |
| tense | reweight | Recap with a map: করি → *do*, করছি → *am doing*, করব → *will do / am going to do*; state verbs stay simple |
| joining | keep | Add a note: not *although … but* (যদিও … তবুও) and not *because … so* (কারণ … তাই); comma after an opening *When / If* clause (H&A) |
| numbers | reweight | লাখ / কোটি → *a hundred thousand / ten million*; 1,00,000 → 100,000; দেড় / আড়াই / সাড়ে তিন → *one and a half / two and a half / three and a half*; taka prices; Bengali digits ০–৯ against 0–9; times (§9) |
| smalltalk | reweight | খেয়েছেন? and কোথায় যাচ্ছেন? are greetings in Bengali, real questions in English. Avoid salary, age, marriage and religion as openers. Deck localised (§9) |
| **banglish** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | করছিলাম maps directly |
| will | keep | করব → *will* for decisions and promises |
| perfect | reweight | করেছি is **not** always *have done*: with *yesterday / last year* use the past simple. কখনো … করেছেন? → *Have you ever…?*; এখনো … করিনি → *haven't … yet* |
| modals | reweight | Obligation puts the person in the object form (আমাকে যেতে হবে); English keeps the subject: *I have to go*. উচিত = should; হয়তো = might; পারি = can / may. *don't have to* ≠ *mustn't* |
| to-ing | keep | |
| articles-2 | reweight | Generic statements: বিড়াল মাছ খায় → *Cats eat fish* (plural, no article), not `Cat eats fish` or `The cats eat fish`. Uncountables with no article |
| first-conditional | keep | যদি … তাহলে; no *will* after *if* |
| relative | reweight | Bengali uses a pair (যে … সে) and often puts the clause first: যে লোকটা পাশে থাকে, সে … → *the man who lives next door*. One word in English, after the noun, and no second pronoun: `the man who he lives ✗` |
| phrasal | keep | |
| perfect-2 | reweight | ধরে / থেকে with a present form: আমি পাঁচ বছর ধরে ঢাকায় আছি → *I have lived in Dhaka for five years*, not `I am living in Dhaka for five years` / `since five years`. ধরে = *for*, থেকে = *since* |
| narrative | keep | |
| conditionals | keep | করতাম is both "used to do" and "would do"; English separates *used to* and *would* + if-clause |
| passive | reweight | Bengali avoids the passive (করা হয়) and has no *be* + V3 pattern: `Dowry means something gives … ✗` (Saleheen). *be* + V3 with the right tense |
| **articles-3** | **add** (after `passive`, before `reported`) | See below |
| reported | keep | Bengali usually keeps the original words after যে (সে বলল যে "আমি যাব"); English shifts pronoun and tense: *He said he would go* |
| email | reweight | Replace the school application formulas: `Respected Sir, With due respect I beg to state that… ✗` → *Dear Ms. Rahman,* / *Hi Nadia,* + the point in the first line; `Yours obediently ✗` → *Best regards*; `Kindly do the needful ✗` → *Could you please…?* [practitioner opinion]. Names: *Md.* is not a first name abroad; give the name you are called by |
| idioms | keep | |

**Additions:**
- **`banglish`** («বাংলিশ ফাঁদ: যে ইংরেজি দেশের বাইরে চলে না»), after `smalltalk`, deck «বাংলিশ ফাঁদ» (§9, deck 21).
  - *Content:* verbs translated word for word (পরীক্ষা দেওয়া → *take an exam*; ওষুধ / চা / সিগারেট খাওয়া → *take medicine, have tea, smoke*); time phrases (*this morning, last night*); kinship (*cousin*, *older brother*); numbers abroad (*lakh / crore* → *hundred thousand / ten million*); mass nouns with -s (*information, advice, equipment*); *more better*; state verbs in -ing; words with a local meaning (§9 table).
  - *Practice that meets §7:* `I took an exam yesterday`, `I need some information`, `She gave me good advice`, `I have a cousin in Sylhet`, `Two of my cousins live in Dhaka`.
  - *Reason:* §4.11 and §4.4. It is the Bengali-specific lexical zone, parallel to `konglish`, `chinglish`, `indo-english` and `indian-english`. Part of it is corpus-backed (S&S 2023); the calques are practitioner opinion.
- **`articles-3`** («কখন আর্টিকেল বসে না: the না কিছুই না?»), after `passive`, the same id and position as the zh and ko additions so its structure can be shared. Deck «হালকা আলাপ» (10), or the deck zh links it to.
  - *Content:* zero article in fixed phrases (*go to school, at work, by bus, have breakfast, at night*); names of people, cities, most countries, universities and companies with no *the*; generic plural and uncountable subjects (*Life is short. Cats sleep a lot.*); *the* with superlatives, ordinals and unique things; -টা / -টি is not a signal for *the* (আমার বইটা, ঢাকা শহরটা).
  - *Practice that meets §7:* `I go to work by bus`, `She studies at Dhaka University`, `Life is hard without friends`, `This is the best restaurant in the city`.
  - *Reason:* §4.1. The zero-article slot is the hardest measured article slot for Bangladeshi university students (64.5% wrong against 20.9% for *the*, Arafath 2010), and ko-en's shared article lessons stop at A2.

**Not added (considered):** a `he-she` lesson (one attested example and no counts, §4.8; `be` and `object-have` carry it as reweights), and a tense-map lesson like hi's `stative-since` (the Bengali mappings are practitioner opinion and the corpus rates for state verbs are low, §4.6; `continuous`, `past`, `perfect` and `perfect-2` carry it).

**Totals:** 39 existing lessons (23 A1 + 9 A2 + 7 B1): **13 keep, 26 reweight**, 0 dropped. Plus 2 additions, the only lesson-level parity exceptions; A1 grows to 24 and B1 to 8. All verdicts are [practitioner opinion] grounded in §4.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies, PAUSE sets)** [practitioner opinion; native check]:

| ko-en | bn-en |
|---|---|
| Minji (and other Korean names) | **Rafi, Nadia, Imran, Tania** (alternates Arif, Sumi, Farhan, Mitu; also Dipa, Rina). Short names an American voice can say. English-speaking characters keep English names |
| Seoul | **Dhaka** |
| Busan | **Chattogram** (also Sylhet, Rajshahi, Khulna). Note: older English texts say *Chittagong* |
| Jeju / beach trips | **Cox's Bazar**, Saint Martin's Island; the Sundarbans; Sylhet's tea gardens |
| Seoul National University | a university in Dhaka, generic («I'm a student in Dhaka»); *Dhaka University* only in `articles-3` as a no-*the* example |
| kimchi, bibimbap | **biryani, khichuri, hilsa (ilish), fuchka, pitha, dal**; drinks *tea (cha), lassi, juice* |
| soju, beer in examples | non-alcoholic drinks by default (*tea, coffee, juice*): a mostly Muslim audience, and nothing in the course needs alcohol |
| K-pop, K-drama | genres, not artists: *a song, a series, a cricket match, a natok (TV drama)* |
| Gangnam | Dhanmondi, Gulshan, Banani (Dhaka) |
| Chuseok, Korean holidays | **Eid** (going home for Eid), **Pohela Boishakh** (Bengali New Year), Durga Puja, Victory Day, Christmas |
| 존댓말 / 반말 | আপনি / তুমি / তুই comparisons (polite lesson only) |
| won (₩) | **taka (৳, BDT)**: see numbers below |
| Korea / Korean (the learner's own country and language) | **Bangladesh / Bangla**. *Bangla* is what Bangladeshis call the language in English; add one card note that many English speakers say *Bengali* [lead decision, §11] |

**Kolkata words** [practitioner opinion except the first row; native check]. Glosses use the Dhaka word. Where the Kolkata word differs, add it once in the card `note` as «(কলকাতায়: জল)»; do not accept or teach it otherwise.

| Meaning | Dhaka (use) | Kolkata (note) |
|---|---|---|
| water | পানি | জল (en-bn.md §2.1, sourced there) |
| greeting | আসসালামু আলাইকুম / হ্যালো | নমস্কার (en-bn.md §2.1) |
| bath | গোসল | স্নান |
| breakfast | নাশতা | জলখাবার |
| invitation | দাওয়াত | নেমন্তন্ন |
| salt / chilli | লবণ / মরিচ | নুন / লঙ্কা |
| older sister / brother | আপা / ভাইয়া | দিদি / দাদা |
| aunts | খালা, ফুফু | মাসি, পিসি |
| spelling of loans | আর্টিকেল, ইমেইল | আর্টিকল, ইমেল |

**Deck localisation vs parity:** `parity.js` compares English deck targets per position, so any card whose English changes (*My name is Minji.* → *My name is Rafi.*, *I live in Seoul.* → *I live in Dhaka.*, *Korea* → *Bangladesh*) needs a `decks` entry in `deviations.json`. Use one entry per deck, naming the cards and the reason «localisation per profile bn.md §9», as `tools/content/ja/deviations.json` does. Appended bn-only cards go in the same entry. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely.

**Taka and big numbers** (numbers lesson, shopping deck):
- ৳500 = *five hundred taka*; ৳1,50,000 (দেড় লাখ) = *a hundred and fifty thousand taka*. লাখ = 100,000, কোটি = 10,000,000 = *ten million*. Wikipedia (Bangladeshi English): the South Asian system is preferred for digit grouping; *lakh* and *crore* are used in English there. Abroad they are not understood.
- Bengali groups 1,00,000; English groups 100,000. Teach it explicitly. English strings never use lakh grouping or Bengali digits.
- Time: রাত নয়টা পাঁচ → *9:05 p.m.* / *nine oh five*.

**Checks and practice:**
- Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul, Busan, kimchi, K-pop*). **Leave the English unchanged** (parity) and translate the Bengali side literally (সিউল, বুসান, কিমচি); it reads as a learner talking about Korea.
- Do not file per-item deviations to localise them. If the lead wants them localised later, use one bulk deviation with reason "localisation" (same rule as ja.md §9).
- **He / she in prompts:** see §2. A Bengali prompt with সে must say who.

**Traps for the `banglish` lesson and deck** (at least 20 cards; `note` says «সরাসরি বাংলা থেকে» or «দেশের বাইরে অন্য অর্থ»). Source column: S&S = corpus-backed; WP = Wikipedia, Bangladeshi English; PO = practitioner opinion, **native check required**.

| Bangladeshi use | Standard / American English | Source |
|---|---|---|
| *informations, advices, equipments, furnitures, researches* | information, advice, equipment, furniture, research (no -s) | S&S |
| *more better, more easier* | better, easier | S&S |
| *I am knowing / wanting* | I know / I want | S&S |
| *ten lakh, two crore* | one million, twenty million | WP |
| *lift, flat, petrol, biscuit, torch, mobile* | elevator, apartment, gas, cookie, flashlight, cell phone (both are English; the American word is the one taught) | WP |
| *give an exam* (পরীক্ষা দেওয়া) | take an exam | PO |
| *eat medicine / drink a cigarette* (খাওয়া) | take medicine / smoke | PO |
| *today morning, yesterday night* | this morning, last night | PO |
| *cousin brother / cousin sister* | cousin | PO |
| *What is your good name?* (ভালো নাম) | What's your name? / your full name | PO |
| *hotel* (= eating place) | restaurant | PO |
| *current is gone / load-shedding* | the power is out / a power cut | PO |
| *I have fever. My head is paining.* | I have a fever. I have a headache. | PO |
| *I passed my HSC in 2020.* (as "graduated") | I finished high school in 2020. | PO |
| *marks, result* | grades / score, grades | PO |
| *coaching* (= tuition centre) | tutoring / a prep course | PO |
| *discuss about, married with, return back* | discuss, married to, return | PO |
| *Myself Rafi.* | I'm Rafi. | PO |
| *off day* | day off | PO |
| *bachelor* (= single tenant), *mess* (= shared lodging) | single / shared apartment | PO |

**Deck names (FINAL proposal).** Plain everyday Bengali with established loans; «ও» and commas as separators; parentheses for the travel deck; Western digits after a space; no terminal punctuation. Rows 1–20 replace the Korean course's 20 decks in the same order. Row 21 is the bn-only deck, appended last in decks.js. [native check before the content agent freezes them in DECKNAMES.md]

| # | Bengali deck name | linked lesson or notes |
|---|---|---|
| 1 | **শুভেচ্ছা বিনিময়** | ko 인사 (greetings) |
| 2 | **নিজের পরিচয়** | ko 자기소개; names, city and country localised (§9) |
| 3 | **জরুরি ইংরেজি 1** | ko 생존 영어 1 |
| 4 | **জরুরি ইংরেজি 2** | ko 생존 영어 2 |
| 5 | **পথ জিজ্ঞাসা ও যাতায়াত** | ko 길 묻기·교통; `prep` |
| 6 | **রেস্টুরেন্টে অর্ডার** | ko 식당 주문; `polite` |
| 7 | **ক্যাফে ও দোকান** | ko 카페·편의점 |
| 8 | **কেনাকাটা ও বিল** | ko 쇼핑·계산; taka prices in lesson bodies only |
| 9 | **সংখ্যা, সময় ও তারিখ** | ko 숫자·시간·날짜; `numbers` |
| 10 | **হালকা আলাপ** | ko 스몰토크; `smalltalk`, `articles-3` |
| 11 | **অনুভূতি ও প্রতিক্রিয়া** | ko 감정·반응 |
| 12 | **প্রশংসা ও ভালো লাগা** | ko 칭찬·호감 표현 |
| 13 | **অফিস ও ইমেইল** | ko 직장·이메일; `email` |
| 14 | **ফোন ও চ্যাটের সংক্ষেপ** | ko 전화·문자 줄임말 |
| 15 | **ভ্রমণ (বিমানবন্দর ও হোটেল)** | ko 여행(공항·호텔) |
| 16 | **হাসপাতাল ও জরুরি অবস্থা** | ko 병원·긴급 |
| 17 | **ফ্রেজাল ভার্ব** | ko 구동사; `phrasal` |
| 18 | **উচ্চারণে সাবধান** | ko 발음 주의; `pron` |
| 19 | **ইংরেজি বাগধারা** | ko 영어 관용구; `idioms` |
| 20 | **সিনেমা, সিরিজ ও স্ল্যাং** | ko 영화·드라마·슬랭 |
| 21 | **বাংলিশ ফাঁদ** | bn-only, appended last; `banglish`; needs a `decks` entry in deviations.json |

**Deck content changes** [practitioner opinion]:
- **উচ্চারণে সাবধান:** keep the shared pairs. Add, in the pron lesson body and as bn-only cards in deck 21 (not by changing shared deck targets): *zoo / Jew, vine / wine, very / berry, ship / sheep, full / fool, see / she, heart / hurt, school, hotel*.
- **অফিস ও ইমেইল:** see `email` in §8.
- **ভ্রমণ:** departures from Dhaka (DAC); *visa, immigration, connecting flight*; tipping (not expected at home, expected in the US).
- **হালকা আলাপ:** cricket, food, rain and heat, traffic (*traffic jam*), Eid plans.
- **ফোন ও চ্যাটের সংক্ষেপ:** keep the English (*lol, btw*); explain in Bengali.

## 10. Interface wording notes

[Curriculum convention where the Mozilla bn-BD guide or r12a is named; otherwise practitioner opinion. Every Bengali label needs a native check and a device render.]

**Register:** আপনি with the polite imperative (§2). The app does not call itself আমি or আমরা on buttons. Toasts are impersonal or address আপনি:
- «সেভ হয়েছে»
- «দারুণ! আজকের সব কার্ড শেষ।»
- «আপনি টানা 5 দিন পড়েছেন।»

**Buttons, menu items and tabs:** the polite imperative (-ুন / -ন) or a short noun; no «দয়া করে» on buttons:
- «শুরু করুন», «চালিয়ে যান», «যাচাই করুন», «সেভ করুন», «পাঠান», «বাতিল», «ফিরে যান», «আবার চেষ্টা করুন», «বন্ধ করুন».
- The imperative is longer than in Hindi or Indonesian because Bengali verbs are often noun + করুন. On narrow buttons use the noun alone («শুরু», «বাতিল», «পরের»).

**Instructions in practice prompts:** imperative to আপনি, the same verb per item type: «সঠিক উত্তর বেছে নিন», «শব্দগুলো সাজান», «শূন্যস্থান পূরণ করুন», «বাক্যটি ইংরেজিতে লিখুন».

**Digits: Western 0–9 everywhere in the interface and in count patterns. Decision and reasons:**
1. **The engine.** Count patterns in `tools/i18n/keys.json` are matched with `(\d+)` on the English string and the captured ASCII digits are put into the translated template. Bengali digits cannot come out of that path without an engine change.
2. **The subject.** The course teaches English numbers, prices, times and dates in 0–9; lesson numbers, XP and percentages sit next to them on the same screens. One digit set avoids «৫টি কার্ড» beside *5 cards*.
3. **Convention.** The Mozilla bn-BD guide: «Numbers should not be translated», with lakh-style commas (10,00,000). r12a notes that modern Bengali uses ASCII digits as well as its own. Bangladeshis read both daily [the last point is practitioner opinion].
4. **What must be set for it to hold:** `Intl` for `bn` / `bn-BD` defaults to Bengali digits (checked locally: `new Intl.NumberFormat('bn-BD').format(1234567.5)` → «১২,৩৪,৫৬৭.৫»; long date → «২৩ নভেম্বর, ২০২৬»). In `src/app.html`, `dLoc()` returns the bare interface code for every language except ko and ar, so dates on the feedback board would print Bengali digits. **Request to the lead (engine, not this profile):** map `bn` to `bn-BD-u-nu-latn` in `dLoc()`, as Arabic is mapped to `ar-u-nu-latn-ca-gregory`.
5. Bengali digits are still *taught*: the `numbers` lesson shows ০–৯ against 0–9 once, in the lesson body.

**Counts: one translation per pattern, so no plural forms in the template** (PHASE2-BRIEF, last section). CLDR plural rules for `bn`: `one` = 0 and 1, `other` = the rest (`Intl.PluralRules('bn')` checked locally). Bengali nouns do not change after a number, so one template is correct at 1 and at 2 or more. Two shapes:
- **Things that are counted take the classifier on the number:** «{1}টি কার্ড», «{1}টি পাঠ», «{1}টি শব্দ», «{1}টি প্রশ্ন». «1টি কার্ড», «2টি কার্ড», «21টি কার্ড» and «0টি কার্ড» are all correct. Never «কার্ডগুলো» after a number.
- **Units of time and scores take no classifier:** «{1} দিন», «{1} মিনিট», «{1} সেকেন্ড», «{1} XP», «{1}%».
- If «5টি» (Western digit + Bengali ending) looks wrong on a device, the fallback is the colon form, which needs no ending: «কার্ড: {1}» [native check].

| English pattern | Bengali |
|---|---|
| `N cards due` | «{1}টি কার্ড রিভিশনের জন্য» |
| `N cards` | «{1}টি কার্ড» |
| `N lessons` | «{1}টি পাঠ» |
| `N days` | «{1} দিন» |
| `N-day streak` | «টানা {1} দিন» |
| `N words` | «{1}টি শব্দ» |
| `N questions` / items | «{1}টি প্রশ্ন» |
| `N XP` | «{1} XP» |
| `Level N` | «লেভেল {1}» |
| `N%` correct | «{1}% সঠিক» |
| `N min` | «{1} মিনিট» |

**Language-name slots.** `Intl.DisplayNames('bn')` returns «ইংরেজি», «বাংলা», «কোরিয়ান» (checked locally): dictionary forms. Bengali case endings attach to the noun (ইংরেজির, ইংরেজিতে), so **put the slot at the start of the string or after a colon and never follow it with an ending**: «{1}: 12টি পাঠ», «কোর্স: {1}», not «{1}-এর কোর্স». Set `name.bn` to «ইংরেজি».

**UI glossary** (use exactly; matches §3):

| English | Bengali | Note |
|---|---|---|
| lesson | পাঠ | «পাঠ 5» |
| practice (set) | অনুশীলন | |
| review (SRS) | রিভিশন | Button «রিভিশন দিন». The school word for going over material again; alternative «ঝালাই» [native check] |
| deck | ডেক | «কার্ডের ডেক» on first use |
| card / flashcard | কার্ড | |
| streak | টানা … দিন | «টানা 5 দিন»; noun in settings «ধারাবাহিকতা» |
| hint | ইঙ্গিত | |
| check (3-question quiz) | ছোট কুইজ | Button «যাচাই করুন» |
| correct / incorrect | সঠিক / ভুল | Feedback «সঠিক!» / «হয়নি, আবার দেখুন» (softer than «ভুল!») |
| answer / explanation | উত্তর / ব্যাখ্যা | `why` is shown under «ব্যাখ্যা» |
| try again | আবার চেষ্টা করুন | |
| multiple choice | এমসিকিউ | The exam word in Bangladesh; formal «বহুনির্বাচনি» |
| word tiles (order) | শব্দ সাজান | |
| gap-fill | শূন্যস্থান পূরণ | Exam term |
| typed sentence | বাক্য লিখুন | |
| drills | ড্রিল | |
| level / XP | লেভেল / XP | |
| pronunciation aid toggle | উচ্চারণ দেখান | Replaces "romanization" |
| progress | অগ্রগতি | |
| feedback (to developers) | মতামত | Tab «মতামত», page «মতামত পাঠান» |
| settings / sign in / sync | সেটিংস / লগ ইন / সিংক | |

**Numbers, dates and time** (`Intl` with `bn-BD-u-nu-latn`, checked locally):
- Numbers: «12,34,567.5» (lakh grouping, decimal point).
- Currency: `Intl` gives «1,500.00৳»; in prose write «1,500 টাকা» or «৳1,500». Do not hand-format elsewhere.
- Percent: «85%».
- Dates: long «23 নভেম্বর, 2026», short «23/11/26» (day first, as the Mozilla guide gives). Weekday «সোমবার». The week starts on Sunday and Friday is the day off (Mozilla bn-BD): relevant to any "this week" view.
- Time: 12-hour «9:05 PM» from `Intl`; the Mozilla guide accepts hh:mm with পূর্বাহ্ন / অপরাহ্ন or the 24-hour form.

**Tab bar (7 tabs share 390px, each ≤ 8 characters).** The brief lists Today, Practice, Review, Lessons, Drills, Progress, Feedback; the bottom nav in keys.json has **Read** where the brief says Drills (hi.md §10 found the same), so both are given. Counts are code points after NFC (ড় counts 2).

| English | Bengali label | Code points | Letters and conjuncts seen |
|---|---|---|---|
| Today | আজ | 2 | 2 |
| Practice | অনুশীলন | 7 | 5 |
| Review | রিভিশন | 6 | 4 |
| Lessons | পাঠ | 3 | 2 |
| Drills (label) | ড্রিল | 5 | 2 |
| Read (nav) | পড়া | 4 | 2 |
| Progress | অগ্রগতি | 7 | 4 |
| Feedback | মতামত | 5 | 5 |

- All labels are under the cap. **Width:** Bengali glyphs are wider than Latin ones at the same size; «অনুশীলন» and «অগ্রগতি» are the two longest and are the ones for the lead's real-layout check. Fallbacks: «চর্চা» (Practice, 5), «উন্নতি» (Progress, 6).
- **Height is the real risk.** The nav draws labels at `.62rem` (`.57rem` in `nav.tight`) with `overflow:hidden` (hi.md §10). Bengali needs more vertical room than Latin: r12a notes that some letters and marks rise above Latin ascenders and that larger line spacing is needed. The signs ি ী (above and beside), ু ূ and ্র (below), and the conjuncts গ্র, ড্র must not be clipped: check «অনুশীলন», «অগ্রগতি», «ড্রিল» on a phone.
- **Conjunct rendering.** Every label and deck name uses only standard conjuncts (গ্র, ড্র, ষ্ঠ-type stacks are avoided; ক্ষ, ঙ্গ, স্ট, ন্দ appear in glossary terms). The unusual sequences are all inside `pron` (§6 rule 9): dotted ভ় থ় দ় ঝ়, visible hasanta, র‍্য with ZWJ. **The web font must be one that positions U+09BC under any consonant** (Noto Sans Bengali does; device system fonts need a check), otherwise the dot floats or falls on the wrong letter.
- The i18n validator warns at > 1.6 × English and > 14 characters; check «আবার চেষ্টা করুন» (16) and «শূন্যস্থান পূরণ করুন» on buttons.

## 11. Gaps and unverified claims

- **Missing inputs.** `reports/Grammar learning order research.md` does not exist in this worktree and was skipped. `docs/profiles/OTHERS.md` has no Bengali section. zh.md and vi.md were read for structure only (headings); id.md and the pron and interface sections of hi.md were read in full.
- **No native speaker has read this file.** Every Bengali string (sample sentences, glossary, deck names, UI labels, `why` lines, prompt frames, the Kolkata table, the trap list) is the author's and needs a native check. Specific doubts: «রিভিশন» vs «ঝালাই»; «সিলেবল»; V3 as a school label; whether «5টি» with a Western digit reads naturally; «বাংলিশ ফাঁদ» as a title.
- **Register.** আপনি rests on the Mozilla bn-BD guide and on the author's judgment. How Bangladeshi learning apps and NCTB textbooks address learners could not be read (10 Minute School 403; teachers.gov.bd 403). If they use তুমি for adults, flip it (§2).
- **Blocked or unusable sources** (not in Sources): the Chittagong University tense–aspect study (403); Dola's BRAC thesis on L1 interference (HTTP 468); the UiT thesis on agreement and word order in L1-Bengali English (host not found); banglajol copies of IIUC Studies papers (403); IAFOR ECLL 2013 paper (403); Sattacademy and teachers.gov.bd grammar pages (404 / 403); the Scribd "Bengali Phonetic Alphabet" guide (page did not load); the Microsoft Bengali style guide (not located); a Dhaka Tribune piece on translating from Bengali (403).
- **Small or indirect studies.** H&A 2023 is one university, English majors, and three of its percentages disagree with its counts. Arafath 2010 is a 15-gap test. Saleheen 2015 gives examples, not rates. Islam 2021 gives descriptions, not counts, and its phonetic transcriptions are partly garbled in the PDF. Jakir 2020 measures only aspiration; the other findings quoted from it are its literature review (Hai & Ball, Rahman, Banu, Hoque, Shahidullah were not opened). S&S 2023 is web text, not learners, and its rates are low in absolute terms. Uddin 2024 and Khanum et al. 2026 were read as abstract pages only; Hasan 2024 likewise and it supplied no examples.
- **No fetched source for:** he/she confusion in speech; the করেছি + past-time and ধরে + present mappings (§4.6); question word order; all preposition examples; missing -s after numerals; every calque in the §9 trap table marked PO; the Kolkata table except পানি / জল and the greetings; the exam-culture paragraph; first-syllable stress examples.
- **No accuracy-by-level data** for Bengali speakers on articles, plurals or third-person -s.
- **Pronunciation aid.**
  - No study compares respelling, IPA and no aid for Bengali learners.
  - The key is this profile's design: ঈ / ই and ঊ / উ as long / short, ৌ and েই for the glides, ː after আ, the dotted letters ভ় থ় দ় ঝ়. Only জ় has outside use (Kolkata print), and that claim is the author's knowledge, not a fetched source. The author recalls that the Bangla Academy English–Bengali Dictionary prints pronunciation in Bengali script; its key could not be found online, so nothing here rests on it. **If a native reviewer has the dictionary, align the key with it where they differ.**
  - **Readings to test with native readers:** (1) whether a bare medial consonant is read with অ in ˈটক, ˈকফি and especially after ওয় (ˈওয়ক, ˈওয়টার), where the eye may read *oy*; the fallback is to write these with ো and accept a GOAT / THOUGHT collapse only after w; (2) one-letter words (saw = ˈস): the letter name is *shô*, which invites sh; (3) whether final clusters (ˈডেস্ক, ˈমিল্ক) get an added vowel (r12a: the inherent vowel is usually pronounced after a word-final cluster in native words); the fallback is a visible final hasanta on those words; (4) whether unstressed া is in fact said lightly; (5) whether ৌ is accepted for *go, no, phone* against the familiar গো, নো, ফোন.
  - Rendering not tested on devices: nukta under ভ থ দ ঝ, ZWJ in র‍্য, ZWNJ before ব, ː after া, ˈ inside a word next to a conjunct.
  - The converter is a scratch script, not in the repo. Its 740 / 740 result shows that the rules are complete for zh's symbol set, not that the output is right for learners.
  - Names (rule 10) were not checked against the en-US voice.
- **Learner profile.** EF EPI and IELTS figures are self-selected test-takers. One digit of the Chattogram scores was lost in extraction; the 2026-folder EF sheet conflicts with the 2025 one and was not opened. School years, exam formats and the place of IELTS were not verified from official pages.
- **Interface.** Tab labels were counted, not rendered. The `dLoc()` change is a request, not something this profile did. Whether the engine's other number output (`toLocaleString()` without a locale) can reach Bengali digits was not traced.
- **Normalisation.** Whether any tool in the pipeline normalises text was not found by grep (no `normalize(` call in `tools/content/*.js` or `tools/i18n/`); the recommendation to NFC every bn file is therefore a new step for the lead to accept or reject.
- **Not researched:** speech errors beyond pronunciation; app or self-study research with Bangladeshi adults; Sylheti, Chittagonian and other regional speech; West Bengal learners (who could use this course with the Kolkata notes, the rupee and Indian place names).

## Sources

Opened and used:

- [Hossain & Ashikullah 2023, Error analysis of students' free writing: a case study of Bangladeshi tertiary level EFL learners with a Bengali medium background (ISU Journal of English Studies 1(1))](https://isu.ac.bd/assets/backend/pdf/journal/20240625060039.1%20(7).pdf)
- [Arafath 2010, Identifying the difficulty level of English 'articles' realized by the tertiary level students of Bangladesh (The AUST Journal of Science and Technology 2(1))](https://www.aust.edu/storage/files/lSfhlUyxV08qBgOpE3JbutPNS6RsBlxWlSGY7YAY.pdf)
- [Uddin 2024, The analysis of errors in the use of articles by the Bengali learners of English (IIUC Studies 21(1), repository record)](https://dspace.iiuc.ac.bd/items/61d6dd6e-eb32-439b-9bf5-46c959ae9f6c/full)
- [Saleheen 2015, Errors in writing: identification of problems and need for refinement (Crossings 6, ULAB)](https://deh.ulab.edu.bd/sites/default/files/Saleheen.pdf)
- [Seoane & Suárez-Gómez 2023, A look at the nativization of Bangladeshi English through corpus data (Miscelánea 68)](https://papiro.unizar.es/ojs/index.php/misc/article/download/8760/8355/35379)
- [Islam 2021, Major phonemic problems of Bangladeshi learners of English: reasons behind and solutions (ELT Forum 10(1))](https://distantreader.org/stacks/journals/elt/elt-45061.pdf)
- [Jakir 2020, Pronunciation of the aspirated English sounds by Bangladeshi EFL/ESL learners (Jagannath University Journal of Arts 10(1))](https://jnu.ac.bd/journal/assets/pdf/10_1_250.pdf)
- [Khanum, Ahsan & Hasan 2026, Teaching English pronunciation at the secondary level in the context of Bangladesh (IJELLS 15(4), abstract page)](https://archive.aessweb.com/index.php/5019/article/view/6318)
- [Hasan 2024, Word formation in Bangladeshi English (European Journal of Linguistics 3(4), abstract page)](https://ideas.repec.org/a/bhx/ojtejl/v3y2024i4p53-63id2344.html)
- [EF EPI 2025 fact sheet, Bangladesh](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-bangladesh-english.pdf)
- [IELTS test statistics page](https://ielts.org/researchers/our-research/test-statistics) and its [test taker performance data 2024–2025 (XLSX)](https://ielts.org/cdn/ielts-downloadable-assets/ielts-research/ielts-research-data/ielts-test-taker-performance-data-2024-2025.xlsx)
- [Bengali grammar, English Wikipedia](https://en.wikipedia.org/wiki/Bengali_grammar) (first 100,000 characters)
- [Bengali phonology, English Wikipedia](https://en.wikipedia.org/wiki/Bengali_phonology)
- [Bangladeshi English, English Wikipedia](https://en.wikipedia.org/wiki/Bangladeshi_English)
- [Richard Ishida, Bengali (Bangla) orthography notes, r12a](https://r12a.github.io/scripts/beng/bn.html)
- [Mozilla L10n style guide, Bengali (Bangladesh)](https://mozilla-l10n.github.io/styleguides/bn-BD)

Web pages were read through the fetch tool's summary; PDFs and the IELTS spreadsheet were downloaded by the fetch tool and read as extracted text locally. Internal files reused: `docs/profiles/en-bn.md` (contrastive facts and their sources), `docs/profiles/hi.md`, `docs/profiles/id.md`, `tools/content/zh/PRON-RULES.md`.
