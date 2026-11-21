# Research brief: Swedish for English speakers

You are the research agent for a new Lang App course: Swedish for ENGLISH speakers (course id `en-sv`; every explanation, prompt and note is in English; the language being taught is Swedish). Deliverables: the learner profile `docs/profiles/en-sv.md`, `tools/target/sv/profile.json`, and, if the pronunciation aid can be generated from the spelling or a small lexicon, the generator `tools/target/sv/respell.js` (same command-line shape as `tools/target/es/respell.js`: `node respell.js "<text>"` prints `<text> -> <pron>`, and it exports `respell` and `pronPattern`), so writers never hand-write a pron. Write nothing else, run no build. Save section by section as you go.

Read first:
- `docs/roadmaps/sv.json` (the researched lesson plan: `variant`, `voice`, `script`, `basis`, `src`, `note`, `hardest`, and the lesson list). It is also the `sv` entry in `packs/roadmaps.js`.
- `docs/BUILD-PLAN-EN.md`, `docs/PRACTICE-SPEC.md`, the last section of `docs/PHASE2-BRIEF.md` (recurring problems in earlier courses), `docs/TARGET-BRIEF.md` (what the writers will be asked to produce from your profile: lessons with 14-item practice sets, decks of 16–18 cards).
- The finished pilot profile `docs/profiles/en-es.md` with `tools/target/es/profile.json` and `tools/target/es/respell.js`: your model for shape, depth and decisions.
- The finished course closest to Swedish named in the notes box (same family, script or region): read its profile and `profile.json` for decisions you can reuse.

Use web search to ground: the errors English speakers make most in Swedish (grammar, vocabulary, false friends, pronunciation); in what order beginner courses teach it (the roadmap names a syllabus: check it, and note what a US adult learner needs first); who the learners are and why they study; and the standard English terms for this language's grammar. Evidence discipline, as in the Spanish profile: tag claims [research-backed] (study named), [curriculum convention] or [practitioner opinion]; list in Sources only pages you actually opened; put everything you could not verify in section 11.

DECIDE AND JUSTIFY, section by section:
1. Summary (8 lines).
2. Variant and register: the roadmap's variant (`docs/roadmaps/sv.json` → `variant`). Which form of "you" (or politeness level) the course teaches first and when the other appears; how examples address people; spelling policy where the language has more than one (state ONE house rule and the alternates learners will see); how regional or colloquial forms are handled.
3. Glossary: the English grammar terms the course uses, each once, consistently.
4. Error zones of English speakers, ranked, each with a wrong → right pair.
5. Learners: who, why, what they need first.
6. Pronunciation aid (`pron` on every card and example row): what in the spelling misleads English speakers. Decide between a generated English-letter respelling, IPA, or none (where the spelling is already a reliable guide); build `respell.js` if it is reliable enough and say how reliable, with a list of the words it gets wrong (6.5). Give the full key, the exact format, a `pronPattern` regex (printed by `pronPattern()`), and 20 worked examples that pass it. Say what the first lesson must teach so the aid can be read.
7. Standing practice rule: the ONE or two things every practice set must keep re-testing because English speakers get them wrong everywhere. Give English keywords (a regex alternation) that a `why` line uses when an item tests it, tested against a table of sample `why` lines that should and should not match.
8. Lessons: FINAL ordered list. Start from the roadmap's items (keep their ids without the `sv-` prefix as lesson ids; you may reorder, rename, merge or replace an item if this variant or these learners need it, saying why; you may add up to three lessons). For each: id, English title, the roadmap item it covers, 2–3 lines on content and the English-speaker trap it targets, and which deck it links to. 20–28 lessons.
9. Decks: FINAL list of 16–18 decks in order, English deck names, about 16–18 cards each, in 4–5 groups (English group names), each with a one-line description and the lesson(s) that link to it. Include a "Traps for English speakers" deck (false friends, calques) and a "Compliments" deck (kind things to say about food, work, skills and people, and how to answer a compliment). Give 5 sample cards per deck so writers know the level and tone. Localisation: names, cities, food and money used in examples.
10. Typing and script: the letters beyond plain a–z and how they are typed (`keys` for the accent bar), whether a missing accent counts as "almost" (`accents`), apostrophes and hyphens, capitalisation, punctuation, what a typed answer must and need not include, and the `targetScript` regex. Check what the app already supports (the finished course closest in script is your guide; `docs/MULTILANG-SPEC.md` lists the matcher's options). If the course needs ANY change to the app (a new letter fold, a new font, a new script, special matching), do not work around it: list each change in priority order, and for each say what the course does if it is NOT built.
11. Gaps and unverified claims; then Sources.

`profile.json`, exactly this shape (all fields required; copy any extra fields the closest finished course uses only if this course needs them):
{"target":"sv","nameEn":"Swedish","self":"<name of the language in itself>","ttsLang":"<BCP-47 voice, from the roadmap's voice field>","brand":"<short brand word in the target language>","accents":true|false,"keys":"<space-separated special letters or empty>","greet":[["<late-night greeting>","<English gloss>"],["<morning>","…"],["<afternoon>","…"],["<evening>","…"]],"pron":"required|optional|none","pronPattern":"<regex source or empty>","targetScript":"<regex character class any target string must match at least once>","standingRule":{"keywords":"<alternation>","flags":"i","minOrder":2,"minType":2},"lessons":[{"id":"…","title":"…","roadmap":"<roadmap item id or empty>","deck":"<deck name>"}],"decks":[{"name":"…","group":"…","desc":"…"}],"titles":["<7 level titles in English, beginner to master>"]}

When done, write the stage-1 lead note (`docs/briefs/en-sv-lead.md`, format in `docs/briefs/HANDOFF-TEMPLATES.md`) and stop.

## Notes for the researcher (from the queue)

Closest finished course: German (`docs/profiles/en-de.md`, `tools/target/de/profile.json`). Pitch accent and the sj-sound mislead English speakers; en / ett gender and the definite suffix (-en, -et); verb-second order.
