# Two halves: on-disk format for teaching Korean to any learner language

Status: **frozen v1** (2026-11-22), **v1.1** (2026-11-23: Korean trainers — `roles` / `kinds` / `build` in the target `course.json`, `target/ko/trainer.json`, `native/<n>/ko/trainer.json`, pack fields `ROLES` / `KINDS` / `TRAINER`, features from readiness; see §10), **v1.2** (2026-11-23: every trainer wired for packs; `mk_native.js` writes the trainer work file `wT.jsonl`, §9). **v1.3** (2026-11-24: a second target, Chinese `zh`, and native halves in any language; §11). Exported from `src/app.html` sha256 `abc284e5db93332b…` (`target/ko/course.json` `exportedFrom` always holds the current hash). Tools: `tools/halves/` (`export_ko.js`, `assemble.js`, `proof.js`, `validate.js`, `mk_native.js`, `selftest.js`).

A Korean course is stored as two halves, and `assemble.js` joins them into an ordinary course pack (`LANGAPP_PACKS.course['<n>-ko']`). The runtime needs almost no change.

* **Target half** `tools/halves/target/ko/`: everything Korean. Card text, romanisation, dialogue and example sentences, practice answers and Korean options, the lesson skeleton (ids, order, deck links), and ids. There is one target half, shared by every learner language.
* **Native half** `tools/halves/native/<n>/ko/`: everything in the learner's language (`<n>` = `en`, `es`, `ceb`, `tl`, `zh`, `ja` …). Deck labels, meanings, notes, lesson prose, prompts, explanations and glosses.

`native/en/ko` + `target/ko` reassemble the built-in en-ko course with zero differences (`node tools/halves/proof.js`).

## 1 · Files and encoding

* Tables are **JSONL**: one JSON object per line, UTF-8, `\n`, keys in a fixed order, one row per id.
  * A change touches one line, so diffs stay readable.
  * JSON string escaping makes `|`, tabs, quotes and HTML safe.
* Small structures are pretty-printed **JSON** (`course.json`, `ui.json`).
* Lesson bodies are **HTML files**, one per lesson: `native/<n>/ko/lessons/<lessonId>.html`.

```
target/ko/   course.json trainer.json decks.jsonl cards.jsonl dialog.jsonl examples.jsonl patterns.jsonl sentences.jsonl lessons.jsonl checks.jsonl practice.jsonl
native/<n>/ko/ course.json ui.json trainer.json decks.jsonl groups.jsonl cards.jsonl dialog.jsonl examples.jsonl patterns.jsonl sentences.jsonl lessons.jsonl checks.jsonl practice.jsonl labels.jsonl lessons/<id>.html
```

## 2 · Ids (assigned once, never reused, never positional)

| Kind | Id | Example |
|---|---|---|
| deck | `ko.d.<slug of the English label>` | `ko.d.pronunciation-tips` |
| card | `ko.c0001`… | `ko.c0043` |
| dialogue | `ko.g001`… | `ko.g001` |
| example sentence (deck card) | `ko.e001`… | `ko.e001` |
| grammar pattern | `ko.p001`… | `ko.p006` |
| lesson example row (`{{ex:…}}`) | `ko.s0001`… | `ko.s0005` |
| lesson | the en-ko lesson id, **identical** (the roadmap matches on it) | `polite` |
| lesson section | no separate id: a lesson body is one file `<lessonId>.html`; its `<h3>` sections are checked structurally (counts) against English | `polite.html` |
| check | `<lessonId>.k<n>` | `sov.k1` |
| practice item | `<lessonId>.<nn>` | `hangul.09` |
| group | `ko.grp.<slug>` | `ko.grp.foundations` |
| level title / greeting | `ko.t<level>` / `ko.h.night·morning·afternoon·evening` | `ko.t01` |
| goal / plan preset | `goal.<key>` / `plan.<key>` | `goal.travel` |
| pause set / item / idiom | `ko.z.<key>` / `ko.z.<key>.<nn>` / `ko.i<nn>` | `ko.z.compliment.01` |
| "My phrases" description | `ko.d.mydeck` | |
| Build-drill sentence (trainer) | `ko.b<nn>`, reused by Korean text | `ko.b01` |

Further rules:

