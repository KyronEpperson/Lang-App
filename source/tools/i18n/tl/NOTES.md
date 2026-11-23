# Tagalog / Filipino (tl) interface dictionary: notes

Files:
- `ui.json`: 784 exact keys and 274 pattern templates, all filled.
- `roadmap.json`: the 40 Korean-roadmap titles (tl-ko) and the 39 English-roadmap titles (tl-en, added 2026-11-23, §6) are filled. The other 1,743 strings are empty, so they fall back to English.
- The generated pack is `packs/i18n-tl.js`.

Build: `python3 tools/i18n/gen.py tl && node tools/i18n/validate.js tl`. It passes with 2 warning classes, the same two that `ceb` and `es` have:
- 20 labels that may overflow;
- 55 strings identical to English, because they are kept loanwords, grammar terms or symbols (every one of them is on the list in §2).

The only course this interface serves is **tl-ko** (Korean for Tagalog speakers). So every key that says Korean, Hangul or romanization is translated **literally for Korean**: *Koreano*, *Hangul*, *romanization*. All Hangul and 🇰🇷 are kept. The generic "English" keys are translated literally too (*Ingles*). They are only shown in an English course, which Tagalog speakers do not have. es and id rewrote these keys for English, so they were not used as models. ceb was the model for them.

Author: not a native speaker. Everything here needs a Tagalog speaker's check (§4).

## 1. Register and spelling (one decision each)

- **Variety:** everyday educated Manila Filipino as Philippine apps write it. That is Taglish: common English tech and learning words are kept, and Filipino is used for ordinary words.
- **Address:** informal *ikaw / ka / mo / iyo*, never *kayo*. This is the usual register of Philippine app copy, though no app was checked for this note [inference].
- ***po* rule:** no *po / ho / opo* anywhere in the interface, not even in requests. A request uses the plain command form, or *pakiusap* / *paki-* where English says "please" (*pakiusap, huwag mag-share…*). One rule, no exceptions.
- **Commands:** buttons and instructions use the object-focus command form, the way apps do (*Piliin, Buksan, Isara, Kopyahin, Pakinggan, Alisin, Burahin, Ulitin, Subukan ulit, Laktawan*).
  - Where the action has no object it uses *mag-* / *-um-* (*Makinig, Sumagot, Magpatuloy, Mag-type na*).
  - English verbs take *i-* or *mag-* with a hyphen: *i-tap, i-save, i-share, i-type, i-delete, i-review, i-check, i-reset, i-export, i-import, i-paste, i-play, i-swipe, i-quiz, i-unlock, i-sync / mag-sync, mag-sign in / mag-sign out*.
  - Progressive Taglish forms repeat the first syllable of the English verb: *Nagse-save…, Dine-delete…, Nagsi-sync, Naglo-load…*.
- **Counts:** a slot number is written **without a linker and without *mga***: `{1} card`, `{1} araw`, `{1} deck`, `{1} linggo`.
  - The right linker (*limang / apat na*) depends on the number word, and a digit hides it.
  - Philippine apps also write bare "5 araw".
  - Singular and plural templates therefore share one text.
  - No *-ng*, *din / rin* or *daw / raw* is ever written directly after a slot (the build lint checks this).
  - Fixed digits in fixed strings may take the linker (*4 na card*) or not (*5 card*); both read normally.
