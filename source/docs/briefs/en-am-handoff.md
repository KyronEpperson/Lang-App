# Hand-off: en-am ready for merge

## Update 2026-11-22: pronunciation aid added (lead review, CHANGES NEEDED)

The course was held because no card had a pron. Now:

- `tools/target/am/lexicon.txt`: 392 entries, every Amharic word in a card, example row, dialogue, example, pattern example and practice answer, `fidel<TAB>romanisation<TAB>source`. 307 seen in an opened source (240 words, 67 single letters from the BGN/PCGN chart), 55 composed from attested parts, 30 `unverified:model`.
- `respell.js` is lexicon-first and throws on unknown words, Latin letters, digits and blanks. `profile.json`: `pron: required`, `pronPattern`, `accents: true`, `pronAnswers`, `pronAnswersKeepSpaces`, `pronAnswersScript` `[\\u1200-\\u137F]`, `romaAlmost`, `pronAnswersWarn`. Key in profile §6.2 and in the `orders` lesson.
- Prons filled by a one-off insert from the tool, then `repron.js am` twice: `542 prons read, 0 rewritten` both times.
- Content changes: card `ከቀኑ 6 ሰዓት` became `ከቀኑ ስድስት ሰዓት` (a digit has no reading); card `ቀጥታ` was replaced by `ቀጥ ብለው ይሂዱ` (no trustworthy source for its long consonant), with the `directions` example, check, mc, fill and type items that used it; the fill `ው__` lost its wrong option `ሀ`, which romanises the same as the answer `ሃ`; the three `ገና` and one `አለ` example rows now give one reading and name the other in English.
- `gen.js am` then `validate.js am`: `PASS: all checks OK`, no WARN, no `pronAnswers` warnings. `HOLD` stays.
- Not done: a fresh stage-5 and stage-6 cold review of the prons. The speaker check list for the romanisation is profile §6.5.

## Checks

From `source/`, after the cold-review edits, with `HOLD` still in place:

- `gen.js`: wrote `/tmp/course-en-am.hold.js`, 26 of 26 lessons, 17 decks, 301 cards. Nothing under `packs/` was kept.
- `validate.js` last line: `PASS: all checks OK`. 364 practice items, 51 dialogues, 34 examples, 18 patterns.
- `repron.js` twice: `0 rewritten` both times (first stage-5 run; superseded by the pron update below).
- `link_roadmap.py`: 26 items linked, not covered: none. `packs/roadmaps.js` was reverted.

## What the reviewer changed

The cold reviewer edited all seven writer files in place and added `tools/target/am/REVIEW.md`. Diff: 55 insertions, 54 deletions. No card was deleted. Same model family as the writers (`grok-4.7-xhigh`). Gemini and Claude Fable had no allowance left.

| File | Diff lines | What changed |
|---|---|---|
| decks-a.js | 4 | Polite morning vs a group of friends; the "from 31" note |
| decks-b.js | 4 | Pointing with ይህች; the warning is narrower |
| extra-a.js | 12 | Cat gender; definite house, tree, market; "Ethiopian (a man)" |
| extra-b.js | 4 | "There are many houses"; reply is እሺ |
| lessons-1.js | 26 | Evening greetings; book spelling; hello order; ልጇ; ረ |
| lessons-2.js | 47 | ትሄጃለሽ and ትጠጫለሽ; definite with ይህ; number + plural |
| lessons-3.js | 12 | Mother and sister take ናት; kitfo; egg dish; want spelling |

Five fixes that matter most:

1. Evening greetings were built on the morning ending. `አመሽክ` and `አመሽሽ` are now `አመሸህ` and `አመሸሽ`. Morning `አደሩ` is polite; friends as a group are `አደራችሁ`.
2. You-go and you-drink, to a woman, left the consonant unpalatalized. They are `ትሄጃለሽ` and `ትጠጫለሽ`. She stays `ትሄዳለች` and `ትጠጣለች`.
3. "Who is your mother?" and "Who is your sister?" used `ነው`. They now take `ናት`. Father and brother stay `ነው`.
4. "The house / the tree / the market" had no definite ending. They are `ቤቱ`, `ዛፉ`, and `ገበያው`. A cat is `ድመት ትንሽ ናት`.
5. Real forms were marked wrong: Peace Corps `መጽሀፍ`, a plural noun after a number, and `አበበች ሰላም`. The English -s (`ቤትስ`) is the mistake that stays wrong.

## Native check first

From `tools/target/am/REVIEW.md`. File, item, why:

1. `lessons-2.js` `ትጠጫለሽ` — you drink, to a woman. Confirm `ጫ` versus a longer `ጪያ` spelling.
2. `extra-a.js` `ድመት ትንሽ ናት` — a cat treated as feminine.
3. `lessons-2.js` `ሁለት ድመቶች አሉኝ` — plural thing, they-form of have.
4. `lessons-1.js` `ልጇ` — the girl and her child. `ልጅቱ` when only the girl is meant.
5. `lessons-1.js` `አበበች ሰላም` — name before hello, accepted as ordinary.
6. `lessons-2.js` `ይህ ቤቱ ነው` — this, plus a definite house.
7. `lessons-2.js` `በቤት ናት` — she is at home. Some speakers prefer `ቤት ውስጥ አለች`.
8. `lessons-3.js` `ቡናው በጣም ቆንጆ ነው` — the manual's coffee compliment.
9. `lessons-3.js` `ወንድምዎ`, `እህትዎ`, `እናትዎ` — polite `-ዎ` copied from `አባትዎ`. The manual prints it on father.
10. `lessons-1.js` `አደራችሁ` — morning, to more than one friend. Evening plural `አመሻችሁ` was not added.

## Pron tool

Lexicon-first, like `tools/target/nan/`. See profile §6. To add a word: add a lexicon line with its source, then run `node tools/target/repron.js am`. Never type a pron by hand.

## Needs from the lead

None for the app. Decide whether ጸ/ፀ stays `s'` (course wording) or becomes `ts'` (BGN/PCGN), and have a speaker check profile §6.5.

## Unsure

The ten rows above, and the ten romanisation rows in profile §6.5. Also still open from stage 1: feminine goodbye ሁኚ versus ሁኝ. It is not on a greet card. The cold review is the same family as the writers; say so when you spot-check.
