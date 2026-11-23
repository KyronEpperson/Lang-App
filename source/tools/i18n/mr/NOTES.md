# Marathi (mr) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled. It was started with `new_lang.py mr --out <scratch>` and then filled.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English. It is the tl file's shape with every `t` blanked; `road.py` still cannot run (see tl/ceb NOTES §5).
- The generated pack is `packs/i18n-mr.js`.

Build: `python3 tools/i18n/gen.py mr && node tools/i18n/validate.js mr`. It passes with 1 warning class:
- 1 label that may overflow: "Exam re-drill" → *परीक्षेचा पुन्हा सराव*. Note that the validator counts code points, and Devanagari vowel signs are code points too, so Marathi looks longer to it than it is on screen.
- There is no "identical to English" warning, because Marathi is a distinct script and the check is off. The Latin-script strings that are kept on purpose are listed in §2.

The only course this interface serves is **mr-ko** (Korean for Marathi speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *कोरियन*, *हांगुल*, *रोमन लिपी*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*इंग्रजी*), as tl and ceb did. They are only shown in an English course, which Marathi speakers do not have.

The Hindi dictionary (`hi/`) was checked only for term ideas, because it uses the same script. No Hindi wording was copied. Hindi forms were avoided: *कोरियन*, not *कोरियाई*; *धडा*, not *पाठ*; *सराव*, not *अभ्यास* for practice; *उजळणी*, not *दोहराना*.

Author: not a native speaker. Everything here needs a Marathi speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** everyday modern standard Marathi (Pune / Mumbai) as apps write it. Common English tech words are written in Devanagari (*ॲप, सेटिंग्ज, डिव्हाइस, सिंक, कार्ड, डेक, क्विझ, लेव्हल*). Ordinary words are Marathi.
- **Address:** *तुम्ही* everywhere, never *तू*. Verbs use the *तुम्ही* forms (*करा, निवडा, ऐका, टॅप करा*). The task set this, and it is the normal register of Marathi app copy.
- **Gender-neutral rule:** Marathi past and some present verb forms show the speaker's gender (*शिकतोय / शिकतेय*, *म्हणाला / म्हणाली*), and the app does not know the learner's gender. Every string avoids these forms:
  - forms that do not show gender: *शिकत आहे*, *तुम्ही केलंत*;
  - the *ने* construction (*B ने काय म्हटलं?*);
  - noun phrases.
  Native speakers: please flag any gendered form you find.
- **Colloquial neuter -ं:** written as apps write it: *झालं, समजलं, सगळं, तुमचं, माझं, वाक्यं* (not *झाले, समजले*). Plural nouns take *-ं* where speech has it (*प्रमाणपत्रं, नामं*). *कार्ड* and *डेक* are invariant.
- **Commands:** buttons use the polite imperative: *निवडा, उघडा, बंद करा, रद्द करा, हटवा, वगळा, लपवा, दाखवा, पुन्हा करा*. English verbs take *करा*: *टॅप करा, स्वाइप करा, सेव्ह करा, शेअर करा, टाइप करा, रीसेट करा, अनलॉक करा, एक्सपोर्ट / इम्पोर्ट करा, पेस्ट करा, कॉपी करा, रीलोड करा*. Progressive forms use *… होत आहे* (*सेव्ह होत आहे…, लोड होत आहे…, सिंक होत आहे*).
- **Counts:** a slot number is followed by an invariant noun (`{1} कार्ड`, `{1} दिवस`, `{1} डेक`, `{1} आठवडे`), so singular and plural templates mostly share one text. Where a verb or adjective would have to agree with the number, the string uses the label form `noun: {n}` (*बाकी फेऱ्या: {1}*, *शिकलेली कार्ड: {1}*, *इम्पोर्ट: {1}*) or the invariant *बाकी* (*{1} बाकी*). No case ending is attached directly to a slot. A postposition after a slot is a separate word (*{1} मध्ये टाइप करा*, *{1} पासून*).
- **Digits:** Western digits, as apps show them (the counts come from the engine). Time units are short: *मि* (min), *s* (seconds, as in the key), *दि* (days in the forecast).
- **Spelling:** standard Maharashtra government spelling. *ॲ* is used for English "a" as in *ॲप, ॲडमिन, ॲरो, ॲनालिटिक्स*; *ऑ* for "o" as in *ऑडिओ, ऑफलाइन, ऑफिस*. Anusvara is written where spelling requires it (*संवाद*). Punctuation is the English punctuation of the key (·, —, …).
- **Grammar terms:** standard Marathi school terms, because every Marathi speaker learns them at school and they are short. This differs from tl and ceb, which kept the English terms. The terms are in the glossary below.
- **Quiz-mode words** are the same everywhere:
  - Read = *वाचन*; Listen = *ऐकणं* (the noun; the button is *ऐका*); Recall = *आठवण*; Type = *टाइप*;
  - Mixed (the quiz mode) = *मिश्र*; the Mix pool (5 at a time) = *मिक्स*;
  - Shuffle = *फेरबदल*; Merge = *एकत्र करा / एकत्र झालं* (never *मिक्स*).
  - "pass {n}/3" (a round of the quiz) = *फेरी {n}/3*; "passed" (the score) = *पास*.

