# en-no cold review (2026-11-21)

The writers and this review are the same model family. Every stored pronunciation was already the output of `respell.js` before this pass (664 read, 0 rewritten). Fixes below come from pages opened in this review, or from a sentence that is wrong on its own. `HOLD` is still in this folder. `profile.json` was not edited. Nothing was deleted to hit a count.

## Batches

### Batch 1: decks-a.js, decks-b.js, extra-a.js, extra-b.js
- decks-a.js: `et bad` no longer says the d is silent. NAOB `bad` is [ba:d]; Topp Norsk lists `bad` among the words whose d must be said. The `med` note no longer states that every final d is silent.
- decks-b.js: the present and the cloud are `ei gave` and `ei sky`, matching the lesson and decision 1 (typed feminine is `ei` and `-a`). `en gave` and `en sky` stay in the notes as forms you will see. `den` in “Ja, her er den” stays: feminine. `semester` is marked as the Swedish trap (Swedish `semester` is a vacation; a holiday here is `ferie`). `frokost` is marked as the Danish trap (Danish `frokost` is lunch; lunch here is `lunsj`). Swedish `frukost` is breakfast, and Danish `semester` is a term, so the old note that blamed both languages for both words was wrong.
- extra-a.js: “Det er blått i stua” does not agree if it means the living room is blue (`stue` is feminine: `Stua er blå`). The example is now “Huset? Det er blått.” “Matpakka mi er i kjøkkenet” is now “på kjøkkenet”, the ordinary location phrase, the same pattern as NAOB’s “han er på badet”.
- extra-b.js: the present dialogue key and line are `ei gave`. “Ja, her er den” stays.

### Batch 2: lessons-1.js, lessons-2.js, lessons-3.js
- lessons-1.js: the consonants lesson now says a final d after a vowel is often quiet, and the `med` checks say that about `med`. `lessons-2.js` was read in full and not edited. `snakket` stays the typed past; `snakka` is still mention-only.
- lessons-3.js: the home lesson says `et bad` keeps its d. The shirt line now says you will also see `en skjorte` and `skjorten` (NAOB: masculine, also feminine; the dictionary’s definite is `skjorten`, and a citation uses `skjorta`). Typed answers stay `ei` and `skjorta`. The traps paragraph splits Swedish `semester` from Danish `frokost`. The two breakfast items no longer say the mix-up includes Swedish.

### Batch 3: respell.js, then `node tools/target/repron.js no`
Lexicon only, where a page shows the old tool output was wrong. 664 prons read, 14 rewritten. No pron string was typed by hand. No pitch. No long stressed vowel plus r in the same syllable.

| Word | Source | Was | Now |
|---|---|---|---|
| bad | NAOB [ba:d] | bah: | bah:d |
| etasje | NAOB [eta:´ʃə], stress on the long a | EH:-tah-shuh | uh-TAH:-shuh |
| apoteket | NAOB apotek [apote:´k], final stress; -et drops t | AH:-poo-tuh-kuh | ah-poo-TEH:-kuh |
| toalettet | NAOB [toale´t:], final stress | TOO:-ah-luht-uh | too-ah-LEHT-uh |
| Gratulerer | NAOB gratulere [gratule:´rə], stress on the long e | GRAH:-tue-lae-ruhr | grah-tue-LEH:-ruhr |
| vakkert | NAOB vakker [va´k:ər], schwa, not æ | VAHK-aert | VAHK-uhrt |
| ambulanse | NAOB [ambula´ŋsə], stress on lan | AHM-bue-lahn-suh | ahm-bue-LAHNG-suh |
| forkjølet | NAOB forkjøle [fårçø:´lə], stress on the long ø | FOHR-hyoe-luh | fohr-HYOE:-luh |
| aktuelt | NAOB aktuell [aktue´l:], final stress; neuter adds t | AHK-tue-uhlt | ahk-tue-EHLT |
| torsdag | NAOB [tå:´rsdag], long å; rs is the course’s sh | TOHSH-dahg | TOH:SH-dahg |

Also in the lexicon, not stored on their own cards: `etasjen` uh-TAH:-shuhn, `toalett` too-ah-LEHT, `ambulansen` ahm-bue-LAHNG-suhn. `apotek` was already ah-poo-TEH:K and was left there.

Checked and kept: `lørdag` LOE:-rdahg matches NAOB [lø:´rdag] (long ø; the r sits at the start of the next syllable because a long vowel plus r in the same syllable does not match the pattern). `søndag` SOEN-dahg matches NAOB [sø´ndag] (short ø). `skjorte` SHOHRT-uh matches NAOB [ʃo`rtə] (short o, rt, schwa).

Left exactly as they were: `beklager` buh-KLAH:-guhr, `sover` SOH:-vuhr, `soverom` SOH:-vuh-room, `osten` OOS-tuhn (lexicon; the card is `ost`), `hvorfor` VOOR-fohr, `ser` seh:r, `Velkommen` VEHL-kohm-uhn, `snakket` SNAHK-uh. No past-pronunciation page was opened for `snakket`. The tool still drops t on -et of four letters or more, which is how `huset` is taught.

## Not changed, and why
- `fotball` stays FOHT-bahl. NAOB writes [fo`tbal]. The same letter “o” is used for `skjorte`, whose vowel is the å-sound, so the line does not prove the vowel of `fot` (oo) against the short o of `komme` (oh). A native should say which one this is.
- `flyplassen` stays FLEWP-lahs-uhn. The NAOB page has no uttale line. Gender is masculine there, and the card already says `en`.
- `ham` stays hah:m. The NAOB page that came up was `ham` “skin”, [ham:], not the pronoun.
- `på andre etasje` stays a wrong option. Ordbøkene’s example is “hvilken etasje bor du i?” A native should say whether `på` is also ordinary.
- `Jeg er en lærer` stays unaccepted. It is grammatical and less usual. The course teaches the no-article sentence and does not accept the article.
- `glad` stays glah:d, as the profile set it. Topp Norsk lists `glad` with the silent-d words (`med`, `brød`, `rød`). The card still says the d is said. A native should pick one.
- Profile samples still say `en gave` and still lump Swedish and Danish together for both `semester` and `frokost`. The profile was not edited. The course files follow the typed-feminine decision and the pages opened here.
- å/a practice items were already `!strict` (båt/bat, tå/ta, å/a). æ and ø are not folded. No new pair needed a flag. The toe check offers `tå` and `ta` as buttons; checks have no strict flag.

