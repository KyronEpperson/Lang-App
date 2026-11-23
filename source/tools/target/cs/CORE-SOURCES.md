# Core words and Flirting (en-cs): sources, order, skips

Writer EN-CS-T, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting). The course already had a `Compliments` deck, so no Compliments deck was built. There is no `docs/plans/compliments-cs.md`, so Flirting started from scratch.

## 1. Frequency source actually opened

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| hermitdave **FrequencyWords**, `content/2018/cs/cs_50k.txt`. Got with `git clone --depth 1 --filter=blob:none --sparse https://github.com/hermitdave/FrequencyWords` into a new scratch folder, with only `content/2018/cs` checked out (commit `525f9b5`, 2022-02-07). | OpenSubtitles 2018 (opus.nlpl.eu): Czech film and TV subtitles. Each line is a **word form and its count**. There are no lemmas and no part-of-speech tags. | The repo README says "CC-by-sa-4.0 for content" and MIT for code. | **Order inside every deck except Flirting.** |

**Only these were opened from the download:** `cs_50k.txt`, plus `README.md` and `LICENSE`, which were read for the licence. The sparse checkout also downloaded `cs_full.txt` and `cs_ignored.txt`, but neither was read: the build script would have used `cs_full.txt` as a fallback, and no card needed it. No code from the download was run.

### How the order was made
- **The sort key is the rank of the card's exact spelling**, lower-cased, in `cs_50k.txt`. Every single-word card was found in `cs_50k.txt`.
- **Counts were not added across a lemma's forms.** A verb is ranked by its infinitive, so `rozumět` (5416) sits low even though `rozumím` is rank 693. A noun is ranked by its subject form, and an adjective by its masculine form. This makes infinitives and adjectives look rarer than they are, and it is the main way the order differs from a lemma list.
- **Homographs share one rank**, because the list has no tags. Choosing a deck for each one was the writer's call. Examples: `se` (rank 2: the reflexive and the preposition), `to`, `si`, `mi`, `ti`, `ty` (also "those"), `tu` (also "this", feminine object form), `na`, `za`, `o` (also "oh"), `místo` (place / instead of), `stát` (to stand / a state), `moc` (very / power), `rád`, `no`, `tak`, `pozor`, `díky`, `pár`.
- **Ordered by judgement, not by the source:**
  - multi-word cards, which come after every ranked card in their deck. These are `vrátit se`, `ptát se`, `učit se`, `líbit se`, `bát se`, `pamatovat si`, `dívat se` and `bavit se` (Top verbs), `se mnou` (Top prepositions), `i když` (Top conjunctions), and `ty jo` and `ach jo` (Top interjections);
  - the numerals in **Top words** (`jeden` … `devatenáct`, `třicet`, `padesát`, `tisíc`). They come after the ranked words, in counting order;
  - **all of Flirting**, which follows the three layers of the brief, not frequency.
- **How the words were chosen.** The writer read down the list to about rank 1600 and picked the lemmas that belong in each class. Below that cut-off, everyday beginner words were added by judgement, and their ranks are still real. These cards rank below 1600:
  - **Nouns:** víkend, večeře, škola, ulice, kancelář, jazyk, vlak, ruka, oko, kniha, postel, manželka, hotel, okno, počasí, noha, snídaně, žízeň, minuta.
  - **Verbs:** znát, zapomenout, číst, ztratit, pít, psát, platit, volat, zavřít, stačit, bydlet, vařit, cestovat, studovat, rozumět, umět, chápat, patřit, chutnat.
  - **Adjectives:** most colors and opposite pairs (33 cards, from silný 1728 to různý 14554).
  - **Other decks:** nikde, čí, ony, přestože, au, bacha, fuj, jé, hurá, jejda, uf, and the teens and tens.
- **Left out of the list on purpose:**
  - violence, which subtitles over-rank: zabít, zbraň, smrt, krev, vrah, mrtvý, válka;
  - vulgar words: kurva, prdel, hovno, hajzl. `sakra` is kept, marked as a mild swear;
  - English words and names: the, ok, okay, you, john …;
  - vocatives: pane, mami, tati, chlape, kámo, slečno;
  - spoken-Czech forms that profile §2.3 bars from cards: bejt, seš, dobrej.

Every meaning, note, example and dialogue was written by the writer. Nothing was copied from a source.

## 2. Fitting the decks to Czech (brief rule 2)

