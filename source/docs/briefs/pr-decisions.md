# Puerto Rican Spanish courses: stage-1 decisions (2026-11-24)

Two courses, in the owner's order before Dominican Spanish:
- **A. `en-espr`**: Puerto Rican Spanish for English speakers. Profile `docs/profiles/en-espr.md`, sources `tools/target/espr/`.
- **B. `spr-en`**: English for Puerto Rican Spanish speakers. Profile `docs/profiles/spr.md`, sources `tools/content/spr/`.

Both are on hold: `tools/target/espr/HOLD`, and `course-en-espr.js` and `course-spr-en.js` in `packs/HELD.txt`. Lead note and launch lines: `docs/briefs/pr-lead.md`.

## 1. Codes

**Decision: target `espr`; native `spr` (option i, a 3-letter native code).**

The id checks, as found:

| Where | Check | `en-espr` | `espr-en` | `spr-en` |
|---|---|---|---|---|
| `src/app.html` `validCourse`, `courseStubs`, `META.course`, `storedCourseStates` (×2), `wipeOtherCourses`, progress import (7 places) | `^[a-z]{2,3}-[a-z]{2,4}$` | ok | **fails** | ok |
| `tools/audio/export.js`, `tools/audio/refresh.js`, `tools/release_report.js` | `[a-z]{2,3}-[a-z]{2,4}` | ok | **fails** | ok |
| `tools/target/lib.js` `check` | target `^[a-z]{2,4}$` | ok | — | — |
| `tools/content/lib.js` `LANG_RE`, `tools/i18n/i18nlib.py`, `tools/i18n/validate.js`, `tools/content/link_roadmap.py`, `tools/content/e2e_en.js` | native `^[a-z]{2,3}(-…)?$` | — | **fails** | ok |
| `tools/content/lint.js` | `^[a-z]{2,4}$` | ok | ok | ok |
| `tools/content/e2e_en.js` (en side) | `^en-[a-z]{2,4}$` | ok | — | — |
| `build.sh` loader | splits the browser language on `-`/`_`; no id check | — | — | — |
| `harness.js`, `tools/tests/*` | no id regex | — | — | — |

Widening the native side to 4 letters (option ii) means at least 14 regex edits in 10 files, some of them owned by other agents. It also needs a guard on every Intl call that receives the native code. `'a'.localeCompare('b','espr')` and `new Intl.DisplayNames(['espr'])` throw `RangeError: Incorrect locale information provided`: a 4-letter primary subtag is not a valid locale. Step 2 of the picker (`cmp`) and `dLoc()` pass the native code to Intl with no try/catch. A 3-letter code is a well-formed locale and passes every existing check unchanged, so option i is the smaller and safer change.

