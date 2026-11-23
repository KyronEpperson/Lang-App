# kn interface (tools/i18n/kn) — notes for the lead and the main build

Scope: `ui.json` (784 exact strings, 274 pattern templates) and the 39 English-roadmap titles in `roadmap.json`. Everything is standard written Kannada, ನೀವು + polite imperative (-ಇ / -ಇರಿ), NFC, Western digits. All wording is unreviewed by a native speaker.

## Terms fixed (one per concept)

| English | Kannada |
|---|---|
| Today / Practice / Review / Lessons / Read / Progress / Feedback (tab bar) | ಇಂದು / ಅಭ್ಯಾಸ / ಪುನರ್ಮನನ / ಪಾಠಗಳು / ಓದು / ಪ್ರಗತಿ / ಅನಿಸಿಕೆ |
| Drills | ಡ್ರಿಲ್ |
| review (prose, tab) / review (count label, button) | ಪುನರ್ಮನನ / ಮನನ, ಮನನ ಮಾಡಿ |
| due, left | ಬಾಕಿ |
| deck / card / session / level / course | ಡೆಕ್ / ಕಾರ್ಡ್ / ಸೆಷನ್ / ಲೆವೆಲ್ / ಕೋರ್ಸ್ |
| quiz | ಕ್ವಿಜ್ |
| quick check (lesson mini-test) | ಕಿರು ಪರೀಕ್ಷೆ |
| exam / blitz / round / pass n/3 | ಪರೀಕ್ಷೆ / ವೇಗದ ಸುತ್ತು / ಸುತ್ತು / ಹಂತ |
| learned / mastered / new / learning | ಕಲಿತದ್ದು / ಕರಗತ / ಹೊಸದು / ಕಲಿಕೆಯಲ್ಲಿ |
| streak (days) / streak (correct in a row) / streak shield | ಸತತ ದಿನ / ಸತತ ಸರಿ / ಸತತ ದಿನದ ರಕ್ಷಾಕವಚ |
| Again / Got it (flashcard) | ಮತ್ತೆ / ಗೊತ್ತು |
| Check / Skip / hint / answer / reason | ಪರಿಶೀಲಿಸಿ / ಬಿಟ್ಟುಬಿಡಿ / ಸುಳಿವು / ಉತ್ತರ / ಕಾರಣ |
| Type (verb, chip `⌨️ … EN`) | ಟೈಪ್ ಮಾಡಿ |
| Category | ವರ್ಗ |
| Text size | ಅಕ್ಷರ ಗಾತ್ರ |
| pronunciation, romanization, pronunciation hint | ಉಚ್ಚಾರಣೆ |
| polite ↔ casual | ಗೌರವ ↔ ಸಲುಗೆ |
| weak spots / hardest cards / mix / mixed | ದುರ್ಬಲ ಅಂಶಗಳು / ಅತಿ ಕಷ್ಟದ ಕಾರ್ಡ್‌ಗಳು / ಮಿಶ್ರಣ / ಮಿಶ್ರ |
| suspend / bury / leech | ತಡೆಹಿಡಿಯಿರಿ / ನಾಳೆಗೆ ಮುಂದೂಡಿ / ಮೊಂಡು ಕಾರ್ಡ್ |
| save (button) / saved (state) | ಉಳಿಸಿ / ಸೇವ್ ಆಗಿದೆ |
| delete / cancel / undo / close | ಅಳಿಸಿ / ರದ್ದುಮಾಡಿ / ಹಿಂಪಡೆಯಿರಿ / ಮುಚ್ಚಿ |
| copy / share / merge | ನಕಲಿಸಿ / ಹಂಚಿಕೊಳ್ಳಿ / ವಿಲೀನ |
| tap / long-press / swipe | ಒತ್ತಿ / ಒತ್ತಿ ಹಿಡಿಯಿರಿ / ಸ್ವೈಪ್ ಮಾಡಿ |
| account / device / nickname / note / phrase | ಖಾತೆ / ಸಾಧನ / ಅಡ್ಡಹೆಸರು / ಟಿಪ್ಪಣಿ / ವಾಕ್ಯ |
| goal / plan / badge / certificate | ಗುರಿ / ಪ್ಲಾನ್ / ಬ್ಯಾಡ್ಜ್ / ಪ್ರಮಾಣಪತ್ರ |
| accent (colour) | ಥೀಮ್ ಬಣ್ಣ |
| level titles | Sprout ಮೊಳಕೆ, Student ವಿದ್ಯಾರ್ಥಿ, Senior ಹಿರಿಯ, Pro ಪರಿಣತ, Master ನಿಪುಣ, Sensei ಆಚಾರ್ಯ; Beginner ಆರಂಭಿಕ, Talker ಮಾತುಗಾರ, Traveler ಪ್ರವಾಸಿ, Local ಸ್ಥಳೀಯ |
| weekday headers Su–Sa | ಭಾ ಸೋ ಮಂ ಬು ಗು ಶು ಶ |

