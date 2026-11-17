/* pt-en stage A2: lessons for Brazilian Portuguese speakers. English side shared with es-en (parity.js); verb-prep is pt-only
   (docs/profiles/pt.md §8). Contrasts follow pt.md §4 and §8; practice sets follow the verb-core standing rule (§7). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Passado contínuo: was / were + -ing", blurb:"O que estava acontecendo num momento do passado. Serve para montar o cenário de uma história.", deck:"Emoções e reações", body:`
<p>O passado contínuo (<i>past continuous</i>) conta o que <b>estava acontecendo</b> num momento do passado. Funciona quase igual a «estava + gerúndio»: troque <i>am/is/are</i> por <i>was/were</i> e acrescente a forma -ing.</p>
<p>Atenção à concordância: <i>I, he, she, it</i> → <b>was</b>; <i>you, we, they</i> → <b>were</b>. Repare que <i>you</i> leva <i>were</i>, embora «você estava» use a mesma forma de «ele estava».</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Eu estava dormindo}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|Nós estávamos vendo TV}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Estava chovendo}}
<h3>Perguntas</h3>
<p>O auxiliar <i>was/were</i> vem antes do sujeito. Aqui não se usa <i>did</i>.</p>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|O que você estava fazendo?}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|Você estava trabalhando às nove?}}
<h3>Com when: algo interrompe a ação</h3>
<p>A ação longa vai no <b>passado contínuo</b>; a curta, que interrompe, vai no <b>passado simples</b> (<i>simple past</i>). É a mesma lógica de «eu estava cozinhando quando você ligou».</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|Eu estava cozinhando quando você ligou}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|Eu estava voltando a pé para casa quando começou a chover}}
<div class="tip">O pretérito imperfeito («cozinhava») às vezes vira <i>was cooking</i>, às vezes não. Para uma ação que estava em andamento naquele momento, use <i>was/were + -ing</i>. Já <b>I cooked when you called</b> quer dizer «quando você ligou, eu fui cozinhar».</div>`,
check:[["«O que você estava fazendo às nove?» em inglês:",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"Com \"you\" vai \"were\", e depois a forma -ing."],["I was cooking ___ you called. O que vai no espaço?",["when","so","or","than"],0,"«Quando» é \"when\"."],["They ___ watching TV. O que vai no espaço?",["was","did","were","are being"],2,"Com \"they\" vai \"were\": concordância."]],
practice:[
["mc","I ___ sleeping at ten. O que vai no espaço?","was","were","did","am","Com \"I\", o passado de \"be\" é \"was\": concordância."],
["mc","Como se diz «Eu estava cozinhando quando você ligou»?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","A ação longa vai no passado contínuo; a que interrompe, no passado simples."],
["mc","«O que você estava fazendo?» em inglês:","What were you doing?","What did you doing?","What was you doing?","What were you do?","Na pergunta, o auxiliar \"were\" vem antes do sujeito, e depois vem a forma -ing."],
["mc","They ___ playing soccer. O que vai no espaço?","were","was","did","are","Com \"they\" vai \"were\": concordância."],
["mc","Como se diz «Estava chovendo»?","It was raining.","Was raining.","It were raining.","It was rain.","Em inglês o sujeito é obrigatório: \"it\" + \"was\" + -ing."],
["or","Minha irmã estava lendo um livro","My sister was reading a book","were","Com \"my sister\" (terceira pessoa do singular) vai \"was\": concordância."],
["or","As crianças estavam dormindo","The kids were sleeping","was","Com um sujeito no plural vai \"were\": concordância."],
["or","O que você estava fazendo?","What were you doing","did","Na pergunta, o auxiliar \"were\" vem antes do sujeito; não se usa \"did\"."],
["fi","I was __ dinner.","Eu estava fazendo o jantar","cooking|making","cook|cooked|cooks","Depois de \"was\" vem a forma -ing."],
["fi","What __ you doing?","O que você estava fazendo?","were","was|did|does","Com \"you\" vai \"were\": concordância."],
["fi","I was sleeping __ you called.","Eu estava dormindo quando você ligou","when","so|than|or","«Quando» é \"when\"."],
["ty","Estava chovendo","It was raining","rain — a frase precisa do sujeito \"it\"","were","Em inglês o sujeito é obrigatório: \"it\" + \"was\" + -ing."],
["ty","Ele estava trabalhando","He was working","work — com \"he\" e o passado de \"be\"","were","Com \"he\" vai \"was\", não \"were\": concordância."],
["ty","As crianças estavam brincando?","Were the kids playing|Were the children playing","kids · play — pergunta com o auxiliar na frente","was","Na pergunta, o auxiliar \"were\" vem antes do sujeito."]]},
{ id:"will", title:"Will: decisões na hora, promessas e previsões", blurb:"Se você decide na hora, will; se já tinha planejado, going to.", deck:"Bate-papo", body:`
<p>A forma é <b>will + verbo</b>, sem <i>to</i> e sem -s. Na fala quase sempre vira contração: <b>I'll, you'll, it'll</b>. A negação é <b>won't</b>.</p>
<p>O futuro do português («ajudarei») lembra o <i>will</i>, mas muitas ofertas e decisões na hora vão no presente: «Eu te ajudo», «Deixa que eu atendo». Em inglês, aí é obrigatório o <i>will</i>. E, embora o português use «vou + infinitivo» para quase todo futuro, o inglês separa: <i>will</i> para o que você decide, oferece ou promete na hora; <i>going to</i> para planos que já existiam.</p>
<h3>Decisões na hora e ofertas</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|Para mim, a massa}}{{ex:I'll get it.|/aɪl ˈget ɪt/|Deixa que eu atendo / Deixa que eu abro}}{{ex:I'll help you.|/aɪl ˈhelp ju/|Eu te ajudo}}
<h3>Promessas</h3>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Te ligo mais tarde}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|Não vou me atrasar}}
<h3>Previsões e perguntas</h3>
<p>Nas perguntas, <i>will</i> vem antes do sujeito. E, como sempre, o sujeito é obrigatório: «Vai chover» → <i>It will rain</i>.</p>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|Vai dar tudo certo}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|Acho que vai chover}}{{ex:Will you come?|/wəl ju ˈkʌm/|Você vem?}}
<h3>will ou going to</h3>
<div class="tbl"><table><tr><th></th><th>Quando</th><th>Exemplo</th></tr><tr><td class="k">will</td><td>decisão na hora, oferta, promessa</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>plano já decidido</td><td>I'm going to visit Orlando next month.</td></tr></table></div>
<div class="tip">Erros comuns: <b>I will to go</b>, <b>I'll going</b> e, para oferecer ajuda, <b>I help you</b> ✗ → <b>I'll go</b>, <b>I'll help you</b> ✓. Depois de <i>will</i>, o verbo nunca leva -s: <b>She will come</b>, e não <i>She will comes</i>.</div>`,
check:[["O telefone toca. Como se diz «Deixa que eu atendo»?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Uma decisão tomada na hora vai com \"will\"."],["I ___ be late. («Não vou me atrasar», como promessa)",["won't","willn't","don't will","not will"],0,"A negação de \"will\" é \"won't\"."],["Qual frase fala de um plano já decidido?",["I'll get the door.","I will to visit Lima.","I visit Lima will.","I'm going to visit Lima next month."],3,"Para planos já decididos se usa \"be going to\"."]],
practice:[
["mc","Como se diz «Eu te ajudo» (como oferta)?","I'll help you.","I help you.","I'll helping you.","I'll to help you.","Para oferecer ajuda, o inglês usa \"will\": «Eu te ajudo» → \"I'll help you\"."],
["mc","No restaurante, você decide na hora. Como se diz «Para mim, a massa»?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Uma decisão tomada na hora vai com \"will\"."],
["mc","Como se diz «Não vou me atrasar» (promessa)?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","\"Will not\" vira \"won't\" na contração."],
["mc","«Você vem?» em inglês:","Will you come?","Do you will come?","Will you coming?","Will come you?","Na pergunta, o auxiliar \"will\" vem antes do sujeito."],
["mc","Como se diz «Ela vem amanhã»?","She will come tomorrow.","She will comes tomorrow.","She wills come tomorrow.","She will coming tomorrow.","Depois de \"will\" o verbo não leva -s, nem na terceira pessoa."],
["or","Você me ajuda? (pedindo um favor)","Will you help me","Do","Na pergunta, o auxiliar \"will\" vem antes do sujeito."],
["or","Vai chover amanhã?","Will it rain tomorrow","rains","O auxiliar \"will\" vem antes do sujeito, e o verbo não leva o -s de terceira pessoa."],
["or","Te ligo mais tarde","I'll call you later","calling","Depois de \"will\" vem o verbo sem -ing."],
["fi","I __ call you tomorrow.","Eu te ligo amanhã","will","am|going|do","Uma promessa vai com \"will\"."],
["fi","I __ forget.","Eu não vou esquecer","won't|will not","don't|not|willn't","A negação de \"will\" é \"won't\"."],
["fi","__ you help me?","Você me ajuda?","Will|Can|Could|Would","Do|Are|Is","Para pedir um favor: \"Will you…?\" ou \"Can you…?\"."],
["ty","Vai chover amanhã","It will rain tomorrow|It's going to rain tomorrow","rain · tomorrow — a frase precisa do sujeito \"it\"","rains","Em inglês o sujeito é obrigatório: \"It will rain\", e não \"Will rain\"."],
["ty","Você vem para a festa?","Will you come to the party|Are you coming to the party|Are you going to come to the party","come · party — pergunta com o auxiliar na frente","Do","Na pergunta, o auxiliar \"will\" vem antes do sujeito."],
["ty","Eu te ajudo","I'll help you|I'll help","help · you — uma oferta com \"will\"","helping","Para oferecer ajuda, o inglês usa \"will\", e não o presente."]]},
{ id:"perfect", title:"Present perfect: experiências", blurb:"have + particípio para o que você já fez na vida. Se disser quando, use o passado simples.", deck:"Viagens (aeroporto e hotel)", body:`
<p>O <i>present perfect</i> (<b>have/has + particípio</b>) fala de experiências: o que você já fez (ou nunca fez) <b>na vida</b>, sem dizer quando.</p>
<p>Não traduza como «tenho feito». Em português, «tenho viajado muito» fala de algo que se repete até agora. Para experiências, o português usa o passado simples: «Já fui a Nova York», «Nunca comi sushi». O inglês, nesses casos, usa o <i>present perfect</i>. Uma boa pista: frases com «já» e «nunca» sem data.</p>
{{ex:I've been to New York.|/aɪv bɪn tə ˌnuː ˈjɔːrk/|Já fui a Nova York}}{{ex:She has visited Argentina twice.|/ʃi həz ˈvɪzɪtɪd ˌɑːrdʒənˈtiːnə ˈtwaɪs/|Ela já visitou a Argentina duas vezes}}
<p>Com <i>he, she, it</i>, o auxiliar é <b>has</b> (terceira pessoa); com os outros, <b>have</b>.</p>
<h3>ever e never</h3>
{{ex:Have you ever eaten sushi?|/həv ju ˈevər ˈiːtn ˈsuːʃi/|Você já comeu sushi?}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|Nunca vi isso}}
<p>Para responder, repita o auxiliar: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>Particípios frequentes</h3>
<div class="tbl"><table><tr><th>Infinitivo</th><th>Passado</th><th>Particípio</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Se disser quando, passado simples</h3>
<p>Com <i>yesterday, last year, in 2020</i> ou <i>ago</i> (um momento que já terminou), use o passado simples (<i>simple past</i>), como no português «fui».</p>
{{ex:I went to New York last year.|/aɪ ˈwent tə ˌnuː ˈjɔːrk ˈlæst ˈjɪr/|Fui a Nova York no ano passado}}
<div class="tip">Erro comum: <b>I've been to New York last year.</b> ✗ → <b>I went to New York last year.</b> ✓. No inglês americano também se ouve <i>Did you ever go to New York?</i>, e está correto.</div>`,
check:[["«Você já esteve no Japão?» em inglês:",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Para experiências: \"Have you ever\" + particípio, e \"been to\" + lugar."],["I ___ never seen that movie. O que vai no espaço?",["am","did","have","was"],2,"A forma é \"have\" + \"never\" + particípio."],["Qual frase está correta?",["I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima."],0,"Com \"last year\" (um tempo que já terminou) vai o passado simples."]],
practice:[
["mc","Como se diz «Já estive no Japão»?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","A forma é \"have\" + o particípio \"been\"."],
["mc","Qual é o particípio de \"see\"?","seen","saw","seed","seeing","see – saw – seen."],
["mc","«Você já comeu sushi?» em inglês:","Have you ever eaten sushi?","Did you ever eaten sushi?","Have you ever ate sushi?","Do you have eaten sushi?","Para experiências: \"Have you ever\" + particípio (\"eaten\")."],
["mc","Como se diz «Nunca vi isso»?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","A forma é \"have\" + \"never\" + particípio."],
["mc","Com «no ano passado», qual frase está correta?","I went to Lima last year.","I've been to Lima last year.","I have go to Lima last year.","I've went to Lima last year.","Se você diz quando, vai o passado simples."],
["or","Você já esteve em Cuba?","Have you ever been to Cuba","Did","Na pergunta, o auxiliar \"have\" vem antes do sujeito."],
["or","Ela já visitou o Peru duas vezes","She has visited Peru twice","have","Com \"she\", o auxiliar é \"has\": terceira pessoa."],
["or","Eu nunca vi neve","I've never seen snow","the","Quando se fala de algo em geral, o inglês não usa artigo: \"snow\"."],
["fi","Have you ever __ to Miami?","Você já esteve em Miami?","been","be|went|go","Depois de \"have\" vem o particípio \"been\"."],
["fi","I've __ eaten that.","Eu nunca comi isso","never","ever|no|not never","«Nunca» é \"never\"."],
["fi","My brother __ been to Chile.","Meu irmão já esteve no Chile","has","have|is|did","Com \"my brother\", o auxiliar é \"has\" (terceira pessoa)."],
["ty","Você já esteve no Japão?","Have you ever been to Japan|Have you been to Japan|Did you ever go to Japan","ever · been · Japan — pergunta com o auxiliar na frente","went","Na pergunta, o auxiliar \"have\" vem antes do sujeito."],
["ty","Minha irmã nunca provou sushi","My sister has never tried sushi|My sister has never eaten sushi","never · tried · sushi — o sujeito está na terceira pessoa","have","Com \"my sister\" (terceira pessoa), o auxiliar é \"has\"."],
["ty","Eu fui ao México no ano passado","I went to Mexico last year","went · Mexico · last year — com um tempo que já terminou","have been","Com \"last year\" (um tempo que já terminou) vai o passado simples, e não o present perfect."]]},
{ id:"modals", title:"have to, must, should, might: obrigação, conselho e possibilidade", blurb:"Ter que, deveria, pode ser que. E a grande armadilha: mustn't não é don't have to.", deck:"Saúde e emergências", body:`
<p>Quatro formas para falar de obrigação, conselho e possibilidade. Depois de <i>must, should</i> e <i>might</i> vem o <b>verbo sem to</b>: <i>You should go</i>, e não <i>You should to go</i>. Os verbos modais (<i>must, should, might</i>) nunca levam -s: <i>She should rest</i>.</p>
<h3>have to: ter que</h3>
<p>É a forma mais comum na conversa. Com <i>he, she, it</i> fica <b>has to</b> (terceira pessoa). Perguntas e negativas levam o auxiliar <i>do/does</i>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|Eu tenho que trabalhar amanhã}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|Ela tem que ir agora}}{{ex:Do I have to pay?|/də aɪ ˈhæf tə ˈpeɪ/|Eu tenho que pagar?}}
<h3>mustn't e don't have to não são a mesma coisa</h3>
<p>No afirmativo, <i>must</i> e <i>have to</i> parecem iguais («ter que», «dever»). No negativo, mudam completamente, como «não deve» e «não precisa»:</p>
<div class="tbl"><table><tr><th>Inglês</th><th>Significado</th></tr><tr><td class="k">You don't have to come.</td><td>Você não precisa vir (não é necessário)</td></tr><tr><td class="k">You mustn't smoke here.</td><td>Você não deve fumar aqui (é proibido)</td></tr></table></div>
<h3>should: deveria</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|Você deveria ir ao médico}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|Você não deveria se preocupar}}{{ex:Should I call him?|/ʃəd aɪ ˈkɔːl hɪm/|Será que eu ligo para ele?}}
<h3>might: pode ser que</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|Pode ser que chova}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|Pode ser que eu me atrase}}
<div class="tip">Erros comuns: <b>You should to go</b>, <b>It might rains</b>, <b>She have to work</b> ✗ → <b>You should go</b>, <b>It might rain</b>, <b>She has to work</b> ✓.</div>`,
check:[["«Você não precisa vir» (não é necessário) em inglês:",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"«Não precisa» é \"don't have to\"."],["Para dar um conselho: You ___ see a doctor.",["might","have","should","must to"],2,"Um conselho vai com \"should\" + verbo."],["She ___ to work today. O que vai no espaço?",["have","must","should","has"],3,"Com \"she\" vai \"has to\": terceira pessoa."]],
practice:[
["mc","Como se diz «Eu tenho que trabalhar amanhã»?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","A forma é \"have to\" + verbo."],
["mc","Como se diz «Você não precisa vir» (não é necessário)?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","«Não precisa» é \"don't have to\"."],
["mc","Como se diz «Você deveria ir ao médico»?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","Depois de \"should\" vem o verbo sem \"to\"."],
["mc","Como se diz «Pode ser que chova»?","It might rain.","It might rains.","It might to rain.","It mights rain.","Depois de \"might\" vem o verbo sem -s e sem \"to\"."],
["mc","Como se diz «Você não deve fumar aqui» (é proibido)?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","A proibição é \"must not\" (\"mustn't\")."],
["or","Ela tem que trabalhar hoje","She has to work today","have","Com \"she\" vai \"has to\": terceira pessoa."],
["or","Eu tenho que pagar?","Do I have to pay","Am","A pergunta com \"have to\" precisa do auxiliar \"do\"."],
["or","Você deveria ver um médico","You should see a doctor","to","Depois de \"should\" vem o verbo sem \"to\"."],
["fi","She __ to study tonight.","Ela tem que estudar hoje à noite","has","have|must|should","Com \"she\" vai \"has to\": terceira pessoa."],
["fi","You __ have to pay.","Você não precisa pagar","don't|do not","must not|not|aren't","«Não precisa» é \"don't have to\", com o auxiliar \"do\"."],
["fi","It __ rain tomorrow.","Pode ser que chova amanhã","might|may|could","must to|has to|should to","Para uma possibilidade se usa \"might\"."],
["ty","Ele tem que trabalhar amanhã?","Does he have to work tomorrow","have to · work · tomorrow — pergunta com o auxiliar","Has","Com \"he\", a pergunta leva o auxiliar \"does\" e depois \"have to\", sem -s."],
["ty","Você não precisa vir (use \"have to\")","You don't have to come","have to · come — no sentido de «não é necessário»","mustn't","«Não precisa» é \"don't have to\", com o auxiliar \"do\"; \"mustn't\" é uma proibição."],
["ty","Você deveria ir ao médico","You should see a doctor|You should go to a doctor|You should go to the doctor","should · see · doctor — na frase, o verbo vem sem \"to\"","to","Depois de \"should\" vem o verbo sem \"to\"."]]},
{ id:"to-ing", title:"to ou -ing depois de um verbo: want to, enjoy -ing", blurb:"Want pede to; enjoy pede -ing. Depende do verbo, e depois de preposição é sempre -ing.", deck:"Bate-papo", body:`
<p>Em português, depois de um verbo vem o infinitivo: «quero ir», «gosto de cozinhar». Em inglês, depende do primeiro verbo: alguns pedem <b>to + verbo</b> e outros a <b>forma -ing (gerúndio)</b>. Por isso <i>I enjoy to cook</i> é um dos erros mais comuns.</p>
<div class="tbl"><table><tr><th>Com to</th><th>Com -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + verbo</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Eu quero ir para casa}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|Eu preciso estudar}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|Eu gostaria de pedir}}{{ex:She decided to learn English.|/ʃi dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|Ela decidiu aprender inglês}}
<h3>Forma -ing</h3>
<p>Estes verbos pedem -ing por regra, não pelo sentido: <i>enjoy</i> (gostar muito de), <i>finish</i> (terminar de), <i>mind</i> (se incomodar com).</p>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Eu gosto muito de cozinhar}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|Eu terminei de trabalhar}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|Não me incomodo de esperar}}{{ex:Do you mind helping me?|/də ju ˈmaɪnd ˈhelpɪŋ mi/|Você se incomoda de me ajudar?}}
<h3>Depois de preposição, sempre -ing</h3>
<p>Onde o português põe infinitivo depois de uma preposição («antes de sair», «interessado em aprender»), o inglês usa a forma -ing.</p>
{{ex:before leaving|/bɪfɔːr ˈliːvɪŋ/|antes de sair}}{{ex:I'm interested in learning English.|/aɪm ˈɪntrəstɪd ɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ/|Tenho interesse em aprender inglês}}{{ex:I'm looking forward to seeing you.|/aɪm ˈlʊkɪŋ ˈfɔːrwərd tə ˈsiːɪŋ ju/|Não vejo a hora de te ver}}
<h3>want + pessoa + to</h3>
<p>«Quero que você venha» não é <i>I want that you come</i>, e sim <b>I want you to come</b>.</p>
{{ex:I want you to come.|/aɪ ˈwɑːnt ju tə ˈkʌm/|Quero que você venha}}
<p><i>like, love</i> e <i>start</i> aceitam as duas formas.</p>
<div class="tip">Erros comuns: <b>I want go</b>, <b>I enjoy to cook</b>, <b>Do you mind to help me?</b>, <b>before to leave</b> ✗ → <b>I want to go</b>, <b>I enjoy cooking</b>, <b>Do you mind helping me?</b>, <b>before leaving</b> ✓. E não esqueça o -s: <b>She enjoys cooking</b>.</div>`,
check:[["I want ___ home. O que vai no espaço?",["go","going","to go","to going"],2,"Depois de \"want\" vem \"to\" + verbo."],["I enjoy ___ movies. O que vai no espaço?",["watching","to watch","watch","to watching"],0,"Depois de \"enjoy\" vem a forma -ing."],["«Eu gostaria de pedir» em inglês:",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Depois de \"would like\" vem \"to\" + verbo."]],
practice:[
["mc","I need ___ now. O que vai no espaço?","to go","going","go","to going","Depois de \"need\" vem \"to\" + verbo."],
["mc","I enjoy ___. O que vai no espaço?","cooking","to cook","cook","to cooking","Depois de \"enjoy\" vem a forma -ing: \"I enjoy to cook\" está errado."],
["mc","Como se diz «Eu gostaria de pedir»?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Depois de \"would like\" vem \"to\" + verbo."],
["mc","Como se diz «Não vejo a hora de te ver»?","I'm looking forward to seeing you.","I'm looking forward to see you.","I'm looking forward seeing you.","I'm looking forward for see you.","Aqui \"to\" é uma preposição, então vem a forma -ing."],
["mc","Como se diz «Quero que você venha»?","I want you to come.","I want that you come.","I want you come.","I want that you to come.","«Querer que alguém faça algo» é \"want\" + pessoa + \"to\"."],
["or","Ela gosta muito de cozinhar","She enjoys cooking","enjoy","Com \"she\", \"enjoys\" leva -s (terceira pessoa); depois vem a forma -ing."],
["or","Você quer vir?","Do you want to come","Are","A pergunta no presente precisa do auxiliar \"do\"."],
["or","Tenho interesse em aprender inglês","I'm interested in learning English","learn","Depois de uma preposição (\"in\") vem a forma -ing."],
["fi","I want __ a coffee.","Eu quero tomar um café","to have|to drink|to get","have|having|drinking","Depois de \"want\" vem \"to\" + verbo."],
["fi","She enjoys __.","Ela gosta muito de nadar","swimming","to swim|swim|swims","\"Enjoy\" pede a forma -ing."],
["fi","I decided __ English.","Eu decidi estudar inglês","to study|to learn","study|studying|studied","Depois de \"decide\" vem \"to\" + verbo."],
["ty","Você gosta de cozinhar?","Do you like cooking|Do you like to cook","like · cook — pergunta com o auxiliar","Are","A pergunta no presente precisa do auxiliar \"do\"; \"like\" aceita -ing ou \"to\"."],
["ty","Ela gosta muito de ler (use \"enjoy\")","She enjoys reading","enjoy · read — com -s e com a forma -ing","enjoy","Com \"she\", \"enjoys\" leva -s (terceira pessoa), e depois vem a forma -ing."],
["ty","Quero que você venha","I want you to come","want · you · come — a frase vai sem \"that\"","that","«Quero que você venha» é \"I want you to come\", sem \"that\"."]]},
{ id:"articles-2", title:"Artigos 2: o geral vai sem the", blurb:"Life is hard, I love dogs: em inglês, o que é geral vai sem artigo. E uma revisão de quando o the aparece.", deck:"Viagens (aeroporto e hotel)", body:`
<p>Esta é a grande lição de artigos para brasileiros. Em português, o que é geral costuma levar artigo: «<b>A</b> vida é difícil», «<b>O</b> café é caro», «<b>Os</b> cachorros são fofos». Em inglês, o geral vai <b>sem artigo</b>.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|A vida é difícil}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Eu adoro cachorros}}{{ex:Coffee is expensive.|/ˈkɔːfi ɪz ɪkˈspensɪv/|O café é caro}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|Os cachorros são fofos}}
<p>O mesmo vale para substantivos abstratos (<i>love, music, time</i>) e plurais em geral (<i>people, cars</i>). E lembre a concordância: um incontável ou um singular vai com <i>is</i> (<i>Coffee is…</i>); um plural, com <i>are</i> (<i>Dogs are…</i>).</p>
<h3>Geral ou específico</h3>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|Eu gosto de cachorros (em geral)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|Os cachorros deste parque são fofos (esses cachorros)}}
<div class="tip"><b>I like the dogs</b> quer dizer «gosto desses cachorros». Se você fala em geral, diga <b>I like dogs</b>.</div>
<h3>Países: quase sempre sem artigo</h3>
<p>Em português se diz «o Brasil», «a Argentina», «o Japão». Em inglês, a maioria dos países vai sem artigo: <i>I live in Brazil</i>, nunca <i>the Brazil</i>. A exceção são os nomes no plural ou de união, como <i>the United States</i>, que leva <i>the</i> como «os Estados Unidos».</p>
{{ex:I live in Brazil.|/aɪ ˈlɪv ɪn brəˈzɪl/|Eu moro no Brasil}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|Ela é dos Estados Unidos}}
<h3>Quando vai the</h3>
<div class="tbl"><table><tr><th>Caso</th><th>Exemplo</th></tr><tr><td>Algo único</td><td class="k">the sun, the internet</td></tr><tr><td>Instrumentos musicais</td><td class="k">play the piano</td></tr><tr><td>Rios e oceanos</td><td class="k">the Amazon, the Pacific</td></tr><tr><td>Países com nome no plural ou de união</td><td class="k">the United States, the Philippines</td></tr></table></div>
<p>Com instrumentos, o inglês costuma usar <i>the</i>, mesmo quando em português se diz «toco piano».</p>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|Eu toco piano}}
<h3>Sem artigo, como em português</h3>
<div class="tbl"><table><tr><th>Caso</th><th>Exemplo</th></tr><tr><td>Esportes</td><td class="k">play soccer (jogar futebol)</td></tr><tr><td>Refeições</td><td class="k">have breakfast (tomar café da manhã)</td></tr><tr><td>Idiomas</td><td class="k">speak English (falar inglês)</td></tr></table></div>
{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|Eu jogo futebol}}`,
check:[["I play ___ soccer. O que vai no espaço?",["a","the","an","(sem artigo)"],3,"Esportes vão sem artigo, como em «jogar futebol»: \"play soccer\"."],["She's from ___ United States. O que vai no espaço?",["the","a","an","(sem artigo)"],0,"\"United States\" leva \"the\", como «os Estados Unidos»."],["«Os cachorros são fofos» (em geral) em inglês:",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"O geral vai sem artigo e no plural."]],
practice:[
["mc","Como se diz «A vida é difícil»?","Life is hard.","The life is hard.","A life is hard.","Life are hard.","Em inglês, o que é geral vai sem artigo."],
["mc","Como se diz «Eu adoro música»?","I love music.","I love the music.","I love a music.","I love musics.","«Música» em geral vai sem artigo e sem -s."],
["mc","Como se diz «Eu jogo futebol»?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Esportes vão sem artigo."],
["mc","Como se diz «Os gatos são fofos» (em geral)?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","O geral vai sem artigo e no plural."],
["mc","She's from ___ United States. O que vai no espaço?","the","a","an","some","\"United States\" leva \"the\"."],
["or","Os cachorros são fofos","Dogs are cute","is The","O geral vai sem artigo, e com o plural \"dogs\" vai \"are\": concordância."],
["or","O café é caro","Coffee is expensive","are The","O geral vai sem artigo, e \"coffee\" (incontável) vai com \"is\": concordância."],
["or","Eu toco piano","I play the piano","a","Com instrumentos se usa \"the\", mesmo que em português se diga «toco piano»."],
["fi","I speak __.","Eu falo inglês","English","the English|an English|a English","Idiomas vão sem artigo."],
["fi","The sun rises in __ east.","O sol nasce no leste","the","a|an|some","Os pontos cardeais levam \"the\"."],
["fi","I love __.","Eu adoro música","music","the musics|a music|musics","«Música» em geral vai sem artigo, e sem -s porque é incontável."],
["ty","A vida é difícil","Life is hard|Life is difficult","life · hard — frase sem artigo","The","O geral vai sem artigo, e \"life\" vai com \"is\": concordância."],
["ty","Ela toca violão","She plays the guitar|She plays guitar","play · guitar — com o sujeito \"she\" (ela)","play","Com \"she\", \"plays\" leva -s (terceira pessoa); com instrumentos vai \"the\"."],
["ty","Meu irmão adora música","My brother loves music","brother · love · music — frase sem artigo","the","Com \"my brother\" (terceira pessoa), o verbo leva -s: \"loves\". Música em geral vai sem artigo."]]},
{ id:"first-conditional", title:"Primeiro condicional: if + presente, will", blurb:"«Se chover, eu fico em casa.» O «se chover» do português vira presente em inglês: if it rains, nunca will.", deck:"Trabalho e e-mail", body:`
<p>O primeiro condicional fala de coisas que podem acontecer de verdade. A forma é <b>if + presente, will + verbo</b>.</p>
<p>Uma boa notícia para brasileiros: o português usa aqui o futuro do subjuntivo («se chover», «se você puder»), e o inglês usa simplesmente o <b>presente</b>: <i>if it rains</i>, <i>if you can</i>. A ideia de futuro fica só na outra parte da frase. Por isso, depois de <i>if</i> nunca vem <i>will</i>.</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|Se chover, eu fico em casa}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|Se você não se apressar, vai perder o ônibus}}
<p>Atenção à terceira pessoa: depois de <i>if</i>, o presente continua levando -s (<i>If it rains</i>, <i>If she calls</i>), e a negação usa o auxiliar <i>don't/doesn't</i>.</p>
<h3>A ordem pode mudar</h3>
<p>Se o <i>if</i> vier na segunda parte, não precisa de vírgula.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|Eu te ajudo se tiver tempo}}
<h3>Com imperativo</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|Se você se atrasar, me liga}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|Se precisar de ajuda, me avisa}}
<h3>when: quando é certo</h3>
<p>Se você sabe que vai acontecer, use <i>when</i> em vez de <i>if</i>. A regra é a mesma: «quando eu chegar» (futuro do subjuntivo) vira presente, <i>when I get</i>, sem <i>will</i>.</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|Quando eu chegar em casa, te ligo}}
<div class="tip">Erro comum: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓. E não esqueça o -s: <b>If she calls</b>, e não <i>If she call</i>.</div>`,
check:[["If it ___ tomorrow, I'll stay home. O que vai no espaço?",["will rain","rains","rained","raining"],1,"Depois de \"if\" vem o presente: «se chover» → \"if it rains\"."],["If you study, you ___ pass. O que vai no espaço?",["pass will","passing","will pass","passed"],2,"O resultado vai com \"will\" + verbo."],["Qual frase está correta?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"Depois de \"if\", presente; no resultado, \"will\"."]],
practice:[
["mc","If it ___, I'll stay home. O que vai no espaço?","rains","will rain","rained","is rain","Depois de \"if\" vem o presente com -s: \"it rains\"."],
["mc","If you're late, ___ me. O que vai no espaço?","call","will calling","calls","to call","O imperativo começa com o verbo sozinho."],
["mc","Como se diz «Eu te ajudo se tiver tempo»?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Depois de \"if\" não vem \"will\"."],
["mc","Como se diz «Se você não se apressar, vai perder o ônibus»?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","Depois de \"if\" vem o presente na forma negativa: \"don't\"."],
["mc","Como se diz «Quando eu chegar em casa, te ligo»?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","Depois de \"when\" também vem o presente."],
["or","Se chover, eu fico em casa","If it rains I'll stay home","rain will","Depois de \"if\" vem o presente, e com \"it\" o verbo leva -s: terceira pessoa."],
["or","Se ela ligar, me avisa","If she calls let me know","call","Com \"she\", \"calls\" leva -s (terceira pessoa), também depois de \"if\"."],
["or","Se você tiver tempo, me liga","If you have time call me","will","Depois de \"if\" não vem \"will\"."],
["fi","If it __ tomorrow, we'll cancel.","Se chover amanhã, a gente cancela","rains","will rain|rained|raining","Depois de \"if\" vem o presente; com \"it\", \"rains\" (terceira pessoa)."],
["fi","If you study, you __ pass.","Se você estudar, vai passar","will|can|might","are|did|passing","O resultado vai com \"will\" + verbo."],
["fi","__ you need help, call me.","Se precisar de ajuda, me liga","If|When","So|But|Because","«Se» é \"if\"."],
["ty","Se chover, eu pego um táxi","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","rain · take · taxi — a frase precisa do sujeito \"it\"","will rain","Depois de \"if\" vem o presente, e \"it rains\" leva o -s de terceira pessoa."],
["ty","Se ela não vier, eu te ligo","If she doesn't come I'll call you|I'll call you if she doesn't come","come · call — negação com o auxiliar","don't","Com \"she\", a negação usa o auxiliar \"doesn't\"."],
["ty","Eu te ajudo se tiver tempo","I'll help you if I have time|I'll help if I have time|If I have time I'll help you|If I have time I'll help","help · if · time — depois de \"if\" não vai \"will\"","will","Depois de \"if\" não vem \"will\"."]]},
{ id:"relative", title:"who, that, which: orações relativas", blurb:"Em português tudo é «que»; em inglês, who para pessoas e which ou that para coisas.", deck:"Compras e pagamentos", body:`
<p>O português usa <b>que</b> para tudo: «o amigo <b>que</b> mora aqui», «o livro <b>que</b> eu comprei». Em inglês, o pronome relativo depende do que você descreve:</p>
<div class="tbl"><table><tr><th>Para</th><th>Pronome</th><th>Exemplo</th></tr><tr><td>pessoas</td><td class="k">who (ou that)</td><td>the man who lives next door</td></tr><tr><td>coisas</td><td class="k">which (ou that)</td><td>the phone that I want</td></tr><tr><td>lugares</td><td class="k">where</td><td>the cafe where we met</td></tr></table></div>
<h3>Pessoas: who</h3>
{{ex:I have a friend who speaks Japanese.|/aɪ ˈhæv ə ˈfrend hu ˈspiːks ˌdʒæpəˈniːz/|Tenho uma amiga que fala japonês}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|o homem que mora ao lado}}
<p>Repare na concordância: <i>the man who <b>lives</b></i>. O verbo concorda com a pessoa de quem você fala; aqui, terceira pessoa com -s.</p>
<h3>Coisas: which ou that</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|o livro que eu comprei}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|Este é o celular que eu quero}}{{ex:the bus which goes downtown|/ðə ˈbʌs wɪtʃ ˈgoʊz ˌdaʊnˈtaʊn/|o ônibus que vai para o centro}}
<h3>Em inglês dá para omitir o relativo</h3>
<p>Em português, o «que» nunca some. Em inglês, se depois vem um sujeito + verbo (<i>we saw</i>), você pode tirar o <i>that</i>, e na conversa quase sempre se tira.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|O filme que nós vimos foi ótimo}}
<p>Mas, se o relativo é o sujeito (<i>who lives</i>), não dá para tirar: <i>the man lives next door</i> não funciona como «o homem que mora ao lado».</p>
<h3>Lugares: where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|o café onde nos conhecemos}}
<div class="tip">Não use <i>what</i> como «que»: <b>the book what I bought</b> ✗ → <b>the book (that) I bought</b> ✓.</div>`,
check:[["I have a friend ___ lives in Bogota. O que vai no espaço?",["which","who","what","he"],1,"Para pessoas se usa \"who\"."],["«o livro que eu comprei» em inglês:",["the book who I bought","the book what I bought","the book that I bought","the book that I bought it"],2,"Para coisas: \"that\" ou \"which\"; nunca \"what\"."],["Qual frase está correta?",["The man which lives next door is kind.","The man what lives next door is kind.","The man lives next door is kind.","The man who lives next door is kind."],3,"Para pessoas, \"who\"; e, como ele é o sujeito, não pode ser omitido."]],
practice:[
["mc","I have a friend ___ speaks English. O que vai no espaço?","who","which","what","she","Para pessoas se usa \"who\"."],
["mc","Como se diz «o livro que eu comprei»?","the book that I bought","the book who I bought","the book what I bought","the book that I bought it","Para coisas: \"that\" ou \"which\"; nunca \"what\"."],
["mc","Como se diz «o homem que mora ao lado»?","the man who lives next door","the man who live next door","the man which lives next door","the man what lives next door","Pessoa → \"who\", e \"lives\" concorda com \"the man\" (terceira pessoa)."],
["mc","This is the phone ___ I want. O que vai no espaço?","that","who","what","it","Para coisas se usa \"that\"."],
["mc","Como se diz «o filme que nós vimos» (sem relativo)?","the movie we saw","the movie what we saw","the movie who we saw","the movie we saw it","Se depois vem sujeito + verbo, você pode omitir o \"that\"."],
["or","Tenho uma amiga que cozinha","I have a friend who cooks","cook","Com \"a friend\" (terceira pessoa), \"cooks\" leva -s."],
["or","Ele é o homem que mora aqui","He's the man who lives here","live","O verbo concorda com \"the man\": terceira pessoa, \"lives\"."],
["or","Este é o livro que eu comprei","This is the book I bought","what","Não use \"what\" como «que»; aqui dá para omitir o relativo."],
["fi","the man __ lives here","o homem que mora aqui","who|that","what|he|which","Para pessoas: \"who\" (ou \"that\")."],
["fi","the book __ I read","o livro que eu li","that|which","who|what|it","Para coisas: \"that\" ou \"which\"."],
["fi","the cafe __ we met","o café onde nos conhecemos","where","who|what|it","Para lugares se usa \"where\"."],
["ty","Ela tem uma amiga que fala japonês","She has a friend who speaks Japanese|She has a friend that speaks Japanese","friend · who · speak Japanese — frase com a terceira pessoa","have","Com \"she\" vai \"has\", e \"speaks\" concorda com \"a friend\": terceira pessoa."],
["ty","O filme que nós vimos foi ótimo","The movie we saw was great|The movie that we saw was great|The movie we saw was amazing|The movie that we saw was amazing","movie · we saw · great — o relativo é opcional","were","Você pode omitir o \"that\", e com \"the movie\" (singular) vai \"was\": concordância."],
["ty","Este é o celular que eu quero","This is the phone I want|This is the phone that I want|This is the phone which I want","phone · I want — o relativo é opcional","what","Você pode omitir o \"that\": \"the phone I want\"."]]},
{ id:"make-do", title:"make ou do, say ou tell", blurb:"«Fazer» pode ser make ou do, e «dizer», say ou tell. Aprenda as combinações mais comuns.", deck:"Make e do", body:`
<p>Em português, «fazer» serve para quase tudo. Em inglês há dois verbos: <b>make</b> (criar ou produzir algo) e <b>do</b> (realizar uma tarefa ou uma atividade). A regra ajuda, mas o mais útil é decorar as combinações fixas.</p>
<div class="tbl"><table><tr><th>make</th><th>do</th></tr><tr><td class="k">a mistake, a decision, friends, dinner, money, a plan</td><td class="k">homework, the dishes, business, exercise, a favor, your best</td></tr></table></div>
<h3>make: criar ou produzir</h3>
{{ex:I made a mistake.|/aɪ ˈmeɪd ə mɪˈsteɪk/|Eu cometi um erro}}{{ex:We need to make a decision.|/wi ˈniːd tə ˈmeɪk ə dɪˈsɪʒn/|Precisamos tomar uma decisão}}{{ex:She makes friends easily.|/ʃi ˈmeɪks ˈfrendz ˈiːzəli/|Ela faz amigos com facilidade}}{{ex:I'll make dinner.|/aɪl ˈmeɪk ˈdɪnər/|Deixa que eu faço o jantar}}
<h3>do: tarefas e atividades</h3>
{{ex:I do my homework after school.|/aɪ ˈduː maɪ ˈhoʊmwɜːrk æftər ˈskuːl/|Eu faço a lição de casa depois da aula}}{{ex:He does the dishes every day.|/hi ˈdʌz ðə ˈdɪʃɪz ˈevri ˈdeɪ/|Ele lava a louça todos os dias}}{{ex:We do business in Brazil.|/wi ˈduː ˈbɪznəs ɪn brəˈzɪl/|Nós fazemos negócios no Brasil}}{{ex:Can you do me a favor?|/kən ju ˈduː mi ə ˈfeɪvər/|Você me faz um favor?}}
<p>Atenção: <i>do</i> também é o auxiliar das perguntas, então às vezes aparece duas vezes. Com <i>he, she, it</i>, o auxiliar é <b>does</b> (terceira pessoa) e o verbo principal fica <i>do</i>.</p>
{{ex:What does she do?|/ˈwʌt dəz ʃi ˈduː/|O que ela faz? (no trabalho)}}
<h3>Nem make nem do: ask a question</h3>
<p>«Fazer uma pergunta» não usa nenhum dos dois: é <b>ask a question</b>. <i>Make a question</i> é um erro muito comum entre brasileiros.</p>
{{ex:Can I ask a question?|/kən aɪ ˈæsk ə ˈkwestʃən/|Posso fazer uma pergunta?}}
<h3>say ou tell</h3>
<p>«Dizer» também se divide em dois. <b>tell</b> leva a pessoa logo depois (<i>tell me</i>); <b>say</b> não leva, ou leva com <i>to</i> (<i>say to me</i>).</p>
{{ex:She said hello.|/ʃi ˈsed həˈloʊ/|Ela disse oi}}{{ex:He told me the truth.|/hi ˈtoʊld mi ðə ˈtruːθ/|Ele me disse a verdade}}{{ex:Tell me your name.|/ˈtel mi jʊr ˈneɪm/|Me diga seu nome}}{{ex:What did he say?|/ˈwʌt dɪd hi ˈseɪ/|O que ele disse?}}
<div class="tip">Erros comuns: <b>do a mistake</b>, <b>make homework</b>, <b>make a question</b>, <b>He said me</b> ✗ → <b>make a mistake</b>, <b>do homework</b>, <b>ask a question</b>, <b>He told me</b> ✓.</div>`,
check:[["«Eu cometi um erro» em inglês:",["I did a mistake.","I made a mistake.","I had a mistake.","I committed a mistake."],1,"«Cometer um erro» é \"make a mistake\"."],["«Ele me disse a verdade» em inglês:",["He told me the truth.","He said me the truth.","He told to me the truth.","He say me the truth."],0,"Com a pessoa logo depois (\"me\") se usa \"tell\": \"told me\"."],["He ___ the dishes every night. O que vai no espaço?",["makes","make","does","do"],2,"Tarefas de casa vão com \"do\", e com \"he\" é \"does\" (terceira pessoa)."]],
practice:[
["mc","Como se diz «tomar uma decisão»?","make a decision","do a decision","get a decision","say a decision","«Tomar uma decisão» é \"make a decision\"."],
["mc","Como se diz «fazer a lição de casa»?","do homework","make homework","do homeworks","make a homework","Tarefas vão com \"do\", e \"homework\" é incontável."],
["mc","Como se diz «fazer amigos»?","make friends","do friends","make a friends","do the friends","Criar uma amizade é \"make friends\"."],
["mc","Como se diz «Ela me disse o nome dela»?","She told me her name.","She said me her name.","She told to me her name.","She say me her name.","Com a pessoa logo depois (\"me\") se usa \"told\"."],
["mc","«O que ela faz?» (profissão) em inglês:","What does she do?","What does she does?","What she does?","What do she do?","A pergunta leva o auxiliar \"does\" (terceira pessoa) e o verbo principal \"do\"."],
["or","Ela lava a louça","She does the dishes","do makes","Tarefas de casa vão com \"do\"; com \"she\" é \"does\" (terceira pessoa)."],
["or","O que ele disse?","What did he say","said","Na pergunta no passado vem o auxiliar \"did\", e o verbo volta para \"say\"."],
["or","Ele me disse a verdade","He told me the truth","said","Com a pessoa logo depois (\"me\") se usa \"tell\"."],
["fi","I __ a mistake.","Eu cometi um erro","made","did|do|said","«Cometer um erro» é \"make a mistake\"."],
["fi","Can you __ me a favor?","Você me faz um favor?","do","make|tell|say","Favor vai com \"do\"."],
["fi","Please __ me your name.","Por favor, me diga seu nome","tell","say|make|do","Com a pessoa logo depois (\"me\") se usa \"tell\"."],
["ty","Ele faz a lição de casa todas as noites","He does his homework every night|He does homework every night|He does his homework every evening","homework · every night — o sujeito está na terceira pessoa","makes","Tarefas vão com \"do\", e com \"he\" é \"does\" (terceira pessoa)."],
["ty","Você tomou uma decisão?","Did you make a decision|Have you made a decision","make · decision — pergunta com o auxiliar","do","Na pergunta no passado, o auxiliar \"did\" vem antes do sujeito, e «decisão» vai com \"make\"."],
["ty","Ela me disse o nome dela","She told me her name|She said her name","told · name — \"tell\" e a pessoa logo após o verbo","said","Com a pessoa logo depois (\"me\") se usa \"tell\"."]]},
{ id:"verb-prep", title:"Verbos e adjetivos com preposição: depend on, good at, married to", blurb:"Depender de é depend on, casado com é married to. E esperar e escutar pedem preposição em inglês.", deck:"Phrasal verbs", body:`
<p>Muitos verbos e adjetivos vêm sempre com a mesma preposição. O problema é que ela quase nunca é a tradução direta da preposição do português: «depender <b>de</b>» é <i>depend <b>on</b></i>, «casado <b>com</b>» é <i>married <b>to</b></i>. As preposições são a maior fonte de erros de brasileiros que escrevem em inglês, então vale decorar cada combinação como um bloco.</p>
<h3>Verbos com preposição</h3>
<div class="tbl"><table><tr><th>Inglês</th><th>Português</th></tr><tr><td class="k">depend on</td><td>depender de</td></tr><tr><td class="k">think about</td><td>pensar em</td></tr><tr><td class="k">look at</td><td>olhar para</td></tr><tr><td class="k">talk to / about</td><td>falar com / de</td></tr><tr><td class="k">arrive at / in</td><td>chegar a, chegar em</td></tr></table></div>
{{ex:She depends on her parents.|/ʃi dɪˈpendz ɑːn hər ˈperənts/|Ela depende dos pais}}{{ex:I'm thinking about you.|/aɪm ˈθɪŋkɪŋ əbaʊt ju/|Estou pensando em você}}{{ex:Look at this!|/ˈlʊk ət ˈðɪs/|Olha isso!}}{{ex:Can I talk to you?|/kən aɪ ˈtɔːk tə ju/|Posso falar com você?}}
<p><i>arrive</i> nunca vai com <i>to</i>: use <b>at</b> para um lugar específico (<i>at the airport</i>) e <b>in</b> para cidades e países (<i>in Rio</i>).</p>
{{ex:We arrived at the airport.|/wi əˈraɪvd ət ði ˈerpɔːrt/|Chegamos ao aeroporto}}
<h3>Sem preposição em português, com preposição em inglês</h3>
<p>Aqui está a maior armadilha: em português você espera alguém, escuta música e paga o almoço sem preposição. Em inglês, esses verbos pedem uma. Atenção a <i>pay</i>: <i>pay for</i> vem antes do que você compra (<i>pay for lunch</i>); a conta, o valor ou a pessoa vão sem preposição (<i>pay the bill</i>, <i>pay $20</i>, <i>pay the waiter</i>).</p>
<div class="tbl"><table><tr><th>Inglês</th><th>Português</th></tr><tr><td class="k">wait for</td><td>esperar (alguém ou algo)</td></tr><tr><td class="k">listen to</td><td>escutar, ouvir</td></tr><tr><td class="k">ask for</td><td>pedir (algo)</td></tr><tr><td class="k">pay for</td><td>pagar (algo)</td></tr></table></div>
{{ex:I'm waiting for the bus.|/aɪm ˈweɪtɪŋ fər ðə ˈbʌs/|Estou esperando o ônibus}}{{ex:I listen to music every day.|/aɪ ˈlɪsn tə ˈmjuːzɪk ˈevri ˈdeɪ/|Escuto música todos os dias}}{{ex:I'll pay for lunch.|/aɪl ˈpeɪ fər ˈlʌntʃ/|Deixa que eu pago o almoço}}
<h3>Adjetivos com preposição</h3>
<div class="tbl"><table><tr><th>Inglês</th><th>Português</th></tr><tr><td class="k">married to</td><td>casado com</td></tr><tr><td class="k">interested in</td><td>interessado em</td></tr><tr><td class="k">good at</td><td>bom em</td></tr><tr><td class="k">afraid of</td><td>com medo de</td></tr><tr><td class="k">different from</td><td>diferente de</td></tr><tr><td class="k">proud of</td><td>orgulhoso de</td></tr><tr><td class="k">responsible for</td><td>responsável por</td></tr></table></div>
{{ex:She's married to a doctor.|/ʃiz ˈmærid tu ə ˈdɑːktər/|Ela é casada com um médico}}{{ex:He's interested in music.|/hiz ˈɪntrəstɪd ɪn ˈmjuːzɪk/|Ele se interessa por música}}{{ex:I'm good at math.|/aɪm ˈgʊd ət ˈmæθ/|Eu sou bom em matemática}}{{ex:I'm afraid of dogs.|/aɪm əˈfreɪd əv ˈdɔːgz/|Eu tenho medo de cachorro}}{{ex:English is different from Portuguese.|/ˈɪŋglɪʃ ɪz ˈdɪfrənt frəm ˌpɔːrtʃəˈgiːz/|O inglês é diferente do português}}
<p>O verbo continua seguindo as regras de sempre: <i>She <b>depends</b> on…</i> (terceira pessoa), <i><b>Does</b> she depend on…?</i> (auxiliar na pergunta).</p>
<div class="tip">Erros comuns: <b>depend of</b>, <b>married with</b>, <b>wait you</b>, <b>listen music</b>, <b>arrive to the airport</b> ✗ → <b>depend on</b>, <b>married to</b>, <b>wait for you</b>, <b>listen to music</b>, <b>arrive at the airport</b> ✓.</div>`,
check:[["«Depender de» em inglês:",["depend of","depend from","depend on","depend in"],2,"«Depender de» é \"depend on\", nunca \"depend of\"."],["Como se diz «Estou esperando você»?",["I'm waiting you.","I'm waiting for you.","I'm waiting to you.","I'm hoping you."],1,"«Esperar alguém» é \"wait for\": o português não tem preposição, o inglês tem."],["Qual frase está correta?",["She's married to a doctor.","She's married with a doctor.","She's married of a doctor.","She's married at a doctor."],0,"«Casado com» é \"married to\", e não \"married with\"."]],
practice:[
["mc","Como se diz «Ela depende dos pais»?","She depends on her parents.","She depends of her parents.","She depends from her parents.","She depend on her parents.","«Depender de» é \"depend on\", e com \"she\" o verbo leva -s."],
["mc","Como se diz «Estou esperando o ônibus»?","I'm waiting for the bus.","I'm waiting the bus.","I'm waiting to the bus.","I'm hoping the bus.","«Esperar alguém ou algo» é \"wait for\": sem preposição em português, com \"for\" em inglês."],
["mc","He's married ___ a teacher. O que vai no espaço?","to","with","of","by","«Casado com» é \"married to\", e não \"married with\"."],
["mc","She's interested ___ art. O que vai no espaço?","in","on","at","of","«Interessado em» é \"interested in\"."],
["mc","Como se diz «Eu escuto música todos os dias»?","I listen to music every day.","I listen music every day.","I hear to music every day.","I listen at music every day.","«Escutar» é \"listen to\": sem o \"to\", a frase fica errada."],
["or","Ela depende dos pais?","Does she depend on her parents","of","Na pergunta, o auxiliar \"does\" vem antes do sujeito; «depender de» é \"depend on\"."],
["or","Ele escuta música todos os dias","He listens to music every day","listen","Com \"he\", o verbo leva -s (terceira pessoa); «escutar» é \"listen to\"."],
["or","Em que você está pensando?","What are you thinking about","in","Na pergunta, o auxiliar \"are\" vem antes do sujeito; «pensar em» é \"think about\"."],
["fi","It depends __ the weather.","Depende do tempo","on","of|from|in","«Depender de» é \"depend on\"."],
["fi","I'm afraid __ dogs.","Eu tenho medo de cachorro","of","from|with|for","«Ter medo de» é \"be afraid of\"."],
["fi","We arrived __ the airport at six.","Chegamos ao aeroporto às seis","at","to|in|on","Para um lugar específico, «chegar a» é \"arrive at\", nunca \"arrive to\"."],
["ty","Ela é casada com um médico","She is married to a doctor","married · doctor — frase com \"to\"","with","«Casado com» é \"married to\", e com \"she\" o verbo \"be\" fica \"is\": terceira pessoa."],
["ty","Você é bom em matemática?","Are you good at math|Are you good at mathematics","good · math — pergunta com \"at\"","in","Na pergunta, \"are\" vem antes do sujeito; «bom em» é \"good at\"."],
["ty","Ele não espera ninguém","He doesn't wait for anyone|He doesn't wait for anybody","wait · anyone — negação com o auxiliar","waits","Com \"he\", a negação usa o auxiliar \"doesn't\" e o verbo sem -s; «esperar alguém» é \"wait for\"."]]},
];
