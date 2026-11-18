# hi-en cold review (HI-REVIEWER), 2026-11-17

**Scope.** I edited:
- files under tools/content/hi (not profile.json, the deviations files or DECKNAMES.md);
- the `t` fields of tools/i18n/hi/ui.json and roadmap.json.

A `diff -rq` against the pre-review copy shows that only the files in the table changed, plus the three new files (REVIEW.md, PRON-RULES.md, pron_check.js). profile.json, the deviations files, DECKNAMES.md, pron_lookup.json, pron_hi.js and PRON-TOOL.md are byte-identical. Loading both JSON files with every `t` removed gives equal objects before and after.

I did not touch any generator, pack, src/app.html or other language. I did not run build.sh and did not commit.

**English side.** No parity-bound English changed: no check options, practice `o` / `a` / `x` or fill `q`, and no deck targets. Every fix to a shared item was made on the Hindi side, for example a cue added to the prompt.

**How edits were made.** All 88 edits were applied by script. The script asserted that each old string occurred exactly once, normalised to NFC and logged the change. ui.json and roadmap.json were rewritten by load-and-dump with their original formatting, and only `t` values changed.

**Status.** Every check passes on scratch outputs (exact lines at the end).
- Lint meaning variants dropped from 23 to 13. The rest are context glosses, either gendered translations or rows with an explanatory parenthesis.
- There are no Korean characters anywhere under tools/content/hi, this file included.
- New files: PRON-RULES.md and pron_check.js. pron_check.js is a checker, not part of the build.

## 1. What changed (88 edits)

### Card notes and deck meanings (decks.js 19, extra.js 6)
- **Leftovers from the Korean course:**
  - The *hang out* note contrasted *hang out* with *play*, which is the Korean "play with friends" trap. → It now covers the Hindi trap: «घूमना-फिरना» = *hang out*, not *roam*.
  - IDIOMS *A blessing in disguise* «जो होता है, अच्छे के लिए होता है» is a different saying. → «छिपा हुआ वरदान» (also changed in the idioms lesson table).
- **Wrong or misleading:**
  - *Is this seat taken?* «क्या यह सीट ख़ाली है?»: with that meaning, the note's *No, go ahead* reads as "not free". → «क्या यहाँ कोई बैठा है?», with the dialogue answer «नहीं, बैठ जाइए» to match.
  - *vest* «बनियान / जैकेट»: the course is American, and US *vest* = waistcoat. → «बिना बाँह की जैकेट (वेस्टकोट)», plus a note «ब्रिटेन में बनियान». The pron lesson row was changed too.
  - *Ten thousand* «अंग्रेज़ी में लाख-करोड़ नहीं होते» ignored Indian English. → «विदेश की अंग्रेज़ी में… (इंडियन इंग्लिश में चलते हैं)».
  - *aren't you?* note «हर वाक्य में isn't it? हर जगह ग़लत» → Indian colloquial vs standard English. This now agrees with the `questions` body, which was edited the same way, and with `indian-english`.
  - *McDonald's* «अमेरिका में कम समझा जाएगा» (overclaim) → «अमेरिकी उच्चारण से काफ़ी अलग».
  - *On the fence* «दीवार» → «बाड़».
  - *Pull someone's leg* «हिंदी में भी यही मुहावरा» → notes that Hindi «टाँग खींचना» can also mean pulling someone down.
- **Unnatural wording:**
  - *Keep the change* «छुट्टा रख लीजिए» → «बाकी पैसे रख लीजिए».
  - *push the meeting to 3* «3 बजे तक टाल» (= until 3) → «आगे खिसकाकर 3 बजे कर सकते हैं» (deck and dialogue).
  - *beach* «एक गाली जैसा» → «एक अपशब्द जैसा». It stays factual; the *Jew* card was already neutral.
  - Other notes: ASAP, fingers crossed («तर्जनी पर बीच वाली उँगली»), and a *Revert back* note that duplicated the card.
  - Meanings unified with lesson rows: email opener «उम्मीद है आप ठीक होंगे», *I'll get back to you*, *wine*, *berry*, *I'm out of town this week*. The *I'm a student* note «पेशे से पहले» now reads «प्रोफ़ेशन से पहले», the glossary term used in 7 other places.

