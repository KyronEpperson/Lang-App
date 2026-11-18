/* pt-en: the original 11 lessons and their checks, written for Brazilian Portuguese speakers (docs/profiles/pt.md §8).
   English examples, check options and answer positions follow es-en except in the lessons and checks listed in deviations.json
   (pron rebuilt for Brazilian sound traps; technical Portuguese check options in polite, numbers, phrasal, idioms). */
exports.LESSONS = [
{ id:"alphabet", title:"1 · O alfabeto: o nome das letras e como soletrar", blurb:"Você já conhece as letras, mas em inglês elas têm outros nomes. Aprenda esses nomes para soletrar seu nome, seu e-mail ou um código de reserva sem confusão.", deck:"O alfabeto", body:`
<p>O inglês usa as mesmas 26 letras do português, incluindo o K, o W e o Y. O que muda são os <b>nomes</b> das letras, e você precisa deles toda vez que soletra algo em voz alta: seu sobrenome na recepção do hotel, seu e-mail ao telefone, o código da reserva no aeroporto. Se você disser «i» pensando no I, a pessoa do outro lado vai anotar um E.</p>
<h3>As 26 letras e seus nomes</h3>
<p>Ao lado de cada letra está o nome dela em transcrição fonética, no Alfabeto Fonético Internacional (AFI, em inglês IPA); a chave completa está na próxima lição. Por enquanto, basta saber quatro coisas: ˈ vem antes da sílaba tônica, ː marca vogal longa, dʒ é o «dj» de «dia» (como se fala em grande parte do Brasil) e, no AFI, a letra j é o som do <i>y</i> inglês, o «i» de «iogurte» (/ˈjuː/ soa «iu»). As cinco vogais (A, E, I, O, U) estão destacadas.</p>
<div class="tbl"><table><tr><th>Letra · nome</th><th>Letra · nome</th><th>Letra · nome</th><th>Letra · nome</th><th>Letra · nome</th></tr><tr><td class="k">A · /ˈeɪ/</td><td>B · /ˈbiː/</td><td>C · /ˈsiː/</td><td>D · /ˈdiː/</td><td class="k">E · /ˈiː/</td></tr><tr><td>F · /ˈef/</td><td>G · /ˈdʒiː/</td><td>H · /ˈeɪtʃ/</td><td class="k">I · /ˈaɪ/</td><td>J · /ˈdʒeɪ/</td></tr><tr><td>K · /ˈkeɪ/</td><td>L · /ˈel/</td><td>M · /ˈem/</td><td>N · /ˈen/</td><td class="k">O · /ˈoʊ/</td></tr><tr><td>P · /ˈpiː/</td><td>Q · /ˈkjuː/</td><td>R · /ˈɑːr/</td><td>S · /ˈes/</td><td>T · /ˈtiː/</td></tr><tr><td class="k">U · /ˈjuː/</td><td>V · /ˈviː/</td><td>W · /ˈdʌbəljuː/</td><td>X · /ˈeks/</td><td>Y · /ˈwaɪ/</td></tr><tr><td>Z · /ˈziː/</td><td></td><td></td><td></td><td></td></tr></table></div>
<p>Dica: muitos nomes rimam entre si. Rimam com o E (/iː/): B, C, D, G, P, T, V, Z. Rimam com o A (/eɪ/): J e K.</p>
<h3>Os nomes que mais confundem quem fala português</h3>
<p>A maior armadilha está nas vogais. O nome inglês do E soa como o nosso «i»; o do I soa «ai»; e o do A soa «ei», bem parecido com o nosso «ê». Ou seja: quando ouvir «ei», escreva A; quando ouvir «i», escreva E; quando ouvir «ai», escreva I.</p>
<div class="tbl"><table><tr><th>Letra</th><th>Em inglês</th><th>Atenção</th></tr><tr><td class="k">A</td><td>/ˈeɪ/</td><td>não é «a»: soa «ei», como <i>day</i> sem o d</td></tr><tr><td class="k">E</td><td>/ˈiː/</td><td>soa como o nosso «i», longo; nunca «ê»</td></tr><tr><td class="k">I</td><td>/ˈaɪ/</td><td>soa «ai», igual à palavra <i>I</i> («eu»)</td></tr><tr><td class="k">G / J</td><td>/ˈdʒiː/ / /ˈdʒeɪ/</td><td>o G rima com E e o J rima com A. Cuidado: o J inglês soa quase como o nosso «gê», e por isso é fácil trocar os dois</td></tr><tr><td class="k">H</td><td>/ˈeɪtʃ/</td><td>não é «agá»: começa com «ei» e termina seco em /tʃ/, o «tch» de «tchau», sem «i» no fim</td></tr><tr><td class="k">R</td><td>/ˈɑːr/</td><td>não é «erre»: soa como <i>are</i>, com o r inglês</td></tr><tr><td class="k">T / D</td><td>/ˈtiː/ / /ˈdiː/</td><td>t e d puros antes do i: nada de «tchi» ou «dji»</td></tr><tr><td class="k">L, M, N</td><td>/ˈel/, /ˈem/, /ˈen/</td><td>o L termina com a língua atrás dos dentes (nunca «éu»); no M e no N, a vogal não fica nasal</td></tr><tr><td class="k">W</td><td>/ˈdʌbəljuː/</td><td>o nosso «dáblio» vem de <i>double u</i>; em inglês são três sílabas, e a última soa como <i>you</i></td></tr><tr><td class="k">Y</td><td>/ˈwaɪ/</td><td>não é «ípsilon»: soa como <i>why</i></td></tr><tr><td class="k">Z</td><td>/ˈziː/</td><td>não é «zê»: soa «zi» e rima com E. O <i>zed</i> é britânico</td></tr></table></div>
<p>Também não diga «cá», «quê» nem «xis»: o K é /ˈkeɪ/, o Q é /ˈkjuː/ (como <i>queue</i>) e o X é /ˈeks/.</p>
<h3>Soletrar em voz alta</h3>
<p>Para pedir que alguém soletre algo, ou quando for a sua vez de soletrar, use estas frases. Para confirmar uma letra, em português dizemos «B de bola»; em inglês se diz <b>as in</b> + uma palavra.</p>
{{ex:How do you spell that?|/ˈhaʊ də ju ˈspel ˈðæt/|Como se escreve isso?}}{{ex:How do you spell your last name?|/ˈhaʊ də ju ˈspel jʊr ˈlæst ˈneɪm/|Como se escreve o seu sobrenome?}}{{ex:Can you spell that, please?|/kən ju ˈspel ˈðæt ˈpliːz/|Pode soletrar, por favor?}}{{ex:It starts with a capital T.|/ɪt ˈstɑːrts wɪð ə ˈkæpɪtl ˈtiː/|Começa com T maiúsculo.}}{{ex:B as in boy.|/ˈbiː əz ɪn ˈbɔɪ/|B de "boy".}}{{ex:Is that M as in Mary?|/ɪz ˈðæt ˈem əz ɪn ˈmeri/|É M de "Mary"?}}{{ex:There are two Ls in hello.|/ðer ər ˈtuː ˈelz ɪn həˈloʊ/|"Hello" se escreve com dois L.}}
<p>Repare que a pergunta usa o auxiliar <i>do</i> (<i>How do you spell…?</i>) e que o plural de uma letra leva -s: <i>two Ls</i>. E «tem dois L» não vira <i>has two Ls</i> sem sujeito: diga <i>There are two Ls</i> ou <i>It has two Ls</i>.</p>
<h3>a ou an antes de uma letra?</h3>
<p>Quem decide não é a letra, mas o <b>som</b> com que o nome dela começa. Vários nomes de consoantes começam com som de vogal (/ˈef/, /ˈeɪtʃ/, /ˈel/, /ˈem/, /ˈen/, /ˈɑːr/, /ˈes/, /ˈeks/), por isso levam <i>an</i>: <i>an F, an H, an L, an M, an N, an R, an S, an X</i>.</p>
<p>Ao contrário, o U é vogal, mas o nome dele soa como <i>you</i> e começa com som de consoante: <i>a U</i>.</p>
<div class="tip">Para ditar um e-mail: letra maiúscula é <i>capital</i> (<i>capital T</i>), letra repetida é <i>double</i> (<i>double L</i>), a @ se diz <i>at</i> e o ponto se diz <i>dot</i>. Nada de «arroba» nem «ponto»: <i>ana.silva@example.com</i> se dita <i>ana dot silva at example dot com</i>.</div>`},

{ id:"pron", title:"1 · Armadilhas de pronúncia: vogal extra, -ed, R e H, L e M finais, TH", blurb:"Aprenda a ler a transcrição fonética (AFI) dos cartões e conheça as armadilhas típicas de quem fala português: a vogal a mais no fim, o R, o H, o L final e o TH.", deck:"Armadilhas de pronúncia", body:`
<p>Os cartões e exemplos deste curso trazem a <b>transcrição fonética</b> no Alfabeto Fonético Internacional (AFI, em inglês IPA), com os sons do inglês americano. Parece estranho no começo, mas resolve um problema sério: se o inglês fosse escrito com letras do português, você leria «ti» como «tchi», o «l» final como «u» e colocaria um «i» depois de cada consoante. Gaste alguns minutos com esta tabela e depois volte a ela quando precisar. Se preferir, desligue a transcrição em «Mostrar pronúncia (AFI)».</p>
<h3>Como ler a transcrição</h3>
<div class="tbl"><table><tr><th>AFI</th><th>Som (⚠ = armadilha para brasileiros)</th><th>Exemplo</th></tr><tr><td class="k">iː</td><td>«i» de «vi», mais longo</td><td>sheep /ˈʃiːp/</td></tr><tr><td class="k">ɪ</td><td>entre «i» e «ê», curto e relaxado ⚠</td><td>ship /ˈʃɪp/</td></tr><tr><td class="k">e</td><td>«é/ê» médio</td><td>bed /ˈbed/</td></tr><tr><td class="k">æ</td><td>«é» bem aberto, com a boca bem aberta ⚠</td><td>bad /ˈbæd/</td></tr><tr><td class="k">ʌ</td><td>«a» fechado, como em «cama»</td><td>cup /ˈkʌp/</td></tr><tr><td class="k">ə</td><td>vogal fraca, como o «a» final de «casa»</td><td>about /əˈbaʊt/</td></tr><tr><td class="k">ɑː</td><td>«á» aberto e longo</td><td>hot /ˈhɑːt/</td></tr><tr><td class="k">ɔː</td><td>«ó» aberto</td><td>talk /ˈtɔːk/</td></tr><tr><td class="k">uː / ʊ</td><td>«u» longo / «u» curto e relaxado</td><td>food /ˈfuːd/, book /ˈbʊk/</td></tr><tr><td class="k">ɜːr / ər</td><td>vogal com a língua puxada para trás, sem vibrar o r</td><td>bird /ˈbɜːrd/, water /ˈwɔːtər/</td></tr><tr><td class="k">eɪ aɪ ɔɪ oʊ aʊ</td><td>«ei», «ai», «ói», «ou», «au»</td><td>day /ˈdeɪ/, go /ˈgoʊ/</td></tr><tr><td class="k">p t k</td><td>com um sopro no início da sílaba tônica; o t nunca vira «tch» ⚠</td><td>team /ˈtiːm/</td></tr><tr><td class="k">d</td><td>nunca vira «dj» antes de i ⚠</td><td>different /ˈdɪfrənt/</td></tr><tr><td class="k">θ / ð</td><td>língua entre os dentes: sem voz / com voz ⚠</td><td>think /ˈθɪŋk/, this /ˈðɪs/</td></tr><tr><td class="k">ʃ / ʒ</td><td>«ch» de «chá» / «j» de «já»</td><td>she /ʃi/, usually /ˈjuːʒuəli/</td></tr><tr><td class="k">tʃ / dʒ</td><td>«tch» de «tia» / «dj» de «dia»; o <i>j</i> inglês é dʒ, não o «j» de «já» ⚠</td><td>chair /ˈtʃer/, job /ˈdʒɑːb/</td></tr><tr><td class="k">h</td><td>um sopro leve; o «h» do português é mudo, o do inglês soa ⚠</td><td>head /ˈhed/</td></tr><tr><td class="k">r</td><td>língua curvada para trás, sem tocar em nada; nunca o «r» de «rato» ⚠</td><td>red /ˈred/</td></tr><tr><td class="k">m / n (no fim)</td><td>feche os lábios / encoste a língua; não nasalize a vogal ⚠</td><td>team /ˈtiːm/, teen /ˈtiːn/</td></tr><tr><td class="k">ŋ</td><td>a parte de trás da língua no céu da boca, como no «n» de «manga», mas sem soltar o g</td><td>sing /ˈsɪŋ/</td></tr><tr><td class="k">l (no fim)</td><td>ponta da língua atrás dos dentes de cima; nunca «u» ⚠</td><td>feel /ˈfiːl/, cold /ˈkoʊld/</td></tr><tr><td class="k">w / j</td><td>«u» de «quase» / «i» de «iogurte»; o <i>j</i> do AFI é o <i>y</i> inglês ⚠</td><td>we /wi/, yes /ˈjes/</td></tr><tr><td class="k">ˈ</td><td>vem <b>antes</b> da sílaba tônica</td><td>hotel /hoʊˈtel/</td></tr></table></div>
<p>Palavras sem ˈ (<i>a, the, to, can</i>…) são fracas: diga-as rápido e sem força. Mais três detalhes:</p>
<p><b>1.</b> Se não há vogal depois da consoante, não acrescente nenhuma: Facebook /ˈfeɪsbʊk/, e não «feicibuqui». <b>2.</b> No inglês americano, o <i>t</i> entre vogais soa como o «r» de «caro» (<i>water</i>, <i>city</i>). A transcrição não mostra isso; o áudio mostra. <b>3.</b> A armadilha mais comum de leitura: no AFI, a letra <b>j</b> é o <i>y</i> inglês. <i>yes</i> /ˈjes/ começa com o som do «i» de «iogurte».</p>
<h3>Vogais longas e curtas, abertas e fechadas</h3>
<p>O português tem sete vogais orais; o inglês americano tem cerca de onze. Por isso, palavras que para você soam iguais são palavras diferentes para um nativo. O <b>i longo</b> /iː/ é tenso, com os lábios esticados; o <b>i curto</b> /ɪ/ é relaxado, quase um «ê». O mesmo acontece com o <i>u</i> (/uː/ e /ʊ/). E o /æ/ de <i>bad</i> é mais aberto que qualquer «é» do português.</p>
{{ex:ship / sheep|/ˈʃɪp/ /ˈʃiːp/|navio / ovelha}}{{ex:live / leave|/ˈlɪv/ /ˈliːv/|morar / ir embora}}{{ex:full / fool|/ˈfʊl/ /ˈfuːl/|cheio / tolo}}{{ex:bad / bed|/ˈbæd/ /ˈbed/|ruim / cama}}{{ex:The sheep is on the ship.|/ðə ˈʃiːp ɪz ɑːn ðə ˈʃɪp/|A ovelha está no navio.}}
<h3>Sem vogal a mais, nem no fim nem no começo</h3>
<p>Em português quase toda sílaba termina em vogal, então a boca tende a acrescentar um «i» depois da consoante: «bigui», «clubi», «feicibuqui». Em inglês a palavra termina seca, na consoante, e esse «i» extra muda o ritmo e às vezes a palavra. O mesmo vale para o começo: nenhuma palavra portuguesa começa com <i>s</i> + consoante, e por isso sai «istudent» e «iscool». Comece direto no <i>s</i>: alongue um pouco o «sss» e só então passe para a consoante.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|Sou estudante.}}{{ex:I study at school.|/aɪ ˈstʌdi ət ˈskuːl/|Estudo na escola.}}{{ex:a small street|/ə ˈsmɔːl ˈstriːt/|uma rua pequena}}
<h3>A terminação -ed</h3>
<p>O <b>-ed</b> do passado <b>não</b> é uma sílaba a mais, exceto depois de <i>t</i> ou <i>d</i>. Nada de «uórquid» ou «plêiid».</p>
<div class="tbl"><table><tr><th>Soa</th><th>Quando</th><th>Exemplo</th></tr><tr><td class="k">t</td><td>depois de som surdo (k, p, s, sh, ch, f)</td><td>worked /ˈwɜːrkt/</td></tr><tr><td class="k">d</td><td>depois de som sonoro (vogal, l, n, g, v…)</td><td>played /ˈpleɪd/</td></tr><tr><td class="k">ɪd</td><td>só depois de t ou d</td><td>wanted /ˈwɑːntɪd/</td></tr></table></div>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Trabalhei ontem.}}{{ex:We played soccer.|/wi ˈpleɪd ˈsɑːkər/|Jogamos futebol.}}{{ex:She wanted to stay.|/ʃi ˈwɑːntɪd tə ˈsteɪ/|Ela queria ficar.}}
<h3>R e H</h3>
<p>Na maior parte do Brasil, o «r» de «rato» e o «rr» de «carro» saem da garganta e soam muito parecidos com o <b>h</b> inglês. Resultado: <i>red</i> soa como <i>head</i>, e <i>rot</i> como <i>hot</i>. O <b>r</b> inglês se faz com a língua curvada para trás, sem tocar em nada. Já o <b>h</b>, que em português é mudo, em inglês soa: é só um sopro leve, sem raspar a garganta.</p>
{{ex:head / red|/ˈhed/ /ˈred/|cabeça / vermelho}}{{ex:hot / rot|/ˈhɑːt/ /ˈrɑːt/|quente / apodrecer}}{{ex:his house|/hɪz ˈhaʊs/|a casa dele}}
<h3>L, M e N no fim da palavra</h3>
<p>No Brasil, o <i>l</i> no fim da sílaba vira «u» («Brasiu»). Em inglês isso troca palavras: <i>cold</i> soa como <i>code</i>. Para o <b>l</b> final, encoste a ponta da língua atrás dos dentes de cima e segure. Com o <b>m</b> e o <b>n</b> finais, o português nasaliza a vogal e quase não pronuncia a consoante, e <i>team</i> e <i>teen</i> viram a mesma coisa. Feche bem os lábios no <i>m</i> e encoste a língua no <i>n</i>.</p>
{{ex:milk|/ˈmɪlk/|leite}}{{ex:cold / code|/ˈkoʊld/ /ˈkoʊd/|frio / código}}{{ex:team / teen|/ˈtiːm/ /ˈtiːn/|time, equipe / adolescente}}
<h3>T e D antes de i; o J inglês</h3>
<p>Em grande parte do Brasil, «tia» e «dia» soam «tchia» e «djia». Em inglês, <b>t</b> e <b>d</b> não mudam antes de <i>i</i>: <i>team</i> não é «tchim», <i>different</i> não é «djifferent». E o <b>j</b> inglês é sempre /dʒ/, como o «dj» de «dia»: <i>job</i>, <i>Jack</i>, nunca com o «j» de «já».</p>
{{ex:different|/ˈdɪfrənt/|diferente}}{{ex:I like my job.|/aɪ ˈlaɪk maɪ ˈdʒɑːb/|Gosto do meu trabalho.}}
<h3>TH</h3>
<p>O <b>th</b> se faz com a ponta da língua entre os dentes: sem voz em <i>think</i> /θ/, com voz em <i>this</i> /ð/. Se você trocar por <i>s</i>, <i>t</i> ou <i>f</i>, diz outra palavra: <i>think</i> vira <i>sink</i> («pia») e <i>three</i> vira <i>tree</i> («árvore»).</p>
{{ex:I think so.|/aɪ ˈθɪŋk ˈsoʊ/|Acho que sim.}}{{ex:think / sink|/ˈθɪŋk/ /ˈsɪŋk/|pensar / pia}}{{ex:three / tree|/ˈθriː/ /ˈtriː/|três / árvore}}
<h3>A sílaba tônica</h3>
<p>Muitas palavras parecem com o português, mas a sílaba tônica fica em outro lugar. E não engula o fim: as sílabas fracas são curtas, mas existem.</p>
<div class="tbl"><table><tr><th>Palavra</th><th>Em inglês</th><th>Não diga</th></tr><tr><td class="k">comfortable</td><td>/ˈkʌmftərbl/: força no começo, três sílabas</td><td>com força no fim, como em «confortável»</td></tr><tr><td class="k">chocolate</td><td>/ˈtʃɑːklət/: duas sílabas</td><td>com quatro sílabas e força no «la», como em português</td></tr><tr><td class="k">vegetable</td><td>/ˈvedʒtəbl/: força no começo, três sílabas</td><td>com força no «ta»</td></tr><tr><td class="k">Wednesday</td><td>/ˈwenzdeɪ/: duas sílabas, o d não soa</td><td>com três sílabas, lendo o d</td></tr></table></div>
<div class="tip">Grave sua voz dizendo <i>head / red</i>, <i>cold / code</i> e <i>team / teen</i> e compare com o áudio. Se saírem iguais, exagere: um sopro bem leve no <i>h</i>, a língua presa atrás dos dentes no <i>l</i>, os lábios bem fechados no <i>m</i>.</div>`},

{ id:"articles", title:"2 · a, an e the: onde o inglês e o português não combinam", blurb:"Você já usa artigos em português. Aqui estão os casos em que o inglês coloca ou tira o artigo de outro jeito.", deck:"Apresentações", body:`
<p>O português também tem artigos (<i>um, uma, o, a</i>), então a ideia você já conhece e quase sempre acerta. Os erros aparecem nos poucos casos em que as duas línguas <b>não combinam</b>. Vamos a eles.</p>
<h3>1. Profissões: com a / an</h3>
<p>Em português você diz «Sou estudante» ou «Ela é enfermeira», sem artigo. Em inglês, com profissão no singular, o artigo é <b>obrigatório</b>.</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|Sou estudante.}}{{ex:She's a nurse.|/ʃiz ə ˈnɜːrs/|Ela é enfermeira.}}{{ex:My brother is an engineer.|/maɪ ˈbrʌðər ɪz ən ˌendʒɪˈnɪr/|Meu irmão é engenheiro.}}
<h3>2. a ou an? Quem decide é o som</h3>
<p>Use <b>an</b> quando a palavra seguinte <b>soa</b> como vogal, mesmo que se escreva com consoante, e <b>a</b> quando soa como consoante, mesmo que se escreva com vogal.</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (soa «iu»)</td><td class="k">an hour (o h é mudo)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (soa «uan»)</td><td class="k">an MBA (soa «em»)</td></tr></table></div>
<h3>3. Falar em geral: sem artigo</h3>
<p>Em português dizemos «<b>A</b> vida é dura» ou «Adoro <b>os</b> cachorros». Em inglês, quando você fala de algo em geral (ideias abstratas, substantivos incontáveis ou plurais), vai <b>sem artigo</b>. Você vai ver isso em detalhes mais adiante.</p>
{{ex:Life is hard.|/ˈlaɪf ɪz ˈhɑːrd/|A vida é dura.}}{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|Adoro cachorros.}}{{ex:Coffee is expensive here.|/ˈkɔːfi ɪz ɪkˈspensɪv ˈhɪr/|Aqui o café é caro.}}
<h3>4. Partes do corpo: possessivo, não «the»</h3>
<p>Em português dizemos «Lave <b>as</b> mãos» ou «Escovo <b>os</b> dentes», porque já está claro de quem são. O inglês diz de quem é com o <b>adjetivo possessivo</b>: <i>my, your, his, her</i>.</p>
{{ex:My head hurts.|/maɪ ˈhed ˈhɜːrts/|Minha cabeça dói. / Estou com dor de cabeça.}}{{ex:Wash your hands.|/ˈwɑːʃ jʊr ˈhændz/|Lave as mãos.}}{{ex:I brush my teeth every day.|/aɪ ˈbrʌʃ maɪ ˈtiːθ ˈevri ˈdeɪ/|Escovo os dentes todo dia.}}
<h3>5. Três artigos que só o português tem</h3>
<p>O português coloca artigo antes do <b>possessivo</b> (<i>a minha mãe</i>), antes de <b>nomes de pessoas</b> (<i>o Pedro</i>, <i>a Julia</i>) e antes de quase todos os <b>países</b> (<i>o Brasil</i>, <i>a França</i>). O inglês não faz nenhuma dessas três coisas. A exceção são países com nome no plural ou com <i>States</i>, <i>Kingdom</i>: <i>the United States</i>, <i>the UK</i>.</p>
{{ex:I live with my mother.|/aɪ ˈlɪv wɪð maɪ ˈmʌðər/|Moro com a minha mãe.}}{{ex:Pedro is my friend.|/ˈpeɪdroʊ ɪz maɪ ˈfrend/|O Pedro é meu amigo.}}{{ex:Brazil is beautiful.|/brəˈzɪl ɪz ˈbjuːtɪfl/|O Brasil é lindo.}}
<h3>Igual ao português: the</h3>
<p><i>The</i> funciona como <i>o, a, os, as</i>: para algo que você já mencionou ou que os dois sabem qual é.</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|Tenho um cachorro. O cachorro é uma graça.}}
<div class="tip">Os erros mais típicos: <b>She is doctor.</b> (✗) → <b>She is a doctor.</b> (✓), <b>The life is hard.</b> (✗) → <b>Life is hard.</b> (✓) e <b>I live with the my mother.</b> (✗) → <b>I live with my mother.</b> (✓)</div>`},

{ id:"be", title:"3 · O verbo be: ser, estar… e às vezes ter", blurb:"Ser e estar são um verbo só em inglês, e às vezes ter também: I'm 25, I'm hungry.", deck:"Apresentações", body:`
<p>Em inglês, <b>ser</b> e <b>estar</b> são um verbo só: <b>be</b>. Além disso, em várias expressões em que o português usa <b>ter</b> ou <b>estar com</b>, o inglês usa <i>be</i>. E a frase sempre precisa de sujeito.</p>
<h3>As formas de be</h3>
<div class="tbl"><table><tr><th>Sujeito</th><th>be</th><th>Contração</th></tr><tr><td class="k">I</td><td>am</td><td>I'm</td></tr><tr><td class="k">you / we / they</td><td>are</td><td>you're, we're, they're</td></tr><tr><td class="k">he / she / it</td><td>is</td><td>he's, she's, it's</td></tr></table></div>
{{ex:She's a teacher.|/ʃiz ə ˈtiːtʃər/|Ela é professora.}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|Ela está no trabalho.}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Você está bem?}}
<h3>Onde o português diz «ter» ou «estar com»</h3>
<p>A idade e muitas sensações físicas vão com <i>be</i> + adjetivo. <i>I have 25 years</i> é um dos erros mais reconhecíveis. E cuidado com o «estar com» brasileiro: «estou com fome» não é <i>I'm with hunger</i>, é simplesmente <i>I'm hungry</i>.</p>
<div class="tbl"><table><tr><th>Português</th><th>Inglês</th></tr><tr><td>Tenho 25 anos.</td><td class="k">I'm 25. / I'm 25 years old.</td></tr><tr><td>Estou com fome. / Estou com sede.</td><td class="k">I'm hungry. / I'm thirsty.</td></tr><tr><td>Estou com frio. / Estou com calor.</td><td class="k">I'm cold. / I'm hot.</td></tr><tr><td>Estou com sono. / Estou com medo.</td><td class="k">I'm sleepy. / I'm scared.</td></tr><tr><td>Você tem razão.</td><td class="k">You're right.</td></tr></table></div>
{{ex:I'm 25 years old.|/aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/|Tenho 25 anos.}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|Estou com fome.}}{{ex:You're right.|/jʊr ˈraɪt/|Você tem razão.}}
<h3>O sujeito sempre aparece</h3>
<p>Em português, «É tarde» ou «Está em casa» não precisam de sujeito, porque o verbo já diz tudo. Em inglês o sujeito é obrigatório, e quando não há nenhum, entra <b>it</b>.</p>
{{ex:It's late.|/ɪts ˈleɪt/|É tarde.}}{{ex:He's at home.|/hiz ət ˈhoʊm/|Ele está em casa.}}
<h3>Be e os outros verbos não se misturam</h3>
<p>Com <i>like, live, work</i> e os demais verbos não vai <i>be</i>: <i>I like coffee</i>, e não <i>I am like coffee</i>. Na negativa e na pergunta, <i>be</i> não precisa de <i>do</i>; os outros verbos precisam. A pergunta é: tem outro verbo além de <i>be</i>? Se tiver, entra <i>do</i>.</p>
<div class="tbl"><table><tr><th></th><th>be</th><th>outros verbos</th></tr><tr><td>Afirmativa</td><td class="k">I'm tired.</td><td class="k">I like coffee.</td></tr><tr><td>Negativa</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>Pergunta</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<h3>he / she / it: -s e does</h3>
<p>Com <i>he, she, it</i> (ou um substantivo no singular), o verbo ganha <b>-s</b> no presente. Na negativa e na pergunta entra <b>does</b>, e aí o verbo perde o -s. Atenção: em português, «você fala» usa a mesma forma de «ele fala», mas em inglês <i>you</i> nunca leva -s: <i>you work</i>, <i>he works</i>.</p>
{{ex:My brother works in Rio.|/maɪ ˈbrʌðər ˈwɜːrks ɪn ˈriːoʊ/|Meu irmão trabalha no Rio.}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|Ele fala inglês?}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|Ela não come carne.}}
<div class="tip">Erros típicos: <b>I have 25 years</b> → <b>I'm 25</b>; <b>Is late</b> → <b>It's late</b>; <b>She work</b> → <b>She works</b>.</div>`},

{ id:"polite", title:"4 · Pedir com educação", blurb:"Can you → Could you → Would you mind. Em inglês, Give me soa grosseiro.", deck:"Sobrevivência 1", body:`
<p>Em inglês, <b>you</b> serve para <i>você</i>, <i>o senhor</i> e <i>a senhora</i>. A educação não está no pronome, e sim em <b>como você pede</b>: com <i>could</i>, <i>would</i> e <i>please</i>.</p>
<h3>A escada da educação</h3>
<div class="tbl"><table><tr><th>Expressão</th><th>Como soa</th><th>Quando</th></tr><tr><td class="k">Give me ~.</td><td>Ordem direta; soa grosseira</td><td>Melhor evitar</td></tr><tr><td class="k">Can you ~?</td><td>Pedido informal</td><td>Amigos, lojas</td></tr><tr><td class="k">Could you ~?</td><td>Pedido gentil</td><td>Desconhecidos, trabalho</td></tr><tr><td class="k">Would you mind ~ing?</td><td>Muito gentil</td><td>Favores grandes, chefes</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|Você poderia me ajudar? / O senhor poderia me ajudar?}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|Você poderia repetir?}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|Você se importaria de tirar uma foto nossa?}}
<h3>Para pedir: Can I get…? / I'd like…</h3>
<p>No Brasil, «Me dá um café» ou «Me vê um café» é normal e não soa mal. Em inglês, <i>Give me…</i> e <i>I want…</i> soam grosseiros ou infantis. Numa loja ou cafeteria, diga assim:</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|Me vê um latte, por favor?}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|Eu gostaria de um assento na janela.}}
<h3>Would you mind…? funciona como «Você se importa…?»</h3>
<p><i>Mind</i> significa «se importar, incomodar-se». Como em português, se perguntam «Você se importa…?» e você não se importa, a resposta é <b>não</b>.</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|Você se importaria de abrir a janela?}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|Não, imagina. (Claro que eu abro.)}}
<div class="tip"><b>Please</b> e <b>thank you</b> nunca são demais: só de colocar <i>please</i> no fim, a frase já soa muito mais gentil. A entonação também conta: subindo no fim, soa como pedido; descendo, como ordem.</div>`},

{ id:"tense", title:"5 · Revisão dos tempos: presente, passado e futuro", blurb:"Hábitos no presente simples, o que está acontecendo no contínuo, planos com going to. E did nas perguntas sobre o passado.", deck:"Bate-papo", body:`
<p>«Trabalho», «estou trabalhando», «trabalhei», «vou trabalhar»: o português tem quase os mesmos tempos verbais que o inglês. O que muda é <b>quando</b> se usa cada um e os <b>auxiliares</b> das perguntas e negativas. Revise os cinco mais usados numa conversa.</p>
<h3>Presente simples ou presente contínuo</h3>
<div class="tbl"><table><tr><th>Forma</th><th>Uso</th><th>Exemplo</th></tr><tr><td class="k">presente simples (<i>simple present</i>)</td><td>hábitos e fatos</td><td>She drinks coffee every morning.</td></tr><tr><td class="k">be + forma -ing (<i>present continuous</i>)</td><td>o que está acontecendo agora / planos próximos já combinados</td><td>I'm drinking coffee right now.</td></tr></table></div>
<p>Aqui o português ajuda: «O que você está fazendo?» é <i>What are you doing?</i>, e «O que você faz?» (com o que trabalha) é <i>What do you do?</i>. Só não se esqueça do <b>-s</b> com <i>he, she, it</i> e do <i>be</i> no contínuo: <i>I'm drinking</i>, nunca <i>I drinking</i>.</p>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Ela trabalha num banco.}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|Hoje estou trabalhando de casa.}}{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|O que você está fazendo?}}
<h3>Passado simples (<i>simple past</i>)</h3>
<p>Os verbos regulares ganham <b>-ed</b>, mas muitos dos mais usados são irregulares: <i>go → went, eat → ate, see → saw, have → had, get → got</i>. Nas perguntas e negativas entra <b>did</b>, e o verbo volta à forma base: <i>Did you go?</i>, e não <i>Did you went?</i></p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|Fui à praia no fim de semana passado.}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|Você se divertiu?}}{{ex:I didn't see it.|/aɪ ˈdɪdnt ˈsiː ɪt/|Não vi.}}
<h3>Futuro: will ou going to</h3>
<div class="tbl"><table><tr><th></th><th>Quando</th><th>Exemplo</th></tr><tr><td class="k">will</td><td>decisão na hora, promessa</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>plano que você já tinha</td><td>I'm going to visit Salvador next month.</td></tr></table></div>
<p><i>Going to</i> é exatamente «vou» + infinitivo, então vai soar natural para você. Para compromissos já marcados, o português muitas vezes usa o presente («Amanhã eu trabalho»); o inglês prefere o contínuo: <i>I'm working tomorrow</i>. E para uma oferta feita na hora («Eu te ajudo!»), o inglês usa <i>will</i>: <i>I'll help you!</i></p>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Te ligo mais tarde.}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|Vou fazer uma aula de culinária.}}
<p>Na fala, <i>going to</i> costuma soar como <b>gonna</b>. Por escrito, use <i>going to</i>.</p>
<div class="tip">Para <i>How was your weekend?</i>, responda no passado; para <i>Any plans for the weekend?</i>, com <i>going to</i>. Usar o mesmo tempo da pergunta é o truque mais fácil.</div>`},

{ id:"prep", title:"6 · Preposições in / on / at", blurb:"Um «em» só em português, três opções em inglês: in para o amplo, on para dias e superfícies, at para um ponto.", deck:"Números, horas e datas", body:`
<p>Em português quase tudo vai com <b>em</b>: em maio, na mesa, no ônibus, em casa, na estação. O inglês divide esse «em» entre três preposições. A regra geral: <b>in</b> para espaços e períodos amplos (dentro de algo), <b>on</b> para superfícies e dias, <b>at</b> para um ponto exato. Não é à toa que preposições são o erro mais frequente de brasileiros em textos em inglês.</p>
<h3>Tempo</h3>
<div class="tbl"><table><tr><th>Preposição</th><th>Com</th><th>Exemplos</th></tr><tr><td class="k">in</td><td>meses, anos, estações, partes do dia</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>dias da semana, datas, dias especiais</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>horas exatas e momentos</td><td>at 7, at noon, at night</td></tr></table></div>
<p>Atenção: em português dizemos «<b>na</b> segunda» ou «<b>no</b> dia 3 de maio», com artigo. Em inglês vai <b>on</b> e sem artigo: <i>on Monday</i>, <i>on May 3rd</i>.</p>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|Até sexta.}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|A reunião é às três.}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|Nasci em 1998.}}
<h3>Lugar</h3>
<div class="tbl"><table><tr><th>Preposição</th><th>Ideia</th><th>Exemplos</th></tr><tr><td class="k">in</td><td>dentro de um espaço; cidades e países</td><td>in the car, in São Paulo, in Brazil</td></tr><tr><td class="k">on</td><td>em cima de uma superfície; ruas; transporte público</td><td>on the table, on Main Street, on the bus</td></tr><tr><td class="k">at</td><td>um ponto específico; um lugar pelo que você faz lá</td><td>at the station, at work, at home</td></tr></table></div>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|Estou no ônibus.}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|Vamos nos encontrar na estação.}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Estou em casa.}}
<p>E o famoso «chegar em»: nunca <i>arrive to</i>. Para um lugar específico, <i>arrive at</i> (<i>at the airport</i>); para uma cidade ou país, <i>arrive in</i> (<i>in Recife</i>).</p>
<h3>Sem preposição</h3>
<p>Com <b>next, last, this, every, tomorrow, yesterday</b> não vai preposição: <i>next week</i>, e nunca <i>on next week</i> ou <i>in next week</i>.</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|Até a semana que vem.}}
<div class="tip">Exceções úteis: <b>at night</b>, mas <b>in the morning / afternoon / evening</b>. O fim de semana é <b>on the weekend</b> nos EUA (<i>at the weekend</i> no inglês britânico). E cuidado com outras preposições que não batem com o português: <i>depend <b>on</b></i> (não <i>of</i>), <i>good <b>at</b></i> (não <i>in</i>), <i>married <b>to</b></i> (não <i>with</i>).</div>`},

{ id:"smalltalk", title:"7 · Bate-papo", blurb:"How are you? é um cumprimento, não uma pergunta. Assuntos seguros e assuntos que é melhor evitar.", deck:"Bate-papo", body:`
<p>Nos países de língua inglesa é normal bater um papo rápido com desconhecidos: no elevador, na fila do caixa ou antes de uma reunião. Não é uma conversa profunda, e sim uma <b>conversa curta para criar um clima bom</b>, o que em inglês se chama <i>small talk</i>.</p>
<h3>How are you? é um cumprimento</h3>
<p>Ninguém está perguntando de verdade como você está: é como um «Tudo bem?». O educado é responder curto e <b>devolver a pergunta</b>. Não precisa contar o seu dia.</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|Oi, tudo bem?}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|Tudo ótimo! E você?}}
<h3>Assuntos seguros e assuntos que é melhor evitar</h3>
<div class="tbl"><table><tr><th>Seguros</th><th>Melhor evitar com quem você acabou de conhecer</th></tr><tr><td>o tempo, os planos para o fim de semana ou as férias</td><td>a idade, se a pessoa namora ou tem filhos</td></tr><tr><td>comida, restaurantes, viagens</td><td>comentários sobre a aparência ou o peso</td></tr><tr><td>séries, filmes, esportes (o futebol é <i>soccer</i> nos EUA)</td><td>quanto a pessoa ganha, quanto pagou pela casa</td></tr><tr><td>o trabalho (sem entrar em detalhes), o bairro</td><td>política, religião</td></tr></table></div>
<p>No Brasil é comum perguntar da família logo de cara ou comentar a aparência com carinho («Nossa, você emagreceu!»). Em inglês, com alguém que você acabou de conhecer, isso soa pessoal demais.</p>
<h3>Como manter a conversa</h3>
<p>Resposta + <b>um detalhe a mais</b> + <b>pergunta de volta</b>. Com esses três passos, o papo não morre.</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|Foi ótimo! Fiz uma trilha. E você?}}
<p>Reaja também: <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>Como encerrar com naturalidade</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|Bom, preciso ir.}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|Foi um prazer conversar com você.}}
<div class="tip">«Eu também» é <b>Me too</b>, mas «Eu também não» (ou «Nem eu») é <b>Me neither</b>: <i>I don't like horror movies.</i> → <i>Me neither.</i> (e não <i>Me too</i>). No inglês falado dos EUA também se ouve <i>Me either</i>, mas o padrão é <i>Me neither</i>.</div>`},

{ id:"phrasal", title:"8 · Introdução aos phrasal verbs", blurb:"Verbo + partícula = um significado novo. Onde você diria enter ou continue, um nativo diz come in ou go on.", deck:"Phrasal verbs", body:`
<p>Um <i>phrasal verb</i> (verbo frasal) é um <b>verbo + uma partícula</b> como <i>up, out, off, on</i>, que juntos ganham um significado novo. Para quem fala português há uma armadilha: quase sempre existe um verbo de origem latina parecido com o português (<i>enter, continue, discover</i>), e você escolhe esse porque o reconhece. Está correto, mas numa conversa soa formal ou duro. Os nativos costumam usar o <i>phrasal verb</i>.</p>
<div class="tbl"><table><tr><th>Verbo formal (cognato)</th><th>Phrasal verb (conversa)</th><th>Significado</th></tr><tr><td>enter</td><td class="k">come in</td><td>entrar</td></tr><tr><td>continue</td><td class="k">go on</td><td>continuar, seguir</td></tr><tr><td>discover</td><td class="k">find out</td><td>descobrir, ficar sabendo</td></tr><tr><td>postpone</td><td class="k">put off</td><td>adiar</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>aguentar, tolerar</td></tr><tr><td>extinguish</td><td class="k">put out</td><td>apagar (um fogo)</td></tr></table></div>
<h3>A partícula dá uma pista</h3>
<p><b>up</b> costuma indicar «para cima, por completo»; <b>out</b>, «para fora, até o fim»; <b>off</b>, «separar-se, parar»; <b>on</b>, «em cima, continuar».</p>
{{ex:Come in, please.|/ˈkʌm ˈɪn ˈpliːz/|Entre, por favor.}}{{ex:I grew up in Salvador.|/aɪ ˈgruː ˈʌp ɪn ˈsælvədɔːr/|Cresci em Salvador.}}{{ex:We ran out of milk.|/wi ˈræn ˈaʊt əv ˈmɪlk/|Acabou o leite.}}{{ex:Turn off your phone, please.|/ˈtɜːrn ˈɔːf jʊr ˈfoʊn ˈpliːz/|Desligue o celular, por favor.}}
<h3>O pronome fica no meio</h3>
<p>Muitos <i>phrasal verbs</i> com objeto podem se separar. Um substantivo pode vir antes ou depois da partícula, mas um <b>pronome</b> (<i>it, them, me, you</i>) fica <b>sempre no meio</b>.</p>
{{ex:Turn on the light. / Turn the light on.|/ˈtɜːrn ˈɑːn ðə ˈlaɪt/ /ˈtɜːrn ðə ˈlaɪt ˈɑːn/|Acenda a luz. (As duas estão certas.)}}{{ex:Turn it on.|/ˈtɜːrn ɪt ˈɑːn/|Liga isso. (Nunca: turn on it)}}{{ex:I'll pick you up at seven.|/aɪl ˈpɪk ju ˈʌp ət ˈsevn/|Passo para te pegar às sete.}}
<h3>Phrasal verbs que não se separam</h3>
<p>Os que levam preposição, como <i>look after</i> (cuidar de), <i>look for</i> (procurar) ou <i>get along with</i> (se dar bem com), não se separam: <i>look after my cat</i>, <i>look after her</i>.</p>
<div class="tip">Aprenda cada <i>phrasal verb</i> como se fosse uma palavra só, dentro de uma frase de exemplo; assim o lugar do pronome fica natural. Para entender séries e filmes eles são indispensáveis: lá você quase nunca vai ouvir <i>extinguish</i>, mas vai ouvir <i>put out</i> o tempo todo.</div>`},

{ id:"numbers", title:"9 · Números, horas e preços", blurb:"Ponto decimal, vírgula nos milhares, 13 contra 30 e como ler preços, anos e datas.", deck:"Números, horas e datas", body:`
<p>Os números aparecem em toda viagem e em toda reunião. A boa notícia: o inglês também agrupa os algarismos de três em três, como o português. As diferenças estão nos sinais, na sílaba tônica de 13 a 19 e no jeito de ler horas, preços, anos e datas.</p>
<h3>Ponto decimal e vírgula nos milhares</h3>
<p>Em inglês, a casa decimal leva <b>ponto</b> e os milhares levam <b>vírgula</b>: exatamente o contrário do Brasil.</p>
<div class="tbl"><table><tr><th>Em inglês</th><th>No Brasil</th><th>Lê-se</th></tr><tr><td class="k">3.5</td><td>3,5</td><td>three point five</td></tr><tr><td class="k">1,500</td><td>1.500</td><td>one thousand five hundred</td></tr><tr><td class="k">2,000,000</td><td>2.000.000</td><td>two million</td></tr></table></div>
<h3>Billion: aqui não tem pegadinha</h3>
<p>No Brasil, um bilhão são mil milhões, exatamente como o <i>billion</i> do inglês americano. Então <i>billion</i> = bilhão e <i>trillion</i> = trilhão.</p>
<div class="tbl"><table><tr><th>Inglês</th><th>Português</th></tr><tr><td class="k">one thousand (1,000)</td><td>mil</td></tr><tr><td class="k">one million</td><td>um milhão</td></tr><tr><td class="k">one billion</td><td>um bilhão</td></tr><tr><td class="k">one trillion</td><td>um trilhão</td></tr></table></div>
{{ex:three point five|/ˈθriː ˈpɔɪnt ˈfaɪv/|3,5 (três vírgula cinco)}}{{ex:one billion dollars|/ˈwʌn ˈbɪljən ˈdɑːlərz/|um bilhão de dólares}}
<h3>-teen e -ty</h3>
<p>De 13 a 19, a força vai <b>no fim</b> (thir<b>TEEN</b>); em 30, 40, 50…, vai <b>no começo</b> (<b>THIR</b>ty). No inglês americano, o <i>t</i> de <i>thirty</i> costuma soar suave, como o «r» de «caro»: o importante é a força no começo.</p>
{{ex:thirteen / thirty|/ˌθɜːrˈtiːn/ /ˈθɜːrti/|13 / 30}}{{ex:fifteen / fifty|/ˌfɪfˈtiːn/ /ˈfɪfti/|15 / 50}}
<h3>As horas</h3>
<p>O mais fácil é ler a hora e os minutos do jeito que estão. Do minuto 1 ao 9, diz-se «oh».</p>
{{ex:It's seven fifteen.|/ɪts ˈsevn ˌfɪfˈtiːn/|São sete e quinze.}}{{ex:It's nine oh five.|/ɪts ˈnaɪn ˈoʊ ˈfaɪv/|São nove e cinco.}}{{ex:It's a quarter past ten.|/ɪts ə ˈkwɔːrtər pæst ˈten/|São dez e quinze.}}
<h3>Preços, anos e datas</h3>
<p>Preços se leem como dois números: $4.99 é <i>four ninety-nine</i>. Em reais é igual: R$ 50 se lê <i>fifty reais</i> (<i>real</i> no singular, <i>reais</i> no plural). Os anos, de dois em dois: 19 | 90. As datas se escrevem com o mês primeiro (<i>November 15</i>) e se leem com número ordinal (<i>November fifteenth</i>).</p>
{{ex:It's four ninety-nine.|/ɪts ˈfɔːr ˌnaɪnti ˈnaɪn/|Custa 4 dólares e 99.}}{{ex:nineteen ninety|/ˌnaɪnˈtiːn ˈnaɪnti/|o ano de 1990}}{{ex:November fifteenth|/noʊˈvembər ˌfɪfˈtiːnθ/|15 de novembro}}
<div class="tip">Nos EUA, a data curta é <b>mês/dia</b>: 11/5 é 5 de novembro, e não 11 de maio. Se houver risco de confusão, escreva o mês por extenso: <i>November 5</i>.</div>`},

{ id:"email", title:"10 · E-mails em inglês", blurb:"Saudação → objetivo → pedido → encerramento. Curto, claro e sem as fórmulas do português traduzidas.", deck:"Trabalho e e-mail", body:`
<p>Um e-mail de trabalho em inglês é <b>curto, direto e gentil</b>. Em português costumamos usar mais fórmulas («Prezado…», «Segue em anexo…», «Fico no aguardo…»), e traduzidas palavra por palavra elas soam duras ou estranhas. Use as fórmulas próprias do inglês.</p>
<h3>Estrutura básica</h3>
<div class="tbl"><table><tr><th>Parte</th><th>Exemplo</th></tr><tr><td>Saudação</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>Primeira linha (cumprimento e objetivo)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>Corpo (pedido)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>Encerramento</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Despedida</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>Saudação: Hi é o normal</h3>
<p>Em empresas dos EUA, <b>Hi + nome</b> funciona até com alguém para quem você escreve pela primeira vez. <i>Dear</i> fica para casos muito formais, e <i>Dear Sir or Madam</i> é bem menos comum que o nosso «Prezados»: use só se você realmente não souber o nome.</p>
{{ex:I hope this email finds you well.|/aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/|Espero que esteja tudo bem com você.}}{{ex:I'm writing to follow up on our meeting.|/aɪm ˈraɪtɪŋ tə ˈfɑːloʊ ˈʌp ɑːn aʊər ˈmiːtɪŋ/|Escrevo para dar continuidade à nossa reunião.}}
<h3>Fórmulas do português e o equivalente natural</h3>
<div class="tbl"><table><tr><th>Em português</th><th>Em inglês</th></tr><tr><td>Prezado Sr. Souza,</td><td class="k">Dear Mr. Souza, / Hi Carlos,</td></tr><tr><td>Segue em anexo o relatório.</td><td class="k">I've attached the report.</td></tr><tr><td>Fico no aguardo da sua resposta.</td><td class="k">I look forward to hearing from you.</td></tr><tr><td>Fico à disposição para qualquer dúvida.</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>Atenciosamente,</td><td class="k">Best regards,</td></tr></table></div>
<p>Cuidado com «fico aguardando sua resposta»: traduzido ao pé da letra vira <i>I stay waiting your answer</i>, que não existe em inglês.</p>
<h3>Peça com gentileza e dê uma data clara</h3>
{{ex:Could you send me the report by Thursday?|/kəd ju ˈsend mi ðə rɪˈpɔːrt baɪ ˈθɜːrzdeɪ/|Você poderia me enviar o relatório até quinta?}}{{ex:Thanks for your patience.|/ˈθæŋks fər jʊr ˈpeɪʃns/|Agradeço a paciência.}}
<p><i>ASAP</i> pode soar como pressão. Se puder, dê um prazo com <b>by + data</b>.</p>
<div class="tip">Não precisa começar sempre com <i>Sorry for the late reply</i>. <b>Thanks for your patience</b> é gentil e positivo, sem pedir desculpas. E para se despedir numa sexta: <b>Have a great weekend!</b></div>`},

{ id:"idioms", title:"11 · Expressões idiomáticas e gírias", blurb:"Frases que não se entendem palavra por palavra. Quais parecem com o português e quando usá-las.", deck:"Expressões idiomáticas", body:`
<p>Uma expressão idiomática é uma frase cujo sentido não sai das palavras: <i>a piece of cake</i> não fala de bolo, e sim de algo muito fácil (moleza). Se você quer entender séries e filmes sem legenda, precisa delas.</p>
<h3>Imagine a cena</h3>
<p>A maioria fica mais fácil de lembrar se você imaginar a cena.</p>
{{ex:It's a piece of cake.|/ɪts ə ˈpiːs əv ˈkeɪk/|É moleza.}}{{ex:It costs an arm and a leg.|/ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/|Custa os olhos da cara.}}{{ex:I'm all ears.|/aɪm ˈɔːl ˈɪrz/|Sou todo ouvidos.}}
<h3>Parecidas com o português… ou não</h3>
<div class="tbl"><table><tr><th>Inglês</th><th>Português</th></tr><tr><td class="k">Kill two birds with one stone</td><td>Matar dois coelhos com uma cajadada só (em inglês são pássaros e uma pedra: nada de <i>two rabbits</i>!)</td></tr><tr><td class="k">Speak of the devil!</td><td>Falando no diabo! (igualzinho)</td></tr><tr><td class="k">When pigs fly</td><td>Quando as galinhas criarem dentes</td></tr><tr><td class="k">It's raining cats and dogs</td><td>Está chovendo canivetes</td></tr></table></div>
<p>E o contrário: muitas expressões brasileiras <b>não se traduzem ao pé da letra</b>. «Você está tirando com a minha cara» é <i>You're pulling my leg</i>; «não é a minha praia» é <i>It's not my cup of tea</i>. Se você traduzir palavra por palavra, ninguém vai entender.</p>
{{ex:You're pulling my leg.|/jʊr ˈpʊlɪŋ maɪ ˈleg/|Você está tirando com a minha cara.}}
<h3>Expressão idiomática ou gíria</h3>
<p>As <b>expressões idiomáticas</b> existem há muito tempo e todo mundo usa, inclusive no trabalho (<i>Let's call it a day</i>). A <b>gíria</b> (<i>slang</i>) é dos mais jovens e se usa entre amigos (<i>No cap</i>, <i>That song slaps</i>). A gíria muda rápido e, na boca de um adulto, pode soar forçada.</p>
{{ex:Let's call it a day.|/ˈlets ˈkɔːl ɪt ə ˈdeɪ/|Vamos parar por hoje. (Serve numa reunião.)}}{{ex:No cap, this is the best pizza ever.|/ˈnoʊ ˈkæp ˈðɪs ɪz ðə ˈbest ˈpiːtsə ˈevər/|Sério, é a melhor pizza do mundo. (Só entre amigos.)}}
<div class="tip">Não encha o seu inglês de expressões idiomáticas: uma por conversa, na hora certa, causa ótima impressão. Expressões demais soam como livro didático.</div>`}
];

