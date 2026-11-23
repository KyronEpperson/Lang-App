# Cebuano (ceb) interface dictionary: notes

Files: `ui.json` (784 exact keys, 274 pattern templates), `roadmap.json` (40 Korean-roadmap titles and, since 2026-11-23, the 39 English-roadmap titles filled; the rest empty so they fall back to English), generated pack `packs/i18n-ceb.js`.
Build: `python3 tools/i18n/gen.py ceb && node tools/i18n/validate.js ceb` (PASS; 2 warning classes, the same classes as `es`: 18 labels that may overflow, 48 strings identical to English because they are kept loanwords or grammar terms).

This interface serves **two courses**: **ceb-ko** (Korean for Cebuano speakers, the first one) and, since 2026-11-23, **ceb-en** (English for Cebuano speakers). Every key that says Korean, Hangul or romanization is translated **literally for Korean**: *Koreano*, *Hangul*, *romanization*, with all Hangul and 🇰🇷 kept, because ceb-ko is live and shows them. The es and id dictionaries rewrote these keys for English, so they were not used as models. The generic "English" keys are translated literally too (*Iningles*, *paglitok*); these are the ones ceb-en shows. A Korean-worded key that ceb-en can reach needs a per-course override (`COURSE.UI`), see §6.

Author: not a native speaker. Everything here needs the Bisaya-speaking friend's check (§4).

## 1. Register and spelling

- Everyday Cebu City Cebuano as an educated speaker writes it in apps. Informal *ka / nimo / imong*; no *po*, no Tagalog.
- House spelling from `docs/profiles/en-ceb.md` §2.2:
  - *og* is the object marker, *ug* means "and";
  - *mo-* / *ni-* prefixes;
  - *kon*, not *kung*;
  - *gyud*;
  - no apostrophes and no accent marks.
  - Root vowels kept in affixed forms (KWF §7.5): *kahulogan, panumdoman, nahinumdoman, Pindota*, *puwede*, past *ni-* (*niingon, niaging*).
  - What the build linter checks automatically: Hangul, emoji and digits equal to the key; fragment edge punctuation; no apostrophes or accents; none of *kung, po, hindi, ng, mu-*. It does **not** check *og / ug*, *ni- / mi-*, root vowels or loan spelling; those were audited by hand (word list grep).
  - Known open class: *katapusan / katapusang* (root *tapos*) is written as commonly printed, as ceb-ko.md §3.3 also flags.
- Commands use the plain Cebuano form (*Pilia, Ablihi, Tangtanga, Sulayi, Kopyaha, Paminawa*). English verbs take the *i-* prefix the way Cebuanos write them (*i-tap, i-save, i-share, i-type, i-delete, i-review*).
- Counts use *ka* (`{1} ka card`), which reads correctly at 1 and at 2+, so singular and plural templates share one text.
- Grammar terms follow the closed English list in `docs/profiles/ceb-ko.md` §3.4: *verb, noun, stem, dictionary form, ending, particle, counter, question word, polite, casual, honorific, 요-form, romanization, block, vowel, consonant, final, sound change, past, present*.
- **English course (ceb-en) grammar terms**, the closed list of `docs/profiles/ceb.md` §3. They are written in English, lower-case, never respelled, with Cebuano markers and no Cebuano affixes (*ang verb, sa plural, og article, mga noun*); they are known loanwords for the linter, like the Korean-course list above:
  - *article* (article "a / an", article "the", walay article), *noun, countable noun, uncountable noun, singular, plural, plural -s, pronoun, subject pronoun, object pronoun, possessive, subject, object*;
  - *verb, be verb, helping verb, modal, base form, past form, past participle, -s sa verb, subject-verb agreement, regular verb, irregular verb, -ing form*;
  - *tense, simple present tense, present progressive, simple past tense, past progressive, present perfect, present perfect progressive, past perfect, aspect, time word*;
  - *passive voice, active voice, conditional* (first, second, third), *relative clause, reported speech, direct speech*;
  - *preposition, conjunction, adjective, adverb, comparative, superlative, question word, statement, negative, question, sentence, word order, contraction, phrasal verb, particle* (phrasal-verb lesson only), *idiom, IPA, stress, syllable, vowel, consonant*.
  - Cebuano words used as terms in that course: *paglitok* (pronunciation), *kahulogan* (meaning), *pananglitan* (example), *pulong* (word), *blangko* (blank), *lit-ag* (trap, false friend), *sakto / sayop*.
  - Not used: *artikulo, pantukoy, pangngalan, pandiwa, berbo, panghalip, pang-ukol, pang-uri, auxiliary, present simple, present continuous, future tense, V1 / V2 / V3, gerund, romanization* (the IPA line is «ang paglitok»), *panultihon* for idiom, *husto, tama*.

