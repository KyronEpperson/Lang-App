# en-pa cold review (EN-PA-REVIEWER, 2026-11-19)

Saved batch by batch. Scope: every file in `tools/target/pa/` except profile.json. HOLD kept; packs/ and src/ untouched.

## Batch 0: the pron tool (`respell.js`)

Every unique Gurmukhi token in the course (855) was run through the tool and read by eye (scratch `words.tsv`).

### Changes to respell.js
- **Rule:** tippi before ਙ / ਞ now doubles the nasal, as before ਨ ਮ ਣ (`NASALC` gains ṅ ñ): letter names ਙੰਙਾ *ṅaṅṅā*, ਞੰਞਾ *ñaññā* (were *ṅãṅā*, *ñãñā*).
- **EXC (whole-word overrides), with the reason in the file:**
  - ਹਸਪਤਾਲ *haspatāl* (right-to-left deletion gave *hasaptāl*; no general rule tells has-pa-tāl from sam-ajh-dā, so it is listed).
  - Final cluster said as a cluster: ਮਿਰਚ *mirch*, ਨਰਸ *nars*, ਫ਼ਿਲਮ *film*, ਸਿਰਫ਼ *sirf*, ਬਜ਼ੁਰਗ *bazurg*; English -rk loans ਪਾਰਕ *pārk*, ਨਿਊਯਾਰਕ *niūyārk*. Not changed by rule, because Punjabi really keeps the a in the native or long-assimilated ਗਰਮ *garam*, ਦਰਦ *darad*, ਉਮਰ *umar*, ਫ਼ਿਕਰ *fikar*: the same spelling shape goes both ways.
  - ਟੋਰਾਂਟੋ *ṭorāṇṭo* (English loan: real n before the stop, like ਆਂਟੀ *āṇṭī*; the ā is kept because the key is letter for letter).
  - ਹਾਹਾ *hāhā* (letter name; the rule put a high tone on the first ā and silenced the second ਹ).
- Prons rewritten by `repron.js` after the change: 4 (ਮਿਰਚ ਘੱਟ ਪਾਓ ਜੀ।, ਮੇਰੇ ਕੋਲ ਸਿਰਫ਼ ਸੌ ਰੁਪਏ ਹਨ।, ਹਸਪਤਾਲ, ਉਹਨਾਂ ਨੇ ਫ਼ਿਲਮ ਦੇਖੀ।). ਪਾਰਕ, ਨਿਊਯਾਰਕ, ਬਜ਼ੁਰਗ, ਟੋਰਾਂਟੋ and the letter names occur only in extras, notes or table cells, which carry no pron; ਨਰਸ does not occur in the course at all (listed so a future writer gets *nars*). A grep for every old output (mirach, filam, siraf, hasaptāl, naras, pārak, bazurag, hā́hā, ṅãṅā, ñãñā, ṭorā̃ṭo, niūyārak) finds none left anywhere.
- **Inline romanisation check:** scratch `inline.js` re-checks every `<b>Gurmukhi</b> <i>roman</i>` pair in the three lesson files and every romanised "Build … / Type …" prompt against respell (unspaced answer). Result after the tool change: 161 checked, 0 mismatches. A second scratch script, `fillcheck.js`, checks the script-lesson fill items whose meaning starts with a romanisation ("ṭhīk, fine"): 14 checked, 0 mismatches. Not covered by a script: romanisation inside deck notes, `why` lines and the letter tables (checked by the grep above and by eye).

