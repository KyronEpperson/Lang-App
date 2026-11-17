/* DIALOG: key | A | B | перевод ;  EXAMPLES: key | sentence | перевод
   ru-en: names, places and food localised per docs/profiles/ru.md §9 (Anna, Moscow, Kazan; Ms. Smirnova, Petrov). */
exports.DIALOG = `
How are you? | Hi, Jake! How are you? | Good, thanks! How about you? | Привет, Джейк! Как дела? / Хорошо, спасибо! А у тебя?
What's up? | Hey, what's up? | Not much. Just getting some coffee. | Привет, как жизнь? / Да ничего особенного. Вот, иду за кофе.
Nice to meet you. | Hi, I'm Anna. Nice to meet you. | Nice to meet you, too. I'm Ryan. | Здравствуйте, я Анна. Приятно познакомиться. / Мне тоже приятно. Я Райан.
Long time no see! | Long time no see! How have you been? | I've been great! You look good! | Сколько лет, сколько зим! Как ты? / Всё отлично! Ты хорошо выглядишь!
Have a good one! | Here's your receipt. Have a good one! | Thanks, you too! | Ваш чек. Хорошего дня! / Спасибо, и вам!
Good night. | I'm going to bed. Good night! | Good night! Sleep well. | Я спать. Спокойной ночи! / Спокойной ночи! Сладких снов.
Where are you from? | So, where are you from? | I'm from Russia. Moscow, actually. | Так откуда вы? / Из России, из Москвы.
What do you do? | What do you do? | I'm a designer. I work at a small startup. | Чем вы занимаетесь? / Я дизайнер. Работаю в небольшом стартапе.
What should I call you? | What should I call you? | Just call me Jay. Everyone does. | Как к вам обращаться? / Зовите просто Джей. Меня все так зовут.
I'm really into hiking. | What do you do on weekends? | I'm really into hiking. I go almost every Saturday. | Что вы делаете по выходным? / Я очень люблю походы. Хожу почти каждую субботу.
I'm here on vacation. | Are you here for work? | No, I'm here on vacation. | Вы здесь по работе? / Нет, я в отпуске.
Excuse me. | Excuse me, is this the line for tickets? | Yes, it is. The end is over there. | Извините, это очередь за билетами? / Да. Конец очереди вон там.
Thank you. | Here, let me get the door for you. | Oh, thank you! | Давайте я придержу вам дверь. / Ой, спасибо!
Sorry? | Your total is twenty-three fifty. | Sorry? Could you say that again? | С вас двадцать три пятьдесят. / Простите? Можете повторить?
Could you speak more slowly? | Take the B line to Central, then transfer to the red line and... | Sorry, could you speak more slowly? | Садитесь на линию B до станции Central, потом пересядьте на красную линию и… / Извините, можно помедленнее?
How do you say this in English? | How do you say this in English? | That's a whisk. | Как это по-английски? / Это whisk — венчик.
Can you help me? | Excuse me, can you help me? I'm looking for this hotel. | Sure! It's just around the corner. | Извините, вы не поможете? Я ищу эту гостиницу. / Конечно! Она прямо за углом.
No, thank you. | Would you like a bag? | No, thank you. I have one. | Вам нужен пакет? / Нет, спасибо. У меня есть.
Where's the restroom? | Excuse me, where's the restroom? | It's down the hall, on the left. | Извините, где туалет? / В конце коридора, слева.
Can I get the Wi-Fi password? | Can I get the Wi-Fi password? | Sure, it's on the back of your receipt. | Можно пароль от вайфая? / Конечно, он на обороте чека.
Could you take a picture of us? | Excuse me, could you take a picture of us? | Of course! Say cheese! | Извините, не могли бы вы нас сфотографировать? / Конечно! Улыбочку!
Can you write it down? | The address is 1428 Elm Street. | Sorry, can you write it down? | Адрес — Элм-стрит, 1428. / Извините, можете записать?
No worries. | Sorry I'm a little late! | No worries. I just got here, too. | Прости, я немного опоздал! / Ничего страшного. Я тоже только что пришла.
How do I get to the subway station? | How do I get to the subway station? | Go straight two blocks and turn right. You can't miss it. | Как пройти к метро? / Два квартала прямо и направо. Сразу увидите.
Is it within walking distance? | Is the museum within walking distance? | Yeah, it's about a ten-minute walk. | До музея можно дойти пешком? / Да, минут десять.
Does this bus go to the airport? | Does this bus go to the airport? | No, you need the 42. It stops across the street. | Этот автобус идёт в аэропорт? / Нет, вам нужен сорок второй. Остановка через дорогу.
Which stop should I get off at? | Which stop should I get off at for the museum? | Get off at Park Street. It's three stops from here. | На какой остановке выходить, чтобы попасть в музей? / На Парк-стрит. Это через три остановки.
Can you take me to this address? | Can you take me to this address? | Sure. It'll take about twenty minutes. | Отвезёте меня по этому адресу? / Конечно. Минут двадцать ехать.
How long does it take? | How long does it take to get downtown? | About fifteen minutes by subway. | Сколько добираться до центра? / Минут пятнадцать на метро.
Is this seat taken? | Excuse me, is this seat taken? | No, go ahead. | Извините, это место занято? / Нет, садитесь.
A table for two, please. | Hi! How many? | A table for two, please. | Здравствуйте! Сколько вас? / Столик на двоих, пожалуйста.
What do you recommend? | What do you recommend? | The salmon is really popular. | Что вы посоветуете? / Лосось у нас очень популярен.
I'll have the steak. | Are you ready to order? | Yes, I'll have the steak, please. | Готовы заказать? / Да, мне стейк, пожалуйста.
Medium rare, please. | How would you like your steak? | Medium rare, please. | Какую прожарку стейка вы предпочитаете? / Medium rare, пожалуйста.
I'm allergic to peanuts. | Does this have nuts in it? I'm allergic to peanuts. | Let me check with the kitchen. | Здесь есть орехи? У меня аллергия на арахис. / Сейчас уточню на кухне.
Everything was great. | How was everything? | Everything was great, thank you! | Всё понравилось? / Всё было очень вкусно, спасибо!
Can we get the check, please? | Can we get the check, please? | Sure, I'll be right back with it. | Принесите, пожалуйста, счёт. / Конечно, сейчас принесу.
It's on me. | Let's split it. | No, no. It's on me today. | Давай пополам. / Нет-нет, сегодня я угощаю.
Can I get an iced Americano? | Hi, what can I get for you? | Can I get an iced Americano? | Здравствуйте, что для вас? / Можно американо со льдом?
For here or to go? | For here or to go? | To go, please. | Здесь или с собой? / С собой, пожалуйста.
Can I get a name for the order? | Can I get a name for the order? | It's Jay. J-A-Y. | На какое имя заказ? / Джей. J-A-Y.
That's it. | Anything else? | No, that's it. Thanks! | Что-нибудь ещё? / Нет, это всё. Спасибо!
I'm just looking, thanks. | Can I help you find anything? | I'm just looking, thanks. | Вам что-нибудь подсказать? / Я просто смотрю, спасибо.
Can I try this on? | Can I try this on? | Sure, the fitting rooms are in the back. | Можно примерить? / Конечно, примерочные в глубине зала.
I'll take it. | It fits perfectly! I'll take it. | Great! I can ring you up over here. | Сидит идеально! Беру. / Отлично! Оплатить можно вот здесь.
Cash or card? | Cash or card? | Card, please. | Наличные или карта? / Картой, пожалуйста.
What time is it? | Excuse me, what time is it? | It's almost three. | Извините, который час? / Почти три.
Thirteen or thirty? | That's thirty dollars. | Sorry, thirteen or thirty? | С вас тридцать долларов. / Простите, тринадцать или тридцать?
How was your weekend? | How was your weekend? | It was great! I went to the beach. How about yours? | Как прошли выходные? / Отлично! Ездил(а) на пляж. А у тебя?
Any plans for the weekend? | Any plans for the weekend? | Not really. I'm just going to relax at home. | Есть планы на выходные? / Особо нет. Просто отдохну дома.
Nice weather today, huh? | Nice weather today, huh? | I know! Finally some sun. | Хорошая сегодня погода, да? / И не говорите! Наконец-то солнце.
What do you do for fun? | What do you do for fun? | I play basketball and watch a lot of TV series. | Чем ты любишь заниматься в свободное время? / Играю в баскетбол и смотрю много сериалов.
Me neither. | I don't really like spicy food. | Me neither. | Я не очень люблю острое. / Я тоже не очень.
It was nice talking to you. | Well, I should get going. It was nice talking to you. | You too! See you around. | Ну, мне пора. Было приятно поговорить. / Мне тоже! Ещё увидимся.
Congratulations! | I got the job! | Congratulations! I'm so happy for you! | Меня взяли на работу! / Поздравляю! Я так за тебя рад(а)!
No way! | I saw a famous actor at the airport yesterday. | No way! Did you get a picture? | Вчера видел(а) в аэропорту известного актёра. / Да ладно! Сфоткал(а)?
I'm sorry to hear that. | My grandma is in the hospital. | Oh, I'm sorry to hear that. I hope she feels better soon. | Бабушка в больнице. / Ох, мне очень жаль. Пусть скорее поправляется.
It's not a big deal. | I'm so sorry I spilled your coffee! | It's not a big deal. Don't worry about it. | Прости, пожалуйста, я пролил(а) твой кофе! / Ничего страшного. Не переживай.
I love your shoes. | I love your shoes! Where did you get them? | Thanks! I got them in Moscow. | Классные туфли! Где ты их купила? / Спасибо! В Москве.
Do you want to grab coffee sometime? | Do you want to grab coffee sometime? | Sure, I'd love to! | Может, сходим как-нибудь на кофе? / Давай, с удовольствием!
You're a lifesaver! | I brought you an extra charger. | You're a lifesaver! Thank you! | Я взял(а) тебе запасную зарядку. / Ты просто спаситель! Спасибо!
I'll get back to you. | Can you join the meeting on Thursday? | Let me check my schedule, and I'll get back to you. | Сможете прийти на встречу в четверг? / Посмотрю расписание и отвечу вам.
I'm running late. | Where are you? The meeting starts in five minutes. | Sorry, I'm running late. I'll be there in ten. | Вы где? Встреча через пять минут. / Извините, я опаздываю. Буду через десять минут.
Can we push the meeting to 3? | Can we push the meeting to 3? Something came up. | Sure, 3 works for me. | Можно перенести встречу на три? У меня появилось срочное дело. / Конечно, в три мне удобно.
What's the deadline? | What's the deadline for the proposal? | End of the day Friday. | Когда нужно сдать предложение? / В пятницу, до конца дня.
Who's calling, please? | Hi, can I speak to Ms. Smirnova? | Sure. Who's calling, please? | Здравствуйте, можно поговорить с госпожой Смирновой? / Конечно. Как вас представить?
Sorry, you're breaking up. | Can you hear me now? | Sorry, you're breaking up. I'll call you back. | Теперь слышно? / Извините, связь прерывается. Я перезвоню.
I'm on my way. | Are you almost here? | Yeah, I'm on my way! | Ты скоро? / Да, уже еду!
I'm here for sightseeing. | What's the purpose of your visit? | I'm here for sightseeing. | Какова цель вашего визита? / Туризм.
I'm staying for a week. | How long are you staying? | I'm staying for a week. | Сколько вы здесь пробудете? / Неделю.
Window or aisle? | Window or aisle? | Aisle, please. | У окна или у прохода? / У прохода, пожалуйста.
I have a reservation under Petrov. | Hi, are you checking in? | Yes, I have a reservation under Petrov. | Здравствуйте, вы заселяетесь? / Да, у меня бронь на фамилию Петров.
The air conditioner isn't working. | Front desk. How can I help you? | Hi, the air conditioner isn't working in room 512. | Ресепшен, чем могу помочь? / Здравствуйте, в номере 512 не работает кондиционер.
My luggage is missing. | My luggage is missing. | I'm sorry about that. Can I see your baggage tag? | Мой багаж потерялся. / Сожалеем. Можно вашу багажную бирку?
I don't feel well. | Are you okay? You look pale. | I don't feel well. I think I need to sit down. | Ты в порядке? Ты какой-то бледный. / Мне нехорошо. Кажется, мне надо сесть.
I have a sore throat. | What seems to be the problem? | I have a sore throat and a slight fever. | На что жалуетесь? / У меня болит горло и небольшая температура.
I lost my wallet. | I lost my wallet. I think I left it on the bus. | Let's call the bus company's lost and found. | Я потерял(а) кошелёк. Кажется, оставил(а) в автобусе. / Давай позвоним в бюро находок автобусной компании.
hang out | Do you want to hang out this weekend? | Sure! Let's go see a movie. | Давай увидимся на выходных? / Давай! Сходим в кино.
pick up | Can you pick me up at the airport? | Of course. What time does your flight land? | Сможешь встретить меня в аэропорту? / Конечно. Во сколько садится твой самолёт?
work out | You look great! Do you work out? | Yeah, I go to the gym three times a week. | Отлично выглядишь! Тренируешься? / Да, хожу в спортзал три раза в неделю.
It's not my cup of tea. | Do you want to go to the jazz concert? | Thanks, but honestly, it's not my cup of tea. | Пойдёшь на джазовый концерт? / Спасибо, но, честно говоря, это не моё.
Speak of the devil! | Have you seen Mark today? | Speak of the devil! Here he comes. | Ты сегодня видел(а) Марка? / Лёгок на помине! Вот и он.
I'm feeling under the weather. | Are you coming to the party tonight? | I don't think so. I'm feeling under the weather. | Придёшь вечером на вечеринку? / Вряд ли. Мне что-то нездоровится.
Spill the tea. | I heard something crazy about Jen and Mike. | Wait, what? Spill the tea! | Я такое узнал(а) про Джен и Майка! / Подожди, что? Выкладывай!
No spoilers! | Did you finish the show? The ending is... | No spoilers! I'm only on episode 3. | Ты досмотрел(а) сериал? Концовка там… / Без спойлеров! Я только на третьей серии.
Who's your bias? | Who's your bias? | Definitely the lead singer. What about you? | Кто твой любимчик в группе? / Конечно, вокалист. А у тебя?
`;

