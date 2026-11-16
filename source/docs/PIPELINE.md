# Lang App — per-language content and interface pipeline

This doc covers adding a `<lang>-en` course (English for `<lang>` speakers) and its interface pack. The contract is
`docs/PILOT-SPEC.md`. Korean (`ko`) is the reference language. Its regenerated packs are byte-identical to the
pre-restructure ones.

## 1. Adding a language end to end

Run everything from `/home/claude`. Replace `xx` with the language code (`ja`, `es`, …).

```bash
# 0. research (research agent): docs/profiles/xx.md (register, glossary, pron policy, standing rule, lessons to add or drop)

# 1. scaffold
node tools/content/new_lang.js xx          # tools/content/xx/: copies of the ko sources (banner "TRANSLATE/ADAPT"), profile.json stub, empty deviations.json
python3 tools/i18n/new_lang.py xx          # tools/i18n/xx/ui.json: every key with "t": "" plus the Korean text, context, slots, example

# 2. fill in (content and interface agents, only inside their own folder)
#    tools/content/xx/profile.json   fill in every field and delete "_help"
#    tools/content/xx/*.js, meta.js  rewrite everything Korean for xx speakers; keep the English side identical to ko-en
#    tools/content/xx/deviations.json  a reason for every intended difference from ko-en
#    tools/i18n/xx/ui.json           fill in every "t"

# 3. generate and validate the course
node tools/content/gen.js xx               # -> packs/course-xx-en.js   (optional 2nd arg: output path, for testing)
node tools/content/validate.js xx          # structure + language checks driven by profile.json
node tools/content/parity.js xx            # shared English side vs packs/course-ko-en.js
python3 tools/content/link_roadmap.py --check xx   # read-only: roadmap lesson links missing in course-xx-en

# 4. generate and validate the interface
python3 tools/i18n/gen.py xx               # -> packs/i18n-xx.js   (optional 2nd arg: output path)
node tools/i18n/validate.js xx

# 5. build and test end to end (the engine owner / lead runs build.sh; the pipeline agent never does)
./build.sh
node tools/content/e2e_en.js xx pron be articles     # Playwright, 390px: unlock, checks, practice sweep per lesson
```

Before the first ship, also run the Korean regression set again:
`node tools/content/gen.js ko && node tools/content/validate.js ko && node tools/content/parity.js ko && python3 tools/i18n/gen.py ko && node tools/i18n/validate.js ko`.
Both ko packs must stay byte-identical: copy them first and compare with `cmp`.

## 2. File map

```
tools/content/
  lib.js            shared: ORDER (39 lesson ids), TITLE_LEVELS, PAUSE_EN, GOAL_KEYS, profile/deviation loaders, native-text tester
  gen.js            node gen.js [lang=ko] [out]      -> packs/course-<lang>-en.js
  validate.js       node validate.js [lang=ko] [pack]
  parity.js         node parity.js <lang> [pack] [--ref ko-en pack]
  new_lang.js       node new_lang.js <lang> [--out dir] [--force]
  more/_dsl.js      practice shorthand (mc/or/fi/ty) -> PRACTICE-SPEC items; contraction variants; cue injection from the profile
  e2e_en.js         node e2e_en.js <lang> <id…>   (if the first arg is not a scaffolded language, it is treated as a lesson id and lang = ko)
  link_roadmap.py   no args: rewrite the en roadmap links in packs/roadmaps.js from course-ko-en (one English roadmap); --check <lang>: read-only
  ko/               decks.js extra.js lessons.js practice.js more/{a1,a2,b1}.js  (moved unchanged)
                    meta.js        GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS ("@path"/"@all"), TITLES (native names), PAUSE_LABELS
                    profile.json   see §3
                    deviations.json  empty
  <lang>/           same file set
tools/i18n/
  i18nlib.py        template -> regex (slot tokens {n} {f} {s} {x} {e} {d}), slot lists, ui.json loader
  gen.py            python3 gen.py [lang=ko] [out]  -> packs/i18n-<lang>.js, emitted in keys.json order
  validate.js       node validate.js [lang=ko] [pack]
  keys.json         frozen key list (see §4)
  build_keys.py     refresh keys.json from ko/ui.json (append-only; updates the informational "where" field)
  merge_ll_keys.py  merge docs/LL-KEYS.md (the engine's inline LL() strings) into keys.json
  new_lang.py       python3 new_lang.py <lang> [--out dir] [--force] [--prefill ko (smoke tests only)]
  lex.py, extract.py, static.py   optional coverage tooling: they read korean-flashcards.html and write lits.json / cands.json / cov.json
                                  into the working directory; run them from a scratch dir and copy cov.json here to get the coverage report
  ko/ui.json        Korean tables (moved unchanged from the old gen.py): header, notes, exact {en: ko}, patterns {template: ko}
  <lang>/ui.json    same shape; values may be strings or {"t": text, ...reference fields}
packs/course-<lang>-en.js, packs/i18n-<lang>.js   generated, never hand-edited
```

