/* pl-en stage A1: new lessons for Polish speakers (English side shared with ko-en; ponglish is pl-only). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"It i there: zdanie musi mieć podmiot", blurb:"Pogoda i godzina — z it, a „gdzieś coś jest” — z there is / there are.", deck:"Pogawędki", body:`
<p>Po polsku wystarczy „Jest zimno”, „Pada” albo „Jest późno” — bez żadnego podmiotu. A w zdaniu „Na stole jest książka” podmiot (książka) stoi na samym końcu. W angielskim miejsce podmiotu na początku zdania nie może zostać puste, dlatego zajmują je „puste” słowa <b>it</b> i <b>there</b>.</p>
<h3>Pogoda i godzina — It</h3>
<p>Tutaj <b>it</b> nie znaczy „to” ani „ono”: jest po prostu podmiotem, którego wymaga gramatyka. „Jest zimno” to <b>It's cold</b>, nie <b>Is cold</b>.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Dziś jest zimno}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Jest trzecia}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Pada deszcz}}{{ex:It's late.|/ɪts ˈleɪt/|Jest późno}}
<h3>„Gdzieś coś jest” — There is / There are</h3>
<p>Jedna rzecz — <b>There is a …</b>, kilka — <b>There are …</b> i liczba mnoga. W mowie używamy skrótu <b>There's</b>.</p>
<p>Szyk jest tu odwrotny niż w polskim. Po polsku nowa informacja idzie na koniec: „Na stole jest książka”. Stąd pokusa, żeby powiedzieć <b>On the table is a book</b>. Po angielsku najpierw <b>there is</b>, potem co, a na końcu gdzie.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|W pobliżu jest kawiarnia}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Są dwa pokoje}}{{ex:There's a book on the table.|/ðerz ə ˈbʊk ɑːn ðə ˈteɪbl/|Na stole jest książka}}
<h3>Pytanie i przeczenie</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Czy jest tu toaleta?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Są wolne miejsca?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Dziś nie ma autobusu}}
<h3>Nie myl z have</h3>
<p>To, co ktoś ma — <b>have</b>. To, co gdzieś się znajduje — <b>there is</b>. Polskie „jest” w zdaniu „Jest tu kawiarnia” to nie samo <b>is</b> i nie <b>have</b>, tylko <b>there is</b>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|Mam samochód}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|Na zewnątrz stoi samochód}}
<div class="tip">Częste błędy: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>On the table is a book.</b> ✗ → <b>There's a book on the table.</b> ✓</div>`,
check:[["„Dziś jest gorąco” po angielsku?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"O pogodzie mówimy z it: zajmuje ono miejsce podmiotu."],["There ___ three people. Co pasuje w lukę?",["is","are","have","be"],1,"Osób jest kilka, więc there are."],["„Czy jest tu toaleta?” po angielsku?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"O to, czy coś gdzieś jest, pytamy: Is there a …?"]],
practice:[
["mc","„Pada deszcz” po angielsku?","It's raining.","Is raining.","There is raining.","Rain is.","O pogodzie mówimy z podmiotem it."],
["mc","„W pobliżu jest kawiarnia” po angielsku?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Coś gdzieś się znajduje — there is; kawiarnia jest jedna, więc przedimek a."],
["mc","There ___ two rooms.","are","is","have","has","Rooms to liczba mnoga, więc are."],
["mc","„Jest trzecia” po angielsku?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Godzinę też podajemy z it."],
["mc","„Mam samochód” po angielsku?","I have a car.","There is a car me.","I am a car.","It's a car me.","To, co ktoś ma — have."],
["or","Dziś jest zimno","It's cold today","There's","O pogodzie — podmiot it."],
["or","Na zewnątrz stoi samochód","There's a car outside","cars","Samochód jest jeden: przedimek a i car bez -s, nie liczba mnoga."],
["or","Są dwa wolne miejsca","There are two seats","seat is","Miejsca są dwa — are i liczba mnoga seats."],
["fi","__ cold today.","Dziś jest zimno","It's|It is","Is|There's|This","Miejsce podmiotu zajmuje it."],
["fi","There __ a bank near here.","W pobliżu jest bank","is","are|have|be","Bank jest jeden — is."],
["fi","__ there any seats?","Są wolne miejsca?","Are","Is|Do|Have","Seats to liczba mnoga, więc Are."],
["ty","Dziś jest gorąco","It's hot today","it · hot · today — pogoda zawsze z it","There's","O pogodzie zaczynamy od it."],
["ty","Czy jest tu toaleta?","Is there a bathroom here|Is there a restroom here","is there · bathroom — uwaga na przedimek","the","Pytamy o jedną rzecz po raz pierwszy — przedimek a."],
["ty","Są dwa pokoje","There are two rooms","there are · two · room — liczba mnoga","room","Pokoje są dwa — liczba mnoga rooms."]]},

{ id:"plurals", title:"Liczba mnoga, this / these i my / your", blurb:"Więcej niż jedna rzecz — końcówka -s. This mówi o jednej rzeczy, these — o kilku.", deck:"Zakupy i płatności", body:`
<p>Liczbę mnogą polski zna dobrze, więc sama idea nie jest nowa: <b>book → books</b>, jak „książka → książki”. Pułapki są gdzie indziej: wyjątki, para <b>this</b> / <b>these</b>, dopełniacz saksoński ('s) i wymowa końcówki.</p>
<h3>Jak tworzymy liczbę mnogą</h3>
<div class="tbl"><table><tr><th>Zasada</th><th>Przykład</th></tr><tr><td>Zwykle -s</td><td class="k">book → books</td></tr><tr><td>Po s, x, ch, sh — -es</td><td class="k">box → boxes</td></tr><tr><td>Spółgłoska + y → -ies</td><td class="k">city → cities</td></tr><tr><td>Wyjątki</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|dwie książki}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|trzy pudełka}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|Mam dwoje dzieci}}
<p><b>People</b> to już liczba mnoga: <b>people are</b>, nie <b>peoples</b> i nie <b>people is</b>.</p>
{{ex:People are nice here.|/ˈpiːpl ər ˈnaɪs ˈhɪr/|Ludzie są tu mili}}
<p>Końcówka brzmi na trzy sposoby: <b>books</b> — /s/, <b>keys</b> — /z/, <b>boxes</b> — /ɪz/. Nie ubezdźwięczniaj /z/ na końcu wyrazu: <b>dogs</b> to nie „doks”.</p>
<h3>This / that — jedna rzecz, these / those — kilka</h3>
<p>W <b>this</b> samogłoska jest krótka (/ɪ/) i na końcu słychać /s/. W <b>these</b> samogłoska jest długa (/iː/), a na końcu słychać /z/. Oba słowa zaczynają się od /ð/, nie od „d” ani „z”.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|To moja torba}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|To moje klucze}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Tamte buty są ładne}}
<h3>My, your, his, her, our, their</h3>
<p>Zaimek dzierżawczy już mówi, czyja to rzecz, więc przedimka obok niego nie stawiamy: <b>my bag</b>, nie <b>my a bag</b>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Czy to twój telefon?}}{{ex:Her brothers live in Krakow.|/hər ˈbrʌðərz ˈlɪv ɪn ˈkrɑːkaʊ/|Jej bracia mieszkają w Krakowie}}
<h3>Dopełniacz saksoński ('s)</h3>
<p>„Pokój mojej siostry” to nie <b>the room of my sister</b>, tylko <b>my sister's room</b>: najpierw właściciel z 's, potem rzecz.</p>
{{ex:my sister's room|/maɪ ˈsɪstərz ˈruːm/|pokój mojej siostry}}
<div class="tip">Po liczbach większych niż jeden, po <b>many</b>, <b>these</b> i <b>those</b> — zawsze liczba mnoga: <b>two friend</b> ✗ → <b>two friends</b> ✓. A z <b>my</b> nie stawiamy przedimka: <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Co pasuje w lukę?",["sister","sisters","a sister","sister's"],1,"Po two — liczba mnoga: sisters."],["___ are my keys. Co pasuje w lukę?",["This","That","These","It"],2,"Keys to liczba mnoga, więc These."],["„To moja torba” po angielsku?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Razem z my nie stawiamy przedimka."]],
practice:[
["mc","„Dwie książki” po angielsku?","two books","two book","two a book","twos book","Więcej niż jedna — liczba mnoga z -s."],
["mc","Forma liczby mnogiej od child?","children","childs","childes","child","To wyjątek: children."],
["mc","___ shoes are nice. (tamte buty)","Those","That","This","It","Shoes to liczba mnoga, więc those."],
["mc","„To moja torba” po angielsku?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","My i przedimek nie stoją razem."],
["mc","Forma liczby mnogiej od box?","boxes","boxs","boxies","box","Po s, x, ch, sh — końcówka -es."],
["or","To moje klucze","These are my keys","key This","Kluczy jest kilka — these i liczba mnoga keys."],
["or","Mam dwoje dzieci","I have two children","child a","Dzieci jest dwoje — liczba mnoga children, bez przedimka a."],
["or","Tamte buty są ładne","Those shoes are nice","That","Shoes to liczba mnoga, więc those."],
["fi","I have three __.","Mam trzy koty","cats","cat|a cat|cat's","Koty są trzy — liczba mnoga cats."],
["fi","__ is my friend.","To mój przyjaciel","This","These|Those|They","Osoba jest jedna — this."],
["fi","Two __, please.","Poproszę dwie kawy","coffees","coffee|a coffee|coffee's","Przy zamawianiu napoje liczymy: two coffees, w liczbie mnogiej."],
["ty","To moje książki","These are my books","these · my · book — liczba mnoga","book","Książek jest kilka — these i liczba mnoga books."],
["ty","Mam dwie siostry","I have two sisters","have · two · sister — liczba mnoga","sister","Siostry są dwie — liczba mnoga sisters."],
["ty","To moja torba","This is my bag","this · my · bag — bez przedimka","a","Z my nie stawiamy przedimka a."]]},
{ id:"present", title:"Present Simple i szyk: podmiot, czasownik, dopełnienie", blurb:"Po polsku wyrazy można przestawiać, po angielsku szyk jest stały.", deck:"O sobie", body:`
<p>Po polsku można powiedzieć „Piję kawę”, „Kawę piję” albo „Kawę piję ja” — końcówki i tak pokażą, kto co robi. W angielskim nie ma przypadków, więc rolę wyrazu pokazuje jego miejsce: <b>kto → co robi → co</b>. I jeszcze jedno: polskie „Piję” obywa się bez „ja”, a angielskie zdanie musi mieć podmiot: <b>I drink coffee</b>, nie <b>Drink coffee</b>.</p>
<h3>Podmiot, potem czasownik, potem dopełnienie</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Piję kawę}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Uczę się angielskiego}}
<h3>Miejsce i czas — na końcu</h3>
<p>Reszta idzie po dopełnieniu: najpierw <b>miejsce</b>, potem <b>czas</b>. Określenia czasu nie wstawiamy między czasownik a dopełnienie: <b>I drink every day coffee</b> ✗.</p>
{{ex:We live in Warsaw.|/wi ˈlɪv ɪn ˈwɔːrsɔː/|Mieszkamy w Warszawie}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|Codziennie uczę się angielskiego}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Pracują w weekendy}}
<h3>Present Simple — zwyczaje i fakty</h3>
<p>Present Simple (czas teraźniejszy prosty) opisuje to, co dzieje się zwykle, i to, co jest zawsze prawdą. Polskie „nie” to tutaj <b>don't</b> przed czasownikiem; samo <b>not</b> nie wystarczy: <b>I not eat meat</b> ✗.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Nie jem mięsa}}
<h3>Jak często: always, usually, sometimes, never</h3>
<p>Te słowa stoją <b>tuż przed</b> czasownikiem (ale po am / is / are: <b>I'm always late</b>). Przysłówki takie jak <b>very well</b> idą na koniec: <b>I understand you very well</b>, nie <b>I very well understand you</b>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Zwykle wstaję o siódmej}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Nigdy nie piję kawy w nocy}}
<div class="tip">Nie przestawiaj wyrazów jak po polsku: <b>Coffee I drink every day.</b> ✗ → <b>I drink coffee every day.</b> ✓ / <b>I very well understand you.</b> ✗ → <b>I understand you very well.</b> ✓</div>`,
check:[["„Piję kawę” — który szyk jest poprawny?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Podmiot, potem czasownik, potem dopełnienie."],["I ___ eat meat. (nie jem) Co pasuje w lukę?",["not","am not","no","don't"],3,"Przeczenie w czasie Present Simple to don't przed czasownikiem."],["Gdzie always stoi poprawnie?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Słowa mówiące, jak często coś robimy, stoją tuż przed czasownikiem."]],
practice:[
["mc","„Uczę się angielskiego” po angielsku?","I study English.","I English study.","I am study English.","Study I English.","Podmiot, czasownik, dopełnienie."],
["mc","„Nie jem mięsa” po angielsku?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Przeczenie to don't przed czasownikiem."],
["mc","„Mieszkamy w Seulu” po angielsku?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","Miejsce stoi po czasowniku."],
["mc","„Zwykle wstaję o siódmej” po angielsku?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","Usually stoi tuż przed czasownikiem."],
["mc","Które zdanie mówi o tym, co robimy codziennie?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Zwyczaj — Present Simple."],
["or","Codziennie piję kawę","I drink coffee every day","the am","Zwyczaj — Present Simple; kawa ogólnie — bez przedimka."],
["or","Czytam dużo książek","I read many books","book","Po many — liczba mnoga books."],
["or","Pracujemy w weekendy","We work on weekends","are","Czasownik to be nie stoi przed innym czasownikiem: nie we are work."],
["fi","I __ like fish.","Nie lubię ryb","don't|do not","not|am not|no","Przeczenie to don't."],
["fi","I __ English every day.","Codziennie uczę się angielskiego","study","am study|studying|to study","W czasie Present Simple po I czasownik ma formę podstawową."],
["fi","They live __ Busan.","Mieszkają w Pusanie","in","at|on|to","Przed nazwą miasta — in."],
["ty","Piję herbatę","I drink tea","drink · tea — bez przedimka","a","Herbata ogólnie — bez przedimka a."],
["ty","Lubię koty","I like cats","like · cat — liczba mnoga","cat","O zwierzętach ogólnie — liczba mnoga cats."],
["ty","Nie jem mięsa","I don't eat meat","don't · eat · meat — „nie” to tutaj don't","am","Przeczenie to don't, nie am not."]]},
{ id:"questions", title:"Pytania: Do you…? i słowa pytające", blurb:"Sama intonacja nie wystarczy: potrzebne jest do, a słowo pytające stoi na samym początku.", deck:"Niezbędnik 2", body:`
<p>Po polsku pytamy słowem „czy” albo samą intonacją: „Lubisz kawę?” — wyrazy są te same co w zdaniu twierdzącym. W angielskim brzmi to jak zdziwienie albo dopytywanie. Zwykłe pytanie buduje się inaczej: zmienia się <b>szyk wyrazów</b>. Dobra podpowiedź: tam, gdzie po polsku stoi „czy”, po angielsku stoi <b>do</b>, <b>does</b>, <b>is</b> albo <b>can</b>.</p>
<h3>Czasownik to be: zamiana miejsc</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Wszystko w porządku?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Czy to twoja torba?}}
<h3>Inne czasowniki: na początku do</h3>
<p>Jeśli w zdaniu jest inny czasownik niż be (<b>like</b>, <b>live</b>, <b>want</b>, <b>speak</b>…), potrzebny jest czasownik posiłkowy <b>do</b>. Staje na początku, a reszta się nie zmienia.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Czy lubisz kawę?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Czy mówisz po angielsku?}}
<p>Krótka odpowiedź też jest z <b>do</b>: <b>Yes, I do.</b> / <b>No, I don't.</b>, nie <b>Yes, I like</b>.</p>
<h3>Słowo pytające idzie pierwsze</h3>
<p><b>what</b> (co), <b>where</b> (gdzie), <b>when</b> (kiedy), <b>who</b> (kto), <b>why</b> (dlaczego), <b>how</b> (jak) stoją na początku, a dalej jest ten sam szyk pytania: czasownik posiłkowy przed podmiotem. „Ile ona ma lat?” to <b>How old is she?</b>, nie <b>How old she is?</b></p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Gdzie mieszkasz?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Czym się zajmujesz?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Gdzie jest toaleta?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Ile to kosztuje?}}
<p>Wewnątrz innego zdania (pytanie pośrednie) szyk wraca do zwykłego: <b>Tell me where she lives.</b> — „Powiedz mi, gdzie ona mieszka”.</p>
<div class="tip">Częste błędy: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓, <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["„Czy lubisz kawę?” po angielsku?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"W pytaniu z like potrzebny jest czasownik posiłkowy do."],["„Gdzie mieszkasz?” po angielsku?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Słowo pytające, do, podmiot, czasownik."],["Jak poprawnie odpowiedzieć na pytanie Do you speak English?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Na pytanie z do odpowiadamy też z do."]],
practice:[
["mc","Jak zapytać kogoś, czy mówi po angielsku?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Pytanie z czasownikiem speak zaczyna się od do."],
["mc","„Gdzie mieszkasz?” po angielsku?","Where do you live?","Where you live?","Where are you live?","Where live you?","Słowo pytające, do, podmiot, czasownik."],
["mc","„Ile to kosztuje?” po angielsku?","How much is this?","How much this is?","How much does this?","What much is this?","O cenę pytamy: How much is…?"],
["mc","Do you like tea? — jak odpowiedzieć?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Na pytanie z do odpowiadamy z do."],
["mc","„Czym się zajmujesz?” (o pracy) po angielsku?","What do you do?","What are you do?","What you do?","What do you?","O zawód pytamy: What do you do?"],
["or","Lubisz kawę?","Do you like coffee","Are the","Pytanie z like — z do; kawa ogólnie — bez przedimka."],
["or","Gdzie jest toaleta?","Where is the bathroom","a do","Chodzi o konkretną toaletę w tym budynku — przedimek the."],
["or","Gdzie mieszkasz?","Where do you live","are","Pytanie z live wymaga czasownika posiłkowego do."],
["fi","__ you like music?","Lubisz muzykę?","Do","Are|Is|Does","Pytanie z like — z Do."],
["fi","__ do you live?","Gdzie mieszkasz?","Where","What|Who|When","O miejsce pytamy where."],
["fi","What time __ it?","Która jest godzina?","is","do|does|are","O godzinę pytamy z czasownikiem to be."],
["ty","Mówisz po angielsku?","Do you speak English|Can you speak English","do · speak · English — pytanie zaczyna się od do","Are","Pytanie z speak zaczyna się od do."],
["ty","Gdzie jest toaleta?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — przedimek the","a","Toaleta, o której obie osoby wiedzą — przedimek the."],
["ty","Lubisz psy?","Do you like dogs","do · like · dog — liczba mnoga","dog","O zwierzętach ogólnie — liczba mnoga dogs."]]},
{ id:"third-s", title:"He / she / it: końcówka -s oraz does / doesn't", blurb:"On, ona, ono — czasownik dostaje końcówkę -s. W pytaniu i przeczeniu — does.", deck:"O sobie", body:`
<p>Po polsku czasownik odmienia się przez osoby: „pracuję — pracujesz — pracuje”, więc sama idea jest znajoma. W angielskim taka zmiana jest tylko jedna: w czasie Present Simple po <b>he, she, it</b> (i po każdym podmiocie w liczbie pojedynczej: <b>my mom</b>, <b>the cafe</b>) czasownik dostaje końcówkę <b>-s</b>. W mowie łatwo ją zgubić, dlatego wymawiaj ją wyraźnie.</p>
<div class="tbl"><table><tr><th>Podmiot</th><th>Czasownik</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Ona pracuje w banku}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|On lubi piłkę nożną}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Moja mama dobrze gotuje}}
<h3>Czasowniki, które zmieniają się trochę bardziej</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Ona ma samochód (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|On wychodzi do pracy o ósmej (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Ona uczy się angielskiego (study → studies)}}
<h3>Przeczenie i pytanie — does</h3>
<p>W zdaniach z <b>doesn't</b> i <b>Does</b> końcówka -s przechodzi na nie, a główny czasownik zostaje w formie podstawowej.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|On nie pije kawy}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Czy ona tu mieszka?}}
<p>Czasowniki modalne, na przykład <b>can</b>, nie dostają -s i nie potrzebują <b>does</b>: <b>She can swim</b>, <b>Can she swim?</b></p>
<div class="tip">Częste błędy: <b>She work here.</b> ✗ → <b>She works here.</b> ✓, <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. Co pasuje w lukę?",["live","lives","living","is live"],1,"Po she czasownik dostaje -s."],["He ___ like coffee. Co pasuje w lukę?",["don't","isn't","doesn't","not"],2,"Przeczenie z he to doesn't."],["„Ona ma samochód” po angielsku?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Po she have zmienia się w has."]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","Brat to jedna osoba (he), więc works."],
["mc","„On nie pije kawy” po angielsku?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Z he — doesn't i forma podstawowa."],
["mc","„Czy ona tu mieszka?” po angielsku?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Po Does czasownik jest bez -s."],
["mc","have → she ___","has","haves","have","is have","Have zmienia się w has."],
["mc","study → he ___","studies","studys","study","studyes","Spółgłoska + y → -ies."],
["or","Ona pracuje w banku","She works at a bank","work the","Po she — works; o miejscu pracy mówimy po raz pierwszy — przedimek a."],
["or","On ma dwa psy","He has two dogs","have dog","Po he — has; psy są dwa — liczba mnoga dogs."],
["or","Ona nie je mięsa","She doesn't eat meat","eats","Po doesn't czasownik jest bez -s."],
["fi","He __ soccer.","On lubi piłkę nożną","likes","like|liking|is like","Po he — likes."],
["fi","__ she speak English?","Czy ona mówi po angielsku?","Does","Do|Is|Are","Pytanie z she — Does."],
["fi","She __ to work at eight.","Ona wychodzi do pracy o ósmej","goes","go|going|gos","Go zmienia się w goes."],
["ty","On ma samochód","He has a car","has · car — przedimek a","have","Po he — has; samochód jest jeden — przedimek a."],
["ty","Ona lubi koty","She likes cats","likes · cat — liczba mnoga","cat","Po she — likes; koty ogólnie — liczba mnoga cats."],
["ty","On tu nie mieszka","He doesn't live here","doesn't · live · here — po doesn't forma podstawowa","lives","Po doesn't — forma podstawowa czasownika."]]},
{ id:"countable", title:"Policzalne i niepoliczalne: some, any, much, many", blurb:"Water, advice, news — bez a i bez -s. Many — z policzalnymi, much — z niepoliczalnymi.", deck:"W restauracji", body:`
<p>Podział na rzeczowniki policzalne i niepoliczalne istnieje też w polskim: „dwa krzesła”, ale nie „dwie wody”. Pułapka polega na tym, że wiele słów oba języki liczą inaczej. „Rady”, „informacje”, „meble” i „wiadomości” to po polsku zwykła liczba mnoga, a „pieniądze” mają tylko liczbę mnogą. Tymczasem <b>advice</b>, <b>information</b>, <b>furniture</b>, <b>news</b> i <b>money</b> są niepoliczalne: bez a, bez -s i z czasownikiem w liczbie pojedynczej.</p>
<div class="tbl"><table><tr><th>Policzalne</th><th>Niepoliczalne</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, advice, news</td></tr><tr><td>można: a / an, liczebnik, -s</td><td>nie można: a / an, liczebnik, -s</td></tr></table></div>
{{ex:The news is good.|/ðə ˈnuːz ɪz ˈgʊd/|Wiadomości są dobre}}
<h3>Some i any</h3>
<p>„Trochę, kilka” w zdaniu twierdzącym to <b>some</b>, w przeczeniu i pytaniu — <b>any</b>. Ale w prośbie i propozycji zostaje <b>some</b>, nawet w pytaniu: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|Mam trochę pieniędzy}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Nie mam żadnych pieniędzy}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Masz jakieś pytania?}}
<h3>Many i much</h3>
<p>Polskie „dużo” i „ile” pasują do wszystkiego. Angielski rozdziela: z policzalnymi <b>many</b> i liczba mnoga, z niepoliczalnymi <b>much</b>. <b>A lot of</b> pasuje do obu.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Ile osób?}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|Ile to kosztuje?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Nie mam dużo czasu}}
<h3>Jak policzyć niepoliczalne</h3>
<p>Potrzebne jest „opakowanie”: szklanka, filiżanka, sztuka. Jedna rada to <b>a piece of advice</b>.</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|szklanka wody}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|filiżanka kawy}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|jedna rada}}
<div class="tip">Częste błędy: <b>advices</b>, <b>informations</b>, <b>much friends</b> ✗ → <b>advice</b>, <b>information</b>, <b>many friends</b> ✓ / <b>The news are bad.</b> ✗ → <b>The news is bad.</b> ✓</div>`,
check:[["How ___ people are there? Co pasuje w lukę?",["much","many","any","a"],1,"People to rzeczownik policzalny, więc many."],["Który z tych rzeczowników jest niepoliczalny?",["apple","chair","water","friend"],2,"Do water nie dodajemy ani a, ani -s."],["I don't have ___ money. Co pasuje w lukę?",["some","a","many","any"],3,"W przeczeniu — any."]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","Water jest niepoliczalne: ani a, ani many. W prośbie — some."],
["mc","How ___ time do we have?","much","many","any","a","Time jest niepoliczalne, więc much."],
["mc","„Masz jakieś pytania?” po angielsku?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Po any rzeczownik policzalny stoi w liczbie mnogiej."],
["mc","„Szklanka wody” po angielsku?","a glass of water","a water glass of","one waters","a glass water","Niepoliczalne liczymy przez a glass of."],
["mc","I have ___ friends in Seoul.","many","much","a","an","Friends to rzeczownik policzalny w liczbie mnogiej, więc many."],
["or","Mam trochę pieniędzy","I have some money","a moneys","Money jest niepoliczalne: bez przedimka a i bez -s."],
["or","Poproszę dwa jabłka","Two apples please","apple","Jabłka są dwa — liczba mnoga apples."],
["or","Nie mam dużo czasu","I don't have much time","many","Time jest niepoliczalne, więc much."],
["fi","How __ is this?","Ile to kosztuje?","much","many|any|some","O cenę pytamy how much."],
["fi","I don't have __ questions.","Nie mam żadnych pytań","any","some|much|a","W przeczeniu — any."],
["fi","a cup __ coffee","filiżanka kawy","of","for|in|a","Liczymy przez a cup of."],
["ty","Mogę prosić o trochę wody?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — bez przedimka","a","Water jest niepoliczalne: zamiast przedimka a — some."],
["ty","Masz jakieś pytania?","Do you have any questions","any · question — liczba mnoga","question","Po any rzeczownik policzalny stoi w liczbie mnogiej: questions."],
["ty","Ile osób?","How many people","how many · people — ile, gdy można policzyć","much","People to rzeczownik policzalny, więc many."]]},
{ id:"object-have", title:"Me, him, her i czasownik have", blurb:"Po czasowniku nie I, tylko me. A have to „mieć” — i nie tylko.", deck:"O sobie", body:`
<p>Przypadków w angielskim prawie nie ma, ale zaimki osobowe zachowały dwie formy. Po czasowniku albo przyimku potrzebna jest forma dopełnienia: „mnie”, „mi”, „mną” — to wszystko <b>me</b>.</p>
<div class="tbl"><table><tr><th>Kto robi</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Kogo / komu</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Ona mnie zna}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Lubię go}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Możesz nam pomóc?}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|Pracuję z nią}}
<h3>Have: mieć</h3>
<p>„Mam samochód” to <b>I have a car</b> — konstrukcja jest taka sama jak w polskim. Trzeba tylko pamiętać o podmiocie <b>I</b> i o przedimku <b>a</b>. Tak mówimy o rodzinie, rzeczach i czasie.</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|Mam dwóch braci}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Masz długopis?}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|Nie mam czasu}}
<p>Uwaga na wiek i głód: po polsku „mam 20 lat”, po angielsku <b>I'm 20</b>, nie <b>I have 20 years</b>. „Chce mi się jeść” to <b>I'm hungry</b>.</p>
<h3>Have: jeść, pić</h3>
<p><b>Have</b> znaczy też „jeść, pić”. Przed nazwą posiłku nie stawiamy przedimka: <b>have lunch</b>.</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Zjedzmy lunch}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|Co rano piję kawę}}
<h3>Rzeczy to it. A „swój”?</h3>
<p>„Telefon — on”, „książka — ona” to polski rodzaj gramatyczny. W angielskim każda rzecz to <b>it</b>. Z kolei polskie „swój” nie ma jednego odpowiednika: wybieramy <b>my</b>, <b>your</b>, <b>his</b> albo <b>her</b> według podmiotu. „Lubię swoją pracę” to <b>I like my job</b>, „Ona lubi swoją pracę” — <b>She likes her job</b>.</p>
{{ex:My phone is old. It doesn't work.|/maɪ ˈfoʊn ɪz ˈoʊld ‖ ɪt ˈdʌznt ˈwɜːrk/|Mój telefon jest stary. Nie działa}}
<div class="tip">Częste błędy: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓, <b>I have 20 years.</b> ✗ → <b>I'm 20.</b> ✓, o telefonie <b>He doesn't work.</b> ✗ → <b>It doesn't work.</b> ✓</div>`,
check:[["I like ___. (jego) Co pasuje w lukę?",["he","his","him","he's"],2,"Po czasowniku — forma dopełnienia him."],["Can you help ___? (nam) Co pasuje w lukę?",["us","we","our","ours"],0,"Po czasowniku — forma dopełnienia us."],["„Masz długopis?” po angielsku?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"Have to nie czasownik to be, więc pytanie tworzymy z czasownikiem posiłkowym do."]],
practice:[
["mc","She knows ___. (mnie)","me","I","my","mine","Po czasowniku — me."],
["mc","I like ___. (ich)","them","they","their","theirs","Po czasowniku — forma dopełnienia them."],
["mc","„Możesz nam pomóc?” po angielsku?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Po czasowniku — us."],
["mc","„Zjedzmy lunch” po angielsku?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Przed nazwą posiłku nie stawiamy przedimka."],
["mc","„Mam dwóch braci” po angielsku?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","O rodzinie mówimy z have; braci jest dwóch — liczba mnoga."],
["or","Masz długopis?","Do you have a pen","the pens","Może to być dowolny długopis, jeden — przedimek a i pen bez -s."],
["or","Lubię ją","I like her","she","Po czasowniku — forma dopełnienia her."],
["or","Mam dwie siostry","I have two sisters","sister a","Siostry są dwie — liczba mnoga sisters, bez przedimka a."],
["fi","Call __ tonight.","Zadzwoń do mnie dziś wieczorem","me","I|my|mine","Po czasowniku — me."],
["fi","I work with __.","Pracuję z nim","him","he|his|he's","Po przyimku też stoi forma dopełnienia."],
["fi","She __ a dog.","Ona ma psa","has","have|is|haves","Po she — has."],
["ty","Możesz mi pomóc?","Can you help me|Could you help me","can you · help · me — kogo / komu: me","I","Po czasowniku — me."],
["ty","Masz długopis?","Do you have a pen","do you have · pen — przedimek a","the","Chodzi o dowolny długopis — przedimek a."],
["ty","Mam wielu przyjaciół","I have many friends|I have a lot of friends","have · many · friend — liczba mnoga","friend","Po many — liczba mnoga friends."]]},
{ id:"can-like", title:"Can, like + -ing i I'd like: co umiesz i na co masz ochotę", blurb:"Jak powiedzieć, co umiesz, co lubisz robić i na co masz ochotę właśnie teraz.", deck:"Pogawędki", body:`
<p>Trzy konstrukcje, które przydają się od razu — i w rozmowie o sobie, i przy zamawianiu.</p>
<h3>Can: umiem, mogę, potrafię</h3>
<p>Polskie „umiem”, „mogę” i „potrafię” to po angielsku jedno <b>can</b> + forma podstawowa, bez <b>to</b>. Po <b>he</b> i <b>she</b> nie dodajemy -s: <b>he can swim</b>.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Umiem pływać}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Nie umiem prowadzić samochodu}}{{ex:Can you speak Polish?|/kən ju ˈspiːk ˈpoʊlɪʃ/|Mówisz po polsku?}}
<h3>Like + -ing: lubię coś robić</h3>
<p>O hobby mówimy tak: <b>like</b> / <b>love</b> + czasownik z końcówką -ing. W polskim „podoba mi się” podmiotem jest rzecz, która się podoba. W angielskim podmiotem jest osoba: „Podoba mi się to” → <b>I like it</b>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Lubię gotować}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Uwielbiam oglądać filmy}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Nie lubię biegać}}
<p>„Bardzo lubię” to nie <b>I very like</b>: <b>very</b> nie stoi przed czasownikiem. Mówimy <b>I really like it</b> albo <b>I like it very much</b>.</p>
{{ex:I really like it.|/aɪ ˈriːəli ˈlaɪk ɪt/|Bardzo to lubię}}
<h3>I'd like: poproszę</h3>
<p><b>I like</b> znaczy „lubię w ogóle”, <b>I'd like</b> — „mam ochotę teraz”, uprzejmie. W kawiarni potrzebne jest właśnie <b>I'd like</b>, odpowiednik polskiego „poproszę”.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Poproszę kawę}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Napijesz się herbaty?}}
<div class="tip">Częste błędy: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓, w kawiarni <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓, <b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["She can ___ very well. Co pasuje w lukę?",["sings","sing","singing","to sing"],1,"Po can — forma podstawowa."],["„Lubię gotować” po angielsku?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Po like — forma -ing."],["Co brzmi najbardziej naturalnie przy zamawianiu w kawiarni?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"To, na co mamy ochotę teraz — I'd like."]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","Po can — forma podstawowa."],
["mc","„Nie umiem prowadzić samochodu” po angielsku?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Przeczenie od can to can't."],
["mc","„Lubię oglądać filmy” po angielsku?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Po like — forma -ing; filmy ogólnie — liczba mnoga movies."],
["mc","Zamówienie w kawiarni: „Poproszę kawę”","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","To, na co mamy ochotę teraz — I'd like."],
["mc","„Napijesz się herbaty?” po angielsku?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Propozycję zaczynamy od Would you like…?"],
["or","Poproszę kawę","I'd like a coffee please","the coffees","Jedna kawa — przedimek a i coffee bez -s."],
["or","Lubię czytać książki","I like reading books","book read","Po like — forma -ing; książki ogólnie — liczba mnoga books."],
["or","Umiesz pływać?","Can you swim","swimming","Po can — forma podstawowa."],
["fi","I can't __.","Nie umiem pływać","swim","swimming|swims|to swim","Po can't — forma podstawowa."],
["fi","I like __ music.","Lubię słuchać muzyki","listening to","listen to|listen|to listening","Po like — forma -ing; „słuchać czegoś” to listen to."],
["fi","__ like a sandwich, please.","Poproszę kanapkę","I'd|I would","I|I'm|I can","Zamawiamy z I'd like."],
["ty","Lubię gotować","I like cooking|I love cooking|I like to cook","like · cook — z końcówką -ing","cook","Po like — forma -ing."],
["ty","Poproszę kanapkę","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — przedimek a","the","Dowolna kanapka, jedna — przedimek a."],
["ty","Lubię psy","I like dogs|I love dogs","like · dog — liczba mnoga","dog","Psy ogólnie — liczba mnoga dogs."]]},
{ id:"continuous", title:"Present Continuous: be + -ing, czyli to, co dzieje się teraz", blurb:"To, co zwykle — Present Simple. To, co dzieje się w tej chwili — be + -ing.", deck:"Pogawędki", body:`
<p>„Czytam” znaczy po polsku i „czytam wieczorami”, i „czytam w tej chwili”. W angielskim to dwa różne czasy. To, co dzieje się <b>w tym momencie</b>, wyraża Present Continuous: <b>be + czasownik z -ing</b>. Polski aspekt niedokonany tu nie pomoże: „czytam” to raz <b>I read</b>, a raz <b>I'm reading</b>.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Teraz pracuję}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Ona gotuje kolację}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Pada deszcz}}
<p>Końcówkę <b>-ing</b> wymawiamy /ɪŋ/, bez „k” na końcu: <b>working</b>, nie „workink”.</p>
<h3>Pytanie i przeczenie</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Co robisz?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Słuchasz?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Nie śpię}}
<h3>Porównaj z Present Simple</h3>
<div class="tbl"><table><tr><th>Zwykle (Present Simple)</th><th>Teraz (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Czasowniki bez -ing</h3>
<p><b>like</b>, <b>know</b>, <b>want</b>, <b>need</b>, <b>understand</b> oraz <b>have</b> w znaczeniu „mieć” opisują <b>stan</b>, a nie czynność. Nawet o tym, co jest teraz, mówimy nimi w czasie Present Simple: „Rozumiem” to <b>I understand</b>, nie <b>I'm understanding</b>.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Znam go}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Chcę trochę wody}}
<div class="tip">Nie gub czasownika to be: <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing him.</b> ✗ → <b>I know him.</b> ✓</div>`,
check:[["„Co teraz robisz?” po angielsku?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"O to, co dzieje się teraz, pytamy z be + -ing."],["I ___ coffee every morning. Co pasuje w lukę?",["am drinking","drinking","drink","am drink"],2,"Zwyczaj — Present Simple."],["Które zdanie jest poprawne?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"Know, want i have w znaczeniu „mieć” nie łączą się z -ing."]],
practice:[
["mc","„Teraz pracuję” po angielsku?","I'm working now.","I work now am.","I'm work now.","I working now.","To, co dzieje się teraz — be + -ing."],
["mc","„Ona gotuje kolację” po angielsku?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing; przed nazwą posiłku nie ma przedimka."],
["mc","Które zdanie mówi o tym, co robimy codziennie?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Zwyczaj — Present Simple."],
["mc","„Co robisz?” po angielsku?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Słowo pytające, be, podmiot, forma -ing."],
["mc","„Znam go” po angielsku?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","Know nie łączy się z -ing."],
["or","Czytam książkę","I'm reading a book","read books","Jedna książka, którą teraz czytam — przedimek a i book bez -s."],
["or","Dzieci się bawią","The kids are playing","kid is","Dzieci jest kilkoro — liczba mnoga kids i are."],
["or","Teraz pada deszcz","It's raining now","rains","To, co dzieje się teraz — be + -ing."],
["fi","I'm __ TV.","Oglądam telewizję","watching","watch|watches|to watch","Po be — forma -ing."],
["fi","What __ you doing?","Co robisz?","are","do|is|does","Z you — are."],
["fi","She __ working today.","Ona dziś nie pracuje","isn't|is not","doesn't|don't|not","Przeczenie w be + -ing to isn't."],
["ty","Teraz gotuję","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — z końcówką -ing","cook","To, co dzieje się teraz — be + -ing."],
["ty","Oglądam film","I'm watching a movie","I'm · watching · movie — przedimek a","the","Jakiś jeden film — przedimek a."],
["ty","Dzieci śpią","The kids are sleeping|The children are sleeping","kids · are · sleeping — liczba mnoga","kid","Dzieci jest kilkoro — liczba mnoga kids i are."]]},
{ id:"past", title:"Past Simple: was / were i końcówka -ed", blurb:"Czasownik to be ma formy was i were, pozostałe dostają -ed. W pytaniu i przeczeniu — did.", deck:"Pogawędki", body:`
<p>W polskim jest jeden czas przeszły, a „zrobiłem” i „robiłem” różnią się aspektem. W angielskim oba najczęściej oddaje Past Simple: <b>I worked</b>. Aspekt nie wybiera czasu. I dobra wiadomość: angielska forma przeszła nie pokazuje płci — „byłem” i „byłam” to jedno <b>I was</b>.</p>
<h3>Czasownik to be: was / were</h3>
<p><b>I</b>, <b>he</b>, <b>she</b>, <b>it</b> — <b>was</b>; <b>you</b>, <b>we</b>, <b>they</b> — <b>were</b>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Byłam zmęczona}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Było fajnie}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Byliśmy w domu}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Byłeś zajęty?}}
<h3>Pozostałe czasowniki: -ed</h3>
<p>Do czasownika dodajemy <b>-ed</b>; forma jest jedna dla wszystkich osób. Końcówka brzmi na trzy sposoby: <b>worked</b> — /t/, <b>called</b> — /d/, <b>wanted</b> — /ɪd/. Po innych głoskach niż t i d nie jest osobną sylabą: <b>asked</b> to /ˈæskt/, nie „ask-ed”. W <b>played</b> na końcu jest dźwięczne /d/ — nie ubezdźwięczniaj go.</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Wczoraj pracowałem}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Obejrzeliśmy film}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Zadzwoniła do mnie}}
<h3>Przeczenie i pytanie — did</h3>
<p>W zdaniach z <b>didn't</b> i <b>Did</b> czas przeszły pokazuje już <b>did</b>, a czasownik wraca do formy podstawowej.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Wczoraj nie pracowałam}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Dzwoniłaś do mnie?}}
<div class="tip">Częste błędy: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓, <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Co pasuje w lukę?",["was","were","did","are"],1,"Z they — were."],["„Wczoraj nie pracowałem” po angielsku?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Po didn't — forma podstawowa."],["Did you ___ the movie? Co pasuje w lukę?",["watch","watched","watching","watches"],0,"Po Did — forma podstawowa."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","Z I — was."],
["mc","„Obejrzeliśmy film” po angielsku?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Czas przeszły czasownika regularnego — końcówka -ed."],
["mc","„Dzwoniłeś wczoraj?” po angielsku?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Po Did — forma podstawowa."],
["mc","„Było fajnie” po angielsku?","It was fun.","It were fun.","It did fun.","It funned.","Z it — was."],
["mc","„Byłaś zajęta?” po angielsku?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","Busy to przymiotnik, innego czasownika tu nie ma, więc pytanie tworzymy z czasownikiem to be."],
["or","Obejrzeliśmy film","We watched a movie","watch movies","Jeden film — przedimek a i movie bez -s."],
["or","Grałam z przyjaciółmi","I played with my friends","friend play","Przyjaciół jest kilkoro — liczba mnoga friends."],
["or","Wczoraj nie pracowałem","I didn't work yesterday","worked","Po didn't — forma podstawowa."],
["fi","We __ at home last night.","Wczoraj wieczorem byliśmy w domu","were","was|did|are","Z we — were."],
["fi","I __ soccer yesterday.","Wczoraj grałem w piłkę nożną","played","play|playing|was play","Czas przeszły — końcówka -ed."],
["fi","__ you work yesterday?","Pracowałaś wczoraj?","Did","Were|Do|Was","Pytanie w czasie przeszłym — Did."],
["ty","Byłem zmęczony","I was tired","was · tired — czas przeszły od to be","were","Z I — was."],
["ty","Obejrzałam film (watch)","I watched a movie","watched · movie — przedimek a","the","Jeden film — przedimek a."],
["ty","Zadzwoniłem do moich przyjaciół","I called my friends","called · my · friend — liczba mnoga","friend","Przyjaciół jest kilkoro — liczba mnoga friends."]]},
{ id:"irregular-past", title:"Czasowniki nieregularne: went, ate, saw", blurb:"Najczęstsze czasowniki są nieregularne. Zaczynamy od dwunastu.", deck:"Pogawędki", body:`
<p>„Trzy formy czasownika” pamięta się ze szkoły. Tutaj potrzebna jest druga forma — do czasu Past Simple. Najczęstsze czasowniki mają ją <b>nieregularną</b>, dlatego uczymy się ich parami.</p>
<div class="tbl"><table><tr><th>Forma podstawowa</th><th>Past Simple</th><th>Forma podstawowa</th><th>Past Simple</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Krakow.|/aɪ ˈwent tə ˈkrɑːkaʊ/|Pojechałam do Krakowa}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Jedliśmy pizzę}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Obejrzałem film}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Spotkałam się z przyjaciółmi}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Kupiłem książkę}}
<h3>W pytaniu i przeczeniu — forma podstawowa</h3>
<p>Czas przeszły pokazuje już <b>did</b>, więc czasownik wraca do formy podstawowej.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Co robiłeś?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Dokąd poszłaś?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Nie poszedłem}}
<div class="tip">Częste błędy: <b>I goed.</b> ✗ → <b>I went.</b> ✓, <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Forma Past Simple od go?",["goed","gone","went","going"],2,"Czas przeszły od go to went."],["„Co robiłeś?” po angielsku?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Po did — forma podstawowa do."],["I didn't ___ breakfast. Co pasuje w lukę?",["ate","eaten","eats","eat"],3,"Po didn't — forma podstawowa."]],
practice:[
["mc","Forma Past Simple od eat?","ate","eated","eat","eaten","Czas przeszły od eat to ate."],
["mc","„Dokąd poszłaś?” po angielsku?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Po did — forma podstawowa."],
["mc","„Kupiłem książkę” po angielsku?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Buy — bought; książka jest jedna — przedimek a."],
["mc","Forma Past Simple od see?","saw","seed","seen","sawed","Czas przeszły od see to saw."],
["mc","„Nie poszłam” po angielsku?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Po didn't — forma podstawowa."],
["or","Obejrzałem film","I saw a movie","see movies","See — saw; film jest jeden — przedimek a i movie bez -s."],
["or","Jedliśmy pizzę","We ate pizza","eated","Czas przeszły od eat to ate."],
["or","Spotkałam się z przyjaciółmi","I met my friends","friend meet","Przyjaciół jest kilkoro — liczba mnoga friends."],
["fi","I __ to Jeju last year.","W zeszłym roku pojechałem na Czedżu","went","go|goed|gone","Czas przeszły od go to went."],
["fi","What did you __?","Co jadłaś?","eat","ate|eaten|eating","Po did — forma podstawowa."],
["fi","She __ a new phone.","Ona kupiła nowy telefon","bought","buyed|buy|buys","Czas przeszły od buy to bought."],
["ty","Pojechałam do Pusanu","I went to Busan","went · to · Busan — czas przeszły od go","go","Czas przeszły od go to went."],
["ty","Kupiłem książkę","I bought a book","bought · book — przedimek a","the","Książka jest jedna — przedimek a."],
["ty","Spotkałem się z moimi przyjaciółmi","I met my friends|I saw my friends","met · my · friend — liczba mnoga","friend","Przyjaciół jest kilkoro — liczba mnoga friends."]]},
{ id:"the", title:"Jeszcze raz the: kiedy stawiać, a kiedy nie", blurb:"Pierwszy raz — a, coś już znanego — the, a gdy mówimy ogólnie — bez przedimka.", deck:"Droga i transport", body:`
<p>Przedimków nie da się opanować za jednym razem. W polskim ich nie ma, więc najczęstszy błąd to po prostu ich brak: <b>Close door</b>, <b>Sun is hot</b>. Dlatego większa część tej lekcji mówi o tym, kiedy <b>the</b> jest potrzebne, a krótsza — kiedy przedimka nie stawiamy wcale.</p>
<h3>Pierwszy raz — a, drugi raz — the</h3>
<p>Gdy słuchacz słyszy o czymś po raz pierwszy — <b>a</b>. Gdy była już o tym mowa i wiadomo, o którą rzecz chodzi — <b>the</b>.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Kupiłam koszulę. Koszula jest niebieska}}
<h3>Wiadomo z sytuacji — the</h3>
<p>Okno w tym pokoju, stacja w pobliżu, słońce — obie osoby wiedzą, o co chodzi, więc <b>the</b> stawiamy od razu. „Zamknij drzwi” to <b>Close the door</b>, a „Słońce dziś mocno grzeje” — <b>The sun is hot today</b>, nie <b>Sun is hot</b>. Przy tym <b>the</b> to nie tłumaczenie słowa „ten”: pokazuje tylko, że rzecz jest znana.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Możesz otworzyć okno?}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|Gdzie jest stacja metra?}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|Słońce dziś mocno grzeje}}
<h3>Bez przedimka</h3>
<p>Błąd w drugą stronę to zbędne <b>the</b>. Przedimka nie ma, gdy mówimy o czymś ogólnie (<b>I like music</b>, <b>Life is short</b>), przy większości nazw miast i krajów (<b>in Poland</b>, <b>to Gdansk</b>, nie <b>to the Gdansk</b>) oraz w stałych wyrażeniach o miejscu, transporcie i posiłkach — tych uczymy się w całości.</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|Lubię muzykę}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|Życie jest krótkie}}{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Jeżdżę do pracy autobusem}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Jestem w domu}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|Chodzę spać o jedenastej}}
<div class="tip">Zadaj sobie pytanie: „Czy słuchacz wie, <b>o którą rzecz</b> chodzi?” Wie — <b>the</b>. Nie wie — <b>a</b>. Mowa o czymś ogólnie — bez przedimka.</div>`,
check:[["I have a cat. ___ cat is white. Co pasuje w lukę?",["A","An","The","(nic)"],2,"O kocie była już mowa — przedimek the."],["I go to ___ work by bus. Co pasuje w lukę?",["a","the","an","(nic)"],3,"W wyrażeniu go to work nie stawiamy przedimka."],["Jak poprosić o otwarcie okna w tym pokoju?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Okno, o którym obie osoby wiedzą — przedimek the."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","O koszuli była już mowa — przedimek the."],
["mc","„Gdzie jest stacja?” (ta w pobliżu) po angielsku?","Where's the station?","Where's a station?","Where's station?","Where the station?","Stacja w pobliżu, o której obie osoby wiedzą — przedimek the."],
["mc","Które zdanie jest poprawne?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","W wyrażeniach go to work i by bus nie ma przedimka."],
["mc","„Słońce jest gorące” po angielsku?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Rzecz jedyna w swoim rodzaju — przedimek the."],
["mc","„Jestem w domu” po angielsku?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","W wyrażeniu at home nie ma przedimka."],
["or","Możesz otworzyć okno?","Can you open the window","a windows","Okno, o którym obie osoby wiedzą — przedimek the."],
["or","Jeżdżę do pracy autobusem","I go to work by bus","the a","W wyrażeniach go to work i by bus nie stawiamy przedimka."],
["or","Pies, o którym mówiłam, jest duży","The dog is big","A dogs","Pies jest już znany — przedimek the."],
["fi","I saw a movie. __ movie was great.","Obejrzałam film. Film był świetny","The","A|An|Some","O filmie była już mowa — przedimek the."],
["fi","Where's __ bathroom?","Gdzie jest toaleta?","the","a|an|some","Toaleta w tym budynku — przedimek the."],
["fi","I have __ idea.","Mam pomysł","an","a|the|some","Pomysł jest nowy, a wyraz idea zaczyna się w wymowie od samogłoski — przedimek an."],
["ty","Możesz zamknąć drzwi?","Can you close the door|Could you close the door","can you · close · door — przedimek the","a","Drzwi, o których obie osoby wiedzą — przedimek the."],
["ty","Gdzie jest stacja? (ta w pobliżu)","Where is the station|Where's the station","where · station — przedimek the","a","Stacja w pobliżu, o której obie osoby wiedzą — przedimek the."],
["ty","Jestem w domu","I'm at home|I'm home","I'm · at · home — bez przedimka","the","Przed home nie stawiamy przedimka."]]},
{ id:"adjectives", title:"Przymiotniki i stopniowanie: bigger, more expensive, the best", blurb:"Przymiotnik stoi przed rzeczownikiem. Stopień wyższy: -er albo more, najwyższy: the -est albo the most.", deck:"Zakupy i płatności", body:`
<p>Przymiotnik stoi <b>przed</b> rzeczownikiem, jak w polskim, albo <b>po</b> czasowniku to be. I się nie odmienia: <b>big</b> pasuje do każdego rzeczownika, bez rodzajów, liczb i przypadków.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|duża torba}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Ta torba jest duża}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|Jest za mały}}
<h3>Stopniowanie: -er albo more</h3>
<p>Krótkie przymiotniki dostają <b>-er</b>, przed długimi stawiamy <b>more</b>. Polskie „niż” i „od” to <b>than</b>: „lepszy ode mnie” → <b>better than me</b>, nie <b>better from me</b>. Obu sposobów nie łączymy: <b>more better</b> ✗, <b>more cheaper</b> ✗.</p>
<div class="tbl"><table><tr><th>Stopień równy</th><th>Stopień wyższy</th><th>Stopień najwyższy</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Ten jest tańszy}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Jest droższy niż tamten}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Macie większy rozmiar?}}
<p><b>Enough</b> stoi po przymiotniku: <b>big enough</b>, nie <b>enough big</b>. Uwaga też na pary z -ed i -ing: <b>I'm bored</b> to „nudzę się”, a <b>I'm boring</b> — „jestem nudną osobą”; „interesuję się” to <b>I'm interested</b>, nie <b>I'm interesting</b>.</p>
<h3>Stopień najwyższy — z the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|To najlepsza restauracja w okolicy}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Który jest najtańszy?}}
<div class="tip">Częste błędy: <b>more cheaper</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>better</b> ✓. Końcówki <b>-er</b> i słowa <b>more</b> nie używamy razem.</div>`,
check:[["Stopień wyższy od big?",["more big","biger","bigger","most big"],2,"Big to krótki przymiotnik, więc -er. Kończy się na jedną samogłoskę i jedną spółgłoskę, dlatego g się podwaja: bigger (w cheap samogłoski są dwie: cheaper)."],["This is ___ expensive than that. Co pasuje w lukę?",["more","most","much","very"],0,"Długi przymiotnik stopniujemy z more."],["Stopień najwyższy od good?",["the goodest","the most good","the better","the best"],3,"Trzy stopnie: good — better — the best."]],
practice:[
["mc","Stopień wyższy od cheap?","cheaper","more cheap","cheapper","most cheap","Krótki przymiotnik — końcówka -er."],
["mc","„Ten jest droższy” po angielsku?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Przed długim przymiotnikiem — more."],
["mc","„Macie większy rozmiar?” po angielsku?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Kolejność: przedimek, przymiotnik, rzeczownik."],
["mc","Stopień wyższy od good?","better","gooder","more good","best","Trzy stopnie: good — better — best."],
["mc","„To najlepsza restauracja” po angielsku?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Przed stopniem najwyższym — the."],
["or","Macie większy rozmiar?","Do you have a bigger size","the sizes","Chodzi o jakiś jeden rozmiar — przedimek a."],
["or","Ten jest najtańszy","This is the cheapest","a cheaper","Przed stopniem najwyższym — przedimek the."],
["or","Ten jest tańszy niż tamten","This is cheaper than that","more","Do formy z -er nie dodajemy more."],
["fi","It's __ small.","Jest za mały","too","much|more|most","„Za”, „zbyt” to too."],
["fi","This is cheaper __ that one.","Ten jest tańszy niż tamten","than","then|that|more","„Niż” to than."],
["fi","It's the __ expensive one.","To ten najdroższy","most","more|much|very","Stopień najwyższy długiego przymiotnika — the most."],
["ty","Macie mniejszy rozmiar?","Do you have a smaller size","smaller · size — przedimek a","the","Chodzi o jakiś jeden rozmiar — przedimek a."],
["ty","Ten jest najlepszy","This is the best|This one is the best","the · best — przedimek the","a","Przed stopniem najwyższym — przedimek the."],
["ty","Ten jest tańszy","This is cheaper|This one is cheaper","cheap — stopień wyższy","more","Krótki przymiotnik — końcówka -er."]]},
{ id:"going-to", title:"Plany: be going to", blurb:"O tym, co już postanowione — be going to + czasownik.", deck:"Pogawędki", body:`
<p>„Zamierzam”, „mam zamiar”, „wybieram się” — o planie <b>ustalonym wcześniej</b> mówimy tak: <b>be + going to + forma podstawowa</b>. Czasownik to be jest tu obowiązkowy.</p>
{{ex:I'm going to visit Krakow.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˈkrɑːkaʊ/|Zamierzam odwiedzić Kraków}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Ona zamierza kupić samochód}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Zamierzamy zjeść kolację}}
<h3>Przeczenie i pytanie</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Nie zamierzam iść}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Zamierzasz przyjść?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Co zamierzasz robić w ten weekend?}}
<h3>Przewidywanie na podstawie tego, co widać</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Zaraz będzie padać}}
<h3>Określenia czasu</h3>
<p><b>tomorrow</b> (jutro), <b>tonight</b> (dziś wieczorem), <b>this weekend</b> (w ten weekend), <b>next week</b> (w przyszłym tygodniu) stoją zwykle na końcu zdania.</p>
<div class="tip">W mowie <b>going to</b> brzmi jak <b>gonna</b>. I nie gub <b>be</b>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["„Jutro spotykam się z przyjacielem” (plan) po angielsku?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + forma podstawowa."],["She ___ going to study. Co pasuje w lukę?",["am","are","is","be"],2,"Z she — is."],["„Co zamierzasz robić w ten weekend?” po angielsku?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Słowo pytające, be, podmiot, going to."]],
practice:[
["mc","„Zamierzam pojechać do Pusanu” po angielsku?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + forma podstawowa."],
["mc","They ___ going to come.","are","is","am","be","Z they — are."],
["mc","„Zaraz będzie padać” po angielsku?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Po going to — forma podstawowa."],
["mc","„Nie zamierzam iść” po angielsku?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Not stoi po czasowniku to be."],
["mc","„Zamierzasz przyjść?” po angielsku?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Czasownik to be przechodzi na początek."],
["or","Ona zamierza kupić samochód","She's going to buy a car","the cars","Samochód jest jeden — przedimek a i car bez -s."],
["or","Zamierzam spotkać się z przyjaciółmi","I'm going to meet my friends","friend","Przyjaciół jest kilkoro — liczba mnoga friends."],
["or","Zamierzamy zjeść kolację","We're going to have dinner","a","Przed dinner (nazwa posiłku) nie stawiamy przedimka."],
["fi","I'm going __ study tonight.","Dziś wieczorem zamierzam się uczyć","to","for|at|will","going to + forma podstawowa."],
["fi","__ you going to come?","Zamierzasz przyjść?","Are","Do|Is|Will","Z you — Are."],
["fi","It's going to __ tomorrow.","Jutro będzie padać","rain","rains|raining|rained","Po going to — forma podstawowa."],
["ty","Zamierzam obejrzeć film","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — przedimek a","the","Jakiś jeden film — przedimek a."],
["ty","Co zamierzasz robić?","What are you going to do","what · going to · do — pytanie o plany","will","O plany pytamy z be going to."],
["ty","Zamierzam spotkać się z moimi przyjaciółmi","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — liczba mnoga","friend","Przyjaciół jest kilkoro — liczba mnoga friends."]]},
{ id:"joining", title:"Łączenie zdań: and, but, or, so, because", blurb:"Dwa krótkie zdania — w jedno. So i because stoją w różnych miejscach.", deck:"Emocje i reakcje", body:`
<p>Gdy mówimy samymi krótkimi zdaniami, wypowiedź brzmi nienaturalnie. Pięć słów wystarczy, żeby połączyć je w jedno zdanie.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Lubię kawę i herbatę}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Jestem zmęczony, ale szczęśliwy}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Kawa czy herbata?}}
<h3>so: więc</h3>
<p><b>Przyczyna + so + skutek</b>, jak w polskim „…, więc…”.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Byłam zmęczona, więc poszłam do domu}}
<h3>because: bo, ponieważ</h3>
<p><b>Skutek + because + przyczyna</b>, jak „…, bo…”. Uwaga na przecinek: po polsku stawiamy go przed każdym „bo”, „że” i „żeby”, a po angielsku przed <b>because</b> i <b>that</b> zwykle go nie ma: <b>I think, that he is right</b> ✗ → <b>I think that he is right</b> ✓.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Poszedłem do domu, bo byłem zmęczony}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Zostałam w domu, bo padało}}
<h3>too: też</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Też to lubię}}
<h3>„Co” — that czy what</h3>
<p>„Wszystko, czego potrzebujesz” to <b>everything that you need</b>, nie <b>everything what you need</b>. Gdy przed polskim „co” stoi słowo, do którego się ono odnosi (<b>everything</b>, <b>something</b>), potrzebne jest <b>that</b>. <b>What</b> pojawia się wtedy, gdy takiego słowa nie ma: <b>I know what you need.</b></p>
<div class="tip"><b>So</b> i <b>because</b> nie występują razem w jednym zdaniu: <b>Because I was tired, so I went home.</b> ✗. Wybierz jedno z nich.</div>`,
check:[["I was sick, ___ I stayed home. Co pasuje w lukę?",["because","but","so","or"],2,"Najpierw przyczyna, potem skutek — so."],["I stayed home ___ I was sick. Co pasuje w lukę?",["because","so","but","and"],0,"Najpierw skutek, potem przyczyna — because."],["„Kawa czy herbata?” — jak zapytać po angielsku?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Wybór jednego z dwojga — or."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","Przeciwstawienie — but."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","Najpierw przyczyna, potem skutek — so."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","Najpierw skutek, potem przyczyna — because."],
["mc","„Kawa czy herbata?” po angielsku?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Jedno z dwojga — or."],
["mc","„Jestem zmęczona, ale szczęśliwa” po angielsku?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","„Ale” to but."],
["or","Lubię koty i psy","I like cats and dogs","cat dog","Zwierzęta ogólnie — liczba mnoga cats, dogs."],
["or","Poproszę kawę i kanapkę","A coffee and a sandwich please","the or","Zamawiamy po jednej sztuce — przy każdym rzeczowniku przedimek a."],
["or","Byłem głodny, więc zjadłem","I was hungry so I ate","because","Najpierw przyczyna, potem skutek — so."],
["fi","I'm tired __ happy.","Jestem zmęczony, ale szczęśliwy","but","so|because|or","„Ale” to but."],
["fi","I stayed home __ it was raining.","Zostałam w domu, bo padało","because","so|but|or","Najpierw skutek, potem przyczyna — because."],
["fi","Coffee __ tea?","Kawa czy herbata?","or","so|but|because","Jedno z dwojga — or."],
["ty","Lubię kawę i herbatę","I like coffee and tea","like · coffee · and · tea — bez przedimka","a","Kawa i herbata ogólnie — bez przedimka a."],
["ty","Jestem zmęczona, ale szczęśliwa","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — jak jest „ale” po angielsku?","so","„Ale” to but."],
["ty","Lubię psy i koty","I like dogs and cats|I like cats and dogs","dog · and · cat — liczba mnoga","dog","Zwierzęta ogólnie — liczba mnoga dogs, cats."]]},
{ id:"ponglish", title:"Ponglish: fałszywi przyjaciele i kalki", blurb:"Receipt to nie recepta, a „mam 20 lat” to nie I have 20 years. Najczęstsze pułapki, w które wpadają Polacy.", deck:"Fałszywi przyjaciele i kalki", body:`
<p>Wiele błędów Polaków w angielskim to nie gramatyka, tylko słowa. Podobne słowo znaczy coś zupełnie innego (<b>receipt</b> to paragon, nie recepta), jednemu polskiemu słowu odpowiadają dwa angielskie („pożyczyć” to <b>borrow</b> albo <b>lend</b>), a dosłowne tłumaczenie daje zdanie, którego w angielskim nie ma (<b>I have 20 years</b>). Taką mieszankę nazywa się żartobliwie „ponglish”.</p>
<h3>Fałszywi przyjaciele</h3>
<div class="tbl"><table><tr><th>Po polsku</th><th>Nie tak ✗</th><th>Tak ✓</th><th>Fałszywy przyjaciel znaczy</th></tr><tr><td>aktualny</td><td><b>actual</b></td><td class="k">current</td><td>rzeczywisty</td></tr><tr><td>ewentualnie</td><td><b>eventually</b></td><td class="k">possibly</td><td>w końcu</td></tr><tr><td>sympatyczny</td><td><b>sympathetic</b></td><td class="k">nice</td><td>współczujący</td></tr><tr><td>pensja</td><td><b>pension</b></td><td class="k">salary</td><td>emerytura</td></tr><tr><td>recepta</td><td><b>receipt</b></td><td class="k">prescription</td><td>paragon</td></tr><tr><td>fabryka</td><td><b>fabric</b></td><td class="k">factory</td><td>tkanina</td></tr><tr><td>dres</td><td><b>dress</b></td><td class="k">tracksuit</td><td>sukienka</td></tr><tr><td>magazyn</td><td><b>magazine</b></td><td class="k">warehouse</td><td>czasopismo</td></tr><tr><td>sałata</td><td><b>salad</b></td><td class="k">lettuce</td><td>sałatka</td></tr><tr><td>ordynarny</td><td><b>ordinary</b></td><td class="k">rude</td><td>zwyczajny</td></tr></table></div>
{{ex:I need a prescription.|/aɪ ˈniːd ə prɪˈskrɪpʃn/|Potrzebuję recepty}}{{ex:She works at a factory.|/ʃi ˈwɜːrks ət ə ˈfæktəri/|Ona pracuje w fabryce}}{{ex:He works in a warehouse.|/hi ˈwɜːrks ɪn ə ˈwerhaʊs/|On pracuje w magazynie}}{{ex:My current job is great.|/maɪ ˈkɜːrənt ˈdʒɑːb ɪz ˈgreɪt/|Moja aktualna praca jest świetna}}
<p>Po zamianie słowa pamiętaj o przedimku. <b>Prescription</b>, <b>factory</b> i <b>warehouse</b> to rzeczowniki policzalne, więc w liczbie pojedynczej nie mogą stać same: <b>a prescription</b>, <b>a factory</b>, <b>a warehouse</b>. Po <b>my</b> przedimka nie ma: <b>my current job</b>.</p>
<h3>Jedno polskie słowo — dwa angielskie</h3>
<div class="tbl"><table><tr><th>Po polsku</th><th>Po angielsku</th><th>Jak wybrać</th></tr><tr><td>robić</td><td class="k">do / make</td><td><b>do</b> — zajęcia i praca (<b>do homework</b>), <b>make</b> — tworzyć, przygotowywać (<b>make coffee</b>, <b>make a mistake</b>)</td></tr><tr><td>pożyczyć</td><td class="k">borrow / lend</td><td><b>borrow</b> — pożyczyć od kogoś, <b>lend</b> — pożyczyć komuś</td></tr><tr><td>uczyć się, uczyć</td><td class="k">learn / study / teach</td><td><b>learn</b> — nauczyć się czegoś, <b>study</b> — uczyć się, studiować, <b>teach</b> — uczyć kogoś</td></tr></table></div>
{{ex:I'll make coffee.|/aɪl ˈmeɪk ˈkɔːfi/|Zrobię kawę}}{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|Zrobiłam błąd}}{{ex:Can you lend me a pen?|/kən ju ˈlend mi ə ˈpen/|Możesz pożyczyć mi długopis?}}
<h3>Kalki: dosłowne tłumaczenie</h3>
<div class="tbl"><table><tr><th>Po polsku</th><th>Kalka ✗</th><th>Po angielsku ✓</th></tr><tr><td>mam 20 lat</td><td><b>I have 20 years</b></td><td class="k">I'm 20 (years old)</td></tr><tr><td>dziś rano</td><td><b>today morning</b></td><td class="k">this morning</td></tr><tr><td>z góry dziękuję</td><td><b>Thank you from the mountain</b></td><td class="k">Thanks in advance</td></tr><tr><td>interesuję się historią</td><td><b>I'm interesting in history</b></td><td class="k">I'm interested in history</td></tr><tr><td>nudzę się</td><td><b>I'm boring</b></td><td class="k">I'm bored</td></tr><tr><td>rady, informacje</td><td><b>advices, informations</b></td><td class="k">advice, information</td></tr></table></div>
{{ex:I'm twenty years old.|/aɪm ˈtwenti ˈjɪrz ˈoʊld/|Mam dwadzieścia lat}}{{ex:I'm interested in history.|/aɪm ˈɪntrəstɪd ɪn ˈhɪstri/|Interesuję się historią}}{{ex:Thanks in advance.|/ˈθæŋks ɪn ədˈvæns/|Z góry dziękuję}}{{ex:I need some advice.|/aɪ ˈniːd ˈsʌm ədˈvaɪs/|Potrzebuję rady}}
<p><b>Advice</b> jest niepoliczalne, choć po polsku mówimy „rady”: bez a i bez -s. Jedna rada to <b>a piece of advice</b>.</p>
<h3>Rzeczy to it</h3>
<p>„Laptop — on”, „pralka — ona”: polski rodzaj gramatyczny nie przechodzi do angielskiego. Każda rzecz to <b>it</b>.</p>
{{ex:My laptop is old, but it works.|/maɪ ˈlæptɑːp ɪz ˈoʊld bət ɪt ˈwɜːrks/|Mój laptop jest stary, ale działa}}
<div class="tip">Jeśli angielskie słowo wygląda jak polskie, sprawdź je w słowniku: <b>actual</b>, <b>receipt</b>, <b>fabric</b> i <b>magazine</b> są tylko podobne. Częste błędy: <b>do a mistake</b> ✗ → <b>make a mistake</b> ✓ / <b>I have 20 years.</b> ✗ → <b>I'm 20.</b> ✓</div>`,
check:[["„Potrzebuję recepty” po angielsku?",["I need a receipt.","I need a prescription.","I need prescription.","I need a recipe."],1,"Recepta to prescription, a receipt to paragon. To rzeczownik policzalny w liczbie pojedynczej, więc z przedimkiem a."],["„Zrobię kawę” po angielsku?",["I'll make coffee.","I'll do coffee.","I'll cook coffee.","I'll doing coffee."],0,"Jedzenie i napoje przygotowujemy z make; do dotyczy zajęć i pracy."],["„Mój laptop jest stary, ale działa” po angielsku?",["My laptop is old, but he works.","My laptop is old, but she works.","My laptop old, but it works.","My laptop is old, but it works."],3,"O rzeczach mówimy it, nawet jeśli po polsku to „on”. Nie gub też is."]],
practice:[
["mc","„On pracuje w magazynie” po angielsku?","He works in a warehouse.","He works in a magazine.","He works in warehouse.","He works in a fabric.","Magazyn to warehouse, a magazine to czasopismo."],
["mc","„Moja aktualna praca jest świetna” po angielsku?","My current job is great.","My actual job is great.","My eventual job is great.","My currently job is great.","Aktualny to current; actual znaczy „rzeczywisty”."],
["mc","„Możesz pożyczyć mi długopis?” po angielsku?","Can you lend me a pen?","Can you borrow me a pen?","Can you lend me pen?","Can you borrow a pen me?","Pożyczyć komuś to lend; borrow znaczy „pożyczyć od kogoś”."],
["mc","„Mam dwadzieścia lat” po angielsku?","I'm twenty years old.","I have twenty years.","I have twenty years old.","I'm twenty years.","Wiek podajemy z czasownikiem to be, nie z have."],
["mc","„Mój telefon jest stary. Nie działa” po angielsku?","My phone is old. It doesn't work.","My phone is old. He doesn't work.","My phone is old. She doesn't work.","My phone is old. It don't work.","O rzeczach mówimy it, nawet jeśli po polsku to „on”."],
["or","Potrzebuję recepty","I need a prescription","receipt the","Recepta to a prescription (receipt to paragon) — rzeczownik policzalny, więc z przedimkiem a."],
["or","Ona pracuje w fabryce","She works at a factory","fabric the","Fabryka to factory (fabric to tkanina); jedna z wielu fabryk — przedimek a."],
["or","On pracuje w magazynie","He works in a warehouse","magazine the","Magazyn to warehouse (magazine to czasopismo); rzeczownik policzalny, więc z przedimkiem a."],
["or","Mogę ci coś poradzić?","Can I give you some advice","advices a","Advice jest niepoliczalne: bez przedimka a i bez -s."],
["fi","Can I __ your pen?","Mogę pożyczyć twój długopis?","borrow","lend|owe|give","Pożyczyć od kogoś to borrow; lend znaczy „pożyczyć komuś”."],
["fi","I __ coffee every morning.","Co rano robię kawę","make","do|cook|play","Jedzenie i napoje przygotowujemy z make; do dotyczy zajęć i pracy."],
["fi","I'm __ in history.","Interesuję się historią","interested","interesting|interest|interests","Osoba jest interested, a rzecz — interesting."],
["ty","Potrzebuję rady","I need some advice|I need advice|I need a piece of advice","need · advice — rzeczownik niepoliczalny","advices","Advice jest niepoliczalne: bez przedimka a i bez -s."],
["ty","Możesz pożyczyć mi długopis?","Can you lend me a pen|Could you lend me a pen","can you · lend · pen — przedimek a","borrow the","Pożyczyć komuś to lend; długopis jest jeden i dowolny — przedimek a."],
["ty","Mam dwadzieścia lat","I'm twenty years old|I'm twenty|I'm 20 years old|I'm 20","I'm · twenty — wiek z to be, nie z have","have","Wiek podajemy z czasownikiem to be: I'm twenty, nie I have twenty years."],
["ty","Zrobiłam błąd","I made a mistake|I've made a mistake","made · mistake — przedimek a","did the","Błąd „robimy” z make, nie z do; mistake to rzeczownik policzalny, więc z przedimkiem a."]]},
];
