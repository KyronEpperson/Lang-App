# English speakers learning Bengali: course profile

Course `en-bn`: Bengali for English speakers. Every explanation, prompt, `why`, hint, meaning and card note is in English. Answers, examples and card targets are in Bengali. Machine-readable twin: `tools/target/bn/profile.json`.

**Evidence tags.**

- **[research-backed]**: a study that was opened. The sample is named where the paper gives one.
- **[curriculum convention]**: a textbook, syllabus or reference grammar that was opened, used for what it states, not as a study of learners.
- **[practitioner opinion]**: a course or phrase site with no data behind it.
- **[inference]**: this profile's own step from tagged items.

Untagged rules in §6 to §10 are design decisions. Sources at the end are only pages and papers that were opened.

## 1. Summary

- **Variant:** Standard colloquial Bengali (চলিত ভাষা) as spoken in Dhaka. The grammar is the shared standard. Where an everyday word differs, the Bangladesh word is the one taught, and the Kolkata word goes in the note (পানি, note জল). Voice `bn-BD`.
- **Register:** আপনি first, for strangers, elders and shops. তুমি for friends and peers. তুই is recognition only. The verb ending changes with the person and the politeness, and it does not change for number.
- **Biggest traps, ranked in §4:** the inherent vowel; aspiration and dental versus retroflex; এ as two vowels; the three words for "you" and the verb ending; the missing "am / is / are"; possession and need said with the genitive; classifiers; case endings and postpositions after the noun; স versus শ.
- **Standing practice rule:** every set keeps re-testing the verb ending (person and politeness) and the material that sits after the noun (classifier, case ending, postposition). Script lessons, which have no grammar yet, re-test the sound contrasts instead. Keywords and the test table are in §7.
- **Pronunciation aid:** a generated English-letter romanisation. It is **not reliable enough to trust on every card**. The `pron` field is still `required`, because a hand-written pron is forbidden and `none` is forbidden. A word the tool warns on is not cleared. §6 says what the tool gets wrong.
- **Lessons:** 27, every roadmap item, in roadmap order. Nothing added.
- **Decks:** 18 in 5 groups, including "Traps for English speakers" and "Compliments".
- **Typing:** word tiles by default. A typed answer may be Bengali script or this romanisation. ô, the underdot and æ are real contrasts. Do not assume a missing circumflex is only "almost". §10.

## 2. Variant, register and voice

### 2.1 Variant

The roadmap sets Dhaka colloquial, with Kolkata words in the note. Its own note says that choice was the roadmap author's judgment: the MSU textbook is silent on the city, Durham names both Dhaka and Calcutta, and the Wisconsin textbook was not opened. This profile keeps that choice. [inference] Pew's 2023 figures put the largest US Bangladeshi population in the New York metro (§5), so the speech a US learner is most likely to hear at home is Bangladeshi, not Kolkata.

What changes in the course, and what does not:

| Teach | Note only | Why |
|---|---|---|
| পানি | জল | [practitioner opinion] LangLibra: পানি is the Bangladesh word, জল the West Bengal word. Using the other one marks where you learned. |
| কয়টা | কটা | Roadmap. The Kolkata form was not checked in a grammar opened here. |
| টাকা | | Bangladesh currency. Prices in examples are taka. |
| চেয়ে | থেকে | [curriculum convention] Wikipedia's grammar: comparison is genitive + চেয়ে. থেকে is common in speech and "not considered correct by the written standard". |
| -টা | -টি | [curriculum convention] Wikipedia: -টা is the colloquial form, -টি the more formal one, with no significant regional split. |
| আসসালামু আলাইকুম | নমস্কার | [practitioner opinion] LangLibra: salam is the Bangladesh default, নমস্কার the Hindu / West Bengal default. The reply to salam is ওয়ালাইকুম আসসালাম. The reply to নমস্কার is নমস্কার. |

Scenes are Dhaka, not Kolkata. A US scene, when one is needed, is New York.

### 2.2 "You"

[curriculum convention] Wikipedia's grammar, and the Latinum lesson that was opened, give three second persons:

- **আপনি** polite. Shops, strangers, elders, anyone the learner does not know. This is the first "you" the course drills, because it is the one a learner says to a shopkeeper and hears from a stranger.
- **তুমি** familiar. Friends, peers, people the learner's own age once the relationship is clear.
- **তুই** very familiar. Recognition only. It can be rude from a stranger. It is not an accepted answer in type or order items.

The verb ending matches the pronoun. Number does not: আপনারা takes the same ending as আপনি. [curriculum convention] Wikipedia: "the plural command forms change the pronoun but not the verb ending", and the same is true of the ordinary tenses in its tables.

**Spelling of the familiar present.** The roadmap writes তুমি করো, with the vowel sign. Wikipedia's present table writes তুমি বল with no ো, and glosses it bôlo. [curriculum convention] r12a says verb spellings are inconsistent, and that ভালো can also be written ভাল. House rule: write the vowel sign when the roadmap writes it (করো, ভালো), and tell the learner that they will also see the form without the sign. Do not mark the two spellings as freely interchangeable in an answer list until a style guide is opened. None was.

**Familiar past.** The roadmap writes করলে. Wikipedia's main table writes তুমি বললে, and then says that in northern and eastern dialects the vowel is a: tumi bolla, and that the e form is the vowel-harmonised one. Dhaka is in the east. House rule for now: teach -লে, because that is the form in the roadmap and in Wikipedia's main table, and put -লা in the past lesson as something the learner will hear. This is a real open choice. §11. The lead can flip it. What "no" means is in the lead note.

### 2.3 Copula, possession, need

[curriculum convention] Wikipedia's grammar table:

- "I am happy" is আমি সুখী. No verb. "I was happy" is আমি সুখী ছিলাম.
- "I have a book" is আমার একটা বই আছে, or the more formal একটি. Not আমি আছে.
- "I need money" is আমার টাকা দরকার.

Negation, from the same article's description of four negators and from the roadmap: নই / নয় where there is no verb, নেই where the verb is আছে, না after other finite verbs. The question lesson teaches নই and নয়. The আছে lesson teaches নেই. Other না forms wait until the verb they negate has been taught.

