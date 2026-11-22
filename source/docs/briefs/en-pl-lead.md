PROGRESS (updated 2026-11-21 19:53 CST)
Course: en-pl   Branch: cursor/en-pl   PR: https://github.com/KyronEpperson/Lang-App/pull/9
Done: research brief, research, pron tool, lead note, decisions, briefs, deck A
Next: deck B, lesson 1, lesson 2, lesson 3
Checks: deck A node --check passed. 9 decks, 162 cards, 27 dialogues, 18 examples, 9 patterns. Partial validator reported no lines about these files. Full course not run. Lexicon fixes wait until the other writers finish.
Models used: research brief = no model (filled from the template); research and pron tool = grok-4.7-xhigh; decisions = grok-4.7; briefs = mk_briefs.py; deck A = grok-4.7-high
State: WORKING

Deck A, tool output kept. A native should hear: Sześć złotych shehzh'j' ZWOH-tihkh, Dziesięć złotych JYEH-shyehnyj' ZWOH-tihkh, Dzień dobry państwu PAHNY-stfoo, To jest mój mąż mohNsh, żółw zhoowf, barszcz bahrshch, Wrocławia vrohts-WAH-vyah, Wrocławiu vrohts-WAH-vyoo. muzyka and uniwersytet use the careful stress the profile asks for.

# Lead note: en-pl stage 1

## Where the work is

Branch `cursor/en-pl`. Draft PR https://github.com/KyronEpperson/Lang-App/pull/9.

Files: `docs/profiles/en-pl.md`, `tools/target/pl/profile.json`, `tools/target/pl/respell.js`, this note.

Not done: no lesson files, no deck files, no edits to the app or to any other course, no `docs/briefs/en-pl-decisions.md`, no commit, no push.

## What to do

Read §2 (the you-form rule), §4 (which cases, and the trap list), §6.5 (where the aid is wrong), §7 (the standing-rule regex), §8 (the 27 lessons), and §10 (accents false). Done when those six decisions are answered YES or CHANGE. The sample cards in §9 are there so a writer can see the level. They are not a deck.

## Decisions to record

1. **Four cases drilled.** Accusative, instrumental, genitive, locative, plus the nominative as the base form. Dative and vocative are named once and not drilled. The roadmap already had those four lessons. Hurra's contents teach locative (*miejscownik*) and teach dative mainly as *podoba mi się*, so the locative stays and the dative does not become a lesson. "No" would mean either a fifth case lesson or dropping locative.

2. **You-form.** Learners produce *pan* / *pani* plus a third-person verb for every "you" (*Pan jest*, never *Pan jesteś*). They only recognize *ty* (*masz, jesteś*), plural formal *państwo / panowie / panie*, and *Możemy mówić sobie na ty?* They never type a *ty* answer. "No" would mean producing *ty* as well, which this rule refuses.

3. **accents false.** The app folds *ą ę ó ć ń ś ź ż*. Those marks are often the case (*wodą* / *woda*). *ł* does not fold. Fill items whose only contrast is a folded pair still need `!strict`, because the validator requires it. "No" would score a missing hook as "almost" and hide the case.

4. **One added lesson.** `traps` is last and points at Traps for English speakers. Compliments is pointed at from the existing `adjectives` lesson. 27 lessons. Roadmap order is unchanged. "No" would leave one of those two decks with no lesson, and a second new lesson is not allowed.

5. **Careful stress in the aid.** The aid marks antepenultimate stress on a closed list (*muzyka*, the Bielec *-ika* words, *Ameryka*, *uniwersytet*, four numbers) and ignores *-śmy* on a past participle. Colloquial speech, and possibly the `pl-PL` voice, uses penultimate there. This is the decision I am least sure of. "No" would mean penultimate on every word, which is simpler and may match the audio, and would make *muzyka* and *czterysta* wrong for careful speech.

6. **Banner greetings.** Morning and afternoon are both *Dzień dobry*. Evening and the late-night slot are both *Dobry wieczór*. *Dobranoc* is a lesson item, not the 22:00 banner. Marcjanik (2006) says *Dobranoc* is for when someone will soon sleep, and can sound like mockery in a shop. "No" would put *Dobranoc* on the late-night slot.

7. **Standing rule.** Gender agreement in every lesson, and the four drilled cases once they exist. The regex does not contain dative or vocative. "No" would be a different pair of hinges. Seven cases cannot be the rule.

8. **Voicing.** The aid devoices a final consonant before a vowel or a sonorant (Warsaw / north). Kraków voicing in that position is named and not shown. "No" would be the southern rule, which the `pl-PL` voice is less likely to speak.

## Register, already applied

Standard Polish, `pl-PL`. Learners produce *pan* / *pani* with the third person, lowercase except at the start of a sentence. *ty* is recognition only. *Dzień dobry* is the stranger's hello all day; *Dobry wieczór* is for when it is dark; *Dobranoc* is private. A compliment is answered with *Dziękuję* or *Dziękuję bardzo*.

## App changes needed

None. With `accents` false, a missing diacritic is already wrong. The nine letters are on the accent bar via `keys`. A missing hyphen is still "almost"; this course does not test hyphens.

## Pron tool: enforce these

From `source/`: `node tools/target/pl/respell.js "<whole line>"`. Paste the output. Do not respell word by word, and do not edit the capitals.

| Word or line | Output | What a writer does |
|---|---|---|
| proszę / prosię | `PROH-sheh` / `PROH-shyeh` | Keep both. This is the *ś* / *sz* contrast. |
| pięć / Pięć złotych. | `pyehnych'` / `pyehnyj' ZWOH-tihkh` | Run the whole line. *ć* voices before *z*. |
| Pan jest z Krakowa. | `pahn yehst s krah-KOH-vah` | *z* is *s* here, because *k* decides. |
| muzyka | `MOO-zih-kah` | Music noun only. Do not use the genitive of *muzyk*. |
| jesteśmy / robiliśmy | `yeh-STEH-sh'mih` / `roh-BYEE-lee-sh'mih` | Present stays penultimate. Past *-śmy* is ignored. |
| jabłko | `YAHBW-koh` | Known limit: the *b* is kept. Do not build a card on it. |
| Chicago | `khee-TSAH-goh` | Do not use it. Say *Jestem z Polski*. |

## Evidence, keep at this strength

- PolskiCert's four English pairs (*do praca*, *Jestem lekarz*, *o egzamin*, *mój brat*) are a teaching site's examples, not a counted study.
- lingology's false friends are written for Poles learning English. The course reverses them. The books named on that page were not opened.
- 529,324 Polish speakers is a secondary compilation (millennialcities, citing ACS B16001). The Bureau schema was opened and has no count. WBEZ's Chicago facts are the stronger learner evidence.
- The Wrocław A1 card and the GVSU PDF named in the roadmap were not opened. Locative stays because Hurra's contents include it, not because those PDFs were checked.
- Careful stress versus the colloquial penultimate is described by Wikipedia and by the Wiktionary *Ameryka* entry. The voice was not listened to.

## Placeholders

Brand word: *Polski*. The seven level titles are the same list as the Spanish course (Beginner through Master), kept as a house placeholder, not a Polish grammar choice. *polityka* and *republika* are on the careful-stress list by pattern; their own dictionary entries were not opened.
