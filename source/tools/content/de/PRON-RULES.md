# de-en IPA rules (settled in the DE-REVIEWER pass, 2026-11-17)

These rules bind every `pron` field in the de-en course: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/de.md §6 adopts the zh-en notation unchanged, as pt-en, fr-en and it-en do. So `tools/content/zh/PRON-RULES.md` §A–§D applies word for word: OALD North American values, ASCII `g`, plain `r`, ˈ on every content word, the weak-form table, syllabic /l/ and /n/. `tools/content/pt/PRON-RULES.md` §3 (function words) also applies. This file only records what de adds or had to settle.

**Checker:** `node tools/content/de/pron_check.js [summary|phrases|words|rules|zh|new|all]` (copied from it; `REF=pt` compares with pt-en). Current output:

```
pairs 898 · words 836 · phrase conflicts 0 · word conflicts 2 · rule hits 0 · differs from zh: phrases 0, words 5 · differs from pt: phrases 0, words 1
```

- The two word conflicts are intended:
  - *will*: the false-friend card cites it alone in its strong form /ˈwɪl/ (profile §6.2); in sentences it is weak /wəl/;
  - *new* /ˈnuː/ vs *New York* /ˌnuː ˈjɔːrk/ (pt §2).
- The five zh differences are intended: *into*, *does* (main verb), *which*, *before* (pt §3) and citation *will*. Against pt-en only *will* differs.
- 34 words have no zh counterpart (`new` mode): the German false friends, *wine / vine*, *choose*, the localised names and places (§1). All were checked by hand against zh's rules.

## 1. Names and places (as the en-US voice says them; flag for an audio check)
| English | IPA | Note |
|---|---|---|
| Germany, German | /ˈdʒɜːrməni/, /ˈdʒɜːrmən/ | profile §6 |
| Berlin | /bərˈlɪn/ | stress on the second syllable, as in German |
| Munich | /ˈmjuːnɪk/ | profile §6 |
| Hamburg | /ˈhæmbɜːrg/ | English reading, not German [ˈhambʊʁk] |
| Switzerland | /ˈswɪtsərlənd/ | |
| London, Canada | /ˈlʌndən/, /ˈkænədə/ | |
| New York | /ˌnuː ˈjɔːrk/ | two-word place name: ˌ on the first word (pt §2) |
| Lukas | /ˈluːkəs/ | |
| Ana | /ˈænə/ | as pt-en; /ˈɑːnə/ is also possible, check the audio |
| Garcia | /gɑːrˈsiːə/ | as pt-en |
| Kafka | /ˈkɑːfkə/ | |

## 2. Function words and citation forms
- zh §B and pt §3 apply: relative *which* unstressed, interrogative *which* stressed; preposition *into* weak, phrasal-verb citation *run into* /ˈrʌn ˈɪntuː/; auxiliary *does* /dəz/, main verb /ˈdʌz/; preposition *before* unstressed, sentence-final adverb stressed.
- A function word cited alone as a card target takes its strong form and ˈ: *will* /ˈwɪl/ (Falsche Freunde). Same rule as zh §B "strong (alone…)".
- Stranded prepositions keep their strong vowel but no ˈ when they are one syllable (`Which stop should I get off at?` /… ˈget ˈɔːf æt/, `look for` /ˈlʊk fɔːr/); two-syllable ones keep lexical stress (`What's it about?` /əˈbaʊt/).

## 3. Words specific to this course
- **Minimal pairs** (pron lesson, «Aussprachefallen»): `bad / bed` /ˈbæd/ /ˈbed/; `bag / back` /ˈbæg/ /ˈbæk/; `wine / vine` /ˈwaɪn/ /ˈvaɪn/; `think / sink` /ˈθɪŋk/ /ˈsɪŋk/; `three / tree` /ˈθriː/ /ˈtriː/; `joke / yolk` /ˈdʒoʊk/ /ˈjoʊk/; `shoes / choose` /ˈʃuːz/ /ˈtʃuːz/.
- **Voiced codas are written voiced** (`bag` /ˈbæg/, `played` /ˈpleɪd/, `delayed` /dɪˈleɪd/, `McDonald's` /məkˈdɑːnldz/): this is the cue against German final devoicing (profile §6.5).
- **-ed** as heard: `worked` /ˈwɜːrkt/, `played` /ˈpleɪd/, `wanted` /ˈwɑːntɪd/.
- **Fremdwort stress words** («Fremdwörter und Betonung», pron lesson): `information` /ˌɪnfərˈmeɪʃn/, `university` /ˌjuːnɪˈvɜːrsəti/, `chemistry` /ˈkemɪstri/, `comfortable` /ˈkʌmftərbl/, `chocolate` /ˈtʃɑːklət/, `vegetable` /ˈvedʒtəbl/, `Wednesday` /ˈwenzdeɪ/, `photographer` /fəˈtɑːgrəfər/, `recommend` /ˌrekəˈmend/ (card note).

## 4. Respellings and stress notation in German text
- **The aid is always IPA.** Respellings appear only as error illustrations, never as the aid.
- **Which quotes:** the quote marks tell the reader which letter values to use (profile §2).
  - An error written with **English letter values** goes in straight quotes (plain-text fields) or `<i>` (lesson bodies): "wery", "work-ed", "sank you", "tank you". In German quotes a German reader would read „wery“ with German *w* = /v/, which is the opposite of the error meant. Changed in decks.js (*Thank you*, *worked*) and lessons.js (pron body).
  - An error written with **German letter values** goes in „ “: „Tsu“ (*zoo*), „Bäck“ (*bag*), „Tak“ (*Tag*), „bä-ge“, „lif“ (*live*). Here the German reading is the point.
  - A **sound** is named with a German example in „ “ («„dsch“ wie in „Dschungel“», «langes „i“ wie in „Miete“»), or with IPA between slashes. «klingt „wan“» (*one-way*) became «beginnt mit /w/», because „wan“ read in German starts with /v/.
- **The stressed syllable** is named with the **English letters in lowercase straight quotes**, plus IPA where it helps: `Betonung auf "ma": /ˌɪnfərˈmeɪʃn/`. The German Fremdwort's syllable goes in German quotes: `Nicht auf „ta“ wie bei „komfortabel“`. No capitalised pseudo-syllables («MA», «TA»), except *thirTEEN / THIRty* in the numbers lesson, where capitals mark stress on the English spelling itself.
- The *worked* error is described the same way everywhere: decks.js «Nie zweisilbig wie "work-ed"»; more/a1.js past tip «worked mit zwei Silben ✗».
