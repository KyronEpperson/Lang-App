# Writer brief: the Vietnamese half of the Mandarin course (`vi-zh`)

The launching message says which writer you are: **w1, w2, w3 or w4**. You write Vietnamese for Vietnamese speakers learning Mandarin Chinese. The Chinese (characters, pinyin, answers) is fixed, and you cannot change it.

## Read fully, in this order

1. `/home/claude/docs/profiles/vi-zh.md`: the pair profile and your authority (register, glossary, reading guide, Hán Việt rules, false friends, grammar bridges, per-lesson notes, prompt rules). Where it fixes a term, a title or a gloss, use it exactly.
2. `/home/claude/tools/halves/native/vi/zh/work/README.md`: the row format, the Hán Việt rows, and the validator's rules.
3. `/home/claude/tools/halves/native/vi/zh/work/REPEATS.md` and the four `NOTES-w*.md`: Chinese that occurs in several places, and the glosses each writer has set.
4. **The one model half:** `/home/claude/tools/halves/native/vi/ko/` (Vietnamese for the Korean course, reviewed). Read its `REVIEW.md` in full. Then Grep it for terms and fixed glosses whenever the profile says "as vi-ko". Do not read it row by row.
5. While you work, the Chinese itself, read-only: `/home/claude/tools/halves/target/zh/` (`cards`, `sentences`, `practice`, `checks`, `dialog`, `examples`). Translate from the English `src`, but check the meaning against the Chinese.

## Your files

- `work/<wN>.jsonl`: fill `"tgt"` on every row. Never edit `f`, `id`, `k`, `src`; leave `pre` rows as they are, except number format.
- w2–w4: `work/<wN>/lessons/<id>.html`, one for each `<id>.src.html`. Same HTML structure, every `{{ex:zh.s…}}` token unchanged and in the same order.
- **w1** also fills `work/wU.jsonl`: the 12 interface strings (profile §3.4; `docs/briefs/vi-zh-design.md` §6).
- **Everyone** writes their shared glosses and decisions in their own `work/NOTES-<wN>.md`, one line each, and only there. Four writers work at once, so never edit another writer's NOTES file; read all four.
- **w1 and w2** keep `work/hv-<wN>.tsv`: one line per **character** you looked up: `character<TAB>reading<TAB>URL of the page you read it on`.
- There is no trainer file (`wT.jsonl`): en-zh has no trainers.
- Touch no other file: other agents are working in the repo. Scratch scripts go in a new folder `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/vizh/<wN>/`.

## Scope (from `work/plan.json`)

| Writer | Scope |
|---|---|
| w1 | course name, groups, labels (level titles, greetings), the 31 deck labels and descriptions, cards `zh.c0001–zh.c0555` with **386 Hán Việt decisions**, `wU.jsonl` |
| w2 | cards `zh.c0556–zh.c0886` with **255 Hán Việt decisions**, all dialogues, examples and patterns, lesson 1 `pinyin` |
| w3 | lessons 2–14 (`tones` … `numbers`): bodies, titles, blurbs, example glosses, checks, practice |
| w4 | lessons 15–28 (`measure` … `and-or`): the same |

## What to do, by kind

