# Cantonese (yue, Hong Kong) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English.
- The generated pack is `packs/i18n-yue.js`.

Build: `python3 tools/i18n/gen.py yue && node tools/i18n/validate.js yue`. It passes with **0 warnings**:
- No label is long enough to trigger the overflow warning. Chinese labels are shorter than the English ones.
- The "identical to English" check is off, because the script is distinct (`script distinct` in the validator line). Seven strings are still the same as the key on purpose: `Enter`, `XP`, `A−`, `A+`, `you@example.com`, `DELETE`, `Lang App` (see §2).

The only course this interface serves is **yue-ko** (Korean for Cantonese speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *韓文*, *韓文字母*, *羅馬拼音*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*英文*); they only show in an English course, which Cantonese speakers do not have. The zh dictionary rewrote these keys for English (英语, 音标), so it was **not** used as the model for them. tl and ceb were.

Author: **not a native speaker** of Cantonese. Everything here needs a Hong Kong Cantonese speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** Hong Kong Cantonese, **Traditional characters with Hong Kong forms and vocabulary**. It is written Cantonese as HK apps and chats use it (嘅, 咗, 唔, 係, 喺, 冇, 啲, 嚟, 睇, 撳, 搵, 攞), not Standard Written Chinese. It is everyday and plain, not slang-heavy.
  - Short labels and settings use the standard HK app words (設定, 登入, 帳戶, 電郵, 搜尋, 匯出, 儲存, 私隱, 檔案, 裝置, 資料). These are also what HK apps show.
  - Sentences use spoken grammar: 你嘅進度, 未有意見, 唔使密碼, 搵唔到, 再撳一次.
  - Final particles are rare: 㗎, 啦 and 喇 appear only where the English is warm or casual (你一定得㗎！, 做第一個啦, 冇新卡喇, 咁夜喇). There is no 囉, 咩 as a particle, or 啩.
- **Address:** informal **你** throughout. 您 is not used (it is not spoken Cantonese and reads stiff in HK apps). No 請 in instructions. A request is a plain command (揀一個卡組, 先打答案). Warnings say 唔好… (唔好貼密碼).
- **Mandarin forms avoided:** 今日 (not 今天), 聽日 (not 明天), 尋日, 日 for days (`{1} 日`, not 天), 個星期 for weeks, 冇 (not 沒有), 喺 (not 在), 嘅 (not 的), 乜 / 咩 (not 什麼), 點 / 點樣 (not 怎麼), 邊個 (not 哪個), 搵 (not 找), 睇 (not 看), 俾 (give), 識 (know how).
- **Tap / press = 撳.** This is the everyday HK word, and it is used for every tap, press and click: 撳一下翻轉, 再撳一次確認, 右撳 (right-click). Swipe = 掃 (向右掃, 掃一掃作答). Type = 打 (打字, 用韓文字母打, 打出羅馬拼音). Formal 輸入 is kept only where the screen is a form field (輸入你嘅電郵, 輸入 DELETE 確認). Whether 撳 is too colloquial for an app is check item 1 in §4.
- **Typography:**
  - Full-width Chinese punctuation: ，。！？：；（）「」、…….
  - **Quotes are 「」** (HK usage), also for screen names inside text: 「進度」, 「我嘅短句」.
  - **A half-width space between Chinese and any digit, Latin letter, Hangul or slot**, on both sides: `{1} 張卡`, `第 3 盒`, `每日 5 分鐘`, `用 Vercel Web Analytics`. There is no space next to full-width punctuation. This is the same rule as the zh pack and `docs/profiles/zh-ko.md` §3.1.
  - **Exception:** the language-name slot `{x}` from `langName()` is CJK, so it takes no space: `用{1}打`, `學{1}，每日 5 分鐘`.
  - Fragments keep the English edge punctuation and spacing (`翻轉 ·`, `· 只限呢部裝置`). A fragment that starts with ":" uses full-width `：`, as zh does.
  - Hangul runs, emoji and digits are identical to the key (checked by the scratch lint, §5).
