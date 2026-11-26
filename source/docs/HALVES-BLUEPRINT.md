# Blueprint: making a reusable half for a language

A **reusable half** is everything a course teaches about one language, stored once with permanent ids and no learner language in it. Any native language then attaches to it by translating the learner-facing side. Korean was the first (`tools/halves/target/ko/`), Mandarin the second (`target/zh/`, built 2026-11-24), Cantonese the third (`target/yue/`, built 2026-11-26; `docs/briefs/x-yue-design.md`), Vietnamese the fourth and the first in "by marks" mode (`target/vi/`, built 2026-11-26; `docs/briefs/x-vi-design.md`). This is the recipe for the next ones.

Background: `docs/HALVES-SPEC.md` (the model; §11 = second target), `docs/briefs/vi-zh-design.md` (what generalising to Mandarin took). Models and reading lists: `docs/MODEL-ROUTING.md`.

## 1. Why build one

Without a half, "X speakers learn Y" is a whole new course each time. With a half for Y, each new native language is a translation job of the learner-facing side (about 25–30 thousand words), checked by tools, and the recorded audio for Y is reused because the spoken text is identical.

Courses unlocked = halves × native languages. One half for Mandarin makes Mandarin available to every native language the app has an interface for.

## 2. The top five spoken languages (total speakers) and where each stands

