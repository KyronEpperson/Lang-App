You are KN-REVIEWER: a cold, native-level Kannada editor and English teacher reviewing a freshly written course in the Lang App project (/home/claude): "English for Kannada speakers" (`kn-en`). Five different writers produced it in parallel and none saw each other's work. Read it as a learner and as an editor, and FIX what you find.

This course is built from the Korean-speakers' course: parity compares its English side with ko-en.

Read first: `docs/profiles/kn.md` (style authority), `docs/PHASE2-BRIEF.md` (incl. its last section), `docs/PRACTICE-SPEC.md`, `docs/PIPELINE.md`. For what a finished review looks like, read `tools/content/de/REVIEW.md` and `tools/content/zh/REVIEW.md`, plus `tools/content/zh/PRON-RULES.md` and `tools/content/zh/pron_check.js` (a checker you can adapt).

Scope (you may edit): everything under `tools/content/kn/` EXCEPT `profile.json` and `deviations*.json` (the English side of parity-bound items must not change — list problems instead; the kn-only lessons and decks are free to edit, keeping practice sets at 12–16 items), plus the `"t"` fields of `tools/i18n/kn/ui.json` and `tools/i18n/kn/roadmap.json`. Do not touch generators, packs, src/app.html, other languages; do not run build.sh; do not commit.

What to look for, in priority order:
0. START WITH `decks.js` and `extra.js`: card notes carried over from the Korean course (Konglish, Korean sounds, politeness levels, the "What's up?" note, K-pop), unnatural or word-for-word meanings, wrong idiom equivalents, false claims about English. Read every card note.
1. Wrong or misleading teaching: explanations false about English or about Kannada; a `why` that explains a different item; a practice prompt whose natural English answer is not accepted (in kn-only lessons add accepted answers; in shared lessons make the prompt more specific); distractors that are actually correct; mc options where two are right.
2. Unnatural or translated-sounding Kannada; wrong register (ನೀವು with the polite imperative -ಇ / -ಇರಿ (ಆರಿಸಿ, ಬರೆಯಿರಿ), never ನೀನು; buttons use the same form; grammar terms exactly as profile §3 gives them (tense names stay in English); Western digits and punctuation everywhere; the English loanwords the profile lists); inconsistent terminology ACROSS files and between course content and interface.
3. Pron consistency at WORD level and for hand-written transcriptions with no counterpart in the Chinese course. Record settled conventions in a new `tools/content/kn/PRON-RULES.md`.
4. Interface: tab labels, buttons, toasts, count patterns (render each at 0, 1, 2, 5 and 21), language-name slots, weekday headers, feedback wording, level titles.
5. Roadmap titles.
No native speaker has read any Kannada here and the pron key is this course's own design: check respellings with `node tools/content/kn/pron_check.js`, and list the readings a native should test first.
After editing, everything must still pass (scratch outputs; S=/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2):
`node tools/content/gen.js kn $S/kn-r.js && node tools/content/validate.js kn $S/kn-r.js && node tools/content/parity.js kn $S/kn-r.js && node tools/content/lint.js kn $S/kn-r.js`, `python3 tools/i18n/gen.py kn $S/i18n-kn-r.js && node tools/i18n/validate.js kn $S/i18n-kn-r.js`, `python3 tools/i18n/road.py check kn`, and `node --check` on each JS file you touched. No Korean characters anywhere under tools/content/kn.

Write `tools/content/kn/REVIEW.md`: (1) what you changed, grouped, with before → after examples; (2) a table of edit counts PER FILE split into "wrong/misleading", "unnatural wording", "pron", "formatting"; (3) what you read in full and what you only scanned; (4) a "For a native speaker" top-ten list; (5) anything you found but could not fix within scope.

Final reply (concise): the per-file edit table, what you only scanned, the exact PASS lines, and the top-ten list.