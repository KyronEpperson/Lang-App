# Telugu (te) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled. The skeleton was made with `python3 tools/i18n/new_lang.py te`; the texts were written in scratch TSV files and merged in (every ZWNJ / ZWJ stripped, NFC).
- `roadmap.json`: the 40 Korean-roadmap titles are filled. The other 1,782 strings are empty, so they fall back to English (`rmT`). Written directly in road.py's output shape, using `tl/roadmap.json` as the skeleton, as tl and ceb did (road.py still cannot run, see the tl notes §5).
- The generated pack is `packs/i18n-te.js`.

Build: `python3 tools/i18n/gen.py te && node tools/i18n/validate.js te`. It passes with 1 warning class, one of the two that tl has:
- 28 labels that may overflow. The check counts code points, and Telugu writes one syllable as 2 to 4 code points (consonant + vowel sign, conjuncts with ్), so most of these are no wider on screen than the English. The worst real ones are listed in §4 (items 25–27).
- The "identical to English" class does not fire: Telugu is a distinct script, so the validator turns that check off. The strings that are intentionally the same as the English are listed in §2 anyway.

The only course this interface serves is **te-ko** (Korean for Telugu speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *కొరియన్*, *హంగుల్*, *రోమనైజేషన్*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*ఇంగ్లీష్*); they only show in an English course, which Telugu speakers do not have. The Hindi dictionary (`hi/`) was looked at for term ideas only; its "Korean/English" keys were written for a Hindi→English course and were not copied.

Author: **not a native speaker.** Everything here needs a Telugu speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** everyday modern Telugu as phone apps and Google's Telugu interface write it: the spoken standard of Andhra Pradesh and Telangana (చేశాం, వెళ్తుంది, అవుతోంది), not the literary grānthika style. Same variety as `docs/profiles/en-te.md` §2.1.
- **Address: మీరు, everywhere.** Never నువ్వు. Verbs addressed to the learner take the మీరు forms (మీరు చూసేశారు, మీకు తెలుసా?). Recorded decision: the informal singular నువ్వు would be rude from an app to a stranger, so the brief's "informal unless rude" rule gives మీరు.
- **Commands:** the polite -ండి form (చేయండి, ఎంచుకోండి, తెరవండి, వినండి, మూసేయండి, దాటవేయండి). The bare నువ్వు imperative that Android/Google use on buttons (రద్దు చేయి, తొలగించు) is **not** used, because it would mix registers. Where -ండి makes a button too long, a **noun label** is used instead (రద్దు, పూర్తి, మళ్ళీ, తర్వాత, వెనక్కి, షఫుల్, రీలోడ్, ఇంపోర్ట్ 0, PNG సేవ్, కార్డు షేర్, 👆 ట్యాప్).
- **The app speaking about itself** uses మేం (exclusive we) and the past -ఆం: చేర్చాం, పంపాం, తీసేశాం, సేవ్ చేయలేకపోయాం. State changes use అయింది / అవుతోంది (సేవ్ అయింది, సింక్ అవుతోంది).
- **"Please"**: దయచేసి only once, in the public-board warning (E164). Requests are otherwise the plain -ండి form.
- **English verbs** take చేయండి / అయింది / అవుతోంది: సేవ్ చేయండి, షేర్ చేయండి, టైప్ చేయండి, ట్యాప్ చేయండి, సింక్ అవుతోంది, లోడ్ అవుతోంది, అన్లాక్ చేయండి (written without ZWNJ, see below).
- **Counts.** Telugu needs the plural after numbers above one (5 కార్డులు) and the singular after 1 (1 కార్డు), and a digit hides which one is right. So:
  - where keys.json has a singular twin (`{n} card` / `{n} cards`, day/days, quiz/quizzes, badge/badges), each template gets its own form: `{1} కార్డు`, `{1} కార్డులు`;
  - where there is only one template for all numbers, the count is written **label first**, which reads correctly at 1 and at 2+: `రివ్యూకి కార్డులు: {1}`, `డెక్లు: {1} · కార్డులు: {2}`, `మిగిలినవి: {1}`, `ప్రయత్నాలు: {2}`.
  - Fixed numbers in fixed strings use the normal plural (5 కొత్త కార్డులు, 3 ప్రశ్నలు).
