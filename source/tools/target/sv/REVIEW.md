# en-sv cold review

Reviewer did not write the lessons or the decks. Pronunciations were regenerated with `node tools/target/repron.js sv` after lexicon edits. No pron string was typed by hand. Pitch accent is still unmarked. HOLD is still empty. `node tools/target/gen.js sv` wrote only `/tmp/course-en-sv.hold.js`. `node tools/target/validate.js sv` ended `PASS: all checks OK`. `packs/roadmaps.js` was not edited.

## Wrong teaching

- Definite lesson: `barn` was called vowel-final, and `barnet` was taught as a bare `-t`. `barn` ends in `n`. The suffix is `-et`. The table row is now “ett-word, consonant”. The vowel case is named separately: `äpple` → `äpplet`. The quiet final `t` on `huset` and `barnet` is unchanged.
- Same lesson, practice whys for “the child” / “The child is tired”: definite suffix `-et`, not `-t`.
- Imperative lesson: `huvudet` was taught as a bare `-t`. `huvud` ends in `d`; the suffix is `-et`, same as `huset`. The deck note already said `-et`. Practice whys match it. `Jag är sjuk` is limited to that phrase for one person: do not add `-t`. It does not claim `sjuk` never inflects.
- Directions lesson: the imperative was called “the short form you already use after `ska` and `måste`”. That is the infinitive. For `gå` the two forms look the same. For `komma` they do not: the order is `Kom`.
- Greetings lesson: `Förlåt` was “sorry, and also excuse me”, against the deck and the directions lesson. `Förlåt` is sorry. `Ursäkta` is excuse me. Example gloss is now “Sorry!” and an `Ursäkta.` example was added.
- Possessives: the second sentence omitted `ni` from “do not use `sin`”. It now includes `ni`, matching the sentence above it. “Another person” is now “he, she, or they”, so `de` is included.

## Practice

- Word order, “Today I'm working”: `arbetar` is accepted beside `jobbar` in the fill and the type item. Both were taught as “work”.
- Att, “I can drive”: the fill now accepts `köra en bil`, which the matching type item already accepted.
- Possessives type: `Erik ringer till sin mamma` is accepted beside `Erik ringer sin mamma`.
- Past type: the prompt now says “use hade”, so `Vi fikade` is not a missing answer. The lesson’s point is `hade`.
- Modals type: the prompt now says “use måste”, so `Jag behöver inte gå` is not a missing answer.

Accent-only pairs that the app would fold (`å`/`ä`/`a`, `ö`/`o`) were already marked `!strict` (`här`/`hår`/`har`, `trött`, `måndag`/`mandag`, `lördag`/`lordag`). No open pair was found. Those marks were left in place. `Annas` / `Anna's` does not fold: the apostrophe stays.

## Pronunciation

Lexicon entries were added only where a page was opened. Sources: English Wiktionary IPA, Folkets lexikon brackets, and Swedish Wiktionary uttal where that page had one (`fotboll`, `toalett`, `kafé`). `repron.js` rewrote 18 stored prons. Protected rows were not edited and still read: `student` stuh-DEHNT, `sover` SOH-vehr, `sova` SOH-vah, `kiss` kihs, `kallt` kahllt, `semester` seh-MEHS-tehr, `musik` muh-SEEK, `hade` HAHDD-eh, `trevligt` TRAYV-lihgt.

Stored fixes:

| Word | Was | Now | Why |
| --- | --- | --- | --- |
| hotellet | HOOH-tehl-eht | haw-TEHL-eht | Same stem as `hotell` haw-TEHL. Folkets `[hot'el:]`, Wiktionary `/hʊˈtɛlː/`. |
| kaféet | KAH-feh-eht | kah-FAY-eht | Stress stays on the long e of `kafé` kah-FAY. |
| universitet | UEH-nih-vehrsh-ih-teht | uhn-ih-vehrsh-ih-TAYT | Final stress, long e. Folkets `[univär_sit'e:t]`, Wiktionary `/ɵn.ɪ.vɛʂ.ɪˈteːt/`. |
| apotek | AH-paw-tehk | ah-paw-TAYK | Final stress, long e. Folkets `[apot'e:k]`, Wiktionary `/apʊˈteːk/`. |
| kontoret | KAWN-taw-reht | kawn-TOOHR-eht | Folkets `[kånt'o:r]`, long o, stress on `tor`. |
| toaletten | TOOH-ah-leht-ehn | tooh-ah-LEHT-ehn | Stress on `lett`. Folkets `[toal'et:]`, Wiktionary `/tuːaˈlɛt/`. |
| allergisk | AHLL-ehr-gihsk | ah-LAER-gihsk | Folkets `[al'är:gisk]`, long ä. |
| ledsen | LEHD-sehn | LEHSS-ehn | The d is silent, s is long. Wiktionary `/lɛsːən/`, Folkets `[²l'es:en]`. |
| hen | hayn | hehn | Wiktionary `/hɛn/`. The long-e homonym is the whetstone, not this pronoun. Added to the short-vowel list, not as a stressed override. |
| ibland | IHB-lahnd | ih-BLAHND | Folkets `[ibl'an:d]`, Wiktionary `/ɪˈblanː(d)/`. |
| ifrån | IHF-rawn | ih-FROHN | Folkets `[ifr'å:n]`, long å. |
| fotboll | FAWT-bawl | FOOHT-bawl | Folkets `[²f'o:tbål:]`, Wiktionary `/²fuːtˌbɔl/`. Long o in `fot`. |
| fint | fihnt | feent | `fin` is already feen. Wiktionary `/fiːn/` and the regular adjective; Folkets `[fi:n]`. |
| present | PRAY-sehnt | preh-SEHNT | Folkets `[pres'en:t]`, Wiktionary `/prɛˈsent/`. |
| termin | TEHR-mihn | tehr-MEEN | Folkets `[tärm'i:n]`, long i. |

