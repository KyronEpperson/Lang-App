# Core words, Flirting and Compliments (en-fr): sources, choices and skips

Files: `decks-t.js` + `extra-t.js` (nine Core words decks), `decks-f.js` + `extra-f.js` (Flirting), `decks-c.js` + `extra-c.js` (Compliments, started from writer C's `.draft` files, which were renamed to `.js` and extended). Written 2026-11-23. Every meaning, note, example and dialogue was written for this course; nothing was copied from a source.

## 1. Frequency sources actually opened

**Read this first: only the Top verbs deck follows a source order.** The other eight core decks are ordered by the writer's judgement, leaning toward everyday spoken French of France. No noun, adjective, adverb or function-word ranking could be opened in this session.

| Source | Based on | Licence | How it was used |
|---|---|---|---|
| Lexique 3, column `freqfilms2` (film subtitles), as shown in the notebook [French Vocabulary Frequency with Lexique (emk/lexique-experiments, nbviewer)](https://nbviewer.jupyter.org/github/emk/lexique-experiments/blob/master/French%2520Vocabulary%2520Frequency%2520with%2520Lexique.ipynb) | Subtitle frequencies from the Lexique 3 database. The notebook shows a top-15 verb table and a top-5 lemma table, and nothing more. | Not stated on the page opened. Only the order was used. | **Top verbs 1–14:** être, avoir, aller, faire, dire, pouvoir, vouloir, savoir, voir, devoir, venir, parler, prendre, croire. The table's 12th verb, *suivre*, was moved down: its subtitle count is inflated by *je suis*, which is also a form of *être*. |
| Éduscol, "Mots les plus fréquents de la langue écrite française (XIXe et XXe siècles), table hiérarchique par nature", read through P. Gourdet's handout [Liste des 150 verbes les plus fréquents (PDF)](https://besancon2.circo25.ac-besancon.fr/wp-content/uploads/sites/21/2019/11/Frequence-150-verbes-eduscol.pdf) | Written French of the 19th and 20th centuries; 150 verbs ranked 1–150. The Éduscol original itself could not be opened (see below). | Not stated. Only the order was used. | **Top verbs from *trouver* (15) to *chanter* (110)** run in this list's order. Verbs it ranks high but a beginner rarely needs were left out because the list is literary: reprendre, paraître, apercevoir, crier, cacher, tirer, agir, tuer, pousser, occuper, frapper, obtenir, exister, causer, serrer, songer, nommer, saisir, demeurer, remettre, disparaître, battre, apparaître, souffrir, tendre, naître, sauver, avancer, traverser, couvrir, former, oser, empêcher, refuser, produire, charger, mêler, cesser, ressembler. |

**Ordered by judgement:**
- **Top verbs 111–126** (aider, habiter, acheter, vendre, préférer, adorer, détester, choisir, utiliser, visiter, étudier, voyager, laisser, s'appeler, se reposer, cuisiner, nager, danser, réussir): everyday verbs not in the 150-verb written list, or in it but not among the ranks shown, added at the end.
- **Top nouns, Top adjectives, Top adverbs, Top pronouns, Top prepositions, Top conjunctions, Top interjections, Top words:** all judgement. Within Top words, numbers run in counting order, days in week order and months in calendar order.

**Could not be read** (all tried on 2026-11-23):
- en.wiktionary.org `Frequency_lists/French_wordlist_opensubtitles_5000`: "not found" from the fetch tool, and the proxy refused the raw page (403).
- The en.wiktionary.com copy of `Wiktionary:Frequency_lists/French` opened, but it only lists sources and has no ranks.
- lexique.org downloads (Lexique 3.83 TSV) and raw.githubusercontent.com (hermitdave FrequencyWords, OpenSubtitles 2018): refused by the proxy (403).
- eduscol.education.gouv.fr "Liste de fréquence lexicale": the page returned a client error, and the PDF behind it is not on the fetch allowlist.
- lextutor.ca `fr_5` (Lonsdale and Le Bras lists): the page describes the source but contains no words.
- A FluentU "French frequency list" opened but was **rejected**: it names no corpus and is a translation of an English word list (it ranks *épeler*, *usine*, *mile*), not French frequency.

**Suggestion for the lead:** re-rank the judgement decks against Lexique 3 `freqfilms2` (lemma and part of speech) or OpenSubtitles 2018 on a machine that can download them. Only the order inside each deck should move.

## 2. Grammar fit (brief rule 2)

No slot was renamed or added. French has all eight classes in the English sense, and no measure words or particles.
- **Nouns** carry *le / la*; vowel-initial nouns use *un / une* (une idée, un an), and the three that need *l'* (l'argent, l'amour, l'air) start their note with "(m.)", as the course profile asks.
- **Verbs** are infinitives; the note gives the je form and flags irregular verbs, spelling changes and *être* in the passé composé. Reflexive verbs keep *se* (se lever, s'asseoir).
- **Adjectives** are masculine singular; the note gives the feminine and says whether it sounds different, and which go before the noun.
- **Contractions** *au, aux, du* are in Top prepositions (à / de + article). *du* also gets its "some" use in the note.
- **Articles, demonstratives, possessives, quel, tout, numbers, days, months, oui / non, voici / voilà, c'est, il y a** are in Top words.

## 3. Where words with two homes went

- *le, la, les*: Top words as articles; the object-pronoun use is in the note. *leur*: Top words (their); the pronoun "to them" is in the note. *lui*: Top pronouns (stress and indirect object in one card).
- *en*: Top prepositions; the pronoun use is in the note. *y*: Top pronouns.
- *que*: Top conjunctions; the relative use is in the note. *qui*: Top pronouns (question and relative).
- *si*: Top conjunctions; the "yes to a negative question" use is in the note.
- *plus, ne, pas*: Top adverbs. *rien, personne*: Top pronouns (the noun *la personne* is in the note, so the two never clash).
- *tout / tous / toute / toutes*: Top words.

## 4. Words skipped because the course already teaches them

Checked against every card target in `decks-a.js`, `decks-b.js` and the Compliments draft. "Exact" = the same target would have failed the release check; "near" = it differs only by an article or punctuation; "judgement" = taught inside a phrase card.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | exact: la clé, le chat, le lit, la rue, la mer, le sac, le sel, le vin, le vent, le chef | Sounds and spelling |
| Top nouns | exact: la chambre, la cuisine, le salon, la fenêtre, le frigo | Home and routine |
| Top nouns | exact: le billet, le vol; near: l'aéroport | Travel and transport |
| Top nouns | exact: la pharmacie; la réunion; la boulangerie, la mairie | Health; Work and school; Around town |
| Top nouns | exact: la journée, le collège, la librairie, la location, le restaurant; near: un hôtel | Traps for English speakers |
| Top nouns | exact: le petit-déjeuner, le week-end; near: un croissant, une maison, un appartement, l'université, l'eau, un ami, les amis | Food; Days; Home; Work; Sounds |
| Top nouns | judgement: le père, la mère, le frère, la sœur, le fils, la fille, le mari, les parents, l'amie (taught as mon père, ma mère …); le fromage, le café, le sport, la robe, la place, la carte, le patron | People and family; phrase cards in Food, Likes, Shopping, Around town, Work |
| Top verbs | exact: attendre, rester, demander | Traps for English speakers |
| Top verbs | judgement: téléphoner (Je téléphone à Léa.); sourire (left out so it cannot clash with *le sourire* in Flirting) | Traps; Flirting |
| Top adjectives | judgement: content, américain, canadien, sympa | Feelings; About me; Spoken French |
| Top adjectives | left to Flirting: beau, joli, mignon, charmant, drôle, intelligent, élégant, adorable, magnifique, doux | Flirting (single-word layer) |
| Top adjectives | génial, super: kept as the interjections *Génial!* and *Super!* | Top interjections |
| Top adverbs | exact: actuellement; demain; aussi, alors, donc, ensuite | Traps; Days; Questions and connectors |
| Top adverbs | judgement: loin, près (phrase cards; *loin de* and *près de* are in Top prepositions) | Around town |
| Top prepositions | judgement: à côté de, en face de, jusqu'au | Around town (à côté de la banque, en face du musée, jusqu'au feu) |
| Top conjunctions | exact: et, ou, mais, parce que, alors, donc; near: quand (Quand?) | Questions and connectors |
| Top interjections | near: Pardon, Bof, Ouais, Bisous, À plus, Au secours, Bon appétit, Salut | Greetings; Spoken French; Health; Food |
| Top interjections | Bravo!, Félicitations! | Compliments |
| Top interjections | not added, to avoid a clash with a card in another deck: Enfin! (adverb enfin), Quoi? (pronoun quoi), Voilà! (voilà in Top words), Santé! (in the note of la santé) | Top adverbs, Top pronouns, Top words, Top nouns |
| Top words | exact: lundi, dix-sept, mille, vingt et un, soixante-dix, quatre-vingts, quatre-vingt-dix; near: samedi (le samedi); judgement: août (en août) | Days, dates and weather; Numbers, time and prices |
| Top words | question words où, quand, comment, combien, pourquoi (cards with ?) | Questions and connectors |
| Flirting | Ça te va très bien., Tu es tellement drôle! (Compliments); Pourquoi pas? (Questions and connectors); le rire (clashes with the verb rire); amoureux, embrasser, le copain (kept in Top adjectives / verbs / nouns) | other decks |

**Count:** 48 exact matches (alors and donc counted once) and 23 near matches skipped, 27 more by judgement, and 25 words kept out of one new deck because another new deck (or the Compliments draft) has them.

## 5. Pron tool

Every pron was produced by `respell.js` from a script and pasted unchanged; `repron.js` rewrites nothing. The tool does not throw on unknown words (it is rule-based), so every output was read by eye. Left out because the output was wrong:
- *Aïe!* (`ah-ee`, should be one syllable `ahy`): replaced by *Ouille!* (`ooy`, right).
- *Zut!* (`zew`), *Chut!* (`shew`): the final t is sounded.
- *Oups!* (`oo`), *Hop!* (`oh`): the final consonant is sounded.
- *Miam!* (`myahN`, should be `myahm`), *Waouh!* (`wah-oo`), *Tchin-tchin!* (`tshaN`, should be `tsheen`), spoken *Ben* (`bahN`, should be `baN`).
- *cet* (`seh`, should be `seht`; the card *cette* is kept and the note mentions cet), *juin* (`zhwee`, should be `zhwaN`), *à travers* (`trah-vay`, should be `trah-vehr`), *l'* (throws: no vowel), *le sud* (`sew`, should be `sewd`).

Kept, but a native check is welcome: *À tes souhaits!* (`ah tay soo-eh`; usually closer to `sweh`), *Bienvenue!* (`byaNv-new`), *dix-huit* (`dee zweet`), *en fait* (`ahN feh`; many speakers sound the t, so the note does not mention it).

## 6. Flirting and Compliments: cultural choices

- **Flirting** starts from `docs/plans/compliments-fr.md` Deck 2 and extends it. French flirting leans on conversation, humor and wit more than on big praise, so the deck has *Tu me fais rire*, *J'aime beaucoup parler avec toi*, *Tu es vraiment intéressant*; and the very French frame *Je te trouve + adjective*.
- **The tu / vous shift** is its own move: strangers are approached in *vous* (*Je peux vous offrir un verre?*, *Vous permettez que je m'assoie?*), and *On peut se tutoyer?* / *Tu peux me tutoyer.* mark the step closer. Everything after that is in *tu*.
- *Tu me plais* is the everyday "I like you"; the notes warn that *je t'aime* is far stronger. *sexy* is included as an ordinary, non-crude word, marked bold. Left out, as in the plan: *canon, bombe*, *ma belle / chérie* to a stranger, pick-up lines.
- Kind no's: *C'est gentil, mais je ne suis pas intéressée.*, *Merci, mais j'ai quelqu'un.*, *Je préfère qu'on reste amis.*, *Désolée, ce n'est pas réciproque.*, *Non merci, ça va.* Dialogues include a gracious no and a yes.
- **Compliments** keeps the 14 draft cards and adds the plan's Deck 1 items plus food, effort and home praise (*C'est vraiment bon!*, *Beau travail!*, *Chapeau!*, *Bien joué!*, *Tu as très bon goût.*, *Quelle belle vue!*) and the French ways of answering: a plain *merci*, light doubt (*Tu trouves?*), modesty (*Oh, ce n'est rien.*, *Tu exagères!*), and returning it (*Merci, toi aussi!*).