exports.CHECKS = {
  alphabet: [
    ["Qual letra se chama /ˈdʒiː/ em inglês?", ["J","G","Z","C"], 1, "O G se chama /ˈdʒiː/ e rima com E. O J se chama /ˈdʒeɪ/ e rima com A e K: soa quase como o nosso «gê», por isso é fácil trocar os dois."],
    ["Qual está correta?", ["a F","an U","a M","an F"], 3, "O nome do F começa com som de vogal (/ˈef/), então é \"an F\". O M também leva \"an\"; já o U, que soa como \"you\", leva \"a\"."],
    ["Como você pede para alguém soletrar uma palavra?", ["How do you spell that?","How do you spelling that?","How spell you that?","How does it spell?"], 0, "A pergunta leva o auxiliar \"do\" antes de \"you\" e depois o verbo na forma básica: \"How do you spell that?\"."]
  ],
  pron: [
    ["Qual palavra significa «ovelha»?", ["ship","sheep","shape","cheap"], 1, "\"Sheep\" tem o i longo /iː/. Com o i curto /ɪ/, \"ship\" significa «navio»."],
    ["Qual é a pronúncia certa de \"school\"?", ["Com «i» na frente: /ɪˈskuːl/","Com «i» no fim: /ˈskuːli/","Com «u» no lugar do l: /ˈskuːʊ/","Sem vogal na frente nem no fim: /ˈskuːl/"], 3, "Comece direto no s, sem «i» na frente, e termine no l, sem «u» e sem «i»: /ˈskuːl/."],
    ["Onde fica a sílaba tônica de \"comfortable\"?", ["Na última sílaba, como em «confortável»","No meio: /kəmˈfɔːrtəbl/","No começo: /ˈkʌmftərbl/","Não tem sílaba tônica"], 2, "/ˈkʌmftərbl/: a força vai no começo, e a palavra fica com três sílabas."]
  ],
  articles: [
    ["I'm ___ engineer. O que vai na lacuna?", ["a","an","the","(nada)"], 1, "\"Engineer\" começa com som de vogal, então vai \"an\". E com profissões o artigo é obrigatório."],
    ["Como se diz «A vida é dura»?", ["The life is hard.","A life is hard.","Life is hard.","The lives are hard."], 2, "Quando você fala de algo em geral ou abstrato, o inglês não usa artigo: \"Life is hard\"."],
    ["Como se diz «Minha cabeça dói»?", ["The head hurts me.","Me hurts the head.","Hurts my head.","My head hurts."], 3, "Com partes do corpo, o inglês usa o adjetivo possessivo (\"my\", \"your\", \"her\"), não \"the\". E o sujeito vem antes do verbo."]
  ],
  be: [
    ["Como se diz «Tenho 25 anos»?", ["I have 25 years.","I'm 25.","I've 25 years.","I'm having 25."], 1, "A idade se diz com be: \"I'm 25\" (ou \"I'm 25 years old\"). Nunca com \"have\"."],
    ["Como se diz «Minha irmã mora em Lima»?", ["My sister live in Lima.","My sister is live in Lima.","My sister living in Lima.","My sister lives in Lima."], 3, "\"My sister\" equivale a \"she\" (terceira pessoa do singular), então o verbo ganha -s: \"lives\". E sem \"is\"."],
    ["Perguntam \"Are you hungry?\" e você não está com fome. O que você responde?", ["No, I'm not.","No, I don't.","No, I amn't.","No, I haven't."], 0, "A pergunta foi com be, então a resposta é com be: \"No, I'm not\"."]
  ],
  polite: [
    ["Qual é o jeito mais educado de pedir algo a um desconhecido?", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "\"Could you…?\" é o jeito básico de pedir com educação. \"Give me\" soa como ordem."],
    ["Perguntam \"Would you mind opening the window?\" Qual resposta quer dizer «claro, eu abro»?", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "\"Mind\" = se importar. Como em «Você se importa…?», responder «Não» quer dizer que você faz, sim."],
    ["Que forma do verbo vem depois de \"Would you mind\"?", ["Infinitivo sem to (open)","to + infinitivo (to open)","Passado (opened)","Forma -ing (opening)"], 3, "Depois de \"mind\" vem a forma -ing: \"Would you mind waiting?\""]
  ],
  tense: [
    ["Como se diz «Tomo café todas as manhãs» (é um hábito)?", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "Hábitos vão no presente simples. O contínuo quer dizer «estou tomando agora»."],
    ["Você vê que seu amigo está sem dinheiro e decide na hora: «Eu pago!»", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "Uma decisão tomada na hora vai com \"will\". \"Going to\" é para planos que você já tinha."],
    ["Escolha a pergunta correta: «Você foi à festa?»", ["Did you went to the party?","Did you go to the party?","Do you went to the party?","Went you to the party?"], 1, "Nas perguntas sobre o passado, \"did\" já marca o passado: o verbo fica na forma base (\"go\")."]
  ],
  prep: [
    ["«Vamos nos encontrar às 7» = Let's meet ___ 7.", ["in","at","on","to"], 1, "Com hora exata vai \"at\"."],
    ["«Na segunda» = ___ Monday", ["on","in","at","by"], 0, "Com dias e datas vai \"on\", e sem artigo, mesmo que em português você diga «na segunda»."],
    ["Qual é a frase correta?", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "Com \"next\", \"last\", \"this\" e \"every\" não vai preposição."]
  ],
  smalltalk: [
    ["Numa cafeteria, alguém diz \"How are you today?\" Qual é a resposta mais natural?", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "\"How are you?\" é um cumprimento. Responda curto e devolva a pergunta."],
    ["Que pergunta é melhor evitar com alguém que você acabou de conhecer?", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "Em inglês, perguntar a idade de alguém que você acabou de conhecer pode parecer falta de educação."],
    ["Alguém diz \"I don't like horror movies.\" Como dizer «Eu também não»?", ["Me too.","So do I.","Me neither.","Me also."], 2, "«Eu também não» é \"Me neither\" (ou \"Neither do I\"). \"Me too\" é «eu também»."]
  ],
  phrasal: [
    ["«Você pode desligar isso?» Qual é a frase correta?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "O pronome (\"it\") fica no meio do phrasal verb: \"turn it off\"."],
    ["O que significa \"run out of\"?", ["Sair correndo","Ficar sem algo, acabar","Fugir de algum lugar","Chegar tarde"], 1, "\"We ran out of milk.\" = Acabou o leite."],
    ["Como se diz «Vamos adiar a reunião para a semana que vem»?", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "\"Put off\" = adiar. \"Put on\" é «vestir» ou «ligar»; \"put out\", «apagar (um fogo)»."]
  ],
  numbers: [
    ["Como se lê 3.5 em inglês?", ["three comma five","three point five","three and five","thirty-five"], 1, "Em inglês, a casa decimal se escreve e se lê com ponto: \"three point five\"."],
    ["Onde fica a força em \"thirteen\"?", ["Nas duas sílabas por igual","Não tem sílaba tônica","Em teen (no fim)","Em thir (no começo)"], 2, "Os números em -teen têm a força no fim: /ˌθɜːrˈtiːn/. \"Thirty\" tem a força no começo: /ˈθɜːrti/."],
    ["O que significa \"one billion\"?", ["um bilhão","um trilhão","cem milhões","um milhão"], 0, "\"Billion\" = bilhão (mil milhões), como no Brasil. \"Trillion\" é trilhão."]
  ],
  email: [
    ["Você escreve pela primeira vez para Jenny Park, uma cliente. Qual saudação é a mais adequada?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "Em e-mails de trabalho nos EUA, \"Hi\" + nome é o mais seguro. Se o contexto for muito formal: \"Dear Ms. Park,\""],
    ["Como dizer com naturalidade «Fico no aguardo da sua resposta»?", ["I stay waiting your answer.","I look forward to hearing from you.","I wait your response.","I remain attentive."], 1, "\"I look forward to hearing from you\" é a fórmula de sempre. \"I stay waiting your answer\" é «fico aguardando sua resposta» ao pé da letra e soa estranho."],
    ["Qual frase pede um prazo com gentileza?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "\"Could you…?\" + \"by\" + data: é gentil e ao mesmo tempo deixa o prazo claro."]
  ],
  idioms: [
    ["O que significa \"The test was a piece of cake\"?", ["A prova foi moleza.","Comemos bolo durante a prova.","A prova foi dificílima.","Fui muito mal na prova."], 0, "\"A piece of cake\" = moleza."],
    ["O que significa \"I'm feeling under the weather\"?", ["Está fazendo tempo ruim.","Estou ao ar livre.","Não estou me sentindo muito bem.","Me molhei na chuva."], 2, "Não tem nada a ver com o tempo: quer dizer que você não está se sentindo bem."],
    ["Qual frase não combina com a apresentação de um relatório para o chefe?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "\"No cap\" e \"slaps\" são gírias para usar entre amigos. As expressões idiomáticas, sim, se usam no trabalho."]
  ]
};
