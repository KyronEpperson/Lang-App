# ar-en cold review (AR-REVIEWER), 2026-11-18

**Scope.** I edited only these:
- everything under tools/content/ar except profile.json and deviations*.json;
- the `t` fields of tools/i18n/ar/ui.json and tools/i18n/ar/roadmap.json.

I did not touch any generator, pack, src/app.html or other language. I did not run build.sh and did not commit.

**Status: every check passes** on scratch outputs (`S=…/scratchpad/p2`):
- `node tools/content/gen.js ar $S/ar-r.js` → `validate.js` **PASS: all checks OK**. `parity.js` **PASS: shared English side matches ko-en** (WARN: unused deviations `lessons:arabic-traps`, `lessons:be-2`, which was there before this review). `lint.js` **0 blocking · 7 meaning variants (info) · 0 K-pop leftovers**.
- `python3 tools/i18n/gen.py ar $S/i18n-ar-r.js` → exact 769, patterns 272, road 425. `node tools/i18n/validate.js ar` gives **PASS** with 1 length warning: «الكتابة بالإنجليزية», «البريد الإلكتروني», both wording set by the profile.
- `python3 tools/i18n/road.py check ar` → **roadmap strings 425/425 translated**.
- `node --check` passes on all 9 JS files.
- Hangul under tools/content/ar: **0** files.
- `node tools/content/ar/pron_check.js` → 807 pairs · 0 phrase conflicts · 0 word conflicts · 0 rule hits.
- ui.json and roadmap.json, compared with their pre-review copies with `t` removed, are identical, so only `t` changed (14 and 11 values).

## 1. What changed (grouped, with examples)

### Card notes and meanings (decks.js, extra.js)
No Korean-course leftovers were found: no Konglish, no Hangul, and no politeness-level notes. The "What's up?" note was already rewritten. *Who's your bias?* is a shared target, and its note explains the term.
- **False or misleading notes (5):**
  - *This class is boring.*: the note did not describe a real calque. Before: «من "أشعر بالملل في الدرس" يقول بعضنا I'm boring». After: «كلمة "ممل" تقود بعضنا إلى boring في كل موضع، فيقول I'm boring وهو يقصد "أشعر بالملل"…».
  - *Let's discuss the plan.*: «"نتحدث عن الخطة" تقود إلى discuss about» was wrong, because *talk about* is correct English. The calque comes from «نتناقش في / حول الخطة» (profile §9).
  - *It depends on you.*: «depends of / depends from فخطأ» is a Romance-language error. Replaced with the Arabic-speaker error «It's depend on you ✗».
  - *singing*: ŋ «ينطق من آخر الحلق» (pharyngeal) → «من أقصى الفم», as in the `pron` lesson key.
  - *I'm off tomorrow*: «وللإجازة السنوية ليوم واحد» (a leftover of the Korean note on annual leave). A day off is not annual leave, so it now reads «ومثلها: I'm taking a day off tomorrow، أي سآخذ يوم إجازة غدا».
- **Unnatural wording (9):**
  - «عربيتك ممتازة!» (colloquial) → «لغتك العربية ممتازة!».
  - Gender agreement: «الحرف t … تلتقيان» → «الصوت t … يلتقيان», «حرف الجر in … تعني» → «يعني», «الحرفان ea … تنطق» → «ينطقان».
  - *Better late than never* now has the same proverb in the deck and in the idioms lesson: «أن تصل متأخرا خير من ألا تصل».
  - PAUSE *I see* «أرى ذلك» → «آه، فهمت».
  - *Stay hungry, stay foolish* «ابق أحمق», which reads as an insult → «ابق متعطشا للمعرفة، ولا تخش أن تبدو ساذجا».
  - *Cheers* «في صحتك» (a drinking toast) → «عند رفع الأكواب للتهنئة», the neutral gloss the lead asked for.
  - *Hopefully* «على أمل ذلك» → «نأمل ذلك / إن شاء الله», the same gloss in the deck and in the `polite` lesson.
