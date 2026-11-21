PROGRESS (updated 2026-11-21 09:54 CST)
Course: en-ptpt   Branch: cursor/en-ptpt   PR: https://github.com/KyronEpperson/Lang-App/pull/4
Done: research, pron tool, lead note, decisions, briefs, deck A, deck B, lesson 1, lesson 2, lesson 3
Next: none
Checks: not run. `node tools/target/gen.js ptpt` throws before it reads the course.
Models used: research and pron tool = not recorded; decisions = grok-4.7; briefs = mk_briefs.py; deck A = grok-4.7-high; deck B = grok-4.7-high; lesson 1 = grok-4.7-high; lesson 2 = grok-4.7-high; lesson 3 = grok-4.7-high
State: GIVEN UP: tools/target/lib.js check() allows only a 2–3 letter code (/^[a-z]{2,3}$/). ptpt has 4 letters, so gen.js and validate.js cannot pass without editing the tools.

# Lead note: en-ptpt stage 1

For the main build, reviewing the European Portuguese course before any writer starts. Cursor wrote this after stage 1. It is the review note. The course profile is the separate file `docs/profiles/en-ptpt.md`.

Paths below are inside `source/`. In the main build's workspace that folder is `/home/claude`.

## Where the work is

- Branch `cursor/en-ptpt`. Draft pull request: not created. Do not treat a missing link as a published review.
- Profile: `docs/profiles/en-ptpt.md`
- Machine twin: `tools/target/ptpt/profile.json`
- Pron tool: `tools/target/ptpt/respell.js`
- This note: `docs/briefs/en-ptpt-lead.md`

Stage 1 files only. No lessons, no decks, no edit to `src/app.html`, no edit to the Brazilian course, no edit to `CURSOR-QUEUE.md`. `gen.js` and `validate.js` have not been run on `ptpt`, because there is no pack yet. The Spanish check `node tools/target/validate.js es` had already passed before this profile was written.

`tools/target/mk_briefs.py` writes `en-ptpt-A.md`, `en-ptpt-B.md`, `en-ptpt-1.md`, `en-ptpt-2.md`, `en-ptpt-3.md` and `en-ptpt-R.md`. It does not write this file. Leave this file in place when those briefs are generated.

## What to do

1. Read this note, then `docs/profiles/en-ptpt.md` §§1, 2, 6.5, 7, 8 and 11, then `tools/target/ptpt/profile.json` (lessons, decks, `standingRule`, `pronPattern`, `voiceMatch`).
2. Record a yes or a change for each decision in the next section.
3. Stage 2 starts only after those are recorded. The course is already at 28 lessons, the maximum. Another added lesson has no slot.

Done when there is a yes or a change for the articles move, for the compliments lesson, for the standing rule, and for the register, and stage 2 has not been started in the same step.

## Decisions to record

**1. Move `articles`.** It now sits immediately before `ser`. In `docs/roadmaps/ptpt.json` it sits after `ser`. Reason in profile §8: the NOVA FCSH semester A1 list (Portuguese numbering) puts noun gender, adjective gender and the articles before the verbs. That sheet is a category list, not a timetable. To keep the roadmap order, say so and name this as the reorder to undo. Nothing else was moved.

**2. Add `compliments`.** One new lesson, after `food` and before `city`, roadmap id empty. It is the home of the Compliments deck. NOVA's oral A1 sheet lists *felicitar e agradecer*. The 2012 EPE A1 programme lists *Felicitar alguém / responder a felicitação*. To keep 27 lessons, cut this one and hang the deck on greetings or on likes.

**3. Standing rule.** Agreement only: gender and number, the article in *o meu* / *a minha*, contractions, and the verb ending with its subject. *Tu* has its own ending. *O senhor* / *a senhora* take the *ele* form. Clitic place and the *sh* of final *s* are not the rule. The validator has no exemption, so the sounds lessons hinge on nouns with articles through the deck. The keyword regex and the tested lines are in profile §7. A change of rule means a new regex in `profile.json` and a new tested table in §7.

**4. Register.** *Tu* first, with the *tu* verb. *O senhor* / *a senhora*, or a bare third-person verb (*Quer um café?*), for strangers, older people and service. *Você* is named in the address lesson and not drilled. *Vocês* is plural "you". *Vós* is one recognition line. Detail is profile §2. A change means the profile, the sample cards and the standing-rule keywords are edited together. The keywords do not contain *você*.

