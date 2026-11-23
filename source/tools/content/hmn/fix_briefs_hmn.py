"""Post-process the briefs written by mk_briefs_ko.py for hmn (scratch tool of the hmn-en stage-1 lead)."""
import io, os
B = '/home/claude/docs/briefs/'
S = '/tmp/claude-0/-home-claude/d98f3bd7-8852-52e0-916f-9f67ac9e0f17/scratchpad/p2'

def rd(k): return io.open(B + 'hmn-%s.md' % k, encoding='utf8').read()
def wr(k, s): io.open(B + 'hmn-%s.md' % k, 'w', encoding='utf8').write(s)
def rep(s, a, b, k):
    assert a in s, (k, a[:70]); return s.replace(a, b)

COMMON_FIX = [
 ("the Korean decks map by position to rows 1–20)", "the Korean decks map by position to rows 1–21; rows 22–25 are hmn-en additions)"),
 ("The Chinese course (`tools/content/zh/`, finished and reviewed, same reference course; `tools/content/zh/PRON-RULES.md`) is the closest example: for every", "Pronunciation aid: for every"),
 ("No Korean characters may remain in your files; remove the TRANSLATE/ADAPT banners.", "No Korean (Hangul) and no Vietnamese placeholder text may remain in your files (`check.js` error E1); remove the TRANSLATE/ADAPT banners and the lead's scaffold comments once your file is done."),
 ("they will still be Korean while you work — ignore validator lines about them.", "they will still be Korean while you work — ignore validator and guard lines about them (the ownership table in the HMONG RULES below says which lesson and deck is whose)."),
 ("Report back as the brief says, plus specific strings a native speaker should double-check.", "Report back as the brief says (files, counts, the last line of every check, every deviation with its reason, every NEW-WORDS and ALLOW row you added), plus specific strings a native speaker should double-check."),
]

OWN = """| Role | Files (edit only these) | Lessons and content |
|---|---|---|
| A | `decks.js`, `extra.js`, `meta.js`, `deviations.a.json` | all 25 decks (DECKNAMES.md), DIALOG, EXAMPLES, PATTERNS, PAUSE sets, IDIOMS, GROUPS / TAGS / DESC / GOALS / PLAN_PRESETS / TITLES / PAUSE_LABELS |
| B | `lessons.js`, `practice.js`, `deviations.b.json` | alphabet, pron, articles, be, polite, tense, prep, smalltalk, phrasal, numbers, email, idioms |
| C | `more/a1.js`, `deviations.c.json` | it-there, plurals, present, questions, third-s, **final-sounds** (copied from vi-en), countable, object-have, can-like, continuous, past, irregular-past, the, adjectives, going-to, joining |
| D | `more/a2.js`, `more/b1.js`, `deviations.d.json` | past-continuous, will, perfect, modals, to-ing, articles-2, first-conditional, relative, **he-she-it** (new, written at the end of a2.js) · perfect-2, narrative, conditionals, passive, reported |
| I | `tools/i18n/hmn/ui.json`, `roadmap.json`, `NOTES.md`, `NEW-WORDS.tsv` | the interface |
| everyone (append only, with `>>`) | `tools/content/hmn/NEW-WORDS.tsv`, `tools/content/hmn/ALLOW.txt` | sourced new words; English words allowed inside Hmong text |
| lead only | `profile.json`, `deviations.json`, `DECKNAMES.md`, `check.js`, `parity_merged.js`, `pron_check.js`, `pron_lookup.json`, `mk_briefs_hmn.py`, `fix_briefs_hmn.py` | read them, never edit |"""

