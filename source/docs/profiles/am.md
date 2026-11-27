# Amharic speakers learning English — course profile

Course `am-en`. Audience: adults and older teenagers in Ethiopia who read and write Amharic (in Addis Ababa and the towns most are bilingual or trilingual: Afaan Oromo, Tigrinya, Gurage languages, §5), and Amharic speakers in the diaspora. All explanations, prompts, `why`, `hint`, meanings, deck names and interface text are in **Standard Amharic of Addis Ababa, written in the Ethiopic script (fidel)**, plain Unicode, words split by ordinary spaces; answers and examples are in English. The HTML language tag and the app code are both **`am`** (profile.json `native: "am"`, pack `course-am-en`, interface pack `i18n-am`). Machine-readable twin: `docs/profiles/am.profile.json` (= `tools/content/am/profile.json`).

The course is scaffolded from the **Korean-speakers' course** (`ko-en`: the shared `alphabet` lesson plus the 39 of the brief, 21 decks, standing rule `article-plural`), like te and ur, because Amharic has no article words (§4.1). `parity.js` compares am-en's English side with ko-en's. The reverse course `en-am` is live (`docs/profiles/en-am.md`); this profile keeps its variety, spelling house rules and the Ethiopian-time labels so the two Amharic courses agree.

Evidence labels:
- **[research-backed]**: a study or a primary description that was opened, with its sample.
- **[curriculum convention]**: what Ethiopian schools, style guides, dictionaries or apps do.
- **[practitioner opinion]**: a teacher's, company's or blog's position.
- **[inference]**: this profile's own reasoning (Amharic grammar facts stated from general knowledge of the standard descriptions, Leslau and the Peace Corps manual as cited in en-am.md, are marked this way when no page was opened for them).

Every web source was read through the fetch tool's summary of the page, once. **I am not a native speaker of Amharic and no native speaker will review this before release: every Amharic string in this file and in the course needs a native check** (§11 lists the 22 to check first).

## 1. Summary (10 lines max)

