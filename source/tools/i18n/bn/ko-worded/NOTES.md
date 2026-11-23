# Bengali / Bangla (bn) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled. The skeleton came from `python3 tools/i18n/new_lang.py bn`.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English. The file was written directly in road.py's output shape, using the tl file as the skeleton (same keys, every `t` blanked, then the `roadmap: 'ko'` entries filled). `road.py` was not run (see the tl / ceb notes).
- The generated pack is `packs/i18n-bn.js` (`exact 784 patterns 275 road 40`).

Build: `python3 tools/i18n/gen.py bn && node tools/i18n/validate.js bn`. It passes with **1 warning class**:
- 8 labels that may overflow (tl has 20). The identical-to-English warning does not fire, because Bengali is a distinct script and the validator switches that check off. The strings that are identical anyway are listed in §2.

The only course this interface serves is **bn-ko** (Korean for Bengali speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *কোরিয়ান*, *হাঙ্গুল*, *রোমান হরফ*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*ইংরেজি*). The Hindi dictionary (`tools/i18n/hi/`) was written for hi-en (its "Korean" means English), so it was used only as a reference for Indic term choices, never copied.

There is no `docs/profiles/bn-ko.md`. **This file's glossary (§3) is the source of truth for the bn-ko course writers** until a profile exists. `docs/profiles/en-bn.md` (Bengali for English speakers) was read for the Bangladesh-first variant decision and kept consistent with it.

**Author: not a native speaker.** Everything here needs a Bengali speaker's check, ideally one from Bangladesh and one from West Bengal (§5).

## 1. Register and spelling (one decision each)

- **Variety:** standard colloquial Bengali (চলিত ভাষা), shared by Bangladesh and West Bengal. Where the two differ, the **Bangladesh** form is used and the difference is listed below. This matches `en-bn.md` §2.1 (Dhaka standard, Kolkata word in the note).
- **Address: আপনি, never তুমি / তুই.** The brief asks for the informal singular unless that is rude. [inference] In Bengali, তুমি to an adult stranger reads as over-familiar or condescending, especially in Bangladesh. `en-bn.md` §2.2 also says আপনি is the form for strangers and shops. Mainstream Bengali app and OS copy addresses the user with আপনি too, though no app was opened for this note. Changing it later means rewriting every verb ending, not just pronouns, so it is check-string #1.
  - Verb form: আপনি present (*আপনি কীভাবে শেখেন*) and the polite imperative in -উন / -ন (*করুন, দেখুন, শুনুন, খুলুন, মুছুন, বাছুন, ফিরুন, লুকান, উল্টান*).
  - The lint checks that no তুমি / তোমার / তোমাকে / তুই / তোর appears. Casual verb forms appear only where the key itself describes Korean 반말 (*করো না (지 마)* for "don't (지 마)").
- **Button rule:**
  - Where a natural noun is as short as the English, the button is a noun: *বাতিল* (Cancel), *শেষ* (Done), *পরের* (Next), *সংরক্ষণ* (Save), *যাচাই* (Check), *বন্ধ* (Close), *উত্তর* (Answer), *শুরু* (Start), *মিক্স* (Mix).
  - Otherwise it is the আপনি imperative: *মুছুন, সরান, দেখুন, লুকান, বদলান, শুনুন, বলুন*.
  - Loan verbs take করুন in sentences (*টাইপ করুন, শেয়ার করুন, ট্যাপ করুন*). On short buttons the bare noun stands alone (*CSV এক্সপোর্ট, ফাইল শেয়ার, ডেক রিসেট, ⌨️ টাইপ*).
- **Counts:** a counted noun takes the classifier **-টি** glued to the slot: `{1}টি কার্ড`, `{1}টি ডেক`, `{1}টি পাঠ`. A Bengali noun after a numeral stays singular, so one text works at 1 and at 2+, and singular and plural templates share one text.
  - Time units and points take **no** classifier, as in speech: `{1} দিন`, `{1} সপ্তাহ`, `{1} মিনিট`, `{1} সে.`, `{1} বার`, `{1} পয়েন্ট`.
  - -টি (not -টা) is used because it is the neutral written form in app copy. `en-bn.md` teaches -টা for speech, which is a separate question.
