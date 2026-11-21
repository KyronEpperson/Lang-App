# Cursor: which model and which agent does what

Written by Claude without knowing which models or agent features your Cursor plan has today. So step 1 is yours: look, then fill in the roster. Do not guess from this file; trust what Cursor actually shows you.

## 1. Fill in the roster (once, and again whenever the model list changes)

List every model you can select, then put each in one tier. Judge by what you know of the model, not its name alone.

| Tier | What it is for | Models you have (fill in) |
|---|---|---|
| S: strongest reasoning and writing | anything where being wrong in a foreign language matters | |
| M: solid general model | structured work with a checker behind it | |
| F: fast / cheap / "auto" | mechanical chores only | |

Also note: can you run subagents or background agents in parallel? How many at once? Is usage metered per request or per token? Write the answers here:

- Parallel agents available: 
- Limit at once: 
- How usage is counted: 
- Allowance left this cycle (update at the start of each course): 

## 2. Role → tier (fixed; do not downgrade to save allowance)

| Stage | Role | Tier | Why |
|---|---|---|---|
| 0 | Fill the research brief from the template | F | copy and replace |
| 1 | Researcher: profile, profile.json | S | every later stage inherits its mistakes |
| 1 | Pron tool (`respell.js`) | S | code plus phonology; errors reach every card |
| 1 | Lead note and decision record | M | summarising the profile |
| 2 | Run `mk_briefs.py` | F | one command |
| 3 | Deck writers A, B | S | target-language content |
| 4 | Lesson writers 1, 2, 3 | S | target-language content and explanations |
| 5 | Run the merge checks, fix format errors (column counts, duplicate keys, missing fields) | M | the validator says exactly what is wrong |
| 5 | Fix content errors the validator reports (wrong answer lists, untaught words) | S | needs the language |
| 6 | Cold reviewer | S, and a DIFFERENT model family from the writers if you have one | a second opinion only helps if it is independent |
| end | Hand-off file, queue status, PR comment | F or M | reporting |

If you have only one S model, the reviewer uses it in a fresh chat that has not seen the writers' chats. If you have no S model at all, stop and tell Kii: do not write courses with M or F.

## 3. Parallel work (only if your plan has subagents or background agents)

What may run at the same time, because the files do not overlap:

- Stage 3 and 4 together: deck writers A and B and lesson writers 1, 2, 3 (five agents). Each owns only its own files in `tools/target/<t>/`. Give each agent ONLY its own brief (`docs/briefs/en-<t>-<role>.md`), the profile, and `docs/TARGET-BRIEF.md`.
- Stage 1 of the next course while stage 3–4 of the current one runs (different folders, different branch: use a separate worktree or agent workspace, never two branches in one working folder).

What must NOT run in parallel:

- Anything before the profile and decision record are final.
- Two agents editing `respell.js`. After stage 1 only the reviewer may change it, and must then run `repron.js`.
- The merge checks while writers are still writing.
- The reviewer before stage 5 passes.

Each parallel writer works in its own scratch folder and must not run `gen.js` into `packs/` (the `HOLD` file prevents this; check it exists before launching writers).

If you have no parallel agents: do the roles one after another in fresh chats, in this order: A, B, 1, 2, 3.

## 4. Keeping each agent cheap

- A fresh chat or agent per role. Never carry a writer's chat into the next role.
- Tell each agent exactly which files to read. Do not let it explore the repo; `src/app.html` alone is larger than a whole course.
- Writers read at most one finished file of the same kind as a model (`tools/target/es/decks-a.js` or `lessons-1.js`), not several courses.
- Fix validator errors in one batch per file, then re-run; do not re-run after every single edit.
- Never paste a pack file (`packs/course-*.js`) into a chat.

## 5. When the allowance runs low

Order of what to protect: (1) finish the course in progress, (2) the cold review, (3) starting a new course.

- If the S allowance runs out mid-course: stop writing. Do not continue the course on a weaker model. Commit what exists, note "paused: S allowance" at the top of the lead note, and tell Kii.
- While waiting for the allowance to reset, M and F models may do only: stage 0 briefs for upcoming courses, re-running checks, and format fixes.
- Never start a new course you cannot finish through stage 6 in the same cycle, unless Kii says otherwise. A half-written course costs a second read-in later.

## 6. Record what you used

At the end of each course add one line to the hand-off file under "Unsure": the model used per role and roughly how much allowance the course took. Claude uses this to judge quality by model and to plan how many courses fit in a cycle.