- **Second floor.** The example «لكن أظنه في الطابق الأول» was correct for the real floor, but it looked like a mistranslation. It now reads «…في الطابق الأول (في أمريكا يسمى second floor)».
- **Kept as written:**
  - «يرحمك الله (لمن عطس)» for *Bless you*: the everyday equivalent, neutral.
  - «إن شاء الله» in the *I hope so* glosses.
  - «الحمد لله» as a second gloss of *What a relief!*.
  - Masculine defaults where the speaker's gender is not given («أنا متزوج», «لست متأكدا», «تبدو رائعا»). This is profile §2's rule, applied consistently: there are no «/ة» variants anywhere.

### Teaching accuracy in lessons (lessons.js, more/a1.js)
- **`polite`, «إن شاء الله».** The heading «"إن شاء الله" ليست وعدا» and the claim that it may mean «نعم» or «ربما» characterised the phrase. Replaced with usage only: «نقول "إن شاء الله" عن كل أمر في المستقبل، ويفهم السامع العربي من السياق هل هي وعد أم أمل. أما في الإنجليزية فنختار العبارة حسب المعنى…».
- **`plurals`.** «بخلاف العربية التي تقول "أماكن أخرى"» was the wrong example: «أخرى» is feminine singular, so it shows no plural agreement. After: «بخلاف العربية التي تطابق بين الصفة والموصوف ("رجال آخرون"، "بيوت كبيرة")». The «جمع غير العاقل يعامل معاملة المفرد المؤنث» claim is correct and stays.
- **`present`.** «تأتي هذه الكلمات قبل الفعل مباشرة، لا في أول الجملة» is false (*Sometimes I…*) → «مكان هذه الكلمات المعتاد قبل الفعل مباشرة، لا بعده كما يحدث كثيرا في العربية ("أشرب دائما الشاي")».
- **`arabic-traps`.** «married with كما في "متزوج من"»: «من» calques as *from* and «بـ» as *with*. The body now names both, matching the deck note.
- **`numbers`.** «والفاصلة تدل على الوحدة» (unclear) → «نقسم الرقم من اليمين إلى مجموعات من ثلاث خانات، وتفصل الفاصلة بين الآلاف والملايين».
- **Checked and correct, unchanged:**
  - the three recurring errors: the `be` tip asks «هل في الجملة فعل آخر غير be؟», `countable` has the request exception (*Can I have some water?*), and the `to-ing` heading names enjoy / finish / mind;
  - the `third-s` agreement claims (Arabic verb-first sentences take a singular verb before «الناس»);
  - the `be-2` claim that be meets another verb only in -ing «في ما تعلمناه حتى الآن».

### Prompts that led to unaccepted answers (practice.js, more/a1.js)
- **Shared lessons (prompt made more specific; `a` unchanged):**
  - prep «أنا في البيت الآن» → «أنا في البيت». *I'm at home right now* was rejected, and every listed variant answers the bare prompt.
  - phrasal «أعتني بقطتين» → «…(بالمضارع البسيط)». The bare مضارع also invites *I'm looking after two cats*.
  - present «أشرب الشاي» → «أشرب الشاي (بالمضارع البسيط)», for the same reason. «(عادة)» was tried first and rejected: «عادة» is this lesson's word for *usually*, so it invited *I usually drink tea*.
- **ar-only `arabic-traps` (answers and cues added):**
  - «ارتكبت خطأ» now also accepts *I've made a mistake* (+ full form);
  - «أحتاج إلى بعض النصائح» → «…(باستخدام advice)», because *I need some tips* was rejected;
  - mc «I study at the ___ (أدرس في المكتبة)» → «(في المكتبة التي نستعير منها الكتب)». «المكتبة» also means a bookshop, so the distractor *bookstore* was a defensible second answer.
