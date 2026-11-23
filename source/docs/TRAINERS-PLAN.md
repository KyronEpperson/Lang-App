# Korean trainers for every learner language: plan

Status: **WP0a–WP0d, WP1–WP6 done, WP7 remainder done** (2026-11-23); WP8 open. What is built: see the two **Done** sections at the end. The design below is unchanged; line numbers in it are from the 2026-11-22 snapshot.

Sources read:
- `src/app.html`, snapshot sha256 `38ad6749…`. Line numbers below are **≈** values from that snapshot, because another agent is editing the file. Code is quoted so each spot can be found by search.
- The built `korean-flashcards.html` (v2.65.0). The trainer functions and tables were dumped from both by Playwright, and they are identical.
- `docs/HALVES-SPEC.md`, `docs/reviews/ko-target-half-review.md`, `tools/halves/*`, `tools/i18n/keys.json`, `tools/i18n/es/ui.json`, `tools/halves/native/es/ko/*`, `harness.js` and `tools/tests/esko.js`.

Companion file: `tools/halves/native/en/ko/trainer.draft.json`. It holds the English native-side trainer text, extracted by script from the built app (see §5.4).

---

## 0 · The design in short

1. Each trainer reads its learner-language text from a new pack field, **`COURSE.TRAINER`** (§2.2). It reads deck and group names from **`COURSE.ROLES`** and deck sets from **`COURSE.KINDS`**. No English literal or English deck name stays on any trainer path.
2. A feature runs only when its flag is set **and** its data is present: `CF(f) = features[f] && ready(f)`, plus `modeOk(mode)` for each drill mode. A pack with a flag but no data degrades silently and never shows English.
3. The built-in en-ko gets the same three fields, attached in `registerCourses()` the same way `DECKS` is attached today. Their values are the **existing globals, moved by reference**. So en-ko and every pack run one code path. en-ko output stays byte-identical, and a seeded golden test checks that (WP0a).
4. Everything Korean and language-neutral stays in the engine: jamo tables (canonical RR plus neutral variants), `answersFor`, the `WORDS_*` lists, `romanize`, `pronounce`, `conj`, `sino`/`native`, the `PART`/`ENDS` match order, `STROKES` and `SAY`.
5. Native side: one `native/<n>/ko/trainer.json` per language (≈663 words), plus 14 Korean-specific `ui.json` overrides (≈86 words) for static page text.
6. `target/ko/course.json` gains `roles`, `kinds` and `build` (deck and group ids, and the 18 Build sentences). Assembly maps ids to native labels, always emits `ROLES`/`KINDS`, emits `TRAINER` when `trainer.json` exists, and sets each flag from readiness rather than hard-coding `false`.
7. Typed answers in the Hangul drill are `[canonical RR, …engine neutral, …native alternates]`. A native half may also supply an input normaliser (accent fold, character map, rewrite rules). Spanish gets `ua/uo/ue`, `qu/gu/c` rewrites, `ñ→ny` and `sh`, but not the English `uh/oo/ee/yuh`.
8. Work order: golden baseline → one serial foundation package (with halves plumbing in parallel to it) → export/proof → five trainer packages that can run in parallel (Hangul, numbers, sound, register, conjugation) plus glosses/Build → two bug-fix packages that re-baseline the golden.

---

## 1 · Inventory

### 1.0 How gating works today

| Mechanism | Code | Effect on a Korean pack (`es-ko`) |
|---|---|---|
| Feature flags | `function CF(f){ return !!(COURSE&&COURSE.features&&COURSE.features[f]); }` (≈1105) | `assemble.js` hard-codes all seven to `false`. |
| Built-in branches | `COURSE.builtin` in `setCourseTables`, `lessonBody`, `idleSlides`, `greet`, `applyCourseUi` (`bi`), `drawCert` | Packs take the generic path, which already works (pause scene, greeting, lesson tokens). |
| DOM translator | `translateDom` / `t()` over text nodes, skipping `I18N_SKIP='[data-noi18n],…,.opts,.ko,.rom,.qrom,.q,…'` (≈1237) | A trainer string is translated only if its **trimmed whole text node** is an exact key or matches a pattern. Concatenated strings (`' · '+…`) and text inside `.q`/`.opts` are never translated. |
| Course UI override | `COURSE.UI` merged in `i18nDict()` (≈1115) and `setI18n()` (≈1228) | Works for `es`. It is **dead for languages with no i18n pack**: `setI18n` sets `I18N=null` (`else { I18N=null; I18N_RX=[]; }`), and `ceb`/`tl` come next. |

### 1.1 Per trainer

Column key: **(a)** English prose the engine renders · **(b)** English deck names · **(c)** built-in globals instead of COURSE tables · **(d)** UI strings (i18n key? es translation? wrong for Korean?).

#### `script`: Hangul reading drill (+ onboarding, Build, breakdown button, Words from dialogues)

- **Functions and data:**
  - `hangulItem`, `answersFor`, `decompose`, `renderHangulQ` (type), `renderHangulPick`, `hangulNext`, `hStreak`/`hLvl`;
  - `WORDS_CV` (40) and `WORDS_F` (61), `MEAN` + `MEAN_ADD` (101 glosses, one per word, no extras);
  - `L`/`V`/`T` answer tables (19/21/28 rows);
  - `renderOnboard`, `isLetterDeck`/`isScriptDeck`/`soundCard`, `normT` (`CF('script')?normKo`).