### Writers' reported outputs, settled
| Word | Was | Now | Decision |
|---|---|---|---|
| ਹਸਪਤਾਲ | hasaptāl | haspatāl | EXC |
| ਮਿਰਚ / ਨਰਸ / ਫ਼ਿਲਮ / ਸਿਰਫ਼ | mirach / naras / filam / siraf | mirch / nars / film / sirf | EXC (colloquial *mirach*, *filam*, *siraf* exist; the course shows the standard form) |
| ਟੋਰਾਂਟੋ | ṭorā̃ṭo | ṭorāṇṭo | EXC |
| ਪੈਂਤੀ | paĩtī | paĩtī (kept) | Native word, same rule as ਜਾਂਦਾ *jā̃dā*, ਪੈਂਦਾ *paĩdā*; not used in the course. Native check. |
| ਹਾਹਾ, ਙੰਙਾ, ਞੰਞਾ | hā́hā, ṅãṅā, ñãñā | hāhā, ṅaṅṅā, ñaññā | EXC / rule |
| ਅਧਿਆਪਕ, ਲੁਧਿਆਣਾ | adhiā̀pak, ludhiā̀ṇā | kept, warned | Wiktionary gives only *adhiāpak*, *ludhiāṇā* (no IPA): letters confirmed, tone not. Native check. |
| ਵਧੀਆ | vádhīā | kept, warned | No source found with tone. |
| ਸਰ੍ਹੋਂ | sárhõ | kept, warned | Wiktionary (kaikki) romanises *sarhõ* (no IPA). Tone unverified. |
| ਪਰੌਂਠਾ | paraũṭhā | kept, warned | nasal vowel or *paraunṭhā*: native check. |
| ਜਿਹੀ / ਕਿਹੋ ਜਿਹਾ | jíhī, kího jíhā | kept, warned | class H (ih ≈ é high), consistent with ਕਿਹੜਾ; unverified. |
| ਰਹਿੰਦੇ | ráhinde | kept | class H, agrees with Wiktionary ਰਹਿਣਾ /ɾɛ˦.ɳɑː/ (high on the first syllable). |
| ਸਭ | sábh | kept | class C (final tonal letter → high), the MSU rule. |
| ਸਕੂਲ, ਸਟੇਸ਼ਨ | sakūl, saṭeshan | kept | the Gurmukhi spells the epenthetic a (ਸ is a full letter), and many speakers say it; native check. |
| **One decision for both rows above** | | | The pron follows the standard spoken form of each word: *film*, *mirch*, *sirf* (a final cluster, where the epenthetic a is colloquial) but *sakūl*, *saṭeshan* (an initial s + stop, where Punjabi breaks the cluster in normal speech). It is a judgement per word, not a rule, and it changes what typed romanisation is exact (*sakul* exact, *skul* wrong; *film* exact, *filam* wrong). Native check. |
| ਕਰਨਗੇ / ਬੋਲਣਗੇ | karange / bolaṇge | kept, warned | kar-an-ge, bol-aṇ-ge is the usual spoken form; native check. |
| ਬੱਸ vs ਬਸ | bass | bas for ਬਸ | ਬੱਸ = bus; "just / enough" is now spelled ਬਸ (Wiktionary via kaikki: ਬਸ *bas* "only; enough", ਬੱਸ an alternative form). Done in batch 1. |
| ਪੱ ਤਾ (syllable-spaced answer, lessons-1 `nasal`) | | kept | profile §7 prescribes the spaced form with the addak on the first tile; the unspaced ਪੱਤਾ answer gets the romanised twin. The gen.js warning is the one known, intended case. |

### Numbers 21–99
A list of 21–99 written by the reviewer (spellings not checked against a source) runs with no throw. Warnings: ਚੌਂਤੀ, ਪੈਂਤੀ, ਸੈਂਤੀ (bindi before a stop → nasal vowel), ਇਕਹੱਤਰ, ਬਹੱਤਰ (class S). Doubtful: the -ਹਠ numbers (ਬਾਹਠ *bā́haṭh*: the a after the silent ਹ is probably not said) and the -ਹੱਤਰ numbers. Only ਪੱਚੀ and the tens are taught, so nothing in the course depends on them.

