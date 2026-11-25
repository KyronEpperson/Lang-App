# LL-KEYS — interface keys requested from JS that are not static DOM text

Generated for the X → English pilot (docs/PILOT-SPEC.md §1.3). Every string below can be requested by the engine through `LL(en, ko)`,
the language home (`LLin`), the pre-native screens (`preBi` / `preLine`), the practice runner, or is written by JS into the DOM for non-Korean courses,
so a static scan of the markup will not find it. Merge all of them into `tools/i18n/keys.json`. A key missing from a pack shows in English
(pre-native lines and optional glosses are omitted instead).

**Totals: 118 unique exact keys + 21 patterns.** (The "ko pack" column says whether `packs/i18n-ko.js` already has a matching exact entry or pattern; the Korean UI itself does not need any of these because `LL` returns the inline Korean, but the column tells the pipeline which keys already exist in the frozen list.)

## How lookup works (engine contract)
- `LL(en, ko)`: Korean UI → the inline `ko` argument (unchanged). English UI → `en`. Any other UI language → `i18nGet(lang, en)` = the interface pack's
  `exact[en.trim()]`, else the **first** pattern in `patterns` whose regex matches the trimmed string (replacement uses `$1`, `$2`…), else `en`.
  This is the same lookup the DOM translator `t()` uses, so one entry serves both paths.
- Language home steps 2–3 use `LLin(chosenNative, en, ko)` — the same lookup, but for the language chosen in step 1 (before the course is switched).
- Before the native language is known (welcome / sign-in, language home step 1, intro title) the screen shows English plus ONE second language:
  the browser language when it is a live native other than English (`ja`, `es` once their courses exist), else Korean. The second-language text is the
  pack's translation of the English key; when the pack has no entry the line is English only.
- Slots: `{0}`, `{1}` below are filled by the engine; language-name slots are the target language's name **in the UI language** (from `Intl.DisplayNames`,
  e.g. `英語`, `Inglés`), so a Japanese pattern like `["^Type in (.+)…$", "$1で入力…"]` reads naturally.
- Patterns are tried in order and the first match wins: put narrow patterns before broad ones (`^(.+) progress$` must stay last).

