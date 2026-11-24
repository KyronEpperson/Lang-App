# Cold-review brief: the Vietnamese half of the Mandarin course (`vi-zh`)

You are the cold reviewer: you did not write this half. Work ONLY inside `/home/claude/tools/halves/native/vi/zh/`: the merged `*.jsonl` and `lessons/*.html`.
- Do NOT touch `work/`, `course.json`, `tools/halves/target/`, `src/` or anything else: other agents are editing those.
- Touch `ui.json` only for the 12 keys listed in `docs/briefs/vi-zh-design.md` §6.
- Never run `mk_native.js`.
- Scratch scripts go in a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-vizh/`. Back the half up there first, and apply every fix by id from a script that can be re-run.

## Read first

- `/home/claude/docs/HALVES-SPEC.md` (§11) and `/home/claude/docs/briefs/vi-zh-design.md` §5 (the Chinese rules and the Hán Việt fields).
- The pair profile `/home/claude/docs/profiles/vi-zh.md`: the style authority.
- The writers' material in `work/`:
  - `NOTES-w1.md` … `NOTES-w4.md` (the glosses each writer set);
  - `REPEATS.md` (Chinese in several places);
  - `hv-w1.tsv`, `hv-w2.tsv` (the sources of every reading);
  - the four writers' reports, if the lead passes them on.
- Your model is `/home/claude/tools/halves/native/vi/ko/REVIEW.md`: same language, same house style. Grep `native/vi/ko/` for its settled terms; do not read it row by row.
- The English reference half is `native/en/zh/` (same ids); the Chinese is `target/zh/`, read-only.

The half validates: `node /home/claude/tools/halves/validate.js vi zh` (run from `/home/claude`; add `--all` to see every warning).

Read EVERY row and every lesson body as a careful native-level editor of Vietnamese and a Chinese teacher. FIX what is wrong directly:
- keep ids, keys, Han characters, pinyin, `{{tokens}}`, blanks `___` and the HTML structure;
- edit only the Vietnamese and the Hán Việt fields.

Then re-run the validator: it must still end with `errors: 0`.

## Check and fix

1. **Every Hán Việt reading is correct.** A wrong reading is the worst error in this course.
   - Re-check each `hv` against an opened page. Write a script that lists every (character, reading) pair across cards, with the card ids and the writer's source from `hv-w*.tsv`.
   - Look up at least every character whose source is missing, every polyphone warning (`readings X: read two ways`), and every character whose Simplified form merges several Traditional ones (发 后 干 面 里 台 云 只 …).
   - Fix or downgrade to `skip` anything you cannot confirm.
   - `hv` must be the Hán Việt reading, not a vernacular form (恩 *ân*, not *ơn*).
   - Every `trad` must be the real Traditional form of the word.
2. **Every `hvUse` is right.**
   - `same` only if modern Vietnamese really uses the word in this meaning.
   - `shifted` notes state both meanings correctly (profile §5.2).
   - `none` notes do not imply that Vietnamese uses the word.
   - No invented reversals or etymologies.
3. **Accuracy against the Chinese**, not only the English:
   - 了 / 过 / 在 glossed as profile §5.4 says (*rồi, đã từng, đang*; never *đã* alone for 了);
   - 不 vs 没; 你 vs 您 (address, profile §3.2);
   - classifiers;
   - the place and modifier order explained correctly.
4. **Every type-in and order prompt leads to its accepted answers and to nothing the item rejects.** Read `target/zh/practice.jsonl` (`a`, `x`, `alt`, `strict`) for every item. The cue words of profile §8 must be present where Vietnamese would allow a second answer.
5. **Every factual claim is true:**
   - sound anchors (§4: pinyin d = *t*, p ≠ *ph*, h ≈ *kh*, -i ≈ *ư*, ü ≠ *uy*);
   - tone statements: no "thanh 1 = ngang"; the cognate tip uses «thường»;
   - false friends;
   - cultural comparisons, place names, Chinese person names in Hán Việt.
6. **Consistency across the four writers:**
   - one term per idea (profile §3.3; vi-ko's terms);
   - one gloss per recurring Chinese sentence (every `REPEATS.md` line; then find any other Chinese glossed two ways and unify);
   - one spelling per name;
   - one convention for aspect cues and for honorific lines (*ạ* only on lines to an elder, teacher or customer; never in the app voice).
7. **Naturalness:** fix stiff or calqued Vietnamese, especially where the English structure shows through. Prefer safe, widely understood words.
8. **Lessons:**
   - titles match profile §3.5 (the 14 roadmap titles exactly);
   - cross-references match the final titles;
   - `pinyin` / `tones` / `tone-change` and the Pinyin sounds / Tone pairs cards use the same anchors;
   - no leftover English in bodies, table headers or options;
   - added Chinese in bodies (validator warning `adds Han`) is correct and needed.
9. **Mechanics:**
   - no two options of one question identical;
   - no two meanings identical in one deck (compare case-insensitively after trimming: the release check fails on this);
   - deck labels and group names unique, short and natural (permanent progress keys: change only if clearly wrong, and list the final 31 + 6);
   - numbers in Vietnamese format; blanks intact.
10. **`ui.json`:** the 12 keys exist, name Chinese (not English or Korean), and the grammar-search example is Chinese.

Do not ask anyone questions; decide and record.

Write `/home/claude/tools/halves/native/vi/zh/REVIEW.md` with:
- what you checked;
- the decisions table;
- the Hán Việt audit (pairs checked, corrected, downgraded to skip);
- rows changed per file;
- the final deck labels and group names;
- at most 20 items a native speaker should still look at.

State that the reviewer is not a native speaker.

Final report (short): rows changed, Hán Việt corrections, decisions, the validator's last lines, remaining doubts.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind:** `native/vi/ko/REVIEW.md`.
- **Search, do not open.** For a single fact in a big file, use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- Web search is expected for every Hán Việt reading you check, and for Vietnamese usage. Record each source in REVIEW.md's audit.

Reviewers may read more widely than writers, but the first two bullets still hold.
