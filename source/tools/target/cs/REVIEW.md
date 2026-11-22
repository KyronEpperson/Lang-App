# en-cs cold review (EN-CS-REVIEWER)

Scope: every file in `tools/target/cs/` except profile.json. Backup of the pre-review state: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p3/R/cs-backup/`.

## Batch 1: respell.js (pron tool)
- **ne- before a consonant cluster** now breaks after `ne-`: `nemluvím` NEH-mloo-veem (was NEHM-loo-veem), `nestuduju` NEH-stoo-doo-yoo (was NEHS-too-doo-yoo), `nechci` NEH-khtsih. The rule skips `ne` + `j` (keeps the profile's locked `nejsem` NEHY-sehm and `nejlepší` NEHY-lehp-shee), `ne` + `r` / `l` (nervózní), and anything without a cluster (`nemám`, `nebyl`, `neděle`, `není` unchanged).
- **Lexicon:** native soft stems `nikd`, `nikam`, `nikoh`, `nikom`, `nijak` added, so `nikdo` NYIHG-doh, `nikdy` NYIHG-dih, `nikde`, `nikam`, `nikoho` no longer throw.
- **přes** checked: `přes most` → PRSHEHS mohst. ř after p is the voiceless rsh, and přes is on the profile's beat-taking preposition list. Correct; no change.
- 13 new locked tests (changed and must-not-move cases); `--test` prints ok 97.
- `repron.js cs`: 1 pron rewritten (`Nemluvím česky.` in lessons-2), second run 0 rewritten. A separate audit (respell(target) === stored pron for all 499 card and ex rows, throws listed) shows 0 mismatches. `nikdo`, `nikdy`, `přes` do not occur in the course text yet. No inline prose pron contained an affected word.

## Batch 2: decks-a.js, decks-b.js (read in full)
Duplicates across decks (the validator's "is in two decks" warnings). Each one was replaced in ONE deck with a new card, and the pron comes from the tool:
- `dobrý`: kept in Describing people and things. In Long and short vowels it is now `malý | MAH-lee | small (masculine)`, which teaches the same point: the beat is not the long ý.
- `chléb`: kept in Food and drink. In ř and ch it is now `moře | MOH-rzheh | the sea` (ř between vowels is rzh). The r-ch lesson already uses moře.
- `Děkuji.`: kept in Greetings. In Compliments it is now `Líbí se vám Praha?`, a line the likes lesson teaches. No new compliment reply was added, because profile §11 requires a source for one; `Moc děkuji.` still covers the reply.
- `Jsem student.`: kept in About me. In Traps it is now `Jsem host. | I'm a guest`, which the traps lesson teaches.
- `pět korun`: kept in Numbers. In Traps it is now `sto korun | a hundred crowns`, which the traps lesson teaches (`deset korun` was already in Numbers).

Other changes:
- Wrong language: `Co chcete?` as the shop assistant's line was too blunt. It is now `Co si přejete? | tsoh sih PRSHEH-yeh-teh`, and the note says Co chcete would sound blunt.
- Wrong language (word order): `Nemůžu dnes.` → `Dnes nemůžu.`; `Můžete studovat tady.` → `Můžete tady studovat.` Both prons were regenerated.
- Wrong teaching: the `čtyři dva nula` note said "Not čtyři sta dvacet". Czechs often read phone numbers in groups as bigger numbers, so the note now says you will also hear that.
- Wrong teaching / gloss: `dvě` was glossed "two | Feminine". It is now "two (feminine, neuter)".
- Wording: the `malé` note said "A man is malý", which reads as "a man is short". The `Moc děkuji.` note was also reworded.
- Verified, no change: `ve středu` and `v sobotu` are standard, and so is the time lesson's rule that v becomes ve before st and čt (`ve čtvrtek`). `střední` has one form for all genders. `Dobré odpoledne` exists, but `Dobrý den` is more usual, as the note says. `Na zdraví` covers both cheers and bless you. `ten muž` is a regular masculine, not called an exception anywhere.

## Batch 3: extra-a.js, extra-b.js (read in full)
- extra-b: the DIALOG key and line now use `Co si přejete?`.
- Word order: `Musíte pracovat dnes?` → `Musíte dnes pracovat?`; `…ale nemůžu dnes.` → `…ale dnes nemůžu.`
- extra-a: no change. Every key still resolves; `chléb` is still a card, in Food and drink.

