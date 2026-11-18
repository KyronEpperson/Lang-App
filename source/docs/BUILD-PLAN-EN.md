# Lang App build plan, part 2: other languages for English speakers

Status on 2026-11-18: English speakers can learn Korean (en-ko, 33 lessons). Every other language is locked for them, with a roadmap preview. This plan opens the other 13.

## 1. What gets built

Thirteen courses, each "X for English speakers", explanations in English:

| Wave | Languages | Why this order |
|---|---|---|
| 1 (pilot) | Spanish | Latin script, biggest demand, proves the engine and the pipeline |
| 2 | French, Italian, Portuguese, German | Latin script; reuse everything the pilot proves |
| 3 | Indonesian, Vietnamese | Latin script; Vietnamese adds tone marks and a keyboard problem |
| 4 | Russian | First new script (Cyrillic), still left to right, has spaces |
| 5 | Japanese, Chinese | Scripts without spaces; kana, kanji, pinyin and tones |
| 6 | Hindi, Thai | Devanagari and Thai script |
| 7 | Arabic | Right-to-left target text inside a left-to-right page; letter shapes |

Per course:
- Lessons: every item on that language's roadmap (21 to 27 lessons, level A1, already researched in `packs/roadmaps.js`), each with a body, example rows with audio, a 3-question check and a 14-item practice set.
- A script stage first where the script is new (kana, pinyin and tones, Cyrillic, Devanagari, Thai, Arabic letters): lessons plus letter decks.
- Decks: about 16 decks and 270+ cards (greetings, survival, food, directions, shopping, numbers and time, small talk, feelings, travel, health, work, plus traps for English speakers).
- Dialogues, example sentences and patterns for the drills.

Variants (from the roadmaps, one change): Latin American Spanish with ustedes and no vosotros, plus a Caribbean / Dominican deck (the roadmap said Spain); French of France; German of Germany; Brazilian Portuguese; standard Italian; Tokyo Japanese; Mandarin with simplified characters; Hanoi Vietnamese; Bangkok Thai; standard Indonesian; Modern Standard Hindi; Modern Standard Arabic; standard Russian.

## 2. Engine work before any course is written (phase 0)

The app's generic course path was built for "English for X speakers". These need proving or building for the reverse direction, with a tiny hand-made Spanish pack:

1. Course registration: packs with `native: en`, `target: <x>`; the picker's second step for English speakers lists them; the header, brand and share text use the target's name.
2. Audio: each course speaks in its own voice (`es-MX`, `fr-FR`, `ja-JP`…); a visible message when the device has no voice for that language.
3. Typing answers:
   - Latin targets: accents count, but a missing accent is "almost" (accepted with a correction shown), and an accent bar under the input types á é í ó ú ñ ü ¿ ¡ (per language).
   - Non-Latin targets: tiles by default, with typing optional for learners who have the keyboard.
   - Matching rules per script (full-width forms, kana, tone marks, Arabic vowel marks optional).
4. Word tiles for languages without spaces (Japanese, Chinese, Thai): tiles come from the author's own segmentation, never from splitting on spaces.
5. Pronunciation line: a romanisation for non-Latin targets (romaji, pinyin with tone marks, transliteration); a plain respelling only where spelling misleads English speakers (French). Can be hidden once the script is learned.
6. Script decks and letter drills: the Korean-only Hangul machinery generalised to "letter decks" for any script.
7. Right-to-left target text inside the left-to-right page (Arabic, and it is the mirror of what was just built).
8. Fonts and line height per target script on cards and in lessons.

## 3. Pipeline

New `tools/target/` beside the existing English-course pipeline:
- `profile` per target: variant, register (tú or usted, tu or vous, です/ます), romanisation policy, typing policy, the standing practice rule (the error English speakers make most in that language: gender and agreement for Spanish, particles for Japanese, tones for Chinese, case endings for Russian), voice, script regex.
- `gen`, `validate` (shape, practice spec, standing rule, every accepted answer reachable, script rules), `lint` (same target string has the same romanisation everywhere), `coverage` (every roadmap item has a lesson; roadmap items link to live lessons), `e2e` (complete every lesson and sweep the matcher).
- No cross-course parity: each language has its own curriculum.

## 4. Who does what

| Step | Model |
|---|---|
| Plan, engine, pipeline, merge, tests, final read, ship decision | Fable (lead) |
| Learner profile per target (errors English speakers make, register, script and typing policy, deck list) | Opus |
| Lessons and practice, decks and dialogues | Opus, three or four writers per course |
| Cold review of the whole course | Opus, a reviewer that wrote none of it |
| Mechanical checks | scripts |

No interface translation is needed (the interface stays English), so there is no Sonnet step in this half.

## 5. How each course is verified

- Validators and lint pass; every lesson completes end to end at phone width; no overflow.
- Typing tests per language: accents, the accent bar, tiles, the "almost" path.
- Screenshots of a card, a lesson, each practice type; for new scripts, the letter decks.
- A cold review with per-file edit counts, and a list of the ten things a native speaker should check first.

What this does not prove: nobody on this project is a native speaker of the target languages, and the reviewer is a model. The risk is higher here than in the English courses, because there the taught language was English. Each course ships with that stated, and the top-ten list is the fastest way for a native speaker to help.

## 6. Order of work and size

1. Phase 0 engine and pipeline, proven with a five-lesson Spanish slice (one work session).
2. Spanish in full, reviewed and shipped.
3. Waves 2 to 7, one or two courses at a time.

Each course is about the size of one of the English courses (roughly five writers plus a review). At the usage limits seen so far that is about one course per five-hour window, so thirteen courses is several days of windows, not an afternoon. Each course ships as soon as it passes, so progress is visible language by language.