- **Counts:** a numeral + measure word, with the same text for singular and plural: `{1} 張卡` (cards), `{1} 個卡組` (decks), `{1} 日`, `{1} 個星期`, `{1} 課` (lessons), `{1} 次`, `{1} 題`, `{1} 分鐘`, `{1} 秒`, `{1} 分` (points), `第 {1} 盒`, `第 {1}/3 輪`.
- **Grammar terms:** the Chinese terms that Korean textbooks use (`docs/profiles/zh-ko.md` §3.4), converted to Traditional and to HK usage: 助詞, 詞尾, 詞幹, 原形 (dictionary form; zh-ko has 基本形, but HK Korean classes say 原形 [inference]), 動詞, 名詞, 量詞, 疑問詞, 元音 / 輔音, 收音, 音節塊, 音變, 現在式 / 過去式 / 將來式 (HK says 式, not 時), 不規則, 句式 (pattern), 文法 (grammar; HK says 文法, not 語法), 禮貌 (polite, the 요體), 半語 (casual, 반말), 尊敬 (honorific), 敬語 (umbrella). "Polite ↔ casual" is always **禮貌 ↔ 半語**.
- **Quiz mode words** are used the same everywhere: Read = 閱讀, Listen = 聆聽, Recall = 回想, Type = 打字, Mixed and Mix = 混合. Shuffle = 洗牌, Merge = 合併.
- **Direction labels** (`Read 한→en`, `Recall en→한`, `Listen 🔊→en`) use **粵** for the learner's side: 閱讀 한→粵, 回想 粵→한, 聆聽 🔊→粵.

## 2. Kept in Latin script (closed list)

Everything else is in Chinese characters. The brief allows Latin only for brand names, romanization and things users type. So the common HK chat loans "App", "bug" and "check" are **not** used; the dictionary writes 程式, 程式錯誤 / 錯誤 and 檢查.

- **Product and service names:** Lang App, Supabase, Vercel Web Analytics; and in the roadmap basis line, TTMIK and How to Study Korean.
- **Keys and things typed:** Enter, Esc, Ctrl+K, DELETE (never translated; the engine compares the typed text), you@example.com, the romanization examples `ga` and `(han)`.
- **File formats and units:** CSV, TSV, PNG, KB, 3D.
- **Game tokens:** XP, Lv.
- **Glyph buttons:** A−, A+, Aa.
- **One web term:** Cookie, which is how HK privacy notices write it.

## 3. Glossary of fixed terms (for the course writers)

### Tab bar (5 tabs + extras)

| English | Cantonese | chars | zh (for comparison) |
|---|---|---|---|
| Today | **今日** | 2 | 今天 |
| Lessons | **課堂** | 2 | 课程 |
| Practice | **練習** | 2 | 练习 |
| Review | **溫習** | 2 | 复习 |
| Progress | **進度** | 2 | 进度 |
| Read (advanced) | 閱讀 | 2 | 阅读 |
| Feedback | 意見 | 2 | 反馈 |

