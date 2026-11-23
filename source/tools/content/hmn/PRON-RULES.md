# hmn-en pronunciation conventions (HMN-R, 2026-11-23)

hmn-en copies the vi-en IPA. Its binding rules are `tools/content/vi/PRON-RULES.md`, as the header of `tools/content/hmn/pron_check.js` says. This file records only what is settled for hmn-en on top of those rules.

1. **One transcription per word and per phrase.** `node tools/content/hmn/pron_check.js summary` reports 0 phrase conflicts and 0 word conflicts over 828 pairs (decks.js, IDIOMS, and every `{{ex:}}` row of lessons.js and more/*.js). Run it after any change.
2. **The 19 "rule hits" are alignment notes, not errors.** They come from numbers, acronyms and hyphenated words whose IPA has more tokens than the English has words: «LOL» /ˌel oʊ ˈel/, «Call 911!», «I was born in 1998.», «twenty twenty-six». Leave them.
3. **IPA quoted in Hmong prose** (lesson tables, `why` lines, checks) is written between slashes with no inner space, for example /θ/ or /ˈdʌbəljuː/. tools/hmong/rpa_check.js then skips it as pron. A transcription with spaces belongs in a `<td class="k">` cell.
4. **Stress shown in Hmong prose** uses capitals in plain text: ho-TEL, ba-NA-na. In a lesson table, that cell is `<td class="k">`. Inline in prose, write the word and the stressed part, for example «(thirteen: TEEN)», so that no syllable fragment such as «thir» is read as Hmong.
5. **Comparisons with RPA letters** (RPA r is like t; English s is RPA x; English sh is like RPA s) follow docs/profiles/hmn.md §6. Deck 18 and lesson pron use the same wording.
6. The reviewer changed no IPA. Every changed card and `{{ex:}}` row kept its English, so its transcription is unchanged.
