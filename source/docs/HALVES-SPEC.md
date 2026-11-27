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

## 12 · Spanish `es`: "by marks", recognised by the course's own inventory

Design, numbers and open items: `docs/briefs/x-es-design.md`. "By marks" is `docs/briefs/x-vi-design.md` §1: whole target fields by position, spans in mixed native fields in `target/es/marks.jsonl`, and `validate.js` requiring each span in every native half. What is new:

* **`TARGETS.es`** is `require('./targets/es.js')`: a call of the reusable factory `targets/_inventory.js` with Spanish data (letters, pronunciation pieces, diacritics, English homographs, the `respell.js` and profile paths). Target rows use the field **`es`** (`{"id":"es.c0001","deck":"es.d.sounds-and-spelling","es":"la hora","rom":"lah OH-rah"}`).
* **The classifier is the inventory:** every string in a target-only position (cards, dialogue, examples, patterns, `{{ex}}` sentences, in-lesson cards, tile fronts, greetings, fill / order / type answers and options). It yields a phrase set and a lexicon. `export_target.js` fills it from the pack (`TC.useCourse(c)`); every other tool loads the same fields from `target/es/`.
* **Optional hooks** that `export_target.js` reads from the target config:
  * `useCourse(c)`: learn the inventory before classifying;
  * `itemIsValue(opts, key)`: one target-or-prose decision per mc / check item, from the key or from most of the options;
  * `unmarkedNote`: the header of `unmarked.tsv`.
* **`marks(kind, text, own, extra)`**:
  * bold, `td.k` and `<i>` pronunciation lines in bodies;
  * `X (LINE)` / `X, LINE` pairs where LINE is exactly `respell(X)`;
  * the row's own target words, minus English homographs;
  * `extra.spans` / `extra.not` from the hand-kept `tools/target/es/marks.extra.jsonl` (once `export_target.js` passes it as the fourth argument).
* **`native/en/es/unmarked.tsv`** lists lexicon words (or words with `ñ á é í ó ú ü`) outside every mark. They are not protected until the source marks them.
* **Commands:**
  * `export_target.js es`;
  * `proof.js es` (pure data, as zh);
  * `validate.js <n> es`;
  * `mk_native.js <n> --target es` (README wording still Chinese);
  * `assemble.js <n> es`.

## 13 · Other targets and modes (pointers)

- Cantonese `yue` (script mode, in-lesson decks, tile sets): `docs/briefs/x-yue-design.md`.
- Vietnamese `vi` (by marks: `target/vi/marks.jsonl`, hand-set spans in `tools/target/vi/marks.extra.jsonl`): `docs/briefs/x-vi-design.md`.
- KEEP mode (a learner language written in Han characters on a Han-script target): `docs/briefs/x-yue-design.md` §6a.

## 14 · Japanese `ja`: script mode, kana + kanji