## 3. Glossary

Use these English words, and no synonyms for them.

| Term | Means |
|---|---|
| inherent vowel | The vowel a consonant has when no vowel sign is written. The letter is অ. The sound is ô or o, or it is dropped. |
| vowel sign | The mark that replaces the inherent vowel: া ি ী ু ূ ৃ ে ৈ ো ৌ. |
| hasant | ্, the mark that removes the inherent vowel and joins a conjunct. |
| conjunct | Two or more consonants written as one letter, with a hasant between them. |
| ya-phola | য written under or after another consonant (য-ফলা). ma-phola and ba-phola are the same idea for ম and ব. ra-phola is র in that position. The terms follow the University of Texas page. |
| classifier | -টা, -টি, -জন, and the plural -গুলো / -রা. It follows the noun. |
| zero copula | A sentence with no verb for "am / is / are", as in আমি সুখী. |
| polite, familiar, very familiar | আপনি, তুমি, তুই. Wikipedia's labels. |
| verb ending | The piece of the verb that matches person and politeness. It does not mark number. |
| case ending | -কে, -র / -ের, -এ / -তে / -য়, attached to the noun. |
| postposition | A word after the noun phrase: সাথে, জন্য, কাছে, থেকে, চেয়ে. |
| aspirated | A stop with a puff of air: খ ঘ ছ ঝ ঠ থ ধ ফ ভ. Written h after the letter in the aid. Not the English "th" of "think". |
| retroflex | Tongue curled back: ট ঠ ড ঢ. An underdot in the aid. |
| dental | Tongue on the teeth: ত থ দ ধ. No underdot. |

## 4. Error zones of English speakers, ranked

No study of English-speaking learners of Bengali was opened. The order below is [inference]: it puts first the contrasts that block reading, then the ones that make the first sentences wrong. Each pair is from a page that was opened.

1. **The inherent vowel.** [curriculum convention] The University of Texas page says অ is the vowel of English "call", not the a of "father", and that there is no way to see the difference between that vowel and ও on the consonant itself. [curriculum convention] r12a: at the end of a word "there is no real way to tell" whether the vowel is said, except that it usually is said after a final cluster; inside a word some clusters are not marked at all (করতাল). [research-backed] Choudhury, Basu and Sarkar 2004, about 85% on 1,000 Bengali words, with the misses on common adjectives, suffixes, Sanskrit loans and compounds. [research-backed] Johny and Jansche 2018: বল is /bɔlo/ "say" and /bɔl/ "ball". Wrong reading: ক as "ka". The aid writes kô, and even that is only the default.
2. **Aspiration.** [curriculum convention] UT and the roadmap both treat খ ঘ ছ ঝ থ ধ ফ ভ as a separate series from the plain stops. Wrong: খ read as English k, or থ read as the "th" of "think". The h in the aid is a puff. Wikipedia's phonology describes these as stops, not as English fricatives. ফ is the exception the key writes as f (§6): Wikipedia says /pʰ/ is commonly [ɸ] or [f].
3. **Dental against retroflex.** ত দ against ট ড. Wrong: one English "t" for both. The underdot is the retroflex. A missing dot is a different word, not a typo.
4. **এ is more than one vowel.** [curriculum convention] UT: কে is ke or kæ. [curriculum convention] Wikipedia phonology: একই is now [æki]. The aid writes e unless a ya-phola or an override forces æ. The warning on এ stays on.
5. **Three words for "you", and the verb ending.** [curriculum convention] Wikipedia: তুমি বল, আপনি বলেন, and the plural does not change the ending. Wrong: one verb form for every "you", or a plural ending copied from English.
6. **Zero copula.** [curriculum convention] Wikipedia: আমি সুখী, not a sentence with আছি, for "I am happy". Wrong: আমি সুখী আছি.
7. **Possession and need.** [curriculum convention] Wikipedia: তোমার একটা বই আছে, আমার টাকা দরকার. Wrong: আমি একটা বই আছি, আমি টাকা দরকার.
8. **Classifiers.** [curriculum convention] Wikipedia: the colloquial definite is -টা, and a counted noun takes it. Wrong: এক বই for "one book" or "a book".
9. **Endings and postpositions after the noun.** [curriculum convention] Wikipedia: -কে is not added to inanimates, the locative is not added to animates, and comparison is genitive + চেয়ে. Wrong: an English preposition in front, or থেকে taught as the written comparative.
10. **স against শ and ষ.** [curriculum convention] Wikipedia phonology: for many speakers /s/ and /ʃ/ are both phonemes (আস্তে /aste/ "softly", আসতে /aʃte/ "to come"). Some western dialects merge them, so বাস "bus" and বাঁশ "bamboo" can sound the same. পছন্দ, from Persian pasand, is said with চ: [pɔtʃʰondo]. The roadmap's "mostly sh" is the roadmap author's summary, not this article. The aid writes sh for স except in the stop clusters স্ত স্থ স্ক স্প স্ফ, where it writes s.

**Not taught as the Dhaka standard.** [curriculum convention] Wikipedia phonology: some eastern dialects, especially Sylheti, turn খ ফ ভ into fricatives and drop the aspiration contrast. That is not the `bn-BD` target. One note in the consonant lesson is enough. The same article says the Dhaka standard merges ড় with র. The aid still writes ṛ, so the letter the learner saw stays visible (§6).

## 5. Learners: who, why, what first

[research-backed] Pew Research Center, "Facts about Bangladeshis in the U.S.", 1 May 2025, from the 2023 American Community Survey and Pew's 2021–23 ACS tabulations:

- About 300,000 people identified as Bangladeshi alone or in combination. About 270,000 identified as Bangladeshi alone.
- Of the alone population, 44% (115,000 of 270,000) live in New York state. Next: Michigan 20,000, California 18,000, Texas 17,000, New Jersey 12,000. Metros: New York 110,000, Detroit 18,000, Washington, D.C. 15,000.
- Among Bangladeshis aged 5 and older, 86% speak Bengali at home. 56% are English-proficient (11% speak only English at home, 46% speak another language at home and English very well).
- Median age 33. 71% of adults are married. 51% of those aged 25 and older have a bachelor's degree or higher. Median household income $78,400 in 2023.

