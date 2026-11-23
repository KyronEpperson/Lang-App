# Parts of speech in the en-da lessons

Writer EN-DA-CORE, 2026-11-23. Read from `lessons-1.js`, `lessons-2.js` and `lessons-3.js`: every lesson's section headings, the bodies of `pronouns`, `possessives`, `negation`, `inversion`, `questions`, `numbers`, `present`, `past`, `adjectives`, `directions` and `traps`, and word searches across all 26 bodies (for "adverb", "conjunction", "interjection", "preposition", "ordinal", and the core words themselves). No lesson was written or changed.

**Key**
- **taught**: a lesson presents it as grammar, with forms and practice.
- **touched**: it appears inside another lesson's topic, or only part of the class is taught.
- **missing**: no lesson presents it.

| Part of speech | Lessons that teach it (id: title) | How fully | What a learner still cannot do |
|---|---|---|---|
| Noun | `en-et`: en and et: the two genders; `plural`: Plurals: -er, -e, or nothing; `definite`: The definite ending: bilen, huset | taught | Little at this level. Nouns with no article in Danish but one in English (*folk, penge, tøj*) and the time words that take a definite ending (*om sommeren*) come only from cards. |
| Verb | `present`: Present tense in -r; `modals`: Modal verbs: vil, kan, skal, må; `past`: The past: arbejdede, var, havde; imperatives appear in `directions` (*drej, gå, kryds*) | taught (present, modals, simple past) / touched (imperative) | Use the perfect (*jeg har spist, jeg er kommet*), which spoken Danish uses all the time; `past` says it is not that lesson. Use the imperative as a pattern (it is only seen in `directions`). Use reflexive verbs (*sætte sig, glæde sig*) and *-s* forms (*vi ses, mødes*), which Top verbs and Flirting now contain. |
| Adjective | `adjectives`: Adjectives: stor, stort, store; `nationality` (adjective brings the article back); `traps` (*en dygtig tømrer*) | taught | Compare (*større end, størst*; *god, bedre, bedst*). Use the adjectives that never change (*næste, sidste, stille, bange, ægte*) knowingly. |
| Adverb | No lesson on adverbs as a class. Bits of it: `negation` (*altid, aldrig* in the *ikke* slot); `inversion` (*i dag, i morgen, her* as the first element); `traps` (*til sidst, endelig, eventuelt*); `likes` (*godt* in *kan godt lide*) | touched | Tell motion from rest (*ud / ude, ind / inde, hjem / hjemme, op / oppe*), which English does not mark. Make an adverb from an adjective with *-t* (*hurtig → hurtigt*). Place *også, kun, stadig, nok, jo* in the *ikke* slot. Use the small spoken adverbs (*jo, vel, nu, bare, lige, da*). The word "adverb" never appears in the lessons. |
| Pronoun | `pronouns`: Pronouns: jeg, du, mig, dig (subject and object forms, *sig*, *den / det / de*); `possessives`: min, mit, mine (*hans, hendes, vores, jeres*; *sin / sit / sine* named and postponed); `questions` (*hvad, hvem*) | taught (personal, possessive) / touched (reflexive possessive, question) / missing (indefinite, demonstrative, relative) | Use *sin, sit, sine* (the lesson says "that set can wait"). Say *noget, nogen, ingen, alle, alt, ingenting*. Say "this / these" (*den her, det her, de her*; written *denne, dette, disse*). Join a relative clause with *som* or *der*. Ask *hvilken / hvilket / hvilke*. |
| Preposition | No lesson on prepositions as a class. `intro` (*i, fra*); `time` (*over, i* in *kvart over / kvart i*); `directions` (*til højre, ved siden af, mellem*); `traps`: Prepositions English moves (*venter på, ringer til, glad for, afhænger af*) | touched | Choose between *i* and *på* for places and times (*i København* but *på Fyn*, *på arbejde*, *i dag* but *på mandag*). Use *hos* ("at someone's place"), *om* for "in" + time (*om en time*), *til* + time, *for … siden* ("ago"). Use two-word prepositions (*ud af, ind i, uden for*). |
| Conjunction | `negation`: Before the verb after at, fordi, hvis, når; `inversion` (a *hvis* / *når* clause as the first element) | touched | The subordinating ones (*at, fordi, hvis, når*) are taught only as triggers for the place of *ikke*, not as meaning. *da* vs *når* for "when" is missing, and it is a classic English-speaker error. *og, men, eller* are used but never taught as a class. *end, mens, siden, selvom, både … og, hverken … eller* are missing. |
| Interjection | None. | missing | React like a speaker: *nå* (well / I see), *øv* (aw), *pyt* (never mind), *ups* (oops), *føj* (yuck), *skål*, *hold da op* (wow). Answer a negative question with *jo*, not *ja* (taught nowhere; `questions` covers only yes/no questions with *ja / nej*). |
| Article / determiner | `alphabet` (two little words in front of a noun); `en-et`; `definite`; `adjectives` (*den / det* + *-e*); `possessives`; `nationality` and `traps` (no article after *er* for a trade or nationality) | taught | Use *hver / hvert*, *hele*, *begge*, *mange / meget*, *flere / mere*, *sådan en*. |
| Numeral | `numbers`: Numbers and prices (0–100, *én / ét*, *enogtyve / etogtyve*); `time`: Telling the time | taught (cardinals) / missing (ordinals) | Say *første, anden, tredje, fjerde* for dates, floors and order (*den første maj*, *på tredje sal*). Say a thousand (*tusind*) and the months, which are not taught (and which `respell.js` stresses wrongly for half of them, see CORE-SOURCES.md §4). |