## 2. Loanwords kept in English (closed list)

Tech and app terms:
- app, account, email, Sign in / Sign out (*mo-sign in*), sync (*i-sync*), backup, export / import (*i-export / i-import*), CSV, PNG, file, link, code, password, browser, device, storage, site data, online / offline, admin, Developer, bug, Feedback, Privacy, Analytics, ads, cookies, page view, settings, tour, preview, view, screen, keyboard, arrow key, Enter, Esc, Ctrl+K.

Learning terms:
- card / flashcard (*mga card*), deck, quiz, exam, test, drill, blitz, round, Review (tab and verb *i-review*), streak, streak shield, Level / Lv, XP, combo, personal best, badge, hint, score, interval, leech, suspend (*i-suspend*), session, mode names *role-play*, *dictation*, *Register*, *recap card*, *spaced repetition*, *tiles*, *item*, *row*, *pattern*, *index*, *conjugator*, *irregular*, *grammar*, *phrase* (*Akong mga phrase*).

Product name: Lang App. Code words: DELETE (never translated; the engine compares the typed text).

Real Cebuano is used for ordinary words, for example:
- Karon, Leksyon, Praktis, Pag-uswag, Basa (tabs);
- kahulogan (meaning), nota (note), pananglitan (example);
- pulong (word), tingog (voice, sound), katulin (speed);
- kahon (SRS box), tumong (goal), pahinumdom (reminder);
- angga (nickname), kolor (accent colour), sertipiko;
- hinay / paspas (slow / fast);
- Sakto! / Dili pa sakto. (Correct! / Not quite.);
- Usab (again), Kabalo ko (Got it), Balika (retry);
- Laktaw (skip), Itago / Ipakita (hide / show), Sirad-i (close), Kanselahon (cancel).

**Merge vs mix:** *Isagol / Sinagol / Sagol* are shuffle, mix and mixed; *Iusa / Naiusa* (make one) are merge. **Trap avoided:** *Usba* means "change / edit" (used for *edit note*). It is never used for "again" or "retry": those are *Usab* and *Balika*.

## 3. Tab names (5-tab bar + extras)

| English | Cebuano | chars | es |
|---|---|---|---|
| Today | **Karon** | 5 | Hoy |
| Lessons | **Leksyon** | 7 | Lecciones |
| Practice | **Praktis** | 7 | Práctica |
| Review | **Review** | 6 | Repaso |
| Progress | **Pag-uswag** | 9 (over the 8 cap; see below) | Progreso |
| Read (advanced, script courses) | Basa | 4 | Leer |
| Drills (same tab in courses without a script, e.g. ceb-en) | **Drill** | 5 | |
| Feedback | Feedback | 8 | Opinión |

In-text references use the same names, for example *Pag-uswag → Backup → I-share ang file*. On 2026-11-23 only *Mga drill* (9) → **Drill** (5) was shortened for the 8-character cap of the seven-label bar (`docs/profiles/ceb.md` §10). *Pag-uswag* (9) is still over the cap: the proposed *Uswag* (5) was not applied, because the live ceb-ko lesson prose names the tab *Pag-uswag*; the rename belongs to the main build, in one pass with that prose.

## 4. 30 strings to check first (for the Bisaya-speaking friend)

