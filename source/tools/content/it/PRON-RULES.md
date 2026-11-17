# it-en IPA rules (settled in the IT-REVIEWER pass, 2026-11-17)

These rules bind every `pron` field in the it-en course: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/it.md §6 adopts the zh-en notation unchanged, as pt-en and fr-en do. `tools/content/zh/PRON-RULES.md` §A–§D and `tools/content/pt/PRON-RULES.md` §1–§3 apply word for word: OALD North American values, ASCII `g`, plain `r`, ˈ on every content word, the weak-form table, syllabic /l/ and /n/, and pt's strong/weak pairs (*into*, *which*, *before*, main-verb *does*). This file records only what it-en adds.

**Checker:** `node tools/content/it/pron_check.js [summary|phrases|words|rules|zh|new|all]`, copied from fr. `REF=pt` compares with pt-en instead of zh-en; mode `new` lists words that neither zh-en nor pt-en transcribes. Output at the end of the review:

```
pairs 900 · words 835 · phrase conflicts 0 · word conflicts 1 · rule hits 0 · differs from zh: phrases 0, words 4
REF=pt: differs from pt: phrases 0, words 0
```

- The 4 zh differences are pt's deliberate strong/weak pairs (pt PRON-RULES §3).
- The one word conflict is *new* /ˈnuː/ (adjective) against *New York* /ˌnuː ˈjɔːrk/. It is intended: a two-word place name gets ˌ on its first word (pt §2).
- it-en equals pt-en at phrase and word level. The writers copied every shared transcription, so this pass changed no IPA.

## 1. Names and places (as the en-US voice says them; check against the audio)
| English | IPA | Note |
|---|---|---|
| Italy, Italian | /ˈɪtəli/, /ɪˈtæljən/ | profile §6; *Italian* has its stress on the second syllable, unlike *Italy* |
| Rome | /ˈroʊm/ | |
| Milan | /mɪˈlɑːn/ | final stress, as in the profile |
| Naples | /ˈneɪplz/ | syllabic /l/ |
| London | /ˈlʌndən/ | |
| Canada | /ˈkænədə/ | |
| New York | /ˌnuː ˈjɔːrk/ | as pt and fr |
| Marco | /ˈmɑːrkoʊ/ | English reading, final /oʊ/ |
| Umberto Eco | /ʊmˈbertoʊ ˈekoʊ/ | best guess at the en-US reading; check the audio |
| Ana, Garcia | /ˈænə/, /gɑːrˈsiːə/ | from pt §2 |

Names written only in English strings without a `pron` (Bologna, Florence, Luca, Giulia, Ryan, Jay) need no transcription.

## 2. Words new to it-en (no zh or pt counterpart)
- **«Falsi amici» deck:** factory /ˈfæktəri/, educated /ˈedʒukeɪtɪd/, argument /ˈɑːrgjumənt/, magazine /ˈmægəziːn/ (US first-syllable stress), camera /ˈkæmərə/, lecture /ˈlektʃər/, rumor /ˈruːmər/, constipated /ˈkɑːnstɪpeɪtɪd/.
- **«Trappole di pronuncia» deck:** hair /ˈher/, air /ˈer/, cat /ˈkæt/, cut /ˈkʌt/, bad /ˈbæd/, bed /ˈbed/, choose /ˈtʃuːz/.
- **Other:** polite /pəˈlaɪt/.
- -ed endings as heard (profile §6.5): `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/, `delayed` /dɪˈleɪd/, `sprained` /ˈspreɪnd/.

## 3. Respellings in Italian letters
- They appear only as **error illustrations** in « », never as the aid. Settled forms:
  - the wrong *worked*: **«uor-ked»** in every file (it had been "wor-ked" in decks.js and "work-ed" in more/a1.js);
  - the added final vowel on *milk*: **«milche»** (pron check 1 and the deck card, which said «milke»); the lesson body keeps «bigh-e», «milk-e» as a run of hyphenated examples;
  - th as t/d: «tink», «dis»; *choose* with [k]: «kuz»;
  - *photograph* stressed as in Italian: «fo-TO-graf». The profile prescribes this one: capitals mark the Italian stress being warned against.
- Card notes name a stressed syllable with the **English letters in lowercase straight quotes**, plus IPA (`l'accento tonico è su "ma" (/ˌɪnfərˈmeɪʃn/)`). No capitalised pseudo-syllables. *Congratulations* said "lei" and *exactly* said "sact"; both were changed (to "la" and "sulla seconda sillaba").
- **«accento tonico», never plain «accento», for word stress** (glossary §3). This pass changed 18 deck notes (17 plus *Congratulations*) and one meta.js description. The deck name «Parole trasparenti e accento» is FINAL and stays.

## 4. Vowel notes in prose
The /iː/–/ɪ/ and /uː/–/ʊ/ contrasts are taught as **quality, not only length** (profile §4.16, Busà). Card notes on *ship*, *sheep* and *seat* said "if you shorten/lengthen it, it becomes…". They now name the quality (tense vs relaxed), which matches the pron lesson and check 0. *beach* and *leave* still say «lunga», a true description of /iː/.

## 5. Rows with no zh or pt counterpart
41 English rows have a full text that neither zh-en nor pt-en transcribes: the localised targets (*I'm from Italy.*, *I live in Rome.*, *Do you speak Italian?*, *Your Italian is really good!*), the new minimal pairs and false friends, and Italy-themed examples (*My brother works in Milan.*, *I grew up in Naples.*, *We do business in Italy.*, *She has visited Canada twice.*, *It was written by Umberto Eco.*). The list comes from a script in the session scratchpad that compares full phrases against zh and pt; the checker's `new` mode compares single words only. Every row was checked by hand against zh §B and pt §3, and all of them follow the rules:
- prepositions, conjunctions, articles and possessive determiners are unstressed and weak (`frəm`, `ɪn`, `tə`, `fər`, `ənd`, `hɪz`, `hər`, `baɪ`, `ə`, `ən`);
- auxiliary *has* is weak (`ʃi həz ˈvɪzɪtɪd`);
- *for* + duration is weak (`fər ˈtuː ˈjɪrz`).

No row needed a change.
