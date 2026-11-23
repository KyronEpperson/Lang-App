"""Lead-only (hmn-en stage 1): mk_briefs_ko.py without its DECKNAMES-from-profile block, root pinned. Run: python3 tools/content/hmn/mk_briefs_hmn.py hmn && python3 tools/content/hmn/fix_briefs_hmn.py"""
"""Writes docs/briefs/<lang>-{A,B,C,D,I,R}.md for a course scaffolded from the Korean course (no profile.reference), and DECKNAMES.md from the profile.
usage: python3 tools/content/mk_briefs_ko.py <lang>      (reads docs/briefs/<lang>.json)
<lang>.json: {"LANG","NATIVE","UP","register","pron","kw","script_note","a_extra","b_extra","c_extra","d_extra","i_extra","r_extra"}"""
import json, sys, os, re
L = sys.argv[1]; R = '/home/claude'; C = json.load(open(os.path.join(R, 'docs', 'briefs', L + '.json'), encoding='utf8'))
S = '/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2'; UP = C['UP']; LANG = C['LANG']; NAT = C['NATIVE']
def head(part): return f"""You are {UP}-{part}, one of five agents writing the Lang App course "English for {LANG} speakers" (`{L}-en`; all explanations in {NAT}) in /home/claude.

This course is built from the KOREAN-speakers' course: `tools/content/{L}/` was scaffolded from `tools/content/ko/`, and the parity check compares {L}-en's English side with ko-en's. Every Korean string in your files is a placeholder to rewrite in {LANG}.

Read first, fully: `/home/claude/docs/PHASE2-BRIEF.md` (follow it exactly with `<lang>` = `{L}`; its last section lists recurring problems you must avoid), `docs/profiles/{L}.md` (the style authority: §2 variant and register — {C['register']}; §3 glossary; §4 error zones; §6 pron — {C['pron']}; §7 standing rule article-plural with keywords {C['kw']}; §8 per-lesson notes and the {L}-only lessons; §9 localisation and decks; §10 interface), `docs/PRACTICE-SPEC.md`, `docs/PILOT-SPEC.md`, `docs/PIPELINE.md`, the header comment of `tools/content/more/_dsl.js`, `tools/content/{L}/profile.json`, and `tools/content/{L}/DECKNAMES.md` (FINAL deck names — use them verbatim, including in every `deck:"…"` link; the Korean decks map by position to rows 1–20). The Chinese course (`tools/content/zh/`, finished and reviewed, same reference course; `tools/content/zh/PRON-RULES.md`) is the closest example: {C.get('copy_note', 'consult it for shape.')}

{C['script_note']}

"""
def tail(n): return f"""

Other agents own the other files; they will still be Korean while you work — ignore validator lines about them. Check your work exactly as PHASE2-BRIEF "Checking your work" says (scratch dir `{S}`, output name `{L}-{n}.js`; also `node tools/content/lint.js {L} <your scratch pack>`). No Korean characters may remain in your files; remove the TRANSLATE/ADAPT banners. Work in your own scratch subfolder `{S}/{L}{n}/`. Do not run build.sh; do not commit.

Report back as the brief says, plus specific strings a native speaker should double-check."""
P = {}
P['A'] = head('CONTENT-A') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/decks.js`, `tools/content/{L}/extra.js`, `tools/content/{L}/meta.js`, and your deviation fragment `tools/content/{L}/deviations.a.json`.

YOUR JOB
1. decks.js, extra.js: replace every Korean string (deck names, meanings, notes, pron fields, dialogue/example translations, idioms, pause-set labels) with {LANG}; keep the English side identical except where profile §9 says to localise (names, cities, food, currency — each localised deck card needs a deviation entry; read tools/content/zh/deviations.json and how parity.js treats decks). Every pron (cards, idioms) follows profile §6 and must match `pronPattern`.
2. Card NOTES are where earlier courses went wrong: write every note for {LANG} speakers. A note that reasons from Korean (Konglish, Korean sounds, Korean politeness levels, "What's up?" advice, K-pop) must be replaced, not translated. Meanings must be idiomatic {LANG}, never word-for-word glosses. Read section 1 of tools/content/de/REVIEW.md and tools/content/it/REVIEW.md first to see the mistakes reviewers had to fix.
3. Rename the 20 decks to DECKNAMES rows 1–20 in the same order, then append the {L}-only decks DECKNAMES lists (card counts and content per profile §9) and the pronunciation pairs §9 adds. Record the deck-count and new-deck deviations.
4. meta.js: GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS, TITLES, PAUSE_LABELS in {LANG} using the final deck names.
{C.get('a_extra','')}""" + tail('a')
P['B'] = head('CONTENT-B') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/lessons.js`, `tools/content/{L}/practice.js`, and your deviation fragment `tools/content/{L}/deviations.b.json`.

