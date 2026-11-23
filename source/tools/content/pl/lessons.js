/* pl-en lessons (docs/profiles/pl.md): explanations in Polish (ty through verb endings, rules in the "my" form), English side identical to ko-en.
   pron = IPA exactly as the Chinese course writes it (tools/content/zh/PRON-RULES.md); rows unchanged from ko-en copy the zh / ru transcription. */
exports.LESSONS = [
{ id:"alphabet", title:"1 · Alfabet: nazwy liter i literowanie", blurb:"Litery są znajome, ale ich angielskie nazwy już nie. 26 nazw wystarczy, żeby przeliterować imię, adres e-mail albo numer rezerwacji.", deck:"Alfabet", body:`
<p>W hotelu, przez telefon, przy rezerwacji prędzej czy później pada pytanie: <b>How do you spell that?</b> Żeby przeliterować imię, nazwisko, adres e-mail albo kod rezerwacji, trzeba znać <b>angielskie nazwy liter</b>. Alfabet jest ten sam co w polskim, ale prawie każda litera nazywa się inaczej niż nasze „a, be, ce, de”.</p>
<h3>26 liter i ich nazwy</h3>
<p>Pogrubione <b>A E I O U</b> to samogłoski, pozostałe litery to spółgłoski. Transkrypcja pokazuje <b>nazwę</b> litery, czyli to, co się mówi przy literowaniu.</p>
<div class="tbl"><table><tr><td class="k"><b>A</b> /ˈeɪ/</td><td class="k">B /ˈbiː/</td><td class="k">C /ˈsiː/</td><td class="k">D /ˈdiː/</td><td class="k"><b>E</b> /ˈiː/</td></tr><tr><td class="k">F /ˈef/</td><td class="k">G /ˈdʒiː/</td><td class="k">H /ˈeɪtʃ/</td><td class="k"><b>I</b> /ˈaɪ/</td><td class="k">J /ˈdʒeɪ/</td></tr><tr><td class="k">K /ˈkeɪ/</td><td class="k">L /ˈel/</td><td class="k">M /ˈem/</td><td class="k">N /ˈen/</td><td class="k"><b>O</b> /ˈoʊ/</td></tr><tr><td class="k">P /ˈpiː/</td><td class="k">Q /ˈkjuː/</td><td class="k">R /ˈɑːr/</td><td class="k">S /ˈes/</td><td class="k">T /ˈtiː/</td></tr><tr><td class="k"><b>U</b> /ˈjuː/</td><td class="k">V /ˈviː/</td><td class="k">W /ˈdʌbəljuː/</td><td class="k">X /ˈeks/</td><td class="k">Y /ˈwaɪ/</td></tr><tr><td class="k">Z /ˈziː/</td><td></td><td></td><td></td><td></td></tr></table></div>
<h3>Nazwy, które mylą się najczęściej</h3>
<p>Główna pułapka to polskie nazwy liter. Po angielsku prawie wszystkie brzmią inaczej:</p>
<div class="tbl"><table><tr><th>Litera</th><th>Po polsku</th><th>Po angielsku</th><th>Na co uważać</th></tr><tr><td class="k">E / I</td><td>„e” / „i”</td><td>/ˈiː/ / /ˈaɪ/</td><td>E brzmi jak długie polskie „i”, a I jak słowo I (ja). To najczęstsza pomyłka przy literowaniu imienia i adresu e-mail</td></tr><tr><td class="k">A</td><td>„a”</td><td>/ˈeɪ/</td><td>Brzmi jak „ej”, a nie jak polskie „a”</td></tr><tr><td class="k">G / J</td><td>„gie” / „jot”</td><td>/ˈdʒiː/ / /ˈdʒeɪ/</td><td>Obie zaczynają się od /dʒ/, czyli polskiego „dż”. G kończy się na /iː/, J na /eɪ/</td></tr><tr><td class="k">H</td><td>„ha”</td><td>/ˈeɪtʃ/</td><td>Nazwa zaczyna się od samogłoski: an H</td></tr><tr><td class="k">K / Q</td><td>„ka” / „ku”</td><td>/ˈkeɪ/ / /ˈkjuː/</td><td>K brzmi jak druga sylaba OK, Q jak słowo queue (kolejka)</td></tr><tr><td class="k">R</td><td>„er”</td><td>/ˈɑːr/</td><td>Długie /ɑː/ i angielskie r, przy którym język nie drga</td></tr><tr><td class="k">V / W</td><td>„fał” / „wu”</td><td>/ˈviː/ / /ˈdʌbəljuː/</td><td>V zaczyna się od głoski, którą po polsku piszemy „w”. W to double u, czyli „podwójne u” — trzy sylaby</td></tr><tr><td class="k">Y</td><td>„igrek”</td><td>/ˈwaɪ/</td><td>Brzmi jak słowo why</td></tr><tr><td class="k">C / Z</td><td>„ce” / „zet”</td><td>/ˈsiː/ / /ˈziː/</td><td>C brzmi jak see. Z to w USA zee; brytyjskie zed bywa tam niezrozumiałe</td></tr></table></div>
<h3>Jak zapytać o pisownię i jak literować</h3>
<p>Gdy litera jest słabo słyszalna, dodaje się proste słowo, które się od niej zaczyna: <b>B as in boy</b>. Polskie litery ą, ć, ę, ł, ń, ó, ś, ź, ż nie mają angielskich nazw, więc przy literowaniu podaje się zwykłą literę bez znaku: Łukasz to L-U-K-A-S-Z.</p>
{{ex:How do you spell that?|/ˈhaʊ də ju ˈspel ˈðæt/|Jak to się pisze?}}{{ex:How do you spell your last name?|/ˈhaʊ də ju ˈspel jʊr ˈlæst ˈneɪm/|Jak się pisze pani nazwisko?}}{{ex:Can you spell that, please?|/kən ju ˈspel ˈðæt ˈpliːz/|Czy może pan to przeliterować?}}{{ex:It starts with a capital T.|/ɪt ˈstɑːrts wɪð ə ˈkæpɪtl ˈtiː/|Zaczyna się od wielkiej litery T}}{{ex:B as in boy.|/ˈbiː əz ɪn ˈbɔɪ/|B jak boy}}{{ex:Is that M as in Mary?|/ɪz ˈðæt ˈem əz ɪn ˈmeri/|Czy to M jak Mary?}}{{ex:There are two Ls in hello.|/ðer ər ˈtuː ˈelz ɪn həˈloʊ/|W słowie hello są dwie litery L}}
<h3>a czy an przed nazwą litery</h3>
<p>O wyborze przedimka decyduje <b>pierwsza głoska nazwy</b>, a nie sama litera. Nazwy F, H, L, M, N, R, S, X zaczynają się od samogłoski, dlatego mówimy <b>an F, an H, an L, an M, an N, an R, an S, an X</b>.</p>
<p>U jest samogłoską, ale jej nazwa /ˈjuː/ zaczyna się od głoski /j/, tak jak you. Dlatego <b>a U</b> — tak samo jak a university.</p>
<div class="tip">Dyktowanie adresu e-mail: wielka litera to <b>capital T</b>, dwie takie same litery pod rząd to <b>double N</b>, @ to <b>at</b>, kropka to <b>dot</b>. Na przykład anna.nowak@mail.com: <b>A-double N-A dot N-O-W-A-K at mail dot com</b>.</div>`},

{ id:"pron", title:"1 · Wymowa: transkrypcja, akcent i pułapki", blurb:"Najpierw jak czytać amerykańską transkrypcję, potem pułapki: akcent, æ i e, dźwięczne końcówki, TH oraz -ing.", deck:"Wymowa: pułapki", body:`
<p>Fiszki i przykłady w tym kursie mają <b>transkrypcję</b>: te same symbole międzynarodowego alfabetu fonetycznego, które znasz ze szkoły i ze słowników, ale w wersji <b>amerykańskiej</b>. Zapisujemy ją między ukośnikami / /. Angielska pisownia często wprowadza w błąd, dlatego warto patrzeć na transkrypcję całego słowa i słuchać nagrania.</p>
<h3>Jak czytać transkrypcję</h3>
<p><b>ˈ</b> to znak akcentu: stoi <b>przed</b> akcentowaną sylabą. <b>ː</b> to znak długości. Małe słowa bez ˈ (a, the, to, can) wymawia się szybko i słabo. Trzy symbole wyglądają jak polskie litery, ale dwa z nich znaczą co innego:</p>
<div class="tbl"><table><tr><th>Symbol</th><th>Czyta się jak</th><th>Przykład</th></tr><tr><td class="k">w</td><td>polskie „ł”</td><td>wine /ˈwaɪn/</td></tr><tr><td class="k">v</td><td>polskie „w”</td><td>vine /ˈvaɪn/</td></tr><tr><td class="k">j</td><td>polskie „j”; angielska litera j to /dʒ/, czyli „dż”</td><td>yes /ˈjes/, job /ˈdʒɑːb/</td></tr></table></div>
<p>W szkole uczy się zwykle wymowy brytyjskiej. Tutaj symbole mają wartości amerykańskie:</p>
<div class="tbl"><table><tr><th>W szkole (brytyjska)</th><th>Tutaj (amerykańska)</th><th>Przykład</th></tr><tr><td class="k">əʊ</td><td>oʊ</td><td>go /ˈgoʊ/</td></tr><tr><td class="k">ɒ</td><td>ɑː</td><td>hot /ˈhɑːt/</td></tr><tr><td class="k">ɪə</td><td>ɪr</td><td>here /ˈhɪr/</td></tr><tr><td class="k">eə</td><td>er</td><td>there /ˈðer/</td></tr><tr><td class="k">ɑː, ɜː, ə</td><td>ɑːr, ɜːr, ər (r słychać)</td><td>car /ˈkɑːr/, bird /ˈbɜːrd/</td></tr></table></div>
<h3>Akcent: nie zawsze na przedostatniej sylabie</h3>
<p>Po polsku akcent pada prawie zawsze na przedostatnią sylabę. Po angielsku każde słowo ma własny akcent i trzeba go zapamiętać razem ze słowem. Najłatwiej o pomyłkę w wyrazach, które wyglądają jak polskie: po polsku HO-tel, po angielsku ho-TEL.</p>
{{ex:hotel|/hoʊˈtel/|hotel (akcent na „tel”)}}{{ex:banana|/bəˈnænə/|banan}}{{ex:comfortable|/ˈkʌmftərbl/|wygodny (trzy sylaby, bez „table”)}}{{ex:vegetable|/ˈvedʒtəbl/|warzywo (trzy sylaby)}}
<p>Sylaby bez akcentu słabną: samogłoska kurczy się do niewyraźnego /ə/, którego w polskim nie ma. W banana pełne /æ/ jest tylko w środku.</p>
<h3>æ i e, ɪ i iː</h3>
<p>Polskie „e” zastępuje nam dwie angielskie samogłoski, a polskie „i” — dwie kolejne. Przy <b>/æ/</b> usta otwierają się szerzej niż przy „e”: dźwięk leży między „e” i „a”. To najtrudniejsza para. <b>/ɪ/</b> jest krótkie i bliskie polskiemu „y”, a <b>/iː/</b> to długie „i”.</p>
{{ex:bad|/ˈbæd/|zły}}{{ex:bed|/ˈbed/|łóżko}}{{ex:ship|/ˈʃɪp/|statek}}{{ex:sheep|/ˈʃiːp/|owca}}
<h3>Dźwięczne końcówki</h3>
<p>W polskim spółgłoska na końcu wyrazu traci dźwięczność: „chleb” brzmi jak „chlep”. W angielskim tak nie wolno, bo powstaje inne słowo. Na końcu wyrazu nie ubezdźwięczniaj: bad to nie bat. Samogłoska przed dźwięczną spółgłoską jest dłuższa.</p>
{{ex:bat|/ˈbæt/|nietoperz / kij bejsbolowy}}{{ex:bag|/ˈbæg/|torba}}{{ex:back|/ˈbæk/|plecy / z powrotem}}
<h3>TH: czubek języka między zębami</h3>
<p>Tych dwóch głosek w polskim nie ma, więc łatwo zastąpić je przez „f”, „t”, „s” albo „d”, „z”. Czubek języka trzeba <b>lekko wysunąć między zęby</b> i wypuścić powietrze: bez głosu powstaje /θ/ jak w think, z głosem — /ð/ jak w this. Zamiana zmienia słowo: think staje się sink, a three — tree.</p>
{{ex:think|/ˈθɪŋk/|myśleć}}{{ex:sink|/ˈsɪŋk/|zlew / tonąć}}{{ex:three|/ˈθriː/|trzy}}{{ex:tree|/ˈtriː/|drzewo}}{{ex:this|/ˈðɪs/|ten / to}}
<h3>-ing bez „k”, r bez drgania</h3>
<p>Końcówkę -ing wymawia się /ɪŋ/: tył języka dotyka podniebienia jak przy „n” w słowie „bank”, ale <b>bez „k” na końcu</b>. Angielskie <b>r</b> słychać w każdej pozycji, lecz czubek języka <b>niczego nie dotyka</b> i nie drga. Przy <b>l</b> czubek języka dotyka dziąseł za górnymi zębami.</p>
{{ex:singing|/ˈsɪŋɪŋ/|śpiewanie}}{{ex:right|/ˈraɪt/|prawy / poprawny}}{{ex:light|/ˈlaɪt/|światło / lekki}}
<p>Polskie „u” zastępuje dwie angielskie samogłoski: krótkie, luźne /ʊ/ (pull) i długie /uː/ (pool). Dźwięczna końcówka liczy się też przy s i z: eyes to nie ice. Para v / b nie sprawia Polakom kłopotu — wystarczy pamiętać, że angielska litera v to polskie „w”.</p>
{{ex:pull|/ˈpʊl/|ciągnąć}}{{ex:pool|/ˈpuːl/|basen}}{{ex:eyes|/ˈaɪz/|oczy}}{{ex:ice|/ˈaɪs/|lód}}{{ex:vote|/ˈvoʊt/|głosować}}{{ex:boat|/ˈboʊt/|łódka}}
<div class="tip">Nie wymawiaj każdej sylaby z pełną samogłoską. W zdaniu małe słowa (a, the, to, of, can) brzmią słabo, z niewyraźnym /ə/: <b>a cup of coffee</b> to /ə ˈkʌp əv ˈkɔːfi/. Znaczenie niosą sylaby akcentowane.</div>`},

{ id:"articles", title:"2 · a i the: podstawy przedimków", blurb:"W polskim nie ma przedimków, dlatego a i the łatwo pominąć. Wystarczą trzy zasady.", deck:"O sobie", body:`
<p>W polskim nie ma przedimków, dlatego a i the najłatwiej po prostu pominąć — i to jest najczęstszy błąd. Po polsku o tym, czy rzecz jest nowa, czy już znana, mówi szyk zdania i kontekst: „Do sklepu wszedł mężczyzna” to nie to samo co „Mężczyzna wszedł do sklepu”. Po angielsku tę pracę wykonuje przedimek. Wystarczą trzy zasady.</p>
<h3>a / an — jedna rzecz, o której mowa pierwszy raz</h3>
<p>Rzeczownik policzalny w liczbie pojedynczej <b>nie może stać sam</b>: I have car. ✗ Gdy mówimy o jednej, jeszcze nieznanej rzeczy, stawiamy przed nim <b>a</b>. Tak samo przed nazwą zawodu.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|Jestem studentem}}{{ex:I have a dog.|/aɪ ˈhæv ə ˈdɔːg/|Mam psa}}
<p>O wyborze między a i <b>an</b> decyduje <b>wymowa</b>, nie pisownia: an stoi przed samogłoską w wymowie. Liczy się pierwsze słowo po przedimku: an old car, ale a young man.</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (zaczyna się od /j/)</td><td class="k">an hour (h jest nieme)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (zaczyna się od /w/)</td><td class="k">an MBA (nazwa litery M: /ˈem/)</td></tr></table></div>
<h3>the — rzecz znana obu osobom</h3>
<p>Przedimka the używamy, gdy rzecz została już wspomniana albo z sytuacji wiadomo, o którą chodzi. Także wtedy, gdy istnieje tylko jedna: the sun, the internet. Polskie „ten” bywa odpowiednikiem the, ale the pojawia się też tam, gdzie po polsku nie mówimy nic: „Zamknij drzwi” to Close <b>the</b> door.</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|Mam psa. Ten pies jest taki słodki}}{{ex:Can you close the door?|/kən ju ˈkloʊz ðə ˈdɔːr/|Możesz zamknąć drzwi? (te w tym pokoju)}}
<h3>Bez przedimka — gdy mówimy ogólnie</h3>
<p>Gdy mowa o całej kategorii, używamy liczby mnogiej albo rzeczownika niepoliczalnego bez przedimka. Bez przedimka są też nazwy posiłków, języków i dyscyplin sportu.</p>
{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Uwielbiam psy (psy w ogóle)}}{{ex:I don't drink coffee.|/aɪ ˈdoʊnt ˈdrɪŋk ˈkɔːfi/|Nie piję kawy}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Zjedzmy razem lunch}}
<div class="tip">Najczęstszy błąd: <b>I'm teacher.</b> ✗ → <b>I'm a teacher.</b> ✓ Po polsku w zdaniu „Jestem nauczycielem” wystarcza sam rzeczownik, po angielsku przed nazwą zawodu zawsze stoi a.</div>`},

{ id:"be", title:"3 · Czasownik to be i pozostałe czasowniki", blurb:"am / is / are albo do / does — nigdy jedno z drugim. I zawsze z podmiotem.", deck:"O sobie", body:`
<p>Polskie „być” i angielskie <b>to be</b> działają podobnie: „Ona jest w pracy” to She's at work. Różnice są trzy: w angielskim zdaniu musi być podmiot, przed rzeczownikiem pojawia się przedimek, a pozostałe czasowniki tworzą pytania i przeczenia inaczej — z do / does.</p>
<h3>Trzy formy i zawsze podmiot</h3>
<p><b>I am</b> / <b>you, we, they are</b> / <b>he, she, it is</b>. W mowie prawie zawsze skracamy: I'm, you're, she's. Po polsku osobę pokazuje końcówka czasownika, więc zaimek znika: „Jestem głodna”. Po angielsku podmiot musi zostać: Am hungry. ✗ → I'm hungry. ✓</p>
{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|Jestem głodna}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|Ona jest w pracy}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Wszystko w porządku?}}
<h3>Trzy polskie pułapki</h3>
<div class="tbl"><table><tr><th>Po polsku</th><th>Po angielsku</th><th>Na co uważać</th></tr><tr><td>„On jest studentem”</td><td class="k">He's a student.</td><td>Tam, gdzie po polsku jest narzędnik, po angielsku stoi przedimek a</td></tr><tr><td>„Mam 20 lat”</td><td class="k">I'm 20.</td><td>Wiek podajemy z to be, nie z have: I have 20 years. ✗</td></tr><tr><td>„Zgadzam się”</td><td class="k">I agree.</td><td>agree to zwykły czasownik, bez to be: I am agree. ✗</td></tr></table></div>
{{ex:He's a student.|/hiz ə ˈstuːdnt/|On jest studentem}}{{ex:I agree.|/aɪ əˈgriː/|Zgadzam się}}
<h3>Nigdy to be razem z innym czasownikiem</h3>
<p>W zdaniu w czasie Present Simple (czasie teraźniejszym prostym) jest albo to be, albo inny czasownik — nigdy oba naraz.</p>
{{ex:I like rock music.|/aɪ ˈlaɪk ˈrɑːk ˈmjuːzɪk/|Lubię rocka (nie: I am like ✗)}}{{ex:I live in Warsaw.|/aɪ ˈlɪv ɪn ˈwɔːrsɔː/|Mieszkam w Warszawie (nie: I am live ✗)}}
<div class="tbl"><table><tr><th></th><th>to be</th><th>inne czasowniki</th></tr><tr><td>Zdanie</td><td class="k">I am tired.</td><td class="k">I like coffee.</td></tr><tr><td>Przeczenie</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>Pytanie</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<h3>he, she, it: końcówka -s i does</h3>
<p>W trzeciej osobie liczby pojedynczej czasownik dostaje końcówkę <b>-s</b>, a w pytaniach i przeczeniach pojawia się <b>does</b>. Po does czasownik wraca do formy podstawowej, bez -s.</p>
{{ex:My brother works in Warsaw.|/maɪ ˈbrʌðər ˈwɜːrks ɪn ˈwɔːrsɔː/|Mój brat pracuje w Warszawie}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|Czy on mówi po angielsku?}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|Ona nie je mięsa}}
<div class="tip">W razie wątpliwości warto zadać sobie pytanie: „Czy w zdaniu jest <b>inny czasownik</b> oprócz to be (like, live, want, go…)?” Jeśli tak — do / does. Jeśli nie (stan, zawód, miejsce, wiek) — am / is / are.</div>`},

{ id:"polite", title:"4 · Uprzejme prośby", blurb:"Can you → Could you → Would you mind. A polskie „proszę” ma po angielsku cztery odpowiedniki.", deck:"Niezbędnik 1", body:`
<p>Po polsku uprzejmość niesie forma „pan / pani”. Angielski ma jedno <b>you</b> dla wszystkich, więc uprzejmość przenosi się na <b>sposób proszenia</b>: could, would i please. Ta sama treść może zabrzmieć grzecznie albo jak rozkaz.</p>
<h3>Stopnie uprzejmości</h3>
<div class="tbl"><table><tr><th>Zwrot</th><th>Jak brzmi</th><th>Gdzie pasuje</th></tr><tr><td class="k">Give me…</td><td>rozkaz, brzmi niegrzecznie</td><td>lepiej unikać</td></tr><tr><td class="k">Can you…?</td><td>swobodna prośba</td><td>znajomi, sklep</td></tr><tr><td class="k">Could you…?</td><td>uprzejma prośba</td><td>nieznajomi, praca</td></tr><tr><td class="k">Would you mind …ing?</td><td>bardzo uprzejmie</td><td>duża prośba, sytuacja oficjalna</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|Czy może mi pan pomóc?}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|Czy może pani powtórzyć?}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|Czy mógłby pan zrobić nam zdjęcie?}}
<h3>Zamawianie: Can I get…? / I'd like…</h3>
<p>„Poproszę kawę” to nie Give me a coffee (brzmi szorstko) ani I want a coffee (tak mówi dziecko). W kawiarni i w sklepie mówi się tak:</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|Poproszę latte}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|Poproszę miejsce przy oknie}}
<h3>Pułapka: Would you mind…?</h3>
<p>mind znaczy „mieć coś przeciwko”. Dlatego zgodę wyraża odpowiedź <b>No</b>, czyli „nie mam nic przeciwko”. Po mind czasownik ma formę -ing.</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|Czy mogłaby pani otworzyć okno?}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|Ależ skąd, żaden problem}}
<h3>Cztery angielskie „proszę”</h3>
<div class="tbl"><table><tr><th>Sytuacja</th><th>Po angielsku</th></tr><tr><td>prośba: „Proszę o rachunek”</td><td class="k">The check, please.</td></tr><tr><td>podawanie czegoś: „Proszę bardzo”</td><td class="k">Here you go.</td></tr><tr><td>odpowiedź na „dziękuję”</td><td class="k">You're welcome.</td></tr><tr><td>gdy czegoś nie słychać: „Proszę?”</td><td class="k">Sorry?</td></tr></table></div>
{{ex:You're welcome.|/jʊr ˈwelkəm/|Proszę (w odpowiedzi na „dziękuję”)}}
<div class="tip">Słów <b>please</b> i <b>thank you</b> nie da się nadużyć: samo please na końcu zdania łagodzi prośbę. Liczy się też intonacja: głos lekko w górę brzmi jak prośba, w dół — jak polecenie.</div>`},

{ id:"tense", title:"5 · Czasy w skrócie: teraźniejszość, przeszłość, przyszłość", blurb:"Zwyczaj to Present Simple, „właśnie teraz” to Present Continuous, plan to going to.", deck:"Pogawędki", body:`
<p>Po polsku jedno „czytam” oznacza i zwyczaj, i to, co dzieje się w tej chwili, a resztę załatwia aspekt: „czytałam” albo „przeczytałam”. Angielski nie ma aspektu dokonanego i niedokonanego — tę samą treść rozkłada na więcej czasów. Do swobodnej pogawędki wystarczy pięć form.</p>
<div class="tbl"><table><tr><th>Po polsku</th><th>Po angielsku</th></tr><tr><td>„Czytam”</td><td class="k">I read (zwykle) / I'm reading (teraz)</td></tr><tr><td>„Czytałam” / „Przeczytałam”</td><td class="k">I read (Past Simple, wymowa /ˈred/)</td></tr><tr><td>„Przeczytam” / „Będę czytać”</td><td class="k">I'll read / I'm going to read</td></tr></table></div>
<p>W dalszych lekcjach dojdą jeszcze I was reading i I've read.</p>
<h3>Present Simple i Present Continuous</h3>
<div class="tbl"><table><tr><th>Forma</th><th>Znaczenie</th><th>Przykład</th></tr><tr><td class="k">Present Simple</td><td>zwyczaj, stały fakt</td><td>I drink coffee every morning.</td></tr><tr><td class="k">be + -ing (Present Continuous)</td><td>to, co dzieje się teraz / ustalony plan na najbliższy czas</td><td>I'm drinking coffee right now.</td></tr></table></div>
{{ex:I work at a bank.|/aɪ ˈwɜːrk ət ə ˈbæŋk/|Pracuję w banku (na stałe)}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|Pracuję dziś z domu}}
<h3>Past Simple</h3>
<p>Czasowniki regularne dostają końcówkę <b>-ed</b>, a te najczęstsze są nieregularne: go → went, eat → ate, see → saw, have → had, get → got. Forma jest jedna dla wszystkich osób i nie zależy od płci: „byłem” i „byłam” to I was. Polski aspekt nie wybiera czasu: i „robiłem”, i „zrobiłem” to najczęściej Past Simple.</p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|W zeszły weekend pojechałam na plażę}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|Fajnie było?}}
<h3>Przyszłość: will i be going to</h3>
<p>Polskie „zrobię” i „będę robić” różnią się aspektem. Angielskie will i be going to dzieli co innego: moment decyzji.</p>
<div class="tbl"><table><tr><th></th><th>Kiedy</th><th>Przykład</th></tr><tr><td class="k">will</td><td>decyzja w chwili mówienia, obietnica</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>plan ułożony wcześniej</td><td>I'm going to visit Italy next month.</td></tr></table></div>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Zadzwonię do ciebie później}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|Zamierzam zapisać się na kurs gotowania}}
<p>W mowie going to brzmi jak <b>gonna</b>. W piśmie zostaje going to.</p>
<div class="tip">Słowa takie jak today czy this week same nie wybierają czasu — liczy się to, co chcemy powiedzieć. Najprościej odpowiadać w tym czasie, w którym padło pytanie: na How was your weekend? — Past Simple, na Any plans for the weekend? — going to.</div>`},

{ id:"prep", title:"6 · Przyimki in / on / at", blurb:"Polskie „w” i „na” to po angielsku raz in, raz on, raz at. Porządkujemy czas i miejsce.", deck:"Liczby, godziny i daty", body:`
<p>W angielskim rzeczowniki nie odmieniają się przez przypadki — ich pracę wykonują przyimki i szyk wyrazów. Kłopot w tym, że polskie „w” i „na” nie mają jednego odpowiednika: „w maju” to in May, „w poniedziałek” to on Monday, a „w domu” to at home. Ogólna zasada: <b>im szerszy zakres, tym częściej in; im węższy, tym częściej at</b>.</p>
<h3>Czas</h3>
<div class="tbl"><table><tr><th>Przyimek</th><th>Zakres</th><th>Przykład</th></tr><tr><td class="k">in</td><td>miesiące, lata, pory roku, pory dnia</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>dni tygodnia, daty, konkretny dzień</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>godziny, krótkie momenty</td><td>at 7, at noon, at night</td></tr></table></div>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|Do zobaczenia w piątek}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|Spotkanie jest o trzeciej}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|Urodziłem się w 1998 roku}}
<h3>Miejsce</h3>
<div class="tbl"><table><tr><th>Przyimek</th><th>Obraz</th><th>Przykład</th></tr><tr><td class="k">in</td><td>wnętrze, miasto, kraj</td><td>in the car, in Warsaw, in Poland</td></tr><tr><td class="k">on</td><td>powierzchnia, ulica, komunikacja</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>punkt, miejsce jako punkt na mapie</td><td>at the station, at work, at home</td></tr></table></div>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|Jestem w autobusie}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|Spotkajmy się na dworcu}}
<h3>Polski przyimek, angielski odpowiednik</h3>
<div class="tbl"><table><tr><th>Po polsku</th><th>Po angielsku</th></tr><tr><td>w poniedziałek, w autobusie</td><td class="k">on Monday, on the bus</td></tr><tr><td>w domu, w wieku 20 lat</td><td class="k">at home, at the age of 20</td></tr><tr><td>na zdjęciu, na lekcji</td><td class="k">in the picture, in class</td></tr><tr><td>na spotkaniu</td><td class="k">at the meeting</td></tr><tr><td>(iść) do domu</td><td class="k">go home (bez przyimka)</td></tr><tr><td>słuchać muzyki, czekać na autobus</td><td class="k">listen to music, wait for the bus</td></tr><tr><td>grać na gitarze, zależeć od pogody</td><td class="k">play the guitar, depend on the weather</td></tr></table></div>
<h3>Kiedy przyimka nie ma</h3>
<p>Przed <b>next, last, this, every, tomorrow, yesterday</b> nie stawiamy przyimka, choć po polsku często jest „w”: „w przyszłym tygodniu” to next week.</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|Do zobaczenia w przyszłym tygodniu (nie: on next week ✗)}}
<div class="tip">Wyjątki do zapamiętania: <b>at night</b>, ale <b>in the morning / afternoon / evening</b>. „W weekend” to w USA <b>on the weekend</b>, a w Wielkiej Brytanii <b>at the weekend</b>.</div>`},

{ id:"smalltalk", title:"7 · Small talk, czyli pogawędki", blurb:"How are you? to powitanie, a nie pytanie o zdrowie. Tematy bezpieczne i takie, których lepiej unikać.", deck:"Pogawędki", body:`
<p>W USA krótka rozmowa z nieznajomym — w windzie, przy kasie, przed spotkaniem — jest czymś zwyczajnym. To nie głęboka dyskusja, tylko <b>kilka zdań dla dobrej atmosfery</b>. W Polsce z obcymi rozmawia się rzadziej, dlatego warto poznać reguły tej gry.</p>
<h3>How are you? to powitanie</h3>
<p>Nikt nie pyta tu naprawdę o samopoczucie. Na polskie „Co słychać?” można odpowiedzieć szczerze: „Stara bieda” albo „Szkoda gadać”. Po angielsku odpowiada się krótko i pogodnie, a potem <b>zadaje pytanie zwrotne</b>.</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|Cześć, jak leci?}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|Całkiem dobrze! A u ciebie?}}{{ex:I'm good, thanks. And you?|/aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/|Dobrze, dzięki. A u ciebie?}}
<h3>Tematy bezpieczne i ryzykowne</h3>
<div class="tbl"><table><tr><th>Bezpieczne</th><th>Na początek lepiej unikać</th></tr><tr><td>pogoda, plany na weekend i urlop</td><td>wiek, stan cywilny</td></tr><tr><td>jedzenie, restauracje, podróże</td><td>waga i wygląd</td></tr><tr><td>seriale, filmy, sport</td><td>zarobki, ceny mieszkań</td></tr><tr><td>praca (ogólnie), okolica</td><td>polityka, religia</td></tr></table></div>
<p>Wspólne narzekanie, które po polsku często przełamuje lody, w angielskim small talku lepiej zostawić na później. Na początek bezpieczniej coś pochwalić.</p>
<h3>Jak podtrzymać rozmowę</h3>
<p>Odpowiedź + <b>jedna dodatkowa informacja</b> + <b>pytanie zwrotne</b>. Te trzy kroki wystarczą, żeby rozmowa się nie urwała.</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|Było super! Byłam w górach. A ty?}}
<p>Ważne są też krótkie reakcje: <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>Jak naturalnie zakończyć</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|No dobrze, muszę już lecieć}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|Miło było porozmawiać}}
<div class="tip">Z przeczeniem zgadzamy się przez <b>Me neither</b>: I don't like horror movies. → Me neither. (Me too ✗). W potocznym amerykańskim słychać też Me either, ale wzorcowe jest Me neither.</div>`},

{ id:"phrasal", title:"8 · Czasowniki frazowe: pierwsze kroki", blurb:"Czasownik + małe słowo = zupełnie nowe znaczenie. W codziennej rozmowie są wszędzie.", deck:"Czasowniki frazowe", body:`
<p>Czasownik frazowy (phrasal verb) to <b>czasownik + małe słowo, takie jak up, out, off, on</b>, które razem dają nowe znaczenie. Polakom łatwiej sięgnąć po jedno „łacińskie” słowo, bo przypomina polskie: tolerate — tolerować. W codziennej rozmowie naturalniej brzmi jednak czasownik frazowy: o gaszeniu ognia mówi się put out, a nie extinguish.</p>
<div class="tbl"><table><tr><th>Jedno słowo (bardziej oficjalne)</th><th>Czasownik frazowy (na co dzień)</th><th>Znaczenie</th></tr><tr><td>postpone</td><td class="k">put off</td><td>odkładać, przekładać</td></tr><tr><td>discover</td><td class="k">find out</td><td>dowiedzieć się</td></tr><tr><td>exercise</td><td class="k">work out</td><td>ćwiczyć, trenować</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>znosić, tolerować</td></tr></table></div>
<h3>Małe słowo podpowiada znaczenie</h3>
<p><b>up</b> to często „do góry” albo „do końca”, <b>out</b> — „na zewnątrz” albo „aż się skończy”, <b>off</b> — „od czegoś” albo „wyłączone”, <b>on</b> — „na czymś” albo „włączone, dalej”. Podobnie działają polskie przedrostki: włączyć, wyłączyć, dorosnąć.</p>
{{ex:I grew up in Krakow.|/aɪ ˈgruː ˈʌp ɪn ˈkrɑːkaʊ/|Dorastałem w Krakowie}}{{ex:We ran out of milk.|/wi ˈræn ˈaʊt əv ˈmɪlk/|Skończyło nam się mleko}}{{ex:Turn off your phone, please.|/ˈtɜːrn ˈɔːf jʊr ˈfoʊn ˈpliːz/|Proszę wyłączyć telefon}}
<h3>Zaimek idzie do środka</h3>
<p>Wiele czasowników frazowych z dopełnieniem można rozdzielić. Rzeczownik może stać przed małym słowem albo po nim, ale <b>zaimek (it, them, me, you) zawsze stoi w środku</b>.</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/|Włącz światło (obie wersje są poprawne)}}{{ex:Turn it on.|/ˈtɜːrn ɪt ˈɑːn/|Włącz to (nie: turn on it ✗)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk ju ˈʌp ət ˈsevn/|Przyjadę po ciebie o siódmej}}
<h3>Czasowniki nierozdzielne</h3>
<p>Tych z przyimkiem — look after, look for, get along with — nie rozdzielamy: <i>look after my cat</i>, <i>look after her</i>.</p>
<div class="tip">Czasowników frazowych najlepiej uczyć się <b>w całości</b>, jak pojedynczych słów, razem z przykładowym zdaniem — wtedy miejsce zaimka zapamiętuje się samo. Trzy nowe dziennie, użyte w prawdziwym zdaniu, w zupełności wystarczą.</div>`},

{ id:"numbers", title:"9 · Liczby, godziny i ceny", blurb:"Przecinek czy kropka, 13 czy 30, miliard czy billion — i jak czytać ceny oraz godziny.", deck:"Liczby, godziny i daty", body:`
<p>Liczby przydają się od pierwszego dnia: w sklepie, w podróży, w pracy. Same liczebniki są proste — pułapki kryją się w zapisie, w akcencie i w jednym fałszywym przyjacielu.</p>
<h3>Kropka i przecinek — odwrotnie niż w polskim</h3>
<p>W polskim zapisie przecinek oddziela część dziesiętną, a tysiące oddziela spacja. W angielskim jest odwrotnie: <b>kropka</b> to część dziesiętna, a <b>przecinek</b> oddziela tysiące.</p>
<div class="tbl"><table><tr><th>Po polsku</th><th>Po angielsku</th><th>Jak czytać</th></tr><tr><td>3,5</td><td class="k">3.5</td><td>three point five</td></tr><tr><td>10 000</td><td class="k">10,000</td><td>ten thousand</td></tr><tr><td>50 000</td><td class="k">50,000</td><td>fifty thousand</td></tr><tr><td>1 000 000</td><td class="k">1,000,000</td><td>one million</td></tr><tr><td>1 000 000 000</td><td class="k">1,000,000,000</td><td>one billion</td></tr></table></div>
<p>Uwaga na fałszywego przyjaciela: polski <b>miliard</b> to angielskie <b>billion</b>, a polski <b>bilion</b> to <b>trillion</b>. Po liczbie słowa hundred, thousand i million nie dostają -s: two thousand, five million.</p>
<h3>-teen i -ty</h3>
<p>W liczbach 13–19 akcent pada na <b>koniec</b>, a w 30, 40, 50… na <b>początek</b>. W amerykańskiej wymowie t w thirty brzmi miękko, prawie jak szybkie „d”.</p>
{{ex:thirteen|/ˌθɜːrˈtiːn/|trzynaście}}{{ex:thirty|/ˈθɜːrti/|trzydzieści}}{{ex:fifteen / fifty|/ˌfɪfˈtiːn/ /ˈfɪfti/|piętnaście / pięćdziesiąt}}
<h3>Godziny</h3>
<p>Najprościej przeczytać godzinę i minuty po kolei. Przy minutach od 1 do 9 dodaje się „oh”. W USA zamiast zegara 24-godzinnego używa się <b>a.m.</b> (przed południem) i <b>p.m.</b> (po południu): 17:00 to 5 p.m.</p>
{{ex:It's seven fifteen.|/ɪts ˈsevn ˌfɪfˈtiːn/|Jest siódma piętnaście}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈoʊ ˈfaɪv/|Jest dziewiąta pięć}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔːrtər pæst ˈten/|Jest kwadrans po dziesiątej}}
<h3>Ceny i lata</h3>
<p>W cenie czyta się osobno dolary i centy albo po prostu dwie liczby. Rok dzieli się na dwie pary cyfr. Złoty to po angielsku zloty — tak samo dla jednego i dla wielu.</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔːr ˌnaɪnti ˈnaɪn/|To kosztuje cztery dziewięćdziesiąt dziewięć}}{{ex:That's twelve fifty.|/ˈðæts ˈtwelv ˈfɪfti/|Razem dwanaście pięćdziesiąt}}{{ex:Fifty zloty.|/ˈfɪfti ˈzlɔːti/|Pięćdziesiąt złotych}}{{ex:twenty twenty-six|/ˈtwenti ˌtwenti ˈsɪks/|rok 2026}}
<div class="tip">Uwaga na daty. Po polsku piszemy 23.11.2026, w USA kolejność to <b>miesiąc/dzień/rok</b>: 11/23/2026. Zapis 5/3 oznacza w USA 3 maja, a w Wielkiej Brytanii 5 marca. Najbezpieczniej napisać miesiąc słownie: May 3rd.</div>`},

{ id:"email", title:"10 · E-maile po angielsku", blurb:"Powitanie → cel → prośba → zakończenie. Krótko, konkretnie i uprzejmie.", deck:"Praca i e-maile", body:`
<p>Angielski e-mail służbowy jest <b>krótki, konkretny i uprzejmy</b>. Polska korespondencja biurowa bywa bardziej oficjalna: „Szanowni Państwo”, „uprzejmie informuję”, „z poważaniem”. Przetłumaczone słowo w słowo, takie zwroty brzmią sztywno, a sedno wiadomości ginie.</p>
<h3>Podstawowy układ</h3>
<div class="tbl"><table><tr><th>Część</th><th>Przykład</th></tr><tr><td>Powitanie</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>Pierwsze zdanie (uprzejmość, cel)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>Treść (prośba)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>Zakończenie</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Podpis</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>Hi + imię to standard</h3>
<p>W amerykańskich firmach pisze się <b>Hi + imię</b> nawet do osoby, z którą kontaktujemy się pierwszy raz. Dear zostaje na sytuacje bardzo oficjalne i łączy się z nazwiskiem: <b>Dear Ms. Nowak,</b>. Polskie „Pani Anno” nie ma odpowiednika: tytuł z samym imieniem (Dear Mrs. Anna ✗) to błąd. Piszemy Hi Anna albo Dear Ms. Nowak. Samo stanowisko bez nazwiska (Dear Manager) też brzmi dziwnie.</p>
{{ex:I hope this email finds you well.|/aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/|Mam nadzieję, że wszystko u pani dobrze}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑːloʊ ˈʌp ɑːn aʊər ˈmiːtɪŋ/|Piszę w nawiązaniu do naszego spotkania}}
<h3>Prośba łagodna, termin konkretny</h3>
{{ex:Could you send me the report by Thursday?|/kəd ju ˈsend mi ðə rɪˈpɔːrt baɪ ˈθɜːrzdeɪ/|Czy może mi pan przesłać raport do czwartku?}}{{ex:Thanks for your patience.|/ˈθæŋks fər jʊr ˈpeɪʃns/|Dziękuję za cierpliwość}}
<p>ASAP brzmi jak poganianie. Lepiej podać termin: <b>by + dzień</b>. I jeszcze interpunkcja: po polsku przed „że” zawsze stoi przecinek, po angielsku przed that go nie ma: I think that the report is ready. (I think, that… ✗)</p>
<h3>Polskie formuły po angielsku</h3>
<div class="tbl"><table><tr><th>Po polsku</th><th>Po angielsku</th></tr><tr><td>„W załączeniu przesyłam raport”</td><td class="k">I've attached the report.</td></tr><tr><td>„Z góry dziękuję”</td><td class="k">Thanks in advance.</td></tr><tr><td>„Dziękuję za zaangażowanie” (po projekcie)</td><td class="k">Thanks for all your hard work!</td></tr><tr><td>„Dziękuję za pomoc”</td><td class="k">I really appreciate your help.</td></tr><tr><td>„Miłego weekendu!”</td><td class="k">Have a great weekend!</td></tr><tr><td>„Z poważaniem”</td><td class="k">Best regards,</td></tr></table></div>
<p>W pracy łatwo też o fałszywych przyjaciół: „aktualny” to current (actual znaczy „rzeczywisty”), „aktualnie” to currently (actually znaczy „właściwie, tak naprawdę”), „ewentualnie” to possibly (eventually znaczy „w końcu”), „pensja” to salary (pension to emerytura), a „promocja” to special offer (promotion to awans).</p>
<div class="tip">Nie trzeba za każdym razem pisać Sorry for the late reply. <b>Thanks for your patience</b> brzmi uprzejmie i pozytywnie, bez przepraszania.</div>`},

{ id:"idioms", title:"11 · Idiomy i slang: jak ich używać", blurb:"Wyrażenia, których nie da się tłumaczyć słowo w słowo. Kiedy i przy kim po nie sięgać?", deck:"Angielskie idiomy", body:`
<p>Idiom to wyrażenie, którego znaczenia nie da się złożyć ze znaczeń pojedynczych słów. <b>a piece of cake</b> nie ma nic wspólnego z ciastem — znaczy „bułka z masłem”. Bez idiomów trudno oglądać filmy i seriale bez napisów.</p>
<h3>Zapamiętuj obrazem</h3>
<p>Większość idiomów łatwo zapamiętać, jeśli wyobrazić sobie scenę.</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpiːs əv ˈkeɪk/|To bułka z masłem (dosłownie: kawałek ciasta)}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/|To kosztuje majątek (dosłownie: rękę i nogę)}}{{ex:I'm all ears.|/aɪm ˈɔːl ˈɪrz/|Zamieniam się w słuch (dosłownie: jestem samymi uszami)}}
<h3>Idiomy podobne do polskich</h3>
<div class="tbl"><table><tr><th>Po angielsku</th><th>Po polsku</th></tr><tr><td class="k">Speak of the devil!</td><td>O wilku mowa!</td></tr><tr><td class="k">Kill two birds with one stone</td><td>Upiec dwie pieczenie na jednym ogniu</td></tr><tr><td class="k">When pigs fly</td><td>Prędzej mi kaktus na dłoni wyrośnie</td></tr><tr><td class="k">A blessing in disguise</td><td>Szczęście w nieszczęściu</td></tr></table></div>
<p>Sens bywa wspólny, ale obraz jest inny, więc polskiego idiomu nie da się przełożyć słowo w słowo. „Z góry dziękuję” to Thanks in advance, a nie Thank you from the mountain ✗.</p>
<h3>Idiom a slang</h3>
<p><b>Idiomy</b> są w języku od dawna: używa ich każdy, niezależnie od wieku, także w pracy (Let's call it a day). <b>Slang</b> to modne słowa młodych ludzi, dobre tylko wśród znajomych (No cap, That song slaps). Slang szybko się zmienia, a w ustach starszej osoby może brzmieć sztucznie.</p>
{{ex:Let's call it a day.|/ˈlets ˈkɔːl ɪt ə ˈdeɪ/|Na dziś wystarczy (pasuje też na spotkaniu)}}{{ex:No cap, this is the best pizza ever.|/ˈnoʊ ˈkæp ˈðɪs ɪz ðə ˈbest ˈpiːtsə ˈevər/|Serio, to najlepsza pizza w życiu (tylko wśród znajomych)}}
<div class="tip">Idiomów nie warto upychać na siłę — zbyt wiele naraz brzmi nienaturalnie. Jeden na rozmowę, dokładnie tam, gdzie pasuje, robi najlepsze wrażenie.</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["Która litera nazywa się po angielsku /ˈdʒiː/?", ["J","G","Z","C"], 1, "G to /ˈdʒiː/. J to /ˈdʒeɪ/, Z to /ˈziː/, a C to /ˈsiː/."],
    ["Która forma jest poprawna?", ["a F","an U","a M","an F"], 3, "Nazwa litery F zaczyna się od samogłoski, więc an F. Tak samo an M. Nazwa U zaczyna się od /j/, więc a U."],
    ["Jak zapytać o pisownię słowa?", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "Po do czasownik ma formę podstawową: How do you spell that?"]
  ],
  pron: [
    ["Gdzie jest czubek języka przy angielskim R?", ["dotyka dziąseł za górnymi zębami","wysuwa się między zęby","niczego nie dotyka","dotyka dolnej wargi"], 2, "Przy R czubek języka niczego nie dotyka i nie drga. Gdy dotknie dziąseł, powstaje L."],
    ["Jak poprawnie wymówić th w słowie think?", ["lekko wysunąć czubek języka między zęby i wypuścić powietrze","złączyć wargi i je rozewrzeć","oprzeć górne zęby na dolnej wardze","cofnąć język w głąb ust"], 0, "Przy TH czubek języka widać między zębami. Z s wychodzi sink, a górne zęby na dolnej wardze dają f."],
    ["Gdzie pada akcent w słowie hotel?", ["na ho (początek)","nie ma akcentu","na obie sylaby jednakowo","na tel (koniec)"], 3, "ho-TEL: /hoʊˈtel/. Po polsku mówimy HO-tel, po angielsku akcent pada na ostatnią sylabę."]
  ],
  articles: [
    ["I'm ___ engineer. Co pasuje w lukę?", ["a","an","the","(bez przedimka)"], 1, "engineer zaczyna się od samogłoski, więc an. Przed nazwą zawodu przedimek jest obowiązkowy."],
    ["W restauracji, do kelnera: Can I see ___ menu?", ["the","a","an","(bez przedimka)"], 0, "Chodzi o konkretne menu tej restauracji, więc the."],
    ["„Lubię koty” (koty w ogóle) po angielsku?", ["I like a cat.","I like the cat.","I like cat.","I like cats."], 3, "O całej kategorii mówimy w liczbie mnogiej bez przedimka. a cat to „jakiś jeden kot”, the cat — „ten konkretny kot”."]
  ],
  be: [
    ["Wybierz poprawne zdanie.", ["I am like pierogi.","I like pierogi.","I liking pierogi.","I am likes pierogi."], 1, "like to zwykły czasownik, więc nie łączy się z to be (am)."],
    ["„Moja siostra mieszka w Gdańsku” po angielsku?", ["My sister live in Gdansk.","My sister is live in Gdansk.","My sister living in Gdansk.","My sister lives in Gdansk."], 3, "Podmiot my sister to trzecia osoba liczby pojedynczej (tak jak she), więc czasownik dostaje -s: lives."],
    ["Are you hungry? — jak odpowiedzieć „nie”?", ["No, I don't.","No, I'm not.","No, I amn't.","No, I doesn't."], 1, "Pytanie było z to be, więc odpowiedź też: No, I'm not."]
  ],
  polite: [
    ["Która prośba do nieznajomej osoby jest najuprzejmiejsza?", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "Could you…? to podstawowa uprzejma prośba. Give me brzmi jak rozkaz."],
    ["Would you mind opening the window? — która odpowiedź znaczy „Dobrze, już otwieram”?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "mind znaczy „mieć coś przeciwko”. No („nie mam nic przeciwko”) oznacza więc zgodę."],
    ["Jaką formę ma czasownik po Would you mind?", ["forma podstawowa (open)","to + forma podstawowa (to open)","druga forma (opened)","~ing (opening)"], 3, "Po mind stoi forma -ing: Would you mind waiting?"]
  ],
  tense: [
    ["„Codziennie rano piję kawę” (zwyczaj) po angielsku?", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "Zwyczaj wyraża Present Simple. Present Continuous znaczyłby „piję właśnie teraz”."],
    ["Kolega nie ma przy sobie portfela. Decyzja w tej chwili: „Ja zapłacę!”", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "Decyzję podjętą w chwili mówienia wyraża will. going to to wcześniejszy plan."],
    ["Jaka jest druga forma (Past Simple) czasownika go?", ["goed","gone","going","went"], 3, "go jest czasownikiem nieregularnym: go — went — gone."]
  ],
  prep: [
    ["„Spotkajmy się o siódmej” — Let's meet ___ 7.", ["in","at","on","to"], 1, "Przed godziną stoi at."],
    ["„W poniedziałek” — ___ Monday", ["on","in","at","by"], 0, "Przed dniami tygodnia i datami stoi on, choć po polsku jest „w”."],
    ["Wybierz poprawne zdanie.", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "Przed next, last, this i every nie stawiamy przyimka."]
  ],
  smalltalk: [
    ["Barista pyta: How are you today? Która odpowiedź jest najbardziej naturalna?", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "How are you? to powitanie. Wystarczy krótka odpowiedź i pytanie zwrotne."],
    ["Którego pytania lepiej unikać przy pierwszym spotkaniu?", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "Pytanie o wiek uchodzi w krajach anglojęzycznych za zbyt osobiste."],
    ["I don't like horror movies. — jak się zgodzić?", ["Me too.","So do I.","Me neither.","Me also."], 2, "Z przeczeniem zgadzamy się przez Me neither (albo Neither do I)."]
  ],
  phrasal: [
    ["„Możesz to wyłączyć?” Które zdanie jest poprawne?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "Zaimek (it) stoi w środku czasownika frazowego: turn it off."],
    ["Co znaczy run out of?", ["wybiec na zewnątrz","nie mieć już czegoś (skończyło się)","uciec skądś","spóźnić się"], 1, "We ran out of milk. znaczy „Skończyło nam się mleko”."],
    ["„Przełóżmy spotkanie na przyszły tydzień” po angielsku?", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "put off znaczy „odłożyć, przełożyć”. put on to „włożyć” albo „włączyć”, put out — „zgasić (ogień)”."]
  ],
  numbers: [
    ["Jak powiedzieć po angielsku 50 000?", ["five ten thousand","fifty hundred","five million","fifty thousand"], 3, "W angielskim zapisie to 50,000: 50 + thousand = fifty thousand."],
    ["Gdzie pada akcent w słowie thirteen?", ["na thir (początek)","na teen (koniec)","na obie sylaby jednakowo","nie ma akcentu"], 1, "W liczbach z -teen akcent pada na koniec, a w thirty — na początek."],
    ["Jak najnaturalniej przeczytać cenę $12.50?", ["one two five zero","twelve fifty","twelve point five dollar","twelve dollar fifty cent"], 1, "Cenę czytamy jako dwie liczby: twelve fifty."]
  ],
  email: [
    ["Pierwszy e-mail do Jenny Miller z firmy partnerskiej. Które powitanie jest najbezpieczniejsze?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "W amerykańskiej korespondencji służbowej najbezpieczniejsze jest Hi + imię. W bardzo oficjalnej sytuacji: Dear Ms. Miller,"],
    ["Projekt skończony. Jak podziękować zespołowi za włożoną pracę?", ["Thanks for your engagement.","Thanks for all your hard work!","Thank you from the mountain.","Please work harder."], 1, "Dziękujemy za konkretny wysiłek: Thanks for all your hard work! Engagement to po angielsku „zaręczyny”, nie „zaangażowanie”, a Thank you from the mountain to dosłowna kalka „z góry dziękuję”; Please work harder brzmi niegrzecznie."],
    ["Które zdanie uprzejmie podaje termin?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "Could you…? + by + dzień: prośba jest łagodna, a termin jasny."]
  ],
  idioms: [
    ["Co znaczy zdanie The test was a piece of cake.?", ["Test był bardzo łatwy","Na teście jedliśmy ciasto","Test był bardzo trudny","Test poszedł fatalnie"], 0, "a piece of cake to „bułka z masłem”."],
    ["Co znaczy zdanie I'm feeling under the weather.?", ["Pogoda jest brzydka","Jestem na dworze","Kiepsko się czuję","Złapał mnie deszcz"], 2, "Wyrażenie nie ma nic wspólnego z pogodą: znaczy „źle się czuć”."],
    ["Które zdanie najmniej pasuje do rozmowy z szefem?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "No cap i slaps to slang używany wśród znajomych. Idiomy pasują także w pracy."]
  ]
};
