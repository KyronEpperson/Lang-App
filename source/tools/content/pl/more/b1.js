/* pl-en stage B1: lessons for Polish speakers (source of truth). Shorthand is expanded by _dsl.js.
   articles-3 is a pl-only lesson (profile §8; English side from the Russian course, Moscow → Warsaw); its place in the course comes from profile.json lessonOrder.after. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect 2: for i since — jak długo, od kiedy", blurb:"Zaczęło się kiedyś i trwa do dziś. Polskie „od” to for albo since, nigdy from.", deck:"O sobie", body:`
<p>Drugie zastosowanie czasu Present Perfect: coś <b>zaczęło się w przeszłości i trwa do teraz</b>. Po polsku mówimy wtedy w czasie teraźniejszym: „Mieszkam tu od pięciu lat”. Po angielsku Present Simple tu nie pasuje — ten okres wciąż trwa, więc potrzebny jest Present Perfect.</p>
{{ex:I've lived in Warsaw for five years.|/aɪv ˈlɪvd ɪn ˈwɔːrsɔː fər ˈfaɪv ˈjɪrz/|Mieszkam w Warszawie od pięciu lat}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Pracuję tu od 2020 roku}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Znam ją od dawna}}
<h3>Polskie „od” to for albo since</h3>
<div class="tbl"><table><tr><th>for + okres (jak długo)</th><th>since + punkt w czasie (od kiedy)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<p>Polskie „od” obsługuje oba przypadki: „od pięciu lat”, „od poniedziałku”. Po angielsku trzeba wybrać: okres — <b>for</b>, początek — <b>since</b>. Nigdy <b>from</b>.</p>
<h3>How long…?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Jak długo tu jesteś?}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|Jak długo uczysz się angielskiego?}}
<p><b>How long you are in Poland?</b> ✗ → <b>How long have you been in Poland?</b> ✓</p>
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Właśnie skończyłam}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Już to widziałem}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Jadłaś już?}}
<p>W pytaniach „już” to zwykle <b>yet</b> na końcu zdania. W amerykańskim angielskim z just i already często słychać też Past Simple: <b>I already saw it.</b></p>
<div class="tip">Najczęstsze błędy: <b>I live here since five years.</b> ✗, <b>I work here from five years.</b> ✗ → <b>I've lived here for five years.</b> ✓, <b>I've worked here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Co pasuje w lukę?",["since","for","during","from"],1,"Przed okresem („od trzech lat”) stoi for."],["I've worked here ___ 2020. Co pasuje w lukę?",["for","in","since","at"],2,"Przed punktem w czasie („od 2020 roku”) stoi since."],["Jak powiedzieć po angielsku „Jak długo tu jesteś?”?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + trzecia forma — nie Present Simple."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","Przed okresem stoi for."],
["mc","She's lived here ___ 2019.","since","for","in","at","Przed punktem w czasie stoi since."],
["mc","„Jak długo tu jesteś?” po angielsku?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + trzecia forma; ten okres wciąż trwa."],
["mc","„Właśnie skończyłem” po angielsku?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + trzecia forma."],
["mc","„Jadłeś już?” po angielsku?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","W pytaniu „już” to yet na końcu zdania."],
["or","Mieszkam tu od pięciu lat","I've lived here for five years","year since","Po five — liczba mnoga years; przed okresem stoi for, nie since."],
["or","Już widziałam ten film","I've already seen the movie","a saw","Film, o którym obie osoby wiedzą — przedimek the."],
["or","Jak długo czekasz?","How long have you waited","did","How long have you + trzecia forma."],
["fi","I've worked here __ two years.","Pracuję tu od dwóch lat","for","since|from|during","Przed okresem stoi for — polskie „od” to tutaj ani since, ani from."],
["fi","I've been here __ Monday.","Jestem tu od poniedziałku","since","for|at|during","Przed punktem w czasie stoi since."],
["fi","Have you finished __?","Skończyłeś już?","yet|already","ever|never|since","W pytaniu „już” to zwykle yet."],
["ty","Mieszkam tu od trzech lat","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — liczba mnoga","year","Po three — liczba mnoga years; okres wciąż trwa, więc Present Perfect."],
["ty","Jak długo tu jesteś?","How long have you been here","how long · have you · been here","are","How long have you + trzecia forma — nie Present Simple."],
["ty","Już przeczytałem tę książkę","I've already read the book|I've read the book already|I already read the book","already · read · book — przedimek the","a","Książka, o której obie osoby wiedzą — przedimek the."]]},
{ id:"narrative", title:"Czasy w opowiadaniu: Past Simple, Past Continuous, Past Perfect", blurb:"Tło — Past Continuous, wydarzenia — Past Simple, to, co stało się wcześniej — had + trzecia forma.", deck:"Filmy, seriale i slang", body:`
<p>Opowiadając, co się wydarzyło, mieszamy trzy czasy przeszłe. Każdy ma swoją rolę. Po polsku wystarcza jeden czas przeszły z aspektem („szłam”, „zobaczyłam”), a kolejność zdarzeń wynika ze słów takich jak „już” i „wcześniej”.</p>
<div class="tbl"><table><tr><th>Czas</th><th>Rola</th><th>Przykład</th></tr><tr><td class="k">Past Continuous</td><td>tło, czynność w toku</td><td>I was walking home.</td></tr><tr><td class="k">Past Simple</td><td>wydarzenie</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>coś, co stało się jeszcze wcześniej</td><td>He had moved to Krakow.</td></tr></table></div>
<h3>Tło + wydarzenie</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Szłam do domu, kiedy zobaczyłam starego znajomego}}
<h3>Past Perfect: had + trzecia forma</h3>
<p>Coś, co stało się <b>jeszcze wcześniej</b> niż inne zdarzenie z przeszłości.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Kiedy przyszedłem, film już trwał}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Nigdy wcześniej nie widziałam śniegu}}
<h3>Słowa, które porządkują opowieść</h3>
<p>first (najpierw), then (potem), after that (następnie), finally (w końcu).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Najpierw zjedliśmy kolację. Potem obejrzeliśmy film}}
<div class="tip">then („potem”) i than („niż”) brzmią podobnie, ale to różne wyrazy. W opowiadaniu potrzebne jest <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Co pasuje w lukę?",["has","was","had","did"],2,"To, co stało się jeszcze wcześniej — had + trzecia forma."],["I ___ walking home when it started to rain. Co pasuje w lukę?",["was","had","did","have"],0,"Czynność w tle — Past Continuous."],["Które zdanie mówi o czymś, co stało się jeszcze wcześniej?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + trzecia forma to Past Perfect."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","To, co stało się jeszcze wcześniej — had + trzecia forma."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","Czynność w tle — Past Continuous."],
["mc","„Kiedy przyszłam, pociąg już odjechał” po angielsku?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","To, co stało się wcześniej, dostaje had + trzecią formę."],
["mc","Jak jest po angielsku „potem” w opowiadaniu?","then","than","that","them","then to „potem”, than to „niż”."],
["mc","„Nigdy wcześniej nie widziałem śniegu” po angielsku?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + trzecia forma."],
["or","Pociąg już wcześniej odjechał","The train had already left","a has","Konkretny pociąg, na który ktoś chciał zdążyć — przedimek the."],
["or","Spotkałam starego znajomego","I met an old friend","a friends","old zaczyna się od samogłoski, więc przedimek an, nie a."],
["or","Szedłem do domu (tło opowieści)","I was walking home","had","Tło opowieści — Past Continuous."],
["fi","I was sleeping __ you called.","Spałem, kiedy zadzwoniłaś","when","than|so|had","„Kiedy” to tutaj when."],
["fi","The bus had already __.","Autobus już wcześniej odjechał","left|gone","leave|leaving|leaves","Po had stoi trzecia forma."],
["fi","First we ate. __ we watched a movie.","Najpierw zjedliśmy. Potem obejrzeliśmy film","Then|After that|Next","Than|Because|When","„Potem” to then."],
["ty","Film już się wcześniej zaczął","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — przedimek the","a","Konkretny film, na który ktoś szedł — przedimek the."],
["ty","Spotkałem starego znajomego","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — przedimek an","a","old zaczyna się od samogłoski, więc przedimek an."],
["ty","Szłam do domu (czynność w toku)","I was walking home","was · walking · home","had","Tło opowieści — Past Continuous."]]},
{ id:"conditionals", title:"Drugi i trzeci okres warunkowy: gdyby…", blurb:"Nierealne teraz — would. Nierealne w przeszłości — would have.", deck:"Emocje i reakcje", body:`
<p>Mówimy o czymś, co nie jest prawdą: wyobrażamy sobie inną teraźniejszość albo inną przeszłość. Po polsku jedno „gdybym” obsługuje oba przypadki: „Gdybym wiedział, powiedziałbym ci” może dotyczyć i dziś, i wczoraj. Po angielsku to dwa różne wzory, a wybiera się je według czasu.</p>
<h3>Drugi okres warunkowy: inaczej niż teraz</h3>
<p><b>If + Past Simple, would + forma podstawowa</b>. Forma jest przeszła, ale mowa o teraźniejszości.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Gdybym miała czas, podróżowałabym}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|Na twoim miejscu bym to wziął}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|Co byś zrobiła?}}
<h3>Trzeci okres warunkowy: inaczej niż w przeszłości</h3>
<p><b>If + had + trzecia forma, would have + trzecia forma</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Gdybym się uczył, zdałbym}}{{ex:If I had known, I would have come.|/ɪf aɪ həd ˈnoʊn aɪ wəd əv ˈkʌm/|Gdybym wiedziała, przyszłabym}}
<h3>Żal: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Trzeba było zadzwonić}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Szkoda, że nie mam więcej czasu}}
<div class="tbl"><table><tr><th>Okres warunkowy</th><th>Część z if</th><th>Druga część</th></tr><tr><td>pierwszy (to możliwe)</td><td class="k">Present Simple</td><td class="k">will</td></tr><tr><td>drugi (inaczej niż teraz)</td><td class="k">Past Simple</td><td class="k">would</td></tr><tr><td>trzeci (inaczej niż w przeszłości)</td><td class="k">had + trzecia forma</td><td class="k">would have + trzecia forma</td></tr></table></div>
<div class="tip">W części z if nie ma would: <b>If I would have time, …</b> ✗ → <b>If I had time, …</b> ✓ A <b>If I were you</b> to stałe wyrażenie: po I stoi tu <b>were</b>, nie was.</div>`,
check:[["If I ___ rich, I would travel. Co pasuje w lukę?",["am","were","will be","would be"],1,"Inaczej niż teraz — w części z if stoi Past Simple (were)."],["If I had studied, I ___ passed. Co pasuje w lukę?",["would","will have","would have","had"],2,"Inaczej niż w przeszłości — would have + trzecia forma."],["Jak powiedzieć po angielsku „Trzeba było zadzwonić” (mówię o sobie)?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Żal wyrażamy przez should have + trzecia forma."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Inaczej niż teraz — w części z if stoi Past Simple."],
["mc","„Na twoim miejscu bym to kupił” po angielsku?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd… to stałe wyrażenie."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Inaczej niż w przeszłości — would have + trzecia forma."],
["mc","„Trzeba było zadzwonić” (mówię o sobie) po angielsku?","I should have called.","I should called.","I should had call.","I must called.","Żal wyrażamy przez should have + trzecia forma."],
["mc","„Co byś zrobił?” po angielsku?","What would you do?","What will you did?","What would you did?","What you would do?","would + forma podstawowa; w pytaniu would stoi przed podmiotem."],
["or","Gdybym miał czas, podróżowałbym","If I had time I'd travel","have will","Inaczej niż teraz — Past Simple (had) i would."],
["or","Ja bym wzięła taksówkę","I'd take a taxi","the taxis","Jakakolwiek taksówka, jedna — przedimek a."],
["or","Trzeba było kupić bilet (mówię o sobie)","I should have bought a ticket","the buy","Jeden bilet — przedimek a."],
["fi","If I __ you, I'd go.","Na twoim miejscu bym poszła","were|was","am|be|would be","If I were you to stałe wyrażenie."],
["fi","I would __ helped.","Pomógłbym (wtedy)","have","had|has|having","would have + trzecia forma."],
["fi","I wish I __ more time.","Szkoda, że nie mam więcej czasu","had","have|would have|will have","Po I wish stoi Past Simple."],
["ty","Na twoim miejscu bym poszedł","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","If I were you, I'd… — stałe wyrażenie."],
["ty","Szkoda, że nie mam samochodu (użyj I wish)","I wish I had a car","I wish · had · car — przedimek a","the","Jakikolwiek samochód, jeden — przedimek a."],
["ty","Trzeba było wziąć taksówkę (mówię o sobie)","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — przedimek a","the","Jakakolwiek taksówka, jedna — przedimek a."]]},
{ id:"passive", title:"Strona bierna: be + trzecia forma", blurb:"Gdy ważniejsze jest, co się stało, niż kto to zrobił.", deck:"Praca i e-maile", body:`
<p>Strona bierna to <b>czasownik to be + trzecia forma</b>. Używamy jej, gdy nie wiadomo, kto coś zrobił, albo nie ma to znaczenia.</p>
<p>Po polsku w takich sytuacjach wolimy „się” albo formy na -no / -to: „Ukradziono mi telefon”, „Spotkanie odwołano”, „Tu mówi się po angielsku”. Po angielsku takich konstrukcji nie ma — ich pracę wykonuje strona bierna i dlatego jest dużo częstsza niż w polskim.</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Ukradziono mi telefon}}{{ex:This was made in Poland.|/ˈðɪs wəz ˈmeɪd ɪn ˈpoʊlənd/|To wyprodukowano w Polsce}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|Spotkanie zostało odwołane}}{{ex:A new bridge was built.|/ə ˈnuː ˈbrɪdʒ wəz ˈbɪlt/|Zbudowano nowy most}}
<h3>Present Simple: coś dzieje się stale</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Tu mówi się po angielsku}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Śniadanie podaje się o siódmej}}
<p>Tak samo „Mówi się, że…” to <b>It is said that…</b></p>
<h3>Kto to zrobił: by</h3>
<p><b>by</b> to polskie „przez”.</p>
{{ex:It was written by a Polish author.|/ɪt wəz ˈrɪtn baɪ ə ˈpoʊlɪʃ ˈɔːθər/|Napisał to polski autor}}
<h3>Strona czynna i strona bierna</h3>
<div class="tbl"><table><tr><th>Strona czynna</th><th>Strona bierna</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<div class="tip">Najczęstszy błąd: brak czasownika to be. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Co pasuje w lukę?",["is","was","did","has"],1,"To było wczoraj, więc was + trzecia forma."],["This phone ___ made in Korea. Co pasuje w lukę?",["was","did","has","does"],0,"Strona bierna: czasownik to be + trzecia forma."],["Jak powiedzieć po angielsku „Spotkanie zostało odwołane”?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"Czasownik to be + trzecia forma: was canceled."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Strona bierna: czasownik to be + trzecia forma."],
["mc","„To wyprodukowano w Korei” po angielsku?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","Czasownik to be + trzecia forma: made."],
["mc","Jak powiedzieć w stronie biernej: „Tu mówi się po angielsku”?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Coś dzieje się stale — is + trzecia forma."],
["mc","„Spotkanie zostało odwołane” po angielsku?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Czasownik to be + trzecia forma."],
["mc","„Śniadanie podaje się o siódmej” po angielsku?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Nazwy posiłków nie mają przedimka; is + trzecia forma."],
["or","Ukradziono mi torbę","My bag was stolen","stole","Po czasowniku to be stoi trzecia forma: stolen."],
["or","Spotkanie zostało odwołane","The meeting was canceled","A meetings","Spotkanie, o którym obie osoby wiedzą — przedimek the."],
["or","Okno zostało wybite","The window was broken","a windows","To okno, które tu jest — przedimek the."],
["fi","This was __ in Korea.","To wyprodukowano w Korei","made","make|making|makes","Po czasowniku to be stoi trzecia forma."],
["fi","The room __ cleaned every day.","Pokój jest sprzątany codziennie","is|gets","does|has|did","Coś dzieje się stale — is + trzecia forma."],
["fi","It was written __ Han Kang.","Napisała to Han Kang","by","from|of|with","Wykonawcę wprowadza by — polskie „przez”."],
["ty","Ukradziono mi telefon","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","Czasownik to be + trzecia forma: stolen."],
["ty","Spotkanie zostało odwołane","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — przedimek the","a","Spotkanie, o którym obie osoby wiedzą — przedimek the."],
["ty","Drzwi były zamknięte na klucz","The door was locked","the door · was · locked — przedimek the","a","Te drzwi, które tu są — przedimek the."]]},
{ id:"articles-3", title:"Przedimki: powtórka i podsumowanie", blurb:"Jedna rzecz policzalna — z a. Znana obu osobom — z the. Mówimy ogólnie — bez przedimka.", deck:"Pogawędki", body:`
<p>W polskim nie ma przedimków, więc błędy idą w dwie strony. Najczęściej przedimek po prostu znika (<b>I'm engineer.</b> ✗, <b>Can you open window?</b> ✗), rzadziej pojawia się tam, gdzie go nie trzeba (<b>The life is short.</b> ✗). Ta lekcja zbiera wszystko w trzy pytania, które warto sobie zadać przy każdym rzeczowniku.</p>
<h3>1. Jedna rzecz, jedna z wielu? a / an</h3>
<p>Rzeczownik policzalny w liczbie pojedynczej nie może stać sam. Jeśli chodzi o „jakiś”, „jeden z wielu”, dostaje <b>a / an</b> — także wtedy, gdy ma przy sobie przymiotnik albo długi opis. Po polsku wystarczy narzędnik („jest inżynierem”), po angielsku potrzebny jest przedimek.</p>
{{ex:My brother is an engineer who works in Warsaw.|/maɪ ˈbrʌðər ɪz ən ˌendʒɪˈnɪr hu ˈwɜːrks ɪn ˈwɔːrsɔː/|Mój brat jest inżynierem i pracuje w Warszawie}}{{ex:I read an interesting article.|/aɪ ˈred ən ˈɪntrəstɪŋ ˈɑːrtɪkl/|Przeczytałam ciekawy artykuł}}
<p>O wyborze między a i an decyduje pierwszy dźwięk następnego wyrazu: <b>an</b> interesting article, ale <b>a</b> young man.</p>
<h3>2. Wiadomo, o którą rzecz chodzi? the</h3>
<p>Ten sam wyraz dostaje <b>the</b>, gdy opis po nim (of…, in…, zdanie względne) wskazuje, o którą rzecz chodzi, albo gdy obie osoby ją widzą. Po polsku nic się wtedy nie dodaje — „muzyka w tej kawiarni”, „kawa, którą zrobiłeś”, „otwórz okno” — dlatego to the najłatwiej zgubić.</p>
{{ex:I like the music in this cafe.|/aɪ ˈlaɪk ðə ˈmjuːzɪk ɪn ˈðɪs kæˈfeɪ/|Podoba mi się muzyka w tej kawiarni}}{{ex:The coffee you made was great.|/ðə ˈkɔːfi ju ˈmeɪd wəz ˈgreɪt/|Kawa, którą zrobiłeś, była świetna}}{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Możesz otworzyć okno?}}
<p>Stopień najwyższy i liczebniki porządkowe też wymagają the: „najlepszy” i „pierwszy” jest tylko jeden.</p>
{{ex:It's the best movie I've ever seen.|/ɪts ðə ˈbest ˈmuːvi aɪv ˈevər ˈsiːn/|To najlepszy film, jaki widziałem}}
<h3>3. Mówimy ogólnie? Bez przedimka</h3>
<p>O całej kategorii mówimy tak: rzeczownik policzalny stoi w <b>liczbie mnogiej bez przedimka</b>, a niepoliczalny albo abstrakcyjny — po prostu <b>bez przedimka</b>. Bez przedimka są też nazwy miast i większości krajów.</p>
{{ex:Cats sleep a lot.|/ˈkæts ˈsliːp ə ˈlɑːt/|Koty dużo śpią}}{{ex:Time is money.|/ˈtaɪm ɪz ˈmʌni/|Czas to pieniądz}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|Życie jest krótkie}}{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|Lubię muzykę (w ogóle)}}
<p><b>The life is short.</b> ✗ → <b>Life is short.</b> ✓ · <b>I went to the Gdansk.</b> ✗ → <b>I went to Gdansk.</b> ✓</p>
<h3>Stałe wyrażenia bez przedimka</h3>
<p>bed, school, work w swojej podstawowej roli oraz by + środek transportu nie mają przedimka. Najłatwiej zapamiętać te wyrażenia w całości.</p>
<div class="tbl"><table><tr><th>Wyrażenie</th><th>Znaczenie</th></tr><tr><td class="k">go to bed</td><td>iść spać</td></tr><tr><td class="k">go to school / go to work</td><td>chodzić do szkoły / do pracy</td></tr><tr><td class="k">at home / at work</td><td>w domu / w pracy</td></tr><tr><td class="k">by train / by bus</td><td>pociągiem / autobusem</td></tr><tr><td class="k">have lunch</td><td>jeść lunch</td></tr></table></div>
{{ex:I go to work by train.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈtreɪn/|Jeżdżę do pracy pociągiem}}{{ex:I went to bed early.|/aɪ ˈwent tə ˈbed ˈɜːrli/|Wcześnie poszłam spać}}{{ex:She's at work now.|/ʃiz ət ˈwɜːrk ˈnaʊ/|Ona jest teraz w pracy}}{{ex:I sat on the bed.|/aɪ ˈsæt ɑːn ðə ˈbed/|Usiadłem na łóżku (łóżko jako mebel)}}
<div class="tip">W razie wątpliwości zadaj sobie trzy pytania. Jedna z wielu? — a / an. Wiadomo, która? — the. Mówimy ogólnie? — bez przedimka (rzeczownik policzalny w liczbie mnogiej).</div>`,
check:[["Jak powiedzieć po angielsku „Jeżdżę do pracy pociągiem”?",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work i by train to stałe wyrażenia bez przedimka."],["I like ___ music they play here. Co pasuje w lukę?",["the","a","an","(bez przedimka)"],0,"they play here wskazuje, o którą muzykę chodzi — potrzebny jest przedimek the."],["Jak powiedzieć po angielsku „Życie jest krótkie” (życie w ogóle)?",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"Pojęcie abstrakcyjne w znaczeniu ogólnym — bez przedimka."]],
practice:[
["mc","„Czas to pieniądz” po angielsku?","Time is money.","The time is money.","A time is money.","Time is a money.","Pojęcie abstrakcyjne w znaczeniu ogólnym — bez przedimka; money jest niepoliczalne, więc też bez a."],
["mc","„Wcześnie poszedłem spać” po angielsku?","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","go to bed (iść spać) to stałe wyrażenie bez przedimka."],
["mc","„Kawa, którą zrobiłaś, była świetna” po angielsku?","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","Zdanie względne wskazuje, o którą kawę chodzi — przedimek the."],
["mc","„Mój brat jest inżynierem i pracuje w Warszawie” po angielsku?","My brother is an engineer who works in Warsaw.","My brother is engineer who works in Warsaw.","My brother is a engineer who works in Warsaw.","My brother is the engineers who works in Warsaw.","Opis jest, ale to jeden z wielu inżynierów — przedimek an. Rzeczownik policzalny w liczbie pojedynczej nie może stać sam."],
["mc","„Ona jest teraz w pracy” po angielsku?","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work to stałe wyrażenie bez przedimka."],
["or","Koty dużo śpią","Cats sleep a lot","The cat","Koty w ogóle — liczba mnoga bez przedimka: cats."],
["or","Podoba mi się tutejsza muzyka","I like the music here","a musics","here wskazuje, o którą muzykę chodzi — przedimek the; music jest niepoliczalne, więc bez -s."],
["or","Jeżdżę do szkoły autobusem","I go to school by bus","the a","go to school i by bus to stałe wyrażenia bez przedimka."],
["fi","__ is short.","Życie jest krótkie","Life","The life|A life|Lives","Pojęcie abstrakcyjne w znaczeniu ogólnym — bez przedimka."],
["fi","I'm __ home now.","Jestem teraz w domu","at","at the|in the|to","at home to stałe wyrażenie bez przedimka."],
["fi","I read __ interesting article about sleep.","Przeczytałem ciekawy artykuł o śnie","an","a|the|two","Artykuł jest jednym z wielu, choć ma opis — przedimek an (interesting zaczyna się od samogłoski)."],
["ty","Wcześnie poszłam spać","I went to bed early","went to · bed · early — bez przedimka","the","go to bed to stałe wyrażenie bez przedimka."],
["ty","Kawa, którą zrobiłeś, była świetna","The coffee you made was great|The coffee you made was good|The coffee you made was delicious|The coffee that you made was great|The coffee that you made was good|The coffee that you made was delicious","the coffee · you made · great — przedimek the","a","Zdanie względne wskazuje, o którą kawę chodzi — przedimek the."],
["ty","Jeżdżę do pracy pociągiem","I go to work by train|I get to work by train|I travel to work by train|I commute by train|I take the train to work","go to work · by train — bez przedimka","the","go to work i by train to stałe wyrażenia bez przedimka."]]},
{ id:"reported", title:"Mowa zależna: jak przekazać cudze słowa", blurb:"She said she was tired. Czas cofa się o krok, a po tell stoi osoba.", deck:"Telefon i skróty z czatu", body:`
<p>Mowa zależna służy do powtarzania cudzych słów: „Powiedziała, że…”. Po polsku czas zostaje taki jak w oryginale: „Powiedziała, że <b>jest</b> zmęczona”. Po angielsku działa <b>następstwo czasów</b>: po said czas <b>cofa się o krok</b>.</p>
<div class="tbl"><table><tr><th>Oryginał</th><th>W mowie zależnej</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Powiedziała, że jest zmęczona}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Powiedział, że przyjdzie}}
<p>Słowo that można dodać albo pominąć (<b>She said that she was tired.</b>), ale przecinka przed nim nie ma — inaczej niż przed polskim „że”.</p>
<h3>say i tell</h3>
<p>Po <b>tell</b> musi stać osoba, do której się mówi. Po <b>say</b> — nie.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Powiedział mi, że jest zajęty}}
<h3>Pytania w mowie zależnej</h3>
<p>Polskie „czy” to <b>if</b> (albo whether). Pytanie szczegółowe zachowuje swoje słowo pytające. W obu przypadkach dalej jest <b>szyk zdania twierdzącego</b>: podmiot, potem czasownik — bez do i did.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Zapytała, czy wszystko u mnie w porządku}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Zapytał, gdzie mieszkam}}
<div class="tip">Najczęstsze błędy: <b>He said me …</b> ✗ → <b>He told me …</b> ✓ · <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Co pasuje w lukę?",["is being","was","be","will"],1,"Po said czas cofa się o krok: is → was."],["He ___ me he would come. Co pasuje w lukę?",["said","say","told","tell to"],2,"Jest osoba (me), więc told."],["Jak powiedzieć po angielsku „Zapytał, gdzie mieszkam”?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"W pytaniu pośrednim szyk jest jak w zdaniu twierdzącym."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","Po said czas cofa się o krok."],
["mc","He ___ me he was late.","told","said","say","tells to","Jest osoba (me), więc told."],
["mc","„Powiedział, że przyjdzie” po angielsku?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will zmienia się w would."],
["mc","„Zapytała, czy wszystko u mnie w porządku” po angielsku?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Polskie „czy” to tutaj if."],
["mc","„Zapytał, gdzie mieszkam” po angielsku?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","W pytaniu pośrednim szyk jest jak w zdaniu twierdzącym."],
["or","Powiedziała, że jest zmęczona","She said she was tired","told","Nie ma osoby, do której się mówi — said."],
["or","Powiedział, że kupił samochód","He said he bought a car","the cars","Samochód wspomniany po raz pierwszy, jeden — przedimek a."],
["or","Powiedziała, że ta książka jej się podobała","She said she liked the book","a books","Książka, o której obie osoby wiedzą — przedimek the."],
["fi","She __ she was tired.","Powiedziała, że jest zmęczona","said","told|asked|say","Nie ma osoby, do której się mówi — said."],
["fi","He told __ he was busy.","Powiedział mi, że jest zajęty","me","I|my|to","Po told stoi osoba: me."],
["fi","She asked __ I was okay.","Zapytała, czy wszystko u mnie w porządku","if|whether","that|what|did","Polskie „czy” to if (albo whether)."],
["ty","Powiedział, że jest zajęty","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","Po said czas cofa się o krok: is → was."],
["ty","Powiedziała, że ma samochód","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — przedimek a","the","Samochód wspomniany po raz pierwszy, jeden — przedimek a."],
["ty","Powiedział, że widział ten film","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — przedimek the","a","Film, o którym obie osoby wiedzą — przedimek the."]]},
];
