/* pt-en stage A1: lessons for Brazilian Portuguese speakers. Shorthand is expanded by _dsl.js.
   Contrasts follow docs/profiles/pt.md §4 and §8; practice sets follow the verb-core standing rule (§7). English side as es-en except false-friends (§8). */
module.exports = [
{ id:"it-there", title:"it e there: o sujeito que o português não diz", blurb:"«Está chovendo», «É tarde», «Tem um café aqui»: em inglês sempre é preciso um sujeito, e esse sujeito é it ou there.", deck:"Bate-papo", body:`
<p>Em português você diz «Está chovendo», «É importante» ou «Tem um café aqui» sem sujeito nenhum. Em inglês isso não funciona: <b>toda frase precisa de um sujeito</b>. Quando ninguém faz a ação, entram duas palavras que só ocupam esse lugar: <b>it</b> e <b>there</b>.</p>
<h3>Clima, hora e opiniões: It</h3>
<p>Aqui <i>it</i> não significa «isso»: só ocupa o lugar do sujeito. Uma frase nunca começa com <i>Is…</i> se não for pergunta.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Hoje está frio}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|São três horas}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Está chovendo}}{{ex:It's important to sleep.|/ɪts ɪmˈpɔːrtnt tə ˈsliːp/|É importante dormir}}
<h3>«Tem» (existir) = There is / There are</h3>
<p>No dia a dia, o brasileiro diz «Tem um café aqui perto», com o verbo <i>ter</i>. Mas o <i>has</i> do inglês é só o «tem» de posse («ela tem carro»). Para dizer que algo existe num lugar, o inglês usa <b>there is</b> + singular e <b>there are</b> + plural: o verbo concorda com o que vem depois. Na fala, <i>There is</i> vira <i>There's</i>.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|Tem um café aqui perto}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Tem dois quartos}}
<h3>Perguntas e negativas</h3>
<p>Para perguntar, <i>is</i> ou <i>are</i> vem antes de <i>there</i>. «Tem um banco aqui perto?» é <i>Is there a bank near here?</i>, nunca <i>Has a bank near here?</i>.</p>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Tem banheiro aqui?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Tem lugares livres?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Hoje não tem ônibus}}
<h3>Não confunda have com there is</h3>
<p>O «ter» de posse (eu tenho, ela tem) é <i>have</i>; o «ter» de existência (tem alguma coisa em algum lugar) é <i>there is</i>. «Tem muita gente aqui» não é <i>Has many people here</i>.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|Eu tenho carro}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|Tem um carro lá fora}}
<div class="tip">Erros mais comuns: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ · <b>Is important.</b> ✗ → <b>It's important.</b> ✓ · <b>There are a cafe.</b> ✗ → <b>There's a cafe.</b> ✓ · <b>Has many people.</b> ✗ → <b>There are many people.</b> ✓</div>`,
check:[["Como se diz «Hoje está quente»?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"O clima precisa de um sujeito em inglês: \"it\"."],["There ___ three people. O que vai no espaço?",["is","are","have","be"],1,"\"Three people\" é plural, então \"there are\"."],["Como se diz «Tem banheiro aqui?»?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Para perguntar se existe algo: \"Is there a…?\"."]],
practice:[
["mc","Como se diz «Está chovendo»?","It's raining.","Is raining.","There is raining.","Rain is.","O clima leva \"it\" como sujeito: em inglês o sujeito é obrigatório."],
["mc","Como se diz «Tem um café aqui perto»?","There's a cafe near here.","It's a cafe near here.","Has a cafe near here.","There are a cafe near here.","«Tem» (existir) + singular é \"there is\": concordância com \"a cafe\"."],
["mc","There ___ two rooms. O que vai no espaço?","are","is","have","has","\"Two rooms\" é plural, então \"are\" (concordância)."],
["mc","Qual é a forma correta de «É importante dormir»?","It's important to sleep.","Is important to sleep.","Important is to sleep.","There is important to sleep.","«É importante» não tem sujeito em português; em inglês, quem ocupa esse lugar é \"it\"."],
["mc","Como se diz «São três horas»?","It's three o'clock.","They're three o'clock.","Is three o'clock.","Are three o'clock.","A hora vai no singular e com \"it\" como sujeito, mesmo que em português se diga «são»."],
["or","Tem dois lugares livres","There are two seats","is","\"Two seats\" é plural: \"there are\" (concordância)."],
["or","Tem banheiro aqui?","Is there a bathroom here","are","Na pergunta, \"is\" vem antes de \"there\"; um banheiro só, \"is\" (concordância)."],
["or","Hoje está frio","It's cold today","Is","Para falar do clima, a frase começa com \"It's\", nunca com \"Is\"."],
["fi","__ cold today.","Hoje está frio","It's|It is","Is|There's|This","O sujeito é obrigatório: \"it\" ocupa esse lugar."],
["fi","There __ a bank near here.","Tem um banco aqui perto","is","are|have|has","Um banco é singular: \"there is\" (concordância)."],
["fi","__ there any seats?","Tem lugares livres?","Are","Is|Do|Have","\"Seats\" é plural, então \"Are\" vem antes de \"there\" (concordância)."],
["ty","Hoje está quente","It's hot today","it · hot · today — o sujeito é obrigatório","Is","«Está quente» não tem sujeito em português, mas em inglês tem: \"it\"."],
["ty","Tem banheiro aqui?","Is there a bathroom here|Is there a restroom here","is there · bathroom — para perguntar","Are","Para perguntar, \"is\" vem antes de \"there\", que faz o papel de sujeito: um banheiro só, \"is\" (concordância)."],
["ty","Tem dois quartos","There are two rooms","there · two · room — escreva no plural","is","Com plural, \"there are\": o sujeito é a palavra \"there\" (concordância)."],
["ty","Tem muita gente aqui","There are many people here|There are a lot of people here","there · many · people — «tem» não é has","Has","«Tem» de existência é \"there is/are\", não \"has\"; \"people\" é plural: \"there are\" (concordância)."]]},

{ id:"plurals", title:"Plurais: irregulares, adjetivos sem -s e this / these", blurb:"O -s você já domina. Cuidado com people e children, com these e com os adjetivos, que nunca levam -s.", deck:"Compras e pagamentos", body:`
<p>O plural em inglês funciona quase como em português: <i>book → books</i>, <i>box → boxes</i>. Essa parte você já domina. Esta lição se concentra no que <b>é</b> diferente.</p>
<h3>Plurais irregulares</h3>
<div class="tbl"><table><tr><th>Regra</th><th>Exemplo</th></tr><tr><td>quase sempre -s</td><td class="k">book → books</td></tr><tr><td>depois de s, x, ch, sh: -es</td><td class="k">box → boxes</td></tr><tr><td>consoante + y → -ies</td><td class="k">city → cities</td></tr><tr><td>irregulares</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|dois livros}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|Tenho dois filhos}}{{ex:These people are nice.|/ˈðiːz ˈpiːpl ər ˈnaɪs/|Estas pessoas são legais}}
<p><i>People</i> já é plural: <i>people are</i>, nunca <i>peoples</i>. Para uma pessoa só, <i>person</i>. Cuidado com o português: «gente» é singular («tem muita gente»), mas <i>people</i> pede o verbo no plural.</p>
<h3>Os adjetivos não levam -s</h3>
<p>Em português o adjetivo concorda: «carros vermelhos». Em inglês o adjetivo nunca muda e vem antes: <i>red cars</i>, e não <i>reds cars</i> nem <i>cars reds</i>. É um erro muito comum de brasileiros: <i>My habits are normals</i> ✗ → <i>My habits are normal</i> ✓.</p>
{{ex:red cars|/ˈred ˈkɑːrz/|carros vermelhos}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Aqueles sapatos são bonitos}}
<h3>this / that (um), these / those (vários)</h3>
<p><i>this</i> tem um i curto e relaxado, /ɪ/; <i>these</i>, um i longo, /iː/. Se você alongar o i de <i>this</i>, soa como plural. E o verbo concorda: <i>this is</i>, <i>these are</i>.</p>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Esta é minha bolsa}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Estas são minhas chaves}}
<h3>my, your, his, her, our, their</h3>
<p>Não mudam no plural: <i>my keys</i> («minhas chaves»). E <i>his / her</i> dependem do dono, não da coisa: «os irmãos dela» é <i>her brothers</i>. Pense assim: <i>his</i> = dele, <i>her</i> = dela.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Este é o seu celular?}}{{ex:Her brothers live in Rio.|/hər ˈbrʌðərz ˈlɪv ɪn ˈriːoʊ/|Os irmãos dela moram no Rio}}
<div class="tip">Erros comuns: <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>the peoples</b> ✗ → <b>the people</b> ✓ · <b>This are my keys.</b> ✗ → <b>These are my keys.</b> ✓</div>`,
check:[["I have two ___. O que vai no espaço?",["child","children","childs","a child"],1,"O plural de \"child\" é irregular: \"children\"."],["___ are my keys. O que vai no espaço?",["This","That","These","It"],2,"\"Keys\" é plural e o verbo é \"are\": \"these\"."],["Como se diz «os carros vermelhos»?",["the cars reds","the reds cars","the cars red","the red cars"],3,"O adjetivo vem antes do substantivo e nunca leva -s."]],
practice:[
["mc","Como se diz «três pessoas»?","three people","three peoples","three person","three people's","\"People\" já é plural: nunca leva -s."],
["mc","Qual é o plural de \"child\"?","children","childs","childes","child","É um plural irregular: \"child\" → \"children\"."],
["mc","Como se diz «Aqueles sapatos são bonitos»?","Those shoes are nice.","That shoes are nice.","Those shoes are nices.","Those shoes nice are.","\"Shoes\" é plural: \"those\". O adjetivo \"nice\" não leva -s."],
["mc","Como se diz «carros vermelhos»?","red cars","reds cars","cars reds","cars red","O adjetivo vem antes do substantivo e não leva -s."],
["mc","Qual é o plural de \"box\"?","boxes","boxs","boxies","box","Depois de s, x, ch e sh, o plural é -es."],
["or","Estas são minhas chaves","These are my keys","is","Com \"these\", o verbo vai no plural: \"are\" (concordância)."],
["or","Estas pessoas são legais","These people are nice","is","\"People\" é plural, então o verbo é \"are\" (concordância)."],
["or","Eu tenho dois carros vermelhos","I have two red cars","reds","O adjetivo vem antes e não leva -s: \"red cars\"."],
["fi","I have three __.","Tenho três filhos","children","childs|child|childrens","Plural irregular: \"child\" → \"children\"."],
["fi","__ is my friend.","Este é meu amigo","This","These|Those|They","Uma pessoa só: \"this\", com i curto."],
["fi","The __ are very nice.","As pessoas são muito legais","people","peoples|person|people's","\"People\" já é plural."],
["ty","Esta é minha bolsa","This is my bag","this · my · bag — é uma só","are","Um objeto só: \"this is\" (concordância)."],
["ty","Este é o seu celular?","Is this your phone|Is this your cell phone","is · this · your · phone — para perguntar","are","Na pergunta, \"is\" vem antes de \"this\": um objeto só, \"is\" (concordância)."],
["ty","Eu tenho dois carros vermelhos","I have two red cars","two · red · car — o adjetivo não leva -s","reds","O adjetivo vem antes do substantivo e não leva -s."]]},

{ id:"present", title:"Presente simples: sujeito sempre, don't e always", blurb:"Em inglês não basta «trabalho»: é I work. E para negar, o inglês usa don't: I don't, nunca I no.", deck:"Apresentações", body:`
<p>No presente simples (<i>simple present</i>), a ordem básica é igual à do português: <b>sujeito + verbo + objeto</b> (<i>I drink coffee</i>). O que muda são três detalhes que entregam um brasileiro na hora.</p>
<h3>1. O sujeito nunca some</h3>
<p>Em português a terminação do verbo já diz quem é: «trabalho», «moramos». Em inglês o verbo quase não muda, então o pronome é obrigatório.</p>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Eu tomo café}}{{ex:We live in São Paulo.|/wi ˈlɪv ɪn ˌsaʊ ˈpaʊloʊ/|Moramos em São Paulo}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Eles trabalham nos fins de semana}}
<h3>2. A negação é don't, não «no»</h3>
<p>«Eu não como carne» não é <i>I no eat meat</i>. Antes do verbo entra o auxiliar <b>don't</b> (do not).</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Não como carne}}{{ex:We don't live here.|/wi ˈdoʊnt ˈlɪv ˈhɪr/|Não moramos aqui}}
<p>Com <i>he</i>, <i>she</i> e <i>it</i> o verbo muda (<i>she works</i>, <i>he doesn't</i>); você vai ver isso duas lições adiante. Atenção: em português, «você fala» tem a mesma forma de «ele fala», mas em inglês <i>you</i> nunca leva -s: <i>you work</i>. Com <i>I, you, we, they</i>, o verbo fica sempre igual.</p>
<h3>3. always, usually, never: antes do verbo</h3>
<p>Em português dá para dizer «Tomo sempre chá». Em inglês o advérbio de frequência vem <b>logo antes</b> do verbo principal.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Normalmente eu me levanto às sete}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|Nunca tomo café à noite}}
<h3>Uma prévia: o adjetivo antes do substantivo</h3>
<p>«Uma casa grande» é <i>a big house</i>. Você vai ver isso com calma mais adiante.</p>
{{ex:I have a big house.|/aɪ ˈhæv ə ˈbɪg ˈhaʊs/|Tenho uma casa grande}}
<div class="tip">Erros comuns: <b>Work in a bank.</b> ✗ → <b>I work in a bank.</b> ✓ · <b>I no eat meat.</b> ✗ → <b>I don't eat meat.</b> ✓ · <b>I drink always tea.</b> ✗ → <b>I always drink tea.</b> ✓</div>`,
check:[["Como se diz «Trabalho num banco»?",["Work in a bank.","Am work in a bank.","I work in a bank.","I working in a bank."],2,"Em inglês o sujeito é obrigatório: \"I work\"."],["I ___ eat meat. (não como)",["not","am not","no","don't"],3,"Para negar com um verbo comum, usa-se o auxiliar \"don't\"."],["Onde vai o \"always\"?",["I always drink tea.","Always drink tea.","I drink always tea.","I drink tea the always."],0,"Os advérbios de frequência vêm logo antes do verbo."]],
practice:[
["mc","Como se diz «Estudo inglês»?","I study English.","Study English.","I am study English.","I studying English.","Em inglês é preciso dizer quem: \"I study\"."],
["mc","Como se diz «Não como carne»?","I don't eat meat.","I no eat meat.","I'm not eat meat.","I eat not meat.","A negação leva o auxiliar \"don't\" antes do verbo."],
["mc","Como se diz «Moramos em Bogotá»?","We live in Bogotá.","Live in Bogotá.","We are live in Bogotá.","We living in Bogotá.","Sem \"we\" não há frase: \"We live\"."],
["mc","Como se diz «Normalmente eu me levanto às sete»?","I usually get up at seven.","Usually I get up seven.","I get up usually at seven.","I am usually get up at seven.","\"Usually\" vem logo antes do verbo."],
["mc","Qual é a forma correta de «Sempre tomo chá»?","I always drink tea.","I drink always tea.","Always drink tea.","I am always drink tea.","\"Always\" vem antes do verbo, e o \"I\" não pode faltar."],
["or","Eu trabalho nos fins de semana","I work on weekends","works","Com \"I\", o verbo não leva -s; o -s é só para a terceira pessoa."],
["or","Nós não comemos carne","We don't eat meat","doesn't","Com \"we\", o auxiliar é \"don't\"; \"doesn't\" é só para a terceira pessoa."],
["or","Eu nunca tomo café à noite","I never drink coffee at night","always","\"Never\" vem logo antes do verbo."],
["fi","I __ like fish.","Eu não gosto de peixe","don't|do not","not|am not|no","A negação usa o auxiliar \"don't\"."],
["fi","I __ English every day.","Eu estudo inglês todos os dias","study","am study|studying|studies","Com \"I\", o verbo fica na forma base."],
["fi","We usually __ at home.","Normalmente nós comemos em casa","eat","eating|are eat|eats","Depois de \"usually\" vem o verbo na forma base."],
["ty","Tomo chá","I drink tea","drink · tea — não esqueça o pronome","am","Em inglês sempre se diz quem: \"I drink tea\"."],
["ty","Não como carne","I don't eat meat","don't · eat · meat — a negação","no","A negação leva o auxiliar \"don't\", e não \"no\"."],
["ty","Nós não moramos aqui","We don't live here","we · don't · live — negação com auxiliar","no","Para negar, use o auxiliar \"don't\" antes do verbo."]]},

{ id:"questions", title:"Perguntas: do e a ordem das palavras", blurb:"Em português basta a entonação. Em inglês é preciso do, e a palavra interrogativa vem primeiro.", deck:"Sobrevivência 2", body:`
<p>Em português uma pergunta pode ser igual a uma afirmação, só com outra entonação: «Você gosta de café?». Em inglês isso não basta: é preciso <b>mudar a ordem</b> ou acrescentar um <b>auxiliar</b>. Perguntas, negativas e auxiliares estão entre os erros mais frequentes em textos de brasileiros, e esse tipo de erro chega a aumentar até o nível intermediário.</p>
<h3>Com be: inverta</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Você está bem?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Esta bolsa é sua?}}
<h3>Com os outros verbos: Do no começo</h3>
<p>Pergunte-se: a frase tem outro verbo além de <i>be</i>? Então coloque <b>Do</b> antes do sujeito. O verbo principal não muda.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Você gosta de café?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Você fala inglês?}}
<p>Respostas curtas: <i>Yes, I do.</i> / <i>No, I don't.</i> (e não <i>Yes, I like</i>).</p>
<h3>Palavra interrogativa + do + sujeito + verbo</h3>
<p><i>what, where, when, who, why</i> e <i>how</i> são fáceis; o difícil é o que vem depois. «Onde você mora?» não é <i>Where you live?</i>. Com qualquer auxiliar a ordem é a mesma: <i>How I could buy that?</i> ✗ → <i>How could I buy that?</i> ✓.</p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Onde você mora?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|O que você faz da vida?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Onde fica o banheiro?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Quanto custa isto?}}
<h3>Negativas: uma negação só</h3>
<p>Para negar, use <i>don't</i>, nunca um «não» solto antes do verbo. E em inglês cabe só uma negação por frase: «Não sei nada» é <i>I don't know anything</i>, e não <i>I don't know nothing</i>.</p>
{{ex:I don't understand.|/aɪ ˈdoʊnt ˌʌndərˈstænd/|Não entendo}}{{ex:I don't know anything.|/aɪ ˈdoʊnt ˈnoʊ ˈeniθɪŋ/|Não sei nada}}
<div class="tip">Erros comuns: <b>You like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓ · <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓ · <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["Como se diz «Você gosta de café?»?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"Com um verbo como \"like\", a pergunta começa com o auxiliar \"Do\"."],["Como se diz «Onde você mora?»?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Palavra interrogativa + \"do\" + sujeito + verbo."],["Do you speak English? Qual é a resposta correta?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"Se perguntam com \"do\", você responde com \"do\"."]],
practice:[
["mc","Como se diz «Você fala inglês?»?","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Com um verbo como \"speak\", a pergunta precisa do auxiliar \"Do\"."],
["mc","Como se diz «Onde você mora?»?","Where do you live?","Where you live?","Where are you live?","Where live you?","Palavra interrogativa + auxiliar \"do\" + sujeito + verbo."],
["mc","Como se diz «Quanto custa isto?»?","How much is this?","How much this is?","How much does this?","What much is this?","O preço se pergunta com \"How much is…?\"."],
["mc","Do you like tea? Qual é a resposta correta?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","Se perguntam com \"do\", você responde com \"do\": \"Yes, I do\"."],
["mc","Como se diz «Com o que você trabalha?»?","What do you do?","What are you do?","What you do?","What do you?","Em \"What do you do?\", o primeiro \"do\" é o auxiliar e o segundo é o verbo «fazer»."],
["or","Você gosta de café?","Do you like coffee","Are the","\"Like\" não é \"be\": a pergunta começa com o auxiliar \"Do\"; café em geral vai sem \"the\"."],
["or","Onde fica o banheiro?","Where is the bathroom","a do","Com \"be\", inverta: \"Where is\" + sujeito, sem o auxiliar \"do\"."],
["or","Onde você mora?","Where do you live","are","\"Live\" precisa do auxiliar \"do\": \"Where do you live\"."],
["fi","__ you like music?","Você gosta de música?","Do","Are|Is|Does","\"Like\" não é \"be\", então o auxiliar é \"Do\"."],
["fi","__ do you live?","Onde você mora?","Where","What|Who|When","Para perguntar por um lugar, \"where\"."],
["fi","What time __ it?","Que horas são?","is","do|does|are","A hora se pergunta com \"be\": \"What time is it?\"."],
["ty","Você fala inglês?","Do you speak English|Can you speak English","do · speak · English — pergunta com auxiliar","Are","A pergunta precisa do auxiliar \"Do\" antes de \"you\"."],
["ty","Onde fica o banheiro?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — verbo be, não do","a","Com \"be\", o \"is\" vem antes do sujeito: \"Where is the bathroom?\"."],
["ty","Você gosta de cachorros?","Do you like dogs","do · like · dog — escreva no plural","dog","\"Like\" precisa do auxiliar \"Do\"; cachorros em geral vão no plural e sem \"the\"."]]},

{ id:"third-s", title:"he, she, it: o -s e does / doesn't", blurb:"Com uma pessoa ou coisa só, o verbo leva -s. Em perguntas e negativas, does.", deck:"Apresentações", body:`
<p>É a regra que os brasileiros mais esquecem. Em português cada pessoa tem sua terminação (trabalho, trabalhamos, trabalham…). Em inglês o presente quase não muda: <b>só a terceira pessoa do singular</b> (<i>he, she, it</i>, ou uma pessoa ou coisa) leva <b>-s</b>.</p>
<div class="tbl"><table><tr><th>Sujeito</th><th>Verbo</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Ela trabalha num banco}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|Ele gosta de futebol}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Minha mãe cozinha bem}}
<p>Cuidado com o contrário: sujeito no plural <b>não</b> leva -s. <i>People play soccer</i>, nunca <i>People plays</i>. E não se guie pelo português: «você trabalha» tem a mesma forma de «ela trabalha», mas <i>you work</i> não leva -s.</p>
<h3>Verbos que mudam um pouco</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|Ela tem carro (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Ele vai para o trabalho às oito (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Ela estuda inglês (study → studies)}}
<h3>Negativas e perguntas: does</h3>
<p>Com <b>doesn't</b> ou <b>Does</b>, o -s passa para o auxiliar e o verbo principal volta à forma base.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Ele não toma café}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Ela mora aqui?}}
<div class="tip">Erros comuns: <b>She work here.</b> ✗ → <b>She works here.</b> ✓ · <b>My brother don't like it.</b> ✗ → <b>My brother doesn't like it.</b> ✓ · <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓ · <b>People plays.</b> ✗ → <b>People play.</b> ✓</div>`,
check:[["She ___ in Lima. O que vai no espaço?",["live","lives","living","is live"],1,"Com \"she\", o verbo leva -s: terceira pessoa."],["He ___ like coffee. O que vai no espaço?",["don't","isn't","doesn't","not"],2,"Com \"he\", a negativa é \"doesn't\"."],["Como se diz «Ela tem carro»?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"Com \"she\", \"have\" vira \"has\"."]],
practice:[
["mc","My brother ___ in Bogotá. O que vai no espaço?","works","work","working","is work","\"My brother\" é uma pessoa só: \"works\" (terceira pessoa)."],
["mc","Como se diz «Ele não toma café»?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","Com \"he\": \"doesn't\" + verbo na forma base."],
["mc","Como se diz «Ela mora aqui?»?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","Depois de \"Does\", o verbo fica sem -s."],
["mc","\"have\" com \"she\": qual é a forma?","has","haves","have","is have","Com \"she\", \"have\" vira \"has\"."],
["mc","\"study\" com \"he\": qual é a forma?","studies","studys","study","studyes","Consoante + y → -ies: \"studies\"."],
["or","Ela trabalha num banco","She works at a bank","work the","Com \"she\", o verbo leva -s: terceira pessoa."],
["or","Ele tem dois cachorros","He has two dogs","have dog","Com \"he\", \"have\" vira \"has\": terceira pessoa."],
["or","Ela não come carne","She doesn't eat meat","eats","Depois do auxiliar \"doesn't\", o verbo fica sem -s."],
["fi","He __ soccer.","Ele gosta de futebol","likes","like|liking|is like","Com \"he\", \"likes\" (terceira pessoa)."],
["fi","__ she speak English?","Ela fala inglês?","Does","Do|Is|Are","Com \"she\", a pergunta leva o auxiliar \"Does\"."],
["fi","She __ to work at eight.","Ela vai para o trabalho às oito","goes","go|going|gos","\"Go\" vira \"goes\"."],
["ty","Ele tem carro","He has a car","has · car — ele (he)","have","Com \"he\", \"have\" vira \"has\": terceira pessoa."],
["ty","Ela gosta de gatos","She likes cats","likes · cat — com she, escreva no plural","cat","Com \"she\", \"likes\" leva -s (terceira pessoa); gatos em geral vão no plural."],
["ty","Ele não mora aqui","He doesn't live here","doesn't · live · here — forma base","lives","Depois do auxiliar \"doesn't\", o verbo fica na forma base."]]},

{ id:"countable", title:"Contáveis e incontáveis: advice, information, some, much", blurb:"«Conselhos» e «informações» se contam em português, mas advice e information não levam -s em inglês.", deck:"No restaurante", body:`
<p>Os substantivos do inglês se dividem em <b>contáveis</b> e <b>incontáveis</b>. A ideia existe em português («muita água», «pouco dinheiro»), mas algumas palavras que contamos em português são incontáveis em inglês.</p>
<div class="tbl"><table><tr><th>Contáveis</th><th>Incontáveis</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time</td></tr><tr><td>a / an, números, -s</td><td>sem a / an, sem números, sem -s</td></tr></table></div>
<h3>Cuidado: em português elas se contam</h3>
<p><i>advice</i> (conselhos), <i>information</i> (informações), <i>news</i> (notícias), <i>furniture</i> (móveis), <i>homework</i> (lição de casa), <i>luggage</i> (malas). Nunca levam -s nem <i>a</i>, e o verbo fica no singular. Com o pão é igual: «dois pães» não é <i>two breads</i>; diga <i>some bread</i> ou <i>two rolls</i>.</p>
{{ex:Can I give you some advice?|/kən aɪ ˈgɪv ju ˈsʌm ədˈvaɪs/|Posso te dar um conselho?}}{{ex:The news is good.|/ðə ˈnuːz ɪz ˈgʊd/|As notícias são boas}}{{ex:a piece of furniture|/ə ˈpiːs əv ˈfɜːrnɪtʃər/|um móvel}}
<h3>some e any</h3>
<p><b>some</b> em afirmativas; <b>any</b> em negativas e perguntas (mas, para pedir ou oferecer alguma coisa, usa-se <b>some</b>: <i>Can I have some water?</i>). E uma negação só: «Não tenho dinheiro nenhum» é <i>I don't have any money</i>, e não <i>I don't have no money</i>.</p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|Tenho um pouco de dinheiro}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|Não tenho dinheiro nenhum}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|Você tem alguma pergunta?}}
<h3>many e much</h3>
<p>Contáveis: <b>many</b> + plural. Incontáveis: <b>much</b>. <b>a lot of</b> serve para os dois.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Quantas pessoas?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|Não tenho muito tempo}}
<h3>Para contar o incontável</h3>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|um copo de água}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|uma xícara de café}}
<div class="tip">Erros comuns: <b>some advices</b> ✗ → <b>some advice</b> ✓ · <b>an information</b> ✗ → <b>some information</b> ✓ · <b>The news are good.</b> ✗ → <b>The news is good.</b> ✓ · <b>many money</b> ✗ → <b>much money</b> ✓</div>`,
check:[["How ___ people are there? O que vai no espaço?",["much","many","any","a"],1,"\"People\" pode ser contado: \"many\"."],["Qual destes substantivos é incontável em inglês?",["apple","chair","advice","friend"],2,"\"Advice\" não leva a nem -s, mesmo que em português se diga «conselhos»."],["I don't have ___ money. O que vai no espaço?",["some","a","many","any"],3,"Nas negativas, usa-se \"any\"."]],
practice:[
["mc","Can I have ___ water? O que vai no espaço?","some","a","many","an","\"Water\" é incontável: não leva a nem many."],
["mc","Como se diz «Preciso de conselhos»?","I need some advice.","I need some advices.","I need an advice.","I need many advices.","«Conselhos» é plural em português, mas \"advice\" é incontável: \"some advice\"."],
["mc","Como se diz «Você tem alguma pergunta?»?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","Depois de \"any\", um substantivo contável vai no plural."],
["mc","Qual é a frase correta?","I need some information.","I need some informations.","I need an information.","I need many informations.","\"Information\" é incontável: nunca leva -s nem an."],
["mc","How ___ time do we have? O que vai no espaço?","much","many","any","a","\"Time\" é incontável: \"much\"."],
["or","Este conselho é muito útil","This advice is very useful","are","\"Advice\" é incontável: fica no singular, com \"is\" (concordância)."],
["or","As notícias são boas","The news is good","are","\"News\" é incontável: o verbo fica no singular, \"is\" (concordância)."],
["or","Não tenho muito tempo","I don't have much time","many","\"Time\" é incontável: \"much\", não \"many\"."],
["fi","How __ is this?","Quanto custa isto?","much","many|any|some","O preço se pergunta com \"how much\"."],
["fi","I don't have __ questions.","Não tenho perguntas","any","some|much|a","Nas negativas, usa-se \"any\"."],
["fi","The furniture __ new.","Os móveis são novos","is","are|have|has","\"Furniture\" é incontável: singular, com \"is\" (concordância)."],
["ty","Pode me dar um pouco de água?","Can I have some water|Could I have some water|Can I get some water|Could I get some water|Can you give me some water|Could you give me some water","can I have · water — para pedir, some","a","Na pergunta, o auxiliar \"can\" vem antes de \"I\"; \"water\" é incontável: \"some\"."],
["ty","Você tem alguma pergunta?","Do you have any questions","do · have · any · question — escreva no plural","much","\"Have\" precisa do auxiliar \"Do\" na pergunta; \"questions\" vai no plural."],
["ty","Esta informação é útil","This information is useful","this · information · useful — é incontável","are","\"Information\" é incontável: singular, com \"is\" (concordância)."]]},

{ id:"object-have", title:"me, him, her, seu / sua… e quando «ter» é be", blurb:"O pronome objeto vem depois do verbo, his é «dele» e her é «dela», e «tenho 20 anos» se diz com be.", deck:"Apresentações", body:`
<p>Os pronomes objeto (oblíquos) vão ser fáceis: o português também tem <i>me, te, o, a</i>. A diferença é o lugar: em inglês eles vêm <b>depois</b> do verbo, sempre. No Brasil dizemos «Eu te amo», «Ela me conhece»; em inglês é <i>I love you</i>, <i>She knows me</i>, nunca <i>I you love</i>.</p>
<div class="tbl"><table><tr><th>Sujeito</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Objeto</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Ela me conhece}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Gosto dele}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Você pode nos ajudar?}}{{ex:I love her.|/aɪ ˈlʌv hər/|Eu a amo}}
<h3>seu / sua: his, her ou their</h3>
<p>«Seu» e «sua» concordam com a coisa e podem querer dizer de você, dele, dela ou deles. Em inglês você escolhe pelo <b>dono</b>. A dica é pensar em «dele» e «dela»: <b>his</b> = dele, <b>her</b> = dela, <b>their</b> = deles ou delas. O gênero da coisa não importa.</p>
{{ex:Ana loves her brother.|/ˈænə ˈlʌvz hər ˈbrʌðər/|A Ana ama o irmão dela}}{{ex:Pedro and his sister|/ˈpeɪdroʊ ənd hɪz ˈsɪstər/|O Pedro e a irmã dele}}
<h3>have = ter (coisas, família, tempo)</h3>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|Tenho dois irmãos}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|Você tem uma caneta?}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Vamos almoçar}}
<h3>Mas «ter» nem sempre é have</h3>
<p>A idade e a razão se dizem com <b>be</b>: «tenho 20 anos» é <i>I'm 20</i>, «você tem razão» é <i>You're right</i>. E o «estar com» de «estou com fome» e «estou com frio» também vira <b>be</b>, sem <i>with</i>: <i>I'm hungry</i>, nunca <i>I'm with hunger</i>.</p>
{{ex:I'm 20 years old.|/aɪm ˈtwenti ˈjɪrz ˈoʊld/|Tenho 20 anos}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|Estou com fome}}{{ex:Are you cold?|/ər ju ˈkoʊld/|Você está com frio?}}{{ex:You're right.|/jʊr ˈraɪt/|Você tem razão}}
<div class="tip">Erros comuns: <b>I have 20 years.</b> ✗ → <b>I'm 20.</b> ✓ · <b>I'm with hunger.</b> ✗ → <b>I'm hungry.</b> ✓ · <b>Ana loves his brother.</b> ✗ → <b>Ana loves her brother.</b> ✓</div>`,
check:[["I like ___. (gosto dele)",["he","his","him","he's"],2,"Depois do verbo vem o pronome objeto \"him\"."],["Como se diz «Estou com fome»?",["I'm hungry.","I have hungry.","I have hunger.","I'm hunger."],0,"«Estar com fome» se diz com \"be\": \"I'm hungry\"."],["Como se diz «Você tem uma caneta?»?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"\"Have\" é um verbo comum: a pergunta leva \"Do\"."]],
practice:[
["mc","She knows ___. (ela me conhece) O que vai no espaço?","me","I","my","mine","Depois do verbo vem o pronome objeto \"me\"."],
["mc","Como se diz «Tenho 25 anos»?","I'm 25.","I have 25 years.","I have 25.","I'm 25 years.","A idade se diz com \"be\", não com \"have\"."],
["mc","Como se diz «A Ana ama o irmão dela»?","Ana loves her brother.","Ana loves his brother.","Ana loves their brother.","Ana her brother loves.","«Dela» (da Ana) é \"her\"."],
["mc","Como se diz «Você tem razão»?","You're right.","You have reason.","You have right.","You're reason.","«Ter razão» é \"be right\"."],
["mc","Como se diz «Eu a amo»?","I love her.","I her love.","I love she.","Her I love.","O pronome objeto vem depois do verbo."],
["or","Você tem uma caneta?","Do you have a pen","Are","\"Have\" precisa do auxiliar \"Do\"; \"Are you have\" não existe."],
["or","Você está com frio?","Are you cold","have","«Estar com frio» é \"be cold\": na pergunta, \"are\" vem antes do sujeito \"you\"."],
["or","O Carlos ama a irmã dele","Carlos loves his sister","her","«Dele» (do Carlos) é \"his\"."],
["fi","Call __ tonight.","Me liga hoje à noite","me","I|my|mine","Depois do verbo vem \"me\"."],
["fi","I __ hungry.","Estou com fome","am","have|has|is","«Estar com fome» se diz com \"be\": \"I am hungry\"."],
["fi","Sofía and __ husband live in Madrid.","A Sofía e o marido dela moram em Madri","her","his|their|she","«Dela» (da Sofía) é \"her\"."],
["ty","Você pode me ajudar?","Can you help me|Could you help me","can you · help · me — pergunta com auxiliar","I","Na pergunta, o auxiliar \"can\" vem antes de \"you\"; depois do verbo, \"me\"."],
["ty","Você está com fome?","Are you hungry","are · hungry — com be, não have","have","«Estar com fome» é \"be hungry\": na pergunta, \"are\" vem antes do sujeito \"you\"."],
["ty","Ele tem 30 anos","He is 30|He is 30 years old|He is thirty|He is thirty years old","he · 30 — com be, não have","has","A idade vai com \"be\": com \"he\", \"is\" (terceira pessoa)."]]},

