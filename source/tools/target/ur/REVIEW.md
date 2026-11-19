# en-ur cold review (EN-UR-REVIEWER, 2026-11-19)

Brief: docs/briefs/en-ur-R.md → docs/TARGET-REVIEW.md. Saved batch by batch.

## Batch 1: the pron tool (tools/target/ur/respell.js)

Sources: the Rekhta dictionary (rekhtadictionary.com; its transliterations, read from search-result slugs and two fetched entries). Rekhta writes ā as "aa", ī as "ii", ū as "uu", and does not mark nasal vowels or retroflexes in slugs.

Code changes
- **Verb stem before رہا / سکتا / چکا / لیا / دیا …** now reads as the stem even where a written entry has the same spelling: پکا رہی → *pakā rahī* (was *pakkā*, the adjective). New maps `STEM` and `AFTER_STEM`.
- **-یں / -ئیں verb forms** are now decided from context (new map `FPL`): before گا / گی / گے, after آپ / شاید / اگر / ذرا, or with no subject → polite / subjunctive *-ẽ* (آپ بیٹھیں *baiṭhẽ*, آئیں گے *āẽ ge*); after نے in the same clause (since the last کہ) → feminine plural completed past *-ī̃* (میں نے کتابیں خریدیں *ḵharīdī̃*); with وہ / یہ or a feminine plural noun before it → *-ī̃* (وہ آئیں *āī̃*, لڑکیاں بیٹھیں *baiṭhī̃*). دیں / لیں follow the نے rule (رکھ دیں after نے → *dī̃*). Not for کر, جا, ہو, دے, لے (irregular past).
- New written entries: کیں *kī̃*; بات is now tagged feminine (generates باتیں *bātẽ*).

