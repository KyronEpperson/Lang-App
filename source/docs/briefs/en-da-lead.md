PROGRESS (updated 2026-11-21 18:22 CST)
Course: en-da   Branch: cursor/en-da   PR: https://github.com/KyronEpperson/Lang-App/pull/8
Done: research brief, research, pron tool, lead note, decisions, briefs, deck A, deck B, lesson 1, lesson 2, lesson 3, lexicon, merge check, review, hand-off
Next: Claude's merge read
Checks: PASS: all checks OK. gen.js: 26 lessons, 18 decks, 308 cards. After the review, repron twice: 620 prons read, 0 rewritten, then 0 rewritten. link_roadmap: 25 linked, not covered: none. traps has no roadmap id. packs/roadmaps.js was not kept.
Models used: research brief = no model (filled from the template); research and pron tool = grok-4.7-xhigh; decisions = grok-4.7; briefs = mk_briefs.py; deck A = grok-4.7-high; deck B = grok-4.7-high; lesson 1 = grok-4.7-high; lesson 2 = grok-4.7-high; lesson 3 = grok-4.7-high; review = grok-4.7-xhigh
State: READY FOR REVIEW

Lexicon added, then regenerated: fordi foh-DEE (Wiktionary [fʌˈd̥iˀ]), aldrig AL-dree ([ˈɑld̥ʁi]), hvordan vaw-DAN ([ʋʌˈd̥æn]), station sta-SHOHN and stationen sta-SHOH-nuhn ([sd̥aˈɕoˀn]), gik gehk ([ˈɡ̊iɡ̊], replacing the long geek). Still for the reviewer, unsourced: the day names, halv, hvornår, minut, toilettet, Amerika and amerikaner and amerikansk, englænder, dygtig, tager and toget, København, fjorten, ligeud, forældre, boede and arbejdede, eventuelt, fabrik, dejlig, endelig, rødt, for, koster, havde, kvart, café, idé, undskyld, jer, selv. Do not mark the stød.

