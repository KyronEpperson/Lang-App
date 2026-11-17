/* Practice sets for the ru-en course (docs/PRACTICE-SPEC.md v1).
   Prompts, why and hint are Russian; answers are English (identical to ko-en).
   Per lesson: 5 mc -> 3 order -> 3 fill -> 3 type.
   Standing article/plural check (profile ru.md §7): at least 2 of 3 order items and 2 of 3 type items hinge on a/an/the or plural -s,
   and their why names артикль, множественное число or исчисляемое / неисчисляемое. */

/* adds the same sentence with "please" at the end, after each base variant */
const pl = list => list.flatMap(s => [s, s + ' please']);

module.exports = {
  pron: [
    { t: "mc", q: "Какое слово значит «рис»?", o: ["rice", "lice", "rise", "nice"], why: "Рис — rice, с R. Звуки р и л есть и в русском; следи только, чтобы английский r не был раскатистым. С L получится lice (вши)." },
    { t: "mc", q: "Какое слово значит «вентилятор»?", o: ["fan", "pan", "van", "ban"], why: "Ф и п ты различаешь и по-русски — это разминка. Для F верхние зубы касаются нижней губы; с P получится pan (сковорода)." },
    { t: "mc", q: "Какое слово значит «думать»?", o: ["think", "sink", "thing", "pink"], why: "TH: кончик языка между зубами, а не звук с. Со звуком с получится sink (раковина)." },
    { t: "mc", q: "Какое слово значит «голосовать»?", o: ["vote", "boat", "goat", "bought"], why: "В и б различаются и в русском. Для V верхние зубы касаются нижней губы; с B получится boat (лодка)." },
    { t: "mc", q: "Какое слово значит «правый, направо»?", o: ["right", "light", "fight", "bright"], why: "right с R — «правый». light с L — «свет»." },

    { t: "order", p: "Это банан", a: ["This", "is", "a", "banana"], x: ["an", "Dis"], why: "banana начинается с согласного звука, поэтому артикль a. This пишется через TH." },
    { t: "order", p: "три дерева", a: ["three", "trees"], x: ["tree", "free"], why: "Деревьев три — множественное число: trees. three начинается с TH, tree — с TR." },
    { t: "order", p: "Я люблю кофе", a: ["I", "like", "coffee"], x: ["copy"], why: "В coffee звук F: верхние зубы на нижней губе. С P получится copy (копия)." },

    { t: "fill", q: "I eat __ice every day.", p: "Я каждый день ем рис", a: ["r"], o: ["l", "n", "w"], why: "Рис — rice, с R. С L получится lice (вши)." },
    { t: "fill", q: "I __ink so.", p: "Думаю, да", a: ["th"], o: ["s", "t", "p"], why: "think начинается с TH. С s получится sink (раковина)." },
    { t: "fill", q: "This is my __.", p: "Это моя сумка", a: ["bag"], o: ["back", "bug", "beg"], why: "Сумка — bag, со звонким g на конце. Не оглушай: с глухим k получится back (спина)." },

    { t: "type", p: "три дерева", a: ["three trees"], hint: "three · tree — их три, значит множественное число", x: ["tree"], why: "three начинается с TH, tree — с TR; деревьев три — множественное число, нужно -s." },
    { t: "type", p: "две лодки", a: ["two boats"], hint: "two · boat — их две, значит множественное число", x: ["boat", "votes"], why: "Лодка — boat, с B; лодок две — множественное число, нужно -s. С V получится vote (голос на выборах)." },
    { t: "type", p: "очень лёгкий (по весу)", a: ["very light"], hint: "very · light — начинаются с V и L", x: ["berry"], why: "very начинается с V (верхние зубы на нижней губе), light — с L (кончик языка за верхними зубами)." }
  ],

  articles: [
    { t: "mc", q: "«Я студент» =", o: ["I'm a student.", "I'm student.", "I'm an student.", "I'm the student."], why: "Перед профессией или статусом нужен артикль a." },
    { t: "mc", q: "«У меня есть идея» =", o: ["I have an idea.", "I have a idea.", "I have idea.", "I have ideas."], why: "idea начинается с гласного звука, поэтому артикль an." },
    { t: "mc", q: "«Один час» по-английски?", o: ["an hour", "a hour", "one hours", "hour"], why: "В hour буква h не читается: слово начинается с гласного звука, поэтому артикль an." },
    { t: "mc", q: "«Я очень люблю собак» (собак вообще)", o: ["I love dogs.", "I love a dog.", "I love the dog.", "I love dog."], why: "О целом классе предметов говорят во множественном числе без артикля." },
    { t: "mc", q: "«У меня есть собака. Собака такая милая» =", o: ["I have a dog. The dog is so cute.", "I have the dog. A dog is so cute.", "I have dog. The dog is so cute.", "I have a dog. A dog is so cute."], why: "Первое упоминание — артикль a, повторное — the." },

    { t: "order", p: "Я учитель", a: ["I'm", "a", "teacher"], x: ["the", "an"], why: "Перед профессией нужен артикль a. teacher начинается с согласного звука, поэтому не an." },
    { t: "order", p: "Закроешь дверь? (в этой комнате)", a: ["Can", "you", "close", "the", "door"], x: ["a"], why: "Дверь известна обоим — артикль the." },
    { t: "order", p: "Я не пью кофе", a: ["I", "don't", "drink", "coffee"], x: ["a", "the"], why: "Кофе вообще — неисчисляемое существительное, без артикля." },

    { t: "fill", q: "I'm __ university student.", p: "Я студент университета", a: ["a"], o: ["an", "the", "two"], why: "university начинается со звука /j/, поэтому артикль a. Решает звук, а не буква." },
    { t: "fill", q: "I have __ older sister.", p: "У меня есть старшая сестра", a: ["an"], o: ["a", "the", "two"], why: "older начинается с гласного звука, поэтому артикль an." },
    { t: "fill", q: "I don't like __.", p: "Я не люблю кошек (кошек вообще)", a: ["cats"], o: ["cat", "a cat", "the cat"], why: "О целом классе предметов — множественное число cats без артикля." },

    { t: "type", p: "У меня есть идея", a: ["I have an idea", "I've got an idea", "I have got an idea"], hint: "have · idea — какой артикль перед гласным звуком?", x: ["a"], why: "idea начинается с гласного звука, поэтому артикль an." },
    { t: "type", p: "Я люблю собак (собак вообще)", a: ["I like dogs", "I love dogs"], hint: "like · dog — о классе предметов: множественное число", x: ["dog", "a"], why: "О целом классе предметов — множественное число dogs без артикля." },
    { t: "type", p: "Давай пообедаем (вместе)", a: ["Let's have lunch", "Let's eat lunch", "Let's get lunch"], hint: "let's · have · lunch — нужен ли артикль перед приёмом пищи?", x: ["a", "the"], why: "Перед названиями приёмов пищи артикль не ставят." }
  ],

  be: [
    { t: "mc", q: "«Я устал(а)» =", o: ["I'm tired.", "I tired.", "I do tired.", "I am tire."], why: "По-русски связки нет, а по-английски перед прилагательным (tired) нужен глагол to be." },
    { t: "mc", q: "«Он говорит по-английски?» =", o: ["Does he speak English?", "Do he speak English?", "Is he speak English?", "Does he speaks English?"], why: "С he нужен вспомогательный глагол does, а смысловой глагол после него — без -s." },
    { t: "mc", q: "«Она на работе» =", o: ["She's at work.", "She at work.", "She does at work.", "She are at work."], why: "Место тоже требует глагола to be; с she — is." },
    { t: "mc", q: "Как ответить «да» на Do you like coffee?", o: ["Yes, I do.", "Yes, I am.", "Yes, I like.", "Yes, I does."], why: "Вопрос с do — и короткий ответ с do." },
    { t: "mc", q: "«Она не ест мясо» =", o: ["She doesn't eat meat.", "She don't eat meat.", "She isn't eat meat.", "She doesn't eats meat."], why: "Отрицание с she: doesn't + начальная форма без -s." },

    { t: "order", p: "Мой брат работает в Сеуле", a: ["My", "brother", "works", "in", "Seoul"], x: ["work", "is"], why: "Подлежащее — один человек (he), поэтому works с окончанием -s; глагол to be не нужен." },
    { t: "order", p: "Я не студент", a: ["I'm", "not", "a", "student"], x: ["don't", "the"], why: "Отрицание с to be строится через not, а перед статусом нужен артикль a." },
    { t: "order", p: "У неё две собаки", a: ["She", "has", "two", "dogs"], x: ["have", "dog"], why: "После she — has; собак две — множественное число: dogs." },

    { t: "fill", q: "My brother __ in Seoul.", p: "Мой брат живёт в Сеуле", a: ["lives"], o: ["live", "is live", "living"], why: "Подлежащее — he, поэтому окончание -s: lives." },
    { t: "fill", q: "__ you tired?", p: "Ты устал(а)?", a: ["Are"], o: ["Do", "Is", "Does"], why: "Другого глагола нет, дальше прилагательное tired — значит, вопрос с глаголом to be; с you — are." },
    { t: "fill", q: "We __ hungry.", p: "Мы голодны", a: ["are"], o: ["is", "am", "do"], why: "Другого глагола нет, дальше прилагательное hungry — нужен глагол to be; с we — are." },

    { t: "type", p: "Он учитель", a: ["He's a teacher", "He is a teacher"], hint: "teacher — глагол to be + артикль перед профессией", x: ["the"], why: "По-русски «он учитель» без связки, а по-английски нужны to be и артикль a перед профессией." },
    { t: "type", p: "Я не люблю кофе", a: ["I don't like coffee", "I do not like coffee"], hint: "don't · like · coffee — отрицание со смысловым глаголом", x: ["am"], why: "like — смысловой глагол, поэтому отрицание строится с don't (I'm not like ✗)." },
    { t: "type", p: "У неё есть кошка?", a: ["Does she have a cat"], hint: "does · have · cat — кошка одна: какой артикль?", x: ["has"], why: "После does — начальная форма have; кошка одна — артикль a." }
  ],

  polite: [
    { t: "mc", q: "Как естественнее всего заказать латте в кафе?", o: ["Can I get a latte, please?", "Give me latte.", "I want latte.", "Latte, give me."], why: "В кафе естественно звучит Can I get…? Латте один — нужен артикль a." },
    { t: "mc", q: "Как вежливее всего попросить незнакомого человека о помощи?", o: ["Could you help me?", "Help me.", "You help me.", "I want help."], why: "Could you…? — вежливая просьба к незнакомому человеку." },
    { t: "mc", q: "Собеседника не удалось расслышать. Как вежливо переспросить?", o: ["Could you say that again?", "Say again.", "What you say?", "Again say, please."], why: "Could you say that again? — вежливая просьба повторить." },
    { t: "mc", q: "Очень вежливо: «Вас не затруднит нас сфотографировать?»", o: ["Would you mind taking a picture of us?", "Would you mind take a picture of us?", "Would you mind to take a picture of us?", "Would you mind took a picture of us?"], why: "После mind — -ing-форма: taking." },
    { t: "mc", q: "В самолёте: «Мне, пожалуйста, место у окна»", o: ["I'd like a window seat.", "I'd like window seat.", "I like a window seat.", "I'd like the window seats."], why: "I'd like… — вежливая просьба. Место одно — нужен артикль a." },

    { t: "order", p: "Можно мне один латте?", a: ["Can", "I", "get", "a", "latte"], x: ["the", "give"], why: "Заказ делаем впервые, и порция одна — артикль a." },
    { t: "order", p: "Вас не затруднит открыть окно? (в этой комнате)", a: ["Would", "you", "mind", "opening", "the", "window"], x: ["open", "a"], why: "После mind — -ing-форма, а окно известно обоим — артикль the." },
    { t: "order", p: "Не могли бы вы говорить помедленнее?", a: ["Could", "you", "speak", "more", "slowly"], x: ["slow"], why: "Could you…? — вежливая просьба." },

    { t: "fill", q: "Would you mind __ the door?", p: "Вас не затруднит закрыть дверь?", a: ["closing"], o: ["close", "to close", "closed"], why: "После mind — -ing-форма." },
    { t: "fill", q: "Can I get __ iced coffee?", p: "Можно мне холодный кофе со льдом?", a: ["an"], o: ["a", "two", "many"], why: "iced начинается с гласного звука /aɪ/, поэтому артикль an." },
    { t: "fill", q: "No, not at __.", p: "(ответ на Would you mind…?) Да, конечно", a: ["all"], o: ["any", "one", "ever"], why: "No, not at all — «совсем не возражаю», то есть «да, конечно»." },

    { t: "type", p: "Не могли бы вы мне помочь? (вежливо)", a: ["Could you help me", "Could you help me please", "Could you please help me", "Would you help me", "Would you help me please", "Would you mind helping me"], hint: "could · help — вежливая просьба", x: ["can"], why: "К незнакомым людям обращаются с Could you…?" },
    { t: "type", p: "Я бы хотел(а) место у окна", a: pl(["I'd like a window seat", "I would like a window seat", "Can I get a window seat", "Could I get a window seat", "Can I have a window seat", "Could I have a window seat"]), hint: "I'd like · window seat — место одно: какой артикль?", x: ["the"], why: "Место одно и упоминается впервые — артикль a: a window seat." },
    { t: "type", p: "Два кофе, пожалуйста", a: pl(["Can I get two coffees", "Could I get two coffees", "Can I have two coffees", "Could I have two coffees", "I'd like two coffees", "I would like two coffees", "Two coffees"]), hint: "two · coffee — две порции, значит множественное число", x: ["coffee"], why: "В заказе кофе считают порциями: two coffees — множественное число, хотя по-русски «кофе» не изменяется." }
  ],

  tense: [
    { t: "mc", q: "«Я сейчас пью кофе» =", o: ["I'm drinking coffee right now.", "I drink coffee right now.", "I drank coffee right now.", "I drinking coffee right now."], why: "Процесс прямо сейчас — be + -ing (Present Continuous), и be не пропускают." },
    { t: "mc", q: "«В прошлые выходные я ездил(а) на пляж» =", o: ["I went to the beach last weekend.", "I go to the beach last weekend.", "I goed to the beach last weekend.", "I went to beach last weekend."], why: "Вторая форма go — went. Пляж — с артиклем the: the beach." },
    { t: "mc", q: "О планах на следующий месяц: «Я поеду на Чеджу»", o: ["I'm going to visit Jeju next month.", "I visit Jeju next month.", "I visited Jeju next month.", "I'm going visit Jeju next month."], why: "Заранее намеченный план — be going to + начальная форма." },
    { t: "mc", q: "Звонят в дверь, и ты тут же говоришь: «Я открою!»", o: ["I'll get the door!", "I'm going to get the door!", "I get the door!", "I getting the door!"], why: "Решение в момент речи — will." },
    { t: "mc", q: "Вторая форма глагола see?", o: ["saw", "seed", "seen", "sawed"], why: "see — неправильный глагол: see — saw — seen." },

    { t: "order", p: "Я работаю в банке (постоянно)", a: ["I", "work", "at", "a", "bank"], x: ["the", "working"], why: "Постоянное занятие — Present Simple; банк упоминается впервые — артикль a." },
    { t: "order", p: "Я тебе потом позвоню", a: ["I'll", "call", "you", "later"], x: ["calling"], why: "Обещание, данное в момент речи, — will." },
    { t: "order", p: "Я посмотрел(а) два фильма", a: ["I", "saw", "two", "movies"], x: ["movie", "see"], why: "Вторая форма see — saw; фильмов два — множественное число: movies." },

    { t: "fill", q: "I __ pizza last night.", p: "Вчера вечером я ел(а) пиццу", a: ["ate", "had"], o: ["eat", "eated", "eating"], why: "Вторая форма eat — ate (с have — had). «Ел» и «съел» передаются одной формой — Past Simple." },
    { t: "fill", q: "__ you have fun?", p: "Было весело?", a: ["Did"], o: ["Does", "Are", "Were"], why: "Вопрос о прошлом — Did + начальная форма." },
    { t: "fill", q: "I'm going __ visit my parents.", p: "Я собираюсь навестить родителей", a: ["to"], o: ["for", "at", "on"], why: "План — be going to + начальная форма." },

    { t: "type", p: "Сегодня я работаю из дома", a: ["I'm working from home today", "I am working from home today", "Today I'm working from home", "Today I am working from home"], hint: "work · from home · today — процесс сейчас", x: ["work"], why: "То, что происходит сегодня, в эти дни, — be + -ing." },
    { t: "type", p: "В прошлые выходные я ездил(а) на пляж", a: ["I went to the beach last weekend", "Last weekend I went to the beach"], hint: "go · beach · last weekend — вторая форма и артикль", x: ["a"], why: "Вторая форма go — went (Past Simple); пляж — с артиклем the: the beach." },
    { t: "type", p: "Я собираюсь пойти на кулинарный курс (план, глагол take)", a: ["I'm going to take a cooking class", "I am going to take a cooking class"], hint: "going to · take · cooking class — курс один: какой артикль?", x: ["the"], why: "Заранее намеченный план — going to; курс упоминается впервые — артикль a." }
  ],

  prep: [
    { t: "mc", q: "«В мае» =", o: ["in May", "on May", "at May", "to May"], why: "Перед месяцем — in." },
    { t: "mc", q: "«Третьего мая» =", o: ["on May 3rd", "in May 3rd", "at May 3rd", "to May 3rd"], why: "Перед датой — on." },
    { t: "mc", q: "«Я (сейчас) в автобусе» =", o: ["I'm on the bus.", "I'm at the bus.", "I'm on bus.", "I'm to the bus."], why: "По-русски «в автобусе», а по-английски с транспортом — on; автобус конкретный — артикль the." },
    { t: "mc", q: "«Ночью» =", o: ["at night", "on night", "in night", "at the night"], why: "night — исключение: at night, без артикля." },
    { t: "mc", q: "Какое предложение правильное?", o: ["I live in Seoul.", "I live at Seoul.", "I live on Seoul.", "I live in the Seoul."], why: "Перед городом — in, а с названиями городов артикль the не ставят." },

    { t: "order", p: "Давай встретимся на станции (той, которую мы оба знаем)", a: ["Let's", "meet", "at", "the", "station"], x: ["in", "a"], why: "Место встречи — точка, поэтому at; станция известна обоим — артикль the." },
    { t: "order", p: "Мой телефон на столе (вот на этом)", a: ["My", "phone", "is", "on", "the", "table"], x: ["in", "a"], why: "Поверхность — on; стол перед глазами — артикль the." },
    { t: "order", p: "Увидимся на следующей неделе", a: ["See", "you", "next", "week"], x: ["on"], why: "Перед next предлог не ставят, хотя по-русски — «на следующей неделе»." },

    { t: "fill", q: "The meeting is __ three.", p: "Встреча в три", a: ["at"], o: ["on", "to", "of"], why: "Перед точным временем — at." },
    { t: "fill", q: "I was born __ 1998.", p: "Я родился(-ась) в 1998 году", a: ["in"], o: ["on", "at", "to"], why: "Перед годом — in." },
    { t: "fill", q: "See you __ Friday.", p: "Увидимся в пятницу", a: ["on"], o: ["in", "at", "to"], why: "Перед днём недели — on, хотя по-русски «в пятницу»." },

    { t: "type", p: "Утром я пью кофе", a: ["I drink coffee in the morning", "In the morning I drink coffee", "I have coffee in the morning", "In the morning I have coffee"], hint: "coffee · morning — in + артикль", x: ["at"], why: "Часть дня — in, и обязательно с артиклем the: in the morning." },
    { t: "type", p: "Я сейчас дома", a: ["I'm at home", "I am at home", "I'm at home now", "I am at home now", "I'm home", "I am home", "I'm home now", "I am home now"], hint: "at · home — без артикля", x: ["the"], why: "at home — без артикля the." },
    { t: "type", p: "Увидимся в следующие выходные", a: ["See you next weekend"], hint: "see · next weekend — нужен ли предлог перед next?", x: ["on"], why: "Перед next предлог не ставят." }
  ],

  smalltalk: [
    { t: "mc", q: "Коллега спрашивает: How was your weekend? Как ответить?", o: ["It was great! I went hiking.", "It is great! I go hiking.", "It will be great!", "Yes, it was."], why: "Спрашивают о прошлом — отвечай в Past Simple и добавь одну деталь." },
    { t: "mc", q: "Ответ на I don't drink coffee.: «Я тоже (тоже не пью)»", o: ["Me neither.", "Me too.", "So do I.", "Me also."], why: "С отрицанием соглашаются через Me neither." },
    { t: "mc", q: "Как естественно закончить разговор?", o: ["Well, I should get going.", "Okay, bye now go.", "I'm leaving you.", "Stop talking, please."], why: "I should get going — мягкий способ попрощаться." },
    { t: "mc", q: "С чего лучше начать разговор с незнакомым человеком?", o: ["Nice weather today, huh?", "How much do you make?", "Are you married?", "Did you gain weight?"], why: "Погода — самая безопасная тема. Зарплату, семейное положение и вес лучше не обсуждать." },
    { t: "mc", q: "Собеседник говорит: I went to Busan last weekend. Как проявить интерес?", o: ["Oh, really? That sounds fun!", "Why?", "So what?", "Me neither."], why: "Oh, really? и That sounds fun! показывают интерес." },

    { t: "order", p: "Есть планы на выходные?", a: ["Any", "plans", "for", "the", "weekend"], x: ["plan", "a"], why: "В этом вопросе plans — множественное число, а weekend — с артиклем the: речь о ближайших выходных." },
    { t: "order", p: "Приятно было поговорить", a: ["It", "was", "nice", "talking", "to", "you"], x: ["talk"], why: "Фраза для завершения разговора. После nice — talking." },
    { t: "order", p: "Я не люблю фильмы ужасов", a: ["I", "don't", "like", "horror", "movies"], x: ["movie", "the"], why: "Фильмы вообще — множественное число movies, без артикля." },

    { t: "fill", q: "Pretty good! How __ you?", p: "Неплохо! А у тебя?", a: ["about"], o: ["for", "with", "of"], why: "Ответить коротко и спросить How about you? — так принято." },
    { t: "fill", q: "I know, __?", p: "Вот именно! / И не говори!", a: ["right"], o: ["light", "yes", "true"], why: "I know, right? — горячее согласие. right начинается с R." },
    { t: "fill", q: "Have you seen any good __ lately?", p: "Смотрел(а) в последнее время хорошие сериалы или фильмы?", a: ["shows", "movies"], o: ["show", "movie", "a show"], why: "После any в таком вопросе исчисляемое существительное ставят во множественном числе." },

    { t: "type", p: "Как прошли твои выходные?", a: ["How was your weekend"], hint: "how · weekend — в прошедшем времени", x: ["is"], why: "Выходные уже прошли — Past Simple. weekend — одно слово в единственном числе, поэтому was." },
    { t: "type", p: "Сегодня приятная погода (nice)", a: ["Nice weather today huh", "Nice weather today", "It's nice weather today", "It is nice weather today", "The weather is nice today", "The weather's nice today"], hint: "nice · weather · today — нужен ли артикль?", x: ["a"], why: "weather — неисчисляемое существительное, артикль a не нужен (a nice weather ✗)." },
    { t: "type", p: "Я люблю смотреть фильмы", a: ["I like watching movies", "I like to watch movies", "I love watching movies", "I love to watch movies"], hint: "like · watch · movie — о фильмах вообще: множественное число", x: ["movie"], why: "Фильмы вообще — множественное число movies." }
  ],

  phrasal: [
    { t: "mc", q: "«Включи его» (телефон) =", o: ["Turn it on.", "Turn on it.", "Turn it of.", "On turn it."], why: "Местоимение it стоит в середине фразового глагола: turn it on." },
    { t: "mc", q: "«У нас закончилось молоко» =", o: ["We ran out of milk.", "We ran out milk.", "We ran of out milk.", "We ran off of milk."], why: "run out of — «закончиться». Не забудь of." },
    { t: "mc", q: "«Я вырос(ла) в Тэгу» =", o: ["I grew up in Daegu.", "I grew in Daegu up.", "I growed up in Daegu.", "I grew out in Daegu."], why: "grow up — «вырасти», во второй форме — grew up." },
    { t: "mc", q: "«Присмотришь за моей кошкой?» =", o: ["Can you look after my cat?", "Can you look my cat after?", "Can you look for my cat?", "Can you look out my cat?"], why: "look after — «присматривать», его не разделяют (look for — «искать»)." },
    { t: "mc", q: "«Заеду за тобой в семь» =", o: ["I'll pick you up at seven.", "I'll pick up you at seven.", "I'll pick you at seven up.", "I'll up pick you at seven."], why: "Местоимение you стоит между pick и up." },

    { t: "order", p: "Я ищу свои очки", a: ["I'm", "looking", "for", "my", "glasses"], x: ["glass", "after"], why: "Очки — всегда множественное число glasses, как и по-русски (glass — «стакан»). «Искать» — look for." },
    { t: "order", p: "Давай придумаем план", a: ["Let's", "come", "up", "with", "a", "plan"], x: ["the", "an"], why: "come up with — «придумать». Плана ещё нет, и он один из возможных — артикль a." },
    { t: "order", p: "Я за тобой заеду", a: ["I'll", "pick", "you", "up"], x: ["on"], why: "Местоимение you — между pick и up." },

    { t: "fill", q: "Can you turn it __?", p: "Выключишь его?", a: ["off"], o: ["of", "on", "out"], why: "«Выключить» — turn off. Не путай с of." },
    { t: "fill", q: "I work __ every morning.", p: "Я тренируюсь каждое утро", a: ["out"], o: ["up", "off", "on"], why: "work out — «тренироваться»." },
    { t: "fill", q: "We ran out of __.", p: "У нас закончились яйца", a: ["eggs"], o: ["egg", "an egg", "the egg"], why: "Яйца — исчисляемое существительное, поэтому множественное число: eggs." },

    { t: "type", p: "Выключи его, пожалуйста", a: ["Turn it off", "Turn it off please", "Please turn it off", "Can you turn it off", "Can you turn it off please", "Could you turn it off", "Could you turn it off please"], hint: "turn · off — местоимение в середину", x: ["on"], why: "Местоимение it стоит между turn и off." },
    { t: "type", p: "Я присматриваю за двумя кошками (вообще, не прямо сейчас)", a: ["I look after two cats", "I take care of two cats"], hint: "look after · two · cat — их две, значит множественное число", x: ["cat"], why: "look after — «присматривать»; кошек две — множественное число: cats." },
    { t: "type", p: "У нас закончилось молоко", a: ["We ran out of milk", "We've run out of milk", "We have run out of milk", "We're out of milk", "We are out of milk", "I ran out of milk", "I'm out of milk", "I am out of milk"], hint: "run out of · milk — нужен ли артикль?", x: ["a"], why: "milk — неисчисляемое существительное, артикль a не нужен." }
  ],

  numbers: [
    { t: "mc", q: "10,000 (десять тысяч) по-английски?", o: ["ten thousand", "one thousand", "ten thousands", "a hundred thousand"], why: "Группы по три цифры: 10 + thousand. После числа thousand не получает -s множественного числа, хотя по-русски — «тысяч»." },
    { t: "mc", q: "1,000,000 (миллион) по-английски?", o: ["one million", "one hundred thousand", "ten million", "one millions"], why: "Две запятые — million. После числа million тоже без -s множественного числа." },
    { t: "mc", q: "Как прочитать 9:05?", o: ["nine oh five", "nine five", "nine and five", "five nine"], why: "Перед минутами от 1 до 9 говорят oh." },
    { t: "mc", q: "Как естественнее всего прочитать $4.99?", o: ["four ninety-nine", "four point nine nine", "four dollar ninety-nine", "forty-nine nine"], why: "Цену читают как два числа: four ninety-nine." },
    { t: "mc", q: "Как прочитать 2026 год?", o: ["twenty twenty-six", "two zero two six", "twenty two six", "two twenty-six"], why: "Год читают парами цифр." },

    { t: "order", p: "Сейчас 7:15", a: ["It's", "seven", "fifteen"], x: ["fifty"], why: "15 — fifteen (ударение на втором слоге), 50 — fifty (на первом)." },
    { t: "order", p: "Это 15 долларов", a: ["It's", "fifteen", "dollars"], x: ["dollar", "fifty"], why: "Долларов больше одного — множественное число: dollars." },
    { t: "order", p: "два раза в неделю", a: ["twice", "a", "week"], x: ["the", "one"], why: "«Столько-то раз в неделю» — с артиклем a: twice a week." },

    { t: "fill", q: "It's __ quarter past ten.", p: "Сейчас четверть одиннадцатого (10:15)", a: ["a"], o: ["the", "one", "an"], why: "Перед quarter (четверть часа) нужен артикль a. И заметь: по-английски past ten — от прошедшего часа." },
    { t: "fill", q: "That's fifty __ won.", p: "С вас пятьдесят тысяч вон", a: ["thousand"], o: ["thousands", "hundred", "million"], why: "50,000 — fifty thousand. После числа thousand без -s множественного числа." },
    { t: "fill", q: "I'll be there in ten __.", p: "Буду через 10 минут", a: ["minutes"], o: ["minute", "a minute", "the minutes"], why: "Минут десять — множественное число: minutes." },

    { t: "type", p: "Который час? — Три тридцать (3:30)", a: ["It's three thirty", "It is three thirty", "It's half past three", "It is half past three", "It's 3:30", "It is 3:30", "Three thirty", "Half past three"], hint: "three · thirty — часы и минуты подряд", x: ["thirteen"], why: "Часы и минуты читают подряд: three thirty. Не путай thirty с thirteen (13)." },
    { t: "type", p: "С вас двадцать долларов", a: ["It's twenty dollars", "It is twenty dollars", "That's twenty dollars", "That is twenty dollars", "It's 20 dollars", "It is 20 dollars", "That's 20 dollars", "That is 20 dollars", "Twenty dollars", "20 dollars"], hint: "twenty · dollar — больше одного: множественное число", x: ["dollar"], why: "Долларов больше одного — множественное число: dollars." },
    { t: "type", p: "Я тренируюсь два раза в неделю (work out)", a: ["I work out twice a week", "I exercise twice a week"], hint: "work out · twice · week — какой артикль в «в неделю»?", x: ["the"], why: "«В неделю» — с артиклем a: a week (the week ✗)." }
  ],

  email: [
    { t: "mc", q: "Как естественнее всего начать письмо с Dear?", o: ["Dear Mr. Smith,", "Dear Manager,", "Dear Smith Mr.,", "Dear Sir Smith,"], why: "После Dear пишут Mr. / Ms. + фамилию или имя, а не одну должность." },
    { t: "mc", q: "Как сообщить, что отчёт во вложении?", o: ["I've attached the report.", "I've attached report.", "I attaching the report.", "I've attach the report."], why: "Это тот самый отчёт, который получит адресат, — артикль the." },
    { t: "mc", q: "«Какой срок?» =", o: ["What's the deadline?", "What's deadline?", "When is a deadline?", "What deadline is?"], why: "Речь о сроке этой задачи — артикль the." },
    { t: "mc", q: "Ответ задержался. Какая позитивная фраза заменит извинение?", o: ["Thanks for your patience.", "Sorry, sorry, sorry.", "You waited too long.", "Thanks for your patients."], why: "Thanks for your patience звучит вежливо и без извинений. Не путай с patients (пациенты)." },
    { t: "mc", q: "Какое пожелание подходит для письма в пятницу?", o: ["Have a great weekend!", "Have great weekend!", "Have a great weekends!", "Have the great weekend!"], why: "«Выходные» по-русски — множественное число, а weekend — единственное: a great weekend, с артиклем a." },

    { t: "order", p: "Я приложил(а) отчёт", a: ["I've", "attached", "the", "report"], x: ["a"], why: "Это тот самый отчёт, который получит адресат, — артикль the." },
    { t: "order", p: "Давайте назначим встречу", a: ["Let's", "schedule", "a", "meeting"], x: ["the"], why: "Встреча ещё не назначена, она одна из возможных — артикль a." },
    { t: "order", p: "Я уточню и вернусь к вам с ответом", a: ["I'll", "get", "back", "to", "you"], x: ["for"], why: "get back to you — «связаться снова», с to." },

    { t: "fill", q: "Could you send me the file __ Friday?", p: "Не могли бы вы прислать файл к пятнице?", a: ["by"], o: ["until", "in", "at"], why: "Срок («не позже чем») — by + день." },
    { t: "fill", q: "I'm writing __ ask about the schedule.", p: "Пишу, чтобы уточнить расписание", a: ["to"], o: ["for", "about", "at"], why: "Цель письма — I'm writing to + начальная форма." },
    { t: "fill", q: "Thanks for all your hard __!", p: "Спасибо за вашу работу!", a: ["work"], o: ["works", "working", "job"], why: "work (работа) — неисчисляемое существительное, без -s множественного числа." },

    { t: "type", p: "У меня завтра выходной (be off)", a: ["I'm off tomorrow", "I am off tomorrow", "I'm off work tomorrow", "I am off work tomorrow", "I have tomorrow off", "I'm taking tomorrow off", "I am taking tomorrow off", "I have a day off tomorrow"], hint: "off · tomorrow — глагол to be + off", x: ["do"], why: "Выходной, нерабочий день — be off." },
    { t: "type", p: "Я приложил(а) файл", a: ["I've attached the file", "I have attached the file", "I attached the file"], hint: "attach · file — тот самый файл", x: ["a"], why: "Это тот самый файл, который получит адресат, — артикль the." },
    { t: "type", p: "Хороших выходных!", a: ["Have a great weekend", "Have a nice weekend", "Have a good weekend"], hint: "have · great · weekend — какой артикль перед weekend?", x: ["the"], why: "weekend — единственное число, хотя «выходные» — множественное: a great weekend, с артиклем a." }
  ],

  idioms: [
    { t: "mc", q: "«Проще простого» =", o: ["It's a piece of cake.", "It's piece of cake.", "It's a piece of cakes.", "It's the piece of cake."], why: "Идиому учат целиком: с артиклем a и cake в единственном числе." },
    { t: "mc", q: "«Стоит целое состояние» =", o: ["It costs an arm and a leg.", "It costs a arm and a leg.", "It costs arm and leg.", "It costs an arm and an leg."], why: "arm начинается с гласного звука — артикль an, leg — с согласного — артикль a." },
    { t: "mc", q: "«На сегодня всё» (можно сказать и на совещании)", o: ["Let's call it a day.", "Let's call it the day.", "Let's call a day.", "Let's call it day."], why: "call it a day — идиома, которую учат вместе с артиклем a." },
    { t: "mc", q: "«Я на седьмом небе» =", o: ["I'm on cloud nine.", "I'm on cloud nines.", "I'm in cloud nine.", "I'm on the cloud nine."], why: "on cloud nine — без артикля и без -s множественного числа. По-русски небо седьмое, а по-английски облако девятое." },
    { t: "mc", q: "Какое выражение — сленг только для друзей?", o: ["No cap", "Let's call it a day", "It's a piece of cake", "I'm all ears"], why: "No cap — молодёжный сленг, «серьёзно, без шуток». Остальное — идиомы, уместные и на работе." },

    { t: "order", p: "Я весь внимание", a: ["I'm", "all", "ears"], x: ["ear"], why: "Дословно «я весь — уши», поэтому множественное число: ears." },
    { t: "order", p: "Мне надо засесть за учебники", a: ["I", "need", "to", "hit", "the", "books"], x: ["book", "a"], why: "hit the books — с артиклем the и множественным числом books, как в оригинале." },
    { t: "order", p: "Это не моё (не в моём вкусе)", a: ["It's", "not", "my", "cup", "of", "tea"], x: ["the"], why: "not my cup of tea учат целиком. Перед cup уже стоит my, поэтому артикль не нужен." },

    { t: "fill", q: "Kill two __ with one stone.", p: "Убить двух зайцев одним выстрелом", a: ["birds"], o: ["bird", "a bird", "the bird"], why: "Птиц две — множественное число: birds. По-русски зайцы, по-английски птицы." },
    { t: "fill", q: "Speak of the __!", p: "Лёгок на помине!", a: ["devil"], o: ["tiger", "angel", "bird"], why: "Как в русском «помяни чёрта — он и появится»: по-английски тоже devil (чёрт)." },
    { t: "fill", q: "I'm feeling under __ weather.", p: "Мне что-то нездоровится", a: ["the"], o: ["a", "an", "my"], why: "under the weather — с артиклем the, как в оригинале." },

    { t: "type", p: "Это проще простого (идиома с cake)", a: ["It's a piece of cake", "It is a piece of cake"], hint: "piece · cake — не забудь артикль", x: ["the"], why: "a piece of cake — артикль a обязателен." },
    { t: "type", p: "Буду держать кулачки!", a: ["I'll keep my fingers crossed", "I will keep my fingers crossed", "Fingers crossed"], hint: "keep · finger · crossed — сколько пальцев?", x: ["finger"], why: "Скрещивают два пальца — множественное число: fingers. По-русски держат кулачки, по-английски скрещивают пальцы." },
    { t: "type", p: "На сегодня всё (идиома с day)", a: ["Let's call it a day"], hint: "call it · day — не the", x: ["the"], why: "call it a day — артикль a, а не the." }
  ]
};