### Tone: verified against a source vs not
Sources opened today: Wiktionary entries through Kiwix mirrors and kaikki.org (Wiktionary data); en.wiktionary.org itself is not on the fetch allowlist.
- **ਨਹੀਂ** *náhī̃*: Wiktionary (Shahmukhi entry نہیں, Punjabi section) gives /nəiː˦/ and /nə˦.ɦiː/: **high tone confirmed**; the second form puts it on the first syllable as the pron does. **Verified.**
- **ਰਹੀ / ਰਹੇ / ਰਿਹਾ / ਰਹੀਆਂ / ਰਹਿੰਦਾ**: Wiktionary ਰਹਿਣਾ gives /ɾɛ˦(ɦ).ɳɑː/ (high on the first syllable) and lists the forms with transliterations only (rihā, rahī, rahe, rahindā). High tone on the first syllable of the verb is verified for the infinitive; for the perfective forms it is **by analogy only**. kaikki's ਕਹੀ (the same shape as ਰਹੀ) gives /kɛː˥/: high tone, which supports *ráhī* / *káhī*. **ਰਹੀ, ਰਹੇ, ਰਹੀਆਂ: supported by analogy (ਕਹੀ); ਰਿਹਾ: not verified.**
- **ਕਿਹਾ**: Wiktionary ਕਹਿਣਾ gives /kɛː˦.ɳɑː/ and lists ਕਿਹਾ (kihā) with no IPA. **Not verified** (by analogy high).
- **ਸਹੀ, ਕਹੀ** (class S): MSU (profile) and kaikki ਕਹੀ /kɛː˥/. **Verified.**
- **ਤੁਹਾਡਾ, ਕਹਾਣੀ** (class A): Wiktionary per the profile; not reopened.
- **Reopened today:** MSU *Basic Punjabi* 1.4, Wikibooks *Punjabi/Gurmukhi/Tone*, Wikipedia *Help:IPA/Punjabi* (mirror).
  - MSU: initial ਘ ਝ ਢ ਧ ਭ low (ਘੜੀ, ਭਾਬੀ), final high (ਸਿੰਘ, ਵਧ, ਲੋਭ), **medial "level"** (ਸੰਘਣਾ, ਕੱਢਣਾ, ਮਝਲਾ, ਆਧੁਨਿਕ); ਹ: initial plain, final high (ਕਹੀ, ਸਹੀ, ਦੇਹ), ਿ + ਹ and ੁ + ਹ give a high, recoloured vowel (ਸ਼ਹਿਰ → shai'ar, ਬਹੁਤ → bau't, **ਜਿਹੜਾ → je'ra, ਸਿਹਤ → se't**). Classes I, C (final), H and S (ਸਹੀ, ਕਹੀ) **verified**.
  - **ਰਿਹਾ, ਕਿਹਾ** (*ríhā*, *kíhā*): same shape as MSU's ਜਿਹੜਾ / ਸਿਹਤ (ਿ + ਹ, high on the i, said é), but MSU's examples have a consonant after the ਹ, not ā. **Supported by analogy, not verified.**
  - **Medial "high" class decision** (ਅੱਧਾ, ਸਿੱਧਾ, ਠੰਢਾ, ਸੰਘਣਾ *sánghṇā*): MSU says **level**, Wikibooks lists medial ਬੋਝਾ under high but its page contradicts itself. **Not resolved: still the first item for the native check.** If the native speaker agrees with MSU, the fix is one line in `tone()` (no accent when the letter is medial after a closed syllable) plus repron.
  - Wikipedia's IPA key confirms only the accent convention (acute high, grave low) and ih / uh ≈ é / ó.

## Batch 1: decks-a.js, decks-b.js (read in full, every card)

Both decks are in good shape: grammar, genders and notes are right as far as I can judge; no wrong-language card found. Edits:
- **Wrong language (spelling):** ਬੱਸ used for "just / enough" in two card targets → **ਬਸ** (Wiktionary / kaikki: ਬਸ "only; enough", ਬੱਸ listed only as an alternative form; ਬੱਸ stays for the bus). Changed with them: the two EXAMPLES / DIALOG keys and lines in extra-b, a third line in extra-b (ਬਸ ਥੋੜ੍ਹਾ ਥੱਕਿਆ…), the `food` body (ਬਸ ਜੀ); prons regenerated (*bas*). Native check: many writers spell both ਬੱਸ.
- **Wrong teaching (gloss):** ਮੈਨੂੰ ਜਾਣਾ ਪੈਂਦਾ ਹੈ। "I have to go." → "I have to go. (as a rule)", note now says ਪੈਂਦਾ ਹੈ is regular obligation and gives ਪਵੇਗਾ for now / later (settles the open point "ਪੈਂਦਾ ਹੈ vs ਪਵੇਗਾ glosses differ"; lesson must-can checked in its batch).
- **Wording:** ਕੜੀ note gains "Feminine" (every noun card gives its gender) and names ਘੜੀ's meaning; ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ। glossed "(formal, to a guest)" and pointed to ਜੀ ਆਇਆਂ ਨੂੰ, so the two "Welcome!" cards differ.
- **Open points settled here:** ਕੀ is a card only in Vowel signs (ਕੀ as "what?" is taught in Questions through ਇਹ ਕੀ ਹੈ? and ਕੀ ਤੁਸੀਂ ਠੀਕ ਹੋ?): fine. ਕੜੀ "link (in a chain)" is a correct gloss (the dish is ਕੜ੍ਹੀ); ਕੋਹੜਾ is not a card (lesson triple only, as the profile says). Its spelling: the profile follows Wikibooks (ਕੋਹੜਾ, *kóhṛā*); Wikipedia's IPA key spells the same word ਕੋੜ੍ਹਾ (*kóṛhā* by the tool: the same high tone on o). Kept as the profile has it; listed as a doubt. Genders on cards: ਮਦਦ f (ਮੇਰੀ ਮਦਦ), ਦਾਲ f, ਮੇਜ਼ m, ਮਿਰਚ f, ਹਸਪਤਾਲ m: consistent everywhere (not source-checked). Near-duplicates across the deck halves: only the uncle / brother / thank-you / welcome sets, all told apart by the meaning's bracket; none removed.
- Pron: all card prons regenerated by repron (6 rewritten in total so far). Validator PASS.