- **No slot was renamed or added.** Czech has all eight classes. It has no measure words, and its particles fit in Top words.
- **There is no article.** `ten / ta / to` are demonstrative pronouns, and before a noun they work like "the" (profile §3). They are in **Top pronouns**. The determiner-like pronouns `každý, žádný, nějaký, jiný, tenhle, sám` are there too, because Czech grammar counts them as pronouns (zájmena). Top words carries no determiners.
- **Top words** holds the question words that are not pronouns (`jak, proč, kdy, kam, odkud, kolik`), `jo`, the numerals that are not yet cards (the `numbers` lesson already teaches 0–100), the ordinals `první, druhý, třetí`, the quantity words (`půl, pár, několik, mnoho, málo, oba, jednou, dvakrát`), and the **particles** (částice: `prý, snad, ať, kéž, copak, vždyť, přece`). Particles are a real Czech word class that none of the eight decks covers.
- **Case marking:**
  - nouns are given in the subject (dictionary) form, and the note gives the gender and the one form that bites (`pes` → object form `psa`; plural-only `peníze, dveře, narozeniny`);
  - adjectives are given in the masculine form, and the note gives the feminine and neuter forms. Soft adjectives are marked "one form for all genders";
  - each preposition's note names the case it takes, in the course's plain names (object form, place form, genitive, dative, instrumental; profile §3).
- **Verbs** are given in the infinitive.
  - The note gives the I-form, plus the vy-form where the verb is irregular.
  - It also names the **aspect partner**. A perfective verb's note says that its present form means the future (`udělám` = I will do), because the course does not teach aspect (profile §4, last paragraph).
  - `-uju` is used, as profile §2.4 requires.