Lexicon changes (each checked against Rekhta unless marked)
- Added: خوشی *ḵhushī* (Rekhta khushii), یار *yār* (yaar), کرایہ *kirāyā* / کرائے *kirāe* (kiraaya, kiraae), چوک *chauk* (chauk), اگلا *aglā* (aglaa), پیدل *paidal* (paidal), عام *ām* (aam), پھول *phūl* (phuul), ممانی *mumānī* (mumaanii jaan), پھوپھا *phūphā* (phuuphaa), پھپو *phuppo* (Rekhta entry پُھپّو phuppo).
- Changed: چائے *chāy* → *chāe* (Rekhta chaae; the Urdu spelling has ئے); پھوپھو *phuphpho* → *phūphū* (Rekhta phuuphuu; the course keeps the spelling پھوپھو, see the follow-up below); ستتر *sathattar* → *satattar* (Rekhta satattar). (اٹھہتر was changed to *aṭhattar* and then reverted to *aṭhhattar*, ṭh + h as in Hindi अठहत्तर: the Rekhta slug athattar shows neither retroflex nor aspiration and may belong to the spelling اٹھتر. Unverified.)
- Checked and kept: ٹیپ *ṭep* (English loan, not in Rekhta; kept), بہنیں *bahnẽ* (generated from bahan/bahn), کھانسی *khā̃sī* (khaansii), بائیں / دائیں *bāẽ / dāẽ* (baaen, daaen), ڈیڑھ *ḍeṛh* (dedh), مہنگا *mahãgā* (Rekhta mahngaa: the slug does not mark nasals; kept as en-hi's *mahãgā*, native check), مینو *menyū* and فارمیسی *fārmesī* (loans, not in Rekhta; unverified), جمعرات *jumerāt* (jumeraat), اتوار *itvār* (itvaar), طالب علم *tālib-e-ilm* (taalib e ilm), مہربانی *mehrbānī* (mehrbaanii), چون *chavvan* (chavvan).

Homograph tests (run by hand, all right): کل میں لاہور گیا *maĩ*; لیکن میں نہیں جانتا *maĩ*; کیونکہ میں بیمار تھا *maĩ*; آج میں گھر میں ہوں *maĩ … mẽ*; کل مَیں گھر میں تھا; کیا میں اندر آ سکتا ہوں *maĩ*; پھر میں سو گیا *maĩ … so*; کل میں نے فون کیا *maĩ ne … kiyā*; آپ نے کیا کھایا *kyā*; آپ نے کیا خریدا *kyā*; ہم نے کیا دیکھا *kyā*; علی نے کام کیا *kiyā*; میں نے کام کیا ہے *kiyā*; میں نے کیا تھا *kiyā*; آپ نے کیا کِیا *kyā kiyā*. Two-clause sentences with no comma (جب میں چھوٹا تھا تو میں …, میں کل آؤں گا لیکن میں …) throw rather than guess: acceptable.

Then: `node tools/target/repron.js ur` (11 prons rewritten, all چائے) and a scratch script that re-checks every `<b>Urdu</b> <i>roman</i>` pair in lesson bodies (190 pairs; 1 fixed: مجھے چائے پسند ہے).

Follow-up after the advisor's check (same batch)
- The -یں rule was narrowed: the past reading without نے now needs an **intransitive** stem (آ, بیٹھ, رہ, سو, اٹھ, چل, پہنچ, رک, نکل, اتر, سک, مل, مڑ …) and a subject (وہ / یہ / a feminine plural noun, optionally after میری / ہماری / a number) as the first word of the clause, not followed by a postposition. So یہ دوا کھائیں, وہ کھڑکی کھولیں, کتابیں یہاں رکھیں, امی کو بلائیں, دادی کے پاس بیٹھیں all read *-ẽ*; وہ آئیں, لڑکیاں بیٹھیں, میری بہنیں کل آئیں read *-ī̃*.
- **Forced spelling:** a zer before یں (آئِیں, بیٹھِیں) forces the past *-ī̃*, like the tool's other homograph marks (the matcher ignores marks). Needed for a lone fill answer.
- **New میں rule:** right after a connector (کیونکہ, لیکن, مگر, اور, کہ, جب, اگر, تو, یا, پھر, بلکہ, تاکہ) میں is "I" ("in" needs a noun before it). This removes the throw on … کیونکہ میں بیمار ہوں and … لیکن میں …, so the Questions card no longer needs the mid-sentence مَیں (open point settled). After a time noun or a postposition (رات کو میں, یہ میں ہوں) it still throws.
- Note: چائے *chāe* is now a fourth intended Urdu/Hindi pron difference (Hindi चाय *chāy*); the profile's sample cards (§9, §6) still show *chāy*. پھوپھو kept as the profile's spelling, pron *phūphū* (Rekhta); the card note says it is often said *phuppo* (Rekhta also lists پُھپّو *phuppo*). Native check.

## Batch 2: decks-a.js, extra-a.js, decks-b.js, extra-b.js (read in full)

decks-a.js (2 wording/teaching, 1 pron)
- [teaching] ڑ note "Flick the tongue forward" → "A retroflex flap: curl the tongue back, then flick it forward."
- [teaching] ہم لاہور میں رہتے تھے note said a group of women says رہتی تھیں; many women use the masculine plural with ہم → "Many women also use رہتے تھے with ہم; رہتی تھیں is heard too."
- [pron] پھوپھو *phuphpho* → *phūphū*, note "in Pakistan often said phuppo".

extra-a.js: no change (all 36 dialogues, 26 examples, 9 patterns read).

decks-b.js (5 teaching/wording, 1 pron-related)
- [teaching] "ہوں is usually dropped after نہیں" → "often dropped" (open point: both are normal).
- [teaching] جمعہ کو note adds "In speech you also hear جمعے کو" (open point: days with کو).
- [teaching] لاہور کراچی سے چھوٹا ہے note said the compared thing "comes first"; it comes before the adjective.
- [teaching] کتنی دور "a fixed phrase" → "the usual phrase; کتنا دور is also heard" (open point).
- [wording] میڈیکل سٹور → میڈیکل اسٹور (the course spells اسٹیشن with ا).
- [pron/target] میں نہیں آ سکتا کیونکہ مَیں بیمار ہوں۔ → unmarked میں (tool fixed; open point settled).

extra-b.js (1 language, 1 consistency)
- [language] جی، نیلی اور کالی بھی ہے۔ (two shirts) → ہیں۔
- [consistency] pattern یہ ___ کتنے کا ہے؟ duplicated extra-a's; now the feminine frame یہ ___ کتنے کی ہے؟ (یہ قمیض کتنے کی ہے؟).

Open points settled in the decks: آم card already says آم and عام are two spellings, one sound (profile §4.11 is wrong; nothing to change in the course). خوش آمدید has one card only, in Traps (not in Greetings): no duplicate. خدا حافظ is a Greetings card and is not on the Traps deck: no duplicate. Cross-deck duplicate targets: none (script). Duplicate meanings inside a deck: none.

Checks after the batch: repron 0 rewritten; b/i pairs 190, 0 differ; gen no pronAnswers lines; validate PASS.

## Batch 3: lessons-1.js (letters-1 … adjectives; read in full)

- [teaching] letters-4: the lead's edit put ہفتہ (week) in the Letters 4 deck in place of the duplicate کمرہ card; the lesson body explained final ہ = -ā with کمرہ only. Added the example row ہفتہ *haftā* "week" after کمرہ, so the lesson matches its deck. Its practice uses کمرہ, کتاب, گھر, which the body teaches as example rows, so no item needs a word without a card or an example (open point settled).
- [practice] hona: two mc distractors were colloquial word orders a native may actually say (میں ہوں ٹھیک, ہم ہیں یہاں; open point). Replaced with clearly wrong verb forms: میں ٹھیک ہو, ہم یہاں ہو (why for the first updated).
- [teaching] intro: added "Learn these two as set phrases for now; the lesson on daily habits explains how they are built" after رہتا ہوں / رہتی ہوں (open point: سے / میں and رہتا / رہتی ahead of their lessons; the profile §8 puts them in intro on purpose, the body already says postpositions come later).
- [teaching] adjectives: "Adjectives that do not end in -ā stay the same" was true but the course also teaches تازہ (ends in ہ, never changes) as unchanging; added "A few that end in ہ, such as تازہ fresh, do not change either."
- Read and kept: real-word distractors in letters lessons (بات, دیر, ڈور, برا, نامہ, مان, کانا, گانا, پہل, لالی): each is wrong for the prompt's meaning, which the item states (open point: acceptable). aspirates mc بَ / بِ / بُ / بّ differ only by marks, but mc is tapped, not typed: kept.
- Body lengths (English words, script count): all 28 lessons between 251 and 364; lessons-3 bodies are near the 250 floor (251–264) but none is under it (open point; nothing cut there).

Checks: repron 0 rewritten; b/i 191 pairs, 0 differ; no pronAnswers lines; validate PASS.

## Batch 4: lessons-2.js (numbers … time; read in full)

- [practice] numbers: "سو روپیہ" / "پانچ سو روپیہ" were wrong options, but روپیہ after a number is heard (open point: سو روپیہ vs روپے; a distractor must be wrong, not just less common). Replaced: check 3 → پچپن روپے; mc 3 → سو پیسے (why updated).
- [wording] questions fi "How is this book?" → "What is this book like?" (answer کیسی unchanged).
- [practice] imperative ty "Come in (to a friend)": added اندر آ جاؤ (as natural as اندر آؤ).
- [pron] postpositions table: the romanisation cell for میں read "ghar mẽ" among single words → "mẽ".
- [teaching] habitual: "ہوں / ہے after نہیں is usually dropped" → "often dropped" (open point; same wording as the deck note); added "With ہم, many women use the masculine plural too: ہم کرتے ہیں" above the table that lists ہم کرتی ہیں.
- [teaching] time: after "جمعہ کو, اتوار کو" added "In speech you will also hear جمعے کو and ہفتے کو, with the -e form a postposition brings" (open point: days with کو; the course teaches the oblique, so the plain form needed a word). No typed item asks for a day, so no answer list changes.
- [practice] time ty "What time is it?": added کیا بجا ہے and ٹائم کیا ہوا ہے (the body teaches the second).
- Read and kept: "(neutral order)" cues in questions (the body defines neutral order and names the casual کیسے ہیں آپ؟, so the cue is clear: open point settled); "ساڑھے دو" as the wrong option for 2:30 (2:30 is ڈھائی; ساڑھے starts at 3:30: open point settled); compare never calls زیادہ بڑا wrong (the body says it is heard for emphasis; the tip's wrong form is the one without سے: open point settled); کتنی دور is not in lessons-2.

Checks: repron 0; b/i 191, 0 differ; answer-fold scan clean; no pronAnswers lines; validate PASS.

## Batch 5: lessons-3.js (continuous … connectors; read in full)

- [teaching] continuous: "the final ہے or ہوں is usually dropped in speech" → "often dropped" (same wording everywhere now).
- [practice] food-prices ty "Two samosas, please": added دو سموسے دے دیں and دو سموسے دے دیجیے (compound request, as natural as دیجیے / دیں).
- [teaching] directions: کتنی دور "a fixed phrase … whatever the place" now adds "(you may also hear کتنا دور)", matching the deck note (open point settled: کتنی دور taught, کتنا دور never marked wrong; no item offers it as a wrong option).
- [consistency] future: پھر ملیں گے was glossed "See you later" here and "See you again" on its Greetings card and in extra-a; the example row and the mc prompt now say "See you again".
- [pron] connectors ty "I was sick, so I stayed at home": two accepted answers carried a mid-sentence مَیں after اس لیے; the tool now reads میں after لیے as "I", so the mark is gone (the romanised twins are unchanged).
- respell.js: لیے added to the connector set for the میں rule (اس لیے میں → *maĩ*; آپ کے لیے میں نے → *maĩ ne*).
- Read and kept: the past lesson's table lists آئیں / بیٹھیں as feminine plural past (no pron there; no practice item uses them); کیا "did" written unmarked in آپ نے کیا کیا؟ (the tool reads it right; the body says the mark appears only "where did could be misread"); "دو روٹی" appears nowhere in the course (the body teaches چار روٹیاں; open point: nothing marks دو روٹی wrong); the 9 lessons-3 bodies are 251–264 English words: at the floor, not under it.

Checks: repron 0; b/i 191, 0 differ; answer-fold scan clean; no pronAnswers lines; validate PASS.

## Batch 6: cross-file passes

- [practice] Script check of every mc / check option that is a reordering of the right answer (31 found). Two could be said in casual speech, so they were not safely wrong: have mc "میرے پاس پیسے ہیں نہیں" (emphatic ہیں نہیں is colloquial) → "میرے پاس پیسے نہیں ہے" (agreement error); directions mc "کتنی دور اسٹیشن ہے؟" → "اسٹیشن کون دور ہے؟". The other 29 (کو جمعہ, پر میز, میں ہیوسٹن میں تھا رہتا …) are plainly wrong and stay.
- Answer lists against the engine folds (vowel marks, ۔ ؟ ،, Arabic ي / ك, ی + hamza): no list has two answers that fold to one, no Latin answer, no wrong option that folds to an accepted answer, no lone میں / کیا fill answer (scratch script).
- Hand-typed romanisation outside `<b>…</b> <i>…</i>` (deck notes, why lines, prompts, checks): every script-lesson prompt ("Build yeh ṭopī hai …") matches respell(answer); the other hits are single aspirate symbols (کھ kh) and English words after Urdu. Nothing to fix.
- More words checked against Rekhta: بہن *bahan* (bahan), دوپہر *dopahar* (dopahar), صاحب *sāhab* (Rekhta lists saahab beside saahib). شہر: Rekhta writes shahr; the lexicon keeps the spoken *shahar* chosen by the profile (§6.2, en-hi): native check.

Verified vs not: see batch 7.

## Batch 7: after the advisor's second check

- respell.js: a -یں / -ئیں form right after a verb stem or لے / دے is a compound request, never the past: دو روٹیاں لے آئیں, کتابیں لے آئیں, چار کرسیاں یہاں لے آئیں → *le āẽ* (were *āī̃* by the subject rule); وہ نہیں آ سکیں keeps *sakī̃*. The header now documents the -یں rule, the آئِیں mark and the stem rule.
- Regression: every Urdu string in the course (cards, dialogues, examples, patterns, body rows, fill and type answers with their fill sentences) run under the original and the new respell.js: the only differences are چائے *chāe*, پھوپھو *phūphū*, and four strings that used to throw (the unmarked … کیونکہ میں بیمار ہوں card, the two اس لیے میں answers, the یار dialogue line).
- [teaching] past: the body said every verb with an object takes نے, but the course has میں راستہ بھول گیا ہوں, میں نہیں سمجھی and ابھی لایا. Added: "A few verbs skip نے even with an object: لانا (bring), and verbs joined with جانا, such as بھول جانا (forget): میں راستہ بھول گیا. سمجھنا (understand) usually goes without it too: میں نہیں سمجھا."
- [practice] numbers: روپیہ was still the wrong tile in the "fifty rupees" order item and the "a hundred rupees" type item; replaced by روپوں (the form before a postposition, plainly wrong here). Open point سو روپیہ vs روپے now settled: روپیہ after a number is never marked wrong anywhere; the body teaches روپے.

Verified vs not (dictionary = the Rekhta dictionary; most checks read the transliteration in search-result slugs, which shows vowel length but not nasals, retroflexes or aspiration; two entries, پھوپھو and پھپو, were fetched in full)
- The course uses 615 distinct listed word forms. 19 lexicon entries that the course uses were checked: 17 agree (یار, عام, ممانی, پھوپھا, پھوپھو, چائے after the change, کھانسی, بائیں, دائیں, ڈیڑھ, جمعرات, اتوار, طالب علم, مہربانی, بہن, دوپہر, صاحب); 2 kept against Rekhta on purpose: مہنگا *mahãgā* (Rekhta mahngaa) and شہر *shahar* (Rekhta shahr). 9 more entries were checked or added but are not used by the course today (خوشی, کرایہ, کرائے, چوک, اگلا, پیدل, پھول, ستتر, چون). Everything else is the profile author's knowledge, unchecked.

Profile items a reviewer cannot edit (for the lead): profile.json `greet` lists السلام علیکم twice; the profile's sample cards (§6.4, §9) still show *chāy* and *phuphpho*; §2.8 does not describe the new -یں rule, the آئِیں mark, the stem rule, or میں after a connector; §4.11 says آم and عام share a spelling (they do not; the course is right).
