# Core words and Flirting (en-da): sources, order, skips

Writer EN-DA-CORE, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (the nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting). No Compliments deck was written: the course already has one in `profile.json` (group "Watch out").

## 1. Frequency source actually opened

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, `content/2018/da/da_50k.txt` (https://github.com/hermitdave/FrequencyWords, commit 525f9b5, 7 Feb 2022) | OpenSubtitles 2018 (opus.nlpl.eu), Danish film and TV subtitles. Word forms, not lemmas, with no part-of-speech tags. 50,000 lines, `word count`, most frequent first. | Repository README: MIT for the code, CC-BY-SA-4.0 for the content. | **Order of every single-word card in the nine core decks.** Only the ranks were used. Every meaning, note and example was written by the writer. |

What was actually opened: the repository was cloned with `git clone --depth 1` (sparse, `content/2018/da` only) into a new empty folder in the writer's scratch folder. Only three things were read: `README.md` (format and licence lines), `LICENSE` (first lines), and `content/2018/da/da_50k.txt`, which a build script read as plain text to look up ranks. `da_full.txt` and `da_ignored.txt` came down with the folder and were not opened. No code from the repository was run.

No other frequency source was opened. No Wiktionary list, corpus list or frequency dictionary was used.

### How a rank was taken

The list counts word forms, so each card is ranked by the best (lowest) rank among the forms named below. The rank is the line number in `da_50k.txt`.

- **Nouns:** the bare singular and the definite singular (*dag / dagen*). Two use a plural as well: *menneske* (via *mennesker*) and *time* (via *timer*). Four homographs use only the definite form, so another word's count does not lift them: *et tog* (*toget*; *tog* is also the past of *tage*), *en dør* (*døren*; *dør* is also "dies"), *et lys* (*lyset*; *lys* is also the adjective), *en sang* (*sangen*; *sang* is also the past of *synge*).
- **Verbs:** the infinitive and the present (*være / er*, *vide / ved*, *lade / lad*).
- **Adjectives:** the base form and, where listed, the *-e* or *-t* form (*ny / nye*, *svær / svært*). The *-t* form was not used for *god* or *fed*, because *godt* and *fedt* are mostly adverb and exclamation.
- **Everything else:** the card's own word.

**Homographs still lift some ranks.** The list cannot tell apart the uses of one spelling, so these ranks count every use: *ved* (preposition and "know"), *for* (preposition, "too", "because"), *om*, *så*, *da*, *der*, *til*, *af*, *en* (article and number), *at* (infinitive marker and "that"), *lige*, *nok*, *fri*, *dyr* (also "animal"), *kort* (also "card, map"), *klar*, *par*, *del*, *side*, *tur*. The rank decides the order inside the deck only, so the effect is a few places up or down.

**Subtitle skew, handled by judgement.** Subtitles over-count swearing, film English and crime-plot words (*fanden, lort, pis, helvede, sir, mr, politiet, dræbe, død, ihjel*). Those words were not chosen, whatever their rank. The list was used to order the words that were chosen, not to pick every word above a cut-off.

### Which cards are in source order, and which by judgement

Each deck is sorted by the rank above, lowest first. These cards have no rank, because the list has single words only, and were placed by judgement at the position shown (as if they had that rank):

- **Top adverbs:** *i dag* (~140), *i morgen* (~220), *i aften* (~400). *ret* (~600) is also judgement: its list rank (171) is mostly *har ret* ("you're right"), the noun.
- **Top prepositions:** *ud af* (~2000), *ind i* (~2000), *uden for* (~2500), *rundt om* (~3000).
- **Top conjunctions:** *for at* (~1500), *efter at* (~2500), *så snart* (~3000).
- **Top interjections:** *hold da op* (~400), *for pokker* (~6000).
- **Flirting:** not sorted by frequency at all. The brief fixes its order: words, then phrases grouped by the word they come from, then moves and replies.

Every other card in the nine core decks (451 of 464) is in source-rank order. Rank ranges: nouns 121–8122, verbs 3–9193, adjectives 142–4790, adverbs 16–2147, pronouns 1–1090, prepositions 7–3057, conjunctions 9–3508, interjections 161–10532, top words 6–19875.

**Side effects of strict rank order, kept on purpose:** the numbers in Top words are not in counting order (*to* rank 108 comes before *tre* 182, and the teens sit at the end, 5625–19875, because subtitles write numbers as digits). The seasons sit at the end of Top nouns for the same kind of reason. A lead who prefers counting order can re-sort only those rows.

**Where the deck stops.** Decks stop when the next candidate was rare for a beginner, or when the remaining candidates were dropped for pron (§4). The lowest-ranked words kept are kept because they are everyday words a subtitle list under-counts: *cykle* (9193), *efterår* (8122), the teens, *aj* (10532).

## 2. Fitting Danish grammar (brief rule 2)

No slot was renamed and none was added.

- **Prepositions:** Danish has real prepositions. The slot stays `Top prepositions`, with four two-word ones (*ud af, ind i, uden for, rundt om*).
- **No measure words or counters:** Danish has none, so no extra deck.
- **No case:** Danish nouns have no case, so the dictionary form is the card. Nouns carry *en* or *et* the way the course shows them (*en bil, et hus*). A few nouns have no article because they are used without one: *folk, penge, kød, tøj* (and Flirting *hår, øjne*). Their notes say so.
- **Articles** *en* and *et* are in `Top words`, as the brief asks for articles and determiners.
- **Possessives** (*min, mit, mine, din, …, sin, sit, sine*) are in `Top pronouns`. Danish uses one form for "my" and "mine", so a split between a determiner deck and a pronoun deck would be artificial. Demonstratives *denne, dette, disse* are there too. The other determiners (*hver, hele, begge, mange, flere, mere, mest, sådan*) are in `Top words`.
- **Ordinals** *første, anden, tredje, fjerde* are in `Top words` with the numbers.
- **at** is in `Top words`, not `Top conjunctions`. The aid gives a bare *at* the infinitive reading `aw` (profile §6, §6.5), and the profile says not to build a card on the conjunction reading. The card's meaning gives both uses; its note says the conjunction is often said *a*.

### Words with two homes: where each went

- *så*: Top adverbs ("then; so"); the note gives the conjunction. *så snart* is in Top conjunctions.
- *da*: Top conjunctions ("when, one past time; as"); the note gives the softening particle.
- *der*: Top adverbs ("there"; *der er* = there is).
- *som*: Top pronouns (relative "who, which, that"); the note gives "as, like".
- *for*: Top prepositions; the note gives "too" and "because". *om*: Top prepositions; the note gives "whether". *før*: Top prepositions; the note gives the conjunction. *siden*: Top conjunctions; the note gives "ago".
- *ad*: Top prepositions (its far more frequent use); the cry *ad!* ("yuck") is in its note, not a second card.
- *god* (Top adjectives, "good") and *godt* (Top adverbs, "well") are both cards: different targets, different meanings. The same goes for *sikker* / *sikkert*.
- *hvor, hvorfor, hvordan, hvornår*: Top words (question words). *hvad, hvem, hvilken, hvilket, hvilke*: Top pronouns (question pronouns).

## 3. Words skipped because the course already teaches them

Checked against every card target in `decks-a.js` and `decks-b.js` (exact text), and, by judgement, against cards that differ only by an article or a determiner.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | år, mad, øl, mælk, et æble, et land, en gade, en hund, en by | Sounds and spelling |
| Top nouns | en bil, et hus, et bord, en kvinde, et navn, et sprog, en mand, en taske, en stol, et billede (and the plurals biler, huse, æbler, børn, mænd) | en and et |
| Top nouns | livet (so et liv), stationen, metroen, parken (so station, metro, park) | The definite ending; Around town and directions |
| Top nouns | en krone | Numbers, time and prices |
| Top nouns | en kaffe, en te, en øl, sukker, en bolle, en pølse, rugbrød, smørrebrød, kanelsnegl, morgenmad, aftensmad | Food and drink |
| Top nouns | en ven, et barn | People and family |
| Top nouns | gave, en gave, stof, fabrik, tømrer | Traps for English speakers |
| Top nouns | en dansker, en amerikaner, en englænder | Nationalities and languages |
| Top nouns (judgement) | mor, far, søster, bror, datter, søn, kone, partner, bedstemor, bedstefar, forældre: taught as *min mor* etc.; *en mor* would differ only by the determiner | People and family |
| Top nouns (judgement) | kop (*en kop kaffe*), glas (*et glas vand*), vand (*vandet*, *et glas vand*), vejr (*dejligt vejr*), lærer (*jeg er lærer*) | en and et; Food and drink; Describing things; Traps |
| Top nouns (judgement) | et møde, et arbejde, en have, en rejse, et hjem: each would differ only by the article from a card in my own decks (the verbs *møde, arbejde, have, rejse* and the adverb *hjem*) | Top verbs / Top adverbs (this job) |
| Top nouns (judgement) | et øje: the plural *øjne* is a Flirting card | Flirting (this job) |
| Top verbs | betale | Work and study |
| Top adjectives | kold | Sounds and spelling |
| Top adjectives | dansk, engelsk, tysk, amerikansk | Nationalities and languages |
| Top adjectives (judgement) | dejlig (*dejligt* is a card) | Describing things |
| Top adjectives | gift | Traps for English speakers |
| Top adjectives (moved) | sød, smuk, flot, pæn, lækker, sjov, klog, skøn, sexet, nuttet, hyggelig: frequent, but kept for the Flirting word layer so no card is in two decks | Flirting (this job) |
| Top adverbs | ikke | Sounds and spelling |
| Top adverbs | gerne | Greetings and courtesy |
| Top adverbs | ligeud | Around town and directions |
| Top adverbs | i går | The past |
| Top adverbs | endelig, til sidst, eventuelt | Traps for English speakers |
| Top pronouns | du, mig, dig, vi, de, I, han, det | About me |
| Top pronouns | hun | Sounds and spelling |
| Top prepositions | mellem, ved siden af | Around town and directions |
| Top conjunctions | none | |
| Top interjections | hej, hej hej, tak, undskyld, farvel, godnat (and the other clock greetings), værsgo | Greetings and courtesy |
| Top words | ja, nej, ikke, én | Sounds and spelling |
| Top words | tyve, tredive, fyrre, halvtreds, tres, halvfjerds, firs, halvfems, hundrede, enogtyve, femogtyve | Numbers, time and prices |
| Top words | mandag, tirsdag, onsdag, torsdag, fredag, lørdag, søndag | Days and routines |

**Counts.** Exact matches: 106 targets (nouns 50 including the five plurals, verbs 1, adjectives 6, adverbs 7, pronouns 9, prepositions 2, interjections 10 including all four clock greetings, top words 21; *ikke* counted once). By judgement (article or determiner variants, phrase-taught lemmas): 22. Moved to Flirting rather than skipped: 11 adjectives and *et øje*.

**Pairs the release check passes but a reviewer should see** (targets differ, so no "is in two decks"):
- *i* (Top prepositions, "in") and *I* (About me, "you, to several people"): same pron `ee`. Kept because *i* is the 7th most frequent word. The note warns.
- *en* (Top words, the article) and *én* (Sounds and spelling, the number one): same pron `ehn`. Kept because *en* is the 8th most frequent word. The note warns.
- *god* / *godt*, *sikker* / *sikkert*: adjective and adverb, different meanings.
- Inside this job: *for* / *for at*, *efter* / *efter at*, *så* / *så snart*, *ud* / *ud af*, *ind* / *ind i*, *uden* / *uden for*, *rundt* / *rundt om*; Flirting single words and the phrases built from them (by design).

## 4. Pron: words left out because `respell.js` gets them wrong

Every pron was generated by `respell.js` inside the build script and pasted unchanged; `repron.js` rewrote nothing on two runs. The course does not let a writer change `LEX`, and the tool cannot read an add-file, so a wrong word was left out.

**Criterion.** A word was left out when the tool puts the stress on the wrong syllable, writes a silent letter as a sound, or writes a clearly wrong vowel. Words that only show the tool's documented limits (no stød, coarse vowel length, `-ig` as `-eey`, careful citation form) were kept, as in the existing decks.

| Word | Tool output | What is wrong |
|---|---|---|
| måske | MAWS-kuh | stress is on the second syllable |
| igen | EE-yuhn | stress is on the second syllable |
| tilbage | TEEL-ba-wuh | stress is on the second syllable |
| allerede | A-luh-uh-dhuh | stress is on *re* |
| selvfølgelig | SEHL-vfoel-guh-leey | stress is on *føl* |
| desværre | DEHS-vae-uh | stress is on *vær* |
| alligevel | A-lee-yuh-wuhl | stress is on *li* |
| heldigvis | HEH-leeg-vehs | the g is silent |
| nogensinde | NOH-wuhn-seh-nuh | the syllables are mangled |
| bagefter | BA-wuhf-tuh | the syllables are mangled |
| engang | EHNG-ang | the g of *gang* is lost |
| omkring | OHM-krehng | stress is on *kring* |
| imod | EE-mohdh | stress is on *mod* |
| igennem | EE-yuh-nuhm | stress is on *gen* |
| indtil | EHN-teel | stress not verified; left out |
| bag, bagved | baw, BAG-vuhdh | wrong vowel / hard g |
| selvom | SEHL-vohm | stress is on *om* |
| eftersom | EHF-tuh-sohm | stress is on *som* |
| medmindre | MEHDH-mehn-uh | stress is on *min* |
| uanset | OO-an-suhdh | *set* is not a swallowed *-et* |
| hinanden | HEE-na-nuhn | stress is on *an* |
| nogle | NOHG-luh | the g is silent (said like *nogen*) |
| andre | AN-uh | the *dr* is lost |
| mindre | MEHN-uh | the *dr* is lost |
| egen | EH-yuhn | the vowel is *aj* |
| døgn | doegn | the vowel is *øj*, no g |
| forstå | FOH-staw | stress is on *stå* |
| fortælle | FOH-tae-luh | stress is on *tæl* |
| spørge | SPOE-guh | the g is silent |
| vælge | VAEL-guh | the g is a *j* sound |
| vågne | VAWG-nuh | the g is a *w* sound |
| regne | REHG-nuh | the g is a *j* sound |
| beklage | BEHK-la-wuh (as *beklager*) | stress is on *kla* |
| forkert | FOH-kuhdh | stress is on *kert*, and the t is not soft d |
| interesseret | EEN-tuh-uh-suh-uhdh | stress is on *se* |
| alene | A-luh-nuh | stress is on *le* |
| familie | FA-mee-lee-uh | stress is on *mi* |
| problem, minut, person, telefon, politi, musik | PROHB-luhm, MEE-noot, PEH-sohn, TEH-luh-fohn, POH-lee-tee, MOO-sehk | stress is on the last syllable |
| computer, restaurant, weekend | KOHM-poo-tuh, REHS-ta-oo-rant, WEH-uh-kuhn | loanwords read as Danish spelling |
| historie | HEES-toh-ree-uh | stress is on *sto* |
| idé | EE-dhuh | stress is on *dé*, no soft d |
| job | yohb | English j, short vowel |
| spørgsmål | SPOE-gsmawl | the g is silent |
| lejlighed, kærlighed | LAI-leeg-huhdh, KAE-leeg-huhdh | the g is silent |
| regning | REHG-nehng | the g is a *j* sound |
| sag | saw | the vowel is wrong |
| chance | KHAN-suh | *ch* is *sh* |
| januar … december | e.g. AP-reel, A-oo-woost, SEHP-tuhm-buh, OHK-toh-buh | six of the twelve months get the stress wrong, so the whole set was left out |
| okay, hey, hallo, wow | OH-ka-ew, HEH-ew, HA-loh, wohw | read as Danish spelling / stress on *lo* |
| av, hov | aw, hohw | the vowel is wrong |
| hurra, tillykke, velbekomme | HOO-ra, TEH-lew-guh, VEHL-buh-kaw-muh | stress is late in all three |
| puha, uha | POO-ha, OO-ha | stress not verified; left out |
| charmerende, forelsket, date (Flirting) | KHA-muh-uh-nuh, FOH-uhl-skuhdh, DA-tuh | *ch* is *sh*; stress is on *el*; *date* is said like English |
| hmm | (throws: no vowel) | no vowel |

**Kept, with the tool's known roughness:** *tom* `tohm` and *vinter* `VEEN-tuh` (short vowels written long), *altså* `AL-tsaw` (the t is often silent), *tage* `TA-wuh`, *noget / nogen* `NOH-wuhdh / NOH-wuhn` (the g written as w), *ferie* `FEH-ree-uh` (one syllable too many), *smilehuller* (the tool warns that a four-syllable stress is unchecked; first-syllable stress is right here).

## 5. Ten cards a native speaker should check first

1. `pyt` (Top interjections): "never mind; oh well", and that *Pyt med det* is everyday.
2. `lun` and `jeg er lun på dig` (Flirting): is *lun på* current for "have a crush on", and is it mild?
3. `du er lækker` (Flirting): is "bold, casual" the right weight, or is it too much from a near-stranger?
4. `sexet` (Flirting): ordinary and not crude in Danish, as the note says?
5. `hyggelig` and `det er hyggeligt med dig` (Flirting): does it read as warm interest, or only as friendly?
6. `smilehuller` (Flirting): do Danes really compliment dimples, as the note claims?
7. `må jeg byde dig på en øl` (Flirting): natural as a bar opener?
8. `aj` (Top interjections, rank 10532): is it everyday, and is "ouch; oh no" the gloss? Same question for `fy` ("shame on you; ugh") and `ih` ("oh, delight").
9. `jo` (Top words): the gloss "yes (after a negative question)" and the note on the particle.
10. `ret` (Top adverbs, "quite; fairly") and `vel` ("I suppose; right?"): the glosses and the tag-question note.