## Totals
| File | Wrong Norwegian | Wrong teaching | Practice | Pron | Wording |
|---|---|---|---|---|---|
| respell.js | 0 | 0 | 0 | 12 lexicon entries | 0 |
| decks-a.js | 1 (`et bad`) | 1 (`med` note) | 0 | 2 regenerated | 0 |
| decks-b.js | 2 (`ei gave`, `ei sky`) | 2 (`semester`, `frokost`) | 0 | 8 regenerated | 0 |
| extra-a.js | 2 | 0 | 0 | 0 | 0 |
| extra-b.js | 1 | 0 | 0 | 0 | 0 |
| lessons-1.js | 0 | 1 | 2 whys | 0 | 0 |
| lessons-2.js | 0 | 0 | 0 | 0 | 0 |
| lessons-3.js | 0 | 3 | 2 whys | 4 regenerated | 0 |

Read in full: `docs/briefs/en-no-R.md`, `docs/TARGET-REVIEW.md`, `docs/profiles/en-no.md`, `docs/briefs/en-no-decisions.md`, `docs/briefs/en-no-lead.md`, `docs/PRACTICE-SPEC.md`, `docs/TARGET-BRIEF.md`, the last section of `docs/PHASE2-BRIEF.md`, `profile.json`, `respell.js`, `repron.js`, `gen.js`, `validate.js`, `lib.js`, and every deck, dialogue, example, pattern, lesson body, example row, check and practice item. Not opened: `src/app.html`.

## Ten strings a native speaker should check first
1. `et bad` bah:d, and `glad` glah:d against Topp Norsk (silent).
2. `Gratulerer!` grah-tue-LEH:-ruhr.
3. `Jeg er forkjølet.` yai ae:r fohr-HYOE:-luh. The NAOB line is the verb [fårçø:´lə]; confirm the participle does not keep a t.
4. `torsdag` TOH:SH-dahg (long å, rs as sh). `lørdag` LOE:-rdahg and `søndag` SOEN-dahg were kept.
5. `Hvor er toalettet?` voor ae:r too-ah-LEHT-uh, and `Hvor er apoteket?` voor ae:r ah-poo-TEH:-kuh.
6. `en ambulanse` ehn ahm-bue-LAHNG-suh (NAOB writes ŋ).
7. `fotball` FOHT-bahl: oo of `fot`, or oh of `komme`?
8. `flyplassen` FLEWP-lahs-uhn. No uttale on the NAOB page.
9. `ham` hah:m in `Anna ser ham.` The pronoun was not the NAOB entry that was opened.
10. `Matpakka mi er på kjøkkenet.` and `Huset? Det er blått.`

## Still unsourced (do not treat the tool line as confirmed)
These were not given a lexicon entry. Where the word has no stored pron, the line is what the tool would print.

- `flyplassen` FLEWP-lahs-uhn (stored; no uttale found).
- `fotball` FOHT-bahl (stored; NAOB [fo`tbal] does not settle oo vs oh).
- `ham` hah:m (stored; pronoun page not opened).
- `aldri` AHL-ree (prose only, in the negation lesson).
- `genseren` GEHN-sae-ruhn (prose and the shopping table; the æ in the middle syllable is the suspicious part; `en genser` is stored as GEHN-suhr).
- `januar` YAH:-nue-ahr (not in the course).
- `amerikansk` AH:-mae-ree-kahnsk (not in the course).
- `Bokmål` BOHK-mohl (prose only; the o of `bok` is written oh).
- `søstera` SOES-tae-rah (the card pron is `søster` SOES-tuhr; the definite is only in the note and the gender lesson).
- `dattera` DAHT-ae-rah (not in the course).
- `læreren` LAE:-rae-ruhn (the card is `en lærer` LAE:-ruhr; the definite is only in the note). The second æ is the suspicious part.
- `snakket` SNAHK-uh, until a page gives the past pronunciation. `Velkommen` VEHL-kohm-uhn stays on Wiktionary’s first-syllable stress.

Also still for a native: is `på andre etasje` ordinary beside `i andre etasje`, and should `Jeg er en lærer` ever be accepted?

`node tools/target/repron.js no` after the edits: 664 prons read, 0 rewritten. `node tools/target/gen.js no` wrote `/tmp/course-en-no.hold.js` (HOLD kept the pack out of `packs/`). `packs/roadmaps.js` was not modified.

PASS: all checks OK
