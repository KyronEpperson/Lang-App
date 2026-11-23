# Cantonese (yue, Hong Kong) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: 79 of 1,822 strings are filled.
  - The 39 strings of the **English** roadmap (1 variant, 1 basis, 4 stages, 33 lesson titles) serve the course yue-en.
  - The 40 strings of the Korean roadmap are kept for a future yue-ko course. They only show on a Korean roadmap.
  - The other strings are empty, so they fall back to English.
- `written-chinese/`: an independent standard-written-Chinese dictionary that came with yue-en. It is **reference only** and is not built. Its better term choices were merged into this file on 2026-11-23 (§6).
- The generated pack is `packs/i18n-yue.js` (`exact 784 patterns 275 road 79`).

Build: `python3 tools/i18n/gen.py yue && node tools/i18n/validate.js yue`. It passes with **0 warnings**. Then `python3 tools/content/link_roadmap.py --check yue` should report 33 links and none missing. That check reads `packs/roadmaps.js` and `packs/course-yue-en.js`, not this folder.
- No label is long enough to trigger the overflow warning, because Chinese labels are shorter than the English ones.
- The "identical to English" check is off, because the script is distinct. Seven strings are still the same as the key on purpose: `Enter`, `XP`, `A−`, `A+`, `you@example.com`, `DELETE`, `Lang App` (see §2).

**Which course this serves.** The course this interface serves is **yue-en** (English for Cantonese speakers, `packs/course-yue-en.js`). The owner ruled on 2026-11-23 that everything for Cantonese speakers is in **written Cantonese**, so this file is the base and stays in written Cantonese.
- As the key contexts ask for `<lang>-en` courses, every legacy key that says Korean, Hangul or romanization is worded for **English**: *英文*, *音標*, *讀音*. bn and zh do the same.
- Hangul is gone from all values. 🇰🇷 became 🇺🇸. Korean grammar tokens (요, 반말, 지, 다 …) were replaced with English examples or plain descriptions, as in the zh and bn packs.
- The only key that still says 韓文 is `Korean`, the language name itself.
- A Korean course for Cantonese speakers (yue-ko) is scaffolded at `tools/halves/native/yue/ko/`, and its `ui.json` is still empty. If it ships, that course's UI file must override the English-worded keys back to Korean (韓文, 羅馬拼音, 禮貌 ↔ 半語 …). The Korean-worded values from before 2026-11-23 are no longer in the repo (there is no git history); rewrite them with the terms in §3.

Author: **not a native speaker** of Cantonese. Everything here needs a Hong Kong Cantonese speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** Hong Kong written Cantonese, **Traditional characters with Hong Kong forms and vocabulary** (嘅, 咗, 唔, 係, 喺, 冇, 啲, 嚟, 睇, 搵, 攞, 畀). It is not Standard Written Chinese. It is everyday and plain, not slang-heavy. See `docs/briefs/yue-en-cantonese-rewrite.md`, section "Register".
  - Short labels and settings use the standard HK app words (設定, 登入, 帳戶, 電郵, 搜尋, 匯出, 儲存, 私隱, 檔案, 裝置, 資料).
  - Sentences use spoken grammar: 你嘅進度, 未有意見, 唔使密碼, 搵唔到, 再按一次.
  - Final particles are rare. 㗎, 啦 and 喇 appear only where the English is warm or casual (你一定得㗎！, 做第一個啦, 冇新卡喇, 咁夜喇). There is no 囉, no 咩 as a particle, and no 啩.
- **Address:** informal **你** throughout. 您 is not used. There is no 請 in instructions; a request is a plain command (揀一個卡組, 先打答案), and warnings say 唔好… (唔好貼密碼).
- **Mandarin forms avoided:**
  - 今日, 聽日, 尋日 (not 今天, 明天, 昨天);
  - 日 for days (`{1} 日`, not 天) and 個星期 for weeks;
  - 冇, 喺, 嘅, 乜 / 咩, 點 / 點樣, 邊個, 搵, 睇, 識 (not 沒有, 在, 的, 什麼, 怎麼, 哪個, 找, 看, 會);
  - **畀** for "give" (not 俾).
