# en-am Core words and Flirting: sources, limits and skips

Writer EN-AM-T, 2026-11-23. Files: `decks-t.js`, `extra-t.js`, `decks-f.js`, `extra-f.js`, and seven entries added at the end of `decks` in `profile.json`. No Compliments deck was written: the course already has one.

## 0. The constraint that shapes everything here

`respell.js` is lexicon-only. It reads `lexicon.txt` and nothing else: there is no `lexicon-add-*.txt` loader, and an unknown word throws. The brief does not allow editing the tool or the lexicon. So **every card, example and dialogue line uses only words already in `lexicon.txt`**, and all pron comes from `respell.js` unchanged (`repron.js am` reports 0 rewritten).

The lexicon has 392 entries. 301 course cards already exist, and 184 multi-letter lexicon entries were not yet card targets. Many of those are inflected forms, proper names or spelling variants. That is why these decks are small, and why three of the nine core decks could not be built (section 3). Section 5 lists the words the lead could add to the lexicon, with the readings found in sources opened for this job, so the missing decks can be written later.

## 1. Frequency source

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| wikilangs/am model card, [README](https://huggingface.co/wikilangs/am/blob/main/README.md) (and the [commit diff](https://huggingface.co/wikilangs/am/commit/3d0ac2946bf90f2863447cc3e1b6c1a432c52151.diff)), "Most Common Words (Top 10)" | Amharic Wikipedia (wikipedia-monthly snapshot), 1,652,256 tokens, 100,186 word types | MIT (as the card states) | Only the top 10 words are printed: 1 ነው, 2 እና, 3 ላይ, 4 ምሳሌ, 5 ውስጥ, 6 ነበር, 7 ዓ (abbreviation), 8 ወደ, 9 -ም, 10 እንደ. **Ranks used: ነው opens Top verbs (rank 1); ወደ opens Top prepositions and postpositions (rank 8).** እና is already a card. ላይ, ውስጥ, ነበር and እንደ are not in the lexicon (listed in section 5). |

**Ordered by judgement:** everything else, in every deck. No longer Amharic list could be opened. Tried: en.wiktionary.org `Wiktionary:Frequency_lists` (fetch failed: not found); the wikilangs repository files (blocked by the proxy, 403); kaikki.org Amharic index (not allowed by the session). Sketch Engine's amWaC corpus exists but needs an account. Judgement favoured spoken, everyday Addis Ababa use as the course profile describes: greetings, food, directions, family. A lead with a download can re-rank the same cards against a real list; only the order should move.

Meanings, notes and examples are the writer's own.

## 2. Decks built, and slot changes

| Deck | Cards | Notes |
|---|---|---|
| Top nouns | 23 | Bare (dictionary) forms only. Definite forms in the lexicon (ቡናው, ገበያው, ሆቴሉ, ዛፉ, ቤቶቹ …) were left out. Country names were left out. |
| Top verbs | 25 | Amharic dictionaries cite a verb by its 3rd person masculine past ("he did"). The lexicon has that form for ጠጣ only, so the deck gives each verb in the form the lexicon has, and says the dictionary form in the note. Commands come in man / woman / polite sets (ሂድ ሂጂ ይሂዱ, ና ነይ, ተቀመጥ ተቀመጪ ይቀመጡ), and drink and like have their man and woman "you" forms. |
| Top adjectives | 12 | Exactly the minimum. Nationality words carry the -ት woman form. |
| Top pronouns | 15 | Amharic possessive pronouns are endings on the noun, so "my / your / his / her" are shown on ስም (name) and ልጅ (child): ስሜ, ስምህ, ስምሽ, ስምዎ, ልጁ, ልጇ. The note says which ending it is. |
| **Top prepositions and postpositions** (renamed) | 13 | Amharic ከ- (from), በ- (in, at, by) and ለ- (for, to) are prefixes written joined to the next word; ወደ (to) is a separate word; ጋር (with) comes after the word. The bare prefixes cannot be cards: በ, ለ and ከ are already cards (fidel letters), so each prefix is shown joined to a word (ከኢትዮጵያ, በቤት, ለአንቺ …). The course glossary keeps the word "preposition"; the deck name adds postpositions because of ጋር. |
| Top words | 12 | Yes / no / OK / sorry, today / tomorrow / yesterday, the three weekdays in the lexicon, አስራ (teens) and አርባ (40). |
| Flirting | 25 | Phrases and moves only (section 4). Group `Conversation`, beside Compliments. |

## 3. Decks NOT built (fewer than 12 lexicon words)

The validator needs 12 to 250 cards per deck. Padding these with phrases would invent content, so they were left out and are not in `profile.json`.

- **Top adverbs.** Lexicon words that are not yet cards: በጣም, እዚህ, ቀጥ, plus ዛሬ, ነገ, ትናንት, which went to Top words (the brief puts "days and times" there). Six at most. በጣም is taught inside cards (በጣም ቆንጆ, በጣም እወዳለሁ, በጣም አሪፍ) and in lesson `likes`.
- **Top conjunctions.** Zero free words: እና, ግን, ወይም, ወይስ are all cards in Questions and connectors already.
- **Top interjections.** One free word, ኧረ, which is used in Flirting as the playful deflection. ሰላም is a card in Greetings; እሺ, ይቅርታ, አዎ are in Top words.

## 4. Flirting: what changed from the brief

- **Layer 1 (single words) is empty.** Every flirting word in the lexicon is already a card: ቆንጆ, ውብ, ውቢት (Compliments), ፍቅር (Fidel rows: የ to ፐ), ልብ (How the fidel works), ጓደኛ (People and family). Smile, eyes, voice, sweet, my dear are not in the lexicon (section 5).
- **Layer 2 (phrases)**: ቆንጆ, ውቢት, አሪፍ, መልካም and ጥሩ phrases, shortest first, each with the other gender form or the polite form in the note.
- **Layer 3 (moves and replies)**: the coffee invitation (the usual, low-pressure way to ask someone out in Ethiopia), a gift line, good night, the playful ኧረ and ኧረ አይደለም (compliments are played down rather than accepted outright), two warm yeses, and four kind, clear noes (ጥሩ ጓደኛ ነህ, አመሰግናለሁ ግን አልፈልግም, ይቅርታ አልፈልግም, ይቅርታ ጓደኛ አለኝ, ጥሩ ሰው ነህ ግን አልፈልግም).
- Cultural note, inference not a source: open compliments between strangers are more reserved than in the US; the invitation to coffee carries the meaning. Notes mark mild / warm / bold.
- 19 dialogues, including one that ends in a gracious no and two that end in a yes.

## 5. Words the lead could add to the lexicon (not added: the tool cannot read an add-file)

Format as in `lexicon.txt`. Romanisation follows the lexicon key; the printed transliteration is quoted. Sources opened 2026-11-23:
OMG = [omniglot.com/language/phrases/amharic.php](https://omniglot.com/language/phrases/amharic.php); PRS = [preply.com/en/blog/amharic-slang](https://preply.com/en/blog/amharic-slang/); PRB = [preply.com/en/blog/body-parts-in-amharic](https://preply.com/en/blog/body-parts-in-amharic/); PRA = [preply.com/en/blog/amharic-adverbs-2](https://preply.com/en/blog/amharic-adverbs-2/) (this page marks no gemination and has several doubtful entries; only the basic words below are taken from it).

**Checked against an opened source**

| fidel | romanisation | meaning | source (as printed) | for deck |
|---|---|---|---|---|
| አሁን | ahun | now | PRA ahun | Top adverbs |
| እዛ | iza | there | PRA əza (gemination not marked; check) | Top adverbs |
| ሁልጊዜ | huligizé | always | PRA huləgize | Top adverbs |
| ላይ | lay | on, above | PRA lay; wikilangs rank 3 | Top prepositions |
| ስለዚህ | silezih | so, therefore | PRA sələzih (gemination not marked; check) | Top conjunctions |
| ነገር | neger | thing; in ነገር ግን = however | PRA negər gən | Top nouns / conjunctions |
| ምንም | minim | nothing; any | OMG mənəm (ምንም አይደለም = it's nothing) | Top pronouns |
| ችግር | chiggir | problem | OMG čəggər; PRS chigr (ችግር የለም = no problem) | Top nouns |
| አላውቅም | alawk'im | I don't know | OMG alawqəm | Top verbs |
| አልገባኝም | algebbanyim | I don't understand | OMG algäbbaňem (the final vowel looks misprinted) | Top verbs |
| አዝናለሁ | azinallehu | I'm sorry | OMG azənallähw | Top verbs / interjections |
| እንደምን | indemin | how (in greetings) | OMG əndämən | Top words |
| ከኔ | kené | from me; with ጋር: with me | OMG käne (ከኔ ጋር) | Top prepositions |
| እደር | ider | (good) night! (to a man) | OMG dähna där (እ after ደህና not voiced in the print) | Flirting |
| ደስ | des | glad (ደስ ይላል = it's nice) | OMG däs | Top adjectives |
| እድል | iddil | luck | OMG əddəl (መልካም እድል = good luck) | Top nouns |
| አፈቅርሻለሁ | afek'rishallehu | I love you (to a woman) | OMG əfäqrəšallähw (key: initial አ = a) | Flirting |
| አፈቅርሀለሁ | afek'rihallehu | I love you (to a man) | OMG əfäqrəhallähw | Flirting |
| መደነስ | medenes | to dance | OMG mädänäs | Top verbs / Flirting |
| ወይ | wey | oh my! | PRS weye | Top interjections |
| ጎበዝ | gobez | well done; smart | PRS gobez | Top interjections / Flirting |
| የኔ | yené | my, mine | PRS yene; OMG yäne | Top pronouns / Flirting (የኔ ቆንጆ = my beautiful) |
| ዓይን | ayin | eye | PRB āyin | Flirting |
| ፀጉር | ts'egur | hair | PRB tsägur | Flirting |
| ፊት | fit | face | PRB fit | Top nouns |
| እጅ | ij | hand | PRB ɨj | Top nouns |

PRB also prints ራስ ras and PRA prints ሩቅ ruq and እዚህ əzih. Those three are in `lexicon.txt` as `unverified:model`, and these pages support the vowels. The lead may want to update their source lines. The gemination in እዚህ izzih is still unchecked.

**Not found in an opened source (would be `unverified:model`)**

ምክንያቱም mik'iniyatum (because), ደግሞ degmo (also), ከዚያ kezziya (then), እንደ inde (like, as; wikilangs rank 10), ውስጥ wist' (inside; rank 5), ነበር neber (was; rank 6), እዚያ izziya (there), ቶሎ tolo (quickly), ሁሌ hulé (always), ፈገግታ fegegita (smile), ድምፅ dimts' (voice), ሳቅ sak' (laugh), ጣፋጭ t'afach' (sweet, delicious), ውዴ widdé (my dear), ዋው waw (wow), እንዴ indé (huh?!), ወይኔ weyné (oh no), እሰይ isey (hooray), አይ ay (no, casual).

With these, Top adverbs (አሁን, እዛ, ሁልጊዜ, ቶሎ, ደግሞ + በጣም, እዚህ, ቀጥ), Top conjunctions (ምክንያቱም, ስለዚህ, ከዚያ, እንደ, ነገር ግን + -ም) and Top interjections (ወይ, ጎበዝ, እንዴ, ወይኔ, እሰይ, ዋው, አዝናለሁ, ኧረ moved from Flirting) could each reach 12.

## 6. Words skipped because the course already has them as cards

**Top nouns** (37): ቤት, ሰው, ሸሚዝ, ሳምንት (Fidel rows: ሀ to ቸ); ዛፍ, ውሻ (Fidel rows: ኀ to ዠ); ድመት, ገበያ, ጠዋት, ፍቅር (Fidel rows: የ to ፐ); ልብ (How the fidel works); አገር, ስራ, ስልክ, ቋንቋ, ዓለም, ማር, ጅብ, ሃይቅ (Reading words); አባት, እናት, ወንድም, እህት, ልጅ, ቤተሰብ, ጓደኛ (People and family); መጽሀፍ, ብዕር, እርሳስ (Classroom and home); እንጀራ, ቡና, ውሃ, ሻይ, ቢራ, ሂሳብ (Food and drink); ጨው, ልጆች (Traps for English speakers).
**Top verbs** (14): ሄደ, ሄድኩ, በላሁ (Verbs); መሄድ, መብላት, መጠጣት, መተኛት, ማንበብ, እፈልጋለሁ, እወዳለሁ, አልፈልግም, አልወድም, ትፈልጋለህ (Likes and free time); አለኝ (Classroom and home).
**Top adjectives** (5): ጥሩ (Fidel rows: የ to ፐ); አዲስ (Fidel rows: ኀ to ዠ); ቆንጆ, ውብ, ውቢት (Compliments).
**Top pronouns** (11): አንተ, አንቺ, እርስዎ (Greetings and courtesy); ይህ, ይህች, ያ, ያች, እነዚህ, እነዚያ (Classroom and home); ምን, ማን (Questions and connectors).
**Top prepositions and postpositions** (3): the bare prefixes በ, ለ (Fidel rows: ሀ to ቸ) and ከ (Fidel rows: ኀ to ዠ). Phrases ወደ ቀኝ, ወደ ግራ, በስተቀኝ, በመኪና, በአውቶቡስ, ለአበበች (Getting around) are not exact clashes but were not repeated.
**Top words** (17): the ten numbers አንድ … አስር, ሃያ, መቶ (Numbers, time and prices); የት, መቼ, ስንት, እንዴት (Questions and connectors); ገና (Reading words).
**Top conjunctions** (4): እና, ግን, ወይም, ወይስ (Questions and connectors).
**Top interjections** (1): ሰላም (Greetings and courtesy).
**Flirting** (7, six of them also counted above): ቆንጆ, ውብ, ውቢት, በጣም ቆንጆ (Compliments); ፍቅር; ልብ; ጓደኛ.

**Total skipped as already taught: 93 distinct words** (99 if the Flirting overlaps are counted per deck).

Lexicon entries deliberately not used: spelling variants (ሀገር, ሃገር, ሦስት, መጽሐፍ), place and person names, definite or inflected forms that would teach a fragment (ቡናው, ገበያው, ዛፉ, ብለህ, ብለው, ከወጥ, ከአዲስ, በአዲስ), and rare words (አቧራ dust).

## 7. Pron readings that are not source-checked

`respell.js` output is pasted unchanged. In the 125 new cards, 13 cards rest on an `unverified:model` lexicon line: ራስ, አበባ, ና, ነይ, ትጠጫለሽ, ዘጋህ, ይታጠፉ, ሩቅ, አሪፍ (and the two Flirting phrases with አሪፍ), ይቺ, ከሆቴሉ. 22 more rest on `composed:` lines (built from attested parts, not seen whole): በር, ተቀመጪ, ጠጣች, ትጠጣለህ, ትወዳለህ, ትወጃለሽ, አሜሪካዊ, ስምዎ, ልጇ, ከኢትዮጵያ, በኢትዮጵያ, ከአሜሪካ, በቤት, በቤቱ, ለአንቺ, ለእርስዎ, አስራ, and Flirting cards with ይፈልጋሉ, ለአንቺ or አልፈልግም. Each card note that depends on an unverified line says "Reading not yet checked".