- **Slots followed by endings.** Case endings are attached straight to the slot, as Telugu attaches them to a word: `{1}లో టైప్ చేయండి`, `{1}తో మొదలుపెట్టండి`, `లెవెల్ {2}కి`, `{1}గా సింక్ అవుతోంది`. The language names come from `Intl.DisplayNames(['te'])`, which already gives Telugu (ko కొరియన్, en ఇంగ్లీష్, es స్పానిష్, checked in Node), so `{1}లో` gives కొరియన్లో.
- **Spelling (house style of `docs/profiles/en-te.md` §2.5 and §2.8):**
  - Telugu script, NFC, **no ZWNJ / ZWJ**. A loan that ends in pollu (్) takes an ending directly and forms a conjunct, as the profile does with స్టేషన్లో: డెక్లు, డెక్లో, డివైజ్లో, క్విజ్లు, ఎక్స్పోర్ట్ను, అన్లాక్.
  - Nativised -u forms where they are the everyday written word: కార్డు / కార్డులు, బోర్డు, ఆఫీసు.
  - ళ్ళ, not ళ్ల (మళ్ళీ, వెళ్తుంది); చేయ- (చేయండి, చేయలేకపోయాం); ఐచ్ఛికం; ధన్యవాదాలు; నమస్కారం.
  - ASCII punctuation, no danda. Digits stay digits (the UI shows numbers, unlike course text).
  - Latin script only for brand and technical names (Lang App, Supabase, Vercel, CSV, PNG, KB, XP, Lv, Ctrl+K, Enter, Esc), the code word DELETE, the romanization examples (ga, han) and the email placeholder.
- **Grammar terms:** the Telugu school terms every Telugu speaker learned (క్రియ, నామవాచకం, అచ్చు, హల్లు, వర్తమానం, భూతకాలం, వ్యాకరణం), plus the course's own words for Korean points (మర్యాద / సాధారణ, గౌరవ, చివరి హల్లు, కౌంటర్). See §3.
- **Quiz mode words**, the same everywhere:
  - Read = *చదవడం*; Listen = *వినడం*; Recall = *గుర్తు*; Type = *టైప్*;
  - Mixed (the quiz mode) = *అన్నీ కలిపి*; the Mix pool (5 at a time) = *మిక్స్*;
  - Shuffle = *షఫుల్*; Merge = *విలీనం* (never మిక్స్).
  - Direction labels use తె for Telugu: `చదవడం 한→తె`, `గుర్తు తె→한`, `వినడం 🔊→తె`.
- **"Type" (bare key E152)** is rendered రకం ("kind"), following the ko reference note (the feedback radio group wins; the drill chip has its own key "⌨️ Type" = ⌨️ టైప్). keys.json's context calls it a verb; if the app shows it as a verb anywhere, change it to టైప్.
- **Assembled delete warning.** "…Type" + DELETE + "to confirm." is rendered "…నిర్ధారించడానికి" + DELETE + "అని టైప్ చేయండి." (P163/P164 end in నిర్ధారించడానికి; E250 "to confirm." = అని టైప్ చేయండి.), so the sentence reads in Telugu order. If "to confirm." is ever shown on its own, this needs a change.

## 2. Kept in English or in Latin script (closed list)

Identical to the English key (the validator does not flag these because Telugu is a distinct script):
- Enter, XP, A−, A+, DELETE, Lang App.

Latin inside Telugu strings: Ctrl+K, Esc, CSV, TSV, PNG, KB, UI (in 한국어 UI), Lv, 3D, K- (K-డ్రామాలు), Supabase, Vercel Web Analytics, A / B (dialogue roles), ga / han (romanization examples), meeru@example.com, Aa, 요-form.

