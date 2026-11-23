# en-hmn decisions (stage 1 lead, 2026-11-23)

The profile (`docs/profiles/en-hmn.md`) left these open. **The owner has ruled: do not wait for a native reader; build and release; user bug reports will correct it later.** Each decision below is taken from `tools/hmong/GLOSSARY.tsv` and the reliability column of `tools/hmong/SOURCES.md`, not from memory. Writers follow this file where it differs from the profile or from `tools/hmong/README.md`.

## 0. What the owner's ruling lifts, and what stays

**Lifted:**
- Glossary rows marked `native check` may be used in cards, examples and answers. Keep the row's caveat in the card note when it changes the meaning (for example `niam tais`: side not stated).
- Phrases built from glossary words on an attested pattern (profile §4 and the §8 lesson notes) may be used. The profile's "[native check] as a whole" is not a stop sign.
- Rows sourced **only** from WV (Wikivoyage, low reliability) may be used when no better-sourced form exists, for example `nag hmo` "yesterday" or `zoo siab tau ntsib koj`. Never use a WV-only form where a better-sourced competitor exists: `ib roob`, `plua`, `Kab ntsab`, the zwj- day names.

**Stays (hard rules):**
- Never invent a word, a compound or a tone letter.
- A word outside the glossary needs a source the writer opened. It goes in `tools/target/hmn/NEW-WORDS.tsv` before it is used.
- This replaces README rule 2: no `tools/hmong/NEW-WORDS-<writer>.tsv`, and no rows with source "none".
- Rows marked `SOURCES DISAGREE` are settled here (§1), not by the writer.
- Notes that say "avoid in course content" are obeyed (`niam hlob` in its co-wife sense).
- No Green-only spelling in a target. No `HMoob` in a target; mention it once in a lesson note.

## 1. Day names

**Decision:** English day names after `hnub`, as US agencies write them: `hnub Monday` … `hnub Sunday` [PGE, MNC, rated High in SOURCES.md for what US institutions actually write].
- `Monday` … `Sunday` are in `tools/hmong/ALLOW.txt`.
- Their tone-line word is `—` (`hnub Monday` → `high · —`).

**The numbered names** (`hnub ib`, `hnub ob` …) appear only in a card note or lesson note: "Some families and books number the days (hnub ib, hnub ob …), but the books disagree on whether hnub ib is Sunday or Monday [ECM vs WPCAL]: ask your family."
- They are never a card target, never an answer and never a wrong option.

**Other time words:**
- `hnub so` is glossed "day off; rest day". The note says "older texts: Sunday" [WHL, PGE].
- Week: `lim tiam` [W-KK]; note "also as thiv".
- Tomorrow: card `tag kis`; typed answers also accept `taskis` [W-KK]. Joined `tagkis` needs no listing, because the matcher folds spaces.
- Months are numbered: `ib hlis ntuj` … [ECM, W-KK].

## 2. Numbers

- **One million:** card `ib plhom`, the only form attested by two course decks [BSL, BS1011].
  - The note says "also ib lab; Omniglot gives ib roob".
  - Typed answers accept `ib plhom|ib lab|ib roob`, because all three are attested.
- **Ten thousand:** card `kaum txhiab` [WV]. Note "also ib vam" [BS1011]. Answers accept both.
  - This is a stated exception to §0's WV rule. `kaum txhiab` is ten × thousand, built on the number + `txhiab` pattern the lesson teaches (`ib txhiab`, `ob txhiab`), so it is not a WV-only invention.
  - `ib vam` has the better source but is a separate word (a Lao loan in some sources).
- **Zero:** `ntxaiv` [WV, OMNN]. The note says the sources give only this form.
- **Dollar:** card `daus las` (W-KK `dauslas`, written syllable-spaced by the course rule). Note "also written daulas (EnglishConnect)". Answers accept `daus las|daulas`.
- **The tone changes the glossary writes** are copied, never predicted:
  - caug after 3–5 tens, caum after 6–9;
  - `ib/ob/peb/plaub/tsib/cuaj puas` but `rau/xya/yim pua`;
  - `nees nkaum` for 20;
  - `tus` / `tug`.
- **Digits:** write numbers as words in Hmong strings, so the tone line is complete.
  - The one exception is clock times, in the sourced pattern `7 sawv ntxov` [PGE, MNC].
  - A digit gets `—` in the tone line.

## 3. Question forms

