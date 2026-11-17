/* ru-en stage A2: new lessons. English side shared with ko-en (parity.js). Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Past Continuous: процесс в прошлом", blurb:"Что происходило в определённый момент в прошлом. Фон для рассказа.", deck:"Эмоции и реакции", body:`
<p><b>Past Continuous</b> описывает действие, которое <b>шло в какой-то момент в прошлом</b>. Форма простая: в Present Continuous меняем am / is / are на <b>was / were</b>, и всё. По-русски здесь обычно несовершенный вид: «я спал», «шёл дождь».</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Я спал (в тот момент)}}{{ex:We were watching TV.|/wi wər ˈwɑːtʃɪŋ ˌtiː ˈviː/|Мы смотрели телевизор}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Шёл дождь}}
<h3>Вопросы</h3>
{{ex:What were you doing?|/ˈwʌt wər ju ˈduːɪŋ/|Что ты делал (в тот момент)?}}{{ex:Were you working at nine?|/wər ju ˈwɜːrkɪŋ ət ˈnaɪn/|Ты работал в девять часов?}}
<h3>С when: одно действие прерывает другое</h3>
<p>Долгое действие-фон — <b>Past Continuous</b>, короткое событие, которое его прервало, — <b>Past Simple</b>. По-русски это та же пара видов: «я готовил (фон), когда ты позвонил (событие)».</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju ˈkɔːld/|Я готовил, когда ты позвонил}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɔːkɪŋ ˈhoʊm wen ɪt ˈstɑːrtɪd tə ˈreɪn/|Я шёл домой, и тут начался дождь}}
<div class="tip">Несовершенный вид не всегда значит Past Continuous: «Я часто готовил» — это <b>I often cooked</b>. Past Continuous нужен только для процесса в конкретный момент. И наоборот, <b>I cooked when you called.</b> значит «Когда ты позвонил, я взялся готовить».</div>`,
check:[["«Что ты делал в девять?» по-английски?",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"С you — were, затем -ing-форма."],["I was cooking ___ you called. Что стоит на месте пропуска?",["when","so","or","than"],0,"«Когда» — when."],["They ___ watching TV. Что стоит на месте пропуска?",["was","did","were","are being"],2,"С they — were."]],
practice:[
["mc","I ___ sleeping at ten.","was","were","did","am","С I — was."],
["mc","«Я готовил, когда ты позвонил» по-английски?","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","Фон — Past Continuous, событие, которое его прервало, — Past Simple."],
["mc","«Что ты делал?» (в тот момент) по-английски?","What were you doing?","What did you doing?","What was you doing?","What were you do?","С you — were, затем -ing-форма."],
["mc","They ___ playing soccer.","were","was","did","are","С they — were."],
["mc","«Шёл дождь» по-английски?","It was raining.","It were raining.","It was rain.","It rained was.","С it — was + -ing-форма."],
["or","Я читал книгу (в тот момент)","I was reading a book","read books","Книга одна — артикль a и единственное число: a book."],
["or","Дети спали","The kids were sleeping","kid was","Детей несколько — множественное число kids и were."],
["or","Мы смотрели телевизор","We were watching TV","was","С we — were."],
["fi","I was __ dinner.","Я готовил ужин (в тот момент)","cooking|making","cook|cooked|cooks","После was нужна -ing-форма."],
["fi","What __ you doing?","Что ты делал?","were","was|did|does","С you — were."],
["fi","I was sleeping __ you called.","Я спал, когда ты позвонил","when","so|than|or","«Когда» — when."],
["ty","Я работал (в тот момент)","I was working","was · work — нужна -ing-форма","were","С I — was + -ing-форма."],
["ty","Я смотрел фильм в тот момент (movie)","I was watching a movie","was · watching · movie — артикль a","the","Какой-то один фильм — артикль a."],
["ty","Дети (те самые) играли в тот момент","The kids were playing|The children were playing","kids · were · playing — множественное число","kid","Детей несколько — множественное число kids и were."]]},
{ id:"will", title:"will: решение на ходу, обещание, прогноз", blurb:"Решил прямо сейчас — will, решил заранее — going to.", deck:"Светская беседа", body:`
<p><b>will + начальная форма глагола</b>. В речи почти всегда сокращается: <b>I'll, you'll, it'll</b>. Отрицание — <b>won't</b>.</p>
<p>В русском будущее одно: «сделаю» или «буду делать». В английском выбор зависит от того, <b>когда принято решение</b>: прямо сейчас — will, заранее — be going to.</p>
<h3>Решение в момент речи</h3>
{{ex:I'll have the pasta.|/aɪl ˈhæv ðə ˈpɑːstə/|Я возьму пасту}}{{ex:I'll get it.|/aɪl ˈget ɪt/|Я отвечу (на звонок) / Я открою}}
<h3>Обещание и помощь</h3>
{{ex:I'll help you.|/aɪl ˈhelp ju/|Я тебе помогу}}{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|Я тебе потом позвоню}}{{ex:I won't be late.|/aɪ ˈwoʊnt bi ˈleɪt/|Я не опоздаю}}
<h3>Прогноз</h3>
{{ex:It'll be fine.|/ɪtl bi ˈfaɪn/|Всё будет хорошо}}{{ex:I think it will rain.|/aɪ ˈθɪŋk ɪt wəl ˈreɪn/|Думаю, пойдёт дождь}}
<h3>will и be going to</h3>
<div class="tbl"><table><tr><th></th><th>Когда</th><th>Пример</th></tr><tr><td class="k">will</td><td>решение прямо сейчас, обещание</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>план, решённый заранее</td><td>I'm going to visit Sochi next month.</td></tr></table></div>
<div class="tip">Частая ошибка: <b>I will to go.</b>, <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ После will — только начальная форма, без to и без -ing.</div>`,
check:[["Звонит телефон. Как сказать «Я отвечу»?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Решение в момент речи — will."],["I ___ be late. (Я не опоздаю)",["won't","willn't","don't will","not will"],0,"Отрицание will — won't."],["Какое предложение — о плане, решённом заранее?",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"План, решённый заранее, — be going to."]],
practice:[
["mc","«Я тебе помогу» по-английски?","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","После will — начальная форма глагола."],
["mc","В ресторане, решаешь прямо сейчас: «Я возьму пасту» по-английски?","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Решение в момент речи — will."],
["mc","«Я не опоздаю» по-английски?","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","will not сокращается до won't."],
["mc","«Ты придёшь?» по-английски?","Will you come?","Do you will come?","Will you coming?","Will come you?","Will + подлежащее + начальная форма."],
["mc","Какое предложение — о плане, решённом заранее?","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","План, решённый заранее, — be going to."],
["or","Я тебе потом позвоню","I'll call you later","calling","После will — начальная форма глагола."],
["or","Я возьму кофе (одну чашку)","I'll have a coffee","the coffees","Одна чашка кофе — артикль a: a coffee."],
["or","Я открою дверь","I'll open the door","a doors","Та самая дверь, что перед нами, — артикль the."],
["fi","I __ call you tomorrow.","Я позвоню тебе завтра","will","am|going|do","Обещание — will."],
["fi","I __ forget.","Я не забуду","won't|will not","don't|not|willn't","Отрицание will — won't."],
["fi","__ you help me?","Поможешь мне?","Will|Can|Could|Would","Do|Are|Is","Просьба — Will you…? (или Can / Could / Would you…?)."],
["ty","Я тебе помогу","I'll help you|I'll help","I'll · help · you","helping","После will — начальная форма глагола."],
["ty","Я возьму салат (заказ в ресторане, используй have)","I'll have a salad|I'll have the salad","I'll have · salad — не забудь артикль","salads","Заказываешь одну порцию — артикль a (или the, если это салат из меню)."],
["ty","Я закрою дверь","I'll close the door|I'll shut the door","I'll · close · door — артикль the","a","Та самая дверь, что перед нами, — артикль the."]]},
{ id:"perfect", title:"Present Perfect: опыт и результат", blurb:"have + третья форма — опыт и результат к настоящему. Названо время — Past Simple.", deck:"Путешествия (аэропорт и отель)", body:`
<p><b>Present Perfect</b> (настоящее совершенное время) — это <b>have / has + третья форма глагола</b> (V3). В русском такого времени нет, поэтому его легко заменить на Past Simple. Главная мысль: <b>прошлое действие важно сейчас</b> — как опыт («я бывал там») или как результат («я потерял ключи — их нет»). <b>Когда</b> именно это было, не говорят.</p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|Я был в Японии (бывал там)}}{{ex:She has visited Russia twice.|/ʃi həz ˈvɪzɪtɪd ˈrʌʃə ˈtwaɪs/|Она дважды приезжала в Россию}}{{ex:I've lost my keys.|/aɪv ˈlɔːst maɪ ˈkiːz/|Я потерял ключи (и сейчас их нет)}}
<h3>ever и never</h3>
{{ex:Have you ever eaten sushi?|/həv ju ˈevər ˈiːtn ˈsuːʃi/|Ты когда-нибудь ел суши?}}{{ex:I've never seen it.|/aɪv ˈnevər ˈsiːn ɪt/|Я этого никогда не видел}}
<p>Короткий ответ: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<h3>Частые третьи формы</h3>
<div class="tbl"><table><tr><th>Начальная форма</th><th>V2</th><th>V3</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>been to и gone to</h3>
<p><b>been to</b> — «был там и вернулся», <b>gone to</b> — «уехал туда и сейчас там».</p>
{{ex:She's gone to Sochi.|/ʃiz ˈgɔːn tə ˈsoʊtʃi/|Она уехала в Сочи (сейчас её здесь нет)}}
<h3>Названо время — Past Simple</h3>
<p>Если в предложении есть last year, yesterday, in 2020 или ago, Present Perfect не подходит — это частая ошибка и в ЕГЭ. И наоборот: время не названо, а важен результат сейчас — нужен Present Perfect. «Ты не видел мои ключи?» (ищу их прямо сейчас) — <b>Have you seen my keys?</b></p>
{{ex:I went to Japan last year.|/aɪ ˈwent tə dʒəˈpæn ˈlæst ˈjɪr/|В прошлом году я ездил в Японию}}
<div class="tip">Две ловушки: <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓ И «я уже сделал», «я потерял» без указания времени — это обычно Present Perfect: <b>I've lost my keys.</b></div>`,
check:[["«Ты когда-нибудь был в Японии?» по-английски?",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Опыт — Have you ever + третья форма."],["I ___ never seen that movie. Что стоит на месте пропуска?",["am","did","have","was"],2,"have + never + третья форма."],["Какое предложение правильное?",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"Названо время (last year) — Past Simple."]],
practice:[
["mc","«Я был в Японии» (опыт) по-английски?","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","have + третья форма been."],
["mc","Третья форма глагола see?","seen","saw","seed","seeing","Три формы глагола: see — saw — seen."],
["mc","«Ты когда-нибудь ел кимчи?» по-английски?","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","Опыт — Have you ever + третья форма."],
["mc","«Я этого никогда не видел» по-английски?","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","have + never + третья форма."],
["mc","Есть указание «в прошлом году». Какое предложение правильное?","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","Названо время — Past Simple, не Present Perfect."],
["or","Я видел этот фильм (опыт)","I've seen the movie","a saw","Фильм, о котором знают оба, — артикль the."],
["or","Я дважды был в Корее","I've been to Korea twice","went","После have — третья форма been."],
["or","Я никогда не видел змею","I've never seen a snake","the snakes","Змея вообще, любая — артикль a и единственное число."],
["fi","Have you ever __ to Busan?","Ты когда-нибудь был в Пусане?","been","be|went|go","После have — третья форма been."],
["fi","I've __ eaten that.","Я никогда такого не ел","never","ever|no|not never","«Никогда» — never, и второе отрицание не нужно."],
["fi","She __ visited Korea twice.","Она дважды приезжала в Корею","has","have|is|did","С she — has."],
["ty","Ты когда-нибудь был в Японии?","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan","went","Опыт: Have you ever been to…?"],
["ty","Я читал ту книгу (опыт, Present Perfect)","I've read the book|I've read that book","I've · read · book — артикль the","a","Книга, о которой знают оба, — артикль the."],
["ty","У меня никогда не было кошки (Present Perfect)","I've never had a cat","never · had · cat — артикль a","the","Кошка вообще, любая — артикль a."]]},
{ id:"modals", title:"have to, must, should, might: долг и совет", blurb:"Надо, стоит, может быть. Одно русское «должен» — три английских глагола.", deck:"Врач и экстренные случаи", body:`
<p>Четыре слова для обязанности, совета и вероятности. После всех — <b>начальная форма</b> глагола; to есть только в have to.</p>
<div class="tbl"><table><tr><th>По-русски</th><th>По-английски</th></tr><tr><td>должен (обязан), надо, нужно</td><td class="k">have to / must / need to</td></tr><tr><td>должен (советую), стоит</td><td class="k">should</td></tr><tr><td>не надо (не обязательно)</td><td class="k">don't have to</td></tr><tr><td>нельзя</td><td class="k">must not / can't</td></tr><tr><td>можно (разрешено)</td><td class="k">can / may</td></tr><tr><td>может быть, возможно</td><td class="k">might</td></tr></table></div>
<h3>have to: надо</h3>
<p>Самый частый вариант в разговоре. С he / she / it — <b>has to</b>.</p>
{{ex:I have to work tomorrow.|/aɪ ˈhæf tə ˈwɜːrk təˈmɑːroʊ/|Мне завтра надо работать}}{{ex:She has to go now.|/ʃi ˈhæs tə ˈgoʊ ˈnaʊ/|Ей надо идти}}
<h3>don't have to и must not — не одно и то же</h3>
<div class="tbl"><table><tr><th>Фраза</th><th>Смысл</th></tr><tr><td class="k">You don't have to come.</td><td>Можно не приходить (не обязательно)</td></tr><tr><td class="k">You must not smoke here.</td><td>Здесь курить нельзя (запрет)</td></tr></table></div>
<p>«Не надо приходить» в смысле «не обязательно» — это <b>don't have to</b>, а не mustn't.</p>
<h3>should: стоит, лучше бы</h3>
{{ex:You should see a doctor.|/ju ʃəd ˈsiː ə ˈdɑːktər/|Тебе стоит сходить к врачу}}{{ex:You shouldn't worry.|/ju ˈʃʊdnt ˈwɜːri/|Не стоит волноваться}}
<h3>might: может быть</h3>
{{ex:It might rain.|/ɪt maɪt ˈreɪn/|Может пойти дождь}}{{ex:I might be late.|/aɪ maɪt bi ˈleɪt/|Я, возможно, опоздаю}}
<div class="tip">Частая ошибка: <b>You should to go.</b>, <b>It might rains.</b> ✗ → <b>You should go.</b>, <b>It might rain.</b> ✓</div>`,
check:[["«Можно не приходить» (не обязательно) по-английски?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"«Не обязательно» — don't have to."],["Совет: You ___ see a doctor. Что стоит на месте пропуска?",["might","have","should","must to"],2,"Совет — should + начальная форма."],["She ___ to work today. Что стоит на месте пропуска?",["have","must","should","has"],3,"С she — has to."]],
practice:[
["mc","«Мне завтра надо работать» по-английски?","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","have to + начальная форма."],
["mc","«Можно не приходить» (не обязательно) по-английски?","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","«Не обязательно» — don't have to."],
["mc","«Тебе стоит сходить к врачу» по-английски?","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","should + начальная форма; врач какой-нибудь, поэтому артикль a."],
["mc","«Может пойти дождь» по-английски?","It might rain.","It might rains.","It might to rain.","It mights rain.","might + начальная форма."],
["mc","«Здесь курить нельзя» по-английски?","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","Запрет — must not."],
["or","Тебе стоит сходить к врачу","You should see a doctor","the doctors","Какой-нибудь врач, один — артикль a."],
["or","Мне надо идти прямо сейчас","I have to go now","going","После have to — начальная форма."],
["or","Тебе надо купить билет","You have to buy a ticket","the tickets","Билет один — артикль a и единственное число ticket."],
["fi","She __ to study tonight.","Ей надо заниматься сегодня вечером","has","have|must|should","С she — has to."],
["fi","You __ have to pay.","Платить не обязательно","don't|do not","must not|not|aren't","«Не обязательно» — don't have to."],
["fi","It __ rain tomorrow.","Завтра может пойти дождь","might|may|could","must to|has to|should to","Вероятность — might."],
["ty","Мне надо работать","I have to work|I must work|I need to work","have to · work","should","Обязанность — have to."],
["ty","Тебе стоит сходить к врачу","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — артикль a","the","Какой-нибудь врач — артикль a (go to the doctor — тоже можно)."],
["ty","Тебе надо купить билет (have to)","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — артикль a","the","Билет один — артикль a."]]},
{ id:"to-ing", title:"to или -ing после глагола: want to, enjoy -ing", blurb:"После want — to, после enjoy — -ing. Всё решает первый глагол.", deck:"Светская беседа", body:`
<p>Когда два глагола идут подряд, первый решает, каким будет второй: <b>to + глагол</b> (инфинитив) или <b>-ing-форма</b> (герундий). В русском после «хочу», «люблю», «закончил» всегда стоит инфинитив, поэтому тянет сказать <b>I enjoy to cook</b> или <b>I finished to work</b>. Такие глаголы проще запомнить списком.</p>
<div class="tbl"><table><tr><th>Дальше to</th><th>Дальше -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + глагол: часто о том, что впереди</h3>
{{ex:I want to go home.|/aɪ ˈwɑːnt tə ˈgoʊ ˈhoʊm/|Я хочу домой}}{{ex:I need to study.|/aɪ ˈniːd tə ˈstʌdi/|Мне нужно позаниматься}}{{ex:I'd like to order.|/aɪd ˈlaɪk tu ˈɔːrdər/|Я хотел бы заказать}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə ˈlɜːrn ˈɪŋglɪʃ/|Я решил выучить английский}}
<h3>После enjoy, finish, mind — -ing</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Я люблю готовить}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɜːrkɪŋ/|Я закончил работать}}{{ex:I don't mind waiting.|/aɪ ˈdoʊnt ˈmaɪnd ˈweɪtɪŋ/|Я не против подождать}}
<h3>Можно и так, и так</h3>
<p>После like, love, start подходят оба варианта: <b>I like to cook</b> = <b>I like cooking</b>.</p>
<div class="tip">Частая ошибка: <b>I want go.</b>, <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>, <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. Что стоит на месте пропуска?",["go","going","to go","to going"],2,"После want — to + глагол."],["I enjoy ___ movies. Что стоит на месте пропуска?",["watching","to watch","watch","to watching"],0,"После enjoy — -ing-форма."],["«Я хотел бы заказать» по-английски?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"После would like — to + глагол."]],
practice:[
["mc","I need ___ now.","to go","going","go","to going","После need — to + глагол."],
["mc","I enjoy ___.","cooking","to cook","cook","to cooking","После enjoy — -ing-форма."],
["mc","«Я хотел бы заказать» по-английски?","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","После would like — to + глагол."],
["mc","«Я закончил работать» по-английски?","I finished working.","I finished to work.","I finished work to.","I finish worked.","После finish — -ing-форма, хотя по-русски здесь инфинитив."],
["mc","«Я не против подождать» по-английски?","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","После mind — -ing-форма."],
["or","Я хочу купить машину","I want to buy a car","the buying","После want — to; машина одна — артикль a."],
["or","Мне нравится смотреть фильмы (enjoy)","I enjoy watching movies","movie watch","После enjoy — -ing-форма; фильмы вообще — множественное число movies."],
["or","Мне надо отдохнуть","I need to rest","resting","После need — to + глагол."],
["fi","I want __ a coffee.","Я хочу выпить кофе","to have|to drink|to get","have|having|drinking","После want — to + глагол."],
["fi","She enjoys __.","Она любит плавать","swimming","to swim|swim|swims","После enjoy — -ing-форма."],
["fi","I decided __ English.","Я решил учить английский","to study|to learn","study|studying|studied","После decide — to + глагол."],
["ty","Я хочу пойти домой","I want to go home","want to · go · home — без артикля","the","После want — to; перед home артикль не нужен."],
["ty","Мне нравится читать книги (используй enjoy)","I enjoy reading books|I enjoy reading","enjoy · read · book — множественное число","book","После enjoy — -ing-форма; книги вообще — множественное число books."],
["ty","Я хотел бы заказать","I'd like to order|I want to order","I'd like · to · order","ordering","После would like — to + глагол."]]},
{ id:"articles-2", title:"Артикль the: единственное в своём роде и «вообще»", blurb:"Перед инструментом — the, перед спортом — ничего. Страны и разговор «в целом».", deck:"Путешествия (аэропорт и отель)", body:`
<p>Ещё один урок про артикли — здесь случаи, где выбор задан правилом. Ошибки у русскоговорящих идут в обе стороны: забывают the там, где вещь одна на свете (<b>Sun is hot.</b> ✗ → <b>The sun is hot.</b> ✓), и ставят лишний the, когда говорят о чём-то в целом (<b>The cats are cute.</b> ✗ в значении «кошки вообще»).</p>
<h3>Когда нужен the</h3>
<div class="tbl"><table><tr><th>Случай</th><th>Пример</th></tr><tr><td>единственное в своём роде</td><td class="k">the sun, the internet</td></tr><tr><td>музыкальные инструменты</td><td class="k">play the piano</td></tr><tr><td>реки, моря, океаны</td><td class="k">the Volga, the Pacific</td></tr><tr><td>страны с множественным числом или словами states, kingdom</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ ˈpleɪ ðə piˈænoʊ/|Я играю на пианино}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd ˈsteɪts/|Она из США}}{{ex:I found it on the internet.|/aɪ ˈfaʊnd ɪt ɑːn ði ˈɪntərnet/|Я нашёл это в интернете}}
<h3>Когда артикль не нужен</h3>
<div class="tbl"><table><tr><th>Случай</th><th>Пример</th></tr><tr><td>большинство стран и городов</td><td class="k">Russia, Moscow</td></tr><tr><td>спорт, языки, приёмы пищи</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>разговор «в целом»</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Russia.|/aɪ ˈlɪv ɪn ˈrʌʃə/|Я живу в России}}{{ex:I play soccer.|/aɪ ˈpleɪ ˈsɑːkər/|Я играю в футбол}}{{ex:Dogs are cute.|/ˈdɔːgz ər ˈkjuːt/|Собаки милые}}
<h3>Вообще или конкретные</h3>
{{ex:I like dogs.|/aɪ ˈlaɪk ˈdɔːgz/|Я люблю собак (вообще)}}{{ex:The dogs in this park are cute.|/ðə ˈdɔːgz ɪn ˈðɪs ˈpɑːrk ər ˈkjuːt/|Собаки в этом парке милые (конкретные)}}
<div class="tip">«Кошки милые», «Я люблю музыку» — в общем смысле артикля нет: множественное число без the или неисчисляемое существительное без артикля. <b>I like the dogs.</b> значит «Мне нравятся эти собаки».</div>`,
check:[["I play ___ soccer. Что стоит на месте пропуска?",["a","the","an","(без артикля)"],3,"С названиями видов спорта артикль не нужен."],["She's from ___ United States. Что стоит на месте пропуска?",["the","a","an","(без артикля)"],0,"Перед United States нужен артикль the."],["«Собаки милые» (собаки вообще) по-английски?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"В общем смысле — множественное число без артикля."]],
practice:[
["mc","I play ___ piano.","the","a","an","some","Перед музыкальным инструментом — артикль the."],
["mc","«Я живу в Корее» по-английски?","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","С названиями большинства стран артикль не нужен."],
["mc","«Я играю в футбол» по-английски?","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","С названиями видов спорта артикль не нужен."],
["mc","«Кошки милые» (кошки вообще) по-английски?","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","В общем смысле — множественное число без артикля."],
["mc","She's from ___ United States.","the","a","an","some","Перед United States нужен артикль the."],
["or","Я играю на пианино","I play the piano","a pianos","Перед музыкальным инструментом — артикль the."],
["or","Собаки милые","Dogs are cute","The dog","Собаки вообще — множественное число без артикля: dogs."],
["or","Я нашёл это в интернете","I found it on the internet","a","Интернет один — артикль the."],
["fi","I speak __.","Я говорю по-английски","English","the English|an English|a English","С названиями языков артикль не нужен."],
["fi","The sun rises in __ east.","Солнце встаёт на востоке","the","a|an|some","Со сторонами света — артикль the."],
["fi","I love __.","Я очень люблю музыку","music","the musics|a music|musics","Музыка вообще — без артикля; music — неисчисляемое, поэтому без -s."],
["ty","Я из Соединённых Штатов","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — артикль the","a","Перед United States нужен артикль the."],
["ty","Я играю на гитаре","I play the guitar|I play guitar","play · guitar — артикль the","a","Перед музыкальным инструментом — артикль the."],
["ty","Кошки милые","Cats are cute","cat — множественное число, без артикля","The cat","Кошки вообще — множественное число без артикля: cats."]]},
{ id:"first-conditional", title:"Условные предложения 1: If + Present Simple, will", blurb:"«Если…, то…». После if и when — без will, хотя по-русски там будущее.", deck:"Работа и деловые письма", body:`
<p>Реальное условие — то, что вполне может случиться. Схема: <b>If + Present Simple, will + глагол</b>. По-русски после «если» стоит будущее время: «Если <b>пойдёт</b> дождь…». В английском после if — <b>настоящее</b>, хотя речь о будущем.</p>
{{ex:If it rains, I'll stay home.|/ɪf ɪt ˈreɪnz aɪl ˈsteɪ ˈhoʊm/|Если пойдёт дождь, я останусь дома}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju ˈdoʊnt ˈhɜːri jul ˈmɪs ðə ˈbʌs/|Если не поторопишься, не успеешь на автобус}}
<h3>Части можно поменять местами</h3>
<p>Если if стоит во второй половине, запятая не нужна.</p>
{{ex:I'll help you if I have time.|/aɪl ˈhelp ju ɪf aɪ ˈhæv ˈtaɪm/|Я помогу тебе, если будет время}}
<h3>С повелительным наклонением</h3>
{{ex:If you're late, call me.|/ɪf jʊr ˈleɪt ˈkɔːl mi/|Если опаздываешь, позвони мне}}{{ex:If you need help, let me know.|/ɪf ju ˈniːd ˈhelp ˈlet mi ˈnoʊ/|Если нужна помощь, скажи}}
<h3>when: «когда» (точно случится)</h3>
<p>То же правило — после <b>when</b>, <b>before</b>, <b>after</b>, <b>as soon as</b>. «Когда <b>приду</b> домой, позвоню» — тоже без will.</p>
{{ex:When I get home, I'll call you.|/wen aɪ ˈget ˈhoʊm aɪl ˈkɔːl ju/|Когда приду домой, позвоню тебе}}
<div class="tip">Частая ошибка: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓ Русское «пойдёт» после «если» по-английски — Present Simple.</div>`,
check:[["If it ___ tomorrow, I'll stay home. Что стоит на месте пропуска?",["will rain","rains","rained","raining"],1,"После if — Present Simple, хотя по-русски здесь будущее."],["If you study, you ___ pass. Что стоит на месте пропуска?",["pass will","passing","will pass","passed"],2,"В главной части — will + начальная форма."],["Какое предложение правильное?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"После if — Present Simple, в главной части — will."]],
practice:[
["mc","If it ___, I'll stay home.","rains","will rain","rained","is rain","После if — Present Simple."],
["mc","If you're late, ___ me.","call","will calling","calls","to call","Повелительное наклонение — начальная форма глагола."],
["mc","«Я помогу тебе, если будет время» по-английски?","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","После if will не ставится."],
["mc","«Если не поторопишься, не успеешь на автобус» по-английски?","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","После if — Present Simple, отрицание с don't."],
["mc","«Когда приду домой, позвоню тебе» по-английски?","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","После when — тоже Present Simple."],
["or","Если пойдёт дождь, я останусь дома","If it rains I'll stay home","will the","После if — Present Simple; перед home артикль не нужен."],
["or","Если будет время, позвони мне","If you have time call me","will","После if will не ставится."],
["or","Ты не успеешь на автобус","You'll miss the bus","a buses","Тот самый автобус, на который собирались, — артикль the."],
["fi","If it __ tomorrow, we'll cancel.","Если завтра пойдёт дождь, мы всё отменим","rains","will rain|rained|raining","После if — Present Simple."],
["fi","If you study, you __ pass.","Если будешь заниматься, сдашь экзамен","will|can|might","are|did|passing","В главной части — will + начальная форма."],
["fi","__ you need help, call me.","Если нужна помощь, позвони мне","If|When","So|But|Because","«Если» — if."],
["ty","Если у меня будет время, я помогу","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time","will","После if will не ставится: if I have time."],
["ty","Если пойдёт дождь, я возьму такси","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — артикль a","the","Какое-нибудь такси — артикль a."],
["ty","Ты опоздаешь на автобус (используй miss)","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — артикль the","a","Тот самый автобус, на который собирались, — артикль the."]]},
{ id:"relative", title:"who / which / that: придаточные определительные", blurb:"«Который» — это who, which или that. И никаких запятых.", deck:"Покупки и оплата", body:`
<p>Придаточное определительное (с who / which / that) описывает существительное, как русское «который». Порядок слов знакомый: сначала существительное, потом описание — <b>the book that I bought</b>, «книга, которую я купил». Трудности в другом: какое слово выбрать, нужна ли запятая и что можно пропустить.</p>
<h3>О людях — who</h3>
{{ex:I have a friend who lives in Kazan.|/aɪ ˈhæv ə ˈfrend hu ˈlɪvz ɪn kəˈzɑːn/|У меня есть друг, который живёт в Казани}}{{ex:the man who lives next door|/ðə ˈmæn hu ˈlɪvz ˈnekst ˈdɔːr/|мужчина, который живёт по соседству}}
<h3>О предметах — that или which</h3>
{{ex:the book that I bought|/ðə ˈbʊk ðət aɪ ˈbɔːt/|книга, которую я купил}}{{ex:This is the phone that I want.|/ˈðɪs ɪz ðə ˈfoʊn ðət aɪ ˈwɑːnt/|Вот телефон, который я хочу}}
<h3>That часто пропускают</h3>
<p>Если после «который» сразу идут подлежащее и глагол, that можно опустить. В разговоре так обычно и делают.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi ˈsɔː wəz ˈgreɪt/|Фильм, который мы смотрели, был отличный}}
<h3>О месте — where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi ˈmet/|кафе, где мы познакомились}}
<div class="tip">Две русские привычки. Запятая: в русском она перед «который» всегда, в английском в таких предложениях её нет — <b>the man who lives next door</b>. Лишнее местоимение: «который» уже заменяет дополнение, поэтому <b>the book which I read it</b> ✗ → <b>the book (that) I read</b> ✓. И what вместо «который» не подходит: <b>the book what I bought</b> ✗</div>`,
check:[["I have a friend ___ lives in Busan. Что стоит на месте пропуска?",["which","who","what","he"],1,"О человеке — who."],["«Книга, которую я купил» по-английски?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"Сначала существительное, потом that и описание; what здесь не подходит."],["Какое предложение правильное?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"Описание с who стоит сразу после существительного — как и в русском."]],
practice:[
["mc","I have a friend ___ speaks English.","who","which","what","she","О человеке — who."],
["mc","«Книга, которую я купил» по-английски?","the book that I bought","the I bought book","the book what I bought","the bought I book","Сначала существительное, потом описание с that; what не подходит."],
["mc","«Мужчина, который живёт по соседству» по-английски?","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","О человеке — who."],
["mc","This is the phone ___ I want.","that","who","what","it","О предмете — that."],
["mc","«Фильм, который мы смотрели» по-английски?","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","That здесь можно опустить."],
["or","Это книга, которую я купил","This is the book I bought","a what","Та самая книга, которую я купил, — артикль the."],
["or","У меня есть друг, который готовит","I have a friend who cooks","the which","Друг упоминается впервые, он один из многих — артикль a."],
["or","Фильм, который мы смотрели, был отличный","The movie we saw was great","A movies","Тот самый фильм, который мы смотрели, — артикль the."],
["fi","the man __ lives here","мужчина, который здесь живёт","who|that","what|he|which","О человеке — who (или that)."],
["fi","the book __ I read","книга, которую я прочитал","that|which","who|what|it","О предмете — that или which."],
["fi","the cafe __ we met","кафе, где мы познакомились","where","who|what|it","О месте — where."],
["ty","Это книга, которую я купил","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — артикль the","a","Та самая книга, которую я купил, — артикль the."],
["ty","У меня есть друг, который говорит по-корейски","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — артикль a","the","Друг упоминается впервые — артикль a."],
["ty","Фильм (movie), который мы видели, был отличный","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great","what","Сначала существительное, потом описание; what не подходит."]]},
];
