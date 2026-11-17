# ru-en IPA rules (settled)

These rules bind every `pron` field in the ru-en course: card `pron` in decks.js, IDIOMS in extra.js, `{{ex:English|pron|meaning}}` rows in lessons.js and more/*.js, and IPA quoted in lesson prose and card notes.

**Base.** docs/profiles/ru.md §6, which makes `tools/content/zh/PRON-RULES.md` A–D binding: symbols, syllabic consonants, weak and strong forms, stress and format. Those rules are not repeated here. Where zh.md §6 and zh's PRON-RULES.md differ, zh's PRON-RULES.md wins (profile §6).

**Checker.** `node tools/content/ru/pron_check.js [summary|phrases|words|rules|all]` (zh's checker, pointed at this folder). At the end of the review it reports: 774 pairs, 0 phrase conflicts, 0 word conflicts outside the allowed weak/strong pairs, 0 rule hits. Every `pron` must also match profile.json `pronPattern`, which `validate.js` checks, and `lint.js` blocks one English text with two aids.

**Copy from zh.** Of 767 English → IPA rows, 673 are byte-identical to zh's row for the same English text, and **none differs**. The other 94 rows have no zh counterpart: localised names and places, the ru-only pairs in «Произношение: ловушки», the deck «Ложные друзья и кальки», the `runglish` and `articles-3` lessons, and the reworked body rows. Each was checked by hand against the rules below. Before writing a new row, grep `tools/content/zh/` for the English string and copy its `pron` if it is there.

## Settled for the ru-only rows (no zh counterpart)
1. **Russian names and places**, as the en-US voice says them, not as Russian does:
   - Anna /ˈænə/, Max /ˈmæks/;
   - Moscow /ˈmɑːskaʊ/, Saint Petersburg /ˈseɪnt ˈpiːtərzbɜːrg/, Kazan /kəˈzɑːn/, Sochi /ˈsoʊtʃi/;
   - Russia /ˈrʌʃə/, Russian /ˈrʌʃn/ (syllabic n after ʃ, zh A4);
   - Petrov /ˈpetrɑːv/, Leo Tolstoy /ˈliːoʊ ˈtoʊlstɔɪ/.
   Russian stress (Петро́в, Каза́нь) is not imposed. The card note for *I live in Moscow* explains /ˈmɑːskaʊ/.
2. **Minimal pairs for Russian traps** (profile §4.12) use the same symbols as their zh neighbours:
   - ship /ˈʃɪp/ · sheep /ˈʃiːp/; wine /ˈwaɪn/ · vine /ˈvaɪn/; west /ˈwest/ · vest /ˈvest/;
   - bad /ˈbæd/ · bat /ˈbæt/; dog /ˈdɔːg/ · dock /ˈdɑːk/ (THOUGHT vs LOT as well as voicing);
   - house /ˈhaʊs/; sing /ˈsɪŋ/, singing /ˈsɪŋɪŋ/ (no /g/);
   - comfortable /ˈkʌmftərbl/, development /dɪˈveləpmənt/.
3. **Stranded prepositions in citation chunks** follow zh C3 (strong vowel, no ˈ on a monosyllable): depend on /dɪˈpend ɑːn/. The phrasal-verb particles of the deck «Фразовые глаголы» keep ˈ (zh C4).
4. **Citation chunks that start with an article** keep the weak article: a convenient time /ə kənˈviːniənt ˈtaɪm/, study at a university /… ət ə ˌjuːnɪˈvɜːrsəti/.
5. **Prose IPA in card notes** may quote British forms only when the note is about the British form: schedule «в британском — /ˈʃedjuːl/». Everything else in notes uses the American values of the cards (/ˈmenjuː/, /rɪˈsiːt/, /pəˈliːs/, /məkˈdɑːnldz/). A partial syllable quoted in prose (/brek/, /mək/, /st/) carries no ˈ.
6. **Brackets.** The app uses slashes; the `pron` lesson says once that dictionaries print the same symbols in [ ].

## Not changed, flagged for a native check
- Petrov: an American voice may say /pəˈtroʊv/ or /ˈpetrɔːf/; the row follows the spelling.
- diamond /ˈdaɪmənd/: the two-syllable form, common in American speech (/ˈdaɪəmənd/ is the careful form).