[research-backed] Modern Language Association, fall 2006 enrollments in languages outside the top 15: Bengali had 94 enrollments at 12 institutions. That is the only US classroom count that was opened. No later national count, and no survey of why US adults start Bengali, was opened. Do not invent a motive (heritage, partner, travel) as if it had been measured.

[inference] What they need first, from those facts and from §4: the script, because the home language is written in it; আপনি and the verb ending, because the first conversation outside the family is with a stranger; পানি, টাকা, and the classifier, because a shop in Dhaka or a family kitchen in New York uses them immediately. Heritage learners who already speak the language still have to learn which vowel the spelling hides. The aid is for them too, and it is the part most likely to be wrong (§6).

## 6. Pronunciation aid (`pron`)

**Revised 2026-11-22 (lead decision, `docs/reviews/claude-review-2026-11-22.md`, en-bn): the aid is LEXICON-FIRST.** This section replaces the earlier rule-based design. It also overrides the pron remarks in §1, §8, §9 and §10: the `pron` columns in §9 were printed by the old rule tool. On a real card the pron is always the current tool output, so regenerate every sample (some change: কেমন kemon, কত kôto, বড় bôṛo, শিক্ষা shikkha).

### 6.1 What the spelling hides

Bengali is an abugida. The spelling does not show:

- whether an inherent vowel is said;
- whether a said inherent vowel is ô or o;
- whether এ is e or æ;
- whether স is s or sh;
- whether a phola is silent, doubles the consonant, or is a real consonant;
- which reading a homograph has (করে kôre "does" / kore "having done").

[research-backed] Choudhury, Basu and Sarkar 2004 got about 85% with a hand rule. Johny and Jansche 2018 got about 97.5% with a neural model and showed that homographs have no single reading. Both figures are too low for a course where a hand-typed pron is forbidden. So the tool does not guess.

### 6.2 Decision

`node tools/target/bn/respell.js "<Bengali>"` looks up every Bengali word whole in `tools/target/bn/lexicon.txt` and in every `tools/target/bn/lexicon-add-*.txt`. If any word is missing it throws and names the words. There is no rule fallback and no warning-and-continue. The same text always gives the same string. `pron` stays `required`: every card and example carries the tool's output, pasted unchanged.

- **Lexicon line:** `bengali<TAB>romanisation<TAB>source`, `#` for comments. The romanisation writes the sound in the key below. The source is a page that was opened (a `#source` id from the header of `lexicon.txt`, or a URL), or `unverified:model` if none could be opened. A line that is not true to a source is never labelled as sourced.
- **Whole words only.** বই, বইটা, ঢাকা and ঢাকায় are four lines. No ending is split off.
- **Multi-word lines** (`আপনাকে দেখে	apnake dekhe	wt-dekha`) win over single words by longest match. A **homograph** is two lines with the same key, each marked `homograph:<gloss>` in the source column. Used alone, it throws and asks for a multi-word line that fixes the reading. Seeded homographs: করে, দেখে, বলে (present kôre, dækhe, bôle; participle kore, dekhe, bole); খেলে, খেলো, খেলেন (খাওয়া khele … / খেলা khæle …); আসল (ashlo "came" / ashol "real"); আসলে (ashle / ashole "actually"); পরে (pore "after" / pôre "wears"). `gen.js` gives a fill or type answer that is a bare homograph no romanised alternative, so build such an item around a form that is not a homograph, or around a phrase.
- **Who edits what.** Writers never edit `lexicon.txt` or `respell.js`. When the tool throws, a writer adds the word to their own file, `lexicon-add-<role>.txt`, where the role is A, B, 1, 2, 3 or R. The lead merges those files into `lexicon.txt`. Two files that give the same word different readings make the word throw ("conflicting readings") until the lead settles it.
- `node tools/target/bn/respell.js --check` validates every line. It checks the pattern with and without the `u` flag, that the key and reading have the same number of words and hyphens, that the source is known, that there are no conflicts, and that multi-word lines agree with their words. It prints the share of lines that have a source.
- `node tools/target/bn/respell.js --suggest "<word>"` prints the old rule's guess, labelled UNVERIFIED. It is a starting point for looking a word up. It is never a source.
- `tools/target/repron.js` swallows the tool's errors and leaves an old pron in place. So check a string by running the CLI on it, and make sure the exit code is 0.

Seed (2026-11-22): every Bengali word in §8 and §9 and in the profile's greetings, plus about 450 common beginner words. That is about 635 lines, and about half name an opened source. The verb tables of করা, থাকা / আছ-, বলা, পারা, যাওয়া, খাওয়া, দেখা, চাওয়া, লাগা, দেওয়া, আসা and হওয়া are from Wiktionary's Chalita conjugation tables. The other sources are the MSU Basic Bangla textbook, the UT script and time pages, Wikivoyage and Wikipedia. `lexicon.txt` gives the conversion from each source's spelling into this key. Not in the lexicon on purpose: lone vowel signs and marks (ং ঃ ঁ ৎ ি া ো), and cluster fragments such as স্ত. Lesson text may show them, but no card or example may carry them as a target.

### 6.3 Key

The key writes the sound, all lowercase, one pron word per Bengali word. A hyphen appears only where the Bengali has one. Punctuation stays on the word: । becomes `.`. No digits: write the number as a word.

