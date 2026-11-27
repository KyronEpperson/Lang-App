"""Lead-only. tools/content/mk_briefs.py writes briefs for a course TRANSLATED from es-en into another language ("every Spanish string
is a placeholder", a full interface dictionary). sdo-en is es-en adapted for Dominican learners: most Spanish stays byte-identical. This
script keeps the generator's first line per role and rewrites the rest (adapted from tools/content/spr/fix_briefs_spr.py).
usage (from /home/claude): python3 tools/content/mk_briefs.py sdo && python3 tools/content/sdo/fix_briefs_sdo.py"""
import os
R = os.environ.get('LANGAPP_ROOT') or os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..'))
B = os.path.join(R, 'docs', 'briefs')
SB = '/tmp/claude-0/-home-user/e9e33493-d3f5-5df2-beaa-87fc06e637b6/scratchpad/sdo-'

HEAD = """
WHAT THIS COURSE IS. `tools/content/sdo/` is a byte copy of the Spanish-speakers' course `tools/content/es/` (es-en, live). Its Spanish is already neutral Latin American Spanish with *tú*, which Dominicans read naturally. Your job is NOT to rewrite it: change only what `docs/profiles/sdo.md` names: the Dominican word swaps (§2), the setting (§8.2, §9), the typed-answer pass (§8.3), and the additions your role lists. Every other byte stays as in es-en. `diff tools/content/es/<file> tools/content/sdo/<file>` must show only intended changes.

READING LIST (read these and nothing else; `docs/briefs/_reading-rule.md` applies): this brief; `docs/profiles/sdo.md` in full (the style authority for this course); the files you own (below). For the shape of a row, item or lesson, copy a neighbouring one in your own file. For a single fact elsewhere (a respelling of an English string in es-en, a rule line in PRON-RULES.md), use Grep for that line; do not open other courses, packs/, src/ or the tools' source.
"""

RULES = """
SDO RULES (all roles)
1. Smallest correct change. Reuse es-en text byte-for-byte wherever it is right for a Dominican reader. Do not polish or reword rows the profile does not name; list anything wrong you notice in es-en in your report (it is wrong in the live course too).
2. English side. Any change to an English answer, option, tile, card target, check option or example's English is a DEVIATION: record it in YOUR fragment `tools/content/sdo/deviations.<your letter, lower case>.json` (`{{"lessons": {{}}, "items": {{"<id>#<i>": "reason"}}, "decks": {{"<index>": "reason"}}, "extraLessons": []}}`), with the reason "sdo.md §8.2 setting", "sdo.md §8.3 typed-answer pass", etc. Spanish-only changes need no deviation.
3. Typed-answer pass (sdo.md §8.3), for every `type` item in your files: `node tools/content/sdo/list_type.js $S/sdo-<x>.js --only <your lesson ids>` lists prompt, hint and accepted answers with heuristic flags. Read EVERY item, not only the flagged ones. Fix by cueing the Spanish prompt first (no deviation), and add an English answer only when it is plainly correct English for the prompt (deviation). Full forms of contractions must be accepted in the generated pack.
4. Setting. `node tools/content/sdo/scan.js $S/sdo-<x>.js` lists English-side rows naming a non-Dominican home (deviation candidates), Spanish rows with a word the DR says differently, and FORBID rows (Mexico- or Spain-only words; must be 0 in your files). Apply sdo.md §2 and §8.2. Travel destinations stay.
5. Voice: neutral and respectful. Dominican words that came from English are normal Dominican Spanish, never "errors" or "mal dicho". No slang in explanations, no class labels, nothing vulgar, no politics.
6. Dominican words only from sdo.md §2 / §9 or the sources it lists. Never a word sdo.md tags [unsourced] or "left out".
7. Pron: unchanged rows keep es-en's respelling. New English rows copy the respelling of the same string from es-en if it exists (Grep `tools/content/es/`), else follow `tools/content/es/PRON-RULES.md` (Grep the rule you need). The same English string has one respelling everywhere (lint).
8. Do not touch `profile.json`, `deviations.json`, `BASE.sha1`, the scripts in `tools/content/sdo/`, `tools/content/es/`, `tools/i18n/es/`, packs/, src/, generators. Never edit the `alphabet` lesson's `{{{{tiles:…}}}}` lines or its spelling-patterns section (they must stay byte-identical to es-en; `alphabet_check.js` checks them). Do not run build.sh; do not touch git.
9. Checks (S={S}; `mkdir -p $S` first; output name `sdo-<your letter>.js`): `node tools/content/gen.js sdo $S/sdo-<x>.js && node tools/content/validate.js sdo $S/sdo-<x>.js` (PASS); `node tools/content/parity.js sdo $S/sdo-<x>.js`: every difference it prints must be one you recorded in your fragment (parity reads only `deviations.json`; the lead merges the fragments with `tools/content/merge_deviations.py`); `node tools/content/lint.js sdo $S/sdo-<x>.js` (0 blocking); `node tools/content/alphabet_check.js sdo $S/sdo-<x>.js` (PASS); `node --check` on every JS file you edited. Other writers edit other files at the same time: ignore lines about their lessons; if gen fails on someone else's half-written file, wait a minute and retry.
10. Report (concise): files and counts (rows changed, deviations recorded, typed items read / cued / answers added / full forms added), the validator, parity, lint and alphabet lines about your files, and the Spanish strings a Dominican speaker should check first.
"""