{ id:"can-like", title:"can, like + -ing, I'd like: o que você sabe fazer e o que quer", blurb:"«Gosto de pizza» é I like pizza, sem preposição. E para pedir, I'd like.", deck:"Bate-papo", body:`
<p>Três estruturas que você vai usar para se apresentar e para pedir alguma coisa.</p>
<h3>can: poder, saber fazer</h3>
<p><b>can + verbo na forma base</b>. Nunca leva -s, nem com <i>he</i> ou <i>she</i>, e não usa <i>do</i>: a pergunta é <i>Can you…?</i>.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Eu sei nadar}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Não sei dirigir}}{{ex:Can you speak English?|/kən ju ˈspiːk ˈɪŋglɪʃ/|Você sabe falar inglês?}}
<h3>gostar de = like, sem preposição</h3>
<p>Aqui o português ajuda: em «eu gosto de pizza», quem gosta é o sujeito, como em inglês. A armadilha é o «de»: <i>like</i> não leva preposição. «Gosto de pizza» é <i>I like pizza</i>, nunca <i>I like of pizza</i>. E com <i>he</i> e <i>she</i> vem o -s de sempre: <i>she likes</i>.</p>
{{ex:I like pizza.|/aɪ ˈlaɪk ˈpiːtsə/|Gosto de pizza}}{{ex:She likes dogs.|/ʃi ˈlaɪks ˈdɔːgz/|Ela gosta de cachorros}}
<h3>like + -ing: gostos e hobbies</h3>
<p>Depois de <i>like</i> ou <i>love</i>, o verbo vai na forma -ing (gerúndio): «gosto de cozinhar» é <i>I like cooking</i>. Também se ouve <i>like</i> + <i>to</i>: <i>I like to cook</i>. Nunca <i>I like of cooking</i> nem <i>I like cook</i>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Gosto de cozinhar}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Adoro ver filmes}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Não gosto de correr}}
<h3>I'd like: eu queria, eu gostaria</h3>
<p><i>I like</i> é um gosto em geral; <i>I'd like</i> é o que você quer agora, de forma educada, como «eu queria» ou «eu gostaria». Para pedir, use <i>I'd like</i>.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Um café, por favor}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Você aceita um chá?}}
<div class="tip">Erros comuns: <b>I like of pizza.</b> ✗ → <b>I like pizza.</b> ✓ · <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓ · na cafeteria, <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓</div>`,
check:[["She can ___ very well. O que vai no espaço?",["sings","sing","singing","to sing"],1,"Depois de \"can\" vem o verbo na forma base."],["Como se diz «Gosto de cozinhar»?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"Depois de \"like\", a forma -ing."],["Numa cafeteria, qual é o jeito mais natural de pedir?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"O que você quer agora se pede com \"I'd like\"."]],
practice:[
["mc","He can ___ English. O que vai no espaço?","speak","speaks","speaking","to speak","Depois de \"can\" vem o verbo na forma base, sem -s."],
["mc","Como se diz «Gosto de pizza»?","I like pizza.","Pizza likes me.","Me like pizza.","I'm like pizza.","Quem gosta é o sujeito, \"I\", e \"like\" não leva preposição: \"I like pizza\"."],
["mc","Como se diz «Eu gosto de cachorros»?","I like dogs.","I likes dogs.","Like me dogs.","Me like dogs.","Com \"I\", o verbo fica sem -s. E \"me\" nunca é sujeito."],
["mc","Para pedir numa cafeteria, «Um café, por favor» é:","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","O que você quer agora se pede com \"I'd like\"."],
["mc","Como se diz «Não sei dirigir»?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","\"Can\" não usa \"do\": a negativa é \"can't\"."],
["or","Você sabe nadar?","Can you swim","swimming","Na pergunta, o auxiliar \"can\" vem antes do sujeito."],
["or","Ela gosta de dançar","She likes dancing","like","Com \"she\", \"likes\" leva -s (terceira pessoa), e \"dancing\" vai na forma -ing."],
["or","Eu gosto de ler livros","I like reading books","read","Depois de \"like\", a forma -ing: \"reading\"."],
["fi","I can't __.","Eu não sei nadar","swim","swimming|swims|to swim","Depois de \"can't\" vem a forma base."],
["fi","I like __ music.","Eu gosto de escutar música","listening to","listen to|listen|to listening","Depois de \"like\", a forma -ing; e \"listen\" pede \"to\"."],
["fi","__ like a sandwich, please.","Um sanduíche, por favor","I'd|I would","I|I'm|I can","Para pedir, usa-se \"I'd like\"."],
["ty","Gosto de cozinhar","I like cooking|I love cooking|I like to cook","like · cook — forma -ing","cook","Depois de \"like\" vem a forma -ing (ou \"to\" + verbo), sem \"of\"."],
["ty","Você pode vir amanhã?","Can you come tomorrow","can · come · tomorrow — pergunta com can","coming","Na pergunta, o auxiliar \"can\" vem antes de \"you\"."],
["ty","Ele gosta de gatos?","Does he like cats","does · like · cat — escreva no plural","likes","A pergunta leva o auxiliar \"Does\", e \"like\" fica na forma base."]]},