## 2. Glossary of fixed terms (course writers: reuse these)

| English | Marathi |
|---|---|
| Korean (language) | कोरियन |
| Hangul | हांगुल |
| romanization | रोमन लिपी (short labels too: *Aa रोमन लिपी: चालू*) |
| pronunciation / pronunciation hint | उच्चार / उच्चाराची हिंट |
| English | इंग्रजी |
| flashcard / card | फ्लॅशकार्ड / कार्ड |
| deck | डेक |
| lesson / lessons | धडा / धडे |
| practice (noun and tab) | सराव |
| review (tab, noun) / to review | उजळणी / उजळणी करा |
| due (for review) | उजळणीचे / उजळणीसाठी |
| streak / streak shield | स्ट्रीक / स्ट्रीक शील्ड (feminine: *स्ट्रीक तुटणार नाही*) |
| quiz / exam / test everything | क्विझ / परीक्षा / सगळ्यांची चाचणी |
| drill / blitz / role-play | ड्रिल / ब्लिट्झ / रोल-प्ले |
| session | सत्र |
| level / Lv / XP | लेव्हल / Lv / XP |
| goal / daily goal | ध्येय / रोजचं ध्येय |
| box (SRS) / interval | बॉक्स / मध्यांतर |
| new / learning / learned / mastered | नवीन / शिकत आहे / शिकलेली / पक्कं (पक्की झालेली कार्ड) |
| Got it / Again | समजलं / पुन्हा |
| Correct! / Not quite | बरोबर! / थोडं चुकलं |
| Weak spots / Missed / Hardest | कच्चे दुवे / चुकलेली / सर्वात अवघड |
| bury / suspend / leech | उद्यावर (उद्यापर्यंत बाजूला ठेवलं) / स्थगित / लीच |
| My phrases / phrase | माझी वाक्ये / वाक्य |
| meaning / note / example / dialogue | अर्थ / टीप / उदाहरण / संवाद |
| Browse | पाहा |
| Check | तपासा |
| hint | हिंट |
| account / sign in / sync | खाते / साइन इन / सिंक |
| settings / device / backup | सेटिंग्ज / डिव्हाइस / बॅकअप |
| Feedback | अभिप्राय |
| polite / casual / honorific | सभ्य / अनौपचारिक / आदरार्थी |
| 요-form | 요-रूप |
| verb / noun / stem / dictionary form | क्रियापद / नाम / मूळ / शब्दकोशातील रूप |
| ending / counter / question word | प्रत्यय / मोजणी शब्द / प्रश्नार्थक शब्द |
| vowel / consonant / final / syllable / block | स्वर / व्यंजन / अंतिम व्यंजन / अक्षर / ब्लॉक |
| sound change | उच्चारबदल |
| past / present / future | भूतकाळ / वर्तमानकाळ / भविष्यकाळ |
| grammar / pattern / irregular | व्याकरण / पॅटर्न / अनियमित |
| conjugator | क्रियापद रूपे (button *रूपे पाहा*) |
| idiom (사자성어, scene tag) | म्हण |
| Register (drill) | पातळी |

