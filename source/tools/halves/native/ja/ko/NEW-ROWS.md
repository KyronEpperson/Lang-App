# ja-ko top-up: rows written on 2026-11-23 (for the cold reviewer)

This top-up brings the half up to the Korean half of 2026-11-23: Core words, Flirting words, Compliments, Countries, and the learner's name. One writer did it, and the writer is not a native speaker. Brief: `docs/briefs/x-ko-topup.md`. Nothing here has had a native check.

`node tools/halves/validate.js ja ko` gives **errors: 0** and **words remaining: 0**. It shows 7 warnings, the same ones the reviewed half already had (six Hangul run counts, plus the waived `hangul.html`). `assemble.js ja ko` builds 56 decks and 1413 cards, and the output passes `node --check`. The validator checks format and Hangul only, not the Japanese.

The binding rules were `docs/profiles/ja-ko.md` §3 and this half's `REVIEW.md`:
- です・ます in prose;
- glosses mapped by level: ヘヨ体 → です・ます, パンマル → タメ口, -시- → 尊敬語;
- the closed glossary: 助詞, 連結語尾, 連体形, ㅂ変則 / ㄷ変則 / 르変則 / ㅅ変則 / ㅎ変則, ㄹ語幹, パンマル, クッション言葉;
- no katakana readings of Korean, and place names in kanji (明洞, 南山タワー);
- one gloss for each recurring phrase.

`ui.json` and `trainer.json` were not touched.

All changes were applied by id, from a script: `<scratch>/topup-ja/apply.py`. It rebuilds the live files from `<scratch>/topup-ja/backup/` and `<scratch>/topup-ja/data/*.txt`, so it can be replayed. Here `<scratch>` = `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad`, which is session-temporary.

## Counts

