# am-en pronunciation aids: rules and decisions

Authority: `docs/profiles/am.md` §6. Every aid comes from `pron_lookup.json` or from `node tools/content/am/pron_am.js "/ipa/"`. No aid is respelled by hand. This file records how the tool works and what it leaves to the writer.

## 1. Commands
- `node tools/content/am/pron_am.js "/aɪ ˈlaɪk ˈkɔːfi/"` → አይ ላይክ ˈኮፊ (one output line per argument).
- `--selftest`: 36 worked pairs, 13 bad inputs, the 40 sample rows of profile §6.7; exit 1 on any mismatch. Run after every change to the tool.
- `--pattern`: the `pronPattern` regex in `profile.json` (regenerate profile.json's value if the letter set ever changes).
- `--lookup`: rebuild `pron_lookup.json` from `ipa_seed.json` (this course's own IPA; it wins) and then from every IPA pron of `tools/content/zh/` (cards, idioms, `{{ex}}` rows). `--lookup --seed-only` skips zh. The seed shipped by the lead holds 98 strings; the dispatcher runs the full `--lookup` once before the writers start (about 700 scaffold strings then come from zh).
- `node tools/content/am/pron_check.js [summary|all] [--strict]`: SCAFFOLD (no fidel yet), PATTERN, BANNED, DIFF (lookup string with another aid), CONFLICT (one English string, two aids), WORD (a word respelled unlike every lookup row), PROSE (a respelling quoted in prose that no pron field has).

## 2. Input (zh conventions)
American values; ASCII g; ˈ on content words; weak forms (tə, ər, frəm, ən, əv) unless stranded or stressed; ‖ between sentences; numbers as words; several `/…/` groups become " / " alternatives. Refused: ɡ (U+0261), ɒ, ɹ, ɚ, ɾ, ɑ ɔ ɜ without ː, British əʊ eə ʊə ɪə, capitals, digits, punctuation, text outside slashes, empty words, dangling or doubled ˈ.

## 3. Output
Only the letters listed in profile §6.3 rule 10 (the 7 orders of ሀ ለ መ ሠ ረ ሰ ሸ በ ቨ ተ ቸ ነ አ ከ ኸ ወ ዘ ዠ የ ደ ዸ ጀ ገ ፈ ፐ, and ኧ), all in U+1200–U+137F; ˈ U+02C8; one space between words; ". " between sentences; " / " between alternatives. No ፡ ። ፣, no combining marks, no Latin, no digits. Copy the output; never retype it.

## 4. Decisions the tool encodes (profile §6.3)
1. 6th order (ሳድስ) = no vowel, always; English ɪ is the 3rd order.
2. θ = ሠ series, ð = ዸ series (fallback if ዸ fails a stock font: change `SERIES['ð']` to 0x12D8 (ዘ) and run `--lookup`; then `pron_check.js` shows DIFF lines to repaste).
3. v = ቨ series, w = ወ series.
4. æ and ɑː share the 4th order (hat = hot = ሃት).
5. iː uː eɪ oʊ aɪ aʊ ɔɪ = order + ይ / ው; before a vowel the glide carries it (going ˈጎዊን, idea አይˈዲየ).
6. Clusters = runs of 6th-order letters; no vowel is ever inserted.
7. ŋ = ን, always vowel-less, no ግ (singing ˈሲንኢን, finger ˈፊንገር).
8. h + ʌ/ə = ኸ; a vowel with no consonant = the አ series, with ኧ for ʌ/ə and አ for æ/ɑː.
9. ˈ on every word of 2+ syllables (syllabic l/n count), none on 1-syllable words; ˌ dropped; a missing ˈ comes from HAND_STRESS, else from a stressed zh occurrence, else the tool throws.

## 5. Writer's hand cases
- Names and places: IPA from `ipa_seed.json` (profile §6.5); one reading per name in the pack. Not verified against the en-US voice: the reviewer listens first.
- Weak vs strong forms: decided by the IPA you write.
- Two IPA forms for one spelling (record n./v.): make the English strings differ (*a record* / *to record*).

## 6. Open points for the native check
- Is ዸ read as "a kind of d" by readers who have not met it? Is ኧ familiar enough word-initially?
- Do readers keep the 6th order vowel-less in long runs (ስትሪይት, ቴክስትስ) once the `pron` lesson states the rule?
- ኢይ- at a word start (ˈኢይትን eaten) may read as two syllables.

## 7. Reviewer's check (AM-REVIEWER)
- `pron_am.js --selftest` all OK; `pron_check.js all --strict` exit 0: 814 pairs, 65 strings made by the tool beyond the lookup, pattern / banned / diff / conflicts / word / prose all 0. No aid was retyped in the review; no aid changed.
- Every Ethiopic character in the pack, `ui.json` and `roadmap.json` is inside U+1200–U+137F; no combining marks (U+135D–135F), no Ethiopic numerals, no Supplement or Extended letters.
- ð (ዸ series U+12F8–12FE) is used 195 times in the pack: ዸ 108, ዺ 42, ዻ 20, ዼ 14, ዽ 10, ዾ 1 (in ዾውዝ *those*). The interface uses none. The font check of §6 still applies to all six letters.