* **Stable ids.** `export_ko.js` reuses ids from an existing target half by matching content:
  * cards by Korean text;
  * dialogues and examples by card;
  * patterns by pattern + example;
  * `ko.s` sentences by Korean + romanisation + English gloss. One id never carries two glosses.
  * New items get the next free number.
* **Checks and practice items are numbered by position inside their lesson.** `export_ko.js` refuses to re-export when an existing `<lessonId>.k<n>` or `<lessonId>.<nn>` would now hold different Korean content (an item was inserted, removed or edited in the built-in course). Pass `--accept-moved` only after reviewing those rows in every native half.
* **Keyed only by id.** Native rows are matched by id only, never by position in the file. File order is course order and is only cosmetic in the native half.

## 3 · Target half (`target/ko`)

```jsonl
decks.jsonl      {"id":"ko.d.pronunciation-tips"}
cards.jsonl      {"id":"ko.c0043","deck":"ko.d.pronunciation-tips","ko":"받침","rom":"batchim"}
dialog.jsonl     {"id":"ko.g001","card":"ko.c0061","a":"안녕하세요, 처음 뵙겠습니다.","b":"네, 안녕하세요! 반가워요."}
examples.jsonl   {"id":"ko.e001","card":"ko.c0572","ko":"물 한 잔 주세요."}
patterns.jsonl   {"id":"ko.p006","ko":"도","ex":"저도요","lesson":"particles"}
sentences.jsonl  {"id":"ko.s0005","ko":"고마워요","rom":"gomawoyo"}
lessons.jsonl    {"id":"polite","deck":"ko.d.survival-phrases"}
checks.jsonl     {"id":"sov.k1","lesson":"sov","o":[null,null,null,null],"a":0}
                 {"id":"compare.k1","lesson":"compare","o":["버스가 택시보다 싸요","버스보다 택시가 싸요","버스가 택시더 싸요","버스가 택시 제일 싸요"],"a":0}
practice.jsonl   {"id":"hangul.01","lesson":"hangul","t":"mc","o":["ㅏ","ㅓ","ㅗ","ㅜ"]}
                 {"id":"hangul.06","lesson":"hangul","t":"order","a":["서","울"],"x":["소"]}
                 {"id":"past.06","lesson":"past","t":"order","a":["어제","친구가","왔어요"],"x":["와요"],"alt":[["친구가","어제","왔어요"]]}
                 {"id":"hangul.09","lesson":"hangul","t":"fill","q":"서__","o":["을","올","얼"],"a":["울"]}
                 {"id":"hangul.12","lesson":"hangul","t":"type","a":["강"],"x":["감"],"hint":{"ko":"ㄱ + ㅏ + ㅇ"}}
                 {"id":"polite.14","lesson":"polite","t":"type","a":["아니 괜찮아","아니야 괜찮아"],"x":["괜찮아요"],"hint":{"ko":"아니요 · 괜찮아요","sep":" — "}}
```

`course.json` holds the pack skeleton:

* `target`, `ttsLang`, `self` (`"한국어"`) and `introWord`;
* `groups` `[{id, decks:[deckId…]}]`;
* `tags` `{tag:[deckId…]}`;
* `goals` `[{id,key,decks}]` and `plans` `[{id,key,weeks,decks,lessons}]`;
* `titles` `[{id,level,ko}]`;
* `greet` `[{id,ko,rom}]` (night, morning, afternoon, evening);
* `pairs` `[[casual,polite]…]`;
* `pause` `{sets:[{id,key,ko,sep,items:[{id,ko}]}], idioms:[{id,ko,hanja,rom}]}`;
* `roles` `{hangulVowels, hangulConsonants, survival: deckId, weekGroups: [groupId…]}`: the decks and groups the trainers and the session planner address by role (assembled as `ROLES`, §10);
* `kinds` `{letters, pronunciation, grammar, reference: [deckId…]}`: deck sets (assembled as `KINDS`; the engine derives `sounds` = letters ∪ pronunciation);
* `build` `[{id:"ko.b01", ko}…]`: the 18 extra Build-drill sentences (Korean only; the gloss is native, `trainer.json build.extra`);
* `exportedFrom` (source file + hash).

Practice `order` items may carry **`alt`**: a list of other accepted tile orders (`[["친구가","어제","왔어요"]]`). It is target-side, like `a` and `x`, and assembly copies it unchanged.

