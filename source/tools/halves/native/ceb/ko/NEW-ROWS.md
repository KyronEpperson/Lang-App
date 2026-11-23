# Bisaya half: rows written on 2026-11-23 (for the cold reviewer)

Written by one writer, not a native speaker, for the content job "Countries, Core words, learner name". Nothing here has had a native check. Every row passes `node tools/halves/validate.js ceb ko` (0 errors), which checks the format and the Hangul only, not the Cebuano. Rules followed: `docs/profiles/ceb-ko.md` §3 (Cebu City everyday register, *ka / ikaw*, no *po*, glossary terms in English: particle, verb, describing verb, ending, counter, native / Sino-Korean, honorific, polite / casual / formal) and the house spelling from `docs/profiles/en-ceb.md` §2.2 (*u* early / *o* last, *og* / *ug*, *mo- / ni-*, *gyud*, *sab*, no accents, no apostrophes).

## New rows

| file | ids | what |
|---|---|---|
| `cards.jsonl` | ko.c0643 | `___에서 왔어요` "Taga-___ ko" (replaces ko.c0077 미국에서 왔어요, removed) |
| `cards.jsonl` | ko.c0644 | `___ 할 수 있어요?` "Kahibalo ka mo-___?" |
| `cards.jsonl` | ko.c0645 … ko.c0743 | Sagad nga noun (99) |
| `cards.jsonl` | ko.c0744 … ko.c0824 | Sagad nga verb (81) |
| `cards.jsonl` | ko.c0825 … ko.c0885 | Sagad nga describing verb (61) |
| `cards.jsonl` | ko.c0886 … ko.c0940 | Sagad nga adverb (55) |
| `cards.jsonl` | ko.c0941 … ko.c0980 | Sagad nga pronoun (40) |
| `cards.jsonl` | ko.c0981 … ko.c1003 | Dugang particle (23) |
| `cards.jsonl` | ko.c1004 … ko.c1030 | Dugang connector (27) |
| `cards.jsonl` | ko.c1031 … ko.c1056 | Mga pulong sa katingala (26) |
| `cards.jsonl` | ko.c1057 … ko.c1095 | Mapuslanong pulong (39) |
| `cards.jsonl` | ko.c1096 … ko.c1115 | Dugang counter (20) |
| `cards.jsonl` | ko.c1116 … ko.c1178 | Pulong sa pagpanguyab (63) |
| `cards.jsonl` | ko.c1179 … ko.c1211 | Adlaw-adlaw nga pagdayeg (33) |
| `cards.jsonl` | ko.c1212 … ko.c1415 | Mga nasod (204) |
| `examples.jsonl` | ko.e075 … ko.e275 | 201 example glosses |
| `dialog.jsonl` | ko.g150 … ko.g201 | 52 dialogue glosses |
| `decks.jsonl` | the 13 decks above | label + desc |
| `groups.jsonl` | ko.grp.core-words | "Panguna nga pulong" |
| `sentences.jsonl` | ko.s0297 … ko.s0301 | lesson rows that replace ko.s0295, ko.s0012, ko.s0127, ko.s0289, ko.s0292 (removed) |

## Changed rows

| id | change |
|---|---|
| ko.c0617 | note: 한국 사람, 미국 사람, 멕시코 사람 = taga-Mexico: nasod + 사람 |
| ko.g019 | "Si @@ ko." (the learner's own name, see below) |
| ko.g021 | "Taga-Pilipinas. Cebu." (the Korean line is now 필리핀에서 왔어요. 세부요.) |
| meet.06 | "Taga-Mexico ko" |
| particles.03 | "'Gikan ko sa Hapon' =", why with 일본에 왔어요 |
| office.05, office.08 | Kii → @@ |
| `lessons/meet.html` | the "Sa ilis sa US" paragraph became a tip after the script (미국에서, 필리핀에서, 일본에서 왔어요 as in English, plus 세부에서 왔어요 under the existing waiver; `_note` on `lessons.jsonl` meet updated) |
| `lessons/meet.html`, `particles.html`, `office.html` | `{{ex:…}}` ids renumbered by the export (same order) |

## `@@` = the learner's own name

`@@` is replaced at runtime by the learner's nickname (or Minsu when there is none). Keep exactly as many `@@` as the English row; never translate or move it out of the sentence.

## Please check first

1. **Country names** (ko.c1212 …): the forms used are *Korea (South Korea), Hapon, Tsina, Rusya, Amerika (Estados Unidos), Pilipinas, Alemanya, Pransiya, Espanya, Italya, Inglatera (England), Ehipto, Turkiye (Turkey), UAE (United Arab Emirates), Netherlands (Holland)*. Everything else is the English name without accents (*Mexico, Brazil, Cote d'Ivoire, Sao Tome and Principe*). Is *Mexico* or *Mehiko* the better written form? *Taiwan, Vietnam, Thailand* or a Spanish-derived form?
2. Grammar words left in English as the profile's glossary allows: *adverb, pronoun, plural, irregular sa ㅂ / ㄷ / 르 / ㅅ / ㅎ*, "Mawala ang ㄹ" (ㄹ drops). Is *irregular sa ㅂ* natural?
3. Interjection glosses (ko.c1031 …): *hala!, aray, ay sus, uwek, yehey, Diyos ko*. Some are Manila-flavoured; prefer Cebu forms.
4. Register words: *Humok / Mainiton / Isog* for the English "Mild / Warm / Bold" scale in Pulong sa pagpanguyab. *Isog* may read as "fierce"; *maisugon* or *pangahas* may be better.
5. ko.c1129 보조개: "dimple (gamay nga lungag sa aping kon mopahiyom)". Is there a common Cebuano word?
6. *assignment* (숙제), *CR* (화장실), *cellphone*, *subway*: Cebu everyday choices; *Pagkaon nga Koreano* for 한국 음식.
7. Deck labels: *Sagad nga noun / verb / describing verb / adverb / pronoun, Dugang particle / connector / counter, Mga pulong sa katingala, Mapuslanong pulong, Pulong sa pagpanguyab, Adlaw-adlaw nga pagdayeg, Mga nasod*, group *Panguna nga pulong*.
