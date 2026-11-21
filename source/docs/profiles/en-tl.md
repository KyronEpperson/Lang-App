# English speakers learning Tagalog: course profile

Course `en-tl`: Tagalog (Filipino) for English speakers. Every explanation, prompt, `why`, `hint`, meaning and card note is in English. Answers, examples and card targets are in Tagalog. Machine-readable twin: `tools/target/tl/profile.json`, generated from the same data as §6 to §9, so the two files agree. Pronunciation generator: `tools/target/tl/respell.js` (§6).

(The brief names the `de` entry of `packs/roadmaps.js` once; its last section corrects this to the `tl` entry, merged from `docs/roadmaps/tl.json`. This profile uses the `tl` entry. The course keeps its HOLD file until the lead releases it.)

**Evidence tags.**
- **[research-backed]**: an empirical study opened for this profile. The study is named and its sample given. **(abstract only)** says only the abstract was read.
- **[curriculum convention]**: what syllabuses, textbooks, dictionaries and courses do.
- **[practitioner opinion]**: a teacher's, school's, blog's or guide's stated view, with no data behind it.
- **[inference]**: this profile's own reasoning, **including the author's own knowledge of Tagalog**. Every claim of that kind that a writer will copy into the course is listed for a native check in §11.

Untagged rules in §6 to §10 are design decisions, not findings.

## 1. Summary

