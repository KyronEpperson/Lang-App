# nan-en cold review

Reviewer: NAN-REVIEWER, 2026-11-27. Scope: `tools/content/nan/` (not `profile.json`, `deviations*.json`, `kk.js`, `taigi_lint.js`, `mk_briefs.py`), the values of `tools/content/nan/ui.json` and the `t` of the 39 `en` entries of `tools/i18n/nan/roadmap.json`. No native Taigi reader has seen this course yet; section 4 lists what one should check first.

Overall: the four writers left the course in good shape. It reads as consistent written Taigi in MOE characters, with no Cantonese left (taigi_lint: Cantonese 0 in every file), Taiwan character forms, the Taiwan setting applied and every pron made by kk.js. The review made 84 corrections. 5 of them fix something wrong or misleading; most of the rest make the same English carry the same Taigi in every file and settle the points the writers flagged.

## 1. What changed

**Wrong or misleading (5)**

- `extra.js`, PAUSE compliment: You're glowing | 你看起來神神 → 你看起來氣色真好. (神神 means "dazed, absent-minded".)
- `extra.js`, IDIOMS: Let the cat out of the bag | 漏氣，共祕密講出去 → 走漏風聲，共祕密講出去. (漏氣 means "lose face, embarrass oneself", not "leak a secret".)
- `more/a1.js`, present: They work on weekends. | 伊兩个歇睏日嘛愛上班 → 𪜶 (in) 週末嘛愛上班; practice They live __ Macau. | 伊兩个蹛佇澳門 → 𪜶 (in) 蹛佇澳門. (伊兩个 means "the two of them", not "they". The writer was avoiding 𪜶; the lead's rule allows 𪜶 with (in).)
- `decks.js`, deck 英文字母 Z: the note said 「台灣真濟人講做 "zei"」, while lesson 1 says Taiwan schools teach *zee*. Both now say the same thing: 「美國人講 zee /ˈzi/，台灣學校教的嘛是 zee（英國講 zed）。有人講做 "zei"，愛改做 /ˈzi/。」

**Decisions on the flagged points (applied everywhere)**

- **Weekend = 週末** (MOE word, already used 23 times). 歇睏日 (used only in `more/a1.js`) → 週末 in 5 places: 這个歇睏日你欲創啥物？ → 這个週末你欲創啥物？; 阮歇睏日嘛愛上班 → 阮週末嘛愛上班. 歇睏 stays for "day off" (I'm off tomorrow | 我明仔載歇睏).
- **Are you okay? = 你有要緊無？** Before: 你敢無代誌？ (be), 你敢有要緊？ (questions), 你敢有按怎？ (dialogue). Now all three say 你有要緊無？, which matches the reported-speech lesson's 伊問我有要緊無.
- **call (by phone) = 敲電話**, as MOE writes it (khà tiān-uē). Already used 25 times, never 拍電話 / 打電話: no change.
- **play = 耍 / 好耍**, the MOE character (sńg). Kept: pray / play | 祈禱 / 耍 / 拍（球）; That sounds fun | 聽起來真好耍.
- **Loanword spellings** bì-lù, bá-suh, thoo-lá-khuh, oo-tó-bái, lái-tà, hán-tóo: spelt the same in all three files that use them (`decks.js`, `lessons.js` pron, `more/a1.js` tw-english). Not changed; on the native list.
- **Letter-name habits** (lesson 1 and deck 21 now agree): F "ef-fu", L "el-lo", M "em-mu", R "a-lu", S "es-su", V said as B's /ˈbi/. Lesson: L 莫唸做 "e-lo" → "el-lo"; V 予人唸做 B 的 "bi" → B 的 /ˈbi/. Deck: R 毋是 "ah-lu" → "a-lu".
- **Mouth terms:** 上排喙齒 / 上下喙齒 (Mandarin 上, 25 times in `decks.js`) → 頂排喙齒 / 頂下喙齒, as the lessons and practice already wrote it.
- **mind = 掛意** (MOE: 掛意 = 介意). 介意 → 掛意 in 10 places (Would you mind 「你敢會掛意……？」, No（無掛意）, 若你無掛意的話, mind 是「掛意」, 一點仔嘛無掛意, 我無掛意等). `extra.js` already said 莫掛意.
- **Slash style = ` / `** with a space on both sides, also after full-width punctuation (104 cases already did this, 6 did not). 加油！/ 祝你好運！ → 加油！ / 祝你好運！; fan（電風）/ pan → fan（電風） / pan (and 3 more in pron); 我來接（電話）/ 我來開門 → 我來接（電話） / 我來開門; course interface 音標／筆記 → 音標 / 筆記; roadmap 發音陷阱：R/L、F/P、TH → R / L、F / P、TH.

**Same English, same Taigi (lint "meaning variants" 25 → 9)**

- I live in Taipei 我蹛台北 → 我蹛佇台北 (deck = lessons); How do you say this in English? 這英語按怎講？ → 這个英語按怎講？ (deck, dialogue); How much is this? 這偌濟錢？ → 這个偌濟錢？; Could you say that again? 你會使閣講一擺無？ → 會使閣講一擺無？ (lesson = deck = dialogue); Can you lend me a pen? 會使借我一支筆無？ → 你會當借我一支筆無？ (deck = tw-english); I'll take you to the station 我紮你去車站 → 我送你去車站 (lesson = deck; 紮 is for things; the natural verb for people, 𤆬 tshuā, is outside the BMP); I'll call you later 我等咧敲電話予你 → 我等一下才敲電話予你 (tense = will); It costs an arm and a leg 貴甲離譜 → 貴參參 (lesson and practice = deck).
- Pron minimal pairs, deck = lesson: sink 洗手槽 → 洗碗槽; night 暗時 → 暗時 / 暝; show 表演 / 展示 → 表演 / 予人看; full 滿的 / 飽的 → 滿 / 飽; bad 歹的 → 䆀 / 歹; cold 冷 / 寒 → 寒 / 冷; bring 紮來 → 提來; fan 電風 → 電風 / 粉絲.
- Kill two birds with one stone: lesson table (header 台語) and practice prompt 一石二鳥 → 一兼二顧, as the IDIOMS list says.
- The 9 that remain are deliberate: the lesson row carries a teaching remark the card does not need (我蹛佇台北 (I am live ✗), 我佇銀行上班（一向按呢）, the four idiom images, 我佮意音樂（泛指）…), and it-there teaches 落雨矣 / 咧落雨 where continuous has 咧落雨.

**Mandarin leftovers and unnatural wording**

- figure out 想出辦法 / 搞清楚 → 想出辦法 / 想予清楚; 我搞無清楚這台機器欲按怎用 → 我想無這台機器欲按怎用 (搞 is Mandarin).
- 我該走矣 → 我愛先來走矣 (該 is Mandarin; the smalltalk lesson already says 我愛先來走矣).
- 我共你的咖啡弄倒矣 → 挵倒矣; I admire you 我真欣羨你 (欣羨 = envy) → 我真佩服你; Burn the midnight oil 熬暝做到半暝 (says the same thing twice) → 熬暝拍拚; Seriously? 正經的？ → 你講真的？ / 認真的？; 伊逐擺攏慢到 → 晏到 (as everywhere else); 我會共你祈求好運 → 我會替你祈求好運 (= deck).
- The 130 taigi_lint Mandarin warnings (131 after the edits) were read one by one. Each one is Taigi or a fixed compound: 就是 tō-sī, 一下 tsi̍t-ē, 那聽那看 (ná…ná), 哪有可能 (ná-ū), 在 only in 現在式 / 所在 / 在地通 / 存在 / 實在, 呢 only in 按呢, 一點 only in 一點仔 / 一點鐘, 他 only in 吉他. None was left to change.
- Cantonese the lint cannot see: no Cantonese word order or vocabulary survives (I checked 先 after the verb, 飲, 搭, 埋, 晒, 返, 俾, 好似, 洗手間, 的士 and similar). The only scaffold trace was 伊兩个 for 佢哋 (fixed above).

**Non-BMP characters (full list after the review)**

| character | uses | files | rule followed |
|---|---|---|---|
| 𪜶 (in, "they") | 6 | `decks.js` 1 (they card), `more/a1.js` 5 (plurals prose, object-have table, object-have practice, present ×2 new) | yes: every use is followed by (in) |
| 💀 (emoji) | 1 | `decks.js` (I'm dead: 訊息內底定定配 💀) | emoji, not a Han character |
| 🇰🇷 / 🇺🇸 (flag emoji, two code points each) | 1 key / 1 value | `ui.json` (the key text 🇰🇷 and the value 🇺🇸) | emoji |

No other non-BMP character appears. 𤆬 is not used.

## 2. Edit counts per file

| File | role | wrong / misleading | unnatural wording | Mandarin / Cantonese leftover | pron | formatting | total |
|---|---|---|---|---|---|---|---|
| `decks.js` | A | 1 | 12 | 25 | 0 | 0 | 38 |
| `extra.js` | A | 2 | 5 | 4 | 0 | 0 | 11 |
| `meta.js` | A | 0 | 0 | 0 | 0 | 0 | 0 |
| `tools/i18n/nan/roadmap.json` (en `t`) | A | 0 | 0 | 0 | 0 | 1 | 1 |
| `lessons.js` | B | 0 | 9 | 3 | 0 | 4 | 16 |
| `practice.js` | B | 0 | 3 | 1 | 0 | 0 | 4 |
| `more/a1.js` | C | 2 | 7 | 0 | 0 | 1 | 10 |
| `more/a2.js` | D | 0 | 0 | 2 | 0 | 1 | 3 |
| `more/b1.js` | D | 0 | 0 | 0 | 0 | 0 | 0 |
| `ui.json` | lead | 0 | 0 | 0 | 0 | 1 | 1 |
| **Total** | | **5** | **36** | **35** | **0** | **8** | **84** |

"Unnatural wording" includes the same-meaning unifications. Each count is one replaced string (the 25 頂排 / 頂下 replacements in `decks.js` are 24 card notes plus one note with both). New file: this one.

## 3. Read in full / only scanned

- **Read in full:** `decks.js` (every card and note), `extra.js` (DIALOG, EXAMPLES, PATTERNS, PAUSE, IDIOMS), `lessons.js`, `practice.js`, `more/a1.js`, `more/a2.js`, `more/b1.js`, `meta.js`, `ui.json`, and the 39 `en` titles of `roadmap.json`.
- **Checked by script:** every pron in `decks.js` that also appears in `tools/content/zh/decks.js` (407 cards, including the required 30-card sample) put through `kk.js` from the zh IPA: 407 identical, 0 differences. The 56 nan-only cards and the lesson rows were not compared that way, only checked by `kk.js --check` and lint (both clean). Also by script: the non-BMP scan, the slash and spacing patterns, the same-English-different-Taigi pairs (my own full list, since lint prints only 15), and the Mandarin and Cantonese word greps above.
- **Not looked at:** `profile.json`, `deviations*.json`, `kk.js`, `taigi_lint.js`, the Korean-target entries of `roadmap.json`. No audio was heard.

## 4. For a native Taigi reader (most important first)

1. **掛意 for "mind"** (Would you mind…? 「你敢會掛意……？」, No（無掛意）, I don't mind waiting 我無掛意等). Does it read naturally here, or is 介意 what people say?
2. **你有要緊無？** for *Are you okay?* (be, questions, dialogue), and 伊問我有要緊無.
3. **英語** for "English" everywhere (course name and prose), and 英文字母 for the alphabet.
4. **Grammar terms read in Taigi**: 冠詞, 複數, 第三人稱單數, 過去分詞, 假設語氣, 間接引述 (in every `why`).
5. **有 + 動詞 = past affirmation** (「我有去」 is not *I have went*), the core claim of `past`, `tense` and `tw-english`.
6. **Letter-name habits** in lesson 1 and deck 21: "ef-fu", "el-lo", "em-mu", "a-lu", "es-su", V said as /ˈbi/, Z as "zei". Are these real Taiwan habits, and do these spellings show them?
7. **Loanword spellings** bì-lù (啤酒), bá-suh (巴士), thoo-lá-khuh (卡車), oo-tó-bái (摩托車), lái-tà (打火機), hán-tóo (方向盤): MOE spellings? Is 方向盤 the right gloss for hán-tóo?
8. **𪜶 (in)** for "they" (6 uses): readable, and is the font there? The interface avoided it.
9. **週末** for "weekend" (chosen over 歇睏日) and **敲電話** for "call".
10. **頂排喙齒 / 頂下喙齒** and the verbs 摸 / 觸 (the deck still says 觸下脣, the lessons say 摸下脣) for mouth positions.
11. **我送你去車站** for *I'll take you to the station* (𤆬 is the natural verb but is outside the BMP).
12. **時間 with 字**: 七點三字 (7:15), 九點一字 (9:05) in `numbers`. Still understood by younger readers?
13. **Proverbs in the PAUSE list**: 熟手就會巧 (Practice makes perfect), 細膩較有春, 慢慢仔來較緊, 食一擺虧，學一擺乖, 親目看著才準算. Are these the phrases a Taigi reader would pick?
14. **Idiom equivalents**: 貴參參, 一兼二顧, 講著曹操，曹操就到, 除非日頭對西爿出來, 走漏風聲 (new), 熬暝拍拚 (new).
15. **New or changed card words**: 你看起來氣色真好 (glowing), 我真佩服你 (admire), 你講真的？ (Seriously?), 你咧滾笑？ (Are you kidding me?), 想予清楚 / 想無 (figure out).
16. **會使 vs 會當** in requests: Could you…? 會使…無？ and Can you lend me…? 你會當…無？ are both used. Is the split natural?
17. **相借問, 開講, 呵咾佮好感, 病院佮緊急狀況** (deck names, profile §11).
18. **忝** (tired) and **佮意 / 愛** (like) in prompts.
19. **「食飽未？」** as a greeting contrast (smalltalk, perfect-2).
20. **勞力 vs 多謝** (polite lesson, deck 3 note): is the split right?
21. **予人 + 動詞** as the passive gloss (passive).
22. **我毋會袂記得** for *I won't forget* (will): natural, or 我袂袂記得 / 我一定會記得?

## 5. Found but not fixable in this scope

- `parity.js` warns about unused deviations `lessons:tw-english` and `lessons:articles-3` (stale entries in `deviations.json`, the lead's file).
- `ui.json` key "Romanization (auto if blank)" → 音標（會使免填）: the value does not say the field is filled automatically. The lead should check whether an English course really generates a pron when the field is left blank, and if it does, say 「無填就自動產生」.
- The interface (NOTES §1) has no non-BMP characters by design. This course now uses 𪜶 6 times (lead rule: always with (in)) plus one 💀. The lead should check both in a real build on the target fonts.
- tw-english table row 「提」「紮」 → bring / take, while deck 22 says 「提」「送」. Both are defensible. I did not merge them without a native reader.

## Edits per role

- A (decks.js, extra.js, meta.js, roadmap en titles): 50
- B (lessons.js, practice.js): 20
- C (more/a1.js): 10
- D (more/a2.js, more/b1.js): 3
- lead (ui.json): 1
