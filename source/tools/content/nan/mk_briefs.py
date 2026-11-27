"""Writes docs/briefs/nan-{A,B,C,D,R}.md for nan-en (scaffolded from the Cantonese course yue-en, parity checked against ko-en).
usage: python3 tools/content/nan/mk_briefs.py      (reads docs/briefs/nan.json; paths are absolute under its ROOT)
No interface writer: the course's interface overrides (tools/content/nan/ui.json) were written by the lead, and the 39 English-roadmap
titles go to CONTENT-A."""
import json, os
HERE = os.path.dirname(os.path.abspath(__file__)); R = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
C = json.load(open(os.path.join(R, 'docs', 'briefs', 'nan.json'), encoding='utf8'))
ROOT = C['ROOT']; S = C['SCRATCH']; UP = C['UP']; LANG = C['LANG']; NAT = C['NATIVE']; L = 'nan'

def head(part):
    return f"""You are {UP}-{part} [{C['model']}], one of four content writers on the Lang App course "English for {LANG} speakers" (`{L}-en`; all explanations in {NAT}). Work ONLY in `{ROOT}` (absolute paths; run commands as `cd {ROOT} && …`). Any document that says `@@HC@@` means `{ROOT}`; any scratch path under `/tmp/claude-0/…/p2` means `{S}`.

This course was scaffolded from the CANTONESE-speakers' course: `tools/content/{L}/` is a copy of `tools/content/yue/` (written Cantonese, Traditional characters, already re-aimed from Korean to Chinese-speaker arguments), with the lesson `hk-english` renamed `tw-english`. Every Cantonese string in your files is a placeholder to rewrite in written Taiwanese. The arguments often carry over (no articles, no plural, no tense, final stops, n / l), the words never do: rewrite each sentence as a Taigi writer would, do not swap characters one by one. `profile.json` has no `reference`, so parity compares the English side with ko-en; `deviations.json` (read-only, the lead's) already covers every English-side difference inherited from yue-en and every nan change the profile asks for.

Read first, fully: `{ROOT}/docs/PHASE2-BRIEF.md` (follow it with `<lang>` = `{L}`; where it says "Korean", read "Cantonese (the yue scaffold)"; its scratch path is replaced by yours below; its last section lists recurring problems you must avoid), `{ROOT}/docs/briefs/nan-digest.md` (THE style sheet: orthography, the 60 function words, the Cantonese → Taigi swap table, glossary, pron, standing rule; read it INSTEAD of the full profile, and open `docs/profiles/nan.md` only by Grep for the §8 rows of your lessons, §4 and §9 when the digest points there), `docs/PRACTICE-SPEC.md`, `docs/PILOT-SPEC.md`, `docs/PIPELINE.md` §1, §3 and §5, the header comment of `tools/content/more/_dsl.js`, and in `tools/content/{L}/`: `profile.json`, `DECKNAMES.md` (FINAL deck names: rename the scaffold's Cantonese names in every `deck:"…"` link in your files, by row), `PRON-RULES.md` and `deviations.json` (read-only). Register: {C['register']}. Pron: {C['pron']}. Standing rule: article-plural with keywords {C['kw']} (the scaffold's `why` lines say 眾數, which now fails: use 複數).

Do not open other courses. The only exception: to find the IPA of an English string you add, Grep `tools/content/yue/` or `tools/content/zh/` for that string, then run `node tools/content/{L}/kk.js "/IPA/"` and paste its KK output.

`nativeScript` is Han: every native-side string must contain Han characters (a string that is only 𪜶 fails). Never leave a Cantonese, Mandarin-only or Simplified form: `node tools/content/{L}/taigi_lint.js <your files>` must print PASS (no blocking hits), and you read and judge every Mandarin warning it lists (rewrite it, or keep it if it is a fixed Sino compound the digest allows). Taiwan character forms: 裡 not 裏, 著 not 着, 線 not 綫. You are not a native speaker of Taigi: prefer plain, common MOE words and short sentences; collect every doubt for your report instead of guessing. No native-speaker review comes before release, so your doubt list is what the owner's reviewer will check.

"""