ROLE = {
 'A': ("SDO-CONTENT-A", "`tools/content/sdo/decks.js`, `extra.js`, `meta.js`, and your fragment `deviations.a.json`", """JOB
1. Deck 22 (index 22 in pack order) is already renamed **Falsos amigos y dominicanismos** by the lead (decks.js, meta.js, the `false-friends` link); update its DESC in meta.js to mention the Dominican words (e.g. «… Y palabras dominicanas que vienen del inglés: jonrón, yipeta, conflé»). Add the 14 cards of sdo.md §9 (English target | respelling | Spanish meaning | Spanish note) after the existing cards. Record `"decks": {"22": "sdo.md §9: renamed; 14 dominicanismo cards added"}`. Add at least 4 dialogues and 3 examples for the new cards in extra.js (DR and US scenes).
2. Setting (sdo.md §8.2): deck *Presentarse* «I'm from Mexico.» → «I'm from the Dominican Republic.» (its note says English needs *the*, sdo.md §4.7), «I live in Lima.» → «I live in Santo Domingo.» (deviation `decks["1"]`), and their DIALOG / EXAMPLES keys and rows; the dialogues *Where are you from?* (→ the Dominican Republic, Santiago) and *I love your shoes.* (→ New York).
3. Spanish word swaps (sdo.md §2) in meanings, notes, dialogue and example translations: *auto* → *carro*, *autobús/bus* → *guagua*, *frijoles* → *habichuelas*, prices in pesos (DR) or dólares (US), places. The FORBID row in the *end up* card note: "a taco place" → "a pizza place" (sdo.md §9; note text, no deviation).
4. meta.js: the DESC of deck 22; anything naming a non-Dominican home in GOALS or labels.
Size (stage-1 scan): 14 new cards, 7+ new dialogue/example rows, 4 English-side rows, 14 Spanish rows to check, 1 FORBID row, 2–4 deviations."""),
 'B': ("SDO-CONTENT-B", "`tools/content/sdo/lessons.js`, `practice.js`, and your fragment `deviations.b.json`", """JOB (the 12 lessons of lessons.js / practice.js: alphabet, pron, articles, be, polite, tense, prep, smalltalk, phrasal, numbers, email, idioms)
1. Setting (sdo.md §8.2): `be` (ex row, #5, #8, check 1), `prep` #4, `pron` #5; `pron` #7, `pron` ex and `tense` #2 stay. Spanish text around them.
2. Spanish word swaps (§2) in bodies, prompts, `why`, hints.
3. Typed-answer pass (SDO RULES 3) over every type item in practice.js. practice.js items are NOT expanded by the generator: add the full form of every contraction by hand (deviation "sdo.md §8.3").
4. `pron` lesson: you may add, in Spanish, up to two sentences (sdo.md §4.1, §4.4): Dominican speech often softens a final *s*, so English final *-s/-st/-sts* needs extra care; and a final *n* said like *ng* can blur *thin / thing*. No item changes.
5. `alphabet`: leave its `{{tiles:…}}` lines and spelling-patterns section exactly as they are.
Size (stage-1 scan): 9 English-side rows (6 to change), 15 Spanish rows to check, 36 typed items to read (8 flagged)."""),
 'C': ("SDO-CONTENT-C", "`tools/content/sdo/more/a1.js` and your fragment `deviations.c.json`", """JOB (the 16 lessons of more/a1.js, including `false-friends`)
1. NEW LESSON `dominicanismos` (sdo.md §8.1: body sections, tip, the 14-item practice map and the 3 checks), written in more/a1.js right after `false-friends`, deck «Falsos amigos y dominicanismos» (deck 22, already renamed by the lead; `false-friends` already links it; writer A adds the 14 cards to it). Copy the shape of `false-friends` (fields, `{{ex:English|pron|español}}` rows, practice and checks). Add `"extraLessons": ["dominicanismos"]` and `"lessons": {"dominicanismos": "sdo.md §8.1 new lesson"}` to deviations.c.json. The standing rule (verb-core) must hold: the map marks the hits.
2. `false-friends`: keep its English side, except the setting rows of §8.2 (ex row, #8, check 1; deviations). Adapt the Spanish only where a Dominican reader needs it.
3. Setting (§8.2): `plurals` ex, `present` ex and #2, `object-have` #10, `going-to` #0 and ex. `irregular-past` stays (travel).
4. `questions`: you may add, in Spanish only, one line: *¿Qué tú quieres?* → *What do you want?* (sdo.md §4.3). No item change.
5. Spanish word swaps (§2); typed-answer pass (SDO RULES 3) over every type item.
Size (stage-1 scan): one new lesson (body about 300 words, 14 items, 3 checks), 12 English-side rows (about 9 to change), 32 Spanish rows to check, 49 typed items to read (17 flagged)."""),
 'D': ("SDO-CONTENT-D", "`tools/content/sdo/more/a2.js`, `more/b1.js`, and your fragment `deviations.d.json`", """JOB (the 14 lessons of more/a2.js and more/b1.js)
1. Setting (§8.2): `perfect-2` ex (→ New York). Trips abroad and goods made in Mexico stay (`perfect`, `make-do`, `passive`, `will` check 2, `perfect` check 2).
2. `articles-2`: you may add one Spanish sentence: *the Dominican Republic*, like *the United States*, takes *the* (sdo.md §4.7). No item change.
3. Spanish word swaps (§2) in bodies, examples, prompts, `why`, hints.
4. Typed-answer pass (SDO RULES 3) over every type item; `make-do` stays as es-en.
Size (stage-1 scan): 14 English-side rows (1 to change), 22 Spanish rows to check, 42 typed items to read (12 flagged)."""),
 'I': ("SDO-INTERFACE", "one NEW file, `tools/content/sdo/ui.json`", """JOB (sdo.md §10): sdo-en reads the Spanish interface dictionary `tools/i18n/es/ui.json` (do not edit it; it serves live courses). Your reading list adds that one file. Read every `"t"` in it and write `tools/content/sdo/ui.json` as ONE flat JSON object `{"<English key, exactly as the key in tools/i18n/es/ui.json>": "<Dominican wording>"}` containing ONLY keys whose es wording is wrong or clearly marked for a Dominican reader (a Spain or Mexico word, a non-Dominican place or currency, onboarding lines that assume another country). The lead's stage-1 grep found none (sdo.md §10), so `{}` is the expected and valid result; say so. Keep the rules of sdo.md §10 (¿ ¡, *tú*, tab labels ≤ 8 characters). Exact keys only. No slang.
Checks (S={S}; mkdir -p $S): `python3 -c "import json;json.load(open('tools/content/sdo/ui.json'))"`; `node tools/content/gen.js sdo $S/sdo-i.js` (gen rejects empty values); if you wrote keys, confirm the pack ends with a `UI:` block holding them.
Report: the keys you overrode with es → sdo wording and why, and the es strings you considered and left."""),
}