## Summary

- **Missing:** interjections (and *jo* as an answer word); ordinal numbers; indefinite, demonstrative and relative pronouns.
- **Touched only:** adverbs as a class (motion vs rest, *-t* adverbs, the spoken particles); prepositions as a class (*i* vs *på*); conjunctions as meaning (*da* vs *når*, *end, mens, selvom*); the perfect and the imperative.
- **Taught:** nouns (gender, plural, definite), present / modal / simple past verbs, adjectives with agreement, personal and possessive pronouns, articles, cardinal numbers.

## Proposed lessons

Outlines only. Places are suggestions, after the lessons each one builds on.

### 1. `interjections`: nå, øv, pyt, and jo (after `likes`)
- **Teaches:** 12–15 reactions grouped by feeling: news (*nå, åh, ih*), disappointment (*øv*), letting go (*pyt, pyt med det*), mistakes (*ups*), disgust (*føj*), pain (*aj*), toasts and praise (*skål, bravo, hold da op*); plus *jo* as "yes" after a negative question.
- **English-speaker trap:** answering *Kommer du ikke?* with *ja* (Danish says *jo*); reading *nå* as "now" or "no"; saying *okay* and *wow* with English vowels in a Danish sentence.
- **Examples:** *Kommer du ikke? Jo!* · *Bussen kommer ikke. Øv!* · *Undskyld, jeg glemte din bog. Pyt med det.*
- **Deck:** Top interjections (every card has a dialogue), and *jo* in Top words.

### 2. `adverbs`: ud or ude, hjem or hjemme, and -t (after `directions`)
- **Teaches:** motion and rest pairs (*ud / ude, ind / inde, hjem / hjemme, op / oppe, ned / nede*); adverbs from adjectives with *-t* (*hurtig → hurtigt, god → godt*); *også, kun, stadig, nok, jo* in the *ikke* slot.
- **English-speaker trap:** *Jeg er hjem* for "I'm home" (Danish: *hjemme*); *Han kører hurtig* without the *-t*; *Jeg også taler dansk* (the adverb goes after the verb, like *ikke*).
- **Examples:** *Jeg går hjem. Nu er jeg hjemme.* · *Hun taler godt dansk.* · *Jeg taler også engelsk.*
- **Deck:** Top adverbs.

### 3. `da-naar`: da, når, og, men, end and mens (after `inversion`)
- **Teaches:** *da* for one time in the past vs *når* for every time or the future; the coordinating *og, men, eller* (no inversion after them); *end* for comparisons, *mens* for "while", *siden* for "since / ago". Comma before the subordinate clause, as the house rule says.
- **English-speaker trap:** *når* for a single past event (*Når jeg var barn…* → *Da jeg var barn…*); inverting after *og* or *men*; *end* replaced by *som*.
- **Examples:** *Da jeg var barn, boede jeg i Aarhus.* · *Når jeg kommer hjem, laver jeg mad.* · *Hun læser, mens han laver mad.*
- **Deck:** Top conjunctions.

### 4. `noget-nogen`: noget, nogen, ingen, sin, and den her (after `possessives`)
- **Teaches:** *noget* (something, before neuter nouns) vs *nogen* (somebody, anybody); *ingen, intet / ikke noget, ingenting, alle, alt*; *sin / sit / sine* when the subject owns the thing; "this / these" in speech (*den her, det her, de her*) and writing (*denne, dette, disse*); relative *som*.
- **English-speaker trap:** *Han kører hans bil* when it is his own car (Danish: *sin bil*); *Jeg har ikke nogen* vs *Jeg har ingen*, both right but with *ikke* in the right slot; *noget* for a person.
- **Examples:** *Er der nogen hjemme?* · *Han ringer til sin mor.* · *Manden, som bor her, er læge.*
- **Deck:** Top pronouns.

### 5. `i-paa`: i or på, and the prepositions English moves (after `traps`, or before `directions`)
- **Teaches:** *i* vs *på* for places (*i København, på stationen, på arbejde*) and time (*i dag, på mandag, om morgenen, om en time*); *hos*; *for … siden* ("ago"); *ud af, ind i, uden for*.
- **English-speaker trap:** *i arbejde* for "at work"; *i mandag* for "on Monday"; *om* read as "about" in *om en time* ("in an hour").
- **Examples:** *Jeg er på arbejde.* · *Toget kommer om ti minutter.* · *Jeg kom til Danmark for to år siden.*
- **Deck:** Top prepositions.

### Smaller gaps (a section in an existing lesson, not a new lesson)
- **Ordinals** (*første, anden, tredje, fjerde*): one section in `numbers` or `time`. Links to Top words, which now has them.
- **The perfect** (*jeg har spist, jeg er kommet*): the past lesson keeps it out on purpose; a short lesson after `past` would cover the form Danes use most in speech. Links to Top verbs (the notes give the present and the past, not the participle).
- **Comparison** (*større end, bedre, bedst*): a section in `adjectives`. Links to Top adjectives and *end* in Top conjunctions.
