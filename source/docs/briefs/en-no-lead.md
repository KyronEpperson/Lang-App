PROGRESS (updated 2026-11-21 15:39 CST)
Course: en-no   Branch: cursor/en-no   PR: https://github.com/KyronEpperson/Lang-App/pull/7
Done: research brief, research, pron tool, lead note, decisions, briefs, deck A
Next: deck B, lesson 1, lesson 2, lesson 3
Checks: deck A partial PASS: all checks OK (partial). 9 decks, 162 cards. Full course not run. Lexicon fixes wait until the other writers finish.
Models used: research brief = no model (copied from the template); research and pron tool = grok-4.7-xhigh; decisions = grok-4.7; briefs = mk_briefs.py; deck A = grok-4.7-high
State: WORKING

Lexicon, after the other writers finish, then regenerate. Kept in the files with the tool's stress: Beklager (should stress the second syllable), Velkommen (stress on komm). Not used, because the tool looked wrong: forstår, osten, januar, skjorta, amerikansk. Unverified weekdays left as printed: torsdag, lørdag, søndag. Compounds a native should hear: matpakka, kjøttkaka, et rundstykke.

# Lead note: en-no stage 1

## Where the work is

Branch `cursor/en-no`. PR https://github.com/KyronEpperson/Lang-App/pull/7.

Files: `docs/profiles/en-no.md`, `tools/target/no/profile.json`, `tools/target/no/respell.js`, this note.

Not done: no decision record, no lessons, no decks, no pack, no edit to the app or to `validate.js`. `src/app.html` was not opened. Swedish is not on this branch; German was the finished course used as the model.

## What to do

Read §2 (variant and the two house rules), §6 (the aid and what it refuses to mark), §7 (the standing rule and the keyword table), §8 (the moved lesson, the one added lesson, and which existing lesson points at Compliments), and §10 (the å fold). The lesson and deck lists in §8–§9 and in `profile.json` are the same list.

Done when the decision record accepts or replaces those choices. Then writers can start. They follow `docs/TARGET-BRIEF.md`: 14-item practice sets, decks of about 16–18 cards, pronunciations only from the tool.

## Decisions to record

1. **Feminine is *ei* and *-a* in every typed answer** (*ei bok, boka*). Masculine *en / -en*, neuter *et / -et*. Common-gender *en bok / boken* is one recognition note in `gender`. Reason: NoW writes *ei jente*, and *ei* keeps the gender visible. Språkrådet (2023, citing the 1981 reform) says both articles are allowed. "No" would mean typed answers may use *en bok* and *boken*.
2. ***du* is the only singular "you" learners produce.** *dere* is the plural, from `present` on, when the prompt says "(to several people)". *De / Dem / Deres* is one recognition note in `greetings`. Reason: Språkrådet (2024) says public *du* is unmarked, not impolite. "No" would mean a formal cue on every prompt, as in the German course.
3. **`gender` moves to the end of stage 1**, before `present`. Reason: NoW chapter 1 puts *en / ei / et* on the first nouns. "No" would leave gender where the roadmap put it, in stage 3.
4. **One added lesson, `traps`**, roadmap field empty. It is the lesson for Traps for English speakers. **Compliments is not a second new lesson.** The existing `food` lesson points at Compliments. The Food and drink deck is pointed at from `definite`. The Travel and transport deck is pointed at from `modals`. "No" would leave one of those two decks with no lesson.
5. **`pron: required`.** Generated English respelling. A colon is length. Pitch is not marked. Reason: NoW's introductory pronunciation says the alphabet does not show length, and that tones are not marked on single words in that course. A 61-word list taken from those NoW examples matched the key. "No" would be `pron: none` or optional, and writers would have no string to copy.
6. **Standing rule: gender, and verb second including *ikke*.** Not verb endings: there is one present form. "No" would pick a different pair. The keywords and the yes/no table are in §7.
7. **`accents: false`.** *æ, ø, å* are alphabet letters. The one app change is to protect *å* in the fold so *båt* and *bat* are not an accent pair (§10). "No" would set `accents: true` and treat a missing *å* as "almost", which also collapses *ta / tå*.
8. **Past tense of the *snakke* group is *-et* in typed answers** (*snakket*), as in NoW's tables. *snakka* is mentioned once and is not accepted. "No" would accept *snakka*. The claim that *-a* is a real alternate was not checked against a spelling-norm page (§11).

## Register, already applied

Bokmål, East Norwegian, voice `nb-NO`. *du* to everyone, including staff. *dere* for several people. *De* is recognition only. Feminine answers are *ei* and *-a*. Past answers of the regular group are *-et*. Nynorsk and dialects are one sentence in `intro`.

## App changes needed

1. **Protect *å* and *Å* in the fold**, in the engine and in `tools/target/validate.js`, the way *ñ* is protected, before the NFD strip. *å* (U+00E5) decomposes to *a* + U+030A, and the validator fold deletes that mark, so `fold('båt')` equals `fold('bat')`. *æ* and *ø* do not decompose. `docs/BUILD-PLAN-EN.md` says a missing Latin accent is "almost"; this course sets `accents: false` so *å* is not that kind of mark. The engine file was not opened. If the change is not built: keep `accents: false`, and writers mark meaning-changing *å* pairs `!strict` (*ta / tå, båt / bat*). The validator will still demand `!strict` on any fill distractor that only differs by *å*. No new font, no new script. The accent bar is the `keys` string `æ ø å`, which `gen.js` already copies into the pack.

## Pron tool: enforce these

From `source/`: `node tools/target/no/respell.js "Jeg heter Anna."` prints `Jeg heter Anna. -> yai HEH:-tuhr AHN-ah`. `--pattern` prints `pronPattern()`. Every card and example pron is that output, not a hand-written string. A wrong word is added to `LEX_SRC` and the rows are re-run.

| word | output | what a writer does |
|---|---|---|
| bok | `boo:k` | copy it; long *o* is `oo` |
| båt | `boh:t` | copy it; *å* is `oh` |
| kjøpe | `HYOE:-puh` | copy it; *kj* is `hy`, not `sh` |
| norsk | `nohshk` | copy it; *rs* is `sh` |
| huset | `HUE:-suh` | copy it; the neuter *-t* is silent |
| gikk | `yeek` | copy it; *g* before *i* is `y` |
| fotografi | (first-syllable guess) | do not use until it is in `LEX` |
| any 3+ syllable loan | check stderr | add it to `LEX` if the stress is wrong; the warning only fires when the word contains *c, w, z* or *x* |

Pitch is never added to a pron. The audio is the pitch.

## Evidence, keep at this strength

- The 61/61 figure is the author's reading of NoW's examples, not a recording and not a learner study.
- Section 4 is a teaching page (norskgrammatikk.com) plus NoW. No English-L1 corpus was opened.
- No State Department hour figure. That page did not load.
- *snakka*, *semester* / *frokost* for learners who know Swedish or Danish, and *Det var kjempegodt* as a set phrase, are marked inference in the profile.
- Språkrådet and NoW are the sources for the gender choice and for *du*. They describe what is allowed. The house rule is this course's choice inside that range.
- *Oslo, Trondheim, Stavanger* pronunciations in `LEX` have not been checked against a recording.

## Placeholders

- Level titles are the seven used by the German and Spanish courses: Beginner, Traveler, Explorer, Speaker, Conversationalist, Storyteller, Master.
- `brand` is `Norsk`. `self` is `norsk`, lower case, because the language does not capitalise its name in running text. The roadmap label `Norsk` is the English-side name.
