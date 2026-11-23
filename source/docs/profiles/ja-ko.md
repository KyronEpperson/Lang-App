# Japanese speakers learning Korean: pair profile

Course `ja-ko` is Korean for speakers of Japanese. It is assembled from the fixed Korean half `tools/halves/target/ko/` (33 lessons, 641 cards, frozen v1, see `docs/HALVES-SPEC.md`) and a native half `tools/halves/native/ja/ko/` written in Japanese. The Japanese writers follow this profile. It sets the house rules for the native half, describes what a Japanese speaker already brings, ranks the traps, and gives the reading guide for the romanization in Japanese. It also lists, lesson by lesson, what must be rewritten rather than translated, and which lessons can be much shorter than the English.

**Evidence tags** (as in `docs/profiles/en-es.md` and `docs/profiles/ceb-ko.md`):
- **[research-backed]**: an empirical study opened for this profile. The study and its sample are named. **(abstract only)** means only the abstract or summary page was read. **(descriptive)** marks a contrastive description of the two languages, not a learner study.
- **[curriculum convention]**: what dictionaries, syllabuses, schools, textbooks and broadcasters do.
- **[practitioner opinion]**: the stated view of a teacher, journalist, blogger or guide, with no data behind it.
- **[inference]**: this profile's own reasoning, and every linguistic fact given from the author's knowledge without an opened source. **Every Japanese sentence written in this profile is [inference]**: its author is not a native Japanese speaker. §10 lists what a native reviewer must check first.

Untagged rules in §3 and §6 to §9 are design decisions, not findings.

**How much is known.** Compared with the Cebuano pair, this pair is well studied. Japanese is one of the five L1 groups in a large automatic-transcription study of L2 Korean speech (170 Japanese speakers; arXiv 2023). Acoustic, perception and honorific studies of Japanese learners were also opened (Jo, Kim & Kim 2008; Nam 2002; Yutani 1991). The sound correspondences of Sino-Korean and Japanese on'yomi are described in Kim (2010). The weak spots are grammar error data: no opened study gives counts for Japanese learners' particle or aspect errors. One study names particles, aspect and connective endings as the areas of visible L1 interference in Japanese learners' Korean compositions, but only its opening section was readable and it gives no examples or counts (Takagi & Yun, n.d.). The grammar traps in §5 are therefore mostly contrastive reasoning, marked [inference].

## 1. Summary

1. **Explanations:** standard Japanese in **です・ます体**, at the level of a friendly NHK or university textbook. Instructions end in 〜しましょう. Never あなた. Errors are marked **✕ → ○** (the Japanese convention, as `docs/profiles/ja.md` §2). House style for spacing and punctuation is reused from `ja.md` §2 (§3.1).
2. **House term for the language: 韓国語.** The script is **ハングル**, and only the script. 朝鮮語 appears once, in the `hangul` lesson, as the academic name (§2.3).
3. **Grammar terms:** Japanese school grammar terms plus the standard terms of Korean teaching in Japan. Use **助詞, 語幹, 語尾, 用言 (動詞・形容詞・存在詞・指定詞), 体言, パッチム, 陽母音・陰母音, 해요体・합니다体・パンマル, 尊敬, 変則, 連音化, 鼻音化, 激音化, 濃音化, 流音化, 平音・激音・濃音, 固有語数詞・漢字語数詞, 助数詞, 漢字語**. They come from a closed list (§3.4). 語基 is not used.
4. **The big asset (§4):** Japanese grammar maps onto Korean almost line for line. SOV order, postpositions, は/が ↔ 은/는・이/가, を ↔ 을/를, も ↔ 도 (with the same stacking rule: にも / でも ↔ 에도 / 에서도), だけ ↔ 만, より ↔ 보다, 〜たい ↔ -고 싶다, 〜てもいい ↔ -아/어도 되다, 〜ことができる ↔ -(으)ㄹ 수 있다. Relative clauses come before the noun with no relative pronoun, and subjects are dropped. 助数詞, the 万 grouping, あなた-avoidance, うちの ↔ 우리, and 尊敬語 ↔ 드시다 / 계시다 / 성함 also carry over. There are also **thousands of 漢字語 cognates with regular sound correspondences**: §4.12 gives 20 rules and 60 cognates that appear in this course.
5. **Consequence for writing:** about half of the 33 lessons can be **much shorter** than the English. The prose shrinks, but every Hangul run and every ✕/○ example stays, because of the set-equality rule (§3.6, §7). Five lessons need **more** than the English: `hangul`, `sound-changes`, `honorific`, `titles` and `office`. The extra material is sounds, 絶対敬語, and 씨 ≠ さん.
6. **The strongest traps, ranked (§5):**
   1. Plain vs aspirated vs tense consonants (research-backed: aspirated → tense substitution).
   2. Patchim: ㅇ said as ㄴ, ん with three targets, vowels added after finals (research-backed).
   3. ㅓ → ㅗ and ㅜ → ㅡ, and diphthongs flattened (research-backed).
   4. Verbs whose particle differs from Japanese: に乗る → 을/를 타다, に会う → 을/를 만나다, が好き → 을/를 좋아하다, になる → 이/가 되다.
   5. 絶対敬語: Korean honours one's own father or boss even when talking to outsiders (research-backed: Yutani 1991).
   6. 〜ている ↔ -고 있다 / -아/어 있다 / past tense.
   7. 漢字語 false friends.
   8. Over-use of 의 for の.
   9. Native numbers for hours, age and most counters, where Japanese uses 漢語 numbers.