- **Hán Việt rows (w1, w2):** for every card with an `hvUse` row, decide **same / shifted / none / skip** and give `hv` (profile §5.1, README).
  - **Look up every character on an opened page** (web search: a Hán Việt dictionary entry, or Wiktionary's character page with its Vietnamese section). Record it in `hv-<wN>.tsv`.
  - **Never guess, and never compose a reading from a look-alike character.** A wrong Hán Việt reading is the worst error this course can contain. If you cannot confirm a reading, choose `skip` and say so in your report.
  - For a Simplified character that merges several Traditional ones (发, 后, 干, 面, 里 …), look up the Traditional character this word uses.
  - `hv` is the Hán Việt reading (恩 *ân*), not a vernacular one (*ơn*).
  - "same" means modern Vietnamese really uses the word in this meaning: check the Vietnamese meaning too, not only the reading.
  - Fill `trad` only when the note prints the Traditional form.
- **Card meanings and notes:**
  - Meanings are short like dictionary glosses and distinct within a deck.
  - Notes are one or two sentences, the Hán Việt line first when there is one.
  - Rewrite every `rw` row and every English sound comparison from the profile's reading guide (§4), never from English.
- **Deck labels, groups, level titles (w1):** profile §3.5. Short, unique, natural; "Top …" as *… thông dụng*. Rename the "Traps for English speakers" deck.
- **Lessons:**
  - `pinyin` (w2) and `tones` / `tone-change` (w3) carry the reading guide (§4.1–4.4), including the keyboard advice.
  - Every grammar lesson is rebuilt on Vietnamese as the per-lesson notes (§7) say: the bridges first, then the mirror rules.
  - Lesson titles: the roadmap titles in §3.5 exactly; the others from the §3.3 terms.
- **Practice and check prompts:** profile §8.
  - **A prompt must pin the accepted answer.** Read the item's `a` / `x` / `o` in `target/zh/practice.jsonl` first.
  - If Vietnamese would allow a second Chinese answer the item rejects (了 or not, 不 or 没, 你 or 您, 两 or 二, 和 or 还是), add the cue (*rồi, đã từng, đang, nữa, Nói với thầy giáo:* …).
  - Never let the Vietnamese wording point to a rejected option.

## Rules that earlier halves got wrong (from their reviews)

- **One gloss per sentence across files.** The same Chinese sentence gets the same Vietnamese in cards, examples, dialogues, lesson rows and practice. Check `REPEATS.md` and every `NOTES-w*.md` before glossing. When you are the first writer listed for a repeated sentence, set its gloss in your `NOTES-<wN>.md`; otherwise copy the first writer's (if it is not there yet, choose, record it, and report it).
- **Reuse vi-ko's established Vietnamese** for grammar words, interface names and fixed phrases (profile §3.2, §3.3): *trợ từ, danh từ, phủ định, từ để hỏi, thanh điệu, từ dễ nhầm*; tabs *Hôm nay, Luyện, Ôn tập, Bài học, Tiến độ*; *Kiểm tra*; *Cụm từ của tôi*. Do not coin a second term for an idea vi-ko already names.
- **No invented etymologies** or character stories. State a character origin only if the English states it, and keep it.
- **Address:** *bạn* or no pronoun in the app voice. *ạ* and role nouns only on lines to an elder, teacher or customer (profile §3.2).
- **Past and aspect:** never gloss 了 with *đã* alone; use *rồi*. 过 = *đã từng*. A past without 了 in Chinese gets no added aspect word in the prompt unless the item needs it.
- **No English left** in bodies, table headers or options. No English sound comparisons.
- Numbers in Vietnamese format (*1.005*); money in *tệ*.

## Checks before finishing

Run the dry run as often as you like:

```bash
cd /home/claude && node tools/halves/dryrun.js vi zh <wN>
```

It merges a copy of the half in a temp folder (never the real half), validates it, and lists only **your** rows: errors, warnings, and empty rows.
- **Finish with `your errors: 0` and `empty rows: 0`.**
- Read every warning:
  - **adds Han**: allowed only where the README says;
  - **pinyin … not found**: restore it;
  - **read two ways**: check that it is a real polyphone, otherwise unify: read the other writer's `NOTES-w*.md`, follow it, and say so in your report.

Also write a small check script for what the validator cannot see:
- `.html` `<h3>` / table structure equal to `.src.html` (the validator only warns);
- no two meanings identical in one deck;
- every `hv` has one line per character in your `hv-<wN>.tsv`, with a URL;
- the glosses of every `REPEATS.md` line you own match the `NOTES-w*.md` files.

**Do not run `mk_native.js --merge` on the real half** and do not edit merged files.

## Report (briefly)

- rows filled and lessons written;
- Hán Việt counts (same / shifted / none / skip) and the characters you skipped because you could not confirm them;
- the Vietnamese angle per rewritten passage (one line each);
- deck labels (w1);
- any `_waive`;
- the 15 rows or passages most worth a native speaker's check.

No native speaker will be consulted: make each call yourself, choose the most widely understood standard form, and mark your doubts.

---

## Reading rule (applies to this brief; it overrides any "look around" habit)

Reading is most of what an agent costs. Read the files this brief names, and only those.

- **Do not open** `src/app.html`, anything in `packs/`, `korean-flashcards.html`, `korean-site/`, `lang-app/`, or another language's course folder, unless this brief names that exact file. They are larger than your whole job.
- **One model file per kind.** The model half is `native/vi/ko/`; do not read other courses.
- **Search, do not open.** For a single fact in a big file (a term, a gloss, a rule), use Grep for the line, or Read with `offset` and `limit` for that part.
- **Do not re-read** a file you already read in this job, and do not read a file "for context" that the brief did not ask for.
- **Checks are scripts.** Run the commands this brief lists; do not read a validator's source to predict what it will say.
- Web search is expected for Hán Việt readings, the meaning of a Vietnamese word, and place names. Record each source.
- If something you truly need is not on your list, read the smallest part that answers it and say in your report which file and why, so the list can be fixed.