YOUR JOB: rewrite every Korean string in both files into {LANG} — lesson titles, blurbs, bodies (explain English by contrast with {LANG} per profile §4/§8, not by translating the Korean argument), `{{{{ex:English|pron|meaning}}}}` rows, check questions and explanations, practice prompts/`why`/`hint`. Keep the English side (ids, English examples, options, answers) identical unless the profile calls for a change, and record any change in your fragment. The standing rule must hold for every practice set you own.
{C.get('b_extra','')}""" + tail('b')
P['C'] = head('CONTENT-C') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/more/a1.js` and your deviation fragment `tools/content/{L}/deviations.c.json`.

YOUR JOB
1. Rewrite every Korean string in more/a1.js into {LANG} — titles, blurbs, bodies (explain by contrast with {LANG} per §4/§8), example rows, checks, practice shorthand prompts/`why`/hints. Keep the English side identical unless the profile calls for a change; record changes in your fragment. The standing rule must hold for every practice set.
2. {C['c_extra']} Each added lesson: same structure and length as the other A1 lessons, a 3-question check and a 12–16 item practice set in the DSL shorthand that respects the standing rule. Record each as a lesson-level deviation and list the ids under an `extraLessons` array in your fragment (see tools/content/zh/deviations.c.json)."""+ tail('c')
P['D'] = head('CONTENT-D') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/more/a2.js`, `tools/content/{L}/more/b1.js` and your deviation fragment `tools/content/{L}/deviations.d.json`.

YOUR JOB
1. Rewrite every Korean string in both files into {LANG} — titles, blurbs, bodies (explain by contrast with {LANG} per §4/§8), example rows, checks, practice shorthand prompts/`why`/hints. Keep the English side identical unless the profile calls for a change; record changes in your fragment. The standing rule must hold for every practice set.
2. {C['d_extra']}""" + tail('d')
P['I'] = f"""You are {UP}-INTERFACE, one of five agents working on Lang App's course "English for {LANG} speakers" (`{L}-en`) in /home/claude. You translate the app INTERFACE into {NAT}. Read first: `/home/claude/docs/PHASE2-BRIEF.md` (general rules and, in its last section, the count-pattern and language-name-slot rules), `docs/profiles/{L}.md` §2 (register: {C['register']}), §3 (glossary incl. UI terms) and §10 (interface wording rules — follow them to the letter — counters, formats, the tab-bar labels, language-name slots, UI glossary), `docs/PIPELINE.md` §4 (interface pipeline, slot tokens), and look at `tools/i18n/zh/ui.json` and `tools/i18n/de/ui.json` as finished examples of the same job.

FILES YOU OWN (edit only these): `/home/claude/tools/i18n/{L}/ui.json` and `/home/claude/tools/i18n/{L}/roadmap.json`.

JOB 1 — ui.json: every exact key and pattern template is scaffolded with `"t": ""` plus reference fields (Korean text, context, slots, example). Fill every `"t"` with natural, concise {LANG}; change nothing else. Use the zh and de files to understand intent — legacy English keys that say "Korean"/"Hangul"/"romanization" mean "English"/"pronunciation aid" for this course. The key `Type` is the verb for typing an answer (it labels the quiz chip `⌨️ … EN`), `Category` is the feedback category label, `Text size` must be very short, and the seven tab-bar labels must each fit a 390px bar (≤ 8 characters; the lead measures them). Pattern translations use `{{1}}`…`{{k}}` for the template's slots in the order the reference shows; keep every slot exactly once unless zh/de show it can be dropped. Keep leading/trailing punctuation and spacing of fragments, emoji and symbols. Weekday headers must be at most three letters.
{C['i_extra']}
Checks (run from /home/claude; scratch output so live packs are untouched): `python3 tools/i18n/gen.py {L} {S}/i18n-{L}.js && node tools/i18n/validate.js {L} {S}/i18n-{L}.js` must end with PASS and report every key translated.

JOB 2 — roadmap.json: 425 entries under "road": {{"<English string>": {{"t": "", "ko": …, "kind": "lesson title|stage|variant|basis", "roadmap": code}}}}. Fill every "t" in {LANG}: short planned-lesson titles and stage names for courses teaching 15 languages, using the profile's grammar terms; keep quoted target-language words exactly (e.g. 감사합니다, は/が, ser/estar); textbook/framework names in their usual form; no trailing period on titles; no HTML or newlines. Check: `python3 tools/i18n/road.py check {L}` must exit 0. Do NOT run `road.py new` or `new_lang.py`. Work in your own scratch subfolder `{S}/{L}i/`.

Proofread everything once more as a native-speaker editor (one term per concept across keys). Final reply (concise): counts, the PASS lines, and a list of strings you are unsure about."""
P['R'] = f"""You are {UP}-REVIEWER: a cold, native-level {LANG} editor and English teacher reviewing a freshly written course in the Lang App project (/home/claude): "English for {LANG} speakers" (`{L}-en`). Five different writers produced it in parallel and none saw each other's work. Read it as a learner and as an editor, and FIX what you find.

This course is built from the Korean-speakers' course: parity compares its English side with ko-en.

Read first: `docs/profiles/{L}.md` (style authority), `docs/PHASE2-BRIEF.md` (incl. its last section), `docs/PRACTICE-SPEC.md`, `docs/PIPELINE.md`. For what a finished review looks like, read `tools/content/de/REVIEW.md` and `tools/content/zh/REVIEW.md`, plus `tools/content/zh/PRON-RULES.md` and `tools/content/zh/pron_check.js` (a checker you can adapt).

Scope (you may edit): everything under `tools/content/{L}/` EXCEPT `profile.json` and `deviations*.json` (the English side of parity-bound items must not change — list problems instead; the {L}-only lessons and decks are free to edit, keeping practice sets at 12–16 items), plus the `"t"` fields of `tools/i18n/{L}/ui.json` and `tools/i18n/{L}/roadmap.json`. Do not touch generators, packs, src/app.html, other languages; do not run build.sh; do not commit.

What to look for, in priority order:
0. START WITH `decks.js` and `extra.js`: card notes carried over from the Korean course (Konglish, Korean sounds, politeness levels, the "What's up?" note, K-pop), unnatural or word-for-word meanings, wrong idiom equivalents, false claims about English. Read every card note.
1. Wrong or misleading teaching: explanations false about English or about {LANG}; a `why` that explains a different item; a practice prompt whose natural English answer is not accepted (in {L}-only lessons add accepted answers; in shared lessons make the prompt more specific); distractors that are actually correct; mc options where two are right.
2. Unnatural or translated-sounding {LANG}; wrong register ({C['register']}); inconsistent terminology ACROSS files and between course content and interface.
3. Pron consistency at WORD level and for hand-written transcriptions with no counterpart in the Chinese course. Record settled conventions in a new `tools/content/{L}/PRON-RULES.md`.
4. Interface: tab labels, buttons, toasts, count patterns (render each at 0, 1, 2, 5 and 21), language-name slots, weekday headers, feedback wording, level titles.
5. Roadmap titles.
{C.get('r_extra','')}
After editing, everything must still pass (scratch outputs; S={S}):
`node tools/content/gen.js {L} $S/{L}-r.js && node tools/content/validate.js {L} $S/{L}-r.js && node tools/content/parity.js {L} $S/{L}-r.js && node tools/content/lint.js {L} $S/{L}-r.js`, `python3 tools/i18n/gen.py {L} $S/i18n-{L}-r.js && node tools/i18n/validate.js {L} $S/i18n-{L}-r.js`, `python3 tools/i18n/road.py check {L}`, and `node --check` on each JS file you touched. No Korean characters anywhere under tools/content/{L}.

Write `tools/content/{L}/REVIEW.md`: (1) what you changed, grouped, with before → after examples; (2) a table of edit counts PER FILE split into "wrong/misleading", "unnatural wording", "pron", "formatting"; (3) what you read in full and what you only scanned; (4) a "For a native speaker" top-ten list; (5) anything you found but could not fix within scope.

Final reply (concise): the per-file edit table, what you only scanned, the exact PASS lines, and the top-ten list."""
for k in P: open(os.path.join(R, 'docs', 'briefs', f'{L}-{k}.md'), 'w', encoding='utf8').write(P[k])
print('wrote briefs for', L, {k: len(v) for k, v in P.items()})
