# vi-zh design: a Mandarin target half, and native halves in any language

Status: stage 1 done (2026-11-24). The tooling is built and tested. `tools/halves/target/zh/` is exported and proven, and the Vietnamese scaffold `tools/halves/native/vi/zh/work/` is ready for four writers. No Vietnamese course text has been written yet.

Related documents:
- the format of the two halves: `docs/HALVES-SPEC.md` (§11 points here);
- the writers' authority: `docs/profiles/vi-zh.md`;
- the briefs: `docs/briefs/vi-zh-writer.md`, `vi-zh-review.md`, `vi-zh-lead.md`.

## 1. The decision in five lines

1. **Chinese gets the Korean model.** There is one language-neutral target half, `tools/halves/target/zh/`, with permanent ids (`zh.c0001`, `zh.s0001`, en-zh lesson ids …). Every learner language adds a native half `native/<n>/zh/`, and `assemble.js` joins the two into an ordinary pack.
2. **The exporter has two sources and one format.**
   - en-ko lives in `src/app.html`, so `export_ko.js` still reads it in a real page. It is unchanged; `export_target.js ko` simply runs it.
   - en-zh lives in `tools/target/zh/`. `export_target.js zh` regenerates the pack with `tools/target/gen.js zh` into a temp file, loads it, and splits it.
   - It refuses any pack field or practice field it has not mapped.
3. **One table in `lib.js` describes each target.** `TARGETS` gives the field that holds the target text (`ko` / `zh`), the protected script (Hangul / Han), and the classifier that tells a target option or hint from prose (Han with no Latin letters, or pinyin). The exporter, `mk_native.js` and `validate.js` all use it.
4. **The tools take a target argument, and Korean behaves exactly as before.**
   - `mk_native.js <n> --target zh`;
   - `assemble.js <n> zh`, `validate.js <n> zh`;
   - `proof.js zh`, a pure-data proof against the en-zh pack;
   - `mk_native.js <n>` still means Korean.
   - Every Korean pack assembles byte-identically (§7).
5. **Vietnamese gets Hán Việt as checked data.** Card rows carry `hv` / `hvUse` / `trad`. The validator checks their form, one syllable per character, the note quoting the reading, and the consistency of readings across cards. It cannot check whether a reading is right: no Unihan or Hán Việt dictionary is reachable from this environment. That stays a writer and reviewer duty, done by web search.

## 2. The target half `target/zh`

Same files as `target/ko`: `decks cards dialog examples patterns sentences lessons checks practice .jsonl` + `course.json`. There is no `trainer.json`: en-zh has no trainers.

**Ids** (assigned once, reused on re-export by content, as in HALVES-SPEC §2):

| Kind | Id | Key for reuse |
|---|---|---|
| deck | `zh.d.<slug of the English label>` | |
| card | `zh.c0001`… (886) | Chinese text |
| dialogue | `zh.g001`… (127) | card |
| example | `zh.e001`… (287) | card |
| pattern | `zh.p001`… (28) | Chinese + example |
| lesson example row | `zh.s0001`… (231) | Chinese + pinyin + English gloss |
| lesson | the en-zh id (`pinyin`, `le` …) | the roadmap links on it |
| check / practice | `<lesson>.k<n>` / `<lesson>.<nn>` | positional; refused on change without `--accept-moved` |
| group / title / greeting | `zh.grp.<slug>` / `zh.t01` / `zh.h.night` … | |

Rows hold the Chinese in the field **`zh`** (Korean: `ko`). The pinyin goes in `rom`, as Korean keeps its romanisation there.

**Where en-zh differs from en-ko, and how the half records it:**

