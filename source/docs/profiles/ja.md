# Japanese speakers learning English — course profile

Course `ja-en`. Audience: Japanese-speaking adults. All explanations, prompts, `why`, `hint`, deck names and interface in Japanese. Evidence labels follow `reports/Grammar learning order research.md`: **[research-backed]** = a study or corpus, named; **[curriculum convention]** = what Japanese textbooks, publishers or syllabuses do; **[practitioner opinion]** = a teacher's or author's position, or this profile's inference. A study read only as an abstract, or cited second-hand, is marked as such.

## 1. Summary (10 lines max)

- Teach **American English** (`en-US` TTS, same English strings as `ko-en`). Explanations are in **です・ます体**, avoid あなた, and use school grammar terms such as 三単現, be動詞 and 現在完了.
- **Articles are the number one error zone**: lowest accuracy at every level in a 7-L1 exam corpus, and 37% of all spoken errors in a Japanese picture-description corpus. Plural -s is a real but weaker second. Third-person -s errors cluster at low-intermediate level in speech.
- Japanese adults are **false beginners**: at least six years of school English (junior and senior high), reading ahead of speaking (EF EPI 2025: reading 454 and listening 437 against speaking 393 and writing 394). Keep the A1 start, move fast, and weight typed production and audio.
- **Pronunciation aid: katakana, required on every card and example row, written with fixed rules** (ゥ before initial R, ヴ for V, スィ for /si/, ス/ズ for TH, linking written as heard, plus a trailing tag such as `(th)` on minimal-pair cards). The UI toggle "読み方を表示" lets learners hide it. Stress is not marked in the aid.
- **Standing rule: same as Korean (`kind: "article-plural"`).** Half of each set's tile and typed items hinge on articles or plural -s, and each such `why` names it with `冠詞|複数`. The shared English items already satisfy it, so it needs no deviations.
- **Curriculum**: all 39 lessons kept with ids and order unchanged. 13 get a Japanese-specific emphasis in the explanation only (no English changes). Add 2 lessons: `katakana-english` (end of A1) and `articles-3` (B1). Drop none.
- Localise names, places and food in decks, dialogues, examples and lesson bodies. Korean proper nouns inside checks and practice stay as they are unless a deviation is filed (see §9).
- The research base is thin outside articles, morphemes, r/l and vowel epenthesis. Subject omission, passive misuse, prepositions and most pronunciation items rest on practitioner opinion (§11).

## 2. Variant, register and voice

