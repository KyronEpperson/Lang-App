"""Lead-only. tools/content/mk_briefs.py writes briefs for a course TRANSLATED from es-en into another language ("every Spanish string
is a placeholder", a full interface dictionary). spr-en is es-en adapted for Puerto Rico: most Spanish stays byte-identical. This script
keeps the generator's first line per role and rewrites the rest.
usage (from /home/claude): python3 tools/content/mk_briefs.py spr && python3 tools/content/spr/fix_briefs_spr.py"""
import os
R = os.environ.get('LANGAPP_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..'))
B = os.path.join(R, 'docs', 'briefs')
S = '/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2'

HEAD = """
WHAT THIS COURSE IS. `tools/content/spr/` is a byte copy of the Spanish-speakers' course `tools/content/es/` (es-en, live). Its Spanish is already neutral Latin American Spanish with *tú*, which Puerto Ricans read naturally. Your job is NOT to rewrite it: change only what `docs/profiles/spr.md` names: the Puerto Rican word swaps (§2), the setting (§8.2, §9), the typed-answer pass (§8.3), and the additions your role lists. Every other byte stays as in es-en. `diff tools/content/es/<file> tools/content/spr/<file>` must show only intended changes.

Read first, fully: `docs/profiles/spr.md` (style authority for this course), `docs/briefs/pr-decisions.md` §4, `docs/profiles/es.md` §2–§3 and §7 (the base course's register, glossary and standing rule, which still apply), `docs/PHASE2-BRIEF.md` (its "Deviations" section and last section; its "rewrite every Korean string" rules do NOT apply here), `docs/PRACTICE-SPEC.md`, `docs/PIPELINE.md` §2–§3 and §5, the header comment of `tools/content/more/_dsl.js`, `tools/content/spr/profile.json`.
"""

RULES = f"""
SPR RULES (all roles)
1. Smallest correct change. Reuse es-en text byte-for-byte wherever it is right for a Puerto Rican reader. Do not polish or reword rows the profile does not name; list anything wrong you notice in es-en in your report (it is wrong in the live course too).
2. English side. Any change to an English answer, option, tile, card target, check option or example's English is a DEVIATION: record it in YOUR fragment `tools/content/spr/deviations.<your letter, lower case>.json` (`{{"lessons": {{}}, "items": {{"<id>#<i>": "reason"}}, "decks": {{"<index>": "reason"}}, "extraLessons": []}}`), with the reason "spr.md §8.2 setting", "spr.md §8.3 typed-answer pass", etc. Spanish-only changes need no deviation.
3. Typed-answer pass (spr.md §8.3), for every `type` item in your files: `node tools/content/spr/list_type.js $S/spr-<x>.js --only <your lesson ids>` lists prompt, hint and accepted answers with heuristic flags. Read EVERY item, not only the flagged ones. Fix by cueing the Spanish prompt first (no deviation), and add an English answer only when it is plainly correct English for the prompt (deviation). Full forms of contractions must be accepted in the generated pack.
4. Setting. `node tools/content/spr/scan.js $S/spr-<x>.js` lists English-side rows naming a Latin American home (deviation candidates) and Spanish rows with a word Puerto Rico says differently. Apply spr.md §2 and §8.2. Travel destinations may stay.
5. Politics: never call Puerto Rico a country, state, colony or territory; *Puerto Rico*, *la isla*, *los Estados Unidos* for the mainland.
6. Puerto Rican words only from spr.md §2 / §9 or `docs/profiles/en-espr.md` §10. No slang in explanations.
7. IPA: unchanged rows keep es-en's IPA. New English rows copy the IPA of the same string from es-en (or pt-en) if it exists, else follow `tools/content/es/PRON-RULES.md`. The same English string has one IPA everywhere (lint).
8. Do not touch `profile.json`, `deviations.json`, `BASE.sha1`, the scripts in `tools/content/spr/`, `tools/content/es/`, `tools/i18n/es/`, packs/, src/, generators. Do not run build.sh; do not commit.
9. Checks (S={S}; output name `spr-<your letter>.js`): `node tools/content/gen.js spr $S/spr-<x>.js && node tools/content/validate.js spr $S/spr-<x>.js` (PASS); `node tools/content/parity.js spr $S/spr-<x>.js`: every difference it prints must be one you recorded in your fragment (parity reads only `deviations.json`; the lead merges the fragments into it with `tools/content/merge_deviations.py`); `node tools/content/lint.js spr $S/spr-<x>.js` (0 blocking); `node --check` on every file you edited. Other writers edit other files at the same time: ignore lines about their lessons; if gen fails on someone else's half-written file, wait a minute and retry.
10. Report (concise): files and counts (rows changed, deviations recorded, typed items read / cued / answers added / full forms added), the validator, parity and lint lines about your files, and the Spanish strings a Puerto Rican speaker should check first.
"""

