# Urdu (ur) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English (`rmT`). It is written directly in road.py's output shape, using the tl file as the skeleton, because road.py still cannot run (see `tools/i18n/tl/NOTES.md` §5).
- The generated pack is `packs/i18n-ur.js`.

Build: `python3 tools/i18n/gen.py ur && node tools/i18n/validate.js ur`. It passes with **0 warnings**: no overflow labels and no identical-to-English class. Urdu counts as a distinct script, so `validate.js` does not run that check; the list in §2 was computed by the build lint instead.

The only course this interface serves is **ur-ko** (Korean for Urdu speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *کوریائی*, *ہنگل*, *رومن*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*انگریزی*). They are only shown in an English course, which Urdu speakers do not have. ar and hi rewrote these keys for English, so they were models for mechanics only, not for wording. tl and ceb were the models for the Korean keys.

Author: not a native speaker. Everything here needs an Urdu speaker's check (§5).

## 1. Register, script and spelling (one decision each)

- **Variety:** everyday standard Pakistani Urdu, the way Pakistani apps and phone UIs write it. Persian and Arabic words are used where everyday speech uses them; heavy literary words are not (no *دریافت کریں* for "ask"). Common English tech words are written in Urdu script: *ڈیوائس, سنک, ایکسپورٹ, امپورٹ, اکاؤنٹ, ای میل, لنک, کوڈ, فائل, سیٹنگز, سائن اِن, ڈیلیٹ, شیئر, ٹیپ, سوائپ, کوئز, ڈرل, سیشن, لیول*. Hindi-only Sanskrit words are never used.
- **Address:** **آپ** everywhere, never تم / تو. آپ is the safe, normal register of Pakistani app copy. Informal تم would sound rude from an app to a stranger.
- **Commands:** the polite **-یں** form for buttons and instructions (*کریں, کھولیں, چنیں, سنیں, دہرائیں, چھوڑیں, ٹیپ کریں*). The *-یے* form (*کیجیے*) is not used: it is more formal and longer. Some very short buttons are a bare noun or verb stem where the English is a noun (*شفل, ڈیلیٹ, منسوخ, چیک, ری لوڈ*).
- **Please:** *براہ کرم* only where the English says "please" (one string). No *پلیز*.
- **Learner's gender:** Urdu verbs show the subject's gender. Rule, in this order:
  1. Prefer a wording where no verb agrees with the learner: dative or noun forms (*کیا آپ کو ہنگل پڑھنا آتا ہے؟*, *آپ کو کیا سیکھنا ہے؟*, *آپ کی زبان کون سی ہے؟*, *یہ آپ سے ہو جائے گا!*), imperatives, or a transitive past with نے (*آپ نے کون سا سنا؟*).
  2. First-person lines (answer choices) use impersonal forms (*کام چل جاتا ہے*, not *کام چلا لیتا ہوں*).
  3. Only if neither works: the generic masculine plural with آپ.
  - A one-off grep for masculine endings (*تے ہیں, رہے ہیں, سکتے, چاہتے, چکے, ہوں*, and *بولا*-type intransitive pasts) was run, and every learner-gendered hit was reworded, including the generic *آپ … سکتے ہیں* in the privacy text and "I nailed it" (*خوب ادا ہوا*, not *ٹھیک بولا*).
  - This is not part of the lint. A native reader should still watch for gendered forms (§5).
- **Signs next to numbers:** these follow ar, because in RTL a sign moves to the other side of the digits (`80%+` shows as `+80%`).
  - `+25 XP` → *انعام: 25 XP*; `80%+` → *80% یا زیادہ*; `~5 min` → *تقریباً 5 منٹ*; `box 3+` → *خانہ 3 یا اوپر*; `+{n} d` → *{1} دن بعد*; `{n}×` → *{1} بار*.
  - `× 3`, `×{n}` (combo) and `new 5 + {n}` are kept, as ar keeps them.
