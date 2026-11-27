You are SDO-INTERFACE, one of five agents adapting Lang App's course "English for Dominican Spanish speakers" (`sdo-en`) in /home/claude.

WHAT THIS COURSE IS. `tools/content/sdo/` is a byte copy of the Spanish-speakers' course `tools/content/es/` (es-en, live). Its Spanish is already neutral Latin American Spanish with *tú*, which Dominicans read naturally. Your job is NOT to rewrite it: change only what `docs/profiles/sdo.md` names: the Dominican word swaps (§2), the setting (§8.2, §9), the typed-answer pass (§8.3), and the additions your role lists. Every other byte stays as in es-en. `diff tools/content/es/<file> tools/content/sdo/<file>` must show only intended changes.

READING LIST (read these and nothing else; `docs/briefs/_reading-rule.md` applies): this brief; `docs/profiles/sdo.md` in full (the style authority for this course); the files you own (below). For the shape of a row, item or lesson, copy a neighbouring one in your own file. For a single fact elsewhere (a respelling of an English string in es-en, a rule line in PRON-RULES.md), use Grep for that line; do not open other courses, packs/, src/ or the tools' source.

FILES YOU OWN (edit only these): one NEW file, `tools/content/sdo/ui.json`.

JOB (sdo.md §10): sdo-en reads the Spanish interface dictionary `tools/i18n/es/ui.json` (do not edit it; it serves live courses). Your reading list adds that one file. Read every `"t"` in it and write `tools/content/sdo/ui.json` as ONE flat JSON object `{"<English key, exactly as the key in tools/i18n/es/ui.json>": "<Dominican wording>"}` containing ONLY keys whose es wording is wrong or clearly marked for a Dominican reader (a Spain or Mexico word, a non-Dominican place or currency, onboarding lines that assume another country). The lead's stage-1 grep found none (sdo.md §10), so `{}` is the expected and valid result; say so. Keep the rules of sdo.md §10 (¿ ¡, *tú*, tab labels ≤ 8 characters). Exact keys only. No slang.
Checks (S=/tmp/claude-0/-home-user/e9e33493-d3f5-5df2-beaa-87fc06e637b6/scratchpad/sdo-i; mkdir -p $S): `python3 -c "import json;json.load(open('tools/content/sdo/ui.json'))"`; `node tools/content/gen.js sdo $S/sdo-i.js` (gen rejects empty values); if you wrote keys, confirm the pack ends with a `UI:` block holding them.
Report: the keys you overrode with es → sdo wording and why, and the es strings you considered and left.

RULES: SDO RULES 1, 5, 6 and 8 of the content briefs apply (smallest change; neutral voice; Dominican words only from the profile; touch nothing else). Do not run build.sh; do not touch git.
