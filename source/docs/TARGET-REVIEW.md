# Cold-review brief for a course that teaches `<LANG>` to English speakers (`en-<t>`)

You did not write this course. Read: `docs/TARGET-BRIEF.md` (what the writers were asked), `docs/profiles/en-<t>.md` and `tools/target/<t>/profile.json` (the style authority), `docs/PRACTICE-SPEC.md`, the last section of `docs/PHASE2-BRIEF.md`, and any "MEASURED FACTS FROM THE LEAD" appended to your role file.

Review everything in `tools/target/<t>/` except profile.json: every deck card (target, pron, meaning, note), every dialogue, example and pattern, every lesson body, example row, check and practice item. Fix what you find directly in the files. Work in batches (one file at a time) and append to `tools/target/<t>/REVIEW.md` after each batch.

What to look for, in this order:
1. WRONG `<LANG>`: a grammar error, a wrong gender or ending, a word that does not exist or means something else, wrong accents or spelling, a form from another variant than the profile's presented as normal, an unnatural sentence a native speaker would not say. This is the highest-risk category in this course: the taught language is not English. Where you are not sure a form is right, do not leave it: replace it with one you are sure of, and list the doubt.
2. WRONG TEACHING: an English explanation that states a false rule, overgeneralises, or contradicts another lesson or a card note; a "wrong" example that is actually acceptable; an English gloss that mistranslates.
3. PRACTICE: a prompt whose natural correct answer is not accepted (add the answer, or a cue to the prompt); a distractor that is also correct; an item that needs a word the course has not taught and the item does not supply; accent-only contrasts not marked `!strict`; sets that fall short of the standing rule.
4. PRON: any `pron` not produced by the course's tool or not matching the same target elsewhere (the validator compares).
5. Consistency: the same phrase glossed two ways without reason; register slips (tú / usted mixed inside one exchange); deck cards duplicated across decks.
6. English: unidiomatic glosses or notes, typos, repeated filler notes.

After your edits (S = a scratch directory under `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p3/`): `node tools/target/gen.js <t> $S/c.js && node tools/target/validate.js <t> $S/c.js` must print PASS, and `node --check` must pass on every JS file. Do not run build.sh, do not commit, do not touch packs/, src/ or other folders.

Final reply (concise): edits per file by category (wrong language / wrong teaching / practice / pron / wording), each wrong-language and wrong-teaching fix in one line (cap at 25, most serious first), the PASS line, what you read in full versus only scanned, and the ten strings a native speaker should check first.