| en-zh pack | Target half | Assembly |
|---|---|---|
| `accents`, `keys`, `tilesDefault` (accent bar, tiles by default) | `course.json` `pack: {…}`, copied verbatim | spread into the pack |
| `features` all false | `course.json` `features` | copied (`CF()` is `features[f]` for a non-Korean target) |
| `TITLES` `[lv, "Beginner", ""]` (no Chinese titles) | `titles: [{id, level}]`, with the text as a native label | `[lv, native, ""]`, the en-zh shape (`setCourseTables`: "other learners get [level, English, their translation or nothing]") |
| `GREET` `[zh, gloss]` (no pinyin) | `greet: [{id, zh}]`, gloss as a label | `[zh, gloss]` (`greet()` returns `[x[0],x[1]]` when the pack has `GREET`) |
| `PATTERNS[3]` = the example's translation, not a lesson id (HALVES-SPEC §8.3) | native `patterns.tr` | `[zh, meaning, ex, lesson ?? tr]` |
| practice `strict` (no "almost") and `xr` (romanised wrong options from `gen.js` `pronAnswers`) | target-side | copied |
| practice `a` already holds the generated pinyin answers | target-side | copied |
| no GOALS / PLAN_PRESETS / PAIRS / PAUSE content | empty arrays | `{}` / `[]` as en-zh |

`course.json` also lists **`uiKeys`**: the 9 interface strings a non-English half overrides for Chinese (§6).

**Sizes:**
- 31 decks, 886 cards (813 with notes), 6 groups;
- 127 dialogues, 287 examples, 28 patterns;
- 28 lessons with 238 example rows (231 distinct sentences);
- 84 checks and 392 practice items;
- 11 labels.

**Option split** (shared classifier):

| | Target-side | Prose |
|---|---|---|
| Check options | 170 | 166 |
| mc options | 503 | 57 |

Pinyin options (`bù shì`), bare initials (`q`) and pure-Chinese options are target-side. Strings like `bú, rising` and `第一 (first)` are prose. Hints: 42 are pure Chinese (target), 23 are split "Chinese · note", and 19 are prose.

The English source column is 26,684 words.