**`target/ko/trainer.json`** is a **read-only mirror** that `export_ko.js` writes from the live engine and `proof.js` checks. It is the list of Korean keys and engine tables a native `trainer.json` is validated against, never a second source: `words {cv, f}` (the Hangul drill corpus), `jamo {L, V, T}` (the engine's canonical + language-neutral spelling rows), `part` / `ends` (breakdown match order), `qw`, `conn`, `count`, `koui`, `soundRules`, `conjFields`, `conjIrregular`, `numKinds`, `counters`, `build` (ids), and `uiKeys` (the 14 Korean-specific static UI strings each non-English `ui.json` should override).

## 4 · Native half (`native/<n>/ko`)

These files contain **only native-side fields**. A row that carries a Korean field (`ko`, `rom`, `a`, `x` …) is rejected, so a translator can never alter a Korean answer.

```jsonl
decks.jsonl      {"id":"ko.d.pronunciation-tips","label":"Pronunciation tips","desc":"The sound rules that make real speech differ from spelling."}
groups.jsonl     {"id":"ko.grp.foundations","name":"Foundations"}
cards.jsonl      {"id":"ko.c0055","meaning":"three sounds for one vowel","note":"의사 ui-sa (doctor) at the start; 거의 geo-i; possessive 의 → 에 (친구의 → 친구에)."}
dialog.jsonl     {"id":"ko.g001","tr":"Hello, nice to meet you for the first time. / Hi! Nice to meet you."}
examples.jsonl   {"id":"ko.e001","tr":"A glass of water, please."}
patterns.jsonl   {"id":"ko.p006","meaning":"also / too (replaces 은/는/이/가/을/를)"}
sentences.jsonl  {"id":"ko.s0005","gloss":"Thanks (polite)"}
lessons.jsonl    {"id":"polite","title":"2 · Politeness levels","blurb":"Why every verb has two endings, and which one to use."}
checks.jsonl     {"id":"sov.k1","q":"Korean word order is:","o":["Subject · Object · Verb","Subject · Verb · Object","Verb · Subject · Object","Object · Verb · Subject"],"why":"The verb always closes the sentence."}
                 {"id":"compare.k1","q":"'The bus is cheaper than a taxi' =","why":"보다 goes on the thing you compare against."}
practice.jsonl   {"id":"hangul.01","q":"Which letter is the 'a' sound, as in father?","why":"ㅏ: vertical stick, tick to the right."}
                 {"id":"hangul.09","p":"Seoul (seoul)","why":"ㅜ (u) sits below the ㅇ: 울."}
                 {"id":"polite.14","p":"No, it's okay (casual)","hint":"drop the 요","why":"Casual drops the 요."}
labels.jsonl     {"id":"ko.t01","text":"Sprout"}   {"id":"ko.h.night","text":"it's late, good work"}   {"id":"goal.travel","text":"Travel & getting around"}
```

* **`course.json`:** `{"native":"en","name":"Korean","brand":"한글"}`.
  * `name` is the course name in the learner's language. It becomes `name[<n>]`; `name.ko` comes from the target half's `self`.
* **`ui.json`:** per-course interface overrides, `{"English UI string": "native text"}`.
  * They are assembled as the pack field `UI` (see §8).
  * For a Korean course, the 14 strings in the target mirror's `uiKeys` (read-tab panel, add-card form, grammar search, romanisation toggles) were translated for learning English in the interface dictionaries; every non-English half overrides them here. `validate.js` counts the missing ones under "words remaining".
* **`trainer.json`:** the trainers' learner-language text (§10). Optional: without it, every Korean trainer stays off for that course.
* **`lessons/<id>.html`:** the lesson body in the learner's language.
  * Korean inside the prose and the tables (`<td class="k">ㅏ</td>`, `<b>요</b>`) stays inline. The Hangul check (§6) protects it.
  * Example rows and stroke diagrams are tokens:
    * `{{ex:ko.s0005}}` is a lesson example row. Assembly injects the Korean and the romanisation from `target/ko/sentences.jsonl`, takes the gloss from `native/<n>/ko/sentences.jsonl`, and emits the existing pack token `{{ex:고마워요|gomawoyo|Thanks (polite)}}` (expanded at runtime by `expandEx`).
    * `{{strokes:ㄱ}}` is one stroke-order cell (`<div class="sgl" data-replay="1"><div class="k">ㄱ</div>` + `strokeSVG('ㄱ')` without its button + `</div>`). It is used only in `hangul`. **It needs runtime support (lead):** see §8.
* **Meta fields** that any native row may carry, and that assembly ignores:
  * `_note`: a translator comment;
  * `_waive: ["hangul"]`: turns the Hangul-equality error into a warning for that row, for the rare sentence that truly must add or drop a Korean word. On a `lessons.jsonl` row it covers that lesson's body. Writers put `_waive` and `_note` on their work rows, and `mk_native.js --merge` carries them over.

## 5 · Mixed fields (Korean inside native text)

| Field | Rule |
|---|---|
| Card `note` / `meaning`, pattern `meaning`, check/practice `q` `p` `why`, glosses, lesson HTML | The whole string lives in the native half. In 541 of the 633 notes, Korean sits inside the English prose. **The set of Hangul runs must equal the English original's** (§6). |
| Check options `o`, mc practice options `o` | Decided per option. An option with Hangul and no Latin letters is Korean: it lives in the target half, and the native slot is `null`. A prose option lives in the native half, and the target slot is `null`. The two arrays have the same length, and `a` (the correct index) is target-side. |
| Practice `hint` | "Korean lemma · native note". The longest Korean lead before ` · ` or ` — ` goes in the target half as `{ko, sep}`, and the note goes in the native half. A pure-Korean hint is target-only (`{ko}`). |
| fill `q` (`서__`), `a`, `x`, fill `o` | Target only. |
| Pause set label `칭찬 · compliment` | `{ko:"칭찬", sep:" · "}` in the target half, `"compliment"` in `labels`. |
| Greeting | `ko` and `rom` in the target half, the gloss in `labels`. Assembled as `[ko, rom + " · " + gloss]`. |
| Dialogue translation | One native string `"line A / line B"`. The ` / ` count must be kept. |
| Romanisation | Always target-side: Revised Romanization, shared by every native language. Learner-specific reading advice goes in the lesson prose, not in `rom`. |
| Learner name `@@` | The learner's own name (2026-11-23). Korean text (`a`/`b` of a dialogue, example `ko`, `ko.s` sentence `ko` and `rom`, practice `a` `x` `o` `q`) writes `@@`; the runtime (`nameSync()` in `src/app.html`) puts in the nickname, or 민수 / minsu / Minsu without one, in derived copies of the tables, never in the pack object. A native string keeps exactly as many `@@` as the English one (`validate.js` error). Never in a card front or its romanisation (progress keys; `export_ko.js` refuses it), nor in pairs, pause sets, titles or greetings. Write the line so its grammar fits any name (`@@입니다`, `@@ 드림`, `@@님`), not 이에요 / 예요. Lines with `@@` get no recorded clip (`tools/audio/export.js` skips them). |

## 6 · Validation (`node tools/halves/validate.js <n> ko`)

Errors fail the run:

* every target id has a native row, and there are no orphans or duplicates;
* native rows carry only native fields;
* no native field is empty where the English one is not (8 cards have no note, so their notes may stay empty);
* **the Hangul runs in every native string, set-equal to the English half's** (a count mismatch is only a warning);
* `__` / `___` blanks are unchanged;
* no `{{ }}` outside lesson bodies, and no braces in glosses;
* the dialogue ` / ` is kept;
* option slots line up with the target half;
* deck labels are unique and are not `My phrases`;
* lesson-body tokens all resolve and keep the English order;
* no tag that `cleanLessonHTML` strips, no `" on…="` text it would cut, no `javascript:`;
* the pack-path limits: `q` `p` `why` `hint` ≤ 400 characters, options ≤ 200, ≤ 60 items per lesson, no options made identical;
* `LANGS` has both language codes.

* trainer.json (§10.3): key parity with `native/en/ko/trainer.json` inside each section that is present, no orphans, `%n` slot sets equal to the English, Hangul runs set-equal, no braces, ≤ 200 characters, HTML only `<b>` in `hangul.ui.empty`, every drill word has a `hangul.mean`, the `hangul.alt` rules, `roles` / `kinds` ids resolve to target decks / groups.

Warnings:

* a `trainer.json` section is absent (that trainer stays off), or the whole file is absent;
* the lesson structure (`h3`, `div`, `table`, `li` counts) differs from the English;
* Hangul run counts differ;
* a sentence is unused.

The validator reports counts per file and **words remaining**: the English words whose native field is missing, empty, or still identical to English, including `trainer.json` strings and the `uiKeys` lines of `ui.json`.

## 7 · Assembly (`node tools/halves/assemble.js <n> ko [outfile]`)

The default outfile is `<tmpdir>/course-<n>-ko.js`, never `packs/`. Assembly writes `LANGAPP_PACKS.course['<n>-ko'] = {…}` in the existing pack shape:

* `id`, `native`, `target:'ko'`, `ttsLang:'ko-KR'`, `name`, `brand` and `introWord`;
* `features` from readiness (§10.4): `pron` and `strokes` always true for Korean, `script` true when `trainer.json` has complete `hangul.mean` / `hangul.ui` / `onboard`; `numbers` / `sound` / `register` / `conj` true when that section is complete (all renderers are wired since WP2–WP5);
* `GREET`, `TITLES` (`[level, Korean, native]`, as en-ko), `DECKS` (`[ko, rom, meaning, note]` under native deck labels), `GROUPS`, `TAGS` and `DESC` (plus `DESC['My phrases']`);
* `DIALOG` and `EXAMPLES`, keyed by card Korean;
* `PATTERNS`, as `[pattern, meaning, example, lessonId]`, the en-ko shape;
* `LESSONS` (en-ko ids), `CHECKS` (`[q, options, correctIndex, why]`) and `PRACTICE`;
* `GOALS`, `PLAN_PRESETS`, `PAIRS`, `PAUSE` and `UI`;
* `ROLES` and `KINDS` (ids mapped to native deck labels and group names) whenever the target `course.json` has `roles` / `kinds`, and `TRAINER` (the native `trainer.json` without its `_` notes and `ui`; `build.extra` keyed by the Korean of the target `build[]`) when the native half has one.

The output passes `node --check`, contains no `</script`, defines exactly one course (the build.sh probe), and passes `validCourse()`.

## 8 · Runtime additions the lead must make

1. **Token `{{strokes:X}}`** in lesson bodies.
   * Expand it in `lessonBody()` after `cleanLessonHTML`, because the cleaner strips `<svg>`. For example: `.replace(/\{\{strokes:([^}]*)\}\}/g,(m,ch)=>STROKES[ch]?'<div class="sgl" data-replay="1"><div class="k">'+escT(ch)+'</div>'+strokeSVG(ch).replace(/<button[^>]*>.*?<\/button>/,'')+'</div>':'')`.
   * The 24 tokens sit inside `<div class="strokes-grid">` in `hangul.html`.
   * Without this, the pack path shows the literal token text.
   * Replay already works once the cells exist: the delegated `document` click handler on `.sgl` is not gated by `features.strokes`. The lead decides whether cells render while `features.strokes` is false; the en-ko lesson shows them regardless.
2. **Pack field `UI`** (`{"English UI string": "native"}`): **done.** `setI18n()` and `i18nDict()` merge `COURSE.UI` over the exact map for `COURSE.native`, and since 2026-11-23 also when the native language has **no** interface pack (a non-empty `UI` alone then becomes the dictionary; `uiLang()` is that language).
3. **`PATTERNS[3]`** is a lesson id in en-ko and in these packs (`renderGrammar` links it). Some generated packs (for example en-es) put an English translation there instead, so do not "fix" one shape to the other.
4. **Greeting.** `greet()` now uses `COURSE.GREET` for a non-built-in Korean course (as of this spec), so no change is needed. Keep that branch.

5. **Trainer fields** `ROLES` / `KINDS` / `TRAINER` are read by the engine (§10). `features.strokes` is never read (B8): it is a no-op flag that assembly sets to true for Korean.

## 9 · Workflow for a new learner language

```
node tools/halves/export_ko.js            # only when the built-in en-ko changes; ids stay stable
node tools/halves/proof.js                # must print 0 / 0 differences
node tools/halves/mk_native.js es         # native/es/ko/work/: w1..w4 + wT (trainer text) + README (what to REWRITE, not translate)
…writers fill wN.jsonl "tgt" and wN/lessons/<id>.html…
node tools/halves/mk_native.js es --merge
node tools/halves/validate.js es ko       # 0 errors, 0 words remaining
node tools/halves/assemble.js es ko packs/course-es-ko.js   # the lead decides when it goes into packs/
node tools/halves/selftest.js             # the validator and proof still detect breakage
```

`mk_native.js` also writes `work/wT.jsonl`: `native/en/ko/trainer.json` flattened, one row per string (`{"f":"trainer","id":"gloss.CONN.그래서","src","tgt"}`; `_` notes, `hangul.alt`, `hangul.defaultMode` and booleans are left out). `--merge` nests the filled rows into `native/<n>/ko/trainer.json` and sets `sound.showGloss: true`; with no filled row it leaves an existing `trainer.json` untouched. `hangul.alt` is authored in `trainer.json` directly (§10.2). Halves whose writers started before this split (es, ceb) keep writing `trainer.json` by hand and never run `--merge` for it.

## 10 · Korean trainers (`ROLES`, `KINDS`, `TRAINER`)

Plan and rationale: `docs/TRAINERS-PLAN.md`. The built-in en-ko course carries the same three fields (attached in `registerCourses()`), so every Korean course runs one code path; `proof.js` proves `assemble('en','ko')` reproduces them exactly.

### 10.1 Pack fields

```js
ROLES:   { hangulVowels:'<deck label>', hangulConsonants:'<deck label>', survival:'<deck label>', weekGroups:['<group name>', …] },
KINDS:   { letters:[labels], pronunciation:[labels], grammar:[labels], reference:[labels] },   // engine: sounds = letters ∪ pronunciation
TRAINER: { hangul:{ mean:{word:gloss…}, alt:{V,L,T,sh,input}, ui:{placeholder,ariaLabel,levelSyllable,levelWord,empty,pickPrompt}, defaultMode? },
           onboard:{title,read,readNo,readSlow,readYes,goal,time,started}, quiz:{why,rule}, koui:{ko:gloss…}, strokes:{replay},
           gloss:{PART,ENDS,QW,CONN,COUNT,tpl}, build:{extra,ui}, numbers:{hint,counter,ui}, sound:{rules,showGloss,ui}, register:{…}, conj:{labels,irregular,ui} }
```

* Engine helpers: `TR('a.b')` (value or undefined), `TRF(path, …slots)` (fills `%1`…`%9`), `ROLE(r)` (label only when that deck exists), `roleList('weekGroups')`, `KIND(k, deck)`.
* Engine readers: `ROLES` / `KINDS` at every former English deck-name site; `TRAINER.hangul` (drill text, meanings, alternates), `onboard`, `quiz` (the "why" line on `KINDS.grammar` decks), `koui` (tooltip = `romanize(ko) + ' · ' + gloss`), `strokes.replay` (card-back button; none when absent), `numbers` (hints, counter labels, prompt, placeholder), `sound` (prompt; with `showGloss: true` each rule shows as `name · gloss` in the drill feedback and the card-note tooltip), `register` (prompts and feedback), `conj` (labels, irregular tags, grammar-panel text), `gloss` (the 🔍 sentence breakdown, Build feedback; templates `%1 + %2 = %3` …) and `build` (`extra` sentences, drill text).
* Slots are positional `%1`…`%9` (braces are forbidden in native text). Keys are the Korean text where the engine table is keyed by Korean (`mean`, `PART`, `CONN`, `koui`, `build.extra`, sound-rule names), otherwise a fixed English slug.

### 10.2 `native/<n>/ko/trainer.json`

The shape of `TRAINER`, plus `_about` / `_src` / `_note` / `_new` meta fields that assembly drops. `native/en/ko/trainer.json` is written by `export_ko.js` from the live engine (translator notes are carried over at the same paths); edit the engine, not that file. Other languages write their file by hand, one section at a time; a missing section keeps that trainer off.

`hangul.alt` is **authored, not translated**: the learner's own spellings, appended after the engine's `[canonical, …neutral]` for each jamo. `V` / `L` / `T` map a jamo to extra spellings, `sh` lists the spellings added for ㅅ before ㅣ / y-vowels, `input` normalises what the learner types: `fold` (strip accents), `map` (ordered literal replacements, e.g. `["ñ","ny"]`; may map a whole script to Latin), `rewrite` (`[regex, replacement]`, each adds one more candidate, never replaces the input). `hangul.defaultMode: "pick"` suits learners who do not type Latin; the input then drops `inputmode="latin"`.

### 10.3 Validation of `trainer.json` (errors)

* Inside each present section: every English key exists (booleans stay booleans), no orphan keys, same `%n` set, same Hangul runs (an object may carry `"_waive": ["hangul"]`), no braces, ≤ 200 characters, no HTML except `<b>` in `hangul.ui.empty`. `hangul.alt` and `hangul.defaultMode` are exempt from parity.
* `hangul.mean` covers every word of the mirror. For `en`, every Korean-keyed table equals the mirror's key list.
* `hangul.alt`: spellings are `[a-z]+`; none equals **another jamo's canonical spelling in the same slot**; an initial or vowel alternate may not make a syllable read like a different syllable's canonical reading (rejects ㅈ `y`: 자 = 야); `rewrite` regexes compile and replacements are `[a-z]*`; `map` keys are non-empty; with the table applied, no drill word reaches the engine's 400-spelling cap. The en-only exception is ㅓ `u` (equal to ㅜ's `u`, kept so en-ko stays identical).