{ id:"continuous", title:"O que está acontecendo agora: be + -ing", blurb:"O «estou fazendo» existe em português. Em inglês ele é obrigatório para o que acontece agora, mas não combina com know, want e need.", deck:"Bate-papo", body:`
<p>O presente contínuo (<i>present continuous</i>) é <b>be + verbo na forma -ing (gerúndio)</b>, como «estou trabalhando». A ideia é a mesma do português: o que acontece <b>neste momento</b>. A diferença é que em inglês ele é obrigatório para o agora (o presente simples <i>I work</i> não serve) e não se usa com verbos de estado.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Estou trabalhando agora}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Ela está fazendo o jantar}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Está chovendo}}
<h3>Perguntas e negativas</h3>
<p>Como sempre com <i>be</i>: para perguntar, <i>am / is / are</i> vem antes do sujeito; para negar, <i>not</i> vem depois.</p>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|O que você está fazendo?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Você está me ouvindo?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Não estou dormindo}}
<h3>Comparado com o presente simples</h3>
<div class="tbl"><table><tr><th>Sempre (presente simples)</th><th>Agora (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<p>Atenção: <i>What do you do?</i> pergunta qual é a sua profissão; <i>What are you doing?</i>, o que você está fazendo agora.</p>
<h3>Verbos que não vão com -ing</h3>
<p><i>like, know, want, need, have</i> (ter) expressam um <b>estado</b>: ficam no presente simples mesmo quando você fala de agora. Aqui o hábito brasileiro atrapalha: «estou querendo um café» e «estou precisando de ajuda» soam naturais em português, mas em inglês é <i>I want a coffee</i> e <i>I need help</i>. E o «vou estar enviando» não tem equivalente: é <i>I'll send</i>.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Eu o conheço}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Quero água}}
<div class="tip">Erros comuns: <b>What do you do now?</b> ✗ → <b>What are you doing?</b> ✓ · <b>I working.</b> ✗ → <b>I'm working.</b> ✓ · <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓ · <b>I'm wanting a coffee.</b> ✗ → <b>I want a coffee.</b> ✓</div>`,
check:[["Como se diz «O que você está fazendo?»?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"O que acontece agora se pergunta com \"be\" + -ing."],["I ___ coffee every morning. O que vai no espaço?",["am drinking","drinking","drink","am drink"],2,"Um hábito diário vai no presente simples."],["Qual destas frases é correta?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"\"Know\", \"want\" e \"have\" (ter) não vão com -ing, mesmo que em português se diga «estou querendo»."]],
practice:[
["mc","Como se diz «Estou trabalhando agora»?","I'm working now.","I work now am.","I'm work now.","I working now.","O que acontece agora: \"be\" + forma -ing; não esqueça o \"am\"."],
["mc","Como se diz «Ela está fazendo o jantar»?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","\"Be\" + -ing, e as refeições vão sem artigo."],
["mc","Qual frase descreve algo que você faz todo dia?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Os hábitos vão no presente simples."],
["mc","Um amigo liga e você pergunta «O que você está fazendo?». O que você diz?","What are you doing?","What do you doing?","What are you do?","What you are doing?","O que acontece agora: palavra interrogativa + \"are\" + \"you\" + -ing."],
["mc","Como se diz «Eu o conheço»?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","\"Know\" é um verbo de estado: não vai com -ing."],
["or","O que você está fazendo?","What are you doing","do","Para o que acontece agora: palavra interrogativa + auxiliar \"are\" + sujeito + -ing."],
["or","As crianças estão brincando","The kids are playing","is","\"Kids\" é plural: \"are\" (concordância)."],
["or","Eu estou lendo um livro","I'm reading a book","read","O que acontece agora: \"be\" + forma -ing."],
["fi","I'm __ TV.","Estou vendo TV","watching","watch|watches|to watch","Depois de \"be\" vem a forma -ing."],
["fi","What __ you doing?","O que você está fazendo?","are","do|is|does","Com \"you\", o auxiliar é \"are\"."],
["fi","She __ working today.","Ela não está trabalhando hoje","isn't|is not","doesn't|don't|not","A negativa de \"be\" + -ing é \"isn't\"."],
["ty","Estou cozinhando agora","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — forma -ing","cook","O que acontece agora: \"be\" + forma -ing."],
["ty","Está chovendo?","Is it raining","is · it · rain — forma -ing","rains","Na pergunta, o auxiliar \"is\" vem antes de \"it\"."],
["ty","Ela está trabalhando hoje","She is working today","she · work · today — forma -ing","works","Com \"she\", o auxiliar é \"is\" (concordância), mais a forma -ing."]]},

