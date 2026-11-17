# Build plan: the remaining eight languages → English

Status on 2026-11-17: live courses are en-ko, ko-en, ja-en, es-en, zh-en, vi-en, id-en. Remaining: Portuguese, French, Italian, German, Russian, Hindi, Thai, Arabic.

## Who does what (model split)

| Step | Model | Why |
|---|---|---|
| Plan, tooling, merge, tests, final read and ship decision | Fable (lead) | Owns the English side, the deviations and the release |
| Research profile | Opus | Judgment-heavy; sets the rules every writer follows |
| Lessons: core (B), A1 (C), A2 + B1 (D) | Opus ×3 | Teaching accuracy is where reviewers found real errors |
| Decks, dialogues, metadata (A) | Sonnet | Short phrases to a fixed pattern, checked by validators |
| Interface strings + roadmap titles (I) | Sonnet | ~1,465 short strings with an automatic checker |
| Mechanical checks | Scripts (`validate.js`, `parity.js`, `lint.js`, `pron_check.js`); Haiku only to triage what they flag | A script is cheaper and more reliable than an agent |
| Cold review | Opus | Last independent read before the lead |
| Final sign-off | Fable (lead) | Reads `REVIEW.md`, the language-only lessons and a fixed sample of shared lessons (pron, articles, be, past, questions, countable, perfect, conditionals); resolves the reviewer's "could not fix in scope" list; then ships and logs the decision |

The Sonnet split is an experiment on Portuguese. Measure: the reviewer reports edits per file. Baseline with Opus writers: interface edits 13 / 23 / 56 and roadmap edits 12 / 8 / 11 (zh / vi / id). If Sonnet-written files need clearly more fixes, those parts go back to Opus.

## Order and reference course

| # | Language | Default variety | Built from | Why this order |
|---|---|---|---|---|
| 1 | Portuguese (pt) | Brazilian | Spanish course | Closest to Spanish; tests the Sonnet split |
| 2 | French (fr) | France | Spanish course | Article language, Latin script |
| 3 | Italian (it) | Italy | Spanish course | Same |
| 4 | German (de) | Germany | Spanish course | Article language; word-order notes differ |
| 5 | Russian (ru) | — | Korean course | No articles → article-plural rule; Cyrillic fonts |
| 6 | Hindi (hi) | — | Korean course | No articles; Devanagari fonts and line height |
| 7 | Thai (th) | — | Korean course | No articles; no spaces between words (line breaking) |
| 8 | Arabic (ar) | Modern Standard for the interface | Korean course | Right-to-left layout is engine work; last |

"Built from the Spanish course" means `new_lang.js <lang> --from es`, `profile.reference = "es"`, and parity is checked against es-en. Languages with articles get the Spanish course's English side (verb-core practice rule, false friends, make/do, uncountables, cognates) instead of the article drills written for Korean speakers. Caveat: the Spanish English side has had one agent review and no native-speaker read.

## Per-language steps
1. Profile (Opus) → lead fills `profile.json`, fixes deck names (`DECKNAMES.md`), writes the five briefs.
2. Writers in parallel: A + I on Sonnet, B / C / D on Opus.
3. Lead: merge deviations, `gen` → `validate` → `parity` → `lint`, interface `gen` + `validate`, `road.py check`, build, harness, every lesson end to end, route sweep (tab-bar fit, overflow, leftover English), roadmap previews.
4. Cold review (Opus) with the measured findings from step 3 in its brief.
5. Lead final read and fixes; rerun step 3; site test; ship; publish; log in `iterations.md`.

One language's writers at a time; the next language's profile runs alongside. When agents stop on the usage limit, the lead schedules a resume at the stated reset time.

## Known blockers, by language
- **All**: count patterns have one translation each (no plural forms), so wording must be number-neutral ("Cards: 5"). The language-name slot is filled in the dictionary form, so it must sit where that form is correct (after a colon or at the start).
- **Russian**: three plural forms and six cases make both rules above strict. System font stack (web fonts lack Cyrillic).
- **Hindi, Thai**: system font stacks, taller line height; Thai needs a line-breaking check.
- **Arabic**: right-to-left layout. Prove it with the interface pack alone (tabs, cards, lesson tables, practice tiles, progress charts) before any course content is commissioned.
- **Every non-Latin or accented language**: one phone screenshot from the owner, because web fonts are blocked in the build environment.

## Done before this plan started (2.14.1)
- Shared practice answers fixed once in all six English courses ("I'll get the door" no longer accepted for closing it; natural answers such as "Can you speak English", "I've been living here for three years", "Could I have a sandwich" now accepted).
- Feedback category label split from the quiz "Type" label.
- `tools/content/lint.js`: one shared cross-file lint (same English → same pronunciation aid, missing deck links, practice-set size, K-pop leftovers).
- `new_lang.js --from`, `profile.reference`, parity against a non-Korean reference.

## Cost
Each language is about six agents and roughly 1.5–2 million agent tokens. Three languages hit the 5-hour usage limit twice, so eight will take several limit windows.