### 10.4 Features from readiness

`CF(f)` in the engine is `features[f] && READY[f]()` for a Korean target, and a non-built-in course only gets features whose renderers read `TRAINER` (`TRAINER_WIRED`, mirrored by `WIRED` in `assemble.js`: since WP2–WP6 every feature). `READY` requires the whole section (the same key lists as `assemble.js readiness()`), so a pack with a flag but an incomplete section shows no trainer and never English. `modeOk(mode)` gates each drill mode (`pick` needs `script`, `build` needs `script` + `READY.build`, i.e. every `gloss` key and template plus `build.ui` / `build.extra`; `register` / `numbers` / `sound` need their flag). The read-tab tour names the full drill list only when the pack has build, numbers and register.

## 11 · Other targets (v1.3): Chinese `zh`

Design and rationale: `docs/briefs/vi-zh-design.md`. Everything above holds for every target, with these differences:

* **One table per target** in `lib.js` (`TARGETS`):
  * the field holding the target text in target rows: `ko` for Korean, **`zh`** for Chinese (`{"id":"zh.c0001","deck":"zh.d.pinyin-sounds","zh":"八","rom":"bā"}`);
  * the protected script: Hangul / **Han characters**;
  * the option and hint classifier, used by the exporter, `mk_native.js` and `validate.js`. A Chinese option is target-side when it has Han and no Latin letters, or when it is pinyin.