{ id:"past", title:"Passado: was / were, -ed e did", blurb:"O passado não muda com a pessoa. O difícil: como soa o -ed e o auxiliar did.", deck:"Bate-papo", body:`
<p>O conceito você já conhece: o inglês tem um passado simples (<i>simple past</i>), como «trabalhei». E a boa notícia: <b>ele não muda com a pessoa</b> (<i>I worked, she worked, they worked</i>). O difícil está em dois pontos: como soa o <b>-ed</b> e o auxiliar <b>did</b>.</p>
<h3>was / were</h3>
<p><b>was</b> com <i>I, he, she, it</i>; <b>were</b> com <i>you, we, they</i>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Eu estava cansada}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Foi divertido}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Estávamos em casa}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Você estava ocupado?}}
<h3>-ed: três sons</h3>
<p>Não pronuncie o -ed sempre como «ed» e não acrescente vogal no fim: <i>worked</i> tem uma sílaba só, e não soa «uórquid». Depois de um som surdo, o -ed soa /t/; depois de um som sonoro, /d/; só depois de t ou d aparece uma sílaba a mais, /ɪd/.</p>
<div class="tbl"><table><tr><th>soa /t/</th><th>soa /d/</th><th>soa /ɪd/</th></tr><tr><td class="k">worked, watched, helped</td><td class="k">played, called, lived</td><td class="k">wanted, needed</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Trabalhei ontem}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Vimos um filme}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Ela me ligou}}{{ex:I wanted coffee.|/aɪ ˈwɑːntɪd ˈkɔːfi/|Eu queria café}}
<h3>Negativas e perguntas: did</h3>
<p>Assim como <i>do</i> no presente, o passado usa o auxiliar <b>did</b>, e o verbo volta à forma base: <i>Did you call?</i>, nunca <i>Did you called?</i>. E não pergunte só com a entonação, como em «Você me ligou?»: em inglês é <i>Did you call me?</i>.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Ontem eu não trabalhei}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Você me ligou?}}
<div class="tip">Erros comuns: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓ · <b>You called me?</b> ✗ → <b>Did you call me?</b> ✓ · <b>worked</b> com vogal no fim, «uórquid» ✗ → uma sílaba só ✓</div>`,
check:[["They ___ at home yesterday. O que vai no espaço?",["was","were","did","are"],1,"Com \"they\", o passado de \"be\" é \"were\"."],["Como se diz «Ontem eu não trabalhei»?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"Depois de \"didn't\" vem o verbo na forma base."],["Did you ___ the movie? O que vai no espaço?",["watch","watched","watching","watches"],0,"Depois de \"Did\" vem o verbo na forma base."]],
practice:[
["mc","I ___ tired yesterday. O que vai no espaço?","was","were","did","am","Com \"I\", o passado de \"be\" é \"was\"."],
["mc","Como se diz «Você ligou ontem?»?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","Com \"did\", o verbo volta à forma base."],
["mc","Em qual destes verbos o -ed é pronunciado como uma sílaba a mais?","wanted","worked","played","watched","O -ed soa como sílaba separada só depois de t ou d: \"wanted\"."],
["mc","Como se diz «Foi divertido»?","It was fun.","Was fun.","It were fun.","It did fun.","Com \"it\", o passado de \"be\" é \"was\", e o \"it\" não pode faltar."],
["mc","Como se diz «Você estava ocupado?»?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","\"Busy\" é um estado: a pergunta é com \"be\" (were)."],
["or","Você me ligou?","Did you call me","called","A pergunta no passado leva o auxiliar \"Did\" e o verbo na forma base."],
["or","Nós estávamos em casa","We were at home","was","Com \"we\", o passado de \"be\" é \"were\" (concordância)."],
["or","Ontem eu não trabalhei","I didn't work yesterday","worked","Depois do auxiliar \"didn't\", o verbo fica na forma base."],
["fi","We __ at home last night.","Ontem à noite nós estávamos em casa","were","was|did|are","Com \"we\", o passado de \"be\" é \"were\"."],
["fi","I __ soccer yesterday.","Ontem eu joguei futebol","played","play|playing|was play","Passado regular: \"play\" + -ed."],
["fi","__ you work yesterday?","Você trabalhou ontem?","Did","Were|Do|Was","Pergunta no passado com um verbo comum: \"Did\"."],
["ty","Foi divertido","It was fun","it · fun — o sujeito é obrigatório","were","«Foi divertido» não tem sujeito em português, mas em inglês tem: \"it was\"."],
["ty","Você trabalhou ontem?","Did you work yesterday","did · work · yesterday — forma base","worked","A pergunta no passado leva o auxiliar \"Did\"; o verbo fica na forma base."],
["ty","Eu vi um filme","I watched a movie|I saw a movie","watched · movie — passado com -ed","watch","Passado regular: \"watch\" + -ed, e aqui o -ed soa como t."]]},

