PROGRESS (updated 2026-11-24)
Course: vi-zh (Mandarin Chinese for Vietnamese speakers)   Held: packs/HELD.txt lists course-vi-zh.js
Done: stage 1. Tooling for a second target (zh), target/zh exported and proven, vi/zh scaffold, profile, writer / review briefs, ui.json plan
Next: launch w1–w4 in parallel → merge → validate → cold review → assemble into packs/ (still held) → build.sh, e2e (lead / engine owner)
Checks: proof zh 0 differences · selftest 59/59 passed · Korean packs byte-identical (11 complete halves) · validate vi zh = scaffold (2,983 rows missing, expected)
State: READY FOR WRITERS

# vi-zh lead note

**Design:** `docs/briefs/vi-zh-design.md`.
**Authority for every writer and the reviewer:** `docs/profiles/vi-zh.md`.

No native Vietnamese speaker has checked anything. No Vietnamese course text exists yet.

## Launch lines (copy one per agent; the four writers run in parallel)

**w1**
> You are writer w1 of the Vietnamese half of the Mandarin course (vi-zh). Read `/home/claude/docs/briefs/vi-zh-writer.md` and follow it exactly. Your files: `tools/halves/native/vi/zh/work/w1.jsonl` (course name, groups, level titles, greetings, the 31 deck labels and descriptions, cards zh.c0001–zh.c0555 with 386 Hán Việt decisions), `work/wU.jsonl` (12 interface strings), `work/hv-w1.tsv` (your reading sources), and `work/NOTES-w1.md` (glosses you set for the others). Every Hán Việt reading comes from a page you opened (web search); never guess. Finish with `node tools/halves/dryrun.js vi zh w1` showing 0 errors and 0 empty rows.

**w2**
> You are writer w2 of the Vietnamese half of the Mandarin course (vi-zh). Read `/home/claude/docs/briefs/vi-zh-writer.md` and follow it exactly. Your files: `tools/halves/native/vi/zh/work/w2.jsonl` (cards zh.c0556–zh.c0886 with 255 Hán Việt decisions, all dialogues, examples and patterns, lesson 1 `pinyin`), `work/w2/lessons/pinyin.html` (the reading guide: profile §4.1, §4.3, §4.4), `work/hv-w2.tsv`, `work/NOTES-w2.md`. Every Hán Việt reading comes from a page you opened (web search); never guess. Finish with `node tools/halves/dryrun.js vi zh w2` showing 0 errors and 0 empty rows.

**w3**
> You are writer w3 of the Vietnamese half of the Mandarin course (vi-zh). Read `/home/claude/docs/briefs/vi-zh-writer.md` and follow it exactly. Your files: `tools/halves/native/vi/zh/work/w3.jsonl` and `work/w3/lessons/*.html`: lessons 2–14 (tones, tone-change, characters, greetings, pronouns, shi, adj, ma, question-words, bu-mei, de, you, numbers) with titles, blurbs, example glosses, checks and practice. `tones` and `tone-change` use the profile's reading guide (§4.2–4.4) and the anchors w2 uses in `pinyin`. Every practice prompt pins its accepted answer (profile §8). Record shared glosses in `work/NOTES-w3.md`. Finish with `node tools/halves/dryrun.js vi zh w3` showing 0 errors and 0 empty rows.

**w4**
> You are writer w4 of the Vietnamese half of the Mandarin course (vi-zh). Read `/home/claude/docs/briefs/vi-zh-writer.md` and follow it exactly. Your files: `tools/halves/native/vi/zh/work/w4.jsonl` and `work/w4/lessons/*.html`: lessons 15–28 (measure, food, family, time, zai, word-order, want-can, le, progress, serial, a-not-a, ye-dou, ba-bie, and-or) with titles, blurbs, example glosses, checks and practice. 了 is never glossed with đã alone (profile §5.4), and every practice prompt pins its accepted answer (§8). Record shared glosses in `work/NOTES-w4.md`. Finish with `node tools/halves/dryrun.js vi zh w4` showing 0 errors and 0 empty rows.

