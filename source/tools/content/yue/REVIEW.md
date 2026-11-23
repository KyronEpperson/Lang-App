# yue-en cold review

Reviewer: YUE-REVIEWER, 2026-11-23. Scope: `tools/content/yue/` (not `profile.json`, not `deviations*.json`) and the `t` values of `tools/i18n/yue/ui.json` and `roadmap.json`. No native Hong Kong reader has seen this course yet; section 4 lists what one should check first.

Overall: the course was in good shape. It is consistent Hong Kong written Chinese in Traditional characters, with no Simplified characters, no wrong one-to-many conversions (發 / 髮, 後 / 后, 裏 / 里, 乾 / 幹, 麵 / 面), no pinyin or 普通話 explanations, no Hangul and no spoken Cantonese outside 「」 apart from one table (fixed). 82 corrections were made; 7 fix something wrong or misleading, the rest make wording, terms and character forms agree across files.

## 1. What changed

**Wrong or misleading (7)**

- Wrong Chinese equivalent of an idiom (`extra.js`, PAUSE): Live and learn | 活到老，學到老 → 經一事，長一智. (活到老，學到老 means "never too old to learn".)
- Cross-reference to a lesson by a title it does not have (`lessons.js`, `idioms`): 詳見「港式英文陷阱」一課 → 詳見「港式英文陷阱：在香港通用，出外要換個說法」一課 (lead ruling 6).
- Reference to a setting that does not exist under that name (`lessons.js`, `pron`): 可以關掉「顯示音標」 → 可以用「Aa 音標」開關或設定裏的「練習時顯示音標」把它關掉 (the two labels the interface dictionary really has).
- Typed items whose only accepted answer is *movie* while the learner's school word is *film* (profile rule; 4 items in `more/a2.js`, `more/b1.js`): 我當時在看電影 → 我當時在看電影（用 movie）; likewise 我們看的那齣電影很好看, （我到的時候）電影已經開始了, 他說他看過那齣電影.

**One term per concept (lead rulings 1, 3, 7)**

- "spell" is now 串字 / 串法 everywhere (the lessons and practice already used it): 美式拼法是 color → 美式串法是 color; 逐個字母拼出來 → 逐個字母串出來; 英式拼法 cancelled → 英式串法 cancelled; interface 英文字是怎樣拼成的 → 英文字的串法; 英文的拼寫不一定反映發音 → 英文的串法不一定反映發音; roadmap 字母與讀出拼寫 → 字母與口頭串字.
- Level titles: interface Beginner 入門 → 新手, Talker 話匣子 → 健談, so the dictionary agrees with `meta.js` TITLES and the profile.
- 短句 is the interface word for the "My phrases" deck (我的短句). The course used it for "short sentences" and 時間短語 for "time expressions": 把兩個短句連成一句 → 把兩個簡短的句子連成一句; 這類時間短語 → 這類表示時間的字詞.
- 一般動詞, 眾數, 冠詞, 文法 were already used without exception; nothing to change.

**Same English, same Chinese (lint "meaning variants" 34 → 8)**

- sink 洗手盆 → 洗滌盆; I went to the beach 海灘 → 沙灘 (lesson and 4 practice strings; the deck and dialogue say 沙灘); It was nice talking to you 和你聊天很愉快 → 跟你聊天很開心; Take the elevator… 乘升降機 → 搭升降機; I'll call you later 我晚一點 → 我稍後; Are you okay? 你沒事吧？ → 你還好嗎？; Let's have lunch 我們去吃午飯吧 → 我們吃午飯吧; a pen 一枝筆 → 一支筆.
- 14 minimal-pair glosses in the `pron` lesson now equal the deck card (right 右邊 / 對 → 右邊 / 正確的; three 數字 3 → 三; bad 壞 → 壞的 …).
- The 8 that remain are deliberate: the lesson row carries a teaching remark the card does not need (我住在香港 (I am live ✗)).
- 聲帶震動 → 聲帶振動 (9 places in `decks.js`; lessons and practice already said 振動). 電視劇 → 劇集 (the interface and the rest of the course say 劇集).