- **Tap / press = 按.** It is used for every tap, press and click: 按一下翻面, 再按一次確認, 按右鍵 (right-click). Swipe = **滑** (向右滑, 滑動作答). Type = **打** (打字, 用英文打, 打出讀音). Formal 輸入 is kept only where the screen is a form field (輸入你嘅電郵, 輸入 DELETE 確認). 撳 is no longer used (reviewer's pick, 2026-11-23).
- **Typography:**
  - Full-width Chinese punctuation: ，。！？：；（）「」、…….
  - **Quotes are 「」**, also for screen and button names inside text: 「進度」, 「我嘅短句」, 「記住咗」.
  - **A half-width space between Chinese and any digit, Latin letter or slot**, on both sides: `{1} 張卡`, `第 3 盒`, `每日 5 分鐘`, `第 {1} 級`. There is no space next to full-width punctuation.
  - **Exception:** the language-name slot `{x}` from `langName()` is CJK, so it takes no space: `用{1}打`, `學{1}，每日 5 分鐘`.
  - Fragments keep the English edge punctuation and spacing (`翻面 ·`, `· 只限呢部裝置`). A fragment that starts with ":" uses full-width `：`.
- **Counts:** a numeral and a measure word, with the same text for singular and plural:
  - `{1} 張卡` (cards), `{1} 個卡組` (decks), `{1} 課` (lessons), `{1} 題`, `{1} 次`;
  - `{1} 日`, `{1} 個星期`, `{1} 分鐘`, `{1} 秒`, `{1} 分` (points);
  - `第 {1} 盒`, `第 {1}/3 輪`, **`第 {1} 級`** (levels).
- **Grammar terms** are the HK school terms the course uses (`tools/content/yue/REVIEW.md` §4.1): 動詞, 名詞, 量詞, 疑問詞, 詞幹, 詞尾, 原形 (dictionary form), 現在式 / 過去式, 不規則, 句式 (pattern), 文法 (grammar), 字尾輔音 (final consonant). "Polite ↔ casual" (register drill) is **正式 ↔ 隨意**.
- **Quiz mode words** are used the same everywhere: Read = 閱讀, Listen = 聆聽, Recall = 回想, Type = 打字, Mixed and Mix = 混合, Shuffle = 洗牌, Merge = 合併.
- **Direction labels** use **英** for English and **中** for the learner's side: 閱讀 英→中, 回想 中→英, 聆聽 🔊→中. "Try the English meaning" = 試吓用中文意思搜尋. "A bit" after a verb is written 吓 (睇吓, 試吓, 檢查吓) in both this file and the course (2026-11-23).

## 2. Kept in Latin script (closed list)

Everything else is in Chinese characters. The common HK chat loans "App", "bug" and "check" are **not** used; the dictionary writes 程式, 錯誤 / 程式錯誤 and 檢查.

- **Product and service names:** Lang App, Supabase, Vercel Web Analytics.
- **Keys and things typed:** Enter, Esc, Ctrl+K, DELETE (never translated, because the engine compares the typed text), you@example.com, the example `ga` (type the sound), and `(han)` at the start of the spelling note (it continues a sample the app puts in front).
- **English examples in the verb tools:** go, eat, do, drink, see, hear, help, live, know; at (pattern search).
- **File formats and units:** CSV, TSV, PNG, KB, 3D.
- **Game tokens:** XP, Lv.
- **Glyph buttons:** A−, A+, Aa.
- **Language name in a toggle:** Language (in 語言 · Language).
- **One web term:** Cookie, which is how HK privacy notices write it.

## 3. Glossary of fixed terms (for the course writers)

One term per concept, in every key and pattern.

### Tab bar (5 tabs + extras)

| English | Cantonese |
|---|---|
| Today | **今日** |
| Lessons | **課堂** |
| Practice | **練習** |
| Review | **溫習** |
| Progress | **進度** |
| Read (advanced) | 閱讀 |
| Feedback | 意見 |

- *課堂* is used for the Lessons tab so that **課程** can mean "course" (Course, Switch course, Erase this course's progress).
- *溫習* (not 複習) is the HK school word for revising.
- References inside text use the same names, for example *進度 → 備份 → 分享檔案*.

### Core terms

| Idea | Term |
|---|---|
| English (the language learned) | **英文** |
| Korean (language name only) | 韓文 |
| pronunciation / romanization (the reading aid, IPA) | **音標**: Aa 音標：開, 練習時顯示音標, 隱藏音標 |
| the sound you type (reading drill) | 讀音 |
| flashcard / card | **字卡** / **卡** (`{1} 張卡`) |
| deck | **卡組** |
| lesson | **課** (第 3 課, `{1} 課`); the lesson screen = 課堂 |
| lesson check / quick check | **課後小測** (呢課 3 題小測) |
| course | **課程** |
| practice / drill | **練習** / **操練** |
| review (SRS) | **溫習** |
| due | **要溫習**: `{1} 張要溫習`, ⏰ 全部要溫習; "Review due cards" = 溫習到期嘅卡 |
| session | 一節學習 / 每日學習 |
| streak | **連續日數** (label; also "day streak"); the thing that can break = **連續紀錄**; streak shield = **連續護盾**; share card = 連續紀錄分享卡 |
| typing streak (correct in a row) | 連續答啱 (a different concept) |
| quiz / exam / test everything | **小測** / **考試** / **全部測一次** |
| blitz | **極速挑戰** |
| weak spots / missed / hardest | **弱項** / 答錯 / 最難嘅卡 |
| Got it / Again (SRS buttons) | **記住咗** / **再嚟** |
| new / learning / learned / mastered | 新卡 / 學緊 / 學咗 / **已掌握** |
| box | 卡盒 (`第 {1} 盒`) |
| bury / suspend / leech | 聽日先 (⏭ 聽日先, 已推到聽日) / 暫停 / 頑固卡 |
| level / XP | 等級 (heading); numbered **第 {1} 級**; Lv and XP kept |
| badge / certificate | 徽章 / **結業證書** |
| combo / personal best | 連擊 / 個人最佳 |
| hint / note / example | 提示 / 備註 / 例句 |
| My phrases / phrase | **我嘅短句** / 短句 |
| word (vocabulary) | 生字 |
| idiom | **習語** |
| grammar / pattern / grammar index | 文法 / 句式 / 文法索引 |
| verb conjugator / conjugate | 動詞變化 / 變化 |
| polite ↔ casual | **正式 ↔ 隨意** |
| shadow (repeat ×3) | 跟讀 |
| role-play / sentence builder / dictation | 角色扮演 / 砌句 / 默書 |
| flip / tap / swipe / skip | **翻面** / **按** / **滑** / **略過** |
| Undo / restore / remove | **復原** / 還原 / **移除** |
| Finish / Done | 完成 |
| Not now / Not quite | 遲啲先 / 差少少 |
| Heart (feedback reaction) | 讚好 |
| sign in / sign out / account / email | 登入 / 登出 / 帳戶 / 電郵 |
| sync / backup / export / import | 同步 / 備份 / 匯出 / 匯入 |
| settings / privacy / feedback board | 設定 / 私隱 / 意見區 |
| nickname | 暱稱 |
| app | 程式 |

### Level titles

They match `tools/content/yue/meta.js` `TITLES` and `REVIEW.md` §4.8.

The 7-step ladder the app uses:

| Level | Title |
|---|---|
| Beginner | **新手** |
| Student | **學員** |
| Talker | **健談** |
| Traveler | **旅行者** |
| Local | **本地通** |
| Pro | **高手** |
| Master | **大師** |

- Three legacy keys outside this ladder still need a value: Sprout 萌芽, Senior 前輩, Sensei 宗師.
- Not used: 入門, 話匣子, 傾偈達人, 學生, 旅人, 地膽.

### Other recurring labels

- **Deck groups / tags:** 日常, 社交; #基礎 #旅行 #社交 #工作 #影視 #技能.
- **Goals:** 去外地旅行, 識朋友同拍拖, 劇集同音樂, 返工同讀書.
- **Greetings:** 早晨, 你好 (afternoon), 你好 (evening). Late at night: 咁夜喇，辛苦晒. 午安 / 晚上好 were replaced on 2026-11-23 (stiff; Hong Kong people say 你好).
- **Day abbreviations:** 日 一 二 三 四 五 六.
- **Button names the lesson prose may cite:**
  - 記住咗 (Got it), 再嚟 (Again), 檢查 (Check), 略過 (Skip);
  - 📖 瀏覽 (Browse), 我嘅短句 (My phrases), ⏰ 全部要溫習 (All due), 睇規則 (Show the rule);
  - Aa 音標：開 / 關, 練習時顯示音標.

### Roadmap (English, yue-en)

- The pronunciation title is **發音陷阱：N / L、R / W / L、TH、字尾輔音、V / W**. It names Cantonese speakers' real difficulties (as the `pron` lesson does), not the key's "R/L, F/P", which was written for Korean speakers.
- The basis line "CEFR A1-B1 order, adjusted for Korean speakers" = **CEFR A1–B1 嘅學習次序** (the Korean part dropped, because it is false here). The app does not show it to yue learners anyway: `app.html` shows `basisAny` ("CEFR A1–B1") to every native language except ko and en.
- Grammar terms follow §1: 眾數, 第三身單數, 現在式, 現在進行式, 現在完成式, 可數名詞, 冠詞, 介詞, 情態助動詞, 條件句, 關係子句, 被動式, 間接引述, 串字.

## 4. Strings to check first (for a Hong Kong Cantonese speaker)

Answer "OK" or write the natural version.

| # | English key | Cantonese now | Doubt |
|---|---|---|---|
| 1 | Tap / press (everywhere) | 按 (按一下翻面, 再按一次確認) | Chosen over 撳 by a reviewer. Natural in written Cantonese next to 嘅 / 咗? |
| 2 | Swipe | 滑 (向右滑, 滑動作答) | Replaced 掃 (掃一掃 suggests scanning a QR code). OK? |
| 3 | Due | 要溫習 / {1} 張要溫習 / ⏰ 全部要溫習 | Natural for "waiting for review"? 待溫習 was rejected as 書面語. |
| 4 | Streak | 連續日數 / 連續紀錄 / 連續護盾 | Clear without 打卡? |
| 5 | Got it | 記住咗 | OK as an SRS button and inside 「記住咗」? |
| 6 | blitz | 極速挑戰 | OK, or too long for a chip? |
| 7 | Polite ↔ casual | 正式 ↔ 隨意 | Clear for an English register drill? |
| 8 | Pronunciation / romanization | 音標 (Aa 音標：開) | Two keys give the same text; harmless. Is 音標 clear for IPA? |
| 9 | Lessons (tab) | 課堂 | Clear as a tab? (課程 = course.) |
| 10 | Quick check | 課後小測 | OK? |
| 11 | Level titles | 新手, 學員, 健談, 旅行者, 本地通, 高手, 大師 | Natural as a ladder? |
| 12 | Read / Recall / Listen directions | 閱讀 英→中, 回想 中→英, 聆聽 🔊→中 | 中 or 粵 for a written-Cantonese meaning side? |
| 13 | Trip to Korea (goal) | 去外地旅行 | Natural? |
| 14 | Can you already read Hangul? | 你已經識讀英文未？ | Natural? |
| 15 | Hand-tuned for speakers of your language | 專為講你母語嘅人編寫 | Natural? |
| 16 | Certificate | 結業證書 | OK for an app certificate? |
| 17 | Skip | 略過 | Or 跳過 (more spoken)? |
| 18 | Not now | 遲啲先 | OK on a sign-in prompt? |
| 19 | Heart | 讚好 | OK as a button label? |
| 20 | How a block is built (English spelling note) | 英文字點樣串 | Natural? |
| 21 | bury / Buried until tomorrow | ⏭ 聽日先 / 已推到聽日。 | Clear? |
| 22 | leech | 頑固卡 | OK? |
| 23 | Sentence builder / Put the words in order | 砌句 / 將啲字排好次序 | Natural? |
| 24 | Number dictation | 數字默書 | OK? |
| 25 | You've got this! | 你一定得㗎！ | Natural encouragement? |
| 26 | Good afternoon / evening | 你好 / 你好 (was 午安 / 晚上好, changed 2026-11-23) | OK, or is there a better time-of-day greeting? |
| 27 | Something went wrong: | 出咗問題： | Or 出錯：? |

Also worth a glance: 傳送 vs 發送 (send); 字塊 (tiles); 信心校準 (calibration); 穩陣。 (Steady.); 搞掂 (done); 整卡 (Make card); 講出嚟 (Say it); 打出讀音 (reading drill).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

- `LANGS.yue` exists: `{name:'Cantonese',self:'廣東話',flag:'🇭🇰',ko:'광둥어'}`. `langName(code,'yue')` falls back to `Intl.DisplayNames(['yue'])`, which gives Chinese names (en 英文, ko 韓文). Some are Taiwan usage (it 義大利文, hi 北印度文). An optional `LN_X.yue={it:'意大利文',hi:'印地文'}` would fix them for HK.
- **HK browsers report `zh-HK`, not `yue`.** `preLang()` and the `build.sh` loader turn `zh-HK` into `zh`, so a Hong Kong user may get the Simplified Mandarin pack before picking a course. Suggested fix in both places, after the split: `if(b==='zh'&&/^zh[-_](hk|mo|hant[-_]hk)/i.test(navigator.language)) b='yue';`.
- **`hLang('yue')` returns `yue`.** A bare `yue` may not give HK glyph forms in every browser [inference; not tested]. Suggestion: `l==='yue'?'yue-Hant-HK'`.
- **Course UI overrides.** Whatever goes into a course's UI file (`tools/content/yue/ui.json` for yue-en, `tools/halves/native/yue/ko/ui.json` for yue-ko) overrides this pack key by key. yue-en has none, and needs none.
- `road.py` is still broken (see `tools/i18n/tl/NOTES.md`). `roadmap.json` is written directly in road.py's output shape.

## 6. Merge with `written-chinese/` (2026-11-23)

The two `ui.json` files were compared key by key (1,058 keys). This file stays the base. Where the written-Chinese file had the better **term** (not register), the term was adopted and written in Cantonese. 170 values changed (138 exact, 32 patterns).

- **English-course rewording (73 values):** Korean → 英文, romanization / pronunciation hint → 音標, Hangul tools → English examples, 禮貌 ↔ 半語 → 正式 ↔ 隨意, 四字成語 → 習語, 🇰🇷 → 🇺🇸, and Korean interjections in mixed keys → Cantonese.
- **Reviewer-picked terms:**
  - Streak 連續打卡 → 連續日數 / 連續紀錄 / 連續護盾;
  - Due 要溫 → 要溫習;
  - Got it 記得 → 記住咗;
  - Level 等級 N → 第 N 級;
  - Skip 跳過 → 略過;
  - blitz 快閃 → 極速挑戰;
  - Heart 讚 → 讚好;
  - Tap 撳 → 按.
- **Kept from the base on purpose:** 課堂, 移除, 復原, 小測, 完成, 洗牌, 打字, 你, 遲啲先, 差少少, 再嚟, 字卡 / 卡, 砌句, 角色扮演, 數字默書, 全部測一次.
- **My own consistency picks:**
  - 翻轉 → 翻面;
  - 掃 → 滑;
  - 右撳 → 按右鍵;
  - 課堂測驗 → 課後小測;
  - 證書 / 完成證書 → 結業證書;
  - 成語 → 習語;
  - 俾 → 畀 (brief);
  - level titles to meta.js;
  - "Hand-tuned …" → 專為講你母語嘅人編寫.
- **Roadmap:** the 39 English-roadmap strings were filled in written Cantonese, using the written-Chinese file's structure and wording where it was right. The basis and pronunciation lines were corrected.
