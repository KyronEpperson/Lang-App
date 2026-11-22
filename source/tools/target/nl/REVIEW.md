# en-nl cold review

Scope: every file in `tools/target/nl/` except profile.json. Saved batch by batch. HOLD kept; packs/, src/ and profile.json untouched.

## Batch 1: decks-a.js, plus respell.js exceptions

### respell.js: whole-word exceptions added (generator wrong, form certain)

Found by running every distinct word on a card or `{{ex:}}` row through the generator and reading the output. Each added string matches `pronPattern`. `node tools/target/repron.js nl` then rewrote 62 prons across decks-a, decks-b, lessons-1, lessons-2 and lessons-3.

- Stress on the wrong syllable: `alsjeblieft` ahl-shuh-BLEEFT, `pardon` pahr-DAWN, `studeer` stuu-DAYR, `vandaag` vahn-DAAHKH, `vandaan` vahn-DAAHN, `omdat` awm-DAHT, `waarom` waah-RAWM, `wanneer` wah-NAYR, `misschien` mih-SKHEEN, `muziek` muu-ZEEK, `perron` peh-RAWN, `retour` ruh-TOOR, `plattegrond` plah-tuh-KHRAWNT, `rechtdoor` rehkht-DOHR, `rechtsaf` rehkhts-AHF, `linksaf` lihnks-AHF, `agenda` aah-KHEHN-daah, `collega` kaw-LAY-khaah.
- The `-eren` / `-ent` stress endings misfired: `kinderen` KIHN-duh-ruh (was kihn-DAY-ruh), `gisteren` KHIHS-tuh-ruh (was khih-STAY-ruh), `regent` (the verb) RAY-khuhnt (was ruh-KHEHNT).
- Wrong vowel: `lachen` LAH-khuh (a single vowel before *ch* is short; was LAAH), `kosten` KAWS-tuh (short o; was KOH-stuh), `honderd` HAWN-duhrt (the e is a schwa; was dehrt), `file` FEE-luh (open *i* is ee; was FIH), `weekend` WEE-kehnt (English loan, said "wee"; was WAY).
- *th* is *t*: `thee` tay (was thay, which an English reader says with a "th"), `thuis` tuys.
- Several deck notes already said the right thing and contradicted their own pron (*Alsjeblieft* "stress is on the last syllable", *Pardon* "on the second syllable", *vandaan* "stressed on daan", *vandaag* "stress is on dag", *gisteren* "stress the first syllable", *Het regent* "stress regent on the first syllable"). They now agree.
- For the lead: profile §6.4 lists *lachen* `LAAH-khuh` and §9 samples list *omdat* `AWM-daht`, *vandaag* `VAHN-daahkh`, *Ik studeer* `ihk STUU-dayr`, *in het weekend* `ihn uht WAY-kehnt`. Those samples are the old generator output and are wrong; the profile text was not edited in this review.
- Not changed (documented weak spots, left as the house rules say): *Goedemorgen* and the other *Goede-* greetings, *Hallo*, *kopje* / *broodje*, *voorkomen*. Also left: *-nds* keeps a written `d` (*Nederlands* `NAY-duhr-lahnds`, *'s avonds* `SAAH-vawnds`) although it is said `ts`; this is a profile sample and the aid is approximate there.

### decks-a.js

Wrong teaching
- *Ik heet Anna.* note said "heet, not ben", which makes *Ik ben Anna* look wrong. It is normal Dutch. Note now: literally "I am called Anna"; *Ik ben Anna* also works.
- *honderd* note said "the second e is a schwa"; the word has one *e*. Now: the e is a schwa; final d sounds like t.
- *'s avonds* note said "the d sounds like t" next to a pron that writes `ds`. Replaced with the capital rule from profile §10 (*'s Avonds* at the start of a sentence).
- *de friet* note said "also called patat in the west". The patat / friet split is regional in a way the course has no source for. Now: many people in the Netherlands say *patat*.

Wording
- *een euro* meaning "one euro" next to a note saying the number is *één*: meaning now "a euro", note says *één euro* stresses "one euro".

Pron: 12 rows regenerated through the new exceptions (see above).

Checked and left: every article on every noun card (*het mes*, *het paard*, *het licht*, *het bier*, *het shirt*, *het gezin*, *de rug*, *de hoed* and the rest are right); *Goed, dank je.*; *Eet smakelijk.*; *vijftig cent*; *twee euro*; *Het is vijf mei.* The three profile-sample duplicates are untouched.

## Batch 2: decks-b.js

