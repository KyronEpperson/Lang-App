# Writer brief: the Spanish half of the Mandarin course (`es-zh`)

The launching message says which writer you are: **w1, w2, w3 or w4**. You write Spanish for Spanish speakers learning Mandarin Chinese. The Chinese (characters, pinyin, answers) is fixed, and you cannot change it. There are no reading rows in this course.

## Read, in this order

1. `/home/claude/docs/briefs/es-zh-digest.md` in full: the rules, terms, titles and decisions you need at hand.
2. `/home/claude/docs/profiles/es-zh.md`: the pair profile and your authority. Read §1, §3, §5, §8 and §9 in full, plus your sections:
   - **w1:** §4.1, §4.2 and §4.5 (the Pinyin sounds and Tone pairs card notes), §5.1 (the «Trampas frecuentes» deck), §3.4 (`wU.jsonl`);
   - **w2:** all of §4, and §7 items 1–3;
   - **w3:** §4.2 and §4.3 (tones come up in greetings, numbers, measure), §7 items 4–15;
   - **w4:** §7 items 16–28.
   Where the profile fixes a term, a title or a gloss, use it exactly.
3. `/home/claude/tools/halves/native/es/zh/work/README.md`: the row format and the validator's rules.
4. `/home/claude/tools/halves/native/es/zh/work/REPEATS.md` and the four `NOTES-w*.md`: Chinese that occurs in several places, and the glosses each writer has set. Re-read the NOTES files before glossing any repeat: the others are writing at the same time.
5. **The one model half:** `/home/claude/tools/halves/native/es/ko/` (Spanish for the Korean course, reviewed). Read its `REVIEW.md` in full. Then Grep its `*.jsonl` for a term or a fixed gloss whenever the profile says "as es-ko". Do not read it row by row.
6. While you work, the Chinese itself, read-only: `/home/claude/tools/halves/target/zh/` (`cards`, `sentences`, `practice`, `checks`, `dialog`, `examples`, `patterns`). Translate from the English `src`, but check the meaning against the Chinese.

## Your files

