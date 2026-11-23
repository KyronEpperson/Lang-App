# mr-ko native half: cold review (2026-11-23)

**The reviewer is not a native Marathi speaker.** Every Marathi judgement below is an inference from the profile, the interface glossary and general knowledge. The items at the end need a native check.

## What I checked

- **Every jsonl row**, read in Marathi next to its Korean (`target/ko/`) and, where a cue or claim was in doubt, the English (`native/en/ko/`). That covers:
  - 1,413 cards, 201 dialogues, 275 examples, 47 patterns, 294 sentences, 99 checks and 462 practice items;
  - 56 decks, 6 groups, 140 labels (with the pause-set Korean from `target/ko/course.json`) and 33 lesson rows.
- **All 33 lesson bodies.**
- **`trainer.json`** (writer w4), every string next to `native/en/ko/trainer.json`.
- **Scripted checks** (before and after editing):
  - every type and order item, comparing `x` with `a`: where they differ only in level or tense, the prompt must carry a cue;
  - the same Korean glossed two ways across cards, examples, sentences, dialogue lines and pause labels;
  - exact duplicate meanings per deck (trimmed, lowercased), duplicate glosses per pause set, duplicate options per question;
  - stray Latin, Hindi forms, the danda, and spelling variants;
  - the habitual-frame scan described under Decisions.
- There was no NEW-ROWS.md: this half was written against the full Korean half in one pass.

All edits are applied by id from one re-runnable script: `/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/review-mrko/fix.py`.
- It always starts from the pre-review copy (`…/review-mrko/base/`). With no edits it reproduces `base/` byte for byte.
- For every edited field it asserts that the set of Hangul runs and the counts of `@@`, `___`, `{{…}}` tokens and the dialogue ` / ` are unchanged.
- Both are session scratch files.

**Do not run `mk_native.js mr --merge` again.** It rebuilds from `work/` and would undo this review.

**Final state:**
- `node tools/halves/validate.js mr ko` gives **words remaining: 0 of 25585, errors: 0, warnings: 1**. The warning is the waived extra Hangul in `hangul.html`. The c0407 Hangul-count warning is fixed.
- `assemble.js mr ko` (written to the scratch folder) succeeds: 56 decks, 1,413 cards, 67 UI overrides, all 7 features and all 11 trainer sections on. Its output passes `node --check`.
- No duplicate meanings within any deck, no duplicate pause glosses within any set, and no identical options in any question.

## Decisions

