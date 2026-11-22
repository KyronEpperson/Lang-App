# Hand-off: en-da ready for merge

## Checks

`node tools/target/gen.js da` wrote `/tmp/course-en-da.hold.js`: 26 of 26 lessons, 18 decks, 308 cards, 364 practice items, 54 dialogues, 36 examples, 18 patterns.

Last line of `node tools/target/validate.js da`: `PASS: all checks OK`.

`node tools/target/repron.js da` after the review: 620 prons read, 0 rewritten. Run again: 0 rewritten.

`python3 tools/target/link_roadmap.py da`: 25 items linked, not covered: none. `traps` has no roadmap id. `packs/roadmaps.js` was reverted and is not in this pull request.

`HOLD` is still in `tools/target/da/`. The pack is not in `packs/`.

## What the reviewer changed

The cold review used grok-4.7-xhigh. The writers used grok-4.7-high. Gemini had no allowance, so the reviewer is the same family. Notes are in `tools/target/da/REVIEW.md`. No pronunciation was hand-edited, and nothing was added to the lexicon.

Files touched: `lessons-1.js`, `lessons-2.js`, `lessons-3.js`, `decks-b.js`, `extra-b.js`. `decks-a.js`, `extra-a.js`, and `respell.js` were left as they were.

The five fixes to read first:

1. `selv tak` returns thanks. A plain "you're welcome" is `det var så lidt`. The greetings lesson had taught `selv tak` as the answer to any `tak`.
2. Lessons still described the old sounds of `stationen`, `gik`, `fordi`, and `aldrig` after those lines had been corrected. The notes now match `sta-SHOH-nuhn`, `gehk`, `foh-DEE`, and `AL-dree`.
3. "From two upward the number does not change" is false for compounds that end in one: `enogtyve kroner`, `etogtyve år`. A bare count with no noun stays `enogtyve`.
4. `på mandag` is this coming Monday. Every Monday is `hver mandag`.
5. The plural of `lille` is `små`, not an ending on `lille`. A where-question no longer gets `Ja`. The negation model now has the comma in `Anna siger, at hun ikke kommer`.

## Native check first

From `REVIEW.md`. File paths are under `source/tools/target/da/`.

1. `hvornår` VOH-naw. Stress and the vowel. The questions lesson presents this line with no warning.
2. `for` foh, in `tak for mad` and `glad for`. `fordi` stays foh-DEE.
3. `koster` KOHS-tuh.
4. `havde` HA-dhuh. The careful form keeps soft d. Fast speech may drop it.
5. The day names. The lessons already say the g of `dag` is silent and that `onsdag`'s o comes out long.
6. `København` koe-buhn-HAWN. Stress on the last syllable. The profile is least sure of this listing.
7. `forældre` FOH-rael-uh and `forældrene` FOH-rael-uh-nuh. The family lesson says the stress belongs on the æ.
8. `fabrik` FAB-rehk and `eventuelt` EH-wuhn-too-uhlt. The traps lesson says the real stress is late.
9. `toilettet` TOH-ee-luh-duhdh, `ligeud` LEE-yuh-oodh, `minut` MEE-noot, `fjorten` FYOH-tuhn, `halv` halv, `kvart` kvat.
10. `boede` BOH-uh-dhuh and `arbejdede` A-bai-dhuh-dhuh. The aid adds a beat. `toget` TOH-wuhdh against `tog` taw.

Also still unsourced: `Amerika`, `amerikaner`, `amerikansk`, `englænder`, `dygtig`, `dejlig`, `endelig`, `rødt`, `café`, `idé`, `undskyld`, `jer`, `selv`.

Confirm these calls: `selv tak` returns thanks; `etogtyve år` beside `enogtyve kroner`; `på mandag` is the coming Monday; `små biler`; `Jeg er faret vild`; `tak for mad` at the table, not to a waiter.

## Pron tool

Reliable enough to use, and honest about its limits. Every stored pronunciation is the tool's output. Soft d is `dh`. Swallowed endings are written out. The stød is not marked. `hun` and `hund` are both `hoon`. `det` and `der` are both `deh`.

Left on purpose, from Wiktionary: `fordi` foh-DEE, `aldrig` AL-dree, `hvordan` vaw-DAN, `station` sta-SHOHN, `stationen` sta-SHOH-nuhn, `gik` gehk.

`etogtyve` is not stored. The tool only splits `en` + `og`, so `etogtyve` comes out `EH-toh-tew-wuh`. Do not treat that string as confirmed.

## Needs from the lead

No app change. `å` still folds to `a`, and `é` still folds to `e`. The contrasts that need the difference are already marked strict. `accents` stays false.

## Unsure

Whether `halv tre` is 2:30 in the variety this course teaches. It is the house fact. The clock page was not re-opened. Whether `Goddag` is the right afternoon string. The app wants four clock greetings, and `hej` is the greeting the lesson teaches. Whether `må` should also be taught as "must." The course teaches permission only.
