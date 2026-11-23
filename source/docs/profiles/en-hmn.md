# English speakers learning White Hmong: course profile

Course `en-hmn`: White Hmong (Hmoob Dawb) for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are White Hmong in the **RPA** (Romanized Popular Alphabet).

- **Twins.** The machine-readable twin is `tools/target/hmn/profile.json`, which the lead writes from §8 and §9. The spelling authority is `tools/hmong/RPA.md`. The word authority is `tools/hmong/GLOSSARY.tsv` (1,274 headwords, each with a source).
- **No roadmap.** `docs/roadmaps/` has no `hmn.json`, so the lesson list in §8 is this profile's proposal.
- **Models.** `docs/profiles/en-kn.md` for structure; `docs/profiles/en-chr.md` for the no-voice decisions (§2.5).

**Evidence tags.**
- **[source id]**: an opened source (`tools/hmong/SOURCES.md`).
- **[inference]**: this profile's reasoning.
- **[native check]**: must be confirmed by a native White Hmong reader before writers rely on it.

**The author is not a Hmong speaker.** Every Hmong *word* in this file is in the glossary. A script checked this; the only exceptions are *lawd*, *nkees* and *ntsab*, which are discussed as unattested. Phrases and sentences that combine glossary words (for example *lub tsev ko*, *los noj*, the lesson-table examples) are **[native check] as a whole, whether or not they are marked**.

## 1. Summary

- **Which Hmong?** White Hmong as written by the US community, in RPA, syllable-spaced (`me nyuam`, `poj niam`). Green Hmong (Mong Leeg) forms appear only in notes [RPAW, JXD, BRU].
- **No voice.** No Hmong text-to-speech was found in Microsoft Translator's table (Hmong Daw: text and image only) or the Google Translate TTS code list [MST, GTTS] (§2.5).
  - `voiceMatch: "^(hmn|mww)(-|_|$)"`, so an English voice never reads Hmong.
  - Every card target and example needs a **recorded native clip** before the course can teach tones by ear.
  - Until then the course teaches tones by letter + contour description + listening links.
- **Pronunciation aid (§6).** RPA already shows every sound, tone included. The `pron` field holds a **generated tone line**: one tone word per syllable, from the tone letter (`nyob zoo` → `high · mid`). It is never typed by hand.
- **Biggest traps (§4):**
  - reading tone letters as consonants (`Hmoob` is *Hmong* with a high tone, no b sound);
  - RPA letter values (x = s, s = sh, z = zh, r = retroflex t, c = ty, w = a vowel, q = a k far back);
  - classifiers (`lub kaus`, not `tus kaus` [UWC]);
  - adjective and demonstrative after the noun;
  - no "is" before an adjective (`Kuv zoo siab`);
  - `yog` vs `nyob`;
  - kinship by the speaker's sex.
- **Standing rule (§7):** at least 2 order and 2 type items per set hinge on **(a) classifiers / noun-phrase order** or **(b) tone letters**.
- **Lessons and decks:** 26 lessons in 5 stages (§8); 18 decks in 6 groups, including a **heritage** group (talking with elders, New Year, family events) (§9).
- **Typing (§10):** RPA is plain ASCII, so typing is easy. The matcher must **never** fold tone letters (`pob` ball ≠ `pov` throw ≠ `pog` grandmother) and must fold spaces and hyphens (`menyuam` = `me nyuam`).

## 2. Variant, register and voice

### 2.1 Variant: White Hmong, US usage, in RPA

- **Why White.** RPA was built on White Hmong, "chosen as the standard variant" [RPAW]. White and Green are mutually intelligible ("comparable to British and American English", the CDC as quoted by WPH), and about 30% of words differ [JXD]. "Green speakers are more likely to learn White" [WPH].
- **Say it plainly to users** (course blurb and lesson 1): "This course teaches White Hmong (Hmoob Dawb) as written by Hmong Americans, in the Hmong Latin alphabet (RPA). Green Hmong (Mong Leeg) speakers will understand you, and the notes show where Green Hmong differs."
- **Green differences in notes only** [JXD, BRU]:

| White | Green | Meaning |
|---|---|---|
| dev | dlev | dog |
| dub | dlub | black |
| Hmoob | Moob | Hmong |
| hnub | nub | day, sun |
| niam | nam | mother |
| mus | moog | go |
| hais lus | has lug | speak |
| nej | mej | you all |
| nws | nwg | he / she |
| lawv | puab | they |
| tab tom | taab tom | in the middle of [WPH] |

### 2.2 Spelling: one form per word

- **Spaced, one syllable per space,** as GLOSSARY.tsv column 1. The sources mix joined and spaced forms (menyuam / me nyuam, pojniam / poj niam, totaub / to taub, haujlwm / hauj lwm; RPA.md §6). Reading speed for connected text does not differ between the two [VW].
- **Accepted in typing:** the joined forms (§10). **Shown in notes:** "also written menyuam".
- **Words whose tone letter changes in a phrase** are copied as the glossary writes them:
  - `tus` / `tug` (classifier) [WHL, W-KK];
  - `ib/ob/peb/plaub/tsib/cuaj puas` but `rau/xya/yim pua` (hundreds) [BSL];
  - the -d short forms of locatives (`nram` / `nrad`, `tom` / `tod`, `saum` / `saud`) [BSL].
- **Never** teach a rule that predicts these changes: no opened source states one.

### 2.3 "You", respect and kinship

- **Pronouns, with the dual** (Hmong has a "two people" form; English does not):

