# Cold-review brief: a native half of the Korean course (`<l>-ko`)

The launching message gives the language code `<l>`, its name and language-specific points. You are the cold reviewer: you did not write this half. Work ONLY inside `/home/claude/tools/halves/native/<l>/ko/` (the merged `*.jsonl`, and `lessons/*.html`; do NOT touch `work/`, `ui.json`, `trainer.json` unless the launching message says so, `course.json`, `tools/halves/target/`, `src/` or anything else: other agents are editing those). Never run `mk_native.js`. Scratch scripts: a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-<l>ko/`; back the folder up there first and apply every fix by id from a script that can be re-run.

Read first: `/home/claude/docs/HALVES-SPEC.md`; the pair profile `/home/claude/docs/profiles/<l>-ko.md` (the style authority); `NEW-ROWS.md` in the half (what the top-up writer added and doubted); the interface notes `/home/claude/tools/i18n/<l>/NOTES.md` if present; and two finished reviews as models: `/home/claude/tools/halves/native/tl/ko/REVIEW.md` and `/home/claude/tools/halves/native/zh/ko/REVIEW.md`. The English reference half is `native/en/ko/` (same ids); the Korean is `target/ko/`.

The half was written by four writers plus a top-up writer, in parallel, and validates with 0 errors: `node /home/claude/tools/halves/validate.js <l> ko` (run from /home/claude). Read EVERY row and every lesson body as a careful native-level editor of this language and a Korean teacher, FIX what is wrong directly (keep ids, keys, Hangul, `{{tokens}}`, blanks `___`, `@@`, HTML structure; edit only the learner-language text), then re-run the validator: it must still end with `errors: 0`.

Check and fix:
1. Accuracy against the Korean (not only the English): politeness level, tense, who leaves / stays, who is speaking to whom. Every type-in practice prompt leads to its accepted Korean answers and to nothing the item rejects (read `target/ko/practice.jsonl`).
2. Every factual claim in notes and lesson prose is true: sound comparisons, etymologies and shared-origin claims, false friends, cultural comparisons. Correct or remove anything you cannot stand behind. Known facts: hours take native Korean numbers, minutes and money Sino-Korean; KakaoTalk's "1" means not yet read, 읽씹 is when it is gone and no reply comes.
3. Consistency across the five writers: one term per concept (the profile's glossary), one gloss per recurring Korean phrase (the profile's fixed-phrase table; then find every Korean phrase that is glossed two ways across files and unify), one spelling per name, one convention for tense / politeness cues, one convention for honorific lines (the language's own natural respect forms on lines to an elder / customer / boss, none on plain 요-form lines between equals, never in instructions to the learner).
4. Naturalness: fix stiff or calqued wording the writers flagged in their reports and anything else that a native reader would stumble on. Slang and interjections: prefer safe, widely understood words.
5. Lesson cross-references match the final titles in `lessons.jsonl`; no leftover English (or another language) in bodies, table headers, options.
6. No two options of one question identical; no two meanings identical within one deck (compare case-insensitively after trimming: the release check fails on this); deck labels and group names unique, short and natural (they become permanent progress keys once shipped: change only if clearly wrong, and list the final 56 + 6).
7. `@@` lines work with any name; blanks intact.

Do not ask anyone questions; decide and record. Write `/home/claude/tools/halves/native/<l>/ko/REVIEW.md`: what you checked, the decisions table, rows changed per file, the final deck labels and group names, and at most 20 items a native speaker should still look at. State that the reviewer is not a native speaker. Final report (short): rows changed, decisions, validator's last lines, remaining doubts.

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
