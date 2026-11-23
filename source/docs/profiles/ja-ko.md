# Japanese speakers learning Korean: pair profile

Course `ja-ko` is Korean for speakers of Japanese. It is assembled from the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards, frozen v1, see `docs/HALVES-SPEC.md`) and a native half `tools/halves/native/ja/ko/` written in Japanese. The Japanese writers follow this profile. It sets the house rules for the native half, describes what a Japanese speaker already brings, ranks the traps, and gives the reading guide for the romanization in Japanese. It also lists, lesson by lesson, what must be rewritten rather than translated, and which lessons can be much shorter than the English.

**Evidence tags** (as in `docs/profiles/en-es.md` and `docs/profiles/ceb-ko.md`):
- **[research-backed]**: an empirical study opened for this profile. The study and its sample are named. **(abstract only)** means only the abstract or summary page was read. **(descriptive)** marks a contrastive description of the two languages, not a learner study.
- **[curriculum convention]**: what dictionaries, syllabuses, schools, textbooks and broadcasters do.
- **[practitioner opinion]**: the stated view of a teacher, journalist, blogger or guide, with no data behind it.
- **[inference]**: this profile's own reasoning, and every linguistic fact given from the author's knowledge without an opened source. **Every Japanese sentence written in this profile is [inference]**: its author is not a native Japanese speaker. §10 lists what a native reviewer must check first.

Untagged rules in §3 and §6 to §9 are design decisions, not findings.

**How much is known.** Compared with the Cebuano pair, this pair is well studied. Japanese is one of the five L1 groups in a large automatic-transcription study of L2 Korean speech (170 Japanese speakers; arXiv 2023). Acoustic and perception studies with Japanese samples were also opened (Jo, Kim & Kim 2008; Nam 2002), as was an essay on honorific errors by a Japanese professor of Korean (Yutani 1991). The sound correspondences of Sino-Korean and Japanese on'yomi are described in Kim (2010). The weak spots are grammar error data: no opened study gives counts for Japanese learners' particle or aspect errors. One study names particles, aspect and connective endings as the areas of visible L1 interference in Japanese learners' Korean compositions, but only its opening section was readable and it gives no examples or counts (Takagi & Yun, n.d.). The grammar traps in §5 are therefore mostly contrastive reasoning, marked [inference].

## 1. Summary

1. **Explanations:** standard Japanese in **です・ます体**, at the level of a friendly NHK or university textbook. Instructions end in 〜しましょう. Never あなた. Errors are marked **✕ → ○** (the Japanese convention, as `docs/profiles/ja.md` §2). House style for spacing and punctuation is reused from `ja.md` §2 (§3.1).
2. **House term for the language: 韓国語.** The script is **ハングル**, and only the script. 朝鮮語 appears once, in the `hangul` lesson, as the academic name (§2.3).
3. **Grammar terms:** Japanese school grammar terms plus the standard terms of Korean teaching in Japan. Use **助詞, 語幹, 語尾, 用言 (動詞・形容詞・存在詞・指定詞), 体言, パッチム, 陽母音・陰母音, ヘヨ体・ハムニダ体・パンマル (all in kana, §3.4), 尊敬, 変則, 連音化, 鼻音化, 激音化, 濃音化, 流音化, 平音・激音・濃音, 固有語数詞・漢字語数詞, 助数詞, 漢字語**. They come from a closed list (§3.4). 語基 is not used.
4. **The big asset (§4):** Japanese grammar maps onto Korean almost line for line. SOV order, postpositions, は/が ↔ 은/는・이/가, を ↔ 을/를, も ↔ 도 (with the same stacking rule: にも / でも ↔ 에도 / 에서도), だけ ↔ 만, より ↔ 보다, 〜たい ↔ -고 싶다, 〜てもいい ↔ -아/어도 되다, 〜ことができる ↔ -(으)ㄹ 수 있다. Relative clauses come before the noun with no relative pronoun, and subjects are dropped. 助数詞, the 万 grouping, あなた-avoidance, うちの ↔ 우리, and 尊敬語 ↔ 드시다 / 계시다 / 성함 also carry over. There are also **thousands of 漢字語 cognates with regular sound correspondences**: §4.12 gives 20 rules and 60 cognates that appear in this course.
5. **Consequence for writing:** 8 of the 33 lessons can be **much shorter** than the English and 16 more somewhat shorter (§7). The prose shrinks, but every Hangul run and every ✕/○ example stays, because of the set-equality rule (§3.6, §7). Five lessons need **more** than the English: `hangul`, `sound-changes`, `honorific`, `titles` and `office`. The extra material is sounds, 絶対敬語, and 씨 ≠ さん.
6. **The strongest traps, ranked (§5):**
   1. Plain vs aspirated vs tense consonants (research-backed: aspirated → tense substitution).
   2. Patchim: ㅇ said as ㄴ, ん with three targets, vowels added after finals (research-backed).
   3. ㅓ → ㅗ and ㅜ → ㅡ, and diphthongs flattened (research-backed).
   4. Verbs whose particle differs from Japanese: に乗る → 을/를 타다, に会う → 을/를 만나다, が好き → 을/를 좋아하다, になる → 이/가 되다.
   5. 絶対敬語: Korean honours one's own father or boss even when talking to outsiders (practitioner opinion: Yutani 1991).
   6. 〜ている ↔ -고 있다 / -아/어 있다 / past tense.
   7. 漢字語 false friends.
   8. Over-use of 의 for の.
   9. Native numbers for hours, age and most counters, where Japanese uses 漢語 numbers.
7. **Romanization:** keep the Revised Romanization the Korean half prints (the format is fixed). No katakana ruby, because a native field cannot add a reading line. Teach the sounds in prose with kana comparisons, and give explicit warnings wherever kana fails. §6 gives the full reading guide in Japanese, ready for `hangul` (waiver needed) and `sound-changes` (written to need no waiver).
8. **Format lever:** the Hangul check counts only Hangul (`tools/halves/lib.js` `HANGUL_RX`). **Kanji and kana may be added freely**, so writers can gloss every 漢字語 with its kanji (가족（家族）) in notes, glosses and bodies without a waiver (§3.6).
9. **Localisation:** the lead should add 일본에서 왔어요 and about seven more rows (plus a dialogue variant) to the Korean half (§9.4). The Japanese interface pack was written for ja-en and shows 英語 where "Korean" is meant in about 20 strings, so the ja-ko `ui.json` must override far more than the 14 `uiKeys` (§9.5).
10. **Confidence:** moderate for sounds and honorifics, which have studies with Japanese samples. Low to moderate for grammar traps (no counts) and for every Japanese sentence (non-native author; §10 has 20 checks).

## 2. Learners: who, why, what first

### 2.1 Who learns Korean from Japanese

