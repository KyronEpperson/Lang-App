# Writer brief for courses that teach a language to English speakers (`en-<t>`)

Read this whole file, then your role file. The course teaches `<LANG>` to ENGLISH speakers: every explanation, prompt, hint, note and `why` is in plain, friendly English; every answer, card target and example sentence is in `<LANG>`. Plan: `docs/BUILD-PLAN-EN.md`. Style authority for the course: `docs/profiles/en-<t>.md` and `tools/target/<t>/profile.json` (variant, register, glossary, pron format, standing rule keywords, the FINAL lesson list and deck list). Follow them exactly; if you think the profile is wrong, say so in your report and still follow it.

## Files (in `tools/target/<t>/`), one owner each
- `decks-a.js`, `decks-b.js`: `module.exports = { "<Deck name exactly as in profile.json>": \`…\` , … }` — one card per line: `target | pron | meaning | note`. `target` = the `<LANG>` phrase (what the voice reads; no English, no brackets); `pron` = exactly the profile's pronunciation format (or empty if the profile says none); `meaning` = natural English; `note` = one short English line that helps (when to use it, the trap for English speakers, a literal gloss) — may be empty for at most a quarter of a deck.
- `extra-a.js`, `extra-b.js`: `exports.DIALOG`, `exports.EXAMPLES`, `exports.PATTERNS` as template strings, one row per line. DIALOG: `card target (exact) | line A | line B (the reply) | English of A / English of B` — a two-line exchange in `<LANG>` in which the card's phrase is used. EXAMPLES: `card target (exact) | a longer <LANG> sentence using it | English`. PATTERNS: `<LANG> frame with ___ | English frame | filled <LANG> example | English`. Keys must be card targets from YOUR decks.
- `lessons-1.js`, `lessons-2.js`, `lessons-3.js`: `module.exports = [ { id, title, blurb, deck, body, check, practice }, … ]`.

## A lesson
- `id`, `title`, `deck` exactly as profile.json lists them (title without a number). `blurb`: one line that says what the learner will be able to do.
- `body` (a template string): 250–450 words of English, written for an adult who knows no grammar terms: explain by contrast with English ("English says…, <LANG> says…"), one idea per section. Allowed tags only: `<p> <h3> <ul> <li> <b> <i> <div class="tip"> <div class="tbl"><table><tr><th><td> <td class="k">` (`class="k"` on cells that hold `<LANG>`). At least 6 example rows `{{ex:<LANG> sentence|pron|English}}`, placed right after the point they illustrate. End with a `<div class="tip">` that names the most common English-speaker mistake as a wrong → right pair. No `//` anywhere, no arrows other than →, no invisible characters.
- `check`: exactly 3 questions `["question in English", ["opt","opt","opt","opt"], answerIndex, "why"]`; answers not all at the same index; wrong options are mistakes an English speaker would really make.
- `practice`: 14 items in this order — 5 `mc`, 3 `or`, 3 `fi`, 3 `ty` — in the shorthand of `tools/target/lib.js` (read its header):
  - `['mc', question, correct, wrong, wrong, wrong, why]`
  - `['or', English prompt, 'tiles in order', 'distractor tiles', why]` (tiles split on spaces; use ` | ` between tiles when a tile has a space or the language has no spaces)
  - `['fi', '<LANG> sentence with __', English meaning, 'answer|other accepted', 'wrong|wrong|wrong', why]`
  - `['ty', English prompt, 'accepted|accepted|…', 'hint: base forms of the key words · a short English note', 'wrong words for the tile fallback', why]`
  - Add `'!strict'` as a last element when an accent mark is the point (the engine otherwise accepts an answer that differs only in accents as "almost").
- Difficulty climbs inside a set: recognise (mc) → build (order) → complete (fill) → produce (type). Use only words the course has taught by that lesson or that the item's prompt or hint supplies.
- STANDING RULE: at least 2 of the order items and 2 of the type items in EVERY set must hinge on the profile's standing rule, and their `why` must use one of its keywords.
- ACCEPTED ANSWERS: list every natural correct answer a learner could type for the prompt (with and without the subject pronoun where both are normal, synonyms taught earlier); if you cannot list them all, add a cue to the English prompt ("(informal)", "(use tener)") so that only the listed ones are natural. Punctuation and capitals are ignored by the matcher; ¿ ¡ are ignored too.
- Within one deck, no two cards may have the same English `meaning` (quizzes show the meaning): add "(formal)", "(informal)", "(to a woman)" or a different gloss.
- A distractor must be WRONG, not merely less common. A fallback word for a type item must not be able to rebuild an accepted answer.

## Quality bar
Natural, current `<LANG>` in the profile's variant and register — never textbook-stiff, never slang unless the deck is about slang. Do not teach a claim about `<LANG>` you are not sure of; say less instead. The same `<LANG>` string must have the same `pron` everywhere (the validator compares). English glosses are idiomatic American English.

## Check before you report
S = a scratch directory you create under `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p3/`. Other writers are working in the same folder at the same time, so validate in partial mode: `node tools/target/gen.js <t> $S/c.js && node tools/target/validate.js <t> $S/c.js --partial` and fix every line about YOUR files; `node --check` on your files. If gen fails because another writer's file is mid-edit, wait a minute and retry. Do not run build.sh, do not commit, do not touch packs/, src/ or other folders. Save each deck or lesson to the real file as soon as it is finished.

## Final reply (concise)
Counts, the validator lines about your files (or "none"), any place you departed from the profile and why, and the strings a native speaker should check first.
