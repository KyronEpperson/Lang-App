PROGRESS (updated 2026-11-22, Claude)
Course: en-bn   Branch: cursor/en-bn   PR: https://github.com/KyronEpperson/Lang-App/pull/3
Done: research brief, research, lead note; pron tool REBUILT lexicon-first (review 2026-11-22); lexicon seeded; profile §6 rewritten; profile.json pronPattern from the tool; writer briefs A, B, 1, 2, 3, R generated
Next: stage 2 (writers), tools/target/bn/HOLD still in place until the lead lifts it
Checks: `node tools/target/bn/respell.js --check` OK; profile §8 / §9 samples and greet run through the tool. No lessons or decks yet.
State: READY FOR STAGE 2. The earlier "GIVEN UP" (rule tool not reliable) is resolved by the lexicon-first design: the tool never guesses, it throws on a word that is not in a lexicon file.

# Lead note: en-bn stage 1

## Where the work is

- Branch `cursor/en-bn`. PR: https://github.com/KyronEpperson/Lang-App/pull/3
- Written this round: `docs/profiles/en-bn.md`, `tools/target/bn/profile.json`, `tools/target/bn/respell.js`.
- Not written: lessons, decks, pack edits, app edits. `src/app.html` was not opened.
- The profile field `pron` is `required`. The tool is lexicon-first (profile §6): every pron is a lexicon reading with its source named per line, or a line marked `unverified:model`.

## What to do

Read `docs/profiles/en-bn.md` §1, §2, §6, §7, §8 and §10. §6.5 lists the unverified readings that cards may depend on. Done when you have recorded the decisions below.

Re-run the aid with:

```
node tools/target/bn/respell.js "আপনি কেমন আছেন?"
node tools/target/bn/respell.js --check
```

A word that is not in a lexicon file makes the tool throw; there are no warnings.

## Decisions to record

1. **Lesson list.** All 27 roadmap items, ids with the `bn-` prefix dropped, roadmap order, nothing added. Reason: the inherent vowel is part of the consonant letter, so vowel signs stay after consonants, and no gap forced an extra lesson. "No" would mean a reorder (vowel signs first) or one added lesson. The cap was one added lesson. None was used.
2. **Standing rule.** Verb ending (person and politeness, not number) and what follows the noun (classifier, case ending, postposition), plus a script strand (aspirated, retroflex, dental, inherent vowel, vowel sign, conjunct, hasant) so the script lessons can pass `minOrder` 2 and `minType` 2. The keyword regex was run on a should / should-not table in §7. "No" would mean a grammar-only rule, and the four script lessons would have nothing the validator counts.
3. **Register.** Dhaka colloquial, voice `bn-BD`. আপনি first for strangers and shops, তুমি for peers, তুই recognition only. পানি taught, জল in the note. চেয়ে taught, থেকে in the note. -টা taught, -টি in the note. "No" would mean Kolkata as the taught variety, or তুমি as the first "you".
4. **Two spellings left open.** Familiar present is written করো, as the roadmap writes it; Wikipedia's table writes তুমি বল with no ো. Familiar past is taught as করলে; Wikipedia says eastern speech, which includes Dhaka, uses -লা (tumi bolla). "No" on the past means teach -লা as the course form and keep -লে as the note. The voice was not checked.
5. **Decks.** 18. "Traps for English speakers" is the deck of `need-like`. "Compliments" is the deck of `compare`. "No" would leave those two lessons with topical decks and the two named decks with no lesson to link.
6. **Pron key.** ô for /ɔ/, o for /o/ and for ও, no macrons, f for ফ, ṛ kept for ড় even though the Dhaka standard often merges it with র. "No" would mean writing অ as a, which collides with আ and is the reading English speakers already produce by mistake.
7. **`pron` required, lexicon-first.** Decided by the lead (review 2026-11-22): the tool looks words up in `lexicon.txt` + writers' `lexicon-add-<role>.txt` and throws on a missing word; no rule fallback. Writers add missing words to their own file with a source or `unverified:model`; the lead merges.

## Register, already applied

Dhaka colloquial, `bn-BD`. আপনি for strangers, তুমি for peers, তুই not drilled. পানি, টাকা, চেয়ে, -টা. করো and করলে are the written course forms, with the alternatives named in §2 and not in the answer lists. Scenes are Dhaka. A US scene, if one is needed, is New York.

## App changes needed

None. The course uses the Telugu options already in the tools: word tiles, answers accepted in Bengali script or in this romanisation, spaces kept, `romaAlmost`, `voiceMatch` `^bn(?:[-_]|$)`, warnings on.