- **Counts:** a slot number must read correctly at 1 and at 2+. Nouns that do not change in the direct plural are used after a slot (*{1} کارڈ, {1} دن, {1} ڈیک, {1} سبق, {1} منٹ, {1} راؤنڈ, {1} سوال, {1} پیٹرن, {1} پوائنٹ*). Where the noun or adjective would change (*ہفتے, نئے, سیکھے گئے, اندازے, کوششیں, لائنیں, مکالمے*), the line uses the *label: value* shape that ar uses (*ہفتے: {1}*, *نئے: {1}*, *سیکھے گئے کارڈ: {1}*). Oblique plurals (*دنوں*) never directly follow a slot.
- **Right to left.** The pack holds no bidi control characters: no RLM / LRM, no U+2066–2069, no ZWNJ / ZWJ, no tatweel. The engine wraps every filled slot in first-strong isolates for `RTL_LANGS` languages (`i18nDict`, src/app.html ~1152). But see §6 item 2: `setI18n` does not do this wrapping.
  - Arrows that mean "back" are flipped, as ar does: *→ واپس, → تمام اسباق, → اسباق*.
  - Direction arrows in mode labels and flows are written as ← in logical order, so they point along the reading direction. Examples: *پڑھنا 한 ← اردو* (read Korean, answer in Urdu), *یاد کرنا اردو ← 한*, *پیش رفت ← بیک اپ ← فائل شیئر کریں*, *{1}/{2} ← لیول {3}*, *نیا ← خانہ 1 (آج) ← …*.
  - A value should start with an Urdu letter where possible. Some elements (chips, options, quiz prompts, table cells) use `unicode-bidi:plaintext`, so their first strong letter decides their direction. "What did B say?" is therefore *شخص B نے کیا کہا؟*, "Export CSV" is *ایکسپورٹ CSV*, and the 다 instruction is reworded. The 28 values that still start with Latin letters or Hangul are brand or key names (Lang App, Enter, XP, A±, Aa, DELETE, 3D, CSV / PNG buttons), or they mirror a key that itself starts with Hangul (*모두 열렸어요 · …*, *레벨 업! …*, *안녕하세요 …*).
- **Digits:** Western 0–9 everywhere, as Pakistani apps and ar use them. No Urdu digits ۰–۹ and no Arabic-Indic ٠–٩. `%` follows the number (*80%*). `Intl` `ur` already formats dates and numbers with Latin digits and the Gregorian calendar.
- **Letters:** Urdu code points only: ی U+06CC, ک U+06A9, ہ U+06C1, ھ U+06BE, ے U+06D2. No Arabic ي ى ك ه ة. Text is NFC (hamza forms composed). The lint enforces all of this.
- **Punctuation:** ۔ ends a sentence, ، is the comma, ؟ the question mark, ؛ the semicolon. `:` `!` `…` `/` `·` `—` `×` `+` `=` stay as in the key. Straight `"…"` quotes stay as in the key (as tl and hi did); ar used «».
  - Fragments keep the key's leading and trailing punctuation and spacing exactly. This includes the NBSP in `= Got it  ·`. The only change is that a trailing `,` or `.` after Urdu becomes ، or ۔.
  - Fragments are joined in English order, so where Urdu word order would put the verb last, the fragment is written so the joined string still reads. For example "Type" + DELETE + "to confirm." becomes *ٹائپ کریں DELETE تصدیق کے لیے۔*, and "👆 Tap" + "the card to flip" becomes *👆 ٹیپ کریں کارڈ پلٹنے کے لیے*. Both are inverted but natural enough in speech.
- **Days** (`Su Mo …`): full names (*اتوار پیر منگل بدھ جمعرات جمعہ ہفتہ*). Urdu has no standard 2-letter abbreviations. The longest is *جمعرات* (6 letters); check the narrow chart (§5).
- **Grammar terms:** ordinary Urdu school terms where they exist: *فعل* (verb), *اسم* (noun), *ضمیر* (pronoun), *صفت* (adjective), *ماضی / حال / مستقبل*, *حرفِ علت / حرفِ صحیح* (vowel / consonant), *سوالیہ لفظ* (question word), *بے قاعدہ* (irregular), *تعظیمی* (honorific), *گردان* (conjugation).
  - Korean-specific ideas use loans in Urdu script, as hi-ko does: *اسٹیم, پارٹیکل, کاؤنٹر, بلاک, پیٹرن, گرامر*.
  - *لغت والی شکل* is dictionary form, *요 والی شکل* is 요-form, *آخری حرف / آخری حرفِ صحیح* is final (받침), and *آواز کی تبدیلی* is sound change.
  - Speech levels: *مؤدب* (polite, 요) and *بے تکلف* (casual, 반말).
