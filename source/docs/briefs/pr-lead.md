PROGRESS (updated 2026-11-24)
Courses: en-espr (Puerto Rican Spanish for English speakers) and spr-en (English for Puerto Rican Spanish speakers)
Stage 1 (lead setup): DONE. Next: launch the ten writers (all at once: the two courses share no files), then each course's reviewer after its writers report and its merge check passes.
State: HOLD (`tools/target/espr/HOLD`; `course-en-espr.js` and `course-spr-en.js` in `packs/HELD.txt`)

# Lead note: Puerto Rican Spanish, stage 1

Decisions and their reasons: `docs/briefs/pr-decisions.md`. Style authorities: `docs/profiles/en-espr.md` (course A) and `docs/profiles/spr.md` (course B).

## What exists

| File | What it is |
|---|---|
| `src/app.html` | praise words `FLOURISH.espr` / `AGAIN.espr` = es; LANGS `espr` and `spr` (t:1; `spr` has `ui:'es'`), PR flag art, `hLang` → es-PR, `uiPk()` interface alias, locale calls through `hLang`, `preLang` es-PR → spr (live only), `voiceAlso` fallback in `pickVoice`, `audioFrom` / `clipDir()` for clips |
| `build.sh` | manifest alias for `ui:'…'` natives (the saved-`spr` loader path) |
| `tools/target/gen.js` | emits `voiceAlso` and `audioFrom` from profile.json (en-es output byte-identical) |
| `tools/target/espr/` | byte copy of `tools/target/es/` minus the `caribbean` lesson, the "Caribbean and Dominican Spanish" deck and its 5 extras rows; `profile.json` (29 lessons, 32 decks, es-PR, voiceAlso, audioFrom es, brand Puerto Rico); `HOLD`; `BASE.sha1` (es sources at copy time); `scan.js` (setting scan, exit 1 on FORBID terms); `fix_briefs_espr.py` |
| `tools/content/spr/` | byte copy of the es-en sources (no banner), with deck 22 renamed *Falsos amigos y spanglish* (decks.js, meta.js, the `false-friends` link); `profile.json` (native spr, reference es, lessonOrder with `spanglish`); empty `deviations.json`; `BASE.sha1`; `scan.js` (English-side setting + Spanish word swaps); `list_type.js` (typed-answer pass list); `fix_briefs_spr.py` |
| `docs/briefs/en-espr-{A,B,1,2,3,R}.md` | `tools/target/mk_briefs.py espr "Spanish (Puerto Rico)"`, then `tools/target/espr/fix_briefs_espr.py` (role scopes for a copy-and-localise course, ESPR RULES) |
| `docs/briefs/spr-{A,B,C,D,I,R}.md`, `docs/briefs/spr.json` | `tools/content/mk_briefs.py spr`, then `tools/content/spr/fix_briefs_spr.py` (the generator assumes a full translation; the fix keeps its first line and writes the adapt-only scope and SPR RULES) |
| `packs/HELD.txt` | + `course-en-espr.js`, `course-spr-en.js` |

Regenerate briefs (lead only): `python3 tools/target/mk_briefs.py espr "Spanish (Puerto Rico)" && python3 tools/target/espr/fix_briefs_espr.py` and `python3 tools/content/mk_briefs.py spr && python3 tools/content/spr/fix_briefs_spr.py`.

## Writer split and size

**Course A, en-espr** (files in `tools/target/espr/`):

| Role | Owns | Job | Size (stage-1 measure) |
|---|---|---|---|
| A | `decks-pr.js`, `extra-pr.js` (new) | 4 Puerto Rico decks (profile §9.2) | ~68 cards, 12+ dialogues, 8+ examples, 4 patterns: **new writing, the largest A job** |
| B | `decks-a/b/c/f/t1/t2.js`, `extra-a/b/c/f/t1/t2.js` | localise inherited decks (§9.1), Top interjections | ~73 cards (about half note-only), 14 dialogues, 19 examples, 2 patterns: **edits** |
| 1 | `lessons-pr.js` (new) | 4 new lessons (§8: pr-sounds, pr-greetings, pr-daily, pr-culture) | 4 bodies of 250–450 words, 56 practice items, 12 checks: **new writing** |
| 2 | `lessons-1.js`, `lessons-2.js` | overrides in 16 inherited lessons (§8 I+ (2)), incl. the pronoun and question-order changes | ~60 body passages, ~25 items: **edits** |
| 3 | `lessons-3.js` | overrides in 6 inherited lessons (§8 I+ (3)) | ~25 passages, ~15 items: **edits** |
| R | review | the diff against en-es + the new files in full | ~4 new lessons, ~70 new cards, ~150 edited rows |