Answer "OK" or write the natural version.

| # | English key | Cebuano now | Doubt |
|---|---|---|---|
| 1 | Korean (language name everywhere) | Koreano | The ceb-ko profile §3.1 uses *Korean* for the language and *Koreano* for a person. Is *Koreano* natural for the language? Or *Kinoreano*, or plain *Korean*? One sed pass changes it. |
| 2 | Today (tab) | Karon | Is *Karon* clear as a tab name, or is *Karong adlawa* needed despite its length? |
| 3 | Review (tab) | Review | English kept. Would *Balik-tuon* or *Rebyu* be better? |
| 4 | Progress (tab) | Pag-uswag | Natural for "your stats / progress"? Or *Progreso*? |
| 5 | Lessons (tab) | Leksyon | Singular as a tab name (the plural *Mga leksyon* is long). OK? |
| 6 | Got it (SRS button) | Kabalo ko | *Kabalo* is colloquial; *Kahibalo ko* is more standard. Or *Nakuha nako*? |
| 7 | Again (SRS button) | Usab | Does *Usab* alone work as a button? Or *Balik pa*? |
| 8 | Due (filter chip) / {n} due | Para karon / {n} i-review | Natural for "cards waiting for review"? |
| 9 | My phrases | Akong mga phrase | Is *phrase* OK, or *Akong mga pulong*? |
| 10 | Read 한→en / Recall en→한 | Basa 한→ceb / Hinumdom ceb→한 | Is "ceb" understood as the Bisaya side? Would "Bis" be better? |
| 11 | native (audio speed) | paspas | This means "fast". Is there a short word for "native-speaker speed"? |
| 12 | Weak spots | Huyang nga bahin | Natural? |
| 13 | Streak at risk | Peligro ang streak | Or *Hapit maputol ang streak*? |
| 14 | A missed day won't break your streak | kon makalaktaw ka og usa ka adlaw | Natural for "if you skip a day"? |
| 15 | Mastered (box 6) | hanas na | Or *kabisado na*, *batid na*? (*kahanas* is kept for the noun "mastery".) |
| 16 | Learning (box state) | gitun-an | Correct form for "being learned"? |
| 17 | Bury / Buried until tomorrow | ⏭ ilubong / Gilubong hangtod ugma | A literal "bury" (Anki term). Too strange? *Ilain sa ugma*? |
| 18 | Play / plays the pronunciation | Patokara / motokar sa paglitok | Is *tokar* right for playing audio, or only for music? Or *Paminawa*? |
| 19 | Flip (card) | balihon / Baliha | Right verb for turning a card over? |
| 20 | Talker (level title) | Tig-istorya | Natural? Other titles: *Turok* (Sprout), *Estudyante*, *Hawod* (Senior), *Agalon* (Master), *Biyahero*, *Lokal*, *Nagsugod*. |
| 21 | Idiom / 사자성어 | Panultihon | *Panultihon* is closer to "saying / proverb". OK for idiom? |
| 22 | Nickname | Angga | Do people use *angga* for an app nickname, or say "nickname"? |
| 23 | Cancel | Kanselahon | Or *I-cancel*? |
| 24 | Polite ↔ casual (drill) | Polite ↔ casual nga drill | Profile terms are English. Readable? |
| 25 | Goal done. Keep going? | Naabot na ang tumong. Padayon pa? | Natural? |
| 26 | You've got this! / You're doing great | Kaya nimo kini! / Maayo kaayo ka | Natural encouragement in Bisaya? |
| 27 | Welcome to Lang App | Maayong pag-abot sa Lang App | OK in an app, or too formal? |
| 28 | That email address doesn't look right. | Murag dili sakto kana nga email address. | Natural? |
| 29 | Sign-in code / Sign in to sync | Code sa pag-sign in / Mo-sign in aron mo-sync | Too much English? |
| 30 | Something went wrong: | Naay sayop: | Or *Naay problema:*? |

