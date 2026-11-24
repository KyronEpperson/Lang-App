# Top-up brief: bring a native half of the Korean course up to the new Korean half (2026-11-23)

The launching message gives your language code `<l>` and name. The Korean target half grew on 2026-11-23: 13 new decks (ten "Top …" core-word decks, Flirting words, Compliments, Countries with 204 places) with 773 new cards, 201 new examples, 52 new dialogues, one new group ("Core words"), a few changed rows ("I'm from ___" and "Can you speak ___?" are now blanks; lesson lines no longer assume the US; the learner's own name is the token `@@`), and renumbered lesson sentences. Your job: make `/home/claude/tools/halves/native/<l>/ko/` complete and correct against it, so that `node /home/claude/tools/halves/validate.js <l> ko` (run from /home/claude) ends with `errors: 0` and no words remaining in decks, cards, dialog, examples, sentences, checks, practice, groups, labels (ui.json and trainer.json words are not yours unless the launching message says so).

You edit the MERGED files directly: `/home/claude/tools/halves/native/<l>/ko/*.jsonl` and `lessons/*.html`. Do NOT run `mk_native.js` (neither create nor `--merge`: it would overwrite reviewed text). Do not touch `work/`, `target/`, `native/en/`, `src/`, `packs/` or any other language. Scratch scripts: a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/topup-<l>/`; back up the native folder there before your first edit, and apply every change by id from a script (never retype a file).

Read first: `/home/claude/docs/HALVES-SPEC.md` (row formats, the `@@` rule, validator rules); the pair profile `/home/claude/docs/profiles/<l>-ko.md` (style authority, glossary, fixed phrases, deck-label conventions); the half's own `REVIEW.md` if it exists (its decisions bind you: same terms, same glosses for recurring phrases, same politeness conventions); the English source rows in `/home/claude/tools/halves/native/en/ko/` and the Korean in `/home/claude/tools/halves/target/ko/`; and the two halves already topped up as models: `/home/claude/tools/halves/native/es/ko/` and `/home/claude/tools/halves/native/ceb/ko/` (same ids; `ceb/ko/NEW-ROWS.md` lists what was added).

Steps:
1. Run the validator and list everything missing or stale: rows whose id exists in `native/en/ko` but not in your half (add them), rows in your half whose id no longer exists in the English half (remove them: e.g. card `ko.c0077`, sentences renumbered to `ko.s0297`–`ko.s0301`), rows whose English changed (re-translate: the validator and a diff of `native/en/ko` against your rows' meaning will show them — at least card notes mentioning the US, the dialogues `이름이 뭐예요?` and `어디에서 왔어요?`, practice `meet.06`, `particles.03`, `office.05`, `office.08`, example for 저), and the lesson bodies `meet`, `particles`, `office` (and any other whose tokens no longer match the English body: same tokens, same order; the `meet` body gains a country tip).
2. Translate the new rows from the English, checking each against the Korean. Card meanings short and distinct within each deck (the release check fails on two identical meanings in one deck, compared case-insensitively); notes one short line; examples and dialogues natural; follow the profile's politeness and cue conventions. Country names: use the standard names in the learner's language. Deck labels and the group name are permanent progress keys: short, natural, unique, in the style of the existing labels.
3. `@@` is the learner's name: keep exactly as many `@@` as the English row has, and write lines so any name fits (no case endings or particles fused to it that depend on the name's last sound, where the language allows).
4. Re-run the validator until `errors: 0`. Then assemble to your scratch folder (`node /home/claude/tools/halves/assemble.js <l> ko <scratch>/course-<l>-ko.js`) and check it loads: `node --check` on the file, and count of decks 56, cards 1413.
5. Write `/home/claude/tools/halves/native/<l>/ko/NEW-ROWS.md`: counts added / changed / removed per file, the 13 deck labels and the group name you chose, decisions, and the 20 rows most worth a native speaker's check.

Report (short): validator's last lines, counts, labels chosen, doubts.

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
