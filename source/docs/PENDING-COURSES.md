# Pending courses: East and Southeast Asian languages

Owner, 2026-11-25: "lets go east asia and southeast asia. english, spanish first. then the asian countries not india group. then portuguese, french, italian, german, arabic, and amharic then put the rest in a file saying that its pending work to do". This file is that list. **Everything marked pending is work still to do.** Update it in the release that builds a pair.

## How each language is built (owner, 2026-11-25)

**Rule (owner, 2026-11-25): no course for a language is assembled from halves until BOTH English to X and X to English exist as hand-built reference courses. If either is missing, it is hand-built first.** ("dont build any engine if it doesnt have x for both directions with english")

1. **Reference pair first, by hand.** For each language X: English to X (`en-<x>`) and X to English (`<x>-en`), both with the lesson flow (teach a section, its cards five at a time, quiz, final review), the writing-system foundation first, and section-matched cards. Owner: "so we should make english <-> x then build the engines for the langauge on both sides? so it can quickly make whichever side it needs?" and "the engines would work better if they always could refer to one course from the that language".
2. **Then the two halves.** `en-<x>` is exported into the target half `tools/halves/target/<x>/` (everything the course teaches about X, no learner language in it). `<x>-en` is the reference for the native half: how X speakers are addressed, their interface, their names for decks and grammar terms. Recipe: `docs/HALVES-BLUEPRINT.md`.
3. **Then any pair is assembled**, never written from nothing: target half of the language being learned + native half of the learner's language (`mk_native.js`, four writers, cold review, `assemble.js`). Writers always get the reference course of that language on their reading list.
4. A pair is released only with its foundation in `FOUND` (`tools/tests/foundations.js`) and its section tables (`tools/sections/`); `ship.sh` checks both.

Order of languages: Cantonese first (owner: "vantonese first"), then Vietnamese, then Mandarin, Korean, Japanese, Taiwanese, Thai, Hmong, Indonesian, Tagalog, Cebuano. Coming soon, no course at all yet: Wu, Burmese, Javanese, Hiligaynon, Waray.

## Step 1: reference pairs and halves

| Language | English to X | X to English | Foundation in English to X | Target half |
|---|---|---|---|---|
| Cantonese | released | released | done | pending |
| Vietnamese | released | released | pending | pending |
| Mandarin | released | released | done | done |
| Korean | released | released | done | done |
| Japanese | released | released | done | pending |
| Taiwanese | released | pending | pending | pending |
| Thai | released | released | done | pending |
| Hmong | released | released | pending | pending |
| Indonesian | released | released | pending | pending |
| Tagalog | released | released | pending | pending |
| Cebuano | released | released | pending | pending |

Korean for English speakers is the built-in course. Taiwanese to English is pending and waits on the owner's script choice (Traditional Chinese (Taiwan) or written Taiwanese), as does Taiwanese to Korean.

## Wave 1: English and Spanish speakers

"released" means the course is live; it still gets the foundation and the reference-pair treatment in step 1 if the table above says pending.

| Learner speaks | Cantonese | Vietnamese | Mandarin | Korean | Japanese | Taiwanese | Thai | Hmong | Indonesian | Tagalog | Cebuano |
|---|---|---|---|---|---|---|---|---|---|---|---|
| English | released | released | released | released | released | released | released | released | released | released | released |
| Spanish | pending | pending | pending | released | pending | pending | pending | pending | pending | pending | pending |

## Wave 2: speakers of the other East and Southeast Asian languages

| Learner speaks | Cantonese | Vietnamese | Mandarin | Korean | Japanese | Taiwanese | Thai | Hmong | Indonesian | Tagalog | Cebuano |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Mandarin | pending | pending | n/a | released | pending | pending | pending | pending | pending | pending | pending |
| Cantonese | n/a | pending | pending | released | pending | pending | pending | pending | pending | pending | pending |
| Taiwanese | pending | pending | pending | pending | pending | n/a | pending | pending | pending | pending | pending |
| Japanese | pending | pending | pending | released | n/a | pending | pending | pending | pending | pending | pending |
| Korean | pending | pending | pending | n/a | pending | pending | pending | pending | pending | pending | pending |
| Vietnamese | pending | n/a | released | released | pending | pending | pending | pending | pending | pending | pending |
| Thai | pending | pending | pending | released | pending | pending | n/a | pending | pending | pending | pending |
| Hmong | pending | pending | pending | pending | pending | pending | pending | n/a | pending | pending | pending |
| Indonesian | pending | pending | pending | released | pending | pending | pending | pending | n/a | pending | pending |
| Tagalog | pending | pending | pending | released | pending | pending | pending | pending | pending | n/a | pending |
| Cebuano | pending | pending | pending | released | pending | pending | pending | pending | pending | pending | n/a |

## Wave 3: Portuguese, French, Italian, German, Arabic and Amharic speakers

Amharic has no interface dictionary and no English course yet; both come before any course for Amharic speakers.

| Learner speaks | Cantonese | Vietnamese | Mandarin | Korean | Japanese | Taiwanese | Thai | Hmong | Indonesian | Tagalog | Cebuano |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Portuguese | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| French | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Italian | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| German | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Arabic | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Amharic (no interface yet) | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |

## Pending, not scheduled: everyone else

The India group and the remaining interface languages. Not started; no order set by the owner. Kannada to Korean is paused by the owner. Korean for Telugu, Bengali, Urdu and Punjabi speakers: writer files exist, not merged (see `docs/HANDOFF.md`, queue item 4).

| Learner speaks | Cantonese | Vietnamese | Mandarin | Korean | Japanese | Taiwanese | Thai | Hmong | Indonesian | Tagalog | Cebuano |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Hindi | pending | pending | pending | released | pending | pending | pending | pending | pending | pending | pending |
| Bengali | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Urdu | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Punjabi | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Telugu | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Kannada | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Marathi | pending | pending | pending | released | pending | pending | pending | pending | pending | pending | pending |
| Russian | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Polish | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Czech | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |
| Puerto Rican Spanish (no interface yet) | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending | pending |

Counted on 2026-11-25 from `packs/`: regenerate with `python3 tools/curriculum/pending_courses.py` (run in the build home) after a pair is released; the lists of finished foundations and halves are at the top of that script.
