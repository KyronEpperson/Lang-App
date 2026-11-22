# Building a Lang App course in Cursor

This folder (`source/`) is the whole project: the app (`src/app.html`), finished course packs (`packs/`), the course tools (`tools/`), and the briefs and plans (`docs/`). The live site at the repo root (`index.html`, `packs/`) is generated from it and is released only by the main build.

You (Cursor) write course content. The main build (Claude, in its own workspace) plans the work, then merges, tests, reviews and releases what you write. Read this file fully before starting a job.

## Rules (not negotiable)

1. Work on a branch named `cursor/<course>` (for example `cursor/en-nl`). Open a pull request. Never push to `main`.
2. Only create or edit files in the folders the job names. For a course `en-<t>` that is: `source/tools/target/<t>/`, `source/docs/profiles/en-<t>.md`, and `source/docs/briefs/en-<t>-*.md`. Nothing else.
3. Never edit `source/src/app.html`, anything in `source/packs/`, the other courses' folders, the tools themselves, or anything outside `source/` (`index.html`, root `packs/`, `sw.js`). If a job seems to need an app change, stop and write what you need under "Needs from the lead" in your report. Do not work around it.
4. No secrets: never write a key, token or password into a file or a prompt. The Supabase publishable key already in the app is the only key that belongs in this repo.
5. Do not invent facts about a language. If you are not sure a phrase is natural, leave it out or list it for a native check. Wrong content is worse than less content.
6. Models and parallel agents: follow `docs/CURSOR-MODELS.md`. Before your first course, fill in its roster with the models and agent features you actually have. Target-language content is always written and reviewed by your strongest tier; never by an "auto" or fast model.
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

## Autonomous mode (set by Kii, updated 2026-11-21)

Never wait: not for Claude, not for Kii, not for an allowance to reset. Build every unfinished course through and through, one after another. Claude reviews finished courses as they arrive.

- **Stage-1 decisions: you record them yourself.** Write `docs/briefs/en-<t>-decisions.md` in the decision-record format, answering each decision in your own lead note. Default rules: keep the roadmap's order unless the profile gives a sourced reason to change it; at most one added lesson; never exceed 28 lessons; the register follows the roadmap's variant; when two options are equally defensible, take the one closest to the "closest finished course". Then go straight on.
- **Finish each course** (all stages), write the hand-off file, mark the pull request "Ready for review", post the hand-off as a comment on it, update the status in the queue file, and start the next course. Do not merge pull requests; never push to `main`.
- **Out of one model? Switch, do not stop.** If your strongest model's allowance runs out, continue at once on the next tier-S model that has allowance, of any family (`docs/CURSOR-MODELS.md`). Resume paused courses first. Keep the cold reviewer on a different family from the writers when you can; if you cannot, review in a fresh chat on the same model and say so in the hand-off. Only tier-S models write or review language content.
- **Order of work:** (1) finish every started course (open draft pull requests); (2) the English → X queue, `docs/CURSOR-QUEUE.md`; (3) the X → English queue, `docs/CURSOR-QUEUE-B.md`; (4) only when nothing is left to build, or no tier-S model has allowance: feedback reviews of finished courses (below).
- **Lanes still apply.** Ready and Ready (new script): full run. Check: do stage 1; if no app change is needed, record that and continue as Ready; if one is needed, build the course anyway with the closest existing profile options, list the need under "Needs from the lead", and say what is worse without it. Blocked: skip (Kii decides these).
- **Give up on a course and move on** (pull request left as draft, reason at the top of the lead note or hand-off) only when: the validator cannot be made to pass without deleting content or editing tools; the pron tool is too unreliable to use and the profile cannot justify `pron: none`; or you cannot find sources good enough to trust the language content.
- **Stop everything and tell Kii** only if the setup check fails, a rule in this file would have to be broken, or there is nothing left you may do.
- One branch and one pull request per course, each branched from the latest `main`.