**Source issue found** (not fixed: `tools/target/zh/` is the en-zh team's): en-zh has the pattern `["我在___工作。","I work at ___.","我在医院工作。","I work at a hospital."]` **twice**, as `zh.p018` and `zh.p022`. The allocator gives each occurrence its own stable id.

## 3. Proof

`node tools/halves/proof.js zh` regenerates en-zh from `tools/target/zh/`, assembles `en` + `zh`, and deep-compares every top-level key.
- Only `standard` and `UI` may be extra; DECKS key order counts.
- Result: **0 differences, 0 missing rows**. `packs/course-en-zh.js` is byte-identical to the regenerated pack.
- Re-exporting twice leaves `target/zh` and `native/en/zh` unchanged.

## 4. Tool changes (all in `tools/halves/`)

| File | Change |
|---|---|
| `lib.js` | `TARGETS` (`ko`, `zh`), `target(t)`, `splitLead(t,s)`, `isPinyin` (the en-zh `pronPattern` + every word tone-marked or a known toneless syllable), `isChineseValue`, `hasHan`, `HAN_RX`. The Korean helpers are untouched. |
| `export_target.js` (new) | `zh`: generic pack → halves exporter with the guards above. `ko`: runs `export_ko.js` unchanged. Options `--accept-moved`, `HALVES_DIR`, `HALVES_PACK`. |
| `assemble.js` | Reads the target field from `TARGETS`. Handles the title / greeting / pattern shapes (§2). Adds the pack flags and features of non-Korean targets by conditional spread, so Korean key order cannot move. Korean trainer logic is unchanged. |
| `validate.js` | Protected runs per target (Hangul / Han); the zh additions (§5); `uiKeys` from the trainer mirror (ko) or `course.json` (zh); `readings` allowed in native `course.json`; `--all` prints every error and warning (default: the first 200 / 60). Korean output is identical (§7). |
| `mk_native.js` | `--target <t>` (default `ko`) and `--readings none`. For vi + zh it adds the Hán Việt rows (`hvUse` / `hv` / `trad`; plus an empty-`src` `note` row on the 71 Hán Việt cards whose English note is empty, so a `same` / `shifted` reading has a note to live in) and writes `readings: "hanviet"`. For a non-Korean target it also writes `wU.jsonl` (interface strings, merged into `ui.json`), `REPEATS.md` (157 Chinese strings glossed in more than one place, with the owning writer), one `NOTES-wN.md` per writer (parallel writers never share a file), and a README written for zh. The split is the same linear partition by words, with a Hán Việt decision weighing 6 words. |
| `proof.js` | `proof.js zh` = pure-data proof (§3). `proof.js` with no argument is the Korean browser proof, unchanged. |
| `dryrun.js` (new) | `dryrun.js <n> <t> <wN>`: a writer's self-check. It copies the halves to a temp dir, merges there, validates with `--all`, and prints only that writer's errors, warnings and empty rows (w1 includes `wU.jsonl`). The real half is never touched. |
| `selftest.js` | 23 new zh checks (§8), 59 in all. All Korean cases unchanged. |

**CLI** (run from `/home/claude`):
```
node tools/halves/export_target.js zh          # only when tools/target/zh changes; ids stay stable
node tools/halves/proof.js zh                  # 0 differences
node tools/halves/mk_native.js vi --target zh  # done: native/vi/zh/work/
node tools/halves/mk_native.js vi --target zh --merge
node tools/halves/validate.js vi zh
node tools/halves/assemble.js vi zh packs/course-vi-zh.js
node tools/halves/selftest.js
```

## 5. Native half rules that are new for Chinese

**Protected runs = Han characters.** Every Han run of the English string must stay. A missing run is an error.

Added runs are handled by field:

| Where | Added Han |
|---|---|
| card `note` | only the card's own characters (to pair each with its syllable) and runs inside the row's own `trad` |
| lesson body, deck `desc`, pattern `meaning`, `why` | warning, listed for the reviewer |
| prompts, options, glosses, translations | error: it would change the task |

`_waive: ["hangul"]` still downgrades an error to a warning. The name is historical; it covers the target's script.

**Other checks:**
- **Pinyin:** a warning when a pinyin word with ¯ or ˇ from the English is missing. Vietnamese never writes those marks, so the check cannot hit Vietnamese words.
- **`|`** is banned in example glosses: `{{ex:zh|pinyin|gloss}}` is pipe-delimited.

**Hán Việt** (native `course.json` `"readings": "hanviet"`; extra card fields that assembly ignores):
- **`hvUse`** = `same` | `shifted` | `none` | `skip`. It is required on every card that is 1–4 Han characters with nothing else: 641 cards.
- **`hv`**: one Vietnamese syllable per character, NFC, letters and tone marks only. Required unless `skip`.
  - With `same` / `shifted` the card note must contain it.
  - It is the **Hán Việt** reading (恩 = `ân`), never the vernacular `ơn` (Wiktionary 恩: Hán Việt *ân*, Nôm *ơn*).
- **`trad`**: Traditional form, character for character. A warning if it equals the Simplified form.
- **Consistency:** a character read two ways across cards is a **warning** (行 hành / hàng is legitimate), never an error, and never blocks assembly.
- The validator prints `Hán Việt N of 641 required cards decided, … character(s) read two ways`.

## 6. Interface: what `ui.json` must override in vi-zh (work file `wU.jsonl`, w1)

The Vietnamese dictionary `tools/i18n/vi/ui.json` was written for vi-en. In a zh course, I checked by function which of its strings actually show and which still name English or Korean.

**Must override:** the 12 rows in `native/vi/zh/work/wU.jsonl`.

| Key | Where it shows | Today |
|---|---|---|
| `Chinese (required)` | add-card form (`applyCourseUi`: `setU($('acKo'),'placeholder',bi?null:tn+' (required)')`, `tn` = English name) | **English**: the dictionary has `English (required)` but no pattern |
| `Chinese, pronunciation, meaning, note — one per line (pronunciation/note optional)` | bulk add (same function, `bulkTxt`) | **English** |
| `Search a pattern, e.g. 에서 or 'want'` | grammar index (`renderGrammar`: `placeholder="Search a pattern, e.g. 에서 or 'want'"`) | «ví dụ at hoặc 'want'»: a **Korean** example in a Chinese course. Write a Chinese example (了) and a Vietnamese word |
| `#sounds-and-script` `#first-steps` `#everyday-words` `#out-and-about` `#conversation` `#core-words` | tag chips (`function tagL(x){ return i18nT('#'+x); }`) | **English** slugs. Follow vi-ko's style (`#henho`): lowercase, no diacritics, no spaces |
| `Report a problem on this page`, `Count my visits anonymously`, `Play` | every course: bug button, settings, speaker `aria-label` | missing from the vi dictionary. Reuse vi-ko's values, prefilled as `ref` |

**Not needed** (gated, so they never show in vi-zh):
- `Korean starter`, `Read 한→en` / `Recall en→한` / `⌨️ Type 한`: built-in only. Non-built-in courses get `quizModesHtml()` (`Đọc ZH→VI`).
- `type it in Hangul`, `Type the Korean…`, `Hangul drill`, `Can you already read Hangul?`, `How a block is built`: only with `CF('script')`.
- `Romanization (auto if blank)`: only with `CF('pron')`.
- `Learning Korean 5 minutes a day…`: built-in only. Packs use the pattern `Learning {x} 5 minutes a day with Lang App {x}`, which the dictionary has.

**Dynamic strings already covered** by dictionary patterns: `type it in {x}`, `Type the {x}, or tap Check again…`, `Learn {x}, 5 minutes a day`, `{x} progress`. The smoke test shows «gõ câu trả lời · Tiếng Trung».

**Optional:** `Show pronunciation hints in practice` / `Blur pronunciation hints in Browse` say *phiên âm*, which is right for pinyin. Override only if the profile wants the word *pinyin*.

## 7. Korean regression

**Method:**
1. Before any change, I copied `packs/course-*-ko.js`, the original `tools/halves/*.js` and a snapshot of all halves to the session scratch folder.
2. On the frozen snapshot, I ran the old code against the new code for every native half that has a `course.json`. A half other agents are still writing cannot drift mid-test this way.
3. I compared the new output with the saved packs.

| Group | Halves | `assemble.js` old vs new | vs `packs/` |
|---|---|---|---|
| Complete, shipped | ceb, es, hi, id, ja, mr, th, tl, vi, yue, zh (11) | **byte-identical** | **byte-identical** |
| In progress (rows missing) | bn, kn, pa, te, ur (5) | both refuse with the **same** error | — |
| Reference | en (built-in, no pack) | byte-identical | — |

**Other checks:**
- `validate.js <n> ko`: the output is identical, old vs new, for all 17 halves (header path aside).
- `node tools/halves/selftest.js`: all 59 self-tests pass (the 36 Korean checks as before, plus 23 zh).

## 8. Tests added to `selftest.js`

**The scaffold round trip:** a fake Vietnamese half of the Chinese course goes through `mk_native --target zh` (with the Hán Việt and ui rows), `--merge`, `validate` and `assemble`. The assembled pack must carry the en-zh flags, `[lv, native, '']` titles, `[zh, gloss]` greetings, features off, `UI` from `wU.jsonl`, and `standard`.

**Each mutation below must be reported:**
- a Han run dropped from a note or a body;
- Chinese added to a dialogue translation;
- a Traditional form in a note without `trad`, while one that matches `trad` passes;
- a character the card does not have printed in its note (a note-less card that takes `same` through its empty-`src` note row passes);
- `hv` with the wrong syllable count, or not a Vietnamese syllable;
- a bad `hvUse`;
- `same` with the reading missing from the note;
- a card left undecided;
- `trad` of the wrong length;
- a pinyin option slot overwritten;
- `|` in a gloss.

**And:**
- Chinese added to a body only warns;
- a character read two ways only warns;
- `proof.js zh` passes clean and catches an altered card;
- `export_target.js zh` refuses moved positional ids;
- `dryrun.js` shows a writer only their own errors and leaves the half untouched.

## 9. Engine (`src/app.html`): what a zh pack with a non-English native gets

I read the engine and ran a headless smoke test. A fake-filled vi-zh pack, with `packs/i18n-vi.js`, went through `validCourse`, `applyCourse` and every tab route. It ran with **no page errors**:
- `cleanLessonHTML` changed 0 bodies;
- `cleanPractice` kept 392 of 392 items;
- 9 `{{ex}}` rows expanded in lesson 1;
- UI overrides applied, interface language `vi`.

| Area | Finding (function · snippet) | Change needed |
|---|---|---|
| Typed answers | `function isZh(){ return !!COURSE&&COURSE.target==='zh'; }`: characters or pinyin, tone numbers, `v` for ü, `strict` / `xr` honoured. Keyed on the target only. | none |
| Pinyin line | card `c[1]` is shown as for en-zh. `features.pron` is false, so there is no auto-romanisation for user cards, as in en-zh. | none |
| Tone colouring | none exists in the engine | none |
| Text-to-speech | `ttsLang` from the pack (`zh-CN`); `voiceMatch` absent, as in en-zh | none |
| Recorded audio | `loadClips()`: `CLIPS_DIR='audio/'+t+'/…'`, the clip name = hash of the spoken text. Every spoken string is target-side and byte-identical to en-zh (proof §3), so the `audio/zh/` clips are reused automatically. Confirm with `node tools/audio/export.js vi-zh` once the pack exists: no new clip is expected. | none |
| Greeting / titles | `greet()`: `if(COURSE.GREET||COURSE.native==='ko') return [x[0],x[1]]`; `TITLES=arr(c.TITLES).length?c.TITLES:…` | none |
| `native==='en'` | Only `uiKo` (built-in only), the lock-toast language, `greet()`'s fallback for packs **without** GREET, and the search "no match" line (already `COURSE.native!=='en'`). None affects vi-zh. | none |
| Feature flags | `CF()`: `if(c.target!=='ko') return true;` after `features[f]`. All false, as en-zh. | none |
| Roadmap | `roadmaps.js` `zh` items carry the live lesson id in the 4th field. The ids are identical, so the links hold. `tools/i18n/vi/roadmap.json` already translates the zh roadmap. | none |
| Quiz mode chips | `quizModesHtml()` → `Đọc ZH→VI`, `Nhớ lại VI→ZH`, `⌨️ Gõ ZH` | none |
| Course registration | `validCourse()` needs `LANGS.vi` and `LANGS.zh`: both exist. `courseStubs()` / `liveNatives()` list it like any pack once it leaves `HELD.txt`. | none |
| Grammar search placeholder | static `e.g. 에서` (Korean) in every course, en-zh included | **optional engine change**: a per-course placeholder. vi-zh avoids it with a `ui.json` override (§6). |
| Spoken blanks | `sayText()`: `replace(/_+/g,COURSE.target==='ko'?' 아무개 ':' something ')`. A Chinese pattern with `___` is spoken with English "something". This affects en-zh too. | **optional engine change** in `sayText`: speak nothing (or a target word) for non-ko |
| Vietnamese keyboards | With Telex or VNI on, pinyin typing is rewritten. VNI turns `ni3` into `nỉ` (VNI 3 = hỏi) and `ni1` into `ní` (read as tone 2). Telex turns `nar` into `nả` and `ow` into `ơ`. `zhNorm('nỉ hảo')` ≠ `zhNorm('nǐ hǎo')` (smoke test). `tilesDefault: true` hides most of it. | **optional engine change** in `zhNorm` / `zhMissingOnly`: fold U+0309 (hỏi) to U+030C (third tone), which is safe because no pinyin uses U+0309. The lessons tell learners to switch the IME off or use the accent bar (profile §4.3). |

**No engine change is required to ship vi-zh.** The two pack-level issues (the grammar placeholder and the IME) are handled in data: `ui.json`, the lesson text, and `tilesDefault`.

## 10. Open items for the lead

- `validate.js vi zh` exits 1 and `assemble.js vi zh` refuses until the writers finish: 2,983 native rows are missing. Nothing is written to `packs/` until then. `course-vi-zh.js` is in `packs/HELD.txt`.
- **Split:**
  - w2 holds lesson 1 (`pinyin`); w3 holds `tones` and `tone-change`.
  - All three use the profile's reading guide (§4) so the sound lessons agree.
  - Cards are split w1 555 / w2 331, with 386 / 255 Hán Việt decisions.
- **Terms:** the Vietnamese roadmap titles the measure-word lesson *Loại từ*. The profile chooses ***lượng từ***, the term of Vietnamese Chinese-teaching pages. Align `tools/i18n/vi/roadmap.json` or accept the difference.
- **Source issues for the en-zh team:**
  - the duplicated pattern `我在___工作。`;
  - the grammar search placeholder;
  - spoken blanks.