| # | Language | Half | Source course | What is left |
|---|---|---|---|---|
| 1 | English | Different mechanism, already reusable | `tools/content/<l>/` on a shared English side, held equal by `parity.js` | Nothing: every X → English course already shares one English side. Do not convert it. |
| 2 | Mandarin | **Done** `target/zh/` (re-exported 2026-11-26 with en-zh's foundation lessons) | `tools/target/zh/` (en-zh) | First native half: Vietnamese (`native/vi/zh/`), brought up to date with the foundation rows on 2026-11-26 (`DONE-foundations.jsonl`); vi-zh assembles and validates with 0 errors. |
| 3 | Hindi | To build `target/hi/` | `tools/target/hi/` (en-hi) | Steps below; see §5 for the script problem |
| 4 | Spanish | To build `target/es/` | `tools/target/es/` (en-es) | Steps below. §5 exists since `target/vi/` (marks.jsonl, validator, per-item option classes); what Spanish still needs is its own classifier or explicit source marks (`x-vi-design.md` §5) |
| 5 | French | To build `target/fr/` | `tools/target/fr/` (en-fr) | Same as Spanish; do it right after, the code is shared |

Korean (`target/ko/`) is done and stays as it is. Outside the top five, **Cantonese is done: `target/yue/`** (third half, from `tools/target/yue/` en-yue; steps 1–4 of §3 passed; `validate.js` and `mk_native.js` handle its in-lesson decks and tiles; the first native half is not scaffolded yet; see `docs/briefs/x-yue-design.md`, including the open "by marks" problem for Han-writing learners). **Vietnamese is done: `target/vi/`** (fourth half, from `tools/target/vi/` en-vi; steps 1–4 of §3 passed; the first half in "by marks" mode, §5; 793 English-half fields hold Vietnamese the source does not mark yet, listed in `native/en/vi/unmarked.tsv`; no native half scaffolded; see `docs/briefs/x-vi-design.md`). Suggested order: **Spanish → French → Hindi**. Spanish forces the one new piece of design (§5); French then costs little; Hindi needs that same piece plus its pronunciation aid.

## 3. The recipe (per target language `<t>`)

Preconditions: the English-speaker course `en-<t>` is released and its sources are in `tools/target/<t>/`. Fix known defects in it first; the half inherits them.

1. **Target entry.** Add `<t>` to `TARGETS` in `tools/halves/lib.js`: the field that holds the target text, how to recognise target-side text (§5), and any extra native-only card fields.
2. **Export.** `node tools/halves/export_target.js <t>` regenerates `en-<t>` from its sources and splits it into `target/<t>/` (language-neutral: target text, pronunciation, ids, lesson structure, practice shapes) and `native/en/<t>/` (the English side as the reference half). The exporter must refuse any pack or practice field it does not map, so nothing is dropped silently.
3. **Proof.** `node tools/halves/proof.js <t>`: the target half plus the English half must rebuild the `en-<t>` pack with zero differences, and a second export must leave every id unchanged. Do not go on until this passes.
4. **Regression.** Every released pack that comes from a half (`*-ko`, and later `*-zh`, …) must re-assemble byte-identically, and `node tools/halves/selftest.js` must pass. Save the packs before touching the tools; diff after.
5. **Engine check, no edits by default.** Assemble a fake-filled pack for a non-English native language and walk every tab in a headless browser: cards, pronunciation line, typed answers, tiles, trainers flags, text-to-speech language, recorded clips (`audio/<t>/` must be found), no page errors. List anything the engine assumes about "native is English" as a follow-up; prefer fixing it through pack fields.
6. **Scaffold for the first native language.** `node tools/halves/mk_native.js <n> --target <t>` writes the writer files (`w1..w4`), the interface-override file, `REPEATS.md` (sentences that occur more than once, so they get one gloss) and the README. Write the pair profile and the writer / reviewer briefs; the lead also writes a one-to-two-page digest for writers.
7. **Hold.** Add `course-<n>-<t>.js` to `packs/HELD.txt` until its review passes.

Then, for each native language: four writers → `mk_native.js <n> --target <t> --merge` exactly once → `validate.js <n> <t> --all` → cold review → `assemble.js <n> <t> packs/course-<n>-<t>.js` → remove from HELD → release.

## 4. What the half must contain (checklist for the exporter)

- Cards: id, deck id, target text, pronunciation aid, and target-side variants accepted when typed.
- Decks, groups, tags: ids and order only (names are native-side).
- Lessons: id, order, which decks, the example rows' target text; the explanation HTML is native-side with the target text held fixed.
- Practice: item id, type, the target-side answer lists and wrong options, strictness flags; prompts and "why" lines are native-side.
- Dialogues, examples, patterns, pause sets, idioms: target text and pronunciation; glosses are native-side.
- Course flags the engine reads (`features`, `accents`, `keys`, tiles, voice settings) and the list of interface strings a non-English course must override.
- Nothing in English or any learner language. If a row cannot be split cleanly, fix the source course, not the exporter.

## 5. The one hard part for Spanish, French and Hindi: telling target text from native text

Korean and Chinese halves tell the two sides apart by **script**: Hangul or Han characters are the target, anything else is the learner's language. That is how the validator proves a writer did not alter the taught text.

- Spanish and French are Latin-script. For an English or Portuguese or Vietnamese speaker learning Spanish, script says nothing.
- Hindi is Devanagari, which Marathi and Nepali speakers also write.

So these halves need **position, not script**: the half records exactly which fields and which spans inside mixed fields are target text (the card front, the bold spans and example cells in lesson HTML, the answer lists), and the validator checks those spans are unchanged character for character in every native half. In `TARGETS` this is a mode (`by: 'script'` for ko, zh and yue, `by: 'marks'` for the others). **Built 2026-11-26 for vi** (`docs/briefs/x-vi-design.md`): the spans are recorded in `target/<t>/marks.jsonl` and `validate.js` requires each one in every native half; mc / check options are decided once per item from its key answer; unmarked target-looking text is reported in `native/en/<t>/unmarked.tsv`.

Consequences to plan for:
- Lesson HTML in the source course must mark target-language spans consistently (it mostly does: bold and example cells). The exporter reports unmarked target text; fix the source.
- Practice options are classified by the item's own type, not by looking at the text.
- A native-side note may quote the target word; allow the row's own target text inside its note, nothing else.
- This is a change to shared tooling: one agent, the strongest model, with the Korean and Mandarin regressions as the gate.

## 6. Per-language notes

- **Spanish (`es`)**: Latin American standard, as `en-es`. The Dominican Caribbean lesson stays in the half as a variety lesson. The Puerto Rican course (`en-espr`) is a copy of `en-es`, not a half; revisit a "dialect layer" after the half exists. Typing: accents and ñ accepted with the course's existing leniency; `¿ ¡` not required. Audio `audio/es/` is complete, so every new native language gets full recorded audio from day one. Portuguese and Italian speakers need a false-friends pass in their native halves.
- **French (`fr`)**: same mode as Spanish. Liaison and silent-letter notes are native-side explanations of target-side pronunciation; keep the IPA or respelling in the half. Audio `audio/fr/` is about a third complete.
- **Hindi (`hi`)**: Devanagari target with the romanisation aid in the half. Decide once whether the aid is shown to learners who already read Devanagari (Marathi, Nepali speakers) or an Indic-script reading (Bengali, Gujarati, Tamil speakers may prefer their own script: a native-only card field, like the Hán Việt reading for Vietnamese). Urdu speakers get a vocabulary-bridge field (shared spoken language, different script).
- **Mandarin (`zh`)**: done. Native-only reading fields exist for Vietnamese (Hán Việt); add the equivalent for Japanese (on'yomi / kanji form), Korean (Hanja reading) and Cantonese (Jyutping) when those native halves are written.
- **English**: leave on `tools/content/`. Its "half" is the shared English side plus `deviations.json`; `parity.js` is its proof.

## 7. Effort and models (per `docs/MODEL-ROUTING.md`)

| Step | Who | Size |
|---|---|---|
| §5 design and tooling (once, with Spanish) | one opus agent | the largest single job: comparable to the Mandarin generalisation |
| Export + proof + regression for each further target | one opus agent | about half of that |
| Pair profile and briefs for a native language | one opus lead | small |
| Native half writers | four opus writers | 25–30 thousand words between them |
| Interface overrides, roadmap titles | sonnet | small |
| Checks, merge, assemble, release | scripts, run by the dispatcher | minutes |
| Cold review | one opus reviewer | the whole native half |

Reading lists: writers read their brief, the digest, the work file and one finished native file. Nobody opens `src/app.html` or a built pack.

## 8. Done means

- `proof.js <t>` passes with zero differences; ids stable on re-export.
- All previously released half-built packs byte-identical; `selftest.js` passes.
- A fake-filled non-English pack runs every tab with no page errors.
- `docs/HALVES-SPEC.md` has a section for the target; `TARGETS` documents its mode.
- The first native half is scaffolded with briefs, and its pack is in `packs/HELD.txt`.

## 9. What this unlocks, in the owner's order

1. East and Southeast Asian speakers learn Mandarin: native halves for th, id, ja, ko, yue, tl, ceb on `target/zh/` (Vietnamese first).
2. The same learners get Japanese, Vietnamese and Cantonese once `target/ja/`, `target/vi/`, `target/yue/` exist (`target/yue/` and `target/vi/` exist since 2026-11-26) (same recipe; ja and yue are script-mode like zh, vi is marks-mode like Spanish).
3. Spanish, French and Hindi for every native language with an interface.