- *課堂* is used for the Lessons tab so that **課程** can mean "course" (Course, Switch course, Erase this course's progress). zh uses 课程 for the tab and 语言课程 for the course.
- *溫習* (not 複習) is the HK school word for revising.
- References inside text use the same names, for example *進度 → 備份 → 分享檔案*.

### Core terms

| Idea | Term |
|---|---|
| Korean (the language) | **韓文** (the Intl name in `yue` is also 韓文) |
| Hangul (the script) | **韓文字母**; one block = **音節塊** |
| romanization | **羅馬拼音** |
| pronunciation hint (other courses) | 發音提示 |
| English | 英文 |
| flashcard / card | **字卡** / **卡** (`{1} 張卡`) |
| deck | **卡組** |
| lesson | **課** (第 3 課, `{1} 課`); the lesson screen = 課堂 |
| lesson check / quick check | **課堂測驗** |
| course | **課程** |
| practice | **練習** |
| drill | **操練** |
| review (SRS) | **溫習**; due = **要溫** (`{1} 張要溫`, ⏰ 全部要溫) |
| session | **一節學習** / 每日學習 (完成一節) |
| streak | **連續打卡** (day streak = 連續打卡日數); streak shield = 打卡護盾 |
| quiz / exam / test everything | **小測** / **考試** / **全部測一次** |
| blitz | 快閃 |
| weak spots / missed / hardest | **弱項** / 答錯 / 最難嘅卡 |
| Got it / Again (SRS buttons) | **記得** / **再嚟** |
| new / learning / learned / mastered | 新卡 / 學緊 / 學咗 / **已掌握** |
| box | 卡盒 (`第 {1} 盒`) |
| bury / suspend / leech | 聽日先 (⏭ 聽日先, 已推到聽日) / 暫停 / 頑固卡 |
| level / XP | 等級 (Lv, XP kept) |
| badge / certificate | 徽章 / 證書 |
| combo / personal best | 連擊 / 個人最佳 |
| hint / note / example | 提示 / 備註 / 例句 |
| My phrases / phrase | **我嘅短句** / 短句 |
| word (vocabulary) | 生字 |
| grammar / pattern / grammar index | 文法 / 句式 / 文法索引 |
| verb conjugator / conjugate | 動詞變化 / 變化 |
| shadow (repeat ×3) | 跟讀 |
| role-play / sentence builder / dictation | 角色扮演 / 砌句 / 默書 |
| sign in / sign out / account / email | 登入 / 登出 / 帳戶 / 電郵 |
| sync / backup / export / import | 同步 / 備份 / 匯出 / 匯入 |
| settings / privacy / feedback board | 設定 / 私隱 / 意見區 |
| nickname | 暱稱 |
| app | 程式 |

- **Level titles** (in order): 新手 (Beginner), 萌芽 (Sprout), 學生 (Student), 傾偈達人 (Talker; 수다쟁이), 旅人 (Traveler), 地膽 (Local), 前輩 (Senior; 선배), 高手 (Pro), 大師 (Master), 宗師 (Sensei).
- **Deck groups / tags:** 日常, 社交; #基礎 #旅行 #社交 #工作 #影視 #技能.
- **Greetings:** 早晨, 午安, 晚上好; late at night: 咁夜喇，辛苦晒.
- **Day abbreviations:** 日 一 二 三 四 五 六.
- **Button names the lesson prose may cite:** 記得 (Got it), 再嚟 (Again), 檢查 (Check), 📖 瀏覽 (Browse), 我嘅短句 (My phrases), ⏰ 全部要溫 (All due), 睇規則 (Show the rule).

## 4. 30 strings to check first (for a Hong Kong Cantonese speaker)

Answer "OK" or write the natural version.

| # | English key | Cantonese now | Doubt |
|---|---|---|---|
| 1 | Tap / press (everywhere) | 撳 (撳一下翻轉, 再撳一次確認) | Natural in an app, or too colloquial? HK apps often write 點按 / 輕觸. |
| 2 | Lessons (tab) | 課堂 | Clear as a tab for the lesson list? Or 課程 (which is now "course")? |
| 3 | Review (tab) | 溫習 | OK, or 複習? |
| 4 | Korean (language) | 韓文 | Or 韓語? (韓文 matches Intl and everyday 學韓文.) |
| 5 | Hangul | 韓文字母 | Natural, or is 韓文 alone enough? (諺文 was avoided as academic.) |
| 6 | Romanization | 羅馬拼音 | Clear for Korean, or does 拼音 suggest Mandarin pinyin? |
| 7 | Got it (SRS button) | 記得 | Or 識咗 / 記住咗? |
| 8 | Again (SRS button) | 再嚟 | OK as a button? |
| 9 | Due / {n} due / ⏰ All due | 要溫 / {1} 張要溫 / ⏰ 全部要溫 | Natural for "waiting for review"? |
| 10 | Streak | 連續打卡 | OK, or 連續學習日數? |
| 11 | Quiz | 小測 | School word: OK in an app? |
| 12 | Drill | 操練 | Too "exam drilling"? Or 練習題? |
| 13 | bury / Buried until tomorrow | ⏭ 聽日先 / 已推到聽日。 | Clear? |
| 14 | leech | 頑固卡 | OK? |
| 15 | mastered | 已掌握 | Or 熟咗? |
| 16 | learned / learning | 學咗 / 學緊 | OK as status chips? |
| 17 | Weak spots | 弱項 | OK? |
| 18 | Talker (level title) | 傾偈達人 | Fun or odd? Other titles: 新手, 萌芽, 學生, 旅人, 地膽, 前輩, 高手, 大師, 宗師. |
| 19 | Local (level title) | 地膽 | Fun, or too slangy? |
| 20 | Senior (선배) | 前輩 | OK? (師兄 / 師姐 is gendered.) |
| 21 | Sentence builder / Put the words in order | 砌句 / 將啲字排好次序 | Natural? |
| 22 | Number dictation | 數字默書 | OK? |
| 23 | Shuffle | 洗牌 | OK for decks and cards? |
| 24 | Polite ↔ casual | 禮貌 ↔ 半語 | Clear to a learner who has not met 반말 yet? |
| 25 | Make friends & date | 識朋友同拍拖 | OK? |
| 26 | I get by (level answer) | 應付到 | Natural for language ability? |
| 27 | You've got this! | 你一定得㗎！ | Natural encouragement? |
| 28 | Good morning / afternoon / evening | 早晨 / 午安 / 晚上好 | Is 午安 used? Is 晚上好 too Mandarin? |
| 29 | Hand-tuned for speakers of your language | 專為講你嘅語言嘅人調整 | Two 嘅 in a row: is there a smoother line? |
| 30 | Something went wrong: | 出咗問題： | Or 出錯： ? |

Also worth a glance: 傳送 vs 發送 (send); 字塊 (tiles); 快閃 (blitz); 信心校準 (calibration); 穩陣。 (Steady.); 差少少 (Not quite); 搞掂 (done); 遲啲先 (Not now); 整卡 (Make card); 講出嚟 (Say it).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `gen.py` writes `LANGAPP_PACKS.i18n.yue`, and `validate.js yue` passes.
- `LANGS.yue` exists: `{name:'Cantonese',self:'廣東話',flag:'🇭🇰',ko:'광둥어'}`.
- `langName(code,'yue')` falls back to `Intl.DisplayNames(['yue'])`, which gives Chinese names (observed in Node, full ICU): ko 韓文, en 英文, ja 日文, zh 中文, yue 粵語, es 西班牙文. So no English leaks into `用{1}打` or `學{1}，每日 5 分鐘`. Some names are Taiwan usage (it 義大利文, hi 北印度文). An optional `LN_X.yue={it:'意大利文',hi:'印地文'}` would fix them for HK.
- `preLang()` and the `build.sh` loader already use `.split(/[-_]/)[0]`, so a `yue` browser locale works. `tools/site/lazy.js` already uses `id.split('-')[0]`.

**Must change or decide:**
1. **HK browsers report `zh-HK`, not `yue`.** Today `preLang()` and the `build.sh` loader turn `zh-HK` into `zh`, so a Hong Kong user gets the **Simplified Mandarin** pack before picking a course. Suggested fix in both places, after the split: `if(b==='zh'&&/^zh[-_](hk|mo|hant[-_]hk)/i.test(navigator.language)) b='yue';`. This applies only once a yue native course exists, because `liveNatives()` must list `yue`.
2. **`hLang('yue')` returns `yue`.** Han glyph choice and font fallback follow the `lang` tag. A bare `yue` may not give the HK Traditional glyph forms in every browser [inference; not tested]. Suggestion: `l==='yue'?'yue-Hant-HK'`. Its first subtag is still `yue`, so the T9 check in `lazy.js` (`r.lang.split('-')[0]===r.id.split('-')[0]`) keeps passing. Also consider a `html[lang^=yue]` font stack with HK fonts (`'PingFang HK','Microsoft JhengHei','Noto Sans CJK HK'`).
3. **No yue-ko course exists yet.** There is no `tools/halves/native/yue/` and no `docs/profiles/yue-ko.md`. When they are written, lesson prose should use the tab names in §3 (今日, 課堂, 練習, 溫習, 進度) and the term table. The zh-ko profile's §3.4 glossary converts to Traditional as shown in §1.

**Course UI overrides.** Whatever goes into a future `tools/halves/native/yue/ko/ui.json` becomes `COURSE.UI` and overrides this pack key by key. Unlike the zh pack, this one already says 韓文 / 韓文字母 / 羅馬拼音 for the Korean keys, so no override list is needed.

**Pipeline notes.**
- `new_lang.py yue` made the starter file (it accepts 3-letter codes).
- `road.py` is still broken (see `tools/i18n/tl/NOTES.md`). I wrote `yue/roadmap.json` directly in road.py's output shape, using `tl/roadmap.json` as the skeleton: the same 1,822 strings, with every `t` blanked except the 40 strings of the `ko` roadmap. `gen.py` emits `road` 40.
- During orientation I ran `python3 tools/i18n/gen.py tl` once. That rewrote `packs/i18n-tl.js` from the unchanged `tl/ui.json`, and `validate.js tl` then reported it in sync, so the content should be unchanged. No other shared file was touched.

**Build-time lint (scratch script, not in the repo).** It checks:
- the Hangul runs, emoji and digits are the same as the key's;
- fragment edge spaces and the ` ·` edge;
- no stray Latin outside the list in §2;
- all 622 distinct Han characters were listed and read by hand for Simplified forms; none were found.

It does **not** check naturalness or register; those need the native check (§4).
