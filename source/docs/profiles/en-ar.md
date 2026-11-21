# English speakers learning Arabic: course profile

Course `en-ar`: Arabic (Modern Standard Arabic) for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Arabic script, **fully vowelled**. Machine-readable twin: `tools/target/ar/profile.json`, written from the same data as §8 and §9, so the two agree. **There is a generator:** `tools/target/ar/respell.js` writes every `pron` from the vowel marks (§6); writers never type a pron.

(`docs/profiles/ar.md` belongs to the reverse course, English for Arabic speakers. This profile does not use or change it.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile, named. **(abstract only)** says only the abstract or a record page was read.
- **[curriculum convention]**: what syllabuses, textbooks and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or app's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Arabic**. Every such claim a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant, voice, register:** Modern Standard Arabic (MSA), `ar-SA` voice. MSA is the written Arabic of all 22 Arab countries and the spoken Arabic of news, speeches, lectures and formal talk, understood everywhere; it is **nobody's home language**: people chat in their own dialect. The course says so in lesson 1 and in `greetings`, teaches the greetings and courtesy phrases that MSA and the dialects share, and adds a "Spoken Arabic" deck whose notes give Egyptian and Levantine forms for recognition only (§2).
- **One pausal rule (§2.3):** leave the last letter bare. No case or mood ending is written or said (كِتَاب *kitāb*, يَدْرُس *yadrus*); a final vowel stays only when it says **who** (أَنْتَ *anta* / أَنْتِ *anti*, دَرَسْتُ *darastu*) or is part of the word, and -an stays only where the spelling has its extra ا (شُكْرًا *shukran*). "You" is always cued: "(to a man)" / "(to a woman)".
- **Biggest traps (§4):** the article and definiteness (the most frequent error of first- and second-year learners: Shehata & Martin 2024); adding "is"; gender agreement; English word order (adjective and iḍāfa); ḥ, ʿ and the emphatics; long vowels and shadda; the script itself.
- **Standing rule (§7):** every set re-tests **(a) gender agreement** and **(b) the article** (definiteness: noun + adjective, iḍāfa, no "is"). Both are visible in unvowelled letters (ة, ال, تـ / يـ), so they can be typed and tiled; contrasts carried only by a vowel mark (أَنْتَ / أَنْتِ) are kept to `mc` and `or`.
- **Pronunciation aid (§6):** a learner romanisation close to IJMES, all lowercase: `ā ī ū`, `ḥ ṣ ḍ ṭ ẓ`, `ʿ` and `ʾ`, `kh gh sh th dh q`, sun letters assimilated (`ash-shams`), pausal endings. **Generated** by `respell.js` from the vowel marks, which is reliable because every Arabic string is fully vowelled in one canonical way; the generator throws on anything else. Shown under every card and example row; hideable from lesson 16.
- **Script (§10):** Arabic script, right to left, letters joined, vowel marks on everything at A1. Seven script lessons (one added: `sounds`) and four letter decks that work as ordinary decks. Tiles by default; typing in Arabic (phone keyboard); typing the romanisation for practice answers only after engine request 4 (`pronAnswers` is off until then).
- **Lessons (§8):** 28. All 26 roadmap items kept; two added (`sounds`: throat and heavy sounds; `ordering`: ordering and paying). Stage 3 is reordered (adjectives first, `have` after `possessive`, `roots` before verbs).
- **Decks (§9):** 17 decks in 5 groups, including four script decks, "Spoken Arabic" and "Traps for English speakers". **Engine (§10.7):** 12 requests; the top four are Arabic folding in the matcher, right-to-left tiles and answer box, bidi isolation of every Arabic run in English text, and the `pronAnswers` space fix.

## 2. Variant, register and voice

### 2.1 Variant: Modern Standard Arabic, said honestly

- The roadmap names "Modern Standard Arabic", based on "Alif Baa, then Al-Kitaab Part One chapters 1-5" (Montgomery College ARAB 101 outline) [curriculum convention]. The build plan keeps it.
- **What MSA is:** the shared written language (books, newspapers, signs, menus, subtitles, the web) and the formal spoken language (news, speeches, lectures, sermons, interviews) of the Arab world; it is "used across the Arab world in writing, news, education, administration" ([Elon, *MSA spoken*](https://elon.io/grammar/arabic-modern-standard/variation/msa-spoken)) [practitioner opinion].
- **What MSA is not:** anybody's home language. At home, in shops and with friends, people speak a dialect (Egyptian, Levantine, Gulf, Iraqi, Maghrebi…). Al-Kitaab's authors build their course on this: Part One presents formal Arabic, Egyptian and Syrian (Damascus) Arabic, and the class picks "one variety of spoken Arabic and learn[s] it along with the formal Arabic"; most words are shared ([Al-Kitaab Part One 3e, teacher's introduction](https://press.georgetown.edu/files/materials/9781647121877_AK1-3e-IntroTeacher.pdf)) [curriculum convention]. Alif Baa says the same: "Choose one form to use actively and leave the others for recognition" ([Alif Baa 3e preface](https://Press.GeorgeTown.edu/files/materials/9781647121853_AB3e-preface.pdf)).
- **Why this app still teaches MSA only:** one variety per course, a device voice exists for it, it is what US college courses and heritage schools teach (most heritage schools teach MSA or Classical Arabic, very few teach dialect: [CAL](https://cal.org/heritagelanguageschoolsusarabic)), it is the only variety with a standard spelling, and it is understood everywhere. A learner who speaks MSA politely is understood and usually welcomed [inference].
- **How the course stays honest** (all are writer rules):
  1. Lesson 1 (`letters`) and lesson 8 (`greetings`) each carry one paragraph: "You are learning the Arabic everyone reads and everyone understands. People chat in their own dialect; you'll hear different words in Cairo and in Amman. The Spoken Arabic deck shows you the most common ones."
  2. **Shared first:** where MSA and the big dialects use the same everyday phrase, the course teaches that phrase: السَّلَامُ عَلَيْكُم, مَرْحَبًا, أَهْلًا وَسَهْلًا, صَبَاح الْخَيْر / مَسَاء الْخَيْر, شُكْرًا, عَفْوًا, مَعَ السَّلَامَة, إِن شَاءَ اللّٰه, الْحَمْدُ لِلّٰه, مِن فَضْلِكَ, آسِف, تَشَرَّفْنَا, يَعْنِي [inference: these are heard across the region; to be checked, §11]. Where MSA has a bookish word and the dialects share another, the MSA word is taught and the note says what people say (مَاذَا "what?": Egypt *ēh*, Levant *shū*).
  3. **Spoken Arabic deck** (§9): 16 high-frequency words where MSA and the dialects differ most (what, where, why, want, now, good, there is, not, yes, this, how much, OK…). The **target is the MSA word**; the note gives the Egyptian and Levantine forms **in romanisation, for recognition only**: "Egypt: *ʿāyiz* · Levant: *biddī*". Dialect forms are never card targets, example rows, answers or tiles (they have no standard spelling, the generator and the voice are MSA, and a learner mixing them into MSA sentences would sound odd) [inference].
  4. **Notes may mention a dialect form at most once per card**, always as "people often say…", never as "the correct word is…".
- **Roadmap items changed by this variant:** none. The roadmap note "No spoken dialect is chosen yet" is answered: none is taught; two are shown for recognition.

### 2.2 Voice

- `ttsLang: "ar-SA"`. Saudi MSA voices are the commonest Arabic voices on phones [inference]. A device with only another `ar-*` voice should fall back to it (engine request 8, §10.7).
- The voice reads the vowel marks. Fully vowelled pausal text should make it read *kitāb*, not *kitābun* [inference: not tested on devices; §11, voice check].
- The voice will say ج as *j* (Saudi and MSA norm); Egyptians say *g*. One note in `letters`.

### 2.3 Case endings: the pausal rule (one rule)

**The rule:** **Leave the last letter of every word bare: no case or mood ending is written or said. A final vowel is written and said only when it tells you who (a person ending) or belongs to the word itself; -an is said only where the spelling has its extra ا.**

| Written and said | Never written, never said |
|---|---|
| كِتَاب *kitāb*, الْبَيْت الْكَبِير *al-bayt al-kabīr* (no -un, -u, -i) | كِتَابٌ, الْبَيْتُ الْكَبِيرُ |
| يَدْرُس *yadrus*, يَدْرُسُون *yadrusūn*, تَدْرُسِين *tadrusīn* (no mood -u, no -a after -ūn / -īn) | يَدْرُسُ, يَدْرُسُونَ |
| person endings: أَنْتَ *anta*, أَنْتِ *anti*, دَرَسْتُ *darastu*, دَرَسْتَ *darasta*, دَرَسْتِ *darasti*, كَتَبَ *kataba* | |
| part of the word: هُوَ *huwa*, هِيَ *hiya*, نَحْنُ *naḥnu*, مَعَ *maʿa*, أَيْنَ *ayna*, هٰذِهِ *hādhihi* | |
| the extra ا of -an: شُكْرًا *shukran*, جِدًّا *jiddan*, أُرِيد شَايًا *urīd shāyan* | -an after ة or ء: قَهْوَةً, مَسَاءً → قَهْوَة *qahwa*, مَسَاء *masāʾ* |

- **Evidence.** Pausal pronunciation drops short case vowels and nunation at the end of a phrase; the imperfect's final vowel is not said in pause (*yaktub*); ة in pause gives *risāla* ([Wikipedia, *Iʿrab*](https://en.wikipedia.org/wiki/%CA%BEI%CA%BFrab)). In ordinary spoken MSA speakers "often drop them at phrase boundaries"; "inside a tight phrase, such as a construct (iḍāfa), the ending returns" ([Elon](https://elon.io/grammar/arabic-modern-standard/variation/msa-spoken)) [practitioner opinion]. Al-Kitaab's authors judge case endings "not level-appropriate" for elementary learners ([AK1 teacher's intro](https://press.georgetown.edu/files/materials/9781647121877_AK1-3e-IntroTeacher.pdf)) [curriculum convention].
- **Why "every word" and not "every phrase":** one rule a writer can apply word by word, and a generator can check (§6). Real careful MSA would say some endings inside phrases (*kitābu ṭ-ṭālibi*); the course's form (*kitāb aṭ-ṭālib*) is what learners hear in everyday semi-formal speech [inference, §11].
- **Three consequences writers must follow:**
  1. **ة is said -a** (مَدِينَة *madīna*). **As the first word of an iḍāfa it is said -at and written with sukun, ةْ:** جَامِعَةْ تُولْسَا *jāmiʿat tūlsā*, مَحَطَّةْ الْقِطَار *maḥaṭṭat al-qiṭār*. This sukun on ة is **not standard spelling**; it is the course's way of telling the learner and the voice to say the *t*, which every speaker does there. It is the first item of the native check and the voice check (§11). Before a possessive ending ة is spelled ت anyway (مَدِينَتِي *madīnatī*).
  2. **A possessive ending keeps the vowel before it** (اِسْمُكَ *ismuka*, بَيْتُهَا *baytuhā*). That vowel is a case vowel, so: **a noun with ـكَ ـكِ ـهُ ـهَا appears only as the subject or the predicate** (اِسْمُكَ, بَيْتُهَا كَبِير). After a preposition or as an object use only ـي (فِي بَيْتِي *fī baytī*, أُحِبّ أُمِّي *uḥibb ummī*) or the fixed forms عِنْدَكَ *ʿindaka*, مَعَكِ *maʿaki*, لَكَ *laka* and the courtesy phrase مِن فَضْلِكَ *min faḍlika* / مِن فَضْلِكِ *min faḍliki*, which are learned as whole phrases.
  3. **-an only with its extra ا** (objects, adverbs, after لَيْسَ, after 11–99). In `ty` and `fi` items avoid answers that need ًا (learners leave it out); use a definite object or a ة-noun (أُرِيد قَهْوَة *urīd qahwa*) instead. ًا is taught in `hamza` and practised in `mc` and `or` items.
- **Fixed formulas keep their traditional vowels:** السَّلَامُ عَلَيْكُم *as-salāmu ʿalaykum*, الْحَمْدُ لِلّٰه *al-ḥamdu lillāh*, إِن شَاءَ اللّٰه *in shāʾa llāh*. The generator knows them (§6).

### 2.4 Register and "you"

- **Register:** neutral MSA, polite but not stiff; what a teacher, a hotel clerk or a newsreader would say to a stranger. No honorific system to learn; courtesy comes from phrases (مِن فَضْلِكَ, لَوْ سَمَحْتَ, شُكْرًا جَزِيلًا) [inference].
- **"You" is gendered.** أَنْتَ *anta* to a man, أَنْتِ *anti* to a woman; the same split runs through verbs (تَدْرُس *tadrus* / تَدْرُسِين *tadrusīn*), possessive endings (اِسْمُكَ *ismuka* / اِسْمُكِ *ismuki*) and phrases (مِن فَضْلِكَ *min faḍlika* / مِن فَضْلِكِ *min faḍliki*, كَيْفَ حَالُكَ؟ *kayfa ḥāluka?* / كَيْفَ حَالُكِ؟ *kayfa ḥāluki?*).
  - **Every prompt, meaning and hint that asks for a "you" form says "(to a man)" or "(to a woman)"**, in that wording. Card meanings too: "Please (to a man)" / "Please (to a woman)": this also keeps meanings unique inside a deck.
  - **The speaker's gender** matters for adjectives and nouns about "I": أَنَا طَالِب *anā ṭālib* / أَنَا طَالِبَة *anā ṭāliba*. A prompt "I'm a student" accepts **both**; where only one is wanted the prompt says "(a woman speaking)" or "(a man speaking)".
  - **Plural "you"** (أَنْتُم) appears only in fixed phrases (عَلَيْكُم) and as one `pronouns` table row. Duals are recognition only (§4.10).
- **Formulas with God's name** (إِن شَاءَ اللّٰه, الْحَمْدُ لِلّٰه, مَا شَاءَ اللّٰه) are taught as everyday courtesy used by Muslims and Christians alike, in a neutral tone; a note says what each is used for ("if all goes well", "fine, thank God", "admiring something") [inference].

### 2.5 Greetings (`greet` in profile.json)

| Slot | Arabic | Gloss | Why |
|---|---|---|---|
| late night | لَيْلَة سَعِيدَة *layla saʿīda* | Good night | gender-neutral; تُصْبِحُ عَلَى خَيْر would need a man / woman form |
| morning | صَبَاح الْخَيْر *ṣabāḥ al-khayr* | Good morning | |
| afternoon | مَرْحَبًا *marḥaban* | Hello | Arabic has no common "good afternoon"; مَسَاء الْخَيْر starts in the afternoon in some places [inference] |
| evening | مَسَاء الْخَيْر *masāʾ al-khayr* | Good evening | |

They are stored fully vowelled, like all Arabic in the course.

### 2.6 Voice of the English text

- Plain, friendly American English for adults who know no grammar terms; each term of §3 is introduced once with an example.
- Explain by contrast: "English says *the big house*; Arabic says *the house the big*."
- Arabic words inside English sentences are written in Arabic script with the romanisation after them in italics on first use in a lesson: "Say مَرْحَبًا *marḥaban* to anyone." Never romanisation alone in a lesson body (the learner must keep seeing the script); notes on cards may use romanisation alone for dialect forms only.
- No transliteration of English words into Arabic letters for effect.

### 2.7 Arabic text conventions (every file)

- **Fully vowelled, canonical vowelling** (§6.2): every letter inside a word carries a vowel mark or sukun; fatha before ا, ى and ة; long ī and ū are kasra + bare ي and damma + bare و; diphthongs carry sukun (بَيْت *bayt*, يَوْم *yawm*); sun letters after ال carry shadda and the ل stays bare (الشَّمْس *ash-shams*); moon letters: لْ with sukun (الْقَمَر *al-qamar*); the last letter is bare (§2.3); word-initial ا carries its vowel (اِسْم *ism*). The generator rejects anything else, so writers simply run it.
- **Marks in NFC order.** If a writer's editor stores shadda before the vowel, the generator prints the corrected string to copy (engine request 7 makes gen.js normalise anyway).
- **Arabic punctuation inside Arabic:** ؟ ، ؛ and the full stop. No space before them. English punctuation in English text.
- **Digits:** Arabic text uses number words; digits appear only in the Numbers deck (Eastern Arabic digits ٠–٩ as cards) and in English prompts (Western digits).
- **No invisible characters** (validator): no RLM, LRM, ZWJ, ZWNJ, isolates. Direction is the engine's job (§10.2). Tatweel ـ only in lesson tables that show letter forms, never in card targets, answers or tiles.
- **Names and places** are written in Arabic as Arabs write them (نْيُويُورْك *nyūyūrk*, شِيكَاغُو *shīkāghū*, تِكْسَاس *tiksās*); the pron follows the Arabic spelling.

## 3. Glossary

One English term per idea, used the same way in every lesson, `why` line, hint and note. Arabic grammar names are given once, in the lesson that introduces them; the course then uses the English term (except the four marked *), because English speakers' textbooks and teachers use those Arabic names too [curriculum convention: Montgomery College outline uses "sukuun", "shadda", "taa marbuuta", "alif maqsurah", "tanween", "nisbah"].

| Term (use exactly this) | Means | First taught | Do not write |
|---|---|---|---|
| letter | one of the 28 letters | `letters` | character, glyph |
| joined form / start, middle, end form | the shape a letter takes by position | `shapes` | initial / medial / final form (except once in `shapes`) |
| non-joining letter | ا د ذ ر ز و: never join to the next letter | `shapes` | one-way connector |
| vowel marks | the small signs for short vowels, sukun, shadda, tanwin | `vowels` | diacritics, harakat (once, in `vowels`) |
| short vowel / long vowel | a i u (marks) / ā ī ū (ا ي و) | `vowels` | |
| sukun* | the mark for "no vowel here" | `sukun-shadda` | jazm |
| shadda* | the mark for a doubled letter | `sukun-shadda` | gemination |
| tanwin | the doubled mark for -an; the course uses only -an | `hamza` | nunation |
| hamza | the glottal stop ء and its seats أ إ ؤ ئ | `hamza` | |
| taa marbuta* | ة, the feminine ending | `gender` (seen in `letters`) | tied t, taa marbuuta |
| alif maqsura | ى, said ā at the end of a word | `hamza` | |
| the article | ال, "the" | `al` | al-, "definite article" (once) |
| sun letter / moon letter | letters that swallow / keep the ل of ال | `al` | solar / lunar |
| definite / indefinite | with "the" (ال, a name, a possessive ending, iḍāfa) / without | `definite` | determinate |
| masculine / feminine | grammatical gender of nouns, adjectives, verbs | `gender` | male / female (for grammar) |
| agree (agreement) | an adjective or verb takes the same gender (and definiteness) as its noun | `gender` | match, concord |
| sentence with no "is" | a nominal sentence: الْبَيْت كَبِير | `nominal` | equational sentence, copula drop |
| subject / predicate | what the sentence is about / what is said about it | `nominal` | topic / comment |
| iḍāfa* | two nouns, "X of Y", first without ال | `idafa` | construct state, genitive construction |
| possessive ending | ـي ـكَ ـكِ ـهُ ـهَا … on a noun | `possessive` | attached pronoun, pronoun suffix |
| nisba adjective | the -ī / -iyya adjective (عَرَبِيّ, أَمْرِيكِيَّة) | `nisba` | relative adjective |
| sound plural / broken plural | plural by ending (-ūn, -āt) / plural by changing the inside | `plurals` | regular / irregular plural |
| root / pattern | the 3 consonants of a word family / the vowel shape around them | `roots` | radicals, wazn, form I–X |
| present tense / past tense | يَدْرُس / دَرَسَ | `present` / `past` | imperfect / perfect |
| prefix / ending (on a verb) | يَـ تَـ أَ نَـ / -tu -ta -ti -at… | `present`, `past` | conjugation marker |
| verb sentence | a sentence that starts with the verb | `verb-sentences` | VSO |
| the bare ending (pausal form) | no case ending at the end of a word (§2.3) | `vowels` | iʿrāb, case endings (named once in `vowels`, never taught) |
| MSA / dialect / Spoken Arabic | Modern Standard Arabic / a regional spoken variety / the deck | `letters` | "classical", "slang" |
| (to a man) / (to a woman) | the cue for "you" forms | `pronouns` | (m.), (f.), (masc.) |

* The Arabic name is the course's term.

Spelling of terms in English text: **sukun, shadda, tanwin, hamza, taa marbuta, alif maqsura, iḍāfa, nisba** (iḍāfa keeps its dot because the roadmap and the deck notes write it so; `why` keywords accept "idafa" too, §7).

## 4. Error zones of English speakers, ranked

Ranked by how often the error appears in the sources (§4.1 has the only frequency data found), how early it blocks communication, and how hard English makes it [inference for the ranking itself]. Each zone gives wrong → right pairs that writers can use as distractors and tips.

### 4.1 The article and definiteness

- **Evidence.** In 30 essays by English-L1 learners at three levels, grammatical errors outnumbered lexical and spelling errors; **definiteness was the most frequent error in the first and second year**, and noun–adjective agreement in the third ([Shehata & Martin 2024, *Writing errors: the case of English learners of Arabic*, Journal of Linguistics and Language Teaching 15(2)](https://library.kab.ac.ug/Record/doaj-art-c4891f2dba014230848e666527f39e7d/Details)) [research-backed, abstract only]. Definiteness is also what separates a phrase from a sentence: الطريق الطويل "the long road" against الطريق طويل "the road is long" ([Elon, adjective position](https://elon.io/grammar/arabic-modern-standard/adjectives/position)) [practitioner opinion].
- **Why English misleads** [inference]: English marks "the" once, before the whole phrase; Arabic marks every word of a noun + adjective phrase, never the first word of an iḍāfa, and never a noun with a possessive ending. English also uses "the" where Arabic uses none (with names) and none where Arabic uses ال (general statements: "I like coffee" = أُحِبّ الْقَهْوَة).

| Wrong | Right | Trap |
|---|---|---|
| الْبَيْت كَبِير for "the big house" | الْبَيْت الْكَبِير *al-bayt al-kabīr* | adjective without ال makes it a sentence ("the house is big") |
| الْكِتَاب الطَّالِب for "the student's book" | كِتَاب الطَّالِب *kitāb aṭ-ṭālib* | first word of an iḍāfa takes no ال |
| الْبَيْتِي for "my house" | بَيْتِي *baytī* | a possessive ending already makes it definite |
| أُحِبّ قَهْوَة for "I like coffee" (in general) | أُحِبّ الْقَهْوَة *uḥibb al-qahwa* | general statements take ال |
| بَيْت الْكَبِير for "the big house" | الْبَيْت الْكَبِير *al-bayt al-kabīr* | both words or neither |

### 4.2 Adding "is" (and "am", "are")

- **Evidence.** No study of this error by English speakers was found; every course teaches the sentence with no verb "to be" in the present (Al-Kitaab chapter 3, "noun sentences": [Montgomery College ARAB 101](https://policy.montgomerycollege.edu/_documents/academics/departments/humanities-tpss/arab-101.pdf)) [curriculum convention]. ArabicPod101's list of learner mistakes includes a pronoun used as a copula with the wrong gender (مِحوَرُ الشِعر هِيَ الروح → هُوَ) ([ArabicPod101](https://www.arabicpod101.com/blog/2020/12/11/common-arabic-mistakes/)) [practitioner opinion].
- English needs a verb in every sentence, so learners insert هُوَ / هِيَ or a form of كَانَ ("was") as "is" [inference].

| Wrong | Right |
|---|---|
| الْبَيْت هُوَ كَبِير | الْبَيْت كَبِير *al-bayt kabīr* |
| أَنَا أَكُون طَالِب | أَنَا طَالِب *anā ṭālib* |
| اِسْمِي هُوَ سَارَة | اِسْمِي سَارَة *ismī sāra* |
| هِيَ فِي الْبَيْت is right; هِيَ تَكُون فِي الْبَيْت is not | هِيَ فِي الْبَيْت *hiya fī al-bayt* |

(A pronoun between subject and predicate does exist in MSA to separate two definite nouns, هٰذَا هُوَ الْكِتَاب "this is *the* book"; it is not taught at A1, and items never use it as a distractor [inference].)

### 4.3 Gender agreement

- **Evidence.** Noun–adjective agreement was the top grammatical error of third-year English-L1 learners (Shehata & Martin 2024, above). A processability study of six learners of Arabic as a foreign language found singular agreement acquired before plural and **masculine before feminine**, with attributive adjectives (stage 3) before predicative adjectives and verb agreement (stage 4) ([*Processability and development of syntax and agreement…*, UT Austin dissertation record](https://repositories.lib.utexas.edu/handle/2152/2716)) [research-backed, abstract only; learners' L1 not stated]. ArabicPod101 lists agreement first among grammar mistakes [practitioner opinion].
- English adjectives and verbs (except *-s*) do not change for gender; "it" has no gender [inference].

| Wrong | Right | Where |
|---|---|---|
| سَيَّارَة كَبِير | سَيَّارَة كَبِيرَة *sayyāra kabīra* | adjective after a ة noun |
| هِيَ يَدْرُس | هِيَ تَدْرُس *hiya tadrus* | present: she = تَـ |
| هِيَ دَرَسَ | هِيَ دَرَسَت *hiya darasat* | past: she = -at |
| أَيْنَ السَّيَّارَة؟ هُوَ هُنَا | هِيَ هُنَا *hiya hunā* | "it" for a feminine noun is هِيَ |
| أَنَا طَالِب (a woman speaking) | أَنَا طَالِبَة *anā ṭāliba* | "I" agrees with the speaker |
| كَيْفَ حَالُكَ؟ to a woman | كَيْفَ حَالُكِ؟ *kayfa ḥāluki?* | "you" to a woman (only a vowel: tested in `mc` / `or`) |
| الْكُتُب كَبِيرُون | الْكُتُب كَبِيرَة *al-kutub kabīra* | plurals of things take a feminine singular adjective (recognition in `plurals`) |

### 4.4 English word order: adjective, iḍāfa, possession

- Adjectives follow the noun ([Elon](https://elon.io/grammar/arabic-modern-standard/adjectives/position)) [practitioner opinion]; iḍāfa puts the owned thing first; possession is an ending, not a word [curriculum convention].

| Wrong | Right |
|---|---|
| كَبِير بَيْت | بَيْت كَبِير *bayt kabīr* |
| الطَّالِب كِتَاب for "the student's book" | كِتَاب الطَّالِب *kitāb aṭ-ṭālib* |
| بَيْت أَنَا for "my house" | بَيْتِي *baytī* |
| تُولْسَا جَامِعَة | جَامِعَةْ تُولْسَا *jāmiʿat tūlsā* |

### 4.5 Sounds: ḥ, ʿ and the emphatics; long vowels and shadda

- **Evidence.** English speakers find **/ħ/ (ح), /ʕ/ (ع) and /sˤ/ (ص)** the hardest Arabic sounds, "frequently replaced with phonetically similar English phonemes"; /tˤ/ (ط) and /ðˤ/ (ظ) are also problematic; average perception accuracy 61.55 %, production 40.17 % ([El Haimeur 2025, *Navigating unshared sounds*, JALTA 12](https://scholarworks.iu.edu/iupjournals/index.php/jalta/article/view/7834)) [research-backed, abstract only]. American learners did produce some acoustic cues of emphasis (lower F2 on the following vowel, native-like VOT), better at intermediate than beginner level ([Aldamen & Al-Deaibes 2023, *Heliyon* 9(2) e13401](https://khazna.ku.ac.ae/en/publications/arabic-emphatic-consonants-as-produced-by-english-speakers-an-aco/)) [research-backed, abstract only]: so emphasis is learnable, mostly through the vowel next to it. Missing vowel length and vowel marks causes real confusions (الكُلِّيَّة "college" / الكِليَة "kidney") ([ArabicPod101](https://www.arabicpod101.com/blog/2020/12/11/common-arabic-mistakes/)) [practitioner opinion].
- Minimal pairs for the Sound pairs deck and `mc` distractors (all real words):

| Pair | Contrast |
|---|---|
| قَلْب *qalb* / كَلْب *kalb* | q / k (heart / dog) |
| صَيْف *ṣayf* / سَيْف *sayf* | ṣ / s (summer / sword) |
| طِين *ṭīn* / تِين *tīn* | ṭ / t (mud / figs) |
| حَال *ḥāl* / هَال *hāl* | ḥ / h (state / cardamom: a native check is needed that هَال is common enough, §11) |
| عَيْن *ʿayn* / أَيْن *ayn* | ʿ / ʾ (eye / where) |
| جَمَل *jamal* / جَمَال *jamāl* | short / long a (camel / beauty) |
| دَرَسَ *darasa* / دَرَّسَ *darrasa* | shadda (he studied / he taught) |
| خَال *khāl* / حَال *ḥāl* | kh / ḥ (maternal uncle / state) |
| غَرْب *gharb* / قُرْب *qurb* | gh / q (west / nearness) |

### 4.6 The script: direction, joining, look-alikes

- Reading and writing right to left; non-joining letters (ا د ذ ر ز و) joined to the next letter; ة confused with ه (ة is the feminine ending; ـه is "his"); ى confused with ي; dots (ب ت ث ن ي differ only by dots); hamza seats; digits read left to right inside right-to-left text [inference; the order of Alif Baa units, Montgomery outline, shows these are taught one by one over ten units: curriculum convention].

| Wrong | Right |
|---|---|
| طَالِبَه (ه for ة) | طَالِبَة *ṭāliba* |
| عَلي (ي for ى) | عَلَى *ʿalā* ("on"; عَلِيّ is the name Ali) |
| reading ٢٥ as "52" | ٢٥ = 25: digits run left to right even in Arabic |

### 4.7 Verbs: prefixes, endings and "you"

| Wrong | Right | Trap |
|---|---|---|
| أَنْتِ تَدْرُس (to a woman) | أَنْتِ تَدْرُسِين *anti tadrusīn* | "you" (woman) adds -īn |
| أَنَا يَدْرُس | أَنَا أَدْرُس *anā adrus* | the prefix says who: أَ = I |
| هُم يَدْرُس | هُم يَدْرُسُون *hum yadrusūn* | they = -ūn |
| أَنَا دَرَسَ | أَنَا دَرَسْتُ *anā darastu* | past: -tu = I |

### 4.8 "Have", "like", "want": verbs English uses that Arabic doesn't

| English | Wrong calque | Right |
|---|---|---|
| I have a car | أَنَا أَمْلِك سَيَّارَة (too formal: "I own") | عِنْدِي سَيَّارَة *ʿindī sayyāra* |
| I don't have… | لَا عِنْدِي | لَيْسَ عِنْدِي سَيَّارَة *laysa ʿindī sayyāra* |
| I'm 25 years old | أَنَا ٢٥ سَنَة | عُمْرِي خَمْسَة وَعِشْرُون *ʿumrī khamsa waʿishrūn* ("my age is…"; recognition) |
| My name is… | اِسْمِي هُوَ… | اِسْمِي سَارَة *ismī sāra* |

### 4.9 Negation

| Wrong | Right | Rule |
|---|---|---|
| أَنَا لَا طَالِب | لَسْتُ طَالِبًا *lastu ṭāliban* (recognition) or أَنَا لَسْتُ طَالِبًا *anā lastu ṭāliban* | nouns and adjectives: لَيْسَ, which takes -an (§2.3) |
| لَيْسَ أَدْرُس | لَا أَدْرُس *lā adrus* | present verbs: لَا |
| مَا أَدْرُس (Egyptian / Levantine) | لَا أَدْرُس *lā adrus* | MSA uses لَا with the present |

At A1, لَيْسَ is practised only where no -an is needed: with عِنْدَ and with places (لَيْسَ عِنْدِي سَيَّارَة *laysa ʿindī sayyāra*, هُوَ لَيْسَ هُنَا *huwa laysa hunā*) and with ة adjectives (هِيَ لَيْسَت مَشْغُولَة *hiya laysat mashghūla*); لَسْتُ طَالِبًا is shown in `negation` as a model, not produced in `ty` items.

### 4.10 Plurals, duals and numbers

- Learners add one plural ending to everything; most common nouns have broken plurals that must be learned with the word (كِتَاب *kitāb* → كُتُب *kutub*, بَيْت *bayt* → بُيُوت *buyūt*); plurals of things take feminine singular agreement; the dual exists (لَدَيَّ أُختان "I have two sisters": ArabicPod101) [practitioner opinion]. "The number system is complex" (ArabicPod101) [practitioner opinion].
- **Course decision:** numbers are taught as counting words and with prices in two safe frames only (§8 `numbers`, `ordering`): the number alone (الثَّمَن عِشْرُون *ath-thaman ʿishrūn*) and 11–99 + singular with -an (عِشْرُون دُولَارًا *ʿishrūn dūlāran*, recognition). The gender polarity of 3–10 with nouns (ثَلَاثَةْ كُتُب *thalāthat kutub* / ثَلَاث سَيَّارَات) is shown once and never tested. Duals: recognition only (كِتَابَان *kitābān*).

### 4.11 False friends, calques and courtesy traps (the Traps deck)

| English instinct | Problem | Teach |
|---|---|---|
| "I'm good" / "I'm fine" → أَنَا جَيِّد | sounds like "I'm a good person" [inference] | بِخَيْر *bikhayr*, الْحَمْدُ لِلّٰه *al-ḥamdu lillāh* |
| "You're welcome" | عَفْوًا *ʿafwan* also means "excuse me? / pardon?" | note on the card |
| إِن شَاءَ اللّٰه *in shāʾa llāh* | not a promise; "hopefully, if all goes well"; can be a polite maybe [inference] | Traps card |
| "Excuse me" (to pass, to call a waiter) | لَوْ سَمَحْتَ *law samaḥta* / لَوْ سَمَحْتِ *law samaḥti* is gendered | cue (to a man / woman) |
| آسِف *āsif* "sorry" | a woman says آسِفَة *āsifa* | agreement with the speaker |
| "doctor" | دُكْتُور *duktūr* = physician **and** PhD; physician is also طَبِيب *ṭabīb* | note |
| أُسْتَاذ *ustādh* | "teacher, professor" and a polite "Mr." | note |
| "my friend" | صَدِيقِي *ṣadīqī* / صَدِيقَتِي *ṣadīqatī*: the feminine is a female friend (can imply girlfriend in some places) [inference] | note |
| "Do you speak English?" | هَل تَتَكَلَّم الْإِنْجِلِيزِيَّة؟ *hal tatakallam al-injilīziyya?* (to a man) needs ال on the language | ال with languages |
| "in" for "at home" | فِي الْبَيْت *fī al-bayt* needs ال | article |
| Egyptian دولاب "closet" = "wheel" elsewhere | dialect words are not universal (ArabicPod101) | Spoken deck notes only |
| left hand, shoes, sitting with soles showing | cultural, not linguistic: not in the course | — |

### 4.12 Verb-first sentences read as questions

- Learners from European languages may take verb-first order as a question; in Arabic it is a normal statement (يَذهَبُ اِبراهيم إلى السوق) ([ArabicPod101](https://www.arabicpod101.com/blog/2020/12/11/common-arabic-mistakes/)) [practitioner opinion]. Yes / no questions use هَل *hal*. In verb sentences the verb before a plural subject stays singular (recognition only in `verb-sentences`).

## 5. Learners: who, why, what first

**Numbers** (US colleges, the best data available):
- Arabic enrollments grew from 364 (1958) to 5,505 (1998), "almost doubled" after 9/11, peaked at "just under 35,000" in 2009, then "fell by almost 35%" from 2009 to 2021 ([The 74 / The Conversation, MLA data](https://www.the74million.org/article/fewer-u-s-college-students-are-studying-a-foreign-language-%e2%88%92-and-that-spells-trouble-for-national-security/)) [research-backed: census data]; 22,918 in fall 2016, the 8th most-studied language ([list of most commonly learned languages, MLA figures](https://worddisk.com/wiki/List_of_most_commonly_learned_foreign_languages_in_the_United_States)); 80 fewer institutions taught Arabic in 2021 than in 2016 ([Times Higher Education](https://www.timeshighereducation.com/news/us-sees-record-drop-enrolment-languages-courses)). For every five students in introductory courses there is about one in advanced study ([ICEF Monitor 2014](https://monitor.icef.com/2014/12/arabic-language-studies-booming-us/)). Beginners are the bulk.
- **Heritage learners:** about 3.5 million Arab Americans and at least 7 million Muslim Americans; Arab-American families learn to keep the heritage, Muslim families also to read the Qurʾan; K-12 Arabic enrollment rose from 24,407 to 47,594 between 2007 and 2009; most community schools teach MSA or Classical Arabic, very few teach dialect ([CAL, heritage language schools: Arabic](https://cal.org/heritagelanguageschoolsusarabic)) [research-backed: survey figures as reported].

**Why they study** [research-backed, summaries only]:
- A 2013 survey of 200+ US students: "interest in the language", employment (job market, government agencies, work in the Middle East) and "interest in Arab culture/history"; some have family ties (Brosh 2013, reported by [ICEF Monitor](https://monitor.icef.com/2014/12/arabic-language-studies-booming-us/)).
- A survey of 326 learners at eleven US colleges found ten motivation categories, different for heritage and non-heritage learners and changing with level ([*Why students in the U.S. are learning Arabic*, JNCOLCTL 2006, abstract](https://doaj.org/article/920e795de54342718571e5be423c3724)).
- US college learners want materials that reflect the variation they hear around them ([El-Ahraf & Mohammed, IAFOR presentation, abstract](https://acas.iafor.org/presentation/submission68483/)).

**Who uses this app** [inference, from the above and the app's English-speaking user base]:
1. **Curious adults and travelers** (Egypt, Jordan, Morocco, the Gulf): want to read signs and menus, greet, order, ask the way, and not be lost in the script.
2. **Heritage learners** who understand or speak a dialect at home but cannot read: need the script and MSA; will hear differences from their family's speech (the Spoken deck and the honesty paragraph matter most to them).
3. **Muslim learners** who want to read Arabic script for the Qurʾan: the script stage serves them directly; the course says plainly that it teaches modern Arabic, not Qurʾanic recitation (one line in `letters`) [inference].
4. **College students** using it beside Alif Baa / Al-Kitaab: the order (script first, then Al-Kitaab chapters 1–5 topics) and the terms (§3) match.
5. **Professionals** (government, NGOs, business in the region).

**What a US adult needs first** (shapes §8):
1. **The script, fast and with sound:** nothing else is possible without it. Seven short lessons with romanisation as a crutch, vowel marks on everything.
2. **Greetings and introductions** with the man / woman split from day one (أَنْتَ / أَنْتِ, طَالِب / طَالِبَة).
3. **"The" and "is":** the two habits that make every later sentence wrong if not fixed (§4.1, §4.2).
4. **Survival:** numbers, prices, ordering, "where is…?", "I want", "I have".
5. **Verbs** last, after the noun system, as Al-Kitaab does (present in chapter 3) [curriculum convention].

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [curriculum convention] Arabic romanisation for English readers follows a few close systems; IJMES (the *International Journal of Middle East Studies* system, "a modified Encyclopedia of Islam system") marks ʿayn and hamza distinctly ("hamza must be distinguished from an apostrophe"), writes the article lowercase, and elides its *a* after a prefix: *wa-l-*, *bi-l-*, *li-l-* ([IJMES transliteration guide](https://www.jadidonline.com/files/userfiles/file/Transliteration_Guide.pdf)). Its consonant chart (ā ī ū, ḥ ṣ ḍ ṭ ẓ, kh gh sh th dh, q, ʿ ʾ) is the de-facto standard in US Arabic studies [curriculum convention; the chart itself was not opened, §11].
- [curriculum convention] Alif Baa units 1–2 include "transliteration" next to the first letters ([Montgomery College outline](https://policy.montgomerycollege.edu/_documents/academics/departments/humanities-tpss/arab-101.pdf)), i.e. a romanisation is a normal crutch in the first weeks.
- [practitioner opinion] Missing vowel marks cause real word confusions for learners; "use vowelled text" ([ArabicPod101](https://www.arabicpod101.com/blog/2020/12/11/common-arabic-mistakes/)).

**Decision.** `pron: "required"`. The `pron` is a learner romanisation close to IJMES, **generated by `tools/target/ar/respell.js`** from the fully vowelled Arabic, never typed by hand. `node tools/target/ar/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell` (and `pattern`, `NAME`, `DIGIT`, `SUN`, `FORMULA`).

### 6.1 Why a generator is reliable here (and where it is not)

Unvowelled Arabic does not show short vowels, so no program can romanise it without a dictionary. **This course vowels every Arabic string fully** (§2.7) for the learner's sake anyway (beginner textbooks do), and then the romanisation is a function of the letters and marks: each consonant has one value, each mark one vowel, and the few context rules (long vowels, diphthongs, shadda, the article and sun letters, ة, tanwin -an) are local. Hand-typed romanisation by four writers, policed only by a regex, was rejected: the regex cannot see a wrong vowel or a wrong emphatic, and four writers would choose four spellings.

The generator **enforces one canonical vowelling** and throws («word» + reason) on everything else, so the same word always has the same Arabic string, which is what the validator compares:
- a letter inside a word with no mark (not vowelled), a missing fatha before ا / ى / ة, sukun on long ī / ū, a bare ي / و after fatha (a diphthong needs sukun);
- sukun on a final letter (except ة, §2.3, and final diphthong ـَوْ / ـَيْ), tanwin -un / -in, tanwin -an without its ا, tanwin written on the ا itself (اً instead of ًا);
- ال with a sun letter but no shadda, or with sukun on its ل; ال with a moon letter but no sukun on its ل; ٱ;
- هذا هذه ذلك لكن هؤلاء written without the dagger alif ـٰ (they would read *hadhā*); the name of God in any form other than the four listed;
- Latin letters, digits inside words (a lone digit 0–10 is a digit card), ة after ا (حَيَاة: not supported, choose another word);
- text not in NFC mark order (prints the NFC string to copy).
It **warns** on stderr («word», not fatal) when a word ends in damma or kasra on a letter that is not a person ending (ت ك ه ن): that is usually a case ending the pausal rule forbids (كِتَابُ). The fixed formulas are exempt.

**What it cannot know** (the remaining silent-error classes):
- **A wrong vowel mark that is still canonical** (كَتِب for كِتَاب would give *katib*): the generator romanises what is written. The marks themselves are the native-check item (§11).
- **Pausal violations on letters it cannot judge:** a final fatha is legitimate on hundreds of words (مَعَ, كَتَبَ, أَيْنَ), so a case -a on a noun (رَأَيْتُ الْبَيْتَ) passes silently. Writers avoid it by the rule; the reviewer checks.
- **The ةْ convention** (§2.3) is the writer's decision; the generator only reads it.
- **Elision across words** is not shown (*fī al-bayt*, said *fi l-bayt*; *maʿa as-salāma*, said *maʿa s-salāma*): each word is romanised as if said alone, except اللّٰه after a vowel (*in shāʾa llāh*). This is a deliberate simplification [inference, §11].

**How reliable** (self-measured, no native check): all 302 Arabic strings in this profile that carry a pron (sample cards, examples, tables, the 20 examples) were generated and re-checked: 0 mismatches, all pass `pronPattern` with and without `u`; the 38 vowelled words of the worked hinges (§7) pass; of a 60-string set of non-canonical spellings (unvowelled letters, -un / -in, final sukun, missing shadda on sun letters, shadda on moon letters, هَذَا without dagger alif, tanwin on ا, Latin, digits), 59 throw and the 60th turned out to be a real canonical word.

### 6.2 The key (exact format)

| Arabic | pron | Arabic | pron | Arabic | pron |
|---|---|---|---|---|---|
| ب | b | ذ | dh ("this") | ظ | ẓ (heavy dh) |
| ت | t | ر | r (tapped) | ع | ʿ (ʿayn) |
| ث | th ("think") | ز | z | غ | gh (gargled) |
| ج | j | س | s | ف | f |
| ح | ḥ (breathy, from the throat) | ش | sh | ق | q (deep k) |
| خ | kh (Bach) | ص | ṣ (heavy s) | ك ل م ن ه | k l m n h |
| د | d | ض | ḍ (heavy d) | و ي (consonants) | w y |
| ء أ إ ؤ ئ (hamza) | ʾ (not written at the start of a word) | ط | ṭ (heavy t) | آ | ā (ʾā inside a word) |

| Rule | Decision | Example |
|---|---|---|
| Short vowels | fatha *a*, kasra *i*, damma *u* | كَتَبَ *kataba* |
| Long vowels | macrons: fatha + ا or ى → *ā*; kasra + ي → *ī*; damma + و → *ū*; dagger alif → *ā* | كِتَاب *kitāb*, عَلَى *ʿalā*, كَبِير *kabīr*, هٰذَا *hādhā* |
| Diphthongs | fatha + وْ → *aw*; fatha + يْ → *ay* | يَوْم *yawm*, بَيْت *bayt* |
| Sukun | no vowel | مَكْتَب *maktab* |
| Shadda | the consonant doubled (digraphs doubled whole: *shsh*) | مُدَرِّسَة *mudarrisa* |
| Nisba at the end | ـِيّ said *ī* in pause; ـِيَّة *iyya* | عَرَبِيّ *ʿarabī*, عَرَبِيَّة *ʿarabiyya* |
| The article | *al-*, hyphen before the noun | الْقَمَر *al-qamar* |
| Sun letters | the ل is assimilated: *a* + doubled letter, hyphen in between | الشَّمْس *ash-shams*, النَّاس *an-nās* |
| Prefix + article | the prefix vowel replaces the *a* of al-: *wal-*, *bil-*, *kal-*, *fal-*, *lil-* | وَالْبَيْت *wal-bayt*, بِالسَّيَّارَة *bis-sayyāra*, لِلْبَيْت *lil-bayt* |
| Prefix without article | joined, no hyphen | أَهْلًا وَسَهْلًا *ahlan wasahlan* |
| Word-initial ا with its vowel | the vowel only | اِسْم *ism* |
| Wasla after ال or a prefix | ال + wasla word: ل with kasra and a bare ا (الِاسْم *al-ism*, يَوْم الِاثْنَيْن *yawm al-ithnayn*); prefix + wasla word: bare ا, not said (وَاسْمِي *wasmī*) | |
| Plural verb ending ـُوا | *ū*; the final ا is silent | دَرَسُوا *darasū* |
| Initial hamza | not written | أَنَا *anā*, إِلَى *ilā* |
| ة | *a*; ةْ (iḍāfa) *at* | مَدِينَة *madīna*, جَامِعَةْ تُولْسَا *jāmiʿat tūlsā* |
| Tanwin -an | *an* | شُكْرًا *shukran* |
| s + h, k + h, t + h, d + h, g + h from two letters | a middle dot keeps them apart | أَسْهَل *as·hal* |
| Capitals | **none** (Arabic has no capitals; names are lowercase: *sāra*, *shīkāghū*) | اِسْمِي سَارَة *ismī sāra* |
| Punctuation | ؟ ، ؛ become `? , ;`, attached to the word before | مَا اِسْمُكَ؟ *mā ismuka?* |
| Letter cards | a lone letter gives its **name** (what the voice says) | ب *bāʾ*, ة *tāʾ marbūṭa*, لا *lām alif* |
| Digit cards | a lone Eastern Arabic digit 0–10 gives its number word | ٣ *thalātha*, ١٠ *ʿashara* |
| Name of God | *allāh*, *lillāh*, *wallāh*, *billāh*; *llāh* after a word ending in a vowel | إِن شَاءَ اللّٰه *in shāʾa llāh* |

**What the aid does not show** (taught in `sounds` and notes): the darker vowels next to emphatics and q (ṭāwila sounds like "taw-"); that *r* is tapped; the real elision across words; stress.

### 6.3 `pronPattern`

Built by `respell.js`'s `pattern()`. It works with and without the `u` flag (checked in node: `validate.js` compiles it with `u`, `repron.js` without).

```
^(?!.*(?:^|[ \-])ʾ)(?!.*(?:aa|ii|uu|āā|īī|ūū|ʾʾ|ʿʿʿ))(?!.*·(?!h))(?!.*(?<![kgstd])·)(?!.*(?:^| )[^aiuāīū ]+(?= |$))(?!.*-(?= |$))(?!.*-[^ ]*-)(?:(?:a|wa|fa|bi|ka|li)(?:l|t|th|d|dh|r|z|s|sh|ṣ|ḍ|ṭ|ẓ|n)-)?(?:[aiuāīūbdfhjklmnqrstwyzḥṣḍṭẓʿʾ]|gh|·)+[?.!,;:]?(?: (?:(?:a|wa|fa|bi|ka|li)(?:l|t|th|d|dh|r|z|s|sh|ṣ|ḍ|ṭ|ẓ|n)-)?(?:[aiuāīūbdfhjklmnqrstwyzḥṣḍṭẓʿʾ]|gh|·)+[?.!,;:]?)*$
```

What it enforces: lowercase only; only the key's letters (no *e*, *o*, *c*, *p*, *v*, *x*, plain *g*); long vowels only as macrons (*aa*, *ii*, *uu* rejected); no hamza at the start of a word or after the article's hyphen; a hyphen only after *al* / a prefix + *l* or a sun letter, once per word, never at a word's end; the middle dot only between k, g, s, t or d and h; every word has a vowel; single spaces; punctuation only straight after a word. It rejects Arabic script, capitals (*Anā*), *ana taalib*, *ʾanā*, *al- bayt*, double spaces, a space before punctuation. It cannot see a wrong vowel or a wrong emphatic: the generator is the guarantee.

### 6.4 Twenty worked examples (all generated, all pass `pronPattern` with and without `u`)

| # | Arabic | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | مَرْحَبًا | `marḥaban` | hi | tanwin -an from the extra ا |
| 2 | السَّلَامُ عَلَيْكُم | `as-salāmu ʿalaykum` | hello (peace be upon you) | sun letter; formula keeps -u; diphthong *ay* |
| 3 | صَبَاح الْخَيْر | `ṣabāḥ al-khayr` | good morning | emphatic ṣ, ḥ; moon letter |
| 4 | شُكْرًا جَزِيلًا | `shukran jazīlan` | thank you very much | two -an words |
| 5 | أَنَا طَالِبَة | `anā ṭāliba` | I'm a student (a woman) | no "is"; ة = -a; initial hamza not written |
| 6 | مَا اِسْمُكِ؟ | `mā ismuki?` | What's your name? (to a woman) | initial اِ; vowel before a suffix; ؟ → ? |
| 7 | أَنْتَ أَمْرِيكِيّ؟ | `anta amrīkī?` | Are you American? (to a man) | person vowel kept; nisba *ī* |
| 8 | الْبَيْت الْكَبِير | `al-bayt al-kabīr` | the big house | article on both words |
| 9 | الْبَيْت كَبِير | `al-bayt kabīr` | The house is big. | no "is" |
| 10 | كِتَاب الطَّالِب | `kitāb aṭ-ṭālib` | the student's book | iḍāfa; sun letter ṭ |
| 11 | جَامِعَةْ تُولْسَا | `jāmiʿat tūlsā` | the University of Tulsa | ةْ = -at in iḍāfa |
| 12 | بِالسَّيَّارَة | `bis-sayyāra` | by car | prefix + sun article; shadda |
| 13 | وَالْقَهْوَة | `wal-qahwa` | and the coffee | prefix + moon article; q, h |
| 14 | هٰذِهِ مَدْرَسَة | `hādhihi madrasa` | This is a school. | dagger alif |
| 15 | عِنْدِي سُؤَال | `ʿindī suʾāl` | I have a question. | ʿ; long ī; medial hamza |
| 16 | هِيَ تَدْرُس الْعَرَبِيَّة | `hiya tadrus al-ʿarabiyya` | She studies Arabic. | verb prefix تَـ; mood ending dropped; ـِيَّة |
| 17 | دَرَسْتُ فِي الْقَاهِرَة | `darastu fī al-qāhira` | I studied in Cairo. | past ending -tu kept |
| 18 | عَلَى الْيَمِين | `ʿalā al-yamīn` | on the right | alif maqsura |
| 19 | إِن شَاءَ اللّٰه | `in shāʾa llāh` | hopefully (God willing) | formula; *llāh* after a vowel |
| 20 | أَسْهَل | `as·hal` | easier | middle dot: s·h is two sounds |

### 6.5 Card front, vowel marks, and hiding the aid

- **Card front:** the fully vowelled Arabic, large, right to left. Under it the pron line, **shown by default**.
- **Vowel marks stay on everything at A1** (cards, examples, tiles, options, model answers). Textbooks for beginners vowel their texts; unvowelled reading needs vocabulary this course cannot give [inference]. A later "vowel marks: show / hide" setting (engine request 12) would let learners practise reading plain text; not needed for A1.
- **Answers never require marks:** the matcher ignores missing marks (§10.4).
- **Hideable:** a per-course setting "Romanisation: always / tap to reveal / off" (engine request 9). Suggested prompt after lesson 16 (`ordering`, the end of stage 2): "Reading the script well? Try hiding the romanisation." Heritage readers may switch it off at once.
- **Practice items carry no pron** (PRACTICE-SPEC), except in the seven script lessons, where an `mc` item may ask "Which word is *bayt*?" with Arabic options, or "How do you say بَيْت?" with romanised options; a `ty` item there may expect a romanised answer (today's matcher compares it exactly, with missing dots and macrons "almost"; request 4 adds the other spellings; request 11 records the exception). This exception is for the script stage only.

### 6.6 What the script lessons must teach, so the aid can be read and then dropped

1. `letters`: each letter with its pron symbol; *th* = "think", *dh* = "this", *kh*, *gh*, *sh* are one sound each; the dots under ḥ ṣ ḍ ṭ ẓ mean "the throat or heavy version".
2. `sounds`: ʿ and ʾ (the two little hooks), q, the heavy letters and what they do to the vowel next to them; the Sound pairs deck.
3. `vowels`: the macron means "hold the vowel", short vowels have no macron; the bare-ending rule (§2.3) in one sentence: "Arabic words in this course end the way people say them at the end of a sentence."
4. `sukun-shadda`: doubled letters (*mudarrisa*) are held, not two sounds.
5. `al`: *al-* and the sun letters (*ash-shams*); the hyphen.
6. From then on, every lesson repeats: "read the Arabic first, check the romanisation after."

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things:
- **(a) Gender agreement.** An adjective takes ة after a feminine noun (سَيَّارَة كَبِيرَة *sayyāra kabīra*); "this" agrees (هٰذَا كِتَاب *hādhā kitāb* / هٰذِهِ سَيَّارَة *hādhihi sayyāra*); "it" is هُوَ or هِيَ by the noun; a verb agrees with its subject (هِيَ تَدْرُس *hiya tadrus*, هِيَ دَرَسَت *hiya darasat*); "I" agrees with the speaker (أَنَا طَالِبَة *anā ṭāliba*); "you" agrees with the listener (أَنْتِ *anti*, تَدْرُسِين *tadrusīn*, اِسْمُكِ *ismuki*).
- **(b) The article (definiteness).** ال on the noun **and** on its adjective (الْبَيْت الْكَبِير *al-bayt al-kabīr*); no ال on a predicate, which is how Arabic says "is" (الْبَيْت كَبِير *al-bayt kabīr*); no ال on the first word of an iḍāfa (كِتَاب الطَّالِب *kitāb aṭ-ṭālib*) or on a noun with a possessive ending (بَيْتِي *baytī*); ال in general statements and with languages (أُحِبّ الْقَهْوَة *uḥibb al-qahwa*, الْعَرَبِيَّة *al-ʿarabiyya*); in the script stage, the sun and moon letters of ال.

**Why these two.**
- **(b)** is the only error with frequency data: definiteness was the most frequent error of first- and second-year English-L1 learners (Shehata & Martin 2024, §4.1). It also carries the "no 'is'" habit (§4.2) and iḍāfa order (§4.4), because all three are decided by where ال goes. It is in nearly every sentence from `greetings` on (صَبَاح الْخَيْر is an iḍāfa).
- **(a)** was the top grammatical error of third-year learners in the same study, and feminine agreement is acquired late (§4.3); English gives no help at all. It reaches every lesson from lesson 1 through ة and هٰذَا / هٰذِهِ, and every verb lesson through تَـ / يَـ and -at.
- **Both are visible in unvowelled letters** (ة, ال, تـ / يـ, ت, هو / هي, -ين): a learner typing on a phone keyboard, which gives no vowel marks, can still get them right or wrong, and a tile distractor shows the difference. That is not true of the other candidates.
- **Not chosen:**
  - **"You" to a man / to a woman alone**: in unvowelled typing أَنْتَ and أَنْتِ, اِسْمُكَ and اِسْمُكِ are the same string, so a `ty` or `fi` item cannot test it. It is part of strand (a) only in `mc` and `or` items (tiles show the marks).
  - **No "is" on its own**: folded into (b), because the distractor that tests it is the article (الْكَبِير) or هُوَ.
  - **Iḍāfa on its own**: folded into (b).
  - **Emphatics and long vowels**: real (§4.5), but a learner on tiles cannot make them in production; they are tested through `mc` options and the Sound pairs deck.

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 of the 3 `or` items** and **2 of the 3 `ty` items** hinge on (a) or (b), and their `why` names it with a keyword.

**Keywords** (`standingRule.keywords`, flags `i`, ASCII except iḍāfa's ḍ and ā; works without the `u` flag):

```
\bagree(?:s|ment)?\b|\bmasculine\b|\bfeminine\b|\bgender\b|\btaa marbuta\b|\bthe article\b|\b(?:in)?definite\b|\bi(?:d|ḍ)(?:a|ā)fa\b|\bno ['‘’“”"]?(?:is|am|are)['‘’“”"]?(?=[\s.,:;!)]|$)|\bsun letters?\b|\bmoon letters?\b
```

Tested in node against 17 `why` lines that should match and 16 that should not; 0 failures. Should match (sample): "The adjective agrees with سَيَّارَة: feminine ة." · "Both words take the article: الْبَيْت الْكَبِير." · "First word of an iḍāfa: no article." · "Idafa: the first noun has no ال." · "No 'is' in Arabic: الْبَيْت كَبِير." · "No “am” in Arabic: أَنَا طَالِب." · "She = تَـ: the verb agrees with a feminine subject." · "A possessive ending makes the noun definite: no ال." · "The sun letter ش swallows the ل of the article." · "An indefinite noun takes an indefinite adjective." Should not match: "Long ī is written with ي." · "Is this right? Use هَل for yes/no questions." · "This is how you greet in the morning." · "'To a man' uses the fatha: أَنْتَ." · "Definitely say it with a smile." · "The prefix أَ means I." · "عِنْدِي means I have; Arabic has no verb for have."

**What counts as hinging** (mechanical, so a reviewer can check it). Tiles are **whole words** (§10.3); a lone ال or ة is never a tile, and a `fi` blank is always a whole word.
- **`or`, strand (a):** `a` contains a gender-marked word and `x` holds **the same word in the other gender**: كَبِير for كَبِيرَة, هٰذَا for هٰذِهِ, يَدْرُس for تَدْرُس, دَرَسَ for دَرَسَت, هُوَ for هِيَ (a thing), أَنْتَ for أَنْتِ (allowed here: the tiles show the marks), اِسْمُكَ for اِسْمُكِ.
- **`or`, strand (b):** `x` holds **the same word with the wrong definiteness** (كَبِير for الْكَبِير; الْكِتَاب for كِتَاب as the first word of an iḍāfa; الْبَيْتِي is not a word, so for possessives use بَيْت + an extra أَنَا tile, or الْبَيْت), or **هُوَ / هِيَ as an "is" tile** in a sentence with no "is".
- **`ty`, strand (a):** `a[0]` contains the gender-marked word, the contrast is **visible without vowel marks** (ة, تـ / يـ, final ت, هو / هي, -ين), and `x` holds the other form (`كَبِير` when `a[0]` has `كَبِيرَة`). Contrasts shown only by a vowel mark never count in `ty` or `fi`.
- **`ty`, strand (b):** `a[0]` contains an article contrast and `x` holds the same word with the wrong definiteness (`الْكَبِير` when `a[0]` is `الْبَيْت كَبِير`; `الْمَسَاء` when `a[0]` is `مَسَاء الْخَيْر`), or `هُوَ` when `a[0]` is a sentence with no "is".

**Safe distractors.** TARGET-BRIEF requires a distractor to be **wrong**, not merely less usual.

| Contrast | Safe when | Example (wrong in brackets) |
|---|---|---|
| adjective gender | the noun is plainly masculine or feminine (ة, or a person of known sex) | بَيْت كَبِير (كَبِيرَة); سَيَّارَة جَدِيدَة (جَدِيد) |
| هٰذَا / هٰذِهِ | before a singular noun with clear gender | هٰذِهِ مَدْرَسَة (هٰذَا) |
| verb prefix | subject named or a pronoun | هِيَ تَدْرُس (يَدْرُس); هُوَ يَعْمَل (تَعْمَل) |
| past ending | subject named or a pronoun | فَاطِمَة دَرَسَت (دَرَسَ) |
| ال on the adjective | the English says "the + adjective + noun" | الْبَيْت الْكَبِير (كَبِير) |
| no ال on a predicate | the English says "X is Y" | الْبَيْت كَبِير (الْكَبِير) |
| هُوَ / هِيَ as "is" | an "X is Y" sentence | الْبَيْت كَبِير (هُوَ) |
| iḍāfa first word | "the X of Y", "Y's X", city / university names | كِتَاب الطَّالِب (الْكِتَاب) |
| possessive | "my / your / his X" | بَيْتِي (الْبَيْت) |

**Never use as a distractor:** ال against none where both are natural (أُرِيد قَهْوَة / أُرِيد الْقَهْوَة; plain "coffee" in a request); the speaker's gender when the prompt does not cue it (accept both); a "you" form in `ty` / `fi` (the typed strings are identical); هُوَ separating two definite nouns (هٰذَا هُوَ الْكِتَاب is correct MSA); plural-of-things agreement before `plurals`; verb-first against subject-first order (both grammatical); a missing tanwin ا (a spelling point, not the rule).

**Accepted answers.**
- Every `ty` model answer `a[0]` has **at least two words** (the no-keyboard tiles are `a[0]` split at spaces + `x`).
- List the answer with and without the subject pronoun where both are natural with a verb (أَدْرُس الْعَرَبِيَّة | أَنَا أَدْرُس الْعَرَبِيَّة).
- List both speaker genders where the prompt does not cue one (أَنَا طَالِب | أَنَا طَالِبَة).
- Yes / no questions: with and without هَل (هَل أَنْتَ طَالِب؟ | أَنْتَ طَالِب؟).
- **Until engine request 1 (Arabic folding) is built, every `ty` and `fi` answer list also carries the unvowelled twin** written with its hamza seats (`أَنَا طَالِب|أنا طالب`), so a learner typing on a phone keyboard is not marked wrong. `a[0]` stays vowelled. After request 1 the twins are removed by the lead (one sed run).

**Worked hinges for the lessons where the rule is hardest** (shorthand of `tools/target/lib.js`; Arabic tiles split on spaces; twins shown on the first `ty` only):

```
letters    ['or', 'a big car', 'سَيَّارَة كَبِيرَة', 'كَبِير', 'سَيَّارَة ends in ة, so it is feminine and the adjective agrees: كَبِيرَة.']
           ['or', 'a big house', 'بَيْت كَبِير', 'كَبِيرَة', 'بَيْت is masculine, so the adjective is masculine too: no ة.']
           ['ty', 'This is a book.', 'هٰذَا كِتَاب|هذا كتاب', 'هٰذَا · كِتَاب', 'هٰذِهِ', 'كِتَاب is masculine: هٰذَا, not the feminine هٰذِهِ.']
           ['ty', 'This is a car.', 'هٰذِهِ سَيَّارَة', 'هٰذِهِ · سَيَّارَة', 'هٰذَا', 'سَيَّارَة is feminine (taa marbuta): هٰذِهِ.']
sounds     ['or', 'a small car', 'سَيَّارَة صَغِيرَة', 'صَغِير', 'Feminine noun, feminine adjective: صَغِيرَة agrees with سَيَّارَة.']
           ['ty', 'She is a student.', 'هِيَ طَالِبَة', 'هِيَ · طَالِبَة', 'طَالِب', 'A woman: the feminine طَالِبَة agrees with هِيَ.']
al         ['or', 'the big house', 'الْبَيْت الْكَبِير', 'كَبِير', 'Both words take the article: الْبَيْت الْكَبِير.']
           ['or', 'The house is big.', 'الْبَيْت كَبِير', 'هُوَ', 'No "is" in Arabic: the two words side by side.']
           ['ty', 'The house is big.', 'الْبَيْت كَبِير', 'الْبَيْت · كَبِير', 'الْكَبِير', 'No article on كَبِير: with the article it would mean "the big house".']
           ['ty', 'the new car', 'السَّيَّارَة الْجَدِيدَة', 'سَيَّارَة · جَدِيدَة', 'جَدِيدَة', 'Both words take the article; the sun letter س swallows the ل.']
greetings  ['or', 'Good morning', 'صَبَاح الْخَيْر', 'الصَّبَاح', 'The first word of an iḍāfa takes no article: صَبَاح الْخَيْر.']
           ['or', 'Sorry (a woman speaking)', 'أَنَا آسِفَة', 'آسِف', 'A woman speaking: the feminine آسِفَة agrees with her.']
           ['ty', 'Good evening', 'مَسَاء الْخَيْر', 'مَسَاء · الْخَيْر', 'الْمَسَاء', 'Iḍāfa: no article on the first word.']
numbers    ['ty', 'one car', 'سَيَّارَة وَاحِدَة', 'سَيَّارَة · one', 'وَاحِد', '"One" agrees with the feminine سَيَّارَة: وَاحِدَة.']
           ['ty', 'The price is twenty.', 'الثَّمَن عِشْرُون', 'الثَّمَن · عِشْرُون', 'هُوَ', 'No "is": الثَّمَن عِشْرُون.']
pronouns   ['or', 'You are a student. (to a woman)', 'أَنْتِ طَالِبَة', 'أَنْتَ', 'To a woman: the feminine أَنْتِ and طَالِبَة agree.']
present    ['ty', 'She works in Chicago.', 'تَعْمَل فِي شِيكَاغُو|هِيَ تَعْمَل فِي شِيكَاغُو', 'عَمِلَ (to work) · she', 'يَعْمَل', 'She: the feminine prefix تَـ agrees with the subject.']
past       ['ty', 'Sara studied Arabic.', 'دَرَسَت سَارَة الْعَرَبِيَّة|سَارَة دَرَسَت الْعَرَبِيَّة', 'دَرَسَ · سَارَة', 'دَرَسَ', 'Sara is a woman: the feminine ending -at agrees with her.']
```

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4, §5 and §10):
- **Kept: all 26 items.** Ids lose the `ar-` prefix; each roadmap id appears exactly once in a `roadmap` field, so `link_roadmap.py` links all 26.
- **Added (2):**
  - `sounds`, "Throat and heavy sounds", lesson 2. ḥ, ʿ and ṣ are the hardest sounds for English speakers, ṭ and ẓ next (El Haimeur 2025, §4.5), and the roadmap folds them into "Letters and sounds", which must already introduce 28 letters. Alif Baa spreads the letters over nine units; this app has one lesson per roadmap item, so the sounds get their own. Its `roadmap` field is empty.
  - `ordering`, "Ordering and paying", lesson 16. Survival needs (§5): أُرِيد, بِكَم؟, الْحِسَاب, prices; the roadmap has numbers but no transaction. Its `roadmap` field is empty.
- **Not added:** a dialect lesson (the Spoken Arabic deck and two honesty paragraphs do the job without teaching non-standard spelling, §2.1); a time-telling lesson (clock time needs ordinal numbers: recognition in `adverbs` only); a separate taa marbuta lesson (in `gender`).
- **Reordered:**
  - Stage 3 starts with `adjectives` (roadmap: 3rd in the stage). Noun + adjective agreement in gender and definiteness is the standing rule (§7), builds directly on `definite` and `gender`, and must come before `idafa`, whose whole point is the contrast with it (كِتَاب الطَّالِب against الْكِتَاب الْجَدِيد).
  - `have` moves up to follow `possessive` (roadmap: 9th in the stage): عِنْدِي, عِنْدَكَ is the possessive endings on a preposition, and "I have" is a survival need.
  - `roots` moves from 11th to 6th in the stage, after `plurals` and before the verbs: broken plurals are root + pattern, and verbs are learned as patterns (Al-Kitaab introduces roots and the dictionary early; Alif Baa unit 10 ends with "roots and patterns": [Montgomery College outline](https://policy.montgomerycollege.edu/_documents/academics/departments/humanities-tpss/arab-101.pdf)) [curriculum convention].
  - `negation` stays after `verb-sentences`; `adverbs` moves after `negation` and right before `past` (time words such as أَمْس "yesterday" are needed for the past).
- **Widened:**
  - `letters` also shows ة and ال as two "signs you'll see everywhere" and gives the 25 **first words** (§8, note 2), so that the script-stage practice sets can meet §7.
  - `hamza` also teaches ة as a letter to read (the grammar comes in `gender`) and the extra ا of tanwin -an.
  - `negation` covers لَا with verbs and لَيْسَ with عِنْدَ, places and ة adjectives (§4.9).
  - `numbers` covers 0–100 and the Eastern Arabic digits.
- **Renamed:** titles gloss the Arabic in English and keep the Arabic short.
- **Stages:** the roadmap's three, unchanged in name. Stage 1 has 7 lessons, stage 2 has 9, stage 3 has 12.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Script and sounds** | | | |
| 1 | `letters` | The 28 letters, family by family | ar-letters | Right to left; the letters in shape families that differ only by dots (ب ت ث ن ي; ج ح خ; د ذ; ر ز; س ش; ص ض; ط ظ; ع غ; ف ق) plus ا ك ل م ه و; each letter's name, sound and pron symbol; ة and ال as two signs on every page; the 25 first words with pron; what MSA is (§2.1) and that the course does not teach Qurʾanic recitation. Trap: reading left to right; dots ignored (بَيْت / بِنْت / تِين). Points to Letters 2. | Letters 1: alif to sad |
| 2 | `sounds` | Throat and heavy sounds | (added) | ح (ḥ, not h), ع (ʿ), ء (ʾ), خ, غ, ق (q, not k); the heavy (emphatic) ص ض ط ظ and how they darken the vowel; minimal pairs قَلْب / كَلْب, صَيْف / سَيْف, طِين / تِين, عَيْن / أَيْن. Trap: replacing them with English h, k, s, t, and ignoring ʿ (El Haimeur 2025). | Sound pairs |
| 3 | `vowels` | Short and long vowels | ar-vowels | Fatha, kasra, damma (a i u) and the long vowels ا ي و (ā ī ū); جَمَل / جَمَال; the macron in the pron; the bare-ending rule in one sentence (§6.6); why the course shows marks and what real texts do. Trap: short and long treated alike (ArabicPod101); reading ي and و always as consonants. | Vowels and marks |
| 4 | `shapes` | Joining letters: start, middle, end | ar-shapes | How letters join and change shape (ب: بـ ـبـ ـب in a lesson table, with tatweel); the six non-joining letters ا د ذ ر ز و and the gap after them; ه and ك shapes; لا (lam + alif). Trap: looking for the isolated shape inside a word; joining ر to the next letter. | Letters 2: dad to ya |
| 5 | `sukun-shadda` | Sukun and shadda | ar-sukun-shadda | Sukun (no vowel: مَكْتَب); shadda (doubled letter: مُدَرِّسَة); دَرَسَ / دَرَّسَ; diphthongs with sukun (بَيْت, يَوْم). Trap: doubled letters said once; a vowel added between consonants. | Vowels and marks |
| 6 | `hamza` | Hamza, alif maqsura and tanwin | ar-hamza | ء and its seats أ إ ؤ ئ, آ; ى at the end (عَلَى, مُسْتَشْفَى); ة as a letter (-a); tanwin -an with its extra ا (شُكْرًا, جِدًّا, أَهْلًا) and why -un / -in are never shown (§2.3). Trap: ى read as ī; ة read as h or t; hamza dropped from أَنَا in spelling. | Vowels and marks |
| 7 | `al` | ال: the article, sun and moon letters | ar-al | ال means "the"; sun letters swallow the ل (الشَّمْس *ash-shams*), moon letters keep it (الْقَمَر *al-qamar*); the hyphen in the pron; prefix + ال (وَالْبَيْت, بِالسَّيَّارَة); first contrast الْبَيْت الْكَبِير / الْبَيْت كَبِير. Trap: saying *al-shams*; ال on one word only. | Vowels and marks |
| | | **Stage 2: First sentences** | | | |
| 8 | `greetings` | Greetings and goodbyes | ar-greetings | السَّلَامُ عَلَيْكُم and its reply; مَرْحَبًا, أَهْلًا وَسَهْلًا; صَبَاح الْخَيْر / صَبَاح النُّور, مَسَاء الْخَيْر / مَسَاء النُّور; كَيْفَ حَالُكَ / حَالُكِ؟ بِخَيْر، الْحَمْدُ لِلّٰه; شُكْرًا / عَفْوًا; مَعَ السَّلَامَة; the honesty paragraph and the Spoken Arabic deck. Trap: أَنَا جَيِّد for "I'm fine"; كَيْفَ حَالُكَ to a woman. | Greetings and courtesy |
| 9 | `gender` | Masculine and feminine: ة | ar-gender | Most feminine nouns end in ة; people by sex (طَالِب / طَالِبَة, مُدَرِّس / مُدَرِّسَة); a few feminine nouns without ة (أُمّ, بِنْت); هٰذَا / هٰذِهِ; adjectives add ة (preview of `adjectives`). Trap: "it" has no gender in English; ة written ه. | Family and people |
| 10 | `pronouns` | I, you, he, she | ar-pronouns | أَنَا, أَنْتَ / أَنْتِ, هُوَ / هِيَ, نَحْنُ, هُم (recognition: أَنْتُم, هُنَّ…); "it" = هُوَ / هِيَ; the (to a man) / (to a woman) cue; the speaker's gender (أَنَا طَالِب / طَالِبَة). Trap: أَنْتَ to everyone; هُوَ for a feminine thing. | About me |
| 11 | `nominal` | Sentences with no "is" | ar-nominal | Subject + predicate with nothing between (أَنَا طَالِب, الْبَيْت كَبِير, هِيَ فِي الْبَيْت); questions by intonation or هَل (preview); "was" exists but is not taught. Trap: هُوَ or أَكُون inserted as "is" (§4.2). | Describing things |
| 12 | `definite` | "The" and "a": ال and no ال | ar-definite | No word for "a"; definite = ال, a name, a possessive ending; phrase vs sentence (الْبَيْت الْكَبِير / الْبَيْت كَبِير); ال in general statements (أُحِبّ الْقَهْوَة) and with languages. Trap: the most frequent learner error (§4.1). | Home and things |
| 13 | `nisba` | Where you're from: -ī and -iyya | ar-nisba | Country → nisba: أَمْرِيكَا → أَمْرِيكِيّ / أَمْرِيكِيَّة, مِصْر → مِصْرِيّ, لُبْنَان → لُبْنَانِيّ, الْعَرَبِيَّة; ال dropped from countries in the nisba (الْمَغْرِب → مَغْرِبِيّ); أَنَا مِن شِيكَاغُو; languages. Trap: no ة for a woman; ال kept (الْمَغْرِبِيّ for "Moroccan" as a predicate). | About me |
| 14 | `questions` | Question words: ما, من, أين, هل | ar-questions | مَا (with nouns: مَا اِسْمُكَ؟), مَاذَا (with verbs), مَن, أَيْنَ, كَيْفَ, مَتَى, كَم, هَل; question word first, no word-order change; Egyptian and Levantine question words in the Spoken deck notes. Trap: مَاذَا before a noun; word order flipped as in English. | Spoken Arabic |
| 15 | `numbers` | Numbers 0 to 100 | ar-numbers | Counting forms 0–10, 11–19, tens, 21–99 ("one and twenty": وَاحِد وَعِشْرُون); Eastern Arabic digits ٠–٩ read left to right; "one" agrees (سَيَّارَة وَاحِدَة); the number alone for prices (الثَّمَن عِشْرُون); gender polarity of 3–10 shown once, not tested (§4.10). Trap: 25 said in English order; ٢٥ read as 52. | Numbers and money |
| 16 | `ordering` | Ordering and paying | (added) | أُرِيد + a ة-noun or a definite noun (أُرِيد قَهْوَة, أُرِيد الشَّاي بِالنَّعْنَاع); مِن فَضْلِكَ / فَضْلِكِ; بِكَم هٰذَا؟; الْحِسَاب، مِن فَضْلِكَ; 11–99 + singular with -an as recognition (عِشْرُون دُولَارًا); local currencies. Trap: "please" without the man / woman form; أُرِيد شَاي without the tanwin ا (taught as recognition). | Food and drink |
| | | **Stage 3: Building sentences** | | | |
| 17 | `adjectives` | Noun + adjective: agreement | ar-adjectives | The adjective follows the noun and agrees in gender and in definiteness (بَيْت كَبِير, الْبَيْت الْكَبِير, سَيَّارَة جَدِيدَة, السَّيَّارَة الْجَدِيدَة); two adjectives; the sentence form for "is". Trap: adjective first; ال or ة on one word only (§4.1, §4.3). | Describing things |
| 18 | `idafa` | Iḍāfa: the X of Y | ar-idafa | Noun + noun, first without ال (كِتَاب الطَّالِب, بَاب الْبَيْت); names (جَامِعَةْ تُولْسَا, مَدِينَةْ نْيُويُورْك) with ةْ said -at; an adjective after the whole phrase (recognition). Trap: ال on the first word; English order (الطَّالِب كِتَاب). | Travel and help |
| 19 | `possessive` | My, your, his, her: possessive endings | ar-possessive | ـي, ـكَ / ـكِ, ـهُ, ـهَا, ـنَا on nouns (بَيْتِي, اِسْمُكَ, بَيْتُهَا); ة becomes ت (مَدِينَتِي, صَدِيقَتِي); the noun is definite (no ال); only as subject or predicate except ـي (§2.3). Trap: الْبَيْتِي; بَيْت أَنَا; ـكَ to a woman. | Family and people |
| 20 | `have` | عند: to have | ar-have | عِنْدِي, عِنْدَكَ / عِنْدَكِ, عِنْدَهُ, عِنْدَهَا, عِنْدَنَا; questions (هَل عِنْدَكَ…؟); negative لَيْسَ عِنْدِي; "there is" هُنَاكَ (recognition). Trap: looking for a verb "to have"; لَا عِنْدِي. | Home and things |
| 21 | `plurals` | Plurals: sound and broken | ar-plurals | Sound masculine -ūn (مُدَرِّسُون), sound feminine -āt (مُدَرِّسَات, سَيَّارَات); broken plurals learned with the word (كُتُب, بُيُوت, أَوْلَاد); plurals of things take a feminine singular adjective (السَّيَّارَات الْجَدِيدَة); duals recognition only. Trap: one ending for everything; كَبِيرُون after things. | Food and drink |
| 22 | `roots` | Roots and patterns | ar-roots | Three-letter roots (ك ت ب: كِتَاب, كَاتِب, مَكْتَب, مَكْتَبَة, يَكْتُب; د ر س: دَرْس, مَدْرَسَة, مُدَرِّس); patterns as shapes (مَفْعَل = a place); how a dictionary is ordered. Trap: guessing meaning from one letter; English prefixes and suffixes as a model. | Daily routine |
| 23 | `present` | Present-tense verbs | ar-present | Prefixes أَ تَ يَ نَ and endings -īn, -ūn on one verb family (أَدْرُس, تَدْرُس / تَدْرُسِين, يَدْرُس, تَدْرُس, نَدْرُس, يَدْرُسُون); the pronoun can drop; common verbs (أَسْكُن, أَعْمَل, أُحِبّ, أَتَكَلَّم, أَشْرَب); mood ending dropped (§2.3). Trap: هِيَ يَدْرُس; أَنْتِ تَدْرُس (to a woman). | Daily routine |
| 24 | `verb-sentences` | Verb sentences and word order | ar-verb-sentences | Verb first (تَدْرُس سَارَة الْعَرَبِيَّة) and subject first (سَارَة تَدْرُس…) are both normal; the verb before a plural subject stays singular (recognition); objects with ال or ة; verb-first is not a question (§4.12). Trap: reading verb-first as a question; plural verb before a plural subject. | Daily routine |
| 25 | `negation` | Saying no: لا and ليس | ar-negation | لَا + present (لَا أَعْرِف, لَا أَتَكَلَّم الْعَرَبِيَّة جَيِّدًا: recognition of -an); لَيْسَ / لَيْسَت with عِنْدَ, places and ة adjectives; لَسْتُ طَالِبًا as a model (§4.9); نَعَم / لَا. Trap: لَا before a noun; Egyptian / Levantine مِش in MSA sentences. | Traps for English speakers |
| 26 | `adverbs` | Time words and adverbs | ar-adverbs | الْيَوْم, غَدًا, أَمْس, الْآن, دَائِمًا, أَحْيَانًا, كُلّ يَوْم, صَبَاحًا, فِي الْمَسَاء (not مَسَاءً, which has no extra ا: §2.3), جِدًّا, كَثِيرًا; days of the week (يَوْم الْأَحَد…); position at the start or end. Trap: جِدًّا before the adjective (very big = كَبِير جِدًّا). | Time and days |
| 27 | `past` | Past-tense verbs | ar-past | Endings on one verb family (دَرَسْتُ, دَرَسْتَ / دَرَسْتِ, دَرَسَ, دَرَسَت, دَرَسْنَا, دَرَسُوا); common verbs (ذَهَبَ, سَكَنَ, عَمِلَ, أَكَلَ, شَرِبَ); أَمْس, الْأُسْبُوع الْمَاضِي; لَمْ is not taught (negating the past: recognition line only). Trap: هِيَ دَرَسَ; past with a present prefix. | Time and days |
| 28 | `directions` | Asking for help and directions | ar-directions | لَوْ سَمَحْتَ / سَمَحْتِ, أَيْنَ…؟, عَلَى الْيَمِين / الْيَسَار, عَلَى طُول, قَرِيب / بَعِيد, هُنَا / هُنَاكَ, هَل تَتَكَلَّم الْإِنْجِلِيزِيَّة؟, لَا أَفْهَم, مِن فَضْلِكَ أَعِد (recognition); places with iḍāfa (مَحَطَّةْ الْقِطَار). Trap: man / woman forms in requests; ال dropped in places. | Around town and directions |

Per-lesson notes for writers:
1. Every set satisfies §7. The last two items of each set may mix in a neighbour from an earlier lesson; preferred neighbours are a §7 contrast, a "you" form in `mc`, and a Sound pairs word in `mc`.
2. **First words** (taught in `letters`, used in all script-stage sets, with pron in the lesson body): بَيْت house, بِنْت girl, وَلَد boy, بَاب door, كِتَاب book, سَيَّارَة car, مَدْرَسَة school, قَلَم pen, طَالِب / طَالِبَة student, مُدَرِّس / مُدَرِّسَة teacher, كَبِير / كَبِيرَة big, صَغِير / صَغِيرَة small, جَدِيد / جَدِيدَة new, جَمِيل / جَمِيلَة beautiful, هُوَ he / it, هِيَ she / it, أَنَا I, هٰذَا / هٰذِهِ this, and ال "the". Script-stage items use only these words plus the letter or mark the lesson teaches.
3. In the seven script lessons, practice tests reading: `mc` "Which word is *bayt*?" (Arabic options) or "How do you say بَيْت?" (romanised options, §6.5); `or` with whole first words; `fi` with a whole-word blank (هٰذِهِ __ / سَيَّارَة, with كِتَاب as a distractor because of agreement); `ty` short phrases from the first words.
4. No `fi` blank inside a word (§10.3). A possessive or a "you" contrast is tested in `mc` / `or` with whole-word options.
5. **`letters` body budget** (250–450 words): one table of the shape families (letters in `<td class="k">` cells), the ة and ال paragraph, the MSA paragraph and the one Qurʾan line; letter-by-letter names and sounds live in the two letter decks, and the 25 first words are spread over example rows in `letters` (about 8) and `vowels` (the rest).
6. Stage 2 lessons use the polite neutral register; stage 3 lessons may use casual content (friends, family) but stay in MSA.

## 9. Decks

**17 decks in 5 groups**, about 290 cards. The two letter decks have 14 cards each, "Vowels and marks" 18, "Sound pairs" 16; the other thirteen decks have 16 to 18 (the validator allows 12 to 30). Card shape: `target | pron | meaning | note`.
- `target`: fully vowelled Arabic in the canonical vowelling (§2.7). No tatweel, no digits (except Numbers deck digit cards), no Latin letters. ؟ allowed at the end; no ، or . inside a card target.
- `pron`: **the output of `respell.js`**, pasted, never edited (`node tools/target/ar/respell.js "<target>"`; after any generator change the lead runs `node tools/target/repron.js ar`).
- `meaning`: short American English, unique within the deck; every "you" card says "(to a man)" / "(to a woman)"; nouns about people say the sex where Arabic marks it ("student (a woman)").
- `note`: one English line, or empty for at most a quarter of a deck: the trap, the man / woman partner form, a literal gloss, and in the Spoken Arabic deck the dialect forms.

**Groups, in order:**

| Group | Decks |
|---|---|
| Script and sounds | Letters 1: alif to sad · Letters 2: dad to ya · Vowels and marks · Sound pairs |
| First steps | Greetings and courtesy · About me · Family and people · Numbers and money |
| Everyday life | Food and drink · Home and things · Describing things · Daily routine · Time and days |
| Out and about | Around town and directions · Travel and help |
| Watch out | Spoken Arabic · Traps for English speakers |

**Letter decks (the script stage without the letter-drill machine).** They are ordinary decks:
- One letter per card, in alphabetical order. `target` = the letter alone; `pron` = its **name** (the generator gives it, and the voice says the name): ب → `bāʾ`.
- `meaning` = the sound plus an English hint, unique in the deck: "b, as in boy", "ḥ, a breathy h from the throat".
- `note` = the family and the joined forms written out in words ("Same shape as ت ث ن ي; one dot below. Joins on both sides."). Joined forms with tatweel go in the `shapes` lesson tables, not in targets.
- ة, ى, ء and لا are cards in "Vowels and marks", not in the letter decks (they are not among the 28).
- If the letter-drill machine is generalised (§10.7), these decks feed it unchanged ("hear a letter, tap it"; "see a letter, tap its sound").

**Deck rules for writers**
- Phrases with "you" come in pairs only where both are useful (مِن فَضْلِكَ / مِن فَضْلِكِ); otherwise the man form, with the woman form in the note.
- Verbs are cards in the "I" form of the present (أَدْرُس "I study"), with the "he" past in the note (دَرَسَ).
- Adjectives are cards in the masculine, with the ة form in the note, except where the deck teaches the pair.
- A card target never needs a case ending; if a phrase would (an indefinite object without a ة), rephrase (§2.3).

### 9.1 Decks, descriptions, lessons and sample cards

Each deck: a one-line description (`desc` in profile.json), the lessons that link to it, and 5 sample cards (`target | pron | meaning | note`) that set the level and tone. All prons were generated.

**Letters 1: alif to sad** (Script and sounds). *The first 14 letters, alif to ṣād, with their sounds and families.* Lessons: `letters`.

| target | pron | meaning | note |
|---|---|---|---|
| ا | `alif` | long ā, as in father | Also a seat for hamza (أ). Never joins to the next letter. |
| ب | `bāʾ` | b, as in boy | Same shape as ت ث; one dot below. |
| ح | `ḥāʾ` | ḥ, a breathy h from the throat | Not English h (that is ه). Family: ج ح خ. |
| خ | `khāʾ` | kh, as in Bach | One dot above. Family: ج ح خ. |
| ص | `ṣād` | ṣ, a heavy s | Darkens the vowel next to it: صَيْف, not سَيْف. |

**Letters 2: dad to ya** (Script and sounds). *The last 14 letters, ḍād to yāʾ.* Lessons: `shapes`.

| target | pron | meaning | note |
|---|---|---|---|
| ض | `ḍād` | ḍ, a heavy d | The "letter of ḍād": Arabs call Arabic the language of ḍād. |
| ع | `ʿayn` | ʿ, a squeeze deep in the throat | No English sound. Written ʿ in the romanisation. |
| ق | `qāf` | q, a k from deep in the throat | قَلْب heart, كَلْب dog. |
| و | `wāw` | w, or a long ū | Never joins to the next letter. |
| ي | `yāʾ` | y, or a long ī | Two dots below; at the end of a word the dots stay (ى without dots is alif maqsura). |

**Vowels and marks** (Script and sounds). *Short and long vowels, sukun, shadda, tanwin, hamza, ة, ى, and ال with sun and moon letters.* Lessons: `vowels`, `sukun-shadda`, `hamza`, `al`.

| target | pron | meaning | note |
|---|---|---|---|
| بَ | `ba` | ba: fatha, a short a | The small slash above the letter. |
| بُو | `bū` | bū: damma and و, a long ū | Damma is the little و above the letter. |
| مُدَرِّسَة | `mudarrisa` | teacher (a woman) | Shadda on ر: hold the r. ة at the end is said -a. |
| شُكْرًا | `shukran` | thanks | Tanwin -an: the doubled mark plus an extra ا. |
| الشَّمْس | `ash-shams` | the sun | A sun letter: ال is said ash-, not al-. |

**Sound pairs** (Script and sounds). *Words that differ only in a sound English speakers merge: q / k, ṣ / s, ṭ / t, ʿ / ʾ, ḥ / h, kh / ḥ, short / long, single / doubled.* Lessons: `sounds`.

| target | pron | meaning | note |
|---|---|---|---|
| قَلْب | `qalb` | heart | q from deep in the throat. Compare كَلْب (dog). |
| كَلْب | `kalb` | dog | Plain k. Compare قَلْب (heart). |
| صَيْف | `ṣayf` | summer | Heavy ṣ: the a sounds darker. Compare سَيْف. |
| عَيْن | `ʿayn` | eye | Starts with ʿayn. Compare أَيْنَ (where). |
| جَمَال | `jamāl` | beauty | Long ā. Compare جَمَل (camel). |

**Greetings and courtesy** (First steps). *Hello, thank you, please, sorry, goodbye: the phrases MSA shares with everyday speech.* Lessons: `greetings`.

| target | pron | meaning | note |
|---|---|---|---|
| السَّلَامُ عَلَيْكُم | `as-salāmu ʿalaykum` | hello (peace be upon you) | For anyone, any time. Reply: وَعَلَيْكُم السَّلَام. |
| مَرْحَبًا | `marḥaban` | hi | Neutral and everyday. Reply مَرْحَبًا or أَهْلًا. |
| كَيْفَ حَالُكِ؟ | `kayfa ḥāluki?` | How are you? (to a woman) | To a man: كَيْفَ حَالُكَ؟ Answer: بِخَيْر، الْحَمْدُ لِلّٰه. |
| مِن فَضْلِكَ | `min faḍlika` | please (to a man) | To a woman: مِن فَضْلِكِ. |
| مَعَ السَّلَامَة | `maʿa as-salāma` | goodbye | Literally "with safety". |

**About me** (First steps). *Your name, where you're from, where you live, what you do.* Lessons: `pronouns`, `nisba`.

| target | pron | meaning | note |
|---|---|---|---|
| مَا اِسْمُكَ؟ | `mā ismuka?` | What's your name? (to a man) | To a woman: مَا اِسْمُكِ؟ |
| أَنَا أَمْرِيكِيّ | `anā amrīkī` | I'm American (a man speaking) | A woman says أَنَا أَمْرِيكِيَّة. No "am" in Arabic. |
| أَنَا مِن شِيكَاغُو | `anā min shīkāghū` | I'm from Chicago | مِن = from. Put your own city in. |
| أَسْكُن فِي تِكْسَاس | `askun fī tiksās` | I live in Texas | أَسْكُن = I live; past سَكَنَ. |
| أَدْرُس الْعَرَبِيَّة | `adrus al-ʿarabiyya` | I'm studying Arabic | Languages take the article: الْعَرَبِيَّة. |

**Family and people** (First steps). *Family members and people, with my / your.* Lessons: `gender`, `possessive`.

| target | pron | meaning | note |
|---|---|---|---|
| أُمِّي | `ummī` | my mother | أُمّ is feminine without ة. |
| أَبِي | `abī` | my father | أَب + ـي. |
| أُخْتِي | `ukhtī` | my sister | أَخِي = my brother. |
| صَدِيقَتِي | `ṣadīqatī` | my friend (a woman) | ة becomes ت before an ending. |
| زَوْجِي | `zawjī` | my husband | My wife: زَوْجَتِي. |

**Numbers and money** (First steps). *Numbers 0–100, the Eastern Arabic digits, prices and currencies.* Lessons: `numbers`.

| target | pron | meaning | note |
|---|---|---|---|
| وَاحِد | `wāḥid` | one | After a feminine noun: وَاحِدَة. |
| ٣ | `thalātha` | 3 (Eastern Arabic digit) | Used in Saudi Arabia, Egypt and the Gulf; Morocco uses 3. |
| عِشْرُون | `ʿishrūn` | twenty | In speech often ʿishrīn. |
| بِكَم هٰذَا؟ | `bikam hādhā?` | How much is this? | For a feminine thing: بِكَم هٰذِهِ؟ |
| رِيَال | `riyāl` | riyal | Saudi and Qatari money. Dirham (UAE, Morocco): دِرْهَم. |

**Food and drink** (Everyday life). *Coffee, tea, food, ordering and paying.* Lessons: `ordering`, `plurals`.

| target | pron | meaning | note |
|---|---|---|---|
| قَهْوَة عَرَبِيَّة | `qahwa ʿarabiyya` | Arabic coffee | Light, with cardamom, in tiny cups. |
| شَاي بِالنَّعْنَاع | `shāy bin-naʿnāʿ` | mint tea | بِـ = with. A sun letter after the article: bin-naʿnāʿ. |
| أُرِيد مَاء | `urīd māʾ` | I'd like water | أُرِيد = I want, polite enough with مِن فَضْلِكَ. |
| الْحِسَاب مِن فَضْلِكَ | `al-ḥisāb min faḍlika` | The check, please (to a man) | To a woman: مِن فَضْلِكِ. |
| لَذِيذ | `ladhīdh` | delicious | Feminine: لَذِيذَة (الْقَهْوَة لَذِيذَة). |

**Home and things** (Everyday life). *Rooms and everyday objects; "I have"; the and a.* Lessons: `definite`, `have`.

| target | pron | meaning | note |
|---|---|---|---|
| عِنْدِي سَيَّارَة | `ʿindī sayyāra` | I have a car | No verb "have": عِنْدِي = "with me". |
| غُرْفَة | `ghurfa` | room | Feminine (ة). |
| مِفْتَاح | `miftāḥ` | key | Plural مَفَاتِيح (broken plural). |
| هَاتِف | `hātif` | phone | Also جَوَّال in Saudi Arabia, مُوبَايِل in many places. |
| الشَّقَّة جَمِيلَة | `ash-shaqqa jamīla` | The apartment is nice. | No "is"; the adjective has no article. |

**Describing things** (Everyday life). *Adjectives in pairs, with agreement.* Lessons: `nominal`, `adjectives`.

| target | pron | meaning | note |
|---|---|---|---|
| كَبِير | `kabīr` | big | Feminine: كَبِيرَة. |
| صَغِيرَة | `ṣaghīra` | small (feminine) | Masculine: صَغِير. |
| جَمِيل جِدًّا | `jamīl jiddan` | very beautiful | جِدًّا comes after the adjective. |
| قَدِيم | `qadīm` | old (things) | For people: كَبِير فِي السِّنّ. |
| رَخِيص | `rakhīṣ` | cheap | Opposite: غَالِي, expensive (spelling to check, §11). |

**Daily routine** (Everyday life). *Everyday verbs in the present, and word families.* Lessons: `roots`, `present`, `verb-sentences`.

| target | pron | meaning | note |
|---|---|---|---|
| أَعْمَل فِي مَكْتَب | `aʿmal fī maktab` | I work in an office | مَكْتَب: root ك ت ب, "place of writing". |
| أَشْرَب الْقَهْوَة كُلّ يَوْم | `ashrab al-qahwa kull yawm` | I drink coffee every day | General statement: الْقَهْوَة with the article. |
| أَتَكَلَّم الْعَرَبِيَّة قَلِيلًا | `atakallam al-ʿarabiyya qalīlan` | I speak a little Arabic | قَلِيلًا: -an with its extra ا. |
| أَسْتَيْقِظ مُبَكِّرًا | `astayqiẓ mubakkiran` | I get up early | مُبَكِّرًا = early. |
| تَدْرُسِين | `tadrusīn` | you study (to a woman) | To a man: تَدْرُس. |

**Time and days** (Everyday life). *Today, tomorrow, yesterday, days of the week, and the past.* Lessons: `adverbs`, `past`.

| target | pron | meaning | note |
|---|---|---|---|
| الْيَوْم | `al-yawm` | today | Literally "the day". |
| غَدًا | `ghadan` | tomorrow | -an with its extra ا. |
| أَمْس | `ams` | yesterday | |
| يَوْم الْجُمُعَة | `yawm al-jumuʿa` | Friday | The weekend day in most Arab countries. |
| ذَهَبْتُ إِلَى السُّوق | `dhahabtu ilā as-sūq` | I went to the market | ذَهَبَ = he went; -tu = I. |

**Around town and directions** (Out and about). *Asking the way: where, right, left, near, far.* Lessons: `directions`.

| target | pron | meaning | note |
|---|---|---|---|
| أَيْنَ الْمَطْعَم؟ | `ayna al-maṭʿam?` | Where's the restaurant? | Question word first; the place takes the article. |
| عَلَى الْيَمِين | `ʿalā al-yamīn` | on the right | Left: عَلَى الْيَسَار. |
| قَرِيب مِن هُنَا | `qarīb min hunā` | near here | Far: بَعِيد. |
| لَوْ سَمَحْتِ | `law samaḥti` | excuse me (to a woman) | To a man: لَوْ سَمَحْتَ. Also "please". |
| عَلَى طُول | `ʿalā ṭūl` | straight ahead | Heard everywhere in this sense [§11]. |

**Travel and help** (Out and about). *Airport, hotel, transport, and asking for help.* Lessons: `idafa`.

| target | pron | meaning | note |
|---|---|---|---|
| مَحَطَّةْ الْقِطَار | `maḥaṭṭat al-qiṭār` | the train station | Iḍāfa: ة said -at; no article on the first word. |
| جَوَاز السَّفَر | `jawāz as-safar` | passport | Iḍāfa: "permit of travel". |
| الْمَطَار | `al-maṭār` | the airport | |
| فُنْدُق | `funduq` | hotel | |
| هَل تَتَكَلَّم الْإِنْجِلِيزِيَّة؟ | `hal tatakallam al-injilīziyya?` | Do you speak English? (to a man) | To a woman: هَل تَتَكَلَّمِين الْإِنْجِلِيزِيَّة؟ |

**Spoken Arabic** (Watch out). *The MSA word, and what you'll hear instead in Egypt and the Levant (recognition only).* Lessons: `questions`.

| target | pron | meaning | note |
|---|---|---|---|
| مَاذَا | `mādhā` | what (before a verb) | Egypt: *ēh* · Levant: *shū*. |
| أُرِيد | `urīd` | I want | Egypt: *ʿāyiz* (man), *ʿāyza* (woman) · Levant: *biddī*. |
| جَيِّد | `jayyid` | good | Egypt: *kwayyis* · Levant: *mnīḥ*. |
| لِمَاذَا | `limādhā` | why | Egypt: *lēh* · Levant: *lēsh*. |
| نَعَم | `naʿam` | yes | Egypt: *aywa* · Levant: *ē*, *naʿam* too. |

**Traps for English speakers** (Watch out). *Calques, false friends and courtesy traps.* Lessons: `negation`.

| target | pron | meaning | note |
|---|---|---|---|
| بِخَيْر | `bikhayr` | I'm fine | Not أَنَا جَيِّد ("I'm a good person"). |
| عَفْوًا | `ʿafwan` | you're welcome | Also "excuse me?" when you didn't hear. |
| إِن شَاءَ اللّٰه | `in shāʾa llāh` | hopefully (God willing) | About any future plan; can be a polite "maybe". |
| أَنَا آسِفَة | `anā āsifa` | I'm sorry (a woman speaking) | A man says أَنَا آسِف. |
| لَا أَعْرِف | `lā aʿrif` | I don't know | لَا before a present verb; لَيْسَ before nouns. |

### 9.2 Localisation

- **Names:** Arab names, common across the region and easy to read: أَحْمَد, مُحَمَّد, عُمَر, يُوسُف, خَالِد, كَرِيم; سَارَة, فَاطِمَة, لَيْلَى, مَرْيَم, نُور, هُدَى. The learner is American: "أَنَا مِن شِيكَاغُو", أَمْرِيكِيّ / أَمْرِيكِيَّة; an American friend may be جُون or إِمِيلِي (the generator handles them; their pron reflects the Arabic spelling).
- **Places:** US: نْيُويُورْك, شِيكَاغُو, تِكْسَاس, كَالِيفُورْنِيَا, جَامِعَةْ تُولْسَا as the iḍāfa model. Arab world: الْقَاهِرَة, عَمَّان, بَيْرُوت, الرِّيَاض, دُبَيّ, الدَّار الْبَيْضَاء, مَرَّاكُش, تُونِس. Avoid capitals and places in active conflict as settings for cheerful dialogues [inference].
- **Food:** قَهْوَة عَرَبِيَّة, شَاي بِالنَّعْنَاع, حُمُّص, فَلَافِل, شَاوَرْمَا, تَمْر, خُبْز, كُنَافَة, عَصِير.
- **Money:** دُولَار in US scenes; رِيَال (Saudi), دِرْهَم (UAE, Morocco), جُنَيْه (Egypt), دِينَار (Jordan) in travel scenes. Realistic prices; numbers as words (§2.7).
- **Settings:** a university Arabic class in the US, a trip to Amman or Cairo, a café, a hotel, a taxi. No K-pop, no source-course leftovers (PHASE2-BRIEF).
- **Religion:** formulas with God's name appear as everyday courtesy (§2.4); no religious instruction; mosque and church are both ordinary places in examples.

## 10. Typing and script

### 10.1 Script and `targetScript`

- Arabic script: 28 letters, **right to left**, cursive (most letters join to the next and change shape by position), short vowels as optional marks above and below. In this course the marks are always present (§6.5).
- **`targetScript`:** `[\u0600-\u06FFāīūḥṣḍṭẓʿʾ]`: the whole Arabic block (letters, marks, ؟ ، ؛, Eastern Arabic digits), plus the romanisation's special letters, so that a romanised answer added by the pipeline (`pronAnswers`, request 4) or a script-stage item whose answer is romanised (§6.5) passes the validator when it contains one of them. English text does not match unless it contains one of those letters (keep *ā* etc. out of English `a[]` answers; card targets must be Arabic: writer rule, the validator cannot tell).

### 10.2 Where Arabic appears in an English page, and what each place needs

The app already handles a right-to-left **interface** with English inside it (`src/app.html` lines 29–34: `[dir=rtl] … {direction:ltr; unicode-bidi:isolate}` on `.face .ko`, `.ex .k`, `.tiles`, `.prac-built`, `.prac-pool`, `input.ans`, …). en-ar needs the **mirror**: an LTR page with RTL target runs. W3C: "tightly wrap every opposite-direction phrase in markup that sets its base direction"; `dir` also isolates it; use `dir="auto"` or `<bdi>` when the direction is not known in advance; avoid embedding control characters ([W3C, *Inline markup and bidirectional text in HTML*](https://www.w3.org/International/articles/inline-bidi-markup)) [curriculum convention: standards body guidance]. Writers cannot add any of this (invisible characters are banned, and they write plain strings), so it is all engine work (request 3).

| Place | Content | Needs |
|---|---|---|
| Card front | Arabic target | `dir="rtl" lang="ar"`, centred, large (≥ 2× body), line height ≥ 1.9 |
| Card back / review | meaning (English) + target + pron | target isolated RTL; pron LTR on its own line |
| Lesson example rows `{{ex:…}}` | Arabic + pron + English | Arabic line `dir="rtl"`, right-aligned; pron and English LTR left-aligned below |
| Lesson tables `<td class="k">` | Arabic cells | `dir="rtl"`, right-aligned; tables themselves stay LTR (columns read left to right in English) |
| Inline Arabic in English text (body, tips, check questions, `why`, hints, notes, feedback) | short Arabic runs inside English sentences | each run wrapped automatically in `<bdi dir="rtl" lang="ar">` (or a span with `unicode-bidi:isolate`) at render time; runs = maximal sequences of `[؀-ۿ]` with inner spaces |
| `mc` options and `fill` tap options | Arabic | each option `dir="rtl"`; English options stay LTR (`dir="auto"` works for both) |
| `order` tiles and tile-mode `type` | Arabic word tiles | pool and built line `dir="rtl"`: the first tile placed sits at the **right**, the line fills leftwards; tiles keep their marks |
| `fill` sentence with `__` | Arabic with a blank | the whole sentence `dir="rtl"` so the blank sits in reading position |
| Answer box | Arabic or romanisation typed | `dir="auto"` (Arabic shows RTL, romanisation LTR); English placeholder LTR |
| Model answer and "almost" correction | Arabic | isolated RTL line |
| Hint (`key words · note`) | Arabic and English mixed | each Arabic run isolated; the ` · ` separators then stay in place |
| Deck list, deck names | English names (no Arabic in names, §9) | nothing |
| Header brand, greeting | the brand عربي / the greeting صَبَاح الْخَيْر | isolated RTL span |
| Punctuation | ؟ ، ؛ in Arabic strings | belong to the Arabic run (inside the isolate); English punctuation after an Arabic run stays outside it |
| Digits | Eastern Arabic digits on Numbers cards | inside the RTL run they still read left to right (٢٥ = 25); nothing to do beyond isolation |

**If request 3 is not built**, browsers still order a pure-Arabic string correctly inside its own element (cards, options, tiles' text), but mixed lines can reorder: an Arabic run followed by digits, parentheses or a romanisation can visually swap places [inference: standard bidi behaviour]. Writer fallback, binding until request 3 is done: in English text put an Arabic run **only** between words or before a colon (never directly before a digit, a parenthesis or the romanisation in italics), and keep romanisation *before* the Arabic in parentheses-free form ("say *marḥaban* مَرْحَبًا to anyone"). **Two Arabic runs separated only by `,` or `/` display in reversed order without isolation** (the pair أَنْتَ / أَنْتِ shows as أَنْتِ / أَنْتَ): this hits every man / woman pair and the lesson titles of `questions` (ما, من, أين, هل) and `negation` (لا and ليس). Fallback: join such pairs with an English word ("أَنْتَ to a man, أَنْتِ to a woman"); the two titles are accepted as they are until request 3.

### 10.3 The script stage (works with ordinary lessons and decks)

Stage 1 is **seven lessons and four decks**, all ordinary: nothing depends on the Korean letter-drill machine.

| Lesson | Deck | What the learner can do after it |
|---|---|---|
| `letters` | Letters 1: alif to sad (and points to Letters 2) | name and sound all 28 letters in their stand-alone shape; read the 25 first words with the pron's help; knows ال = the, ة = feminine |
| `sounds` | Sound pairs | hear and roughly say ḥ, ʿ, ʾ, kh, gh, q and the heavy ṣ ḍ ṭ ẓ; tell the pairs apart |
| `vowels` | Vowels and marks | read fatha, kasra, damma and the long vowels; knows the bare-ending rule |
| `shapes` | Letters 2: dad to ya | find a letter at the start, middle and end of a word; knows the six non-joining letters and لا |
| `sukun-shadda` | Vowels and marks | read sukun, shadda and the diphthongs aw / ay |
| `hamza` | Vowels and marks | read hamza on its seats, ى, ة, tanwin -an |
| `al` | Vowels and marks | read ال with sun and moon letters; prefix + ال |

- **Count:** 28 letters + ة, ى, ء, لا; joined forms; 3 short vowels, 3 long vowels, sukun, shadda, tanwin, hamza seats, dagger alif (seen in هٰذَا), sun and moon letters: Alif Baa covers the same over ten units (Montgomery outline) [curriculum convention]; here seven lessons plus four decks, then every later lesson keeps the marks.
- **No handwriting.** The app has no handwriting input; `shapes` teaches recognition of joined forms only. One line says that writing by hand helps and links nowhere [inference].
- **Joined forms in decks:** cards cannot show a letter's middle form alone without tatweel, and tatweel in a target would be read by the voice. So joined forms live in the `shapes` lesson tables (with tatweel, in `<td class="k">`) and in whole-word cards; the letter decks show stand-alone letters.
- **If the letter-drill machine is generalised** (request 10), the two letter decks gain "hear a letter, tap it", "see a letter, tap its sound", and "see a word, tap the letter at its start / middle / end". Nothing in the lessons changes.

### 10.4 What a typed answer is, and what the matcher must fold

**Default: word tiles** (`tilesDefault: true`, already built). In tiles mode `mc` and `order` are unchanged, `fill` becomes a 4-option tap, `type` becomes tiles from `a[0]` split on spaces plus `x`. Arabic has spaces between words, so tiles split on spaces; **tiles are whole words** (the article and suffixes stay attached: الْبَيْت, بَيْتِي); a ` | ` separator is never needed.

**Typing is optional**, through the existing switch:
- **Arabic from the phone's keyboard.** iOS and Android ship an Arabic keyboard (Settings → Keyboards; Gboard: add Arabic) [inference]. It types letters without vowel marks unless the learner long-presses: the matcher must not require marks.
- **Romanisation on an English keyboard.** With request 4, the pipeline attaches the generated romanisation of every `fi` / `ty` answer and the matcher accepts it, folded (below). Per the brief, the deck typing quiz already accepts a card's pron (built for ja / zh; **not checked in the code for ar**), and with `accents: true` a pron typed without macrons or dots is "almost" (today's `foldAcc` strips U+0300–U+036F, which covers ā ī ū ḥ ṣ ḍ ṭ ẓ); ʿ and ʾ are not folded yet.

**What the matcher must do for Arabic** (✓ = already done by today's engine, checked in `src/app.html`; ✗ = request 1):
- ✓ trim, collapse spaces, NFC, strip `. , ! ?` and quotes (`pracNorm`).
- ✗ strip ؟ ، ؛ (pracNorm strips only the Latin and CJK marks).
- ✗ **vowel marks: missing marks never count; a mark the learner did type must match** the answer's mark on that letter (so أنتِ typed for أَنْتَ is wrong, انت is right). Marks = U+064B–U+0652 and the dagger alif U+0670.
- ✗ strip tatweel U+0640 and any bidi or joining controls a keyboard or a paste can bring (U+200C–U+200F, U+061C, U+2066–U+2069).
- ✗ NFKC for presentation forms (ﻻ → لا).
- ✗ **"almost"** (accepted, correction shown) for: hamza seats folded (أ إ آ ٱ → ا; ؤ → و; ئ → ي; a missing ء), ة ↔ ه at the end of a word, ى ↔ ي at the end of a word, a missing tanwin ا. An item marked `'!strict'` turns "almost" off (used when ة or the hamza is the point).
- ✗ Eastern Arabic digits ↔ Western digits (٢٥ = 25).
- ✗ for romanised answers (with request 4): lowercase; ʿ ʾ ' ` ’ ignored; Arabizi digits 3 = ʿ, 7 = ḥ, 2 = ʾ, 5 = kh accepted; *aa / ii / uu / ee / oo* = ā ī ū ī ū; hyphen and middle dot ignored; *al-shams* for *ash-shams* "almost"; missing macrons, dots and doubled letters "almost".
- Spaces **do** count (unlike Chinese and Japanese): Arabic writes them.

**Until request 1 is built:** every `fi` and `ty` answer list carries the unvowelled twin with hamza seats (§7); ة / ه, ى / ي and hamza slips are marked wrong; the deck typing quiz in Arabic script would demand the marks, so the course asks writers for nothing extra there and learners use the meaning or romanisation modes.

### 10.5 Punctuation

- Arabic strings use ؟ (question), ، (comma), ؛ (semicolon) and the ordinary full stop and exclamation mark. No space before them.
- Card targets: ؟ allowed at the end; no ، or . inside (the deck typing check does not strip ، today).
- Tiles carry no punctuation; `a[0]` of a `ty` item may end in ؟ (request 1 strips it; until then list the twin without ؟ too).
- English text keeps English punctuation, including after an Arabic run.

### 10.6 Fonts and line height

- **Target Arabic** (cards, tiles, examples, options, answer box, inline runs): a stack with good vowel-mark placement, Naskh first: `"Noto Naskh Arabic", "Geeza Pro", "SF Arabic", "Segoe UI", "Tahoma", sans-serif`, applied to `[lang=ar]` elements. The app already defines an Arabic stack under `[lang=ar]` for the Arabic interface (`'DM Sans','Geeza Pro','SF Arabic','Segoe UI','Noto Naskh Arabic',…`); it applies to any element with `lang="ar"`, so request 6 is mostly tagging the elements and putting a Naskh face first for vowelled text [inference: Naskh faces place harakat more legibly than UI sans faces at small sizes; to be checked on devices].
- **Size and spacing:** card target ≥ 2× body; inline runs 1.15× the English size (Arabic looks smaller at the same size); **line height ≥ 1.9** for vowelled lines (marks sit above and below and clip in tight boxes, especially shadda + fatha and kasra under descenders); tiles ≥ 48 px tall with vertical padding.
- **Romanisation font** must contain ā ī ū ḥ ṣ ḍ ṭ ẓ ʿ ʾ · (U+0101, U+012B, U+016B, U+1E25, U+1E63, U+1E0D, U+1E6D, U+1E93, U+02BF, U+02BE, U+00B7); check the body font, or the dotted letters fall back mid-word.

### 10.7 What the lead needs to build, in priority order

| # | Request | Why | What the course does if it is NOT built |
|---|---|---|---|
| 1 | **Arabic folding in the matcher** (`pracMatch` / `pracNorm`, and `normT` for the deck typing quiz): strip ؟ ، ؛, tatweel and controls; NFKC; missing vowel marks never count, typed marks must match; "almost" for hamza seats, ة / ه, ى / ي, missing tanwin ا (off for `'!strict'`); Eastern ↔ Western digits (§10.4). | Phone keyboards type no marks; vowelled answers would never match. | Every `fi` / `ty` answer list carries the unvowelled twin (§7); hamza, ة and ى slips are wrong; the Arabic deck typing quiz is unusable (learners use meaning or romanisation). |
| 2 | **Right-to-left tiles:** `order` pool and built line, tile-mode `type`, and the `fill` sentence get `dir="rtl"` when their text is Arabic (first tile at the right). | The built sentence otherwise reads backwards. | Tiles run left to right; the course works but every built sentence looks mirrored. **Should block release.** |
| 3 | **Direction and isolation of every Arabic run** in the English page: card front, card back, review, example rows, lesson table cells `.k`, `mc` / `fill` options, model answers, hints, and an automatic render-time pass that wraps inline Arabic runs in English text (body, tips, checks, `why`, notes, feedback, header brand and greeting) in `<bdi dir="rtl" lang="ar">` (§10.2). Use the selector list of `src/app.html` lines 29–34 as the inventory. | Mixed English / Arabic lines reorder visually; writers cannot add control characters. | Pure-Arabic elements display correctly; mixed lines follow the writer fallback of §10.2 (Arabic only between words or before a colon). Some lines will still look jumbled. |
| 4 | **Romanised answers:** `gen.js`'s `pronAnswers` strips spaces before calling `respell` (`a.replace(/\s+/g,'')`, right for Chinese, wrong for Arabic, which would merge words); keep spaces when the course's script has them (a profile flag or a test on the answer). Matcher: the romanisation normaliser of §10.4 (ʿ ʾ, Arabizi digits, aa / ā, hyphens, "almost" for missing dots, macrons, doubles). | Lets learners without an Arabic keyboard type. | `pronAnswers` stays **off** for en-ar; typing means the Arabic keyboard; romanisation only in the deck typing quiz (exact or "almost" without dots and macrons). |
| 5 | **Tiles by default for en-ar** (`tilesDefault: true`, set in profile.json) with the switch text "Use tiles (no Arabic keyboard)"; a one-time note on the first typed item: "To type Arabic, add the Arabic keyboard in your phone's settings, or type the romanisation." Answer box `dir="auto"`; hide the accent bar while the box holds Arabic. | Most learners have no Arabic keyboard at the start. | Tiles by default already work; no note; the answer box stays LTR (Arabic still shapes; ؟ may sit on the wrong side while typing). |
| 6 | **Fonts and line height** on `[lang=ar]` target elements (§10.6), and `lang="ar"` on them. | Clipped vowel marks; weak mark placement in UI fonts. | System fallback fonts; marks may clip in tiles and options. |
| 7 | **Validator and gen for Arabic:** NFC-normalise all Arabic strings in `gen.js`; run `respell` on every card target and example row and fail on a stored pron that differs; show the generator's stderr warnings as WARN lines; skip the `targetScript` test for answers that `pronAnswers` generated. | The generator is the source of truth; writers' editors may store marks in another order. | Writers run the generator by hand (it prints the NFC form); `repron.js ar` after every generator change; the same-string pron check catches drift between files only. |
| 8 | **Voice:** fall back from `ar-SA` to any `ar-*` voice, with the existing "no voice" message; the lead listens on the test devices to: pausal vowelled text (*kitāb*, not *kitābun*), ةْ in iḍāfa, dagger alif (هٰذَا), letter names for a lone letter (ب → *bāʾ*), digit cards, the name of God. | The voice is the model. | Writers keep the ةْ cards few (iḍāfa names); a lone-letter card that the voice reads wrongly gets a word example in its note instead. |
| 9 | **Romanisation display setting:** "Romanisation: always / tap to reveal / off" for cards and example rows (§6.5); default "always". | Learners who read the script want to hide it. | Romanisation always shown. |
| 10 | **Generalise the letter-drill machine** to any script's letter decks (§10.3). | More letter practice. | Letter decks stay ordinary decks (still fine). |
| 11 | **PRACTICE-SPEC exception:** romanisation allowed in script-stage practice items (§6.5). No code; the spec and the reviewer should know. | — | — |
| 12 | **Vowel-mark display setting** (show / hide marks on cards) for post-A1 reading practice. | Real texts are unvowelled. | Not needed for A1; marks always shown. |

Checked and **not** needed: `repron.js` works with this course's `pronPattern` (it compiles without `u`; the pattern was tested both ways); `link_roadmap.py` needs nothing (the two added lessons have an empty `roadmap`); a HOLD file keeps the course out of releases until review.

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The ةْ convention** (§2.3): sukun on ة for an iḍāfa first word, said -at. It is not standard spelling; a teacher may prefer plain ة (and the voice may read ةْ oddly). If rejected, the generator change is one line (ة in iḍāfa would then need another signal or a lexicon of names).
2. **The pausal rule as applied word by word** (§2.3): *kitāb aṭ-ṭālib*, *ṣabāḥ al-khayr*, *maʿa as-salāma* (elision not shown), case vowel kept before suffixes (*ismuka*), -an kept wherever ًا is written (*urīd shāyan*, *lastu ṭāliban*), verbs with person endings in full (*darastu*, *kataba*) but present without mood -u (*yadrus*). Each is defensible, the combination is the author's design [inference].
3. **The vowel marks of every sample** in §2–§9 and the 25 first words (§8 note 2): the generator romanises what is written, so a wrong mark is a wrong pron. Especially: أُحِبّ, أَسْتَيْقِظ مُبَكِّرًا, أَتَكَلَّم الْعَرَبِيَّة قَلِيلًا, صَدِيقَتِي, زَوْجِي, مِفْتَاح, جَوَاز السَّفَر, مَحَطَّةْ الْقِطَار, كَبِير فِي السِّنّ, غَالِي (spelling of the pausal form of غَالٍ), يَوْم الْجُمُعَة.
4. **The shared-phrase list** (§2.1): that these greetings and courtesy phrases are really heard across Egypt, the Levant and the Gulf; that عَلَى طُول is heard everywhere for "straight ahead"; that أَنَا جَيِّد sounds odd for "I'm fine".
5. **The Spoken Arabic notes** (§9): Egyptian and Levantine forms (*ēh / shū*, *ʿāyiz / biddī*, *kwayyis / mnīḥ*, *lēh / lēsh*, *aywa / ē*), from the author's knowledge only. Al-Kitaab's colour-coded vocabulary would be the source to check against; it was not opened.
6. **The ḥ / h pair** حَال / هَال (state / cardamom): هَال may be too rare for a beginner deck; replace it if so.
7. **The `greet` strings:** لَيْلَة سَعِيدَة for late night (gender-neutral but less usual than تُصْبِح عَلَى خَيْر), مَرْحَبًا for the afternoon.
8. **Courtesy notes** in the Traps deck: إِن شَاءَ اللّٰه as a polite maybe; صَدِيقَتِي possibly implying "girlfriend"; دُكْتُور for physicians.

**Evidence that could not be opened, or was read only in part**
- **Errors:** Shehata & Martin (2024) was read as a record with an abstract only (rankings, no percentages; the record's volume and pages may be inferred from metadata). The processability dissertation (UT Austin) was a record whose author, date and learners' L1 were blank. No study of "adding is" by English speakers was found. The ArabicPod101 list is a commercial blog and its examples contain typos (أَكَلتٌ).
- **Sounds:** El Haimeur (2025) and Aldamen & Al-Deaibes (2023) were read as abstracts / records; the PMC full text of the latter was not on the fetch allowlist.
- **Learners:** MLA figures come from secondary reports (The 74 / The Conversation, a Wikipedia-derived list, Times Higher Education); the MLA report itself and its 2021 Arabic total were not opened. The 2006 JNCOLCTL motivation study showed only its abstract (no ranking, no heritage share; author not shown). Brosh (2013) is known only through ICEF Monitor.
- **Textbooks:** the Al-Kitaab teacher's introduction does not discuss pausal form, vowelling or transliteration; the Alif Baa preface gives no unit-by-letter order (the order comes from the Montgomery College outline). The roadmap's own source is that outline.
- **Romanisation:** the IJMES guide opened does not contain the consonant chart itself; the key in §6.2 follows the widely used IJMES letters from the author's knowledge. Wikipedia's romanisation page was not opened.
- **Not found at all:** any study of how learners use romanisation with Arabic script, or of vowelled vs unvowelled text for beginners in an app.

**The roadmap and the brief**
- The brief's base text says to read "the `de` entry"; the lead's instruction says to use the `ar` entry, which this profile does.
- The brief's examples write the emphatics as "S D T Z or ṣ ḍ ṭ ẓ"; the profile chose the dotted letters (§6) and lowercase only.
- `sounds` and `ordering` have an empty `roadmap` field; the roadmap preview will not show them unless the lead adds items.
- The brief allows up to three added lessons; two are added because the 26 roadmap items plus two reach the 28-lesson cap.

**Engine and pipeline** (for the lead): §10.7, requests 1–12. The most important are 1 (Arabic folding), 2 (RTL tiles), 3 (bidi isolation everywhere), 4 (`pronAnswers` keeps spaces) and 7 (NFC and generator check in the validator).

**Not verified at all**
- How the `ar-SA` voices on iOS and Android read fully vowelled pausal text, ةْ, the dagger alif, a lone letter and a lone digit (request 8).
- That Naskh fonts are present on the test devices and place shadda + vowel legibly at tile size (request 6).
- That `respell.js` is right beyond the strings tested: it was run on all 302 Arabic strings in this profile that carry a pron (0 mismatches) and on a 60-string negative set (59 throw; the 60th is a real word). Its consonant and vowel tables are short and were read through line by line, but no external test set was available.

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Shehata, A. & Martin, A. (2024). Writing errors: the case of English learners of Arabic. *Journal of Linguistics and Language Teaching* 15(2) (record and abstract)](https://library.kab.ac.ug/Record/doaj-art-c4891f2dba014230848e666527f39e7d/Details)
- [*Processability and development of syntax and agreement in the interlanguage of learners of Arabic as a foreign language*, University of Texas at Austin (dissertation record)](https://repositories.lib.utexas.edu/handle/2152/2716)
- [El Haimeur, A. (2025). Navigating unshared sounds: English speakers' acquisition of Arabic emphatic and pharyngeal phonemes. *Journal of the African Language Teachers Association* 12 (abstract)](https://scholarworks.iu.edu/iupjournals/index.php/jalta/article/view/7834)
- [Aldamen, H. & Al-Deaibes, M. (2023). Arabic emphatic consonants as produced by English speakers: an acoustic study. *Heliyon* 9(2), e13401 (record)](https://khazna.ku.ac.ae/en/publications/arabic-emphatic-consonants-as-produced-by-english-speakers-an-aco/)
- [ArabicPod101: The most common mistakes Arabic learners make (commercial blog)](https://www.arabicpod101.com/blog/2020/12/11/common-arabic-mistakes/)
- [Elon: Attributive adjectives follow the noun (MSA grammar reference)](https://elon.io/grammar/arabic-modern-standard/adjectives/position)
- [Elon: How MSA is spoken (MSA grammar reference)](https://elon.io/grammar/arabic-modern-standard/variation/msa-spoken)
- [Wikipedia: Iʿrab](https://en.wikipedia.org/wiki/%CA%BEI%CA%BFrab)
- [Brustad, Al-Batal & Al-Tonsi: Al-Kitaab Part One, 3rd edition, teacher's introduction (Georgetown University Press, PDF)](https://press.georgetown.edu/files/materials/9781647121877_AK1-3e-IntroTeacher.pdf)
- [Alif Baa, 3rd edition, preface (Georgetown University Press, PDF)](https://Press.GeorgeTown.edu/files/materials/9781647121853_AB3e-preface.pdf)
- [Montgomery College: ARAB 101 Elementary Arabic I course outline (PDF)](https://policy.montgomerycollege.edu/_documents/academics/departments/humanities-tpss/arab-101.pdf)
- [UT Austin Al-Kitaab program: Arabic 101 course objectives (PDF)](https://www.laits.utexas.edu/alkitaabtextbook/pdf/Arabic101courseobjectives.pdf)
- [IJMES transliteration guide (copy hosted by Jadid Online, PDF)](https://www.jadidonline.com/files/userfiles/file/Transliteration_Guide.pdf)
- [W3C Internationalization: Inline markup and bidirectional text in HTML](https://www.w3.org/International/articles/inline-bidi-markup)
- [The 74 / The Conversation: Fewer U.S. college students are studying a foreign language (MLA data)](https://www.the74million.org/article/fewer-u-s-college-students-are-studying-a-foreign-language-%e2%88%92-and-that-spells-trouble-for-national-security/)
- [List of most commonly learned foreign languages in the United States (MLA figures; Wikipedia mirror)](https://worddisk.com/wiki/List_of_most_commonly_learned_foreign_languages_in_the_United_States)
- [Times Higher Education: US sees record drop in enrolment on languages courses](https://www.timeshighereducation.com/news/us-sees-record-drop-enrolment-languages-courses)
- [ICEF Monitor (2014): Arabic language studies booming in the US](https://monitor.icef.com/2014/12/arabic-language-studies-booming-us/)
- [*Why students in the U.S. are learning Arabic: a study of motivation at the college level*. Journal of the National Council of Less Commonly Taught Languages (2006) (abstract; author not shown)](https://doaj.org/article/920e795de54342718571e5be423c3724)
- [Center for Applied Linguistics: Heritage language schools in the US: Arabic](https://cal.org/heritagelanguageschoolsusarabic)
- [El-Ahraf, A. & Mohammed, R.: Heritage and non-heritage Arabic learners: towards an inclusive Arabic curriculum (IAFOR presentation abstract)](https://acas.iafor.org/presentation/submission68483/)

Opened but not usable: PMC full text of Aldamen & Al-Deaibes (not on the fetch allowlist; the record was used instead).

Local project files read: `docs/briefs/target-profile-ar.md`, `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, `docs/PHASE2-BRIEF.md` (last section), `docs/TARGET-BRIEF.md`, `docs/profiles/en-ja.md` and `docs/profiles/en-zh.md` and their `profile.json` (shape models), `tools/target/es/profile.json` and the head and tail of `tools/target/es/respell.js` (command-line shape), `packs/roadmaps.js` (entry `ar`), `tools/target/lib.js` (header), `gen.js` (`pronAnswers`), `validate.js`, `repron.js`, and in `src/app.html` the RTL rules (lines 27–34), `uiDir`, `normT`, `accBar`, `pracNorm`, `foldAcc`, `accSame`, `pracMatch`, `kbT`, `pracMode`, `pracPrep`.
