# Audio clips

The app speaks with the device's built-in voice. For a language that has clips here, it plays the clip instead and keeps the device voice as the fallback.

- `audio/<lang>/manifest.json`: every sentence the app can speak in that language, with the clip name for each (made by `source/tools/audio/export.js`).
- `audio/<lang>/<name>.mp3`: the clips (made by `source/tools/audio/gen_azure.js`).
- `audio/<lang>/index.json`: the clips that exist. The app reads only this file. No `index.json` means the device voice is used.

## Making the clips (once per language)

1. In the Azure portal, create a Speech resource and copy one of its keys and its region.
2. On your computer, in this repository's folder (Node 18 or newer):

   ```
   export AZURE_SPEECH_KEY=<your key>
   export AZURE_SPEECH_REGION=<your region, for example eastus>
   node source/tools/audio/gen_azure.js ko --limit=20     # 20 clips first: open a few and listen
   node source/tools/audio/gen_azure.js ko es             # then everything
   ```

   On Windows PowerShell use `$env:AZURE_SPEECH_KEY="<your key>"` and `$env:AZURE_SPEECH_REGION="<region>"`.
3. `git add audio && git commit -m "Audio clips: ko, es" && git push`

Clips already on disk are never requested again, so a second run only makes what is new. To change a voice, edit `source/tools/audio/voices.json`, delete that language's `.mp3` files and run again.

The key is read from the terminal's environment only. Do not put it in a file in this repository.

## Keeping up with new cards

Every release refreshes `audio/<lang>/manifest.json` from the courses as they are now and writes a coverage table to `source/docs/AUDIO-COVERAGE.md` (and to that release's `source/docs/releases/<version>.md`): sentences with no clip per voice, characters to generate, and clips no sentence uses any more. A new card, or a card whose spoken text was edited, has a new clip name and counts as missing until the generator is run again; until then the app speaks it with the device voice. To check at any time without writing anything: `node source/tools/audio/refresh.js --check` (needs a build).
