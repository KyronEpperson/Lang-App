# Bengali (bn) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates (275 positions), all filled.
- `roadmap.json`: the 39 strings of the **English** roadmap are filled (1 variant, 1 basis, 4 stages, 33 lesson titles). The other 1,783 strings are empty, so they fall back to English.
- The pack was only generated to a scratch path; `packs/` was not touched.

Build: `python3 tools/i18n/gen.py bn <out> && node tools/i18n/validate.js bn <out>`. It passes with one warning class: 11 labels that may overflow (§5).

The only course this interface serves is **bn-en** (English for Bengali speakers). So every legacy key that says Korean, Hangul or romanization is written for English: *ইংরেজি*, *উচ্চারণ*. No Hangul is kept; 🇰🇷 became 🇺🇸 (as zh and de do).

Author: not a native speaker. Everything here needs a Bengali speaker's check (§6). Authority: `docs/profiles/bn.md` §2, §3, §10.

## 1. Register and spelling (one decision each)

- **Variety:** standard Bengali of Bangladesh (Dhaka cholito), Bengali script. Bangladesh spellings of loans (ইমেইল, আর্টিকেল), no সাধু forms.
- **Address:** আপনি everywhere, polite imperative (-ুন / -ন): *বেছে নিন, লিখুন, শুনুন, ট্যাপ করুন*. No তুমি / তুই. The app never says আমি; "we" appears only in the privacy text and onboarding (*আমরা … পাঠাব*).
- **Buttons:** the same imperative, or a bare noun on narrow buttons (*বাতিল, পরের, আবার, শেষ*). No «দয়া করে».
- **Done-messages** are impersonal: *সেভ হয়েছে।*, *কপি হয়েছে।*, *যোগ হয়েছে।*; failures: *… করা গেল না।*; in progress: *… হচ্ছে…*.
- **Digits:** Western 0–9 only. No Bengali digit occurs in either file (lint-checked).
- **Counts (one template per pattern, identical for the English singular and plural keys):**
  - counted things take the classifier on the number: `{1}টি কার্ড`, `{1}টি ডেক`, `{1}টি পাঠ`, `{1}টি প্রশ্ন`, `{1}টি কুইজ`, `{1}টি সারি`, `{1}টি ব্যাজ`;
  - units take none: `{1} দিন`, `{1} সপ্তাহ`, `{1} মিনিট`, `{1} সেকেন্ড`, `{1} XP`, `{1} পয়েন্ট`, `{1} রাউন্ড`, `{1} বার`;
  - "N of M" is written `{1}/{2}` (*কার্ড 3/20*, *সপ্তাহ 2/6*, *রাউন্ড 1/3*), which avoids «-এর মধ্যে».
  - No «-গুলো» after a number, and no case ending after any slot (lint-checked).
- **Language-name slots** stand at the start, after a colon or in brackets, never with an ending: `{1}: কতটা জানেন?`, `এখন শিখছেন: {1}`, `লিখুন ({1})`. The bracket form is my addition to the profile's two positions; it needs no ending either.
- **Full stop:** দাঁড়ি «।» wherever the English key ends in a full stop; none on labels. Quotes are straight double quotes. A spaced em dash for " — ".
- **English inside Bengali:** product and code words stay Latin (Lang App, XP, CSV, TSV, PNG, KB, Enter, Esc, Ctrl+K, DELETE, Supabase, Vercel Web Analytics). Case endings on them take a hyphen: *Lang App-এ*.
- **Encoding:** both files are NFC. NFC writes য় ড় ঢ় as base + nukta (U+09BC), as the profile recommends.
- **Fragments** keep the key's leading and trailing punctuation (`·`, `:`, `=`, brackets). Three sentences are split over several keys and were written so that the Bengali word order still works:
  - `: anything you post is` + `public` + `to all users. …` → «: আপনি যা পোস্ট করবেন তা সব ব্যবহারকারীর কাছে» + «প্রকাশ্য» + «থাকবে। …»;
  - `… linked to you. Type` + **DELETE** + `to confirm.` → the long text ends with its last full sentence, then **DELETE** + «লিখে নিশ্চিত করুন।»;
  - `Type the sound in English letters (e.g.` + example + `), or type the Hangul itself.` → «ধ্বনিটি ইংরেজি অক্ষরে লিখুন (যেমন» + example + «), অথবা ইংরেজি শব্দটিই লিখুন।».

## 2. Glossary (one term per concept)

