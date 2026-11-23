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

## Queue 2026-11-23 ~04:00
- bn-ko: w1 w2 launched; w3 w4 WAITING for a slot.
- Waiting for profiles: yue kn ur pa (then mk_native + 4 writers each).
- nan-ko: on hold (owner to choose Traditional Chinese vs written Taiwanese).
- th id vi hi: cold reviews + ui.json running; then assemble + kograde + ship.
- te mr: writers running; then merge (mk_native <l> --merge ONCE), validate, cold review (docs/briefs/x-ko-review.md), ui.json (copy 14 uiKeys from dictionary + 'English meaning' override), ship.

- 04:20: bn w4 WAITING; yue-ko profile done, work files made: yue w1..w4 WAITING for slots.
- 04:30: bn w4 launched. WAITING: yue w1-4, ur w1-4 (profile + work files ready).
- 05:00: th hi id vi shipped (2.74/2.75). yue w1-4, ur w1 w2 launched; ur w3 w4 WAITING. kn pa profiles running.
