PROGRESS (updated 2026-11-21 22:15 CST)
Course: en-cs   Branch: cursor/en-cs   PR: https://github.com/KyronEpperson/Lang-App/pull/10
Done: research brief, research, pron tool, lead note, decisions, briefs, deck A
Next: deck B, lesson 1, lesson 2, lesson 3
Checks: deck A node --check passed. 9 decks, 157 cards, 28 dialogues, 18 examples, 9 patterns. Partial validator reported pass. Four profile samples also sit in deck B's list (dobrý, chléb, Děkuji, Jsem student) and were kept on both sides. Full course not run.
Models used: research brief = no model (filled from the template); research and pron tool = grok-4.7-xhigh; decisions = grok-4.7; briefs = mk_briefs.py; deck A = grok-4.7-high
State: WORKING

Deck A, tool output kept. A native should hear: To je váš bratr vaahzh, Jsem z Plzně SPLLZ-nyeh, S dovolením ZDOH-voh-leh-nyeem, Není zač zahch, to náměstí NAAHM-nyehs-tyee, Mluvíte anglicky AHN-glihts-kih, and the pair Jedna káva / Jednu kávu. domu is do domu and z domu. The place form is v domě. domů is going home. Jmenuji se Eva is the I-form. The vy question is Jak se jmenujete.

# Lead note: en-cs stage 1

## Where the work is

Branch `cursor/en-cs`. Draft PR https://github.com/KyronEpperson/Lang-App/pull/10. Files: `docs/profiles/en-cs.md`, `tools/target/cs/profile.json`, `tools/target/cs/respell.js`, this note. Nothing else. No lessons, no decks, no decision record, no app edit, no pack edit, no other course. Not committed.

## What to do

Read §2 (vy / ty, and the one paragraph on spoken Czech), §4, §6.5, §7, §8 and §10. The sample cards in §9 are there so the prons can be checked; you do not need to approve each card. Record the decisions below.

Done when the decision record says yes or names the change, and stage 2 may start.

## Decisions to record

1. **`accents` false.** The app folds `á é í ó ú ů ý` and `č ď ě ň ř š ť ž` off the letter. With `accents` true, `byt` for `být` scores as almost. The flag is false, so a missing length mark is wrong. Fills whose options differ only by one of those marks still need `!strict`, because `validate.js` asks for it even when the flag is false. Pairs: `byt/být`, `pas/pás`, `dal/dál`, `peče/péče`, `vila/víla`, `dům/dum`, `domů/domu`, `domů/domú`, `rada/řada`. `být` and `bít` do not fold together. **No** would mean turning the flag on. Then a missing length mark is almost on every item that is not marked strict.

2. **Produce vy. Recognize ty.** Typed "you" is `jste`, `-áte / -íte / -ujete`, `váš / vaše`, `Dobrý den`. `jsi`, `ahoj`, `tvůj` appear in multiple choice and are never the typed answer. With vy for one person, the adjective or participle stays singular and shows gender (`Jste unavená`). **No** would mean learners type the ty form as the normal answer.

3. **Three cases are drilled.** Subject form, object form, place form. Genitive, dative, instrumental and vocative are named once. `Jsem z Prahy`, `pět korun`, and `mi` / `vám` are chunks, not paradigms. Recognize `pane`, `paní`, `slečno`. **No** would mean adding a genitive lesson or a dative lesson. That would be a second new lesson, or it would push the course past the one lesson this stage is allowed to add. Do not add it here.

4. **Standing rule: gender and the verb ending.** Keywords and the 25-line test are in §7. Not the three cases, and not vowel length. Length stays in the three sound lessons, in `accents: false`, and in `!strict`. Before `byt`, the four keyword items are `ten / ta / to` and one adjective. From `byt` on, at least one order item and one type item are a verb ending. **This is the decision I am least sure of.** **No** would mean making vowel length the standing rule and taking gender, or the verb ending, out of the keyword count. `byt` / `být` is the best-documented English-speaker error, and it is in every sentence that has a vowel. The reason it is not the rule is that half of every later order block and type block would then be a length pair.

5. **One added lesson, `traps`, at the end, roadmap `""`.** Compliments hangs off `likes`, so it does not get its own lesson. All 24 roadmap items stay, in roadmap order. ČVUT teaches the place form just after the restaurant lesson. This course keeps the later roadmap slot, after `jít` / `jet`. The family item says `tvůj`; learners recognize it and produce `váš`. **No** on the extra lesson would mean dropping `traps` and pointing the Traps deck from `intro` or `family`. **No** on the order would mean moving `locative` up to sit with the restaurant lesson.

6. **A generated respelling ships.** It throws on an unclassified `di / ti / ni` instead of guessing. ř is `rzh` or `rsh`. Long and short vowels differ (`biht` / `beet`). The beat is CAPITALS on the first syllable. A one-syllable preposition with a vowel takes the beat. `v k s z` join the next word. **No** would mean `pron: none`, or a hand-written aid. Do not ship a tool that guesses the soft consonants.

## Register, already applied

Standard Czech, voice `cs-CZ`. Produce vy, recognize ty (§2.2). Produce `-uju`, accept `-uji`. Produce `moje`, recognize `má / mé`. Spoken Czech (`obecná čeština`) is named once in §2.3 and is not an accepted answer.

## App changes needed

None. `accents: false` is the switch the app already has. `!strict` on a fill is a writer rule, already in `validate.js`.

## Pron tool: enforce these

From `source/`: `node tools/target/cs/respell.js "<Czech>"`. `node tools/target/cs/respell.js --pattern` prints the regex stored in `profile.json`. `--test` must stay `ok 84`.

| Word | Output | What a writer does |
|---|---|---|
| být | beet | Long ý is `ee`. `byt` is `biht`. |
| řeka | RZHEH-kah | ř is `rzh`, never `r`. `tři` is `trshih`. |
| na shledanou | NAH skhleh-dah-nohw | The beat is on `na`. `sh` is `skh`. |
| v Praze | FPRAH-zeh | `v` joins the next word. |
| do Prahy | DOH prah-hih | The preposition has the beat. The noun is all lowercase. |
| politika | POH-lih-tih-kah | A listed loan keeps hard `ti`. |
| čeština | CHEHSH-tyih-nah | Native `ti` is soft. |
| tenis | (throws) | Add it to `NATIVE` or `LOAN` in `respell.js`. Do not type a pron by hand. |

## Evidence, keep at this strength

§4.1–§4.6 is a teacher's list (Elon), checked against Tahal and the Institute of Phonetics. It is not a counted study of English speakers. No such study was opened. The grammar ranks are the two syllabi plus Tahal. The roadmap note says the past is outside either beginner source. The 2026 Charles PDF that was opened does put `Co jsi dělal/a včera` in week 4. `pět korun` is the counting rule from Tahal and Reality Czech. Do not teach "it costs" plus an object-form price. That sentence was not on a page that was read. Compliment replies other than `Děkuji` were not sourced.

## Placeholders

Brand `Čeština`. The seven level titles are the Spanish and Russian titles, copied as placeholders. Any compliment line beyond the five in §9 needs a native check before it is an accepted answer.