## 1. Exact keys
| # | Key (exact English, trimmed) | Requested by | Where it shows | ko pack |
|---|---|---|---|---|
| 1 | `Three quick questions` | `LL` | Onboarding (pack courses) | — |
| 2 | `Just starting` | `LL` | Onboarding | — |
| 3 | `Some basics` | `LL` | Onboarding | — |
| 4 | `I get by` | `LL` | Onboarding | — |
| 5 | `How much time a day?` | `LL` | Onboarding | exact |
| 6 | `2 min` | `LL` | Onboarding | exact |
| 7 | `5 min` | `LL` | Onboarding | exact |
| 8 | `10 min` | `LL` | Onboarding | exact |
| 9 | `Set me up` | `LL` | Onboarding | exact |
| 10 | `Skip` | `LL` | Onboarding | exact |
| 11 | `First steps` | `LL` | Plan presets (courses without PLAN_PRESETS) | — |
| 12 | `Conversational in 90 days` | `LL` | Plan presets | exact |
| 13 | `quick` | `LL` | Plan list pill (Progress → plan) | — |
| 14 | `standard` | `LL` | Plan list pill | — |
| 15 | `long` | `LL` | Plan list pill | — |
| 16 | `Mixed` | `LL` | Practice quiz mode chips (pack courses; followed by ` EN→JA` etc.) | exact |
| 17 | `Read` | `LL` | Quiz mode chips | exact |
| 18 | `Recall` | `LL` | Quiz mode chips | — |
| 19 | `Listen` | `LL` | Quiz mode chips | exact |
| 20 | `Type` | `LL` | Quiz mode chips | exact |
| 21 | `Add some cards first.` | `LL` | Type drill, empty pool | — |
| 22 | `Word to learn` | `LL` | Pause scene tag (followed by ` · <deck>`) | — |
| 23 | `Due for review` | `LL` | Pause scene tag | — |
| 24 | `Idiom` | `LL` | Pause scene tag | — |
| 25 | `Planned` | `LL` | Lessons list: planned roadmap pill | — |
| 26 | `Practice` | `LL` | Lesson list badge / practice button (followed by ` 25%` or ` · 14`) | exact |
| 27 | `Correct!` | `LL`, `okW`/`noW` | Practice runner feedback; Right/wrong word in session, review, quiz, drill and lesson-check feedback (non-Korean courses) | — |
| 28 | `(second try)` | `LL` | Practice runner feedback | — |
| 29 | `Not quite.` | `LL` | Practice runner feedback | — |
| 30 | `Hint:` | `LL` | Practice runner feedback (followed by the hint) | — |
| 31 | `Try once more.` | `LL` | Practice runner feedback | — |
| 32 | `Type your answer first.` | `LL` | Practice runner feedback | — |
| 33 | `Answer:` | `LL` | Practice runner feedback (followed by the model answer) | — |
| 34 | `Choose the right one` | `LL` | Practice runner item heading | — |
| 35 | `Put the words in order` | `LL` | Practice runner item heading | — |
| 36 | `Fill the gap` | `LL` | Practice runner item heading | — |
| 37 | `Write it` | `LL` | Practice runner item heading | — |
| 38 | `tap the words` | `LL` | Practice runner heading suffix (shown as `<heading> · tap the words`) | — |
| 39 | `tap the answer` | `LL` | Practice runner heading suffix | — |
| 40 | `Your answer` | `LL` | Practice runner aria-label | — |
| 41 | `Tap the words below` | `LL` | Practice runner tiles placeholder | — |
| 42 | `Check` | `LL` | Practice runner button | exact |
| 43 | `The missing part…` | `LL` | Practice runner fill placeholder | — |
| 44 | `Lesson` | `LL` | Practice runner top bar | — |
| 45 | `Show the rule` | `LL` | Practice runner top bar | — |
| 46 | `Next` | `LL` | Practice runner | exact |
| 47 | `See results` | `LL` | Practice runner | — |
| 48 | `The rule` | `LL` | Practice rule sheet aria-label | — |
| 49 | `Back to practice` | `LL` | Practice rule sheet | — |
| 50 | `First-try score` | `LL` | Practice end screen (followed by ` · 80% · `) | — |
| 51 | `best` | `LL` | Practice end screen (followed by ` 90%`) | — |
| 52 | `Missed on the first try` | `LL` | Practice end screen | — |
| 53 | `Every item right on the first try.` | `LL` | Practice end screen | — |
| 54 | `Practice again` | `LL` | Practice end screen | pattern |
| 55 | `Back to lesson` | `LL` | Practice end screen | — |
| 56 | `Added by you` | `LL` | Custom phrase default note | exact |
| 57 | `Aa pronunciation: on` | `LL` | Pronunciation toggle button (pack courses) | exact |
| 58 | `Aa pronunciation: off` | `LL` | Pronunciation toggle button | exact |
| 59 | `Correct` | `okW` | Lesson check feedback | — |
| 60 | `Not quite` | `noW` | Review multiple-choice feedback | exact |
| 61 | `Close` | language home `LLin`, pre-native `preBi`/`preLine` | Language home close button aria-label (steps 2–3); Language home close button aria-label (step 1) | exact |
| 62 | `← Back` | language home `LLin`, pre-native `preBi`/`preLine` | Language home step 2 back button; Welcome steps 2–3 back button | exact |
| 63 | `What do you want to learn?` | language home `LLin` | Language home step 2 heading | exact |
| 64 | `Current course` | language home `LLin` | Language home step 2 current-course tag | — |
| 65 | `Coming soon · tap to preview` | language home `LLin` | Language home step 2 locked list heading (after 🔒) | — |
| 66 | `Coming soon` | language home `LLin`, pre-native `preBi`/`preLine` | Language home step 2 aria-label / toast suffix; Language home step 1 locked list heading, aria-label, locked-row titles and toast | exact |
| 67 | `The order may change.` | language home `LLin` | Language home step 3 roadmap note | — |
| 68 | `Choose your language` | `LL`, pre-native `preBi`/`preLine` | Language home aria-label once the course is known; Language home aria-label | — |
| 69 | `How should we save your progress?` | pre-native `preBi`/`preLine` | Welcome step 1 second line | — |
| 70 | `Email` | pre-native `preBi`/`preLine` | Welcome step 1 (after 📧) | — |
| 71 | `Saves across all your devices` | pre-native `preBi`/`preLine` | Welcome step 1 | — |
| 72 | `Nickname` | pre-native `preBi`/`preLine` | Welcome step 1 (after 👤) | exact |
| 73 | `This device only — lost if browser data is cleared` | pre-native `preBi`/`preLine` | Welcome step 1 warning line | — |
| 74 | `Privacy & terms` | pre-native `preBi`/`preLine` | Welcome step 1 link | exact |
| 75 | `Save across devices` | pre-native `preBi`/`preLine` | Welcome step 2 heading | exact |
| 76 | `Send sign-in link` | pre-native `preBi`/`preLine` | Welcome step 2 button | exact |
| 77 | `Check your email` | pre-native `preBi`/`preLine` | Welcome step 2 message (bold part) | — |
| 78 | `Start on this device while I wait` | pre-native `preBi`/`preLine` | Welcome step 2 button | exact |
| 79 | `What should we call you?` | pre-native `preBi`/`preLine` | Welcome step 3 heading | exact |
| 80 | `Start learning` | pre-native `preBi`/`preLine` | Welcome step 3 button | exact |
| 81 | `This device only — lost if browser data is cleared. Add an email later in Progress.` | pre-native `preBi`/`preLine` | Welcome step 3 warning line | — |
| 82 | `What language do you speak?` | pre-native `preBi`/`preLine` | Language home step 1 second line | exact |
| 83 | `Hello` | pre-native `preBi`/`preLine` | Intro animation title before the native language is known (`Hello · …, <nick>!`) | — |
| 84 | `Learn a language, 5 minutes a day` | pre-native `preBi`/`preLine` | Intro animation subtitle before the native language is known | — |
| 85 | `Daily goal reached 🎉` | DOM translator (JS-built text) | Goal toast for non-Korean courses (DOM translator; was `목표 달성! Daily goal reached 🎉`) | — |
| 86 | `Language` | DOM translator (JS-built text) | Header language button title for non-Korean courses (was `Language · 언어`) | exact |
| 87 | `Working late — nice job` | `i18nGet` (optional gloss) | Today greeting gloss under the English greeting (empty when missing) | — |
| 88 | `Good morning` | `i18nGet` (optional gloss) | Today greeting gloss | — |
| 89 | `Good afternoon` | `i18nGet` (optional gloss) | Today greeting gloss | — |
| 90 | `Good evening` | `i18nGet` (optional gloss) | Today greeting gloss | — |
| 91 | `Paused` | `i18nGet` (optional gloss) | Pause scene gloss under the English line (empty when missing) | exact |
| 92 | `Learning…` | `i18nGet` (optional gloss) | Pause scene gloss | exact |
| 93 | `You've got this!` | `i18nGet` (optional gloss) | Pause scene gloss | exact |
| 94 | `You're doing great` | `i18nGet` (optional gloss) | Pause scene gloss | exact |
| 95 | `Take your time` | `i18nGet` (optional gloss) | Pause scene gloss (reserved: in PAUSE_EXTRA.en.extra, not shown today) | exact |
| 96 | `Tap to start again` | `i18nGet` (optional gloss) | Pause scene gloss (reserved) | exact |
| 97 | `Sprout` | `i18nGet` (optional gloss) | Level title gloss when a course pack has no TITLES (engine fallback `[level, English, translation]`; empty when missing) | exact |
| 98 | `Student` | `i18nGet` (optional gloss) | Level title gloss when a course pack has no TITLES (engine fallback `[level, English, translation]`; empty when missing) | exact |
| 99 | `Senior` | `i18nGet` (optional gloss) | Level title gloss when a course pack has no TITLES (engine fallback `[level, English, translation]`; empty when missing) | exact |
| 100 | `Pro` | `i18nGet` (optional gloss) | Level title gloss when a course pack has no TITLES (engine fallback `[level, English, translation]`; empty when missing) | exact |
| 101 | `Master` | `i18nGet` (optional gloss) | Level title gloss when a course pack has no TITLES (engine fallback `[level, English, translation]`; empty when missing) | exact |
| 102 | `Sensei` | `i18nGet` (optional gloss) | Level title gloss when a course pack has no TITLES (engine fallback `[level, English, translation]`; empty when missing) | exact |