**Level titles:** Beginner *नवशिका*, Sprout *अंकुर*, Student *विद्यार्थी*, Talker *गप्पिष्ट* (= 수다쟁이 "chatterbox"), Traveler *प्रवासी*, Local *स्थानिक*, Senior *सीनियर* (선배), Master *उस्ताद*, Pro *प्रो*, Sensei *सेन्सेई*.

**Deck groups / tags:** Everyday *रोजचं*, Social *सामाजिक*; *#मूलभूत #प्रवास #सामाजिक #काम #मीडिया #कौशल्य*.

**Days (chart, one or two letters):** र सो मं बु गु शु श.

### Kept in Latin script (closed list)

These are kept because they are brand names, key names, codes or things the user types:
- Lang App, Supabase, Vercel Web Analytics, TTMIK, Sogang, How to Study Korean;
- Enter, Esc, Ctrl+K, A− / A+, Aa;
- XP, Lv, CSV, TSV, PNG, KB, 3D, UI;
- DELETE: never translated, because the engine compares what is typed;
- `s` (seconds), A / B (the dialogue speakers);
- example romanization (*ga*, *han*) and the placeholder email *tumhi@example.com*.

All other tech words are written in Devanagari.

## 3. Tab names (5-tab bar + extras)

| English | Marathi | chars | tl | es |
|---|---|---|---|---|
| Today | **आज** | 2 | Ngayon | Hoy |
| Lessons | **धडे** | 3 | Aralin | Lecciones |
| Practice | **सराव** | 4 | Pagsasanay | Práctica |
| Review | **उजळणी** | 5 | Review | Repaso |
| Progress | **प्रगती** | 6 | Pag-unlad | Progreso |
| Read (advanced) | वाचन | 4 | Basa | Leer |
| Feedback | अभिप्राय | 8 | Feedback | Opinión |

- Text that refers to a tab uses the same name, for example *प्रगती → बॅकअप → फाइल शेअर करा*.
- Button names the lesson prose may cite: *समजलं* (Got it), *पुन्हा* (Again), *तपासा* (Check), *पाहा* (Browse), *माझी वाक्ये* (My phrases), *सर्व उजळणी* (All due).

## 4. 30 strings to check first (for a Marathi speaker)

Answer "OK" or write the natural version.