| Person | Singular | Dual | Plural |
|---|---|---|---|
| 1st | kuv (I, me, my) | wb (we two) | peb (we, 3+) |
| 2nd | koj (you) | neb (you two) | nej (you, 3+) |
| 3rd | nws (he, she, it) | nkawd (they two) | lawv (they, 3+) |

  [WHL, W-KK, BSL]. No opened source shows a polite vs familiar "you"; *koj* is used to strangers in all phrase sources [OMN, FG, BSL].
- **Politeness is in words:**
  - *thov* "please" (thov hais dua = please say it again) [OMN];
  - *… puas tau?* "may I / could you?" [BSL];
  - the softening final *os* [WHL] ("sounds good to Hmong ears").
- **Kinship terms change with the speaker's sex** [WHL, GYL]:

| | Male speaker says | Female speaker says |
|---|---|---|
| older brother | tij laug | nus |
| younger brother | kwv | nus |
| sister | muam | viv ncaus |

  *Nus muag* = brothers and sisters together [ECM, W-KK].
- **Kinship by side:**
  - *pog* = paternal grandmother [W-KK]; *yawg* = grandfather [ECM] (father's side: native check);
  - *niam tais* / *yawm txiv* = grandmother / grandfather and mother-in-law / father-in-law [ECM] ("mother's side" is the usual description but no opened source states it: native check);
  - *txiv hlob* / *txiv ntxawm* = father's older / younger brother [ECM, GYL];
  - *dab laug* = mother's brother [ECM, GYL];
  - *phauj* = father's sister [ECM, GYL].

  All [native check] for everyday use.
- **Teaching consequence:** the `family` lesson asks the learner to choose a term by "who is speaking", and cards carry «(said by a man)» / «(said by a woman)» in the meaning so that no two cards share a meaning.

### 2.4 Greetings and set expressions an A1 learner needs

| Hmong | English | Note | Source |
|---|---|---|---|
| Nyob zoo | Hello | any time of day; "Nyob zoo sawv ntxov" is "not common" | OMN, FG |
| Koj nyob li cas? / Koj puas nyob zoo? | How are you? | | OMN, FG |
| Kuv nyob zoo | I'm fine | | OMN, FG |
| Koj lub npe hu li cas? | What's your name? | | OMN |
| Kuv lub npe hu ua … | My name is … | | OMN, FG |
| Koj tuaj qhov twg tuaj? | Where are you from? | | OMN, BSL |
| Ua tsaug | Thank you | | OMN, W-KK |
| Tsis ua li cas | You're welcome / It's nothing | | OMN |
| Thov txim | Sorry | | OMN |
| Thov zam kev | Excuse me (let me pass) | | OMN |
| Sib ntsib dua | Goodbye (see you again) | | OMN, FG |
| Mus zoo | Goodbye (to the one leaving: go well) | | FG, UMD |
| Mus ho tuaj | Come again (to a departing guest) | | WHL |
| Koj tuaj los? | You've come! (greeting on arrival) | | WHL |
| Koj noj mov lawm los tsis yog? | Have you eaten yet? | a check-in | BSX |
| Kuv tsis nkag siab / Kuv tsis to taub | I don't understand | | WV, OMN, BSL |
| Thov hais dua | Please say it again | | OMN |
| Hais dua puas tau? | Could you say it again? | | BSL |
| Zoo siab tau ntsib koj | Nice to meet you | | WV, BSL |
| Pw zoo os | Good night | | OMN |
| Zoo siab hnub yug | Happy birthday | | OMN |

### 2.5 Voice: none found, so the course is text-first with recorded clips

**Verified absences** (opened 2026-11-23):
- **Microsoft Translator.** The table row for Hmong Daw is "Yes | | Yes |": text and image translation only; the Text-to-speech column is empty [MST].
- **Google Translate TTS.** The gTTS language list goes hi → hr with no `hmn` [GTTS].
- **Azure.** Microsoft's Tech Community post on low-resource neural voices has no Hmong among its samples [AZB]. This is not proof of absence.

**Not verified:**
- the full Google Cloud TTS table (only 100k of 565k characters were read);
- Android and iOS device voices.

**Decisions (as en-chr §2.6):**
1. **`voiceMatch: "^(hmn|mww)(-|_|$)"`.** Only a voice tagged Hmong can be chosen; an English or Vietnamese voice must never read RPA, because it would pronounce the tone letters. With no match, the app's "No voice for this language on this device." toast appears once. Lead request: change the toast text to "No Hmong voice exists yet: read the tone line under each card."
2. **Record native clips** (two speakers, one woman and one man, White Hmong, US) for every card target and every example row, into `audio/hmn/index.json`. This is the only way the course can teach tones by ear. Budget it before release.
3. **Until clips exist,** no item may depend on hearing:
   - sound lessons describe each tone in words (§6);
   - the listening-type practice (hear → type) is off for this course.
4. **Point learners to real listening** (links only; no reuse without a licence):
   - Jay Xiong's *Learn Hmong the Jay Way* materials (hmongdictionary.com PDFs; a Udemy course of the same name appeared in search) [JXT];
   - StudyHmong's video lessons (studyhmong.com) [opened tag page];
   - family members.

   The `tones` lesson ends with "Ask a Hmong speaker to say *pob, poj, pov, po, pos, pog, pom* for you."

### 2.6 Voice of the English text

Friendly, plain American English for an adult with no grammar terms. Explain by contrast ("English says…, Hmong says…"). Hmong in `<b>` in lesson HTML, the tone line in `<i>` at first mention. Keep these Hmong words in English text with a gloss, never translated away:
- *qeej* (bamboo reed pipe) [FG, STO, W-KK];
- *paj ntaub* (needlework / story cloth) [FG, W-KK];
- *noj peb caug* (New Year celebration) [AAE];
- *pov pob* (ball toss) [AAE];
- *hu plig* (soul calling) [FG];
- *xeem* (clan) [FG, W-KK].

### 2.7 Hmong text conventions (every file)

- ASCII RPA only; no diacritics; no Pahawh, Lao or Thai script (RPA.md §5).
- Capitals:
  - sentence start;
  - peoples, languages and places: Hmoob, lus Askiv, Amelika, Nplog teb, Thaib teb [OMN, BSX, WHL];
  - personal and clan names.
- Western punctuation; Western digits; clock times as in US Hmong texts («7 sawv ntxov», 7 a.m.) [PGE].
- Day names: **English day names after *hnub*** («hnub Monday») as US agency texts write them [PGE, MNC], until a native settles the numbered days (§11).
- Reduplication written out (kheej kheej) [W-SW]; never 7 / 2 / ๆ [LY].
- A Green-only spelling (dl-, -aa-) in a card target is a validator failure (RPA.md §5 rule 5).

## 3. Glossary (English terms the course uses)

| Term | Meaning in this course |
|---|---|
| tone | the pitch / voice pattern of a syllable; there are 7 + the -d variant |
| tone letter | the last letter of a syllable: b, j, v, s, g, m, d, or none (= mid). It is silent; it is not a consonant |
| tone line | the `pron` field (§6) |
| mid tone | the tone with no letter |
| breathy, creaky | the voice quality of the -g and -m tones [RPAW, BRU] |
| pre-nasalised | a consonant spelled with a leading n (np, nt, nk, nq, ntx, nts, nc, nr) |
| aspirated | spelled with h after the consonant (ph, th, kh, qh, txh, tsh, ch, rh) |
| voiceless nasal | hm, hn, hny, hml (White Hmong only) |
| nasal vowel | ee, oo (double letter) |
| classifier | the word between a number (or *this / that*) and a noun: tus, lub, daim, rab, txoj, phau, zaj, tsob, nkawm, cov … |
| plural classifier | **cov**, which replaces the classifier for a group [UWC, BS1011] |
| noun phrase | number + classifier + noun + adjective + this / that [WPH] |
| aspect marker | tau, lawm, yuav, tab tom, twb, tseem, nyuam qhuav, mam li [WNT, WPH] |
| serial verbs | several verbs in a row with one subject [WPH] |
| dual | the "two people" pronouns wb, neb, nkawd |
| locative | the place words pem, nram, tom, tim, ntawm, hauv, saum, nraum [W-KK, BSL] |
| White Hmong / Green Hmong | Hmoob Dawb / Mong Leeg (Hmoob Leeg in W-KK; moob leeg, moob ntsuab in UMD) |

## 4. Error zones of English speakers, ranked

[inference] from the structure in the sources; no study of English speakers learning Hmong was found.

1. **Tone letters read as consonants.** `Hmoob` said "h-moob-b", `nyob` "nyob", `kuv` "kuv". Every syllable ends in a vowel; the last letter is a tone [RPAW]. → `tones` lesson first; the tone line under every card.
2. **RPA letter values.** x = /s/, s = /ʂ/ (like *sh*), z = /ʐ/ (like the *s* in *measure*), r = /ʈ/ (a t with the tongue curled back), c = /c/ (like *ty* in *got you*), xy = /ç/, q = /q/, tx = /ts/, ts = /ʈʂ/ (like *ch*), w = the vowel /ɨ/, hl = /ɬ/ [RPAW]. → consonant lessons.
3. **Tones confused or ignored.** pob ball / poj female / pov throw / po spleen / pos thorn / pog grandmother / pom see [RPAW]. → tone minimal sets in every early deck; strict typing (§10).
4. **Classifiers.** Missing (`ib dev ✗ → ib tug dev`), or the wrong one: `tus kaus ✗ → lub kaus` "umbrella" is the UW page's own example of a common beginner mistake [UWC].
   - *tus* = animals, people, long rigid things;
   - *lub* = round or bulky things, buildings, abstract things;
   - *daim* = flat things;
   - *rab* = tools;
   - *txoj* = long flexible things, life, roads;
   - *phau* = books;
   - *zaj* = songs, stories, speeches;
   - *tsob* = plants;
   - *nkawm* = pairs;
   - *cov* = plural [UWC, W-KK, BSL].

   → the `classifiers` lesson and the standing rule.
5. **Noun-phrase order.** `liab tsheb ✗` → **lub tsheb liab** (CLF car red); "this house" = **lub tsev no** (CLF house this). The order is from WPH and the demonstratives from BS1011, but both phrases were composed from glossary words [native check]. Possessor first, as in English: **kuv lub tsheb** "my car" [WPH].
6. **Adding "is".** `Kuv yog zoo siab ✗ → Kuv zoo siab` "I'm happy" [BSL]; adjectives act as verbs ("kuv siab zoo" = I am nice) [UWB]. *Yog* is for "X is a Y" (nov yog lub tsev, this is the house), and *nyob* for place (kuv nyob hauv lub tsev, I'm in the house) [UWB].
7. **Negation and questions.**
   - *tsis* before the verb (Kuv tsis paub, I don't know) [OMN];
   - a yes / no question puts *puas* before the verb (Koj puas hais lus Askiv?) [OMN];
   - or ends with *los tsis yog?* "or not?" [BSX];
   - question words stay in place (Koj tuaj qhov twg tuaj?) [OMN];
   - "don't!" = *tsis txhob* + verb [PVI, WNT].
8. **Tense expected on the verb.** Hmong uses time words and optional markers [WPH, WNT]:
   - *Nag hmo kuv mus tom khw* "Yesterday I went to the store";
   - *Kuv noj mov lawm* "I've eaten";
   - *Lawv tab tom haus dej* "They are drinking water" (White form of WPH's Green example);
   - *Kuv yuav mus* "I will go" (White form of WPH's Green example «Kuv yuav moog»; native check).
9. **Serial verbs.** English *and / to* added between verbs; Hmong strings them (WPH: up to five) [inference on the error].
10. **Kinship by sex of speaker** (§2.3).
11. **Pre-nasalised and aspirated onsets** said as English b / d / g or plain t [RPAW].
12. **Numbers:**
    - *caug* after 3–5 tens but *caum* after 6–9 (peb caug 30, rau caum 60) [WV, OMNN, BSL];
    - *puas / pua* for hundreds [BSL];
    - 20 = *nees nkaum* (not "ob kaum") [WV, OMNN];
    - 10,000 = *kaum txhiab* or *ib vam* [WV, BS1011].

## 5. Learners: who, why, what first

- **Heritage learners** (the largest group) [inference from PEW]:
  - **Who.** 69% of the 330,000 Hmong-alone Americans are US-born, and 85% of them are English-proficient [PEW]. Many understand some spoken Hmong but cannot read RPA, mix up tones, and lack polite and kinship vocabulary for elders.
  - **What first:** reading RPA, tones, kinship, greetings to elders, food, New Year and family events.
- **General learners:** partners and in-laws, teachers, nurses, social workers and interpreters in Minnesota, Wisconsin and California. The MDH, WCG and UW nursing glossaries exist because these workers need Hmong [MDH, WCG, UWNP].
  - **What first:** greetings, questions, numbers, health and help.
- **Both tracks share** stages 1–3 (§8); the heritage group of decks (§9) and two heritage lessons are optional extras.

## 6. Pronunciation aid (`pron`): the reading guide and the tone line

RPA is a phonemic Latin spelling with the tone written as a final letter [RPAW]. So the card target already shows the sound, and the aid shows only what an English reader cannot see: **the tone**.

**6.1 The tone line (exact format).**
- One word per syllable, separated by ` · `, generated from the tone letter by a lead-built `tools/target/hmn/toneline.js`. The table is in 6.2; the tool throws on anything RPA.md marks ILLEGAL.
- Examples:
  - `nyob zoo` → `high · mid`
  - `ua tsaug` → `mid · falling-breathy`
  - `kuv hlub koj` → `rising · high · falling`
- `pronPattern`: `^(high|falling|rising|mid|low|falling-breathy|creaky|rising-final)( · (high|falling|rising|mid|low|falling-breathy|creaky|rising-final))*$`.
- English words kept in Hmong text (hnub Monday) get `—` for the English syllables. Lead decision: or the card avoids them.

**6.2 The eight tone spellings** [RPAW labels; JXT and BRU descriptions attributed; memory aids are this profile's]:

| Letter | Tone line word | RPAW | JXT | BRU (Mong Leng, Chao) | Minimal set | Memory aid for English speakers |
|---|---|---|---|---|---|---|
| -b | high | high | "Cim Siab", highest pitch, like *BOT-* in *bottom* | 45 | pob "ball" | **b**ig and high: a ball thrown up |
| -j | falling | high falling | the "hey!" tone | 52 | poj "female" | like a sharp "Hey!": dej "water" |
| -v | rising | mid rising | "Cim Kuv", like *SEC-* in *section* | 24 | pov "throw" | a question-like rise: kuv "I" |
| (none) | mid | mid | "blank", the note *Re* | 44 | po "spleen" | flat, speaking voice |
| -s | low | low | "Doe" pitch, which JXT calls **middle** | 33 | pos "thorn" | low and level: mus "go" |
| -g | falling-breathy | low falling, breathy | "Cim Neeg", like *-tion* | 33, breathy | pog "grandmother" | a sigh: neeg "person" |
| -m | creaky | creaky (low) | "Cim Niam", lowest, like *-tom* in *bottom* | 31, creaky | pom "see" | a low creak at the end: niam "mother" |
| -d | rising-final | phrase-final low-rising variant of -m | starts at M, rises to V | 213 | tod "over there" | only at the end of a phrase: ntawd, nkawd, tod |

**6.3 The reading guide (lesson 1, ready to paste)** [RPAW for values; the English comparisons are inference]:
- **The last letter is silent.** If a syllable ends in b, j, v, s, g, m or d, that letter tells you the tone. It is not a sound. *Hmoob* is "Hmong" (with a high tone), not "h-moo-b".
- **Double vowel = nasal vowel:** *ee* ≈ "eng" (neeg), *oo* ≈ "ong" (zoo, Hmoob).
- **w is a vowel,** like the *i* in *roses* said with spread lips: *tw* "tail", *pw* "lie down".
- **Vowel pairs:** ia ≈ "ee-uh" (niam), ua ≈ "oo-uh" (ua, kua), ai ≈ "eye" (hais), au ≈ "ow" (hau), aw ≈ "a + w" (sawv).
- **Letters that mean something else than in English:**

| Letter | Sound | Example |
|---|---|---|
| x | English s | xav "think" |
| s | like sh | siab "liver, heart" |
| z | like the s in *measure* | zoo "good" |
| r | a t with the tongue curled back | riam "knife" |
| c | like ty in *got you* | cuaj "nine" |
| xy | a soft hiss, like the h in *huge* | xyoo "year" |
| q | a k made far back in the throat | qaib "chicken" |
| tx | ts as in *cats* | txiv "father" |
| ts | like ch, tongue curled back | tsev "house" |
| hl | a breathy l (Welsh *ll*) | hlub "love" |
| d | English d (White Hmong only) | dej "water" |
| y, v, f, h, l, m, n | as in English | |

- **h after a consonant = a puff of air:** ph, th, kh, qh, txh, tsh, ch, rh (*phooj ywg* "friend").
- **h before a nasal = a breathy nasal:** hm, hn, hny, hml (*hmo* "night", *hnub* "day").
- **n before a consonant = a nasal start:** np ≈ "mb", nt ≈ "nd", nk ≈ "ngg", nq ≈ "ng + far-back g", ntx ≈ "ndz", nts ≈ "ndj" (*npua* "pig", *ntawv* "paper", *nkauj* "song"). With h after, it is a nasal plus a puff (*nphau*, *ntshai*).
- **No consonant ever ends a syllable.**

**6.4 Card front:** the RPA target, with the tone line underneath, shown by default for the whole course (no voice, as en-chr and en-nan do).

## 7. Standing practice rule

`"standingRule": { "keywords": "\\bclassifiers?\\b|\\btus\\b|\\blub\\b|\\bdaim\\b|\\brab\\b|\\btxoj\\b|\\bphau\\b|\\bzaj\\b|\\btsob\\b|\\bnkawm\\b|\\bcov\\b|\\bafter the noun\\b|\\btone letters?\\b|\\b(?:high|falling|rising|mid|low|breathy|creaky) tone\\b|\\bpre-?nasali[sz]ed\\b|\\baspirated\\b", "flags": "i", "minOrder": 2, "minType": 2 }`

- **Strand (a), the noun phrase:**
  - the classifier is chosen by shape / kind;
  - number + classifier + noun;
  - adjective and *no / ko / ntawd* after the noun;
  - *cov* for groups.
- **Strand (b), sound and tone (script lessons 1–3):**
  - tone letters and the minimal sets;
  - aspirated vs plain;
  - pre-nasalised onsets.
- **Not keywords:** "word order" alone, "negative", "question", "polite", "spoken".
- Sample `why` lines:
  - "Umbrellas take **lub**, not tus: lub kaus." → hit
  - "The adjective goes after the noun: lub tsheb liab." → hit
  - "pob has the high tone (-b); pov is 'throw'." → hit
  - "Use tsis before the verb." → no hit (correct)

## 8. Lessons (proposed order)

There is no roadmap for `hmn`. The order follows the teaching logic of Whitelock's lessons (pronunciation and tone drills first, then pronouns, questions, numbers, classifiers, time, kinship) [WHL] and the topic order of the flashcard course decks (pronouns, classifiers, numbers, locatives, time words, aspect) [BS1011, BSL]. Each lesson lists its key Hmong; every Hmong item is a glossary headword. Lesson ids carry no prefix.

| # | id | Title | Content, and the English-speaker trap | Deck |
|---|---|---|---|---|
| | | **Stage 1: Sounds and spelling** | | |
| 1 | `tones` | Tones: the silent last letter | The 7 tone letters + -d (§6.2); pob / poj / pov / po / pos / pog / pom; why no syllable ends in a consonant. Trap: saying the b in Hmoob | Tones |
| 2 | `consonants-1` | Letters that sound different: x, s, z, r, c, q, w | §6.3 table; plain vs aspirated (p / ph, t / th, k / kh, q / qh). Trap: English values | Consonants and vowels |
| 3 | `consonants-2` | n- and h- sounds: npua, ntawv, hmo, hnub | Pre-nasalised, voiceless nasals, hl, nasal vowels ee / oo, vowel pairs ia ua ai au aw. Trap: np said as plain b | Consonants and vowels |
| 4 | `greetings` | Nyob zoo, ua tsaug, sib ntsib dua | §2.4; *os* softening; thov. Trap: translating "good morning" word for word (OMN: not common) | Greetings and courtesy |
| | | **Stage 2: First sentences** | | |
| 5 | `pronouns` | kuv, koj, nws, and "two of us" | Singular, dual, plural (§2.3); *nws* = he / she / it. Trap: using *peb* for two people | About me |
| 6 | `yog-nyob` | Two ways to say "is": yog and nyob | Nov yog lub tsev; kuv nyob hauv lub tsev; adjectives with no "is" (Kuv zoo siab) [UWB, BSL]. Trap: Kuv yog zoo siab ✗ | About me |
| 7 | `questions` | puas, los, dab tsi, leej twg, qhov twg | Koj puas …?; … los tsis yog?; dab tsi, leej twg, qhov twg, thaum twg, pes tsawg, vim li cas, li cas [WHL, BS1011, BSL]. Trap: moving the question word to the front | Questions and connectors |
| 8 | `negation` | tsis and tsis txhob | Kuv tsis paub; tsis yog; tsis tau (not yet) [BSL]; tsis txhob noj (don't eat) [PVI]. Trap: tsis after the verb | Questions and connectors |
| 9 | `intro` | Koj lub npe hu li cas? | Name, where from (Koj tuaj qhov twg tuaj?), age (Koj hnub nyoog pes tsawg?), clan (Koj yog Hmoob xeem dab tsi?) [BSL]. Trap: "kuv npe" without *lub* | About me |
| 10 | `numbers` | Numbers and money | ib … kaum, kaum ib, nees nkaum, peb caug … rau caum, ib puas / rau pua, ib txhiab, kaum txhiab, ib lab (variants §11), daus las [WV, OMNN, BSL]. Trap: caug / caum, puas / pua | Numbers and money |
| 11 | `classifiers` | tus, lub, daim, rab … | Number + classifier + noun (ob tug dev); the 10 common classifiers + nkawm, khob, poom; cov [UWC, BS1011, W-KK]. Trap: tus kaus ✗ → lub kaus | Things and classifiers |
| 12 | `noun-phrase` | lub tsheb liab: describing words come after | Noun + adjective + demonstrative (lub tsev no, lub tsev ko, lub tsev ntawd); possessor first (kuv lub tsheb) [WPH, BS1011]. Trap: English order | Things and classifiers |
| 13 | `family` | Family: who is speaking? | §2.3 kinship by speaker sex and side; niam txiv, nus muag, tub, ntxhais, me nyuam. Trap: one word for "brother" | Family and kinship |
| | | **Stage 3: Everyday life** | | |
| 14 | `time` | Days, times and "when" | hnub no, nag hmo, tag kis; sawv ntxov, tav su, tsaus ntuj, hmo ntuj; months by number (ib hlis ntuj …); days (§11 dispute: English names first); teev; txhua hnub [ECM, WHL, PGE, BS1011]. Trap: expecting tense on the verb | Time and days |
| 15 | `aspect` | Done, doing, going to: lawm, tab tom, yuav | tau, lawm, twb … lawm, tab tom, yuav, mam li, tseem, nyuam qhuav [WNT, WPH, BS1011]. Trap: marking every verb | Time and days |
| 16 | `places` | pem, nram, tom, tim: up, down, over there | Locatives with height (pem up there, nram down there, tom over there, tim across, ntawm at, hauv in, saum on top, nraum outside) and the -d short forms [W-KK, BSL]. Trap: one word for "there" | Getting around |
| 17 | `food` | Noj mov: food and eating | mov, zaub, nqaij qaib / npuas / nyuj, ntses, qe, fawm, kua txob, dej, tshuaj yej, kav fes; noj tshais / su / hmo; qab heev [WV, ECM, W-KK]. Trap: "noj" for drinks (haus) | Food and drink |
| 18 | `serial-verbs` | Verbs in a row: mus yuav, los noj | Serial verbs (mus kav khw, los noj) [W-KK, JXT]; muab … rau "give" [W-SW]. Trap: adding "thiab" between verbs | Food and drink |
| 19 | `requests` | Please and may I: thov, puas tau | thov + verb; … puas tau?; pab; tsis txhob [OMN, BSL, PVI]. Trap: bare commands to elders | Health and help |
| 20 | `feelings-weather` | Zoo siab, tu siab, kub, no | Feelings with *siab* (zoo siab, tu siab, chim siab, kho siab, txaj muag) and weather (los nag, huab cua, kub, no, sov, daus, cua) [W-KK, BSL]. Trap: Kuv yog tu siab ✗ | Feelings and weather |
| | | **Stage 4: Out and about** | | |
| 21 | `shopping` | Pes tsawg? Shopping and prices | khw, nqi, kim, pheej yig, them nqi, yuav, muag, luv nqi [W-KK, MDH, WV]. Trap: classifier left out of counts | Shopping and money |
| 22 | `health` | At the clinic | mob, mob plab, mob taub hau, kub ib ce, hnoos, tshuaj, kws kho mob, tsev kho mob, khw muab tshuaj, teem sij hawm, neeg txhais lus [MDH, WHL]. Trap: "kuv yog mob" | Health and help |
| 23 | `compare` | More than: tshaj | X loj tshaj Y [BSQ]; heev, kawg [W-KK] [native check of the pattern]. Trap: "ntau loj" | Shopping and money |
| | | **Stage 5: Heritage extras (optional)** | | |
| 24 | `elders` | Talking with grandparents | Koj tuaj los?, Mus ho tuaj, Koj noj mov lawm los tsis yog?, kinship address, os, thov [WHL, BSX]. Trap: koj + no kinship word to an elder [native check] | Talking with elders |
| 25 | `new-year` | Noj peb caug: Hmong New Year | noj peb caug, pov pob, qeej, paj ntaub, xyoo tshiab, hlab nyiaj, khaub ncaws [AAE, FG, W-KK]. Trap: none; vocabulary | New Year and celebrations |
| 26 | `family-events` | Family events and blessings | hu plig, khi hluas tes, koob tsheej, zoo siab hnub yug [FG, UMD, BSR, OMN]. Neutral presentation of traditional and Christian practice (hmn.md §9) | Family events |

**Per-lesson notes for writers:**
- Every set satisfies §7: two `or` and two `ty` items hinge on classifiers / noun-phrase order (lessons 4–26) or tones (lessons 1–3).
- **Tone-twin rule:** if an answer contains a word whose tone twin is another course word (pob / pov / pog, dej / dev, kuv / kub, nyob / nyom …), put the twin in `x`. Add `'!strict'` until the matcher refuses tone-letter slips (§10).
- **Accepted answers:**
  - list both the spaced and joined forms only if the matcher does not fold spaces (§10);
  - list with and without the subject pronoun where both are normal [native check: is the subject dropped as freely as in Kannada? No source says].
- **No Hmong outside the glossary** without a NEW-WORDS entry (`tools/hmong/README.md`).

## 9. Decks

**18 decks in 6 groups**, 16–20 cards each (about 320 cards). Card shape: `target | pron | meaning | note`.
- `target`: RPA (§2.7).
- `pron`: the generated tone line (§6.1).
- `meaning`: short American English, unique within a deck (add «(said by a man)», «(Green: …)» etc.).
- `note`: one line or empty: the classifier, the Green form, the variant spelling, or the "also written" form.

| Group | Decks |
|---|---|
| Sounds and spelling | Tones · Consonants and vowels |
| First steps | Greetings and courtesy · About me · Family and kinship · Numbers and money |
| Everyday life | Things and classifiers · Food and drink · Time and days · Feelings and weather |
| Out and about | Getting around · Shopping and money · Health and help |
| Heritage | Talking with elders · New Year and celebrations · Family events |
| Conversation | Questions and connectors · Traps for English speakers |

| Deck | Lessons | Description (profile.json) and real themes |
|---|---|---|
| Tones | tones | The minimal set pob / poj / pov / po / pos / pog / pom, and common words per tone: dej, kuv, mus, neeg, niam, ntawd |
| Consonants and vowels | consonants-1, -2 | x, s, z, r, c, q, w; aspirates; np, nt, nk, ntx; hm, hn; ee, oo, ia, ua |
| Greetings and courtesy | greetings | §2.4 |
| About me | pronouns, yog-nyob, intro | name, origin, age, clan, languages (lus Hmoob, lus Askiv), work (ua hauj lwm), study (kawm ntawv) |
| Family and kinship | family | niam, txiv, niam txiv, tub, ntxhais, me nyuam, tij laug, kwv, nus, muam, viv ncaus, pog, yawg, niam tais, yawm txiv, txiv hlob, txiv ntxawm, phauj, dab laug, nyab, vauv |
| Numbers and money | numbers | 0–1,000,000; nyiaj, daus las, pes tsawg? |
| Things and classifiers | classifiers, noun-phrase | lub tsev, lub tsheb, daim ntawv, rab riam, txoj hlua, phau ntawv, zaj nkauj (hu nkauj), tsob ntoo, nkawm khau, khob, poom |
| Food and drink | food, serial-verbs | mov, zaub, nqaij, ntses, qe, fawm, kua txob, dej, tshuaj yej, kav fes, mis nyuj, txiv hmab txiv ntoo, noj / haus, qab |
| Time and days | time, aspect | hnub no, nag hmo, tag kis, sawv ntxov, tav su, tsaus ntuj, months, teev, txhua hnub, xyoo |
| Feelings and weather | feelings-weather | zoo siab, tu siab, chim siab, kho siab, ntshai, txaj muag, tsaug; los nag, daus, cua, kub, no, sov, huab cua |
| Getting around | places | pem, nram, tom, tim, ntawm, hauv, saum, nraum, sab xis, sab laug, ze, deb, tsheb, dav hlau, txoj kev, mus, tuaj, los |
| Shopping and money | shopping, compare | khw, nqi, kim, pheej yig, them nqi, yuav, muag, luv nqi, tshaj |
| Health and help | requests, health | mob, kws kho mob, tsev kho mob, tshuaj, kub ib ce, hnoos, ntuav, zawv plab, khw muab tshuaj, pab!, thov |
| Talking with elders | elders | the arrival / departure formulas, "have you eaten", kinship address, os |
| New Year and celebrations | new-year | noj peb caug, pov pob, qeej, paj ntaub, xyoo tshiab, hlab nyiaj, khaub ncaws, zoo siab hnub yug |
| Family events | family-events | hu plig, khi hluas tes, koob tsheej, ua tsaug, xeem |
| Questions and connectors | questions, negation | dab tsi, leej twg, qhov twg, thaum twg, pes tsawg, vim li cas, puas, los, thiab, tab sis, vim, los yog |
| Traps for English speakers | (review) | tone twins (pob / pov / pog), tus kaus ✗ / lub kaus, Kuv yog zoo siab ✗, peb vs wb, nus vs kwv, caug / caum |

**Gaps the decks must not fill from memory:** papaya salad, sticky rice, airport, computer, internet, minute, second, school (building), and the start / save / next type words. No opened source gave them. Writers file them in NEW-WORDS with a source.

## 10. Typing and matching

- **Typed answers are RPA in ASCII.** Any keyboard works. No IME, no fonts beyond Latin.
- **Fold:**
  - case;
  - spaces and hyphens inside a word (menyuam = me nyuam; pob-zeb = pob zeb);
  - a leading apostrophe ('os = os).
- **Never fold:** a tone letter. A missing tone letter is the mid tone, so *po* (spleen) is a word too. There is no "almost" for a tone slip; it is a different word.
  - Lead request: a course-level `noAlmost` for final-letter differences, or the `!strict` default for `hmn`.
- **Tiles:** split on spaces (one syllable per tile), as Hmong is syllable-spaced. Default tiles on for A1.
- **Validator (target side):**
  - every target and example must pass the RPA.md checker;
  - Green-only spellings fail;
  - JOINED spellings warn (lead request: wire RPA.md §5 into `tools/target/validate.js`).

## 11. Gaps and unverified claims

### Reliability

**Verified (opened sources):**
- RPA letters, values and tone letters [RPAW, JXT, BRU, KNAB];
- 1,274 glossary words, each cited;
- the greetings in §2.4;
- pronouns and dual;
- kinship terms by speaker sex [WHL, GYL, ECM];
- classifiers and what they count [UWC, W-KK, BSL];
- aspect markers with corpus examples [WNT];
- the absence of Hmong TTS in two lists [MST, GTTS].

**Not verified:**
- No study of English speakers learning Hmong, so §4 is structural inference.
- No source states tone-change (sandhi) rules: `tus` / `tug` and `puas` / `pua` are copied as attested, not predicted.
- Whether the subject pronoun can be dropped.
- Sentence-final particles beyond *os*, *los*, *yam*, *ko* (for example *lauj*, *nawb*, *sis*): not found with a function.
- The comparative pattern with *tshaj*.
- The natural address forms for elders.
- Device TTS voices.
- No Hmong words found for papaya salad, sticky rice, airport, computer, internet, minute, second.
- **Days of the week:**
  - Monday = *Hnub Ib* in EnglishConnect [ECM], but Sunday = *hnub ib* in Wikipedia [WPCAL];
  - US agencies write *hnub Monday* [PGE, MNC].

**Where sources disagree:**
- *nyob zoo* is universal; Wikivoyage's *Kab ntsab* is unsupported and not used.
- *puas* is the question particle. *pov* is "throw" [RPAW], and no source has it as a question variant.
- *lawm* is attested and *lawd* is not.
- One million: *ib lab*, *ib plhom* [BSL], *ib roob* [WV, OMNN].
- 10,000: *kaum txhiab* or *ib vam*.
- Zero: *ntxaiv* only.
- Tomorrow: *tag kis* / *taskis* / *tagkis*.
- Week: *lim tiam* / *as thiv* / *plua*.
- The -s tone is "low" in RPAW but "middle" in JXT.
- Green voiceless nasals: RPAW and BRU differ.

### 30 points a native White Hmong speaker should check first

1. Days of the week (numbered style vs *hnub Monday*), and which numbering is right.
2. The eight tone descriptions and memory aids in §6.2: do they help, or mislead?
3. The reading-guide comparisons in §6.3 (x = s, s ≈ sh, z ≈ s in measure, r ≈ curled t, c ≈ ty, ts ≈ ch, tx = ts, w).
4. The greeting table §2.4: all natural today in the US? Who says *mus zoo* vs *sib ntsib dua*?
5. *Koj tuaj los?* and *Mus ho tuaj*: still used?
6. Kinship by speaker sex (§2.3): tij laug / kwv / nus; muam / viv ncaus.
7. Kinship by side: pog / yawg vs niam tais / yawm txiv; txiv hlob / txiv ntxawm / dab laug / phauj.
8. How to address grandparents and older relatives politely (lesson 24).
9. Classifier choices on every Things deck card (lub kaus, daim ntawv, rab riam, txoj hlua, nkawm khau, zaj nkauj, tsob ntoo).
10. *zaj hu nkauj* vs *zaj nkauj* for "a song".
11. The noun-phrase examples lub tsheb liab, lub tsev no / ko / ntawd.
12. Kuv zoo siab (no *yog*) and nov yog lub tsev.
13. Questions: Koj puas …?; … los tsis yog?; question words in place.
14. tsis txhob for "don't", and tsis tau for "not yet".
15. Aspect: lawm, tab tom, yuav, mam li, twb … lawm, tseem, nyuam qhuav: the right English for each.
16. Numbers: caug / caum, puas / pua, nees nkaum, kaum txhiab vs ib vam, ib lab / plhom / roob, ntxaiv for zero.
17. The locatives pem / nram / tom / tim / ntawm / saum / nraum and their -d forms.
18. Serial verbs mus kav khw, los noj; *muab … rau* for "give".
19. Feelings: zoo siab, tu siab, chim siab, kho siab, txaj muag, tsaug (or *nkees*?).
20. Weather: los nag, daus, cua, kub, no, sov, huab cua.
21. Health words from MDH: kub ib ce (fever), zawv plab, hnoos, teem sij hawm.
22. Shopping: them nqi, luv nqi, pheej yig, kim.
23. Comparative with *tshaj*.
24. New Year terms: noj peb caug, pov pob, qeej, paj ntaub, hlab nyiaj.
25. Family events: hu plig, khi hluas tes, koob tsheej: neutral and correct?
26. Papaya salad, sticky rice, airport, computer, internet, minute, second: the usual words.
27. Is dropping the subject pronoun natural (for accepted answers)?
28. Spaced vs joined spelling: what do US readers expect?
29. Any Green Hmong word the notes present unfairly.
30. Which listening sources (radio, YouTube channels, church or community recordings) a learner could use, and whether native speakers would record the course clips.

### Why this course should not be released without a native reader

- **Every Hmong sentence beyond the glossary entries is the writers' own.**
- **A wrong tone letter is a wrong word,** and there is no voice to catch it.
- **The kinship and religion content can offend if wrong.**
- **The course cannot teach tones by ear** until native clips are recorded.

## Sources

`tools/hmong/SOURCES.md` (ids RPAW, BRU, KNAB, LY, VW, HMB, JXD, JXT, WHL, W-KK, W-SW, WPH, WPCAL, WNT, ECM, MDH, WCG, OMN, OMNN, WV, BSL, BS1011, BSQ, BSR, BSX, GYL, FG, UMD, UWC, UWB, AAE, STO, PGE, MNC, PEW, MST, GTTS, AZB, PVI, UWNP). Spelling: `tools/hmong/RPA.md`. Words: `tools/hmong/GLOSSARY.tsv`.