Also worth a glance: *Iusa* (Merge in; or *I-merge*?), *hanas na* (mastered), *Sirad-i* (close), *Tan-awa* (Browse), *Huyang*, *Pun-a ang blangko* (Fill the gap), *Han-aya ang mga pulong* (Put the words in order), *Sugod sa Koreano* (Korean starter), *I-delete na gyud* (Delete forever).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `setI18n()` loads `LANGAPP_PACKS.i18n.ceb` for any native code.
- `gen.py` writes `LANGAPP_PACKS.i18n.ceb`.
- `validate.js` accepts `[a-z]{2,3}`.
- The course id regexes are `[a-z]{2,3}-[a-z]{2,4}`.
- `hLang('ceb')` gives `ceb`, a valid BCP-47 tag.
- `ceb` is not in `RTL_LANGS`, which is correct.
- `liveNatives()` lists `ceb` in step 1 of the picker as soon as a course with `native:'ceb'` is in the manifest or in COURSES.
- `ENGINE_I18N` has only `ko`, so nothing is missing for ceb there.

**Must change:**

1. **`tools/i18n/road.py` is broken for every language.**
   - Its `strings()` passes all of roadmaps.js through `node -e`, which fails with `OSError: [Errno 7] Argument list too long`. Fix: write the code to a temp .js file, or `require()` the file.
   - Its `__main__` asserts `re.fullmatch(r'[a-z]{2}', lang)`. Fix: `r'[a-z]{2,3}'`.
   - I wrote `ceb/roadmap.json` directly in road.py's output shape, so `gen.py` emits the `road` map (40 titles).
2. **Language names.** `langName(code,'ceb')` uses `Intl.DisplayNames(['ceb'])`. ICU has almost no Cebuano names, so it returns "Korean" and "English" in English but "Espanyol" in Spanish. That leaks English into `type it in {x}`, `Learn {x}, 5 minutes a day` and the course lists. Suggested fix: a per-language override map checked before Intl, for example `LANG_NAMES={ceb:{...}}`, using the table below. keys.json has no language-name keys, so this cannot go through ui.json without a pipeline change.
3. **`LANGS.ceb.self`** is `'Cebuano'`. Speakers call the language *Binisaya* or *Bisaya*. Suggest `self:'Binisaya'`, or `'Cebuano (Bisaya)'` if the English name must stay recognisable.
4. **`preLang()`** (app.html line ~1136) uses `navigator.language.slice(0,2)`. A `ceb` browser locale becomes `ce` and is never matched. Fix: `String(navigator.language||'').toLowerCase().split(/[-_]/)[0]`. Low impact, because most Philippine devices report `en-PH` or `fil-PH`.
5. **`build.sh` site loader** (the `loader=` string, line 36) does `String((m&&m.native)||navigator.language||'').slice(0,2)`. Same bug: a returning ceb user without a picked course gets no early i18n preload. Same fix (`.split(/[-_]/)[0]`).
6. **`tools/site/lazy.js` lines 66 and 68** use `id.slice(0,2)` as the native code (`data-native="ce"`, `r.ui===r.id.slice(0,2)`). Test T9 will time out or fail for `ceb-ko`. Fix: `id.split('-')[0]` in both places.
7. **`harness.js:268`** `loc.slice(0,2)` is fine for its fixed locale list. No change needed.

**Tell the halves agent:**
- **`docs/profiles/ceb-ko.md` §3.5** (it says "no Cebuano interface pack; name tabs in English as on screen") is now out of date. The tabs on screen are **Karon, Leksyon, Praktis, Review, Pag-uswag**, so lesson prose in `tools/halves/native/ceb/ko/` that says "Today / Lessons / Practice / Progress" should use these names. Other button names the prose may cite are *Kabalo ko* (Got it), *Usab* (Again), *I-check* (Check), *Tan-awa* (Browse) and *Akong mga phrase* (My phrases).