- `work/<wN>.jsonl`: fill `"tgt"` on every row. Never edit `f`, `id`, `k`, `src`. Leave `pre` rows as they are, except the number format of profile §9 (*1,005* → *1005*).
- w2–w4: `work/<wN>/lessons/<id>.html`, one for each `<id>.src.html`. Same HTML structure (`<h3>`, `<div class="tip">`, `<div class="tbl"><table>`, `<b>`, `<i>`), and every `{{ex:zh.s…}}` and `{{tiles:zh.tl…}}` token unchanged and in the same order. In bodies `<b>` marks a taught Chinese term only; pinyin goes in `<i>`; Spanish anchors in « ».
- **w1** also fills `work/wU.jsonl`: the 12 interface strings (profile §3.4).
- **Everyone** writes their shared glosses and decisions in their own `work/NOTES-<wN>.md`, one line each (`Chinese → Spanish gloss · note`), and only there. Never edit another writer's NOTES file; read all four.
- There is no trainer file and no reading file.
- Touch no other file: other agents are working in the repo. Scratch scripts go in a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/eszh/<wN>/`.

## Scope (from `work/plan.json`)

| Writer | Rows | Scope |
|---|---|---|
| w1 | 1649 | course name, the 6 groups, labels (7 level titles, 4 greetings), the 31 deck labels and descriptions, cards `zh.c0001–zh.c0821` (meaning + note), and `wU.jsonl` (12 interface strings) |
| w2 | 881 | cards `zh.c0822–zh.c0886`, all dialogues, examples and patterns, and lessons 1–3 (`pinyin`, `tones`, `tone-change`): bodies, titles, blurbs, example glosses, in-lesson decks and tile hints, checks, practice |
| w3 | 713 | lessons 4–15 (`characters`, `greetings`, `pronouns`, `shi`, `adj`, `ma`, `question-words`, `bu-mei`, `de`, `you`, `numbers`, `measure`): the same |
| w4 | 640 | lessons 16–28 (`food`, `family`, `time`, `zai`, `word-order`, `want-can`, `le`, `progress`, `serial`, `a-not-a`, `ye-dou`, `ba-bie`, `and-or`): the same |

## What to do, by kind

- **Course, groups, labels, decks (w1):** profile §3.5 gives every name: use them exactly. Deck descriptions follow the English content; `pinyin-sounds` and `tone-pairs` use the §4 wording; the traps deck description is the one in §3.5.
- **Card meanings and notes (w1, w2):**
  - Meanings are short like dictionary glosses and distinct within a deck (case-insensitive).
  - Notes are one or two sentences. Keep every Han run of the English note.
  - Rewrite every `rw` row and every English sound comparison from the profile's reading guide (§4.1), never from English. The pinyin-sound and tone-pair cards (`zh.c0001` onward) use the exact anchor words w2 records in `NOTES-w2.md`; until they appear, use the §4.1 table wording.
  - People words: «amigo/a», «profesor/a» in meanings (§8 gender rule).
- **Lesson bodies (w2–w4):** rebuild each one for a Spanish reader as the per-lesson note (§7) says: the bridges first (§5.2), then the mirror and the traps (§5.1, §5.3). Wherever the English says "as in English" or "English says …", replace it with the Spanish fact, which is often the opposite (adjective and *de* order). Keep every claim about Chinese.
  - `pinyin`, `tones`, `tone-change` (w2) carry the reading guide (§4.1–4.5), including the keyboard advice of §4.4.
  - Lesson titles: profile §3.5, exactly. Blurbs: one plain sentence in tú.
  - In-lesson deck names (`zh.ld.*`): §3.5. Tile hints (`zh.tlNNN.NN`): about 25 characters, no `_`, no braces.
- **Example and dialogue glosses (w2–w4):** natural Spanish that matches the Chinese, with the address of §3.2 (usted only with 您 / 贵). One gloss per sentence across files.
- **Practice and check prompts (w2–w4):** profile §8.
  - **A prompt must pin the accepted answer.** Read the item's `a` / `o` / `x` / `strict` in `target/zh/practice.jsonl` first.
  - If Spanish would allow a second Chinese answer the item rejects (你 or 您, 了 or not, 不 or 没, 两 or 二, 和 or 还是 or 或者, 我们 or 咱们, 会 or 能), add the cue from the §8 table (usted, «ya», the *pretérito*, «nosotros (tú y yo)», *saber* …).
  - **Name the subject** when the answer contains a pronoun: Spanish would drop it.
  - Gender: generic masculine in sentences unless the Chinese marks gender (§8).
  - Never let the Spanish wording point to a distractor.

## Rules that earlier halves got wrong (from their reviews)

- **One gloss per sentence across files.** The same Chinese sentence gets the same Spanish in cards, examples, dialogues, lesson rows and practice. Check `REPEATS.md` and every `NOTES-w*.md` before glossing. When you are the first writer listed for a repeated sentence, set its gloss in your `NOTES-<wN>.md`; otherwise copy the first writer's (if it is not there yet, choose, record it, and report it).
- **One term per idea.** *clasificador* everywhere (es-ko had to fix 27 places where «clasificador» and «contador» were mixed: here the term is *clasificador*, and *contador* never appears). *sustantivo*, *partícula*, *palabra interrogativa*, the tone names of §3.3. Do not coin a second term for an idea the profile names.
- **Address follows the Chinese.** es-ko had to move lines both ways between tú and usted. Here: usted only with 您 / 贵; tú for 你; no person where the line is to a stranger and has no pronoun (§3.2). Tú to the learner everywhere.
- **Neutral vocabulary.** No regionalisms es-ko removed (*alberca, cacahuate, cubrebocas, plática, junta, reporte, platillos, papitas*); no Peninsular marks (*vale, ordenador, coche, móvil, vosotros*).
- **Cross-references** by the Spanish lesson number and the §3.5 title, never the English title.
- **Tabs** exactly *Hoy, Práctica, Repaso, Lecciones, Entrenar, Progreso*. No body promises a trainer, a drill or stroke-order animation that does not exist.
- **No invented etymologies** or character stories. State a character origin only if the English states it, and keep it.
- **Past and aspect:** 了 is never "the past"; «ya» for a change; *imperfecto* for no-了 past states; 过 = «alguna vez». A past without 了 in Chinese gets no added «ya» in the gloss or prompt unless the item needs it.
- **No English left** in bodies, table headers, options, hints or deck descriptions. **No English sound comparisons**: anchors come from Spanish (§4).
- Numbers and money as profile §9 (*1005*, *10,000*, *yuanes*). ¿ ¡ always.

## Checks before finishing

Run the dry run as often as you like:

```bash
cd /home/claude && node tools/halves/dryrun.js es zh <wN>
```

It merges a copy of the half in a temp folder (never the real half), validates it, and lists only **your** rows: errors, warnings, and empty rows.
- **Finish with `your errors: 0` and `empty rows: 0`.**
- Read every warning:
  - **adds Han**: allowed only where the README says (card notes; rarely bodies and `why`);
  - **pinyin … not found**: restore it.

Also write a small check script in your scratch folder for what the validator cannot see:
- `.html` `<h3>` / table structure and the order of `{{ex:…}}` / `{{tiles:…}}` tokens equal to `.src.html`;
- no two meanings identical in one deck (case-insensitive, trimmed);
- no English word left (a list of common English words: *the, and, with, you, is, of* …);
- no *vosotros / vos / vale / ordenador / contador*; every usted line has 您 or 贵 in its Chinese;
- the glosses of every `REPEATS.md` line you own match the `NOTES-w*.md` files.

**Do not run `mk_native.js --merge`** (on the real half or anywhere) and do not edit merged files.

## Report (briefly)

- rows filled and lessons written;
- the Spanish angle per rewritten passage (one line each);
- deck labels and group names as written (w1);
- any `_waive`, with its reason;
- the 15 rows or passages most worth a native speaker's check;
- any file you read that this brief does not list, and why.

No native speaker will be consulted: make each call yourself, choose the most widely understood neutral form, and mark your doubts.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind.** The model half is `native/es/ko/`: read its `REVIEW.md` in full, then Grep it. Do not read other courses (not `native/vi/zh/`, not `native/es/en`).
- **Search, do not open.** For a single fact in a big file (a term, a gloss, a rule), use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job, and do not read a file "for context" that the brief did not ask for. The exception is the four `NOTES-w*.md`: re-read them before glossing a repeat.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- If something you truly need is not on your list, read the smallest part that answers it and say in your report which file and why, so the list can be fixed.