LOC = """**Parity-bound items (declare each in YOUR fragment, one line, e.g. `"be#5": "localisation (hmn-en, profile §9): Korean setting replaced with the learner's own, grammar point unchanged: Seoul → St. Paul"`; checks are `"<id>#check<i>"`, deck cards go under `decks` keyed by the deck index as a string, `"1"` = deck 2):**

| Owner | Item | Change (use exactly this, so all files agree) |
|---|---|---|
| A | deck 2 (`decks["1"]`) cards 0, 4, 5 | My name is Mai. · I'm from Minnesota. · I live in St. Paul. |
| A | deck 3 (`"2"`) card 12 | Do you speak Hmong? |
| A | deck 5 (`"4"`) card 0 | How do I get to the bus station? |
| A | deck 6 (`"5"`) cards 4, 6 | I'll have the chicken. · Not too spicy, please. |
| A | deck 10 (`"9"`) card 6 | Have you been to Laos? |
| A | deck 12 (`"11"`) card 8 | Your English is really good! |
| A | deck 14 (`"13"`) cards 0, 1 | Hello, this is Mai. · Can I speak to Mr. Vang? |
| A | deck 15 (`"14"`) card 8 | I have a reservation under Vang. |
| A | deck 16 (`"15"`) card 15 | I need a Hmong interpreter. (*neeg txhais lus*, MDH) |
| A | deck 20 (`"19"`) card 14 | Who's your favorite player? (DIALOG key renamed with it) |
| B | be#check0 (all options), be#check1 (all options), be#5, be#8, prep#4 | K-pop → music (*nkauj*); Seoul → St. Paul (prep#4 keeps the «in the St. Paul» distractor) |
| B | tense#2 · numbers#9 · phrasal#2 | Jeju → Thailand (*Thaib teb*) · won → dollars (*daus las*) · Daegu → Fresno |
| B | email#check1 (options 0 and 2) · idioms#9 | "You suffered a lot." / "Good suffering." → "Thanks for all your hard works." / "You did a hard work." (answer index unchanged, as kn and ur) · distractor tiger → cat |
| C | present#2, countable#4 · present#10, third-s#0, irregular-past#11, going-to#0 | Seoul → St. Paul · Busan → Fresno |
| C | can-like#0 · irregular-past#8 | Korean → Hmong · Jeju → Thailand |
| C | final-sounds (vi copy: not parity-compared, no deviation needed) | Hanoi → St. Paul (the `{{ex}}` row *My brother works in Hanoi.* and its practice items) |
| D | will#check2, will#4, perfect#check2, perfect#4 | Jeju → Thailand |
| D | perfect#2 · perfect#6, perfect#10 · perfect#8 | kimchi → pho (*fawm*) · Korea → Laos (*Nplog teb*) · Busan → Fresno |
| D | articles-2#1 · relative#12 | Korea → Minnesota (state name, no article: keeps the point) · speaks Korean → speaks Chinese (*lus Suav*) |
| D | passive#1, passive#8 · passive#10 | made in Korea → made in Thailand · Han Kang → Kao Kalia Yang (Hmong American author) |

**Not parity-checked, localise freely with the same map (no deviation):** lesson `{{ex:}}` rows and prose, DIALOG, EXAMPLES, PAUSE sets, Hmong prompts (Minji → Mai, Jisoo / Minho → Pa / Tou, Mr. Kim → Mr. Vang, Ms. Park → Ms. Yang, Jenny Park → Jenny Yang, Seoul National University → the University of Minnesota, Gangnam → the airport, BTS → a famous singer, subway → bus, steak → chicken (*nqaij qaib*), kimchi → chicken or pho (*fawm*), Korean food → Hmong food with an attested Hmong side: sticky rice (*mov nplaum*), pho (*fawm*), Hmong New Year (*noj peb caug*), *qeej*, *paj ntaub* with a gloss; papaya salad has no attested Hmong word, so do not use it). Every replacement needs an attested Hmong counterpart in the prompt or translation; the ones in the table have one (glossary, NEW-WORDS or ALLOW). `check.js` (E3) lists every Korea item still on the English side.

**Never:** *I'm from Laos.* as a default (many learners were born in the US or Thailand: profile §9); religion scenes in A1; clan or dialect jokes; war and refugee topics in small talk; alcohol where the shared string does not require it. Green Hmong forms only in a neutral note («Hmoob Leeg: …»)."""

