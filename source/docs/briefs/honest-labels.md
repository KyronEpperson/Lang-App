# Honest labels (HL-1)

Solution 14 of the course report: tell learners how long a course takes, what it covers and what to add outside the app.

## What the learner sees (en-es)

- Above the lesson list, a closed panel: `What this course covers · 26 lessons · about 30 to 40 hours`. Opened, it has four parts: the level it reaches, "After it you can", "It does not train yet", "Add outside the app".
- Each lesson page opens on `🎯 After this lesson you can: …`, using the lesson's own blurb.
- The lesson time label is `~15 min` (since 2.144.0).

## Data and code

- `tools/about/<course>/about.json`: `{about:{hours,level,can:[...],not:[...],add:[...]}}`. `node tools/about/apply.js` writes it into the pack as `ABOUT` (block before SECS); `ship.sh` checks it.
- `abFor()`, `abPanelHTML()`, `abGoalHTML()` in `src/app.html` (`tools/patches/ab/ab.js`). A course without `ABOUT` shows neither the panel nor the goal line.
- Test: `tools/tests/labels.js`.

## The numbers

- The hours are an estimate from the report's time model, raised for the longer lessons of the pilot. They are not measured. The panel says so.
- "Most of level A1" is the dispatcher's judgement from the lesson list, not an exam result.

## Rolling out

Each course needs its own `about.json`: the hours, the reach and the gaps differ (Japanese: 30 kanji; Cebuano: no audio). The report's course table has the facts.