Wrong Dutch
- *Ik ben druk.* "I'm busy" replaced by *Ik heb het druk.* *Ik ben druk* describes a restless, hyper person; being busy is *het druk hebben*, the same frame as *Ik heb het koud*. Pron regenerated. The card was in no dialogue, example or lesson.

Wrong teaching
- *het museum* note said "stress on the last syllable"; the stress is on *se* (`mue-ZAY-uhm`, the pron was already right). Fixed.
- *Jij werkt in Rotterdam.* note said "stressed jij keeps the -t", which suggests unstressed *je werkt* drops it. The *-t* depends on where *je* stands, not on stress. Now: jij before the verb, so werkt keeps the -t.
- *slim* note said "thin is slank". *slank* is English "slim, slender"; thin is *dun*. Now: not slim in the English sense; that is slank.
- *de map* note said a map is *de plattegrond*. That is a street map or floor plan; the general word is *de kaart* (profile §4.6 gives both). Note now gives both; *de plattegrond* meaning is "the street map".
- *de agenda* meaning "the planner" with note "also a diary": the note now says what the profile says, also a meeting agenda; a private diary is *het dagboek*.

Wording
- *Ik hou van muziek.* "I like music" → "I love music"; *houden van* is stronger than *leuk vinden*, and the deck already has *Ik vind lezen leuk* for "like".
- *in het weekend* "at the weekend" (British) → "on the weekend".

Checked and left: *Ik kom om zes uur thuis* (thuiskomen is separable), *Het is dichtbij* "one word when nothing follows" (correct: *dicht bij het station*), *Gaat u rechtdoor.* as a polite instruction, *Van welk spoor?* (het spoor), *het perron*, *het huiswerk*, *het vliegtuig*, *Ik ben de weg kwijt*, *Ik heb slaap*, *Ik ben jarig*, *Een retour naar Utrecht*. The *rechtdoor*, *linksaf*, *rechtsaf*, *perron*, *retour*, *collega*, *weekend*, *muziek*, *omdat*, *wanneer*, *waarom*, *file*, *agenda*, *plattegrond*, *thuis* and *studeer* prons were already regenerated in batch 1.

## Batch 3: extra-a.js

No grammar errors. Unnatural exchanges rewritten (wrong Dutch, category: unnatural):
- *de fiets*, *het paard*: "Is dat de fiets van Anna? / Ja, dat is de fiets." A Dutch speaker answers that question with *haar fiets* or *van Anna*, not "the bike". Now *Is de fiets van Anna? / Ja, de fiets is van Anna.* and the same for *het paard* / Mark.
- *het huis*: the third copy of the same frame. Now *Is het huis groot? / Nee, het huis is klein.*
- *Ik woon in Utrecht.*: line B was a second statement, not a reply. Now *Waar woon je? / Ik woon in Utrecht.*
- *de zus*: "Wie is de zus van Lotte? / De zus heet Emma." Now *Hoe heet de zus van Lotte? / De zus van Lotte heet Emma.*

Checked and left: all 34 examples and the 9 patterns (*Ik ben eenentwintig jaar*, *Het is half drie, niet drie uur*, *Vandaag is het zondag*, *Goedemiddag, meneer. Hoe gaat het met u?* are natural); *Dat kost een euro* / "one euro" is a fair gloss in a price.

## Batch 4: extra-b.js

No grammar errors. Unnatural or illogical lines rewritten:
- *Ik ben de weg kwijt.* dialogue: "I'm lost." / "No problem. The museum is on the left." B could not know A wanted the museum. A now asks: *Pardon, ik ben de weg kwijt. Waar is het museum?* / *Het museum is links.*
- *Ik kom om zes uur thuis* example: "I get home at six and I go to bed." Now *Ik kom om zes uur thuis en dan eet ik.* ("and then I eat"), which also shows the verb second after *dan*.

Wording
- *Ik hou van muziek* example gloss "I like music" → "I love music", to match the card (batch 2).

