# Core words, Flirting and Compliments for en-ceb: sources and skips

Writer CORE-CEB, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (the nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments). Deck entries appended to `profile.json`. Spelling follows the course profile (`docs/profiles/en-ceb.md` §2.2): *og* for the marker and *ug* for "and", *mo- / ni-*, no apostrophes or accent marks, Cebu City everyday register, no Tagalog.

## 1. Frequency: no source could be used, so every deck is ordered by judgement

**Read this first: no card in any deck has a source rank.** All order is the writer's judgement of how often an adult in Metro Cebu hears or needs the word. It leans toward everyday speech in shops, jeepneys, carinderias and families, and toward words the course's lessons already build on. Within each deck the most basic, high-use words come first. The rest follow in rough frequency order, with related words kept together (body parts, colors, the four pronoun sets in set order, Cebuano numbers before Spanish numbers, days in week order).

Tried on 2026-11-23:

| Source | Result |
|---|---|
| hermitdave/FrequencyWords on GitHub (OpenSubtitles 2016 and 2018), sparse clone into the scratch folder | **Opened. It has no Cebuano list.** The `content/2018` and `content/2016` folders hold 61 and 62 languages; `ceb` is not among them. The Tagalog list (`tl`) is a different language and was not used. |
| Leipzig Corpora Collection, [Cebuano corpus page](https://curl.corpora.uni-leipzig.de/languages/ceb) | Page opened: one corpus, `ceb_community_2017` (11.5 million tokens, 729,461 sentences, web/community text). The page shows no word list. Downloading the corpus archive (which holds a frequency file) was refused by the session's network proxy (403). |
| Wiktionary, `Wiktionary:Frequency_lists` (en.wiktionary.com copy) | Opened. It lists a Cebuano entry but the fetch gave no link target. `Wiktionary:Frequency_lists/Cebuano` was refused (not on the allowlist), and en.wiktionary.org returned "not found". |
| Leipzig CLS page for `ceb_wikipedia_2016_100K` | Not fetched (robots.txt unreachable). Cebuano Wikipedia is mostly bot-written geography articles anyway, so its counts would not reflect speech. |
| Sketch Engine cebTenTen (web corpus) | Search result only; it is a paid service and was not opened. |
| Bitbucket issue "List of Cebuano stop words" (cebuano-dictionary-app) | Opened. It has no list on the page, only a note that the author translated an English stop-word list. Not used. |

Other facts used (not frequency): Spanish-number spellings follow the course's own `numbers` lesson table (uno … dose, *nuwebe, diyes, kuwatro*). For 13–19, the Wikipedia article [Cebuano numerals](https://en.wikipedia.org/wiki/Cebuano_numerals) (opened 2026-11-23) lists *trese, katórse, kinse, disisays / diyesiséys, disisiti / diyesisiyete, disiutsu / diyesiyotso, disinuybi / diyesinwebe*. The cards use the course's vowel pattern (*disisais, disisiyete, disiotso, disinuwebe*), and the notes give the other spelling where it differs. These are flagged for a native check.

**Suggestion for the lead:** re-rank these cards against the Leipzig `ceb_community_2017` word list (a `*-words.txt` file in the corpus archive) from a machine that can download it. Only the order inside each deck should move.

Every meaning, note, example and dialogue was written by the writer.

## 2. Slots renamed or added, and why

- **`Top prepositions` → `Top markers and particles`** (instructed, and required by brief rule 2). Cebuano has no prepositions. Relations are carried by (a) the markers *ang, sa, og, si, ni, kang* and the linker *nga*; (b) the second-place particles *na, pa, lang, ra, man, ba, sab, pod, kaayo, unta, kuno, daw, gani, lagi, intawon*; (c) place nouns used after *sa … sa* (*ibabaw, ilalom, sulod, gawas, tupad, duol, atubangan, likod, kilid, tunga, taliwala, luyo, ubos, unahan*), plus *gikan, hangtod, tungod, bahin, alang*. The profile's glossary calls *ang, si, sa, ni, og, kang* "markers", and the notes use that term. *mga* is "the plural word" (glossary rule), so it is in Top words, not here.
- **Top verbs:** the target is the **root** (*kaon, palit, adto*). The note gives the forms a beginner meets: *mo- / ni-* (or *mag- / nag-* for roots that take them: *tuon, luto, puyo, dula, laba, ampo*), and the thing-focus *-on / gi-* where it is common. Irregular forms are flagged: *kan-on, imnon, dad-on, sugdan, hatdan, nakalimtan*; *ma- / na-* roots *tulog, ligo*; *maN-* roots *pangutana, pangita, paminaw*. Stative words with no prefix (*kahibalo, gusto, ganahan, kinahanglan*) are in this deck, because English treats them as verbs and the course's `gusto` lesson does too.
- **Top adjectives:** Cebuano describing words do not change for gender or number. So the note gives the *nga / -ng* use, a *ka-* exclamation, or the word to use instead (*bugnaw* for drinks vs *tugnaw* for weather).
- **Top pronouns** carry all four sets in profile order (*ako*-set, *nako*-set, *akong*-set, *kanako*-set), the standalone possessives *akoa, imoha, iyaha*, the demonstratives and their *ni-* forms, *kinsa, unsa*, and *tanan, uban, bisan kinsa, bisan unsa*. Short forms that serve two sets are one card each: *ko* (short *ako* and short *nako*), *mo* (short *kamo* and short *nimo*).
- No measure-word deck: Cebuano counts with *ka* (*duha ka adlaw*), which the `numbers` lesson teaches. *buok* (piece) is already taught inside *Pila ka buok?*

## 3. Words skipped because the course already teaches them

Exact matches against every card target in `decks-a.js` and `decks-b.js`, ignoring capitals and . , ! ? marks. "(near)" marks words left out because an existing card differs only by a marker or punctuation, or because one spelling is needed for another meaning.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | balay, bata, tawo, babaye, lalaki, ngalan, itlog, iro, iring, gabii, buhok, kape, Sugbo | Sounds and spelling |
| Top nouns | igsoon, inahan, amahan, ginikanan, anak, bana, asawa, apo, lola, lolo, magulang, manghod, ig-agaw, higala | People and family |
| Top nouns | tubig, kan-on, manok, isda, baboy, sabaw, sud-an, mangga | Food and drink |
| Top nouns | kuwarta | Numbers and money |
| Top nouns | kuwarto, kusina, higdaanan | Home and daily life |
| Top nouns | dyip, barko; merkado, pantalan, lungsod (near: *sa merkado, sa pantalan, sa lungsod*) | Jeepneys and travel; Places and directions |
| Top nouns | botika, tambal | Health and help |
| Top nouns | pan, bugas, sala | Traps for English speakers |
| Top nouns | sukli | Shopping and prices |
| Top verbs | tabang (near: *Tabang!*), bayad (near: *Bayad.*) | Health and help; Jeepneys and travel |
| Top verbs | kita "see", mata "wake up", tuo "believe", bantay "guard" (near: the same spelling is a card for another meaning: pronoun *kita*, Flirting *mata*, *Liko sa tuo*, interjection *Bantay!*) | the decks named |
| Top adjectives | maayo | Sounds and spelling |
| Top adjectives | gamay, bag-o, daan, gwapa | Describing things |
| Top adjectives | kusog, libre | Traps for English speakers |
| Top adjectives | masakit (near: *Masakit.*); luya "weak" (near: *luy-a* "ginger" differs only by the hyphen) | Health and help; Sounds and spelling |
| Top adverbs | karon, ugma, gahapon, unya, ganina | Time and days |
| Top adverbs | diri, diha, didto | Places and directions |
| Top adverbs | diretso | Jeepneys and travel |
| Top adverbs | gyud | Short forms and Cebu talk |
| Top pronouns | none | |
| Top markers and particles | diay (near: *Diay?*), bitaw (near: *Bitaw.*), gyud | Short forms and Cebu talk |
| Top markers and particles | para | Traps for English speakers |
| Top markers and particles | usa "first" (softener), ha (tag): kept out because *usa* "one" (Top words) and *Ha?* (Top interjections) have the same spelling; each note mentions the other use | Top words; Top interjections |
| Top conjunctions | kay, pero | Questions and little words |
| Top conjunctions | unya "and then" | Time and days |
| Top conjunctions | kung: not added as a second card; *kon* is the house spelling (see §5) | Questions and little words (*kung gusto nimo*) |
| Top interjections | Hala!, Ambot., Sige., Bitaw., Diay? | Short forms and Cebu talk |
| Top interjections | Tabang!, Ayaw!, Para!, Salamat. | Health and help; Feelings and wants; Jeepneys and travel; Greetings and courtesy |
| Top words | Oo., Dili., Ngano?, Kanus-a?, Pila?, Hain? | Questions and little words |
| Top words | Tagpila? | Shopping and prices |
| Top words | napulo, otso, singkuwenta | Numbers and money; Sounds and spelling |
| Top words | Lunes, Sabado, karon | Time and days |
| Top words | ayaw (near: *Ayaw!*) | Feelings and wants |
| Flirting | gwapa (Describing things), buhok (Sounds and spelling): used only inside phrases | |
| Compliments | *Lami kaayo!* (Food and drink) and *Nindot ang inyong balay.* (Home and daily life): plan rows replaced by *Lami gyud ang sabaw.*, *Limpyo kaayo ang inyong balay.* and *Nindot kaayo ang inyong kusina.* | |

**Totals skipped:** nouns 50, verbs 6, adjectives 9, adverbs 10, pronouns 0, markers and particles 6, conjunctions 4, interjections 9, words 14, Flirting 2, Compliments 2: **112**.

**Near-pairs kept on purpose** (the targets are not identical and do not differ only by punctuation or an article, so the release check passes; the lead may drop one of a pair): *singko / singko pesos*, *baynte / baynte pesos*, *kuwarenta / kuwarenta pesos*, *siyen / siyen pesos*, *uno / ala una*, *tres / alas tres*, *saging / usa ka saging*, *gatos / usa ka gatos*, *libo / usa ka libo*, *dinhi / dinhi sa Cebu*, *una / Una na ko.*, *Ay! / Ay sus! / Ay, salamat! / Ay sus, salamat.*, *mao / Mao ba?*, *lami / Kalami!*, *Ikaw sab! / Ako sab.*, *Salamat kaayo! / Salamat.*, *Gwapa kaayo ka. / gwapa*.

## 4. Pron tool

Every pron was produced by `respell.js` from a script and pasted unchanged. `repron.js ceb` run twice: 1096 prons read, 0 rewritten on the second run. The tool is not lexicon-first (it never throws on a Cebuano word), so no add-file was needed.

- **354 words in the new decks print all lowercase** (stress and final catch unchecked), as the profile expects. 167 of the 536 new cards have at least one checked (capitalised) syllable. The list is in the second `repron.js` output; the lead's batch check against Wolff / Wiktionary is the only way to add them to `LEX`.
- **Left out because the tool cannot write them, or would write a wrong sound:**
  - *crush* (*Crush tika.*, plan Deck 2): *c* is outside the house letters, so the tool throws.
  - *type* (*Type tika.*): the tool reads it as a Cebuano word (`tee-peh`), which is wrong for the English loan.
  - *number* (plan *… ang imong number?*): would come out `noom-behr`. Replaced by *numero*; the note says people also say *number*.
  - *date*, *text*, *CR* (comfort room): wrong sound (`dah-teh`), *x* not allowed, letter names. The *banyo* note mentions CR.
  - *Hmm*, *Shh*, *Psst*: no vowel, so the tool throws.
  - *Kagwapa!* / *Kagwapo!* (ka- exclamation): the tool splits *g-w* across syllables (`kahg-wah-pah`). Left out; the Flirting deck uses *Gwapa kaayo ka.* instead.
- **Respelled loans** so the tool gives the right sound, with the English spelling in the note: *kyut* (cute), *swit* (sweet), *sori* (sorry). These spellings are seen in Cebuano chat, but they are less common than the English spellings. Please check.
- **Correct by the key, but may look odd:** *medyo* → `meh-joh` (the key's *dy* = j rule); *Ania!* → three syllables; *wala* and *usa* show their main reading (the homograph warning is expected; the notes say so).

## 5. Spelling decisions to confirm

- **kon / kung:** the launching instructions name *kon* as the house spelling (KWF), so the conjunction card is *kon*. The existing card *kung gusto nimo* (Questions and little words) uses *kung*. The *kon* note says "also written kung", so a learner sees both. The lead should pick one for the whole course.
- **pod / pud:** the profile's table makes *pod* the house form (*pud* "also seen"). The card is *pod*, and its note gives *pud*.
- **gyud** stays as the course has it (a flagged profile exception).

## 6. Flirting and Compliments

- Flirting starts from Deck 2 of `docs/plans/compliments-ceb.md` (19 rows). 17 are kept. *Crush tika* and *Type tika* were dropped for the pron tool. *Pwede nako makuha ang imong number?* became *… numero?*. The deck is extended to 50 cards in three layers: 16 words, 18 phrases grouped by their word, and 16 moves and replies (9 moves; then 2 playful deflections, 2 yeses, 3 kind noes).
- Cebuanos tease while flirting (*bolero*, *Ay sus!*), so playful deflection replies are included. The local endearment *palangga* is in the word layer. Notes give how forward each line sounds (mild / warm / bold) and the gender pair where one exists (*gwapo / gwapa*, *bolero / bolera*). Nothing touches on bodies beyond eyes, smile, voice and outfit. *Gihigugma tika* is only in the *higugma* verb note, marked "very strong", as the plan advises.
- Compliments starts from Deck 1 of the plan (21 rows) and is extended to 29. Changes: *Cute* → *Kyut*. Two clashes were replaced (§3). Added: *Lami gyud ang sabaw.*, *Maayo kaayo ang imong trabaho.*, *Salamat sa imong kugi.*, *Limpyo kaayo ang inyong balay.*, *Nindot kaayo ang inyong kusina.*, *Nindot kaayo ka mokanta.*, *Salamat, ikaw pod.*, *Salamat kaayo!*. Answers cover the modest denial, pleased surprise, returning it, and "I'm still learning".
- Kii's open question in the plan (English loans *cute, sweet, number, type, crush*) is still open. This build keeps *kyut* and *swit* (respelled) and drops the rest.

## 7. Ten cards a native speaker should check first

1. `Kuyaw!`: is "Awesome! / Scary!" the right everyday sense in Cebu City?
2. `Pirmi tika hunahunaon.` (Flirting): natural, or is there a more usual way to say "I keep thinking about you"?
3. `Gwapa na, utokan pa!` (Flirting): is the *X na, Y pa* compliment natural?
4. `kyut`, `swit`, `sori`: acceptable written forms, or should the course keep the English spellings?
5. `sira` (close): is *Sira-a ang pultahan* the everyday form, or is *Sirado-a* / *Takpi* more usual?
6. `disisais`, `disisiyete`, `disiotso`, `disinuwebe`: the house spelling of the Spanish 16–19.
7. `Pastilan!`: still heard, and not offensive?
8. `daw` vs `kuno`: are the glosses "seems" and "they say" kept apart correctly?
9. `kat-on` (learn: *makakat-on*) and `paminaw` (listen: *maminaw*): are the forms right?
10. `Salamat, pero dili pa ko andam.` (Flirting): does it come across as a kind, clear no?
