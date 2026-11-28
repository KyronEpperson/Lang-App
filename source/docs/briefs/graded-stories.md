# Graded stories (ST-1)

Solution 6 of the course report ("Do the courses teach the language?"): the courses had no connected text, the longest was two lines. A learner now gets a short story after each lesson, made of words they have already met.

## What the learner sees (en-es)

- On the lesson page, under the practice set: a button `📖 Story · <title>`.
- Step 1, listen: the whole story is said line by line with no text on screen (recorded clip when there is one, else the device voice). A slow switch. The learner can skip to the text.
- Step 2, read: every line, speaker names on dialogue lines. Tapping a line says it and shows its English. An `English` switch shows all of it.
- Step 3: three meaning questions in English, four options each. A wrong answer shows the right one. "Look at the text again" is always there.
- The result is saved as `S.story[lessonId]={n,r,ts}` (times read, best score, when). It never decides whether a lesson is done, and gives a little XP.

## Data

- `tools/stories/<course>/stories.js`: `{names:[...], none:[lesson ids with no story], stories:{lessonId:{title,tr,lines:[[target,meaning,speaker?]],qs:[{q,o:[right,wrong,wrong,wrong]}]}}}`.
- `node tools/stories/apply.js` writes them into the pack as `STORIES`, between `/*STORIES*/` and `/*END-STORIES*/`, before the SECS block. After regenerating a pack: `node tools/sections/apply.js`, then `node tools/stories/apply.js`. `ship.sh` fails when the block is missing or out of date.
- A course with no `STORIES` shows nothing. No switch is needed.

## The rule a story must pass

`node tools/stories/check.js check <course> tools/stories/<course>/stories.js` (in `ship.sh`):
- 40 to 150 words; at least 95% of running words met by the end of that lesson (cards, their dialogues and examples, lesson text, practice answers), names aside;
- a title with its meaning, every line with its meaning, exactly three questions with four different options, no markup.

`node tools/stories/check.js vocab <course>` prints the words met by the end of each lesson: give that list to the writer.

## en-es, the first course

- 25 stories, one for every lesson from the second (the sounds lesson has none), 40 to 150 words each.
- Written by three Opus writers against the checker, then read and corrected by the dispatcher (five corrections).
- Things the writers flagged in the course itself, not changed here: the met-word lists hold `quieremos` (a quoted mistake), some preterite forms early, `señor` is missing, and the preterite lesson shows "He trabajado".

## Rolling out to another course

1. `check.js vocab <course>` for the word lists. Languages written without spaces (ja, zh, yue, th) need a word splitter in `check.js` first.
2. Opus writes the stories (language work), the checker gates them, a second read corrects them.
3. `apply.js`, the checker and `tools/tests/stories.js` (extend its course list).
4. Audio: stories use recorded clips only where a line is already a clip. Recording story lines is the owner's terminal work.

## Not tested

Real phones, real voices (the test has none), learners. No native-speaker review (owner's rule: release without waiting).