**Pronunciation (1)**

- McDonald's /məkˈdɑːnəldz/ → /məkˈdɑːnldz/ in the `pron` lesson, to match the deck card and the syllabic-l rule. Everything else passed: see `PRON-RULES.md`.

**Formatting and character forms (21)**

- 綫 → 線 (5) and 牀 → 床 (3): the interface and the other half of the course already used 線 and 床.
- Spoken Cantonese outside 「」 in the tense table: 咗（做咗） → 「咗」（「做咗」), and the three sister cells.
- Parentheses around Latin-only content are half-width, as in the rest of the course: 不要讀成 l（light） → 不要讀成 l (light) (7 places plus one tip in `more/a1.js`).
- Full-width slash: 加油！／祝你好運！ → 加油！/ 祝你好運！; roadmap R/L、F/P、TH → R / L、F / P、TH.

## 2. Edit counts per file

| File | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| `decks.js` | 0 | 14 | 0 | 10 | 24 |
| `extra.js` | 1 | 0 | 0 | 3 | 4 |
| `lessons.js` | 2 | 17 | 1 | 5 | 25 |
| `practice.js` | 0 | 5 | 0 | 0 | 5 |
| `meta.js` | 0 | 0 | 0 | 0 | 0 |
| `more/a1.js` | 0 | 10 | 0 | 2 | 12 |
| `more/a2.js` | 2 | 2 | 0 | 0 | 4 |
| `more/b1.js` | 2 | 0 | 0 | 0 | 2 |
| `tools/i18n/yue/ui.json` | 0 | 4 | 0 | 0 | 4 |
| `tools/i18n/yue/roadmap.json` | 0 | 1 | 0 | 1 | 2 |
| **Total** | **7** | **53** | **1** | **21** | **82** |

"Unnatural wording" includes the term and same-meaning unifications, which are most of that column. Each count is one replaced string. New file: `PRON-RULES.md`.

## 3. Read in full / only scanned

