# Core words and Flirting for en-no: sources, order, skips

Writer EN-NO-CORE, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting). The course already has a `Compliments` deck in `profile.json`, so no Compliments files were written.

## 1. The frequency source actually opened

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, `content/2018/no/no_50k.txt` (https://github.com/hermitdave/FrequencyWords) | OpenSubtitles 2018 (OPUS): Norwegian film and TV subtitles. Word forms (not lemmas), lowercased, with a count. 50,000 lines. No part-of-speech tags. | Content CC BY-SA 4.0, code MIT (from the repository's `README.md` and `LICENSE`) | Rank of each card, and a check that the choice of words is frequent in speech |

**Exactly what was opened.** On 2026-11-23 the repository was cloned by git (`--depth 1`, blob filter, sparse checkout of `content/2018/no` only) into a new empty scratch folder. Commit `525f9b560de45753a5ea01069454e72e9aa541c6` (7 Feb 2022). Read as plain text: `README.md`, `LICENSE`, `content/2018/no/no_50k.txt`. Downloaded but **not opened**: `no_full.txt`, `no_ignored.txt`. Nothing in the download was run. No web page with a Norwegian frequency list was opened, and no other list was used.

The top 2,000 lines of `no_50k.txt` were read through by hand to choose the words. Afterwards a script listed every form in those 2,000 lines that is not a counted form of a new card, a word in a new card's target, a word in an existing card's target, or on the pron-drop list: 1,213 forms are left over (most are other inflections that the rank rule does not count, such as `vært`, `gjort`, `mannen`, `dager`). Only ranks 1–500 of that left-over list (124 forms) were then sorted by hand:
- pron failures (section 5): om, ham, dem, igjen, hvis, tilbake, mer, selv, selvsagt, burde, akkurat, under, holde, verden, hos, bort, gjennom, fortsatt, fem, alene, derfor, ellers, hverandre, fort, ferdig, senere, begynne, allerede, øyeblikk, mellom, åpne, problem, videre, utenfor, tom, herregud, hallo, bety;
- other inflections of a card or an existing card: vært, sett, gjort, vent, hør, blitt, tatt, fått, nye, nytt, sagt, mannen, menn, dager, ganger, jobben, minutter, timer, moren, hørt, lille, funnet, tenk, tenkt, ba, ber, fortell, gått, kommet, mennesker, jenta, gutten, legg, holdt, skjedd, ring, ses, fins, finnes, sånt, stemmer;
- names, English, abbreviations and list noise: ok, sir, mr, john, jack, dollar, a, én, lkke (a scanning error for ikke);
- swearing, crime and war, which subtitles over-rank: faen, helvete, jævla, gud, kjeft, drepe, drepte, drept, dreper, politiet, kaptein, død, redde;
- **not chosen, although a beginner could use them:** visst, unna, vekk, herfra, engang, orden (*i orden* = all right), saken, skyld, slags, slipp, slapp, bryr (*bry seg*), imot, utrolig, full (a false friend the course already teaches), bør (present of burde), be (ask for).
Ranks 501–2,000 of the left-over list were not sorted by hand; words were chosen from that range by reading it, and the order in each deck stops where the next word would be rare for a beginner.

Every meaning, note, example and dialogue was written by the writer; nothing was copied from the source.

## 2. How a deck is ordered

**Rule.** Each card has a short list of the forms that count for it. Its rank is the best (lowest) line number of any of those forms in `no_50k.txt`. Each deck is sorted by that rank, most frequent first.

| Deck | Forms that count |
|---|---|
| Top nouns | indefinite and definite singular. The build script adds the regular definite to every noun with an article (*en*: -en; *ei*: -a and -en; *et*: -et; -n or -t after a final -e) and to the hand-given forms (`rommet`, `mennesket`). Nouns with no article count their own forms (`penger`, `pengene`; `jul`, `jula`, `julen`). |
| Top verbs | infinitive, present and past, by hand. A past or present that is spelled like another card is not counted: `la` (past of legge), `så` (past of se), `dør` (present of dø), `lærer` (present of lære, and the noun), `bar` (past of bære), `sang` (past of synge). |
| Top adjectives | base, plus the neuter, plural and feminine that the card's note names (the script reads them from the note). |
| Top adverbs, pronouns, prepositions, conjunctions, interjections, words | the form itself; possessives and *hvilken* also count the gender forms in their note (`min`, `mi`, `mitt`, `mine`). |

Three forms were taken out by hand because they belong to a much more frequent other word: `vær` (the command "be!") for `et vær`, so it ranks by `været`; `åpne` (the verb) for `åpen`; `svarte` (past of svare) for `svart`.

Each card's rank and the form that gave it are in the table in section 7.

**Limits of that rule, stated plainly.**
- The list counts spellings, not words. Homographs share a count and are ranked too high: `vår` (our / spring), `så` (so / saw), `for`, `la` (let / laid), `kort` (short / card), `lei`, `dø` (via `døde`, also "dead" plural), `dør` (door / dies), `unge` (young / kid).
- **Deck assignment is judgement.** The list has no part-of-speech tags. A word with two uses was put where its main beginner use is, and the other use is in its note (section 3).
- **Ordered by judgement, not by the source:**
  - Every multi-word card: `etter at`, `slik at`, `så snart` (Top conjunctions); `Uff da!`, `Å nei!`, `Å ja!`, `Så synd!` (Top interjections); `hvor mye`, `hvor mange`, `hvor lenge`, `i kveld`, `i natt`, `i fjor`, `i år` (Top words). They sit after the ranked cards, in the writer's order.
  - `Oisann!` is not in the 50k list; it sits after the ranked interjections.
  - The numbers in Top words (`fire` … `tusen`, `femte`) run in counting order after the ranked words, as a block, not by rank.
  - The whole **Flirting** deck is in its three layers (words, phrases, moves and replies), not by frequency.
- Everything else is in source order.

## 3. Where words with two homes went

- `når` is in Top conjunctions; its note gives the question-word use. `da` (when, once in the past; then) and `så` (so; and then) are in Top conjunctions; their adverb uses are in the notes.
- `for` and `før` are in Top prepositions; their conjunction uses are in the notes. `siden` is a preposition here ("since", and "ago" in `for to år siden`).
- `som` is in Top pronouns (relative pronoun); "as, like" is in its note.
- Articles (`en`, `ei`, `et`), the infinitive marker `å`, yes/no (`ja`, `nei`, `jo`) and the quantifiers (`mange`, `mye`, `flere`, `mest`, `hver`, `hele`, `annen`, `samme`, `begge`, `egen`, `all`) are in Top words. `litt` and `mer` are in Top adverbs.
- Possessives (`min`, `din`, `sin`, `vår`, `hans`, `hennes`, `deres`) and the demonstratives `denne`, `dette`, `disse` are in Top pronouns. Each possessive card lists its gender forms in the note instead of having four cards.
- `få` is the verb ("get"); "few" is in its note. `dyr` is the adjective "expensive"; `et dyr` (animal) is in its note. `feil` is the adjective "wrong"; `en feil` (a mistake) is in its note. `møte` is the verb; `et møte` (a meeting) is in its note.
- Words flirting needs (`pen`, `vakker`, `søt`, `kjekk`, `nydelig`, `flott`, `lekker`, `smart`, `snill`, `smil`, `øyne`, `latter`, `stemme`, `stil`, `hår`, `kjæreste`) are only in Flirting, not in Top adjectives or Top nouns.

## 4. Class slots, and words skipped because the course already has them

**Slots.** All nine slots are kept with their fixed names. Norwegian has prepositions, articles and the usual classes, so nothing was renamed and no deck was added. Norwegian has no class that needs a `Top particles` or `Top measure words` deck. The modal verbs (`kunne`, `ville`, `skulle`, `måtte`) are in Top verbs as infinitives, with the present form (`kan`, `vil`, `skal`, `må`) in the note.

**Skipped because they are already cards** (the release check compares targets; a bare word was also skipped when the course has it with an article, or as a one-word phrase such as `Hjelp!`):

| Deck | Skipped (already taught in) | Count |
|---|---|---|
| Top nouns | et barn, ei jente, en gutt, en mann, ei kvinne, ei mor, en far, ei søster, en bror, en venn, ei venninne (People and family); en kaffe (Numbers, time and prices); et brød, et eple, ost, en brunost, et rundstykke (Food and drink); en jobb, en lærer, en student (Work and study); en lege, en ambulanse, Hjelp! for hjelp (Health and emergencies); ei gave, en time, ei sky, et semester, en fabrikk (Traps for English speakers); en butikk, ei gate, et hotell, et kart, en park (Around town and directions); en billett, ei bukse, en kjole (Shopping and clothes); et hus, et kjøkken, et bad, ei stue (Home and routine); et fly, en drosje (Travel and transport); et apotek (Health and emergencies); bok, bord, båt, tak, vin, skjema (Sounds and spelling) | 49 |
| Top verbs | være, komme, kjøpe, hjelpe (Sounds and spelling) | 4 |
| Top adjectives | ny, kald, norsk (Sounds and spelling); rolig (Traps for English speakers) | 4 |
| Top adverbs | i dag, i morgen (Days, dates and weather); i går (Likes and free time) | 3 |
| Top pronouns | hva (Sounds and spelling) | 1 |
| Top conjunctions | og, men, eller, fordi (Questions and connectors) | 4 |
| Top interjections | Hei!, Takk., Unnskyld., Beklager., Velkommen. (Greetings and courtesy); Hjelp! (Health and emergencies); Gratulerer! (Compliments) | 7 |
| Top words | null, ett, to, tre, ti, elleve, tjue, tretti, førti, hundre (Numbers, time and prices); første, andre, tredje (Home and routine); mandag … søndag, mai (Days, dates and weather) | 21 |
| Flirting | none | 0 |

**Total: 93 skipped** (`Hjelp!` is counted twice, once for the noun hjelp and once as an interjection). `andre` is a card for "second" (Home and routine), so "other" is taught through `annen` (Top words), whose note gives `andre` as its plural.

**Close to an existing card, kept on purpose** (the targets differ, so the release check passes; the lead may drop one of a pair): `Takk, i like måte.` (Flirting) and `I like måte.` (About me); `Du er så snill.` (Flirting) and `Så snill du er.` (Compliments); `hjem`, `hjemme` (Top adverbs) and `Jeg går hjem.`, `Jeg er hjemme.` (Home and routine); `en morgen` (Top nouns) and `i morgen`, `God morgen.`; `mat` (Top nouns) and `maten` (Food and drink); `Ja, gjerne!` (Flirting) and `gjerne` (Top adverbs); `Er denne plassen ledig?` (Flirting) is also the example sentence for `ledig`.

## 5. Words the pron tool gets wrong (left out of every card target)

Every pron was printed by `tools/target/no/respell.js` from the build script. Every word of every target, including each word inside the Flirting phrases, was printed in one token list and read. The tool is not lexicon-first, and the brief does not allow changes to its `LEX`, so a wrong word was left out of all targets. These words still appear in example and dialogue sentences, which carry no pron.

| Deck | Left out (what the tool prints wrong) |
|---|---|
| Top nouns | verden (long vowel before rd), bilde (d of ld said; it is *bille*), øyeblikk (stress on the last syllable), drøm (vowel shown long), ettermiddag (unstressed -er shown as ae), lunsj (u for ø), melding (d of ld said), ferie (e before r shown as ae), foreldre (first-syllable stress), måned (final d dropped), familie, leilighet, kjærlighet, sannhet (stress, or the -et rule eats the t of -het), person, historie, idé, problem, eksempel, kontor, sjanse, baby, mobil, minutt, adresse, avis (loan stress or vowels) |
| Top verbs | holde (d of ld said), sende (d of nd said; it is *senne*), åpne (å shown short), burde (d said), følge, velge, selge (lg said as g), bety, begynne, forklare, forlate (first-syllable stress on a prefixed verb) |
| Top adjectives | umulig (stress), treg (eg turned into ai), tidlig (d said, i short), tom, dum (vowel shown long), interessant, fantastisk, perfekt, spesiell, nervøs, sjarmerende, interessert, forelsket, betatt (loan or prefix stress), sexy |
| Top adverbs | mer (e before r shown as ae; it is a long e), fort, fortsatt, borte, bort (o shown as oh; it is a short u-sound; the course's existing card *Der borte.* carries the same pron), igjen, tilbake, akkurat, allerede, dessverre, forbi, overalt, absolutt (stress), etterpå, ellers, senere (unstressed -er shown as ae, or stress), sjelden (d said), heldigvis (g said), altfor, derfor (second o shown as oo), selv and every phrase with it, including selvfølgelig (the v is said; it is silent) |
| Top pronouns | ham, dem (vowel shown long), hverandre (stress on the first syllable) |
| Top prepositions | om (long oo; it is a short oh), hos (vowel shown long), under (d of nd said; it is *unner*), mellom, gjennom, utenfor (second o shown as oo), foran (long oo), ifølge (stress) |
| Top conjunctions | hvis (vowel shown long; it is short), selv om (selv), ettersom (unstressed -er), dersom (vowels shown long and as oo) |
| Top interjections | Hallo!, Hurra!, Jaså?, Javisst!, Javel. (first-syllable stress), Herregud! (final d dropped), Åh! (prints `oh:h`), Æsj!, Hysj!, Isj! (vowel shown long), Kjempebra! (split as `puhb-rah`), OK (`oo:k`) |
| Top words | fem (vowel shown long), tolv (v said), fjorten (o vowel), seksten (said as written; it is "sei-sten"), sytten, sytti (y for ø), fjerde (d said), i morges (g said); the months, because april, august and september to desember are printed with first-syllable stress (januar `YAH:-nue-ahr`, februar `FEHB-rue-ahr`, mars `mah:sh`, juni `YUE:-nee` and juli `YUE:-lee` print acceptably, but a partial set of months would mislead) |
| Flirting | morsom and its phrase (second o shown as oo), søtnos (first vowel shown short), nummeret in *Kan jeg få nummeret ditt?* (stress on the second syllable; replaced by *Skal vi bytte nummer?*), *Går det bra om jeg setter meg her?* (om; replaced by *Er denne plassen ledig?*), *Du er søt når du ler.* (ler shown with ae; replaced by *… når du smiler.*) |

The most useful words in that table for a beginner are `om`, `hos`, `hvis`, `ham`, `dem`, `fem`, `tolv`, `mer`, `igjen`, `selv`, `selv om`, `tilbake`, `under` and the months. Adding them to `LEX` in `respell.js` and re-running `repron.js` would let the lead add those cards later.

**Read right, but worth a native ear:** `rom` (`roo:m`, the course's own choice in its profile), `hjerte` (`YAERT-uh`), `herlig` (`HAE:-rlee`), `kompis`, `Oisann!` (`OY-sahn`), `uansett` (`UE:-ahn-suht`), `ennå` (`EHN-oh`).

## 6. Variety, gender and register

- Bokmål with the course's house rule: feminine nouns take `ei` and `-a`. A noun was given `ei` only when a lesson already shows it as feminine (`ei tid`, `ei dør`), or when its `-a` definite form is in `no_50k.txt` (`uka`, `natta`, `døra`, `hånda`, `kona`, `senga`, `helga`, `dattera` at rank 4381, `jula` at 7825). `en stemme` is masculine: `stemmen` is in the list, `stemma` is not.
- Left out instead of guessed: `dame`, because both `dama` (1509) and `damen` (1696) are frequent and the writer could not confirm which form the house rule wants; and side, kirke, flaske, tante, which have `-a` forms in the list but were not needed (`sida` also collides with the preposition `siden`).
- Pron and every target follow the profile's East Norwegian aid; `du` only; US English in meanings.
- **Flirting in Norway.** Open flirting with strangers is unusual. People rarely compliment someone they do not know, and approaches usually happen at a party, through friends, at a bar later in the evening, or on an app. The everyday way to ask someone out is low-key: *Skal vi ta en kaffe en dag?* The deck's notes mark this ("the usual low-key way to ask in Norway"; *Jeg liker deg* is "bold for Norway"). *lekker* is casual and bold, not crude. *sexy* is common but was left out for its pron. Nothing in the deck refers to the body beyond eyes, smile, hair and voice.

## 7. Rank of every card

Format: `card rank` (and the form that gave the rank, when it is not the card itself). A dash means "ordered by judgement".

- **Top nouns:** en dag 124, en gang 126, et år 138, folk 152, en ting 159, ei tid 171, en morgen 179, et liv 180 (livet), en kveld 183, pappa 206, mamma 210, et sted 217, en vei 220, en slutt 226, penger 229, en bil 250 (bilen), en grunn 307, en by 313 (byen), et navn 336, ei natt 343, et hode 365 (hodet), et par 371, en del 387, et spørsmål 409, ei dør 413, et ord 417, en sønn 442, en fyr 452, mat 453, ei kone 486, et rom 521 (rommet), en skole 528 (skolen), en plass 541, ei uke 547, et land 555 (landet), en tur 560, en telefon 586 (telefonen), ei hånd 623, en middag 637, en pris 674, et nummer 699, ei datter 701 (datteren), et ansikt 714 (ansiktet), et hjerte 717 (hjertet), en sjef 771 (sjefen), et spill 776, en kompis 780, en plan 796, et menneske 839, en fest 854, et arbeid 861, et sykehus 886 (sykehuset), en kropp 895 (kroppen), et lys 925, en film 995, en hund 1025, klær 1093, en stol 1130, jul 1142, et vindu 1234 (vinduet), et glass 1241, en type 1257 (typen), et brev 1260, te 1274, en sang 1334, ei seng 1540 (senga), en fisk 1572, kjøtt 1681, ei helg 1740 (helgen), en kopp 1855, et vær 2085 (været), en fot 2131 (foten), en katt 2455, en sommer 2495 (sommeren), en vinter 3295 (vinteren)
- **Top verbs:** ha 9 (har), kunne 23 (kan), ville 27 (vil), skulle 31 (skal), måtte 39 (må), vite 42 (vet), gjøre 52 (gjør), se 60, ta 61, gå 65 (går), tro 67 (tror), få 70, si 77 (sa), bli 82 (blir), la 90, trenge 104 (trenger), gi 118, snakke 142, dra 148, like 150 (liker), mene 154 (mener), finne 165, elske 186 (elsker), skje 187 (skjer), kjenne 192 (kjenner), stå 195 (står), forstå 204 (forstår), hete 224 (heter), prøve 228 (prøver), huske 235 (husker), dø 237 (døde), høre 249, fortelle 262, føle 297 (føler), jobbe 302 (jobber), håpe 305 (håper), klare 309 (klarer), tenke 311 (tenkte), vente 329 (venter), virke 350 (virker), møte 354, synes 368, slå 377, vise 380, ringe 382 (ringer), ønske 386 (ønsker), bruke 398, miste 401 (mistet), spørre 403 (spør), bo 411 (bor), ligge 416 (ligger), spise 435, treffe 437, sette 438 (setter), sitte 441 (sitter), spille 446 (spiller), leve 459, hente 503, handle 511 (handler), kalle 517 (kaller), kjøre 522, løpe 530 (løp), lage 540, legge 568, passe 589 (passer), lære 596, sove 600, betale 601, stoppe 621, slutte 627, skrive 639, reise 647, drikke 688, svare 689 (svarte), lese 703, vinne 752 (vant), sjekke 782, glemme 784 (glemte), falle 792 (falt), flytte 793, savne 878 (savner), danse 1112, leke 1174, bestemme 1272 (bestemmer), låne 1275, le 1326, koste 1335 (koster), synge 1345, bære 1483, gråte 1683 (gråt), vaske 1910, lukke 2374 (lukket)
- **Top adjectives:** bra 78, god 117, sann 158 (sant), bedre 176, feil 200, siste 208, klar 222, fin 231 (fint), redd 240, best 243 (beste), glad 267, stor 271, lei 275, sikker 276, neste 277, liten 301, lang 317 (langt), gammel 327 (gamle), stille 355, dårlig 362, hyggelig 363, gal 374 (galt), vanskelig 379, viktig 402, riktig 426, lett 431, mulig 466, sen 488 (sent), mindre 502, ekte 544, fri 546, sint 595, rar 597 (rart), ung 615 (unge), syk 678, ærlig 683, farlig 684, enkel 732 (enkelt), hvit 755 (hvite), høy 765 (høyt), kort 767, kul 803 (kult), opptatt 805, stolt 809, rask 811 (raskt), vanlig 816, svart 817, lykkelig 838, sterk 865, dyr 872, enig 915, sulten 923, sprø 953, forrige 974, trygg 994, heldig 1032, trist 1097, frisk 1141, herlig 1150, blå 1167, gratis 1288, ren 1289, engelsk 1291, åpen 1297, varm 1315 (varmt), deilig 1323, rød 1373 (røde), stengt 1434, rik 1521, kjedelig 1549, modig 1832, trøtt 1844, svak 1956, lav 2184 (lavt), tung 2350 (tungt), grønn 2365 (grønne), billig 2463, skitten 2469 (skitne), sliten 2516, ledig 2786, tørst 3373, koselig 3672, gul 4176 (gule), fattig 4217
- **Top adverbs:** ikke 5, her 34, bare 36, nå 43, ut 46, der 57, opp 73, litt 92, inn 93, kanskje 97, aldri 99, vel 100, også 110, nok 119, sammen 122, ned 130, helt 136, godt 144, alltid 153, sånn 157, hjem 163, veldig 168, hit 175, virkelig 185, slik 188, lenge 189, ute 197, snart 241, først 264, inne 265, heller 270, lenger 280, gjerne 283, ennå 308, langt 317, faktisk 320, nesten 321, hjemme 328, dit 337, nettopp 345, ganske 370, uansett 399, helst 405, enda 461, egentlig 464, nede 491, oppe 492, straks 573, likevel 616, ofte 711, endelig 713, plutselig 884, omtrent 1221
- **Top pronouns:** jeg 1, det 2, du 4, vi 10, deg 14, meg 16, han 17, som 20, de 24, den 25, hun 35, dette 37, dere 38, noe 40, min 45, din 49, oss 50, noen 56, alle 64, alt 66, seg 74, ingen 75, henne 79, sin 87 (si), hvem 89, denne 96, man 113, hans 121, deres 141, vår 162, ingenting 172, disse 205, hennes 209, hvilken 390
- **Top prepositions:** i 8, på 11, til 13, for 18, av 29, fra 54, etter 94, før 111, over 112, siden 134, mot 137, ved 145, uten 174, rundt 242, bak 341, nær 629, innen 936, blant 954, inni 1223, langs 2146
- **Top conjunctions:** at 21, så 22, da 48, når 81, enn 125, mens 352, både 985, enten 1041, inntil 1296, verken 1474, etter at —, slik at —, så snart —
- **Top interjections:** Greit! 133 (greit), Pokker! 392 (pokker), Jøss! 578 (jøss), Skål! 859 (skål), Stakkars! 1030 (stakkars), Fy! 1352 (fy), Oi! 1449 (oi), Jepp! 1656 (jepp), Au! 1839 (au), Søren! 1942 (søren), Hæ? 2948 (hæ), Heia! 5184 (heia), Uff! 6596 (uff), Huff! 7187 (huff), Nja. 21072 (nja), Uff da! —, Oisann! —, Å nei! —, Å ja! —, Så synd! —
- **Top words:** en 6, å 12, et 32, ja 33, nei 41, hvor 53, hvorfor 68, hvordan 69, jo 103, mye 115, hele 140, mange 155, samme 194, eneste 214, flere 251, hver 254, annen 257 (annet), begge 335, ei 356, egen 414, all 427, mest 512, masse 715, hvor mye —, hvor mange —, hvor lenge —, fire —, seks —, sju —, åtte —, ni —, tretten —, femten —, atten —, nitten —, femti —, seksti —, åtti —, nitti —, tusen —, femte —, i kveld —, i natt —, i fjor —, i år —

## 8. Ten cards a native speaker should check first

1. `lekker` (Flirting): is "hot; attractive, bold" the right strength, and is it fine said to someone's face?
2. `Jeg liker deg.` (Flirting): is "bold for Norway" right, and does it read as romantic in a date setting?
3. `Skal vi ta en kaffe en dag?` (Flirting): the note calls it the usual low-key way to ask someone out.
4. `Takk, men jeg har kjæreste.` (Flirting): natural as a kind no, and is "Thanks, but I'm seeing someone" the right gloss?
5. `Nja.` (Top interjections): "Well… (not really)" as the gloss, and whether it belongs with the interjections.
6. `Søren!` and `Pokker!` (Top interjections): both noted as mild; is that how they sound today?
7. `Hæ?` (Top interjections): the note says it is casual and to say `Unnskyld?` to a stranger.
8. `ei datter` (Top nouns): `ei` and `dattera` under the course's house rule (the list shows only `datteren`).
9. `en stemme` (Flirting), `ei helg` and `jul` with `jula` (Top nouns): the gender given.
10. `Oisann!` (Top interjections) and `uansett` (Top adverbs): the stress in the generated pron (`OY-sahn`, `UE:-ahn-suht`).
