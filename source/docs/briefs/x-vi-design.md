# x-vi design: Vietnamese as the fourth target half, and the "by marks" mode

**Status (2026-11-26):** steps 1–4 of `docs/HALVES-BLUEPRINT.md` §3 are done. `tools/halves/target/vi/` and the English reference half `native/en/vi/` are exported from en-vi (`tools/target/vi/`, `node tools/target/gen.js vi`).
- `proof.js vi`: 0 differences. A second export is byte-identical.
- `validate.js en vi`: 0 errors.
- Every half-built pack re-assembles byte-identically.

No native half exists yet. Nothing in `packs/` or `tools/target/vi/` was written.

## 1. The marks model

Script cannot tell Vietnamese from English, Spanish or French text. So `TARGETS.vi` has `by: 'marks'` (ko, zh and yue now say `by: 'script'` and behave exactly as before). The half records **where** the target text is, at two levels.

1. **Whole target fields**, decided by position and never by the text. They live only in `target/vi/`. A native half cannot hold them: a native row with a `vi` or `a` field is refused as "not a native field". These fields are:
   - card front and reading;
   - example, dialogue and pattern text;
   - lesson sentences (`{{ex:…}}`);
   - in-lesson card fronts;
   - tile fronts and readings;
   - greetings;
   - for `fill`, `order` and `type` items: the answers, options, wrong typed answers and the fill sentence.

   The type cannot decide `mc` and check options, because they are sometimes Vietnamese and sometimes English. Each item is decided **once, from its key answer** (check: the option at `a`; mc: `o[0]`). Its options are then all target or all prose, never split. The test asks whether the key is a Vietnamese syllable string, a pronunciation line or a bare line piece (`kw`, `uh`). Result: 64 of 84 checks and 113 of 140 mc items are target.

   Four items have distractors that would classify the other way. The exporter lists them, and none needs action:
   - `alphabet.04` `fohr?`, `syllables.01` `qem`, `syllables.03` `bank/`: deliberate non-words, rightly target;
   - `verbs.k1`: prose by its key; its options «đii» and «đã đang đi» stay in the native slots.

   **Hints are never split.** A hint is a mixed native field.
2. **Spans inside mixed native fields.** These are recorded in `target/vi/marks.jsonl`, one row per field: `{f, id, k, spans}` (`k` `o[2]` = option slot; `f` `body` = a lesson body). A span counts as marked when it is one of:
   - **in bodies only**:
     - `<b>…</b>` whose text is Vietnamese, recorded **with its tags**, so native bodies keep the mark;
     - the text of `<td class="k">` cells outside `(…)` glosses;
     - `<i>…</i>` holding a pronunciation line with a tone symbol, a hyphen or two chunks. Bare `<i>ah</i>` and `<i>her</i>` are not marked, because English words pass the pattern too.
   - **in every field**:
     - `X (line)` where the line is exactly `respell(X)` (`ăn (an)`, `sao (sahw)`). The line proves that X is Vietnamese, and both parts are marked.
     - every word of the **row's own target text**: a card note may quote its card; a why, hint or prompt may quote its item's answers, options or wrong typed answers.

     Not taken from the row's own text:
     - word pieces next to a blank (`__i`);
     - single letters without a diacritic;
     - 55 English homographs (`to`, `no`, `me`, `an`, `day` …; `EN_HOMOGRAPHS` in `lib.js`). These are needed because notes say "to means big. It has nothing to do with English to."

"Vietnamese" here is the course's own definition: a syllable is whatever `tools/target/vi/respell.js` can respell, and a line is whatever the profile's `pronPattern` accepts.

**Validator.** Every recorded span must occur in the native field, as a whole word, as often as recorded. Occurrences are counted without overlap, longest span first, so a bold «bàn» cannot hide inside «Bạn tôi bán bàn.». A missing or altered span is an error. `_waive: ["marks"]` (or the historical `["hangul"]`) downgrades it to a warning. The Han/Hangul run comparison is skipped for marks targets. Output line: `marks 1296 field(s), 3497 Vietnamese span(s) checked`.

**Not protected, by design:** Vietnamese outside every mark. Words with a diacritic are **reported**, not guessed. Words without one (`xe`, `da`) cannot be recognised at all.

## 2. Numbers

