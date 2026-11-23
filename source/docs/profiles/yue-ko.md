# Cantonese (Hong Kong) speakers learning Korean: pair profile

Course `yue-ko`: Korean for Hong Kong Cantonese speakers, a STANDARD course assembled from the reviewed Korean half `tools/halves/target/ko/` (33 lessons, 56 decks, 1,413 cards) and a native half `tools/halves/native/yue/ko/`, written in **Hong Kong written Cantonese, Traditional characters**. Four writers (w1–w4) and a top-up writer work from this profile alone. Where it fixes a term, title, label or gloss, use it exactly.

**Author: not a native speaker of Cantonese or Korean.** All Cantonese here is [inference] until checked (§11). Tags: **[verified]** = checked by script or against an opened source (named); **[inference]** = the author's judgement; **[unverified]** = a claim about usage that could not be checked.

**Models and binding sources.**
- `docs/profiles/zh-ko.md` and `native/zh/ko/REVIEW.md`: their decisions carry over unless overridden here (no hanja for 수고, the KakaoTalk "1", the "Formal" column, hours vs minutes, ✗ rows kept, Latin personal names, 경찰서 ≠ 派出所).
- **`tools/i18n/yue/NOTES.md` binds** every term, tab name, level title, greeting and register choice. It wins over zh-ko (原形, 過去式, 文法, 羅馬拼音, 韓文).

## 1. Summary

1. **Register:** spoken-style written Cantonese, as the interface writes it (嘅, 咗, 唔, 係, 喺, 冇, 啲, 嚟, 睇, 撳, 搵). Address the learner as **你**; never use 您. Plain, short, friendly; Standard Written Chinese (SWC) only as in §2.2.
2. **Politeness:** use the tags （正式）（禮貌）（半語）（尊敬） exactly where the English has a tag. Honorific Korean lines also get Cantonese respect **wording** (請問、貴姓、貴庚、請用), never 您. Particles never encode a speech level (§2.3).
3. **Centrepiece: the finals bridge (§4, §5.1).** Cantonese and Sino-Korean both keep the old finals -p -t -k -m -n -ng (-t → ㄹ): 學 hok6 = 학, 十 sap6 = 십, 國 gwok3 = 국, 一 jat1 = 일, 三 saam1 = 삼. All 55 checked words match; 方法 = 방법 is the one known exception in the half. Cantonese m- also matches ㅁ where Mandarin has w- (萬 maan6 = 만).
4. **Pronunciation:** Cantonese has six of Korean's seven unreleased finals; only **final ㄹ** is new. New too: the three-way stops, ㅓ / ㅡ, and RR letters that mean something else in Jyutping (j, eo, oe, eu, yu, ui; RR a = Jyutping aa).
5. **Grammar bridges** (§5.3): 係 / 有 / 喺 / 冇 → 이에요 / 있어요 / 없어요; 冇去 = 안 갔어요; 咗 is not past tense; 唔 vs 안 position; 量詞 order; Sino-Korean numbers = 一二三, grouped by 萬.
6. **Localisation:** 首爾, 弘大, 八達通 for T-money, WhatsApp for KakaoTalk, 韓元 / 港幣, and 陳大文 as the example name in prose. Korean personal names stay in Latin letters.
7. **`ui.json` is not empty (§9):** the 14 `uiKeys` copied verbatim from the yue dictionary, plus 12 tag chips the dictionary lacks.

## 2. Register, typography, glosses

### 2.1 Voice and typography (from NOTES §1; binding)

- **Variety:** Hong Kong Cantonese, Traditional characters in Hong Kong forms. Use spoken grammar: 你嘅, 冇, 喺, 嘅 (not 的), 乜嘢 / 咩, 點樣, 邊個, 搵, 睇, 俾, 識, 今日 / 聽日 / 尋日, and 日 for days.
- **Commands** are plain imperatives (記住、留意、比較下、讀出嚟), with no 請 in explanations. Warnings use 唔好…. Taps are 撳 and typing is 打.
- **Final particles:** rare; at most a warm 㗎 / 啦 in praise. No 囉, 啩 or 咩 in prose.
- **Typography:**
  - full-width punctuation ，。！？：；（）、……; quotes are **「」**;
  - a **half-width space between Chinese and any Hangul, Latin letter or digit**, on both sides: `助詞 은/는 放喺名詞後面`, `第 3 課`; no space next to full-width punctuation;
  - ✗ / ✓ as in the English;
  - alternatives separated by ` / `;
  - 漢字 after a Korean word in full-width brackets, no space: `학교（學校）`, but only where the English row already has that Korean word (the Hangul check also counts jamo such as ㄱ).
- **No Simplified characters, no Mandarin-only words** (§10). Before finishing, run a character scan (w1–w4 checks).
- **Course name** (`native/yue/ko/course.json`): `{"native":"yue","name":"韓文","brand":"한글"}`.

### 2.2 Where Standard Written Chinese is acceptable

Use SWC only where Hong Kong Cantonese itself would:
- the 32 idiom labels `ko.i01`–`ko.i32` and the 俗語 pause set (四字詞 such as 一舉兩得, 塞翁失馬, 有備無患);
- set formulas: 初次見面、請多多指教、多謝款待、祝你生日快樂、敬上;
- glosses of signs and announcements (下一站、出口、禁止吸煙).

Everything else is spoken-style: 我冇時間, not 我沒有時間.

### 2.3 Glossing Korean politeness in Cantonese: the decision

Cantonese has no verb-level politeness and no 您. It marks respect with words (請問、唔該、麻煩你、貴姓、貴庚、請用) and titles. So:

| Korean | Gloss rule | Example |
|---|---|---|
| 요-form between equals | Natural Cantonese, **no** respect words. The tag （禮貌） only where the English has "(polite)". | 고마워요 → 多謝（禮貌） |
| 반말 | The same wording as the polite gloss, tag （半語） where the English has "(casual)". Optionally a casual particle (啦 / 喎), never as the only cue. | 고마워 → 多謝（半語） |
| -습니다 | Tag （正式） where the English has "(formal)". Set phrases take the SWC formula (§2.2). | 수고하셨습니다 → 辛苦晒（正式） |
| -시-, 드리다, 성함, 연세, 계시다, 주무시다, 드시다 | **Respect wording plus the tag**: 請問、貴姓、貴庚、請用、休息 / 早唞. Never 您. Do not strip the respect and leave only a tag (writer brief rule). | 성함이 어떻게 되세요? → 請問點稱呼？（尊敬）· 연세가 어떻게 되세요? → 請問你貴庚？（尊敬） |
| 주세요 / -아 주세요 requests | **唔該 + verb** (the HK request word). **請** only where Cantonese uses it naturally (請坐、請用、請問). | 천천히 말해 주세요 → 唔該講慢啲 |

