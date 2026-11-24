# spr-en: cold review (SPR-REVIEWER, 2026-11-24)

Scope: every row that differs from es-en (decks, extra, meta, lessons, practice, more/a1, a2, b1), the new `spanglish` lesson, the 14 Spanglish cards, `ui.json`, the writers' deviation fragments; `scan.js` and `list_type.js` over the whole generated pack (all 130 type items read).

## What I changed (before → after)

**Wrong or misleading teaching**
- `decks.js` deck 22, *Give me a break!* note: «es una queja, como «¡por favor!» o «¡no me digas!»» → «… o «¡qué va!»». In Puerto Rico *¡No me digas!* means surprise ("really?"), not a complaint or "come on". *¡Qué va!* matches the card meaning (*¡Ya, no exageres!*) and the mofongo dialogue.

**Typed-answer pass (§8.3)**
- `more/a1.js` `spanglish#13`: «Él janguea con sus panas» (simple present with no time cue, so *He's hanging out with his friends* would also be right) → «Él siempre janguea con sus panas»; accepted: *He always hangs out with his friends* / *… his buddies*; hint «always · hangs out · friends — con he». The map's «los viernes» / *on Fridays* puts a[0] at 8 words, and validate allows at most 7. That is why writer C cut it. *Siempre* pins the tense in 7 words. The lesson-level entry covers it (`extraLessons: spanglish`).
- `practice.js` `phrasal#12`: «Ella cuida a su madre (lo hace siempre)» → «Ella cuida a su madre (presente simple)». With «lo hace siempre», a learner is likely to type *She always looks after…*, which is not accepted. A grammar cue cannot be translated into an extra word. It follows the same pattern as D's «(en voz pasiva)».

**Setting (§8.2)**
- `more/a1.js` `third-s#0` (mc question): *My brother ___ in Bogotá.* → *My brother ___ in Ponce.* It is the same "my brother" as `be#5`/`#8` (Lima → Ponce, listed in §8.2). The options are unchanged. Recorded in `deviations.review.json`. Parity does not compare mc questions, so the record exists only for traceability.

**Spanish naturalness**
- `more/a1.js` spanglish check 2: «Te escribo un texto esta noche» → «Te mando un texto esta noche». This matches practice #3 («Te mando un texto más tarde»). *Escribir un texto* reads as writing an essay.

## Edits per file

| file | edits | role |
|---|---|---|
| decks.js | 1 | A |
| extra.js | 0 | A |
| meta.js | 0 | A |
| lessons.js | 0 | B |
| practice.js | 1 | B |
| more/a1.js | 3 | C |
| more/a2.js | 0 | D |
| more/b1.js | 0 | D |
| ui.json | 0 (confirmed `{}`) | I |
| deviations.review.json | new (1 entry) | R |

## Open points: decisions

1. **Left as is:** `third-s` check 0 «She ___ in Lima» (an unnamed *she*, not the learner's family), `articles-2` *I live in Peru* (the el Perú article contrast needs a country that takes an article) and `tense#2` (a trip). **Fixed:** `third-s#0` *My brother… Bogotá* (above).
2. `phrasal#2` *I grew up in Bayamón*: **kept**. It is the learner's origin, so §8.2 covers it, and the lesson's ex row matches it.
3. Cues: `first-conditional#11` «tomaré» kept (natural, and it pins *will*). `passive#11` «(en voz pasiva)» kept (redundant with the hint but harmless). `present#11` «(por costumbre)» kept (reads naturally next to «Tomo té»). `phrasal#12` changed (above).
4. New Spanish, read as a Puerto Rican: «¡Ya, no exageres!», «Vamos a janguear este fin de semana», «Él janguea con sus panas» (in a Spanglish prompt, not an explanation), «llámame pa'trás», «aplicar para un trabajo», «está full», «el rufo», «printear», «likear», «mahones», «compañía de guaguas», «¿Parqueaste el carro?»: all natural, and kept. The final-*s* paragraph in `pron` is accurate and respectful ("suavizar"). «en tu español» and «En muchos lugares decimos» are good. The decimal claim in `numbers` is correct: Puerto Rico writes 3.50 and 1,000, as the US does.
5. «En Estados Unidos…» (about 30 inherited notes): **left**. spr.md names *los Estados Unidos* as the neutral vocabulary, but it does not require rewriting inherited notes. See "Could not fix".
6. Spanglish: #7 x «to are» kept (*are* adds the concordancia twin, and the item still hinges). #13 changed (above). #12 hint «where · can · park — con el auxiliar» kept (same shape as every other hint).

Name respellings: *San Juan* `SAN WAAN`, *Puerto Rico* `PWER-te RII-kou`, *Orlando* `or-LAN-dou`, *Ponce* `PAAN-sei`, *Bayamón* `bai-e-MOUN` are the only spellings in the sources. *Mayagüez* appears only in tiles and notes, with no pron.

## For a Puerto Rican speaker: top ten

1. *Give me a break!* is a complaint ("¡qué va!", "¡ya, no exageres!"). To ask for a pause: *Can I take a break?*
2. *Aplicar para* → *apply for a job* (not *apply a job*).
3. *Llámame pa'trás* → *Call me back*. With a pronoun, *back* goes after it.
4. *Te texteo* → *I'll text you*, with no *to*.
5. *Voy de shopping* → *I'm going shopping*, with no *to*.
6. *Está full* → *It's packed* (people) or *It's sold out* (tickets).
7. *Parquear, janguear, chequear, printear, likear* → *park, hang out (with), check, print, like*: ordinary verbs, so *she hangs out*, *Did you park?*
8. Pronounce final *-s/-st* in full (*works, first, costs*): the aspirated *s* erases the plural and the third person.
9. *Actually* is «en realidad»; *currently* is «actualmente».
10. Write what you learned by ear in full: *going to*, *want to*, *could have* (not *gonna, wanna, could of*).

## Could not fix within scope (wrong in es-en too, or a policy call)

- About 30 inherited card notes say «En Estados Unidos…» as if from abroad, e.g. «la atención médica en Estados Unidos es muy cara», «el precio de la etiqueta no incluye impuestos», «el número de emergencias… 911». Most of them are also true in Puerto Rico, and the framing places the island outside the US. This is a political-neutrality question for the owner: rewording to «En inglés…» or «En los Estados Unidos (y en Puerto Rico)…» touches about 30 rows that the profile does not name.
- es-en `email#11`: the `why` says «se dice con "be off"» and `x` is "have", but four accepted answers use *have* (*I have tomorrow off*…). The `why` and the distractor contradict the accepted list. This is live in es-en.
- es-en `false-friends#13` «Ella asiste a clase»: simple present with no cue, so *She's attending class* is not accepted. It is low risk, so I left it.
- es-en `perfect` body: «en México o Argentina se dice más «fui»». Puerto Rico also prefers *fui*. It is not wrong, so I left it.
- spr.md §9 suggested «¡No me digas!» as a gloss for *Give me a break!*. That gloss is wrong for Puerto Rico (it means "really?"). The profile should drop it.

## Checks (after the edits)

`gen` → validate **PASS** · parity **PASS** (WARN unused: `lessons:spanglish`, `items:perfect-2#ex0`, both harmless records) · lint **0 blocking** · alphabet **PASS** · `node --check` OK on decks.js, practice.js, more/a1.js.

## Roles

- A (opus): 1 edit
- B (opus): 1 edit
- C (opus): 3 edits
- D (opus): 0 edits
- I (sonnet): 0 edits
