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

## Rewrite into written Cantonese, 2026-11-23

**Rule.** The owner ruled that the course for Cantonese speakers is written in **written Cantonese** (書面粵語: Hong Kong, Traditional characters, 嘅 係 唔 冇 喺 咗 佢 啲 嚟 畀 …), not standard written Chinese (書面語). This overrides docs/profiles/yue.md §2 (dated note added there) and "ONE written register" in docs/briefs/yue-lead.md. Brief: docs/briefs/yue-en-cantonese-rewrite.md. Five agents rewrote the files in parallel (decks.js; lessons.js + meta.js + profile.json; practice.js + extra.js; more/a1.js; more/a2.js + more/b1.js). One finishing editor then did the consistency, leftover, typed-answer and localisation pass below. The finishing editor is not a native speaker.

### What the finishing pass changed (counts)

- **Deck names 與 → 同:** 11 names (問路同交通, 咖啡店同便利店, 購物同付款, 數字、時間同日期, 情緒同反應, 讚美同好感, 工作同電郵, 電話同短訊縮寫, 旅行（機場同酒店）, 醫院同緊急情況, 影視同俚語).
  - 129 occurrences, changed in all files at once: decks.js, meta.js, lessons.js, more/*.js, deviations.json, deviations.a.json, DECKNAMES.md, docs/profiles/yue.md.
  - grep shows no other user of the names (the pack is generated; the stale lang-app/source copy was not touched).
  - Proof: validate passes, parity uses every `decks:` deviation under the new name, lint reports 0 missing deck links, and link_roadmap passes.
- **One spelling or term per concept (36 edits, 11 of them in the interface dictionary):**
  - 噉 → 咁 (12, lessons.js). 咁 is now used for both senses everywhere.
  - "A bit" after a verb is written **吓** (睇吓, 試吓, 幫吓, 問吓, 諗吓, 聯絡吓; 13 in the course, 8 in ui.json).
  - Pronoun cues are （佢 = he / she） everywhere: be#11 and be#13 no longer use （用 he）.
  - mcBlankCue and the hand-typed cue are both 空格應該填咩？ (profile.json and lessons.js). The pack has 0 填乜嘢.
  - 疑問句 is the grammar term (一般動詞嘅問句 → 疑問句). 是非問句 and 間接問句 stay as distinct terms.
  - 縮略 → 縮寫.
  - 綫 is used only for MTR lines; "line" in general is 線.
  - 睇戲 / 齣戲 for films (套 and 睇電影 removed from glosses; 電影 stays as a noun in explanations).
  - 食晏 for lunch. 地鐵 means a subway abroad and 港鐵 means the MTR.
  - The hint 注意冠詞 → 留意冠詞.
  - Lesson text cites the buttons exactly as ui.json shows them: 「Aa 音標：開」 / 「Aa 音標：關」, 「練習時顯示音標」.
  - Already consistent, nothing to change: 尋日, 而家, 畀, 鍾意, 鎖匙, 影相, 眾數, 第三身, 現在式, 串字, and the level titles (meta.js TITLES = ui.json = NOTES.md: 新手 · 學員 · 健談 · 旅行者 · 本地通 · 高手 · 大師).
- **Same English, same gloss:** 44 edits, mostly practice prompts brought into line with the card meaning.
  - Examples: 週末有冇咩計劃？, 幾時截止？, 我確認咗再覆你, 一講曹操，曹操就到！, 可唔可以閂埋度門？, 我想要窗口位, 如果我係你，我就會去.
  - The editor's own map (cards, {{ex}}, EXAMPLES, order / fill / type / mc prompts, cues stripped) went from 44 English sentences with more than one gloss to 7. lint "meaning variants" went from 12 to 8.
  - What remains is teaching remarks: 「(I am live ✗)」, 「（泛指）」, 「（開會都用得）」, the smalltalk#10 fill that also accepts movies, and the prep#12 type item that accepts "now".
- **Register (17 edits):**
  - Stiff glosses replaced:
    - 午安 / 晚上好 → 你好（下晝見面）/ 你好（夜晚見面）, and the Today greetings in ui.json → 你好;
    - 你好嗎？ → 你點呀？;
    - 好高興認識你 → 好開心識到你 (card and dialogue);
    - 順帶一提 → 係呢 / 順便講;
    - 改日 / 第日 → 遲啲;
    - 改日先啦 → 下次先啦;
    - 我住喺一個單位 → 我住單位（唔係獨立屋）.
  - Showy glosses softened: 開心到飛起 → 開心到唔得了, 正到爆 → 好好聽, 預埋我 → 算埋我一份, 呢個主意好正 → 呢個主意好好.
  - Kept as the normal words: 碌卡, 叮熱, 凍到震, 貴到離譜, 好正呀 (dialogue).
  - Other fixes: 最近好嗎 removed; ui.json 被封鎖 → 封鎖咗.
  - The stale English headers ("Hong Kong written Chinese" and similar) now say written Cantonese (6 files).
- **Leftovers:** after the five rewriters, standard-written-Chinese function words outside 「」 were already near zero: 的 0, 這 0, 那 0, 他 0, 們 0, 沒 0, 什麼 0, 很 0, 也 0, 還 0, 給 0, 看 0, 吃 0, 喝 0.
  - The rest is legitimate: set phrases (大不了, 不勞無獲, 眼不見心不念, 猶豫不決, 熟能生巧, 唔得了), 是非問句, 附和 / 柔和, 難在, 說話, 讓路, 把聲, 被動式, 現在式, 不可數, 跟 (follow), 知道, 可能.
  - ui.json 「會被隱藏」 (forum rules) was left as it is.
- **Localisation (36 English lines, plus 1 card and its dialogue):**
  - Places: Seoul → Hong Kong / Kowloon / Tokyo / Taipei; Busan → Macau / Tokyo / Taipei; Jeju → Macau / Tokyo; Daegu → Kowloon; Korea → Japan, or Canada where the why says 國家.
  - Other items: won → dollars (5 萬蚊（港幣）); kimchi → dim sum, as in the lesson's own example; Korean (language) → Japanese; K-pop → Cantopop; Han Kang → Louis Cha (金庸); Jenny Park → Jenny Brown.
  - Email distractors: "You suffered a lot." / "Good suffering." → "Thanks for all your hard works." / "You did a hard work.". The idiom distractor tiger → ghost.
  - The bias card "Who's your bias?" → "Who's your favorite singer?" (new IPA). The DIALOG key was renamed and its B line is "Definitely Eason Chan." (梗係陳奕迅啦).
  - The Cantonese prompts changed with the English. The pack has 0 Korean-setting strings on either side.
- **Typed-answer pass:** all 127 type items were listed from the pack and read.
  - **Prompts cued or aligned:** articles-3#13 （用 by）; first-conditional#13 now says 你; past#11 我嗰陣好攰（用 was）; tense#13 and others aligned with their card gloss.
  - **Answers added (18 items):**
    - 好 + adjective: very / really variants (it-there#11, past#11, joining#12, articles-2#13, reported#11);
    - 返屋企: back home (to-ing#11, narrative#13);
    - will#12: get / order a salad;
    - relative#13: which;
    - love variants (present#12, third-s#12, can-like#11);
    - conditionals#13: should've;
    - articles-2#11: the USA;
    - perfect-2#13: that book;
    - passive#12: got cancelled;
    - reported#13: that / he'd seen / had watched.
  - **Answers trimmed to the prompt's subject (2):** modals#13 and first-conditional#13.
  - **Full forms:** a script checked every contracted answer in the pack, and 0 lack the full form.
  - **Deviations:** 47 item entries and 1 deck entry in deviations.review.json, merged into deviations.json. An old-vs-new diff of the English side shows exactly these 49 changes (47 items, 1 card, 1 dialogue).

### For a native speaker (check first)

1. 霸住個位 for the dummy subject it / there: clear?
2. 你冇事吖嘛: natural for "Are you okay?"?
3. 蝨乸 in the rice / lice pair: OK in a learning app?
4. 早唞 for Good night (dialogue) next to the card 晚安.
5. 攞走 / 打包 for "to go".
6. 走廊位 for aisle seat, and 窗口位 for window seat.
7. 嫲嫲 for grandmother (vs 婆婆).
8. 蚊 for prices (20 蚊, 5 萬蚊（港幣）).
9. 四點九 for 4:45, and 「三個字」 = 15 minutes.
10. 細楷 / 大楷 for lower / upper case.
11. Bare-classifier "the" in prompts (本書我睇過, 齣戲已經開始咗, 個會取消咗): do learners read these as "the"?
12. 我係美國嚟嘅 for "I'm from the United States".
13. 飛 for ticket in prompts (你要買一張飛).
14. 意粉 for pasta.
15. 執 for tidying a room.
16. The proverbs converted to Cantonese (易如反掌, 一講曹操，曹操就到, 不勞無獲, 眼不見心不念…): natural, or too bookish?
17. 你好（下晝見面）/ 你好（夜晚見面） replaced 午安 / 晚上好. The app's Today greeting now shows 你好 in the afternoon and evening. Is there a better time-of-day greeting?
18. 你點呀？ for "How are you?"; 好開心識到你 for "Nice to meet you".
19. 係呢 / 順便講 for "By the way" and BTW.
20. 我住單位（唔係獨立屋） for "I live in an apartment".
21. 吓 (not 下) for "a bit" after a verb (睇吓, 試吓, 幫吓), now in both the course and the interface.
22. Kept as normal words: 碌卡, 叮熱, 凍到震, 貴到離譜, 好正呀. Too slangy for an app?
23. Softened: 我開心到唔得了 (cloud nine), 呢首歌好好聽 (slaps), 算埋我一份 (count me in), 下次先啦 (rain check), 呢個主意好好 (that's brilliant).
24. 呢樣嘢唔啱我口味 (replacing 唔係我杯茶) for "It's not my cup of tea".
25. 地鐵 for a subway abroad and 港鐵 for the MTR; 綫 only for MTR lines and 線 elsewhere.
26. 我嗰陣好攰 / 今日好熱: the very / really answers are now accepted too. Should the course instead teach that 好 here is neutral?
27. Deck names with 同 (旅行（機場同酒店）, 數字、時間同日期, 影視同俚語): fine as titles?
28. 陳奕迅 in the "favorite singer" dialogue, and 金庸 for Louis Cha.
29. Grammar terms 疑問句 / 是非問句 / 間接問句, 第三身單數, 眾數, 過去分詞: still the school terms?
30. 「Aa 音標：開」 / 「Aa 音標：關」 cited as a button inside lesson prose: reads OK?

### Not done

- relative#11 does not accept "which", because its cue says （用 that）.
- The stale copy under lang-app/source/ still has the old deck names. It is outside this pass's scope.
- The shared English of the minimal pairs (rice / lice and others) is unchanged; the yue-only pairs were added earlier.

### Checks (finishing pass)

```
gen.js yue            wrote /home/claude/packs/course-yue-en.js 253228 bytes
validate.js yue       PASS: all checks OK
parity.js yue         WARN unused deviations (stale?): lessons:hk-english, lessons:articles-3   (expected)
                      PASS: shared English side matches ko-en
alphabet_check.js yue PASS alphabet yue: lesson 1, deck 21 «英文字母» with 26 cards, English side matches the spec
lint.js yue           lint yue: 0 blocking · 8 meaning variants (info) · 0 K-pop leftovers (info)
i18n gen.py yue       wrote /home/claude/packs/i18n-yue.js · exact 784 patterns 275 road 79
i18n validate.js yue  exact=784 patterns=275 warnings=0 / PASS
link_roadmap --check  en roadmap links 33 · missing in course-yue-en: none
```