These are already applied. A yes means writers follow them. A change means the profile and `profile.json` are edited before `mk_briefs.py` runs.

Spelling was not reopened as a choice. The roadmap already says the 1990 Agreement as used in Portugal. The pairs the Agreement does not erase (*facto*, *receção*, *António*, *amónia*) are in profile §2.1.

## Register, already applied

*Tu* with friends, family, peers and children. *O senhor* / *a senhora* or the bare third person when the prompt says an older person, a shop, or a stranger. English prompts do not say "(formal)" unless the item is testing the address. *Você* is not an accepted default answer. The article before a possessive is drilled (*o meu pai*), and a bare possessive is still accepted when the item is not about the article. Profile §2.

## App changes needed

None. European Portuguese uses the same Latin script as the Brazilian course. `foldAcc` already strips the tilde and the cedilla, so a missing *ã* or *ç* is "almost". Practice comparison already keeps hyphens, so writers list both *Chamo-me* and *Chamo me*. `hLang` already maps `ptpt` to `pt-PT`.

`voiceMatch` `^pt-PT` is profile data. `gen.js` already copies it. Without it, the picker can speak the course with a `pt-BR` voice. That is not an engine patch.

`gen.js` still writes `features.pron: false` for every course. Set it `true` when the pack is built, the same instruction as `en-pt`. That is a pack flag, not an app change.

## Pron tool: enforce these

Writers paste prons from `node tools/target/ptpt/respell.js`. `pronPattern` in `profile.json` is the string `pronPattern()` prints. Leave that string generated. Do not copy Brazilian *t*/*d*, final *l* as *w*, or a dropped infinitive *r* into this file.

Confirm the current output before writers start, from `source/`:

```
node tools/target/ptpt/respell.js "Bom dia" leite dois carro caro Brasil obrigado telefone estou "chamo-me" têm Lisboa
```

As of this note, `Bom dia` is `bohng DEE-uh`. The outputs to treat as unsafe or limited:

| Word | Output | What a writer does |
|---|---|---|
| moro | MOH-roo, with a stderr warning | Leave it off cards. The form page has no Portugal IPA. *Morar* is `moo-RAHR` and was checked |
| que | kih | Unstressed `/kɨ/` only. Do not use a stressed *Que bom* with this pron |
| os amigos | oosh uh-MEE-goosh | Pause form. Do not respell the link as *z* |
| Francisco | fruhn-SEESH-koo | Not checked for Portugal. Leave it off cards |
| fixe | FEE-shih | The informal word only. Not the verb form of *fixar* |
| para | PUH-ruh | The preposition. Not the verb *parar* |
| euro | AYW-raw | The open-*o* reading. The page also lists `/u/` |
| tenho | TUH-nhoo | The Portugal `/tɐ/` line, without the optional *j* |
| João | zhwowng | One syllable, the Portugal IPA. Not the Brazilian hiatus |
| Tiago | TYAH-goo | Glide, stress on the *a*. Not `tee-AH-goo` |
| Lisboa | lihzh-BOH-uh | The Lisbon [ɨ]. The broader Portugal line on the same page has [i] |
| por | poor | It is `/puɾ/`. It looks like the English word. *Pôr* is `pohr` |

A warned "check vowel" or "check x" line means the quality was guessed. Do not put that word on a card until it is in the list. The full list is profile §6.5.

## Evidence, keep at this strength

Profile §11 is the list. The ones that get over-read:

- The NOVA and EPE documents are category lists. They justify the articles move and the compliments lesson. They are not a week-by-week order for the other 26 lessons.
- The NOVA English column for the simple past drops *ser* and *estar*. The Portuguese column keeps them. The roadmap follows the Portuguese column.
- No agreement percentage was opened. Do not import the Brazilian profile's figures.
- CensusEasy is not the Census Bureau. Fall River's Wikipedia page gives conflicting ancestry percentages. The profile leaves them in conflict.
- *Você* is not taught as the polite default. One opened page groups *você* with *o senhor* as distant. The course follows the finer forms-of-address page. Profile §2.2 quotes both.
- PoisPois is a practitioner guide. The sound rules in §6 that writers will copy are the ones also on Wikipedia or on a Wiktionary Portugal line.

## Placeholders

Level titles are the Spanish and Brazilian set, Beginner through Master. The brand word is `Portugal`, chosen because the Brazilian course already uses `Português`. Change either on review if you want them different. Writers will copy what is in `profile.json`.