| Question | Decision and where it is applied |
|---|---|
| **The "…त आहे" frame** | **The question:** "मी जात आहे" is the Marathi present progressive. It reads as "right now / these days", not as a habit; the habitual is जातो / जाते, which shows gender. The profile's claim that it "covers 'I go'" is not quite right.<br>**Why it can stay:** Korean 가요 covers both readings. -고 있어요 appears in no practice answer, option or rejected form (it occurs only in one dialogue and one example). So either Marathi form leads to the present 요-form answer and to nothing the items reject.<br>**One rule:** "…त आहे" is the default present in glosses and prompts. A line takes the simple present with the unspaced pair (करतो/करते) **only** when the Korean has a frequency word (매일, 항상, 자주, 가끔, 보통, 늘, 마다, generic 주말에는) or the English says every / always / usually / often / sometimes / on weekends. The rule only governs lines where a Marathi verb would show the speaker's or addressee's gender. Simple presents with a neutral subject (तुम्ही पिता का?, तुम्ही कुठे राहता?, आई नेहमी लवकर उठते) and near-future lines (बस लवकरच येईल, किती वाजता पोहोचणार आहात?) are outside it. A 요-present is never glossed with …ईन, which belongs to -(으)ㄹ게요 (c0754, c1005 fixed).<br>**Applied to:** e014, e090, e179, e248, e269, s0155, do-man.05 and e178 (자주 = बऱ्याचदा, as on card c0922).<br>**The lesson text:** `verbs.html` no longer says that …त आहे covers जातो. It now explains the rule, and s0069 and s0083 show both forms ("मी जातो/जाते (जात आहे)"). |
| 반말 = तू | Kept, per the profile. The `polite` lesson already warns that Marathi तू is normal with friends and parents, but 반말 to staff or older strangers is rude. Spot-checked: no 반말 line gets तुम्ही and no 요 / -시- line gets तू. Fixed: g117 «करू नको» → «करू नकोस», g130 «जाऊ नको» → «जाऊ नकोस» (to match the cards); 좋은 꿈 꿔 «स्वप्नं पाहा» (whose person is ambiguous) → the card's neutral «गोड स्वप्नं पडू देत» (g072, g124). |
| Gender: neutral wording vs the unspaced pair | **The order:** a neutral wording first, if it keeps the tense and reads naturally; otherwise the unspaced pair, masculine first. Never a spaced slash.<br>**Neutral wordings applied:** 먼저 퇴근하겠습니다 = «मी आधी निघत आहे» (c0549, g108; e073 and office.06 already had it); 갈게요 / 가 볼게요 in g031 / g059 likewise; g101 «सोबत असलो की» → «सोबत असलं की»; e179 / e196 «कोणालाही सोबत न घेता» → «एकट्याने».<br>**Pairs kept:** in the intransitive past and in the habitual lines above. |
| सर/मॅडम vs शिक्षक | 선생님 as an **address** (vocative) = सर/मॅडम, written unspaced as a gender pair (c0255, e032, g097, g149, titles.11 / 14). 선생님 as a **noun** (job, "my teacher") = शिक्षक (c0081, c0615, e224, e243, g200, s0063). Fixed: three spaced «सर / मॅडम». |
| One spelling per dish | **गिमबाप** (8 rows; e081 had किमबाप). **तोकबोकी**, feminine (g015, g141, e146; e146 was masculine «हा»). **राम्योन** (c1171, g188 had रामयोन). **किमची जिगे** (no variants found). They follow profile §8.3: RR letter by letter, with kk → क. |
| 화장실 / 지하철 / 주말 | टॉयलेट / मेट्रो / वीकेंड in every gloss and prompt. The dictionary cards c0276 «टॉयलेट / स्वच्छतागृह» and c0736 «मेट्रो (भुयारी रेल्वे)» keep a secondary word. c0330: «शनिवार-रविवारी» → «वीकेंडला». |
| One word per concept (new) | 날씨 = **हवामान** in every gloss and prompt; हवा is left for "air", which the pronunciation lessons use. 동생 = **धाकटं भावंड**, 도서관 = **वाचनालय**, 친절하다 = **दयाळू** (प्रेमळ stays for 다정하다), 점심 = **दुपारचं जेवण** (लंच removed). Applied to c0179, c0181, c0564, c0553, g028, g110, g153, e028, e150, e152, e225, e227, s0053, s0133, s0233, s0238, isseoyo.07, noun-modifiers.04 / .09, and the noun-modifiers blurb and body. |
| Top-nouns deck (w1 c0645–0714, w2 c0715–0743) | No exact duplicate meanings. Overlapping first glosses such as 것 / 거 / 물건 «वस्तू…» and 때 / 시간 «वेळ…» each carry their own qualifier, as in English. Left as they are. |
| वाङ्मय analogy (`sound-changes`) | **Kept as an analogy.** Final क् before म becomes ङ्, just as ㄱ before ㅁ becomes ㅇ [ŋ]. The text now adds that this is a likeness of sound only, with no relation between the words. |
| Proverb equivalents | Kept, because they are real Marathi sayings with the same sense: थेंबे थेंबे तळे साचे (티끌 모아 태산), डाव्या हाताचा मळ (누워서 떡 먹기), आधी पोटोबा, मग विठोबा (금강산도 식후경), जित्याची खोड मेल्याशिवाय जात नाही (세 살 버릇 여든까지), प्रयत्नांती परमेश्वर (하면 된다), दुधात साखर (금상첨화), अति तिथे माती (과유불급), नव्याचे नऊ दिवस (작심삼일, in brackets after the literal gloss), जसं पेराल तसं उगवेल (자업자득). |
| Grammar claims | All checked and kept, true as stated:<br>• «कोरियनमध्ये "जो … तो" नाही» now reads «… सारखी रचना नाही». Korean has no relative pronoun; the whole modifier precedes the noun.<br>• मराठी परवा = both 모레 and 그저께 (c1095).<br>• -아/어서 never takes the past.<br>• 거예요 is said with a tense ㄲ.<br>• 10만 = 1 लाख.<br>• Hours are native and minutes, money, dates and floors Sino-Korean (the numbers blurb now names hours explicitly). |
| Food tip (fish / meat) | Made concrete: kimchi usually contains fish sauce or salted shrimp, and most soups have a fish or meat stock (`food.html`). |
| Floors (new) | Korea counts the ground floor as 1층, while Indian usage calls it तळमजला. c0149 «तिसरा मजला» is now «तिसरा मजला (कोरियन मोजणी; आपल्याकडचा दुसरा)», with a note. The c0377 note explains that 2층 = आपल्याकडचा पहिला मजला. g047 already said तळमजल्यावर. |
| Cross-references | Only three exist in the bodies. joining → «भूतकाळात गोष्ट सांगणं» and have-to → «सभ्यपणे विनंती करणं» match `lessons.jsonl`. story pointed to «भूतकाळ»; the full title would add Hangul that the English body does not have, so it now reads «(धडा 10, भूतकाळाचा धडा)». |
| Typography | Straight double quotes everywhere: 138 check and practice rows, 3 sentences, 1 blurb and the `requests` table used '…'. No danda, no Hindi forms (scanned). The only Latin is RR and the closed list, plus B1 for a basement floor and JMT / TMI / PC방, which belong to the Korean text. The placeholder X was removed from the activities deck description and from `isseoyo.html`. |
| Same Korean, one gloss | Checked twice: whole strings, and card phrases contained in longer dialogue or example lines. Unified to the card wording: 놀자 / 또 놀자 = «मजा करूया» (g032, g039, g064), 같이 있으면 편해 = «निवांत» (g101), 미안해, 내가 잘못했어 (g100), 최고야 (g115), 100일 축하해 = «100 दिवसांच्या शुभेच्छा» (c0538), 우리 무슨 사이야 (e065), 진지하게 만나고 싶어 (e066), 우리 잘 맞는 것 같아 (e069), 야근해야 돼요 (e074), 기분이 좋아요 (e019), 드라이 돼요? (g054), 약국 어디예요 (g047), 택배 왔어요 (g052), 번호 좀 알려 줄래 (g065), 인스타 있어요 (g066), 오늘 예쁘네요 (g069), 우리 무슨 사이야 (g099, g128), 나랑 사귀자 (g128), 손 잡아도 돼 (c0539, g102), 너한테 할 말 있어 (g104), 과장님 잠깐 시간 괜찮으세요 (g107), 점심 뭐 먹을까요 (g110), 보고 싶었어 (g131), 저 사람 누구예요 (g146), 이상형이 뭐예요 (g185), 라면 먹고 갈래요 (g188), the g189–g199 compliment and refusal replies, 몇 살이에요 (s0015, meet.14), 요즘 어때요 (c0562), 주말에 뭐 해요 (c0565), 드시고 가세요 / 적립 되세요 (c0133, c0136), 귀여워(요) = क्यूट (s0007, s0008, polite.05), 커피 두 잔 주세요 (s0210), 미세먼지 = धूलिकण (g086), 오늘 날씨 좋네요 (e007). 어떡해 = «आता काय करू? / अरे बापरे!» (c0638, c0890). The literal meanings of 잘 먹겠습니다 / 잘 먹었습니다 now match between the cards and sentences. Polite 밥 먹었어요? = जेवलात का?, casual 밥 먹었어? = जेवण झालं का? (c0386). Context variants that only add a tag or a question were kept. |
| Level cues | texting.07 (`x` 배고파요) and texting.08 (`x` 봐요) had no level cue. Both now say «(मित्राला मेसेज)». Every other level- or tense-only distractor already had its cue. |
| पदवी for job titles | **Left unchanged.** The profile kept it on purpose (§11, item 6), and lesson 21's title fixes it. Replacing it only in rows would give two terms for one concept. Listed for the native check. |
| trainer.json | Keys, slots and Hangul unchanged. Changes:<br>• ㅎ 탈락 is now «ह गळणं: …». It had shared the name ह-बदल with 격음화.<br>• 겠습니다 is now «औपचारिक भविष्यकाळ / इरादा».<br>• The -(으)면 안 돼요 template is now «…लं तर चालेल का?», matching pattern p042. «चालणार नाही का?» read as a real negative. |
| ui.json | **The 14 `uiKeys`** are copied verbatim from `tools/i18n/mr/ui.json`.<br>**The rest of the th key set:** the dictionary value is copied wherever one exists (32 keys). New strings were written only where the dictionary has none (20): the 12 deck tags, «ऐका» for Play (it labels the 🔊 speak button of example rows in `src/app.html`), «#दैनंदिन» for #living (housing, doctor, café, places, activities, hobbies), «या पानावरची अडचण कळवा», «माझ्या भेटी निनावीपणे मोजा», the two «सभ्य ↔ अनौपचारिक · …» progress labels, «कोरियन टाइप करा», «कोरियनमध्ये टाइप करा», and the pronunciation variant of the add-card line.<br>**Plus** the profile §10 override «काही सापडलं नाही. मराठी अर्थ वापरून पाहा.».<br>67 keys in all (14 + 32 + 20 + 1); 0 ui.json words remaining. Every tag in `target/ko/course.json` has a Marathi string. |
| `@@` and blanks (brief item 7) | The six `@@` rows (s0297, s0300, s0301, g019, office.05, office.08) never attach a Marathi ending to `@@`, so they work with any name. Every `___` blank is intact; the script asserts it for every edited field. |

