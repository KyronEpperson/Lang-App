/* Russian (Cyrillic) -> en-ru pron respelling (profile docs/profiles/en-ru.md §6). Deterministic: the same Russian always gives the same pron.
   Stress is not written in Russian, so it comes from the word list below (LEX). The generator THROWS «…» on any word of two or more
   syllables that is not in the list (and has no ё), and on a stress homograph (дома: дОма "at home" / домА "houses") that no listed phrase settles.
   Rules applied (standard Moscow pronunciation, as taught in US first-year courses): akanye (unstressed о, а -> ah), ikanye (unstressed е, я after a
   soft consonant -> ih, except я after the stress -> yah), ж ш ц always hard (жи -> zhih), ч щ always soft, final devoicing, regressive voicing
   assimilation (в never voices what comes before it), vowel-less prepositions в к с joined in sound to the next word, -ого / -его said -ovo,
   -тся / -ться said -tsa, сч / зч / жч -> щ, тс / дс / тц / дц -> ц, silent consonants in стн здн стл вств лнц рдц.
   Format: lowercase ASCII; syllables joined by "-"; in a word of two or more syllables the stressed syllable is in CAPITALS; one-syllable words
   are lowercase; ' after a consonant = soft (no vowel follows); y after a consonant before ah / eh / oh / oo = soft; words separated by spaces.
   usage: node respell.js "Спасибо!"  ->  Спасибо! -> spah-SEE-bah        node respell.js --pattern   (prints pronPattern)
          node respell.js --check file.js   (lists every Russian string in a writer file that throws: words to add to the list)
   Word list format (LEX below, plus any tools/target/ru/lexicon*.txt, read if present: lexicon.txt is the lead's, lexicon-<writer>.txt a writer's):
     entries separated by spaces, ";" or new lines; "#" starts a comment line.
     молокО          the word with its stressed vowel in CAPITALS, everything else lowercase (ё needs no capital: ещё)
     что=штО         spelling = how it is said, in Cyrillic with the stressed vowel in capitals (exceptions to the rules)
     кафе=кафЭ       э on the right = hard consonant before е (loanwords)
     дОма домА       the same spelling listed twice with different stress = a homograph: alone it throws
     я_дОма          a phrase (words joined by _): settles a homograph inside it; longest phrase wins
     ~на             a clitic: a short word with no stress of its own (prepositions, не, и, а, но, ли, же, бы) */