- **Digits:** ASCII digits (0–9) everywhere, never ০–৯. The slots arrive as ASCII from the engine, so one digit system is kept throughout. Many Bangladeshi apps use Bengali digits; if the lead wants them, the engine would have to localise slot numbers too.
- **Slots and case endings:**
  - No case ending (-র / -এর / -কে / -তে / -এ) is glued to an `{x}` or `{s}` slot or to Hangul, because the right form depends on the last sound. The lint checks this.
  - Sentences are restructured instead. A label goes before a colon (*দেখুন: {1}*, *অনুশীলন: {1}*, *সিঙ্ক হচ্ছে: {1}*, *আয়ত্ত হয়েছে: {1}*).
  - For a language-name slot, the ending goes on the word ভাষা (*{1} ভাষায় টাইপ করুন*, *{1} ভাষা কতটা জানেন?*). This reads correctly with *কোরিয়ান* and *ইংরেজি*, the names that `Intl.DisplayNames(['bn'])` returns.
  - The only hyphenated ending is on the fixed brand name: *Lang App-এ*.
- **Punctuation:** a full sentence ends in the danda **।**, not ".". `?` and `!` stay. Fragments keep the key's leading and trailing `·`, `:`, spaces and brackets. The one fragment that ends "(e.g." becomes "(যেমন", because the engine supplies the closing part.
- **Spelling:** Bangla Academy standard spelling.
  - ি / ু in loanwords (*কোরিয়ান, ইমেইল, ডিভাইস*).
  - অ্যা for English a (*অ্যাপ, অ্যাকাউন্ট, অ্যাডমিন*), never এ্যা.
  - ং in *লিংক*, *সেটিংস*.
  - The text is NFC (য় ড় ঢ় are stored decomposed, which is what NFC produces). There is no ZWJ / ZWNJ.
- **Script:** Bengali script throughout. Common tech loanwords are written in Bengali script (*অ্যাপ, সাইন ইন, সিঙ্ক, ব্যাকআপ, ইমপোর্ট, এক্সপোর্ট, ব্রাউজার, ডিভাইস, কুইজ, ডেক, কার্ড*). Latin script appears only in the closed list of §2.
- **Bangladesh vs West Bengal choices made:**

| Used (Bangladesh) | West Bengal form | Where |
|---|---|---|
| শুভ বিকাল | শুভ বিকেল | "Good afternoon" greeting gloss |
| ইমেইল | ই-মেল | everywhere |
| লিংক | লিঙ্ক | everywhere |
| হ্যালো (neutral) | (নমস্কার) | "Hello" in the pre-native intro. Neither আসসালামু আলাইকুম nor নমস্কার is used, because each marks one community (`en-bn.md` §2.1) |
| নম্বর | নম্বর | same in both (the colloquial BD নাম্বার was avoided) |

  Everything else in the interface is common to both standards. পানি / জল and the like do not occur in UI strings.

## 2. Kept in Latin script, and strings identical to English (closed list)

- **Brand and product names:** Lang App, Supabase, Vercel Web Analytics.
- **Code word:** DELETE. It is never translated, because the engine compares the typed text. In the delete dialog, the pattern ends in *নিশ্চিত করতে*, then DELETE, then *টাইপ করুন।*, so the sentence reads *… নিশ্চিত করতে DELETE টাইপ করুন।*
- **Keys and file types:** Enter, Esc, Ctrl+K, CSV, TSV, PNG, KB, UI (in *한국어 UI*), 3D.
- **Typography and level marks:** Aa (the romanization toggle glyph), A− / A+, XP, Lv (in `{n}/{n} → Lv {n}`).
- **Things users type or see as romanization:** *ga* (in "type the sound, e.g. ga"), *han* (the romanization of 한), and the placeholder *apni@example.com*.
- **Speaker letters:** A / B in the role-play lines. The ending goes after a hyphen there: *A-কে*.

Strings identical to the English key:
- exact: `Enter`, `XP`, `A−`, `A+`, `DELETE`, `Lang App`;
- patterns: `{n}/{n} → Lv {n}`, `{n} / {n} · {n}%`, `안녕하세요, {x}!`, `{n}/{n} · {x}`.

## 3. Glossary of fixed terms (reuse these in course text)

### 3.1 Tab names (5-tab bar + extras)

| English | Bengali | graphemes | tl | ceb |
|---|---|---|---|---|
| Today | **আজ** | 2 | Ngayon | Karon |
| Lessons | **পাঠ** | 2 | Aralin | Leksyon |
| Practice | **অনুশীলন** | 5 | Pagsasanay | Praktis |
| Review | **রিভিউ** | 3 | Review | Review |
| Progress | **অগ্রগতি** | 4 | Pag-unlad | Pag-uswag |
| Read (advanced) | পড়া | 2 | Basa | Basa |
| Feedback | মতামত | 3 | Feedback | Feedback |

