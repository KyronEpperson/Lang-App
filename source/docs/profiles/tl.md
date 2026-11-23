# Tagalog (Filipino) speakers learning English — course profile

Course `tl-en`. Audience: adults and older teenagers whose first or main language is Tagalog-based Filipino, as written in Metro Manila. All explanations, prompts, `why`, `hint`, meanings, deck names and interface are in Filipino; answers and examples are in English. Evidence labels follow the other ko-based profiles (`zh.md`, `vi.md`, `id.md`): **[research-backed]** = a study or corpus, named, with its sample; **[curriculum convention]** = what schools, laws, style guides, reference works or apps do; **[practitioner opinion]** = a teacher's or author's position, or this profile's own inference (said so where it is mine). A study read only as an abstract is marked "abstract only". Most Philippine studies found are small, single-school error analyses; treat their percentages as indicative, not as population rates.

The author is not a native speaker of Filipino. Every Filipino sentence in this profile (sample voice lines, `why` lines, deck names, interface wording) is a proposal for a native check (§11).

## 1. Summary (10 lines max)

- Teach **American English** (`en-US`, same English strings as `ko-en`). Explanations use **ikaw / ka / mo**, no *po* and no *kayo* to the learner, in plain Filipino with the English school terms for English grammar (*noun, verb, article, plural, past tense*).
- **Learners are not beginners.** The Philippines scores 565–569 on EF EPI (rank 25–28), with **speaking the lowest skill** (517–539) and writing the highest (590–603). The course is framed as accuracy and American-usage practice on top of fluent Philippine English, not as a first course.
- **Top measured errors** (238 first-year students in Bataan, 336,828-word spoken corpus): determiner use 2,993, prepositions 1,426, subject–verb agreement 837, nouns 746, verb forms 508, pronouns 354 (Fontillas, Quintos & Ronquillo 2022). In writing by 42 L1-Tagalog students, **65% of article errors were added articles** (*the nature*, *a friends*), 24–26% omissions (Barrios & Mercado-Abdon 2024).
- **Standing rule: `article-plural`, as in ko**, keywords `\barticle|\bplural|\bmaramihan|\bpantukoy|\bnabibilang` (flag `i`). Zero parity cost. *he / she* (from genderless *siya*), tense (Tagalog marks aspect, not tense), third-person -s and *in / on / at* (one *sa*) are secondary emphases named in `why`, not validated.
- **Pronunciation aid: IPA exactly as the Chinese course writes it** (`pronPattern` identical to zh, `pronScript` ˈ), so transcriptions are copied from `tools/content/zh` (and th). A Filipino-letter respelling would write the Philippine accent itself (five vowel letters, no schwa).
- **Philippine English is not treated as wrong.** Local vocabulary and the accent are acceptable; the course marks as errors only what breaks standard grammar everywhere (-s, tense forms, *furnitures*, *he* for a woman) and flags what misleads abroad (*CR*, *open the light*, *for a while*, *salvage*).
- **Curriculum:** keep all 39 ids in order (plus the shared `alphabet`); 24 get a Tagalog-specific explanation emphasis with no English changes. Add 2: `pinoy-english` (end of A1) and `aspect-tense` (A2, after `perfect`). Drop none.
- Latin script with `nativeScript: null`: meanings must differ from the English, which bites because Filipinos use English loans for many card words (§9), and `labels.cueTest` makes Filipino text compulsory in mc questions and type hints.
- **Interface:** a Tagalog pack already exists (`tools/i18n/tl/ui.json`, written for tl-ko). §10 follows its choices (*ikaw*, no *po*, loanword list, one count pattern with no linker) and lists four things to change, chiefly three tab labels over 8 characters.

## 2. Variant, register and voice