| English | Bengali | Note |
|---|---|---|
| lesson | পাঠ | |
| practice | অনুশীলন | |
| review (SRS) | রিভিশন | verb «রিভিশন দিন» |
| due | রিভিশন বাকি | chip, caption and counts: «রিভিশন বাকি {1}টি»; `{n} cards due` is the profile's «{1}টি কার্ড রিভিশনের জন্য» |
| left (remaining) | বাকি | «বাকি {1}টি» |
| deck / card / flashcard | ডেক / কার্ড / ফ্ল্যাশকার্ড | |
| session | সেশন | |
| quiz / quick check | কুইজ / ছোট কুইজ | "lesson checks" = «পাঠের ছোট কুইজ» |
| exam | পরীক্ষা | |
| blitz | ঝটপট কুইজ / ⚡ ঝটপট | |
| drill | ড্রিল | |
| streak | টানা দিন | «টানা {1} দিন»; streak shield = «টানা দিনের সুরক্ষা» |
| level / XP | লেভেল / XP | |
| daily goal | দৈনিক লক্ষ্য | toast «আজকের লক্ষ্য পূরণ হয়েছে» |
| daily cap | দৈনিক সীমা | |
| box (SRS) | বক্স | |
| interval | বিরতি | |
| retention | মনে রাখার হার | |
| new / learning / learned / mastered | নতুন / শিখছি / শেখা হয়েছে / আয়ত্ত | caption "cards learned" = «শেখা কার্ড» |
| Got it / Again | পেরেছি / আবার | SRS buttons; «বুঝেছি — কুইজ দিন» for "Got it — quiz me" |
| Check / Skip / Next / Done / Finish | যাচাই করুন / বাদ দিন / পরের / হয়েছে / শেষ করুন | |
| Correct! / Not quite. | সঠিক! / হয়নি, আবার দেখুন। | profile §10 |
| hint / answer / explanation (`Why:`) | ইঙ্গিত / উত্তর / ব্যাখ্যা | |
| passed / to pass | পাস / পাস করতে 80% | |
| missed | ভুল হওয়া | |
| weak spots | দুর্বল জায়গা | |
| hardest cards | সবচেয়ে কঠিন কার্ড | |
| leech | বারবার ভুল হওয়া কার্ড (short: বারবার ভুল) | no animal metaphor |
| suspend / restore | স্থগিত করুন / ফিরিয়ে আনুন | |
| bury | কাল দেখব / কাল পর্যন্ত বাদ দিন | |
| flip / shuffle / browse | উল্টান / এলোমেলো করুন / ঘুরে দেখুন | |
| Mix (5-at-a-time pool) / Mixed (quiz mode) | মিশেল / মিশ্র | |
| read / recall / listen / type (modes) | পড়া / মনে করা / শোনা / লেখা | button form of type: «লিখুন» |
| pass 2/3 (learning pass) | দফা 2/3 | |
| round | রাউন্ড | |
| My phrases / phrase | আমার ফ্রেজ / ফ্রেজ | |
| note / meaning / example / dialogue | নোট / অর্থ / উদাহরণ / কথোপকথন | |
| pronunciation hint, romanization | উচ্চারণ | toggle «উচ্চারণ দেখান / লুকান» |
| polite ↔ casual | ভদ্র ↔ ঘরোয়া | |
| role-play / shadow | রোল-প্লে / শুনে শুনে বলুন | |
| grammar / pattern / grammar index | গ্রামার / প্যাটার্ন / গ্রামারের সূচি | |
| verb / noun / question word / idiom | ক্রিয়া / বিশেষ্য / প্রশ্নবোধক শব্দ / বাগধারা | profile §3 |
| progress | অগ্রগতি | |
| feedback / feedback board | মতামত / মতামত বোর্ড | |
| settings / sign in / sign out / sync | সেটিংস / লগ ইন / লগ আউট / সিংক | |
| save / saved | সেভ করুন / সেভ হয়েছে | |
| backup / export / import / merge | ব্যাকআপ / এক্সপোর্ট / ইমপোর্ট / মিলিয়ে নিন | |
| account / nickname / email | অ্যাকাউন্ট / ডাকনাম / ইমেইল | |
| device / browser storage / site data | ডিভাইস / ব্রাউজারের স্টোরেজ / সাইটের ডেটা | |
| unlock / locked | আনলক করুন / লক করা | |
| study plan / goal / reminder | পড়ার পরিকল্পনা / লক্ষ্য / রিমাইন্ডার | |
| certificate / badge | সার্টিফিকেট / ব্যাজ | |
| accent (colour) / text size | রঙ / ফন্ট | |
| voice (woman / man) | কণ্ঠ (নারী / পুরুষ) | |
| course / language | কোর্স / ভাষা | |
| tap / swipe / long-press | ট্যাপ করুন / সোয়াইপ / চেপে ধরুন | |
| quick actions | দ্রুত কাজ | |
| coming soon / planned | শিগগিরই আসছে / পরিকল্পিত | |