## Batch 2: extra-a.js, extra-b.js (read in full: 100 dialogues, 56 examples, 18 patterns)

Natural, well-localised Punjabi; no grammar error found. Edits:
- **Wording:** extra-a ਖਾ dialogue: ਹੁਣੇ ਖਾਂਦਾ ਹਾਂ is "I'll eat right now", not "I'm eating right now".
- **Wrong language (spelling):** the three ਬੱਸ = "just / enough" lines → ਬਸ (see batch 1).
- **Wording / consistency:** extra-a ਫਲ dialogue: ਮੈਨੂੰ ਅੰਬ ਪਸੰਦ ਹੈ glossed "I like mango" (singular), since `like-need` teaches ਮੈਨੂੰ ਅੰਬ ਪਸੰਦ ਹਨ for "I like mangoes".
- Checked and kept: ਤੁਸੀਂ ਕੱਲ੍ਹ ਕਿੱਥੇ ਸੀ? (ਸੀ with ਤੁਸੀਂ, everyday speech as the profile says; written ਸੋ); ਡਾਕਟਰ ਆ ਰਹੇ ਹਨ for "the doctor is coming" (respect plural); the price lines (ਵੀਹ ਰੁਪਏ ਦੀ for ਚਾਹ, ਪੰਜ ਸੌ ਰੁਪਏ ਦੀ for ਕਮੀਜ਼: ਦਾ / ਦੀ agrees with the thing priced, which settles the open point on the price pattern).

## Batch 3: lessons-1.js (vowels, letters-1, letters-2, nasal, tones, greetings, hona, intro, questions; read in full)

Accurate and well paced. Edits:
- **Wrong teaching:** `nasal` said the subscript ੍ਹ "also gives a high tone"; at the start of a word it gives a low tone (ਨ੍ਹਾਤਾ) and in ਪੜ੍ਹਾਈ the low tone falls on the ā. Now: "੍ਹ is not said as an h: like ਹ after a vowel, it changes the tone (lesson 5)".
- **Body markup (all three lesson files, scripted):** 219 runs (later edits added 4 more `<b>`: net +151 in lessons-1, +29 in lessons-2, +43 in lessons-3) of Gurmukhi in body prose, headings and plain table cells that were not inside `<b>` were wrapped in `<b>` (open point "some Gurmukhi in body prose not inside <b>"). Table cells with `class="k"` and example rows were left alone.
- **Open point «ਪੱ ਤਾ»:** kept (profile §7 prescribes the spaced, addak-on-first-tile answer; the unspaced ਪੱਤਾ gets the romanised twin; the gen.js warning is the intended one).
- Checked and kept: all script-stage hinges (sound strand), the romanised Build/Type prompts (all match respell), the ਤੁਸੀਂ / ਤੂੰ verb forms, ਕੀ-question answers with and without ਕੀ.

## Batch 4: lessons-2.js (gender, adjectives, possessive, numbers, postpositions, habitual, imperative, like-need, food; read in full)