Other accuracy fixes:
- c0267: «जिंको» → «जिंकगो».
- c0407: reworded to clear the Hangul-count warning.
- hangul.k2: the options ng / h / g now carry their Devanagari (ङ / ह / ग).
- 14 notes in Korean and RR only gained «उदा.», and hangul.06 now reads «… म्हणजे …». These were byte-identical to English and counted as untranslated.

## Rows changed per file

Each row is counted once.

| File | Rows | Of which typography only |
|---|---|---|
| cards.jsonl | 38 | 14 («उदा.» marker) |
| dialog.jsonl | 44 | – |
| examples.jsonl | 20 | – |
| sentences.jsonl | 14 | – |
| checks.jsonl | 39 | 37 (quotes) |
| practice.jsonl | 109 | about 101 (quotes) |
| lessons.jsonl | 3 | 1 |
| decks.jsonl | 1 (activities description) | – |
| groups, labels, patterns | 0 | – |
| lessons/*.html | 7: food, isseoyo, noun-modifiers, requests, sound-changes, story, verbs | requests (quotes) |
| trainer.json | 3 strings | – |
| ui.json | new: 67 keys | – |

## Final deck labels (56) and group names (6)

**None changed.** They match profile §3.3 exactly: all are unique and natural, none ends in a full stop, and none is माझी वाक्ये.

1. हांगुल स्वर
2. हांगुल व्यंजनं
3. हांगुल: पुढचा टप्पा
4. उच्चाराच्या टिप्स
5. अत्यावश्यक वाक्यं
6. ओळख
7. अत्यावश्यक वाक्यं 2
8. चौकशी
9. कॅफे आणि कन्व्हिनियन्स स्टोअर
10. रोजच्या वापरातले आकडे
11. मोजणी शब्द
12. हवामान आणि भावना
13. जोडशब्द
14. डॉक्टर आणि औषधं
15. घर आणि रोजची कामं
16. आदरार्थी रूपं
17. ठिकाणं आणि इमारती
18. छंद
19. खाद्यपदार्थ
20. पेयं
21. रोजच्या कृती
22. टीव्ही आणि मनोरंजन
23. जागा आणि दिशा
24. मुख्य क्रियापदं
25. पार्टिकल
26. संख्या
27. गोड बोलणं
28. लाडिक वाक्यं
29. फ्लर्टिंग
30. मित्रांशी चॅटिंग
31. जोश आणि स्टाइल
32. भेटीगाठी
33. के-पॉप आणि फॅन कल्चर
34. सोशल मीडिया आणि स्लँग
35. डेटिंग: पुढचं पाऊल
36. काम आणि ऑफिस
37. गप्पाटप्पा
38. जेवण आणि ऑर्डर
39. रस्ता आणि वाहतूक
40. वेळ आणि वार
41. कुटुंब आणि माणसं
42. विशेषणं
43. के-ड्रामाचे डायलॉग
44. नेहमीची नामं
45. नेहमीची क्रियापदं
46. नेहमीची विशेषणं
47. नेहमीची क्रियाविशेषणं
48. नेहमीची सर्वनामं
49. आणखी पार्टिकल
50. नेहमीचे जोडशब्द
51. नेहमीचे उद्गार
52. नेहमीचे छोटे शब्द
53. आणखी मोजणी शब्द
54. फ्लर्टिंगचे शब्द
55. कौतुक
56. देश

**Groups:** मूलभूत · रोजचं · शब्दसंग्रह · व्याकरण · सामाजिक · नेहमीचे शब्द.

## For a native speaker to check (max 20)

1. The present-tense rule: does «मी घरी जात आहे» feel acceptable as a gloss for a plain present such as 집에 가요? Are the habitual pairs (मी रोज व्यायाम करतो/करते) natural?
2. «मी आधी निघत आहे» for 먼저 퇴근하겠습니다 / 먼저 갈게요, as a neutral alternative to निघतो/निघते.
3. पदवी (lesson 21 title, `titles` and `office`) for job titles, vs पद / पदनाम.
4. सर/मॅडम as the vocative for 선생님, and शिक्षक for the noun.
5. The new ui.json strings: «#दैनंदिन» (#living), «ऐका» (Play), «माझ्या भेटी निनावीपणे मोजा», «या पानावरची अडचण कळवा».
6. The spellings गिमबाप, तोकबोकी (feminine), राम्योन, किमची जिगे, मांदू.
7. The floor note: «तिसरा मजला (कोरियन मोजणी; आपल्याकडचा दुसरा)». Is this the right way to warn about the ground-floor difference?
8. The वाङ्मय analogy in `sound-changes`, now marked as a likeness of sound only.
9. The proverb pairings: प्रयत्नांती परमेश्वर for 하면 된다, and डाव्या हाताचा मळ for 누워서 떡 먹기.
10. «लंगोटी यार» (i24) and «जानू» (자기야): are they natural in Marathi, or do they feel Hindi?
11. The trainer sound-rule names: जोडून उच्चार, अनुनासिक बदल, ह-बदल (격음화), «ह गळणं» (ㅎ 탈락), ल-बदल, ताण बदल.
12. Fixed phrases from the profile, carried over unchanged: सांभाळून घ्या (잘 부탁드립니다), अहो, जरा ऐका (저기요), कामाला शुभेच्छा (수고하세요), ठरलं! (콜), भारी! (대박).
13. «गोड स्वप्नं पडू देत» for 좋은 꿈 꿔.
14. «सोबत असलं की आरामशीर वाटतं» and similar impersonal wordings used to avoid gender.
15. «हा एक ओळखीचा सामाजिक गुन्हा आहे» (the 읽씹 tip in `texting`): is the joke natural?
16. «उपपद» for "article" in `nouns.html`; and the agreement «अभ्यास करायला हवं» (s0268, have-to.10 / .13) next to «ओव्हरटाइम करायला हवा» (c0554, e074).
17. Colloquial past forms such as «मी आधीच थोडं प्यायलं» (g175) and «कॉफी प्यायली» (e045 and the story sentences).
18. The `hangul` reading guide and the c0001–c0060 sound comparisons. They were carried over from the writers and the profile and not re-judged.
19. The getting-around comparison with the Mumbai and Pune metro (announcements in two languages).
20. The interjection glosses «अगं बाई!; अय्या!» (어머), «इश्श» (아이참) and «आई गं!» (아야): are they natural for any speaker, or only for women?