- **`espr`** follows the dialect convention of DIALECTS-PLAN §2.1 (base code + country): `ptpt`, `esdo`.
- **`spr` collides with ISO 639-3 `spr` (Saparua, a language of Maluku, Indonesia)** ([Wikipedia, ISO 639:s](https://en.wikipedia.org/wiki/ISO_639:s)). The code never reaches a browser, because `hLang('spr')` gives `es-PR` everywhere a language tag is written, and Saparua will not get a course. **Owner decision (q1):** keep `spr`, or use a private-use code (ISO 639 reserves `qaa`–`qtz` for local use, e.g. `qpr`), which cannot collide with anything. Renaming before any learner has progress costs one `sed` over the files listed in §6. After release it would orphan saved progress.
- Two codes for one variety is the price of option i. The two LANGS entries carry the same name, flag and Korean name. When `esdo-en` comes, it takes the same route (e.g. `sdo`, or `qdo`).

## 2. Engine (done; `src/app.html`, `build.sh`, `tools/target/gen.js`)

| Item | What was done |
|---|---|
| LANGS | `espr` and `spr`: name `Spanish (Puerto Rico)`, self `Español (Puerto Rico)`, Korean `푸에르토리코 스페인어`, flag 🇵🇷, both `t:1` (planned: hidden from "coming soon"; listed as soon as the course is live; no roadmap needed). `spr` also has `ui:'es'` |
| Flag art | `FLAG_ART.espr` and `.spr`, 40×30: five stripes red/white (#ed0000), blue triangle (#0050f0) to x=26, white five-point star at the triangle's centre. `flagcheck.js`: FLAGS OK |
| `hLang` | `espr`, `spr` → `es-PR` |
| Interface pack alias | New `uiPk(l)`: the interface pack a native language reads (`LANGS[l].ui`, else `l`). It is used in `i18nDict`, `setI18n` (and the `ENGINE_I18N` fallback), `rmT`, `preLang`, `i18nReady` and `ensureI18n`. The native code stays the identity, so `I18N.lang`, `COURSE.native` and the `COURSE.UI` override work unchanged. spr-en therefore reads `packs/i18n-es.js` plus its own `UI` overrides (`tools/content/spr/ui.json`, emitted by `gen.js`, as tl and ceb do) |
| `build.sh` | The site loader's manifest gets an alias entry for every LANGS entry with `ui:'…'` (read from `src/app.html`), so a saved `spr` learner loads the `es` interface file |
| Locales | `langName` (Intl.DisplayNames and the capitalisation), step-2 sorting and `dLoc` now pass `hLang(code)`. For every existing language `hLang` returns its own code, except `zh` → `zh-Hans`, which Intl treats as the same as `zh` |
| `preLang` | Browser `es-PR` → `spr`, but only when `spr` is a live native. While spr-en is held, es-PR stays on `es`. `es`, `es-MX`, `es-US` etc. are untouched |
| Voice | Pack field `voiceAlso` (`tools/target/gen.js` copies it from `profile.json`). `pickVoice`: an exact `ttsLang` voice, then each `voiceAlso` tag in order, then any voice of the language. en-espr: `es-PR` → `es-US` → `es-MX` → any `es-*`. No `voiceMatch`: a device with only es-ES still speaks. ptpt uses `voiceMatch` instead (a strict match, else a toast), because a Brazilian voice would be wrong there. A Mexican or US voice reading standard spelling is acceptable here (§3) |
| Recorded audio | **Not automatic before this change.** Clips are fetched from `audio/<target>/`, so `espr` would have played none. New pack field `audioFrom` (the course reads `audio/<code>/`; `clipDir()` keys VOX, the cache and the callback). en-espr has `audioFrom: "es"`. Clip names are `clipKey(sayText(text))`, a hash of the spoken text only, with no language or voice salt (`tools/audio/lib.js`, the same function). So an es clip plays only when the Puerto Rican text is character-identical, and anything else falls to the device voice. If Puerto Rican recordings are made later (`audio/espr/`), drop `audioFrom`, or extend `clipDir` to try both folders |
| Praise words | `FLOURISH` and `AGAIN` (end-screen praise in the target language) are keyed by target code; `espr` had no entry and fell back to the **Korean** words. Now `FLOURISH.espr=FLOURISH.es; AGAIN.espr=AGAIN.es`. A grep of `src/app.html` for other tables keyed by `es` or by `COURSE.target` / `COURSE.native` found only `HELLO`, `GREET_T`, `PAUSE_EXTRA` (ko/en only; packs supply their own greetings), `RTL_LANGS`, `FLAG_ART` and `LANGS` (all handled). `tools/audio/voices.json` has an `es` entry and no `espr`, which is right while `audioFrom` reuses es clips (`tools/audio/refresh.js` skips targets with no `audio/<code>/` folder). **Pre-existing, not fixed (other courses):** the other en-* targets without a FLOURISH entry (ptpt, yue, tl, ceb, nan, ur, pa, te, kn, bn, am, cs, da, nl, no, pl, sv, hmn) also show the Korean praise on the session-done panel (`FL('done')`) |
| Picker | The course name comes from the pack. Step 1 (sorted by self-name): `Español` · `Español (Puerto Rico)`, adjacent. Step 2 for English speakers: `Spanish (Latin American)` · `Spanish (Puerto Rico)`, adjacent, as `Portuguese (Brazilian)` · `Portuguese (Portugal)`. zh and yue are separate languages with unrelated names, so pt/ptpt is the model. Checked in a scratch run with both packs injected |

Picker caveat (owner, q7): step 2 lists courses whose native is the chosen language, so a learner who picks *Español (Puerto Rico)* is offered only English (spr-en), while *Español* also offers es-ko. That follows from one native code per course. If Puerto Rican learners should also see es-ko, step 2 would need to list the courses of a `ui` alias too (a few lines).

Checks after the edits (final run: harness HEALTH ✅ no errors, 122 guards pass, once the other agent's roadmap fix landed): `node harness.js` first gave the same result as before, with the one known failure `lockedDisabled` (the six planned languages without a roadmap; another agent's fix) and every other check identical. `flagcheck.js` FLAGS OK; `nametest.js` NAME OK; `voicetest.js` VOICETEST OK; `./build.sh` verify_build OK; `tools/target/gen.js es` is byte-identical to the live `packs/course-en-es.js`. A scratch Playwright run with locale es-PR and both scratch packs injected gave:
- `uiPk('spr')` = es; `preLang()` = es while held and spr once live;
- spr-en: `uiLang` spr, `<html lang>` es-PR, `LL('Correct')` = Correcto, `langName('en')` = Inglés, `dLoc` es-PR;
- en-espr: `clipDir` = es, `ttsLang` es-PR;
- voices: es-ES + es-MX + es_US → es_US; es-ES + es-MX → es-MX; es-ES only → es-ES;
- no page errors.

The site build (lazy packs) was tested separately. With an en-US browser, `ensureI18n('spr')` resolved true and fetched exactly one file, the es interface file; the manifest maps `spr` to the same hashed file as `es`. `tools/site/lazy.js`: 24 PASS, 0 FAIL. An empty `tools/content/spr/ui.json` (`{}`) generates a valid pack (`UI: {}`, validate PASS).

## 3. Course A base: copy of en-es, not a dialect layer

**Decision: `tools/target/espr/` is a byte copy of `tools/target/es/`. Writers edit only the rows that differ for Puerto Rico and add four Puerto Rico lessons and four decks in new files.**

- DIALECTS-PLAN §1.1 recommends a layer (`tools/dialects/<code>/` + `tools/target/dialect.js`) when more than ~60% is shared. Measured here: 836 of 909 inherited cards (92%) have no regional word at all. So the plan's own rule says layer, **but `dialect.js` does not exist** (about 300 lines, plus the `build.sh --check` step). Building it is not stage-1 work, and it would delay both courses.
- The copy gives the same reading cost now: every inherited row is byte-identical until a writer changes it, so `diff -r tools/target/es tools/target/espr` **is** the layer. `tools/target/espr/BASE.sha1` records the SHA-1 of every es source at copy time, so a later fix to en-es can be found and ported (`sha1sum -c` from `tools/target/es`).
- The cost is drift: a fix in en-es does not reach en-espr by itself. **Owner decision (q2):** accept the copy now and convert to the layer when `dialect.js` is built for esdo. The conversion is mechanical, a diff against the BASE.sha1 versions.
- The scaffold removed only what gen.js would reject: the `caribbean` lesson (lessons-3.js), the "Caribbean and Dominican Spanish" deck (decks-b.js) and its 3 dialogues and 2 examples (extra-b.js). The `pron` generator (`respell.js`) is byte-identical, so every inherited pron stays valid and new prons match.
- Deck descriptions: two base descriptions that named Mexico (Food and drink, Numbers) were localised in `profile.json`.

## 4. Course B base: copy of es-en, parity-checked against it

**Decision: `tools/content/spr/` is a byte copy of the es-en sources, with `profile.json` `reference: "es"` and an empty `deviations.json`.** The copy keeps es's text and has no TRANSLATE banner. `new_lang.js --from es` was not used: its banner tells writers to rewrite every Spanish string, and `setup_es_based.py` scaffolds a full interface dictionary. Both are wrong here. `parity.js spr` compares the English side with es-en: as scaffolded, 0 differences. Every intended English change (localisation, typed-answer fixes, the new lesson and cards) is declared in writer fragments `deviations.<part>.json`. The lead already renamed deck 22 to *Falsos amigos y spanglish* (native side only, no deviation; validate and parity PASS after it). `tools/content/spr/BASE.sha1` records the es sources.

**Interface: no second dictionary.** spr-en reads `packs/i18n-es.js` (the `ui:'es'` alias) plus `tools/content/spr/ui.json`, a flat `{English key: Puerto Rican wording}` file that `tools/content/gen.js` emits as the pack's `UI` (the tl/ceb mechanism). It holds only keys where es wording is wrong or unnatural in Puerto Rico. The file does not exist yet, so the course runs on plain es until role I writes it.

## 5. Policy decisions in the profiles

- **en-espr** (`docs/profiles/en-espr.md`): the model is educated, informal San Juan-area speech. *Tú* is the default, *usted* for elders, strangers and service; no *vosotros*. Standard spelling in everything a learner types. The `pron` line stays the en-es careful respelling: the device voice is es-US or es-MX, and §3 forbids non-standard spelling in answers. Puerto Rican sounds (breath *s*, *r* → *l*, velar *rr*, *-ao*, *pa'*) are taught for recognition in `pr-sounds` and the "Puerto Rican sounds" deck. Island words replace a base card only where Puerto Ricans have their own everyday word (*la guagua*, *la china*, *los mahones*, *los espejuelos*, *el zafacón*); prices are in dollars, with *pesos* and *chavos* taught as the colloquial words. Anglicisms and code-switching are taught respectfully, as part of the variety. 29 lessons (25 inherited, 4 new), 32 decks (28 inherited, 4 new).
- **spr-en** (`docs/profiles/spr.md`): base es-en. Additions: the Puerto Rican setting (San Juan, Ponce, Mayagüez, Bayamón, Orlando, New York, dollars, *carro*, *guagua*), one new lesson `spanglish` (Spanglish → standard English) after `false-friends`, about 12 Spanglish cards added to the false-friends deck (renamed *Falsos amigos y spanglish*), and a typed-answer pass. Neutral on status politics: never "country", "state", "colony" or "territory" in content; "la isla" and "Puerto Rico".

## 6. Files

Created: `docs/briefs/pr-decisions.md` (this), `docs/briefs/pr-lead.md`, `docs/profiles/en-espr.md`, `docs/profiles/spr.md`, `docs/briefs/spr.json`, `docs/briefs/en-espr-{A,B,1,2,3,R}.md`, `docs/briefs/spr-{A,B,C,D,I,R}.md`; `tools/target/espr/` (copy + `profile.json`, `HOLD`, `BASE.sha1`, `scan.js`, `fix_briefs_espr.py`); `tools/content/spr/` (copy + `profile.json`, `deviations.json`, `BASE.sha1`, `list_type.js`, `scan.js`, `fix_briefs_spr.py`).
Edited: `src/app.html`, `build.sh`, `tools/target/gen.js`, `packs/HELD.txt`.

## 7. For the owner

1. `spr` collides with ISO 639-3 Saparua (harmless in the app). Keep it, or switch to private-use `qpr` before release (§1).
2. Copy now, layer later (§3).
3. Brand word on the share card: `Puerto Rico` (en-es uses `Español`, ptpt `Portugal`). Change it in `tools/target/espr/profile.json` if you want *Boricua*.
4. DIALECTS-PLAN proposes renaming en-es to "Spanish (Mexico)". Not done. The picker now shows "Spanish (Latin American)" next to "Spanish (Puerto Rico)".
5. en-es keeps its Caribbean lesson and deck (Dominican content), as DIALECTS-PLAN §2.3 recommends until esdo exists.
6. Step 2 for a Puerto Rican native shows only English (§2, q7).
7. Pre-existing: en-* targets without praise words show Korean praise (§2, Praise words).
8. The review list at the end of each profile: the Puerto Rican words and claims a native speaker should confirm first.