const fs = require('fs'), path = require('path');
const LEX_TEXT = `
# ---- clitics (no stress of their own) ----
~в ~во ~к ~ко ~с ~со ~у ~о ~об ~обо ~на ~по ~за ~из ~от ~до ~без ~под ~над ~при ~про ~для ~не ~ни ~и ~а ~но ~ли ~же ~бы
# ---- exceptions: said differently from the spelling ----
что=штО чтобы=штОбы ничто=ништО что-то=штО-то что-нибудь=штО-нибудь
сегодня=севОдня сегодняшний=севОдняшний конечно=конЕшно скучно=скУшно скучный=скУшный нарочно=нарОшно яичница=яИшница
здравствуйте=здрАствуйте здравствуй=здрАствуй пожалуйста=пожАлста солнце=сОнце сердце=сЕрце
легко=лехкО лёгкий=лЁхкий мягкий=мЯхкий бог=бОх
много=мнОго немного=немнОго дорого=дОрого недорого=недОрого строго=стрОго
# hard consonant before е in loanwords
кафе=кафЭ отель=отЭль интернет=интэрнЭт компьютер=компьЮтэр тест=тЭст модель=модЭль энергия=энЭргия
кофе=кОфе свитер=свИтэр бизнес=бИзнэс менеджер=мЕнэджэр шоссе=шоссЭ пюре=пюрЭ кашне=кашнЭ
# ---- pronouns, question words, small words ----
я ты он онА онО онИ мы вы
менЯ тебЯ егО её негО неё емУ ей немУ нЕй им Ими их них нам нас вам вас нАми вАми мне мной тобОй собОй себЯ себЕ
мОй моЯ моЁ моИ моегО моЕй моемУ моИм моИх твОй твоЯ твоЁ твоИ твоегО твоЕй твоемУ твоИм наш нАша нАше нАши нАшего нАшей нАшему нАшим нАших
ваш вАша вАше вАши вАшего вАшей вАшему вАшим вАших свОй своЯ своЁ своИ своегО своЕй
кто кОго=ковО кого=ковО комУ кем ком чегО=чевО чего=чевО чем чемУ какОй какАя какОе какИе какОго какУю какОм какИх
где кудА откУда когдА почемУ зачЕм скОлько сколькО=скОлько как чей чьЯ чьЁ чьИ котОрый котОрая котОрое котОрые котОрого котОром котОрой котОрую котОрым
Этот Эта Это Эти Этого Этой Этому Этим Этом Этих Эту тот тА тО тЕ тогО тОй тОм тЕх тУ вЕсь всЯ всЁ все=всЕ всегО всЕх вЕсь
вот тут там здесь тудА сюдА отсЮда тОже тАкже тАк такОй такАя такОе такИе ещё ужЕ тОлько дАже вдрУг сейчАс потОм тогдА сначАла Очень
да нет нЕ-а угУ ага=агА ну Или Или-Или либо=лИбо потомУ_что=потомУ_што потомУ потому=потомУ поэтому=поэтОму если=Если хотя=хотЯ
кто-то=ктО-то кто-нибудь=ктО-нибудь где-то=гдЕ-то когда-нибудь=когдА-нибудь никтО ничегО=ничевО никогдА нигдЕ никудА
мОжно нельзЯ нАдо нУжно нужнА нужнЫ дОлжен должнА должнО должнЫ рАд рАда рАды
хорошО плОхо прАвильно непрАвильно вкУсно интерЕсно трУдно=трУдно легкО отлИчно нормАльно=нормАльно бЫстро мЕдленно грОмко тИхо рАно пОздно=пОзно дАлеко=далекО далекО блИзко рЯдом
спасИбо пожАлуйста=пожАлста извинИте извинИ простИте простИ привЕт покА здрАвствуйте=здрАствуйте до_свидАния=да_свидАния свидАния
добрО_пожАловать=добрО_пожАловать пожАловать
# ---- greetings ----
дОброе дОбрый дОброго дОброй дОбрые Утро Утра дЕнь вЕчер вЕчера нОчи нОчь спокОйной спокОйной_нОчи ночь
как_делА делА дЕла делО делАми приЯтно познакОмиться знакОмьтесь зовУт вас_зовУт тебЯ_зовУт
# ---- people and family ----
человЕк лЮди мУж женА жЁны мужьЯ мАма пАпа мАть отЕц отцА родИтели брАт брАта брАту брАтом брАтья сестрА сестрУ сестрЕ сестрОй сЁстры сестЁр
сЫн сЫна дОчь дОчка дОчери бАбушка дЕдушка дЯдя тЁтя дрУг дрУга дрУгу дрУгом друзьЯ друзЕй подрУга подрУги подрУгу подрУгой сосЕд сосЕдка
семьЯ семьИ сЕмьи семьЮ семьЁй ребёнок дЕти детЕй мАльчик дЕвочка дЕвушка молодОй_человЕк женщина=жЕнщина мужчИна=мущИна
коллЕга начАльник врАч врачА врачУ учИтель учИтельница преподавАтель студЕнт студЕнтка инженЕр мЕнеджер=мЕнэджэр программИст бухгАлтер юрИст
официАнт официАнтка продавЕц продавщИца водИтель журналИст актёр актрИса музыкАнт пенсионЕр
ИмЯ=Имя Имя фамИлия Отчество
# ---- names ----
Анна Анны Анне Анну Анной иван=ивАн ивАна ивАну ивАном ивАнович ивАновна марИя марИи марИю мАша мАши мАше мАшу сАша сАши сАше сАшу
ОльгА=Ольга Ольга Ольги Ольге Ольгу дмИтрий дИма дИмы дИме дИму сергЕй сергЕя сергЕю андрЕй андрЕя андрЕю николАй алексЕй мИша мИши мИше мИшу
катЯ=кАтя кАтя кАти кАте кАтю наташа=натАша натАша натАши натАше натАшу ирИна ирИны ирИне ирИну елЕна лЕна лЕны лЕне лЕну
пЁтр петрОв петрОва иванОв иванОва смирнОв смирнОва пАвлов пАвлова борИс борИса тАня тАни тАне тАню вЕра вЕры вЕре вЕру
джОн эмили=Эмили Эмили майкл=мАйкл мАйкл сАра сАры сАре сАру джЕйк кЕйт
# ---- places ----
москвА москвЫ москвЕ москвУ россИя россИи россИю петербУрг=петербУрк петербУрге
амЕрика амЕрики амЕрике амЕрику сшА=сэшэА нью-йОрк=нью-йОрк нью-йОрке=нью-йОрке чикАго бОстон бОстоне сиЭтл сиЭтле
казАнь казАни сОчи новосибИрск екатеринбУрг=екатеринбУрк байкАл кремль=крЕмль кремлЬ=крЕмль крЕмле крАсная_плОщадь крАсной_плОщади
аэропОрт аэропОрта в_аэропортУ вокзАл вокзАле вокзАла гостИница гостИнице гостИницу отЕль=отЭль отЕле=отЭле метрО магазИн магазИне магазИна магазИны
аптЕка аптЕке аптЕку бАнк бАнке больнИца больнИце пОчта пОчте пОчту шкОла шкОле шкОлу университЕт университЕте рабОта рабОте рабОту рабОты
ресторАн ресторАне ресторАна кафЕ=кафЭ мУзей=музЕй музЕй музЕе музЕя теАтр теАтре теАтра кинО парк пАрке пАрка Улица Улице Улицу Улицы
плОщадь плОщади цЕнтр цЕнтре цЕнтра дОм дОма=дОма домА дОме домОй квартИра квартИре квартИру кОмната кОмнате кУхня кУхне туалЕт ванная=вАнная вАнная
гОрод гОроде гОрода городА странА странЕ странУ страны=странЫ стрАны мОре мОря морЯ мОрю рекА рекЕ пляж пляже=плЯже
останОвка останОвке останОвку останОвки
домодЕдово подъЕзд подъЕзде крАсного
# ---- food and drink ----
едА едЫ едУ водА водЫ вОду водЕ водОй вОды чАй чАю чАя кОфе=кОфе молокО молокА сОк сОка винО винА вИна бутЫлка_винА бокАл_винА бокАл пИво пИва вОдка вОдки
хлЕб хлЕба сЫр сЫра мАсло мЯсо мЯса рЫба рЫбы рЫбу кУрица кУрицу рИс рИса картОшка картОшку картОфель сУп сУпа салАт салАта
борщ=бОрщ борщА пельмЕни пельмЕней блИны=блинЫ блинЫ блинОв икрА икрЫ кАша кАшу пирОг пирожОк пирожкИ сметАна сметАной
яблоко=Яблоко Яблоко Яблоки банАн апельсИн фрУкты овощи=Овощи Овощи помидОр огурЕц торт тОрта морОженое шоколАд сАхар сАхара сОль
зАвтрак обЕд Ужин зАвтракать обЕдать Ужинать меню=менЮ менЮ счЁт счетА чаевЫе стакАн чАшка чАшку бутЫлка бутЫлку тарЕлка лОжка вИлка нОж
вкУсный вкУсная вкУсное вкУсные гОлоден голоднА сЫт сытА пИть пьЮ пьЁшь пьЁт пьЁм пьЁте пьЮт пИл пилА пИли есть=Есть Ем Ешь Ест едИм едИте едЯт Ел Ела Ели
# ---- shopping and money ----
рУбль рублЯ рублЕй рублИ копЕйка копЕйки копЕек дЕньги денег=дЕнег деньгАми доллар=дОллар дОллар дОллара дОлларов карта=кАрта кАрта кАртой кАрту налИчные налИчными
скОлько_стОит стОит стОят дОрого=дОрого дешЕвле дорОже дорогОй дорогАя дорогОе дорогИе ценА ценЫ цЕны сУмка сУмку сУмки пакЕт размЕр
подАрок подАрки купИть куплЮ кУпишь=кУпишь кУпит покупАть покупАю покупАешь покупАет продавАть
# ---- numbers ----
нОль ноль=нОль одИн однА однО двА двЕ трИ четЫре пЯть шЕсть сЕмь вОсемь дЕвять дЕсять одИннадцать двенАдцать тринАдцать четЫрнадцать пятнАдцать
шестнАдцать семнАдцать восемнАдцать девятнАдцать двАдцать трИдцать сОрок пятьдесЯт шестьдесЯт сЕмьдесят вОсемьдесят девянОсто стО двЕсти трИста
четЫреста пятьсОт шестьсОт семьсОт восемьсОт девятьсОт тЫсяча тЫсячи тЫсяч пЕрвый вторОй трЕтий четвЁртый пЯтый
одногО однОй одномУ двух трЁх четырЁх пятИ полторА половИна
# ---- time and days ----
врЕмя врЕмени чАс часА часОв часЫ минУта минУты минУт секУнда дЕнь днЯ днЕй недЕля недЕли недЕлю мЕсяц мЕсяца гОд гОда лЕт
сегОдня=севОдня зАвтра вчерА послезАвтра позавчерА Утром днЁм вЕчером нОчью сейчАс рАньше всегдА чАсто иногдА рЕдко никогдА кАждый кАждый_дЕнь
понедЕльник втОрник средА срЕду четвЕрг пЯтница пЯтницу суббОта суббОту воскресЕнье в_понедЕльник во_втОрник в_срЕду в_четвЕрг в_пЯтницу в_суббОту в_воскресЕнье
янвАрь феврАль мАрт апрЕль мАй иЮнь иЮль Август сентЯбрь октЯбрь ноЯбрь декАбрь января=январЯ январЯ мАрта мАя
зимА зимОй веснА веснОй лЕто лЕтом Осень Осенью
# ---- verbs: infinitives and common forms ----
быть бЫл былА бЫло бЫли бУду бУдешь бУдет бУдем бУдете бУдут
знАть знАю знАешь знАет знАем знАете знАют знАл знАла знАли
делать=дЕлать дЕлать дЕлаю дЕлаешь дЕлает дЕлаем дЕлаете дЕлают дЕлал дЕлала дЕлали сдЕлать сдЕлал сдЕлала сдЕлаю
читАть читАю читАешь читАет читАем читАете читАют читАл читАла прочитАть прочитАл прочитАла
понимАть понимАю понимАешь понимАет понимАем понимАете понимАют понЯть пОнял понялА пОняли понЯтно
работать=рабОтать рабОтать рабОтаю рабОтаешь рабОтает рабОтаем рабОтаете рабОтают рабОтал рабОтала рабОтали
жИть живУ живЁшь живЁт живЁм живЁте живУт жИл жилА жИли
говорИть говорЮ говорИшь говорИт говорИм говорИте говорЯт говорИл говорИла сказАть скажУ скАжешь скАжет скажИте сказАл сказАла
любИть люблЮ лЮбишь лЮбит лЮбим лЮбите лЮбят любИл
хотЕть хочУ хОчешь хОчет хотИм хотИте хотЯт хотЕл хотЕла хотЕли
мОчь могУ мОжешь мОжет мОжем мОжете мОгут мОг моглА моглИ
идтИ идУ идЁшь идЁт идЁм идЁте идУт шЁл шлА шлИ пойтИ пойдУ пойдЁшь пойдЁт пойдЁм пойдЁте пойдУт пошЁл пошлА пошлИ
Ехать Еду Едешь Едет Едем Едете Едут Ехал Ехала поЕхать поЕду поЕдешь поЕдет поЕхал поЕхала
ходИть хожУ хОдишь хОдит хОдим хОдите хОдят ходИл ходИла ходИли ЕздИть=Ездить Ездить Езжу Ездишь Ездит Ездил Ездила
смотрЕть смотрЮ смОтришь смОтрит смОтрим смОтрите смОтрят смотрЕл смотрЕла посмотрЕть посмотрИ посмотрИте
слУшать слУшаю слУшаешь слУшает слУшал послУшать
писАть пишУ пИшешь пИшет пИшем пИшете пИшут писАл писАла написАть написАл написАла
учИться учУсь Учишься Учится Учимся Учитесь Учатся учИлся учИлась изучАть изучАю изучАешь изучАет
звонИть звонЮ звонИшь звонИт позвонИть позвонЮ позвонИ позвонИте звонИл
спрАшивать спросИть спрошУ отвечАть отвЕтить
покупАть открывАть открЫть закрывАть закрЫть закрЫт закрЫто открЫт открЫто
нрАвиться нрАвится нрАвятся понрАвился понрАвилась понрАвилось
стОить вставАть встаЮ встаЁшь встаЁт встАл встАла
спАть сплЮ спИшь спИт спАл спалА гулЯть гулЯю гулЯешь гулЯет гулЯл гулЯла
готОвить готОвлю готОвишь готОвит отдыхАть отдыхАю отдыхАешь отдыхАет отдыхАл
игрАть игрАю игрАешь игрАет игрАл игрАла ждАть ждУ ждЁшь ждЁт подождИте подождИ
дАть дАй дАйте давАй давАйте брАть берУ берЁшь берЁт взЯть возьмУ возьмИте возьмИ
помогАть помОчь помогИте помогИ помогУ мОчь
думать=дУмать дУмать дУмаю дУмаешь дУмает дУмал
стоЯть стоИт лежАть лежИт сидЕть сижУ сидИт находИться находИтся
зовУт звАть
приходИть прийтИ придУ пришЁл пришлА приезжАть приЕхать приЕду приЕхал приЕхала
показАть покажИте покажИ повторИть повторИте повторИ
# ---- adjectives ----
нОвый нОвая нОвое нОвые нОвого нОвой нОвом нОвую нОвым нОвых стАрый стАрая стАрое стАрые
большОй большАя большОе большИе большОго мАленький мАленькая мАленькое мАленькие
хорОший хорОшая хорОшее хорОшие плохОй плохАя плохОе плохИе красИвый красИвая красИвое красИвые
интерЕсный интерЕсная интерЕсное интерЕсные рУсский рУсская рУсское рУсские америкАнский америкАнская америкАнец америкАнка америкАнцы
англИйский англИйская по-рУсски по-англИйски
молодОй молодАя молодЫе стАрший млАдший
горЯчий горЯчая холОдный холОдная холОдное тЁплый жАркий жАрко хОлодно тепло=теплО теплО
бЕлый чЁрный крАсный крАсная крАсное синий=сИний сИний сИняя зелЁный жЁлтый
любИмый любИмая любИмое любИмые свобОден свободнА зАнят занятА устАл устАла
# ---- objects ----
кнИга кнИгу кнИги кнИге кнИгой кнИг журнАл журнАла газЕта газЕту телефОн телефОна телефОну машИна машИну машИне билЕт билЕта билЕты пАспорт
клЮч ключ=клЮч ключИ ключА окнО окнА Окна=Окна стОл столА стУл двЕрь компьютер=компьЮтэр ноутбУк фотоаппарАт фОто фотогрАфия
вещЬ=вЕщь вЕщь вЕщи сумка=сУмка чемодАн часЫ очкИ зОнтик
# ---- transport ----
автОбус автОбусе автОбуса трамвАй такси=таксИ таксИ пОезд пОезде самолЁт самолЁте велосипЕд пешкОм станция=стАнция стАнция стАнции стАнцию
прЯмо направо=напрАво напрАво налЕво спрАва слЕва вперЕд=вперЁд вперЁд назАд
# ---- health and feelings ----
бОльно болИт болЯт головА гОлову гОрло зУб живОт рукА рУку ногА нОгу врАч=врАч лекАрство таблЕтка температУра плОхо_себЯ
грУстно вЕсело стрАшно скУчно=скУшно рАд рАда счАстлив=щАслив счастлИва=щаслИва устал=устАл
# ---- homograph phrases ----
я_дОма ты_дОма он_дОма онА_дОма онО_дОма мы_дОма вы_дОма онИ_дОма бЫл_дОма былА_дОма бЫли_дОма бЫло_дОма бУду_дОма бУдет_дОма сидЕть_дОма
дОма_и дОма_нЕт нЕ_дОма=не_дОма нОвые_домА Эти_домА стАрые_домА большИе_домА
бутЫлка_водЫ бутЫлку_водЫ стакАн_водЫ без_водЫ нЕт_водЫ немнОго_водЫ
я_Еду Еду_в Еду_на Еду_домОй Еду_туда=Еду_тудА
# ---- more nouns with their case forms ----
молокОм молокУ молокЕ врачОм врачЕ врачИ врачЕй мУзыка мУзыки мУзыке мУзыку мУзыкой письмО письмА письмУ письмОм письмЕ пИсьма писЕм
язЫк языкА языкУ языкОм языкЕ языкИ никогО никомУ никЕм ничемУ ничЕм симпатИчный симпатИчная симпатИчное симпатИчные
мАмы мАме мАму мАмой пАпы пАпе пАпу пАпой брАтом брАте брАтьев сестрЫ сЫну сЫном сЫне дОчку дОчкой
женОй женЕ женУ мУжа мУжу мУжем жЕнщины жЕнщину мужчИны мужчИну мужчИной дЕвушки дЕвушку
человЕка человЕку человЕком люДей=людЕй людЕй лЮдям друзьЯм друзьЯми учИтеля учИтелю учИтелем учителЯ студЕнта студЕнту студЕнтом студЕнты студЕнтов студЕнтка студЕнтки студЕнтку студЕнткой
кнИгами кнИгах кнИжка журнАлы газЕты газЕта газЕте телефОне телефОном телефОны
дОмом дОму столУ столОм стОлом=столОм столЕ столы=столЫ столЫ стулья=стУлья стУлья окнОм окнЕ Окон двЕри двЕрью
кОмнату кОмнаты квартИры квартИрой кУхню кУхни шкОлы шкОлой шкОл университЕта университЕтом университЕты рабОтой
гОроду гОродом москвОй россИей петербУрга=петербУрга аэропортУ магазИну магазИном магазИнах магазинов=магазИнов
пОчты аптЕки аптЕкой бАнка бАнку бАнком банкомАт больнИцы больнИцу вокзАлу ресторАну ресторАном ресторАны музЕи теАтру театры=теАтры кинотеАтр кинотеАтре
пАрку пАрком цЕнтру Улицей Улиц плОщадью мЕсто мЕста мЕсте местА метрО=метрО автОбусом автОбусы трамвАе трамвАем пОездом поездА самолЁтом машИной машИны
бутЫлки бутЫлкой стакАна стакАном чАшки чАшкой чАя=чАя чАем кОфе сОком винОм пИвом хлЕбом сЫром мЯсом рЫбой кУрицей кУрицы рИсом сУпом салАтом сАхаром сАхару сОли сОлью
икрОй кАши кАшей пирогА пирогИ пирожкОв сЫрники блИнчики морОженого шоколАда фрУктов овощЕй Яблок Яблоком Яблока банАна банАны апельсИны помидОры огурцЫ тОрт тОртом
зАвтрака обЕда Ужина зАвтраку обЕду Ужину стОлик стОлика стОлик_на_двоИх=стОлик_на_двоИх двоИх троИх
рублЁм рублЯми копЕйку деньгАх кАрты картОчка картОчку картОчкой налИчка чЕк скИдка скИдку сУмки сУмкой пакЕта пакЕты размЕра подАрка подАрку подАрки
врЕмени днЁм_и_нОчью недЕлей мЕсяцев годОв лЕта лЕту зимЫ зИму зИмы веснЫ Осени понедЕльника втОрника средЫ срЕды четвергА пЯтницы суббОты воскресЕнья
вторник=втОрник понедельник=понедЕльник
часУ часАми мИнут=минУт минУтку секУнду секУнды
головЫ гОловы головОй гОрла рукИ=рукИ рУки ногИ=ногИ нОги зУбы животА спинА спИну сЕрдце=сЕрце лекАрства таблЕтки таблЕтку температУры дОктор дОктора дОктору
бОль голОдный голОдная пОмощь пОмощи скОрая полИция полИцию полИции
# ---- verbs: more forms ----
встрЕтиться встречАться отдохнУть отдохнУл опоздАть опаздывать=опАздывать опАздываю
вставАй вставАйте спИте спи=спИ сидИте сидИ стоИте стОйте стОй идИ идИте пошлИ=пошлИ пойдЁмте поЕхали
мЕдленнее бЫстрее громче=грОмче тИше
смОтрит рабОтает живЁт читАет пИшет дЕлает слУшает
открОйте открОй закрОйте закрОй скажИ подождИте ждИте позвонИте пишИте напишИте возьмИте дАйте покажИте помогИте повторИте извинИте простИте
приходИте приходИ входИте входИ садИтесь садИсь
бУду_читАть бУдешь_читАть прочитАю прочитАешь прочитАет напишУ напИшешь напИшет сдЕлаешь сдЕлает кУплю=куплЮ
пОмню пОмнишь пОмнит знакОм знакОма знакОмы
занимАться занимАюсь занимАешься занимАется занимАются занимАлся занимАлась
нрАвилось нрАвилась нрАвился
играю=игрАю играть=игрАть
хотЕл_бы хотЕла_бы
# ---- adjectives: more forms ----
нОвом нОвой нОвым нОвую нОвыми стАрого стАром стАрой стАрым стАрую большОм большОй большУю больших=большИх мАленького мАленькой мАленьком
хорОшего хорОшей хорОшим хорОшую плохОго красИвого красИвой красИвую интерЕсного интерЕсной интерЕсную рУсского рУсской рУсскую рУсским рУсских
любИмого любИмой любИмую вкУсного вкУсной вкУсную вкУсным горЯчего горЯчую холОдного холОдную холОдной
дорогОго дорогУю дешЁвая дешЁвое дешЁвые дешЁвый=дешЁвый дЕшево=дЁшево дЁшево
высОкий высОкая высОкое высОкие низкий=нИзкий нИзкий нИзкая
длИнный длИнная корОткий корОткая лЁгкий трУдный трУдная бЫстрый бЫстрая мЕдленный
свобОдный свобОдная зАнятый дрУжный счастлИвый весЁлый грУстный стрАшный тИхий шУмный
главный=глАвный глАвный глАвная послЕдний послЕдняя пЕрвая пЕрвое пЕрвые вторАя трЕтья
кАждая кАждое кАждые кАждого кАждой
умный=Умный Умный Умная добрый=дОбрый дОбрая дОбрые злОй смешнОй
голубОй голубАя сИняя сЕрый корИчневый орАнжевый рОзовый фиолЕтовый
# ---- small words and adverbs ----
вмЕсте один=одИн однА однИ сАм самА самО сАми дрУг_дрУга другОй другАя другОе другИе
сегОдня_вЕчером зАвтра_Утром вчерА_вЕчером
мАло бОльше мЕньше лУчше хУже совсЕм совсЕм_не почтИ Очень_хорошО прАвда конЕчно=конЕшно навЕрное мОжет_быть=мОжет_бЫть
кстАти вообщЕ=вообщЕ вообщЕ слИшком довОльно опЯть снОва ужЕ_не ещё_не пОка=покА
# ---- more A1 vocabulary (second pass) ----
тебЕ емУ ним нИм ней=нЕй нИх них=нИх нАс_нЕт
янвАрь январЕ февралЕ мАрте апрЕле мАе иЮне иЮле Августе сентябрЕ октябрЕ ноябрЕ декабрЕ февралЯ апрЕля иЮня иЮля Августа сентябрЯ октябрЯ ноябрЯ декабрЯ
рУчка рУчку рУчки карандАш тетрАдь тетрАди словАрь словарЯ урОк урОка урОке урОки задАние вопрОс вопрОса вопрОсы отвЕт отвЕта ошИбка ошИбки экзАмен экзАмена
одЕжда рубАшка рубАшку плАтье брЮки джИнсы кУртка кУртку пальтО шАпка шАпку ботИнки кроссОвки сапогИ футбОлка футбОлку костЮм
погОда пОгоды=погОды погОды сОлнце=сОнце дОждь снЕг вЕтер тепло=теплО идЁт_дОждь идЁт_снЕг
мУзыка спОрт футбОл хоккЕй теннис=тЭннис баскетбОл шАхматы фИльм фИльмы фИльма кинО пЕсня пЕсни кнИжку хОбби путешЕствие путешЕствовать путешЕствую
собАка собАку кОшка кОшку кОт котА живОтное
фрУкт моркОвь лУк чеснОк грибЫ орЕхи сАхар мЁд йОгурт кефИр квАс компОт сОк_апельсИновый апельсИновый Яблочный
врЕмя_от_врЕмени начАло конЕц середИна
купИл купИла кУпим кУпите кУпят продаЁт продаЮт
не_за_что=нЕ_~за_~што
понимАете понимАем говорИте_по-англИйски
бОлен больнА болЕть болЕю болИт=болИт
отдЫх канИкулы Отпуск Отпуске отпуск=Отпуск выходнЫе выходнЫх
Утренний вечЕрний
рАзный рАзные вАжный вАжно мОжно_мне=мОжно_мне
спортзАл бассЕйн
открЫта закрЫта открЫты закрЫты пройтИ пройдИте пройдУ бутЫлки_водЫ двЕ_бутЫлки_водЫ Это_стОит онО_стОит онА_стОит бИлет_стОит слОва словА Этого_слОва нОвые_словА слОво слОвом
# ---- third pass: common A1 words and forms ----
мужскОй жЕнский чУвство прАздник=прАзник прАздника=прАзника счАстье=щАстье днЯ_рождЕния рождЕния дЕнь_рождЕния
слОвари=словарИ словарИ странИца странИцу упражнЕние текст=тЕкст тЕкст граммАтика
готОвит готОвят готОвил готОвила убирАть убирАю мЫть мОю мОешь мОет мЫл
ложИться ложУсь ложИшься ложИтся лЁг леглА вставАл вставАла
начинАть начинАю начинАется начАть нАчал началА кончАться кончАется закОнчить закОнчил
открывАется закрывАется рабОтает_с=рабОтает_с
приглашАть пригласИть приглашАю
знакОмый знакОмая знакОмые
сосЕдний вОзле напрОтив мЕжду пЕред=пЕред пОсле=пОсле Около=Около чЕрез=чЕрез вмЕсто крОме
бЕз_сАхара мОжно_без=мОжно_~без
сколько_лЕт=скОлько_лЕт
один=одИн однОго=одногО однУ
пОл половИну четвЕрть
гостЕй гОсти гОсть гостЯх в_гостЯх
лЕс лесУ в_лесУ гОры горЫ горАх в_горАх Озеро Озере
зАпад востОк сЕвер Юг
грУппа грУппе клАсс клАссе
пИцца пИццу бУргер картОшка_фрИ гАмбургер
бУлочка бУлочку бУлка колбасА колбасУ сосИски Яйцо=яйцО яйцО Яйца ЯИц=яИц яИц
холодИльник плитА стирАльная кровАть дивАн шкАф стенА стенЕ стЕну стенЫ стЕны пОл=пОл потолОк
бОлее мЕнее сАмый сАмая сАмое сАмые
учИть учУ Учишь Учит выучить=вЫучить вЫучить
повторЯть повторЯю переводИть перевестИ переводИ переведИте
вИдеть вИжу вИдишь вИдит вИдим вИдите вИдят вИдел вИдела увИдеть
слЫшать слЫшу слЫшишь слЫшит слЫшал
помнить=пОмнить пОмнить забЫть забЫл забЫла забывАть
сидИм сидЯт лежАт стоЯт
пОнял=пОнял понялА пОняли
искАть ищУ Ищешь Ищет Ищем Ищете Ищут
платИть плачУ плАтишь плАтит заплатИть
носИть ношУ нОсишь нОсит
вЕрить вЕрю
женАт замУжем=зАмужем зАмужем
# ---- fourth pass ----
лимОн лимОна здАние здАния здАнии килогрАмм килогрАмма килогрАммов грАмм грАммов лИтр лИтра поЕдем поЕдет поЕдут поЕдешь опАздывает опАздывают телевИзор телевИзора встрЕтимся встрЕтиться встрЕтил встрЕтила
поЕздка поЕздку поЕздки встрЕча встрЕчу встрЕчи встрЕчей ключи_дОма=ключИ_дОма забЫл_ключИ_дОма=забЫл_ключИ_дОма стОят_дОрого=стОят_дОрого скОлько_стОят=скОлько_стОят Эти_Яблоки скОлько_стОят_Эти=скОлько_стОят_Эти
цвЕт цвЕта цветА рАдио интерЕс сообщЕние смс=эсэмЭс фотогрАфии прИнтер ручкой=рУчкой рУчкой
`;
/* ---------- the list ---------- */
const VOW = 'аэыоуяеёюи', VOWU = 'АЭЫОУЯЕЁЮИ';
const LEX = new Map(), PHR = new Map(), CLITIC = new Set();
let maxPhrase = 1; const LEXERR = [];
function addEntry(raw) {
  let e = raw.trim(); if (!e) return;
  if (e[0] === '~') { CLITIC.add(e.slice(1).toLowerCase()); return; }
  let spell, said; const k = e.indexOf('=');
  if (k > 0) { spell = e.slice(0, k).toLowerCase(); said = e.slice(k + 1); } else { spell = e.toLowerCase(); said = e; }
  if (!/^[а-яёА-ЯЁ_\-~]+$/.test(spell + said)) return; /* typos with Latin letters are ignored, never half-read */
  const stresses = [...said].filter(c => VOWU.includes(c)).length;
  if (spell.includes('_')) { PHR.set(spell, said); maxPhrase = Math.max(maxPhrase, spell.split('_').length); return; }
  const v = [...spell].filter(c => VOW.includes(c)).length;
  if (v === 1 && stresses === 0 && !said.includes('ё')) said = said.replace(/[аэыоуяеюи]/, c => c.toUpperCase());
  if (v >= 2 && stresses !== 1 && !(stresses === 0 && said.includes('ё')) && !said.includes('-')) { LEXERR.push(e); return; }
  const old = LEX.get(spell);
  if (!old) LEX.set(spell, [said]); else if (!old.includes(said)) old.push(said);
}
function addLex(text) { text.replace(/^#.*$/gm, '').split(/[\s;]+/).forEach(addEntry); }
addLex(LEX_TEXT); if (LEXERR.length) throw new Error('word list: these entries need exactly one capital (stressed) vowel: ' + LEXERR.join(' '));
/* extra word lists, read if present: lexicon.txt (the lead's) and lexicon-<writer>.txt (one per writer, if the lead allows it: profile §6.1).
   An entry there REPLACES the built-in entry of the same spelling (so the lead can correct a stress); the same spelling with two
   stresses inside the extra files is a homograph. */
{ const BUILTIN = new Map(LEX), fromFiles = new Set(), PHR0 = new Map(PHR);
  fs.readdirSync(__dirname).filter(f => /^lexicon.*\.txt$/.test(f)).sort().forEach(f => {
    fs.readFileSync(path.join(__dirname, f), 'utf8').replace(/^#.*$/gm, '').split(/[\s;]+/).filter(Boolean).forEach(e => {
      const sp = e.replace(/^~/, '').split('=')[0].toLowerCase();
      if (!fromFiles.has(sp)) { fromFiles.add(sp); if (BUILTIN.has(sp)) LEX.delete(sp); if (PHR0.has(sp)) PHR.delete(sp); CLITIC.delete(sp); }
      addEntry(e); }); }); }
if (LEXERR.length) throw new Error('word list: these entries need exactly one capital (stressed) vowel: ' + LEXERR.join(' '));
/* the same spelling with = and without (кафе=кафЭ beside кафЕ) is not a homograph: the = form wins */
for (const [k, v] of LEX) if (v.length > 1) { const eq = v.filter(x => x.toLowerCase() !== k); if (eq.length === 1) LEX.set(k, eq); }
/* ---------- sounds ---------- */
const CONS = { б: 'b', в: 'v', г: 'g', д: 'd', ж: 'zh', з: 'z', к: 'k', л: 'l', м: 'm', н: 'n', п: 'p', р: 'r', с: 's', т: 't', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: "sh'", й: 'y' };
const VOICED = { p: 'b', f: 'v', k: 'g', t: 'd', sh: 'zh', s: 'z' }, UNVOICED = { b: 'p', v: 'f', g: 'k', d: 't', zh: 'sh', z: 's' };
const OBSTR = new Set(['b', 'p', 'v', 'f', 'g', 'k', 'd', 't', 'zh', 'sh', 'z', 's', 'kh', 'ts', 'ch', "sh'"]);
const isVoicedObs = b => b in UNVOICED, isVoicelessObs = b => OBSTR.has(b) && !(b in UNVOICED);
const HARD = new Set(['zh', 'sh', 'ts']), SOFT = new Set(['ch', "sh'"]);
const LETTER = { а: 'ah', е: 'yeh', ё: 'yoh', и: 'ee', о: 'oh', у: 'oo', ы: 'ih', э: 'eh', ю: 'yoo', я: 'yah' };
/* spelling-level rules on the stressed form (capital = stress) */
const NOT_OGO = new Set(['много', 'немного', 'дорого', 'недорого', 'строго', 'убого', 'полого', 'отлого', 'ого']);
function respellRules(w, clitic) {
  let s = w;
  if (!clitic) {
    s = s.replace(/ть?ся$/, 'ца');                                                     /* учится, учиться: -tsah */
    /* -ого / -его endings (adjectives, pronouns): г said v; not in adverbs and words where -ого is part of the stem */
    if (/[еЕоО]г[оО]$/.test(s) && !NOT_OGO.has(s.toLowerCase())) s = s.replace(/г([оО])$/, 'в$1');
  }
  s = s.replace(/[сзж]ч/g, 'щ').replace(/[тд]с(?![яЯ]$)/g, 'ц').replace(/[тд]ц/g, 'ц');
  s = s.replace(/с(т)н/g, 'сн').replace(/здн/g, 'зн').replace(/стл/g, 'сл').replace(/вств/g, 'ств').replace(/лнц/g, 'нц').replace(/рдц/g, 'рц');
  return s;
}
/* segment one word (Cyrillic, one capital vowel = stress or none) into consonant and vowel segments */
function segments(w) {
  const segs = []; const a = [...w];
  let stressAt = a.findIndex(c => VOWU.includes(c)); if (stressAt < 0) stressAt = a.findIndex(c => c === 'ё' || c === 'Ё');
  for (let i = 0; i < a.length; i++) {
    const ch = a[i].toLowerCase(), nx = (a[i + 1] || '').toLowerCase();
    if (ch === '-') continue;
    if (ch === 'ь' || ch === 'ъ') { if (nx && 'яеёюи'.includes(nx)) segs.push({ t: 'G' }); continue; }
    if (ch === 'й') { segs.push({ t: 'C', b: 'y', soft: false }); continue; }
    if (CONS[ch]) {
      const b = CONS[ch]; let soft = SOFT.has(b);
      if (!HARD.has(b) && nx && (nx === 'ь' || 'яеёюи'.includes(nx))) soft = true;
      segs.push({ t: 'C', b, soft }); continue;
    }
    if (VOW.includes(ch)) {
      const prev = segs[segs.length - 1];
      const glide = 'яеёю'.includes(ch) && (!prev || prev.t === 'V' || prev.t === 'G');
      if (ch === 'и' && prev && prev.t === 'G') { /* separating ь before и: статьи */ }
      segs.push({ t: 'V', l: ch, st: i === stressAt, glide, pos: i < stressAt ? -1 : i > stressAt ? 1 : 0 });
      continue;
    }
    throw new Error('«' + w + '»: cannot read «' + a[i] + '»');
  }
  return segs;
}
function vowelOut(v, prev) {
  const l = v.l, st = v.st;
  const after = !prev ? 'start' : prev.t === 'V' ? 'vowel' : prev.t === 'G' ? 'glide' : HARD.has(prev.b) ? 'hard!' : SOFT.has(prev.b) ? 'soft!' : prev.soft ? 'soft' : prev.b === 'y' ? 'y' : 'hard';
  if (after === 'hard!') return { а: 'ah', о: st ? 'oh' : 'ah', у: 'oo', ы: 'ih', и: 'ih', э: st ? 'eh' : 'ih', е: st ? 'eh' : 'ih', ё: 'oh', ю: 'oo', я: 'ah' }[l];
  if (after === 'soft!') return { а: st ? 'ah' : v.pos > 0 ? 'ah' : 'ih', я: st ? 'ah' : v.pos > 0 ? 'ah' : 'ih', о: st ? 'oh' : 'ih', ё: 'oh', у: 'oo', ю: 'oo', и: 'ee', е: st ? 'eh' : 'ih', э: 'eh', ы: 'ih' }[l];
  if (after === 'soft') return { я: st ? 'yah' : v.pos > 0 ? 'yah' : 'ih', е: st ? 'yeh' : 'ih', ё: 'yoh', ю: 'yoo', и: 'ee', а: st ? 'ah' : 'ah', о: st ? 'oh' : 'ah', у: 'oo', э: 'eh', ы: 'ih' }[l];
  if (after === 'start' || after === 'vowel' || after === 'glide' || after === 'y') {
    const g = after === 'y' ? '' : 'y';
    return { я: st || v.pos > 0 ? g + 'ah' : g + 'ih', е: st ? g + 'eh' : g + 'ih', ё: g + 'oh', ю: g + 'oo', и: after === 'glide' ? 'yee' : 'ee', а: 'ah', о: st ? 'oh' : 'ah', у: 'oo', э: 'eh', ы: 'ih' }[l];
  }
  return { а: 'ah', о: st ? 'oh' : 'ah', у: 'oo', ы: 'ih', э: 'eh', и: 'ih', е: st ? 'eh' : 'ih', ё: 'oh', ю: 'oo', я: 'ah' }[l]; /* hard consonant (э-words, prefixes) */
}
/* voicing: within the word, right to left; final devoicing for words that are not clitics */
function voice(segs, final, nextFirst) {
  const C = segs.filter(s => s.t === 'C');
  let last = segs[segs.length - 1];
  if (last && last.t === 'C' && OBSTR.has(last.b)) {
    if (final) { if (UNVOICED[last.b]) last.b = UNVOICED[last.b]; }
    else if (nextFirst && OBSTR.has(nextFirst)) { if (isVoicedObs(nextFirst) && nextFirst !== 'v' && VOICED[last.b]) last.b = VOICED[last.b]; else if (isVoicelessObs(nextFirst) && UNVOICED[last.b]) last.b = UNVOICED[last.b]; }
  }
  for (let i = segs.length - 2; i >= 0; i--) {
    const s = segs[i], n = segs[i + 1];
    if (s.t !== 'C' || n.t !== 'C' || !OBSTR.has(s.b) || !OBSTR.has(n.b)) continue;
    if (isVoicedObs(n.b) && n.b !== 'v') { if (VOICED[s.b]) s.b = VOICED[s.b]; }
    else if (isVoicelessObs(n.b)) { if (UNVOICED[s.b]) s.b = UNVOICED[s.b]; }
  }
  return segs;
}
/* render segments as syllables */
function render(segs, stressedWord) {
  /* collapse a doubled consonant at the end of the word or before another consonant (класс, русский) */
  for (let i = 0; i < segs.length - 1; i++) { const s = segs[i], n = segs[i + 1]; if (s.t === 'C' && n.t === 'C' && s.b === n.b) { const nn = segs[i + 2]; if (!nn || nn.t === 'C') { segs.splice(i, 1); i--; } } }
  const units = []; /* {k:'C'|'V', s, st} */
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (s.t === 'G') continue; /* the vowel after a separating ь / ъ carries the y */
    if (s.t === 'V') {
      const prev = segs[i - 1]; let o = vowelOut(s, prev);
      if (prev && prev.t === 'C' && prev.soft && !SOFT.has(prev.b) && /^y/.test(o) === false && s.l !== 'и' && /^(ah|eh|oh|oo)$/.test(o) && 'яеёю'.includes(s.l)) o = 'y' + o;
      if (o[0] === 'y' && (!prev || prev.t !== 'C' || prev.b === 'y')) { if (!(prev && prev.t === 'C' && prev.b === 'y')) { units.push({ k: 'C', s: 'y' }); o = o.slice(1); } }
      else if (o[0] === 'y' && prev && prev.t === 'C') { units[units.length - 1].s += 'y'; o = o.slice(1); units[units.length - 1].soft = 'y'; }
      units.push({ k: 'V', s: o, st: s.st }); continue;
    }
    /* consonant */
    const n = segs[i + 1]; let r = s.b;
    if (s.soft && !SOFT.has(s.b) && s.b !== 'y') { const vowelNext = n && n.t === 'V'; if (!vowelNext) r += "'"; }
    units.push({ k: 'C', s: r });
  }
  /* й after a vowel and before a consonant or the end: a diphthong */
  for (let i = 1; i < units.length; i++) {
    const u = units[i], p = units[i - 1], n = units[i + 1];
    if (u.k === 'C' && u.s === 'y' && p.k === 'V' && (!n || n.k === 'C')) {
      const d = { ah: 'ai', oh: 'oy', eh: 'ey' }[p.s]; p.s = (p.st && d) ? d : p.s + 'y'; units.splice(i, 1); i--;
    }
  }
  /* syllables */
  const vIdx = units.map((u, i) => u.k === 'V' ? i : -1).filter(i => i >= 0);
  if (!vIdx.length) return units.map(u => u.s).join('');
  const sylls = []; let start = 0;
  for (let j = 0; j < vIdx.length; j++) {
    const v = vIdx[j], nv = vIdx[j + 1];
    let end;
    if (nv === undefined) end = units.length;
    else {
      /* consonants between two vowels: one goes to the next syllable; obstruent + l / r stay together (lyoo-BLYOO, sihs-TRAH);
         a sonorant followed by two more keeps the next one (stoo-DYEHNT-kah); otherwise the first consonant closes the syllable (mahs-KVAH) */
      const k = nv - v - 1; const cs = units.slice(v + 1, nv).map(u => u.s); const bare = x => x.replace(/['y]+$/, '');
      const lastTwoOL = k >= 2 && OBSTR.has(bare(cs[k - 2])) && !/'$/.test(cs[k - 2]) && /^[lr]['y]?$/.test(cs[k - 1]);
      const son = x => /^[lmnry]/.test(x) && !/^(sh|zh|ch|ts|kh)/.test(x);
      const sStop = k >= 3 && /^(s|z|sh|zh)$/.test(bare(cs[k - 2])) && /^[tkpdgb]/.test(cs[k - 1]);
      let cut; if (k <= 1) cut = 0; else if (lastTwoOL || sStop) cut = k - 2; else if (k >= 3 && son(cs[0])) cut = 2; else cut = 1;
      end = v + 1 + cut; }
    sylls.push({ s: units.slice(start, end).map(u => u.s).join(''), st: units[v].st });
    start = end;
  }
  if (sylls.length === 1) return sylls[0].s;
  if (!sylls.some(x => x.st)) throw new Error('no stress');
  return sylls.map(x => x.st ? x.s.toUpperCase() : x.s).join('-');
}
/* ---------- words and phrases ---------- */
function lookup(word) {
  const w = word.toLowerCase();
  if (CLITIC.has(w)) return { said: w, clitic: true };
  const hit = LEX.get(w);
  if (hit && hit.length === 1 && !/[АЭЫОУЯЕЁЮИ]/.test(hit[0]) && [...w].filter(c => VOW.includes(c)).length === 1) return { said: hit[0].replace(/[аэыоуяеёюи]/, c => c.toUpperCase()), clitic: false };
  if (hit) { if (hit.length > 1) throw new Error('«' + word + '» is a stress homograph (' + hit.join(' / ') + '): use a listed phrase or add one to the list'); return { said: hit[0], clitic: false }; }
  const v = [...w].filter(c => VOW.includes(c)).length;
  if (v === 0) { if (/^[вкс]$/.test(w)) return { said: w, clitic: true }; throw new Error('«' + word + '» has no vowel'); }
  if (v === 1) return { said: w.replace(/[аэыоуяеёюи]/, c => c.toUpperCase()), clitic: false };
  const yo = [...w].filter(c => c === 'ё').length;
  if (yo === 1) return { said: w, clitic: false };
  throw new Error('«' + word + '» is not in the word list (stress unknown): add it to tools/target/ru/respell.js or lexicon.txt');
}
function tokens(text) {
  if (/[0-9]/.test(text)) throw new Error('«' + text + '»: write numbers in words');
  if (/[a-zA-Z]/.test(text)) throw new Error('«' + text + '»: Latin letters in a Russian string');
  const t = text.normalize('NFC').replace(/́/g, '').replace(/[.,!?;:«»"“”„()…—–]/g, ' ').replace(/(^|\s)-+(?=\s|$)/g, ' ').trim();
  return t.split(/\s+/).filter(Boolean);
}
function respell(text) {
  const raw = String(text).trim();
  const lt = raw.match(/^([А-ЯЁ]) ([а-яё])$/);
  if (lt && lt[1].toLowerCase() === lt[2]) { const c = lt[2]; if (CONS[c]) return CONS[c]; if (LETTER[c]) return LETTER[c]; throw new Error('«' + raw + '»: ь and ъ have no sound of their own; teach them with a word'); }
  const toks = tokens(raw); if (!toks.length) throw new Error('empty');
  const words = []; /* {said, clitic} */
  for (let i = 0; i < toks.length;) {
    let done = false;
    for (let n = Math.min(maxPhrase, toks.length - i); n >= 2; n--) {
      const key = toks.slice(i, i + n).map(x => x.toLowerCase()).join('_');
      if (PHR.has(key)) { PHR.get(key).split('_').forEach((s, j) => {
          if (s[0] === '~') { words.push({ said: s.slice(1), clitic: true }); return; }                       /* ~ inside a phrase: said without stress */
          if (s === s.toLowerCase() && CLITIC.has(s.replace(/-/g, ''))) { words.push({ said: s, clitic: true }); return; }
          const nv = [...s].filter(c => VOW.includes(c.toLowerCase())).length;
          words.push({ said: nv === 1 && s === s.toLowerCase() && !s.includes('ё') ? s.replace(/[аэыоуяеюи]/, c => c.toUpperCase()) : s, clitic: false });
        }); i += n; done = true; break; }
    }
    if (!done) { const t = toks[i]; if (t.includes('-') && !LEX.has(t.toLowerCase())) t.split('-').filter(Boolean).forEach(p => words.push(lookup(p))); else words.push(lookup(t)); i++; }
  }
  const segged = words.map(w => ({ ...w, segs: segments(respellRules(w.said, w.clitic)) }));
  const out = [];
  for (let i = 0; i < segged.length; i++) {
    const w = segged[i], nx = segged[i + 1];
    let nextFirst = null;
    if (w.clitic && nx) { const f = nx.segs[0]; nextFirst = f && f.t === 'C' ? f.b : null; }
    voice(w.segs, !w.clitic || !nx, nextFirst);
    if (w.clitic) w.segs.forEach(s => { if (s.t === 'V') { s.st = false; s.pos = -1; } });
  }
  /* a vowel-less clitic (в к с) after voicing */
  for (const w of segged) {
    const hasV = w.segs.some(s => s.t === 'V');
    if (!hasV) { out.push(w.segs.map(s => s.b).join('')); continue; }
    out.push(render(w.segs, !w.clitic));
  }
  return out.join(' ');
}
/* ---------- pronPattern ---------- */
function pattern() {
  const C1 = ["sh'", 'zh', 'kh', 'ts', 'ch', 'sh', 'b', 'v', 'g', 'd', 'z', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'f', 'y'];
  const SOFTABLE = ['b', 'v', 'g', 'd', 'z', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'f'];
  const cons = up => '(?:' + [...SOFTABLE.map(c => c + "'"), ...C1].map(c => up ? c.toUpperCase() : c).map(c => c.replace("'", "'")).join('|') + ')';
  const nuc = up => '(?:' + ['ai', 'oy', 'ey', 'ah', 'eh', 'ee', 'oh', 'oo', 'ih'].map(c => up ? c.toUpperCase() : c).join('|') + ')';
  const syl = up => cons(up) + '*' + nuc(up) + cons(up) + '*';
  const L = syl(false), U = syl(true);
  const word = '(?:' + L + '|(?:' + L + '-)*' + U + '(?:-' + L + ')+|(?:' + L + '-)+' + U + '|' + cons(false) + '+)';
  return '^' + word + '(?: ' + word + ')*$';
}
/* ---------- accent(): the text with stress marks (U+0301), for a stress-marked card front (engine request) ---------- */
function accent(text) {
  return String(text).replace(/[А-Яа-яЁё\-]+/g, (tok, off, all) => {
    let said; try { const L = lookup(tok); if (L.clitic) return tok; said = L.said; } catch (e) { return tok; }
    const plainSaid = said.toLowerCase(); if (plainSaid !== tok.toLowerCase()) { /* exception entry: find the stressed vowel by position among vowels */ }
    const sv = [...said].filter(c => VOW.includes(c.toLowerCase())); const idx = sv.findIndex(c => VOWU.includes(c));
    const vc = [...tok].filter(c => VOW.includes(c.toLowerCase())).length; if (vc < 2 || idx < 0 || /ё/i.test(tok)) return tok;
    let n = -1; return [...tok].map(c => { if (VOW.includes(c.toLowerCase())) { n++; if (n === idx) return c + '́'; } return c; }).join('');
  });
}
module.exports = { respell, pattern, accent, lookup, LEX, PHR, CLITIC };
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args[0] === '--pattern') { console.log(pattern()); process.exit(0); }
  if (args[0] === '--check') { const s = fs.readFileSync(args[1], 'utf8'); const seen = new Set(); let bad = 0; (s.match(/[А-Яа-яЁё][А-Яа-яЁё \-,.!?]*[А-Яа-яЁё]/g) || []).forEach(m => { if (seen.has(m)) return; seen.add(m); try { respell(m); } catch (e) { bad++; console.log(e.message); } }); process.exit(bad ? 1 : 0); }
  let bad = 0; args.forEach(a => { try { console.log(a + ' -> ' + respell(a)); } catch (e) { bad++; process.stderr.write(e.message + '\n'); } }); process.exit(bad ? 1 : 0);
}