- References inside text use the same names, for example *অগ্রগতি → ব্যাকআপ → ফাইল শেয়ার*.
- Where a sentence refers to a screen, it adds অংশে ("in the … section"): *অগ্রগতি অংশে*, *দেখুন অংশে* (in Browse).
- *Review* is the loan রিভিউ, as tl and ceb kept "Review". The candidate native word is ঝালাই ("brush up"); see check #2.

### 3.2 Core terms

| English | Bengali |
|---|---|
| Korean (language) | কোরিয়ান (also what `Intl.DisplayNames(['bn'])` returns) |
| English | ইংরেজি |
| Bengali (the "en" side of mode labels) | বাংলা: *পড়া 한→বাংলা*, *মনে করা বাংলা→한*, *শোনা 🔊→বাংলা* |
| Hangul | হাঙ্গুল |
| romanization | রোমান হরফ (*Aa রোমান হরফ: চালু*; *রোমান হরফে টাইপ করুন*) |
| pronunciation / pronunciation hint | উচ্চারণ / উচ্চারণের ইঙ্গিত (used only by the generic keys) |
| flashcard / card | ফ্ল্যাশকার্ড / কার্ড |
| deck | ডেক |
| lesson | পাঠ |
| practice | অনুশীলন |
| review (noun, verb) | রিভিউ, রিভিউ করুন |
| streak / streak shield | স্ট্রিক / স্ট্রিক শিল্ড; "day streak" = দিনের স্ট্রিক |
| due (filter, counts) | বাকি: *বাকি* chip, `{1}টি বাকি`, *সব বাকি* (All due), *রিভিউ বাকি* (Due for review) |
| quiz / exam / test | কুইজ / পরীক্ষা / যাচাই (*সবকিছু যাচাই* = Test everything; *ঝটপট যাচাই* = Quick check) |
| drill / blitz / round | ড্রিল / ঝটিকা / রাউন্ড |
| session | সেশন |
| level / XP | লেভেল / XP |
| box (SRS) | বাক্স |
| interval | ব্যবধান |
| new / learning / learned / mastered | নতুন / শিখছেন / শেখা হয়েছে / আয়ত্ত |
| Got it / Again (SRS buttons) | জানি / আবার |
| bury / suspend / leech | কালকে (⏭ কালকে; "Skip until tomorrow" = আগামীকাল পর্যন্ত বাদ) / স্থগিত / লিচ |
| Weak spots / Missed / Hardest | দুর্বল দিক / ভুলগুলো / সবচেয়ে কঠিন |
| My phrases | আমার বাক্য (phrase = বাক্য) |
| Browse | দেখুন |
| Shuffle / Mix / Merge | এলোমেলো / মিক্স (the 5-at-a-time pool) / মিলিয়ে নিন (never মিক্স) |
| Correct! / Not quite. | সঠিক! / পুরোপুরি হয়নি। |
| goal / reminder / nickname / certificate | লক্ষ্য / রিমাইন্ডার / ডাকনাম / সনদ |
| feedback (board, message) | মতামত |
| backup / export / import / sync / sign in | ব্যাকআপ / এক্সপোর্ট / ইমপোর্ট / সিঙ্ক / সাইন ইন |
| settings / options | সেটিংস / অপশন |
| voice: woman / man | কণ্ঠ: নারী / পুরুষ |

**Quiz mode words** are used the same everywhere:
- Read = *পড়া*;
- Listen = *শোনা* (the mode noun; the button verb is *শুনুন*);
- Recall = *মনে করা*;
- Type = *টাইপ*;
- Mixed (the quiz mode) = *মিশ্র*;
- "pass 2/3" = *রাউন্ড 2/3*.

### 3.3 Grammar terms used in the interface

Unlike tl and ceb, Bengali has school grammar terms that every reader knows, so those are used. Korean-specific tool words that have no exact Bengali school equivalent are loans, following the Hindi profile (`hi-ko.md` §3.1).

| English | Bengali |
|---|---|
| verb / noun | ক্রিয়া / বিশেষ্য |
| stem | ধাতু (*ক্রিয়ার ধাতু + 지*) |
| dictionary form | অভিধানরূপ |
| ending | এন্ডিং. Not বিভক্তি, which Bengali grammar uses for its own case endings. Not yet used in a UI string; reserved for the course |
| particle | পার্টিকল (reserved for the course) |
| counter | কাউন্টার |
| question word | প্রশ্নবোধক শব্দ |
| polite / casual | ভদ্র / ঘরোয়া (*🎚️ ভদ্র ↔ ঘরোয়া*) |
| honorific | সম্মানসূচক |
| 요-form / 반말 | 요-রূপ / 반말 |
| present / past | বর্তমান / অতীত (*ভদ্র বর্তমান*, *ভদ্র অতীত*) |
| vowel / consonant / final (받침) | স্বর / ব্যঞ্জন / শেষ ব্যঞ্জন |
| block / syllable | ব্লক / অক্ষর |
| sound change | ধ্বনি পরিবর্তন |
| pattern / irregular / grammar | প্যাটার্ন / অনিয়মিত / ব্যাকরণ |
| verb conjugator | ক্রিয়ারূপ তৈরি; the button is *রূপ দেখুন* |
| idiom / 사자성어 | প্রবাদ / চার অক্ষরের প্রবাদ |