ROLE = {
 'A': ("SPR-CONTENT-A", "`tools/content/spr/decks.js`, `extra.js`, `meta.js`, and your fragment `deviations.a.json`", """JOB
1. Deck 22 (index 22 in pack order) is already renamed **Falsos amigos y spanglish** by the lead (decks.js, meta.js, the `false-friends` link); update its DESC in meta.js to mention Spanglish. Add the 14 Spanglish cards of spr.md §9 (English target | IPA | Spanish meaning | Spanish note) after the existing cards. Record `"decks": {"22": "spr.md §9: renamed; 14 Spanglish cards added"}`. Add at least 4 dialogues and 3 examples for the new cards in extra.js.
2. Setting (spr.md §8.2, §9): deck *Presentarse* «I'm from Mexico.» → «I'm from Puerto Rico.», «I live in Lima.» → «I live in San Juan.» (deviation `decks["1"]`), and their DIALOG / EXAMPLES keys and rows; the dialogues *Where are you from?* and *I love your shoes.* if they name a Latin American home.
3. Spanish word swaps (spr.md §2) in meanings, notes, dialogue and example translations: *auto* → *carro*, *autobús/bus* → *guagua*, prices in *dólares*, places. scan.js lists them.
4. meta.js: the DESC of deck 22; anything naming a Latin American home in GOALS or labels.
Size: about 14 new cards, 7+ new dialogue/example rows, about 40 Spanish rows to check, 2–4 deviations."""),
 'B': ("SPR-CONTENT-B", "`tools/content/spr/lessons.js`, `practice.js`, and your fragment `deviations.b.json`", """JOB (the 12 lessons of lessons.js / practice.js: alphabet, pron, articles, be, polite, tense, prep, smalltalk, phrasal, numbers, email, idioms)
1. Setting (spr.md §8.2): `be` (#5, #8, the ex row), `prep` #4, `tense` #2, `pron` #5 (and #7 only as §8.2 says), plus any check option naming a Latin American home. Spanish text around them.
2. Spanish word swaps (§2) in bodies, prompts, `why`, hints.
3. Typed-answer pass (SPR RULES 3) over every type item in practice.js. practice.js items are NOT expanded by the generator: add the full form of every contraction by hand (deviation "spr.md §8.3").
4. `pron` lesson: you may add, in Spanish, one sentence that Puerto Rican speech often softens a final *s*, so final *-s/-st/-sts* in English needs extra care (spr.md §4.5). No item changes.
Size: about 12 English-side deviations, about 45 typed items to read, about 20 Spanish rows to check."""),
 'C': ("SPR-CONTENT-C", "`tools/content/spr/more/a1.js` and your fragment `deviations.c.json`", """JOB (the 16 lessons of more/a1.js, including `false-friends`)
1. NEW LESSON `spanglish` (spr.md §8.1: body sections, tip, the 14-item practice map and the 3 checks), written in more/a1.js right after `false-friends`, deck «Falsos amigos y spanglish» (deck 22, already renamed by the lead; `false-friends` already links it; writer A adds the 14 Spanglish cards to it). Add `"extraLessons": ["spanglish"]` and `"lessons": {"spanglish": "spr.md §8.1 new lesson"}` to deviations.c.json. The standing rule (verb-core) must hold: the map marks the hits.
2. `false-friends`: keep its English side, except the setting item #8 / check 1 («__, I'm from Mexico.» → «… Puerto Rico.», deviation). Adapt the Spanish only where a Puerto Rican reader needs it (e.g. one line that *aplicar* for a job is heard on the island; in English it is *apply for*).
3. Setting (§8.2): `present` #2, `object-have` #10, `going-to` #0, `irregular-past` only if it names a home (travel may stay), `plurals` / `present` ex rows if they name a home.
4. Spanish word swaps (§2); typed-answer pass (SPR RULES 3) over every type item.
Size: one new lesson (body about 300 words, 14 items, 3 checks), about 6 setting deviations, about 50 typed items to read."""),
 'D': ("SPR-CONTENT-D", "`tools/content/spr/more/a2.js`, `more/b1.js`, and your fragment `deviations.d.json`", """JOB (the 14 lessons of more/a2.js and more/b1.js)
1. Setting (§8.2): only items that name the learner's home or origin (`perfect`, `will` check 2 and `perfect` check 2 if they do); trips abroad stay.
2. Spanish word swaps (§2) in bodies, examples, prompts, `why`, hints.
3. Typed-answer pass (SPR RULES 3) over every type item; `make-do` stays as es-en (*hacer una fiesta* → *have/throw a party* is already the point).
Size: about 2–4 deviations, about 45 typed items to read, about 25 Spanish rows to check."""),
 'I': ("SPR-INTERFACE", "one NEW file, `tools/content/spr/ui.json`", """JOB (spr.md §10): spr-en reads the Spanish interface dictionary `tools/i18n/es/ui.json` (do not edit it; it serves the live es-en and es-ko courses). Read every `"t"` in it and every exact key the course shows a Spanish speaker, and write `tools/content/spr/ui.json` as ONE flat JSON object `{"<English key, exactly as the key in tools/i18n/es/ui.json>": "<Puerto Rican wording>"}` containing ONLY keys whose es wording is wrong or clearly marked for a Puerto Rican reader (a Spain or Mexico word, *auto*, a Latin American place or currency, onboarding lines that assume another country). Expected 0–30 keys. If you find none, write `{}`, say so, and that is a valid result. Keep es.md §10 rules (¿ ¡, *tú*, tab labels ≤ 8 characters). Exact keys only; patterns stay es. Do not add slang.
Checks (S={S}): `python3 -c "import json;json.load(open('tools/content/spr/ui.json'))"`; `node tools/content/gen.js spr $S/spr-i.js` (gen rejects empty values) and confirm the pack ends with a `UI:` block holding your keys.
Report: the keys you overrode with es → spr wording and why, and the es strings you considered and left."""),
}