def tail(n):
    return f"""

Other writers own the other files; they will still be Cantonese while you work — ignore validator lines about them. Check your work (scratch dir `{S}`, your own subfolder `{S}/{L}{n}/` for anything else):
```
cd {ROOT}
node tools/content/gen.js {L} {S}/{L}-{n}.js && node tools/content/validate.js {L} {S}/{L}-{n}.js | grep -i "<your lesson ids / deck names>"
node tools/content/parity.js {L} {S}/{L}-{n}.js
node tools/content/lint.js {L} {S}/{L}-{n}.js
node tools/content/{L}/taigi_lint.js <each file you own>
node tools/content/{L}/kk.js --check
node --check <each JS file you edited>
```
The standing-rule lines (`article/plural check`) for your lessons must be gone. Remove the TRANSLATE/ADAPT banners. Do not run `./build.sh`, `harness.js` or `ship.sh`; do not commit; do not edit `profile.json`, `deviations.json`, `ui.json`, `kk.js`, `taigi_lint.js` or any generator. If you must change English beyond what deviations.json covers, record it with a reason in your fragment `tools/content/{L}/deviations.{n}.json` (same shape as deviations.json) and say so.

Report back (concise): files written; counts (lessons / items / cards); validator, parity, lint and taigi_lint lines that still mention your files and why; every deviation you recorded; and a list of specific strings a native Taigi reader should double-check (at least 10)."""

P = {}
P['A'] = head('CONTENT-A') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/decks.js`, `tools/content/{L}/extra.js`, `tools/content/{L}/meta.js`, your fragment `tools/content/{L}/deviations.a.json` (only if needed), and in `tools/i18n/{L}/roadmap.json` only the `t` of the 39 `en` entries (job 8).

YOUR JOB
1. decks.js, extra.js: replace every Cantonese string (meanings, notes, dialogue / example translations, idiom equivalents, pause-set labels) with Taigi. Meanings are what a Taigi speaker would SAY ("I'm tired." → 我真忝; "Where is the restroom?" → 便所佇佗位？ / 洗手間佇佗位？), never word-for-word glosses. Notes are written for Taigi speakers: a note that reasons from Cantonese or Hong Kong (Hong Kong school habits, British school words, 港式, MTR, Octopus, 999, Cantopop) is replaced, not translated.
2. Rename all 23 decks to DECKNAMES in the same order (also in meta.js).
3. Localise the deck cards DECKNAMES lists (Taiwan, Taipei, Taiwanese, Mr. Lin, under Lin; DIALOG line Jay Chou). These English changes are already in deviations.json (deck deviations are keyed by index). Every new or changed English line gets its KK from kk.js.
4. meta.js: GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS, TITLES, PAUSE_LABELS in Taigi, with the final deck names and the lesson id `tw-english`.
{C['a_extra']}""" + tail('a')
P['B'] = head('CONTENT-B') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/lessons.js`, `tools/content/{L}/practice.js`, and your fragment `tools/content/{L}/deviations.b.json` (only if needed).

