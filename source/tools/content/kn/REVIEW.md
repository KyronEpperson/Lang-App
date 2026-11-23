# kn-en cold review (2026-11-23)

**Scope.** Everything under tools/content/kn except profile.json and the pron tool files (pron_kn.js, pron_check.js, pron_lookup.json, PRON-TOOL.md), plus the `t` fields of tools/i18n/kn/ui.json and roadmap.json and NOTES.md. deviations.json and deviations.a.json were touched in one entry each, for the removed card (lead ruling 1). No generator, pack, app file, other course or doc was touched; nothing was committed. New file: PRON-RULES.md.

**How it was read.** The lead reviewer read the profile, the `indian-english` lesson, deck 22, the kn cards of deck 18, meta.js, the 39 roadmap titles, NOTES.md and all 184 count wordings, and made every cross-file decision and edit. The rest was read in full by six helper reviewers working from one written brief with the lead rulings, one per file group; their reports were checked and several of their open points were then fixed by the lead. See section 3.

**Checks after the last edit** (scratch outputs only):
- `gen.js kn`: wrote the pack. `validate.js kn`: `PASS: all checks OK`.
- `parity.js kn`: `WARN unused deviations (stale?): lessons:indian-english, lessons:stative-since` (expected) and `PASS: shared English side matches ko-en`.
- `lint.js kn`: `0 blocking · 27 meaning variants (info) · 0 K-pop leftovers (info)` (43 variants before).
- `alphabet_check.js kn`: `PASS alphabet kn: lesson 1, deck 21 «ಇಂಗ್ಲಿಷ್ ವರ್ಣಮಾಲೆ» with 26 cards`.
- `pron_check.js`: `pairs 794 · … pattern 0 · encoding 0 · banned 0 · doubled 0 · diff 0 · conflicts 0 · word mismatches 0 · prose mismatches 0`.
- `i18n/gen.py kn` + `i18n/validate.js kn`: `exact=784 patterns=275 warnings=1`, `PASS` (the warning is the 12 long labels NOTES.md already lists).
- `node --check` on all 8 JS files; both JSON files load; a diff with `t` removed shows only `t` changed (ui.json 20, roadmap.json 4).
- Script scan of every course file and every `t`: no Telugu, Devanagari, Tamil, Malayalam or Hangul letters, no Kannada digits, no danda, no ZWJ, all NFC.
- Not run (cannot run here): `link_roadmap.py --check`, `tools/i18n/road.py`.

## 1. What changed

### Lead rulings
1. **"Jew" removed.** The card `Jew` in deck «ಉಚ್ಚಾರಣೆ: ಎಚ್ಚರ» is gone (51 → 50 cards). The zoo note «ಜ ದಿಂದ ಹೇಳಿದರೆ Jew ಎಂದು ಕೇಳಿಸುತ್ತದೆ» → «ಕನ್ನಡದ ಜ ಅಲ್ಲ, ಸ ಕೂಡ ಅಲ್ಲ: ಜ಼ೂ.» The `pron` lesson sentence now says «zoo ಪದವನ್ನು "ಜೂ" ಎಂದರೆ ಅದು ಬೇರೆಯೇ ಪದದ ಹಾಗೆ ಕೇಳಿಸುತ್ತದೆ». Deviation entry: "zoo / Jew, zero, easy" → "zoo, zero, easy", "cards 26–50" → "cards 26–49". vine / wine kept.
2. **Indian English is "fine here, say this abroad".**
   - `indian-english`: *I have a doubt* and *today morning · yesterday night* moved from the ✗ table to the "ಭಾರತದಲ್ಲಿ / ವಿದೇಶದಲ್ಲಿ" table; the ✗ table keeps *Myself Kiran*, *discuss about*, *revert back · return back*, *angry on me*; its paragraph was rewritten to match; the example row *I have a question.* moved up and *He's angry with me.* (aid copied from deck 22) took its place. Check 2 and two practice whys: «doubt ಎಂದರೆ ಅನುಮಾನ; ಪ್ರಶ್ನೆಗೆ question.» → «I have a doubt ಭಾರತದಲ್ಲಿ ಸರಿ; ವಿದೇಶದಲ್ಲಿ doubt ಎಂದರೆ ಅನುಮಾನ ಮಾತ್ರ, ಪ್ರಶ್ನೆಗೆ question.» Two prompts gained «(ವಿದೇಶದಲ್ಲಿ)». No English option, tile or answer changed.
   - Deck 22 notes: «cousin sister, cousin brother ಇಲ್ಲ» → «…ಭಾರತದ ರೂಪಗಳು; ವಿದೇಶದಲ್ಲಿ cousin ಒಂದೇ ಪದ»; «("yesterday night" ಅಲ್ಲ)» → «today morning, yesterday night ಭಾರತದಲ್ಲಿ ಸಾಮಾನ್ಯ; ವಿದೇಶದಲ್ಲಿ …»; «-ಏ ಎಂಬುದಕ್ಕೆ only ಅಲ್ಲ» → «…only ಹಾಕುವುದು ಭಾರತದಲ್ಲಿ ಸಾಮಾನ್ಯ; ವಿದೇಶದಲ್ಲಿ only = ಮಾತ್ರ».
   - Other files: `prep` body «today morning ✗ → this morning ✓» → «ಭಾರತದಲ್ಲಿ today morning, yesterday night ಸಾಮಾನ್ಯ; ವಿದೇಶದಲ್ಲಿ this morning, last night ಎನ್ನಿ»; `articles` and `articles-2` no longer use *I have one doubt* as the "one for a" error (now *My father is one doctor. ✗* and *He is one doctor.*); `email` «the same … ಬಳಸುವುದಿಲ್ಲ» → «ವಿದೇಶದಲ್ಲಿ …»; `stative-since` why on *doubt* softened; deck notes on *here only* and *On the light* reworded the same way.
   - **Claims about American English that were false:** «ಭಾರತದ "take a left"», «ಭಾರತದ "What is the time?"», «ಭಾರತದ "I'll message you"» (all ordinary English) corrected; «"I'm fine, thank you" ಪುಸ್ತಕದ ಭಾಷೆ» → «ಕೂಡ ಸರಿ, ಆದರೆ ಸ್ವಲ್ಪ ಔಪಚಾರಿಕ»; `joining` «I also am coming. ✗» removed; `conditionals` «If I were» now notes that *was* is heard in speech, and «If I would have known ✗» is now "not in writing" without ✗. "five years back" does not occur in the course.
