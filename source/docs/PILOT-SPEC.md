# X → English pilot (Japanese and Spanish speakers) — contracts

Goal: ship two new courses, `ja-en` and `es-en`, that teach English to Japanese and Spanish speakers with the same engine,
the same 39-lesson English curriculum and the same practice system as `ko-en`, with the whole interface in the learner's language.
The pipeline built here is reused for the other eleven languages later.

## 1. Decisions (frozen)
1. **Loading.** Pilot packs are inlined by `build.sh` like every other pack (`packs/*.js`). On-demand loading is a separate later release.
2. **Before the native language is known** (sign-in, language home step 1): English plus one second language. The second language is the
   browser language (`navigator.language` prefix) when it is a live native language other than English; otherwise Korean (today's behaviour).
3. **`LL(en, ko)`.** Returns `ko` under the Korean UI; under any other non-English UI it returns the interface pack's translation of `en`
   (exact map, then patterns), falling back to `en`. Every English literal passed to `LL` must therefore be in the interface key list.
4. **Language names** come from `Intl.DisplayNames` in the UI language, falling back to `LANGS[code].name`. Roadmap titles fall back to English
   for UI languages other than Korean (known pilot limitation).
5. **Course ids**: `<native>-en` (`ja-en`, `es-en`). Course state key `la-s-<id>` as today. Nothing about `en-ko` or `ko-en` state or packs may change.
6. **Shared English side.** Lesson ids and order, check answer positions, and every English string in checks and practice (`o`, `a`, `x`, fill `q`)
   match `ko-en` exactly, except where `tools/content/<lang>/deviations.json` lists a lesson or item with a reason. A parity validator enforces it.
7. **Per-language profile** `docs/profiles/<lang>.md` (research) fixes: variant and register, glossary of grammar and interface terms,
   pronunciation aid policy for the card/example `pron` field, the standing practice rule (what every practice set must re-test), and which
   lessons to add, drop or reweight for that language's speakers. Content and interface agents follow it.

## 2. Source layout (pipeline agent owns the generators)
```
tools/content/                 generators: gen.js, validate.js, parity.js, more/_dsl.js, e2e_en.js, link_roadmap.py
tools/content/ko/              Korean-speaker sources (today's decks.js, extra.js, lessons.js, practice.js, more/*.js), moved unchanged
tools/content/<lang>/          same file set per language + profile.json + deviations.json
tools/i18n/                    generators; tools/i18n/keys.json = frozen interface key list (exact strings + pattern ids)
tools/i18n/<lang>/             translations for that language (ko = today's tables, moved unchanged)
packs/course-<lang>-en.js      generated
packs/i18n-<lang>.js           generated
```
`profile.json` per language: `{ "native": "ja", "name": {"en": "English", "<lang>": "…"}, "ttsLang": "en-US", "nativeScript": "<regex source or null>",
"pron": "required" | "optional" | "none", "standingRule": { "keywords": "<regex source>", "kind": "article-plural" | … }, "labels": {…} }`.
Acceptance for the restructure: regenerated `packs/course-ko-en.js` and `packs/i18n-ko.js` are byte-identical to the current files.

## 3. Course pack contract (same shape as ko-en; see docs/MULTILANG-SPEC.md §3 and docs/PRACTICE-SPEC.md)
- `DECKS` cards are `[english, pron, meaning, note]`; `pron` follows the profile's policy. Lesson example rows are `{{ex:English|pron|meaning}}`.
- Explanations, prompts, `why`, `hint`, deck names, group names, descriptions, dialogue translations: in the learner's language, in the profile's register.
- Lessons explain English **from that language's point of view** (contrast with the learner's grammar), not a translation of the Korean explanation.

## 4. Interface pack contract
- Translate every key in `tools/i18n/keys.json`: exact strings and patterns with `{0}`-style slots; plural-sensitive patterns need correct forms at 1 and 2.
- No English left in UI chrome; text must fit the bottom nav and buttons at 390px width.

## 5. Ownership
- Engine agent: only writer of `src/app.html`, `harness.js`, `build.sh`.
- Pipeline agent: only writer of `tools/content/*` generators and `tools/i18n/*` generators, and of the `ko/` moves.
- Research agents: only `docs/profiles/`.
- Content / interface agents (phase 2): only their `tools/content/<lang>/` or `tools/i18n/<lang>/` folder.
- Nobody but the lead commits, pushes, publishes or edits `packs/` by hand.