YOUR JOB: rewrite every Cantonese string in both files into Taigi — lesson titles, blurbs, bodies (explain English by contrast with Taigi per the digest and profile §4 / §8, not by translating the Cantonese argument: 咗 becomes the Taigi facts about 矣 and 有 + verb, 佢 becomes 伊, 喺 becomes 佇), `{{{{ex:English|pron|meaning}}}}` rows, check questions and explanations, practice prompts / `why` / `hint`. Keep the English side identical except the changes listed below. The standing rule must hold for every practice set you own. Typed-answer prompts must pin the accepted English with a short cue where Taigi does not mark what English needs (（用 will）, （咧做）, （have to））.
{C['b_extra']}""" + tail('b')
P['C'] = head('CONTENT-C') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/more/a1.js` and your fragment `tools/content/{L}/deviations.c.json` (only if needed).

YOUR JOB: rewrite every Cantonese string in more/a1.js into Taigi — titles, blurbs, bodies (explain by contrast with Taigi per the digest and profile §4 / §8), example rows, checks, practice shorthand prompts / `why` / hints. Keep the English side identical except the changes listed below. The standing rule must hold for every practice set. Typed-answer prompts must pin the accepted English with a short cue where Taigi does not mark what English needs.
{C['c_extra']}""" + tail('c')
P['D'] = head('CONTENT-D') + f"""FILES YOU OWN (edit only these): `tools/content/{L}/more/a2.js`, `tools/content/{L}/more/b1.js` and your fragment `tools/content/{L}/deviations.d.json` (only if needed).

YOUR JOB: rewrite every Cantonese string in both files into Taigi — titles, blurbs, bodies (explain by contrast with Taigi per the digest and profile §4 / §8), example rows, checks, practice shorthand prompts / `why` / hints. Keep the English side identical. The standing rule must hold for every practice set. Typed-answer prompts must pin the accepted English with a short cue where Taigi does not mark what English needs.
{C['d_extra']}""" + tail('d')
P['R'] = f"""You are {UP}-REVIEWER [{C['model']}]: a cold, native-level Taigi editor and English teacher reviewing a freshly written course in the Lang App project: "English for {LANG} speakers" (`{L}-en`), all explanations in {NAT}. Work ONLY in `{ROOT}` (absolute paths; `cd {ROOT} && …`); documents that say `@@HC@@` mean `{ROOT}`, scratch paths under `/tmp/claude-0/…/p2` mean `{S}`. Four writers produced it in parallel from a written-Cantonese scaffold (copied from yue-en) and none saw each other's work. Read it as a learner and as an editor, and FIX what you find.

Parity compares the English side with ko-en; `tools/content/{L}/deviations.json` (merged by the lead) lists every allowed difference.

Read first: `docs/briefs/nan-digest.md` (style sheet), `docs/profiles/nan.md` (style authority; §4 error zones, §8 lessons, §9 setting and decks, §11 strings to check), `tools/i18n/{L}/NOTES.md` §1 and §3 (interface orthography and terms the course must match), `docs/PHASE2-BRIEF.md` (incl. its last section), `docs/PRACTICE-SPEC.md`, `docs/PIPELINE.md` §3 and §5, `tools/content/{L}/PRON-RULES.md`, `tools/content/{L}/DECKNAMES.md`. For what a finished review looks like, read `tools/content/yue/REVIEW.md` (first 80 lines).

Scope (you may edit): everything under `tools/content/{L}/` EXCEPT `profile.json`, `deviations*.json`, `kk.js`, `taigi_lint.js` and `mk_briefs.py` (the English side of parity-bound items must not change — list problems instead; the nan-only lesson `tw-english` and decks 台式英語陷阱 / 字尾發音 are free to edit, keeping practice sets at 12–16 items), plus the `t` of the 39 `en` entries of `tools/i18n/{L}/roadmap.json` and the values of `tools/content/{L}/ui.json`. Do not touch generators, packs, `src/app.html`, `tools/i18n/{L}/ui.json`, other languages; do not run build.sh, harness.js or ship.sh; do not commit.

What to look for, in priority order:
0. START WITH `decks.js` and `extra.js`: card notes carried over from the Cantonese course (Hong Kong school habits, British school words, 港式, Cantonese sounds, MTR, Octopus, 999), unnatural or word-for-word meanings, wrong idiom equivalents, false claims about English or Taigi. Read every card note.
1. Wrong or misleading teaching: explanations false about English or about Taigi; a `why` that explains a different item; a practice prompt whose natural English answer is not accepted (in `tw-english` add accepted answers; in shared lessons make the prompt more specific); distractors that are actually correct; arguments left from Cantonese (咗, 佢, 啲, 喺, n / l "in Hong Kong").
2. Unnatural or translated-sounding Taigi; Mandarin words where Taigi has its own; Cantonese leftovers; wrong register ({C['register']}); inconsistent terminology ACROSS files and against the interface.
3. Pron: KK at word level, consistency, prose symbols.
4. The course interface overrides (`tools/content/{L}/ui.json`) and roadmap titles.
5. The foundation lesson `alphabet` (lesson 1): clear, correct letter names and sounds for Taiwan learners.
{C['r_extra']}
After editing, everything must pass (scratch outputs; S={S}):
`node tools/content/gen.js {L} $S/{L}-r.js && node tools/content/validate.js {L} $S/{L}-r.js && node tools/content/parity.js {L} $S/{L}-r.js && node tools/content/lint.js {L} $S/{L}-r.js && node tools/content/alphabet_check.js {L} $S/{L}-r.js`, `node tools/content/{L}/taigi_lint.js` (PASS), `node tools/content/{L}/kk.js --check`, `python3 tools/i18n/gen.py {L} $S/i18n-{L}-r.js && node tools/i18n/validate.js {L} $S/i18n-{L}-r.js` (PASS, road 79), and `node --check` on each JS file you touched.

Write `tools/content/{L}/REVIEW.md`: (1) what you changed, grouped, with before → after examples; (2) a table of edit counts PER FILE split into "wrong/misleading", "unnatural wording", "Mandarin / Cantonese leftover", "pron", "formatting"; (3) what you read in full and what you only scanned; (4) a "For a native Taigi reader" list of 15–25 strings (start from profile §11 and add what you found); (5) anything you found but could not fix within scope.

Final reply (concise): the per-file edit table, what you only scanned, the exact PASS lines, and the top-ten list."""

rule = open(os.path.join(R, 'docs', 'briefs', '_reading-rule.md'), encoding='utf8').read()
for k, v in P.items():
    txt = (v + rule).replace('/home/claude', ROOT).replace('@@HC@@', '/home/claude').replace('/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2', S)
    open(os.path.join(R, 'docs', 'briefs', f'{L}-{k}.md'), 'w', encoding='utf8').write(txt)
print('wrote briefs for', L, {k: len(v) for k, v in P.items()})