Deck B, tool output kept, a native should hear: the day names (g of dag silent; onsdag's o), ligeud, stationen, toilettet, forældre, for as foh, boede and arbejdede, fabrik, eventuelt, endelig, afhænger, dejlig. Left out because the tool looked wrong: frokost, regningen, banegården, hvordan, overfor, om søndagen, kæreste, dygtig. job, formiddag, osten against ost, and "at huset" were not used. Deck A, tool output kept: fordi FOH-ree, aldrig AL-reey, hvordan VOH-ran, hvornår VOH-naw, kvart kvat, København koe-buhn-HAWN, Amerika and amerikaner and amerikansk with first-syllable stress. Questions uses hvad hedder han because hvad hedder du is already in About me. Lesson 1, tool output kept: fordi, aldrig, undskyld OON-skewl, jer yeh, selv sehlv, København, Amerika. Not used in an example: café KA-fuh, idé EE-dhuh, syv seww. Lesson 3, tool output kept: forældre, stationen, toilettet, ligeud, boede, arbejdede, gik geek, eventuelt, fabrik, dygtig, dejlig, endelig, rødt, for foh, koster KOHS-tuh, havde, København. bedstemor and bedstefar were not used.

# Lead note: en-da stage 1

## Where the work is

Branch `cursor/en-da`. Draft PR https://github.com/KyronEpperson/Lang-App/pull/8. Files from this stage:

- `docs/profiles/en-da.md`
- `tools/target/da/profile.json`
- `tools/target/da/respell.js`
- `docs/briefs/en-da-lead.md` (this note)

Not done: no decision record, no lessons, no decks, no app edits, no other course touched. Stage 1 stops here.

## What to do

Read `docs/profiles/en-da.md` §1, §2.3, §2.5, §6 (including §6.5), §7, §8, §10, and §11. The lesson table and the five sample cards per deck are the contract. Done when the decision record accepts or replaces those, in particular the vowel rule, `accents: false`, *du* as the only produced "you", and the one added lesson.

## Decisions to record

1. **26 lessons, one added.** All 25 roadmap items stay. `en-et` moves to the start of stage 2, before pronouns. UBC teaches indefinite nouns in week 6; this course needs gender on every noun the standing rule will touch. `inversion` moves up next to `negation` and before `questions`. UBC week 3 already pairs negation with SVA. `traps` is the one added lesson, last, and it points at the Traps deck. Compliments is pointed at from `likes`, because a second new lesson is not allowed. Saying no would put gender back after numbers, leave inversion in stage 3, and leave one of the two Watch-out decks without a lesson.
2. **Standing rule is gender plus verb second and *ikke*.** Not person endings. The present is one *-r*. The keyword regex was tested; "the verb ending is -r" does not match, and "min agrees with the noun" does not match either. A possessive hinge has to say "neuter" or "en-word". Saying no would make writers hunt for a German-style case rule Danish does not have.
3. **`du` everywhere; *De* is recognition only.** Wiktionary's pronoun table labels *De* formal and uncommon. Politeness is *tak* and *gerne*, not *venligst*. Every "you" is cued "(to one person)" or "(to several people)". Saying no would copy the German *Sie*-first course onto Danish.
4. **House spelling: write the comma before *at / fordi / hvis / når*.** Both comma systems stay legal after the 2024 dictionary; the course writes the comma because that is where the word order changes. *å* not *aa*, except the local *Aa* in Aarhus, Aalborg and Aabenraa. Small letters for days, months, languages and nationalities.
5. **`accents: false`, keys `æ ø å é`.** If the flag were true, the app would fold *å* to *a* (*får* → *far*) and *æ* to *ae*. *ø* would not fold. The course does not need an app change. Writers still mark `!strict` when the validator's fold equates *får/far* or *én/en*. Saying no (`accents: true` with no app change) would grade those pairs as "almost".
6. **Pron is required, generated, and it does not mark the stød.** Soft *d* is `dh`, not "th". Swallowed endings are `uh / uhn / uhdh`. *hun* and *hund* are both `hoon`. Saying no would mean either no aid, or a stød mark the rules cannot get right.
7. **The vowel rule is the one to argue about.** Short *i* is `eh` and short *o* is `aw` only when the spelling looks closed. *ikke* and *komme* come out right. *formiddag*, *osten* vs *ost*, and *job* do not. See §6.5.

## Register, already applied

*du* to strangers and friends. *De / Dem / Deres* only as a recognition check, always capital in model answers. Plural "you" is *I / jer / jeres*. Prompts say "(to one person)" or "(to several people)". The café line is *Jeg vil gerne have …, tak.*

## App changes needed

None, if `accents` stays false. Listed in the profile in case someone later turns the flag on: (1) do not strip the ring from *å*, (2) do not map *æ* to *ae*, (3) optional, do not fold *é* on *én/en* and *ét/et*. Without those, the course keeps `accents: false` and a missing *æ, ø, å, é* is wrong.

## Pron tool: enforce these

From `source/`: `node tools/target/da/respell.js "<text>"` prints `<text> -> <pron>`. `node tools/target/da/respell.js --pattern` prints the regex. Writers paste the tool's output. They do not edit a pron.

| Word | Output | What a writer does |
|---|---|---|
| mad | `madh` | Soft d. Do not "correct" it to a hard d or to th. |
| gade | `GA-dhuh` | Soft d, swallowed e. |
| huset | `HOO-suhdh` | The t of -et is dh. |
| land / kold | `lan` / `kawl` | Silent d. |
| hun / hund | `hoon` / `hoon` | Same string. The stød is taught by ear, not in the pron. |
| mor / mord | `moh` / `moh` | Same. far `fa` and får `faw` stay different. |
| ikke | `EH-guh` | Short i, and kk with no puff written as g. |
| det / der | `deh` / `deh` | The aid cannot tell them apart. |
| at spise | `aw SPEE-suh` | Infinitive at sounds like og. |
| at du kommer | `a doo KAW-muh` | Conjunction before a pronoun is `a`. Do not use *at huset…*; that comes out `aw`, which is wrong. |
| femogtyve | `fehm-aw-TEW-wuh` | The og in the middle is aw. |
| havde | `HA-dhuh` | Careful form. Fast speech drops dh too. Do not hand-write "ha-e". |
| tirsdag | `TEE-sdaw` | Rough. The g of dag is silent. Trust the voice, keep the tool's string. |
| københavn | `koe-buhn-HAWN` | Listed stress. The least defended listing in the word list. |
| job | `yohb` | Wrong length. Avoid the word, or add it to LEX after a native check. Do not silently rewrite the pron. |

A four-syllable word with default stress prints `stress unchecked` on stderr (*amerikaner, eventuelt, stationen*). Stdout is still the pron line. Report those; do not fix them in the deck.

## Evidence, keep at this strength

- DanskGrammatik's mistakes page is the source of the wrong→right pairs. The page says a native has not checked it, and the audio is synthetic. Do not upgrade those pairs to a study.
- Holmes & Lundskær-Nielsen's preview is the source of "about 75 per cent common gender" and of the terms common gender / neuter. It is a preview, not the whole book.
- Wikipedia's Danish phonology page is the source for soft *d* (an approximant, often heard as [l], rarely a fricative), the stød, Copenhagen [tsʰ], and coda *r*. Grønnum and Basbøll were not opened.
- Schachtenhaufen is the source for "about half of schwas assimilate, about a quarter are lost" in DanPASS (27 Copenhagen speakers), and for keeping `uh` in the citation form.
- Wiktionary was opened for *at, det, jeg, mig, dig, vil*. *sig, til, hvor, havde, dag* and the number list were not opened as IPA pages. They are marked [inference] in §6.5.
- UBC DANI 100 2022W is the source of the week order. Moving `en-et` earlier than week 6 is this profile's choice, not UBC's.
- No enrollment study of US learners was opened. The "partner / Copenhagen / family" sentence is [inference].

## Placeholders

- Brand word: `Dansk`.
- The seven level titles are the German course's list (Beginner, Traveler, Explorer, Speaker, Conversationalist, Storyteller, Master). They are placeholders.
- *Goddag* is the afternoon string because the app wants four clock greetings. *hej* is the greeting the lesson teaches. The clock assignment is unverified.
- *halv tre* = 2:30 is taught as the house fact. The clock page was not re-opened.
