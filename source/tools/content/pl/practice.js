/* Practice sets for the pl-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Polish; answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (docs/profiles/pl.md §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names przedimek, liczba mnoga or policzalny / niepoliczalny. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  alphabet: [
    { t: "mc", q: "Nazwa której litery brzmi tak samo jak słowo see?", o: ["C", "S", "Z", "K"], why: "Nazwa litery C brzmi dokładnie jak see — nie „ce”. S nazywa się es, Z w USA to zee, a K brzmi jak druga sylaba OK." },
    { t: "mc", q: "Która litera stoi zaraz po Q?", o: ["R", "P", "S", "O"], why: "Kolejność to …O, P, Q, R, S… Po Q stoi R." },
    { t: "mc", q: "Która forma jest poprawna?", o: ["an M", "a M", "an B", "an U"], why: "Nazwa litery M zaczyna się od samogłoski, więc przedimek an. Nazwa B zaczyna się od spółgłoski (a B), a nazwa U — od głoski j, jak you (a U)." },
    { t: "mc", q: "Która z tych liter jest samogłoską?", o: ["U", "R", "S", "W"], why: "Angielskie samogłoski to pięć liter: A, E, I, O, U. R, S i W to spółgłoski." },
    { t: "mc", q: "Jak brzmi angielska nazwa litery W?", o: ["double u", "double v", "u u", "v v"], why: "Litera wygląda jak dwa V, ale nazywa się double u, czyli „podwójne u” — a nie „wu”." },

    { t: "order", p: "Jak to się pisze?", a: ["How", "do", "you", "spell", "that"], x: ["spelling", "does"], why: "Pytanie ze zwykłym czasownikiem spell wymaga czasownika posiłkowego do. Przy you jest do, nie does, a spell zostaje w formie podstawowej." },
    { t: "order", p: "Moje imię zaczyna się na S", a: ["My", "name", "starts", "with", "an", "S"], x: ["a", "start"], why: "Nazwa litery S zaczyna się od samogłoski, więc przedimek an. Podmiot my name to trzecia osoba, stąd starts." },
    { t: "order", p: "W słowie hello są dwie litery L", a: ["There", "are", "two", "Ls", "in", "hello"], x: ["is", "L"], why: "Litery są dwie, więc liczba mnoga: Ls. Z liczbą mnogą łączy się are, nie is." },

    { t: "fill", q: "How do you __ your name?", p: "Jak się pisze twoje imię?", a: ["spell"], o: ["spelling", "spells", "spelled"], why: "Po do czasownik ma formę podstawową: How do you spell…?" },
    { t: "fill", q: "It starts __ a B.", p: "Zaczyna się na B", a: ["with"], o: ["by", "for", "in"], why: "„Zaczynać się na…” to po angielsku start with." },
    { t: "fill", q: "That's M __ in Mary.", p: "To M jak Mary", a: ["as"], o: ["so", "than", "of"], why: "Gdy potwierdzamy literę słowem, mówimy as in: M as in Mary." },

    { t: "type", p: "Zaczyna się na A (z przedimkiem)", a: ["It starts with an A", "It begins with an A"], hint: "start · A — nazwa litery A zaczyna się od samogłoski", x: ["the", "start"], why: "Nazwa litery A zaczyna się od samogłoski, więc przedimek an. Po it czasownik dostaje -s: starts." },
    { t: "type", p: "Jak się pisze twoje imię? (z you i spell)", a: ["How do you spell your name"], hint: "spell · your name — pytanie z do", x: ["spelling", "does"], why: "Pytanie ze zwykłym czasownikiem spell tworzymy z do. Przy you jest do, nie does." },
    { t: "type", p: "Są w nim dwie litery T (zacznij od It albo There)", a: ["It has two Ts", "There are two Ts", "It has two T's", "There are two T's"], hint: "two · T — dwie, czyli liczba mnoga", x: ["T", "have"], why: "Litery T są dwie, więc liczba mnoga: Ts. Po it jest has, nie have." }
  ],

  pron: [
    { t: "mc", q: "Które słowo znaczy „ryż”?", o: ["rice", "lice", "rise", "nice"], why: "Ryż to rice, przez R. R i l rozróżniasz bez trudu — pilnuj tylko, żeby angielskie r nie drgało. Z L wychodzi lice (wszy)." },
    { t: "mc", q: "Które słowo znaczy „wentylator”?", o: ["fan", "pan", "van", "ban"], why: "F i p to dla Polaków rozgrzewka: fan to wentylator, a pan to patelnia." },
    { t: "mc", q: "Które słowo znaczy „myśleć”?", o: ["think", "sink", "thing", "pink"], why: "TH: czubek języka lekko między zębami. Z s wychodzi sink (zlew); polskie f albo t też tu nie pasuje." },
    { t: "mc", q: "Które słowo znaczy „głosować”?", o: ["vote", "boat", "goat", "bought"], why: "V i b też nie sprawiają kłopotu: angielskie v to polskie w. vote to głosować, a boat to łódka." },
    { t: "mc", q: "Które słowo znaczy „prawy, w prawo”?", o: ["right", "light", "fight", "bright"], why: "right przez R to „prawy”, a light przez L to „światło” albo „lekki”." },

    { t: "order", p: "To jest banan", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana zaczyna się od spółgłoski, więc przedimek a. This pisze się i wymawia przez TH, nie przez d." },
    { t: "order", p: "trzy drzewa", a: ["three", "trees"], x: ["tree", "free"], why: "Drzewa są trzy, więc liczba mnoga: trees. three zaczyna się od TH — to nie tree ani free." },
    { t: "order", p: "Lubię kawę", a: ["I", "like", "coffee"], x: ["copy"], why: "W coffee jest F, a akcent pada na pierwszą sylabę. Z P wychodzi copy (kopia)." },

    { t: "fill", q: "I eat __ice every day.", p: "Codziennie jem ryż", a: ["r"], o: ["l", "n", "w"], why: "Ryż to rice, przez R. Z L wychodzi lice (wszy)." },
    { t: "fill", q: "I __ink so.", p: "Tak mi się wydaje", a: ["th"], o: ["s", "t", "p"], why: "think zaczyna się od TH. Z s wychodzi sink (zlew)." },
    { t: "fill", q: "This is my __.", p: "To moja torba", a: ["bag"], o: ["back", "bug", "beg"], why: "Torba to bag, z dźwięcznym g na końcu. Nie ubezdźwięczniaj: z k wychodzi back (plecy). Samogłoska jest szeroka, między e i a — to nie beg ani bug." },

    { t: "type", p: "trzy drzewa", a: ["three trees"], hint: "three · tree — trzy, czyli liczba mnoga", x: ["tree"], why: "three zaczyna się od TH, a tree od TR. Drzewa są trzy, więc liczba mnoga z -s." },
    { t: "type", p: "dwie łódki", a: ["two boats"], hint: "two · boat — dwie, czyli liczba mnoga", x: ["boat", "votes"], why: "Łódka to boat, przez B. Są dwie, więc liczba mnoga z -s. Z V wychodzi vote (głos w wyborach)." },
    { t: "type", p: "bardzo lekki", a: ["very light"], hint: "very · light — zaczynają się od V i L", x: ["berry"], why: "very zaczyna się od V (górne zęby na dolnej wardze, jak przy polskim w), a light od L. W very akcent pada na pierwszą sylabę." }
  ],

  articles: [
    { t: "mc", q: "„Jestem studentem” po angielsku?", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Rzeczownik policzalny w liczbie pojedynczej nie może stać sam: przed nazwą zawodu lub zajęcia potrzebny jest przedimek a." },
    { t: "mc", q: "„Mam pomysł” po angielsku?", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea zaczyna się od samogłoski, więc przedimek an." },
    { t: "mc", q: "Jak powiedzieć po angielsku „godzina” (jedna)?", o: ["an hour", "a hour", "one hours", "hour"], why: "W hour litery h się nie wymawia. Słowo zaczyna się od samogłoski, więc przedimek an." },
    { t: "mc", q: "„Uwielbiam psy” (psy w ogóle) po angielsku?", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "O całej kategorii mówimy w liczbie mnogiej bez przedimka." },
    { t: "mc", q: "„Mam psa. Ten pies jest taki słodki” po angielsku?", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Pierwsza wzmianka — przedimek a. Druga wzmianka o tej samej rzeczy — the." },

    { t: "order", p: "Jestem nauczycielem", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Przed nazwą zawodu potrzebny jest przedimek a. teacher zaczyna się od spółgłoski, więc nie an." },
    { t: "order", p: "Możesz zamknąć drzwi? (te w tym pokoju)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Przedimek the: chodzi o konkretne drzwi, które obie osoby widzą." },
    { t: "order", p: "Nie piję kawy", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "Mówimy o kawie ogólnie, a coffee jest tu niepoliczalne: bez przedimka." },

    { t: "fill", q: "I'm __ university student.", p: "Jestem studentką uniwersytetu", a: ["a"], o: ["an", "the", "two"], why: "university zaczyna się w wymowie od głoski j, jak you, więc przedimek a. Decyduje wymowa, nie pisownia." },
    { t: "fill", q: "I have __ older sister.", p: "Mam starszą siostrę", a: ["an"], o: ["a", "the", "two"], why: "older zaczyna się od samogłoski, więc przedimek an." },
    { t: "fill", q: "I don't like __.", p: "Nie lubię kotów (kotów w ogóle)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "O całej kategorii mówimy w liczbie mnogiej bez przedimka: cats." },

    { t: "type", p: "Mam pomysł", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — przedimek przed samogłoską", x: ["a"], why: "idea zaczyna się od samogłoski, więc przedimek an." },
    { t: "type", p: "Lubię psy (psy w ogóle)", a: ["I like dogs", "I love dogs"], hint: "like · dog — ogólnie, czyli liczba mnoga", x: ["dog", "a"], why: "O całej kategorii mówimy w liczbie mnogiej bez przedimka: dogs." },
    { t: "type", p: "Zjedzmy (razem) lunch", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — z przedimkiem czy bez?", x: ["a", "the"], why: "Przed nazwami posiłków nie ma przedimka: have lunch." }
  ],

  be: [
    { t: "mc", q: "„Jestem zmęczony” po angielsku?", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "Stan opisujemy czasownikiem to be, a w angielskim zdaniu musi być też podmiot: I'm tired." },
    { t: "mc", q: "Jak zapytać po angielsku: „Czy on mówi po angielsku?”", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "Przy he jest does, a po does czasownik wraca do formy podstawowej, bez -s." },
    { t: "mc", q: "„Ona jest w pracy” po angielsku?", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Miejsce podajemy z czasownikiem to be; przy she jest is." },
    { t: "mc", q: "Do you like coffee? — jak odpowiedzieć „tak”?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "Pytanie było z do, więc odpowiedź też z do: Yes, I do." },
    { t: "mc", q: "„Ona nie je mięsa” po angielsku?", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "Przeczenie przy she to doesn't + forma podstawowa, bez -s." },

    { t: "order", p: "Mój brat pracuje w Seulu", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "Podmiot to jedna osoba (he), więc works z końcówką -s. Czasownika to be tu nie ma." },
    { t: "order", p: "Nie jestem studentem", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "Przeczenie z to be tworzy not, a przed rzeczownikiem policzalnym w liczbie pojedynczej potrzebny jest przedimek a." },
    { t: "order", p: "Ona ma dwa psy", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "Po she jest has, a psy są dwa, więc liczba mnoga: dogs." },

    { t: "fill", q: "My brother __ in Seoul.", p: "Mój brat mieszka w Seulu", a: ["lives"], o: ["live", "is live", "living"], why: "Podmiot to he, więc czasownik dostaje -s: lives." },
    { t: "fill", q: "__ you tired?", p: "Jesteś zmęczona?", a: ["Are"], o: ["Do", "Is", "Does"], why: "tired opisuje stan, więc pytamy czasownikiem to be; przy you jest are." },
    { t: "fill", q: "We __ hungry.", p: "Jesteśmy głodni", a: ["are"], o: ["is", "am", "do"], why: "hungry opisuje stan, więc to be; przy we jest are." },

    { t: "type", p: "On jest nauczycielem", a: ["He's a teacher", "He is a teacher"], hint: "teacher — to be i przedimek przed zawodem", x: ["the"], why: "Po polsku wystarcza narzędnik („nauczycielem”), po angielsku przed nazwą zawodu stoi przedimek a: He's a teacher." },
    { t: "type", p: "Nie lubię kawy", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — przeczenie z do, nie z to be", x: ["am"], why: "like to zwykły czasownik, więc przeczenie tworzy don't (I'm not like ✗)." },
    { t: "type", p: "Czy ona ma kota?", a: ["Does she have a cat"], hint: "does · have · cat — jeden kot, więc przedimek", x: ["has"], why: "Po does czasownik wraca do formy podstawowej have, a przed jednym kotem stoi przedimek a." }
  ],

  polite: [
    { t: "mc", q: "Jak najnaturalniej zamówić latte w kawiarni?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "W kawiarni i w sklepie naturalnie brzmi Can I get…? Jedna kawa, więc z przedimkiem a." },
    { t: "mc", q: "Jak najuprzejmiej poprosić nieznajomą osobę o pomoc?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you…? to uprzejma prośba do osoby, której nie znamy." },
    { t: "mc", q: "Jak uprzejmie poprosić o powtórzenie, gdy czegoś nie słychać?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? to uprzejma prośba o powtórzenie." },
    { t: "mc", q: "Bardzo uprzejmie: „Czy mógłby pan zrobić nam zdjęcie?”", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "Po mind czasownik ma formę -ing: taking." },
    { t: "mc", q: "W samolocie: „Poproszę miejsce przy oknie”", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… to uprzejma prośba. Jedno miejsce, więc z przedimkiem a." },

    { t: "order", p: "Czy mogę prosić latte?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Zamawiamy jedną kawę i mowa o niej pierwszy raz: przedimek a." },
    { t: "order", p: "Czy mogłaby pani otworzyć okno? (to w tym pokoju)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "Po mind stoi forma -ing, a okno jest konkretne i znane obu osobom: przedimek the." },
    { t: "order", p: "Czy może pan mówić wolniej?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you…? to uprzejma prośba. Po czasowniku stoi przysłówek slowly, nie przymiotnik slow." },

    { t: "fill", q: "Would you mind __ the door?", p: "Czy mógłby pan zamknąć drzwi?", a: ["closing"], o: ["close", "to close", "closed"], why: "Po mind czasownik ma formę -ing." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Czy mogę prosić mrożoną kawę?", a: ["an"], o: ["a", "two", "many"], why: "iced zaczyna się od samogłoski, więc przedimek an." },
    { t: "fill", q: "No, not at __.", p: "(odpowiedź na Would you mind…?) Ależ skąd, żaden problem", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all znaczy „wcale nie mam nic przeciwko”, czyli zgodę." },

    { t: "type", p: "Czy może mi pan pomóc? (uprzejmie)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — uprzejma prośba", x: ["can"], why: "Do nieznajomej osoby zwracamy się z Could you…?" },
    { t: "type", p: "Poproszę miejsce przy oknie", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — jedno miejsce, więc przedimek", x: ["the"], why: "Jedno miejsce, o którym mowa pierwszy raz: przedimek a — a window seat." },
    { t: "type", p: "Poproszę dwie kawy", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — dwie, czyli liczba mnoga", x: ["coffee"], why: "Przy zamawianiu kawę liczymy na filiżanki, więc liczba mnoga: two coffees." }
  ],

  tense: [
    { t: "mc", q: "„Właśnie piję kawę” po angielsku?", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "To, co dzieje się w tej chwili, wyraża be + forma -ing (Present Continuous)." },
    { t: "mc", q: "„W zeszły weekend pojechałam na plażę” po angielsku?", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "Druga forma czasownika go to went. Przed beach stoi przedimek the: the beach." },
    { t: "mc", q: "Plan na przyszły miesiąc: „Zamierzam pojechać na Czedżu”", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "Plan ułożony wcześniej to be going to + forma podstawowa." },
    { t: "mc", q: "Dzwonek do drzwi. Decyzja w tej chwili: „Ja otworzę!”", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Decyzję podjętą w chwili mówienia wyraża will." },
    { t: "mc", q: "Jaka jest druga forma (Past Simple) czasownika see?", o: ["saw", "seed", "seen", "sawed"], why: "see jest czasownikiem nieregularnym: see — saw — seen." },

    { t: "order", p: "Pracuję w banku (na stałe)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Stała praca to Present Simple. O banku mowa pierwszy raz i jest jeden: przedimek a." },
    { t: "order", p: "Zadzwonię do ciebie później", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Obietnicę składaną w chwili mówienia wyraża will." },
    { t: "order", p: "Obejrzałem dwa filmy", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "Druga forma see to saw. Filmy są dwa, więc liczba mnoga: movies." },

    { t: "fill", q: "I __ pizza last night.", p: "Wczoraj wieczorem jadłam pizzę", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "Druga forma eat to ate (a jeśli have, to had)." },
    { t: "fill", q: "__ you have fun?", p: "Fajnie było?", a: ["Did"], o: ["Does", "Are", "Were"], why: "O przeszłość pytamy przez Did + forma podstawowa." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Zamierzam odwiedzić rodziców", a: ["to"], o: ["for", "at", "on"], why: "Plan to be going to + forma podstawowa." },

    { t: "type", p: "Pracuję dziś z domu", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — dzieje się teraz", x: ["work"], why: "To, co dzieje się dziś, wyraża be + forma -ing: I'm working." },
    { t: "type", p: "W zeszły weekend pojechałem na plażę", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — Past Simple i przedimek", x: ["a"], why: "Druga forma go to went, a przed beach stoi przedimek the: the beach." },
    { t: "type", p: "Zamierzam zapisać się na kurs gotowania (plan)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — jeden kurs, więc przedimek", x: ["the"], why: "Wcześniejszy plan to going to. Kurs jest jeden i mowa o nim pierwszy raz: przedimek a." }
  ],

  prep: [
    { t: "mc", q: "„W maju” po angielsku?", o: ["in May", "on May", "at May", "to May"], why: "Przed nazwą miesiąca stoi przyimek in." },
    { t: "mc", q: "„Trzeciego maja” po angielsku?", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "Przed datą stoi przyimek on." },
    { t: "mc", q: "„Jestem (teraz) w autobusie” po angielsku?", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "Polskie „w autobusie” to on the bus — przyimek on przy środkach komunikacji. To konkretny autobus, więc z przedimkiem the." },
    { t: "mc", q: "„W nocy” po angielsku?", o: ["at night", "on night", "in night", "at the night"], why: "night to wyjątek: at night, bez przedimka." },
    { t: "mc", q: "Wybierz poprawne zdanie.", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "Przed nazwą miasta stoi in, a nazwy miast nie mają przedimka the." },

    { t: "order", p: "Spotkajmy się na dworcu (tym, który oboje znamy)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "Punkt na mapie to at — po polsku „na dworcu”. Dworzec jest znany obu osobom: przedimek the." },
    { t: "order", p: "Mój telefon leży na (tym) stole", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "Na powierzchni — on. Stół jest konkretny, mamy go przed oczami: przedimek the." },
    { t: "order", p: "Do zobaczenia w przyszłym tygodniu", a: ["See", "you", "next", "week"], x: ["on"], why: "Przed next nie ma przyimka, choć po polsku jest „w”." },

    { t: "fill", q: "The meeting is __ three.", p: "Spotkanie jest o trzeciej", a: ["at"], o: ["on", "to", "of"], why: "Przed godziną stoi przyimek at." },
    { t: "fill", q: "I was born __ 1998.", p: "Urodziłam się w 1998 roku", a: ["in"], o: ["on", "at", "to"], why: "Przed rokiem stoi przyimek in." },
    { t: "fill", q: "See you __ Friday.", p: "Do zobaczenia w piątek", a: ["on"], o: ["in", "at", "to"], why: "„W piątek” to po angielsku on Friday — przyimek on przy dniach tygodnia." },

    { t: "type", p: "Rano piję kawę", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in i przedimek", x: ["at"], why: "Przy porach dnia stoi in, zawsze z przedimkiem the: in the morning." },
    { t: "type", p: "Jestem teraz w domu", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — bez przedimka", x: ["the"], why: "at home to stały zwrot bez przedimka the." },
    { t: "type", p: "Do zobaczenia w przyszły weekend", a: ["See you next weekend"], hint: "see · next weekend — czy przed next stoi przyimek?", x: ["on"], why: "Przed next nie stawiamy przyimka." }
  ],

  smalltalk: [
    { t: "mc", q: "Kolega z pracy pyta: How was your weekend? Jak odpowiedzieć?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Pytanie dotyczy przeszłości, więc odpowiadamy w Past Simple i dodajemy jedną informację." },
    { t: "mc", q: "I don't drink coffee. — jak powiedzieć „Ja też nie”?", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "Z przeczeniem zgadzamy się przez Me neither." },
    { t: "mc", q: "Jak naturalnie zakończyć rozmowę?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going to łagodny sposób, żeby się pożegnać." },
    { t: "mc", q: "Co dobrze nadaje się na początek rozmowy z nieznajomą osobą?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Pogoda to najbezpieczniejszy temat pogawędki. Pytania o zarobki, małżeństwo i wagę są zbyt osobiste." },
    { t: "mc", q: "I went to Busan last weekend. — która reakcja okazuje zainteresowanie?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? i That sounds fun! pokazują, że słuchamy z zainteresowaniem." },

    { t: "order", p: "Masz jakieś plany na weekend?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "W tym pytaniu plans stoi w liczbie mnogiej, a weekend jest konkretny (najbliższy): przedimek the." },
    { t: "order", p: "Miło było porozmawiać", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Tak kończy się rozmowę. Po nice stoi forma -ing: talking." },
    { t: "order", p: "Nie lubię horrorów", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "Mówimy o horrorach ogólnie: liczba mnoga bez przedimka." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Całkiem dobrze! A u ciebie?", a: ["about"], o: ["for", "with", "of"], why: "Odpowiadamy krótko i zadajemy pytanie zwrotne: How about you?" },
    { t: "fill", q: "I know, __?", p: "No właśnie! / Prawda?", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? to mocne przytaknięcie. right pisze się przez R." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Oglądasz ostatnio coś dobrego?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "Po any w takim pytaniu rzeczownik policzalny stoi w liczbie mnogiej: shows, movies." },

    { t: "type", p: "Jak ci minął weekend?", a: ["How was your weekend"], hint: "how · weekend — pytanie w Past Simple", x: ["is"], why: "Weekend już minął, więc pytamy w Past Simple: was." },
    { t: "type", p: "Ładna dziś pogoda", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — z przedimkiem a czy bez?", x: ["a"], why: "weather jest niepoliczalne, więc bez przedimka a (a nice weather ✗)." },
    { t: "type", p: "Lubię oglądać filmy", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — ogólnie, czyli liczba mnoga", x: ["movie"], why: "Mówimy o filmach ogólnie, więc liczba mnoga: movies." }
  ],

  phrasal: [
    { t: "mc", q: "„Włącz to” po angielsku?", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Zaimek it stoi w środku czasownika frazowego: turn it on." },
    { t: "mc", q: "„Skończyło nam się mleko” po angielsku?", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of znaczy „zużyć do końca, nie mieć już”. Nie wolno zgubić of." },
    { t: "mc", q: "„Dorastałem w Daegu” po angielsku?", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up znaczy „dorastać”; druga forma to grew up." },
    { t: "mc", q: "„Możesz zaopiekować się moim kotem?” po angielsku?", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after znaczy „opiekować się” i jest nierozdzielne (look for to „szukać”)." },
    { t: "mc", q: "„Przyjadę po ciebie o siódmej” po angielsku?", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Zaimek you stoi między pick i up." },

    { t: "order", p: "Szukam swoich okularów", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "Okulary to zawsze liczba mnoga: glasses (glass to szklanka albo szkło). „Szukać” to look for." },
    { t: "order", p: "Wymyślmy jakiś plan", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with znaczy „wymyślić”. Planu jeszcze nie ma i jest jeden: przedimek a." },
    { t: "order", p: "Przyjadę po ciebie", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Zaimek you stoi między pick i up." },

    { t: "fill", q: "Can you turn it __?", p: "Możesz to wyłączyć?", a: ["off"], o: ["of", "on", "out"], why: "„Wyłączyć” to turn off. Nie myl off z of." },
    { t: "fill", q: "I work __ every morning.", p: "Codziennie rano ćwiczę", a: ["out"], o: ["up", "off", "on"], why: "work out znaczy „ćwiczyć, trenować”." },
    { t: "fill", q: "We ran out of __.", p: "Skończyły nam się jajka", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Gdy kończy się coś policzalnego, używamy liczby mnogiej: eggs." },

    { t: "type", p: "Wyłącz to, proszę", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — zaimek w środku", x: ["on"], why: "Zaimek it stoi między turn i off." },
    { t: "type", p: "Na co dzień opiekuję się dwoma kotami", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — dwa, czyli liczba mnoga", x: ["cat"], why: "look after znaczy „opiekować się”. Koty są dwa, więc liczba mnoga: cats." },
    { t: "type", p: "Skończyło nam się mleko", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — z przedimkiem a czy bez?", x: ["a"], why: "milk jest niepoliczalne, więc bez przedimka a." }
  ],

  numbers: [
    { t: "mc", q: "Jak powiedzieć po angielsku 10 000?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "Cyfry grupujemy po trzy: 10 + thousand. Po liczbie thousand nie dostaje -s liczby mnogiej." },
    { t: "mc", q: "Jak powiedzieć po angielsku 1 000 000?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "Dwa przecinki w angielskim zapisie (1,000,000) to million. Po liczbie million nie dostaje -s liczby mnogiej." },
    { t: "mc", q: "Jak przeczytać godzinę 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Przy minutach od 1 do 9 dodajemy oh." },
    { t: "mc", q: "Jak naturalnie przeczytać cenę $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Cenę czytamy jako dwie liczby: four ninety-nine." },
    { t: "mc", q: "Jak przeczytać po angielsku rok 2026?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Rok czytamy jako dwie pary cyfr." },

    { t: "order", p: "Jest siódma piętnaście", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 to fifteen (akcent na końcu), a 50 to fifty (akcent na początku)." },
    { t: "order", p: "To kosztuje piętnaście dolarów", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Więcej niż jeden dolar, więc liczba mnoga: dollars." },
    { t: "order", p: "dwa razy w tygodniu", a: ["twice", "a", "week"], x: ["the", "one"], why: "„W tygodniu”, „na tydzień” wyrażamy przedimkiem a: twice a week." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Jest kwadrans po dziesiątej", a: ["a"], o: ["the", "one", "an"], why: "Przed quarter (kwadrans) stoi przedimek a." },
    { t: "fill", q: "That's fifty __ won.", p: "To pięćdziesiąt tysięcy wonów", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50 000 to fifty thousand. Po liczbie thousand nie dostaje -s liczby mnogiej." },
    { t: "fill", q: "I'll be there in ten __.", p: "Będę za dziesięć minut", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Dziesięć minut, więc liczba mnoga: minutes." },

    { t: "type", p: "Jest trzecia trzydzieści (wpół do czwartej)", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — godzinę i minuty czytamy po kolei", x: ["thirteen"], why: "Czytamy godzinę i minuty po kolei: three thirty. Nie myl thirty z thirteen (13)." },
    { t: "type", p: "To dwadzieścia dolarów (zacznij od It's albo That's)", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — więcej niż jeden, czyli liczba mnoga", x: ["dollar"], why: "Dolarów jest więcej niż jeden, więc liczba mnoga: dollars." },
    { t: "type", p: "Ćwiczę dwa razy w tygodniu", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — jaki przedimek znaczy „w tygodniu”?", x: ["the"], why: "„W tygodniu” to a week, z przedimkiem a (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Które powitanie z Dear jest poprawne?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "Po Dear stoi tytuł z nazwiskiem (Mr. Smith), a nie samo stanowisko." },
    { t: "mc", q: "Jak poinformować, że raport jest w załączniku?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Chodzi o konkretny raport, który odbiorca właśnie dostaje: przedimek the." },
    { t: "mc", q: "„Jaki jest termin?” po angielsku?", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Chodzi o konkretny termin tego zadania: przedimek the." },
    { t: "mc", q: "Odpowiedź przyszła późno. Który pozytywny zwrot zastąpi przeprosiny?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience brzmi uprzejmie bez przepraszania. Nie myl patience (cierpliwość) z patients (pacjenci)." },
    { t: "mc", q: "Jakie zakończenie pasuje do e-maila wysyłanego w piątek?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "Jeden weekend: przedimek a i liczba pojedyncza — a great weekend." },

    { t: "order", p: "W załączeniu przesyłam raport", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Raport jest konkretny — odbiorca właśnie go dostaje: przedimek the." },
    { t: "order", p: "Umówmy się na spotkanie", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Spotkania jeszcze nie ustalono i jest jedno: przedimek a." },
    { t: "order", p: "Sprawdzę to i odezwę się", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you znaczy „odezwać się z odpowiedzią”. Przyimek to, nie for." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Czy może mi pani przesłać plik do piątku?", a: ["by"], o: ["until", "in", "at"], why: "Termin („najpóźniej do”) wyraża by + dzień. until znaczy „aż do” i opisuje trwanie." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Piszę, żeby zapytać o harmonogram", a: ["to"], o: ["for", "about", "at"], why: "Cel podajemy przez I'm writing to + forma podstawowa." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Dziękuję wszystkim za zaangażowanie!", a: ["work"], o: ["works", "working", "job"], why: "work w znaczeniu „praca” jest niepoliczalne, więc bez -s liczby mnogiej." },

    { t: "type", p: "Jutro mam wolne (nie pracuję)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — czasownik to be i off", x: ["do"], why: "Dzień wolny od pracy wyrażamy przez be off." },
    { t: "type", p: "W załączeniu przesyłam plik", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — plik jest konkretny, więc jaki przedimek?", x: ["a"], why: "Plik jest konkretny — odbiorca właśnie go dostaje: przedimek the." },
    { t: "type", p: "Miłego weekendu!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — jeden weekend, więc przedimek", x: ["the"], why: "Jeden weekend: przedimek a — a great weekend." }
  ],

  idioms: [
    { t: "mc", q: "„To bułka z masłem” po angielsku?", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Idiomy zapamiętujemy w całości: z przedimkiem a i z cake w liczbie pojedynczej." },
    { t: "mc", q: "„To kosztuje majątek” po angielsku?", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm zaczyna się od samogłoski, więc przedimek an; leg od spółgłoski, więc a." },
    { t: "mc", q: "„Na dziś wystarczy” (pasuje też na spotkaniu) po angielsku?", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day zapamiętujemy w całości, razem z przedimkiem a." },
    { t: "mc", q: "„Jestem w siódmym niebie” po angielsku?", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine: bez przedimka i bez -s liczby mnogiej." },
    { t: "mc", q: "Które wyrażenie to slang, dobry tylko wśród znajomych?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap znaczy „serio, bez ściemy” i jest slangiem młodych ludzi. Pozostałe to idiomy, które pasują także w pracy." },

    { t: "order", p: "Zamieniam się w słuch", a: ["I'm", "all", "ears"], x: ["ear"], why: "Słucha się obojgiem uszu, więc liczba mnoga: ears." },
    { t: "order", p: "Muszę zabrać się do nauki", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books: przedimek the i liczba mnoga books, zawsze w tej postaci." },
    { t: "order", p: "To nie moja bajka", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea zapamiętujemy w całości; my zajmuje miejsce przedimka." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Upiec dwie pieczenie na jednym ogniu", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Ptaki są dwa, więc liczba mnoga: birds." },
    { t: "fill", q: "Speak of the __!", p: "O wilku mowa!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "Po polsku mowa o wilku, po angielsku o diable: Speak of the devil!" },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Kiepsko się czuję", a: ["the"], o: ["a", "an", "my"], why: "under the weather: zawsze z przedimkiem the." },

    { t: "type", p: "To bułka z masłem", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — nie zapomnij o przedimku", x: ["the"], why: "a piece of cake: przedimek a jest częścią idiomu." },
    { t: "type", p: "Będę trzymać kciuki", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — ile palców się krzyżuje?", x: ["finger"], why: "Krzyżuje się dwa palce, więc liczba mnoga: fingers." },
    { t: "type", p: "Na dziś wystarczy", a: ["Let's call it a day"], hint: "call it · day — z przedimkiem a, nie the", x: ["the"], why: "call it a day: przedimek a, nie the." }
  ]
};