## 3. profile.json (tools/content/<lang>/profile.json)

| field | used by | meaning |
|---|---|---|
| `native` | all | must equal `<lang>` |
| `name` | gen, validate | `{"en": "English", "<lang>": "<the word English in <lang>>"}` → pack `name` |
| `ttsLang` | gen, validate | pack `ttsLang` (e.g. `en-US`) |
| `nativeScript` | validate, _dsl | regex source for the learner's script, or `null` when it is the Latin script (es). See below |
| `pron` | validate | `required` / `optional` / `none`: policy for the card `pron` field and the `{{ex:English|pron|meaning}}` middle field (`none` = must be empty) |
| `standingRule` | validate | `{kind, keywords, flags?}`. `article-plural` = the ko rule: ≥ half of the order items and ≥ half of the type items in every lesson hinge on a/an/the or plural -s, **and** their `why` matches `keywords`. `verb-core` = the es rule (docs/profiles/es.md §7): ≥ half of order + type items together hinge on agreement, do-support or auxiliary inversion, or dummy it/there (heuristic). `none` = no rule. `flags` (optional, extra) = regex flags for `keywords`, e.g. `"i"` |
| `pronPattern` (optional, extra) | validate | regex that every non-empty `pron` must match in full, e.g. the katakana-only rule in docs/profiles/ja.md §6 |
| `labels.mcBlankCue`, `labels.typeHintCue` | _dsl | text appended to a shorthand mc question or type hint that has no native text (ko: " 빈칸에 알맞은 것은?", " — 이 단어들로") |
| `labels.cueTest` (optional) | _dsl | regex for "has native text" when it should differ from `nativeScript` |
| `nativeNameEn` (optional, extra) | gen | English name of the language for the pack's header comment ("English for Korean speakers") |
| `lessonOrder.after` (optional, extra) | gen | `{"<extra id>": "<id it follows>"}`: where an extra lesson goes. Also list it in `deviations.json` `extraLessons` |

**Native text with `nativeScript` set:** "must be in the native language" means the string contains a character of that script.
"English must not contain native script" is checked too.

**Native text with `nativeScript: null`:** "must be in the native language" means the string is non-empty **and** differs
(case- and punctuation-insensitive) from its English counterpart. The counterparts are: card meaning or note vs target,
`{{ex}}` meaning vs English, dialogue translation vs the two lines, example translation vs sentence, pattern meaning vs pattern,
pause or idiom gloss vs phrase, order `p` vs the joined tiles, fill `p` vs the filled sentence, and type `p` vs `a[0]`. Strings
with no counterpart (titles, blurbs, check questions, `why`, hints) only have to be non-empty. The "no native script in English"
checks are skipped.

**Cue injection with `nativeScript: null` and no `cueTest`:** nothing is injected. Authors write the full native prompt or hint.
In the ko sources, 32 mc questions and 23 type hints (of 392 shorthand items in `more/`) are bare English and rely on injection.
A Latin-script language must rewrite these or set `cueTest`. When `cueTest` is set, the validator also requires it on every mc `q`
and type `hint`. Without `nativeScript` or `cueTest`, a bare-English prompt passes; the validator prints a note saying so.

**Empty fields in the ` | ` row sources** (decks.js, extra.js): write `Hello. | | 안녕하세요 | note` for an empty pron and end the
line with ` |` for an empty last field. In `{{ex:English||meaning}}` the pron is empty. The engine has to render an empty pron
cleanly (it never had to for ko).

**Adding a standing-rule kind:** add an entry to `STANDING_RULES` in `tools/content/validate.js`. Its factory takes `(rule, helpers)`
and returns `null` or `{label, short, hit: {<item type>: item => bool}, need: (type, count) => minimum}`. Then set `kind` in the
profile and add a row to this table.

## 4. keys.json and ui.json

* `exact[]`: `{key, kind (label|sentence|fragment|canvas), section, where, context?, optionalFor?, source?, koInline?}`. The order
  is stable.
* `patterns[]`: one entry per **position**, in engine order (first match wins): `{id, template, slots:[{n,type}], regex, example,
  section, context?, repeatOf?}`. Positions that share a template share one translation. ko has 256 positions and 255 distinct
  templates: `{n}% · {n} tried` occurs twice.
* Slots are written `{1}..{k}` in template order, are **1-based** (PILOT-SPEC §4 says "`{0}`-style"; the existing tables have always
  been 1-based), and may be reordered. Every slot must appear.
* Slot types: `n` integer, `f` decimal, `s` short text (lazy), `x` free text (greedy), `e` e-mail, `d` text without "·".
* Count patterns (`context` says "count slot") must read correctly at 1 and at 2 or more.
* `optionalFor: ["ko"]` marks keys from `docs/LL-KEYS.md`. Korean passes them inline through `LL(en, ko)`; every other language must
  translate them.
