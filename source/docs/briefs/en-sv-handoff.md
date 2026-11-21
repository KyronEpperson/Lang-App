# Hand-off: en-sv ready for merge

## Checks

From `source/`, after the cold-review edits, with `HOLD` still in place:

- `gen.js`: wrote `/tmp/course-en-sv.hold.js`, 26 of 26 lessons, 18 decks, 319 cards. Nothing under `packs/` was kept.
- `validate.js` last line: `PASS: all checks OK`. 364 practice items, 54 dialogues, 36 examples, 18 patterns.
- `repron.js` twice: `633 prons read, 0 rewritten` both times. The tool still warns on `klasskamrat` and `fritiden`. No page was opened for those two.
- `link_roadmap.py`: 24 items linked, not covered: none. `compliments` and `traps` have no roadmap id. `packs/roadmaps.js` was reverted.

## What the reviewer changed

The cold reviewer edited `respell.js`, `decks-b.js`, `lessons-1.js`, `lessons-2.js`, and `lessons-3.js`, and added `tools/target/sv/REVIEW.md`. Diff before the hand-off: 48 insertions, 39 deletions. No card was deleted. Same model family as the writers (`grok-4.7-xhigh`). Gemini and Claude Fable had no allowance left.

| File | Diff lines | What changed |
|---|---|---|
| respell.js | 12 | Sourced stress and vowel fixes, then regenerated |
| decks-b.js | 34 | The regenerated pronunciations on those cards |
| lessons-1.js | 9 | Förlåt is sorry; arbetar accepted beside jobbar |
| lessons-2.js | 18 | barnet and huvudet take -et; Kom is the order |
| lessons-3.js | 14 | sin includes ni; prompts name hade and måste |

Five fixes that matter most:

1. `barn` ends in `n`, so `barnet` is `barn` plus `-et`. It is not a vowel-final noun with a bare `-t`. `huvudet` is the same `-et`.
2. The form after `ska` and `måste` is the infinitive. The order for `komma` is `Kom`.
3. `Förlåt` is sorry. `Ursäkta` is excuse me.
4. Stress and vowels were regenerated from dictionary entries: `hotellet` is `haw-TEHL-eht`, and the same pass fixed `universitet`, `apotek`, `kontoret`, `kaféet`, `toaletten`, `allergisk`, `ledsen`, `hen`, `ibland`, `ifrån`, `fotboll`, `fint`, `present`, and `termin`. The protected rows (`student`, `sover`, `kiss`, `kallt`, `semester`, `musik`, `hade`, `trevligt`) stayed.
5. "Today I'm working" accepts `arbetar` as well as `jobbar`. "I can drive" accepts `köra en bil`. "Erik calls his own mom" accepts `ringer till`. The `hade` and `måste` prompts name the verb.

## Native check first

From `tools/target/sv/REVIEW.md`. File, item, why:

1. `decks-b.js` `klasskamrat` — the tool still warns. No IPA page was opened.
2. `decks-b.js` `på fritiden` — first-syllable stress is likely. The vowel of `tid` was not checked.
3. `decks-b.js` `biljett` — second-syllable stress is the house form. No Swedish IPA line was opened.
4. `decks-a.js` `kanel` / `kanelbulle` — stress follows a Danish entry.
5. `decks-a.js` `Minneapolis` — not checked in a Swedish dictionary.
6. `decks-b.js` and `lessons-3.js` compliment lines — `Bra jobbat`, `Vad gott`, `Du är snäll`, `Tack, det var snällt`, `Vilken fin tröja`.
7. `lessons-2.js` `en kaffe` — the course form. `ett kaffe` is also heard. A cup of tea is often `en kopp te`.
8. `decks-b.js` `blåa byxor` — attested. `blå byxor` is the more common shape.
9. `lessons-1.js` `Anna ser sig` — grammatical and a bit bare.
10. The aid omits pitch accent, and it keeps a quiet `-t` and `-g`. That is the decision. A native ear should say whether the aid is still usable.

## Pron tool

`respell.js` is required. It marks stress, keeps `sj` different from `tj`, and does not mark pitch accent. Everyday first-syllable words are reliable enough to teach from. Loan stress is in the lexicon when a page was opened. Writers paste the tool's stdout. The second repron run rewrote nothing. Do not turn pitch accent on at merge.

## Needs from the lead

1. A Swedish letter slip, so a missing `å`, `ä`, or `ö` is "almost" and the wrong mark is wrong. Today `å` and `ä` both fold to `a`, so `här`, `hår`, and `har` match each other. Without it, the course marks those contrasts `strict`. The aid still tells them apart (`haer`, `hohr`, `hahr`).
2. An `sv` entry in the flourish list. Without it, level-up praise and the glyph rain fall back to Korean.

No new font and no new script.

## Unsure

The ten rows above. The cold review is the same family as the writers. `klasskamrat` and `fritiden` are the two warnings left with no page opened.