- The other 120 type items were read as a `lesson | p | a` listing. No other natural answer was missing. The `be-2` and `arabic-traps` mc items were re-read for two-right-answer options; only the library item above needed a change.

### Interface wording in content
- `idioms` order item «علي أن أذاكر بجد» → «أدرس», as in the deck and in b1 / a2.
- Glossary scan of content and `t` values for off-glossary variants:
  - deck 17 *look forward to* «لا الفعل المجرد» → «لا التصريف الأول»;
  - UI `irregular: {x}` «غير منتظم» → «شاذ», as in content and roadmap;
  - «أداة الاستفهام»: 0 hits.
- Lint meaning variants went from 11 to 7. Same gloss across files now for *I hope so*, *Hopefully*, *It depends on you*, *It costs an arm and a leg* and *What do you do?* (a1 «ما عملك؟» → «ماذا تعمل؟»). The remaining 7 are deliberate parenthetical additions on lesson rows: «(دائما)», «(الكلاب عموما)», «(I am agree ✗)», the idiom image.
- `passive` «يتم + مصدر» where Arabic has a plain passive: «يتم تقديم الإفطار» → «يقدم الإفطار» (lesson row and mc prompt); «يتم تنظيف الغرفة» → «تنظف الغرفة». «تم إلغاء الاجتماع» and «تمت سرقة هاتفي» stay. They are standard modern MSA, and unvocalised «سرق هاتفي» would read as active.

### Formatting and right-to-left
- **Hint format, one convention:** «الكلمات: key · words — note» (or «الكلمة: word — note» for a single word). 81 hints in a1 / a2 / b1 were rewritten from «note: key · words», for example «للطقس نبدأ بكلمة it: it · hot · today» → «الكلمات: it · hot · today — للطقس نبدأ بكلمة it». practice.js «الكلمتان:» → «الكلمات:».
- **RTL rule 1.** A first-strong-letter script was run over every native-side string in the generated pack: meanings, notes, DESC, prompts, options, why, hint, blurbs, titles, table cells, PATTERNS, PAUSE, GOALS and TITLES. The writers had already met the rule for prompts, why and hints (0 hits). Fixed:
  - `perfect-2` table headers «for + مدة / since + نقطة بداية» → «مع المدة: for / مع نقطة البداية: since»;
  - `conditionals` cells «had + التصريف الثالث / would have + التصريف الثالث» → «الماضي التام: had + …» / «صيغة would have + …».
- **Rules 2–4:**
  - **0** direction marks, Arabic-Indic digits or arrows in content;
  - **0** Persian ی / ک;
  - **0** hamza-less forms across content and all `t` values (الى، اذا، اداة، الانجليزية، انت، اكثر، ايضا، اول، اين، ان، او…). Positive control: the same scan finds «إلى» 193 times, «أداة» 287 and «أن» 159;
  - one tatweel I had introduced myself was removed again.
- **Blurbs.** 15 blurbs in a2 / b1 and `tense` lacked the full stop that lessons.js and a1 use. Four of them ended on a Latin word and were reworded to end in Arabic: `tense`, `will`, `conditionals` and `first-conditional` («…ولا نستخدم will بعد if مباشرة.»).

### Pronunciation
- **0 changes needed.**
  - pron_check: 0 / 0 / 0.
  - Every ar English → IPA pair compared with zh's for the same English: **0 differences**.
  - The **86 ar-only pairs** were read by hand: localised cards, the 20 deck-18 additions, the 24 deck-21 cards, and the `be-2`, `arabic-traps`, `articles-2`, `passive` and `numbers` rows.
  - Names and places are identical everywhere: Sara /ˈserə/, Dubai /ˌduːˈbaɪ/, Cairo /ˈkaɪroʊ/, Egypt /ˈiːdʒɪpt/, Morocco /məˈrɑːkoʊ/, Haddad /həˈdæd/, the UAE /ðə ˌjuː eɪ ˈiː/, Egyptian /ɪˈdʒɪpʃn/, Saudi /ˈsaʊdi/, dirhams /ˈdɪrhæmz/.