| Sound | Aid | Examples |
|---|---|---|
| /ɔ/, said inherent vowel | ô | কত kôto, বড় bôṛo, করা kôra, সুন্দর shundôr |
| /o/: ও, or a said inherent vowel heard as o | o | ভালো bhalo, করি kori, ধন্যবাদ dhonnobad |
| silent inherent vowel | nothing | নাম nam, করলাম korlam, আপনার apnar |
| আ | a | |
| ই ঈ / ি ী | i | Length is not a contrast. |
| উ ঊ / ু ূ | u | |
| /e/ | e | কেমন kemon, দেখি dekhi |
| /æ/: এ or ya-phola said æ | æ | এক æk, দেখা dækha, ব্যথা bætha, হ্যাঁ hæ̃ |
| ঐ, ঔ, other vowel pairs | oi, ou, ai, ei, ao ... | বই boi, খাই khai, যাও jao |
| ক খ গ ঘ | k kh g gh | |
| চ ছ জ ঝ | ch chh j jh | Never a bare c. |
| ট ঠ ড ঢ | ṭ ṭh ḍ ḍh | The dot is the retroflex. |
| ত থ দ ধ ন ণ | t th d dh n n | th is an aspirated dental, not English "th". |
| প ফ ব ভ ম | p f b bh m | ফ is f. Wikipedia: commonly a fricative. |
| য, য় | j, y | যান jan, যায় jay |
| র ল | r l | |
| ড় ঢ় | ṛ ṛh | Kept even where Dhaka merges ড় with র, so the letter stays visible. |
| /ʃ/ (শ ষ, and most স) | sh | সে she, আসা asha |
| /s/ (স in স্ত স্থ স্ক …, loans) | s | আস্তে aste, স্থান sthan, বাস bas |
| হ | h | |
| ং ঙ | ng | বাংলা bangla |
| ঁ, a nasal vowel | tilde on the vowel | চাঁদ chãd, বাঁ bã, পেঁয়াজ pẽyaj |
| doubled consonant | the letter twice | আম্মা amma, জন্য jonno |
| doubled aspirate or digraph | first part twice, aspiration once | kkh (শিক্ষা shikkha, দুঃখিত dukkhito), cch (চ্চ), cchh (চ্ছ: যাচ্ছি jacchhi), tth, ddh, bbh |
| ওয়া after a vowel | oya | যাওয়া jaoya, খাওয়া khaoya |

Changes from the earlier key, made so that one rule covers every doubled consonant: ক্ষ inside a word is kkh, not khkh. ঃ before a consonant doubles it the same way (dukkhito). চ্ছ is cchh. The letters, ô / o / æ, the underdots, f for ফ, and ṛ for ড় are unchanged.

A letter said alone carries its inherent vowel (ক kô, ট ṭô). A vowel letter alone is its vowel (অ ô, আ a).

### 6.4 Format and `pronPattern`

```
node tools/target/bn/respell.js "আপনি কেমন আছেন?"     ->  আপনি কেমন আছেন? -> apni kemon achhen?
node tools/target/bn/respell.js --pattern
```

The module exports `respell` and `pronPattern`. `profile.json` carries the pattern exactly as `--pattern` prints it. It allows the letters of the key, ô, æ, the underdots, the NFC nasal vowels ã ẽ ĩ õ ũ ỗ and æ̃, a hyphen inside a word (and in front of an ending written alone, -ṭa), and `. , ? ! : ;` stuck to a word. It forbids capitals, q v x z, `aa ii uu ee oo`, and a c that is not part of ch, cch or cchh. It was tested with and without the `u` flag on every lexicon line. It cannot see a wrong vowel. The lexicon's source column is the guarantee.

### 6.5 Open readings (unverified lines a card depends on)

These lines have no opened source yet. A writer may use them. Where a card's point is the sound itself, the card note must not claim the sound until a source is added.

| Word | Lexicon | Why open |
|---|---|---|
| কেমন | kemon | The old tool said kemôn, and LangLibra writes o. Not checked this round. |
| সকাল, সন্ধ্যা | shôkal, shôndha | UT writes shokal and shondha, and UT does not mark ô. |
| কয়টা | kôyṭa | LangLibra writes Kôyta (§11). Not opened this round. |
| দরকার | dôrkar | LangLibra writes dôrkar (§6 of the first draft). Not opened this round. |
| ছাত্র | chhatro | UT prints chatra, glossed "students". The usual reading is chhatro. |
| পনেরো, চব্বিশ, চল্লিশ, সত্তর, নব্বই, পঁচিশ | | MSU prints these in lowercase, and its lowercase o does not settle ô versus o. |
| pronouns, কি / কী words, family, food, places | | Mostly explicit vowels. Unverified, but at low risk. |

`node tools/target/bn/respell.js --check` lists the sourced and unverified counts.

### 6.6 Worked examples (tool output)

| Bengali | pron | Source of the hard part |
|---|---|---|
| আপনি কেমন আছেন? | apni kemon achhen? | আছেন: Wiktionary আছ- table |
| ভালো আছি | bhalo achhi | আছি: Wiktionary |
| আমি করি। | ami kori. | Wiktionary করা table (raised o) |
| তুমি করো। | tumi kôro. | Wiktionary করা table (ô) |
| আপনি করেন। | apni kôren. | Wiktionary |
| আমি করলাম। | ami korlam. | Wiktionary (vowel dropped) |
| সে করে। | she kôre. | multi-word line, Wiktionary |
| আপনাকে দেখে খুব ভালো লাগলো। | apnake dekhe khub bhalo laglo. | দেখে: participle, Wiktionary |
| এটা ওটার চেয়ে বড়। | eṭa oṭar cheye bôṛo. | বড়: Wiktionary Dhaka /bɔɹo/ |
| খুব সুন্দর | khub shundôr | সুন্দর: Wiktionary /ʃund̪ɔɹ/ |
| ধন্যবাদ | dhonnobad | Wiktionary /d̪ʱonːobad̪/, Wikivoyage |
| কত টাকা? | kôto ṭaka? | কত: Wikivoyage kaw-toh |
| দশটা | dôshṭa | দশ: MSU dOsh |
| একটা বই | ækṭa boi | এক: MSU Ek, Wikivoyage ack |
| শিক্ষা | shikkha | UT shikhkha, under the doubling rule |
| হ্যাঁ | hæ̃ | UT |
| যাচ্ছি | jacchhi | Wiktionary ĵacchi |
| দেখা | dækha | Wiktionary /ˈd̪ækʰa/, MSU dEkha |
| আসতে / আস্তে | ashte / aste | Wiktionary asha table / unverified |
| গ্রাম, প্রথম | gram, prothom | UT |

### 6.7 What lesson 1 teaches so the aid can be read

ô is not a, and it is not o. a is আ. o is ও, or a hidden vowel said like ও. A hidden vowel can also be silent, and then nothing is written. There is no macron and no capital letter. An h after a letter is a puff, except that ফ is f. A dot under a letter is retroflex. æ is the vowel of "cat". A doubled letter is held longer. The aid writes what is said, so the same letter can look different in two words (করা kôra, করি kori). That is the point of the aid, not a mistake.