At stage 1, `scan.js` shows 105 FORBID hits (Mexican setting in non-note text) and 40 rows to check. All must be 0 FORBID at merge.

**Course B, spr-en** (files in `tools/content/spr/`):

| Role | Owns | Job | Size |
|---|---|---|---|
| A | `decks.js`, `extra.js`, `meta.js`, `deviations.a.json` | 14 Spanglish cards in deck 22 (renamed by the lead), setting in *Presentarse*, word swaps | 14 new cards + 7 extras rows; ~40 Spanish rows to check; 2–4 deviations |
| B | `lessons.js`, `practice.js`, `deviations.b.json` | setting, word swaps, typed-answer pass (12 lessons) | ~12 deviations; ~45 typed items to read |
| C | `more/a1.js`, `deviations.c.json` | **new lesson `spanglish`** (spr.md §8.1 map), false-friends setting, typed pass (16 lessons) | 1 new lesson (~300 words, 14 items, 3 checks); ~6 deviations; ~50 typed items |
| D | `more/a2.js`, `more/b1.js`, `deviations.d.json` | word swaps, typed pass (14 lessons) | 2–4 deviations; ~45 typed items |
| I | `ui.json` (new) | Puerto Rican overrides of the es interface, only where needed | 0–30 keys |
| R | review | diff vs es-en, spanglish, cards, ui.json, all typed items | |

At stage 1, `scan.js` shows 41 English-side rows (most are travel destinations that stay) and 86 Spanish rows to check. `list_type.js` lists 127 type items, 37 heuristically flagged.

Sizes in words: course A ≈ 1,500 words of new lesson prose + ~70 new cards + ~150 edited rows; course B ≈ 300 words of new prose + 14 new cards + ~60 edited rows + a read-through of 127 typed items. Each course is about a third of a from-scratch course.

## Launch lines

Launch all ten writers at the same time. Each gets one line.

| Course | Role | Launch line |
|---|---|---|
| en-espr | A | `You are EN-ESPR-A. Read /home/claude/docs/briefs/en-espr-A.md in full and carry it out.` |
| en-espr | B | `You are EN-ESPR-B. Read /home/claude/docs/briefs/en-espr-B.md in full and carry it out.` |
| en-espr | 1 | `You are EN-ESPR-1. Read /home/claude/docs/briefs/en-espr-1.md in full and carry it out.` |
| en-espr | 2 | `You are EN-ESPR-2. Read /home/claude/docs/briefs/en-espr-2.md in full and carry it out.` |
| en-espr | 3 | `You are EN-ESPR-3. Read /home/claude/docs/briefs/en-espr-3.md in full and carry it out.` |
| spr-en | A | `You are SPR-CONTENT-A. Read /home/claude/docs/briefs/spr-A.md in full and carry it out.` |
| spr-en | B | `You are SPR-CONTENT-B. Read /home/claude/docs/briefs/spr-B.md in full and carry it out.` |
| spr-en | C | `You are SPR-CONTENT-C. Read /home/claude/docs/briefs/spr-C.md in full and carry it out.` |
| spr-en | D | `You are SPR-CONTENT-D. Read /home/claude/docs/briefs/spr-D.md in full and carry it out.` |
| spr-en | I | `You are SPR-INTERFACE. Read /home/claude/docs/briefs/spr-I.md in full and carry it out.` |

Before each reviewer:
1. en-espr: run the merge checks below with no `--partial`; `scan.js` must exit 0. Append the measured counts and the writers' open points to `en-espr-R.md`.
2. spr-en: run `python3 tools/content/merge_deviations.py spr`, then the checks below. Append the counts and open points to `spr-R.md`.