- **Quiz mode words** are used the same everywhere:
  - Read = *پڑھنا*; Listen = *سننا*; Recall = *یاد کرنا*; Type = *ٹائپ*;
  - Mixed (the quiz mode) = *ملا جلا*; the Mix pool (5 at a time) = *مکس*;
  - Shuffle = *شفل*; Merge = *ضم کریں* (never مکس).

## 2. Kept in Latin script (closed list)

**Identical to English (7, all deliberate):** `Lang App`, `XP`, `DELETE` (the engine compares the typed text), `Enter` (key cap), `A−`, `A+` (text-size buttons), `you@example.com` (an email placeholder; people type email in Latin).

**Latin tokens inside Urdu strings:**
- Lang App; XP; DELETE; CSV, TSV, PNG, KB; Enter, Esc, Ctrl+K; Aa (romanization toggle icon); 3D; A / B (dialogue speakers); `ga`, `(han)` (romanization examples, typed by the user); Supabase, Vercel Web Analytics (service names).
- In the roadmap only: TTMIK, Sogang, How to Study Korean (book and course names).

Everything else is in Urdu script, including loans (§1).

## 3. Glossary of fixed terms (for the course writers)

| English | Urdu | note |
|---|---|---|
| Korean (language) | **کوریائی** | the same word `Intl.DisplayNames('ur')` puts in `{x}` slots |
| Hangul | **ہنگل** | |
| romanization (RR line) | **رومن** | *Aa رومن: آن / آف*. "pronunciation hint" (non-Korean courses) = *تلفظ کا اشارہ* |
| English | انگریزی | |
| flashcard / card | **فلیش کارڈ / کارڈ** (m.) | |
| deck | **ڈیک** (m.) | |
| lesson / lessons | **سبق / اسباق** | |
| practice | **مشق** | |
| review (noun / verb) | **دہرائی / دہرائیں** | |
| due | **باقی** (*{1} باقی*, *دہرائی باقی*, *سب باقی*) | |
| streak | **اسٹریک** (f.) | streak shield = *اسٹریک شیلڈ* (f.) |
| session | سیشن | |
| quiz / exam / test / drill | کوئز / امتحان / ٹیسٹ / ڈرل | |
| level / XP | لیول / XP | |
| SRS box | خانہ | |
| learned / learning / mastered / new | سیکھے گئے / جاری / پکے (پکا) / نئے | |
| Got it / Again | **یاد ہے / دوبارہ** | |
| Check | چیک | |
| Browse | 📖 براؤز | |
| My phrases | **میرے جملے** | |
| Weak spots / Missed / Hardest cards | کمزور نکات / غلطیاں / مشکل ترین کارڈ | |
| bury / suspend / leech | کل پر ٹالیں / معطل کریں / لیچ | |
| goal / plan / reminder | ہدف / پلان / یاد دہانی | |
| nickname | عرفی نام | |
| polite / casual / honorific | مؤدب / بے تکلف / تعظیمی | |
| verb / noun / stem / particle / counter | فعل / اسم / اسٹیم / پارٹیکل / کاؤنٹر | |
| dictionary form / 요-form | لغت والی شکل / 요 والی شکل | |
| vowel / consonant / block / final | حرفِ علت / حرفِ صحیح / بلاک / آخری حرف | |
| sound change | آواز کی تبدیلی | |
| past / present / future | ماضی / حال / مستقبل | |
| Correct! / Not quite. | درست! / ابھی درست نہیں۔ | |

