# English speakers learning Cherokee (ᏣᎳᎩ, Tsalagi): course profile

Course `en-chr`: Cherokee for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Cherokee, written in the syllabary, with a plain romanised line under every card and example. Machine-readable twin: `tools/target/chr/profile.json`, written from the same data file as §8 and §9 (scratch `chrP/data.js`, `chrP/gen.js`), so the two agree. Pronunciation generator: `tools/target/chr/respell.js` with its source-tagged word list `tools/target/chr/lexicon.txt` (§6). The folder has a `HOLD` file: the course stays out of releases until the lead removes it.

**Cherokee is an endangered language with living communities: the Cherokee Nation, the United Keetoowah Band (both Oklahoma) and the Eastern Band of Cherokee Indians (North Carolina).** The course presents it as a living language and points learners to the Cherokee Nation's own free classes and materials (§5). **No first-language speaker has reviewed this profile. The course must not ship before a first-language speaker or a Cherokee Nation language programme has reviewed every word, sentence, note and sound description (§11, item 1).**

**Evidence tags.**
- **[source]**: copied from a page opened in this session, named (Joyner's book, DAILP, the Cherokee Nation's pages, r12a, the Unicode character names).
- **[curriculum convention]**: what a course book, dictionary project or standard does.
- **[practitioner opinion]**: a teacher's or project's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning. Every claim of that kind that writers will copy is in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

**Two caveats come first.**
1. **Every Cherokee word in this profile was copied from a source opened in this session.** 306 of the 320 lexicon lines come from one book, Michael Joyner's *Cherokee Language Lessons, Volume 1* (2nd ed. 2016, CC BY-SA 3.0, Oklahoma / Otali dialect), read through a fetch tool that returns the PDF as text. Two come from a DAILP teaching article, and twelve are words with an ending, spelled as in Joyner's sentences, whose readings are derived from Joyner words (§2.5, §6.1). `lexicon.txt` names the source of every line. **The Cherokee Nation's own word list, its PDFs (Consortium word list, Feeling's *Cherokee Reader*, the Set A / Set B poster, *See, Say, Write*) and cherokeedictionary.net's entries could not be opened**: the fetch tool only opens pages that a web search returns, and none of their entry pages or files came back from a search (§11). So the brief's source order could not be followed past its first step: the Cherokee Nation's pages were read for policy (keyboards, fonts, materials), but no word comes from them. Words that could not be checked are left out and listed in §11.
2. **The evidence on learners is thin.** No study of English speakers learning Cherokee was opened. §4 is built only from the remarks in Joyner's book and the DAILP article. Montgomery-Anderson's *Reference Grammar of Oklahoma Cherokee* and the Cherokee Nation's lessons were not opened (only catalogue pages came back).

## 1. Summary

- **Which Cherokee?** Western (Oklahoma) Cherokee, the language of the Cherokee Nation and the United Keetoowah Band, as taught in Joyner's book, which is "primarily Otali-based" (Otali = Oklahoma and the Snowbird community in North Carolina) [source: Joyner p3]. The Eastern (Kituhwa) dialect of the Qualla Boundary in North Carolina exists and is not taught. No beginner word was found in a source where the two differ (§2.1). The blurb says: "This course teaches Cherokee as it is spoken in Oklahoma (the Cherokee Nation and the United Keetoowah Band), written in Sequoyah's syllabary with a simple romanised line under every word."
- **Writing:** the syllabary, 85 signs in modern use (U+13A0–U+13F4; Ᏽ U+13F5 is archaic [source: r12a]), in the uppercase block; lowercase syllabary (U+AB70–U+ABBF, U+13F8–U+13FD) is folded to it in matching (§10.3). The romanised line uses one convention: **Joyner's printed pronunciation without tone digits, underdots or glottal stops, with his j written ts** (osiyo, wado, tohitsu, tsalagi, agowhtiha). Tone, vowel length and the glottal stop are not shown; Joyner's detailed string stays in `lexicon.txt` and may be quoted in a note (§6.2).
- **Text only:** no Cherokee text-to-speech voice exists that the app can use. `voiceMatch` is `^chr(-|_|$)`, so the app never reads Cherokee with an English voice. No item depends on hearing; sound lessons describe sounds in words, as `en-ceb` does. Recordings from the Cherokee Nation or cherokeedictionary.net could be linked later only with permission: neither states a reuse licence (§2.6).
- **Pron generation:** `respell.js` reads whole words from `lexicon.txt` (320 entries) and **throws on any word it does not know**; it never adds an ending to a word. On load it checks every line's syllabary against its romanisation sign by sign, using a table built from the Unicode names of the signs, allowing only the alternations the sources show (g / k, d / t, tl / dl / hl, ts / ch, gw / kw / qu, hn / n), a vowel the source does not print (ᏔᎵᏚ taldu), and the unwritten h (ᏅᎩ nvhgi). A line that does not match is rejected; one Joyner line was (§6.3). 40 lines rely on a dropped vowel and are listed for checking.
- **Biggest traps (§4, from the sources' own remarks):** thinking in English order ("Cherokee appears to work opposite to the way English does"); the person prefix on the verb (Set A / Set B; Joyner's "Fix the bad grammar" sets are all prefix errors); plurals made with ᎠᏂ- or Ꮧ- instead of -s; animate against inanimate (ᎢᏯᏂ / ᎢᎦ, "have" for solid and alive things); "not" needs Ꮭ and Ᏹ- on the verb; "was" seen or told; one "you" for one, two or many; the unwritten h and unsaid vowels.
- **Standing rule (§7):** two strands. **(a) The prefix carries the meaning**: who does it (Set A / Set B), how many and what kind (ᎠᏂ- / Ꮧ-, animate / inanimate, solid / alive). **(b) One sign is one syllable**: spelling and reading sign by sign. The keywords were tested on 32 sample lines.
- **Answers (§10):** word tiles by default. Typing is optional, in the syllabary or in the plain romanisation. The matcher must fold case, spaces, hyphens, punctuation, tone digits and underdots, lowercase syllabary, j = ts, qu / kw = gw and tl / dl / hl; g / k, d / t, ts / ch and a missing or extra unwritten h count as "almost". Specified with 46 test cases (§10.3).
- **Course size (§8, §9):** the verified material supports **21 lessons** (21 roadmap items kept, one of them, `pronouns`, absorbing `chr-places`) and **18 decks**, 325 verified cards. **Five roadmap items are not supported** and are proposed for cutting: `chr-classroom`, `chr-family`, `chr-food`, `chr-time`, `chr-feelings` (21 + 1 + 5 = 27). The validator's 40 dialogues need composed lines (§8, §11). **Request 1 for the lead:** bundle Noto Sans Cherokee (OFL 1.1), because Android does not reliably ship a Cherokee font (§10.6).

## 2. Variant, register and voice

### 2.1 Variant: Western (Oklahoma) Cherokee

- [source: Joyner p3] Three dialects are named:
  - **Elati**, which "uses an 'r' sound where the other two dialects use an 'l' sound", believed extinct about 1900;
  - **Otali**, spoken in Oklahoma and in the Snowbird community in North Carolina; the book is "primarily Otali-based";
  - **Kituhwa**, the Eastern dialect of the Qualla Boundary in North Carolina.
- [source: Joyner p5] "In Otali Cherokee the 'j' and 'ch' soundings are more common", in a passage on s / ts variants (pp5–6). This is the only dialect difference in sounds the sources opened give, and it is about a sound, not a word.
- **Where the dialects differ in beginner words:** no source opened shows a word-level difference. The roadmap's own sources note that the University of Oklahoma Press describes Holmes and Smith's *Beginning Cherokee* as Oklahoma Cherokee with North Carolina / Qualla as the other main dialect (roadmap `src`, not reopened). The DAILP article writes *tohiquu* where Joyner writes *tohigwu* for ᏙᎯᏊ: that is a spelling difference (both are the sign Ꮚ, Unicode name QUU), not evidence of a dialect difference.
- **Rule for writers:** teach the Western forms as Joyner prints them. Do not write "in North Carolina they say …" in any note: nothing in the sources supports such a note. One sentence in `sounds` says that the Eastern (Kituhwa) dialect exists, is spoken in North Carolina, and differs in some sounds and words, and that the course does not teach it.
- **Why Western:** the roadmap chose it; Joyner's book, the only full source opened, is Otali; the Cherokee Nation, whose free classes the course points to, is in Oklahoma.

### 2.2 Writing: the syllabary (one rule)

**The rule: every Cherokee string in the course is written in the uppercase syllabary block (U+13A0–U+13F4), exactly as `lexicon.txt` has it, with no Latin letters or digits in it.**

- [source: r12a] "Cherokee case folds to the previously encoded uppercase letters"; lowercase was added in Unicode 8.0, and uppercase is the most widely supported in fonts. So the course writes uppercase and folds typed lowercase to it (§10.3).
- [source: r12a] Words are separated by spaces; punctuation is ASCII; text runs left to right. The course writes Cherokee sentences with spaces between words and `. , ? !` attached to the word before.
- [source: r12a] Ᏽ (mv) is archaic and not used, so the course teaches 85 signs (U+13A0–U+13F4), counting Ꮝ.
- Joyner sometimes puts a dot under a sign (Ꮵ̣ᎪᏩᏘᎭ) to mark a short vowel. The course never writes it; the matcher and the generator remove it (U+0323).
- **Numbers are written as words** (ᏌᏊ, ᏍᎪᎯ), never as digits, because the generator only knows words. The Cherokee Nation publishes a syllabary-and-numbers poster (Cherokee numerals); it was not opened, and the course does not teach numerals.

### 2.3 "You", people and names

- [source: Joyner L8] ᏂᎯ *nihi*: "You. You two. You all." One word for any number. The verb, not the pronoun, shows how many (ᏕᏣᏙᎠ is "you are called" for one person and, said differently, for "you all": Joyner L12 prints two pronunciations, de²³jạ³do³ɂa and de¹jạ³do³ɂa, for one spelling).
- [source: Joyner p8] "Whenever you see an English translation of 'he', you can usually substitute 'she' or 'it'." Meanings in the course say "he / she" or "he / it" where the source does.
- [source: Joyner p8] Joyner tells the reader to use "he and I" rather than "we", and that "you" means one person unless marked "you two" or "you all". The course follows the roadmap: no dual, no inclusive / exclusive "we".
- **No polite "you" and no titles** were found in any source. Not taught.
- **Names:** [source: Joyner L12] "Each person selects a name to be called", and "the Cherokee for several names is quite different than their English forms". Joyner gives ᎺᎵ *meli* (Mary), ᏣᏂ *tsani* (John), ᏕᏫᏗ *dewidi* (David), ᏙᎹᏏ *tomasi* (Thomas), ᏑᏌᏃ *susano* (Susan), ᎵᏂᏓ *linida* (Linda), ᎹᎦᎵ *magali* (Michael), ᎹᎦᏰᏘ *magayeti* (Margaret), ᏆᏆᎠ *gwagwaa* (Barbara), ᏣᎵ *chali* (Charles), ᎡᏂᏙᏂ *entoni* (Anthony), ᎠᎵᏌᏇᏘ *alisagweti* (Elizabeth). These are the only names the course uses in Cherokee strings. In English prompts the learner may be "Mary" or "David".

### 2.4 Greetings and set expressions an A1 learner needs

| Cherokee | Generated pron | Use | Source |
|---|---|---|---|
| ᎣᏏᏲ | osiyo | hello; DAILP: more literally "it is good", also the closing of older letters | Joyner L4; DAILP |
| ᏏᏲ | siyo | hello (short; DAILP: common in conversation) | Joyner L4; DAILP |
| ᏙᎯᏧ? | Tohitsu? | how are you? Joyner: "It is well, isn't it?" | Joyner L10; DAILP |
| ᎣᏏᏧ? | Ositsu? | how are you? (with *osi*, "good") | DAILP |
| ᏙᎯᏊ | tohigwu | "It is just well" (the answer) | Joyner L10 |
| ᏩᏙ | wado | thanks | Joyner L4 |
| ᏛᎬᎪᎯ | dvgvgohi | "I will see you one again" (the parting) | Joyner L10 |
| ᏛᏍᎩᎪᎯ | dvsgigohi | "you (one) will see me again" (the reply) | Joyner L10 |
| ᎢᎮᏙᎸᎢ | ihedolvi | "you come around again" | Joyner L12 |
| Ꭷ | ka | "Hey now!" | Joyner L22 |
| ᎰᏩ | howa | "Okay. Alright. Sure." | Joyner L4 |

- [source: DAILP] *nihina* "how about you?" (*nihi* "you" + *-na*) is in the DAILP article **only in romanisation**, so it is not a card. Writers may mention it in an English note as "DAILP gives *nihina*".
- **"Please", "sorry", "excuse me", "good morning", "good night" were not found** in any source opened. Not taught; no polite-request lesson (§8, `chr-classroom` cut).
- [source: DAILP] Durbin Feeling's question *Gado usdi idadiha?* ("what is being said?", romanised only) is quoted there to encourage learners to look past English translations. `greetings` says this in English.

### 2.5 Endings an A1 learner needs

| Ending | Generated pron | Function | Example (Joyner, copied whole) |
|---|---|---|---|
| -Ꮝ | -s | yes / no question; in Joyner's examples on the first (or only) word | ᎰᏩᏍ? *Howas?* "Is it okay?" (L9); ᎠᏂᏍᎦᏯᏍ ᎠᏂᎪᏩᏘᎭ? "Do the men see it?" (L8) |
| -ᏍᎪ | -sgo | yes / no question | ᎦᏥᎪᏩᏘᎭᏍᎪ? "Do I see them?" (L8); ᏛᎬᎪᎯᏍᎪ? "Will I see you again later?" (L10) |
| -Ꮷ | -tsu | "…, right?" | ᎠᏂᎨᏯᏧ ᏩᏯ ᎠᏂᎪᏩᏘᎭ? "The women see the wolf, right?" (L8); ᏙᎯᏧ? |
| -Ꮚ | -gwu | "only, just" | ᎠᏴᏊ ᎩᏟ ᏥᎪᏩᏘᎭ. "Only I am seeing the dog." (L8); ᏙᎯᏊ |

