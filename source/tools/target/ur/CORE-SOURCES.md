# Core words, Flirting and Compliments for en-ur: sources, order and skips

Written 2026-11-23. New files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting), `decks-c.js` and `extra-c.js` (Compliments), this file and `POS-COVERAGE.md`. Eleven deck entries were appended to the end of `decks` in `profile.json`. No other file was changed.

| Deck | Cards | Examples | Dialogues |
|---|---|---|---|
| Top nouns | 98 | 15 | 0 |
| Top verbs | 92 | 67 | 0 |
| Top adjectives | 60 | 37 | 0 |
| Top adverbs | 46 | 31 | 0 |
| Top pronouns | 41 | 41 | 0 |
| Top postpositions | 25 | 25 | 0 |
| Top conjunctions | 15 | 15 | 0 |
| Top interjections | 14 | 0 | 14 |
| Top words | 50 | 0 | 0 |
| Flirting | 39 | 0 | 21 |
| Compliments | 28 | 0 | 11 |
| **Total** | **508** | **231** | **46** |

## 1. The real limit on these decks: the pron tool's word list

`respell.js` is a lexicon tool. It throws on any word that is not in its built-in list, and it reads only the lead's `lexicon.txt` (which does not exist). It cannot read a writer's add-file. So **every card target and every example or dialogue sentence uses only words the tool already knows**, and every frequent word it does not know was left out. Those words are listed in section 6, in the tool's own entry format, with the reading the lead should check. Section 6 is the most important part of this file: adding those entries would let the decks grow to what the brief asks for, above all `Top interjections` and the single-word layer of `Flirting`.

A useful side effect: the tool's list was built from the course's lessons and decks, so "only words the tool knows" also means "only course vocabulary" in the examples, as the brief asks.