**Course UI overrides.** `tools/halves/native/ceb/ko/ui.json` exists and is empty `{}`. Whatever goes there becomes `COURSE.UI` and overrides this pack key by key in `setI18n()`, so keep the two consistent; prefer fixing wording here. The halves lesson titles (`work/w*.jsonl`, `k: title`) are still empty. Once written, compare them with the 40 roadmap titles in `roadmap.json` (different strings: the roadmap is the plan preview, but the wording should match).

**Pipeline notes.** `new_lang.py` uses `ko/ui.json` as its reference column (it accepts 3-letter codes). The inline single-file build (`korean-flashcards.html`) will also include the new pack, about 74 KB.

**Roadmaps.** Only the `ko` roadmap (40 strings) is translated. The 1,782 strings of the other roadmaps (shown in "Coming soon" previews) have empty `t` and fall back to English through `rmT`, which the pipeline allows.

### Language names in Cebuano (for item 2)

The Intl result was observed in Node (full ICU): `new Intl.DisplayNames(['ceb'],{type:'language'})` gives ko → "Korean", en → "English", es → "Espanyol". Browsers may differ slightly.

**Given in the task (use):** ko Koreano · en Iningles · es Kinatsila · ja Hinapon · zh Insik (Mandarin) · tl Tinagalog · ceb Binisaya.
**Unverified candidates (from recall; friend to confirm, else use the English name):** hil Hiligaynon · war Winaray · fr Pranses · de Aleman · it Italyano · pt Portuges · ru Ruso · ar Arabiko · yue Insik (Cantonese).
**All other codes:** the English name.

## 6. Second course: ceb-en (added 2026-11-23)

**Changed in `ui.json` (2 keys, none Korean-specific, so ceb-ko shows them too):**
- `Progress` (tab) is **unchanged**: still *Pag-uswag* (9 characters, over the 8 cap). The rename to *Uswag* and the 10 strings that name the tab (the two Privacy paths, `You can add an email later in Progress.`, `Saved in this browser only. …`, `Suspended. Restore it from Progress.`, `🩹 Marked as a leech … Manage it in Progress.`, `Settings · Progress`, `This device only — … Add an email later in Progress.`, `Progress · quick actions`, `{n}/{n} · Progress`) were proposed but not applied (see the lead note below).
- `Drills` (the label of the Read tab in courses without a script) *Mga drill* → **Drill**. `{n}/{n} · Mga drill` and the canvas `MGA DRILL` are unchanged.
- `Text size` *Gidak-on sa letra* (17) → **Letra** (5); it sits beside the A− / A+ buttons.

**Left literal for Korean in this pack; ceb-en overrides them.** The override file `tools/content/ceb/ui.json` (27 keys, the wording in the right-hand column below plus `Aa romanization: on / off` → *Aa paglitok: on / off*) is emitted by `gen.js` as the ceb-en `UI`; its values were checked against the house spelling on 2026-11-23 (no change needed).