**Tags carry the level, wording carries respect.** A prompt that must select one level always has a tag (§8). Tag words follow NOTES: 禮貌 = 요體, 半語 = 반말, 尊敬 = -시-, 正式 for -습니다 (NOTES has no "Formal" key; 正式 matches zh-ko [inference]).

### 2.4 Sample explanation prose (all [inference], for the native check)

1. 韓文嘅動詞一定擺喺句尾：저는 밥을 먹어요（我飯食）。
2. 唔肯定就用 요。太有禮貌冇問題，冇禮貌就會得罪人。
3. 廣東話嘅「有」同「喺」，韓文都係用 있어요。
4. 學 hok6 → hak、十 sap6 → sip：廣東話收 -k 嘅字，韓文通常都收 k；收 -p 嘅，通常收 p。

## 3. Glossary (closed list; NOTES §1 and §3 win any clash)

| Idea | Term | Do not use |
|---|---|---|
| Korean (language) / Hangul / one block | **韓文 / 韓文字母 / 音節塊** | 韓語, 諺文, 韓字 |
| romanization line | **羅馬拼音** | 拼音 alone, 音標 |
| Jyutping (the learner's system) | **粵拼** | |
| card / deck / lesson / course | **字卡（卡）/ 卡組 / 課 / 課程** | 閃卡 |
| tabs | **今日、課堂、練習、溫習、進度**; 閱讀 (Read) | 課程 for the tab, 複習 |
| buttons cited in prose | 記得、再嚟、檢查、📖 瀏覽、我嘅短句、⏰ 全部要溫、睇規則 | |
| particle (은/는, 이/가, 을/를, 에…) | **助詞**; 은/는 **話題助詞**, 이/가 **主格助詞**, 을/를 **賓格助詞** | 小品詞, 格標記 |
| ending / stem / dictionary form | **詞尾 / 詞幹 / 原形** | 語尾, 詞根, 基本形 |
| verb / adjective / 하다 verb | **動詞 / 形容詞**（韓文形容詞會好似動詞咁變）/ **하다 動詞** | 描述動詞 |
| present / past / future | **現在式 / 過去式 / 將來式** | 現在時 |
| irregular / pattern / grammar | **不規則 / 句式 / 文法** | 語法 |
| speech levels | **正式體**（-습니다）/ **禮貌體**（**요體**）/ **半語**（반말）/ **尊敬形**（-시-）; umbrella **敬語** | 格式體, 平語 |
| title / form of address | **稱呼** | 敬稱 |
| counter | **量詞** | 單位名詞 |
| two number systems | **固有詞數字 / 漢字詞數字** | 韓文數字 |
| Sino-Korean / native / loanword | **漢字詞 / 固有詞 / 外來詞** | 漢源詞 |
| vowel / consonant / 받침 | **元音 / 輔音 / 收音** | 母音, 子音, 韻尾 |
| ㄱㄷㅂㅈ / ㄲㄸㅃㅉㅆ / ㅋㅌㅍㅊ | **鬆音 / 緊音 / 送氣音** | 平音 (once, as an alternative), 激音 |
| sound change / linking / nasalisation | **音變 / 連音 / 鼻音化** | 連讀 |
| Cantonese tone / sentence pitch | **聲調 / 語調** | |
| word order, SOV | **語序**; 主語—賓語—動詞 | |
| question word / negation | **疑問詞 / 否定** | |
| connector / softener | **連接詞 / 緩和語氣嘅詞** | |
| spacing | **分寫**（字同字之間留空格） | |
| false friend | **同形異義詞**; in notes 「睇落一樣，意思唔同」 | 假朋友 |

## 4. Reading guide for a Cantonese reader

### 4.1 Policy

- **Respellings are comparisons, never readings.** Every comparison names a Cantonese character with its Jyutping in brackets, `三（saam1）`: the character first, because many Hong Kong readers never learned Jyutping [inference]. The real sound is the audio.
- **No English sound anchors** ("as in father"). The anchors are Cantonese syllables and mouth positions. English may appear only as the source of a loanword (커피 ← coffee); Hong Kong readers know English [inference].
- **Placement:** the full guide (§4.4) goes in `hangul` as its own `<h3>` after the tables, with `"_waive":["hangul"]` and a `_note` on its title row. `sound-changes` repeats the finals and "no tones" parts in Latin letters and characters only (no waiver). The Hangul deck descriptions and jamo notes (ko.c0001–c0060) reuse the comparisons with only their English rows' Hangul.

### 4.2 Sound by sound [comparisons: inference; Cantonese facts: Wikipedia, *Hong Kong Cantonese* / *Cantonese phonology*]

| Korean | RR | Cantonese comparison | Trap |
|---|---|---|---|
| ㅏ | a | 三（saam1）嘅長 aa | RR a ≠ short Jyutping a: RR *sam* (삼) sounds like 三（saam1）, not 心（sam1） |
| ㅓ | eo | open mouth, lips **not** rounded, tongue back; between 心（sam1）'s a and 哥（go1）'s o | **≠ Jyutping eo**, the rounded vowel of 出（ceot1） |
| ㅗ | o | narrower and rounder than 哥（go1） | ㅗ / ㅜ must stay apart |
| ㅜ | u | 姑（gu1） | |
| ㅡ | eu | lips flat as for 衣（ji1）, tongue back; Cantonese has no such vowel | **≠ the HK name spelling** *eu* (張 Cheung, 梁 Leung = Jyutping oe), **≠ Jyutping eu** |
| ㅣ | i | 衣（ji1） | |
| ㅔ / ㅐ | e / ae | the same in Seoul speech: 些（se1）'s e | ae ≠ 街（gaai1） |
| ㅑ ㅕ ㅛ ㅠ | ya yeo yo yu | RR y = Jyutping j | **RR yu ≠ Jyutping yu** (魚 jyu4, rounded i): RR yu = y + 姑's u |
| ㅘ / ㅝ / ㅟ | wa / wo / wi | 華（waa4）/ w + eo / w + i, one beat | |
| ㅚ ㅙ ㅞ | oe wae we | all said "we" today: w + 些's e | **RR oe ≠ Jyutping oe** (靴 hoe1) |
| ㅢ | ui | eu gliding to i, one syllable | **≠ Jyutping ui** (杯 bui1) |
| ㅋ ㅌ ㅍ ㅊ | k t p ch | like Jyutping k t p c, with even more breath and higher pitch | |
| ㄲ ㄸ ㅃ ㅉ ㅆ | kk tt pp jj ss | no Cantonese counterpart: tight throat, no breath, high pitch | not long, not doubled |
| ㄱ ㄷ ㅂ ㅈ | g d b j | looser than Jyutping g d b z, a little breath, **low pitch**; voiced between vowels | said too tight, they sound tense |
| ㅈ / ㅊ | j / ch | close to Jyutping z（之 zi1）/ c（車 ce1） | **RR j ≠ Jyutping j (= y)**: RR *ja* is not 也（jaa5） |
| ㅅ | s | Jyutping s; before i / y close to 詩（si1）, tongue further back | |
| ㅎ | h | lighter than Cantonese h; often silent between vowels | |
| ㄹ between vowels | r | one quick tap, like a very short l | Cantonese has no r |
| ㄹ final | l | tongue tip held on the ridge, voiced | **Cantonese has no final -l**: not -t (一 jat1), no added vowel |
| ㄴ / ㄹ initial | n / r | 나 ≠ 라 | n-/l- merger (你 nei5 said lei5) [verified as an HK pattern: Wikipedia, *Hong Kong Cantonese*] |
| final ㄱ ㄷ ㅂ | k t p | **unreleased, exactly like Cantonese** -k -t -p: 學 hok6, 物 mat6, 鴨 aap3 | none, for once |
| ㅇ | ng | final only, as in 香（hoeng1）; silent at the start of a block | |

**Further traps:**
- **Korean has no tones.** Do not lay Cantonese tones on syllables; pitch belongs to the phrase. Plain stops start low, and tense or aspirated stops start high. A tone-language ear can use this, but nothing opened tests it with learners [inference].
- **Lazy-sound mergers matter in Korean.** Hong Kong speech merges coda -k into -t and -ng into -n [verified: Wikipedia, *Hong Kong Cantonese*]. A learner who says 北 as *bat1* will end 북 with a t; one who merges -ng into -n will say 상 like 산.

### 4.3 What the finals bridge does for pronunciation

Cantonese closes -p -t -k without release, as Korean does. Korean has seven final sounds (k n t l m p ng), and Cantonese has six of them, all except **l**. The ㅅ ㅈ ㅊ ㅌ ㅎ finals are all said **t**, like 物（mat6）. The bridge is for recognising words. It does **not** tell you how to say them: 일 ends in a held l, never in 一（jat1）'s t.

### 4.4 Paste-ready guide for `hangul` ([inference], native check)

> **羅馬拼音點讀：寫俾識廣東話嘅你**
>
> 每句韓文下面嘅字母係羅馬拼音（韓國官方拼法）。佢唔係粵拼，亦唔係香港人名嗰種拼法（Chan、Cheung）。下面嘅比較只係幫你搵位，真正讀音要聽錄音。
>
> **元音**
> - **a**（ㅏ）：似「三 saam1」嘅長 aa，唔係「心 sam1」嘅短 a。*sam*（삼）讀似「三」。
> - **eo**（ㅓ）：一個元音。口張大、唇唔好圓、舌向後縮。**唔係粵拼 eo**（「出 ceot1」嗰個圓唇音）。*seoul*（서울）係 seo-ul 兩個音節。
> - **o**（ㅗ）：唇又圓又細，比「哥 go1」窄。**u**（ㅜ）：似「姑 gu1」。o 同 u 一定要分開。
> - **eu**（ㅡ）：一個元音。唇扁平好似讀「衣」，舌向後縮，廣東話冇呢個音。唔係 Cheung、Leung 嗰個 eu。
> - **i**（ㅣ）：似「衣 ji1」。**e**（ㅔ）同 **ae**（ㅐ）：而家讀法一樣，似「些 se1」嘅 e。
> - **y** 等於粵拼 j。**yu**（ㅠ）係 y + u，**唔係**粵拼 yu（「魚 jyu4」）。
> - **oe**（ㅚ）、**we**、**wae**：今日都讀 w + 「些」嘅 e。唔係粵拼 oe（「靴 hoe1」）。**ui**（ㅢ）：eu 滑去 i，一個音節，唔係「杯 bui1」嘅 ui。
> - **韓文冇聲調**：每個音節差唔多一樣高。句尾升就係問嘢。唔好加廣東話聲調。
>
> **輔音：廣東話分兩套（b / p），韓文分三套**
> - **k、t、p、ch**（送氣音）：好似粵拼 k、t、p、c，但氣要再強啲，音調偏高。
> - **kk、tt、pp、jj、ss**（緊音）：唔係長音。喉嚨收緊、完全唔送氣，音調偏高。
> - **g、d、b、j**（鬆音）：字頭比粵拼 g、d、b、z 鬆，帶少少氣，音調偏低；兩個元音中間讀得似濁音。
> - **j**（ㅈ）**唔係粵拼 j**：近似粵拼 z（「之 zi1」）。**ch**（ㅊ）近似粵拼 c（「車 ce1」）。
> - **r**（ㄹ，兩個元音中間）：舌尖輕輕彈一下。**l**（ㄹ，音節尾）：舌尖貼住上齒齦唔放。廣東話冇 -l 收尾，唔好讀成 -t，亦唔好加元音。
> - **n** 同 **l** 要分開：나 唔係 라。
>
> **收音：你已經識六個**
> - 韓文音節可以用 7 個音收尾：k、n、t、l、m、p、ng。廣東話有其中 6 個，只有 l 係新嘢。
> - k、t、p 唔爆破，同廣東話一樣：*bap*（밥）收尾似「鴨 aap3」，*hak*（학）似「學 hok6」。
> - 講嘢習慣將「北」讀成 bat1 嘅同學要留意：韓文 k 同 t、ng 同 n 係唔同嘅字。
>
> **四條規則**
> 1. 羅馬拼音寫讀音：감사합니다 寫 *gamsahamnida*。但緊音化唔寫：학교 寫 *hakgyo*，讀似 학꾜。
> 2. 連住讀：收音會移去下一個 ㅇ 開頭嘅音節，*hangugeo* = han-gu-geo。收音只讀一次。
> 3. 連字號只係分開字母，唔係停頓。
> 4. 冇聲調，冇重音。

## 5. Bridges and traps

### 5.1 The finals bridge: 56 verified words

**How verified [verified by script].**
- Korean readings: every character was checked against the hanja→Hangul table `hanja_hangul.tab` shipped with TeX Live's xetexko (`/usr/share/texlive/texmf-dist/tex/xetex/xetexko/hanja_hangul.tab`).
- Jyutping: written by the author. Of the 112 syllables in the printed table, 75 match the Jyutping in `packs/course-en-yue.js`, none differ, and 37 do not occur there (author only). Among the dropped candidates, 園 / 着 / 轉 had other readings there. 品 ban2 was checked on words.hk.
- The printed table itself was parsed back out of this file and re-run: 0 final mismatches. Every word occurs in the target half under the id given.
- Hong Kong forms are printed: the Korean hanja variants 粧 and 眞 appear as 妝 and 真.
- Dropped: 公園, 到着, 運轉 (reading doubts), 金 / 便 / 茶 (Korean multi-readings), 認 jing6 = 인 (a stray final).
- Scripts: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/profile-yue-ko/pairs.py`, `cand.txt`.

| Final | Korean · 漢字 · 粵拼 · id |
|---|---|
| **-k ↔ ㄱ** | 학교 學校 hok6 haau6 c0264 · 학생 學生 hok6 saang1 c0682 · 한국 韓國 hon4 gwok3 c0071 · 중국 中國 zung1 gwok3 c1215 · 미국 美國 mei5 gwok3 c1221 · 식당 食堂 sik6 tong4 c0269 · 약국 藥局 joek6 guk6 c0211 · 음악 音樂 jam1 ngok6 c0282 · 목요일 木曜日 muk6 jiu6 jat6 c1088 · 가족 家族 gaa1 zuk6 c0613 · 행복 幸福 hang6 fuk1 c0187 · 축하 祝賀 zuk1 ho6 c0538 · 약속 約束 joek3 cuk1 s0203 · 택배 宅配 zaak6 pui3 c0231 · 회식 會食 wui6 sik6 c0551 · 숙제 宿題 suk1 tai4 c0732 · 직진 直進 zik6 zeon3 c0379 · 백화점 百貨店 baak3 fo3 dim3 c0271 · 육 六 luk6 c0406 |
| **-t ↔ ㄹ** | 일 一 jat1 c0405 · 칠 七 cat1, 팔 八 baat3 c0406 · 생일 生日 saang1 jat6 c0738 · 매일 每日 mui5 jat6 c0606 · 월요일 月曜日 jyut6 jiu6 jat6 c0601 · 출구 出口 ceot1 hau2 c0108 · 출발 出發 ceot1 faat3 c0821 · 발표 發表 faat3 biu2 c0558 · 박물관 博物館 bok3 mat6 gun2 c0262 · 화장실 化妝室 faa3 zong1 sat1 c0066 · 지하철 地下鐵 dei6 haa6 tit3 c0588 · 필요 必要 bit1 jiu3 c0141 · 특별 特別 dak6 bit6 c0860 · 생활 生活 saang1 wut6 c0672 · 주말 週末 zau1 mut6 c0565 · 일본 日本 jat6 bun2 c1214 |
| **-p ↔ ㅂ** | 십 十 sap6 c0406 · 입구 入口 jap6 hau2 c0376 · 연습 練習 lin6 zaap6 g117 · 업무 業務 jip6 mou6 c0559 · 수업 授業 sau6 jip6 e241 |
| **-m ↔ ㅁ** | 삼 三 saam1 c0405 · 점심 點心 dim2 sam1 c0553 · 감사 感謝 gam2 ze6 c0062 · 감기 感氣 gam2 hei3 c0216 · 음악 音 jam1 c0282 |
| **-n ↔ ㄴ, -ng ↔ ㅇ** | 만 萬 maan6 c0407 · 시간 時間 si4 gaan3 c0171 · 등산 登山 dang1 saan1 c0289 · 운동 運動 wan6 dung6 c0278 · 전화 電話 din6 waa6 c0694 · 연락 連絡 lin4 lok3 c0571 · 은행 銀行 ngan4 hong4 c0267 · 시장 市場 si5 coeng4 c0270 · 호선 號線 hou6 sin3 c0153 · 공항 空港 hung1 gong2 c0591 · 문제 問題 man6 tai4 c0651 |

**Exceptions: a closed list, not a rule.** 方法 fong1 faat3 = 방법 (c0673) is the only case in the half; 品 ban2 = 품 and 犯 faan6 = 범 are further examples outside it (profile only). Readings verified; the history behind them (Cantonese lost -m / -p after some labial initials) is the author's knowledge. Most labial-initial words are regular (發 발, 八 팔, 物 물, 萬 만), so teach 「有少數例外，例如『方法』」, not a b / p / m / f rule.

**Korean-side exception:** months 6 and 10 are 유월 / 시월 [author's knowledge; not in the half]: `numbers` prose only, no Hangul.

**Initials, tendencies only [inference]:** Cantonese **m-** ↔ ㅁ where Mandarin has w- (萬 만, 問 문, 物 물); **ng- / j-** ↔ silent ㅇ (銀 은, 日 일, 業 업); **h-** ↔ ㅎ or ㄱ (學 학, 口 구, 氣 기); **f-** ↔ ㅎ or ㅂ (火 화, 發 발, 福 복); **d- / t-** before i ↔ ㅈ / ㅊ (電 전, 點 점, 鐵 철); word-initial **l-** ↔ ㄴ or silent (來日 내일, 旅行 여행, 料理 요리).

**Use in rows.** `HANGUL_RX` (`tools/halves/lib.js`) also matches jamo. So in card notes the bridge is **漢字 + 粵拼, with the Korean final named by its romanization letter**: 「學校 hok6 haau6：粵語收 -k，韓文都收 k」. Add Hangul or jamo only where the English row already has that run (c0264's English note has only 대학교). Show 漢字 only for transparent cognates and false friends, in Hong Kong forms. Never show them for 수고 (zh review), nor for opaque words (친구, 지금, 동생). When in doubt, leave them out.

**Recognised but not said in Hong Kong** (the note should say so): 공항 空港 (機場), 영화 映畫 (電影), 사진 寫真 (相), 지하철 地下鐵 (地鐵; the old name of the MTR company was 地下鐵路公司 [inference]).

**홍콩 is not Sino-Korean.** 홍콩 is borrowed from "Hong Kong"; the hanja reading of 香港 would be 향항 [verified: xetexko table]. It makes a nice note on c1217.

### 5.2 False friends, Hong Kong edition

| Korean (id) | 漢字 | Korean meaning | What Cantonese hears |
|---|---|---|---|
| 점심 (c0553, c0600) | 點心 | lunch | **dim sum**: the strongest one for HK. 食晏 = 점심 먹어요 |
| 공부 (c0082) | 工夫 | studying | 做工夫 = chores or work; 功夫 = kung fu |
| 식당 (c0269) | 食堂 | any restaurant | canteen; HK says 餐廳 / 茶餐廳 |
| 계산 (c0580) | 計算 | paying the bill | calculating. 계산해 주세요 = 唔該埋單 |
| 화장실 (c0066) | 化妝室 | toilet | make-up room; HK 洗手間 / 廁所 |
| 편의점 (c0268) | 便宜店 | convenience store | 便宜 = cheap; HK 便利店 |
| 생수 (c0317) | 生水 | bottled water | unboiled water |
| 사진 (c0717) | 寫真 | any photo | 寫真 = glamour photo book; HK 相 |
| 선생님 (c0615) | 先生 | teacher | Mr., husband; HK schools say Sir / Miss [inference] |
| 약속 (s0203) | 約束 | plans, appointment | to restrain; but 約咗人 is a good bridge |
| 경찰서 (g091) | 警察署 | police station | not 派出所 (zh review) |

### 5.3 Grammar bridges and traps [inference unless tagged]

| Point | Cantonese | Korean | Holds / misleads |
|---|---|---|---|
| Word order | SVO: 我食飯 | SOV: 저는 밥을 먹어요 | **misleads**: only the object moves, since time and place already come before the verb (我尋日喺屋企讀書). Hook: 將 puts the object first (我將飯食晒) |
| Particles | none: order and context do the work | 은/는, 이/가, 을/를 on every noun | new. 은/는 = 話題 (呢本書呢，我睇咗喇); 이/가 answers 邊個 / 乜嘢 (邊個嚟咗？朋友嚟咗 = 누가 왔어요? 친구가 왔어요) |
| 係 | 我係學生 | 학생이에요 | holds for A = B; misleads if put on adjectives or places |
| 有 | 我有貓 | 고양이가 있어요 | holds |
| 喺 (verb) | 隻貓喺屋企 | 고양이가 집에 있어요 | **喺 is also 있어요**, plus 에 |
| 喺 + action | 喺咖啡店讀書 | 카페에서 공부해요 | **test:** 喺 + being somewhere → 에; 喺 + doing → 에서; 去 / 嚟 + place (no 喺) → 에; 由 / 從…嚟 → 에서 (zh-ko §5.3, Wang 2018, transfers) |
| 冇 | 冇錢 = 돈이 없어요 | | holds for "not have" |
| **冇 + verb** | 我冇去 | **안 갔어요** | **misleads**: 冇 also negates the past. Never 없어요 |
| 唔 | 我唔飲咖啡 | 커피를 안 마셔요 | **position**: 唔 goes before the verb phrase, 안 right before the verb; 안 커피를 마셔요 ✗ |
| 唔係 | 唔係醫生 | 의사가 아니에요 | holds; never 안 이에요 |
| 未 | 未食 | 아직 안 먹었어요 / 아직이요 | 未 = "not yet": Korean needs 아직 + past (only where the row has 아직) |
| **咗** | 我食咗飯 | 먹었어요 | **咗 is aspect, not tense.** 落雨喇 (it has started raining) = 비가 와요; 我以前係學生 (no 咗) = 학생이었어요. "Korean marks every past event, with or without 咗" |
| 會 / 想 / 鍾意 / 好 | 我會去 · 我想去 · 我鍾意咖啡 · 好好飲 | -(으)ㄹ 거예요 · 가고 싶어요 · 커피를 좋아해요 · 맛있어요 | 鍾意 takes 을/를 (겨울을 좋아해요, not 겨울이 좋아해요: zh-ko §5.1, research-backed for Chinese learners) |
| Comparison | A 平過 B · A 比 B 平 | A가 B보다 싸요 | 比 keeps Korean order; with 過, 보다 sits after B while 過 sits after the adjective. 更 / 再 ≈ 더, 最 ≈ 제일 |
| Measure words | 三杯咖啡; 杯咖啡 (= "the coffee") | 커피 세 잔 | Order: noun · number · counter. A bare classifier as "the" has no Korean equivalent |
| 兩 vs 二 | 兩杯 · 兩點 · 二十 | 두 잔 · 두 시 · 이십 | close parallel; breaks for money (兩萬 = 이만 원) |
| Numbers | 一二三…萬 | 일 이 삼…만 | **Sino-Korean = Cantonese numerals**, grouped by 萬 (오만 원 = 五萬). Where Cantonese puts a 量詞 on a small number (三個、三歲、三點), Korean uses native numbers (세 개, 세 시); minutes and money stay Sino-Korean |
| Time words | 三點三 = 3:15 · 三個字 = 15 min | 세 시 십오 분 | **trap**: never translate 三點三 as 세 시 삼 분 |
| Final particles | 喎 (noticing), 㗎嘛 (you know), 係咪 / 吖嘛 (seeking agreement) | 네요 · 잖아요 · 죠 | rough analogies only: 好凍喎 ≈ 춥네요; 我咪喺度囉 ≈ 내가 있잖아; 你講笑㗎咩 ≈ 농담이죠? Use them in notes, never as a gloss rule |
| Kinship | 阿哥 / 家姐 / 細佬 / 細妹 | 형·오빠 / 누나·언니 / 남동생 / 여동생 | **The speaker's gender picks the word** (女仔叫 오빠, 男仔叫 형). Also used for older friends, as 大佬 / 家姐 can be [inference] |
| 你 | 你 for everyone | name + 씨, a title, or nothing | 당신 ≠ 你 (zh-ko §5.11) |

**Hangul in this table and in §4–§5 that the target half lacks** (남동생, 여동생, 수영할 수 있어요, 삼만 원, 춥네요, 잖아요, 겨울이 / 겨울을, 유월 / 시월, 품, 향항, 대리 / 부장 outside `office`) is for the writers' understanding only. It never goes into a row without a waiver; write the Cantonese side alone.

## 6. Settled names (permanent progress keys: final once merged)

### 6.1 Lesson titles (each keeps exactly the English title's Hangul)

| id | Title | id | Title |
|---|---|---|---|
| hangul | 1 · 一次過學識韓文字母 | do-man | 15 · 도 同 만：都、淨係 |
| polite | 2 · 禮貌等級 | sentences | 16 · 將名詞同動詞砌成句子 |
| meet | 3 · 識新朋友 | want-like | 17 · 想同鍾意：-고 싶어요、좋아해요 |
| sound-changes | 4 · 音變：點解 감사합니다 讀落唔同 | numbers | 18 · 兩套數字 |
| nouns | 5 · 名詞同 은/는 | food | 19 · 出街食飯 |
| isseoyo | 6 · 있어요 同 없어요 | getting-around | 20 · 搭車問路 |
| pronouns-questions | 7 · 代詞同疑問詞 | titles | 21 · 點樣稱呼人 |
| verbbasics | 8 · 動詞 | plans | 22 · 約人 |
| verbs | 9 · 現在式：요體 | texting | 23 · 好似本地人咁傳訊息 |
| past | 10 · 過去式：았어요 / 었어요 | counters | 24 · 量詞 |
| future | 11 · 將來同計劃：-(으)ㄹ 거예요 | joining | 25 · 連接句子：-고、-지만、-아/어서 |
| sov | 12 · 語序同 을/를 | story | 26 · 用過去式講故事 |
| particles | 13 · 에 同 에서，仲有助詞總表 | noun-modifiers | 27 · 形容名詞：좋은 날씨、큰 가방 |
| negation | 14 · 講「唔」：안 同 -지 않아요 | compare | 28 · 比較：보다、더、제일 |
| cant | 29 · 做唔到、做得到同唔知 | have-to | 30 · 一定要：-아/어야 해요 |
| honorific | 31 · 尊敬形動詞 | requests | 32 · 有禮貌咁請求 |
| office | 33 · 職場韓文 | | |

Cross-references use these titles exactly (have-to → 「有禮貌咁請求」 for "the Asking politely lesson").

### 6.2 Group names (6) and deck labels (56)

Groups: `foundations` **基礎** · `everyday` **日常** · `vocabulary` **詞彙** · `grammar` **文法** · `social` **社交** · `core-words` **核心詞彙**. 日常 and 社交 are fixed by NOTES §3.

| Deck id (`ko.d.…`) | Label | Deck id | Label |
|---|---|---|---|
| hangul-vowels | 韓文元音 | particles | 助詞 |
| hangul-consonants | 韓文輔音 | numbers | 數字 |
| hangul-advanced | 韓文進階字母 | sweet-talk | 甜言蜜語 |
| pronunciation-tips | 發音貼士 | cute-things-to-say | 暖心說話 |
| survival-phrases | 必備短句 | flirting | 搭訕 |
| introductions | 自我介紹 | casual-texting | 短訊用語 |
| survival-phrases-2 | 必備短句 2 | hype-cool | 讚人同打氣 |
| asking-around | 搵地方 | hanging-out | 約朋友出街 |
| cafe-convenience-store | 咖啡店同便利店 | k-pop-fan-culture | K-pop 追星 |
| numbers-in-the-wild | 日常數字 | social-media-slang | 社交媒體同潮語 |
| counters | 量詞 | dating-deeper | 拍拖進階 |
| weather-feelings | 天氣同心情 | work-office | 職場 |
| connectors | 連接詞 | small-talk | 閒聊 |
| doctor-pharmacy | 睇醫生同藥房 | food-ordering | 叫嘢食 |
| housing-errands | 租屋同雜務 | directions-transport | 問路同交通 |
| honorifics | 尊敬形 | time-days | 時間同日子 |
| places-buildings | 地方同建築 | family-people | 家人同稱呼 |
| hobbies | 興趣 | adjectives | 形容詞 |
| food-words | 食物 | k-drama-phrases | 韓劇對白 |
| drinks | 飲品 | top-nouns | 常用名詞 |
| activities | 日常活動 | top-verbs | 常用動詞 |
| tv-entertainment | 影視娛樂 | top-adjectives | 常用形容詞 |
| position-direction-words | 方位詞 | top-adverbs | 常用副詞 |
| core-verbs | 核心動詞 | top-pronouns | 常用代詞 |
| top-particles | 更多助詞 | top-connectors | 更多連接詞 |
| top-interjections | 常用感嘆詞 | top-words | 實用小詞 |
| top-counters | 更多量詞 | flirting-words | 戀愛詞彙 |
| compliments | 日常稱讚 | countries | 國家同地區 |

All 56 labels are distinct, none is 我嘅短句, and none starts with an English word except K-pop.

### 6.3 `labels.jsonl` values

- **Level titles**, from the yue `ui.json`: `ko.t01` 萌芽 · `t03` 學生 · `t05` 前輩 · `t08` 高手 · `t12` 大師 · `t16` 宗師.
- **Greetings:** `ko.h.night` 咁夜喇，辛苦晒 · `morning` 早晨 · `afternoon` 午安 · `evening` 晚上好.
- **Goals:** travel 旅行同出街 · social 拍拖、朋友同夜生活 · drama 韓劇同音樂 · work 返工同讀書.
- **Plans:** trip 去韓國旅行 · social 識朋友同拍拖 · conv 90 日內識得傾偈.
- **Pause sets:** compliment 稱讚 · expression 日常用語 · polite 禮貌用語 · saying 俗語. Items follow §7.
- **`ko.d.mydeck`:** 你自己加嘅內容。

## 7. Fixed phrases (one gloss everywhere; the tag only where the English has one)

| Korean | Cantonese gloss | Note |
|---|---|---|
| 안녕하세요 | 你好 | |
| 안녕히 가세요 | 再見（對方走，你留低） | memory aid: like 慢慢行. Gloss by the Korean: the English pause labels say "you" for the listener |
| 안녕히 계세요 | 再見（你走，對方留低） | 我走先喇 is what you would say in Cantonese |
| 안녕히 주무세요 | 早唞（對長輩講） | |
| 처음 뵙겠습니다 | 初次見面 | |
| 반갑습니다 / 반가워요 / 반가워 | 好高興識到你 | add the English tag where present |
| 감사합니다 / 고마워요 / 고마워 | 多謝 | note: where Cantonese says 唔該 (shops, help), Korean still says 감사합니다 |
| 죄송합니다 / 미안해요 / 미안해 | 對唔住 | 미안 alone: 唔好意思 |
| 실례합니다 | 唔好意思（打擾晒） | |
| 저기요 | 唔該（叫人嗰陣） | the HK way to call a waiter |
| 잠깐만요 / 잠시만요 | 等等 / 等一陣 | |
| 지나갈게요 | 唔該借借 | |
| 괜찮아요 | 冇事 / 唔使喇 | 唔使喇 when refusing |
| 아니에요 (after thanks) | 唔使客氣 | |
| N 주세요 | 唔該俾 N 我 · ordering: 唔該要 N | 이거 주세요 → 唔該要呢個 |
| -아/어 주세요 | 唔該…… | 천천히 말해 주세요 → 唔該講慢啲 · 다시 말해 주세요 → 唔該再講一次 · 도와주세요 → 唔該幫幫我 |
| 계산해 주세요 | 唔該埋單 | |
| 포장이요 / 포장해 주세요 | 拎走 / 唔該，拎走 | the opposite is 堂食 |
| 얼마예요? | 幾多錢？ | |
| 혹시 | 請問 / 唔知……（緩和語氣） | 혹시 영어 메뉴 있어요? → 請問有冇英文餐牌？ |
| 잘 부탁드립니다 | 請多多指教 | at work, 麻煩晒 may go in the note |
| 잘 먹겠습니다 | 我唔客氣喇（食飯前講） | [inference; native check] |
| 잘 먹었습니다 | 多謝款待（食完講） | |
| 수고하셨습니다 | 辛苦晒（正式） | to seniors after work |
| 수고하세요 | 辛苦晒（自己走，對仲做緊嘢嘅人講） | |
| 수고했어요 / 수고했어 | 辛苦晒（對同輩或後輩） | |
| 수고 많으셨어요 | 真係辛苦晒你 | no 漢字 for 수고, ever |
| 콜 | 得！就咁話 | 오케이 콜 → 好，就咁話 |
| 화이팅 | 加油 | |
| 대박 | 勁呀 / 嘩 | 설마 keeps 唔係嘛…… |
| 아이고 | 哎呀 | |
| 건배 | 飲杯 | |
| 넵 | 收到！ | the work "yes" |
| 축하해요 | 恭喜 | |
| 오랜만이에요 | 好耐冇見 | |
| 조심히 가세요 | 小心行 | |
| 좋은 하루 보내세요 | 祝你今日開心 | |

## 8. Conventions for glosses and prompts

- **One prompt, one answer.** Read `target/ko/practice.jsonl`: for every type or mc item whose rejected forms (`x`) or options differ only in tense or level, the Cantonese prompt must carry the cue.
  - Cantonese verbs show no tense, so add a time word (尋日、聽日、而家) or （過去式）. Example: past.14 → 「（我）尋日冇食」. story.02 needs （尋日嘅事）.
  - Add （禮貌）/（半語）/（正式）/（尊敬） as in §2.3. polite.14 → 「唔使喇，冇事（半語）」, with hint 「刪走 요」.
  - Keep the English instruction cues in Cantonese: （數字用韓文字母寫）, （用 -자）, （對的士司機講）, （用 안）.
- **Times:** write 3:30 or 三點半 in prompts, never 三點三 / 三個字. Hours take native numbers; minutes and money Sino-Korean (zh review).
- **Names:**
  - Korean personal names in Latin letters, as in the English: Minsu, Jieun, Kim Minsu, Lisa, Kii;
  - example people in Cantonese prose: 陳大文, 李小美 [inference];
  - places in Hong Kong usage: 首爾, 弘大 [verified: creatrip HK page], 江南, 明洞, 仁川, 釜山, 濟州, 南山.
- **`@@`** (the learner's name): keep exactly the English count. Put a half-width space on both sides unless it touches full-width punctuation: 「你好，我係 @@。」, 「多謝。@@ 敬上」. Never attach a particle that depends on the name's sound.
- **Blanks** `__` / `___` are unchanged (the I'm-from-___ rows: 「我由 ___ 嚟」).
- **HK equivalents in prose:** 八達通 for T-money (both tap cards, topped up at convenience stores); WhatsApp for KakaoTalk (two blue ticks = read); 港幣 / 蚊 beside 韓元 (韓幣 also seen); 地鐵 / 港鐵, 的士, 巴士, 便利店.
- **Countries deck (204 cards):** use the Hong Kong forms (意大利, 澳洲, 紐西蘭, 新加坡, 菲律賓), not Taiwan or Mainland ones (NOTES §5 notes the 義大利 / 意大利 split). Mark doubtful names in `_note`; meanings must stay distinct within the deck.
- **KakaoTalk** (texting.html; zh review, binding): the number shows how many people have **not** read yet. 읽씹 is when the 1 has gone and no reply comes, ≈ 已讀不回 / 藍剔唔覆 [inference for the HK slang]. The English source has this backwards.
- **Tables:**
  - the "Formal" column in `plans` and `meet` holds honorific 요-form lines: head it 「尊敬 / 正式」 (meet) and 「更客氣（尊敬形）」 (plans), not 正式體;
  - `polite`'s "Say it 3 ways" header is 正式體 / 禮貌體 / 半語;
  - no English is left in bodies or table headers.
- **✗ rows stay** even when they are not a Cantonese speaker's mistake. Reframe them: 「英文母語者常錯成 오십천 원；你跟廣東話『五萬』講 오만 원 就啱」.

### 8.1 Per-lesson notes (all 33; the bridge first, [what to rewrite])

1. `hangul`: 音節塊 look like 方塊字 (one block, one syllable); add §4.4 with a waiver [replace "eo (uh), u (oo), i (ee), e (bed)" with §4.2 anchors].
2. `polite`: no 您 in Cantonese; Korean puts the level in every ending [natural wording for "comes off as sweet"; 3-way header 正式體 / 禮貌體 / 半語].
3. `meet`: 幾多歲 picks the level; country tip: 香港 → 홍콩 (c1217) only with a waiver, else name the 「國家同地區」 deck in words.
4. `sound-changes`: finals bridge in Latin letters and characters; keep the 閱讀 → 🔀 音變 line only if `trainer.json` is written; add 「收音只讀一次」.
5. `nouns`: the 학 tip is the zero-waiver home of 學 hok6 (學校, 學生); 呢 / 嗰 → three words; 들 ≈ 哋 for people (我哋) [inference].
6. `isseoyo`: 係 / 有 / 喺 / 冇 (§5.3) [rebuild the English "is has two jobs" table].
7. `pronouns-questions`: question words stay in place, as in Cantonese; 당신 ≠ 你; 우리 ≈ 我哋 (also "my" family) [reframe the ✗ "moving the question word" row as an English speaker's error].
8. `verbbasics`: no person agreement; adjectives without 係 (天氣好好 = 날씨가 좋아요); many 하다 verbs are 漢字詞 + 하다 (운동하다, 공부하다).
9. `verbs`: 아요 / 어요 is new; one form covers 我去 / 我去緊 / 你去唔去.
10. `past`: 咗 ≠ past; 冇去 = 안 갔어요 [rewrite the "I ate / have eaten" line around 咗 and 過].
11. `future`: 會 / 打算 → -(으)ㄹ 거예요; 應該會 for "probably"; tense 거 with §4.2 wording.
12. `sov`: 我食飯 → 我飯食; 將 hook [ "English order" ✗ → 「廣東話語序」].
13. `particles`: the 喺 test (§5.3); 去 + place → 에; 由…嚟 → 에서.
14. `negation`: 唔 / 冇 / 唔係 / 未 (§5.3); 안 position trap.
15. `do-man`: 都 ≈ 도, 淨係 ≈ 만; trap: 都 / 淨係 sit before the verb (我都去), 도 / 만 stick to the noun; 都唔 ≈ 도 + 안.
16. `sentences`: the four shapes in Cantonese order; only object and verb swap.
17. `want-like`: 想 ≈ -고 싶어요; 鍾意 + 을/를; 好食 / 好 + 이/가; 我要咖啡 ≈ 커피 주세요.
18. `numbers`: zero-waiver home of the numeral finals (jat1 / saam1 / luk6 / cat1 / baat3 / sap6 / maan6); 萬 grouping; native numbers where Cantonese adds a 量詞; reframe ✗ 오십천 원.
19. `food`: 個 go3, 杯; 埋單, 拎走, 飲杯; 잘 먹겠습니다 has no exact Cantonese equivalent.
20. `getting-around`: 出口 = 출구; 八達通; HK MTR exits are lettered (A1), Seoul's numbered [inference].
21. `titles`: 女仔叫 / 男仔叫; 선생님 ≈ 先生 only partly; 사장님 ≈ 老闆.
22. `plans`: 啦 / 不如…啦 ≈ -자 / -(으)ㄹ까요?; 一齊去唔去？≈ 같이 갈래요?; 콜 = 就咁話 [column header §8].
23. `texting`: WhatsApp and the "1" (§8); ㅋㅋ ≈ 哈哈, ㅠㅠ ≈ 嗚嗚 [inference].
24. `counters`: 量詞 are mandatory in both; order noun · number · counter; 個 = 개.
25. `joining`: -고 ≈ 同埋 / 然後, -지만 ≈ 但係, -아서 ≈ 因為…所以; trap: 因為 can come last in Cantonese, 서 never.
26. `story`: 首先, 然後, 跟住, 所以, 不過, 最後 for the connector table.
27. `noun-modifiers`: 嘅 ↔ 定語詞尾 (大嘅袋 = 큰 가방) [the "no that / which" paragraph becomes one line].
28. `compare`: 比 / 過 (§5.3); 冇咁 ≈ 덜.
29. `cant`: 唔識 / 做唔到 ≈ 못; 唔知 ≈ 몰라요; 唔太清楚 ≈ 잘 모르겠어요.
30. `have-to`: 一定要 ≈ -아야 해요; 唔使 ≈ 안 -아도 돼요; cross-reference 「有禮貌咁請求」.
31. `honorific`: 您 does not exist, so the respect is in the wording (請用、休息、貴庚); -시- raises the person doing the action.
32. `requests`: 唔該 / 請問 / 麻煩你; 좀 ≈ 啲 / 一下; 혹시 ≈ 請問.
33. `office`: the 수고 family (§7); 대리 / 부장 are false friends of 代理 / 部長 [zh review]; 회식 ≈ 公司飯局; 먼저 퇴근하겠습니다 ≈ 我走先喇; 넵 ≈ 收到.

## 9. Course `ui.json` overrides

The yue dictionary already says 韓文 / 韓文字母 / 羅馬拼音 / 禮貌 ↔ 半語, so **no string needs rewording**. But `validate.js` (line 241) counts the 14 `uiKeys` as words remaining unless the **course** `ui.json` holds them, and three gaps remain [verified in `src/app.html`]:

1. **Copy the 14 `uiKeys` verbatim** (the list is `uiKeys` in `target/ko/trainer.json`) with their values from `tools/i18n/yue/ui.json` (`exact[key].t`), e.g. "Hangul drill" → 韓文字母操練, "Romanization" → 羅馬拼音.
2. **12 tag chips** (`tagL(x)` = `i18nT('#'+x)`). The dictionary has only `#travel` and `#work`:
   `#dating` #拍拖 · `#food` #飲食 · `#time` #時間 · `#polite` #禮貌 · `#casual` #半語 · `#slang` #潮語 · `#grammar` #文法 · `#reading` #閱讀 · `#family` #家庭 · `#feelings` #感受 · `#living` #生活 · `#vocab` #詞彙.
3. **For the lead, not the course:** "Report a problem on this page" and "Count my visits anonymously" are missing from the yue dictionary. Proposed: 報告呢頁嘅問題 · 匿名計算我嘅瀏覽次數. Add them to `tools/i18n/yue/ui.json`, or to the course file as a stopgap, as zh and ja did.

The zh / ja "Pronunciation hint…" overrides are not needed: those strings show only when `pron` is off, never for Korean.

## 10. What NOT to do

- **No added Korean** beyond the English row's Hangul set without a `_waive` and a `_note`. Allowed waivers: `hangul` (the guide) and `meet` (홍콩 line) only. The finals bridge in notes uses 漢字 + 粵拼, never extra Hangul.
- **No Mandarin-only wording:** 沒有, 在, 的, 什麼, 怎麼, 哪個, 找, 看, 今天 / 明天, 天 for days, 您, 吧 as a suggestion particle, 買單 (HK 埋單), 出租車 (HK 的士), 公交 (HK 巴士), 微信 as the comparison app.
- **No Simplified characters**, including in 漢字 notes (學 not 学, 國 not 国, 點 not 点).
- **No unverified character origins:** print a 漢字 only if certain, never for 수고, and no folk etymologies. A hedged origin needs 「一般認為」.
- **No equations** such as 「ㅂ = 粵拼 b」, no Jyutping without its character, no English sound anchors, no particle as the only politeness cue, no 請 in instructions.
- **Do not edit** `target/`, `native/en/`, `work/` after merge, or `src/`; do not run `mk_native.js --merge` over a reviewed half.

## 11. Unverified claims and native check

- **Verified:** §5.1 hanja readings (xetexko); 75 of 112 Jyutping syllables (en-yue pack) and 品 (words.hk); the HK mergers n→l, ng-→∅, -ng→-n, -k→-t, avoided in educated speech, and unreleased -p -t -k (Wikipedia); 首爾 / 弘大 / 韓幣 / 韓元 (creatrip HK).
- **From the author's knowledge** (verify where possible): Jyutping for the other 37 syllables; why 方法 is irregular; 유월 / 시월; all Cantonese wording.
- **Unverified usage:** 已讀不回 / 藍剔 in HK; 地下鐵路公司; 先生 = teacher in HK schools; the 喎 / 㗎嘛 analogies; 我唔客氣喇 for 잘 먹겠습니다; whether HK readers know Jyutping (the profile assumes many do not).

**Ask a Hong Kong reviewer first:** (1) the §4.4 guide (ㅓ, ㅡ, 些 for ㅔ / ㅐ, j ≈ 之, ch ≈ 車); (2) §2.4; (3) 我唔客氣喇 / 多謝款待; (4) 辛苦晒 for 수고; (5) 請多多指教; (6) 唔該借借, 唔該 for 저기요; (7) 已讀不回 / 藍剔唔覆; (8) labels 搵地方, 必備短句, 短訊用語, 叫嘢食; (9) titles 21 / 29 / 32; (10) 請問你貴庚？ / 請問點稱呼？; (11) 好凍喎 ≈ 춥네요.

## Sources (opened 2026-11-23)

- [Wikipedia: Hong Kong Cantonese](https://en.wikipedia.org/wiki/Hong_Kong_Cantonese) (sound mergers, educated speech)
- [Wikiwand: Cantonese phonology](https://www.wikiwand.com/en/articles/Cantonese_phonology) (unreleased stops)
- [words.hk: 品](https://words.hk/zidin/品) (ban2)
- [creatrip HK: Korean money exchange](https://creatrip.com/zh-HK/blog/1491) (韓幣 / 韓元, 首爾, 弘大)
- Local: xetexko `hanja_hangul.tab`, `course-en-yue.js`, `i18n/yue/`, `app.html`, `validate.js`, zh-ko, briefs, both halves.