| # | English key | Marathi now | Doubt |
|---|---|---|---|
| 1 | Review (tab) | उजळणी | Is the school word for revision right for SRS review? Or would *रिव्ह्यू* be the app word? |
| 2 | Feedback (tab) | अभिप्राय | Or *फीडबॅक*? |
| 3 | romanization | रोमन लिपी | Clear for "Korean written in English letters"? Or *रोमन उच्चार*? |
| 4 | Got it (SRS button) | समजलं | Or *लक्षात आलं*, *जमलं*? |
| 5 | Again (SRS button) | पुन्हा | Does it work alone as a button? |
| 6 | Due / {n} due | उजळणीचे / {1} उजळणीचे | Natural for "cards waiting for review"? |
| 7 | Weak spots | कच्चे दुवे | Natural as a mode name? Or *कमकुवत जागा*? |
| 8 | Missed (filter) | चुकलेली | OK on its own (it agrees with the omitted *कार्ड*)? |
| 9 | mastered | पक्कं / पक्की झालेली कार्ड | Natural? Or *प्रभुत्व मिळालं*? |
| 10 | learning (SRS state) | शिकत आहे | OK as a state label? |
| 11 | bury / Buried until tomorrow | ⏭ उद्यावर / उद्यापर्यंत बाजूला ठेवलं. | Clear? |
| 12 | suspend | ⏸ स्थगित | Too formal? |
| 13 | Shuffle | फेरबदल | Is this the word for shuffling cards? Or *पिसा* (as with playing cards), or *शफल*? |
| 14 | Mixed / Mix | मिश्र / मिक्स | Is the split clear? |
| 15 | Recall मराठी→한 | आठवण मराठी→한 | Is *आठवण* clear for "recall from memory"? |
| 16 | native (audio speed) | नेटिव्ह | Or *मूळ वेग*? |
| 17 | Talker (level title) | गप्पिष्ट | Fun or rude? Other titles: *नवशिका, अंकुर, विद्यार्थी, सीनियर, उस्ताद, प्रवासी, स्थानिक*. |
| 18 | Master | उस्ताद | OK in a learning app? Or *निष्णात*? |
| 19 | Register (drill name) | पातळी | Clear for polite/casual speech level? Or *भाषेचा स्तर*? |
| 20 | Grammar terms | क्रियापद, नाम, प्रत्यय, मूळ, शब्दकोशातील रूप | Are the school terms OK, or too textbook-like? |
| 21 | particle (Korean 은/는, 이/가) | (no separate interface string; prose may need one) | *शब्दयोगी* or *प्रत्यय*? |
| 22 | Polite ↔ casual | सभ्य ↔ अनौपचारिक | Natural? Or *आदरार्थी ↔ साधं*? |
| 23 | Dating, friends & nights out | डेटिंग, मित्र आणि बाहेर फिरणं | Natural? |
| 24 | I get by (level answer) | कामचलाऊ येतं | Natural for language ability? |
| 25 | Working late — nice job / it's late, good work | उशिरापर्यंत काम — छान / उशीर झाला, छान मेहनत | Natural greeting glosses? |
| 26 | good afternoon / good evening | शुभ दुपार / शुभ संध्याकाळ | Do people say these, or just *नमस्कार*? |
| 27 | Something went wrong: | काहीतरी चुकलं: | OK? |
| 28 | Streak at risk | स्ट्रीक धोक्यात | Too dramatic? Is *स्ट्रीक* feminine? |
| 29 | Hand-tuned for speakers of your language | तुमची भाषा बोलणाऱ्यांसाठी खास तयार केलेलं | Natural? Shorter version? |
| 30 | No match. Try the English meaning. | काही सापडलं नाही. इंग्रजी अर्थ वापरून पाहा. | Translated literally (as tl and ceb did). In mr-ko the meanings are Marathi, so this is wrong for the learner. Lead decision: *मराठी अर्थ*? |

Also worth a glance:
- *फोड करून पाहा* (break it down);
- *मागोमाग म्हणा ×3* (shadow);
- *गाळलेली जागा भरा* (Fill the gap);
- *कोरियनची सुरुवात* (Korean starter);
- *आपोआप उलटा* (Auto-flip);
- *90 दिवसांत संभाषण*;
- *झटपट क्रिया* (quick actions);
- *जांभळा रंग* (Accent plum); amber in the heatmap is *पिवळा*;
- *चार अक्षरी म्हण* (four-character idiom);
- *मग यातून 5 कार्ड:* (fragment "Then 5 cards from", which a deck name follows).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `mr` is a 2-letter code, so the `slice(0,2)` issues in the ceb notes do not affect it. Devices report `mr-IN`, and `slice(0,2)` gives `mr`.
- `LANGS.mr` exists: `{name:'Marathi',self:'मराठी',flag:'🇮🇳',ko:'마라티어',t:1}`.
- `mr` is not in `RTL_LANGS`, which is correct.
- `gen.py` writes `LANGAPP_PACKS.i18n.mr`, and `validate.js mr` passes.
- **Language names:** unlike tl and ceb, ICU has good Marathi names. Observed in Node (full ICU): ko → कोरियन, en → इंग्रजी, es → स्पॅनिश, ja → जपानी, zh → चीनी, hi → हिंदी, mr → मराठी. *कोरियन* matches this dictionary, so no override map is needed for mr.

**Notes:**
- There is no `docs/profiles/mr-ko.md` and no `tools/halves/native/mr/`. When they are written, they should use the tab names in §3 and the glossary in §2. If a course `ui.json` is added, it overrides this pack key by key.
- One choice differs from tl and ceb: grammar terms are Marathi school terms, not English. A future mr-ko profile should confirm or reverse this, and the interface should follow it.
- The keys that say "English meaning" (§4 #30) are wrong in meaning for any `<l>-ko` course. That is a keys.json / app wording issue, shared with tl and ceb.
- `road.py` is still broken (see the tl / ceb notes). `roadmap.json` was written directly in its output shape. `gen.py` emits `road` 40.