{ id:"irregular-past", title:"Passado irregular: went, ate, saw", blurb:"Os verbos mais comuns não levam -ed. Aprenda primeiro estes doze.", deck:"Bate-papo", body:`
<p>Assim como em português (fui, comi, vi), os verbos mais comuns são <b>irregulares</b>. Não há regra: aprenda em pares.</p>
<div class="tbl"><table><tr><th>Presente</th><th>Passado</th><th>Presente</th><th>Passado</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Rio.|/aɪ ˈwent tə ˈriːoʊ/|Fui para o Rio}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Comemos pizza}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Vi um filme}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Encontrei meus amigos}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Comprei um livro}}
<h3>Em perguntas e negativas, forma base</h3>
<p>O auxiliar <b>did</b> já marca o passado, então o verbo volta à forma base. É o erro mais comum: <i>Did you went?</i>.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|O que você fez?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Aonde você foi?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Eu não fui}}
<div class="tip">Erros comuns: <b>I goed.</b> ✗ → <b>I went.</b> ✓ · <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓ · <b>Where you went?</b> ✗ → <b>Where did you go?</b> ✓</div>`,
check:[["Qual é o passado de \"go\"?",["goed","gone","went","going"],2,"O passado de \"go\" é \"went\"."],["Como se diz «O que você fez?»?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"Depois de \"did\" vem a forma base \"do\"."],["I didn't ___ breakfast. O que vai no espaço?",["ate","eaten","eats","eat"],3,"Depois de \"didn't\" vem o verbo na forma base."]],
practice:[
["mc","Qual é o passado de \"eat\"?","ate","eated","eat","eaten","O passado de \"eat\" é \"ate\"."],
["mc","Como se diz «Aonde você foi?»?","Where did you go?","Where did you went?","Where you went?","Where were you go?","Depois de \"did\" vem o verbo na forma base."],
["mc","Como se diz «Comprei um livro»?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","O passado de \"buy\" é \"bought\"."],
["mc","Qual é o passado de \"see\"?","saw","seed","seen","sawed","O passado de \"see\" é \"saw\"."],
["mc","Como se diz «Eu não fui»?","I didn't go.","I didn't went.","I wasn't go.","I not went.","Depois de \"didn't\" vem o verbo na forma base."],
["or","Aonde você foi?","Where did you go","went","Pergunta no passado: \"Where\" + auxiliar \"did\" + forma base \"go\"."],
["or","O que você comeu?","What did you eat","ate","Com o auxiliar \"did\", o verbo fica na forma base: \"eat\", não \"ate\"."],
["or","Eu vi um filme","I saw a movie","see","O passado de \"see\" é \"saw\"."],
["fi","I __ to Mexico last year.","No ano passado eu fui para o México","went","go|goed|gone","O passado de \"go\" é \"went\"."],
["fi","What did you __?","O que você comeu?","eat","ate|eaten|eating","Depois de \"did\" vem o verbo na forma base."],
["fi","She __ a new phone.","Ela comprou um celular novo","bought","buyed|buy|buys","O passado de \"buy\" é \"bought\"."],
["ty","Eu fui para Buenos Aires","I went to Buenos Aires","went · to · Buenos Aires — passado","go","O passado de \"go\" é \"went\"."],
["ty","O que você fez?","What did you do","what · did · do — forma base","done","Com o auxiliar \"did\", o verbo volta à forma base: \"do\"."],
["ty","Eu não fui","I didn't go","didn't · go — forma base","went","Depois do auxiliar \"didn't\" vem \"go\", não \"went\"."]]},

