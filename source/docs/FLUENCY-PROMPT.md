# Fluency polish — prompt to self

Use with the `iterate-prompt-loop` skill (default 10 iterations). One iteration = one gap closed and shipped.

## Goal
A learner who finishes the course should be able to **build their own sentences**, not just recognise cards. Every iteration must move the app from "memorise phrases" toward "understand the system and produce language".

## Each iteration
1. **Audit as a beginner.** Walk the lesson list in order for the active course. Ask at each step: *what is this lesson assuming I already know that nothing has taught me?* The first unexplained assumption is the gap. (This is how Nouns / Verbs / Putting them together were found: Particles said "attach to a noun" before any lesson said what a noun is.)
2. **Pick one gap**, in this priority: missing foundation > missing bridge between two lessons > missing production practice > polish.
3. **Write the fix** following the lesson contract below.
4. **Verify**: every Korean line checked against the romanizer (`romanize.py`), every lesson has a 3-question check, deck exists, `./build.sh`, `node harness.js` green, screenshot the lesson in dark mode.
5. **Ship**: bump version, copy to `lang-app/`, commit, push to main, republish the artifact. Log one line in `iterations.md`.
6. If verification fails, restart the iteration with a new prompt — do not count it.

## Lesson contract
- Edit `src/app.html` (en-ko) or the generators under `tools/content/` (ko-en). Never hand-edit packs or `korean-flashcards.html`.
- Shape: one-paragraph idea in plain English → 3–5 short sections, each a rule in one sentence + 2–4 `${ex(korean, romanization, english)}` examples → one tip → "Common mistakes" box with ✗ → ✓ pairs.
- Reuse vocabulary the learner already met in earlier lessons/decks; introduce at most ~8 new words per lesson.
- Each lesson ends in something the learner can *say* that they couldn't before.
- Insert lessons where they belong pedagogically and renumber titles; ids never change (progress is keyed by id; `lessonUnlocked` keeps earlier lessons open).
- No `//` comments in one-line code. No inline `on*=` handlers. Mirror every en-ko grammar lesson in ko-en when the concept applies.

## Candidate backlog (confirm each in the audit before building)
Foundations
- Pronouns and when to drop them (저/나, 우리, 이거/그거/저거, 여기/거기/저기)
- Question words as a system (뭐, 누구, 어디, 언제, 왜, 어떻게, 몇, 얼마)
- Describing nouns: adjective before a noun (좋은 날씨, 큰 가방) vs. at the end (날씨가 좋아요)
- 이에요 vs 있어요 — "is" vs "there is / have"
- Time: today/yesterday/tomorrow + past/present/future in one place
Bridges to real sentences
- Want / like / can / have to (-고 싶어요, 좋아해요, -(으)ㄹ 수 있어요, -아/어야 돼요)
- Joining two sentences (-고, -지만, -아/어서, -(으)면)
- With / and / or / from–to (하고, 랑, 이나, 부터–까지)
- Comparing (보다, 더, 제일)
- Sound-change rules as their own lesson (why 감사합니다 sounds like 감사함니다)
Production practice (features, not lessons)
- Sentence builder drill: tap word tiles into the right order (uses the four shapes from lesson 9)
- Swap drill: keep the frame, change one noun or verb, say/type the result
- Type-the-Korean answers for learned sentences (recall, not recognition)
- Listening: hear a sentence, pick or type what was said
- Review that mixes grammar patterns into the daily session, not only cards
- "Can-do" checkpoints every ~5 lessons: a short task (introduce yourself, order, make a plan) built only from what's been taught
Course parity
- ko-en mirror of Nouns / Verbs / Sentences (articles a/the, plural -s, he/she/it verb changes, SVO order) — the mirror image of what en-ko skips