3. **One word per concept.** weekend ವಾರಾಂತ್ಯ (already uniform); main verb «be ಅಲ್ಲದ ಕ್ರಿಯಾಪದ» (replaced «ಬೇರೆ ಕ್ರಿಯಾಪದ» ×8 and «ಉಳಿದ ಕ್ರಿಯಾಪದಗಳು» ×2, including the `be` title); zero-article option «(ಏನೂ ಬೇಡ)» (×2 changed); stress ಒತ್ತು (ಒತ್ತಡ remains only for mental pressure; one lesson sentence that used «ಒತ್ತಿ ಹೇಳುತ್ತೇವೆ» for doubling was reworded); restroom ಶೌಚಾಲಯ (already uniform); report **ವರದಿ** in course and interface (ರಿಪೋರ್ಟ್ ×8 replaced). Glosses: «Simple Present (ವರ್ತಮಾನ ಕಾಲ)» only in `be`, «Simple Past (ಭೂತಕಾಲ)» only in `past`, «will (ಭವಿಷ್ಯತ್ ಕಾಲ)» only in `tense`; 17 uses of ಭೂತಕಾಲ as the tense name → Simple Past, including the title «ಅನಿಯಮಿತ ಕ್ರಿಯಾಪದಗಳ Simple Past: went, ate, saw».
4. **Level titles: the interface ladder was chosen for both** (ಆರಂಭಿಕ, ವಿದ್ಯಾರ್ಥಿ, ಮಾತುಗಾರ, ಪ್ರವಾಸಿ, ಸ್ಥಳೀಯ, ಪರಿಣತ, ನಿಪುಣ): meta.js `TITLES` changed (ಹೊಸಬ, ಪ್ರಯಾಣಿಕ, ಪ್ರವೀಣ dropped; ಹೊಸಬ is masculine-marked and ಪ್ರಯಾಣಿಕ is "passenger"). Goals and plans: meta travel «ಪ್ರಯಾಣ» → «ಪ್ರವಾಸ», work «ಉದ್ಯೋಗ ಮತ್ತು ಆಫೀಸ್» → «ಕೆಲಸ ಮತ್ತು ಆಫೀಸ್», media → «ಸಿನಿಮಾ, ಸೀರೀಸ್ ಮತ್ತು ಸಂಗೀತ», plan «90 ದಿನದಲ್ಲಿ ಮಾತುಕತೆ» → «…ಮಾತುಕತೆಗೆ ಸಿದ್ಧ»; trip plan is «ವಿದೇಶ ಪ್ರವಾಸದ ತಯಾರಿ» in both files. The interface has no string for the pause labels, so they are unchanged.
5. **Aids.** No English string has two aids; names carry one IPA each (PRON-RULES.md §2). One aid changed: *I've lived here since 2015.* now reads the year in two halves like the 2019 and 2020 rows (tool output).
6. **ಕ್ವಿಜ್ / ಕಿರು ಪರೀಕ್ಷೆ.** Already split correctly in all 35 interface strings; the course files use neither word. No change.
7. **ZWNJ.** Checked by script in every file: every ZWNJ follows ್ on a loanword and precedes a Kannada letter; none in a pron or a deck name. No change was needed. Recorded in PRON-RULES.md §5 and NOTES.md.
8. **Register decisions (writers' open questions).**
   - *Question endings:* second-person verbs take -ಆ, the standard written form (ಬರುತ್ತೀರಾ?, ಮಾಡಿದೆಯಾ?); everything else takes written -ಏ (ಇದೆಯೇ?, ಬೇಕೇ?, …ಬಹುದೇ?, ಇಷ್ಟವೇ?, ಆಯಿತೇ?). Quoted spoken Kannada stays (ಅಲ್ವಾ?, ಊಟ ಆಯ್ತಾ?). About 45 strings changed, most in more/a1.js, which used ಇದೆಯಾ?, ಇಷ್ಟವಾ?, ಬೇಕಾ? throughout. The `questions` and `past-continuous` bodies now say Kannada adds «-ಆ / -ಏ».
   - *be going to* = -ಅಲಿ + ಇದ್ದೇನೆ (ಹೋಗಲಿದ್ದೇನೆ, ಬರಲಿದ್ದೀಯಾ?), the written form, everywhere it is translated: 8 strings changed («ಸೇರಬೇಕೆಂದಿದ್ದೇನೆ», «ಬರುತ್ತೀಯಾ?», «ಇರುತ್ತೇನೆ»).
   - ಮಾತಾಡು → ಮಾತನಾಡು (9 strings).
9. **Scripts.** Clean before and after. Hangul removed from DECKNAMES.md (one reference note).
10. **Roadmap.** Basis line left as translated (see section 5). Four titles aligned with the course: «ಅಕ್ಷರಮಾಲೆ…» → «ಇಂಗ್ಲಿಷ್ ವರ್ಣಮಾಲೆ ಮತ್ತು ಸ್ಪೆಲ್ಲಿಂಗ್ ಹೇಳುವುದು»; «a / an ಮತ್ತು the: ಮೂಲಪಾಠ» ("original text") → «…: ಮೊದಲ ಹೆಜ್ಜೆ»; «First conditional: if ವಾಕ್ಯ» → «if ವಾಕ್ಯ 1 (first conditional)»; «Second ಮತ್ತು third conditional (if ವಾಕ್ಯ)» → «if ವಾಕ್ಯ 2 ಮತ್ತು 3 (second, third conditional)». The `pron` title keeps R/L, F/P, TH.

### Wrong or misleading teaching (beyond the rulings)
- alphabet check 1: the cue for the letter name "ಜೀ" was «job ಪದದ ಮೊದಲ ಧ್ವನಿ», which points at J while the answer is G → «ಕನ್ನಡದ ಜ ಧ್ವನಿ + ಈ; ಚುಕ್ಕೆ ಇರುವ ಜ಼ ಅಲ್ಲ».
- third-s: «ಕರ್ತೃ ಒಬ್ಬರೇ ಆದರೆ ಕ್ರಿಯಾಪದಕ್ಕೆ -s» (false for I / you) → «ಕರ್ತೃ he, she, it ಆದರೆ…» (blurb, body, one why).
- plurals tip: «ಸಂಖ್ಯೆ … ನಂತರ ನಾಮಪದ ಯಾವಾಗಲೂ ಬಹುವಚನ» → «ಎರಡು ಅಥವಾ ಹೆಚ್ಚಿನ ಸಂಖ್ಯೆ…».
- countable: «many money ✗ → much money ✓» → «a lot of money»; "any + plural" whys limited to questions.
- present: adverbs of frequency "before the verb" now excepts be (*I'm always busy.*).
- articles: «ಆ / ಈ … the ಅಲ್ಲ» contradicted the next example (The dog = ಆ ನಾಯಿ) → «ಕೆಲವೊಮ್ಮೆ the ಮಾಡುವ ಕೆಲಸ ಮಾಡುತ್ತವೆ, ಆದರೆ ಅವುಗಳ ನೇರ ಅರ್ಥ that / this».
- be practice why claimed «ನನಗೆ ಸುಸ್ತಾಗಿದೆ» has no verb → rewritten; past why «busy … ಸ್ಥಿತಿ» → «ಗುಣವಾಚಕ; ಹಾಗಾಗಿ be ಬೇಕು».
- reported: backshift taught as absolute → a sentence allows the unshifted form in speech; «ಕೇಳಿದ ವ್ಯಕ್ತಿ» ("the person who asked") for the listener → «ಯಾರಿಗೆ ಹೇಳಿದರೋ ಆ ವ್ಯಕ್ತಿ» (7 strings); «say ನಂತರ ವ್ಯಕ್ತಿ ಬರುವುದಿಲ್ಲ» → «…ನೇರವಾಗಿ…».
- will tip: «I will go and come. ✗ ಅಲ್ಲ» read as "is not wrong" → rewritten.
- PATTERNS: "the pronoun object of a phrasal verb goes in the middle" limited to separable verbs (the next row is *look forward to*).
- Deck notes: *hang out* lost a Korean-course leftover (play with friends); *hit the books* «ಜೋರಾಗಿ ಓದಲು» ("read aloud") → «ಶ್ರದ್ಧೆಯಿಂದ ಓದಲು ಕುಳಿತುಕೊಳ್ಳುವುದು»; *Who's your bias?* now says it is K-pop fan slang.
- **Prompts that did not lead to an accepted answer (about 30 type items):** a cue was added or the prompt made specific, never the shared answer list: «(watch ಬಳಸಿ)», «(I'd like ಬಳಸಿ)», «(Can ಬಳಸಿ)», «(I wish ಬಳಸಿ)», «(have to ಬಳಸಿ)», «(ಕಾಲ ಒಂದು ಹೆಜ್ಜೆ ಹಿಂದಕ್ಕೆ)» for reported speech, «ಮಾಡಲೇಬೇಕು (ಕಡ್ಡಾಯ)» for have to, «ಟ್ಯಾಕ್ಸಿ ಹಿಡಿಯಬೇಕಿತ್ತು» for *should have taken a taxi*, «ಇಬ್ಬರು ಸಹೋದರಿಯರು» for *two sisters*; smalltalk prompt lost «ಅಲ್ವಾ?», which invited an unaccepted *isn't it?*. In `indian-english` (kn-only) accepted answers were added instead (*Would you / Will you send me the report*, *I just asked*).
- Whys that named one answer where two are accepted now say so (who / that, that / which, might / may / could, with / at).

### Unnatural wording
- «ನಿಮ್ಮಿಂದ ನನ್ನ ದಿನ ಸಾರ್ಥಕವಾಯಿತು!» (*You made my day!*) → «ನಿಮ್ಮಿಂದ ಇವತ್ತು ನನಗೆ ತುಂಬಾ ಖುಷಿಯಾಯಿತು!» (deck and example).
- «ಒಂದು ನಿಮಿಷ, ದಯವಿಟ್ಟು» → «ದಯವಿಟ್ಟು ಒಂದು ನಿಮಿಷ»; «ಒಳ್ಳೆಯ ಅಂಶ» (*Good point*) → «ಅದು ಒಳ್ಳೆಯ ಮಾತು»; pause compliments that used ನೀನು in a ನೀವು set fixed; «…ಕಾಣುತ್ತಿದ್ದೀಯಾ!» (a question ending on a statement) → «…ಕಾಣುತ್ತಿದ್ದೀಯ!».
- *I visited Hampi last year.* «ಹಂಪಿ ನೋಡಿದ್ದೇನೆ» → «ಹಂಪಿಗೆ ಹೋಗಿದ್ದೆ» (the row teaches Simple Past with a finished time).
- Ten meanings that differed between a deck card and a lesson row were unified (*I have a question.* ನನಗೊಂದು ಪ್ರಶ್ನೆ ಇದೆ, *Could you say that again?*, berry, car, vine, happy, three, think, *I'll get back to you.*, *I'm working from home today.*).
- Interface: `Go` ಹೋಗಿ → ತೆರೆಯಿರಿ; goal-reached strings «ಗುರಿ ಮುಟ್ಟಿದೆ» → «ಗುರಿ ತಲುಪಿದ್ದೀರಿ»; `CERTIFICATE OF COMPLETION` «ಪೂರ್ಣಗೊಳಿಸಿದ ಪ್ರಮಾಣಪತ್ರ» → «ಪೂರ್ಣಗೊಳಿಸಿದ್ದಕ್ಕೆ ಪ್ರಮಾಣಪತ್ರ»; `re-enable` «ಮತ್ತೆ ಚಾಲೂ ಮಾಡಿ» (Hindi) → «ಮರಳಿ ತನ್ನಿ»; `Back to practice / lesson` «…ಹಿಂದೆ» → «…ಮರಳಿ»; «ಈ ಪಾಠದ ಮೇಲೆ 3 ಪ್ರಶ್ನೆ» → «ಈ ಪಾಠದ ಬಗ್ಗೆ…»; `hidden`, `suspended` made passive states; `Hangul drill` now the same word as `Reading drill`.

### Formatting and spelling
steak ಸ್ಟೀಕ್ → ಸ್ಟೇಕ್ (4 places; the aid is ಸ್ಟೇಕ್); Busan ಬುಸಾನ್ → ಬೂಸಾನ್; " / " between alternatives in five meanings; a second «!» on one screen removed; «ನಿಜವಾಗಲೂ» → «ನಿಜವಾಗಿಯೂ».

## 2. Edit counts per file (changed strings; several share a line)

| File | wrong / misleading | unnatural wording (incl. terms) | pron | formatting (incl. register forms) | total |
|---|---|---|---|---|---|
| decks.js | 14 | 10 | 0 | 2 | 26 |
| extra.js | 5 | 8 | 0 | 3 | 16 |
| lessons.js | 11 | 18 | 0 | 8 | 37 |
| practice.js | 18 | 7 | 0 | 3 | 28 |
| more/a1.js | 31 | 23 | 0 | 57 | 111 |
| more/a2.js | 12 | 1 | 0 | 2 | 15 |
| more/b1.js | 11 | 6 | 1 | 4 | 22 |
| meta.js | 0 | 6 | 0 | 0 | 6 |
| i18n ui.json | 6 | 14 | 0 | 0 | 20 |
| i18n roadmap.json | 1 | 3 | 0 | 0 | 4 |
| deviations.json, deviations.a.json | 2 (ruling 1) | 0 | 0 | 0 | 2 |
| DECKNAMES.md | 0 | 0 | 0 | 1 | 1 |
| **Total** | **111** | **96** | **1** | **80** | **288** |

One card removed (deck 18). New: PRON-RULES.md. NOTES.md gained a review section. The helper counts for a1.js are approximate ("about 90").

## 3. What was read in full, and by whom

| Material | Read in full by | Lead |
|---|---|---|
| decks.js (22 decks, 440 rows) | helper | read deck 22 and the kn cards of deck 18; edited 16 rows |
| extra.js (dialogues, examples, patterns, pause sets, idioms) | helper | not read; edited 3 rows from the helper's notes |
| lessons.js, practice.js (12 lessons, 36 checks, 168 items) | helper | read only the passages edited |
| more/a1.js (16 lessons) | helper | read `indian-english` in full |
| more/a2.js, more/b1.js (14 lessons) | helper | read only the passages edited |
| ui.json (784 strings, 274 patterns) | helper | read the 184 count wordings and the level, goal, plan and quiz strings |
| roadmap.json (39 titles), meta.js, NOTES.md, DECKNAMES.md, deviations | lead | in full |

Only scanned by anyone: the count patterns rendered at 0, 1, 2, 5 and 21 (796 renders at 0 / 1 / 2 / 21 were generated and screened by script for a plural ending, a case ending on a digit or an agreeing verb: none; the 184 templates themselves were read). Profile §4 and §8 were read partly by two helpers (output cut off). No aid was listened to against the voice.

## 4. For a native speaker: check these first

1. **Question endings.** The rule now applied everywhere: ಬರುತ್ತೀರಾ? / ಮಾಡಿದೆಯಾ? for second person, but ಇದೆಯೇ?, ಬೇಕೇ?, ಇಷ್ಟವೇ?, ನಿಮ್ಮದೇ?, ಆಯಿತೇ? elsewhere. Does «ನಿನ್ನ ಊಟ ಆಯಿತೇ?», «ಕಾಫಿ ಬೇಕೇ, ಟೀ ಬೇಕೇ?» between friends read as stiff? If so, the alternative is -ಆ throughout the example translations.
2. **-ಅಲಿದ್ದೇನೆ for be going to** («ನಾನು ಮೈಸೂರಿಗೆ ಹೋಗಲಿದ್ದೇನೆ», «ನೀನು ಬರಲಿದ್ದೀಯಾ?», «ಮನೆಯಲ್ಲೇ ಆರಾಮವಾಗಿ ಇರಲಿದ್ದೇನೆ»): newsreader Kannada or acceptable in a lesson? It is what separates *going to* from *will* in the prompts.
3. **The pronunciation aid by ear**: the dotted letters (ಫ಼ ಜ಼ ವ಼ ಥ಼ ದ಼ ಶ಼), ಙ್ for -ng (ˈಮೋರ್ನಿಙ್), bare final consonant = schwa (ˈಡೋಸ, ˈಕಾನಡ), and the names: ˈಡಿವ಼್ಯ, ˈಕಿರನ್, ರೌ, ಬೆಂಗˈಲುರೂ, ಮೈˈಸುರೂ, ಮುಮ್ˈಬೈ, ˈಕಾನಡ, ˈಇನ್ಡಿಅ, ˈಹ್ಯಾಮ್ಪಿ, ಕುˈವ಼ೆಮ್ಪೂ. None was checked against the en-US voice.
4. **Claims about how Kannada speakers say English**: the glide on letter names («ಯೆಮ್, ಯೆನ್, ಯೆಸ್», «ಯೆಫ್ / ಯೆಲ್ / ಯೆಕ್ಸ್»), «ಇಸ್ಕೂಲು», "ಕನ್ನಡದ ವ ಇಂಗ್ಲಿಷ್‌ನ v ಮತ್ತು w ಗಳ ನಡುವೆ ಇದೆ", "ತುಟಿ ಮುಚ್ಚಿ ಹೇಳುವ ಕನ್ನಡದ ಫ".
5. **Grammar claims about Kannada** left as written: «ಇದ್ದಿದ್ದರೆ … ಮಾಡುತ್ತಿದ್ದೆ» as one form for both unreal present and unreal past (every prompt in `conditionals` rests on it); "ನನಗೆ ಗೊತ್ತು / ಬೇಕು are mostly not verbs, and ನಾನು is not the subject" (`continuous`, `stative-since`); "Kannada adds -ಆ / -ಏ and moves nothing".
6. **The Kannada calque group** in `indian-english` and deck 22: *I'll go and come* (ಹೋಗಿ ಬರುತ್ತೇನೆ), *Had your lunch?* (ಊಟ ಆಯ್ತಾ?), *Tell me* (ಹೇಳಿ), *I simply asked* (ಸುಮ್ಮನೆ), *Please adjust*, *One minute, I'll come*; and «"ಕಷ್ಟಪಟ್ಟಿರಿ" ಎಂಬುದನ್ನು ಪದಕ್ಕೆ ಪದ ಅನುವಾದಿಸಿದರೆ…» in the email check, which was adapted from a Korean note and may not be a real Kannada habit.
7. **Idiom equivalents**: *Speak of the devil* = «ನಿನಗೆ ನೂರು ವರ್ಷ ಆಯಸ್ಸು!» (also the spelling ಆಯಸ್ಸು / ಆಯುಸ್ಸು); *on cloud nine* = «ಸ್ವರ್ಗಕ್ಕೆ ಮೂರೇ ಗೇಣು»; *I'm all ears* = «ಮೈಯೆಲ್ಲಾ ಕಿವಿ»; *No pain, no gain* beside «ಕೈ ಕೆಸರಾದರೆ ಬಾಯಿ ಮೊಸರು»; *pull someone's leg* = «ತಮಾಷೆಗೆ ಕಾಲೆಳೆಯುವುದು».
8. **Interface vocabulary**: ಪುನರ್ಮನನ / ಮನನ for review, ಕರಗತ for mastered, ಮೊಂಡು ಕಾರ್ಡ್ for leech, ಗೌರವ ↔ ಸಲುಗೆ, ಒಡನಾಟ for Social, ಅಡ್ಡಹೆಸರು for nickname, ಹಿಂಪಡೆಯಿರಿ for Undo, ಮರಳಿ as a button (ಅಭ್ಯಾಸಕ್ಕೆ ಮರಳಿ), and the level ladder ಆರಂಭಿಕ … ನಿಪುಣ.
9. **Counts with a bare noun**: «21 ಕಾರ್ಡ್», «5 ಡೆಕ್», «0 ದಿನ», «ಬಾಕಿ: 3», and in the lessons «ಎರಡು ರೂಮ್ ಇವೆ», «ಸೀಟ್ ಇವೆಯೇ?».
10. **Smaller wording**: second-person statement ending -ಈಯ («ಬರುತ್ತೀಯ», «ಕಾಣುತ್ತಿದ್ದೀಯ») versus -ಈಯೆ; «ಕಿಟಕಿ ತೆರೆಯುತ್ತೀರಾ?» (changed from ತೆಗೆಯುತ್ತೀರಾ); «ಸಹೋದರಿಯರು» for sisters; «ಹೋಗಲು ಬಯಸುತ್ತೇನೆ» for *want to*; «ಟ್ಯಾಕ್ಸಿ ಹಿಡಿ»; «ಸಾಧ್ಯವೇ ಇಲ್ಲ!» for *No way!*; «ನನ್ನ ಲಗೇಜ್ ಬಂದಿಲ್ಲ» for *is missing*; the tense title «…ವರ್ತಮಾನ, ಭೂತ, ಭವಿಷ್ಯತ್» (bare ಭೂತ also means "ghost"); ಬ್ಯುಸಿ; deck name «ಲೋಕಾಭಿರಾಮ ಮಾತುಕತೆ».

## 5. Found but not fixed (out of scope, or the lead's call)

- **Roadmap basis line** says "adjusted for Korean speakers" in the English source; left as translated («ಕೊರಿಯನ್ ಭಾಷಿಕರಿಗೆ ಹೊಂದಿಸಿದ್ದು»).
- **deviations.json, `indian-english` entry** still lists *I have a doubt* and *today morning* among "forms wrong in any variety"; the lesson no longer does. The text was not edited (only ruling 1 allowed edits there). **Profile §4.12 / §8** has the same grouping, and §10's count table still gives «ಕಿರು ಪರೀಕ್ಷೆ: {1}» for the quiz count.
- **Travel word.** Goal, plan, tag and level title use ಪ್ರವಾಸ / ಪ್ರವಾಸಿ; deck 15 «ಪ್ರಯಾಣ (ವಿಮಾನ ನಿಲ್ದಾಣ ಮತ್ತು ಹೋಟೆಲ್)» and the group «ಪ್ರಯಾಣ ಮತ್ತು ದಿನನಿತ್ಯ» keep ಪ್ರಯಾಣ because decks are not renamed (journey vs trip: defensible, but two words).
- **Parity-bound English left as is:** *I'll have the steak.* / *Medium rare, please.* (beef, against profile §9); *Who's your bias?* (K-pop card; the note now says so and names K-pop: revert to «ಪಾಪ್ ಬ್ಯಾಂಡ್ ಅಭಿಮಾನಿಗಳ ಸ್ಲ್ಯಾಂಗ್» if no mention is wanted); articles check 2 *Can I see ___ menu?* ("a" is defensible; the prompt now forces "the"); numbers fill *It's __ quarter past ten* (no article is also used); modals mc 1 distractor *I have work tomorrow.* (grammatical; explained in the why); conditionals mc 3 distractor *would* (a marginal mixed conditional); reported mc 4 distractor *She asked was I okay.*; perfect-2 order 3 (*have you waited* for a Kannada continuous); modals type 3 accepted list has first-person leftovers for a ನೀವು prompt; `stative-since` order 4 keeps the distractor tile *doubt* (hi parity) with a softened why; shared names Jake, Ryan, Mike, New York, "subway".
- **Type items with narrow accepted lists** were handled by cues in the Kannada prompt (about 30). Widening the shared lists would be cleaner and is not a reviewer's edit.
- **Still ✗ and worth a decision:** «revert back · return back» (redundant, but heard from native speakers); «I am going to the gym every day ✗» (habitual progressive: an ICE-India feature, an error per profile §4.3); the all-purpose tag *isn't it? / no?* is advised against without ✗; `polite` marks *Give me ~* «ಬಳಸಬೇಡಿ».
- **Nukta in prose.** The `alphabet` and `pron` bodies quote the aid with dotted letters in running text (ಎಫ಼್, ಜ಼ೀ), which the profile restricts to pron fields; it is the aid being quoted, so it was left.
- **Notes inside translation fields** (extra.js: the "second floor" and "ತುಲಾ ರಾಶಿ" parentheses) were left.
- **27 meaning variants** remain between decks and lesson rows (lint, info only); most are deliberate (a cue in brackets).
- **Interface:** the Hangul-only screens carry invented English-oriented text (the block explainer still begins "(han)."); the deck-of-the-week "done" button shows the tab noun ಪುನರ್ಮನನ; legacy titles Sprout, Senior, Sensei (ಮೊಳಕೆ, ಹಿರಿಯ, ಆಚಾರ್ಯ) are outside the fixed seven; the profile's `html[lang=kn]` font request stands.

## Pre-merge review, 2026-11-23

Applied after the read-only pre-merge review (reviewer not a native speaker). All checks pass: gen, validate, parity, alphabet_check, lint (0 blocking), pron_check (0 in every category), pron_kn.js --selftest (245/245), i18n gen + validate, link_roadmap --check.

**Pronunciation aid (rule changes, all aids regenerated by pron_kn.js; none hand-edited)**
- Rule 13a (rendering): a dotted letter written as a subscript after a consonant other than ರ (ಟ್ವೆಲ್ವ಼್, ಡಾಗ್ಜ಼್) fell back to a visible ್ in some fonts only (all 35 such rows in FreeSerif; twelve, months, month, silver in Noto per the lead). pron_kn.js now writes ್ + ZWNJ before such a letter so every font shows the same visible ್; profile.json pronPattern, the BANNED test of pron_kn.js, pron_check.js (BANNED, DOUBLED, PROSE, plus a new "dotted letter after ್ without ZWNJ" error), PRON-TOOL.md and PRON-RULES.md §5 follow. Rendered in Chrome + FreeSerif: identical to the fallback, i.e. the intended look.
- Rule 2 (stress): every word of two or more syllables now has ˈ, as te does: ˌ promoted, else the zh stress of the same sounds, else HAND_STRESS (about, across, around, because, within, until, into, after, under, our, it'll …). Contradiction with the `pron` lesson and the about card removed.
- pron_lookup.json rebuilt (59 entries changed); 53 course rows re-synced (lookup rows from the lookup, the other rows rebuilt from their word IPA and verified by round trip through the old converter); 4 quoted respellings in notes updated. Selftest: 5 example rows updated (ZWNJ), 8 new examples; the profile-table comparison ignores ZWNJ (the table predates rule 13a).

**Localisation (deviations.json, record in deviations.review.json)**: 27 practice items, 9 checks, 3 cards and 3 dialogs. Seoul → Bengaluru, Busan → Mysuru, Jeju → Coorg (ಕೊಡಗು), Daegu → Hubballi, Korea → India (Goa in perfect#6), Korean → Kannada, kimchi → sushi, won → rupees, Han Kang → Kuvempu, K-pop → cricket, Jenny Park → Jenny Brown, "You suffered a lot." / "Good suffering." → "Thanks for all your hard works." / "You did a hard work." (the «ಕಷ್ಟಪಟ್ಟಿರಿ» note, a Korean leftover, replaced by an uncountable-work note), tiger → ghost; I'll have the steak. / Medium rare, please. → I'll have the paneer tikka. / Not too spicy, please. (as pa); Who's your bias? → Who's your favorite player?

**Typed answers (all 128 type items listed and read; scratch type_after.txt)**: wrong-person variants removed in 3 (modals#13, first-conditional#13, phrasal#13); simply-correct alternatives accepted in 25 (washroom / toilet, film, which, have got, love, It's my bag, I'd like / Can I get a salad, shut the door, the USA, that book / that meeting / that movie, should've, love to cook); 0 prompts needed a cue; 0 contracted answers lack their full form in the pack (the generator adds them).

**Lessons and notes**: `pron` lesson: ˈ is on every word of 2+ syllables; new paragraph on ಙ್, word-initial ಆ್ಯ, ಶ಼ and the visible ್ before ˈ or a dotted letter; a line that saying one's own name and town the Indian way is fine. `tense`: "I am going to the gym every day" is now "common in India, say I go abroad" instead of ✗. NITs: ನಿಜವಾಗಲೂ → ನಿಜವಾಗಿಯೂ (4), Round trip note (India: return / one way; single is British), «ಬದಲಾಯಿಸಬೇಕಿತ್ತು» → «ಬದಲಾಯಿಸಿಕೊಳ್ಳಬೇಕು» (card and dialog).

**Interface**: ರಿವ್ಯೂ (was ಪುನರ್ಮನನ / ಮನನ), ಗೌಪ್ಯತೆ, ಅಂಟಿಸಿ, ಉಳಿಸಲಾಗಿದೆ (no ಸೇವ್), ಗೊತ್ತಾಯಿತು — ಕ್ವಿಜ್ ಕೊಡಿ, ನಿಮ್ಮನ್ನು ಏನೆಂದು ಕರೆಯಲಿ? (49 strings; NOTES.md glossary updated).

**Phone check before release (rendering)**: on iOS (Kannada Sangam MN), Android (Noto Sans Kannada) and Windows (Nirmala UI), open deck 18 and check: (1) ಟ್ವೆಲ್‌ವ಼್, ಮನ್‌ಥ಼್ಸ್, ˈಸಿಲ್‌ವ಼ರ್, ಡಾಗ್‌ಜ಼್, ˈಬ್ರೆಕ್‌ಫ಼ಸ್ಟ್ show a visible ್ and a full-size dotted letter, no dotted circle; (2) the dot sits under ಫ ಜ ವ ಥ ದ ಶ, not beside; (3) ˈನರ್ವ಼ಸ್, ಸರ್ವ಼್ಡ್ show the arkavattu over the dotted letter; (4) word-initial ಆ್ಯ (ˈಆ್ಯಪಲ್, ಆ್ಯಸ್ಕ್ಟ್) shows ಆ with the ya-subscript, no dotted circle; (5) ˈ inside a word (ಇಕ್ˈಸ್ಕ್ಯೂಜ಼್) does not break the line or overlap; (6) the tab label ರಿವ್ಯೂ and the subscripts in ಅಭ್ಯಾಸ, ಪ್ರಗತಿ are not clipped at 390px.

**Still for a native speaker (unchanged)**: the ten items of section 4 above (question endings, -ಅಲಿದ್ದೇನೆ, the aid by ear and the names, claims about Kannada speakers' English, grammar claims, calques, idiom equivalents, interface vocabulary, bare nouns after numbers, smaller wording); also the new Kannada text (pron-lesson paragraph, tense sentence, the three new cards and dialogs, the localised prompts ಕೊಡಗಿಗೆ / ಹುಬ್ಬಳ್ಳಿಯಲ್ಲಿ / ಸುಶಿ / ರೂಪಾಯಿ / ಕುವೆಂಪು). Not changed (outside this edit's scope): the `indian-english` reason in deviations.json still lists I have a doubt / today morning as wrong in any variety.
