# ja-en cold review (JA-REVIEWER), 2026-11-16

Scope: tools/content/ja/* and the `t` fields of tools/i18n/ja/ui.json. No generators, packs, profile.json or deviations files were touched.
Status: gen, validate, parity, i18n gen and i18n validate all PASS on scratch outputs. Every touched JS file passes `node --check`. ui.json is valid JSON, and only its `t` fields changed (verified by diffing against the original with `t` stripped). There is no Hangul anywhere under tools/content/ja; the Korean column was removed from DECKNAMES.md.
Exception: ui.json keeps Hangul in its read-only `ko` reference fields and `reference_ko_notes`. Only `t` may be edited, so this was left alone.

## 1. What changed

### Katakana readings: 151 `pron` fields, plus readings quoted in prose
The rules are settled in **PRON-RULES.md**. Checker: `node tools/content/ja/pron_check.js [phrases|words|all]`. It reports 0 phrase conflicts and 0 pattern failures. The remaining "word" lines it prints are linked forms that PRON-RULES §C allows (ハヴァ, キャナイ and similar).

Representative before → after examples:
- **Flapped t:** ミーティング → ミーリング (5 rows), プリティ → プリリー, ゥライティング → ゥライリング, スターティッド → スターリッド, イクサイティド → イクサイリッド, センスィティヴ → センスィリヴ, フィティング → フィリング, サーディ → サーリー (also in the numbers prose and the stress table).
- **Final -y with ー:** エニ → エニー, スタディ → スタディー, ビズィ → ビズィー, スパイスィ → スパイスィー, エヴリ → エヴリー, ユージュアリ → ユージュアリー, フィフティ → フィフティー, オールレディ → オールレディー.
- **US vowels:** カピー → カーピー, ジャブ → ジャーブ, サカー → サーカー, ダークター → ダクター, ワレット → ワーレット, ファロウ → ファーロウ, ロング → ローング, アクロス → アクロース, バークスィズ → バックスィズ, ワチング / ワーチング → ワッチング, ワチ → ワッチ.
- **TR / DR clusters:** ストリート → ストゥリート, トランスファー → トゥランスファー, トラヴェル → トゥラヴェル, エクストラ → エクストゥラ, ハンドレッド → ハンドゥレッド, チルドレン → チルドゥレン, アドレス → アドゥレス.
- **Lexicon:**
  - Place names: トウキョウ → トウキオウ (6 rows), オウサカ → オウサーカ.
  - Contractions and weak forms: イトゥル → イルル, ニートゥ → ニード タ, トゥエニ- → トゥウェニー, トゥエルヴ → トゥウェルヴ, トワイサ → トゥワイサ, トゥイスト → トゥウィスト.
  - do: ドゥ for the auxiliary, ドゥー for the main verb (What do you do? → ワット ドゥ ユー ドゥー?).
  - Also ウィー → ウィ, ウッジュー → ウジュー, ディッジュー → ディジュー, クウォーラー → クォーラー, クウェスチャンズ → クエスチョンズ.
- **Linking made uniform (§C):**
  - Linked: コール ユー → コーリュー (5 rows), ウェン ユー → ウェニュー, ビコーズ イット → ビコーズィット, スィーン イット → スィーニット.
  - Un-linked: ズィスィン → ズィス イン, リヴィン → リヴ イン, ワンスィナ → ワンス イナ, アン ズィ → オン ズィ.
  - to before a vowel → トゥ (like to order, went to Osaka).
- **Commas** added to readings whose English has a comma (10 rows).
- **Prose readings:**
  - 「カピー」 → 「カーピー」.
  - The banana note no longer uses 「ネァ」 (the pron is now バナナ).
  - マク<b>ダ</b>ナルズ → マク<b>ダー</b>ナルズ.

### Localisation in lesson bodies (6 rows)
I like K-pop → J-pop, I live in Busan → Osaka, My brother works in Seoul → Tokyo, Jeju → Okinawa (tense table), in Seoul, in Korea → in Tokyo, in Japan (prep table), I grew up in Daegu → Fukuoka.

Checks and practice keep Seoul, Busan, Jeju, Daegu, kimchi, Korea and Han Kang because they are parity-bound. Their Japanese prompts already translate them literally, which I verified.

### Teaching accuracy and prompts (15)
- **Prompts that invited unlisted answers, rewritten:**
  - modals or / ty / mc: 「病院に行ったほうがいい」 → 「医者に診てもらったほうがいい」. I also added a body note: 病院に行く ＝ see a doctor; go to the hospital sounds like 入院 or 救急.
  - prep ty: 「来週末会いましょう」 → 「（別れぎわに）じゃあ、また来週末に」.
  - email ty: 「明日は休みです（off を使って）」.
  - plurals ty: 「姉が二人います」 → 「姉妹が二人います」 (otherwise *older sisters*).
  - countable ty: 「（お店で）何名様ですか？」.
  - past ty: 「映画を1本見ました（watch の過去形で）」.
  - perfect-2 ty: 「ここに住んで3年になります（have + 過去分詞で）」.
- **conditionals ty:** removed あなた (「私だったら行きますね（アドバイスとして）」).
- **New lessons (not parity-bound):**
  - articles-3 fi: distractor `some` (defensible) → `two`.
  - articles-3 ty: added *I take the train to work*.
  - katakana-english ty: added *I want to make a complaint* / *I'd like to complain*.
  - articles-3 body: by train is no longer called 「本来の目的」.
- **False or loose statements fixed:**
  - plurals: 「いちばん落としやすい」 (articles are #1) → 「冠詞と並んで…」.
  - be: 「動詞が必ず一つ」 → 「必ず動詞があります」.
  - reported: 「say の後ろには来ません」 → 「直接は来ません（入れるなら say to me）」.
  - Excuse me note: it is used for bumping too, so the note now says only that it is not used for thanks.
- **Notes rewritten:** What's up? (a Korean-pun translationese 「空を見る…」), Small, please (warns that Sサイズ is not said in English), No, thank you (missing です).

### Style (about 120 edits)
- **Numerals:**
  - 〜つ and 〜人 in kanji (2つ → 二つ, 3人 → 三人, 4つ → 四つ; 9 places).
  - Other counters in arabic (一匹 / 一冊 / 一台 / 一杯 / 一枚 / 一本 / 三個 → 1匹 and so on; about 50 places).
  - Idioms stay in kanji (一日, 一度, 一石二鳥, 一回の会話).
- **Spelling, unified:** ていねい → 丁寧 (20), 観る → 見る (13), ～ → 〜 (27), 分から → わから, お腹 → おなか, 柔らか → やわらか.
- **Headings:** 16 です・ます headings → plain or noun form (e.g. 「アクセントが命です」 → 「アクセントが命」, 「have to：〜しなければなりません」 → 「〜しなければならない」).
- **Spacing:** §2 applied around `<b>`. The 36 spaces next to Japanese bold in a1 were removed; a space is kept next to bold English. 「！」 now takes a space inside a sentence (4 places).
- **Register:** 「（彼のこと）知ってる？」 for neutral English → 「知っていますか？」. Two `why` lines written as 「X = Y。」 → full です sentences. PAUSE: Sorry to bother you → お忙しいところすみません.

### Interface (45 `t` fields)
- **"Type" 種類 → 入力.** The key is also read by LL() for the quiz-mode chip (「⌨️ 種類 EN」 was shown). Only the feedback radiogroup aria-label now reads 入力.
- **"Got it" 覚えた → わかった, in all 8 related keys.** It is also the close button of the swipe-hint overlay.
- **Level titles aligned with meta.js TITLES:** Beginner 入門者, Student 学習者, Local 地元通, Pro 上級者, Master 達人. Sprout / Senior / Sensei, the legacy ko titles, are kept.
- **Error and instruction toasts:** 「〜しましょう」 → 「〜してください / お試しください」 (21 strings). Onboarding and learning prompts keep しましょう.
- **Hangul reading-drill text:** the false claim about letter blocks was dropped.
- **Other strings:**
  - 「K-dramas & music」 → 「映画・ドラマ・音楽」 (matches GOALS).
  - `{n} cards due` → 「復習カード{1}枚」 (no space).
- The bottom-nav labels are unchanged.

### Files
- New: PRON-RULES.md, pron_check.js (a checker, not part of the build), REVIEW.md.
- DECKNAMES.md: the Korean column was removed.

## 2. Checked and found fine
- All 41 lessons were read: bodies, checks, practice prompts, why and hint. Keyed answers and distractors are right except the items listed in §3.
- All 366 card meanings and notes, 86 dialogues, the examples, patterns, pause sets and idioms. Wasei-eigo and typical-error notes are good (テンション, クレーム, エアコン, ノートパソコン, テイクアウト, hang out vs play, I have stress).
- The standing rule holds: validate passes with 冠詞 / 複数 kept in every rewritten why.
- Glossary terms (§3) are used consistently. No あなた remains in content.
- The UI was read in full: 766 exact strings and 271 patterns. Counters follow §10.

## 3. Needs a native speaker / lead decision (most important first)
1. **The flap rule in practice.** スターリッド, イクサイリッド, センスィリヴ, ユナイリッド and ミーリング are faithful to en-US audio but look unusual. Confirm learners accept them, or narrow §A4 to a word list.
2. **city スィリー.** PRON-RULES supersedes §6's own example スィティ (no city row exists today). This needs the lead's sign-off because profile.md says otherwise.
3. **Linking scope (§C).** It is a fixed list chosen for consistency. Some outcomes read heavily (コースツァン アーム, ホウルドナ セカンド, ブレイキンガップ, ゲローフ アット).
4. **countable mc 「Can I have ___ water?」.** The distractor `a` is common in US restaurants ("a water"). It is parity-bound and cannot change; consider a deviation.
5. **Type-in items that may still reject natural answers** (parity-bound, so not fixed):
   - questions ty 英語を話しますか？ (*Can you speak English*)
   - tense ty 海に行きました (*the sea*)
   - countable ty (*How many people are there*)
   - present ty 猫が好きです (*I love cats*)
6. **"Type" → 入力.** The feedback radiogroup aria-label is now 入力. Splitting the key needs an engine change.
7. **わかった as the SRS rating label.** It is casual, which conflicts with §10's noun-button rule. 覚えた failed as the overlay close button; consider OK.
8. **Card targets still Korean-specific, with no deviation filed:** Can I speak to Mr. Kim?, reservation under Kim, Who's your bias? (a K-pop term). These need a deviation to localise.
9. **katakana-english mc 「今日はテンション高いね！」 → You're so excited today!** It is acceptable, but *hyper / in a great mood* may be closer.
10. **Remaining 〜しましょう in UI onboarding and learning prompts, and おしゃべり (Talker) as a level title.** These are judgement calls.

Not touched by rule: English option or answer text in checks and practice; deviations*.json; profile.json.