- **PRON-RULES.md rewritten for ar.** The file in the folder was zh's text: Chinese names, and zh's own change log presented as ar's. It now records:
  - the zh base;
  - the zh comparison;
  - ar examples for every rule;
  - the epenthesis rule (errors shown in Arabic letters, never in IPA);
  - a names table.

### Interface (ui.json, 14 `t` values)
- **Full stops:**
  - «يدمج مع المحفوظ هنا ولا يضيع شيء» + «.»;
  - «تم نسخ CSV» → «تم نسخ النص (CSV).», which no longer ends on a Latin word;
  - «…(المكافأة: 25 XP)» + «.»;
  - «(الدرس مكتمل بالفعل)» + «.».
- **«نعم / غير مؤكد»:** «غير مؤكد» → «ليس تماما». It answers «هل هذه البطاقة معروفة؟» and is gender-neutral. The calibration pattern that quotes it was updated to match.
- **Wording:**
  - «أول رسالة ستكون البداية» → «يسعدنا أن تكون رسالتك الأولى»;
  - «مراجعة الوارد» → «صندوق الوارد»;
  - «يستمر التعلم لأنه مطلوب» → «نتابع التعلم بناء على طلبك»;
  - «ما الذي تم سماعه؟» → «ما الذي سمعته؟»;
  - «أداء نظيف» → «أداء مثالي».
- **Legacy level *Senior*:** «التقدم» collided with the Progress tab, so it is now «الخبرة».
- **#media:** «#الإعلام» (journalism) → «#الترفيه».
- **Checked, unchanged:**
  - tab bar «اليوم · تمارين · مراجعة · الدروس · مهارات · التقدم · ملاحظات» and session chips (not lengthened);
  - weekday headers ح ن ث ر خ ج س;
  - level titles exactly equal meta.js TITLES (البداية، الدراسة، المحادثة، السفر، الطلاقة، الاحتراف، الإتقان);
  - plan names exactly equal PLAN_PRESETS;
  - goal labels equal GOALS;
  - the lead's box-legend string;
  - language-name slots in allowed positions only.
- **Count patterns:** all 196 patterns with a number slot were scanned. No noun or agreeing word follows a slot (only the units ث / د / XP). Samples rendered at 0, 1, 2, 5 and 21 read correctly, for example «البطاقات: 21», «المتبقي: 5 · المجموعات: 5», «تم وضع الخطة. الأسابيع: 1.».
- **Arrows, decision:** flip every arrow that means back / forward or "leads to" in the layout, and leave ↔ alone. So ← Back → «→ رجوع», ↩ Reply → «↪», ↶ Undo → «↷», Show rule ↗ → «↖», and A → B → «A ← B». This was already consistent; no change.

### Roadmap (roadmap.json, 11 `t` values)
- «أسئلة نعم أو لا: … phải không?» ended on a Latin question mark → «أسئلة نعم أو لا مع phải không».
- «ـي, ـكَ, ـه» (Latin commas) → «ـي، ـكَ، ـه». The tatweel and fatha stay there and in «أنتَ», because these quote Arabic grammar (allowed).
- «إسبانية إسبانيا» / «فرنسية فرنسا» → «الإسبانية (إسبانيا)» / «الفرنسية (فرنسا)», the same pattern as German.
- «和・还是: و وأو» → «"و" و"أو"».
- «ada: يوجد وامتلاك» → «الوجود والامتلاك».
- *likes* «الحب» (romantic) → «الإعجاب» in 5 rows: ko, ja, pt, it, hi.

