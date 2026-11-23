# Taiwanese Hokkien / Tâi-gí (nan) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English.
- The generated pack is `packs/i18n-nan.js`.

Build: `python3 tools/i18n/gen.py nan && node tools/i18n/validate.js nan`. It prints `PASS`, `exact=784 patterns=275 warnings=0`, and gen reports `road 40`.
- **Why 0 warnings, when tl and ceb have 2 classes.** The validator sees a distinct script, so it switches off its identical-to-English check. Its overflow rule (more than 1.6 × English and more than 14 characters) almost never fires for Han text, because it counts characters, not display width.
- Both checks were therefore done by hand:
  - the strings identical to English are in §2;
  - the possible-overflow list (display width, a Han character counting 2) is in §3.

The only course this interface serves is **nan-ko** (Korean for Taigi speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: 韓語, 韓文字, 羅馬字. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (英語). They are only shown in an English course, which Taigi speakers do not have.
- The zh and ja dictionaries rewrote these keys for English (zh: `Korean starter` → 英语入门), and they also dropped some of the Hangul. So they were not used as models; tl and ceb were.
- zh is Simplified Chinese and was never used as a seed.

**Author: not a native speaker of Taigi, and not a native reader of Chinese characters.** Everything here needs a Taigi speaker's check (§5).

## 1. Script, register and spelling (one decision each)

- **Script:** Taigi written in the **Ministry of Education recommended Han characters** (臺灣台語推薦用字, traditional), the same standard as the app's own Taigi course (`docs/profiles/en-nan.md` §2.2, `tools/target/nan/lexicon.txt`).
  - The rule: write the Taigi word in the MOE character, never the Mandarin word with the same meaning. So the strings use 毋 / 無 / 袂 / 莫 for "not", 佇 for "at", 欲 for "want / about to", 予 for "give / let", 个 for the classifier, 遮 for "here", 啥 for "what", 攏 for "all", 閣 for "again", 佮 for "and / with", 共 for the object marker, 矣 for "done / now", and 咧 for an action in progress.
  - Never 不, 在, 要, 給, 個 (as the classifier), 這裡, 什麼, 很, 了 (as the aspect marker) or 們. The scratch lint blacklists them. Allowed exceptions are inside fixed Sino compounds: 不規則, 個人, 現在式, 在地人, and 了 *liáu* "finish" (學了, 了後).
  - **Tâi-lô fallback: none was needed.** Every word in the interface has a settled MOE character. Latin letters appear only in the kept list (§2), and in romanization the user types (`ga`).
  - **No character outside the BMP.** The MOE words 𠢕早 (good morning), 𨑨迌 (have fun) and 𪜶 (they) were deliberately avoided, because their font support is unchecked (en-nan.md §10.6). 早安 and 旅行 were used instead (§5, items 20 and 21).
- **Vocabulary layer.** The function words and everyday verbs are Taigi; app and tech nouns are the shared Taiwan Sino-vocabulary (設定, 帳號, 登入, 同步, 備份, 匯出, 瀏覽器, 裝置, 檔案). That is how Taigi is written for modern topics. Where a short, recognisable Taigi word exists, it is preferred:
  - 揣 (search), 拍字 (type), 點 (tap), 囥 (store / put), 綴咧講 (repeat after), 講看覓 (say it);
  - 干焦 (only), 賰 (left / remaining), 閣一擺 (again), 轉去 (back);
  - 今仔日 (today), 明仔載 (tomorrow), 逐工 (daily), 禮拜 (week), 工 (day, counted).
- **Address:** **你 *lí*** only. There is no polite "you" in Taigi: 您 is Mandarin, not Taigi (en-nan.md §2.3). The app speaks of itself as **阮** (exclusive "we": 阮會寄…, 阮欲按怎叫你？), never 咱, because the user is not part of the "we".
- **Requests:** a plain imperative (揀一个牌組…, 莫貼密碼). 請 is used only for "please" in warnings and instructions (請莫分享個人資料, 請共圖長按, and 請拍 before DELETE). No 您, and no Mandarin politeness formulas.
- **Completion and state:** 矣 *--ah* marks done or changed states, in toasts and statuses: 儲存矣。 刪除矣。 登入矣 ✓. 中 is used only in fixed UI status words (載入中…, 儲存中…, 同步中…, 檢查中…, 寄出中…, 刪除中…, 瀏覽中, 計畫中). "Learning" (the SRS state) is 咧學.
- **Counts:** digit, space, then classifier. The same text serves singular and plural, so `{n} card` and `{n} cards` are both `{1} 張卡`.
  - Classifiers: 張 (cards), 組 (decks), 課 (lessons), 工 (days), 禮拜 (weeks), 擺 (times / runs / reviews), 題 (questions), 句 (phrases), 逝 (rows / lines), 輪 (rounds), 段 (dialogues), 个 (patterns, badges, things), 面 (shields), 分鐘, 秒.
  - **A digit hides the 兩 / 二 choice** (兩張, not 二張). The app inserts digits, so this never shows. Fixed number words in strings use 兩 (兩个緊問題) or 三 (三个緊問題).
- **Spacing:** one space between a digit or Latin word and Han text (`5 張卡`, `分享 Lang App`), as Taiwan apps do. No space between Han characters.
- **Punctuation:** full-width in Taigi text: ，。？！：；、（）「」. Quotes are 「」. The separators the key uses are kept as they are: ` · `, `→`, `—`, `…`, `/`, `×`. Fragment edges follow the key: a leading `: ` becomes `：`, `(` becomes `（`, and a trailing ` ·` is kept.
- **Grammar terms** (the Korean-teaching terms used in Taiwan): 動詞 verb, 名詞 noun, 詞幹 stem, 原形 dictionary form, 語尾 ending, 助詞 particle, 量詞 counter, 疑問詞 question word, 敬語 polite, 半語 casual (반말), 尊稱 honorific, 요-form (kept as in the key), 羅馬字 romanization, 字塊 block, 母音 vowel, 子音 consonant, 收尾音 final, 音變 sound change, 過去式 past, 現在式 present, 音節 syllable, 句型 pattern, 不規則 irregular, 文法 grammar, 動詞變化 conjugator.
- **Quiz mode words** are used the same everywhere:
  - Read = 讀; Listen = 聽; Recall = 回想; Type = 拍字.
  - Mixed (the quiz mode) = 混合. The Mix pool (5 at a time) = 綜合.
  - Shuffle = 洗牌; Merge = 合併.
  - The native-side tag in mode labels is **台**: `讀 한→台`, `回想 台→한`, `聽 🔊→台`.

## 2. Kept in Latin script (closed list)

- **Identical to the English key (7 exact keys):** `Enter`, `XP`, `A−`, `A+`, `you@example.com`, `DELETE` (the engine compares the typed text), `Lang App`.
- **Pattern templates that are symbols and slots only (3), so their text matches the template:** `{n}/{n} → Lv {n}`, `{n} / {n} · {n}%`, `{n}/{n} · {x}`.
- **Inside Taigi strings:** Ctrl+K, Esc, CSV, TSV, PNG, KB, Lv, UI (in `한국어 UI`), Aa, 3D, Supabase, Vercel Web Analytics, cookie, `요-form`, the user-typed romanization sample `ga`, and the bare `(han)`.
- **Everything else is in characters**, including e-mail (電子批, §5 item 2), app (程式), K-drama (韓劇), bug (錯誤) and leech (蜈蜞卡).

## 3. Glossary of fixed terms (course writers reuse these)

**Tab names.** All are 1 to 3 characters. In display width (2 per Han character) all but 今仔日 (6 against "Today" 5) fit within the English.

| English | Taigi | Tâi-lô (for the checker; not shown in the UI) | tl | ceb |
|---|---|---|---|---|
| Today | **今仔日** | kin-á-ji̍t | Ngayon | Karon |
| Lessons | **課** | khò | Aralin | Leksyon |
| Practice | **練習** | liān-si̍p | Pagsasanay | Praktis |
| Review | **複習** | ho̍k-si̍p | Review | Review |
| Progress | **進度** | tsìn-tōo | Pag-unlad | Pag-uswag |
| Read (advanced) | 讀 | tha̍k | Basa | Basa |
| Feedback | 意見 | ì-kiàn | Feedback | Feedback |

The Tâi-lô above is from the author's knowledge, not generated by `respell.js` (most of these words are not in its lexicon). Check it before anyone quotes it.

**Core terms**

| English | Taigi | English | Taigi |
|---|---|---|---|
| Korean (language) | 韓語 | Hangul | 韓文字 |
| romanization | 羅馬字 | English | 英語 |
| flashcard | 字卡 | card | 卡 (counted 張) |
| deck | 牌組 (counted 組) | lesson / Lessons tab | 課 |
| course / courses | 課程 (never used for lessons) | tiles (answer tiles) | 字牌 (字塊 is only the Hangul block) |
| practice | 練習 | review | 複習 |
| streak | 連續紀錄; short labels 連續 (`day streak` = 工連續學習) | streak shield | 連續保護盾 |
| due | 愛複習 | All due | 攏複習 |
| session | 學習 | drill | 訓練 |
| quiz / exam / test | 小考 / 考試 / 測驗 | blitz | 快答 |
| Got it / Again (SRS) | 會記得 / 閣一擺 | Correct! / Not quite | 著矣！ / 猶毋著 |
| new / learning / learned / mastered | 新 / 咧學 / 學過 / 熟矣 | box | 箱 (第 3 箱) |
| Weak spots / Missed / Hardest | 弱點 / 毋著的 / 上難的卡 | bury / suspend / leech | 明仔載才看 / 暫停 / 蜈蜞卡 |
| interval / retention | 間隔 / 記持 | hint / note / example / dialogue | 提示 / 筆記 / 例句 / 對話 |
| pronunciation / meaning / word / phrase | 發音 / 意思 / 詞 / 句 | My phrases | 我的短句 |
| Browse | 看列表 | Search | 揣 |
| pass / passed / 80% to pass | 過關 / 過關 / 80% 過關 | round (`pass n/3`) | 輪 (第 1/3 輪) |
| Level / Lv | 等級 / Lv | daily goal | 逐工的目標 |
| Sign in / out | 登入 / 登出 | sync / backup | 同步 / 備份 |
| export / import | 匯出 / 匯入 | e-mail | 電子批 |
| Do you know this? Yes / Not sure | 這張你捌無？ 我捌 / 無把握 | (same words in the calibration line) | 「我捌」「無把握」 |

**Level titles** (in app order of keys): 新手 Beginner · 發穎 Sprout · 學生 Student · 厚話仙 Talker (수다쟁이 "chatterbox") · 旅人 Traveler · 在地人 Local · 學長 Senior (선배) · 高手 Pro · 師傅 Master · 先生 Sensei. 先生 *sian-sinn* is Taigi for "teacher", so it renders Sensei exactly.

**Other recurring words**
- 主色 (accent colour);
- 暱稱 (nickname);
- 證書 (certificate), 徽章 (badge);
- 提醒 (reminder);
- 計畫 (study plan);
- 角色扮演 (role-play), 造句 (sentence builder), 聽力 (listening), 聽寫 (dictation), 數字 (numbers);
- 語體 (Register drill);
- days of the week 日 一 二 三 四 五 六 (as Taiwan calendars print them; spoken 禮拜日, 拜一 …);
- greetings 你好 · 早安 · 午安 · 暗安 · 暗矣，辛苦矣.

**Possible overflow (hand check; display width more than the English).** All are in normal-width buttons or chips:
- `due` / `Due` 愛複習 (+3);
- 🐞 錯誤, ⏭ 明仔載, `next` / `Next` 下一个, `new 5` / `New 5` 新 5 張, `native` 母語速度, `Reload` 重新載入, `Go` 來去 (+2 each);
- 30 more labels at +1, among them the `Today` tab 今仔日, `2 min` 2 分鐘 and `Yes` 我捌.

**Button names the lesson prose may cite:** 會記得 (Got it), 閣一擺 (Again), 檢查 (Check), 看列表 (Browse), 我的短句 (My phrases), 攏複習 (All due), 跳過 (Skip), 繼續 (Continue), 轉去 (Back).

## 4. Practical note: Mandarin literacy (read this before changing the register)

**Most Taiwanese speakers read Mandarin in Traditional Chinese far more fluently than written Taigi.** Taigi is mostly spoken, and few people learned to read the MOE characters at school.
- Characters such as 毋, 佇, 袂, 揣, 賰, 囥, 干焦 and 蜈蜞 are readable once the reader voices them in Taigi, but they are slower to read than Mandarin, and a few may stop a reader.
- So every label is kept short, and app nouns use the familiar Taiwan forms (設定, 帳號, 登入, 匯出). Taigi-only words are used mainly as function words, and in places where the context makes them obvious.
- **If testers find the interface hard to read,** the first things to swap are the rarer Taigi words: 揣 → 搜尋, 賰 → 剩, 干焦 → 只有, 電子批 → Email, 蜈蜞卡 → 難記的卡. Change them here in `ui.json`; the course must not override them per key.

## 5. 30 strings to check first (for a Taigi speaker)

Answer "OK" or write the natural version.

| # | English key | Taigi now | Doubt |
|---|---|---|---|
| 1 | Today (tab) | 今仔日 | 3 characters. Natural as a tab, or would 今仔 or 今日 read better? |
| 2 | Lessons / Progress (tabs) | 課 / 進度 | Is 課 alone clear as a tab? (課程 is kept for "course".) Is there a Taigi word for 進度? |
| 3 | Email (everywhere) | 電子批 | Real Taigi, but Taiwan apps write "Email" or 電子郵件. Which one should it be? |
| 4 | Search | 揣 | MOE *tshuē*. Clear as a one-character button, or is 搜尋 better? |
| 5 | Got it (SRS button) | 會記得 | Or 知影矣, 我會曉? |
| 6 | Again (SRS button) | 閣一擺 | OK as a button? |
| 7 | Due / {n} due | 愛複習 / {1} 張愛複習 | Natural for "waiting for review"? |
| 8 | All due | ⏰ 攏複習 | OK? |
| 9 | Correct! / Not quite. | 著矣！ / 猶毋著。 | Natural feedback? Or 差一屑仔? |
| 10 | Do you know this one? / Yes / Not sure | 這張你捌無？ / 我捌 / 無把握 | 捌 *bat* (know) on a flashcard: natural? |
| 11 | learning / mastered | 咧學 / 熟矣 | OK as SRS state labels? |
| 12 | bury / Buried until tomorrow | ⏭ 明仔載 / 明仔載才閣出現。 | Clear? |
| 13 | leech | 蜈蜞卡 | A literal 거머리 calque. Funny or confusing? |
| 14 | Weak spots / Missed / Hardest cards | 弱點 / 毋著的 / 上難的卡 | 上 *siōng* for "most": natural here? |
| 15 | Recall en→한 / Read 한→en | 回想 台→한 / 讀 한→台 | Is 台 understood as "the Taigi side"? |
| 16 | Type (mode) | 拍字 | OK (MOE *phah-jī*)? |
| 17 | Say it / shadow ×3 | 講看覓 / 綴咧講 ×3 | Natural? |
| 18 | remaining ({n} left) | 賰 {1} 張 | 賰 *tshun*: readable for most users? |
| 19 | only (this device only) | 干焦這台裝置 | Or 只有? |
| 20 | Good morning / afternoon / evening | 早安 / 午安 / 暗安 | 𠢕早 was avoided for font reasons. Is 早安 acceptable in Taigi? Is 午安? |
| 21 | Trip to Korea | 去韓國旅行 | 𨑨迌 was avoided (non-BMP). OK? |
| 22 | it's late, good work / Working late — nice job | 暗矣，辛苦矣 / 暗矣猶咧拍拚 — 讚 | Natural? Is 讚 too slangy? |
| 23 | You've got this! / You're doing great / Take your time | 你做會到！ / 你做甲真好 / 慢慢仔來 | Natural encouragement? |
| 24 | Level titles | 新手 · 發穎 · 學生 · 厚話仙 · 旅人 · 在地人 · 學長 · 高手 · 師傅 · 先生 | Is 厚話仙 fun or rude? Is 發穎 readable? Is 先生 OK for Sensei? |
| 25 | Polite ↔ casual | 敬語 ↔ 半語 | Do Taiwan learners of Korean know 半語? |
| 26 | Social (#social, deck group) | 交陪 | Natural for "social life"? |
| 27 | Blur romanization in Browse | 看列表的時，羅馬字霧霧 | 霧霧 for "blurred": OK? |
| 28 | Streak at risk | 連續紀錄危險矣 | Too dramatic? |
| 29 | I get by / Some basics / Just starting | 會使應付 / 會曉一寡基礎 / 拄開始 | Natural level answers? |
| 30 | Hand-tuned for speakers of your language | 特別為講你的語言的人調整 | Natural? Shorter? |

Also worth a glance:
- Taigi words not in `tools/target/nan/lexicon.txt` (from the author's knowledge, not from an opened MOE page): 揣, 賰, 拍字, 拍開, 拍拚, 霧霧, 蜈蜞, 厚話仙, 發穎, 看覓, 干焦, 紲落來, 順紲, 逝 (row), 規个, 鬥, 提掉, 提著, 袂成, 無把握, 攏總, 做伙, 創啥, 四界, 交陪, 穩穩仔, 一寡, 欠, 後擺, 進前, 譬如, 公家, 查某, 查埔, 記持, 偌久.
- The completion marker 矣 is used 90 times: is it overused in toasts?
- `一逝一張` (one per line) in the bulk-import hint.

## 6. For the lead (src/app.html, build, tests; I changed none of these)

**Works already** (checked by read-only grep):
- `preLang()` now splits on `-` / `_`. `build.sh` and `tools/site/lazy.js` no longer use `slice(0,2)`. So the 3-letter-code bugs in `ceb/NOTES.md` §5 do not hit `nan`.
- `LANGS.nan` exists: `{name:'Taiwanese Hokkien',self:'Tâi-gí',flag:'🇹🇼',ko:'대만어',t:1}`. In the picker's step 1 (around line 1385), `t:1` keeps a language out of the native "coming soon" list, so it is shown as a native language only once a course with `native:'nan'` is live.
- `gen.py` writes `LANGAPP_PACKS.i18n.nan`, and `validate.js nan` passes.
- `nan` is not in `RTL_LANGS`, which is correct.

**Must change:**

1. **Taiwanese devices never get this pack.** They report `zh-TW` (or `zh-Hant-TW`), and `preLang()` turns that into `zh`, the **Simplified** Chinese pack. No browser reports `nan`.
   - So a Taiwanese user gets Simplified Chinese unless they pick 台語 in the native-language step by hand.
   - At the least, `zh-TW` / `zh-Hant` should not silently map to Simplified. Whether it should map to `nan` is a product decision (see the report and §4).
2. **Language names leak English.** `new Intl.DisplayNames(['nan'])` has no data. Observed in Node (full ICU): ko → "Korean", en → "English", nan → "Min Nan Chinese", es → "Spanish". That leaks English into `type it in {x}`, `Learn {x}, 5 minutes a day`, `{x} progress` and the course lists.
   - The same per-language override map the ceb and tl notes propose fixes it: **ko 韓語 · en 英語 · nan 台語 · zh 華語 · ja 日語 · es 西班牙語 · tl 他加祿語 · ceb 宿霧語**.
   - The last four are from recall and need checking. All other codes: the English name.
   - Don't use the `zh-Hant-TW` Intl names (ko → 韓文, nan → 閩南語): 閩南語 is not what speakers call the language in this app.
3. **`LANGS.nan.self`** is `'Tâi-gí'`. Many Taigi speakers do not read Tâi-lô, so suggest `self:'台語 (Tâi-gí)'`.
4. **Fonts and `lang`.** `hLang('nan')` returns `nan`, so the interface gets `<html lang="nan">`.
   - The CJK font stack exists only for `html[lang^=zh]` (Simplified first) and for `body.tg-nan` (a Taigi *target* course).
   - With `lang="nan"` and no rule, browsers may fall back to Simplified or Japanese glyph shapes for the interface.
   - Suggest `hLang('nan')` → `'nan-Hant-TW'`, plus an `html[lang^=nan]` rule with the TC stack already written for `body.tg-nan`.
5. **No `nan-ko` course exists yet** (`tools/halves/native/` has no `nan`). With `t:1` and no live `native:'nan'` course, step 1 of the picker does not show 台語 at all, not even as "coming soon". This pack is ready for when the course exists.

**Tell the halves agent** (for a future `nan-ko`):
- The tabs on screen are **今仔日, 課, 練習, 複習, 進度**. Use the button names in §3 too.
- Write the Taigi in MOE characters, as `en-nan.md` §2.2 says.

**Course UI overrides.** Whatever goes into a future `tools/halves/native/nan/ko/ui.json` becomes `COURSE.UI` and overrides this pack key by key in `setI18n()`. Keep the two consistent, and prefer fixing wording here.

**Pipeline notes.**
- `road.py` was not used (its known breakage is in the ceb and tl notes). `roadmap.json` was written directly in road.py's output shape, from tl's skeleton: the same 1,822 strings, every `t` blanked, then the 40 strings of the `ko` roadmap filled. `gen.py` emits `road 40`.
- `new_lang.py nan --out <scratch>` made the skeleton; it accepts 3-letter codes.
- `validate.js` decides the script from `tools/content/nan/profile.json` (`nativeScript`); there is none, so it guesses "distinct" from the text. That setting only switches the identical-to-English check. The overflow check is character-based for every language.

**Build-time lint used (scratch script, not in the repo).** It checks:
- the Hangul runs, emoji and digits are the same as the key's;
- slot sets `{1}..{k}`;
- edge spaces, and fragment edge punctuation (ASCII or its full-width twin);
- a Mandarin-marker blacklist (不 在 要 吃 喝 他 她 很 沒有 給 個 東西 們 嗎 呢 吧 了 沒 還 說 誰 什麼 怎麼 哪), with the compound whitelist in §1;
- no Simplified characters (sample set) and no characters outside the BMP;
- no Latin outside the §2 list;
- no ASCII punctuation touching Han.

It does **not** check naturalness, word choice or Taigi grammar; those need the native check (§5).