NOTE = """

---

# HMONG RULES (common to every hmn-en brief; binding; where they differ from PHASE2-BRIEF, `tools/hmong/README.md` or the profile, these win)

## 0. What the owner ruled, and what that changes
- **Build and release without waiting for a native reader; user bug reports will correct it later.** So the profile's "[native check]" marks and §11 "do not release without a native reader" are not stop signs, and PHASE2-BRIEF's "a native speaker will read it" means: write as if one will. The decisions already taken for the sister course hold here too: `docs/briefs/en-hmn-decisions.md` (days `hnub Monday` … `hnub Sunday`; one million `ib plhom`, note "also ib lab"; ten thousand `kaum txhiab`; zero `ntxaiv`; dollar `daus las`; final particles `os`, `los` to produce, `yam`, `ko` recognition only; loans as US agencies keep them; religion-neutral wording; kinship by the speaker's sex (en-hmn writes «(said by a man)»; in this course's Hmong text write «(txiv neej hais)» / «(poj niam hais)»); `tag kis` tomorrow; `lim tiam` week; `Nyob zoo` at any time of day; never `pov` as a question word).
- **But Hmong is a low-resource language for you. Your Hmong from memory is not reliable, so the course is built only from attested material** (the glossary rule, §1). PHASE2-BRIEF says the shell has no internet: for this course you MAY use web search and fetch, **only** to find a source for a Hmong word (prefer US state and county health, school and government Hmong pages, the EnglishConnect Hmong edition, Wiktionary).

## 1. THE GLOSSARY RULE
1. **Every Hmong word** you write, anywhere (meanings, notes, titles, blurbs, bodies, `why`, hints, prompts, check questions and explanations, deck and group names, DESC, GOALS, PAUSE labels, interface strings), must be in `tools/hmong/GLOSSARY.tsv` (1,274 sourced rows), `tools/target/hmn/NEW-WORDS.tsv` (the sister course's sourced additions) or `tools/content/hmn/NEW-WORDS.tsv` (this course's; the interface also `tools/i18n/hmn/NEW-WORDS.tsv`). Spaces and hyphens are ignored (`menyuam` = `me nyuam`). `coverage.js` counts a syllable as covered when it occurs inside any multi-word headword, **but that is how the tool counts, not a licence**: a syllable you only find inside a compound may be used in that compound, or with the meaning its own row gives; never build a new compound out of syllables (coverage cannot see an invented compound of real syllables; the reviewer reads for them).
2. **Copy, never type from memory.** Copy the spelling of column 1, including the tone letter and the forms that change with tone (`tus` / `tug`, `puas` / `pua`, `caug` / `caum`). A wrong tone letter is a different word (`pob` ball, `pov` throw, `pog` grandmother).
3. **A word you need that is not there:** find it in a source you open, then append one row to `tools/content/hmn/NEW-WORDS.tsv` **before** you use it, with `>>` only (never rewrite the file: other writers append at the same time). Columns, tab-separated: `hmong · english · pos_or_classifier · note · source`. The note starts with your role and where you use it and quotes the source line; the source is the URL you opened. No row without a URL. If you cannot source it, rephrase with glossary words, or keep the English word (§3). README rule 2 (`NEW-WORDS-<writer>.tsv`, source "none") does NOT apply; never write under `tools/target/hmn/` (another course, five agents) or `tools/hmong/` (protected).
4. **Never** invent a word or a compound because it "should" exist; never guess a tone letter; never respell English in RPA (profile §6: `bus` would read as *ba* + low tone); no Green-only spellings (`dl-`, `aa`), no `HMoob` (write `Hmoob`), no diacritics, no digit reduplication (write `kheej kheej`).
5. **Rows already settled or limited:** `SOURCES DISAGREE` rows follow en-hmn-decisions.md; a WV-only form only where no better-sourced one exists; notes saying "avoid in course content" are obeyed. Words the profile flags as unattested (*suab*, *kom*, *tsiaj ntawv*, *lawd*, *nkees*, *ntsab*, *hais txog*) need a NEW-WORDS row with a source before use, like any other. Already sourced by the lead (in `tools/content/hmn/NEW-WORDS.tsv`): *mov nplaum* sticky rice, *mov dawb* white rice, *txiv taub ntoos* green papaya (not papaya salad, which has no Hmong word: English lines only), *txiv av paum* apple, *xib fwb* teacher, *tsev kawm ntawv* school, *hloov* to change, *chav kawm* class / classroom.
6. **English words inside Hmong text** are allowed only when they are in `tools/hmong/ALLOW.txt` or `tools/content/hmn/ALLOW.txt` (grammar terms, app words, names, places; read both), or when they are English being taught or quoted. To add one, append to `tools/content/hmn/ALLOW.txt` with `>>` and a trailing comment (role, why). Never append to `tools/hmong/ALLOW.txt`.

## 2. How to write the Hmong
- **Short sentences on attested patterns.** Model every sentence on (a) the sister course's finished Hmong sentences: `tools/target/hmn/decks-a.js`, `decks-b.js`, `extra-a.js`, `extra-b.js`, `lessons-1.js`, `lessons-2.js` (`lessons-3.js` is still being written: read it, but it may change). **Reuse them**: if a sister card, example or `{{ex:}}` row says what you need, copy its Hmong verbatim. (b) the profile's sample lines (§2, §3, §4, §7, §8) and the glossary's phrase rows (`Kuv tsis nkag siab, thov hais dua os`, `koj puas hais lus Askiv?`, `Nag hmo kuv mus tom khw`). Prefer one plain clause per sentence; Hmong prose readers include elders who read RPA slowly (profile §5).
- **Register:** `koj`; bare verbs for instructions (Nyeem, Sau, Mloog, Teb, Xaiv); politeness with `thov`, `… puas tau?`, final `os`; at most one `!` per screen; error marks ✗ / ✓ (`I teacher. ✗ → I'm a teacher. ✓`).
- **Grammar terms stay in English** (article, plural, singular, noun, verb, adjective, adverb, pronoun, preposition, tense, past tense, present tense, Simple Present, Simple Past, Present Perfect, continuous, -s, -ed, -ing, sentence, subject, IPA, stress, question tag, classifier). Introduce noun / verb / adjective / adverb / pronoun / preposition once with the EnglishConnect phrase in brackets (profile §3 table), then use the English word alone. Explain with plain glossary words: lo lus (word), lus Askiv, lus Hmoob, nug (ask), teb (answer), raug (correct), tsis yog (not right), nag hmo, hnub no, tag kis, tam sim no, ib tug / ob tug, cov. Never coin a Hmong grammar term.
- **Spelling:** syllable-spaced as column 1 (`me nyuam`, `poj niam`, `hauj lwm`); `Askiv`, `Amelika` as the glossary writes them; capitals for Hmoob, Askiv, Amelika, Nplog teb, Thaib teb and names; Western punctuation and digits. English words in plain-text Hmong fields are not quoted; in lesson HTML they are `<b>`.
- **Every `why`, check question, check explanation, lesson blurb, mc question and type hint contains Hmong words** from `labels.cueTest` (`check.js` E2; the validator only enforces it for mc questions and type hints).
- **Names:** English spelling in both languages (Mai, Tou, Pa, Kia, Nou, Chue; Mr. Vang, Ms. Yang, Xiong, Lee, Thao, Vue, Moua, Her, Lor).

## 3. Loanwords and the "meaning = English" rule
`validate.js` (`lib.js` `nativeTester`, `nativeScript: null`) fails a card meaning or note, `{{ex:}}` meaning, dialogue or example translation, pattern meaning, pause or idiom gloss, order `p`, fill `p` or type `p` that is **equal to its English** after lower-casing and removing spaces and `. ! ? , … " “ ” ~`. Brackets are not removed, so `pizza (pizza)` passes the validator, but `check.js` W3 flags it: never do that. Convention, in this order:
1. An attested Hmong word: rice → `mov`, coffee → `kav fes`, milk → `mis nyuj`, banana → `txiv tsawb`, salad → `xalas`, car → `lub tsheb`, bus → `tsheb ntiav`.
2. Where US Hmong texts keep the English word (ALLOW.txt: pizza, hamburger, sandwich, cheese, orange, OK, email, Facebook …), write it **after an attested Hmong head noun that names its literal category**, the way the agencies do (`mob cancer`, `txiv orange`, `hnub Monday`, `kas cees HIV`): heads from the glossary only, e.g. `txiv` (fruit), `mob` (illness), `hnub` (day), `tsheb` (vehicle), `tsev` (house, building), `khw` (store, market), `mov` (meal), `nqaij` (meat), `zaub` (vegetables), `neeg` (person): hotel → «tsev hotel», McDonald's → «khw McDonald's». Add the English word to `tools/content/hmn/ALLOW.txt` if neither ALLOW file has it.
3. Letters: the alphabet deck meaning is «A loj, a me» (`loj` big, `me` small: capital A, small a), as `docs/briefs/alphabet-spec.md` asks («letter A a»). Text abbreviations (LOL, BRB, FYI …): a short Hmong gloss of what the abbreviation says, from glossary words (LOL → `luag` laugh …), with the English full form in the note.
4. Otherwise a short Hmong explanation from glossary words.
5. Last resort (A only): replace the card with a deck deviation and a one-line reason.

## 4. Localise while you write (the Korean setting of the shared English side)
The shared English side comes from the course for Korean speakers. Every reviewer of the sibling courses found the Korean setting left in. Change it now, with these exact choices (St. Paul / Minneapolis, Fresno, Sacramento, Milwaukee: the Hmong American centres, profile §5).

""" + LOC + """

## 5. Typed answers: pin the accepted English (the 2026-11-23 reviews found this bug in every sibling)
For every `type` item (and every mc / fill prompt that names the English to choose):
1. **Person:** the prompt's subject matches the accepted answers. Hmong `nws` = he / she / it: every prompt with `nws` whose answer has he / she / it / him / her / his / its carries a cue right after it, «nws (txiv neej)» man, «nws (poj niam)» woman, «nws (tsiaj)» animal, «nws (khoom)» thing, or uses a name instead (`check.js` E4). `wb / neb / nkawd` answer as we / you / they; never expect "we two".
2. **Tense:** Hmong does not mark tense. Every prompt whose answer is not Simple Present starts with a time word (`Nag hmo`, `Tag kis`, `Hnub no`, `Tam sim no` …) or ends with an English cue in brackets: «(past tense)», «(use will)», «(use going to)», «(use have)», «(Present Perfect)», «(use be + -ing)» (`check.js` W1 lists the candidates: read each). Also cue a/the, this/that, much/many where the Hmong does not decide: «(the)», «(a)», «(this)».
3. **Every natural correct answer is accepted.** In shared lessons do not change the English list unless an alternative is simply correct English for the prompt: then add it and declare it (`"<id>#<i>": "typed-answer pass (hmn-en): '<alternative>' accepted (…)"`, as `tools/content/ur/deviations.review.json` does). In hmn-only lessons (he-she-it) list all natural answers yourself.
4. **Full forms:** the generator adds the full form of most contractions (`docs/PIPELINE.md` §2); `validate.js` fails if one is missing in the generated pack. A tag question (`…, isn't it`, `…, don't you`) gets `{nc: 1}` as 7th element so no "is not it" is generated (`check.js` W2).
5. Run `node tools/content/hmn/check.js <pack> --only <your ids> --list-type` and read every one of your type items against its prompt before reporting.

## 6. Who owns what
""" + OWN + """

## 7. Checks (run from /home/claude; resolve every line about your own files)
```
S=""" + S + """; mkdir -p $S
node tools/content/gen.js hmn $S/hmn-<x>.js                       # <x> = a, b, c, d (your role); never without the output path
node tools/content/validate.js hmn $S/hmn-<x>.js | grep -iE "<your ids or deck names>"
node tools/content/hmn/parity_merged.js $S/hmn-<x>.js tools/content/hmn/deviations.<x>.json   # parity with your fragment merged (a scratch copy; deviations.json untouched)
node tools/content/lint.js hmn $S/hmn-<x>.js
node tools/content/alphabet_check.js hmn $S/hmn-<x>.js            # B and A (alphabet lesson and deck 21)
node tools/content/hmn/check.js $S/hmn-<x>.js --only <your ids, deck names or indexes>
node tools/content/hmn/pron_check.js summary                      # IPA agreement across files (word and phrase conflicts)
cat tools/hmong/ALLOW.txt tools/content/hmn/ALLOW.txt > $S/hmn-allow.txt
(cat tools/hmong/GLOSSARY.tsv; tail -n +2 tools/target/hmn/NEW-WORDS.tsv; tail -n +2 tools/content/hmn/NEW-WORDS.tsv; tail -n +2 tools/i18n/hmn/NEW-WORDS.tsv) > $S/hmn-gloss.tsv
node tools/hmong/rpa_check.js $S/hmn-<x>.js --allow $S/hmn-allow.txt
node tools/hmong/coverage.js $S/hmn-<x>.js --glossary $S/hmn-gloss.tsv --allow $S/hmn-allow.txt
node --check <each file you edited>
```
- Rebuild the two merged files every time you check: the NEW-WORDS and ALLOW files are appended to while you work.
- **rpa_check:** every ERROR in your strings is a fix (an illegal spelling, or an English word that is in neither ALLOW file). Warnings: "run-together" is expected for joined glossary spellings (`Askiv`, `Amelika`); a marginal-onset warning on an English word (`go`) and a capitalised-name warning on a name in ALLOW are expected; every other warning is read and fixed or explained in your report.
- **coverage:** every word under NOT IN GLOSSARY in your strings is a fix (copy the glossary form, or add a sourced NEW-WORDS row, or rephrase). "maybe English" lists legal-RPA English words (a, is, am, go): check each is really English being quoted.
- `check.js`: no ERROR in your strings; read every WARNING.
- **Transient lines while all five write at once:** until A has renamed the decks, B, C and D see "lesson deck" / "deck exists" / deck-position lines for their own lessons: those come from A's renaming, not from you, and they disappear once A has renamed the decks (always link with the DECKNAMES name). Once D has written he-she-it, the others see "lessons extra: he-she-it" from parity_merged.js with only their own fragment: that line is D's (run `parity_merged.js` with no fragment argument to merge all fragments).
- Other writers' files are mid-edit: lines about them are not yours. A syntax error in someone else's file: wait a minute and retry.
- One-line JS must not contain `//` comments (the pack validator rejects `//`); use `/* */`.
"""