### Lessons, checks and practice (lessons.js 10, practice.js 3, more/a1.js 15, a2.js 1, b1.js 1)
- **Prompts with a second natural answer, or a misleading cue (shared items, so prompt only):**
  - `be` order and fill «मेरे भाई सोल में काम करते / रहते हैं». The honorific plural also reads as *brothers*, in an item that tests singular -s. → «मेरा भाई…». The lessons.js body row changed the same way.
  - a1 `object-have` fill *I work with __* «उसके साथ»: typing *her* was marked wrong. → «उसके (उस आदमी के) साथ».
  - `the` mc and ty «स्टेशन कहाँ है?» → «(पास वाला) स्टेशन कहाँ है?».
  - `past` ty «मैंने एक फ़िल्म (movie) देखी»: *I saw a movie* was rejected. → «… (watch से)».
  - `countable` ty «कितने लोग?» → «(वेटर का छोटा सवाल) कितने लोग?».
  - `smalltalk` fill «आजकल कुछ अच्छा देखा?» → «कोई अच्छे शो या फ़िल्में देखीं?».
- **Wrong explanations:**
  - `email` check 2 `why` explained the Korean "you suffered a lot" thanks formula as if Hindi had it («बहुत तकलीफ़ उठाई»). → It now says why each distractor fails.
  - `adjectives` check 1 `why` stated consonant doubling as a general -er rule. → big → bigger, but cheap → cheaper.
  - `pron` body: «हर शब्द का एक हिस्सा ज़ोर से» → «दो या ज़्यादा हिस्सों वाले हर शब्द का…».
  - `perfect` body: «"मैंने कल ही रिपोर्ट भेजी है" बिल्कुल सामान्य» → «हिंदी बोलचाल में "…भेज दी है" जैसा वाक्य आम है».
  - `perfect-2` order `why` taught *How long have you waited* for an action in progress, while the next lesson teaches *been waiting*. It now points ahead.
- **Unnatural Hindi:**
  - «वह बिल्लियों को पसंद करती है» → «उसे (लड़की को) बिल्लियाँ पसंद हैं».
  - «कई सामान» → «बहुत सारा सामान».
  - «मुझे वह पसंद है» → «मुझे वह (लड़की) पसंद है».
- **Unified:** *Could you say that again?*, *I graduated in 2019*, *When pigs fly*, *school*, *pan*. The pan gloss used a comma where profile §2 wants « / » (formatting).

### Interface (ui.json 21) and roadmap (roadmap.json 11)
- *Text size* «फ़ॉन्ट» was wrong (font ≠ size). → «टेक्स्ट साइज़».
- **Greetings:** «शुभ दोपहर» is a calque and «शुभ संध्या» is broadcast register. I checked src/app.html `greet()`: for an English-target course the screen shows the English greeting and passes the capitalised key to `i18nGet` as its gloss. The lowercase keys appear only after «·» in the Korean-target romanisation line, also as a gloss. So all four keys are glosses, so they now match the deck meanings: «नमस्ते (दोपहर में)» and «नमस्ते (शाम को)» (4 keys). «सुप्रभात» stays.
- **Level titles:** ui.json and meta.js TITLES disagreed on four of seven titles. Both now use नौसिखिया · विद्यार्थी · बातूनी · मुसाफ़िर · लोकल · माहिर · उस्ताद. Legacy titles stay: अंकुर, अनुभवी, गुरु.
- **Mastery wording:** «80%+ पकड़ वाले कार्ड» → «80%+ तक पक्के कार्ड» (3 strings). It now matches «पक्का» used for box 6 and «🏆 पक्का: …».
- **Terminology:**
  - The conjugator strings used «वर्ब / बेस रूप / स्टेम», while the course says «क्रिया / मूल रूप (V1)». They are aligned now (4 strings).
  - The UI said «विनम्र भूतकाल / वर्तमान», and the profile keeps tense names in English. → «विनम्र Past / Present» (3 strings).
  - #skills «#ख़ास-बातें» → «#स्किल».
- **Roadmap («टेंस» vs «काल»):**
  - The English roadmap now follows profile §3, like the lessons: tense names in English and «टेंस» for the category. «नियमित भूतकाल» → «Simple Past: was / were और -ed»; «Narrative tenses (कहानी वाले काल)» → «कहानी के टेंस».
  - Other titles now match the lesson titles: «उच्चारण के जाल», «If वाले वाक्य 1 / 2 और 3», «Indirect Speech (अप्रत्यक्ष कथन)», «क्रिया + to या -ing», «विशेषण और तुलना».
  - Stage titles: «A1 · काम करना» → «A1 · रोज़ के काम»; «B1 · और बताना» → «B1 · विस्तार से बताना».
  - Roadmaps for other target languages (Hindi, Japanese, Spanish…) keep «भूतकाल / वर्तमान काल». For Hindi as the target, «काल» is the school-grammar term. Those courses have no English tense names, so «टेंस» would be wrong there.
