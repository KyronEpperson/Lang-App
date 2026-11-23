# te-en pronunciation aids: decisions (settled in review)

Authority: `PRON-TOOL.md` and `docs/profiles/te.md`. Every aid comes from `pron_lookup.json` or from `node tools/content/te/pron_te.js "/ipa/"`. No aid is respelled by hand. This file records only the decisions the tool leaves open.

**Checker:** `node tools/content/te/pron_check.js`. After the review it prints: pairs 815, pattern 0, encoding 0, banned 0, diff 0, conflicts 0, word mismatches 1, prose mismatches 0.

## 1. The one accepted WORD line

- «You're not coming, are you?»: the tag carries the strong form of `are`, ఆర్. Everywhere else `are` is the weak form అర్. This is the only accepted WORD line; a second one is an error.

## 2. Names and places: one reading per name in the whole pack

Tool output for the starting-point IPA in PRON-TOOL.md (not verified against the en-US voice). Checked in review: each name has the same aid in every file where it occurs.

| name | IPA | aid | files |
|---|---|---|---|
| Ravi | /ˈrɑːvi/ | ˈరావ఼ి | decks, lessons, more/a1 |
| Hyderabad | /ˈhaɪdərəbæd/ | ˈహైడరబ్యాడ్ | decks, lessons, more/a1, a2, b1 |
| Vijayawada | /ˌvɪdʒəjəˈwɑːdə/ | వ఼ిజయˈవాడ | lessons, more/a1 |
| India | /ˈɪndiə/ | ˈఇండిఅ | decks, more/a2, b1 |
| Indian | (India + n) | ˈఇండిఅన్ | decks |
| Telugu | /ˈteləgu/ | ˈటెలగు | decks, more/a1, a2, b1 |
| Mr. Rao | /ˈmɪstər ˈraʊ/ | ˈమిస్టర్ రౌ | decks |
| Kumar | /kuˈmɑːr/ | కుˈమార్ | decks |
| Guntur | /gʊnˈtʊr/ | గుంˈటుర్ | decks |
| Vizag | /ˈvaɪzæg/ | ˈవ఼ైజ఼్యాగ్ | more/a1 |
| rupees | /ruːˈpiːz/ | రూˈపీజ఼్ | lessons |

The Telugu meaning side keeps the ordinary Telugu spelling (రవి, హైదరాబాద్, విజయవాడ, ఇండియా, తెలుగు, రావు గారు, కుమార్).

## 3. Decisions made in the review

- The card `Jew` (జూ) was dropped from the deck «ఉచ్చారణ చిక్కులు», and the `Jew` example row from the `pron` lesson (lead ruling). The z / j contrast is now taught with `zoo`, `zero`, `easy` and with the letter names Z (జ఼ీ) and G (జీ), both already in the alphabet deck. The row `Jew` is still in `pron_te.js` / `pron_lookup.json` (tool files, not edited); it is unused.
- The `pron` lesson example row that replaced it is `zero` ˈజ఼ిరో, the same aid as the card.
- `vine` వ఼ైన్ / `wine` వైన్ stay as the v / w pair.
- ZWNJ (U+200C) is never written inside an aid. The review's ZWNJ pass touched meanings, notes and prose only (checked: no `pron` field contains U+200C).
- A repeated English string carries the same aid in every file: `pron_check.js` reports diff 0 and conflicts 0 over 815 pairs.