R_NOTE = NOTE.replace("For every `type` item (and every mc / fill prompt that names the English to choose):", "For every `type` item (and every mc / fill prompt that names the English to choose); as reviewer, run the list over the whole course:")

A_EXTRA = """
HMN-SPECIFIC (A):
- **Decks 1–21** are renamed by position (DECKNAMES rows 1–21). **Deck 22**: `decks.js` already holds vi-en's «Âm cuối» (29 cards, copied by the lead with English targets and IPA unchanged): rename it to row 22 «Final sounds: -s, -ed» and rewrite its Vietnamese meanings and notes in Hmong (C changes the lesson's `deck:` link). **Decks 23–25** are new: write them as DECKNAMES describes, 16–20 cards each, English targets unique across all 25 decks, IPA by `tools/content/vi/PRON-RULES.md` (`pron_lookup.json` first). The lead already declared the deck count and decks 22–25 in `deviations.json`; do not declare them again.
- **Deck 18** «Pronunciation: hais ua tib zoo»: append 12–16 cards for the Hmong problems of profile §4 zone 10 and the §6 table (th, z vs s, sh / ch, b and g vs the pre-nasalised np / nk, English r and w vs RPA r and w, ship / sheep, bed / bad, cut / cot). vi-en's appended pairs (thank, she, see, ship, sip, sheep, chair, share, pie, buy, pea, bee, full, fool: IPA in `pron_lookup.json`) fit Hmong learners too; keep every target unique (deck 22 already has six, sick, bag, back, dog …). Declare them as `decks["17"]` in deviations.a.json with the card list.
- **Card notes** are where the siblings went wrong: rewrite every note for Hmong speakers (profile §4, §6, §9); never translate a note that reasons from Korean (Konglish, Korean sounds, politeness levels, the "What's up?" note, K-pop). In deck 18 and 22 notes compare with RPA letters only as comparisons (profile §6 table), never as readings.
- **Kinship cards** follow en-hmn-decisions §7: the English cover word gets both Hmong terms, marked by the speaker's sex from glossary words, e.g. *brother* → «tij laug, kwv (txiv neej hais); nus (poj niam hais)», *sister* → «muam (txiv neej hais); viv ncaus (poj niam hais)»; *grandmother* → «pog, niam tais» (no side claimed beyond *pog*). The validator fails duplicate meanings inside a deck.
- **meta.js:** GOALS labels in Hmong (they must differ from the keys travel / work / social / media); TITLES: seven level names from glossary words (or NEW-WORDS with a source); PAUSE_LABELS in Hmong; GROUPS / TAGS / DESC cover all 25 decks.
- Validator floors: ≥ 16 decks, ≥ 260 cards, DIALOG ≥ 60, EXAMPLES ≥ 40, PATTERNS ≥ 20, each PAUSE set ≥ 18, idioms ≥ 24. Dialogues, examples and patterns are not parity-checked: localise them per §4.
"""