## 2. Frequency source actually opened

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, [github.com/hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords), file `content/2018/ur/ur_full.txt` (cloned with `git clone --depth 1`, last commit 2022-02-07) | Word counts from the Urdu subtitles in OpenSubtitles 2018 ([opus.nlpl.eu/OpenSubtitles2018.php](http://opus.nlpl.eu/OpenSubtitles2018.php)). 9,592 word forms. The top form (ہے) has 10,553 hits, so the corpus is small, about a few hundred thousand words. | Content CC BY-SA 4.0 (README: "CC-by-sa-4.0 for content"); code MIT. | **Word choice and order only.** No meaning, note or sentence was taken from it. |

How a card got its rank (one rule, applied by a script):
- The list holds **word forms, not lemmas**. Spelling variants were folded to the course spelling first (لئے → لیے, چاہئے → چاہیے, پتہ → پتا, نہيں / ہيں with an Arabic ye → نہیں / ہیں).
- A card's rank is the **best rank among its own forms**: for a verb, the stem and its -نا, -نے, -تا, -تی, -تے, -و, -یں, -ے, -ا, -ی forms (irregular verbs by their real forms: ہونا by ہے / ہیں / تھا, کرنا by کر / کرتے, جانا by جا / گیا, دینا by دیا / دے, and so on); for a noun or adjective in -ā, the -e and -oṅ forms (and -ī for adjectives); for anything else, the word itself.
- Words that share a spelling share a rank: اِس / اُس (13), اِن / اُن (43), اِسے / اُسے (45), اِنہیں / اُنہیں (243), اُدھر / اِدھر (977) are all the one unmarked spelling. مِیں "in" takes the rank of میں (2), which also counts "I". کیا "what" (16) also counts کیا "did".
- Compound postpositions are ranked by their content word (کے ساتھ by ساتھ, کی طرف by طرف), as the en-hi course did. That is an approximation: ساتھ, پہلے, نیچے and اوپر are also adverbs.
- Inside each deck the ranked cards run in rank order. **A card with no rank was placed by judgement right after a ranked card it belongs with** (for example the noun + کرنا verbs after the verb they build on, سب کچھ and کچھ نہیں after کچھ).
- In `Top words`, the numbers run in counting order, ordinals 1st to 4th, the days Sunday to Friday, then afternoon and evening, even where they have ranks. That is by design.

Quirks: subtitle text over-ranks some words (بیگ 680, پروگرام 295, کمپیوٹر 497, from films about spies and hackers) and under-ranks home and food words (چائے 5268, دکان 2355). With hits this small, everything below about rank 2,000 is noisy. The order should be read as "roughly most used first".

**Cards whose order is judgement, not the source:**
- Top nouns: شوق, چاول, میسج, عید, ای میل, طبیعت, طالب علم (7 of 98).
- Top verbs: پسند کرنا, بات کرنا, کام کرنا, مدد کرنا, نہانا, آرام کرنا, فون کرنا, شادی کرنا, سفر کرنا, صاف کرنا, معاف کرنا, جلدی کرنا, میسج کرنا (13 of 92).
- Top adjectives: سوکھا, کڑوا, کھٹا, کچا, شادی شدہ (5 of 60).
- Top adverbs: اب تک, سب سے, کبھی کبھی, کبھی نہیں, بعد میں, ابھی تک, ابھی ابھی, پھر سے, دیر سے, ہر جگہ, آج کل, ہر روز (12 of 46).
- Top pronouns: سب کچھ, کچھ نہیں, کوئی نہیں, کوئی اور, ہر کوئی, آپ کو, میں نے, آپ نے, اُنہوں نے, ایک دوسرے, آپ کا, اُس کا, اِس کا, اُن کا, اِن کا (15 of 41: all the two-word forms).
- Top postpositions: کے یہاں, سے زیادہ, سے کم (3 of 25).
- Top conjunctions: جب سے, یا پھر, جب کہ, اس لیے کہ, جب تک, جیسے ہی, پھر بھی (7 of 15: all the two- and three-word ones).
- Top interjections: ماشاء اللہ, ان شاء اللہ, الحمد للہ, یا اللہ, اچھا جی, مبارک ہو, خدا کے لیے, اللہ کرے, بہت اچھا (9 of 14). Only چلو 66, بس 159, اوکے 851, خیر 1150 and سوری 2354 have ranks.
- Top words: تیرہ, انیس, کروڑ, ڈھائی have no rank; the numbers, ordinals, days and times are in natural order (above).
- Flirting and Compliments are not frequency decks: they follow the three layers and the topics.

## 3. Class slots renamed or added

- **`Top postpositions` replaces `Top prepositions`.** Urdu has no prepositions. میں, سے, کو, تک, کا and the compound ones (کے ساتھ, کے لیے, کی طرف) come after the noun and put it in the oblique form (گھر میں, کمرے میں). The deck holds the simple ones, the compound ones as one card each, والا (a suffix that grammars teach with them), بھر (دن بھر) and the comparison frames سے زیادہ / سے کم. نے is a card because it is a postposition, though English has no word for it. پر is already a card in the course (section 4).
- **No extra deck.** Urdu has no measure words or counters.
- **Articles:** Urdu has none. `Top words` carries what does the job of determiners: اِس, اُس, اِن, اُن (this / that before a postposition), ہر, سارا, تھوڑا, ایسا. ایک is already a card.
- **Particles** (بھی, ہی, نہ, مت, جی, چاہیے) are in `Top words`. تو is in `Top conjunctions` (اگر … تو), with its emphasis use in the note.
- **Pronouns:** possessives (میرا, آپ کا …), the fused object forms (مجھے, اُسے, اُنہیں …) and the نے forms (میں نے, آپ نے, اُنہوں نے) are in `Top pronouns`, because Urdu grammars teach them as forms of the pronoun. The relative pronoun is only جس (oblique): جو is not in the tool's list (section 6).
- **Place words:** the bare adverbs اوپر, نیچے, اندر, باہر, پہلے are in `Top adverbs`. The postposition deck has کے اوپر, کے نیچے, سے پہلے, کے سامنے, کے پیچھے, کے پاس, کے قریب, سے دور. کے اندر and کے باہر were left out so the two decks do not hold near-twins; سامنے, پیچھے, پاس, قریب and ساتھ are not adverb cards for the same reason.
- **Verbs** are in the -نا form. Each note gives the میں form for a man and a woman (میں کرتا ہوں / کرتی ہوں) or the one form a beginner needs, and flags the irregular ones (ہونا, کرنا, جانا, دینا, لینا, پینا). Twelve noun + کرنا verbs are cards (بات کرنا, کام کرنا, مدد کرنا …).
- **Homograph marks.** Following the profile (§2.8), the bare-word cards that the tool cannot read unmarked carry one mark: اِس, اُس, اِن, اُن, اِسے, اُسے, اِنہیں, اُنہیں, اُس کا, اِس کا, اُن کا, اِن کا, اُنہوں نے, اُدھر, اِدھر, and **مِیں** ("in"). مِیں and the existing card مَیں ("I", in Aspirates, nasals and vowel marks) differ only by the mark, but they are different words with different sounds (mẽ / maĩ), and the validator compares exact text, so both stay. The same goes for the conjunction تو (to) next to the existing card تُو (tū, "you").
- **Ordinals** (پہلا to چوتھا), آدھا and ڈھائی are in `Top words`. The days of the week are there too; ہفتہ (Saturday) is left out because ہفتہ is already a card meaning "week".

## 4. Words skipped because the course already teaches them

Exact card targets in `decks-a.js` / `decks-b.js`, left out on purpose:

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | پتا, باپ, بیٹی, ٹوپی, ٹیپ | Letters 1 |
| Top nouns | ڈبا | Letters 2 |
| Top nouns | خط, شادی, سچ, جوتا | Letters 3 |
| Top nouns | ہفتہ, نام, قلم, فون, کام, گاڑی, ٹماٹر | Letters 4 |
| Top nouns | پھل, پل, کھانا (food; also "to eat", so not in Top verbs either), بھوک, دودھ, گھر, جھوٹ | Aspirates, nasals and vowel marks |
| Top nouns | بہن, بھائی, دادا, دادی, نانی, چچا, ماموں, خالہ, پھوپھو, بیوی | Family and people |
| Top nouns | کمرہ, کتاب, پانی, دروازہ, کھڑکی, کرسی, بستر, گھڑی, کپڑے, ٹی وی | Home and daily things |
| Top nouns | آم | Traps for English speakers |
| Top adjectives | بڑا, بڑی, برا | Letters 2 |
| Top adjectives | غریب | Letters 3 |
| Top adjectives | لال | Letters 4 |
| Top adverbs | دور, دیر, روز | Letters 2 |
| Top adverbs | تب | Letters 1 |
| Top adverbs | کہاں | Aspirates, nasals and vowel marks |
| Top adverbs | کل, پرسوں | Time, days and routine |
| Top adverbs | پھر | Questions and connectors |
| Top pronouns | آپ | Letters 1 |
| Top pronouns | مَیں | Aspirates, nasals and vowel marks |
| Top pronouns | تُو | Traps for English speakers |
| Top postpositions | پر | Letters 2 |
| Top conjunctions | اور, لیکن, یا, کیونکہ, اس لیے | Questions and connectors |
| Top interjections | شکریہ۔, خوش آمدید۔, سنیے! | Greetings and courtesy; Traps for English speakers |
| Top words | ہاں, نہیں, چھ, تھا, ہیں | Aspirates, nasals and vowel marks |
| Top words | دو | Letters 2 |
| Top words | صبح | Letters 3 |
| Top words | ایک, تین, پانچ, دس, گیارہ, بیس | Numbers and money |
| Top words | کیوں؟ | Questions and connectors |
| Top words | ہفتہ (Saturday) | Letters 4 (as "week") |

Skipped as already taught: 45 nouns, 5 adjectives, 8 adverbs, 3 pronouns, 1 postposition, 5 conjunctions, 3 interjections, 14 in Top words (ہفتہ counted once, under nouns): **84 in all**.

From the compliments plan, Deck 1 #1 was rewritten because "The food is delicious" (کھانا بہت مزیدار ہے۔) is already a card in Food and drink. Flirting avoids آپ سے مل کر اچھا لگا۔ (Greetings and courtesy) and Compliments avoids میں شادی شدہ ہوں۔ (About me).

**Kept out of the core decks so that no card is in two decks:** خوبصورت, پیارا, دلچسپ, پیار and جان are in Flirting only, and ماشاء اللہ (bare) is in Top interjections only. خوبصورت and پیارا are frequent enough for `Top adjectives`; if the lead wants them there, Flirting must drop them. اچھا is in `Top adjectives`; Flirting uses it only inside phrases.

## 5. Flirting and Compliments

- **Flirting** starts from Deck 2 of `docs/plans/compliments-ur.md` and keeps its stance: mostly mild and indirect. In Pakistan open flirting is uncommon and can offend in public or in front of family, so most cards praise someone's company, words or laugh rather than their looks; the notes mark each card mild, warm or bold and say who says it to whom. Layer 1 has only **7** single words (the brief asks for 15–25) because حسین, ذہین, ہوشیار, مزاحیہ, شریف, دل, مسکراہٹ, آواز, بال, چہرہ, انداز, محبت and the loans سمارٹ / ہینڈسم / کیوٹ are not in the tool's list (section 6). Layer 2 has 18 phrases, layer 3 has 14 moves and replies: a warm yes, a playful deflection, and four clear, kind ways to say no (we're just friends; I'm married; you're nice but I don't feel that way; no, thank you). 21 dialogues, including one that ends in a yes (تم مجھے بہت اچھی لگتی ہو۔ → تم بھی مجھے بہت اچھے لگتے ہو۔) and three that end in a gracious no.
- **Compliments** (28 cards) is Deck 1 of the plan, rebuilt where a plan word is not in the tool's list. Kept: the cook's praise آپ کے ہاتھ میں بہت ذائقہ ہے, ماشاء اللہ with children and new things, the learner lines and the modest replies. Changed: شاباش, بہت خوب, واہ (not in the list) → کیا بات ہے!; آپ بہت اچھے انسان ہیں (انسان) → آپ بہت اچھے دوست ہیں; یہ آپ کی محبت ہے (محبت) → یہ تو آپ کی مہربانی ہے; ذرہ نوازی, مزاحیہ, ذہین, محنتی, جچ رہا, سوٹ dropped. Added: food, effort, home, garden, teacher and "did you like it?" cards, and returning a compliment.

## 6. Words left out because the pron tool does not know them, or reads them wrong (for the lead)

**Read wrong** (the tool knows the spelling, but as another word):
- کہیں "somewhere" → the tool gives kahẽ (the verb "say"); it should be **kahī̃**. Also کہیں نہیں "nowhere" = kahī̃ nahī̃.
- بیچ "between, middle" (کے بیچ, کے بیچ میں) → the tool gives bech (the verb "sell"); it should be **bīch**.
- ہوں in the presumptive (کہتے ہوں گے "must be saying") → the tool gives hū̃ ge; it should be **hõ ge**. The plan's card آپ سب سے یہی کہتے ہوں گے was replaced for this reason (and for یہی).
- تقریباً "about, nearly" is in the built-in list (= taqrīban) but the lookup fails: the word throws as unknown. A bug in the tool, probably the tanwin mark.

**Not in the list** (readings are the writer's, `unverified:model`; tags as in the tool):
```
# nouns
f: زندگی = zindagī; f: دنیا = duniyā; M: دل = dil; f: محبت = mohabbat; M: انسان = insān; f: کوشش = koshish
f: وجہ = vajah; f: بار = bār; f: طرح = tarah; f: ضرورت = zarūrat; M: مطلب = matlab; M: لفظ = lafz; M: حال = hāl
m: غصہ = ġussā; M: ڈر = ḍar; f: فکر = fikr; f: امید = ummīd; f: یاد = yād; m: مزہ = mazā; M: شخص = shaḵhs
M: مرد = mard; M: جانور = jānvar; m: کتا = kuttā; f: بلی = billī; f: زمین = zamīn; M: آسمان = āsmān; M: سورج = sūraj
M: چاند = chā̃d; M: کاغذ = kāġaz; f: خبر = ḵhabar; f: کہانی = kahānī; f: آواز = āvāz; M: بال = bāl; m: چہرہ = chehrā
f: مسکراہٹ = muskurāhaṭ; M: نمبر = nambar; f: منگنی = mangnī; f: دلچسپی = dilchaspī; f: دوستی = dostī; f: محنت = mehnat
f: نیند = nī̃d; M: انتظار = intizār; M: مذاق = mazāq; f: مرضی = marzī; M: بچپن = bachpan
جنوری = janvarī; فروری = farvarī; مارچ = mārch; اپریل = aprail; مئی = maī; جون = jūn; جولائی = julāī; اگست = agast; ستمبر = sitambar; اکتوبر = aktūbar; نومبر = navambar; دسمبر = disambar
# verbs and verb words
v: بچا = bachā; v: بچ = bach; v: بھاگ = bhāg; v: پھینک = phẽk; v: روک = rok; v: جیت = jīt; v: ہار = hār; v: کھینچ = khī̃ch
v: چھو = chhū; v: بڑھ = baṛh; v: نکال = nikāl; v: سمجھا = samjhā; v: ڈر = ḍar; v: لوٹ = lauṭ; v: گزر = guzar/guzr; v: چن = chun
v: سجا = sajā; v: اڑ = uṛ; v: پہچان = pahchān; v: لگا = lagā; v: چھپا = chhupā; v: مر = mar; v: بن = ban; v: مسکرا = muskurā
v: ہنسا = hãsā; v: پڑھا = paṛhā; v: گھوم = ghūm; v: ملا = milā; چکا = chukā (and چکی, چکے); شروع = shurū; ختم = ḵhatm
واپس = vāpas; تیار = taiyār; محسوس = mehsūs; استعمال = istemāl; ملاقات = mulāqāt; دعا = duā; پیدا = paidā; کھڑا = khaṛā
# adjectives
صحیح = sahīh; غلط = ġalat; الگ = alag; خاص = ḵhās; ہوشیار = hoshiyār; ذہین = zahīn; محنتی = mehnatī; مزاحیہ = mizāhiyā
آخری = āḵhirī; بہترین = behtarīn; پسندیدہ = pasandīdā; ناراض = nārāz; اداس = udās; پریشان = pareshān; حیران = hairān
محفوظ = mahfūz; آزاد = āzād; مضبوط = mazbūt; کمزور = kamzor; خاموش = ḵhāmosh; سخت = saḵht; نرم = naram; بہادر = bahādur
شریف = sharīf; عجیب = ajīb; خطرناک = ḵhatarnāk; زندہ = zindā; اصلی = aslī; a: پچھلا = pichhlā; حسین = hasīn; فارغ = fāriġ
اسمارٹ = ismārṭ; ہینڈسم = hainḍsam; کیوٹ = kyūṭ; خوش مزاج = ḵhush mizāj
# adverbs
جلد = jald; فوراً = fauran; آگے = āge; دوبارہ = dobārā; a: اتنا = itnā; یقیناً = yaqīnan; آخر = āḵhir; سچ مچ = sach much
# pronouns and determiners
جو = jo; یہی = yahī; وہی = vahī; دونوں = donõ; کئی = kaī; a: ویسا = vaisā; a: جیسا = jaisā; آپس = āpas; کسے = kise
# postposition words
بارے = bāre; درمیان = darmiyān; بجائے = bajāe; خلاف = ḵhilāf; علاوہ = ilāvā; مطابق = mutābiq; ذریعے = zarīe
دوران = daurān; باوجود = bāvujūd; ارد گرد = ird gird; سمیت = samet
# conjunctions
بلکہ = balki; تاکہ = tāki; ورنہ = varnā; حالانکہ = hālā̃ki; جبکہ = jabki; اگرچہ = agarche; چونکہ = chū̃ki; لہذا = lihāzā
البتہ = albattā; جہاں = jahā̃
# interjections
ارے = are; اوہ = oh; واہ = vāh; ہائے = hāe; اف = uf; شاباش = shābāsh; توبہ = taubā; افسوس = afsos; سبحان اللہ = subhān allāh
شکر = shukr; ہیلو = helo; اوئے = oe; آہ = āh; اوہو = oho; خبردار = ḵhabardār; بچاؤ = bachāo; کاش = kāsh; چپ = chup
نا = nā; خوب = ḵhūb; بہت خوب = bahut ḵhūb
```
Note for the lead: v: جی "to live" (jī) would clash with the particle جی, and v: کھلا "to feed" (khilā) with the adjective کھلا (khulā); both need a homograph rule or a mark before they go in.

**What changes once these are in:** Top interjections gets its real core (ارے, اوہ, واہ, ہائے, اف, شاباش, توبہ, افسوس, سبحان اللہ, شکر ہے, کاش, خبردار); Top pronouns gets جو, یہی, وہی, دونوں; Top postpositions gets کے بارے میں, کی وجہ سے, کی طرح, کے درمیان, کے علاوہ, کے دوران; Top conjunctions gets بلکہ, تاکہ, ورنہ, حالانکہ; Top nouns gets زندگی, دنیا, دل, انسان, وجہ, بار, طرح, ضرورت; Flirting's first layer can reach about 20 words. Only the order inside each deck and the decks' length should change.

## 7. Checks run

`node tools/target/repron.js ur` twice (second run: 0 rewritten), `node tools/target/gen.js ur`, `node tools/target/validate.js ur`: **PASS: all checks OK**, with no "is in two decks" line. No HOLD file was created. Every card target and every example and dialogue sentence was also passed through `respell.js` by a script that stops on any error.