| file | added | changed | removed |
|---|---|---|---|
| cards.jsonl | 773 (ko.c0643 … ko.c1415) | 1 (ko.c0617 note: 멕시코 사람) | 1 (ko.c0077 미국에서 왔어요) |
| examples.jsonl | 201 (ko.e075 … ko.e275) | 0 | 0 |
| dialog.jsonl | 52 (ko.g150 … ko.g201) | 2 (ko.g019 → @@, ko.g021 → フィリピン / セブ) | 0 |
| sentences.jsonl | 5 (ko.s0297 … ko.s0301) | 0 | 5 (ko.s0295, s0012, s0127, s0289, s0292) |
| decks.jsonl | 13 | 0 | 0 |
| groups.jsonl | 1 (ko.grp.core-words) | 0 | 0 |
| practice.jsonl | 0 | 4 (meet.06 メキシコ; particles.03 日本 / 일본에 왔어요; office.05 「@@としてメールに署名するときは？」; office.08 → @@) | 0 |
| lessons/*.html | 0 | 3 (meet, particles, office: tokens renumbered; meet gains the country tip after the script) | 0 |
| patterns, lessons.jsonl, checks, labels, course.json, ui.json, trainer.json | 0 | 0 | 0 |

The `meet` tip reads 「どの国も同じ形です：미국에서、필리핀에서、일본에서 왔어요。「国名」デッキにすべての国があります。」 It needs no `_waive`, because the English tip carries the same Hangul. The tip also clears the old `div 4→3` warning.

## Labels chosen (permanent progress keys)

| deck | label |
|---|---|
| ko.d.top-nouns | よく使う名詞 |
| ko.d.top-verbs | よく使う動詞 |
| ko.d.top-adjectives | よく使う形容詞 |
| ko.d.top-adverbs | よく使う副詞 |
| ko.d.top-pronouns | よく使う代名詞 |
| ko.d.top-particles | 助詞をもっと |
| ko.d.top-connectors | つなぐ表現をもっと |
| ko.d.top-interjections | よく使う感動詞 |
| ko.d.top-words | 便利な言葉 |
| ko.d.top-counters | 助数詞をもっと |
| ko.d.flirting-words | 恋愛の言葉 |
| ko.d.compliments | ほめ言葉と返し方 |
| ko.d.countries | 国名 |
| group ko.grp.core-words | 基本語彙 |

The three 「〜をもっと」 labels avoid a collision with the existing 「助詞」「接続詞」「助数詞」 decks, and the descs name those decks verbatim.

## Decisions

- **漢字語 bridge.** Card notes start with 「漢字は「〇〇」。」 (the house form, as in c0606 and c0613), but only where the Korean hanja compound is certain. Most bridges are ordinary Japanese words in 新字体 (問題, 時間, 生活, 準備, 結婚, 魅力, 雰囲気, 第一, 普通 …). Some compounds are not everyday Japanese and are shown as etymology only: 始作, 過讃, 個月 explained as 「か月」, 濠洲, 独逸, 泰国, 北韓. 童顔 is a Japanese word, but the Korean compliment means 「年より若く見える」, so the note says so.
  - The headword itself cannot appear in a note unless the English note has it, so a bridge is kanji-only.
  - For 하다 words, the note gives the noun only (「漢字は「準備」。」), because 「＋하다」 adds a Hangul run.
- **False friends added** (only where certain):
  - 물건 = 物件: 品物, not real estate.
  - 음식 = 飲食: food.
  - 문 = 門: an ordinary door.
  - 다정하다 = 多情: kind and caring, not fickle.
  - 이상하다 = 異常: lighter, 「変だ」.
  - 당신 / 씨: the Japanese あなた / さん cautions.
- **ko.c0077's 美国 / 米国 note** moved to ko.c1221 미국 「アメリカ（米国）」.
- **Grammar framing for Japanese learners:**
  - 것 / 거 are 形式名詞 「もの・こと・の」.
  - 밖에 = 「しか」 with an obligatory negative, as in Japanese.
  - -(으)러 = 「〜に行く」.
  - 이 / 그 / 저 = こ・そ・あ.
  - 들 is often dropped, as in Japanese.
  - 만나다 / 타다 take 을/를, not 「に」.
- **Flirting scale.** The English Mild / Warm / Bold appears at the end of each note as （控えめ）（温かめ）（大胆）, or （控えめ〜温かめ）. The English "No gender forms in Korean" was dropped as irrelevant for Japanese.
- **Countries.** Names follow standard Japanese (外務省 style): トルコ, キルギス, ジョージア, 北マケドニア, エスワティニ, コートジボワール, ドミニカ共和国 vs ドミニカ国, コンゴ民主共和国 vs コンゴ共和国, 赤道ギニア. 204 meanings, all distinct. Rows without an English note stay empty.
- **@@.** Rows read 私は@@です, マーケティングチームの@@です and @@より. No particle is fused to the name.
- **Register.** Every new example, dialogue line and phrase card was screened by script: a Korean ending in 요 / 니다 must have a です・ます gloss, and -시- / 께 / 드리다 must show as 尊敬語 or 謙譲語. Examples: 「こちらは私の先生でいらっしゃいます」, 「今度お教えしますね」, 「おじいさんがいらっしゃいました」, 「おやさしいんですね」.
- **Gloss index.** One script checked that no Korean has two different Japanese glosses. It covered whole lines across cards, sentences, examples and dialogue halves, plus the `Korean ＝「…」` pairs inside the new card notes, plus the pause set `ko.z.compliment` against `labels.jsonl`. As a result, 분위기 있어요, 센스 있어요, 매력 있어요 and 열심히 하시네요 match the pause labels, and 천 원밖에 없어요 is 「1,000ウォンしかありません」 everywhere.
- **Reused glosses:** 많이 드세요 = たくさん召し上がってください; 이거 얼마예요? = これ、いくらですか？; 밥 먹었어요? = ご飯食べましたか？; 빨리 나으세요 = 早くよくなってくださいね; 잠깐만 기다려 주세요 = ちょっと待ってください (REVIEW: no staff register).

## 20 rows most worth a native speaker's check

1. **Deck labels:** 助詞をもっと / つなぐ表現をもっと / 助数詞をもっと, 便利な言葉, 恋愛の言葉, ほめ言葉と返し方, group 基本語彙. Are they natural, and in the style of the existing labels?
2. ko.c0707 물건 「品物・もの」 and its 物件 false-friend note.
3. ko.c0696 음식 「料理・食べ物」 (note 飲食), and ko.c0701 문 「ドア・扉」 (note 門).
4. ko.c1125 다정하다 and the 多情 note. Also ko.c0842 이상하다 and the 異常 note.
5. ko.c0645 / ko.c0647 것 / 거 as 「もの・こと・の（形式名詞）」.
6. **Flirting-words level tags** （控えめ）（温かめ）（大胆）: are they clear to a Japanese reader?
7. ko.c1138 훈남 = 「雰囲気イケメン」 and ko.c1139 심쿵 = 「胸キュン」: current usage?
8. ko.c1171: the film title 『春の日は過ぎゆく』 (봄날은 간다, 2001).
9. **Interjections** ko.c1041 まさか・またまた, c1045 はあ（やれやれ）, c1047 げっ・ひっ, c1051 もう、やだ（照れ）, c1056 おえっ.
10. ko.c0943 씨 「〜さん（フルネームか下の名前のあと）」, with the note that its range is narrower than さん.
11. ko.c0956 당신 「あなた（夫婦・歌・広告）」 and its note.
12. ko.c0965 저희 「私ども」, and ko.c0970 / c0972 / c0976 얘 / 걔 / 쟤 「この子・こいつ / その子・あいつ / あの子」.
13. **Countries:** ko.c1256 トルコ, c1253 キルギス, c1293 セントビンセント及びグレナディーン諸島, c1294 セントクリストファー・ネービス, c1229 フィリピノ語.
14. **Etymology notes:** ko.c1213 北韓, c1216 臺灣, c1233 濠洲, c1234 独逸, c1238 泰国.
15. **Counter notes:** ko.c1106 篇, c1113 「個月（日本語の「か月」）」, c1114 二人分.
16. ko.c1201 발표 잘 들었습니다 = 「発表、しっかり拝聴しました」.
17. ko.c1204 / c1206 / c1207 replies: いえいえ、とんでもないです / 恐縮です・とんでもございません / 過分なおほめの言葉です (과찬이세요, also in g197).
18. ko.c1184 「几帳面でいらっしゃいますね」 and c1188 「本当に働き者でいらっしゃいますね」.
19. ko.e091 먼저 들어가세요 = 「お先にどうぞ。」, ko.e195 그냥 물 주세요 = 「お水だけください。」, and ko.g201 (presenter's reply 「とんでもないです。聞いてくれてありがとうございます。」).
20. ko.c0731 시작이 반이다 = 「始めれば半分終わったも同然」, and ko.c0757 -아/어 버리다 = 「〜してしまう」.