- **Checked and left as they are:**
  - The tab bar «आज · अभ्यास · दोहराव · पाठ · ड्रिल · प्रगति · राय» and the chips «छोटा · 2 मिनट / सामान्य · 5 / लंबा · 10» (lead's measurements).
  - The DELETE sentence: «पुष्टि के लिए» + DELETE + «लिखें।» reads naturally.
  - Leech «अटका कार्ड», suspend «रोकें / रोके गए कार्ड», bury «कल पर टालें».
  - Feedback «सही! / पूरा सही नहीं। / संकेत: / वजह:».
  - Weekday headers «र सो मं बु गु शु श» (the same as Intl hi narrow).
  - Language slots, which are all at the start or after a colon.
- **Count patterns:** all 114 count-bearing patterns were checked by script. None has an inflected noun, participle or oblique plural after the number. Sample renders at 0, 1, 2, 5 and 21: «0/1/2/5/21 दिन», «बाकी: 21», «दोहराने हैं: 1», «प्लान तैयार: 21 सप्ताह।», «अगले कार्ड 1 दिन में।», «21 🔒 बंद».

### Nukta spelling (formatting, 8 edits)
A script collected every Devanagari word in content, ui.json and roadmap.json, removed U+093C and listed words written both with and without the nukta. It found four real splits between writers, and all are now uniform:
- «फ़र्क़» (3 fixes in a1);
- «शौक़» (1);
- «लायक़» (ui.json, *Conversational in 90 days*);
- «एतराज़» (extra.js had «ऐतराज़»).

My own *Keep the change* fix had introduced «बाक़ी», which is now «बाकी» as in the profile, the UI («बाकी: {1}») and the 21 other uses. The remaining pairs are intended contrasts: व / व़, थ / थ़, द / द़, फ / फ़, ज / ज़, जू / ज़ू, लिव / लिव़, and मोड (mode) vs मोड़ (turn).

**Glossary splits checked and left as they are:** «मूल रूप» (27) and «V1» (55) appear together on purpose («क्रिया का मूल रूप (V1)»; profile §3 lists V1 as the Hindi-medium convention). «सहायक क्रिया (helping verb)» is glossed once.

### Pron
- 0 edits were needed. The script check (pron_check.js) found:
  - 750 English→pron pairs, 659 of them from the lookup, verbatim;
  - 0 phrase conflicts;
  - every word in the 91 new rows matches the lookup's form for that word;
  - every respelling quoted in prose matches a pron field. The two prose-only words (allergy, photo) were converted with pron_hi.js.
- The lead's new rows are spelled the same in every file: 2015, Bangalore, Ruskin Bond, Priya, Sharma, Delhi, Mumbai, Jaipur, India and Hindi.
- Conventions are recorded in PRON-RULES.md.

## 2. Edit counts per file

| file | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| decks.js | 6 | 12 | 0 | 1 | 19 |
| extra.js | 3 | 2 | 0 | 1 | 6 |
| lessons.js | 5 | 4 | 0 | 1 | 10 |
| practice.js | 2 | 1 | 0 | 0 | 3 |
| more/a1.js | 7 | 4 | 0 | 4 | 15 |
| more/a2.js | 1 | 0 | 0 | 0 | 1 |
| more/b1.js | 1 | 0 | 0 | 0 | 1 |
| meta.js | 0 | 1 | 0 | 0 | 1 |
| i18n ui.json | 1 | 19 | 0 | 1 | 21 |
| i18n roadmap.json | 0 | 11 | 0 | 0 | 11 |
| **total** | **26** | **54** | **0** | **8** | **88** |

## 3. What I read in full and what I only scanned
- **Read in full, line by line:**
  - decks.js: all 403 cards (every meaning and note);
  - extra.js: 86 dialogues, 54 examples, 25 patterns, 80 pause phrases, 26 idioms;
  - lessons.js: 11 bodies, 33 checks;
  - practice.js: 154 items;
  - more/a1.js, a2.js and b1.js: all 30 bodies (incl. indian-english and stative-since), all 90 checks and every practice item with its `why`;
  - meta.js;
  - all 272 ui.json patterns;
  - the 38 English-roadmap titles.
- **Scanned, not read one by one:**
  - The 769 exact ui.json strings. I read every string under 140 characters in a dump. The 100 long strings (privacy text, onboarding, help) I read only through their first 90 characters plus the full Hindi, skimming. I also ran regex scans for तुम / करो forms, कृपया, सहेजें, क्विज़, फ़ीडबैक, हिन्दी, precomposed nukta and a «.» after Devanagari (0 hits that needed changes).
  - The 387 roadmap titles for other languages: read once, title by title, from a dump (ko, ja, zh, es, fr, de, pt, it, vi, th, id, ar, ru, hi). None was edited. Possible polish: ru «TORFL … राज्य मानक» ("state" may be better as «सरकारी मानक») and ru «समय में क्रियाएँ» (*Verbs in time*), which reads stiffly.
  - pron_lookup.json: checked by script only.

## 4. For a native speaker: the ten things I am least sure of
1. **Greeting gloss «नमस्ते (दोपहर में)» / «नमस्ते (शाम को)».** It replaces «शुभ दोपहर / शुभ संध्या». Check it in the Today screen, where it may read long.
2. **Level titles:** «नौसिखिया» (slightly self-deprecating), «बातूनी» (chatterbox, playful) and «लोकल».
3. **«टेक्स्ट साइज़»** for Text size. An alternative is «अक्षरों का आकार» (longer).
4. **«80%+ तक पक्के कार्ड»** and «पक्का» for mastered. Maybe «याद हो चुके कार्ड» reads better.
5. **The *isn't it?* line:** «भारत में बोलचाल में सुनाई देता है, पर मानक अंग्रेज़ी में यह ग़लत है». The deck and `questions` now say the same, and `indian-english` is consistent with them. Is "ग़लत" too strong next to the course's "respect Indian English" stance?
6. **Idiom equivalents:**
   - «छिपा हुआ वरदान» (*blessing in disguise*);
   - «एक पंथ दो काज» / «एक तीर से दो निशाने»;
   - «दोनों हाथों में लड्डू» (*best of both worlds*);
   - «आँख ओझल, पहाड़ ओझल»;
   - the note on «टाँग खींचना».
7. **The *hang out* note's claim** that *roam* («घूमना») is the Hindi speaker's trap.
8. **Prompt cues added to shared items:** «(वेटर का छोटा सवाल) कितने लोग?», «(पास वाला) स्टेशन», «उसके (उस आदमी के) साथ».
9. **Lesson claims about Hindi:**
   - perfect: «हिंदी बोलचाल में "मैंने कल ही रिपोर्ट भेज दी है" जैसा वाक्य आम है»;
   - will: Hindi offers in the Simple Present, «मैं देखता हूँ»;
   - reported: «उसने पूछा कि मैं कहाँ रहता हूँ» is said to show the right word order, while the same body says Hindi keeps the speaker's own words.
10. **The *vest* gloss «बिना बाँह की जैकेट (वेस्टकोट)»** and the *beach* note («एक अपशब्द जैसा»): factual and respectful enough?

## 5. Found but not fixed (out of scope or parity-bound)
- **Defensible distractors (parity-bound):**
  - countable mc *Can I have ___ water?*, where *a* (a bottled water) is normal in US restaurants;
  - be check 1 and other K-pop / Seoul / Busan / Jeju / kimchi / Han Kang options. They are translated literally per profile §9.
- **Shared item with a stiff model answer:** the `present` order item «मैं बहुत किताबें पढ़ता हूँ» → *I read many books*, where *a lot of books* is more natural. It is a tile item, so nothing is rejected, but changing the answer needs an items deviation.
- **Deck card *Who's your bias?*** is K-pop fandom slang. The note generalises it to «किसी म्यूज़िक ग्रुप के फ़ैन», which is acceptable. Changing the card needs a decks deviation.
- **Email check 1 uses "Jenny Park"** (shared English option *Hi Jenny,*), so it was left as it is.
- **deviations.json** carries `lessons:indian-english` and `lessons:stative-since`, which parity reports as unused (they are covered by `extraLessons`). I did not edit it.
- **Roadmap basis line** «CEFR A1–B1 का क्रम, कोरियाई भाषियों के लिए ढाला हुआ» faithfully translates the shared English roadmap but reads oddly to a Hindi user. That is the lead's call.
- **Validator warning:** «Write it» → «अंग्रेज़ी में लिखें» (19 vs 8 code points). This is the profile's own practice instruction, so I kept it; check it in layout.
- **Profile §6 erratum:** the two «fifteen» rows printed without the virama were already superseded by the lead.

## Final check lines (verbatim, last run after all edits)
```
PASS: all checks OK
PASS: shared English side matches ko-en
lint hi: 0 blocking · 13 meaning variants (info) · 0 K-pop leftovers (info)
exact=769 patterns=272 warnings=1
PASS
roadmap strings 425/425 translated
node --check OK: 10 files
pairs 750 · not in lookup 91 · diff 0 · conflicts 0 · word mismatches 0 · prose mismatches 0
Hangul under tools/content/hi: 0
```