**Variant: American English.** Reasons:
1. Japanese school textbooks are dominated by North American English [curriculum convention; [Junn](https://repository.musashi.ac.jp/dspace/bitstream/11149/2606/1/musashi_journal02_02_017_026_junn.pdf), a literature review]. The spelling (color, center), vocabulary (elevator, apartment, check) and katakana loanwords learners already know match it.
2. `ko-en` uses `ttsLang: "en-US"` and PILOT-SPEC §1.6 freezes the shared English strings.
3. TOEIC, the dominant adult test in Japan, is US-made.

Mention British forms only as a note (e.g. flat / lift in the travel deck note field), never as an answer variant.

**Register for explanations: です・ます体 (丁寧語), friendly, never 尊敬語/謙譲語 aimed at the learner.** Rules:
- Sentences end in 〜です / 〜ます / 〜ましょう / 〜てみましょう. No である体, no タメ口, no 〜してください chains. Use 〜しましょう for instructions.
- Do not use あなた. Japanese omits the second person. Write 「〜と言いたいときは」, not 「あなたが〜と言いたいときは」. Address a group as 「皆さん」 only on certificates or onboarding, if at all.
- Use school grammar terms (§3) the first time with a plain gloss, e.g. 「三単現の s（主語が he / she / it のときに動詞につく s）」.
- Mark errors with ✕ and corrections with ○ (the Japanese convention, not X / O): `I'm teacher. ✕ → I'm a teacher. ○`.

Three sample sentences in the voice:
- 「日本語には冠詞がないので、a と the はいちばん間違えやすいところです。でも、ルールは三つだけ覚えれば大丈夫です。」
- 「『結婚しています』は I'm married. です。I'm marrying. と言うと『今まさに結婚式の最中』に聞こえてしまいます。」
- 「主語が he / she / it のときは、動詞に s をつけましょう。学校で習った『三単現の s』です。」

**Mixing English into Japanese text:**
- Japanese punctuation is full-width: 。、「」『』（）！？. English words, numbers and English-internal punctuation are half-width: `I'm a student.` / `3回` / `TOEIC 600`.
- **Spacing rule (one rule, applied everywhere):**
  - **Digits, and English that forms part of a Japanese word, take no space:** `be動詞`, `ing形`, `3つ`, `5日連続`, `TOEICの点数`, `レベル5`. W3C advises against typed spaces in CJK text and leaves any visual gap to CSS (`text-autospace: normal`), which the engine agent owns [[W3C i18n](https://w3c.github.io/i18n-drafts/articles/styling/inline-space.en): "Do not use space characters!"; JLREQ suggests a ¼em gap].
  - **A bare English example (a word, a form or a sentence the learner is studying) gets a half-width space on both sides when it sits inside Japanese:** `三単現の s`, `冠詞 a をつけます`, `a と the`, `in / on / at`, `I'm married. と言います`. Otherwise examples such as `aとthe` or `sをつけ` are hard to read. Learners see these examples in every explanation, so readability wins over the CSS-only advice.
  - **Punctuation:** no space next to full-width punctuation: `…に the をつけます。` (space before を, none before 。).
- Quote Japanese phrases with 「」 and quotes-within-quotes with 『』. Leave English bare (no quotes) in lesson bodies, and bold it with `<b>`. In plain-text fields (`q`, `p`, `why`), English stands bare too: `「毎日ご飯を食べます」=` / `I eat rice every day. の意味は？`.
- Separate alternatives with ` / ` (half-width, spaced) as in ko-en.
- Use katakana with a long-vowel mark for loanwords in explanations: ユーザー, コンピューター, メッセージ [curriculum convention; the Microsoft style guide that would confirm this was unreadable, see §11].

## 3. Glossary

Use these terms everywhere: lesson bodies, `why`, `hint`, deck names and UI. "School" means learners met the term in junior or senior high school English [curriculum convention; based on common textbook usage, not verified against a fetched Course of Study list, see §11].

| English term | Japanese term (use this) | Note |
|---|---|---|
| article | 冠詞 | School. Standing-rule keyword |
| indefinite article (a / an) | 不定冠詞 | School; in explanations prefer "a / an" |
| definite article (the) | 定冠詞 | School; prefer "the" |
| zero article / no article | 無冠詞（冠詞なし） | Use 冠詞なし in practice `why` |
| noun | 名詞 | School |
| countable noun | 数えられる名詞 | School says 可算名詞 too. Gloss it once: 数えられる名詞（可算名詞） |
| uncountable noun | 数えられない名詞 | 不可算名詞 once as gloss |
| singular | 単数（単数形） | School |
| plural / plural -s | 複数形 / 複数の s | School. Standing-rule keyword 複数 |
| pronoun | 代名詞 | School |
| subject | 主語 | School |
| object | 目的語 | School |
| complement | 補語 | School (SVC); use sparingly |
| object pronoun (me/him/her) | 目的格（の代名詞） | School: 主格・所有格・目的格 |
| possessive (my/your, 's) | 所有格 | School |
| verb | 動詞 | School |
| be verb | be動詞 | School; identical to ko-en's be동사 |
| ordinary verb (non-be) | 一般動詞 | School |
| auxiliary / modal verb | 助動詞 | School (can, will, must, should, might) |
| third-person singular -s | 三単現の s（三人称単数現在の s） | School; learners know the name |
| base form | 原形 | School |
| past form | 過去形 | School |
| past participle | 過去分詞 | School |
| -ing form | ing形 | School |
| regular / irregular verb | 規則動詞 / 不規則動詞 | School |
| tense | 時制 | School |
| present simple | 現在形 | School |
| present continuous | 現在進行形 | School |
| past simple | 過去形 | School |
| past continuous | 過去進行形 | School |
| future (will / going to) | 未来の表現（will / be going to） | School |
| present perfect | 現在完了形 | School; usages 経験・完了・継続 known |
| present perfect continuous | 現在完了進行形 | School |
| past perfect | 過去完了形 | School |
| passive | 受け身（受動態） | School uses both; use 受け身 in `why` |
| active | 能動態 | School |
| conditional (if-sentence) | 条件文（if の文） | Umbrella term |
| first conditional | 条件を表す if | Lesson title: 「もし〜なら（現実の条件）」 |
| second conditional | 仮定法過去 | School term; gloss 「今の事実と違う仮定」 |
| third conditional | 仮定法過去完了 | School term; gloss 「過去の事実と違う仮定」 |
| relative clause | 関係代名詞の節（関係詞節） | School teaches it under 関係代名詞 |
| relative pronoun | 関係代名詞 | School (who, which, that) |
| infinitive (to + verb) | 不定詞（to + 動詞の原形） | School |
| gerund | 動名詞 | School |
| preposition | 前置詞 | School |
| conjunction | 接続詞 | School |
| adjective / adverb | 形容詞 / 副詞 | School |
| comparative / superlative | 比較級 / 最上級 | School |
| question word (wh-) | 疑問詞 | School |
| negative sentence / question | 否定文 / 疑問文 | School |
| word order | 語順 | School |
| reported speech | 間接話法（話法） | School (直接話法・間接話法) |
| phrasal verb | 句動詞 | Also 群動詞 in older books; use 句動詞 |
| idiom | イディオム（慣用表現） | |
| pronunciation | 発音 | |
| word stress | アクセント（強勢） | School calls word stress アクセント. Gloss 強く読む位置 |
| sentence rhythm | リズム | |
| linking / connected speech | 音のつながり（リンキング） | |
| vowel / consonant | 母音 / 子音 | School |
| katakana English / pseudo-English | カタカナ英語 / 和製英語 | |
| lesson | レッスン | UI |
| practice (set) | 練習 | UI |
| review (SRS) | 復習 | UI |
| deck | デッキ | UI; keep consistent with flashcard apps |
| card | カード | UI |
| streak | 連続学習（N日連続） | UI: 「5日連続」 |
| hint | ヒント | UI |
| check (3-question lesson check) | 確認問題 | UI |
| correct / incorrect | 正解 / 不正解 | UI; ○ / ✕ marks allowed |
| answer / explanation | 答え / 解説 | `why` is shown under 解説 |
| try again | もう一度 | UI |
| multiple choice | 選択問題 | |
| word tiles (order) | 並べ替え | School exam format 並べ替え問題 |
| gap-fill | 穴埋め | School exam format |
| typed sentence | 英作文（入力） | Short label: 入力 |
| drills | ドリル | UI |
| session | 学習 | 「学習を始める」 |
| level / XP | レベル / XP | |
| pronunciation hint toggle | 読み方を表示 | Replaces "romanization" |
| progress | 記録 | Nav label (§10) |
| feedback | ご意見 | Nav label (§10) |
| settings / sign in / sync | 設定 / ログイン / 同期 | |

## 4. Persistent error zones

Ranked by evidence strength times frequency. Example format: error ✕ → correction ○. **Every "Why" line (the contrast with Japanese) and every example error is [practitioner opinion] unless the Evidence line gives a study for it.**

1. **Articles (a / an / the / none).**
   - *What goes wrong:* omission (`I'm teacher.`), wrong choice (`I went to the school by the bus.`), and treating は/が as if they mapped onto the / a.
   - *Example:* `I have dog. ✕ → I have a dog. ○`
   - *Why:* Japanese has no articles. Definiteness comes from context, demonstratives (その) and は/が.
   - *Evidence:* [research-backed] Murakami & Alexopoulou 2016 (Cambridge Learner Corpus, 11,893 exam scripts from 7 L1s; the Japanese subcorpus is 1,260 scripts / 462,948 words) found that articles "consistently rank low in Japanese, Korean, Russian, and Turkish learners" and are the least accurate of six morphemes for Japanese learners at every level from A2 to C2. [research-backed] Abe (Standard Speaking Test corpus, 100 examinees, picture description) found article errors were 299 of 810 spoken errors (36.9%), the largest category. Raw counts were not normalised.
   - The は→the mapping is [practitioner opinion].
2. **Third-person -s and subject-verb agreement in speech.**
   - *Example:* `She live in Osaka. ✕ → She lives in Osaka. ○`
   - *Why:* Japanese verbs do not agree with the subject. Learners know the 三単現 rule from school but drop it under speaking pressure.
   - *Evidence:* [research-backed] Abe: 76 agreement errors in speech, 48 of them third-person singular, concentrated at SST levels 3–4 (31 of 48). [research-backed] Murakami & Alexopoulou code third-person -s as absent in Japanese but find no Japanese-specific pattern ("fluctuates across proficiency levels"). The "know the rule, drop it in speech" reading is [practitioner opinion].
3. **Plural -s and countability.**
   - *What goes wrong:* omission after numbers and quantifiers, plurals on uncountables, and confusion over many/much and a few/a little.
   - *Example:* `I have two brother. ✕ → I have two brothers. ○` / `Can I get some informations? ✕ → some information ○`
   - *Why:* Japanese marks number with counters (二人, 三本) or not at all. 〜たち is optional and only for animates. Katakana loanwords (インフォメーション, バゲージ, ファニチャー) carry no countability.
   - *Evidence:* [research-backed] Murakami & Alexopoulou code plural -s as absent in Japanese and place it mid-order in accuracy for Japanese learners, so it is better than articles but below past -ed and -ing. [research-backed] Abe: noun-number errors were 37 of 810 (4.6%), with plural-marker errors absent at novice level and peaking at SST 5–8. The uncountable-loanword point is [practitioner opinion].
   - **Note:** the evidence for plurals is weaker than for articles. Plurals stay in the standing rule because their errors persist into intermediate levels and the shared items already test them (§7).
4. **Pronunciation.** Each item is tagged separately:
   - **r / l**: `rice` / `lice`, `right` / `light`, `play` / `pray`. Japanese has one liquid (ラ行).
     - [research-backed, tertiary] Through the [Wikipedia review](https://en.wikipedia.org/wiki/Perception_of_English_/r/_and_/l/_by_Japanese_speakers): Goto 1971 found difficulty even in fluent adults; Takagi & Mann 1995 found residents of 12+ years still below native accuracy; Lively, Logan & Pisoni 1993 found that multi-talker (high-variability) training beat single-talker training; Lively et al. 1994 found 3-week minimal-pair identification training improved accuracy, with gains lasting 6 months; Bradlow et al. 1997 found perception training transferred to production.
     - Positions: clusters (`pray`, `fly`) and between vowels are hardest, and word-final is easiest (Lively et al. 1994).
     - Primary papers not read.
   - **Vowel insertion (epenthesis)**: `milk` → ミルク /miruku/, `good` → /gʊdo/. Japanese syllables are (C)V plus ン/ッ.
     - [research-backed] Dupoux, Kakehi, Hirose, Pallier & Mehler (authors' version dated 1998, marked "to appear" in *JEP:HPP*; the final year was not verified; 10–20 Japanese vs French listeners per experiment): Japanese listeners report an illusory [u] in clusters, over 70% of trials even with no vowel, and confuse `ebzo`/`ebuzo` (32% and 16.4% errors in two ABX experiments, against 5.8% and 4.7% for French). This is *perception* evidence. That it causes production errors is [practitioner opinion] ([Junn](https://repository.musashi.ac.jp/dspace/bitstream/11149/2606/1/musashi_journal02_02_017_026_junn.pdf), on `good` → /gʊdo/).
   - **Vowel contrasts collapsed by katakana**: `cold` / `called` / `code` / `cord` all become コード. `want` / `won't`, `warp` / `wop`.
     - [research-backed, small] Beasom 2011: 100 Japanese university students identified only 9.44 of 20 native-read katakana-homophone words (about 5.9 after guessing correction). Native listeners in Japan (23) and the US (31) identified Japanese speakers' versions poorly.
     - Non-random sample; the author calls the case examples anecdotal.
   - **v / b**: `very` heard as `berry` / `belly`. [research-backed, small] Beasom 2011, listed among the common confusions. Japanese has no /v/; ヴ is spelling only.
   - **th → s / z**: `think` → `sink`, `this` → ズィス / ディス. [practitioner opinion].
   - **f / h before u**: `food` / `who'd`, `fool` / `who`. フ is a bilabial [ɸ]. [practitioner opinion].
   - **si / shi**: `sea` → `she`, `sit` → `shit`. Japanese シ is [ɕi] and there is no native /si/. [practitioner opinion].
   - **Stress and rhythm**: katakana loanwords carry Japanese pitch and even mora timing (`hotel` → ホテル with no stress on -TEL, `banana` → バナナ). [practitioner opinion].
   - **Linking and reduction**: `Check it out` heard as three separate words. [practitioner opinion]. The listening gap in §5 is consistent with it but does not show the cause.
5. **Katakana English and wasei-eigo (false friends).**
   - *What goes wrong:* coined or shifted loanwords are used as English.
   - *Examples:*
     - `I live in a mansion. ✕ → I live in an apartment (building). ○`
     - `Where is the consent? ✕ → Where's the outlet? ○`
     - `He's a salaryman. ✕ → He's an office worker. ○`
     - `my note PC ✕ → my laptop ○`
     - `She's naive (= sensitive) ✕ → She's sensitive. ○`
   - *Why:* thousands of English-looking words in daily Japanese have shifted meanings or were coined in Japan.
   - *Evidence:* [practitioner opinion] [TKG Japanese-English Learner's Dictionary](https://www.tkgje.jp/entries/18500/18947_waseieigo.html), which gives these examples and advises checking that a katakana word means the same in English before using it. [practitioner opinion] Junn notes semantic shifts in loanwords. No error-frequency study was fetched.
6. **Subject and object omission.**
   - *Examples:* `Is cold today. ✕ → It's cold today. ○` / `I like. ✕ → I like it. ○` / `Do you know? ✕ → Do you know (him / it)? ○`
   - *Why:* Japanese freely drops any argument recoverable from context (寒いね / 好き / 知ってる？).
   - *Evidence:* [practitioner opinion]. The one fetched study (Nakayama & Yoshimura 2020, abstract only) is about null subjects in infinitives and gives no frequency. Abe's "omission" category (12.6% of spoken errors) is not broken down by what was omitted and must not be read as subject omission.
7. **Tense and aspect: present perfect and ている.**
   - *Examples:* `I'm living in Tokyo for five years. ✕ → I've lived / I've been living in Tokyo for five years. ○` / `I didn't finish it yet. ✕ → I haven't finished it yet. ○` / `I'm knowing him. ✕ → I know him. ○` / `He is dying. (for 死んでいる) ✕ → He is dead. ○` / `I'm marrying. (for 結婚している) ✕ → I'm married. ○`
   - *Why:* 〜ている covers both progressive (食べている) and resultative state (結婚している, 来ている). Japanese 〜た covers both past and completion.
   - *Evidence:*
     - [research-backed] Murakami & Alexopoulou code -ing as corresponding to -tei- and find -ing in the highest accuracy cluster for Japanese learners. So the *form* is easy; the meaning mismatch is the problem, which is [practitioner opinion].
     - [research-backed, abstract only] Uno 2014 (*IRAL*, 29 learners, cloze test): Japanese learners associate the present perfect with particular lexical-aspect properties of verbs. The abstract does not report confusion with the past simple, so that claim is [practitioner opinion].
     - [research-backed] Past -ed is a strength: some scores above 0.90 accuracy from A2 for Japanese learners (Murakami & Alexopoulou).
8. **be vs do-support (be動詞 + 一般動詞).**
   - *Example:* `I am play tennis. ✕ → I play tennis. ○` / `Are you like sushi? ✕ → Do you like sushi? ○`
   - *Why:* 〜です is attached to every polite sentence, so learners add "am / is" as a politeness or sentence marker.
   - *Evidence:* [practitioner opinion]; it is a standard junior-high warning [curriculum convention].
9. **Word order.**
   - *Examples:* verb-final and modifier-first transfers: `I every day coffee drink. ✕`, `I went to yesterday Kyoto. ✕ → I went to Kyoto yesterday. ○`, and time-before-place ordering.
   - *Why:* Japanese is SOV, with all modifiers before the head and flexible order marked by particles.
   - *Evidence:* [practitioner opinion]. Basic SVO is drilled heavily in school (並べ替え問題), so gross SOV errors are rarer in writing than adverb and modifier placement errors.
10. **Relative clauses (avoidance more than error).**
    - *Example:* `I have a friend lives in Osaka. ✕ → I have a friend who lives in Osaka. ○`, or two separate sentences instead.
    - *Why:* Japanese relative clauses come before the noun and have no relative pronoun (大阪に住んでいる友達).
    - *Evidence:*
      - [research-backed] Takahashi 2018 (JEFLL and NICT JLE corpora): very low use at A1–A2 (0.04 to 0.17 relative clauses per learner in JEFLL writing) rising at B1–B2. The error rates are reported as 12–22% but the paper is internally inconsistent about which corpus has which rate. Structural errors are the commonest type.
      - [research-backed, second-hand] Murakoshi 2015 (cited by Takahashi): 85% of third-year high-school students used no relative clause in free writing.
      - Avoidance as a concept is Schachter 1974. Its figures were not read.
11. **Passive overuse and misuse.**
    - *Examples:* the adversative passive transferred: `I was stolen my wallet. ✕ → My wallet was stolen. / I had my wallet stolen. ○`; `I was rained. ✕ → I got caught in the rain. ○`; and over-formal passives in email (`It is thought that…`).
    - *Why:* the Japanese 迷惑の受身 (雨に降られた, 財布を盗まれた) takes the affected person as subject.
    - *Evidence:* [practitioner opinion]. No fetched study.
12. **Prepositions.**
    - *Examples:* `at Monday ✕ → on Monday ○` / `discuss about ✕ → discuss ○` / `go to home ✕ → go home ○`
    - *Why:* the particles に / で / へ do not map one-to-one onto in / on / at.
    - *Evidence:* [research-backed, negative] Abe found preposition errors *rare* in picture-description speech (verb-dependent preposition errors 15 of 810, 1.9%). Their importance is therefore [practitioner opinion]; teach the core set and verb chunks without making them a standing rule.

## 5. Learner starting point

- **School exposure.** English is compulsory through junior and senior high school (6 years). Younger adults also had some English in elementary school. The teaching is largely grammar-translation aimed at entrance exams [curriculum convention; the elementary start and the teaching style were not verified from a fetched source]. The one fetched figure is Abe's written sample: 197 university students who had "studied English for six years" [research-backed, sample description].
- **Exam culture.** Adults know **英検 (Eiken, grades 5級 to 1級)** and **TOEIC L&R** as the yardsticks for jobs and promotion [curriculum convention]. Familiar formats are 4-option multiple choice, 並べ替え and 穴埋め, which map directly onto the practice set.
- **Profile figures.**
  - [research-backed, test-taker data] **EF EPI 2025, Japan:** overall 446 (global average 488), rank 96. Reading 454, listening 437, **writing 394, speaking 393**: productive skills sit about 45–60 points under receptive ones ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-japan-english.pdf)). Kanto (478) leads and Chugoku (436) trails. The fact sheet gives no sample size. The EPI is an online test taken by volunteers, not a random sample (from the index's general methodology, not stated on the sheet).
  - For comparison, the same EF series shows Korea at reading 540 vs speaking 489 (prior report).
  - [research-backed, test-taker data] **TOEIC L&R 2024, Japan:** mean total 564 (L 311 / R 253) against Korea's 678 (L 375 / R 303) ([ETS Worldwide 2024](https://www.iibc-global.org/hubfs/library/default/toeic/official_data/pdf/Worldwide2024.pdf?hsLang=ja)). Test-takers are self-selected and include company-mandated IP tests. Do not read the L > R gap as "listening is stronger": the two section scales are not equated for that purpose.
- **Implications for the app** [practitioner opinion, inferred from the above]:
  1. **Start at A1 but expect speed.** Learners will recognise most A1 forms. The 3-question check will feel easy, so value lies in the 14-item practice ending in typed production, where the EF figures say they are weakest.
  2. **Name grammar with school terms** (§3). Learners trust and recall them, and explanations can be shorter than in ko-en.
  3. **Emphasise sound**: audio on every row, the katakana aid with corrective rules (§6), minimal pairs in the pronunciation deck, and listening-first items in review. Speaking and listening are the documented gap.
  4. **Do not gate on late forms**: articles, plural -s and third-person -s remain error-prone up to advanced level (Murakami & Alexopoulou).
  5. Offer TOEIC-flavoured vocabulary in the work deck (meeting, schedule, invoice) because that is the motivator adults name [practitioner opinion].

## 6. Pronunciation aid policy

**Evidence and practice.**
- **For katakana:**
  - Katakana readings appear in approved school textbooks and major publishers' dictionaries and are "the path of least resistance" [curriculum convention, reported by [Beasom 2011](https://accentsasia.org/issues/4-1/beasom.pdf)].
  - Japanese teachers support katakana as an easier first reference for novices, a "reference point and a shortcut" [practitioner opinion, Yamada et al. 2022 as cited by [Junn](https://repository.musashi.ac.jp/dspace/bitstream/11149/2606/1/musashi_journal02_02_017_026_junn.pdf)].
  - A redesigned rhythm-faithful katakana for English karaoke improved raters' phonetic scores after five sung repetitions [research-backed, weak: [Hamaya et al. 2020](https://www.jstage.jst.go.jp/article/letkj/4/0/4_21/_article/-char/en), abstract only, singer sample size not stated, first author works for the karaoke company].
- **Against katakana:**
  - Five vowels and CV syllables collapse distinct words (cold / called / code / cord = コード). Learners identified fewer than half of such words when spoken by a native speaker [research-backed, small and non-random: Beasom 2011, n = 100].
  - Katakana splits clusters with inserted vowels [practitioner opinion: Junn]. This matches the perceptual illusion found by Dupoux et al. (*JEP:HPP*) [research-backed, perception].
  - Native speakers criticise katakana as distorting [practitioner opinion: Junn].
- **Middle positions:** introduce IPA selectively next to katakana and aim at intelligibility, not native-likeness [practitioner opinion: Junn].
- **No fetched study compares katakana, IPA and no aid head to head.** The recommendation below is therefore inference [practitioner opinion].

**Recommendation: katakana in every `pron` field (profile.json `"pron": "required"`), written with the corrective rules below, shown by default and hideable through the existing toggle (label 「読み方を表示」).**
- IPA is rejected because adults do not know it and the app has no IPA lesson [practitioner opinion].
- Omitting the aid is rejected because ko-en has an equivalent Hangul aid and Japanese learners expect a reading [practitioner opinion].
- The corrective rules make some of katakana's known failure points visible: initial R (ゥ), V (ヴ) and /si/ (スィ). Minimal-pair tags cover TH and cluster R/L. Diphthongs, final consonants and F/H before u are carried by audio and the pron lesson only [practitioner opinion].

**Rules for the `pron` field:**
1. **Script:** full-width katakana plus ー only. Separate English words with a half-width space, as ko-en does with Hangul. Follow ko-en punctuation: keep a final `?` or `!` (half-width), keep a `.` between two sentences, and drop the final period. No hiragana, kanji or IPA. Latin letters appear only in the minimal-pair tag of rule 12.
2. **Sound, not spelling.** Write American English at natural speed, not school katakana: `water` → ワーラー, not ウォーター.
3. **R / L:** prefix a small **ゥ** to the kana for every word-initial /r/ (`right` → ゥライト, `rice` → ゥライス, `really` → ゥリーリー). /l/ is plain ラ行 (`light` → ライト). An /r/ inside a cluster or between vowels takes no ゥ (`three` → スリー, `very` → ヴェリー). The pron lesson explains: 「ゥ がついたら唇を丸めて舌をどこにもつけない R」.
4. **V / B:** /v/ is always ヴァ ヴィ ヴ ヴェ ヴォ. /b/ is バ行. Never write /v/ as バ行.
5. **TH:** voiceless /θ/ → ス / スィ (`think` → スィンク, `three` → スリー). Voiced /ð/ → ズ / ズィ / ザ / ゼ (`this` → ズィス, `the` → ザ, `there` → ゼア). **Never** ト / ド / デ / ディ for TH, which keeps them distinct from t / d.
6. **/si/ vs /ʃi/:** /si/ → スィ (`see` → スィー, `city` → スィティ). /ʃi/ → シ (`she` → シー).
7. **F / H:** /f/ → ファ フィ フ フェ フォ. /h/ → ハ ヒ ヘ ホ. /fu/ and /hu/ both stay フ; the audio carries the difference, and the lesson says so.
8. **Final consonants:** write the shortest standard kana (ト, ド, ク, グ, プ, ブ, ス, ズ). Use ッ only where English has a short vowel before a stop (`cut` → カット), never to imitate gemination. The pron lesson teaches that these kana are 「母音を言わない子音」. The aid cannot show this; audio and the lesson must.
9. **Diphthongs:** write ou and ei as オウ / エイ, not オー / エー: `cold` → コウルド (vs `called` → コールド), `name` → ネイム, `no` → ノウ. This keeps Beasom's homophone groups apart.
10. **Linking:** write linked words as one kana group with no space: `Can I` → キャナイ, `Check it out` → チェキラウト, `an apple` → アナプル. Write weak forms as heard: `to` → タ / トゥ, `and` → アン, `a` → ア.
11. **Stress:** do **not** mark it in `pron` (no bold, accent or ˈ is possible or reliable in a plain-text field). Teach stress in lesson tables with capitals (`ba-NA-na`, `ho-TEL`) and rely on audio.
12. **Minimal-pair tag (ko-en convention, e.g. `띵크 (th)`):** in the pronunciation deck, the `pron` lesson's example rows, and any card whose katakana would equal its pair's, append a half-width space and a tag naming the contrasting sound: `(th)`, `(s)`, `(r)`, `(l)`, `(v)`, `(b)`, `(f)`, `(h)`, `(sh)`. Examples:
    - `think` → スィンク (th), `sink` → スィンク (s)
    - `play` → プレイ (l), `pray` → プレイ (r)
    - `food` → フード (f), `who'd` → フード (h)
    - `vote` → ヴォウト (v), `boat` → ボウト (b)

    Do not use the tag in ordinary sentences: there, TH and cluster R/L are carried by audio only.
13. **Validator:** `pron` must match `^[\u30A0-\u30FF\u3099-\u309C ?!.,'/]+( \((th|s|r|l|v|b|f|h|sh)\))?$`. That is the katakana block (which includes small ゥ, ー and ・), a space, the listed punctuation and ` / ` for pairs, plus the optional rule-12 tag. In profile.json, set `nativeScript: "[\u3040-\u30FF\u3400-\u9FFF]"` (hiragana, katakana, CJK) to detect Japanese in meaning, note and explanation fields.

**Worked examples** (English sentences taken from the existing course):

| English | `pron` | Rules shown |
|---|---|---|
| It's cold today. | イッツ コウルド トゥデイ | 9 (コウルド, not コールド = called) |
| There's a cafe near here. | ゼアザ キャフェイ ニア ヒア | 5 voiced TH, 10 linking (There's a → ゼアザ) |
| It's raining. | イッツ ゥレイニング | 3 initial R |
| rice / lice | ゥライス / ライス | 3 minimal pair |
| I think so. | アイ スィンク ソウ | 5 voiceless TH, 6, 9 |
| three trees | スリー トゥリーズ | 3 (no ゥ in cluster), 5 |
| very light | ヴェリー ライト | 4 V, 3 plain L |
| Can you close the door? | キャニュー クロウズ ザ ドア? | 10 linking, 9, 5 |
| I have a dog. The dog is so cute. | アイ ハヴァ ダーグ. ザ ダーグ イズ ソウ キュート | 4 (ハヴァ), 2 US vowel, 10 |
| Is there a bathroom here? | イズ ゼアラ バスルーム ヒア? | 5, 10 (there a → ゼアラ, US linking r) |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "冠詞|複数" }`. At least half of each practice set's `order` and `type` items must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much). The `why` of each such item must contain 冠詞 or 複数 (e.g. 「数えられる名詞が一つなので冠詞 a をつけます」, 「二つなので複数の s をつけます」).

**Justification:**
- **Articles are the strongest-evidenced persistent error for Japanese speakers.** They are the least accurate morpheme at every exam level A2–C2 in Murakami & Alexopoulou 2016 [research-backed] and 36.9% of spoken errors in Abe [research-backed]. Japanese has no article system (§4.1).
- **Plural -s is weaker but persistent.** It is coded as absent in Japanese, mid-order in accuracy, and its errors peak at intermediate level, exactly where an app's long-term users sit [research-backed: Murakami & Alexopoulou; Abe].
- **Parity cost is zero.** The shared English tile and typed items were written to the Korean rule, so they already satisfy it. Only the Japanese `why` text must name 冠詞 / 複数. A different rule would force deviations in all 39 sets [practitioner opinion; consequence of PILOT-SPEC §1.6].

**Secondary emphasis (not validated):** where an item also involves third-person -s, the `why` should name 三単現 (Abe: 48 of 76 spoken agreement errors) [research-backed]. Where an item involves a dropped subject or object (it, them), it should name 主語 or 目的語 [practitioner opinion]. Do not add these to the validator regex.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions:**
- **keep** = adapt as-is: a fresh Japanese explanation from the Japanese point of view, English rows, checks and practice unchanged.
- **reweight** = same English checks and practice, *Japanese explanation and lesson-body example rows* shift emphasis as noted. Lesson-body examples are not parity-bound; check and practice strings are. No deviation entry is needed.
- **add** = new lesson, which needs a `deviations.json` entry.

There is no "replace" and no "drop". Ids and order are unchanged; the two additions slot in at the stated points.

| lesson id | keep / reweight / replace | note |
|---|---|---|
| pron | reweight | Japanese set: R/L (ゥ convention), V/B, TH, /si/ vs /ʃi/, F/H, vowel insertion (ミルク → milk), diphthongs (cold/called), stress. Shared items (rice/lice, think/sink, vote/boat, right/light) all fit. The `why` for fan/pan and coffee/copy explains F vs H/P from Japanese (コーヒー) |
| be | keep | be動詞 / 一般動詞 are school terms. Warn against `I am play` (です-transfer) |
| it-there | reweight | Frame as 「日本語は主語を省略できるが英語はできない」 (寒いね → It's cold.) |
| articles | keep | Contrast with no 冠詞 in Japanese. Explicitly warn は ≠ the, が ≠ a |
| plurals | reweight | Counters (二人, 三本) vs plural -s. 〜たち is not the plural -s |
| present | keep | SOV → SVO, identical contrast to Korean |
| questions | keep | |
| third-s | keep | Name it 三単現の s. Say outright that knowing the rule ≠ saying it |
| prep | keep | に / で / へ vs in / on / at |
| countable | reweight | Katakana uncountables: インフォメーション, バゲージ, ファニチャー → no -s, no a |
| object-have | reweight | Object omission: 好き → I like it. 買います → I'll buy it |
| can-like | keep | |
| polite | reweight | Keigo ≠ English politeness. 「〜ください」 ≠ please + imperative: Please give me water sounds demanding; use Could I have…? |
| continuous | reweight | 〜ている ≠ be + -ing: 結婚している = I'm married, 知っている = I know, 住んでいる = I live (unless temporary) |
| past | keep | A strength (accuracy above 0.90 from A2); move briskly |
| irregular-past | keep | |
| the | keep | |
| adjectives | keep | |
| going-to | keep | |
| tense | keep | |
| joining | keep | Add note: Because … alone is a fragment in writing (exam habit) |
| numbers | keep | 万 / 億 → ten thousand / hundred million conversion table; dates (US month/day) |
| smalltalk | reweight | Japanese explanation of topics: avoid age / blood type / 「日本の印象は？」 openers. Deck localised (§9) |
| katakana-english | **add** (after `smalltalk`, end of A1) | 和製英語 and shifted loanwords (mansion, consent, salaryman, note PC, naive, claim, smart, tension). Dedicated lesson + deck 「カタカナ英語の落とし穴」. Reason: §4.5, no ko-en equivalent |
| past-continuous | keep | |
| will | keep | |
| perfect | reweight | Hook to school 現在完了 (経験用法). Contrast 〜たことがある / 〜た |
| modals | reweight | 〜したほうがいい → should, not had better (sounds like a warning or threat). must vs have to |
| to-ing | keep | 不定詞 / 動名詞 are school terms |
| articles-2 | keep | |
| first-conditional | keep | |
| relative | reweight | Japanese modifiers come before the noun without a pronoun (大阪に住んでいる友達). Teach who / that as the obligatory link; expect avoidance |
| phrasal | keep | 句動詞 |
| perfect-2 | keep | 継続用法 |
| narrative | keep | |
| conditionals | keep | Label as 仮定法過去 / 仮定法過去完了 (school terms) |
| passive | reweight | 迷惑の受身 trap: I was stolen my wallet ✕ → My wallet was stolen / I had my wallet stolen |
| articles-3 | **add** (after `passive`, before `reported`) | Articles revisited at B1: generic (Dogs are loyal / The internet), abstract nouns, fixed no-article uses (go to bed, by train, at work). Reason: articles are least accurate for Japanese learners up to C2 (§4.1); ko-en stops at A2 |
| reported | keep | 間接話法 |
| email | reweight | Japanese business email formulae have no equivalent (お世話になっております, よろしくお願いします): teach I hope you're well / Thanks in advance / Best regards. Drop excess apology |
| idioms | keep | |

Totals: 39 existing lessons (23 A1 + 9 A2 + 7 B1): 26 keep, 13 reweight, 0 dropped. Plus 2 additions, which are the only parity exceptions for lessons. All reweights are [practitioner opinion] grounded in the §4 contrasts.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies, PAUSE sets):**

| ko-en | ja-en |
|---|---|
| Minji | Yuki (alternatives: Haruto, Aoi, Ken) |
| Seoul | Tokyo |
| Busan | Osaka (Kyoto, Fukuoka as alternates) |
| Seoul National University | a university in Tokyo, generic ("I'm a student in Tokyo"), with no real university name needed |
| kimchi | sushi / natto / ramen |
| K-pop, BTS | J-pop, anime, manga (no real artist names needed) |
| Gangnam | Shibuya / Shinjuku |
| Chuseok, Korean holidays | Obon, New Year (お正月), Golden Week |
| 존댓말 / 반말 comparisons | 敬語 / タメ口 comparisons |
| won (₩) | yen (¥). Note that yen prices are big numbers (¥3,000 = three thousand yen) |

**Checks and practice:** Korean proper nouns appear in shared English strings in CHECKS (e.g. `I like K-pop.`, `My sister lives in Seoul.`, `I have a friend ___ lives in Busan.`) and in about 15 PRACTICE items (Seoul, Busan, kimchi). **Rule:** leave these English strings unchanged (parity) and translate the Japanese side literally (ソウル, 釜山, キムチ). They read as a Japanese learner talking about Korea, which is natural. Do **not** file deviations to localise them. If the lead wants them localised later, that is one bulk deviation in `deviations.json` with reason "localisation", not 15 separate ones.

**Deck changes** [practitioner opinion unless noted]:
- **Add** 「カタカナ英語の落とし穴」 (wasei-eigo and shifted meanings, ≥20 cards):
  - mansion → apartment, consent → outlet, salaryman → office worker, note PC → laptop, naive → sensitive, claim → complaint, smart → slim
  - tension (high) → excited, Viking → buffet, cooler → air conditioner, sharp pencil → mechanical pencil, mail → email, OL → office worker
  - Each `note` says 「和製英語」 or 「意味のずれ」. Examples from the [TKG dictionary](https://www.tkgje.jp/entries/18500/18947_waseieigo.html) for the first five; the rest are [practitioner opinion].
- **Pronunciation deck** 「発音注意」: replace F/P emphasis with R/L, V/B, TH/S, SI/SHI, F/H minimal pairs plus diphthong pairs (cold/called, low/law, boat/bought).
- **Travel**: departure from Narita/Haneda/Kansai, IC cards ≈ "transit card", tipping (none in Japan, expected in the US), "to go" vs テイクアウト.
- **Work and email**: Japanese learners write work English for TOEIC and email. Cover meeting / schedule / deadline, and replace お世話になっております / よろしくお願いします with natural openings and closings. Teach first names and the absence of 様/さん titles in English (`Hi Yuki,` not `Dear Yuki-san`).
- **Small talk**: weather, weekend, food, work, and hobbies (anime, travel, onsen). Warn against blood type, age, marital status and "Can you use chopsticks?" questions in English-speaking contexts.
- **Phone and text abbreviations**: keep the English (lol, btw). Explain with Japanese equivalents (笑, w).

## 10. Interface wording notes

[Curriculum convention / practitioner opinion; the Microsoft Japanese style guide could not be read, see §11.]
- **Register:** です・ます in sentences (toasts, empty states, dialogs), e.g. 「保存しました」, 「今日の復習は終わりました！」. Buttons and nav are **nouns or noun + する stems without する**: 開始, 保存, 次へ, 戻る, キャンセル, 確認, 送信, もう一度. Avoid 〜してください on buttons.
- **Verb style for start actions:** 「学習を始める」 (dictionary form on primary CTA), 「レッスンを見る」. Keep each CTA ≤ 8 full-width characters.
- **Counters:**
  - `N cards due` → 「復習カード N枚」
  - `N lessons` → 「Nレッスン」
  - `N days` → 「N日」
  - `N-day streak` → 「N日連続」
  - `N words` → 「N語」
  - `N questions` → 「N問」
  - `N XP` → 「N XP」 (English unit after a digit keeps its space)
  - `Level N` → 「レベルN」
  - Japanese has no plural, so patterns need one form only. Still supply both 1 and 2 forms identically to satisfy the plural-sensitive check.
- **Numbers and dates:** half-width digits, comma thousands (1,234). Dates `2026年11月15日` or short `11/15`. Weekday `（土）`. Time 24-hour `21:05`. `Intl` with `ja-JP` produces these.
- **Width:** no half-width katakana anywhere. Full-width punctuation in Japanese strings, half-width digits and Latin. No typed space between Japanese and Latin (§2).
- **Bottom nav (Today / Practice / Review / Lessons / Read / Progress / Feedback), proposed labels:**

  | English | Japanese label | Full-width chars |
  |---|---|---|
  | Today | 今日 | 2 |
  | Practice | 練習 | 2 |
  | Review | 復習 | 2 |
  | Lessons | レッスン | 4 |
  | Read | 読む | 2 |
  | Progress | 記録 | 2 |
  | Feedback | ご意見 | 3 |

  Measured from `src/app.html` (read-only): the mobile nav label is `font-size:.62rem` to `.7rem` (about 10–11px) with 1–2px side padding, so at 390px each of the 7 tabs has about 50px of usable label width. A full-width character is about 10–11px wide, so 4 characters (レッスン, about 40–45px) fits with little room to spare and is the ceiling. Labels use `text-overflow: ellipsis`. **Fallback if レッスン clips in testing: 講座.** Do not use フィードバック (7), 進捗状況 (4, unnatural) or リーディング (6). 練習 / 復習 match ko-en's 연습 / 복습.
- **Language name:** 日本語 / English (英語) via `Intl.DisplayNames('ja')`.
- **Feedback marks:** ○ 正解 / ✕ 不正解. Never use red ✕ alone for the user's own content; pair it with text.

## 11. Gaps and unverified claims

- **Blocked sources:**
  - A Bunkyo University repository paper on katakana and pronunciation (redirected to an expiring object-storage URL, not fetched).
  - A Kyushu Institute of Technology paper on Japanese EFL error types (same redirect; the follow-up URL was refused as over 250 characters).
  - The Microsoft Japanese Localization Style Guide PDF (returned as binary). So §2's ー long-vowel convention, and §10's button, counter and date rules, rest on convention and opinion, not a fetched guide.
- **Abstract-only or second-hand:**
  - Hamaya et al. 2020: abstract, sample size unknown, industry author.
  - Uno 2014: abstract; no finding on past-vs-perfect confusion.
  - Nakayama & Yoshimura 2020: abstract; no omission frequencies.
  - Murakoshi 2015's 85% figure: via Takahashi 2018.
  - All r/l findings come via a Wikipedia review; primary papers (Goto 1971, Lively et al. 1994, Bradlow et al. 1997) were not read.
  - Schachter 1974's relative-clause figures were not read.
- **Internal inconsistency:** Takahashi 2018 reports relative-clause error rates of 22.47% / 12.65% in a table caption and the reverse in the discussion.
- **No fetched study supports** subject/object omission frequency, passive misuse, the ている/-ing meaning mismatch, be + verb (`I am play`), th, f/h, si/shi, stress or linking for Japanese learners. All are tagged [practitioner opinion]. Abe found prepositions rare in speech, which argues against making them a priority.
- **No controlled study compares katakana, IPA and no aid.** §6's policy and its rules (ゥ for R, スィ, ズィ, diphthong spelling) are this profile's design, not tested conventions. The ゥ-for-R notation is used in some Japanese pronunciation materials, but no source for it was fetched.
- **Learner-profile figures:**
  - EF EPI is a self-selected online test, and the fact sheet gives no sample size or band. A 2026 fact sheet exists and was not fetched.
  - TOEIC means include company IP tests, and the country of testing may differ from nationality.
  - The elementary-school start of English, Eiken grades and their status, and the school-term column in §3 are from general knowledge of the Japanese curriculum, not a fetched Course of Study.
- **Not researched:** Japanese learners' third-person -s in writing, spoken plural omission rates beyond Abe, the adversative-passive error rate, wasei-eigo error frequency, and any study of Japanese adults in self-study apps.
- **Evidence base:** Abe's spoken data are raw counts from a 17,222-token corpus, with small per-level samples (author's caveat). The study's year is not stated in the paper (latest reference 2002; published in the Corpus Linguistics 2003 proceedings).

## Sources

- [Murakami & Alexopoulou 2016, L1 influence on the acquisition order of English grammatical morphemes (Cambridge Learner Corpus)](https://core.ac.uk/download/42340394.pdf)
- [Abe, A corpus-based contrastive analysis of spoken and written learner corpora: Japanese-speaking learners of English (CL2003)](https://ucrel.lancs.ac.uk/publications/CL2003/papers/abe.pdf)
- [Takahashi 2018, Japanese EFL learners' use of relative clause constructions (英語コーパス研究 25)](https://www.jaecs.com/jnl/ECS25/ECS25_057-078.pdf)
- [Uno 2014, Lexical aspect in the use of the present perfect by Japanese EFL learners (abstract)](https://www.degruyterbrill.com/document/doi/10.1515/iral-2014-0002/pdf)
- [Nakayama & Yoshimura 2020, Japanese EFL learners' null subjects in control and seem-raising constructions (abstract)](https://www.jstage.jst.go.jp/article/secondlanguage/19/0/19_7/_article/-char/en)
- [Dupoux, Kakehi, Hirose, Pallier & Mehler, Epenthetic vowels in Japanese: a perceptual illusion? (authors' version)](https://web-archive.southampton.ac.uk/cogprints.org/747/5/ebuzo.pdf)
- [Wikipedia, Perception of English /r/ and /l/ by Japanese speakers](https://en.wikipedia.org/wiki/Perception_of_English_/r/_and_/l/_by_Japanese_speakers)
- [Beasom 2011, Aspects of phonological competence in Japanese EFL learners (Accents Asia 4(1))](https://accentsasia.org/issues/4-1/beasom.pdf)
- [Junn, Segmental and suprasegmental pronunciation patterns of Japanese learners of English (Musashi University)](https://repository.musashi.ac.jp/dspace/bitstream/11149/2606/1/musashi_journal02_02_017_026_junn.pdf)
- [Hamaya et al. 2020, Improvement of katakana for English karaoke (LET Kanto Journal 4, abstract)](https://www.jstage.jst.go.jp/article/letkj/4/0/4_21/_article/-char/en)
- [EF EPI 2025 fact sheet, Japan](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-japan-english.pdf)
- [ETS/IIBC, TOEIC Listening & Reading Report on Test Takers Worldwide 2024](https://www.iibc-global.org/hubfs/library/default/toeic/official_data/pdf/Worldwide2024.pdf?hsLang=ja)
- [TKG Japanese-English Learner's Dictionary, 和製英語 entry](https://www.tkgje.jp/entries/18500/18947_waseieigo.html)
- [W3C i18n, Managing inline spaces in Chinese & Japanese](https://w3c.github.io/i18n-drafts/articles/styling/inline-space.en)
- Local: `/home/claude/reports/Grammar learning order research.md` (method, labels, Korean EF EPI comparison); `/home/claude/docs/PILOT-SPEC.md`, `/home/claude/docs/PRACTICE-SPEC.md`, `/home/claude/packs/course-ko-en.js` (lesson content, shared English strings, Korean proper nouns in checks and practice).
