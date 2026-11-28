# Target-text tags: the course says which words are the language being taught

**Status (2026-11-28, 2.142.0):** live on en-es (Spanish for English speakers): 3,058 tagged runs in 1,479 fields, 4,069 marks with the positional ones; a script draft, then five Opus readers on every line (667 fields corrected). Other courses are untouched until the owner says to roll it out.

## 1. The problem

A learner-language field often quotes the language being taught: `A little more formal than me llamo.` Three things went wrong with that.

- **Learners:** the Spanish looked like the English around it. `No yo needed`, `me goes with yo`, `son`, `once`, `come` read as English. Nothing could be tapped to hear it.
- **Engines:** when a course is assembled for another learner language, the prose is translated and the quoted Spanish must stay exactly as it is. A script had to guess which words were Spanish (course word list, bold, a row's own words). For Spanish 1,022 fields held words it could not decide.
- **The first fix** (Vietnamese, 2.140.0) was a hand-kept side list, `marks.extra.jsonl`. It works, but it lives beside the text and goes stale when a line is edited.

## 2. The rule

In a tagged course, **target-language text inside learner-language prose is written between `‹` and `›`** (U+2039, U+203A):

    A little more formal than ‹me llamo›.
    ‹tú› form. To a stranger: ‹¿Dónde vive usted?›

The tag is part of the course text. It is written once, by the writer, where the word stands.

- **The app** (`tlWrap` in `src/app.html`) shows a tagged run as highlighted target text and plays it when tapped. The delimiters are never shown.
- **The exporter** (`tools/halves/export_target.js`, `targets/_inventory.js` with `tagged: true`) records exactly the tagged runs, with their delimiters, as the marks of the native half. `validate.js` then requires every native half to keep each run, delimiters included, so the assembled course highlights the same words.
- **Nothing is guessed.** The old classifier still runs, but only as a lint: a course word, a word with a target diacritic or a row's own target word outside every mark is reported, and the release test wants that report empty (`node tools/halves/tags.js lint es`, in `selftest.js`).
- **No side list.** `tools/target/es/marks.extra.jsonl` does not exist and is not needed.

Positions that are target text by themselves need no tag: card fronts, dialogue and example lines, `{{ex:…}}` rows, tiles, example cells `<td class="k">`, answers and target-only options, and in lesson bodies every bold run.

**Why bold stays in lesson bodies.** The old classifier accepted a bold run only when its words were in the course word list, so 30 bold Spanish terms outside it (`vosotros`, `levantarse`, `-dad`, `pingüino` …) were silently unprotected, and the 12 bold English phrases needed the same guess. Now bold means target text and nothing else; the English ones became `<strong>`. The section decks of all 26 lessons are identical before and after (`tools/sections/dump.js en-es --json`).

## 3. What is tagged (the judge's rules)

1. **Every run of the target language that the prose quotes, mentions or uses as an example.** Words, phrases, whole sentences; grammar words named in the language (`the ‹tú› form`, `‹ser› vs ‹estar›`); wrong forms quoted as mistakes (`never ‹mucho gracias›`).
2. **Letters and spellings named as the target's spelling:** `‹h› is always silent`, `‹ll›`, `‹ñ›`, `‹qu› sounds like k`, `‹g› before ‹e› or ‹i›`. Endings and stems keep their hyphen inside: `‹-o›`, `‹-ar›`, `‹pod-›`. Not tagged: a letter used to describe a *sound* in the learner's terms (`sounds like English y`, `a breathy h`, `ks`).
3. **One run per continuous quote**, with its own `¿ ? ¡ !` and inner punctuation inside: `‹¿Cómo se llama?›`, `‹Entonces, ¿vamos?›`. A closing `. , ; :` that belongs to the surrounding sentence stays outside: `‹Llegué tarde›.`
4. **Separate items stay separate:** `‹el› / ‹la›`, `‹suya›, ‹suyos›, ‹suyas›`, `‹a› + ‹el› = ‹al›`, `‹o› → ‹ue›`, `‹hay› or ‹estar›`.
5. **Homographs are decided by meaning:** `No ‹yo› needed`, `‹me› goes with ‹yo›`, `‹no› goes before the verb`.
6. **Not tagged:** pronunciation lines (`MOO-choh`, `KAH-yeh`); glosses and translations; names of people and places inside a translation (`My name is Sofía.`, `Los Angeles`); loan words used as the learner's own word (`tacos`, `at a taquería`). The same word quoted *as Spanish* is tagged (`In ‹México› … it is the breathy h`).
7. **Lesson bodies:** `<b>…</b>` is always a *taught* target term (a mark by position, like an example cell, and what the section decks read: `lsItems`). Target text that is only mentioned is a tag. Emphasis in the learner's language is `<strong>`. Never a tag inside `<td class="k">`, a `{{…}}` token or an `<i>` pronunciation line; never a tag around HTML.
8. A run has no leading or trailing space and holds none of `< > { } |`.

## 4. Tools

- `node tools/halves/tags.js propose <t> <out.jsonl>`: one-time draft for an untagged course (wraps what the classifier marks or reports).
- `node tools/halves/tags.js sheet <t> <out.jsonl>`: every prose field as it stands.
- `node tools/halves/tags.js apply <t> <rows.jsonl>`: writes rows `{f, id, k, text}` (or `edits: [[old, new], …]`) into `tools/target/<t>/`. It refuses a row that changes anything but tags, and undoes itself if any target-side field moved. `--dry` only checks. `--edit` allows real rewrites.
- `node tools/halves/tags.js lint <t>`: the release check.
- After `apply`: `node tools/target/gen.js <t>`, `node tools/sections/apply.js`, `node tools/halves/export_target.js <t>`, `proof.js <t>`, `validate.js en <t>`.

## 5. Rolling it out to another course

1. `tags.js propose <t>` with the target still untagged, then set `tagged: true` in `tools/halves/targets/<t>.js` and `tags.js apply`.
2. Opus judges read every line against §3 (one reader per 50k characters; sheets by `tags.js sheet`) and return corrected rows; `apply` proves each is tag-only.
3. `lint` 0, export, proof 0 differences, validate 0 errors, `node tools/tests/tags.js`. The app needs no switch: it highlights any course whose text carries tags (`tlOn`).
4. Names and loan words an English sentence keeps go in `proseOk` / `names` of the target file, never in `homographs` (that list also classifies quiz options).
5. Script-mode targets (Korean, Chinese, Japanese, Thai, Arabic …) already tell target text by script; tags there are optional and only buy the tap-to-hear highlight for Latin-script learners' notes.