### 3.4 Level titles

*নবীন* (Beginner) · *অঙ্কুর* (Sprout) · *শিক্ষার্থী* (Student, gender-neutral) · *আড্ডাবাজ* (Talker; 수다쟁이 = chatterbox) · *পর্যটক* (Traveler) · *স্থানীয়* (Local) · *সিনিয়র* (Senior / 선배; Bangladeshi students say সিনিয়র) · *প্রো* (Pro) · *ওস্তাদ* (Master) · *গুরু* (Sensei).

### 3.5 Other recurring labels

- Deck groups and tags: *রোজকার* (Everyday), *সামাজিক* (Social), *ব্যাকরণ* (Grammar); *#মৌলিক #ভ্রমণ #সামাজিক #কাজ #মিডিয়া #দক্ষতা*.
- Session sizes: *দ্রুত · 2 মিনিট* / *সাধারণ · 5* / *লম্বা · 10*.
- Day abbreviations (narrow chart): *র সো ম বু বৃ শু শ*.
- Accent colours: *লাল / সবুজ / নীল / বেগুনি রং*. "amber" in the activity legend = *হলুদ*.

## 4. Pipeline notes and lint

- `gen.py bn` and `validate.js bn` accept `bn` with no change. **No shared tool blocked this work, and no shared file was edited.**
- Scratch lint (not in the repo; `scratchpad/i18n-bn/lint.py`) checks:
  - Hangul runs, emoji / arrows, digits and `%` equal to the key's;
  - the slot set;
  - fragment edge punctuation and spaces;
  - no Bengali digits, no Devanagari letters (the danda excepted), no তুমি / তুই forms;
  - NFC, no ZWJ;
  - Latin words against the closed list of §2;
  - no case ending glued to a slot.

  It does **not** check naturalness, verb choice or register drift; those need the native check (§5).
- Overflow warnings (8): *বাক্স অনুযায়ী কার্ড, সংরক্ষণ ও প্রস্থান, তারপর এই ডেক থেকে 5টি কার্ড:, বাদ দিতে ট্যাপ করুন, চালিয়ে যেতে যেকোনো জায়গায় ট্যাপ করুন, কাজ চালাতে পারি, শূন্যস্থান পূরণ করুন, শব্দগুলোতে ট্যাপ করুন*. They are headings, captions or full-width chips rather than small buttons. The validator counts code points, and Bengali vowel signs and conjuncts inflate that count, so on screen these are narrower than the number suggests.

### For the lead (src/app.html, build, tests; I changed none of these)

- **Works already:**
  - `bn` is a 2-letter code, so `navigator.language.slice(0,2)` (`bn-BD`, `bn-IN`) and `id.slice(0,2)` give `bn`.
  - `LANGS.bn` exists: `{name:'Bengali',self:'বাংলা',flag:'🇧🇩',ko:'벵골어',t:1}`.
  - `bn` is not in `RTL_LANGS`, which is correct.
  - `Intl.DisplayNames(['bn'])` returns proper Bengali names (observed in Node: ko কোরিয়ান, en ইংরেজি, es স্প্যানিশ, ja জাপানি, zh চীনা, hi হিন্দি, bn বাংলা). Unlike tl and ceb, no language-name override map is needed.
- **To check:**
  - `LANGS.bn` has `t:1` (target). `bn` appears as a native language in the picker only once a course with `native:'bn'` (bn-ko) is in the manifest.
  - There is no `tools/halves/native/bn/` yet. Whatever later goes into `tools/halves/native/bn/ko/ui.json` overrides this pack key by key, so keep the two consistent and prefer fixing wording here.
  - **Tell the halves agent:** the on-screen tabs are **আজ, পাঠ, অনুশীলন, রিভিউ, অগ্রগতি**. Button names the lesson prose may cite: *জানি* (Got it), *আবার* (Again), *যাচাই* (Check), *📖 দেখুন* (Browse), *আমার বাক্য* (My phrases), *সব বাকি* (All due).
- **Digits:** if Bengali digits are wanted, that is an engine change (slot numbers), not a dictionary change.