## 7. Standing practice rule

Two hinges, plus a script hinge so the script lessons have something to re-test. The validator has no exemption for a lesson with no grammar.

**A. The verb ending matches person and politeness.** আমি, তুমি, আপনি and সে take different endings. Number does not change the ending. Zero copula against আছি against নেই is the same hinge: which form of "be", if any.

**B. What follows the noun.** The classifier (-টা, -জন), the case ending (-কে, -এ / -তে / -য়, -র / -ের), and the postposition (সাথে, জন্য, চেয়ে).

**Script lessons.** Aspirated or not, dental or retroflex, the inherent vowel, the vowel sign, the conjunct, the hasant. At least two order items and two type items in the set use one of these words in the `why`.

Keywords, flags `i`, `minOrder` 2, `minType` 2. This is the regex in `profile.json`, and it was run on the lines below:

```
\bverb endings?\b|\b(?:ami|tumi|apni|tui|se) forms?\b|\bpolite forms?\b|\bfamiliar forms?\b|\bclassifiers?\b|\bcase endings?\b|\bpostpositions?\b|\bafter the noun\b|\bzero copula\b|\bretroflex\b|\bdental\b|\b(?:un)?aspirated\b|\binherent vowels?\b|\bvowel signs?\b|\bconjuncts?\b|\bhasant\b
```

| why line | Should match? |
|---|---|
| The verb ending has to match আপনি. | yes |
| Use the polite form for a shopkeeper. | yes |
| Use the familiar form with a friend. | yes |
| This is the ami form, not the tumi form. | yes |
| The classifier -টা is missing. | yes |
| Case endings come after the noun. | yes |
| A postposition comes after the noun. | yes |
| Bengali uses a zero copula here. | yes |
| ট is retroflex and ত is dental. | yes |
| খ is aspirated. | yes |
| The inherent vowel is dropped. | yes |
| The vowel sign is on the wrong letter. | yes |
| This conjunct is ক্ষ. | yes |
| The hasant kills the vowel. | yes |
| The word means water. | no |
| Say this in the evening. | no |
| You need a ticket. | no |
| The ending of the story is different. | no |
| Fill in the form. | no |
| Adjectives come before the noun. | no |
| A plural thing takes -গুলো. | no |

The last line is a deliberate non-match. A plural drill has to say "classifier", not only "plural", or the set will not count. Adjectives in Bengali do not agree, so "before the noun" must not be the keyword. "After the noun" is reserved for the case ending and the postposition.

## 8. Lessons (final order)

27 lessons. Every roadmap id, the `bn-` prefix dropped, roadmap order kept. Nothing added: the cap was one extra lesson, and no gap forced one. Vowel signs stay after consonants because the inherent vowel is part of the consonant letter (r12a, UT), not a later complication.

| # | id | Title | Roadmap | Deck |
|---|---|---|---|---|
| 1 | vowels | Vowels and the inherent vowel | bn-vowels | Vowels |
| 2 | consonants | Aspiration and dental versus retroflex | bn-consonants | Consonants |
| 3 | vowel-signs | Vowel signs and the four marks | bn-vowel-signs | Vowel signs |
| 4 | conjuncts | Conjuncts and the pholas | bn-conjuncts | Conjuncts |
| 5 | greetings | Greetings and thank you | bn-greetings | Greetings and courtesy |
| 6 | pronouns | Three words for you | bn-pronouns | About me |
| 7 | possessive | My, your, his | bn-possessive | About me |
| 8 | intro | Introducing yourself | bn-intro | About me |
| 9 | questions | Questions and "not" | bn-questions | Questions |
| 10 | eta-ota | This and that | bn-eta-ota | This and that |
| 11 | numbers | Numbers, classifiers and prices | bn-numbers | Numbers and money |
| 12 | ache | Having and being there | bn-ache | Home and having |
| 13 | need-like | Want, need and like | bn-need-like | Traps for English speakers |
| 14 | present | The present tense | bn-present | Time and routine |
| 15 | where | Where you live | bn-where | Getting around |
| 16 | family | Family | bn-family | Family and people |
| 17 | food | Food and drink | bn-food | Food and drink |
| 18 | continuous | What you are doing now | bn-continuous | Time and routine |
| 19 | future | Later and tomorrow | bn-future | Time and routine |
| 20 | time | The clock and the day | bn-time | Time and routine |
| 21 | past | The simple past | bn-past | Time and routine |
| 22 | chhilo | Was and were | bn-chhilo | Time and routine |
| 23 | postpositions | Endings and postpositions | bn-postpositions | Getting around |
| 24 | directions | Directions | bn-directions | Getting around |
| 25 | compare | Describing and comparing | bn-compare | Compliments |
| 26 | conjunct-verbs | Noun plus করা | bn-conjunct-verbs | Work and actions |
| 27 | shopping | Shopping | bn-shopping | Shopping |

What each one has to hit:

