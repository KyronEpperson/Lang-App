# hmn interface (tools/i18n/hmn): notes for the lead and the main build

Scope: `ui.json` (784 exact strings, 274 pattern templates) and the 39 English-roadmap titles in `roadmap.json` (the other 1,783 roadmap `t` are empty, so they fall back to English). White Hmong in RPA, syllable-spaced, ASCII. The learner is `koj`. Buttons are bare verbs. There is no `thov` on buttons. Western digits. Not read by a native speaker.

Every Hmong word is in `tools/hmong/GLOSSARY.tsv`, in a sister or course `NEW-WORDS.tsv`, or in `tools/i18n/hmn/NEW-WORDS.tsv` (40 rows added for the interface; `tso npe`, `ntaus` and `kev pab` were recorded but are not used in the end, since the file is append-only). Most interface verbs came from four US public sources, opened 2026-11-23:
- the California CAASPP Hmong test directions (pib, tom ntej, kaw cia, nres, tiav, tos, feeb, sim, xa, ntxiv, tuaj yeem, tawm, cim tseg, tshwm sim, lus qhia);
- the UW-Madison Extension Hmong Zoom sheet (nias, suab, kom, hom lus, hom, tsim);
- the MN DHS Hmong Tech Skills guide (cuab yeej siv, ntaub ntawv, lo lus zais, theej, nkag mus, zauv, yeeb yaj kiab);
- the CA Privacy Protection Agency DROP flyer (tshem tawm, tso npe, nyab xeeb);
- plus UW-Madison's Workday glossary (kaw tawm).

## Terms fixed (one per concept)

| English | Hmong in ui.json | Source / note |
|---|---|---|
| Today / Practice / Review / Lessons / Read / Progress / Feedback (tab bar) | Hnub no / Xyaum / Review / Lessons / Nyeem / Progress / Feedback | profile §10; longest is 8 characters (Progress, Feedback) |
| Back / Next / Start / Save / Close / Open / Help / Again | Rov qab / Tom ntej / Pib / Kaw cia / Kaw / Qhib / Pab / Dua | profile §10 + CAASPP |
| Read / Write, Type (verb, chip `⌨ Sau EN`) / Listen / Answer / Choose | Nyeem / Sau / Mloog / Teb / Xaiv | profile §10: Type = Sau (ntaus ntawv too long) |
| play (audio), replay | Mloog, Mloog dua | the user's action, not the machine's |
| Say it / repeat | Hais / Hais dua | |
| tap, click, press | nias | CAASPP, UW Zoom sheet |
| flip / swipe | tig / rub (mus sab xis, sab laug) | glossary: turn / pull |
| Got it (flashcard) / Again | Paub lawm / Dua | |
| Check (button) | Kuaj xyuas | glossary: to check, examine |
| quick check (3-question lesson check) | 3 lo lus nug | concrete instead of a coined term |
| dialogue | A thiab B tham | no source for a noun; kev tham avoided |
| which one? | lo lus twg? | twg = which (qhov twg = where) |
| phone number | tus xov tooj | UW Zoom sheet (lub xov tooj = the phone) |
| button | lub pob | MN DHS, CAASPP |
| exam | Xeem | glossary: to take a test |
| blitz | Teb nrawm | "answer fast" |
| weak spots / hardest cards / leech | Qhov nyuaj / Card nyuaj tshaj / card nyuaj heev | |
| mix, mixed | Xyaw | glossary: to mix |
| recall (mode) | Nco | glossary: to remember |
| suspend / paused | nres | CAASPP: pause |
| bury, skip until tomorrow | Tos tag kis | wait until tomorrow |
| restore / undo | Rov siv / Rov qab | |
| skip (a quiz item) / skip tour | Tsis teb / Tsis saib | |
| due | yuav Review | count labels: «Yuav Review: {n}» |
| learned / mastered / new / learning | kawm tau / paub zoo / tshiab / tab tom kawm | |
| passed / 80% to pass | dhau lawm / yuav tsum raug 80% | |
| correct / not quite / missed | Raug lawm! (Raug) / Tsis tau raug / Tsis raug | profile §10 «Raug lawm!» |
| hint / why / rule | Lus qhia / Vim li cas / Txoj cai | |
| done, finished, complete | tiav (lawm) | CAASPP |
| delete, remove, erase | tshem tawm | CA DROP flyer |
| copy / paste | theej / muab tso rau | MN DHS |
| share | qhia … rau luag | "tell others" |
| hide / show (board posts, pronunciation) | Tsis qhia / Qhia (Qhia dua = unhide) | no source for zais, so not used |
| sign in / sign out / sign-in code | nkag mus / kaw tawm / code nkag mus | MN DHS, CAASPP; UW Workday |
| device | cuab yeej siv | MN DHS |
| data, file, information | ntaub ntawv | MN DHS, CA DROP |
| password | lo lus zais | MN DHS |
| language | hom lus | UW Zoom sheet |
| Category (feedback type) | Hom | UW Zoom sheet ("lwm hom lus") |
| course | chav kawm | course NEW-WORDS (class) |
| number(s) | zauv | MN DHS |
| sound, voice; Woman's / Man's voice | suab; Suab poj niam / Suab txiv neej | CAASPP, UW Zoom sheet |
| Text size / Accent (colour) | Ntawv / Xim (Xim liab, ntsuab, xiav, tsam xem) | |
| goal / Daily goal | hom phiaj / Hom phiaj txhua hnub | glossary |
| reminder | nco ntsoov | glossary: to remember |
| polite ↔ casual | Hais zoo ↔ yooj yim (buttons: Hais kom zoo / Hais yooj yim) | |
| sentence builder / role-play / numbers drill | Ua sentence / Tham / Zauv | |
| option | txoj kev xaiv | profile §3 |
| meaning (card field) | Lus Hmoob | the meaning field holds the Hmong |
| optional | yog koj xav sau | |
| level titles | Neeg pib kawm, Neeg kawm ntawv, Neeg txawj tham, Neeg mus ncig, Neeg hauv zos, Neeg txawj, Neeg txawj heev | HMN-R: one list in meta.js TITLES and the interface (Beginner … Master) |
| greetings (good morning / afternoon / evening, Hello) | Nyob zoo | decisions: Nyob zoo at any time of day |
| weekday headers Su–Sa | Sun Mon Tue Wed Thu Fri Sat | brief: English day names, three letters |