exports.EXAMPLES = `
I'm a student. | I'm a student at a university in Moscow. | Я учусь в университете в Москве.
I work in marketing. | I work in marketing at a game company. | Я работаю в маркетинге в компании, которая делает игры.
I like watching movies. | I like watching movies on the weekends. | По выходным я люблю смотреть фильмы.
I've been learning English for a year. | I've been learning English for a year, but speaking is still hard. | Я учу английский уже год, но говорить всё ещё трудно.
Thanks a lot. | Thanks a lot for your help today. | Большое спасибо за сегодняшнюю помощь.
I speak a little English. | Sorry, I only speak a little English. | Извините, я говорю по-английски совсем немного.
What does this mean? | What does this word on the sign mean? | Что значит это слово на табличке?
How much is this? | How much is this T-shirt? | Сколько стоит эта футболка?
Can I pay by card? | Can I pay by card, or is it cash only? | Можно оплатить картой или только наличными?
Just a second. | Just a second, I'm almost done. | Секунду, я почти закончил(а).
I'm not sure. | I'm not sure, but I think it's on the second floor. | Точно не знаю, но, кажется, это на втором этаже.
It's next to the bank. | The café is next to the bank on Main Street. | Кафе рядом с банком на Мейн-стрит.
Turn left at the corner. | Turn left at the corner, and you'll see the station. | На углу поверните налево — и увидите станцию.
Where do I transfer? | Where do I transfer to get to the city center? | Где сделать пересадку, чтобы доехать до центра?
Can I get a Coke? | Can I get a Coke with no ice? | Можно колу без льда?
Is it spicy? | Is it spicy? I can't handle spicy food. | Это острое? Я плохо переношу острое.
Can we split the bill? | Can we split the bill three ways? | Можно разделить счёт на троих?
Can I get this to go? | I can't finish this. Can I get this to go? | Не могу доесть. Можно забрать с собой?
Less ice, please. | Can I get a large iced latte? Less ice, please. | Можно большой латте со льдом? Только льда поменьше.
Can I get a receipt? | Can I get a receipt? It's for work. | Можно чек? Это для работы.
Is this on sale? | Is this jacket on sale? | На эту куртку есть скидка?
I'd like to exchange this. | I'd like to exchange this for a smaller size. | Я хочу обменять это на размер поменьше.
It's a bit tight. | These jeans are a bit tight. | Эти джинсы немного тесноваты.
It's three thirty. | It's three thirty. We have half an hour left. | Сейчас три тридцать. У нас осталось полчаса.
My birthday is in October. | My birthday is in October, so I'm a Libra. | У меня день рождения в октябре, так что я Весы.
In ten minutes | The train leaves in ten minutes. | Поезд отправляется через десять минут.
Twice a week | I go to the gym twice a week. | Я хожу в спортзал два раза в неделю.
It was pretty relaxing. | It was pretty relaxing. I just read and slept. | Довольно спокойно. Читала и отсыпалась.
Have you been to Russia? | Have you been to Russia? You should try the pancakes. | Ты бывал(а) в России? Обязательно попробуй блины.
By the way | By the way, did you see the game last night? | Кстати, ты смотрел(а) вчерашний матч?
I'm bored. | I'm bored. Do you want to go for a walk? | Мне скучно. Пойдём погуляем?
I'm nervous. | I'm nervous about my job interview tomorrow. | Я волнуюсь из-за завтрашнего собеседования.
I can't wait! | We're going to Hawaii next week. I can't wait! | На следующей неделе мы летим на Гавайи. Скорей бы!
That color looks good on you. | That color looks good on you. You should wear it more often. | Тебе идёт этот цвет. Носи его почаще.
You made my day! | Thanks for the cookies. You made my day! | Спасибо за печенье! Ты поднял(а) мне настроение на весь день!
Let me know if you have any questions. | I've attached the slides. Let me know if you have any questions. | Слайды во вложении. Если будут вопросы, пишите.
Could you send me the file by Friday? | Could you send me the file by Friday? I need it for the presentation. | Можете прислать файл к пятнице? Он нужен мне для презентации.
Let's touch base next week. | Let's touch base next week and see how things are going. | Давайте сверимся на следующей неделе и посмотрим, как идут дела.
I'm working from home today. | I'm working from home today, so let's meet on Zoom. | Сегодня я работаю из дома, так что давайте созвонимся в Zoom.
Can I call you back? | I'm driving right now. Can I call you back? | Я сейчас за рулём. Можно я перезвоню?
Is breakfast included? | Is breakfast included, or is it extra? | Завтрак включён или за него доплата?
My flight was delayed. | My flight was delayed by three hours. | Мой рейс задержали на три часа.
I have a headache. | I have a headache. Do you have any painkillers? | У меня болит голова. У тебя есть обезболивающее?
figure out | I can't figure out how to use this machine. | Не могу разобраться, как работает этот аппарат.
run out of | We ran out of coffee, so I'm going to the store. | У нас закончился кофе, схожу в магазин.
look forward to | I'm looking forward to seeing you next week. | Жду не дождусь нашей встречи на следующей неделе.
put off | Stop putting off your homework! | Хватит откладывать домашку!
get along with | I get along with my roommate really well. | Мы с соседом по квартире отлично ладим.
It costs an arm and a leg. | Living in New York costs an arm and a leg. | Жизнь в Нью-Йорке стоит целое состояние.
Once in a blue moon | I only drink soda once in a blue moon. | Газировку я пью раз в сто лет.
Low-key | I low-key want to dye my hair pink. | Втайне мне хочется покрасить волосы в розовый.
I binge-watched the whole season. | I binge-watched the whole season in one weekend. | Посмотрел(а) весь сезон за одни выходные.
rice | I had rice and chicken for lunch. | На обед у меня был рис с курицей.
think | I think so, too. | Я тоже так думаю.
`;