1. **vowels.** অ আ ই ঈ উ ঊ এ ঐ ও ঔ, and the fact that a bare consonant already has অ. Trap: reading অ as the a of "father". Teach the aid (§6.7). ঋ is recognised, not drilled.
2. **consonants.** The aspirated row and ট ড against ত দ. শ ষ স, with the আস্তে / আসতে pair. Trap: one English t, and "th" as in "think".
3. **vowel-signs.** কা কি কী কু কূ কে কো, plus ং ঃ ঁ ৎ. Trap: ি is written to the left of the consonant, so it looks as if it comes first. কী and কি are the same sound.
4. **conjuncts.** ক্ষ, a cluster such as স্ত, and ra-phola in প্রথম. Trap: pronouncing every letter of a phola. The lesson uses only words the tool does not warn on, or words already in `EXC`.
5. **greetings.** আসসালামু আলাইকুম and the reply; কেমন আছেন; ভালো আছি; ধন্যবাদ. নমস্কার in a note. Trap: a time-of-day "good afternoon" that Dhaka does not use as the everyday hello. শুভ সকাল, শুভ সন্ধ্যা and শুভ রাত্রি are formal (§10).
6. **pronouns.** আমি, তুমি, আপনি, সে, তিনি. তুই in a note. Trap: one "you".
7. **possessive.** আমার, তোমার, আপনার, তার. Trap: a possessive adjective that agrees, copied from English. It does not agree.
8. **intro.** আমার নাম …, আমি ছাত্র, with no copula. Trap: inserting আছি.
9. **questions.** কী, কে, কার, কোথায়, কেমন, and নই / নয়. Trap: নয় used where নেই belongs. নেই waits for আছে.
10. **eta-ota.** এটা, ওটা, বইটা. Trap: no classifier. -টি is the formal note.
11. **numbers.** The numbers the roadmap lists, said as words (the tool rejects digits), with -টা and -জন, and কত টাকা. Trap: এক বই. এক is æk, an override.
12. **ache.** আমার একটা বই আছে, নেই, and location. Trap: আমি আছে.
13. **need-like.** আমি … চাই, আমার … দরকার, আমার … ভালো লাগে. This is the traps deck: the three English calques. Trap: আমি টাকা দরকার.
14. **present.** আমি করি, তুমি করো, সে করে, আপনি করেন, for one verb class, not ten. Trap: the ending not changed for আপনি. Spell করো, and note the spelling without ো.
15. **where.** আমি ঢাকায় থাকি. The endings -এ / -য় / -তে. Trap: a preposition in front of the place.
16. **family.** মা, বাবা, ভাই, বোন, and ও, আর, কিন্তু. Trap: plural -s on the noun instead of -রা.
17. **food.** ভাত, মাছ, চা, পানি, and … দিন as the polite request. জল in the note.
18. **continuous.** করছি, করছ, করছে, করছেন. Trap: the simple present used for "I am doing it now".
19. **future.** করব, করবে, করবেন, inside a daily routine. Trap: "will" as a separate word.
20. **time.** কয়টা বাজে, সাড়ে, and the day names the roadmap's সোমবার stands in for. Trap: a 12-hour English word order that drops বাজে.
21. **past.** করলাম, করলে, করল, করলেন. Teach -লে. Note the eastern -লা (§2.2, §11). Trap: English present perfect where Bengali uses this recent past. Wikipedia says this tense is for events within about a day.
22. **chhilo.** ছিলাম, ছিলে, ছিল, ছিলেন, including আমি সুখী ছিলাম. Trap: zero copula stretched into the past.
23. **postpositions.** -কে, সাথে, জন্য, কাছে, থেকে. Trap: -কে on a thing, and a preposition before the noun.
24. **directions.** ডান দিকে, বাঁ দিকে, সোজা, কাছে, দূরে. LangLibra also has বাঁয়ে; that form goes in a note, not in the answer list, until it is checked.
25. **compare.** বড়, ছোট, সুন্দর, and genitive + চেয়ে. The deck is Compliments: সুন্দর and ভালো are how a learner praises, and the comparison frame lives here. থেকে in a note.
26. **conjunct-verbs.** কাজ করা, ফোন করা, পছন্দ করা. Trap: an English verb invented where Bengali uses noun + করা. পছন্দ is the Persian loan said with চ (§4).
27. **shopping.** এক কেজি, অর্ধেক, দাম কত, in taka. Trap: the classifier left off the measure.

## 9. Decks

18 decks, 16 to 18 cards each when they are written. Five sample cards here fix the level. The `pron` is the tool's. A note that says "warns" means the writer does not copy that pron onto a real card until the word is in `VER` or `EXC`. Names are examples. The city is Dhaka. The money is টাকা. Water is পানি.

### Script and sounds

**1. Vowels.** The inherent vowel against আ, ই, ও. Lesson: `vowels`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| অ | ô | the inherent vowel | The vowel of "call", not of "father". |
| আ | a | the vowel a | No macron. |
| ই | i | the vowel i | ঈ is the same sound. |
| ঈ | i | the same vowel i | Same pron as ই, on purpose. |
| ও | o | the vowel o | A different letter from অ. |

**2. Consonants.** Aspiration and place. Lesson: `consonants`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| ক | kô | the letter k | Plain. Warns: the vowel is inherent. |
| খ | khô | the letter kh | Aspirated. The h is a puff. Warns: inherent vowel. |
| ত | tô | the letter t | Dental. Warns: inherent vowel. |
| ট | ṭô | the letter ṭ | Retroflex. The dot is the difference. Warns: inherent vowel. |
| শ | shô | the letter sh | ষ is the same sound. স is not always. Warns: inherent vowel. |

**3. Vowel signs.** The sign, and one mark. Lesson: `vowel-signs`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| কা | ka | ka | া replaces the inherent vowel. |
| কি | ki | ki | The sign is written to the left. |
| কে | ke | ke | Warns. এ may be e or æ. |
| কো | ko | ko | |
| বাংলা | bangla | Bengali | ং is ng. |

**4. Conjuncts.** Only forms the tool and a source agree on. Lesson: `conjuncts`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| গ্রাম | gram | village | ra-phola. UT. |
| প্রথম | prothom | first | Override. The rule said prothôm. UT. |
| শিক্ষা | shikhkha | education | Medial ক্ষ is khkh. UT. |
| ক্ষমা | khôma | forgiveness | Word-initial ক্ষ is kh. Warns: inherent vowel. |
| স্থান | sthan | place | স before a stop is s. Warns on the dropped vowel. Do not ship until checked. |

### First steps

**5. Greetings and courtesy.** Lesson: `greetings`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| আসসালামু আলাইকুম | assalamu alaikum | peace be upon you | Dhaka's everyday hello, any time of day. |
| ওয়ালাইকুম আসসালাম। | walaikum assalam. | and upon you peace | The reply. |
| কেমন আছেন? | kemôn achhen? | how are you? | Polite. Warns. |
| ভালো আছি | bhalo achhi | I am well | No "am". |
| ধন্যবাদ | dhônnobad | thank you | Warns. LangLibra: save it for real favours and for service, not for family small talk. |

