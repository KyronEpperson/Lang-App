# Building a Lang App course in Cursor

This folder (`source/`) is the whole project: the app (`src/app.html`), finished course packs (`packs/`), the course tools (`tools/`), and the briefs and plans (`docs/`). The live site at the repo root (`index.html`, `packs/`) is generated from it and is released only by the main build.

You (Cursor) write course content. The main build (Claude, in its own workspace) plans the work, then merges, tests, reviews and releases what you write. Read this file fully before starting a job.

## Rules (not negotiable)

1. Work on a branch named `cursor/<course>` (for example `cursor/en-nl`). Open a pull request. Never push to `main`.
2. Only create or edit files in the folders the job names. For a course `en-<t>` that is: `source/tools/target/<t>/`, `source/docs/profiles/en-<t>.md`, and `source/docs/briefs/en-<t>-*.md`. Nothing else.
3. Never edit `source/src/app.html`, anything in `source/packs/`, the other courses' folders, the tools themselves, or anything outside `source/` (`index.html`, root `packs/`, `sw.js`). If a job seems to need an app change, stop and write what you need under "Needs from the lead" in your report. Do not work around it.
4. No secrets: never write a key, token or password into a file or a prompt. The Supabase publishable key already in the app is the only key that belongs in this repo.
5. Do not invent facts about a language. If you are not sure a phrase is natural, leave it out or list it for a native check. Wrong content is worse than less content.
6. Use the strongest model your plan offers for all writing. Do not use an "auto" or fast model for course content.
7. Briefs written for the main build say `/home/claude/...`. Read that as this `source/` folder. Where a brief says "scratch directory", use a new folder under your system temp folder, never a folder in the repo.

## Setup (once)

Node 18+ and Python 3.9+. From `source/`:

```
node tools/target/validate.js es
```