- `script` also gates:
  - the Build chip, `sessSize().build`, renderBuildQ and buildSentences;
  - `🔍 break it down` (card back ≈1503: `${CF('script')?`<button class="speak bdbtn"…`);
  - "Words from dialogues" (`renderGrammar` ≈2053: `${CF('script')?`<div class="panel"…Words from dialogues`);
  - the read-tab level chips, `canRead` in `planSession`;
  - the today tile `Hangul drill`, `Reading` labels in the progress view, and `TOUR[3]`.
- **(a) English prose:**
  - `MEAN[it.ch]` in feedback (`const mean=MEAN[it.ch]?` · <b>${MEAN[it.ch]}</b>`:''`, in both `renderHangulQ` and `renderHangulPick`);
  - placeholder `type the sound, e.g. ga`, `aria-label="Romanization"`, `${lvl===1?'syllable':'word'}`;
  - the empty-input hint `Type the sound in English letters (e.g. <b>ga</b>), or type the Hangul itself.`;
  - `Which one did you hear?`;
  - the onboarding block (`안녕하세요 👋 Two quick questions`, `Can you already read Hangul?`, `Not yet` / `Slowly` / `Yes, fluently`, `What do you want Korean for?`, `How much time a day?`, `toast('Set up. Start with '+first+'.')`).
  - The Build/breakdown strings are under *glosses* below.
- **(b) Deck names:** `/^Hangul/`, `/^Hangul|^Pronunciation/`, `'Hangul vowels'`, `'Hangul consonants'` and `'Survival phrases'`. The full list is in §1.2.
- **(c) Globals:**
  - `MEAN`, `WORDS_CV`/`WORDS_F` (neutral: they stay), and `L`/`V`/`T`, whose trailing English spellings are native (§3);
  - the `'sh'` push in `answersFor`;
  - the input normaliser `raw.toLowerCase().replace(/[^a-z]/g,'')` with `<input class="ans" lang="en" inputmode="latin" …>`. It deletes ñ, accents, kana and Cyrillic before matching (§3).
- **(d) UI:** see §1.3. In short:
  - The static read-tab panel strings are keys, and es translates them **wrongly for Korean** (they were written for learning English). Affected: `Type the romanization. Hangul blocks…`, `How a block is built`, `(han). Vertical vowels…`.
  - `syllable` and `word` are not keys.
  - `), or type the Hangul itself.`, `Can you already read Hangul?` and `What do you want Korean for?` are wrong in es, but `native/es/ko/ui.json` already overrides them.
  - Concatenated lines that are already covered by key patterns, with correct es: the score line `hScore` (`…+'% · '+S.hangul.t+' tried'…' · streak '…' · best '…`) matches `{n}% · {n} tried · streak {n} · best {n}` (*intentos / racha / mejor*), and Words from dialogues `${v.en} · seen ${v.n}×` matches `{x} · seen {n}×`. No change needed.

#### `pron`: auto romanisation

- **Functions:**
  - `autoPron(ko){ return CF('pron')?romanize(ko):''; }`;
  - the add-card placeholder (`r.placeholder=/[가-힣]/.test(…)?romanize(…)+' (auto)':'Romanization (auto if blank)'`, ≈2396);
  - bulk import `rom||autoPron(ko)`.
- **(a)–(c):** none. `romanize` is language-neutral Revised Romanization, shared by every learner.
- **(d):** `Romanization (auto if blank)` is a key. es renders it as *Pronunciación (automática…)*, which is acceptable; *romanización* would be more exact.
- **Result: `pron` can be switched on for every Korean pack now** (WP0c). `pronNote` is gated by `sound`, not `pron`.

#### `sound`: sound-change drill and card pronunciation note

- **Functions and data:** `pronounce` (`PJ_L`/`PJ_T`/`PJ_REP`/`PJ_SPLIT`/`PJ_ASP`/`PJ_Y`), `pronNote` (card back), `renderSoundQ`, `soundPool`.
- **(a) English prose:**
  - `How is this actually said?`;
  - the item meaning `${en}`, which is `c[2]` of the pack's own deck card, so already native;
  - the rule names (`rules.add('연음')` …), which are **Korean**. The engine has no English explanation for any of them.
- **(b) Deck names:** `if(/^Hangul|^Pronunciation|My phrases/.test(d)) return;` (≈1694).
- **(c) Globals:** neutral only.
- **(d) UI:** `How is this actually said?` is a key, and es is fine. `🔀 Sound changes` is a key, and es is fine.

#### `numbers`: listen-and-type numbers

- **Functions:** `numItem` (8 kinds: price ×2, time, phone, floor, count, age, minutes), `sino`, `native`, `SINO`/`NATIVE`/`NATIVE_TENS`/`NATIVE_ATTR`, `renderNumberQ`.
- **(a) English prose:**
  - the hints `price in won (Sino)`, `time (native hour, Sino minutes) — type like 3:30`, `phone number (digits, 0 = 공)`, `floor (Sino) — B for basement`, `'count (native + '+cnt+' '+label+')'` (counter labels `things/people/cups/bottles/animals/sheets`), `age (native + 살)`, `minutes (Sino + 분)`;
  - placeholder `digits`.
- **(b)** none. **(c)** neutral generators. Note that the counter label list repeats the breakdown `COUNT` glosses verbatim.
- **(d) UI:**
  - The prompt `🔢 Listen and type the number · ${it.hint}` matches the key pattern `🔢 Listen and type the number · {x}`. Its slot `{x}` passes the English hint through untranslated, so **English leaks in every non-English UI**.
  - `digits` is not a key.

#### `register`: casual ↔ polite pairs drill

- **Functions:** `renderRegisterQ`, the Practice button `$('regStart').onclick` (10 items, ≈2507), and the `PAIRS` data. PAIRS is already a COURSE table: `target/ko/course.json` has `pairs`, and the es pack carries all 36.
- **(a) English prose:** `Make it polite (요-form)`, `Make it casual (반말)`, and in feedback `casual → polite: add 요 (or the honorific verb)` / `polite → casual: drop 요`.
- **(d) UI:**
  - All four are keys, and es **drops the Korean rule**: *Pásalo a formal*, *usa una forma más cortés*.
  - The feedback text node is `" · casual → polite…"`. Its trimmed form starts with `·`, so it is **never translated anyway**.
  - `Polite ↔ casual`, `Register · {n}/10` and `🎚️ Polite ↔ casual drill · 10` are keys, and es is fine.

#### `conj`: verb conjugator (Grammar index)

- **Functions:** `conj` (with `dec`/`com`/`L_IDX`/`V_IDX`/`T_IDX`), `cjHTML`, and the panel in `renderGrammar` (≈2053), removed when `!CF('conj')` (≈2057).
- **(a) English prose:**
  - row labels `polite present · polite past · future · casual · formal · shall we? · want to · don't (request) · negative`;
  - `irregular: ` + tags `ㄷ→ㄹ`, `ㅂ→우`, `ㅡ drop`, `르`;
  - `Enter a dictionary form ending in 다.`;
  - the panel: `Verb conjugator`, `dictionary form, e.g. 먹다`, `Conjugate`, `Try 가다 · 먹다 · 하다 · 마시다 · 예쁘다 · 듣다 · 돕다 · 살다 · 모르다`.
- **(d) UI:**
  - `future`, `casual`, `formal` and `negative` are not keys.
  - es is **wrong** for `dictionary form, e.g. 먹다` (*infinitivo, p. ej., eat*), `Enter a dictionary form…` (*(p. ej., go)*), `Try 가다…` (*Prueba con go · eat · do …*) and `polite present`/`polite past` (*presente formal*, which collides with the `formal` row).

#### Sentence breakdown glosses and the Build drill (today under `script`)

- **Functions and data:**
  - `PART` (23, ordered), `ENDS` (21, ordered), `QW` (10), `CONN` (43), `COUNT` (13), `NUMS` (11, digits), `isPastSyl`, `breakdown`, `breakdownHTML`;
  - `buildSentences` (DIALOG + EXAMPLES + cards + **18 hard-coded Korean/English pairs**), `renderBuildQ`;
  - `dialogVocab` (Words from dialogues).
- **(a) English prose:**
  - every gloss;
  - the inline strings in `breakdown()`: `' (question word)'`, `'counter · '`, `'number '`, `"don't (지 마)"`, `'is it okay? (-아/어도 돼요)'`, `'not okay? (-(으)면 안 돼요)'`, `'verb + 도 (even if)'`, `'verb stem + 지'`, `'verb · past (았/었어요)'`, `' + 요 (polite)'`, `'verb · '`, `'number'`, `'noun / word'`;
  - the 18 English sentence glosses;
  - `tap the words in order`.
- **(c) Globals:** all of the above. In addition, **`dialogVocab` parses the English gloss text**: `r.match(/^(.+?) \+ /)`, `r.match(/stem (.+?)-/)`, `/^(verb|noun)/.test(base)`. Translated glosses would silently change which words it lists.
- **(d) UI:**
  - Several breakdown strings are i18n keys, and es translated them generically, losing the Korean: `verb stem + 지` → *raíz verbal + terminación*, `+ 요 (polite)` → *+ forma cortés*, `don't (지 마)` → *no (prohibición)*.
  - `.bd span` is not in `I18N_SKIP`, so those generic versions **would be shown** to es learners.

#### `strokes`

- `STROKES` and `strokeSVG` are neutral.
- **`features.strokes` is never read.** The card back draws `${STROKES[c[0]]?strokeSVG(c[0]):''}` for any course, and the lesson token `{{strokes:X}}` (`strokeTok`) is already supported for packs.
- **(d):** `↻ stroke order` is not a key. The lesson token path strips the button, but **the card back draws it in every course**, so es-ko jamo cards show the English button today (B12).

#### Tables that are not behind a flag

| Item | Code | Issue for a Korean pack |
|---|---|---|
| `KOUI` (14) | `koTips()` sets `el.title=KOUI[t]` for `.ko,h1,.toast` whose text is a key, **in every course** | The value is `"rom · English gloss"`. es-ko toasts such as `수고했어요!` (FLOURISH.ko) get an English tooltip today. All 14 stored romanisations equal `romanize(key)` (checked), so at runtime the romanisation can be computed and only the gloss is native. |
| `SAY` | `sayText(text){ return (COURSE.target==='ko'&&SAY[text]) \|\| … }` | TTS text, target-side and correct. Some of its keys are **English card fronts in the target half** (`ㄹ between vowels`, `ㅎ weakening`, `ㅇ final`, `ㅢ (3 sounds)`, `ㅡ sound`, `intonation`, `spacing`, `ㅅ vs ㅆ`, `건배 vs 짠`), and those fronts show to es learners (§6, B10). |
| `GOALS` / `PLAN_PRESETS` | literals at ≈1888 / ≈1907 | Already course data. Halves export `goals`/`plans`, and es-ko carries them. No change. |
| `TOUR` | `TOUR[3]` swapped in `applyCourseUi` by `sc` | Generic English. The keys exist and es is fine. Readiness gating needed (WP0b). |
| Idle slides | `idleSlides(){ return COURSE.builtin?idleSlidesKo():idleSlidesGen(); }` | Packs use the generic path, which works. `idleSlidesKo` (built-in only) has `/^Hangul|^Pronunciation/` (≈3150). |
| `greet()` | the built-in literal fallback | Packs use `COURSE.GREET`. No change. |

### 1.2 Every hard-coded deck or group name (code quotes)

| ≈Line | Code | Replacement |
|---|---|---|
| 1108 | `function isScriptDeck(d){ return CF('script')&&/^Hangul\|^Pronunciation/.test(d); }` | `CF('script')&&KIND('sounds',d)` |
| 1109 | `function isLetterDeck(d){ return CF('script')&&/^Hangul/.test(d); }` | `CF('script')&&KIND('letters',d)` |
| 1619 | `/^(Particles\|Core verbs\|Counters\|Numbers\|Numbers in the wild\|Adjectives)$/.test(d)` (quiz "Why:") | `KIND('grammar',d)` |
| 1694 | `if(/^Hangul\|^Pronunciation\|My phrases/.test(d)) return;` (sound pool) | `KIND('sounds',d)\|\|d===MYDECK` |
| 1704 | `return DECKS['Survival phrases']?'Survival phrases':names[0];` (dialogDeck) | `ROLE('survival')\|\|names[0]` |
| 1709 | `!/^Hangul\|Pronunciation\|Numbers$\|Particles\|Core verbs\|Counters\|Connectors\|Adjectives\|My phrases/.test(d)` (listen "Where would you hear this?") | `!KIND('sounds',d)&&!KIND('reference',d)&&d!==MYDECK`. **Runs with all flags off: es-ko offers Hangul decks as answers today** (B4). |
| 1870 | `(DECKS['Survival phrases']?'Survival phrases':names.find(…))` (planSession fallbackDeck) | `ROLE('survival')\|\|names.find(…)` |
| 1874 | `learned('Hangul consonants')>=8 ? (learned('Survival phrases')>=6?3:2) : 1` | `learned(ROLE('hangulConsonants'))…learned(ROLE('survival'))…` (`learned(undefined)` returns 0) |
| 1881 | `…\|\|learned('Hangul consonants')>=8;` (canRead) | `ROLE('hangulConsonants')` |
| 1900 | `['Hangul vowels','Hangul consonants'].forEach(d=>DECKS[d].forEach(…))` (onboarding "Yes, fluently") | `[ROLE('hangulVowels'),ROLE('hangulConsonants')].filter(d=>DECKS[d])` |
| 1905 | `GROUPS.filter(g=>g[0]==='Everyday'\|\|g[0]==='Social')` (weekDeck) | `(ROLES.weekGroups\|\|[]).includes(g[0])`. The existing fallback (`PATH`) covers packs without it. |
| 2304 | `/^Hangul/.test(n)===/^Hangul/.test(d)` (quiz distractor partition) | `KIND('letters',n)===KIND('letters',d)` |
| 2417 | `let qSel=new Set(['Survival phrases'])` | `new Set([ROLE('survival')].filter(Boolean))`. 2420 already falls back. |
| 2420 | `qSel=new Set([DECKS['Survival phrases']?'Survival phrases':(…)])` | `ROLE('survival')&&DECKS[ROLE('survival')]?…` |
| 3150 | `if(/^Hangul\|^Pronunciation/.test(d)\|\|!deckUnlocked(d)) return;` (idleSlidesKo, built-in only) | `KIND('sounds',d)` (zero-diff, for consistency) |
| 1888 / 1907 | GOALS / PLAN_PRESETS deck lists | Already per course (`target/ko/course.json` goals/plans). No change. |
| — | `S.lessons.hangul=1` (onboarding) | A lesson id, identical in every half (HALVES-SPEC §2). Keep. |

The regexes resolve, on today's en-ko deck list (dumped), to:
- `letters` = Hangul vowels, Hangul consonants, Hangul · advanced;
- `sounds` = letters + Pronunciation tips;
- `grammar` = Particles, Core verbs, Counters, Numbers, Numbers in the wild, Adjectives;
- the listen-skip set = sounds + Core verbs, Particles, Numbers (not "Numbers in the wild": the regex is `Numbers$`), Counters, Adjectives, Connectors, My phrases.

`KINDS.reference` is therefore Particles, Core verbs, Counters, Numbers, Connectors, Adjectives.

`harness.js` itself also names decks: `'Survival phrases'` (review flow, migration), `'Numbers'` (suspend, badge, export), `#browse-flirting`, and `/^Hangul|^Pron|My phrases/` in `romAgree`. These test en-ko and stay valid.

### 1.3 i18n keys that are wrong for a Korean course

All 784 exact keys and 275 patterns were scanned in three ways: (1) Hangul runs that differ between the key and the es text, (2) `inglés` in the es text, (3) `context` marked "legacy wording". The results were then read by hand.

The dictionaries were written for es-en (Spanish speakers learning English), so "Korean" became *inglés* and Korean examples became English ones.

`native/<n>/ko/ui.json` (pack `UI`) fixes them per course. "OVR" = already overridden in `native/es/ko/ui.json`. The 14 static lines routed to `ui.json` are listed verbatim in the draft's `ui` group (each checked against `keys.json` and the built source). The two text nodes of the Hangul empty-input hint (`Type the sound in English letters (e.g.` / `), or type the Hangul itself.`) are rendered by `renderHangulQ`, so they move to `TRAINER.hangul.ui.empty`.

| Key | es today | Problem | Route |
|---|---|---|---|
| `Korean starter`, `KOREAN STARTER`, `Korean progress`, `Learn Korean, 5 minutes a day`, `Learning Korean 5 minutes a day with Lang App 🇰🇷` | *Inglés desde cero* … | says English | ui.json (OVR) |
| `Korean (required)`, `Korean, romanization, meaning, note — one per line …` | *Inglés (obligatorio)* … | says English | ui.json (OVR) |
| `Read 한→en`, `Recall en→한`, `⌨️ Type 한` | *Leer en→es* … | wrong direction | ui.json (OVR) |
| `type it in Hangul`, `Type the Korean, or tap Check again to give up.`, `), or type the Hangul itself.` | *escríbelo en inglés* … | says English | ui.json (OVR) |
| `Can you already read Hangul?`, `What do you want Korean for?` | *¿Ya sabes leer en inglés?* … | says English | TRAINER.onboard (es ui.json OVR exists) |
| `Hangul, flashcards with audio, quizzes…` | drops Hangul | | ui.json (OVR) |
| `Type the romanization. Hangul blocks stack consonant + vowel (+ final). Your level here is also used in sessions.` | *…Las palabras se dividen en sílabas…* | describes English | **ui.json (new)** |
| `How a block is built` | *Cómo se forma una palabra* | block → word | **ui.json (new)** |
| `(han). Vertical vowels (ㅏㅓㅣ) sit right of the consonant; …` | *(han). En inglés, la ortografía no siempre…* | English pronunciation advice | **ui.json (new)** |
| `Hangul drill` | *Lectura* | loses Hangul (weak) | ui.json (new, optional) |
| `Search a pattern, e.g. 에서 or 'want'` | *…p. ej., at o 'want'* | English example | **ui.json (new)** |
| `Romanization`, `Romanization (auto if blank)`, `Hide romanization`, `Blur romanization in Browse`, `Show romanization in practice`, `Aa romanization: on/off` | *Pronunciación…* | acceptable; *romanización* is more exact for Korean | ui.json (optional) |
| `Make it polite (요-form)`, `Make it casual (반말)`, `casual → polite: add 요 (or the honorific verb)`, `polite → casual: drop 요` | *Pásalo a formal* … *usa una forma más cortés* | drops the 요 rule | TRAINER.register |
| `dictionary form, e.g. 먹다`, `Enter a dictionary form ending in 다.`, `Try 가다 · 먹다 · …` | *infinitivo, p. ej., eat* / *(p. ej., go)* / *Prueba con go · eat …* | English verbs | TRAINER.conj.ui |
| `polite present`, `polite past` | *presente formal* | collides with the `formal` row (합니다) | TRAINER.conj.labels |
| `verb stem + 지`, `verb + 도 (even if)`, `+ 요 (polite)`, `verb · past (았/었어요)`, `don't (지 마)`, `is it okay? (-아/어도 돼요)`, `not okay? (-(으)면 안 돼요)` | *raíz verbal + terminación* … | drops the Korean ending | TRAINER.gloss.tpl |
| `안녕하세요 👋 Two quick questions` | *¡Hola! 👋 …* | drops 안녕하세요 (intended for es-en) | TRAINER.onboard |
| `사자성어 · four-character idiom`, `목표 달성! Daily goal reached 🎉`, `모두 열렸어요 · Everything unlocked` | Korean dropped | intended for es-en; built-in-only screens | none needed for packs |

Trainer strings that are **not keys** today: `syllable`, `word`, `digits`, `future`, `casual`, `formal`, `negative`, `Why: `, `↻ stroke order`, all numbers hints and all glosses. They go in `TRAINER` (routing rule, §2.6). They are not added to the frozen `keys.json`, because bare words without context would cost 13 dictionaries and collide across meanings.

---

## 2 · Design

### 2.1 The fallback question: en-ko supplies the fields itself

**Decision:** `registerCourses()` attaches `ROLES`, `KINDS` and `TRAINER` to `COURSES['en-ko']`, exactly as it attaches `DECKS`, `PAIRS` and `GOALS` today. All trainer code reads only those fields through `TR()`, `ROLE()` and `KIND()`. **There is no fallback to globals for packs.**

Why:
1. **One code path.** The harness and golden test on en-ko exercise the code every pack runs.
2. **A fallback would reintroduce the bug.** A pack that sets `features.numbers=true` without `TRAINER.numbers` would silently show the English hints. With readiness gating it shows no numbers drill instead.
3. **Closes the loop like DECKS.** `proof.js` can assert `assemble('en','ko').TRAINER ≡ COURSES['en-ko'].TRAINER`, so `native/en/ko/trainer.json` is proven, not hoped.
4. **Byte-identical by construction.** In WP0b, `TRAINER_EN` is built from the **existing globals by reference** (`{hangul:{mean:MEAN,…}, gloss:{PART:…}}`), so no data is retyped. Later packages change readers, never the en-ko data. The seeded golden test (WP0a) proves zero diff after each package.

### 2.2 Pack fields (exact names and shapes)

```js
LANGAPP_PACKS.course['es-ko'] = { …existing fields…,
  features: { script:true, pron:true, conj:true, register:true, numbers:true, sound:true, strokes:true }, // set by assemble from readiness (§5.3)

  ROLES: {                                   // stable role -> this pack's deck label / group name (always emitted for a Korean pack)
    hangulVowels: 'Vocales del hangul',
    hangulConsonants: 'Consonantes del hangul',
    survival: 'Frases de supervivencia',
    weekGroups: ['Vida diaria', 'Social']      // group names weekDeck() draws from
  },
  KINDS: {                                   // deck sets (labels); derived sets are computed in the engine
    letters: ['Vocales del hangul', 'Consonantes del hangul', 'Letras avanzadas del hangul'],
    pronunciation: ['Claves de pronunciación'],
    grammar: [ /* Particles, Core verbs, Counters, Numbers, Numbers in the wild, Adjectives */ ],
    reference: [ /* Particles, Core verbs, Counters, Numbers, Connectors, Adjectives */ ]
  },

  TRAINER: {                                 // native text only; the shape of native/<n>/ko/trainer.json minus "_" fields
    hangul:   { mean: {나무:'árbol', …},      // every WORDS_CV + WORDS_F word
                alt: { V:{ㅘ:['ua'],…}, L:{}, T:{}, sh:['sh'],
                       input: { fold:true, map:[['ñ','ny']], rewrite:[['qu(?=[ei])','k'],['gu(?=[ei])','g'],['c(?=[aou])','k']] } },
                ui: { placeholder, ariaLabel, levelSyllable, levelWord, empty, pickPrompt },
                defaultMode: 'type' },        // optional: 'pick' for learners who do not type Latin (§3.3)
    onboard:  { title, read, readNo, readSlow, readYes, goal, time, started },          // started = 'Set up. Start with %1.'
    gloss:    { PART:{에서:'…'}, ENDS:{…}, QW:{…}, CONN:{…}, COUNT:{…},
                tpl:{ question:'%1 (question word)', counter:'counter · %1', number:'number %1', jiMa, adoDwaeyo, myeonAnDwaeyo,
                      doEvenIf, jiStem, past, particleYo:'%1 + %2 = %3 + 요', questionYo:'%1 + 요 (polite)', verb:'verb · %1',
                      particle:'%1 + %2 = %3', digits:'number', word:'noun / word' } },
    build:    { extra:{ '어제 친구를 만났어요':'Ayer vi a un amigo', … },   // Korean from target course.json build[], gloss native
                ui:{ prompt, answer, notQuite } },
    numbers:  { hint:{ price, time, phone, floor, count:'count (native + %1 %2)', age, minutes },
                counter:{ 개:'things', 명:'people', 잔:'cups', 병:'bottles', 마리:'animals', 장:'sheets' },
                ui:{ prompt:'🔢 Listen and type the number · %1', placeholder:'digits' } },
    sound:    { rules:{ '연음':'…', '받침 → %1':'…', … }, showGloss:true, ui:{ prompt } },   // showGloss false in en (§2.4)
    register: { toPolite, toCasual, whyPolite, whyCasual },
    conj:     { labels:{ polite, past, future, casual, formal, kkayo, want, dontDo, neg },
                irregular:{ 'ㄷ→ㄹ':'ㄷ→ㄹ', 'ㅂ→우':'ㅂ→우', 'ㅡ drop':'…', '르':'르' },
                ui:{ empty, irregular:'irregular: %1', title, placeholder, button, tryLine } },
    quiz:     { why:'Why: %1', rule:'Show rule ↗' },
    koui:     { 수고했어요:'good work', … },           // gloss only; the tooltip is romanize(ko)+' · '+gloss (equal to today's stored KOUI for all 14)
    strokes:  { replay:'↻ stroke order' }
  }
};
```

Further rules for these fields:
- **Slots** are `%1`…`%9`, positional. `HALVES-SPEC §6` forbids braces in native text, so `{x}` cannot be used. `validate.js` checks that the same `%n` set appears in every native string as in the English one.
- **Keys:**
  - Korean text where the engine table is keyed by Korean (`mean`, `PART`, `CONN`, `koui`, `build.extra`, rule names);
  - otherwise a fixed English slug.
  - An engine-side change of a Korean key shows up as a missing or orphan key in `validate.js`, the same as a card.
- **Order:** `PART`/`ENDS` order is match logic (longest suffix first) and stays in the engine. Native files are maps.
- **Engine helpers (WP0b):**
  - `TR(path)` returns `COURSE.TRAINER` at that path, or `undefined`;
  - `TRF(path, ...slots)` fills `%n`;
  - `ROLE(r)` returns `COURSE.ROLES[r]` only when that deck exists;
  - `KIND(k,d)` is a memoised `Set` per course: `sounds = letters ∪ pronunciation`.

### 2.3 Turning a feature on: flag and readiness

```js
const READY = {
  script:   () => TR('hangul.mean') && WORDS_CV.concat(WORDS_F).every(w => TR('hangul.mean')[w]) && TR('hangul.ui') && TR('onboard'),
  numbers:  () => !!(TR('numbers.hint') && TR('numbers.counter') && TR('numbers.ui')),
  sound:    () => !!TR('sound.ui'),
  register: () => !!TR('register') && PAIRS.length >= 4,
  conj:     () => !!TR('conj.labels') && !!TR('conj.ui'),
  pron:     () => COURSE.target === 'ko',
  strokes:  () => true };
function CF(f){ return !!(COURSE && COURSE.features && COURSE.features[f]) && (!READY[f] || READY[f]()); }   // memoised per course in _rt
function modeOk(m){ return m==='type'||m==='listen'||m==='role'||m==='say' ? true
  : m==='pick' ? CF('script') : m==='build' ? CF('script') && !!TR('gloss') && !!TR('build')
  : m==='register'||m==='numbers'||m==='sound' ? CF(m) : false; }
```

- `READY` applies only when `COURSE.target==='ko'`; for other targets `CF` stays exactly as today. No pack in `packs/` sets any flag to `true` (all `course-*.js` checked; `ko-en` has no `features` field), so this changes nothing for existing packs.
- `modeOk('register'|'numbers'|'sound')` does not require `script`, matching today's `regStart` and `sessSize`. The read-tab chips keep today's outer test (`sc ? modeOk(m) : basic set`).

`modeOk` replaces every per-mode test. Each line below is touched once, in WP0b:

| ≈Line | Code today | Change |
|---|---|---|
| 1266 | `#hModes` chip visibility: `(m==='register'&&!CF('register'))\|\|…` | `sc?!modeOk(m):…` (outer test unchanged) |
| 1272 | `QUICK.read=sc?QUICK_READ_ALL:…filter((x,i)=>[0,4,6,7].includes(i))` | Filter by `modeOk`. **Today it ignores the register/numbers flags.** |
| 1816 | Global-search drill list `.filter(([l,m])=>CF('script')?…)` | Filter by `modeOk`. |
| 1846 | `sessSize()` | `build` zeroed unless `modeOk('build')`; register and numbers likewise. |
| 1218 | `if(!CF('script')&&![…].includes(S.drillMode)) S.drillMode='type';` | `if(!modeOk(S.drillMode)) S.drillMode=TR('hangul.defaultMode')\|\|'type'`. **Today a stale `sound` mode survives a switch to a pack without sound** (B6). |
| 1752–1761 | `renderHangulQ` dispatch | `if(!modeOk(S.drillMode))` falls through to type. |
| 1503, 2053 | breakdown button, Words from dialogues | `modeOk('build')` instead of `CF('script')` |

For en-ko every predicate is true, so behaviour is unchanged.

### 2.4 What stays in the engine and what is native

| Engine (language-neutral, shared) | Target half `target/ko` (Korean, shared) | Native half `native/<n>/ko` |
|---|---|---|
| `L`/`V`/`T`: canonical RR + neutral variants (ㄱ g/k, ㄹ r/l, ㅐ/ㅔ merger, ㅙ/ㅚ/ㅞ `we`, ㅝ `weo`, ㅢ `ei`, finals) | `course.json roles` (deck/group ids), `kinds` (deck id lists) | `trainer.json` (§2.2) |
| `decompose`, `answersFor` (+ the 400-combination cap; max today is 48, for 얼굴), `hangulItem` | `course.json build[]` ({id, ko} for the 18 Build sentences) | `ui.json`: Korean-specific static strings (§1.3) |
| `WORDS_CV`, `WORDS_F` (Korean drill corpus; the harness `badWords` guard reads them) | `trainer.json` (read-only mirror written by `export_ko.js`: word lists, `PART`/`ENDS` order, rule names, KOUI keys; lets `validate.js` run without a browser; KOUI needs no stored romanisation) | |
| `romanize`, `pronounce`, `PJ_*`, the sound-pool builder | `sound.json` (new in WP7/WP8: lexical exception lists for ㄴ-insertion and tensing) | |
| `conj`, `dec`/`com`, `sino`/`native`, `numItem` generators, the answer-strip set `[\s,원층살분명개잔병마리장]` | | |
| `PART`/`ENDS` **keys and order**, `QW`/`CONN`/`COUNT` keys, `NUMS` | | glosses for those keys |
| `STROKES`, `strokeSVG`, `SAY` (TTS), `FLOURISH.ko` | | |

Sound-rule glosses (`TRAINER.sound.rules`) are **new text**. The engine shows only Korean rule names today. The draft carries English glosses condensed from `lessons/sound-changes.html`, marked `"_new": true`.
- The renderer shows `name · gloss` (drill feedback and the `pronNote` tooltip) only when `TRAINER.sound.showGloss` is true.
- `native/en/ko/trainer.json` and `TRAINER_EN` both carry the rules with `showGloss:false`. en-ko output stays identical, and `proof.js` deep-equality still holds.
- Packs set `showGloss:true`. Whether en-ko flips it is a separate, re-baselined decision (WP8).

### 2.5 en-ko byte-for-byte

- WP0b only moves the tables into `TRAINER_EN`, `ROLES_EN` and `KINDS_EN`, by reference or by moving the literal unchanged.
- The `V` rows lose their English tails (`uh`, `u`, `yuh`, `oo`, `ee`), and `TRAINER_EN.hangul.alt.V` puts them back, in the same package (WP0b) that rebuilds `Lby`/`Vby`/`Tby` per course (`decompose` reads them) and moves the `'sh'` push to `TR('hangul.alt.sh')`. The golden never sees a half-moved state.
  - Per-course tables are rebuilt as `[canonical, …neutral, …native]` in `courseRT`.
  - The extraction script proves that this reproduces today's `V` exactly; the tails are trailing in every row.
- **Golden test** `tools/tests/trainers-golden.js` (WP0a) runs on en-ko with `Math.random` seeded (mulberry32) and records:
  - `answersFor` sets for all 101 words, and `hangulItem` ×200 at each of the 3 levels;
  - the innerHTML of every renderer (type, pick, register, number, sound, build) for 50 seeded items each;
  - `breakdown` over all `buildSentences()`, `dialogVocab()`, and `cjHTML` for 40 verbs;
  - `numItem` ×200, `pronNote` and `pronounce` over the sound pool, and `romanize` over all cards;
  - the `renderOnboard` HTML, `QUICK.read`, the `#hModes` visibility, and `sessSize` and `planSession` item types for 6 learner states.
- Zero-diff packages must pass it unchanged. Fix packages (WP7, WP8) re-baseline it in the same commit, with the diff reviewed.

### 2.6 Routing rule for UI strings

- **Rendered by a trainer function, concatenated, inside `I18N_SKIP` containers, or a bare word** → `TRAINER`.
- **A whole sentence that is static page chrome** (the read-tab panel, the add-card form, the grammar search) → an i18n key, plus the course's `ui.json` where the dictionary is wrong for Korean.
- Generic words that keep their meaning in any course (`Check`, `Skip`, `🔊 Play`, `🐢 Slow`, `Next`) stay English literals and go through the DOM translator as today.
- WP0b makes `setI18n()` build `I18N` from `COURSE.UI` alone when the native language has no i18n pack. HALVES-SPEC §8.2 requires this, but the code is still `else { I18N=null; I18N_RX=[]; }`.

---

## 3 · Typed-answer alternates for the Hangul drill

### 3.1 Today

`answersFor(word)` multiplies, per syllable, the initial × vowel × final spelling lists. The first item of each list is the canonical Revised Romanization; the rest are accepted alternates. Example: `["ㅓ",4,["eo","uh","u"]]`.

Then `li.push('sh')` before ㅣ and y-vowels after ㅅ. The input is reduced to `[a-z]`.

The alternates mix two kinds:
- **Neutral** (any learner): ㅐ/ㅔ `e`/`ae` (merged in Seoul speech), ㅒ/ㅖ, ㅙ/ㅚ/ㅞ `we`, ㅝ `weo`, ㅢ `ei`, and all consonant voicing variants (`g/k`, `d/t`, `b/p`, `r/l`, finals). These stay in the engine.
- **English spellings:**
  - ㅓ `uh`, `u` — `u` collides with ㅜ's canonical `u`, an existing en exception kept for en-ko;
  - ㅕ `yuh`, ㅜ `oo`, ㅣ `ee`, and `sh`.
  - These become `TRAINER_EN.hangul.alt`, and other languages do not inherit them.

### 3.2 Spanish (`native/es/ko/trainer.json`)

Provenance:
- The **rejections** and the **`gu` rule** follow from the reviewed reading guidance already in `native/es/ko/decks.jsonl` (Hangul deck descriptions): *eo = o abierta*, *eu = u con labios estirados*, *la j nunca es jota*, *la g siempre como en gato*, *la h es un soplo*.
- **`ua`/`uo`/`ue`, the `qu` and `c` rewrites, `ñ→ny` and keeping `sh` are proposals of this plan**, based on standard Spanish orthography. The es reviewer must confirm them before WP1 ships.

```json
"alt": {
  "V": { "ㅘ": ["ua"], "ㅝ": ["uo"], "ㅙ": ["ue"], "ㅞ": ["ue"], "ㅚ": ["ue"] },
  "L": {}, "T": {},
  "sh": ["sh"],
  "input": { "fold": true, "map": [["ñ", "ny"]], "rewrite": [["qu(?=[ei])", "k"], ["gu(?=[ei])", "g"], ["c(?=[aou])", "k"]] }
}
```

- **`ua`/`uo`/`ue`:** Spanish writes [wa]/[wo]/[we] that way (*cuando, cuota, fuego*). None of these equals a canonical vowel spelling.
- **Rewrites:**
  - `gue`/`gui` is how a Spanish speaker writes the [ge]/[gi] they hear in 게/기 (RR `ge`/`gi` reads as *je/ji* in Spanish);
  - `que`/`qui` and `ca`/`co`/`cu` are Spanish for [k].
  - Rewrites only **add** a candidate: the matcher accepts if the folded input *or* its rewrite is in the set. So 구이 `gui` still matches as written.
- **`fold`** strips accents (`á→a`, `ü→u`), so `sé` is not reduced to `s`. **`ñ→ny`** (뇨 `nyo`).
- **`sh`** is kept. K-pop romanisation is everywhere for Spanish-speaking learners, so this needs a check by the es reviewer.

Rejected, because each would merge two letters the course teaches apart:
- ㅓ `o` would accept `soul` for 서울, the minimal pair in *Pronunciation tips* #15;
- ㅡ `u` (merges with ㅜ), ㅕ `yo` (with ㅛ), ㅟ `ui` (with ㅢ);
- ㅎ `j` (merges with ㅈ), ㅈ `y` (ㅈ+ㅏ would equal 야 `ya`), ㅈ `ch` (with ㅊ);
- ㅃ/ㄸ/ㄲ `p/t/k` (Spanish stops are close, but they merge with ㅍ/ㅌ/ㅋ);
- final ㅇ `n` (with ㄴ), ㅇ `h`/`hu` (*Huawei*, merges with ㅎ);
- the English tails.

### 3.3 Other languages

The engine has one mechanism, and each native half supplies its own data.

`input` options:
- `fold` (NFD, strip combining marks);
- `map` (ordered literal replacements; it may map a whole script to Latin);
- `rewrite` (regex additions);
- `defaultMode`.

The input element gets `lang=COURSE.native`. It gets `inputmode="latin"` only when the course types in Latin.

| Learners | Recommendation |
|---|---|
| tl, ceb | Latin. Candidates: `ts→ch` (*tsinelas*). No vowel merging, because Tagalog's u/o variation would merge ㅜ/ㅗ. Writer + reviewer decide. |
| zh | Pinyin habits (`x`, `q`, `zh`) clash with RR. Ship no alternates, set `defaultMode:'pick'`, and accept typed Hangul (already supported: `if(/[가-힣ㄱ-ㆎ]/.test(raw))`). |
| ja | `map` = kana → Hepburn (≈90 rows, authored once by the ja writer), so `カ` is matched as `ka`. Set `defaultMode:'pick'`. |
| ru, uk | `map` = Cyrillic → RR per the Kontsevich system that Russian textbooks use for Korean (к→k/g …). Review the ambiguous rows. |
| ar, hi, th, others with a non-Latin script | `defaultMode:'pick'` plus typed Hangul. Latin typing remains available. |

`validate.js` rules for `alt`:
- Values are `[a-z]+`.
- No value equals **another jamo's canonical spelling in the same slot**. The en exception `ㅓ:'u'` is whitelisted for en only.
- `rewrite` regexes compile, and their outputs are `[a-z]*`. `map` keys are non-empty.
- With the table applied, the maximum `answersFor` combination count over `WORDS_CV`+`WORDS_F` stays under 400 (cap order matters).

---

## 4 · Work packages

The order is fixed by dependencies.

- **Delivery order** (which flag flips first in es-ko): Hangul → numbers → sound → register → conjugation → glosses. A flag flips in `assemble.js` as soon as that section of `native/es/ko/trainer.json` validates.
- **Implementation order:** the trainer packages can run in parallel once WP0b lands, as the table shows.

| WP | What | Files | Size | Risk | Tests |
|---|---|---|---|---|---|
| **WP0a** | Golden baseline (§2.5), captured **before any app change** | new `tools/tests/trainers-golden.js`, `tools/tests/golden/en-ko-trainers.json` | ~160 test lines | low | It is the test. It must pass twice in a row (seeded, so deterministic). |
| **WP0b** | Foundation, **serial, one agent**: `CF` + `READY` + `modeOk`; `TR`/`TRF`/`ROLE`/`KIND`; `TRAINER_EN`/`ROLES_EN`/`KINDS_EN` attached in `registerCourses` (by reference); per-course `L`/`V`/`T` + `Lby`/`Vby`/`Tby` rebuilt in `setCourseTables`, English tails moved to `TRAINER_EN.hangul.alt`, `'sh'` from `TR`; all 15 deck-name sites (§1.2); the mode-gating lines (§2.3); `setI18n` with `COURSE.UI` and no pack; `koTips` from `romanize(k)+' · '+TR('koui')[k]` (no tooltip on packs without it, fixing B5); the quiz `Why:` line from `TR('quiz')`; the card-back stroke button from `TR('strokes.replay')` (B12); `TOUR[3]`/today tile/progress labels by `modeOk` | `src/app.html` only | ~140 changed lines | medium (session planning, onboarding) | golden zero diff; `node harness.js` all guards; esko E1–E10; new esko E11: listen "where" options exclude `KINDS` decks; E12: stale `drillMode='sound'` on a pack without sound renders the type drill; E13: a pack with `features.script=true` and no `TRAINER` shows no Hangul modes and no English (BAD regex) |
| **WP0c** | Halves plumbing, **parallel to WP0b** (no app.html): `target/ko/course.json` roles/kinds/build (written by hand from §1.2 once, ids only); assemble emits `ROLES`/`KINDS` always, `TRAINER` when present, features from readiness, `pron:true`/`strokes:true` now; validate.js trainer checks; `mk_native.js` puts trainer rows in the work split; `selftest.js` breakage cases; `native/en/ko/trainer.json` = the draft renamed (minus `_meta`/`_engineNeutral`/`ui`; the `ui` lines go to the native `ui.json` files); an **empty-section skeleton** `native/es/ko/trainer.json`, so the trainer packages edit disjoint blocks | `tools/halves/*` (not export/proof), `target/ko/course.json`, `native/en/ko/trainer.json`, `native/es/ko/trainer.json` | ~200 lines | low | `selftest.js`; `validate.js es ko` reports the trainer words remaining; `assemble.js es ko` still yields all flags false except `pron`/`strokes` |
| **WP0d** | Export + proof, **after WP0b** (needs `COURSES['en-ko'].TRAINER`): `export_ko.js` writes `native/en/ko/trainer.json`, `target/ko/course.json` roles/kinds/build and the `target/ko/trainer.json` mirror from the live engine (folding in the extraction script); `proof.js` compares TRAINER/ROLES/KINDS and the mirror | `tools/halves/export_ko.js`, `proof.js`, `target/ko/trainer.json` | ~80 lines | low | `proof.js` 0/0 differences; `export_ko.js` run twice is a no-op |
| **WP1** | Hangul drill: the input normaliser (§3) and the `<input lang/inputmode>`; `renderHangulQ`/`renderHangulPick` feedback `TR('hangul.mean')`, UI from `TR('hangul.ui')`, `defaultMode`; `renderOnboard` from `TR('onboard')`; es `hangul` + `onboard` sections + the new es `ui.json` lines (block ×2, han, Hangul drill, search pattern); flip `script` | app.html: `renderHangulPick` (≈1655–1662), `renderHangulQ` from `const it=hangulItem(lvl)` to its end (≈1762–1778), `renderOnboard` (≈1889–1903); es files | ~40 app lines; es ≈180 words | low–medium (matcher) | golden zero diff; new `tools/tests/esko-hangul.js` (real assembled es-ko): 서울 accepts `seoul`, rejects `soul`; 과 accepts `gwa`/`gua`; 게 accepts `ge`/`gue`; 서 rejects `so`; `sé` is folded, not cut to `s`; feedback gloss is Spanish; no `tree`/`type the sound`/`English letters` on screen; onboarding in Spanish; `validate.js` alt-collision case in selftest |
| **WP2** | Numbers: `numItem` hints and counter labels via `TRF('numbers.hint.*')`, `renderNumberQ` prompt and placeholder; es section; flip `numbers` | `numItem`, `renderNumberQ` (≈1721–1735) | ~15 app lines; es ≈40 words | low | golden; `esko-numbers.js`: 30 seeded items, the prompt line contains no `[A-Za-z]{3,}` English token list (`price`, `native`, `Sino`, `floor`…); answers still grade |
| **WP3** | Sound drill: `renderSoundQ` prompt from `TR('sound.ui')`; rule display `name · gloss` when `TR('sound.showGloss')`; `pronNote` tooltip same; es section; flip `sound` | `pronNote` (≈1597), `renderSoundQ` (≈1693–1703) | ~12 app lines; es ≈75 words | low | golden (en-ko has `showGloss:false`, so no diff); `esko-sound.js`: feedback shows the Korean name + Spanish gloss |
| **WP4** | Register: `renderRegisterQ` four strings; `regStart` labels are keys already; es section; flip `register` | `renderRegisterQ` (≈1678–1683) | ~6 app lines; es ≈20 words | low | golden; `esko-register.js`: prompt and feedback in Spanish and contain `요` / `반말` |
| **WP5** | Conjugator: `cjHTML` labels/irregular/empty; the grammar panel strings; es section; flip `conj` | `cjHTML` (≈2012), the **conjugator half of the `renderGrammar` line** (≈2053, only after WP0b has changed its gate) | ~12 app lines; es ≈35 words | low | golden; `esko-conj.js`: 듣다 → 들어요 with Spanish labels; the placeholder shows `먹다`, not `eat` |
| **WP6** | Glosses + Build: `breakdown` returns `{w,kind,base,parts}` and renders through `TR('gloss')` templates; `dialogVocab` uses `kind/base` and no longer parses gloss text; `buildSentences` takes its extra pairs from `TR('build.extra')`; Build UI; es sections; `.bd` marked `data-noi18n` on packs only | `PART`…`isPastSyl` (≈1557–1563, leave keys/order), `breakdown`/`breakdownHTML` (≈1598–1603), `buildSentences`/`renderBuildQ` (≈1664–1677), `dialogVocab` (≈2050–2052) | ~60 app lines; es ≈300 words | medium (dialogVocab and the Build pool) | golden zero diff (breakdown strings + dialogVocab list); `esko-gloss.js`: break-down button on a dialogue card shows Spanish glosses with the Korean endings intact; the Build drill shows only Spanish prompts |
| **WP7** | Fix W5 (`romanize`): ㄴ-insertion from the target `sound.json` lexicon + rule, `맛없`/`멋없` [마덥], `밟-` [밥]; romanize stops writing tensing (`괜찮습니다` → `gwaenchanseumnida`, review N3) via `pronounce(word,{tense:false})` | `romanize` (≈1690), `pronounce` signature; `target/ko/sound.json` | ~40 lines | medium | **Re-baseline** golden + harness `romAgree>0.985` (expected to rise: 스물여덟 etc.); unit table of 20 words from the review |
| **WP8** | Fix W8 (`pronounce` in the drill): 경음화 after obstruent finals and after the ㄹ-modifier (-ㄹ 거/게/수), phrase-level assimilation (몇 화 → [며톼], 다섯 마리 → [다선마리]) without tensing across word boundaries, consistent ㄴ-insertion before 요 (잠시만요 → [잠시만뇨], NS), lexicon from `sound.json`. `pronNote` and `renderSoundQ` call it per phrase. Optionally show rule glosses in en-ko. | `pronounce` (≈1572–1596), `pronNote`, the `soundPool` builder | ~70 lines | medium–high (linguistics; NS review) | Re-baseline golden; the 9 review cases as unit tests; the pool re-dumped and read |

**Parallelism, judged per physical line:**
- **Serial, first:** WP0a, then WP0b. Every mixed-feature line belongs to WP0b: the `#hModes` line in `applyCourseUi`, `QUICK.read`, the global-search drill list, `sessSize`, `planSession` (`hl`, `canRead`, filter), `resetCourseRuntime`, `registerCourses`, the card-back line ≈1503, and the gates on the `renderGrammar` line ≈2053.
- **In parallel with WP0b:** WP0c, which touches no app.html. **After WP0b:** WP0d.
- **Who regenerates `packs/course-es-ko.js`:** the lead only, after each package merges (`node tools/halves/assemble.js es ko packs/course-es-ko.js`; the output is deterministic). Package tests assemble into the temp directory (the assemble default), so parallel agents never write `packs/`.
- **In parallel after WP0b:** WP1, WP2, WP3, WP4, WP5 and WP6. Each owns only its trainer's function lines (column 3), its own `esko-<name>.js`, and its own block of the skeleton `native/es/ko/trainer.json`.
  - WP5 and WP6 both live near ≈2050–2053, but on different lines: `dialogVocab` is its own lines, and the panel text sits on the `renderGrammar` line. WP6 must not touch that line. If an agent cannot keep that boundary, run WP5 before WP6.
- **Serial after WP3:** WP7 and WP8 (they share `pronounce`). Run them after all zero-diff packages, because they re-baseline the golden.
- **`esko.js`:** WP0b adds `tools/tests/esko-lib.js` (loads the real assembled pack or a fixture, has the scan/BAD helpers). Each trainer test is its own file, so there are no conflicts.

**What `harness.js` relies on**, to keep in mind:
- `out.badWords=[...WORDS_CV,...WORDS_F].filter(w=>!answersFor(w))`: the globals stay, so it is unaffected.
- `conj('듣다')`, `sino(38900)` / `native(25,true)`: unaffected.
- `sizes.pairs>=36`: the `PAIRS` global stays.
- `romAgree` (`romanize`, `/^Hangul|^Pron|My phrases/`): its threshold moves in WP7.
- `openSheet('read')` count `===8` (`QUICK.read`): must stay 8 for en-ko after WP0b's `modeOk` filter.
- `TOUR.every(...)` selectors, `renderSayQ`, `renderRoleQ`/`renderListenQ` option counts.
- The deck-name tests: `'Survival phrases'`, `'Numbers'`, `#browse-flirting`.
- Add two guards in WP0b:
  - `trainerTables`: every `ROLES`/`KINDS` label of en-ko exists in `DECKS`, and every `READY` predicate is true for en-ko;
  - `noFallback`: a copy of en-ko without `TRAINER`, under a new id, gets `CF('script')===false`.

---

## 5 · Halves tooling

### 5.1 Target half `tools/halves/target/ko`

- **`course.json`** gains:
  - `"roles": {"hangulVowels":"ko.d.hangul-vowels","hangulConsonants":"ko.d.hangul-consonants","survival":"ko.d.survival-phrases","weekGroups":["ko.grp.everyday","ko.grp.social"]}`;
  - `"kinds": {"letters":[3 ids],"pronunciation":["ko.d.pronunciation-tips"],"grammar":[6 ids],"reference":[6 ids]}`;
  - `"build": [{"id":"ko.b01","ko":"어제 친구를 만났어요"}, … 18]`.
  - `export_ko.js` writes them from `KINDS_EN`/`ROLES_EN`/`buildSentences` (after WP0b), with stable ids.
- **`trainer.json`** (new, read-only mirror; `export_ko.js` writes it from the live engine, and `proof.js` checks it): `{words:{cv:[…],f:[…]}, part:[order], ends:[order], qw:[keys], conn:[keys], count:[keys], koui:[keys], soundRules:[names], conjFields:[…], conjIrregular:[…], numKinds:[…], counters:[…], build:[ids]}`. It is the list of keys a native `trainer.json` must cover. The word lists **stay in the engine**; this is a mirror, not a second source.
- **`sound.json`** (WP7): lexical lists, `{"ninsert":["꽃잎","색연필","한여름","십육","스물여덟","강남역","지하철역",…], "jeoreum":["맛없","멋없"], "tense":[…]}`. It ships inside the engine at build time, because `romanize` runs for every course.

### 5.2 Native half `tools/halves/native/<n>/ko/trainer.json`

- It has the shape of `TRAINER` (§2.2), plus `_src`/`_note`/`_new`/`_waive` meta fields, which assembly ignores.
- `native/en/ko/trainer.json` = `trainer.draft.json` minus `_meta`, `_engineNeutral` and the `ui` group, renamed in WP0c. The `ui` group's 14 lines become `ui.json` entries in every non-English native half (for en they are identity, so `native/en/ko/ui.json` stays `{}`).
- **`export_ko.js` does not delete it.** It only `rmSync`s `lessons/` and rewrites the files it names.

### 5.3 `assemble.js`

- `loadHalves` reads `trainer.json` on both sides when present.
- The pack gains:
  - `ROLES`/`KINDS`, always, mapped id → native label (and group id → native group name);
  - `TRAINER` = the native file without `_*` keys. `build.extra` is rebuilt as `{ko: gloss}` from the target `build[]` + native glosses keyed by Korean.
- `features` comes from readiness instead of the literal `features: { script: false, … }` line:
  - `script` = hangul.mean complete ∧ hangul.ui ∧ onboard;
  - `numbers`/`sound`/`register`/`conj` = section present and complete;
  - `pron:true`, `strokes:true`.
  - A missing key makes the flag `false` (lenient), and `validate.js` reports why.

### 5.4 `validate.js`, `proof.js`, `mk_native.js`, `selftest.js`

- **validate.js** (new checks, errors unless noted):
  - every key of `native/en/ko/trainer.json` exists in `<n>` (or the whole section is absent, which is a warning: "feature stays off"), and there are no orphans;
  - `hangul.mean` covers every word in the target mirror;
  - `%n` sets equal the English ones;
  - Hangul runs set-equal the English ones (the existing rule; `_waive` allowed);
  - no braces, and length ≤ 200 per value;
  - the `alt` rules (§3.3);
  - `ROLES`/`KINDS` ids resolve to target decks and groups;
  - **words remaining** now include `trainer.json` and `ui.json`.
- **proof.js:** compare `assemble('en','ko').TRAINER/ROLES/KINDS` with `COURSES['en-ko']` (deep, exact), and the target mirror with the live engine.
- **mk_native.js:** flatten `trainer.json` into rows `{"id":"gloss.CONN.그래서","src":"so","tgt":""}` in its own writer file (`wT.jsonl`, ≈660 words, one writer). `--merge` nests the rows back.
- **selftest.js:** breakage cases (drop a `mean` row; change `%1`; add an alternate `o` for ㅓ; add an orphan `PART` key). Each must turn validate red.

**How the draft was extracted.** A Playwright script dumped the globals and each trainer function's `fn.toString()` (`numItem`, `breakdown`, `cjHTML`, `conj`, `renderRegisterQ`, `renderOnboard`, `buildSentences`, `pronounce`, `renderHangulQ`, `renderHangulPick`, `renderNumberQ`, `renderSoundQ`, `renderBuildQ`, `renderGrammar`, `renderQuizQ`, `strokeSVG`).
- It ran on both the built file and the src snapshot, and the outputs are identical.
- It rebuilds `MEAN`, `PART` (in order), `ENDS` (in order), `QW`, `CONN`, `COUNT`, `KOUI` and the full `V` rows from the draft, and deep-equals them against the live values.
- WP0c folds it into `export_ko.js`.

---

## 6 · Bugs to fix on the way

| # | Bug | Where | Fix (package) |
|---|---|---|---|
| B1 (review W5) | `romanize()` skips ㄴ-insertion (스물여덟 → seumuryeodeol, 꽃잎 → kkochip, 색연필, 한여름, 십육), the 절음 rule (맛없어요 → maseopseoyo, should be madeopseoyo) and 밟- (balda → bapda). It also writes tensing for ㅎ+ㅅ (괜찮습니다 → gwaenchansseumnida; RR does not mark tensing, review N3). | `romanize` ≈1690 → `pronounce(…,true)` | Lexicon in target `sound.json` + boundary rule; `tense:false` for romanize (WP7). Re-baseline `romAgree`. |
| B2 (review W8) | The drill never applies 경음화 (잘 먹겠습니다 → [잘 먹겓슴니다], 미쳤다, 늦을 것 같아 [느즐 껃 가타]) and works word by word (몇 화 [멷 화] → [며톼]; 다섯 마리 → [다선마리]). ㄴ-insertion before 요 is inconsistent (정말요 [정말료] vs 잠시만요 [잠시마뇨]). | `pronounce`, `pronNote`, `soundPool` | Phrase-level `pronounce` with word-boundary markers, a tensing rule after obstruent finals and -ㄹ modifiers, and the lexicon. Until then the review's stop-gap applies: filter the pool to single words whose only changes are 연음/비음화/ㅎ-drop/유음화 (WP8). |
| B3 | `dialogVocab` parses English gloss text (`/^(.+?) \+ /`, `/stem (.+?)-/`, `/^(verb\|noun)/`). Any translated or reworded gloss changes which words it lists. | ≈2050–2051 | Structured breakdown tokens (WP6). |
| B4 | The listen drill's "Where would you hear this?" answers exclude decks by English regex. In es-ko (all flags off, **live today**) Hangul-letter and grammar decks appear as answer options. | ≈1709 | `KIND()` (WP0b). |
| B5 | `koTips` puts `KOUI` "rom · **English gloss**" tooltips on Korean toasts in every course. es-ko shows English on `수고했어요!`. | ≈654 | `romanize(k)+' · '+TR('koui')[k]` (WP0b). |
| B6 | `renderHangulQ` dispatches on a stale `S.drillMode` (`sound`, `register`, `numbers`) without checking the flag. `resetCourseRuntime` resets the mode only when script is off. `QUICK.read=sc?QUICK_READ_ALL` ignores the register/numbers flags. | ≈1218, ≈1272, ≈1752 | `modeOk` (WP0b). |
| B7 | The numbers prompt key pattern `🔢 Listen and type the number · {x}` passes the English hint into every UI language. The register feedback node starts with `·`, so it never matches its key. | ≈1730, ≈1682 | `TRAINER` (WP2, WP4). |
| B8 | `features.strokes` is never read (dead flag). | — | Keep as a no-op flag set to `true` by assembly. Document it in HALVES-SPEC. |
| B9 | en alternate ㅓ `u` equals ㅜ's canonical `u`, so `su` is accepted for 서. | `V` | **Not changed** (en-ko stays identical). Whitelisted for en only. Decide separately. |
| B10 | Target-half card fronts carry English (`ㄹ between vowels`, `ㅎ weakening`, `ㅇ final`, `ㅢ (3 sounds)`, `ㅡ sound`, `intonation`, `spacing`, `vs`). They show untranslated in es-ko, and `SAY` is keyed by them. | `target/ko/cards.jsonl` ko.c0044–c0060, c0326 | Outside the trainers. Renaming the fronts would orphan en-ko progress keys (`deck\|ko`) and `SAY`. Propose a native `front` override field in HALVES-SPEC, used for display only. |
| B11 | `setI18n` drops `COURSE.UI` when the native language has no i18n pack (ceb, tl), contrary to HALVES-SPEC §8.2. | ≈1228 | WP0b. |
| B12 | The card back draws `strokeSVG(c[0])` with its English `↻ stroke order` button in every course (not a key, so never translated). es-ko jamo cards show it today. | ≈1503 / `strokeSVG` ≈647 | `TR('strokes.replay')`, falling back to no button (WP0b). |

---

## Appendix · Native-side volume per new learner language

Counted with the halves word counter (`lib.words`, Latin-letter words) over the draft. Keys, `_*` notes and alternates are excluded.

| Section | Words |
|---|---|
| hangul (101 glosses + UI) | 152 |
| onboard | 28 |
| gloss (PART/ENDS/QW/CONN/COUNT + 15 templates) | 205 |
| build (18 sentences + UI) | 95 |
| numbers | 37 |
| sound (rule glosses, new text, + prompt) | 67 |
| register | 17 |
| conj | 30 |
| quiz, koui, strokes | 32 |
| **trainer.json total** | **663** (328 strings) |
| Korean-specific `ui.json` overrides (14 static strings, the draft's `ui` group; es already overrides 2 of them) | 86 |
| **Per new language** | **≈750 words** (663 + 86), plus the alternates/input table (authored, not translated; usually under 20 entries) |

---

## Done (2026-11-23): WP0a, WP0b, WP0c, WP0d, WP1 and the live bugs

`src/app.html` sha256 `abc284e5db93332b…` (exported into `target/ko/course.json`). All of the following pass on that build: `node tools/tests/trainers-golden.js` (en-ko recording **identical**), `node harness.js` (100 guards), `node tools/tests/esko.js`, `node tools/tests/kograde.js`, `node tools/tests/voicetest.js`, `node tools/site/lazy.js`, `node tools/halves/selftest.js`, `node tools/halves/proof.js` (0 raw / 0 runtime-path differences), `node tools/halves/validate.js en ko` and `es ko` (0 errors).

### What is built

**WP0a: golden.** `tools/tests/trainers-golden.js` and `tools/tests/golden/en-ko-trainers.json` (39 sections, about 1.15 MB), recorded on the untouched build. They hold:
* the per-deck predicates over all 43 decks and `dialogDeck` for every dialogue key;
* `answersFor` for all 101 words, `hangulItem` ×200 at each level, and `MEAN`;
* the renderers type / pick (×50 at each of 3 levels, with correct, alternate, wrong and empty submissions), register, sound, listen, role, numbers, build (×50), say, and stale modes;
* `renderQuizQ` "why" and `renderReviewQ` for every deck, `buildQuiz`, and card backs (every jamo card, plus the first card of each deck and every dialogue card);
* `buildSentences`, `breakdown`, `breakdownHTML`, `dialogVocab`, `cjHTML` over 42 inputs, and `renderGrammar`;
* `numItem` ×200, `sino` / `native`, the sound pool, `pronNote` / `romanize` over all cards, and `pronounce`;
* `toast()` and `koTips` titles for every `KOUI` word;
* `sessSize` + `planSession` for 7 learner states, `weekDeck`, `QUICK.read`, `TOUR[3]`, the `#hModes` visibility, the nav and read-tab chrome, the global-search drill and action lists, each onboarding answer's effect, the today tiles and `qSel` at boot.

Seeded mulberry32 per item, frozen clock (2026-11-20 10:00 UTC), en-US, fresh storage, speech stubbed. Run it twice and it gives the same result; a one-token mutation (ㅜ loses `oo`) turns it red. `--record` re-records it (WP7 and WP8 only, with the diff reviewed). `GOLDEN_SRC=<html>` runs it against another build.

**WP0b: engine foundation (`src/app.html`).**
* Helpers after `CF`: `ROLES_EN`, `KINDS_EN`, `TR(path)`, `TRF(path, …slots)`, `ROLE(r)`, `roleList(r)`, `KIND(k, deck)` (memoised per `KINDS` object), `TRAINER_WIRED`, `READY`, `CF(f)` (flag ∧ readiness for Korean targets; non-built-in courses only get wired features) and `modeOk(mode)`.
* `trainerEn()` (before `courseRT`) builds the en `TRAINER`:
  * by reference: `MEAN`, `PART` / `ENDS` (as maps), `QW`, `CONN`, `COUNT`, `BUILD_EN`, and `KOUI` glosses;
  * literals: everything else, equal to the draft.
* `registerCourses()` attaches `ROLES` / `KINDS` / `TRAINER` to `COURSES['en-ko']`.
* All 15 deck-name sites now read `ROLE` / `roleList` / `KIND`. `qSel`'s top-level initialiser uses the constant `ROLES_EN.survival`, because it runs before `registerCourses`.
* Mode gating goes through `modeOk`:
  * `#hModes` chips, `QUICK.read` (items now carry their mode as `x[2]`), the global-search drill list and `sessSize`;
  * the `renderHangulQ` dispatch (falls back to type), and `resetCourseRuntime` (a stale or unavailable mode resets to `hangul.defaultMode` or `type`);
  * the breakdown button and "Words from dialogues" use `modeOk('build')`.
* Jamo tables:
  * `V` lost its English tails (`uh`, `u`, `yuh`, `oo`, `ee`);
  * `hangulTables()` rebuilds `[canonical, …neutral, …native]` per `TRAINER.hangul.alt` (memoised per alt object), and `decompose` reads it;
  * the `'sh'` push comes from `alt.sh`;
  * `hangulCands(raw)` is the input normaliser (lower case, `map`, `fold`, `[a-z]`, plus one candidate from the `rewrite` rules).
* `setI18n()` / `i18nDict()` use a non-empty `COURSE.UI` even when the native language has no interface pack (B11).
* Tooltips: `kouiTip(k)` = `romanize(k) + ' · ' + TRAINER.koui[k]`, used by both `koTips` and `toast()` (B5). Courses without `TRAINER.koui`, such as ko-en and en-xx, no longer get English tooltips.
* `strokeSVG(ch, lbl)` takes the button label; the card back passes `TR('strokes.replay')`, and with no label it draws no button (B12). The 1-argument output is unchanged (lesson tokens, proof).
* The quiz "why" line shows on `KINDS.grammar` decks with `TRF('quiz.why')` / `TR('quiz.rule')`.
* `buildSentences`' 18 extra pairs moved verbatim into `const BUILD_EN` (pure move).
* `harness.js` gained the guards `trainerTables` and `noFallback`.

**WP1: Hangul drill + onboarding.**
* `renderHangulPick` and `renderHangulQ` read the prompt, placeholder, aria-label, level word, empty hint and meaning from `TRAINER.hangul`. The input carries `lang=COURSE.native` and `inputmode="latin"` unless `defaultMode` is `pick`.
* `renderOnboard` reads `TRAINER.onboard`; the started toast is `TRF('onboard.started', deck)`; "Yes, fluently" marks `ROLE('hangulVowels')` / `ROLE('hangulConsonants')` as known.

**WP0c / WP0d: halves.**
* `export_ko.js` now also writes:
  * `target/ko/course.json` `roles` / `kinds` / `build` (ids `ko.b01`… reused by Korean text);
  * the mirror `target/ko/trainer.json` (adds `jamo` tables and `uiKeys` to the plan's list);
  * `native/en/ko/trainer.json` from the live `TRAINER`, carrying the draft's `_src` / `_new` notes. It is identical in content to the draft minus `_meta` / `_engineNeutral` / `ui`.
  * Running it twice is a no-op, and no other half file changed.
* `assemble.js`:
  * emits `ROLES` / `KINDS` (labels) and `TRAINER` (`_` keys and `ui` dropped, `build.extra` filtered to target `build[]`);
  * computes `features` from `readiness()` ∧ `WIRED` (exported).
* `validate.js` adds the trainer checks of HALVES-SPEC §10.3, including a syllable-level collision rule the plan's same-slot rule could not express (ㅈ `y`). Trainer and `uiKeys` words count in "words remaining". An absent `trainer.json` or section is a warning.
* `proof.js` compares `TRAINER` / `ROLES` / `KINDS`, the mirror against the live engine, and the `CF` / `modeOk` gates of the assembled pack against the built-in.
* `selftest.js` adds 8 trainer breakage cases and one proof case.
* `docs/HALVES-SPEC.md` v1.1 §10 documents all of it.

**Spanish (`tools/halves/native/es/ko/`).**
* `trainer.json` holds the sections `hangul` (101 meanings, `ui`, `alt`), `onboard`, `quiz`, `koui` and `strokes`.
* `ui.json` gained 12 overrides: the read-tab panel ×2, the `(han)` line, "Hangul drill", the grammar search and 7 romanisation strings. With these, all 14 `uiKeys` are covered.
* The pack is reassembled into `packs/course-es-ko.js` with `features` `script`, `pron` and `strokes`.
* Alternates, **pending es-reviewer confirmation** (plan §3.2):
  * `V`: ㅘ `ua`, ㅝ `uo`, ㅙ / ㅞ / ㅚ `ue`;
  * `sh`;
  * `input`: `fold`, `ñ→ny`, rewrites `qu(?=[ei])→k`, `gu(?=[ei])→g`, `c(?=[aou])→k`.

**Live bugs.** Each was reproduced on the pre-change build and is now fixed:
* B4: es-ko offered «Vocales del hangul», «Partículas», «Números» … as "where" answers.
* B5: `수고했어요` showed the tooltip "sugohaesseoyo · good work"; it is now «… · buen trabajo».
* B12: the "↻ stroke order" button is now «↻ orden de trazos».
* B11: setI18n dropped `COURSE.UI` without an interface pack.

`tools/tests/esko.js` covers all four on the real pack (B11 with a `tl` fixture). It also covers E11–E13 and the Hangul drill H0–H13: 서울 `seoul` ✓ / `soul` ✗, 과 `gwa` / `gua` ✓, 게 `ge` / `gue` ✓, 서 `so` ✗, 서 `suh` ✗, `sé` folded, 김치 `quimchi` ✓ and 뇨 `ño` ✓. Every screen is scanned with the script on. Screenshots: `review/trainers/es-ko-hangul-drill-390*.png`.

### What WP2–WP8 can rely on

* **One switch per feature, in two places.** To ship a trainer for packs, route its renderer through `TR` / `TRF`, then set the feature to 1 in `TRAINER_WIRED` (app) and to true in `WIRED` (`assemble.js`). WP6 does the same with `TRAINER_WIRED.build`. Until then a pack never runs it, whatever its flags or data say.
* **The en data is already there.** `COURSES['en-ko'].TRAINER` has every section with the draft's exact strings: `numbers`, `sound` (`showGloss:false`), `register`, `conj`, `gloss.tpl`, `build.ui` and `quiz.rule`. The packages change **readers only**, so the golden must stay identical. `native/en/ko/trainer.json` is regenerated by `export_ko.js`, never hand-edited.
* **Spanish.** Add your section to `native/es/ko/trainer.json` directly (sections are disjoint, so there is no merge), run `validate.js es ko` (key parity, slots and Hangul are enforced per section), then the lead reassembles. The readiness rule for each section is in `assemble.js` `readiness()` and in app `READY`.
* **Tests.** The `trainerTests()` pattern in `esko.js` gives a fresh context per scenario on the real pack, a `visText` scan and a `leaks(text, allow)` filter. Add your scenarios there, or in your own `esko-<name>.js` copying that block. Then run the golden.
* **Line ownership.** WP0b already rewrote every mixed line the plan assigns to it. WP5 owns `cjHTML` and the conjugator half of the `renderGrammar` line; the "Words from dialogues" gate on that line is now `modeOk('build')`. WP6 owns `PART` … `isPastSyl`, `breakdown` / `breakdownHTML`, `buildSentences` (it reads `BUILD_EN`; switch it to `TR('build.extra')`), `renderBuildQ` and `dialogVocab`.
* **WP7 / WP8** re-record the golden with `--record` and review the diff.

### Deviations from the plan

* The tests extend `tools/tests/esko.js` (as requested) instead of adding `esko-lib.js` / `esko-hangul.js`.
* `mk_native.js` is **unchanged**: there is no `wT.jsonl` split, because the ceb writers are mid-flight on the current split. Non-English `trainer.json` files are written directly.
* Gating with `TRAINER_WIRED` / `WIRED` is new. Without it, a pack with data for an unwired trainer would show its English literals, which breaks requirement 2.
* The es half also carries `quiz`, `koui` and `strokes`. They are small, and without them the B5 / B12 fixes would show nothing, and the grammar-deck "why" line (now matched by `KINDS`) would be missing.
* `trainer.draft.json` is kept as a historical reference. `trainer.json` is authoritative, and the draft can be deleted.
* The mirror adds `jamo` (needed by the alternate rules and the 400-cap check) and `uiKeys`.
* WP0b and WP1 went in as **one** assertion-guarded edit pass (`src/app.html`), so the golden was compared after that pass, not between the two stages. It was compared again after every later change.
* The deck-name sites changed for every course, not only Korean ones. A scan of all 44 other packs found no deck or group named like the old regexes and literals (Survival phrases, Everyday / Social, Particles …, Hangul… / Pronunciation…), so their behaviour is unchanged.

### Left open

* WP2–WP8 (since done except WP8: see the next section).
* es-reviewer confirmation of the alternates and of the 101 meanings. 영어 is «inglés» by meaning; the esko scans allow that word only as card or drill content.
* The `trainer.json` split in `mk_native.js`.
* B9 (en ㅓ `u`) and B10 (English fronts in the target half), as planned.
* es `trainer.json` has 455 words remaining (the unwired sections).
* `validate.js` counts the 663 trainer words and the 86 `uiKeys` words as remaining for any half without them, ceb included. A read-only run on ceb shows the trainer checks add only a warning.
* Two es-ko notes now that `script` is on:
  * Existing learners who went through the generic onboarding have no `read` answer. `canRead` withholds their reading and listening session items until lesson 1 is done or 8 consonants are learned, as for en-ko.
  * `TOUR[3]` (a translated key) still names the numbers and polite↔casual drills, which es-ko gets only with WP2 / WP4.


## Done (2026-11-23): WP2–WP6, the WP7 remainder, and the foundation leftovers

All five trainers run for packs. `src/app.html` `TRAINER_WIRED` and `assemble.js` `WIRED` now list every feature (`build` is a mode, not a flag: `modeOk('build')` needs `script` + `READY.build`). On the final build: `node tools/tests/trainers-golden.js` **identical** after every package (never re-recorded), `node tools/halves/proof.js` 0 / 0, `validate.js es ko` and `en ko` 0 errors, `./build.sh` verify_build OK, harness 100 guards, `esko.js` (100 checks), `kograde.js`, `voicetest.js`, `flagcheck.js`, `site/lazy.js`, `halves/selftest.js` (36 cases). es-ko ships `features` script, pron, conj, register, numbers, sound, strokes, plus the Build drill.

### Engine (`src/app.html`)
* Helpers next to `TRF`: `trHas(path, keys)` (a section has a non-empty string for every key) and `trH(s)` (trainer text into HTML; escapes `&` and `<` only, so en-ko output is byte-identical).
* `READY` is as strict as `assemble.js readiness()`: numbers = 7 hints + 6 counters + ui; sound = `ui.prompt` and, when `showGloss`, all 11 rule glosses; register = 4 strings + ≥ 4 pairs; conj = 9 labels + 4 irregular tags + 6 ui strings; new `READY.build` = every `PART` / `ENDS` / `QW` / `CONN` / `COUNT` key, the 15 templates, `build.ui` and `build.extra` (memoised per gloss object).
* **WP2 numbers:** `numItem` hints `TRF('numbers.hint.<kind>')`, the counter label from `TRAINER.numbers.counter` (same `Math.random` use: one pick over the same 6 counters); `renderNumberQ` prompt `TRF('numbers.ui.prompt', hint)` and placeholder.
* **WP3 sound:** new `soundRule(name)` (rule name + ` · ` + gloss when `TRAINER.sound.showGloss`; keys with `%1` such as `받침 → %1` are matched as patterns). `renderSoundQ` prompt and feedback, and the `pronNote` tooltip use it; the card note itself keeps the Korean names. en-ko has `showGloss:false`, so nothing changes there.
* **WP4 register:** `renderRegisterQ` prompt and feedback from `TRAINER.register`. The Practice button, run header and result title are interface keys (es overrides in `ui.json`, below).
* **WP5 conjugator:** `cjHTML` labels, irregular tags (`TRAINER.conj.irregular` maps the engine tag) and the empty hint; `renderGrammar` draws the conjugator panel only when `CF('conj')`, with title, placeholder, button and try line from `TRAINER.conj.ui`.
* **WP6 breakdown + Build:** new `breakdownTok(sentence)` returns `{w, k (kind), b (dictionary base, null = not listed), r (gloss)}`; matching still uses the engine tables, the text comes from `TRAINER.gloss` templates. `breakdown()` keeps its `[word, gloss]` shape (the golden records it). `breakdownHTML` marks `.bd` `data-noi18n` on packs. `dialogVocab` reads `k` / `b` and no longer parses gloss text (B3; the en-ko list is unchanged). `buildSentences` takes the extra sentences from `TRAINER.build.extra`; `renderBuildQ` prompt / Answer / Not quite from `TRAINER.build.ui`. The dialogue block's `🔊 dialogue` and `🔍 break it down` buttons go through `i18nT` (they sit inside `.dlg`, which the DOM translator skips).
* **Tour leftover:** `applyCourseUi` gives a pack the full read-tab tour text only when it has build, numbers and register; otherwise the text that names only the drills every course has.
* **WP7 remainder:** `koRespell()` already covered ㄴ-insertion (스물여덟, 꽃잎, 색연필, 한여름, 십육), 맛없/멋없 and 밟-. What remained: `pronounce` tensed ㅎ / ㄶ / ㅀ + ㅅ unconditionally, so `romanize('괜찮습니다')` gave `gwaenchansseumnida`. New 4th argument `rr` (romanisation mode) keeps ㅅ; only `romanize` passes it, so `pronNote` and the sound drill still say [괜찬씀니다]. No card front contains the pattern, so the golden did not change (`kograde.js` checks 괜찮습니다 / 좋습니다 / 괜찮아요 and that `pronounce` keeps the tensing).

### Halves
* `assemble.js`: `WIRED` all true.
* `mk_native.js`: `native/en/ko/trainer.json` is flattened into its own work file `work/wT.jsonl` (`{"f":"trainer","id":"gloss.CONN.그래서","src","tgt"}`; skips `_` notes, `hangul.alt`, `hangul.defaultMode` and booleans; strings without Latin letters are prefilled), with a README section. `--merge` nests the filled rows into `trainer.json` (sets `sound.showGloss: true`), and leaves an existing `trainer.json` alone when no row is filled. Not run for es or ceb.
* `selftest.js`: 9 new breakage cases (counter dropped, `%1` lost in a sound rule, `showGloss` not boolean, 요 dropped from a register line, irregular tag altered, braces in a template, HTML in a label, unknown Build sentence, emptied COUNT gloss) and a `wT.jsonl` round-trip case.

### Spanish (`tools/halves/native/es/ko/`)
* `trainer.json` gained `numbers`, `sound` (`showGloss: true`), `register`, `conj`, `gloss` and `build` (≈450 words). 11 of 11 sections complete; the 9 "words remaining" are strings equal to the English (*formal*, *no*, *irregular: %1*).
* `ui.json` gained 8 overrides, because the dictionary says *formal ↔ informal* and the course glossary says polite = *cortés*: `🎚️ Polite ↔ casual`, `🎚️ Polite↔casual`, `Polite ↔ casual`, `polite↔casual`, `🎚️ Polite ↔ casual drill · 10`, `Polite ↔ casual · passed`, `Polite ↔ casual · 80% to pass`, and the read-tab tour line (which also adds *cambios de sonido*).

### Tests
* `esko.js`: H1 now expects exactly the drills the pack has data for; E12 runs on a clone without `sound` / `numbers`; `DRILL_EN` lists the trainers' English literals; `page()` reloads when Chromium sniffs the charset-less file:// build as windows-1252 (a pre-existing flake). New `drillTests`: N1–N7 numbers, S1–S8 sound (S4b: a `%1` rule key), R1–R9 register (incl. the 10-item Practice run to its result line), C1–C7 conjugator, G1–G11 breakdown / Build / Words from dialogues, T1–T3 tour. Each checks Spanish prompts and feedback, a right answer accepted and a wrong one rejected, no English on screen, and a clone with that section removed shows no trainer. Screenshots (390 px): `review-shots/es-ko-{numbers,sound,register,conjugator,build,breakdown}-390.png`.

### Left open
* **WP8** (phrase-level `pronounce`, tensing after -ㄹ modifiers, ㄴ-insertion before 요, station names such as 강남역 in `romanize`): needs native-speaker review. `soundSafe()` keeps such phrases out of the **drill pool** only. The card-back `pronNote` (now on in es-ko: 214 of 641 cards show one) calls `pronounce()` per word without `koRespell`, tensing or that filter, so es-ko card backs show the same known-wrong notes as en-ko (e.g. 잘 먹겠습니다 without 경음화). Fixing it re-records the golden.
* `export_ko.js` was not re-run (it rewrites files the content agent regenerates), so `target/ko/course.json` `exportedFrom` still names the previous `src/app.html` hash; run it after the merge.
* The built file has no `<meta charset>`; Chromium now and then reads a file:// load as windows-1252 (`Invalid regular expression … Range out of order`). Only esko's `page()` reloads on it; in other Playwright tests that error means rerun, not regression.
* es-reviewer pass over the new Spanish (numbers hints, rule explanations, breakdown labels, Build glosses).
* The run header `Register · {n}/10` is an interface pattern (es: *Registro*); `UI` overrides only exact strings.
* Found, not fixed (content, outside the trainers): target patterns `ko.p034` ("Sino numbers") and "native numbers + counter" have English in their Korean field (they show in the es-ko grammar index and search); `buildSentences` keeps card fronts such as `아버님 / 어머님`, so `/` becomes a Build tile (en-ko too; fixing it changes the golden); the grammar search replaces the first `.gidx`, which is the Words-from-dialogues list when that panel shows (en-ko too).