{ id:"the", title:"the: onde o português põe «o» e o inglês não", blurb:"A vida, os cachorros, o Brasil, o cabelo: em inglês, life, dogs, Brazil e my hair. Revisão rápida de a e the.", deck:"Direções e transporte", body:`
<p>O português e o inglês concordam no básico: na primeira vez, <i>a</i> (um); na segunda, <i>the</i> (o). Isso você já faz bem. Os problemas estão onde o português põe <i>o / a / os / as</i> e o inglês não.</p>
<h3>Revisão: a primeiro, the depois</h3>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Comprei uma camisa. A camisa é azul}}{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Você pode abrir a janela?}}
<h3>Em geral, sem the</h3>
<p>«A vida é difícil», «Adoro cachorros», «O café é caro»: quando você fala de algo <b>em geral</b>, em inglês vai <b>sem artigo</b>.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|A vida é difícil}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Adoro cachorros}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|O café é caro aqui}}
<h3>O corpo: possessivo, não the</h3>
<p>Onde o português diz «lavei <b>o</b> cabelo», o inglês usa o adjetivo possessivo: <i>my hair</i>.</p>
{{ex:I washed my hair.|/aɪ ˈwɑːʃt maɪ ˈher/|Lavei o cabelo}}{{ex:She broke her leg.|/ʃi ˈbroʊk hər ˈleg/|Ela quebrou a perna}}{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|Estou com dor de cabeça}}
<h3>Países e nomes: sem artigo</h3>
<p>Em português dizemos «o Brasil», «a Argentina» e, em muitas regiões, «o Pedro», «a Julia». Em inglês, países e nomes de pessoas vão sem artigo: <i>Brazil</i>, <i>Pedro</i>. A exceção são nomes como <i>the United States</i> e <i>the United Kingdom</i>.</p>
{{ex:I live in Brazil.|/aɪ ˈlɪv ɪn brəˈzɪl/|Eu moro no Brasil}}{{ex:Pedro lives in the United States.|/ˈpeɪdroʊ ˈlɪvz ɪn ðə juˈnaɪtɪd ˈsteɪts/|O Pedro mora nos Estados Unidos}}
<h3>Sem artigo: casa, trabalho, ônibus</h3>
{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Vou para o trabalho de ônibus}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Estou em casa}}
<div class="tip">Erros comuns: <b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ · <b>I washed the hair.</b> ✗ → <b>I washed my hair.</b> ✓ · <b>I live in the Brazil.</b> ✗ → <b>I live in Brazil.</b> ✓ · <b>I go to the work.</b> ✗ → <b>I go to work.</b> ✓</div>`,
check:[["I have a cat. ___ cat is white. O que vai no espaço?",["A","An","The","(sem artigo)"],2,"Você já falou do gato: \"the\"."],["I go to ___ work by bus. O que vai no espaço?",["a","the","an","(sem artigo)"],3,"\"Go to work\" vai sem artigo."],["Como se diz «Lavei o cabelo»?",["I washed the hair.","I washed my hair.","I washed hair.","I washed a hair."],1,"Com partes do corpo, o inglês usa possessivo: \"my hair\"."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue. O que vai no espaço?","The","A","An","Some","Você já falou da camisa: \"the\"."],
["mc","Como se diz «A vida é bela»?","Life is beautiful.","The life is beautiful.","A life is beautiful.","The life are beautiful.","Para falar de algo em geral, sem artigo."],
["mc","Como se diz «Ela quebrou a perna»?","She broke her leg.","She broke the leg.","She broke a leg.","She broke leg.","Com partes do corpo, o inglês usa possessivo: \"her leg\"."],
["mc","Qual é a frase correta?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","\"Go to work\" e \"by bus\" vão sem artigo."],
["mc","Como se diz «Adoro cachorros»?","I love dogs.","I love the dogs.","I love a dogs.","The dogs I love.","Em geral, plural sem \"the\": \"I love dogs\"."],
["or","Você pode abrir a janela?","Can you open the window","a","Na pergunta, o auxiliar \"can\" vem antes de \"you\"; \"the\" porque os dois sabem qual é a janela."],
["or","Minha cabeça está doendo","My head hurts","The hurt","Em inglês se diz \"my head\", não \"the head\"; e \"hurts\" leva o -s da terceira pessoa."],
["or","A vida é difícil","Life is hard","The","Com substantivos abstratos em geral não vai \"the\": \"Life is hard\"."],
["fi","I saw a movie. __ movie was great.","Vi um filme. O filme foi ótimo","The","A|An|Some","Você já falou do filme: \"the\"."],
["fi","I brushed __ teeth.","Escovei os dentes","my","the|a|some","Com partes do corpo, usa-se possessivo: \"my teeth\"."],
["fi","I'm at __.","Estou em casa","home","the home|a home|house","\"At home\" vai sem artigo."],
["ty","Lavei o cabelo","I washed my hair","washed · hair — possessivo, não the","the","Com partes do corpo, o inglês usa possessivo: \"my hair\"."],
["ty","Onde fica a estação?","Where is the station|Where's the station","where · station — com \"the\", não \"a\"","a","Com \"be\", o \"is\" vem antes do sujeito; \"the\" porque é a estação daqui."],
["ty","O leite é bom para você","Milk is good for you","milk · good — não use artigo","The","Em geral, \"milk\" vai sem artigo; incontável e singular: \"is\" (concordância)."]]},