Solid; agreement and oblique are taught correctly and consistently. Edits:
- **Practice (distractor that is a common variant):** `possessive` mc "his / her sister": the wrong option ਉਹ ਦੀ ਭੈਣ is close to the very common spoken ਉਹਦੀ ਭੈਣ → replaced by ਉਸ ਦੇ ਭੈਣ (clearly wrong agreement); the body now says that speech also has the fused ਉਹਦਾ / ਉਹਦੀ (open point "ਉਹ ਦੀ as a wrong twin of ਉਸ").
- **Practice (distractor):** `imperative` mc "Don't worry": the wrong option ਨਾ ਚਿੰਤਾ ਕਰੋ (word order heard in speech) → ਚਿੰਤਾ ਨੂੰ ਕਰੋ; ਚਿੰਤਾ ਨਹੀਂ ਕਰੋ stays wrong, as the profile rules (§4.11), and the why now names all three wrong options.
- **Open points checked here:** ਤੁਸੀਂ … ਰਹਿੰਦੀਆਂ ਹੋ is named as a variant in `habitual`; no practice item asks "(to a woman)", so nothing rejects either form. Dropping ਹਾਂ / ਹੈ after ਨਹੀਂ: taught in `questions`, `habitual`, `like-need`; the habitual mc model drops ਹਾਂ and no option with ਹਾਂ kept competes with it. Genders ਕਾਰ f, ਫ਼ੋਨ m, ਮਦਦ f, ਦਾਲ f, ਗਿਲਾਸ m, ਮੇਜ਼ m: consistent across all files and with the profile (not checked against a dictionary; ਮੇਜ਼ is on the native-check list). ਭਰਾਵਾਂ no longer occurs anywhere. Price pattern ਰੁਪਏ ਦਾ / ਦੀ agrees with the thing priced: right.

## Batch 5: lessons-3.js (continuous, time, have, directions, si, past, future, compare, must-can; read in full)

Correct and consistent with the profile. Edits:
- **Practice (distractor that is a regional / Hindi-influenced variant):** `time` check "How do you say 2:30?": wrong option ਸਾਢੇ ਦੋ ਵਜੇ → ਸਵਾ ਦੋ ਵਜੇ (2:15); `time` mc "1:30": wrong option ਸਾਢੇ ਇੱਕ ਵਜੇ → ਪੌਣੇ ਦੋ ਵਜੇ (1:45); whys updated. The teaching (ਡੇਢ, ਢਾਈ; ਸਾਢੇ from 3:30) stays (open point "ਸਾਢੇ ਇੱਕ / ਸਾਢੇ ਦੋ marked wrong": no longer marked wrong anywhere, nor taught).
- **Wrong teaching (overstatement):** `have`: "ਮੇਰੇ ਕੋਲ ਇੱਕ ਭਰਾ ਹੈ … sounds as if your brother is standing next to you" → "To most speakers … sounds odd: ਕੋਲ means 'near' …". The mc item that marks it wrong stays (profile §4.6 rule); listed for the native check (open point "ਮੇਰੇ ਕੋਲ for relatives").
- **Practice (tiles):** six order items (`continuous`, `time`, `have`, `directions`, `future`, `must-can`) carried a "?" on the last tile; removed, as in every other order item.
- **Wording:** `time` names ਸ਼ਨਿੱਚਰਵਾਰ beside ਸ਼ਨੀਵਾਰ, since the Time deck uses ਸ਼ਨਿੱਚਰਵਾਰ.
- **Open points checked:** `si` says ਸੀ is also the everyday form with ਅਸੀਂ / ਤੁਸੀਂ and teaches ਸਨ for plural and respected subjects; ਸੀ never appears as the only error in a wrong option, so a learner who says ਉਹ ਘਰ ਸੀ for "they" is never marked wrong for it (fine, since speech does this). `past`: ਉਸ ਨੇ only, with ਉਹ as the wrong twin in three items (order "She drank tea", fill `__ ਨੇ ਦੁੱਧ ਪੀਤਾ`, type "He ate"), as profile §7 prescribes; kept. Spoken Punjabi also has the fused ਉਹਨੇ, close to what a learner builds from ਉਹ + ਨੇ, so this is on the native-check list. `must-can`: ਮੈਂ + infinitive + ਪੈਂਦਾ is marked wrong (profile §4, §8); colloquial ਮੈਂ ਜਾਣਾ ਹੈ is not taught. ਪੈਂਦਾ ਹੈ (as a rule) vs ਪਵੇਗਾ (will have to; also "I have to go" when leaving): the lesson already said this and the card now agrees. `future` paradigm (ਕਰਨਗੇ, ਕਰੋਗੀਆਂ …) is standard.