**Reviewer** (after the merge, alone)
> You are the cold reviewer of the Vietnamese half of the Mandarin course (vi-zh). Read `/home/claude/docs/briefs/vi-zh-review.md` and follow it exactly. Work only in the merged files of `tools/halves/native/vi/zh/` (never `work/`, never mk_native.js). Re-check every Hán Việt reading against an opened page; a wrong reading is the worst error in this course. Write `tools/halves/native/vi/zh/REVIEW.md`. The writers' reports are below: [paste the four reports].

## Lead steps and check commands (run from `/home/claude`)

```bash
# 0. state now (already done; repeatable)
node tools/halves/proof.js zh                          # 0 differences: target/zh + native/en/zh == en-zh
node tools/halves/selftest.js                          # all self-tests passed
node tools/halves/validate.js vi zh | tail -3          # scaffold: errors = missing rows (expected until the writers finish)

# 1. while the writers work: each one's self-check (read-only for the half)
node tools/halves/dryrun.js vi zh w1                   # likewise w2 w3 w4

# 2. after all four report
node tools/halves/mk_native.js vi --target zh --merge  # fold work/ into native/vi/zh/*.jsonl, lessons/, ui.json
node tools/halves/validate.js vi zh --all              # must end: errors: 0; read the "adds Han", "pinyin", "read two ways" warnings
# Hán Việt line: "641 of 641 required cards decided"

# 3. cold review (reviewer edits merged files only; never merge again after it)

# 4. assemble (the pack stays held: course-vi-zh.js is in packs/HELD.txt)
node tools/halves/validate.js vi zh                    # errors: 0
node tools/halves/assemble.js vi zh packs/course-vi-zh.js
node tools/halves/selftest.js

# 5. Korean regression after any later tool change: every Korean pack byte-identical
for n in ceb es hi id ja mr th tl vi yue zh; do node tools/halves/assemble.js $n ko /tmp/k-$n.js >/dev/null && cmp -s /tmp/k-$n.js packs/course-$n-ko.js && echo "$n same" || echo "$n DIFFERS"; done
```

## Decisions taken in stage 1

- **One Chinese target half for every learner language.** It is exported from the en-zh sources (`export_target.js zh` runs `tools/target/gen.js`), never from `packs/`. Re-export only when `tools/target/zh/` changes, then run `proof.js zh`.
- **Hán Việt is data:** `hvUse` / `hv` / `trad` on 641 cards. The validator checks form and consistency, not the reading itself; Unihan is not reachable here. Readings must come from opened pages, recorded in `work/hv-w1.tsv` / `hv-w2.tsv`.
- **Added Chinese:**
  - **error** in prompts, options and glosses;
  - allowed in card notes only as `trad`;
  - **warning** in bodies, deck descriptions, pattern meanings and `why`.
- **Split:** the same linear partition by words as Korean, with a Hán Việt decision weighing 6 words.
  - w1 555 cards, w2 331 cards + dialogues / examples / patterns + `pinyin`, w3 lessons 2–14, w4 lessons 15–28.
  - No trainer file: en-zh has no trainers.
- **Lesson titles:** 14 come from `tools/i18n/vi/roadmap.json`, so the roadmap and the course agree. Measure words are ***lượng từ*** (the roadmap says *Loại từ*): align `roadmap.json` or accept it.

## For the engine owner (no change is required to ship; details in the design note §9)

1. **Optional:** `zhNorm` / `zhMissingOnly` could fold U+0309 (*hỏi*, as typed by Vietnamese IMEs) to U+030C (third tone). The lessons tell learners to switch the IME off; `tilesDefault` already helps.
2. **Optional, for every course:** the grammar-search placeholder `e.g. 에서` is Korean in every course, en-zh included (vi-zh overrides it in `ui.json`).
3. **Optional, for every course:** `sayText()` speaks `___` as English "something" outside Korean.

## For the en-zh team

- `tools/target/zh/` has the pattern `我在___工作。` twice (`zh.p018`, `zh.p022`).