It should end with `PASS: all checks OK`. If it does not, stop and report; do not start a course. The tools find the project root from their own location, so run them from `source/` on any machine. (`build.sh` and `harness.js` need the main build's workspace; you do not run them.)

## The life of one course

```
Cursor: stage 0-1 (brief + research)  ->  lead note + draft PR
Claude: decision record on the PR     ->  "Go for stage 2"
Cursor: stages 2-6 (briefs, writers, merge check, cold review)  ->  hand-off file + PR ready
Claude: merge, full build, end-to-end tests, spot review, release  ->  merge result on the PR
```

Hand-off formats for all four steps: `docs/briefs/HANDOFF-TEMPLATES.md`. The queue of courses and their lanes: `docs/CURSOR-QUEUE.md`.

Stage 0 (before research): if `docs/briefs/target-profile-<t>.md` does not exist, make it from `docs/briefs/target-profile-TEMPLATE.md` as that file's first paragraph says.

## Autonomous mode (in force from 2026-11-21, set by Kii)

Do not wait for Claude between stages. Claude reviews finished courses in batches, later.

- **Stage-1 decisions: you record them yourself.** Write `docs/briefs/en-<t>-decisions.md` in the decision-record format, answering each decision in your own lead note. Default rules: keep the roadmap's order unless the profile gives a sourced reason to change it; at most one added lesson; never exceed 28 lessons; the register follows the roadmap's variant; when two options are equally defensible, take the one closest to the "closest finished course". Then go straight to stage 2. This applies to Dutch (PR #1) as well.
- **Finish the course** (stages 2–6), write the hand-off file, mark the pull request "Ready for review", post the hand-off as a comment on it, update the status in `docs/CURSOR-QUEUE.md`, and start the next queued course. Do not merge pull requests; never push to `main`.
- **Lanes still apply.** Ready: full run. Check: do stage 1; if the profile shows NO app change is needed, record that in the decisions file and continue as Ready; if any is needed, stop after the lead note, mark the PR "waiting for Claude: app change", and move on. App first: stage 1 only, then move on. Blocked: skip.
- **Stop a course and move on** (PR left as draft, reason at the top of the lead note or hand-off) when: it needs an app change; the validator cannot be made to pass without deleting content or editing tools; the pron tool is too unreliable to use and the profile cannot justify `pron: none`; or you cannot find sources good enough to trust the language content.
- **Stop everything and tell Kii** only if the setup check fails, a rule in this file would have to be broken, or the queue has no course left that you may work on.
- One course at a time; one branch and one pull request per course, branched from the latest `main`.

## The job: one course, six stages

A course is written by six "roles", each with its own brief. In the main build these are separate agents. In Cursor, do them as six separate chats (a fresh chat per role keeps the context small and stops one role's mistakes leaking into the next). Finish and check each stage before the next.

| Stage | Role | Brief to follow | Writes |
|---|---|---|---|
| 1 | Researcher | `docs/briefs/target-profile-<t>.md` | `docs/profiles/en-<t>.md`, `tools/target/<t>/profile.json`, `tools/target/<t>/respell.js`, then the lead note `docs/briefs/en-<t>-lead.md` |
| 2 | Lead step (you run a script) | none | `docs/briefs/en-<t>-{A,B,1,2,3,R}.md` |
| 3 | Deck writers A and B | `docs/briefs/en-<t>-A.md`, `-B.md` | `decks-a.js`, `extra-a.js`, `decks-b.js`, `extra-b.js` |
| 4 | Lesson writers 1, 2, 3 | `docs/briefs/en-<t>-1.md`, `-2.md`, `-3.md` | `lessons-1.js`, `lessons-2.js`, `lessons-3.js` |
| 5 | Merge check (you run scripts) | below | nothing new; fixes in the writers' files |
| 6 | Cold reviewer (fresh chat, ideally a different model than the writers) | `docs/briefs/en-<t>-R.md` | edits in place, plus `tools/target/<t>/REVIEW.md` |

Stage 1 notes:
- The profile brief tells the researcher to use web search. Use it. Every source listed must be one you opened.
- Study a finished course first: `docs/profiles/en-es.md`, `tools/target/es/profile.json`, `tools/target/es/respell.js`, and one deck and lesson file in `tools/target/es/`.
- Stop after stage 1: write the lead note, open a draft pull request with only the stage-1 files, and wait for Claude's decision record. The main build checks the profile before any writing starts; a wrong profile wastes every later stage.
- Apply every CHANGE in the decision record to the profile and `profile.json` before stage 2.

Stage 2, after the profile is approved (put a one-line note about the course in the last argument):

```
touch tools/target/<t>/HOLD
python3 tools/target/mk_briefs.py <t> "<Language name>" "<one line on variant and anything the writers must know>"
```

`HOLD` makes the generator write its output to a temp file instead of `packs/`, so nothing you do changes the app. Leave `HOLD` in place for the whole job; the main build removes it.

Stage 5, the merge check (all from `source/`):

```
node tools/target/repron.js <t>          # re-generates every pron with respell.js; "0 rewritten" on a second run
node tools/target/gen.js <t>             # must print lesson, deck and card counts with no error
node tools/target/validate.js <t>        # must end with: PASS: all checks OK
python3 tools/target/link_roadmap.py <t> # prints roadmap items not covered; should be "none" or explained in the report
```

Fix every validator error in the writers' files (not in the validator, and not by deleting content to make a count pass). `link_roadmap.py` edits `packs/roadmaps.js`: do NOT commit that change (`git checkout -- source/packs/roadmaps.js`); the main build re-runs it.

Stage 6: the reviewer reads everything cold and corrects errors in place, then you re-run stage 5.

## What to hand back

When stage 6 passes: write `docs/briefs/en-<t>-handoff.md` (format in `docs/briefs/HANDOFF-TEMPLATES.md`), commit, and mark the pull request "Ready for review". The pull request must contain only the files in rule 2 (plus the queue status line in `docs/CURSOR-QUEUE.md`).

The main build then pulls the branch, runs the full build and the end-to-end tests on every lesson, spot-checks the content, and releases. If something must change you get a numbered list on the pull request; fix it on the same branch and update the hand-off file.

## Saving usage on both sides

- One role per chat. Close a writer's chat when its stage passes.
- Writers read the profile and their own brief, not other writers' files (except where the brief says).
- Run the stage-5 scripts yourself and fix errors before handing off; Claude's time is for decisions and the final checks, not first-pass fixes.
- Keep lead notes and hand-offs short and specific; they replace a full re-read.

## Job queue

The queue, lanes and per-language notes are in `docs/CURSOR-QUEUE.md`. Work top to bottom; skip any course whose lane is Blocked.
