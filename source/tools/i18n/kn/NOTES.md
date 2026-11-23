# kn interface (tools/i18n/kn) — notes for the lead and the main build

Scope: `ui.json` (784 exact strings, 274 pattern templates) and the 39 English-roadmap titles in `roadmap.json`. Everything is standard written Kannada, ನೀವು + polite imperative (-ಇ / -ಇರಿ), NFC, Western digits. All wording is unreviewed by a native speaker.

## Terms fixed (one per concept)

| English | Kannada |
|---|---|
| Today / Practice / Review / Lessons / Read / Progress / Feedback (tab bar) | ಇಂದು / ಅಭ್ಯಾಸ / ರಿವ್ಯೂ / ಪಾಠಗಳು / ಓದು / ಪ್ರಗತಿ / ಅನಿಸಿಕೆ |
| Drills | ಡ್ರಿಲ್ |
| review (prose, tab, count label) / review (button) | ರಿವ್ಯೂ (ರಿವ್ಯೂಗೆ, ರಿವ್ಯೂನಲ್ಲಿ) / ರಿವ್ಯೂ ಮಾಡಿ |
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
| save (button) / saved, saving (state) | ಉಳಿಸಿ / ಉಳಿಸಲಾಗಿದೆ, ಉಳಿಸಲಾಗುತ್ತಿದೆ… (ಸೇವ್ is not used) |
| delete / cancel / undo / close | ಅಳಿಸಿ / ರದ್ದುಮಾಡಿ / ಹಿಂಪಡೆಯಿರಿ / ಮುಚ್ಚಿ |
| copy / paste / share / merge | ನಕಲಿಸಿ / ಅಂಟಿಸಿ / ಹಂಚಿಕೊಳ್ಳಿ / ವಿಲೀನ |
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

- The Review tab is `ರಿವ್ಯೂ` (pre-merge review 2026-11-23; it replaced the Sanskritic 8-code-point `ಪುನರ್ಮನನ`, so the truncation risk at 390px is gone).
- The validator lists 12 labels longer than 1.6 × the English. `Write it` (ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಬರೆಯಿರಿ) and `Try again` (ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ) are fixed by the profile; the rest can be shortened if a button overflows.
- The profile's request for an `html[lang=kn]` font and line-height rule in `src/app.html` still stands; subscripts in ಅಭ್ಯಾಸ, ಪ್ರಗತಿ may clip at the nav size.
- Quiz chips read `ಓದಿ EN→ಕನ್ನಡ`, `ನೆನಪು ಕನ್ನಡ→EN`, `ಕೇಳಿ 🔊→ಕನ್ನಡ`, `⌨️ ಟೈಪ್ ಮಾಡಿ EN` (direction follows the hi and zh packs: target → native for reading).
- The roadmap basis string still says "adjusted for Korean speakers" in English; it is translated literally (ಕೊರಿಯನ್ ಭಾಷಿಕರಿಗೆ ಹೊಂದಿಸಿದ್ದು). If the kn-en course shows it, the English source should say Kannada speakers.
- `roadmap.json`: only the 39 entries with `"roadmap": "en"` are filled; `road.py` was not run.

## Review (cold reviewer, 2026-11-23)

- 20 `t` values changed in ui.json and 4 in roadmap.json; nothing else in either file changed. Details: tools/content/kn/REVIEW.md.
- Level titles: the interface ladder (ಆರಂಭಿಕ, ವಿದ್ಯಾರ್ಥಿ, ಮಾತುಗಾರ, ಪ್ರವಾಸಿ, ಸ್ಥಳೀಯ, ಪರಿಣತ, ನಿಪುಣ) is now also `TITLES` in tools/content/kn/meta.js.
- Plan names agree with meta.js: `Trip to Korea` = ವಿದೇಶ ಪ್ರವಾಸದ ತಯಾರಿ, `Make friends & date` = ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಸ್ನೇಹ ಬೆಳೆಸಿ, `Conversational in 90 days` = 90 ದಿನದಲ್ಲಿ ಮಾತುಕತೆಗೆ ಸಿದ್ಧ. Travel as a goal is ಪ್ರವಾಸ in both places.
- ಕ್ವಿಜ್ = deck quiz, ಕಿರು ಪರೀಕ್ಷೆ = the 3-question lesson check: confirmed in every string.
- "Goal reached" strings now address the learner (ಗುರಿ ತಲುಪಿದ್ದೀರಿ); `Go` on the deck-of-the-week link is ತೆರೆಯಿರಿ; `Back to practice / lesson` is ಅಭ್ಯಾಸಕ್ಕೆ ಮರಳಿ / ಪಾಠಕ್ಕೆ ಮರಳಿ.
- Roadmap: ವರ್ಣಮಾಲೆ (the course word) replaces ಅಕ್ಷರಮಾಲೆ; «ಮೂಲಪಾಠ» (which means "original text") is now «ಮೊದಲ ಹೆಜ್ಜೆ»; the conditional titles follow the lesson titles (if ವಾಕ್ಯ 1; if ವಾಕ್ಯ 2 ಮತ್ತು 3).
- ZWNJ policy as above, checked by script in every `t`: every ZWNJ follows ್ on a loanword and precedes a Kannada letter.

## Pre-merge review, 2026-11-23

Base is this dictionary; six picks from the comparison with the independently written `ko-worded/ui.json` were applied (49 `t` values changed, nothing else):
- Review: ಪುನರ್ಮನನ / ಮನನ → **ರಿವ್ಯೂ** everywhere (tab, prose, counts, buttons ರಿವ್ಯೂ ಮಾಡಿ).
- Privacy: ಗೋಪ್ಯತೆ → **ಗೌಪ್ಯತೆ** (the standard privacy term, as in ಗೌಪ್ಯತಾ ನೀತಿ).
- Paste: ಪೇಸ್ಟ್ ಮಾಡಿ → **ಅಂಟಿಸಿ** (pairs with ನಕಲಿಸಿ for Copy).
- Saved states: ಸೇವ್ ಆಗಿದೆ / ಸೇವ್ ಮಾಡಲು … → **ಉಳಿಸಲಾಗಿದೆ / ಉಳಿಸಲು …** (one verb with the ಉಳಿಸಿ button).
- `Got it — quiz me`: ಗೊತ್ತು → **ಗೊತ್ತಾಯಿತು** (= understood, after an explanation); the flashcard `Got it` stays ಗೊತ್ತು.
- `What should we call you?`: ಕರೆಯಬೇಕು? → **ಕರೆಯಲಿ?** (matches the deck card «ನಿಮ್ಮನ್ನು ಏನೆಂದು ಕರೆಯಲಿ?»).
Kept from this base after the comparison: ಅನಿಸಿಕೆ (feedback), ಇಂಪೋರ್ಟ್ / ಎಕ್ಸ್‌ಪೋರ್ಟ್, ಹಿಂಪಡೆಯಿರಿ (undo; ರದ್ದುಮಾಡಿ is cancel), ಸತತ ದಿನ, ಊಹೆಯ ನಿಖರತೆ, ರೋಲ್-ಪ್ಲೇ, ನನ್ನ ವಾಕ್ಯಗಳು, ಡೆಕ್‌ಗಳು, ಎಲ್ಲ, ಪದದ ಭಾಗಗಳು. Not checked by a native speaker.