/* pattern | объяснение | example | lesson id */
exports.PATTERNS = `
Could you ~? | Вежливая просьба: «Не могли бы вы…?» Мягче, чем Can you | Could you help me with this? | polite
Would you mind ~ing? | Очень вежливая просьба: «Вы не против…?» Ответ No значит «не против, сейчас сделаю» | Would you mind closing the window? | polite
Can I get ~? | В кафе и магазине: «Можно мне…?» Самый частый вариант в американской речи | Can I get a large latte? | polite
I'd like ~ | Вежливая замена want: «Я бы хотел(а)…», «Мне, пожалуйста…» | I'd like a window seat, please. | polite
a / an + существительное | Один предмет из многих, о котором говорят впервые. Перед гласным звуком — an | I have an idea. | articles
the + существительное | Тот самый предмет, который знают оба собеседника | Can you open the door? | articles
I am / You are / She is | Глагол to be: «быть, находиться». В русском связка в настоящем времени пропадает («Она медсестра»), в английском она обязательна | She is a nurse. | be
Do you ~? / Does he ~? | Вопрос со смысловым глаголом: нужен вспомогательный глагол do. С he, she, it — does | Does he live here? | be
don't / doesn't + начальная форма | Отрицание со смысловым глаголом: I not eat ✗ | I don't eat meat. | be
he / she / it + глагол с -s | В Present Simple после he, she, it у глагола окончание -s | My sister works at a hospital. | be
be + -ing | Действие прямо сейчас или запланированное на ближайшее будущее | I'm meeting Jake tonight. | tense
глагол + -ed / неправильная форма | Законченное действие в прошлом (went, ate, saw…) | I went to Kazan last week. | tense
will + начальная форма | Решение в момент речи, обещание, прогноз | I'll call you later. | tense
be going to + начальная форма | Заранее запланированное действие | I'm going to visit my parents this weekend. | tense
Have you ever ~? | Вопрос об опыте: «Ты когда-нибудь…?» | Have you ever tried borscht? | tense
in + месяц / год / время года | Большой промежуток времени | My birthday is in June. | prep
on + день недели / дата | Один конкретный день | The party is on Saturday. | prep
at + время / точка | Точное время или конкретное место | Let's meet at 7 at the station. | prep
How about ~ing? | Предложение: «Как насчёт…?», «Может, …?» | How about getting lunch together? | smalltalk
So do I / Neither do I | Согласие: «Я тоже» / «Я тоже нет». Разговорно — Me too / Me neither | I love this song. / So do I. | smalltalk
глагол + it + наречие | Если дополнение фразового глагола — местоимение, оно стоит в середине | Can you turn it down? | phrasal
look forward to + -ing | to здесь — предлог, поэтому дальше -ing | I'm looking forward to hearing from you. | phrasal
It's + время | Время называют цифрами: сначала часы, потом минуты | It's ten fifteen. | numbers
I'm writing to ~ | Первая фраза письма называет его цель | I'm writing to confirm our meeting. | email
Let me know if ~ | «Дайте знать, если…» — концовка письма | Let me know if you need anything else. | email
`;

