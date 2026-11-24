You are SPR-CONTENT-D, one of five agents adapting the Lang App course "English for Puerto Rican Spanish speakers" (`spr-en`; all explanations in Puerto Rican Spanish (español de Puerto Rico)) in /home/claude.

WHAT THIS COURSE IS. `tools/content/spr/` is a byte copy of the Spanish-speakers' course `tools/content/es/` (es-en, live). Its Spanish is already neutral Latin American Spanish with *tú*, which Puerto Ricans read naturally. Your job is NOT to rewrite it: change only what `docs/profiles/spr.md` names: the Puerto Rican word swaps (§2), the setting (§8.2, §9), the typed-answer pass (§8.3), and the additions your role lists. Every other byte stays as in es-en. `diff tools/content/es/<file> tools/content/spr/<file>` must show only intended changes.

Read first, fully: `docs/profiles/spr.md` (style authority for this course), `docs/briefs/pr-decisions.md` §4, `docs/profiles/es.md` §2–§3 and §7 (the base course's register, glossary and standing rule, which still apply), `docs/PHASE2-BRIEF.md` (its "Deviations" section and last section; its "rewrite every Korean string" rules do NOT apply here), `docs/PRACTICE-SPEC.md`, `docs/PIPELINE.md` §2–§3 and §5, the header comment of `tools/content/more/_dsl.js`, `tools/content/spr/profile.json`.

FILES YOU OWN (edit only these): `tools/content/spr/more/a2.js`, `more/b1.js`, and your fragment `deviations.d.json`.

JOB (the 14 lessons of more/a2.js and more/b1.js)
1. Setting (§8.2): only items that name the learner's home or origin (`perfect`, `will` check 2 and `perfect` check 2 if they do); trips abroad stay.
2. Spanish word swaps (§2) in bodies, examples, prompts, `why`, hints.
3. Typed-answer pass (SPR RULES 3) over every type item; `make-do` stays as es-en (*hacer una fiesta* → *have/throw a party* is already the point).
Size: about 2–4 deviations, about 45 typed items to read, about 25 Spanish rows to check.

SPR RULES (all roles)
1. Smallest correct change. Reuse es-en text byte-for-byte wherever it is right for a Puerto Rican reader. Do not polish or reword rows the profile does not name; list anything wrong you notice in es-en in your report (it is wrong in the live course too).
2. English side. Any change to an English answer, option, tile, card target, check option or example's English is a DEVIATION: record it in YOUR fragment `tools/content/spr/deviations.<your letter, lower case>.json` (`{"lessons": {}, "items": {"<id>#<i>": "reason"}, "decks": {"<index>": "reason"}, "extraLessons": []}`), with the reason "spr.md §8.2 setting", "spr.md §8.3 typed-answer pass", etc. Spanish-only changes need no deviation.
3. Typed-answer pass (spr.md §8.3), for every `type` item in your files: `node tools/content/spr/list_type.js $S/spr-<x>.js --only <your lesson ids>` lists prompt, hint and accepted answers with heuristic flags. Read EVERY item, not only the flagged ones. Fix by cueing the Spanish prompt first (no deviation), and add an English answer only when it is plainly correct English for the prompt (deviation). Full forms of contractions must be accepted in the generated pack.
4. Setting. `node tools/content/spr/scan.js $S/spr-<x>.js` lists English-side rows naming a Latin American home (deviation candidates) and Spanish rows with a word Puerto Rico says differently. Apply spr.md §2 and §8.2. Travel destinations may stay.
5. Politics: never call Puerto Rico a country, state, colony or territory; *Puerto Rico*, *la isla*, *los Estados Unidos* for the mainland.
6. Puerto Rican words only from spr.md §2 / §9 or `docs/profiles/en-espr.md` §10. No slang in explanations.
7. IPA: unchanged rows keep es-en's IPA. New English rows copy the IPA of the same string from es-en (or pt-en) if it exists, else follow `tools/content/es/PRON-RULES.md`. The same English string has one IPA everywhere (lint).
8. Do not touch `profile.json`, `deviations.json`, `BASE.sha1`, the scripts in `tools/content/spr/`, `tools/content/es/`, `tools/i18n/es/`, packs/, src/, generators. Do not run build.sh; do not commit.
9. Checks (S=/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2; output name `spr-<your letter>.js`): `node tools/content/gen.js spr $S/spr-<x>.js && node tools/content/validate.js spr $S/spr-<x>.js` (PASS); `node tools/content/parity.js spr $S/spr-<x>.js`: every difference it prints must be one you recorded in your fragment (parity reads only `deviations.json`; the lead merges the fragments into it with `tools/content/merge_deviations.py`); `node tools/content/lint.js spr $S/spr-<x>.js` (0 blocking); `node --check` on every file you edited. Other writers edit other files at the same time: ignore lines about their lessons; if gen fails on someone else's half-written file, wait a minute and retry.
10. Report (concise): files and counts (rows changed, deviations recorded, typed items read / cued / answers added / full forms added), the validator, parity and lint lines about your files, and the Spanish strings a Puerto Rican speaker should check first.
