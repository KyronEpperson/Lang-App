# Brief: mark the English inside the Spanish of the course es-en (English for Spanish speakers)

You are a language judge. The course teaches **English** to people who read **Spanish**. Every explanation is Spanish and quotes English.
From now on the English that the Spanish prose quotes, mentions or uses as an example is written between `‹` and `›` (U+2039, U+203A).
The app shows a tagged run highlighted and plays it in an English voice when tapped. So: **tag exactly what is English, nothing that is Spanish.**

A script made a first draft on the source lines (it turned `"Hello"` and `<i>it</i>` into `‹Hello›` and `‹it›` where it knew the words).
You read every line of your sheet and return the lines that still need a change.

## Reading list (nothing else)

1. This brief.
2. `/home/claude/docs/briefs/target-text-tags.md`, sections 2 and 3 only (the rule as first written for Spanish taught to English speakers; here the roles are swapped: English is the tagged language).
3. Your sheet (path in your task). Each line is `file:line<TAB>the source line`.

## What a line is

- **`decks.js`**: `English card | pronunciation | Spanish meaning | Spanish note`. Only the **note** (4th field) may hold tags. Never touch fields 1 to 3.
- **`practice.js`** and the practice rows in `more/*.js`: JavaScript. Long form `{ t: "mc", q: …, o: […], why: … }`, or short rows:
  `['mc', q, correct, wrong, wrong, wrong, why]` · `['or', p, tiles, distractors, why]` · `['fi', q, p, answers, options, why]` · `['ty', p, answers, hint, wrong, why]`.
  Tags may stand only in: `q` of an **mc** item, `p`, `hint`, `why`. **Never** in an answer, an option, a tile, a distractor, or the `q` of a fill item (`There __ a bank.` is already English by position).
- **`lessons.js`, `more/*.js` lesson lines**: `title:"…"`, `blurb:"…"`, body lines (HTML), and `check:[[question, [options], index, why], …]`. Tags may stand in title, blurb, body, and a check's question and why. Never in check options, `id:`, `deck:`.

## The rules

1. **Tag every run of English that the Spanish prose quotes, mentions or uses as an example**: words, phrases, whole sentences, wrong forms shown as mistakes (`no ‹Has many people›`), English grammar words named in English (`el auxiliar ‹do›`), endings and letters named as English spelling (`‹-ed›`, `‹-s›`, `la ‹h› es un soplo suave`, `‹th›`).
2. **The tag replaces the old mark.** `"Hello"` becomes `‹Hello›`, `\"Hello\"` becomes `‹Hello›`, `<i>it</i>` becomes `‹it›`. Do not keep quotes or italics around a tag. Quotes around Spanish, and `«…»`, stay as they are.
3. **One run per continuous quote**, with its own `? !` and inner punctuation inside: `‹Good, thanks. You?›`. A final `.` or `,` that was inside the quotes of a full quoted sentence may stay inside; one that belongs to the Spanish sentence stays outside.
4. **Separate items stay separate**: `‹is› / ‹are›`, `‹a›, ‹an›`, `‹do› + ‹not› = ‹don't›`. In a `hint` the pieces are joined by ` · `: each English piece is its own run (`‹it› · ‹hot› · ‹today› — el sujeto es obligatorio`).
5. **A frame with a gap is one run**: `‹There ___ two rooms.› ¿Qué va en el hueco?`, `‹I'm ___›`.
6. **Decide look-alikes by meaning**: Spanish `no`, `me`, `a`, `son`, `come`, `actual`, `once`, `pie` are Spanish when the Spanish sentence uses them; the English word quoted is tagged. Names and loan words that the Spanish sentence itself uses are not tagged (`en Nueva York`, `un sándwich`, `el wifi`, `Ana`); the same word quoted as English is.
7. **Never tagged**: pronunciation respellings (`je-LOU`, `CHAAK`, `ii`, `dy`, `uu`), Spanish translations and meanings, sounds described with Spanish letters (`suena como la «j»`), English letter names spelled out as sounds (`EI`, `BII`).
8. **Lesson bodies**:
   - `<b>…</b>` means: **English shown as the thing to learn** (the app plays bold when tapped, and builds the lesson's card sections from it). Keep English in `<b>` exactly as it is. Never put a tag inside `<b>`, and do not turn `<b>` English into a tag.
   - Spanish emphasis must be `<strong>…</strong>`, not `<b>`. The draft changed the ones it could; fix the rest in both directions (English that the draft wrongly made `<strong>` goes back to `<b>`; a bold pronunciation respelling such as `<b>CHAAK</b>` becomes `<strong>CHAAK</strong>`; bold that mixes both, like `<b>Hi + nombre</b>`, becomes `<strong>‹Hi› + nombre</strong>`).
   - `<i>…</i>` stays for pronunciation keys and for Spanish words; English in `<i>` becomes a tag.
   - Never a tag inside `{{…}}`, inside `<td class="k">…</td>`, or around HTML. Plain table cells (`<td>` without `class="k"`) and `<h3>` headings are prose: English there is tagged.
9. A run has no leading or trailing space and holds none of `< > { } | "`.

## What you may change, and how you answer

- **Only the marking**: add or remove `‹ ›`; remove the `"…"`, `\"…\"` or `<i>…</i>` that a tag replaces (or put them back where the draft tagged Spanish or a respelling); switch `<b>` and `<strong>`. Not one other character. Do not fix wording, typos or content: report them.
- Mind the JavaScript: in a JS line the bare `"` are string delimiters and must stay; only the escaped `\"…\"` inside a string are quotes of the text. In `decks.js` and in body lines the quotes of the text are bare `"`.
- Write a JSON Lines file, one row per changed line, with the **whole line** as it must stand (copy the line, leading spaces included, without the `file:line<TAB>` prefix):
  `{"k":"decks.js:12","text":"Hello. | je-LOU | Hola | El saludo más básico …"}`
- Check it, and repeat until it prints `ok`:
  `node /home/claude/tools/content/tags.js apply es <your file> --dry`
- Work files go in your own folder `/tmp/judge-es-en/<your sheet name>/` (create it). Do not edit anything under `/home/claude` or any repository.

## Report (short)

Lines changed; the three most common kinds of correction; content errors noticed but not touched; lines where you were unsure and what you chose; any file read beyond the list.