**Level titles:** *نوآموز* (Beginner), *کونپل* (Sprout), *طالب علم* (Student), *باتونی* (Talker), *مسافر* (Traveler), *مقامی* (Local), *سینئر* (Senior, 선배), *پرو* (Pro), *استاد* (Master), *سینسی* (Sensei).

**Deck groups / tags:** *#بنیادی #سفر #سماجی #کام #میڈیا #مہارتیں*. The group names are *روزمرہ* (Everyday) and *سماجی* (Social).

## 4. Tab names (5-tab bar + extras)

| English | Urdu | letters | hi | ar |
|---|---|---|---|---|
| Today | **آج** | 2 | आज | اليوم |
| Lessons | **اسباق** | 5 | पाठ | الدروس |
| Practice | **مشق** | 3 | अभ्यास | التمارين |
| Review | **دہرائی** | 6 | दोहराव | المراجعة |
| Progress | **پیش رفت** | 7 | प्रगति | التقدم |
| Read (advanced) | پڑھنا | 5 | | |
| Feedback | فیڈبیک | 6 | | |

- All tabs are shorter than the English, but Nastaliq is tall: see §6 item 1.
- References inside text use the same names, for example *پیش رفت ← بیک اپ ← فائل شیئر کریں*.
- Other button names the lesson prose may cite: *یاد ہے* (Got it), *دوبارہ* (Again), *چیک* (Check), *📖 براؤز* (Browse), *میرے جملے* (My phrases), *⏰ سب باقی* (All due).

## 5. 30 strings to check first (for an Urdu speaker)

Answer "OK" or write the natural version.

| # | English key | Urdu now | Doubt |
|---|---|---|---|
| 1 | Review (tab) | دہرائی | Natural as a tab? Or *ریویو*, *نظرِ ثانی*? |
| 2 | Progress (tab) | پیش رفت | Natural for "your stats"? Or *ترقی*? |
| 3 | Practice (tab) | مشق | OK? |
| 4 | Lessons (tab) | اسباق | Or the singular *سبق*, or *لیسن*? |
| 5 | Read (tab) | پڑھنا | An infinitive as a tab name: OK? |
| 6 | Got it (SRS button) | یاد ہے | Or *آتا ہے*, *سمجھ آ گیا*? (*سمجھ گیا* was avoided because it is gendered.) |
| 7 | Again (SRS button) | دوبارہ | OK alone as a button? |
| 8 | Due / {n} due | باقی / {1} باقی | Clear for "waiting for review"? |
| 9 | streak | اسٹریک (f.) | Is the loan understood? Gender? Or *سلسلہ*? |
| 10 | mastered | پکے / پکا ہو گیا | Too colloquial? *ازبر*? |
| 11 | learning (box state) | جاری | Clear next to *نئے · جاری · خانہ 3 یا اوپر · پکے*? |
| 12 | bury | ⏭ کل پر ٹالیں | Natural? |
| 13 | Weak spots | کمزور نکات | OK as a mode name? |
| 14 | Mixed / Mix | ملا جلا / مکس | Clear distinction? |
| 15 | Recall en→한 | یاد کرنا اردو ← 한 | Does the arrow read right in RTL? |
| 16 | Read 한→en | پڑھنا 한 ← اردو | Same. |
| 17 | romanization | رومن | Or *رومن اردو / رومن حروف*? |
| 18 | polite / casual | مؤدب / بے تکلف | Natural for 요 vs 반말? |
| 19 | dictionary form | لغت والی شکل | Natural? |
| 20 | vowel / consonant | حرفِ علت / حرفِ صحیح | Too school-like? Or *واول / کانسوننٹ*? |
| 21 | Talker (level) | باتونی | Fun or rude? Other titles: *نوآموز، کونپل، طالب علم، مسافر، مقامی، سینئر، استاد*. |
| 22 | Sprout (level) | کونپل | OK? |
| 23 | Got it — quiz me | یاد ہے — کوئز لیں | Natural? |
| 24 | I get by (level answer) | کام چل جاتا ہے | Natural for language ability? |
| 25 | You've got this! | یہ آپ سے ہو جائے گا! | Encouraging, or odd? |
| 26 | it's late, good work | دیر ہو گئی، شاباش | Natural greeting gloss? |
| 27 | Hello (intro title) | السلام علیکم | OK for an app intro, or *ہیلو*? |
| 28 | Streak at risk | اسٹریک خطرے میں | Too dramatic? |
| 29 | Type DELETE … / fragments | ٹائپ کریں DELETE تصدیق کے لیے۔ | The word order is forced by the English concatenation. Acceptable? |
| 30 | Hand-tuned for speakers of your language | آپ کی زبان بولنے والوں کے لیے خاص طور پر تیار | Natural? Shorter? |

