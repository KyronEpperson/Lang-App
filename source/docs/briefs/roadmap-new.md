# Brief: lesson roadmap for a new language (for English speakers)

Lang App teaches languages to English speakers at level A1. For each language in your list, plan the lesson structure: the ordered list of lessons a complete beginner course will have. Nothing else is written now (no lesson bodies, no decks). The roadmap is shown in the app as the "coming soon" preview for that language, and later it is the contract the course writers follow.

Read first: three existing roadmaps in /home/claude/packs/roadmaps.js as models: `id` (Latin script, no script stage), `ru` (new alphabet), `th` or `hi` (hard script). Also skim one finished course profile's lesson list to see what a roadmap turns into: /home/claude/docs/profiles/en-id.md section 8.

## What to produce, per language
One JSON file per language: /home/claude/docs/roadmaps/<code>.json, exactly this shape (valid JSON, UTF-8):

{
 "code": "<code>",
 "name": "<English name>", "self": "<the language's own name, in its own script>",
 "variant": "<the variety taught, e.g. 'Standard Dutch (Netherlands)'>",
 "voice": "<the BCP-47 tag a device voice would have, e.g. nl-NL>",
 "script": "<'Latin' | 'Latin with extra letters: …' | the script name; and whether it is right to left>",
 "basis": "<the syllabus or framework the order follows, one line>",
 "src": ["<each source you ACTUALLY opened or searched and read, one line each>"],
 "note": "<what is NOT from those sources: say plainly which parts are common course practice or your own judgment>",
 "hardest": ["<the three or four things English speakers find hardest in this language at A1, one short line each>"],
 "stages": [
  {"en": "<stage title>", "items": [["<code>-<id>", "<lesson title in English, with the key words of the language where that helps, as the models do>"], …]},
  …
 ]
}

Rules:
- 22 to 27 lessons in 3 or 4 stages, level A1, in teaching order. Ids are short, lowercase, hyphenated, unique within the language, prefixed with the code and a hyphen (`nl-de-het`).
- Stage 1 is always sounds / spelling (or the script) plus greetings and first words. A language with a new script gets as many script lessons as it needs (Greek and Bulgarian 2–3, Persian and Urdu 4–5, Cantonese: jyutping and tones plus first characters).
- Order by what a beginner needs and by dependency (a lesson never needs grammar from a later one). Include the survival topics (introducing yourself, numbers and prices, ordering food, directions, time) as lessons or inside grammar lessons, the way the models do.
- Titles name the actual forms (e.g. "de and het: the two words for 'the'", "Vowel harmony: -lar / -ler"), not vague labels. Every word of the language in a title must be correctly spelled, with its diacritics.
- Research: use WebSearch / WebFetch to find a real A1 syllabus or the table of contents of a standard beginner textbook or university course for each language, and follow its order where one exists. Be honest in `src` and `note`: list only what you opened; if you could not open anything for a language, say so and say the order is common practice from your own knowledge.
- Decide the variant plainly (e.g. Norwegian Bokmål; Persian of Iran (Farsi) in Perso-Arabic script; Urdu in Nastaliq script; Cantonese of Hong Kong with traditional characters and Jyutping; Tagalog (Filipino) of Manila; Swahili: standard (Tanzania / Kenya); Greek: modern standard; Cebuano of Cebu).
- English only. No Korean or other translations.

Save each file as soon as that language is done (the workspace can restart). Validate every file with `node -e "JSON.parse(require('fs').readFileSync('<file>','utf8'))"`. Write only files under /home/claude/docs/roadmaps/. Do not touch anything else or git.

Final reply: one line per language (lessons count, stages, basis, whether a real syllabus was opened), then anything the lead should decide.
