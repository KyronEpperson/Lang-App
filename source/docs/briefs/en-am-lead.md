PROGRESS (updated 2026-11-21 11:19 CST)
Course: en-am   Branch: cursor/en-am   PR: https://github.com/KyronEpperson/Lang-App/pull/5
Done: research brief, research, pron tool, lead note, decisions, briefs, deck A, deck B, lesson 3
Next: lesson 1, lesson 2
Checks: lesson 3 partial PASS: all checks OK (partial); full course not run
Models used: research brief = no model (copied from the template); research and pron tool = grok-4.7-xhigh; decisions = grok-4.7; briefs = mk_briefs.py; deck A = grok-4.7-high; deck B = grok-4.7-high; lesson 3 = grok-4.7-high
State: WORKING

STOP, accepted: respell.js cannot be required on every card. The decision record sets pron: none. Writers leave every pron field empty. They do not hand-write a romanisation. The fidel lessons teach the reading in the English body.

The research finding: respell.js cannot be required on every card. The fidel does not write phonemic gemination (አለ “he said” vs “there is”; ገና “still” vs “Christmas”; 80 of 200 common words in one dictionary sample had a geminate the letters do not show), and it does not show whether a sixth-order vowel is pronounced (ልብ vs ስልክ; the published rule is still opaque). A verb analyzer does not fix homographs without context. pron: none is justified as the setting. It is not justified as a claim that learners need no reading aid. Writers start with empty pron fields.

# Lead note: en-am stage 1

## Where the work is

Branch `cursor/en-am`. PR https://github.com/KyronEpperson/Lang-App/pull/5

Files written: `docs/profiles/en-am.md`, `tools/target/am/profile.json`, `tools/target/am/respell.js`. This note.

Not done: no lessons, no decks, no app edits, no packs, no other course folder. Not committed. Writers are not started.

## What to do

Read `docs/profiles/en-am.md` §1 and §6 first, then §4.2 and §6.1. The decision record accepts `pron: none`. Section 8 is the work order. Writers leave pron fields empty.

## Decisions to record

1. **`pron: none`, and the tool refuses.** The roadmap and the queue asked for a required romanisation. It is not required, because gemination is phonemic and unwritten, and the sixth-order vowel is unwritten. “No” would mean pasting a spelling-only line that teaches one reading of አለ and of ገና.
2. **No lesson added, roadmap order kept, 26 lessons.** Passive, progressive, and a separate gemination lesson were not added. “No” would mean a 27th lesson. The passive was the latest of seven morphemes in Mekonnen 2010 and is past the roadmap’s A1 cut. Gemination cannot be typed in the fidel.
3. **Register: አንተ and አንቺ together in greetings, እርስዎ in that same lesson.** “No” would mean one “you” until a later lesson, which is the error the greeting materials and the thesis both show.
4. **Standing rule is the verb ending (person and gender), not gemination.** Keywords are in the profile §7 and in `profile.json`. “No” would mean a gemination keyword. The right and wrong fidel are the same characters, so a typed item cannot hinge on it.
5. **Spelling: spaces, not ፡; no U+135F gemination mark; do not normalize homophone letters.** When everyday sources disagree, the Peace Corps 2015 spelling is the card and the other spelling is the note. “No” would mean hiding ሐ ኀ ኸ ሠ ዐ ፀ, which the fidel lessons exist to teach.
6. **Telugu romanisation-answer fields are not copied.** `tilesDefault` and `voiceMatch` are set. `pronAnswers`, `pronAnswersKeepSpaces`, `pronAnswersScript`, `romaAlmost`, and `pronAnswersWarn` are not, because they would grade a romanisation the tool will not emit. “No” would mean accepting a typed romanisation that has no reliable target. The block for a future script field, if a pron is ever approved, is U+1200–U+137F.
7. **`likes` keeps roadmap id `am-likes`.** The English title adds kind remarks so the Compliments deck has a lesson link. “No” would mean a Compliments deck with no lesson pointing at it.

## Register, already applied

Addis Ababa standard, fidel, voice `am-ET`. Greetings teach a man, a woman, and እርስዎ. ጤና ይስጥልኝ is the formal greeting for any person and any time. Friends are አንተ or አንቺ. A stranger or an older person is እርስዎ. Card notes say which. English prompts that test the ending say “(to a man)”, “(to a woman)”, or “(polite)”.

## App changes needed

None. The course is not being written, and the queue’s rule was to use options the tools already have. No new letter fold, no bundled font, no gemination matcher. Do not fold ሀ with ሐ, or an ejective with its plain consonant. A device Ethiopic font is what the queue already accepts. Ethiopic punctuation (። ፣) was not checked against the matcher, because `src/app.html` was not opened. That check matters only if writers start.

## Pron tool: enforce these

Command: `node source/tools/target/am/respell.js "<text>"` (from `source/`). It exits 1 and writes a refusal. It does not print `<text> -> <pron>`. `pronPattern()` returns the empty string.

| Word | Output | What a writer does |
|---|---|---|
| any fidel, including አለ, ገና, ልብ | no pron; the process fails | Do not paste a pron. Do not hand-write one. There is no writer work. |

## Evidence, keep at this strength

Mekonnen 2010 is 45 American learners at one school. The seven-morpheme percentages are his. Gemination, ejectives, /ɨ/, and the trill are “regular” and, in his conclusion, present across four phases. He does not give a rate for them. Word order is his contrastive claim, not a counted error in the chapter that was read.

Anberbir and Gasser’s 100 percent is 666 verb forms from Armbruster 1908. ገና still has two outputs. The 80-of-200 geminate count is one dictionary sample of common words, not running text.

The LDC note says the sixth-order rule is relatively opaque. Do not upgrade that to a deletion rule.

372,804 is Ethiopian ancestry in the 2023 ACS summary on Wikipedia, not a count of Amharic speakers.

The Peace Corps time page says both “1 o’clock is 7 a.m.” and “6 a.m. is 12.” Do not flatten those into one slogan.

Feminine goodbye ሁኚ versus ሁኝ was not settled. It is not in `greet`.

## Placeholders

Level titles Beginner through Master are the same seven English titles as the Spanish and Telugu profiles. They are not Amharic-specific. Brand is አማርኛ, the name of the language, not a coined word. The four `greet` strings are the polite time-of-day forms from AmharicTeacher and Bereka Buna (night: ደህና እደሩ; morning: ደህና አደሩ?; afternoon: ደህና ዋሉ?; evening: ደህና አመሹ?). No sample-card table was copied from another course. Five sample cards per deck were not written.