* **Source:** en-ja, `tools/target/ja/` (`tools/target/gen.js ja`). Half: `target/ja/` + `native/en/ja/`; design: `docs/briefs/x-ja-design.md`.
* **`TARGETS.ja`** = `require('./targets/ja.js')` (self-contained; `lib.js` loads it during its own load, so it must not require `lib.js`):
  * `by: 'script'`, field `ja`, `script: 'kana and kanji'` (the word the validator prints: "kana and kanji differs from the English");
  * protected runs: hiragana, katakana, `ー`, iteration marks `ゝゞヽヾ々〆`, `゛゜`, small `ㇰ-ㇿ`, Han (zh's blocks). Japanese punctuation `、。・？！〜` is free;
  * `isValue`: Japanese script with no Latin letter, or romaji = en-ja `pronPattern` plus a macron / `n'`, or one kana's reading (`ji`, `zu`), never an English-looking word (`no`, `to`, `a`);
  * `leadRx` as zh (hints "えき · いきます · note" split at the last ` · ` before Latin);
  * `kanaRuns(s)`: kana runs only, for a future Han-native check.
* **Shape:** like yue: lesson `sections` with 3 in-lesson decks (`ja.ld.*`, `ja.lc0001…`), 5 tile sets (`ja.tl001…`), no tile hints (the two readings `ji`, `zu` are target-side).
* **Open:** native halves written in Han (zh, yue, nan) cannot be validated by Han runs; kana runs still can. Do not scaffold them before the Han-native helper exists (`x-ja-design.md` §5).
* **Commands:** `export_target.js ja`; `proof.js ja`; `validate.js <n> ja`; `mk_native.js <n> --target ja` (README wording still Chinese); `assemble.js <n> ja`.

## 15 · Thai `th`: script mode, romanised reading

Design, numbers and open items: `docs/briefs/x-th-design.md`. Thai works like zh and yue (§11): script decides, and nothing is recorded in `marks.jsonl`.

* **`TARGETS.th`** is `require('./targets/th.js')` (one line in `lib.js`, after `es`). Target rows use the field **`th`** (`{"id":"th.c0001","deck":"th.d.tones-and-vowel-length","th":"มา","rom":"maa"}`).
* **Protected runs:** runs of Thai script, U+0E00–U+0E7F (consonants, vowel signs, tone marks, Thai digits). A native string must keep the English string's set of Thai runs. The policies for added runs are the same as for zh: allowed in notes when they are the card's own text; a warning in bodies, deck descriptions, pattern meanings and `why`; an error elsewhere.
* **Target value (`isValue`)**, used for check and mc options, hint leads and tile readings:
  * Thai script with no Latin letters;
  * a whole string that passes en-th's own `pronPattern` (`tools/target/th/profile.json`: lowercase syllables, tone marks à â á ǎ on the vowel, `-` inside a word, one space between words), except the English words in `targets/th.js` `HOMOGRAPHS` (`noon`). Mid tone has no mark, so an unmarked English word can be a well-formed romanization;
  * a bare romanization initial (`t`, `th`, `bp`, `khr`): language-neutral material, as pinyin and Jyutping initials are.
* **Hints:** a lead with no Latin letters splits at ` · ` / ` — ` (`น้ำ · สอง · two bottles`). A hint that prints romanization in brackets (`กิน (gin) · ข้าว (khâao)`) is a native field as a whole. Its Thai runs are protected; its romanization is not (follow-up in the design note).
* **Commands:**
  * `export_target.js th`;
  * `proof.js th` (pure data; `packs/course-en-th.js` is the regenerated pack followed by the `READS` / `SECS` blocks, as for yue);
  * `validate.js <n> th [--all]`;
  * `mk_native.js <n> --target th` (README wording still Chinese);
  * `assemble.js <n> th`.

## 16 · Arabic `ar`: script mode

Design, numbers and open items: `docs/briefs/x-ar-design.md`. Arabic works like zh, yue and th: script decides, and nothing is recorded in `marks.jsonl`.

* **`TARGETS.ar`** is `require('./targets/ar.js')` (one line in `lib.js`, after `th`). Target rows use the field **`ar`** (`{"id":"ar.c0002","deck":"ar.d.letters-1-alif-to-sad","ar":"ب","rom":"bāʾ"}`).
* **Protected runs:** runs of Arabic script: U+0610–061A, U+0620–0669, U+066E–06D3, U+06D5–06FF and U+0750–077F. That is every letter and hamza form (ء آ أ ؤ إ ئ ة ى ٱ), the harakat and tanwin, shadda, sukun, the dagger alif, tatweel (`ـبـ` in the letter-shape tiles) and the Arabic-Indic digits ٠–٩. A dropped shadda or haraka changes the run and is reported. A space ends a run, so runs are words. Policies for added runs are those of zh.
* **Free (not part of a run):** Arabic punctuation ، ؛ ؟ (and ٪ ٫ ٬ ٭ ۔). A native language written in Arabic script uses the same marks in its own sentences, and a native note may put its own comma right after a quoted word. The cost: a writer who drops the ؟ of a quoted Arabic question is not caught (47 ؟ and 2 ، sit inside native/en/ar text).
* **Target value (`isValue`)**, used for check and mc options, hint leads and tile readings:
  * Arabic script with no Latin letters (Latin includes ʿ ʾ and the dotted letters);
  * a whole string that passes en-ar's own `pronPattern` (`tools/target/ar/profile.json`: lowercase, ā ī ū, ḥ ṣ ḍ ṭ ẓ, ʿ ʾ, `al-` / one-letter prefixes with a hyphen, `·` between digraph letters), except the English words in `targets/ar.js` `HOMOGRAPHS` (`always`). The pattern refuses capitals and c e o p v x, but plain English such as `this`, `is`, `him` passes, so the list grows only from the data.
  * no bare-initial rule (en-ar never offers a bare consonant reading).
* **Hints:** a lead with no Latin letters splits at ` · ` / ` — ` (`هٰذَا · كِتَاب`); `·` inside a romanised word never has spaces round it.
* **Commands:** `export_target.js ar`; `proof.js ar` (`packs/course-en-ar.js` is the regenerated pack followed by the `READS` / `SECS` blocks, as for yue and th); `validate.js <n> ar [--all]`; `mk_native.js <n> --target ar` (README / `REPEATS.md` wording still Chinese); `assemble.js <n> ar`.
* **Open (not solved):** a native language written in Arabic script (Urdu, later Persian) cannot be told from the target by script runs; it needs the "by marks" mode. A right-to-left native interface with a right-to-left target is untested.
## 17 · Amharic `am`: script mode
Design, numbers and open items: `docs/briefs/x-am-design.md`. Amharic works like zh, yue, th and ar: script decides, and nothing is recorded in `marks.jsonl`.

* **`TARGETS.am`** is `require('./targets/am.js')` (one line in `lib.js`, after `ar`). Target rows use the field **`am`** (`{"id":"am.c0001","deck":"am.d.how-the-fidel-works","am":"በ","rom":"be"}`).
* **Ids:** the target config's optional `slugText` (read only by `export_target.js`) writes each Ethiopic letter as its hex code point before the ASCII slug, so deck names that differ only in fidel get different ids: `am.d.fidel-rows-1200-to-1278`, `am.d.fidel-rows-1280-to-12e0`. Targets without `slugText` keep their ids.
* **Protected runs:** runs of Ethiopic letters: U+1200–135F (syllables, combining marks) and the Ethiopic digits U+1369–137C. en-am uses only U+1200–135A; the Supplement and Extended blocks are not in the class. One fidel changed inside a run (ሀ → ሐ) is reported. A space ends a run, so runs are words. Policies for added runs are those of zh.
* **Free (not part of a run):** Ethiopic punctuation U+1360–1368 (፡ ። ፣ ፤ ፥ ፦ ፧). en-am writes only ።, and only in fields the target half holds; none sits inside native/en/am text. The cost: a writer who drops ። from a quoted sentence is not caught.
* **Target value (`isValue`)**, used for check and mc options, hint leads and tile readings:
  * Ethiopic with no Latin letters;
  * a whole string that passes en-am's own `pronPattern` (`tools/target/am/profile.json`: lowercase, é, doubled consonants, `'` for ejectives and the glottal catch, `c` only in `ch`, no q or x, one of `. , ? !` after a word), except the 27 English option strings in `targets/am.js` `HOMOGRAPHS` (`tea`, `he said`, `noon`, `g`, …). The pattern accepts most lowercase English, so the list grows only from the data: a new English option that passes it fails the selftest "am: no English in target/am".
  * no bare-initial rule (en-am never offers a bare consonant as an option).
* **Hints:** a lead with no Latin letters splits at ` · ` / ` — ` (`ደህና · ነህ · man form` → lead `ደህና · ነህ`, note `man form`).
* **Commands:** `export_target.js am`; `proof.js am`; `validate.js <n> am [--all]`; `mk_native.js <n> --target am` (README / `REPEATS.md` wording still Chinese); `assemble.js <n> am`.
* **Open (not solved):** a native language written in Ethiopic script (Tigrinya) cannot be told from the target by script runs and shares the punctuation; it needs the "by marks" mode.

## 18 · Taiwanese `nan`

Design, numbers and open items: `docs/briefs/x-nan-design.md`. Script mode like yue (§11) and ja (§13): Han runs decide, nothing is recorded in `marks.jsonl`.

* **Source:** en-nan, `tools/target/nan/` (`tools/target/gen.js nan`). The card front is Han (MOE recommended characters, field **`nan`**); Tâi-lô is the reading (`rom`). Tâi-lô is also taught on its own in answer slots (mc options, typed / built / filled answers, three tile readings), as Jyutping is for yue.
* **`TARGETS.nan`** = `require('./targets/nan.js')` (one line in `lib.js`, after `ar`; self-contained, must not require `lib.js`).
* **Protected runs:** Han, zh's blocks **plus the supplementary planes** U+20000–U+2FFFF (en-nan writes 𠢕 and 𪜶; `lib.js` `HAN_RX` does not cover them). Runs are sorted by UTF-16 code unit, so `阿伯𠢕早` sorts before `𪜶`.
* **Target value (`isValue`)**, used for check and mc options, hint leads and tile readings:
  * Han with no Latin letters;
  * whole-string Tâi-lô (`isTailo`): passes en-nan's `pronPattern`, and every syllable (tone marks removed) has Tâi-lô shape: an initial (or POJ `ch` / `chh`) plus vowels with optional `nn` and coda `m n ng p t k h`, or a syllabic `m` / `ng`. `spin`, `fin`, `Two`, `é of café` fail;
  * except the toneless English words in `targets/nan.js` `EN_HOMOGRAPHS` (`pin`, `bin`, `too`, `not`), each taken from an en-nan item that offers it as an English option. `tsit`, `lâi`, `bô`, `to` stay target.
* **Fill prompts (`fillSplit`, optional target hook):** a fill prompt with a learner-language frame (`Tâi-lô for 厝: __`, `火車 (train), as spelled: __-tshia`) is native text: the target practice row has no `q`; the native row holds it. The prompt's blank tokens that carry Tâi-lô go into the target row as **`qk`** (`["__-tshia"]`), and `validate.js` requires each one, exactly and as a whole word, in the native `q`. `assemble.js` takes `q` from the target row when it has one, else from the native row. Targets without `fillSplit` are unchanged.
* **Hints:** a Han lead splits at ` · ` / ` — ` as in zh.
* **Commands:** `export_target.js nan`; `proof.js nan` (`packs/course-en-nan.js` is the regenerated pack followed by appended blocks, as for yue); `validate.js <n> nan [--all]`; `mk_native.js <n> --target nan` (README wording still Chinese); `assemble.js <n> nan`.
* **Open (not solved):** a native half written in Han (zh, yue, ja) cannot be told from Taigi by Han runs. The intended mechanism is the other team's `hanNative` helper in `lib.js` (next release). Do not scaffold such a half before it lands.