B_EXTRA = """
HMN-SPECIFIC (B):
- `alphabet` (shared spec `docs/briefs/alphabet-spec.md`, checked by `alphabet_check.js`): RPA readers know Latin letters with other values (x = s, s ≈ sh, z, r, c, w = a vowel, q; profile §6, §8): warn that English *x*, *w*, *r* are not the RPA letters.
- `pron`: teach the IPA with the profile §6 comparison table (RPA letters as comparisons only, never as readings), then the zone-1 rule: every English final consonant is said (links to `final-sounds`, deck 22).
- `be` (core): *yog* + noun and *nyob* for place vs English am / is / are, also before adjectives (`I happy ✗`), and the over-correction `I am live ✗`.
- `prep`: Hmong verticality locatives (*pem, nram, tom, tim, ntawm, hauv, saum*) vs in / on / at.
- `numbers`: copy every Hmong number from the glossary and en-hmn-decisions §2 (`puas` / `pua`, `caug` / `caum`, `nees nkaum`, `ib plhom`, `kaum txhiab`); dollars, *fifteen / fifty* stress.
- `smalltalk`: «Koj noj mov lawm los tsis yog?» is a check-in in Hmong, *Have you eaten?* is a real question in English; clan questions are Hmong small talk, not English small talk (profile §8).
- `email`: the Hmong prompt's Jenny Park → Jenny Yang; US workplace email (health, schools, county services).
- The standing rule must hold in all 12 practice sets: half the order and half the type items hinge on an article or plural, and their `why` contains **article** or **plural**.
"""

