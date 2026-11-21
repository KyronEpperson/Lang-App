PROGRESS (updated 2026-11-21 10:34 CST)
Course: en-bn   Branch: cursor/en-bn   PR: https://github.com/KyronEpperson/Lang-App/pull/3
Done: research brief, research, pron tool, lead note
Next: none
Checks: not run. No lessons or decks.
Models used: first research attempt = claude-opus-5-5-max (stopped before any file); research and pron tool = grok-4.7-xhigh
State: GIVEN UP: respell.js is not reliable enough to require on every card (inherent vowel, ô versus o, conjuncts, homographs). The profile cannot justify pron: none. Stage 2 would teach sounds the tool gets wrong.

STOP. The respeller is not reliable enough to require as a trusted pronunciation on every card. Do not send writers to fill cards as if its output were the sound. It is deterministic: the same Bengali always gives the same string, every pron printed in the profile was produced by it, and every one of those strings matches `pronPattern()`. Inherent-vowel presence, ô versus o, এ as e or æ, and several ফলা readings are not fixed by the spelling. Choudhury, Basu and Sarkar 2004 got about 85% on 1,000 words with a hand rule, and the misses were common words. Johny and Jansche 2018, with a neural model on an expert lexicon, still cap deletion at about 97.5% and ô-versus-o at 92.5%, and they show homographs (বল is /bɔl/ and /bɔlo/) that have no single reading. `pron` stays `required` because a hand-written pron is forbidden and `none` is forbidden. A warned word is not cleared. Do not start stage 2 until you accept that limit or change the field.

# Lead note: en-bn stage 1

## Where the work is

- Branch `cursor/en-bn`. PR: https://github.com/KyronEpperson/Lang-App/pull/3
- Written this round: `docs/profiles/en-bn.md`, `tools/target/bn/profile.json`, `tools/target/bn/respell.js`.
- Not written: lessons, decks, pack edits, app edits. `src/app.html` was not opened.
- The profile field `pron` is `required`. Read the STOP above before treating that as "the aid is trustworthy".

## What to do

Read `docs/profiles/en-bn.md` §1, §2, §6, §7, §8 and §10. §6.5 is the list of words the tool gets wrong. Done when you have recorded the decisions below, including whether stage 2 waits on the pron limit.

Re-run the aid with:

```
node source/tools/target/bn/respell.js "আপনি কেমন আছেন?"
node source/tools/target/bn/respell.js --pattern
```

Warnings go to stderr. A warning means the word is not cleared.

## Decisions to record

1. **Lesson list.** All 27 roadmap items, ids with the `bn-` prefix dropped, roadmap order, nothing added. Reason: the inherent vowel is part of the consonant letter, so vowel signs stay after consonants, and no gap forced an extra lesson. "No" would mean a reorder (vowel signs first) or one added lesson. The cap was one added lesson. None was used.
2. **Standing rule.** Verb ending (person and politeness, not number) and what follows the noun (classifier, case ending, postposition), plus a script strand (aspirated, retroflex, dental, inherent vowel, vowel sign, conjunct, hasant) so the script lessons can pass `minOrder` 2 and `minType` 2. The keyword regex was run on a should / should-not table in §7. "No" would mean a grammar-only rule, and the four script lessons would have nothing the validator counts.
3. **Register.** Dhaka colloquial, voice `bn-BD`. আপনি first for strangers and shops, তুমি for peers, তুই recognition only. পানি taught, জল in the note. চেয়ে taught, থেকে in the note. -টা taught, -টি in the note. "No" would mean Kolkata as the taught variety, or তুমি as the first "you".
4. **Two spellings left open.** Familiar present is written করো, as the roadmap writes it; Wikipedia's table writes তুমি বল with no ো. Familiar past is taught as করলে; Wikipedia says eastern speech, which includes Dhaka, uses -লা (tumi bolla). "No" on the past means teach -লা as the course form and keep -লে as the note. The voice was not checked.
5. **Decks.** 18. "Traps for English speakers" is the deck of `need-like`. "Compliments" is the deck of `compare`. "No" would leave those two lessons with topical decks and the two named decks with no lesson to link.
6. **Pron key.** ô for /ɔ/, o for /o/ and for ও, no macrons, f for ফ, ṛ kept for ড় even though the Dhaka standard often merges it with র. "No" would mean writing অ as a, which collides with আ and is the reading English speakers already produce by mistake.
7. **`pron` required, and not trusted.** See the STOP. "No" means set `pron` to `optional` and let cards omit the aid where the tool warns. Do not set it to `none`.

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
node source/tools/target/bn/respell.js "<text>"
```

prints `<text> -> <pron>`. `--pattern` prints the regex. Exports `respell` and `pronPattern`.

| Word | Output | What a writer does |
|---|---|---|
| আমি | ami | Ship. Explicit. |
| আপনার | apnar | Ship. Override. The rule said apônar. Wikipedia says apnar. |
| পছন্দ | pôchhondo | Ship. Matches Wikipedia's [pɔtʃʰondo]. |
| আস্তে / আসতে | aste / ashte | Ship. The Wikipedia pair. |
| বল | bôl | Noun "ball" only, and the note must say the verb is bôlo. The tool warns. |
| জন্য | jônno | Do not ship. UT writes jonno. ô versus o. |
| করলাম | kôrolam | Do not ship. The rule keeps a vowel on র. Not in `VER`. |
| ক্ষমা করবেন | khôma kôroben | Do not ship. LangLibra writes khôma kôrben. |
| কেমন | kemôn | Do not ship until ô versus o is chosen. |
| হল, কোন | hol, kon | Do not put on a card. The tool picks the deleted reading. Johny and Jansche: two readings each. |

Add a checked word to `VER` in `respell.js`, or a wrong one to `EXC`, and run the tool again. Do not type a pron.

## Evidence, keep at this strength

- The 85% figure is Choudhury, Basu and Sarkar 2004 on 1,000 words. It is not this tool's score. This tool's only counted set is the UT conjunct chart: 42 of 47, and the five misses are all ô versus o.
- The 97.5% and 92.5% figures are Johny and Jansche's neural models, not this rule. They are the argument that a better hand rule will not finish the job.
- LangLibra and Latinum are practitioner pages. পানি / জল, the salam greeting, and the compliment sentences are tagged that way. They are not frequency evidence.
- No English-speaker error corpus was opened. The ranking in §4 is an inference.
- Pew's numbers are the 1 May 2025 fact sheet. MLA's 94 enrollments are fall 2006, 12 institutions. No later classroom count was opened.
- Khan 2010 was not opened. Do not cite a Dhaka vowel quality from it.

## Placeholders

- The seven level titles are the Telugu set: Beginner, Traveler, Explorer, Speaker, Conversationalist, Storyteller, Master. Replace them if you want Bengali-specific names. Nothing in the course depends on the wording.
- `brand` is বাংলা, the language's own name, not a placeholder.
- The four `greet` slots are শুভ রাত্রি, শুভ সকাল, আসসালামু আলাইকুম, শুভ সন্ধ্যা. The three শুভ lines are formal. The afternoon slot is the all-day Dhaka greeting, because no sourced afternoon-only greeting was found. The lesson teaches salam as the everyday hello.