Level titles: নবীন (Beginner), অঙ্কুর (Sprout), শিক্ষার্থী (Student), আড্ডাবাজ (Talker), পর্যটক (Traveler), স্থানীয় (Local), অভিজ্ঞ (Senior), প্রো (Pro), ওস্তাদ (Master), গুরু (Sensei).

Hashtags: #মৌলিক, #ভ্রমণ, #সামাজিক, #কাজ, #মিডিয়া, #দক্ষতা.

## 3. Tab bar and other fixed-size labels

| English | Bengali | code points |
|---|---|---|
| Today | আজ | 2 |
| Practice | অনুশীলন | 7 |
| Review | রিভিশন | 6 |
| Lessons | পাঠ | 3 |
| Read | পড়া | 4 |
| Progress | অগ্রগতি | 7 |
| Feedback | মতামত | 5 |
| Drills (label) | ড্রিল | 5 |

- All are the profile's labels and all are at most 8 code points. The two widest are «অনুশীলন» and «অগ্রগতি»; the profile's fallbacks are «চর্চা» and «উন্নতি».
- **Weekday headers** (`Su`…`Sa`): র, সো, ম, বু, বৃ, শু, শ (1–2 code points). These are the usual one-syllable calendar abbreviations; the three-letter forms (রবি, সোম, মঙ্গল…) do not all fit in three letters.
- `Type` = «লিখুন» (the verb; the chip reads `⌨️ লিখুন EN`). `Category` = «ধরন». `Text size` = «ফন্ট».
- Mode chips keep language codes in Latin letters: «পড়া en→bn», «মনে করা bn→en», «শোনা 🔊→bn», «⌨️ লিখুন en».

## 4. Legacy keys rewritten for an English course

- Hangul and romanization keys follow zh / de: `Korean starter` → «ইংরেজির প্রথম ধাপ»; `Hangul drill` → «উচ্চারণ ড্রিল»; `Can you already read Hangul?` → «আপনি কি এখনই ইংরেজি পড়তে পারেন?».
- `(han). Vertical vowels …` → a sentence about English spelling and stress, as de and zh have.
- `Type the romanization. Hangul blocks …` → «উচ্চারণটি লিখুন। এখানে বেছে নেওয়া লেভেল সেশনেও কাজে লাগে।».
- Conjugator keys with Korean endings (`verb stem + 지`, `+ 요 (polite)`, `don't (지 마)` …) are generic Bengali labels with no Korean.
- `Try 가다 · 먹다 …` → «চেষ্টা করুন: go · eat · do · drink · see · hear · help · live · know» (the de list).
- `한국어 UI (menu labels in Korean)` → «বাংলা ইন্টারফেস (মেনু বাংলায়)»; `Language · 언어` → «ভাষা · Language».
- `Trip to Korea` → «বিদেশ ভ্রমণ»; `Make friends & date` → «বিদেশি বন্ধু বানানো»; `Dating, friends & nights out` → «বন্ধু, আড্ডা ও ঘোরাঘুরি»; `K-dramas & music` → «সিনেমা, সিরিজ ও গান». Dating is left out: my choice of the safer wording, not something the profile asks for; the lead may want «ডেটিং» back.
- `No match. Try the English meaning.` → «… বাংলা অর্থ দিয়ে খুঁজে দেখুন।» (the meaning side is Bengali in this course).
- `안녕하세요 👋` / `안녕하세요, {x}!` → «হ্যালো 👋» / «হ্যালো, {1}!». A neutral greeting was chosen over a religious one.

## 5. Long labels (validator warning: > 1.6 × English and > 14 characters)

Kept because a shorter form would lose the verb or the meaning; check them on a 390px screen:

