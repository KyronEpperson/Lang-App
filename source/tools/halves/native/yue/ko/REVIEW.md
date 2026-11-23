# yue-ko native half: cold review (2026-11-23)

**The reviewer is not a native speaker of Cantonese or Korean.** Everything below is the judgement of a careful non-native editor. The list at the end is for a Hong Kong reader.

## What I checked

I read every row of the merged half next to its Korean (target half), joined by id. That is 1,413 cards, 201 dialogues, 275 examples, 47 patterns, 294 sentences, 99 checks, 462 practice items, 56 decks, 6 groups, 140 labels and 33 lesson rows. I also read all 33 lesson bodies and every string in `trainer.json` (the launching message put it in scope). Where a row looked doubtful I compared it with the English half (`native/en/ko`).

- **Register (owner's ruling: written Cantonese for everything).** A script scanned every native string, with 「」 quotes masked, for Standard Written Chinese function words (的 是 不 沒有 這 那 他 們 嗎 什麼 怎麼 很 了 也 和 在 把 給 說 看 吃 喝) and for Mandarin-only words (找, 今天, 吧, 買單 …). I read each hit by hand.
  - The four writers had already written in Cantonese. The leftovers were few:
    - 他 / 她 as glosses of 그 / 그녀;
    - 親愛的;
    - 分別在於 and 到目前為止 (particles.html);
    - 得益不少, 搞砸, 說法 and 並 in one row each;
    - 近來好嗎 (g097).
  - Every hit that remains is a compound or a proper name: 其他, 目的地, 不如, 不過, 不規則, 他山之石, 過猶不及, 馬耳他, the 共和國 and 「…和…」 country names, and 已讀不回 as a cited slang term.
- **Spelling unification across the five work streams.** All five now use one form each:
  - 畀 for 俾;
  - 按 for 撳;
  - 咁 for 噉;
  - 吓 after a verb (睇吓、試吓、問吓、玩吓、聽吓、休息吓、講吓);
  - 着 for "wear";
  - 個星期 for weeks (禮拜 removed);
  - 廣東話 for 粵語;
  - 綫 only for the metro line 2 號綫 / 三號綫. The hanja of 호선 stays 號線, because that is the Korean hanja, not a line name.
- **Sino-Korean bridges.** I checked every "sounds like" claim against the Cantonese (Jyutping) reading, not the Mandarin one. That covers every card note, the lesson tips (nouns, numbers, sound-changes, hangul, getting-around, office), and the check and practice prompts. I checked them against the profile's verified table and my own knowledge of the readings.
  - All of them are correct for Cantonese. Examples: 學 hok6 = 학; 十 sap6 = 십; 一 jat1 / 七 cat1 / 八 baat3 → 일 칠 팔 (‑t → ㄹ); 六 luk6 = 육; 三 saam1 = 삼; 萬 maan6 = 만; 百 baak3 = 백; 入 jap6 = 입; 出 ceot1 = 출; 月 jyut6 = 월; 室 sat1 = 실; 活 wut6 = 활; 發 faat3 = 발; 族 zuk6 = 족; 直 zik6 = 직; 宅 zaak6 = 택; 藥局 joek6 guk6 = 약국; 運動, 音樂, 幸福, 電話, 連絡, 韓國, 日本, 中國.
  - 方法 = 방법 is correctly presented as the one exception. 홍콩 is correctly described as a loan from "Hong Kong", not a hanja reading.
  - All hanja printed are Traditional: 化妝室, 便宜店, 食堂, 點心, 寫真, 映畫, 空港, 地下鐵(驛), 生水, 計算, 工夫, 學院, 感氣, 宅配, 會食, 發表, 童顏, 多情, 來日, 濠洲, 英語.
  - I removed nothing. Fourteen notes were reformatted to the profile's 字（粵拼） pattern: c0187, c0262, c0264, c0266, c0278, c0282, c0405, c0565, c0571, c0694, c0738, c1212, c1214, c1215.
- **Numbers.** The Sino-Korean vs Cantonese comparisons are right everywhere: numbers.html, c0145–c0160, c0402–c0409, c1058, c1085, c1092, c1110–c1113, numbers.k1–k3 and numbers.01–14.
  - 일 이 삼 사 오 육 칠 팔 구 십 = jat1 ji6 saam1 sei3 ng5 luk6 cat1 baat3 gau2 sap6. Large numbers are grouped by 萬, and Korean has no 일 before 백 / 만.
  - Hours take native numbers, and minutes and money take Sino-Korean ones. The 兩 / 二 parallel (두 잔, 두 시) is stated correctly.
- **Practice cues.** A script listed every type / order / mc item whose rejected forms or options differ from the answer only in tense or speech level. I checked that each Cantonese prompt carries the cue: a time word, 咗 / 會 / 以前, （半語）（禮貌）（正式）（尊敬）, or （對朋友講）. Every such item has one. No item was missing a cue, so none needed changing for this reason.
- **Interface terms in prose.** The prose names 閱讀 (tab), 「🔀 音變」 (the button label in the base dictionary; the sound-changes tip now quotes it), 按一下字母 (hangul), and the deck names 「國家同地區」「甜言蜜語」「助詞」「連接詞」「量詞」, which match `decks.jsonl`. No prose cites 記得, 要溫, 撳, 課堂測驗 or 連續打卡.
- **Consistency.** A script grouped every card front, sentence, example, dialogue line, pause item, Build sentence and `koui` key by its Korean text. Real splits were unified (table below). Variants that only add a context tag were kept.
- Cross-references match the final titles. Within each deck no two meanings are identical; no two options of a question are identical; `@@` counts and blanks are intact.

## Rows changed per file (diff against the pre-review copy)

| File | Rows changed |
|---|---|
| cards.jsonl | 76 |
| dialog.jsonl | 24 |
| examples.jsonl | 17 |
| practice.jsonl | 16 |
| decks.jsonl | 5 (descriptions only) |
| labels.jsonl | 4 |
| checks.jsonl | 2 |
| sentences.jsonl | 2 |
| trainer.json | 6 strings |
| lessons/*.html | 13 files: cant, counters, food, hangul, have-to, meet, numbers, office, particles, pronouns-questions, sound-changes, sov, story |
| groups, lessons, patterns | 0 |

Most of the rows are the spelling unification: 畀 alone touched about 90 strings.

## Decisions

| Question | Decision | Applied to |
|---|---|---|
| 俾 / 畀 | **畀** everywhere, including the passive (畀人嚇親). | all files |
| Tap | **按**, as in the base dictionary. 撳 is gone, including 幫我按個讚 and 누르다 = 按. | hangul.html, c0513, g139, trainer `build.ui.prompt` |
| 咁 / 噉 | **咁** for both senses. | c0206, e053, e212 |
| 吓 / 下 after a verb | **吓** (NOTES 2026-11-23). | 18 strings |
| 綫 | 綫 only for the metro line: 2 號綫, 三號綫. | c0153, numbers.html |
| 他 / 她 for 그 / 그녀 | 佢（書面語，指男性） / 佢（書面語，指女性）. The meanings stay distinct. | c0979, c0980 |
| Greetings 좋은 오후예요 / 좋은 저녁이에요 | **你好** for both, as the base dictionary decided on 2026-11-23 (午安 / 晚上好 are stiff). | ko.h.afternoon, ko.h.evening |
| Level title ko.t03 (학생) | **Kept 學生.** It glosses the Korean title 학생 shown beside it (= c0682 學生). 學員 belongs to the generic interface ladder. The other titles (萌芽, 前輩, 高手, 大師, 宗師) are unchanged. | – |
| Country names | Taiwan forms are replaced by the forms on the HK Immigration Department's list ([immd.gov.hk annual report 2024, appendix 11](https://www.immd.gov.hk/publications/a_report_2024/tc/appendix11.html)): 突尼斯, 帕勞, 哈薩克斯坦, 烏茲別克斯坦, 吉爾吉斯斯坦, 塔吉克斯坦, 土庫曼斯坦, 特立尼達和多巴哥. I kept the profile's popular HK forms where the government list differs (紐西蘭 not 新西蘭, 汶萊 not 文萊, 毛里裘斯 not 毛里求斯). | c1251–c1255, c1289, c1355, c1414 |
| 미세먼지 | 懸浮粒子 in both rows (霧霾 is the Mainland word). | g086 (c0185 already) |
| 잘 지냈어요? / 잘 지내셨어요? | 你近排好唔好呀？. The honorific line adds 請問. | c0801 note, g097, g131 |
| 귀여워 | 你好得意 (HK word; matches s0008). | c0410 |
| Same Korean, same gloss | c1175 = g190 多謝你嘅好意，不過唔使喇 · c1176 = g191 對唔住，我已經有拍拖對象 · c1177 = g192 你人好好，不過我想做返朋友 · c1181 = g194 請問呢個點整㗎？ · c1193 = g198 你個小朋友真係好得意 · c1196 = g199 你着呢件衫好襯 · c1207 = g197 你太過獎喇 · c1208 = g199 多謝你讚我 · c1209 = g196 多謝你咁欣賞 · c0076 你由邊度嚟？ · g107 = e072 經理，請問你而家得唔得閒？ · g095 = s0276 請喺呢度坐 · e050 你先請 · g201 匯報 (as c0558 / c1201) | as listed |
| 오셨어요? | 請問你到咗未呀？（尊敬，過去式）. The old 請問你到咗喇？ mixed a question with 喇. | c0250 |
| 오빠 in a line | 阿哥 (profile glossary), not 哥哥. | e026 |
| 잘 자, 내일 봐 prompt | 早唞，聽日見（半語）, the fixed gloss of 잘 자. | texting.08 |
| 이분 in pronouns-questions.html | The English calls 이분 a polite "that person". It is 「呢位」, and the sentence now says so. | pronouns-questions.html |
| Counter order | 「廣東話啱啱相反」 was wrong: only the noun moves. It now reads 「廣東話就將名詞擺最後」. | counters.html |
| Idiom ko.i14 日就月將 | 日日都有進步. 突飛猛進 means sudden rapid progress, not "better day by day". | labels |
| 요리 in the Hangul drill | 煮嘢食, as on card c0280. | trainer `hangul.mean` |
| Bridge note format | Character first, then Jyutping in brackets: 「學校（hok6 haau6）」. 粵語 becomes 廣東話. | 14 card notes |

## Final names (permanent keys: unchanged)

No deck label or group name was changed.

**Groups (6):** foundations 基礎 · everyday 日常 · vocabulary 詞彙 · grammar 文法 · social 社交 · core-words 核心詞彙

**Decks (56):** hangul-vowels 韓文元音 · hangul-consonants 韓文輔音 · hangul-advanced 韓文進階字母 · pronunciation-tips 發音貼士 · survival-phrases 必備短句 · introductions 自我介紹 · survival-phrases-2 必備短句 2 · asking-around 搵地方 · cafe-convenience-store 咖啡店同便利店 · numbers-in-the-wild 日常數字 · counters 量詞 · weather-feelings 天氣同心情 · connectors 連接詞 · doctor-pharmacy 睇醫生同藥房 · housing-errands 租屋同雜務 · honorifics 尊敬形 · places-buildings 地方同建築 · hobbies 興趣 · food-words 食物 · drinks 飲品 · activities 日常活動 · tv-entertainment 影視娛樂 · position-direction-words 方位詞 · core-verbs 核心動詞 · particles 助詞 · numbers 數字 · sweet-talk 甜言蜜語 · cute-things-to-say 暖心說話 · flirting 搭訕 · casual-texting 短訊用語 · hype-cool 讚人同打氣 · hanging-out 約朋友出街 · k-pop-fan-culture K-pop 追星 · social-media-slang 社交媒體同潮語 · dating-deeper 拍拖進階 · work-office 職場 · small-talk 閒聊 · food-ordering 叫嘢食 · directions-transport 問路同交通 · time-days 時間同日子 · family-people 家人同稱呼 · adjectives 形容詞 · k-drama-phrases 韓劇對白 · top-nouns 常用名詞 · top-verbs 常用動詞 · top-adjectives 常用形容詞 · top-adverbs 常用副詞 · top-pronouns 常用代詞 · top-particles 更多助詞 · top-connectors 更多連接詞 · top-interjections 常用感嘆詞 · top-words 實用小詞 · top-counters 更多量詞 · flirting-words 戀愛詞彙 · compliments 日常稱讚 · countries 國家同地區

## How the fixes were applied

- **Script.** Every edit is applied by id from `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-yueko/fix.py`. It is idempotent: a second run reports `total 0`. It writes compact JSONL, as the files were before, and `trainer.json` with its original one-space indentation.
- **Repair.** While I was developing the script, one run doubled the 「斯坦」 suffix on c1251–c1255. A one-off repair fixed it, and the script now guards against it.
- **Backup.** The pre-review copy is in `…/review-yueko/base/`. Both locations are session scratch.
- **Scope.** I touched only the `*.jsonl` files, `lessons/*.html`, `trainer.json` and this file. `work/`, `ui.json` (another agent's), `course.json` and `target/` are untouched. **Do not run `mk_native.js yue --merge` again**: it rebuilds from `work/` and would undo this review.
- **Validator** (`node tools/halves/validate.js yue ko`): `words remaining: 0 of 25585`, **`errors: 0`**, and 2 warnings, both expected. They are the waived extra Hangul in hangul.html (the reading guide) and its fifth `<h3>`.

## For a Hong Kong reader to check (max 20)

1. hangul.html, the reading guide: ㅓ, ㅡ, 些（se1） for ㅔ / ㅐ, j ≈ 之, ch ≈ 車, 也（jaa5） for ya.
2. 我唔客氣喇 for 잘 먹겠습니다, and 多謝款待 for 잘 먹었습니다.
3. 辛苦晒 for the whole 수고 family, with the role notes (自己走，對仲做緊嘢嘅人講 …).
4. 唔該借借 (지나갈게요, 잠시만요) and 唔該（叫人嗰陣） for 저기요.
5. texting.html: 已讀不回 / 「藍剔唔覆」 for 읽씹. Is 藍剔唔覆 said in HK?
6. 你好 for both 좋은 오후예요 and 좋은 저녁이에요. Is a time-of-day greeting better?
7. Respect wording: 請問點稱呼？, 請問你貴庚？, 請問你到咗未呀？（오셨어요?）, 老師，請問你近排好唔好呀？.
8. Country names: the government forms adopted here (突尼斯, 帕勞, 哈薩克斯坦 …, 特立尼達和多巴哥) next to popular forms kept from the profile (紐西蘭, 汶萊, 毛里裘斯, 肯尼亞). Should the deck follow one convention throughout?
9. 佢（書面語，指男性 / 女性） for 그 / 그녀.
10. 按 in 幫我按個讚 / 早就按咗 (Instagram likes). Would HK users say 俾個 like or 撳讚 there?
11. 懸浮粒子 for 미세먼지 (c0185, g086).
12. Deck labels 搵地方, 必備短句, 短訊用語, 叫嘢食, 暖心說話.
13. Lesson titles 21 點樣稱呼人, 29 做唔到、做得到同唔知, 32 有禮貌咁請求.
14. 你嘅匯報我聽得好有得着 (발표 잘 들었습니다), and 匯報 for 발표 throughout.
15. 我覺得我個匯報實搞唔掂 (망할 것 같아) and 好食到癲 (존맛탱).
16. c0548 可唔可以麻煩你幫我搞吓呢樣嘢？ (이거 좀 도와주실 수 있어요?).
17. Idiom glosses: i14 日日都有進步, i15 自作自受, i27 善有善報，惡有惡報, i31 白手興家; saying.20 一句好說話，抵得過千兩債.
18. 正式 / 禮貌 / 半語 / 尊敬 tags, and the table headers 「尊敬 / 正式」 (meet) and 「更客氣（尊敬形）」 (plans).
19. 好凍喎-type notes: 네요 「好似『喎』」 (c0418, c0564, c1179) and 잖아 ≈ 「……吖嘛」 (c0535).
20. polite.html: 「客氣得耐咗，人哋只會覺得你斯文、得意」.
