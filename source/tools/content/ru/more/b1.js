/* ru-en stage B1: new lessons. English side shared with ko-en (parity.js) except the ru-only lesson articles-3
   (deviations extraLessons; placed after passive by profile.json; English side copied from ja articles-3). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Present Perfect 2: for и since, до сих пор", blurb:"Началось в прошлом и продолжается сейчас. for + период, since + точка отсчёта.", deck:"Рассказ о себе", body:`
<p>Второе значение Present Perfect: действие <b>началось в прошлом и продолжается до сих пор</b>. По-русски здесь настоящее время: «Я живу в Москве пять лет». Отсюда самая частая ошибка — Present Simple: <b>I live here for five years.</b> ✗ Если есть for или since и действие ещё длится, нужен Present Perfect.</p>
{{ex:I've lived in Moscow for five years.|/aɪv ˈlɪvd ɪn ˈmɑːskaʊ fər ˈfaɪv ˈjɪrz/|Я живу в Москве пять лет}}{{ex:I've worked here since 2020.|/aɪv ˈwɜːrkt ˈhɪr sɪns ˈtwenti ˈtwenti/|Я работаю здесь с 2020 года}}{{ex:I've known her for a long time.|/aɪv ˈnoʊn hər fər ə ˈlɔːŋ ˈtaɪm/|Я давно её знаю}}
<h3>for и since</h3>
<div class="tbl"><table><tr><th>for + период</th><th>since + точка отсчёта</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<h3>How long…?</h3>
{{ex:How long have you been here?|/ˈhaʊ ˈlɔːŋ həv ju bɪn ˈhɪr/|Сколько ты уже здесь?}}{{ex:How long have you studied English?|/ˈhaʊ ˈlɔːŋ həv ju ˈstʌdid ˈɪŋglɪʃ/|Сколько ты уже учишь английский?}}
<p>«Сколько ты здесь живёшь?» — не <b>How long do you live here?</b> ✗, а <b>How long have you lived here?</b> ✓</p>
<h3>just, already, yet</h3>
{{ex:I've just finished.|/aɪv ˈdʒʌst ˈfɪnɪʃt/|Я только что закончил}}{{ex:I've already seen it.|/aɪv ɔːlˈredi ˈsiːn ɪt/|Я это уже видел}}{{ex:Have you eaten yet?|/həv ju ˈiːtn ˈjet/|Ты уже поел?}}
<p>В американском английском с already и yet часто говорят и в Past Simple: <b>I already saw it.</b>, <b>Did you eat yet?</b> Оба варианта верны.</p>
<div class="tip">Главная ошибка — настоящее время, как в русском: <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Что стоит на месте пропуска?",["since","for","during","from"],1,"Перед периодом — for."],["I've worked here ___ 2020. Что стоит на месте пропуска?",["for","in","since","at"],2,"Перед точкой отсчёта — since."],["«Сколько ты уже здесь?» по-английски?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"How long have you + третья форма."]],
practice:[
["mc","I've known him ___ ten years.","for","since","from","during","Перед периодом — for."],
["mc","She's lived here ___ 2019.","since","for","in","at","Перед точкой отсчёта — since."],
["mc","«Сколько ты уже здесь?» по-английски?","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","How long have you + третья форма."],
["mc","«Я только что закончил» по-английски?","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","have + just + третья форма."],
["mc","«Ты уже поел?» по-английски?","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","«Уже» в вопросе — yet."],
["or","Я живу здесь пять лет","I've lived here for five years","year since","Пять лет — множественное число years; перед периодом — for."],
["or","Я уже видел этот фильм","I've already seen the movie","a saw","Фильм, о котором знают оба, — артикль the."],
["or","Сколько ты уже ждёшь?","How long have you waited","did","How long have you + третья форма."],
["fi","I've worked here __ two years.","Я работаю здесь два года","for","since|from|during","Перед периодом — for."],
["fi","I've been here __ Monday.","Я здесь с понедельника","since","for|at|during","Перед точкой отсчёта — since."],
["fi","Have you finished __?","Ты уже закончил?","yet|already","ever|never|since","«Уже» в вопросе — yet."],
["ty","Я живу здесь три года","I've lived here for three years|I've been living here for three years","I've lived · here · for · three · year — множественное число","year","Три года — множественное число years."],
["ty","Сколько ты уже здесь?","How long have you been here","how long · have you · been here","are","How long have you + третья форма."],
["ty","Я уже прочитал книгу (ту, о которой мы говорили)","I've already read the book|I've read the book already|I already read the book","already · read · book — артикль the","a","Книга, о которой знают оба, — артикль the."]]},
{ id:"narrative", title:"Времена в рассказе: Past Simple, Past Continuous, Past Perfect", blurb:"Фон — Past Continuous, события — Past Simple, то, что было ещё раньше, — had + V3.", deck:"Кино, сериалы и сленг", body:`
<p>Когда рассказываешь, что случилось, в ход идут три времени, и у каждого своя роль. В русском это одно прошедшее время плюс вид глагола и слово «уже»; в английском роли разведены по разным формам.</p>
<div class="tbl"><table><tr><th>Время</th><th>Роль</th><th>Пример</th></tr><tr><td class="k">Past Continuous</td><td>фон, процесс</td><td>I was walking home.</td></tr><tr><td class="k">Past Simple</td><td>событие</td><td>I saw an old friend.</td></tr><tr><td class="k">Past Perfect</td><td>то, что случилось ещё раньше</td><td>He had moved to Saint Petersburg.</td></tr></table></div>
<h3>Фон + событие</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen aɪ ˈsɔː ən ˈoʊld ˈfrend/|Я шёл домой и встретил старого друга}}
<h3>Past Perfect: had + третья форма</h3>
<p>Действие, которое произошло <b>раньше</b> другого момента в прошлом. По-русски на это часто указывает «уже»: «Когда я пришёл, фильм уже начался».</p>
{{ex:When I arrived, the movie had already started.|/wen aɪ əˈraɪvd ðə ˈmuːvi həd ɔːlˈredi ˈstɑːrtɪd/|Когда я пришёл, фильм уже начался}}{{ex:I had never seen snow before.|/aɪ həd ˈnevər ˈsiːn ˈsnoʊ bɪˈfɔːr/|До этого я ни разу не видел снега}}
<h3>Слова-связки</h3>
<p>first (сначала), then (потом), after that (после этого), finally (наконец).</p>
{{ex:First we ate dinner. Then we watched a movie.|/ˈfɜːrst wi ˈeɪt ˈdɪnər ‖ ˈðen wi ˈwɑːtʃt ə ˈmuːvi/|Сначала мы поужинали. Потом посмотрели фильм}}
<div class="tip">then (потом) и than (чем) звучат похоже, но это разные слова. В рассказе нужно <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Что стоит на месте пропуска?",["has","was","had","did"],2,"То, что случилось раньше, — had + третья форма."],["I ___ walking home when it started to rain. Что стоит на месте пропуска?",["was","had","did","have"],0,"Фон, процесс — Past Continuous."],["Какое предложение — о том, что случилось ещё раньше?",["I was eating.","I ate.","I eat.","I had eaten."],3,"had + третья форма — это Past Perfect."]],
practice:[
["mc","When I got there, the movie ___ already started.","had","has","was","did","То, что случилось раньше, — had + третья форма."],
["mc","I ___ cooking when the phone rang.","was","had","did","have","Процесс-фон — Past Continuous."],
["mc","«Когда я приехал, поезд уже ушёл» по-английски?","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","То, что случилось раньше, — had + третья форма."],
["mc","Как в рассказе сказать «потом»?","then","than","that","them","then — потом, than — чем."],
["mc","«До этого я ни разу не видел снега» по-английски?","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","had + never + третья форма."],
["or","Поезд уже ушёл","The train had already left","a has","Тот самый поезд, на котором мы собирались ехать, — артикль the."],
["or","Я встретил старого друга","I met an old friend","a friends","old начинается с гласного звука — артикль an."],
["or","Я шёл домой (в тот момент)","I was walking home","had","Фон — Past Continuous."],
["fi","I was sleeping __ you called.","Я спал, когда ты позвонил","when","than|so|had","«Когда» — when."],
["fi","The bus had already __.","Автобус уже ушёл","left|gone","leave|leaving|leaves","После had — третья форма."],
["fi","First we ate. __ we watched a movie.","Сначала мы поели. Потом посмотрели фильм","Then|After that|Next","Than|Because|When","«Потом» — then."],
["ty","Фильм (movie) уже начался к тому моменту","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — артикль the","a","Тот самый фильм, на который мы шли, — артикль the."],
["ty","Я встретил старого друга","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — артикль an","a","old начинается с гласного звука — артикль an."],
["ty","Я шёл домой (в тот момент)","I was walking home","was · walking · home","had","Фон — Past Continuous."]]},
{ id:"conditionals", title:"Условные предложения 2 и 3: «если бы»", blurb:"Нереально сейчас — would, нереально в прошлом и сожаление — would have.", deck:"Эмоции и реакции", body:`
<p>Так говорят о том, чего на самом деле нет. В русском на всё хватает одной частицы «бы»: «Если бы я знал…» — и про сейчас, и про вчера. В английском форму выбирают <b>по времени</b>: нереально сейчас — второй тип, нереально в прошлом — третий.</p>
<h3>Второй тип: сейчас всё не так</h3>
<p><b>If + Past Simple, would + глагол</b>. Форма прошедшая, а смысл — про сейчас.</p>
{{ex:If I had time, I would travel.|/ɪf aɪ ˈhæd ˈtaɪm aɪ wəd ˈtrævl/|Если бы у меня было время, я бы путешествовал}}{{ex:If I were you, I'd take it.|/ɪf aɪ wər ˈjuː aɪd ˈteɪk ɪt/|На твоём месте я бы согласился}}{{ex:What would you do?|/ˈwʌt wəd ju ˈduː/|А ты бы что сделал?}}
<h3>Третий тип: в прошлом было не так</h3>
<p><b>If + had + третья форма, would have + третья форма</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf aɪ həd ˈstʌdid aɪ wəd əv ˈpæst/|Если бы я тогда позанимался, я бы сдал}}
<h3>Сожаление: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃəd əv ˈkɔːld/|Надо было позвонить}}{{ex:I wish I had more time.|/aɪ ˈwɪʃ aɪ ˈhæd ˈmɔːr ˈtaɪm/|Жаль, что у меня так мало времени}}
<div class="tbl"><table><tr><th>Тип</th><th>Часть с if</th><th>Главная часть</th></tr><tr><td>1 (реальное условие)</td><td class="k">Present Simple</td><td class="k">will</td></tr><tr><td>2 (нереально сейчас)</td><td class="k">Past Simple</td><td class="k">would</td></tr><tr><td>3 (нереально в прошлом)</td><td class="k">had + V3</td><td class="k">would have + V3</td></tr></table></div>
<div class="tip">«Если бы я знал» — это <b>If I knew</b> (сейчас) или <b>If I had known</b> (тогда): смотри на время, а не на «бы». If I were you — устойчивое выражение: после I здесь <b>were</b>, а не was.</div>`,
check:[["If I ___ rich, I would travel. Что стоит на месте пропуска?",["am","were","will be","would be"],1,"Нереально сейчас — Past Simple (were)."],["If I had studied, I ___ passed. Что стоит на месте пропуска?",["would","will have","would have","had"],2,"Нереально в прошлом — would have + третья форма."],["«Надо было позвонить» по-английски?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Сожаление — should have + третья форма."]],
practice:[
["mc","If I ___ time, I would help.","had","have","will have","would have","Нереально сейчас — после if Past Simple."],
["mc","«На твоём месте я бы это купил» по-английски?","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","If I were you, I'd… — устойчивое выражение."],
["mc","If I had known, I ___ come.","would have","would","will have","had","Нереально в прошлом — would have + третья форма."],
["mc","«Надо было позвонить» по-английски?","I should have called.","I should called.","I should had call.","I must called.","Сожаление — should have + третья форма."],
["mc","«А ты бы что сделал?» по-английски?","What would you do?","What will you did?","What would you did?","What you would do?","Предположение — would + начальная форма."],
["or","Если бы у меня было время, я бы путешествовал","If I had time I'd travel","have will","Нереально сейчас — Past Simple had и would."],
["or","Я бы взял такси","I'd take a taxi","the taxis","Какое-нибудь такси — артикль a."],
["or","Надо было купить билет","I should have bought a ticket","the buy","Билет один — артикль a."],
["fi","If I __ you, I'd go.","На твоём месте я бы пошёл","were|was","am|be|would be","If I were you — устойчивое выражение."],
["fi","I would __ helped.","Я бы помог (тогда)","have","had|has|having","would have + третья форма."],
["fi","I wish I __ more time.","Жаль, что у меня так мало времени","had","have|would have|will have","После I wish — Past Simple."],
["ty","На твоём месте я бы пошёл","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go","am","Устойчивое выражение: If I were you, I'd…"],
["ty","Жаль, что у меня нет машины (I wish)","I wish I had a car","I wish · had · car — артикль a","the","Какая-нибудь машина — артикль a."],
["ty","Мне надо было взять такси","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — артикль a","the","Какое-нибудь такси — артикль a."]]},
{ id:"passive", title:"Страдательный залог: be + третья форма", blurb:"Когда важно, что случилось, а не кто это сделал.", deck:"Работа и деловые письма", body:`
<p>Страдательный залог (пассив) — это <b>be + третья форма</b>. Он нужен, когда неизвестно или неважно, кто сделал. В русском для этого есть несколько средств: «Телефон украли», «Дом строится», «Здесь говорят по-английски». В английском во всех трёх случаях — пассив. Это одна из тем, где часто ошибаются и на ЕГЭ.</p>
{{ex:My phone was stolen.|/maɪ ˈfoʊn wəz ˈstoʊlən/|У меня украли телефон}}{{ex:This was made in Russia.|/ˈðɪs wəz ˈmeɪd ɪn ˈrʌʃə/|Это сделано в России}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsld/|Встречу отменили}}
<h3>Present Simple: так бывает всегда</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ ɪz ˈspoʊkən ˈhɪr/|Здесь говорят по-английски}}{{ex:Breakfast is served at seven.|/ˈbrekfəst ɪz ˈsɜːrvd ət ˈsevn/|Завтрак подают в семь}}
<h3>Кто сделал — by</h3>
{{ex:It was written by Leo Tolstoy.|/ɪt wəz ˈrɪtn baɪ ˈliːoʊ ˈtoʊlstɔɪ/|Это написал Лев Толстой}}
<h3>Действительный и страдательный залог</h3>
<div class="tbl"><table><tr><th>Действительный</th><th>Страдательный</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<p>Русские «украли», «отменили» обходятся без подлежащего. В английском подлежащее обязательно, поэтому им становится сам предмет: <b>Stole my bag.</b> ✗ → <b>My bag was stolen.</b> ✓ А «-ся» в значении процесса передаётся через is being + третья форма: <b>The house is being built.</b> — «Дом строится».</p>
<div class="tip">Частая ошибка — пропустить be: <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Что стоит на месте пропуска?",["is","was","did","has"],1,"Вчера — значит прошлое: was + третья форма."],["This phone ___ made in Korea. Что стоит на месте пропуска?",["was","did","has","does"],0,"Пассив — be + третья форма."],["«Встречу отменили» по-английски?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"be + третья форма canceled."]],
practice:[
["mc","My phone ___ stolen.","was","did","has","is steal","Пассив — be + третья форма."],
["mc","«Это сделано в Корее» по-английски?","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","be + третья форма made."],
["mc","«Здесь говорят по-английски» (пассив) по-английски?","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Так бывает всегда — is + третья форма."],
["mc","«Встречу отменили» по-английски?","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","be + третья форма."],
["mc","«Завтрак подают в семь» по-английски?","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Перед названием приёма пищи артикль не нужен; форма — is + третья форма."],
["or","У меня украли сумку","My bag was stolen","stole","После be — третья форма stolen."],
["or","Встречу отменили","The meeting was canceled","A meetings","Встреча, о которой знают оба, — артикль the."],
["or","Окно было разбито","The window was broken","a windows","То самое окно, что здесь, — артикль the."],
["fi","This was __ in Korea.","Это сделано в Корее","made","make|making|makes","После be — третья форма."],
["fi","The room __ cleaned every day.","Номер убирают каждый день","is|gets","does|has|did","Так бывает всегда — is + третья форма."],
["fi","It was written __ Han Kang.","Это написала Хан Ган","by","from|of|with","Кто сделал — by."],
["ty","У меня украли телефон (пассив)","My phone was stolen|My phone got stolen","my phone · was · stolen","stole","Подлежащее — телефон: be + третья форма stolen."],
["ty","Встречу отменили (пассив)","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — артикль the","a","Встреча, о которой знают оба, — артикль the."],
["ty","Дверь была заперта","The door was locked","the door · was · locked — артикль the","a","Та самая дверь, что перед нами, — артикль the."]]},
{ id:"articles-3", title:"Артикли: итоговое повторение", blurb:"Общее — без артикля, конкретное — с the, а исчисляемое в единственном числе — с a.", deck:"Светская беседа", body:`
<p>В русском нет артиклей, и ошибки здесь идут в обе стороны: артикль пропускают (<b>I'm engineer.</b> ✗) почти так же часто, как ставят лишний (<b>The life is hard.</b> ✗). Этот урок сводит всё вместе — в виде трёх вопросов, которые стоит задать себе в длинном предложении.</p>
<h3>1. Речь о чём-то вообще? Без артикля</h3>
<p>О целом классе вещей говорят так: исчисляемое существительное — во <b>множественном числе без артикля</b>, неисчисляемое или абстрактное — просто <b>без артикля</b>.</p>
{{ex:Cats sleep a lot.|/ˈkæts ˈsliːp ə ˈlɑːt/|Кошки много спят}}{{ex:Time is money.|/ˈtaɪm ɪz ˈmʌni/|Время — деньги}}{{ex:Coffee keeps me awake.|/ˈkɔːfi ˈkiːps mi əˈweɪk/|После кофе я не могу уснуть}}
<p><b>The life is hard.</b> ✗ → <b>Life is hard.</b> ✓ <b>The money isn't everything.</b> ✗ → <b>Money isn't everything.</b> ✓</p>
<h3>2. Понятно, о каком именно? the</h3>
<p>То же слово получает <b>the</b>, когда описание (of…, in…, придаточное) уточняет, о чём речь. В русском уточнение просто ставят рядом — «музыка в этом кафе», «кофе, который ты сварил», — без всякого «этот». Поэтому the здесь легко потерять.</p>
{{ex:Life is short.|/ˈlaɪf ɪz ˈʃɔːrt/|Жизнь коротка}}{{ex:The life of a teacher is busy.|/ðə ˈlaɪf əv ə ˈtiːtʃər ɪz ˈbɪzi/|У учителя напряжённая жизнь}}{{ex:I like music.|/aɪ ˈlaɪk ˈmjuːzɪk/|Я люблю музыку (вообще)}}{{ex:I like the music in this cafe.|/aɪ ˈlaɪk ðə ˈmjuːzɪk ɪn ˈðɪs kæˈfeɪ/|Мне нравится музыка в этом кафе}}{{ex:The coffee you made was great.|/ðə ˈkɔːfi ju ˈmeɪd wəz ˈgreɪt/|Кофе, который ты сварил, — отличный}}
<p>Превосходная степень и порядковые числительные тоже требуют the: «самый лучший» и «первый» бывает только один.</p>
{{ex:It's the best movie I've ever seen.|/ɪts ðə ˈbest ˈmuːvi aɪv ˈevər ˈsiːn/|Это лучший фильм, который я видел}}
<p>Но если описание не выделяет предмет, а он лишь один из многих, нужен a / an — даже при длинном описании.</p>
{{ex:My brother is an engineer who works in Moscow.|/maɪ ˈbrʌðər ɪz ən ˌendʒɪˈnɪr hu ˈwɜːrks ɪn ˈmɑːskaʊ/|Мой брат — инженер, работает в Москве}}
<h3>3. Устойчивое выражение? Без артикля</h3>
<p>bed, school, work в своём прямом назначении и by + транспорт идут без артикля. Такие выражения проще запомнить целиком.</p>
<div class="tbl"><table><tr><th>Выражение</th><th>Значение</th></tr><tr><td class="k">go to bed</td><td>ложиться спать</td></tr><tr><td class="k">go to school / go to work</td><td>ходить в школу / ездить на работу</td></tr><tr><td class="k">at home / at work</td><td>дома / на работе</td></tr><tr><td class="k">by train / by bus</td><td>на поезде / на автобусе</td></tr><tr><td class="k">have lunch</td><td>обедать</td></tr></table></div>
{{ex:I go to work by train.|/aɪ ˈgoʊ tə ˈwɜːrk baɪ ˈtreɪn/|Я езжу на работу на поезде}}{{ex:I went to bed early.|/aɪ ˈwent tə ˈbed ˈɜːrli/|Я рано лёг спать}}{{ex:She's at work now.|/ʃiz ət ˈwɜːrk ˈnaʊ/|Она сейчас на работе}}{{ex:I sat on the bed.|/aɪ ˈsæt ɑːn ðə ˈbed/|Я сел на кровать (кровать как мебель)}}
<div class="tip">Если сомневаешься, спроси себя: речь о чём-то вообще или понятно, о каком именно? Вообще — без артикля (исчисляемое — во множественном числе); понятно, о каком, — the; один из многих — a / an.</div>`,
check:[["«Я езжу на работу на поезде» по-английски?",["I go to the work by the train.","I go to a work by train.","I go to work by train.","I go to work by a train."],2,"go to work и by train — устойчивые выражения без артикля."],["I like ___ music they play here. Что стоит на месте пропуска?",["the","a","an","(без артикля)"],0,"they play here уточняет, какая музыка, — нужен артикль the."],["«Жизнь коротка» (жизнь вообще) по-английски?",["The life is short.","A life is short.","Lives is short.","Life is short."],3,"Абстрактное понятие в общем смысле — без артикля."]],
practice:[
["mc","«Время — деньги» по-английски?","Time is money.","The time is money.","A time is money.","Time is a money.","Абстрактное понятие в общем смысле — без артикля; money — неисчисляемое, поэтому и без a."],
["mc","«Я рано лёг спать» по-английски?","I went to bed early.","I went to the bed early.","I went to a bed early.","I went to beds early.","go to bed (ложиться спать) — устойчивое выражение без артикля."],
["mc","«Кофе, который ты сварил, — отличный» по-английски?","The coffee you made was great.","Coffee you made was great.","A coffee you made was great.","The coffees you made was great.","Придаточное уточняет, какой кофе, — артикль the."],
["mc","«Мой брат — инженер, работает в Москве» по-английски?","My brother is an engineer who works in Moscow.","My brother is engineer who works in Moscow.","My brother is a engineer who works in Moscow.","My brother is the engineers who works in Moscow.","Описание есть, но инженер — один из многих: артикль an."],
["mc","«Она сейчас на работе» по-английски?","She's at work now.","She's at the work now.","She's at a work now.","She's at works now.","at work — устойчивое выражение без артикля."],
["or","Кошки много спят","Cats sleep a lot","The cat","Кошки вообще — множественное число без артикля: cats."],
["or","Мне нравится здешняя музыка","I like the music here","a musics","here уточняет, какая музыка, — артикль the; music — неисчисляемое, поэтому без -s."],
["or","Я езжу в школу на автобусе","I go to school by bus","the a","go to school и by bus — устойчивые выражения без артикля."],
["fi","__ is short.","Жизнь коротка","Life","The life|A life|Lives","Абстрактное понятие в общем смысле — без артикля."],
["fi","I'm __ home now.","Я сейчас дома","at","at the|in the|to","at home — устойчивое выражение без артикля."],
["fi","I read __ interesting article about sleep.","Я прочитал интересную статью о сне","an","a|the|two","Статья — одна из многих, хоть и с описанием: артикль an (interesting начинается с гласного звука)."],
["ty","Я рано лёг спать","I went to bed early","went to · bed · early — без артикля","the","go to bed — устойчивое выражение без артикля."],
["ty","Кофе, который ты сварил, был отличный","The coffee you made was great|The coffee you made was good|The coffee you made was delicious|The coffee that you made was great|The coffee that you made was good|The coffee that you made was delicious","the coffee · you made · great — артикль the","a","Придаточное уточняет, какой кофе, — артикль the."],
["ty","Я езжу на работу на поезде","I go to work by train|I commute by train|I take the train to work","go to work · by train — без артикля","the","go to work и by train — устойчивые выражения без артикля."]]},
{ id:"reported", title:"Косвенная речь: передаём чужие слова", blurb:"She said she was tired. Согласование времён, а после tell — кому.", deck:"Звонки и сокращения в чатах", body:`
<p>Косвенная речь — пересказ чужих слов. В русском время не меняется: «Она сказала, что устала», «…что занята». В английском действует согласование времён: если «сказал» стоит в прошлом, пересказ <b>сдвигается на шаг в прошлое</b>.</p>
<div class="tbl"><table><tr><th>Прямая речь</th><th>Косвенная речь</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi ˈsed ʃi wəz ˈtaɪərd/|Она сказала, что устала}}{{ex:He said he would come.|/hi ˈsed hi wəd ˈkʌm/|Он сказал, что придёт}}
<h3>say и tell</h3>
<p>После <b>tell</b> всегда стоит тот, кому говорят: told me. После <b>say</b> — нет. «Он сказал мне» — <b>He told me</b>, а не He said me.</p>
{{ex:He told me he was busy.|/hi ˈtoʊld mi hi wəz ˈbɪzi/|Он сказал мне, что занят}}
<h3>Пересказ вопросов</h3>
<p>Общий вопрос (да / нет) передаётся через <b>if</b>, специальный — через то же вопросительное слово. Дальше — <b>прямой порядок слов</b> (подлежащее + глагол), без do / did.</p>
{{ex:She asked if I was okay.|/ʃi ˈæskt ɪf aɪ wəz oʊˈkeɪ/|Она спросила, всё ли у меня в порядке}}{{ex:He asked where I lived.|/hi ˈæskt ˈwer aɪ ˈlɪvd/|Он спросил, где я живу}}
<div class="tip">Частые ошибки: <b>He said me …</b> ✗ → <b>He told me …</b> ✓; <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Что стоит на месте пропуска?",["is being","was","be","will"],1,"Согласование времён: said в прошлом — значит was."],["He ___ me he would come. Что стоит на месте пропуска?",["said","say","told","tell to"],2,"Есть тот, кому говорят (me), — told."],["«Он спросил, где я живу» по-английски?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"В пересказе вопроса — прямой порядок слов."]],
practice:[
["mc","She said she ___ busy.","was","is being","be","were being","Согласование времён: was."],
["mc","He ___ me he was late.","told","said","say","tells to","Есть тот, кому говорят, — told."],
["mc","«Он сказал, что придёт» по-английски?","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","will в пересказе становится would."],
["mc","«Она спросила, всё ли у меня в порядке» по-английски?","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Общий вопрос пересказывается через if."],
["mc","«Он спросил, где я живу» по-английски?","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","В пересказе вопроса — прямой порядок слов."],
["or","Она сказала, что устала","She said she was tired","told","Не сказано, кому, — said."],
["or","Он сказал, что купил машину","He said he bought a car","the cars","Машина упоминается впервые, одна — артикль a."],
["or","Она сказала, что ей понравилась та книга","She said she liked the book","a books","Книга, о которой знают оба, — артикль the."],
["fi","She __ she was tired.","Она сказала, что устала","said","told|asked|say","Не сказано, кому, — said."],
["fi","He told __ he was busy.","Он сказал мне, что занят","me","I|my|to","После told — тот, кому говорят."],
["fi","She asked __ I was okay.","Она спросила, всё ли у меня в порядке","if|whether","that|what|did","Общий вопрос пересказывается через if."],
["ty","Он сказал, что занят","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy","is","Согласование времён: was, а не is."],
["ty","Она сказала, что у неё есть машина","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — артикль a","the","Машина упоминается впервые — артикль a."],
["ty","Он сказал, что смотрел фильм (movie, тот, о котором мы говорили)","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — артикль the","a","Фильм, о котором знают оба, — артикль the."]]},
];