| Course | Role | Launch line |
|---|---|---|
| en-espr | R | `You are EN-ESPR-REVIEWER. Read /home/claude/docs/briefs/en-espr-R.md in full and carry it out.` |
| spr-en | R | `You are SPR-REVIEWER. Read /home/claude/docs/briefs/spr-R.md in full and carry it out.` |

## Check commands (from /home/claude)

```
S=/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/pr; mkdir -p $S
# course A
node tools/target/gen.js espr $S/espr.js && node tools/target/validate.js espr $S/espr.js --partial   # drop --partial at merge
node tools/target/espr/scan.js                       # exit 0 at merge (0 FORBID outside comparing notes); --all includes card notes
node tools/target/repron.js espr                     # at merge: prons regenerated from respell.js; a second run rewrites 0
for f in decks-a decks-b decks-c decks-f decks-t1 decks-t2 extra-a extra-b extra-c extra-f extra-t1 extra-t2 lessons-1 lessons-2 lessons-3; do diff tools/target/es/$f.js tools/target/espr/$f.js; done | less   # the layer
(cd tools/target/es && sha1sum -c ../espr/BASE.sha1)  # has en-es changed since the copy? port the fixes
# course B
node tools/content/gen.js spr $S/spr.js && node tools/content/validate.js spr $S/spr.js
node tools/content/parity.js spr $S/spr.js           # after merge_deviations.py
node tools/content/lint.js spr $S/spr.js && node tools/content/alphabet_check.js spr $S/spr.js
node tools/content/spr/scan.js $S/spr.js && node tools/content/spr/list_type.js $S/spr.js --flags
(cd tools/content/es && sha1sum -c ../spr/BASE.sha1)
# engine (lead)
./build.sh && node harness.js && node tools/tests/flagcheck.js && node tools/tests/voicetest.js && node tools/tests/nametest.js
```

Results at the end of stage 1:
- en-espr: gen 25 of 29 lessons, 28 of 32 decks, 909 cards; validate `--partial` PASS; scan 105 FORBID (expected before B/2/3).
- spr-en: validate PASS; parity PASS (0 deviations); lint 0 blocking; alphabet PASS.
- site build: `tools/site/lazy.js` 24 PASS; `ensureI18n('spr')` loads the es interface file.
- harness: before the edits the only failure was the known `lockedDisabled`; after them, and after the other agent's roadmap fix landed, the final run is HEALTH ✅ no errors, 122 guards pass. Other checks: flagcheck FLAGS OK, nametest NAME OK, voicetest VOICETEST OK, build verify_build OK.

## At release (not now)

- en-espr: remove `tools/target/espr/HOLD`. spr-en: generate `packs/course-spr-en.js`. Remove both HELD.txt lines in the same change that ships each course.
- Both LANGS entries stay `t:1`: a live course lists them anyway. No roadmap is needed. If one is wanted (packs/roadmaps.js, another agent's file), add `espr` there.
- Audio tools: `tools/audio/refresh.js` and `export.js` key by target and skip `espr` (no `audio/espr/`). The es manifest does not list en-espr sentences, so no clip is generated for them; `audioFrom` only reuses identical text. If Puerto Rican recordings are wanted, add an `espr` entry to `tools/audio/voices.json` and create `audio/espr/`.
- Run the release e2e: `node tools/content/e2e_en.js en-espr <ids>` and `node tools/content/e2e_en.js spr <ids>`.
- Check by hand at 390px: step 1 shows *Español (Puerto Rico)* next to *Español*; an es-PR browser lands on spr-en's interface; an en-espr card plays an en-es clip for an unchanged sentence and the device voice for a changed one.

## Not done, and why

- No course content (the writers' job).
- `tools/target/dialect.js` (the DIALECTS-PLAN layer) is not built: decisions §3.
- en-es itself was not changed. Its Caribbean lesson stays (DIALECTS-PLAN §2.3), and so does the "Spanish (Latin American)" name (owner).
- Not touched: git, lang-app/, tools/curriculum/ship.sh, tools/halves/, tools/hmong/, docs/roadmaps, packs/roadmaps.js.