Teach these four, all sourced:
1. `puas` before the verb: `Koj puas …?` [W-KK, WHL, OMN].
2. `… los tsis yog?` "… or not?" [BSX: `Koj noj mov lawm los tsis yog?`].
3. Final `los`, a question that expects yes [WHL: `Koj tuaj los?`].
4. `… puas tau?` "may I / could you?" [BSL: `hais dua puas tau?`].

Question words stay where the answer goes [OMN, BSL]: `dab tsi`, `leej twg`, `qhov twg`, `thaum twg`, `pes tsawg`, `vim li cas`, `li cas`, `twg`.

`pov` is never a question form (it means "throw").

## 4. Sentence-final particles: exactly four

| Particle | Function taught | Source | How to use it |
|---|---|---|---|
| `os` | softens a statement or request ("sounds good to Hmong ears") | WHL, W-KK | cards, examples, answers (`Pw zoo os`) |
| `los` | question that expects yes | WHL | cards, examples, answers |
| `yam` | tag question "…, isn't it?" | WHL | recognition only: notes, examples, mc. Not a typed answer |
| `ko` | clause-final completive particle | W-KK | recognition only, in one note; it is also the demonstrative "that (near you)" [BS1011], which is what the noun-phrase lesson teaches |

- Not taught: `mas` (native check, no clear function), `lauj`, `nawb`, `sis` (no function found).
- Not taught: `las` (Whitelock's gloss came back wrong in SOURCES.md).

## 5. Loanwords

**Where US Hmong texts keep the English word,** the card keeps it and the note says so. Write the note as "US Hmong use the English word" or "English kept, as in Minnesota health guides". Examples:
- `mob cancer`, `mob AIDS`, `mob ntsws asthma`, `Medical Assistance` [MDH];
- `pizza`, `hamburger`, `sandwich`, `cheese`, `txiv orange` [ECM];
- `hnub Monday` [PGE].

The English part gets `—` in the tone line, and it must be in `tools/hmong/ALLOW.txt`. The RPA.md §6 list is there now.

A card or answer needs at least one Hmong syllable. A bare `pizza` has no tone line, so `respell.js` throws and the card has no pron. Write it with its Hmong word, as the sources do (`txiv orange`, `mob cancer`), or in a short sentence from attested words.

**Sourced RPA loans** stay as RPA: `kav fes` coffee, `xalas` salad, `Amelika`, `daus las`.

**The gaps** (papaya salad, sticky rice, airport, computer, internet, minute, second, school building) are not taught unless a writer finds a source.
- A word found in a source goes in NEW-WORDS.tsv.
- If the source shows the English word kept, append it to ALLOW.txt, with `>>` only and a trailing comment giving the URL.
- Never respell an English word in RPA.

## 6. Religion-neutral wording

- Present traditional practice factually and with respect: `hu plig` soul calling, `khi hluas tes` wrist-string tie, `ua neeb` / `txiv neeb`.
  - Use "many families", "a traditional ceremony", and "shaman (a traditional healer and ritual leader)".
  - Never "superstition", and never "demon": gloss `dab` as "spirit".
- Many Hmong American families are Christian.
  - English prose may say that families of different faiths mark births, weddings and New Year in their own ways.
  - No card asks the learner to profess a belief.
  - No church vocabulary exists in the glossary, so none is taught unless sourced.
- `thov` is glossed "please; to ask", and "to pray" only in a note.
- `foom` is not taught: its one learner-deck source lists "to curse" first and "to bless" second [BSQ], and half a gloss would mislead.

## 7. Kinship

**Core terms to teach** (all in GLOSSARY.tsv):
- Parents and children: `niam`, `txiv`, `niam txiv`, `tub`, `ntxhais`, `me nyuam`.
- Siblings: `nus muag` siblings.
- Grandparents: `pog` "grandmother (father's mother)" [W-KK]; `yawg` "grandfather" (side not stated) [ECM, GYL].
- `niam tais` "grandmother; also mother-in-law" and `yawm txiv` "grandfather; also father-in-law" [ECM]. No side is claimed, because no source states it.
- Father's side: `txiv hlob` father's older brother, `txiv ntxawm` father's younger brother, `phauj` father's sister [ECM, GYL].
- `dab laug` mother's brother [ECM, GYL].
- In-laws: `nyab` daughter-in-law, `vauv` son-in-law [WHL].

**By speaker's sex,** where sourced [WHL, GYL, W-KK]:
- `tij laug` older brother (said by a man);
- `kwv` younger brother (said by a man);
- `muam` sister (said by a man);
- `nus` brother (said by a woman);
- `viv ncaus` sister (said by a woman).

Meanings carry «(said by a man)» / «(said by a woman)» so that no two cards share a meaning.

**Not taught:**
- `niam laus` / `niam hluas` (the speaker's sex is uncertain in the source);
- `niam hlob` / `niam ntxawm` (which aunt is unclear, and there is a co-wife sense);
- `npawg` (a cross-cousin term whose fuller chart did not come through).

## 8. Smaller rulings

- **Subject pronoun:** no source says it can be dropped.
  - Prompts state the subject ("I…", "you…").
  - Accepted answers include the pronoun.
  - Writers do not list subject-less variants.
- **Spaced vs joined:**
  - Targets are spaced, as GLOSSARY.tsv column 1 writes them.
  - The app folds spaces and hyphens, so `menyuam` = `me nyuam` without listing.
  - List a joined form only where the glossary has it as a different spelling (`daulas`, `taskis`).
- **`!strict` is not needed.** For hmn the app never folds a tone letter, never gives accent leniency and never gives romanisation leniency (`accLoose` and `romaLoose` are off for hmn in `src/app.html`). A tone slip is simply wrong. Put the tone twin in the item's wrong options instead (`x` / `o`): the profile's tone-twin rule.
- **Greetings:** `Nyob zoo` for any time of day.
  - `Nyob zoo sawv ntxov` is "not common" [OMN]. It is never taught as "good morning", and it may appear only in a trap note.
  - GREET in profile.json is `Pw zoo os` (night) and `Nyob zoo` for the other three slots.
- **Tone labels:**
  - The tone-line words are fixed by profile §6.2 and `respell.js`.
  - The tones lesson says once that Jay Xiong calls the -s tone "middle" where Wikipedia says "low".
  - Contour descriptions in lessons 1–2 come from profile §6.2.
- **Deck ownership of shared phrases:**
  - `ua tsaug` → Greetings and courtesy.
  - `zoo siab hnub yug` → New Year and celebrations.
  - `Koj noj mov lawm los tsis yog?` → Talking with elders.
  - `Koj yog Hmoob xeem dab tsi?` → About me. The bare word `xeem` → Family events.
  - Bare `pes tsawg` → Questions and connectors.
  - `Koj nyob li cas?` → Greetings and courtesy.
  - Traps for English speakers and the three Heritage decks use full phrases or sentences, never a bare word that is a card in another deck.
- **Heritage decks are thin in the glossary.** They hold 12–18 cards each and are never padded. A writer who cannot reach 12 attested cards reports it, and the lead merges decks. The validator floor is 12.

## 9. Pron

- `pron` is the tone line only, as profile §6.1 and §6.4 fix it: one tone word per syllable, `—` for English words, names in English spelling and digits.
- The profile's §6.3 reading guide (x = s, s ≈ sh, z, c, q, r, w as a vowel, ee / oo nasal, aspirates, pre-nasalised) is lesson text. `node tools/target/hmn/respell.js --aid "<text>"` prints the rows that apply to a text. It is not put in `pron`.
  - The task's "plus reading help" is read this way, because an English respelling of RPA syllables would be invented, and RPA.md §8 warns against writing the aid in RPA.
- The tool is `tools/target/hmn/respell.js`, not the profile's `toneline.js`, because `mk_briefs.py` and `repron.js` look for that name.
- `pronPattern` in profile.json equals `respell.js --pattern`. It is the profile's pattern plus `—`.

## 10. Core words, Flirting and Compliments decks

`docs/briefs/core-words-writer.md` adds these to a **finished, live** course by a separate agent: `decks-t` / `decks-f` / `decks-c` with `extra-*`, `CORE-SOURCES.md` and `POS-COVERAGE.md`. `docs/briefs/core-words-rollout.md` queues every course for them.

So en-hmn is expected to get them, **after** stage 1 ships, not in the A / B split.
- Planned adaptation for that agent: `Top prepositions` becomes `Top locatives and prepositions`, and a `Top classifiers` deck is added (brief rule 2).
- The same glossary rule applies.
- The agent must not create a HOLD file then. Remove `tools/target/hmn/HOLD` at release.

## 11. App requests (not done here; src/app.html is off-limits)

- Change the no-voice toast for hmn to "No Hmong voice exists yet: read the tone line under each card." (profile §2.5).
- The course has `noAudio: true`, so no speaker buttons show and listening practice is off. Native clips (`audio/hmn/`) are a later budget item.