WS-1 (2.122.0): the welcome screen is two steps. Step 1 = nickname (rows 72, 74, 79 plus `Continue` and `I already have an account`); step 2 = optional email (rows 62, 70, 76, 77, 78, 81 plus `Save your progress across devices?`, `Optional. Add your email and your progress follows you to any phone or computer. No password.`, `Skip for now`; row 75 is the heading on the "I already have an account" path). Rows 69, 71, 73 and 80 are no longer shown there.

## 2. Engine strings set by `applyCourseUi` for pack courses (DOM-translated, not in the static markup)
These come from `ENGINE_I18N.ko` in `src/app.html` (the engine's own Korean table) plus the generic-course tour step. For other languages they must come from the interface pack.
`English (required)` and `English, pronunciation, meaning, note — …` bake the target-language name into an exact key (pilot limitation: correct for every
`<native>-en` course; a future non-English target needs a pattern `^(.+) \(required\)$`).

| # | Key | ko pack |
|---|---|---|
| 103 | `Drills` | exact |
| 104 | `Listen, type, role-play and say it out loud — practice with the cards you have unlocked. Your results here also count in sessions.` | — (ENGINE_I18N only) |
| 105 | `Show pronunciation hints in practice` | — (ENGINE_I18N only) |
| 106 | `Blur pronunciation hints in Browse` | — (ENGINE_I18N only) |
| 107 | `Pronunciation hint (optional)` | — (ENGINE_I18N only) |
| 108 | `English (required)` | exact |
| 109 | `English, pronunciation, meaning, note — one per line (pronunciation/note optional)` | — (ENGINE_I18N only) |
| 110 | `Change course` | — (ENGINE_I18N only) |
| 111 | `Course` | exact |
| 112 | `Change language` | exact |
| 113 | `⌨️ Type it` | exact |
| 114 | `🎧 Listen` | exact |
| 115 | `🎭 Role-play` | exact |
| 116 | `🗣 Say it` | exact |
| 117 | `listen · type · role-play` | — (ENGINE_I18N only) |
| 118 | `Listening, typing, role-play and saying it out loud — pick a drill.` | exact |

## 3. Patterns (strings built with numbers or names)
| # | Key with slots | Suggested anchored regex (pack `patterns[i][0]`) | Slots | Example the engine produces | Where | ko pack |
|---|---|---|---|---|---|---|
| P1 | `Now learning {0} · progress saved per course` | `^Now learning (.+) · progress saved per course$` | {0} = target language name in the UI language (英語) | `Now learning 英語 · progress saved per course` | Course switched toast (`LL`) | — |
| P2 | `How much {0} do you know?` | `^How much (.+) do you know\?$` | {0} = target language name in the UI language | `How much 英語 do you know?` | Onboarding question (`LL`) | — |
| P3 | `What do you want {0} for?` | `^What do you want (.+) for\?$` | {0} = target language name in the UI language | `What do you want 英語 for?` | Onboarding question (`LL`) | — |
| P4 | `Set up. Start with {0}.` | `^Set up\. Start with (.+)\.$` | {0} = deck name (course content, already in the learner's language) | `Set up. Start with あいさつ.` | Onboarding done toast (`LL`) | pattern |
| P5 | `type it in {0}` | `^type it in (.+)$` | {0} = target language name in the UI language | `type it in 英語` | Type drill / typed quiz instruction (`LL`) | — |
| P6 | `Type in {0}…` | `^Type in (.+)…$` | {0} = target language name in the UI language | `Type in 英語…` | Type drill / typed quiz / say-it / practice placeholder (`LL`) | — |
| P7 | `Type the {0}, or tap Check again to give up.` | `^Type the (.+), or tap Check again to give up\.$` | {0} = target language name in the UI language | `Type the 英語, or tap Check again to give up.` | Typed quiz empty-submit warning (`LL`) | — |
| P8 | `Planned · {0} more lessons` | `^Planned · (\d+) more lessons$` | {0} = count (always ≥ 1; English uses the plural form even for 1) | `Planned · 6 more lessons` | Lessons list: planned roadmap heading (`LL`) | — |
| P9 | `Best first try {0}% · last {1}% · 1 run` | `^Best first try (\d+)% · last (\d+)% · 1 run$` | {0},{1} = percent 0–100 | `Best first try 80% · last 60% · 1 run` | Lesson practice entry, after a run (singular) (`LL`) | — |
| P10 | `Best first try {0}% · last {1}% · {2} runs` | `^Best first try (\d+)% · last (\d+)% · (\d+) runs$` | {0},{1} = percent; {2} = run count ≥ 2 | `Best first try 80% · last 60% · 3 runs` | Lesson practice entry, after runs (plural; put AFTER the singular pattern or keep both anchored as here) (`LL`) | — |
| P11 | `{0} items · from choosing to typing it yourself` | `^(\d+) items · from choosing to typing it yourself$` | {0} = item count (≥ 12 in shipped packs) | `14 items · from choosing to typing it yourself` | Lesson practice entry, before any run (`LL`) | — |
| P12 | `No {0} keyboard? Use tiles` | `^No (.+) keyboard\? Use tiles$` | {0} = target language name in the UI language | `No 英語 keyboard? Use tiles` | Practice runner: tiles toggle (`LL`) | — |
| P13 | `Learning {0} 5 minutes a day with Lang App {1}` | `^Learning (.+) 5 minutes a day with Lang App (\S+)$` | {0} = target language name in the UI language; {1} = flag emoji | `Learning 英語 5 minutes a day with Lang App 🇺🇸` | Share sheet text (`LL`) | — |
| P14 | `Learn {0}, 5 minutes a day` | `^Learn (.+), 5 minutes a day$` | {0} = target language name in the UI language | `Learn 英語, 5 minutes a day` | Intro animation subtitle (pack courses) (`LL`) | — |
| P15 | `Coming soon · {0} lessons planned` | `^Coming soon · (\d+) lessons planned$` | {0} = planned lesson count (≥ 12) | `Coming soon · 27 lessons planned` | Language home step 3 (locked target preview) (language home `LLin`) | — |
| P16 | `{0} · day {1} 🔥` | `^(.+) · day (\d+) 🔥$` | {0} = greeting gloss (already translated); {1} = streak days | `おはようございます · day 3 🔥` | Today streak line when the greeting gloss exists (existing ko pattern) (DOM translator (JS-built text)) | pattern |
| P17 | `day {0} 🔥` | `^day (\d+) 🔥$` | {0} = streak days | `day 3 🔥` | Today streak line when the pack has no greeting gloss (DOM translator (JS-built text)) | — |
| P18 | `Level up! Level {0} · {1} 🎉` | `^Level up! Level (\d+) · (.+?) 🎉$` | {0} = level; {1} = level title from the course pack's TITLES (`<English> <native>`) | `Level up! Level 2 · Beginner 初心者 🎉` | Level-up toast for non-Korean courses (DOM translator; Korean side keeps `^레벨 업! Level …`) (DOM translator (JS-built text)) | — |
| P19 | `Merged into {0}. {1} cards of progress were new.` | `^Merged into (.+)\. (\d+) cards of progress were new\.$` | {0} = course target name in the UI language; {1} = count | `Merged into 英語. 3 cards of progress were new.` | Import toast (existing ko pattern; slot is now the UI-language name for non-Korean UIs) (DOM translator (JS-built text)) | pattern |
| P20 | `{0} progress` | `^(.+) progress$` | {0} = target name in the UI language — first-match: keep this LAST, it is very broad | `英語 progress` | Share-file title (existing ko pattern; slot is now the UI-language name) (DOM translator (JS-built text)) | pattern |
| P21 | `Change language · {0}` | `^Change language · (.+)$` | {0} = target name in the UI language | `Change language · 英語` | Header course button aria-label (existing ko pattern) (DOM translator (JS-built text)) | pattern |

Plural notes: P9/P10 are the only English plural split (P16/P17 `day N` stay singular-form in English for every N; translate as a counter) (`1 run` / `N runs`); languages that inflect differently can map both to one form or add more
patterns (e.g. Spanish `1 intento` / `N intentos`). P8 (`Planned · N more lessons`) and P15 (`Coming soon · N lessons planned`) use the English plural for every N
(N ≥ 1 for P8, N ≥ 12 for P15 in shipped roadmaps); the pack should still read correctly at 1 and 2 (spec §4).

## 4. Deliberately not translated (pilot limitations)
- Roadmap data (stage names, lesson titles, variant, basis in `packs/roadmaps.js`) and planned-lesson titles: Korean UI → Korean, every other UI → English.
- Pre-native English lines themselves (the first language on the welcome / step-1 screens is always English) and the locked-row titles
  `<English language name> · coming soon` (the English half).
- Quiz-mode chips show the language codes (`EN→JA`, `JA→EN`); only the Korean UI uses `한`.
- The level title in the level-up toast and Progress comes from the course pack's `TITLES` (`[level, English, native]`) — content, not a key.
- Course content (deck names, GOALS labels, PAUSE set names, lesson titles) comes from the course pack in the learner's language.
