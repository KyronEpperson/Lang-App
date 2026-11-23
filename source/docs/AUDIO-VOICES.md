# Audio voices (woman / man)

The contract between the clip files and the app (site build only: http(s) with `window.LANGAPP_MANIFEST`).

## Layout

```
audio/<lang>/f/index.json     {"clips": ["<k>", ...]}   woman's voice
audio/<lang>/f/<k>.mp3
audio/<lang>/m/index.json     {"clips": ["<k>", ...]}   man's voice
audio/<lang>/m/<k>.mp3
audio/<lang>/index.json       old flat layout, voice-neutral fallback (still works)
audio/<lang>/<k>.mp3
```

- `<k>` = `clipKey(text)`: 14 hex digits (cyrb53) of the NFC sentence as the app speaks it (`sayText`). It is in `tools/audio/lib.js` and `clipKey()` in `src/app.html`, and the two must stay identical.
- A language can have no voice folder, either one, or both. An `index.json` that is missing, not valid JSON or has an empty `clips` list counts as "no clips".

## What the app does

- When a course opens, the app fetches the three `index.json` files for its target language once and keeps the result for the session. Switching voice does not fetch them again. A missing file is a normal 404.
- The preference is `S.voice`, saved as `META.prefs.voice` (`'f'` or `'m'`). It is one global setting for the device, not per course, and it syncs with the account like the other prefs. When it is unset the learner has not been asked yet, and the app plays `'f'`.
- Folder choice: the chosen voice, else the other voice, else the flat layout, else the device voice (`speechSynthesis`). Voices are never mixed. A sentence missing from the chosen folder's index uses the device voice, not the other recording.
- UI that appears only when the course's target language has BOTH `f` and `m`:
  - the 👩/👨 button in the top bar (`#voiceBtn`)
  - the "Voice" row in Progress › options (`#voiceRow`)
  - the question in onboarding (`#obVoice`)
  - a one-time card on Today (`#voiceAsk`) for learners who finished onboarding while the preference is unset. Dismissing the card keeps `'f'`.

## Adding a voice

Generate clips into `audio/<lang>/f/` or `audio/<lang>/m/`, then write that folder's `index.json` listing exactly the clips that exist. Test: `node tools/tests/voicetest.js`.