## Final state
- `node tools/target/repron.js pa`: 541 prons read, 0 rewritten (6 rewritten earlier in the review). `node tools/target/gen.js pa`: 27 lessons, 18 decks, 315 cards, written to the HOLD temp path; one intended warning («ਪੱ ਤਾ»). `node tools/target/validate.js pa`: **PASS**. `node --check` passes on every JS file. HOLD kept; packs/ and src/ untouched.
- Lesson bodies: food, have, directions, past, future are at 254–258 English words (above the 250 floor; not padded).
- Read in full: every deck card, dialogue, example, pattern, lesson body, check and practice item in the seven content files, and respell.js. Profile md read in full; profile.json settings read (lessons / decks lists not re-read line by line).

## Ten things a native speaker should check first
1. The medial-tonal-letter class decision: ਅੱਧਾ *áddhā*, ਸਿੱਧਾ *síddhā*, ਠੰਢਾ *ṭháṇḍhā*, ਬੁੱਢਾ (high in the pron; MSU says level).
2. ਰਿਹਾ *ríhā*, ਕਿਹਾ *kíhā*, ਰਹੀ / ਰਹੇ / ਰਹੀਆਂ *ráhī…* (supported only by analogy with ਜਿਹੜਾ, ਸਿਹਤ, ਕਹੀ).
3. Class A low tone on ā: ਤੁਹਾਡਾ *tuhā̀ḍā*, ਅਧਿਆਪਕ *adhiā̀pak*, ਲੁਧਿਆਣਾ *ludhiā̀ṇā*, ਤਰ੍ਹਾਂ; and class S ਵਧੀਆ *vádhīā*, ਸਰ੍ਹੋਂ *sárhõ*, ਸਹੇਲੀ.
4. Epenthetic a, one decision per word: *film*, *mirch*, *sirf*, *nars*, *pārk* vs *sakūl*, *saṭeshan*, *garam*, *darad*; and ਕਰਨਗੇ *karange*, ਬੋਲਣਗੇ *bolaṇge*.
5. Bindi before a stop: ਪਰੌਂਠਾ *paraũṭhā*, ਪੈਂਤੀ *paĩtī* (nasal vowel) vs ਆਂਟੀ *āṇṭī*, ਟੋਰਾਂਟੋ *ṭorāṇṭo* (real n).
6. ਬਸ (just / enough) vs ਬੱਸ (bus): the course now spells them apart (ਬਸ, ਮੇਰਾ ਢਿੱਡ ਭਰ ਗਿਆ।, ਮੈਂ ਬਸ ਦੇਖ ਰਹੀ ਹਾਂ।, ਬਸ ਜੀ).
7. ਮੇਰੇ ਕੋਲ ਇੱਕ ਭਰਾ ਹੈ marked wrong for relatives (`have` mc, Traps card ਮੇਰਾ ਇੱਕ ਭਰਾ ਹੈ।).
8. ਮੈਂ ਜਾਣਾ ਪੈਂਦਾ ਹੈ marked wrong (`must-can`), and the glosses ਮੈਨੂੰ ਜਾਣਾ ਪੈਂਦਾ ਹੈ "I have to go (as a rule)" vs ਮੈਨੂੰ ਜਾਣਾ ਪਵੇਗਾ "I'll have to go / I have to go (leaving)".
9. ਚਿੰਤਾ ਨਹੀਂ ਕਰੋ marked wrong in commands (`imperative`, profile §4.11), and the past without ਨੇ for ਮੈਂ / ਤੁਸੀਂ (ਮੈਂ ਰੋਟੀ ਖਾਧੀ।).
10. ਉਸ ਨੇ with ਉਹ (+ ਨੇ) as the wrong twin in `past`, given spoken ਉਹਨੇ; ਸੀ with ਤੁਸੀਂ / ਅਸੀਂ in everyday speech (ਤੁਸੀਂ ਕਿੱਥੇ ਸੀ?); ਮੇਜ਼ masculine; ਕੋਹੜਾ vs ਕੋੜ੍ਹਾ.
