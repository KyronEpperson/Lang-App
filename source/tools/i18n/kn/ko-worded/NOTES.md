# Kannada (kn) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English.
- The generated pack is `packs/i18n-kn.js`.

Build: `python3 tools/i18n/gen.py kn && node tools/i18n/validate.js kn`. It passes with 1 warning class:
- 16 labels that may overflow (the validator counts code points, and Kannada vowel signs and viramas are code points of their own, so a Kannada label looks shorter on screen than its count suggests).
- The "identical to English" check does not run for `kn`, because the validator sees a distinct script. Seven strings are still identical to English on purpose: `Enter`, `XP`, `A−`, `A+`, `you@example.com`, `DELETE`, `Lang App` (§2).

The only course this interface serves is **kn-ko** (Korean for Kannada speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: ಕೊರಿಯನ್, ಹಂಗುಲ್, ರೋಮನ್ ಲಿಪಿ. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (ಇಂಗ್ಲಿಷ್), as tl and ceb did. They are only shown in an English course, which Kannada speakers do not have. The Hindi dictionary (`hi/`) rewrote these keys for English, so it was used only for term ideas, never for the Korean/English wording.

No `docs/profiles/kn-ko.md` exists yet. Register follows the launch brief and the house style of `docs/profiles/en-kn.md` (§2.3 ನೀವು, §2.5 everyday Kannada, §2.8 text conventions).

**Author: not a native speaker of Kannada.** Everything here needs a Kannada speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** everyday modern Kannada as Karnataka apps write it (the written standard of Android / Google Kannada UI, not the spoken forms the en-kn course teaches). Common English tech loans are written in Kannada script.
- **Address:** ನೀವು everywhere, never ನೀನು. Verbs take the polite plural (-ಈರಿ: ಕಲಿಯುತ್ತೀರಿ, ನೋಡಿದ್ದೀರಿ).
- **Commands:** buttons and instructions use the polite -ಇ command, the way Kannada apps do: ಆರಿಸಿ, ತೆರೆಯಿರಿ, ಮುಚ್ಚಿ, ಉಳಿಸಿ, ಅಳಿಸಿ, ಹಂಚಿಕೊಳ್ಳಿ, ನಕಲಿಸಿ, ಅಂಟಿಸಿ, ಆಲಿಸಿ, ಹೇಳಿ, ಬಿಟ್ಟುಬಿಡಿ, ರದ್ದುಮಾಡಿ, ಮುಂದುವರಿಸಿ.
  - English verbs take ಮಾಡಿ: ಟ್ಯಾಪ್ ಮಾಡಿ, ಸ್ವೈಪ್ ಮಾಡಿ, ಟೈಪ್ ಮಾಡಿ, ಸೈನ್ ಇನ್ ಮಾಡಿ, ಸಿಂಕ್ ಮಾಡಿ, ರಿವ್ಯೂ ಮಾಡಿ, ರೀಸೆಟ್, ರೀಲೋಡ್, ಅನ್ಲಾಕ್ ಮಾಡಿ, ಶಫಲ್ ಮಾಡಿ.
  - Very short labels may drop ಮಾಡಿ (ಪ್ಲೇ, ರೀಲೋಡ್, ಶಫಲ್, ಸೈನ್ ಔಟ್, ಟೈಪ್ ಶುರು).
  - Status messages use the passive -ಲಾಗಿದೆ / -ಲಾಗುತ್ತಿದೆ (ಉಳಿಸಲಾಗಿದೆ, ಅಳಿಸಲಾಗುತ್ತಿದೆ…, ನಕಲಿಸಲಾಗಿದೆ) or ಆಗಿದೆ with loans (ಸಿಂಕ್ ಆಗಿದೆ, ಸೈನ್ ಇನ್ ಆಗಿದೆ).
- **Verb forms:** written standard (ಹೋಗುತ್ತದೆ, ಮಾಡುವುದಿಲ್ಲ), not the spoken ಹೋಗುತ್ತೆ / ಮಾಡಲ್ಲ. Two short buttons use the everyday ಗೊತ್ತಿದೆ / ಗೊತ್ತಾಯಿತು.
- **Counts:** after a slot number the noun stays **singular**: `{1} ಕಾರ್ಡ್`, `{1} ದಿನ`, `{1} ಡೆಕ್`, `{1} ವಾರ`. Kannada normally leaves a non-human noun singular after a numeral (ಐದು ಪುಸ್ತಕ, ಐವತ್ತು ರೂಪಾಯಿ), so this reads correctly at 1 and at 2+, and singular and plural templates share one text. Plurals without a number use -ಗಳು / -ಉಗಳು (ಕಾರ್ಡುಗಳು, ಡೆಕ್ಕುಗಳು).
- **Nothing is glued to a slot.** No case ending is written straight after `{k}`, because the right form depends on the number word or name a digit hides (ನಾಲ್ಕಕ್ಕೆ, ಐದಕ್ಕೆ). Templates are reworded instead: `ಲೆವೆಲ್ {2} ತಲುಪಲು`, `{1} ಭಾಷೆಯಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ`, `ಮೊದಲು ಇದು: {1}`.
- **Loans before an ending** take -ಇ / -ಇನ or -ಉ, as en-kn §2.2 does (ಡೆಕ್ಕಿನಲ್ಲಿ, ಕಾರ್ಡಿಗೆ, ಡೀಫಾಲ್ಟಿಗೆ, ಕೋರ್ಸಿನ, ಆ್ಯಪಿನ, ಬ್ರೌಸರಿನಲ್ಲಿ, ಡೇಟಾಬೇಸಿನಲ್ಲಿ, ಲ್ಯಾಪ್ಟಾಪಿನಲ್ಲೂ, ಸೆಷನ್ನುಗಳು, ಬ್ಯಾಡ್ಜುಗಳು, ಪೋಸ್ಟುಗಳು). Where that would look strange (drill, quiz, bug, level, mode, backup) the loan stays singular or the sentence is reworded: the headings Drills / DRILLS are ಡ್ರಿಲ್, like the singular tab names of tl. A Latin word never takes a Kannada ending, except the brand in ‘Lang Appಗೆ ಸ್ವಾಗತ’ (§4).
- **No ZWNJ / ZWJ** anywhere. That is the house rule for course strings in en-kn §2.8; I applied it to the interface too, for one rule across the app (the build script strips and lints them). The cost: loans with a virama inside the word now render as a conjunct, where Kannada web text usually shows the virama with a ZWNJ: ಪಾಸ್ವರ್ಡ್, ವೆಬ್ಸೈಟ್, ಆಫ್ಲೈನ್, ಇನ್ಬಾಕ್ಸ್, ಅನ್ಲಾಕ್, ಡೌನ್ಲೋಡ್, ಲ್ಯಾಪ್ಟಾಪ್. They read correctly, but whether shipped Kannada apps write them this way is on the check list (§4).
- **Script:** Kannada script throughout, Western digits (the app inserts digits), no Kannada digits, ASCII punctuation, no danda. Latin only for: Lang App, keys and codes (Enter, Esc, Ctrl+K, DELETE), formats (CSV, TSV, PNG, KB), XP / Lv, UI, service names (Supabase, Vercel Web Analytics), the romanization examples (ga, han), A / B (dialogue speakers), Aa, A− / A+, the e-mail placeholder, and the book titles in the roadmap basis line (TTMIK, Sogang, How to Study Korean).
- **Grammar terms:** Kannada school grammar terms (Kannada speakers learn these at school, unlike Filipino speakers): ಕ್ರಿಯಾಪದ, ನಾಮಪದ, ಸರ್ವನಾಮ, ಗುಣವಾಚಕ, ಧಾತು, ನಿಘಂಟು ರೂಪ, ವರ್ತಮಾನ, ಭೂತಕಾಲ, ಭವಿಷ್ಯತ್ಕಾಲ, ಸ್ವರ, ವ್ಯಂಜನ, ಕೊನೆಯ ವ್ಯಂಜನ, ಅಕ್ಷರ, ಎಣಿಕೆ ಪದ, ಪ್ರಶ್ನಾರ್ಥಕ ಪದ, ಗೌರವಸೂಚಕ, ಅನಿಯಮಿತ, ಮಾದರಿ (pattern), ವ್ಯಾಕರಣ. Course writers should use the same words (§3).
- **Quiz mode words** are used the same everywhere: Read = ಓದು; Listen = ಆಲಿಕೆ (mode noun) / ಆಲಿಸಿ (button); Recall = ನೆನಪು; Type = ಟೈಪ್; Mixed (quiz mode) = ಮಿಶ್ರ; the Mix pool (5 at a time) = ಮಿಶ್ರಣ; Shuffle = ಶಫಲ್; Merge = ವಿಲೀನಗೊಳಿಸಿ / ವಿಲೀನವಾಗಿದೆ (never ಮಿಶ್ರ); pass (1/3) = ಸುತ್ತು; passed = ಪಾಸ್.

## 2. Kept in Latin, and loans kept in Kannada script (closed lists)

Kept identical to English (Latin): `Lang App`, `Enter`, `Esc`, `Ctrl+K`, `DELETE` (the engine compares the typed text), `XP`, `Lv`, `UI` (in 한국어 UI), `CSV`, `TSV`, `PNG`, `KB`, `A−`, `A+`, `Aa`, `you@example.com`, `Supabase`, `Vercel Web Analytics`, the romanization samples `ga`, `han`, and speakers `A`, `B`.

English loans in Kannada script:
- Tech and app terms: ಆ್ಯಪ್, ಇಮೇಲ್, ಸೈನ್ ಇನ್ / ಸೈನ್ ಔಟ್, ಸಿಂಕ್, ಬ್ಯಾಕಪ್, ಫೈಲ್, ಲಿಂಕ್, ಕೋಡ್, ಪಾಸ್ವರ್ಡ್, ಬ್ರೌಸರ್, ಸೈಟ್ ಡೇಟಾ, ಡೇಟಾಬೇಸ್, ಆನ್ / ಆಫ್, ಆಫ್ಲೈನ್, ಇನ್ಬಾಕ್ಸ್, ಸ್ಪ್ಯಾಮ್, ಅಡ್ಮಿನ್, ಡೆವಲಪರ್, ಬಗ್, ಕ್ರ್ಯಾಶ್, ಅನಾಲಿಟಿಕ್ಸ್, ಕುಕೀ, ಪ್ರೊಫೈಲ್, ಪೋಸ್ಟ್, ವೆಬ್ಸೈಟ್, ಸೆಟ್ಟಿಂಗ್ಸ್, ಸೆಟಪ್, ಡೀಫಾಲ್ಟ್, ಮೆನು, ಬಟನ್, ಟ್ಯಾಬ್, ಕೀಬೋರ್ಡ್, ಮೋಡ್, ಆಡಿಯೋ, ಕ್ಯಾಲೆಂಡರ್, ಫೋನ್, ಲ್ಯಾಪ್ಟಾಪ್, ಹೋಮ್ ಸ್ಕ್ರೀನ್, ಟೈಲ್ಸ್, ಡೌನ್ಲೋಡ್, ರೈಟ್-ಕ್ಲಿಕ್, ರೀಸೆಟ್, ರೀಲೋಡ್, ರಿಫ್ರೆಶ್, ಪ್ಲೇ.
- Learning terms: ಕಾರ್ಡ್, ಫ್ಲ್ಯಾಶ್ ಕಾರ್ಡ್ (two words), ಡೆಕ್, ಕ್ವಿಜ್, ಡ್ರಿಲ್, ಮಿನಿ ಡ್ರಿಲ್, ಬ್ಲಿಟ್ಜ್, ಸೆಷನ್, ರಿವ್ಯೂ, ಸ್ಟ್ರೀಕ್, ಲೆವೆಲ್, ಕಾಂಬೊ, ಬ್ಯಾಡ್ಜ್, ಪಾಸ್, ಕೋರ್ಸ್, ಕೆ-ಡ್ರಾಮಾ, ಡೇಟಿಂಗ್, ಪ್ರೊ.

Kannada words used instead of English loans (where Kannada apps do the same): ರಫ್ತು / ಆಮದು (export / import), ಹಂಚಿಕೊಳ್ಳಿ (share), ನಕಲಿಸಿ / ಅಂಟಿಸಿ (copy / paste), ಅಳಿಸಿ (delete), ಉಳಿಸಿ (save), ಹುಡುಕಿ (search), ಖಾತೆ (account), ಸಾಧನ (device), ಸಂಗ್ರಹ (storage), ಗೌಪ್ಯತೆ (privacy), ಅಭಿಪ್ರಾಯ (feedback), ಮುನ್ನೋಟ (preview), ಆವೃತ್ತಿ (version), ಪಠ್ಯ (text), ಜ್ಞಾಪನೆ (reminder), ಅಡ್ಡಹೆಸರು (nickname), ಪ್ರಮಾಣಪತ್ರ (certificate), ಮಧ್ಯಂತರ (interval), ಪೆಟ್ಟಿಗೆ (SRS box), ಗುರಿ (goal), ಮಿತಿ (cap / limit), ಸುಳಿವು (hint), ಉಕ್ತಲೇಖನ (dictation), ಪಾತ್ರಾಭಿನಯ (role-play), ಅಂತರದ ಪುನರಾವರ್ತನೆ (spaced repetition), ಕಷ್ಟದ ಕಾರ್ಡ್ (leech), ತಡೆಹಿಡಿ (suspend), ನಾಳೆಗೆ (bury), ಸ್ಟ್ರೀಕ್ ಕವಚ (streak shield), ವೈಯಕ್ತಿಕ ದಾಖಲೆ (personal best), ಸಾರಾಂಶ ಕಾರ್ಡ್ (recap card).

## 3. Fixed terms (course writers reuse these)

### Tab names (5-tab bar + extras)

| English | Kannada | chars | tl | hi |
|---|---|---|---|---|
| Today | **ಇಂದು** | 4 | Ngayon | आज |
| Lessons | **ಪಾಠಗಳು** | 5 | Aralin | पाठ |
| Practice | **ಅಭ್ಯಾಸ** | 5 | Pagsasanay | अभ्यास |
| Review | **ರಿವ್ಯೂ** | 5 | Review | दोहराव |
| Progress | **ಪ್ರಗತಿ** | 5 | Pag-unlad | प्रगति |
| Read (advanced) | ಓದು | 3 | Basa | |
| Feedback | ಅಭಿಪ್ರಾಯ | 8 | Feedback | |

References inside text use the same names, plus ವಿಭಾಗ where Kannada needs a noun to carry the case ending: *ಪ್ರಗತಿ → ಬ್ಯಾಕಪ್ → ಫೈಲ್ ಹಂಚಿಕೊಳ್ಳಿ*, *ಪ್ರಗತಿ ವಿಭಾಗದಲ್ಲಿ*, *ನೋಡಿ ವಿಭಾಗದಲ್ಲಿ* (Browse).

### Glossary

| English | Kannada |
|---|---|
| Korean (language) / Korea (country) | ಕೊರಿಯನ್ / ಕೊರಿಯಾ |
| Hangul | ಹಂಗುಲ್ (Hangul text itself is kept) |
| romanization | ರೋಮನ್ ಲಿಪಿ |
| pronunciation (hint) | ಉಚ್ಚಾರಣೆ (ಉಚ್ಚಾರಣೆಯ ಸುಳಿವು) |
| English / Kannada | ಇಂಗ್ಲಿಷ್ / ಕನ್ನಡ |
| flashcard / card | ಫ್ಲ್ಯಾಶ್ ಕಾರ್ಡ್ / ಕಾರ್ಡ್ (pl. ಕಾರ್ಡುಗಳು) |
| deck | ಡೆಕ್ (pl. ಡೆಕ್ಕುಗಳು) |
| lesson | ಪಾಠ |
| practice | ಅಭ್ಯಾಸ |
| review (noun / verb) | ರಿವ್ಯೂ / ರಿವ್ಯೂ ಮಾಡಿ |
| due | ಬಾಕಿ |
| streak | ಸ್ಟ್ರೀಕ್ |
| quiz / exam / drill | ಕ್ವಿಜ್ / ಪರೀಕ್ಷೆ / ಡ್ರಿಲ್ |
| Got it / Again (SRS buttons) | ಗೊತ್ತಿದೆ / ಮತ್ತೆ |
| Check / Skip / Next / Back / Done | ಪರಿಶೀಲಿಸಿ / ಬಿಟ್ಟುಬಿಡಿ / ಮುಂದೆ / ಹಿಂದೆ / ಮುಗಿಯಿತು |
| Exam / Test everything (mode) | ಪರೀಕ್ಷೆ / ಎಲ್ಲವನ್ನೂ ಪರೀಕ್ಷಿಸಿ |
| lesson check / Quick check | ಪರಿಶೀಲನೆ / ಕಿರು ಪರಿಶೀಲನೆ (never ಪರೀಕ್ಷೆ, so it does not collide with Exam) |
| Quick (session) / Quick quiz | ಚಿಕ್ಕದು / ಚಿಕ್ಕ ಕ್ವಿಜ್ |
| Correct! / Not quite. | ಸರಿ! / ಇನ್ನೂ ಸರಿಯಿಲ್ಲ. |
| Browse | ನೋಡಿ |
| My phrases / phrase | ನನ್ನ ನುಡಿಗಟ್ಟುಗಳು / ನುಡಿಗಟ್ಟು |
| meaning / note / example / word / dialogue | ಅರ್ಥ / ಟಿಪ್ಪಣಿ / ಉದಾಹರಣೆ / ಪದ / ಸಂಭಾಷಣೆ |
| Weak spots / Missed / Hardest | ದುರ್ಬಲ ಅಂಶಗಳು / ತಪ್ಪಿದವು / ಅತಿ ಕಷ್ಟದವು |
| new / learning / learned / mastered | ಹೊಸದು / ಕಲಿಕೆಯಲ್ಲಿ / ಕಲಿತದ್ದು / ಕರಗತ |
| polite ↔ casual (요-form / 반말) | ವಿನಯ ↔ ಸಲುಗೆ (요-ರೂಪ / 반말) |
| honorific | ಗೌರವಸೂಚಕ |
| verb / noun / stem / dictionary form | ಕ್ರಿಯಾಪದ / ನಾಮಪದ / ಧಾತು (ಕ್ರಿಯಾಧಾತು) / ನಿಘಂಟು ರೂಪ |
| present / past / future | ವರ್ತಮಾನ / ಭೂತಕಾಲ / ಭವಿಷ್ಯತ್ಕಾಲ |
| vowel / consonant / final (받침) / syllable | ಸ್ವರ / ವ್ಯಂಜನ / ಕೊನೆಯ ವ್ಯಂಜನ / ಅಕ್ಷರ |
| block (Hangul) | ಬ್ಲಾಕ್ |
| sound change | ಧ್ವನಿ ಬದಲಾವಣೆ |
| counter / question word / pronoun / adjective | ಎಣಿಕೆ ಪದ / ಪ್ರಶ್ನಾರ್ಥಕ ಪದ / ಸರ್ವನಾಮ / ಗುಣವಾಚಕ |
| grammar / pattern / irregular / conjugate | ವ್ಯಾಕರಣ / ಮಾದರಿ / ಅನಿಯಮಿತ / ರೂಪಗಳು (Verb conjugator = ಕ್ರಿಯಾಪದ ರೂಪಗಳು) |
| Level | ಲೆವೆಲ್ (XP level); proficiency level = ಮಟ್ಟ |
| Register (drill) | ಮಾತಿನ ಶೈಲಿ |
| idiom / 사자성어 | ನುಡಿಗಟ್ಟು / ನಾಲ್ಕು ಅಕ್ಷರದ ನುಡಿಗಟ್ಟು |

Level titles: ಆರಂಭಿಗ (Beginner), ಮೊಳಕೆ (Sprout), ವಿದ್ಯಾರ್ಥಿ (Student), ಮಾತುಗಾರ (Talker), ಪ್ರವಾಸಿ (Traveler), ಸ್ಥಳೀಯ (Local), ಹಿರಿಯ (Senior / 선배), ಪ್ರೊ (Pro), ನಿಪುಣ (Master), ಗುರು (Sensei).

Day abbreviations (Kannada calendar style): ಭಾ ಸೋ ಮಂ ಬು ಗು ಶು ಶ.

Deck tags: #ಮೂಲಭೂತ, #ಪ್ರವಾಸ, #ಸಾಮಾಜಿಕ, #ಕೆಲಸ, #ಮಾಧ್ಯಮ, #ಕೌಶಲ.

## 4. 30 strings to check first (for a Kannada speaker)

Answer "OK" or write the natural version.

| # | English key | Kannada now | Doubt |
|---|---|---|---|
| 1 | Review (tab) | ರಿವ್ಯೂ | English loan. Or ಪುನರಾವರ್ತನೆ (long) / ಮನನ? |
| 2 | Feedback (tab) | ಅಭಿಪ್ರಾಯ | "Opinion". Or the loan ಫೀಡ್ಬ್ಯಾಕ್? |
| 3 | Got it (SRS button) | ಗೊತ್ತಿದೆ | Or ನೆನಪಿದೆ / ಗೊತ್ತಾಯಿತು? |
| 4 | Again (SRS button) | ಮತ್ತೆ | Clear alone as a button? |
| 5 | Due / {n} due | ಬಾಕಿ / {1} ಬಾಕಿ | Natural for "cards waiting for review"? |
| 6 | romanization | ರೋಮನ್ ಲಿಪಿ | Or ರೋಮನೀಕರಣ / ಲಿಪ್ಯಂತರ? |
| 7 | Hangul | ಹಂಗುಲ್ | Spelling OK (vs ಹಾಂಗುಲ್ / ಹಂಗೂಲ್)? |
| 8 | Polite ↔ casual | ವಿನಯ ↔ ಸಲುಗೆ | Clear for 존댓말 / 반말? Or ಗೌರವ ↔ ಸಲುಗೆ? |
| 9 | mastered | ಕರಗತ | Natural as a card state? Or ಪಾರಂಗತ? |
| 10 | learning (card state) | ಕಲಿಕೆಯಲ್ಲಿ | OK? |
| 11 | bury / Buried until tomorrow | ⏭ ನಾಳೆಗೆ / ನಾಳೆಗೆ ಮುಂದೂಡಲಾಗಿದೆ. | Natural for "put off until tomorrow"? |
| 12 | password / website / offline / unlock | ಪಾಸ್ವರ್ಡ್ / ವೆಬ್ಸೈಟ್ / ಆಫ್ಲೈನ್ / ಅನ್ಲಾಕ್ | Written without ZWNJ, so they render as conjuncts (§1). Acceptable, or should the interface use ZWNJ (ಪಾಸ್‌ವರ್ಡ್) as most Kannada sites do? |
| 13 | leech | ಕಷ್ಟದ ಕಾರ್ಡ್ | Fine for an Anki "leech"? |
| 14 | Weak spots | ದುರ್ಬಲ ಅಂಶಗಳು | Natural as a mode name? |
| 15 | Missed | ತಪ್ಪಿದವು | OK as a filter / mode name? |
| 16 | Shuffle | ಶಫಲ್ | Loan, or ಕಲಸಿ / ಬೆರೆಸಿ? |
| 17 | Mixed (quiz mode) / Mix (pool) | ಮಿಶ್ರ / ಮಿಶ್ರಣ | Is the difference clear enough? |
| 18 | Recall en→한 / Listen 🔊→en | ನೆನಪು ಕನ್ನಡ→한 / ಆಲಿಕೆ 🔊→ಕನ್ನಡ | Are ನೆನಪು and ಆಲಿಕೆ clear as mode names? |
| 19 | native (audio speed) | ಸಹಜ | "Natural". Clear next to ನಿಧಾನ / ಸಾಮಾನ್ಯ? |
| 20 | Streak shield | ಸ್ಟ್ರೀಕ್ ಕವಚ | Natural? |
| 21 | Talker (level title) | ಮಾತುಗಾರ | Fun, or odd? Others: ಆರಂಭಿಗ, ಮೊಳಕೆ, ವಿದ್ಯಾರ್ಥಿ, ಪ್ರವಾಸಿ, ಸ್ಥಳೀಯ, ಹಿರಿಯ, ಪ್ರೊ, ನಿಪುಣ, ಗುರು. |
| 22 | Sensei (level title) | ಗುರು | Replaces the Japanese word with the Indian one. OK? |
| 23 | Register (drill name) | ಮಾತಿನ ಶೈಲಿ | Clear for "speech level"? |
| 24 | I get by (level answer) | ಹೇಗೋ ನಿಭಾಯಿಸುತ್ತೇನೆ | Natural for language ability? |
| 25 | Working late — nice job / it's late, good work | ತಡರಾತ್ರಿ ಕೆಲಸ — ಭೇಷ್ / ತಡವಾಯಿತು, ಒಳ್ಳೆಯ ಶ್ರಮ | Natural greeting glosses? |
| 26 | good afternoon / good evening | ಶುಭ ಮಧ್ಯಾಹ್ನ / ಶುಭ ಸಂಜೆ | Too bookish? People may just say ನಮಸ್ಕಾರ. |
| 27 | Something went wrong: | ಏನೋ ತಪ್ಪಾಯಿತು: | OK? |
| 28 | Streak at risk | ಸ್ಟ್ರೀಕ್ ಅಪಾಯದಲ್ಲಿದೆ | Too dramatic? |
| 29 | Hand-tuned for speakers of your language | ನಿಮ್ಮ ಭಾಷೆಯವರಿಗಾಗಿ ಕೈಯಾರೆ ಸಿದ್ಧಪಡಿಸಿದ್ದು | Natural? Shorter version? |
| 30 | Export / Import | ರಫ್ತು / ಆಮದು | Used by Android Kannada; clear to users, or is ಎಕ್ಸ್‌ಪೋರ್ಟ್ / ಇಂಪೋರ್ಟ್ better? |

Also worth a glance: ‘Lang Appಗೆ ಸ್ವಾಗತ’ (Kannada ending on the Latin brand); the assembled sentence `: ನೀವು ಪೋಸ್ಟ್ ಮಾಡುವುದೆಲ್ಲವೂ` + **ಸಾರ್ವಜನಿಕ** + `ಆಗಿರುತ್ತದೆ, ಎಲ್ಲಾ ಬಳಕೆದಾರರಿಗೂ ಕಾಣುತ್ತದೆ…` (the English word order is fixed by three fragments); the delete warning, where English "Type" moved after the code word (`… ಜೋಡಣೆಯಾಗಿರುವುದಿಲ್ಲ.` **DELETE** `ಎಂದು ಟೈಪ್ ಮಾಡಿ ಖಚಿತಪಡಿಸಿ.`); 👆 **ಟ್ಯಾಪ್** `ಮಾಡಿ, ಕಾರ್ಡ್ ತಿರುಗುತ್ತದೆ`; ಪೂರ್ತಿ ಸರಿ (Perfect on); ಖಾಲಿ ಜಾಗ ತುಂಬಿ (Fill the gap); ಪದಗಳನ್ನು ಕ್ರಮದಲ್ಲಿ ಜೋಡಿಸಿ (Put the words in order); ಬಿಡಿಸಿ ನೋಡಿ (break it down); ಅನುಕರಿಸಿ ×3 (shadow); ಕೊರಿಯನ್ ಆರಂಭ (Korean starter); 90 ದಿನದಲ್ಲಿ ಮಾತುಕತೆ (Conversational in 90 days); ತ್ವರಿತ ಕ್ರಿಯೆಗಳು (quick actions); ಸಲುಗೆ for 반말 in roadmap titles.

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `kn` is a 2-letter code, so the `slice(0,2)` / `split` problems in the ceb and tl notes do not affect it.
- `LANGS.kn` exists: `{name:'Kannada',self:'ಕನ್ನಡ',flag:'🇮🇳',ko:'칸나다어',t:1}`.
- Language names: `new Intl.DisplayNames(['kn'],{type:'language'})` in Node (full ICU) gives ko → ಕೊರಿಯನ್, en → ಇಂಗ್ಲಿಷ್, kn → ಕನ್ನಡ, the same words this dictionary uses, so no override map is needed for `kn` (browsers with small ICU data may differ; not tested).
- `hLang('kn')` gives a valid BCP-47 tag; `kn` is not RTL.
- `gen.py` writes `LANGAPP_PACKS.i18n.kn` and `validate.js kn` passes.

**Not there yet (not mine to add):**
- There is no `kn-ko` course pack (`packs/` has only `course-en-kn.js`), no `docs/profiles/kn-ko.md` and no `tools/halves/native/kn/ko/`. Until a course with `native:'kn'` exists, `liveNatives()` will not offer this pack.
- Level titles in the level-up toast (`레벨 업! Level 5 · Talker 수다쟁이`) come from the course pack's TITLES, not from this dictionary. The kn-ko pack should use the titles in §3.
- The en-kn profile's no-ZWNJ rule was applied here by my build script only; `validate.js` does not check ZWNJ for interface packs.
- **Shared wording:** `No match. Try the English meaning.` (search in the "How do I say…" box, `src/app.html` ~line 2499) is shown in every course. In a `*-ko` course for a non-English speaker the meanings are in the learner's language, so "English" is wrong there. I translated it literally (ಇಂಗ್ಲಿಷ್ ಅರ್ಥದಲ್ಲಿ ಹುಡುಕಿ), as tl and ceb did. The key could become "Try the meaning in your language", or get a per-course variant; that is a keys.json / app.html change.

**Tell the halves agent / profile writer:**
- The tabs on screen are **ಇಂದು, ಪಾಠಗಳು, ಅಭ್ಯಾಸ, ರಿವ್ಯೂ, ಪ್ರಗತಿ**. Lesson prose should use these names, the button names in §3 (ಗೊತ್ತಿದೆ, ಮತ್ತೆ, ಪರಿಶೀಲಿಸಿ, ನೋಡಿ, ನನ್ನ ನುಡಿಗಟ್ಟುಗಳು, ಎಲ್ಲಾ ಬಾಕಿ) and the Kannada grammar terms in §3.
- Whatever goes into a future `tools/halves/native/kn/ko/ui.json` overrides this pack key by key; prefer fixing wording here.

**Pipeline notes.**
- `road.py` was not run (the ceb and tl notes say it fails with `Argument list too long`). `kn/roadmap.json` was written in road.py's output shape from the tl file as skeleton (same 1,822 strings, every `t` blanked), with the 40 `ko` roadmap strings filled. `gen.py` emits `road` 40.
- Scratch build script (not in the repo) writes `ui.json` from the tl skeleton and lints: Hangul runs, emoji and digits equal to the key's; fragment edge punctuation; no Latin outside the §2 list; no ZWNJ / ZWJ; no Kannada digits. Its only remaining flags are the two delete-warning templates, whose final "Type" was moved on purpose (§4). It does **not** check naturalness; that needs the native check (§4).