| Key | In the pack (ceb-ko) | Suggested for ceb-en |
|---|---|---|
| Korean starter | Sugod sa Koreano | Sugod sa Iningles |
| KOREAN STARTER | SUGOD SA KOREANO | SUGOD SA ININGLES |
| Korean (required) | Koreano (kinahanglan) | Iningles (kinahanglan) |
| Romanization | Romanization | Paglitok |
| Romanization (auto if blank) | Romanization (awtomatiko kon blangko) | Paglitok (awtomatiko kon blangko) |
| Korean, romanization, meaning, note — one per line (romanization/note optional) | Koreano, romanization, kahulogan, nota — … | Iningles, paglitok, kahulogan, nota — usa matag linya (opsyonal ang paglitok/nota) |
| Blur romanization in Browse | I-blur ang romanization sa Tan-awa | I-blur ang paglitok sa Tan-awa |
| Show romanization in practice | Ipakita ang romanization sa praktis | Ipakita ang paglitok sa praktis |
| Hide romanization | Itago ang romanization | Itago ang paglitok |
| Aa romanization: on / off | Aa romanization: on / off | Aa paglitok: on / off |
| Read 한→en | Basa 한→ceb | Basa en→ceb |
| Recall en→한 | Hinumdom ceb→한 | Hinumdom ceb→en |
| ⌨️ Type 한 | ⌨️ I-type ang 한 | ⌨️ I-type |
| Type the romanization. Hangul blocks stack … | I-type ang romanization. Ang Hangul nga block … | I-type ang paglitok. Ang imong level diri gamiton sab sa mga session. |
| Hangul, flashcards with audio, quizzes and a 5-minute daily session. Before you start — … | Hangul, mga flashcard … | Mga flashcard nga naay tingog, quiz ug 5 ka minuto nga session matag adlaw. Una ka magsugod — unsaon namo pagtipig ang imong pag-uswag? |
| Learning Korean 5 minutes a day with Lang App 🇰🇷 | Nagtuon og Koreano … 🇰🇷 | Nagtuon og Iningles 5 ka minuto matag adlaw sa Lang App 🇺🇸 |
| Learn Korean, 5 minutes a day | Tun-i ang Koreano, 5 ka minuto matag adlaw | Tun-i ang Iningles, 5 ka minuto matag adlaw |
| type it in Hangul | i-type kini sa Hangul | i-type kini sa Iningles |
| Type the Korean, or tap Check again to give up. | I-type ang Koreano, o i-tap usab ang I-check aron mo-give up. | I-type ang Iningles, o i-tap usab ang I-check aron mo-give up. |
| ), or type the Hangul itself. | ), o i-type mismo ang Hangul. | ), o i-type mismo ang pulong sa Iningles. |
| Hangul drill | Drill sa Hangul | Drill sa pagbasa |
| Can you already read Hangul? | Kabalo ka na mobasa og Hangul? | Kabalo ka na mobasa og Iningles? |
| What do you want Korean for? | Para asa nimo gamiton ang Koreano? | Para asa nimo gamiton ang Iningles? |
| Korean progress | Pag-uswag sa Koreano | Pag-uswag sa Iningles |
| Trip to Korea | Biyahe sa Korea | Biyahe sa gawas sa nasod |

Mixed Hangul keys that keep their Korean text and would look wrong in ceb-en if reachable: `안녕하세요 👋 Two quick questions`, `안녕하세요, {x}!`, `레벨 업! Level {n} · {s} 🎉`, `목표 달성! Daily goal reached 🎉`, `모두 열렸어요 · Everything unlocked`, `Language · 언어`, `한국어 UI (menu labels in Korean)`, `사자성어 · four-character idiom`, and the Korean-grammar tool keys (`Make it polite (요-form)`, `Make it casual (반말)`, `casual → polite: add 요 …`, `polite → casual: drop 요`, `Enter a dictionary form ending in 다.`, `dictionary form, e.g. 먹다`, `Search a pattern, e.g. 에서 or 'want'`, `Try 가다 · …`, `verb stem + 지`, `verb + 도 (even if)`, `+ 요 (polite)`, `verb · past (았/었어요)`, `don't (지 마)`, `is it okay? (-아/어도 돼요)`, `not okay? (-(으)면 안 돼요)`). The lead should grep the built ceb-en app for *Koreano, Hangul, romanization* and Hangul characters.

**Roadmap.** The 39 strings first used by the `en` roadmap are filled with the ceb.md §3 terms (*simple present tense, present progressive, past form, be verb, article, plural*). `road.py check ceb` cannot run: the script only accepts 2-letter codes (§5 item 1), and 1,743 strings of the other 61 roadmaps are still empty by design (English fallback).

**For the ceb-ko prose:** lesson text in `tools/halves/native/ceb/ko/` names the tab *Pag-uswag*, which is what the pack shows; change both together if the tab is ever renamed *Uswag*.

## Lead note (ceb-en build, 2026-11-23)

The «Pag-uswag» → «Uswag» tab rename proposed in the ceb-en profile was NOT applied: the live Cebuano → Korean lesson prose names the tab «Pag-uswag», so the rename belongs to the main build, in one pass with that prose. §3 and §6 above were corrected on 2026-11-23 to match ui.json.
