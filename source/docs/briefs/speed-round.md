# One path and the speed round (OP-1, FL-1)

Solutions 10 and 11 of the course report. en-es only (`opOn()`, `flOn()` in `src/app.html`).

## One path (OP-1)

- Before: a session took its new cards from the deck path, whatever lessons were done. A learner met words in sessions that no lesson had taught.
- Now: a session's new cards come first from the decks of finished lessons, in lesson order. Only when those have no new card left does the deck path fill the rest.
- Code: `nextNewCards()`, `opDecks()`. An open Practice loop still wins, as before. Review and Practice are unchanged.

## Speed round (FL-1)

- One row in the lesson list, after the first checkpoint: `⚡ Speed round`. Locked until ten sentences of 3 to 8 words have been answered at least once.
- Ten of the learner's best-known sentences. The English is shown; the learner taps the Spanish words in order. No extra tiles: the aim is speed with known material, not a test.
- Three laps of the same ten. Lap 1 sets the time; laps 2 and 3 show a clock and a bar against 85% of the best lap so far.
- A wrong word does not go in. Nothing is graded and no review date moves.
- Saved as `S.flu={n,best,ts}` (rounds, fastest lap in ms). The row then shows the best time.
- Code: `fl*` functions (`tools/patches/fl/fl.js`). Test for both: `tools/tests/pathspeed.js`.
- It is a row in Lessons, not a fifth mode on Practice: the owner's rule is four modes there.

## Rolling out

- One path: add the course id in `opOn()`. It matters most for Korean, where 90% of deck cards sit outside lessons.
- Speed round: needs the learn-loop pilot (`lpOn`) for its place after a checkpoint, and word boundaries: Japanese, Chinese, Cantonese and Thai need a word splitter first.

## Not tested

Real phones and learners. Whether 85% is the right target was not tuned.
