# Phase 2 brief — writing a `<lang>-en` course and interface (read fully before starting)

You are one of several agents working IN PARALLEL on the same language. Each agent owns specific files; never edit a file you do not own.
Do not edit `src/app.html`, `harness.js`, `build.sh`, anything in `packs/`, any generator under `tools/content/*.js`, `tools/content/more/_dsl.js`,
`tools/i18n/*.py|js`, or another language's folder. Do not run `./build.sh`. Do not git commit or push. The shell has no internet; do not install anything.

## Read first (binding)
1. `docs/PILOT-SPEC.md` — contracts.
2. `docs/profiles/<lang>.md` — THE style authority for your language: variant and register (§2), glossary (§3 — use these terms consistently),
   error zones (§4), pronunciation-aid rules (§6), standing practice rule (§7), per-lesson notes (§8), localisation (§9), interface wording (§10).
3. `docs/PRACTICE-SPEC.md` — practice item formats. `docs/PIPELINE.md` — commands and what the validators enforce.
4. `tools/content/<lang>/profile.json` and `deviations.json` are filled in by the lead — read them, do not edit them.

## What the files are
`tools/content/<lang>/` and `tools/i18n/<lang>/ui.json` were scaffolded as COPIES of the Korean-speaker course. Every Korean string is a
placeholder for text in your language. The English side (lesson ids, card targets, English example sentences, check options and answer
positions, practice `o` / `a` / `x` and fill `q`) is shared across languages and must stay identical unless the profile calls for a change.

## Rules for content
- Write for speakers of your language: explain English by contrast with THEIR grammar and habits (profile §4 and §8). Do not translate the Korean
  explanation where it argues from Korean ("한국어에는 관사가 없어서…" → whatever is true for your language). Keep each lesson about the same length.
- Register and terminology exactly as the profile says. Natural, idiomatic, error-free prose — a native speaker will read it.
- `pron` fields (cards and `{{ex:English|pron|meaning}}` rows): follow profile §6 exactly; the validator checks the policy (and `pronPattern` when set).
- Practice items: prompts (`q`, `p`), `why`, `hint` in your language; answers in English. The standing rule in `profile.json` must hold for every
  lesson's set (see PIPELINE.md / profile §7 for what "hinge" means and which keywords the `why` must contain).
- Localise per profile §9 where it says to; otherwise leave names and places as they are (no deviation needed for translated prompts — only the
  ENGLISH side is compared).
- No Korean characters may remain in your files when you finish (check with a grep for `[가-힣ㄱ-ㅎㅏ-ㅣ]`), and remove the TRANSLATE/ADAPT banner.
- JS syntax: the sources are JS modules; lesson bodies are template literals — never put a backtick or `${` inside a body. The stage files
  `more/*.js` use a shorthand expanded by `tools/content/more/_dsl.js` (read its header comment): `['mc', q, correct, wrong1, wrong2, wrong3, why]`,
  `['or', p, 'tiles in order', 'distractor tiles', why]`, `['fi', q, p, 'a|a2', 'o1|o2|o3', why]`, `['ty', p, 'a|a2', hint, 'x1 x2', why]`.

## Deviations (changes to the English side)
If the profile requires changing English content (a different example, a reworked practice set, an added or dropped lesson), make the change and record it
in YOUR OWN fragment file `tools/content/<lang>/deviations.<part>.json` (same shape as deviations.json: `{"lessons": {"<id>": "reason"},
"items": {"<lessonId>#<index>": "reason"}, "decks": {"<deck index or name>": "reason"}}`). The lead merges fragments. A lesson-level entry covers
that lesson's whole check and practice set. Keep deviations to what the profile justifies.

## Checking your work
Generate to a scratch path and validate (other agents' files may still be Korean or mid-edit — ignore failures that are not about your files; if
generation fails on a syntax error in someone else's file, wait a minute and retry):
```
S=/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2
node tools/content/gen.js <lang> $S/<lang>-<part>.js && node tools/content/validate.js <lang> $S/<lang>-<part>.js | grep -i "<your ids / deck names>"
node tools/content/parity.js <lang> $S/<lang>-<part>.js      # run with your fragment merged into a scratch copy if you have deviations
node --check <each file you edited>
```
Then proofread everything once more as a native-speaker editor would: grammar, register consistency, glossary terms, pron rules.

## Report back (concise)
Files written, counts (lessons / items / cards / keys), validator lines that still mention your files (should be none) and why, every deviation
you recorded with its reason, and a list of specific strings you are unsure about so a reviewer can check them.


## Added 2026-11-17: recurring problems every writer must avoid (found by three cold reviews)
- **Leftover notes from the source course.** Card notes and explanations written for Korean (or Spanish) speakers must be rewritten, not translated: the "What's up?" note, notes about sounds the source language lacks, notes that mention Hangul, Konglish or Spanish spelling.
- **K-pop and source-country references** in dialogues and examples (BTS, Jimin, bias, K-dramas, Gangnam, Seoul National University; Lima, Madrid for es-based courses): localise per profile §9. Shared practice items keep their English as is.
- **Three teaching errors that were copied three times** — do not reintroduce them: (1) "does the sentence have an action? → do/does" (fails for like/live/want; ask "is there another verb besides be?"); (2) "any in questions" without the request/offer exception (*Can I have some water?*); (3) an -ing heading that says "things you are doing or enjoy" over *finish* and *mind*.
- **Prompts must lead to an accepted answer.** If your prompt could naturally be answered with a sentence that is not in the accepted list, make the prompt more specific (add a cue such as "(use enjoy)"); do not change the accepted list of a shared item.
- **Tab-bar labels** (interface writer): seven labels share a 390px bar; each ≤ 8 characters, the two longest are checked by the lead in a real layout.
- **Count patterns have ONE translation each** (no plural forms): word them so any number reads correctly ("Cards: {1}"). **Language-name slots** are filled with the dictionary form of the language name: put the slot at the start or after a colon so no case ending or article is needed.
- **Reference course.** If `profile.json` has `"reference": "es"`, your files were scaffolded from the Spanish-speakers' course: everything Spanish is a placeholder, parity compares your English side with es-en, and "Korean" in the older sections of this brief means "Spanish" for you.
- The lead runs `node tools/content/lint.js <lang>` after merging: the same English text must carry the same pronunciation aid in every file. Agree with the profile's §6 key rather than inventing variants.
