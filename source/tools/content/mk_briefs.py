"""Writes docs/briefs/<lang>-{A,B,C,D,I,R}.md for a course scaffolded from the Spanish course (profile.reference = es).
usage: python3 tools/content/mk_briefs.py <lang>      (reads docs/briefs/<lang>.json)
<lang>.json: {"LANG": "French", "NATIVE": "French of France (fr-FR)", "UP": "FR", "register": "...", "pron": "...", "kw": "...",
              "a_extra": "...", "b_extra": "...", "c_extra": "...", "d_extra": "...", "i_extra": "...", "r_extra": "..."}
Also (once, by hand): tools/content/<lang>/profile.json, DECKNAMES.md and deviations.p.json from the profile."""
import json, sys, os
L = sys.argv[1]; R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))); C = json.load(open(os.path.join(R, 'docs', 'briefs', L + '.json'), encoding='utf8'))
S = '/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2'; UP = C['UP']; LANG = C['LANG']; NAT = C['NATIVE']
def head(part): return f"""You are {UP}-{part}, one of five agents writing the Lang App course "English for {LANG} speakers" (`{L}-en`; all explanations in {NAT}) in /home/claude.

This course is built from the SPANISH-speakers' course: `tools/content/{L}/` was scaffolded from `tools/content/es/`, `profile.json` has `"reference": "es"`, and the parity check compares {L}-en's English side with es-en's. Every Spanish string in your files is a placeholder to rewrite in {LANG}.

Read first, fully: `/home/claude/docs/PHASE2-BRIEF.md` (follow it exactly with `<lang>` = `{L}`; where its older sections say "Korean", read "Spanish"; its last section lists recurring problems you must avoid), `docs/profiles/{L}.md` (the style authority: §2 variant and register — {C['register']}; §3 glossary; §4 error zones; §6 pron — {C['pron']}; §7 standing rule verb-core with keywords {C['kw']}; §8 the lesson table and item maps; §9 localisation and decks; §10 interface), `docs/PRACTICE-SPEC.md`, `docs/PILOT-SPEC.md`, `docs/PIPELINE.md`, the header comment of `tools/content/more/_dsl.js`, `tools/content/{L}/profile.json`, `tools/content/{L}/DECKNAMES.md` (FINAL deck names in pack order — use them verbatim, including in every `deck:"…"` link: map each Spanish deck name to the name at the same index) and `tools/content/{L}/deviations.p.json` (the lead's list of every English-side change the profile allows — make exactly those changes in the files you own and no others; you do not need to record them again). The Portuguese course (`tools/content/pt/`, finished and reviewed, also built from the Spanish course, same IPA conventions: `tools/content/pt/PRON-RULES.md` if present, else `tools/content/zh/PRON-RULES.md`) is the closest example: for English strings that are unchanged from the Spanish course, COPY the IPA from the Portuguese course's same card or row so all courses agree.

`nativeScript` is null (Latin script), so native text is only checked as "non-empty and different from the English", and prompts/hints are recognised by `labels.cueTest`. Write every multiple-choice question and type hint so it contains real {LANG} words; otherwise the DSL silently appends a cue.

"""
def tail(n): return f"""

Other agents own the other files; they will still be Spanish while you work — ignore validator lines about them. Check your work exactly as PHASE2-BRIEF "Checking your work" says (scratch dir `{S}`, output name `{L}-{n}.js`; run parity as `node tools/content/parity.js {L} <your scratch pack>`; also `node tools/content/lint.js {L} <your scratch pack>`). No Spanish may remain in your files (search for ¿ ¡ ñ and common Spanish words); remove the TRANSLATE/ADAPT banners. Do not run build.sh; do not commit.

Report back as the brief says, plus specific strings a native speaker should double-check."""
P = {}
P['A'] = head('CONTENT-A') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/decks.js`, `tools/content/{L}/extra.js`, `tools/content/{L}/meta.js`, and (only if you must record something not already in deviations.p.json) `tools/content/{L}/deviations.a.json`.

YOUR JOB
1. decks.js, extra.js: replace every Spanish string (deck names, meanings, notes, dialogue/example translations, idiom equivalents, pause-set labels) with {LANG}, and replace every Spanish-letter respelling with the pron the profile sets (cards, idioms — every pron must match `pronPattern`). Keep the English side identical to the Spanish course except the changes profile §9 lists and deviations.p.json covers — follow the profile's card-by-card maps. Localise dialogues and examples per §9. Rewrite notes for {LANG} speakers; never translate a note that reasons from Spanish.
2. Rename all 25 decks to DECKNAMES in the same order.
3. meta.js: GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS, TITLES, PAUSE_LABELS in {LANG} using the final deck names.
{C.get('a_extra','')}""" + tail('a')
P['B'] = head('CONTENT-B') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/lessons.js`, `tools/content/{L}/practice.js`, and (only if needed) `tools/content/{L}/deviations.b.json`.