Also worth a glance:
- the day names in the narrow week chart (§1);
- *خانہ* (SRS box);
- *ضم کریں* (Merge in);
- *شفل* (Shuffle);
- *فوری کام* (quick actions);
- *شخص B نے کیا کہا؟* (the *شخص* was added for RTL);
- *انداز · {1}/10* (Register drill);
- *اصل رفتار* (native audio speed);
- *دیر تک کام — شاباش* (Working late);
- *سہ پہر بخیر* (Good afternoon; or plain *السلام علیکم*?);
- *کے-ڈرامے* (K-dramas; the hyphen keeps it from reading as the possessive کے);
- *ہجے* (Syllables; might read as "spelling": *رکن*?);
- *یاد کرنا* (Recall mode; might read as "memorise");
- *انعام: 25 XP* (for "+25 XP");
- *80% یا زیادہ* (for "80%+").

## 6. For the lead (shared code: I changed none of it)

**Works already:**
- `RTL_LANGS={ar:1,he:1,fa:1,ur:1}` (src/app.html ~1150) includes `ur`. `uiDir()`, `applyUiLang()` (`<html dir=rtl lang=ur>`), `BK()`, the welcome sheet (`showWelcome`) and the language sheet (`lhDir`) all follow it.
- `i18nDict` wraps pattern slots in U+2068/U+2069 for `ur`.
- `LANGS.ur` exists: `{name:'Urdu',self:'اردو',flag:'🇵🇰',ko:'우르두어',t:1}`.
- `hLang('ur')` is `ur`, a valid BCP-47 tag.
- `preLang()` and the `build.sh` loader split on `-`/`_`, so `ur-PK` / `ur-IN` browsers give `ur`.
- `Intl.DisplayNames(['ur'])` gives good names (ko کوریائی, en انگریزی, es ہسپانوی, ja جاپانی, zh چینی, ar عربی, hi ہندی), so no `LN_X.ur` override is needed.
- `dLoc()` returns `ur`. ICU `ur` already uses Latin digits and the Gregorian calendar (checked in Node), so no `ur-u-nu-latn` special case is needed. An explicit `'ur-u-nu-latn'` would guard against an `ur-IN`-style default (which uses Urdu digits).
- `gen.py` writes `LANGAPP_PACKS.i18n.ur`, and `validate.js ur` passes.

**Needs `ur` added or checked:**

1. **Interface font / line height (src/app.html line 27).**
   - The `[lang=ar]{--body:…Naskh…}`, `[lang=ar] body{line-height:1.75}`, `[lang=ar] p{line-height:1.8}`, `[lang=ar] nav a{overflow:visible;line-height:1.5}` and `[lang=ar],[lang=ar] *{letter-spacing:0!important}` block has **no `ur` twin**.
   - Line 243's `body [lang=ur]{font-family:'Noto Nastaliq Urdu',…;line-height:2.1}` only matches elements *inside* body that carry `lang=ur` (target-language runs). It does not match `<html lang=ur>`, so the Urdu interface gets DM Sans → system fallback, the default line height, and the default letter-spacing.
   - **Letter-spacing breaks Arabic-script joining.**
   - Nastaliq is much taller than Naskh, so nav labels and buttons with `overflow:hidden` will clip.
   - Suggest a `[lang=ur]` block copied from the `ar` one, with the Nastaliq stack from line 243, line-height ≈ 2 (body) / 1.8 (nav), `letter-spacing:0!important`, and nav `overflow:visible`. Then run `RTL_COURSE=ur-ko node tools/site/rtl.js ur` once a course exists.
