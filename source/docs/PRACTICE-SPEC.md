# Lesson practice sets — contract (v1)

Why: the research report (`reports/Grammar learning order research.md`, "Prioritized changes" 1, 6, 9, 10) found that the
3-question multiple-choice check is recognition-only and far below the one practice-volume figure available (~16 items).
Every lesson gets a practice set of 12-16 items that escalates from recognition to typed production.

## Data

`PRACTICE = { <lessonId>: [ item, item, ... ] }` — pure JSON-compatible data, 12-16 items per lesson, in this block order:
4-5 `mc` → 3-4 `order` → 3 `fill` → 3-4 `type`. Items within a lesson are "blocked" (one grammar point at a time);
the last 2 items may mix in a confusable neighbour from an EARLIER lesson.

Text conventions: prompts (`q`, `p`), `why` and `hint` are in the learner's NATIVE language (English in en-ko, Korean in ko-en).
Answers are in the TARGET language (Korean in en-ko, English in ko-en). No HTML anywhere; plain strings only.

```js
// 1. recognition. o[0] is ALWAYS the correct option; the engine shuffles. Exactly 4 options.
{ t:"mc", q:"'I study at a café' =", o:["카페에서 공부해요","카페에 공부해요","카페를 공부해요","공부해요 카페에서"], why:"Where an action happens → 에서." }

// 2. word tiles. a = the tiles in the correct order (2-6 tiles, split on spaces). x = 1-2 distractor tiles that must NOT be used.
{ t:"order", p:"I drink coffee at a café", a:["카페에서","커피를","마셔요"], x:["카페에"], why:"Place of action first, verb last." }

// 3. typed gap-fill. q contains exactly one "__" (two underscores). a = every accepted fill. o = exactly 3 wrong fills
//    (used for the tap fallback when the learner has no target-language keyboard). p = meaning of the full sentence.
{ t:"fill", q:"카페__ 공부해요", p:"I study at a café", a:["에서"], o:["에","를","는"], why:"Action location → 에서." }

// 4. typed sentence. a = EVERY acceptable answer (list natural variants: with/without the subject, with/without dropped particles
//    where natural). a[0] is the model answer shown as feedback. hint = the key words, separated by " · ". x = 1-2 distractor tiles
//    for the tile fallback (optional).
{ t:"type", p:"I drink coffee", a:["커피를 마셔요","저는 커피를 마셔요","커피 마셔요"], hint:"커피 · 마셔요", x:["커피가"], why:"Object + 을/를, verb last." }
```

Rules for authors
- Use only vocabulary and grammar the learner has met in this lesson or earlier lessons (in the course order) or the lesson's deck.
- Every `type` item must have a short, unambiguous answer (2-5 words). List all natural variants in `a`.
- `why` is one short sentence. Required on `mc` and `fill`; recommended on the others.
- Polite 요-form is the default register in en-ko unless the lesson teaches another.
- The engine normalises before comparing: trims, collapses spaces, strips . , ! ? ~ and quotes; for English it also lower-cases
  and treats ’ and ' the same. Do not list variants that differ only in those ways.
- No romanization in practice items.

## Engine behaviour (for reference)
- Practice is offered from the lesson page. It never gates unlocking and never changes what marks a lesson done.
- Scoring is on the FIRST attempt of each item. Wrong first attempt → one hint and one retry → then the model answer + `why`.
- State: `S.practice[lessonId] = { n: runs, first: best first-attempt score (0-1), last: last first-attempt score, ts }`.
- No-keyboard fallback (`S.kbTiles`): `fill` becomes a 4-option tap, `type` becomes tiles built from a[0] + x.