- **d / r:** *rin, rito, raw* after a vowel (or w / y), *din, dito, daw* after a consonant. The lint checks *din / rin / dito / rito*.
- **Spelling:** standard KWF spelling, no accent marks and no apostrophe contractions (*ano'ng*, *'yan* are avoided). Loans are written as Manila apps write them: *settings, email, quiz, card*. *Kumusta* is used, not *kamusta*.
- **Plurals:** *mga* + noun for unnumbered plurals (*Mga deck, Mga aralin, Mga phrase ko*). It is dropped after a number.
- **Grammar terms:** English, from the closed list in `docs/profiles/tl-ko.md` §3.4: *verb, noun, stem, dictionary form, ending, particle, counter, question word, polite, casual, honorific, 요-form, romanization, block, vowel, consonant, final, sound change, past, present*. The interface adds three tool words that the profile does not use as terms: *pattern, irregular, grammar*. They are used as nouns inside Filipino (*ang verb*, *polite na present*). No Filipino school terms (*pandiwa, pangngalan*).
- **Quiz mode words** are used the same everywhere:
  - Read = *Basa* / *basa*; Listen = *Pakinig* / *pakinig*; Recall = *Alala* / *alala*; Type = *I-type*;
  - Mixed (the quiz mode) = *Halo-halo*; the Mix pool (5 at a time) = *Halo*;
  - Shuffle = *I-shuffle*; Merge = *Isama* / *Naisama* (never *Halo*).

## 2. Loanwords kept in English (closed list)

