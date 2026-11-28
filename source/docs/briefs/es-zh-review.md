# Cold-review brief: the Spanish half of the Mandarin course (`es-zh`)

You are the cold reviewer: you did not write this half. Work ONLY inside `/home/claude/tools/halves/native/es/zh/`: the merged `*.jsonl`, `lessons/*.html` and `ui.json`.
- Do NOT touch `work/`, `course.json`, `tools/halves/target/`, `src/` or anything else: other agents are editing those.
- Touch `ui.json` only for the 12 keys of `work/wU.jsonl`.
- Never run `mk_native.js`.
- Scratch scripts go in a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-eszh/`. Back the half up there first, and apply every fix by id from a script that can be re-run on the backup and reproduce the result.

## Read first

- `/home/claude/docs/HALVES-SPEC.md` §11 (how a half is assembled).
- The pair profile `/home/claude/docs/profiles/es-zh.md`, in full: the style authority. `/home/claude/docs/briefs/es-zh-digest.md` is its summary.
- The writers' material in `work/` (read-only):
  - `NOTES-w1.md` … `NOTES-w4.md` (the glosses each writer set);
  - `REPEATS.md` (Chinese in several places);
  - the four writers' reports, if the lead passes them on.
- Your model is `/home/claude/tools/halves/native/es/ko/REVIEW.md`: same language, same house style. Grep `native/es/ko/` for its settled terms; do not read it row by row.
- The English reference half is `native/en/zh/` (same ids); the Chinese is `target/zh/`, read-only.

The half validates: `node /home/claude/tools/halves/validate.js es zh` (run from `/home/claude`; add `--all` to see every warning).

Read EVERY row and every lesson body as a careful native-level editor of Spanish and a Chinese teacher. Make readable dumps by script (Spanish next to the Chinese and the English, joined by id), as the es-ko reviewer did. FIX what is wrong directly:
- keep ids, keys, Han characters, pinyin, `{{ex:…}}` and `{{tiles:…}}` tokens and their order, blanks `___` and the HTML structure;
- edit only the Spanish.

## Check and fix

1. **Every gloss is right against the Chinese**, not only the English. Read each card meaning, example, dialogue line, sentence and pattern next to its row in `target/zh/`:
   - 了 / 过 / 在 glossed as profile §5.4 says («ya», *pretérito*, «alguna vez», *estar* + gerundio; no «ya» or *pretérito* added where the Chinese has no 了);
   - 不 vs 没; 你 vs 您 (usted only with 您 / 贵, profile §3.2); 你们 = ustedes;
   - 美国 / 美国人 = Estados Unidos / estadounidense; names spelled as the English;
   - measure words; numbers; prices in yuanes;
   - the gender and number rule (§8): «amigo/a» in meanings, generic masculine in sentences, agreement where the Chinese marks gender.
2. **Every type-in and order prompt leads to its accepted answer and to nothing the item rejects.** Read `target/zh/practice.jsonl` (`a`, `o`, `x`, `strict`) for every item. The cues of profile §8 must be present where Spanish would allow a second answer, and the subject must be named where the answer has a pronoun.
3. **Every factual claim is true:**
   - sound anchors (profile §4.1: b d g = Spanish p t k; h = jota; j never jota; q never k, qu = «chü»; x never «ks»; z = «ts»; -i ≠ «i», 四 sì ≠ «sí»; ü ≠ the diaeresis of «pingüino»; -ng = n of «tengo»);
   - tone statements: no "tone X = Spanish intonation"; tone marks are not stress marks;
   - the grammar bridges and traps (§5): ser / estar, hay / está, saber / poder, *imperfecto*, «ya»;
   - cultural comparisons; no invented etymologies.
4. **False friends and traps are handled from the Spanish side:** 小姐 / «señorita», 美国 / «América», 四 / «sí», *tener años*, *estar* + adjective, double negation, *no* + command; the «Trampas frecuentes» deck notes speak to a Spanish speaker, not an English one.
5. **Consistency across the four writers:**
   - one term per idea (profile §3.3: *clasificador*, never *contador*; *marca de tono*, never *tilde*; *palabra de ubicación*; the tone names);
   - one gloss per recurring Chinese sentence (every `REPEATS.md` line; then find by script any other Chinese glossed two ways and unify);
   - one spelling per name and place (Pekín, Shanghái; Wang Ming);
   - the same anchors in `pinyin` / `tones` / `tone-change`, the Pinyin sounds and Tone pairs cards, and their deck descriptions.
6. **Register:** tú to the learner everywhere; ustedes, never *vosotros*; no *vos*; neutral Latin American vocabulary (profile §3.1 and es-ko's list); no Peninsular marks (*vale, ordenador, coche, móvil*) and no strong regionalisms.
7. **Leftover English:** none in bodies, table headers, options, hints, deck descriptions or tile hints. No English sound comparison anywhere ("as in …", "like the … in …").
8. **Naturalness:** fix stiff or calqued Spanish, especially where the English structure shows through. Prefer safe, widely understood words.
9. **Lessons:**
   - titles exactly as profile §3.5;
   - cross-references match the final numbers and titles;
   - blurbs in tú;
   - added Chinese in bodies (validator warning `adds Han`) is correct and needed.
10. **Mechanics:**
    - ¿ ¡ everywhere a Spanish question or exclamation appears;
    - number format (1005; 10,000) and money (*yuanes*, *mao*);
    - no two options of one question identical;
    - no two meanings identical in one deck (case-insensitive after trimming: the release check fails on this);
    - deck labels and group names unique, short and natural (permanent progress keys: change only if clearly wrong, and list the final 31 + 6);
    - blanks intact; no «once =» or other space + *on…=* in bodies.
11. **`ui.json`:** the 12 keys exist, name Chinese (not English or Korean), and the grammar-search example is Chinese (了).

Do not ask anyone questions; decide and record.

Write `/home/claude/tools/halves/native/es/zh/REVIEW.md` with:
- what you checked and how (dumps, scripts, their paths);
- changes per file and kind (a table like es-ko's);
- the glossary and the decisions you enforced;
- the ten most important fixes;
- claims you could not fully verify;
- the final deck labels and group names;
- **edits per writer**: one short section each for w1, w2, w3 and w4, listing the kinds of edits you made to their rows (so the lead can brief the next writers);
- **a top-ten list** of rows or passages a native Spanish-speaking Chinese teacher should check first.

State that the reviewer is not a native speaker.

Finish with:

```bash
cd /home/claude && node tools/halves/validate.js es zh --all
```

It must end with `errors: 0`. Read every warning and say in REVIEW.md why each remaining one is legitimate.

Final report (short): rows changed, decisions, the validator's last lines, remaining doubts.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind:** `native/es/ko/REVIEW.md`.
- **Search, do not open.** For a single fact in a big file, use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- Web search is allowed for Spanish usage and for a Chinese meaning you doubt. Record each source in REVIEW.md.

Reviewers may read more widely than writers, but the first two bullets still hold.
