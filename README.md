# 한글 Korean Starter

Static single-page Korean learning app. Deploy on Vercel: import this repo, framework "Other", no build step.

## Handoff notes (v41)

**What it is.** One self-contained `index.html` (~320 KB): 36 content decks / 519 cards, 18 lessons, 149 dialogues, Leitner SRS, Hangul drills (type, build, listen, numbers, role-play, register), 5-at-a-time learn loop, exams, XP/levels, offline PWA (`sw.js`, `manifest.json`).

**Run the tests.** From the source folder: `node harness.js` (needs Playwright + Chromium). It renders the app at 390 px dark and 1024 px light, runs a full session, learn loop and swipe, checks data integrity (no duplicate cards, every deck grouped/tagged, every lesson has a deck and ≥3 checks, no orphan dialogue/example keys, quiz options never repeat), a11y basics, and ends with a one-line `HEALTH:` summary.

**Add a deck.** In `DECKS` add `"Deck name":[[korean, romanization, english, note], …]`, then put the name in a `GROUPS` list (order = learning path), at least one `TAGS` list, and `DESC`. Optional: `DIALOG[korean]=[line, reply, english]`, `EXAMPLES[korean]=[sentence, english]`.

**Add a lesson.** Push `{id, title, blurb, deck, body}` onto `LESSONS` (body is a template string; `${ex(ko,rom,en)}` renders an example row), add `CHECKS[id]` with 3 `[question, [4 options], correctIndex, explanation]`, and link patterns via `PATTERNS` rows ending in the lesson id.

**Rebuild the site.** `./build.sh` regenerates `korean-site/index.html` from the app, bumps the service-worker cache name and zips the folder.