**6. About me.** Lessons: `pronouns`, `possessive`, `intro`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| আমার নাম রাহীম। | amar nam rahim. | My name is Rahim. | Example name. Zero copula. Warns on the final vowel of রাহীম. |
| আমি ছাত্র। | ami chhatro. | I am a student. | No আছি. The feminine was not in the tables opened here, so it is not an accepted answer yet. |
| আপনার নাম কী? | apnar nam ki? | What is your name? | Polite. আপনার is an override. |
| আমি বাংলাদেশি | ami bangladeshi | I am Bangladeshi | LangLibra's phrase. Warns on এ. |
| আমার বাবা | amar baba | my father | |

**7. Questions.** Lesson: `questions`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| এটা কী? | eṭa ki? | What is this? | |
| কে? | ke? | Who? | Warns. এ may be æ. |
| কোথায়? | kothay? | Where? | |
| কার? | kar? | Whose? | |
| আমি ছাত্র নই। | ami chhatro noi. | I am not a student. | নই, not নেই. There is no আছে here. |

**8. This and that.** Lesson: `eta-ota`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| এটা | eṭa | this | Colloquial -টা. |
| ওটা | oṭa | that | |
| বইটা | boiṭa | the book | The classifier is on the noun. |
| এই বইটা | ei boiṭa | this book | Wikipedia's pattern with -টা instead of formal -টি. Warns. |
| একটা বই | ækṭa boi | a book; one book | এক is an override, æk. |

**9. Numbers and money.** Lesson: `numbers`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| এক | æk | one | Override. Wikipedia's æ. |
| দুই | dui | two | LangLibra. |
| দশ | dôsh | ten | LangLibra's dôsh. Warns. |
| কত টাকা? | kôt ṭaka? | how much money? | |
| দুই হাজার টাকা | dui hajar ṭaka | two thousand taka | LangLibra's shop line. Warns on হাজার. |

### Everyday life

**10. Home and having.** Lesson: `ache`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| আমার একটা বই আছে। | amar ækṭa boi achhe. | I have a book. | Wikipedia. Genitive, then আছে. Warns on আছে. |
| তোমার একটা বই আছে। | tomar ækṭa boi achhe. | You have a book. | Wikipedia's familiar example. Warns on আছে. |
| নেই | nei | there isn't | The negative of আছে. Warns. |
| আছে | achhe | there is | Warns. এ may be æ. |
| ঢাকায় | ḍhakay | in Dhaka | Locative -য়. Warns. |

**11. Food and drink.** Lesson: `food`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| ভাত | bhat | rice | |
| মাছ | machh | fish | Warns. The aspiration is the letter ছ. |
| চা | cha | tea | |
| পানি | pani | water | The Bangladesh word. |
| জল | jôl | water | Kolkata. Note only, not the taught word. |

**12. Family and people.** Lesson: `family`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| মা | ma | mother | |
| বাবা | baba | father | |
| ভাই | bhai | brother | |
| বোন | bon | sister | Warns. Final vowel dropped by the rule. |
| আর | ar | and | Warns. |

**13. Time and routine.** Lessons: `present`, `continuous`, `future`, `time`, `past`, `chhilo`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| আমি করি। | ami kori. | I do. | Warns. Do not ship the pron until the stem vowel is checked. |
| তুমি করো। | tumi kôro. | You do. | Familiar. The ো is the house spelling. Warns on the inherent vowel. |
| আপনি করেন। | apni kôren. | You do. | Polite. Warns. |
| কয়টা বাজে? | koyṭa baje? | What time is it? | LangLibra writes Kôyta. The tool has o, from the y rule. Warns. |
| আমি সুখী ছিলাম। | ami shukhi chhilam. | I was happy. | Wikipedia. Warns on ছিলাম. |

### Out and about

**14. Getting around.** Lessons: `where`, `postpositions`, `directions`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| ঢাকায় থাকি | ḍhakay thaki | I live in Dhaka | The ending is on the place. Warns. |
| ডান দিকে | ḍan dike | to the right | Roadmap phrase. Warns. |
| বাঁ দিকে | bã dike | to the left | Warns on দিকে. |
| সোজা | shoja | straight | |
| সাথে | shathe | with | Postposition, after the noun. |

**15. Shopping.** Lesson: `shopping`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| দাম কত? | dam kôt? | What's the price? | LangLibra. Warns. |
| কত টাকা? | kôt ṭaka? | How many taka? | |
| এক কেজি | æk keji | one kilo | Warns on কেজি. |
| টাকা | ṭaka | taka | |
| দশটা | dôshṭa | ten (of things) | Classifier on the number. Warns. |

**16. Work and actions.** Lesson: `conjunct-verbs`.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| কাজ করা | kaj kôra | to work | Noun + করা. Warns. |
| ফোন করা | fon kôra | to phone | ফ is f. Warns. |
| পছন্দ | pôchhondo | liking | Wikipedia [pɔtʃʰondo]. From Persian pasand, said with চ. |
| আমি কাজ করি। | ami kaj kori. | I work. | Warns. |
| ফোন | fon | phone | The loan. Warns on the dropped vowel. |

### Watch out

**17. Traps for English speakers.** Lesson: `need-like`. The deck is this lesson's deck so the calques have a home. A "no" would leave the lesson with a topical deck and this deck with no lesson.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| আমি সুখী। | ami shukhi. | I am happy. | Not আমি সুখী আছি. Wikipedia. |
| আমার টাকা দরকার। | amar ṭaka dôrkar. | I need money. | Not আমি টাকা দরকার. Override on দরকার. |
| আমার একটা বই আছে। | amar ækṭa boi achhe. | I have a book. | Not আমি আছে. Warns on আছে. |
| আমি চাই। | ami chai. | I want. | Roadmap frame. The চাই diphthong is explicit. |
| ভালো লাগে | bhalo lage | it pleases; I like | Roadmap. The liker is genitive: আমার ভালো লাগে. Warns. |

**18. Compliments.** Lesson: `compare`. Praising uses সুন্দর and ভালো, and the comparison frame of this lesson is genitive + চেয়ে. How a person answers a compliment was not in any page opened here. Do not invent a reply. [practitioner opinion] The two longer lines are from the Latinum lesson, which also says তুমি with a peer and আপনি with anyone senior.