7. **Romanization:** keep the Revised Romanization the Korean half prints (the format is fixed). No katakana ruby, because a native field cannot add a reading line. Teach the sounds in prose with kana comparisons, and give explicit warnings wherever kana fails. §6 gives the full reading guide in Japanese, ready for `hangul` and `sound-changes` (waivers needed).
8. **Format lever:** the Hangul check counts only Hangul (`tools/halves/lib.js` `HANGUL_RX`). **Kanji and kana may be added freely**, so writers can gloss every 漢字語 with its kanji (가족（家族）) in notes, glosses and bodies without a waiver (§3.6).
9. **Localisation:** the lead should add 일본에서 왔어요 and five more rows to the Korean half (§9.4). The Japanese interface pack was written for ja-en and shows 英語 where "Korean" is meant in about 20 strings, so the ja-ko `ui.json` must override far more than the 14 `uiKeys` (§9.5).
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
5. For TOPIK takers: TOPIK I vocabulary and the 합니다体 of reading passages. That goes beyond this 33-lesson course; §9 notes it.

### 2.3 Naming: 韓国語, ハングル, 朝鮮語

**Facts.**
- "The Korean language is most frequently referred to in Japan as Kankokugo (韓国語) or Chōsengo (朝鮮語). While academia mostly prefers Chōsengo, Kankokugo became more and more common in non-academic fields" ([Wikipedia, *Names of Korea*](https://en.wikipedia.org/wiki/Names_of_Korea)) [curriculum convention].
- NHK's language programme uses ハングル for the language, "technically incorrect since hangul itself is a writing system, not a language"; according to a footnote there, the teachers avoid the name by saying "this language" (same page) [curriculum convention, second-hand via Wikipedia].
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

- **Order (practitioner and author knowledge; [inference] unless tagged).** Japanese textbooks and NHK courses start with letters and pronunciation (母音 → 子音 → 平音・激音・濃音 → パッチム → 連音化 and the other sound changes). This takes several lessons, often a third of a semester. Then come 이에요/예요 and 은/는 (〜は〜です), 이/가 아니에요, 있어요 / 없어요, 해요体, 합니다体, the past, and so on. The opened pages did not confirm the order, and in particular did not settle whether 합니다体 or 해요体 comes first (§11). **The Korean half's order** (hangul → polite → meet → sound-changes → nouns → isseoyo …) is fixed and close enough. Writers do not reorder; they cross-reference.
- **Readings.** Many Japanese textbooks print katakana readings (カムサハムニダ) under Korean, at least in early chapters. Others deliberately avoid them after the letters chapter [inference: common knowledge; the opened search results include a paper on how textbooks for Japanese speakers introduce 文字と発音, but its abstract page was empty, §11].
- **Grammar description.** Two traditions exist [inference, partly unverified]:
  - **語幹 + 語尾**, with 用言 classes 動詞・形容詞・存在詞・指定詞. The 小学館『韓日辞典』 uses this set: it defines 語幹 and 語尾, lists 있다・없다・계시다 as 存在詞 and 이다・아니다 as 指定詞, and names 으変則 and 르変則 ([JapanKnowledge, 小学館韓日辞典 凡例 10](https://japanknowledge.com/contents/skj/hanrei10.html)) [curriculum convention].
  - The **語基** system (第I・第II・第III語基), associated with 菅野裕臣 and used in some university textbooks. It could not be opened (§11).

  **Decision: 語幹 + 語尾.** The Korean half builds forms as "take the 요-form, swap 요 for …" (past, have-to, joining). That logic is closer to the 語基 idea (第III語基 = 해요体 minus 요) than its terminology. Writers may say 「해요体から요を取った形」 exactly as the English does, without naming 語基. The dictionary terms are what a learner will meet in the 小学館 dictionary and in most commercial textbooks [inference].

## 3. Register, terms and style of the Japanese text

### 3.1 Register and style

- **です・ます体** throughout. Explanations end in 〜です / 〜ます. Instructions use 〜しましょう / 〜てみましょう. Do not use である体, タメ口, or chains of 〜してください.
- **No あなた.** Write 「〜と言いたいときは」, not 「あなたが〜」. This also models the Korean rule (당신 is avoided; §4.9).
- **Textbook level:** clear, warm and compact, like NHK テキスト or a good university handout. Use no slang. A light 〜ですね is fine once per screen. Avoid exclamation chains.
- **Errors:** `시간가 있어요 ✕ → 시간이 있어요 ○`. The English half uses ✗ / ✓. These are not Hangul, so writers replace them with ✕ / ○ freely.
- **Mixing Korean into Japanese** (adapted from `ja.md` §2):
  - Hangul inside Japanese takes **no** spaces around it when it is followed by a Japanese particle: `은/는は「は」にあたります`. A full Korean phrase being studied gets a half-width space on both sides when Japanese continues: `시간 있어요? と聞きます`.
  - Full-width Japanese punctuation 。、「」『』（）. Romanization and digits are half-width: `gamsahamnida`, `3回`.
  - Japanese words being compared are quoted with 「」: 「は」, 「に乗る」.
  - Kanji glosses of Korean words go in full-width brackets directly after the Hangul: `가족（家族）`, `약속（約束）`. Use them at first mention in each lesson only.
- **Spelling:** 常用漢字 with standard okurigana. Use kana for 〜こと, 〜とき, 〜ところ as grammatical words. Loanwords use katakana with the long-vowel mark (メニュー, コーヒー, カフェ).

### 3.2 Glosses of Korean lines: one policy

- Glosses are natural, short Japanese for what the Korean means in context.
- **Politeness is mapped, not tagged:** the Japanese gloss itself shows the level, which English cannot do.
  - 해요体 → です・ます (`고마워요` 「ありがとうございます」).
  - 합니다体 → です・ます, or a set formal phrase (`감사합니다` 「ありがとうございます」, `수고하셨습니다` 「お疲れさまでした」).
  - パンマル → タメ口 (`고마워` 「ありがとう」).
  - -시- / 드시다 → 尊敬語 (`드세요` 「召し上がってください」, `계세요?` 「いらっしゃいますか」).
- **Keep the English tags (polite) (casual) (formal) (honorific) only where the Japanese gloss cannot show the difference.** Examples are the three 고마워요 / 고마워 / 고맙습니다 rows in `polite`, and minimal pairs in practice. Write them as **（해요体）（パンマル）（합니다体）（尊敬）** in that case.
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
| 가요 | **해요体** | 요形 (allowed once as gloss) | 「です・ます」にあたる、ふだんの丁寧な話し方 |
| -습니다 | **합니다体** | 格式体 (allowed once) | より改まった丁寧な話し方 |
| casual | **パンマル（반말）** | タメ口 (allowed as gloss), 非敬語 | 「タメ口」にあたる話し方 |
| politeness levels in general | **文体**（話し方のレベル） | | |
| -(으)시- | **尊敬の -(으)시-** | 尊敬語尾 | 動作をする人を高める |
| 드시다, 계시다, 성함 | **尊敬語** | 敬語動詞 | |
| Korean honorifics as a system | **敬語（높임말）** | 待遇表現 | |
| 絶対敬語 / 相対敬語 | exactly these | | §4.9 |
| 개, 명, 잔 | **助数詞** | 分類詞, カウンター | |
| 하나, 둘 / 일, 이 | **固有語数詞 / 漢字語数詞** (short: **固有語の数 / 漢字語の数**) | 和語数詞, 中国語の数字 | 日本語の「ひとつ・ふたつ」と「いち・に」のような2系統 |
| native Korean vocabulary | **固有語** | 和語 (Japanese only) | |
| Sino-Korean vocabulary | **漢字語** | 漢語 (keep 漢語 for Japanese words) | 漢字で書ける言葉 |
| Japanese vocabulary layers | **和語 / 漢語** | | |
| loanwords | **外来語** | | |
| ㅏ / ㄱ | **母音 / 子音** | | |
| 받침 | **パッチム（받침）** | 終声 (allowed in the reading guide once) | 文字の下につく子音 |
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
  - **Extra Korean needs a waiver.** A new Hangul word (준비, 무료, 일본) in a note or body still needs `"_waive":["hangul"]` and a `_note` on that row. For lesson bodies, put both on the `lessons.jsonl` title row.
  - **Set-equality works both ways.** A shorter Japanese body may not drop any Hangul run, any example token, or any ✕/○ pair of the English. "Shorter" in §7 means **less prose around the same Korean**: delete the English-specific explanation, keep every Korean example.
- **Lessons that need `_waive`** (proposed):
  - `hangul`, for the reading guide: ㄲ ㄸ ㅃ ㅆ ㅉ, ㅘ ㅟ ㅢ and the kana-comparison examples.
  - `sound-changes`, for 鼻音化 and 濃音化 examples beyond the English set, such as 학교 and 학꾜, which are already there, and 입니다, which is not.
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
  - A question in 해요体 is marked by rising intonation only. Japanese adds か. Tell the learner: 「か にあたる語はありません。」

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

- **Giving and receiving** [inference, partly research-backed]: Japanese has あげる / くれる / もらう. Korean has 주다 for both あげる and くれる, and 받다 for もらう. **〜てもらう / 〜ていただく have no direct Korean equivalent.** Yutani (1991) reports learners writing 가르쳐 받았다 (calque of 教えてもらった) and recommends rephrasing with the giver as subject: 아저씨가 숙제를 가르쳐 주셨다 ([Yutani 1991](https://www.korean.go.kr/nkview/nklife/1991_3/1_8.html)) [research-backed (practitioner report by a Japanese professor of Korean)]. The course has only -아/어 주세요 / 주시겠어요, so this is one warning line in `requests`: 「〜てもらう は、韓国語では『相手が〜てくれる』と言い換えます。」

### 4.9 Politeness and honorifics: the system is familiar, the rules differ

**Speech levels.**

| Japanese | Korean | Note [inference] |
|---|---|---|
| です・ます体 (everyday polite) | **해요体** | the default; the course's 요-form |
| です・ます in formal settings, announcements, set phrases (〜でございます in part) | **합니다体** | 감사합니다, 죄송합니다, 다음 역은 강남역입니다 (s0194) |
| タメ口 / 普通体 | **パンマル（반말）** | friends, younger people |

- **Holds:** a Japanese speaker already knows that one sentence must pick a level and stay there (the English half's "Mixing levels in one sentence" error), and that switching to タメ口 too early is rude. 말 놔도 돼요 ≈ タメ口でいいよ.
- **Misleads:** 합니다体 is not "more correct です・ます". In Seoul everyday speech, 해요体 is the normal polite level. Japanese learners who learnt 합니다体 first may sound stiff [practitioner opinion, common; unverified].

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

**絶対敬語 vs 相対敬語: the classic error** [research-backed (practitioner report), Yutani 1991]:
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
12. **な行 → ㄴ, dropped before ㅣ / y at the start of a word**: 男 だん 남, 年 ねん 년; 女 にょ → 여 (女子 여자), 二 に → 이.
13. **ら行 → ㄹ; at the start of a word → ㄴ or silent** (頭音法則): 料理 りょうり 요리, 旅行 りょこう 여행, 理解 りかい 이해, 連絡 れんらく 연락, 来日 らいにち 내일 (!), 労働 ろうどう 노동. Inside a word ㄹ stays: 地理 지리, 道路 도로.
14. **た・だ行 → ㄷ / ㅌ / ㅈ / ㅊ**: 大 だい 대, 地 ち 지, 茶 ちゃ 차, 天 てん 천. ず sometimes → ㄷ: 頭痛 ずつう 두통.

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