| English | Bengali | Shorter fallback |
|---|---|---|
| Copy export | এক্সপোর্ট কপি করুন | এক্সপোর্ট কপি |
| Try again | আবার চেষ্টা করুন | আবার |
| ⏰ All due | ⏰ বাকি সব রিভিশন | ⏰ সব বাকি |
| Skip tour | পরিচিতি বাদ দিন | বাদ দিন |
| verb stem + 지 | ক্রিয়ার মূল + শেষাংশ | (conjugator, not shown in bn-en) |
| Share card | কার্ড শেয়ার করুন | শেয়ার |
| tap to skip | বাদ দিতে ট্যাপ করুন | বাদ দিন |
| tap anywhere to continue | চালিয়ে যেতে যেকোনো জায়গায় ট্যাপ করুন | ট্যাপ করে চালিয়ে যান |
| Not quite. | হয়নি, আবার দেখুন। | হয়নি। |
| Fill the gap | শূন্যস্থান পূরণ করুন | শূন্যস্থান পূরণ |
| Write it | বাক্যটি ইংরেজিতে লিখুন | ইংরেজিতে লিখুন |

Also long but under the warning limit: «সম্পন্ন চিহ্ন দিন» (Mark complete), «সারসংক্ষেপ শেয়ার করুন» (Share recap card), «টানা দিন ভাঙতে পারে» (Streak at risk), «একবারে 5টি করে শিখুন» (Learn 5 at a time).

## 6. Strings to check first (for a Bengali speaker)

Answer "OK" or write the natural version.

| # | English key | Bengali now | Doubt |
|---|---|---|---|
| 1 | Review (tab) / due | রিভিশন / রিভিশন বাকি | The profile's own doubt: «রিভিশন» or «ঝালাই»? Is «রিভিশন বাকি 5টি» natural for "5 due"? |
| 2 | {n} cards due | {1}টি কার্ড রিভিশনের জন্য | The profile's wording. Or «{1}টি কার্ডের রিভিশন বাকি»? |
| 3 | {n} cards | {1}টি কার্ড | Does a Western digit + টি («5টি») read normally? Fallback «কার্ড: 5». |
| 4 | Got it (SRS button) | পেরেছি | Or «জানি», «মনে আছে»? |
| 5 | My phrases | আমার ফ্রেজ | Or «আমার বাক্য», «আমার বাক্যাংশ»? |
| 6 | Polite ↔ casual | ভদ্র ↔ ঘরোয়া | Or «আনুষ্ঠানিক ↔ ঘরোয়া», «ফরমাল ↔ ইনফরমাল»? |
| 7 | Mix / Mixed | মিশেল / মিশ্র | Two words for two things: clear, or confusing? |
| 8 | pass 1/3 | দফা 1/3 | Natural for "first pass through the cards"? Or «বার 1/3»? |
| 9 | Weak spots | দুর্বল জায়গা | Or «দুর্বলতা»? |
| 10 | leech | বারবার ভুল হওয়া কার্ড | Long; a shorter everyday word? |
| 11 | ⏭ bury | ⏭ কাল দেখব | The only first-person button. Or «⏭ কাল পর্যন্ত বাদ»? |
| 12 | ⏸ suspend / Suspended cards | ⏸ স্থগিত করুন / স্থগিত কার্ড | Too official? «বন্ধ রাখুন»? |
| 13 | mastered | আয়ত্ত | As a one-word state label: OK? |
| 14 | learning (state) | শিখছি | First person. Or «শেখা চলছে»? |
| 15 | Shuffle | এলোমেলো করুন | Or «শাফল»? |
| 16 | 📖 Browse | 📖 ঘুরে দেখুন | Natural for looking through a deck list? |
| 17 | ↶ Undo / Undone. | ↶ ফিরিয়ে নিন / ফিরিয়ে নেওয়া হয়েছে। | Or «আনডু»? |
| 18 | Streak / day streak / Streak shield | টানা দিন / টানা দিন / টানা দিনের সুরক্ষা | Is «টানা দিন» clear as a noun label? |
| 19 | Streak at risk | টানা দিন ভাঙতে পারে | Natural? |
| 20 | ⚡ 2-minute blitz / ⚡ Blitz | ⚡ 2 মিনিটের ঝটপট কুইজ / ⚡ ঝটপট | OK? |
| 21 | Grammar | গ্রামার | The loan is used for English grammar; or «ব্যাকরণ»? |
| 22 | 🔊 dialogue | 🔊 কথোপকথন | Or «সংলাপ», «ডায়ালগ»? |
| 23 | 🗣 shadow ×3 | 🗣 শুনে শুনে বলুন ×3 | Clear for "repeat along with the audio"? |
| 24 | Your line ({x}): | আপনার কথা ({1}): | Role-play line. Or «আপনার সংলাপ»? |
| 25 | Text size | ফন্ট | Had to be very short. Or «লেখার আকার»? |
| 26 | Accent / Accent plum | রঙ / বেগুনি রঙ | Plum rendered as বেগুনি (purple). |
| 27 | Level titles | নবীন, অঙ্কুর, শিক্ষার্থী, আড্ডাবাজ, পর্যটক, স্থানীয়, অভিজ্ঞ, প্রো, ওস্তাদ, গুরু | Is «আড্ডাবাজ» friendly or rude? Is «ওস্তাদ» fine? |
| 28 | Good morning / afternoon / evening | শুভ সকাল / শুভ বিকেল / শুভ সন্ধ্যা | Natural as app greetings in Bangladesh? |
| 29 | Hello / 안녕하세요, {x}! | হ্যালো / হ্যালো, {1}! | Or «স্বাগতম»? |
| 30 | Working late — nice job | এত রাতেও পড়ছেন — দারুণ | Natural? |
| 31 | I get by / Some basics / Just starting | কাজ চলে যায় / কিছুটা জানি / একদম নতুন | Natural self-ratings? |
| 32 | Set me up | সাজিয়ে দিন | OK as the last onboarding button? |
| 33 | Show the tour / Skip tour | অ্যাপ পরিচিতি দেখুন / পরিচিতি বাদ দিন | «পরিচিতি» for "tour"? |
| 34 | Hand-tuned for speakers of your language | আপনার ভাষার মানুষের জন্য যত্ন করে সাজানো | Natural? |
| 35 | Weekdays Su…Sa | র সো ম বু বৃ শু শ | Readable in a narrow chart? |
| 36 | Anonymous | নামহীন | Or «বেনামি»? |
| 37 | Calibration / Analytics | ক্যালিব্রেশন / অ্যানালিটিক্স | Loans kept; Bengali words? |
| 38 | Syllables | সিলেবল | The profile's own doubt (অক্ষর?). |
| 39 | Number dictation | সংখ্যার শ্রুতিলিখন | School word; natural here? |
| 40 | Roadmap: comparatives, superlatives | তুলনার রূপ, সবচেয়ে-র রূপ | Profile §3 terms; «সবচেয়ে-র রূপ» looks odd in a title. |
| 41 | Roadmap: A2 · Building range | A2 · প্রকাশের পরিধি বাড়ানো | Natural? |
| 42 | Roadmap: Narrative tenses | গল্প বলার tense | Mixed script, as the profile keeps *tense* in English. |