C_TWO = """2. **`final-sounds`** (hmn-en extra lesson, profile §8): it is already in more/a1.js, copied by the lead from vi-en (after `third-s` by profile.json). Keep its ENGLISH side exactly as vi-en has it (examples, IPA, check options and answer positions, practice answers); rewrite the Vietnamese text in Hmong: a Hmong syllable ends in a vowel and the final RPA letter is a tone mark, not a sound (profile §4 zone 1, §6); McCurdy's learners dropped final /d g v/. Its `deck:` link becomes DECKNAMES row 22 «Final sounds: -s, -ed». Its `why` lines must name **plural** (the vi keywords do not count here; the validator reports 0/3 until you do). The profile's sample explanation uses *tsiaj ntawv*, *suab* and *kom*, which are NOT attested: source them (NEW-WORDS) or rephrase with glossary words. `final-sounds` is already in `deviations.json` (lead); add nothing for it.
3. The Korean-only lesson `konglish` was removed by the lead (not in hmn-en). Lessons C must explain specially (profile §8): `questions` (core; *puas* and *los tsis yog*), `plurals` (core; number + classifier, *cov*), `adjectives` (core; adjective after the noun, *tshaj*), `past` (core; no past form, *tau* / *lawm* optional), `object-have` (*kuv* = I / me / my: preview of he-she-it), `it-there` (*muaj* = have / there is; weather with no subject)."""

D_TWO = """2. **ADD the hmn-only lesson `he-she-it`** (profile §8 "Additions" 2; profile.json already places it after `object-have`; its reason is in `deviations.json`). Write it at the END of `more/a2.js` (the generator orders lessons by `lib.js` ORDER plus `lessonOrder`, not by file), as an A1 lesson: same structure and length as the other A1 lessons, `deck:"Kuv thiab kuv tsev neeg"` (DECKNAMES row 23, built by A), a 3-question check and a 12–16 item practice set in the DSL shorthand. Outline (profile §8): *nws* → he (a man), she (a woman), it (a thing or animal); subject / object / possessive he – him – his, she – her – her, it – it – its, they – them – their (Hmong *kuv* = I, me, my); *lawv* / *nkawd* → they / them, *wb* → we; one known person is *he* or *she*, never *they*; pets are often *he* / *she*. The English side is new: every item has a short, unambiguous answer, ALL natural answers are listed, every prompt with *nws* carries its cue (§5). The standing rule holds: half the order and half the type items also hinge on an article or plural (profile sketch: *She is a nurse.*, *His children are at school.*, *I saw her at the store.*, *They are my brothers.*), their `why` names **article** or **plural**. Title: the profile's «he, she, it — him, her: nws ib lo lus xwb» only if every word is attested (check *xwb*), else a glossary-only title. Record it in deviations.d.json as `"extraLessons": ["he-she-it"]`.
3. The Korean-only lesson `articles-3` was removed from b1.js by the lead (not in hmn-en). Lessons D must explain specially (profile §8): `will` / `going-to` (*yuav* covers both, plus *mam li*), `perfect` (*twb … lawm* ≈ have done, but a past time word → Simple Past), `modals` (*yuav tsum*, *tsis txhob*), `to-ing` (`bark dog ✗ → barking dog`; serial verbs), `first-conditional` (*yog* = if, also "be"), `relative` (lighter: modifiers already follow the noun), `passive` (*raug* is an adversity passive; the English passive is neutral), `reported` (*hais tias*)."""