Also in the lexicon, not stored on a card, so a later regenerate will not re-guess them: `kontor`, `toalett`, `apoteket`, `universitetet`, `biljetten` (matches the existing `biljett` bihl-JEHT), `honom` HAWN-awm (Folkets `[²h'ån:åm]`), `sjukt` sjuehkt (Folkets `[sju:k]`, regular `-t`), `kusin` / `kusiner`, `personer`, `familjer`, `telefoner`. The plurals keep the stress of the sourced singular. `läraren` was added to the quiet list only. The aid is still LAE-rah-rehn, the same first-syllable stress as `lärare`.

Checked against a page and left as they were: `lång` lawng / `långt` lawngt (`/lɔŋː/`, `/lɔŋːt/`), `lugn` luhngn (`/lɵŋn/`), `puss` puhs (`/pɵs/`), `alltid` AHLL-teed (careful `/alːtiːd/`). `hotell` haw-TEHL and `kafé` kah-FAY were already right.

The generator still warns, with no page opened: `klasskamrat`, `fritiden`.

## Left for a native speaker

1. `klasskamrat` KLAHSS-kahm-raht. The tool still warns. No IPA page was opened.
2. `på fritiden` FREE-tih-dehn. First-syllable compound stress is likely, but the vowel of `tid` was not checked. The tool still warns.
3. `biljett` bihl-JEHT. Second-syllable stress is the profile’s house form. No Swedish IPA line was opened for it. `biljetten` now follows that same stress.
4. `kanel` / `kanelbulle` stress.
5. `Minneapolis` mihn-eh-ah-POH-lihs.
6. Compliment tone, not the grammar: `Bra jobbat`, `Vad gott`, `Du är snäll`, `Tack, det var snällt`, `Vilken fin tröja`, and the extra lines on those cards.
7. `en kaffe` is the course form. `ett kaffe` is also heard. `ett te` matches the dictionary; a cup is often `en kopp te`, and `en te` is heard.
8. `blåa byxor` is attested. `blå byxor` is the more common shape. The course keeps `blåa`.
9. `hon ser sig` / `Anna ser sig` is grammatical and a bit bare. Left as the lesson’s minimal example.
10. Quiet `-t` and `-g`, and the lack of pitch accent, are by design. A native ear should say whether the aid is still usable without them.
11. Lexicon-only forms, if they ever get a card: `honom` HAWN-awm, `sjukt` sjuehkt, `personer`, `familjer`, `telefoner`, `kusiner`.

## Left unchanged on purpose

`du` to one person, including staff. `ni` only for several people or a company, and the prompt says so. Spelling `de`/`dem`, `mig`/`dig`/`sig`, one-word `idag`/`igår`/`imorgon`, `kafé`, `ska`, no apostrophe on a genitive. Jobs have no article. `halv tre` is 2:30. `måste inte` is “don’t have to”; `får inte` is “must not”. `en kaffe` stays the house gender. No `fart` joke. Compliments are answered with thanks.

## What was read

Read in full: `docs/briefs/en-sv-R.md`, `docs/TARGET-REVIEW.md`, `docs/profiles/en-sv.md`, `docs/briefs/en-sv-decisions.md`, `tools/target/sv/profile.json`, `decks-a.js`, `decks-b.js`, `extra-a.js`, `extra-b.js`, `lessons-1.js`, `lessons-2.js`, `lessons-3.js`, `respell.js`, `repron.js`, `validate.js`, the practice shorthand in `lib.js`, `docs/TARGET-BRIEF.md`, `docs/PRACTICE-SPEC.md`, the recurring-problems section of `docs/PHASE2-BRIEF.md`, and the progress note in `docs/briefs/en-sv-lead.md`. `source/src/app.html` was not opened.
