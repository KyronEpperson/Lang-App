# Sound training (SD-1)

Solution 9 of the course report: short rounds of "which did you hear?" on the sounds a learner mixes up.

## What the learner sees (en-es)

- On the page of lesson 1 (Sounds, spelling and stress): a button `👂 Sound training`.
- A round is ten questions. A word is said; two real words that differ in one sound are offered (`pero` / `perro`). No meanings until the answer.
- After the answer: which was right, both meanings, a one-line tip, and both words said one after the other. Each can be replayed.
- Five contrasts, every one at least twice a round: r / rr, stress (`hablo` / `habló`), n / ñ, vowels, p / b and t / d. 29 pairs.
- The end shows the score for each contrast. Saved as `S.snd[lessonId]={n,r,ts}`. It never decides whether a lesson is done.

## Voices

- A recorded clip is used when the word has one. Otherwise the device voice says it.
- When the device has several voices for the language, each question takes a different one. Training on several voices is what the research backs.
- **Open:** recorded pairs in two or more voices would be better than device voices. That is recording work for the owner's terminal (solution 7).

## Data and code

- `tools/sounds/<course>/sounds.json`: `{sounds:{lessonId:[{label,tip,pairs:[[a,b,meaningA,meaningB]]}]}}`. The entry appears on the lesson whose id is the key.
- `node tools/sounds/apply.js` checks it and writes it into the pack as `SOUNDS` (block before SECS). After regenerating a pack run it again; `ship.sh` fails otherwise.
- `sd*` functions in `src/app.html` (`tools/patches/sd/sd.js`). A course without `SOUNDS` shows nothing.
- Test: `tools/tests/soundtrain.js`.

## Rolling out

The report names the courses that need this most: Mandarin tones, Japanese long vowels and small っ, Korean plain, tense and aspirated consonants, Portuguese nasal vowels. Each needs a `sounds.json` written by Opus and keyed to that course's sound lesson. Where the device voice cannot make the contrast clearly (tones, Korean consonants), wait for recorded pairs.

## Not tested

Real voices: the test replaces the voice. Whether a phone's Spanish voice makes every pair clearly different was not heard by anyone.
