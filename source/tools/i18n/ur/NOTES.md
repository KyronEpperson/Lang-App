# Urdu interface pack: notes for the main build (written in the cold review, 2026-11-23)

Style authority: `docs/profiles/ur.md` §2, §3 and §10. The interface writer left no notes; this file records what the review found fixed in `ui.json` / `roadmap.json` and what the main build must know. Nothing here was checked by a native speaker.

## Fixed terms (the same word in the course content and in the interface)

| English | Urdu | where |
|---|---|---|
| lesson / lessons (tab) | سبق / اسباق | counts use the unchanging «سبق»: «{1} سبق», «مکمل سبق: {1}/{2}» |
| practice | مشق | tab, buttons |
| review (SRS) | دہرائی; button «دہرائیں» | «دہرانے والے» = due |
| deck / card | ڈیک / کارڈ | never pluralised after a number |
| drills | مہارتیں | tab and tag |
| quick check | چھوٹا ٹیسٹ | lesson page |
| streak | لگاتار دن | counts «دن {1} 🔥»; a typing run is «سلسلہ» |
| mastered | پکا / پکے | «6 = پکا», «پکے کارڈ» |
| hint | اشارہ | |
| explanation (Why:) | وضاحت | `why` lines appear under it |
| correct / not quite | «درست!» / «درست نہیں» | |
| pronunciation aid | تلفظ | "romanization" and "pronunciation hint" both map to it |
| level / XP | لیول / XP | |
| progress / feedback | پیش رفت / رائے | |
| settings / sign in / sync | ترتیبات / سائن ان / سنک | |
| weekend | ویک اینڈ | course content only; no interface string contains it |
| main (non-be) verb | عام فعل | course content only |
| "no article" answer option | (کچھ نہیں) | course content only |

## Tab labels (all 8 code points or fewer, no vowel marks)

آج · مشق · دہرائی · اسباق · مطالعہ · مہارتیں · پیش رفت · رائے

## Level titles (one ladder, the same in `tools/content/ur/meta.js` TITLES and here)

Beginner مبتدی · Student طالب علم · Talker باتونی · Traveler مسافر · Local مقامی · Pro ماہر · Master ماسٹر

- Before the review `meta.js` had «استاد» for Master and the interface had «ماسٹر». The interface also translates the older ladder (Sprout کونپل · Student · Senior سینئر · Pro · Master · Sensei استاد), where «استاد» is already taken by Sensei, so the review kept «ماسٹر» for Master and changed `meta.js`. A native speaker may prefer another pair; whatever is chosen must be changed in both files.

## Counts, slots, weekdays

- Every count pattern is "number + unchanging noun" («{1} کارڈ», «{1} دن», «{1} سبق», «{1} منٹ», «{1} سیکنڈ», «{1} سوال», «{1} پوائنٹ», «{1} بار», «{1} ڈیک») or "label: number" («باقی: {1}», «نئے: {1}», «ہفتے: {1}», «دہرانے والے: {1}»). Rendered at 1, 2, 5 and 22 in the review: all read correctly; singular and plural English keys share one Urdu string.
- «{1} دن بعد» is used for "in N days" at every number (profile §10 asks for a native check of this one).
- Changed in the review: "Last {n} reviews …" was «پچھلی دہرائی: {1}» ("the last review: 50"); it is now «حالیہ دہرائی: {1} کارڈ» in all six patterns.
- Language-name slots stand at the start or after a colon: «{1}: آپ کا لیول کیا ہے؟», «{1} میں لکھیں», «کورس: {1}», «{1} سیکھیں، روزانہ 5 منٹ».
- Weekday headers are single letters, Sunday first: ا پ م ب ج ج ہ (اتوار، پیر، منگل، بدھ، جمعرات، جمعہ، ہفتہ). Thursday and Friday are both «ج». `Intl` has no Urdu narrow weekday (it prints S M T W T F S). If two letters fit the grid, a native speaker should choose the pair.
- Western digits everywhere; the engine must pass `ur` or `ur-PK` to `Intl`, never `ur-IN`.

## Direction

- No direction marks, no tatweel, no Arabic-only code points in any `t` (profile §6 grep: 0).
- The three "back" labels carry a right-pointing arrow typed by hand («→ واپس», «→ تمام اسباق», «→ اسباق»), as the Arabic pack does. If the engine ever mirrors these glyphs itself, they will point the wrong way.
- Strings that begin with a slot or a digit («{1} ڈیک · {2} کارڈ», «5 اور سیکھیں») read correctly in right-to-left elements; inside an element that takes its direction from the first strong character they may lay out left to right. Not rendered in the review.

## Roadmap titles

- Four titles were aligned with the course lesson titles in the review: the pron lesson (the English key says "R/L, F/P, TH"; the Urdu course teaches V / W, TH and stress, so the title is «تلفظ کی عام غلطیاں: V / W، TH اور زور»), modals, narrative tenses, passive («Passive Voice» keeps its English name, profile §3).
- **For the lead:** the basis line is translated from the English source as it stands: «ترتیب: CEFR A1 سے B1، کوریائی بولنے والوں کے مطابق ڈھالی گئی» ("adjusted for Korean speakers"). It is wrong for Urdu speakers, but the English roadmap source says so; left as translated.
- `python3 tools/i18n/road.py check ur` and `python3 tools/content/link_roadmap.py --check ur` could not be run on the review machine.

## For the native check (interface)

1. «مطالعہ» (Read), «مہارتیں» (Drills), «پیش رفت» (Progress), «دہرائی» (Review) as tab labels.
2. «آتا ہے» for "Got it" and «پکا / پکے» for "mastered".
3. «سہ پہر بخیر» for "Good afternoon" (the deck card glosses the English greeting as «سلام (دوپہر کے وقت)»).
4. «ماسٹر» against «استاد» for the top level.
5. «اٹکا ہوا کارڈ» for "leech", «لگاتار دن کی ڈھال» for "streak shield".