I_EXTRA = """WHITE-HMONG-SPECIFIC (profile §3, §10; read both, and the HMONG RULES below):
- **784 strings is far more Hmong than the glossary can carry word for word. Rule:** use attested Hmong for everything the glossary and US government / health-department / school Hmong pages support. You MAY open such pages to find interface vocabulary (save, next, back, start, settings, search, share, sign in, delete, cancel, copy …); record every word you take with its URL in `tools/i18n/hmn/NEW-WORDS.tsv` (columns as `tools/content/hmn/NEW-WORDS.tsv`, append with `>>`). Keep English loans for app-specific terms with no attested Hmong word (streak, sync, quiz, deck, card, XP, level, email, password, app, online, audio …) and list every kept English word, with the reason, in `tools/i18n/hmn/NOTES.md` (model: `tools/i18n/kn/NOTES.md`: a table of fixed terms, one per concept). Simple, short sentences; no invented compounds.
- Fixed by the profile: tab labels **Hnub no** (Today), **Xyaum** (Practice), **Review**, **Lessons**, **Nyeem** (Read / Drills), **Progress**, **Feedback** (English kept where no term was found; each ≤ 8 characters); buttons as bare verbs Nyeem, Sau, Mloog, Teb, Xaiv, Qhib, Kaw, Pab, Dua; Back = rov qab; option = txoj kev xaiv; no `thov` on buttons; «Raug lawm!» for correct.
- **Counts:** number + classifier + noun is the Hmong pattern and no source gives a classifier for card or deck, so use **label + colon** («Card: {1}», «Lessons: {1}», «Hnub: {1}»): one wording for 0, 1 and many.
- **Language-name slots:** the app fills them with «Lus Askiv» / «Lus Hmoob» (`src/app.html`, the hmn language-name table), so never write «lus {1}» (it would print «lus Lus Askiv»): put the slot at the start or after a colon.
- Weekday headers: the course writes English day names after *hnub* (en-hmn-decisions §1), so keep the English three-letter forms (Mon … Sun).
- `nativeScript` is null, so the validator warns on every translation identical to its English key: each such warning must be an English-kept term listed in NOTES.md.
- `tools/i18n/hmn/roadmap.json` is a hand-made scaffold (1,822 strings; `road.py` refuses three-letter codes): fill only the `t` of the **39 English-roadmap titles** (`"roadmap": "en"`); leave every other `t` empty (empty falls back to English in the app). Grammar terms in English, as in the course.
- Guards also read the interface: `node tools/hmong/rpa_check.js tools/i18n/hmn/ui.json --allow $S/hmn-allow.txt` and `node tools/hmong/coverage.js tools/i18n/hmn/ui.json --glossary $S/hmn-gloss.tsv --allow $S/hmn-allow.txt` (merged files as in the checks section below) must show no ERROR and no word missing that is not in your NEW-WORDS file."""

I_JOB2_OLD_START = "JOB 2 — roadmap.json: 425 entries"
I_JOB2_NEW = """JOB 2 — roadmap.json: fill the `t` of the 39 entries whose `"roadmap"` is `"en"` (the English roadmap: the course Hmong speakers get), in White Hmong, short like a lesson title, no trailing period, no HTML or newlines; keep English grammar terms and quoted English as they are. Leave the other 1,783 entries empty. `road.py` refuses three-letter codes, so check with: `python3 -c "import json; r=json.load(open('tools/i18n/hmn/roadmap.json'))['road']; m=[k for k,v in r.items() if v['roadmap']=='en' and not v['t'].strip()]; print('english roadmap untranslated:', len(m), m[:5])"` (must print 0). Do NOT run `road.py new` or `new_lang.py`. Work in your own scratch subfolder `""" + S + """/hmni/`.

Proofread everything once more (one term per concept across keys; every word attested). Final reply (concise): counts, the PASS lines, the guard lines, every NEW-WORDS row you added, and a list of strings you are unsure about."""

def fix_common(s, k):
    for a, b in COMMON_FIX:
        if a in s: s = s.replace(a, b)
    return s

# ---- A
s = fix_common(rd('A'), 'A')
s = rep(s, "read tools/content/zh/deviations.json and how parity.js treats decks", "read tools/content/vi/deviations.json and how parity.js treats decks", 'A')
s = rep(s, "3. Rename the 20 decks to DECKNAMES rows 1–20 in the same order, then append the hmn-only decks DECKNAMES lists (card counts and content per profile §9) and the pronunciation pairs §9 adds. Record the deck-count and new-deck deviations.",
        "3. Rename the 21 decks to DECKNAMES rows 1–21 in the same order, rename the copied vi deck to row 22, append rows 23–25, and append the deck-18 pairs (details below). The deck count and decks 22–25 are declared by the lead; you declare deck 18 and each localised card.", 'A')
s = rep(s, "4. meta.js: GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS, TITLES, PAUSE_LABELS in White Hmong using the final deck names.\n",
        "4. meta.js: GROUPS, TAGS, DESC, GOALS, PLAN_PRESETS, TITLES, PAUSE_LABELS in White Hmong using the final deck names.\n" + A_EXTRA, 'A')
wr('A', s + NOTE)

# ---- B
s = fix_common(rd('B'), 'B')
s = rep(s, "The standing rule must hold for every practice set you own.\n", "The standing rule must hold for every practice set you own.\n" + B_EXTRA, 'B')
wr('B', s + NOTE)

# ---- C
s = fix_common(rd('C'), 'C')
i = s.index("2.  Each added lesson:"); j = s.index("\n\nOther agents own")
s = s[:i] + C_TWO + s[j:]
wr('C', s + NOTE)

# ---- D
s = fix_common(rd('D'), 'D')
i = s.index("2. \n") if "2. \n" in s else s.index("2. \n\nOther")
j = s.index("\n\nOther agents own")
s = s[:i] + D_TWO + s[j:]
wr('D', s + NOTE)

# ---- I
s = fix_common(rd('I'), 'I')
s = rep(s, "and look at `tools/i18n/zh/ui.json` and `tools/i18n/de/ui.json` as finished examples of the same job.",
        "and look at `tools/i18n/zh/ui.json`, `tools/i18n/de/ui.json` and `tools/i18n/vi/ui.json` (Latin script, `nativeScript` null) as finished examples of the same job, and `tools/i18n/kn/NOTES.md` for the notes file.", 'I')
