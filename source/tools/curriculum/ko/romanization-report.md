# Romanization audit — KO-CONTENT-A

Tool: `/home/claude/romanize.py` (`rom()` per word, compared after `norm()`), run by `rom_audit.py` in this folder.
Scope: every `ex("…","…","…")` row in `lessons.frag.js` (7 lessons, 90 rows) plus the existing `nouns`, `verbbasics` and `sentences` lessons in `src/app.html` (34 rows).

## Result

| Source | Rows | Mismatches |
|---|---|---|
| lessons.frag.js (nouns, isseoyo, sov, particles, negation, do-man, cant) | 90 | 0 |
| app.html nouns / verbbasics / sentences | 34 | 0 |

No lesson needed a fix, so neither `verbbasics` nor `sentences` is included in `lessons.frag.js`.

## Cases checked by hand (lesson and tool agree, and both are right)

- Nasalization before 만: 밥만 → bamman, 이것만 → igeonman. These are written as pronounced, not as spelled ("bapman" or "igeotman").
- 않아요 → anayo and 않았어요 → anasseoyo: the ㅎ of ㄶ drops before a vowel.
- 먹지 → meokji and 공부하지 → gongbuhaji.
- 못 해요 and 수영 못 해요 are written as two words (mot haeyo). Joined in speech they sound like [모태요]. The app romanizes word by word, so mot haeyo stays.
- Particle stacks: 집에도 → jibedo, 학교에서도 → hakgyoeseodo, 주말에만 → jumareman.

## Known tool errors (avoided, not used in the lessons)

- 맛없어요: the tool gives maseopseoyo, but the standard pronunciation is [마덥써요] = madeopseoyo. 맛없- is a compound boundary, so plain liaison does not apply. I did not use the word.

## Found outside my scope (not changed; reported for the lead)

Running the same audit over the whole of `app.html` gives:

- `numbers`: 스물다섯 살이에요 is romanized "seumuldaseot **salieyo**". It should be "sarieyo", which is how `meet` and the Introductions deck write it. **This is a lesson error.**
- `meet`: 스물여덟 살이에요 is romanized "seumulyeodeol". The tool gives "seumuryeodeol". The standard pronunciation has ㄴ/ㄹ insertion [스물려덜] = "seumullyeodeol", so the lesson and the tool are both off. Suggested fix: seumullyeodeol sarieyo.
- `plans` (7시, 2번), `texting` (ㅇㅋ 5분) and `meet` (Kii예요): these rows contain digits, jamo or Latin. The tool cannot judge them, so they are not errors.
- `story` says "Once you can make one past-tense sentence (lesson 6)". After the reorder, past tense is in `verbs` (lesson 7), so this reference is stale.