* **Export:**
  * `node tools/halves/export_target.js zh` regenerates en-zh from `tools/target/zh/` (`tools/target/gen.js`) into a temp file and splits it. It refuses any pack or practice field it does not map.
  * `export_target.js ko` runs `export_ko.js` unchanged: the built-in en-ko course lives in `src/app.html`.
* **Proof:** `node tools/halves/proof.js zh` is a pure-data proof. `assemble('en','zh')` deep-equals the regenerated en-zh pack (only `standard` and `UI` may be extra). `proof.js` with no argument stays the Korean browser proof.
* **Target `course.json` (zh) adds:**
  * `pack` (en-zh flags copied verbatim: `accents`, `keys`, `tilesDefault`);
  * `features` (copied, all false);
  * `uiKeys` (the interface strings a non-English half overrides).
* **Shapes en-zh has and Korean has not** (assembled back to the en-zh shape):
  * titles without target text → `[level, native, ""]`;
  * greetings without pronunciation → `[zh, gloss]`;
  * `PATTERNS[3]` as the example translation → native `patterns.tr`;
  * practice `strict` and `xr` → target-side.
* **Native rules for zh:**
  * Han runs are set-equal to the English, but a card `note` may add the row's own `trad`;
  * bodies, deck descriptions, pattern meanings and `why` may add Han (a warning);
  * a missing pinyin word with ¯ or ˇ is a warning;
  * no `|` in example glosses.
  * For Vietnamese, native `course.json` `"readings": "hanviet"` requires card fields `hvUse` (same | shifted | none | skip), `hv` (one Hán Việt syllable per character) and optional `trad`. Assembly ignores them; `validate.js` checks their form and consistency.
* **Tools:**
  * `mk_native.js <n> --target zh` (`mk_native.js <n>` is still Korean) writes `w1..w4`, `wU.jsonl` (→ `ui.json`), `REPEATS.md` and `NOTES.md`;
  * `assemble.js <n> zh`, `validate.js <n> zh [--all]`;
  * `dryrun.js <n> <t> <wN>` is a writer's self-check on a temp copy.