### Lead's doubts with no edit (verdicts)
- **Spelled-out dollar amounts: kept.** The Arabic follows the English side. Where the English spells the number («ten dollars», «fifty dirhams», a dialogue line such as *twenty-three fifty*), the Arabic spells it too («عشرة دولارات», «خمسون درهما»). Where the item teaches reading a numeral (the `numbers` prompts «ثمنه 15 دولارا», «4 دولارات و 99 سنتا»), the Arabic uses Western digits, as profile §9 asks.
- **`be-2` fill «It __ ten dollars.» with p «يكلف عشرة دولارات»: kept.** The Arabic verb cues *costs* without suggesting *is*, which is exactly the contrast the item tests (*It is cost ✗*).
- **`plurals` / `third-s` claims about Arabic agreement:** checked against profile §8 (`plurals`: adjectives take no -s, *others places ✗*; `third-s`: Arabic verbs agree). One example fixed (above); the rest kept.
- **«تم + مصدر» passives:** profile §8 `passive` notes that modern Arabic prefers active and impersonal forms. Two «يتم» rows changed (above); «تم إلغاء» and «تمت سرقة» kept.
- **«اذكر الذئب وهيئ له العصا»:** kept. It is a real Arabic proverb and the exact image-equivalent of *Speak of the devil*; the deck keeps the plain gloss «ذكرناه فحضر!».
- **«أذاكر»:** changed to «أدرس» (above).
- **Pron-key anchors «ج المصرية» / «ج الشامية»:** kept. Each already has a description and an English example, as profile §6 requires.

## 2. Edit counts per file

| file | wrong / misleading | unnatural wording | pron | formatting | total |
|---|---|---|---|---|---|
| decks.js | 5 | 7 | 0 | 0 | 12 |
| extra.js | 1 | 3 | 0 | 0 | 4 |
| lessons.js | 1 | 4 | 0 | 1 | 6 |
| practice.js | 2 | 1 | 0 | 1 | 4 |
| more/a1.js | 7 | 1 | 0 | 49 | 57 |
| more/a2.js | 0 | 0 | 0 | 31 | 31 |
| more/b1.js | 0 | 3 | 0 | 17 | 20 |
| meta.js | 0 | 0 | 0 | 0 | 0 |
| i18n/ar/ui.json (`t`) | 0 | 10 | 0 | 4 | 14 |
| i18n/ar/roadmap.json (`t`) | 0 | 9 | 0 | 2 | 11 |
| **total** | **16** | **38** | **0** | **105** | **159** |

How the edits were counted:
- One edit is one replaced string.
- Formatting is mostly the 82 hint-label edits (81 in a1 / a2 / b1 plus 1 in practice.js), plus 15 blurb full stops, 2 RTL table rows, and full stops and commas in the interface.
- A refinement of my own earlier edit (the `present` cue, a tatweel I had introduced, a blurb reworded twice) is counted once.
- New files: PRON-RULES.md (rewritten) and this REVIEW.md. pron_check.js is unchanged; its header already named the ar paths.

## 3. What I read in full, and what I only scanned

**Read in full:**
- decks.js: all 21 decks, 410 cards, every meaning and note.
- extra.js: 86 dialogues, 59 examples, 25 patterns, 4 pause sets, 26 idioms.
- lessons.js: all 11 bodies and their check sets.
- practice.js and more/a1.js, a2.js, b1.js: all 41 lessons, every body, check, mc, order, fill and type item, every `why` and hint.
- meta.js and DECKNAMES.md.
- The `t` values of all 769 exact and 272 pattern strings in ui.json, read as a key ⇒ t listing.
- All 425 roadmap titles.

**Read by script, not by eye:**
- the first-strong-letter, marks, digits and harakat scan of the whole pack;
- the count-pattern slot scan;
- the zh IPA comparison;
- the comparison showing only `t` changed in the JSON files.

**Only scanned or partly read:**
- profile ar.md: §1–3, §6, §7, §9 and §10 read; §4, §5, §8 and §11 skimmed or not read.
- PIPELINE.md: first ~80 lines only.
- zh/REVIEW.md: read. de/REVIEW.md: **not read**.
- ui.json reference fields (`ko`, `context`, `where`): not read; only `t` against the English key.
- The mc distractors: read with each lesson, but not re-audited as one listing the way the type items were.