Needs from the lead, not blocking:

1. Confirm that `romaAlmost` does not fold ô into o. A circumflex is not a macron. If it folds, অ and ও become the same "almost", which is the contrast the key exists to keep. Until that is measured, type items whose point is ô versus o must not rely on "almost". Tiles and the exact romanisation work without a change. `src/app.html` was not opened, so this was not measured.
2. A bundled Bengali font, only if a device has none. The brief says the script uses the device font. Not required to start.
3. Near-miss folds for hasant or nukta. The tool already accepts both spellings of ড়. Not required to start.

## Pron tool: enforce these

```
node tools/target/bn/respell.js "<text>"      prints <text> -> <pron>, or throws naming the missing / homograph words
node tools/target/bn/respell.js --pattern
node tools/target/bn/respell.js --check       every lexicon line: pattern, word counts, sources, conflicts; prints the sourced share
node tools/target/bn/respell.js --suggest "<word>"   UNVERIFIED rule guess (tools/target/bn/suggest.js), never a source
```

Exports `respell` and `pronPattern`. The old `EXC` / `VER` lists are gone; the rule code survives only in `suggest.js`.

| Word | Output | Why |
|---|---|---|
| আমি করি / তুমি করো / আপনি করেন | ami kori / tumi kôro / apni kôren | Wiktionary করা table: raised o except in the tumi / se / apni present |
| করলাম | korlam | Wiktionary; the old tool's kôrolam is gone |
| করে, দেখে, বলে | throw alone | homographs (kôre / kore …): a multi-word line fixes the reading (সে করে, আপনাকে দেখে) |
| বড় | bôṛo | Wiktionary Dhaka /bɔɹo/: the final vowel is said (settles §11) |
| কেমন, সকাল, কয়টা, দরকার | kemon, shôkal, kôyṭa, dôrkar | `unverified:model`, listed in profile §6.5 |

Open choices for the lead (2026-11-22):
- **Homograph answers.** A fill or type answer that is a bare homograph (করে, দেখে, বলে, খেলে, খেলো, খেলেন, আসল, আসলে, পরে) gets no romanised alternative, because `gen.js` swallows the throw. Writers are told to avoid such answers. The alternative is a context-free default reading in the tool, which this design deliberately does not have.
- **Unverified share.** 643 lines: 309 name an opened source (48%), 334 are `unverified:model`. About 106 of the unverified lines write every vowel; about 217 depend on an inherent vowel, এ, or স. Profile §6.5 lists the ones the §9 samples use.
- **Fetch tool.** Every source page was read through a summarising web tool, not as the raw page. See the lexicon header.
- **Stale profile text outside §6, not edited this round:** §1 (the "not reliable enough" pron bullet), §8 item 4 (`EXC`), the §9 "Warns" notes and pron columns, and §11 on বড় (now bôṛo from Wiktionary). §6 says that it overrides them.

Merging writers' files: copy every line of `lexicon-add-*.txt` into `lexicon.txt` (keep the source column), delete the add files, run `--check`, then `node tools/target/repron.js bn` and re-check every pron with the CLI (repron skips strings the tool throws on).

## Evidence, keep at this strength

- The 85% figure is Choudhury, Basu and Sarkar 2004 on 1,000 words. It is why the tool no longer has a rule: every reading now comes from a lexicon line.
- The 97.5% and 92.5% figures are Johny and Jansche's neural models. They are the argument that a better hand rule will not finish the job.
- LangLibra and Latinum are practitioner pages. পানি / জল, the salam greeting, and the compliment sentences are tagged that way. They are not frequency evidence.
- No English-speaker error corpus was opened. The ranking in §4 is an inference.
- Pew's numbers are the 1 May 2025 fact sheet. MLA's 94 enrollments are fall 2006, 12 institutions. No later classroom count was opened.
- Khan 2010 was not opened. Do not cite a Dhaka vowel quality from it.

## Placeholders

- The seven level titles are the Telugu set: Beginner, Traveler, Explorer, Speaker, Conversationalist, Storyteller, Master. Replace them if you want Bengali-specific names. Nothing in the course depends on the wording.
- `brand` is বাংলা, the language's own name, not a placeholder.
- The four `greet` slots are শুভ রাত্রি, শুভ সকাল, আসসালামু আলাইকুম, শুভ সন্ধ্যা. The three শুভ lines are formal. The afternoon slot is the all-day Dhaka greeting, because no sourced afternoon-only greeting was found. The lesson teaches salam as the everyday hello.
