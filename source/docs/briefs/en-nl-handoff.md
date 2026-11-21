# Hand-off: en-nl ready for merge

## Checks

From `source/`, after the cold review:

- `node tools/target/gen.js nl` wrote `/tmp/course-en-nl.hold.js`: 28 of 28 lessons, 17 decks, 300 cards.
- `node tools/target/validate.js nl` last line: `PASS: all checks OK`. Counts: lessons 28/28, practice items 392, dialogues 51, examples 34, patterns 18. Every lesson has at least 2 order and 2 type standing-rule hits.
- `node tools/target/repron.js nl` twice: `623 prons read, 0 rewritten`.
- `python3 tools/target/link_roadmap.py nl`: 27 items linked, not covered: none. The edit to `packs/roadmaps.js` was reverted and is not in this branch.

Three warnings, kept on purpose because the profile samples put the same card in two decks: `Ik ben student.`, `Het gaat goed.`, `een groot huis`.

## What the reviewer changed

The cold review edited in place. Diff after review: `respell.js` +32, `decks-a.js` 32, `decks-b.js` 52, `extra-a.js` 10, `extra-b.js` 6, `lessons-1.js` 50, `lessons-2.js` 60, `lessons-3.js` 32. Notes are in `tools/target/nl/REVIEW.md`.

The five most important fixes:

1. `Ik moet niet werken` was taught as "I don't have to". It now teaches `Ik hoef niet te werken`. `Ik mag niet werken` is the "not allowed" form.
2. `een moeilijke boek` is now `een moeilijk boek`. The optional `-e` is only after `het` / `dit` / `dat`.
3. `Ik ben druk` ("I'm busy") is now `Ik heb het druk`. `Ik ben druk` means hyper.
4. `Ik ben Anna` is a normal introduction. The intro tip is now `Ik kom van Nederland` → `Ik kom uit Nederland`.
5. Twenty-eight whole-word fixes in `respell.js` (stress and a few sounds: `omdat`, `vandaag`, `studeer`, `lachen`, `weekend`, `file`, `gisteren`, and others). The profile sample rows for those words were updated to the new tool output.

## Native check first

1. `Ik heb het druk.`
2. `Ik hoef niet te werken.`
3. `een moeilijk boek`
4. `kopje` with no t sound (`KAWP-yuh`). `broodje` is the one closer to `ty`.
5. Stress on the last part of `linksaf`, `rechtsaf`, `rechtdoor`, `omdat`, `waarom`, `wanneer`, `plattegrond`.
6. `Ik ben Anna` as a normal introduction.
7. `alsjeblieft` with `sh` (`ahl-shuh-BLEEFT`).
8. `In de keuken is een tafel.` (`staat` may be more natural).
9. `Gaat u rechtdoor.` and `Slaat u linksaf.` as polite instructions.
10. `Een retour naar Utrecht.` (`een retourtje Utrecht` may be more usual at the counter).

## Pron tool

Reliable enough to require on every card. Writers paste `node tools/target/nl/respell.js`. The cold review added the exceptions it was sure of, then `repron.js` rewrote the course so every pron matches the tool.

Still weak, and left as documented in profile §6.5: `kopje` / `broodje`, `bibliotheek` (kept off cards), `Goedemorgen` and `Hallo` stress, `her-` meaning "again", and the letters that cannot show `r`, `w`, `v`, or a light `-ig`. The aid drops the `n` of unstressed `-en`. Whether the `nl-NL` voice keeps that `n` was not checked against a recording.

## Needs from the lead

None. No app change. The three duplicate-card warnings can stay.

## Unsure

- `In de keuken is een tafel` versus `staat`.
- Whether `Gaat u rechtdoor` / `Slaat u linksaf` is the form a stranger should hear, or the bare imperative.
- `Een retour naar Utrecht` versus `een retourtje Utrecht`.
- `slank` was corrected to "slim"; thin is taught as `dun`. Worth a native glance next to `slim` = clever.
- The profile's old sample prons for `lachen`, `omdat`, `vandaag`, `Ik studeer`, `rechtdoor`, and `in het weekend` were updated in this commit so they match the tool. §6.5's exception table does not list every new whole-word fix; those live in `respell.js`.