- **TOPIK takers.** About 27,000 people took TOPIK in Japan in 2019 and about 50,000 in 2025. A former education attaché at the Korean embassy credits the rise mainly to more test sites (35 in 2019, about 80 now). He says learning has moved "from a hobby to formal certification", tied to Korean university admission and jobs ([Herald Business, 2026-11-06](https://mbiz.heraldcorp.com/article/10927518)) [practitioner opinion: press interview, official counts]. Japan's own test, the ハングル能力検定 (ハン検), exists alongside TOPIK; no figures for it were opened (§11).
- **K-pop and K-drama fans.** The same article says interest "began with affection for drama series and music" (Herald 2026). No opened survey measures fan share. Fans arrive knowing 사랑해, 오빠, 대박, 화이팅 and fandom words (최애, 덕질, 컴백), and they need the system behind them [inference].
- **Travellers.** Seoul is a short flight away. The course's survival, café, transport and convenience-store decks fit them directly [inference; no opened data].
- **University students.** Korean is taught as a second foreign language at many universities, sometimes under the name 朝鮮語. Keio's language school, for example, has a 朝鮮語科 whose own page calls the skill 韓国語のレベルアップ ([Keio FLS, 朝鮮語科](https://www.fls.keio.ac.jp/content/files/m_12_tokushoku.pdf)) [curriculum convention]. No opened source counts universities or students (§11).
- **Heritage learners (在日コリアン).** Korean schools in Japan teach Korean to children for whom it is often a **second** language. In one first-grade class of six pupils, only the two who had attended a Korean kindergarten had a substantial vocabulary, and teachers used Japanese for support at first ([Ryu 2009, MHB 5](https://ir.library.osaka-u.ac.jp/repo/ouka/all/25052/mhb_05_022.pdf)) [research-backed, one class]. Tokyo Korean School (founded 1954) has 13,000 graduates (Herald 2026). Adult heritage learners outside these schools were not studied in anything opened. The following needs are [inference]:
  - They may know kinship words and food words from family.
  - They may know dialect forms from grandparents (often Gyeongsang or Jeju).
  - They may be sensitive to the 韓国語 / 朝鮮語 naming question (§2.3).

### 2.2 What they need first [inference]

1. **Sounds, before anything else.** Japanese gives the grammar almost free, but not the sounds. Three of the four strongest error zones are phonetic (§5.1–5.3), and the course prints romanization that a Japanese reader misreads in predictable ways (§6).
2. **The 요 default and the respect system,** mapped onto です・ます (§4.9). Japanese speakers already think in politeness levels. What they lack is 絶対敬語 and the fact that 씨 ≠ さん.
3. **漢字語 awareness from lesson 1.** It is the fastest vocabulary engine this learner has (§4.12). Glossing every Sino-Korean word with kanji costs nothing under the format (§3.6).
4. **The few grammar places where Japanese misleads:** particle mismatches, 〜ている, 의, and number systems. These come before the many places where it helps, because the learner will assume everything transfers.
5. For TOPIK takers: TOPIK I vocabulary and the ハムニダ体 of reading passages. That goes beyond this 33-lesson course; §9 notes it.

### 2.3 Naming: 韓国語, ハングル, 朝鮮語

**Facts.**
- "The Korean language is most frequently referred to in Japan as Kankokugo (韓国語) or Chōsengo (朝鮮語). While academia mostly prefers Chōsengo, Kankokugo became more and more common in non-academic fields" ([Wikipedia, *Names of Korea*](https://en.wikipedia.org/wiki/Names_of_Korea)) [curriculum convention].
- The same page says that when NHK broadcasts a Korean course, "the language is referred to as hangurugo (ハングル語; 'hangul language')", which it calls "technically incorrect since hangul itself is a writing system, not a language". A footnote adds that the teachers avoid the name by saying "this language" [curriculum convention, second-hand via Wikipedia; the programme title itself uses ハングル (ハングル講座), which was not verified on an NHK page, §11].
- Some people say コリア語 (same page).
- The app's Japanese interface already translates the UI word "Korean" as **韓国語** (`tools/i18n/ja/ui.json`, key `Korean`). TOPIK's Japanese name is 韓国語能力試験 [inference: widely used, no official page opened].

**House rule (one rule, no exceptions):**
- The language is **韓国語** in every title, explanation, gloss, deck label and `course.json` name: `{"native":"ja","name":"韓国語","brand":"한글"}`.
- The script is **ハングル** (ハングルの母音, ハングルを読む). Never ハングル語.
- 朝鮮語 appears once, in the `hangul` lesson, as an aside: 「大学などでは『朝鮮語』という名前も使われます。」
- Reasons [inference]:
  - 韓国語 matches the interface, TOPIK, bookshops and what learners type into search.
  - ハングル for the language is a known misnomer (Wikipedia).
  - The course teaches Seoul standard Korean, so 韓国語 is accurate.
  - The one-line mention of 朝鮮語 acknowledges heritage learners and university usage without taking sides.

### 2.4 How Korean is conventionally taught in Japan

- **Order (practitioner and author knowledge; [inference] unless tagged).** Japanese textbooks and NHK courses start with letters and pronunciation (母音 → 子音 → 平音・激音・濃音 → パッチム → 連音化 and the other sound changes). This takes several lessons, often a third of a semester. Then come 이에요/예요 and 은/는 (〜は〜です), 이/가 아니에요, 있어요 / 없어요, ヘヨ体, ハムニダ体, the past, and so on. The opened pages did not confirm the order, and in particular did not settle whether ハムニダ体 or ヘヨ体 comes first (§11). **The Korean half's order** (hangul → polite → meet → sound-changes → nouns → isseoyo …) is fixed and close enough. Writers do not reorder; they cross-reference.
- **Readings.** Many Japanese textbooks print katakana readings (カムサハムニダ) under Korean, at least in early chapters. Others deliberately avoid them after the letters chapter [inference: common knowledge; the opened search results include a paper on how textbooks for Japanese speakers introduce 文字と発音, but its abstract page was empty, §11].
- **Grammar description.** Two traditions exist [inference, partly unverified]:
  - **語幹 + 語尾**, with 用言 classes 動詞・形容詞・存在詞・指定詞. The 小学館『韓日辞典』 uses this set: it defines 語幹 and 語尾, lists 있다・없다・계시다 as 存在詞 and 이다・아니다 as 指定詞, and names 으変則 and 르変則 ([JapanKnowledge, 小学館韓日辞典 凡例 10](https://japanknowledge.com/contents/skj/hanrei10.html)) [curriculum convention].
  - The **語基** system (第I・第II・第III語基), associated with 菅野裕臣 and used in some university textbooks. It could not be opened (§11).

  **Decision: 語幹 + 語尾.** The Korean half builds forms as "take the 요-form, swap 요 for …" (past, have-to, joining). That logic is closer to the 語基 idea (第III語基 = ヘヨ体 minus 요) than its terminology. Writers may say 「ヘヨ体から요を取った形」 exactly as the English does, without naming 語基. The dictionary terms are what a learner will meet in the 小学館 dictionary and in most commercial textbooks [inference].

## 3. Register, terms and style of the Japanese text

### 3.1 Register and style

- **です・ます体** throughout. Explanations end in 〜です / 〜ます. Instructions use 〜しましょう / 〜てみましょう. Do not use である体, タメ口, or chains of 〜してください.
- **No あなた.** Write 「〜と言いたいときは」, not 「あなたが〜」. This also models the Korean rule (당신 is avoided; §4.9).
- **Textbook level:** clear, warm and compact, like NHK テキスト or a good university handout. Use no slang. A light 〜ですね is fine once per screen. Avoid exclamation chains.
- **Errors:** `시간가 있어요 ✕ → 시간이 있어요 ○`. The English half uses ✗ / ✓. These are not Hangul, so writers replace them with ✕ / ○ freely.
- **Mixing Korean into Japanese** (adapted from `ja.md` §2):
  - **Hangul inside Japanese always gets a half-width space on both sides** when Japanese text continues, as `ja.md` does for bare English examples: `은/는 は「は」にあたります`, `시간 있어요? と聞きます`. No space next to full-width punctuation or brackets: `가족（家族）`, `「도」`. One rule, for readability; the samples in §3.3 and §6 follow it.
  - Full-width Japanese punctuation 。、「」『』（）. Romanization and digits are half-width: `gamsahamnida`, `3回`.
  - Japanese words being compared are quoted with 「」: 「は」, 「に乗る」.
  - Kanji glosses of Korean words go in full-width brackets directly after the Hangul: `가족（家族）`, `약속（約束）`. Use them at first mention in each lesson only.
- **Spelling:** 常用漢字 with standard okurigana. Use kana for 〜こと, 〜とき, 〜ところ as grammatical words. Loanwords use katakana with the long-vowel mark (メニュー, コーヒー, カフェ).

### 3.2 Glosses of Korean lines: one policy

- Glosses are natural, short Japanese for what the Korean means in context.
- **Politeness is mapped, not tagged:** the Japanese gloss itself shows the level, which English cannot do.
  - ヘヨ体 → です・ます (`고마워요` 「ありがとうございます」).
  - ハムニダ体 → です・ます, or a set formal phrase (`감사합니다` 「ありがとうございます」, `수고하셨습니다` 「お疲れさまでした」).
  - パンマル → タメ口 (`고마워` 「ありがとう」).
  - -시- / 드시다 → 尊敬語 (`드세요` 「召し上がってください」, `계세요?` 「いらっしゃいますか」).
- **Keep the English tags (polite) (casual) (formal) (honorific) only where the Japanese gloss cannot show the difference.** Examples are the three 고마워요 / 고마워 / 고맙습니다 rows in `polite`, and minimal pairs in practice. Write them as **（ヘヨ体）（パンマル）（ハムニダ体）（尊敬）** in that case: kana only, because a tag such as （해요体） would add a Hangul run the English gloss lacks and fail the check (§3.6).
- **Bracketed subjects:** the English half writes "(I) have time". Japanese drops subjects naturally, so drop the bracket: `시간이 있어요` 「時間があります」.
- Names, places and "the US" stay as in the Korean (§9.1).
- Set phrases use the Japanese set phrase where one exists:

| Korean | Gloss |
|---|---|
| 잘 먹겠습니다 | いただきます |
| 잘 먹었습니다 | ごちそうさまでした |
| 잘 부탁드립니다 | よろしくお願いします |
| 수고하셨습니다 | お疲れさまでした |
| 먼저 퇴근하겠습니다 | お先に失礼します |
| 안녕히 가세요 | さようなら（見送る側）/ お気をつけて |
| 안녕히 계세요 | さようなら（立ち去る側） |

  Note in the lesson that the Korean goodbyes distinguish who leaves, which さようなら does not.

### 3.3 Ten sample sentences of explanation prose (all [inference], for the native check)

1. 韓国語の語順は日本語とほぼ同じです。動詞は文の最後に来ます。
2. 은/는 は「は」、이/가 は「が」にあたります。パッチムがあるかないかで形を選びます。
3. 迷ったら 요 をつけましょう。丁寧すぎて失礼になることはありません。
4. 「バスに乗る」は 버스를 타요 です。韓国語では「に」ではなく 을/를 を使います。
5. 도 は「も」と同じで、은/는・이/가・을/를 の代わりに入ります。「にも」「でも」と同じように、에도・에서도 と重ねることもできます。
6. 日本語の「ウ」は、ㅜ と ㅡ のちょうど中間の音です。ㅜ は唇を丸く突き出し、ㅡ は唇を横に引きます。
7. 韓国語では、外の人に話すときも自分の父や上司に尊敬語を使います。日本語の「父はおりません」は、韓国語では 아버지는 안 계세요 になります。
8. 가족（家族）、약속（約束）、준비（準備）のように、漢字語の多くは日本語の音読みと似ています。
9. 「結婚しています」は 결혼했어요 です。-고 있어요 を使うと「今、結婚式の最中」のように聞こえます。
10. よくできました！明日もう一度このカードを復習しましょう。

(The Hangul in these samples is illustrative. In real rows the Hangul set must equal the English row's (§3.6). Sentence 8's 준비 is not in the half and could appear only under a waiver.)

### 3.4 Glossary: one term per idea (closed list)

**Hangul in terms.** A term may contain Hangul only where the English string it replaces already has the same Hangul run (§3.6). The style names are therefore written in kana: **ヘヨ体, ハムニダ体, パンマル**. Many Japanese textbooks write 해요体 / 합니다体 with Hangul [inference], but here that would add a run to nearly every string that names a style. Particle and ending names (은/는, -고, 하다, ㅂ変則, -(으)시-) are fine in the lessons and rows whose English already shows them. Elsewhere use the Japanese description (「は」にあたる助詞).

| Idea | Term to use, exactly | Do not use | Gloss at first use (once per lesson at most) |
|---|---|---|---|
| 은/는, 이/가, 을/를, 에, 도 … | **助詞** | 小辞, マーカー, 後置詞 | |
| 은/는 | **助詞 은/는**, glossed 「は」 | 主題マーカー | 「は」にあたる助詞 |
| 이/가 | **助詞 이/가**, glossed 「が」 | 主格助詞 (allowed once in `particles`) | 「が」にあたる助詞 |
| 을/를 | **助詞 을/를**, glossed 「を」 | 目的格助詞 (allowed once) | 「を」にあたる助詞 |
| the 은/는 noun | **主題** | トピック | 「〜は」で示す、話題になっているもの |
| the doer / the thing acted on | **主語 / 目的語** | | |
| noun (and pronoun, numeral) | **名詞**; the class name **体言** once in `nouns` | | |
| verb, adjective, 있다/없다, 이다/아니다 as a class | **用言** | 述語 (for the class) | 活用する語 |
| 먹다, 가다 | **動詞** | アクション動詞 | |
| 크다, 좋다 | **形容詞** | 描写動詞, 状態動詞 | 日本語の形容詞と同じく、そのまま述語になります |
| 있다 / 없다 | **存在詞** | 存在動詞 | 「ある・いる」「ない・いない」 |
| 이다 / 아니다 | **指定詞** | コピュラ, be動詞 | 「〜だ・〜です」「〜ではない」 |
| 공부하다 | **하다用言** (verb: **하다動詞**; adjective: **하다形容詞**) | する動詞 (allowed as a gloss) | 日本語の「漢語＋する」にあたります |
| 가 in 가다 | **語幹** | 語根, 語基 | 다 を取った部分 |
| 가다 | **辞書形** (基本形 allowed once) | 原形, 不定詞 | |
| -아요, -았어요, -고 | **語尾** | 接尾辞 | |
| a stem with / without a final consonant | **パッチムのある語幹 / パッチムのない語幹** | 子音語幹 / 母音語幹 | |
| ㅏ ㅗ / other vowels (for 아/어 choice) | **陽母音 / 陰母音** | | 아요 か 어요 かを決める母音 |
| 가요 | **ヘヨ体** (kana; write 해요体 only where the English string has the run 해요) | 요形 | 「です・ます」にあたる、ふだんの丁寧な話し方 |
| -습니다 | **ハムニダ体** (kana) | 格式体 (allowed once) | より改まった丁寧な話し方 |
| casual | **パンマル** (add （반말） only where the English string has 반말, e.g. `polite`) | タメ口 (allowed as gloss), 非敬語 | 「タメ口」にあたる話し方 |
| politeness levels in general | **文体**（話し方のレベル） | | |
| -(으)시- | **尊敬の -(으)시-** | 尊敬語尾 | 動作をする人を高める |
| 드시다, 계시다, 성함 | **尊敬語** | 敬語動詞 | |
| Korean honorifics as a system | **敬語** | 待遇表現, 높임말 (adds Hangul) | |
| 絶対敬語 / 相対敬語 | exactly these | | §4.9 |
| 개, 명, 잔 | **助数詞** | 分類詞, カウンター | |
| 하나, 둘 / 일, 이 | **固有語数詞 / 漢字語数詞** (short: **固有語の数 / 漢字語の数**) | 和語数詞, 中国語の数字 | 日本語の「ひとつ・ふたつ」と「いち・に」のような2系統 |
| native Korean vocabulary | **固有語** | 和語 (Japanese only) | |
| Sino-Korean vocabulary | **漢字語** | 漢語 (keep 漢語 for Japanese words) | 漢字で書ける言葉 |
| Japanese vocabulary layers | **和語 / 漢語** | | |
| loanwords | **外来語** | | |
| ㅏ / ㄱ | **母音 / 子音** | | |
| 받침 | **パッチム** (add （받침） only where the English string has 받침: `hangul`, ko.c0039–ko.c0043) | 終声 (allowed in the reading guide once) | 文字の下につく子音 |
| one Hangul block | **文字**（ひとまとまりの文字） | ブロック | |
| syllable | **音節** | 拍 (use 拍 only for Japanese mora) | |
| Japanese mora | **拍** | モーラ | |
| ㄱ ㄷ ㅂ ㅈ ㅅ / ㅋ ㅌ ㅍ ㅊ / ㄲ ㄸ ㅃ ㅉ ㅆ | **平音 / 激音 / 濃音** | 平音 = 軟音, 激音 = 有気音 (allowed once as gloss) | |
| 연음 | **連音化** | リエゾン | |
| 비음화 | **鼻音化** | | |
| ㅎ + ㄱ → ㅋ | **激音化** | 気音化 | |
| 학교 → 학꾜 | **濃音化** | 硬音化 | |
| ㄴ + ㄹ → ㄹㄹ | **流音化** | | |
| ㅎ dropped | **ㅎの弱化** | ㅎ脱落 (allowed) | |
| all of the above | **音の変化**（発音の変化） | 音韻規則 | |
| the Latin line under Korean | **ローマ字**（ローマ字の読み方） | ルビ, 発音記号 | |
| 어제, 내일, 주말에 | **時を表す言葉** | | |
| 저, 나, 우리 | **代名詞** (人称代名詞 once) | | |
| 그리고, 그래서 | **接続詞** | つなぎ言葉 | |
| -고, -지만, -아/어서 | **連結語尾** | 接続語尾 | 文と文をつなぐ語尾 |
| 좋은 in 좋은 날씨 | **連体形** | 形容詞形, 修飾形 | 名詞を修飾する形 |
| 좀, 혹시 | **クッション言葉** | | 「ちょっと」「もしかして」のように、頼みごとを柔らかくする言葉 |
| ㅂ / ㄹ irregulars | **ㅂ変則 / ㄹ語幹** | 不規則 | |
| tenses | **過去形 / 現在形 / 未来の表現** | | |
| 안, 못, -지 않다 | **否定** (否定形, 不可能) | | |
| question words | **疑問詞** | | |
| rising / falling voice | **イントネーション** | 抑揚 | |
| word order | **語順** | | |
| spacing between words | **分かち書き** | スペース (allowed in gloss) | |
| titles 씨, 님, 오빠 | **呼び方**（呼称） | 敬称 (for 씨 only allowed with a caveat, §4.9) | |

### 3.5 Interface names

The app has a Japanese interface pack (`tools/i18n/ja/ui.json`). Prose names tabs and buttons **exactly as that pack renders them**, in 「」:
- the main tabs: **「今日」「レッスン」「練習」「復習」「記録」**;
- **「読む」** (the Read tab, which holds the drills);
- **デッキ**, **カード**, **「確認」** (Check) and **「次へ」**;
- the romanization toggle **「読み方」**.

Never send the learner to a trainer or drill unless the lead confirms that `features` turns it on for `ja` (spec §7, §10.4). The English `sound-changes` line "open Read and try the 🔀 Sound changes drill" is dropped. The `hangul` line "Tap a letter to replay" may stay as 「文字をタップすると書き順をもう一度再生します。」, because the stroke cells replay when tapped (spec §8.1).

### 3.6 Constraints from the halves format that shape the writing

- **Hangul set-equality (spec §6) counts only Hangul.** `HANGUL_RX` in `tools/halves/lib.js` matches the Hangul Jamo, Compatibility Jamo and Syllables blocks only. This has three consequences:
  - **Kanji, kana and romanization may be added anywhere without a waiver.** Writers should add kanji to Sino-Korean words in notes and lesson prose (`가족（家族）`). This is the single biggest lever of this pair.
  - **Hangul inside a term counts.** 해요体, 합니다体, （반말）, （받침）, 높임말, or a bare 거 cut out of 거예요, each add a run the English string may not have. Check every glossary term and every tag against the English row (§3.4); when in doubt use the kana form. Writers can test a string with `node -e "const L=require('./tools/halves/lib.js');console.log(L.hangulSet('…'))"`.
  - **Extra Korean needs a waiver.** A new Hangul word (준비, 무료, 일본) in a note or body still needs `"_waive":["hangul"]` and a `_note` on that row. For lesson bodies, put both on the `lessons.jsonl` title row.
  - **Set-equality works both ways.** A shorter Japanese body may not drop any Hangul run, any example token, or any ✕/○ pair of the English. "Shorter" in §7 means **less prose around the same Korean**: delete the English-specific explanation, keep every Korean example.
- **Lessons that need `_waive`** (proposed):
  - `hangul`, for the reading guide: ㄲ ㄸ ㅃ ㅆ ㅉ, ㅘ ㅟ ㅢ and the kana-comparison examples.
  - `meet`, only if the 일본 line is shown in the body (§9).
  - Optionally `nouns`, for one cognate table (§4.12) if the lead wants it in a body rather than in the pair layer.

  Card notes do not need a waiver as long as they add kanji only.
- **Deck labels** are progress keys. Translate them once, keep them unique, never 「My phrases」. Do not start a label with "Hangul" or "Pronunciation" (README rule 4). Write 「ハングル・母音」, which starts with katakana, not Latin, so the runtime letter-deck heuristic is unaffected [inference: the check in `validate.js` tests `^Hangul|^Pronunciation` only].
- Dialogue glosses keep the single ` / `. Blanks `__` stay. No braces in glosses. `q p why hint` ≤ 400 characters.
- Never write a space + `on` + letters + `=` in lesson bodies. This is unlikely in Japanese, but romanized examples such as `on = 온` must be written without `=`.
- Only `ko.c` card rows have a `note` field. `ko.s` lesson rows have only a `gloss`, so trap notes for lesson rows go into lesson prose.

## 4. What a Japanese speaker already knows

Each item says where the bridge holds, where it misleads, and how the course uses it. Korean facts come from the English half. Japanese facts and the mappings are [inference] unless a source is given. Japanese example sentences are for the writers. They may go into a lesson body (no Hangul is added by Japanese text), but Korean examples beyond the English row's Hangul need a waiver (§3.6).

### 4.1 Word order, postpositions, dropped subjects: the same system

- **Holds, almost completely:** Korean and Japanese are both SOV. Particles follow the noun. Modifiers precede the noun. The verb ends the sentence. Subjects and objects drop when obvious. Questions keep the word order, and a question word sits where the answer goes (これは何ですか ↔ 이거 뭐예요?). Auxiliary meanings stack after the verb (食べたくない ↔ 먹고 싶지 않다).
- **Use it:** `sov` and `sentences` shrink to a few lines (§7). Never write "Korean is SOV, unlike your language". Write 「語順は日本語とほぼ同じです」 and spend the space on the differences below.
- **Small differences:**
  - 안 and 못 go **before** the verb, while 〜ない goes after it (§4.7).
  - Korean writes **spaces** between words (分かち書き, card ko.c0060), while Japanese writes none. The particle stays attached to its word: 집에 가요, not 집 에 가요.
  - A question in ヘヨ体 is marked by rising intonation only. Japanese adds か. Tell the learner: 「か にあたる語はありません。」

### 4.2 Particles: the map, and where it breaks

| Japanese | Korean | Holds | Misleads |
|---|---|---|---|
| は | 은/는 | topic, contrast, "as for" | 은/는 is **not** used with a question word as subject: 名前は何ですか → 이름이 뭐예요? (s0041 이거 뭐예요? has no particle; ko.c0074 이름이 뭐예요?, s0066 생일이 언제예요?) |
| が | 이/가 | new information, the answer to "who?" (s0129 누가 왔어요? 친구가 왔어요) | 이/가 also marks what one "becomes" (이/가 되다) and what is "not" (이/가 아니에요: 学生**では**ありません → 학생**이** 아니에요) |
| を | 을/를 | objects (s0109–s0113) | **More verbs take 을/를 than take を** (§5.4): 을/를 타다 (に乗る), 을/를 만나다 (に会う), 을/를 좋아하다 (が好き), 을/를 잘하다 (が上手) |
| に (place of existence, destination, time) | 에 | 집에 있어요 (家にいます), 학교에 가요 (学校に行きます), 주말에 (週末に) | に for a **person** (友達にあげる) is 에게 / 한테, not in this course. に with 乗る / 会う / なる is not 에 (§5.4) |
| で (place of action) | 에서 | 카페에서 공부해요 (カフェで勉強します) | で for **means** (バスで) is (으)로 (s0191 왼쪽으로, s0192 명동으로 = toward). で for **cause** is -아/어서 |
| から (from a place) | 에서 | 미국에서 왔어요 (アメリカから来ました) | **에서 = で + から** for places. Japanese splits them; Korean does not. から for time is 부터, not in this course |
| も | 도 | **Identical rule:** replaces は/が/を, stacks after に/で → 에도 / 에서도 (s0153, s0154) | none in this course |
| だけ | 만 | 커피만 (コーヒーだけ); stacks after 에: 주말에만 (週末にだけ / 週末だけ) | 만 + negative ≠ しか〜ない; 커피만 안 마셔요 means "only coffee I don't drink". Mention only if a writer adds it |
| の | 의 | possession, written | **Korean drops it far more** (§4.4) |
| と (and, with) | 하고 / 와·과 (ko.c0400) | 친구하고 (友達と) | |
| より | 보다 | **identical:** バスはタクシーより安い ↔ 버스가 택시보다 싸요 (s0243) | |
| へ (direction) | (으)로 | 왼쪽으로 가세요 (左へ行ってください) | |

- **Use it** [inference]: the `particles` lesson's English opening ("English often translates both as 'at'") becomes one line: 「에 は『に』、에서 は『で』と、ほぼそのまま対応します。」 Then add the two genuine differences: 에서 also means から for places, and に with a few verbs is not 에.
- **Particle drop:** casual Korean drops 을/를 and 이/가 (s0114, s0116, 시간 있어요?), just as casual Japanese drops を and が (ご飯食べた？ ↔ 밥 먹었어요?). One line is enough.

### 4.3 Topic and subject: 은/는 vs 이/가 ≈ は vs が

- **Holds** [inference]: the English half's whole explanation of topic vs subject (`nouns`, `particles`) collapses into 「은/는 は『は』、이/가 は『が』とほぼ同じ使い分けです」. Contrastive は (今日は行きません) ↔ 오늘은 안 가요 holds too.
- **Misleads, three ways:**
  1. Question word as subject or predicate: Japanese puts は on the topic (名前は何ですか); Korean puts 이/가 on it (이름이 뭐예요?). Both are in the half (ko.c0074, ko.c0083 취미가 뭐예요?, s0066).
  2. Having: 私は猫がいます (natural only as 私には猫がいる / 猫を飼っています) vs 저는 고양이가 있어요 (s0052). The は…が frame holds; only the verb differs (§4.5).
  3. 이/가 아니에요 and 이/가 되다 take 이/가 where Japanese uses では / に.

### 4.4 の ↔ 의: mostly dropped in Korean

- **Holds:** the owner comes first in both languages: 友達の家 ↔ 친구 집 (s0036).
- **Misleads:** Japanese needs の between nearly all nouns (日本語の先生, 私の名前, 韓国の料理). Korean usually just puts the nouns side by side (일본어 선생님, 제 이름 (s0037), 한국 요리). A Japanese speaker will over-use 의 [inference; consistent with Takagi & Yun's list of misused particles, which includes ノ, excerpt only].
- **Teach** [inference]: 「の は、韓国語ではほとんど訳しません」. 私の → 제 (polite) / 내 (casual). 의 is pronounced 에 as a particle (ko.c0055).

### 4.5 です / ある・いる ↔ 이에요 / 있어요 / 없어요

| Japanese | Korean | Job |
|---|---|---|
| 学生です | 학생이에요 (s0038) | A = B |
| 学生ではありません | 학생이 아니에요 (s0040) | A ≠ B |
| 家にいます | 집에 있어요 (s0055) | being somewhere (person) |
| トイレはどこにありますか | 화장실이 어디에 있어요? (s0057) | being somewhere (thing) |
| 時間があります | 시간이 있어요 (s0049) | having |
| お金がありません | 돈이 없어요 (s0051) | not having |

- **Holds:** Japanese splits です from ある/いる exactly where Korean splits 이에요 from 있어요. The English opening "English uses 'is' for two jobs" is replaced by this table.
- **Misleads:**
  - **ある and いる both become 있어요**; Korean does not split living from non-living. A learner looking for a separate "いる" will not find one.
  - The honorific of 있다 for a person is 계시다 (いらっしゃる), which comes in `honorific`.
  - **Copula form:** 이에요 after a consonant, 예요 after a vowel. Japanese です never changes, so this is new (`meet`, `nouns`).

### 4.6 こ・そ・あ ↔ 이・그・저

- **Holds:** three-way demonstratives. これ・それ・あれ ↔ 이거・그거・저거; ここ・そこ・あそこ ↔ 여기・거기・저기; この・その・あの ↔ 이・그・저 + noun (s0033–s0035). The English "this / that / that over there" table becomes the Japanese one.
- **Misleads:** the **memory** use [inference]. In conversation, Japanese uses あの for something both speakers know but cannot see (あの店、よかったね); Korean uses **그** there (그 가게 좋았어요), not 저. 저 is only for things in sight. One line in `pronouns-questions`.
- **Bonus trap:** 저 also means "I" (polite), as the English half already notes (저는 vs 저 사람).

### 4.7 Predicates: verbs, adjectives, 하다, tense and aspect

- **Verbs do not change for person** in either language: 行きます ↔ 가요 (s0069). This line can be dropped from `verbbasics`.
- **Adjectives are predicates** in both: 大きい ↔ 커요. The English half's "describing verbs are English adjectives, there is no 'is'" is a long explanation for an English speaker; for a Japanese speaker it is one line: 「韓国語の形容詞は、日本語の形容詞と同じく、そのまま述語になります。」 Korean 形容詞 conjugate like verbs (커요, 컸어요), as Japanese 形容詞 conjugate (大きい, 大きかった).
- **漢語 + する ↔ 漢字語 + 하다:** 勉強する ↔ 공부하다 (false friend: §4.12), 運動する ↔ 운동하다, 料理する ↔ 요리하다, 掃除する ↔ 청소하다, 予約する ↔ 예약하다. **The negation split also matches:** 勉強しない / 勉強をしない ↔ 공부 안 해요 (s0134); 運動しない ↔ 운동 안 해요 (s0135). Japanese speakers already separate the noun from する, which makes the `negation` and `cant` rule (안 / 못 between noun and 해요) easy [inference].
- **な形容詞 ↔ 하다形容詞:** 静かだ ↔ 조용하다, 幸せだ ↔ 행복하다 (ko.c0187), 大丈夫だ ↔ 괜찮다 (not cognate).
- **Tense:** Japanese and Korean both have one past (〜た ↔ -았/었-), and both use the non-past for the near future (明日行きます ↔ 내일 가요). The English line "I ate / I have eaten / I did eat are all 먹었어요" is unnecessary; delete it.
- **Future:** -(으)ㄹ 거예요 ≈ 〜つもりです (plans) and 〜でしょう (guesses) (s0107 맛있을 거예요 ≈ おいしいでしょう).
- **Aspect, where Japanese misleads** ([curriculum convention] for the Korean split: the 小学館『韓日辞典』 says Japanese 〜ている covers both 読んでいる (progressive) and 座っている (resultant state), and that Korean expresses these with -고 있다 and -아/어 있다; for 가다, 가고 있다 is "on the way" or habit and 가 있다 is "has gone and is there" ([JapanKnowledge, 凡例 6](https://japanknowledge.com/contents/skj/hanrei06.html))):

| Japanese 〜ている | Korean | Note [inference] |
|---|---|---|
| 今ご飯を食べています | 지금 밥 먹고 있어요 / 지금 밥 먹어요 | progressive: -고 있다, or the plain present (s0085 지금 뭐 해요?) |
| 結婚しています | **결혼했어요** | state after a change: Korean uses the **past** |
| 知っています | **알아요** | Korean uses the present |
| 東京に住んでいます | 도쿄에 살아요 / 살고 있어요 | both fine |
| 席に座っています | 앉아 있어요 | resultant state: -아/어 있다 |
| 韓国に来ています | 한국에 와 있어요 | resultant state |
| 眼鏡をかけています / 服を着ています | 안경을 쓰고 있어요 / 옷을 입고 있어요 | wearing verbs: -고 있다 for the state |
| 疲れています | 피곤해요 (ko.c0189) | adjective in Korean |
| お腹が空いています | 배고파요 (ko.c0578) | adjective in Korean |

  The course has no -아/어 있다 lesson, and only 지금 … 해요 for the progressive. The writers' job is the warning in `verbs` and `past`: 「『〜ています』をいつも -고 있어요 にしないこと。『結婚しています』は 결혼했어요、『知っています』は 알아요。」 These Korean words are not in those lessons' Hangul, so the warning must be written with Japanese only, or the lesson must be waived (§3.6). The trap deck (§8.2) carries the Korean.

### 4.8 Connecting and modal patterns: near-exact calques

| Japanese | Korean | Lesson | Holds / misleads [inference] |
|---|---|---|---|
| 〜たい | -고 싶다 | `want-like` | holds; but 水**が**飲みたい → 물**을** 마시고 싶어요 |
| 〜が好きだ | 을/를 좋아하다 | `want-like` | **misleads** (§5.4); 이/가 좋아요 (s0175) ≈ 〜がいい |
| 〜て (sequence) | -고 / -아/어서 | `joining` | て covers both; Korean chooses: independent actions -고 (s0215), "go there and do" -아/어서 (s0220) |
| 〜て / 〜ので / 〜から (reason) | -아/어서 | `joining` | holds; reason first in both; -아/어서 never takes the past, while Japanese 忙しかったので does: 바빴어서 ✕ (the English mistake row) |
| 〜けど / 〜が | -지만 | `joining` | holds |
| 〜てもいい | -아/어도 되다 | `have-to`, `requests` | **exact**: 도 = も, 되다 ≈ いい; 가도 돼요? = 行ってもいいですか |
| 〜なくてもいい | 안 -아/어도 되다 | `have-to` | exact: 안 가도 돼요 = 行かなくてもいいです (s0272) |
| 〜なければならない | -아/어야 하다 / 되다 | `have-to` | holds |
| 〜てはいけない / 〜たらだめ | -(으)면 안 되다 | `requests` | holds: 앉으면 안 돼요? ≈ 座ったらだめですか |
| 〜ことができる | -(으)ㄹ 수 있다 | `cant` | **exact**: 수 ≈ こと; 할 수 있어요 = することができます |
| 可能形の否定 (食べられない) | 못 | `cant` | holds; 안 (won't) vs 못 (can't) = 食べない vs 食べられない (s0253, s0254) |
| 〜ましょうか | -(으)ㄹ까요? | `plans` | holds |
| 〜よう / 〜しよう | -자 | `plans` | holds (casual) |
| 〜ませんか / 〜ない？ | -(으)ㄹ래요? / -(으)ㄹ래? | `plans` | holds |
| 〜てください | -아/어 주세요 | `requests` | exact: 주다 = くれる |
| 〜ていただけますか | -아/어 주시겠어요? | `requests` | holds |
| 一番 | 제일（第一） | `compare` | cognate kanji |
| もっと / より少なく | 더 / 덜 | `compare` | holds |
| 知りません / わかりません | 몰라요 / 모르겠어요 | `cant` | **close match**: both pairs contrast "fact" vs "softer, not sure"; 잘 모르겠어요 ≈ よくわかりません (s0262) |
| 連体形 (私が好きな食べ物) | -는 / -(으)ㄴ + noun (제가 좋아하는 음식) | `noun-modifiers` | **exact structure**: no relative pronoun, modifier first. New: Korean changes the ending (크다 → 큰), while Japanese uses the plain form (大きい → 大きいかばん) |

- **Giving and receiving** [inference, partly research-backed]: Japanese has あげる / くれる / もらう. Korean has 주다 for both あげる and くれる, and 받다 for もらう. **〜てもらう / 〜ていただく have no direct Korean equivalent.** Yutani (1991) reports learners writing 가르쳐 받았다 (calque of 教えてもらった) and recommends rephrasing with the giver as subject: 아저씨가 숙제를 가르쳐 주셨다 ([Yutani 1991](https://www.korean.go.kr/nkview/nklife/1991_3/1_8.html)) [practitioner opinion: an essay by a Japanese professor of Korean]. The course has only -아/어 주세요 / 주시겠어요, so this is one warning line in `requests`: 「〜てもらう は、韓国語では『相手が〜てくれる』と言い換えます。」

### 4.9 Politeness and honorifics: the system is familiar, the rules differ

**Speech levels.**

| Japanese | Korean | Note [inference] |
|---|---|---|
| です・ます体 (everyday polite) | **ヘヨ体** | the default; the course's 요-form |
| です・ます in formal settings, announcements, set phrases (〜でございます in part) | **ハムニダ体** | 감사합니다, 죄송합니다, 다음 역은 강남역입니다 (s0194) |
| タメ口 / 普通体 | **パンマル** | friends, younger people |

- **Holds:** a Japanese speaker already knows that one sentence must pick a level and stay there (the English half's "Mixing levels in one sentence" error), and that switching to タメ口 too early is rude. 말 놔도 돼요 ≈ タメ口でいいよ.
- **Misleads:** ハムニダ体 is not "more correct です・ます". In Seoul everyday speech, ヘヨ体 is the normal polite level. Japanese learners who learnt ハムニダ体 first may sound stiff [practitioner opinion, common; unverified].

**Subject honorifics: 尊敬語 ↔ -(으)시- and special verbs.**

| Japanese 尊敬語 | Korean |
|---|---|
| 召し上がる | 드시다 (s0277 맛있게 드세요) |
| お休みになる | 주무시다 (s0278 안녕히 주무세요) |
| いらっしゃる (いる) | 계시다 (s0279 사장님 계세요?) |
| おっしゃる | 말씀하시다 (s0281) |
| お名前 | 성함 (ko.c0247) |
| おいくつ / お年 | 연세 (ko.c0248) |
| お〜になる / 〜られる | -(으)시- (가세요, 앉으세요) |

- **Holds:** Japanese speakers already have "honour the person who acts" (尊敬語) separate from "be polite to the listener" (丁寧語). The English half's careful listener-vs-subject explanation is one line for them: 「요 は丁寧語、시 は尊敬語にあたります。」
- **Never 시 about oneself:** 저는 가세요 ✕ ↔ the Japanese rule never to use 尊敬語 about oneself. This holds.
- **謙譲語 has only a small Korean counterpart** in this course: 드리다 (잘 부탁드립니다, 연락드립니다), 저 / 제, 말씀 드리다. Do not invent a 謙譲語 system in the explanation [inference].

**絶対敬語 vs 相対敬語: the classic error** [practitioner opinion, Yutani 1991]:
- Yutani quotes the common view, 「일본어는 경어 사용법이 상대적이고, 한국어는 경어 사용법이 절대적이다」, and qualifies it: Korean has a relative device too, 압존법, but Japanese relativity is far stronger. Japanese treats the in-group (one's family and company) as lower than any outsider, even one's own parent or boss.
- His example: to a visitor, a Korean says 아버님은 지금 집에 안 계십니다, honouring their own father. In Japanese that would be 父は今おりません, and respectful forms about one's own family sound wrong to a Japanese ear (Yutani 1991).
- **Wrong → right for a Japanese learner** [inference from Yutani]:
  - 아버지는 지금 없어요 (to a caller) → 아버지는 지금 안 계세요.
  - At work, to a client: 부장은 지금 없습니다 (from 部長の田中は席を外しております) → 부장님은 지금 안 계십니다.
- **Where to teach it:** `honorific` (family) and `office` (titles). Both need **more** text than the English, which does not mention it at all. Use only Hangul those lessons already have (계세요 / 계시다, 사장님, 부장님) or a waiver.

**"You", names and titles.**
- **あなた ↔ 당신: an exact bridge.** Both languages avoid the word for a real person in front of you. The English half's "Korean avoids 'you'" is natural to a Japanese speaker: 「日本語で『あなた』をあまり使わないのと同じです。」
- **씨 ≠ さん** [inference; the English half's titles lesson]: さん works for almost anyone, including superiors (in many companies) and customers. 씨 is for peers and juniors, never for someone clearly older or senior, and never after one's own name. A surname alone + 씨 (김 씨) can sound condescending [practitioner opinion, common; unverified]. **So "씨 = さん" must never be taught.** Write: 「씨 は『さん』に似ていますが、目上の人には使いません。」
- **님 ≈ 様, and job title + 님:** 사장님 (社長 + 様 ≈ 社長), 선생님, 고객님 (≈ お客様). Japanese uses 部長 bare; Korean adds 님 (부장님) [inference].
- **선배 / 후배 = 先輩 / 後輩**: an exact cognate and concept. 선배 is also the Korean level title ko.t05.
- **오빠 / 형 / 언니 / 누나** have no Japanese equivalent. お兄さん / お姉さん are close but are not used this way between friends. The choice depends on the speaker's gender.
- **우리 ↔ うち:** うちの母 ↔ 우리 엄마 (s0061), うちの会社 ↔ 우리 회사. **Exact bridge** for the "우리 means my for home and family" line.
- **저 / 나 ↔ わたし（わたくし）/ 僕・俺・あたし:** Japanese also picks "I" by register. 저 ≈ わたし・わたくし, 나 ≈ 僕・俺・あたし. Korean has one casual 나 for everyone.

### 4.10 Two number systems: same idea, different jobs

- **Japanese:** native ひとつ〜とお (only to 10, and rare beyond small counts); 漢語 いち, に, さん … for almost everything, including most counters (三個, 三枚, 三杯, 三本, 三人 except ひとり / ふたり), clock hours (三時), minutes, money and age (二十五歳, except はたち).
- **Korean:** native 하나〜아흔아홉 for counting things with counters, **hours** and **age**; Sino-Korean for money, minutes, dates, phone numbers and floors (English `numbers` lesson).

| Use | Japanese | Korean | Bridge |
|---|---|---|---|
| counting with a counter | 漢語 (コーヒー三杯, りんご三個) | **native** (커피 세 잔, 사과 세 개) | **breaks**: 삼 잔 ✕ |
| hours | 漢語 (三時) | **native** (세 시) | **breaks**: 삼 시 ✕ |
| minutes | 漢語 (三十分) | Sino (삼십 분) | holds |
| age | 漢語 (二十五歳) | **native** (스물다섯 살) | **breaks**: 이십오 살 ✕ |
| money | 漢語 (五万円) | Sino (오만 원) | holds |
| large numbers | **万** grouping (五万) | **만** grouping (오만) | **holds exactly**: the English "Korean groups by 10,000, not 1,000" warning is unnecessary |
| dates, floors, line numbers, exits | 漢語 (三階, 二号線, 四番出口) | Sino (3층, 2호선, 4번 출구) | holds, and the counters are cognates (§4.11) |

- **The Sino numbers sound alike** [inference]: 일 いち, 이 に, 삼 さん, 사 し, 오 ご, 육 ろく, 칠 しち, 팔 はち, 구 く, 십 じゅう, 백 ひゃく, 천 せん, 만 まん. Point this out once; it makes the Sino set free. Both cultures also avoid 4 (사 / し sound like 死) [practitioner opinion, common; unverified].
- **Use it:** rewrite `numbers` around 「日本語にも2系統あります。でも、使い分けが違います。」, with the three breaks in bold: counters, hours, age.

### 4.11 Counters: 助数詞 already exist

- **Holds:** Japanese has 助数詞 and puts noun + number + counter in the same order: コーヒーを2杯ください ↔ 커피 두 잔 주세요 (s0177). The English "like 'two cups of coffee' in English, except it's mandatory" framing is unnecessary.
- **Many counters are cognates** [inference]:

| Korean | Kanji | Japanese |
|---|---|---|
| 개 | 個 | 個 |
| 명 | 名 | 名 (formal; 人 everyday) |
| 분 | (honorific "person") | 名様 / 方 |
| 잔 | 盞 | 杯 |
| 병 | 甁 | 本 (瓶 for the object) |
| 권 | 卷 | 冊 |
| 장 | 張 | 枚 |
| 번 | 番 | 回 (times) / 番 (number) |
| 시간 | 時間 | 時間 |
| 층 | 層 | 階 |
| 살 | native | 歳 |
| 마리 | native | 匹 / 頭 |

- **Misleads:** the number in front is **native** in Korean (세 잔) but 漢語 in Japanese (三杯). This is the single most frequent number error to expect [inference]. 번 is a native-number counter for "times" (세 번 = 三回) but takes Sino numbers for "number" (사 번 / 4번 출구 = 四番出口).

### 4.12 漢字語: the biggest vocabulary bridge

Roughly half or more of Korean vocabulary is Sino-Korean, and most everyday Sino-Korean words have a Japanese cognate written with the same kanji in the same order [inference: widely stated; no count opened]. Kim (2010) describes regular correspondences between Japanese on'yomi and Korean readings for initial and final consonants, with few exceptions to the main rules ([Kim 2010, 筑波学院大学紀要 5](https://japan-iu.ac.jp/library/kiyou/2010/06KIM.pdf)) [research-backed (descriptive)].

#### 4.12.1 Twenty correspondence rules

Rules 1–14 follow Kim (2010) [research-backed (descriptive)]. Rules 15–20 and the choice of examples are [inference]. All examples were checked by the author's knowledge only (§10).

**Finals (パッチム)**
1. **〜く・〜き → ㄱ**: 学 がく 학, 薬 やく 약, 食 しょく 식, 駅 えき 역, 劇 げき 극. Exceptions are rare (Kim: 副 부).
2. **〜ち・〜つ → ㄹ**: 一 いち 일, 八 はち 팔, 日 にち 일, 月 げつ 월, 発 はつ 발, 室 しつ 실.
3. **〜ん → ㄴ or ㅁ**: 安 あん 안, 館 かん 관, 山 さん 산 / 暗 あん 암, 感 かん 감, 三 さん 삼, 音 おん 음. Kim: which one applies must be learnt word by word. ㅇ is rare (瓶 びん 병).
4. **〜い・〜う (long vowels) → ㅇ**: 生 せい 생, 京 きょう 경, 東 とう 동, 王 おう 왕, 中 ちゅう 중.
5. **…but some long vowels → no final**: 高 こう 고, 小 しょう 소, 校 こう 교, 教 きょう 교. A Japanese long vowel can be ㅇ or nothing.
6. **〜う / 〜つ that were 〜ふ in old kana → ㅂ**: 業 ぎょう (げふ) 업, 入 にゅう (にふ) 입, 十 じゅう (じふ) 십, 急 きゅう (きふ) 급, 雑 ざつ 잡, 接 せつ 접.
7. **Open syllables stay open**: 家 か 가, 気 き 기, 地図 ちず 지도, 図 ず 도.

**Initials (初声)**

8. **あ行 → ㅇ (silent)**: 安 안, 意 い 의, 音 음.
9. **か・が行 → ㄱ, and often ㅎ**: 家 가, 気 기 / 下 か 하, 夏 か 하, 海 かい 해, 会 かい 회, 化 か 화, 火 か 화. Japanese か in 〜か / 〜かい is frequently Korean 하 / 해 / 화 / 회.
10. **は・ば行 → ㅂ / ㅍ, never ㅎ**: 百 ひゃく 백, 発 はつ 발, 品 ひん 품, 法 ほう 법. **ば行 also → ㅁ**: 美 び 미, 無 む 무, 文 ぶん 문, 物 ぶつ 물.
11. **ま行 → ㅁ**: 毎 まい 매, 名 めい 명, 木 もく 목. Kim: without exception.
12. **な行 → ㄴ, dropped before ㅣ / y at the start of a word**: 南 なん 남, 年 ねん 년; 女 にょ → 여 (女子 여자), 二 に → 이.
13. **ら行 → ㄹ; at the start of a word → ㄴ or silent** (頭音法則): 料理 りょうり 요리, 旅行 りょこう 여행, 理解 りかい 이해, 連絡 れんらく 연락, 来日 らいにち 내일 (!), 労働 ろうどう 노동. Inside a word ㄹ stays: 地理 지리, 道路 도로.
14. **た・だ行 → ㄷ / ㅌ / ㅈ / ㅊ, and a few → ㄴ**: 大 だい 대, 地 ち 지, 茶 ちゃ 차, 天 てん 천; 男 だん 남, 努 ど 노 (Kim). ず sometimes → ㄷ: 頭痛 ずつう 두통.

**Further patterns (author's inference)**

15. **さ・ざ行 → ㅅ / ㅈ / ㅊ**: 山 산, 社 しゃ 사, 車 しゃ 차, 自 じ 자, 時 じ 시. Kim also lists these, with exceptions both ways.
16. **〜えい / 〜ょう → 〜ㅕㅇ / 〜ㅓㅇ / 〜ㅐㅇ**: 名 めい 명, 京 きょう 경, 生 せい 생, 静 せい 정.
17. **わ → 화**: 話 わ 화, 和 わ 화 (電話 전화, 平和 평화).
18. **Two-kanji words keep their order**: 約束 약속, 準備 준비, 家族 가족, 運動 운동.
19. **Some kanji differ**: Korean 미국 is 美國 (Japanese 米国). 일본 = 日本, 영어 = 英語, 원 = 圓, the old form of 円 (§4.12.3).
20. **漢語 + する → 漢字語 + 하다** (§4.7), and **漢語 + な / 的 → 漢字語 + 하다 / 적**: 幸福だ 행복하다; 基本的 기본적 [inference].

**How to use the rules** [inference]: as a guessing aid, not a derivation. Writers put the kanji next to the Korean at first mention (`약국（薬局）`). Card notes may add the rule in a few words: 「薬 やく → 약：〜く は ㄱ」. Do not teach the rule list as a lesson. The pair-layer lesson (§8.1) shows six rules with examples only.

#### 4.12.2 Sixty high-frequency cognates that are in this course

All ids are rows of the Korean half, so writers can attach the kanji in the card note or the lesson gloss without a waiver. Kanji are given in Japanese 新字体. Korean uses traditional forms, but learners need the Japanese ones. "kun" means Japanese reads the same kanji with a native reading, so the meaning transfers but the sound does not.

| # | Korean | Kanji | Japanese | Id |
|---|---|---|---|---|
| 1 | 학생 | 学生 | がくせい | s0038 |
| 2 | 학교 | 学校 | がっこう | ko.c0264 |
| 3 | 선생님 | 先生 | せんせい | ko.c0615 |
| 4 | 가족 | 家族 | かぞく | ko.c0613 |
| 5 | 약속 | 約束 | やくそく | s0203 (also = 予定, §4.12.3) |
| 6 | 시간 | 時間 | じかん | ko.c0607, s0049 |
| 7 | 주말 | 週末 | しゅうまつ | s0104 |
| 8 | 매일 | 毎日 | まいにち | ko.c0606 |
| 9 | 월요일 | 月曜日 | げつようび | ko.c0601 |
| 10 | 금요일 | 金曜日 | きんようび | ko.c0602 |
| 11 | 토요일 / 일요일 | 土曜日 / 日曜日 | どようび / にちようび | ko.c0603 |
| 12 | 오전 / 오후 | 午前 / 午後 | ごぜん / ごご | ko.c0151, ko.c0150 |
| 13 | 도서관 | 図書館 | としょかん | ko.c0261 |
| 14 | 박물관 | 博物館 | はくぶつかん | ko.c0262 |
| 15 | 병원 | 病院 | びょういん | ko.c0265 |
| 16 | 약국 | 薬局 | やっきょく | ko.c0266 |
| 17 | 은행 | 銀行 | ぎんこう | ko.c0267 |
| 18 | 시장 | 市場 | いちば / しじょう | ko.c0270 |
| 19 | 백화점 | 百貨店 | ひゃっかてん | ko.c0271 |
| 20 | 공원 | 公園 | こうえん | ko.c0273 |
| 21 | 화장실 | 化粧室 | けしょうしつ | ko.c0276 |
| 22 | 지하철 | 地下鉄 | ちかてつ | ko.c0588 |
| 23 | 공항 | 空港 | くうこう | ko.c0591 |
| 24 | 출구 / 입구 | 出口 / 入口 | でぐち / いりぐち (kun) | ko.c0376 |
| 25 | 횡단보도 | 横断歩道 | おうだんほどう | ko.c0374 |
| 26 | 신호등 | 信号灯 | しんごう（とう） | ko.c0375 |
| 27 | 직진 | 直進 | ちょくしん | ko.c0379 |
| 28 | 동 / 서 / 남 / 북 | 東西南北 | とうざいなんぼく | ko.c0372 |
| 29 | 운동 | 運動 | うんどう | ko.c0278 |
| 30 | 요리 | 料理 | りょうり | ko.c0280 |
| 31 | 여행 | 旅行 | りょこう | ko.c0281 |
| 32 | 음악 | 音楽 | おんがく | s0020 |
| 33 | 영화 | 映画 | えいが | ko.c0348 |
| 34 | 사진 | 写真 | しゃしん | ko.c0343 |
| 35 | 취미 | 趣味 | しゅみ | ko.c0277 |
| 36 | 독서 | 読書 | どくしょ | ko.c0279 |
| 37 | 등산 | 登山 | とざん | ko.c0289 |
| 38 | 산책 | 散策 | さんさく | ko.c0332 |
| 39 | 청소 | 清掃 | せいそう (掃除 everyday) | ko.c0340 |
| 40 | 회사원 | 会社員 | かいしゃいん | ko.c0081 |
| 41 | 회의 | 会議 | かいぎ | ko.c0544 |
| 42 | 보고서 | 報告書 | ほうこくしょ | ko.c0552 |
| 43 | 휴가 | 休暇 | きゅうか | ko.c0555 |
| 44 | 발표 | 発表 | はっぴょう | ko.c0558 |
| 45 | 확인 | 確認 | かくにん | ko.c0546 |
| 46 | 예약 | 予約 | よやく | ko.c0097 |
| 47 | 교환 | 交換 | こうかん | ko.c0126 |
| 48 | 할인 | 割引 | わりびき (kun) | ko.c0125 |
| 49 | 계약서 | 契約書 | けいやくしょ | ko.c0241 |
| 50 | 보험 | 保険 | ほけん | ko.c0222 |
| 51 | 처방전 | 処方箋 | しょほうせん | ko.c0219 |
| 52 | 기분 | 気分 | きぶん | ko.c0186 |
| 53 | 행복 | 幸福 | こうふく | ko.c0187 |
| 54 | 긴장 | 緊張 | きんちょう | ko.c0190 |
| 55 | 감사 | 感謝 | かんしゃ | ko.c0062 |
| 56 | 연락 | 連絡 | れんらく | s0028, ko.c0571 |
| 57 | 의사 | 医師 | いし | s0039 |
| 58 | 우유 | 牛乳 | ぎゅうにゅう | ko.c0314 |
| 59 | 야채 | 野菜 | やさい | ko.c0306 |
| 60 | 이해 | 理解 | りかい | ko.c0089 |

Also in the half: 한국어 韓国語 (s0019), 사장 社長 (s0195), 운전 運転 (s0294), 비밀번호 秘密番号 (ko.c0095), 충전기 充電器 (ko.c0116), 영수증 領収証 (ko.c0123), 해산물 海産物 (ko.c0309), 계란 鶏卵 (ko.c0307), 분리수거 分離収去 (ko.c0232; Japanese says 分別収集), 근처 近処 (ko.c0370; Japanese 近所), 제일 第一 (s0249), 선배 先輩 (title ko.t05), 달인 達人 (ko.t12), 사범 師範 (ko.t16).

**Useful cognates not in the half** (a waived body or the pair layer only): 준비 準備, 무료 無料, 친절 親切, 문제 問題, 전화 電話, 일본 日本, 도쿄 東京 (a loan, not Sino), 경제 経済, 대학 大学, 숙제 宿題, 질문 質問.

#### 4.12.3 False friends (同形異義語)

| Korean | Kanji | Korean meaning | Japanese meaning | In half? | Evidence |
|---|---|---|---|---|---|
| 공부 | 工夫 | study | devising, ingenuity (くふう) | ko.c0328, s0014, s0074 | [practitioner opinion] [Segye 2019](https://www.segye.com/newsView/20190821510863); [note.com 2024](https://note.com/710531/n/nc3d946f6bfe9) |
| 내일 | 来日 | tomorrow | visiting Japan (らいにち) | ko.c0597 | [inference] |
| 애인 | 愛人 | boyfriend / girlfriend, sweetheart | extramarital lover | no | [practitioner opinion] note.com 2024 |
| 팔방미인 | 八方美人 | someone good at everything (praise) | someone who flatters everyone (criticism) | no | [practitioner opinion] note.com 2024 |
| 대장부 | 大丈夫 | a manly, brave man | "It's all right" | no | [practitioner opinion] note.com 2024 |
| 인간 | 人間 | (in speech) a person, often disparaging | ordinary word for human | no | [practitioner opinion] note.com 2024 |
| 퇴사 | 退社 | quitting the company | leaving the office for the day (or quitting) | no (퇴근 is) | [practitioner opinion] note.com 2024 |
| 약속 | 約束 | promise, **and plans / an appointment** (약속 있어 = 予定がある) | promise, appointment | s0203 | [inference] |
| 계산 | 計算 | calculation, **and paying the bill** (계산해 주세요 = お会計お願いします) | calculation | ko.c0580, s0184, s0195 | [inference] |
| 포장 | 包装 | packaging, **and takeaway** (포장이요 = 持ち帰りで) | packaging | ko.c0134, ko.c0581 | [inference] |
| 생수 | 生水 | bottled mineral water | unboiled water (なまみず) | ko.c0317 | [inference] |
| 음료수 | 飲料水 | soft drink | drinking water | ko.c0311 | [inference] |
| 식당 | 食堂 | any restaurant | canteen, cafeteria | ko.c0269 | [inference] |
| 사장님 | 社長 | company president, **and any shop owner** (used to address staff in small shops) | company president | s0195 | [inference] |
| 대리 | 代理 | assistant manager (job title) | substitute, agent | `office` body | [inference] |
| 회식 | 会食 | team dinner and drinks (≈ 飲み会) | formal meal | ko.c0551 | [inference] |
| 남자 / 여자 | 男子 / 女子 | man / woman (adults too) | boys / girls, mainly school and sports | ko.c0616 | [inference] |
| 인정 | 認定 | (slang) "respect, fair enough" | official recognition | ko.c0465 | [inference] |
| 고생 | 苦生 | hardship (고생했어 ≈ お疲れ) | (not a Japanese word; 苦労) | ko.c0472 | [inference] |
| 미국 | 美国 | America | (Japanese writes 米国) | ko.c0077 | [inference] |

**Teach** [inference]: in card notes, one line per false friend: 「공부（工夫）は『勉強』の意味です。日本語の『工夫』とは違います。」 The pair-layer deck (§8.2) collects them.

### 4.13 Other things a Japanese speaker brings (all [inference])

- **Syllable blocks:** kana are syllabic and Hangul is an alphabet assembled into syllable blocks. The learner already reads "one character = one syllable", which suits Hangul blocks. The warning is that a block is not one 拍: 한국 is two syllables but four 拍 in katakana (ハ・ン・グ・ク). This matters for rhythm (§6).
- **Vowel length:** Korean has no long / short contrast in Seoul speech. Japanese learners should not lengthen 서울 into ソウル with a long ウ, or 도쿄 into トーキョー. Korean writes 도쿄, with no length mark.
- **Pitch:** Japanese has pitch accent and Seoul Korean has no word pitch. Advise even syllables and a final rise or fall.
- **Sentence-final particles:** ね, よ, な have partial Korean matches (-네요 / -죠, -거든요). Only 날씨가 좋네요 (ko.c0564) is in the course. Gloss -네요 as 〜ですね there and do not add ね to other glosses.
- **Interjections and fillers:** 아이고 ≈ あらまあ / やれやれ; 헐 ≈ えっ / うそ; 대박 ≈ すごい / やばい. Glosses only.
- **Food and table manners:** 잘 먹겠습니다 = いただきます and 잘 먹었습니다 = ごちそうさまでした are exact. Pouring for others (お酌) is shared. Turning away from seniors to drink, and never pouring one's own, are the new parts.

## 5. Error zones of Japanese speakers in Korean, ranked

**How the list is ranked** [inference]:
1. Items with data on Japanese learners come first.
2. Then items that occur in nearly every sentence and can be tested in this course's practice.
3. Lesson-local traps come last.

Sounds rank highest because they are the best-evidenced and because Japanese gives no help there. Grammar traps rank below them even though they are frequent, because the course's examples already model the right forms.

### 5.1 Plain vs aspirated vs tense consonants

- **Wrong → right:**
  - 커피 said with a tight, airless k, which sounds like 꺼피.
  - 타요 heard and said like 따요.
  - 파 vs 빠 confused.
  - 가방 *gabang* read with a voiced initial g ("ガバン") from the romanization.
  - 쌀 (rice) said like 살.
- [research-backed] arXiv 2306.10821 (2023), automatic transcription of L2 Korean read speech, **170 Japanese speakers** (3 beginner, 27 intermediate, 140 advanced). Japanese was the L1 with the most L1-specific error patterns (18 significant).
  - ㅍ was accurate in 51.22% of cases (average across five L1s: 70.70%) and replaced by tense ㅃ in 20.72% (average 7.33%).
  - ㅌ: 44.40% accurate (average 62.24%), → ㄸ 20.51% (average 5.99%).
  - ㅋ: 54.21% accurate (average 70.20%), → ㄲ 31.15% (average 12.74%).
  - The discussion names "consistent tensification of aspirated stops, alongside the tendency to substitute aspirated stops to plain" ([arXiv 2306.10821](https://arxiv.org/html/2306.10821v1)).
- [research-backed] Jo, Kim & Kim (2008), **16 Japanese women** (marriage migrants, mean age 42.5) vs 10 Korean women. The Japanese group's **tense** stops had far longer VOT than the Koreans': ㅃ 41.64 vs 17.51, ㄸ 28.43 vs 10.47, ㄲ 40.53 vs 19.41. Their **aspirated** stops had shorter VOT: ㅋ 41.33 vs 55.83, ㅍ 53.80 vs 58.89 (all significant). The two series converged in the middle ([Jo, Kim & Kim 2008](https://koreascience.kr/article/JAKO200833338919695.pdf)). VOT units were not stated in the fetched text; ms is the convention.
- [research-backed] Nam (2002), **8 Japanese speakers**, perception. They discriminated aspirated from tense well, but had significant difficulty telling **plain** from the other two. Plain ㄱ ㄷ ㅂ ㅈ were often heard as aspirated, and aspirated and tense were often heard as plain. Tense ㅆ was heard as plain ㅅ ([Nam 2002, 언어청각장애연구 7(1)](https://scholar.kyobobook.co.kr/article/detail/4010023096654)) [abstract only; no rates given].
- **Design consequence:**
  - The reading guide (§6.1) gives three instructions and no claim of equivalence.
  - 激音: push the breath out, with a hand in front of the mouth, and do not hold back.
  - 濃音: a small っ before the sound and a tight throat, with no breath (아빠 ≈ アッパ). This is a common Japanese teaching device [practitioner opinion; no opened source].
  - 平音: unvoiced and weakly breathy at the start of a word (≈ カ・タ・パ・チャ), voiced between vowels.
  - The minimal-pair cards (ko.c0044–ko.c0048) get Japanese notes built on these three instructions.
  - Because arXiv shows aspirated → tense as the dominant production error, the 激音 instruction carries the warning 「激音を濃音で言わないように」.

### 5.2 Patchim: ㅇ → ㄴ, three targets for ん, added vowels

- **Wrong → right:**
  - 강 *gang* said as 간 (カン).
  - 방 vs 반 vs 밤 not kept apart.
  - 밥 said "バプ" (bap + vowel).
  - 학교 said "ハクキョ" with a vowel after ㄱ.
  - 물 said "ムル".
- [research-backed] arXiv (2023): final ŋ (ㅇ) was accurate in only 55.22% of cases (average 82.67%) and replaced by n in 31.22% (average 10.10%, p < .001). The Japanese group also inserted a ㅡ-like vowel after codas (8.98% vs an average of 0.07%) and a flap-type segment (10.43% vs 1.17%). The authors relate this to "syllable-based constraints with the tendency to open-syllabification".
- [research-backed] Jo, Kim & Kim (2008): the Japanese group replaced final ㅇ with ㄴ "in nearly all cases", which the authors attribute to Japanese having a single moraic nasal. They also report initial ㄹ distorted.
- [research-backed (abstract only)] Hong, Ryu & Chung (2014), **24 Japanese learners**, read speech: phoneme substitutions and vowel insertions correlated very strongly with Korean raters' pronunciation scores ([Hong, Ryu & Chung 2014](https://koreascience.kr/article/JAKO201403359905317.page?&lang=ko)). Insertions are not cosmetic: they drive how Koreans judge the speaker.
- **Design consequence:** the 「ん」 three-way device (あんない / さんま / りんご, §6.1) [practitioner opinion, common; inference] and the 「っ」 device for unreleased k, t, p. Card notes for ko.c0039–ko.c0043 and ko.c0053 use them.

### 5.3 Vowels: ㅓ → ㅗ, ㅜ → ㅡ, flattened diphthongs

- **Wrong → right:**
  - 서울 with ㅗ ("ソウル").
  - 어 / 오 and 거 / 고 merged.
  - 우유 said with an unrounded Japanese ウ, which sounds like 으유.
  - 과일 said as 가일.
  - 위 said as 이.
  - 돼요 said as 데요.
- [research-backed] arXiv (2023):
  - ㅓ was 66.99% accurate (average 81.78%) and → ㅗ in 25.58% (average 10.46%).
  - ㅜ was 64.03% accurate (average 77.79%) and → ㅡ in 24.72% (average 7.08%).
  - Diphthongs were reduced to monophthongs: ㅘ → ㅏ 14.58% (average 3.96%), ㅙ / ㅞ → ㅔ 26.69% (average 9.42%), ㅟ → ㅣ 32.05% (average 11.49%).
- [research-backed] Jo, Kim & Kim (2008), Japanese group vs Koreans:
  - ㅓ F1 502 vs 711 Hz (too closed);
  - ㅗ F2 1,605 vs 1,101 and ㅜ F2 1,422 vs 992 (both too front, which fits an unrounded Japanese ウ / オ);
  - ㅡ only marginal (p < .10);
  - ㅔ and ㅐ both differed in F1, and ㅏ F1 differed;
  - ㅣ did not differ.
- **ㅐ / ㅔ are not an error zone for meaning.** They sound the same in modern Seoul speech (ko.c0056). Say so and move on.
- **Design consequence:**
  - ㅓ and ㅗ are both 「オ」 in kana, so the guide says it outright: 「ㅓ は口を大きく開けたオ、ㅗ は唇を丸めたオ」.
  - ㅜ and ㅡ: 「日本語のウは ㅜ と ㅡ の中間」. Round for ㅜ, spread for ㅡ.
  - Diphthongs: 「w をはっきり」.

### 5.4 Verbs whose particle differs from Japanese

- **Wrong → right** [inference: contrastive; Takagi & Yun name particles among the areas of "conspicuous" L1 interference in Japanese learners' Korean compositions, but the readable excerpt gives no examples or counts ([Takagi & Yun, Kanagawa University](https://kanagawa-u.repo.nii.ac.jp/record/13708/files/05%20%E6%97%A5%E9%9F%93%E4%B8%A1%E8%A8%80%E8%AA%9E%E3%81%AE%E5%AD%A6%E7%BF%92%E8%80%85%E3%81%AE%E4%BD%9C%E6%96%87%E3%81%AB%E3%81%BF%E3%82%89%E3%82%8C%E3%82%8B%E6%AF%8D%E8%AA%9E%E5%B9%B2%E6%B8%89%E3%81%AE%E8%AB%B8%E7%9B%B8.pdf))]:

| Japanese | Learner's Korean ✕ | Korean ○ | In half? |
|---|---|---|---|
| バスに乗る | 버스에 타요 | 버스를 타요 | only 자전거 타요 (ko.c0335, no particle) |
| 友達に会う | 친구에 만나요 / 친구에게 만나요 | 친구를 만나요 | s0223 친구를 만났어요, ko.c0341 친구 만나요 |
| コーヒーが好きだ | 커피가 좋아해요 | 커피를 좋아해요 | s0173, `want-like` mistake row |
| 先生になる | 선생님에 돼요 | 선생님이 돼요 | no |
| 父に似ている | 아버지에 닮았어요 | 아버지를 닮았어요 | no |
| 韓国語が上手だ / 分かる | 한국어가 잘해요 | 한국어를 잘해요 | s0258 한국어 할 수 있어요? (no particle) |
| 水が飲みたい | 물이 마시고 싶어요 | 물을 마시고 싶어요 | s0168 커피를 마시고 싶어요 |
| 学生ではありません | 학생에서 아니에요 | 학생이 아니에요 | s0040 |

- **Design consequence:** the `sov` lesson ("the object marker") and `want-like` carry one line each: 「日本語の『〜に乗る』『〜に会う』『〜が好き』は、韓国語では 을/를 です。」 Only Hangul already in those bodies may appear. 좋아해요 is in `want-like`. 타요 and 만나요 are not in `sov`, so write them in Japanese only, or waive. The trap deck (§8.2) carries the Korean.

### 5.5 Honorifics: 絶対敬語, 시 about oneself, 〜てもらう

- **Wrong → right** [practitioner opinion, Yutani 1991; inference for the specific sentences]:
  - To a caller, about one's own father: 아버지는 지금 없어요 → 아버지는 지금 안 계세요.
  - To a client, about one's own boss: 부장은 자리에 없습니다 → 부장님은 자리에 안 계십니다.
  - 선생님한테 가르쳐 받았어요 (calque of 教えてもらった) → 선생님이 가르쳐 주셨어요.
  - Yutani also lists negated honorifics (안 가십니까 vs 가지 않으십니까), and tense / level order calqued from Japanese (갑니었다 for 갔습니다, from ました). Both are outside this course.
- 저는 가세요 → 저는 가요 is the English half's own mistake row. The Japanese rule (no 尊敬語 about oneself) already prevents it, so it ranks low.
- **Where:** `honorific`, `office`, `titles`. All three get **more** text than the English (§7).

### 5.6 〜ている mapped to -고 있어요

- **Wrong → right** [inference; the Korean split itself is curriculum convention per 小学館『韓日辞典』 凡例 6]:
  - 결혼하고 있어요 → 결혼했어요.
  - 알고 있어요 (as plain "I know") → 알아요. 알고 있어요 exists, but it means "I am aware".
  - 앉고 있어요 → 앉아 있어요.
  - 피곤하고 있어요 → 피곤해요.
- The course does not drill -아/어 있다, so the main risk is learners producing -고 있어요 everywhere once they learn it. The warning goes into `verbs` and `past` (§4.7, §7).

### 5.7 Numbers and counters

- **Wrong → right:**
  - 삼 시 → 세 시 (from 三時).
  - 이십오 살 → 스물다섯 살 (from 二十五歳).
  - 커피 삼 잔 → 커피 세 잔 (from コーヒー三杯).
  - 사과 삼 개 → 사과 세 개.
  - 하나 개 → 한 개.
- [inference] Japanese uses 漢語 numbers with almost every counter, with hours and with age, and these are exactly the uses where Korean takes native numbers (§4.10). The English half's own number mistakes (삼 시 ✕, 하나 개 ✕) are therefore **more** likely for this learner. 오십천 원 ✕ is less likely, because Japanese groups by 万.

### 5.8 の → 의, and は → 은/는 with question words

- **Wrong → right:**
  - 저의 이름은 → 제 이름은.
  - 일본어의 선생님 → 일본어 선생님.
  - 한국의 음식 → 한국 음식.
  - 이름은 뭐예요? → 이름이 뭐예요?
  - 생일은 언제예요? → 생일이 언제예요?
- [inference] §4.3, §4.4. Low cost: the half's example rows already show the right forms (s0037 제 이름, ko.c0074, s0066). Writers point at them.

### 5.9 漢字語: false friends and invented readings

- **Wrong → right:**
  - 공부 understood as 工夫.
  - 내일 misread as 来日.
  - "I'm going home from work" said with 퇴사 (from 退社) → 퇴근해요.
  - Invented Sino readings for Japanese 漢語 that Korean does not use: 면강 (from 勉強) → 공부; 대장부 (from 大丈夫) → 괜찮아요; 고로 (from 苦労) → 고생.
- [practitioner opinion] the false-friend sets in Segye (2019) and note.com (2024); [inference] the invented-reading pattern follows from the correspondence rules working too well.
- **Design consequence:** false-friend notes on the cards (§4.12.3). In the pair-layer lesson (§8.1), say 「規則で読める言葉が多い一方で、韓国語にない漢語や意味の違う言葉もあります」.

### 5.10 Writing details (low priority in this course)

- **Spacing:** 집에가요 / 한국어공부해요 → 집에 가요 / 한국어 공부해요. Japanese writes no spaces [inference]. Card ko.c0060 covers it.
- **이에요 / 예요 after Japanese names:** 다나카이에요 → 다나카예요; 켄예요 → 켄이에요. The learner must look at the last Hangul block, exactly as the English half says for Mike / Juan. **Use Japanese names in the prose** (§9.2).
- **Japanese names in Hangul** follow the Korean loanword rules for Japanese:
  - word-initial か・た → ㄱ・ㄷ: 田中 다나카, 東京 도쿄;
  - medial か・た → ㅋ・ㅌ: 다나카;
  - つ → 쓰, ん → ㄴ, っ → ㅅ (北海道 홋카이도);
  - no long vowels (東京 도쿄, 大阪 오사카).

  [inference: Korean 외래어 표기법 for Japanese; the official page was not opened, §11]. Learners are often surprised that 田中 starts with 다, not 타.

### 5.11 Rhythm, length and pitch

- [inference] Japanese mora timing makes learners count パッチム as a beat (한국 → ハ・ン・グ・ク). They may also lengthen vowels and carry over pitch accent. Not measured in the opened studies beyond vowel insertion (§5.2). The reading guide gives 「1文字＝1拍」 and 「長い音はない」.

## 6. Pronunciation aid: how a Japanese reader reads the romanization

**What the Korean half prints.** Every Korean line carries Revised Romanization (RR) in `rom`. It is shared by every course and cannot be edited (spec §5). RR spells pronunciation, not letters: the English `sound-changes` lesson says "The romanization in this app mostly follows how words sound (tensed consonants are not shown)". So 감사합니다 appears as *gamsahamnida* and 좋아요 as *joayo*.

**House rule: keep RR, add no katakana.**
1. The format is fixed. Katakana could only live in a note or gloss, which would put a second reading system beside RR on some rows and not others.
2. Japanese learners read Latin letters fluently through ローマ字 schooling. RR's vowels a, i, u, e, o map onto Japanese vowels directly, so most of RR reads correctly as ローマ字.
3. Katakana cannot show the contrasts that matter most (§5.1–5.3): ㅓ / ㅗ (both オ), ㅜ / ㅡ (both ウ), ㄴ / ㅁ / ㅇ (all ン), plain / aspirated / tense (カ, カ, ッカ).
4. Many Japanese textbooks do print katakana; this course does not, and the `hangul` lesson says why in one line: 「カタカナでは区別できない音があるので、このコースではカタカナの読み方は使いません。」 [inference: the textbook practice is unverified, §11].

**Where a Japanese reader goes wrong with RR** [inference, supported by §5]:
1. Reads **eo, eu, ae, oe, wae, yae, ui** as two vowels (エオ, エウ, アエ, オエ, ワエ). RR is also ambiguous here: *oe* is ㅚ in *joesonghamnida* but o + e(u) in *joeun* (좋은) and *hakgyoe* (학교에), so the guide sends the reader to the Hangul.
2. Reads word-initial **g, d, b, j** as voiced ガ, ダ, バ, ジャ. Korean plain stops are unvoiced at the start of a word and voiced between vowels. Japanese textbooks that use kana write カムサハムニダ, which is closer to the real sound than ガムサハムニダ.
3. Reads **kk, tt, pp** as long, and **k, t, p** with too little breath.
4. Reads **u** as Japanese ウ, which is too unrounded and drifts toward ㅡ.
5. Adds a vowel after final **k, t, p, l, m** (bap → バプ), and reads **ng** as ン.
6. Reads **l** as ル and **r** as ラ (correct between vowels).

### 6.1 The reading guide, in Japanese (ready to paste into `hangul`; every line [inference], native check §10)

Placement: a new `<h3>` section at the end of `hangul`. The jamo and Korean words in it need the `hangul` waiver (§3.6). The three Hangul deck descriptions (`ko.d.hangul-vowels`, `ko.d.hangul-consonants`, `ko.d.hangul-advanced`) repeat their part in the same words, keeping only Hangul that their English descriptions have. Card notes for single jamo (ko.c0001–ko.c0060) use the same comparisons.

> **ローマ字の読み方**
>
> 韓国語の下に書いてあるローマ字は、発音どおりに書いた「改訂ローマ字表記」です（감사합니다 → gamsahamnida）。基本はローマ字読みで大丈夫ですが、カタカナでは表せない音があります。次の点に気をつけましょう。
>
> **母音**
> - **a**（ㅏ）・**i**（ㅣ）：日本語の「ア」「イ」とほぼ同じです。
> - **o**（ㅗ）：唇を小さく丸めて前に突き出す「オ」。
> - **eo**（ㅓ）：**1つの母音**です。「エオ」とは読みません。口を「ア」のように大きく開けたまま、唇を丸めずに「オ」と言います。ㅗ も ㅓ もカタカナでは「オ」になるので、いちばん注意が必要な母音です。
> - **u**（ㅜ）：唇を丸く前に突き出す「ウ」。日本語の「ウ」よりずっと唇を丸めます。
> - **eu**（ㅡ）：**1つの母音**です。「エウ」とは読みません。唇を横に引いたまま「ウ」と言います。日本語の「ウ」は ㅜ と ㅡ のちょうど中間なので、どちらかにはっきり寄せましょう。
> - **e**（ㅔ）・**ae**（ㅐ）：今のソウルの発音では、どちらも「エ」です。
> - **ya, yeo, yo, yu, ye**（ㅑ ㅕ ㅛ ㅠ ㅖ）：「ヤ」、口を開けた「ヨ」、唇を丸めた「ヨ」、「ユ」、「イェ」。yeo と yo の違いは、eo と o の違いと同じです。
> - **wa, wo, wi**（ㅘ ㅝ ㅟ）：「ワ」「ウォ」「ウィ」。**w をはっきり**言いましょう。gwa を「ガ」、wi を「イ」と言わないように。
> - **oe, wae, we**（ㅚ ㅙ ㅞ）：どれも「ウェ」です。oe は「オエ」、wae は「ワエ」とは読みません：joesonghamnida（죄송합니다）、hoesik（회식）、dwaeyo（돼요）、gwaenchanayo（괜찮아요）。
> - **yae**（ㅒ）は「イェ」です。
> - ただし、ローマ字だけでは区別できない場合があります。joeun（좋은）は jo・eun、hakgyoe（학교에）は hak・gyo・e と、2つの母音に分けて読みます。迷ったらハングルを見ましょう。ㅚ は1文字の中の母音、좋은 は2文字です。
> - **ui**（ㅢ）：ㅡ から ㅣ へすばやく移ります。語頭以外では「イ」、助詞の 의 は「エ」と発音します。
> - 母音が2つ並んでいても、上に挙げた組み合わせ（eo, eu, ae, oe, ui, wa, wo, wi, wae, we, ya, yeo, yo, yu, ye, yae）以外は、別々に読みます：kapeeseo ＝ ka・pe・e・seo。
>
> **子音：平音・激音・濃音**
> - **g, d, b, j**（ㄱ ㄷ ㅂ ㅈ・平音）：**語頭では濁りません。**日本語の「カ・タ・パ・チャ」に近い、息の弱い音です。母音にはさまれると「ガ・ダ・バ・ジャ」のように濁ります。gamsahamnida の g は「カ」に近く、gabang（가방）は「カバン」と聞こえます。
> - **k, t, p, ch**（ㅋ ㅌ ㅍ ㅊ・激音）：**強い息**といっしょに出します。口の前に手をかざして、息が当たるのを確かめましょう。日本語話者は激音を濃音で言ってしまいがちです。ためらわずに息を出しましょう。
> - **kk, tt, pp, ss, jj**（ㄲ ㄸ ㅃ ㅆ ㅉ・濃音）：**長い音ではありません。**前に小さい「っ」があるつもりで、喉を締め、息を出さずに言います。appa（아빠）は「アッパ」、oppa（오빠）は「オッパ」に近い音です。
> - **s**（ㅅ）：「サ・ス・セ・ソ」の s。i や y の前では「シ」になります：si ＝「シ」。ss（ㅆ）は喉を締めた s です。
> - **j**（ㅈ）・**ch**（ㅊ）：「チャ」行に近い音です。語中の j は「ジャ」行になります。ch は息を強く出します。
> - **h**（ㅎ）：「ハ」行。ただし、母音にはさまれるとほとんど聞こえません（joayo）。
> - **r / l**（ㄹ）：母音にはさまれると、日本語の「ラ」行と同じです（r）。文字の最後では **l** になります。舌先を上の歯ぐきにつけたまま止め、「ル」のように母音をつけません。mul（물）は「ムル」ではありません。ll は、舌をつけたまま長めに出す l です。
> - **f, v, z** の音は韓国語にありません。coffee は keopi（커피）です。
>
> **パッチム（文字の最後の子音）**
> - パッチムには母音をつけません。bap（밥）は「バプ」ではなく、唇を閉じて止めます。hak（학）は「ハク」ではなく、喉の奥で止めます。
> - k, t, p で終わる音は、小さい「っ」で止める感じです：hakgyo（학교）≈「ハッキョ」。
> - n, m, ng は日本語ではどれも「ん」ですが、韓国語でははっきり区別します。日本語の「ん」の言い方で覚えましょう。
>   - **n**（ㄴ）＝「あんない（案内）」の「ん」：舌先を上の歯ぐきにつけます。
>   - **m**（ㅁ）＝「さんま」の「ん」：唇を閉じます。
>   - **ng**（ㅇ）＝「りんご」の「ん」：舌の奥を上げ、口は開けたままです。
> - 日本語話者は ng を n で言ってしまうことが多いので、特に注意しましょう。gang（강）は「カン」ではなく「カ」＋ ng です。
> - パッチムの音は7つだけです：k, n, t, l, m, p, ng。
>
> **リズム**
> - 1文字が1拍です。hanguk（한국）は「ハ・ン・グ・ク」の4拍ではなく、2拍で言います。
> - 長い音はありません。seoul（서울）を「ソウール」と伸ばさないように。
> - 単語ごとの高低アクセントはありません。平らに言い、質問の文末だけ上げます。

### 6.2 The sound-change summary, in Japanese (for `sound-changes`; every line [inference])

Written to use only Hangul already in the English `sound-changes` body (ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ 감사합니다 조아요 좋아요 학교 학꾜) plus romanization, so it needs **no waiver**. The example rows (s0019–s0029) supply the rest.

> **音の変化：ローマ字は変化したあとの音で書いてあります**
>
> 韓国語は、つづりは意味を表すように書き、話すときに音をなめらかにします。ローマ字は話すときの音で書いてあるので、ローマ字のとおりに読めば、ほとんどの変化は自然にできます。つづり（ハングル）は変わりません。書くときは元のつづりで書きましょう。
>
> 1. **連音化**：パッチムの次の文字が ㅇ で始まると、パッチムが次の文字に移ります。hangugeo のように、区切らずに続けて読みます。
> 2. **鼻音化**：ㅂ ㄷ ㄱ の次に ㄴ や ㅁ が来ると、ㅂ は ㅁ、ㄷ は ㄴ、ㄱ は ㅇ になります。감사합니다 は gamsahamnida です。日本語でも「さんぽ」の「ん」は唇を閉じ、「さんか」の「ん」は喉の奥で言うように、音は次の音に合わせて変わります。
> 3. **激音化と ㅎ の弱化**：ㅎ が ㄱ ㄷ ㅂ ㅈ と隣り合うと、息の強い ㅋ ㅌ ㅍ ㅊ になります。母音にはさまれた ㅎ はほとんど聞こえません。좋아요 は 조아요 のように聞こえます。
> 4. **流音化**：ㄴ と ㄹ が隣り合うと、どちらも ㄹ になり、長い l になります。
> 5. **濃音化**：ㄱ ㄷ ㅂ の次の平音は濃音になります。학교 は 학꾜 のように聞こえます。日本語の「学校（がっこう）」の「っこ」と同じ感覚です。**この変化だけはローマ字に表れません**（hakgyo）。
>
> よくある間違い：
> - gam-sa-hap-ni-da ✕ → gamsahamnida ○
> - han-guk-eo ✕ → hangugeo ○
> - jo-ha-yo ✕ → joayo ○
> - 조아요 と書く ✕ → 좋아요 ○（つづりは変わりません）

### 6.3 Notes for writers

- The guide uses Japanese anchor words only: 案内, さんま, りんご, 散歩, 学校, カバン, アッパ / オッパ (oppa is known to K-pop fans). Do **not** compare with English sounds anywhere.
- Kana appear as **comparisons, never as readings**. Write 「アッパに近い音」, never 「아빠（アッパ）」 as a reading line. This keeps RR the single reading system.
- *coffee* is the one English word in the guide, because 커피 is an English loan. The Japanese コーヒー is a different adaptation of the same word, which is itself a useful aside: 「日本語のコーヒーとは音の写し方が違います」.
- arXiv's ㅓ → ㅗ, ㅜ → ㅡ, ㅇ → ㄴ and aspirated → tense figures come from mostly **advanced** learners (140 of 170). These errors persist and are not beginner-only, which is why the guide spends space on them.

## 7. Per-lesson notes (33 lessons, ids from `target/ko/lessons.jsonl`)

**How to read this table.**
- **"Length"** compares the Japanese prose with the English:
  - **−−** much shorter: Japanese makes most of the explanation one line;
  - **−** shorter;
  - **=** about the same;
  - **+** more than the English.
- **Shorter never means fewer Korean examples.** Every Hangul run, every `{{ex:…}}` token and every ✕/○ pair of the English body stays (set-equality, §3.6). What goes is English-specific explanation ("English is SVO", "there is no a or the", "like two cups of coffee in English"). Keep the `<h3>` structure where possible. Merging two short sections is allowed, but the validator then warns on structure counts. Tell the lead in a `_note`.
- **"Rewrite"** names English-built passages to rewrite, not translate. These come in addition to the `rw` flags `mk_native.js ja` puts in the work files.
- All entries are [inference] unless a section above tags them.

| # | id | Japanese bridge or trap | Rewrite, do not translate | Length |
|---|---|---|---|---|
| 1 | `hangul` | Kana are syllabic and Hangul is an alphabet in syllable blocks; 1 block = 1 syllable ≠ 1 拍. Insert the §6.1 guide. One line on 韓国語 / 朝鮮語 / ハングル (§2.3). One line on why no katakana. | The vowel table glosses "eo (uh), u (oo), i (ee), e (bed)": replace with the §6.1 kana comparisons. "Tap a letter to replay" → 「文字をタップすると書き順を再生します。」 **Waiver needed** (§3.6). | **+** |
| 2 | `polite` | です・ます ↔ ヘヨ体, タメ口 ↔ パンマル, formal ハムニダ体 (§4.9). 말 놔도 돼요 ≈ 「タメ口でいいよ」. | "Rule of thumb" stays; recast "comes off as sweet" naturally (「丁寧すぎて困ることはありません」). The "Say it 3 ways" headers become ハムニダ体 / ヘヨ体 / パンマル. "감사해요 to a shop owner — fine, but 감사합니다 is safer": keep. | **−** |
| 3 | `meet` | The script works like 初めまして／〜です／よろしくお願いします. 잘 부탁드립니다 = よろしくお願いします (card, not this body). Age sets politeness (Japanese ask age less). 이에요 / 예요 by the last block. | Replace "Mike = 마이크, Juan = 후안" logic with Japanese-name logic **in prose**, keeping the Hangul runs 마이크 / 후안 (or waive to add 다나카예요 / 켄이에요, §9.2). Goodbye logic: 「見送る側は 안녕히 가세요、立ち去る側は 안녕히 계세요」. | **=** |
| 4 | `sound-changes` | Japanese also changes sounds: ん varies (さんぽ / さんか), 学校 がっこう ↔ 학교 학꾜. Insert §6.2. | "gamsa ham nida" English respellings → RR only. **Drop** "open Read and try the 🔀 Sound changes drill". No waiver if §6.2 is used as written. | **+** |
| 5 | `nouns` | No articles, no gender, optional plural たち ↔ 들 (mostly people); こそあ ↔ 이그저; の ↔ 의 usually dropped (§4.4); 은/는 = は. 학 as a reusable block = 学 (学校, 学生, 学院). | "Korean nouns are easier than English ones — there is no a or the": one line, 「日本語と同じく、冠詞も性もありません」. The "학 means learning" paragraph becomes 「학＝学：학교（学校）、학생（学生）、학원（学院・塾）」: the first 漢字語 moment. Kanji may be added freely. | **−−** |
| 6 | `isseoyo` | です vs ある・いる splits like 이에요 vs 있어요 (§4.5). Trap: ある・いる both = 있어요. | The whole "English uses 'is' for two jobs" opening and the English / Korean / Why table: rebuild on Japanese (学生です / 学校にいます / ここは学校です / ここに学校があります). Keep every Korean cell. | **−** |
| 7 | `pronouns-questions` | 저 / 나 ↔ わたし / 僕・俺; あなた ↔ 당신 both avoided; 우리 ↔ うち; question word in place, as in Japanese. **Trap:** あの (shared memory) = 그, not 저 (§4.6). | "Korean uses pronouns less than English": 「日本語と同じく、代名詞はあまり使いません」. The question-word order mistake (뭐 이거예요? ✕) is unlikely for Japanese speakers but must stay; note it as 「英語話者の間違い」 only if natural, otherwise keep it as is. | **−−** |
| 8 | `verbbasics` | 辞書形 ends in 다 as Japanese ends in -u / -i; no person agreement; 形容詞 are predicates in both; 漢語 + する ↔ 하다 (§4.7). | "Describing verbs — English adjectives … no separate 'is'": one line. "Adding 'is' to a describing verb" mistake: keep the Korean, gloss briefly. Glossary term 形容詞 (not 描写動詞). | **−−** |
| 9 | `verbs` | New for Japanese: 陽母音 / 陰母音 (아요 / 어요) and vowel merging. Present covers present, "right now" and near future, as Japanese non-past does. Add the 〜ている warning (§4.7) in Japanese only (no new Hangul). | "This one form covers 'I go', 'I'm going' and 'do you go?'": recast for Japanese (行きます・行っています・行きますか). | **=** |
| 10 | `past` | One past, like 〜た. **Trap:** 〜ている for resulting states → Korean past (結婚しています → 결혼했어요), in Japanese prose only or with a waiver. | Delete "'I ate', 'I have eaten' and 'I did eat' are all 먹었어요" or recast as 「食べた・食べてしまった → どちらも 먹었어요」 (the Hangul 먹었어요 is in the body). | **−** |
| 11 | `future` | -(으)ㄹ 거예요 ≈ 〜つもりです / 〜でしょう; plain present for fixed near plans, as in Japanese (明日行きます). | "pronounced with a tight k, like 'kkeoyeyo'": say 濃音 with §6.1 wording (「거예요 は濃音で、kkeoyeyo のように」; the body's run is 거예요, so never write 거 alone). | **−** |
| 12 | `sov` | **Same order as Japanese.** 을/를 = を; describing verbs take 이/가 as 形容詞 take が (かばんが大きい); dropping 을/를 = dropping を. **Trap:** に乗る / に会う / が好き → 을/를 (§5.4), Japanese-only line or waiver. | Every "English is Subject-Verb-Object" sentence; the "English order" mistake row stays (Korean), introduced as 「語順を変えるとこうなります」. | **−−** |
| 13 | `particles` | 에 = に, 에서 = で, and **에서 = から** for places (미국에서 왔어요). Topic vs subject = は vs が, one line. Particle map: add a 日本語 column (は / が / を / に / で・から / も). | "English often translates both as 'at'" → 「에 は『に』、에서 は『で』にほぼ対応します」. The "Particle before the noun — 에 집 ✕" mistake is an English-speaker error; keep the Korean, one short gloss. | **−** |
| 14 | `negation` | 안 + verb ≈ 〜ない but **before** the verb; 공부 안 해요 = 勉強しない (noun split, same as Japanese); -지 않아요 ≈ 〜くないです / 〜ないです; 아니에요 = ではありません (with 이/가); 없어요 = ありません / いません. | "That one move covers most negative sentences" stays. Add 「안 は動詞の前に置きます。日本語の『〜ない』とは位置が逆です」. | **−** |
| 15 | `do-man` | 도 = も, 만 = だけ, and **the stacking rule is identical** (にも / でも ↔ 에도 / 에서도; は・が・を are replaced). 저도요 = 私もです. 도 + negative = 〜も〜ない. | Nearly the whole rule explanation becomes 「『も』『だけ』と同じです」 plus the examples. Keep all four mistake rows. | **−−** |
| 16 | `sentences` | The four shapes are already the Japanese ones: same order, same particles (学生です / コーヒーがおいしいです / コーヒーを飲みます / カフェに行きます・カフェで勉強します). | "English order" mistake rows stay; framing 「日本語の語順のまま、単語を入れ替えれば文が作れます」. | **−−** |
| 17 | `want-like` | -고 싶어요 = 〜たいです. **Trap:** が好き → 을/를 좋아해요; 이/가 좋아요 ≈ 〜がいいです; 水が飲みたい → 물을 마시고 싶어요. | "To want a thing, Koreans usually name the action": recast with 「コーヒーが欲しい」 → 커피 마시고 싶어요 / 커피 주세요 (Hangul present). | **−** |
| 18 | `numbers` | Two systems known; **breaks: hours, age, counters** take native numbers; **万 grouping holds** (§4.10). Sino numbers sound like いち・に・さん. | The whole "English counting" framing. "Sino numbers build like English digits" → 「漢字語の数は日本語と同じ組み立て：십일＝十一、이십오＝二十五」. The 만 paragraph becomes one line (「日本語と同じく万で区切ります：오만 원＝五万ウォン」). The 오십천 원 ✕ row stays. | **−** |
| 19 | `food` | 잘 먹겠습니다 = いただきます, 잘 먹었습니다 = ごちそうさまでした (exact). 저기요 ≈ すみません. Counters as 助数詞 (コーヒー2杯). お酌 shared; turning away from seniors is new. | "Four phrases cover 90%" stays. Table manners: compare with Japanese お酌 in one line. | **=** |
| 20 | `getting-around` | T-money ≈ Suica / ICOCA; 출구 = 出口, 4번 출구 = 4番出口; 지하철 = 地下鉄; 이번 역 / 다음 역 = 次は／その次は. | T-money line: add 「Suica のような交通系ICカード」. | **=** |
| 21 | `titles` | 님 ≈ 様 and title + 님; 선배 = 先輩; あなた-avoidance shared. **Traps:** 씨 ≠ さん (§4.9); 오빠 / 형 / 언니 / 누나 depend on the speaker's gender and have no Japanese equivalent; bare name + 아/야 ≈ 呼び捨て (close friends and juniors only). | Table column "(you female / you male)" → 「話し手が女性 / 男性」. Add the 씨 ≠ さん warning in Japanese prose (씨 is in the body). | **+** |
| 22 | `plans` | -(으)ㄹ까요? = 〜ましょうか, -(으)ㄹ래요? = 〜ませんか, -자 = 〜よう. 콜 ≈ 「乗った！」. Station + exit like 渋谷駅ハチ公口 meetups. | "Koreans confirm meetups with place + exit number, not addresses": recast for Japan (Japanese also meet at stations; the novelty is exit numbers). | **−** |
| 23 | `texting` | ㅋㅋ ≈ 「笑」「w」; ㅠㅠ ≈ 「泣」; KakaoTalk ≈ LINE; 읽씹 ≈ **既読スルー** (exact concept). 넵 ≈ 「承知しました！」 in work chat. | The read-receipt paragraph: 「LINE の既読スルーと同じです」. Shorthand table glosses in Japanese. | **−** |
| 24 | `counters` | 助数詞 exist; many are cognates (個 / 名 / 番 / 時間). **Break:** native numbers before Korean counters, 漢語 numbers before Japanese ones (§4.11, §5.7). Order noun + number + counter is the same (コーヒーを2杯). | "like 'two cups of coffee' … except it's mandatory": delete; the table gets a Japanese column (個 / 人・名 / 杯 / 本 / 匹 / 冊 / 枚 / 歳 / 時間 / 回). | **−** |
| 25 | `joining` | -고 / -아/어서 ↔ 〜て (Japanese uses て for both; Korean chooses), -지만 ↔ 〜けど, reason first in both. **Trap:** 忙しかったので → 바빠서 (no past before 서). | "And, but, so" framing → 「〜て、〜けど、〜ので」. Keep "비싸서 맛있어요 means…" with a Japanese gloss (「高いからおいしい」). | **−** |
| 26 | `story` | 먼저 = まず, 그리고 = そして, 그다음에 = その次に, 그래서 = だから・それで, 그런데 = でも・ところで, 마지막으로 = 最後に. | Connector table glosses in Japanese. "Native speakers overuse 그래서 and 근데" → compare with 「で、」「だから」. | **−** |
| 27 | `noun-modifiers` | **Same structure as Japanese 連体修飾**: no relative pronoun, modifier first (私が好きな食べ物 ↔ 제가 좋아하는 음식). New: the ending changes (크다 → 큰), ㅂ変則, ㄹ語幹. | "Korean has no 'that / which / who'; the whole description sits in front": 「日本語と同じです」, one line. "English order — 가방 큰 ✕" stays. | **−−** |
| 28 | `compare` | 보다 = より (exact, including flexible order), 더 = もっと, 제일 = 一番 (第一), 가장 = 最も. | The "보다 here is a particle … only looks like the verb 보다" note stays (still useful). | **−−** |
| 29 | `cant` | 못 = 可能形の否定 (食べられない), 안 = 〜ない; -(으)ㄹ 수 있어요 = 〜ことができます (exact); 몰라요 / 모르겠어요 ≈ 知りません / わかりません. | The spicy-food paragraph stays. "한국어 잘 못해요 … written as one word" stays. | **−** |
| 30 | `have-to` | -아/어야 해요 = 〜なければなりません; 안 -아/어도 돼요 = 〜なくてもいいです (exact: 도 = も); -아/어도 돼요? = 〜てもいいですか. | "literally 'it's okay even if (I) don't'" → 「『〜なくてもいい』とそっくり同じ形です」. Cross-reference to lesson 32 by its Japanese title. | **−** |
| 31 | `honorific` | 尊敬語 ↔ -(으)시- and 드시다 / 주무시다 / 계시다 / 말씀하시다 / 성함 / 연세 (exact table, §4.9); never about oneself (same rule). **Add 絶対敬語** with 계시다: own parents and boss are honoured even to outsiders (Yutani 1991, practitioner opinion). | "Politeness (요) is about the listener. Honorifics (시) are about the subject": one line, 「요 は丁寧語、시 は尊敬語」. "your partner's parents": keep. The 絶対敬語 paragraph is new prose using only Hangul in the body (계시다, 가세요, 저는 …) or a waiver. | **+** |
| 32 | `requests` | 좀 = ちょっと, 혹시 = もしかして, -아/어 주세요 = 〜てください, -아/어 주시겠어요? = 〜ていただけますか, -아/어도 돼요? = 〜てもいいですか. Add the 〜てもらう warning (§4.8). | Softener table glosses ('a bit', 'by any chance') → Japanese (クッション言葉). | **−** |
| 33 | `office` | Titles are cognates: 부장 部長, 과장 課長, 차장 次長, 사장 社長, 대표 代表, 팀장 (team + 長), 대리 代理 (**false friend**: a rank), 사원 社員. Japanese uses bare titles; Korean adds 님. 수고하셨습니다 ≈ お疲れさまでした; 먼저 퇴근하겠습니다 ≈ お先に失礼します; 회식 ≈ 飲み会 (**not** 会食). **Add 絶対敬語 at work**: to a client, a Korean says 부장님은 … 안 계십니다, not 部長の田中は…. | Title table "Roughly" column → Japanese equivalents (kanji). "Leaving before your boss used to be taboo": compare with お先に失礼します culture. The 絶対敬語 line needs 계시다 / 안 계십니다, which are not in this body: Japanese prose only (「部長の…はおりません」のような言い方は韓国語ではしません), or waive. | **+** |

**Summary of length:**
- **Much shorter (−−):** `nouns`, `pronouns-questions`, `verbbasics`, `sov`, `do-man`, `sentences`, `noun-modifiers`, `compare`.
- **Shorter (−):** `polite`, `isseoyo`, `past`, `future`, `particles`, `negation`, `want-like`, `numbers`, `plans`, `texting`, `counters`, `joining`, `story`, `cant`, `have-to`, `requests`.
- **Same (=):** `meet`, `verbs`, `food`, `getting-around`.
- **More (+):** `hangul`, `sound-changes`, `titles`, `honorific`, `office`.

## 8. Pair-layer proposals (proposals only)

**Format constraint** (as in `ceb-ko.md` §8). Spec v1 has no pair layer. The lesson list is the 33 en-ko ids, and trap cards carry Korean, which lives only in the target half. Both proposals need a spec change, for example a per-pair `extra/` folder with its own target and native rows, assembled after the shared halves. Alternatively they can be folded into existing lessons.

**Fallback without a spec change:** put the opening lesson's content into the first sections of `hangul` and `polite`, as prose. Kanji are free, and Hangul needs waivers. Put trap notes for existing `ko.c` cards into their `note` fields. Put trap notes for existing `ko.s` rows into the prose of the lesson that shows them.

### 8.1 Opening lesson 「すでに知っていること」

Proposed id `ja-know`, placed before `hangul`. About 400 characters per screen, six screens, six checks. Japanese prose; Korean only from the half or the pair layer's own target rows.

1. **語順は同じ:** 私はご飯を食べます ↔ 저는 밥을 먹어요 (s0109), word for word in the same order. Particles come after the noun, and the verb comes last.
2. **助詞も似ている:** は / が / を / に / で / も / だけ / より ↔ 은/는 / 이/가 / 을/를 / 에 / 에서 / 도 / 만 / 보다, as a six-row table. "Choose the form by whether there is a パッチム" previews `nouns`.
3. **漢字語:** 家族 가족, 約束 약속, 図書館 도서관, 運動 운동, 料理 요리, 銀行 은행 (all in the half). Show four rules with these examples only: く → ㄱ, つ・ち → ㄹ, ん → ㄴ / ㅁ, ら行 at the start → ㅇ / ㄴ. Add a warning: 공부＝勉強 (not 工夫), 내일＝明日 (not 来日).
4. **数は2系統:** ひとつ・ふたつ / いち・に ↔ 하나・둘 / 일・이. The Sino numbers sound alike. Preview the breaks: 3時 → 세 시, 25歳 → 스물다섯 살.
5. **敬語:** です・ます ↔ ヘヨ体; 召し上がる ↔ 드시다; あなたを使わない ↔ 당신を使わない. Preview: 自分の父にも尊敬語 (絶対敬語).
6. **ここは違う (sounds):** ㅓ と ㅗ（どちらも「オ」）、ㅜ と ㅡ（どちらも「ウ」）、「ん」が3つ（ㄴ ㅁ ㅇ）、息の強さで3種類（平音・激音・濃音）. Point to `hangul`.
7. **Checks (6):** one per screen, prose options where possible. For example: 「약속 の漢字は？」 約束 / 薬局 / 予約 / 約定.

### 8.2 Deck 「日本語話者の落とし穴」: 20 sample cards

Each card has the Korean (with its id if it exists in the half, or NEW for a row the pair layer would add), the Japanese meaning and a note. Meanings and notes are [inference]. NEW rows need the spec change (§8) or an addition to the built-in course (§9.4).

| # | Korean (id) | Japanese meaning | Note |
|---|---|---|---|
| 1 | 버스를 타요 (NEW) | バスに乗ります | 「に乗る」は 을/를 타다。에 は使いません。 |
| 2 | 친구를 만났어요 (s0223) | 友達に会いました | 「に会う」も 을/를。 |
| 3 | 커피를 좋아해요 (s0173) | コーヒーが好きです | 좋아하다 は動詞なので 을/를。「が」につられて 이/가 にしないこと。 |
| 4 | 선생님이 됐어요 (NEW) | 先生になりました | 「になる」は 이/가 되다。 |
| 5 | 결혼했어요 (NEW) | 結婚しています | 状態の「〜ています」は過去形。결혼하고 있어요 は「結婚式の最中」。 |
| 6 | 알아요 (ko.c0390) | 知っています | 「知っています」は現在形の 알아요。 |
| 7 | 아버지는 지금 안 계세요 (NEW) | 父は今おりません | 自分の父でも、外の人に尊敬語を使います（絶対敬語）。 |
| 8 | 세 시 삼십 분 (ko.c0408) | 3時30分 | 時は固有語の数、分は漢字語の数。삼 시 ✕。 |
| 9 | 스물다섯 살 (ko.c0409) | 25歳 | 年齢も固有語の数。이십오 살 ✕。 |
| 10 | 커피 두 잔 (s0177) | コーヒー2杯 | 助数詞の前は固有語の数（두）。日本語の「二杯（にはい）」とは違います。 |
| 11 | 이름이 뭐예요? (ko.c0074) | お名前は何ですか | 疑問詞の文では「は」でも 이/가。 |
| 12 | 제 이름 (s0037) | 私の名前 | 「の」は訳しません。저의 → 제。 |
| 13 | 공부해요 (ko.c0328) | 勉強します | 공부＝工夫。でも意味は「勉強」。 |
| 14 | 내일 (ko.c0597) | 明日 | 내일＝来日。でも意味は「明日」。 |
| 15 | 약속 있어 (s0203 미안, 그날은 약속 있어) | 約束（予定）がある | 약속 は「予定・用事」の意味でもよく使います。 |
| 16 | 계산해 주세요 (ko.c0580) | お会計お願いします | 계산＝計算。お店では「お会計」。 |
| 17 | 포장해 주세요 (ko.c0581) | 持ち帰りでお願いします | 포장＝包装。お店では「持ち帰り」。 |
| 18 | 생수 (ko.c0317) | ミネラルウォーター | 생수＝生水。でも「なまみず」ではありません。 |
| 19 | 강 / 간 / 감 (NEW, or ko.c0053 for ㅇ) | 川 / 肝 / 柿 | どれも「カン」ではありません。ng（りんご）、n（案内）、m（さんま）。 |
| 20 | 서울 (s0004) | ソウル | eo は1つの母音。口を開けた「オ」。「ソーウル」と伸ばしません。 |

## 9. Localisation

### 9.1 What stays

- Glosses translate what the Korean says. 미국에서 왔어요 is glossed 「アメリカから来ました」, never 「日本から来ました」. *Kii*, 키이 and 오클라호마 stay.
- 영어 할 수 있어요? (ko.c0091, ko.g014) and 혹시 영어 메뉴 있어요? (ko.s0280, ko.p040, requests.02) stay and are glossed 「英語」. They are less useful to a Japanese traveller than 일본어 versions (§9.4).
- Won amounts stay in won. The prose may add a rough yen comparison once in `numbers` (「1,000ウォンは約100円」) [inference: the exchange rate must be checked when writing; prefer not to give a number at all].

### 9.2 Japanese equivalents in prose (no new Hangul without a waiver)

- **Names in explanations:** use Japanese names in kanji or kana in prose: 田中さん, 佐藤さん, ケンさん, ハルカさん. For example, `meet`'s 이에요 / 예요 logic can be explained in prose with 「田中（다나카）」 only under a waiver. **Without a waiver**, write: 「名前の最後の文字にパッチムがあれば 이에요、なければ 예요。日本人の名前は『ン』で終わる名前（ケン、ジュン）だけがパッチムつきになることが多いです。」 This sentence adds no Hangul; whether it holds for all names, for example ending in ク or ツ, needs the 표기법 check in §11.
- **Places:** 東京, 大阪, 福岡 in prose. Seoul places stay in Korean (명동, 강남역, 홍대입구역).
- **Apps and services:** LINE, not iMessage or WhatsApp; Suica / ICOCA for T-money; 既読スルー for 읽씹.
- **Money:** 円 for any home comparison, and only in prose.
- **Workplace:** Japanese company titles (部長, 課長) for comparisons in `office`.

### 9.3 Korean-half rows tied to the US (for the lead)

| id | Korean | Use |
|---|---|---|
| ko.c0077 | 미국에서 왔어요 | card |
| ko.g021 | 어디에서 왔어요? / 미국에서 왔어요. 오클라호마요. | dialogue |
| ko.s0012, ko.s0127 | 미국에서 왔어요 | `meet`, `particles` example rows |
| ko.p005 | 에서 · ex 집에서 쉬어요 · 미국에서 왔어요 | pattern |
| meet.06 | order: 미국에서 / 왔어요, distractor 미국 | practice |
| particles.03 | mc: 미국에서 왔어요 / 미국에 왔어요 / … | practice |
| ko.c0091, ko.g014, ko.s0280, ko.p040, requests.02 | 영어 … | English as the learner's other language |

### 9.4 What the lead should add to the Korean half (proposals)

| Korean | RR (generated by the export; shown for reference) | Gloss (en) | Where |
|---|---|---|---|
| 일본에서 왔어요 | ilboneseo wasseoyo | I'm from Japan | `ko.d.introductions`; `meet` example row |
| 저는 일본 사람이에요 | jeoneun ilbon saramieyo | I'm Japanese | `ko.d.introductions` |
| 도쿄에서 왔어요 / 오사카에서 왔어요 | dokyoeseo wasseoyo / osakaeseo wasseoyo | I'm from Tokyo / Osaka | `ko.d.introductions` |
| 일본어 할 수 있어요? | ilboneo hal su isseoyo? | Can you speak Japanese? | `ko.d.survival-phrases-2` |
| 혹시 일본어 메뉴 있어요? | hoksi ilboneo menyu isseoyo? | By any chance, is there a Japanese menu? | `ko.d.asking-around` |
| 엔으로 얼마예요? | eneuro eolmayeyo? | How much is it in yen? | `ko.d.numbers-in-the-wild` |
| a dialogue variant of ko.g021 ending 일본에서 왔어요. 도쿄요. | | | `ko.d.introductions` |
| 버스를 타요 / 선생님이 됐어요 / 결혼했어요 / 아버지는 지금 안 계세요 | | (trap rows, §8.2) | pair layer or a new deck |

**Process** (as `ceb-ko.md` §9.4):
1. The lead adds the rows to the built-in en-ko course (`src/app.html`).
2. The lead runs `export_ko.js`. New ids are appended; old ids stay.
3. The lead checks `proof.js`.
4. **Every** native half (en, es, ceb, ja …) then needs rows for the new ids before `validate.js` passes.

A ja-only addition is not possible in spec v1.

### 9.5 Interface, level titles, greetings, goals

**Interface (for the lead).** `tools/i18n/ja/ui.json` was written for **ja-en**: its notes say "Korean" and "Hangul" there mean the language being learned. It renders about 20 strings with 英語:
- 「英語はもう読めますか？」 for "Can you already read Hangul?";
- 「英語で入力」 for "type it in Hangul";
- 「英語はじめの一歩」 for "Korean starter";
- 「読む 英→日」 for "Read 한→en";
- 「Lang Appで1日5分、英語を勉強中 🇺🇸」 for the Korean share line.

So `native/ja/ko/ui.json` must override **all** of these with 韓国語 / ハングル (and 🇰🇷), not only the 14 `uiKeys`. Proposed renderings [inference]:
- 「ハングルはもう読めますか？」
- 「ハングルで入力」
- 「韓国語はじめの一歩」
- 「読む 韓→日」 / 「思い出す 日→韓」
- 「⌨️ ハングルを入力」
- 「韓国語を学ぶ目的は？」
- 「1日5分、韓国語を学びましょう」
- 「韓国語の学習記録」
- 「Lang Appで1日5分、韓国語を勉強中 🇰🇷」
- 「韓国語、読み方、意味、メモ — 1行に1枚（読み方・メモは任意）」
- For the 14 `uiKeys`: 「ローマ字を入力してください。ハングルは子音＋母音（＋パッチム）で1文字になります。…」, 「文字のしくみ」, 「ハングル練習」, 「ハングルで入力」, 「パターンを検索（例：에서、『〜たい』）」, 「読み方（空欄なら自動）」, 「読み方を隠す」, 「読み方を表示：オン / オフ」.

The lead should grep the ja pack for 英語, 英→ and 🇺🇸 and list every hit for override.

**Level titles (`ko.t*`).** The Korean titles are mostly 漢字語, so the Japanese label should be the cognate and not a translation of the English. The learner sees `선배 · 先輩` and gets a free cognate.

| id | Korean | English label | Japanese label |
|---|---|---|---|
| ko.t01 | 새싹 | Sprout | **新芽** (as the ja UI already has; 新芽 is not the kanji of 새싹, which is a native word) |
| ko.t03 | 학생 | Student | **学生** |
| ko.t05 | 선배 | Senior | **先輩** |
| ko.t08 | 고수 | Pro | **上級者** (고수 = 高手; 高手 is not everyday Japanese) |
| ko.t12 | 달인 | Master | **達人** |
| ko.t16 | 사범 | Sensei | **師範** (not 先生: the English label is a Japanese loan, and the Korean is 師範) |

**Greetings (`ko.h.*`)**, glossed with the natural Japanese greeting rather than a literal translation:

| id | Korean | Japanese |
|---|---|---|
| ko.h.night | 늦었어요, 수고했어요 | 遅くまでお疲れさまでした |
| ko.h.morning | 좋은 아침이에요 | おはようございます |
| ko.h.afternoon | 좋은 오후예요 | こんにちは |
| ko.h.evening | 좋은 저녁이에요 | こんばんは |

**Goals and plans:**

| id | Japanese |
|---|---|
| goal.travel | 旅行・移動 |
| goal.social | 恋愛・友だち・遊び |
| goal.drama | 韓国ドラマ・K-POP |
| goal.work | 仕事・勉強 |
| plan.trip | 韓国旅行 |
| plan.social | 友だち・恋人をつくる |
| plan.conv | 90日で会話 |

**Course and deck names:**
- `course.json` name: 韓国語 (§2.3).
- Deck labels use Japanese with katakana loans where natural: 「ハングル・母音」, 「ハングル・子音」, 「ハングル・発展」, 「発音のコツ」, 「サバイバルフレーズ」, 「自己紹介」, 「助詞」, 「助数詞」, 「敬語」, 「K-POP・ファン文化」, 「仕事・オフィス」 [inference; all need the native check].

**Pause idioms (ko.i01–ko.i32)** carry `hanja` in the target half (所願成就, 一石二鳥 …). Many are also Japanese 四字熟語 (一石二鳥, 大器晩成, 七転八起 as 七転び八起き, 塞翁が馬). Their Japanese labels should use the Japanese idiom where one exists. Where Japanese differs (轉禍爲福 ≈ 禍を転じて福となす), say so in the label [inference].

**Later, for TOPIK takers** [inference]: a ハムニダ体 reading deck and TOPIK I vocabulary are beyond this course. If added, they should follow the official TOPIK materials, which were not opened (§11).

## 10. Native check: 20 questions for a Japanese-speaking reviewer

Each item points to a passage. The reviewer answers 「OK」 or writes the natural version.

1. §3.3 sample sentences 1–10: natural for an NHK-style or university textbook? Too stiff or too casual?
2. §3.4 glossary: are 存在詞, 指定詞, 陽母音 / 陰母音, パッチムのある語幹, 連体形 and クッション言葉 terms a general learner understands, or should some get a plainer gloss?
3. §2.3: is 韓国語 the right house term? Would a heritage learner be put off by the single mention of 朝鮮語, or by its absence?
4. §3.2: are the glosses for 안녕히 가세요 / 계세요 (「さようなら（見送る側／立ち去る側）」) natural?
5. §6.1 vowels: is 「口を『ア』のように大きく開けたまま『オ』」 a clear instruction for ㅓ? Is 「日本語のウは ㅜ と ㅡ の中間」 accurate to your ear?
6. §6.1 consonants: is 「前に小さい『っ』があるつもりで」 the usual way 濃音 is explained? Is 「語頭では濁りません」 clear?
7. §6.1 patchim: are 案内 / さんま / りんご good anchor words for ㄴ / ㅁ / ㅇ (do you pronounce them that way)?
8. §6.2: is the 学校（がっこう）↔ 학교 학꾜 comparison helpful?
9. §4.5 / §4.7: are the Japanese sentences in the 〜ている table natural (眼鏡をかけています、韓国に来ています …)?
10. §4.9: is 「父は今おりません」 the natural Japanese for the 絶対敬語 example? Is 「部長の田中は席を外しております」 the natural business version?
11. §4.9: is 「씨 は『さん』に似ていますが、目上の人には使いません」 a fair warning?
12. §4.12.3 false friends: is each Japanese meaning correct (生水, 飲料水, 食堂, 代理, 会食, 男子 / 女子, 認定)?
13. §4.12.2: are the readings correct (市場 いちば / しじょう, 信号灯, 清掃 vs 掃除)?
14. §8.2 trap cards 1–20: are the meanings and notes natural and correct?
15. §9.5 level titles: 新芽, 学生, 先輩, 上級者, 達人, 師範. Do they work as game-like level names? Is 上級者 the right choice for 고수?
16. §9.5 greetings: 「遅くまでお疲れさまでした」 for 늦었어요, 수고했어요?
17. §9.5 goals and plans labels: natural?
18. §9.5 interface overrides: are 「ハングルで入力」 and 「読む 韓→日」 clear?
19. §7, lesson 22: is 「乗った！」 a fair gloss for 콜? Lesson 23: is 既読スルー exactly the right equivalent of 읽씹?
20. §4.8: is 잘 모르겠어요 ≈ 「よくわかりません」 and 몰라요 ≈ 「知りません」 a fair pairing?

## 11. Gaps and unverified claims

**No native check yet.** Every Japanese sentence, gloss, term choice and label in §3.3, §4, §6, §7, §8 and §9 is [inference] by a non-native author. §10 orders what to check first.

**Evidence that was found, and its limits**
- **arXiv 2306.10821 (2023):** 170 Japanese speakers, 140 of them advanced. Read speech from a corpus. Errors come from automatic phonetic transcription, not human judges, so the figures are machine-labelled. The Hangul mapping of the paper's IPA rows was done by the fetch summary ("approximations") and checked here only by reasoning.
- **Jo, Kim & Kim (2008):** 16 Japanese marriage migrants, mean age 42.5, compared with Korean women of mean age 28.3 (an age confound). VOT units were not stated in the fetched text. ㅂ, ㅌ, ㄱ and the affricates were not reported as significant for the Japanese group, and their values were not given. `ceb-ko.md` records that an earlier fetch of the same PDF swapped group columns for the Filipino data. Here the Japanese values were fetched with explicit group labels, and the direction (tense too long, aspirated too short) matches arXiv's tensification and plain-substitution findings.
- **Nam (2002):** 8 participants, abstract only, no rates.
- **Hong, Ryu & Chung (2014):** abstract only; no per-phoneme results.
- **Yutani (1991):** an essay by a Japanese professor of Korean, with examples, not an error count. The 絶対敬語 claim is the standard textbook view, and he qualifies it (압존법).
- **Takagi & Yun (n.d.):** only the opening section was readable; it names particles, aspect and connective endings as interference areas without examples or counts. No grammar error in §5.4–5.8 has a frequency.
- **Kim (2010):** a descriptive correspondence study with no counts; "exceptions are very few" is qualitative. Rules 15–20 and most examples in §4.12.1 are the author's.
- **False friends:** two press or blog sources ([practitioner opinion]). Most of §4.12.3 is [inference]. In particular, the claimed Japanese meanings of 生水, 飲料水, 食堂, 代理, 会食 and 認定 need the native check.

**Not found, or could not be opened**
- **NHK course facts:**
  - The Japanese Wikipedia-mirror page on 「アンニョンハシムニカ・ハングル講座」 failed to load.
  - The naming claim rests on English Wikipedia's *Names of Korea*, a second-hand source.
  - The start year, the current programme names (まいにちハングル講座, ステップアップ ハングル講座 appear in search results only) and NHK's topic order were not verified.
- **Topic order of Japanese textbooks** (できる韓国語, NHK, university syllabi), including whether ハムニダ体 or ヘヨ体 comes first: not verified. A CiNii record on how textbooks for Japanese speakers introduce 文字と発音 had an empty abstract page. Several Japanese repository PDFs (Rikkyo, Ritsumeikan, Dokkyo, TUFS) redirect to signed storage URLs the fetch tool refused. §2.4 is the author's knowledge.
- **The 語基 tradition** (第I・II・III語基) and who uses it: not verified; the TUFS page did not open. The decision for 語幹 + 語尾 rests on the 小学館 dictionary's terms and on the half's own logic.
- **Katakana readings in Japanese textbooks**, and the 「っ」 device for 濃音 and the 「ん」 device for patchim: common teaching practice in the author's knowledge, but no opened source states it.
- **ハン検 figures, numbers of universities and high schools teaching Korean, learner motivation surveys in Japan:** not found. The only figures are TOPIK takers from one press interview.
- **Zainichi adult heritage learners:** only one small study of first graders at a Korean school was opened. Claims about dialect and family vocabulary are [inference].
- **Korean loanword rules for Japanese names** (다나카, 도쿄, つ → 쓰, っ → ㅅ, no long vowels): from the author's knowledge of 국립국어원 외래어 표기법; the official page was not opened. The claim in §9.2 that most Japanese names end without パッチム except those in ン must be checked against it (e.g. names in ク / ツ map to 쿠 / 쓰, which are vowel-final, so the claim is likely true).
- **씨 with a surname alone sounding condescending; ハムニダ体-first learners sounding stiff; avoidance of 4:** practitioner commonplaces, not verified.
- **The Japanese meaning of 퇴사 vs 退社:** Japanese 退社 means both "leave the office for the day" and "quit"; note.com gives only the first. Writers should not claim Japanese 退社 never means quitting.

**Engine and format (for the lead)**
- `LANGS` has `ja` (`src/app.html`: `ja:{name:'Japanese',self:'日本語',flag:'🇯🇵',ko:'일본어'}`), so the validator's LANGS check should pass for `ja ko`.
- The Japanese interface pack exists but is tuned for ja-en (§9.5): about 20 strings plus the 14 `uiKeys` need ja-ko overrides in `native/ja/ko/ui.json`.
- `hangul` needs `_waive` for the reading guide. `meet` needs one only if a Japanese name or 일본 line is added. `sound-changes` needs none if §6.2 is used as written.
- `trainer.json` for `ja` (Hangul drill meanings, `hangul.alt`) is not covered by this profile. Japanese learners type Latin readily, so `defaultMode` can stay `type`. The obvious Japanese-style alternates (`o` for ㅓ, `u` for ㅡ) are forbidden by spec §10.3, because they equal another jamo's canonical spelling, so `hangul.alt` probably adds little. Not designed here.
- The pair layer (§8) and the Japan rows (§9.4) need a spec change or an update to the built-in course; neither is possible inside spec v1 for one language alone.

## Sources

Web pages opened and used for this profile (2026-11-23):
- [Comparison of L2 Korean pronunciation error patterns from five L1 backgrounds by using automatic phonetic transcription (arXiv 2306.10821, 2023)](https://arxiv.org/html/2306.10821v1)
- [Jo, S.-H., Kim, H.-G. & Kim, S.-J. (2008). 여성 결혼이민자들의 한국어 조음에 나타나는 음향음성학 특성 연구: 일본과 필리핀 출신 여성 결혼이민자들을 대상으로. *음성과학* 15(3)](https://koreascience.kr/article/JAKO200833338919695.pdf)
- [남기춘 / Nam, K.-C. (2002). 일본어 화자의 한국어 평음/기음/경음 지각 오류. *언어청각장애연구* 7(1) (abstract page)](https://scholar.kyobobook.co.kr/article/detail/4010023096654)
- [Hong, H., Ryu, H. & Chung, M. (2014). The relationship between segmental production by Japanese learners of Korean and pronunciation evaluation. *Phonetics and Speech Sciences* 6(4) (abstract page)](https://koreascience.kr/article/JAKO201403359905317.page?&lang=ko)
- [金珉秀 / Kim, M. (2010). 日韓漢字音の対照研究―子音（初声と終声）の対応を中心に―. *筑波学院大学紀要* 5](https://japan-iu.ac.jp/library/kiyou/2010/06KIM.pdf)
- [油谷幸利 / Yutani, Y. (1991). 일본인이 본 한국어 경어법. *새국어생활* 1(3), 국립국어원](https://www.korean.go.kr/nkview/nklife/1991_3/1_8.html)
- [高木南欧子・尹亭仁. 日韓両言語の学習者の作文にみられる母語干渉の諸相 (Kanagawa University repository; opening section only)](https://kanagawa-u.repo.nii.ac.jp/record/13708/files/05%20%E6%97%A5%E9%9F%93%E4%B8%A1%E8%A8%80%E8%AA%9E%E3%81%AE%E5%AD%A6%E7%BF%92%E8%80%85%E3%81%AE%E4%BD%9C%E6%96%87%E3%81%AB%E3%81%BF%E3%82%89%E3%82%8C%E3%82%8B%E6%AF%8D%E8%AA%9E%E5%B9%B2%E6%B8%89%E3%81%AE%E8%AB%B8%E7%9B%B8.pdf)
- [柳美佐 / Ryu, M. (2009). 在日朝鮮学校における小学1年生へのL2朝鮮語指導の特徴. *母語・継承語・バイリンガル教育（MHB）研究* 5](https://ir.library.osaka-u.ac.jp/repo/ouka/all/25052/mhb_05_022.pdf)
- [JapanKnowledge: 小学館『韓日辞典』 凡例 10 用語解説](https://japanknowledge.com/contents/skj/hanrei10.html)
- [JapanKnowledge: 小学館『韓日辞典』 凡例 6 アスペクト](https://japanknowledge.com/contents/skj/hanrei06.html)
- [Wikipedia: Names of Korea](https://en.wikipedia.org/wiki/Names_of_Korea)
- [Herald Business (2026-11-06). TOPIK test-takers in Japan nearly double — and accessibility gets the credit](https://mbiz.heraldcorp.com/article/10927518)
- [Keio University Faculty of Foreign Language Studies: 慶應外語の魅力・特色 朝鮮語科](https://www.fls.keio.ac.jp/content/files/m_12_tokushoku.pdf)
- [설동훈 (2019-08-21). 다문화칼럼 "함께하는세상". 세계일보](https://www.segye.com/newsView/20190821510863)
- [キューQ (2024-02-10). 韓国と日本、同じ漢字だが違う意味で使われる例. note.com](https://note.com/710531/n/nc3d946f6bfe9)

Local project files read: `docs/HALVES-SPEC.md`; `docs/profiles/ceb-ko.md` (model); `docs/profiles/en-es.md` (evidence discipline); `docs/profiles/ja.md` §1–3 (Japanese house style); `tools/halves/native/es/ko/REVIEW.md`; `tools/halves/lib.js` (`HANGUL_RX`); `tools/halves/validate.js`; `tools/halves/target/ko/{lessons,cards,sentences,course,trainer}.jsonl/json`; `tools/halves/native/en/ko/{lessons.jsonl,cards.jsonl,sentences.jsonl,labels.jsonl,decks.jsonl,ui.json,course.json}` and all 33 `lessons/*.html`; `tools/i18n/ja/ui.json`; the `LANGS` table in `src/app.html`.
