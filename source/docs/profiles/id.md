# Indonesian speakers learning English — course profile

Course `id-en`. Audience: Indonesian-speaking adults and older teenagers. All explanations, prompts, `why`, `hint`, meanings, deck names and interface are in Bahasa Indonesia; answers and examples are in English. Evidence labels follow `reports/Grammar learning order research.md`: **[research-backed]** = a study or corpus, named, with its sample; **[curriculum convention]** = what Indonesian textbooks, spelling rules, test bodies or apps do; **[practitioner opinion]** = a teacher's or author's position, or this profile's own inference (said so where it is mine). A study read only as an abstract is marked "abstract only". Most Indonesian studies found are small, single-school, qualitative error analyses; treat their percentages as indicative, not as population rates.

## 1. Summary (10 lines max)

- Teach **American English** (`en-US`, same English strings as `ko-en`). Explanations use **kamu**, a friendly-neutral tone and standard (baku but not stiff) Indonesian, with English tense names kept as in Indonesian schools (*Simple Present Tense*, V1/V2/V3).
- **Top measured errors** (77 junior-high writers, 296 errors): copula *be* 14.9%, inflection (plural etc.) 14.2%, prepositions 14.2%, articles 13.2%, subject–verb agreement 9.5% (Gayo & Widodo 2018). Indonesian has no articles, no obligatory plural, no tense inflection and no obligatory copula.
- **Standing rule: `article-plural`, as in ko/ja**, keywords `\bartikel|\bjamak` (flag `i`). The shared items already satisfy it, so it costs no deviations. Copula *be* and tense are secondary emphases (named in `why`, not validated).
- **Pronunciation aid: required Indonesian-letter respelling** ("cara baca"), stress in CAPITALS, long vowels doubled (ii, uu, aa, oo), é/è from Indonesian spelling (PUEBI) for /ɛ/ vs /æ/, sy/c/j/ng/ngg read as in Indonesian, th/dh/v/z kept distinct from t/d/f/s. Enforced by `pronPattern`; a closed tag set fixes one-syllable words that would otherwise equal the English.
- **Skill shape** (EF EPI 2025): reading 491 and writing 479, but listening 454 and speaking 447. Oral skills are the gap, not writing, so weight audio and typed production.
- **Curriculum:** keep all 39 ids in order; 24 get an Indonesian-specific explanation emphasis (no English changes). Add 2: `indo-english` (end of A1) and `time-markers` (A2, after `perfect`). Drop none.
- Latin script with `nativeScript: null`: meanings must differ from the English (§9 lists the loanword glosses that collide), and `labels.cueTest` makes Indonesian text compulsory in mc questions and type hints.

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision]:
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings.
2. TOEFL ITP, the score Indonesian universities and the LPDP scholarship ask for, is US-made [curriculum convention; [IDP on LPDP requirements](https://idp.com/indonesia/blog/minimum-toefl-pte-ielts-requirement-lpdp-scholarship/?lang=en)].
3. Use British forms only as a card `note` («Dalam bahasa Inggris Britania: *flat*»), never as an accepted answer.

**Form of address: *kamu*, lower-case, never *Anda*.** Reasons:
- [practitioner opinion] Djenar 2021: *anda* was coined by 1950s technocrats as a neutral civic term. It has an "impersonal character" and is "commonly used in advertising", while *kamu* is used with friends, relatives and children ([Melbourne Asia Review](https://melbourneasiareview.edu.au/?p=10078)). For a personal tutor app, *Anda* reads like an advert or a bank letter.
- [curriculum convention] Indonesian English-learning edtech writes to learners in *kamu* (e.g. «Kamu juga akan menemukan rumus simple present tense lengkap», [Prep Edu](https://prepedu.com/id/blog/english-simple-present-tense)). No style guide confirming an app-wide convention could be read (§11).
- PUEBI capitalises *Anda* ([PUEBI 2015](https://badanbahasa.kemdikbud.go.id/resource/doc/files/permendikbud_nomor_50_tahun_2015.pdf)); *kamu* is never capitalised mid-sentence. Possessive *-mu* is fine: «kartumu», «progresmu».
- Do not use *lo/gue*, *aku* for the app, or slang such as *banget*, *nih* or *yuk* in instructions. *Yuk* and *ayo* are allowed only in onboarding nudges, at most one per screen.

**Register for explanations:** standard Indonesian, short sentences, friendly but not chatty.
- Prefer active verbs and *kita* when explaining a pattern («Dalam bahasa Inggris, kita pakai *a* sebelum…»). Use *kamu* for the learner's action («Kalau kamu mau bilang…»).
- Prefer *pakai* over *gunakan* or *menggunakan* in short `why` and `hint` lines; *gunakan* is fine in lesson bodies.
- Mark errors with ✗ and corrections with ✓: `I'm teacher. ✗ → I'm a teacher. ✓`.
- **Translations of example sentences:** *saya* for *I* and *kamu* for *you* by default. Casual dialogues (friends, texting) may use *aku* / *kamu*. Service and formal contexts (hotel, office email, doctor) translate *you* as *Anda*, *Bapak* or *Ibu*. That *Anda* is inside a translation, not addressed to the learner.

Three sample sentences in the voice:
- «Bahasa Indonesia tidak punya artikel, jadi *a* dan *the* paling sering terlupa. Tenang, cukup ingat tiga aturan.»
- «Dalam bahasa Indonesia, kata kerjanya tetap: kemarin, hari ini, besok, semuanya "makan". Dalam bahasa Inggris, kata kerjanya yang berubah: *eat*, *ate*, *will eat*.»
- «Kalau subjeknya *he*, *she* atau *it*, tambahkan -s pada kata kerja: *She works here.*»

**Mixing English into Indonesian text:**
- **Lesson HTML bodies:** English words and sentences in `<b>` (as ko-en does). PUEBI prescribes italics for foreign words, but the bold convention keeps the lesson renderer identical across courses. Use `<em>` only for an Indonesian word being discussed («kata *sudah*»).
- **Plain-text fields** (`why`, `hint`, `p`, `q`, card `note`) cannot carry markup. There, put English inside straight double quotes, e.g. «Dengan "she", kata kerja ditambah -s.», and quote Indonesian phrases with ‘ ’ only when needed. Exception: an English sentence that is the whole object of a `q` stands bare: `I have two book. — mana yang salah?`.
- **Do not inflect English with Indonesian morphology:** no «di-*cancel*», «*meeting*-nya», «*phrasal verb*-*phrasal verb*». Write «rapatnya», «*phrasal verb*», «beberapa *phrasal verb*».
- **Punctuation:** standard Latin punctuation, no space before ? ! : ;. Decimal comma and thousands point appear in Indonesian text only, never in English strings (§10).
- Alternatives are separated by ` / ` (spaced), as in ko-en.

## 3. Glossary

**Convention found** [curriculum convention]:
- The Kurikulum Merdeka Grade 7 textbook *English for Nusantara* (2022) labels grammar **in English**: verb, base verb, be-verb, subject, pronoun, singular, plural, article (a/an), noun, simple present tense, adverbs of frequency, preposition, imperative sentence, WH-question ([Kemdikbud PDF](https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Bahasa-Inggris-BS-KLS-VII.pdf)).
- Popular Indonesian explainers mix the two: «kata kerja bentuk dasar (V1)», «Kata kerja to be», «subjek», «Kalimat Positif (+) / Kalimat Negatif (−)», «Kalimat Tanya», «-s atau -es khusus untuk subjek he/she/it», «Penanda Waktu (Time Expressions)» ([Prep Edu](https://prepedu.com/id/blog/english-simple-present-tense); [Pusba UMA](https://pusba.uma.ac.id/2022/11/simple-present-tense/): «Verb 1», «kalimat interogative / kalimat pertanyaan», «orang ketiga (She, He, It)»).

**Rule:**
- Name **word classes and sentence types in Indonesian**, gloss the English once, and **keep tense names and a few technical labels in English**, as learners met them at school and in test prep.
- **One term per concept**, exactly as below. The standing-rule regex depends on *artikel* and *jamak* (§7). Do not write *kata sandang* or *bentuk plural*.
- First mention in a lesson body: «kata benda (*noun*)»; afterwards «kata benda».

| English term | Indonesian term (use this) | Note |
|---|---|---|
| article | **artikel** | Standing-rule keyword. Gloss once: «artikel (*a*, *an*, *the*)». Never *kata sandang* |
| indefinite / definite article | artikel *a/an* / artikel *the* | Avoid «artikel tak tentu / tentu» in practice |
| zero article | tanpa artikel | «di sini tanpa artikel» |
| noun | kata benda | |
| countable / uncountable noun | kata benda yang bisa dihitung / tidak bisa dihitung | Short form in `why`: «bisa dihitung» |
| singular | tunggal (bentuk tunggal) | |
| plural / plural -s | **jamak** / bentuk jamak / -s jamak | Standing-rule keyword. Never *plural* alone in Indonesian text |
| reduplication (buku-buku) | kata ulang | Contrast only |
| pronoun | kata ganti | subject pronoun = kata ganti subjek; object pronoun = kata ganti objek |
| possessive (my, his; 's) | kata ganti kepemilikan / *'s* kepemilikan | |
| subject / object | subjek / objek | |
| verb | kata kerja | |
| to be (am/is/are) | ***to be*** | Kept in English, as in schools. «*to be* (am, is, are)» |
| auxiliary (do/does/did) | kata kerja bantu | |
| modal (can, must…) | *modal* (kata kerja bantu modal) | |
| base form / past / past participle | **V1 / V2 / V3** | School convention; gloss once: «V1 (bentuk dasar)» |
| third-person singular -s | -s untuk orang ketiga tunggal | Short form: «-s orang ketiga» |
| regular / irregular verb | kata kerja beraturan / tidak beraturan | |
| -ing form | bentuk -ing | |
| gerund / infinitive | *gerund* / *to infinitive* | English labels; gloss once |
| tense | *tense* (bentuk waktu) | «*tense*-nya» is wrong per §2; write «bentuk *tense*» |
| present simple | ***Simple Present Tense*** | All tense names stay in English, capitalised as in schools |
| present continuous | *Present Continuous Tense* | |
| past simple / past continuous | *Simple Past Tense* / *Past Continuous Tense* | |
| future (will / going to) | *will* / *be going to* | |
| present perfect (+ continuous) | *Present Perfect Tense* (*Continuous*) | |
| past perfect | *Past Perfect Tense* | |
| time expression | keterangan waktu | yesterday, now, already |
| Indonesian aspect markers | penanda waktu (*sudah*, *sedang*, *akan*, *pernah*, *belum*) | Lesson `time-markers` |
| passive / active | kalimat pasif / kalimat aktif | |
| conditional | kalimat pengandaian (*conditional*) | «pengandaian tipe 1 / 2 / 3» |
| relative clause / pronoun | anak kalimat dengan *who/which/that* / kata ganti penghubung | Link to *yang* |
| reported / direct speech | kalimat tidak langsung / kalimat langsung | Indonesian school terms |
| preposition | preposisi (kata depan) | Gloss once; then «preposisi» |
| conjunction | kata sambung | |
| adjective / adverb | kata sifat / kata keterangan | |
| comparative / superlative | bentuk perbandingan / bentuk paling (*comparative* / *superlative*) | |
| question word | kata tanya | |
| positive / negative sentence / question | kalimat positif / kalimat negatif / kalimat tanya | From the explainers above |
| word order | urutan kata | |
| contraction | singkatan (*I'm*, *don't*) | |
| phrasal verb | *phrasal verb* | English label |
| idiom | idiom / ungkapan | |
| false friend | kata yang menjebak | Lesson `indo-english` |
| pronunciation | pelafalan | |
| stress (word stress) | tekanan kata | «suku kata yang ditekan ditulis kapital» |
| syllable | suku kata | |
| vowel / consonant | vokal / konsonan | |
| linking | sambungan bunyi | |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking:** evidence strength × frequency × how often the point recurs across lessons. The ranking is this profile's inference. Format: error ✗ → correction ✓. Every "Why" line (the contrast with Indonesian) is general linguistic description, not fetched evidence; read it as [practitioner opinion] unless the Evidence line names a study.

An example with no named source is illustrative [practitioner opinion]. "Theirs" means quoted from the named study; "adapted" means the study's example with a name or place changed.

**Main fetched evidence:**
- [Gayo & Widodo 2018](https://ijlter.org/index.php/ijlter/article/download/1089/pdf) (IJLTER): 77 Year 9 students in Yogyakarta, descriptive texts of at least 150 words, 296 errors. Its surface-taxonomy counts and percentages do not reconcile (113 omissions given as 43.19% of 296), so only the error-category table is used below.
- Smaller studies are named per item.

1. **Copula *be*: missing, wrong form, or added before a verb.**
   - *Examples:* `She Ø beautiful. ✗ → She is beautiful. ✓` / `Three species of the tiger is in danger. ✗ → are ✓` / `I am agree. ✗ → I agree. ✓` / `The butterfly is fly. ✗ → The butterfly flies. ✓`
   - *Why:* Indonesian links subject and adjective with nothing (*Dia cantik*). *Adalah* is optional, used mainly before nouns. Learners then over-correct by attaching *am/is* to verbs.
   - *Evidence:*
     - [research-backed] Copula *be* is the largest category in Gayo & Widodo: 44 of 296 errors (14.86%). The misformation example is theirs.
     - [research-backed] Be omission still appears in undergraduate theses (`The students Ø afraid to making mistakes`). Source: [Yuntika et al. 2025](https://jele.or.id/index.php/jele/article/download/1538/824), 10 theses, 21 agreement errors; its counts are internally inconsistent.
     - `I am agree` is [practitioner opinion].
2. **Plural -s (and other inflection).**
   - *Examples:* `Many cockroach are … ✗ → Many cockroaches are ✓` / `I have two brother. ✗ → two brothers ✓` / `the books-books ✗`
   - *Why:* Indonesian marks plural optionally by reduplication (*buku-buku*), and drops it after numerals and quantifiers (*dua buku*, *banyak buku*), exactly where English insists on -s.
   - *Evidence:*
     - [research-backed] Inflection errors (plural and verb endings) are 42 of 296 (14.19%) in Gayo & Widodo; the cockroach example is theirs.
     - [research-backed] Plural endings are also mispronounced. In speech-contest recordings of 10 college students, plural forms (*judges*, *ideas*, *friends*, *hands*) and /s/–/z/ in plural endings were error sources ([Harunika et al. 2020](https://journal.unnes.ac.id/nju/LC/article/download/25887/10837), no counts).
     - [research-backed, abstract only] Some vocational students in Banda Aceh made plural-morpheme errors in speaking ([Fitriani & Zulkarnain 2019](https://doaj.org/article/84494ccd72254ba4b075be0e205ebe43)).
     - The "numeral blocks reduplication" transfer is [practitioner opinion].
3. **Articles (a / an / the / none).**
   - *Examples:* `I live in Ø village. ✗ → in a village ✓` / `Pitcher plants have Ø most mysterious leaves. ✗ → the most ✓` / `I'm Ø teacher. ✗ → I'm a teacher. ✓`
   - *Why:* Indonesian has no articles. *Se-* + classifier (*seorang*, *sebuah*) and *-nya* / *itu* overlap only partly with *a* and *the*, and are optional.
   - *Evidence:* [research-backed] Article errors are 39 of 296 (13.18%), mostly omission, in Gayo & Widodo; the pitcher-plant example is theirs. No Indonesian-specific accuracy-by-level data was fetched. The cross-L1 finding that article-less L1s keep article accuracy low up to advanced levels is for Japanese and Korean (Murakami & Alexopoulou 2016, cited via ja.md and the grammar report; not re-opened for this profile); for Indonesian it is [practitioner opinion].
4. **Prepositions.**
   - *Examples:* `They breed in November Ø April. ✗ → from November to April ✓` / `in Monday ✗ → on Monday ✓` / `discuss about ✗ → discuss ✓` (*membahas tentang*) / `arrive to Jakarta ✗ → arrive in Jakarta ✓`
   - *Why:* *di* covers in / on / at for place, *pada* covers time, and *ke* means "to". Verb + preposition pairs are translated word for word.
   - *Evidence:* [research-backed] Preposition errors are 42 of 296 (14.19%) in Gayo & Widodo, who attribute prepositions and noun phrases mainly to Indonesian interference; the November example is theirs. The other examples are [practitioner opinion].
5. **Tense: the verb does not change.**
   - *Examples:* `Yesterday I go to the market. ✗ → went ✓` / `We spend a lot of time together (last year). ✗ → spent ✓` / `I am living in Jakarta for 20 years. ✗ → I have lived ✓` / `we're went back ✗ → we went back ✓`
   - *Why:* Indonesian verbs never inflect for time. Time comes from adverbs (*kemarin*, *besok*) and optional markers (*sudah*, *sedang*, *akan*, *pernah*, *belum*), or from context alone.
   - *Evidence:*
     - [research-backed] 20 senior-high students' recount texts gave 80 past-tense errors: misinformation 37.5%, omission 30%, addition 17.5%, misordering 15%. The authors name mother-tongue interference as the main cause ([Lionny & Kusumadewi 2022](https://jim.unindra.ac.id/index.php/jedu/article/download/6428/pdf)); the `spend` and `we're went` examples are theirs.
     - [research-backed, abstract only] 26 Year 8 students' recount texts gave 426 past-tense errors (omission 38.97%, selection 38.03%). The authors attribute them to the complexity of English, *not* to Indonesian ([Asni & Susanti 2018](https://doaj.org/article/83a8735095484d11bbb751144f2b9cda)). **The two studies disagree on cause.**
     - [research-backed, abstract only] 70% of vocational students made tense errors in speaking (Fitriani & Zulkarnain 2019; sample size not stated).
     - [research-backed] Tense was only 1.69% in Gayo & Widodo, because descriptive texts barely need tense. The `I am living … for 20 years` example is adapted from theirs (the fetched text reads "Junikarta").
6. **Subject–verb agreement and third-person -s.**
   - *Examples:* `They works from Monday to Friday. ✗ → They work ✓` / `She live in Bandung. ✗ → She lives ✓` / `The process are as follows. ✗ → is ✓`
   - *Why:* Indonesian verbs never agree with the subject.
   - *Evidence:* [research-backed] Agreement errors are 28 of 296 (9.46%) in Gayo & Widodo (the `They works` example is theirs), and they persist into undergraduate theses (Yuntika et al. 2025; the `process are` example). No Indonesian accuracy-by-level data was fetched.
7. **Pronouns: *dia* → he/she, *-nya* → his/her/its.**
   - *Examples:* `My sister? He is a nurse. ✗ → She ✓` / `using it beak ✗ → its beak ✓` / `Budi loves her mother (his) ✗ → his ✓`
   - *Why:* *dia* / *ia* and *-nya* carry no gender, and *-nya* also does the work of *the*.
   - *Evidence:* [research-backed] Personal-pronoun errors are 23 of 296 (7.77%) in Gayo & Widodo, but their examples are about *it* (`Cactus has leaves like hair but it is spines`; `using it beak` is quoted via OTHERS.md), not gender. **He/she confusion has no fetched source**: [practitioner opinion] only.
8. **Noun-phrase order: adjective and possessive after the noun.**
   - *Examples:* `Cactus has body large. ✗ → a large body ✓` / `car my ✗ → my car ✓` / `book this ✗ → this book ✓`
   - *Why:* Indonesian puts adjectives, possessors and demonstratives after the noun (*badan besar*, *mobil saya*, *buku ini*).
   - *Evidence:* [research-backed] Gayo & Widodo: noun-phrase errors 18 of 296 (6.08%), "disordering" attributed to Indonesian; the cactus example is theirs. The possessive and demonstrative examples are [practitioner opinion].
9. **Negation and questions without *do*.**
   - *Examples:* `Turtles not have teeth. ✗ → don't have ✓` / `I not like spicy food. ✗ → I don't like ✓` / `You like coffee? ✗ (in writing) → Do you like coffee? ✓`
   - *Why:* *tidak* goes straight before the verb, and Indonesian yes/no questions use intonation or *apakah*, which has no auxiliary.
   - *Evidence:* [research-backed] Gayo & Widodo give the turtle example and attribute it to Indonesian negation rules. The question pattern is [practitioner opinion].
10. **Pronunciation.** Studies are small, and many speakers' first language is regional (Javanese, Sundanese, Acehnese, Gayo and others), so substitutions vary by region.
    - **TH → t / d:** `think` → *tink*, `they` → *dey*.
      - [research-backed, n = 5] /θ/ → /t/ and /ð/ → /d/ in 100% of tokens; /ʃ/ → /s/ in 100% (*shoe*); /ʒ/ → /s/ 80%; /v/ → /f/ 60–80% ([Mada 2025](https://e-journal.upr.ac.id/index.php/ebony/article/download/17632/6832), East Nusa Tenggara students in Yogyakarta, 10-word list).
      - [research-backed] /ð/ was the hardest of six consonants, with only 42% of 30 Year 9 students accurate ([Akis & Jamilah 2025](https://ejournal.unp.ac.id/index.php/linguadidaktika/article/view/133711), abstract page).
      - [research-backed, abstract only] An interview study of interdental errors among 20 English-education students ([Arsanto et al. 2019](https://doaj.org/article/720685066d3b4ba3a77d022638d25b92)) reports causes, not rates.
    - **V → f, Z → s, final devoicing:** `very` → *fery*, `seven` → *sefen*, `present` → *presen(s)*, final /d/ → /t/, final /b/ → /p/.
      - [research-backed] In 37 fourth-semester students, [v] was the most frequent consonant error (26.64%), devoiced to [f] in all positions, ahead of [θ] (13.19%) and [tʃ] (11.11%). [ð] → [d] initially and → [θ] finally; [z] → [s] ([Jariyah 2020](https://core.ac.uk/download/479411463.pdf), undergraduate thesis; only the first 100,000 of 194,527 characters were read).
      - [research-backed, abstract page] /v/ → /f/, /d/ → /t/ or dropped finally, /z/ → /s/ ([Pade & Purnawan 2026](https://ejournal.iainpalopo.ac.id/index.php/ideas/article/view/10524)). Final /b/ → /p/ (Harunika et al. 2020).
    - **Final clusters simplified:** `task` → *tas*, `guest` → *ges*, `English` → *Englis*. [research-backed] Jariyah 2020 (deletion of final [k], [g], [t], [s]). [research-backed, abstract only] An Aceh thesis (24 learners: Indonesian, Gayo and Acehnese L1) found errors "largely limited to final stops and sibilants, and initial and final affricates and interdentals" ([CORE record](https://core.ac.uk/works/24246925)).
    - **Vowels:** no /ɪ/–/iː/, /ʊ/–/uː/ or /æ/–/ɛ/ contrast, and schwa replaced by full vowels.
      - [research-backed] Schwa was the top vowel error (24.37%), then [ɛ] (17.65%) and [ɔː] (14.77%) (Jariyah 2020).
      - [research-backed, n = 10] /ɪ/ → /i/, plus /æ/, /eɪ/ and /iə/ as "foreign sounds" (Harunika et al. 2020).
      - [research-backed, abstract only] Problems with /iː/, /ɑː/, /eɪ/, /oʊ/, /z/, /v/, /ð/ and silent letters ([Firdaus & Milal 2021](https://doaj.org/article/7db1173c6f2d4e92a14b7ec7dff9b27d)).
    - **Stress:** [research-backed, abstract only] incorrect stress on multisyllabic words (Firdaus & Milal 2021).
    - **Spelling pronunciation:** silent letters pronounced (*w*, *l*, *s*: Firdaus & Milal 2021), and English read with Indonesian letter values (*c* as /tʃ/, *e* as schwa). The letter-value point is [practitioner opinion].
    - **Final *k*:** read as a glottal stop, as in Indonesian *anak*, so *book* sounds cut off. [practitioner opinion].
    - **F / P:** some Sundanese speakers say p for f (*pitamin*). [practitioner opinion]; no source fetched.
    - **R / L:** Indonesian has both, so the ko-en rice/lice pair is easy. Indonesian *r* is trilled or tapped, not the American approximant. [practitioner opinion].
11. **"Inggris ala Indonesia": shifted meanings, loanwords and calques.**
    - *Examples:* `I'm boring. ✗ → I'm bored. ✓` / `Let's go refreshing to Puncak. ✗ → Let's get away to Puncak / unwind ✓` / `breakfasting (buka puasa) ✗ → breaking the fast ✓` / `bring cookies, chips or whatsoever ✗ → or whatever ✓`
    - *Evidence:* [practitioner opinion] [British Council Foundation Indonesia](https://www.britishcouncilfoundation.id/en/english/articles/four-common-mistakes), source of these four examples.
    - *More examples* [practitioner opinion, qualitative: [Bire & Hambandima 2023](https://ledture.ukaw.ac.id/index.php/ledture/article/download/6/5/98), drawn from a Kupang newspaper and TV news]:
      - *map* = folder (*map*)
      - *resep* = prescription
      - *titel* = degree
      - *kompleks* = housing estate
      - *mobil* ≠ mobile
      - *ekonomis* = economical, not economic
      - *hand body* = lotion
      - *Good night* as an evening greeting (*Selamat malam*)
      - "yes" to agree with a negative question: *Ya, dia tidak pergi* → `No, he doesn't (go).`
    - *Borrow / lend* (both *pinjam*) and *handphone* → *phone* are [practitioner opinion].
12. **Passive: missing *be*, or *di-* passives carried over.**
    - *Examples:* `The house built in 1990. ✗ → was built ✓` / `This cake is made by my mother yesterday. ✗ → was made ✓`
    - *Why:* the Indonesian *di-* passive is very frequent and has no auxiliary.
    - *Evidence:* [research-backed] Passive-voice errors are 9 of 296 (3.04%) in Gayo & Widodo. That *di-* frequency causes over-use in English writing is [practitioner opinion].
13. **Countability.**
    - *Examples:* `informations`, `advices`, `furnitures`, `many money ✗ → much money ✓`
    - *Why:* *banyak* covers both many and much. Indonesian nouns are not marked for count or mass.
    - *Evidence:* [practitioner opinion]; no Indonesian source fetched.

## 5. Learner starting point

- **School exposure.**
  - English is a school subject through junior and senior high school [curriculum convention; years and status not verified from a fetched regulation].
  - The current Grade 7 textbook already covers be-verb, Simple Present Tense, *a/an*, singular/plural and prepositions of place. It labels them in English and handles pronunciation only through audio QR codes, with no IPA and no respelling ([*English for Nusantara* VII, 2022](https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Bahasa-Inggris-BS-KLS-VII.pdf)) [curriculum convention]. Only about the first half of the book was read (the fetch stopped at 100,000 of 206,630 characters), so these observations cover that half.
  - Classrooms give pronunciation little time, and the school exam structure stresses reading and listening ([Karlina, Rahman & Chowdhury 2020](https://ejournal.upi.edu/index.php/IJAL/article/download/23223/11501)) [practitioner opinion, design paper].
- **Profile figures.**
  - [research-backed, test-taker data] **EF EPI 2025, Indonesia:** rank 80, global average 488. Skill scores: **reading 491, writing 479, listening 454, speaking 447** ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-indonesia-english.pdf)).
  - The overall score was garbled in the fetched text. 468 ("Low" band) comes from the secondary table cited in OTHERS.md.
  - Regions range from Java 493 to Papua 437. Cities: Jakarta 523, Bandung 505, Malang 502, Denpasar 477, Makassar 477.
  - Self-selected online test-takers; no sample size on the sheet.
  - **Shape:** reading and writing sit at or above the global average, while listening and speaking are about 35–45 points lower. This differs from Japan, where both productive skills trail.
- **Exam culture** [curriculum convention]:
  - **TOEFL ITP** is the everyday yardstick for graduation, jobs and scholarships. The state LPDP scholarship asks ITP 500 or 530, or IELTS 6.0, in its regular tiers, and iBT 80–94 or IELTS 6.5–7.0 for top-university tiers ([IDP](https://idp.com/indonesia/blog/minimum-toefl-pte-ielts-requirement-lpdp-scholarship/?lang=en)).
  - Universities set exit tests, e.g. UPI's PTESOL minimum of 450 for the final examination ([UPI FPMIPA](https://fpmipa.upi.edu/news/upi-terapkan-ketentuan-baru-untuk-persyaratan-ptesol-dan-toefl-sidang-akhir)).
  - **IELTS** is the overseas-study test.
  - Familiar formats: 4-option multiple choice (TOEFL Structure and Written Expression, including "find the error"), gap-fill and sentence arrangement, which map directly onto the practice set.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1, expect false beginners.** Most adults had six-plus years of school English, read well, and freeze in speech. The 3-question check will be easy; value lies in the typed items.
  2. **Lean on audio and the respelling aid.** Listening and speaking are the documented gap, and schools teach pronunciation least.
  3. **Name grammar the school way** (V1/V2/V3, *to be*, English tense names). It shortens explanations.
  4. **Recycle *be*, plurals, articles and past forms** in every level's mixed items. Errors persist into undergraduate theses (Yuntika et al. 2025).
  5. **TOEFL flavour:** "find the error" mc items fit the culture (`She go to school every day — mana yang salah?`), and the work deck can carry campus and office vocabulary.

## 6. Pronunciation aid policy

**Evidence:**
- [practitioner opinion, design paper] Karlina, Rahman & Chowdhury 2020 argue that "IPA is suitable for academics and researchers of phonetics and phonology – not for ordinary English learners" ([IJAL](https://ejournal.upi.edu/index.php/IJAL/article/download/23223/11501)).
  - They propose **PABI**, a transcription built on Indonesian graphemes, because "Bahasa Indonesia is a phonetic language". It writes {sy} for /ʃ/, c for /tʃ/, j for /dʒ/, y for /j/ and {ng} for /ŋ/, marks length with a colon or a doubled letter, separates syllables with spaces and highlights stress.
  - They keep IPA symbols θ ð æ ʌ ə, which Indonesian readers cannot type or read.
  - **It was not tested with learners.**
- [research-backed, abstract only] Senior-high students were positive about IPA but found the symbols "difficult to remember and comprehend" ([Chuzaimah et al.](https://jurnal.fs.umi.ac.id/index.php/tamaddun-life/article/view/95); no numbers, year not stated).
- [curriculum convention] The national Grade 7 textbook uses audio, not IPA or respelling (§5).
- [curriculum convention] Indonesian spelling has letters adults already read reliably:
  - the digraphs *kh*, *ng*, *ny*, *sy* ("khusus, ngarai, nyata, syarat");
  - optional diacritics to disambiguate *e*: **é = [e]** (*téras*), **è = [ɛ]** (*sèri*), **ê = [ə]** (*kêcap*);
  - all from [PUEBI 2015](https://badanbahasa.kemdikbud.go.id/resource/doc/files/permendikbud_nomor_50_tahun_2015.pdf). EYD V keeps ê for [ə] ([Tirto](https://tirto.id/jumlah-huruf-konsonan-vokal-dalam-eyd-v-serta-penggunaannya-gvsM)).
- **No fetched study compares respelling, IPA and no aid for Indonesian learners.** The policy below is inference [practitioner opinion].

**Recommendation: `"pron": "required"`, an Indonesian-letter respelling ("cara baca") on every card, `{{ex}}` row and idiom, shown by default and hideable through the toggle «Tampilkan cara baca».**
- **IPA rejected:** adults do not know it (Karlina et al.), the app has no IPA lesson, and the validator could not tell IPA from English mistakes.
- **`none` rejected:** ko/ja/es all carry an aid; the oral-skills gap (§5) argues for more support, not less; and an empty field needs untested engine rendering (PIPELINE §3).
- **`optional` rejected:** empty `pron` would cover exactly the short words where the aid matters most (*think*, *bag*, *ship*).
- **Why a respelling works for Indonesian:** most English consonants already have an unambiguous Indonesian letter (c, j, sy, ng, ngg, y). Only five things need a convention: th, dh, v, z (letters Indonesians see but devoice) and the vowel set. The rules make the known errors visible: devoiced finals, /æ/ vs /ɛ/, vowel length, schwa and stress.

**Rules for the `pron` field:**
1. **Letters:** lower-case Latin letters except **q** and **x**, plus **é** and **è**. Use **CAPITALS for the stressed syllable** of every word of two or more syllables (É and È capitalise too). One-syllable words stay lower-case. Separate syllables with hyphens inside words of 2+ syllables, and words with spaces.
2. **Punctuation:** keep `?`, `!`, `,`, a `.` between two sentences, and ` / ` between pair members. Drop the final period. No apostrophes, digits or IPA: write numbers as words (`25` → `TWÉN-ti-faiv`).
3. **Sound, not spelling; American, natural speed.** Same English word = same letters everywhere, except the weak/strong function words in rule 9.
4. **Vowel key:**

   | Sound | Write | Example |
   |---|---|---|
   | /iː/ | **ii** | see → sii, sheep → syiip |
   | /ɪ/ | **i** | ship → syip, it → it |
   | /uː/ | **uu** | food → fuud, movie → MUU-vi |
   | /ʊ/ | **u** | book → buk, good → gud |
   | /ɛ/ (bed, get) | **é** | bed → béd, menu → MÉ-nyu |
   | /æ/ (bad, cat) | **è** | bad → bèd, thank → thèngk |
   | /ʌ/ (cup, bus) | **a** | cup → kap, bus → bas |
   | /ɑ/ (hot, job, water) | **aa** | hot → haat, job → jaab |
   | /ɔ/ (talk, dog, coffee) | **oo** | talk → took, dog → doog, coffee → KOO-fi |
   | schwa /ə/ | **e** (unstressed only) | about → e-BAUT, Jakarta → je-KAAR-te |
   | /ɜr/ and unstressed /ər/ | **er** | work → werk, water → WAA-der |
   | /ɪr/ /ɛr/ /ɑr/ /ɔr/ /ʊr/ | **ir / ér / aar / oor / ur** | here → hir, there → dhér, car → kaar, four → foor, sure → syur |
   | /eɪ/ /aɪ/ /ɔɪ/ /aʊ/ /oʊ/ | **ei / ai / oi / au / ou** | name → neim, I → ai, boy → boi, how → hau, no → nou |
   | final unstressed /i/ (happy) | **i** | very → VÉ-ri |

   - Plain **e** is always schwa, never [e]. Indonesian readers already say unmarked *e* as [ə] in most native words.
   - Single **o** appears only in *ou*, *oi* and *oo*.
   - é/è as an English /ɛ/–/æ/ contrast is this profile's convention. Indonesian readers do not consciously contrast é and è, so the `pron` lesson teaches «è: buka mulut lebih lebar daripada é».
5. **Consonant key:**

   | Sound | Write | Note |
   |---|---|---|
   | /θ/ | **th** | never t: think → thingk, three → thrii |
   | /ð/ | **dh** | never d: this → dhis, the → dhe |
   | /ʃ/ | **sy** | as in *syarat*: she → syi, English → ING-glisy |
   | /ʒ/ | **zy** | measure → MÉ-zyer (rare) |
   | /tʃ/ | **c** | as in *cari*: check → cék, watch → waac |
   | /dʒ/ | **j** | as in *jalan*: job → jaab, village → VI-lij |
   | /j/ | **y** | yes → yés, menu → MÉ-nyu |
   | /ŋ/ | **ng** | sing → sing, singer → SING-er |
   | /ŋk/ | **ngk** | as in *bangku*: think → thingk, bank → bèngk |
   | /ŋɡ/ | **ngg** | as in *tinggi*: English → ING-glisy, finger → FING-ger |
   | /v/ /f/ | **v / f** | never merge: very → VÉ-ri, fan → fèn, van → vèn |
   | /z/ /s/ | **z / s** | never merge: is → iz, dogs → doogz, bus → bas |
   | /w/ /h/ /r/ /l/ /m/ /n/ /p/ /b/ /t/ /d/ /k/ /g/ | as written | |
   | American flap t/tt (water, better) | **d** | WAA-der, BÉ-der; keep t after n/r, at word end and before a stressed vowel |
   | /ks/ (six) /kw/ (quick) | **ks / kw** | never x or q |

6. **Final consonants: write every one, voiced as voiced.** `bag` → bèg (not bèk), `dogs` → doogz, `live` → liv, `task` → tèsk, `guest` → gést. The lesson says: «konsonan di akhir kata dibaca jelas: b, d, g, v, z tetap bersuara (bukan seperti *sebab* yang dibaca *sebap*), dan k diucapkan penuh, bukan seperti *anak*».
7. **Endings as heard:**
   - plural / third-person **s / z / iz**: cats → kèts, dogs → doogz, buses → BA-siz;
   - past **t / d / id**: watched → waact, played → pleid, wanted → WAAN-tid.
8. **No vowel is added and no consonant dropped:** `street` → striit, `English` → ING-glisy, never *se-tirit* or *ing-gris*. Silent letters disappear: `walk` → wook, `island` → AI-lend, `Wednesday` → WÉNZ-dei.
9. **Function words in weak form by default:**

   | Word | Weak | Strong (stressed, end, contrast) |
   |---|---|---|
   | a / an | e / en | ei / èn |
   | the | dhe; **dhi** before a vowel | dhii |
   | and / but / or | en / bet / er | ènd / bat / oor |
   | to / for / from / of | te / fer / frem / ev | tuu / foor / fram / av |
   | at / in / on | et / in / aan | èt / in / aan |
   | can / could / will / would | ken / kud / wil / wud | kèn / … |
   | do / does / did (aux) | de / dez / did | duu / daz / did |
   | have / has / had | hev / hez / hed (*ev* after a modal) | hèv / hèz / hèd |
   | are / was / were | er / wez / wer | aar / waz / wer |
   | you / your | yu / yer | yuu / yoor |
   | me / he / she / we | mi / hi / syi / wi | mii / hii / syii / wii |
   | some | sem | sam |
   | Contractions | aim, ail, aiv, its, dhèts, dhérz, dount, kènt | |

10. **Linking is not written** in `pron` (it stays at word boundaries); prose notes may show it («*get a* → GÉ-de»).
11. **Names** as the en-US voice says them: Budi → BUU-di, Sari → SAA-ri, Jakarta → je-KAAR-te, Bali → BAA-li, Surabaya → suu-re-BAI-e.
12. **Collision rule (validator: `pron` must differ from the English after lower-casing and stripping spaces and `.!?,`).**
    - Capitals do not count. Hyphens and é/è do, so every multi-syllable word and almost every sentence is safe.
    - A **one-word** target whose correct respelling is spelled like the English gets exactly one tag from this closed set, after a space:
      - `(i pendek)` for /ɪ/ words: `milk` → `milk (i pendek)`, also *in, it, big, sit, film, kid, pin, lip, thin, sing, thing*;
      - `(u pendek)` for /ʊ/ words: `put` → `put (u pendek)`;
      - `(dengar audio)` for any other collision not covered by the two tags above.
    - In the current ko sources, the only single-word target that collides is **milk**. All other one-word targets (*think, sink, three, tree, this, rice, lice, right, light, fan, pan, very, berry, vote, boat, coffee, copy, beach, banana, hotel, walk, work, live, leave, thirteen, thirty*, interjections and chat abbreviations) already differ.
    - New `pron`-lesson rows the content agent adds (*ship/sheep*, *bad/bed*, *fan/van*) also differ. Check *in*, *it*, *big*, *sit*, *film*, *put* if they are added.
13. **Validator:** `pronPattern` = `^[abcdefghijklmnoprstuvwyzéèABCDEFGHIJKLMNOPRSTUVWYZÉÈ ?!.,/-]+( \((i pendek|u pendek|dengar audio)\))?$` (flag `u`, applied by validate.js).
    - It rejects q, x, digits, apostrophes, IPA and any other tag. That catches pasted English (*six*, *quick*, *I'm*).
    - It cannot tell an English spelling from a respelling, so rule 3 is checked in review. A per-word consistency script like es's is recommended.
14. Practice items carry no `pron` (PRACTICE-SPEC).

**Worked examples** (English strings from the existing course unless marked; all pass `pronPattern` and the collision check, smoke-tested locally):

| English | `pron` | Rules shown |
|---|---|---|
| Hello. | hé-LOU | 1 stress caps, 4 é, final period dropped |
| How are you? | hau er yu? | 9 weak *are*, *you* |
| I'm a student. | aim e STUU-dent | 4 uu, 9 weak *a*, contraction |
| Can I see the menu? | ken ai sii dhe MÉ-nyu? | 5 dh, y; 4 ii |
| Is it spicy? | iz it SPAI-si? | 5 z (never *is*), 4 ai |
| Could we get some water? | kud wi gét sem WAA-der? | 4 aa, 5 flap d, 9 weak *some* |
| Everything was great. | ÉV-ri-thing wez greit | 5 th, 9 weak *was*, 4 ei |
| I think so. | ai thingk sou | 5 th + ngk, 4 ou |
| Can we get the check, please? | ken wi gét dhe cék, pliiz? | 5 c for /tʃ/, final z |
| Thank you. (pron lesson) | thèngk yu | 4 è for /æ/, 5 th, ngk |
| three trees (pron lesson) | thrii triiz | th ≠ t, final z |
| ship / sheep (pron lesson) | syip / syiip | 5 sy, 4 i vs ii |
| bad / bed (pron lesson) | bèd / béd | 4 è vs é |
| fan / van (pron lesson) | fèn / vèn | 5 v ≠ f |
| My dog likes bags. (illustrative) | mai doog laiks bègz | 4 oo, 6 voiced finals, 7 s vs z |
| I watched a movie. (illustrative) | ai waact e MUU-vi | 7 -ed = t, 5 c |
| English (illustrative) | ING-glisy | 5 ngg/sy, 8 no dropped sounds |
| milk | milk (i pendek) | 12 collision tag |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "\\bartikel|\\bjamak", "flags": "i" }` (JSON-escaped). The leading `\b` stops *partikel* (phrasal lesson) from counting, while *artikelnya* and *jamaknya* still match.
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this/these, many/much).
- The `why` of each such item must contain **artikel** or **jamak**. With flag `i`, sentence-initial «Artikel…» and «Jamak…» match.

**What the validator counts** (validate.js, `article-plural`):
- `order`: the `why` names the keyword **and** `x` holds an article tile or a singular/plural twin of a tile in `a`.
- `type`: the `why` names the keyword **and** either every variant in `a` contains an article, or `x` holds an article or a twin.
- Writers should put the competitor tile in `x` (`a`, `the`, `book`/`books`).

**Sample `why` lines** (plain text, English in straight quotes; all tested against the regex):
- «Satu benda yang bisa dihitung perlu artikel "a": "a teacher".»
- «Setelah "two", kata benda wajib bentuk jamak: "two books".»
- «Artikel "the" karena bendanya sudah disebut sebelumnya.»
- «"Water" tidak bisa dihitung: tanpa artikel dan tanpa -s jamak.»
- «"These" untuk benda jamak, "this" untuk satu.»

**Justification:**
- **Both systems are absent in Indonesian**, and together they are the largest measured block. Article errors (13.18%) plus inflection errors (14.19%, plural chiefly) total 27% of errors in Gayo & Widodo [research-backed], against 14.86% for copula *be*.
- **Parity cost is zero.** The shared tile and typed items were written to the Korean rule. Only the Indonesian `why` must name *artikel* or *jamak*. Any other kind would force deviations in up to 39 sets (PILOT-SPEC §1.6) [practitioner opinion].
- **`verb-core` was considered and rejected.** It would capture *is/are* and third-person -s (copula plus agreement, 24.3% in Gayo & Widodo). But it drills do-support, which Indonesian learners meet as a lexical rule, while articles and plurals keep failing. It would also need new items and deviations [practitioner opinion].
- **A combined `article-copula` kind** (proposed in OTHERS.md, not implemented) would fit Indonesian best. Revisit it if first-attempt logs show *be* errors dominating after launch.

**Secondary emphasis (not validated; do not add to the regex):**
- Where an item also turns on copula *be*, its `why` names ***to be*** («Kata sifat butuh *to be*: "She is tired".»).
- Where it turns on past form, the `why` names **V2** («Ada "yesterday", jadi kata kerja V2: "went".»).
- Where it turns on *dia*, the `why` names ***he* / *she*** («*Dia* perempuan → "she".»).
- Do not use *artikel* or *jamak* in `why` lines that do not hinge, so the count stays meaningful.

**Prompt frames (`labels.cueTest`).** With `nativeScript: null`, the validator recognises Indonesian text by a word list (`cueTest`, case-sensitive, first letter either case). Every practice mc `q` and type `hint` must contain at least one listed word. If an mc `q` written in the `more/` shorthand contains none, the DSL **silently appends** « Apa isi bagian yang kosong?», which is wrong for a translation question.
- In ko-en, 107 mc questions use the bare frame `'<Korean sentence>' =`. In Indonesian, **always write `'<kalimat>' dalam bahasa Inggris?`**, never `'<kalimat>' =`. Short sentences such as *Hujan*, *Terima kasih* or *Selamat pagi* contain no cue word, and local testing confirmed they fail.
- Other frames, all tested to match:
  - meaning: «Bahasa Inggrisnya 'nasi'?» / «Kata untuk 'kipas angin'?»
  - forms: «Bentuk V2 dari "go"?» / «Bentuk jamak dari "box"?»
  - find the error: «Mana yang salah? She go to school every day.»
  - choose: «Pilih kalimat yang benar.»
  - answers: «Jawab 'ya' untuk "Do you like coffee?"»
- **Type hints:** end with « — » plus a short Indonesian note containing a listed word («three · tree — tiga, jadi jamak», «teacher — to be + artikel sebelum pekerjaan»). Otherwise the DSL appends « — pakai kata-kata ini», which is acceptable.
- The list (see id.profile.json) includes *yang, untuk, dalam, bahasa, Inggris(nya), kata, bentuk, kalimat, apa, mana, pilih, jawab, saya, aku, kamu, dia, di, ke, dari, sudah, akan, belum, pernah, artikel, jamak, berapa, siapa, kapan, sebelum, setelah*.
- It matched none of the 2,469 English strings in the ko-en pack. Do not add words that are also English, such as *dan* or *pin*. *Mana* is kept because it does not occur in course English; rerun the 0-hit check after any change.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in ja.md):**
- **keep** = fresh Indonesian explanation from the Indonesian point of view; English rows, checks and practice unchanged.
- **reweight** = same English checks and practice. The Indonesian explanation and the **lesson-body** example rows shift emphasis as noted. Lesson-body rows are not parity-bound; check and practice strings are. No deviation entry is needed. Do not rewrite practice `o`/`a`/`x` strings (the es parity problem in PIPELINE §6).
- **add** = new lesson, with an entry in `deviations.json` `extraLessons` and in `profile.json` `lessonOrder.after`. Its practice set must itself satisfy the standing rule (§7).

Ids and order are unchanged. Nothing is replaced or dropped.

| lesson id | keep / reweight / add | note for Indonesian speakers |
|---|---|---|
| pron | reweight | Indonesian set: TH (not t/d), V ≠ F, SH = *sy*, Z ≠ S, voiced finals (bag/back, dogs), final clusters (task, English), released final k, i/ii, é/è (bed/bad), schwa, stress caps. Shared R/L items (rice/lice): the `why` says Indonesians already have r and l and should only soften the trill. F/P items: note the Sundanese p-for-f habit. Teaches the `pron` key (§6) in one table |
| be | reweight | Core lesson. `She Ø beautiful ✗`: an adjective or noun after the subject needs *to be* even though Indonesian uses nothing or *adalah*. Warn against `I am agree` / `I am work`. Subject pronouns: *dia* → he or she |
| it-there | reweight | *Ada* → *there is / there are* (agreement with the noun); *Hujan* → *It's raining*; *Sudah jam tiga* → *It's three o'clock* |
| articles | reweight | No articles in Indonesian. *Seorang* / *sebuah* ≈ *a*, but English never drops it: *Saya guru* → *I'm a teacher* |
| plurals | reweight | Reduplication is optional and never follows a number: *dua buku* → *two books*. this/these; possessive and demonstrative before the noun (*buku saya* → *my book*, *buku ini* → *this book*) |
| present | reweight | Verb stays V1, as in Indonesian, but negation needs *don't*: *Saya tidak suka* → *I don't like*, never `I not like` (Gayo & Widodo) |
| questions | reweight | *Kamu suka kopi?* with rising intonation → *Do you like coffee?*; *apakah* = do/does/is/are by context |
| third-s | keep | Indonesian has no agreement; say outright that the -s survives even in theses as an error (Yuntika et al. 2025) |
| prep | reweight | *di* = in / on / at; *pada hari Senin* → *on Monday*, *pada pukul 7* → *at 7*; *ke* = to (but *go home*, not `go to home`) |
| countable | reweight | *banyak* = many **and** much; *informasi*, *saran*, *bagasi*, *perabot* are uncountable in English (no -s, no *a*) |
| object-have | reweight | *dia* → him / her; *-nya* → his / her / its (Gayo & Widodo's *it/its* errors); *punya* / *ada* (colloquial *Saya ada mobil*) → *I have a car* |
| can-like | keep | *bisa* = can, *mau* = want to, *pengin* ≈ I'd like |
| polite | reweight | *Tolong* + verb ≠ polite enough on its own: use *Could you…?* / *Could I have…?*. Address: *Pak* / *Bu* + first name has no English equivalent. Use *Mr. / Ms.* + family name, or first name alone; *Sir* / *Ma'am* only in service |
| continuous | reweight | *sedang* = be + -ing, but Indonesian often omits *sedang*, while English cannot omit be + -ing for "right now". No -ing on state verbs (`I'm knowing ✗`) |
| past | reweight | Key lesson: the verb must change even with *kemarin*. V1 → V2; *did* + V1 in questions and negatives; -ed said t / d / id (§6 rule 7) |
| irregular-past | keep | V1/V2/V3 lists are the school habit; use them |
| the | keep | *-nya* / *itu* ≈ *the* sometimes; teach first vs second mention on English terms |
| adjectives | reweight | Adjective before the noun (*rumah besar* → *a big house*; `body large ✗`, Gayo & Widodo). *lebih* / *paling* → -er / more, -est / most; never `more bigger` |
| going-to | keep | *akan* covers both *will* and *going to*; keep ko's contrast |
| tense | reweight | Recap of present, continuous and going-to with **no time words** in the Indonesian prompt in the lesson-body rows, previewing `time-markers` |
| joining | keep | Add a note: do not pair *because* … *so* (Indonesian *karena* … *maka*) or *although* … *but* (*meskipun* … *tetapi*) |
| numbers | reweight | *ribu / juta / miliar* = thousand / million / billion; Indonesian 13.000 and 3,5 → English 13,000 and 3.5; rupiah prices; *pukul 21.05* → *9:05 p.m.* (§9) |
| smalltalk | reweight | *Sudah makan?* and *Mau ke mana?* are greetings in Indonesian but real questions in English. Avoid religion, salary, age and *Sudah menikah?* openers. Deck localised (§9) |
| **indo-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | keep | *akan* → *will* for decisions and promises |
| perfect | reweight | *pernah* → *have you ever / I've been*; *sudah* is **not** always *have done*: *Saya sudah makan kemarin* → *I ate yesterday* (finished time = V2) |
| **time-markers** | **add** (after `perfect`, A2) | See below |
| modals | reweight | *harus* = must / have to; *sebaiknya* = should; *mungkin* = might (and maybe); *boleh* = may / can; *tidak harus* = don't have to, not `mustn't` |
| to-ing | keep | |
| articles-2 | reweight | Generic plurals: *Kucing lucu* → *Cats are cute*, not `The cat is cute` or `Cat is cute` |
| first-conditional | keep | *kalau / jika* + present; no *will* after *if* |
| relative | reweight | *yang* sits after the noun like *who / which / that*, so this is easier than for ko/ja learners. Focus on choosing *who* vs *which* and on not adding a pronoun (`the man who he lives …`) |
| phrasal | keep | |
| perfect-2 | reweight | `I am living in Jakarta for 20 years ✗ → I have lived …` (adapted from Gayo & Widodo). *sejak* = since, *selama* = for |
| narrative | keep | |
| conditionals | keep | *seandainya / andai* → second and third conditional |
| passive | reweight | *di-* passive is everyday Indonesian; English needs *be* + V3 with tense: `The house built in 1990 ✗ → was built`. Prefer active voice in casual English |
| reported | keep | *kalimat langsung / tidak langsung* are school terms |
| email | reweight | Replace Indonesian formal-letter formulas: *Dengan hormat* → *Dear Ms. Wijaya,* / *Hi Sari,*; *Terima kasih atas perhatiannya* → *Thanks for your time*; *Hormat saya* → *Best regards*. Many Indonesians have one name: use it with no *Mr./Ms.* when unsure |
| idioms | keep | |

**Additions:**
- **`indo-english`** («Inggris ala Indonesia: kata yang menjebak»), after `smalltalk`, deck «Jebakan Inggris ala Indonesia» (§9).
  - *Content:* -ed vs -ing feelings (*bored / boring*, *interested / interesting*); *refreshing* → *take a break, unwind*; *buka puasa* → *break the fast*; *borrow* vs *lend* (both *pinjam*); *handphone / HP* → *phone*; *Good night* is for leaving or bedtime, not an evening greeting; answering negative questions (*Ya, dia tidak datang* → *No, he didn't*); shifted loanwords (*map*, *resep*, *titel*, *kompleks*, *ekonomis*).
  - *Practice that meets §7:* `I borrowed two books from Sari`, `I need a prescription`, `This is a folder`, `We're bored`.
  - *Reason:* §4.11. It is the one Indonesian-specific lexical zone with fetched (practitioner) sources and no ko-en equivalent, parallel to ja `katakana-english` and es `false-friends`.
- **`time-markers`** («*sudah, sedang, akan, pernah, belum*: waktu ada di kata kerja»), after `perfect`, so every form it maps onto has been taught. Deck «Obrolan ringan».
  - *Content:* a table mapping each marker to its English form. *sedang* → be + -ing; *akan* → will / going to; *sudah* → V2 (finished time) or *have* + V3 (*already*, now relevant); *pernah* → *have ever* + V3; *belum* → *haven't* … *yet* / *not yet*; *tadi* → V2; *nanti* → will.
  - Plus the two rules Indonesian lacks: (1) **a time word does not replace the verb form** (*Kemarin saya pergi* → *Yesterday I went*); (2) **with no time word, English still has to pick a tense**, so read the context.
  - *Practice that meets §7:* `I've already bought the tickets`, `She's baking a cake`, `I haven't read the books yet`, `Have you ever eaten durian?`.
  - *Reason:* §4.5. Tense errors are documented in writing and speech; ko-en has no lesson that starts from aspect markers; ja and es do not need one.

**Not added (considered):** a `he-she` lesson for *dia*. Its evidence is practitioner-only (§4.7), and `be` and `object-have` can carry it as reweights.

**Totals:** 39 existing lessons (23 A1 + 9 A2 + 7 B1): **15 keep, 24 reweight**, 0 dropped. Plus 2 additions, which are the only lesson-level parity exceptions; A1 grows to 24 and A2 to 10. All verdicts are [practitioner opinion] grounded in §4.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies, PAUSE sets):**

| ko-en | id-en |
|---|---|
| Minji (and other Korean names) | **Budi, Sari, Andi, Dewi** (alternates Rina, Agus, Putri, Rizky). English-speaking characters keep English names |
| Seoul | **Jakarta** |
| Busan | **Surabaya** or **Bandung** (also Yogyakarta, Medan, Makassar) |
| Jeju / beach trips | **Bali** (Denpasar, Kuta), Lombok |
| Seoul National University | a university in Jakarta or Bandung, generic («I'm a student in Bandung»); no real university name needed |
| kimchi, bibimbap | **nasi goreng, rendang, sate, bakso, gado-gado**; drinks *teh manis*, *kopi*, *es teh* |
| soju, beer in examples | non-alcoholic drinks by default (*iced tea, coffee, juice*): a mostly Muslim audience, and nothing in the course needs alcohol |
| K-pop, K-drama | genres, not artists: *a song*, *a series*, *dangdut*, *a football match* |
| Gangnam | Sudirman / Kemang (Jakarta), Braga (Bandung) |
| Chuseok, Korean holidays | **Lebaran (Idulfitri)**, *mudik* (going home for Lebaran), Ramadan, Christmas, Nyepi, New Year |
| 존댓말 / 반말 | *Anda / kamu / Bapak-Ibu* comparisons (polite lesson only) |
| won (₩) | **rupiah (Rp)** — see numbers below |
| Korea / Korean (the learner's own country and language, e.g. *I'm from Korea*, *Do you speak Korean?*, *Your Korean is really good!*) | **Indonesia / Indonesian** |

**Deck localisation vs parity:** `parity.js` compares English deck targets per position, so any card whose English changes (*My name is Minji.* → *My name is Budi.*, *I live in Seoul.* → *I live in Jakarta.*, *Korea* → *Indonesia*) needs a `decks` entry in `deviations.json`. Use one entry per deck, naming the cards and the reason «localisation per profile id.md §9», exactly as `tools/content/ja/deviations.json` does. Appended id-only cards go in the same entry. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely.

**Rupiah and big numbers** (numbers lesson, shopping deck):
- Prices are large: Rp25.000 = *twenty-five thousand rupiah*; Rp1.500.000 = *one and a half million rupiah* / *one million five hundred thousand rupiah*. *juta* = million, *miliar* = **billion**, *triliun* = trillion.
- Indonesian writes thousands with a point and decimals with a comma (13.000 pulau, 12,5 m; [PUEBI](https://badanbahasa.kemdikbud.go.id/resource/doc/files/permendikbud_nomor_50_tahun_2015.pdf)). English is the reverse: **13,000** and **12.5**. Teach this explicitly; it is an everyday trap.
- English strings never use Indonesian separators.
- Time: Indonesian *pukul 21.05* → English *9:05 p.m.* / *nine-oh-five*.

**Checks and practice:**
- Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul*, *Busan*, *kimchi*, *K-pop*). **Leave the English unchanged** (parity) and translate the Indonesian side literally (*Seoul*, *Busan*, *kimchi*); it reads as a learner talking about Korea.
- Do not file per-item deviations to localise them. If the lead wants them localised later, use one bulk deviation with reason "localisation" (same rule as ja.md §9).

**Meanings that equal the English (Latin-script validator, `nativeScript: null`):** a card meaning, `{{ex}}` meaning, gloss or `p` identical to its English counterpart fails (case- and punctuation-insensitive).
- Indonesian has many unchanged loanwords. Write a fuller gloss: «naik bus», «hotel (penginapan)», «menu (daftar makanan)», «film (di bioskop)», «radio (siaran)», «video (rekaman)», «internet (jaringan)», «email (surel)», «data (keterangan)», «golf (olahraga)», «pizza (piza)», «laptop (komputer jinjing)», «mal (pusat belanja)», «OK → oke».
- Use **KBBI spellings**, which often differ anyway: *piza, kopi, taksi, televisi, komputer, kamera, es krim, gim* (game). Do not gloss *salad* as *selada* (= lettuce).
- Interjections and names: *Hi! → Hai!*, *Bye! → Dah!*. A proper noun alone (*Jakarta*) needs a gloss («Jakarta (ibu kota)»), or avoid it as a card.

**False friends and loanword traps** (for the `indo-english` lesson and deck, at least 20 cards; `note` says «arti berbeda» or «Inggris ala Indonesia»):

| Indonesian use | Correct English | Source |
|---|---|---|
| *I'm boring* (= bosan) | I'm bored | BC Foundation [practitioner opinion] |
| *refreshing* (= jalan-jalan, rehat) | take a break / unwind / get away | BC Foundation |
| *breakfasting* (= buka puasa) | break the fast / iftar | BC Foundation |
| *…or whatsoever* | …or whatever | BC Foundation |
| *map* (= map dokumen) | folder | Bire & Hambandima 2023 [practitioner opinion] |
| *resep (dokter)* | prescription (*recipe* is for cooking) | Bire & Hambandima |
| *titel* (= gelar) | degree / title only for Dr., Prof. | Bire & Hambandima |
| *kompleks* (= perumahan) | housing estate / housing complex | Bire & Hambandima |
| *ekonomis* (= hemat) | economical (*economic* = about the economy) | Bire & Hambandima |
| *hand body* | (body) lotion | Bire & Hambandima |
| *Good night* (= selamat malam, greeting) | Good evening (*Good night* = goodbye or bedtime) | Bire & Hambandima |
| *mobil* vs *mobile* | car / mobile (phone) | Bire & Hambandima |
| *Ya* to agree with a negative question | *No, he didn't.* | Bire & Hambandima |
| *handphone / HP* | phone / cell phone | [practitioner opinion] |
| *pinjam* | borrow (take) / lend (give) | [practitioner opinion] |
| *ons* (= 100 g) / *pon* (= 500 g) | 100 grams / half a kilo (*ounce* ≈ 28 g, *pound* ≈ 454 g) | Bire & Hambandima |

**Deck names** (proposal; the content agent fixes them in a DECKNAMES.md as ja did). Separator: «&» with spaces. Sentence case, as Indonesian UIs write:

| # | ko | id |
|---|---|---|
| 1 | 인사 | Salam |
| 2 | 자기소개 | Perkenalan diri |
| 3 | 생존 영어 1 | Ungkapan penting 1 |
| 4 | 생존 영어 2 | Ungkapan penting 2 |
| 5 | 길 묻기·교통 | Arah & transportasi |
| 6 | 식당 주문 | Pesan di restoran |
| 7 | 카페·편의점 | Kafe & minimarket |
| 8 | 쇼핑·계산 | Belanja & bayar |
| 9 | 숫자·시간·날짜 | Angka, jam & tanggal |
| 10 | 스몰토크 | Obrolan ringan |
| 11 | 감정·반응 | Perasaan & reaksi |
| 12 | 칭찬·호감 표현 | Pujian & rasa suka |
| 13 | 직장·이메일 | Kerja & email |
| 14 | 전화·문자 줄임말 | Telepon & singkatan chat |
| 15 | 여행(공항·호텔) | Perjalanan (bandara & hotel) |
| 16 | 병원·긴급 | Rumah sakit & darurat |
| 17 | 구동사 | Phrasal verb |
| 18 | 발음 주의 | Awas pelafalan |
| 19 | 영어 관용구 | Idiom bahasa Inggris |
| 20 | 영화·드라마·슬랭 | Film, serial & slang |
| 21 (new, id-only) | — | Jebakan Inggris ala Indonesia |

**Deck content changes** [practitioner opinion unless noted]:
- **Add deck 21** «Jebakan Inggris ala Indonesia» (table above, appended last; it needs a `decks` entry in deviations.json, as ja's 21st deck did).
- **Awas pelafalan:** keep the shared pairs and add, in lesson bodies and new cards of deck 21 or the pron lesson only (not by changing shared deck targets): *think/tink*, *three/tree*, *very/fairy*, *van/fan*, *ship/sip*, *bag/back*, *bad/bed*, *sheep/ship*, *dogs/docks*, *walk/work*.
- **Kerja & email:** campus and office English that Indonesian learners need for TOEFL and jobs: *thesis, lecturer, deadline, meeting, schedule, internship*. Note *lecturer* (not *dosen* → `doctor`) and *thesis* (*skripsi*).
- **Perjalanan:** departures from Soekarno-Hatta (CGK) and Ngurah Rai (DPS); *visa on arrival*; tipping (not expected in Indonesia, expected in the US).
- **Obrolan ringan:** weather is a weak topic in the tropics. Use the weekend, food, work, *mudik*, traffic (*macet* → *traffic jam*).
- **Telepon & singkatan chat:** keep the English (*lol, btw*) and explain with Indonesian chat equivalents (*wkwk*, *btw* is used as is, *otw* is the same).
- **Optional extra deck (later):** «TOEFL: kata akademik» (Academic Word List items that are not loanwords). Not required for launch.

## 10. Interface wording notes

[Curriculum convention / practitioner opinion. The Microsoft Indonesian style guide could not be read (§11), so these rules are not verified against a style guide.]

**Register:** *kamu*, lower-case, friendly-neutral (§2). The app does not refer to itself as *aku* or *kami* in buttons. Toasts are impersonal or address *kamu*:
- «Tersimpan»
- «Mantap! Semua kartu hari ini sudah selesai.»
- «Kamu sudah belajar 5 hari beruntun.»

**Buttons, menu items and tabs:** base-form imperative verbs or short nouns, no *-lah*, no *silakan* on buttons:
- «Mulai», «Lanjut», «Periksa», «Simpan», «Kirim», «Batal», «Kembali», «Coba lagi», «Ulang», «Tutup».
- *Silakan* is allowed in longer instructions only.

**Instructions in practice prompts:** imperative to *kamu*: «Pilih jawaban yang tepat», «Susun kata-kata ini», «Isi bagian yang kosong», «Tulis kalimatnya dalam bahasa Inggris». Keep the same verb per item type (glossary below).

**Plurals and counters:**
- CLDR plural category for `id` is **other** only (checked locally with `Intl.PluralRules('id')`).
- Indonesian **never pluralises after a number**: «5 kartu», not «5 kartu-kartu». So 1 and 2 use the same form; still supply both to satisfy the plural-sensitive check.

| English pattern | Indonesian |
|---|---|
| `N cards due` | «N kartu perlu diulang» |
| `N cards` | «N kartu» |
| `N lessons` | «N pelajaran» |
| `N days` | «N hari» |
| `N-day streak` | «N hari beruntun» |
| `N words` | «N kata» |
| `N questions` / items | «N soal» |
| `N XP` | «N XP» |
| `Level N` | «Level N» |
| `N%` correct | «N% benar» |
| `N min` | «N menit» |

**UI glossary** (use exactly; matches §3):

| English | Indonesian | Note |
|---|---|---|
| lesson | pelajaran | «Pelajaran 5» |
| practice (set) | latihan | |
| review (SRS) | ulang / pengulangan | **Never *ulangan*** (school test) or *ulasan* (product review) |
| deck | dek | «dek kartu» on first use |
| card / flashcard | kartu | |
| streak | beruntun | «5 hari beruntun»; noun «rangkaian harian» in settings |
| hint | petunjuk | |
| check (3-question quiz) | kuis singkat | Button «Periksa» |
| correct / incorrect | benar / salah | Feedback «Benar!» / «Belum tepat» (softer than «Salah») |
| answer / explanation | jawaban / penjelasan | `why` is shown under «Penjelasan» |
| try again | coba lagi | |
| multiple choice | pilihan ganda | Exam term |
| word tiles (order) | susun kata | |
| gap-fill | isi bagian yang kosong | Short label «Isian» |
| typed sentence | tulis kalimat | |
| drills | drill | |
| level / XP | level / XP | |
| pronunciation aid toggle | Tampilkan cara baca | Replaces "romanization" |
| progress | kemajuan | |
| feedback (to developers) | masukan | Tab «Masukan», page «Kirim masukan» |
| settings / sign in / sync | pengaturan / masuk / sinkronkan | |

**Numbers, dates and time** (`Intl` with `id-ID`, checked locally):
- Numbers: «1.234.567,5».
- Currency: `Intl` gives «Rp 25.000» (with a no-break space), while PUEBI writes «Rp25.000». Either is acceptable in UI; do not hand-format.
- Percent: «85%».
- Dates: long «16 November 2026», short «16/11/26». Weekdays capitalised («Senin»).
- Time: 24-hour with a point, «21.05».

**Bottom nav at 390px.** About 50–55px per tab at 10–11px type, about 8 Latin characters, the same cap as es.md §10.

| English | Indonesian | Chars |
|---|---|---|
| Today | Hari ini | 8 |
| Practice | Latihan | 7 |
| Review | Ulang | 5 |
| Lessons | Pelajaran | 9 (exception, like es «Lecciones»; fallback «Materi», 6) |
| Read | Baca | 4 |
| Progress | Kemajuan | 8 |
| Feedback | Masukan | 7 |

- The harness's zero-overflow check must pass with «Pelajaran». If it fails, use «Materi» on the tab only and keep «pelajaran» everywhere else.
- The i18n validator warns at > 1.6 × English and > 14 characters; check «Kirim masukan» and «Tampilkan cara baca» (19) on buttons. The toggle is a settings row, not a button.

**Language names:** `Intl.DisplayNames('id')` returns «Indonesia» and «Inggris». In prose use «bahasa Indonesia» and «bahasa Inggris» (lower-case *bahasa* mid-sentence, per general usage), and set `name.id` to «bahasa Inggris».

## 11. Gaps and unverified claims

- **Blocked or unusable sources** (not in Sources):
  - Microsoft Indonesian localisation style guide: binary PDF. So §2's *kamu* choice and §10's button, counter and date rules rest on Djenar, one edtech page and convention.
  - Wikisource pages for EYD 2022 and PUEBI 2015: not found; the Badan Bahasa PDF of PUEBI was used instead. EYD V (2022) was seen only through a Tirto summary, which mentions ê but not é/è.
  - Ruangguru blog: bot script only. A Tribun Jogja explainer had no grammar terms. The Gojek UX-writing post did not discuss address forms.
- **Small or abstract-only studies:**
  - Gayo & Widodo 2018: one school, 77 students, descriptive texts; surface-taxonomy figures do not reconcile. Their ranking may not hold for adults or for speech.
  - Yuntika et al. 2025: 10 theses, 21 errors, inconsistent counts.
  - Asni & Susanti 2018 and Fitriani & Zulkarnain 2019: abstracts only.
  - Lionny & Kusumadewi 2022: 20 students.
  - Pronunciation: Mada 2025 (n = 5), Harunika et al. 2020 (n = 10, no counts), Jariyah 2020 (undergraduate thesis, n = 37, some inconsistent transcriptions). Arsanto et al. 2019, Akis & Jamilah 2025, Pade & Purnawan 2026, Firdaus & Milal 2021 and the Aceh thesis were read as abstracts or abstract pages only. Many participants speak a regional first language.
- **Disagreement:** the two recount-text studies attribute past-tense errors to opposite causes (L1 interference vs English complexity).
- **No fetched source for:** he/she confusion from *dia* (§4.7), possessive/demonstrative order, questions by intonation, countability, passive over-use, borrow/lend, *handphone*, the Sundanese f→p habit, released final k, and R/L being easy. All are tagged [practitioner opinion].
- **No Indonesian accuracy-by-level data** for articles, plurals or third-person -s; Murakami & Alexopoulou's corpus has no Indonesian group. The claim that these persist to advanced level is extrapolated from Japanese and Korean data and from thesis-level errors.
- **Pronunciation aid:**
  - No study compares respelling, IPA and no aid for Indonesian learners.
  - PABI (Karlina et al.) was never tested with learners.
  - The é/è mapping of /ɛ/–/æ/, th/dh, zy and the flap-d convention are this profile's design.
  - Javanese romanisation uses *th* and *dh* for retroflex stops, so Javanese readers may read them as t/d. The `pron` lesson must explain th/dh with the tongue between the teeth, and audio carries the rest.
  - Not tested: whether Indonesian readers really say plain *e* as schwa in unfamiliar strings.
- **Learner profile:**
  - EF EPI is a self-selected online test; the overall score (468) comes via a secondary table because the fetched sheet's figure was garbled. A 2026 fact sheet exists and was not fetched.
  - Years of compulsory English, the status of English in primary school, and the post-2021 school exam system were not verified from regulations.
  - LPDP thresholds are from an IDP blog, not LPDP's own guide.
- **Interface:** *beruntun* for streak, *dek* for deck and *Ulang* for review are proposals, not checked against major Indonesian apps. The 390px nav widths come from es.md and ja.md measurements, not a fresh render.
- **Partial reads:** only the first half of the Grade 7 textbook and of Jariyah's thesis was read (fetch limit). "English labels, audio only, no IPA or respelling" may not hold for the rest of the book.
- **Exam formats:** that TOEFL ITP's Structure and Written Expression "find the error" format shapes learners' expectations is general knowledge; no TOEFL or ETS page was fetched.
- **cueTest coverage:** tested against 2,469 English strings (0 hits) and about 30 sample Indonesian prompts. Writers' real prompts may still miss the list; the validator will flag them.
- **Not researched:** Indonesian learners' errors in speech beyond pronunciation, any app or self-study study with Indonesian adults, regional (Javanese, Sundanese, Batak, Minang) differences in grammar transfer, and Malaysian/Bruneian Malay speakers (who could use this course with minor wording differences).

## Sources

- [Gayo & Widodo 2018, An analysis of morphological and syntactical errors on the English writing of junior high school Indonesian students (IJLTER)](https://ijlter.org/index.php/ijlter/article/download/1089/pdf)
- [Yuntika, Anggreni, Jamiluddin & Usman 2025, Writing errors analysis: subject-verb agreement made by EFL students (JELE)](https://jele.or.id/index.php/jele/article/download/1538/824)
- [Lionny & Kusumadewi 2022, An error analysis on the use of simple past tense in students' recount text writing (JEdu)](https://jim.unindra.ac.id/index.php/jedu/article/download/6428/pdf)
- [Asni & Susanti 2018, An analysis of grammatical errors in writing recount text (IJLTE, abstract)](https://doaj.org/article/83a8735095484d11bbb751144f2b9cda)
- [Fitriani & Zulkarnain 2019, Vocational college students' common errors in EFL speaking performance (SiELE, abstract)](https://doaj.org/article/84494ccd72254ba4b075be0e205ebe43)
- [Harunika, Sakhiyya & Hartono 2020, Interlanguage errors based on the source of errors in Indonesian college students' pronunciation (Language Circle)](https://journal.unnes.ac.id/nju/LC/article/download/25887/10837)
- [Mada 2025, Mispronunciation of English fricative consonant sounds by East Nusa Tenggara students (Ebony)](https://e-journal.upr.ac.id/index.php/ebony/article/download/17632/6832)
- [Jariyah 2020, The English pronunciation problems of EFL students' speaking (UIN Walisongo thesis)](https://core.ac.uk/download/479411463.pdf)
- [Akis & Jamilah 2025, EFL consonant pronunciation: a PRAAT & CALD-based study of Indonesian learners (Lingua Didaktika, abstract page)](https://ejournal.unp.ac.id/index.php/linguadidaktika/article/view/133711)
- [Pade & Purnawan 2026, Voicing contrast difficulties in Indonesian EFL pronunciation (IDEAS, abstract page)](https://ejournal.iainpalopo.ac.id/index.php/ideas/article/view/10524)
- [Arsanto, Prawinanto & Bram 2019, Interdental consonant sound errors (Vision, abstract)](https://doaj.org/article/720685066d3b4ba3a77d022638d25b92)
- [Firdaus & Milal 2021, Segmental and suprasegmental mispronunciations made by EFL learners in Indonesia (Vivid, abstract)](https://doaj.org/article/7db1173c6f2d4e92a14b7ec7dff9b27d)
- [Errors in pronunciation of consonants by Indonesian, Gayo and Acehnese learners of English (thesis abstract, CORE)](https://core.ac.uk/works/24246925)
- [Karlina, Rahman & Chowdhury 2020, Designing Phonetic Alphabet for Bahasa Indonesia (PABI) (IJAL)](https://ejournal.upi.edu/index.php/IJAL/article/download/23223/11501)
- [Chuzaimah, Fadli & Tamrin, Investigating the role of IPA to enhance high-school students' pronunciation skill (abstract)](https://jurnal.fs.umi.ac.id/index.php/tamaddun-life/article/view/95)
- [EF EPI 2025 fact sheet, Indonesia](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-indonesia-english.pdf)
- [Kemendikbudristek 2022, English for Nusantara, SMP/MTs Kelas VII](https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Bahasa-Inggris-BS-KLS-VII.pdf)
- [Prep Edu, Simple Present Tense: rumus, fungsi, dan contoh kalimat](https://prepedu.com/id/blog/english-simple-present-tense)
- [Pusba UMA, Simple Present Tense](https://pusba.uma.ac.id/2022/11/simple-present-tense/)
- [Permendikbud 50/2015, Pedoman Umum Ejaan Bahasa Indonesia (PUEBI), Badan Bahasa](https://badanbahasa.kemdikbud.go.id/resource/doc/files/permendikbud_nomor_50_tahun_2015.pdf)
- [Tirto, Jumlah huruf konsonan & vokal dalam EYD V](https://tirto.id/jumlah-huruf-konsonan-vokal-dalam-eyd-v-serta-penggunaannya-gvsM)
- [Djenar 2021, Learning how to say 'you' in Indonesian (Melbourne Asia Review)](https://melbourneasiareview.edu.au/?p=10078)
- [Bire & Hambandima 2023, Words confuse Indonesian learners (false cognates) (LedTure)](https://ledture.ukaw.ac.id/index.php/ledture/article/download/6/5/98)
- [British Council Foundation Indonesia, Four common mistakes](https://www.britishcouncilfoundation.id/en/english/articles/four-common-mistakes)
- [IDP Indonesia, Minimum TOEFL, PTE and IELTS requirements for LPDP](https://idp.com/indonesia/blog/minimum-toefl-pte-ielts-requirement-lpdp-scholarship/?lang=en)
- [UPI FPMIPA, New PTESOL and TOEFL requirements for final examinations](https://fpmipa.upi.edu/news/upi-terapkan-ketentuan-baru-untuk-persyaratan-ptesol-dan-toefl-sidang-akhir)
- Local: `/home/claude/docs/profiles/OTHERS.md` (Indonesian starting notes, secondary EF EPI overall score, `using it beak` example), Murakami & Alexopoulou 2016 as cited in ja.md and the grammar report (not re-opened), `/home/claude/docs/profiles/ja.md`, `/home/claude/docs/profiles/es.md`, `/home/claude/reports/Grammar learning order research.md`, `/home/claude/docs/PILOT-SPEC.md`, `/home/claude/docs/PIPELINE.md`, `/home/claude/docs/PRACTICE-SPEC.md`, `/home/claude/tools/content/lib.js`, `/home/claude/tools/content/validate.js` (standing-rule and pron checks), `/home/claude/tools/content/ko/` (lesson ids, decks, single-word targets), `/home/claude/packs/course-ko-en.js` (cueTest run against 2,469 English strings: 0 hits). `Intl` checks in local Node for `id` plural rules and `id-ID` formats.


> Update after review (2.13.0): the Progress tab and every interface mention use **Progres**, not *Kemajuan* (the longer word did not fit the tab bar at 390px).