`target/vi/`:
- 31 decks, 893 cards (864 with notes), 6 groups;
- 147 dialogues, 256 examples, 18 patterns;
- 28 lessons with 224 example rows (221 sentences);
- 84 checks and 392 practice items;
- 11 in-lesson decks with 117 cards; 9 tile sets, no tile hints;
- check options: 256 target, 80 prose; mc options: 468 target, 92 prose; all 84 hints native;
- `marks.jsonl`: 1,296 fields, 3,497 spans.

`native/en/vi/`: 22 labels, 117 lesson-card rows, 9 `uiKeys`, 35,099 words (validator count).

Marks by field:

| Field | Fields | Spans |
|---|---|---|
| card notes | 680 | 1,189 |
| bodies | 28 | 830 |
| practice why | 362 | 842 |
| practice hints | 84 | 317 |
| check why | 64 | 180 |
| lesson-card notes | 47 | 94 |
| other | 31 | 45 |

## 3. Reported, not fixed: unmarked Vietnamese (`native/en/vi/unmarked.tsv`)

793 fields hold 1,391 words (counted once per field) with a Vietnamese diacritic outside every mark:

| Field | Fields with unmarked words |
|---|---|
| card notes | 524 |
| lesson-card notes | 47 |
| practice why | 45 |
| practice q | 26 |
| lesson titles | 22 |
| check q | 21 |
| check why | 21 |
| deck descriptions | 15 |
| practice o | 10 |
| lesson-card meanings | 8 |
| card meanings | 7 |
| lesson blurbs | 7 |
| check o | 7 |
| dialogue translations | 3 |
| example translations | 2 |
| practice hint | 1 |

Bodies have 27 such lines, all short lists:
- the tone names `huyền sắc hỏi ngã nặng` in plain `<td>`;
- words in `<h3>` headings and prose: `là`, `không phải`, `đã đang sẽ` …;
- `café` (a false hit).

Typical plain-field cases:
- a note's other example words (`ăn (an), to eat.` on card ă);
- titles such as `là: A is B, and không phải là`.

The en-vi source is unchanged. Any markup edit, even a "safe" `<b>`, changes the regenerated pack and would make `packs/course-en-vi.js` stale. The en-vi team should mark these, then run `export_target.js vi` again.

## 4. What a native writer for `<n>-vi` must know

- Keep every `<b>Vietnamese</b>` with its tags. Keep `td.k` cell text, pronunciation lines in `<i>`, `word (line)` pairs, and every Vietnamese word the row quotes from its own card or answers, exactly as written, including tone marks and capitals.
- Translate the English around them freely. Glosses in `(…)` inside `td.k` cells are yours.
- Unmarked Vietnamese (see `unmarked.tsv`) is not checked. Keep it anyway; the reviewer must compare it by eye.
- The pronunciation line is an **English-reader respelling** (`dtohy`, `er` "with no r"). A Spanish or French reader misreads it. The writer's early lessons must say how to read it, as en-ko's README does for Revised Romanization.
- `mk_native.js <n> --target vi` runs (tested in scratch: 4 balanced work files, 12 wU rows). Its README and `REPEATS.md` heading still speak of Chinese, Han and pinyin. Reword them before the first vi scaffold.

## 5. Open

- **Source marking** of the 793 fields above (en-vi team). Plain-text fields have no markup at all. A note can only be protected through the row's own text or a `word (line)` pair. A convention, or a per-row span list read by the exporter, would close the gap.
- **Engine, for a non-English learner of a Latin-script target** (step 5 not run):
  - the English respelling line;
  - "almost" credit for missing marks;
  - the `keys` accent bar;
  - Telex/VNI-like IMEs of the learner's own language;
  - `sayText` speaking `___` as English "something".
- **Spanish and French** can reuse the machinery:
  - `marks.jsonl`, `missingSpans`, the validator block;
  - per-item option classes, native hints, own-text spans.

  The classifier is the language-specific part. Spanish has no syllable grammar that tells `no`, `me` or `come` from English, and probably no deterministic respeller for `X (line)` pairs. So mc keys and `<b>` spans need an explicit source mark (or the course's own card list) as the test.
- **yue, and zh for Han-writing learners** (`x-yue-design.md` §6): the same machinery fits. Record the English half's Han runs as spans, require them in the native field, and do not count added Han.
- `docs/HALVES-SPEC.md` has no vi section yet. The selftest has 6 new vi cases; all pass, and only the known "export refuses moved positional ids" fails.