## Batch 4: lessons-1.js (read in full)
- byt: the `or` item for "This is Eva" called `je` the on-form. Its why now says "she-form; the same je is used for he and it". The keyword still matches.
- Writers' doubts verified: `ten táta` (masculine, ends in -a) and `ta noc` (feminine, ends in a consonant) are correct exceptions. The lesson does not call `muž` an exception. `Dobré odpoledne exists, but most people just say Dobrý den` is accurate.
- `jsem` → `ysehm`: kept, because the profile §6.1 policy and the locked tests use it. In everyday speech the j of `jsem / jste / jsou` is often not pronounced (sem). That is a native-check item, not a change.

## Batch 5: lessons-2.js (read in full)
- Pron: `Nemluvím česky.` NEHM-loo-veem → NEH-mloo-veem, via the tool fix and repron.
- numbers: the claim about phone digits is fine (one digit at a time is always understood). One sentence was added: Czechs also group the digits into bigger numbers.
- modals: the order item "I want to study Czech" is now cued "(start with Chci, end with češtinu)", so only one tile order is natural.

## Batch 6: lessons-3.js (read in full)
- shopping (wrong language): `Co chcete?` was presented as the assistant's normal question. The body, ex row, mc and order item now use `Co si přejete?` / `přejete` / `přeješ`. The order item keeps the vy-form keyword and hinges on the verb ending. The locative mc keeps `Co chcete?` only as a wrong option for "where is".
- directions (practice): the order item "Where is that shop?" is cued "(start with Kde, end with obchod)", and the type item also accepts `Kde ten obchod je`.
- future (practice): the order item "We will study Czech" is cued "(… end with češtinu)".
- future (verified, no change): `Zítra jedu do Prahy` taught as normal is correct, since the present of jet/jít with a time word is standard for a plan. Drilling `Budu jít → Půjdu` is correct, since `budu jít` is ungrammatical. Profile §8 item 24 calls "the present used for a clear future plan" a trap; that wording is what is off, not the lesson (docs/ not edited).
- Cued word order: every order item in the course was checked. Apart from the three cues above, each tile set has one natural order under its cue.

## Batch 7: follow-up wording (lessons-1, lessons-2, decks-a, extra-a)
- Wrong teaching (restaurant): "Masculine and neuter nouns look the same in both forms" contradicted the accusative lesson (`bratr → bratra`). It now reads "A masculine thing and a neuter noun look the same in both forms".
- English: `byt` now has one US gloss. The cards keep "a flat; an apartment" (as in the profile), and every bare "flat" became "apartment" (`ten byt` card, two extra-a rows, vowels tip, check and whys). In restaurant, "the bill, please" became "the check, please", to match the ex row and the mc why.

## Final state
- `node tools/target/cs/respell.js --test`: ok 97. `repron.js cs`: 499 prons read, 0 rewritten. Audit: 0 card or ex mismatches.
- `gen.js cs` + `validate.js cs` (non-partial): PASS, with no "is in two decks" warning. `node --check` passes on all JS files. HOLD is left in place.

## Native speaker: check first
1. `Co si přejete?` (shopping card, ex row, dialogue), the assistant's line
2. `Dnes nemůžu.` and `To je mi líto, ale dnes nemůžu.`
3. `Zítra jedu do Prahy.`, the present for a plan (future lesson)
4. `čtyři dva nula` note and the numbers lesson: phone numbers read digit by digit or grouped
5. `jsem` → `ysehm`: is the initial y acceptable, or should the aid follow the common `sem`?
6. `Dobré odpoledne.` note: "Dobrý den is also fine"
7. `Dobré ráno.` "Until about 10" and `Dobrou noc.` usage note
8. `Je pět hodin.` → `yeh pyehd HOH-dyihn` (t voiced before h) and `To je váš bratr.` → `vaahzh`
9. `Jaké máte číslo? / Moje číslo je čtyři dva nula.` (extra-b dialogue)
10. `Na zdraví. | Cheers; bless you` and `Hezký den. | Have a nice day` (said leaving a shop)

## Unresolved, for the lead (docs/ not edited)
- The profile §9 sample tables list all five duplicated cards in both decks. A writer who follows the profile would bring the duplicates back.
- Profile §8 wording: item 22 uses `Co chcete?` as the shop line (the course now uses `Co si přejete?`, at the lead's request); item 24 calls present-for-plan a trap; item 7 names `muž` as an exception.
- Profile §6.4 does not describe the new `ne-` cluster rule or the `nik-` stems.
- The rule fires on any word that starts with `ne` + a consonant cluster. A non-negation word such as `nektar` would break too early. No such word is in the course.
- The writers' builders in scratchpad/p3/cs1, cs2 and p3/src.js are stale. Running them with `--write` would revert this review's lesson edits.
- `jsem` → `ysehm` is kept per policy and is on the native-check list.
