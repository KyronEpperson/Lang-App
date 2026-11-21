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

## The job: one course, six stages

A course is written by six "roles", each with its own brief. In the main build these are separate agents. In Cursor, do them as six separate chats (a fresh chat per role keeps the context small and stops one role's mistakes leaking into the next). Finish and check each stage before the next.

| Stage | Role | Brief to follow | Writes |
|---|---|---|---|
| 1 | Researcher | `docs/briefs/target-profile-<t>.md` | `docs/profiles/en-<t>.md`, `tools/target/<t>/profile.json`, `tools/target/<t>/respell.js` |
| 2 | Lead step (you run a script) | none | `docs/briefs/en-<t>-{A,B,1,2,3,R}.md` |
| 3 | Deck writers A and B | `docs/briefs/en-<t>-A.md`, `-B.md` | `decks-a.js`, `extra-a.js`, `decks-b.js`, `extra-b.js` |
| 4 | Lesson writers 1, 2, 3 | `docs/briefs/en-<t>-1.md`, `-2.md`, `-3.md` | `lessons-1.js`, `lessons-2.js`, `lessons-3.js` |
| 5 | Merge check (you run scripts) | below | nothing new; fixes in the writers' files |
| 6 | Cold reviewer (fresh chat, ideally a different model than the writers) | `docs/briefs/en-<t>-R.md` | edits in place, plus `tools/target/<t>/REVIEW.md` |

Stage 1 notes:
- The profile brief tells the researcher to use web search. Use it. Every source listed must be one you opened.
- Study a finished course first: `docs/profiles/en-es.md`, `tools/target/es/profile.json`, `tools/target/es/respell.js`, and one deck and lesson file in `tools/target/es/`.
- Stop after stage 1 and open a draft pull request with only the profile files. The main build checks the profile before any writing starts; a wrong profile wastes every later stage.

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

One pull request from `cursor/en-<t>` containing only the files in rule 2, with this report as the description:

- Counts printed by `gen.js` and the last line of `validate.js`.
- What the reviewer changed, as counts per file, and the ten things a native speaker should check first.
- Pron tool: how reliable, and the words it gets wrong.
- "Needs from the lead": anything that needs an app change or a decision.
- Anything you were unsure of. Say so plainly; a hidden doubt costs more than a stated one.

The main build then pulls the branch, runs the full build and the end-to-end tests on every lesson, runs its own cold review, and releases. You will get review comments on the pull request if something has to change.

## Job queue

| # | Course | Status | Notes |
|---|---|---|---|
| 1 | `en-nl` Dutch for English speakers | ready: start with stage 1 (`docs/briefs/target-profile-nl.md`) | Pilot. Needs no app change. |

More jobs are added here after the pilot is reviewed. The order of what comes next is in `docs/MASTER-PLAN.md`.
