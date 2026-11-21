# Lead note: en-nl stage 1

For the main build (Claude), reviewing the Dutch course before any writer starts. Cursor wrote this after stage 1. It is the review note. The course profile is the separate file `docs/profiles/en-nl.md`.

Paths below are inside `source/`. In the main build's workspace that folder is `/home/claude`.

## Where the work is

- Branch `cursor/en-nl`. Draft pull request: https://github.com/KyronEpperson/Lang-App/pull/1
- Profile: `docs/profiles/en-nl.md`
- Machine twin: `tools/target/nl/profile.json`
- Pron tool: `tools/target/nl/respell.js`
- This note: `docs/briefs/en-nl-lead.md`

Stage 1 files only. No lessons, no decks, no edit to `src/app.html`. `gen.js` and `validate.js` have not been run on `nl`, because there is no pack yet. The Spanish check `node tools/target/validate.js es` passed before this profile was written.

`tools/target/mk_briefs.py` writes `en-nl-A.md`, `en-nl-B.md`, `en-nl-1.md`, `en-nl-2.md`, `en-nl-3.md` and `en-nl-R.md`. It does not write this file. Leave this file in place when those briefs are generated.

## What to do

1. Read this note, then `docs/profiles/en-nl.md` §§1, 2, 6.5, 7, 8 and 11, then `tools/target/nl/profile.json` (lessons, decks, `standingRule`, `pronPattern`).
2. Record a yes or a change for each decision in the next section. Put the record on the pull request.
3. Stage 2 starts only after all three are recorded. The course is already at 28 lessons, the maximum. Another added lesson has no slot.

Done when the pull request carries a yes or a change for the lesson order, for the `traps` lesson, and for the standing rule, and stage 2 has not been started in the same step.

## Decisions to record

**1. Move `de-het`.** It now sits immediately after `zijn-hebben` and before `present`. In `docs/roadmaps/nl.json` it sits after `numbers`. Reason in the profile §8: the article is part of the noun, and Durham's beginners list puts `de` / `het` in the first steps. To keep the roadmap order, say so on the pull request and name this as the reorder to undo.

**2. Add `traps`.** One new lesson, after `geen-niet`, roadmap id empty. It holds *Ik ben goed*, *Ik heb het koud*, and the false friends `eventueel`, `slim`, `brutaal`. To keep 27 lessons, cut this one.

**3. Standing rule.** Two strands, one keyword list: `de` / `het` (which also drives `deze` / `dit` and adjective `-e`), and where the verb sits (verb-second, inversion, verb-final, separable prefix at the end). `niet` / `geen` stays in `geen-niet`. The validator has no exemption field, so the sounds lessons hinge on `de` / `het` through the deck. The keyword regex and the lines that match and miss are in profile §7. A change of rule means a new regex in `profile.json` and a new tested table in §7.

These are already applied in the profile. A yes means writers follow them. A change means the profile and `profile.json` are edited before `mk_briefs.py` runs.

## Register, already applied

`je` / `jij` first. `u` from the greetings lesson, for strangers, shop staff, older people, and the gemeente, and whenever the learner is unsure. Flemish is one sentence in the hard-sounds lesson. `toch`, `wel`, `nou` and `hoor` are out of A1. Detail is profile §§2 and 5.

No app change. The matcher already keeps an internal apostrophe (`auto's`, `zo'n`) and already treats a missing accent as "almost". A leading `'s` typed as `s` matches, and the profile accepts that. Profile §10.

## Pron tool: enforce these

Writers paste prons from `node tools/target/nl/respell.js`. `pronPattern` in `profile.json` is the string `pronPattern()` prints. Leave that string generated.

Confirm the current output before writers start, from `source/`:

```
node tools/target/nl/respell.js bibliotheek kopje broodje Goedemorgen voorkomen hallo werken
```

As of this note the outputs to treat as unsafe or limited are:

| Word | Output | What a writer does |
|---|---|---|
| bibliotheek | BIH-blih-awt-hayk | Leave it off cards until a whole-word fix stresses the last syllable |
| kopje | KAWP-yuh | Approximate. When the diminutive sound is the point, spell `-tje` (`kaartje`, `beetje`) |
| broodje | BROHD-yuh | Same as kopje |
| Goedemorgen | KHOO-duh-mawr-khuh | Teach the word. Wiktionary stresses `morgen`. Capitals are a hint |
| hallo | HAH-loh | First-syllable stress. Many speakers stress the second |
| voorkomen | VOOR-koh-muhn | "To occur" only. "To prevent" needs a different card |
| werken | WEHR-kuh | The aid drops the `n` of `-en`. The `nl-NL` voice may keep it. Lesson 1 says so |

`her-` meaning "again" is not stressed. The heuristic has no way to see that meaning. The full list is profile §6.5.

## Evidence, keep at this strength

Profile §11 is the list. The ones that get over-read:

- Hulstijn's 83% inversion / 47% verb-final is a story-retelling task on 32 selected learners, 16 of them English-speaking. The 157-person means (5.2 vs 4.0) are a written correction test.
- The adjective `-e` table is the Flemish government page. It is the rule Netherlands courses teach. A Netherlands-only official page for the same table was not opened.
- The present-tense `-t` rule is from the Oosterhoff workbook preview, unit 3. The UCL page returned 401.
- No enrolment figure for English-speaking learners of Dutch was opened. The profile claims none.

## Placeholders

Level titles are the Spanish set, Beginner through Master. Brand word is `Nederlands`. There is no Health deck, because no roadmap lesson owns one. Change any of these on the pull request if you want them different. Writers will copy what is in `profile.json`.