## Running out of usage, and starting back up

Work so that stopping at any moment loses at most one role's work.

**While working**
- Commit and push after every finished role (research, pron tool, each writer, the merge check, the review). Small commits; never hold a finished file only on disk.
- Keep a progress block at the very top of the course's lead note (`docs/briefs/<course>-lead.md`), and update it in the same commit:

```
PROGRESS (updated <date time>)
Course: <id>   Branch: <branch>   PR: <link>
Done: <roles finished, e.g. research, pron tool, decisions, briefs, deck A, deck B, lesson 1>
Next: <the one role to do next>
Checks: <not run | last validate.js line>
Models used: <role = model, ...>
State: WORKING | PAUSED: <reason> | READY FOR REVIEW | GIVEN UP: <reason>
```

**When usage is running low or a model refuses**
1. Switch to another tier-S model with allowance and continue (see Autonomous mode).
2. If no tier-S model is left: do not start a new role. If a role is half-written, discard that role's unfinished file (`git checkout -- <file>`, or delete it if new); a half-written lesson file is worse than none.
3. Set `State: PAUSED: no tier-S allowance` in the progress block, commit, push.
4. With a tier-M or tier-F model, if any allowance remains, do only: stage 0 briefs for the next courses, re-running checks, format fixes.
5. Tell Kii in one short message: what is ready for review, what is paused and at which role, and when the allowance resets if you can see it.

**Starting back up** (new session, after a reset, or after any interruption)
1. Pull the latest `main`. Re-read this file's Rules and Autonomous mode sections (they may have changed) and `docs/CURSOR-MODELS.md`; update its roster if the model list or allowance changed.
2. Run the setup check (`node tools/target/validate.js es`).
3. Find your open work: list remote branches named `cursor/*` and their pull requests. For each, read the progress block at the top of its lead note. Trust the block and the files in the branch, not your memory of earlier chats.
4. Read any new comments from Claude or Kii on those pull requests and act on them first ("CHANGES NEEDED" lists before new writing).
5. Resume in this order: courses with `State: PAUSED`, lowest queue number first, at the role named in `Next:`; then the next queued course. If `main` has moved, merge `main` into the course branch only when a file you need changed; never rebase a pushed branch.
6. Before continuing a paused course, check that every file listed under `Done:` exists and loads (run `gen.js`; with `HOLD` in place it writes to a temp file). Redo any role whose file is missing or broken.
7. Carry on in autonomous mode.

## Queue C: additions to finished courses

One job may add to finished courses: `docs/briefs/core-words.md` (core-word decks for each part of speech, a parts-of-speech coverage table, and a Flirting deck). It says exactly which new files you may add and that you may only append deck entries to `profile.json`. Everything else in a finished course stays read-only. Do this queue after the courses in progress and before starting new X → English courses.

## Never touch what is already built

Finished courses (every folder in `tools/target/` and `tools/content/` that exists on `main`, and everything in `packs/`) are read-only for you. No fixes, no "small improvements", even for an obvious error. Report it instead.

**Feedback reviews** (work item 4 above): read one finished course cold, as `docs/TARGET-REVIEW.md` describes (or `docs/briefs/<lang>-R.md` for an X → English course), but change nothing. Write `docs/reviews/<course-id>-cursor.md`: the model used; the 20 most important suspected errors, each with file, item, what is wrong, the correction and why; then patterns you saw; then what you could not judge. One branch `cursor/review-<course-id>` and one pull request per review. Start with the courses nobody has reviewed twice, in this order: ceb, nan, ur, pa, te, kn, yue, tl, th, ar, hi, ru, vi, id, zh, ja, de, pt, it, fr, es.

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

## X → English courses (queue B)