exports.PAUSE = {
compliment: `
You're amazing | Ты просто чудо
You nailed it | Блестяще получилось!
You're a natural | У тебя прирождённый талант
Looking sharp! | Выглядишь стильно!
You're so thoughtful | Как это заботливо с твоей стороны
You have a great sense of humor | У тебя отличное чувство юмора
You're one of a kind | Таких, как ты, больше нет
You light up the room | С тобой всем сразу становится светлее
I admire you | Я тобой восхищаюсь
You inspire me | Ты меня вдохновляешь
You're really talented | У тебя настоящий талант
You're a great listener | Ты умеешь слушать
You've got this | Ты справишься
That's brilliant | Гениально!
You're so easy to talk to | С тобой так легко разговаривать
You always know what to say | Ты всегда знаешь, что сказать
You're a good friend | Ты настоящий друг
Your hard work shows | Твои старания видны
You're glowing | Ты прямо сияешь
Well said | Хорошо сказано
`,
expression: `
Sounds good | Договорились / Отлично
Fair enough | Справедливо / Резонно
Makes sense | Логично / Понятно
Got it | Ясно / Принято
I see | Понятно / Вот как
No kidding | Серьёзно? / Ещё бы!
Good point | Верно подмечено
Exactly | Вот именно
Totally | Абсолютно / Ещё как
Never mind | Неважно, забудь
My bad | Моя вина / Мой косяк
It depends | Смотря как / Зависит от ситуации
Whatever works | Как тебе удобнее
Let me think | Дай подумать
Here we go | Ну, поехали / Началось
Hang on | Погоди
Fingers crossed | Держу кулачки
You bet | Ещё бы! / Конечно
Count me in | Я в деле / Я с вами
Sort of | Вроде того / Отчасти
`,
polite: `
Please | Пожалуйста (в просьбе)
Thank you so much | Огромное спасибо
Pardon me | Прошу прощения
Go ahead | Да, конечно / Проходите
May I come in? | Можно войти?
Sorry to bother you | Извините за беспокойство
I appreciate it | Очень ценю это
Bless you | Будь здоров! (когда кто-то чихнул)
Have a nice day | Хорошего дня
Nice to see you | Рад(а) тебя видеть (о знакомом)
If you don't mind | Если вы не против
Would you like some? | Не хотите немного?
Help yourself | Угощайтесь
It's my pleasure | Мне только в радость
Sorry I'm late | Простите за опоздание
Thank you for your time | Спасибо, что уделили время
I beg your pardon? | Простите, что вы сказали? (очень вежливо)
Don't mention it | Не стоит благодарности
Cheers | Спасибо (в британском) / Ваше здоровье!
Excuse me, coming through | Извините, разрешите пройти
`,
saying: `
Practice makes perfect | Повторение — мать учения
Where there's a will, there's a way | Было бы желание, а способ найдётся
Rome wasn't built in a day | Москва не сразу строилась
Time is money | Время — деньги
Better safe than sorry | Бережёного бог бережёт
Two heads are better than one | Одна голова хорошо, а две лучше
Don't judge a book by its cover | Не суди книгу по обложке
When in Rome, do as the Romans do | В чужой монастырь со своим уставом не ходят
Slow and steady wins the race | Тише едешь — дальше будешь
Knowledge is power | Знание — сила
Honesty is the best policy | Честность — лучшая политика
Seeing is believing | Лучше один раз увидеть, чем сто раз услышать
Out of sight, out of mind | С глаз долой — из сердца вон
Laughter is the best medicine | Смех — лучшее лекарство
Live and learn | Век живи — век учись
A friend in need is a friend indeed | Друзья познаются в беде
It's never too late to learn | Учиться никогда не поздно
Every expert was once a beginner | Каждый эксперт когда-то был новичком
Stay hungry, stay foolish | Будьте голодными, будьте безрассудными
Small steps every day | Маленькими шагами, но каждый день
`
};

