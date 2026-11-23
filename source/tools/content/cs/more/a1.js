/* cs-en stage A1: lessons for Czech speakers (source of truth). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"„It“ a „there“: anglická věta potřebuje podmět", blurb:"Počasí a čas začínají slovem „it“. Když někde něco je, řekneš „there is“ nebo „there are“.", deck:"Nezávazná konverzace", body:`
<p>Česky stačí říct „Prší“ nebo „Je zima“ a věta je hotová. Anglická věta bez podmětu být nemůže. Kde žádný skutečný podmět není, zaplní jeho místo <b>it</b> nebo <b>there</b>.</p>
<h3>Počasí a čas: It</h3>
<p>Takové <b>it</b> neznamená „to“. Nepřekládá se, jen drží místo podmětu.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Dnes je zima}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Jsou tři hodiny}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Prší}}
<h3>Někde něco je: There is / There are</h3>
<p>Česká věta „Tady blízko je kavárna“ začíná místem. Anglická začne slovem <b>there</b>: jedna věc má <b>There is a …</b>, víc věcí má <b>There are …</b> a podstatné jméno v množném čísle. V řeči se <b>there is</b> stahuje na <b>there's</b>.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|Tady blízko je kavárna}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Jsou tu dva pokoje}}
<h3>Otázka a zápor</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Je tady toaleta?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Jsou tu volná místa?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Dnes žádný autobus nejede}}
<h3>There is, nebo have?</h3>
<p>Co někdo vlastní, říká sloveso <b>have</b>. Co se nachází na nějakém místě, říká <b>there is</b>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|Mám auto}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|Venku stojí auto}}
<div class="tip">Nejčastější chyby: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>They are two rooms here.</b> ✗ → <b>There are two rooms here.</b> ✓ / <b>There is cold.</b> ✗ → <b>It's cold there.</b> ✓</div>`,
check:[["Jak se anglicky řekne „Dnes je horko“?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"Počasí potřebuje podmět „it“: „It's hot today.“"],["There ___ three people. Co patří na vynechané místo?",["is","are","have","be"],1,"Lidí je víc, proto „there are“."],["Jak se anglicky zeptáš: „Je tady toaleta?“",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Na to, jestli někde něco je, se ptáš „Is there a …?“"]],
practice:[
["mc","Jak se anglicky řekne „Prší“?","It's raining.","Is raining.","There is raining.","Rain is.","Počasí má v angličtině podmět „it“."],
["mc","Jak se anglicky řekne „Tady blízko je kavárna“?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Co je na nějakém místě, uvádí „there is“; kavárna je jedna, proto neurčitý člen „a“."],
["mc","There ___ two rooms.","are","is","have","has","„Rooms“ je množné číslo, proto „are“."],
["mc","Jak se anglicky řekne „Jsou tři hodiny“?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","I čas začíná podmětem „it“."],
["mc","Jak se anglicky řekne „Mám auto“?","I have a car.","There is a car me.","I am a car.","It's a car me.","Co někdo vlastní, říká sloveso „have“."],
["or","Dnes je zima","It's cold today","There's","Počasí má podmět „it“, ne „there“."],
["or","Venku stojí auto","There's a car outside","cars","Auto je jedno: neurčitý člen „a“ a jednotné číslo „car“, ne množné číslo „cars“."],
["or","Jsou tu dvě volná místa","There are two seats","seat is","Po „two“ musí být množné číslo „seats“ a sloveso „are“."],
["fi","__ cold today.","Dnes je zima","It's|It is","Is|There's|This","Místo podmětu zaplní „it“."],
["fi","There __ a bank near here.","Tady blízko je banka","is","are|have|be","Banka je jedna, proto „is“."],
["fi","__ there any seats?","Jsou tu volná místa?","Are","Is|Do|Have","„Seats“ je množné číslo, proto „Are“."],
["ty","Dnes je horko","It's hot today","it · hot · today – počasí začíná slovem „it“","There's","Počasí začíná podmětem „it“."],
["ty","Je tady toaleta?","Is there a bathroom here|Is there a restroom here","is there · bathroom – pozor na člen","the","Ptáš se poprvé na jednu toaletu, proto neurčitý člen „a“."],
["ty","Jsou tu dva pokoje","There are two rooms","there are · two · room – množné číslo","room","Pokoje jsou dva, proto množné číslo „rooms“."]]},
{ id:"plurals", title:"Množné číslo: -s, „this“ / „these“ a „my“ / „your“", blurb:"Množné číslo čeština zná. Nové je slyšitelné -s, „these“ pro víc věcí a žádný člen vedle „my“.", deck:"Nakupování a placení", body:`
<p>Množné číslo znáš z češtiny, takže myšlenka je snadná. Angličtina na ně má jedinou koncovku: <b>-s</b>. Chybuje se jinde: ve výslovnosti, u slov <b>this</b> a <b>these</b> a u několika podstatných jmen, která se v češtině chovají jinak.</p>
<h3>Jak se množné číslo tvoří</h3>
<div class="tbl"><table><tr><th>Pravidlo</th><th>Příklad</th></tr><tr><td>většinou -s</td><td class="k">book → books</td></tr><tr><td>po s, x, ch a sh se píše -es</td><td class="k">box → boxes</td></tr><tr><td>souhláska + y → -ies</td><td class="k">city → cities</td></tr><tr><td>nepravidelně</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|dvě knihy}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|tři krabice}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|Mám dvě děti}}
<p>Koncovka se čte třemi způsoby: <b>/s/</b> po neznělé souhlásce (<b>books</b>), <b>/z/</b> po znělé souhlásce a po samohlásce (<b>bags</b>, <b>keys</b>) a <b>/ɪz/</b> po sykavce (<b>boxes</b>). Znělé <b>/z/</b> nech na konci slova znít: <b>dogs</b> <b>/ˈdɔːgz/</b> není <b>docks</b> <b>/ˈdɑːks/</b>.</p>
<h3>This / that pro jednu věc, these / those pro víc věcí</h3>
<p>Česky řekneš „Tohle je taška“ i „Tohle jsou klíče“ a slovo „tohle“ se nezmění. Anglicky se mění: <b>this is</b>, ale <b>these are</b>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Tohle je moje taška}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Tohle jsou moje klíče}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Tamty boty jsou hezké}}
<h3>My, your, his, her, our, their</h3>
<p>Přivlastňovací zájmena stojí před podstatným jménem a nemění se podle rodu ani čísla. Vedle nich už nesmí být <b>a</b> ani <b>the</b>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Je tohle tvůj telefon?}}{{ex:Her brothers live in Brno.|/hər ˈbrʌðərz ˈlɪv ɪn ˈbɜːrnoʊ/|Její bratři bydlí v Brně}}
<h3>Kde čeština počítá jinak</h3>
<p><b>People</b> je množné číslo slova <b>person</b>, proto <b>people are</b>. Po <b>one of</b> následuje množné číslo: <b>one of my colleagues</b>. A naopak „dveře“ a „hodinky“ jsou množné jen česky: <b>a door</b>, <b>a watch</b>.</p>
<div class="tip">Po číslovce a po slovech <b>many</b>, <b>these</b> a <b>those</b> je vždy množné číslo: <b>two friend</b> ✗ → <b>two friends</b> ✓. A vedle <b>my</b> žádný člen nestojí: <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Co patří na vynechané místo?",["sister","sisters","a sister","sister's"],1,"Sestry jsou dvě, proto množné číslo „sisters“."],["___ are my keys. Co patří na vynechané místo?",["This","That","These","It"],2,"„Keys“ je množné číslo, proto „These“."],["Jak se anglicky řekne „Tohle je moje taška“?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Vedle „my“ už žádný člen nestojí."]],
practice:[
["mc","Jak se anglicky řekne „dvě knihy“?","two books","two book","two a book","twos book","Po „two“ musí být množné číslo s -s."],
["mc","Množné číslo slova „child“?","children","childs","childes","child","„Child“ má nepravidelné množné číslo: „children“."],
["mc","___ shoes are nice. (tamty boty)","Those","That","This","It","„Shoes“ je množné číslo, proto „those“."],
["mc","Jak se anglicky řekne „Tohle je moje taška“?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","„My“ a člen se nikdy nepoužívají spolu."],
["mc","Množné číslo slova „box“?","boxes","boxs","boxies","box","Po s, x, ch a sh se přidává -es."],
["or","Tohle jsou moje klíče","These are my keys","key This","Klíčů je víc, proto „these“ a množné číslo „keys“."],
["or","Mám dvě děti","I have two children","child a","Po „two“ je množné číslo „children“. Člen „a“ sem nepatří."],
["or","Tamty boty jsou hezké","Those shoes are nice","That","„Shoes“ je množné číslo, proto „those“, ne „that“."],
["fi","I have three __.","Mám tři kočky","cats","cat|a cat|cat's","Kočky jsou tři, proto množné číslo „cats“."],
["fi","__ is my friend.","Tohle je můj kamarád","This","These|Those|They","Je to jeden člověk, proto „this“."],
["fi","Two __, please.","Dvě kávy, prosím","coffees","coffee|a coffee|coffee's","Když objednáváš dva šálky kávy, řekneš množné číslo „coffees“."],
["ty","Tohle jsou moje knihy","These are my books","these · my · book – množné číslo","book","Knih je víc, proto „these“ a množné číslo „books“."],
["ty","Mám dvě sestry","I have two sisters","have · two · sister – množné číslo","sister","Po „two“ je množné číslo „sisters“."],
["ty","Tohle je moje taška","This is my bag","this · my · bag – bez členu","a","Vedle „my“ člen „a“ nestojí."]]},
{ id:"present", title:"Přítomný čas prostý a slovosled: podmět + sloveso + předmět", blurb:"Český slovosled je volný, anglický pevný. A zápor netvoří předpona „ne-“, ale slovo „don't“.", deck:"Představování", body:`
<p>Česky můžeš říct „Piju kávu“, „Kávu piju“ i „Já kávu piju“. Kdo co dělá, ukážou koncovky. Angličtina koncovky nemá, a tak to ukazuje pořadím slov: <b>kdo → dělá → co</b>. A podmět nesmí chybět: „Piju“ je <b>I drink</b>.</p>
<h3>Podmět + sloveso + předmět</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Piju kávu}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Učím se anglicky}}
<h3>Místo a čas až na konec</h3>
<p>Další údaje přidáš za předmět, obvykle v pořadí <b>místo → čas</b>.</p>
{{ex:We live in Prague.|/wi ˈlɪv ɪn ˈprɑːg/|Bydlíme v Praze}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|Každý den se učím anglicky}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|O víkendech pracují}}
<h3>Zvyky, fakta a zápor</h3>
<p>Přítomný čas prostý (Present Simple) říká, co děláš běžně a co platí stále. Čeština tvoří zápor předponou: „nejím“. Angličtina dává před sloveso <b>don't</b>.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Nejím maso}}
<p>V anglické větě stačí jeden zápor. České „Nikdy nepiju kávu“ má zápory dva, anglické <b>I never drink coffee</b> jen jeden.</p>
<h3>Jak často: always, usually, sometimes, never</h3>
<p>Tato slova stojí <b>těsně před slovesem</b>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Obvykle vstávám v sedm}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Večer kávu nikdy nepiju}}
<div class="tip">Zvyk má vždy prostý tvar, i když je české sloveso nedokonavé: <b>I'm usually having dinner at seven.</b> ✗ → <b>I usually have dinner at seven.</b> ✓ A dvojí zápor do angličtiny nepatří: <b>I don't never drink coffee.</b> ✗ → <b>I never drink coffee.</b> ✓</div>`,
check:[["Jak se správně anglicky řekne „Piju kávu“?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Anglický slovosled je pevný: podmět + sloveso + předmět."],["I ___ eat meat. (nejím) Co patří na vynechané místo?",["not","am not","no","don't"],3,"Zápor slovesa „eat“ se tvoří pomocí „don't“."],["Která věta má „always“ na správném místě?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Slova jako „always“ stojí těsně před slovesem."]],
practice:[
["mc","Jak se anglicky řekne „Učím se anglicky“?","I study English.","I English study.","I am study English.","Study I English.","Pořadí je podmět + sloveso + předmět."],
["mc","Jak se anglicky řekne „Nejím maso“?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Zápor se tvoří pomocí „don't“ před slovesem."],
["mc","Jak se anglicky řekne „Bydlíme v Soulu“?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","Místo stojí až za slovesem."],
["mc","Jak se anglicky řekne „Obvykle vstávám v sedm“?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","„Usually“ stojí těsně před slovesem."],
["mc","Která věta mluví o tom, co děláš každý den?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Zvyk se říká přítomným časem prostým."],
["or","Každý den piju kávu","I drink coffee every day","the am","Zvyk má přítomný čas prostý. Káva obecně je bez členu, „the“ sem nepatří."],
["or","Čtu hodně knih","I read many books","book","Po „many“ je množné číslo „books“."],
["or","O víkendech pracujeme","We work on weekends","are","Před sloveso „work“ se nepřidává „are“."],
["fi","I __ like fish.","Ryby mi nechutnají","don't|do not","not|am not|no","Zápor se tvoří pomocí „don't“."],
["fi","I __ English every day.","Každý den se učím anglicky","study","am study|studying|to study","V přítomném čase prostém zůstává sloveso v základním tvaru."],
["fi","They live __ Busan.","Bydlí v Pusanu","in","at|on|to","Před názvem města je „in“."],
["ty","Piju čaj","I drink tea","drink · tea – bez členu","a","Čaj obecně je nepočitatelný a bez členu."],
["ty","Mám rád / ráda kočky","I like cats","like · cat – množné číslo","cat","Když mluvíš o kočkách obecně, použij množné číslo bez členu: „cats“."],
["ty","Nejím maso","I don't eat meat","don't · eat · meat – zápor","am","Zápor se tvoří pomocí „don't“."]]},
{ id:"questions", title:"Otázky: „Do you …?“ a tázací slova", blurb:"Jen zvednout hlas nestačí. „Do“ patří na začátek věty a tázací slovo ještě před něj.", deck:"Základní fráze 2", body:`
<p>Česky uděláš z věty otázku pouhou intonací: „Mluvíš anglicky?“ Angličtina k tomu potřebuje <b>změnit pořadí slov</b> nebo přidat pomocné sloveso.</p>
<h3>Sloveso to be: prohoď ho s podmětem</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Jsi v pořádku?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Je tohle tvoje taška?}}
<h3>Ostatní slovesa: na začátek Do</h3>
<p>Před větu postav pomocné sloveso <b>do</b>. Zbytek zůstane v pořadí podmět + sloveso.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Chutná ti káva?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Mluvíš anglicky?}}
<p>Odpověď je krátká: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<h3>Tázací slovo úplně na začátek</h3>
<p><b>What</b> (co), <b>where</b> (kde), <b>when</b> (kdy), <b>who</b> (kdo), <b>why</b> (proč), <b>how</b> (jak). Za tázacím slovem pokračuje stejný slovosled otázky.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Kde bydlíš?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Jakou máš práci?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Kde je toaleta?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Kolik to stojí?}}{{ex:What is it called?|/ˈwʌt ɪz ɪt ˈkɔːld/|Jak se to jmenuje?}}
<p>Pozor na české „jak“: „Jak se to jmenuje?“ je anglicky <b>What is it called?</b>, ne <b>How is it called?</b> A v nepřímé otázce se slovosled vrací k oznamovací větě: <b>Tell me where she lives.</b></p>
<div class="tip">Nejčastější chyby: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ / <b>How old she is?</b> ✗ → <b>How old is she?</b> ✓ / <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["Jak se anglicky zeptáš: „Chutná ti káva?“",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Otázka se slovesem „like“ začíná pomocným slovesem „Do“."],["Jak se anglicky zeptáš: „Kde bydlíš?“",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Pořadí je tázací slovo + „do“ + podmět + sloveso."],["Která odpověď se hodí k otázce „Do you speak English?“",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Na otázku s „Do“ odpovíš zase pomocí „do“."]],
practice:[
["mc","Jak se anglicky zeptáš: „Mluvíš anglicky?“","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Otázka začíná pomocným slovesem „Do“."],
["mc","Jak se anglicky zeptáš: „Kde bydlíš?“","Where do you live?","Where you live?","Where are you live?","Where live you?","Pořadí je tázací slovo + „do“ + podmět + sloveso."],
["mc","Jak se anglicky zeptáš: „Kolik to stojí?“","How much is this?","How much this is?","How much does this?","What much is this?","Na cenu se ptáš „How much is …?“"],
["mc","Do you like tea? Která odpověď je správně?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Na otázku s „Do“ odpovíš zase pomocí „do“."],
["mc","Jak se anglicky zeptáš na povolání: „Co děláš?“","What do you do?","What are you do?","What you do?","What do you?","Na povolání se ptáš „What do you do?“"],
["or","Chutná ti káva?","Do you like coffee","Are the","Otázka se slovesem „like“ začíná „Do“. Káva obecně je bez členu."],
["or","Kde je toaleta?","Where is the bathroom","a do","Jde o toaletu v této budově, proto určitý člen „the“."],
["or","Kde bydlíš?","Where do you live","are","Vedle slovesa „live“ potřebuje otázka pomocné „do“, ne „are“."],
["fi","__ you like music?","Máš rád / ráda hudbu?","Do","Are|Is|Does","Otázka se slovesem „like“ začíná „Do“."],
["fi","__ do you live?","Kde bydlíš?","Where","What|Who|When","Na místo se ptáš slovem „where“."],
["fi","What time __ it?","Kolik je hodin?","is","do|does|are","Jiné sloveso než „to be“ ve větě není, proto „is“."],
["ty","Mluvíš anglicky?","Do you speak English|Can you speak English","do · speak · English – otázka","Are","Otázka začíná pomocným slovesem „Do“."],
["ty","Kde je toaleta?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom – člen „the“","a","Oba víte, o kterou toaletu jde, proto určitý člen „the“."],
["ty","Máš rád / ráda psy?","Do you like dogs","do · like · dog – množné číslo","dog","O psech obecně mluvíš v množném čísle bez členu: „dogs“."]]},
{ id:"third-s", title:"„He“, „she“, „it“ a koncovka -s: „does“ / „doesn't“", blurb:"Ve 3. osobě jednotného čísla má sloveso -s. V otázce a v záporu si ho bere „does“.", deck:"Představování", body:`
<p>České sloveso má jinou koncovku v každé osobě: dělám, děláš, dělá. Angličtině zbyla v přítomném čase jediná: <b>-s</b> ve 3. osobě jednotného čísla, tedy po <b>he</b>, <b>she</b>, <b>it</b> a po jedné osobě nebo věci. Právě proto, že je jediná, se na ni snadno zapomíná.</p>
<div class="tbl"><table><tr><th>Podmět</th><th>Sloveso</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Ona pracuje v bance}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|On má rád fotbal}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Moje máma dobře vaří}}
<p>Koncovku vyslov zřetelně: <b>/s/</b> po neznělé souhlásce (<b>works</b>, <b>likes</b>), <b>/z/</b> po znělé souhlásce a po samohlásce (<b>lives</b>, <b>goes</b>), <b>/ɪz/</b> po sykavce (<b>watches</b>).</p>
<h3>Slovesa, která se trochu mění</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Ona má auto (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|On chodí do práce na osmou (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Ona se učí anglicky (study → studies)}}
<h3>Zápor a otázka: does</h3>
<p>Když použiješ <b>doesn't</b> nebo <b>Does</b>, koncovka -s se přestěhuje tam. Sloveso za ním zůstane v základním tvaru.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|On nepije kávu}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Bydlí ona tady?}}
<div class="tip">Nejčastější chyby: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ / <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. Co patří na vynechané místo?",["live","lives","living","is live"],1,"Po „she“ má sloveso koncovku -s."],["He ___ like coffee. Co patří na vynechané místo?",["don't","isn't","doesn't","not"],2,"Zápor po „he“ je „doesn't“."],["Jak se anglicky řekne „Ona má auto“?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"„Have“ se po „she“ mění na „has“."]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","Bratr je jedna osoba, proto „works“."],
["mc","Jak se anglicky řekne „On nepije kávu“?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Zápor po „he“ je „doesn't“ a základní tvar slovesa."],
["mc","Jak se anglicky zeptáš: „Bydlí ona tady?“","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Po „Does“ je sloveso bez -s."],
["mc","have → she ___","has","haves","have","is have","„Have“ se mění na „has“."],
["mc","study → he ___","studies","studys","study","studyes","Souhláska + y se mění na -ies."],
["or","Ona pracuje v bance","She works at a bank","work the","Po „she“ je „works“. O bance mluvíš poprvé, proto neurčitý člen „a“."],
["or","On má dva psy","He has two dogs","have dog","Po „he“ je „has“ a po „two“ množné číslo „dogs“."],
["or","Ona nejí maso","She doesn't eat meat","eats","Po „doesn't“ je sloveso bez -s."],
["fi","He __ soccer.","On má rád fotbal","likes","like|liking|is like","Po „he“ je „likes“."],
["fi","__ she speak English?","Mluví ona anglicky?","Does","Do|Is|Are","Otázka po „she“ začíná „Does“."],
["fi","She __ to work at eight.","Ona chodí do práce na osmou","goes","go|going|gos","„Go“ má ve 3. osobě tvar „goes“."],
["ty","On má auto","He has a car","has · car – člen „a“","have","Po „he“ je „has“; auto je jedno, proto neurčitý člen „a“."],
["ty","Ona má ráda kočky","She likes cats","likes · cat – množné číslo","cat","Po „she“ je „likes“; o kočkách obecně mluvíš v množném čísle: „cats“."],
["ty","On tady nebydlí","He doesn't live here","doesn't · live · here – zápor","lives","Po „doesn't“ je základní tvar slovesa."]]},
{ id:"countable", title:"Počitatelná a nepočitatelná podstatná jména: „some“, „any“, „much“, „many“", blurb:"„Information“, „advice“ a „money“ nemají v angličtině množné číslo. A české „hodně“ je jednou „many“, jindy „much“.", deck:"Restaurace", body:`
<p>Anglická podstatná jména se dělí na <b>počitatelná</b> a <b>nepočitatelná</b>. Čeština to dělení zná také, jen hranice vede jinudy. „Informace“, „rady“, „zprávy“, „peníze“, „vlasy“ i „nábytek“ jsou v angličtině nepočitatelné: <b>information</b>, <b>advice</b>, <b>news</b>, <b>money</b>, <b>hair</b>, <b>furniture</b>. Nemají <b>a</b>, nemají <b>-s</b> a sloveso je u nich v jednotném čísle: <b>The news is good.</b></p>
<div class="tbl"><table><tr><th>Počitatelná</th><th>Nepočitatelná</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>mohou mít <b>a</b> / <b>an</b>, číslovku i <b>-s</b></td><td>nemají <b>a</b> / <b>an</b>, číslovku ani <b>-s</b></td></tr></table></div>
<h3>Some a any</h3>
<p>České „nějaký“, „trochu“ nebo „pár“ je v kladné větě <b>some</b>, v záporu a v otázce <b>any</b>. Výjimka: když o něco prosíš nebo něco nabízíš, zůstává <b>some</b> i v otázce: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|Mám nějaké peníze}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Nemám žádné peníze}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Máte nějaké otázky?}}
<h3>Many a much</h3>
<p>České „hodně“ a „mnoho“ má dva překlady: <b>many</b> a množné číslo u počitatelných, <b>much</b> u nepočitatelných. <b>A lot of</b> se hodí k obojímu.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Kolik lidí?}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|Kolik to stojí?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Nemám moc času}}
<h3>Jak spočítat nepočitatelné</h3>
<p>Pomůže nádoba nebo kus: <b>a glass of</b>, <b>a cup of</b>, <b>a piece of</b>.</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|sklenice vody}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|šálek kávy}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|jedna rada}}
<div class="tip">Nejčastější chyby: <b>informations</b>, <b>advices</b>, <b>many money</b>, <b>The news are good.</b> ✗ → <b>information</b>, <b>advice</b>, <b>much money</b>, <b>The news is good.</b> ✓</div>`,
check:[["How ___ people are there? Co patří na vynechané místo?",["much","many","any","a"],1,"„People“ je počitatelné a v množném čísle, proto „many“."],["Které podstatné jméno je nepočitatelné?",["apple","chair","water","friend"],2,"„Water“ nemá člen „a“ ani koncovku -s."],["I don't have ___ money. Co patří na vynechané místo?",["some","a","many","any"],3,"V záporu se používá „any“."]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","„Water“ je nepočitatelné, proto nejde „a“ ani „many“."],
["mc","How ___ time do we have?","much","many","any","a","„Time“ je nepočitatelné, proto „much“."],
["mc","Jak se anglicky zeptáš: „Máte nějaké otázky?“","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Počitatelné podstatné jméno je po „any“ v množném čísle."],
["mc","Jak se anglicky řekne „sklenice vody“?","a glass of water","a water glass of","one waters","a glass water","Nepočitatelné věci se počítají pomocí „a glass of“."],
["mc","I have ___ friends in Seoul.","many","much","a","an","„Friends“ je počitatelné a v množném čísle, proto „many“."],
["or","Mám nějaké peníze","I have some money","a moneys","„Money“ je nepočitatelné: bez členu „a“ a bez -s."],
["or","Dvě jablka, prosím","Two apples please","apple","Po „two“ je množné číslo „apples“."],
["or","Nemám moc času","I don't have much time","many","„Time“ je nepočitatelné, proto „much“, ne „many“."],
["fi","How __ is this?","Kolik to stojí?","much","many|any|some","Na cenu se ptáš „how much“."],
["fi","I don't have __ questions.","Nemám žádné otázky","any","some|much|a","V záporu se používá „any“."],
["fi","a cup __ coffee","šálek kávy","of","for|in|a","Nádoba a její obsah se spojují pomocí „of“: „a cup of coffee“."],
["ty","Můžu dostat trochu vody?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water – bez členu","a","„Water“ je nepočitatelné, proto místo členu „a“ použiješ „some“."],
["ty","Máte nějaké otázky?","Do you have any questions","any · question – množné číslo","question","Počitatelné podstatné jméno je po „any“ v množném čísle: „questions“."],
["ty","Kolik lidí?","How many people","how many · people – počitatelné","much","„People“ je počitatelné podstatné jméno, proto „many“."]]},
{ id:"object-have", title:"„Me“, „him“, „her“ a sloveso „have“", blurb:"Za slovesem nestojí „I“, ale „me“. Věci jsou vždy „it“. A „have“ zvládne skoro všechno, co české „mít“.", deck:"Představování", body:`
<p>Čeština skloňuje: já – mě, on – ho, my – nás. Angličtině stačí dva tvary: jeden pro podmět a druhý pro všechno ostatní. Ten druhý stojí <b>za slovesem a za předložkou</b>.</p>
<div class="tbl"><table><tr><th>Podmět</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Předmět</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Ona mě zná}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Mám ho rád / ráda}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Můžeš nám pomoct?}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|Pracuju s ní}}
<p>Věci jsou v angličtině vždy <b>it</b>, i když je česky telefon „on“ a kniha „ona“: <b>My laptop is old, but it works.</b> A české „svůj“ se překládá podle podmětu: <b>I like my job</b>, ale <b>He likes his job</b>.</p>
<h3>Have: mít</h3>
<p>„Mám auto“ je slovo od slova <b>I have a car</b>. Rodina, věci i čas – ke všemu patří <b>have</b>.</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|Mám dva bratry}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Máš propisku?}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|Nemám čas}}
<h3>Have: jíst a pít</h3>
<p>S jídlem a pitím znamená <b>have</b> „dát si“. Před slovy <b>breakfast</b>, <b>lunch</b> a <b>dinner</b> není žádný člen.</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Pojďme na oběd}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|Každé ráno si dávám kávu}}
<div class="tip">Nejčastější chyby: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓ / <b>My phone is old, but he works.</b> ✗ → <b>My phone is old, but it works.</b> ✓ / <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓</div>`,
check:[["I like ___. (jeho) Co patří na vynechané místo?",["he","his","him","he's"],2,"Za slovesem stojí předmětový tvar „him“."],["Can you help ___? (nám) Co patří na vynechané místo?",["us","we","our","ours"],0,"Za slovesem stojí předmětový tvar „us“."],["Jak se anglicky zeptáš: „Máš propisku?“",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"„Have“ se chová jako každé jiné sloveso, proto se otázka tvoří pomocí „Do“."]],
practice:[
["mc","She knows ___. (mě) Co patří na vynechané místo?","me","I","my","mine","Za slovesem stojí předmětový tvar „me“."],
["mc","I like ___. (je, tedy ty lidi)","them","they","their","theirs","Za slovesem stojí předmětový tvar „them“."],
["mc","Jak se anglicky zeptáš: „Můžeš nám pomoct?“","Can you help us?","Can you help we?","Can you help our?","Can us help you?","Za slovesem stojí „us“, ne „we“."],
["mc","Jak se anglicky řekne „Pojďme na oběd“?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Před slovem „lunch“ není žádný člen: „have lunch“."],
["mc","Jak se anglicky řekne „Mám dva bratry“?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","O rodině mluvíš se slovesem „have“; po „two“ je množné číslo."],
["or","Máš propisku?","Do you have a pen","the pens","Jde o jakoukoli jednu propisku: neurčitý člen „a“ a jednotné číslo „pen“."],
["or","Mám ji rád / ráda","I like her","she","Za slovesem stojí předmětový tvar „her“."],
["or","Mám dvě sestry","I have two sisters","sister a","Po „two“ je množné číslo „sisters“. Člen „a“ sem nepatří."],
["fi","Call __ tonight.","Zavolej mi dnes večer","me","I|my|mine","Za slovesem stojí „me“."],
["fi","I work with __.","Pracuju s ním","him","he|his|he's","I za předložkou stojí předmětový tvar."],
["fi","She __ a dog.","Ona má psa","has","have|is|haves","Po „she“ je „has“."],
["ty","Můžeš mi pomoct?","Can you help me|Could you help me","can you · help · me – tvar za slovesem","I","Za slovesem stojí předmětový tvar „me“."],
["ty","Máš propisku?","Do you have a pen","do you have · pen – člen „a“","the","Hledáš jakoukoli jednu propisku, proto neurčitý člen „a“."],
["ty","Mám hodně kamarádů","I have many friends|I have a lot of friends","have · many · friend – množné číslo","friend","Po „many“ je množné číslo „friends“."]]},
{ id:"can-like", title:"„Can“, „like“ + -ing a „I'd like“: co umíš, co tě baví a co si přeješ", blurb:"Jak říct, co umíš, co tě baví a co si právě teď přeješ.", deck:"Nezávazná konverzace", body:`
<p>Tři vazby, které hned využiješ při představování a při objednávání.</p>
<h3>Can: umím, můžu</h3>
<p>České „umět“ i „moct“ je anglicky <b>can</b>. Za ním stojí základní tvar slovesa a ani po <b>he</b> a <b>she</b> se nepřidává -s.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Umím plavat}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Neumím řídit}}{{ex:Can you speak Czech?|/kən ju ˈspiːk ˈtʃek/|Umíš česky?}}
<h3>Like + -ing: baví mě to</h3>
<p>České „rád plavu“ si vystačí s příslovcem. Angličtina takové příslovce nemá: použiješ sloveso <b>like</b> nebo <b>love</b> a za ním <b>tvar s -ing</b>. Obrací se i „Líbí se mi to“: podmětem je člověk, <b>I like it</b>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Vaření mě baví}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Dívat se na filmy mě moc baví}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Běhání mě nebaví}}{{ex:I really like it.|/aɪ ˈriːəli ˈlaɪk ɪt/|Moc se mi to líbí}}
<h3>I'd like: zdvořilé přání</h3>
<p><b>I like</b> říká, co máš v oblibě stále. <b>I'd like</b> je zdvořilé „chci“ pro tuto chvíli, česky „dal bych si“ nebo „dala bych si“. Při objednávání používej <b>I'd like</b>.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Dám si kávu, prosím}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Dáte si čaj?}}
<div class="tip">Nejčastější chyby: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ / <b>I very like it.</b> ✗ → <b>I really like it.</b> ✓ / v kavárně <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. Co patří na vynechané místo?",["sings","sing","singing","to sing"],1,"Po „can“ je základní tvar slovesa."],["Jak se anglicky řekne „Vaření mě baví“?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Po „like“ je tvar s -ing."],["Která věta se nejlépe hodí pro objednávku v kavárně?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"Co chceš právě teď, řekneš zdvořile pomocí „I'd like“."]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","Po „can“ je základní tvar slovesa, bez -s."],
["mc","Jak se anglicky řekne „Neumím řídit“?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Zápor slovesa „can“ je „can't“."],
["mc","Jak se anglicky řekne „Baví mě dívat se na filmy“?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","Po „like“ je tvar s -ing; o filmech obecně mluvíš v množném čísle: „movies“."],
["mc","Jak si anglicky objednáš: „Dám si kávu, prosím“?","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","Co chceš právě teď, řekneš pomocí „I'd like“."],
["mc","Jak anglicky nabídneš: „Dáte si čaj?“","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Nabízíš otázkou „Would you like …?“"],
["or","Dám si kávu, prosím","I'd like a coffee please","the coffees","Objednáváš jeden šálek: neurčitý člen „a“ a jednotné číslo „coffee“."],
["or","Baví mě číst knihy","I like reading books","book read","Po „like“ je tvar s -ing; o knihách obecně mluvíš v množném čísle: „books“."],
["or","Umíš plavat?","Can you swim","swimming","Po „can“ je základní tvar slovesa."],
["fi","I can't __.","Neumím plavat","swim","swimming|swims|to swim","Po „can't“ je základní tvar slovesa."],
["fi","I like __ music.","Baví mě poslouchat hudbu","listening to","listen to|listen|to listening","Po „like“ je tvar s -ing."],
["fi","__ like a sandwich, please.","Dám si sendvič, prosím","I'd|I would","I|I'm|I can","Objednáváš pomocí „I'd like“."],
["ty","Vaření mě baví","I like cooking|I love cooking|I like to cook","like · cook – tvar s -ing","cook","Po „like“ je tvar s -ing."],
["ty","Dám si sendvič","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich – člen „a“","the","Objednáváš jakýkoli jeden sendvič, proto neurčitý člen „a“."],
["ty","Mám rád / ráda psy","I like dogs|I love dogs","like · dog – množné číslo","dog","O psech obecně mluvíš v množném čísle: „dogs“."]]},
{ id:"continuous", title:"Právě teď: „be“ + -ing", blurb:"Co děláš běžně, říká přítomný čas prostý. Co děláš právě teď, říká „be“ a tvar s -ing.", deck:"Nezávazná konverzace", body:`
<p>České „Hraju tenis“ znamená „hraju ho pravidelně“ i „hraju ho právě teď“. Angličtina to rozlišuje. Co se děje <b>v tuto chvíli</b>, má přítomný čas průběhový (Present Continuous): <b>be + tvar s -ing</b>.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Teď pracuju}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Ona zrovna vaří večeři}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Prší}}
<h3>Otázka a zápor</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Co zrovna děláš?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Posloucháš?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Nespím}}
<h3>Srovnání s přítomným časem prostým</h3>
<div class="tbl"><table><tr><th>Běžně (přítomný čas prostý)</th><th>Právě teď (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>Český nedokonavý vid není anglický průběhový čas. „Obvykle večeřím v sedm“ je zvyk, a proto má prostý tvar: <b>I usually have dinner at seven.</b></p>
<h3>Slovesa bez -ing</h3>
<p>Slovesa, která nepopisují činnost, ale <b>stav</b> – <b>like</b>, <b>know</b>, <b>want</b>, <b>need</b>, <b>have</b> (vlastnit) – zůstávají v prostém tvaru, i když jde o tuto chvíli.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Znám ho}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Chci trochu vody}}
<div class="tip">Nejčastější chyby: vynechané <b>be</b>, tedy <b>I working.</b> ✗ → <b>I'm working.</b> ✓, a průběhový tvar u stavu: <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["Jak se anglicky zeptáš: „Co zrovna děláš?“",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"Na to, co se děje právě teď, se ptáš pomocí „be“ a tvaru s -ing."],["I ___ coffee every morning. Co patří na vynechané místo?",["am drinking","drinking","drink","am drink"],2,"Každodenní zvyk má přítomný čas prostý."],["Která věta je správně?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"„Know“, „want“ a „have“ (vlastnit) se v průběhovém tvaru nepoužívají."]],
practice:[
["mc","Jak se anglicky řekne „Teď pracuju“?","I'm working now.","I work now am.","I'm work now.","I working now.","Co děláš právě teď, má „be“ a tvar s -ing."],
["mc","Jak se anglicky řekne „Ona zrovna vaří večeři“?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","Právě teď: „be“ a tvar s -ing. Před slovem „dinner“ není žádný člen."],
["mc","Která věta mluví o tom, co děláš každý den?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Zvyk má přítomný čas prostý."],
["mc","Jak se anglicky zeptáš: „Co zrovna děláš?“","What are you doing?","What do you doing?","What are you do?","What you are doing?","Pořadí je tázací slovo + „be“ + podmět + tvar s -ing."],
["mc","Jak se anglicky řekne „Znám ho“?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","„Know“ popisuje stav, proto nemá tvar s -ing."],
["or","Zrovna čtu knihu","I'm reading a book","read books","Právě teď čteš jednu knihu: neurčitý člen „a“ a jednotné číslo „book“."],
["or","Děti si zrovna hrají","The kids are playing","kid is","Dětí je víc, proto množné číslo „kids“ a sloveso „are“."],
["or","Teď prší","It's raining now","rains","Co se děje právě teď, má „be“ a tvar s -ing."],
["fi","I'm __ TV.","Dívám se na televizi","watching","watch|watches|to watch","Po „be“ následuje tvar s -ing."],
["fi","What __ you doing?","Co zrovna děláš?","are","do|is|does","K „you“ patří „are“."],
["fi","She __ working today.","Ona dnes nepracuje","isn't|is not","doesn't|don't|not","Zápor průběhového tvaru je „isn't“ a tvar s -ing."],
["ty","Teď vařím","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now – tvar s -ing","cook","Co děláš právě teď, má „be“ a tvar s -ing."],
["ty","Zrovna se dívám na film","I'm watching a movie","I'm · watching · movie – člen „a“","the","Jde o jakýkoli jeden film, proto neurčitý člen „a“."],
["ty","Děti zrovna spí","The kids are sleeping|The children are sleeping","kids · are · sleeping – množné číslo","kid","Dětí je víc, proto množné číslo „kids“ a sloveso „are“."]]},
{ id:"past", title:"Minulý čas: „was“ / „were“ a -ed", blurb:"Sloveso „to be“ má v minulosti tvary „was“ a „were“, ostatní slovesa -ed. Otázka a zápor chtějí „did“.", deck:"Nezávazná konverzace", body:`
<p>Čeština má jeden minulý čas a skládá ho ze slovesa „být“ a příčestí: „pracoval jsem“. Anglický minulý čas prostý (Past Simple) je jediné slovo, bez <b>am</b>: <b>I worked</b>. A nezáleží na tom, jestli je české sloveso dokonavé, nebo nedokonavé: „dělal jsem“ i „udělal jsem“ je <b>I did</b>.</p>
<h3>Sloveso to be: was / were</h3>
<p>Po <b>I</b>, <b>he</b>, <b>she</b> a <b>it</b> je <b>was</b>, po <b>you</b>, <b>we</b> a <b>they</b> je <b>were</b>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Byl jsem unavený}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Byla to zábava}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Byli jsme doma}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Měl / měla jsi hodně práce?}}
<h3>Ostatní slovesa: -ed</h3>
<p>Ke slovesu přidáš <b>-ed</b>. Tvar je stejný pro všechny osoby. Koncovka se čte <b>/t/</b> po neznělé souhlásce (<b>worked</b>), <b>/d/</b> po znělé souhlásce a po samohlásce (<b>called</b>, <b>played</b>) a <b>/ɪd/</b> jen po t a d (<b>wanted</b>). Slabiku navíc tedy většinou nepřidává: <b>worked</b> má jen jednu.</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Včera jsem pracoval / pracovala}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Dívali jsme se na film}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Volala mi}}
<h3>Zápor a otázka: did</h3>
<p>Po <b>didn't</b> a <b>Did</b> se sloveso vrací do základního tvaru.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Včera jsem nepracoval / nepracovala}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Volal / volala jsi mi?}}
<div class="tip">Nejčastější chyby: <b>I am worked.</b> ✗ → <b>I worked.</b> ✓ / <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ / <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Co patří na vynechané místo?",["was","were","did","are"],1,"Po „they“ je „were“."],["Jak se anglicky řekne „Včera jsem nepracoval / nepracovala“?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Po „didn't“ je základní tvar slovesa."],["Did you ___ the movie? Co patří na vynechané místo?",["watch","watched","watching","watches"],0,"Po „Did“ je základní tvar slovesa."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","Po „I“ je „was“."],
["mc","Jak se anglicky řekne „Dívali jsme se na film“?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Minulý čas pravidelného slovesa má koncovku -ed."],
["mc","Jak se anglicky zeptáš: „Volal / volala jsi včera?“","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Po „Did“ je základní tvar slovesa."],
["mc","Jak se anglicky řekne „Byla to zábava“?","It was fun.","It were fun.","It did fun.","It funned.","Po „it“ je „was“."],
["mc","Jak se anglicky zeptáš: „Měl / měla jsi hodně práce?“","Were you busy?","Did you busy?","Was you busy?","Were you busied?","„Busy“ je přídavné jméno a jiné sloveso ve větě není, proto se ptáš slovesem „to be“."],
["or","Dívali jsme se na film","We watched a movie","watch movies","Film byl jeden: neurčitý člen „a“ a jednotné číslo „movie“."],
["or","(říká dítě) Hrál / hrála jsem si s kamarády","I played with my friends","friend play","Kamarádů bylo víc, proto množné číslo „friends“."],
["or","Včera jsem nepracoval / nepracovala","I didn't work yesterday","worked","Po „didn't“ je základní tvar slovesa."],
["fi","We __ at home last night.","Včera večer jsme byli doma","were","was|did|are","Po „we“ je „were“."],
["fi","I __ soccer yesterday.","Včera jsem hrál / hrála fotbal","played","play|playing|was play","Minulý čas má koncovku -ed."],
["fi","__ you work yesterday?","Pracoval / pracovala jsi včera?","Did","Were|Do|Was","Otázka v minulém čase začíná „Did“."],
["ty","Byl jsem unavený","I was tired","was · tired – minulý čas","were","Po „I“ je „was“."],
["ty","Díval / dívala jsem se na film","I watched a movie","watched · movie – člen „a“","the","Film byl jeden a zmiňuješ ho poprvé, proto neurčitý člen „a“."],
["ty","Volal / volala jsem kamarádům","I called my friends","called · my · friend – množné číslo","friend","Kamarádů bylo víc, proto množné číslo „friends“."]]},
{ id:"irregular-past", title:"Nepravidelná slovesa v minulém čase: „went“, „ate“, „saw“", blurb:"Právě nejběžnější slovesa koncovku -ed nemají. Začni těmito dvanácti.", deck:"Nezávazná konverzace", body:`
<p>Slovesa, která používáš každý den, mají minulý tvar <b>nepravidelný</b>. Tabulku tří tvarů (go – went – gone) znáš ze školy. Tady potřebuješ ten druhý, minulý tvar. Pravidlo neexistuje, proto se uč dvojice.</p>
<div class="tbl"><table><tr><th>Základní tvar</th><th>Minulý tvar</th><th>Základní tvar</th><th>Minulý tvar</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Brno.|/aɪ ˈwent tə ˈbɜːrnoʊ/|Jel / jela jsem do Brna}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Jedli jsme pizzu}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Viděl / viděla jsem film}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Sešel / sešla jsem se s kamarády}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Koupil / koupila jsem si knihu}}
<h3>V otázce a v záporu zase základní tvar</h3>
<p>Minulost už ukazuje <b>did</b>, a tak se sloveso vrací do základního tvaru.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Co jsi dělal / dělala?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Kam jsi šel / šla?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Nešel / nešla jsem}}
<div class="tip">Nejčastější chyby: <b>I goed.</b> ✗ → <b>I went.</b> ✓ / <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Minulý tvar slovesa „go“?",["goed","gone","went","going"],2,"Minulý tvar slovesa „go“ je „went“."],["Jak se anglicky zeptáš: „Co jsi dělal / dělala?“",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Po „did“ je základní tvar „do“."],["I didn't ___ breakfast. Co patří na vynechané místo?",["ate","eaten","eats","eat"],3,"Po „didn't“ je základní tvar slovesa."]],
practice:[
["mc","Minulý tvar slovesa „eat“?","ate","eated","eat","eaten","Minulý tvar slovesa „eat“ je „ate“."],
["mc","Jak se anglicky zeptáš: „Kam jsi šel / šla?“","Where did you go?","Where did you went?","Where you went?","Where were you go?","Po „did“ je základní tvar slovesa."],
["mc","Jak se anglicky řekne „Koupil / koupila jsem si knihu“?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Minulý tvar slovesa „buy“ je „bought“; kniha je jedna, proto neurčitý člen „a“."],
["mc","Minulý tvar slovesa „see“?","saw","seed","seen","sawed","Minulý tvar slovesa „see“ je „saw“."],
["mc","Jak se anglicky řekne „Nešel / nešla jsem“?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Po „didn't“ je základní tvar slovesa."],
["or","Viděl / viděla jsem film","I saw a movie","see movies","Film byl jeden: neurčitý člen „a“ a jednotné číslo „movie“. Minulý tvar slovesa „see“ je „saw“."],
["or","Jedli jsme pizzu","We ate pizza","eated","Minulý tvar slovesa „eat“ je „ate“."],
["or","Sešel / sešla jsem se s kamarády","I met my friends","friend meet","Kamarádů bylo víc, proto množné číslo „friends“."],
["fi","I __ to Jeju last year.","Loni jsem jel / jela na Čedžu","went","go|goed|gone","Minulý tvar slovesa „go“ je „went“."],
["fi","What did you __?","Co jsi jedl / jedla?","eat","ate|eaten|eating","Po „did“ je základní tvar slovesa."],
["fi","She __ a new phone.","Koupila si nový telefon","bought","buyed|buy|buys","Minulý tvar slovesa „buy“ je „bought“."],
["ty","Jel / jela jsem do Pusanu","I went to Busan","went · to · Busan – minulý tvar","go","Minulý tvar slovesa „go“ je „went“."],
["ty","Koupil / koupila jsem si knihu","I bought a book","bought · book – člen „a“","the","Kniha je jedna a zmiňuješ ji poprvé, proto neurčitý člen „a“."],
["ty","Sešel / sešla jsem se s kamarády","I met my friends|I saw my friends","met · my · friend – množné číslo","friend","Kamarádů bylo víc, proto množné číslo „friends“."]]},
{ id:"the", title:"Člen „the“ podruhé: kdy ano a kdy žádný člen", blurb:"Poprvé „a“, podruhé „the“. Praha je bez členu, ale Česká republika ho má.", deck:"Cesta a doprava", body:`
<p>Členy se nedají naučit najednou. Čeština je nemá, a tak se chybuje oběma směry: <b>the</b> chybí tam, kde být má, a přebývá tam, kde být nemá. Tady si procvičíš obojí.</p>
<h3>Poprvé a, podruhé the</h3>
<p>Co posluchač slyší poprvé, má <b>a</b>. Co už zná, protože o tom právě byla řeč, má <b>the</b>.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Koupil / koupila jsem si košili. Ta košile je modrá}}
<h3>Je jasné, o kterou věc jde: the</h3>
<p>Okno v této místnosti, stanice v této čtvrti, slunce: je jen jedno, takže <b>the</b> hned napoprvé.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Můžeš otevřít okno?}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|Kde je stanice metra?}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|Slunce dnes pálí}}
<h3>Bez členu</h3>
<p>Běžná spojení o místě, dopravě a jídle se uč vcelku. Bez členu jsou také města a většina zemí: <b>in Prague</b>, <b>in France</b>. Výjimkou jsou názvy se slovem jako <b>Republic</b> nebo <b>States</b>: <b>the Czech Republic</b>, <b>the United States</b>.</p>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Jezdím do práce autobusem}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Jsem doma}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|Chodím spát v jedenáct}}{{ex:I'm from the Czech Republic.|/aɪm frəm ðə ˈtʃek rɪˈpʌblɪk/|Jsem z České republiky}}
<p>České „ten“ není vždy <b>the</b> a <b>the</b> není vždy „ten“. „Kde je nádraží?“ žádné „to“ nemá, a přesto je anglicky <b>the station</b>.</p>
<div class="tip">Zeptej se: „Ví posluchač, kterou věc myslím?“ Když ano, <b>the</b>. Když ne, <b>a</b>. Časté chyby: <b>I live in the Prague.</b> ✗ → <b>I live in Prague.</b> ✓ / <b>I'm from Czech Republic.</b> ✗ → <b>I'm from the Czech Republic.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. Co patří na vynechané místo?",["A","An","The","(bez členu)"],2,"Je to ta kočka, o které už byla řeč, proto „the“."],["I go to ___ work by bus. Co patří na vynechané místo?",["a","the","an","(bez členu)"],3,"Ve spojení „go to work“ není žádný člen."],["Chceš, aby někdo otevřel okno v této místnosti. Která věta je správně?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Oba víte, o které okno jde, proto „the“."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","Je to ta košile, o které už byla řeč, proto určitý člen „the“."],
["mc","Jak se anglicky zeptáš: „Kde je nádraží?“","Where's the station?","Where's a station?","Where's station?","Where the station?","Jde o nádraží v tomto městě, proto „the“."],
["mc","Která věta je správně?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","Ve spojeních „go to work“ a „by bus“ není žádný člen."],
["mc","Jak se anglicky řekne „Slunce pálí“?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","Slunce je jen jedno, proto „the“."],
["mc","Jak se anglicky řekne „Jsem doma“?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","Ve spojení „at home“ není žádný člen."],
["or","Můžeš otevřít okno?","Can you open the window","a windows","Oba víte, o které okno jde, proto určitý člen „the“."],
["or","Jezdím do práce autobusem","I go to work by bus","the a","Spojení „go to work“ a „by bus“ jsou bez členu."],
["or","Ten pes je velký","The dog is big","A dogs","Je to pes, o kterém už byla řeč, proto určitý člen „the“."],
["fi","I saw a movie. __ movie was great.","Viděl / viděla jsem film. Ten film byl skvělý","The","A|An|Some","Je to ten film, o kterém už byla řeč, proto „the“."],
["fi","Where's __ bathroom?","Kde je toaleta?","the","a|an|some","Jde o toaletu v této budově, proto „the“."],
["fi","I have __ idea.","Mám nápad","an","a|the|some","Nápad zmiňuješ poprvé a „idea“ začíná samohláskou, proto „an“."],
["ty","Můžeš zavřít dveře?","Can you close the door|Could you close the door","can you · close · door – člen „the“","a","Oba víte, o které dveře jde, proto určitý člen „the“."],
["ty","Kde je nádraží?","Where is the station|Where's the station","where · station – člen „the“","a","Jde o nádraží v tomto městě, proto určitý člen „the“."],
["ty","Jsem doma","I'm at home|I'm home","I'm · at · home – bez členu","the","Před slovem „home“ není žádný člen."]]},
{ id:"adjectives", title:"Přídavná jména a stupňování: „bigger“, „more expensive“, „the best“", blurb:"Anglické přídavné jméno se neskloňuje. Stupňuje se koncovkou -er nebo slovem „more“ a 3. stupeň má „the“.", deck:"Nakupování a placení", body:`
<p>Anglické přídavné jméno stojí <b>před podstatným jménem</b> nebo <b>za slovesem to be</b>, stejně jako české. Na rozdíl od českého se ale neskloňuje a nemá rod ani číslo. Při nakupování se ti bude hodit hlavně stupňování.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|velká taška}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Tahle taška je velká}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|Je to moc malé}}
<h3>2. stupeň: -er, nebo more</h3>
<p>Krátká slova přidávají <b>-er</b>, dlouhá mají před sebou <b>more</b>. České „než“ je <b>than</b>.</p>
<div class="tbl"><table><tr><th>Základní tvar</th><th>2. stupeň</th><th>3. stupeň</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Tohle je levnější}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Je to dražší než tamto}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Máte větší velikost?}}
<h3>3. stupeň má the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Tohle je tady nejlepší restaurace}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Který je nejlevnější?}}
<h3>So, nebo such?</h3>
<p>České „tak“ má dva překlady. Před samotným přídavným jménem je <b>so</b>: <b>so nice</b>. Když následuje i podstatné jméno, je to <b>such a</b>: <b>such a nice day</b>.</p>
{{ex:It's such a nice day.|/ɪts ˈsʌtʃ ə ˈnaɪs ˈdeɪ/|Je tak krásný den}}
<div class="tip">Nejčastější chyby: <b>more cheaper</b>, <b>more better</b> ✗ → <b>cheaper</b>, <b>better</b> ✓ Koncovka -er a slovo <b>more</b> se nikdy nepoužívají spolu. A také <b>so nice day</b> ✗ → <b>such a nice day</b> ✓</div>`,
check:[["2. stupeň přídavného jména „big“?",["more big","biger","bigger","most big"],2,"Krátké slovo přidává -er; po krátké samohlásce se koncová souhláska zdvojuje."],["This is ___ expensive than that. Co patří na vynechané místo?",["more","most","much","very"],0,"Dlouhé slovo tvoří 2. stupeň pomocí „more“."],["3. stupeň přídavného jména „good“?",["the goodest","the most good","the better","the best"],3,"Nepravidelně: „good“ – „better“ – „the best“."]],
practice:[
["mc","2. stupeň přídavného jména „cheap“?","cheaper","more cheap","cheapper","most cheap","Krátké slovo přidává -er."],
["mc","Jak se anglicky řekne „Tohle je dražší“?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Dlouhé slovo tvoří 2. stupeň pomocí „more“."],
["mc","Jak se anglicky zeptáš: „Máte větší velikost?“","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Pořadí je člen + přídavné jméno + podstatné jméno."],
["mc","2. stupeň přídavného jména „good“?","better","gooder","more good","best","Nepravidelně: „good“ – „better“ – „best“."],
["mc","Jak se anglicky řekne „Tohle je nejlepší restaurace“?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Před 3. stupněm stojí „the“."],
["or","Máte větší velikost?","Do you have a bigger size","the sizes","Hledáš jakoukoli jednu větší velikost, proto neurčitý člen „a“."],
["or","Tohle je nejlevnější","This is the cheapest","a cheaper","Před 3. stupněm stojí určitý člen „the“."],
["or","Tohle je levnější než tamto","This is cheaper than that","more","K přídavnému jménu s koncovkou -er se už „more“ nepřidává."],
["fi","It's __ small.","Je to moc malé","too","much|more|most","České „moc“ ve smyslu „příliš“ je „too“."],
["fi","This is cheaper __ that one.","Tohle je levnější než tamto","than","then|that|more","České „než“ je „than“."],
["fi","It's the __ expensive one.","Je to ten nejdražší","most","more|much|very","Dlouhé slovo tvoří 3. stupeň pomocí „the most“."],
["ty","Máte menší velikost?","Do you have a smaller size","smaller · size – člen „a“","the","Hledáš jakoukoli jednu menší velikost, proto neurčitý člen „a“."],
["ty","Tohle je nejlepší","This is the best|This one is the best","the · best – člen „the“","a","Před 3. stupněm stojí určitý člen „the“."],
["ty","Tohle je levnější","This is cheaper|This one is cheaper","cheap – 2. stupeň","more","Krátké slovo přidává -er."]]},
{ id:"going-to", title:"Plány: „be going to“", blurb:"Co už máš v plánu, řekneš vazbou „be going to“ a základním tvarem slovesa.", deck:"Nezávazná konverzace", body:`
<p>České „budu dělat“, „udělám“ a často i přítomný čas („Zítra jedu do Brna“) mluví o tom, co máš <b>už naplánované</b>. Angličtina pro to má vazbu <b>be + going to + základní tvar slovesa</b>.</p>
{{ex:I'm going to visit Brno.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˈbɜːrnoʊ/|Chystám se navštívit Brno}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Ona si koupí auto}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Půjdeme na večeři}}
<h3>Zápor a otázka</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Nepůjdu}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Přijdeš?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Co budeš dělat o víkendu?}}
<h3>Předpověď podle toho, co vidíš</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Bude pršet}}
<h3>Časové údaje</h3>
<p>Na konec věty patří <b>tomorrow</b> (zítra), <b>tonight</b> (dnes večer), <b>this weekend</b> (tento víkend) nebo <b>next week</b> (příští týden).</p>
<div class="tip">V řeči zní <b>going to</b> jako <b>gonna</b>. A nezapomeň na sloveso <b>be</b>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["Jak se anglicky řekne „Zítra se sejdu s kamarádem“?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"Vazba je „be“ + „going to“ + základní tvar slovesa."],["She ___ going to study. Co patří na vynechané místo?",["am","are","is","be"],2,"K „she“ patří „is“."],["Jak se anglicky zeptáš: „Co budeš dělat o víkendu?“",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Pořadí je tázací slovo + „be“ + podmět + „going to“."]],
practice:[
["mc","Jak se anglicky řekne „Pojedu do Pusanu“?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","Vazba je „be“ + „going to“ + základní tvar slovesa."],
["mc","They ___ going to come.","are","is","am","be","K „they“ patří „are“."],
["mc","Jak se anglicky řekne „Bude pršet“?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Po „going to“ je základní tvar slovesa."],
["mc","Jak se anglicky řekne „Nepůjdu“?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","„Not“ stojí hned za slovesem „be“."],
["mc","Jak se anglicky zeptáš: „Přijdeš?“","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","V otázce jde sloveso „be“ před podmět."],
["or","Ona si koupí auto","She's going to buy a car","the cars","Auto je jedno a zmiňuješ ho poprvé: neurčitý člen „a“ a jednotné číslo „car“."],
["or","Sejdu se s kamarády","I'm going to meet my friends","friend","Kamarádů je víc, proto množné číslo „friends“."],
["or","Půjdeme na večeři","We're going to have dinner","a","Před slovem „dinner“ není žádný člen."],
["fi","I'm going __ study tonight.","Dnes večer se budu učit","to","for|at|will","Vazba je „going to“ + základní tvar slovesa."],
["fi","__ you going to come?","Přijdeš?","Are","Do|Is|Will","K „you“ patří „Are“."],
["fi","It's going to __ tomorrow.","Zítra bude pršet","rain","rains|raining|rained","Po „going to“ je základní tvar slovesa."],
["ty","Chystám se podívat na film","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie – člen „a“","the","Jde o jakýkoli jeden film, proto neurčitý člen „a“."],
["ty","Co budeš dělat? (plán)","What are you going to do","what · going to · do – plán","will","Na plány se ptáš vazbou „be going to“."],
["ty","Chystám se sejít s kamarády","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend – množné číslo","friend","Kamarádů je víc, proto množné číslo „friends“."]]},
{ id:"joining", title:"Spojování vět: „and“, „but“, „or“, „so“, „because“", blurb:"Ze dvou krátkých vět jedna delší. A pozor: před „because“ se čárka nepíše.", deck:"Pocity a reakce", body:`
<p>Samé krátké věty znějí úsečně. S těmito pěti spojkami bude tvoje angličtina plynulejší. Většinu z nich znáš z češtiny, liší se hlavně pořadí a čárky.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Chutná mi káva i čaj}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Jsem unavená, ale šťastná}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Kávu, nebo čaj?}}
<h3>so: a tak, proto</h3>
<p>Pořadí je <b>důvod + so + výsledek</b>.</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Byl jsem unavený, tak jsem šel domů}}
<h3>because: protože</h3>
<p>Pořadí je <b>výsledek + because + důvod</b>. Česky se před „protože“ a „že“ píše čárka vždy. Anglicky se před <b>because</b> a <b>that</b> čárka nepíše.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Šla jsem domů, protože jsem byla unavená}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Zůstal / zůstala jsem doma, protože pršelo}}
<h3>too: také</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Mně se to taky líbí}}
<div class="tip"><b>So</b> a <b>because</b> nepatří do jedné věty: <b>Because I was tired, so I went home.</b> ✗ Vyber si jen jedno z nich. Stejně tak <b>although</b> a <b>but</b>: <b>Although I was tired, but I stayed.</b> ✗ → <b>Although I was tired, I stayed.</b> ✓</div>`,
check:[["I was sick, ___ I stayed home. Co patří na vynechané místo?",["because","but","so","or"],2,"Nejdřív důvod, potom výsledek: „so“."],["I stayed home ___ I was sick. Co patří na vynechané místo?",["because","so","but","and"],0,"Nejdřív výsledek, potom důvod: „because“."],["Jak se anglicky zeptáš: „Dáte si kávu, nebo čaj?“",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Když se vybírá jedno ze dvou, je to „or“."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","Dvě věci v protikladu spojuje „but“."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","Nejdřív důvod, potom výsledek: „so“."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","Nejdřív výsledek, potom důvod: „because“."],
["mc","Jak se anglicky zeptáš: „Kávu, nebo čaj?“","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Výběr ze dvou možností: „or“."],
["mc","Jak se anglicky řekne „Jsem unavená, ale šťastná“?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","České „ale“ je „but“."],
["or","Mám rád / ráda kočky a psy","I like cats and dogs","cat dog","O zvířatech obecně mluvíš v množném čísle: „cats“, „dogs“."],
["or","Jednu kávu a jeden sendvič, prosím","A coffee and a sandwich please","the or","Objednáváš po jednom kusu, proto před každým slovem neurčitý člen „a“."],
["or","Měl jsem hlad, a tak jsem jedl","I was hungry so I ate","because","Nejdřív důvod, potom výsledek: „so“."],
["fi","I'm tired __ happy.","Jsem unavená, ale šťastná","but","so|because|or","České „ale“ je „but“."],
["fi","I stayed home __ it was raining.","Zůstal / zůstala jsem doma, protože pršelo","because","so|but|or","Nejdřív výsledek, potom důvod: „because“."],
["fi","Coffee __ tea?","Kávu, nebo čaj?","or","so|but|because","Výběr ze dvou možností: „or“."],
["ty","Mám rád / ráda kávu a čaj","I like coffee and tea","like · coffee · and · tea – bez členu","a","Káva a čaj obecně jsou nepočitatelné a bez členu."],
["ty","Jsem unavená, ale šťastná","I'm tired but happy|I'm tired but I'm happy","tired · but · happy – česky „ale“","so","České „ale“ je „but“."],
["ty","Mám rád / ráda psy a kočky","I like dogs and cats|I like cats and dogs","dog · and · cat – množné číslo","dog","O zvířatech obecně mluvíš v množném čísle: „dogs“, „cats“."]]},
{ id:"czenglish", title:"Czenglish: falešní přátelé a čechismy", blurb:"„Actual“ neznamená „aktuální“ a „How is it called?“ anglicky nikdo neřekne. Nejčastější pasti české angličtiny.", deck:"Falešní přátelé a čechismy", body:`
<p>Hodně chyb, které Češi v angličtině dělají, nejsou chyby v gramatice, ale ve slovech. Anglické slovo vypadá jako české, a znamená něco jiného (<b>actual</b> není „aktuální“). Jedno české slovo má dva anglické překlady („učit“ je <b>teach</b>, „učit se“ je <b>learn</b>). A doslovný překlad dá větu, kterou angličtina nezná (<b>How is it called?</b>). Této směsi se říká Czenglish.</p>
<h3>Falešní přátelé</h3>
<div class="tbl"><table><tr><th>Česky</th><th>Špatně ✗</th><th>Správně ✓</th><th>Falešný přítel znamená</th></tr><tr><td>aktuální</td><td><b>actual</b></td><td class="k">current</td><td>skutečný</td></tr><tr><td>eventuálně</td><td><b>eventually</b></td><td class="k">possibly</td><td>nakonec</td></tr><tr><td>sympatický</td><td><b>sympathetic</b></td><td class="k">nice</td><td>soucitný</td></tr><tr><td>kontrola (u lékaře)</td><td><b>control</b></td><td class="k">check-up</td><td>ovládání, řízení</td></tr><tr><td>konkrétní</td><td><b>concrete</b></td><td class="k">specific</td><td>beton, betonový; hmatatelný</td></tr><tr><td>gymnázium</td><td><b>gymnasium</b></td><td class="k">high school</td><td>tělocvična</td></tr><tr><td>novela</td><td><b>novel</b></td><td class="k">novella</td><td>román</td></tr><tr><td>bilion</td><td><b>billion</b></td><td class="k">trillion</td><td>miliarda</td></tr></table></div>
{{ex:What's the current price?|/ˈwʌts ðə ˈkɜːrənt ˈpraɪs/|Jaká je aktuální cena?}}{{ex:She's very nice.|/ʃiz ˈveri ˈnaɪs/|Je moc sympatická}}{{ex:He goes to high school.|/hi ˈgoʊz tə ˈhaɪ ˈskuːl/|Chodí na gymnázium}}{{ex:I went to the doctor for a check-up.|/aɪ ˈwent tə ðə ˈdɑːktər fər ə ˈtʃekʌp/|Byl / byla jsem u lékaře na kontrole}}
<p>Když slovo vyměníš, nezapomeň na člen a číslo. <b>Check-up</b> je počitatelné podstatné jméno, a tak chce <b>a</b>. Spojení <b>go to high school</b> je bez členu, stejně jako <b>go to work</b>.</p>
<h3>Jedno české slovo, dvě anglická</h3>
<div class="tbl"><table><tr><th>Česky</th><th>Anglicky</th><th>Jak vybrat</th></tr><tr><td>učit / učit se</td><td class="k">teach / learn</td><td><b>teach</b> – učit někoho, <b>learn</b> – učit se</td></tr><tr><td>říct</td><td class="k">say / tell</td><td><b>say</b> – říct něco (<b>say hello</b>), <b>tell</b> – říct někomu (<b>tell me</b>)</td></tr><tr><td>půjčit / půjčit si</td><td class="k">lend / borrow</td><td><b>lend</b> – půjčit někomu, <b>borrow</b> – půjčit si od někoho</td></tr><tr><td>dělat</td><td class="k">do / make</td><td><b>do</b> – činnost a práce (<b>do homework</b>), <b>make</b> – něco vyrobit nebo připravit (<b>make coffee</b>)</td></tr><tr><td>zábavný</td><td class="k">fun / funny</td><td><b>fun</b> – příjemný, zábavný, <b>funny</b> – směšný, vtipný</td></tr></table></div>
{{ex:She teaches English.|/ʃi ˈtiːtʃɪz ˈɪŋglɪʃ/|Učí angličtinu}}{{ex:Tell me the truth.|/ˈtel mi ðə ˈtruːθ/|Řekni mi pravdu}}{{ex:Can I borrow your pen?|/kən aɪ ˈbɑːroʊ jʊr ˈpen/|Můžu si půjčit tvoji propisku?}}{{ex:The trip was fun.|/ðə ˈtrɪp wəz ˈfʌn/|Výlet byl zábavný}}
<h3>Čechismy: doslovné překlady</h3>
<div class="tbl"><table><tr><th>Česky</th><th>Čechismus ✗</th><th>Anglicky ✓</th></tr><tr><td>Jak se to jmenuje?</td><td><b>How is it called?</b></td><td class="k">What is it called?</td></tr><tr><td>Můžu mít dotaz?</td><td><b>Can I have a question?</b></td><td class="k">Can I ask a question?</td></tr><tr><td>Je mu 22 let.</td><td><b>He is 22 years.</b></td><td class="k">He's 22. / He's 22 years old.</td></tr><tr><td>všechno, co potřebuju</td><td><b>everything what I need</b></td><td class="k">everything that I need</td></tr><tr><td>základní škola</td><td><b>basic school</b></td><td class="k">elementary school</td></tr><tr><td>Jsem z Česka.</td><td><b>I'm from Czech.</b></td><td class="k">I'm from the Czech Republic.</td></tr></table></div>
{{ex:What is it called?|/ˈwʌt ɪz ɪt ˈkɔːld/|Jak se to jmenuje?}}{{ex:Can I ask a question?|/kən aɪ ˈæsk ə ˈkwestʃən/|Můžu mít dotaz?}}{{ex:He's 22 years old.|/hiz ˌtwentiˈtuː ˈjɪrz ˈoʊld/|Je mu 22 let}}{{ex:I'm from the Czech Republic.|/aɪm frəm ðə ˈtʃek rɪˈpʌblɪk/|Jsem z České republiky}}{{ex:She gave me some advice.|/ʃi ˈgeɪv mi ˈsʌm ədˈvaɪs/|Dala mi pár rad}}
<p><b>Advice</b> je nepočitatelné, i když jsou české „rady“ v množném čísle: bez <b>a</b> a bez <b>-s</b>. Krátký název země je <b>Czechia</b>. Samotné <b>Czech</b> je jen přídavné jméno a název jazyka.</p>
<div class="tip">Když anglické slovo vypadá jako české, ověř si ho ve slovníku: <b>actual</b>, <b>eventually</b>, <b>sympathetic</b> a <b>control</b> jsou jen podobná. Časté chyby: <b>I learned him English.</b> ✗ → <b>I taught him English.</b> ✓ / <b>How is it called?</b> ✗ → <b>What is it called?</b> ✓</div>`,
check:[["Jak se anglicky řekne „Chodí na gymnázium“?",["He goes to gymnasium.","He goes to high school.","He goes to basic school.","He goes to a gymnasium school."],1,"Gymnázium je „high school“. „Gymnasium“ je falešný přítel a znamená tělocvična."],["Jak se anglicky zeptáš: „Jak se to jmenuje?“",["What is it called?","How is it called?","How does it call?","What is it call?"],0,"Na název se anglicky ptáš slovem „what“. „How is it called?“ je čechismus."],["Jak se anglicky řekne „Výlet byl zábavný“?",["The trip was funny.","The trip was a fun.","The trip was funning.","The trip was fun."],3,"Zábavný ve smyslu příjemný je „fun“. „Funny“ znamená směšný nebo vtipný."]],
practice:[
["mc","Jak se anglicky řekne „Je moc sympatická“?","She's very nice.","She's very sympathetic.","She's very sympathy.","She's very actual.","Sympatický je „nice“. „Sympathetic“ je falešný přítel a znamená soucitný."],
["mc","Jak se anglicky zeptáš: „Jak se to jmenuje?“","What is it called?","How is it called?","How it is called?","What it is called?","Na název se anglicky ptáš slovem „what“. „How is it called?“ je čechismus."],
["mc","Jak se anglicky řekne „Je mu 22 let“?","He's 22 years old.","He's 22 years.","He has 22 years.","He's 22 old.","Věk se říká slovesem „to be“ a buď jen číslem, nebo celým „years old“. „He is 22 years“ je čechismus."],
["mc","Jak se anglicky řekne „Ona mě učí anglicky“?","She teaches me English.","She learns me English.","She is learning me English.","She teach me English.","Učit někoho je „teach“. „Learn“ znamená učit se."],
["mc","Jak se anglicky řekne „Řekni mi pravdu“?","Tell me the truth.","Say me the truth.","Say to me truth.","Tell to me the truth.","Říct někomu je „tell me“. Po „say“ nenásleduje hned osoba; „say me“ je čechismus."],
["or","Jsem z České republiky","I'm from the Czech Republic","a in","Název země se slovem „Republic“ má určitý člen „the“. „I'm from Czech“ je čechismus."],
["or","Můžu mít dotaz?","Can I ask a question","have the","Česky „mít dotaz“, anglicky „ask a question“, ne „have“. Dotaz je jeden, proto neurčitý člen „a“."],
["or","Potřebuju jít na kontrolu k lékaři","I need a check-up","control the","Kontrola u lékaře je „check-up“, ne „control“. Je počitatelná a jedna, proto neurčitý člen „a“."],
["or","Dala mi pár rad","She gave me some advice","advices an","„Advice“ je nepočitatelné: bez členu „an“ a bez -s, i když jsou české „rady“ v množném čísle."],
["fi","Can I __ your pen?","Můžu si půjčit tvoji propisku?","borrow","lend|loan|rent","Půjčit si od někoho je „borrow“. „Lend“ znamená půjčit někomu."],
["fi","The trip was really __.","Výlet byl opravdu zábavný","fun","funny|funning|joke","Zábavný ve smyslu příjemný je „fun“. „Funny“ znamená směšný."],
["fi","My son goes to __ school. He's seven.","Můj syn chodí na základní školu. Je mu sedm","elementary|grade|primary","basic|base|ground","Základní škola je „elementary school“. „Basic school“ je čechismus."],
["ty","On chodí na gymnázium","He goes to high school|He goes to a high school|He is in high school|He attends high school","goes to · high school – bez členu","gymnasium a","Gymnázium je „high school“, ne „gymnasium“. Spojení „go to high school“ je bez členu, stejně jako „go to work“."],
["ty","Potřebuju radu","I need some advice|I need advice|I need a piece of advice","need · advice – nepočitatelné","advices","„Advice“ je nepočitatelné: bez členu „a“ a bez -s."],
["ty","Můžu mít dotaz?","Can I ask a question|Could I ask a question|May I ask a question|Can I ask you a question|Could I ask you a question|May I ask you a question","can I · ask · question – člen „a“","have the","Česky „mít dotaz“, anglicky „ask a question“, ne „have“. Dotaz je jeden, proto neurčitý člen „a“."],
["ty","Jak se to jmenuje?","What is it called|What's it called|What is this called|What's this called|What is that called|What's that called","what · it · called – česky „jak“, anglicky „what“","How","Na název se anglicky ptáš slovem „what“. „How is it called?“ je čechismus."]]},
];
