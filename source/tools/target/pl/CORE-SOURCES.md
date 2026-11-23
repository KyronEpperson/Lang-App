# Core words and Flirting (en-pl): sources and skips

Writer EN-PL-CORE, 2026-11-23. Files: `decks-t.js` and `extra-t.js` (the nine Core words decks), `decks-f.js` and `extra-f.js` (Flirting). No Compliments deck was written: `profile.json` already has one (group "Watch out").

## 1. Frequency source actually opened

| Source | What it is based on | Licence | How it was used |
|---|---|---|---|
| hermitdave/FrequencyWords, file `content/2018/pl/pl_50k.txt` ([repository](https://github.com/hermitdave/FrequencyWords)), commit `525f9b5` (7 Feb 2022) | Word forms counted in the Polish part of OpenSubtitles 2018 (film and TV subtitles; see opus.nlpl.eu/OpenSubtitles2018.php, named in the repo README). Top 50,000 forms, lowercased, with raw counts. **Not lemmatised and not tagged** for part of speech. | Content CC BY-SA 4.0 (README); code MIT. Only counts and ranks were used; nothing was copied into a card. | **Sort key for every Core words deck except the counting block of Top words.** |

How it was opened: `git clone --depth 1 --filter=blob:none --sparse https://github.com/hermitdave/FrequencyWords` into a new empty scratch folder (`scratchpad/dl-fw/fw`), then `git sparse-checkout set content/2018/pl`. Two files were read, as plain text: `content/2018/pl/pl_50k.txt` (the whole list, by the build script; the writer read its top 2,000 forms by eye) and the first 40 lines of the repository's `README.md` (for the OpenSubtitles source and the licence). `pl_full.txt` and `pl_ignored.txt` came down with the checkout and were not opened. No script from the repository was run. The build script reads a copy of `pl_50k.txt` kept in the writer's own scratch folder. No other frequency source (Wiktionary, the NKJP national corpus list, a frequency dictionary) was opened, so none is claimed.

### What the source orders, and what is judgement

The list counts word forms, and Polish words have many forms. So each card's score is the **sum of the counts of a few named forms**, and each deck is sorted by that score, highest first:

- **Top nouns:** nominative singular + genitive singular (both are in the note). Plural-only nouns: the nominative plural + genitive plural.
- **Top verbs:** infinitive + ja form + on form of the card verb, plus the infinitive of its aspect partner (all in the note). *się* is ignored.
- **Top adjectives:** masculine + feminine + neuter nominative singular (all in the note).
- **Top adverbs, Top pronouns, Top prepositions, Top conjunctions, Top interjections, and the head of Top words:** the count of the card's own form.

Homographs that would distort a score were left out of its count (judgement): *mamy* (also "we have") for *mama*; *drogi* (also the adjective) for *droga*; *droga* (the noun) for the adjective *drogi*; the formulas *proszę*, *dziękuję*, *przepraszam* for *prosić*, *dziękować*, *przepraszać*; *je* (also "them") for *jeść*; *może* (also "maybe") for *móc*; *gra* (also "he plays") for both *gra* and *grać*; *jasne* ("Sure!") for *jasny*.

**Judgement, not source:**
- **Which words are in each deck.** The writer picked the candidates by reading the top 2,000 forms of the list and by beginner usefulness; the list then ordered them. A second pass compared the top 600 forms with every card and existing target; what it found uncovered was almost all inflected forms of words already in the decks, and the lemmas it did surface were added (*ci, wam, taki, nawet, znowu, wciąż, bardziej, dokładnie, świetnie, właściwie, poważnie, przynajmniej, inaczej, ciągle, całkiem, wcale, ostatnio, dopiero, również, dość, przykro, można, trzeba, cóż, aż, jako*). *po prostu* and *w ogóle* are frequent but are two-word phrases, so they have no card. Crude subtitle words (*kurwa*, *cholera*, *gówno*), names, and violent verbs (*zabić*) were left out.
- **Which forms are counted** (the rule above) and the homograph exclusions.
- **Which member of an aspect pair is the card.** The rule: the imperfective is the card (this course drills the imperfective), unless the imperfective is the much rarer word in the list; then the perfective is the card. Perfective cards: *dać, pomóc, zostać, dostać, znaleźć, zabrać, wyjść, wejść, zmienić, zacząć, pozwolić, spotkać, pokazać, zostawić, kupić, umrzeć, przestać, zapomnieć, zamknąć, wysłać, przynieść, usiąść, wybrać, stracić, wygrać*. Close calls kept imperfective: *wracać, brać, wierzyć, dzwonić, próbować, przychodzić, rozumieć, kończyć, otwierać, sprzedawać*.
- **No zero scores:** every Core words card has at least one counted form in the top 50,000, so no card inside a sorted deck is placed by judgement alone.
- **Top words** is sorted by the source only in its head (yes / no, question words, particles, *kilka, wiele, można, trzeba, pół, okej*). The numbers (zero, *dwie*, three to nineteen, a hundred, a thousand), the ordinals and the days of the week follow as one block in counting and week order, on purpose.
- **Flirting** is in the brief's layer order (words, phrases grouped by word, moves and replies), not by frequency.

Each card's score is listed in §6 so the order can be checked.

Meanings, notes, examples and dialogues were all written by the writer. Nothing was copied from any source.

## 2. Classes fitted to Polish

- **No slot renamed or added.** Polish has all eight English classes. It has no articles, so Top words carries no articles.
- **Particles** (*partykuły*: *czy, nie, chyba, przecież, niech, oto, cóż, aż*) are a class of their own in Polish school grammar. They are put in **Top words** (the deck for words that fit none of the eight), not in a new deck. So are *można* and *trzeba* ("one can", "one must"): impersonal predicatives that Polish grammars treat apart from verbs and adverbs. *już, jeszcze, też, także, tylko, właśnie* are put in Top adverbs, as English learners meet them as adverbs.
- **Case-marked dictionary forms.** Nouns are given in the nominative singular (gender and genitive in the note; plural-only nouns marked). Verbs are given in the infinitive, with *się* when the verb needs it (*bać się, uczyć się*); the note gives the ja and on forms and the aspect partner (perfective cards say "future" on the ja form). Adjectives are given in the masculine, with the feminine and neuter in the note. Pronoun cards are the nominative or the listed object form; each object form is its own card because learners meet them as separate words (*mnie, mi, cię, ciebie, go, jego…*).
- **Prepositions** carry the case they take in the note. *we* and *ze* are not separate cards; they are named in the notes of *w* and *z*. *jako* (as, in the role of) is in Top conjunctions.
- **pan, pani, państwo** are nouns used as "you". They are in Top pronouns because that is how a learner uses them, and the note says they are nouns with a third-person verb.
- **ten / to:** *to* ("this, that, it", the *To jest* word) is its own pronoun card; *ten* carries *ta, to, te* in its note.
- **kiedy** (when / when?) is one card, in Top conjunctions, with the question named in the note. *czy* is in Top words as the question particle. *o* (about / at) is a preposition card, so the interjection *o!* has no card.

## 3. Words skipped because the course already teaches them

The release check compares card targets. These words were checked against every target in `decks-a.js` and `decks-b.js` (ignoring capitals and . , ! ? marks) **before** writing and were left out of the decks, so the build script found no further clash. The Flirting deck and Top adjectives were also kept apart from each other.

| Deck | Skipped | Already taught in |
|---|---|---|
| Top nouns | brat | Traps for English speakers |
| Top nouns | imię, ręka, muzyka | Sounds and spelling |
| Top adverbs | tutaj, tam, prosto, blisko, daleko | Directions |
| Top adverbs | źle | Sounds and spelling |
| Top adverbs | aktualnie, ewentualnie | Traps for English speakers |
| Top adjectives | sympatyczny, aktualny | Traps for English speakers |
| Top interjections | cześć | Formal and informal (Cześć.) and Sounds and spelling |
| Top interjections | przepraszam, dziękuję, słucham, dobranoc | Greetings and courtesy |
| Top interjections | proszę | Sounds and spelling |
| Top interjections | smacznego | Food and drink |
| Top words | jeden, dwa, pięć, dziesięć, dwadzieścia | Numbers and złoty |
| Top verbs | none | No existing card is a bare infinitive. Verbs inside phrase cards (*mam, czytam, idę*) were added as infinitives. |
| Top pronouns, Top prepositions, Top conjunctions | none | — |

**Total skipped: 26 words.** Words that exist only inside a phrase card (*kawa* in *Poproszę kawę.*, *wysoki* in *Mój brat jest wysoki.*, the days in *W środę czytam.*) were added as bare words, as the Spanish course did.

Words left out for other reasons:
- **Pron tool:** *hmm* and *psst* (no vowel; the tool refuses them). Not added. No other word failed.
- **To keep Top adjectives and Flirting apart:** *ładny, piękny, śliczny, przystojny, atrakcyjny, słodki, uroczy, zabawny, mądry, inteligentny, miły, seksowny, zakochany* are only in Flirting (in the form named there). *serce* and *miłość* are only in Top nouns. *chętnie* is only in Flirting (as *Chętnie!*).

## 4. Register

The course rule is that learners say *pan / pani*. The core decks follow it: verb notes give the ja and on forms (the on form is the *pan / pani* form), and examples that speak to "you" use *pan / pani* (*Co pan robi w sobotę?*, *Czy pani jest pewna?*). Where the card itself is a *ty* word (*ty, cię, ciebie, ci, twój*) or the natural line is a friend's command (*Przestań, proszę!*, *Nie zapomnij biletu!*, *Patrz, tam jest Anna!*), the English says "(to a friend)". Interjection dialogues are between friends, as the existing dialogues with *Cześć* are. Flirting is the exception the brief needs: people who flirt use *ty*, so its phrases are in the *ty* form and say so in the note; two cards give the *pan / pani* version for a stranger (*Pięknie pani wygląda.*, *Czy mogę panią zaprosić na kawę?*). Polish flirting is fairly direct among young adults; the indirect forms people really use (*Lubię z tobą rozmawiać.*, *Miło się z tobą rozmawia.*, *Ładnie ci w tym.*) are included and marked mild.

## 5. Pron and examples

- Every pron was produced by `respell.js` on the whole target, through the build script, and pasted unchanged. `repron.js` rewrote 0 lines on both runs.
- Tool limits seen: *w* and *z* alone come out as `f` and `s` (word-final devoicing on a bare preposition); the notes say they sound *v* / *z* before a voiced sound. *hmm* and *psst* have no vowel and were refused, so they are not cards.
- Examples: Top pronouns 55 of 55; Top verbs 59 of 102; Top adjectives 37 of 73; Top adverbs 40 of 74; Top prepositions 19 of 30; Top conjunctions 18 of 29. Dialogues: all 26 interjections; 20 Flirting cards (one ends in a gracious no, *Zostańmy przyjaciółmi.*; several in a yes, *Chętnie!*, *Z przyjemnością.*).
- Polish inflects, so an example may show the card word in another form (*robić* → *Co robisz wieczorem?*, *czarny* → *czarną kawę*). Each example uses the card's word in some form.
- Sentences keep to course words (names, cities, *kawa, dom, praca*, the days) plus the card's word, but many add everyday words the lessons do not teach: *kino, koncert, egzamin, karta (kartą), morze, mięso, zupa, babcia, spacer, parasol, portfel, ryby, pływać, centrum, deszcz, koszula, drink*. Most of these are cards in the new decks or plain cognates.

## 6. Scores (summed subtitle counts of the forms named in §1), in deck order

**Top nouns** (102): czas 349738 · dom 325618 · ludzie 320540 · prawda 266160 · życie 242927 · dzień 234783 · rzecz 203055 · raz 195674 · miejsce 165378 · ojciec 149081 · noc 141044 · praca 132471 · pieniądze 124644 · sprawa 122438 · koniec 111337 · sposób 108797 · dziecko 106488 · rok 104094 · człowiek 103003 · problem 99147 · pomoc 97887 · dziewczyna 91288 · pokój 91078 · kobieta 89898 · świat 86332 · matka 77834 · samochód 76798 · syn 76149 · chwila 74308 · słowo 73412 · serce 73051 · mama 72438 · rodzina 71433 · miłość 71226 · pytanie 69759 · telefon 68734 · drzwi 66329 · pomysł 66030 · wiadomość 64519 · policja 63802 · żona 63583 · mąż 62308 · miasto 61255 · tata 57537 · zdjęcie 56951 · twarz 56220 · numer 53332 · godzina 52757 · szczęście 52242 · głowa 47564 · szkoła 47097 · woda 45769 · chłopak 45594 · przyjaciel 45463 · wieczór 43432 · początek 41700 · siostra 40864 · córka 40725 · tydzień 40448 · nazwisko 39288 · kraj 38342 · film 37620 · odpowiedź 36739 · jedzenie 36283 · pies 32095 · mężczyzna 29763 · szpital 29485 · lekarz 28089 · szef 28015 · mieszkanie 27127 · droga 27044 · łóżko 25945 · ulica 24332 · miesiąc 23577 · sen 22790 · oko 22543 · książka 22308 · sklep 20085 · kawa 20033 · prezent 19682 · obiad 19592 · okno 19206 · gra 19022 · urodziny 18313 · klucz 18214 · minuta 17082 · kuchnia 16820 · śniadanie 15252 · impreza 14889 · pociąg 14842 · przyjaciółka 14156 · kolacja 13678 · język 13463 · kot 11561 · herbata 10045 · autobus 9963 · łazienka 9576 · stół 9213 · zakupy 9014 · bilet 7948 · kolega 7624 · pogoda 5375

**Top verbs** (102): być 4036923 · mieć 1606508 · wiedzieć 880371 · chcieć 584530 · mówić 496187 · móc 488572 · robić 488570 · musieć 413182 · myśleć 321379 · iść 249681 · widzieć 241921 · chodzić 206014 · pomóc 167738 · rozumieć 156476 · dać 155972 · wyglądać 154736 · potrzebować 135607 · znać 132882 · kochać 129420 · zostać 125023 · czuć 123591 · rozmawiać 121765 · żyć 121209 · znaleźć 117853 · wracać 106256 · wierzyć 105709 · lubić 101348 · pracować 83345 · czekać 82467 · nazywać się 71846 · słuchać 69043 · jechać 68739 · wyjść 67900 · brać 67830 · próbować 67645 · dostać 67326 · pamiętać 65494 · stać 63960 · podobać się 63577 · zabrać 59016 · pozwolić 56997 · słyszeć 54763 · dzwonić 51980 · szukać 51553 · zacząć 50869 · pokazać 48285 · zmienić 48039 · trzymać 46870 · umrzeć 45885 · wejść 44767 · martwić się 44669 · pytać 43597 · spotkać 43498 · przychodzić 42395 · spać 41917 · kończyć 40597 · lecieć 40082 · zostawić 40044 · jeść 39038 · mieszkać 38680 · bać się 38514 · patrzeć 37309 · grać 34309 · siedzieć 34077 · kupić 34007 · uczyć się 32872 · prosić 29834 · pisać 29550 · płacić 29509 · przestać 29014 · dziękować 26744 · woleć 25962 · oglądać 25439 · otwierać 25159 · przynieść 23323 · pić 23176 · wygrać 22780 · zapomnieć 22772 · stracić 22384 · czytać 22316 · odpowiadać 22307 · wysłać 21067 · zamknąć 20350 · nosić 20247 · sprzedawać 19972 · umieć 19672 · wybrać 18251 · usiąść 17761 · kłamać 17683 · leżeć 16637 · przepraszać 13916 · zapraszać 13733 · tańczyć 12637 · wstawać 11707 · jeździć 11593 · płakać 11173 · odwiedzać 10931 · kosztować 9602 · gotować 7466 · śmiać się 7343 · biec 5725 · myć 5112

**Top adjectives** (73): dobry 527902 · cały 195853 · stary 112568 · nowy 109203 · mały 108838 · inny 99327 · zły 88719 · pewny 82695 · ostatni 81881 · gotowy 79952 · wielki 79805 · prawdziwy 59245 · ważny 58550 · głupi 53559 · dziwny 53449 · jedyny 50179 · świetny 49369 · drogi 48805 · możliwy 47252 · duży 45492 · wspaniały 43501 · szczęśliwy 38672 · młody 37295 · następny 34172 · wolny 30927 · własny 30247 · prosty 28928 · trudny 27742 · chory 27105 · długi 26549 · ciekawy 25782 · zajęty 25527 · wysoki 25450 · straszny 23991 · pełny 22269 · czarny 22033 · czysty 22006 · ciężki 21895 · zamknięty 20873 · otwarty 19774 · fajny 19261 · biały 19198 · głodny 18563 · zmęczony 17621 · czerwony 17366 · normalny 15691 · smutny 14641 · biedny 14560 · gorący 13942 · ulubiony 13859 · jasny 13832 · łatwy 13694 · szybki 12213 · pusty 12174 · niebieski 10411 · zdrowy 10010 · zimny 9436 · zielony 9198 · krótki 8507 · bogaty 8369 · spokojny 8205 · brudny 7330 · ciepły 7104 · bliski 7102 · nudny 6936 · polski 5195 · ciemny 5026 · niski 4968 · lekki 4944 · tani 4877 · pyszny 4749 · angielski 4509 · żółty 4214

**Top adverbs** (74): tylko 799409 · tu 796370 · już 690940 · dobrze 591715 · teraz 571725 · bardzo 409540 · jeszcze 374688 · też 335955 · naprawdę 317261 · nigdy 313438 · nawet 258786 · właśnie 242267 · zawsze 227957 · trochę 214463 · więcej 198115 · razem 186710 · dalej 162609 · lepiej 152593 · oczywiście 143326 · dlatego 136719 · pewnie 133794 · wtedy 129790 · dziś 125499 · potem 123106 · stąd 117056 · dużo 114952 · przykro 105926 · tyle 100637 · bardziej 100011 · zbyt 97923 · szybko 97630 · świetnie 94599 · zaraz 93903 · nadal 92632 · później 88384 · długo 85469 · kiedyś 85085 · wciąż 84964 · jutro 84479 · znowu 80445 · dokładnie 79075 · wcześniej 73355 · prawie 67021 · gdzieś 64951 · dość 62209 · ciągle 60764 · właściwie 56835 · również 55758 · wczoraj 53998 · poważnie 53268 · rano 52355 · inaczej 47823 · przynajmniej 47366 · całkiem 44905 · także 43313 · dopiero 42706 · raczej 41421 · wcale 41126 · czasem 39932 · ostatnio 39381 · wieczorem 33354 · mniej 31609 · zupełnie 30003 · mało 27826 · wkrótce 27752 · wszędzie 26923 · często 26574 · niestety 25308 · zwykle 22416 · nigdzie 21374 · wolno 20144 · gorzej 16025 · ładnie 15500 · rzadko 5924

**Top pronouns** (55): to 6394833 · się 5144785 · co 2834994 · mnie 1408401 · mi 1207300 · ja 874103 · go 826537 · ci 825774 · ty 754983 · cię 742982 · coś 643701 · pan 539584 · wszystko 533697 · nic 495746 · jej 475279 · ten 444007 · on 433846 · ciebie 433542 · sobie 424604 · jego 389323 · ją 385773 · pani 381444 · mój 370480 · nas 365829 · ich 341869 · kto 307407 · mu 286224 · ona 253795 · nam 224591 · ktoś 212659 · który 201545 · twój 197869 · wszyscy 190207 · sam 171134 · was 159757 · siebie 143313 · my 139667 · nikt 139542 · im 127101 · taki 124839 · oni 116753 · wam 105972 · jakiś 103860 · jaki 92417 · każdy 83960 · nasz 76292 · wy 71834 · swój 55229 · one 36762 · żaden 26266 · wasz 18345 · państwo 10840 · ono 7069 · tamten 6034 · czyj 3049

**Top prepositions** (30): w 3988120 · na 3386060 · z 3104206 · do 2318623 · o 1780471 · za 1024785 · po 800323 · dla 656889 · od 580173 · przez 393715 · bez 215682 · przed 168472 · przy 156386 · u 141209 · pod 137518 · nad 104024 · poza 69292 · podczas 52846 · między 49415 · przeciwko 42162 · według 30043 · zamiast 25569 · mimo 24850 · obok 24743 · około 22453 · wokół 17312 · koło 15033 · wśród 14097 · oprócz 13875 · naprzeciwko 2341

**Top conjunctions** (29): i 3249275 · że 3140397 · ale 1523438 · a 1493736 · jeśli 670572 · więc 585727 · kiedy 446532 · żeby 355927 · bo 346184 · gdy 272430 · albo 189924 · niż 164897 · aby 131894 · jako 124059 · zanim 99188 · ani 90528 · ponieważ 88119 · gdyby 76796 · lub 68669 · jakby 67124 · jednak 62868 · jeżeli 59169 · skoro 59121 · dopóki 48722 · czyli 40081 · chociaż 34012 · lecz 33751 · choć 26621 · oraz 25045

**Top interjections** (26): no 355113 · hej 225912 · dzięki 217087 · Boże 168017 · och 68323 · halo 46790 · super 45857 · serio 37054 · pa 27265 · szkoda 25773 · ach 18298 · ej 11577 · brawo 7817 · aha 7371 · oj 4952 · kurczę 3680 · ojej 2705 · rety 2640 · jejku 2168 · łał 2065 · au 1755 · fuj 1481 · ups 1418 · hura 1347 · ała 651 · uff 267

**Top words** (51): nie 8583207 · tak 2202077 · jak 1709256 · czy 798343 · gdzie 446600 · dlaczego 383206 · chyba 258558 · czemu 167836 · niech 145960 · cóż 141898 · wiele 117908 · kilka 115635 · ile 112873 · skąd 110204 · można 105450 · trzeba 103284 · aż 84700 · przecież 61716 · oto 48835 · dokąd 45324 · pół 34172 · okej 29454 · zero 9360 · dwie 56476 · trzy 90688 · cztery 35779 · sześć 23429 · siedem 14996 · osiem 12552 · dziewięć 6834 · jedenaście 1154 · dwanaście 2432 · trzynaście 789 · czternaście 824 · piętnaście 2410 · szesnaście 916 · siedemnaście 785 · osiemnaście 808 · dziewiętnaście 346 · sto 9155 · tysiąc 6857 · pierwszy 78717 · drugi 26749 · trzeci 8597 · poniedziałek 6451 · wtorek 4816 · środa 1255 · czwartek 5006 · piątek 8923 · sobota 1912 · niedziela 1803