English loans written in Telugu script (the normal app word):
- Tech: యాప్, ఖాతా (account; Google's word), ఈమెయిల్, సైన్ ఇన్ / సైన్ అవుట్, సింక్, బ్యాకప్, ఎక్స్పోర్ట్ / ఇంపోర్ట్, ఫైల్, లింక్, కోడ్, పాస్వర్డ్, బ్రౌజర్, డివైజ్, స్టోరేజ్, సైట్ డేటా, డేటాబేస్, ఆఫ్లైన్, ఇన్బాక్స్, స్పామ్, అడ్మిన్, డెవలపర్, బగ్, ఎర్రర్, క్రాష్, అనలిటిక్స్, యాడ్స్, కుకీలు, పేజ్ వ్యూ, ప్రొఫైల్, యూజర్, పోస్ట్, పేజీ, వెబ్సైట్, బోర్డు, సెట్టింగ్స్, సెటప్, డిఫాల్ట్, టూర్, ప్రివ్యూ, వ్యూ, స్క్రీన్, మెనూ, కీబోర్డ్, యారో కీలు, బటన్, టెక్స్ట్, ట్యాబ్, క్యూ, అప్డేట్, వెర్షన్, ఆడియో, సౌండ్ ఎఫెక్ట్స్, మోడ్, టైల్స్, క్యాలెండర్, రిమైండర్, ఫోన్, ల్యాప్టాప్, ఆన్ / ఆఫ్, ప్లమ్; verbs: ట్యాప్, స్వైప్, సేవ్, షేర్, టైప్, కాపీ, పేస్ట్, ప్లే, రీసెట్, రిఫ్రెష్, రీలోడ్, లోడ్, డౌన్లోడ్, అన్లాక్, లాక్, రైట్-క్లిక్.
- Learning: కార్డు / ఫ్లాష్ కార్డు, డెక్, క్విజ్, టెస్టు, డ్రిల్ / డ్రిల్స్, మినీ డ్రిల్, బ్లిట్జ్, రౌండ్, సెషన్, రివ్యూ, స్ట్రీక్, స్ట్రీక్ షీల్డ్, స్ట్రీక్ కార్డు, రీక్యాప్ కార్డు, లెవెల్, కాంబో, బ్యాడ్జి, స్కోరు, లీచ్, రోల్-ప్లే, డిక్టేషన్, రిజిస్టర్, స్పేస్డ్ రిపిటిషన్, ప్యాటర్న్, కౌంటర్, సర్టిఫికెట్, కాలిబ్రేషన్, పాస్, ప్రో, సెన్సెయ్, సీనియర్, లోకల్, K-డ్రామా.

Telugu words for ordinary things, for example: అర్థం (meaning), నోట్ (note), ఉదాహరణ (example), పదం (word), వాక్యం (sentence / phrase), సంభాషణ (dialogue), ఉచ్చారణ (pronunciation), శబ్దం (sound), స్వరం (voice), వేగం (speed), నెమ్మది / సహజ వేగం (slow / native), పెట్టె (SRS box), లక్ష్యం (goal), మారుపేరు (nickname), రంగు (accent colour), భాష, కోర్సు, ప్రణాళిక (plan), గోప్యత (privacy), అభిప్రాయం (feedback), విరామం (interval), జాతీయం (idiom), సూచన (hint).

## 3. Glossary of fixed terms (course writers reuse these)

**Tabs (5-tab bar + extras)**

| English | Telugu | code points | tl |
|---|---|---|---|
| Today | **ఈరోజు** | 5 | Ngayon |
| Lessons | **పాఠాలు** | 6 | Aralin |
| Practice | **ప్రాక్టీస్** | 10 | Pagsasanay |
| Review | **రివ్యూ** | 6 | Review |
| Progress | **పురోగతి** | 7 | Pag-unlad |
| Read (advanced) | చదవడం | 5 | Basa |
| Feedback | అభిప్రాయం | 9 | Feedback |

References inside text use the same names (పురోగతి → బ్యాకప్ → ఫైల్ షేర్ చేయండి; అభిప్రాయం ట్యాబ్). The Browse button is **చూడండి**; when text has to name its screen it says "చూడండి స్క్రీన్లో".

**Core learning words**

| English | Telugu |
|---|---|
| Korean (language) | కొరియన్ |
| Hangul | హంగుల్ |
| romanization | రోమనైజేషన్ |
| pronunciation hint (non-Korean courses) | ఉచ్చారణ సూచన |
| English | ఇంగ్లీష్ |
| flashcard / card | ఫ్లాష్ కార్డు / కార్డు (pl. కార్డులు) |
| deck | డెక్ (pl. డెక్లు) |
| lesson | పాఠం (pl. పాఠాలు) |
| practice | ప్రాక్టీస్ |
| review (noun and verb) | రివ్యూ / రివ్యూ చేయండి |
| due | రివ్యూకి; "Due for review" రివ్యూకి సిద్ధం |
| streak | స్ట్రీక్ |
| session | సెషన్ |
| quiz / exam / test | క్విజ్ / పరీక్ష / టెస్టు |
| drill | డ్రిల్ |
| level / XP | లెవెల్ / XP |
| My phrases | నా వాక్యాలు (in text: "నా వాక్యాలు జాబితాలో") |
| Got it / Again (SRS) | గుర్తుంది / మళ్ళీ |
| Check | చెక్ |
| Correct! / Not quite | సరైంది! / ఇంకా కాదు |
| new / learning / learned / mastered | కొత్తవి / నేర్చుకుంటున్నవి / నేర్చుకున్నవి / పట్టు వచ్చినవి |
| box | పెట్టె |
| bury / suspend / leech | రేపటికి (వాయిదా) / ఆపండి (ఆపబడింది) / లీచ్ |
| Weak spots / Missed / Hardest | బలహీనతలు / తప్పినవి / కష్టమైనవి |
| passed / to pass | పాస్ / పాస్కు 80% |
| certificate / badge | సర్టిఫికెట్ / బ్యాడ్జి |

**Grammar terms used in the interface**

| English | Telugu |
|---|---|
| grammar | వ్యాకరణం |
| verb / verb stem | క్రియ / క్రియా ధాతువు |
| noun | నామవాచకం |
| dictionary form | నిఘంటు రూపం |
| vowel / consonant / final consonant (batchim) | అచ్చు / హల్లు / చివరి హల్లు |
| syllable (block drill) / block | అక్షరం / బ్లాక్ |
| polite / casual | మర్యాద / సాధారణ |
| honorific | గౌరవ (గౌరవ క్రియ) |
| present / past | వర్తమానం / భూతకాలం |
| question word | ప్రశ్న పదం |
| counter | కౌంటర్ |
| sound change | శబ్ద మార్పు |
| pattern | ప్యాటర్న్ |
| irregular | క్రమరహితం |
| conjugator / conjugate | క్రియా రూపాలు / రూపాలు చూపండి |

**Level titles:** కొత్తవారు (Beginner), మొలక (Sprout), విద్యార్థి (Student), మాటకారి (Talker), బాటసారి (Traveler), లోకల్ (Local), సీనియర్ (Senior), ప్రో (Pro), దిట్ట (Master), సెన్సెయ్ (Sensei). Chosen to be gender-neutral (no -డు / -రాలు endings).

**Days:** ఆది సోమ మంగళ బుధ గురు శుక్ర శని. **Greetings:** నమస్కారం (Hello), శుభోదయం, శుభ మధ్యాహ్నం, శుభ సాయంత్రం.

## 4. 30 strings to check first (for a Telugu speaker)

Answer "OK" or write the natural version.

| # | English key | Telugu now | Doubt |
|---|---|---|---|
| 1 | Practice (tab) | ప్రాక్టీస్ | Or అభ్యాసం (formal)? |
| 2 | Progress (tab) | పురోగతి | Natural as a tab, or is ప్రోగ్రెస్ the app word? |
| 3 | Read (tab) | చదవడం | A verbal noun as a tab: OK? Or చదువు / పఠనం? |
| 4 | Feedback (tab) | అభిప్రాయం | Google's word. Clear enough as a tab, or ఫీడ్బ్యాక్? |
| 5 | Got it (SRS button) | గుర్తుంది | Natural for "I know this card"? Or తెలుసు? |
| 6 | Due / {n} due | రివ్యూకి / రివ్యూకి: {1} | Clear for "cards waiting for review"? |
| 7 | mastered | పట్టు వచ్చినవి | Or నేర్చేసుకున్నవి / మాస్టర్ అయినవి? |
| 8 | bury | ⏭ రేపటికి / రేపటికి వాయిదా వేశాం. | Clear as "put off until tomorrow"? |
| 9 | suspend / Suspended cards | ⏸ ఆపండి / ఆపిన కార్డులు | Clear that the card is taken out of reviews? |
| 10 | Weak spots | బలహీనతలు | OK as a mode name? Or బలహీన చోట్లు? |
| 11 | Recall en→한 | గుర్తు తె→한 | Is గుర్తు clear for "recall from memory"? Is తె understood as Telugu? |
| 12 | Mixed (quiz mode) / Mix (pool) | అన్నీ కలిపి / మిక్స్ | Two different words on purpose: OK? |
| 13 | My phrases | నా వాక్యాలు | వాక్యం for short phrases like "Excuse me": OK, or మాటలు / పదబంధాలు? |
| 14 | Korean (language) | కొరియన్ | Or కొరియన్ భాష / కొరియా భాష? |
| 15 | romanization | రోమనైజేషన్ | Understood? Or ఇంగ్లీష్ అక్షరాల్లో ఉచ్చారణ (long)? |
| 16 | polite / casual (Korean speech levels) | మర్యాద / సాధారణ | Is సాధారణ right for 반말, or చనువు / క్యాజువల్? |
| 17 | Grammar terms | క్రియ, నామవాచకం, భూతకాలం, వర్తమానం | Too bookish for app users, or fine (school words)? |
| 18 | Cancel | రద్దు | Noun label: natural as a button? |
| 19 | ↶ Undo | ↶ వెనక్కి తీసుకోండి | Long. Better short word? |
| 20 | Talker (level title) | మాటకారి | Fun or odd? Other titles in §3. |
| 21 | Master (level title) | దిట్ట | Natural as a title? |
| 22 | Beginner (level title) | కొత్తవారు | OK, or ప్రారంభకులు? |
| 23 | I get by (level answer) | ఏదోలా నెట్టుకొస్తాను | Natural for language ability? |
| 24 | Working late — nice job / it's late, good work | పొద్దుపోయే దాకా — శభాష్ / పొద్దుపోయింది, బాగా కష్టపడ్డారు | Natural greeting glosses? |
| 25 | Try again | మళ్ళీ ప్రయత్నించండి | Long for small buttons. Shorter version? |
| 26 | Type DELETE to confirm | నిర్ధారించడానికి DELETE అని టైప్ చేయండి | Natural? Too long? |
| 27 | Tap to start again / tap to skip | మళ్ళీ మొదలుపెట్టడానికి ట్యాప్ చేయండి / దాటవేయడానికి ట్యాప్ చేయండి | Long captions; shorter? |
| 28 | Streak at risk | స్ట్రీక్ ప్రమాదంలో ఉంది | Too dramatic? స్ట్రీక్ తెగిపోవచ్చు? |
| 29 | Something went wrong: | ఏదో పొరపాటు జరిగింది: | Natural? |
| 30 | Hand-tuned for speakers of your language | మీ భాష మాట్లాడేవారి కోసం ప్రత్యేకంగా తీర్చిదిద్దింది | Natural? Shorter? |

Also worth a glance: the label-first counts (`రివ్యూకి కార్డులు: 5`, `మిగిలినవి: 12 · డెక్లు: 3`); loans with an ending and no ZWNJ (డెక్లు, డివైజ్లో, ఎక్స్పోర్ట్ను: readable, or should the house style allow ZWNJ in the UI?); మారుపేరు (Nickname); సహజ వేగం (native speed); విడదీసి చూడండి (break it down); అనుకరించండి ×3 (shadow); ఖాళీ పూరించండి (Fill the gap); పదాలను క్రమంలో పెట్టండి (Put the words in order); కొరియన్ మొదటి అడుగు (Korean starter); ఆటో-ఫ్లిప్; అజ్ఞాత (Anonymous); రకం for the bare "Type" key (§1).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `te` is a 2-letter code, so `slice(0,2)` in `preLang()`, the `build.sh` loader and `tools/site/lazy.js` all give `te` for `te-IN` and `te-ko`. None of the 3-letter (ceb) or `fil` (tl) problems apply.
- `LANGS.te` exists: `{name:'Telugu',self:'తెలుగు',flag:'🇮🇳',ko:'텔루구어'}`.
- `te` is not in `RTL_LANGS`, which is correct.
- `langName(code,'te')` through `Intl.DisplayNames(['te'])` gives Telugu names (ko కొరియన్, en ఇంగ్లీష్, te తెలుగు, es స్పానిష్, ja జపనీస్; Node, full ICU), and they match this dictionary's terms. No override map is needed.
- `gen.py` writes `LANGAPP_PACKS.i18n.te` with `road` 40, and `validate.js te` passes.

**Nothing in a shared tool blocked this language.** Notes only:
- `road.py` is still broken for every language (see tl and ceb notes); `roadmap.json` was written by hand in its output shape.
- `validate.js` has no `tools/content/te/profile.json`, so it decides "distinct script" by its majority heuristic (it does, correctly).
- The overflow check counts code points. For Indic scripts it over-reports (a Telugu syllable is 2 to 4 code points). Counting grapheme clusters (`Intl.Segmenter`) would give a fairer number; that is a shared-tool change, not made.
- Font: Telugu needs a Telugu-capable font stack (Noto Sans Telugu, or the system font). Not checked in `src/app.html`.

**Tell the halves agent / course writers:**
- No `docs/profiles/te-ko.md` exists yet. When it is written, its interface section should use the tab names **ఈరోజు, పాఠాలు, ప్రాక్టీస్, రివ్యూ, పురోగతి** and the glossary in §3 (button names lesson prose may cite: గుర్తుంది, మళ్ళీ, చెక్, చూడండి, నా వాక్యాలు, ⏰ అన్నీ రివ్యూ).
- Whatever goes into a future `tools/halves/native/te/ko/ui.json` becomes `COURSE.UI` and overrides this pack key by key in `setI18n()`. Keep the two consistent, and prefer fixing wording here.
