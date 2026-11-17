/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   ru-en: pron = IPA exactly as the Chinese course writes it (docs/profiles/ru.md §6, tools/content/zh/PRON-RULES.md); must match profile.json pronPattern.
   Deck names are FINAL (tools/content/ru/DECKNAMES.md). The last deck is ru-only (profile §9). */
module.exports = {
"Приветствия": `
Hello. | /həˈloʊ/ | Здравствуйте / Привет | Самое универсальное приветствие: подходит для любой ситуации и любого собеседника.
Hi! | /ˈhaɪ/ | Привет! | Проще и теплее, чем Hello. В США Hi говорят и коллегам, и начальнику, и продавцу.
Hey! | /ˈheɪ/ | Привет! / Эй! | Между друзьями. Незнакомому человеку может прозвучать грубовато — примерно как «Эй!».
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | Доброе утро | До полудня. Можно сказать короче: Morning!
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | Добрый день | Примерно с 12 до 6 вечера. Звучит немного официально, чаще слышно в магазинах и офисах. Знакомым обычно говорят просто Hi.
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | Добрый вечер | Приветствие при встрече вечером. Good night — только при прощании.
How are you? | /ˈhaʊ ər ju/ | Как дела? / Здравствуйте | Это приветствие, а не вопрос о жизни. Рассказывать подробно не нужно: Good, thanks. You?
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | Хорошо, спасибо. А у тебя? | I'm fine, thank you звучит как из школьного учебника, I'm good — гораздо естественнее. «Нормально» — это тоже I'm good или Not bad, но не I'm normal.
What's up? | /ˈwʌts ˈʌp/ | Как жизнь? / Что нового? | Приветствие между друзьями, по смыслу ближе всего к «Как оно?». Отвечают коротко: Not much.
Not much. | /ˈnɑːt ˈmʌtʃ/ | Да ничего особенного | Самый частый ответ на What's up? Можно вернуть вопрос: Not much, you?
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | Как дела? / Как оно? | Разговорный вариант How are you? Обычный ответ: Pretty good!
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | Приятно познакомиться | Только при первой встрече. В ответ: Nice to meet you, too.
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | Сколько лет, сколько зим! | Между хорошими знакомыми. Чуть нейтральнее: It's been a while.
See you later. | /ˈsiː ju ˈleɪtər/ | Увидимся / До встречи | Обычное прощание, даже если новая встреча не запланирована. Это не обещание.
Take care. | /ˈteɪk ˈker/ | Береги себя / Всего доброго | Тёплое прощание. Часто стоит в конце сообщения.
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | Хорошего дня! | Так часто говорят кассиры после оплаты. Достаточно ответить You too!
Bye! | /ˈbaɪ/ | Пока! | Bye-bye звучит мягче, примерно как «пока-пока». Взрослые тоже так говорят, особенно по телефону.
Good night. | /ˈgʊd ˈnaɪt/ | Спокойной ночи / Доброй ночи | Только при прощании вечером или перед сном. Вечером здороваются словами Good evening.
`,
"Рассказ о себе": `
My name is Anna. | /maɪ ˈneɪm ɪz ˈænə/ | Меня зовут Анна | В разговоре короче: I'm Anna. Отчества в английском нет — только имя и фамилия.
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | Зовите меня Джей | Если полное имя длинное, предложи короткое: Call me Max. Многие так и делают с именами Maxim или Alexander.
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | Как к вам обращаться? | Полезно, если имя трудно произнести или хочется узнать, как человек предпочитает, чтобы его называли.
Where are you from? | /ˈwer ər ju frʌm/ | Откуда вы? / Из какой вы страны? | Один из первых вопросов за границей. Предлог from стоит в конце вопроса.
I'm from Russia. | /aɪm frəm ˈrʌʃə/ | Я из России | Назови и город — разговор пойдёт легче: I'm from Kazan, in Russia.
I live in Moscow. | /aɪ ˈlɪv ɪn ˈmɑːskaʊ/ | Я живу в Москве | В Moscow ударение на первый слог: /ˈmɑːskaʊ/. В live — короткий расслабленный /ɪ/, не русское «и».
I'm a student. | /aɪm ə ˈstuːdnt/ | Я студент / Я студентка | Перед профессией нужен артикль a / an. I'm student ✗ — самая частая ошибка: в русском артиклей нет.
What do you do? | /ˈwʌt də ju ˈduː/ | Чем вы занимаетесь? / Кем вы работаете? | Стандартный вопрос о работе, мягче, чем What's your job?
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | Я работаю в банке | Перед компанией или местом работы — at: I work at Google. Русское «в» не всегда in.
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | Я работаю в маркетинге | Перед сферой или отделом — in. Сравни с at (компания).
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | Мне 25 лет | По-русски «мне 25», а по-английски — с глаголом to be: I'm 25. Years old можно опустить. Спрашивать возраст при знакомстве не принято.
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | Я очень люблю походы | Естественнее, чем My hobby is… — так о хобби говорят в разговоре.
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | Я люблю смотреть фильмы | После like действие — с -ing (или to + глагол). I like watch ✗.
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | Я учу английский уже год | По-русски «учу уже год» — настоящее время, а по-английски — Present Perfect Continuous: have been + -ing. I learn English for a year ✗.
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | Я здесь в отпуске | В британском английском — on holiday.
I'm married. | /aɪm ˈmærid/ | Я женат / Я замужем | В английском одно слово и для «женат», и для «замужем». С кем — married to: I'm married to Max (не with). Не в браке — I'm single.
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | У меня есть младший брат | «У меня есть» → I have. Старший брат — older brother.
`,
"Самое нужное 1": `
Excuse me. | /ɪkˈskjuːz mi/ | Извините / Простите | Чтобы обратиться к незнакомому человеку или пройти мимо. После случайного толчка — Sorry!
Thank you. | /ˈθæŋk ju/ | Спасибо | th — кончик языка между зубами, лёгкий выдох. Не с и не ф: звук /θ/ в русском не встречается.
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | Большое спасибо | Проще и дружелюбнее, чем Thank you.
You're welcome. | /jʊr ˈwelkəm/ | Пожалуйста (в ответ на «спасибо») | В ответ на благодарность — не Please. Попроще: Sure, No problem или Anytime.
No problem. | /ˈnoʊ ˈprɑːbləm/ | Не за что | Очень частый ответ на «спасибо».
I'm sorry. | /aɪm ˈsɑːri/ | Извините, пожалуйста / Мне очень жаль | Настоящее извинение. Если просто задели кого-то, хватит короткого Sorry!
Yes, please. | /ˈjes ˈpliːz/ | Да, пожалуйста | Ответ на предложение вроде Would you like some water? Одно Yes без please может прозвучать суховато.
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | Нет, спасибо | Вежливый отказ: одно No звучит резко. Разговорно: I'm good, thanks.
Sorry? | /ˈsɑːri/ | Простите, что вы сказали? | С вопросительной интонацией значит «повторите, пожалуйста». В США так говорят чаще, чем Pardon?
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | Не могли бы вы повторить? | Переспрашивать нормально — носители тоже постоянно так делают.
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | Не могли бы вы говорить помедленнее? | С please звучит ещё вежливее. Обрати внимание: slowly, а не slow.
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | Я не понимаю | Звучит суховато. Мягче: Sorry, I didn't quite catch that.
Do you speak Russian? | /də ju ˈspiːk ˈrʌʃn/ | Вы говорите по-русски? | Do you speak…? естественнее и вежливее, чем Can you speak…? Названия языков пишутся с большой буквы: Russian, English.
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | Я немного говорю по-английски | a little — «немного», а little без a — «мало, почти не»: I speak little English звучит гораздо скромнее.
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | Как это по-английски? | Покажи на предмет — и сразу узнаешь новое слово.
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | Что это значит? | Покажи на слово в меню или на табличке. Без вспомогательного глагола does вопрос не построить.
Can you help me? | /kən ju ˈhelp mi/ | Вы можете мне помочь? | Вежливее: Could you help me?
`,
"Самое нужное 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | Где туалет? | В США — restroom или bathroom. Toilet в Америке — это сам унитаз, поэтому так лучше не спрашивать.
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | Сколько это стоит? | Если вещей несколько: How much are these?
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | Здесь поблизости есть банкомат? | «Здесь есть…?» — оборот there is: Is there…? В британском банкомат — cash machine.
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | Можно пароль от вайфая? | Можно спросить и так: Is there Wi-Fi here? В кафе пароль часто напечатан на чеке.
I'm lost. | /aɪm ˈlɔːst/ | Я заблудился / Я заблудилась | Покажи карту и спроси: Where am I on this map?
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | Можно оплатить картой? | В США картой платят почти везде. Можно сказать и with a card.
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | Одну минуту, пожалуйста | Вежливая фраза, её часто слышно в магазинах и по телефону.
Just a second. | /ˈdʒʌst ə ˈsekənd/ | Секунду | Разговорное. Ещё короче: Just a sec.
No worries. | /ˈnoʊ ˈwɜːriz/ | Ничего страшного / Не переживай | Особенно популярно в Австралии и Великобритании, но и в США звучит часто.
That's okay. | /ˈðæts oʊˈkeɪ/ | Ничего / Всё в порядке | Ответ на извинение. Ещё вариант: Don't worry about it.
Of course. | /əv ˈkɔːrs/ | Конечно | Соглашаясь помочь — отлично. А в ответ на простой вопрос (Is this the right bus?) может прозвучать как «а как же иначе?» — лучше Sure или Yes, it is.
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | Точно не знаю | Мягче, чем I don't know.
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | У меня вопрос | На занятии или на встрече: Can I ask a question?
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | Можете записать? | Лучший выход, если адрес, номер или имя не удалось расслышать.
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | Можно сфотографировать? | В музее или магазине лучше сначала спросить. Сфотографировать — take a picture, а не make a photo.
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | Не могли бы вы нас сфотографировать? | А потом: Thank you so much!
After you. | /ˈæftər ˈjuː/ | Только после вас / Проходите | У двери или лифта. Придержать дверь тому, кто идёт следом, — обычная вежливость.
Watch out! | /ˈwɑːtʃ ˈaʊt/ | Осторожно! | Крикнуть, если кому-то грозит опасность. То же самое: Look out!
`,
"Дорога и транспорт": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | Как пройти к метро? | В британском — underground или tube station. Название места можно подставить любое.
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | Это далеко отсюда? | Американский r в far не раскатистый: кончик языка слегка загнут и ничего не касается.
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | Туда можно дойти пешком? | Проще: Can I walk there?
Go straight. | /ˈgoʊ ˈstreɪt/ | Идите прямо | Go straight for two blocks. В американских городах расстояние считают кварталами (blocks).
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | На углу поверните налево | На светофоре — at the light.
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | Это справа от вас | «Справа» → on your right или on the right. Предлог on.
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | Это через дорогу | across from — «напротив»: across from the bank.
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | Это рядом с банком | next to — «рядом с». Банк понятно какой, поэтому артикль the.
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | Какая линия идёт в центр? | Перед downtown предлог to не нужен: go downtown.
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | Где пересадка? | В британском — change: Where do I change?
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | Этот автобус идёт в аэропорт? | Перед гласным звуком the читается /ði/: the airport.
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | На какой остановке мне выходить? | get off — выходить из автобуса, метро, поезда. Предлог at остаётся в конце вопроса.
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | Один билет до Бостона, пожалуйста | «До Бостона» → to Boston.
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | Туда и обратно или в одну сторону? | В британском: Return or single?
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | Отвезите меня по этому адресу, пожалуйста | Покажи адрес на телефоне — так надёжнее.
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | Остановите здесь, пожалуйста | В такси или в машине. Ещё вариант: Right here is fine.
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | Сколько туда добираться? | Ответ: About 20 minutes.
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | Это место занято? | Если свободно: No, go ahead. В seat — долгий напряжённый /iː/, губы растянуты. С расслабленным /ɪ/ получится sit.
`,
"В ресторане": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | Столик на двоих, пожалуйста | В американских ресторанах обычно ждут у входа, пока гостей не проводят к столику.
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | У вас забронировано? | Вопрос сотрудника ресторана. Отвечают с фамилией: Yes, under Petrov.
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | Можно меню? | Ударение в menu — на первый слог: /ˈmenjuː/, а не как в русском «меню».
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | Что вы посоветуете? | Можно и так: What's popular here? Ударение в recommend — на последний слог.
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | Я возьму стейк | Основная формула заказа: I'll have + блюдо. Give me a steak звучит грубо.
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | Можно колу? | Колу обычно называют Coke. Can I get…? — самый частый способ что-то заказать в американском кафе.
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | Прожарка medium rare, пожалуйста | Ответ на How would you like your steak? Medium rare — слабая прожарка, medium — средняя, well-done — полная.
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | Без лука, пожалуйста | То же самое: Can I get it without onions?
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | У меня аллергия на арахис | «Аллергия на» → allergic to. Ударение на второй слог: /əˈlɜːrdʒɪk/.
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | Это острое? | Если нужно поменьше остроты, попроси mild.
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | Можно нам воды? | В американских ресторанах обычную воду (tap water) приносят бесплатно, часто со льдом.
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | Всё было очень вкусно | Ответ на вопрос официанта How is everything?
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | Принесите счёт, пожалуйста | Check — американское слово, в британском — the bill.
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | Можно разделить счёт? | Ещё говорят separate checks.
It's on me. | /ɪts ɑːn ˈmiː/ | Я угощаю | То же самое: My treat!
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | Можно с собой? | Попросить коробку для остатков: Can I get a box?
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | Чаевые включены? | В американских ресторанах чаевые — 15–20 % от счёта, и гость обычно добавляет их сам. Это почти обязательно, а не по желанию, как в России.
`,
"Кафе и магазин у дома": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | Можно американо со льдом? | Can I get…? — самый частый способ заказать напиток. iced заканчивается на /st/: /ˈaɪst/ — оба согласных стоит произнести.
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | Какой размер? | Вопрос бариста. Ответ: Small, Medium или Large.
Small, please. | /ˈsmɔːl ˈpliːz/ | Маленький, пожалуйста | В Starbucks размеры называют по-своему: tall, grande, venti.
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | Здесь или с собой? | В британском: Eat in or take away?
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | Можно на овсяном молоке? | instead — «вместо этого». За замену могут взять доплату.
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | Поменьше льда, пожалуйста | Совсем без льда: No ice, please. В США льда в холодные напитки кладут много.
Decaf, please. | /ˈdiːkæf ˈpliːz/ | Без кофеина, пожалуйста | Сокращение от decaffeinated.
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | Как вас зовут? (для заказа) | Бариста пишет имя на стакане. Если имя редкое, удобно назвать короткое: Max, Anna.
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | Пакет нужен? | Если не нужен: No, I'm good.
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | Можно чек? | В receipt буква p не читается: /rɪˈsiːt/. Рецепт блюда — recipe, рецепт врача — prescription.
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | Где у вас батарейки? | Универсальная фраза: подставь любой товар.
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | У вас есть зарядки для телефона? | Можно и так: Do you have…?
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | Можете это подогреть? | heat this up произносится слитно, без пауз.
That's it. | /ˈðæts ˈɪt/ | Это всё | Ответ на Anything else?
Here you go. | /ˈhɪr ju ˈgoʊ/ | Вот, пожалуйста | Когда протягиваешь деньги или вещь. Это «пожалуйста» — не please.
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | Сдачи не надо | Часто говорят таксисту или курьеру — вместо чаевых.
`,
"Покупки и оплата": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | Я просто смотрю, спасибо | Ответ на Can I help you find anything?
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | Есть такой в размере M? | Размеры: small, medium, large. Перед размером — in a.
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | Есть такой же, но чёрный? | Перед цветом — in: in black, in red.
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | Можно примерить? | try on — примерять одежду или обувь.
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | Где примерочная? | В британском — changing room.
It's too big. | /ɪts ˈtuː ˈbɪg/ | Слишком большой | Если мал: It's too small.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | Немного тесновато | Если велико: It's a bit loose.
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | На это есть скидка? | on sale — со скидкой, for sale — продаётся. Их легко перепутать.
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | Можете сделать скидку? | В обычных магазинах США не торгуются — только на рынках и при покупке с рук.
I'll take it. | /aɪl ˈteɪk ɪt/ | Беру | Если вещей несколько: I'll take them. Для одной вещи — it, даже если по-русски «его» или «её».
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | Наличные или карта? | Этот вопрос задают на каждой кассе.
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | Можно через Apple Pay? | take здесь — «принимать» (способ оплаты).
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | Можно вернуть деньги? | Сохраняй чек.
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | Я хочу это обменять | Добавь причину: It's the wrong size.
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | Можете упаковать как подарок? | В wrap буква w не читается: /ˈræp/.
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | Налог включён? | В США на ценнике обычно цена без налога, и на кассе выходит больше.
`,
"Числа, время и даты": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | Который час? | Незнакомого человека спрашивают так: Excuse me, do you have the time?
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | Три тридцать (половина четвёртого) | Время обычно называют просто цифрами. По-британски — half past three. Внимание: «половина четвёртого» — это three thirty, а не four thirty.
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | Без четверти пять | quarter — четверть часа. Можно сказать и four forty-five.
At noon | /ət ˈnuːn/ | В полдень | Полночь — midnight. Так понятнее, чем 12 a.m. или 12 p.m.
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | Какое сегодня число? | А день недели: What day is it today?
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | Сегодня третье мая | В американских датах сначала месяц, потом число: 5/3 — это 3 мая, а не 5 марта. Число читается порядковым: May third.
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | У меня день рождения в октябре | Перед месяцем — in, перед датой — on: on October 5th.
On Monday | /ɑːn ˈmʌndeɪ/ | В понедельник | «В понедельник» → on Monday. По понедельникам — on Mondays.
Next weekend | /ˈnekst ˈwiːkend/ | В следующие выходные | Перед next, last, this предлог не нужен: next weekend, а не on next weekend.
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | Послезавтра | Позавчера — the day before yesterday.
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | Тринадцать или тридцать? | В thirteen ударение на -teen, в thirty — на первый слог. Услышав цену, лучше переспросить.
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | Пятнадцать долларов | $15.50 читается fifteen fifty. Дробную часть в английском отделяют точкой, а не запятой.
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | Двести пятьдесят | В американском and часто пропускают: two hundred fifty.
Ten thousand | /ˈten ˈθaʊznd/ | Десять тысяч | Разряды в английском разделяют запятой: 10,000. Пробел, как в русском (10 000), не используют.
One million | /ˈwʌn ˈmɪljən/ | Миллион | 1,000,000. После числа million не получает -s: two million, а не two millions.
Twice a week | /ˈtwaɪs ə ˈwiːk/ | Два раза в неделю | once — один раз, twice — два раза, three times — три раза.
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | Через десять минут | in + время о будущем — «через»: I'll be back in ten minutes. «В течение десяти минут» — within ten minutes.
`,
"Светская беседа": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | Как прошли выходные? | Классический вопрос в понедельник. Ответь парой фраз и спроси в ответ.
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | Было довольно спокойно | pretty здесь — «довольно», а не «красивый».
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | Есть планы на выходные? | Классический вопрос в пятницу. Если планов нет: Not really, just relaxing.
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | Хорошая сегодня погода, да? | Погода — самая безопасная тема для разговора с кем угодно.
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | Сегодня жутко холодно | В жару: It's boiling! или It's so hot! Подлежащее it обязательно, хотя по-русски просто «холодно».
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | Сколько ты здесь живёшь? | По-русски — настоящее время, а по-английски — Present Perfect. How long do you live here? ✗. Ответ: About three years.
Have you been to Russia? | /həv ju bɪn tə ˈrʌʃə/ | Ты когда-нибудь был(а) в России? | Об опыте спрашивают в Present Perfect: have been to.
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | Чем ты любишь заниматься в свободное время? | Естественнее, чем What's your hobby?
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | Посмотрел(а) недавно что-нибудь интересное? | show — сериал или телешоу.
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | Звучит здорово | Реакция на рассказ собеседника. Ещё вариант: That sounds great!
Same here. | /ˈseɪm ˈhɪr/ | У меня так же / Я тоже | Разговорно — просто Same!
Me neither. | /ˈmiː ˈniːðər/ | Я тоже нет | Согласие с отрицанием: I don't like it. → Me neither. А не Me too.
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | Вот именно! / И не говори! | Разговорная фраза для полного согласия.
Oh, really? | /ˈoʊ ˈriːəli/ | Да ну? / Правда? | Показывает интерес. Интонация идёт вверх.
By the way | /baɪ ðə ˈweɪ/ | Кстати | Чтобы сменить тему. В переписке — BTW.
How's work? | /ˈhaʊz ˈwɜːrk/ | Как работа? | Вопрос знакомому. Ответ: Busy, but good!
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | Приятно было поговорить | Вежливый способ закончить разговор.
`,
"Эмоции и реакции": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | Я так за тебя рад(а)! | Когда у собеседника хорошие новости.
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | Поздравляю! | Обязательно с -s на конце. Коротко: Congrats!
That's awesome! | /ˈðæts ˈɔːsəm/ | Круто! / Супер! | Одна из самых частых реакций в американской речи.
No way! | /ˈnoʊ ˈweɪ/ | Да ладно! / Не может быть! | При удивлении. Ещё так отказываются: No way, I'm not doing that.
Seriously? | /ˈsɪriəsli/ | Серьёзно? | В зависимости от тона — удивление или раздражение.
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | Я так устал(а) | Совсем без сил: I'm exhausted.
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | У меня сплошной стресс | Естественнее, чем I have stress.
I'm bored. | /aɪm ˈbɔːrd/ | Мне скучно | Осторожно: I'm boring — «я скучный человек».
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | Жду не дождусь! | excited — радостное предвкушение, а не «возбуждён».
I'm nervous. | /aɪm ˈnɜːrvəs/ | Я волнуюсь | Перед собеседованием или выступлением. Это не «нервный» в смысле «раздражительный». Другому: Don't be nervous.
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | Жаль / Обидно | Лёгкое сожаление. Для серьёзных новостей — следующая фраза.
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | Мне очень жаль это слышать | Это сочувствие, а не извинение.
What a relief! | /ˈwʌt ə rɪˈliːf/ | Какое облегчение! | Часто вместе с Phew!
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | Боже мой! / Ничего себе! | Смягчённое Oh my God. В переписке — OMG.
I'm upset. | /aɪm ʌpˈset/ | Я расстроен(а) | Что-то среднее между обидой и огорчением.
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | Как же это бесит | О человеке You're annoying звучит довольно резко.
I can't wait! | /aɪ ˈkænt ˈweɪt/ | Скорей бы! / Не могу дождаться! | Буквально «не могу ждать».
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | Ничего страшного / Пустяки | Чтобы успокоить того, кто извиняется.
`,
"Комплименты и симпатия": `
You look great! | /ju ˈlʊk ˈgreɪt/ | Отлично выглядишь! | Комплимент внешности — через You look… Уместно между знакомыми.
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | Мне очень нравятся твои туфли | love здесь — «очень нравится». В США так легко хвалят даже незнакомых — это просто дружелюбие.
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | Тебе идёт этот цвет | look good on + человек — «идти кому-то». В американском — color, в британском — colour.
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | У тебя чудесная улыбка | Тёплый комплимент, уместный между знакомыми.
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | Ты меня так смешишь! | funny — «смешной», а fun — «весёлый, с ним не скучно»: You're fun.
Great job! | /ˈgreɪt ˈdʒɑːb/ | Отличная работа! | И на работе, и на учёбе. То же самое: Nice work!
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | Я тобой горжусь | Близким и друзьям. Начальник тоже может так сказать подчинённому.
You did it! | /ju ˈdɪd ɪt/ | У тебя получилось! | Тому, кто добился цели.
Your Russian is really good! | /jʊr ˈrʌʃn ɪz ˈriːəli ˈgʊd/ | Ты отлично говоришь по-русски! | Скажи это иностранцу, который учит русский, — ему будет приятно.
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | У тебя хороший вкус | Об одежде, музыке, интерьере.
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | Мне было очень приятно провести с тобой время | В конце свидания или встречи.
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | Может, сходим как-нибудь на кофе? | want to в речи часто звучит как wanna. grab — «быстро перекусить или выпить».
I miss you. | /aɪ ˈmɪs ju/ | Я скучаю по тебе | Тому, кто сейчас далеко. Не путай с I'm bored — «мне скучно».
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | Ты много для меня значишь | Другу или любимому человеку.
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | Ты просто спаситель! | Благодарность с преувеличением — даже за небольшую помощь.
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | Ты поднял(а) мне настроение на весь день! | Когда приятные слова или подарок очень порадовали.
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | Очень любезно с вашей стороны | Вежливый ответ на помощь или комплимент.
`,
"Работа и деловые письма": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | Надеюсь, у вас всё хорошо | Формальное начало письма. Проще: I hope you're doing well. Аналога «Уважаемый Максим Петрович» нет: пишут Dear Mr. Petrov или просто Hi Max.
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | Пишу, чтобы уточнить расписание | Цель письма — в первой же фразе: I'm writing to + цель.
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | Отчёт во вложении | Please find attached… звучит формальнее.
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | Небольшое напоминание о завтрашней встрече | Мягкий способ напомнить или поторопить.
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | Если будут вопросы, пишите | Типичная концовка письма.
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | Можете прислать файл к пятнице? | by — срок: к пятнице. until — длительность: всё время до пятницы (I'm here until Friday).
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | Извините за поздний ответ | Без лишних извинений: Thanks for your patience.
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | Спасибо за ответ | get back to — ответить, снова связаться.
Best regards, | /ˈbest rɪˈgɑːrdz/ | С уважением, | Нейтральная подпись письма. Коллегам — короче: Best, или Thanks,
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | Давайте назначим встречу | schedule в американском — /ˈskedʒuːl/, в британском — /ˈʃedjuːl/.
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | Я немного опаздываю | Предупредить по дороге: I'll be there in 10.
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | Можно перенести встречу на три? | Перенести на более раннее время — move up: Can we move it up to 1?
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | Я уточню и отвечу | Когда нужно время, чтобы ответить.
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | Можете объяснить по шагам? | walk through — объяснить пошагово.
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | Давайте сверимся на следующей неделе | Короткий созвон или встреча, чтобы обсудить, как идут дела.
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | Какой срок? / Когда дедлайн? | Ещё вариант: When is this due?
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | Сегодня я работаю из дома | Сокращённо — WFH. Удалённая работа вообще — remote work.
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | Завтра у меня выходной | Про отгул: I'm taking a day off tomorrow.
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | Спасибо за проделанную работу | Тёплая благодарность команде или коллеге, например в конце проекта.
`,
"Звонки и сокращения в чатах": `
Hello, this is Anna. | /həˈloʊ ˈðɪs ɪz ˈænə/ | Алло, это Анна | По телефону говорят This is Anna, а не I'm Anna.
Can I speak to Mr. Petrov? | /kən aɪ ˈspiːk tə ˈmɪstər ˈpetrɑːv/ | Можно поговорить с господином Петровым? | Отчества в английском нет: Mr. или Ms. + фамилия. Вежливее: May I speak to…?
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | Кто говорит? / Как вас представить? | Вопрос того, кто принимает звонок.
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | Подождите секунду | Попросить подождать — по телефону или в разговоре.
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | Извините, вас плохо слышно | break up здесь — «прерываться» о связи. Ещё значит «расстаться».
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | Можно я перезвоню? | Если неудобно говорить: I'm in a meeting. Can I call you back?
I'll text you. | /aɪl ˈtekst ju/ | Я тебе напишу | В США сообщение — text, и глагол тоже text.
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | Я уже еду / Я в пути | В переписке — OMW.
LOL | /ˌel oʊ ˈel/ | Ахаха / Лол | laughing out loud. Обычно это не громкий смех, а лёгкое «хаха».
BRB | /ˌbiː ɑːr ˈbiː/ | Сейчас вернусь | be right back. В чате или в игре, когда ненадолго отходишь.
BTW | /ˌbiː tiː ˈdʌbəljuː/ | Кстати | by the way. Чтобы сменить тему.
TBH | /ˌtiː biː ˈeɪtʃ/ | Честно говоря | to be honest. В начале или в конце фразы.
IDK | /ˌaɪ diː ˈkeɪ/ | Не знаю | I don't know. Часто пишут строчными: idk.
OMG | /ˌoʊ em ˈdʒiː/ | Боже! / Офигеть | oh my God. Говорят и вслух, по буквам.
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | Как можно скорее | as soon as possible. Читают и по буквам, и одним словом. Начальнику вежливее назвать конкретный срок.
TTYL | /ˌtiː tiː waɪ ˈel/ | Потом поговорим / Позже спишемся | talk to you later. Чтобы закончить разговор.
NVM | /ˌen viː ˈem/ | Неважно, забей | never mind. Чтобы отменить свой вопрос.
FYI | /ˌef waɪ ˈaɪ/ | К сведению | for your information. Часто встречается в рабочей переписке.
`,
"Путешествия (аэропорт и отель)": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | Вот мой паспорт | При регистрации или на паспортном контроле.
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | Цель поездки — туризм | Ответ на паспортном контроле на вопрос What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | Я здесь на неделю | Ответ на How long are you staying?
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | Я остановлюсь в «Хилтоне» | Ответ на Where are you staying? Перед названием отеля — артикль the.
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | У окна или у прохода? | В aisle буква s не читается: /ˈaɪl/.
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | Мне место у прохода, пожалуйста | У окна — a window seat. Перед гласным звуком — an: an aisle.
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | Где выдача багажа? | В британском — baggage reclaim.
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | Мой багаж потерялся | Как и «багаж», luggage — неисчисляемое: one piece of luggage, two pieces of luggage.
I have a reservation under Petrov. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər ˈpetrɑːv/ | У меня бронь на фамилию Петров | Бронь на чьё-то имя — under + фамилия.
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | Во сколько выезд? | Выехать позже: Can I get a late check-out?
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | Можно заселиться пораньше? | check in произносится слитно.
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | Завтрак включён? | В breakfast первый слог — /brek/, а не «брейк».
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | Кондиционер не работает | Коротко — AC. Просто conditioner — это кондиционер для волос.
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | Можно ещё полотенец? | could I в речи сливаются.
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | Можно оставить у вас вещи до трёх? | Просьба после выезда. hold — подержать у себя.
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | Мой рейс задержали | Если отменили — canceled.
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | Где выход 12? | Номер читается словами: gate twelve. gate в аэропорту — выход на посадку.
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | Ноутбук нужно доставать? | На досмотре. Ноутбук — laptop, а notebook — это тетрадь или блокнот.
`,
"Врач и экстренные случаи": `
Help! | /ˈhelp/ | Помогите! | Кричать громко в опасной ситуации.
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | Звоните 911! | В США экстренный номер — 911 (nine one one), в Великобритании — 999, в России — 112.
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | Мне нужен врач | Срочно: I need an ambulance.
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | Мне нехорошо | Самая нейтральная фраза. «Чувствую себя» — просто feel, без myself.
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | У меня болит голова | Часть тела + ache: stomachache, toothache.
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | У меня температура | По-русски «температура», а по-английски чаще всего fever. I have a temperature тоже говорят, но fever — самый частый вариант.
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | У меня болит живот | Часть тела + hurts: My back hurts.
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | У меня болит горло | sore — «воспалённый, саднящий». Шея снаружи — neck, а горло — throat.
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | У меня кружится голова | Если тошнит: I feel sick. или I feel nauseous.
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | Я подвернул(а) ногу | sprain — растянуть связки. ankle — лодыжка, запястье — wrist.
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | Здесь поблизости есть аптека? | В США аптеку часто называют drugstore (например, CVS).
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | Нужен рецепт? | Лекарства без рецепта — over-the-counter. Рецепт врача — prescription, а рецепт блюда — recipe.
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | Я потерял(а) кошелёк | Если телефон — phone. Бюро находок — lost and found.
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | У меня украли телефон | stole — прошедшее время от steal.
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | Где полицейский участок? | Ударение в police — на второй слог: /pəˈliːs/.
I need to contact the Russian embassy. | /aɪ ˈniːd tə ˈkɑːntækt ðə ˈrʌʃn ˈembəsi/ | Мне нужно связаться с посольством России | Пригодится, если пропал паспорт.
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | У меня есть туристическая страховка | В США лечение очень дорогое — страховку стоит оформить заранее.
`,
"Фразовые глаголы": `
pick up | /ˈpɪk ˈʌp/ | заехать за кем-то / поднять | I'll pick you up at 7. Местоимение (you, it) ставится в середину.
give up | /ˈgɪv ˈʌp/ | сдаться / бросить | Don't give up! Что именно бросить — с -ing: give up smoking.
figure out | /ˈfɪgjər ˈaʊt/ | разобраться / понять | I can't figure out this app. — «Не могу разобраться в этом приложении».
find out | /ˈfaɪnd ˈaʊt/ | узнать (факт) | Когда получаешь информацию. figure out — когда разбираешься сам.
look for | /ˈlʊk fɔːr/ | искать | I'm looking for my keys. Результат поиска — find: I found them.
look after | /ˈlʊk ˈæftər/ | присматривать / заботиться | Can you look after my cat? В американском часто говорят take care of.
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | ждать с нетерпением | После to — существительное или -ing: I'm looking forward to seeing you.
run out of | /ˈrʌn ˈaʊt əv/ | закончиться (о запасах) | We ran out of milk. — «У нас закончилось молоко». По-английски подлежащее — «мы», а не молоко.
turn on | /ˈtɜːrn ˈɑːn/ | включить | Turn on the light. С местоимением: Turn it on.
turn off | /ˈtɜːrn ˈɔːf/ | выключить | С местоимением: Turn it off. Turn off it ✗.
turn down | /ˈtɜːrn ˈdaʊn/ | отказаться / сделать потише | Оба значения частые: She turned down the offer. — «Она отказалась от предложения». Turn it down! — «Сделай потише!»
put off | /ˈpʊt ˈɔːf/ | откладывать | В разговоре звучит гораздо чаще, чем postpone: Stop putting it off!
show up | /ˈʃoʊ ˈʌp/ | прийти / появиться | He didn't show up to the party. — «Он так и не пришёл на вечеринку».
hang out | /ˈhæŋ ˈaʊt/ | тусоваться / проводить время вместе | «Погулять с друзьями» — hang out with friends, а не walk: walk значит именно идти пешком.
check out | /ˈtʃek ˈaʊt/ | посмотреть / заценить | Check out this video! Ещё значит «выехать из отеля».
work out | /ˈwɜːrk ˈaʊt/ | тренироваться / получиться | I work out every day. / It'll work out. — «Всё получится».
come up with | /ˈkʌm ˈʌp wɪð/ | придумать | Идею, отговорку, решение: She came up with a great idea.
get along with | /ˈget əˈlɔːŋ wɪð/ | ладить с | I get along with my coworkers. — «Я лажу с коллегами».
calm down | /ˈkɑːm ˈdaʊn/ | успокоиться | В calm буква l не читается. Сказать злящемуся человеку Calm down! — скорее разозлить его ещё больше.
set up | /ˈset ˈʌp/ | настроить / организовать | Технику, встречу, аккаунт: Can you help me set up my printer?
break up | /ˈbreɪk ˈʌp/ | расстаться | They broke up last month. С кем — break up with.
fill out | /ˈfɪl ˈaʊt/ | заполнить (бланк) | Please fill out this form. В британском — fill in.
grow up | /ˈgroʊ ˈʌp/ | вырасти | Где прошло детство: I grew up in Kazan.
wake up | /ˈweɪk ˈʌp/ | проснуться | Проснуться — wake up, а встать с кровати — get up.
`,
"Произношение: ловушки": `
rice | /ˈraɪs/ | рис | Различать r и l ты умеешь, эта пара лёгкая. Следи только, чтобы английский r не был раскатистым: язык не касается нёба.
lice | /ˈlaɪs/ | вши | l — кончик языка у бугорков за верхними зубами. Пара rice / lice — разминка.
right | /ˈraɪt/ | правый / правильный | Американский r: кончик языка слегка загнут назад и ничего не касается. Без вибрации — не как русское «р».
light | /ˈlaɪt/ | свет / лёгкий | В начале слова английский l светлее русского «л», а в конце (feel, milk) — тёмный, почти как русский.
fan | /ˈfæn/ | вентилятор / фанат | f и p ты различаешь — это разминка. Следи за гласным /æ/: рот открыт шире, чем для «э».
pan | /ˈpæn/ | сковорода | В начале слова p произносится с лёгким выдохом. Без выдоха носителю может послышаться b.
coffee | /ˈkɔːfi/ | кофе | В американском — /ˈkɔːfi/, с открытым долгим гласным. Ударение на первый слог.
copy | /ˈkɑːpi/ | копировать / копия | В американском гласный /ɑː/ — похоже на русское «а».
think | /ˈθɪŋk/ | думать | /θ/ — кончик языка между зубами, лёгкий выдох. Если сказать «с», получится sink.
sink | /ˈsɪŋk/ | раковина / тонуть | Обычный звук s, язык за зубами.
three | /ˈθriː/ | три | Кончик языка между зубами! С «т» получится tree.
tree | /ˈtriː/ | дерево | tr произносится слитно, почти как «чр».
this | /ˈðɪs/ | это / этот | Звонкий /ð/: язык между зубами, голос включён. Не «з» и не «д».
very | /ˈveri/ | очень | v и b в русском тоже различаются, так что very / berry — лёгкая пара. Главное — не путать v с w.
berry | /ˈberi/ | ягода | b — сомкнуть губы и раскрыть.
vote | /ˈvoʊt/ | голосовать | v — верхние зубы касаются нижней губы. vote / boat различаются как «вот» и «бот».
boat | /ˈboʊt/ | лодка | /oʊ/ — дифтонг: «о» переходит в «у». Не просто «о».
walk | /ˈwɔːk/ | идти пешком / гулять | l не читается. /w/ — губы вытянуты трубочкой и не касаются зубов, это не «в».
work | /ˈwɜːrk/ | работать / работа | /ɜːr/ — не «о» и не «ё». Пару walk / work легко спутать: в walk — /ɔː/, в work — /ɜːr/.
beach | /ˈbiːtʃ/ | пляж | /iː/ — долгий и напряжённый, губы растянуты в улыбке. С расслабленным /ɪ/ получится грубое ругательство.
leave | /ˈliːv/ | уходить / уезжать | Долгий напряжённый /iː/, губы растянуты. В live звук другой, а не просто короче.
live | /ˈlɪv/ | жить | /ɪ/ — короткий и расслабленный, что-то среднее между «и» и «ы». Это не короткий /iː/, а другой звук.
banana | /bəˈnænə/ | банан | Ударение на второй слог: /bəˈnænə/. Безударные a — нейтральный /ə/.
hotel | /hoʊˈtel/ | отель / гостиница | Ударение на второй слог, как в русском «отель». h — просто выдох, не «х».
milk | /ˈmɪlk/ | молоко | l перед согласным тёмный — здесь русское «л» как раз подходит. Конечный k — с лёгким выдохом.
McDonald's | /məkˈdɑːnldz/ | «Макдоналдс» | Ударение на do: /məkˈdɑːnldz/. Первый слог слабый — /mək/, не «мак».
ship | /ˈʃɪp/ | корабль | /ɪ/ — короткий и расслабленный. Это не короткое sheep, а другой звук.
sheep | /ˈʃiːp/ | овца | /iː/ — долгий и напряжённый, губы растянуты. Длина важна, но качество звука ещё важнее.
wine | /ˈwaɪn/ | вино | w — губы трубочкой, зубы их не касаются. Если сказать «в», получится vine.
vine | /ˈvaɪn/ | виноградная лоза | v — как русское «в».
west | /ˈwest/ | запад | w — губы трубочкой. Если сказать «в», получится vest.
vest | /ˈvest/ | жилет | v — верхние зубы на нижней губе. В британском английском vest — это майка.
bad | /ˈbæd/ | плохой | Не оглушай конечный d: bad ≠ bat. Гласный перед звонким согласным длиннее. /æ/ — шире, чем «э».
bat | /ˈbæt/ | летучая мышь / бита | Глухой t на конце, гласный короче, чем в bad.
dog | /ˈdɔːg/ | собака | Конечный g звонкий, не оглушай его (по-русски «друг» звучит как [друк]). В американском гласный — /ɔː/.
dock | /ˈdɑːk/ | причал / док | Глухой k на конце и другой гласный — /ɑː/.
house | /ˈhaʊs/ | дом | h — лёгкий выдох без шума. Русское «х» здесь слишком грубое.
sing | /ˈsɪŋ/ | петь | /ŋ/ — задняя часть языка прижата к нёбу, звук идёт через нос. Без «г» на конце.
singing | /ˈsɪŋɪŋ/ | пение | Два /ŋ/, и ни одного «г»: не «сингинг» и не «синин».
comfortable | /ˈkʌmftərbl/ | удобный | Ударение на первый слог, а не как в «комфортабельный». Середина слова почти пропадает.
development | /dɪˈveləpmənt/ | развитие / разработка | Ударение на второй слог: de-VEL-op-ment. Русское «девелопмент» с ударением на «ло» сбивает.
`,
"Английские идиомы": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | Проще простого / Раз плюнуть | Очень легко: The test was a piece of cake.
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | Я на седьмом небе | Русское «седьмое небо» по-английски — девятое облако.
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | Стоит целое состояние | Буквально «стоит руки и ноги».
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | На сегодня хватит | В конце работы или учёбы. Уместно и на совещании.
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | Мне что-то нездоровится | Лёгкое недомогание. С погодой не связано.
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | Мне надо засесть за учебники | Перед экзаменом. Книги никто не бьёт.
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | Раз в сто лет / Очень редко | О том, что бывает крайне редко: I only eat fast food once in a blue moon.
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | Лучше поздно, чем никогда | Совпадает с русской поговоркой.
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | Не ходи вокруг да около | Просьба говорить прямо.
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | Это не моё | Мягкий способ сказать, что не нравится.
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | Ну что, приступим! | В начале встречи или проекта.
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | Буду держать за тебя кулачки | По-английски не кулачки, а скрещённые пальцы — указательный и средний.
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | Держись | Тому, у кого трудный период.
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | Лёгок на помине! | Когда появляется тот, о ком только что говорили.
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | Теперь слово за тобой | Из тенниса: мяч на твоей стороне.
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | Я — могила / Никому не скажу | Буквально «мои губы запечатаны».
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | Вертится на языке | Как и по-русски: слово вот-вот вспомнится, но никак.
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | Я весь внимание | Буквально «я весь — уши».
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | Когда рак на горе свистнет | Чего никогда не будет: He'll clean his room when pigs fly.
`,
"Кино, сериалы и сленг": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | Выкладывай! | tea на сленге — сплетни, новости. Только между друзьями.
No cap. | /ˈnoʊ ˈkæp/ | Без шуток / Честно | Молодёжный сленг. cap — враньё.
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | Эта песня — огонь | slap здесь — «качает, бомба». Говорят и о еде.
I'm dead. | /aɪm ˈded/ | Ору! / Умираю со смеху | В переписке — часто с эмодзи 💀. Никто не умер.
Low-key | /ˌloʊˈkiː/ | Втайне / Немножко | I low-key love this song. Противоположное — high-key: открыто, не скрывая.
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | Эта песня у меня на повторе | obsessed — «помешан», но здесь в хорошем смысле.
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | О чём это? | О сюжете фильма или сериала.
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | Без спойлеров! | То же самое: Don't spoil it!
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | Посмотрел(а) весь сезон за один присест | binge-watch — смотреть запоем.
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | Концовка — супер | Если не понравилась: The ending was disappointing.
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | Обязательно к просмотру | Горячая рекомендация.
Plot twist! | /ˈplɑːt ˈtwɪst/ | Вот это поворот! | И о неожиданностях в жизни.
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | Его переоценивают | Противоположное — underrated: недооценённый.
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | От этой сцены мурашки по коже | От восторга или от напряжения.
Who's your bias? | /ˈhuːz jʊr ˈbaɪəs/ | Кто твой любимчик в группе? | Сленг фанатов, особенно кей-поп: bias — любимый участник группы. Нейтрально: Who's your favorite member?
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | Ты шутишь? / Издеваешься? | Типичная реплика из сериалов: удивление или раздражение.
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | Я тебя прикрою | Обещание поддержки: «я на твоей стороне».
Gotcha. | /ˈgɑːtʃə/ | Понятно / Попался! | Сокращение от got you. Чаще всего значит «понял».
Let's do this! | /ˈlets ˈduː ˈðɪs/ | Погнали! | Перед началом, чтобы поднять настрой.
`,
"Ложные друзья и кальки": `
store | /ˈstɔːr/ | магазин | Ложный друг: magazine — это журнал. Магазин — store, в британском — shop.
factory | /ˈfæktəri/ | фабрика / завод | Ложный друг: fabric — это ткань.
office | /ˈɔːfɪs/ | кабинет / офис | Ложный друг: cabinet — шкаф (с полками или дверцами). Кабинет врача или директора — office.
neat | /ˈniːt/ | аккуратный | Ложный друг: accurate — «точный» (accurate information). Аккуратный человек — neat или tidy.
smart | /ˈsmɑːrt/ | умный | Ложный друг: intelligent — тоже «умный», а не «интеллигентный». Интеллигентный человек — cultured, well-educated.
current | /ˈkɜːrənt/ | актуальный / текущий | Ложный друг: actual — «настоящий, фактический». Актуальная информация — current или up-to-date information.
diamond | /ˈdaɪmənd/ | бриллиант | Ложный друг: brilliant — «блестящий, гениальный» (a brilliant idea). Кольцо с бриллиантом — a diamond ring.
I'm fine. | /aɪm ˈfaɪn/ | Нормально / Всё хорошо | Ложный друг: I'm normal значит «я обычный, нормальный человек». «Нормально» в ответ на «как дела» — I'm fine, I'm OK.
Tell me the truth. | /ˈtel mi ðə ˈtruːθ/ | Скажи мне правду | «Сказать» — два глагола. Кому-то — tell: tell me. Say me ✗. Say — без человека: say something, say hello.
make coffee | /ˈmeɪk ˈkɔːfi/ | сварить кофе | «Делать» — два глагола. Готовишь или создаёшь — make: make coffee, make a cake. Do a coffee ✗.
study at a university | /ˈstʌdi ət ə ˌjuːnɪˈvɜːrsəti/ | учиться в университете | «Учить» — три глагола: learn (выучить, освоить), study (заниматься, учиться в вузе), teach (учить других). В американском — с артиклем: at a university.
a convenient time | /ə kənˈviːniənt ˈtaɪm/ | удобное время | «Удобный» — два слова. Comfortable — только об ощущениях: удобный диван, удобные туфли. Удобное время или место — convenient.
opportunity | /ˌɑːpərˈtuːnəti/ | возможность (шанс) | «Возможность» как шанс что-то сделать — opportunity: a great opportunity. Possibility — вероятность, что что-то случится.
healthy food | /ˈhelθi ˈfuːd/ | полезная еда | Калька: useful food ✗. Полезное для здоровья — healthy, а useful — полезный в деле (a useful app).
I feel well. | /aɪ ˈfiːl ˈwel/ | Я хорошо себя чувствую | Калька: «чувствую себя» — просто feel, без myself. I feel myself well ✗.
Thank God! | /ˈθæŋk ˈgɑːd/ | Слава богу! | Калька: Thanks God ✗. Здесь thank — глагол, поэтому без -s.
She speaks English fluently. | /ʃi ˈspiːks ˈɪŋglɪʃ ˈfluːəntli/ | Она свободно говорит по-английски | Калька: «свободно» о языке — fluently, а не freely. Freely — без ограничений.
She's my friend. | /ʃiz maɪ ˈfrend/ | Она моя подруга | Ловушка: «подруга» — просто friend. My girlfriend обычно значит «моя девушка» (романтические отношения).
in the picture | /ɪn ðə ˈpɪktʃər/ | на картинке / на фото | Калька: «на картинке» — in the picture, а не on the picture.
depend on | /dɪˈpend ɑːn/ | зависеть от | Калька: depend from ✗. «Зависеть от» — depend on: It depends on the weather.
I called my friend. | /aɪ ˈkɔːld maɪ ˈfrend/ | Я позвонил(а) другу | Калька: «позвонить кому-то» — call someone, без предлога. I called to my friend ✗.
I'm waiting for you. | /aɪm ˈweɪtɪŋ fər ju/ | Я тебя жду | Калька: «ждать кого-то» — wait for someone. I'm waiting you ✗.
My phone is old. It doesn't work. | /maɪ ˈfoʊn ɪz ˈoʊld ‖ ɪt ˈdʌznt ˈwɜːrk/ | Мой телефон старый. Он не работает | Ловушка рода: телефон по-русски «он», но для предметов в английском всегда it. He doesn't work ✗.
I'm from Moscow. | /aɪm frəm ˈmɑːskaʊ/ | Я из Москвы | Калька: Moscow city ✗. Город называют просто по имени: I'm from Moscow.
`
};