YOUR JOB: rewrite every Spanish string in both files into {LANG} — lesson titles, blurbs, bodies (explain English by contrast with {LANG} per profile §4/§8, not by translating the Spanish argument), `{{{{ex:English|pron|meaning}}}}` rows, check questions and explanations, practice prompts/`why`/`hint`. Keep the English side identical to the Spanish course EXCEPT what profile §8 changes in the lessons you own (the `pron` lesson item map; the technical check-option fixes listed in deviations.p.json). The standing rule (verb-core) must hold for every practice set you own.
{C.get('b_extra','')}""" + tail('b')
P['C'] = head('CONTENT-C') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/more/a1.js` and (only if needed) `tools/content/{L}/deviations.c.json`.

YOUR JOB: rewrite every Spanish string in more/a1.js into {LANG} — titles, blurbs, bodies (explain by contrast with {LANG} per §4/§8; mind the lessons the profile marks "adapt"), example rows, checks, practice shorthand prompts/`why`/hints. Keep the English side identical to the Spanish course EXCEPT the `false-friends` lesson, which profile §8 rebuilds with {LANG}–English false friends (follow its item-by-item map exactly; it links to the false-friends deck named in DECKNAMES). The standing rule must hold for every practice set.
{C.get('c_extra','')}""" + tail('c')
P['D'] = head('CONTENT-D') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/more/a2.js`, `tools/content/{L}/more/b1.js` and `tools/content/{L}/deviations.d.json` (only if needed).

YOUR JOB: rewrite every Spanish string in both files into {LANG} — titles, blurbs, bodies (explain by contrast with {LANG} per §4/§8), example rows, checks, practice shorthand prompts/`why`/hints. Keep the English side identical to the Spanish course (`make-do` included, unless the profile says otherwise). The standing rule must hold for every practice set.
{C.get('d_extra','')}""" + tail('d')
P['I'] = f"""You are {UP}-INTERFACE, one of five agents working on Lang App's course "English for {LANG} speakers" (`{L}-en`) in /home/claude. You translate the app INTERFACE into {NAT}. Read first: `/home/claude/docs/PHASE2-BRIEF.md` (general rules and, in its last section, the count-pattern and language-name-slot rules), `docs/profiles/{L}.md` §2 (register: {C['register']}), §3 (glossary incl. UI terms) and §10 (interface wording rules, counters, formats, the seven tab-bar labels each ≤ 8 characters, language-name slots, UI glossary), `docs/PIPELINE.md` §4 (interface pipeline, slot tokens), and look at `tools/i18n/pt/ui.json` and `tools/i18n/es/ui.json` as finished examples of the same job.

FILES YOU OWN (edit only these): `/home/claude/tools/i18n/{L}/ui.json` and `/home/claude/tools/i18n/{L}/roadmap.json`.

JOB 1 — ui.json: every exact key and pattern template is scaffolded with `"t": ""` plus reference fields (Korean text, context, slots, example). Fill every `"t"` with natural, concise {LANG}; change nothing else. Use the pt and es files to understand intent — legacy English keys that say "Korean"/"Hangul"/"romanization" mean "English"/"pronunciation aid" for this course. The key `Type` is the verb for typing an answer (it labels the quiz chip `⌨️ … EN`), `Category` is the feedback category label. Pattern translations use `{{1}}`…`{{k}}` for the template's slots in the order the reference shows; keep every slot exactly once unless pt/es show it can be dropped. Count slots: ONE wording that reads correctly for 0, 1 and many. Language-name slots are filled with the dictionary form of the language name from the profile: word the sentence so that form is correct there. Keep leading/trailing punctuation and spacing of fragments, emoji and symbols. Weekday headers must be at most three letters.
{C.get('i_extra','')}
Checks (run from /home/claude; scratch output so live packs are untouched): `python3 tools/i18n/gen.py {L} {S}/i18n-{L}.js && node tools/i18n/validate.js {L} {S}/i18n-{L}.js` must end with PASS and report every key translated.

JOB 2 — roadmap.json: 425 entries under "road": {{"<English string>": {{"t": "", "ko": …, "kind": "lesson title|stage|variant|basis", "roadmap": code}}}}. Fill every "t" in {LANG}: short planned-lesson titles and stage names for courses teaching 15 languages, using the profile's grammar terms; keep quoted target-language words exactly (e.g. 감사합니다, は/が, ser/estar); textbook/framework names in their usual form; no trailing period on titles; no HTML or newlines. Check: `python3 tools/i18n/road.py check {L}` must exit 0. Do NOT run `road.py new` or `new_lang.py`. Work in your own scratch subfolder `{S}/{L}i/`.

Proofread everything once more as a native-speaker editor (one term per concept across keys). Final reply (concise): counts, the PASS lines, and a list of strings you are unsure about."""
P['R'] = f"""You are {UP}-REVIEWER: a cold, native-level {LANG} editor and English teacher reviewing a freshly written course in the Lang App project (/home/claude): "English for {LANG} speakers" (`{L}-en`). Five different writers produced it in parallel and none saw each other's work: the three lesson files by one model family, the decks/dialogues (`decks.js`, `extra.js`, `meta.js`) and the interface (`ui.json`, `roadmap.json`) by a smaller, cheaper model. Part of your job is to tell the lead whether the cheaper model's files are noticeably worse. Read it as a learner and as an editor, and FIX what you find.

This course is built from the Spanish-speakers' course (`profile.json` → `"reference": "es"`): parity compares its English side with es-en.

Read first: `docs/profiles/{L}.md` (style authority), `docs/PHASE2-BRIEF.md` (incl. its last section), `docs/PRACTICE-SPEC.md`, `docs/PIPELINE.md`. For what a finished review looks like, read `tools/content/pt/REVIEW.md` and `tools/content/pt/PRON-RULES.md` (same reference course, same pron conventions).

Scope (you may edit): everything under `tools/content/{L}/` EXCEPT `profile.json` and `deviations*.json` (the English side of parity-bound items must not change — list problems instead; lessons and decks the profile marks as {L}-specific — `pron`, `false-friends`, any {L}-only lesson, the pronunciation-traps deck and the false-friends deck — are free to edit, keeping practice sets at 12–16 items), plus the `"t"` fields of `tools/i18n/{L}/ui.json` and `tools/i18n/{L}/roadmap.json`. Do not touch generators, packs, src/app.html, other languages; do not run build.sh; do not commit.

What to look for, in priority order:
0. START WITH `decks.js` and `extra.js`. In the Portuguese course these two files needed five times more fixes per line than the lesson files: card notes carried over from the source course (the "What's up?" note, coffee-order name advice, gate-number notes, claims about stress or spelling that are true for Spanish speakers only), unnatural or calqued meanings, wrong idiom equivalents, and stress notes written as capitalised pseudo-syllables. Read every card note.
1. Wrong or misleading teaching: explanations false about English or about {LANG}; a `why` that explains a different item; a practice prompt whose natural English answer is not accepted (in {L}-specific lessons add accepted answers; in shared lessons make the prompt more specific); distractors that are actually correct; leftovers reasoned from Spanish (gustar-style arguments, ser/estar where {LANG} has no such split, Spanish place names in native prose, calqued Spanish idioms); false friends that are not real traps for {LANG} speakers.
2. Unnatural or translated-from-Spanish {LANG}; wrong variety or register ({C['register']}); inconsistent terminology ACROSS files and between course content and interface.
3. Pron consistency at WORD level and for hand-written transcriptions with no counterpart in the Portuguese course (names, stress on function words). Record settled conventions in a new `tools/content/{L}/PRON-RULES.md`.
4. Interface: tab labels, buttons, toasts, count patterns (0 / 1 / many), language-name slots, weekday headers, feedback wording, level titles, anything left in English that should not be.
5. Roadmap titles.
{C.get('r_extra','')}
After editing, everything must still pass (scratch outputs; S={S}):
`node tools/content/gen.js {L} $S/{L}-r.js && node tools/content/validate.js {L} $S/{L}-r.js && node tools/content/parity.js {L} $S/{L}-r.js && node tools/content/lint.js {L} $S/{L}-r.js`, `python3 tools/i18n/gen.py {L} $S/i18n-{L}-r.js && node tools/i18n/validate.js {L} $S/i18n-{L}-r.js`, `python3 tools/i18n/road.py check {L}`, and `node --check` on each JS file you touched. No Spanish anywhere under tools/content/{L}.

Write `tools/content/{L}/REVIEW.md`: (1) what you changed, grouped, with before → after examples; (2) a table of edit counts PER FILE (decks.js, extra.js, meta.js, lessons.js, practice.js, more/a1.js, more/a2.js, more/b1.js, ui.json, roadmap.json) split into "wrong/misleading", "unnatural wording", "pron", "formatting", and one sentence on whether the decks/interface files were noticeably weaker than the lesson files; (3) a "For a native speaker" top-ten list; (4) anything you found but could not fix within scope.

Final reply (concise): the per-file edit table, your verdict on the cheaper model's files, the exact PASS lines, and the top-ten list."""
for k in P: open(os.path.join(R, 'docs', 'briefs', f'{L}-{k}.md'), 'w', encoding='utf8').write(P[k])
print('wrote briefs for', L, {k: len(v) for k, v in P.items()})