2. **`setI18n()` (src/app.html ~1315) builds `I18N_RX` without the RTL slot isolates** that `i18nDict` (~1152) adds.
   - Checked: the main translator `t()` (~1319, which `translateDom` uses) reads `I18N_RX`. The isolating `i18nDict` path serves only `i18nGet` / `LLin` / `pre2` (language home, pre-native screens, greeting gloss).
   - So most pattern-translated UI text gets **no** isolates. A Latin or Hangul slot value (a deck name, an email, `kii@example.com کے طور پر سنک ہو رہا ہے`) can then pull neighbouring punctuation (`·`, `()`, `:`) to the wrong side.
   - Arabic is affected the same way, so this is not specific to `ur`.
   - Suggest the same `RTL_LANGS[n]?String(x[1]).replace(/\$(\d)/g,'⁨$$$1⁩'):String(x[1])` in `setI18n`.
3. **Tests are Arabic-only.**
   - `tools/site/rtl_site.js` hard-codes `ar` / `ar-en` / an Arabic-letter regex.
   - `tools/site/rtl.js` takes `<lang>` and `RTL_COURSE`, so it can run for ur-ko once the course exists.
   - Suggest an `ur` path in rtl_site.js (`ur-PK` browser → Urdu first screen, `dir=rtl`).
   - `tools/curriculum/ship.sh` line 9 runs `rtl.js` only for `ar`, when `packs/course-ar-en.js` exists. It needs a matching line for `ur` (`RTL_COURSE=ur-ko`) once `course-ur-ko.js` exists.
   - A repo-wide grep (src, build.sh, tools/site, tools/halves, tools/content, tools/target, tools/curriculum, tests) found no other list of RTL languages.
4. **No `course-ur-ko` pack yet.**
   - `LANGS.ur` has `t:1` (target-only), so until a `native:'ur'` course is in COURSES / the manifest, `ur` is not listed as a native language, and `preLang()` won't pick this pack (it requires `liveNatives().includes(b)`).
   - Nothing to change in the pack. When the course is added, `tools/halves/native/ur/ko/ui.json` (COURSE.UI) overrides this pack key by key, so keep its wording consistent with §3–4.
5. **Korean (LTR) inside an RTL interface:** the `[dir=rtl] .face .ko, .rom, .ex .k …{direction:ltr;unicode-bidi:isolate}` rules (line 29) were built for ar-en (English target). They should cover Hangul too, but no RTL-UI course with an LTR *non-Latin* target has been laid out yet. Worth one screenshot pass on cards, tiles and the answer box.
6. `isAr()`, `FLOURISH.ar`, `.tgt-rtl` and `bidiPass` are about an Arabic or Urdu *target* in an LTR UI. They do not apply to ur-ko.

**Tell the halves agent:**
- The tabs on screen are **آج، اسباق، مشق، دہرائی، پیش رفت**. Use these names and the §3 glossary in lesson prose.
- There is no `docs/profiles/ur-ko.md` yet. `docs/profiles/en-ur.md` §2.7 (Urdu code points, ۔ ؟ ،, NFC, no ZWNJ / RLM) matches what this pack does.

**Build-time lint used (scratch script, not in the repo).** It checks:
- the Hangul runs, emoji (arrows excepted, because back arrows are flipped) and digits are the same as the key's;
- the slot set `{1}..{k}`, with no stray `{` or `$`;
- fragment edge punctuation and spacing;
- no Arabic ي ى ك ه ة, no ٠–٩ / ۰–۹, no U+200B–200F, U+2066–2069 or U+202A–202E, no tatweel; NFC;
- no ASCII `. , ?` directly after Urdu;
- Latin tokens only from the §2 list;
- it lists the values whose first strong letter is not Urdu.

It does **not** check naturalness, gender agreement in every string, or Nastaliq rendering; those need the native check (§5) and a device pass.