- **Name vocatives** (`Evo`, `Petře`, `pane Nováku`) were kept out of the examples and dialogues, because the profile keeps vocatives to recognition. **Words outside the course** that examples still use: `prší / pršet` (it rains), `zima` in `je zima` (it's cold), `mléko` (the course has only the chunk `s mlékem`). Everything else in the sentences is a course card or one of these new cards.
- **Bare `v`, `k`, `s`, `z` cannot be cards.** They have no vowel, and `respell.js` throws on them (profile §6.5).
  - The prepositions deck uses `ve`, `ke` and `ze`, and each note explains the usual bare form.
  - "with" is the chunk `se mnou`, because `se` is already the reflexive pronoun card.
  - The preposition `místo` ("instead of") is only a note on the noun `místo`.
  - `je` ("them") was left out, because it is spelled like `je` ("is").
  - `pomoc` is a noun card whose note gives "Pomoc! = Help!". `škoda` is an interjection card whose note gives the noun meaning.
- **Register.** Everyday words (`jo, taky, dneska, kafe, holka, kluk, čau, nazdar, bacha, ty jo`) say "informal" or "everyday" in the note. Ty-forms (`ty, tě, ti, tvůj, tvoje, promiň`) are marked "Recognize it", and the note gives the polite form. Examples use vy forms, except on cards that are themselves ty words.

## 3. Flirting: policy and notes

- **Every card is in the vy form**, because profile §2.2 has learners produce vy. Each note gives the **ty form** that friends and dating couples switch to quickly ("With ty: Jsi krásná").
- **Czech flirting is understated.** Direct praise of looks is less common than in Spanish, and teasing and irony do a lot of the work. The everyday compliment is `Sluší vám to` ("It suits you"). The notes mark `Půjdete se mnou na rande?` and `Líbíte se mi.` as bold, and `nádherný`, `přitažlivý` and `kočka` (slang) as bold.
- **The deck has three layers:**
  - 24 words;
  - 20 phrases, grouped by the word they come from;
  - 16 moves and replies, including a warm yes (`Ano, moc ráda.`), a playful yes (`Proč ne?`), a playful deflection (`To říkáte všem.`), and five kind, clear ways to say no.
- **No source was opened for this deck**, and profile §11 already flags praise lines as needing a native check. Its cards head the check list in section 6.

## 4. Words skipped because the course already teaches them

These targets match an existing card exactly, after lower-casing and stripping punctuation. A word also counts as a match when an existing card is that word with `ten / ta / to` in front, because profile §3 treats those as "the".

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns (34) | dítě, žena, muž, byt, město, náměstí | People and family (as `to dítě`, `ta žena` …) |
| | káva, čaj, pivo | Traps for English speakers (as `ta káva` …) |
| | chléb, polévka, kuře, účet | Food and drink |
| | práce, univerzita | Work and study |
| | hodina | Time and days |
| | dům, stůl, víno, pán, pas | Long and short vowels |
| | řeka, cena, židle | Háček letters |
| | moře, kuchyně, lékař | ř and ch |
| | nádraží | Around town |
| | host, kolej | Traps for English speakers |
| | tričko, mapa, košile, bunda | Shopping and clothes |
| Top verbs (1) | být | Long and short vowels |
| Top adjectives (10) | dobrý, velký, nový, hezký, český, dlouhý | Describing people and things |
| | malý | Long and short vowels |
| | černý, střední | Shopping and clothes |
| | aktuální | Traps for English speakers |
| Top adverbs (10) | dobře, třeba | ř and ch |
| | ještě | Háček letters |
| | domů | Long and short vowels |
| | doleva, doprava, rovně | Getting around |
| | dnes, zítra, včera | Time and days |
| Top pronouns (1) | něco | Háček letters |
| Top prepositions | none | |
| Top conjunctions | none | |
| Top interjections (7) | ahoj, prosím, děkuji, promiňte | Greetings and courtesy |
| | na zdraví, dobrou chuť, gratuluju | Compliments |
| Top words (23) | ano, ne | Everyday verbs |
| | kde | Around town |
| | nula, jedna, dva, dvě, čtyři, pět, sedm, osm, deset, dvacet, sto | Numbers and the koruna |
| | tři | ř and ch |
| | šest | Háček letters |
| | pondělí … neděle (7) | Time and days |
| Flirting (2) | hezký, hezká | Describing people and things |

**Total: 88 skipped.** `děkuju` was also left out by judgement, because `Děkuji.` already teaches it.

**Near-duplicates, kept on purpose.** No target is identical, so the release check passes. The lead may want to drop one of a pair:
- `oko` (Top nouns) and `oči` (Flirting);
- `líbit se` and `chutnat` (Top verbs) and the phrase cards `Líbí se mi.` and `Chutná mi.`;
- `unavený` (Top adjectives) and `Jste unavený?`;
- `daleko` and `blízko` (Top adverbs) and `Je to daleko.` and `Je to blízko.`

## 5. Pron tool: words left out

Every pron came from `respell.js`, called from the build script and pasted unchanged. `repron.js` rewrote 0 on both runs. The tool was not changed: the writer brief allows only new files, and this tool reads no add-file. So these words were left out:

- **The tool throws: unlisted di/ti/ni.**
  - Tried as cards: `štěstí`, `narozeniny`, `letiště`, `řídit`, `divný`, `nevadí`.
  - Tested before writing and not used: `zatímco`, `cítit`, `jezdit`, `sympatický` (a key Flirting word), `vtipný` (the usual word for "funny"; `zábavný` stands in for it), `naproti`, `totiž`.
  - The Flirting line `Rád vás zase uvidím.` threw on `uvidím`, so it became `Chtěl bych vás zase vidět.`
- **The tool throws: no vowel.** `hm`, `pst`, and bare `v`, `k`, `s`, `z`.
- **The tool is wrong without throwing.** A prefix before `u` is read as a diphthong: `použít` → `POHW-zheet`, `naučit` → `NOW-chiht`, `neumím` → `NEHW-meem`. None of them is a card target. They appear only inside example sentences, which carry no pron.

**Suggestion for the lead:**
- These look like native words with a soft di/ti/ni, so they would go in `NATIVE_STEM` or `NATIVE_WORD`: `štěstí, narozeniny, letiště, řídit, divný, nevadí, cítit, jezdit, zatímco, naproti, totiž, uvidím` (stem `uvid`). Check each one against a dictionary before adding it.
- `sympatický` is a loan, and the tool's header says most loans are hard (`politika`), so it probably belongs in `LOAN`. Check it in the Academy dictionary first.
- `vtipný` needs a dictionary check too.
- The prefix + `u` split also needs fixing.
- Once those are done, `štěstí`, `sympatický` and `vtipný` can be added as cards.

**Correct by the tool, but against profile §6.1.** A one-syllable preposition card standing alone comes out in capitals (`na` → `NAH`, `do` → `DOH`, `u` → `OO`, `před` → `PRSHEHT`), because the tool always gives a preposition the beat. Profile §6.1 says a one-syllable word is lowercase. The prons were left as the tool gives them, and they match `pronPattern`.

## 6. Ten cards a native speaker should check first

1. `Sluší vám to.` (Flirting): is it the natural everyday compliment, and is the note's "mild" right?
2. `Půjdete se mnou na rande?` (Flirting): is it too direct for Czech?
3. `kočka` (Flirting): does "a stunner" read as friendly slang, or as objectifying?
4. `S vámi je legrace.` (Flirting): is `legrace` natural, or is `zábava` better?
5. `Zůstaňme přáteli.` (Flirting): is it natural, or is `Budeme jen kamarádi` what people say?
6. `fešák` (Flirting): is it still in use, or only old-fashioned?
7. `nazdar` (Top interjections): are the register notes right?
8. `copak` (Top words): is the gloss "why, what (surprised)" fair?
9. `přece` and `vždyť` (Top words): are the two glosses distinct enough?
10. `ono` (Top pronouns): is the example `Ono to není tak jednoduché.` a fair, natural use?