## 5. 30 strings to check first (for a Bengali speaker)

Answer "OK" or write the natural version. A Bangladeshi and a West Bengal reader would ideally both look at #1–#6.

| # | English key | Bengali now | Doubt |
|---|---|---|---|
| 1 | (all) address | আপনি + -উন imperatives | Is আপনি right for a friendly learning app, or would তুমি feel normal (Duolingo-style) to young Bangladeshi users? Changing it touches every verb. |
| 2 | Review (tab) | রিভিউ | Loan kept, like tl and ceb. Would *ঝালাই* or *পুনরাবৃত্তি* read better as a tab? |
| 3 | Practice (tab) | অনুশীলন | Natural, or too bookish (*প্র্যাকটিস*)? |
| 4 | Progress (tab) | অগ্রগতি | OK for "your stats"? |
| 5 | Feedback (tab) | মতামত | OK, or is *ফিডব্যাক* what apps say? |
| 6 | Good afternoon | শুভ বিকাল | BD spelling chosen; WB writes *বিকেল*. Is *শুভ বিকাল* even said, or *শুভ অপরাহ্ন*? |
| 7 | Got it (SRS button) | জানি | Or *পেরেছি*, *মনে আছে*? |
| 8 | Again (SRS button) | আবার | Does *আবার* alone work as a button? |
| 9 | Due / {n} due | বাকি / {1}টি বাকি | Clear for "waiting for review"? |
| 10 | All due | ⏰ সব বাকি | Clear? |
| 11 | bury | ⏭ কালকে | Natural for "put off until tomorrow"? |
| 12 | mastered | আয়ত্ত | Or *রপ্ত*, *পাকা*? |
| 13 | romanization | রোমান হরফ | Clear for the Latin-letter reading aid? Or *ইংরেজি হরফে উচ্চারণ*? |
| 14 | Hangul | হাঙ্গুল | Or *হানগুল*? |
| 15 | Polite ↔ casual | ভদ্র ↔ ঘরোয়া | Is *ঘরোয়া* right for 반말 ("casual speech")? Or *অনানুষ্ঠানিক*? |
| 16 | streak | স্ট্রিক | Loan. Or *টানা দিন*? |
| 17 | Talker (level title) | আড্ডাবাজ | Fun or rude? Other titles in §3.4. |
| 18 | Master / Sensei | ওস্তাদ / গুরু | OK? |
| 19 | Weak spots | দুর্বল দিক | OK as a mode name? |
| 20 | Missed | ভুলগুলো | OK as a filter / mode name? |
| 21 | Shuffle / Merge in | এলোমেলো / মিলিয়ে নিন | Natural button words? |
| 22 | ⚡ 2-minute blitz | ⚡ 2 মিনিটের ঝটিকা | Is *ঝটিকা* understood as a speed round? |
| 23 | I get by | কাজ চালাতে পারি | Natural for language ability? |
| 24 | Dating, friends & nights out | ডেটিং, বন্ধু ও রাতের আড্ডা | OK in Bangladesh? |
| 25 | Working late — nice job / it's late, good work | রাত জেগে কাজ — দারুণ / রাত হয়েছে, ভালো খেটেছেন | Natural greetings? |
| 26 | Something went wrong: | কিছু একটা গোলমাল হয়েছে: | Or *সমস্যা হয়েছে:*? |
| 27 | Streak at risk | স্ট্রিক ঝুঁকিতে | Natural? |
| 28 | Hand-tuned for speakers of your language | আপনার ভাষার মানুষের জন্য যত্ন করে বানানো | Natural? |
| 29 | {n} cards (counts) | {1}টি কার্ড, with ASCII digits | Do ASCII digits + টি look odd? Would apps write ৫টি? |
| 30 | Su Mo Tu We Th Fr Sa | র সো ম বু বৃ শু শ | Readable in a narrow chart, or *রবি সোম মঙ্গল…*? |

Also worth a glance:
- *উল্টান* (flip);
- *সাথে বলুন ×3* (shadow);
- *ভেঙে দেখুন* (break it down);
- *শব্দগুলো সাজান* (Put the words in order);
- *শূন্যস্থান পূরণ করুন* (Fill the gap);
- *কোরিয়ান প্রথম পাঠ* (Korean starter);
- *নিজে উল্টাবে* (Auto-flip);
- *90 দিনে কথা বলার মতো* (Conversational in 90 days);
- *দ্রুত কাজ* (quick actions);
- *সাজিয়ে দিন* (Set me up);
- *মাপজোখ* (Calibration);
- *লিচ* (leech).
