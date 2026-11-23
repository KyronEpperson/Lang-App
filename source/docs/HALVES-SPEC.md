# Two halves: on-disk format for teaching Korean to any learner language

Status: **frozen v1** (2026-11-22). Exported from `src/app.html` sha256 `9f869e4e5599a06d…`. Tools: `tools/halves/` (`export_ko.js`, `assemble.js`, `proof.js`, `validate.js`, `mk_native.js`, `selftest.js`).

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
target/ko/   course.json decks.jsonl cards.jsonl dialog.jsonl examples.jsonl patterns.jsonl sentences.jsonl lessons.jsonl checks.jsonl practice.jsonl
native/<n>/ko/ course.json ui.json decks.jsonl groups.jsonl cards.jsonl dialog.jsonl examples.jsonl patterns.jsonl sentences.jsonl lessons.jsonl checks.jsonl practice.jsonl labels.jsonl lessons/<id>.html
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
* `exportedFrom` (source file + hash).

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

Warnings:

* the lesson structure (`h3`, `div`, `table`, `li` counts) differs from the English;
* Hangul run counts differ;
* a sentence is unused.

The validator reports counts per file and **words remaining**: the English words whose native field is missing, empty, or still identical to English.

## 7 · Assembly (`node tools/halves/assemble.js <n> ko [outfile]`)

The default outfile is `<tmpdir>/course-<n>-ko.js`, never `packs/`. Assembly writes `LANGAPP_PACKS.course['<n>-ko'] = {…}` in the existing pack shape:

* `id`, `native`, `target:'ko'`, `ttsLang:'ko-KR'`, `name`, `brand` and `introWord`;
* `features` with all seven flags **false**;
* `GREET`, `TITLES` (`[level, Korean, native]`, as en-ko), `DECKS` (`[ko, rom, meaning, note]` under native deck labels), `GROUPS`, `TAGS` and `DESC` (plus `DESC['My phrases']`);
* `DIALOG` and `EXAMPLES`, keyed by card Korean;
* `PATTERNS`, as `[pattern, meaning, example, lessonId]`, the en-ko shape;
* `LESSONS` (en-ko ids), `CHECKS` (`[q, options, correctIndex, why]`) and `PRACTICE`;
* `GOALS`, `PLAN_PRESETS`, `PAIRS`, `PAUSE` and `UI`.

The output passes `node --check`, contains no `</script`, defines exactly one course (the build.sh probe), and passes `validCourse()`.

## 8 · Runtime additions the lead must make

1. **Token `{{strokes:X}}`** in lesson bodies.
   * Expand it in `lessonBody()` after `cleanLessonHTML`, because the cleaner strips `<svg>`. For example: `.replace(/\{\{strokes:([^}]*)\}\}/g,(m,ch)=>STROKES[ch]?'<div class="sgl" data-replay="1"><div class="k">'+escT(ch)+'</div>'+strokeSVG(ch).replace(/<button[^>]*>.*?<\/button>/,'')+'</div>':'')`.
   * The 24 tokens sit inside `<div class="strokes-grid">` in `hangul.html`.
   * Without this, the pack path shows the literal token text.
   * Replay already works once the cells exist: the delegated `document` click handler on `.sgl` is not gated by `features.strokes`. The lead decides whether cells render while `features.strokes` is false; the en-ko lesson shows them regardless.
2. **Pack field `UI`** (`{"English UI string": "native"}`) is not read by the runtime yet.
   * Merge `COURSE.UI` over the exact map in `setI18n()` (for `COURSE.native`) and in `i18nDict()` (for `l === COURSE.native`).
   * It must also work when the native language has **no** i18n pack: `setI18n()` currently sets `I18N=null` then (today that applies to `ceb` and `tl`).
3. **`PATTERNS[3]`** is a lesson id in en-ko and in these packs (`renderGrammar` links it). Some generated packs (for example en-es) put an English translation there instead, so do not "fix" one shape to the other.
4. **Greeting.** `greet()` now uses `COURSE.GREET` for a non-built-in Korean course (as of this spec), so no change is needed. Keep that branch.

## 9 · Workflow for a new learner language

```
node tools/halves/export_ko.js            # only when the built-in en-ko changes; ids stay stable
node tools/halves/proof.js                # must print 0 / 0 differences
node tools/halves/mk_native.js es         # native/es/ko/work/: w1..w4 + README (what to REWRITE, not translate)
…writers fill wN.jsonl "tgt" and wN/lessons/<id>.html…
node tools/halves/mk_native.js es --merge
node tools/halves/validate.js es ko       # 0 errors, 0 words remaining
node tools/halves/assemble.js es ko packs/course-es-ko.js   # the lead decides when it goes into packs/
node tools/halves/selftest.js             # the validator and proof still detect breakage
```