## 4. For a native speaker: top ten to check
1. **«ليس تماما»** as the "Not sure" answer to «هل هذه البطاقة معروفة؟». The alternatives «لا أدري» and «لست متأكدا» are gendered or blunter.
2. **The `email` check built on «أتعبناكم معنا».** Unverified: profile §8 `email` names only the openings and closings, not a thank-you formula. I kept it on my own judgement that it is a real spoken thank-you for someone's effort ("we put you to trouble"), not a leftover of the Korean premise. Its literal sense matches the fixed English distractors *You suffered a lot* / *Good suffering*; a written formula such as «جهودكم مشكورة» would not.
3. **«الطابق الأول (في أمريكا يسمى second floor)».** Correct and explicit, but long for an example translation.
4. **The new `polite` paragraph on «إن شاء الله»** («…ويفهم السامع العربي من السياق هل هي وعد أم أمل»). Usage only, no comment on religion. Is the tone right?
5. **«عند رفع الأكواب للتهنئة»** for *Cheers*. Neutral, but descriptive rather than an equivalent.
6. **Masculine defaults** in self-introduction cards («أنا متزوج», «لست متأكدا»). This follows profile §2; women learners may prefer «/ متزوجة».
7. **Passives.** «تم إلغاء الاجتماع» and «تمت سرقة هاتفي» are kept, while «يقدم الإفطار» and «تنظف الغرفة» are now plain passives. Is the split acceptable?
8. **Proverbs:** «اذكر الذئب وهيئ له العصا» (idioms table and fill prompt) next to «ذكرناه فحضر!» (deck), «حين يشيب الغراب», «من بكر ظفر», «يا غريب كن أديبا».
9. **Pron-key anchors** «ج المصرية» for /g/ and «ج الشامية» for /ʒ/. Both have descriptions and English examples, but they are regional.
10. **Interface:** «#الترفيه», «الخبرة» (legacy *Senior*), «نتابع التعلم بناء على طلبك», and the verbal-noun error style («إعادة المحاولة بعد قليل ممكنة»), which follows profile §10 but can read stiffly.

## 5. Found but not fixed (outside my scope or bound by parity)
- **`polite` check 2, option «~ing (opening)».** It starts with a Latin letter among Arabic options (RTL rule 1). ko-en has the same option without Hangul, so parity binds it. I tried «صيغة -ing (opening)» and parity failed, so I reverted. It needs an `items` deviation (`polite#check2`).
- **English cells left as they are.** The `pron` key's example cells (park /ˈpɑːrk/، bark /ˈbɑːrk/) and the `articles` class="k" cells («a university (الصوت الأول /j/)») begin with Latin by design: they are English examples with an Arabic gloss, not Arabic text. PATTERNS formulas («a / an + اسم») and PAUSE labels («Compliment · مجاملة», built by gen.js) are left as they are for the same reason.
- **Defensible distractors (parity-bound):**
  - countable mc *Can I have ___ water* offers *a*, which is normal restaurant English;
  - *Do you have any question?* is grammatical.
- **parity WARN:** `lessons:arabic-traps` and `lessons:be-2` are unused, because `extraLessons` covers them. They are in deviations.json, which is outside my scope.
- **Roadmap `en` basis line** «…معدل لمتحدثي الكورية» is faithful to the shared English roadmap, but odd for Arabic users. It is the lead's call.
- **Roadmap titles that begin with a target-language word** (ja, zh, vi, th, hi, ru quotes). They render correctly: `.rm-it span` is not `plaintext`, so it inherits RTL. I left them.
- **The `Type` key** serves both the quiz-mode chip and the feedback form's radiogroup label (zh's finding). «كتابة» fits only the chip; an engine key split would fix it.
- **The lead's own string** «جديدة ← الصندوق 1 (اليوم) ← {1} · 6 = متقنة · بين القوسين: عدد الأيام» is kept as instructed.