{ id:"adjectives", title:"Adjetivos e comparações: big houses, cheaper, the best", blurb:"O adjetivo vem antes do substantivo e nunca muda. Para comparar, -er ou more, e than.", deck:"Compras e pagamentos", body:`
<p>Em português o adjetivo costuma vir <b>depois</b> e concorda: «casas grandes». Em inglês ele vem <b>antes</b> do substantivo e <b>nunca muda</b>: <i>big houses</i>. Nada de <i>a contract big</i> ou <i>bigs houses</i>.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|uma bolsa grande}}{{ex:red cars|/ˈred ˈkɑːrz/|carros vermelhos}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Esta bolsa é grande}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|É pequeno demais}}
<h3>Comparar: -er ou more, e than</h3>
<p>Palavras curtas: <b>-er</b>. Palavras longas: <b>more</b>. Nunca as duas juntas (<i>more cheaper</i>). E o «do que» da comparação é <b>than</b>: «mais barato do que» é <i>cheaper than</i>, nunca <i>cheaper that</i> nem <i>cheaper as</i>.</p>
<div class="tbl"><table><tr><th>Normal</th><th>Mais…</th><th>O mais…</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Este é mais barato}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|É mais caro do que aquele}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|Você tem um tamanho maior?}}
<h3>Superlativo: com the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Este é o melhor restaurante daqui}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Qual é o mais barato?}}
<div class="tip">Erros comuns: <b>the cars reds</b> ✗ → <b>the red cars</b> ✓ · <b>more cheaper</b> ✗ → <b>cheaper</b> ✓ · <b>cheaper that</b> ✗ → <b>cheaper than</b> ✓</div>`,
check:[["Qual é o comparativo de \"big\"?",["more big","biger","bigger","most big"],2,"Palavra curta: -er. Em \"big\" (consoante + vogal + consoante) o g dobra: \"bigger\". Compare: \"cheap\" → \"cheaper\"."],["This is ___ expensive than that. O que vai no espaço?",["more","most","much","very"],0,"Palavra longa: o comparativo leva \"more\"."],["Qual é o superlativo de \"good\"?",["the goodest","the most good","the better","the best"],3,"\"Good\" → \"better\" → \"the best\"."]],
practice:[
["mc","Qual é o comparativo de \"cheap\"?","cheaper","more cheap","more cheaper","most cheap","Palavras curtas: -er. Nunca \"more\" + -er."],
["mc","Como se diz «Isto é mais caro»?","This is more expensive.","This is expensiver.","This is most expensive.","This is more expensiver.","Palavras longas: \"more\" + adjetivo."],
["mc","Como se diz «casas grandes»?","big houses","bigs houses","houses big","houses bigs","O adjetivo vem antes e nunca leva -s."],
["mc","Como se diz «É mais barato do que o outro»?","It's cheaper than the other one.","It's cheaper that the other one.","It's more cheap that the other one.","It's cheaper as the other one.","O «do que» da comparação é \"than\", não \"that\"."],
["mc","Como se diz «É o melhor restaurante»?","It's the best restaurant.","It's the most good restaurant.","It's the restaurant best.","It's best restaurant the.","\"Good\" → \"better\" → \"the best\", e o adjetivo vem antes do substantivo."],
["or","Você tem um tamanho maior?","Do you have a bigger size","Are","A pergunta com \"have\" leva o auxiliar \"Do\"."],
["or","Estes sapatos são mais baratos","These shoes are cheaper","is","\"Shoes\" é plural: \"are\" (concordância); o adjetivo não muda."],
["or","Este é mais barato do que aquele","This is cheaper than that","more","\"-er\" e \"more\" não vão juntos."],
["fi","It's __ small.","É pequeno demais","too","much|more|most","«Pequeno demais» é \"too small\": \"too\" vem antes do adjetivo."],
["fi","This is cheaper __ that one.","Este é mais barato do que aquele","than","then|that|more","O «do que» da comparação é \"than\"."],
["fi","It's the __ expensive one.","É o mais caro","most","more|much|very","Palavra longa: o superlativo é \"the most\"."],
["ty","Você tem um tamanho menor?","Do you have a smaller size","do · smaller · size — pergunta com auxiliar","Are","A pergunta com \"have\" leva o auxiliar \"Do\"."],
["ty","Este é o melhor","This is the best|This one is the best","this · the best — é com the","a","Superlativo: \"the best\"; com \"this\", o verbo é \"is\" (concordância)."],
["ty","Eu tenho um carro vermelho","I have a red car","red · car — o adjetivo não vem depois","reds","O adjetivo vem antes do substantivo: \"a red car\"."]]},

