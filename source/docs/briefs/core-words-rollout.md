# Core words / Flirting / Compliments rollout (one agent per course, brief: docs/briefs/core-words-writer.md)

Agent limit is 20 at once; launch the waiting ones as slots free up.

- Done and shipped: es (2.59.0)
- Written, to merge by the lead: ko (tools/ko-core.json; needs app.html + Spanish and Bisaya meanings)
- Running (launched 2026-11-23): fr de it pt ja zh ru ar hi id vi th yue nan am
- Waiting for a slot: tl ceb ur pa te kn bn nl sv no da pl cs ptpt
- After each finishes: lead checks validate PASS + no duplicate cards, then one release per batch.

Also waiting for a slot: Puerto Rican Spanish course plan (Kii 2026-11-23: build right after Bisaya; reuse docs/DIALECTS-PLAN.md and the Dominican profile's Caribbean groundwork).

## Tagalog → Korean writers (brief: tools/halves/native/tl/ko/work/README.md + docs/profiles/tl-ko.md)
Launch w1..w4 as slots free (priority over the waiting deck writers). Launched: (update here)

## Status 2026-11-23 01:25
- Shipped 2.68.0: decks for ar ceb de fr hi id it ja nan pt ru th vi yue zh (and am earlier). NOTE: 2.68.0 also carried the then-current packs of bn cs da kn nl pl sv te ur (writers mid-run; harness passed). Next ship replaces them with the finished ones.
- Finished since, not yet shipped as final: sv te nl da.
- Running: tl ur pa kn bn no pl cs ptpt.
- ceb-ko shipped in 2.68.0 (hand-tuned). tl/ja/zh halves merged, cold reviews running. Profiles for vi/th/id/hi → Korean running; writers launch after the Korean content merge (mk_native.js <lang>).
