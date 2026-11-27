PROGRESS (updated 2026-11-27)
Course: sdo-en (English for Dominican Spanish speakers). Stage 1 (lead setup): DONE. Next: launch the five writers (A, B, C, D, I) at once; after they report, merge the fragments, run the checks, then launch the reviewer.

# Lead note: sdo-en, stage 1

Built the way spr-en was (`docs/briefs/pr-lead.md`, `docs/briefs/pr-decisions.md` §4): a byte copy of es-en, parity-checked against it, with declared deviations only. Style authority: `docs/profiles/sdo.md`.

## What exists

| File | What it is |
|---|---|
| `tools/content/sdo/` | byte copy of the es-en sources as of 2026-11-27 (`decks.js extra.js lessons.js meta.js practice.js more/a1.js more/a2.js more/b1.js`), alphabet tiles and spelling-patterns section included; deck 22 renamed *Falsos amigos y dominicanismos* (decks.js line 485, meta.js lines 10, 19, 44, the `false-friends` deck link in more/a1.js) |
| `tools/content/sdo/profile.json` | native `sdo`, reference `es`, nativeNameEn "Dominican Spanish", name {en: English, sdo: inglés}, lessonOrder with `dominicanismos` after `false-friends` |
| `tools/content/sdo/deviations.json` | empty: `lessons`, `items`, `decks`, `extraLessons`, `droppedLessons` (the shape `merge_deviations.py` needs) |
| `tools/content/sdo/BASE.sha1` | sha1 of each es source at copy time |
| `tools/content/sdo/scan.js` | setting scan: EN rows (non-Dominican home), es rows (word swaps), FORBID rows (Mexico/Spain-only words); `--strict` exits 1 on FORBID (merge) |
| `tools/content/sdo/list_type.js` | typed-answer pass list (spr's, renamed) |
| `tools/content/sdo/fix_briefs_sdo.py` | rewrites the generated briefs for a copy-and-adapt course |
| `docs/profiles/sdo.md` | course profile |
| `docs/briefs/sdo.json`, `docs/briefs/sdo-{A,B,C,D,I,R}.md` | `python3 tools/content/mk_briefs.py sdo && python3 tools/content/sdo/fix_briefs_sdo.py` |
| `packs/HELD.txt` | + `course-sdo-en.js` |

## Writer split and size (stage-1 measure)

Whole course: `scan.js` 39 English-side rows (about 20 to change; the rest are travel), 87 Spanish rows to check, 1 FORBID row; `list_type.js` 127 type items, 37 flagged.

| Role | Owns | Job | Size |
|---|---|---|---|
| A | `decks.js`, `extra.js`, `meta.js`, `deviations.a.json` | 14 new cards in deck 22, deck 22 DESC, setting in *Presentarse* and 2 dialogues, word swaps | 14 cards + 7 extras rows; 4 EN rows; 14 es rows; 1 FORBID |
| B | `lessons.js`, `practice.js`, `deviations.b.json` | setting, word swaps, typed pass (12 lessons), 2 pron sentences | 9 EN rows (6 to change); 15 es rows; 36 typed (8 flagged) |
| C | `more/a1.js`, `deviations.c.json` | **new lesson `dominicanismos`** (sdo.md §8.1), setting, typed pass (16 lessons) | 1 lesson (~300 words, 14 items, 3 checks); 12 EN rows (~9 to change); 32 es rows; 49 typed (17 flagged) |
| D | `more/a2.js`, `more/b1.js`, `deviations.d.json` | setting, word swaps, typed pass (14 lessons) | 14 EN rows (1 to change); 22 es rows; 42 typed (12 flagged) |
| I | `ui.json` (new) | Dominican overrides of the es interface | expected `{}` |
| R | review | diff vs es-en, the new lesson and cards, ui.json, all typed items | about 300 words new prose + 14 cards + ~60 edited rows + 127 typed items |

## Launch lines

Launch A, B, C, D, I at the same time (they share no files).

| Role | Launch line |
|---|---|
| A | `You are SDO-CONTENT-A. Read /home/claude/docs/briefs/sdo-A.md in full and carry it out.` |
| B | `You are SDO-CONTENT-B. Read /home/claude/docs/briefs/sdo-B.md in full and carry it out.` |
| C | `You are SDO-CONTENT-C. Read /home/claude/docs/briefs/sdo-C.md in full and carry it out.` |
| D | `You are SDO-CONTENT-D. Read /home/claude/docs/briefs/sdo-D.md in full and carry it out.` |
| I | `You are SDO-INTERFACE. Read /home/claude/docs/briefs/sdo-I.md in full and carry it out.` |

Before the reviewer: `python3 tools/content/merge_deviations.py sdo`, then the checks below (scan with `--strict`). Append the counts and the writers' open points to `sdo-R.md`.

| Role | Launch line |
|---|---|
| R | `You are SDO-REVIEWER. Read /home/claude/docs/briefs/sdo-R.md in full and carry it out.` |

## Check commands (from /home/claude)

```
S=/tmp/claude-0/-home-user/e9e33493-d3f5-5df2-beaa-87fc06e637b6/scratchpad/sdo-lead; mkdir -p $S
node tools/content/gen.js sdo $S/sdo.js && node tools/content/validate.js sdo $S/sdo.js && node tools/content/parity.js sdo $S/sdo.js && node tools/content/lint.js sdo $S/sdo.js && node tools/content/alphabet_check.js sdo $S/sdo.js && node tools/content/sdo/scan.js $S/sdo.js; node tools/content/sdo/list_type.js $S/sdo.js --flags | tail -3
node tools/content/sdo/scan.js $S/sdo.js --strict     # at merge: 0 FORBID
(cd tools/content/es && sha1sum -c ../sdo/BASE.sha1)  # has es-en changed since the copy? port the fixes
```

Results at the end of stage 1 (untouched copy):
- gen: 42 lessons, 26 decks (deck 22 *Falsos amigos y dominicanismos*, 23 cards)
- validate: PASS all checks OK
- parity: PASS (42/42 lessons, 26/26 decks, 506 cards, 589 practice items; 0 deviations)
- lint: 0 blocking (22 meaning variants, info)
- alphabet: PASS (lesson 1, deck 21, 26 cards)
- scan: 39 EN, 87 es, 1 FORBID
- list_type: 127 type items, 37 flagged

## For the dispatcher (engine, not done here)

- LANGS `sdo` with `ui:'es'` (done by the dispatcher). Check `hLang` / locale for `sdo` (es-DO) and `preLang` es-DO → sdo, as spr has es-PR.
- `uiPk()` alias and `ensureI18n('sdo')` loading the es interface file: verify as for spr.
- At release: generate `packs/course-sdo-en.js`, remove its HELD.txt line, run `node tools/content/e2e_en.js sdo <ids>`.