- The **sentences** are Joyner's, copied whole. The **readings of the endings** are derived, and the 12 words with an ending that the sentences contain are listed whole in the lexicon (source `DER`, §6.1): -Ꮷ and -Ꮚ from ᏙᎯᏧ *to¹hi⁴ju* and ᏙᎯᏊ *to¹hi⁴gwu* beside ᏙᎯ *to¹hi⁴*, -Ꮝ and -ᏍᎪ from the first sign (Ꮝ) and the first two signs of ᏍᎪᎯ *sgo²³hi*. Joyner printed no pronunciation for these sentences. **The tool never adds an ending itself**: a word with an ending that is not one of the 12 throws.
- [source: Joyner L18–20, via the fetch tool's summary] -ᏍᎪ is shown in yes / no questions: ᎠᏍᎦᏯᏍᎪ ᏥᎪᏩᏘᎭ? "Do I see a man?".
- Writer rule: **only the 12 listed words with an ending** may be used (ᎰᏩᏍ?, ᏌᏊᏍ?, ᏙᎯᏍ?, ᎠᏂᏍᎦᏯᏍ, ᎦᏥᎪᏩᏘᎭᏍᎪ?, ᏛᎬᎪᎯᏍᎪ?, ᎠᏍᎦᏯᏍᎪ, ᎠᏂᎨᏯᏧ, ᎩᏟᏊ, ᏓᎪᏩᏘᎭᏊ, ᏩᏯᏊ, ᎠᏴᏊ), in Joyner's sentences or alone; no new word + ending. Yes / no questions in the course are those (and ᏙᎯᏧ?, ᎥᏍᎩᎩ?); a question mark on a plain statement is not a Cherokee question [inference from the examples]. The roadmap's own `questions` title had -Ꮝ / -ᏍᎪ, which the sources confirm.

### 2.6 Voice: none, so the course is text-only

- **Verified absences** (the roadmap's `src`, not reopened): Google Cloud TTS has no Cherokee; Apple lists Cherokee for keyboards and autocorrection but not for VoiceOver, spoken content or dictation; Cherokee is absent from Azure's speech-to-text tables, and Azure's text-to-speech table did not render. The only Cherokee text-to-speech found were community and research experiments with no service or licence. Android was not checked. **The roadmap tag `chr-US` matches no device voice.**
- **Design consequence** (as `en-ceb` §2.6 and `en-nan` §2.6):
  - no item depends on hearing; no listening-only `mc`;
  - the sound lesson describes each sound in words and with Joyner's own comparisons ("the 'g' in 'gaff' or the 'k' in 'kite'");
  - the pron line is shown by default for the whole course (§6.6).
- **`voiceMatch: "^chr(-|_|$)"`** (the engine's existing field; `pickVoice` in `src/app.html`). Only a voice whose tag starts with `chr` can be chosen. An English voice must never read the romanised line: it would read *tohitsu* or *vv* as English. With no match the app shows its "No voice for this language on this device." toast once; request 3 changes the text to "No Cherokee voice exists yet: read the line under each card."
- **Recordings, later: what the sources say.**
  - **cherokeedictionary.net** [source: its About page]: built on Feeling's 1975 dictionary and other sources, "made freely available to all in the spirit of openness"; word definitions are not copyrighted, but its example sentences are "used here with permission". It states **no reuse licence for entries or recordings** and invites questions by email. The search form has a "Has Audio" option, but whose audio and under what terms is not stated. **So recordings may be linked only after written permission from the project (and, for audio of Cherokee speakers, from the speakers or the programme that recorded them).**
  - **The Cherokee Nation** [source: teaching-materials page]: the materials "are free to download"; *See, Say, Write* comes with MP3 files. **No licence or terms of use are stated.** Use needs the Language Department's permission (language@cherokee.org).
  - **Joyner's book** is CC BY-SA 3.0, but text only.
  - **Recommendation:** commission recordings of the course's own words from first-language speakers through a Cherokee Nation programme, with consent and payment, rather than reuse clips (request 8).

### 2.7 Voice of the English text

- Plain, friendly US English. A `why` is one sentence.
- **Cherokee inside English text:** in lesson bodies, the syllabary in `<b>` and the romanisation in `<i>` once, at first mention: `<b>ᏩᏙ</b> <i>wado</i>`. In plain-text fields, the syllabary bare, with the romanisation in brackets only when the point is the sound ("ᏅᎩ (nvhgi) has an h the signs do not show").
- **Any romanisation quoted in English text must be copied from the generator's output**, never typed (request 4 checks it).
- **Respect:** say "the Cherokee language", "Cherokee speakers", "the Cherokee Nation"; never "an Indian language", "a dead language", "a code". No feathers, war bonnets or "chief" jokes in examples.
- Sample voice lines:
  1. "The prefix shows who: ᏥᎪᏩᏘᎭ is 'I see him', ᎯᎪᏩᏘᎭ is 'you see him'."
  2. "One sign is one syllable: Ꭳ Ꮟ Ᏺ, osiyo."
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

These are the terms Joyner, the Cherokee Nation (the "Set A & Set B Poster" title) and r12a use, plus the sister courses' wording where Cherokee does not differ. Use each term exactly and always the same way.

| Term to use | Do not use | Note |
|---|---|---|
| Cherokee; the Cherokee language | Tsalagi (except as the word ᏣᎳᎩ), Cherokee dialect | Lesson 1 gives ᏣᎳᎩ *tsalagi* once. |
| Western (Oklahoma) Cherokee; Eastern Cherokee | Otali, Kituhwa (except once, in `sounds`) | |
| the syllabary; a sign | alphabet, letter, character, symbol | "sign" is the course's word for one syllabary character. **keyword** "one sign", "sign by sign" |
| syllable | | One sign = one syllable (Ꮝ is the one sign with no vowel). **keyword** "one syllable" |
| row (the g row, the d / t row) | column, series | The roadmap and §8 group signs by consonant row. |
| the romanised line; romanisation | pinyin, phonetic spelling, transliteration | The plain line under every card (§6). |
| nasal vowel (v) | schwa, "uh" | Joyner: "the 'v' and 'ṿ' vowels are always nasalized". |
| the unwritten h | intrusive h (except once, quoting Joyner), aspiration | Joyner p8. |
| prefix | bound pronoun (except once, quoting Joyner), person marker | **keyword** |
| Set A; Set B | first set, second set, Class 1 / 2 | Joyner and the Cherokee Nation's poster. Joyner: "A word is Set B if it uses Ꭴ- for 'he', otherwise Set A." **keyword** |
| plural prefix (ᎠᏂ-, Ꮧ-) | plural ending | **keyword** "prefix" |
| animate / inanimate (living / not living) | gender | Joyner L14–16. **keywords** |
| solid / alive (for "have") | classificatory verb (except once, in the `have` lesson) | Joyner L17: "something solid", "alive". **keywords** |
| verb; whole verb form | verb root, stem (not taught) | |
| question ending (-Ꮝ, -ᏍᎪ) | question particle, clitic | |
| "only" ending (-Ꮚ); "right?" ending (-Ꮷ) | | |
| personal knowledge / second-hand (for "was") | evidential | Joyner L20. |
| false friend | | |

## 4. Error zones of English speakers, ranked

**How the list is built:** only from what the sources themselves say learners get wrong or must not do (Joyner's preface, pronunciation guide, grammar notes and his "Fix the bad grammar" exercise sets; the DAILP article). **No error comes from general linguistics.** Ranked [inference] by how often the error can occur in a sentence and whether a tile or typing item can catch it. Wrong forms are marked *. Wrong forms are either Joyner's own (from his "Fix the bad grammar" sets) or the author's constructions, built only from lexicon words to show the point; every right form is a Joyner word or sentence.

1. **The person prefix on the verb (Set A, Set B)**
   - Wrong → right: *ᎯᎪᏩᏘᎭ for "I see him" → ᏥᎪᏩᏘᎭ (L7); ᏥᏯᏚᎵᎭ (Joyner: "I want him") used for "I want it" → ᎠᏆᏚᎵᎭ (L21).
   - [source: Joyner L17–18] The "Fix the bad grammar" corrections "mostly fix the bound-pronoun prefix on verbs and descriptors"; "a word is Set B if it uses Ꭴ- for 'he', otherwise Set A"; bound pronouns "never stand alone".
   - Design consequence: strand (a) of the standing rule; `see-he`, `see-i-you`, `want`.
2. **Thinking in English: separate words, English order**
   - Wrong → right: "I see the dog" built as three words → ᎩᏟ ᏥᎪᏩᏘᎭ (noun, then one verb word; L8 pattern ᎠᏴᏊ ᎩᏟ ᏥᎪᏩᏘᎭ); verb-first ᎠᎪᏩᏘᎭ ᎠᎨᏳᏣ ᏅᏯ → the basic order the course uses, ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ (L11); Joyner calls the order flexible, so the course teaches the basic order without marking others wrong.
   - [source: Joyner pp1–2] "Cherokee appears to work opposite to the way English does"; [source: Joyner L20] word order is flexible, but the basic pattern is subject–object–verb, and adjectives may follow the noun.
   - Design consequence: `see-he` teaches "the verb is the sentence"; `order` items put nouns before the verb.
3. **Plurals: ᎠᏂ- for people and animals, Ꮧ- for things, not -s**
   - Wrong → right: *ᎠᏍᎦᏯ ᎠᏃᏍᏓ ᎩᏟ ᏓᏂᎪᏩᏘᎭ → ᎠᏂᏍᎦᏯ ᎠᏃᏍᏓ ᎩᏟ ᏓᏂᎪᏩᏘᎭ (Joyner's own correction, L16); ᏣᎳᎩ / ᎠᏂᏣᎳᎩ swapped (L16); *ᎦᏍᎩᎶ for "tables" → ᏗᎦᏍᎩᎶ (L21).
   - [source: Joyner L15–16] "When talking about multiple animate things, the prefix ᎠᏂ- is added if the word doesn't start with Ꭴ"; "When talking about multiple inanimate things, the prefix 'Ꮧ̣-' is added." Some nouns do not change (ᎩᏟ "A dog. Dogs.").
   - Design consequence: strand (a); `plurals`; the People deck.
4. **Animate against inanimate: counting and "have"**
   - Wrong → right: *ᎯᎳ ᎢᎦ? about dogs → ᎯᎳ ᎢᏯᏂ? (L5, L22); *ᎠᎩᎭ for "I have it (a dog)" → ᎠᎩᎧᎭ (L17).
   - [source: Joyner L22] ᎢᏯᏂ counts animate things, ᎢᎦ inanimate ones; [source: Joyner L17] "have" changes with the object: ᎤᎭ "something solid", ᎤᏩᎧᎭ "alive".
   - Design consequence: strand (a); `numbers`, `have`, `animals`; the Traps deck.
5. **"Not" needs Ꮭ and the Ᏹ- prefix**
   - Wrong → right: *Ꮭ ᎠᎩᎭ → Ꮭ ᏯᎩᎭ (L18); *Ꮭ ᏩᏯ ᎤᏲᎢ → Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ (L9).
   - [source: Joyner L18–20, via the fetch summary] Ꮭ and ᏱᎩ together mean "isn't"; Ᏹ- combines with Ꭰ- to form Ꮿ- and with Ꭴ- to form Ᏻ-; Ᏹ- alone suggests "maybe".
   - Design consequence: strand (a) (the Ᏹ- prefix); `negation`.
6. **One English "you", "he" and "was"**
   - Wrong → right: expecting a different word for "you two" → ᏂᎯ for all (L8; the verb changes: ᏛᎬᎪᎯ / ᏛᏍᏛᎪᎯ / ᏛᎢᏨᎪᎯ, L10); one "was" → ᎨᏒᎩ (personal knowledge) / ᎨᏎᎢ (second-hand) (L20).
   - [source: Joyner p8, L20] quoted in §2.3; ᎨᏒᎩ "with personal knowledge", ᎨᏎᎢ "without".
   - Design consequence: `pronouns`, `copula`; notes on Greetings cards.
7. **Reading the signs letter by letter: the unwritten h and the vowels that are not said**
   - Wrong → right (said): *nvgi → ᏅᎩ *nvhgi*; *agowatiha → ᎠᎪᏩᏘᎭ *agowhtiha*; *ta-li-du* (every sign said in full) → ᏔᎵᏚ *taldu*.
   - [source: Joyner p8] the h "is not written" except in Ꮏ and Ꮐ; [source: r12a] the syllabary omits tone, vowel length, the glottal stop and syllable-final h. Joyner's printed strings drop vowels (ᏔᎵᏚ *tạ²ɂldu*, ᏍᎪᎯᏥᏆ *sgo²³hị³tsgwa*).
   - Design consequence: strand (b) (sign by sign for spelling, the romanised line for saying); the generator refuses letter-by-letter readings (§6).
8. **g / k, d / t, ts / ch, and stress**
   - Wrong → right (said): expecting the sign to say whether it is g or k → Joyner: g "sounds like either the 'g' in 'gaff' or the 'k' in 'kite'. When in doubt, use the 'g' sound."; ᏙᎯᏧ said *dohitsu* → *tohitsu*; stressing one syllable → "at an equal volume" (Joyner p7).
   - [source: Joyner pp5–7; r12a] Aspiration is written for only six pairs of signs; Cherokee does not contrast voiced and voiceless stops.
   - Design consequence: the matcher counts g / k, d / t, ts / ch as "almost" (§10.3); `sounds`, `syllabary-3`.
9. **Green, and other words with a narrow use**
   - Wrong → right: *ᎢᏤᎢ ᎩᏟ → ᎢᏤᎢ is "only used when referring to fruits and vegetables that are still green" (L14); green-coloured is ᎢᏤᎢᏳᏍᏗ.
   - Design consequence: `colours`; Traps deck.
10. **Learning phrases instead of the language; reading only the translation**
    - [source: Joyner, Preface p1] "Simply learning phrases so you can speak 'pidgin' Cherokee is not learning Cherokee." [source: DAILP] Feeling's question asks the learner to look past English translations; DAILP also notes that learners "often confuse" the endings -Ꮛ (-quv) and -Ꮚ (-quu).
    - Design consequence: notes give the literal meaning (ᏙᎯᏧ "things are well, right?"); set phrases are taught as whole verb forms, with the prefix named.

Not ranked, because no source opened gives them as learner errors: tone and vowel length (real, but not written and not drillable without audio, §6.5); Latin look-alike shapes (Ꭰ looks like D) [inference]; questions with rising pitch alone [inference, from the endings in §2.5].

## 5. Learners: who, why, what first

**Who** (no survey was opened; all [inference] except where tagged):
- **Cherokee citizens and descendants** in Oklahoma and across the US (the Cherokee Nation, the United Keetoowah Band, the Eastern Band) who want to learn their language. Many will also take the Cherokee Nation's classes.
- **Family members** of Cherokee speakers.
- **Students and teachers** in schools and universities with Cherokee courses (the roadmap names a Duke University Cherokee 101 syllabus, 2024; not reopened).
- **People interested in Native languages and in Sequoyah's syllabary.**

**What the Cherokee Nation offers** [source: language.cherokee.gov pages opened]: a word list of "over 7,000 words" (search tool), downloadable teaching materials (word lists, Feeling's reader and verb handbooks, *See, Say, Write* with audio, the Set A / Set B poster, syllabary charts), keyboards and fonts, posters and a language hub. The roadmap's sources add free online classes each spring and fall (not reopened). **The course's last lesson and the course description link to the Cherokee Nation Language Department** (https://language.cherokee.gov/) as the place to continue.

**What they need first** [inference]:
1. **The syllabary**, because every card is written in it, and because it is the part of the language most learners already know of. Four lessons, by row, as in the roadmap.
2. **The romanised line and its limits** (what it does not show), in `sounds`.
3. **Greetings and first words** (ᎣᏏᏲ, ᏙᎯᏧ?, ᏩᏙ, ᎥᎥ, ᎥᏝ).
4. **Numbers and names**, then **whole verb forms**, the heart of Joyner's method.
5. **The prefix idea early** (Set A in `see-i-you`), because every later lesson depends on it.

**Check of the roadmap's order:** the roadmap follows Joyner's lesson order (fixed expressions and numbers before any prefix; "see" first as whole forms, he / they before I / you; Set A / Set B after colours and plurals; negation, copula and "want" after). The sources confirm that order, lesson by lesson (§8). The topics the roadmap took from the Duke syllabus (family, food, time, feelings, weather) are the ones no source opened could fill.

## 6. Pronunciation aid (`pron`)

**Evidence.**
- [source: Joyner pp5–8] His pronunciation strings mark tone with numbers (² "normal, low, or neutral", ³ "high", ¹ "extra low fall", ⁴ "extra high rise", and an unmarked high fall at the end of every word), short vowels with an underdot (ạ ẹ ị ọ ụ ṿ), the glottal stop with ɂ, and alternatives after a comma. He writes j for the ts-row (jạ²lạ²gi), ch in some words (ạ²chu⁴ja), gw for the qu-row, tl or hl for the tl-row, and the h the syllabary does not write (nvh²gi, a¹gowh²tị³ha). This is the Cherokee-English Dictionary tradition the roadmap names.
- [source: DAILP] The DAILP article writes plain romanisation with no tone: *tohitsu*, *ositsu*, *osiquu*, *tohiquu*, *nihina*.
- [source: NHA tutor, CC BY 4.0] The Native History Association writes plain romanisation: *Osiyo*, *Dtohitsu?*, *Osda*, *Gado detsadoa?*, *Wado*. Three of these are exactly what the generator gives from Joyner's strings (*osiyo*, *osda*, *wado*), and so is *Gado detsadoa?* (ᎦᏙ ᏕᏣᏙᎠ?); *Dtohitsu* differs only in writing the d-row sign.
- [source: r12a] The syllabary does not write tone, vowel length or the glottal stop, nor most syllable-final h; aspiration is written for only six pairs of signs.

**Decision.** `pron: "required"`. The pron is the **plain romanised line, generated by `tools/target/chr/respell.js`**, never typed by hand.
- Command line: `node tools/target/chr/respell.js "<text>"` prints `<text> -> <pron>`. `--pattern` prints `pronPattern`; `--check` checks the lexicon and prints counts, the signs no word uses, and every dropped-vowel line; `--test` runs the negative tests; `--sign Ꮖ` prints a sign's value (sign cards only).
- The module exports `respell`, `signValue`, `plain`, `align`, `fold`, `pattern`, `warnings`, `W` (the lexicon), `SRC`, `GLOSS`, `RAW` (the printed source string), `DROPS`, `SIGN`, `NAME`.

### 6.1 Why a lexicon, and what is in it

The syllabary cannot be read into the spoken word sign by sign: ᏙᎯᏧ is *tohitsu* though Ꮩ is in the d-row; ᎠᎪᏩᏘᎭ is *agowhtiha*, with no vowel after w and an h that no sign shows; ᏔᎵᏚ is *taldu*. A letter-by-letter reading would also bring the author's guesses into the course, which the brief forbids. So:
- **`lexicon.txt` holds every word the course may use: 320 entries** (words and a few phrases). Format: `syllabary<TAB>pronunciation as printed<TAB>source id<TAB>English gloss`. The printed string keeps Joyner's tone digits and underdots, so the detail is not lost; the tool derives the plain line from it.

  | Source | Entries |
  |---|---|
  | Joyner, *Cherokee Language Lessons 1*, "ᏘᎪᎵᏯ (Read them)" lists, lessons 4–22 (`J4` … `J22`) | 306 |
  | DAILP, "Greetings" (`DG`): ᎣᏏᏧ *ositsu*, ᏗᏣᎳᎩ *ditsalagi* | 2 |
  | Words with an ending from Joyner's sentences, readings derived (`DER`, §2.5) | 12 |

- **How the lines were made** (scratch `chrP/build/mklex.py` from `chrP/raw_joyner_*.txt`): the fetch tool was asked for each vocabulary list as index lines (spelling | string | gloss | lesson). Where Joyner gives alternatives ("ᎣᏏᏲ, ᏏᏲ | o²sị³yo, sị³yo"), each spelling got its own line. Where one spelling has several readings, the first printed is kept. Words inside Joyner's phrases (ᎦᏙ ᎤᏍᏗ) also got their own lines.
- **Glosses** were re-asked verbatim for the words where the first answer looked paraphrased: ᎠᏴ / ᎠᏯ are "I. We." (both spellings); ᎠᎭᏫ / ᎠᏫ "A deer. Deer."; ᏩᎭᏯ / ᏩᏯ "A wolf. Wolves."
- **Decisions recorded in the lexicon header:**
  - Ꮭ is printed *tla* (first form, lesson 4) and *hla* (lessons 13, 18–20). The lexicon keeps *tla*, also the NHA tutor's spelling. So Joyner's "Ꮭ ᏯᎩᎭ [hla ya¹gị²ha]" is generated as *tla yagiha*; the other tl-row words keep what Joyner printed (ᎩᏟ *gihli*, ᏝᏏ *hlasi*). The matcher treats tl, dl and hl as the same (§10.3).
  - Joyner's dot under a sign is dropped, so ᏥᎪᏩᏘᎭ "I see him" and Ꮵ̣ᎪᏩᏘᎭ "I see it" are one line (both *tsigowhtiha*), as are ᎯᎪᏩᏘᎭ / Ꭿ̣ᎪᏩᏘᎭ. The meaning column says "him / it".
  - ᏕᏣᏙᎠ ("you are called", one person or all), ᎠᏆᏚᎵᎭ ("I want it", "he wants me"), ᏣᏚᎵᎭ ("you want it", "he wants you") and ᎢᎦ (copula "is", and the count word for things) are printed by Joyner with one spelling for two meanings; each is one line with both meanings.
- **Adding words:** writers never edit a pron. When the generator throws, the writer reports the word. **The lead adds a line only from an opened source, with its URL** (`lexicon-add-<id>.txt` next to the tool, merged later). Every new line passes the table check or is refused.

### 6.2 The key (exact format)

| Rule | Decision | Example (generated) |
|---|---|---|
| Source of the reading | the pronunciation string printed in the source, for that spelling (Joyner; DAILP for two words) | ᎠᎪᏩᏘᎭ ← a¹gowh²tị³ha |
| Removed | tone digits ¹ ² ³ ⁴, underdots (short vowels), the glottal stop ɂ | ᏔᎵ *tali* ← tạɂ³li |
| ts-row | Joyner's j is written **ts**; his ch and ts stay as printed | ᏣᎳᎩ *tsalagi* ← jạ²lạ²gi; ᎠᏧᏣ *achutsa* ← ạ²chu⁴ja |
| qu-row | **gw**, as Joyner prints it | ᏌᏊ *sagwu* |
| tl-row | as printed (tl or hl); Ꮭ alone is *tla* | ᎥᏝ *vtla*, ᎩᏟ *gihli* |
| g / k, d / t | as printed: Joyner writes the spoken stop | ᏙᎯᏧ *tohitsu*, ᏌᎪᏂᎨᎢ *sakonigei* |
| The nasal vowel | **v** | ᎥᎥ *vv* |
| The unwritten h, unsaid vowels | as printed | ᏅᎩ *nvhgi*, ᏔᎵᏚ *taldu* |
| Words | separated by one space, as in the syllabary | ᎦᏙ ᏕᏣᏙᎠ? *Gado detsadoa?* |
| Punctuation | `. , ? ! : ;` attached to the word before; quotes and dashes dropped | ᎥᎥ, ᏛᏍᎩᎪᎯ. *Vv, dvsgigohi.* |
| Capitals | the first letter of a text that ends in `. ? !` (a sentence); nothing else (names are lowercase, as Joyner prints them) | ᏙᎯᏧ? *Tohitsu?*; ᎺᎵ *meli* |
| Signs alone (sign cards only) | the sign's Unicode name, qu written gw (`signValue`) | Ꮖ *gwa*, Ꮝ *s*, Ꮐ *nah* |
| Unicode | the syllabary in, ASCII letters out | |

**What the plain line does not show** (taught in `sounds`, with the detail in notes where Joyner gives it): **tone** (Joyner's four levels and the falling end of every word), **vowel length** (his underdots), **the glottal stop** (his ɂ), and which h's and vowels the signs leave out (the line shows them, the syllabary does not). **The optional detailed line is not shown anywhere in the app.** A card note may quote Joyner's string when the point is tone or length, copied from `lexicon.txt` field 2 (`RAW`), for example: "Joyner marks ᏔᎵ as tạɂ³li: a short a, a glottal stop, then a high li." This keeps one line for everyone and the detail for those who want it [inference: a second line of digits and dots would crowd a phone card, and no voice can teach what the digits mean].

### 6.3 The table check (what the tool refuses)

Every lexicon line is checked on load, sign by sign, against a table built from the Unicode names of the 86 signs ("CHEROKEE LETTER GA" → onset g, vowel a; the names were read from Python's `unicodedata`, UCD 15.1). For each sign the reading may be only:
1. **one of that sign's onsets**, with the alternations the sources show:
   - g-row and Ꭷ: g or k (Joyner p5);
   - d-row and Ꮤ Ꮦ Ꮨ: d or t (ᏙᎯᏧ *tohitsu*, Joyner and DAILP);
   - Ꮬ and the tl-row: tl, dl or hl (Joyner p6: "When in doubt, use the 'hl' sound");
   - ts-row: ts or ch (Joyner prints j and ch);
   - qu-row: gw, kw or qu (Joyner gw, DAILP qu);
   - Ꮏ: hn or n;
   - every other sign: its own consonant (Ᏽ: m);
2. then **the sign's vowel, or nothing** (a vowel the source does not print: ᏔᎵᏚ *taldu*). A vowel sign (Ꭰ–Ꭵ) must keep its vowel; Ꮝ is s alone;
3. then **an optional h** (the unwritten h: ᏅᎩ *nvhgi*).

The number of words must match, and every letter must be used. A line that fails is **rejected and the tool will not load**.

- **It rejected one Joyner line:** ᏌᎪᏂᎨ ᎤᏍᎪᎸᎢ "grey (blue-faded)" printed *sạ²ko²³nị³ge⁴ɂi u¹sgo²³lv⁴ɂi*: the string has a final *-i* that the spelling ᏌᎪᏂᎨ lacks. It is left out (the other faded colours, printed without the *-i*, pass).
- **Negative tests** (`--test`, all rejected): that line; ᎣᏏᏲ / *osiya*; ᎣᏏᏲ / *oyosi* (signs swapped); ᏩᏙ / *wa* (sign dropped); ᏩᏙ / *wado do*; ᎤᏁᎦ / *unega a*; ᏣᎳᎩ / *salagi*; ᎠᏴ / *ayu*; ᎦᎪ / *gago go*; ᏙᎯᏧ / *tohisu*; ᎢᎦ / *ga*; ᎥᎥ / *v*; ᏅᏯ / *naya*; ᎩᏟ / *gili*; ᏍᎪᎯ / *sagohi*. Positive tests (accepted): ᏙᎯᏧ, ᎠᎪᏩᏘᎭ, ᏅᎩ, ᏔᎵᏚ, ᏡᎬᎢ, ᎦᎵᏉᎩ, and ᏙᎯᏧ typed in lowercase syllabary.
- **What the check cannot do:** it confirms that the two scripts agree, not that either is right. A fetch error that changed both the same way would pass. And **for a sign whose vowel was dropped, the romanisation does not confirm the sign's vowel** (ᏔᎵᏚ *taldu* would also pass with Ꮃ in place of Ꮅ). `--check` lists these **40 lines** (two are `DER` words built on forms of "see"); they involve Ꮹ in the forms of "see" (ᎠᎪᏩᏘᎭ, ᏥᎪᏩᏘᎭ …), Ꮅ / Ꮃ in numbers (ᎦᎵᏉᎩ, ᏔᎵᏚ, ᏔᎵᏍᎪᎯ, ᏁᎳᏍᎪᎯ …), Ꭹ in ᏅᎩᏍᎪᎯ / ᎯᎩᏍᎪᎯ, Ꮎ in ᎤᎾᏍᏗ, Ꮱ in ᏡᎬᎢ, Ꮨ in ᏃᏘ, Ꮵ in ᏍᎪᎯᏥᏆ, Ꮒ in ᎡᏂᏙᏂ, Ꮅ in ᎤᎵᏑᏫᏓ. They are the first lines to check against the printed book (§11).
- **Nor can it tell paired signs apart** whose onsets it allows to alternate: Ꭶ / Ꭷ, Ꮣ / Ꮤ, Ꮥ / Ꮦ, Ꮧ / Ꮨ, Ꮎ / Ꮏ, and Ꮬ / Ꮭ. A fetch error that turned the Ꮤ of ᏔᎵ into Ꮣ would pass; only the printed book can catch it.
- **One spelling with two plain readings throws** (none today: the three spellings with two printed strings, ᎢᎦ, ᏥᎪᏩᏘᎭ, ᎯᎪᏩᏘᎭ, differ only in tone or underdots).
- **Coverage:** 12 of the 85 signs occur in no lexicon word: Ꮇ lu, Ꮋ mi, Ꮌ mo, Ꮍ mu, Ꮐ nah, Ꮛ gwv, Ꮦ te, Ꮬ dla, Ꮮ tle, Ꮰ tlo, Ꮲ tlv, Ꮾ wv. They are taught as signs only (sign cards, §9); no word example can be given for them.

### 6.4 How `respell` reads a text

- Lowercase syllabary is folded to uppercase (the Unicode case mapping, which r12a describes); U+0323 is removed.
- Words are matched whole against the lexicon (the longest listed phrase first). Anything not listed throws ("unknown: … report it"); the tool never splits off or adds an ending.
- Latin letters, digits or other scripts throw.
- `.,?!:;` are attached to the word before; quotes and dashes are dropped; a sentence ending in `. ? !` gets a capital.
- **Silent-error classes that remain** (no throw, no warning):
  - a phrase composed from words gets the words' own readings; Joyner might print a sound change across words (none was seen in his phrases);
  - Ꮭ in a phrase is *tla* where Joyner printed *hla* (a recorded choice, §6.1);
  - the 12 `DER` words: their readings join a word and an ending; the real word may be said differently (§2.5). In the first draft the tool also added endings by itself, and misread Joyner's ᏔᎵᏍᎪ ᏌᏊ "twenty one" as ᏔᎵ "two" + the question ending -ᏍᎪ; that path was removed.

### 6.5 `pronPattern`, and twenty worked examples

```
^[A-Za-z]+[,.?!:;]?(?: [A-Za-z]+[,.?!:;]?)*$
```

- ASCII letters only; words separated by single spaces; one punctuation mark after a word. BMP-only, works with and without the `u` flag.
- **Rejects** (tested): syllabary, a trailing space, a double space, tone digits (*o²siyo*, *tsa1*), hyphens (*osi-yo*), a space before punctuation, two punctuation marks.
- It accepts impossible readings; **the generator and its table check are the guarantee.** Every lexicon reading, the 90 sample cards and the 20 examples below pass it.

| # | Cherokee | `pron` (generated) | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | ᎣᏏᏲ | `osiyo` | hello | vowel sign + si + yo |
| 2 | ᏩᏙ | `wado` | thanks | w row, d row |
| 3 | ᏣᎳᎩ | `tsalagi` | Cherokee | Joyner j written ts |
| 4 | ᏙᎯᏧ? | `Tohitsu?` | How are you? | d-row sign said t; sentence capital |
| 5 | ᏙᎯᏊ | `tohigwu` | I'm fine | Ꮚ written gwu |
| 6 | ᎥᎥ | `vv` | yes | v, the nasal vowel |
| 7 | ᎥᏝ | `vtla` | no | tl row printed tl |
| 8 | ᎩᏟ | `gihli` | dog | tl row printed hl |
| 9 | ᏅᎩ | `nvhgi` | four | unwritten h |
| 10 | ᎠᎪᏩᏘᎭ | `agowhtiha` | he sees him / it | Ꮹ loses its vowel: wh |
| 11 | ᏔᎵᏚ | `taldu` | twelve | Ꮅ loses its vowel |
| 12 | ᏍᎪᎯ | `sgohi` | ten | lone Ꮝ |
| 13 | ᎤᎿ | `uhna` | there | Ꮏ hna |
| 14 | ᏍᎪᎯᏥᏆ | `sgohitsgwa` | one hundred | Ꮵ loses its vowel: ts |
| 15 | ᎠᏧᏣ | `achutsa` | a boy | ch and ts both printed |
| 16 | Ꭷ | `ka` | Hey now! | the only k sign |
| 17 | ᎦᏙ ᏕᏣᏙᎠ? | `Gado detsadoa?` | What are you called? | two words |
| 18 | Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ. | `Tla wahya uyoi yigi.` | The wolf isn't bad. | Ꮭ ... Ᏹ-; sentence |
| 19 | ᎰᏩᏍ? | `Howas?` | Is it okay? | derived suffix -Ꮝ (warning) (warning printed) |
| 20 | ꮳꮃꭹ | `tsalagi` | Cherokee (typed in lowercase syllabary) | lowercase folds to uppercase |

### 6.6 Card front, and hiding the line

- **Card front:** the syllabary, large, with the romanised line under it, **shown by default for the whole course** (no voice, so the line is the only guide to sound, as in `en-ceb` and `en-nan`).
- **Hideable later** through the per-course setting requested in `en-nan` (request 10 there): "romanisation: always / tap to reveal / off". It stays on by default. Learners who can read the syllabary will want it off, and the course encourages that after the script stage [inference].
- **Example rows** show the line under the Cherokee.
- **Practice items carry no pron** (PRACTICE-SPEC), except: sound-stage items whose answer is the romanised line, and sign-by-sign tiles (§7).

### 6.7 What `sounds` and the syllabary lessons must teach so the line can be read

1. One sign = one syllable; Ꮝ is s alone.
2. The vowels a e i o u, and v "always nasalized" (Joyner).
3. g "either the 'g' in 'gaff' or the 'k' in 'kite'" (Joyner p5), and the same for d / t; so the line writes what is said (ᏙᎯᏧ *tohitsu*).
4. ts and ch (Joyner writes j); gw; tl, also heard as hl.
5. The h that only Ꮏ and Ꮐ write, and vowels that are not said (ᏅᎩ *nvhgi*, ᏔᎵᏚ *taldu*).
6. Tone, vowel length and the glottal stop exist and change meaning, but neither the syllabary nor the line shows them; Joyner's book marks them. Each syllable "at an equal volume" (Joyner p7).
7. Typing: the romanised line on an English keyboard is fine; j for ts, kw or qu for gw, hl for tl are all accepted (§10.3).

## 7. Standing practice rule

**Rule:** every lesson's practice set keeps re-testing two things.
- **(a) The prefix carries the meaning.** The first sign or signs of a verb show who does it (Set A: ᏥᎪᏩᏘᎭ I / ᎯᎪᏩᏘᎭ you / ᎠᎪᏩᏘᎭ he / ᎠᏂᎪᏩᏘᎭ they; Set B: ᎠᏆᏚᎵᎭ / ᏣᏚᎵᎭ / ᎤᏚᎵᎭ / ᎤᎾᏚᎵᎭ), and a prefix shows how many and what kind (ᎠᏂ- for people and animals, Ꮧ- for things; "have" changes for solid and alive things; Ᏹ- with Ꮭ).
- **(b) One sign is one syllable.** A word is spelled and read sign by sign (Ꭳ Ꮟ Ᏺ → ᎣᏏᏲ), and the romanised line, not the signs, shows the h's and unsaid vowels.

**Why these two.**
- **(a)** is what every one of Joyner's "Fix the bad grammar" sets corrects (§4.1, §4.3), and it is in every sentence from `see-he` on. It is also what the roadmap names as the hardest point (Set A / Set B, object-dependent verbs).
- **(b)** gives the five script and sound lessons, which have no verbs yet, a hinge that is fully sourced: the tiles are signs and the answer is a lexicon word. It keeps the syllabary alive after the script stage.
- **Not chosen:** word order (Joyner calls it flexible, so a wrong order is often not wrong); the question endings (lesson-bound; the preferred mixed neighbour instead, §8); tone (not written, no audio).

**What counts as hinging** (mechanical):
- **`order`, strand (a):** the tiles are words of a sentence with a prefixed verb or noun (ᎠᏂᏍᎦᏯ ᎠᏃᏍᏓ ᎩᏟ ᏓᏂᎪᏩᏘᎭ), and `x` holds the same word with the wrong prefix (ᎠᏍᎦᏯ, ᎠᎪᏩᏘᎭ, ᎠᎩᎭ for ᎠᎩᎧᎭ, ᎠᎩᎭ for ᏯᎩᎭ after Ꮭ).
- **`order`, strand (b):** the tiles are the signs of one lexicon word (Ꭳ Ꮟ Ᏺ), and `x` holds a sign from the same row or a look-alike in sound (Ᏻ for Ᏺ). The joined tiles are Cherokee text, so `validate.js` accepts them today (`targetScript`).
- **`type`, strand (a):** `a[0]` is a whole verb form or a prefixed noun; `x` holds the same verb or noun with another prefix (never a word of the answer).
- **`type`, strand (b):** `a[0]` is one lexicon word typed in the syllabary or its romanised line (with `pronAnswers`), prompted sign by sign ("Type the word whose signs are o, si, yo"); `x` holds a same-row sign.
- **Count** (`minOrder: 2`, `minType: 2`): in every set, at least 2 `order` and 2 `type` items hinge on (a) or (b), and their `why` names it with a keyword. In the five script lessons, strand (b); from `greetings` on, at least one of each pair is strand (a) wherever the lesson has a prefixed word (from `numbers`: ᎠᏂᏔᎵ; from `see-he`: always).

**Examples in the shorthand** (tiles spaced by word or by sign, §10.4):

```
['or', 'osiyo (hello), sign by sign', 'Ꭳ Ꮟ Ᏺ', 'Ᏻ', 'One sign is one syllable: o-si-yo. Ᏻ is yu.']
['or', 'wado (thanks), sign by sign', 'Ꮹ Ꮩ', 'Ꮫ', 'One sign is one syllable: wa-do. Ꮫ is dv.']
['or', 'Joyner\'s corrected sentence (L16): men · good (them) · dog(s) · they see them', 'ᎠᏂᏍᎦᏯ ᎠᏃᏍᏓ ᎩᏟ ᏓᏂᎪᏩᏘᎭ', 'ᎠᏍᎦᏯ', 'Several men take the prefix ᎠᏂ-: ᎠᏂᏍᎦᏯ.']
['or', 'The girl is seeing the rock.', 'ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ', 'ᏓᎪᏩᏘᎭ', 'One rock: the prefix Ꭰ- (he sees it); ᏓᎪᏩᏘᎭ is he sees them.']
['ty', 'I see him (one word)', 'ᏥᎪᏩᏘᎭ', 'Ꮵ ...', 'ᎯᎪᏩᏘᎭ', 'Set A: Ꮵ- is I; ᎯᎪᏩᏘᎭ is you see him.']
['ty', 'I have it (a dog)', 'ᎠᎩᎧᎭ', 'a dog is alive', 'ᎠᎩᎭ', 'A dog is alive: ᎠᎩᎧᎭ, not ᎠᎩᎭ (solid).']
['ty', 'Type the word whose signs are ts-a, la, gi (Cherokee)', 'ᏣᎳᎩ|tsalagi', 'three signs', 'Ꮳ Ꮃ', 'One sign is one syllable: Ꮳ Ꮃ Ꭹ.']
```
(The `ty` fallback words in the last line are signs, which can never rebuild the one-word answer.)

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\bprefix(?:es)?\b|\bSet [AB]\b|\b(?:solid|alive|animate|inanimate)\b|\bone sign\b|\bsign by sign\b|\bone syllable\b
```

- **Not keywords:** "sign" alone, "syllabary", "word order", "plural" alone, "Prefixing".
- **Tested** (node, 32 of 32 as expected; scratch `chrP/kwtest.js`):
  - **Match (16):** "Ꮵ- is the Set A prefix for I: ᏥᎪᏩᏘᎭ." · "The prefix ᎠᏂ- makes it they: ᎠᏂᎪᏩᏘᎭ." · "Set B verbs take Ꭴ- for he: ᎤᏚᎵᎭ." · "People take the plural prefix ᎠᏂ-: ᎠᏂᎨᏯ." · "Things take the prefix Ꮧ-: ᏗᎪᏪᎵ." · "A dog is alive: ᎠᎩᎧᎭ." · "A rock is solid: ᎠᎩᎭ." · "ᎢᏯᏂ counts animate things." · "ᎢᎦ counts inanimate things." · "One sign is one syllable: Ꭳ Ꮟ Ᏺ." · "Read it sign by sign, then say the word." · "Ꮝ is the one sign with no vowel." · "Each sign is one syllable: ᏣᎳᎩ has three." · "With Ꮭ the verb takes the prefix Ᏹ-: ᏱᎩ." · "Prefixes show who: Ꮵ- I, Ꭿ- you." · "ᎤᏚᎵᎭ is Set B: Ꭴ- for he."
  - **No match (16):** "ᏩᏙ means thanks." · "Use ᏙᎯᏧ? to ask how someone is." · "The question ending -ᏍᎪ goes on the word." · "Nouns come before the verb." · "ᎤᏁᎦ is white." · "ᏛᎬᎪᎯ is said when you leave." · "v is the nasal vowel." · "Say the h: nvhgi." · "ᎨᏒᎩ is was, when you saw it yourself." · "Twenty is ᏔᎵᏍᎪᎯ." · "The signs look like Latin letters but are not." · "Cherokee has no word for please here." · "Prefixing is not used for questions." · "This is the setting." · "Animated films are fun." · "Ꮭ means no."

**Lessons where the rule is hardest:**
- `sounds`, `syllabary-1` … `syllabary-4`: strand (b) only (sign tiles), since no prefixed word is taught yet; the words must come from the lexicon and use the lesson's rows.
- `greetings`, `first-words`, `name`: strand (b) (ᏩᏙ, ᎣᏏᏲ, ᏓᏆᏙᎠ by sign), plus (a) with ᏛᎬᎪᎯ / ᏛᏍᎩᎪᎯ (I will see you / you will see me) as a `type` contrast.
- `numbers`, `numbers-big`: (a) with ᎠᏂᏔᎵ / ᏔᎵ and ᎢᏯᏂ / ᎢᎦ; (b) with ᏍᎪᎯ.
- `colours`: (a) with ᎠᎩᎦᎨᎢ / ᎠᏂᎩᎦᎨᎢ / ᏗᎩᎦᎨᎢ.
- `copula`: (a) with Ꮭ ᏱᎩ (Ᏹ-).

## 8. Lessons (final order)

**How much of the roadmap the verified material supports.** Each lesson needs at least 3 example rows, 3 check questions and 12–16 practice items (at least 4 `mc`, 3 `order`, 3 `fill`, 3 `type`), with Cherokee text in every `order` answer and `type` answer (`tools/target/validate.js`, read). With sign-by-sign tiles (§7) every lesson can meet the `order` minimum from lexicon words alone; the real limit is whether a lesson has **enough verified words for its topic** (about 10 or more, for 3 example rows and 12+ items without repeating).

| Roadmap item | Verdict | Verified material (count) |
|---|---|---|
| chr-sounds, chr-syllabary-1 … 4 | supported | 85 signs (Unicode names), 73 of them in lexicon words |
| chr-greetings | supported | 15 words and 2 Joyner sentences |
| chr-first-words | supported | 18 words |
| chr-classroom | **not supported: cut** | NHA's survival phrases are romanised only |
| chr-numbers | supported | 16 |
| chr-name | supported | 7 "called" forms, 12 names, 3 sentences |
| chr-pronouns | supported (absorbs chr-places) | 11 pronouns and place words |
| chr-questions | supported | 4 question words, 4 endings, 8 Joyner questions |
| chr-family | **not supported: cut** | no family word in a source opened |
| chr-numbers-big | supported without prices | 18; no money words |
| chr-see-he, chr-see-i-you | supported | 10 forms of "see", 15 Joyner sentences with them |
| chr-colours | supported without clothes | 20; no clothing words |
| chr-plurals | supported | 17 people words, plurals of things |
| chr-want | supported | 12 forms |
| chr-negation | supported | 25 negative forms (Joyner L18–20) |
| chr-have | supported | 16 forms (+ 12 negatives) |
| chr-food | **not supported: cut** | ᏄᎾ, ᏚᏯ only (moved to `animals`) |
| chr-animals | supported | 11 animals, 12 things, ᎢᏯᏂ |
| chr-copula | supported | 18 forms, 3 sentences |
| chr-time | **not supported: cut** | days fail the pairing check (§11); no clock words |
| chr-places | **merged into `pronouns`** | ᎠᏂ / ᎠᎭᏂ, ᎤᎿ, ᎾᎥ, ᎢᎾ (5) |
| chr-feelings | **not supported: cut** | nothing verified |

**The proposal: a 21-lesson course** (21 roadmap items kept, `chr-places` merged into `pronouns`, 5 cut: 21 + 1 + 5 = 27), **18 decks, 325 verified cards** (the pools below). The lead cuts the six items from the roadmap rather than pad them. The five cut items can come back when a source with syllabary and romanisation for them is opened (the Cherokee Nation's Consortium word list and *See, Say, Write* are the obvious ones, §11).

**Validator floors that the verified material does not reach on its own:**
- **Dialogues (40+):** only 34 of Joyner's sentences generate, and several are fragments. Forty dialogues need composed lines (words from the lexicon put together by writers). Either the lead lowers the floor for `chr` to what the sources support (request 7), or every composed line is marked `comp` and sent for a first-language check before release.
- **Examples (30+), patterns (15+):** reachable: 34 Joyner sentences and 300+ words; patterns can be the prefix sets (Set A see, Set B want, have solid / alive, Ꮭ + Ᏹ-, ᎠᏂ- / Ꮧ- plurals, the four endings, the copula forms).

**Changes from the roadmap** (all [inference] built on §4 and the sources):
- **Kept, in the roadmap's order:** 21 items; ids lose the `chr-` prefix.
- **Cut:** `classroom`, `family`, `food`, `time`, `feelings` (no verified words); `places` merged into `pronouns`.
- **Retitled to sourced forms:**
  - `greetings`: ᏙᎯᏊ and ᏛᎬᎪᎯ kept; the roadmap's forms are confirmed (Joyner L10).
  - `first-words`: ᎥᏝ / Ꮭ confirmed (Joyner L4).
  - `name`: Gado detsadoa? and Hatlv hinela? (NHA, romanised only) replaced by ᎦᏙ ᏕᏣᏙᎠ? (Joyner L13), which generates the same romanisation, *Gado detsadoa?*.
  - `pronouns`: ᎠᏴ "I. We." (Joyner); *nihina* (DAILP, romanised only) only in notes.
  - `questions`: the word for "where" dropped (*hatlv*, NHA, romanised only; no syllabary source); -Ꮝ / -ᏍᎪ confirmed by Joyner's sentences.
  - `numbers-big`: ᏍᎪᎯᏥᏆ confirmed, *sgohitsgwa* (Joyner L11); prices cut.
  - `colours`: clothes cut.
  - `negation`: Tla yigoliga (NHA, romanised only) replaced by Joyner's Ꮭ ᏱᎩ / Ꮭ ᏯᎩᎭ.
  - `have`: ᏣᎭ, ᎤᎭ, ᎠᎩᎧᎭ confirmed (Joyner L17).
  - `animals`: ᎠᏫ, ᏙᏯ, ᏩᏯ, ᎢᏯᏂ confirmed; it also takes the two food words and the things.
  - `copula`: ᎢᎩ, ᎨᏒᎩ confirmed; "now, earlier, every day" become ᎢᎩ / ᎢᎦ / ᎨᏐᎢ (Joyner's own labels).
- **The roadmap's romanisations were checked against the generator** (a script over the roadmap's item titles): **48 syllabary + romanisation pairs agree** (*osiyo*, *tohitsu*, *tohigwu*, *wado*, *dvgvgohi*, *vv*, *vtla*, *tla*, *howa*, *osda*, *tsalagi*, *sagwu*, *tali*, *tsoi*, *nvhgi*, *hisgi*, *sgohi*, *dagwadoa*, *ayv*, *nihi*, *gado*, *gago*, *sadu*, *sgohitsgwa*, *agowhtiha*, *anigowhtiha*, *tsigowhtiha*, *higowhtiha*, *gigagei*, *unega*, *gvhnagei*, *gasgilo*, *digasgilo*, *agwaduliha*, *tsaduliha*, *uduliha*, *unaduliha*, *tsaha*, *uha*, *agikaha*, *tuya*, *ahwi*, *doya*, *wahya*, *iyani*, *igi*, *gesvgi*), because the roadmap's author took them from Joyner too (three of the 48 are single signs, Ꮏ hna, Ꮐ nah, Ꮝ s, which equal `signValue`). Not confirmed: the roadmap's "where" (*hatlv*), -Ꮝ / -ᏍᎪ as separate items (confirmed only inside sentences), and the roadmap's two-word `self` string (replaced by ᏣᎳᎩ in `profile.json`).

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds, the syllabary and first words** | | | |
| 1 | `sounds` | Sounds: six vowels with nasal v, g and k, d and t, and the h the syllabary does not write | chr-sounds | The vowels a e i o u and v (always nasal: Joyner p7); g "either the g in gaff or the k in kite" (Joyner p5), the same for d / t; the unwritten h (ᏅᎩ nvhgi, ᎠᎪᏩᏘᎭ agowhtiha); long and short vowels, tone and the glottal stop are real but not written in the syllabary or the plain line (named, not drilled); Western (Oklahoma) and Eastern Cherokee. Trap: reading the plain line as English letters; reading a word sign by sign and dropping the h. | Syllabary: vowels, g/k and h |
| 2 | `syllabary-1` | Syllabary 1: one sign per syllable; the vowels Ꭰ Ꭱ Ꭲ Ꭳ Ꭴ Ꭵ and the g / k and h rows | chr-syllabary-1 | One sign = one syllable; the six vowel signs; Ꭶ Ꭷ Ꭸ Ꭹ Ꭺ Ꭻ Ꭼ (Ꭷ is the only sign written with k); Ꭽ–Ꮂ; words that use only these rows: ᎥᎥ vv, ᎦᎪ gago, ᎯᎠ hia, ᎯᎢ hii, ᎢᎦ iga. Trap: Latin look-alike shapes (Ꭰ is a, not D: the shapes have their own values). | Syllabary: vowels, g/k and h |
| 3 | `syllabary-2` | Syllabary 2: the l, m, n and gw rows, with Ꮏ hna and Ꮐ nah | chr-syllabary-2 | Ꮃ–Ꮈ, Ꮉ–Ꮍ, Ꮎ–Ꮕ with Ꮏ hna and Ꮐ nah (the two signs that write an h: Joyner p8), Ꮖ–Ꮛ (gw); words: ᎰᏩ howa, ᏄᎾ nuna, ᏅᏯ nvya, ᏌᏊ sagwu, Ꮎ na, Ꮒ ni. Trap: Ꮏ / Ꮎ and Ꮐ confused. | Syllabary: l, m, n and gw |
| 4 | `syllabary-3` | Syllabary 3: the s row with lone Ꮝ s, and the d / t and dl / tl rows | chr-syllabary-3 | Ꮜ–Ꮢ and Ꮝ (s with no vowel: ᏍᎪᎯ sgohi); Ꮣ Ꮤ Ꮥ Ꮦ Ꮧ Ꮨ Ꮩ Ꮪ Ꮫ (three t-signs, but ᏙᎯᏧ is tohitsu with a d-row sign); Ꮬ–Ꮲ (tl, also printed hl: ᎩᏟ gihli, Ꮭ tla). Trap: expecting the sign to tell g from k or d from t. | Syllabary: s, d/t and dl/tl |
| 5 | `syllabary-4` | Syllabary 4: the ts, w and y rows; reading whole words and what the syllabary leaves unwritten | chr-syllabary-4 | Ꮳ–Ꮸ (ts, also ch; Joyner writes j), Ꮹ–Ꮾ, Ꮿ–Ᏼ; Ᏽ mv is archaic (r12a); reading whole words: ᏣᎳᎩ tsalagi, ᏩᏙ wado, ᎣᏏᏲ osiyo; vowels that are not said (ᏔᎵᏚ taldu, ᏍᎪᎯᏥᏆ sgohitsgwa). Trap: saying every vowel the signs show. | Syllabary: ts, w and y |
| 6 | `greetings` | Greetings: ᎣᏏᏲ, ᏙᎯᏧ?, ᏙᎯᏊ, ᏩᏙ, ᏛᎬᎪᎯ | chr-greetings | ᎣᏏᏲ / ᏏᏲ hello; ᏙᎯᏧ? / ᎣᏏᏧ? how are you; ᏙᎯᏊ (things are just well); ᏩᏙ thanks; ᏛᎬᎪᎯ (I will see you again) as the goodbye; ᎢᎮᏙᎸᎢ (you come around again). Trap: looking for a word-for-word "how are you" or "goodbye": ᏙᎯᏧ is "things are well, right?" and ᏛᎬᎪᎯ is "I will see you again" (Joyner L10 glosses). | Greetings |
| 7 | `first-words` | First words: ᎥᎥ (yes), ᎥᏝ / Ꮭ (no), ᎰᏩ (okay), ᎣᏍᏓ (good), ᏣᎳᎩ | chr-first-words | ᎥᎥ, ᎥᏝ / Ꮭ, ᎰᏩ, ᎣᏍᏓ / ᎤᏲᎢ, ᎥᏍᎩᎩ?, ᎠᏲ!, Ꮒ!, ᏄᎳ, ᎠᎴ / ᏃᎴ, ᎠᏎᏃ; ᏣᎳᎩ, ᏲᏁᎦ, ᎩᎵᏏ. Trap: vv (yes) looks like English letters; v is the nasal vowel. | First words |
| | | **Stage 2: Set phrases and first sentences** | | | |
| 8 | `numbers` | Numbers 1-10: ᏌᏊ, ᏔᎵ, ᏦᎢ, ᏅᎩ, ᎯᏍᎩ … ᏍᎪᎯ | chr-numbers | ᏃᏘ 0, ᏌᏊ … ᏍᎪᎯ; two words for 8 (ᏣᏁᎳ, ᏧᏁᎳ); ᎯᎳ ᎢᎦ? / ᎯᎳ ᎢᏯᏂ? (how many, things / living beings); ᎠᏂᏔᎵ, ᎠᏂᏦᎢ for people and animals. Trap: one "how many" for everything (Joyner L5, L22: ᎢᏯᏂ counts animate, ᎢᎦ inanimate). | Numbers 1 to 10 |
| 9 | `name` | Names: ᏓᏆᏙᎠ (… is what I am called), ᎦᏙ ᏕᏣᏙᎠ? (what are you called?) | chr-name | Name + ᏓᏆᏙᎠ; ᎦᏙ ᏕᏣᏙᎠ?; ᏚᏙᎠ, ᏚᎾᏙᎠ; Joyner's Cherokee forms of English names (ᎺᎵ Mary, ᏣᏂ John, ᏕᏫᏗ David); ᎣᏏᏲ, ᏕᏫᏗ ᏥᏍᏚ ᏓᏆᏙᎠ. Trap: putting "I am" first; "several names is quite different than their English forms" (Joyner L12). The roadmap's Gado detsadoa? and Hatlv hinela? (NHA, romanised only) are not used. | Names and introductions |
| 10 | `pronouns` | ᎠᏴ (I, we), ᏂᎯ (you), ᎯᎠ (this one here), ᎥᏍᎩᎾ (that one there), Ꮎ; and ᎠᏂ (here), ᎤᎿ (there) | chr-pronouns | ᎠᏴ "I. We.", ᏂᎯ "You. You two. You all." (Joyner L8); ᎯᎠ within reach, ᎥᏍᎩᎾ out of reach; Ꮎ like "the / that"; ᎠᏂ / ᎠᎭᏂ here, ᎤᎿ there, ᎾᎥ near, ᎢᎾ far (the roadmap's places lesson, merged here). Trap: English he / she: Joyner says "he" can usually be "she" or "it"; one word ᏂᎯ for one, two or many. | Pronouns, questions and places |
| 11 | `questions` | Question words ᎦᏙ (what), ᎦᎪ (who), ᎯᎳ ᎢᎦ? (how many) and the question endings -Ꮝ / -ᏍᎪ | chr-questions | ᎦᏙ, ᎦᎪ, ᎦᏙ ᎤᏍᏗ (which one), ᎦᏙ ᎠᏛᏁᎭ? (what is he doing?); -Ꮝ and -ᏍᎪ, in Joyner's sentences on the first (or only) word (ᎰᏩᏍ?, ᎦᏥᎪᏩᏘᎭᏍᎪ?, ᎠᏂᏍᎦᏯᏍ ᎠᏂᎪᏩᏘᎭ?); -Ꮷ "…, right?" (ᎠᏂᎨᏯᏧ); only the 12 words with an ending listed in the lexicon. Trap: rising pitch only, no ending. The roadmap's word for "where" (*hatlv*, NHA, romanised only) has no syllabary source and is left out. | Pronouns, questions and places |
| 12 | `numbers-big` | Numbers to 100: ᏌᏚ (11), ᏔᎵᏍᎪᎯ (20), ᏍᎪᎯᏥᏆ (100) | chr-numbers-big | 11-19 (ᏌᏚ … ᏐᏁᎳᏚ), tens (ᏔᎵᏍᎪᎯ … ᏐᏁᎳᏍᎪᎯ), ᏍᎪᎯᏥᏆ. Joyner's ᏔᎵᏍᎪ ᏌᏊ (21) has no printed pronunciation and the generator refuses it (NOSUF), so 21-99 are not taught as words. Prices and "how much" are cut: no money words were verified. Trap: saying the vowels the signs show (ᏔᎵᏍᎪᎯ talsgohi, not ta-li-). | Numbers to 100 |
| | | **Stage 3: Verbs as whole words: Set A and Set B** | | | |
| 13 | `see-he` | Verbs are sentences: ᎠᎪᏩᏘᎭ (he sees him / it), ᎠᏂᎪᏩᏘᎭ (they see him / it) | chr-see-he | One word = subject + verb + object; ᎠᎪᏩᏘᎭ, ᎠᏂᎪᏩᏘᎭ, ᏓᎪᏩᏘᎭ (he sees them), ᏓᏂᎪᏩᏘᎭ; nouns before the verb (ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ); with ᎠᎨᏯ, ᎠᏍᎦᏯ, ᎩᏟ, ᏪᏌ (Joyner L6). Trap: looking for separate words for he and him; English order. | Seeing (Set A) |
| 14 | `see-i-you` | Set A prefixes: ᏥᎪᏩᏘᎭ (I see him / it), ᎯᎪᏩᏘᎭ (you see him / it) | chr-see-i-you | ᏥᎪᏩᏘᎭ I see him / it, ᎯᎪᏩᏘᎭ you see him / it, beside ᎠᎪᏩᏘᎭ and ᎠᏂᎪᏩᏘᎭ: only the first sign changes (Ꮵ- I, Ꭿ- you: the course's reading of Joyner's forms, §11); ᎦᏥᎪᏩᏘᎭ / ᏕᏥᎪᏩᏘᎭ I see them (living / things), ᎦᎯᎪᏩᏘᎭ / ᏕᎯᎪᏩᏘᎭ you see them (Joyner L7). Trap: a separate pronoun instead of the prefix; ᎠᏴ before the verb is for emphasis: ᎠᏴᏊ ᎩᏟ ᏥᎪᏩᏘᎭ "Only I am seeing the dog". | Seeing (Set A) |
| 15 | `colours` | Colours: ᎤᏁᎦ (white), ᎩᎦᎨᎢ (red), ᎬᎿᎨᎢ (black), ᏌᎪᏂᎨᎢ (blue), ᏓᎶᏂᎨᎢ (yellow) | chr-colours | Eight colours and the ᎤᏍᎪᎸᎢ (faded) mixes (pink, grey, orange); ᎢᏤᎢ only for unripe fruit and vegetables (Joyner L14); one red animal ᎠᎩᎦᎨᎢ, many ᎠᏂᎩᎦᎨᎢ, red things ᏗᎩᎦᎨᎢ (L14-15). Clothes are cut (no verified words). Trap: one colour word for every noun. | Colours |
| 16 | `plurals` | Plurals by prefix: ᎠᏍᎦᏯ / ᎠᏂᏍᎦᏯ (man / men), ᎦᏍᎩᎶ / ᏗᎦᏍᎩᎶ (table or chair / tables or chairs) | chr-plurals | ᎠᏂ- for people and animals ("if the word doesn't start with Ꭴ"), Ꮧ- for things (Joyner L15-16); ᎠᏂᏣᎳᎩ, ᎠᏂᎨᏯ, ᏗᎪᏪᎵ, ᏕᏡᎬᎢ; many nouns do not change (ᎩᏟ "A dog. Dogs."). Trap: adding an -s; the wrong plural prefix (Joyner's "Fix the bad grammar" sets). | People |
| 17 | `want` | Set B prefixes: ᎠᏆᏚᎵᎭ (I want it), ᏣᏚᎵᎭ (you want it), ᎤᏚᎵᎭ (he wants it), ᎤᎾᏚᎵᎭ (they want it) | chr-want | Set B: "a word is Set B if it uses Ꭴ- for he" (Joyner L17-21): ᎤᏚᎵᎭ he wants it, beside ᎠᏆᏚᎵᎭ, ᏣᏚᎵᎭ, ᎤᎾᏚᎵᎭ (whole forms, prefixes not split off); ᏓᏆᏚᎵᎭ, ᏕᏣᏚᎵᎭ (want them, things). ᎠᏆᏚᎵᎭ is also "he wants me" (Joyner prints both). Trap: modelling ᎠᏆᏚᎵᎭ on ᏥᎪᏩᏘᎭ (Set A). | Wanting (Set B) |
| 18 | `negation` | Saying "not": Ꮭ with the Ᏹ- prefix (Ꮭ ᏱᎩ, Ꮭ ᏯᎩᎭ, Ꮭ ᏳᎭ) | chr-negation | Ꮭ before, Ᏹ- on the verb: ᏱᎩ, ᏯᎩᎭ (Ᏹ- + Ꭰ- = Ꮿ-), ᏳᎭ (Ᏹ- + Ꭴ- = Ᏻ-), ᏱᏣᎭ (Joyner L18); Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ. The roadmap's Tla yigoliga (NHA, romanised only) is not used. Trap: Ꮭ alone, without Ᏹ- on the verb. | Traps for English speakers |
| 19 | `have` | "Have" depends on the thing: ᎠᎩᎭ (I have it, solid), ᎠᎩᎧᎭ (I have it, alive) | chr-have | ᎤᎭ / ᎤᏩᎧᎭ, ᎠᎩᎭ / ᎠᎩᎧᎭ, ᏣᎭ / ᏣᎧᎭ, ᎤᏂᎭ / ᎤᏂᎧᎭ; Ꮧ- for "have them" (ᏓᎩᎭ, ᏕᏣᎭ); negatives Ꮭ ᏯᎩᎭ (Joyner L17-19). Trap: one "have" for a dog and a book. | Having: solid and alive |
| | | **Stage 4: Animals, is and was** | | | |
| 20 | `animals` | Animals and counting living things: ᎩᏟ, ᏪᏌ, ᎠᎭᏫ, ᏩᎭᏯ, ᏲᎾ; ᎢᏯᏂ | chr-animals | ᎩᏟ, ᏪᏌ, ᎠᎭᏫ / ᎠᏫ, ᏙᏯ, ᏥᏍᏚ, ᏩᎭᏯ / ᏩᏯ, ᏌᎶᎵ, ᏐᏈᎵ, ᏲᎾ; the "people" of an animal (ᎠᏂᏥᏍᏚ, Joyner L10); ᎯᎳ ᎢᏯᏂ? and ᎠᏂᏔᎵ / ᎠᏂᏦᎢ; things ᏄᎾ, ᏚᏯ, ᏅᏯ, ᏡᎬᎢ, ᎫᎴ, ᎪᏪᎵ. Trap: ᎢᎦ for counting animals. | Animals and things |
| 21 | `copula` | Is and was: ᎢᎩ, ᎢᎦ, ᎨᏒᎩ (I saw it), ᎨᏎᎢ (I was told) | chr-copula | ᎢᎩ just now, ᎢᎦ now and ongoing, ᎨᏐᎢ usually; ᎨᏒᎩ "was" with personal knowledge, ᎨᏎᎢ second-hand; ᎨᏎᏍᏗ will be; Ꮭ ᏱᎩ isn't (Joyner L20); ᎯᎠ ᎠᏴᏫ ᎣᏍᏓ ᎢᎩ. Trap: one "was"; adding "is" where Cherokee needs none (ᏩᏯ ᎤᏲᎢ "The wolf is bad"). | Not, is and was |

**Per-lesson notes for writers:**
- Every set satisfies §7: two `order` and two `type` hinges; in the script lessons by sign, from `see-he` on by prefix.
- **Every Cherokee string a writer uses must generate** (`node tools/target/chr/respell.js "…"`), which means every word is in `lexicon.txt`. **Prefer Joyner's sentences copied whole** (the table below) for example rows, dialogues and `order` items; a composed sentence (lexicon words put together by the writer) is marked `comp` in the writer's report and goes to the first-language check (§11).
- **Composing is limited to Joyner's own patterns:** noun(s) + verb (ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ), ᎯᎠ + noun (ᎯᎠ ᏧᏁᎦ ᏪᏌ), noun + ᎤᏲᎢ / ᎣᏍᏓ, Ꮭ … ᏱᎩ. No new verb forms, no new prefixes, **no new word + ending** (only the 12 `DER` words, §2.5). **No composed noun + "have" lines** (no source pairs a noun with ᎠᎩᎭ / ᎠᎩᎧᎭ): the object is an English cue ("(a dog: alive)") and the answer is the verb alone.
- **The prefix is named in every `why` that turns on it** ("the prefix ᎠᏂ- …", "Set B …"). The only prefixes the course names alone are those Joyner names (Ꭴ-, ᎠᏂ-, Ꮧ-, Ꭰ-, Ᏹ-, Ꮿ-, Ᏻ-) and, from comparing his forms, Ꮵ- (I) and Ꭿ- (you) in Set A; Set B forms are taught whole (ᎠᏆᏚᎵᎭ, ᏣᏚᎵᎭ), with no prefix split off (§11).
- The last two items of each set may mix in a neighbour from an earlier lesson. **Preferred neighbours:** the question endings (-Ꮝ / -ᏍᎪ), ᎢᏯᏂ / ᎢᎦ, Ꮭ + Ᏹ-.
- Cue the prompt when two forms fit: "(a dog: alive)", "(several things)", "(to one person)".
- Lesson bodies are in English, with Cherokee in `<b>` and the romanisation in `<i>` at first mention; example rows `{{ex:Cherokee|pron|English}}` take the generated pron.
- **`sounds`** names the Eastern dialect once (§2.1), says what the romanised line does not show (§6.2), and links the Cherokee Nation Language Department. **The last lesson (`copula`)** ends with a short "keep going" paragraph pointing to the Cherokee Nation's free classes and materials.

**Joyner's sentences that generate** (34; for example rows, dialogues and `order` items; "(DER)" = contains one of the 12 words with a derived reading, §2.5):

| # | Cherokee (Joyner, copied whole) | Generated pron | English (Joyner) | Lesson |
|---|---|---|---|---|
| 1 | ᎠᏂᎨᏯ ᎩᏟᏊ ᏓᏂᎪᏩᏘᎭ. | Anigehya gihligwu danigowhtiha. (DER) | The women see only the dogs. | 8 |
| 2 | ᎦᏥᎪᏩᏘᎭ. | Gatsigowhtiha. | I see them. | 8 |
| 3 | ᎠᏍᎦᏯ ᏩᎭᏯ ᏓᎪᏩᏘᎭᏊ. | Asgaya wahaya dagowhtihagwu. (DER) | The man is only seeing the wolves. | 8 |
| 4 | ᎠᏂᏍᎦᏯᏍ ᎠᏂᎪᏩᏘᎭ? | Anisgayas anigowhtiha? (DER) | Do the men see it? | 8 |
| 5 | ᎦᏥᎪᏩᏘᎭᏍᎪ? | Gatsigowhtihasgo? (DER) | Do I see them? | 8 |
| 6 | ᎠᎨᏯ ᏩᏯᏊ ᏓᎪᏩᏘᎭ. | Agehya wahyagwu dagowhtiha. (DER) | The woman sees only the wolves. | 8 |
| 7 | ᎠᏴᏊ ᎩᏟ ᏥᎪᏩᏘᎭ. | Ayvgwu gihli tsigowhtiha. (DER) | Only I am seeing the dog. | 8 |
| 8 | ᎠᏂᎨᏯᏧ ᏩᏯ ᎠᏂᎪᏩᏘᎭ? | Anigehyatsu wahya anigowhtiha? (DER) | The women see the wolf, right? | 8 |
| 9 | ᎰᏩ. ᎰᏩᏍ? | Howa. Howas? (DER) | Okay. Is it Okay? | 9 |
| 10 | ᏌᏊ. ᏌᏊᏍ? | Sagwu. Sagwus? (DER) | One. Is it one? | 9 |
| 11 | ᏩᏯ ᎤᏲᎢ. | Wahya uyoi. | The wolf is bad. | 9 |
| 12 | Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ. | Tla wahya uyoi yigi. | The wolf isn't bad. | 9 |
| 13 | ᎥᏝ, Ꮭ ᏩᏯ ᎠᏂ ᏱᎩ. | Vtla, tla wahya ahni yigi. | No, the wolf isn't here. | 9 |
| 14 | ᎣᏏᏲ ᎠᏂᏥᏍᏚ, ᏙᎯᏧ? | Osiyo anitsisdu, tohitsu? | Hello "the rabbit people", things are well, right? | 10 |
| 15 | ᏙᎯᏊ. ᏛᎬᎪᎯᏍᎪ? | Tohigwu. Dvgvgohisgo? (DER) | Things are just fine. Will I see you again later? | 10 |
| 16 | ᎥᎥ, ᏛᏍᎩᎪᎯ. | Vv, dvsgigohi. | Yes, you will see me again later. | 10 |
| 17 | ᎦᏙ ᎠᏛᏁᎭ? | Gado advneha? | What is he doing? | 11 |
| 18 | ᎦᏙ ᎠᎾᏛᏁᎭ? | Gado anadvneha? | What are they doing? | 11 |
| 19 | ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ. | Agehyutsa nvya agowhtiha. | The girl is seeing the rock. | 11 |
| 20 | ᏕᏫᏗ ᏥᏍᏚ ᎠᎴ Ꮎ ᎠᏂᏦᎢ ᏲᎾ! | Dewidi tsisdu ale na anitsoi yona! | David Rabbit and Those Three Bears! | 13 |
| 21 | ᎣᏏᏲ, ᏕᏫᏗ ᏥᏍᏚ ᏓᏆᏙᎠ. | Osiyo, dewidi tsisdu dagwadoa. | Hello, I'm called David Rabbit. | 13 |
| 22 | ᎦᏙ ᏕᏣᏙᎠ? | Gado detsadoa? | What are you called? | 13 |
| 23 | ᏂᎯ ᎠᎴ ᎠᏴ! ᏂᎯ ᎠᏂ ᎣᏍᏓ. | Nihi ale ayv! Nihi ahni osda. | You and me! You (being) here is good. | 13 |
| 24 | Ꮎ ᎤᏲᎢ ᏐᏈᎵ! ᏙᎯᏍ? | Na uyoi sogwili! Tohis? (DER) | That bad horse! Are things well? | 13 |
| 25 | ᎦᎪ? ᎦᏙ ᏚᏙᎠ? | Gago? Gado dudoa? | Who? What's he called? | 13 |
| 26 | ᎯᎠ ᏕᏫᏗ ᏥᏍᏚ. | Hia dewidi tsisdu. | This is David Rabbit. | 13 |
| 27 | ᎦᏙ ᎤᏍᏗ ᎤᏁᎦ? | Gado usdi unega? | Which is white? | 14 |
| 28 | ᎯᎠ ᎬᎿᎨ ᎩᏟ. | Hia gvhnage gihli. | This is a black dog. | 15 |
| 29 | ᎯᎠ ᏧᏁᎦ ᏪᏌ. | Hia tsunega wesa. | These are white cats. | 15 |
| 30 | ᎣᏍᏓ ᎠᏴᏫ ᎯᎪᏩᏘᎭ. | Osda ayvwi higowhtiha. | You see a good person. | 16 |
| 31 | ᎠᏴᏫᏯᎢ ᎣᏍᏓ ᎠᎭᏫ ᎠᎪᏩᏘᎭ. | Ayvwiyai osda ahawi agowhtiha. | The Native American sees a good deer. | 16 |
| 32 | ᎯᎠ ᎠᏴᏫ ᎣᏍᏓ ᎢᎩ. | Hia ayvwi osda igi. | This person is good. | 20 |
| 33 | ᎯᎠ Ꮭ ᎠᎩᎵᏏ ᏱᎩ. | Hia tla agilisi yigi. | This is not an English person. | 20 |
| 34 | ᎠᏍᎦᏯᏍᎪ ᏥᎪᏩᏘᎭ? | Asgayasgo tsigowhtiha? (DER) | Do I see a man? | 18-20 |

Not usable (6): ᏔᎵᏍᎪ ᏌᏊ. (unknown: «ᏔᎵᏍᎪ»); ᎠᏧᏣ ᏐᏈᎵ ᎠᎪᏩᏘᎭ ᎠᎴ ᏐᏈᎵ ᎠᏧᏣ ᎠᎪᏘᎭ. (unknown: «ᎠᎪᏘᎭ»); Ꭳ! ᎣᏍᏓ! (unknown: «Ꭳ»); Ꭳ, ᎣᏏᏲ ᎠᎨᏳᏣ. ᏙᎯᏧ? (unknown: «Ꭳ»); ᏗᎩᎦᎨ ᏗᎪᏪᎵ ᏕᏥ̣ᎪᏩᏘᎭ. (unknown: «ᏗᎩᎦᎨ»); ᎤᏲ ᏥᏍᏚ ᏥᎪᏩᏘᎭ. (unknown: «ᎤᏲ»).

## 9. Decks

**18 decks in 5 groups, 325 verified cards** (12–25 per deck; validator range 12–30). Card shape: `target | pron | meaning | note`.
- `target`: the syllabary, uppercase; sentences with spaces between words and `. , ? !`. **Every target must generate without a throw.**
- `pron`: generated (§6); for the sign cards of the four syllabary decks, `signValue` (§6.2). Never typed.
- `meaning`: short American English, from Joyner's gloss. Where Joyner's spelling has two meanings (ᎠᏆᏚᎵᎭ), give the one the deck teaches and name the other in the note.
- `note`: one English line, or empty; the place for Joyner's detailed string when the point is tone or length (copied from `lexicon.txt`).
- Within a deck no two cards share a meaning (validator): "deer" (ᎠᎭᏫ) and "deer, short form" (ᎠᏫ) if both are used.
- `Origin` in the samples: `sign` (a sign card), `word` (a lexicon line), `sent` (a Joyner sentence copied whole).

**Groups, in order:**

| Group | Decks |
|---|---|
| The syllabary | Syllabary: vowels, g/k and h · Syllabary: l, m, n and gw · Syllabary: s, d/t and dl/tl · Syllabary: ts, w and y |
| First steps | Greetings · First words · Names and introductions · Pronouns, questions and places |
| Numbers | Numbers 1 to 10 · Numbers to 100 |
| People, animals and things | People · Animals and things · Colours |
| Verbs as whole words | Seeing (Set A) · Wanting (Set B) · Having: solid and alive · Not, is and was · Traps for English speakers |

**Script decks work as ordinary decks** (no letter-drill machine needed): one card per sign, `target` the sign, `pron` its value, `meaning` "the sign for …", `note` a lexicon word that uses it (from the lexicon only; the 12 signs no word uses get a note on their row instead). Ᏽ is not a card (archaic).

**The verified pool per deck** (every target generates; writers choose from these and may add Joyner sentences from §8):

| Deck | Verified cards | Pool (targets; every one generates) |
|---|---|---|
| Syllabary: vowels, g/k and h | 19 | Ꭰ · Ꭱ · Ꭲ · Ꭳ · Ꭴ · Ꭵ · Ꭶ · Ꭷ · Ꭸ · Ꭹ · Ꭺ · Ꭻ · Ꭼ · Ꭽ · Ꭾ · Ꭿ · Ꮀ · Ꮁ · Ꮂ |
| Syllabary: l, m, n and gw | 25 | Ꮃ · Ꮄ · Ꮅ · Ꮆ · Ꮇ · Ꮈ · Ꮉ · Ꮊ · Ꮋ · Ꮌ · Ꮍ · Ꮎ · Ꮏ · Ꮐ · Ꮑ · Ꮒ · Ꮓ · Ꮔ · Ꮕ · Ꮖ · Ꮗ · Ꮘ · Ꮙ · Ꮚ · Ꮛ |
| Syllabary: s, d/t and dl/tl | 23 | Ꮜ · Ꮝ · Ꮞ · Ꮟ · Ꮠ · Ꮡ · Ꮢ · Ꮣ · Ꮤ · Ꮥ · Ꮦ · Ꮧ · Ꮨ · Ꮩ · Ꮪ · Ꮫ · Ꮬ · Ꮭ · Ꮮ · Ꮯ · Ꮰ · Ꮱ · Ꮲ |
| Syllabary: ts, w and y | 18 | Ꮳ · Ꮴ · Ꮵ · Ꮶ · Ꮷ · Ꮸ · Ꮹ · Ꮺ · Ꮻ · Ꮼ · Ꮽ · Ꮾ · Ꮿ · Ᏸ · Ᏹ · Ᏺ · Ᏻ · Ᏼ |
| Greetings | 17 | ᎣᏏᏲ · ᏏᏲ · ᏙᎯᏧ? · ᎣᏏᏧ? · ᏙᎯᏊ · ᏙᎯ · ᏩᏙ · ᏛᎬᎪᎯ · ᏛᏍᎩᎪᎯ · ᏛᏍᏛᎪᎯ · ᏛᎢᏨᎪᎯ · ᏙᎾᏓᎪᎲᎢ · ᏙᏓᏓᎪᎲᎢ · ᎢᎮᏙᎸᎢ · Ꭷ · ᏙᎯᏊ. ᏛᎬᎪᎯᏍᎪ? · ᎥᎥ, ᏛᏍᎩᎪᎯ. |
| First words | 18 | ᎥᎥ · ᎥᏝ · Ꮭ · ᎰᏩ · ᎣᏍᏓ · ᎤᏲᎢ · ᎥᏍᎩᎩ? · Ꮒ! · ᎠᏲ! · ᏄᎳ · ᎠᎴ · ᏃᎴ · ᎠᏎᏃ · Ꮟ · ᏣᎳᎩ · ᏲᏁᎦ · ᎩᎵᏏ · ᏗᏣᎳᎩ |
| Names and introductions | 18 | ᏓᏆᏙᎠ · ᏕᏣᏙᎠ · ᏚᏙᎠ · ᏚᎾᏙᎠ · ᏙᎩᎾᏙᎠ · ᏙᎦᏙᎠ · ᏕᏍᏓᏙᎠ · ᎦᏙ ᏕᏣᏙᎠ? · ᎦᏙ ᏚᏙᎠ? · ᎣᏏᏲ, ᏕᏫᏗ ᏥᏍᏚ ᏓᏆᏙᎠ. · ᎺᎵ · ᏣᏂ · ᏕᏫᏗ · ᏙᎹᏏ · ᏑᏌᏃ · ᎵᏂᏓ · ᎹᎦᎵ · ᏣᎵ |
| Pronouns, questions and places | 17 | ᎠᏴ · ᏂᎯ · ᎯᎠ · ᎥᏍᎩᎾ · Ꮎ · ᎦᏙ · ᎦᎪ? · ᎦᏙ ᎤᏍᏗ? · ᎦᏙ ᎠᏛᏁᎭ? · ᎦᏙ ᎠᎾᏛᏁᎭ? · ᎪᎱᏍᏗ · ᎠᏂ · ᎤᎿ · ᎾᎥ · ᎢᎾ · ᎰᏩᏍ? · ᎯᎠ ᏕᏫᏗ ᏥᏍᏚ. |
| Numbers 1 to 10 | 16 | ᏃᏘ · ᏌᏊ · ᏔᎵ · ᏦᎢ · ᏅᎩ · ᎯᏍᎩ · ᏑᏓᎵ · ᎦᎵᏉᎩ · ᏣᏁᎳ · ᏐᏁᎳ · ᏍᎪᎯ · ᎧᏂᎩᏓ · ᎯᎳ ᎢᎦ? · ᎯᎳ ᎢᏯᏂ? · ᎠᏂᏔᎵ · ᎠᏂᏦᎢ |
| Numbers to 100 | 18 | ᏌᏚ · ᏔᎵᏚ · ᏦᎦᏚ · ᏂᎦᏚ · ᏍᎩᎦᏚ · ᏓᎳᏚ · ᎦᎵᏆᏚ · ᏁᎳᏚ · ᏐᏁᎳᏚ · ᏔᎵᏍᎪᎯ · ᏦᏍᎪᎯ · ᏅᎩᏍᎪᎯ · ᎯᎩᏍᎪᎯ · ᏑᏓᎵᏍᎪᎯ · ᎦᎵᏆᏍᎪᎯ · ᏁᎳᏍᎪᎯ · ᏐᏁᎳᏍᎪᎯ · ᏍᎪᎯᏥᏆ |
| People | 17 | ᎠᎨᏯ · ᎠᏂᎨᏯ · ᎠᏍᎦᏯ · ᎠᏂᏍᎦᏯ · ᎠᎨᏳᏣ · ᎠᏂᎨᏳᏣ · ᎠᏧᏣ · ᎠᏂᏧᏣ · ᏴᏫ · ᎠᏂᏴᏫ · ᎠᏣᎳᎩ · ᎠᏂᏣᎳᎩ · ᎠᎩᎵᏏ · ᎠᏂᎩᎵᏏ · ᎠᏲᏁᎦ · ᎠᏴᏫᏯᎢ · ᎠᏂᏴᏫᏯᎢ |
| Animals and things | 23 | ᎩᏟ · ᏪᏌ · ᎠᎭᏫ · ᏙᏯ · ᏥᏍᏚ · ᏩᎭᏯ · ᏌᎶᎵ · ᏐᏈᎵ · ᏲᎾ · ᎠᏂᏥᏍᏚ · ᎠᏂᏩᎭᏯ · ᏅᏯ · ᏡᎬᎢ · ᏕᏡᎬᎢ · ᎫᎴ · ᏄᎾ · ᏚᏯ · ᎪᏪᎵ · ᏗᎪᏪᎵ · ᎦᏍᎩᎶ · ᏗᎦᏍᎩᎶ · ᏌᏛᏗ · ᎦᏍᎩᎸᎢ |
| Colours | 21 | ᎤᏁᎦ · ᎩᎦᎨᎢ · ᎬᎿᎨᎢ · ᏌᎪᏂᎨᎢ · ᏓᎶᏂᎨᎢ · ᏓᎭᎵᎨᎢ · ᎤᏬᏗᎨᎢ · ᎢᏤᎢ · ᎢᏤᎢᏳᏍᏗ · ᎤᏍᎪᎸᎢ · ᎩᎦᎨ ᎤᏍᎪᎸᎢ · ᎬᎿᎨ ᎤᏍᎪᎸᎢ · ᏓᎶᏂᎨ ᎤᏍᎪᎸᎢ · ᎠᎩᎦᎨᎢ · ᎠᏂᎩᎦᎨᎢ · ᏗᎩᎦᎨᎢ · ᏧᏁᎦ · ᎤᎵᏑᏫᏓ · ᎯᎠ ᎬᎿᎨ ᎩᏟ. · ᎯᎠ ᏧᏁᎦ ᏪᏌ. · ᎦᏙ ᎤᏍᏗ ᎤᏁᎦ? |
| Seeing (Set A) | 15 | ᎠᎪᏩᏘᎭ · ᎠᏂᎪᏩᏘᎭ · ᏓᎪᏩᏘᎭ · ᏓᏂᎪᏩᏘᎭ · ᏥᎪᏩᏘᎭ · ᎯᎪᏩᏘᎭ · ᎦᏥᎪᏩᏘᎭ · ᏕᏥᎪᏩᏘᎭ · ᎦᎯᎪᏩᏘᎭ · ᏕᎯᎪᏩᏘᎭ · ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ. · ᎠᏴᏊ ᎩᏟ ᏥᎪᏩᏘᎭ. · ᎠᏂᎨᏯ ᎩᏟᏊ ᏓᏂᎪᏩᏘᎭ. · ᎣᏍᏓ ᎠᏴᏫ ᎯᎪᏩᏘᎭ. · ᎠᏂᏍᎦᏯᏍ ᎠᏂᎪᏩᏘᎭ? |
| Wanting (Set B) | 12 | ᎠᏆᏚᎵᎭ · ᏣᏚᎵᎭ · ᎤᏚᎵᎭ · ᎤᎾᏚᎵᎭ · ᏓᏆᏚᎵᎭ · ᏕᏣᏚᎵᎭ · ᏚᏚᎵᎭ · ᏚᎾᏚᎵᎭ · ᏥᏯᏚᎵᎭ · ᎯᏯᏚᎵᎭ · ᎦᏥᏯᏚᎵᎭ · ᎦᎯᏯᏚᎵᎭ |
| Having: solid and alive | 16 | ᎤᎭ · ᎤᏂᎭ · ᎠᎩᎭ · ᏣᎭ · ᎤᏩᎧᎭ · ᎤᏂᎧᎭ · ᎠᎩᎧᎭ · ᏣᎧᎭ · ᏚᎭ · ᏚᏂᎭ · ᏓᎩᎭ · ᏕᏣᎭ · ᏚᏩᎧᎭ · ᏚᏂᎧᎭ · ᏓᎩᎧᎭ · ᏕᏣᎧᎭ |
| Not, is and was | 19 | ᎢᎩ · ᎢᎦ · ᎨᏐᎢ · ᎨᏒᎢ · ᎨᏒᎩ · ᎨᏎᎢ · ᎨᎲᎩ · ᎨᎮᎢ · ᎨᏎᏍᏗ · Ꮭ ᏱᎩ · Ꮭ ᏱᎨᏐᎢ · Ꮭ ᏳᎭ · Ꮭ ᏯᎩᎭ · Ꮭ ᏱᏣᎭ · Ꮭ ᏯᎩᎧᎭ · Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ. · ᎯᎠ ᎠᏴᏫ ᎣᏍᏓ ᎢᎩ. · ᎯᎠ Ꮭ ᎠᎩᎵᏏ ᏱᎩ. · ᏩᏯ ᎤᏲᎢ. |
| Traps for English speakers | 13 | ᎠᏂᎨᏯ · ᏓᎪᏩᏘᎭ · Ꮭ ᏯᎩᎭ · ᎤᏂᎧᎭ · ᎰᏩᏍ? · ᎦᏥᎪᏩᏘᎭᏍᎪ? · ᎠᏂᎨᏯᏧ ᏩᏯ ᎠᏂᎪᏩᏘᎭ? · ᎯᎳ ᎢᏯᏂ? · ᎢᏤᎢ · ᏕᏥᎪᏩᏘᎭ · ᎠᏃᏍᏓ · ᎤᏂᏲᎢ · ᏛᏍᏛᎪᎯ |

**Five sample cards per deck** (all `pron` values generated by `respell.js` or `signValue` and checked against `pronPattern`):

**1. Syllabary: vowels, g/k and h** (The syllabary). The six vowel signs and the g / k and h rows, one card per sign (19 cards). Lessons: `sounds`, `syllabary-1`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| Ꭰ | a | the sign for a | A vowel on its own. Not the Latin letter D: the shapes have their own values. | sign |
| Ꭵ | v | the sign for v (nasal vowel) | v is a vowel said through the nose; Joyner: "always nasalized". | sign |
| Ꭶ | ga | the sign for ga (also ka) | The g-row sign also writes k in many words. | sign |
| Ꭷ | ka | the sign for ka | The only sign written with k. | sign |
| Ꭿ | hi | the sign for hi | ᎯᎠ (this one) starts with it. | sign |

**2. Syllabary: l, m, n and gw** (The syllabary). The l, m, n (with Ꮏ hna, Ꮐ nah) and gw rows, one card per sign (25 cards). Lessons: `syllabary-2`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| Ꮃ | la | the sign for la | ᏣᎳᎩ tsalagi has it in the middle. | sign |
| Ꮏ | hna | the sign for hna | One of the two signs that write an h (Joyner p8). | sign |
| Ꮐ | nah | the sign for nah | The other sign with an h. | sign |
| Ꮖ | gwa | the sign for gwa | The gw row: Unicode names it QUA; the course writes gw, as Joyner does. | sign |
| Ꮒ | ni | the sign for ni | Alone it is also a word: Ꮒ! "Look at that!" | sign |

**3. Syllabary: s, d/t and dl/tl** (The syllabary). The s row with lone Ꮝ, the d / t row and the dl / tl row, one card per sign (23 cards). Lessons: `syllabary-3`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| Ꮝ | s | the sign for s (no vowel) | The only sign with no vowel: ᏍᎪᎯ sgohi (ten). | sign |
| Ꮣ | da | the sign for da | The d-row signs often sound as t: ᏙᎯᏧ is tohitsu. | sign |
| Ꮤ | ta | the sign for ta | ᏔᎵ tali (two) starts with it. | sign |
| Ꮩ | do | the sign for do | In ᏙᎯᏧ it is said to. | sign |
| Ꮭ | tla | the sign for tla | Alone it is also a word: Ꮭ "no, not". Joyner also prints it hla. | sign |

**4. Syllabary: ts, w and y** (The syllabary). The ts, w and y rows, one card per sign (18 cards); Ᏽ mv is archaic and left out. Lessons: `syllabary-4`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| Ꮳ | tsa | the sign for tsa | Joyner writes this row j (jạ²lạ²gi); the course writes ts: ᏣᎳᎩ tsalagi. | sign |
| Ꮷ | tsu | the sign for tsu | Ends ᏙᎯᏧ tohitsu. | sign |
| Ꮹ | wa | the sign for wa | Starts ᏩᏙ wado (thanks). | sign |
| Ᏺ | yo | the sign for yo | Ends ᎣᏏᏲ osiyo (hello). | sign |
| Ᏼ | yv | the sign for yv | ᏴᏫ yvwi (a person) starts with it. | sign |

**5. Greetings** (First steps). Hello, how are you, I'm fine, thanks, and "I will see you again". Lessons: `greetings`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎣᏏᏲ | osiyo | hello | Also ᏏᏲ. DAILP: more literally "it is good". | word |
| ᏙᎯᏧ? | Tohitsu? | how are you? (things are well, right?) | Joyner: "It is well, isn't it?". ᏙᎯ = peaceful, well in health. | word |
| ᏙᎯᏊ | tohigwu | I'm fine (things are just well) | The answer to ᏙᎯᏧ? | word |
| ᏩᏙ | wado | thanks |  | word |
| ᏛᎬᎪᎯ | dvgvgohi | I will see you again (to one person) | Used as "goodbye"; to two or more people the verb changes (ᏛᏍᏛᎪᎯ, ᏛᎢᏨᎪᎯ). | word |

**6. First words** (First steps). Yes, no, okay, good and bad, and, but, Cherokee and English. Lessons: `first-words`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎥᎥ | vv | yes | Two v signs: the nasal vowel twice. | word |
| ᎥᏝ | vtla | no | Also just Ꮭ. | word |
| ᎰᏩ | howa | okay; alright; sure |  | word |
| ᎣᏍᏓ | osda | good; well | The opposite is ᎤᏲᎢ (bad). | word |
| ᏣᎳᎩ | tsalagi | Cherokee | The language; ᎠᏣᎳᎩ is a Cherokee person. | word |

**7. Names and introductions** (First steps). "… is what I am called", "what are you called?", and Cherokee forms of English names. Lessons: `name`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᏓᏆᏙᎠ | dagwadoa | … is what I am called | The name comes first: ᏕᏫᏗ ᏥᏍᏚ ᏓᏆᏙᎠ. | word |
| ᎦᏙ ᏕᏣᏙᎠ? | Gado detsadoa? | What are you called? | ᎦᏙ (what) + ᏕᏣᏙᎠ (you are called). | sent |
| ᏚᏙᎠ | dudoa | … is what he / she is called |  | word |
| ᎺᎵ | meli | Mary | Joyner's Cherokee form of the name. | word |
| ᎣᏏᏲ, ᏕᏫᏗ ᏥᏍᏚ ᏓᏆᏙᎠ. | Osiyo, dewidi tsisdu dagwadoa. | Hello, I'm called David Rabbit. | From Joyner's comic (lesson 13). | sent |

**8. Pronouns, questions and places** (First steps). I, you, this one, that one; what, who, which, how many; here, there, near, far. Lessons: `pronouns`, `questions`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎠᏴ | ayv | I; we | Joyner: "I. We." Used for emphasis; the verb already shows the person. | word |
| ᏂᎯ | nihi | you (one, two or all) | One word for any number of people. | word |
| ᎯᎠ | hia | this one; he / she (within reach) | ᎥᏍᎩᎾ is the one out of reach. | word |
| ᎦᎪ? | Gago? | who? |  | word |
| ᎤᎿ | uhna | there | ᎠᏂ is here. | word |

**9. Numbers 1 to 10** (Numbers). Zero to ten, "how many?" for things and for living beings, two and three for people. Lessons: `numbers`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᏌᏊ | sagwu | one |  | word |
| ᏔᎵ | tali | two | For people and animals: ᎠᏂᏔᎵ. | word |
| ᏅᎩ | nvhgi | four | Said nvhgi: an h the syllabary does not write. | word |
| ᏍᎪᎯ | sgohi | ten | Starts with Ꮝ, the s with no vowel. | word |
| ᎯᎳ ᎢᏯᏂ? | Hila iyani? | How many? (people, animals) | For things: ᎯᎳ ᎢᎦ? | word |

**10. Numbers to 100** (Numbers). Eleven to nineteen, the tens and a hundred. Lessons: `numbers-big`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᏌᏚ | sadu | eleven |  | word |
| ᏔᎵᏚ | taldu | twelve | Said taldu: the li sign loses its vowel. | word |
| ᏔᎵᏍᎪᎯ | talsgohi | twenty | two + ten: ᏔᎵ + ᏍᎪᎯ. | word |
| ᏦᏍᎪᎯ | tsosgohi | thirty | three + ten; said tsosgohi. | word |
| ᏍᎪᎯᏥᏆ | sgohitsgwa | one hundred |  | word |

**11. People** (People, animals and things). Woman, man, girl, boy, person, Cherokee and English people: one and many. Lessons: `plurals`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎠᎨᏯ | agehya | a woman | Women: ᎠᏂᎨᏯ. | word |
| ᎠᏂᏍᎦᏯ | anisgaya | men | One man: ᎠᏍᎦᏯ. ᎠᏂ- makes the plural for people. | word |
| ᎠᎨᏳᏣ | agehyutsa | a girl |  | word |
| ᎠᏧᏣ | achutsa | a boy | Boys: ᎠᏂᏧᏣ. | word |
| ᎠᏂᏣᎳᎩ | anitsalagi | Cherokee people | One Cherokee person: ᎠᏣᎳᎩ. | word |

**12. Animals and things** (People, animals and things). Dog, cat, deer, wolf, bear, horse, rabbit; rock, tree, potato, beans, paper, table. Lessons: `animals`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎩᏟ | gihli | a dog; dogs | The same word for one and many. | word |
| ᏪᏌ | wesa | a cat; cats |  | word |
| ᏲᎾ | yona | a bear; bears |  | word |
| ᏅᏯ | nvya | a rock; rocks |  | word |
| ᏄᎾ | nuna | a potato; potatoes |  | word |

**13. Colours** (People, animals and things). White, red, black, blue, yellow, purple, brown, green, and the faded mixes. Lessons: `colours`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎤᏁᎦ | unega | white |  | word |
| ᎩᎦᎨᎢ | gigagei | red | Also ᎩᎨᎢ. | word |
| ᏌᎪᏂᎨᎢ | sakonigei | blue |  | word |
| ᎢᏤᎢ | itsei | green (unripe fruit or vegetable) | Joyner: only for fruit and vegetables that are still green; green-coloured is ᎢᏤᎢᏳᏍᏗ. | word |
| ᏗᎩᎦᎨᎢ | digigagei | red (things) | Ꮧ- for several things; ᎠᏂᎩᎦᎨᎢ for animals. | word |

**14. Seeing (Set A)** (Verbs as whole words). One word for "he sees it", "I see him", "you see them": the Set A forms of the verb "see". Lessons: `see-he`, `see-i-you`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎠᎪᏩᏘᎭ | agowhtiha | he sees him / it | One word is the whole sentence. Said agowhtiha. | word |
| ᎠᏂᎪᏩᏘᎭ | anigowhtiha | they see him / it | ᎠᏂ- = they. | word |
| ᏥᎪᏩᏘᎭ | tsigowhtiha | I see him / it | Ꮵ- = I (Set A). | word |
| ᎯᎪᏩᏘᎭ | higowhtiha | you see him / it | Ꭿ- = you (one person). | word |
| ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ. | Agehyutsa nvya agowhtiha. | The girl is seeing the rock. | Who, what, then the verb. | sent |

**15. Wanting (Set B)** (Verbs as whole words). I want it, you want it, he wants it, they want it: the Set B forms of the verb "want". Lessons: `want`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎠᏆᏚᎵᎭ | agwaduliha | I want it | Set B. Joyner prints the same word for "he wants me". | word |
| ᏣᏚᎵᎭ | tsaduliha | you want it | Also "he wants you". | word |
| ᎤᏚᎵᎭ | uduliha | he wants him / it | Ꭴ- for he: that makes it a Set B verb. | word |
| ᎤᎾᏚᎵᎭ | unaduliha | they want him / it |  | word |
| ᏓᏆᏚᎵᎭ | dagwaduliha | I want them (things) | Ꮧ- for several things. | word |

**16. Having: solid and alive** (Verbs as whole words). "Have" for a solid thing (ᎠᎩᎭ) and for a living one (ᎠᎩᎧᎭ), with "have them". Lessons: `have`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎠᎩᎭ | agiha | I have it (something solid) | Joyner's label: something solid. | word |
| ᎠᎩᎧᎭ | agikaha | I have it (something alive) | Joyner's label: something alive. | word |
| ᏣᎭ | tsaha | you have it (solid) |  | word |
| ᎤᏩᎧᎭ | uwakaha | he has it (alive) |  | word |
| ᏓᎩᎭ | dagiha | I have them (solid) |  | word |

**17. Not, is and was** (Verbs as whole words). Is now, is usually, was (seen or told), will be, and isn't. Lessons: `copula`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎢᎩ | igi | is (now; just now was) |  | word |
| ᎨᏐᎢ | gesoi | is (usually) |  | word |
| ᎨᏒᎩ | gesvgi | was (I know it myself) | Personal knowledge. | word |
| ᎨᏎᎢ | gesei | was (I was told) | Second-hand: someone told you. | word |
| Ꮭ ᏩᏯ ᎤᏲᎢ ᏱᎩ. | Tla wahya uyoi yigi. | The wolf isn't bad. | Ꮭ before, ᏱᎩ at the end. | sent |

**18. Traps for English speakers** (Verbs as whole words). The prefix that shows how many and what kind, solid against alive, Ꮭ with Ᏹ-, and the question endings. Lessons: `negation`.

| Cherokee | `pron` (generated) | Meaning | Note | Origin |
|---|---|---|---|---|
| ᎠᏂᎨᏯ | anigehya | women | Not *ᎠᎨᏯ for many: people take ᎠᏂ-. | word |
| ᏓᎪᏩᏘᎭ | dagowhtiha | he sees them | Not ᎠᎪᏩᏘᎭ (him / it): the prefix shows "them". | word |
| Ꮭ ᏯᎩᎭ | tla yagiha | I don't have it (solid) | Ꮭ and Ᏹ- together: Ᏹ- + ᎠᎩᎭ = ᏯᎩᎭ. | word |
| ᎤᏂᎧᎭ | unikaha | they have it (alive) | Not ᎤᏂᎭ (solid). | word |
| ᎰᏩᏍ? | Howas? | Is it okay? | -Ꮝ asks the question; no rising pitch alone. | sent |

**Localisation** (examples, dialogues, practice):
- **People:** Joyner's Cherokee name forms only (§2.3): ᎺᎵ, ᏣᏂ, ᏕᏫᏗ, ᏙᎹᏏ, ᏑᏌᏃ, ᎵᏂᏓ, ᎹᎦᎵ, ᎹᎦᏰᏘ, ᏆᏆᎠ, ᏣᎵ, ᎡᏂᏙᏂ, ᎠᎵᏌᏇᏘ; and his comic's ᏕᏫᏗ ᏥᏍᏚ (David Rabbit) with Ꮎ ᎠᏂᏦᎢ ᏲᎾ (those three bears). The learner speaks as the "I" of the verb. No celebrities; no other names in Cherokee strings.
- **Places:** none in Cherokee (no place name was verified). Oklahoma, Tahlequah, North Carolina appear in English only.
- **Animals and things:** dog, cat, deer, wolf, beaver, rabbit, squirrel, horse, bear; rock, tree, acorn, potato, beans, paper, table / chair, trap.
- **Money, food, time:** none (cut topics).
- **Greetings in `profile.json`** (`greet`; the app shows one by time of day, but **no time-of-day greeting was verified**, so all four are plain greetings): late night ᏛᎬᎪᎯ "I will see you again"; morning ᎣᏏᏲ "Hello"; afternoon ᏙᎯᏧ? "How are you? (Things are well, right?)"; evening ᏏᏲ "Hello".

## 10. Typing and script

### 10.1 The script stage (works with ordinary lessons and decks)

Stage 1 is seven lessons and four sign decks plus two word decks, all ordinary; nothing depends on the Korean letter-drill machine.

| Lesson | Deck | What the learner can do after it |
|---|---|---|
| `sounds` | Syllabary: vowels, g/k and h | read the romanised line roughly right; knows v, g / k, d / t, the unwritten h, and what the line and the signs leave out |
| `syllabary-1` … `syllabary-4` | the four sign decks | name the syllable of each of the 85 signs; read a lexicon word sign by sign and then say it from the line |
| `greetings`, `first-words` | Greetings, First words | greet, thank, part, say yes / no / okay, reading the syllabary with the line |

- **Goal:** all 85 signs recognised by the end of stage 1, and reading (not writing) the course's ~300 words in the syllabary by the end. No handwriting, no stroke order [inference: the Cherokee Nation's "How To Write The Syllabary" poster exists, but was not opened].
- **Order of signs:** by consonant row, as the roadmap has it (vowels, g / k, h; l, m, n, gw; s, d / t, dl / tl; ts, w, y). The row grouping is the roadmap author's, and matches the Unicode order (U+13A0 …).
- With no voice, every drill is visual: sign → syllable, syllable → sign, signs → word. If the letter-drill machine is generalised (request 9), the sign decks can gain "tap the sign for *gwa*" drills, with no audio.

### 10.2 Typed answers: what they are

**Default: word tiles** (`tilesDefault: true`). Few learners have a Cherokee keyboard at the start [inference; the Cherokee Nation's keyboard page shows that Android needs a download and iOS a setting]. `a[0]` is written with spaces between tiles (§10.4).

**Typing is optional**, in two ways:
- **The syllabary**, with a Cherokee keyboard (Windows 10 has one built in; macOS has the Cherokee Nation layout; iOS / iPadOS has one to activate; Android and Chromebook need a download or Google Input Tools [source: Cherokee Nation keyboards page]).
- **The romanised line on an English keyboard.** `pronAnswers: true` makes `gen.js` add the generated romanisation of every syllabary answer of `fill` and `type` items; `pronAnswersKeepSpaces` keeps word breaks. The deck typing quiz accepts the card's pron (`romaAlmost: true`, but see request 2).

### 10.3 What the matcher must do (the `chr` rules)

Tested prototype: scratch `chrP/match.js`, 46 of 46 cases.

1. **Syllabary answers:** NFC; **lowercase syllabary (U+AB70–U+ABBF, U+13F8–U+13FD) folded to uppercase**; U+0323 removed; **spaces, hyphens and punctuation do not count** (inside a word and between words: the tiles have spaces, keyboards may not). Any other difference is wrong (a wrong sign is another syllable, often another person: ᏓᏆᏙᎠ / ᏕᏣᏙᎠ).
2. **Romanised answers, exact ("right"):** case, spaces, hyphens and punctuation do not count; Joyner's tone digits (¹²³⁴ or 1–4), underdots and ɂ are ignored, so a learner may type the detailed form; **j = ts** (Joyner's and Feeling's spelling); **qu = kw = gw** (DAILP writes *tohiquu*); **tl = dl = hl** (Joyner prints both; the key writes hl).
3. **"Almost":** the letters are right except for **g / k**, **d / t**, **ts / ch**, or **a missing or extra h before a consonant or at the end, except at the start of a word** (the unwritten h: *nvgi* for *nvhgi*, *agowtiha* for *agowhtiha*, *galgwogi* for *gahlgwogi*; but *la* for *tla* is wrong: la is the sign Ꮃ). These are the alternations the sources describe (Joyner p5, p8); the course spelling follows the source word, but writing the other one is a spelling slip, not a wrong word.
4. **Wrong:** a different vowel (including *a* or *uh* for v), a missing or extra vowel (*agowatiha*), an h before a vowel dropped (*sgoi* for *sgohi*: Ꭿ is a whole syllable), a different person prefix, half an answer.
5. **A syllabary answer typed against a romanised answer, or the reverse,** is not the matcher's job: it works through the generated pron in the answer list (`pronAnswers`).

**Test table** (expected results; the prototype gives all of them):

| Typed | Answer | Result | What it shows |
|---|---|---|---|
| `ᎣᏏᏲ` | `ᎣᏏᏲ` | right | exact |
| `ꭳꮟᏺ` | `ᎣᏏᏲ` | right | lowercase syllabary folds to uppercase |
| `Ꭳ Ꮟ Ᏺ` | `ᎣᏏᏲ` | right | spaces inside a word ignored |
| `ᎠᎨᏳᏣᏅᏯᎠᎪᏩᏘᎭ` | `ᎠᎨᏳᏣ ᏅᏯ ᎠᎪᏩᏘᎭ.` | right | spaces between words and punctuation ignored |
| `Ꮵ̣ᎪᏩᏘᎭ` | `ᏥᎪᏩᏘᎭ` | right | Joyner's dot under a sign ignored |
| `ᎣᏏᏳ` | `ᎣᏏᏲ` | wrong | one wrong sign |
| `ᏓᏆᏙᎠ` | `ᏕᏣᏙᎠ` | wrong | other person (I / you) |
| `osiyo` | `osiyo` | right | exact romanisation |
| `Osiyo!` | `osiyo` | right | case and punctuation |
| `o-si-yo` | `osiyo` | right | hyphens inside a word |
| `o si yo` | `osiyo` | right | spaces inside a word |
| `o²sị³yo` | `osiyo` | right | Joyner's tone digits and underdot typed |
| `o2si3yo` | `osiyo` | right | ASCII tone digits |
| `jalagi` | `tsalagi` | right | j = ts |
| `tsalagi` | `tsalagi` | right | exact |
| `chalagi` | `tsalagi` | almost | ch for ts |
| `dohitsu` | `tohitsu` | almost | d for t (the d-row sign Ꮩ) |
| `tohiju` | `tohitsu` | right | j for ts |
| `tohigwu` | `tohigwu` | right | exact |
| `tohiquu` | `tohigwu` | right | qu = gw (DAILP's spelling; Unicode names Ꮚ QUU) |
| `tohiqu` | `tohigwu` | wrong | vowel u missing |
| `tohikwu` | `tohigwu` | right | kw = gw |
| `kago` | `gago` | almost | k for g |
| `gado` | `gado` | right | exact |
| `gato` | `gado` | almost | t for d |
| `agowtiha` | `agowhtiha` | almost | the unwritten h left out |
| `agowatiha` | `agowhtiha` | wrong | a letter-by-letter vowel added |
| `nvgi` | `nvhgi` | almost | h left out |
| `nagi` | `nvhgi` | wrong | a for the nasal v |
| `tla` | `tla` | right | exact |
| `hla` | `tla` | right | hl = tl |
| `dla` | `tla` | right | dl = tl |
| `gitli` | `gihli` | right | tl = hl |
| `galgwogi` | `gahlgwogi` | almost | unwritten h before l left out |
| `la` | `tla` | wrong | la is the sign Ꮃ, not Ꮭ |
| `vv` | `vv` | right | exact |
| `uhuh` | `vv` | wrong | v must be typed as v |
| `wado` | `wado` | right | exact |
| `wato` | `wado` | almost | t for d |
| `wada` | `wado` | wrong | wrong vowel |
| `sgohi` | `sgohi` | right | exact |
| `skohi` | `sgohi` | almost | k for g |
| `sgoi` | `sgohi` | wrong | the syllable hi lost its h: not almost |
| `tsigowhtiha` | `tsigowhtiha` | right | exact |
| `higowhtiha` | `tsigowhtiha` | wrong | other person prefix |
| `ᏣᎳᎩ` | `tsalagi` | wrong | syllabary against a romanised answer: needs `pronAnswers`, not the matcher |

**What the engine has today** (read in `src/app.html`) and what `chr` needs:
- Built for other courses: per-course key functions in `accSame` (`isNan()?nanKey…`, `isYue()?yueNorm…`) and slip functions in `pracMatch`'s almost block and the deck-quiz chain (`nanSlip`, `yueSlip`); `voiceMatch` in `pickVoice`; `tilesDefault`; `pronAnswers*` in `gen.js`; `romaAlmost`; `accLoose()`.
- **Needed:** `isChr()`, `chrKey` (rules 1–2) in `accSame`, and `chrSlip` (rule 3) in `pracMatch`'s almost block and in the deck-quiz chain, **before** the generic `COURSE.romaAlmost` → `romaLoose` fallback. **This order matters:** `romaLoose0` folds **w to v**, strips marks, and folds *ee* / *oo*; for Cherokee, where v is a vowel and w a consonant, it would count *vado* for *wado* as "almost" (request 2).
- **`normT`** removes hyphens and quotes, which is harmless for `chr` (the romanised line has no hyphens).
- `accents: true` lets the almost path run; `keys` is empty (no special letters: v and the rest are on every English keyboard).

**`targetScript`:** `[\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF]` (both cases), compiled with `u`. Sign tiles joined with spaces match it, so sign-by-sign `order` items pass today; romanised-only `order` tiles do not, and none are planned (`orderPronOK: false`).

### 10.4 Tiles: segmentation and spacing

- **The author supplies the tiles, one word per tile**, with single spaces, as Cherokee is written (words are separated by spaces [source: r12a]). A whole verb form is one tile (ᏥᎪᏩᏘᎭ); a question ending stays on its word (ᎦᏥᎪᏩᏘᎭᏍᎪ?), as Joyner writes it.
- **Sign tiles** (strand (b)): one sign per tile (Ꭳ Ꮟ Ᏺ). Only for single lexicon words; the answer joined without spaces is the word.
- 2–9 tiles in `order` items; at most 9 words in a `type` answer.
- Distractor tiles: a wrong-prefix form of a tile word (strand (a)), or a same-row sign (strand (b)). Never a word or sign of the answer.

### 10.5 Punctuation

- ASCII in Cherokee strings: `. , ? !` attached to the word before, as r12a describes and Joyner prints. No full stops inside a card target that is a single word, except where Joyner prints `!` or `?` (ᎠᏲ!, ᏙᎯᏧ?).

### 10.6 Fonts and line height (request 1 for the lead)

- **What ships** [source]: Windows 8, 8.1, 10 and 11 ship **Gadugi**, which covers Cherokee (Microsoft's font page) and is the default Cherokee font on Windows 10, with lowercase (W3C Cherokee Gap Analysis, 2024); macOS has **Plantagenet Cherokee**, which lacks the lowercase letters, and other fonts with them (W3C); iOS / iPadOS have "a Cherokee font" (Cherokee Nation keyboards page; its name was not verified); **Android is not shown to ship one**: Noto Sans Cherokee is in the Android source tree (`external/noto-fonts/notosanscherokee`), but that does not prove it is on devices.
- **Request 1: bundle Noto Sans Cherokee** in the app: OFL 1.1, "Copyright 2022 The Noto Project Authors", one variable file (weights 100–900), 186 characters in the Cherokee and Cherokee Supplement blocks (Fontsource page). The Cherokee Nation's fonts page lists it as an open-source Google font. The app's CSP allows fonts the app ships itself or Google Fonts (brief), so either the bundled file or the Google Fonts stylesheet works; bundling also works offline.
- **Font stack for Cherokee target text** (cards, tiles, example rows, practice answers), on elements with `lang="chr"`:
  `"Noto Sans Cherokee", "Gadugi", "Plantagenet Cherokee", system-ui, sans-serif`
  Today the card face uses `--display` (Korean fonts first) and the pron line `--mono` (DM Mono): the Cherokee rule must override `--display` for target spans, or Cherokee falls through to whatever the system picks (part of request 1).
- **Romanised line:** ASCII only, so the existing `--mono` works.
- **Size and spacing:** syllabary signs are detailed shapes; card text at least 2× body size, tiles at least 44 px tall, line height at least 1.5 [inference].

### 10.7 What the lead needs to build, in priority order (before writers start: 1–6)

Checked against `src/app.html` (matcher functions, `pickVoice`, `normT`, font variables), `tools/target/validate.js`, and the `en-nan` build list.

| # | Request | Status today | Why | What the course does if it is NOT built |
|---|---|---|---|---|
| 1 | **Bundle Noto Sans Cherokee** (OFL 1.1) and add the Cherokee font stack for `lang="chr"` target text (§10.6). | No Cherokee font rule; card face uses Korean `--display` | Android may show boxes; mixed fonts elsewhere | Learners on Android without a Cherokee font see boxes: **do not release** without it |
| 2 | **Cherokee matcher** (`isChr`, `chrKey` in `accSame`; `chrSlip` in `pracMatch`'s almost block and the deck-quiz chain, before `romaLoose` / `foldAcc`). Spec and 46 tests in §10.3. | Built for `nan`, `yue` and others, not `chr` | Learners type *jalagi*, *hla*, *tohiquu*, lowercase syllabary | **Worse than strict:** with `romaAlmost: true` the generic `romaLoose` folds w to v and counts wrong answers as "almost", while j / qu / hl spellings and lowercase syllabary are wrong. Without request 2, set `romaAlmost: false` and `accents: false`, so typed answers must match exactly (tiles by default keep typing rare) |
| 3 | **No-voice handling:** `voiceMatch: "^chr(-|_|$)"` is set; change the toast to "No Cherokee voice exists yet: read the line under each card." | `voiceMatch` built; generic toast | An English voice must never read Cherokee | Generic toast; silence (correct, less helpful) |
| 4 | **Validator runs `respell` (or `signValue` for single-sign cards in the four syllabary decks) on every card target, example row, dialogue line, tile and `type` answer** and compares with the stored pron; fails on any throw; checks romanisation quoted in English text (`why`, notes) against the generator; checks that every prefix named in a `why` is in the allowed list (§8 notes). The scratch `chrP/guard.js` does this for the profile and can be adapted. | `validate.js` checks `pronPattern` and same-string consistency only | The lexicon is the only source of truth; a typed pron brings memory in | The lead reruns `node tools/target/repron.js chr` after each lexicon change and reviews by hand |
| 5 | **Writers' word gate:** a report of every Cherokee word in the pack that is not in `lexicon.txt` (the generator throws today), and of every line read with a derived suffix (the generator warns). | Throw and warning exist; no summary | Writers must not invent words | Writers run `respell.js` on their strings |
| 6 | **First-language review step** before release: a reviewer from a Cherokee Nation language programme signs off the lexicon, every sentence (especially `comp` lines), every note on sound and meaning, and the cultural notes (§11, item 1). | — | Endangered language; a single learner-made book is the source | **Do not release** |
| 7 | **Validator floor for `chr`:** dialogues 40 → what the sources support (34 Joyner sentences generate, several of them fragments), or accept `comp` dialogue lines under request 6. | Floors are global (40 dialogues, 30 examples, 15 patterns, 230 cards, 14 decks) | 34 Joyner sentences generate; cards (325) and decks (18) pass | Writers compose dialogue lines from lexicon words, all marked `comp` |
| 8 | **Recordings:** ask the Cherokee Nation Language Department about commissioning or licensing recordings of the course's words by first-language speakers; do not use cherokeedictionary.net or *See, Say, Write* audio without written permission (§2.6). | No `chr` in the clip pipeline | The only way to add sound | Text only (designed for it) |
| 9 | **Generalise the letter-drill machine** to syllabary sign drills (sign ↔ syllable, by row). | Korean only | More script practice | Ordinary sign decks |
| 10 | **Romanisation display setting** "always / tap to reveal / off", default always (as `en-nan` request 10). | Partly ("Blur pronunciation hints in Browse") | Readers of the syllabary will want it off | Always shown outside Browse |
| 11 | **Optional: a syllabary key bar** for learners without a Cherokee keyboard (85 signs by row, as an on-screen picker). | Not built | Typing in the syllabary without installing a keyboard | Romanised typing (accepted via `pronAnswers`) |

Checked and **not** needed: three-letter course codes (`lib.js` accepts `[a-z]{2,3}`, as for `nan` and `yue`); `HOLD` keeps the course out of releases; `pronAnswers` with spaces kept.

## 11. Gaps and unverified claims

**No first-language speaker has checked this profile.** Check these first, in this order.

1. **Review by a first-language speaker or a Cherokee Nation language programme before release (request 6).** Cherokee is endangered, and the course rests on one learner-made book (Joyner is not a Cherokee Nation syllabus, as the roadmap notes). The reviewer should see the lexicon, every sentence, the sound descriptions in `sounds` and §6.7, the meanings and notes, and how the course presents the language and the Nation.
2. **The lexicon against the printed sources.** All 306 Joyner lines were read **through a fetch tool that returns the PDF as text and limits verbatim quotation**; the vocabulary lists came back as index lines. The tool flagged one source typo (Ꮯ for C in a gloss), returned ᎠᎪᏘᎭ in one sentence where ᎠᎪᏩᏘᎭ is expected, and placed Joyner's underdots oddly in four forms. The table check guarantees that each line's two scripts agree, not that both are right. **Before writers start, the lead should check `lexicon.txt` against the PDF page by page**, starting with:
   - the **38 dropped-vowel lines** (`node respell.js --check`), where the romanisation does not confirm the sign (§6.3);
   - the glosses the fetch tool may have paraphrased (lessons 8–22 were asked once, and only 28 glosses re-asked verbatim);
   - Ꮭ *tla* against Joyner's later *hla* (§6.1).
3. **Cross-checks that could not be made.** The brief's first sources were **not reachable**: the Cherokee Nation word list (search tool at webapps.cherokee.org: refused), its PDFs (Consortium word lists 2019 and 2024, Feeling's *Cherokee Reader*, the verb handbooks, *See, Say, Write*, the Set A / Set B poster, the posters on colours, days, money, animals, fruit), cherokeedictionary.net entry pages and its "First 500" list, *We Are Learning Cherokee* (not on the materials page read), and Montgomery-Anderson's grammar (catalogue pages only). Wiktionary was used for two cross-checks only (ᏣᎳᎩ *tsalagi*, ᎣᏍᏓ *osda*: both agree). Independent agreement found: the NHA tutor's *Osiyo*, *Osda*, *Wado*, *Gado detsadoa?* equal the generator's output from Joyner; DAILP's *tohitsu* equals it for ᏙᎯᏧ.
4. **Derived readings:** the four endings -Ꮝ *s*, -ᏍᎪ *sgo*, -Ꮚ *gwu*, -Ꮷ *tsu* (§2.5), and so the 12 `DER` words and every sentence with them (marked "(DER)" in §8). Joyner's ᏔᎵᏍᎪ ᏌᏊ (21) has no printed reading and is not used.
5. **"Have" with objects:** only Joyner's labels "solid" and "alive" were seen, with no sentence pairing a noun and a "have" form. Which nouns count as solid or alive (a book? a car?) is [inference]; the course gives the object only as an English cue.
6. **Grammar statements that are the course's reading, not the source's words:**
   - Ꮵ- (I) and Ꭿ- (you) as Set A prefixes, from comparing Joyner's forms (ᏥᎪᏩᏘᎭ, ᎯᎪᏩᏘᎭ, ᎠᎪᏩᏘᎭ); Joyner's own wording on Set A was seen only through a summary;
   - the Set B forms are taught whole, with only Joyner's "Ꭴ- for he" named;
   - Joyner's notes on negation, the copula, Set A / Set B and word order (L17–22) came through **the fetch tool's paraphrase**, not verbatim quotes;
   - "the prefix carries the meaning" as the standing rule's wording.
7. **Sound descriptions:** v as a nasal vowel, g / k and d / t, ts / ch, tl / hl, the unwritten h and equal stress are Joyner's; the course's English comparisons beyond his ("the shapes have their own values", Ꭰ looks like D) are [inference]. Tone and vowel length are described only as "real but not written".
8. **Dialect:** no word-level Western / Eastern difference was verified. The single sentence in `sounds` must stay general.
9. **Left out because no source opened gives them in the syllabary with a romanisation:** the classroom phrases (*Tla yigoliga*, *Usganoli hiwonihi*, *Gadogi hadia?*, *Holigatsv?*), *Hatlv hinela?*, *hatlv*, *nihina*, *siyo* variants beyond Joyner's, family words, food beyond ᏄᎾ / ᏚᏯ, money and prices, days (NHA *Taline iga* … with CLDR ᏔᎵᏁᎢᎦ …: three of seven pairs fail the table check, so no pairing is used), months (CLDR syllabary only), clock time, places and directions beyond here / there / near / far, feelings, body, weather, clothes, "please", "sorry", time-of-day greetings, the roadmap's two-word `self` string, and ᏌᎪᏂᎨ ᎤᏍᎪᎸᎢ (rejected, §6.3). Twelve signs occur in no verified word (§6.3).
10. **Voices and recordings:** Android voices not checked; Azure TTS unconfirmed (roadmap); recording terms for cherokeedictionary.net and the Cherokee Nation are unstated (§2.6).
11. **Fonts:** the name of iOS's Cherokee font, and whether Android devices ship Noto Sans Cherokee (request 1 bundles it anyway).
12. **Learners (§5):** no survey or study was opened; the Cherokee Nation's online classes are from the roadmap's sources, not reopened.
13. **The greet strings:**
14. **Meanings of Joyner's sentences:** the English of each sentence is Joyner's as the fetch tool returned it; his corrected "Fix the bad grammar" sentence ᎠᏂᏍᎦᏯ ᎠᏃᏍᏓ ᎩᏟ ᏓᏂᎪᏩᏘᎭ came back with no English and is used only as an `order` item glossed word by word (§7). none is time-specific (§9).

**Evidence that could not be opened, or was read only in part**
- Joyner's PDF: read in three passes of 100,000 characters (the last 5,871 not read), through a summarising tool; the vocabulary lists and 34 sentences were extracted, the grammar notes summarised.
- The Cherokee Nation's PDFs and word-list search, cherokeedictionary.net entries, DAILP's lesson pages (rendered by JavaScript: the "days of the week" chapter returned no text), and the Apple system-fonts page (truncated before "C").

**The roadmap and the brief**
- 21 roadmap ids kept, 1 merged, 5 cut (§8); the lead decides whether to cut them from the roadmap.
- The roadmap's romanisation note is followed (community-style plain line, v for the nasal vowel, ts, gw, stops as heard), with one precision: the line is Joyner's printed string minus tone digits, underdots and ɂ, with j as ts; his ch and his tl / hl choices are kept as printed. The roadmap's claim that one sign covers both g and k is supported by Joyner ("either") and r12a (no voicing contrast); its count "85 / 86 characters" is supported by r12a (85 plus the archaic Ᏽ).
- `profile.json` has the extra fields `en-nan` has: `tilesDefault`, `pronAnswers`, `pronAnswersScript`, `pronAnswersKeepSpaces`, `pronAnswersWarn`, `romaAlmost`, `voiceMatch`, and `orderPronOK: false`.

## Sources

Web pages opened and used (2026-11-20):
- [Joyner, M. (2016). *Cherokee Language Lessons, Volume 1*, 2nd ed. CC BY-SA 3.0 (PDF)](https://www.cherokeelessons.com/pdf-downloads/Cherokee-Language-Lessons-Volume-I-embedded-cover.pdf): preface, dialects (p3), pronunciation guide (pp5–8), syllabary chart, vocabulary lists of lessons 4–22, grammar notes, example sentences.
- [Del Percio, P. "Greetings", DAILP teaching article](https://wp.dailp.northeastern.edu/greetings)
- [Native History Association, Cherokee Language Tutor, lesson 1 (CC BY 4.0)](https://nativehistoryassociation.org/tutor_tsalagi1_study.php) and [lesson 6, days of the week](https://nativehistoryassociation.org/tutor_tsalagi6_study.php) (romanised only)
- Cherokee Nation Language Department: [Word List page](https://language.cherokee.gov/word-list/), [Cherokee Language Consortium page](https://language.cherokee.gov/language-programs/cherokee-language-consortium), [Teaching materials](https://language.cherokee.gov/learning-materials/teaching-materials/), [Classroom posters](https://language.cherokee.gov/posters/classroom/), [Cherokee fonts](https://language.cherokee.gov/fonts-and-keyboards/cherokee-fonts/), [Cherokee keyboards](https://language.cherokee.gov/fonts-and-keyboards/cherokee-keyboards/)
- [cherokeedictionary.net, home page](https://www.cherokeedictionary.net) and [About](https://cherokeedictionary.net/about)
- [Ishida, R. *Cherokee orthography notes* (r12a, updated 27 April 2026)](https://r12a.github.io/scripts/cher/chr)
- [W3C, *Cherokee Gap Analysis* (Group Note, 2024)](https://www.w3.org/TR/2024/DNOTE-cher-gap-20240704/)
- [Microsoft, Gadugi font family](https://learn.microsoft.com/pt-br/typography/font-list/gadugi)
- [Fontsource, Noto Sans Cherokee](https://fontsource.org/fonts/noto-sans-cherokee/about); [Android source, noto-fonts/notosanscherokee METADATA](https://android.googlesource.com/platform/external/noto-fonts/+/1406d5f70c020e4ab13932071a2da43c97069dc2/notosanscherokee/METADATA)
- Wiktionary (cross-check only): [ᏣᎳᎩ (Kiwix mirror, 2023-04)](https://kaweah.freedombox.rocks/kiwix/wiktionary_en_all_maxi_2023-04/%E1%8F%A3%E1%8E%B3%E1%8E%A9); [ᎣᏍᏓ (kaikki.org extract)](https://kaikki.org/dictionary/Cherokee/meaning/%E1%8E%A3/%E1%8E%A3%E1%8F%8D/%E1%8E%A3%E1%8F%8D%E1%8F%93.html)
- [DateTime::Locale::chr (CLDR day and month names; used only to test the day-name pairing)](https://man.archlinux.org/man/DateTime::Locale::chr.3pm.en)
- The Unicode Character Database 15.1 (Python `unicodedata`): the names of U+13A0–U+13FD and U+AB70–U+ABBF, the basis of the syllabary table.

Opened but empty or unusable: [DAILP "days of the week" chapter](https://dailp.northeastern.edu/collections/cwkw/days-of-week) (JavaScript-rendered), [Google Fonts Noto Sans Cherokee page](https://fonts.google.com/noto/specimen/Noto+Sans+Cherokee/about) (no licence text returned), [Apple system fonts](https://developer.apple.com/fonts/system-fonts/) (truncated), en.wiktionary ᎣᏏᏲ (not found).

Local project files read: `docs/briefs/target-profile-chr.md`, `docs/briefs/target-profile-yue.md`, `docs/roadmaps/chr.json`, `docs/profiles/en-nan.md` (in full), `docs/profiles/en-ceb.md` (headings and §2.6), `tools/target/nan/profile.json`, `respell.js`, `lexicon.txt` (head), `tools/target/validate.js`, and in `src/app.html`: `pickVoice`, `speak`, `normT`, `accSame`, `isNan` / `nanKey` / `nanSlip`, `pracMatch`, `romaLoose` / `romaLoose0`, `accLoose`, the font variables. The base brief's other reading list (BUILD-PLAN-EN, PRACTICE-SPEC, PHASE2-BRIEF, en-es, TARGET-BRIEF, the en-zh files) was not reread; `en-nan`, written to it, was used as the template.