s = rep(s, "FILES YOU OWN (edit only these): `/home/claude/tools/i18n/hmn/ui.json` and `/home/claude/tools/i18n/hmn/roadmap.json`.",
        "FILES YOU OWN (edit only these): `/home/claude/tools/i18n/hmn/ui.json`, `/home/claude/tools/i18n/hmn/roadmap.json`, `/home/claude/tools/i18n/hmn/NOTES.md` (new) and `/home/claude/tools/i18n/hmn/NEW-WORDS.tsv` (append only).", 'I')
s = rep(s, "Weekday headers must be at most three letters.\n\n", "Weekday headers must be at most three letters.\n" + I_EXTRA + "\n", 'I')
i = s.index(I_JOB2_OLD_START)
s = s[:i] + I_JOB2_NEW
wr('I', s + NOTE)

# ---- R
s = fix_common(rd('R'), 'R')
s = rep(s, "You are HMN-REVIEWER: a cold, native-level White Hmong editor and English teacher reviewing a freshly written course",
        "You are HMN-REVIEWER: a cold editor and English teacher reviewing a freshly written course", 'R')
s = rep(s, "Read it as a learner and as an editor, and FIX what you find.",
        "Read it as a learner and as an editor, and FIX what you find. Nobody on this course speaks Hmong, you included: review the Hmong for ATTESTATION (every word in the glossary or a sourced NEW-WORDS row, sentence patterns that match the sister course and the profile, tone letters copied, no Green or invented forms), for consistency of terms, and for correct teaching; the English for correctness. The owner has ruled that the course ships without a native reader.", 'R')
s = rep(s, "For what a finished review looks like, read `tools/content/de/REVIEW.md` and `tools/content/zh/REVIEW.md`, plus `tools/content/zh/PRON-RULES.md` and `tools/content/zh/pron_check.js` (a checker you can adapt).",
        "For what a finished review looks like, read `tools/content/kn/REVIEW.md` (including «Pre-merge review, 2026-11-23»), `tools/content/vi/REVIEW.md`, `docs/briefs/x-en-pr-fix.md` and `docs/reviews/x-en-prs-2026-11-23.md` (the three defect classes every sibling had), plus `tools/content/vi/PRON-RULES.md` and `tools/content/hmn/pron_check.js` (vi's checker, pointed at hmn).", 'R')
s = rep(s, "EXCEPT `profile.json` and `deviations*.json` (the English side of parity-bound items must not change — list problems instead;",
        "EXCEPT `profile.json` and the lead's and writers' `deviations*.json` (you may create your own fragment `tools/content/hmn/deviations.review.json`, shaped like `tools/content/ur/deviations.review.json`, ONLY for typed-answer widening and Korean-setting items the writers missed, one line each; otherwise the English side of parity-bound items must not change — list problems instead;", 'R')
s = rep(s, "plus the `\"t\"` fields of `tools/i18n/hmn/ui.json` and `tools/i18n/hmn/roadmap.json`.",
        "plus the `\"t\"` fields of `tools/i18n/hmn/ui.json` and `tools/i18n/hmn/roadmap.json`, `tools/i18n/hmn/NOTES.md`, and appends (with `>>`) to `tools/content/hmn/NEW-WORDS.tsv`, `tools/i18n/hmn/NEW-WORDS.tsv` and `tools/content/hmn/ALLOW.txt`.", 'R')
s = rep(s, "0. START WITH `decks.js` and `extra.js`:", "0. RUN THE GUARDS FIRST (checks section below) on the merged course and on the interface: every rpa_check ERROR, every coverage NOT IN GLOSSARY word without a sourced NEW-WORDS row, every check.js ERROR is a finding. Check that every NEW-WORDS row added by the writers quotes a source that really contains the word (open the URL). Then START WITH `decks.js` and `extra.js`:", 'R')
s = rep(s, "with no counterpart in the Chinese course.", "with no counterpart in the Vietnamese course (`pron_lookup.json`).", 'R')
s = rep(s, "`python3 tools/i18n/road.py check hmn`", "the English-roadmap check in hmn-I.md (road.py refuses three-letter codes), `node tools/content/alphabet_check.js hmn $S/hmn-r.js`, `node tools/content/hmn/check.js $S/hmn-r.js` (0 errors), `node tools/content/hmn/pron_check.js summary`, the rpa_check and coverage lines of the checks section (course pack and `tools/i18n/hmn/ui.json`)", 'R')
s = rep(s, "No Korean characters anywhere under tools/content/hmn.", "No Korean or Vietnamese text left in the course files (`check.js` E1; the regexes inside check.js itself do not count). parity must pass with all fragments merged: `node tools/content/hmn/parity_merged.js $S/hmn-r.js` (the lead merges them into deviations.json before your run; if not, this script does it in a scratch copy).", 'R')
s = rep(s, "(4) a \"For a native speaker\" top-ten list;", "(4) a \"For a native speaker\" top-ten list (the profile's §11 list of 30 is the starting point);", 'R')
wr('R', s + R_NOTE)
print('briefs fixed')
