# ja-ko native half: cold review (2026-11-23)

I read every jsonl row in Japanese next to its Korean (target half) and its English, joined by id: 641 cards, 149 dialogues, 74 examples, 47 patterns, 294 lesson sentences, 99 checks, 462 practice items, 43 decks, 5 groups, 140 labels (labels against the target `course.json` pause sets and idioms). I read all 33 lesson bodies in Japanese, and checked them against the English where a claim or a cross-reference was in question. I also ran four scripts:

* a Korean → Japanese index, which lists every Korean line that has more than one gloss across cards, sentences, examples and dialogues;
* an orthography and term-variant count;
* a scan for leftover Latin words;
* a duplicate check for meanings within a deck and for options within a question.

All fixes are applied by script, by id, as exact substring replacements that must match exactly once. The script is `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/jako-review/fix.py`. It reads the pre-review snapshot in `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/jako-review/base/` and writes the live files, so replaying it reproduces them. Both are session-temporary scratch files.

I touched only the merged files of `native/ja/ko/` (jsonl and `lessons/*.html`). I did not touch `work/`, `target/`, `ui.json` or `src/`. **A re-merge from `work/` with `mk_native.js ja --merge` would revert these fixes**, so re-run `fix.py` afterwards, or port the fixes into `work/`.

`node tools/halves/validate.js ja ko` gives **errors: 0** and 8 warnings, the same 8 as before the review:

* six Hangul run counts;
* the waived `hangul.html` reading guide;
* `trainer.json` absent.

`assemble.js ja ko` succeeds, and its output passes `node --check`.

## Rows changed per file

Changed rows are counted by diff against the snapshot.