"English for speakers of <language>": a different, older pipeline, in `tools/content/` and `tools/i18n/`. The English side is shared with every other X → English course; you write the explanations in the learner's language and translate the app's interface. `docs/PIPELINE.md` is the reference. Branch `cursor/<xx>-en`. You may only create or edit: `docs/profiles/<xx>.md`, `docs/profiles/<xx>.profile.json`, `docs/briefs/<xx>.json`, `docs/briefs/<xx>-*.md`, `tools/content/<xx>/`, `tools/i18n/<xx>/`.

| Stage | Role | Brief | Writes |
|---|---|---|---|
| 1 | Researcher | `docs/briefs/profile-es-based.md` (models: `docs/profiles/fr.md`, `fr.profile.json`) | `docs/profiles/<xx>.md`, `docs/profiles/<xx>.profile.json`, then a lead note and your own decision record |
| 2 | Lead step | run `python3 tools/content/setup_es_based.py <xx>`; write `docs/briefs/<xx>.json` (model: `docs/briefs/fr.json`); run `python3 tools/content/mk_briefs.py <xx>` | the scaffold in `tools/content/<xx>/` and `tools/i18n/<xx>/`, and briefs `<xx>-{A,B,C,D,I,R}.md` |
| 3 | Writers A, B, C, D and Interface I (parallel if you can) | their briefs | their own files only |
| 4 | Merge check | below | fixes |
| 5 | Cold reviewer | `docs/briefs/<xx>-R.md` | edits in place, review notes |

Merge check, from `source/`. ALWAYS give the output path (a file in your temp folder), otherwise these commands overwrite files in `packs/`:

```
node tools/content/gen.js <xx> <tmp>/course-<xx>-en.js
node tools/content/validate.js <xx> <tmp>/course-<xx>-en.js      # PASS: all checks OK
node tools/content/parity.js <xx> <tmp>/course-<xx>-en.js        # PASS: shared English side matches ko-en
python3 tools/i18n/gen.py <xx> <tmp>/i18n-<xx>.js
node tools/i18n/validate.js <xx> <tmp>/i18n-<xx>.js               # PASS
```

If a script does not accept the output path as shown, read its first lines for the right arguments; never let it write into `packs/`. Before committing, run `git status` and discard any change under `source/packs/`.

Hand-off: `docs/briefs/<xx>-handoff.md`, same headings as for an English → X course, plus one line on anything in the interface that does not fit on a phone screen (long labels). Right-to-left languages (Urdu, Persian): the app already supports right-to-left for Arabic; list anything that looks specific to Arabic under "Needs from the lead". The app also has to be told a new native language exists (picker, pack loading): that is Claude's merge job, not yours.

## Checks the validator does not make (added after the first review)

Do these in stage 5 and again in stage 6. Each one was a real fault in the first batch.

1. **Pron tool smoke test.** Before any writer starts, run `respell.js` on the 40 most common words of the language (articles, pronouns, "to be", "to have", yes, no, hello, thanks, numbers 1–10) and check each against a dictionary. An error in a word like "the" reaches hundreds of cards.
2. **The aid is read by an English speaker.** A letter in the aid must sound the way English spelling suggests. Never write `j` for the y-sound, `c` for ts, `w` for v, and so on, even if the key explains it.
3. **No card in two decks.** Treat the validator's "is in two decks" warning as an error. The release harness fails on it.
4. **Wrong options must stay wrong.** The app ignores capitals, punctuation and apostrophes when it checks an answer, and ignores accents when `accents` is true. A wrong option that differs from the answer only in those is accepted as correct. Never write one; test the point another way and explain it in the `why`.
5. **New script: the aid is lexicon-first.** For a script that does not show its vowels or lengths reliably (Bengali, Amharic, and the like), `respell.js` looks words up in `lexicon.txt` and throws on unknown words. Do not ship `pron: none` for a new-script course.
6. **Course codes** may be two to four letters.

Claude's reviews are in `docs/reviews/`. Read the newest one when you start back up, before any new writing, and act on every "CHANGES NEEDED" list.

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