## English kept (no attested Hmong word; each in an ALLOW file, except symbols such as A−, A+, 3D)

Every "identical to the English key" warning from `validate.js` is one of these.

| Kept English | Where | Reason |
|---|---|---|
| Review, Lessons, Progress, Feedback (+ lesson) | tab bar, prose, counts | profile §10 tab table: no term found |
| deck, card, quiz, streak, XP, level, sync, settings, email, app, audio | everywhere | profile §3 "UI words with no Hmong term" |
| account | sign-in and privacy | UW Extension's Hmong sheet keeps it ("tsim tus zoom account dawb"). The CA DROP flyer writes "as khauj", a respelling, which is not used |
| internet, computer, browser, keyboard, screen, home screen, download, right-click | sign-in, sharing | MN DHS Hmong guide keeps them |
| export, import, backup, CSV, TSV, PNG, KB | backup screen | file and app terms |
| session, drill / Drills, plan, badge, certificate, box, shield (streak shield), points | practice and stats | app terms with no attested Hmong word |
| Grammar, verb, noun, classifier, irregular, pronunciation, IPA, syllable, consonant, vowel, stress, sentence, past tense | grammar index, search, reading drill | profile §3: grammar terms stay English, never coined |
| link, code, error, bug, spam, ads, version, database, cookies, Analytics, Supabase, Vercel Web Analytics, site data, browser data, inbox, admin, menu, calendar, Privacy | privacy, sign-in, board | web terms with no attested Hmong word |
| Korean | language option | no Hmong name for Korean in the glossary |
| A−, A+, Enter, Esc, Ctrl+K, 3D, Lang App | buttons and keys | symbols, key names and the product name |

## Rules applied