**Variant: American English** [practitioner opinion, decision]:
1. `ko-en` uses `ttsLang: "en-US"`, and PILOT-SPEC §1.6 freezes the shared English strings.
2. Philippine English already follows American spelling and grammar: "Spelling and grammar follow American English", and the accent is rhotic through "American English as taught through American public education" ([Wikipedia, *Philippine English*](https://en.wikipedia.org/wiki/Philippine_English), citing Tayao, Llamzon, Bautista & Gonzalez) [curriculum convention: reference work]. So the target is the variety learners already aim at.
3. British forms appear only as a card `note`, never as an accepted answer.

**Philippine English: what is acceptable and what is an error** [practitioner opinion, decision; the feature lists are sourced in §4]:

| Class | Examples | Course treatment |
|---|---|---|
| **A. Local words for local things** | *jeepney, barangay, tricycle, sari-sari store, pasalubong, barkada, adobo* | Acceptable everywhere. Used freely in examples about the Philippines. Never corrected |
| **B. Accent** | syllable-timed rhythm, tapped *r*, full vowels | Acceptable. The course trains only the contrasts that change the word (§4.10): *fan / pan*, *vote / boat*, *think / tink*, *ship / sheep*, word stress |
| **C. Philippine meanings that mislead abroad** | *CR, comfort room, open the light, for a while* (on the phone), *salvage, brownout, ref, gimmick, bold, traffic* (as an adjective), *go down* (from a vehicle) | Not called wrong. The card or `why` says «Sa Pilipinas: …; sa American English: …». Typed answers accept only the American form, because the accepted lists are shared (parity) |
| **D. Grammar that is non-standard in every variety** | missing -s (*She work*), *did* + past (*What did she told you?*), plural mass nouns (*furnitures, luggages, advices*), *he* for a woman, *more better*, *on January*, *result to, based from, cope up with, fill up a form* | Treated as errors, plainly and without mockery: «Madalas itong marinig, pero mali pa rin sa pormal na Ingles.» |

- Bautista's position, as reported by Fontillas et al. 2022, is to treat variants that are "rule-governed, widespread, and used by competent users" as features rather than errors. The course follows that for classes A–C. It still teaches the standard form for class D, because the learners' stated needs (exams, work abroad, international clients; §5) are judged against it. This split is the profile's own [practitioner opinion].
- No acceptability study could be opened (§11), so the placement of single items in C or D is for a native-teacher check.

**Form of address: *ikaw / ka / mo / iyo* (singular), never *kayo*; no *po / ho / opo* from the app.** Reasons:
- [curriculum convention] The Microsoft Filipino localisation style guide gives «you → ka, iyo (do not use formal "kayo" or "inyo")», models «Gusto mo bang magpatuloy?» and «Pangalanan ang PC mo», and for informal prompts says to "avoid using honorifics like 'po' and 'opo,' as they can make the target prompts sound too formal" ([Microsoft Filipino Style Guide](https://download.microsoft.com/download/25b05cb0-c8ad-41f0-be2e-30335c6ceb6a/fil-fil-StyleGuide.pdf)).
- [curriculum convention] The existing Tagalog interface already does this: «informal *ikaw / ka / mo / iyo*, never *kayo*» and «no *po / ho / opo* anywhere in the interface» (`tools/i18n/tl/NOTES.md` §1). One app cannot address the same user two ways.
- [practitioner opinion, from `en-tl.md` §2.3, which cites Kess 1981] *po* and *kayo* are owed upward: to elders, strangers, customers, bosses. A teacher does not say *po* to a student. The app's voice is a good teacher's: warm, respectful in content, plain in form. *Ho* is not used at all.
- **Respect is carried by wording, not by *po*:** *paki-* for requests where English has "please" («Pakisulat ang sagot»), softeners a teacher uses (*muna, lang, subukan mo*), praise that is specific («Tama ang article mo»), and never blaming the learner («Hindi pa tama» rather than «Mali ka»).

***Po* inside translations of example sentences** (a different question from the app's voice) [practitioner opinion; native check]:
- A Filipino translation carries *po* (and *kayo*) exactly where a Filipino speaker would say it: when the English line is addressed to a stranger, customer, elder or boss in a polite form (*Excuse me, could you help me?* → «Excuse me po, puwede po ba ninyo akong tulungan?»). Lines to friends, statements about third persons and labels have none.
- The `polite` lesson says once that English has **no word for *po***: the same respect is carried by *could / would / please / thank you* and by tone. Adding *sir / ma'am* to every sentence does not replace it.
- Translations use *ako* for *I* and *ikaw / ka* for *you* by default; *kayo* for plural *you* and for the polite cases above.

**Register and variety of explanations:** the Filipino of a friendly Manila teacher writing, not talking to friends.
- **Filipino, not Taglish.** Every ordinary word is Filipino: *pangungusap, salita, tanong, sagot, tunog, bigkas, halimbawa, gamitin, ilagay, piliin, idagdag, tanggalin, pagkatapos, bago*. No English verbs with Filipino affixes in explanations (*i-check, mag-add, na-gets*), and no conversational fillers (*so, actually, basically, yung*).
- **Borrowings that stay**, because Filipinos really use them: (1) the English school terms for English grammar and sounds (§3), which learners met in English class and which have no everyday Filipino rival for *English* grammar; (2) the interface loanwords already fixed in `tools/i18n/tl/NOTES.md` §2 (*app, card, deck, quiz, level, streak, email, settings*); (3) Spanish-origin everyday words in Filipino spelling (*kotse, mesa, oras, Lunes, piso, trabaho*), as `en-tl.md` §2.2 records.
- Not the stiff written register: no *ay* inversion in every sentence, no purist coinages (*pook-sapot*, *salumpuwit*), no *ngunit / subalit / datapwat* (use *pero*; the Microsoft guide makes the same choice).
- **Spelling:** current KWF spelling, no accent marks, *ng / nang* correct, *din / rin* and *dito / rito* by the preceding sound, *kumusta*, no apostrophe contractions in explanations (*ano ang*, not *ano'ng*) (same rules as `tl/NOTES.md` §1 and `tl-ko.md` §3.1).
- The language is called **Ingles** in Filipino text; the learner's language is **Tagalog** when comparing grammar («Sa Tagalog…») and **Filipino** when naming the national language. Do not alternate within a lesson.
- Mark errors with ✗ and corrections with ✓: `She work here. ✗ → She works here. ✓`.

Three sample sentences in the voice (native check):
- «Sa Tagalog, iisa ang "siya" para sa lalaki at babae. Sa Ingles, kailangan mong pumili: "he" para sa lalaki, "she" para sa babae.»
- «Alam mo na siguro ang past tense. Ang madalas makalimutan ay ang -ed kapag mabilis ka nang magsalita, kaya iyon ang sasanayin natin dito.»
- «Kapag "he", "she" o "it" ang subject, dagdagan ng -s ang verb: "She works here."»

**Mixing English into Filipino text:**
- **Lesson HTML bodies:** English words and sentences in `<b>` (as ko-en does). `<em>` only for a Tagalog word being discussed («ang salitang <em>siya</em>»).
- **Plain-text fields** (`why`, `hint`, `p`, `q`, card `note`) cannot carry markup. Put English inside straight double quotes: «Pagkatapos ng "two", plural ang noun.» Exception: an English sentence that is the whole object of a `q` stands bare: `Alin ang mali? She go to school every day.`
- **Do not attach Filipino affixes or linkers to quoted English:** not «"book"-ng», not «i-"add"». Write «ang salitang "book"», «idagdag ang "the"». A grammar term may take a linker as a separate word or in the normal way (*plural na noun*, *ang verb*), as `tl/NOTES.md` §1 allows.
- **Punctuation:** standard Latin punctuation, as in English. Numbers use the same separators as English (§10), so there is no decimal trap.
- Alternatives are separated by ` / ` (spaced), as in ko-en.

## 3. Glossary

**Convention found:**
- [curriculum convention] English is taught as a subject in English, and English is a medium of instruction: Republic Act 12027 (2024) says the "medium of instruction shall revert to Filipino and, until otherwise provided by law, English" ([LawPhil](https://lawphil.net/statutes/repacts/ra2024/ra_12027_2024.html)). Learners therefore met English grammar under its **English names**.
- [curriculum convention] Filipino class teaches a parallel set for Filipino grammar: *pandiwa* (verb), *panghalip panao* (personal pronoun), *pang-angkop* (linker), *panaguri* (predicate), and the three *aspekto ng pandiwa*: *perpektibo* (naganap na), *imperpektibo* (nagaganap), *kontemplatibo* (magaganap pa); "Filipino verbs (pandiwa) do NOT have past/present/future tense" ([civil-service exam guide](https://open-exam-prep.com/study-guides/ph-cse-professional/grammar/filipino-grammar-balarila)).
- [curriculum convention] The existing Tagalog interface and the tl-ko course keep grammar terms in English from a closed list and use "no Filipino school terms (*pandiwa, pangngalan*)" (`tl/NOTES.md` §1; `tl-ko.md` §3.4).
- No Philippine textbook or DepEd curriculum guide was opened (§11).

**Rule:**
- **English grammar and sound terms stay in English**, as in English class, written as ordinary nouns inside Filipino (*ang verb, plural na noun*). At first mention in a lesson body, add the Filipino school word once in brackets where one is well known: «article (pantukoy sa Ingles: *a, an, the*)», «plural (maramihan)», «verb (pandiwa)». Afterwards the English term alone.
- **Tagalog grammar is described in plain words, not terms:** «ang anyo ng pandiwa na tapos na» for the perfective. The school names (*perpektibo…*) are given once in `aspect-tense`.
- **One term per concept**, exactly as below. The standing-rule regex depends on *article* and *plural* (§7).
- Everything that is not a term is Filipino (§2).

| English term | Term in Filipino text (use this) | Note |
|---|---|---|
| article | **article** | Standing-rule keyword. Gloss once: «article (pantukoy sa Ingles: *a, an, the*)». Do not call *ang* an article; call it «ang salitang *ang*» or *marker* |
| indefinite / definite article | article na "a/an" / article na "the" | |
| zero article | **walang article** | «dito, walang article». Needed often: added articles are the main article error (§4.1) |
| noun | noun | gloss once: pangngalan |
| countable / uncountable noun | noun na **nabibilang** / **hindi nabibilang** | Standing-rule keyword (*nabibilang*) |
| singular | singular | gloss once: isahan |
| plural / plural -s | **plural** / plural na -s | Standing-rule keyword. Gloss once: maramihan |
| Tagalog *ang, ng, sa, si, ni, kay* | **marker** | Same word as `tl-ko.md` §3.4 |
| Tagalog *mga* | «ang salitang *mga*» | Contrast only |
| pronoun | pronoun | gloss once: panghalip. subject pronoun / object pronoun |
| possessive (my, his; 's) | possessive | |
| subject / object | subject / object | |
| verb | verb | gloss once: pandiwa |
| be (am / is / are) | **be** («ang verb na "be": am, is, are») | Tagalog has no such verb; do not equate it with *ay* |
| auxiliary (do / does / did) | **helping verb** | The Philippine classroom term [practitioner opinion; native check] |
| modal | modal | |
| base form | **base form** («ang verb na walang dagdag») | |
| past form / past participle | past form / past participle | |
| third-person singular -s | **-s ng verb** («kapag he, she o it ang subject») | |
| regular / irregular verb | regular / irregular na verb | |
| -ing form | anyong -ing | |
| gerund / infinitive | gerund / infinitive («to + verb») | |
| tense | **tense** | «ang tense ng verb». Only English has tense in this course |
| Tagalog aspect forms | **aspect**; named in plain words: *tapos na* / *ginagawa* / *gagawin pa* | Same names as `tl-ko.md` §3.4. School names (*perpektibo / imperpektibo / kontemplatibo*) once, in `aspect-tense` |
| present simple | present tense (simple present) | |
| present continuous | present continuous | |
| past simple / past continuous | past tense / past continuous | |
| future (will / going to) | "will" / "be going to" | |
| present perfect (+ continuous) | present perfect (continuous) | |
| past perfect | past perfect | |
| time expression | **salitang pampanahon** (*yesterday, now, already*) | |
| passive / active | passive / active | |
| conditional | conditional («pangungusap na may "if"») | first / second / third conditional |
| relative clause | relative clause («bahaging nagsisimula sa who, which, that») | Link to the Tagalog linker *na / -ng* |
| reported / direct speech | reported speech / direct speech | Link to *daw / raw* |
| preposition | preposition | gloss once: pang-ukol |
| conjunction | **pang-ugnay** (*and, but, because*) | [native check: *conjunction* may be preferred] |
| adjective / adverb | adjective / adverb | gloss once: pang-uri / pang-abay |
| comparative / superlative | comparative / superlative | Link to *mas* / *pinaka-* |
| question word | question word | As in `tl/NOTES.md` |
| sentence | **pangungusap** | Differs from tl-ko, which uses *sentence* (§10, list of changes) |
| positive / negative / question | positibo / negatibo / tanong | |
| word order | **ayos ng mga salita** | |
| contraction | **pinaikling anyo** (*I'm, don't*) | |
| phrasal verb | phrasal verb | |
| idiom | idyoma | KWF spelling; [native check: *idiom*] |
| false friend / Philippine-only usage | **Ingles-Pinoy** | Lesson `pinoy-english`; never «maling Ingles» for class A–C items |
| pronunciation | **bigkas** | As the interface (*Hint sa bigkas*) |
| IPA transcription | **bigkas (IPA)** | UI label stays *bigkas* |
| stress | **stress** (diin) | As `tl-ko.md` §3.4; «ang pantig na may stress» |
| syllable | **pantig** | Differs from tl-ko (*syllable*); everyday Filipino word |
| vowel / consonant | vowel / consonant | As `tl/NOTES.md`; gloss once: patinig / katinig |
| schwa | schwa («mahinang "uh"») | |
| linking | **pagdudugtong ng tunog** | |

Interface terms are in §10.

## 4. Persistent error zones

**Ranking:** evidence strength × frequency × how often the point recurs across lessons. The ranking is this profile's inference. Format: error ✗ → correction ✓. Every "Why" line (the contrast with Tagalog) rests on reference descriptions of Tagalog ([Wikipedia, *Tagalog grammar*](https://en.wikipedia.org/wiki/Tagalog_grammar), [*Tagalog phonology*](https://en.wikipedia.org/wiki/Tagalog_phonology), and the facts collected in `en-tl.md` §4); that a given contrast *causes* a given error is [practitioner opinion] unless the Evidence line names a study.

An example with no named source is illustrative [practitioner opinion]. "Theirs" means quoted from the named study.

**Main fetched evidence:**
- [Fontillas, Quintos & Ronquillo 2022](https://aclanthology.org/2022.paclic-1.80.pdf) (PACLIC 36): 238 first-year students at Bataan Peninsula State University (a Tagalog-speaking province), aged 18–19, each interviewed in English for at least four minutes; 336,828-word transcribed corpus. Their Table 4 counts "transcript errors": determiner use 2,993; wrong or missing prepositions 1,426; subject–verb agreement 837; incorrect nouns 746; confusing word usage 582; incorrect verb forms 508; wrong pronoun use 354; modifiers 58; modal verbs 44; quantifiers 35. The categories listed sum to 7,768, not to the "9,980" the text gives; the table itself is an image and the counting method is not described in the readable text. The authors argue these are features of Philippine English rather than errors. Only the ordering is used below.
- [Barrios & Mercado-Abdon 2024](https://po.pnuresearchportal.org/ejournal/index.php/asten/article/download/2778/643/8412) (AsTEN Journal of Teacher Education 8): 42 L1-Tagalog pre-service teachers aged 16–18 with ten years of English, two essays 15 weeks apart, article errors only, plus stimulated-recall interviews with ten of them.
- Smaller sources are named per item.

1. **Articles: added more often than dropped.**
   - *Examples:* `We could measure the meaning of the true happiness. ✗ → of true happiness ✓` / `when we have a friends ✗ → when we have friends ✓` / `It lets you hear the melody of the nature. ✗ → of nature ✓` / `Using gadget is part of our daily lives. ✗ → Using a gadget / Using gadgets ✓` / `I'm teacher. ✗ → I'm a teacher. ✓`
   - *Why:* Tagalog puts a marker before almost every noun (*ang, ng, sa*; *si, ni, kay* for names). Reference works call this a "three-way article system" or "case-marking particles" (Wikipedia, *Tagalog grammar*): the markers show the noun's role, not *a* versus *the*. *Isang* ("one") is the nearest thing to *a*, and it is optional. So a Tagalog speaker expects a small word before every noun and reaches for *the*.
   - *Evidence:*
     - [research-backed] Barrios & Mercado-Abdon 2024: of 122 article errors in the first essays, **80 were additions (65.57%)**, 32 omissions (26.23%), 8 misformations, 2 misorderings; fifteen weeks later 58 of 88 (65.91%) and 21 (23.86%). "Most addition errors involve the insertion of an article where Ø article should be used." Seven of the ten students interviewed said they compose in Tagalog and translate, and one said: «Parang ang *the* ay *ang*». All examples above except the last are theirs.
     - [research-backed] "Determiner use" is the largest category in the spoken Bataan corpus (2,993; Fontillas et al. 2022). Determiners are wider than articles, and the split is not given.
     - [research-backed, as reported by Barrios & Mercado-Abdon] Crosthwaite & Choy 2016 (learner-corpus study of Filipino writers) found zero article the most accurate and the definite article the least; the paper itself could not be opened (§11).
     - `I'm teacher` is [practitioner opinion].
   - *Design consequence:* the `why` lines must teach **when there is no article** as often as when there is one. This is unlike the Korean, Chinese and Indonesian courses, where omission dominates.
2. **Plural -s and countability.**
   - *Examples:* `I have two brother. ✗ → two brothers ✓` / `furnitures, luggages, baggages, advices ✗ → furniture, luggage, baggage, advice ✓` / `every Mondays ✗ → every Monday ✓` / `a parents that will give you advices ✗ → parents who will give you advice ✓`
   - *Why:* Tagalog marks plural with the separate word *mga* before the noun, optionally, and not after a number (*dalawang kapatid*). The noun itself never changes. Tagalog nouns are not divided into countable and uncountable; *marami* covers *many* and *much*.
   - *Evidence:*
     - [curriculum convention: reference work] "Some mass nouns become count nouns (*furnitures*, *imageries*)" in Philippine English (Wikipedia, *Philippine English*).
     - [practitioner opinion] *luggages, baggages*, *every Mondays* ([8List, Santos 2019](https://www.8list.ph/?p=111744)).
     - [research-backed] "Incorrect nouns" 746 in the Bataan corpus (Fontillas et al. 2022; not broken down). The `a parents … advices` example is from Barrios & Mercado-Abdon 2024.
     - [research-backed, not Tagalog L1] 26 first-year students in Caraga: plural -s was 12 of 50 inflection errors (24%), 9 of them *added* plurals on abstract nouns (*weaknesses* for *weakness*) ([Abansa et al.](https://ph02.tci-thaijo.org/index.php/jtir/article/download/265942/174427/1046817), vol. 21 no. 4; year not legible in the extracted text).
     - That `two brother` (missing -s after a number) comes from *dalawang kapatid* is [practitioner opinion]; no count found.
3. **Tense: Tagalog marks aspect, not tense.**
   - *Examples:* `He work yesterday. ✗ → He worked yesterday. ✓` / `What did she told you? ✗ → What did she tell you? ✓` / `I am living here since 2019. ✗ → I have lived here since 2019. ✓` / `I have eaten yesterday. ✗ → I ate yesterday. ✓`
   - *Why:* "Tagalog verbs are conjugated for time using aspect rather than tense" (Wikipedia, *Tagalog grammar*): *nagluto* (finished), *nagluluto* (unfinished: "cooks / is cooking"), *magluluto* (not yet begun), *kaluluto lang* (just finished). One unfinished form covers both the English simple present and the continuous, and the little words *na* ("already / now") and *pa* ("still / yet") do work that English gives to the perfect.
   - *Evidence:*
     - [research-backed, not Tagalog L1] Past-tense -ed was 29 of 50 inflection errors (58%) in the Caraga compositions, mostly misformation (18) and omission (7) (Abansa et al.).
     - [research-backed] "Incorrect verb forms" 508 in the Bataan corpus.
     - [practitioner opinion] `What did she told you?` (8List). The other examples are illustrative.
     - No study was opened that tests the aspect-to-tense transfer directly (§11).
4. **Subject–verb agreement and third-person -s.**
   - *Examples:* `She work in Makati. ✗ → She works ✓` / `My parents is abroad. ✗ → are ✓` / `Everybody are here. ✗ → is ✓`
   - *Why:* Tagalog verbs never agree with the subject. Final consonant clusters are also simplified in speech (§4.10), which removes the -s by sound.
   - *Evidence:* [research-backed] 837 agreement errors, third in the Bataan corpus (Fontillas et al. 2022). [practitioner opinion] Teachers of Filipino-American students call agreement "a challenge" ([Stanford CLAD course page](https://web.stanford.edu/~hakuta/www/archives/syllabi/E_CLAD/sfusd_cult_03/amy_leigh/amy_leigh/languageerrors.html), no author, no data). The examples are illustrative.
5. **Prepositions: one *sa* for *in / on / at / to*.**
   - *Examples:* `on January ✗ → in January ✓` / `in Monday ✗ → on Monday ✓` / `I'm in the office at Makati. ✗ → in Makati ✓` / `Share it to your friends. ✗ → with your friends ✓` / `result to ✗ → result in ✓` / `based from ✗ → based on ✓` / `cope up with ✗ → cope with ✓` / `fill up the form ✗ → fill out the form ✓` / `for my opinion ✗ → in my opinion ✓`
   - *Why:* *sa* marks place, time, direction and recipient; the Microsoft Filipino style guide translates *on the tab, on the menu, on the Internet* all with *sa*. Fixed verb + preposition pairs are then learned one by one, and Philippine English has settled on some of its own.
   - *Evidence:*
     - [research-backed] "Wrong or missing prepositions" 1,426, second in the Bataan corpus.
     - [research-backed] 44 Grade 9 students in Angeles City (L1 not reported) scored a mean of 58.03% on the *in / on / at* test for time against 69.55% for place; *at* for time was the most missed item, and 38 of 44 called the test difficult ([Tulabut et al. 2018](https://files.eric.ed.gov/fulltext/EJ1247198.pdf), TESOL International Journal 13(3)). The same paper reports Chua et al. 2015 as finding that mother-tongue interference with prepositions "is not high". **The cause is disputed.**
     - [practitioner opinion] *on January*, *share to* (8List); *for my opinion* ([TeacherPH, Bautista 2015](https://www.teacherph.com/common-mistakes-filipinos-make-when-using-english)). *result to, based from, cope up with, fill up* are standard items in descriptions of Philippine English, but no source listing them could be opened; they are [practitioner opinion] here (§11).
6. **Pronouns: *siya* → he / she, *niya* → his / her / him.**
   - *Examples:* `My husband is in the hospital. She is not feeling well. ✗ → He ✓` / `Ana lost his phone. (her own) ✗ → her phone ✓` / `I saw your mother. I talked to him. ✗ → to her ✓`
   - *Why:* *siya* means "he" or "she"; *niya* and *kaniya* likewise carry no gender (Wikipedia, *Tagalog grammar*). The speaker knows who is meant; the choice simply is not made while speaking.
   - *Evidence:* [practitioner opinion] The Stanford CLAD page: "Filipinos have one word for these pronouns, siya, which is not gender specific." Forum reports from Filipino speakers and their spouses say it happens in speech, especially when switching from Tagalog, and rarely in writing ([expat.com thread](https://www.expat.com/en/forum/asia/philippines/995789-tagalog-and-he-and-she.html)). [research-backed] "Wrong pronoun use" 354 in the Bataan corpus, type not given. **No study measuring he / she errors by Filipino speakers was found.** The first example is quoted from a web search result for a blog that was not opened; treat it as illustrative.
   - *Design consequence:* it is a slip of fluent speech, not a gap in knowledge. A lesson cannot fix it; repeated typed items with a named woman or man can (§7, secondary emphasis).
7. ***Be* and *do*: missing, doubled or mixed.**
   - *Examples:* `She teacher. ✗ → She is a teacher. ✓` / `I am agree. ✗ → I agree. ✓` / `She not like coffee. ✗ → She doesn't like coffee. ✓` / `Where you live? ✗ → Where do you live? ✓`
   - *Why:* Tagalog has no verb *be*: *Guro siya* is a full sentence, and *ay* only marks inverted order. Negation is *hindi* before the predicate, and questions use *ba*, with no helping verb.
   - *Evidence:* [practitioner opinion]; no Philippine count found. The Tagalog facts are from `en-tl.md` §4 and Wikipedia.
8. **Ingles-Pinoy: Philippine meanings and calques** (class C in §2).
   - *Examples:* `Where is the CR? → Where is the restroom?` / `Open the light. → Turn on the light.` / `For a while. (on the phone) → Just a moment, please.` / `It's traffic. → Traffic is heavy. / There's a lot of traffic.` / `I'll go down here. → I'll get off here.` / `There's a brownout. → There's a power outage.` / `Commit a mistake → make a mistake`
   - *Why:* literal translation (*Buksan ang ilaw* → *open the light*; *bababa ako* → *go down*), local coinages, and meanings that drifted.
   - *Evidence:* [curriculum convention: reference work] [Wikipedia, *Philippine English vocabulary*](https://en.wikipedia.org/wiki/Philippine_English_vocabulary) gives *comfort room* "a bathroom or a restroom", *open* "to turn on (an appliance)", *brownout* "a power outage", *go down* "get off a vehicle", *traffic* "heavy traffic; congestion", *salvage* "to perform summary execution", *gimmick*, *bold*, *ref*, *aircon*, *rubber shoes*, *commute*, *load*, *xerox*. [practitioner opinion] *open and close the light*, *It was traffic*, *commit a mistake*, *more harder* (TeacherPH); *comfort room, live-in, mineral water, pentel pen* ([SoraNews24, Phro 2014](https://soranews24.com/2014/08/05/do-you-use-these-philippine-english-words-and-phrases/)). *For a while* and *I'll go ahead* have no fetched source [practitioner opinion].
9. **Redundancy and double marking.**
   - *Examples:* `more better, more harder ✗ → better, harder ✓` / `Can you repeat that again? ✗ → Can you repeat that? ✓` / `with regards to ✗ → with regard to / regarding ✓` / `1st year anniversary ✗ → 1st anniversary ✓` / `Although it rained, but we went. ✗ → Although it rained, we went. ✓`
   - *Evidence:* [practitioner opinion] TeacherPH and 8List; Wikipedia notes "tautology/redundancy" as common among older speakers. The *although … but* pair is illustrative (*kahit … pero*).
10. **Pronunciation.** The acrolect of Metro Manila keeps almost all contrasts; the features below are strongest in mesolectal and basilectal speech, so each learner has a different subset.
    - **F → p and V → b (and the reverse):** `fan` → *pan*, `very` → *berry*, `vote` → *boat*; hypercorrect *"three fritty girls"* for *pretty*.
      - [curriculum convention: reference work] Tagalog has 17 consonants with no /f v z θ ð/; "[f], [v], [z] … are accepted in loanwords", and some speakers nativise them to [p], [b], [s] (Wikipedia, *Tagalog phonology*).
      - [research-backed, n = 4] Four acrolectal Metro Manila speakers "consistently distinguished between /p/ and /f/" and /b/–/v/, "unlike in the basilect" ([Lesho 2018](https://www.cambridge.org/core/product/F041BD5DCF9DC4B66F822D30F784EF82/core-reader), *Journal of the International Phonetic Association* 48(3)).
      - [practitioner opinion] The hypercorrection example is from the Stanford CLAD page.
    - **TH → t / d (or s):** `think` → *tink*, `this` → *dis*.
      - [research-backed, n = 4] Two of Lesho's four speakers kept [θ ð]; one stopped initial /ð/ to [d] in reading; one said *thin* as [sɪn].
      - [curriculum convention] Th-stopping is listed for Philippine English (Wikipedia, citing Tayao).
    - **Z → s, especially at the end of words:** `his` = *hiss*, `dogs` with /s/, `zoo` → *soo*.
      - [research-backed, n = 4] Three of four acrolect speakers said *hiss* and *his* alike as [hɪs] (Lesho 2018), so this one reaches the top of the range.
      - [research-backed] "consonants are neutralized since fricatives are generally collapsed" across 26 speakers of 13 Philippine languages, two per language including Tagalog ([Berowa 2019](https://animorepository.dlsu.edu.ph/etd_doctoral/1526), DLSU dissertation, abstract only).
    - **Vowels: five instead of eleven; no length; no schwa.** `ship` = *sheep*, `full` = *fool*, `cat` / `cut` / `cot` close together, `about` with a full *a*, `kitten` as [ˈkɪtɛn].
      - [curriculum convention] Tagalog has five vowel phonemes; length goes with stress, not with the vowel (Wikipedia, *Tagalog phonology*).
      - [research-backed] "The vowel system is considerably reduced because of the weakened vowel length distinction" (Berowa 2019, abstract).
      - [research-backed, n = 4] Acrolect speakers keep the tense–lax pairs spectrally distinct, but use full vowels where American English has schwa (*confess* [konˈfɛs], *kitten* [ˈkɪtɛn]) (Lesho 2018).
      - [curriculum convention] The schwa "is absent as a separate phoneme"; /ɪ/ may merge with [i] (*peel* / *pill*); /æ ʌ ɑ/ fall together as central [a] (Wikipedia, *Philippine English*, citing Llamzon and Tayao).
    - **Stress on a different syllable:** `ceREmony`, `aRAbic`, `elemenTAry`, `comFORtable`.
      - [research-backed] "PE is characterized by rightward shift and penultimate stress" (Berowa 2019, abstract).
      - [curriculum convention] *ceremony* and *Arabic* on the second syllable; -ary words stressed on the *a* (Wikipedia, *Philippine English*). *comFORtable* is [practitioner opinion].
      - *Why:* Tagalog stress falls on the last or next-to-last syllable and is distinctive (Wikipedia, *Tagalog phonology*).
    - **Final clusters simplified:** `gift` → *gif*, `asked` → *ask*, `works` → *work*. [research-backed, n = 4] "Final stops in coda clusters are sometimes deleted, especially /t/" (Lesho 2018). This feeds error zones 3 and 4: the -ed and the -s go missing by sound.
    - **Intonation:** "all types of questions receive a rising intonation" (Berowa 2019, abstract) [research-backed]. English *wh*-questions normally fall.
    - **R / L:** Tagalog has both, so the shared *rice / lice* pair is easy. Tagalog *r* is a tap; the American *r* is not. [practitioner opinion]; Lesho's acrolect speakers already use an approximant.
    - **Unaspirated p / t / k** and **syllable-timed rhythm:** acceptable accent (class B), not trained.
11. **Politeness carried over: *po*, *sir / ma'am*, *kindly*.**
    - *Examples:* `Yes po. → Yes. / Yes, sir. (service only)` / `Give me water. → Could I have some water, please?` / `Good day, Ma'am/Sir! (email) → Dear Ms. Santos, / Hi Ana,` / `Kindly send the file. → Could you send the file?`
    - *Why:* Tagalog marks respect with *po / ho* and plural *kayo* (`en-tl.md` §2.3, citing Kess 1981); English has neither, so the respect either disappears (bare imperatives) or is rebuilt with titles.
    - *Evidence:* [practitioner opinion]; no source fetched for the English side.
12. **Passive and object focus.**
    - *Examples:* `The house built in 1990. ✗ → was built ✓` / over-translating everyday object-focus sentences as passives: *Kinain ko ang mangga* → `The mango was eaten by me. ✗ (odd) → I ate the mango. ✓`
    - *Why:* Tagalog chooses a verb form by which noun is in focus (*kumain ako ng mangga* / *kinain ko ang mangga*; `en-tl.md` §4.2), and object focus is ordinary speech. It is not the English passive.
    - *Evidence:* [practitioner opinion]; no source fetched.

## 5. Learner starting point

- **School exposure.**
  - [curriculum convention] English is one of the two official languages with Filipino, "used in higher education, religion, print and broadcast media, and business", and laws and court decisions are written almost entirely in English (Wikipedia, *Philippine English*).
  - [curriculum convention] Republic Act 12027 (10 October 2024) ended mother-tongue instruction in Kindergarten to Grade 3: the "medium of instruction shall revert to Filipino and, until otherwise provided by law, English", with regional languages as auxiliary media (LawPhil). So every learner has had years of English-medium classes, not only English lessons.
  - [research-backed, abstract] 251 junior and senior high-school English teachers reported that teacher education prepared them well in phonetics and phonology; they aim at effective communication rather than a native-like accent, put intonation high, and said pronunciation was often neglected during distance learning ([Santillan, Balinas & Couper 2023](https://zenodo.org/records/8375652)).
  - [research-backed] In the Bataan interviews, 185 of 238 students (77.7%) got the top comprehension score and about half were rated fluent, while the same recordings held the errors in §4 (Fontillas et al. 2022). **Understanding is strong; accuracy lags.**
- **Profile figures.**
  - [research-backed, test-taker data] **EF EPI, Philippines.** The 2025 fact sheet: rank 28, score 569, global average 488; **reading 573, listening 567, writing 603, speaking 539** ([fact sheet](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-philippines-english.pdf)). The EF country page, which now links a 2026 fact sheet: rank 25, score 565 ("-4pt on previous score"), global average 485; **reading 578, listening 553, writing 590, speaking 517** ([EF page](https://www.ef.com/wwen/epi/regions/asia/philippines/)).
  - Regions run from the Cordillera 598 and the National Capital Region 580 to Ilocos 540; Manila 592, Quezon City 591, Makati 590, Cebu City 582, Davao City 582.
  - Self-selected online test-takers; no sample size on the page. The proficiency band is not printed in the text that could be read.
  - **Shape:** every skill is far above the global average, and **speaking is the lowest in both editions**. That is the opposite of Indonesia or Japan in level, but the same in shape: the gap is spoken accuracy.
- **Who uses a course like this** [practitioner opinion; none of this was verified from a fetched source, §11]:
  - people preparing for IELTS, OET, TOEFL or PTE for work or migration (nurses, caregivers, seafarers, students);
  - call-centre and virtual-assistant applicants, who are screened on American usage, grammar accuracy and "neutral" pronunciation;
  - students and workers from outside Metro Manila, or from public schools, whose English is passive: they read and understand, but hesitate to speak;
  - fluent speakers who want to know which of their habits are Philippine English.
- **How the course handles learners who already know a lot of English** [practitioner opinion, decision]:
  1. **Keep A1, but say what it is for.** Parity fixes the lesson list. Each A1 blurb names the slip, not the topic: not «Ano ang article?» but «Kailan *walang* "the"?». The first screen of `articles`, `plurals`, `third-s`, `past` and `prep` starts with the wrong sentence a fluent Filipino actually says.
  2. **Let them move fast.** The 3-question check and the existing «I-unlock ang lahat ng aralin at deck» control mean nobody has to sit through what they know. Explanations are short: the rule, the Tagalog contrast, three examples.
  3. **Put the value in typed production.** Fluent learners pass every multiple-choice item. The typed and tile items under the standing rule are where articles, -s and -ed fail, and these are the features that persist at high fluency (§4.1–4.4).
  4. **Never explain English through "you do not know English".** The frame is «Mahusay ka nang mag-Ingles; ito ang mga detalyeng madalas makalusot.» [native check]
  5. **Add the American-usage layer** (class C): card notes of the form «Sa Pilipinas: *CR*. Sa Amerika: *restroom, bathroom*.» and the `pinoy-english` lesson.
  6. **Lean on audio and IPA for the contrasts** that English spelling hides and Filipino spelling cannot show (§6). Speaking is the measured weak skill.
  7. **Do not gloss with the English word.** Filipinos say *cellphone, computer, taxi, menu, email* in Filipino, so the natural gloss often equals the target and fails validation (§9).
  8. **Exam flavour:** "find the error" items fit (`Alin ang mali? She go to school every day.`), and the work deck carries BPO and office phrases.

## 6. Pronunciation aid policy

**Evidence:**
- [curriculum convention] Filipino spelling is close to one letter per sound with **five vowel letters**, and it is the normal way to write the *nativised* pronunciation of English words: `en-tl.md` §2.2 records *dyip, taksi, selpon, kompyuter* beside *jeep, taxi, cellphone, computer*. A respelling in Filipino letters would therefore write exactly the accent features of §4.10: *sip* for both *ship* and *sheep*, *kat* for *cat*, *cut* and *cot*, *abawt* with a full *a*, *titser* for *teacher*.
- [curriculum convention] The Microsoft Filipino style guide, when it needs to show how an English acronym is said, uses ad-hoc English-style respellings (`RADIUS [rey-dee-uhs]`, `URL [yew-are-…]`) and, for product names, IPA-like symbols (`[sı'kjuər aı di:]`). There is no settled Filipino respelling of English to adopt.
- [research-backed, abstract] Philippine English teachers report good training in phonetics and phonology (Santillan, Balinas & Couper 2023). That is about teachers. **No fetched source says how many Filipino learners read IPA**, and one search result (a 2024 Grade 12 classroom study reporting gains after teaching IPA symbols) could not be opened (§11).
- [research-backed] The contrasts learners lack are exactly the ones IPA writes with separate symbols and Filipino letters cannot: /iː ɪ/, /uː ʊ/, /æ ʌ ɑː/, /ə/, /f p/, /v b/, /θ t/, /ð d/, /z s/, and stress (Berowa 2019; Lesho 2018; §4.10).
- **No fetched study compares respelling, IPA and no aid for Filipino learners.** The policy below is inference [practitioner opinion].

**Decision: `"pron": "required"`, IPA written exactly as the Chinese course writes it** (zh.md §6 and `tools/content/zh/PRON-RULES.md`, which are binding for tl without change), shown by default and hideable through the existing toggle «Ipakita ang bigkas sa pagsasanay» / «Hint sa bigkas».
- **Why IPA and not a Filipino-letter respelling:**
  1. Learners already read English spelling. The aid's only job is to show what the spelling hides, and those are the contrasts Filipino letters cannot write without invented conventions (doubled vowels, digraphs for /θ ð/, a mark for schwa). An invented convention is as new to the learner as IPA, and less exact.
  2. A respelling that looks like Filipino invites reading it with Filipino sound values, which is the habit the aid is meant to break.
  3. **Most transcriptions can be copied.** zh-en and th-en already carry the same shared English strings in this exact notation, with a checker (`tools/content/zh/pron_check.js`) that reports 0 conflicts. Only localised cards (names, Manila, pesos) and tl-only lessons need new transcriptions. Copying removes the largest source of `pron` errors found in earlier courses (PHASE2-BRIEF: "the same English text must carry the same pronunciation aid in every file").
  4. IPA is what dictionaries and exam-preparation material print, so the skill transfers.
- **`none` rejected:** speaking is the lowest measured skill (§5), and an empty field needs untested engine rendering (PIPELINE §3).
- **`optional` rejected:** empty `pron` would land on the short, "easy" words where the vowel contrasts live (*ship, full, cat*).
- **Cost and mitigation:** some learners will not know the symbols. The `pron` lesson teaches the key on one screen, each symbol tied to an English word they know and, where one exists, to a Tagalog sound («/ʃ/: parang *sy* sa *siyam* kapag mabilis»; «/ŋ/: ang *ng* sa *ngayon*»; «/ə/: mahina at maikling "uh"; walang ganitong tunog sa Tagalog») [native check]. Audio carries the rest, and the toggle hides the aid.

**The key (identical to zh.md §6 rule 4; General American, OALD-style symbols):**

| Sound | Write | Example | Note for Tagalog speakers |
|---|---|---|---|
| FLEECE / KIT | iː / ɪ | leave /ˈliːv/, live /ˈlɪv/ | Tagalog has one *i*. /ɪ/ is shorter and laxer |
| final unstressed -y; weak *you* | i / u (no ː) | very /ˈveri/, you /ju/ | |
| DRESS / TRAP | e / æ | bed /ˈbed/, bad /ˈbæd/ | /æ/: open the mouth wider; it is not Tagalog *a* |
| STRUT / schwa | ʌ / ə | cup /ˈkʌp/, about /əˈbaʊt/ | No schwa in Tagalog: unstressed vowels are not full |
| GOOSE / FOOT | uː / ʊ | food /ˈfuːd/, book /ˈbʊk/ | One Tagalog *u* |
| LOT | ɑː | hot /ˈhɑːt/, copy /ˈkɑːpi/ | Not *o*: *hot* is not "hot" with Tagalog *o* |
| THOUGHT | ɔː | talk /ˈtɔːk/, coffee /ˈkɔːfi/ | |
| GOAT | oʊ | go /ˈgoʊ/ | A glide, not a plain *o* |
| NURSE / lettER | ɜːr / ər | work /ˈwɜːrk/, water /ˈwɔːtər/ | Not *er* as in *ermat* |
| NEAR / SQUARE / CURE | ɪr / er / ʊr | here /ˈhɪr/, there /ˈðer/ | |
| START / NORTH | ɑːr / ɔːr | car /ˈkɑːr/, door /ˈdɔːr/ | *r* is always pronounced |
| FACE / PRICE / CHOICE / MOUTH | eɪ / aɪ / ɔɪ / aʊ | name /ˈneɪm/, my /maɪ/ | As Tagalog *ey, ay, oy, aw* |
| consonants | p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r w j | fan /ˈfæn/, vote /ˈvoʊt/, think /ˈθɪŋk/, this /ˈðɪs/, zoo /ˈzuː/, yes /ˈjes/ | f ≠ p, v ≠ b, θ ≠ t, ð ≠ d, z ≠ s. /j/ is the sound of Tagalog *y*; /dʒ/ of *dy*; /tʃ/ of *ts*; /ŋ/ of *ng* |

**Rules for the `pron` field** (all from zh.md §6 and PRON-RULES; restated so writers need one page):
1. **Format.** One pair of slashes around the whole transcription; words separated by one space; no punctuation, capitals or digits. Two sentences on one card are separated by ` ‖ ` (U+2016), never `|`.
2. **Alternatives and pairs:** two slashed groups separated by one space: `/ˈʃɪp/ /ˈʃiːp/`. Never `//`.
3. **Stress.** A closed list of function words stays unmarked (articles, personal pronouns and possessives, *be*, auxiliary *do / have*, modals, prepositions, conjunctions, existential *there*). **Every other word gets ˈ** before its stressed syllable, monosyllables included: `/aɪ ˈlaɪk ˈtiː/`. So every `pron` contains at least one ˈ. Use ˌ only inside long words, -teen numbers and spelled abbreviations.
4. **Symbols:** the table above. ASCII `g`, plain `r`; no ɡ, ɹ, ɚ, ɝ, ɛ, ɒ, əʊ, and no flap symbol (the audio carries the American flap).
5. **Weak forms** for function words: *a* /ə/, *an* /ən/, *the* /ðə/ (/ði/ before a vowel), *to* /tə/, *for* /fər/, *from* /frəm/, *of* /əv/, *and* /ənd/, *at* /ət/, *can* /kən/, *could* /kəd/, *are* /ər/, *was* /wəz/, *do* /də/, *you* /ju/, *your* /jʊr/, *he* /hi/, *she* /ʃi/, *we* /wi/, *me* /mi/. A function word stressed in context takes its strong form and ˈ (`Me too.` → `/ˈmiː ˈtuː/`).
6. **Codas in full, as heard:** plural and third-person -s as /s/, /z/ or /ɪz/; -ed as /t/, /d/ or /ɪd/; clusters complete (`asked` /ˈæskt/, `gift` /ˈgɪft/, `works` /ˈwɜːrks/). This is the part of the aid that serves error zones 3 and 4. Syllabic consonants as PRON-RULES A.4 (`student` /ˈstuːdnt/).
7. **Numbers** as words; **abbreviations** letter by letter (`BTW` → `/ˌbiː tiː ˈdʌbəljuː/`).
8. **Filipino names and places inside English sentences** are written as the en-US voice says them, not as Tagalog says them: Ana /ˈɑːnə/, Paolo /ˈpaʊloʊ/, Liza /ˈliːzə/, Manila /məˈnɪlə/, Cebu /seˈbuː/, Davao /ˈdɑːvaʊ/, the Philippines /ðə ˈfɪlɪpiːnz/, Filipino /ˌfɪlɪˈpiːnoʊ/, Tagalog /təˈgɑːlɔːg/, peso(s) /ˈpeɪsoʊ(z)/, adobo /əˈdoʊboʊ/. These are approximations to be checked against the audio (§11).
9. **Same English, same `pron`, in every file.** Copy from zh-en where the English string is identical; the lead's `lint.js` enforces it. A `tools/content/tl/pron_check.js` cloned from zh's is recommended.
10. **Practice items carry no aid** (PRACTICE-SPEC). Lesson bodies may quote single sounds (`<b>/θ/</b>`). In plain-text fields never put two slashes together: write «/s/, /z/ o /ɪz/».
11. **Validator.**
    - `pronPattern` is **the zh pattern, character for character**: `^(?=.*ˈ)/C+(?: C+)*/(?: /C+(?: C+)*/)*$` with `C` = `[abdefghijklmnoprstuvwzæɑɔəɜɪʊʌθðʃʒŋːˈˌ‖]`. It rejects c, q, x, y, capitals, punctuation, `//`, ɡ, ɛ, ɚ and a pron with no stress mark, which catches pasted English and pasted respellings.
    - `nativeScript` is `null` (Filipino is written in Latin letters), and **`pronScript` is `ˈ`**: with it, `validate.js` tests a `pron` for "contains ˈ and differs from the English" instead of the native-text test. The slashes already make every pron differ from its English.
    - The pattern cannot catch wrong-but-legal IPA (`/ˈhot/`); the copy rule and `pron_check.js` do.

**Worked examples.** The first rows are strings of the existing course, with `pron` in the notation of `tools/content/zh/decks.js`; the pair rows are for the tl `pron` lesson; the last five are localised strings. All 28 `pron` fields in the 24 rows pass `pronPattern`, `pronScript` and the differs-from-English test (checked with a short node script; output in the handoff report):

| English | `pron` | Rules shown |
|---|---|---|
| Hello. | /həˈloʊ/ | 1 no period, schwa, oʊ |
| How are you? | /ˈhaʊ ər ju/ | 5 weak *are*, *you*; 3 question word marked |
| I'm a student. | /aɪm ə ˈstuːdnt/ | 5 weak *a*; 6 syllabic n, full cluster |
| Thank you. | /ˈθæŋk ju/ | θ (not t), æ |
| Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | ð (not d), weak *can*, iː |
| Is it spicy? | /ɪz ɪt ˈspaɪsi/ | /z/ in *is* (not *iss*) |
| Where are you from? | /ˈwer ər ju frʌm/ | stranded preposition takes its strong vowel, no ˈ |
| How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | ʌ, tʃ, ð |
| Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | weak *could*, ASCII g |
| I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | ˌ inside a long word; final cluster /nd/ |
| fan / pan (pron deck: two cards) | /ˈfæn/ · /ˈpæn/ | f ≠ p |
| vote / boat | /ˈvoʊt/ · /ˈboʊt/ | v ≠ b |
| think | /ˈθɪŋk/ | θ + ŋk |
| this | /ˈðɪs/ | ð |
| live / leave | /ˈlɪv/ · /ˈliːv/ | ɪ vs iː; final /v/ |
| coffee / copy | /ˈkɔːfi/ · /ˈkɑːpi/ | f ≠ p inside a word |
| ship / sheep (tl pron lesson, one row) | /ˈʃɪp/ /ˈʃiːp/ | 2 pair in one field |
| full / fool (tl pron lesson) | /ˈfʊl/ /ˈfuːl/ | ʊ vs uː |
| cat / cut / cot (tl pron lesson) | /ˈkæt/ /ˈkʌt/ /ˈkɑːt/ | the three vowels Tagalog *a* covers |
| My name is Ana. | /maɪ ˈneɪm ɪz ˈɑːnə/ | 8 name as the voice says it |
| I'm from the Philippines. | /aɪm frəm ðə ˈfɪlɪpiːnz/ | weak *from*, *the*; /f/; final /nz/ |
| I live in Manila. | /aɪ ˈlɪv ɪn məˈnɪlə/ | schwas in *Manila* |
| It's fifty pesos. | /ɪts ˈfɪfti ˈpeɪsoʊz/ | 7 number as a word; plural /z/ |
| She works in Cebu. | /ʃi ˈwɜːrks ɪn seˈbuː/ | weak *she*; 6 third-person -s in the cluster /rks/ |

## 7. Standing practice rule

**Rule (profile.json):** `"standingRule": { "kind": "article-plural", "keywords": "\\barticle|\\bplural|\\bmaramihan|\\bpantukoy|\\bnabibilang", "flags": "i" }` (JSON-escaped).
- In every practice set, at least half of the `order` items **and** at least half of the `type` items (counted separately, `need = ceil(n/2)`) must hinge on an article (a / an / the / none) or a plural or countability form (-s, this / these, many / much).
- The `why` of each such item must contain **article**, **plural** or **nabibilang** (the glossary terms). *Maramihan* and *pantukoy* are in the regex only so that a `why` that uses the Filipino school word still counts; writers should use the glossary terms.
- The leading `\b` stops *particle* (phrasal lesson) from counting. With flag `i`, sentence-initial «Article…» and «Plural…» match.
- **Because the keywords are also English words**, the validator cannot tell a Filipino `why` from an untranslated English one that happens to say "article". With `nativeScript: null` a `why` only has to be non-empty. Reviewers must read the `why` lines; this is a known limit, not a reason to choose stranger keywords (§11).

**What the validator counts** (validate.js, `article-plural`):
- `order`: the `why` names a keyword **and** `x` holds an article tile or a singular / plural twin of a tile in `a`.
- `type`: the `why` names a keyword **and** either every variant in `a` contains an article, or `x` holds an article or a twin.
- Writers should put the competitor tile in `x` (`a`, `the`, `book` / `books`).

**Sample `why` lines** (plain text, English in straight quotes; all nine tested against the regex; the four secondary-emphasis lines below tested not to match):
- «Isang bagay na nabibilang, kaya kailangan ng article na "a": "a teacher".»
- «Pagkatapos ng "two", plural ang noun: "two books".»
- «Nabanggit na ang aso kanina, kaya article na "the" ang gamit.»
- «Hindi nabibilang ang "water": walang article at walang plural na -s.»
- «Pangkalahatan ang sinasabi, kaya walang article: "Money is important".»
- «"These" para sa plural, "this" para sa isa lang.»
- «Sa Tagalog, wala nang "mga" pagkatapos ng bilang; sa Ingles, kailangan pa rin ng plural na -s.»
- «Article ang kulang: trabaho ang "teacher", kaya "a teacher".»
- «Hindi lahat ng "ang" ay "the": dito, walang article.» (matches through *article*)

**Justification:**
- **Determiners and nouns are the largest measured block in Tagalog speakers' spoken English**: determiner use 2,993 and incorrect nouns 746 against agreement 837 and verb forms 508 in the Bataan corpus [research-backed: Fontillas et al. 2022; categories wider than articles and plurals, §4].
- **The article error is of a different kind from Korean, and the rule still fits.** Tagalog speakers add articles (65%) more than they drop them (Barrios & Mercado-Abdon 2024). The rule's hinge already includes "none", and the shared items include generic and uncountable cases; only the Filipino `why` has to say «walang article» and explain why. At least one hinge item per set should be a no-article case where the shared English allows it [practitioner opinion].
- **Parity cost is zero.** The shared tile and typed items were written to the Korean rule. Any other kind would force deviations in up to 39 sets (PILOT-SPEC §1.6) [practitioner opinion].
- **`verb-core` was considered and rejected.** It would capture agreement and do-support (837 + 508 in the Bataan counts, well under the determiner count), it needs many changed English items, and tense is lesson-specific.
- **A *he / she* rule was considered and rejected.** There is no measured rate (§4.6), no validator kind, and most shared sentences have no third person. It is handled as the first secondary emphasis below.

**Secondary emphasis (not validated; do not add to the regex):**
- ***he / she* (from *siya*):** wherever a shared item has a third-person singular human subject or possessive, the Filipino prompt must make the gender visible with a name or noun (*si Ana*, *ang kuya ko*, *ang nanay niya*) rather than a bare *siya* that the learner has to guess, and the `why` says: «Babae si Ana, kaya "she" at "her".» A prompt whose gender cannot be recovered would also break the PHASE2 rule that prompts must lead to an accepted answer.
- **Tense:** where an item turns on tense, the `why` names the tense and says that the time word does not replace the verb form: «May "yesterday", kaya past tense: "went".»
- **Third-person -s:** «"She" ang subject, kaya may -s ang verb: "works".»
- ***in / on / at*:** «Sa Tagalog, "sa" lang. Sa Ingles: "on" para sa araw, "in" para sa buwan, "at" para sa oras.»
- Do not use *article* or *plural* in `why` lines that do not hinge, so the count stays meaningful.

**Prompt frames (`labels.cueTest`).** With `nativeScript: null`, the validator recognises Filipino text by a word list (`cueTest`, case-sensitive, first letter either case). Every practice mc `q` and type `hint` must contain at least one listed word. If an mc `q` written in the `more/` shorthand contains none, the DSL **silently appends** « Ano ang dapat ilagay sa patlang?», which is wrong for a translation question.
- In ko-en, many mc questions use the bare frame `'<Korean sentence>' =`. In Filipino, **always write `'<pangungusap>' sa Ingles?`**, never `'<pangungusap>' =`: short sentences such as *Umuulan* or *Salamat* contain no cue word (tested: they fail).
- Other frames, all tested to match:
  - meaning: «Ano ang Ingles ng 'kanin'?»
  - forms: «Past ng "go"? — ano ito?» / «Plural ng "box" — ano ito?»
  - find the error: «Alin ang mali? She go to school every day.»
  - choose: «Piliin ang tamang pangungusap.»
  - answers: «Sagutin ng 'oo': "Do you like coffee?"»
  - he / she: «Babae si Ana. Aling salita ang gagamitin: he o she?»
- **Type hints:** end with « — » plus a short Filipino note containing a listed word («three · tree — tatlo, kaya plural ang kailangan», «teacher — be + article bago ang trabaho»). Otherwise the DSL appends « — gamitin ang mga salitang ito», which is acceptable.
- The list (see `tl.profile.json`) holds 81 words: the markers and linkers that occur in almost every Tagalog sentence (*ang, ng, mga, sa, ay, nang*), question words, pronouns, and the instruction words of the frames above.
- **Excluded on purpose**, because they are English words or word parts and matched English strings in the test: ***at, may, na, ba, ko***. Also left out as risky: *man, is, pa, kung, lang, para, mali*. Do not add them.
- The final list matched **0 of 3,265** Hangul-free strings in `packs/course-ko-en.js` and none of the proposed localised English strings (§9). Rerun the 0-hit check after any change.

## 8. Curriculum deviations from the Korean-speaker course

**Definitions (as in ja.md and id.md):**
- **keep** = fresh Filipino explanation from the Tagalog speaker's point of view; English rows, checks and practice unchanged.
- **reweight** = same English checks and practice. The Filipino explanation and the **lesson-body** example rows shift emphasis as noted. Lesson-body rows are not parity-bound; check and practice strings are. No deviation entry is needed. Do not rewrite practice `o` / `a` / `x` strings.
- **add** = new lesson, with an entry in `deviations.json` `extraLessons` and in `profile.json` `lessonOrder.after`. Its practice set must itself satisfy the standing rule (§7).

Ids and order are unchanged. Nothing is replaced or dropped. The shared first lesson `alphabet` (added to every course on 2026-11-18) has its own brief (`docs/briefs/alphabet-*.md`) and is outside this table; one note for it: Filipino letter names are already the English ones (*ey, bi, si …*), so that lesson is revision except for **Z** («zi», not «zey» or «zed») and for spelling aloud at speed [practitioner opinion; Wikipedia, *Philippine English*, notes "zee"].

| lesson id | keep / reweight / add | note for Tagalog speakers |
|---|---|---|
| pron | reweight | Tagalog set: F ≠ P and V ≠ B in **both** directions (*fan / pan*, *vote / boat*; warn against *fretty* for *pretty*), TH (not t / d), Z ≠ S (*his / hiss*, plural /z/), i / iː (*ship / sheep*), ʊ / uː (*full / fool*), æ / ʌ / ɑː (*cat / cut / cot*), schwa, word stress (*CEremony, COMfortable*), final clusters (*gift, asked, works*), falling tune on *wh*-questions. Shared R / L items (*rice / lice*): the `why` says Tagalog already has both sounds. Teaches the IPA key (§6) in one table. Say that the Filipino accent is fine; these are the sounds that change the word |
| be | reweight | Tagalog has no *be*: *Guro siya* → `She is a teacher`. *Ay* is not *is*. First home of **siya → he / she**: every example names a man or a woman. Warn against `I am agree` |
| it-there | reweight | *May / mayroon / wala* → *there is / there are / there isn't* (agreement with the noun), but *May kotse ako* → *I have a car*. *Umuulan* → *It's raining*; *Alas-tres na* → *It's three o'clock* |
| articles | reweight | Core lesson, turned around: half of it is **when not to use one**. *Ang* is not *the* («Parang ang *the* ay *ang*» is the trap, Barrios & Mercado-Abdon). *Isang* ≈ *a*, but English cannot drop it: *Guro ako* → `I'm a teacher` |
| plurals | reweight | *Mga* goes before the noun and disappears after a number (*dalawang libro*); English -s stays (*two books*). Tagalog adjectives can be plural (*magaganda*); English adjectives never are. this / these = *ito / ang mga ito* |
| present | reweight | One Tagalog form (*kumakain*) = *eats* and *is eating*; this lesson is the habit half. Negation: *Hindi ako kumakain ng karne* → `I don't eat meat`, never `I not eat` |
| questions | reweight | *Ba* has no English word: it becomes *do / does / is / are* at the front. Question word first is the same as Tagalog (*Saan ka nakatira?*), but English adds *do*: `Where do you live?` |
| third-s | keep | No agreement in Tagalog. Say outright that this -s is the third most frequent spoken error among fluent Filipino students (Fontillas et al. 2022) and that it is also lost by sound in clusters |
| prep | reweight | *Sa* = in / on / at / to. *sa Lunes* → *on Monday*, *sa Enero* → *in January* (never `on January`), *sa alas-tres* → *at three*; *sa Makati* → *in Makati*; *nasa bahay* → *at home*; *go home*, not `go to home` |
| countable | reweight | *Marami* = many **and** much; *kaunti* = few and little. The Philippine plurals to unlearn: `furnitures, luggages, baggages, equipments, advices, staffs, jewelries, informations`. *a piece of advice* |
| object-have | reweight | Second home of *siya*: *niya* → *him / her* and *his / her*; `Ana lost his phone ✗`. *May / mayroon* → *have*: *May kapatid ako* → `I have a brother` |
| can-like | keep | *Puwede* = can / may, *kaya* = able to, *marunong* = know how to: all *can*. *Gusto ko ng kape* → *I'd like coffee* (ordering) / *I like coffee* (taste) |
| polite | reweight | English has no *po*. Respect = *Could you…? / Could I have…? / please / thank you*. *Paki-* ≈ *please* + verb. *Sir / Ma'am* only in service, not in every sentence; *Mr. / Ms.* + family name, or the first name alone. *Kindly* sounds stiff in American English |
| continuous | reweight | The other half of *kumakain*: happening **now** needs *be* + -ing. *Kumakain ako* → `I'm eating`, not `I eat` and not `I eating`. No -ing on state verbs (`I'm knowing ✗`) |
| past | reweight | Key lesson. *Kumain* (tapos na) → *ate*. The verb changes even when *kahapon* is there. *did* + base form: `What did she told you? ✗`. -ed said /t/, /d/, /ɪd/ and not dropped in clusters (*asked, worked*) |
| irregular-past | keep | Three-column lists (base / past / past participle) are the school habit; use them |
| the | reweight | Second article lesson, same emphasis: first mention *a*, second mention *the*, **general or abstract meaning: nothing** (`the nature ✗`, `the true happiness ✗`). *Yung / iyong* is closer to *the* than *ang* is |
| adjectives | keep | Order is already adjective + noun through the linker (*magandang bahay* → *a beautiful house*). *Mas* → -er / more, *pinaka-* → -est / most; never `more better`, `more harder` (TeacherPH) |
| going-to | keep | *Kakain* (gagawin pa) covers *will* and *going to*; keep ko's contrast |
| tense | reweight | Recap of present, continuous and going-to with **Tagalog prompts in which the same form needs different English tenses** (*Kumakain ako ng gulay* / *Kumakain ako ngayon*), previewing `aspect-tense` |
| joining | keep | Add a note: do not pair *although … but* (*kahit … pero*) or *because … so* (*dahil … kaya*) |
| numbers | reweight | Much is already known: Filipinos count money and tell time in English, and Filipino uses the same separators (1,500.50). Emphasis moves to (1) **thirteen / thirty** stress, (2) dates with ordinals (*January first*, not "January one"; Wikipedia, *Philippine English*), (3) decimals digit by digit (*point nine nine*, not "point ninety-nine"), (4) *alas-tres y medya* → *three thirty / half past three*, (5) prices in pesos (§9) |
| smalltalk | reweight | *Kumain ka na?* and *Saan ka pupunta?* are greetings in Tagalog but real questions in English. Comments on weight (*Tumaba ka!*), age, salary and *Bakit wala ka pang asawa?* are not small talk in the US. Deck localised (§9) |
| **pinoy-english** | **add** (after `smalltalk`, end of A1) | See below |
| past-continuous | keep | |
| will | keep | *Kakain* → *will* for decisions and promises |
| perfect | reweight | *Na* is **not** always *have* + past participle: *Kumain na ako kahapon* → `I ate yesterday` (finished time = past tense). *Nakapunta ka na ba sa…?* → *Have you ever been to…?*; *Hindi pa* → *not yet*. *Already* is over-used for *na*: `I'm here already` → `I'm here` |
| **aspect-tense** | **add** (after `perfect`, A2) | See below |
| modals | reweight | *Dapat* = should / must; *kailangan* = need to / have to; *puwede* = can / may; *baka* = might (and maybe); *hindi kailangan* = don't have to, not `mustn't` |
| to-ing | keep | |
| articles-2 | reweight | Generic statements: Tagalog uses *ang* (*Ang aso ay tapat*); English uses the bare plural: `Dogs are loyal`, not `The dog is loyal` by default and never `Dog is loyal`. This is where *the*-overuse is strongest (Crosthwaite & Choy 2016, as reported) |
| first-conditional | keep | *Kapag / kung* + present; no *will* after *if* |
| relative | reweight | The Tagalog linker already puts the clause after the noun (*ang lalaking nakatira sa tabi*), so order is easy. Focus on choosing *who* / *which* / *that* (the linker makes no such choice) and on not repeating the pronoun (`the man who he lives …`) |
| phrasal | keep | Mention that the Philippine forms `fill up a form`, `cope up with` are covered in `pinoy-english` |
| perfect-2 | reweight | *Limang taon na akong nagtatrabaho rito* (ginagawa + *na*) → `I have been working here for five years`, not `I am working here for five years`. *mula noong* = since, *nang* + duration = for |
| narrative | keep | |
| conditionals | keep | *Kung … sana* → second and third conditional |
| passive | reweight | Object-focus verbs (*Kinain ko ang mangga*) are everyday Tagalog and are **not** the English passive: translate them as active (`I ate the mango`). The English passive needs *be* + past participle with tense: `The house built in 1990 ✗ → was built` |
| reported | keep | *Daw / raw* → *he said … / I heard …*; then the tense shift |
| email | reweight | Replace Philippine office formulas: *Good day!* → *Hi Ana,* / *Dear Ms. Santos,*; *Dear Ma'am/Sir* → a name, or *Hello,*; *Kindly …* → *Could you …?*; *Please be informed that* → say it directly; *Thank you and God bless* / *More power!* → *Thanks, / Best regards,* [practitioner opinion; native check] |
| idioms | keep | |

**Additions:**
- **`pinoy-english`** («Ingles-Pinoy: tama sa atin, iba sa Amerika»), after `smalltalk`, deck «Mga bitag ng Ingles-Pinoy» (§9).
  - *Content:* three short tables.
    1. **Words that mean something else abroad** (class C): *CR / comfort room* → *restroom, bathroom*; *open / close the light* → *turn on / turn off*; *for a while* (phone) → *just a moment*; *go down* → *get off*; *traffic* (adjective) → *there's a lot of traffic*; *brownout* → *power outage*; *ref* → *fridge*; *aircon* → *air conditioner, AC*; *rubber shoes* → *sneakers*; *salvage* → means *rescue*, not kill; *gimmick* → *night out*; *bold* → *brave*; *xerox* → *photocopy*; *load* → *phone credit*; *commute* (any trip on public transport) → *take the bus / train*.
    2. **Small grammar habits** (class D): *fill out* a form, *cope with*, *result in*, *based on*, *share with*, *in my opinion*, *make a mistake*, *with regard to*; no double comparatives; *luggage, furniture, advice* without -s.
    3. **What is perfectly fine** (class A): *jeepney, barangay, sari-sari store, pasalubong*; say them and explain them.
  - *Tone:* the lesson opens by saying that Philippine English is a real variety with its own dictionary entries, and that this lesson is a map of where it differs, not a list of mistakes.
  - *Practice that meets §7:* `Where is the restroom?`, `Please turn off the lights.`, `I need to fill out a form.`, `I have two pieces of luggage.`, `There was a power outage last night.`
  - *Reason:* §4.8 and §2. It is the one zone that is specific to the Philippines, has reference-work and practitioner sources, and has no ko-en equivalent; it parallels ko `konglish`, zh `chinglish`, id `indo-english`. It is also the lesson fluent learners will find new.
- **`aspect-tense`** («*Kumain, kumakain, kakain*: aspect sa Tagalog, tense sa Ingles»), after `perfect`, so every English form it maps onto has been taught. Deck «Kuwentuhan».
  - *Content:* one table from the three Tagalog forms to the English tenses each can become.
    - *tapos na* (*kumain*; school name *perpektibo*) → past tense (*ate*); with *na* and present relevance → present perfect (*have eaten*); *kakakain lang* → *just ate / have just eaten*.
    - *ginagawa* (*kumakain*; *imperpektibo*) → present tense for habits (*eats*), present continuous for now (*is eating*), **past continuous** when the story is in the past (*was eating*), present perfect continuous with *na* + a length of time (*has been eating*).
    - *gagawin pa* (*kakain*; *kontemplatibo*) → *will / going to*; and in a past story → *was going to / would*.
    - *na / pa*: *na* ≠ always *already*; *pa* → *still* / *yet*; *hindi pa* → *not yet*.
  - Plus the two rules Tagalog lacks: (1) **English always says when**, even with *kahapon* in the sentence, and even in the middle of a story (*Noong bata ako, kumakain ako ng…* → `ate / used to eat`, not `eat`); (2) **after *did / does / will / to*, the verb goes back to the base form** (`did she tell`, not `did she told`).
  - *Practice that meets §7:* `She was reading a book when I called.`, `I have already bought the tickets.`, `We ate adobo last night.`, `He has been waiting for an hour.`
  - *Reason:* §4.3. Tense is the documented verb problem, Tagalog's system is aspectual by every reference description, and ko-en has no lesson that starts from aspect forms. It parallels id and th `time-markers`. A different id is proposed because Tagalog aspect is an inflection of the verb, not a separate marker word; if the lead prefers one id across courses, `time-markers` is acceptable.

**Not added (considered):**
- A `he-she` lesson. Evidence is practitioner-only, and the error is a speech slip that one lesson does not fix; `be`, `object-have` and the §7 secondary emphasis carry it across the whole course.
- A third article lesson (ko has `articles-3`). The two-lesson cap is spent; `articles`, `the` and `articles-2` are reweighted toward the zero article instead.

**Totals:** 39 existing lessons (23 A1 + 9 A2 + 7 B1): **15 keep, 24 reweight**, 0 dropped. Plus 2 additions, which are the only lesson-level parity exceptions; A1 grows to 24 and A2 to 10 (not counting the shared `alphabet`). All verdicts are [practitioner opinion] grounded in §4.

## 9. Vocabulary and cultural notes

**Localise (in decks, DIALOG, EXAMPLES, lesson bodies, PAUSE sets):**

| ko-en | tl-en |
|---|---|
| Minji (and other Korean names) | **Ana** (main); **Paolo, Liza, Marco** (alternates Carlo, Bea, Miguel, Joy). All are read naturally by an en-US voice. Avoid *Jose* and *Juan* (English voices say /hoʊˈzeɪ/, /hwɑːn/, and learners will hear an "error") and names with *ñ* or *ng*. English-speaking characters keep English names |
| Jay (*Please call me Jay.*) | keep: nicknames are normal in the Philippines |
| Kim (surname) | **Santos** (alternates Reyes, Cruz) |
| Seoul | **Manila** |
| Busan | **Cebu** (also Davao, Baguio, Quezon City, Makati) |
| Jeju / beach trips | **Boracay, Palawan**, Siargao |
| Seoul National University | "a university in Manila", generic; no real university name |
| kimchi, bibimbap | **adobo, sinigang, pancit, lumpia, lechon, halo-halo**; *rice* with everything |
| soju, beer in examples | keep as written (*beer, coffee, juice*); nothing in the course needs changing |
| K-pop, K-drama | genres, not artists: *a song, a series, a teleserye, a basketball game, karaoke* |
| Gangnam | Makati / BGC (say "Bonifacio Global City" once), Session Road (Baguio) |
| Chuseok, Korean holidays | **Christmas** (the season starts in September), **Holy Week**, *fiesta*, All Saints' Day (*Undas*), New Year |
| 존댓말 / 반말 | *po / opo* and *kayo* comparisons (polite lesson only) |
| won (₩) | **peso (₱)**. English strings write `50 pesos`, never `₱` or `PHP` (the voice reads symbols unpredictably) |
| Korea / Korean (the learner's own country and language) | **the Philippines / Tagalog**: *I'm from the Philippines.* (a ready-made *the* item), *Do you speak Tagalog?*, *Your Tagalog is really good!*, *Have you been to the Philippines?*, *the Philippine embassy*. Card note: «Filipino ang tawag sa wikang pambansa; sa labas ng Pilipinas, *Tagalog* ang mas kilala.» |
| subway, KTX | *the MRT / LRT*, *a jeepney*, *a tricycle*, *a bus*, *a ride-hailing app* (no brand names in English strings) |

**Deck localisation vs parity:** `parity.js` compares English deck targets per position, so any card whose English changes needs a `decks` entry in `deviations.json`, one entry per deck, reason «localisation per profile tl.md §9», exactly as `tools/content/id/deviations.json` does. The ko deck targets that carry Korean references, and so change:

| ko deck (position) | ko target → tl target |
|---|---|
| 2 자기소개 | *My name is Minji.* → *My name is Ana.* · *I'm from Korea.* → *I'm from the Philippines.* · *I live in Seoul.* → *I live in Manila.* |
| 3 생존 영어 1 | *Do you speak Korean?* → *Do you speak Tagalog?* |
| 10 스몰토크 | *Have you been to Korea?* → *Have you been to the Philippines?* |
| 12 칭찬·호감 표현 | *Your Korean is really good!* → *Your Tagalog is really good!* |
| 14 전화·문자 줄임말 | *Hello, this is Minji.* → *Hello, this is Ana.* · *Can I speak to Mr. Kim?* → *Can I speak to Mr. Santos?* |
| 15 여행 | *I have a reservation under Kim.* → *… under Santos.* |
| 16 병원·긴급 | *I need to contact the Korean embassy.* → *… the Philippine embassy.* |

Appended tl-only cards (pronunciation pairs, below) go in the same entry for their deck. Lesson bodies, DIALOG and EXAMPLES are not parity-checked and are localised freely.

**Pesos and numbers** (numbers lesson, shopping deck):
- Peso prices are ordinary-sized (₱50, ₱1,500), and Filipino writes numbers exactly as English does (1,234,567.5; ₱1,250.50; checked with `Intl`, §10). There is no "big number" or separator trap, unlike won or rupiah.
- Filipinos already say many prices and all years and phone numbers in English (`en-tl.md` §2.2). The lesson therefore spends its time on the points in §8 (`numbers` row).
- Philippine reading habits to mention, not to mark wrong in general conversation: "two hundred fifty" with no *and* (this is also American), prices read digit by digit ("three nine nine") (Wikipedia, *Philippine English*).

**Checks and practice:**
- Korean proper nouns appear in shared English strings in CHECKS and about 15 PRACTICE items (*Seoul*, *Busan*, *kimchi*, *K-pop*). **Leave the English unchanged** (parity) and translate the Filipino side literally (*Seoul*, *Busan*, *kimchi*); it reads as a learner talking about Korea, which suits a Filipino audience that follows Korean dramas and food.
- Do not file per-item deviations to localise them.

**Meanings that equal the English (Latin-script validator, `nativeScript: null`):** a card meaning, `{{ex}}` meaning, gloss or `p` identical to its English counterpart fails (case- and punctuation-insensitive). **This is a larger problem for Filipino than for Indonesian**, because the everyday Filipino word is very often the English word in English spelling.
- Write the Filipino-spelled form where one is in normal use, or a fuller gloss: «taksi», «kompyuter», «kape», «telebisyon», «hotel (tuluyan)», «menu (listahan ng pagkain)», «email (sulat sa internet)», «bus (sasakyan)», «pizza (pagkain)», «OK → sige / ayos».
- Interjections and greetings: *Hi!* → «Uy! / Kumusta!», *Bye!* → «Paalam! / Sige!», *Hello.* → «Kumusta.»
- A sentence gloss is never a problem: the Filipino sentence differs from the English one even when it keeps a loanword («Nasaan ang CR?»).
- A proper noun alone (*Manila*) needs a gloss («Maynila») or should not be a card.
- Content agents should self-check that every meaning contains at least one `cueTest` word or is visibly Filipino; the validator checks only "differs from English".

**Ingles-Pinoy list** (for the `pinoy-english` lesson and deck, at least 20 cards; target = the American form; `note` says «Sa Pilipinas: …»):

| Philippine use | American English (card target) | Source |
|---|---|---|
| *CR, comfort room* | restroom / bathroom | Wikipedia, *PE vocabulary* [curriculum convention]; SoraNews24 |
| *open / close the light* | turn on / turn off the light | Wikipedia; TeacherPH |
| *brownout* | power outage | Wikipedia |
| *ref* | fridge / refrigerator | Wikipedia |
| *aircon* | air conditioner / AC | Wikipedia |
| *rubber shoes* | sneakers | Wikipedia |
| *go down* (from a jeepney, bus) | get off | Wikipedia |
| *It's traffic.* | There's a lot of traffic. / Traffic is heavy. | Wikipedia; TeacherPH |
| *salvage* (= kill) | *salvage* means save from loss | Wikipedia |
| *gimmick* (= night out) | a night out / hang out | Wikipedia |
| *bold* (= sexually explicit) | *bold* means brave | Wikipedia |
| *xerox* | photocopy / make a copy | Wikipedia; TeacherPH |
| *load* | (phone) credit / prepaid minutes | Wikipedia |
| *commute* (= take public transport) | take the bus / the train (*commute* = travel to work) | Wikipedia |
| *mineral water* | bottled water | Wikipedia; SoraNews24 |
| *pentel pen* | marker | Wikipedia; SoraNews24 |
| *double-deck* | bunk bed | Wikipedia |
| *advanced* (clock) | fast | Wikipedia |
| *batchmate* | classmate / someone from my year | Wikipedia |
| *viand* | dish (eaten with rice) | Wikipedia |
| *commit a mistake* | make a mistake | TeacherPH [practitioner opinion] |
| *for my opinion* | in my opinion | TeacherPH |
| *more better / more harder* | better / harder | TeacherPH |
| *luggages, baggages* | luggage, baggage | 8List [practitioner opinion] |
| *with regards to* | with regard to / regarding | 8List |
| *share to* | share with | 8List |
| *on January* | in January | 8List |
| *for a while* (phone) | just a moment / hold on | [practitioner opinion, no source] |
| *I'll go ahead.* (leaving) | I'm heading out. / I have to go. | [practitioner opinion, no source] |
| *fill up a form, cope up with, result to, based from* | fill out, cope with, result in, based on | [practitioner opinion, no source opened] |

**Deck names (FINAL).** Rows 1–20 replace the Korean course's 20 decks in the same order. Sentence case, «at» for "and". Names are progress keys: unique, never «Mga phrase ko».

| # | name | linked lesson or notes |
|---|---|---|
| 1 | **Pagbati** | Greetings |
| 2 | **Pagpapakilala** | Self-introduction; linked from `articles`, `be`. Localised cards (table above) |
| 3 | **Mahahalagang pangungusap 1** | Survival English 1; linked from `polite`. *Do you speak Tagalog?* |
| 4 | **Mahahalagang pangungusap 2** | Survival English 2 |
| 5 | **Direksyon at sasakyan** | Directions and transport. Lesson bodies use jeepney, MRT, tricycle |
| 6 | **Pag-order sa restawran** | Ordering at a restaurant [native check: *restaurant* / *kainan*] |
| 7 | **Kapihan at convenience store** | Café and convenience store |
| 8 | **Pamimili at pagbabayad** | Shopping and paying. Prices in pesos in lesson bodies |
| 9 | **Numero, oras at petsa** | Numbers, time and dates; linked from `prep`, `numbers` |
| 10 | **Kuwentuhan** | Small talk; linked from `tense`, `smalltalk` and the tl-only `aspect-tense` |
| 11 | **Damdamin at reaksyon** | Feelings and reactions |
| 12 | **Papuri at paghanga** | Compliments and liking. *Your Tagalog is really good!* |
| 13 | **Trabaho at email** | Work and email; linked from `email`. Add BPO and office phrases in lesson bodies only |
| 14 | **Tawag, text at mga daglat** | Phone and text abbreviations. Explain with Filipino chat habits (*hehe, haha, otw, brb*) |
| 15 | **Biyahe (airport at hotel)** | Travel. Departures from NAIA and Mactan–Cebu in lesson bodies |
| 16 | **Ospital at emergency** | Hospital and emergencies. *the Philippine embassy* |
| 17 | **Mga phrasal verb** | linked from `phrasal` |
| 18 | **Ingat sa bigkas** | Pronunciation traps; linked from `pron`. Keep the shared pairs; append *ship / sheep*, *full / fool*, *cat / cut*, *zoo / Sue*, *his / hiss* as new cards (deviation entry); the *think* / "tink" contrast is shown in the lesson body only |
| 19 | **Mga idyoma sa Ingles** | linked from `idioms` |
| 20 | **Pelikula, serye at slang** | Movies, series and slang |
| 21 | **Mga bitag ng Ingles-Pinoy** | tl-only, linked from `pinoy-english`; ≥ 20 cards from the list above; needs a `decks` deviation |

- The shared alphabet deck (added to every course after position 20) is named **Alpabeto**. Because of it, row 21 sits one position later in the generated course, as the note in `tools/content/id/DECKNAMES.md` explains.
- No second tl-only deck: `aspect-tense` links to «Kuwentuhan».

**Other deck notes** [practitioner opinion]:
- **Kuwentuhan:** weather is a weak topic in Manila except for typhoons and heat; use traffic, food, the weekend, family, basketball, the province you are from.
- **Trabaho at email:** *shift, team lead, client, deadline, overtime, leave* (as in *sick leave*); note *resume* vs Philippine *biodata* / *CV*.
- **Biyahe:** immigration questions on arrival are a real need for first-time travellers and overseas workers (*What is the purpose of your visit?*); keep them in the lesson body if the shared deck lacks them.

## 10. Interface wording notes

**Critical for this language: a Tagalog interface dictionary already exists** (`tools/i18n/tl/ui.json`, 784 exact keys and 274 patterns, with `tools/i18n/tl/NOTES.md`). It was written for tl-ko and is one pack per interface language, so tl-en shows the same strings. This section follows it; its own author also asks for a native check (NOTES §4).

**What is kept exactly as `tl/NOTES.md` decided** (and why it also suits tl-en):
- **Address:** *ikaw / ka / mo / iyo*, never *kayo*; **no *po / ho / opo***; requests in the plain command form or with *paki- / pakiusap*. The Microsoft Filipino style guide independently says the same (§2).
- **Commands:** object-focus command forms on buttons (*Piliin, Buksan, Isara, Pakinggan, Ulitin, Laktawan*); *mag- / -um-* where there is no object (*Makinig, Magpatuloy*).
- **Loanword list** (NOTES §2): *app, card, deck, quiz, level, XP, streak, email, settings, sign in, sync, backup, hint, review, drill, feedback* stay English. The Microsoft guide says conversational Filipino "heavily mixes the local language with English" and tells translators to "feel free to use well-adapted English terms that native speakers commonly use".
- **English verbs with *i- / mag-*** on buttons (*I-check, I-save, I-type, Mag-sign in*) are **interface vocabulary and stay**, hyphenated as the Microsoft guide prescribes (*i-download, mag-save*). The "Filipino, not Taglish" rule of §2 governs lesson explanations, not button labels; an explanation may name a button exactly as it appears («pindutin ang *I-check*»).
- **Spelling:** KWF spelling, no accents, no apostrophe contractions, *din / rin* and *dito / rito* by sound.
- **Feedback words:** «Tama!» / «Hindi pa tama.»; «Subukan ulit»; «Alam ko na» / «Ulit».
- **Language names:** «Ingles» (already used in *I-type ang Ingles*, *Matuto ng Ingles, 5 minuto araw-araw*). `profile.json` `name.tl` is therefore **«Ingles»**.

**Counts: one translation each, no linker, no *mga*** (PHASE2 rule; already how the pack is written):
- Tagalog needs a linker between a number and a noun (*limang card*, *apat na card*), and the right one depends on the number word, which a digit hides. The pack therefore writes the slot **bare**: «{1} card», «{1} araw», «{1} aralin», «{1} deck», «{1} linggo». Philippine apps write "5 araw" the same way [practitioner opinion, from NOTES].
- Never write *-ng*, *na*, *din / rin* or *daw / raw* directly after a slot; never put *mga* before a counted noun.
- CLDR gives Filipino two plural categories (`one`, `other`) with an unusual rule (checked locally with `Intl.PluralRules('fil')`: 4, 6, 9, 14, 16, 19 are `other`; 0–3, 5, 10, 11, 21 are `one`). **It does not matter**: both templates carry the same text.

| English pattern | Filipino (as in ui.json unless marked) |
|---|---|
| `N cards due` | «{1} card na para i-review» |
| `N cards` | «{1} card» |
| `N lessons` | «{1} aralin» |
| `N days` | «{1} araw» |
| `N-day streak` | «streak {1}» / «{1} araw na streak» (fixed-digit strings only) |
| `N words` | «{1} salita» (new if needed) |
| `N questions` / items | «{1} tanong» (new if needed) |
| `N XP` | «{1} XP» |
| `Level N` | «Level {1}» |
| `N%` correct | «{1}% tama» |
| `N min` | «{1} minuto» |

**Language-name slots** take the dictionary form of the name. Tagalog nouns have no case endings and no gender, so «Ingles» fits after *ng* and *sa* unchanged: «Pag-unlad sa {1}», «Nag-aaral na ng {1}», «i-type ito sa {1}». The only thing to avoid is a linker or enclitic touching the slot («{1}ng», «{1} na kurso», «{1} rin»). Safest shapes: slot after *ng* / *sa*, at the end, or after a colon («Kurso: {1}»).
- `Intl.DisplayNames(['tl'])` returns «Ingles» for `en` (checked locally), so this course shows no leak. It returns English for most other languages («Korean», «Spanish»); that is the tl-ko problem already listed in NOTES §5, not new here.

**UI glossary** (use exactly; from ui.json):

| English | Filipino | Note |
|---|---|---|
| lesson | aralin | «Aralin 5»; plural *mga aralin* only when not counted |
| practice (activity) | pagsasanay | verb *magsanay*; «Magsanay ulit» |
| review (SRS) | review / *i-review* | English kept (NOTES Q3); not *balik-aral* |
| due | para i-review | |
| deck | deck | |
| card / flashcard | card | |
| streak | streak | |
| hint | hint | «Hint sa bigkas» |
| check (button) | I-check | |
| correct / not quite | Tama! / Hindi pa tama. | never «Mali ka» |
| answer / explanation | sagot / paliwanag | `why` is shown under «Paliwanag» (new if the key exists) |
| try again | Subukan ulit | |
| multiple choice | pagpipilian | (new if needed) |
| word tiles (order) | Ayusin ang mga salita | |
| gap-fill | Punan ang patlang | *patlang* is also the cue word in `mcBlankCue` |
| typed answer | I-type ang Ingles | |
| drills | drill | tab «Drill» (below) |
| level / XP | level / XP | |
| pronunciation aid | bigkas | «Ipakita ang bigkas sa pagsasanay»; the IPA line is a *hint sa bigkas* |
| meaning / note / example | kahulugan / tala / halimbawa | |
| progress | pag-unlad | prose word everywhere |
| feedback | feedback | |
| settings / sign in / sync | settings / mag-sign in / sync | |
| learned / mastered | natutunan / kabisado na | |

**Numbers, dates and time** (`Intl` with `fil-PH`, checked locally in Node; the Microsoft guide agrees on the decimal point, the thousands comma, «Enero 1, 2013» and «1:00 PM»):
- Numbers: «1,234,567.5». Currency: «₱1,250.50». Percent: «85%».
- Dates: long «Nobyembre 16, 2026» (month first, as in the US), full «Lunes, Nobyembre 16, 2026», short «11/16/26». Weekdays and months capitalised; short weekday «Lun».
- Time: 12-hour, «9:05 PM».
- All of this equals the en-US shape, so nothing in the English lessons has to "convert" formats.

**Bottom nav at 390px.** Seven labels, each ≤ 8 characters (PHASE2-BRIEF):

| English | Filipino (proposed) | Chars | Now in ui.json |
|---|---|---|---|
| Today | **Ngayon** | 6 | Ngayon ✓ |
| Practice | **Praktis** | 7 | Pagsasanay (10) ✗ |
| Review | **Review** | 6 | Review ✓ |
| Lessons | **Aralin** | 6 | Aralin ✓ |
| Drills | **Drill** | 5 | Mga drill (9) ✗ (the fifth tab is keyed "Read" → «Basa», 4 ✓, in the tl-ko bar) |
| Progress | **Progreso** | 8 | Pag-unlad (9) ✗ |
| Feedback | **Feedback** | 8 | Feedback ✓ |

**Wording in the existing pack that should change (list for the lead and the interface writer):**
1. **Tab «Pagsasanay» (10) → «Praktis» (7)** on the tab only. NOTES §4 question 1 already asks whether *Praktis* is the app word. The prose word for the activity stays *pagsasanay*. If a native reviewer rejects *Praktis*, the fallback is «Sanay» (5) [native check].
2. **Tab «Pag-unlad» (9) → «Progreso» (8)** on the tab only, or keep «Pag-unlad» as the one 9-character exception if the lead's real-layout check passes (es ships «Lecciones» and id «Pelajaran» at 9). Prose keeps *pag-unlad*.
3. **«Mga drill» (9) → «Drill» (5)** where "Drills" is a tab label, in line with «Aralin», which the pack already writes without *mga* on the tab. The heading «MGA DRILL» can stay.
4. **These three changes touch tl-ko**, whose lesson prose names tabs "exactly as on screen" (`tl-ko.md` §3.5: *Pagsasanay, Pag-unlad*). Whoever changes the tab keys must update that prose in the same pass, or add the short labels as separate tab-only keys.
5. ***sentence* → *pangungusap*** in the two interface strings that show the word to tl-en learners («pagbuo ng sentence» in the drills blurb): tl-en lesson prose says *pangungusap* (§3). This is a preference, not an error; if the lead wants one word across tl-ko and tl-en, keep *sentence* in the UI and let tl-en prose differ.
6. **Keys written "literally for Korean"** (*Koreano, Hangul, romanization*) are not shown in an English course and need no change. The generic English-course keys were filled literally («Ingles», «Hint sa bigkas», «I-type ang Ingles») and are right for tl-en as they stand; NOTES says they were never seen in use, so they should be read once on screen.
7. **`fil-PH` browsers** fall through to English because the loader cuts the locale to two letters (`fil` → `fi`); NOTES §5 gives the fix. It matters more for tl-en, whose users are in the Philippines.
8. Nothing else in the pack conflicts with this profile. The open doubts in NOTES §4 (*Alam ko na, Ulit, Kahinaan, natutunan / natutuhan*) stand as they are.

**Buttons, toasts, instructions** (new strings a tl-en course may need; same style as the pack):
- Practice instructions keep one verb per item type: «Piliin ang tamang sagot», «Ayusin ang mga salita», «Punan ang patlang», «I-type ang pangungusap sa Ingles».
- Toasts are short and never scold: «Ayos! Tapos na ang mga card mo ngayong araw.», «5 araw ka nang tuloy-tuloy.» [native check]
- No *po*, even in apologies and errors: «May nagkaproblema. Subukan ulit.»

## 11. Gaps and unverified claims

- **Skipped by instruction:** `reports/Grammar learning order research.md` does not exist in this worktree, so the evidence labels follow `id.md`, `zh.md` and `vi.md` instead of that report, and no cross-language acquisition-order claim (for example Murakami & Alexopoulou on article-less L1s) is made here. `docs/profiles/OTHERS.md` has no Tagalog section (it covers eleven other languages).
- **Not a native speaker.** Every Filipino string here is a proposal: the voice samples (§2), glossary choices (*helping verb, pang-ugnay, pinaikling anyo, salitang pampanahon, idyoma, pantig* against tl-ko's *syllable*), all `why` lines and frames (§7), lesson titles, deck names (§9; especially *restawran*, *Kapihan*, *mga daglat*, *Mga bitag ng Ingles-Pinoy*), tab labels *Praktis* and *Progreso*, and the toasts (§10). The policy for *po* inside translations (§2) also needs a native teacher's view.
- **The premise "Tagalog has no articles" is only half true.** Tagalog has noun markers that reference works call articles or case particles, and the one study of L1-Tagalog article use found more added than omitted articles. The course is still correctly built on the ko course (the a / the choice is new to the learner), but writers must not copy the Korean explanations' assumption that the learner forgets articles.
- **Blocked or unreadable sources** (seen only as search-result summaries; **not** in Sources and not relied on for numbers):
  - Crosthwaite & Choy 2016 on Filipino learners' article use (HKU repository: DNS error and 403). Used only as reported inside Barrios & Mercado-Abdon.
  - Tuparan & Caturay 2024, Silliman Journal (1,271 errors in education students' essays; DNS error); a 2022 study of student journalists on DOAJ (403); Chua et al. 2015 and a 2016 DLSU paper on basilectal Tagalog speakers' vowels (DLSU site 403); a University of Mindanao study of *sa* and English prepositions (404); Sandil 2014 (file too large).
  - Acceptability studies of Philippine English (Cainta 2025 in *K@ta*, an MDPI *Languages* 2024 study; both 403). So the A–D classification in §2 has no fetched acceptability data behind it.
  - The Manila Bulletin column claiming that half of Filipinos' grammar mistakes are verb endings (403); a 2024 Grade 12 classroom study of teaching IPA symbols (DOAJ 403); Culture Trip and Inquirer lists of Philippine English (timeout, 403); an ABS-CBN report on the medium of instruction (403).
  - Bautista 2008 on the grammatical features of Philippine English: only the abstract page opened, and it names no features.
- **Partial reads:** the Wikipedia articles *Philippine English*, *Philippine English vocabulary* and *Tagalog grammar* are longer than the 100,000 characters read. Fontillas et al.'s Table 4 is an image; its counts were read from the running text, they do not sum to the stated total, and the method of counting is not in the readable text. Abansa et al.'s year is not legible (academic year 2025–2026 is mentioned), and their students are from Caraga, where the first language is not Tagalog. Tulabut et al. do not report first languages (Angeles City is largely Kapampangan-speaking). The Stanford CLAD page has no author or data. PDFs were read through a home-made text extractor, so small transcription slips are possible in quoted numbers.
- **Small or indirect studies:** Barrios & Mercado-Abdon (42 students, essays, 122 + 88 errors; interviews with ten); Lesho 2018 (four acrolect speakers); Berowa 2019 (abstract only, two speakers per language). No accuracy-by-level data for Filipino learners was found for any feature.
- **No fetched source for:** he / she error rates (practitioner reports only); copula and do-support errors (§4.7); the aspect-to-tense transfer as a cause; `two brother` after numerals; *for a while*, *I'll go ahead*, *fill up, cope up with, result to, based from* (widely described, none opened); politeness carry-over and email formulas (§4.11, `email` row); passive / object-focus transfer; *comFORtable*; who the learners are and which exams they sit (§5); IPA familiarity among learners.
- **Disagreement:** on prepositions, Tulabut et al. cite Chua et al. 2015 as finding little mother-tongue interference, while the *sa* explanation is the standard teaching account; Fontillas et al. call all their categories intralingual and at the same time features of a variety. The profile keeps the Tagalog contrasts as teaching devices, not as proven causes.
- **Pronunciation aid:**
  - No study compares IPA, respelling and no aid for Filipino learners; the choice rests on the structure of Filipino spelling and on the copy benefit.
  - Whether adult Filipino learners can read the symbols after a one-screen key is untested. If first-attempt logs or feedback show the aid is ignored, revisit with a respelling pilot.
  - The IPA for Filipino names and places (§6 rule 8) is the author's approximation of what an en-US voice says; check against the actual TTS, especially *Cebu*, *Davao*, *Paolo*, *Tagalog*.
  - OALD was not fetched (same gap as zh.md).
- **Standing rule:** the keywords are English loan terms, so the regex cannot distinguish a Filipino `why` from an English one. The "at least one no-article hinge per set" advice depends on what the shared items allow and was not counted.
- **cueTest:** tested against 3,265 Hangul-free strings of the ko pack (0 hits), the localised strings of §9 and the sample prompts of §7. Writers' real prompts may still miss the list; the validator will flag them. New English strings in tl-only lessons must be rechecked (for example a card containing the name *Tama* or the word *sila* would collide).
- **Learner profile:** EF EPI is a self-selected online test; two editions are quoted because the country page had already moved to the 2026 edition; the band label was not readable. Years of English instruction and the current DepEd curriculum were not verified from DepEd documents; only RA 12027 was read.
- **Interface:** tab labels *Praktis* and *Progreso* are proposals; the 390px widths were not rendered. The claim that Philippine apps write bare "5 araw" is carried from NOTES, not checked.
- **Not researched:** learners whose first language is Cebuano, Ilocano or another Philippine language and who use Filipino as a second language (their transfer differs; the repository has a separate `ceb` line); heritage speakers abroad; children.

## Sources

Web pages and files opened for this profile (2026-11-23):
- [Barrios & Mercado-Abdon 2024, Exploring cross-linguistic influence from L1 Tagalog to L2 English in article use (AsTEN Journal of Teacher Education 8, 139–152)](https://po.pnuresearchportal.org/ejournal/index.php/asten/article/download/2778/643/8412)
- [Fontillas, Quintos & Ronquillo 2022, Philippine English proficiency of the K12 students: basis for the improvement of the English curriculum (PACLIC 36)](https://aclanthology.org/2022.paclic-1.80.pdf)
- [Tulabut, Guzman, Abaring, Armada, Ilustre & Torda 2018, Common errors in prepositions committed by Grade 9 students (TESOL International Journal 13(3))](https://files.eric.ed.gov/fulltext/EJ1247198.pdf)
- [Abansa, Pitogo, Guitguiten, Roma, Villa & Alda, Analysis of inflectional morpheme use in the written compositions of pre-service teachers (vol. 21 no. 4, pp. 35–43)](https://ph02.tci-thaijo.org/index.php/jtir/article/download/265942/174427/1046817)
- [Lesho 2018, Philippine English (Metro Manila acrolect) (Journal of the International Phonetic Association 48(3), 357–370)](https://www.cambridge.org/core/product/F041BD5DCF9DC4B66F822D30F784EF82/core-reader)
- [Berowa 2019, Philippine English phonology: its features across speakers of the major Philippine languages (DLSU dissertation, abstract)](https://animorepository.dlsu.edu.ph/etd_doctoral/1526)
- [Santillan, Balinas & Couper 2023, Philippine high-school teachers' cognition of pronunciation teaching (abstract)](https://zenodo.org/records/8375652)
- [Bautista 2008, Investigating the grammatical features of Philippine English (abstract page)](https://animorepository.dlsu.edu.ph/faculty_research/552)
- [Wikipedia, *Philippine English*](https://en.wikipedia.org/wiki/Philippine_English)
- [Wikipedia, *Philippine English vocabulary*](https://en.wikipedia.org/wiki/Philippine_English_vocabulary)
- [Wikipedia, *Tagalog grammar*](https://en.wikipedia.org/wiki/Tagalog_grammar)
- [Wikipedia, *Tagalog phonology*](https://en.wikipedia.org/wiki/Tagalog_phonology)
- [Stanford CLAD course page, *Common Language Errors* (Filipino-American students)](https://web.stanford.edu/~hakuta/www/archives/syllabi/E_CLAD/sfusd_cult_03/amy_leigh/amy_leigh/languageerrors.html)
- [expat.com forum, *Tagalog and "he" and "she"*](https://www.expat.com/en/forum/asia/philippines/995789-tagalog-and-he-and-she.html)
- [TeacherPH (Rosalyn Bautista 2015), Common mistakes Filipinos make when using English](https://www.teacherph.com/common-mistakes-filipinos-make-when-using-english)
- [8List (Alvin Guiao Santos 2019), The 8 most cringe-inducing grammatical errors Filipinos commit](https://www.8list.ph/?p=111744)
- [SoraNews24 (Preston Phro 2014), Do you use these Philippine English words and phrases?](https://soranews24.com/2014/08/05/do-you-use-these-philippine-english-words-and-phrases/)
- [EF EPI, Philippines country page](https://www.ef.com/wwen/epi/regions/asia/philippines/)
- [EF EPI 2025 fact sheet, Philippines](https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/fact-sheets/2025/ef-epi-fact-sheet-philippines-english.pdf)
- [Republic Act No. 12027 (2024), LawPhil](https://lawphil.net/statutes/repacts/ra2024/ra_12027_2024.html)
- [Microsoft Filipino Localization Style Guide](https://download.microsoft.com/download/25b05cb0-c8ad-41f0-be2e-30335c6ceb6a/fil-fil-StyleGuide.pdf) (found through the [Microsoft style guides list](https://learn.microsoft.com/en-us/globalization/reference/microsoft-style-guides))
- [Open Exam Prep, Philippine civil-service study guide: Filipino grammar (balarila)](https://open-exam-prep.com/study-guides/ph-cse-professional/grammar/filipino-grammar-balarila)
- Repository files: `docs/briefs/profile-ko-based.md`, `docs/profiles/id.md`, `zh.md`, `vi.md`, `th.md` (deck table), `en-tl.md`, `tl-ko.md`, `OTHERS.md`; `docs/PIPELINE.md`, `docs/PHASE2-BRIEF.md`, `docs/PRACTICE-SPEC.md`, `docs/PILOT-SPEC.md` (headings); `tools/content/lib.js`, `validate.js`; `tools/content/ko/` (lesson ids, deck list, deck targets), `tools/content/zh/profile.json`, `PRON-RULES.md`, `decks.js`; `tools/content/id/profile.json`, `DECKNAMES.md`, `deviations.json`; `tools/content/th/decks.js`; `tools/i18n/tl/ui.json`, `tools/i18n/tl/NOTES.md`; `packs/course-ko-en.js` (cue-word test).