Tech and app terms:
- app, account, email, Sign in / Sign out (*mag-sign in*), sync, backup, export / import, CSV, TSV, PNG, KB, file, link, code, 6-digit code, password, browser, device, storage, site data, database, online / offline, inbox, spam, admin, Developer, dev, bug, error, crash (*nag-crash*), Feedback, Privacy, Analytics, ads, cookies, page view, profile, user, post, page, website, board, Settings, setup, default, tour, preview, view, screen, home screen, menu, UI, keyboard, arrow key, Enter, Esc, Ctrl+K, button, text, track, tab, queue (*review queue*), limit, update, 3D effect, sound effect, Audio, media (*#media*), Mode, row, item, tiles, forecast, calendar, phone, laptop, level, normal, native (audio speed), min, on / off, plum, amber.
- English verbs used with *i- / mag- / na-*: tap, swipe, save, share, type, delete, review, check, reset, export, import, paste, play, quiz, unlock, lock (*naka-lock*), sync, sign in / out, edit, blur, shuffle, drill, conjugate, refresh, reload, load (*Naglo-load*), undo, pause (*Naka-pause*), enable, download, post, right-click, suspend.

Learning terms:
- card / flashcard, deck, quiz, exam, test, drill, mini drill, blitz, round, session, Review (tab, noun and verb *i-review*), streak, streak shield, streak card, recap card, Level / Lv, XP, combo, personal best, badge, hint, score, interval, leech, suspend (*i-suspend*), role-play, dictation, Register, spaced repetition, phrase (*Mga phrase ko*), pattern, grammar, conjugator, index (*Index ng grammar*), date (*makipag-date*), average, Pro, Sensei, K-drama.

Product name: Lang App. Code word: DELETE (never translated; the engine compares the typed text).

Filipino is used for ordinary words, for example:
- tabs: *Ngayon, Aralin, Pagsasanay, Pag-unlad, Basa*;
- *kahulugan* (meaning), *tala* (note), *halimbawa* (example), *salita* (word), *usapan* (dialogue), *bigkas* (pronunciation), *tunog* (sound), *boses* (voice), *bilis* (speed);
- *kahon* (SRS box), *layunin* (goal), *paalala* (reminder), *palayaw* (nickname), *kulay* (accent colour), *sertipiko*, *wika* (language), *kurso*;
- *mabagal / mabilis*;
- *Tama! / Hindi pa tama.*;
- *Ulit* (Again), *Alam ko na* (Got it), *Ulitin* (Retry / Redo / Replay), *Subukan ulit* (Try again);
- *Laktawan*, *Itago / Ipakita*, *Isara*, *Kanselahin*, *Bumalik*, *Susunod*, *Tapos*, *Tapusin*, *Simulan*, *Magpatuloy*;
- *Kahinaan* (Weak spots), *Mga mali* (Missed), *pasado / para pumasa* (passed / to pass), *natutunan* (learned), *inaaral* (learning), *kabisado na* (mastered), *ipagpabukas* (bury);
- *Tingnan* (Browse).
- Level titles: *Baguhan, Usbong, Estudyante, Madaldal* (Talker; 수다쟁이 is "chatterbox"), *Biyahero, Lokal, Beterano* (Senior / 선배), *Maestro, Pro, Sensei*.

## 3. Tab names (5-tab bar + extras)

| English | Tagalog | chars | ceb | es |
|---|---|---|---|---|
| Today | **Ngayon** | 6 | Karon | Hoy |
| Lessons | **Aralin** | 6 | Leksyon | Lecciones |
| Practice | **Pagsasanay** | 10 | Praktis | Práctica |
| Review | **Review** | 6 | Review | Repaso |
| Progress | **Pag-unlad** | 9 | Pag-uswag | Progreso |
| Read (advanced) | Basa | 4 | Basa | Leer |
| Feedback | Feedback | 8 | Feedback | Opinión |

- *Aralin* is used without *mga* on the tab (Tagalog plurals are often unmarked; *Mga Aralin* is 10 characters).
- *Pagsasanay* is the longest tab, one character more than *Lecciones*, which already ships.
- References inside text use the same names, for example *Pag-unlad → Backup → I-share ang file*.
- Other button names the lesson prose may cite: *Alam ko na* (Got it), *Ulit* (Again), *I-check* (Check), *Tingnan* (Browse), *Mga phrase ko* (My phrases), *Review lahat* (All due).

## 4. 30 strings to check first (for a Tagalog speaker)

Answer "OK" or write the natural version.

| # | English key | Tagalog now | Doubt |
|---|---|---|---|
| 1 | Practice (tab) | Pagsasanay | 10 characters. Natural as a tab, or would *Praktis* be the app word? |
| 2 | Lessons (tab) | Aralin | Without *Mga*: OK as a tab? |
| 3 | Review (tab) | Review | English kept, as the brief asked. *Balik-aral* is the school word. Which is better? |
| 4 | Progress (tab) | Pag-unlad | Natural for "your stats"? Or *Progress*? |
| 5 | Got it (SRS button) | Alam ko na | Or *Gets ko na*, *Kabisado ko na*? |
| 6 | Again (SRS button) | Ulit | Does *Ulit* alone work as a button? |
| 7 | Due / {n} due | Para i-review / {1} para i-review | Natural for "cards waiting for review"? |
| 8 | All due | ⏰ Review lahat | OK? (*Lahat ng para i-review* is too long.) |
| 9 | Weak spots | Kahinaan | "Weaknesses": OK as a mode name? |
| 10 | Missed | Mga mali | OK as a filter / mode name? |
| 11 | bury / Buried until tomorrow | ⏭ ipagpabukas / Ipinagpabukas. | Natural for "put off until tomorrow"? |
| 12 | mastered | kabisado na | Or *master na*? |
| 13 | learned | natutunan | KWF prefers *natutuhan*; apps write *natutunan*. Which one? |
| 14 | learning (SRS state) | inaaral | OK? |
| 15 | flip | baligtarin | Right verb for turning a card over? |
| 16 | Mixed (quiz mode) / Mix (pool) | Halo-halo / Halo | Is *halo-halo* too playful (the dessert)? |
| 17 | Recall en→한 | Alala tl→한 | Is *Alala* clear for "recall"? Is "tl" understood as Tagalog? |
| 18 | Listen 🔊→en | Pakinig 🔊→tl | *Pakinig* as a mode noun: OK? |
| 19 | native (audio speed) | native | English kept. Or *bilis ng native speaker*? |
| 20 | Talker (level title) | Madaldal | Fun or rude? Other titles: *Baguhan, Usbong, Estudyante, Beterano, Maestro, Biyahero, Lokal*. |
| 21 | Senior (선배) | Beterano | OK? Filipino students say *senior* too. |
| 22 | Social (deck group) / #social | Pakikisalamuha / #pakikisalamuha | Long. *Sosyal* was avoided because it means "posh". Better word? |
| 23 | Dating, friends & nights out | Date, mga kaibigan at gimik | Is *gimik* right for "nights out"? |
| 24 | I get by (level answer) | Nakakaraos | Natural for language ability? Or *Kaya ko nang kaunti*? |
| 25 | Working late — nice job | Puyat sa trabaho — ang galing | Natural greeting gloss? |
| 26 | it's late, good work | gabi na, salamat sa sipag | Natural? |
| 27 | Something went wrong: | May nagkaproblema: | Or *May mali:*? |
| 28 | Streak at risk | Nanganganib ang streak | Too dramatic? *Mapuputol na ang streak*? |
| 29 | Shuffle | I-shuffle | Or *Paghaluin*? |
| 30 | Hand-tuned for speakers of your language | Inihanda nang mabuti para sa mga nagsasalita ng wika mo | Natural? Shorter version? |

Also worth a glance: the day abbreviations are 3 letters (*Lin Lun Mar Miy Huw Biy Sab*) where ceb and es use 2 (is *Li Lu Ma Mi Hu Bi Sa* better for the narrow chart?); *Huling isa ·* (Last one ·); *Isama* (Merge in), *Tingnan* (Browse), *himayin* (break it down), *gayahin ×3* (shadow), *Ayusin ang mga salita* (Put the words in order), *Punan ang patlang* (Fill the gap), *Panimulang Koreano* (Korean starter), *Kusang baligtad* (Auto-flip), *Nakakausap sa loob ng 90 araw* (Conversational in 90 days), *Mabilisang aksyon* (quick actions).

## 5. For the lead (src/app.html, build, tests; I changed none of these)

**Works already:**
- `tl` is a 2-letter code. So `id.slice(0,2)` in `tools/site/lazy.js` (lines 66, 68) and in the `build.sh` loader give `tl` for `tl-ko`. The 3-letter problems listed in `tools/i18n/ceb/NOTES.md` §5 do not affect `tl`.
- `gen.py` writes `LANGAPP_PACKS.i18n.tl`, and `validate.js tl` passes.
- `LANGS.tl` exists: `{name:'Tagalog',self:'Tagalog',flag:'🇵🇭',ko:'타갈로그어'}`.
- `hLang('tl')` gives `tl`, a valid BCP-47 tag. `tl` is not in `RTL_LANGS`, which is correct.

**Must change:**

1. **`fil` browsers never get this pack.** Philippine devices report `fil-PH` (or `en-PH`), not `tl`. The current code turns `fil-PH` into `fi` (Finnish):
   - `src/app.html`, `function preLang(){ let b=''; try{ b=String(navigator.language||'').slice(0,2).toLowerCase(); }…`. There is no `fi` pack today, so the user silently gets English. If a Finnish pack is ever added, Filipino users would get Finnish.
   - `build.sh`, the `loader=` string: `b=String((m&&m.native)||navigator.language||'').slice(0,2).toLowerCase()`. This has the same effect: no early i18n preload.
   - **Fix in both places:** `b=String(navigator.language||'').toLowerCase().split(/[-_]/)[0]; if(b==='fil') b='tl';`. The split also fixes `ceb`, as the ceb notes ask.
   - Speech already has a related request in `docs/profiles/en-tl.md` §10.2 (`fil-PH` voices fall back to Finnish matching).
2. **Language names leak English.** `langName(code,'tl')` asks `Intl.DisplayNames(['tl'])`. ICU canonicalises `tl` to `fil`. Observed in Node (full ICU): ko → "Korean" (**English**), en → "Ingles", es → "Spanish" (**English**), tl → "Filipino", ceb → "Cebuano". That leaks English into `type it in {x}`, `Learn {x}, 5 minutes a day` and the course lists.
   - The same per-language override map the ceb notes propose (`LANG_NAMES={tl:{…}}`) fixes it.
   - Values: **ko Koreano · en Ingles · es Espanyol · ja Hapon · zh Tsino (Mandarin) · tl Tagalog · ceb Bisaya (Cebuano)**.
   - From recall, to be checked: fr Pranses · de Aleman · it Italyano · pt Portuges · ru Ruso · ar Arabe · hil Hiligaynon · war Waray · yue Cantonese.
   - All other codes: the English name.
3. **`LANGS.tl.self`** is `'Tagalog'`. Most Philippine apps and the Constitution call the national language *Filipino*. Suggestion: `self:'Tagalog (Filipino)'`, so that both words are searchable in the picker.

**Tell the halves agent:**
- The tabs on screen are **Ngayon, Aralin, Pagsasanay, Review, Pag-unlad**. Lesson prose in `tools/halves/native/tl/ko/` (when it exists) should use these names, and the button names in §3.
- `docs/profiles/tl-ko.md` §3.5 says the same.

**Course UI overrides.** Whatever goes into a future `tools/halves/native/tl/ko/ui.json` becomes `COURSE.UI` and overrides this pack key by key in `setI18n()`. Keep the two consistent, and prefer fixing wording here.

**Pipeline notes.**
- **`road.py` is still broken for every language** (as in the ceb notes).
  - `node -e` with all of roadmaps.js fails with `Argument list too long`. Fix: write the code to a temp .js file, or `require()` it.
  - Its `__main__` assert should be `[a-z]{2,3}`.
- I wrote `tl/roadmap.json` directly in road.py's output shape, using the ceb file as the skeleton (same 1,822 strings, every `t` blanked). I filled the 40 strings of the `ko` roadmap, read straight from `packs/roadmaps.js` (`LANGAPP_PACKS.roadmaps.ko`). `gen.py` emits `road` 40, which equals the number of strings in the ko roadmap block.
- The inline single-file build (`korean-flashcards.html`) will also include this pack, about the size of the ceb one.

**Build-time lint used (scratch script, not in the repo).** It checks:
- the Hangul runs, emoji and digits are the same as the key's;
- fragment edge punctuation;
- the slot set `{1}..{k}`, with no stray `{` or `$`;
- no *po / ho / opo*, no accents, no apostrophes not in the key;
- *din / rin* and *dito / rito* by the preceding sound;
- no linker or enclitic after a slot;
- Cebuano leak words (*og, ug, nga, kon, dili, naa, karon, imong, nimo, gyud*);
- length-ratio outliers.

It does **not** check verb focus or naturalness; those need the native check (§4).

## 6. English course (tl-en): roadmap titles and grammar terms (added 2026-11-23)

The same pack now also serves **tl-en** (English for Tagalog speakers). Nothing in `ui.json` was changed for it: the validator reports 784/784 exact keys and 274/274 templates translated, so there was nothing to add. What was added:

- `roadmap.json`: the 39 strings of the `en` roadmap (1 variant, 1 basis, 4 stages, 33 lesson titles). `gen.py` now emits `road` 79.
- This term list. It is the closed list of `docs/profiles/tl.md` §3; the tl-ko list in §1 is unchanged and still governs every existing string.

**Grammar terms used in the English-roadmap titles** (English school terms stay English, as ordinary nouns inside Filipino; everything else is Filipino):

| English | In Filipino text | Note |
|---|---|---|
| article / no article | article / walang article | |
| noun, pronoun, verb, adjective | noun, pronoun, verb, adjective | *mga* + term for an unnumbered plural (*Mga adjective*) |
| subject / object | subject / object | *subject pronoun*, *object pronoun*, *subject-verb-object* |
| plural | plural | |
| countable / uncountable | nabibilang / hindi nabibilang | |
| question word | question word | same as tl-ko |
| regular / irregular | regular / irregular na … | *regular na past -ed*, *irregular na past* |
| present simple | simple present | profile: «present tense (simple present)»; the titles use *simple present*, because *present tense* alone does not contrast with *present continuous* |
| present continuous / past continuous | present continuous / past continuous | |
| past | past | *mga tanong sa past* |
| present perfect | present perfect | |
| tense | tense | *Mga tense sa pagkukuwento* (Narrative tenses) |
| first / second / third conditional | first / second / third conditional | |
| comparative / superlative | comparative / superlative | |
| passive | passive | |
| reported speech | reported speech | |
| sentence | **pangungusap** | tl-en only; the tl-ko titles and the three interface strings keep *sentence* (see below) |
| question | tanong | |
| pronunciation | bigkas | *Mga bitag sa bigkas* |
| alphabet / spelling aloud | alpabeto / pagbaybay nang malakas | |
| vs | laban sa | as in the tl-ko title *에 laban sa 에서* |

Quoted English (*be, a / an, the, do, does / doesn't, will, going to, who / that, for / since, It's cold, there is / there are*) is kept exactly, with no affix or linker attached. Ten titles are identical to English because they consist only of quoted English or kept terms (*at / in / on*, *Past continuous*, *Passive*, *Reported speech*, *First conditional: if* …).

**Known differences between the two courses in this one pack (for the lead):**
- *sentence* (tl-ko titles, and the interface strings *Pagbuo ng sentence*, *pagbuo ng sentence*, the drills blurb) against *pangungusap* (tl-en titles and lesson prose). Profile `tl.md` §10 item 5.
- The basis line «CEFR A1-B1 order, adjusted for Korean speakers» is translated literally (*…iniangkop para sa mga nagsasalita ng Koreano*). For tl-en it should say Tagalog speakers; that needs a per-course string, not a different translation of this key.
- The keys worded for Korean (*Koreano, Hangul, romanization*, the Hangul examples) are untouched. An English course needs per-course overrides (`COURSE.UI`) for the ones it shows; the de and zh dictionaries show the intended English-course wording (*romanization* → pronunciation aid = *bigkas*, *Hangul / Korean* → *Ingles*).
- The three tab labels over 8 characters (*Pagsasanay* 10, *Pag-unlad* 9, *Mga drill* 9) are untouched; profile `tl.md` §10 proposes *Praktis*, *Progreso*, *Drill* for the tab only.

**For the Tagalog speaker's check (English-roadmap titles):**

| English | Tagalog now | Doubt |
|---|---|---|
| General (American) English | Pangkalahatang Ingles (Amerikano) | Or *American English* left in English? |
| The alphabet and spelling aloud | Ang alpabeto at pagbaybay nang malakas | *pagbaybay nang malakas* for spelling a word out loud? |
| Pronunciation traps: R/L, F/P, TH | Mga bitag sa bigkas: R/L, F/P, TH | *bitag* for "traps"? |
| a / an and the: the basics | a / an at the: ang mga batayan | Or *mga pangunahing kaalaman*? |
| A1 · Doing things | A1 · Pagsasabi ng ginagawa | Free rendering ("saying what you do") |
| A2 · Building range | A2 · Pagpapalawak ng kaya mong sabihin | Free rendering ("widening what you can say") |
| B1 · Telling more | B1 · Mas mahabang pagkukuwento | Free rendering |
| the: first vs second mention | the: unang banggit laban sa ikalawang banggit | *banggit* natural? *laban sa* for "vs"? |
| the for one-of-a-kind, no article with plurals | the para sa nag-iisa lang, walang article sa plural | *nag-iisa lang* for "one of a kind"? |
| Questions: do, then question words | Mga tanong: do, saka mga question word | *saka* for "then"? |
| Present perfect with for / since | Present perfect na may for / since | |
| Narrative tenses | Mga tense sa pagkukuwento | |
