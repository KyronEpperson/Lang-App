# Cursor: which model and which agent does what

Written by Claude without knowing which models or agent features your Cursor plan has today. So step 1 is yours: look, then fill in the roster. Do not guess from this file; trust what Cursor actually shows you.

Roster filled 21 Nov 2026 from this cloud-agent session. Two sources, both visible here:

- This run's own model, from the cloud run record: `grok-4.7`.
- The model slugs the Task tool in this session accepts for a subagent. There is no model-picker screen in this VM. `inherit` is not a model; it means "use the parent", which is `grok-4.7`.

Effort suffixes (`low`, `medium`, `high`, `xhigh`, `max`) are the same model. A separate `-fast` slug is listed on its own. `muse-wonder-1.0` is selectable, and it is not tiered: this session has no evidence of how strong it is.

## 1. Fill in the roster (once, and again whenever the model list changes)

List every model you can select, then put each in one tier. Judge by what you know of the model, not its name alone.

| Tier | What it is for | Models you have (fill in) |
|---|---|---|
| S: strongest reasoning and writing | anything where being wrong in a foreign language matters | `claude-opus-5-5` (low, medium, high, xhigh, max). `claude-fable-5-2` (low, medium, high, xhigh, max). `gpt-5.6-sol` (none, low, medium, high, xhigh, max). `grok-4.7` (low, medium, high, xhigh), including this run's parent model. `gemini-4-neon` (low, medium, high, xhigh). Use the top effort (`max`, or `xhigh` where that is the top) for course writing. |
| M: solid general model | structured work with a checker behind it | `claude-sonnet-5-5` (low, medium, high, xhigh, max). `cursor-grok-4.6` (low, medium, high, xhigh). `gemini-4-carbon` (low, medium, high). |
| F: fast / cheap / "auto" | mechanical chores only | `composer-2.5`. `composer-2.5-fast`. `cursor-grok-4.6-fast` (low, medium, high, xhigh). `gpt-5.6-sol-fast` (none, low, medium, high, xhigh, max). `grok-4.7-fast` (low, medium, high, xhigh). No "auto" model is in the selector. |

Not tiered, do not use for a course: `muse-wonder-1.0` (minimal, low, medium, high, xhigh, max). Unknown until someone who knows the model places it.

Also note: can you run subagents or background agents in parallel? How many at once? Is usage metered per request or per token? Write the answers here:

- Parallel agents available: yes. This session's Task tool starts subagents, including background ones, and it allows more than one in the same step. Background subagents have already been started in this run.
- Limit at once: unknown. The tool schema, the run record, and the files in this VM do not state a number. Check Cursor's plan or agent limits for the account that owns this run (epperson.kyron@gmail.com). If a launch is refused, run the writers one after another.
- How usage is counted: unknown. This VM has no usage or billing record. Check Cursor Settings → Usage, or the usage page on cursor.com while signed in as the owner of this agent.
- Allowance left this cycle (update at the start of each course): Opus (`claude-opus-5-5`) is used up. Cursor reported the limit on 2026-11-21 and a reset when the monthly cycle ends on 2026-11-24. Other tier-S models were not tried, so their balance is unknown. Do not continue a course on M or F.

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

Chosen in this install (21 Nov 2026). A fresh agent per role. Do not swap these for a lower tier.

| Role | Model |
|---|---|
| Stage 0, the brief | `composer-2.5` |
| Stage 1, profile, profile.json, and `respell.js` | `claude-opus-5-5-max` |
| Stage 1, lead note and decision record | `claude-sonnet-5-5-high` |
| Stage 2, `mk_briefs.py` | no model; the coordinator runs the command |
| Deck writers A and B, lesson writers 1, 2 and 3 | `claude-opus-5-5-max`, five agents at once |
| Stage 5, format fixes | `claude-sonnet-5-5-high` |
| Stage 5, content fixes | `claude-opus-5-5-max` |
| Cold reviewer | `gpt-5.6-sol-max` (S, and not a Claude model) |
| Hand-off, queue line, PR comment | `composer-2.5` |

The five writers run in parallel. Their files do not overlap. If the platform refuses that many at once, run them one after another: A, B, 1, 2, 3.

How many courses fit in the remaining allowance: none on the assigned writer until Opus resets on 2026-11-24. Other tier-S balances are unknown, so do not invent a count for them either.

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

## 5. When a model's allowance runs out

Never wait for a reset. Switch at once to the next tier-S model that has allowance, of any family, and carry on with the same course. Note the switch (which roles used which model) in the hand-off.

- Keep the cold reviewer on a different family from the writers when you can.
- Tier-M and tier-F models never write or review language content. If no tier-S model has any allowance left, use the time for the jobs that do not need one: stage 0 briefs for upcoming courses, re-running checks, format fixes; and tell Kii.
- To stretch the allowance: use the standard (not "max") variant of a tier-S model for the five writers, keep "max" for the researcher, the pron tool and the reviewer, and record in each hand-off roughly what the course cost.

## 6. Record what you used

At the end of each course add one line to the hand-off file under "Unsure": the model used per role and roughly how much allowance the course took. Claude uses this to judge quality by model and to plan how many courses fit in a cycle.