* Merge engine keys with `python3 tools/i18n/merge_ll_keys.py`. It is idempotent and safe to run before LL-KEYS.md exists (it exits
  0). It exits 1 when the file exists but no key is recognised. Strings with placeholders are reported, not merged. Then run
  `python3 tools/i18n/new_lang.py xx --force` again only for languages not yet started; translators of started languages add the new
  keys by hand (validate lists them as untranslated).
* A new ko key: add it to `ko/ui.json`, then run `python3 tools/i18n/build_keys.py`. New patterns are appended last, so move them in
  keys.json if they must win over an earlier pattern.

## 5. What each validator enforces

**tools/content/validate.js** fails on:
* Pack structure: `node --check`; no `</script`, no `//`, no backticks; only assigns `LANGAPP_PACKS.course['<lang>-en']`.
* Header: ids, `name`, `ttsLang`, and all `features` false.
* Decks: at least 16 decks and 260 cards; 4-tuples; the target has no native script; `pron` follows the policy; meaning and note are
  native; no duplicate targets or meanings.
* GROUPS, TAGS and DESC cover every deck exactly. GOALS keys are travel/work/social/media with native labels. PLAN_PRESETS refer to
  existing decks and lessons. TITLES match the shared levels and English names, with native names.
* DIALOG (at least 60) and EXAMPLES (at least 40) are keyed by card targets; translations are native; a dialogue translation has the
  form "A / B".
* Lessons: id format; numbered native title; native blurb; deck exists; HTML tag whitelist and balance; at least 3 well-formed
  `{{ex:…}}` tokens (pron per policy); exactly 3 checks with 4 distinct options, an index from 0 to 3 and a native explanation; the
  correct-index distribution is varied.
* Practice (PRACTICE-SPEC): 12–16 items in mc → order → fill → type blocks with the per-type counts and field shapes; no native
  script in English answers; native prompts, `why` and hints; contraction/full-form pairs; the standing rule from the profile.
* PATTERNS (at least 20), PAUSE sets (at least 18 each, no duplicates), idioms (at least 24, none duplicating a card target).

**tools/content/parity.js** fails on any difference from ko-en not explained in `deviations.json`:
* Lesson ids and order (after `extraLessons` / `droppedLessons`).
* Deck count, English targets per deck position, and each lesson's deck position.
* Per lesson: check count, answer indexes, and every check option that is English in ko-en.
* Per lesson: practice item count, item types, and `o` / `a` / `x` (plus fill `q`).

`deviations.lessons[id]` skips a lesson's comparison. `items["<id>#<i>"]` covers practice item `i`. `items["<id>#check<i>"]` covers
check `i`. `items["<id>#checks" | "#count" | "#deck"]` covers the counts and the deck position. `decks["<index | ko name | lang
name | count>"]` covers decks. Unused deviations are printed as warnings.

**tools/i18n/validate.js** fails on:
* Pack structure: no `</script`, no `//`, only `LANGAPP_PACKS.i18n.<lang>`, no duplicate, empty or untrimmed keys, no keys without
  Latin letters, valid anchored regexes, and `$k` references within the group count.
* Every non-optional keys.json exact key and pattern template translated and non-empty.
* The slot set of every pattern translation equals `{1}..{k}`.
* The pack in sync with ui.json + keys.json (otherwise run gen.py).

It warns on:
* Labels longer than 1.6 × the English and longer than 14 characters (button overflow risk).
* For languages whose profile has `nativeScript: null`: translations identical to the English key.
* ui.json keys unknown to keys.json.

It prints sample renders. It prints the coverage report only when `tools/i18n/cov.json` exists.

## 6. Known limitations

* **es profile vs parity.** docs/profiles/es.md "reweights" lessons with different practice items. Any changed English `o`/`a`/`x`
  needs a `deviations.json` `items` entry, or one `lessons` entry per lesson. Also, `verb-core` is a heuristic reading of es.md §7.
  The es content agent should look at the `[vc N]` counts and report misclassified items.
* **Other profiles.** docs/profiles/OTHERS.md proposes kinds that are not implemented yet (`tense-aspect`, `prep-tense`,
  `article-copula`, `article`, `article-tense`). Add each one to `STANDING_RULES` when its language starts.

* **Cognates under `nativeScript: null`.** "Differs from English" will flag legitimate Spanish cognates in a card meaning or gloss
  (e.g. *hotel*, *no*, *taxi*). Today the fix is to write a fuller gloss ("el hotel"). If that proves too strict, add a profile
  allow-list later.
* **Interface pack and native language.** The interface pack for a language is checked against `tools/content/<lang>/profile.json`
  for script detection. Without a profile, the validator guesses from the translations.
* **e2e_en.js and lesson ids.** e2e_en.js picks the language from its first argument only when `tools/content/<arg>/profile.json`
  exists. A future language code that equals a lesson id (`be`) must always be passed explicitly first.