for r, (who, owns, job) in ROLE.items():
    p = os.path.join(B, 'spr-%s.md' % r); first = open(p, encoding='utf8').read().split('\n')[0]
    first = first.replace('one of five agents writing the Lang App course', 'one of five agents adapting the Lang App course').replace('one of five agents working on', 'one of five agents adapting')
    if r == 'I': first = 'You are SPR-INTERFACE, one of five agents adapting Lang App\'s course "English for Puerto Rican Spanish speakers" (`spr-en`) in /home/claude.'
    txt = first + '\n' + HEAD + '\nFILES YOU OWN (edit only these): ' + owns + '.\n\n' + job.replace('{S}', S) + '\n' + (RULES if r != 'I' else '\nRULES: SPR RULES 1, 5, 6 and 8 of the content briefs apply (smallest change; neutral politics; Puerto Rican words only from the profiles; touch nothing else). Do not run build.sh; do not commit.\n')
    open(p, 'w', encoding='utf8').write(txt)

p = os.path.join(B, 'spr-R.md')
open(p, 'w', encoding='utf8').write(f"""You are SPR-REVIEWER: a cold, native-level Puerto Rican Spanish editor and English teacher reviewing the Lang App course "English for Puerto Rican Spanish speakers" (`spr-en`, /home/claude). Five writers adapted it in parallel from the live es-en course; none saw the others' work. FIX what you find.
{HEAD}
SCOPE
- READ IN FULL: every row that differs from es-en (`for f in decks extra lessons practice meta more/a1 more/a2 more/b1; do diff tools/content/es/$f.js tools/content/spr/$f.js; done`), the new `spanglish` lesson, the 14 Spanglish cards, `tools/content/spr/ui.json`, and the writers' deviation fragments.
- The untouched rest was reviewed as es-en (`tools/content/es/REVIEW.md`): scan it with `node tools/content/spr/scan.js <pack>` for setting and word swaps the writers missed, and run the typed-answer list `node tools/content/spr/list_type.js <pack>` over ALL type items (read every item).
- Look for, in order: (1) wrong teaching or wrong English (a "wrong" Spanglish form that is actually standard English, e.g. *apply to*; a distractor that is correct); (2) a prompt whose natural English answer is not accepted, or a contraction whose full form is not accepted in the generated pack; (3) Spanish that is unnatural or marked for a Puerto Rican reader, slang in explanations, a disrespectful framing of Spanglish; (4) political wording (SPR RULES 5); (5) gender and agreement in edited Spanish; (6) IPA consistency (lint).
- Edit: everything under `tools/content/spr/` except `profile.json`, `deviations.json`, `BASE.sha1` and the scripts. Record any English-side change in `tools/content/spr/deviations.review.json`.
{RULES.split(chr(10)+'3.')[0]}
After merging the fragments (`python3 tools/content/merge_deviations.py spr`, if the lead has not), everything must pass (S={S}): `node tools/content/gen.js spr $S/spr-r.js && node tools/content/validate.js spr $S/spr-r.js && node tools/content/parity.js spr $S/spr-r.js && node tools/content/lint.js spr $S/spr-r.js && node tools/content/alphabet_check.js spr $S/spr-r.js`, and `node --check` on each JS file you touched.

Write `tools/content/spr/REVIEW.md`: what you changed (grouped, before → after), an edit-count table per file, a "for a Puerto Rican speaker" top-ten list, and what you could not fix within scope. Final reply (concise): the table, the PASS lines, the top-ten list.
""")
print('spr briefs fixed: A B C D I R')