| Bengali | pron | Meaning | Note |
|---|---|---|---|
| এটা ভালো। | eṭa bhalo. | This is good. | Zero copula, the আমি সুখী pattern. [inference] |
| খুব সুন্দর | khub shundor | very beautiful | Latinum's phrase. Warns on সুন্দর. |
| তোমার শাড়িটা খুব সুন্দর লাগছে। | tomar shaṛiṭa khub shundor lagchhe. | Your sari looks beautiful. | Latinum. Familiar "you". Warns. |
| আপনাকে দেখে খুব ভালো লাগলো। | apnake dekhe khub bhalo laglo. | It was good to see you. | Latinum. Polite. Warns. |
| এটা ওটার চেয়ে বড়। | eṭa oṭar cheye bôṛ. | This is bigger than that. | Roadmap frame. চেয়ে, not থেকে. Warns. The final vowel of বড় is unchecked. |

## 10. Typing and script

The options below are the ones Telugu already uses. No app change is required to build the course. Polish that would be nice, and is not blocking, is under "Needs from the lead" in the lead note.

- **tilesDefault:** true. The learner is offered word tiles. A new script is not a typing test on day one.
- **pronAnswers:** true. A typed answer is accepted in Bengali script or in this romanisation.
- **pronAnswersKeepSpaces:** true.
- **pronAnswersScript:** `[\\u0980-\\u09FF]`, the whole Bengali block, so a typed Bengali answer is romanised by this tool for the near-miss check.
- **pronAnswersWarn:** true.
- **romaAlmost:** true. A missing dot can count as "almost", on the Telugu precedent. **ô is not a macron.** The Telugu profile measured that missing macrons collapse long and short. This profile did not open the app, so it does not know whether a circumflex is stripped. If it is, অ and ও become the same "almost", which is the error the key exists to prevent. Until that is measured, a type item whose point is ô versus o must not rely on "almost". Tiles and the exact romanisation still work.
- **voiceMatch:** `^bn(?:[-_]|$)`, so `bn-BD` is accepted.
- **accents:** true, because the aid uses ô, underdots and æ.
- **keys:** `ঁ ং ঃ ্ ৎ`. The four marks plus visarga, for the accent bar. The vowel signs are ordinary input, not bar keys.
- **targetScript:** `[\\u0980-\\u09E5]`. A target must contain a Bengali letter or mark. Digits ০–৯ (U+09E6–U+09EF) do not count, so a digits-only string is not a Bengali answer. Lessons write numbers as words. A note in the numbers lesson says prices on signs may be Bengali digits or Western digits.
- **Capitals:** the aid has none. Bengali script has none. The matcher can ignore Latin case.
- **Punctuation:** । is the danda. The engine already ignores danda and ordinary punctuation on the Telugu precedent. Answer lists must not contain two Bengali strings that differ only by a danda.
- **Hasant and nukta:** ড় may be the precomposed character or ড plus nukta. The tool accepts both. Writers type the ordinary precomposed letter.

## 11. Gaps and unverified claims

- The familiar past. Wikipedia says eastern speech uses tumi bolla, and Dhaka is in the east. The course teaches করলে. Nobody opened a Dhaka style guide or listened to the `bn-BD` voice. The lead can flip this to -লা.
- তুমি করো against Wikipedia's তুমি বল with no vowel sign. House rule is to write the sign. Not checked against a publisher's style.
- কয়টা. The tool says koyṭa. LangLibra writes Kôyta. Not settled.
- বড়. The tool drops the final vowel (bôṛ). No source opened here said whether it is said.
- The reply to a compliment. Not found.
- ছাত্রী as the feminine of ছাত্র. Used as a caution in a sample note, not as a taught form.
- কোন and হল. Homographs in Johny and Jansche. Not overridden, so they must not appear on a card.
- Khan 2010, the JIPA sketch Wikipedia cites for the Dhaka vowel chart, was not opened. Anything about [ɛ] in Dhaka is Wikipedia's report, not the paper.
- The MSU textbook, the Wisconsin syllabus PDF and the Durham PDF were not opened for this profile. The roadmap already describes what its author saw. This profile does not add claims from them.
- No English-speaker error corpus. The ranking in §4 is an inference.
- Whether the app folds ô into o under romaAlmost. Not measured. §10.
- LangLibra and Latinum are practitioner pages. Their phrases are labelled. They are not evidence of frequency.

## Sources

Opened and used:

- Richard Ishida, "Bengali (Bangla) orthography notes", r12a, https://r12a.github.io/scripts/beng/bn.html
- "Schwa deletion in Indo-Aryan languages", English Wikipedia, https://en.wikipedia.org/wiki/Schwa_deletion_in_Indo-Aryan_languages
- Monojit Choudhury, Anupam Basu and Sudeshna Sarkar, "A Diachronic Approach for Schwa Deletion in Indo Aryan Languages", ACL SIGPHON 2004, https://aclanthology.org/W04-0103.pdf
- Cibu Johny and Martin Jansche, "Brahmic Schwa-Deletion with Neural Classifiers: Experiments with Bengali", SLTU 2018, https://www.isca-archive.org/sltu_2018/johny18_sltu.pdf
- "The Bangla Script", University of Texas at Austin, https://bangla.la.utexas.edu/resources/the-bangla-script/
- "Bengali phonology", English Wikipedia, https://en.wikipedia.org/wiki/Bengali_phonology
- "Bengali grammar", English Wikipedia, https://en.wikipedia.org/wiki/Bengali_grammar
- LangLibra, "Bengali Greetings and Daily Conversation Phrases Reference", updated 26 June 2026. Practitioner. The page was opened; the phrases cited above are from it.
- Latinum Institute, "Lesson 9 Bengali", 30 August 2025. Practitioner. The page links its index at https://latinum.substack.com/p/index
- Pew Research Center, "Facts about Bangladeshis in the U.S.", 1 May 2025, https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-bangladeshis-in-the-u-s/
- Modern Language Association, "Fall 2006 Enrollments in All Languages Except the Top 15". Bengali: 94 enrollments, 12 institutions. The PDF was opened.

Not opened, and not used as evidence: Khan 2010; Thompson's grammar; the MSU, Wisconsin and Durham syllabi; any learner-error blog.