## Rules applied

- Counts: one wording per pattern, identical for the singular and plural English templates. After a count slot only a bare noun (ಕಾರ್ಡ್, ಡೆಕ್, ದಿನ, ವಾರ, ಪಾಠ, ಅಂಕ, ಪ್ರಶ್ನೆ, ಸೆಕೆಂಡ್, ನಿಮಿಷ, ಪ್ಯಾಟರ್ನ್, ಸಂಭಾಷಣೆ, ಸಲ) or label + colon (ಬಾಕಿ: {1}, ಕಲಿತದ್ದು: {1}/{2}, ಮುಗಿದ ಪಾಠ: {1}/{2}). No agreeing verb, plural or case ending follows any count slot. All 200 patterns with a number slot were rendered at 0, 1, 2 and 21.
- Language-name slots stand at the line start before a colon, after a colon, or as a bare object ({1} ಕಲಿಯಿರಿ). No case ending touches a slot.
- ZWNJ (U+200C) only between a loanword ending in ್ and a Kannada ending or the second half of a compound (ಕಾರ್ಡ್‌ಗಳು, ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ, ಎಕ್ಸ್‌ಪೋರ್ಟ್). No ZWJ, no nukta, no Kannada digits, no danda.
- A quoted UI name takes its ending on a following noun: "ಪ್ರಗತಿ" ಟ್ಯಾಬ್‌ನಲ್ಲಿ, "ನನ್ನ ವಾಕ್ಯಗಳು" ಡೆಕ್‌ಗೆ.

## Deviations from the profile

- Profile §10 count table gives «ಕಿರು ಪರೀಕ್ಷೆ: {1}» for `{n} quiz(zes) · last {n}%`. The same section's glossary reserves ಕಿರು ಪರೀಕ್ಷೆ for the lesson quick check, so the deck quiz count is «ಕ್ವಿಜ್: {1} · ಹಿಂದಿನದು {2}%», keeping one term per concept.
- `Sensei` is ಆಚಾರ್ಯ, not ಗುರು, because the profile bans ಗುರು as slang addressed to the learner.

## For the main build

- `ಪುನರ್ಮನನ` is exactly 8 code points and the widest tab label. If it truncates at 390px, change the exact key `Review` to `ಮನನ` and leave every other string as it is.
- The validator lists 12 labels longer than 1.6 × the English. `Write it` (ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಬರೆಯಿರಿ) and `Try again` (ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ) are fixed by the profile; the rest can be shortened if a button overflows.
- The profile's request for an `html[lang=kn]` font and line-height rule in `src/app.html` still stands; subscripts in ಅಭ್ಯಾಸ, ಪ್ರಗತಿ, ಪುನರ್ಮನನ may clip at the nav size.
- Quiz chips read `ಓದಿ EN→ಕನ್ನಡ`, `ನೆನಪು ಕನ್ನಡ→EN`, `ಕೇಳಿ 🔊→ಕನ್ನಡ`, `⌨️ ಟೈಪ್ ಮಾಡಿ EN` (direction follows the hi and zh packs: target → native for reading).
- The roadmap basis string still says "adjusted for Korean speakers" in English; it is translated literally (ಕೊರಿಯನ್ ಭಾಷಿಕರಿಗೆ ಹೊಂದಿಸಿದ್ದು). If the kn-en course shows it, the English source should say Kannada speakers.
- `roadmap.json`: only the 39 entries with `"roadmap": "en"` are filled; `road.py` was not run.
