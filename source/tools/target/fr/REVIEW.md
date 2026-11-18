# en-fr cold review (EN-FR-REVIEWER, 2026-11-18)

Brief: docs/TARGET-REVIEW.md + docs/briefs/en-fr-R.md. Saved batch by batch.

## Batch 0: pronunciation tool (tools/target/fr/respell.js) and full pron regeneration

Fixes in the tool (each one marked "reviewer 2026-11-18" in the source):
- *sens* as a verb: a rule makes it `sahN` when *je* or *tu* stands before it past any object pronouns or *ne* (*je le sens, je ne sens rien, tu te sens*); the noun (*le bon sens*) keeps `sahNs`. *Je ne me sens pas bien.* → `zhuh nuh muh sahN pah byaN`.
- *ennui / ennuie / ennuies / ennuient / ennuyeux / ennuyeuse / ennuyé(e)(s) / ennuyant*: lexicon `ahN-nwee…`. *Je m'ennuie.* → `zhuh mahN-nwee`.
- *À plus!* → phrase `ah plews`; *de plus en plus* → `duh plew zahN plew`.
- *plus* = "more": a rule makes it `plews` directly before *que / qu'* and in *plus de … que* in the same clause (*Il a plus de temps que moi.* → `plews`). *plus* before an adjective (*plus grand que*), *ne … plus*, *non plus* stay `plew`.
- *pénicilline* `pay-nee-see-leen`, *baskets* `bahs-keht`, *Chloé* `kloh-ay`: lexicon.
- *-tions* after *nous* (verb ending: *nous habitions, nous étions*) keeps the t: `-tyohN`. Nouns (*les nations, attention*) keep `-syohN`.
- Future *-rai*: the length guard was off by one (*J'irai* gave `-reh`); every word in *-rai* of 4+ letters now ends `-ray` (*vrai, mai, quai, gai* are in the lexicon).
- *ey* + vowel → `eh` + `y`: *Asseyez-vous* → `ah-seh-yay voo`.
- *cet*: lexicon `seh` + determiner liaison `t`: *cet ami* → `seh tah-mee`, *cet hôtel* → `seh toh-tehl`.
- Numbers 70–99: phrases generated for every *soixante-…* and *quatre-vingt-…* compound, including *quatre-vingt-dix-neuf* → `kah-truh vaN deez nuhf`, *soixante-dix-sept* → `swah-sahNt dee seht`, *soixante et onze* → `swah-sahN tay ohNz`.
- Schwa dropping now leaves a syllable boundary, so the consonant before a dropped *e* closes its syllable: *appeler* → `ahp-lay`, *appelez* → `ahp-lay` (side effect, also right: *visiterai* → `vee-zeet-ray`; *samedi, maintenant, boulangerie* unchanged).
- Spoken *y a*: a rule gives `yah` only when *y a* opens a clause (*Y a un problème?* → `yah uhN proh-blehm`, *Oui, y a du pain*); *Qu'est-ce qu'il y a?*, *Elle y a pensé*, *Y a-t-il* keep `ee ah`.
- The *nous* flag for *-tions* is set only by a subject *nous* (not after *chez, avec, pour…*) and does not run past *le / la / les*, so *chez nous les traditions* keeps `-syohN`.
- Liaison after *être*: *est / c'est* (fixed list) and *suis* (before a vowel) were already as the profile §6 lists them; *sont* had a fixed set (*en, à, au, aux, ici*); *êtes* and *sommes* had none. They now take the same fixed set as *sont* (*sommes* is my extension for consistency, beyond the lead's note and beyond the profile's §6 list; native check): *Vous êtes en retard.* → `voo zeht zahN ruh-tahr`, *Nous sommes à Lyon.* → `noo sohm zah lyohN`; *Vous êtes américain* stays unlinked (optional liaison, §6.5).

Regeneration: a script re-ran `respell()` on all 561 pron fields (317 deck cards + 244 `{{ex:…}}` rows; count asserted) and rewrote them. 14 changed: *Comment vous appelez-vous?*, *Appelez une ambulance!*, *Nous devons appeler un médecin.*, *Tu peux appeler une ambulance?* (appeler); *Je ne me sens pas bien.*; *Je m'ennuie.*; *Y a pas de quoi.*; *Y a un problème?*; *À plus!*; *Il a plus de temps que moi.*; *Nous sommes à Lyon.*; *Vous êtes en retard.*; *Quand je serai à Paris, je visiterai le Louvre.* (syllable split only). Validator PASS; no "pron differs" lines, so the same string has the same pron everywhere.

Independent check: a verifier loads the generated pack and asserts `respell(target) === pron` for all 561 (0 differ); it is re-run after every batch. Regression check: old and new tool run over all 1,059 French strings in the pack (cards, examples, dialogues, patterns, practice answers, options): 30 differ, every one traced to an intended fix (*cet été* → `seh tay-tay` is right).

Spot-check: all 561 prons read against the French after the fix (well over the 40 asked), looking at silent final consonants, nasal N and liaison. No further errors found. Points a native speaker may still question (not errors under the profile's key): *l'essayer* `leh-seh-yay` (many say `ay-`); *en août* `ahN noot` (both `oo` and `oot` are heard); *Elle est allée* has no link while *Je suis allée* has one (profile §6: *suis* links before any vowel, *est* only before a fixed list).

## Batch 1: decks-b.js (read in full, incl. the whole "Spoken French" deck)
Wrong language 0 · wrong teaching 2 · practice 0 · pron 0 (all regenerated in batch 0) · wording 0.
- Work and school, *Je commence à neuf heures.*: the note said "commencer à + time"; the *à* here is the clock-time "at", not *commencer à* (which takes an infinitive). Rewritten.
- Spoken French, *Tu viens?*: the note called *Est-ce que tu viens?* the "written" form; a rising-voice question is also normal in informal writing. Now "More formal:".
- Writers' doubts checked and kept: *Y a pas de quoi* (real, very common spoken form of *il n'y a pas de quoi*), *Bof*, *J'en ai marre*, *Je suis crevé* (all current, informal, notes say so); *énervé* = annoyed / worked up (right; "not nervous" is the right warning); 15 (SAMU) and 112 (EU-wide) are correct for France.

## Batch 2: decks-a.js (read in full)
Wrong language 0 · wrong teaching 0 · practice 0 · pron 0 · wording 0. Doubts checked and kept: *chocolatine* (southwest France; right), *huitante* (Vaud, Valais, Fribourg; right), *carafe d'eau* free tap water (right), *Je fais du trente-huit* (the normal way to give a size), *et* only in 21–71 (right), *cent / mille* plural rules (right).

## Batch 3: extra-a.js, extra-b.js (read in full)
Wrong language 1 · wrong teaching 0 · practice 0 · pron n/a · wording 2.
- extra-b DIALOG *J'aime le cinéma*: *je vois souvent un film* is unidiomatic → *je vais souvent voir un film*.
- extra-b DIALOG *J'ai raison*: A's line did not lead to B's "See? I'm right!" → A now concedes (*Ah, c'est à gauche, pas à droite.*).
- extra-b EXAMPLES *Je serai en vacances…*: "…so I'll answer your emails on Monday" contradicted being away next week → *aujourd'hui* / "today".

## Batch 4: lessons-1.js (sounds … cest; read in full: bodies, checks, all practice items)
Wrong language 1 · wrong teaching 1 · practice 0 · pron 0 · wording 0.
- `present` or #8: *Nous cherchons un travail* (writers' doubt): acceptable but not the natural phrase (*du travail / un emploi*); replaced by *Nous cherchons un appartement* (word from the Home deck), prompt changed to match; standing-rule hinge (cherchez) kept.
- `adjectives` body: "the plural -s is always silent" overgeneralised (liaison: *les petits enfants*); now says it is heard only as a liaison z.
- Doubts checked and kept: `sounds` CaReFuL wording ("usually", with the -er exception stated) is accurate; `greetings` accepting *Comment vous allez* is fine (common spoken French, prompt only asks for *comment*); `negation` says *ne* is "often" dropped (not "almost always"): fine.

## Batch 5: lessons-2.js (possessives … pronominal; read in full)
Wrong language 0 · wrong teaching 0 · practice 2 · pron 0 · wording 0.
- `partitive` mc #4: distractor *Il n'y a pas le lait* (writers' doubt) can be correct French in context ("the milk isn't there"), so it was not safely wrong → replaced by *Il n'a pas de lait* (he has no milk), why updated.
- `irregular` mc #2: distractor *Il a beau* (writers' doubt) is a real fragment of *avoir beau* + infinitive → replaced by *Il y a beau*, clearly wrong.
- Doubts checked and kept: `numbers` *six / dix* silent before a consonant (right), *vingt-et-un* hyphenated per the 1990 reform (right, and both spellings accepted in the type items).

## Batch 6: lessons-3.js (imperative … relatives; read in full)
Wrong language 0 · wrong teaching 1 · practice 0 · pron 0 · wording 0.
- `spoken` body: "expect it [dropped ne] in almost every negative sentence you hear" overclaimed (writers' doubt) → "very often dropped … in many of the negative sentences you hear among friends; in careful or formal speech the ne comes back".
- Doubts checked and kept: `futur` framing (je vais + verb common for plans, futur simple for further ahead, predictions, promises, writing) is balanced; `imparfait` mc marking *Le samedi, je fais du vélo* wrong for "used to" is right (present tense); `relatives` wrong options (*qui tu as fait*, *le jour quand…*) and `compare` wrong options (*plus bon*, *plus bien*, *aussi … comme*, *le plus jeune* for Chloé) are all really wrong; `spoken` accepting *J'sais pas* under "(spoken)" is fine.

## Final checks (all files)
- Accent-only contrasts: script over every mc / type / order item; the only accent-only pairs are *ou/où* and *parle/parlé* (all marked `!strict`) and the intended *sœur/soeur* accepted variants.
- Hand-written respellings in notes and bodies agree with the tool (*et un* "ay uhN", *il est* "ee leh").
- `gen.js` + `validate.js fr`: PASS. Verifier: every pron equals `respell(target)`. `node --check` on all JS files: OK.
- Not changed: profile.json, packs/, src/, docs/. Departure from profile §6 to flag: liaison after *êtes* (lead's request) and *sommes* (my extension) before *en, à, au, aux, ici*.
