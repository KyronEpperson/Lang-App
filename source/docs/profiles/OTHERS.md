# English for speakers of eleven languages: short planning profiles

Background research for later `<lang>-en` courses (zh, fr, de, pt, it, vi, th, id, hi, ar, ru). Japanese and Spanish are covered in their own profiles. These profiles are deliberately shorter than those: each one is a starting point for a later full profile, not a frozen decision under PILOT-SPEC §1.7.

**Evidence labels** (same meaning as in *Grammar learning order research.md*)
- **[R] research-backed**: an empirical study or corpus that was actually fetched. Its sample is given, because most are small.
- **[C] curriculum convention**: what textbooks, syllabuses or apps do.
- **[P] practitioner opinion**: teacher or teaching-company guidance. **[P, no source fetched]** means teaching lore I could not tie to a page I read; every such item is repeated in *Gaps*.
- **[inference]**: this file's own prediction from how the learner's language is built (e.g. "Italian drops subjects, so expect *Is raining*"). No learner data was read for these items.
- **Rankings within each list, the standing-rule choices, build difficulty and build order are this file's synthesis**, not findings.
- **Example sentences are illustrative** unless quoted from the cited source; an [R] tag supports the error category and its figure, not my example.
- **Standing-rule kind names**: only `article-plural` exists in PILOT-SPEC. `article`, `article-tense`, `article-copula`, `tense-aspect` and `prep-tense` are proposals in this file.
- **Swan & Smith, *Learner English***: I could not read any chapter. I verified only the chapter list of the 1987 first edition ([CLZ catalogue](https://cloud.clz.com/tesllibrary/books/detail/1091544)), which has chapters for German, French, Italian, Portuguese, Russian, Arabic, "Indian languages", Chinese, Vietnamese and Thai but **no Indonesian/Malay chapter**. Wherever a chapter is mentioned below, it is cited by its title only.
- **UI plural categories** were checked locally with `Intl.PluralRules` (Node, ICU 78.3 / CLDR 48), not from memory.
- **EF EPI 2025** scores are per country, not per language, and EF's test-takers choose themselves. Figures come from a secondary table ([World Population Review](https://worldpopulationreview.com/country-rankings/english-proficiency-by-country)). Ranks marked "≈" were read from row position in that table and are approximate.

---

### Mandarin Chinese (zh)
- **Top error zones in English**
  1. Verb forms and tense: *She run yesterday* → *She ran yesterday*. [R] In CLEC (the Chinese Learner English Corpus) the verb error "heads the list" of tagged errors, and present and past are the most-misused tenses ([Liu 2012](https://www.sciedupress.com/journal/index.php/wjel/article/view/1858); abstract only).
  2. Third-person -s: *He like swimming* → *He likes swimming*. [P] ([SJSU guide](https://gcp-web.sjsu.edu/wac/docs/MandarinEnglishGuide.pdf), which cites Guo 2008)
  3. Articles: *She's good teacher* → *She's a good teacher*. [P] (SJSU). No research figure was fetched for this.
  4. Plural -s and count nouns: *two dog*, *many furnitures* → *two dogs*, *much furniture*. [P] (SJSU)
  5. *he/she* mix-ups (both are *tā*): *His name is Mary* → *Her name is Mary*. [P] (SJSU)
  6. Paired conjunctions: *Although…, but…* → use one. [P] (SJSU)
  7. One verb, many meanings (开): *open the light* → *turn on the light*. [P] (SJSU)
- **Pronunciation trouble**: dropped final consonants (*card* → *car*), vowel added to or consonant dropped from clusters, /r/–/l/ and /v/–/w/ confusion, and transferring tone habits onto English intonation. [P] ([TEFL Academy](https://www.theteflacademy.com/blog/language-specific-pronunciation-problems-for-english-language-learners/))
- **Standing practice rule candidate**: `article-plural`, the same rule as `ko-en`. Mandarin has neither articles nor obligatory plural marking (们 is optional and used only for people). Rotate third-person -s in as a secondary check. [inference]
- **Pronunciation aid**: suggest `pron: "optional"` using IPA, or `none`. Characters cannot spell English sounds, and character-based "sound-alike" spellings are widely mocked. Pinyin respelling is a possible alternative. [P, no source fetched]
- **Interface notes**: Simplified Chinese (zh-Hans) for the mainland; Traditional would be a separate pack. Text has no word spaces, so it needs CJK line-breaking. Use 你 throughout (您 is too stiff for an app). Plural categories: `other` only, so no plural UI patterns are needed.
- **Curriculum deviations**: [inference]
  - Reweight third-person -s, past and irregular past (the verb errors at the top of the list).
  - Add a he/she/his/her drill to the object-pronouns lesson.
  - In joining sentences, add *although/but* and *because/so* as a "use one, not both" contrast.
  - Keep all three article lessons.
- **Learner context**: China EF EPI 2025 score 455 (rank ≈91), band "Low". The Swan & Smith "Chinese speakers" chapter is the reference to read next.

### French (fr)
- **Top error zones in English**
  1. Progressive -ing: [R] for French learners it is one of only two morphemes still below 90% accuracy at CPE (C2) level ([Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf), Cambridge Learner Corpus, 11,893 scripts). Typical error: *I read now* → *I'm reading now*.
  2. Possessive 's: [R] ranks lower for French and German learners than for Japanese and Korean learners (same source). Typical error: *the car of my father* → *my father's car*.
  3. False friends: *actually* used to mean "currently" (actuellement); *eventually* used to mean "possibly" (éventuellement). [P, no source fetched]
  4. Present tense with *since/for*: *I live here since 2020* → *I have lived here since 2020*. [P, no source fetched]
  5. Articles with general nouns: *The life is hard* → *Life is hard*. [P, no source fetched] French has articles, and [R] Murakami & Alexopoulou place French learners' article accuracy in the upper half.
  6. Adjectives inflected or placed after the noun: *a car red*, *differents ideas* → *a red car*, *different ideas*. [P, no source fetched]
- **Pronunciation trouble**: /h/ dropped or added; /θ ð/ said as /s z/ or /t d/; *ship/sheep* vowel length; stress placed on the final syllable. [P, no source fetched] The TEFL Academy French page returned no article text.
- **Standing practice rule candidate**: a new kind `tense-aspect`, covering progressive versus simple and present perfect with *since/for*. The progressive half has corpus support; the *since/for* half is practitioner lore. Run a false-friends spot check as a secondary rule. [inference from R + P]
- **Pronunciation aid**: `none`, or IPA on demand. French spelling-to-sound rules would mislead a respelling. [P, no source fetched]
- **Interface notes**: Metropolitan French. Register: *tu* (casual app) versus *vous* is a product decision to make before building. Put a non-breaking space before `? ! :` (French typography). Plural categories: `one` covers 0 and 1 (*0 leçon*), and `many` appears only for millions. Text runs 15–20% longer than English, so check fit at 390px.
- **Curriculum deviations**: [inference]
  - Reweight continuous, present perfect ×2 and past continuous.
  - Lighten article lesson 3.
  - Add a false-friends mini-lesson near idioms or email.
- **Learner context**: France EF EPI 2025 score 524 (rank ≈49), band "Moderate".

### German (de)
- **Top error zones in English**
  1. Progressive -ing avoided or overused: *I drink coffee (now)* → *I'm drinking coffee*. [R] Still below 90% accuracy at CPE ([Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf)). [P] ([TEFL Academy, German](https://www.theteflacademy.com/?p=503))
  2. Present perfect for finished past events: *Then I have made dinner* → *Then I made dinner*. [P] (TEFL Academy)
  3. *will* in time clauses: *when I will see him* → *when I see him*. [P] (TEFL Academy)
  4. Possessive 's ranks low: *the car of my brother* → *my brother's car*. [R] (Murakami & Alexopoulou)
  5. False friends: *actual* (aktuell = current), *also* (= so), *chef* (Chef = boss), *rent* (Rente = pension), *sea* (See = lake). [P] (TEFL Academy)
  6. Word order carried over from German verb-second and verb-final clauses: *Yesterday went I…*, *…because I it forgot*. [P, no source fetched]
- **Pronunciation trouble**: /θ/; *w* said as /v/ (*wine* → *vine*) [P] (TEFL Academy). Final voiced consonants devoiced (*bed* → *bet*) [P, no source fetched].
- **Standing practice rule candidate**: `tense-aspect` (perfect versus past, progressive). Run word order in subordinate clauses and false friends as a rotating secondary rule. [inference]
- **Pronunciation aid**: `none`. German readers already read Latin script, and a respelling based on German spelling would teach the *w* → /v/ error. [P, no source fetched]
- **Interface notes**: Standard German. Most consumer apps use *du*, but confirm this before building. Long compound nouns need `hyphens: auto` with `lang="de"`, or shorter wording, in buttons and the bottom nav at 390px. Plural categories: `one` and `other`.
- **Curriculum deviations**: [inference]
  - Reweight continuous, present perfect ×2 and will (time clauses).
  - Lighten articles, plurals and questions, which German supports.
  - Possibly add an English word-order lesson for subordinate clauses.
- **Learner context**: Germany EF EPI 2025 score 598 (rank ≈10), band "High". This is the least proficiency need of the eleven.

### Brazilian Portuguese (pt)
- **Top error zones in English**: llexi does not say whether its page means Brazilian or European Portuguese.
  1. Prepositions after verbs: *depend of*, *married with*, *interested on* → *depend on*, *married to*, *interested in*. [P] ([llexi, Portuguese](https://llexi.com/l1-errors/common-english-errors-portuguese-speakers.html))
  2. Present with *since*, present perfect with a past time: *I work here since 2022* → *I have worked here since 2022*; *I have called him yesterday* → *I called him yesterday*. [P] (llexi)
  3. False friends: *pretend* (= intend), *assist* (= attend), *actually* (= currently), *parents* (= relatives). [P] (llexi)
  4. *the* with general nouns and country names: *the life*, *the Brazil* → *life*, *Brazil*. [P] (llexi)
  5. Embedded-question word order: *I know where is the meeting* → *I know where the meeting is*. [P] (llexi)
  6. Adjective after the noun: *a contract big* → *a big contract*. [P] (llexi)
  7. *make/do*: *make a question* → *ask a question*. [P] (llexi)
  8. Dropped subject or dummy *it*: *Is raining* → *It is raining*. [inference] Brazilian Portuguese only partly drops subjects, and llexi does not list this error.
- **Pronunciation trouble**: -ed ending defaulted to /ɪd/; /θ ð/ said as /f d/; final consonants weakened or given an extra vowel; no vowel reduction; stress put on the last syllable of cognates. [P] (llexi)
- **Standing practice rule candidate**: a new kind `prep-tense`, with prepositions after verbs and present perfect with *since/for* re-tested each set. This follows what the fetched source lists. A subject-pronoun / *it* check is the second candidate. [inference]
- **Pronunciation aid**: `none`, or `optional` IPA. A respelling in Portuguese spelling (e.g. "tchênks") is a known informal practice, but it reinforces the inserted vowels. [P, no source fetched]
- **Interface notes**: Brazilian Portuguese (pt-BR), *você*. Plural categories: `one` covers 0 and 1, and `many` appears only for millions. pt-PT would be a separate pack.
- **Curriculum deviations**: [inference]
  - Reweight prepositions, present perfect ×2 and questions (embedded order).
  - Add false friends and *make/do*.
  - Lighten plurals.
- **Learner context**: Brazil EF EPI 2025 score 466 (rank ≈81), band "Low". Portugal scores 605, so the two variants differ in learner need.

### Italian (it)
- **Top error zones in English**
  1. Present perfect for finished past events: *I have seen him yesterday* → *I saw him yesterday*. [P] ([FlashAcademy Italian profile](https://support.flashacademy.com/hc/en-gb/article_attachments/7503603466397))
  2. Articles missing or extra: *Is he teacher?*, *the my family* → *Is he a teacher?*, *my family*. [P] (FlashAcademy)
  3. *have* for age and hunger: *I have 12 years* → *I am 12*. [P] (FlashAcademy)
  4. Uncountables pluralised: *informations* → *information*. [P] (FlashAcademy)
  5. *make/do* and *say/tell*: *I make my homework*, *Say me your name*. [P] (FlashAcademy)
  6. Double negatives: *I don't know nothing* → *I don't know anything*. [P] (FlashAcademy)
  7. Possessive agreeing with the noun: *Peter and her wife* → *his wife*; *the pen of my brother* → *my brother's pen*. [P] (FlashAcademy)
  8. Dropped subject or dummy *it*: *Is raining* → *It is raining*. [inference] Italian is a null-subject language, but the fetched profile does not list this error.
- **Pronunciation trouble**: vowel added after final consonants; no long/short vowel contrast (*it/eat*, *live/leave*); /θ ð/ said as /t d/; full vowel in -ed; /ʌ/; *w* said as /v/. [P] (FlashAcademy)
- **Standing practice rule candidate**: `tense-aspect` (past simple versus present perfect), plus a subject/*it* check. Italian is the strongest case for that check, but it rests on [inference] only.
- **Pronunciation aid**: `none`, or `optional` IPA. Italian spelling is regular, so an Italian respelling would push the added final vowels. [P, no source fetched]
- **Interface notes**: Standard Italian, *tu*. Plural categories: `one` and `other`, with `many` only for millions.
- **Curriculum deviations**: [inference]
  - Reweight past versus present perfect.
  - Teach *be* + age in the *be* lesson.
  - Put the *some/any* negation trap in the countable-nouns lesson.
  - Add *make/do* and *say/tell* to the phrasal-verbs or idioms lesson.
- **Learner context**: Italy EF EPI 2025 score 528 (rank ≈46), band "Moderate".

### Vietnamese (vi)
- **Top error zones in English**
  1. Third-person -s dropped in speech: *he work* → *he works*. [R] 58% of verbal -s omitted by 16 C1 Hanoi graduates ([Disney & Le 2024](https://mdpi.com/2226-471X/9/10/327)). The authors argue the omission is not solely L1 transfer.
  2. Plural -s dropped: *two book* → *two books*. [R] 41.7% omitted (same study)
  3. Articles: *I want to be teacher* → *a teacher*. [P] ([TEFL Academy, Vietnamese](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/))
  4. *be* omitted: *He hungry* → *He is hungry*. [P] (TEFL Academy)
  5. Tenses avoided; time words (đã, sẽ, *yesterday*) carry the time: *Yesterday I go* → *went*. [P] (TEFL Academy)
  6. Present perfect avoided in favour of past or present: *I live here since 2020* → *I have lived*. [P, no source fetched]
- **Pronunciation trouble**: final consonants and clusters dropped (/s z t v ks dʒ/) [R] (Disney & Le, for /s z/) and [P] (TEFL Academy); /l r/ said as /n z/; /θ ð/ said as /t d z/; long vowels shortened. [P] (TEFL Academy)
- **Standing practice rule candidate**: `article-plural`, reused from `ko-en`. Vietnamese has no articles and only optional plural words (các, những). Make the plural half audible: dictation items that end in -s. [R + inference]
- **Pronunciation aid**: `none`, or `optional` IPA. Vietnamese uses Latin script with tone marks, and a Vietnamese respelling would hide the final consonants that are the main problem. [P, no source fetched]
- **Interface notes**: Standard (Hanoi-based) written Vietnamese. Use neutral *bạn*. Text needs a font with full diacritic stacking. Plural categories: `other` only.
- **Curriculum deviations**: [inference]
  - Reweight pronunciation traps (final consonants), third-person -s, past and irregular past.
  - Add copula drills to the *be* lesson.
- **Learner context**: Vietnam EF EPI 2025 score 498 (rank ≈63), band "Low". Swan & Smith's 1987 edition has a "Vietnamese speakers" chapter (not read).

### Thai (th)
- **Top error zones in English**
  1. Subject–verb agreement: *She go to work* → *She goes*. [R] 25.3% of 158 spoken errors by 43 first-year students ([Pawabutra & Sutakote 2024](https://so17.tci-thaijo.org/index.php/JEL/article/view/625))
  2. Verb form: *I can went* → *I can go*. [R] 17.7% (same study)
  3. Tense: *Yesterday I eat* → *ate*. [R] 12.7% (same study)
  4. Articles: *I am student* → *a student*. [P, no source fetched] The fetched study does not separate out articles.
  5. Plural -s: *three dog* → *dogs*. [P, no source fetched]
  6. Extra elements added (example mine): *I am go* → *I go*. [R] "Addition" errors were 15.8% (same study).
- **Pronunciation trouble**: the Chinese-type problems (dropped finals, broken clusters, /r l/); /tʃ/ said as /ʃ/ (*church* → *shurch*); /θ ð/ said as /t s d z/. [P] ([TEFL Academy](https://www.theteflacademy.com/blog/language-specific-pronunciation-problems-for-english-language-learners/))
- **Standing practice rule candidate**: `article-plural` (Thai has no articles and no plural inflection), with third-person -s added as a secondary check because it is the top measured error. [R + inference]
- **Pronunciation aid**: `optional`. Thai-script respellings of English are common in Thai learning materials, but Thai script cannot show final clusters. Alternatively, use IPA. [P, no source fetched]
- **Interface notes**: Standard Thai. Text has no spaces between words, so line breaking needs dictionary-based segmentation (`Intl.Segmenter` with `th`) or the browser's own. The polite particles ครับ/ค่ะ depend on the speaker's gender, so write UI chrome without them. Thai script needs a taller line-height. Plural categories: `other` only.
- **Curriculum deviations**: [inference]
  - Reweight third-person -s, can + base verb and past.
  - Reweight the pronunciation-traps lesson.
- **Learner context**: Thailand EF EPI 2025 score 415 (rank ≈106), band "Very low". Swan & Smith's 1987 edition has a "Thai speakers" chapter (not read).

### Indonesian (id)
- **Top error zones in English**: ranks below come from [Gayo & Widodo 2018](https://ijlter.org/index.php/ijlter/article/download/1089/pdf), 77 Yogyakarta junior-high students, 296 errors in descriptive texts.
  1. Copula *be*: *Snake are dangerous* / Ø *be* → *Snakes are*. [R] 14.9%
  2. Inflection (plural and verb endings): *a insects*, *two cat*. [R] 14.2%
  3. Prepositions: *in November Ø April* → *November to April*. [R] 14.2%, partly attributed to Indonesian transfer.
  4. Articles: *I live in Ø village* → *in a village*. [R] 13.2%
  5. Subject–verb agreement: *They works* → *They work*. [R] 9.5%
  6. Personal pronouns (incl. possessive forms): *using it beak* → *its beak*. [R] 7.8%
  7. Noun-phrase order, transferred from Indonesian: *body large* → *a large body*; negation: *Turtles not have teeth* → *don't have*. [R] (same study)
  - The authors attribute copula, tense and plural errors mainly to intralingual causes, not to Indonesian. Tense was only 1.7%, but descriptive texts barely need tense.
- **Pronunciation trouble**: no source fetched. Expected trouble includes /θ ð/, final clusters and -ed endings. [P, no source fetched]
- **Standing practice rule candidate**: `article-plural` (Indonesian has no articles, and reduplication for plurals is optional), plus copula *be*, the top measured error. [R + inference]
- **Pronunciation aid**: `none`, or `optional` IPA. Indonesian spelling is close to phonemic, so a respelling is feasible but would hide the vowel quality. [P, no source fetched]
- **Interface notes**: Bahasa Indonesia, using *Anda* or *kamu*. Apps lean towards *kamu*, but this was not verified. Latin script, left to right. Plural categories: `other` only.
- **Curriculum deviations**: [inference]
  - Reweight *be*, plurals, prepositions and adjectives (adjective-before-noun order).
  - Add *don't/doesn't* negation practice to present simple.
- **Learner context**: Indonesia EF EPI 2025 score 468 (rank ≈80), band "Low". The 1987 edition of Swan & Smith has no Indonesian or Malay chapter.

### Hindi (hi)
- **Top error zones in English**
  1. Third-person -s: *He work in a bank* → *works*. [P] Called the most common error in a 10-person case study with no counts ([Khan 2021](https://journals.eltai.in/index.php/jelt/article/download/JELT630302/493/491)).
  2. Continuous with states and durations: *I am living here from two years* → *I have lived here for two years*; *I am understanding* → *I understand*. [P] (Khan; [llexi, Hindi](https://llexi.com/l1-errors/common-english-errors-hindi-speakers.html))
  3. Auxiliaries: *I was worked hard* → *I worked hard*. [P] (Khan)
  4. Articles: *We went to coffee shop* → *to a coffee shop*. [P] (Khan)
  5. Prepositions: *discuss about*, *married with*, *in Netflix* → *discuss*, *married to*, *on Netflix*. [P] (Khan, llexi)
  6. Plurals and countables: *two friend*, *peoples*, *many advices* → *two friends*, *people*, *a lot of advice*. [P] (Khan, llexi)
  7. Double comparatives: *more better* → *better*. [P] (Khan)
  - Note (not an error zone): Indian-English usages such as *do the needful*, *revert back* and *out of station* are register issues, not errors. [P] (llexi)
- **Pronunciation trouble**: /v/–/w/ merged; /θ ð/ said as dental /t̪ d̪/; aspiration; stress and intonation. llexi lists these headings only, so this is [P]. Details: [P, no source fetched]
- **Standing practice rule candidate**: `article-tense`. Re-test articles, because Hindi has no articles (एक is used only loosely as "a"), and continuous versus perfect with *since/for*. Plural is marked in Hindi, so only the article half of the Korean rule applies. [inference]
- **Pronunciation aid**: `optional`, using a Devanagari respelling. These are common in Indian self-study books but cannot show /æ/ versus /e/ or /w/ versus /v/ well. Alternatively, use IPA. [P, no source fetched]
- **Interface notes**: Standard Hindi in Devanagari, using *आप*. Decide on purist Hindi versus everyday English loanwords (e.g. "लेवल"); plain Hindi with common loans is likely friendlier. Devanagari needs a taller line-height. Plural categories: `one` covers 0 and 1, plus `other`; ordinals have five categories, which matters only for ordinal UI strings.
- **Curriculum deviations**: [inference]
  - Reweight continuous, present perfect ×2, prepositions and countables.
  - Add a stative-verbs block.
  - Add a register note to email and idioms (international versus Indian English).
- **Learner context**: India EF EPI 2025 score 490 (rank ≈70), band "Low". This is national and covers English-medium speakers of many L1s, so it is a poor guide for Hindi-medium learners.

### Arabic (ar)
- **Top error zones in English**
  1. Copula omitted: *I interested*, *He very tall* → *I am interested*, *He is very tall*. [R] 100 Saudi university students omitted *be* mostly in present and past contexts, with intermediates omitting more than advanced learners ([Alshayban 2012](https://mountainscholar.org/items/e8695078-a867-43e2-a142-b13667963cc8/full); abstract only, no counts). Also [P] ([Al-Buainain](https://lingbuzz.net/lingbuzz/001050/current.pdf)).
  2. Indefinite article: *We have good university* → *a good university*. [P] (Al-Buainain, 40 scripts, no frequencies) Arabic marks definiteness with *al-* but has no indefinite article.
  3. *the* overuse with general nouns: *The education is important* → *Education*. [P] (Al-Buainain describes overuse)
  4. Relative clauses: *the man who I saw him* → *the man who I saw*; *which that*. [P] Al-Buainain gives examples but no category for resumptive pronouns. The resumptive pronoun is [inference] from Arabic relative clauses.
  5. *be* added wrongly: *it is cost money* → *it costs money*. [P] (Al-Buainain)
  6. Long sentences chained with *and*: *I went home and I ate and I slept* → *After I got home, I ate and went to bed*. [P, no source fetched]
- **Pronunciation trouble**: /p/ said as /b/ (*bebber*), /v/ said as /f/; a vowel inserted into clusters (*esteress*); silent letters pronounced; narrow pitch range. [P] ([TEFL Academy](https://www.theteflacademy.com/blog/language-specific-pronunciation-problems-for-english-language-learners/))
- **Standing practice rule candidate**: a new kind `article-copula`, re-testing *a/an* and *be* in every set. Arabic marks plural (including a dual), so plural -s is not the issue. [R + inference]
- **Pronunciation aid**: `none`, or `optional` IPA. Arabic script has no /p v/, and short vowels are normally unwritten, so a respelling would reinforce the b/p and f/v errors. [P, no source fetched]
- **Interface notes**: Modern Standard Arabic, which reads as neutral across dialects. Right-to-left: `dir="rtl"`, mirrored nav, chevrons and progress bars, and isolated English examples (`<bdi>`/`dir="ltr"`) inside Arabic explanations. Choose Arabic-Indic (٣) or Western (3) digits per locale. Plural categories: six (`zero`, `one`, `two`, `few` when n mod 100 is 3–10, `many` when it is 11–99, `other` for 100–102, 200, decimals), repeating every hundred (103 is `few`), so every count string needs six forms.
- **Curriculum deviations**: [inference]
  - Reweight *be*, articles ×3 (indefinite) and relative clauses.
  - Add p/b and f/v minimal pairs to pronunciation traps.
- **Learner context**: country scores vary (EF EPI 2025): Saudi Arabia 417, Egypt 465, UAE 489, Morocco 479, Jordan 431, mostly "Low" or "Very low". No single "Arabic speaker" figure exists.

### Russian (ru)
- **Top error zones in English**
  1. Articles: *I have car* → *a car*; *Sun is hot* → *The sun*. [R] Russian learners rank low on articles in the Cambridge Learner Corpus; the L1 effect on articles was the strongest in the study, large enough to outweigh proficiency differences ([Murakami & Alexopoulou 2016](https://core.ac.uk/download/42340394.pdf)).
  2. Present perfect versus past: *I have seen him yesterday* / *I live here for five years* → *I saw him yesterday* / *I have lived here for five years*. [P, no source fetched]
  3. Possessive 's ranks low across groups: *the room of my sister* → *my sister's room*. [R] (Murakami & Alexopoulou)
  4. Questions without *do*: *Where you live?* → *Where do you live?* [P, no source fetched]
  5. *be* omitted in the present: *He doctor* → *He is a doctor*. Russian drops the present-tense copula. [inference]
  6. Prepositions and verb patterns carried over from Russian: *depend from* → *depend on*. [P, no source fetched]
  - Note (not error zones): plural -s and progressive -ing rank in the high clusters for Russian learners. [R] (Murakami & Alexopoulou)
- **Pronunciation trouble**: /θ ð/; /w/ said as /v/; /h/ said as /x/; no long/short vowel contrast (*ship/sheep*); final devoicing; palatalisation. [P, no source fetched]
- **Standing practice rule candidate**: `article` only: the article half of `ko-en`'s rule. Corpus evidence says plural -s is already strong. [R]
- **Pronunciation aid**: `optional`, using Cyrillic respelling or IPA. Cyrillic transcriptions are common in Russian self-study, while IPA transcription is the convention in Russian school textbooks. [P, no source fetched]
- **Interface notes**: Standard Russian. Register: *ты* (app-casual) versus *вы*, a product decision. Plural categories: `one` (1, 21, 101), `few` (2–4, 22–24), `many` (0, 5–20, 25…), plus `other` for fractions, so count strings need at least three forms (*1 урок, 2 урока, 5 уроков*). Text runs about 15–25% longer than English.
- **Curriculum deviations**: [inference]
  - Reweight articles ×3, present perfect ×2 and questions.
  - Lighten plurals and continuous.
- **Learner context**: Russia EF EPI 2025 score 532 (rank ≈44), band "Moderate".

---

## Cross-language summary table

Typological columns 2–5 come from general linguistic knowledge, not fetched sources (see Gaps). The plural-forms column was checked with `Intl.PluralRules`. PILOT-SPEC §4 checks plural patterns only at 1 and 2, which misses ru 5, ar 0/3/11/100 and fr/pt/hi 0; the validator should test those values for these languages.

| Lang | Has articles? | Marks plural? | Subject pronouns obligatory? | Basic word order | Script direction | Plural forms for UI | Suggested standing rule | Suggested pronunciation aid | Build difficulty |
|---|---|---|---|---|---|---|---|---|---|
| zh | No | No (们 optional, people only) | No (context drop) | SVO | LTR, no spaces | other | article-plural | optional: IPA (or none) | **medium**: CJK line-breaking; pron policy is open |
| fr | Yes | Yes | Yes | SVO | LTR | one (0–1), many, other | tense-aspect (+ false friends) | none | **low**: Latin script, only the new rule kind |
| de | Yes | Yes | Yes | SVO main / V2, SOV subordinate | LTR | one, other | tense-aspect (+ word order) | none | **low**: only long words at 390px |
| pt | Yes | Yes | Partly (BR mostly overt) | SVO | LTR | one (0–1), many, other | prep-tense (+ subject/it) | none / IPA | **low**: Latin script; new rule kind |
| it | Yes | Yes | No (null subject) | SVO | LTR | one, many, other | tense-aspect (+ subject/it) | none / IPA | **low**: Latin script; new rule kind |
| vi | No | No (optional các/những) | Often dropped | SVO | LTR, Latin + diacritics | other | article-plural | none / IPA | **low**: reuses ko-en rule; font diacritics |
| th | No | No | Often dropped | SVO | LTR, no spaces | other | article-plural (+ 3rd-person -s) | optional: Thai-script or IPA | **medium**: word segmentation, gendered politeness |
| id | No | No (reduplication optional) | Often dropped | SVO | LTR, Latin | other | article-plural (+ be) | none / IPA | **low**: reuses ko-en rule |
| hi | No (एक loosely) | Yes | No (pro-drop) | SOV | LTR, Devanagari | one (0–1), other | article-tense | optional: Devanagari or IPA | **medium**: script, register (Hindi vs English loans) |
| ar | Definite only (al-) | Yes (+ dual) | No (verb agreement) | VSO (MSA) / SVO | **RTL** | zero, one, two, few, many, other | article-copula | none / IPA | **high**: RTL mirroring, bidi, 6 plural forms |
| ru | No | Yes | Mostly (dropping possible) | SVO, free | LTR, Cyrillic | one, few, many, other | article | optional: Cyrillic or IPA | **medium**: 3+ plural forms, longer text |

## Recommended build order

Ranked by reach × ease (this file's synthesis). Reach weighs learner numbers and the low EF EPI bands where need is highest. Ease weighs whether the `article-plural` rule and its engine path carry over unchanged, and what layout costs the language adds.

1. **zh**: largest learner population, and the `article-plural` rule carries over unchanged. The main costs are CJK line breaks and settling the pron policy.
2. **vi**: low cost (Latin script, one plural form, the Korean rule reused), and it has the best-measured error evidence of the article-less group (the plural -s data).
3. **id**: large population and "Low" band; reuses the Korean rule and adds a copula check.
4. **pt (BR)**: large, "Low"-band market at almost no engineering cost. It is the first course needing a non-article rule kind (`prep-tense`); building that engine path also prepares the `tense-aspect` kind for fr, de and it.
5. **hi**: huge reach, but many Indian learners already use English, and register and script choices take extra work. Only half the Korean rule applies.
6. **th**: "Very low" band and the Korean rule reused, but Thai word segmentation and gendered politeness add interface work.
7. **ru**: only the article half of the rule applies. Four plural categories test the plural-pattern pipeline before Arabic does.
8. **fr**: cheap once `tense-aspect` exists; moderate need.
9. **it**: cheap; moderate need; same `tense-aspect` kind.
10. **de**: cheapest engineering, but the highest proficiency (band "High"), so the least need.
11. **ar**: big reach, but right-to-left mirroring, bidi handling and six plural forms are the largest engine change. Build it last, or as its own engine milestone.

## Gaps and unverified claims

- **Swan & Smith not read.** Only the 1987 chapter list was verified. Second-edition chapters (including any Indonesian/Malay or Korean chapter) were not checked. Reading the zh, ru, ar, th and vi chapters is the obvious next step.
- **No fetched research** for French, Portuguese or Italian error frequencies. Their lists are practitioner pages (llexi, FlashAcademy, TEFL Academy) or [P, no source fetched]. The TEFL Academy French page returned no article text.
- **Mandarin**: no research figure for articles or plurals. The CLEC source was abstract-only, and its "verb errors head the list" claim was not seen in the full text.
- **Thai**: articles and plurals are unmeasured in the fetched study (43 students, spoken data). **Indonesian**: one small junior-high study of descriptive writing, and no pronunciation source at all.
- **Hindi**: Khan 2021 is a 10-person case study without counts. llexi mixes Indian-English usage with errors.
- **Arabic**: Alshayban was abstract-only (no counts), and Al-Buainain gives no frequencies. Resumptive pronouns in relative clauses are an inference, not something either source measured.
- **Russian**: everything except articles, possessive 's, plural -s and -ing (all from Murakami & Alexopoulou) is [P, no source fetched] or [inference], including tense, *do*-support, copula, prepositions and all pronunciation points.
- **Vietnamese** present-perfect avoidance (item 6) has no fetched source.
- **Murakami & Alexopoulou** was read via a fetch summary; the "outweigh proficiency" point is paraphrased, not quoted.
- **Subject-pronoun dropping** for it and pt is an inference from typology. No fetched source lists it as a measured error.
- **All pronunciation-aid recommendations** are unsourced: whether IPA or native-script respelling helps, and which convention each country's textbooks use. No study comparing aids was looked for.
- **Pronunciation points for fr, de (devoicing), id, hi (details) and ru** have no fetched source.
- **Typological facts** in the summary table (articles, plural, pro-drop, word order) are general linguistic knowledge, not fetched.
- **Interface register defaults** (du, tu/vous, ты/вы, kamu/Anda, 你) and the text-expansion percentages are unverified conventions.
- **EF EPI** numbers come via a secondary site and are per country, from self-selected samples.

## Sources

- [Murakami & Alexopoulou 2016, L1 influence on morpheme order (Cambridge Learner Corpus)](https://core.ac.uk/download/42340394.pdf)
- [Liu 2012, CLEC-based study of tense errors (abstract page)](https://www.sciedupress.com/journal/index.php/wjel/article/view/1858)
- [SJSU Writing Across the Curriculum, Mandarin–English guide](https://gcp-web.sjsu.edu/wac/docs/MandarinEnglishGuide.pdf)
- [Disney & Le 2024, Word-final /s/–/z/ omission in Vietnamese English (Languages)](https://mdpi.com/2226-471X/9/10/327)
- [Pawabutra & Sutakote 2024, Grammatical errors in Thai EFL learners' speaking](https://so17.tci-thaijo.org/index.php/JEL/article/view/625)
- [Gayo & Widodo 2018, Morphological and syntactical errors of Indonesian students (IJLTER)](https://ijlter.org/index.php/ijlter/article/download/1089/pdf)
- [Khan 2021, Error analysis of the spoken English of adult Indian learners (JELT)](https://journals.eltai.in/index.php/jelt/article/download/JELT630302/493/491)
- [Alshayban 2012, Copula omission by EFL Arab learners (thesis abstract)](https://mountainscholar.org/items/e8695078-a867-43e2-a142-b13667963cc8/full)
- [Al-Buainain, Students' writing errors in EFL: a case study](https://lingbuzz.net/lingbuzz/001050/current.pdf)
- [FlashAcademy, Learner Profile: Italian](https://support.flashacademy.com/hc/en-gb/article_attachments/7503603466397)
- [llexi, Common English errors by Hindi speakers](https://llexi.com/l1-errors/common-english-errors-hindi-speakers.html)
- [llexi, Common English errors by Portuguese speakers](https://llexi.com/l1-errors/common-english-errors-portuguese-speakers.html)
- [llexi, Common errors by first language (index; cites no sources)](https://llexi.com/l1-errors/)
- [The TEFL Academy, Common problems for German learners of English](https://www.theteflacademy.com/?p=503)
- [The TEFL Academy, Common mistakes of Vietnamese learners of English](https://www.theteflacademy.com/blog/common-mistakes-of-vietnamese-learners-of-english/)
- [The TEFL Academy, Language-specific pronunciation problems (Chinese, Thai, Arabic)](https://www.theteflacademy.com/blog/language-specific-pronunciation-problems-for-english-language-learners/)
- [CLZ catalogue entry, Swan & Smith, Learner English (1987 chapter list)](https://cloud.clz.com/tesllibrary/books/detail/1091544)
- [World Population Review, EF EPI 2025 table](https://worldpopulationreview.com/country-rankings/english-proficiency-by-country)
- Local check: `Intl.PluralRules` in Node (ICU 78.3, CLDR 48) for plural categories.
