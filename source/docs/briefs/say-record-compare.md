# Say it, record it, compare it (SR-1)

Solution 8 of the course report: nothing in the app asked the learner to speak, or let them hear themselves. Now a `🎙 Say it` button sits next to a target word or sentence.

## What the learner sees (en-es)

- The button is on: the new-card screen (next to the speaker), the answer of a quiz question, and a story line the learner has opened.
- It opens a sheet with the sentence and four buttons: `Model`, `Record`, `You`, `Both`.
- `Record` asks the browser for the microphone, records until `Stop` (or at most 15 seconds), then plays the model and the recording one after the other.
- Nothing scores the recording. The learner's ear compares; they can record again as often as they like.
- A blocked microphone is explained in the sheet. A device without recording support shows no button.

## Privacy

- The recording is held in memory only. It is not saved, not sent anywhere, and is thrown away when the sheet closes or the page changes. The sheet says so.
- The microphone is on only between `Record` and `Stop`.
- The site header `Permissions-Policy` changed from `microphone=()` to `microphone=(self)` (in `build.sh`): without that no page of the site could ask for the microphone. Camera, location and the rest stay off.
- This is not solution 12 (speech sent to a recognition service). That one still needs the owner's yes.

## Where the code is

- `sr*` functions in `src/app.html` (`tools/patches/sr/sr.js`, applied by `tools/patches/sr_record.py`). `srOn()` holds the course switch (`en-es`).
- `srBtn(text)` returns the button; any `[data-rec]` button opens the sheet.
- Test: `tools/tests/sayrecord.js` (fake microphone), in `ship.sh`.

## Rolling out

- Add the course id in `srOn()`. Nothing in the data changes.
- The model is the recorded clip when there is one, else the device voice: courses with weak voices (Cebuano has none) gain little until they have audio (solution 7).
- Interface strings (`Say it`, `Model`, `You`, `Both`, `Record`, the messages) need translating for courses taught in other languages.

## Not tested

Real phones (iPhone Safari records in a different format; the code takes whatever the browser gives), real microphones, learners.