/* idiom | значение | транскрипция | пояснение */
exports.IDIOMS = `
Break a leg | Ни пуха ни пера! | /ˈbreɪk ə ˈleg/ | Пожелание удачи перед выступлением, экзаменом или собеседованием, вместо Good luck. Отвечать «к чёрту» не нужно — просто Thanks!
Bite the bullet | Стиснуть зубы и сделать | /ˈbaɪt ðə ˈbʊlɪt/ | Решиться на неприятное, но неизбежное дело.
Cut corners | Халтурить / Срезать углы | /ˈkʌt ˈkɔːrnərz/ | Пропускать нужные шаги, чтобы сэкономить время или деньги (с неодобрением).
Hit the sack | Завалиться спать | /ˈhɪt ðə ˈsæk/ | Разговорное: I'm tired. I'm going to hit the sack.
Let the cat out of the bag | Проболтаться | /ˈlet ðə ˈkæt ˈaʊt əv ðə ˈbæg/ | Случайно выдать секрет — например, про вечеринку-сюрприз.
Kill two birds with one stone | Убить двух зайцев | /ˈkɪl ˈtuː ˈbɜːrdz wɪð ˈwʌn ˈstoʊn/ | По-английски — двух птиц одним камнем.
Burn the midnight oil | Сидеть до глубокой ночи | /ˈbɜːrn ðə ˈmɪdnaɪt ˈɔɪl/ | Работать или учиться допоздна — перед экзаменом или дедлайном.
The best of both worlds | Лучшее от обоих вариантов | /ðə ˈbest əv ˈboʊθ ˈwɜːrldz/ | Когда получаешь плюсы сразу двух вариантов, например работаешь и в офисе, и из дома.
A blessing in disguise | Не было бы счастья, да несчастье помогло | /ə ˈblesɪŋ ɪn dɪsˈgaɪz/ | Что-то плохое, что в итоге обернулось к лучшему.
Every cloud has a silver lining | Нет худа без добра | /ˈevri ˈklaʊd ˈhæz ə ˈsɪlvər ˈlaɪnɪŋ/ | Чтобы поддержать человека в трудной ситуации.
Get cold feet | Струсить в последний момент | /ˈget ˈkoʊld ˈfiːt/ | Засомневаться перед свадьбой или важным решением.
Hit the nail on the head | Попасть в точку | /ˈhɪt ðə ˈneɪl ɑːn ðə ˈhed/ | Сказать именно то, что нужно.
In the same boat | В одной лодке | /ɪn ðə ˈseɪm ˈboʊt/ | Как и по-русски: Don't worry, we're all in the same boat.
Miss the boat | Упустить шанс | /ˈmɪs ðə ˈboʊt/ | Похоже на русское «поезд ушёл».
No pain, no gain | Без труда не выловишь и рыбку из пруда | /ˈnoʊ ˈpeɪn ˈnoʊ ˈgeɪn/ | Часто говорят о спорте и учёбе.
On the fence | Колебаться / Не может решиться | /ɑːn ðə ˈfens/ | Буквально «сидеть на заборе»: I'm still on the fence about the job offer.
Pull someone's leg | Разыгрывать / Прикалываться | /ˈpʊl ˈsʌmwʌnz ˈleg/ | Шутливо обманывать: Relax, I'm just pulling your leg!
Sit tight | Подождать / Ничего не предпринимать | /ˈsɪt ˈtaɪt/ | Сидеть на месте, пока не станет ясен результат.
The last straw | Последняя капля | /ðə ˈlæst ˈstrɔː/ | По-английски — последняя соломинка, которая ломает спину верблюду.
Throw in the towel | Сдаться | /ˈθroʊ ˈɪn ðə ˈtaʊəl/ | Из бокса: тренер выбрасывает полотенце на ринг.
Actions speak louder than words | Не по словам судят, а по делам | /ˈækʃnz ˈspiːk ˈlaʊdər ðən ˈwɜːrdz/ | Важны поступки, а не обещания.
Easier said than done | Легко сказать | /ˈiːziər ˈsed ðən ˈdʌn/ | Сделать гораздо труднее, чем кажется.
Go the extra mile | Сделать больше, чем требуется | /ˈgoʊ ði ˈekstrə ˈmaɪl/ | Часто как похвала: She always goes the extra mile.
Get out of hand | Выйти из-под контроля | /ˈget ˈaʊt əv ˈhænd/ | Ситуация перестала поддаваться контролю.
Take a rain check | Отложить на другой раз | /ˈteɪk ə ˈreɪn ˈtʃek/ | Мягкий отказ от приглашения: Can I take a rain check?
The early bird catches the worm | Кто рано встаёт, тому бог подаёт | /ði ˈɜːrli ˈbɜːrd ˈkætʃɪz ðə ˈwɜːrm/ | Кто действует первым, тот и выигрывает.
`;
