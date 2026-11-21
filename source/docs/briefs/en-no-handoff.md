# Hand-off: en-no ready for merge

## Checks

`node tools/target/gen.js no` wrote `/tmp/course-en-no.hold.js`: 26 of 26 lessons, 18 decks, 318 cards, 364 practice items, 54 dialogues, 36 examples, 18 patterns.

Last line of `node tools/target/validate.js no`: `PASS: all checks OK`.

`node tools/target/repron.js no` after the review: 664 prons read, 0 rewritten. Run again: 0 rewritten.

`python3 tools/target/link_roadmap.py no`: 25 items linked, not covered: none. `traps` has no roadmap id. `packs/roadmaps.js` was reverted and is not in this pull request.

`HOLD` is still in `tools/target/no/`. The pack is not in `packs/`.

## What the reviewer changed

The cold review used grok-4.7-xhigh. The writers used grok-4.7-high. Gemini and Claude Fable had no allowance, so the reviewer is the same family. Notes are in `tools/target/no/REVIEW.md`.

Counts from that note: respell.js 12 lexicon entries; decks-a.js 1 language fix, 1 teaching note, 2 regenerated prons; decks-b.js 2 language fixes, 2 teaching notes, 8 regenerated prons; extra-a.js 2 language fixes; extra-b.js 1 language fix; lessons-1.js 1 teaching note and 2 check reasons; lessons-2.js unchanged; lessons-3.js 3 teaching notes, 2 check reasons, 4 regenerated prons.

The five fixes to read first:

1. `et bad` now says the d (`bah:d`). NAOB has [ba:d]. The old line treated it like `med`.
2. Stress and vowels from NAOB, then regenerated: `etasje` uh-TAH:-shuh, `apoteket` ah-poo-TEH:-kuh, `toalettet` too-ah-LEHT-uh, `Gratulerer` grah-tue-LEH:-ruhr, `ambulanse` ahm-bue-LAHNG-suh, `vakkert` VAHK-uhrt, `forkjølet` fohr-HYOE:-luh, `aktuelt` ahk-tue-EHLT, `torsdag` TOH:SH-dahg.
3. `frokost` is the Danish trap (Danish lunch). `semester` is the Swedish trap (Swedish vacation). The old note blamed both languages for both words.
4. The gift and the cloud are `ei gave` and `ei sky` on the cards, matching the typed-feminine rule. `en` stays in the notes as a form learners will see.
5. "Det er blått i stua" does not agree if the room is blue. The example is now "Huset? Det er blått." The packed lunch is "på kjøkkenet".

## Native check first

From `REVIEW.md`. File paths are under `source/tools/target/no/`.

1. `et bad` bah:d, and `glad` glah:d. The card says the d of `glad` is said. Topp Norsk lists `glad` with the silent-d words.
2. `Gratulerer!` grah-tue-LEH:-ruhr.
3. `Jeg er forkjølet.` yai ae:r fohr-HYOE:-luh. The source line is the verb. Confirm the participle does not keep a t.
4. `torsdag` TOH:SH-dahg. `lørdag` and `søndag` were kept because they already matched NAOB.
5. `Hvor er toalettet?` and `Hvor er apoteket?`
6. `en ambulanse` ahm-bue-LAHNG-suh.
7. `fotball` FOHT-bahl. NAOB [fo`tbal] does not settle oo versus oh.
8. `flyplassen` FLEWP-lahs-uhn. The page that was opened had no pronunciation line.
9. `ham` hah:m in `Anna ser ham.` The page that came up was the noun "skin", not the pronoun.
10. `Matpakka mi er på kjøkkenet.` and `Huset? Det er blått.`

## Pron tool

Reliable for the course after the lexicon. Every stored pronunciation is the tool's output. A colon is a long vowel. Pitch accent is not marked. A long stressed vowel plus r in the same syllable does not match `pronPattern`, so `lørdag` keeps the r at the start of the next syllable.

Left on purpose: `beklager` buh-KLAH:-guhr, `sover` SOH:-vuhr, `soverom` SOH:-vuh-room, `osten` OOS-tuhn, `hvorfor` VOOR-fohr, `ser` seh:r, `Velkommen` VEHL-kohm-uhn (Wiktionary stresses the first syllable), `snakket` SNAHK-uh (the tool drops t on every `-et` of four letters or more, which is also how `huset` is taught; no past-pronunciation page was opened).

Still unsourced, so do not treat the tool line as confirmed: `flyplassen`, `fotball`, `ham`, `aldri`, `genseren`, `Bokmål`, `søstera`, `læreren`. `januar`, `amerikansk`, and `dattera` are not in the course.

## Needs from the lead

No app change. `å` still folds to `a`; the contrasts that need it are already marked strict. `accents` stays false.

The profile's sample lines still say `en gave` and still lump Swedish and Danish together for `semester` and `frokost`. The profile was not edited. The course files follow the typed-feminine decision and the pages opened in review. If the profile should match the course, that is a docs edit, not a blocker for the lessons.

## Unsure

Whether the past `-et` (`snakket`) should keep its t in the aid. Whether `glad` should be silent, as Topp Norsk lists it, or said, as the profile set it. Whether `på andre etasje` is ordinary beside `i andre etasje`. Whether `Jeg er en lærer` should ever be accepted. The course does not accept it.
