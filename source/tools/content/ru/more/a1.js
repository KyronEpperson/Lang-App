/* ru-en stage A1: new lessons for Russian speakers (English side shared with ko-en; runglish is ru-only). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"it-there", title:"It и there: подлежащее нужно всегда", blurb:"Погода и время — с it, а «где-то есть» — с there is / there are.", deck:"Светская беседа", body:`
<p>По-русски можно сказать «Холодно» или «Уже поздно» — совсем без подлежащего. А в «Рядом есть кафе» подлежащее (кафе) стоит в самом конце. В английском место подлежащего в начале предложения не бывает пустым, поэтому его занимают «пустые» слова <b>it</b> и <b>there</b>.</p>
<h3>Погода и время — It</h3>
<p>Здесь <b>it</b> не значит «оно»: это просто подлежащее, которого требует грамматика. «Холодно» — <b>It's cold</b>, а не <b>Is cold</b>.</p>
{{ex:It's cold today.|/ɪts ˈkoʊld təˈdeɪ/|Сегодня холодно}}{{ex:It's three o'clock.|/ɪts ˈθriː əˈklɑːk/|Сейчас три часа}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Идёт дождь}}
<h3>«Где-то есть» — There is / There are</h3>
<p>Один предмет — <b>There is a …</b>, несколько — <b>There are …</b> и множественное число. В разговоре — сокращение <b>There's</b>.</p>
<p>Порядок слов здесь обратный русскому. По-русски новое ставят в конец: «В комнате — стол». Поэтому так и тянет сказать <b>In the room is a table</b>. По-английски сначала <b>there is</b>, потом что, потом где.</p>
{{ex:There's a cafe near here.|/ðerz ə kæˈfeɪ nɪr ˈhɪr/|Рядом есть кафе}}{{ex:There are two rooms.|/ðer ər ˈtuː ˈruːmz/|Есть две комнаты}}{{ex:There's a table in the room.|/ðerz ə ˈteɪbl ɪn ðə ˈruːm/|В комнате стоит стол}}
<h3>Вопрос и отрицание</h3>
{{ex:Is there a bathroom here?|/ɪz ðer ə ˈbæθruːm ˈhɪr/|Здесь есть туалет?}}{{ex:Are there any seats?|/ər ðer ˈeni ˈsiːts/|Есть свободные места?}}{{ex:There isn't a bus today.|/ðer ˈɪznt ə ˈbʌs təˈdeɪ/|Сегодня автобуса нет}}
<h3>Не путать с have</h3>
<p>Что есть у человека — <b>have</b>, что находится в каком-то месте — <b>there is</b>. Русское «есть» покрывает оба случая, английский их различает.</p>
{{ex:I have a car.|/aɪ ˈhæv ə ˈkɑːr/|У меня есть машина}}{{ex:There's a car outside.|/ðerz ə ˈkɑːr ˌaʊtˈsaɪd/|На улице стоит машина}}
<div class="tip">Частые ошибки: <b>Is cold.</b> ✗ → <b>It's cold.</b> ✓ / <b>In the room is a table.</b> ✗ → <b>There's a table in the room.</b> ✓</div>`,
check:[["«Сегодня жарко» по-английски?",["Is hot today.","Today hot.","It's hot today.","There is hot today."],2,"О погоде говорят с it: оно занимает место подлежащего."],["There ___ three people. Что стоит на месте пропуска?",["is","are","have","be"],1,"Людей несколько, поэтому there are."],["«Здесь есть туалет?» по-английски?",["Is there a bathroom here?","Have a bathroom here?","Is it a bathroom here?","There is bathroom here?"],0,"Есть ли что-то где-то, спрашивают так: Is there a …?"]],
practice:[
["mc","«Идёт дождь» по-английски?","It's raining.","Is raining.","There is raining.","Rain is.","О погоде говорят с подлежащим it."],
["mc","«Рядом есть кафе» по-английски?","There's a cafe near here.","It's a cafe near here.","Have a cafe near here.","There are a cafe near here.","Что-то находится где-то — there is; кафе одно, поэтому артикль a."],
["mc","There ___ two rooms.","are","is","have","has","Rooms — множественное число, поэтому are."],
["mc","«Сейчас три часа» по-английски?","It's three o'clock.","There's three o'clock.","Is three o'clock.","Three o'clock is.","Время тоже называют с it."],
["mc","«У меня есть машина» по-английски?","I have a car.","There is a car me.","I am a car.","It's a car me.","Что есть у человека — have."],
["or","Сегодня холодно","It's cold today","There's","О погоде — подлежащее it."],
["or","На улице стоит машина","There's a car outside","cars","Машина одна: артикль a и car без -s, не множественное число."],
["or","Есть два свободных места","There are two seats","seat is","Мест два — are и множественное число seats."],
["fi","__ cold today.","Сегодня холодно","It's|It is","Is|There's|This","Место подлежащего занимает it."],
["fi","There __ a bank near here.","Рядом есть банк","is","are|have|be","Банк один — is."],
["fi","__ there any seats?","Есть свободные места?","Are","Is|Do|Have","Seats — множественное число, поэтому Are."],
["ty","Сегодня жарко","It's hot today","it · hot · today — погода через it","There's","О погоде начинаем с it."],
["ty","Здесь есть туалет?","Is there a bathroom here|Is there a restroom here","is there · bathroom — следи за артиклем","the","Спрашиваем об одном предмете впервые — артикль a."],
["ty","Есть две комнаты","There are two rooms","there are · two · room — множественное число","room","Комнат две — множественное число rooms."]]},

{ id:"plurals", title:"Множественное число, this / these и my / your", blurb:"Больше одного — окончание -s. This — про один предмет, these — про несколько.", deck:"Покупки и оплата", body:`
<p>Множественное число есть и в русском, так что сама идея знакома: <b>book → books</b>, как «книга → книги». Ловушки в другом: исключения, <b>this</b> и <b>these</b>, притяжательный падеж ('s) и произношение окончания.</p>
<h3>Как образуется множественное число</h3>
<div class="tbl"><table><tr><th>Правило</th><th>Пример</th></tr><tr><td>Обычно -s</td><td class="k">book → books</td></tr><tr><td>После s, x, ch, sh — -es</td><td class="k">box → boxes</td></tr><tr><td>Согласная + y → -ies</td><td class="k">city → cities</td></tr><tr><td>Исключения</td><td class="k">man → men · child → children · person → people</td></tr></table></div>
{{ex:two books|/ˈtuː ˈbʊks/|две книги}}{{ex:three boxes|/ˈθriː ˈbɑːksɪz/|три коробки}}{{ex:I have two children.|/aɪ ˈhæv ˈtuː ˈtʃɪldrən/|У меня двое детей}}
<p><b>People</b> — уже множественное число: <b>people are</b>, а не <b>peoples</b> и не <b>people is</b>.</p>
{{ex:People are nice here.|/ˈpiːpl ər ˈnaɪs ˈhɪr/|Люди здесь приветливые}}
<p>Окончание звучит по-разному: <b>books</b> — /s/, <b>keys</b> — /z/, <b>boxes</b> — /ɪz/. Не оглушай /z/: <b>dogs</b> и <b>docks</b> — разные слова.</p>
<h3>This / that — один, these / those — несколько</h3>
{{ex:This is my bag.|/ˈðɪs ɪz maɪ ˈbæg/|Это моя сумка}}{{ex:These are my keys.|/ˈðiːz ər maɪ ˈkiːz/|Это мои ключи}}{{ex:Those shoes are nice.|/ˈðoʊz ˈʃuːz ər ˈnaɪs/|Вон те туфли красивые}}
<h3>My, your, his, her, our, their</h3>
<p>Притяжательное местоимение уже показывает, чей предмет, поэтому артикль рядом с ним не ставят: <b>my bag</b>, а не <b>my a bag</b>.</p>
{{ex:Is this your phone?|/ɪz ˈðɪs jʊr ˈfoʊn/|Это твой телефон?}}{{ex:Her brothers live in Saint Petersburg.|/hər ˈbrʌðərz ˈlɪv ɪn ˈseɪnt ˈpiːtərzbɜːrg/|Её братья живут в Санкт-Петербурге}}
<h3>Притяжательный падеж ('s)</h3>
<p>«Комната моей сестры» — не <b>the room of my sister</b>, а <b>my sister's room</b>: сначала владелец с 's, потом предмет.</p>
{{ex:my sister's room|/maɪ ˈsɪstərz ˈruːm/|комната моей сестры}}
<div class="tip">После чисел больше одного, <b>many</b>, <b>these</b> и <b>those</b> — всегда множественное число: <b>two friend</b> ✗ → <b>two friends</b> ✓. А с <b>my</b> артикль не ставят: <b>my a bag</b> ✗ → <b>my bag</b> ✓</div>`,
check:[["I have two ___. Что стоит на месте пропуска?",["sister","sisters","a sister","sister's"],1,"После two — множественное число: sisters."],["___ are my keys. Что стоит на месте пропуска?",["This","That","These","It"],2,"Keys — множественное число, поэтому These."],["«Это моя сумка» по-английски?",["This is my a bag.","This is a my bag.","This is bag my.","This is my bag."],3,"Вместе с my артикль не ставят."]],
practice:[
["mc","«Две книги» по-английски?","two books","two book","two a book","twos book","Больше одного — множественное число с -s."],
["mc","Множественное число от child?","children","childs","childes","child","Это исключение: children."],
["mc","___ shoes are nice. (вон те туфли)","Those","That","This","It","Shoes — множественное число, поэтому those."],
["mc","«Это моя сумка» по-английски?","This is my bag.","This is a my bag.","This is my a bag.","This is the my bag.","My и артикль вместе не ставят."],
["mc","Множественное число от box?","boxes","boxs","boxies","box","После s, x, ch, sh — окончание -es."],
["or","Это мои ключи","These are my keys","key This","Ключей несколько — these и множественное число keys."],
["or","У меня двое детей","I have two children","child a","Детей двое — множественное число children, артикль a не нужен."],
["or","Вон те туфли красивые","Those shoes are nice","That","Shoes — множественное число, поэтому those."],
["fi","I have three __.","У меня три кошки","cats","cat|a cat|cat's","Кошек три — множественное число cats."],
["fi","__ is my friend.","Это мой друг","This","These|Those|They","Человек один — this."],
["fi","Two __, please.","Два кофе, пожалуйста","coffees","coffee|a coffee|coffee's","Заказывая напитки, их считают: two coffees, во множественном числе."],
["ty","Это мои книги","These are my books","these · my · book — множественное число","book","Книг несколько — these и множественное число books."],
["ty","У меня две сестры","I have two sisters","have · two · sister — множественное число","sister","Сестёр две — множественное число sisters."],
["ty","Это моя сумка","This is my bag","this · my · bag — без артикля","a","С my артикль a не ставят."]]},
{ id:"present", title:"Present Simple и порядок слов: подлежащее, глагол, дополнение", blurb:"В русском слова можно переставлять, в английском порядок жёсткий.", deck:"Рассказ о себе", body:`
<p>По-русски можно сказать «Я пью кофе», «Кофе я пью», «Пью я кофе» — окончания всё равно покажут, кто что делает. В английском падежей нет, поэтому роль слова показывает его место: <b>кто → что делает → что</b>.</p>
<h3>Подлежащее, затем глагол, затем дополнение</h3>
{{ex:I drink coffee.|/aɪ ˈdrɪŋk ˈkɔːfi/|Я пью кофе}}{{ex:I study English.|/aɪ ˈstʌdi ˈɪŋglɪʃ/|Я учу английский}}
<h3>Место и время — в конце</h3>
<p>Всё остальное идёт после дополнения: сначала <b>место</b>, потом <b>время</b>.</p>
{{ex:We live in Moscow.|/wi ˈlɪv ɪn ˈmɑːskaʊ/|Мы живём в Москве}}{{ex:I study English every day.|/aɪ ˈstʌdi ˈɪŋglɪʃ ˈevri ˈdeɪ/|Я учу английский каждый день}}{{ex:They work on weekends.|/ðeɪ ˈwɜːrk ɑːn ˈwiːkendz/|Они работают по выходным}}
<h3>Present Simple — привычки и факты</h3>
<p>Present Simple (простое настоящее) — то, что происходит обычно, и то, что верно всегда. Отрицание — <b>don't</b> перед глаголом; одного <b>not</b> мало: <b>I not eat meat</b> ✗.</p>
{{ex:I don't eat meat.|/aɪ ˈdoʊnt ˈiːt ˈmiːt/|Я не ем мясо}}
<h3>Как часто: always, usually, sometimes, never</h3>
<p>Эти слова стоят <b>прямо перед</b> глаголом (но после am / is / are: <b>I'm always late</b>). А наречия вроде <b>very well</b> — в конце: <b>I understand you very well</b>, а не <b>Very well I understand you</b>.</p>
{{ex:I usually get up at seven.|/aɪ ˈjuːʒuəli ˈget ˈʌp ət ˈsevn/|Обычно я встаю в семь}}{{ex:I never drink coffee at night.|/aɪ ˈnevər ˈdrɪŋk ˈkɔːfi ət ˈnaɪt/|На ночь я никогда не пью кофе}}
<div class="tip">Не переставляй слова, как в русском: <b>Coffee I drink every day.</b> ✗ → <b>I drink coffee every day.</b> ✓ / <b>Very well I understand you.</b> ✗ → <b>I understand you very well.</b> ✓</div>`,
check:[["«Я пью кофе» — какой порядок слов правильный?",["I coffee drink.","Coffee I drink.","I drink coffee.","Drink I coffee."],2,"Подлежащее, затем глагол, затем дополнение."],["I ___ eat meat. (не ем)",["not","am not","no","don't"],3,"Отрицание в Present Simple — don't перед глаголом."],["Где правильно стоит always?",["I always drink tea.","Always I drink tea.","I drink always tea.","I drink tea the always."],0,"Слова частоты ставят прямо перед глаголом."]],
practice:[
["mc","«Я учу английский» по-английски?","I study English.","I English study.","I am study English.","Study I English.","Подлежащее, глагол, дополнение."],
["mc","«Я не ем мясо» по-английски?","I don't eat meat.","I not eat meat.","I'm not eat meat.","I eat not meat.","Отрицание — don't перед глаголом."],
["mc","«Мы живём в Сеуле» по-английски?","We live in Seoul.","We in Seoul live.","We are live in Seoul.","We live Seoul in.","Место — после глагола."],
["mc","«Обычно я встаю в семь» по-английски?","I usually get up at seven.","Usually I get up seven.","I get usually up at seven.","I am usually get up at seven.","Usually — прямо перед глаголом."],
["mc","Какое предложение — о том, что делают каждый день?","I drink coffee every day.","I'm drinking coffee now.","I drank coffee.","I will drink coffee.","Привычка — Present Simple."],
["or","Я пью кофе каждый день","I drink coffee every day","the am","Привычка — Present Simple; кофе вообще — без артикля."],
["or","Я читаю много книг","I read many books","book","После many — множественное число books."],
["or","Мы работаем по выходным","We work on weekends","are","Глагол to be перед другим глаголом не нужен: не we are work."],
["fi","I __ like fish.","Я не люблю рыбу","don't|do not","not|am not|no","Отрицание — don't."],
["fi","I __ English every day.","Я каждый день учу английский","study","am study|studying|to study","В Present Simple глагол стоит в начальной форме."],
["fi","They live __ Busan.","Они живут в Пусане","in","at|on|to","Перед городом — in."],
["ty","Я пью чай","I drink tea","drink · tea — без артикля","a","Чай вообще — без артикля a."],
["ty","Мне нравятся кошки","I like cats","like · cat — множественное число","cat","О животных вообще — множественное число cats."],
["ty","Я не ем мясо","I don't eat meat","don't · eat · meat","am","Отрицание — don't, а не am not."]]},
{ id:"questions", title:"Вопросы: Do you…? и вопросительные слова", blurb:"Одной интонации мало: в начале нужен do, а вопросительное слово идёт первым.", deck:"Самое нужное 2", body:`
<p>По-русски вопрос можно задать одной интонацией: «Ты любишь кофе?» — слова те же, что в утверждении. В английском так звучит удивление или переспрос. Обычный вопрос строится по-другому: меняется <b>порядок слов</b>.</p>
<h3>Глагол to be: меняем местами</h3>
{{ex:Are you okay?|/ər ju oʊˈkeɪ/|Ты в порядке?}}{{ex:Is this your bag?|/ɪz ˈðɪs jʊr ˈbæg/|Это твоя сумка?}}
<h3>Другие глаголы: в начале do</h3>
<p>Если в предложении есть другой глагол, кроме be (<b>like</b>, <b>live</b>, <b>want</b>, <b>speak</b>…), нужен вспомогательный глагол <b>do</b>. Он встаёт в начало, остальное не меняется.</p>
{{ex:Do you like coffee?|/də ju ˈlaɪk ˈkɔːfi/|Ты любишь кофе?}}{{ex:Do you speak English?|/də ju ˈspiːk ˈɪŋglɪʃ/|Ты говоришь по-английски?}}
<p>Короткий ответ — тоже с <b>do</b>: <b>Yes, I do.</b> / <b>No, I don't.</b>, а не <b>Yes, I like</b>.</p>
<h3>Вопросительное слово — первым</h3>
<p><b>what</b> (что), <b>where</b> (где), <b>when</b> (когда), <b>who</b> (кто), <b>why</b> (почему), <b>how</b> (как) ставят в начало, а дальше идёт тот же вопросительный порядок. «Сколько ей лет?» — <b>How old is she?</b>, а не <b>How old she is?</b></p>
{{ex:Where do you live?|/ˈwer də ju ˈlɪv/|Где ты живёшь?}}{{ex:What do you do?|/ˈwʌt də ju ˈduː/|Чем ты занимаешься?}}{{ex:Where is the bathroom?|/ˈwer ɪz ðə ˈbæθruːm/|Где туалет?}}{{ex:How much is this?|/ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/|Сколько это стоит?}}
<p>Внутри другого предложения порядок снова прямой: <b>Tell me where she lives.</b> — «Скажи, где она живёт».</p>
<div class="tip">Частые ошибки: <b>Where you live?</b> ✗ → <b>Where do you live?</b> ✓, <b>Are you like coffee?</b> ✗ → <b>Do you like coffee?</b> ✓</div>`,
check:[["«Ты любишь кофе?» по-английски?",["Are you like coffee?","Do you like coffee?","You do like coffee?","Like you coffee?"],1,"В вопросе с like нужен вспомогательный глагол do."],["«Где ты живёшь?» по-английски?",["Where you live?","Where are you live?","Where do you live?","You live where do?"],2,"Вопросительное слово, do, подлежащее, глагол."],["Как правильно ответить на Do you speak English?",["Yes, I am.","Yes, I speak.","Yes, I does.","Yes, I do."],3,"На вопрос с do отвечают тоже с do."]],
practice:[
["mc","Как сказать «Ты говоришь по-английски?»","Do you speak English?","Are you speak English?","You speak English do?","Speak you English?","Вопрос с глаголом speak начинается с do."],
["mc","«Где ты живёшь?» по-английски?","Where do you live?","Where you live?","Where are you live?","Where live you?","Вопросительное слово, do, подлежащее, глагол."],
["mc","«Сколько это стоит?» по-английски?","How much is this?","How much this is?","How much does this?","What much is this?","Цену спрашивают так: How much is…?"],
["mc","Do you like tea? — как ответить?","Yes, I do.","Yes, I am.","Yes, I like.","Yes, I does.","На вопрос с do отвечают с do."],
["mc","«Чем ты занимаешься?» (о работе) по-английски?","What do you do?","What are you do?","What you do?","What do you?","О профессии спрашивают What do you do?"],
["or","Ты любишь кофе?","Do you like coffee","Are the","Вопрос с like — с do; кофе вообще — без артикля."],
["or","Где туалет?","Where is the bathroom","a do","Речь о конкретном туалете в этом здании — артикль the."],
["or","Где ты живёшь?","Where do you live","are","Вопросу с live нужен вспомогательный глагол do."],
["fi","__ you like music?","Ты любишь музыку?","Do","Are|Is|Does","Вопрос с like — с Do."],
["fi","__ do you live?","Где ты живёшь?","Where","What|Who|When","О месте спрашивают where."],
["fi","What time __ it?","Который час?","is","do|does|are","О времени спрашивают с глаголом to be."],
["ty","Ты говоришь по-английски?","Do you speak English|Can you speak English","do · speak · English","Are","Вопрос с speak начинается с do."],
["ty","Где туалет?","Where is the bathroom|Where is the restroom|Where's the bathroom|Where's the restroom","where · bathroom — артикль the","a","Туалет, о котором оба знают, — артикль the."],
["ty","Тебе нравятся собаки?","Do you like dogs","do · like · dog — множественное число","dog","О животных вообще — множественное число dogs."]]},
{ id:"third-s", title:"He / she / it: окончание -s и does / doesn't", blurb:"Он, она, оно — у глагола окончание -s. В вопросе и отрицании — does.", deck:"Рассказ о себе", body:`
<p>В русском глагол меняется по лицам: «я работаю — он работает». В английском такое изменение одно: в Present Simple после <b>he, she, it</b> (и любого подлежащего в единственном числе: <b>my mom</b>, <b>the cafe</b>) глагол получает окончание <b>-s</b>. Его легко проглотить в речи, поэтому произноси его чётко.</p>
<div class="tbl"><table><tr><th>Подлежащее</th><th>Глагол</th></tr><tr><td>I / you / we / they</td><td class="k">work</td></tr><tr><td>he / she / it / my mom</td><td class="k">works</td></tr></table></div>
{{ex:She works at a bank.|/ʃi ˈwɜːrks ət ə ˈbæŋk/|Она работает в банке}}{{ex:He likes soccer.|/hi ˈlaɪks ˈsɑːkər/|Он любит футбол}}{{ex:My mom cooks well.|/maɪ ˈmɑːm ˈkʊks ˈwel/|Моя мама хорошо готовит}}
<h3>Глаголы, которые меняются чуть сильнее</h3>
{{ex:She has a car.|/ʃi ˈhæz ə ˈkɑːr/|У неё есть машина (have → has)}}{{ex:He goes to work at eight.|/hi ˈgoʊz tə ˈwɜːrk ət ˈeɪt/|Он уходит на работу в восемь (go → goes)}}{{ex:She studies English.|/ʃi ˈstʌdiz ˈɪŋglɪʃ/|Она учит английский (study → studies)}}
<h3>Отрицание и вопрос — does</h3>
<p>С <b>doesn't</b> и <b>Does</b> окончание -s переходит на них, а смысловой глагол остаётся в начальной форме.</p>
{{ex:He doesn't drink coffee.|/hi ˈdʌznt ˈdrɪŋk ˈkɔːfi/|Он не пьёт кофе}}{{ex:Does she live here?|/dəz ʃi ˈlɪv ˈhɪr/|Она здесь живёт?}}
<div class="tip">Частые ошибки: <b>She work here.</b> ✗ → <b>She works here.</b> ✓, <b>Does she works?</b> ✗ → <b>Does she work?</b> ✓</div>`,
check:[["She ___ in Seoul. Что стоит на месте пропуска?",["live","lives","living","is live"],1,"После she глагол получает -s."],["He ___ like coffee. Что стоит на месте пропуска?",["don't","isn't","doesn't","not"],2,"Отрицание с he — doesn't."],["«У неё есть машина» по-английски?",["She has a car.","She have a car.","She haves a car.","She is have a car."],0,"После she have превращается в has."]],
practice:[
["mc","My brother ___ in Busan.","works","work","working","is work","Брат — один человек, поэтому works."],
["mc","«Он не пьёт кофе» по-английски?","He doesn't drink coffee.","He don't drink coffee.","He doesn't drinks coffee.","He isn't drink coffee.","С he — doesn't и начальная форма."],
["mc","«Она здесь живёт?» по-английски?","Does she live here?","Do she live here?","Does she lives here?","Is she live here?","После Does глагол без -s."],
["mc","have → she ___","has","haves","have","is have","Have превращается в has."],
["mc","study → he ___","studies","studys","study","studyes","Согласная + y → -ies."],
["or","Она работает в банке","She works at a bank","work the","После she — works; место работы упоминается впервые — артикль a."],
["or","У него две собаки","He has two dogs","have dog","После he — has; собак две — множественное число dogs."],
["or","Она не ест мясо","She doesn't eat meat","eats","После doesn't — глагол без -s."],
["fi","He __ soccer.","Он любит футбол","likes","like|liking|is like","После he — likes."],
["fi","__ she speak English?","Она говорит по-английски?","Does","Do|Is|Are","Вопрос с she — Does."],
["fi","She __ to work at eight.","Она уходит на работу в восемь","goes","go|going|gos","Go превращается в goes."],
["ty","У него есть машина","He has a car","has · car — артикль a","have","После he — has; машина одна — артикль a."],
["ty","Ей нравятся кошки","She likes cats","likes · cat — множественное число","cat","После she — likes; кошки вообще — множественное число cats."],
["ty","Он здесь не живёт","He doesn't live here","doesn't · live · here","lives","После doesn't — начальная форма глагола."]]},
{ id:"countable", title:"Исчисляемые и неисчисляемые: some, any, much, many", blurb:"Water, advice, news — без a и без -s. Many — с исчисляемыми, much — с неисчисляемыми.", deck:"В ресторане", body:`
<p>Деление на исчисляемые и неисчисляемые есть и в русском: «два стула», но не «две воды». Ловушка в том, что многие слова в двух языках считаются по-разному. «Советы», «новости», «деньги» по-русски стоят во множественном числе. А <b>advice</b>, <b>news</b>, <b>money</b>, <b>information</b> — неисчисляемые: без a, без -s и с глаголом в единственном числе.</p>
<div class="tbl"><table><tr><th>Исчисляемые</th><th>Неисчисляемые</th></tr><tr><td class="k">an apple, two apples</td><td class="k">water, rice, money, time, advice, news</td></tr><tr><td>можно a / an, число, -s</td><td>нельзя a / an, число, -s</td></tr></table></div>
{{ex:The news is good.|/ðə ˈnuːz ɪz ˈgʊd/|Новости хорошие}}
<h3>Some и any</h3>
<p>«Немного, несколько» в утверждении — <b>some</b>, в отрицании и вопросе — <b>any</b>. Но в просьбе и предложении — <b>some</b>, даже в вопросе: <b>Can I have some water?</b></p>
{{ex:I have some money.|/aɪ ˈhæv ˈsʌm ˈmʌni/|У меня есть немного денег}}{{ex:I don't have any money.|/aɪ ˈdoʊnt ˈhæv ˈeni ˈmʌni/|У меня совсем нет денег}}{{ex:Do you have any questions?|/də ju ˈhæv ˈeni ˈkwestʃənz/|У вас есть вопросы?}}
<h3>Many и much</h3>
<p>С исчисляемыми — <b>many</b> и множественное число, с неисчисляемыми — <b>much</b>. <b>A lot of</b> подходит к обоим.</p>
{{ex:How many people?|/ˈhaʊ ˈmeni ˈpiːpl/|Сколько человек?}}{{ex:How much is it?|/ˈhaʊ ˈmʌtʃ ɪz ɪt/|Сколько это стоит?}}{{ex:I don't have much time.|/aɪ ˈdoʊnt ˈhæv ˈmʌtʃ ˈtaɪm/|У меня мало времени}}
<h3>Как посчитать неисчисляемое</h3>
<p>Нужна «упаковка»: стакан, чашка, штука. Один совет — <b>a piece of advice</b>.</p>
{{ex:a glass of water|/ə ˈglæs əv ˈwɔːtər/|стакан воды}}{{ex:a cup of coffee|/ə ˈkʌp əv ˈkɔːfi/|чашка кофе}}{{ex:a piece of advice|/ə ˈpiːs əv ədˈvaɪs/|один совет}}
<div class="tip">Частые ошибки: <b>advices</b>, <b>informations</b>, <b>many money</b> ✗ → <b>advice</b>, <b>information</b>, <b>much money</b> ✓ / <b>The news are bad.</b> ✗ → <b>The news is bad.</b> ✓</div>`,
check:[["How ___ people are there? Что стоит на месте пропуска?",["much","many","any","a"],1,"People — исчисляемое, поэтому many."],["Какое из этих существительных неисчисляемое?",["apple","chair","water","friend"],2,"К water не добавляют ни a, ни -s."],["I don't have ___ money. Что стоит на месте пропуска?",["some","a","many","any"],3,"В отрицании — any."]],
practice:[
["mc","Can I have ___ water?","some","a","many","an","Water — неисчисляемое: ни a, ни many."],
["mc","How ___ time do we have?","much","many","any","a","Time — неисчисляемое, поэтому much."],
["mc","«У вас есть вопросы?» по-английски?","Do you have any questions?","Do you have any question?","Do you have a questions?","Do you have much questions?","После any исчисляемое стоит во множественном числе."],
["mc","«Стакан воды» по-английски?","a glass of water","a water glass of","one waters","a glass water","Неисчисляемое считают через a glass of."],
["mc","I have ___ friends in Seoul.","many","much","a","an","Friends — исчисляемое во множественном числе, поэтому many."],
["or","У меня есть немного денег","I have some money","a moneys","Money — неисчисляемое: без артикля a и без -s."],
["or","Два яблока, пожалуйста","Two apples please","apple","Яблок два — множественное число apples."],
["or","У меня мало времени","I don't have much time","many","Time — неисчисляемое, поэтому much."],
["fi","How __ is this?","Сколько это стоит?","much","many|any|some","Цену спрашивают how much."],
["fi","I don't have __ questions.","У меня нет вопросов","any","some|much|a","В отрицании — any."],
["fi","a cup __ coffee","чашка кофе","of","for|in|a","Считаем через a cup of."],
["ty","Можно мне воды?","Can I have some water|Could I have some water|Can I get some water|Could I get some water","can I have · some · water — без артикля","a","Water — неисчисляемое: вместо артикля a — some."],
["ty","У вас есть вопросы?","Do you have any questions","any · question — множественное число","question","После any исчисляемое — во множественном числе: questions."],
["ty","Сколько человек?","How many people","how many · people","much","People — исчисляемое, поэтому many."]]},
{ id:"object-have", title:"Me, him, her и глагол have", blurb:"После глагола — не I, а me. И have вместо «у меня есть».", deck:"Рассказ о себе", body:`
<p>Падежей в английском почти нет, но у местоимений они сохранились. После глагола или предлога нужна <b>объектная</b> форма: «меня», «мне», «мной» — всё это <b>me</b>.</p>
<div class="tbl"><table><tr><th>Кто делает</th><th>I</th><th>you</th><th>he</th><th>she</th><th>we</th><th>they</th></tr><tr><td>Кого / кому</td><td class="k">me</td><td class="k">you</td><td class="k">him</td><td class="k">her</td><td class="k">us</td><td class="k">them</td></tr></table></div>
{{ex:She knows me.|/ʃi ˈnoʊz mi/|Она меня знает}}{{ex:I like him.|/aɪ ˈlaɪk hɪm/|Он мне нравится}}{{ex:Can you help us?|/kən ju ˈhelp əs/|Ты можешь нам помочь?}}{{ex:I work with her.|/aɪ ˈwɜːrk wɪð hər/|Я работаю с ней}}
<h3>Have: «у меня есть»</h3>
<p>Русское «у меня есть машина» строится от вещи, английское — от человека: <b>I have a car</b>, дословно «я имею машину». Так говорят о семье, вещах и времени.</p>
{{ex:I have two brothers.|/aɪ ˈhæv ˈtuː ˈbrʌðərz/|У меня два брата}}{{ex:Do you have a pen?|/də ju ˈhæv ə ˈpen/|У тебя есть ручка?}}{{ex:I don't have time.|/aɪ ˈdoʊnt ˈhæv ˈtaɪm/|У меня нет времени}}
<h3>Have: есть, пить</h3>
<p><b>Have</b> значит ещё и «есть, пить, обедать». Перед названием приёма пищи артикль не ставят: <b>have lunch</b>.</p>
{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|Давай пообедаем}}{{ex:I have coffee every morning.|/aɪ ˈhæv ˈkɔːfi ˈevri ˈmɔːrnɪŋ/|Я пью кофе каждое утро}}
<h3>Предметы — it</h3>
<p>«Телефон — он», «книга — она» — это русский род. В английском любой предмет — <b>it</b>.</p>
{{ex:My phone is old. It doesn't work.|/maɪ ˈfoʊn ɪz ˈoʊld ‖ ɪt ˈdʌznt ˈwɜːrk/|Мой телефон старый. Он не работает}}
<div class="tip">Частые ошибки: <b>She knows I.</b> ✗ → <b>She knows me.</b> ✓, <b>I am two brothers.</b> ✗ → <b>I have two brothers.</b> ✓, о телефоне <b>He doesn't work.</b> ✗ → <b>It doesn't work.</b> ✓</div>`,
check:[["I like ___. (его)",["he","his","him","he's"],2,"После глагола — объектная форма him."],["Can you help ___? (нам)",["us","we","our","ours"],0,"После глагола — объектная форма us."],["«У тебя есть ручка?» по-английски?",["Are you have a pen?","Do you have a pen?","Have you a pen is?","Do you has a pen?"],1,"Have — не глагол to be, поэтому вопрос строится со вспомогательным глаголом do."]],
practice:[
["mc","She knows ___. (меня)","me","I","my","mine","После глагола — me."],
["mc","I like ___. (их)","them","they","their","theirs","После глагола — объектная форма them."],
["mc","«Ты можешь нам помочь?» по-английски?","Can you help us?","Can you help we?","Can you help our?","Can us help you?","После глагола — us."],
["mc","«Давай пообедаем» по-английски?","Let's have lunch.","Let's have a lunch.","Let's has lunch.","Let's lunch have.","Перед названием приёма пищи артикль не ставят."],
["mc","«У меня два брата» по-английски?","I have two brothers.","I have two brother.","I am two brothers.","There are two brothers me.","О семье говорят с have; братьев два — множественное число."],
["or","У тебя есть ручка?","Do you have a pen","the pens","Подойдёт любая ручка, одна — артикль a и pen без -s."],
["or","Она мне нравится","I like her","she","После глагола — объектная форма her."],
["or","У меня две сестры","I have two sisters","sister a","Сестёр две — множественное число sisters, артикль a не нужен."],
["fi","Call __ tonight.","Позвони мне сегодня вечером","me","I|my|mine","После глагола — me."],
["fi","I work with __.","Я работаю с ним","him","he|his|he's","После предлога — тоже объектная форма."],
["fi","She __ a dog.","У неё есть собака","has","have|is|haves","После she — has."],
["ty","Ты можешь мне помочь?","Can you help me|Could you help me","can you · help · me","I","После глагола — me."],
["ty","У тебя есть ручка?","Do you have a pen","do you have · pen — артикль a","the","Нужна любая ручка — артикль a."],
["ty","У меня много друзей","I have many friends|I have a lot of friends","have · many · friend — множественное число","friend","После many — множественное число friends."]]},
{ id:"can-like", title:"Can, like + -ing и I'd like: что умеешь и чего хочешь", blurb:"Как сказать, что умеешь, что любишь делать и чего хочешь прямо сейчас.", deck:"Светская беседа", body:`
<p>Три конструкции, которые пригодятся сразу — и чтобы рассказать о себе, и чтобы сделать заказ.</p>
<h3>Can: умею, могу</h3>
<p><b>can</b> + начальная форма. После <b>he</b> и <b>she</b> окончание -s не добавляют: <b>he can swim</b>.</p>
{{ex:I can swim.|/aɪ kən ˈswɪm/|Я умею плавать}}{{ex:I can't drive.|/aɪ ˈkænt ˈdraɪv/|Я не умею водить}}{{ex:Can you speak Russian?|/kən ju ˈspiːk ˈrʌʃn/|Ты говоришь по-русски?}}
<h3>Like + -ing: люблю что-то делать</h3>
<p>О хобби говорят так: <b>like</b> / <b>love</b> + глагол с окончанием -ing. В русском «мне нравится» подлежащее — то, что нравится, а человек стоит в форме «мне». В английском подлежащее — сам человек: <b>I like cooking</b>.</p>
{{ex:I like cooking.|/aɪ ˈlaɪk ˈkʊkɪŋ/|Я люблю готовить}}{{ex:I love watching movies.|/aɪ ˈlʌv ˈwɑːtʃɪŋ ˈmuːviz/|Обожаю смотреть фильмы}}{{ex:I don't like running.|/aɪ ˈdoʊnt ˈlaɪk ˈrʌnɪŋ/|Я не люблю бегать}}
<p>«Очень нравится» — не <b>I very like</b>: <b>very</b> перед глаголом не ставят. Говорят <b>I really like it</b> или <b>I like it very much</b>.</p>
{{ex:I really like it.|/aɪ ˈriːəli ˈlaɪk ɪt/|Мне очень нравится}}
<h3>I'd like: хочу, будьте добры</h3>
<p><b>I like</b> — «люблю вообще», <b>I'd like</b> — «хотел бы сейчас», вежливо. В кафе нужно именно <b>I'd like</b>.</p>
{{ex:I'd like a coffee, please.|/aɪd ˈlaɪk ə ˈkɔːfi ˈpliːz/|Мне кофе, пожалуйста}}{{ex:Would you like some tea?|/wəd ju ˈlaɪk ˈsʌm ˈtiː/|Хотите чаю?}}
<div class="tip">Частые ошибки: <b>He can swims.</b> ✗ → <b>He can swim.</b> ✓, в кафе <b>I like a coffee.</b> ✗ → <b>I'd like a coffee.</b> ✓, <b>I very like it.</b> ✗ → <b>I really like it.</b> ✓</div>`,
check:[["She can ___ very well. Что стоит на месте пропуска?",["sings","sing","singing","to sing"],1,"После can — начальная форма."],["«Я люблю готовить» по-английски?",["I like cook.","I'd like cook.","I like to cooking.","I like cooking."],3,"После like — -ing-форма."],["Что естественнее всего сказать, делая заказ в кафе?",["I'd like a coffee, please.","I like a coffee.","I can a coffee.","Give me coffee."],0,"То, чего хочешь сейчас, — I'd like."]],
practice:[
["mc","He can ___ Korean.","speak","speaks","speaking","to speak","После can — начальная форма."],
["mc","«Я не умею водить» по-английски?","I can't drive.","I don't can drive.","I can't driving.","I'm not can drive.","Отрицание от can — can't."],
["mc","«Я люблю смотреть фильмы» по-английски?","I like watching movies.","I like watch movies.","I like watching movie.","I'd like watch movies.","После like — -ing; фильмы вообще — множественное число movies."],
["mc","Заказ в кафе: «Мне кофе, пожалуйста»","I'd like a coffee, please.","I like a coffee, please.","I'd like coffee a, please.","I like coffees.","То, чего хочешь сейчас, — I'd like."],
["mc","«Хотите чаю?» по-английски?","Would you like some tea?","Do you like some tea?","Would you like a tea some?","Are you like tea?","Предлагая, говорят Would you like…?"],
["or","Мне чашку кофе, пожалуйста","I'd like a coffee please","the coffees","Одна чашка — артикль a и coffee без -s."],
["or","Я люблю читать книги","I like reading books","book read","После like — -ing; книги вообще — множественное число books."],
["or","Ты умеешь плавать?","Can you swim","swimming","После can — начальная форма."],
["fi","I can't __.","Я не умею плавать","swim","swimming|swims|to swim","После can't — начальная форма."],
["fi","I like __ music.","Я люблю слушать музыку","listening to","listen to|listen|to listening","После like — -ing."],
["fi","__ like a sandwich, please.","Мне сэндвич, пожалуйста","I'd|I would","I|I'm|I can","Заказ — с I'd like."],
["ty","Я люблю готовить","I like cooking|I love cooking|I like to cook","like · cook — с окончанием -ing","cook","После like — -ing."],
["ty","Мне сэндвич, пожалуйста","I'd like a sandwich|I'd like a sandwich please|Can I have a sandwich|Can I get a sandwich|Could I have a sandwich|Could I get a sandwich","I'd like · sandwich — артикль a","the","Любой сэндвич, один — артикль a."],
["ty","Я люблю собак","I like dogs|I love dogs","like · dog — множественное число","dog","Собаки вообще — множественное число dogs."]]},
{ id:"continuous", title:"Present Continuous: be + -ing — то, что идёт сейчас", blurb:"Обычное — Present Simple, то, что происходит прямо сейчас, — be + -ing.", deck:"Светская беседа", body:`
<p>«Я читаю» по-русски — это и «читаю по вечерам», и «читаю прямо сейчас». В английском это два разных времени. То, что происходит <b>в этот момент</b>, — Present Continuous: <b>be + глагол с -ing</b>.</p>
{{ex:I'm working now.|/aɪm ˈwɜːrkɪŋ ˈnaʊ/|Я сейчас работаю}}{{ex:She's cooking dinner.|/ʃiz ˈkʊkɪŋ ˈdɪnər/|Она готовит ужин}}{{ex:It's raining.|/ɪts ˈreɪnɪŋ/|Идёт дождь}}
<h3>Вопрос и отрицание</h3>
{{ex:What are you doing?|/ˈwʌt ər ju ˈduːɪŋ/|Что ты делаешь?}}{{ex:Are you listening?|/ər ju ˈlɪsənɪŋ/|Ты слушаешь?}}{{ex:I'm not sleeping.|/aɪm ˈnɑːt ˈsliːpɪŋ/|Я не сплю}}
<h3>Сравни с Present Simple</h3>
<div class="tbl"><table><tr><th>Обычно (Present Simple)</th><th>Сейчас (be + -ing)</th></tr><tr><td class="k">I work every day.</td><td class="k">I'm working now.</td></tr><tr><td class="k">She drinks tea.</td><td class="k">She's drinking tea.</td></tr></table></div>
<h3>Глаголы без -ing</h3>
<p><b>like</b>, <b>know</b>, <b>want</b>, <b>need</b>, <b>understand</b> и <b>have</b> в значении «иметь» описывают <b>состояние</b>, а не действие. Даже о том, что происходит сейчас, с ними говорят в Present Simple: «Понимаю» — <b>I understand</b>, а не <b>I'm understanding</b>.</p>
{{ex:I know him.|/aɪ ˈnoʊ hɪm/|Я его знаю}}{{ex:I want some water.|/aɪ ˈwɑːnt ˈsʌm ˈwɔːtər/|Я хочу воды}}
<div class="tip">Не забывай глагол to be: <b>I working.</b> ✗ → <b>I'm working.</b> ✓ / <b>I'm knowing.</b> ✗ → <b>I know.</b> ✓</div>`,
check:[["«Что ты сейчас делаешь?» по-английски?",["What do you do now?","What are you doing?","What you doing are?","What are you do?"],1,"О том, что происходит сейчас, спрашивают с be + -ing."],["I ___ coffee every morning. Что стоит на месте пропуска?",["am drinking","drinking","drink","am drink"],2,"Привычка — Present Simple."],["Какое предложение правильное?",["I'm knowing him.","I'm wanting coffee.","I'm having a car.","I'm reading a book."],3,"Know, want и have в значении «иметь» не употребляют с -ing."]],
practice:[
["mc","«Я сейчас работаю» по-английски?","I'm working now.","I work now am.","I'm work now.","I working now.","То, что идёт сейчас, — be + -ing."],
["mc","«Она готовит ужин» по-английски?","She's cooking dinner.","She cooking dinner.","She's cook dinner.","She's cooking a dinner.","be + -ing; перед названием приёма пищи артикль не нужен."],
["mc","Какое предложение — о том, что делают каждый день?","I walk to work every day.","I'm walking to work every day.","I walking to work every day.","I'm walk to work every day.","Привычка — Present Simple."],
["mc","«Что ты делаешь?» по-английски?","What are you doing?","What do you doing?","What are you do?","What you are doing?","Вопросительное слово, be, подлежащее, -ing."],
["mc","«Я его знаю» по-английски?","I know him.","I'm knowing him.","I knowing him.","I'm know him.","Know не употребляют с -ing."],
["or","Я читаю книгу","I'm reading a book","read books","Одна книга, которую читаю сейчас, — артикль a и book без -s."],
["or","Дети играют","The kids are playing","kid is","Детей несколько — множественное число kids и are."],
["or","Сейчас идёт дождь","It's raining now","rains","То, что происходит сейчас, — be + -ing."],
["fi","I'm __ TV.","Я смотрю телевизор","watching","watch|watches|to watch","После be — -ing."],
["fi","What __ you doing?","Что ты делаешь?","are","do|is|does","С you — are."],
["fi","She __ working today.","Она сегодня не работает","isn't|is not","doesn't|don't|not","Отрицание в be + -ing — isn't."],
["ty","Я сейчас готовлю","I'm cooking now|I'm cooking|I'm cooking right now","I'm · cook · now — с окончанием -ing","cook","То, что идёт сейчас, — be + -ing."],
["ty","Я смотрю фильм","I'm watching a movie","I'm · watching · movie — артикль a","the","Какой-то один фильм — артикль a."],
["ty","Дети спят","The kids are sleeping|The children are sleeping","kids · are · sleeping — множественное число","kid","Детей несколько — множественное число kids и are."]]},
{ id:"past", title:"Past Simple: was / were и -ed", blurb:"У глагола to be — was и were, у остальных — -ed. В вопросе и отрицании — did.", deck:"Светская беседа", body:`
<p>В русском одно прошедшее время, а «сделал» и «делал» различаются видом. В английском и «работал», и «поработал» чаще всего передаёт Past Simple: <b>I worked</b>. Вид глагола время не выбирает.</p>
<h3>Глагол to be: was / were</h3>
<p><b>I</b>, <b>he</b>, <b>she</b>, <b>it</b> — <b>was</b>; <b>you</b>, <b>we</b>, <b>they</b> — <b>were</b>.</p>
{{ex:I was tired.|/aɪ wəz ˈtaɪərd/|Я устал}}{{ex:It was fun.|/ɪt wəz ˈfʌn/|Было весело}}{{ex:We were at home.|/wi wər ət ˈhoʊm/|Мы были дома}}{{ex:Were you busy?|/wər ju ˈbɪzi/|Ты был занят?}}
<h3>Остальные глаголы: -ed</h3>
<p>К глаголу добавляется <b>-ed</b>, форма одна для всех лиц. Звучит окончание по-разному: <b>worked</b> — /t/, <b>called</b> — /d/, <b>wanted</b> — /ɪd/. В <b>played</b> на конце звонкий /d/ — не оглушай его.</p>
{{ex:I worked yesterday.|/aɪ ˈwɜːrkt ˈjestərdeɪ/|Я вчера работал}}{{ex:We watched a movie.|/wi ˈwɑːtʃt ə ˈmuːvi/|Мы посмотрели фильм}}{{ex:She called me.|/ʃi ˈkɔːld mi/|Она мне позвонила}}
<h3>Отрицание и вопрос — did</h3>
<p>С <b>didn't</b> и <b>Did</b> прошедшее время показывает <b>did</b>, а глагол возвращается в начальную форму.</p>
{{ex:I didn't work yesterday.|/aɪ ˈdɪdnt ˈwɜːrk ˈjestərdeɪ/|Я вчера не работал}}{{ex:Did you call me?|/dɪd ju ˈkɔːl mi/|Ты мне звонил?}}
<div class="tip">Частые ошибки: <b>I didn't worked.</b> ✗ → <b>I didn't work.</b> ✓, <b>I was work.</b> ✗ → <b>I worked.</b> ✓</div>`,
check:[["They ___ at home yesterday. Что стоит на месте пропуска?",["was","were","did","are"],1,"С they — were."],["«Я вчера не работал» по-английски?",["I didn't worked yesterday.","I wasn't work yesterday.","I didn't work yesterday.","I not worked yesterday."],2,"После didn't — начальная форма."],["Did you ___ the movie? Что стоит на месте пропуска?",["watch","watched","watching","watches"],0,"После Did — начальная форма."]],
practice:[
["mc","I ___ tired yesterday.","was","were","did","am","С I — was."],
["mc","«Мы посмотрели фильм» по-английски?","We watched a movie.","We watch a movie yesterday.","We were watch a movie.","We did watched a movie.","Прошедшее время правильного глагола — -ed."],
["mc","«Ты вчера звонил?» по-английски?","Did you call yesterday?","Did you called yesterday?","Were you call yesterday?","Do you called yesterday?","После Did — начальная форма."],
["mc","«Было весело» по-английски?","It was fun.","It were fun.","It did fun.","It funned.","С it — was."],
["mc","«Ты был занят?» по-английски?","Were you busy?","Did you busy?","Was you busy?","Were you busied?","Busy — прилагательное, другого глагола нет, поэтому вопрос с глаголом to be."],
["or","Мы посмотрели фильм","We watched a movie","watch movies","Один фильм — артикль a и movie без -s."],
["or","Я играл с друзьями","I played with my friends","friend play","Друзей несколько — множественное число friends."],
["or","Я вчера не работал","I didn't work yesterday","worked","После didn't — начальная форма."],
["fi","We __ at home last night.","Вчера вечером мы были дома","were","was|did|are","С we — were."],
["fi","I __ soccer yesterday.","Вчера я играл в футбол","played","play|playing|was play","Прошедшее время — -ed."],
["fi","__ you work yesterday?","Ты вчера работал?","Did","Were|Do|Was","Вопрос в прошедшем времени — Did."],
["ty","Я устал (о прошлом)","I was tired","was · tired","were","С I — was."],
["ty","Я посмотрел фильм (watch)","I watched a movie","watched · movie — артикль a","the","Один фильм — артикль a."],
["ty","Я позвонил друзьям","I called my friends","called · my · friend — множественное число","friend","Друзей несколько — множественное число friends."]]},
{ id:"irregular-past", title:"Неправильные глаголы: went, ate, saw", blurb:"Самые частые глаголы — неправильные. Начнём с двенадцати.", deck:"Светская беседа", body:`
<p>Со школы знакомы «три формы глагола». Здесь нужна вторая — для Past Simple. У самых частых глаголов она <b>неправильная</b>, поэтому их учат парами.</p>
<div class="tbl"><table><tr><th>Начальная форма</th><th>Past Simple</th><th>Начальная форма</th><th>Past Simple</th></tr><tr><td class="k">go</td><td class="k">went</td><td class="k">make</td><td class="k">made</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">come</td><td class="k">came</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">buy</td><td class="k">bought</td></tr><tr><td class="k">have</td><td class="k">had</td><td class="k">meet</td><td class="k">met</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">take</td><td class="k">took</td></tr><tr><td class="k">get</td><td class="k">got</td><td class="k">say</td><td class="k">said</td></tr></table></div>
{{ex:I went to Saint Petersburg.|/aɪ ˈwent tə ˈseɪnt ˈpiːtərzbɜːrg/|Я съездил в Санкт-Петербург}}{{ex:We ate pizza.|/wi ˈeɪt ˈpiːtsə/|Мы ели пиццу}}{{ex:I saw a movie.|/aɪ ˈsɔː ə ˈmuːvi/|Я посмотрел фильм}}{{ex:I met my friends.|/aɪ ˈmet maɪ ˈfrendz/|Я встретился с друзьями}}{{ex:I bought a book.|/aɪ ˈbɔːt ə ˈbʊk/|Я купил книгу}}
<h3>В вопросе и отрицании — начальная форма</h3>
<p>Прошедшее время уже показывает <b>did</b>, поэтому глагол возвращается в начальную форму.</p>
{{ex:What did you do?|/ˈwʌt dɪd ju ˈduː/|Что ты делал?}}{{ex:Where did you go?|/ˈwer dɪd ju ˈgoʊ/|Куда ты ходил?}}{{ex:I didn't go.|/aɪ ˈdɪdnt ˈgoʊ/|Я не пошёл}}
<div class="tip">Частые ошибки: <b>I goed.</b> ✗ → <b>I went.</b> ✓, <b>Did you went?</b> ✗ → <b>Did you go?</b> ✓</div>`,
check:[["Past Simple от go?",["goed","gone","went","going"],2,"Прошедшее время от go — went."],["«Что ты делал?» по-английски?",["What did you do?","What did you did?","What you did?","What were you do?"],0,"После did — начальная форма do."],["I didn't ___ breakfast. Что стоит на месте пропуска?",["ate","eaten","eats","eat"],3,"После didn't — начальная форма."]],
practice:[
["mc","Past Simple от eat?","ate","eated","eat","eaten","Прошедшее время от eat — ate."],
["mc","«Куда ты ходил?» по-английски?","Where did you go?","Where did you went?","Where you went?","Where were you go?","После did — начальная форма."],
["mc","«Я купил книгу» по-английски?","I bought a book.","I buyed a book.","I bought book.","I did bought a book.","Buy — bought; книга одна — артикль a."],
["mc","Past Simple от see?","saw","seed","seen","sawed","Прошедшее время от see — saw."],
["mc","«Я не пошёл» по-английски?","I didn't go.","I didn't went.","I wasn't go.","I not went.","После didn't — начальная форма."],
["or","Я посмотрел фильм","I saw a movie","see movies","See — saw; фильм один — артикль a и movie без -s."],
["or","Мы ели пиццу","We ate pizza","eated","Прошедшее время от eat — ate."],
["or","Я встретился с друзьями","I met my friends","friend meet","Друзей несколько — множественное число friends."],
["fi","I __ to Jeju last year.","В прошлом году я ездил на Чеджу","went","go|goed|gone","Прошедшее время от go — went."],
["fi","What did you __?","Что ты ел?","eat","ate|eaten|eating","После did — начальная форма."],
["fi","She __ a new phone.","Она купила новый телефон","bought","buyed|buy|buys","Прошедшее время от buy — bought."],
["ty","Я ездил в Пусан","I went to Busan","went · to · Busan","go","Прошедшее время от go — went."],
["ty","Я купил книгу","I bought a book","bought · book — артикль a","the","Книга одна — артикль a."],
["ty","Я встретился с друзьями","I met my friends|I saw my friends","met · my · friend — множественное число","friend","Друзей несколько — множественное число friends."]]},
{ id:"the", title:"Снова the: когда ставить и когда не ставить", blurb:"Впервые — a, уже знакомое — the, а о чём-то вообще — без артикля.", deck:"Дорога и транспорт", body:`
<p>Артикли не усваиваются с одного раза. Ошибаются здесь в обе стороны почти одинаково часто: пропускают артикль там, где он нужен, и ставят лишний там, где его быть не должно. Поэтому здесь — и когда нужен <b>the</b>, и когда <b>артикля нет совсем</b>.</p>
<h3>Впервые — a, второй раз — the</h3>
<p>Если слушатель слышит о предмете впервые — <b>a</b>. Если о нём уже сказали и понятно, о каком речь, — <b>the</b>.</p>
{{ex:I bought a shirt. The shirt is blue.|/aɪ ˈbɔːt ə ˈʃɜːrt ‖ ðə ˈʃɜːrt ɪz ˈbluː/|Я купил рубашку. Рубашка синяя}}
<h3>Понятно из ситуации — the</h3>
<p>Окно в этой комнате, станция рядом, солнце — оба собеседника знают, о чём речь, поэтому <b>the</b> ставят сразу. «Солнце сегодня печёт» — <b>The sun is hot today</b>, а не <b>Sun is hot</b>. При этом <b>the</b> — не перевод слова «этот»: он просто показывает, что предмет известен.</p>
{{ex:Can you open the window?|/kən ju ˈoʊpən ðə ˈwɪndoʊ/|Можешь открыть окно?}}{{ex:Where's the subway station?|/ˈwerz ðə ˈsʌbweɪ ˈsteɪʃn/|Где станция метро?}}{{ex:The sun is hot today.|/ðə ˈsʌn ɪz ˈhɑːt təˈdeɪ/|Сегодня солнце печёт}}
<h3>Без артикля</h3>
<p>Обратная ошибка — лишний <b>the</b>. Артикль не нужен, когда говорят о чём-то вообще (<b>I like music</b>, <b>Life is short</b>), с большинством стран и городов (<b>in Russia</b>, <b>in France</b>, а не <b>the France</b>) и в устойчивых выражениях про место, транспорт и еду — их учат целиком.</p>
{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|Я люблю музыку}}{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|Жизнь коротка}}{{ex:I go to work by bus.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈbʌs/|Я езжу на работу на автобусе}}{{ex:I'm at home.|/aɪm ət ˈhoʊm/|Я дома}}{{ex:I go to bed at eleven.|/aɪ ˈgoʊ tə ˈbed ət ɪˈlevn/|Я ложусь спать в одиннадцать}}
<div class="tip">Спроси себя: «Знает ли слушатель, <b>какой именно</b> предмет?» Знает — <b>the</b>, не знает — <b>a</b>. Речь о чём-то вообще — без артикля.</div>`,
check:[["I have a cat. ___ cat is white. Что стоит на месте пропуска?",["A","An","The","(ничего)"],2,"Кошка уже упомянута — артикль the."],["I go to ___ work by bus. Что стоит на месте пропуска?",["a","the","an","(ничего)"],3,"В go to work артикль не ставят."],["Как попросить открыть окно в этой комнате?",["Can you open a window?","Can you open the window?","Can you open window?","Can you open an window?"],1,"Окно, о котором оба знают, — артикль the."]],
practice:[
["mc","I bought a shirt. ___ shirt is blue.","The","A","An","Some","Рубашка уже упомянута — артикль the."],
["mc","«Где станция?» (та, что поблизости) по-английски?","Where's the station?","Where's a station?","Where's station?","Where the station?","Станция поблизости, о которой оба знают, — артикль the."],
["mc","Какое предложение правильное?","I go to work by bus.","I go to the work by the bus.","I go to a work by bus.","I go to work by a bus.","В go to work и by bus артикля нет."],
["mc","«Солнце жаркое» по-английски?","The sun is hot.","A sun is hot.","Sun is hot.","The suns is hot.","С тем, что существует в единственном экземпляре, — артикль the."],
["mc","«Я дома» по-английски?","I'm at home.","I'm at the home.","I'm at a home.","I'm home at.","В at home артикля нет."],
["or","Можешь открыть окно?","Can you open the window","a windows","Окно, о котором оба знают, — артикль the."],
["or","Я езжу на работу на автобусе","I go to work by bus","the a","В go to work и by bus артикль не ставят."],
["or","Собака, про которую я рассказывал, большая","The dog is big","A dogs","Собака уже знакома — артикль the."],
["fi","I saw a movie. __ movie was great.","Я посмотрел фильм. Фильм был отличный","The","A|An|Some","Фильм уже упомянут — артикль the."],
["fi","Where's __ bathroom?","Где туалет?","the","a|an|some","Туалет в этом здании — артикль the."],
["fi","I have __ idea.","У меня есть идея","an","a|the|some","Идея новая, и слово начинается с гласного звука — an."],
["ty","Можешь закрыть дверь?","Can you close the door|Could you close the door","can you · close · door — артикль the","a","Дверь, о которой оба знают, — артикль the."],
["ty","Где станция? (та, что поблизости)","Where is the station|Where's the station","where · station — артикль the","a","Станция поблизости, о которой оба знают, — артикль the."],
["ty","Я дома","I'm at home|I'm home","I'm · at · home — без артикля","the","Перед home артикль не ставят."]]},
{ id:"adjectives", title:"Прилагательные и сравнение: bigger, more expensive, the best", blurb:"Прилагательное — перед существительным. Сравнение — -er или more, «самый» — the -est или the most.", deck:"Покупки и оплата", body:`
<p>Прилагательное стоит <b>перед</b> существительным, как в русском, или <b>после</b> глагола to be. «Сумка большая» — <b>The bag is big</b>: без <b>is</b> нельзя.</p>
{{ex:a big bag|/ə ˈbɪg ˈbæg/|большая сумка}}{{ex:This bag is big.|/ˈðɪs ˈbæg ɪz ˈbɪg/|Эта сумка большая}}{{ex:It's too small.|/ɪts ˈtuː ˈsmɔːl/|Он слишком маленький}}
<h3>Сравнение: -er или more</h3>
<p>Короткие слова получают <b>-er</b>, перед длинными ставят <b>more</b>. «Чем» — <b>than</b>. Двойное сравнение, как в просторечном «более дешевле», невозможно: <b>more cheaper</b> ✗.</p>
<div class="tbl"><table><tr><th>Исходная форма</th><th>Сравнительная степень</th><th>Превосходная степень</th></tr><tr><td class="k">cheap</td><td class="k">cheaper</td><td class="k">the cheapest</td></tr><tr><td class="k">big</td><td class="k">bigger</td><td class="k">the biggest</td></tr><tr><td class="k">expensive</td><td class="k">more expensive</td><td class="k">the most expensive</td></tr><tr><td class="k">good</td><td class="k">better</td><td class="k">the best</td></tr><tr><td class="k">bad</td><td class="k">worse</td><td class="k">the worst</td></tr></table></div>
{{ex:This one is cheaper.|/ˈðɪs ˈwʌn ɪz ˈtʃiːpər/|Этот дешевле}}{{ex:It's more expensive than that one.|/ɪts ˈmɔːr ɪkˈspensɪv ðən ˈðæt ˈwʌn/|Он дороже, чем тот}}{{ex:Do you have a bigger size?|/də ju ˈhæv ə ˈbɪgər ˈsaɪz/|У вас есть размер побольше?}}
<p>После <b>than</b> в разговоре говорят <b>me</b> или <b>I am</b>: <b>She's taller than me</b>. А <b>enough</b> ставят после прилагательного: <b>big enough</b>, а не <b>enough big</b>.</p>
<h3>Превосходная степень — с the</h3>
{{ex:This is the best restaurant here.|/ˈðɪs ɪz ðə ˈbest ˈrestərɑːnt ˈhɪr/|Это лучший ресторан в округе}}{{ex:Which is the cheapest?|/ˈwɪtʃ ɪz ðə ˈtʃiːpɪst/|Какой самый дешёвый?}}
<div class="tip">Частые ошибки: <b>more cheaper</b>, <b>more good</b> ✗ → <b>cheaper</b>, <b>better</b> ✓. <b>-er</b> и <b>more</b> вместе не ставят.</div>`,
check:[["Сравнительная степень от big?",["more big","biger","bigger","most big"],2,"big — короткое слово, поэтому -er. Оно кончается на одну гласную + одну согласную, поэтому g удваивается: bigger (а в cheap гласных две: cheaper)."],["This is ___ expensive than that. Что стоит на месте пропуска?",["more","most","much","very"],0,"У длинного слова сравнительная степень — с more."],["Превосходная степень от good?",["the goodest","the most good","the better","the best"],3,"Три степени: good — better — the best."]],
practice:[
["mc","Сравнительная степень от cheap?","cheaper","more cheap","cheapper","most cheap","Короткое слово — -er."],
["mc","«Этот дороже» по-английски?","This is more expensive.","This is expensiver.","This is most expensive.","This more expensive is.","Перед длинным словом — more."],
["mc","«У вас есть размер побольше?» по-английски?","Do you have a bigger size?","Do you have bigger a size?","Do you have a more big size?","Do you have a size bigger than?","Порядок: артикль, прилагательное, существительное."],
["mc","Сравнительная степень от good?","better","gooder","more good","best","Три степени: good — better — best."],
["mc","«Это лучший ресторан» по-английски?","This is the best restaurant.","This is a best restaurant.","This is the most good restaurant.","This is best the restaurant.","Перед превосходной степенью — the."],
["or","У вас есть размер побольше?","Do you have a bigger size","the sizes","Нужен какой-то один размер — артикль a."],
["or","Этот самый дешёвый","This is the cheapest","a cheaper","Перед превосходной степенью — артикль the."],
["or","Этот дешевле, чем тот","This is cheaper than that","more","К слову с -er more не добавляют."],
["fi","It's __ small.","Он слишком маленький","too","much|more|most","«Слишком» — too."],
["fi","This is cheaper __ that one.","Этот дешевле, чем тот","than","then|that|more","«Чем» — than."],
["fi","It's the __ expensive one.","Это самый дорогой","most","more|much|very","Превосходная степень длинного слова — the most."],
["ty","У вас есть размер поменьше?","Do you have a smaller size","smaller · size — артикль a","the","Нужен какой-то один размер — артикль a."],
["ty","Этот — самый лучший","This is the best|This one is the best","the · best — артикль the","a","Перед превосходной степенью — артикль the."],
["ty","Этот дешевле","This is cheaper|This one is cheaper","cheap — сравнительная степень","more","Короткое слово — -er."]]},
{ id:"going-to", title:"Планы: be going to", blurb:"О том, что уже решено, — be going to + глагол.", deck:"Светская беседа", body:`
<p>«Собираюсь», «буду», «поеду» — о <b>заранее решённом</b> плане говорят так: <b>be + going to + начальная форма</b>. Глагол to be здесь обязателен.</p>
{{ex:I'm going to visit Kazan.|/aɪm ˈgoʊɪŋ tə ˈvɪzɪt kəˈzɑːn/|Я собираюсь съездить в Казань}}{{ex:She's going to buy a car.|/ʃiz ˈgoʊɪŋ tə ˈbaɪ ə ˈkɑːr/|Она собирается купить машину}}{{ex:We're going to have dinner.|/wɪr ˈgoʊɪŋ tə ˈhæv ˈdɪnər/|Мы собираемся ужинать}}
<h3>Отрицание и вопрос</h3>
{{ex:I'm not going to go.|/aɪm ˈnɑːt ˈgoʊɪŋ tə ˈgoʊ/|Я не пойду}}{{ex:Are you going to come?|/ər ju ˈgoʊɪŋ tə ˈkʌm/|Ты придёшь?}}{{ex:What are you going to do this weekend?|/ˈwʌt ər ju ˈgoʊɪŋ tə ˈduː ˈðɪs ˈwiːkend/|Что ты собираешься делать в выходные?}}
<h3>Прогноз по тому, что видно</h3>
{{ex:It's going to rain.|/ɪts ˈgoʊɪŋ tə ˈreɪn/|Сейчас пойдёт дождь}}
<h3>Слова времени</h3>
<p><b>tomorrow</b> (завтра), <b>tonight</b> (сегодня вечером), <b>this weekend</b> (в эти выходные), <b>next week</b> (на следующей неделе) обычно ставят в конец предложения.</p>
<div class="tip">В речи <b>going to</b> звучит как <b>gonna</b>. И не пропускай <b>be</b>: <b>I going to go.</b> ✗ → <b>I'm going to go.</b> ✓</div>`,
check:[["«Завтра я встречусь с другом» (план) по-английски?",["I going to meet my friend tomorrow.","I'm going to meet my friend tomorrow.","I'm going meet my friend tomorrow.","I'm go to meet my friend tomorrow."],1,"be + going to + начальная форма."],["She ___ going to study. Что стоит на месте пропуска?",["am","are","is","be"],2,"С she — is."],["«Что ты собираешься делать в выходные?» по-английски?",["What are you going to do this weekend?","What do you going to do this weekend?","What you are going to do this weekend?","What are you going do this weekend?"],0,"Вопросительное слово, be, подлежащее, going to."]],
practice:[
["mc","«Я собираюсь поехать в Пусан» по-английски?","I'm going to go to Busan.","I going to go to Busan.","I'm going go to Busan.","I'm go to Busan going.","be + going to + начальная форма."],
["mc","They ___ going to come.","are","is","am","be","С they — are."],
["mc","«Сейчас пойдёт дождь» по-английски?","It's going to rain.","It going to rain.","It's going rain.","It's going to rains.","После going to — начальная форма."],
["mc","«Я не пойду» по-английски?","I'm not going to go.","I don't going to go.","I'm not going go.","I'm going not to go.","Not ставят после глагола to be."],
["mc","«Ты придёшь?» по-английски?","Are you going to come?","Do you going to come?","Are you going come?","You are going to come do?","Глагол to be выходит вперёд."],
["or","Она собирается купить машину","She's going to buy a car","the cars","Машина одна — артикль a и car без -s."],
["or","Я собираюсь встретиться с друзьями","I'm going to meet my friends","friend","Друзей несколько — множественное число friends."],
["or","Мы собираемся ужинать","We're going to have dinner","a","Перед dinner (приём пищи) артикль не ставят."],
["fi","I'm going __ study tonight.","Сегодня вечером я буду заниматься","to","for|at|will","going to + начальная форма."],
["fi","__ you going to come?","Ты придёшь?","Are","Do|Is|Will","С you — Are."],
["fi","It's going to __ tomorrow.","Завтра будет дождь","rain","rains|raining|rained","После going to — начальная форма."],
["ty","Я собираюсь посмотреть фильм","I'm going to watch a movie|I'm going to see a movie","going to · watch · movie — артикль a","the","Какой-то один фильм — артикль a."],
["ty","Что ты собираешься делать?","What are you going to do","what · going to · do","will","О планах спрашивают с be going to."],
["ty","Я собираюсь встретиться с друзьями","I'm going to meet my friends|I'm going to see my friends","going to · meet · friend — множественное число","friend","Друзей несколько — множественное число friends."]]},
{ id:"joining", title:"Связываем предложения: and, but, or, so, because", blurb:"Два коротких предложения — в одно. So и because стоят в разных местах.", deck:"Эмоции и реакции", body:`
<p>Если говорить одними короткими фразами, речь звучит отрывисто. Пять слов помогут связать их в одно предложение.</p>
<h3>and, but, or</h3>
{{ex:I like coffee and tea.|/aɪ ˈlaɪk ˈkɔːfi ənd ˈtiː/|Я люблю кофе и чай}}{{ex:I'm tired but happy.|/aɪm ˈtaɪərd bət ˈhæpi/|Я устал, но счастлив}}{{ex:Coffee or tea?|/ˈkɔːfi ər ˈtiː/|Кофе или чай?}}
<h3>so: поэтому</h3>
<p><b>Причина + so + следствие</b>, как в русском «…, поэтому…».</p>
{{ex:I was tired, so I went home.|/aɪ wəz ˈtaɪərd soʊ aɪ ˈwent ˈhoʊm/|Я устал, поэтому пошёл домой}}
<h3>because: потому что</h3>
<p><b>Следствие + because + причина</b>, как «…, потому что…».</p>
{{ex:I went home because I was tired.|/aɪ ˈwent ˈhoʊm bɪkəz aɪ wəz ˈtaɪərd/|Я пошёл домой, потому что устал}}{{ex:I stayed home because it was raining.|/aɪ ˈsteɪd ˈhoʊm bɪkəz ɪt wəz ˈreɪnɪŋ/|Я остался дома, потому что шёл дождь}}
<h3>too: тоже</h3>
{{ex:I like it too.|/aɪ ˈlaɪk ɪt ˈtuː/|Мне тоже нравится}}
<h3>«Что» — that или what</h3>
<p>«Всё, что тебе нужно» — <b>everything that you need</b>, а не <b>everything what you need</b>. Если перед «что» стоит слово, к которому оно относится (<b>everything</b>, <b>something</b>), нужно <b>that</b>. <b>What</b> — когда такого слова нет: <b>I know what you need.</b></p>
<div class="tip"><b>So</b> и <b>because</b> в одном предложении не ставят: <b>Because I was tired, so I went home.</b> ✗. Выбери что-то одно.</div>`,
check:[["I was sick, ___ I stayed home. Что стоит на месте пропуска?",["because","but","so","or"],2,"Сначала причина, потом следствие — so."],["I stayed home ___ I was sick. Что стоит на месте пропуска?",["because","so","but","and"],0,"Сначала следствие, потом причина — because."],["«Кофе или чай?» — как спросить по-английски?",["Coffee and tea?","Coffee but tea?","Coffee so tea?","Coffee or tea?"],3,"Выбор из двух — or."]],
practice:[
["mc","I like dogs ___ I don't like cats.","but","so","or","because","Противопоставление — but."],
["mc","I was hungry, ___ I ate a sandwich.","so","because","but","or","Сначала причина, потом следствие — so."],
["mc","I ate a sandwich ___ I was hungry.","because","so","but","or","Сначала следствие, потом причина — because."],
["mc","«Кофе или чай?» по-английски?","Coffee or tea?","Coffee and tea?","Coffee so tea?","Coffee but tea?","Одно из двух — or."],
["mc","«Я устал, но счастлив» по-английски?","I'm tired but happy.","I'm tired so happy.","I'm tired because happy.","I'm tired or happy.","«Но» — but."],
["or","Я люблю кошек и собак","I like cats and dogs","cat dog","Животные вообще — множественное число cats, dogs."],
["or","Кофе и сэндвич, пожалуйста","A coffee and a sandwich please","the or","Заказываем по одной штуке — у каждого слова артикль a."],
["or","Я проголодался, поэтому поел","I was hungry so I ate","because","Сначала причина, потом следствие — so."],
["fi","I'm tired __ happy.","Я устал, но счастлив","but","so|because|or","«Но» — but."],
["fi","I stayed home __ it was raining.","Я остался дома, потому что шёл дождь","because","so|but|or","Сначала следствие, потом причина — because."],
["fi","Coffee __ tea?","Кофе или чай?","or","so|but|because","Одно из двух — or."],
["ty","Мне нравятся кофе и чай","I like coffee and tea","like · coffee · and · tea — без артикля","a","Кофе и чай вообще — без артикля a."],
["ty","Я устал, но счастлив","I'm tired but happy|I'm tired but I'm happy","tired · but · happy","so","«Но» — but."],
["ty","Мне нравятся собаки и кошки","I like dogs and cats|I like cats and dogs","dog · and · cat — множественное число","dog","Животные вообще — множественное число dogs, cats."]]},
{ id:"runglish", title:"Рунглиш: ложные друзья и кальки", blurb:"Magazine — это не магазин, а «скажи мне» — не say me. Самые частые ловушки рунглиша.", deck:"Ложные друзья и кальки", body:`
<p>Многие ошибки русскоговорящих в английском — не грамматика, а слова. Похожее слово значит совсем другое (<b>magazine</b> — журнал), одному русскому слову соответствуют два английских (сказать — <b>say</b> или <b>tell</b>), а дословный перевод даёт фразу, которой в английском нет (<b>I feel myself well</b>). Такую смесь называют рунглишем.</p>
<h3>Ложные друзья переводчика</h3>
<div class="tbl"><table><tr><th>По-русски</th><th>Не так ✗</th><th>Так ✓</th><th>Ложный друг значит</th></tr><tr><td>магазин</td><td><b>magazine</b></td><td class="k">store, shop</td><td>журнал</td></tr><tr><td>аккуратный</td><td><b>accurate</b></td><td class="k">neat, tidy</td><td>точный</td></tr><tr><td>интеллигентный</td><td><b>intelligent</b></td><td class="k">cultured, well-educated</td><td>умный</td></tr><tr><td>кабинет</td><td><b>cabinet</b></td><td class="k">office</td><td>шкаф</td></tr><tr><td>фабрика</td><td><b>fabric</b></td><td class="k">factory</td><td>ткань</td></tr><tr><td>актуальный</td><td><b>actual</b></td><td class="k">current, relevant</td><td>настоящий, фактический</td></tr><tr><td>бриллиант</td><td><b>brilliant</b></td><td class="k">diamond</td><td>блестящий, гениальный</td></tr><tr><td>нормально (о делах)</td><td><b>normal</b></td><td class="k">fine, OK</td><td>обычный</td></tr></table></div>
{{ex:I bought it at the store.|/aɪ ˈbɔːt ɪt ət ðə ˈstɔːr/|Я купил это в магазине}}{{ex:She works at a factory.|/ʃi ˈwɜːrks ət ə ˈfæktəri/|Она работает на фабрике}}{{ex:This is my office.|/ˈðɪs ɪz maɪ ˈɔːfɪs/|Это мой кабинет}}{{ex:He's very neat.|/hiz ˈveri ˈniːt/|Он очень аккуратный}}
<p>Заменив слово, не забудь про артикль и число: <b>at the store</b>, <b>at a factory</b>, <b>my office</b> — после <b>my</b> артикля нет.</p>
<h3>Одно русское слово — два английских</h3>
<div class="tbl"><table><tr><th>По-русски</th><th>По-английски</th><th>Как выбрать</th></tr><tr><td>сказать</td><td class="k">say / tell</td><td><b>say</b> — что сказать (<b>say hello</b>), <b>tell</b> — кому (<b>tell me</b>)</td></tr><tr><td>делать</td><td class="k">do / make</td><td><b>do</b> — дела и работа (<b>do homework</b>), <b>make</b> — создать, приготовить (<b>make coffee</b>)</td></tr><tr><td>учить</td><td class="k">learn / study / teach</td><td><b>learn</b> — выучить, <b>study</b> — учиться, заниматься, <b>teach</b> — учить кого-то</td></tr><tr><td>удобный</td><td class="k">comfortable / convenient</td><td><b>comfortable</b> — удобный телу (стул, обувь), <b>convenient</b> — удобный по времени или месту</td></tr><tr><td>возможность</td><td class="k">opportunity / possibility</td><td><b>opportunity</b> — шанс что-то сделать, <b>possibility</b> — вероятность</td></tr><tr><td>полезный</td><td class="k">useful / healthy</td><td><b>useful</b> — полезная вещь или совет, <b>healthy</b> — полезная для здоровья еда</td></tr></table></div>
{{ex:Tell me the news.|/ˈtel mi ðə ˈnuːz/|Расскажи мне новости}}{{ex:I'll make coffee.|/aɪl ˈmeɪk ˈkɔːfi/|Я сварю кофе}}{{ex:Is three o'clock convenient for you?|/ɪz ˈθriː əˈklɑːk kənˈviːniənt fər ju/|Тебе удобно в три часа?}}
<p><b>News</b> — неисчисляемое, хотя «новости» стоят во множественном числе: <b>the news is</b>, а не <b>the news are</b>, и артикль a с ним не ставят.</p>
<h3>Кальки: дословный перевод</h3>
<div class="tbl"><table><tr><th>По-русски</th><th>Калька ✗</th><th>По-английски ✓</th></tr><tr><td>чувствую себя хорошо</td><td><b>I feel myself well</b></td><td class="k">I feel well</td></tr><tr><td>слава богу</td><td><b>Thanks God</b></td><td class="k">Thank God</td></tr><tr><td>свободно говорю по-английски</td><td><b>I speak English freely</b></td><td class="k">I speak English fluently</td></tr><tr><td>я из Москвы</td><td><b>I'm from Moscow city</b></td><td class="k">I'm from Moscow</td></tr></table></div>
{{ex:I feel well.|/aɪ ˈfiːl ˈwel/|Я хорошо себя чувствую}}{{ex:He speaks English fluently.|/hi ˈspiːks ˈɪŋglɪʃ ˈfluːəntli/|Он свободно говорит по-английски}}{{ex:I'm from Moscow.|/aɪm frəm ˈmɑːskaʊ/|Я из Москвы}}
<h3>Предметы — it</h3>
<p>«Ноутбук — он», «машина — она»: русский род в английский не переносится. Любой предмет — <b>it</b>.</p>
{{ex:My laptop is old, but it works.|/maɪ ˈlæptɑːp ɪz ˈoʊld bət ɪt ˈwɜːrks/|Мой ноутбук старый, но работает}}
<div class="tip">Если английское слово похоже на русское, загляни в словарь: <b>magazine</b>, <b>accurate</b>, <b>fabric</b>, <b>cabinet</b> только похожи. Частые ошибки: <b>say me</b> ✗ → <b>tell me</b> ✓ / <b>I feel myself well.</b> ✗ → <b>I feel well.</b> ✓</div>`,
check:[["«Здесь рядом есть магазин?» по-английски?",["Is there a magazine near here?","Is there a store near here?","Is there store near here?","Is there a cabinet near here?"],1,"Магазин — store, а magazine — журнал. Магазин упоминается впервые — артикль a."],["«Я сварю кофе» по-английски?",["I'll make coffee.","I'll do coffee.","I'll cook coffee.","I'll doing coffee."],0,"Еду и напитки готовят — make, а do — для дел и работы."],["«Мой ноутбук старый, но работает» по-английски?",["My laptop is old, but he works.","My laptop is old, but she works.","My laptop old, but it works.","My laptop is old, but it works."],3,"Для предметов — it, даже если по-русски «он»; и не пропускай is."]],
practice:[
["mc","«Я купил это в магазине» по-английски?","I bought it at the store.","I bought it in the magazine.","I bought it at the magazine.","I bought it in a magazine store.","Магазин — store (или shop), а magazine — журнал."],
["mc","«Он очень аккуратный» (любит порядок) по-английски?","He's very neat.","He's very accurate.","He's very actual.","He's very intelligent.","Аккуратный — neat или tidy, а accurate значит «точный»."],
["mc","«Скажи мне правду» по-английски?","Tell me the truth.","Say me the truth.","Say to me truth.","Tell to me the truth.","Сказать кому-то — tell me; say me — калька с «сказать мне»."],
["mc","«Я хорошо себя чувствую» по-английски?","I feel well.","I feel myself well.","I feel me well.","I'm feeling myself good.","«Чувствую себя» — калька: по-английски просто feel."],
["mc","«Мой телефон старый. Он не работает» по-английски?","My phone is old. It doesn't work.","My phone is old. He doesn't work.","My phone is old. She doesn't work.","My phone is old. It don't work.","Для предметов — it, даже если по-русски «он»."],
["or","Я купил это в магазине","I bought it at the store","magazine a","Магазин — store, а не magazine; магазин конкретный — артикль the."],
["or","Она работает на фабрике","She works at a factory","fabric the","Фабрика — factory (fabric — это ткань); одна фабрика из многих — артикль a."],
["or","Это мой кабинет","This is my office","cabinet offices","Кабинет — office (cabinet — шкаф); кабинет один — без -s, не множественное число."],
["or","Можно дать тебе совет?","Can I give you some advice","advices a","Advice — неисчисляемое: без артикля a и без -s."],
["fi","Please __ me your name.","Скажи мне, пожалуйста, своё имя","tell","say|speak|talk","Сказать кому-то — tell; say не ставят прямо перед человеком."],
["fi","I __ coffee every morning.","Каждое утро я варю кофе","make","do|cook|play","Еду и напитки готовят — make; do — для дел и работы."],
["fi","He speaks English __.","Он свободно говорит по-английски","fluently","freely|free|fluent","Свободно о языке — fluently; freely — «без ограничений»."],
["ty","Мне нужен совет","I need some advice|I need advice|I need a piece of advice","need · advice — неисчисляемое","advices","Advice — неисчисляемое: без артикля a и без -s."],
["ty","Я работаю в офисе","I work in an office|I work at an office","work · office — артикль an","cabinet","Один офис из многих — артикль an; cabinet — это шкаф."],
["ty","Расскажи мне новости","Tell me the news|Tell me your news","tell · news — неисчисляемое","say a","Tell me, а не say me; news — неисчисляемое: без артикля a и без -s."],
["ty","Спасибо, я хорошо себя чувствую","I feel well thanks|Thanks I feel well|I feel good thanks|Thanks I feel good|I feel well thank you|Thank you I feel well|I feel good thank you|Thank you I feel good","feel · well — без myself","myself","«Чувствую себя» — калька: по-английски feel без myself."]]},
];