- **Read in full:** `decks.js`, `extra.js`, `lessons.js`, `practice.js`, `meta.js`, `more/a1.js`, `more/a2.js`, `more/b1.js`; every `t` value of `ui.json` (784 exact, 275 patterns) and the 39 filled `t` values of `roadmap.json`.
- **Only scanned by script:** IPA (aligned word by word with the zh checker; not read row by row), character-set tests (Simplified-only characters, Hangul), punctuation and spacing patterns, same-English-different-Chinese pairs.
- **Not looked at:** `profile.json`, `deviations*.json`, the Chinese-target entries of `roadmap.json` (1,783 keys with empty `t`; their keys and `ko` reference text contain Simplified characters, which is not shown to this course's learners as far as I can tell — not verified in the app). No audio was heard. `link_roadmap.py --check` and `tools/i18n/road.py` could not run here and were skipped.

## 4. For a native speaker (most important first)

1. **Grammar terms.** 眾數, 冠詞, 第三身單數, 現在式, 片語動詞, 關係子句, 間接引述, 一般動詞: the profile itself says these rest on general knowledge. They are in every lesson title and every `why`.
2. **串字 / 串法 for "spell / spelling"**, now also in the interface (英文字的串法). Is 串法 natural in a written explanation, or should formal text say 拼法?
3. **Register of the explanations as a whole.** Read two lessons (`hk-english`, `tense`) aloud: does the 書面語 sound like a Hong Kong textbook, or like converted Mainland or Taiwan text? Words to judge: 字詞, 生字, 帶聲, 劇集, 傳短訊, 稍後.
4. **Statements about Hong Kong habits that no source backs** (lead ruling 8; left as written): 香港人常說「拜拜」… Bye-bye 會顯得有點孩子氣 (`decks.js`); 在香港，熟人之間問薪金、租金或年齡，有時是關心的表現 (`lessons.js`, smalltalk); quarter = 15 分鐘（廣東話說「三個字」）; G and J 「容易對調」 (`decks.js`); 香港學校教的 half past three.
5. **The `hk-english` lesson**: every pair in the tables (open the light, 「我好難學識英文」 → I am difficult to learn English, Add oil!, la / lor / ar in messages, Please kindly, Noted with thanks, revert). Are the Cantonese sentences inside 「」 what people really say, and is anything listed as "local" in fact standard?
6. **Letter-name advice in the `alphabet` lesson and deck**: the warnings assume learners add a vowel after F, L, M, N, S, X, swap G and J, and mix up E and I when giving an e-mail address; and that school teaches Z = zed. True for today's learners?
7. **Character forms**: 裏, 着, 線 (not 綫), 床 (not 牀), 溫, 帳戶, 枱, 敍. One choice per pair was made for consistency with the interface; say if 綫 / 牀 are preferred.
8. **Level titles**: 新手, 學員, 健談, 旅行者, 本地通, 高手, 大師. Natural as a ladder? (健談 replaced 話匣子.)
9. **Everyday word choices in card meanings**: 洗滌盆 (sink), 沙灘, 升降機, 的士, 侍應, 客貨車 (van), 住宅單位 ("I live in an apartment | 我住在一個住宅單位" reads stiff), 批量匯入 (interface).
10. **Idiom equivalents** in the `idioms` deck and PAUSE list: 經一事，長一智 (new), 易如反掌, 黑暗中總有一線光明, 貴得驚人 — and whether each is the phrase a Hong Kong reader would pick.

## 5. Found but not fixable in this scope

- **Korean-flavoured shared English** (parity-bound, translated faithfully): the be-verb checks and practice keep Seoul, Jeju, Busan, Daegu, kimchi, won, Han Kang and K-pop; the card "Who's your bias?" needs a note explaining a K-pop term. A Hong Kong set would need English-side deviations: lead decision.
- **Roadmap basis line** "…adjusted for Korean speakers" is translated as written (按韓文母語者的需要調整) (lead ruling 9). It is false for this course.
- **Roadmap entry "Pronunciation traps: R/L, F/P, TH"** is the Korean lesson's title; the yue `pron` lesson is about n / l, final stops, v, z, TH. The key is shared, so the translation follows the key.
- **`passive` practice** accepts canceled / cancelled / got canceled but not "got cancelled" (already noted in the profile; English-side change for all courses).
- **Interface keys named "romanization"** are translated 音標, the same as "pronunciation"; correct for this course, but two different keys give identical text (Aa 音標：開 twice). Harmless.
- **Simplified characters in `roadmap.json` keys and `ko` fields** (Chinese-target roadmap, e.g. "Pronouns and 们"): not `t` values, so untouched.
- **Deck names** were not renamed (lead ruling 10).
- **Embassy card** stays "I need to contact my consulate." (lead ruling 5); the Chinese side matches.

## Checks after the review

All run on scratch output outside the repo.

```
gen.js yue        wrote … 251326 bytes
validate.js yue   PASS: all checks OK
parity.js yue     WARN unused deviations (stale?): lessons:hk-english, lessons:articles-3   (expected)
                  PASS: shared English side matches ko-en
lint (3-letter)   lint yue: 0 blocking · 8 meaning variants (info) · 0 K-pop leftovers (info)
alphabet_check    PASS alphabet yue: lesson 1, deck 21 «英文字母» with 26 cards, English side matches the spec
i18n gen.py yue   exact 784 patterns 275 road 39
i18n validate.js  exact=784 patterns=275 warnings=0 / PASS
node --check      all 8 JS files OK
JSON              both files parse; only "t" values differ from the originals
Hangul            none under tools/content/yue
pron checker      903 pairs · 0 phrase conflicts · 1 allowed word pair · 3 explained rule hits
```
