# Model routing (which model runs which job)

Read this before launching any agent. It replaces the habit of sending everything to Opus.
Older notes this builds on: `docs/BUILD-PLAN.md` (the Sonnet experiment and its numbers) and `docs/CURSOR-MODELS.md` (the same idea for Cursor).

## 1. The rule in one line

Opus writes and judges language. Sonnet does structured work that a checker verifies. Scripts do checks. Haiku only sorts what a script flagged.

## 2. Routing table

| Job | Model | Reason |
|---|---|---|
| Research profile, decision record for a new language | opus | Every later stage inherits its mistakes |
| Pronunciation tool (`respell.js`, `pron_*.js`) | opus | Code plus phonology; errors reach every card |
| Lesson writers | opus | Where reviews found real teaching errors |
| Deck, dialogue and example writers | opus | Sonnet needed about five times more fixes per line (pt / fr / it run) |
| Cold review, pre-merge review of a pull request | opus | Last independent read |
| Blind back-translation | opus | It is a language judgement |
| Changes to shared tooling (`tools/halves`, `tools/content/*.js`, `src/app.html`) | opus | One mistake breaks every course |
| Interface dictionary (784 strings) for a well-resourced language | sonnet | Short strings, automatic validator |
| Course interface overrides (`ui.json`), roadmap titles and planned-lesson lists | sonnet | Template work with a validator |
| Applying a reviewer's listed fixes when each fix is spelled out | sonnet | The decision is already made |
| Localising the setting through deviations from a fixed map | sonnet | Mechanical once the map exists |
| Scaffolds, brief generation, deduping word lists, renames across files | sonnet | Structured, checkable |
| Sorting validator / lint / spelling-checker output into "real" and "noise" | haiku | Only triage; anything real goes up a tier |
| Running validators, builds, tests, release | no agent | The dispatcher runs the scripts itself |

Exceptions that stay on opus whatever the row says:
- Low-resource languages (Hmong now; Javanese, Wu, Burmese later): every role, including the interface.
- Any job where the checker cannot see the error (prose inside lessons, notes, culture claims).
- A second attempt at a job a smaller model got wrong.

## 3. Guard rails

- A smaller model never writes or reviews course content.
- Every sonnet or haiku job names the script that proves it is done; the dispatcher runs that script, not the agent's word for it.
- Escalate, do not retry: if a sonnet job fails its check twice, rerun it on opus and note it in the log.
- One role per agent, fresh context, told exactly which files to read. Never let an agent explore `src/app.html` or a pack file unless the job is about it.

## 4. Keeping the cost visible

Each course's `REVIEW.md` ends with a line per role: model, and the reviewer's count of edits it had to make to that role's files. That count is the quality signal: if sonnet-written files need clearly more fixes than the opus baseline (interface edits 13 / 23 / 56 for zh / vi / id), that role goes back to opus.

## 5. So this is not lost again

- This file is the source of truth; the dispatcher re-reads it at the start of every batch and after any context reset.
- Every launch line in a lead note (`docs/briefs/*-lead.md`) carries its model, e.g. `[opus]` or `[sonnet]`, so the routing travels with the work.
- The brief generators (`mk_briefs*.py`) print the model next to each role.

## 6. Roll-out

1. Now: follow the table for every new launch.
2. Next batch (Vietnamese → Mandarin, Puerto Rican Spanish ↔ English): writers and reviewers on opus; interface overrides, roadmap titles and deviation-map localisation on sonnet; record edits per role.
3. After two courses: compare the edit counts and adjust the table; move a role up or down only on that evidence.

## 7. Reading lists (the bigger saving)

Most of an agent's usage is what it reads, not what it writes. The rule every agent follows is `docs/briefs/_reading-rule.md`; the brief generators append it to every brief, and the shared briefs (`x-ko-*`, `x-en-pr-*`) carry it.

For the dispatcher, when writing a launch prompt by hand:

- Name the files. Never write "study how the newest courses were set up" or "read these for context".
- Budget by role (input the agent should need before it starts writing):

| Role | Files | Rough size |
|---|---|---|
| Deck or lesson writer | own brief, the course digest or profile, ONE finished file of the same kind, the word list | 25–45k tokens |
| Interface or overrides writer | own brief, `keys.json` notes, the base dictionary, the course `NOTES.md` | 30–50k |
| Applying listed fixes | the review section that lists them, the files it names | size of those files |
| Cold reviewer | brief, profile, the whole course under review, the spec it is judged against | the course + 20k |
| Researcher / lead of a new language | brief, pipeline doc, ONE sibling profile, ONE sibling course's `profile.json` | 40–60k plus web |
| Engine or tooling change | brief, the functions named (by Grep + partial Read), the tests | never the whole of `src/app.html` (about 280k tokens) |

- A lead writes a one-to-two-page **digest** of the profile (rules, terms, decisions) and writers read the digest, not the full profile plus sibling courses.
- Five writers on one course must not each re-read the same large references: put what they share in the digest.
- Each agent's report ends with any file it had to read that was not on its list; the dispatcher adds it to the brief or the digest for next time.
- Measure: note each agent's reported token count beside its role in the course's `REVIEW.md`. Target for a writer is under 200k total; today's writers ran 250–550k.