Checked and left: *Van welk spoor vertrekt de trein? / Van spoor vier.*, *Waarom blijf je thuis? / Omdat ik moe ben.*, *Ik doe het raam dicht*, *Steek bij de brug de straat over*, *Er is een file bij Rotterdam*, *Fatima is slim en ze werkt op kantoor*, *Ik kom eventueel* (the profile's own trap sentence), all eight patterns.

## Batch 5: lessons-1.js (vowels through plural)

Wrong teaching
- `intro`: the tip named *Ik ben Anna* as the most common mistake, the body called it "a different sentence", and the check and an mc used it as the wrong option. *Ik ben Anna* is a normal way to introduce yourself. Body now says it also works; tip is now *Ik kom van Nederland* → *Ik kom uit Nederland* (the body already teaches *uit* for origin, and *van* is the English-speaker slip); the check and mc now use *Ik heten Anna* as the wrong option with the prompt "(use heten)"; the fill's tap option *ben* (which makes a correct sentence) is now *heten*.
- `greetings`: "Read the je in *Alsjeblieft* as yuh, not as sh … The line is a poor guide for that one word." In normal speech s + j merge to sh, which is what the pron shows, and the stress is now right in the pron. Rewritten.
- `greetings`: "English tucks the verb after you" is false for *How are you?* (verb second in English too). Now: Dutch asks how it goes, and puts the verb second.
- `sounds`: "goed starts with that kh, and so does lachen". *lachen* starts with l. Now: lachen has it in the middle.
- `intro`: "After je the verb has no t" says the opposite of the rule (*je spreekt*). Now: when je comes after the verb.
- `present`: "The line stresses the first syllable of studeer. You will often hear the stress on the second." The stress is on the second syllable, and the pron now shows it. Replaced by one true sentence.
- `de-het`: "They are not two translations of one English word" contradicted the sentence before it. Now: they do not differ in meaning.
- `numbers`: "tachtig, not a word built on acht": it is *t* + *acht* + *ig*. Now: with a t in front of acht.
- `plural`: "This is not every similar word. stoel takes -en." *stoel* is not a similar word (no unstressed ending). Now says the ending must be unstressed.
- `pronouns` and `plural`: four standing-rule `why` lines said "verb second: Zij werkt, not Zij werk" / "De mannen werken, not De mannen werkt", contrasting an ending, not a position. Keywords kept; each line now also states the ending point.

Practice
- `greetings` ty "How are you? (three words)": *Hoe is het* is also a natural three-word answer. Prompt now adds "use gaan".
- `present` ty "Do you work? (use je)": added *Werk jij*.

Wording
- `intro`: *Den Haag* "with no article" (Den is historically one) → "with no de or het in front".

Checked and left: every check and practice set (answer indices vary; the *één* / *een* fills are `!strict`), the conjugation tables (*u hebt* / *u heeft*, *jij bent* / *ben je*), *ons kind* / *onze moeder*, *veertien*, *achttien*, *eenentwintig*, *tweeëntwintig*, *Twee euro kost de koffie* (the profile's standing-rule sample), the plural rules (*bomen*, *huizen*, *bedden*, *auto's*, *kamers*, *keukens*).

## Batch 6: lessons-2.js (inversion through shopping)

Wrong Dutch / wrong teaching
- `modals`: taught *Ik moet niet werken* as "I don't have to work. It is not a ban." (body, example row, check question and an mc answer). In Netherlands Dutch *moet niet* usually means "should not / must not"; "don't have to" is *hoeven … te*. Body now: a ban is *Ik mag niet werken*; for don't have to, Dutch switches to *Ik hoef niet te werken* (example row added, pron from the tool). The check now asks what *Ik mag niet werken* means; the mc now asks for "I'm not allowed to work" with *Ik wil niet werken* as a wrong option.
- `traps`: false-friend table said English "slim" looks like "thin" and gave *slank* for it; the row now reads "slim, thin" → *slank*, and both `why` lines that said "Slank means thin" / "Thin is slank" now say *slank* is slim, slender. Example *Mijn zus is slank* glossed "My sister is slim".
- `traps`: table gave only *de plattegrond* for English "map"; now *de kaart, de plattegrond* (profile §4.6). *het dagboek* cell now says it is for a private diary.
- `traps`: *Ik ben goed* "describes a good person, not a good day" → it sounds like you are good at something, or a good person.
- `traps`: example *Ik kom uiteindelijk.* / "I come eventually." is not natural Dutch or English. Replaced by *Uiteindelijk ga ik naar huis.* / "In the end, I go home." (pron from the tool).
- `time`: *'s ochtends werk ik.* at the start of a sentence takes the capital on the next word (profile §10): *'s Ochtends werk ik.* Pron unchanged.
- `family`: example *Ik heb een broer of een zus.* / "I have a brother or a sister" is not something anyone says. Now *Heb je een broer of een zus?* (pron from the tool). The body's "Two brothers are de broers" → "The brothers are de broers" (*de broers* is "the brothers").

Practice
- `modals` mc "at the weekend": wrong option *op het weekend* is Belgian usage, not simply wrong; replaced by *in weekend*. Prompt now "on the weekend".

Wording
- `modals`: *Ik hou van muziek* "is I like music" → "is I love music, stronger than leuk vinden"; *in het weekend* rows glossed "on the weekend".

Checked and left: inversion and question tables, *Hoe laat* as one piece, *welk* / *welke*, the *geen* / *niet* rules and table (*Ik heb de fiets niet*, *geen honger*, *geen student*), *want* keeps main-clause order, the clock rows (*tien voor half drie* 2:20, *vijf over half drie* 2:35, *veertien uur dertig*), *De zon schijnt*, *Het sneeuwt*, the separable-verb rules (*niet* before the particle, *be- ver- ge- ont- her-* stay), the modal table (*kun je*, *jij kunt*, *u kunt*, *mag*, the note that *jij kan* is normal), *hem* for a de-word thing in the Netherlands, *Ik neem het* / *ze*.

## Batch 7: lessons-3.js (diminutives through omdat)

Wrong Dutch / wrong teaching
- `adjectives`: "The form with -e is always acceptable, so say *een moeilijke boek*." After *een* a singular het-word never takes *-e*; the only form is *een moeilijk boek*. The optional *-e* in careful style (profile §4.1) is about *-ig / -isch / -lijk* adjectives after *het / dit / dat*. Rewritten: with *het*, the *-e* form is always acceptable (*het moeilijke boek*); after *een* the rule does not change (*een moeilijk boek*).
- `perfect`: "A movement or a change of state takes zijn." Over-general: *fietsen*, *lopen*, *zwemmen* take *hebben* unless a destination is named. Now: some other verbs of going somewhere or of change also take *zijn*, but not every movement verb does.
- `diminutives` and `food`: "The spoken form [of *kopje* and *broodje*] is closer to the ty of kaartje." True of *broodje* (the *d* before *je* is a *t*), not of *kopje*, which is *kop* + *je* with no *t*. Text now says so for each word; the prons are left as they are (documented weak spot).
- `omdat`: a `why` said "een means one"; the course teaches *een* = a and *één* = one. Fixed.

Practice
- `travel` ty "Go left. (to a friend, use gaan)": added *Ga linksaf*, which the same lesson teaches as correct.

Wording
- `travel`: "an u-form" → "a u-form".

Pron: *Ga rechtdoor*, *Gaat u rechtdoor*, *Sla linksaf*, *Slaat u linksaf*, *Vandaag heb ik gewerkt* and the three *omdat* rows were regenerated in batch 1.

Checked and left: the diminutive spellings (*kaartje*, *mannetje*, *boompje*, *huisje*, *autootje*) and "every diminutive is a het-word"; *een kopje koffie* / *een glas water* with no word for "of"; the article of every drink (*het water*, *het bier*, *het glas*, *de wijn*, *de melk*, *de thee*, *de soep*); *Ik mag een koffie* as the wrong order; the stem / u-form imperative table; *er is* / *er zijn* and *daar*; the *deze / dit / die / dat* table and *Deze is voor Anna* / *Dit is voor Anna*; *opgestaan* with *zijn*; *heeft u* / *hebt u*; the adjective table, *mijn grote huis*, *witte*; *duurder*, *beter*, *het best*, *het grootst*, *een groter huis*, *een grotere auto*; *omdat* / *dat* verb-final, *want* verb-second, the fronted *omdat* clause.

## Final checks

- `node tools/target/gen.js nl` then `node tools/target/validate.js nl`: PASS: all checks OK (28 lessons, 17 decks, 300 cards, 392 practice items). The only warnings are the three profile-sample duplicates the lead kept (*Ik ben student.*, *Het gaat goed.*, *een groot huis*).
- `node tools/target/repron.js nl`: 623 prons read, 0 rewritten (62 were rewritten once, in batch 1, after the new exceptions).
- `node --check` passes on every JS file in the folder.

Doubts for a native speaker (each replaced with the form believed safest; listed because the profile or the writers said otherwise):
1. *Ik heb het druk* for "I'm busy" (replaced *Ik ben druk*).
2. *Ik hoef niet te werken* for "I don't have to work" (replaced *Ik moet niet werken*).
3. *een moeilijk boek* (replaced *een moeilijke boek*).
4. *kopje* has no *t* sound (the profile §6.5 says it does).
5. Stress of *linksaf*, *rechtsaf*, *rechtdoor* on the last part; *omdat*, *waarom*, *wanneer* on the last syllable; *plattegrond* on *grond*.
6. *Ik ben Anna* as a normal introduction.
7. *alsjeblieft* said with sh.
8. *In de keuken is een tafel* (left; *staat* may be more natural).
9. *Gaat u rechtdoor.* / *Slaat u linksaf.* as polite instructions (left).
10. *Een retour naar Utrecht.* (left; *een retourtje Utrecht* may be more usual at the counter).
