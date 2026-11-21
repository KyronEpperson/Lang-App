# Hand-off: en-am ready for merge

## Checks

From `source/`, after the cold-review edits, with `HOLD` still in place:

- `gen.js`: wrote `/tmp/course-en-am.hold.js`, 26 of 26 lessons, 17 decks, 301 cards. Nothing under `packs/` was kept.
- `validate.js` last line: `PASS: all checks OK`. 364 practice items, 51 dialogues, 34 examples, 18 patterns.
- `repron.js` twice: `2 prons read, 0 rewritten` both times. Those two are the word `pron` in the header comments of `decks-a.js` and `decks-b.js`. No card or example has a pronunciation.
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

`respell.js` exits 1 on every fidel string and prints a refusal. That is the decision: gemination and the sixth-order vowel are not written, so a generated line would teach one reading of አለ and of ገና. Writers left every pronunciation field empty. The reviewer did not fill any. Do not turn the tool on at merge.

## Needs from the lead

None. No app change, no letter fold, no bundled font. `tilesDefault` and `voiceMatch` are set. The Telugu romanisation-answer fields are not, because there is no romanisation to grade. A future script field, if a pronunciation is ever approved, is U+1200–U+137F.

## Unsure

The ten rows above. Also still open from stage 1: feminine goodbye ሁኚ versus ሁኝ. It is not on a greet card. The cold review is the same family as the writers; say so when you spot-check.
