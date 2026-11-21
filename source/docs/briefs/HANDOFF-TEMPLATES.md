# Hand-off formats between Cursor and the main build (Claude)

Every course has two hand-offs from Cursor and two replies from Claude. Keep them short: Claude reads these instead of re-reading the whole course, which is what saves usage. Say plainly what you are unsure of; a hidden doubt costs more than a stated one.

## 1. Stage-1 lead note (Cursor → Claude)

File `docs/briefs/en-<t>-lead.md`, committed with the profile. Open the draft pull request when it is pushed. Headings, in this order (the Dutch note, `docs/briefs/en-nl-lead.md`, is the model):

```
# Lead note: en-<t> stage 1
## Where the work is            branch, PR link, the files, what was NOT done (no lessons, decks, app edits)
## What to do                   the profile sections Claude should read (not all of them), and "done when"
## Decisions to record          numbered; each: what changed from the roadmap, the reason, what "no" would mean
## Register, already applied    3–5 lines
## App changes needed           "None" or a numbered list: the change, why, what the course does without it
## Pron tool: enforce these     the command to re-run, and a table: word | output | what a writer does
## Evidence, keep at this strength   the claims most likely to be over-read
## Placeholders                 brand word, level titles, anything copied from another course
```

Decisions are only real choices: a reorder or added/cut lesson, the standing rule, the register, a variant or spelling choice. Not every detail.

## 2. Claude's decision record (Claude → Cursor)

Posted as a comment on the pull request, or committed as `docs/briefs/en-<t>-decisions.md` on the branch if a comment cannot be posted:

```
## en-<t> stage-1 decisions
1. <decision name>: YES | CHANGE: <exact change>
2. …
Pron: <words to avoid or fix, or "as listed">
App changes: <"none needed" | "Claude builds X first; wait for it" | "skip X, course does Y">
Placeholders: <keep | changes>
Go for stage 2: YES | NO (<what must change first>)
```

Cursor applies every CHANGE to the profile and `profile.json` before running `mk_briefs.py`.

## 3. Final hand-off (Cursor → Claude)

File `docs/briefs/en-<t>-handoff.md`, committed when stage 6 is done; then mark the pull request "Ready for review". Headings:

```
# Hand-off: en-<t> ready for merge
## Checks                       gen.js counts; last line of validate.js; repron second run "0 rewritten"; link_roadmap result
## What the reviewer changed    counts per file, and the 5 most important fixes
## Native check first           the 10 rows a native speaker should look at first (file, item, why)
## Pron tool                    reliability, words it gets wrong, how writers avoided them
## Needs from the lead          app changes or decisions still open, or "none"
## Unsure                       anything else
```

## 4. Claude's merge result (Claude → Cursor)

A comment on the pull request: MERGED and SHIPPED in version X, or CHANGES NEEDED with a numbered list (file, item, what is wrong). Cursor fixes them on the same branch and updates the hand-off file.
