/* pt-en stage B1: lessons for Brazilian Portuguese speakers. English side shared with es-en (parity.js).
   Contrasts follow docs/profiles/pt.md §4 and §8; practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present perfect 2: for, since e «há… anos»", blurb:"Algo que começou no passado e continua hoje. For + duração, since + ponto de partida.", deck:"Apresentações", body:`
<p>O segundo uso do <i>present perfect</i>: algo que <b>começou no passado e continua agora</b>. Aqui o português usa o presente («Moro aqui desde 2020», «Trabalho aqui há três anos»), mas o inglês precisa de <b>have/has + particípio</b>.</p>
{{ex:I've lived in Rio for five years.|/aɪv ˈlɪvd ɪn ˈriːoʊ fər ˈfaɪv ˈjɪrz/|Moro no Rio há cinco anos}}{{ex:She has worked here since 2020.|/ʃi həz ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Ela trabalha aqui desde 2020}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Eu a conheço há muito tempo}}
<h3>for e since</h3>
<div class="tbl"><table><tr><th>for + quanto tempo («há», «faz»)</th><th>since + ponto de partida («desde»)</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<p>Não confunda: «há três anos» de duração (<i>for three years</i>) não é o mesmo que «há três anos» no passado, que vira <i>three years ago</i> com o passado simples.</p>
<h3>How long…?</h3>
<p>«Há quanto tempo você…?» se pergunta com <i>How long have you…?</i>, com o auxiliar antes do sujeito. Com <i>he, she, it</i>, o auxiliar é <i>has</i>.</p>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Há quanto tempo você está aqui?}}{{ex:How long has she studied English?|/ˈhaʊ ˈlɔːŋ həz ʃi ˈstʌdid ˈɪŋglɪʃ/|Há quanto tempo ela estuda inglês?}}
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Acabei de terminar}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Eu já vi}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Você já comeu?}}
<p>No inglês americano também se diz <i>Did you eat yet?</i> e <i>I already saw it</i>; as duas formas estão corretas.</p>
<div class="tip">O erro típico dos brasileiros: <b>I live here since 2020.</b> ✗ → <b>I've lived here since 2020.</b> ✓. E «há cinco anos» (duração) é <i>for</i>, não <i>since</i>: <b>for five years</b>.</div>`,
check:[["I've lived here ___ three years. O que vai no espaço?",["since","for","during","from"],1,"«Há» + duração é \"for\"."],["I've worked here ___ 2020. O que vai no espaço?",["for","in","since","at"],2,"«Desde» + ponto de partida é \"since\"."],["«Há quanto tempo você está aqui?» em inglês:",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"A forma é \"How long have you\" + particípio."]],
practice:[
["mc","I've known him ___ ten years. O que vai no espaço?","for","since","from","during","«Há» + duração é \"for\"."],
["mc","She's lived here ___ 2019. O que vai no espaço?","since","for","in","at","«Desde» + ponto de partida é \"since\"."],
["mc","«Há quanto tempo você está aqui?» em inglês:","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","Na pergunta, o auxiliar \"have\" vem antes do sujeito."],
["mc","Como se diz «Acabei de terminar»?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","A forma é \"have\" + \"just\" + particípio."],
["mc","«Você já comeu?» em inglês:","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Em perguntas, «já» costuma ser \"yet\", no fim da frase."],
["or","Ela mora aqui desde 2020","She has lived here since 2020","have","Com \"she\", o auxiliar é \"has\": terceira pessoa."],
["or","Há quanto tempo você mora aqui?","How long have you lived here","has live","Com \"you\", o auxiliar é \"have\" (concordância) e vem antes do sujeito; depois vem o particípio \"lived\", e não o presente."],
["or","Eu moro aqui há cinco anos","I've lived here for five years","since","«Há» + duração é \"for\", não \"since\"."],
["fi","I've worked here __ two years.","Eu trabalho aqui há dois anos","for","since|from|during","«Há» + duração é \"for\"."],
["fi","I've been here __ Monday.","Estou aqui desde segunda-feira","since","for|at|during","«Desde» + ponto de partida é \"since\"."],
["fi","Have you finished __?","Você já terminou?","yet|already","ever|never|since","Em perguntas, «já» costuma ser \"yet\"."],
["ty","Há quanto tempo ela está aqui?","How long has she been here","how long · been · here — pergunta com o auxiliar","is","Com \"she\", o auxiliar é \"has\" (terceira pessoa), e vem antes do sujeito."],
["ty","Meu irmão trabalha aqui desde 2021","My brother has worked here since 2021|My brother has been working here since 2021","work · here · since — o sujeito está na terceira pessoa","works","Com \"my brother\" (terceira pessoa) vai \"has\" + particípio, e não o presente."],
["ty","Eu moro aqui há três anos","I've lived here for three years|I've been living here for three years","live · here · three years — frase com \"for\"","since","«Há» + duração é \"for\", com o present perfect."]]},
{ id:"narrative", title:"Tempos para narrar: passado simples, passado contínuo e past perfect", blurb:"O cenário vai no passado contínuo, os fatos no passado simples e o que veio antes com had + particípio.", deck:"Cinema, séries e gírias", body:`
<p>Para contar uma história, misturam-se três tempos verbais. Cada um tem seu papel, e eles se parecem bastante com os do português:</p>
<div class="tbl"><table><tr><th>Tempo verbal</th><th>Papel</th><th>Exemplo</th></tr><tr><td class="k">passado contínuo (<i>past continuous</i>, «estava andando»)</td><td>o cenário, o que estava acontecendo</td><td>I was walking home.</td></tr><tr><td class="k">passado simples (<i>simple past</i>, «vi»)</td><td>o que aconteceu</td><td>I saw an old friend.</td></tr><tr><td class="k">past perfect («tinha visto»)</td><td>o que aconteceu antes</td><td>He had moved to Miami.</td></tr></table></div>
<h3>Cenário + fato</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Eu estava voltando a pé para casa quando vi um velho amigo}}
<h3>Past perfect: had + particípio</h3>
<p>O <i>past perfect</i> (mais-que-perfeito) equivale a «tinha + particípio»: algo que aconteceu <b>antes</b> de outro momento do passado. <i>had</i> é igual para todas as pessoas.</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Quando eu cheguei, o filme já tinha começado}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|Eu nunca tinha visto neve}}
<h3>Palavras para ordenar</h3>
<p><i>first</i> (primeiro), <i>then</i> (depois, aí), <i>after that</i> (depois disso), <i>finally</i> (no fim).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Primeiro jantamos. Depois vimos um filme}}
<h3>Perguntas e negativas</h3>
<p>No passado simples, perguntas e negativas levam o auxiliar <i>did</i> + verbo na forma base: <b>Did you see him?</b>, <b>I didn't see him</b>, e não <i>Did you saw</i>. No passado contínuo, o auxiliar é <i>was/were</i>, que concorda com o sujeito.</p>
{{ex:What were you doing when I called?|/ˈwʌt wər ju ˈduːɪŋ wen aɪ ˈkɔːld/|O que você estava fazendo quando eu liguei?}}{{ex:Did you see the movie?|/dɪd ju ˈsiː ðə ˈmuːvi/|Você viu o filme?}}
<div class="tip"><i>then</i> (depois) e <i>than</i> («do que», em comparações) soam parecido, mas são palavras diferentes. Para narrar, use <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. O que vai no espaço?",["has","was","had","did"],2,"O que aconteceu antes vai com \"had\" + particípio."],["I ___ walking home when it started to rain. O que vai no espaço?",["was","had","did","have"],0,"O cenário da história vai no passado contínuo."],["Qual frase fala de algo que aconteceu antes de outro momento do passado?",["I was eating.","I ate.","I eat.","I had eaten."],3,"\"Had\" + particípio é o past perfect."]],
practice:[
["mc","When I got there, the movie ___ already started. O que vai no espaço?","had","has","was","did","O que aconteceu antes vai com \"had\" + particípio."],
["mc","I ___ cooking when the phone rang. O que vai no espaço?","was","had","did","have","O cenário da história vai no passado contínuo."],
["mc","Como se diz «Quando eu cheguei, o trem já tinha saído»?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","O que aconteceu antes vai com \"had\" + particípio."],
["mc","Para continuar a história, como se diz «depois»?","then","than","that","them","\"Then\" é «depois»; \"than\" se usa em comparações."],
["mc","Como se diz «Eu nunca tinha visto neve»?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","A forma é \"had\" + \"never\" + particípio."],
["or","Você viu seu amigo?","Did you see your friend","saw","Na pergunta no passado vem o auxiliar \"did\" e o verbo na forma base \"see\"."],
["or","Ela estava voltando a pé para casa","She was walking home","were","Com \"she\" vai \"was\": concordância."],
["or","O trem já tinha saído","The train had already left","has","O que aconteceu antes vai com \"had\" + particípio."],
["fi","I was sleeping __ you called.","Eu estava dormindo quando você ligou","when","than|so|had","«Quando» é \"when\"."],
["fi","The bus had already __.","O ônibus já tinha saído","left|gone","leave|leaving|leaves","Depois de \"had\" vem o particípio."],
["fi","First we ate. __ we watched a movie.","Primeiro comemos. Depois vimos um filme","Then|After that|Next","Than|Because|When","«Depois» é \"then\"."],
["ty","Eu não vi o filme","I didn't see the movie|I didn't watch the movie","see · movie — negação com o auxiliar","saw","A negação no passado usa o auxiliar \"didn't\" + verbo na forma base: \"see\", e não \"saw\"."],
["ty","Eles estavam vendo TV","They were watching TV|They were watching television","watch · TV — frase no passado contínuo","was","Com \"they\" vai \"were\" + -ing: concordância."],
["ty","O filme já tinha começado","The movie had already started|The movie had started already","movie · already · start — com \"had\" + particípio","has","O que aconteceu antes vai com \"had\" + particípio."]]},
{ id:"conditionals", title:"Segundo e terceiro condicional: situações imaginárias", blurb:"Se eu tivesse… → if + passado, would. Se eu tivesse feito… → if + had + particípio, would have.", deck:"Emoções e reações", body:`
<p>Servem para imaginar o que não é real, e combinam bem com o português: «se eu tivesse…, eu faria…» e «se eu tivesse feito…, eu teria…». A diferença: onde o português usa o subjuntivo depois de «se», o inglês usa um tempo do passado, e <b>nunca would</b> depois de <i>if</i>.</p>
<h3>Segundo condicional: um presente imaginário</h3>
<p><b>If + passado simples, would + verbo</b>. «Se eu tivesse tempo» → <i>If I had time</i>.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Se eu tivesse tempo, eu viajaria}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|Se eu fosse você, eu aceitaria}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|O que você faria?}}
<h3>Terceiro condicional: um passado imaginário</h3>
<p><b>If + had + particípio, would have + particípio</b>. É o mesmo esquema de «se eu tivesse estudado, teria passado».</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Se eu tivesse estudado, teria passado}}
<h3>Arrependimentos: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Eu devia ter ligado}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Quem me dera ter mais tempo}}
<div class="tbl"><table><tr><th>Tipo</th><th>Parte com if</th><th>Resultado</th></tr><tr><td>1 (possível)</td><td class="k">presente</td><td class="k">will</td></tr><tr><td>2 (imaginário, agora)</td><td class="k">passado</td><td class="k">would</td></tr><tr><td>3 (imaginário, no passado)</td><td class="k">had + particípio</td><td class="k">would have + particípio</td></tr></table></div>
<h3>Perguntas e sujeito</h3>
<p>Nas perguntas, o auxiliar <i>would</i> vem antes do sujeito. E, embora em português se diga «Seria ótimo», em inglês é preciso um sujeito: <i>It would be great</i>.</p>
{{ex:Would you move to another country?|/wəd ju ˈmuːv tu əˈnʌðər ˈkʌntri/|Você se mudaria para outro país?}}{{ex:It would be great.|/ɪt wəd bi ˈgreɪt/|Seria ótimo}}
<div class="tip"><i>If I were you</i> («se eu fosse você») é uma expressão fixa: com <i>I</i> também vai <b>were</b>, e não <i>was</i>. E nunca coloque <i>would</i> depois de <i>if</i>: <b>If I would have time</b> ✗ → <b>If I had time</b> ✓.</div>`,
check:[["If I ___ rich, I would travel. O que vai no espaço?",["am","were","will be","would be"],1,"Para algo imaginário no presente, depois de \"if\" vem o passado (\"were\")."],["If I had studied, I ___ passed. O que vai no espaço?",["would","will have","would have","had"],2,"Para um passado imaginário: \"would have\" + particípio."],["«Eu devia ter ligado» em inglês:",["I should have called.","I should called.","I should had call.","I would call should."],0,"Para lamentar algo: \"should have\" + particípio."]],
practice:[
["mc","If I ___ time, I would help. O que vai no espaço?","had","have","will have","would have","Para algo imaginário no presente, depois de \"if\" vem o passado."],
["mc","Como se diz «Se eu fosse você, eu compraria»?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd…\" é uma expressão fixa."],
["mc","If I had known, I ___ come. O que vai no espaço?","would have","would","will have","had","Para um passado imaginário: \"would have\" + particípio."],
["mc","Como se diz «Eu devia ter ligado»?","I should have called.","I should called.","I should had call.","I must called.","Para lamentar algo: \"should have\" + particípio."],
["mc","«O que você faria?» em inglês:","What would you do?","What will you did?","What would you did?","What you would do?","Na pergunta, o auxiliar \"would\" vem antes do sujeito."],
["or","Você me ajudaria?","Would you help me","Do","Na pergunta, o auxiliar \"would\" vem antes do sujeito."],
["or","Onde você moraria?","Where would you live","will","Depois da palavra interrogativa, o auxiliar \"would\" vem antes do sujeito."],
["or","Se eu tivesse tempo, eu viajaria","If I had time I'd travel","have will","Depois de \"if\" vem o passado (\"had\"), e não \"will\" nem \"would\"."],
["fi","If I __ you, I'd go.","Se eu fosse você, eu iria","were|was","am|be|would be","\"If I were you\" é uma expressão fixa."],
["fi","I would __ helped.","Eu teria ajudado","have","had|has|having","A forma é \"would have\" + particípio."],
["fi","I wish I __ more time.","Quem me dera ter mais tempo","had","have|would have|will have","Depois de \"I wish\" vem o passado."],
["ty","O que você faria?","What would you do","would · do — pergunta com o auxiliar","will","Na pergunta, o auxiliar \"would\" vem antes do sujeito."],
["ty","Seria ótimo","It would be great|It'd be great|That would be great","great — a frase precisa do sujeito \"it\"","is","Em inglês o sujeito é obrigatório: \"It would be great\"."],
["ty","Se eu fosse você, eu iria","If I were you I'd go|I'd go if I were you|If I was you I'd go","if · were · go — uma expressão fixa","am","«Se eu fosse você» é \"If I were you\", com \"were\"."]]},
{ id:"passive", title:"Voz passiva: be + particípio", blurb:"Quando importa o que aconteceu, e não quem fez. Onde o português diz «aqui se fala inglês», o inglês usa a voz passiva.", deck:"Trabalho e e-mail", body:`
<p>A voz passiva é <b>be + particípio</b>. Ela é usada quando você não sabe quem fez algo ou quando isso não importa.</p>
<p>O português também tem voz passiva com «ser» («A reunião foi cancelada»), mas muitas vezes prefere o «se» ou a terceira pessoa do plural: «Aqui se fala inglês», «Vende-se», «Roubaram meu celular». Em inglês, tudo isso vai na <b>voz passiva</b>.</p>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Aqui se fala inglês}}{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|Roubaram meu celular}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|A reunião foi cancelada}}
<h3>Concordância com be</h3>
<p>O verbo <i>be</i> concorda com o sujeito: singular → <b>is/was</b>; plural → <b>are/were</b>.</p>
{{ex:This was made in Brazil.|/ˈðɪs wəz ˈmeɪd ɪn brəˈzɪl/|Isto foi feito no Brasil}}{{ex:These shoes were made in Italy.|/ˈðiːz ˈʃuːz wər ˈmeɪd ɪn ˈɪtəli/|Estes sapatos foram feitos na Itália}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|O café da manhã é servido às sete}}
<h3>Quem fez: by</h3>
{{ex:It was written by Paulo Coelho.|/ɪt wəz ˈrɪtn baɪ ˈpaʊloʊ kuˈeɪljoʊ/|Foi escrito por Paulo Coelho}}
<h3>Ativa e passiva</h3>
<div class="tbl"><table><tr><th>Ativa</th><th>Passiva</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>Perguntas</h3>
<p>Na pergunta, o auxiliar <i>is/was</i> vem antes do sujeito.</p>
{{ex:Is breakfast included?|/ɪz ˈbrekfəst ɪnˈkluːdɪd/|O café da manhã está incluído?}}
<div class="tip">Erros comuns: esquecer o <i>be</i> (<b>My phone stolen</b> ✗) ou traduzir o «se» palavra por palavra (<b>Here speaks English</b> ✗). O certo: <b>My phone was stolen</b>, <b>English is spoken here</b> ✓.</div>`,
check:[["My bag ___ stolen yesterday. O que vai no espaço?",["is","was","did","has"],1,"Aconteceu ontem: \"was\" + particípio."],["This phone ___ made in Mexico. O que vai no espaço?",["was","did","has","does"],0,"A voz passiva é \"be\" + particípio."],["«A reunião foi cancelada» em inglês:",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"A forma é \"be\" + o particípio \"canceled\"."]],
practice:[
["mc","My phone ___ stolen. O que vai no espaço?","was","did","has","is steal","A voz passiva é \"be\" + particípio."],
["mc","Como se diz «Isto foi feito no México»?","This was made in Mexico.","This made in Mexico.","This was make in Mexico.","This did made in Mexico.","A forma é \"be\" + o particípio \"made\"."],
["mc","Como se diz «Aqui se fala inglês»?","English is spoken here.","Here speaks English.","English is speak here.","English speaks here.","A construção com «se» vira voz passiva: \"is\" + particípio."],
["mc","Como se diz «A reunião foi cancelada»?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","A forma é \"be\" + particípio."],
["mc","Como se diz «Estes sapatos foram feitos na Itália»?","These shoes were made in Italy.","These shoes was made in Italy.","These shoes made in Italy.","These shoes were make in Italy.","Com um sujeito no plural vai \"were\": concordância."],
["or","Roubaram minhas malas","My bags were stolen","was","Com o plural \"bags\" vai \"were\": concordância."],
["or","Aqui se fala inglês","English is spoken here","are speaks","Com \"English\" (singular) vai \"is\" + particípio: concordância."],
["or","A reunião foi cancelada","The meeting was canceled","did","A voz passiva se forma com \"be\" + particípio, e não com \"did\"."],
["fi","This was __ in Mexico.","Isto foi feito no México","made","make|making|makes","Depois de \"be\" vem o particípio."],
["fi","The room __ cleaned every day.","O quarto é limpo todos os dias","is|gets","does|has|did","Para algo habitual: \"is\" + particípio."],
["fi","It was written __ Isabel Allende.","Foi escrito por Isabel Allende","by","from|of|with","Quem fez se diz com \"by\"."],
["ty","Roubaram meu celular (use a voz passiva)","My phone was stolen|My phone got stolen|My cell phone was stolen","phone · steal — frase na voz passiva","stole","Com \"my phone\" (singular) vai \"was\" + particípio: concordância."],
["ty","O café da manhã está incluído?","Is breakfast included|Is the breakfast included","breakfast · include — pergunta com o auxiliar","Does","Na pergunta, o auxiliar \"is\" vem antes do sujeito."],
["ty","A porta estava trancada","The door was locked","door · lock — frase na voz passiva","were","Com \"the door\" (singular) vai \"was\": concordância."]]},
{ id:"reported", title:"Discurso indireto: contar o que outra pessoa disse", blurb:"She said she was tired. O tempo verbal recua, e tell sempre leva a pessoa.", deck:"Telefone e abreviações", body:`
<p>O discurso indireto serve para contar o que outra pessoa disse: «ela disse que…». Assim como em português («Estou cansada» → «Ela disse que estava cansada»), o tempo verbal <b>recua um passo para o passado</b>.</p>
<div class="tbl"><table><tr><th>Discurso direto</th><th>Discurso indireto</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Ela disse que estava cansada}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Ele disse que viria}}
<h3>say ou tell</h3>
<p>Os dois são «dizer», mas <b>tell</b> leva a pessoa logo depois (<i>told me</i>), e <b>say</b> não (<i>said</i>, ou <i>said to me</i>). É um dos erros mais comuns: <i>He said me</i> ✗.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Ele me disse que estava ocupado}}{{ex:She said there was a problem.|/ʃi ˈsed ðer wəz ə ˈprɑːbləm/|Ela disse que tinha um problema}}
<p>Repare no segundo exemplo: o «tinha» de «tinha um problema» não é <i>had</i>. Em inglês, ele precisa de sujeito (<i>there was</i>), que concorda com o que vem depois.</p>
<h3>Perguntas no discurso indireto</h3>
<p>Para perguntas de sim ou não, use <b>if</b>. Com palavra interrogativa, repita a palavra. Nos dois casos, a ordem é a de uma afirmação (sujeito + verbo), e <b>não se usa do/did</b>.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Ela perguntou se eu estava bem}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Ele perguntou onde eu morava}}
<div class="tip">Erros comuns: <b>He said me…</b> ✗ → <b>He told me…</b> ✓; <b>He asked where did I live</b> ✗ → <b>He asked where I lived</b> ✓.</div>`,
check:[["She said she ___ tired. O que vai no espaço?",["is being","was","be","will"],1,"No discurso indireto, o tempo verbal recua para o passado."],["He ___ me he would come. O que vai no espaço?",["said","say","told","tell to"],2,"Com a pessoa logo depois (\"me\") vai \"told\"."],["«Ele me perguntou onde eu morava» em inglês:",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Numa pergunta indireta, a ordem é a de uma afirmação."]],
practice:[
["mc","She said she ___ busy. O que vai no espaço?","was","is being","be","were being","No discurso indireto, o tempo verbal recua para o passado."],
["mc","He ___ me he was late. O que vai no espaço?","told","said","say","tells to","Com a pessoa logo depois se usa \"told\"."],
["mc","Como se diz «Ele disse que viria»?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" vira \"would\"."],
["mc","Como se diz «Ela me perguntou se eu estava bem»?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Perguntas de sim ou não são contadas com \"if\"."],
["mc","Como se diz «Ele me perguntou onde eu morava»?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Numa pergunta indireta, a ordem é a de uma afirmação."],
["or","Ela disse que estava cansada","She said she was tired","told were","Com \"she\" vai \"was\": concordância. Sem a pessoa depois, \"said\"."],
["or","Ele me disse que estava ocupado","He told me he was busy","said","Com a pessoa logo depois (\"me\") se usa \"told\"."],
["or","Ele disse que tinha um problema","He said there was a problem","were","Com \"a problem\" (singular) vai \"there was\": concordância."],
["fi","She __ she was tired.","Ela disse que estava cansada","said","told|asked|say","Sem a pessoa depois se usa \"said\"."],
["fi","He told __ he was busy.","Ele me disse que estava ocupado","me","I|my|to","Depois de \"told\" vem a pessoa."],
["fi","She asked __ I was okay.","Ela me perguntou se eu estava bem","if|whether","that|what|did","Perguntas de sim ou não são contadas com \"if\"."],
["ty","Ele disse que estava frio","He said it was cold|He said that it was cold","said · cold — a frase precisa do sujeito \"it\"","is","Em inglês o sujeito é obrigatório: \"it was cold\"."],
["ty","Ele me disse que estava ocupado","He told me he was busy|He told me that he was busy|He said to me he was busy|He said to me that he was busy|He said he was busy|He said that he was busy","told · me · busy — \"tell\" e a pessoa logo após o verbo","said","Com \"he\" vai \"was\" (terceira pessoa), e com a pessoa depois, \"told\"."],
["ty","Ela me perguntou onde eu morava","She asked me where I lived|She asked where I lived","asked · where · lived — com a ordem de uma afirmação","did","Numa pergunta indireta, a ordem é a de uma afirmação, sem \"did\"."]]},
];