{ id:"going-to", title:"Planos: be going to", blurb:"Funciona como «vou» + infinitivo. Só não esqueça o be: I'm, she's, we're.", deck:"Bate-papo", body:`
<p>Boa notícia: <i>going to</i> funciona quase igual a «ir» + infinitivo. «Vou viajar» = <i>I'm going to travel</i>. Só lembre que o <b>be não pode faltar</b> e muda com o sujeito (am / is / are): «eu vou» é <i>I'm going to</i>, e não <i>I going to</i>.</p>
{{ex:I'm going to visit New York.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt ˌnuː ˈjɔːrk/|Vou visitar Nova York}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Ela vai comprar um carro}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Vamos jantar}}
<h3>Negativas e perguntas</h3>
<p>Como com qualquer <i>be</i>: <i>not</i> depois e, para perguntar, <i>be</i> antes do sujeito. Nada de <i>do</i>.</p>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Eu não vou}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Você vai vir?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|O que você vai fazer neste fim de semana?}}
<h3>Previsões pelo que você vê</h3>
<p>Repare: «Vai chover» não tem sujeito em português, mas em inglês tem: <i>it</i>.</p>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Vai chover}}
<h3>Expressões de tempo</h3>
<p><i>tomorrow</i> (amanhã), <i>tonight</i> (hoje à noite), <i>this weekend</i> (neste fim de semana), <i>next week</i> (na semana que vem) vão no final.</p>
<div class="tip">Na fala rápida, <i>going to</i> soa <b>gonna</b>. E não esqueça o <i>be</i>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["Como se diz «Amanhã vou encontrar meu amigo»?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"\"Be\" + \"going to\" + verbo na forma base."],["She ___ going to study. O que vai no espaço?",["am","are","is","be"],2,"Com \"she\", \"is\"."],["Como se diz «O que você vai fazer neste fim de semana?»?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Palavra interrogativa + \"be\" + sujeito + \"going to\"."]],
practice:[
["mc","Como se diz «Vou para Lima» com going to?","I'm going to go to Lima.","I going to go to Lima.","I'm going go to Lima.","I'm go to Lima going.","Não esqueça o \"am\": \"be\" + \"going to\" + verbo."],
["mc","They ___ going to come. O que vai no espaço?","are","is","am","be","Com \"they\", \"are\"."],
["mc","Como se diz «Vai chover»?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","Depois de \"going to\" vem a forma base, e a frase precisa de \"it\"."],
["mc","Como se diz «Eu não vou»?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","A negativa põe \"not\" depois de \"be\", sem \"don't\"."],
["mc","Como se diz «Você vai vir?»?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Para perguntar, \"be\" vem antes de \"you\"."],
["or","Você vai vir?","Are you going to come","Do","A pergunta começa com o auxiliar \"Are\": \"Are you going to…?\"."],
["or","Eles vão viajar","They are going to travel","is","Com \"they\", o auxiliar é \"are\" (concordância)."],
["or","Nós vamos jantar","We're going to have dinner","a","As refeições vão sem artigo: \"have dinner\"."],
["fi","I'm going __ study tonight.","Hoje à noite eu vou estudar","to","for|at|will","\"Going to\" + verbo na forma base."],
["fi","__ you going to come?","Você vai vir?","Are","Do|Is|Will","Com \"you\", \"Are\"."],
["fi","It's going to __ tomorrow.","Amanhã vai chover","rain","rains|raining|rained","Depois de \"going to\" vem a forma base."],
["ty","Vai chover","It's going to rain","it · going to · rain — o sujeito é obrigatório","rains","«Vai chover» não tem sujeito em português; em inglês é preciso \"it\"."],
["ty","O que você vai fazer?","What are you going to do","what · going to · do — é com are","will","Palavra interrogativa + auxiliar \"are\" + \"you\" + \"going to\"."],
["ty","Eu vou ver um filme","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — forma base","watching","\"Going to\" + verbo na forma base."]]},

{ id:"joining", title:"Juntar frases: and, but, or, so, because", blurb:"Duas frases curtas numa só. E a diferença entre because e because of.", deck:"Emoções e reações", body:`
<p>Quem só fala frases curtas soa travado. Com estas palavras você liga ideias e fala com mais naturalidade.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Gosto de café e de chá}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Estou cansado, mas feliz}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Café ou chá?}}
<h3>so: então, por isso</h3>
<p>causa + <b>so</b> + resultado, como «então» ou «por isso».</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Eu estava cansada, então fui para casa}}
<h3>because e because of</h3>
<p><b>because</b> (porque) vem antes de uma frase com sujeito e verbo; <b>because of</b> (por causa de) vem antes de um substantivo. E depois de <i>because</i> o sujeito não pode faltar: «porque estava chovendo» é <i>because it was raining</i>, e não <i>because was raining</i>.</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Fui para casa porque estava cansado}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Fiquei em casa porque estava chovendo}}{{ex:I stayed home because of the rain.|/aɪ ˈsteɪd ˈhoʊm bɪkəz əv ðə ˈreɪn/|Fiquei em casa por causa da chuva}}
<h3>too: também</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Eu também gosto}}
<div class="tip">Não use <i>because</i> e <i>so</i> na mesma frase, como em «Como eu estava cansado, então fui para casa»: <b>Because I was tired, so I went home.</b> ✗. Escolha um dos dois.</div>`,
check:[["I was sick, ___ I stayed home. O que vai no espaço?",["because","but","so","or"],2,"Primeiro a causa e depois o resultado: \"so\"."],["I stayed home ___ I was sick. O que vai no espaço?",["because","so","but","and"],0,"Primeiro o resultado e depois a causa: \"because\"."],["O que você diz para «Você quer café ou chá?»?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Para escolher entre duas coisas, \"or\"."]],
practice:[
["mc","I like dogs ___ I don't like cats. O que vai no espaço?","but","so","or","because","Ideias contrárias se ligam com \"but\"."],
["mc","I was hungry, ___ I ate a sandwich. O que vai no espaço?","so","because","but","or","Primeiro a causa e depois o resultado: \"so\"."],
["mc","I ate a sandwich ___ I was hungry. O que vai no espaço?","because","so","but","or","Primeiro o resultado e depois a causa: \"because\"."],
["mc","I stayed home ___ the rain. O que vai no espaço?","because of","because","so","but","Antes de um substantivo (\"the rain\") vem \"because of\"; antes de uma frase, \"because\"."],
["mc","Como se diz «Estou cansada, mas feliz»?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","«Mas» é \"but\"."],
["or","Eu gosto de chá, mas ela não","I like tea but she doesn't","don't","Com \"she\", a negativa é \"doesn't\" (terceira pessoa)."],
["or","Ele trabalha e ela estuda","He works and she studies","work","Com \"he\" e \"she\", os dois verbos levam -s: terceira pessoa."],
["or","Eu estava com fome, então comi","I was hungry so I ate","because","Primeiro a causa, depois \"so\" e o resultado."],
["fi","I'm tired __ happy.","Estou cansado, mas feliz","but","so|because|or","«Mas» é \"but\"."],
["fi","I stayed home __ it was raining.","Fiquei em casa porque estava chovendo","because","so|but|or","Primeiro o resultado e depois a causa: \"because\"."],
["fi","Coffee __ tea?","Café ou chá?","or","so|but|because","Para escolher entre duas coisas, \"or\"."],
["ty","Estou cansado, mas feliz","I'm tired but happy|I'm tired but I'm happy","tired · but · happy — «mas» é but","so","«Mas» é \"but\"."],
["ty","Fiquei em casa porque estava chovendo","I stayed home because it was raining|I stayed at home because it was raining|I stayed home because it rained|I stayed at home because it rained","stayed home · because · rain — o sujeito é obrigatório","so","Depois de \"because\" é preciso um sujeito: \"it was raining\", nunca \"because was raining\"."],
["ty","Ele não veio por causa da chuva","He didn't come because of the rain","didn't · come · because of — por causa de","came","Negativa no passado com o auxiliar \"didn't\"; \"because of\" vem antes de um substantivo."]]},

{ id:"false-friends", title:"Falsos cognatos: actually não é «atualmente»", blurb:"Palavras parecidas com o português que significam outra coisa, e como aproveitar os cognatos que são confiáveis.", deck:"Falsos cognatos", body:`
<p>Milhares de palavras em inglês se parecem com o português e significam a mesma coisa: <i>hotel, important, family, possible</i>. A grande maioria dos cognatos de origem latina é confiável. Mas alguns, muito frequentes, são <b>falsos cognatos</b> (ou falsos amigos): parecem, mas significam outra coisa. Eles caem muito em provas de leitura, como a do ENEM.</p>
<h3>Verbos</h3>
<p><i>pretend</i> é «fingir»; «pretender» é <i>intend</i> ou <i>plan</i>. <i>push</i> é «empurrar»; «puxar» é <i>pull</i>. <i>realize</i> é «perceber, se dar conta», e não «realizar». «Assistir a» uma aula é <i>attend</i> e «assistir» TV é <i>watch</i>; <i>assist</i> é «ajudar».</p>
{{ex:He's pretending to sleep.|/hiz prɪˈtendɪŋ tə ˈsliːp/|Ele está fingindo que dorme}}{{ex:Push the door.|/ˈpʊʃ ðə ˈdɔːr/|Empurre a porta}}{{ex:I didn't realize.|/aɪ ˈdɪdnt ˈriːəlaɪz/|Não percebi}}{{ex:I attend class every day.|/aɪ əˈtend ˈklæs ˈevri ˈdeɪ/|Assisto às aulas todos os dias}}
<h3>Advérbios e adjetivos</h3>
<p><i>actually</i> é «na verdade»; «atualmente» é <i>currently</i>. <i>eventually</i> é «no fim, com o tempo», e não «eventualmente» (que é <i>occasionally</i>). <i>sensible</i> é «sensato»; «sensível» é <i>sensitive</i>. E <i>exquisite</i> é «requintado», nada a ver com «esquisito» (<i>weird</i>).</p>
{{ex:Actually, I'm from Brazil.|/ˈæktʃuəli aɪm frəm brəˈzɪl/|Na verdade, sou do Brasil}}{{ex:Currently, I work at home.|/ˈkɜːrəntli aɪ ˈwɜːrk ət ˈhoʊm/|Atualmente trabalho em casa}}{{ex:Eventually, she found a job.|/ɪˈventʃuəli ʃi ˈfaʊnd ə ˈdʒɑːb/|No fim, ela arranjou um emprego}}{{ex:He's very sensible.|/hiz ˈveri ˈsensəbl/|Ele é muito sensato}}{{ex:She's very sensitive.|/ʃiz ˈveri ˈsensətɪv/|Ela é muito sensível}}
<h3>Pessoas e lugares</h3>
<p><i>parents</i> são os «pais»; «parentes» são <i>relatives</i>. <i>college</i> é «faculdade», e não «colégio» (que é <i>school</i>). <i>library</i> é «biblioteca»; «livraria» é <i>bookstore</i>.</p>
{{ex:My parents live here.|/maɪ ˈperənts ˈlɪv ˈhɪr/|Meus pais moram aqui}}{{ex:The library is free.|/ðə ˈlaɪbreri ɪz ˈfriː/|A biblioteca é gratuita}}{{ex:Is there a bookstore near here?|/ɪz ðer ə ˈbʊkstɔːr nɪr ˈhɪr/|Tem uma livraria aqui perto?}}
<h3>Coisas do dia a dia</h3>
<p><i>lunch</i> é «almoço», e não «lanche» (<i>snack</i>). <i>novel</i> é «romance»; «novela» é <i>soap opera</i>. <i>exit</i> é «saída»; «êxito» é <i>success</i>. <i>prejudice</i> é «preconceito», e não «prejuízo».</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Vamos almoçar}}{{ex:Where is the exit?|/ˈwer ɪz ði ˈeksɪt/|Onde fica a saída?}}{{ex:The party was a success.|/ðə ˈpɑːrti wəz ə səkˈses/|A festa foi um sucesso}}
<h3>Falsos só pela metade</h3>
<p>Alguns funcionam só em parte. <i>discuss</i> é «discutir» no sentido de conversar sobre um assunto, nunca de brigar (isso é <i>argue</i>). <i>support</i> é «apoiar», e não «suportar» alguém (<i>put up with</i>). <i>introduce</i> é «apresentar» uma pessoa, e não «introduzir».</p>
<h3>Os cognatos que ajudam</h3>
<p>Estas terminações quase sempre funcionam. Só cuidado com a sílaba tônica: em inglês ela costuma cair em outro lugar (<i>comfortable</i> é forte no começo, e não no «tá» de «confortável»).</p>
<div class="tbl"><table><tr><th>Inglês</th><th>Português</th><th>Exemplo</th></tr><tr><td class="k">-tion</td><td>-ção</td><td class="k">information</td></tr><tr><td class="k">-ty</td><td>-dade</td><td class="k">city</td></tr><tr><td class="k">-ous</td><td>-oso</td><td class="k">famous</td></tr><tr><td class="k">-ly</td><td>-mente</td><td class="k">really</td></tr></table></div>
<div class="tip">Para lembrar: <b>actually</b> = na verdade · <b>pretend</b> = fingir · <b>push</b> = empurrar (puxar = <b>pull</b>) · <b>parents</b> = pais (parentes = <b>relatives</b>) · <b>library</b> = biblioteca (livraria = <b>bookstore</b>)</div>`,
check:[["O que significa \"He's pretending\"?",["Ele pretende ir","Ele está fingindo","Ele está tentando","Ele está fugindo"],1,"\"Pretend\" = fingir; «pretender» é \"intend\"."],["Como se diz «Atualmente moro em São Paulo»?",["Actually, I live in São Paulo.","Actual, I live in São Paulo.","Currently, I live in São Paulo.","In actual, I live in São Paulo."],2,"«Atualmente» é \"currently\"; \"actually\" significa «na verdade»."],["«A livraria abre às nove» em inglês é:",["The bookstore opens at nine.","The library opens at nine.","The bookcase opens at nine.","The librarian opens at nine."],0,"«Livraria» é \"bookstore\"; \"library\" é «biblioteca»."]],
practice:[
["mc","O que significa \"actually\"?","na verdade","atualmente","ativamente","às vezes","\"Actually\" = na verdade; «atualmente» é \"currently\"."],
["mc","Como se diz «Empurre a porta»?","Push the door.","Pull the door.","Press the door.","Put the door.","\"Push\" = empurrar, apesar de lembrar «puxar»; puxar é \"pull\"."],
["mc","Como se diz «Assisto às aulas às segundas»?","I attend class on Mondays.","I assist class on Mondays.","I assist to class on Mondays.","I attend to class on Mondays.","«Assistir a» uma aula é \"attend\"; \"assist\" significa «ajudar»."],
["mc","O que significa \"He's very sensible\"?","É muito sensato.","É muito sensível.","É muito sentimental.","É muito simpático.","\"Sensible\" = sensato; «sensível» é \"sensitive\"."],
["mc","O que significa \"My parents live in Recife\"?","Meus pais moram em Recife.","Meus parentes moram em Recife.","Meus primos moram em Recife.","Meus avós moram em Recife.","\"Parents\" = pais; «parentes» é \"relatives\"."],
["or","Onde fica a saída?","Where is the exit","success","Na pergunta, \"is\" vem antes do sujeito (\"the exit\"). «Saída» é \"exit\"; «êxito» é \"success\"."],
["or","Ela trabalha na biblioteca","She works at the library","work","Com \"she\", \"works\" leva -s (terceira pessoa). Biblioteca = \"library\"."],
["or","Você percebeu?","Did you realize","realized","Pergunta no passado: auxiliar \"Did\" + forma base \"realize\" (perceber)."],
["fi","__, I'm from Brazil.","Na verdade, sou do Brasil","Actually","Currently|Actual|Now","«Na verdade» é \"actually\"."],
["fi","I bought it at the __.","Comprei na livraria","bookstore","library|bookcase|book","«Livraria» é \"bookstore\"; \"library\" é «biblioteca»."],
["fi","Don't __ you didn't see me.","Não finja que não me viu","pretend","intend|prepare|present","«Fingir» é \"pretend\"; «pretender» é \"intend\"."],
["ty","Ela está fingindo que dorme","She is pretending to be asleep|She pretends to be asleep|She is pretending to sleep","she · pretending · asleep — fingir, não pretender","intends","Com \"she\", o auxiliar é \"is\" (concordância), mais a forma -ing; \"pretend\" = fingir."],
["ty","Ele não percebeu","He didn't realize|He didn't notice","didn't · realize — forma base","realized","Negativa no passado com o auxiliar \"didn't\"; \"realize\" = perceber."],
["ty","Ela assiste às aulas","She attends class|She attends classes|She attends her classes|She goes to class|She goes to classes","attend · class — ela (she)","assists","Com \"she\", \"attends\" leva -s (terceira pessoa); «assistir a» uma aula é \"attend\"."]]},
];
