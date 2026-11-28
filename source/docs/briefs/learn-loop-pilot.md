# Learn-loop pilot (LP-1): solutions 1 to 5 of the course report, on en-es

**Status (2026-11-28, 2.146.0):** live on Spanish for English speakers (en-es) only. Every other course behaves as before. The owner decides the roll-out (most-used languages first).

Source: the report "Do the courses teach the language? Six courses against the evidence" (2026-11-28; memory note `course-evaluation-report`). The owner answered "yes lets implement these". Its four open decisions were taken as the report recommended: the practice set is part of finishing a lesson; the pronunciation line fades in quizzes; the pilot is en-es; recording Cebuano and Japanese audio stays with the owner's terminal (keys).

## What changed for an en-es learner

| # | Before | Now |
|---|---|---|
| 1 | A lesson counted as done after the quick check and the review. The practice set was offered afterwards. Each new card was asked twice, both as one of four. | The lesson is done when the practice set has been finished once (no pass mark). The second question on a new card is **made**: word tiles for a sentence of three words or more, typing for a word or pair (letter and word tiles with "No keyboard? Use tiles"). The lesson review mixes making in. |
| 2 | Cards that live only in a lesson (213 in en-es, 171 of them sentences) were never asked again. | The judge schedules them. Due ones come back in Review (All due) and in sessions: tiles while the memory is under 2 days, then one missing word, then typed from 7 days. At most 10 a day; a session takes 1, 2 or 4 out of its own review share. |
| 3 | A standard session asked nothing by ear. | With a voice or recorded clips: two audio-first questions (one "listen and pick the meaning", one "listen and build it"), one dialogue question in a standard session, and a new card is heard before it is seen. |
| 4 | Practice items belonged to one lesson. | A checkpoint row after lessons 5, 10, 15, 20 and 26: 18 items from all practice sets so far (missed items three times as likely, the last five lessons 1.5 times), then two replies in a situation built from the dialogues. No pass mark, never gates. A missed item links to its lesson. |
| 5 | The pronunciation line stood under every quiz option. | After lesson 1 (sounds) it is off in quizzes and Review unless the learner turns it on ("Aa pronunciation"). Lessons, flip cards and feedback lines keep it. A learner who set the switch keeps their setting. |

Also: lesson time label `~15 min` (was `~5 min`), part of solution 14.

## Code

- Patch `tools/patches/lp_pilot.py` + block `tools/patches/lp/lp.js` (all `lp*` functions, `renderMakeQ`, `lsFinish`, `quizRomOn`). Switch: `LP_ON` in `src/app.html`. Roll-out to a course = add its id to `LP_ON`.
- Saved state: `S.pmiss` (missed practice items per lesson), `S.lpDay` (sentences answered today), `S.practice['cp:<n>']` (checkpoint scores). All survive `sanitizeState` and `mergeState`.
- The judge's rules hold: no chooser reads a card's box (`lpSentStage` reads the judge's memory length), answers go through `quizGrade` (tiles and typed as `type`, a tapped gap as `pick`).
- Test: `node tools/tests/learnloop.js` (28 checks, in `ship.sh`). `tools/tests/lesson_drive.js` answers a making question by "Show answer".
- `docs/PRACTICE-SPEC.md` "Engine behaviour" notes the pilot exception.

## Before rolling out to another course

1. Word boundaries: tiles split on spaces. Japanese, Mandarin, Cantonese, Thai need stored boundaries first (report, solution 2). Latin-script and Korean courses can go as they are.
2. Solution 5 uses "lesson 1 done" as "script learned". Courses whose foundation is several lessons need the last foundation lesson instead. Korean lessons also tie their romanization switch to the same setting (`lsRomT`): check that lessons keep the line.
3. Courses for learners whose interface is not English need the new strings in the interface dictionaries (about 20; `LL()` falls back to English).
4. Listening needs a voice or clips (`lpHear`): Cebuano has none, Japanese only the device voice.
5. Not built here: sentences in Weak spots; Mandarin tone-mark questions; counting lesson sentences on Progress.
