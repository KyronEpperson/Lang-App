# en-yue cold review (EN-YUE-REVIEWER, 2026-11-19)

Scratch: scratchpad/yueR (words.js = distinct-word list, inline.js = quoted-Jyutping check, swc.js = SWC/simplified flagger).

## Batch 0: Jyutping word list and character scan

- words.js: every CJK run in decks/extra/lessons segmented with the generator's own longest match: 548 distinct words/characters. Read the whole list.
- Checked against dictionaries (via WebSearch/WebFetch):
  - 中文: jyutdictionary (words.hk + CC-CEDICT) gives both zung1 man4 and zung1 man2: kept zung1 man4.
  - 腸粉: Wiktionary coeng4-2 fan2 = coeng2 fan2 (changed tone): kept.
  - 嫲嫲: gocantonese maa4 maa4; Wiktionary 嫲 maa4: kept.
- Everything else on the list matched my own knowledge with certainty (colloquial readings: 近 kan5 alone / gan6 in 附近 最近; 行 haang4 / hong4 in 銀行 邊行 / hang4 in 旅行; 上車 soeng5; 名 meng2; 病 beng6; 平 peng4; 成日 seng4; 學生 hok6 saang1 / 醫生 ji1 sang1; changed tones 電話 waa2, 朋友 jau5, 婆婆 po4 po2, 爺爺 je4 je2, 公公 gung4 gung1, 個女 neoi2, 錢 cin2, 今年 nin2, 蚊 man1; particles 呀 aa3, 啦 laa1, 喎 wo3, 㗎 gaa3, 呢 ne1 / ni1, 吖 aa1, 嘛 maa3, 囉 lo1, 咩 me1; 位 wai2; 拎 ning1; 籠 lung4; 腸粉; 麻麻哋 maa4 maa2 dei2; 考試 haau2 si5; 英文 jing1 man2).
- Characters not in the tool, all inside English text only: 野 晨 亻 氵 是 她 (radical notes and SWC examples): fine.
- inline.js: 251 Jyutping strings quoted in bodies, notes and options compared with the generator: no wrong one (2 hits were whole-sentence vs one-syllable comparisons, correct).
- swc.js: no simplified characters; SWC forms (他 是 她 嗎) appear only where the text teaches them as SWC / recognition. 不如, 不過, 的士 are spoken Cantonese.

## Batch 1: decks-a.js, decks-b.js, extra-a.js, extra-b.js (read in full)
- decks-a.js (1, wording): 打 note used SWC 他 taa1 as the t example → 睇 tai2.
- decks-b.js (4):
  - wrong language (doubt replaced): 有冇第二隻顏色呀？ → 有冇第二隻色呀？ (隻色 is the shop phrase I am sure of; note adds 隻 as the classifier for colors).
  - wrong teaching: Traps 我幾好 note claimed plain 我好 "sounds unfinished" → "people say 我幾好 or 我好好; a bare 我好 is less usual".
  - wrong teaching: 我琴日好攰 note implied 咗 never goes with tired → added that 我攰咗 = I've gotten tired (change of state, taught in `zo`).
  - wording: 急症 → 急症室 for the emergency room.
- extra-a.js / extra-b.js (1 each, wrong language/naturalness): 講得唔好 → 講得唔係幾好 ("not very well").
- Writers' doubts resolved as fine: 叫我阿明得啦; 你係邊度人呀; 恭喜發財 answered with the same words; 我得一百蚊; 三蚊半 / 五毫子; 前面有落; 呢架小巴去唔去旺角㗎; 架 for vehicles; 三點兩個字 = 3:10; 鬼佬 note; 兩千 (二千 also heard: never use it as a distractor); 一百八十蚊 (百八蚊 also said).

## Batch 2: lessons-1.js (jyutping … numbers, read in full)
- practice (1): greetings fill 唔使__ listed 多謝 and 唔該 as wrong options, but 唔使多謝 / 唔使唔該 are natural replies to thanks → accepted; new wrong options 好意思 / 早晨 / 拜拜.
- practice (1): m order item 佢 係 唔 係 你 老師 could also be built 佢係你老師唔係 → 係唔係 made one tile.
- wrong teaching (1): intro said 住喺 is "the one verb where the place comes after it" (contradicts 去 / 嚟 / 返 + place, lesson 25) → "here the place comes after the verb; with most other verbs 喺 + place goes before the verb".
- wrong teaching / doubt (1): numbers now says 兩百 / 兩千 are usual and 二百 / 二千 also heard (writers' doubt 兩千 vs 二千).
- wording (1): 安娜 / 馬克 called "Cantonese names" → "write their names in characters".
- Checked: every Jyutping-only option and tile in lessons 1–4 against the generator (all right; tone twins in x). Tone and vowel descriptions in lesson 1–2 are standard (tone 1 high level, 2 mid rising, 3 mid level, 4 low falling, 5 low rising, 6 low level; eo short / oe long rounded). 嗎 described as formal/written: fine.

## Batch 3: lessons-2.js (classifiers … time, read in full)
- practice (2): mc / check distractors 你係幾多歲呀？ and 我係三十歲 (writers' doubt: can be said with emphasis) replaced by clearly wrong orders (你幾多歲係呀？, 三十歲我今年). The teaching point "no 係 with ages" stays (profile §4.5).
- wrong teaching (1): 有間銀行喺附近 was called "clumsy" → "also heard, but starting with the place is the usual way".
- wrong teaching (1): 我嘅媽媽 "sounds heavy, as if you were making a point of it" → "not wrong, just less usual in everyday speech".
- wording (1): hai2 heading "The one exception: 住喺" → "An exception" (坐喺, 放喺 also put the place after).
- Checked fine: 兩蚊 / 二十蚊 / 廿五蚊, 五毫, 兩點, 三點兩個字 = 3:10, food classifiers (籠 lung4, 碟 dip6 after a number), 堂食定外賣, 唔該埋單.