| File | Rows changed | Of which accuracy / wording | Of which glossary or orthography only |
|---|---|---|---|
| cards.jsonl | 35 | 16 | 19 |
| sentences.jsonl | 42 | 7 | 35 (final ？ on question glosses) |
| practice.jsonl | 15 | 3 | 12 |
| dialog.jsonl | 10 | 9 | 1 |
| examples.jsonl | 5 | 5 | 0 |
| decks.jsonl (desc only) | 5 | 1 | 4 |
| labels.jsonl | 5 | 2 | 3 |
| checks.jsonl | 3 | 0 | 3 |
| patterns.jsonl | 2 | 1 | 1 |
| lessons.jsonl, groups.jsonl, course.json | 0 | – | – |
| lessons/*.html | 20 files | 7 files | 13 files |

The seven bodies with a content fix are story, polite, food, getting-around, nouns and office, plus the `ㅎの弱化` heading in sound-changes. The other 13 bodies have orthography or term changes only.

**Deck and group labels:** none changed. All 43 deck labels and 5 group names are natural, distinct Japanese and stay as shipped keys. One description changed: `ko.d.counters`, from 「本（びん）」 to 「カップ、瓶」.

## Decisions

| Topic | Decision | Rows |
|---|---|---|
| Casual level | **パンマル** names the Korean casual level everywhere (tags, notes, prompts). タメ口 stays only where it names the Japanese style: `polite.html` and `polite.k2`. | 21 replacements |
| Compound glossary terms | Written solid, as in the profile glossary: **하다用言, 하다動詞, ㅎの弱化**. The §3.1 spacing rule applies to Hangul in running text, not inside these terms. | c0052, verbs.04/.10, negation, cant, verbbasics, verbs, sound-changes |
| Katakana readings (profile §6.3: kana are comparisons, not readings) | Removed オッパ / オンニ / ソジュ / ラミョン / ホンデイック used as readings. A vocative gets a Japanese kinship word (e026 お兄さん, e027 and g147 お姉さん). s0197 and titles.08 drop the vocative, because the English gloss has none and the tag already says who speaks. Place names now appear in kanji only (弘大, 江南駅, 明洞); RR shows the sound. **Kept:** 「oppa（오빠）は『オッパ』に近い音」 in `hangul.html`, which is a comparison. Also kept are established Japanese loan names for dishes (キムチ, キンパ, トッポッキ …) and fandom words (チッケム, カムバック). | c0300, c0319, e026, e027, g147, s0197, titles.08, s0192, s0194, s0201, g018, g037 |
| 집에 가요 | 「家に帰ります」 in every row; already consistent. | – |
| 수고 family | 수고하셨습니다 = お疲れさまでした; 수고하세요 = お疲れさまです (to those who stay); 수고했어(요) = お疲れ(さま). Already consistent. ko.h.night keeps 「遅くまでお疲れさまでした」, because it is the app greeting the user. | – |
| 잘 부탁드립니다 | よろしくお願いします; the work-email card c0559 keeps いたします. | – |
| 콜 | 乗った！ (c0471 OK、乗った！). | – |
| 안녕히 가세요 / 계세요 | さようなら（見送る側）/（立ち去る側）, as in the profile. Already consistent. | – |
| 사장님 | 「社長さん（お店の人／ご主人）」 when it addresses or names a shop owner. | s0279 |
| 팀장 / 대리 | チーム長 / 代理. 代理 now carries the false-friend note in the office table. | office.html |
| Same Korean, same gloss | 만나서 반가워요 = お会いできてうれしいです; 무슨 일 해요? = お仕事は何をしていますか？; 주말에 뭐 해요? = 週末は何をしますか？; 여기 앉으세요 = こちらにお座りください; -(으)면 안 돼요? = 〜たらだめですか (pattern matches the requests table); 안녕히 주무세요 = おやすみなさい. | c0075, c0080, c0565, g095, p042, s0278, honorific.07 |
| Orthography | One form for each: 友達, 誰, 丁寧, 簡単, 一緒, 面白い, のど, 瓶, お腹がすく, ご入り用. | ≈45 hits across files |
| Question glosses | A lesson-sentence gloss whose Korean ends in ? and whose Japanese ends in か now ends in ？, like the cards and dialogues. | 35 sentences |
| Spacing around ＝ ＋ | Left mixed. It is never ambiguous, and a regex risks the Hangul spacing rule. | – |
| Cross-references | story → （10課「過去形」）. The full title contains Hangul the English body lacks, so the Japanese part of the title is used. polite → 「31課『尊敬語』」 (it had said 「後半の敬語のレッスン」). Already matching: have-to and office.14 → 「丁寧にお願いする」の課; office → 「尊敬語」の課; particles → 12課. 「レッスン」 is used only for the tab. | story.html, polite.html |
| `numbers` blurb | Keeps w3's correction: 「ものを数える・時・年齢は固有語の数、お金・分・日付は漢字語の数」. Nothing in cards, patterns, checks or practice contradicts it. | – |

## Accuracy fixes, the most important

1. **c0245 계세요** meant 「いらしてください」, which in Japanese reads as "please come". It is now 「いらっしゃいます（『いる』の尊敬語）」.
2. **g049 드세요** was 「飲んでください」, which breaks the 尊敬語 mapping. It is now 「お飲みください」.
3. **이번 역** was 「今度の駅」 (body and getting-around.05), which a Japanese reader takes as "next" and so collides with 다음 역 = 次の駅. It is now 「まもなく着く駅（この駅）」.
4. **Food lesson:** the body said that not pouring for yourself is the same as in Japan. The profile and the English both say it is the new part. Fixed.
5. **c0175** 「いくつ差し上げましょうか」 → 「いくつになさいますか」. **g005** 「行かれれば大丈夫です」 → 「あちらをまっすぐ行かれるとありますよ」. **g070** 「来ましたね？」 → 「あ、来ましたね。」
6. **e028** read as one brother and one sister. It is now 「年下のきょうだいが2人います」. **e051** now ends in 〜からです, after なぜなら. **e052** now reads 「コーヒー？それともお茶？」.
7. **미세먼지** was glossed PM2.5, but strictly that is 초미세먼지. It is now 「微細粉じん」, with PM2.5 named in the note as the everyday Japanese label (c0185, g086).
8. **이/가 with question words** (c0074 note, nouns body) is softened to 「ふつう」, because nouns.13 and getting-around.12 accept 이건 / 은 forms.
9. **c0306 채소:** 「標準語は채소」 is not quite true, since 야채 is standard too. It now says 채소 is the more formal choice.
10. **c0072 잠시만요:** 「少々お待ちください」 (staff register) → 「ちょっと待ってください」, matching pause expression.09.
11. **Labels:** ko.i12 now uses the set form 「錦上花を添える」. expression.18 물론이죠 is now 「もちろんですよ」, distinct from 04 그럼요 「もちろんです」.

## Claims checked and kept

* 食堂 (c0269), 飲料水 (c0311), 生水 (c0317), 認定 (c0465, c0520), 会食 (c0551, office.html), 夜勤 (c0554), 多情 (c0530): these false-friend notes are correct.
* 工夫 (공부), 来日 (내일), 只今 (지금), 生鮮 (생선), 苦生 (고생), 史劇 (사극), 芸能 (예능), 便宜店, 化粧室, 近処, 鎮痛剤, 菜蔬: the kanji are correct.
* 小確幸 (c0523): coined by 村上春樹, then spread in Korea. Correct.
* 「日本人の名前は『ン』で終わるもの以外、たいていパッチムなし」 (c0073, meet.html): true under the Korean transcription rules for Japanese, where ク and ツ become 쿠 and 쓰. Kept with 「たいてい」.
* The 絶対敬語 passages (polite, honorific, office) and 씨 ≠ さん (titles, pronouns-questions): kept.
* 콘센트 (c0117): explained as the same 和製英語 as Japanese コンセント. I find this better than the English etymology.

## For the lead (outside my scope)

* `ui.json` has **0 overrides**, and 86 interface "words remaining". The ja interface pack shows 英語 where 韓国語 is meant (profile §9.5). This needs a ja-ko `ui.json` before shipping.
* `trainer.json` is absent, so every trainer stays off for ja.

## 20 items a native speaker should still check

1. `lessons/hangul.html` reading guide: ㅓ 「口を『ア』のように大きく開け…『オ』」, 濃音 「前に小さい『っ』」, ん anchors 案内／さんま／りんご.
2. c0002 to c0012, c0057, c0058: vowel meanings (「口を大きく開けたオ」「唇を横に引いたウ」 …). Do they read naturally as card meanings?
3. c0027 to c0031, c0044, c0045: 「のどを締める濃音」.
4. `polite.html`: 「わたくしは…食うよ」 as the mixed-level analogy.
5. `meet.html` and c0073: the claim about Japanese names and パッチム.
6. `isseoyo.html` mistake row: 「今、学校です」 as the Japanese parallel of 지금 학교예요.
7. `verbs.html` and `past.html`: the 〜ています warnings (結婚しています → past, 知っています → present).
8. `honorific.html` and `office.html`: the 絶対敬語 paragraphs (「部長の田中は席を外しております」).
9. `titles.html`: 「フルネーム＋씨 が無難」. 오빠/형 are called 「お兄さん」 in prose; e026, e027 and g147 now use お兄さん/お姉さん as vocatives.
10. s0197 and titles.08: the vocative 오빠 is now dropped from the Japanese prompt. Is the tag enough?
11. ko.t01 to t16 level titles: 新芽, 学生, 先輩, 上級者, 達人, 師範.
12. Pause idioms ko.i01 to i32: 「人間万事塞翁が馬」「錦上花を添える」「愚公山を移す」「自分の力で成功する（たたき上げ）」.
13. Proverbs ko.z.saying.06, 08 and 13 (行った日に限って市が立つ / 花より団子 / 紙一枚でも二人で持てば軽い).
14. c0185 and g086: 「微細粉じん」 versus the everyday 「PM2.5」.
15. c0145: 원 = 「圓」 (etymologically right; is it worth showing?).
16. c0511 チッケム and c0497 推し活・オタ活: current fandom usage.
17. c0465 and c0520 인정: 「確かに / それな」 and the 認定 note.
18. `getting-around.html` and getting-around.05: 「まもなく着く駅（この駅）」 for 이번 역.
19. `food.html` tip: the rewritten お酌 sentence.
20. s0228 and story.02: 「それで、家に遅く帰りました」 (perhaps 「帰りが遅くなりました」).
