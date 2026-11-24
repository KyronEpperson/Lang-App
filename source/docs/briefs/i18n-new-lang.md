# Brief: interface dictionary for a new native language (Korean course)

The launching message gives the language code `<l>`, its name and script. Lang App's interface is translated per native language by a dictionary in `/home/claude/tools/i18n/<l>/` (`ui.json`: exact keys and pattern templates; `roadmap.json`: optional lesson-plan titles) from which `python3 tools/i18n/gen.py <l>` writes `packs/i18n-<l>.js`. This language's only course for now is **<l>-ko** (Korean for speakers of this language), so every key that says Korean, Hangul or romanization is translated literally for Korean, exactly as the Tagalog and Bisaya dictionaries did.

Model to follow closely: `/home/claude/tools/i18n/tl/` (`ui.json`, `roadmap.json`, `NOTES.md`) and `/home/claude/tools/i18n/ceb/`. Read both NOTES.md files fully first: they explain how the files were produced (`tools/i18n/new_lang.py`, `keys.json`, `gen.py`, `validate.js`), which keys are patterns, what must stay untranslated (Hangul, emoji, `%`-slots, placeholders, brand "Lang App"), and the overflow warnings. Read `/home/claude/tools/i18n/validate.js` usage too.

You may create/edit ONLY: `/home/claude/tools/i18n/<l>/**` and the generated `/home/claude/packs/i18n-<l>.js`. Do NOT edit shared files (`keys.json`, `gen.py`, `i18nlib.py`, `src/app.html`, other languages, other packs): other agents are working in the repo. If a shared tool needs a change to support your language, do not make it; report it. Scratch files: a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/i18n-<l>/`. Do not run `./build.sh` or ship.

Do:
1. Create the dictionary with every `ui.json` exact key and pattern template filled (the Tagalog file shows the full set: 784 keys and 274 templates at the time of writing; use the current `keys.json`). In `roadmap.json` fill the Korean-roadmap titles only (as tl did); leave the rest empty.
2. Register: the everyday, friendly register of popular apps in this language; one consistent way to address the learner (informal singular unless that is rude in this language: decide and record); standard spelling; native script throughout (common tech loanwords in the native script are fine; Latin script only for brand names, romanization and things users type). Short labels: tabs and buttons must stay as short as the English.
3. Tab names, level titles and other recurring terms: choose once, list them in NOTES.md (the course writers will reuse them).
4. Run `python3 tools/i18n/gen.py <l> && node tools/i18n/validate.js <l>` until it passes with only the same warning classes tl has (possible overflow; strings intentionally identical to English: list each in NOTES.md).
5. Write `/home/claude/tools/i18n/<l>/NOTES.md` like the Tagalog one: files, build line, register decisions, glossary of fixed terms (tab names, grammar terms used in the interface, the words for Korean / Hangul / romanization / flashcard / deck / lesson / practice / review / streak), the kept-in-English list, and the 30 strings most worth a native speaker's check. State plainly that the author is not a native speaker.

Report (short): counts filled, validator's last lines, the glossary of fixed terms, anything a shared tool blocked.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind.** If you need to see what a finished file looks like, read the ONE this brief names. Not several courses.
- **Search, do not open.** For a single fact in a big file (a field name, a rule, a string), use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job, and do not read a file "for context" that the brief did not ask for.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- If something you truly need is not on your list, read the smallest part that answers it and say in your report which file and why, so the list can be fixed.

Writers and mechanical jobs follow this strictly. Reviewers and researchers may read more widely, but the first two bullets still hold.