for r, (who, owns, job) in ROLE.items():
    p = os.path.join(B, 'sdo-%s.md' % r); first = open(p, encoding='utf8').read().split('\n')[0]
    first = first.replace('one of five agents writing the Lang App course', 'one of five agents adapting the Lang App course').replace('one of five agents working on', 'one of five agents adapting')
    if r == 'I': first = 'You are SDO-INTERFACE, one of five agents adapting Lang App\'s course "English for Dominican Spanish speakers" (`sdo-en`) in /home/claude.'
    S = SB + r.lower()
    txt = first + '\n' + HEAD + '\nFILES YOU OWN (edit only these): ' + owns + '.\n\n' + job.replace('{S}', S) + '\n' + (RULES.format(S=S) if r != 'I' else '\nRULES: SDO RULES 1, 5, 6 and 8 of the content briefs apply (smallest change; neutral voice; Dominican words only from the profile; touch nothing else). Do not run build.sh; do not touch git.\n')
    open(p, 'w', encoding='utf8').write(txt)

S = SB + 'r'
p = os.path.join(B, 'sdo-R.md')
open(p, 'w', encoding='utf8').write(f"""You are SDO-REVIEWER: a cold, native-level Dominican Spanish editor and English teacher reviewing the Lang App course "English for Dominican Spanish speakers" (`sdo-en`, /home/claude). Five writers adapted it in parallel from the live es-en course; none saw the others' work. FIX what you find.
{HEAD}
Your reading list adds: the diff against es-en (below), the writers' deviation fragments, `tools/content/sdo/ui.json`, and `tools/content/es/REVIEW.md` (what the base review already covered).

SCOPE
- READ IN FULL: every row that differs from es-en (`for f in decks extra lessons practice meta more/a1 more/a2 more/b1; do diff tools/content/es/$f.js tools/content/sdo/$f.js; done`), the new `dominicanismos` lesson, the 14 new cards in deck 22, `tools/content/sdo/ui.json`, and the writers' deviation fragments.
- The untouched rest was reviewed as es-en: scan it with `node tools/content/sdo/scan.js <pack> --strict` for setting and word swaps the writers missed (0 FORBID), and run `node tools/content/sdo/list_type.js <pack>` over ALL type items (read every item).
- Look for, in order: (1) wrong teaching or wrong English (a "wrong" option that is actually correct English; a brand name taught as the general word); (2) a prompt whose natural English answer is not accepted, or a contraction whose full form is not accepted in the generated pack; (3) Spanish that is unnatural or marked for a Dominican reader, slang in explanations, a disrespectful framing of Dominican words, a word sdo.md left out or tagged [unsourced]; (4) gender and agreement in edited Spanish; (5) respelling consistency (lint); (6) any change to the `alphabet` lesson's tiles or spelling-patterns section (revert it).
- Edit: everything under `tools/content/sdo/` except `profile.json`, `deviations.json`, `BASE.sha1` and the scripts. Record any English-side change in `tools/content/sdo/deviations.review.json`.
{RULES.format(S=S).split(chr(10)+'3.')[0]}
After merging the fragments (`python3 tools/content/merge_deviations.py sdo`, if the lead has not), everything must pass (S={S}; mkdir -p $S): `node tools/content/gen.js sdo $S/sdo-r.js && node tools/content/validate.js sdo $S/sdo-r.js && node tools/content/parity.js sdo $S/sdo-r.js && node tools/content/lint.js sdo $S/sdo-r.js && node tools/content/alphabet_check.js sdo $S/sdo-r.js && node tools/content/sdo/scan.js $S/sdo-r.js --strict`, and `node --check` on each JS file you touched.

Write `tools/content/sdo/REVIEW.md`: what you changed (grouped, before → after), an edit-count table per file, a "for a Dominican speaker" top-ten list, and what you could not fix within scope. Final reply (concise): the table, the PASS lines, the top-ten list.
""")
print('sdo briefs fixed: A B C D I R')