- **Variant and voice:** everyday Manila Tagalog (Filipino), standard spelling with no accent marks, `fil-PH` voice; Taglish loans that Manila speakers really use are taught as the normal word (*jeep, cellphone, CR*), with Tagalog grammar around them; native numbers for counting, Spanish for clock time (*alas-tres*), both for prices.
- **Respect:** *po / opo* and the polite *kayo* to elders, strangers and staff; every prompt with an addressee carries a cue ("(polite)", "(to a friend)"), and the cue decides whether *po* is required. Titles *kuya, ate, tito, tita, lolo, lola, sir, ma'am*.
- **Biggest traps (§4):** markers and pronoun sets (*ang / ng / sa, ako / ko / akin*); verb focus (who gets *ang*); the linker *na / -ng*; predicate-first order and the little words; *po*; stress and the catch; *hindi / wala / huwag*; aspect, not tense.
- **Standing rule (§7):** every set re-tests **(a) the right marker / pronoun form for the role, including focus** and **(b) the linker**. Keywords tested on 52 sample lines (52 / 52), including lines about the sound *ng* that must not match.
- **Pronunciation aid (§6):** required English-letter respelling, **generated** by `respell.js` from a stress word list (`LEX`, 318 forms, 89 checked in Wiktionary / Wikipedia; about one in four of the author's checked guesses was wrong, so the other 229 need checking): `sah-LAH-maht pohq`, `BAH-tahq`, `heen-DEEQ`. CAPITALS = stress, `q` = the final catch (only before a pause). Unlisted words get a guess plus a warning; homograph rows go in `STRING_CTX`. Shown on the card for the whole course.
- **Lessons (§8):** 27: all 25 roadmap items kept; `linker` and `ng-pronouns` moved up; `yes-no` takes *wala / huwag*; added `word-order` and `taglish`.
- **Decks (§9):** 18 in 5 groups, including "Traps for English speakers" and "Everyday Manila Taglish".
- **Typing and engine (§10):** Latin script, no script stage, `accents: false`, empty accent bar, typing by default. Top engine requests: voice matching (`fil-PH` currently falls back to Finnish), Azure `fil-PH` clips, "almost" for a missing hyphen.

## 2. Variant, register and voice

### 2.1 Variant: everyday Manila Tagalog (Filipino)

- The roadmap names "Tagalog (Filipino) of Manila, standard modern spelling", basis first-year university Filipino (SEASSI, Oxnard College FILI R101, Polyglottist) [curriculum convention]. The course keeps it.
- **"Tagalog" or "Filipino".** Filipino, the national language, is standardised Manila Tagalog with an open door to loans; for an A1 learner the two are the same language [inference]. The course is called Tagalog in the interface (that is what US learners search for) and says once, in `sounds`, that Filipinos also call it Filipino.
- **Voice:** `ttsLang: "fil-PH"` (§10.1 on device voices). Spelling follows current standard spelling with no accent marks (§10).
- **Target register:** the polite everyday speech of Metro Manila: what a shop assistant, a jeepney driver, an office worker or a tita says. Not the formal written register (*Ako ay…* in every sentence, purist coinages), and not slang. Taglish, the free mixing of English into Tagalog, is the normal informal style of educated Manila speakers ([Wikipedia, *Taglish*](https://en.wikipedia.org/wiki/Taglish), citing Bautista 2004 on proficiency-driven switching) [practitioner opinion: Kaiwa tells learners "Don't feel you need to speak pure Tagalog" ([Kaiwa](https://trykaiwa.com/blog/filipino-workplace-casual-conversations-realistic))].
- **Pronunciation:** the careful Manila standard. Two facts shape the aid (§6): stress and the final glottal stop are distinctive but unwritten ([Wikipedia, *Tagalog phonology*](https://en.wikipedia.org/wiki/Tagalog_phonology): *baba* "father" / *babá* "piggyback" / *babà* "chin" / *babâ* "go down"; *pito* "whistle" / *pitó* "seven"), and a word-final glottal stop is "often elided mid-sentence, especially in Manila speech", with the vowel lengthened (same source) [research-backed: summary of the phonological literature].

### 2.2 Taglish: which word the course teaches

Everyday Manila speech uses English words freely, and a learner who insists on a purist word sounds odd [practitioner opinion: learningtagalog notes that some English words "are more common in 'standard' Manila Tagalog than the native word" ([learningtagalog, *Sloppiness*](https://learningtagalog.com/articles/sloppiness_in_spoken_and_written_tagalog.html))]. The course's rules [inference unless tagged]:

1. **Model answers, card targets and examples are everyday Tagalog**, with the loans that Manila speakers actually use as the normal word. The grammar (markers, affixes, word order, linker) is always Tagalog.
2. **Spanish-origin loans** are taught in Filipino spelling as the normal word: *kotse, mesa, silya, kutsara, sapatos, bintana, oras, relo, kusina, opisina, Lunes, piso*.
3. **English loans for modern things** are taught as the normal word, in the spelling Manila people normally write (English spelling where it is not respelled in everyday writing): *jeep, bus, taxi, cellphone, computer, aircon, CR* (comfort room = restroom), *mall, Grab*. Where the respelled form is also common (*dyip, taksi, selpon, kompyuter*), typed answers accept both; the card target uses the English spelling and the note gives the other.
4. **English verbs with Tagalog affixes** (*mag-shopping, nag-drive, magda-drive*) are recognition only, in `taglish` and in card notes. Typed answers never require them and never accept them where a Tagalog verb was taught (the item is about the affix on a Tagalog root).
5. **Numbers by use** ([learningtagalog, *Numbers in use*](https://learningtagalog.com/grammar/other_describing_words/expressing_quantity_or_distribution/numbers_in_use.html); [Wiktionary, *Appendix: Tagalog numbers*](https://en.wiktionary.com/wiki/Appendix:Tagalog_numbers)) [practitioner opinion / reference work]:

| Use | Taught form | Accepted too | Not taught |
|---|---|---|---|
| Counting things, people, age, durations | native: *dalawang bahay, tatlong taon, limang minuto, apat na oras* | | *tres oras* for "three hours" (wrong: Spanish numbers are for the clock) |
| Clock time | Spanish with *alas-*: *alas-tres, alas-singko y medya* | *alas tres* (no hyphen, §10) | native *ikatlo ng hapon* (formal, recognition only) |
| Prices up to about 100 | Spanish in speech: *bente pesos, singkwenta* | native *dalawampung piso*; English *twenty pesos* is heard [learningtagalog] | |
| Prices from 100 up | native hundreds and thousands: *isang daan, limang daan, isang libo* | English | |
| Dates, years, phone numbers, addresses | recognition only (English is usual for years and phone numbers; Wiktionary says Spanish is "most preferred" for dates, learningtagalog shows English) | | typed dates |
| Days of the week, months | Spanish-origin Tagalog: *Lunes, Martes…; Enero…* | | |

   The two sources disagree on dates and partly on money; the course therefore never makes a typed answer hinge on dates, and prices accept the native and the Spanish form wherever both are natural (§11).
6. **Typed answers** accept the taught form and the listed alternatives only. An English word typed where the item teaches a Tagalog one is wrong, and the `why` says which word Tagalog speakers use; a `why` never calls a common loan "wrong Tagalog".

### 2.3 Politeness: *po / ho, opo, kayo*

- [practitioner opinion / descriptive essay] *Po* and *ho* are enclitics that follow the first full word or phrase; *opo, oho* are the polite "yes"; the plural *kayo* addresses one person respectfully, and the particles and *kayo* usually go together; *ikaw* with *po* is rare (prayer, sarcasm). Some speakers prefer *po*, some *ho*; *po* is the safe default (Kess 1981, [*WPLC* 1(2)](https://journals.uvic.ca/index.php/WPLC/article/view/5039/1946), an essay without speaker data). Kaiwa advises *po / opo* with bosses, managers and older colleagues "even in casual conversations".
- **Decision.**
  - The course teaches ***po*** (and *opo*) as the respect form; *ho / oho* are recognition only (one card note, one line in `greetings`).
  - **Who gets *po*:** anyone older than you, strangers who are adults, customers, staff you do not know (it is never wrong to a stranger), parents, grandparents, *tito / tita*. **No *po*:** friends, siblings your age, children, people younger than you.
  - **Polite "you" = *kayo* (ang form), *ninyo / niyo* (ng form), *inyo* (sa form), plus *po*.** *Ikaw / ka* is for friends, family your age and children. Taught in `pronouns` and `greetings`.
- **How prompts cue it.** Every English prompt addressed to someone carries one cue: "(polite)", "(to an older woman)", "(to a stranger)", "(to Lola)" → *po* and *kayo* forms; "(to a friend)", "(to a child)" → no *po*, *ikaw / ka*. A prompt with no addressee (a statement about a third person, a label) has no cue and no *po*.
- **When *po* is required in an answer:** whenever the prompt carries a polite cue. There is no "optional word" mechanism in the matcher, so writers list the *po* form (and the *kayo* form) as the only accepted answers for a polite cue, and only the plain form for a friend cue. Never list both for the same prompt: the cue decides. *Po* goes after the first full word, among the little words in their fixed order (*Kumain na po kayo?*, not *Kumain na kayo po?*); writers list only the natural position (§7 on enclitic order).

### 2.4 Forms of address

[inference, from common usage; to be checked by a native, §11]
| Address | Used for | Course use |
|---|---|---|
| *Kuya* | an older brother; any young man somewhat older than you, including drivers, guards, vendors | taught in `greetings` and `family`; *Kuya, sa Makati po.* |
| *Ate* | an older sister; any young woman somewhat older, including shop assistants | same; *Ate, magkano po ito?* |
| *Tito / Tita* | uncle / aunt; parents' friends; a partner's older relatives | `family`; heritage learners need it |
| *Lolo / Lola* | grandfather / grandmother; elderly strangers | `family` |
| *Manong / Manang* | older man / woman (drivers, vendors), common in the north and in Manila | recognition note |
| *Sir / Ma'am* | customers, teachers, bosses; very common in Manila service talk | taught as normal; shop staff say *Ano po'ng sa inyo, ma'am?* |
| *Mare / Pare* | casual "buddy" between adults | `taglish` deck only |

- Examples use a title before a name: *Kuya Jun, Ate Liza, Tita Baby, Lolo Ben*. In typed items, a title in the prompt ("Thank you, Kuya") must appear in the answer; a title not in the prompt is never required.

### 2.5 Roadmap items changed by this variant

None removed. Changes in §8 come from the learners and the standing rule: `linker` and `ng-pronouns` move up, `word-order` and `taglish` are added, `yes-no` takes the negative words *wala / huwag*.

### 2.6 Voice of the English text

- Plain, friendly US English, US spelling. A `why` is one sentence.
- Tagalog inside English text: `<b>` in lesson bodies; bare in `why`, `hint` and notes. Never add English endings to Tagalog words.
- Sample voice lines:
  1. "Tagalog puts the describing word first and joins it with the linker: *magandang umaga*."
  2. "Use the ng form *ko* after *gusto*: *Gusto ko ng kape*."
  3. "Nice work! Review these cards tomorrow so they stick."

## 3. Glossary

Terms follow the plain names of English-language Tagalog teaching (the roadmap's own "ang pronouns / ng pronouns / sa pronouns", "linker", "actor focus / object focus", "completed / ongoing / contemplated"; [Wikipedia, *Tagalog grammar*](https://en.wikipedia.org/wiki/Tagalog_grammar) uses "trigger", "ligature", "enclitic") [curriculum convention], made plainer for adults with no grammar [inference]. One term per idea, always the same:

| Term to use | Do not use | Note |
|---|---|---|
| marker (*ang, ng, sa, si, ni, kay, sina, nina, kina*) | case marker, article, determiner | "the ang marker", "the ng marker", "the sa marker" — **standing-rule keywords** |
| the ang form / the ng form / the sa form (of a noun or pronoun) | nominative, genitive, oblique, direct / indirect | *ako / ko / akin*: "ako is the ang form" — **standing-rule keywords** |
| ang pronoun / ng pronoun / sa pronoun | | as in the roadmap |
| the topic (the noun marked by ang) | subject, trigger, focus noun | "ang marks the topic" — **keyword**. Say "topic", never "subject", so learners do not equate it with the English subject. |
| actor focus (-um-, mag- verbs: the doer takes ang) / object focus (-in, i-, -an verbs: the thing takes ang) | actor trigger, agent voice, patient voice, active / passive | **standing-rule keywords**; "focus" alone only as "the verb's focus" |
| the doer / the thing (object) | agent, patient, undergoer | |
| linker (*na* after a consonant, *-ng* after a vowel, *-g* after n) | ligature, connector | **standing-rule keyword** |
| describing word (adjective); *ma-* adjective | modifier | |
| root (word) (*kain* in *kumain*) | base, stem | |
| prefix (mag-), infix (-um-, -in-), suffix (-in, -an); affix only as the group word | | "infix" is glossed at first use: "a piece put inside the word" |
| aspect: completed / ongoing / future (contemplated) | tense, perfective, imperfective | "contemplated" given once as a gloss in `aspect` |
| repeating the first syllable (*ka-kain*) | reduplication (except once as a gloss) | |
| little words (enclitics): *na, pa, po, ba, din / rin, lang, naman* | clitic, particle (except "particle" once in `particles`) | "the little words go right after the first word" |
| predicate first (the new information comes first) | VSO, verb-initial | |
| *ay* ("inversion word", topic first then *ay*) | copula | *ay* is never "is"; say "ay is not 'is'" |
| polite *po*, polite *kayo* | honorific particle | |
| catch (the glottal stop) | glottal stop (except once as a gloss) | as in `id` |
| stress (the CAPITAL syllable, said longer and louder) | accent | |
| *kami* (we, not you) / *tayo* (we, including you) | exclusive / inclusive | gloss the pair once |
| everyday Manila Tagalog / Taglish | slang, broken Tagalog | |
| false friend; calque ("word-for-word copy from English") | false cognate | |

Interface terms follow the existing English interface: lesson, practice, review, deck, card, streak, hint, check.

## 4. Error zones of English speakers, ranked

**How the list is ranked** [inference]: (1) items that occur in nearly every sentence, can be checked in typed practice and are named by every source opened; (2) items with some data; (3) lesson-local and word-level traps.

**The evidence is thin.** No error study of English-L1 adult learners of Tagalog was found. The one empirical review opened is about children: Barrios & Garcia (2023) review studies of Filipino children acquiring Tagalog markers and verb voice ([*Languages* 8(3), 188](https://www.mdpi.com/2226-471x/8/3/188)). Older children's errors were mostly *ang / ng* reversals (66% of them in actor-focus sentences in one study of 5-year-olds), and L2 children whose first language (Chabacano) marks subject and object like English overused *ang* for both nouns, which the authors attribute to transfer. That points the same way as English (an accusative language) but is not English-speaker data [research-backed, other population]. The grammar ranking below is therefore [inference] built on practitioner lists (Preply, Ling) and the author's knowledge, and every wrong → right pair is for a native check (§11).

1. **Markers and pronoun sets: *ang / ng / sa*, *si / ni / kay*, *ako / ko / akin***
   - Wrong → right:
     - *Gusto ako ng kape* → *Gusto ko ng kape* (I want coffee: *gusto* takes the ng form)
     - *Ang pangalan ako ay Ana* → *Ang pangalan ko ay Ana* / *Ana ang pangalan ko*
     - *Ito ang bahay si Ana* → *Ito ang bahay ni Ana* (Ana's house: the owner takes *ni*)
     - *Ang Ana ay guro* → *Si Ana ay guro* / *Guro si Ana* (names take *si*, not *ang*)
     - *Pupunta ako kay Maynila* → *Pupunta ako sa Maynila* (*kay* is for people)
     - *Bigay mo ito sa Juan* → *Ibigay mo ito kay Juan*
   - Why: English marks roles by word order and has one form for "I" in most positions; Tagalog marks every noun with a marker and has three forms of every pronoun.
   - [practitioner opinion] Preply: *Ako kape gusto* → *Gusto ko ng kape*, blamed on English subject-first order ([Preply](https://preply.com/en/blog/tagalog-sentence-structure)). [research-backed, children] Barrios & Garcia 2023 (above).
   - Design consequence: strand (a) of the standing rule (§7).

2. **Verb focus: which noun gets *ang***
   - Wrong → right:
     - *Kumain ko ang mangga* → *Kinain ko ang mangga* (I ate the mango) or *Kumain ako ng mangga* (I ate a mango)
     - *Binili ako ng libro* → *Bumili ako ng libro* (I bought a book)
     - *Niluto si Ana ang adobo* → *Niluto ni Ana ang adobo* / *Nagluto si Ana ng adobo*
     - *Kumain ako ang mangga* → *Kumain ako ng mangga* (only one *ang* per clause)
   - Why: English has one active form; in Tagalog the affix says whether the doer (-um-, mag-) or the thing (-in, i-) is the topic marked by *ang*, and a definite thing ("the mango") usually takes object focus [inference; Wikipedia *Tagalog grammar* describes the trigger system].
   - [research-backed, children] Older children "made more voice errors, often by mixing undergoer markers or switching voices" (Barrios & Garcia 2023). [practitioner opinion] Ling names "Tagalog verbs and pronoun relationships" as what English speakers find hardest ([Ling](https://ling-app.com/fil/tricky-tagalog-grammar-rules/)).
   - Design consequence: part of strand (a) from `um` on.

3. **The linker *na / -ng***
   - Wrong → right: *maganda bahay* → *magandang bahay* / *bahay na maganda*; *malaki aso* → *malaking aso*; *dalawa aso* → *dalawang aso*; *apat aso* → *apat na aso*; *Gusto ko kumain* → *Gusto kong kumain*; *Magandang na umaga* → *Magandang umaga*.
   - Why: English puts describing words straight before the noun; Tagalog joins them with a linker, *-ng* after a vowel, *-g* after *n*, *na* after other consonants, in either order (*magandang bahay* = *bahay na maganda*) [reference work: Wikipedia, *Tagalog grammar*: the linker "is used if the preceding word ends with a vowel or n"; "na used in modification is not the same as the adverb na"]. The linker appears from the first greeting (*Magandang umaga*) and in every number + noun (*dalawang bahay*).
   - Design consequence: strand (b) of the standing rule.

4. **Word order: predicate first, *ay*, and the little words**
   - Wrong → right:
     - *Ikaw pagod ba?* → *Pagod ka ba?*; *Ba pagod ka?* → *Pagod ka ba?* ([Preply](https://preply.com/en/blog/tagalog-sentence-structure))
     - *Kumain na ba ikaw?* → *Kumain ka na ba?* ([Ling](https://ling-app.com/fil/tricky-tagalog-grammar-rules/))
     - *Ako ay gutom* everywhere → *Gutom ako* (the *ay* form is correct but formal; Preply advises using *ay* sparingly)
     - *Hindi gusto ko* → *Hindi ko gusto*; *Hindi ako alam* → *Hindi ko alam*
     - *Kumain kayo na po?* → *Kumain na po kayo?*
   - Why: English is subject first; everyday Tagalog puts the predicate (verb, describing word, or noun of the comment) first, and the short pronouns and little words go right after the first word, in a fixed order (one-syllable pronoun *ko, mo, ka* first, then *na / pa*, then *po*, then *ba*; two-syllable pronouns *ako, siya, kayo* after the little words) [reference work: Wikipedia, *Tagalog grammar*, lists the particle order *na / pa, nga, din / rin, daw / raw, po / ho, ba*; the pronoun placement is the author's, §11].
   - Design consequence: the preferred "mixed neighbour" in the last two items of every set; the added lesson `word-order`.

5. **Politeness: *po*, *opo*, *kayo* for one person**
   - Wrong → right: *Oo* to a grandmother → *Opo*; *Salamat* to an older stranger → *Salamat po*; *Kumusta ka po?* → *Kumusta po kayo?*; *po* with friends in every sentence (sounds distant).
   - [practitioner opinion] Kess 1981, Kaiwa (§2.3).

6. **Pronunciation: stress, the catch, *ng* and *mga*, English vowels**
   - Wrong → right: *bata* said "BAY-ta" → `BAH-tahq`; *mga* read "em-ga" → `mah-NGAH`; *ng* read "en-gee" → `nahng`; *ngayon* said "nay-on" → `ngah-YOHN`; *aso* stressed at the end (that is "smoke") → `AH-soh`; *kain* run together → `KAH-een`; *r* as an English r → a single tap.
   - [reference work] Stress and the final catch distinguish words (Wikipedia; Wiktionary: *batà* child / *báta* robe, *áso* dog / *asó* smoke, *sukà* vinegar / *suka* vomit). [practitioner opinion] Ling: *báka* "cow" / *baká* "maybe", *páko* "nail" / *pakó* "fern" ([Ling](https://ling-app.com/fil/tricky-tagalog-grammar-rules/)). A textbook site lists English-speaker errors (ng as n + g, English vowel shifts, soft g, weak final consonants) but also contradicts itself on its own minimal pairs, so only its error list is used ([tagalog-text-book](https://tagalog-text-book.netlify.app/reference/pronunciation-guide)).
   - Design consequence: the aid (§6) marks stress and the catch on every row; `sounds` teaches *ng* and *mga*.

7. **Negative words: *hindi*, *wala*, *huwag***
   - Wrong → right: *Hindi ako pera* / *Hindi ako may pera* → *Wala akong pera*; *May tubig ba? — Hindi.* → *Wala.*; *Hindi kumain!* → *Huwag kang kumain!*; *Hindi ka pumunta* for "Don't go" → *Huwag kang pumunta*.
   - [reference work] Wikipedia lists *hindî* (not), *walâ* (there is not), *huwág* (don't). The pairs are [inference].
   - Design consequence: `yes-no` takes *wala* and *huwag*; preferred mixed neighbour from `may` on.

8. **Aspect, not tense**
   - Wrong → right: *Kumain ako bukas* → *Kakain ako bukas*; *Kakain ako kahapon* → *Kumain ako kahapon*; *Nagluto ako ngayon* for "I'm cooking now" → *Nagluluto ako ngayon*; *Kumaain* / *Kakaain* (wrong syllable repeated) → *kakain*.
   - [reference work] Wikipedia: completed *nagluto*, ongoing *nagluluto*, future *magluluto*. The pairs are [inference].

9. ***may / mayroon* and possession**
   - Wrong → right: *Mayroon ako kotse* → *Mayroon akong kotse* / *May kotse ako*; *May ang tubig?* → *May tubig ba?*; *Ako ay may isang kapatid* (stiff) → *May isa akong kapatid* / *May kapatid ako*.
   - [inference]

10. **Numbers: which system**
    - Wrong → right: *tres oras* for "three hours" → *tatlong oras*; *alas-tatlo* → *alas-tres*; *dalawa piso* → *dalawang piso*.
    - [reference work] learningtagalog, Wiktionary (§2.2).

11. **One word for "he / she"; "we" with and without you**
    - Wrong → right: *siya* for a thing (*Siya ay mahal* for "It's expensive") → *Mahal ito*; *Tayo ay taga-Amerika* (to a Filipino, meaning my family and I) → *Taga-Amerika kami*.
    - [inference]

12. **False friends, look-alikes and calques**
    - Calques: *Paano ka?* for "How are you?" → *Kumusta ka?*; *Alam ko si Ana* → *Kilala ko si Ana* (know a person = *kilala*, know a fact = *alam*); *Pwede akong mag-Tagalog* for "I can speak Tagalog" → *Marunong akong mag-Tagalog* (*pwede* = may / possible, *marunong* = know how); *Ako ay 25 taong gulang* (stiff) → *Beinte singko anyos ako* or *Dalawampu't limang taon na ako*. [inference]
    - False friends and look-alikes for English speakers: *mahal* = expensive and also "love / dear"; *mamaya* = later today, not "maybe" (*baka, siguro* = maybe); *baka* = maybe, and also "cow"; *ate* = older sister (not "ate"); *pa* = still / yet vs *na* = already (*Hindi pa* = not yet); *CR* = restroom; *sige* = okay / go ahead, not "see"; *salvage* in Philippine English means "to kill" (not a Tagalog word; omit). [inference; *báka / baká* from Ling]
    - Design consequence: the "Traps for English speakers" deck; the pairs not backed by a source go in only after a native check (§11).

## 5. Learners: who, why, what first

**Who**
- About 1.7–1.8 million people in the US speak Tagalog or Filipino at home (2023 ACS figures as reported by [Study International](https://studyinternational.com/news/harvard-refusal-to-teach-the-filipino-language/); the census table itself was not opened), making it one of the four most spoken languages in the US. Large communities live in California, Nevada, Texas, Washington, Illinois and New York (same source).
- University classes are rare (Penn since 1996, UCLA, Harvard's first preceptor in 2023); Penn instructors say students enrol mainly to reconnect with family and heritage, and many Filipino Americans grew up hearing the language without speaking it (same source) [practitioner opinion].
- [inference] So the course's US learners are mainly: **heritage learners** (Filipino Americans, often with passive understanding, who want to talk to parents, *lolo* and *lola*); **partners and in-laws** of Filipinos; **travellers** (Manila, Cebu, Palawan, Boracay) and retirees or remote workers in the Philippines; **colleagues** of Filipino co-workers, notably in US healthcare; students. No US enrolment figure or motive survey was found (§11).

**Why they study** [inference]: family first, then travel and living there, then work.

**What they need first** [inference]
1. **Respect: *po, opo*, *kayo*, and *kuya / ate / tito / tita***, because a heritage learner's first conversations are with elders, and getting respect wrong is worse than getting grammar wrong. `greetings` (lesson 2) teaches *po*, `pronouns` (lesson 3) the polite *kayo*.
2. **Family words and introducing yourself** (*Ako si…, Taga-… ako*), with the markers *si / ni*.
3. **Food and eating** (*Kain tayo!, Kumain ka na?, Busog na ako*): eating together is the centre of family visits [inference].
4. **Understanding Taglish**: they will hear it constantly, and they should not think a mixed sentence is "wrong" [Wikipedia, *Taglish*]. `taglish` and the last deck.
5. **Numbers and prices** in pesos, in the two systems they will hear (`numbers`, `food`, `time`).
6. **Getting around**: jeepney, tricycle, Grab, *Para po!* (`directions`).
7. **The grammar core** (markers, linker, focus), introduced gently: heritage learners often understand it and need production practice, not theory.

**Check of the roadmap against a beginner syllabus** [curriculum convention]
- The roadmap's opening order (greetings, self-introduction, ang pronouns and markers, *may / mayroon / wala*, then family with the linker, then places, prices, food, *gusto / ayaw*, directions and commands) follows SEASSI and Polyglottist, and the verb affixes, aspects, particles, *po / ho* and comparison come from the Oxnard outline (`docs/roadmaps/tl.json`, `note`). This profile did not reopen those syllabuses; it takes the roadmap researcher's summary as given (§11).
- Changes for US adult learners (§8): `linker` and `ng-pronouns` move up to straight after `markers` (the linker is in every greeting and every number + noun; *ko / mo* are needed for *Gusto ko…* and *pangalan ko*); `yes-no` takes *wala* and *huwag*; `word-order` is added at the end of stage 2; `taglish` is added at the end.


## 6. Pronunciation aid (`pron`)

**Evidence.**
- No study comparing respelling, IPA and no aid for English-speaking learners of Tagalog was found. The choice is [inference], as in the earlier courses.
- [reference work] **Stress and the final catch are distinctive and not written.** Wikipedia's *Tagalog phonology* gives the four-way set *baba* "father" / *babá* "piggyback" / *babà* "chin" / *babâ* "go down" and *pito* "whistle" / *pitó* "seven"; stress falls on the last or next-to-last syllable, and a stressed vowel in an open syllable is lengthened, except at the end of a word. Wiktionary entries opened for this profile confirm the brief's pairs: *batà* /ˈbataʔ/ "child" / *báta* /ˈbata/ "robe"; *aso* /ˈʔaso/ "dog" / *asó* /ʔaˈso/ "smoke"; *sukà* /ˈsukaʔ/ "vinegar" / *suka* /ˈsuka/ "vomit".
- [research-backed] Zuraw & Roca (2025), using how songwriters set Filipino lyrics to music, conclude that both penult- and final-stressed words "bear stress", and note the rival analysis in which vowel length is the underlying contrast (Schachter & Otanes 1972 and others) ([*Phonology* 42, e7](https://www.cambridge.org/core/product/749B69E22EEFE610B29535C6830D4575); first part of the article read). Either way, the learner hears one prominent syllable per word.
- [reference work / practitioner] **The final catch is dropped mid-sentence in Manila speech**, the vowel lengthening instead (Wikipedia: *hindî + ba* → [hinˈdiː ba]); learningtagalog says the catch is heard "when followed by a pause (e.g. comma, period)" and otherwise the vowel is "elongated" ([learningtagalog, *Final glottal stops*](https://learningtagalog.com/grammar/pronunciation/long_vowels_stress_and_glottal_stops/final_glottal_stops.html)).
- [reference work] *mga* is /maˈŋa/ (Wiktionary); the marker *ng* is said *nang* [curriculum convention: every course says so].
- [reference work] The dictionary convention marks the four classes with no mark (next-to-last stress), acute (last), grave (catch, next-to-last stress) and circumflex (catch, last stress) (Wikipedia; [Wiktionary, *Appendix: Tagalog pronunciation*](https://www.wiktionary.com/wiki/Appendix:Tagalog_pronunciation)). The generator's word list uses that convention.

**Options weighed.**

| Option | For | Against |
|---|---|---|
| (a) English-letter respelling, stress in CAPITALS, `q` for the catch, generated from a word list | Readable on day one; same shape as the id / es aids, so `repron.js`, the lint and the validator need nothing new. Shows the two things the spelling hides (stress, catch) plus *ng / mga*. | Stress and the catch cannot be computed from the letters, so every word needs a list entry; unlisted words get a guess and a warning. |
| (b) Dictionary accent marks on the Tagalog (*batà, hindî*) as the aid | Exactly the dictionary convention; short. | US learners cannot read grave vs circumflex [inference]; looks like the target spelling, so learners copy the marks into typed answers. |
| (c) Hand-typed respelling policed only by a regex | No word list to maintain. | Writers would guess stress, and the same word would get different stresses in different files; the lint only catches differences, not wrong guesses. |
| (d) Aid only where stress or the catch is "surprising" | Less clutter. | Every word's stress is lexical, so "surprising" is undefined; an on/off aid breaks the lint. |

**Decision: (a), `pron: "required"`, generated by `tools/target/tl/respell.js`.**
- `node tools/target/tl/respell.js "<text>"` prints `<text> -> <pron>`; the module exports `respell(text)`. Writers never type a pron.
- **Word list.** Stress and the final catch come only from `LEX` in `respell.js`: 318 entries today, of which 89 (`LEX_CHECKED`) were checked against Wikipedia's *Tagalog grammar* and *Tagalog phonology* and the Wiktionary entries listed in §6.5; the other 229 are the author's, and **about one in four of the author's guesses that were checked turned out wrong** (§6.5, §11). A word that is not listed, and is not a listed word plus the linker *-ng*, *'y* or *'t*, gets the default guess (next-to-last stress, no catch) **and a warning on stderr** with the word in « » (`repron.js` already collects these). The writer reports each flagged word; the lead checks it in a dictionary (Wiktionary marks all four classes) and adds the form to `LEX`; then `node tools/target/repron.js tl` rewrites every stored pron. `TL_CHECK=1` makes the generator also flag author entries, so the lead can audit them in batches.
- **Every form is its own entry**, because suffixes and repeated syllables move the stress (*kain* → *kumain* `koo-MAH-een`, *kainin*, *kakain*). Only the linker *-ng* / *-g*, *'y* and *'t* are derived (*magandang* from *magandá*, *ilang* from *ilán*, *ako'y* from *akó*). Known risk: a native word ending in *-ng* whose shorter form is also a listed word, when the long word itself is not listed, is silently read as word + linker; listing the long word fixes it.
- **The catch** (`q`) is shown only before a pause: at the end of the text or before `, . ? ! ; :` (*bata* → `BAH-tahq`, but *Bata pa siya.* → `BAH-tah pah shah`). The linker, *'y* and *'t* also drop it (*batang lalaki* → `BAH-tahng …`). This follows the Manila pattern above; the voice does the rest.
- **Long vs short stress:** one mark. The CAPITAL syllable is the stressed one, and in an open syllable it is also the long one; the aid does not mark length separately, because length and stress go together except at the end of a word (Wikipedia).
- **Homographs** (one spelling, two readings: *bata, aso, suka, puno, basa, gabi, baka*). The validator requires one pron per Tagalog string, `repron.js` regenerates every pron from the bare string, and DIALOG / EXAMPLES are keyed by the exact card target. So:
  1. `LEX` gives each spelling **one** reading, the one the course uses (*batà* child, *áso* dog, *sukà* vinegar, *pitó* seven, *bukas* tomorrow).
  2. **The other reading is never a card target or an example row.** It appears only in English prose (a lesson body or a card note), with its respelling produced by `node respell.js --lex "báta"` (prints `BAH-tah`), for example the note on *bata*: "Said BAH-tah with no catch, it means 'robe'."
  3. If a row really needs the other reading (likely: *bukas* "open" next to *bukas* "tomorrow"; describing words such as *pagód* "tired" vs the noun *págod*), the whole row goes into `STRING_CTX` in `respell.js` with the word's marked form (built and tested: *Bukas na ang tindahan.* → `boo-KAHS nah ahng teen-DAH-hahn`, while *Bukas na lang.* → `BOO-kahs nah lahng`). The rule matches the exact normalised string, so `repron.js` reproduces it, the validator still sees one pron per string, and DIALOG / EXAMPLES keys are unchanged. Writers report the row; the lead adds it.
  4. **Describing word vs noun.** Several A1 roots are stressed at the end as a describing word and on the next-to-last syllable as a noun (Wiktionary: *pagód* tired, *gisíng* awake). `LEX` gives these words their describing-word reading, because that is what A1 sentences use (*Pagod na ako, Gising ka pa?*); *gutóm, galít, takót, tulóg, uháw, busóg* follow the same pattern by the author's judgment (§11).
- **Card front:** the Tagalog in normal spelling (no accent marks), with the pron line under it. **The pron stays on by default for the whole course**, unlike es / id: the spelling never shows stress, so the aid keeps its value for every new word [inference]. The learner can hide it (the existing setting). No aid in practice items (PRACTICE-SPEC).

**What the respelling does not show, on purpose** (each goes in `sounds` and card notes):
- the catch at the start of a vowel-initial word and between two vowels (*oo* `OH-oh`, *kain* `KAH-een`, *saan* `sah-AHN`): the hyphen between the two vowels stands for it;
- that *p t k* are unaspirated and *t d* are dental;
- the single tap of *r* (`r`);
- that *o / u* and *e / i* overlap in native words (*lalaki* is often [laˈlake]); the aid follows the spelling;
- the vowel lengthening that replaces a dropped catch mid-sentence.

**What lesson 1 (`sounds`) must teach, so the aid can be read:**
1. Five vowels, short and pure: `ah eh ee oh oo`; *ay* = `ai`, *aw* = `ow`, *oy* = `oy`, *uy* = `ooy`, *iw* = `eew`.
2. CAPITALS = the stressed, longer syllable. Stress changes meaning (*aso* `AH-soh` dog, *asó* smoke): learn it with the word.
3. `q` = the catch, the break in "uh-oh". At the end of a word it is heard before a pause and dropped inside a sentence.
4. *ng* is one sound, as in "singer", also at the start of a word (*ngayon*); *ngg* = `ng-g` (*mangga* `mahng-GAH`); the word *ng* is said `nahng`; *mga* is said `mah-NGAH`.
5. *g* is always hard (`gh` before `ee / eh`); *r* is a single tap; *ts* = `ch` (*tsinelas*); *siya* = `shah`, *diyan* = `jahn`.
6. A hyphen in the spelling after *mag- / nag- / pag-* means a catch: *mag-aral* `mahg-AH-rahl`.
7. Listen first; the aid is a map, the voice is the sound.

### 6.1 The key (exact format)

**Format**
- Lowercase ASCII letters. Words are separated by single spaces; syllables inside a word by hyphens.
- In every word of two or more syllables, exactly one syllable is in CAPITALS. One-syllable words are lowercase (*ka* → `kah`, *ng* → `nahng`).
- `q` (or `Q` inside a capital syllable) only at the very end of a word, and only before a pause.
- No punctuation, no accent marks, no apostrophes, no digits; numbers are written as words.
- A word repeated with a hyphen (*araw-araw*) is two words in the aid; a prefix + hyphen + root (*mag-aral, taga-Maynila, alas-tres*) is one word.

**Vowels**

| Tagalog | Aid | Example |
|---|---|---|
| a | ah | *bata* → `BAH-tahq` |
| e | eh | *ate* → `AH-teh` |
| i | ee | *isa* → `ee-SAH` |
| o | oh | *aso* → `AH-soh` |
| u | oo | *tubig* → `TOO-beeg` |
| ay | ai | *bahay* → `BAH-hai` |
| aw | ow | *ikaw* → `ee-KOW` |
| oy | oy | *baboy* → `BAH-boy` (`--lex`, not yet listed) |
| uy | ooy | *aruy* → `ah-ROOY` (`--lex`, not yet listed) |
| iw | eew | *sisiw* → `SEE-seew` (`--lex`, not yet listed) |
| ey | ay | *reyna* → `RAY-nah` (`--lex`, not yet listed) |
| two vowels side by side | two syllables | *kain* → `KAH-een`; *saan* → `sah-AHN` |

**Consonants** (only those that differ; the others as written: b d h k l m n p r s t w y, and f j v z in loans)

| Tagalog | Aid | Example |
|---|---|---|
| ng | ng (also at the start of a word) | *ngayon* → `ngah-YOHN` |
| ngg | ng-g, split across the hyphen | *mangga* → `mahng-GAH` |
| the word *ng* (and *nang*) | nahng | *Kumain ako ng mangga* → `… nahng mahng-GAH` |
| *mga* | mah-NGAH | |
| g | g; gh before ee / eh | *gising* → `ghee-SEENG` |
| ts | ch | *tsinelas* → `chee-NEH-lahs` |
| si / di + vowel in *siya, diyan* (from the word list) | sh / j | *siya* → `shah`; *diyan* → `jahn` |
| ny, ñ | ny | |
| c (loans) | k; s before e / i | |
| final catch before a pause | q after the vowel | *bata* → `BAH-tahq`; *hindi* → `heen-DEEQ` |

**Syllable breaks**
- One consonant goes with the next vowel; *ng, ny, ts* count as one consonant.
- Two consonants split (*mag-lu-to, mang-ga, as-wang*), except the loan clusters *pr br tr dr kr fr pl bl kl fl kw py by ky my*, which start the next syllable (*tra-ba-ho*). With three or more, the last two stay together if they form one of those clusters; otherwise only the last goes right.
- Consonants before the first vowel stay together (*trabaho, kwarto*).
- A hyphen in the spelling is always a syllable break.

### 6.2 `pronPattern`

```
^(?!.*[qQ]-)(?:(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?|(?:(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?-)*(?:CH|[BDFGHJKLMNPRSTVWYZ])*(?:OOY|EEW|EHW|OHW|OOW|AH|EH|EE|OH|OO|AI|OW|OY|AY)(?:CH|[BDFGHJKLMNPRSTVWYZ])*Q?(?:-(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?)+|(?:(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?-)+(?:CH|[BDFGHJKLMNPRSTVWYZ])*(?:OOY|EEW|EHW|OHW|OOW|AH|EH|EE|OH|OO|AI|OW|OY|AY)(?:CH|[BDFGHJKLMNPRSTVWYZ])*Q?)(?: (?:(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?|(?:(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?-)*(?:CH|[BDFGHJKLMNPRSTVWYZ])*(?:OOY|EEW|EHW|OHW|OOW|AH|EH|EE|OH|OO|AI|OW|OY|AY)(?:CH|[BDFGHJKLMNPRSTVWYZ])*Q?(?:-(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?)+|(?:(?:ch|[bdfghjklmnprstvwyz])*(?:ooy|eew|ehw|ohw|oow|ah|eh|ee|oh|oo|ai|ow|oy|ay)(?:ch|[bdfghjklmnprstvwyz])*q?-)+(?:CH|[BDFGHJKLMNPRSTVWYZ])*(?:OOY|EEW|EHW|OHW|OOW|AH|EH|EE|OH|OO|AI|OW|OY|AY)(?:CH|[BDFGHJKLMNPRSTVWYZ])*Q?))*$
```

What it enforces (`node tools/target/tl/respell.js --pattern` prints it; the builder is `pronPattern()` in the same file):
- Each syllable is: consonants (`ch` or one of `b d f g h j k l m n p r s t v w y z`), then exactly one vowel spelling of the key (`ah eh ee oh oo ai ow oy ay ooy eew ehw ohw oow`), then consonants, then an optional `q`.
- A word is one lowercase syllable, or hyphenated syllables with exactly one CAPITAL syllable; `q` / `Q` only at the end of a word.
- So: no *u* and no bare *a, e, i, o* (raw Tagalog vowels), no *c* outside *ch*, no *x*, no accented letters, apostrophes, digits or punctuation, single spaces only.

It is compiled with the `u` flag. Tested: it accepts all 20 worked examples below and all 90 sample cards in §9, and it rejects the raw Tagalog of 109 of those 110 strings. The one raw string that passes is *jeep*, whose aid is `jeep` itself. Other short words also pass raw (*may, kay, oo, kain*), because raw *ay* and *oo* are also key spellings; so the pattern alone cannot prove a pron was generated, and it cannot catch a wrong but well-formed stress. The generator and the lint do that.

### 6.3 Worked examples (all pass `pronPattern` and equal the generator's output)

| # | Tagalog | `pron` | Meaning | Rule shown |
|---|---|---|---|---|
| 1 | Magandang umaga po. | `mah-gahn-DAHNG oo-MAH-gah pohq` | Good morning. (polite) | linker -ng on a listed word; po ends in a catch before the pause |
| 2 | Salamat po. | `sah-LAH-maht pohq` | Thank you. (polite) | stress on the next-to-last syllable; one-syllable words lowercase |
| 3 | bata | `BAH-tahq` | child | unstressed final catch (batà) |
| 4 | aso | `AH-soh` | dog | stress on the first syllable (asó, stressed at the end, is smoke) |
| 5 | hindi | `heen-DEEQ` | no; not | stressed final syllable with a catch (hindî) |
| 6 | Hindi po. | `heen-DEE pohq` | No. (polite) | the catch drops before another word |
| 7 | ngayon | `ngah-YOHN` | now | ng at the start of a word; final stress |
| 8 | mga bata | `mah-NGAH BAH-tahq` | children | mga is always mah-NGAH |
| 9 | Kumain ako ng mangga. | `koo-MAH-een ah-KOH nahng mahng-GAH` | I ate a mango. | ng is nahng; two vowels side by side are two syllables; ngg splits |
| 10 | bahay | `BAH-hai` | house | ay = ai |
| 11 | ikaw | `ee-KOW` | you | aw = ow |
| 12 | mag-aral | `mahg-AH-rahl` | to study | a hyphen after a prefix: one word, catch before aral |
| 13 | araw-araw | `AH-row AH-row` | every day | a repeated word is two words in the aid |
| 14 | Ako'y masaya. | `ah-KOY mah-sah-YAH` | I am happy. | 'y joins the last syllable |
| 15 | Isa't isa. | `ee-SAHT ee-SAH` | each other | 't (at) joins the last syllable |
| 16 | alas-tres | `ah-lahs-TREHS` | three o'clock | alas- + Spanish number: one word |
| 17 | siya | `shah` | he; she | si + vowel = sh (Manila speech) |
| 18 | tsinelas | `chee-NEH-lahs` | flip-flops | ts = ch |
| 19 | gising | `ghee-SEENG` | awake | g before ee is written gh; describing word stressed at the end |
| 20 | Bata pa siya. | `BAH-tah pah shah` | He is still young. | no catch inside the sentence |

### 6.4 The generator

`tools/target/tl/respell.js` (about 290 lines, no dependencies).
- **Usage:** `node tools/target/tl/respell.js "Salamat po."` → `Salamat po. -> sah-LAH-maht pohq`. Several arguments give several lines. `--lex "báta"` respells a marked form (for prose only); `--pattern` prints `pronPattern`. `STRING_CTX` holds whole rows that need a homograph's other reading (§6). `require('./respell.js').respell(text)` returns the string; `annotated(form)` respells a marked form.
- **Digits** and words with no vowel throw an error: write numbers as words.
- **Adding a word:** put its dictionary form in `SRC` (author) or `SRC_CHECKED` (with the source noted in §6.5): no mark = next-to-last stress, acute = the stressed vowel, grave on the last vowel = catch, circumflex on the last vowel = stressed last syllable + catch. Use `spelling=form` when the sound differs from the letters (`siya=syá`, `diyan=dyán`, `Jose=hosé`). Then run `node tools/target/repron.js tl`.
- **Names:** Filipino names used in examples (*Ana, Juan, Jun, Liza, Mark, Joy, Rey, Carlo, Bea, Ben, Maria, Jose*) and places (*Maynila, Makati, Cebu, Pilipinas, Amerika*) are listed; any other name warns like any other word.

### 6.5 Words checked against a source

`LEX_CHECKED` (89 forms): from [Wikipedia, *Tagalog grammar*](https://en.wikipedia.org/wiki/Tagalog_grammar) (pronouns *akó, ikáw, siyá, kamí, kayó, silá, niyá, nilá, ninyó, inyó, kanilá*; demonstratives *itó, iyán, iyón, dito, diyán, doón*; question words *anó, síno, saán, kailán, bákit, ilán, magkáno, nasaán, kumustá*; *hindî, walâ, huwág, pô, ngâ, ba, namán, muna, kasí, palá*; *magandá, isá, tatló, maliít, masayá, malungkót, malakás, damít, inóm, bilí, sulát, alís, basa, lupà, sagót, kauntî, matabâ, pinggán, mabangó, maligò, puntá, tutubí, pakpák, baít*), [Wikipedia, *Tagalog phonology*](https://en.wikipedia.org/wiki/Tagalog_phonology) (*pitó, sala*), and Wiktionary entries opened one by one (via kaikki.org or a Wiktionary mirror; URLs in Sources): *bata, aso, suka, kain, kumain, mga, umaga, bahay, araw, opo, po, oo, salamat, tsinelas, masarap, gamot, ngayon, mangga, bukas, pagod, gising, kanin, gusto, kape, aral, alas-tres*.
- Two have two accepted stresses in Wiktionary: *bahay* (/ˈbahaj/ and /baˈhaj/) and *araw* (/ˈʔaɾaw/ and /ʔaˈɾaw/). The course uses the first listed (next-to-last). *Pagod* also lists both; the canonical describing word is *pagód*.
- *aral*: the noun is unmarked (next-to-last), the describing word *arál*; *mag-aral* follows the noun.
- **How good the author's guesses are.** Of the author's own first guesses that were then looked up, about one in four was wrong: *kain* (guessed last-syllable stress; it is /ˈkaʔin/), *taon* (it is *taón*), *pagod* and *gising* (describing words stressed at the end), *gusto* (*gustó*), *kape* (*kapé*), and *kanin*, which the author changed to last-syllable stress without a lookup and which is /ˈkanin/. All are fixed. The 229 unchecked author entries should be expected to carry a similar error rate until checked (§11, item 1).
- **All 20 worked examples (§6.3) rest only on checked words**, the derived linker / *'y* / *'t* forms, the prefixes *mag-, alas-* and the one-syllable *pa*.

## 7. Standing practice rule

**Rule: the right form for the role, and the linker.** Every lesson's practice set keeps re-testing two strands:
- **(a) Markers, pronoun sets and focus: which form each noun takes.** *ang / si* for the topic, *ng / ni* for the owner and for the doer or thing that is not the topic, *sa / kay* for places and people as goal; the matching pronoun set (*ako / ko / akin, ikaw·ka / mo / iyo, siya / niya / kanya*…); *gusto, ayaw, kailangan, alam* take the ng form (*Gusto ko*). From `um` on: the verb's focus decides which noun takes *ang* (actor focus: the doer, *Kumain ako ng mangga*; object focus: the thing, *Kinain ko ang mangga*).
- **(b) The linker.** A describing word, a number or a verb after *gusto / ayaw / kailangan* is joined to what it describes with *-ng* after a vowel, *-g* after *n*, and *na* after other consonants (*magandang umaga, dalawang bahay, apat na aso, bahay na malaki, Gusto kong kumain*).

**Why these two.**
- [inference, from §4] Markers and focus (§4.1–4.2) are the core of Tagalog grammar and the one error area with data pointing toward English-type transfer (Barrios & Garcia 2023: L2 children from an accusative language overused *ang*; older L1 children reversed *ang / ng*). They occur in essentially every sentence.
- The linker (§4.3) is the one structure present **from the first greeting** (*Magandang umaga*) and in every number + noun, so it gives hinge items in the lessons where markers are still unnatural (`sounds`, `greetings`, `numbers`, `time`). The JSON has no exemption field, so every set must have two hinges of each kind; strand (b) guarantees that.
- **Against:** word order and the little words (§4.4) are as pervasive, but a typed item cannot isolate them without the cue problem (several orders are correct), and they need the verbs first; they are the preferred mixed neighbour instead. Politeness (*po*) is cued in prompts (§2.3), not a strand: a missing *po* after a polite cue is wrong anyway. Verb focus is not a separate strand, because it is the marker question asked of verbs, and it cannot be tested before lesson 16.

**Count** (`minOrder: 2`, `minType: 2`): in every set, at least **2 `order` items** and **2 `type` items** hinge on the rule, and their `why` names it with a keyword. A 14-item set has 3 of each, so two of each three.

**What counts as hinging** (mechanical, so a reviewer can check it):
- **`order`** hinges if the `why` matches the keywords and **either**
  - the answer has a linked phrase and `x` holds the unlinked word (*malaking bahay*, x: *malaki*; *dalawang aso*, x: *dalawa*) or the wrong linker (*apat na aso*, x: *ng*); **or**
  - the answer has a marker or pronoun and `x` holds a wrong member of the same set or the wrong set (*Ako si Ana*, x: *ang*; *Gusto ko ng kape*, x: *ako*; *sa simbahan*, x: *kay*; *Kinain ko ang mangga*, x: *ako*).
  - Example: `['or', 'Good morning (polite)', 'Magandang umaga po', 'maganda', 'The linker -ng joins maganda to umaga: magandang umaga.']`
- **`type`** hinges if the `why` matches the keywords and the first accepted answer contains a linked phrase or a marker / pronoun choice that English does not make (*ni Ana* for "Ana's", *ko* after *gusto*, *si* before a name, *sa / kay*, the focus choice), and `x` holds the wrong twin.
  - Example: `['ty', "Ana's dog", 'aso ni Ana|ang aso ni Ana', 'aso · Ana', 'si', 'ni marks the owner when the owner is a name: aso ni Ana.']` (no fallback word can rebuild an accepted answer: *aso si Ana* is not in the list).
- **Never** use as a "wrong" tile or option a form that is also correct: *bahay na maganda* is as correct as *magandang bahay*; *May kotse ako* and *Mayroon akong kotse* are both right; *'yung* for *ang* is correct casual speech (accepted nowhere, but never called wrong in a `why`).

**Accepted answers, more rules**
- A describing word and its noun: list both orders where both are natural (*magandang bahay|bahay na maganda*) unless the prompt cues one ("(describing word first)").
- Topic first with *ay* (*Ako ay guro*) is accepted beside the predicate-first form (*Guro ako*) wherever it is grammatical, as the second answer; `a[0]` is always the predicate-first form.
- Pronouns: list with and without the dropped pronoun only where dropping is natural (commands, answers to a question).
- *po*: as §2.3 (the cue decides; never both).
- Numbers: §2.2 table (native for counting, Spanish for clock time; prices accept both).

**Lessons where the rule is hardest, with two hinges each** (order / type):
- `sounds`: order "a big house" → *malaking bahay* (x: *malaki*); "Ana's dog" → *aso ni Ana* (x: *si*). Type "two dogs" → *dalawang aso* (x: *dalawa*, hint gives *dalawa*); "Ana's house" → *bahay ni Ana|ang bahay ni Ana* (x: *si*). why: "malaki ends in a vowel, so add the linker -ng: malaking bahay."
- `greetings`: order "Good morning (polite)" → *Magandang umaga po* (x: *maganda*); "Good afternoon (to a friend)" → *Magandang hapon* (x: *maganda*). Type "Good evening (polite)" → *Magandang gabi po*; "Good noon (to a friend)" → *Magandang tanghali* (x: *maganda*). why: "The linker -ng joins maganda to gabi."
- `pronouns`: order "I am Ana" → *Ako si Ana* (x: *ang*); "He is Juan" → *Siya si Juan* (x: *ang*). Type "You are Mark (to a friend)" → *Ikaw si Mark* (x: *ang*); "I'm Joy" → *Ako si Joy|Si Joy ako* (x: *ang*). why: "si goes before a person's name: Ako si Ana."
- `numbers`: order "three houses" → *tatlong bahay* (x: *tatlo*); "four dogs" → *apat na aso* (x: *ng*). Type "five children" → *limang bata* (x: *lima*); "six mangoes" → *anim na mangga* (x: *lima*). why: "After a consonant the linker is na: apat na aso."
- `time`: order "three hours" → *tatlong oras* (x: *tres*); "on Monday" → *sa Lunes* (x: *kay*). Type "five minutes" → *limang minuto*; "two days" → *dalawang araw* (x: *dalawa*). why: "Numbers are linked to the noun: limang minuto."
- `directions`: order "to the church" → *sa simbahan* (x: *kay*); "to Juan's house" → *sa bahay ni Juan* (x: *si*). Type "Turn right at the church (to a friend)" → *Kumanan ka sa simbahan* (x: *kay*). why: "sa marks the place; kay is for people."
- `um`: "I ate a mango" → *Kumain ako ng mangga* (x: *ko*). why: "Actor focus: the doer takes ang, so ako."
- `in`: "I ate the mango" → *Kinain ko ang mangga* (x: *ako*). why: "Object focus: the mango is the topic, so ang mangga and ko."
- `gusto`: "I want to eat" → *Gusto kong kumain* (x: *ako*). why: "gusto takes the ng form ko, linked to the verb: gusto kong kumain."

**Validator keywords** (`standingRule.keywords`, flags `i`):

```
\b(?:ang|ng|sa) (?:form|marker|pronoun)s?\b|\bsi\s*/\s*ni\s*/\s*kay\b|\b(?:si|ni|kay|sina|nina|kina) (?:marks|is for|goes before|comes before)\b|\bmarks? the (?:topic|doer|owner|place|person|thing|object)\b|\btakes? (?:the )?ang\b|\bgets ang\b|\b(?:actor|object) focus\b|\blinker\b|\blinked\b
```

Use them like this:
- Strand (a): "the ang / ng / sa form", "the ang / ng / sa marker", "ang / ng / sa pronoun", "si / ni / kay", "si goes before…", "ni marks…", "kay is for…", "marks the topic / doer / owner / place / person / thing / object", "takes ang", "gets ang", "actor focus", "object focus".
- Strand (b): "linker", "linked".

These are deliberately **not** keywords: "the topic" alone (the glossary word, used in `word-order` lines about *ay*), bare "ng" or "ang" (they would match sound lines about *ng* and lines about *nang*), "focus" alone, "marker" alone, "order", "first", "after", "po", "polite". Do not use the keywords in `why` lines of items that do not hinge.

**Tested** (node, `new RegExp(keywords, "i")`; 52 of 52 as expected; the should-not lines include the other senses of *ng* (the sound, *nang*, *mga*) and two lines about "the topic" in word order, which must not count):

| Sample `why` | Result | Expected |
|---|---|---|
| The linker -ng joins maganda to umaga: magandang umaga. | match | should match |
| After a consonant the linker is na: apat na aso. | match | should match |
| gusto takes the ng form ko: Gusto ko ng kape. | match | should match |
| ko is the ng pronoun; ako is the ang pronoun. | match | should match |
| Use the sa form akin after para sa: para sa akin. | match | should match |
| ni marks the owner when the owner is a name: aso ni Ana. | match | should match |
| si goes before a person's name: Ako si Ana. | match | should match |
| kay is for people, sa for places: kay Juan, sa Maynila. | match | should match |
| si / ni / kay are the markers for names. | match | should match |
| Actor focus: the doer takes ang, so ako, not ko. | match | should match |
| Object focus (-in): the mango is the topic, so ang mangga. | match | should match |
| With kinain, the thing gets ang: Kinain ko ang mangga. | match | should match |
| Numbers are linked to the noun: dalawang bahay. | match | should match |
| ang marks the topic; the doer of an -in verb takes ng. | match | should match |
| The sa marker shows the place: sa palengke. | match | should match |
| The ng marker shows the thing: bumili ng isda. | match | should match |
| Only one ang per clause: ako takes ang here. | match | should match |
| ng marks the thing eaten here: kumain ng mangga. | match | should match |
| The describing word is linked with na after a consonant. | match | should match |
| malaki ends in a vowel, so add the linker -ng: malaking bahay. | match | should match |
| ng is one sound, as in singer. | no match | should not match |
| Say ng as nang and mga as manga. | no match | should not match |
| The ng sound can start a word: ngayon. | no match | should not match |
| The catch at the end of bata changes the meaning. | no match | should not match |
| Stress the capital syllable: AH-soh. | no match | should not match |
| Use po with older people and strangers. | no match | should not match |
| opo is the polite yes. | no match | should not match |
| kayo is polite for one person. | no match | should not match |
| hindi negates a verb or describing word. | no match | should not match |
| wala means there is none. | no match | should not match |
| huwag means don't. | no match | should not match |
| Spanish numbers are used for clock time: alas-tres. | no match | should not match |
| ba goes after the first word and after ka. | no match | should not match |
| The little words come right after the first word. | no match | should not match |
| The predicate comes first in everyday Tagalog. | no match | should not match |
| ay is not 'is'; it is formal. | no match | should not match |
| Repeat the first syllable for the future: kakain. | no match | should not match |
| na after a verb means already: Kumain na ako. | no match | should not match |
| pa means still or yet: Hindi pa. | no match | should not match |
| mas means more; pinaka- means most. | no match | should not match |
| Kumusta ka? is How are you? | no match | should not match |
| kilala is for people, alam for facts. | no match | should not match |
| Taglish mixes English words into Tagalog sentences. | no match | should not match |
| Kuya is used for a young man a bit older than you. | no match | should not match |
| The hyphen in mag-aral marks a catch before aral. | no match | should not match |
| Para po! is how you stop a jeepney. | no match | should not match |
| Use the English word: Manila speakers say cellphone. | no match | should not match |
| mamaya means later today, not maybe. | no match | should not match |
| The final catch is dropped in the middle of a sentence. | no match | should not match |
| Completed aspect: kumain; ongoing: kumakain. | no match | should not match |
| With ay, the topic comes first: Ako ay guro. | no match | should not match |
| Put the topic last in everyday speech: Guro ako. | no match | should not match |

## 8. Lessons (final order)

**Changes from the roadmap** (all [inference] built on §4, §5 and §7):
- **Kept: all 25 items**, ids without the `tl-` prefix, each exactly once in a `roadmap` field (`link_roadmap.py` will mark all 25 covered).
- **Reordered:**
  - `linker` (roadmap: 6th of stage 2) and `ng-pronouns` (7th) move to straight after `markers`, so strand (b) of the standing rule is taught in lesson 7, before `numbers` needs it for every number + noun, and so *ko / mo* exist before *gusto* and *Hindi ko alam* appear. The linker is already seen, unexplained, in *Magandang umaga* (lesson 2).
  - The rest keeps the roadmap order within each stage.
- **Renamed / widened:** `greetings` "Greetings and respect: po and opo"; `yes-no` takes *wala* and *huwag* ("Yes and no: oo / opo, hindi, wala, huwag"), because the three words for "no" are the trap (§4.7); `numbers` "Numbers: native and Spanish"; `aspect` uses "future" with "contemplated" as a gloss (§3); `particles` becomes "Little words" (glossary).
- **Added (2):**
  - `word-order` "Word order: predicate first, ay, and the little words", at the end of stage 2: predicate first, *ay* as formal, and the fixed order of the little words (§4.4). The roadmap spreads these over `questions` and `particles`; English speakers need one lesson that puts them together before the verbs [inference; Preply and Ling list these errors].
  - `taglish` "Everyday Manila Tagalog and Taglish", at the end: what learners hear daily (§2.2).
  - No third lesson: 27 lessons fit the 20–28 range, and `time` is already its own roadmap item.
- **Stages:** the roadmap's four, unchanged in name. Stage 2 grows from 9 to 10 lessons, stage 4 from 5 to 6.

| # | id | Title | Roadmap item | Content, and the English-speaker trap it targets | Deck |
|---|---|---|---|---|---|
| | | **Stage 1: Sounds and first words** | | | |
| 1 | `sounds` | Sounds and spelling | tl-sounds | Five pure vowels; ay / aw; ng as one sound, also at the start (ngayon); the word ng said nang and mga said ma-NGA; the catch (q) and stress that change meaning (bata child / robe, aso dog / smoke), learned with each word; the tapped r; ts = ch; how to read the aid (§6). Deck words come in linked phrases (malaking bahay, aso ni Ana). Trap: English vowels ("BAY-ta"), ng read n + g, mga read "em-ga", stress guessed. | Sounds and spelling |
| 2 | `greetings` | Greetings and respect: po and opo | tl-greetings | Magandang umaga / tanghali / hapon / gabi by the clock; Kumusta? Mabuti; Salamat / Walang anuman; Paalam, Ingat; po and opo, who gets them; kayo for one person; kuya, ate, tito, tita, sir, ma'am with a greeting. Trap: no po to an elder (Oo to Lola for Opo); Kumusta ka po? for Kumusta po kayo?; maganda umaga with no linker. | Greetings and respect |
| 3 | `pronouns` | ang pronouns: ako, ikaw / ka, siya, kami, tayo, kayo, sila | tl-pronouns | ang pronouns ako, ikaw / ka, siya, kami, tayo, kayo, sila; ka after the first word, ikaw at the start; siya for he and she; kami (not you) vs tayo (with you); kayo as polite "you"; si before a name (Ako si Ana). Trap: tayo for "my family and I"; ka at the start of a sentence; ang before a name (Ang Ana). | Family and people |
| 4 | `intro` | Introducing yourself: Ako si…, Taga-… ako | tl-intro | Ako si…, Taga-… ako, Taga-saan ka / po kayo?, Amerikano / Pilipino ako, Nag-aaral ako ng Tagalog (as a fixed phrase), Ilang taon ka na?, Ano ang pangalan mo? Trap: Paano ka? for "How are you?", taga- left out (Ako ay Amerika). | About me |
| 5 | `this-that` | ito, iyan, iyon: this and that | tl-this-that | ito (near me), iyan (near you), iyon (over there); Ano ito? Ito ang…; the ng forms nito / niyan / niyon and the casual 'to, 'yan, 'yon for recognition; Magkano ito? Trap: two words for "that" chosen by distance; iyan for something far away. | Shopping and the market |
| | | **Stage 2: Building sentences** | | | |
| 6 | `markers` | Markers: ang / si, ng / ni, sa / kay | tl-markers | ang marks the topic, ng the owner or the thing, sa the place or goal; si / ni / kay for names; sina / nina / kina for groups of names; one ang per clause. Trap: Ang Ana, bahay si Ana, kay Maynila, sa Juan (§4.1). | Home and daily routine |
| 7 | `linker` | The linker na / -ng and ma- describing words | tl-linker | na / -ng / -g between a describing word and its noun, in either order (magandang bahay = bahay na maganda); ma- describing words (maganda, malaki, mabait, masarap); numbers linked to nouns as a preview. Trap: maganda bahay, malaki aso, -ng added after a consonant (§4.3). | Describing people and things |
| 8 | `ng-pronouns` | ng pronouns and possession: ko, mo, niya | tl-ng-pronouns | ko, mo, niya, namin, natin, ninyo, nila after the noun (bahay ko, pangalan mo); the same forms after gusto / ayaw / alam (Gusto ko, Hindi ko alam); ninyo / niyo as the polite "your". Trap: Gusto ako, pangalan ako, Hindi ako alam. | About me |
| 9 | `questions` | Questions: ba, sino, ano, saan, kailan | tl-questions | Yes / no questions with ba after the first word and its little words (Pagod ka ba?); sino, ano, saan, kailan, bakit, paano, alin, ilan, magkano; Anong + noun; nasaan for "where is". Trap: Ba pagod ka?, Ikaw pagod ba?, saan for "where is the…" (nasaan). | Questions and little words |
| 10 | `yes-no` | Yes and no: oo / opo, hindi, wala, huwag | tl-yes-no | oo / opo, hindi / hindi po; hindi for verbs and describing words, wala for "there isn't / I don't have", huwag for "don't"; Hindi pa (not yet); answering a negative question. Trap: Hindi to May tubig ba? (Wala), Hindi kumain! (Huwag), Oo to an elder. | Traps for English speakers |
| 11 | `numbers` | Numbers: native and Spanish | tl-numbers | Native numbers 1–1,000 (isa … sampu, labing-, -pu, daan, libo) linked to nouns (dalawang bahay, apat na aso); Spanish numbers 1–100 for prices (bente, singkwenta) and the clock (preview); English for phone numbers and years (recognition). Trap: dalawa bahay with no linker; tres oras for three hours (§2.2). | Numbers and money |
| 12 | `may` | may, mayroon, wala: there is, have | tl-may | may + noun (May tubig ba?), mayroon / meron + linker + pronoun (Mayroon akong kotse), wala + linker (Wala akong pera); may for "have" and "there is". Trap: Mayroon ako kotse, Hindi ako pera, May ang tubig? | Food and drink |
| 13 | `family` | Family and jobs | tl-family | nanay / inay, tatay / itay, kuya, ate, bunso, anak, asawa, kapatid, lolo, lola, tito, tita, pinsan; kuya / ate and tito / tita as titles for non-relatives; jobs: guro, nars, doktor, inhinyero; Ano ang trabaho mo? Trap: kapatid has no sex (lalaki / babae added); kuya and ate are about age, not just family. | Family and people |
| 14 | `sa-pronouns` | sa pronouns and place: sa akin, dito, nasaan | tl-sa-pronouns | sa akin, sa iyo, sa kanya…; para sa akin; dito, diyan, doon by distance; nasa + place (nasa bahay), nasaan; kay / kina for people. Trap: para ako, sa Juan for kay Juan, saan for nasaan. | Around town and directions |
| 15 | `word-order` | Word order: predicate first, ay, and the little words | (added) | (added) Predicate first (Guro ako, Pagod siya, Kumain si Ana); the ay order as formal or for contrast (Ako ay guro), never as "is"; the little words right after the first word in a fixed order: ka / ko / mo, then na / pa, then po, then ba, then two-syllable pronouns (Kumain ka na ba? Kumain na po kayo?); hindi pulls the pronoun forward (Hindi ko alam). Trap: Kumain na ba ikaw?, Hindi gusto ko, ay used as "is" (§4.4). | Questions and little words |
| | | **Stage 3: Verbs** | | | |
| 16 | `um` | -um- verbs (actor focus): kumain, uminom, pumunta | tl-um | -um- verbs (kumain, uminom, pumunta, bumili, sumayaw) with the doer marked by ang (actor focus) and the thing by ng (a mango, some water); completed form only, as in the roadmap (aspect comes next). Trap: Kumain ko, Kumain ako ang mangga (§4.2). | Feelings and free time |
| 17 | `mag` | mag- verbs (actor focus): magluto, maglaro, magtrabaho | tl-mag | mag- verbs (magluto, maglaro, magtrabaho, mag-aral, maglinis), actor focus as with -um-; the hyphen before a vowel (mag-aral); completed nag-. Trap: magaral without the hyphen, -um- and mag- swapped on the same root (pumunta / magpunta both exist: teach the -um- one). | Home and daily routine |
| 18 | `aspect` | Aspect: completed, ongoing, future | tl-aspect | Completed, ongoing and future (contemplated) for -um- and mag- verbs: kumain / kumakain / kakain, nagluto / nagluluto / magluluto; repeating the first syllable of the root; time words (kahapon, ngayon, bukas) agree with the aspect. Trap: Kumain ako bukas, kumaain, ongoing used for a finished action (§4.8). | Work and school |
| 19 | `gusto` | gusto, ayaw, kailangan, puwede | tl-gusto | gusto, ayaw (ayoko), kailangan, puwede / pwede + ng form + linker + verb (Gusto kong kumain, Kailangan mong umuwi) or + ng + thing (Gusto ko ng kape); marunong (know how) vs puwede (may). Trap: Gusto ako, Gusto ko kumain (no linker), Pwede akong mag-Tagalog for "I can speak Tagalog". | Feelings and free time |
| 20 | `in` | -in verbs (object focus): Kinain ko ang mangga | tl-in | -in verbs (object focus): the thing takes ang, the doer takes ng (Kinain ko ang mangga, Binili ni Ana ang isda); kainin / kinain / kinakain / kakainin; a definite thing ("the mango") usually makes object focus natural; -um- vs -in on the same root. Trap: Kumain ko ang mangga, Kinain ako ang mangga, Binili ako ng libro (§4.2). | Shopping and the market |
| 21 | `food` | Ordering food and prices | tl-food | Kumain ka na?, Kain tayo!, ulam and kanin, ordering (Isang adobo nga po, isa pa), Pabili po at a sari-sari store, Magkano po?, the bill (Bill po / Magkano lahat?), prices in pesos in two systems. Trap: a bare English order with no po to staff; Spanish vs native number for the price (both accepted). | Food and drink |
| | | **Stage 4: Getting around** | | | |
| 22 | `time` | Time and days: alas-tres, Lunes, kahapon, bukas | tl-time | Anong oras na? alas-una … alas-dose, y medya, ng umaga / hapon / gabi; tatlong oras (duration, native) vs alas-tres (clock, Spanish); days (Lunes…), kahapon, ngayon, bukas, mamaya, kanina; sa + day. Trap: alas-tatlo, tres oras, mamaya read as "maybe". | Time, days and dates |
| 23 | `directions` | Directions and transport: kaliwa, kanan, Para po! | tl-directions | kaliwa, kanan, diretso, kanto, tabi; Kumaliwa / Kumanan ka sa…; jeep, tricycle, taxi, Grab; Para po! Bayad po. Saan po ang sakayan papuntang…? Magkano po hanggang…? Trap: kay + place, kanan / kaliwa mixed up, no po to the driver. | Getting around |
| 24 | `requests` | Requests and commands: paki-, huwag | tl-requests | paki- + verb for polite requests (Pakiabot po, Pakisara), Puwede po bang…?, nga for a softened command (Pakiabot nga), commands with the doer (Umupo ka, Kumain kayo), huwag + linker (Huwag kang umalis). Trap: Hindi ka umalis for "Don't leave", a bare English-style command to an elder. | Health and help |
| 25 | `particles` | Little words: na, pa, rin / din, lang, naman | tl-particles | na (already, now), pa (still, yet, more), rin / din (also, din after a consonant), lang (just), naman (softener; "how about"), muna (first, for now), nga, daw / raw; their order after the first word. Trap: na and pa swapped (Hindi na vs Hindi pa), din after a vowel, little words put at the end (§4.4). | Questions and little words |
| 26 | `compare` | Comparing: mas … kaysa, pinaka- | tl-compare | mas + describing word + kaysa (sa) (Mas malaki ito kaysa diyan); pinaka- (pinakamalaki); kasing- (kasinglaki); the ang form for the topic and kay / sa for the other. Trap: mas malaki sa for kaysa, most with mas, ang and kay swapped in comparisons. | Describing people and things |
| 27 | `taglish` | Everyday Manila Tagalog and Taglish | (added) | (added) What learners hear in Manila: English nouns and verbs inside Tagalog (Nag-shopping kami, Paki-on ang aircon), the casual forms 'yung, 'yan, 'di, ayoko, sige, ewan, grabe, tara, talaga, 'no; Mare / Pare; when to switch. Typed items say "(casual)". Trap: thinking a mixed sentence is wrong; using casual forms with elders. | Everyday Manila Taglish |

Per-lesson notes for writers:
- Every set satisfies §7. The last two items may mix in a neighbour from an earlier lesson. Preferred neighbours: the order of the little words (from `questions` on), *hindi / wala / huwag* (from `yes-no` on), *po* with the polite cue, and *-um- / -in* (from `in` on).
- `um`, `mag`: only the completed form is drilled (the infinitive form appears in commands and after *gusto* from `gusto` on); `aspect` adds the other two.
- `in`: the prompt shows definiteness in English ("the mango" → object focus; "a mango" → actor focus); never ask for a focus the English does not cue.
- `time`, `numbers`, `food`: prompts give clock times as "at 3:00" or "three o'clock" (Spanish *alas-*), durations as "three hours" (native), prices in words or ₱ with both systems accepted (§2.2).
- `taglish`: prompts that want a casual or mixed form say "(casual)"; the same prompt without the cue wants the everyday standard form.

## 9. Decks

**18 decks in 5 groups**, 16–18 cards each (about 300 cards). Card shape: `target | pron | meaning | note`.
- `target`: Tagalog in normal spelling. Nouns often in short linked or marked phrases (*malaking bahay, aso ni Ana*), which keeps the standing rule visible in review.
- `pron`: generated (§6). A homograph's other reading is never a target (§6).
- `meaning`: short American English; "(polite)" / "(to a friend)" where the form depends on it.
- `note`: one English line or empty: *po* use, the linker, the catch that changes meaning, the Taglish alternative, false-friend warnings.

**Localisation** [inference]:
- Names: *Ana, Juan, Jun, Liza, Mark, Joy, Rey, Carlo, Bea, Maria, Jose*; elders *Lola, Lolo Ben, Tita Baby, Tito Rey*; titles before names (§2.4).
- Places: *Maynila, Makati, Quezon City, Pasig, BGC, Cebu, Baguio, Davao, Boracay, Palawan*; US places only in `intro` (*Taga-Amerika ako; Taga-California ako*: add the place to `LEX`).
- Food: *adobo, sinigang, lumpia, pancit, lechon, halo-halo, pandesal, tapsilog, kanin, kape, mangga, saging, isda, manok*.
- Money: *piso / pesos*, written as words in targets (*bente pesos, isang daang piso*); the note may show ₱20. Typical prices: jeepney fare about ₱13–15, a sari-sari snack ₱10–20, a meal at a carinderia ₱80–150 [inference; for a native check].
- Transport: jeep (jeepney), tricycle, FX / UV Express, MRT / LRT, Grab, taxi.

**Deck rules for writers**
- Use *po* and *kayo* where a learner meets elders, staff or strangers, and say so in the note.
- **Traps for English speakers** (about 17 cards): the three words for "no" (*hindi, wala, huwag*), *Hindi pa*; *siya* = he / she; *kami / tayo*; *kilala / alam*; *marunong / puwede*; *mamaya* (not "maybe"); *mahal* (expensive, dear); *ate*; *CR*; calques (*Kumusta ka?* not *Paano ka?*); the sourced stress pairs as notes (*báka / baká, páko / pakó*, from Ling). The other §4.12 pairs go in only after a native check (§11).
- **Everyday Manila Taglish** (about 16 cards): *sige, ewan, grabe, tara, talaga, 'di ba, ayoko, 'yung, 'yan, sana all* (only if a native confirms it is still current), *Mare / Pare*, *Nag-shopping kami*, *Paki-on ang aircon*, each with the careful form in the note.

**Groups and sample cards** (5 per deck; every `pron` is generator output and passes `pronPattern`):

| Group | Decks |
|---|---|
| First steps | Sounds and spelling · Greetings and respect · About me · Family and people |
| Everyday words | Numbers and money · Time, days and dates · Food and drink · Shopping and the market · Home and daily routine |
| Out and about | Around town and directions · Getting around · Health and help · Work and school |
| Conversation | Describing people and things · Feelings and free time · Questions and little words |
| Watch out | Traps for English speakers · Everyday Manila Taglish |

**1. Sounds and spelling** (First steps). Words that show each sound rule: ng and mga, the catch, stress that changes meaning, the tapped r and the vowel pairs. Lessons: `sounds`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| bata | `BAH-tahq` | child | Ends in a catch. Said BAH-tah with no catch, it means "robe". |
| aso | `AH-soh` | dog | Stress the first syllable. Stressed at the end, it means "smoke". |
| suka | `SOO-kahq` | vinegar | Ends in a catch. With no catch it means "vomit". |
| ngayon | `ngah-YOHN` | now | ng starts the word, as in "singer" without the "si". |
| mga bata | `mah-NGAH BAH-tahq` | children | mga is always read "ma-NGA"; it makes the noun plural. |

**2. Greetings and respect** (First steps). Greetings by time of day, thanks, sorry and goodbyes, with po, opo and the polite kayo. Lessons: `greetings`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Magandang umaga po. | `mah-gahn-DAHNG oo-MAH-gah pohq` | Good morning. (polite) | The linker -ng joins maganda to umaga. |
| Kumusta po kayo? | `koo-moos-TAH poh kah-YOH` | How are you? (polite) | kayo is the polite "you" for one person. |
| Salamat po. | `sah-LAH-maht pohq` | Thank you. (polite) | Drop po with friends. |
| Walang anuman. | `wah-LAHNG ah-noo-MAHN` | You're welcome. |  |
| Ingat! | `EE-ngaht` | Take care! | Said when someone leaves. |

**3. About me** (First steps). Your name, where you are from, your age, languages and job. Lessons: `intro`, `ng-pronouns`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Ako si Ana. | `ah-KOH see AH-nah` | I'm Ana. | si goes before a person's name. |
| Taga-Amerika ako. | `tah-gah-ah-MEH-ree-kah ah-KOH` | I'm from the US. | taga- + place = from that place. |
| Nag-aaral ako ng Tagalog. | `nahg-ah-AH-rahl ah-KOH nahng tah-GAH-lohg` | I'm studying Tagalog. |  |
| Ano ang pangalan mo? | `ah-NOH ahng pah-NGAH-lahn moh` | What's your name? (to a friend) | Polite: Ano po ang pangalan ninyo? |
| Ilang taon ka na? | `ee-LAHNG tah-OHN kah nah` | How old are you? (to a friend) | Literally "How many years are you already?" |

**4. Family and people** (First steps). Family words, the pronouns, and the titles Filipinos use for people: kuya, ate, tito, tita. Lessons: `pronouns`, `family`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| nanay | `NAH-nai` | mom |  |
| tatay | `TAH-tai` | dad |  |
| kuya | `KOO-yah` | older brother | Also a polite title for a young man a bit older than you: Kuya Jun. |
| ate | `AH-teh` | older sister | Also a title for a young woman a bit older than you. Said AH-teh. |
| lola | `LOH-lah` | grandmother | Also used for any elderly woman. |

**5. Numbers and money** (Everyday words). Native numbers for counting, Spanish numbers for prices and the clock, and pesos. Lessons: `numbers`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| isa | `ee-SAH` | one | Before a noun: isang bahay. |
| dalawang daan | `dah-lah-WAHNG DAH-ahn` | two hundred | Native numbers for hundreds. |
| bente pesos | `BEHN-teh PEH-sohs` | twenty pesos | Spanish numbers are normal for prices. |
| Magkano po ito? | `mahg-KAH-noh poh ee-TOH` | How much is this? (polite) |  |
| sukli | `soo-KLEEQ` | change (money back) |  |

**6. Time, days and dates** (Everyday words). Telling the time with alas-, days of the week, yesterday and tomorrow. Lessons: `time`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Anong oras na? | `ah-NOHNG OH-rahs nah` | What time is it? | Literally "What hour already?" |
| alas-tres | `ah-lahs-TREHS` | three o'clock | Spanish numbers for the clock; tatlong oras = three hours. |
| kahapon | `kah-HAH-pohn` | yesterday |  |
| bukas | `BOO-kahs` | tomorrow | Stressed at the end (boo-KAHS), bukas means "open". |
| Lunes | `LOO-nehs` | Monday | Days are capitalized. |

**7. Food and drink** (Everyday words). Rice, everyday dishes and drinks, eating together and ordering. Lessons: `may`, `food`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| kanin | `KAH-neen` | cooked rice | Uncooked rice is bigas. |
| tubig | `TOO-beeg` | water |  |
| Kain tayo! | `KAH-een TAH-yoh` | Let's eat! | Said to anyone nearby when you start eating. |
| Busog na ako. | `boo-SOHG nah ah-KOH` | I'm full. |  |
| masarap | `mah-sah-RAHP` | delicious |  |

**8. Shopping and the market** (Everyday words). The palengke and the sari-sari store: asking prices, this one and that one. Lessons: `this-that`, `in`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| palengke | `pah-LEHNG-keh` | wet market |  |
| Pabili po. | `pah-bee-LEE pohq` | I'd like to buy something, please. | What you call out at a sari-sari store. |
| ito | `ee-TOH` | this |  |
| mahal | `mah-HAHL` | expensive | Also "dear, love": Mahal kita = I love you. |
| mura | `MOO-rah` | cheap |  |

**9. Home and daily routine** (Everyday words). Rooms and things at home, and a day from waking to sleeping. Lessons: `markers`, `mag`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| bahay | `BAH-hai` | house |  |
| maligo | `mah-LEE-gohq` | to take a shower | Filipinos shower at least once a day; the word covers bath and shower. |
| matulog | `mah-TOO-lohg` | to sleep |  |
| gising | `ghee-SEENG` | awake |  |
| kusina | `koo-SEE-nah` | kitchen | From Spanish cocina. |

**10. Around town and directions** (Out and about). Places in town, asking where things are, near and far. Lessons: `sa-pronouns`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Nasaan ang CR? | `nah-sah-AHN ahng see-AHR` | Where's the restroom? | CR = comfort room, the everyday word. |
| simbahan | `seem-BAH-hahn` | church |  |
| malapit | `mah-LAH-peet` | near |  |
| kanan | `KAH-nahn` | right |  |
| kaliwa | `kah-lee-WAHQ` | left |  |

**11. Getting around** (Out and about). Jeepneys, tricycles, taxis and Grab: fares, stops and saying where to. Lessons: `directions`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Para po! | `PAH-rah pohq` | Stop here, please! | Said to a jeepney driver to get off. |
| Bayad po. | `BAH-yahd pohq` | Here's my fare. | Passengers pass the fare forward. |
| jeep | `jeep` | jeepney | Also written dyip. |
| sakayan | `sah-KAH-yahn` | pickup point |  |
| Kuya, sa Makati po. | `KOO-yah sah mah-KAH-tee pohq` | To Makati, please, sir. | To a driver: Kuya + place. |

**12. Health and help** (Out and about). Saying what hurts, the pharmacy, the doctor and asking for help. Lessons: `requests`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Masakit ang ulo ko. | `mah-sah-KEET ahng OO-loh koh` | I have a headache. | Literally "My head is painful." |
| Tulong! | `TOO-lohng` | Help! |  |
| botika | `boh-TEE-kah` | pharmacy |  |
| gamot | `gah-MOHT` | medicine |  |
| Pakitulungan po ako. | `pah-kee-too-LOO-ngahn poh ah-KOH` | Please help me. (polite) | paki- = please do. |

**13. Work and school** (Out and about). Jobs, the office, classes and daily mag- verbs. Lessons: `aspect`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| trabaho | `trah-BAH-hoh` | work; job |  |
| opisina | `oh-pee-SEE-nah` | office |  |
| guro | `GOO-roh` | teacher |  |
| estudyante | `ehs-too-JAHN-teh` | student |  |
| Nagtatrabaho ako sa ospital. | `nahg-tah-trah-BAH-hoh ah-KOH sah ohs-pee-TAHL` | I work at a hospital. | Ongoing aspect for a regular job. |

**14. Describing people and things** (Conversation). Size, looks and character, joined with the linker. Lessons: `linker`, `compare`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| maganda | `mah-gahn-DAH` | beautiful |  |
| malaking bahay | `mah-lah-KEENG BAH-hai` | big house | malaki + -ng: the linker joins it to bahay. |
| mabait | `mah-bah-EET` | kind |  |
| matangkad | `mah-tahng-KAHD` | tall |  |
| maliit | `mah-lee-EET` | small |  |

**15. Feelings and free time** (Conversation). How you feel, what you like, and -um- verbs for free time. Lessons: `um`, `gusto`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Masaya ako. | `mah-sah-YAH ah-KOH` | I'm happy. |  |
| Pagod na ako. | `pah-GOHD nah ah-KOH` | I'm tired. | na here means "now, already". |
| Gusto ko ng kape. | `goos-TOH koh nahng kah-PEH` | I want coffee. | gusto takes the ng form ko. |
| Ayoko. | `ah-YOH-koh` | I don't want to. | Short for ayaw ko. |
| sumayaw | `soo-mah-YOW` | to dance | -um- verb: the dancer takes ang. |

**16. Questions and little words** (Conversation). Question words, and the little words that go after the first word. Lessons: `questions`, `word-order`, `particles`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Ano? | `ah-NOH` | What? |  |
| Sino? | `SEE-noh` | Who? |  |
| Saan? | `sah-AHN` | Where? | For where something happens; nasaan = where is it. |
| lang | `lahng` | just; only | Short for lamang. |
| Ikaw naman? | `ee-KOW nah-MAHN` | And you? | naman: "your turn". |

**17. Traps for English speakers** (Watch out). False friends, calques, and the three words for "no": hindi, wala, huwag. Lessons: `yes-no`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Hindi po. | `heen-DEE pohq` | No. (polite) | hindi = not; for "there isn't any", say wala. |
| Wala. | `wah-LAHQ` | There's none. |  |
| Huwag! | `hoo-WAHG` | Don't! |  |
| siya | `shah` | he; she | One word for both. |
| mamaya | `mah-mah-YAHQ` | later today | Not "maybe" (that is baka or siguro). |

**18. Everyday Manila Taglish** (Watch out). What you hear every day in Manila: casual words, fillers and English mixed into Tagalog. Lessons: `taglish`.

| Target | pron | Meaning | Note |
|---|---|---|---|
| Sige. | `SEE-gheh` | Okay; go ahead. |  |
| Ewan ko. | `EH-wahn koh` | I don't know. (casual) | Careful: Hindi ko alam. |
| Grabe! | `GRAH-beh` | Wow, that's intense! |  |
| Tara! | `TAH-rah` | Let's go! | Casual; also Tara na! |
| Kain na tayo. | `KAH-een nah TAH-yoh` | Let's eat now. (casual) |  |

## 10. Typing and script

**Script.** Latin letters, left to right, with spaces. The modern Filipino alphabet has 28 letters (the 26 plus *ñ* and *ng*); *ng* is typed as two letters, and *ñ* occurs only in names and Spanish loans (*Santo Niño, Parañaque*). Normal spelling uses **no accent marks**; the dictionary marks of §6 never appear in targets or answers. **There is no script stage**: the letter-drill machine is not needed, and `sounds` is an ordinary lesson with an ordinary deck.

`targetScript`: `[A-Za-zÑñ]`. Every Tagalog string contains one of these characters. Like `id`'s, **it also matches any English string**, so it cannot catch English typed into a Tagalog field; the check is empty for this course.

**Accent bar** (`keys`): empty. Nothing in a typed answer needs a key that a US keyboard lacks; no A1 typed answer contains *ñ*.

**`accents: false`.** Tagalog answers never contain accent marks. In the matcher, `accents: false` means no accent folding at all, so a learner whose phone inserts *á* would be marked wrong (unlikely; request 8).

**Tiles or typing.** **Typing is the default** (the course does not set `tilesDefault`): every letter is on an English keyboard, and the words are spaced. The existing global "use tiles" switch remains the fallback. In `order` items a hyphenated word (*mag-aral, alas-tres, araw-araw*) is one tile, and a contracted word (*ako'y, ano'ng*) is one tile.

**Hyphens** are spelling, in three uses:
- after a prefix before a vowel (*mag-aral, nag-iisa, pag-ibig*) and before a name (*taga-Maynila*): it marks the catch;
- *alas-* + Spanish number (*alas-tres*), *ika-* + number (*ika-lima*);
- repeated words (*araw-araw, sari-sari, halo-halo*).
- Matcher today (`pracMatch` in `src/app.html`): a hyphen typed as a space (*mag aral, alas tres*) is already **"almost"** with "mind the hyphen". A hyphen **left out** (*magaral, alastres*) is **wrong** (request 3). The deck typing quiz (`normT`) strips hyphens, so cards are not affected.
- Writers list only the hyphenated form; never list the hyphenless or spaced form as accepted.

**Apostrophes and contractions.**
- Edge apostrophes are stripped by `pracNorm` (*'yan* → *yan*, *'di* → *di*, *'wag* → *wag*), so those contractions match whether or not the learner types the apostrophe. They are casual forms: accepted only in items cued "(casual)", where writers list them **and** the full form (*Ewan ko|Hindi ko alam* is not a pair; *'Di ko alam|Hindi ko alam* is).
- Inner apostrophes are kept: *ano'ng* and *anong* are different strings to the matcher. The course's model spelling is ***anong*** (*Anong oras na?*, as in the roadmap); writers also list *ano'ng* wherever *anong* is accepted (request 4). *Ako'y, siya'y, isa't* appear only in the `word-order` lesson's *ay* forms and are listed with the full form (*Ako ay…*).

**Spelling variants accepted everywhere** (writers list both; `a[0]` uses the first): *puwede / pwede*, *kumusta / kamusta*, *mayroon / meron*, *ninyo / niyo*, *jeep / dyip*, *taxi / taksi*, *cellphone / selpon*. Not variants (one form only): *din / rin* and *daw / raw* follow the sound before them (*din* after a consonant, *rin* after a vowel) as taught in `particles`; the other form is never accepted and never used as a distractor, because speakers do mix them [inference].

**What a typed answer must include**
- The right marker and pronoun form, and the linker (the standing rule).
- *po* (and the *kayo* forms) when the prompt has a polite cue; no *po* when it has a friend cue (§2.3).
- The aspect the English asks for; the focus the English cues (§8, `in`).
- Hyphens in hyphenated words.

**What it need not include**
- Final punctuation and capitals (ignored).
- *ay*: predicate-first and *ay* forms are both accepted where grammatical (§7).
- A dropped pronoun where Tagalog drops it naturally (writers list both).

**Punctuation and case.** Tagalog uses English punctuation (no ¿ ¡). The engine strips `. , ! ? ~` and quotes. Authors write sentence capitals, names, places, days and months capitalised (*Lunes, Enero*), and *Tagalog, Pilipino, Ingles* capitalised.

### 10.1 Voice

- **Device voices.** The app's voice picker (`pickVoice` in `src/app.html`) looks for a voice whose tag equals `ttsLang`, then **any voice whose tag starts with the first two letters of `ttsLang`**. For `fil-PH` those letters are `fi`, which is **Finnish**: on a device with a Finnish voice and no Filipino one, Tagalog would be read by the Finnish voice and the "no voice" message would not show. A Filipino voice tagged `tl-PH` or `tl` would not be found at all (request 1).
- **iOS:** Apple's VoiceOver language list has no Filipino or Tagalog ([Apple support](https://support.apple.com/en-ca/101364)); the author found no evidence that iOS ships a Filipino speech voice, so assume **iPhone learners have no device voice** (and iOS ships a Finnish voice [inference], which makes request 1 urgent). **Android:** Google's speech engine is commonly reported to include Filipino; not verified here (§11). **Desktop Edge** lists `fil-PH-BlessicaNeural` and `fil-PH-AngeloNeural` in its read-aloud voices ([Clozemaster forum](https://forum.clozemaster.com/t/voice-option-not-showing-for-tagalog/66181)), and that report notes the `tl` vs `fil` tag mismatch.
- **Azure:** Azure neural TTS has a Filipino voice, `fil-PH` Blessica (female; listed in Microsoft's low-resource voice update, MOS 4.36 ([Microsoft Tech Community](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/low-resource-technology-updates-for-azure-neural-text-to-speech/3716922))), and Angelo (`fil-PH-AngeloNeural`, male, [JSON2Video voice list](https://json2video.com/ai-voices/azure/voices/fil-ph-angeloneural/)). Recorded clips are the reliable audio path for this course (request 2).
- **A learner with no voice and no clip** still has the full course: the pron line (always shown, §6) carries stress and the catch, and the visible "no voice" message tells them why there is no sound.

### 10.2 What the lead needs to do in the engine and pipeline (priority order)

Tagalog is a Latin-script course, so none of the non-Latin machinery (script stage, letter drills, fonts, right-to-left) is needed. These are the changes it does need:

1. **Voice matching by language subtag, with `fil` = `tl`.** In `pickVoice`, compare the part of the tag before `-` / `_` (`fil`), not the first two letters, and treat `fil` and `tl` as the same language (`fil-PH`, `fil_PH`, `tl-PH`, `tl`). **If not built:** on an iPhone with no Filipino voice and a Finnish one, Tagalog is spoken with a Finnish voice and no "no voice" message appears; the lead should then not release en-tl without request 2.
2. **Azure clips for en-tl.** Add `"tl": {"voice": "fil-PH-BlessicaNeural", "locale": "fil-PH"}` to `tools/audio/voices.json` and generate clips for every card, example row and practice answer. **If not built:** iPhone learners have no audio at all; the course still works from the pron line, but listening practice is lost for them.
3. **"Almost" for a hyphen left out** (*magaral* for *mag-aral*, *alastres* for *alas-tres*), as already done for a space. **If not built:** those answers are wrong; writers keep listing only the hyphenated form, and `sounds` / `mag` warn about the hyphen in the lesson body.
4. **Inner apostrophes optional in the practice matcher** (*ano'ng* = *anong*, *sa'n* = *san*). **If not built:** writers list both spellings wherever *anong / sinong* appear (bounded: a handful of items).
5. **"Almost" for listed casual / standard pairs** (*'yung* for *ang*, *ayoko* for *ayaw ko*, *'di* for *hindi*): accepted with the note "careful form: …". **If not built:** a casual form typed outside a "(casual)" item is wrong; `why` lines never call it a mistake.
6. **Pron always visible for en-tl.** If the engine hides or blurs the pron line after the early lessons for other courses, en-tl should opt out (stress is never written). **If not built:** learners must turn the line back on themselves; the `sounds` lesson tells them to.
7. **Accent folding with `accents: false`** (treat *á* as *a*, as for `id`). **If not built:** a learner whose phone inserts accents is marked wrong; very rare.
8. **"Almost" for a missing *po* after a polite cue.** Pedagogically kinder than wrong. **If not built:** the answer is wrong, and the `why` says "Add po: the prompt asks you to be polite."
9. **Lint for the generator's warnings:** `repron.js` already collects the « » words; the lead should run `TL_CHECK=1` once per review to list the author `LEX` entries used in the course, and check them in Wiktionary. **If not built:** unchecked author stresses ship as they are (§11, item 1).

## 11. Gaps and unverified claims

**No native speaker has checked this profile.** Check these first, in this order:
1. **The 229 unchecked author entries in `respell.js` `LEX`** (stress and final catch). 89 forms are checked (§6.5); of the author's guesses that were looked up, **about one in four was wrong** (7 of about 27), so expect roughly 50 wrong entries among the 229 until they are checked. **Recommendation: the lead checks every author entry in Wiktionary before writers start** (`TL_CHECK=1 node tools/target/tl/respell.js "<text>"` lists the author entries in any row); it is about 230 lookups, and every wrong entry would otherwise spread into many rows. Highest risk: the describing words set by pattern (*gutóm, galít, takót, tulóg, uháw, busóg*), *daan* (hundred), *sukli*, *bayad*, *kaliwa*, *mamaya*, *lalaki*, *Makati, Maynila*, the Spanish numbers, and every verb form (*kumakain, nagluluto, nag-aaral, pakitulungan*).
2. **The phrase rule for the catch**: shown only before a pause, dropped mid-sentence and before the linker, *'y* and *'t* (Wikipedia, learningtagalog). A native should say whether `pohq` at the end of every polite sentence looks overdone, and whether `shah` for *siya* (rather than `see-YAH`) and `jahn` for *diyan* are the right forms to teach.
3. **Taglish choices** (§2.2): which loans count as "the normal word", English vs respelled spelling (*jeep / dyip*), and the number table. The two number sources disagree on dates and partly on money.
4. **Politeness and address** (§2.3–2.4): who gets *po*, *ho* as recognition only, *manong / manang* as Manila usage, *sir / ma'am* as normal service talk, *kuya / ate* for drivers and shop staff.
5. **Every wrong → right pair in §4** that is not tagged with a source, and the enclitic order in §4.4 for pronouns (Wikipedia gives the particle order only).
6. **Sample sentences and cards**: *Ano ang pangalan mo?* vs *Anong pangalan mo?*, *Nagtatrabaho ako sa ospital* (no *isang*), *Kuya, sa Makati po*, *Pabili po*, *Masakit ang ulo ko*, *Kain na tayo*, prices in §9, and the false friends (*mamaya, mahal, ate, CR*).
7. **`greet`**: *Magandang gabi* for the late-night slot ("you're up late") and *Magandang hapon* for the whole 12–18 slot (*Magandang tanghali* is the greeting around noon) [inference].
8. **`self` and `brand` = "Tagalog"**: a native may prefer *Wikang Filipino* or *Tagalog* for the brand line.

**Evidence that could not be found, or was read only in part**
- **No error study of English-L1 adults learning Tagalog** was found. §4 rests on practitioner pages (Preply, Ling), reference grammars (Wikipedia), and one review of children (Barrios & Garcia 2023), whose L2 data are Cebuano and Chabacano speakers.
- **Heritage-learner studies** (UCLA and Hawai'i Filipino programmes publish on this) were not opened; §5 rests on a news article and inference.
- **US numbers**: the census language table and the MLA enrolment census were not opened; the 1.7–1.8 million figure is as reported by Study International.
- **The roadmap's syllabuses** (SEASSI, Oxnard FILI R101, Polyglottist) were not reopened; their order is the roadmap researcher's summary.
- **Zuraw & Roca 2025** was read in part (the first 100,000 characters).
- **Kess 1981** is an essay without speaker data.
- **Device voices**: Android's Filipino voice and its tag (`fil-PH` or `tl-PH`) were not verified; that iOS has no Filipino voice is inferred from Apple's VoiceOver list and the absence of any report of one.
- One textbook site (tagalog-text-book.netlify.app) was opened and **rejected as a source for words**: it gives *bata'* (with a catch) as "bathrobe", the reverse of Wiktionary.

**Engine and pipeline** (for the lead; details in §10.2)
- `pickVoice` matches `fil-PH` to Finnish by its first two letters, and cannot find `tl-PH` (request 1).
- `tools/audio/voices.json` has no `tl` entry (request 2).
- A hyphen left out is wrong, not "almost" (request 3); *ano'ng* ≠ *anong* in the practice matcher (request 4).
- `targetScript` matches English text too; `pronPattern` accepts a few raw words (*may, kay, oo, kain, jeep*).
- `word-order` and `taglish` have an empty `roadmap` field; all 25 `tl-*` items are linked.

**Not verified at all**
- How well learners read the respelling, and whether `q` for the catch helps.
- Whether the Azure `fil-PH` voices and Android voices say the catch and the stress the way `LEX` assumes.

## Sources

Web pages opened and used for this profile (2026-11-19):
- [Wikipedia, *Tagalog phonology*](https://en.wikipedia.org/wiki/Tagalog_phonology)
- [Wikipedia, *Tagalog grammar*](https://en.wikipedia.org/wiki/Tagalog_grammar)
- [Wikipedia, *Taglish*](https://en.wikipedia.org/wiki/Taglish)
- [Wiktionary, *Appendix: Tagalog pronunciation*](https://www.wiktionary.com/wiki/Appendix:Tagalog_pronunciation)
- [Wiktionary, *Appendix: Tagalog numbers*](https://en.wiktionary.com/wiki/Appendix:Tagalog_numbers)
- Wiktionary entries via kaikki.org: [bata](https://kaikki.org/dictionary/Tagalog/meaning/b/ba/bata.html), [aso](https://kaikki.org/dictionary/Tagalog/meaning/a/as/aso.html), [suka](https://kaikki.org/dictionary/Tagalog/meaning/s/su/suka.html), [kain](https://kaikki.org/dictionary/Tagalog/meaning/k/ka/kain.html), [mga](https://kaikki.org/dictionary/Tagalog/meaning/m/mg/mga.html), [umaga](https://kaikki.org/dictionary/Tagalog/meaning/u/um/umaga.html), [bahay](https://kaikki.org/dictionary/Tagalog/meaning/b/ba/bahay.html), [araw](https://kaikki.org/dictionary/Tagalog/meaning/a/ar/araw.html), [opo](https://kaikki.org/dictionary/Tagalog/meaning/o/op/opo.html), [po](https://kaikki.org/dictionary/Tagalog/meaning/p/po/po.html), [oo](https://kaikki.org/dictionary/Tagalog/meaning/o/oo/oo.html)
- More Wiktionary entries (via kaikki.org or Wiktionary mirrors): [salamat](https://en.wiktionary.com/wiki/salamat), [tsinelas](https://kaikki.org/dictionary/Tagalog/meaning/t/ts/tsinelas.html), [masarap](https://kaikki.org/dictionary/Tagalog/meaning/m/ma/masarap.html), [gamot](https://kaikki.org/dictionary/Tagalog/meaning/g/ga/gamot.html), [ngayon](https://www.wiktionary.com/wiki/ngayon), [mangga](https://kaikki.org/dictionary/Tagalog/meaning/m/ma/mangga.html), [kumain](https://wiki.neonvagabond.xyz/content/wiktionary_en_all_nopic_2024-05/A/kumain), [bukas](https://kaikki.org/dictionary/Tagalog/meaning/b/bu/bukas.html), [pagod](https://kaikki.org/dictionary/Tagalog/meaning/p/pa/pagod.html), [gising](https://kaikki.org/dictionary/Tagalog/meaning/g/gi/gising.html), [kanin](https://kaikki.org/dictionary/Tagalog/meaning/k/ka/kanin.html), [gusto](https://kaikki.org/dictionary/Tagalog/meaning/g/gu/gusto.html), [kape](https://kaikki.org/dictionary/Tagalog/meaning/k/ka/kape.html), [aral](https://www.wiktionary.com/wiki/aral), [mag-aaral](https://en.wiktionary.com/wiki/mag-aaral), [alas-tres](https://en.wiktionary.com/wiki/alas-tres)
- [Zuraw, K. & Roca, P. (2025). Evidence for stress in Filipino text-setting. *Phonology* 42, e7](https://www.cambridge.org/core/product/749B69E22EEFE610B29535C6830D4575)
- [Barrios, A. & Garcia, R. (2023). Filipino children's acquisition of nominal and verbal markers in L1 and L2 Tagalog. *Languages* 8(3), 188](https://www.mdpi.com/2226-471x/8/3/188)
- [Kess, J. F. (1981). On the origins of Philippine particle/pronominal sociolinguistic use. *WPLC* 1(2), 251–265](https://journals.uvic.ca/index.php/WPLC/article/view/5039/1946)
- [learningtagalog.com, *Numbers in use*](https://learningtagalog.com/grammar/other_describing_words/expressing_quantity_or_distribution/numbers_in_use.html)
- [learningtagalog.com, *Final glottal stops*](https://learningtagalog.com/grammar/pronunciation/long_vowels_stress_and_glottal_stops/final_glottal_stops.html)
- [learningtagalog.com, *Sloppiness in spoken and written Tagalog*](https://learningtagalog.com/articles/sloppiness_in_spoken_and_written_tagalog.html)
- [learningtagalog.com, *Spelling system using diacritical marks*](https://learningtagalog.com/grammar/pronunciation/long_vowels_stress_and_glottal_stops/spelling_system_using_diacritical_marks.html) (introduction only)
- [Preply, *Tagalog sentence structure*](https://preply.com/en/blog/tagalog-sentence-structure)
- [Ling, *Tricky Tagalog grammar rules*](https://ling-app.com/fil/tricky-tagalog-grammar-rules/)
- [Kaiwa, *Filipino workplace casual conversations*](https://trykaiwa.com/blog/filipino-workplace-casual-conversations-realistic)
- [Study International, *The fourth-most-spoken language America often forgets to teach*](https://studyinternational.com/news/harvard-refusal-to-teach-the-filipino-language/)
- [Microsoft Tech Community, *Low-resource technology updates for Azure neural TTS*](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/low-resource-technology-updates-for-azure-neural-text-to-speech/3716922)
- [JSON2Video, Azure voice `fil-PH-AngeloNeural`](https://json2video.com/ai-voices/azure/voices/fil-ph-angeloneural/)
- [Clozemaster forum, *Voice option not showing for Tagalog*](https://forum.clozemaster.com/t/voice-option-not-showing-for-tagalog/66181)
- [Apple Support, VoiceOver languages](https://support.apple.com/en-ca/101364)
- [Wikibooks, *Tagalog/Phrasebook*](https://en.wikibooks.org/wiki/Tagalog/Phrasebook) (checked for stress marks; it has none, so it was not used for words)
- [tagalog-text-book.netlify.app, *Pronunciation guide*](https://tagalog-text-book.netlify.app/reference/pronunciation-guide) (error list only; rejected for word data, §11)
- Repository files: `docs/roadmaps/tl.json`, `docs/profiles/en-id.md`, `docs/profiles/en-vi.md`, `tools/target/id/respell.js`, `src/app.html` (`pickVoice`, `pracNorm`, `pracMatch`, `normT`), `tools/audio/voices.json`, `tools/target/validate.js`, `tools/target/repron.js`, `tools/target/link_roadmap.py`.