- **Variant and register:** American English (`en-US`, same English strings as `ko-en`); British forms (taught in Ethiopian schools) are never called wrong. Explanations address the learner as **እርስዎ** with the polite verb forms (ይምረጡ, ይጻፉ, ያዳምጡ), which are gender-free; never አንተ / አንቺ to the learner. Grammar terms from Amharic school grammar (ስም, ግስ, ቅጽል, ብዙ ቁጥር), **tense names in English** as Ethiopian English classes teach them.
- **Error evidence:** two contrastive and perception studies on Amharic-L1 students (Gashaw 2014, 2016: 60 students, 42% of minimal-pair answers wrong), a survey of English in Ethiopia (Sharma 2013), an Amharic-L1 composition study (Adera & Taye 2020), an error count of Ethiopian teachers' English (Olana & Teshome 2015, Afaan Oromo L1) and a pronunciation case study in Amhara and Oromia (Ojo & Umera-Okeke).
- **Top zones:** articles (*I am student*, *He is best student*), third-person -s, plurals and uncountables (*furnitures*), verb patterns copied from Amharic object endings (*call to me*, *tell to him*, *let her to come*), questions without the helper verb (*Where you are going?*), the stative continuous (*I am not understanding*), negative concord (*Nobody didn't come*), and sounds: th, v, æ/ʌ/e, short/long vowels, a vowel inserted into clusters, every -s and -ed said as a syllable.
- **Pronunciation aid: required, English respelled in fidel, made only by `tools/content/am/pron_am.js`** from zh-format IPA, checked by `pron_check.js` (§6). Basic block U+1200–137F only; th = ሠ / ዸ, v = ቨ, the 6th order (ሳድስ) always means "no vowel", long vowels and diphthongs end in ይ / ው, ˈ marks stress.
- **Standing rule: `article-plural`**, keywords `አርቲክል|ብዙ\s?ቁጥር|የሚቆጠር|የማይቆጠር`; zero parity cost.
- **Curriculum:** all 40 shared ids kept in order. The Korean-only `konglish` becomes the am-only **`ethiopian-english`** (after `smalltalk`, deck 22); add **`stative-since`** (after `perfect-2`, the hi-en lesson's id and English side); keep ko's own **`articles-3`** (after `passive`, ko-en's English side) because articles are the first zone for Amharic speakers too.
- **`nativeScript`:** `[ሀ-ፚ]` (Ethiopic syllables; not punctuation or Ethiopic digits), as en-am's `targetScript`.
- **Interface:** left to right, Western digits, Gregorian dates; counts as label + Ethiopic preface colon or plain colon («ካርዶች፦ {1}»); language-name slots after a colon; polite forms or nouns on buttons.
- **Biggest gaps:** no native check of any Amharic string; Amharic grammar terms were confirmed for five words only (§3); no rendered screen; the aid's two letters for th (ሠ, ዸ) are a new convention that learners must be taught in the `pron` lesson.

## 2. Variant, register and voice

**Variant: American English.** `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English. Ethiopian schools teach British spelling and use British-based textbooks [curriculum convention, Sharma 2013 describes English as the medium of secondary and higher education]; the course teaches American forms without calling British ones wrong: a card note may say «በእንግሊዝ፦ lift, flat, colour».

**Amharic variety:** Standard Amharic as used in Addis Ababa, the variety en-am teaches (en-am.md §2.1, LDC performer notes citing Hayward & Hayward 1999). Spelling house rules shared with en-am: words split by a space, not ፡; no gemination mark U+135F or any combining mark; homophone letters kept as the word is normally spelled (ሀ ሐ ኀ, ሰ ሠ, አ ዐ, ጸ ፀ are not "corrected"). **One spelling per word** in this course (native check §11): ዓረፍተ ነገር, ሥራ, ትምህርት, እንግሊዝኛ, ኢትዮጵያ, ግስ (not ግሥ), ሰዋስው, ቃላት, ኢሜይል, ሰዓት.

**Register: እርስዎ with the polite verb, never አንተ / አንቺ to the learner** [decision; curriculum convention below].
- What was found: Amharic second person splits by gender (አንተ to a man, አንቺ to a woman) and has a polite form እርስዎ whose verb is the 3rd person plural (ይምረጡ "please choose", ይሞክሩ "please try") (en-am.md §2.3, Peace Corps manual as cited there). Large Amharic software interfaces use the polite or plural ይ-…-ኡ form for instructions (ይግቡ "sign in") [practitioner observation, not opened: native check].
- Reasons: (1) the app cannot know the learner's gender, and the polite form shows none; (2) the app is in the teacher's seat and the learner is often an adult; (3) the form is short enough for buttons.
- **Learner-facing text:** polite imperative (ይምረጡ, ይጻፉ, ያዳምጡ, ይድገሙ, እንደገና ይሞክሩ), or a noun phrase («የእርስዎ ግብ»), or an impersonal sentence («ትምህርቱ ተጠናቋል»). Never the slash form ምረጥ/ምረጪ.
- **Buttons and tabs:** a polite verb where it fits («ይጀምሩ»), otherwise a noun or verbal noun («ቀጣይ», «መልስ», «ክለሳ»). Never the bare masculine imperative (ምረጥ, ጻፍ), which is common in software but addresses a man only.
- **Translations of English examples:** *you* = **አንተ / አንቺ** between friends, family and in texting, chosen by the character's gender in the scene; **እርስዎ** in service, office, email, doctor, stranger and elder scenes. For a generic *you* in a practice prompt, use the polite form. Amharic 1st-person verbs show no gender (እሄዳለሁ), so *I* sentences need no choice.
- **Voice:** a friendly teacher in plain everyday Amharic. Use the English loans educated Addis speakers use (ኢሜይል, ኮምፒውተር, ካርድ, ሆቴል) and plain Amharic for the rest (ትምህርት, ልምምድ, ጥያቄ, መልስ, ስህተት, ምሳሌ). Avoid heavy Ge'ez vocabulary.
- **Never:** አንተ/አንቺ addressed to the learner; mixing እርስዎ and አንተ on one screen; Amharic in Latin letters ("selam"); slang addressed to the learner (ጓዴ, ባለጌ); religious formulas as app chrome (እግዚአብሔር ይመስገን belongs in a dialogue line, not in a toast).
- **Praise:** «ጎበዝ!», «በጣም ጥሩ!», «ትክክል!».
- **Error marks:** ✗ wrong, ✓ right, joined by «ትክክለኛው፦»: `I am student. ✗` «ትክክለኛው፦» `I am a student. ✓`; in lesson HTML use the two-column table the other lessons use.

Three sample sentences in the voice:
- «አማርኛ ውስጥ a ወይም an የሚባል ቃል የለም፤ "ተማሪ ነኝ" ብቻ ነው የምንለው። እንግሊዝኛ ግን ይጠይቃል፦ I am a student።»
- «"አልገባኝም" ለማለት I am not understanding አይባልም። understand ቀጣይ (-ing) አይወስድም፦ I don't understand።»
- «"ደውልልኝ" ውስጥ "-ልኝ" አለ፤ እንግሊዝኛ ግን to አይጨምርም፦ Call me።»

**Typography (one rule set, everywhere):**
- **Script.** Amharic in fidel only; English words in Latin letters (*Present Perfect*, *a*, *the*); never transliterate an English example into fidel outside the `pron` field; never write Amharic in Latin letters.
- **Punctuation** (W3C Ethiopic layout style guide): **።** ends every Amharic sentence, including one that ends in an English word («… ይህ Present Perfect ነው፦ I've lived here።»); **፣** comma, **፤** semicolon, **፦** before a list or an example; **?** and **!** as in English (the old ፧ is not used); no space before ። ፣ ፤ ፦ ? !. A line that is only English (an example row) keeps English punctuation. No terminal punctuation on buttons, labels, tabs or deck names.
- **Quotes:** «…» around Amharic phrases (the W3C guide's preferred marks), ‹…› inside. In lesson HTML English is `<b>`, not quoted; in plain-text fields English stands bare.
- **Digits:** Western digits 0–9 everywhere (W3C: Western digits for quantities and calculation); never Ethiopic numerals (U+1369–137C).
- **Spaces:** one space between Amharic and a Latin word or a number (`a ይጨመራል`, `ትምህርት 3`); prefixes stay joined to their word (በእንግሊዝኛ, ለእርስዎ, የቤቱ).
- **Do not attach Amharic endings to Latin words** (no «a-ን», «the-ው»): rephrase («a የሚለውን ቃል»). Do not add English plural -s to Amharic words.
- **Alternatives:** ` / ` with spaces.
- **NFC; no ZWJ/ZWNJ; no combining marks U+135D–135F; no ፡ as a word space.**

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and the interface. Sources: the five part-of-speech labels ስም, ግስ, ቅጽል, ተውሳከ ግስ, መስተዋድድ are printed as grammar labels in NTNU LearnNoW's Ethiopic-script vocabulary pages (Tigrinya, which shares the Ge'ez grammar tradition) [curriculum convention, opened]; the rest are the terms of Amharic school grammar from general knowledge [inference]. **All need a native check (§11).** Tense names stay in English, glossed once per lesson.

| English term | Amharic term (use this) | Note |
|---|---|---|
| article | አርቲክል | The classroom loan. **Standing-rule keyword.** Gloss once: «a, an, the የሚባሉት ትናንሽ ቃላት» |
| a / an · the | a / an · the | Name the word: «አርቲክል a», «አርቲክል the» |
| definite / indefinite | ውስን / ውስን ያልሆነ | Contrast with Amharic -ው / -ዋ / -ቱ (ቤቱ "the house") |
| noun | ስም | |
| countable / uncountable noun | የሚቆጠር ስም / የማይቆጠር ስም | **Standing-rule keywords** |
| singular / plural | ነጠላ ቁጥር / ብዙ ቁጥር | **Standing-rule keyword ብዙ ቁጥር** (with the space) |
| pronoun | ተውላጠ ስም | In `why` name the word (he, she, it) |
| subject / object | ባለቤት / ተሳቢ | Amharic school grammar |
| possessive ('s, my) | ባለቤትነት ('s) | «የሰላም መጽሐፍ = Selam's book» |
| verb | ግስ | |
| be verb | be (am / is / are) | Contrast with ነው / ነኝ / ነህ: «be = ነው» |
| helping verb (auxiliary) | አጋዥ ግስ (helping verb) | do / does / did, have, will |
| modal verb | can, should … (modal) | Name the word |
| he / she / it -s | የ he / she / it -s | Not a long grammar label in `why` |
| verb forms | 1ኛ / 2ኛ / 3ኛ ቅርጽ (go / went / gone) | Ethiopian classes drill the three forms [practitioner opinion] |
| -ing form | -ing ቅርጽ | |
| regular / irregular verb | መደበኛ / መደበኛ ያልሆነ ግስ | |
| tense | ጊዜ (tense) | Names stay in English |
| present simple | Simple Present (የአሁን ጊዜ) | Gloss once per lesson |
| present continuous | Present Continuous (እየ- …) | Contrast with Amharic እየሄድኩ ነው |
| past simple | Simple Past (ኃላፊ ጊዜ) | |
| future | will / going to (የወደፊት ጊዜ) | |
| present perfect | Present Perfect | Contrast with Amharic ሄዷል / በልቻለሁ |
| past perfect | Past Perfect | |
| stative verb | ሁኔታ የሚገልጽ ግስ (stative verb) | know, want, understand, like |
| passive / active | Passive (ተገብሮ) / Active (ገቢር) | Traditional Amharic terms; native check |
| reported speech | Reported Speech (የተዘዋዋሪ ንግግር) | |
| conditional | if ያለበት ዓረፍተ ነገር (conditional) | |
| relative clause | who / which / that ያለበት ክፍል | Contrast: Amharic የ- / ያ- comes before the noun (የመጣው ሰው), English who after it |
| infinitive / gerund | to + ግስ / -ing ቅርጽ | |
| preposition | መስተዋድድ (preposition) | Contrast with Amharic በ- ከ- ለ- … ላይ / ውስጥ |
| conjunction | መስተጻምር (and, but, because) | |
| adjective / adverb | ቅጽል / ተውሳከ ግስ | |
| comparative / superlative | Comparative / Superlative (-er / -est) | |
| question word | የጥያቄ ቃል (what, where …) | |
| yes/no question | አዎ / አይ የሚመለስ ጥያቄ | |
| question tag | question tag («አይደል?») | |
| negative / affirmative | አሉታዊ / አዎንታዊ | |
| sentence / word order | ዓረፍተ ነገር / የቃላት ቅደም ተከተል | |
| phrasal verb | ሐረጋዊ ግስ (phrasal verb) | Deck 17 |
| idiom | ፈሊጥ | Deck 19 |
| Ethiopian English | ኢትዮጵያዊ እንግሊዝኛ | Deck 22; never «የተበላሸ እንግሊዝኛ» |
| pronunciation | አጠራር | Deck 18 and the toggle «አጠራር አሳይ» |
| pronunciation aid (respelling) | የአጠራር መርጃ | the `pron` field |
| stress | ጫና (stress) | ˈ = «የጫና ምልክት» |
| vowel / consonant | አናባቢ / ተነባቢ | |
| syllable | ክፍለ ቃል | |
| fidel orders | ግዕዝ, ካዕብ, ሣልስ, ራብዕ, ኃምስ, ሳድስ, ሳብዕ | Taught in Ethiopian primary school; used in the `pron` lesson key |
| letter / alphabet (English) | ፊደል / ፊደላት | «የእንግሊዝኛ ፊደላት» (deck 21) |
| capital / small letter | ትልቅ ፊደል / ትንሽ ፊደል | fidel has no case |
| lesson | ትምህርት; tab «ትምህርቶች» | UI |
| practice (set) | ልምምድ | UI |
| review (SRS) | ክለሳ | UI |
| deck / card | ስብስብ / ካርድ | UI: «የካርድ ስብስብ» where it fits |
| streak | ተከታታይ ቀናት | UI; count «ተከታታይ ቀናት፦ {1}» |
| hint | ፍንጭ | UI |
| check (3-question quiz) | አጭር ፈተና; button «ያረጋግጡ» | UI |
| correct / incorrect | «ትክክል!» / «ስህተት» | UI |
| answer / explanation | መልስ / ማብራሪያ | `why` shows under «ማብራሪያ» |
| level / XP | ደረጃ / XP | |
| progress / feedback | እድገት / አስተያየት | UI |
| settings / sign in / sync | ቅንብሮች / ይግቡ / ማመሳሰል | UI; native check |

**Level titles (course meta.js TITLES and the interface ladder, the same seven in both):** ጀማሪ, ተማሪ, ተጫዋች, መንገደኛ, ነዋሪ, ባለሙያ, ሊቅ (Beginner, Student, Chatterbox, Traveller, Local, Expert, Master). Native check.

## 4. Persistent error zones

Ranked by evidence × frequency × how often the point recurs in the course; **the ranking is this profile's inference**. Format: ✗ → ✓. The "Why" lines (the Amharic contrast) are [inference] unless a source is named.

**Opened evidence:**
- **Gashaw 2014**, "Potential Problematic Areas of English Pronunciation for Amharic Native Learners", Ethiopian Journal of Education 34(1): contrastive analysis, no learner sample; predicts problems with æ ɒ ʌ, length, diphthongs, v→b, θ ð → s z, initial and final clusters (epenthesis: *plan* /pɨlan/), penultimate stress, syllable timing, narrow pitch [research-backed, prediction].
- **Gashaw 2016**, "Perceptions of English Segmental Phonemes by Ethiopian EFL Learners Speaking Amharic as a First Language", EJLCC 1(1): **60 Amharic-L1 undergraduates, 42 minimal pairs, 2,520 answers, 42% wrong**; consonants about 51% wrong (final ð about 60%, *close/clothe* 70%, *mouse/mouth* 65%), long vowels about 48% (*wood/wooed* 75%, *cord/cod* 63%), short vowels about 36% (*flush/flash* 75%, *fan/fun* 68%, *pack/peck* 50%), diphthongs about 34% (*boat/bought* 77%, *pie/pay* 58%) [research-backed].
- **Sharma 2013**, "English in Ethiopia", STAR Journal 2(1): descriptive survey with examples: *I am student*; *furnitures, luggages, equipments*; *I am not understanding*; *I go to home*; *Where are you go?*; *he called to me, please tell to him, let her to come* (from Amharic ደውሎልኛል-type object endings); *Happy night*, *No matter* (= no problem), *class* = room, kinship address; epenthesis (*sporti*), equal stress, -s and -ed endings, length levelled (*kill/keel*), spelling pronunciation [research-backed, descriptive, no counts].
- **Adera & Taye 2020**, Ethiopian Journal of Social and Language Studies 7(2): **25 compositions of Amharic-L1 first-year students** (Jimma University), all with Amharic interference: *I passed to Jimma University*, *Jimma is best country*, *I learned Tigrabado primary school*; instructors report *I entered this department*, *I made my homework* [research-backed, no counts per category].
- **Olana & Teshome 2015**, STAR Journal 4(4): **16 EFL teachers in East Wollega, Afaan Oromo L1** (not Amharic): 380 written errors (agreement 10.0%, articles 9.2%, number 8.4%, tense 7.4%, prepositions 6.3%, word order 2.6%: *How we can stop smoking?*), 360 oral (pronunciation 26.7%, articles 8.9%, prepositions 7.8%: *teaching since 8 years*, *I'll borrow you my pen*) [research-backed; used for the Ethiopian school-English context only, the L1 differs].
- **Ojo & Umera-Okeke**, "English Pronunciation Errors: A Case Study of Amhara and Oromia Regions" (Bahir Dar and Haramaya universities; observation, no counts): /ɪ/ inserted before plural -s (*students* /stju:dentɪs/), every -ed as /ed/ (*asked*), /z/ for θ and ð (*then*), final /g/ after /ŋ/ (*sing*), r in every position, silent letters pronounced [research-backed, observational].
- **BoldVoice** blog on Amharic speakers: th, v/w swaps, /æ/ and /ɪ/ missing, final-syllable stress [practitioner opinion].

| # | Zone | ✗ → ✓ | Why (contrast) | Evidence | Lessons |
|---|---|---|---|---|---|
| 1 | Articles dropped, the over- and under-used | *I am student.* → *I am a student.* · *He is best student.* → *He is the best student.* · *I live in the Addis Ababa.* → *in Addis Ababa* | Amharic has no word for a/an (አንድ "one" is optional) and marks "the" with an ending on the noun (ቤቱ, ልጅቷ) that is used more often than English *the*, including with names of things already known | Sharma; Adera & Taye; Olana 9% | articles, the, articles-2, articles-3, countable, every set (standing rule) |
| 2 | he / she / it -s, agreement | *My brother live in Hawassa.* → *lives* | Amharic verbs agree with everyone through endings; English marks only he/she/it, so the one ending is easy to forget | Olana 10% / 7.8% (Oromo L1) | present, third-s, questions, be |
| 3 | Plurals and uncountables | *two book* → *two books* · *furnitures* → *furniture* · *many informations* → *a lot of information* | Amharic plural -ኦች is optional after a number (ሁለት ልጅ) | Sharma; Olana 8.4% | plurals, countable, object-have |
| 4 | Verb patterns from object endings | *He called to me.* → *He called me.* · *Tell to him.* → *Tell him.* · *Let her to come.* → *Let her come.* | Amharic puts "to me / to him" inside the verb (ደውሎልኛል, ንገረው); learners add *to* | Sharma | prep, to-ing, polite, phrasal, ethiopian-english |
| 5 | Questions without the helper verb or inversion | *Where you are going?* / *Where are you go?* → *Where are you going?* · *How we can stop it?* → *How can we stop it?* | Amharic asks with the question word before the verb and no change of order (የት ትሄዳለህ?) | Sharma; Olana | questions, be, can-like, perfect, smalltalk |
| 6 | Continuous with states | *I am not understanding.* → *I don't understand.* · *I am knowing him.* → *I know him.* | Amharic እየ- … ነው is used more widely than the English -ing | Sharma | continuous, stative-since |
| 7 | Present perfect vs past; since / for | *I have seen him yesterday.* → *I saw him yesterday.* · *I live here since 2015.* → *I've lived here since 2015.* · *since 8 years* → *for 8 years* | Amharic ሄዷል-type forms ("has gone") do not block a past time word | Olana (Oromo L1) [inference for Amharic] | past, perfect, perfect-2, stative-since, tense |
| 8 | Negative concord | *Nobody didn't come.* → *Nobody came.* · *I don't have no money.* → *I don't have any money.* | Amharic needs a negative verb with ማንም / ምንም (ማንም አልመጣም) | Olana (*I do not have no idea*) [inference for Amharic] | present, polite, numbers (any/no) |
| 9 | Dropped subject and dummy it / there | *Is raining.* → *It's raining.* · *Is good.* → *It's good.* · *Have many people.* → *There are many people.* | Amharic verbs carry the subject; no dummy subject (ዝናብ እየዘነበ ነው) | [inference] | it-there, be, will |
| 10 | Prepositions | *in the morning / at night / on Monday* mixed · *go to home* → *go home* | Amharic uses በ- for in, on and at alike, plus ላይ / ውስጥ after the noun | Sharma (*go to home*); Olana 6–8% | prep, numbers |
| 11 | Word choice and collocations | *make homework* → *do homework* · *I passed to university* → *I got into university* · *borrow me your pen* → *lend me your pen* · *open the light* (unverified) | Amharic verb meanings mapped one to one | Adera & Taye; Olana | ethiopian-english, phrasal, email |
| 12 | Relative clauses | *the people which use* → *who use* · *the yesterday came man* (rare) | Amharic relative is a prefix before the verb and the clause stands before the noun | Olana 3.2% | relative |
| 13 | Sounds | th → s/z or t/d; v → b; *fan/fun*, *pack/peck*, *boat/bought*; *ship/sheep*; *school* → ɨskul, *plan* → pɨlan; *students* → stjuːdentɪs; *asked* → askéd; *sing* → sing-g; stress on the last syllable; every syllable equally strong | Amharic has 7 vowels, no θ ð, v only in loans, no length contrast in vowels, no initial clusters | Gashaw 2014, 2016; Ojo & Umera-Okeke; Sharma; BoldVoice | pron, deck 18, alphabet |
| 14 | Time and calendar | *I'll come at two.* (meaning 8 a.m., Ethiopian time) | Ethiopian time counts hours from 6 a.m. (ሀበሻ ሰዓት vs ፈረንጅ ሰዓት, en-am.md §3); the calendar is 7–8 years behind | [curriculum convention via en-am.md] | numbers, prep |
| 15 | Address and politeness | *Give me water.* → *Can I have some water, please?* · calling strangers *father / mother / brother* | Amharic politeness lives in the verb form (እርስዎ), English in please / could / would; kin terms as address | Sharma (kin terms) | polite, greetings deck, email |

## 5. Learner starting point

- Ethiopian schools teach English as a subject from grade 1 and use it as the medium of instruction in secondary school and university (Sharma 2013) [research-backed, descriptive]. Most adult learners have read English for years but have heard little native speech: listening and pronunciation are weaker than reading (Gashaw 2016: no participant had real exposure to native speakers).
- Learners read the Latin alphabet already; the first lesson is the shared `alphabet` lesson (standing rule, §7): what is different from fidel (letters, not syllables; separate vowel letters; capitals; silent letters; letter names that differ from sounds).
- Many learners speak Afaan Oromo, Tigrinya or a Gurage language at home and Amharic as the national language. Explanations are in Amharic only; nothing assumes Amharic is the home language.
- Expect British spelling and textbook phrasing (*I'm fine, thank you*); the course says what Americans say, without ✗.

## 6. Pronunciation aid policy

**Decision: `pron: "required"`. Every card and `{{ex:English|pron|meaning}}` row carries English respelled in fidel, produced only by `node tools/content/am/pron_am.js "/ipa/"` (or pasted from `tools/content/am/pron_lookup.json`), checked by `node tools/content/am/pron_check.js`.** No aid is typed by hand. `pronPattern` (profile.json) admits only the letters the tool can produce, ˈ, single spaces, ". " and " / ".

Why fidel and not IPA: Amharic learners read fidel fluently and IPA not at all; Ethiopians already respell English loans in fidel (ኮምፒውተር, ቴሌቪዥን, ፕላስቲክ), so the aid looks familiar [inference]. Why a tool: a fidel respelling made by hand writes the learner's errors into it (ስኩል for *school* invites ɨskul; ዚስ for *this* is the z error itself), and three writers would disagree.

### 6.1 What fidel can and cannot show
- A fidel letter is a consonant plus one of seven vowel orders (ግዕዝ ä, ካዕብ u, ሣልስ i, ራብዕ a, ኃምስ e, ሳድስ ɨ or nothing, ሳብዕ o). In normal Amharic the 6th order is either ɨ or no vowel and the spelling does not say which (en-am.md §6.1, BGN/PCGN).
- Amharic has no letters for θ, ð, æ, ʌ-vs-ə, and no long vowels; it has ቨ for v in loans; it has no letter for ŋ.

### 6.2 The key (the tool's only table)
| English sound (IPA) | Fidel | Example |
|---|---|---|
| ʌ ə ɜː | 1st order (ግዕዝ) | cup ከፕ · about ኧˈባውት · bird በርድ |
| ʊ u | 2nd order (ካዕብ) | book ቡክ · full ፉል |
| uː | 2nd order + ው | food ፉውድ · fool ፉውል |
| ɪ i | 3rd order (ሣልስ) | sit ሲት · ship ሺፕ |
| iː | 3rd order + ይ | seat ሲይት · sheep ሺይፕ |
| æ ɑː | 4th order (ራብዕ) | cat ካት · hot ሃት · car ካር |
| aɪ / aʊ | 4th order + ይ / ው | time ታይም · now ናው |
| e | 5th order (ኃምስ) | bed ቤድ |
| eɪ | 5th order + ይ | cake ኬይክ |
| ɔː | 7th order (ሳብዕ) | talk ቶክ · bought ቦት |
| oʊ / ɔɪ | 7th order + ው / ይ | go ጎው · boat ቦውት · boy ቦይ |
| no vowel | **6th order (ሳድስ), always** | school ስኩውል · texts ቴክስትስ · asked አስክት |
| θ / ð | **ሠ series / ዸ series** | think ሢንክ · three ሥሪይ · this ዺስ · mother ˈመዸር |
| v / w | ቨ series / ወ series | very ˈቬሪ · wine ዋይን · vine ቫይን |
| p b t d k g f s z | ፐ በ ተ ደ ከ ገ ፈ ሰ ዘ | |
| ʃ ʒ tʃ dʒ | ሸ ዠ ቸ ጀ | television ˈቴለቪዥን |
| h | ሀ series; with ʌ/ə the letter ኸ | hat ሃት · hut ኸት · hello ኸˈሎው |
| m n l r j | መ ነ ለ ረ የ | |
| ŋ | ን (always 6th order; no g added) | think ሢንክ · singing ˈሲንኢን |
| vowel with no consonant before it | አ series; ኧ for ʌ/ə; አ for æ/ɑː | up ኧፕ · apple ˈአፕል · ever ˈኤቨር |
| stress | ˈ before the stressed syllable, on every word of 2+ syllables only | photography ፈˈታግረፊ |
| sentence break / alternatives | ". " / " / " | See you tomorrow. Take care. ሲይ ዩ ተˈማሮው. ቴይክ ኬር |

### 6.3 The decisions behind the key (and how sounds Amharic lacks are written)
1. **The 6th order (ሳድስ) never stands for ɨ in this aid.** It always means a bare consonant, the job Telugu's pollu does. English ɪ is the 3rd order. This is what lets the aid show *school*, *street*, *texts*, *asked*, *students* with no inserted vowel (zone 13). The `pron` lesson states it in one line: «በዚህ መርጃ ሳድስ ሁልጊዜ ያለ አናባቢ ይነበባል».
2. **θ = ሠ series, ð = ዸ series.** ሠ (the "second s", in ሥራ, ሠላሳ) is a letter every reader knows and says as s, the sound learners put in for θ (Gashaw 2016) — so the aid shows "an s that is not ሰ". ዸ (DDA, U+12F8–U+12FE) is ደ with a bar: a reader who has not met it still guesses "a kind of d", and the lesson teaches it as the voiced th. Both are base letters of the basic block (no combining mark), unlike Telugu's nukta, so nothing is stacked on a letter. **Font risk, §11:** ዸ is rare in Amharic text; the lead confirms it renders on Android (Noto Sans Ethiopic), iOS/macOS (Kefa) and Windows (Nyala/Ebrima). If it does not, the fallback is mechanical: switch ð to the ዘ series in `SERIES` and rebuild (`--lookup`); no hand edits.
3. **v = ቨ series** (ቪዲዮ, ቫይረስ are ordinary Amharic loans), never በ.
4. **æ and ɑː share the 4th order (ራብዕ).** This is the Amharic loan spelling (ባንክ bank, ታክሲ taxi) and the closest Amharic vowel to both; *hat / hot*, *cap / cop* share a respelling. The aid keeps apart what learners confuse most in Gashaw's data: *fan / fun* (ፋን / ፈን), *pack / peck* (ፓክ / ፔክ). The `pron` lesson and deck 18 teach æ with audio ("open your mouth wider than for ኤ").
5. **Vowel length and diphthongs: a glide letter.** iː uː eɪ oʊ aɪ aʊ ɔɪ end in ይ or ው (ሲይት, ፉውድ, ኬይክ, ቦውት). This is close to how English says them ([ij], [uw], [ej], [ow]), uses only ordinary letters, and keeps *ship / sheep*, *full / fool*, *boat / bought*, *wood / wooed* apart (Gashaw 2016: 48% errors on long vowels). Before another vowel the glide carries it: going ˈጎዊን, idea አይˈዲየ.
6. **Final consonant clusters** are a row of 6th-order letters: texts ቴክስትስ, asked አስክት, students ˈስቱውድንትስ. No vowel letter is ever inserted. The -s and -ed endings are therefore shown exactly as said (zone 13).
7. **ŋ = ን**, with no ግ, because "sing-g" is a documented error (Ojo & Umera-Okeke). A vowel after ŋ is written on its own (ˈሲንኢን), never on ን.
8. **h with ʌ/ə is ኸ**, because Amharic reads ሀ (1st order) as "ha" (en-am.md §6.2: the laryngeal 1st order merges with a). For the same reason a word-initial ʌ/ə is ኧ, not አ (which Amharic reads "a").
9. **ˈ is on every word of two or more syllables and on no one-syllable word**; ˌ is dropped (te's amended rule 2). Amharic speakers stress the last or penultimate syllable (Gashaw 2014; BoldVoice), so the mark is worth its space.
10. **Only the basic Ethiopic block U+1200–U+137F.** The tool refuses anything else; `pron_check.js` reports BANNED for ፡ ። ፣, combining marks U+135D–135F, Latin, digits and every letter the tool does not produce. Letters used: the 7 orders of ሀ ለ መ ሠ ረ ሰ ሸ በ ቨ ተ ቸ ነ አ ከ ኸ ወ ዘ ዠ የ ደ ዸ ጀ ገ ፈ ፐ, plus ኧ (U+12A7). All are in U+1200–U+137F.
11. **Weak forms and numbers** follow the IPA the writer gives (zh conventions: *to* tə, *are* ər, *from* frəm, strong forms when stranded or stressed; numbers as words).

### 6.4 The tool
- `node tools/content/am/pron_am.js "/aɪ ˈlaɪk ˈkɔːfi/"` → አይ ላይክ ˈኮፊ. Several arguments convert several strings.
- `--selftest` checks 36 worked pairs, 13 bad inputs (British diphthongs, ɡ U+0261, ɒ, ɜ without ː, text outside slashes, dangling or doubled ˈ, capitals, digits) and the 40 sample rows of §6.7. Run it after any change to the tool.
- `--pattern` prints the `pronPattern` profile.json carries. `--lookup` rebuilds `pron_lookup.json` from `ipa_seed.json` (this course's own IPA: greetings, every localised string and name, the sample) and then from every IPA pron in the finished Chinese course (`tools/content/zh/`), so that a string already in the course has one agreed aid. `--lookup --seed-only` skips zh.
- `pron_check.js [summary|all] [--strict]`: SCAFFOLD, PATTERN, BANNED, DIFF (a lookup string with another aid), CONFLICT, WORD, PROSE.
- Practice items carry no aid. Card notes and lesson prose may quote a respelling only if it comes from the tool (PROSE check).

### 6.5 Hand cases the writers must watch
- **Names and places** (§9): use the seed's IPA (`ipa_seed.json`); one reading per name in the whole pack. Starting points, NOT checked against the en-US voice: Selam /ˈselɑːm/ ˈሴላም, Dawit /ˈdɑːwɪt/ ˈዳዊት, Hana /ˈhɑːnə/ ˈሃነ, Haile /ˈhaɪli/ ˈሃይሊ, Ethiopia /iːθiˈoʊpiə/ ኢይሢˈኦውፒኧ, Amharic /æmˈhærɪk/ አምˈሃሪክ, Addis Ababa /ˈædɪs ˈæbəbə/ ˈአዲስ ˈአበበ, Hawassa /həˈwɑːsə/ ኸˈዋሰ, Lalibela /lɑːliˈbelə/ ላሊˈቤለ, Adama /əˈdɑːmə/ ኧˈዳመ, Bahir Dar, Gondar, injera /ɪnˈdʒerə/ ኢንˈጄረ, birr /bɪr/ ቢር, Teddy Afro /ˈtedi ˈæfroʊ/ ˈቴዲ ˈአፍሮው.
- **Weak / strong forms:** write the IPA the voice says; the tool cannot guess.
- **A string with two IPA forms** (record the noun / to record the verb): keep the English strings different so lint sees two strings.

### 6.6 Meaning side vs aid
The meaning, notes and prose spell Amharic words and Ethiopian names the Amharic way (ሰላም, አዲስ አበባ, እንጀራ, ብር); only the `pron` field carries the respelling of the English.

### 6.7 Tool output for 40 words and sentences (`node tools/content/am/pron_am.js --sample`)
| English | IPA (zh conventions) | aid |
|---|---|---|
| think | `/θɪŋk/` | ሢንክ |
| this | `/ðɪs/` | ዺስ |
| three | `/θriː/` | ሥሪይ |
| mother | `/ˈmʌðər/` | ˈመዸር |
| with | `/wɪð/` | ዊዽ |
| very | `/ˈveri/` | ˈቬሪ |
| wine | `/waɪn/` | ዋይን |
| vine | `/vaɪn/` | ቫይን |
| ship | `/ʃɪp/` | ሺፕ |
| sheep | `/ʃiːp/` | ሺይፕ |
| full | `/fʊl/` | ፉል |
| fool | `/fuːl/` | ፉውል |
| cat | `/kæt/` | ካት |
| cut | `/kʌt/` | ከት |
| hot | `/hɑːt/` | ሃት |
| boat | `/boʊt/` | ቦውት |
| bought | `/bɔːt/` | ቦት |
| school | `/skuːl/` | ስኩውል |
| street | `/striːt/` | ስትሪይት |
| texts | `/teksts/` | ቴክስትስ |
| asked | `/æskt/` | አስክት |
| students | `/ˈstuːdnts/` | ˈስቱውድንትስ |
| singing | `/ˈsɪŋɪŋ/` | ˈሲንኢን |
| photograph | `/ˈfoʊtəgræf/` | ˈፎውተግራፍ |
| photography | `/fəˈtɑːgrəfi/` | ፈˈታግረፊ |
| usually | `/ˈjuːʒuəli/` | ˈዩውዡኧሊ |
| television | `/ˈteləvɪʒn/` | ˈቴለቪዥን |
| Hello. | `/həˈloʊ/` | ኸˈሎው |
| How are you? | `/haʊ ər ju/` | ሃው ኧር ዩ |
| I'm a student. | `/aɪm ə ˈstuːdnt/` | አይም ኧ ˈስቱውድንት |
| Thank you very much. | `/ˈθæŋk ju ˈveri ˈmʌtʃ/` | ሣንክ ዩ ˈቬሪ መች |
| Where are you from? | `/wer ər ju frʌm/` | ዌር ኧር ዩ ፍረም |
| I live in Addis Ababa. | `/aɪ ˈlɪv ɪn ˈædɪs ˈæbəbə/` | አይ ሊቭ ኢን ˈአዲስ ˈአበበ |
| My name is Selam. | `/maɪ ˈneɪm ɪz ˈselɑːm/` | ማይ ኔይም ኢዝ ˈሴላም |
| I'd like a cup of coffee. | `/aɪd ˈlaɪk ə ˈkʌp əv ˈkɔːfi/` | አይድ ላይክ ኧ ከፕ ኧቭ ˈኮፊ |
| Have you ever eaten injera? | `/həv ju ˈevər ˈiːtn ɪnˈdʒerə/` | ኸቭ ዩ ˈኤቨር ˈኢይትን ኢንˈጄረ |
| It costs fifty birr. | `/ɪt ˈkɔːsts ˈfɪfti ˈbɪr/` | ኢት ኮስትስ ˈፊፍቲ ቢር |
| What's the weather like? | `/wʌts ðə ˈweðər laɪk/` | ወትስ ዸ ˈዌዸር ላይክ |
| They threw it away. | `/ðeɪ ˈθruː ɪt əˈweɪ/` | ዼይ ሥሩው ኢት ኧˈዌይ |
| See you tomorrow. Take care. | `/ˈsiː ju təˈmɑːroʊ ‖ teɪk ˈker/` | ሲይ ዩ ተˈማሮው. ቴይክ ኬር |

Known weak spots, for the native check: ኢይ- at a word start (eaten ˈኢይትን) may read as two syllables; ኧ is less familiar than አ; a reader may still insert ɨ into a long run of 6th-order letters — the `pron` lesson must say the rule twice.

## 7. Standing practice rule

**Owner's standing rule (2026-11-25):** the course opens with its writing-system foundation — for an X-en course, ONE lesson: the shared `alphabet` lesson (lesson 1, `docs/briefs/alphabet-spec.md`, letter tiles and its own flashcards, deck 21), followed by `pron` — and the flashcards after each section of every lesson are what that section teaches (section matching, done later by the dispatcher). `am-en` must be added to the X-en list in `tools/tests/foundations.js` (dispatcher).

**Practice rule: `article-plural`**, as ko, zh, te and ur: in every lesson, at least half of the order items and half of the type items hinge on a / an / the or a plural -s, and their `why` contains a keyword. **Keywords (no flags):** `አርቲክል|ብዙ\s?ቁጥር|የሚቆጠር|የማይቆጠር`. Writers write «አርቲክል a», «አርቲክል the», «ብዙ ቁጥር -s», «የሚቆጠር ስም», «የማይቆጠር ስም» in the `why`. Zero parity cost: the English side of every shared set already meets the rule.

Reason: articles are zone 1 (§4) and plural/uncountable zone 3, both in every Ethiopian error source opened; Amharic's definite ending makes *the* a constant decision for the learner.

## 8. Curriculum deviations from the Korean-speaker course

All 40 shared lessons kept, ids and order unchanged. Three extra lessons:

| id | where | English side | why |
|---|---|---|---|
| `ethiopian-english` | after `smalltalk` (replaces the scaffold's Korean-only `konglish`; the lead already renamed its id in `more/a1.js`) | **new**, written by CONTENT-C; every English sentence listed for the reviewer | Zones 4, 11, 15 and Sharma's Ethiopian English list. Three groups: (1) fine in Ethiopia, say this abroad: *Happy night* → *Good night*, *No matter* → *No problem*, *class* = room → *a two-bedroom apartment*, *brother / sister* for friends, *father / mother* for elders → *sir / ma'am*; (2) copied from Amharic: *He called to me* → *He called me*, *Tell to him* → *Tell him*, *Let her to come* → *Let her come*, *I passed to university* → *I got into university*, *I made my homework* → *I did my homework*, *I go to home* → *I go home*, *history of my life* → *my life story*; (3) wrong everywhere: *I am not understanding* → *I don't understand*, *furnitures* → *furniture*, *He is best student* → *He is the best student*, *Where are you go?* → *Where are you going?*, *Borrow me your pen* → *Lend me your pen*. Present group 1 as "fine at home, say this abroad", never as shameful. Deck 22 |
| `stative-since` | after `perfect-2` | the hi-en lesson of the same id (`tools/content/hi/more/*.js`), unchanged | Zones 6 and 7 (*I am not understanding*, *since 8 years*); ur-en made the same choice |
| `articles-3` | after `passive` | ko-en's own lesson (already in the scaffold's `more/b1.js`), unchanged | Zone 1 is the first zone; the Amharic definite ending gives a ready contrast (ቤቱ = the house; Amharic generic nouns take no ending: ሕይወት አጭር ናት = *Life is short*) |

All three: lesson-level deviation + `extraLessons` (the lead's `deviations.p.json` already lists them).

**Per-lesson notes (what to say to an Amharic speaker):**
- `alphabet`: Latin letters vs fidel: 26 letters, not ~230 syllables; vowels are their own letters; capitals; a letter's name is not its sound; silent letters (*know*, *write*) against Amharic's "say every letter" (zone 13). Keep the shared English rows and checks exactly (alphabet_check.js).
- `pron`: the aid's key (§6.2) with the traditional order names; the 6th-order rule; ሠ / ዸ for th; v ቨ vs b; -s and -ed endings; no vowel before s-clusters; stress.
- `articles`, `the`, `articles-2`, `articles-3`: contrast with -ው / -ዋ / -ቱ and with አንድ; *the* for the known thing, a/an for one of many; names of cities and countries without *the*.
- `be`: Amharic ነው / ነኝ / ነህ never drops, so *be* is not missing; the trap is *be* + verb (*I am live*), and dropped subjects (*Is good*).
- `it-there`: Amharic has no dummy subject (zone 9).
- `present`, `third-s`: one ending for he/she/it only.
- `questions`: helper verb first, the question word does not stay before the verb (zone 5).
- `prep`: one Amharic በ- for in / on / at; *go home*, *at home*.
- `polite`: please, could, would carry what እርስዎ carries.
- `continuous`: not with know, want, understand, like (zone 6).
- `numbers`: Ethiopian time ↔ English time (*7 a.m.* = ጠዋት 1 ሰዓት ሀበሻ); Gregorian dates in English; *fifty thousand birr* (no -s on thousand).
- `perfect`, `perfect-2`: no past time word with the Present Perfect.
- `relative`: who / which / that after the noun, not before (zone 12).
- `email`: *Dear Mr. Haile*, not *Dear Ato Haile* in international mail; Ethiopian office formulas.

## 9. Vocabulary and cultural notes

**Localisation map (binding for every writer; English-side changes are recorded by the lead in `tools/content/am/deviations.p.json`):**

| Korean setting | am-en | notes |
|---|---|---|
| Minji (woman) | **Selam** | also the dialogue friend; man: **Dawit**; another woman: **Hana** |
| Mr. Kim / under Kim | **Mr. Haile** / under Haile | surname use only in work, phone and hotel scenes |
| Korea (home) | **Ethiopia** | articles-2#1 distractors become *the Ethiopia*, *an Ethiopia* |
| Korea (abroad, been to / visited twice) | **Kenya** | perfect#6, perfect#10 |
| made in Korea | **made in Ethiopia** (passive#1, #8) · *This phone was made in China* (passive#check1) | |
| Korean (language) | **Amharic** for the learner's language; **Japanese** in relative#12 | can-like#0 → *He can speak Amharic.* |
| Seoul | **Addis Ababa** | in the order item be#5 the tile is the single word **Adama** (no two-word tile) |
| Busan | **Hawassa** | |
| Jeju | **Lalibela** | |
| Daegu | **Adama** | phrasal#2 *I grew up in Adama.* |
| kimchi | **injera** | |
| won | **birr** | *That's fifty thousand birr.* |
| K-pop | **football** | be#check0 *I like football.* |
| BTS / Jimin | **Teddy Afro** | extra.js dialogue (CONTENT-A) |
| Han Kang | **Haddis Alemayehu** | passive#10 *It was written by Haddis Alemayehu.* (native and voice check) |
| "speak of the tiger" | distractor **ghost** | idioms#9 |
| 수고하셨습니다 calques | *Thanks for your hard works!* / *You did a hard work.* | email#check1 distractors (uncountable *work*, zone 3) |
| "Who's your bias?" | **Who's your favorite singer?** | deck 20 card 14 |
| Korean embassy | **the Ethiopian embassy** | deck 16 card 15 |

Other Ethiopian anchors writers may use in Amharic text and new English (ethiopian-english, notes): coffee ceremony (ቡና), Meskel, Timkat, Genna, Enkutatash (new year, September), Addis Ababa University, Bole airport, minibus taxis, the national exam, Ethiopian time. Keep examples neutral across religions and regions.

**Deck localisation (the same card positions as te-en and ur-en; the lead's `deviations.p.json` holds the entries):**

| Deck | Card | ko-en English | am-en English |
|---|---|---|---|
| 2 | 0, 4, 5 | My name is Minji. / I'm from Korea. / I live in Seoul. | My name is Selam. / I'm from Ethiopia. / I live in Addis Ababa. |
| 3 | 12 | Do you speak Korean? | Do you speak Amharic? |
| 10 | 6 | Have you been to Korea? | Have you been to Ethiopia? |
| 12 | 8 | Your Korean is really good! | Your Amharic is really good! |
| 14 | 0, 1 | Hello, this is Minji. / Can I speak to Mr. Kim? | Hello, this is Selam. / Can I speak to Mr. Haile? |
| 15 | 8 | I have a reservation under Kim. (its note says "Yes, under Kim.") | I have a reservation under Haile. (note: under Haile) |
| 16 | 15 | I need to contact the Korean embassy. | I need to contact the Ethiopian embassy. |
| 18 | appended | (ko's 26 kept) | Amharic pairs after ko's: they / day, mouth / mouse, breathe / breeze, vest / best, ship / sheep, full / fool, fan / fun (append fun only), pack / peck, boat / bought (append bought), cut / cat, sing, school, street, asked, students, photography |
| 20 | 14 | Who's your bias? | Who's your favorite singer? |
| 22 | all | (none) | new deck, about 25 cards, the forms of `ethiopian-english` |

**Deck names (final; pending the native check).** Each is unique, Amharic-initial, no Ethiopic digits.

| # | Amharic deck name | Linked lessons / notes |
|---|---|---|
| 1 | **ሰላምታ** | greetings; no linked lesson |
| 2 | **ራስን ማስተዋወቅ** | articles, be, present, third-s, object-have, perfect-2, stative-since, articles-3; cards 0, 4, 5 localised |
| 3 | **መሠረታዊ አባባሎች 1** | polite; card 12 localised |
| 4 | **መሠረታዊ አባባሎች 2** | questions |
| 5 | **መንገድና ትራንስፖርት** | the |
| 6 | **ምግብ ቤት** | countable |
| 7 | **ካፌና ሱቅ** | no linked lesson |
| 8 | **ግብይትና ክፍያ** | plurals, adjectives, relative |
| 9 | **ቁጥር፣ ሰዓትና ቀን** | prep, numbers |
| 10 | **ቀለል ያለ ጨዋታ** | it-there, can-like, continuous, past, irregular-past, going-to, tense, smalltalk, will, to-ing; card 6 localised |
| 11 | **ስሜትና ምላሽ** | joining, past-continuous, conditionals |
| 12 | **አድናቆትና መውደድ** | card 8 localised |
| 13 | **ሥራና ኢሜይል** | first-conditional, passive, email |
| 14 | **ስልክና የቻት አጭር ቃላት** | reported; cards 0, 1 localised |
| 15 | **ጉዞ (አውሮፕላን ማረፊያና ሆቴል)** | perfect, articles-2; card 8 localised |
| 16 | **ሐኪምና ድንገተኛ አደጋ** | modals; card 15 localised |
| 17 | **ሐረጋዊ ግሶች** | phrasal |
| 18 | **የአጠራር ወጥመዶች** | pron; Amharic pairs appended |
| 19 | **የእንግሊዝኛ ፈሊጦች** | idioms |
| 20 | **ፊልም፣ ድራማና ስላንግ** | narrative; card 14 localised |
| 21 | **የእንግሊዝኛ ፊደላት** | alphabet; the shared alphabet deck (26 cards, English side fixed by `docs/briefs/alphabet-spec.md`) |
| 22 | **ኢትዮጵያዊ እንግሊዝኛ፦ እዚህና ውጭ** | ethiopian-english; am-only deck |

- A renamed deck orphans saved progress: the names are final at release.
- Deck 22 card shape: front = the international form (*I don't understand.*), meaning in Amharic, note «በኢትዮጵያ የሚሰማ፦ I am not understanding» for group 1 and 2, «ስህተት፦ …» for group 3.

## 10. Interface wording notes

- **Direction and font:** left to right; the device's Ethiopic font draws the text (Noto Sans Ethiopic on Android, Kefa on Apple, Nyala / Ebrima on Windows). Fidel is taller than Latin: the lead checks line height and the tab bar at 390px. No uppercase transforms or letter-spacing on Amharic. **No `html[lang=am]` rule exists yet** (te-lead and ur-lead report the same gap for their scripts).
- **Digits and dates:** Western digits only; `Intl` locale `am` (or `am-ET`) with the Gregorian calendar, which prints Amharic month names (native check of the output); never the Ethiopian calendar in the interface, because streaks and due dates are computed in Gregorian days.
- **Counts:** ONE translation per count pattern, label + ፦ (or `:`) + number: «ካርዶች፦ {1}», «ተከታታይ ቀናት፦ {1}», «የቀሩ፦ {1}». Never a noun after the slot that would need a plural.
- **Language-name slots:** after a colon or at the start: «ቋንቋ፦ {1}». Never attach a prefix (በ-, የ-) to a slot.
- **Polite forms on full-sentence instructions** («መልሱን ይጻፉ»); buttons: polite verb or noun (§2). Toasts impersonal («ተቀምጧል», «ተመሳስሏል»).
- **Tab labels (≤ 8 characters each; the lead measures):** ዛሬ (Today), ልምምድ (Practice), ክለሳ (Review), ትምህርቶች (Lessons), ንባብ (Reading), ስልጠና (Drills), እድገት (Progress), አስተያየት (Feedback).
- **Weekday headers (≤ 3 letters):** ሰኞ ማክ ረቡ ሐሙ ዓር ቅዳ እሑ (Monday first). Native check.
- **Legacy keys** that say Korean / Hangul / romanization mean English / letters / pronunciation aid for this course.
- **Praise and feedback** as §2; «ትክክል!», «ስህተት», «እንደገና ይሞክሩ».

## 11. Gaps, risks and strings to check first

**Gaps.**
- No native speaker has read any Amharic here; no screen was rendered; no audio was heard.
- Only five grammar terms were confirmed in a source (and that source is Tigrinya material); the rest of §3 is general knowledge.
- No Amharic-L1 error study with counts by grammar category was found; the counts are from Afaan Oromo-L1 teachers (Olana & Teshome), used only for the Ethiopian school-English context. Zones 7 to 9 are inferences for Amharic.
- The aid's conventions (ሠ / ዸ for th, glides for length, 6th order as "no vowel") are this course's design; whether learners read them as intended is untested.
- **Font risk:** ዸ (U+12F8–12FE) is a rare letter; ኧ (U+12A7) is ordinary but less common than አ. Both are base letters of the basic block (no combining marks), so the Telugu blocker (a combining mark missing from a stock font) does not apply in kind, but stock-font coverage of ዸ must be confirmed on Android, iOS and Windows before release (fallback in §6.3).
- *open the light* (zone 11) was not found in a source and is not used.

**22 strings a native speaker should check first:**
1. Register sample: «ባዶውን ቦታ የሚሞላው የትኛው ነው?» (mcBlankCue) and « — በእነዚህ ቃላት» (typeHintCue).
2. The polite imperative set: ይምረጡ, ይጻፉ, ያዳምጡ, ይድገሙ, እንደገና ይሞክሩ, ያረጋግጡ.
3. «አርቲክል» as the classroom word for *article* (vs a native term).
4. «የሚቆጠር ስም / የማይቆጠር ስም».
5. «ብዙ ቁጥር / ነጠላ ቁጥር».
6. «አጋዥ ግስ» for helping verb.
7. «ተገብሮ / ገቢር» for passive / active.
8. «ሁኔታ የሚገልጽ ግስ» for stative verb.
9. «ጫና» for stress.
10. «የአጠራር መርጃ» for the pronunciation aid.
11. «ግስ» vs «ግሥ» as the house spelling.
12. The 6th-order rule sentence «በዚህ መርጃ ሳድስ ሁልጊዜ ያለ አናባቢ ይነበባል».
13. Deck 10 «ቀለል ያለ ጨዋታ» (small talk).
14. Deck 12 «አድናቆትና መውደድ» (compliments and likes).
15. Deck 14 «ስልክና የቻት አጭር ቃላት».
16. Deck 17 «ሐረጋዊ ግሶች».
17. Deck 22 «ኢትዮጵያዊ እንግሊዝኛ፦ እዚህና ውጭ».
18. Level titles ጀማሪ, ተማሪ, ተጫዋች, መንገደኛ, ነዋሪ, ባለሙያ, ሊቅ.
19. Tab labels ስልጠና (Drills) and እድገት (Progress).
20. Weekday headers ሰኞ ማክ ረቡ ሐሙ ዓር ቅዳ እሑ.
21. The error-mark joiner «ትክክለኛው፦».
22. The aid as read aloud: ሢንክ (think), ዺስ (this), ሲይት (seat), ቦውት (boat), ስኩውል (school), ኢይሢˈኦውፒኧ (Ethiopia).

## Sources

- Anegagregn Gashaw (2014). Potential Problematic Areas of English Pronunciation for Amharic Native Learners based on Phonological Contrast between the two Languages. *The Ethiopian Journal of Education* 34(1). https://ejol.aau.edu.et/index.php/EJE/article/download/253/168/317
- Anegagregn Gashaw (2016). Perceptions of English Segmental Phonemes by Ethiopian EFL Learners Speaking Amharic as a First Language. *EJLCC* 1(1). https://ejol.aau.edu.et/index.php/EJLCC/article/download/10498/8249/19828
- G. Sharma (2013). English in Ethiopia. *STAR Journal* 2(1): 74–85. https://core.ac.uk/download/478451756.pdf
- A. Adera & D. Taye (2020). Mother Tongue Interference in Written Compositions of Students …: Lexical Transfers from Amharic to English. *Ethiopian Journal of Social and Language Studies* 7(2). https://ejhs.ju.edu.et/index.php/ejssls/article/download/4765/1738
- Tamiru Olana & Zeleke Teshome (2015). EFL Teachers' Productive Skills Errors … East Wollega Zone. *STAR Journal* 4(4): 164–173. https://ajol.info/index.php/star/article/view/145860/135377
- B. J. Ojo & N. Umera-Okeke (n.d.). English Pronunciation Errors: A Case Study of Amhara and Oromia Regions of Ethiopia. https://core.ac.uk/download/478407041.pdf
- BoldVoice, English pronunciation for Amharic speakers. https://www.boldvoice.com/blog/english-pronunciation-amharic-speakers
- W3C, Ethiopic Layout Requirements, editor's draft style guide. https://w3c.github.io/elreq/style-guide
- NTNU LearnNoW (Tigrinya), vocabulary page with Ethiopic part-of-speech labels. https://ntnu.edu/web/learnnow-ti/6/vocabulary
- Internal: `docs/profiles/en-am.md` (variety, spelling house rules, Ethiopian time labels, romanisation), `docs/profiles/ur.md` (shape), `tools/content/te/PRON-TOOL.md` and `pron_te.js` (tool model).
