# Core words, Flirting and Compliments (en-de): sources and skips

Writer: core-words writer for `de`, 2026-11-23. Files: `decks-t.js` + `extra-t.js` (the nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments), this file, `POS-COVERAGE.md`, and eleven entries appended to `profile.json`.

## 1. Frequency sources actually opened

**Read this first: only the top of each deck is in source order.** Two sources could be read, and both only in part. Cards with a rank come first, in rank order. Everything after them is ordered by the writer's judgement, which leaned towards spoken, everyday German of Germany (what an A1 learner hears), not newspaper German.

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| Duden, [Die häufigsten Wörter in deutschsprachigen Texten](https://www.duden.de/sprachwissen/sprachratgeber/Die-haufigsten-Worter-deutschsprachigen-Texten) | The Dudenkorpus (the page says it is dominated by newspaper text). Tables: top 50 words overall; top 20 nouns, adjectives and verbs in the whole corpus; top 20 nouns, adjectives and verbs in the novels part. | Duden page, all rights reserved. Only the ranks were used; nothing was copied. | **Head of Top nouns, Top verbs and Top adjectives.** Whole-corpus list first, then the novels list for the words it adds. |
| Wiktionary user page [Benutzer:Baisemain/10000](https://de.wiktionary.org/wiki/Benutzer:Baisemain/10000) | Universität Leipzig, Projekt Deutscher Wortschatz, word-form frequency list dated 8 January 2001 (mostly newspaper text). Partly lemmatised by the page's editor; names removed. No rank numbers: the rank is the position in the list. | Wiktionary text is CC BY-SA; the page names no licence for the data. Only positions were used. | **Head of Top adverbs, Top pronouns, Top prepositions, Top conjunctions and Top words.** Only the first 400 positions could be read (the fetch tool would not return more), so the numbers below are positions 1–400 in that list, counted from the copy the tool returned. A word form's first position is used (keine for kein, anderen for andere, beiden for beide, ersten for erste). |

**Ranks used, deck by deck** (everything not listed is ordered by judgement):
- **Top nouns:** Duden whole corpus: Jahr 1, Uhr 2, Euro 3, Prozent 4, Mensch 5, Land 9, Stadt 13, Ende 15, Woche 16, Fall 20; then Duden novels: Hand 3, Auge 5, Kopf 8, Gesicht 11, Leben 13, Blick 16, Wort 19, Herr 20. Judgement from *das Geld* on.
- **Top verbs:** Duden whole corpus 1–20 in order (sein, haben, werden, können, sagen, müssen, sollen, geben, wollen, kommen, gehen, machen, stehen, lassen, sehen, finden, bleiben, liegen, zeigen, dürfen); then Duden novels: wissen 16, fragen 17, tun 18, nehmen 19, hören 20. Judgement from *heißen* on.
- **Top adjectives:** Duden whole corpus: neu 1, groß 2, weit 6, deutsch 7, gut 8, klein 9, eigen 10, letzt- 11, alt 12, hoch 13, jung 15, lang 18, nah 19; then Duden novels: ganz 7, spät 18, einzig 19, lieb 20. Judgement from *wichtig* on.
- **Top adverbs:** Leipzig positions: auch 22, noch 39, so 45, nur 50, schon 69, dann 75, wieder 87, immer 96, jetzt 111, bereits 119, da 120, selbst 130, nun 132, etwa 133, heute 135, sehr 164, hier 165, erst 167, weiter 185, einmal 188, dort 198, zurück 244, gar 255, gestern 257, kaum 264, gerade 274, wohl 281, später 282, mal 301, zusammen 317, nie 326, besonders 328, allein 335, schließlich 355, eher 359, oft 360. Judgement from *morgen* on.
- **Top pronouns:** Leipzig positions: sich 10, es 23, er 27, sie 30, Sie 46, man 58, wir 77, was 99, ihr 122, ihm 138, ihn 151, uns 160, etwas 189, nichts 191, alles 199, ihnen 247, mich 288, wer 295, mir 298. Judgement from *du* on. Note: in a newspaper list *du*, *dich*, *dir* and *euch* barely appear, so they sit low; in speech they are among the most common words. The lead may want to move them up; only the order would change.
- **Top prepositions:** Leipzig positions: in 4, von 6, zu 7, mit 9, auf 12, für 13, im 15, an 24, aus 26, nach 31, bei 33, um 36, am 37, über 42, zum 47, vor 53, zur 54, bis 55, durch 57, gegen 66, vom 67, unter 76, zwischen 94, seit 106, beim 109, ab 125, ohne 128, ins 156, wegen 184, während 235, gegenüber 289, statt 343, pro 350, neben 362, hinter 377. Judgement for außer, trotz, entlang, innerhalb.
- **Top conjunctions:** Leipzig positions: als 21, sondern 129, sowie 171, ob 180, zwar 217. Judgement from *bevor* on.
- **Top interjections:** **all judgement.** No interjection is in either list.
- **Top words:** Leipzig positions: der 1, die 2, das 8, nicht 17, ein 18, eine 20, wie 40, mehr 56, seine 72, ihre 74, zwei 83, dieser 86, kein 88 (as keine), alle 103, drei 113, erste 131 (as ersten), andere 142 (as anderen), beide 187 (as beiden), vier 193, viele 195, wo 196, viel 197, fünf 207, zehn 237, wenig 292, sechs 305, jeder 325, einige 339. Judgement from *nein* on; the other numbers run in counting order and the days in calendar order.

**Could not be read** (tried 2026-11-23):
- en.wiktionary.org `Wiktionary:Frequency_lists/German`: not on this session's fetch allowlist. The wiktionary.com copy opened but lists sources only, with no ranks.
- de.wiktionary.org by raw download (curl): refused by the network proxy (403). Positions after 400 of the Leipzig page: the fetch tool refused to return them.
- IDS Mannheim DeReKo lemma lists: the page opened, but downloads are zip files under non-commercial terms. Not used.
- University of Michigan "Most frequent German words": opened, but it groups words by type with no ranks. Not used.
- SUBTLEX-DE (Brysbaert 2011) on norare.clld.org: the page opened, but its table was empty.

**Suggestion for the lead:** re-rank the judgement tails against a subtitles list (SUBTLEX-DE or OpenSubtitles) from a machine that can download one. Both lists used here are newspaper-based, so spoken words (du, mal, doch-type particles, interjections) are under-ranked. Only the order inside each deck should move.

Every meaning, note, example and dialogue was written by the writer; none was copied from a source.

## 2. Slots renamed or added, and why

- **No slot renamed or added.** German has all nine classes as the brief defines them, so the nine fixed deck names are kept.
- **Contractions (im, am, zum, zur, vom, beim, ins)** go in Top prepositions: they are preposition + article, very frequent (im is position 15), and their case is the point of the note.
- **Pronominal and connecting adverbs used as conjunctions** (trotzdem, außerdem, sonst, deswegen, nämlich) go in Top conjunctions, like deshalb in the course's own Questions and connectors deck. Each note says the verb comes right after them (they are adverbs for word order).
- **Possessive determiners** (mein, dein, seine, ihre, unser, euer, Ihr) go in Top words as determiners, as in the Spanish course. *His* and *her/their* are given as **seine** and **ihre** because *sein* is the verb card *sein* (to be) and *ihr* is the pronoun card *ihr* (you, plural); the note gives the short form.
- **Case-only pairs kept on purpose** (the targets differ only by a capital letter, which is a real German distinction, so the release check sees two targets): *sie* / *Sie* and *ihnen* / *Ihnen* in Top pronouns; *ihr* (Top pronouns) / *Ihr* (Top words). The validator prints no "is in two decks" line for them.
- **Verbs:** dictionary form; the note gives the ich-form (and the du-form where the stem changes), then Regular / Strong / Irregular / Modal / Separable, with the past forms for strong and irregular verbs. Reflexive verbs are given as *sich freuen*, *sich erinnern*, *sich vorstellen*.
- **Nouns:** article in the target, plural in the note. **Prepositions:** the case (accusative, dative, two-way, genitive) in every note.

## 3. Words skipped because the course already teaches them

Exact card targets in `decks-a.js` / `decks-b.js` (rule 3), plus words left out to avoid a clash between two of the new decks.

| Deck | Skipped | Already taught in / reason |
|---|---|---|
| Top nouns | der Tag, die Zeit, das Kind, die Frau, der Mann (Duden top 20) | Sounds and spelling (der Tag, die Zeit); People and family (das Kind, die Frau, der Mann) |
| Top nouns | der Vater, die Mutter, das Haus, die Tür (Duden novels top 20) | People and family (der Vater, die Mutter); Sounds and spelling (das Haus, die Tür) |
| Top nouns | das Buch, der Hund, die Leute, das Wasser, die Straße, die Sonne, der Wein, der Sport, der Freund, die Freundin, die Eltern, der Sohn, die Tochter, das Mädchen, die Wohnung, die Küche, der Termin, die Miete, der Ausweis, der Chef | Sounds and spelling; People and family; Home and routine; Life in Germany; Traps for English speakers |
| Top nouns | die Hilfe | Clash: Hilfe! (Health and emergencies) differs only by the article |
| Top nouns | der Morgen, das Essen | Clash with the new cards morgen (Top adverbs) and essen (Top verbs): they differ only by the article |
| Top nouns | das Haar | Clash with die Haare (Flirting) |
| Top verbs | bekommen, spenden | Traps for English speakers |
| Top verbs | zahlen | By judgement: Zahlen, bitte! (Food and drink) differs only by capital and punctuation |
| Top verbs | leben | Clash with das Leben (Top nouns, Duden rank) |
| Top adjectives | schön, gelb | Sounds and spelling |
| Top adjectives | aktuell, eventuell, sensibel | Traps for English speakers |
| Top adjectives | geschlossen | Life in Germany |
| Top adjectives | viel, ander-, erst-, einig-, zweit-, wenig (Duden "adjectives") | Determiners and ordinals: in Top words |
| Top adjectives | gerade (Duden novels) | Its adverb use is the common one: in Top adverbs |
| Top adjectives | vergangen (Duden 17) | By judgement: newspaper word (vergangene Woche); rare for a beginner as a card |
| Top adjectives | echt, toll, klar-type interjections | echt and toll kept only as Echt? and Toll! (Top interjections); klar kept as an adjective, with Na klar! and Alles klar! as interjections |
| Top adjectives | hübsch, süß, witzig, lustig, klug, schlau, attraktiv | Left for the Flirting word layer |
| Top adverbs | fast, also | Traps for English speakers |
| Top adverbs | deshalb | Questions and connectors |
| Top adverbs | doch | Questions and connectors (Doch!) |
| Top adverbs | genau | Kept as Genau! (Top interjections) |
| Top pronouns | ich | Sounds and spelling |
| Top conjunctions | und, oder, aber, denn, weil, dass, wenn, deshalb | Questions and connectors |
| Top conjunctions | also | Traps for English speakers |
| Top conjunctions | wie, bis, während, seit | Each is one card only: wie in Top words, bis / während / seit in Top prepositions; the note gives the conjunction use |
| Top interjections | Hallo!, Tschüss!, Danke!, Bitte!, Entschuldigung! | Greetings and courtesy |
| Top interjections | Hilfe!, Vorsicht!, Gute Besserung! | Health and emergencies |
| Top interjections | Prost!, Guten Appetit! | Food and drink |
| Top interjections | Doch! | Questions and connectors |
| Top interjections | Keine Sorge! | Feelings and states |
| Top interjections | Mensch! | Clash with der Mensch (Top nouns) |
| Top interjections | Herzlichen Glückwunsch!, Gut gemacht! | In the new Compliments deck |
| Top words | ja | Sounds and spelling |
| Top words | eins, zwölf, sechzehn, siebzehn, einundzwanzig, dreißig, hundert | Numbers, time and prices / Sounds and spelling |
| Top words | Warum? | Questions and connectors |
| Flirting | schön | Sounds and spelling; used only inside phrases (Du hast ein schönes Lächeln.) |
| Flirting | nett, lieb | Top adjectives; used inside phrases |
| Flirting | die Augen | Too close to das Auge (Top nouns); used inside phrases |
| Flirting | das Lachen | Clash with lachen (Top verbs) |
| Flirting | Du bist so witzig! | Compliments (plan Deck 1) |
| Flirting | Das steht dir gut. | Left out by the plan: too close to Das steht Ihnen gut. (Shopping and clothes) |

**Total skipped as already taught: 69 distinct words** that are existing card targets (or differ from one only by capital or punctuation): nouns 29, verbs 2 (plus zahlen), adjectives 6, adverbs 4 (fast, also, deshalb, doch), pronouns 1, conjunctions 7 more (also and deshalb counted once), interjections 11 (Doch! counted under adverbs), words 9. Words moved between the new decks or dropped to avoid a clash between them are listed above but not counted.

## 4. Words the pron tool gets wrong (left out)

`respell.js` has no add-file, and this job may not edit its word list, so every word whose output was wrong was left out. Every pron in the new files came from `respell.js` through a script; two runs of `repron.js` rewrote nothing.

- **Conjunctions (wrong stress, all stressed on the first syllable by the tool):** obwohl (`AWP-vohl`), nachdem, damit (as the conjunction), sobald, indem, jedoch, sodass, solange, seitdem, sowohl. This is the biggest gap: obwohl and nachdem are A2 essentials. They should go in `LEX` (obwohl=awp-VOHL, nachdem=nahkh-DAYM, damit=dah-MIT, sobald=zoh-BAHLT, indem=in-DAYM, jedoch=yay-DAWKH, sodass=zoh-DAHS, solange=zoh-LAHNG-uh, seitdem=zait-DAYM, sowohl=zoh-VOHL) and then be added to Top conjunctions. *so dass* (two words) is used instead of *sodass*.
- **Adverbs (wrong stress):** sogar, damals, inzwischen, zunächst, sofort, überall, danach, dafür, dazu, darum, dahin, heutzutage, unterwegs, normalerweise; **manchmal** (`mahnhh-MAHL`, wrong stress and spelling).
- **Pronoun:** einander (`AIN-ahn-duh`).
- **Noun:** das Unternehmen (`OON-tuh-nay-muhn`, should be stressed on -NEH-; Duden whole-corpus rank 17), die Million (`mil-ee-OHN`).
- **Interjections:** Igitt!, Juhu!, Oje!, Herrje!, Hurra!, Bravo! (v as f), Pfui!, Boah!, Nanu?; Hm, Pst! (no vowel: the tool throws).
- **Flirting / adjectives:** charmant and der Charme (ch read as k), Du Charmeur!, gutaussehend (the s of sehend is lost), sympathisch (first-syllable stress), das Date (`DAH-tuh`), flirten, der Flirt, Humor (first-syllable stress), interessiert, Interesse (so the plan's *Danke, aber kein Interesse.* was dropped), Single (`ZING-luh`, so the plan's *Bist du Single?* became *Bist du vergeben?*), unterhalten (read as separable, so *Ich unterhalte mich gern mit dir.* became *Ich rede gern mit dir.*).
- **Warned but correct (kept):** irgendwo, andere, einige: the tool prints "check stress", and its first-syllable stress is right for all three.

## 5. Flirting and Compliments: choices

- **Flirting** follows the plan's Deck 2 (`docs/plans/compliments-de.md`), extended to three layers: 20 words, 25 phrases, 17 moves and replies (62 cards). Register is *du*, because flirting happens between people of similar age after a first chat; Sie forms are in the notes where a learner might need them. Flirting in Germany is fairly direct (Bist du vergeben?, Kann ich deine Nummer haben? are normal); praise of character and humor (witzig, klug, Ausstrahlung) is as common as praise of looks. Left out on purpose: heiß / sexy, body comments, pick-up lines, *Ich liebe dich* (too strong). The no's: *Danke, aber ich habe einen Freund.*, *Ich bin schon vergeben.*, *Das ist lieb von dir, aber nein danke.*, *Lass uns lieber Freunde bleiben.* 24 dialogues, including a yes (Ja, sehr gern!) and a gracious no (Das ist lieb von dir, aber nein danke.).
- **Compliments** takes all 23 cards of the plan's Deck 1 and adds 7 (Das Essen war ausgezeichnet., Gute Arbeit!, Das hast du toll gemacht., Du hast dir viel Mühe gegeben., Sie haben das sehr gut erklärt., Hier ist es richtig gemütlich., Das sieht toll aus!): 30 cards, 12 dialogues, 6 examples, 2 patterns. The plan's answers to its open questions: *du* is the default with the Sie form in the note; *eine Freundin* is in the note of the "boyfriend" no.
- `REVIEW.md` was not touched (this job may only add the files listed in its brief).