- **Counts:** label + colon, one wording for 0, 1 and many («Card: {1}», «Yuav Review: {1}», «Hnub: {1}», «Lim tiam: {1}»). The singular and plural templates share one translation. No classifier appears after a count slot. Fixed numbers in labels are written as digits plus a noun («5 card tshiab», «2 feeb»).
- **Language-name slots** (filled with «Lus Askiv»): the slot is at the start or after a colon («{1}: koj paub npaum li cas?», «sau ua: {1}»). No «lus {1}» anywhere (checked by script).
- **Fragments:** the leading and trailing punctuation of every fragment is kept. Concatenated chains read in order:
  - «👆 Nias | card kom tig»
  - «👉 Rub mus sab xis | = Paub lawm · | 👈 sab laug | = Dua»
  - «Feedback | : txhua yam koj sau, | sawvdaws | pom tau. …»
  - «… Sau | DELETE | kom paub tseeb.»
- **Emoji (lead decision):** the U+FE0F variation selector is dropped after ⌨ 🎚 ❤ 🛡, because `rpa_check.js` counts it as an illegal letter. The emoji itself stays, but without the selector ⌨ ❤ 🛡 🎚 may render as plain text glyphs. Either teach rpa_check to skip U+FE0F and restore it, or accept the glyphs. "Aa" before "pronunciation: on/off" is dropped, because rpa_check reads it as the Green Mong vowel aa.
- **Removed en-hmn forms are not used:** khi hluas tes, Pab os, nqaij npuas, zaj nkauj, tus xib fwb for "a teacher", tsaug "tired" (checked by grep).

## Guard results to expect

`coverage.js` lists 2 tokens that are not Hmong words, by design:
- `a` ×9: the speaker labels A/B (dialogue strings) and the A−/A+ font buttons.
- `thu`: the weekday header Thu.

Neither is added to ALLOW, because each is also a legal RPA syllable. The English examples `go` and `ga` were dropped from the conjugator and sound-typing hints for the same reason. `rpa_check.js` passes (RPA OK). Its only warnings are the expected run-together `Askiv` / `sawvdaws`.

## For the main build

- The roadmap basis string says "adjusted for Korean speakers" in English. It is translated literally («kho rau neeg hais lus Korean»). If hmn-en shows it, the English source should say Hmong speakers.
- 28 labels are longer than 1.6 × the English (validate.js warning). Hmong phrases are longer than English labels. The tab bar is within 8 characters.
- Classifiers are used only where a source shows one: tus email, tus account, lub suab, lub xov tooj, lub pob. Link, code, streak, browser, database and device (cuab yeej siv) stand bare, like card and deck.
- Plan names (Mus ncig teb chaws, Nrhiav phooj ywg, Tham tau hauv 90 hnub) and goal labels should match A's meta.js PLAN_PRESETS / GOALS once A writes them. Mus ncig teb chaws is the DECKNAMES name of deck 15.
- `roadmap.json`: only the 39 entries with `"roadmap": "en"` are filled. `road.py` was not run.

## Reviewer (HMN-R, 2026-11-23)
- U+FE0F restored after ⌨ 🎚 ❤ 🛡 (11 strings): rpa_check now ignores U+FE0F / U+FE0E / U+200D. Every key and its "t" now carry the same emoji sequence (only the flag 🇰🇷 → 🇺🇸 differs, on purpose).
- me ntsis → mentsis (glossary column 1, as the sister course) in 4 strings.
- Plan names now match meta.js: Trip to Korea → Npaj mus ncig; Make friends & date → Tham nrog phooj ywg; Conversational in 90 days stays Tham tau hauv 90 hnub (meta.js conv now says the same). Student → Neeg kawm ntawv.
- Roadmap basis line: «CEFR A1-B1, rau neeg hais lus Hmoob» (was "kho rau neeg hais lus Korean").
- Unsure terms decided by source, one term per concept (already consistent): Save = Kaw cia (CAASPP glossary; no source for Ceev cia); delete / remove / erase = tshem tawm (CA DROP; also WI DHS EVV slides); copy = theej (MN DHS); hide / show = Tsis qhia / Qhia (no source for zais); share = qhia … rau luag (luag = others, glossary).