## 7. For the lead (I changed nothing outside `tools/i18n/bn/`)

1. **Digits in dates and numbers.** The profile's request stands: map `bn` to `bn-BD-u-nu-latn` in `dLoc()` (and anywhere `toLocaleString()` runs with the interface locale), otherwise `Intl` prints Bengali digits next to the Western digits of this dictionary.
2. **Language names in slots.** The patterns expect the dictionary form from `Intl.DisplayNames('bn')` («ইংরেজি»). In my scratch render the slot was filled with the English word, which is only what my test string contained; please confirm in the app that the slot shows «ইংরেজি».
3. **Tab bar.** Please measure «অনুশীলন» and «অগ্রগতি» at 390px, and check that ি ী ু ্র are not clipped by the nav's `overflow:hidden` (profile §10).
4. **Nukta rendering.** NFC stores য় ড় as base + U+09BC. If the UI font shows a floating dot, the font needs changing, not the text.
5. **`road.py` fails on this machine** (`node -e` with the whole of roadmaps.js: argument list too long), and its `check` also fails by design while only one roadmap is filled. I checked `roadmap.json` with a scratch script instead: key set equal to `packs/roadmaps.js` (1,822), 39/39 English-roadmap strings filled, no markup, newline, trailing full stop or Bengali digit, NFC.
6. **Course `ui.json` overrides** (if a `COURSE.UI` is added for bn-en) should use the terms in §2, especially রিভিশন, ছোট কুইজ, ইঙ্গিত, ব্যাখ্যা.
7. **Content writers** should cite the tabs as আজ, অনুশীলন, রিভিশন, পাঠ, অগ্রগতি, মতামত and the buttons as «পেরেছি», «আবার», «যাচাই করুন», «বাকি সব রিভিশন», «আমার ফ্রেজ».

**Scratch lint used (not in the repo).** It checks: every `t` filled and NFC; no Hangul, no Bengali digits, no তুমি forms; the emoji, symbols and fixed digits of the key; edge punctuation of fragments; «।» where the key ends in a full stop; the slot set `{1}..{k}`, each once; no case ending or «-গুলো» after a slot; tab and weekday lengths. It does not check naturalness; that needs §6.
