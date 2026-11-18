/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   zh-en: pron = IPA (OALD North American values in the school symbol set) per docs/profiles/zh.md §6; must match profile.json pronPattern.
   Deck names are FINAL (tools/content/zh/DECKNAMES.md). The last two decks are zh-only (profile §9). */
module.exports = {
"问候": `
Hello. | /həˈloʊ/ | 你好 | 最基本的问候，什么场合、对什么人都能用。
Hi! | /ˈhaɪ/ | 嗨 / 你好（较随意） | 比 Hello 轻松亲切。在美国，同事之间也常说 Hi。
Hey! | /ˈheɪ/ | 嘿 / 你好（熟人之间） | 朋友之间用。对陌生人说可能显得不礼貌。
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | 早上好 | 中午以前都可以用，也可以简单说 Morning!
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | 下午好 | 大约中午 12 点到傍晚 6 点。语气稍正式，商店和公司里常听到。
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | 晚上好 | 晚上见面时的问候。Good night 只在道别时用。
How are you? | /ˈhaʊ ər ju/ | 你好吗？ | 这是打招呼，不是真的问近况。轻松回一句 Good, thanks. You? 就行。
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | 挺好的，谢谢。你呢？ | 课本里的 I'm fine, thank you. 听起来很书面，I'm good 自然得多。
What's up? | /ˈwʌts ˈʌp/ | 在干吗？/ 有什么新鲜事？ | 不是问“上面有什么”，而是熟人之间随口问“最近怎么样”。一般回答 Not much.
Not much. | /ˈnɑːt ˈmʌtʃ/ | 没什么特别的 | What's up? 最常见的回答，可以再反问一句 Not much, you?
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | 最近怎么样？/ 还顺利吗？ | How are you? 的口语版，可以回答 Pretty good!
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | 很高兴认识你 | 只在第一次见面时用。回答 Nice to meet you, too.
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | 好久不见！ | 这句来自中文“好久不见”，英语母语者也常说，是被接受的说法。稍正式一点：It's been a while.
See you later. | /ˈsiː ju ˈleɪtər/ | 回头见 | 即使没有再见面的计划，道别时也可以随口说。
Take care. | /ˈteɪk ˈker/ | 保重 | 温暖的道别语，也常放在消息结尾。
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | 祝你今天愉快！ | 店员结账后常说。回一句 You too! 就可以了。
Bye! | /ˈbaɪ/ | 再见！ | 成年人之间说 Bye-bye 会显得有点孩子气。
Good night. | /ˈgʊd ˈnaɪt/ | 晚安 | 只在晚上道别或去睡觉时用。见面打招呼要说 Good evening。
`,
"自我介绍": `
My name is Li Wei. | /maɪ ˈneɪm ɪz ˈliː ˈweɪ/ | 我叫李伟 | 日常更常说 I'm Li Wei. 中文名按“姓在前”说就行，正式场合别人会称你 Mr. Li。
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | 叫我 Jay 就好 | 有英文名或想让对方用简称时说。很多中国职场人士都有英文名。
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | 我该怎么称呼你？ | 对方名字不好念，或想知道对方的昵称时很有用。
Where are you from? | /ˈwer ər ju frʌm/ | 你是哪里人？/ 你从哪儿来？ | 在国外最先被问到的问题之一。
I'm from China. | /aɪm frəm ˈtʃaɪnə/ | 我来自中国 | 说出城市，话题更容易展开：I'm from Chengdu, in China.
I live in Beijing. | /aɪ ˈlɪv ɪn ˌbeɪˈdʒɪŋ/ | 我住在北京 | live 的 v 要用上齿轻碰下唇，别读成 w。
I'm a student. | /aɪm ə ˈstuːdnt/ | 我是学生 | 职业前一定要加冠词 a / an。I'm student. ✗ 是最常见的错误。
What do you do? | /ˈwʌt də ju ˈduː/ | 你是做什么工作的？ | 问职业的标准说法，比 What's your job? 委婉。
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | 我在银行工作 | 公司、地点前用 at：I work at Google.
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | 我做市场营销 | 领域、部门前用 in，和 at（公司）区分开。
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | 我 25 岁 | 英语国家说的是周岁。初次见面直接问年龄可能不太礼貌。
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | 我特别喜欢徒步 | 比 My hobby is… 自然得多的说爱好的方式。
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | 我喜欢看电影 | like 后面接动作，用 -ing 形式或 to + 动词原形。
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | 我学英语一年了 | 从过去一直持续到现在的事，用 have been + -ing（现在完成进行时）。中文“学了一年了”不变形，英语要靠动词形式。
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | 我来度假 | 英式英语说 I'm here on holiday.
I'm married. | /aɪm ˈmærid/ | 我结婚了 | 单身就说 I'm single. 初次见面最好别问对方是否结婚。
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | 我有一个弟弟 | 英语不分哥哥、弟弟，只用 older / younger brother 区分。
`,
"生存英语1": `
Excuse me. | /ɪkˈskjuːz mi/ | 打扰一下 / 劳驾 | 叫住别人或借过时用。撞到人以后说 Sorry!
Thank you. | /ˈθæŋk ju/ | 谢谢 | th 要把舌尖轻放在上下齿之间送气，别读成 sank you。
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | 太感谢了 | 比 Thank you 轻松亲切。
You're welcome. | /jʊr ˈwelkəm/ | 不客气 | 口语里也常说 Sure. / No problem. / Anytime.
No problem. | /ˈnoʊ ˈprɑːbləm/ | 没问题 / 小事一桩 | 回应别人道谢时非常常用。
I'm sorry. | /aɪm ˈsɑːri/ | 对不起 | 真正道歉时用。轻轻碰到别人，说一句 Sorry! 就够了。
Yes, please. | /ˈjes ˈpliːz/ | 好的，谢谢 | 回应 Would you like some water? 这类提议。
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | 不用了，谢谢 | 拒绝时比单说 No 礼貌得多。口语：I'm good, thanks.
Sorry? | /ˈsɑːri/ | 什么？/ 你说什么？ | 句尾语调上扬，意思是“请再说一遍”。在美国比 Pardon? 更常用。
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | 能再说一遍吗？ | 没听懂就大方地问，母语者之间也常这样说。
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | 能说慢一点吗？ | 加上 please 更礼貌。
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | 我不明白 | 有点生硬。委婉一点：Sorry, I didn't quite catch that.
Do you speak Chinese? | /də ju ˈspiːk ˌtʃaɪˈniːz/ | 你会说中文吗？ | Do you speak…? 比 Can you speak…? 更自然、更礼貌。
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | 我会说一点英语 | 美音里 little 中间的 t 读得像轻 d。
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | 这个用英语怎么说？ | 指着东西问，马上就能学到新词。
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | 这是什么意思？ | 指着菜单、标牌问。
Can you help me? | /kən ju ˈhelp mi/ | 能帮我一下吗？ | 更礼貌的说法：Could you help me?
`,
"生存英语2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | 洗手间在哪儿？ | 美国说 restroom / bathroom，英国说 toilet / loo。在美国 toilet 指马桶本身。
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | 这个多少钱？ | 问好几件东西：How much are these?
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | 这附近有 ATM 吗？ | 英国也叫 cash machine。
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | 能告诉我 Wi-Fi 密码吗？ | 也可以问 Is there Wi-Fi here?
I'm lost. | /aɪm ˈlɔːst/ | 我迷路了 | 也可以拿出地图问：Where am I on this map?
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | 可以刷卡吗？ | 在国外微信、支付宝很少能用，要准备好银行卡。美国几乎都能刷卡，小店可能有最低消费。
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | 请稍等 | 礼貌说法，商店里、电话里常听到。
Just a second. | /ˈdʒʌst ə ˈsekənd/ | 等一下 | 口语。更短：Just a sec.
No worries. | /ˈnoʊ ˈwɜːriz/ | 没事 / 别在意 | 澳大利亚、英国特别常用，美国也很常见。
That's okay. | /ˈðæts oʊˈkeɪ/ | 没关系（别人道歉时） | 别人道歉时说 That's okay! 或 Don't worry about it.
Of course. | /əv ˈkɔːrs/ | 当然 | 答应请求时用。回答问题时用可能像在说“这还用问？”，语气要柔和。
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | 我不太确定 | 比 I don't know 委婉。
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | 我有个问题 | 课上、会上也可以说 Can I ask a question?
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | 能帮我写下来吗？ | 地址、数字、名字听不清时最好的办法。
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | 可以拍照吗？ | 在博物馆、商店里先问一句是基本礼貌。
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | 能帮我们拍张照吗？ | 拍完说一句 Thank you so much!
After you. | /ˈæftər ˈjuː/ | 你先请 | 在门口、电梯前让别人先走时说。英语国家习惯为后面的人扶门。
Watch out! | /ˈwɑːtʃ ˈaʊt/ | 小心！ | 有危险时大声喊。Look out! 意思一样。
`,
"问路与交通": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | 地铁站怎么走？ | 英国说 underground / tube station。换个目的地就能直接套用。
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | 离这儿远吗？ | 美音 far 结尾的 r 要卷舌读出来。
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | 走路能到吗？ | 也可以问 Can I walk there?
Go straight. | /ˈgoʊ ˈstreɪt/ | 一直往前走 | Go straight for two blocks. 美国常用 block（街区）表示距离。
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | 在拐角处左转 | 在红绿灯处：at the light。
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | 在你右手边 | right 开头是 r 不是 l，嘴唇微微收圆。
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | 在马路对面 | across from… = 在……的对面。
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | 在银行旁边 | next to 里两个 t 连在一起，只读一个。
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | 哪条线去市中心？ | downtown 前面不加 to。
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | 在哪儿换乘？ | 英国说 change：Where do I change?
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | 这趟公交去机场吗？ | 元音前的 the 读 /ði/。
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | 我该在哪一站下车？ | get off = 下（公交、地铁）。介词 at 放在句尾。
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | 一张去波士顿的票 | 目的地前用 to。
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | 往返还是单程？ | 英式：Return or single?
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | 请送我到这个地址 | 打车时把手机屏幕给司机看，就不会出错。
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | 能在这儿停一下吗？ | 想下车时说。Right here is fine. 也可以。
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | 要多长时间？ | 回答：About 20 minutes.
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | 这个座位有人吗？ | 没人就会回答 No, go ahead. seat 的元音要拉长，别读成 sit。
`,
"餐厅点餐": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | 两位 | 美国餐厅一般要等服务员带位。
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | 有预订吗？ | 服务员会这样问。回答：Yes, under Li.
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | 能看一下菜单吗？ | menu 重音在前。
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | 有什么推荐的吗？ | 也可以问 What's popular here?
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | 我要牛排 | 点菜基本句型：I'll have + 菜名。
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | 来一杯可乐 | 可乐一般说 Coke。get a 连读，美音听起来像 geda。
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | 牛排要三分熟 | 回答 How would you like your steak? 中文常说的“五分熟”是 medium。
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | 不要洋葱 | 也可以说 Can I get it without onions?
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | 我对花生过敏 | allergic 重音在第二个音节。名词“过敏”是 allergy。
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | 辣吗？ | 美国的 spicy 对很多中国人来说不算辣。
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | 能给我们一些水吗？ | 美国餐厅的冰水一般免费。美音 water 的 t 读得像轻 d。
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | 都很好吃 | 服务员问 How is everything? 时这样回答。
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | 买单 | 英国说 the bill。美国一般坐在座位上结账。
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | 可以分开付吗？ | 也说 separate checks。
It's on me. | /ɪts ɑːn ˈmiː/ | 我请客 | My treat! 意思一样。
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | 这个能打包吗？ | 打包剩菜也可以说 Can I get a box?
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | 含小费吗？ | 国内吃饭不给小费，美国餐厅一般要另付 15%～20%。
`,
"咖啡店与便利店": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | 一杯冰美式 | iced 的 -d 几乎听不到。点饮料最常用 Can I get…?
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | 要什么杯型？ | 店员会这样问。
Small, please. | /ˈsmɔːl ˈpliːz/ | 小杯 | 星巴克用 tall / grande / venti。
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | 在这儿喝还是带走？ | 英式：Eat in or take away?
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | 能换成燕麦奶吗？ | instead = 代替。可能要加钱。
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | 少冰 | 去冰：No ice, please.
Decaf, please. | /ˈdiːkæf ˈpliːz/ | 要低因的 | decaffeinated 的简称。
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | 请问怎么称呼？（写在杯子上） | 店员要在杯子上写名字。准备一个好念的英文名或简称会很方便。
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | 需要袋子吗？ | 不需要就说 No, I'm good.
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | 请给我小票 | receipt 里的 p 不发音。
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | 电池在哪儿？ | 问东西放在哪儿的万能句。
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | 有手机充电器卖吗？ | 也可以说 Do you have…?
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | 能帮我加热一下吗？ | heat this up 要连起来读。
That's it. | /ˈðæts ˈɪt/ | 就这些 | 店员问 Anything else? 时这样回答。
Here you go. | /ˈhɪr ju ˈgoʊ/ | 给你 | 递钱或递东西时说。
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | 不用找了 | 在美国打车、收外卖时常用来代替小费。
`,
"购物与结账": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | 我随便看看 | 店员问 Can I help you find anything? 时用。
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | 这个有 M 码吗？ | 尺码：small / medium / large。
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | 有黑色的吗？ | 颜色前用 in。
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | 可以试穿吗？ | try on = 试穿（衣服、鞋）。
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | 试衣间在哪儿？ | 英国说 changing room。
It's too big. | /ɪts ˈtuː ˈbɪg/ | 太大了 | 太小：It's too small.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | 有点紧 | 太松：It's a bit loose.
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | 这个打折吗？ | on sale = 打折；for sale = 出售。很容易混。
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | 能便宜点吗？ | 美国普通商店基本不讲价，只在跳蚤市场、二手交易时砍价。
I'll take it. | /aɪl ˈteɪk ɪt/ | 就要这个了 | 决定买时说。两件以上：I'll take them.
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | 现金还是刷卡？ | 结账时一定会听到。
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | 能用 Apple Pay 吗？ | take = 接受（某种付款方式）。微信、支付宝在国外不一定能用。
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | 能退款吗？ | 记得保留小票。
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | 我想换一下这个 | 补充原因：It's the wrong size.
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | 能包装成礼物吗？ | wrap 的 w 不发音。
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | 含税吗？ | 美国标价通常不含税，结账时会多出一些。
`,
"数字、时间与日期": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | 现在几点？ | 问陌生人：Excuse me, do you have the time?
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | 三点半 | 英式也说 half past three。
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | 差一刻五点 | quarter = 一刻钟（15 分钟）。也可以说 four forty-five。
At noon | /ət ˈnuːn/ | 中午 12 点 | 午夜是 midnight，比 12 a.m. / 12 p.m. 更不容易搞混。
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | 今天几号？ | 问星期几：What day is it today?
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | 5 月 3 日 | 日期用序数词读：first, second, third, fourth…
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | 我的生日在 10 月 | 月份前用 in，具体日期前用 on：on October 5th。
On Monday | /ɑːn ˈmʌndeɪ/ | 在星期一 | 星期前用 on。每周一：on Mondays。
Next weekend | /ˈnekst ˈwiːkend/ | 下周末 | next / last / this 前面不加介词。
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | 后天 | 前天：the day before yesterday。
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | 13 还是 30？ | 13 重音在后（-teen 拉长），30 重音在前。听价格时一定要确认。
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | 15 美元 | $15.50 读作 fifteen fifty。
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | 二百五十 (250) | 美国常省略 and：two hundred fifty。
Ten thousand | /ˈten ˈθaʊznd/ | 一万 (10,000) | 英语没有“万”这个单位，按三位一组数：10 thousand。
One million | /ˈwʌn ˈmɪljən/ | 一百万 (1,000,000) | 一千万 = ten million，一亿 = one hundred million。
Twice a week | /ˈtwaɪs ə ˈwiːk/ | 一周两次 | once（一次）、twice（两次）、three times（三次）。
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | 10 分钟后 | 表示将来时间的 in = ……之后，不是“10 分钟之内”。
`,
"闲聊": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | 周末过得怎么样？ | 周一必问。用一两句话简单回答，再反问对方。
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | 挺放松的 | pretty = 相当、挺，不是“漂亮”。
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | 周末有什么安排吗？ | 周五必问。没计划就说 Not really, just relaxing.
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | 今天天气不错啊 | 天气是和谁都能聊的最安全话题。中文的“吃了吗？”在英语里不是问候语。
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | 今天冷死了 | 热的时候：It's boiling! 或 It's so hot!
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | 你在这儿住了多久了？ | 回答：About three years.
Have you been to China? | /həv ju bɪn tə ˈtʃaɪnə/ | 你去过中国吗？ | 问经历用 have been to。中文的“去过”对应现在完成时。
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | 你平时喜欢干什么？ | 比 What's your hobby? 自然得多。
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | 最近看了什么好看的剧吗？ | show = 电视剧、综艺等节目。
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | 听起来很有意思 | 回应对方时用。That sounds great! 也很好。
Same here. | /ˈseɪm ˈhɪr/ | 我也是 | 口语里直接说 Same!
Me neither. | /ˈmiː ˈniːðər/ | 我也不 | 附和否定句：I don't like it. → Me neither.（不能说 Me too）
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | 就是说啊！ | 强烈同意时的口语表达。
Oh, really? | /ˈoʊ ˈriːəli/ | 哦，真的吗？ | 表示感兴趣的附和，句尾上扬。
By the way | /baɪ ðə ˈweɪ/ | 顺便说一句 | 转换话题时用。消息里写 BTW。
How's work? | /ˈhaʊz ˈwɜːrk/ | 工作怎么样？ | 熟人间的问候，可以回答 Busy, but good! 工资、年龄、婚恋、体重都不适合拿来闲聊。
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | 跟你聊得很开心 | 自然结束对话时说。
`,
"情绪与反应": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | 真为你高兴！ | 对方有好事时说。
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | 恭喜！ | 一定要加 -s。简称 Congrats!
That's awesome! | /ˈðæts ˈɔːsəm/ | 太棒了！ | 美国人超常用的反应。
No way! | /ˈnoʊ ˈweɪ/ | 不会吧！ | 吃惊时说。也可以表示拒绝：No way, I'm not doing that.
Seriously? | /ˈsɪriəsli/ | 真的假的？/ 认真的？ | 根据语气，可以表示惊讶，也可以表示不耐烦。
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | 好累啊 | 累坏了：I'm exhausted.
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | 压力好大 | 比 I have stress 自然。
I'm bored. | /aɪm ˈbɔːrd/ | 好无聊 | 注意：I'm boring 的意思是“我是个无聊的人”。
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | 好激动 / 好期待 | 有值得期待的事时说。-ed 形容词表示自己的感受。
I'm nervous. | /aɪm ˈnɜːrvəs/ | 好紧张 | 面试、演讲前。安慰别人：Don't be nervous.
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | 太可惜了 | 轻微的遗憾。严重的事用下一句。
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | 听到这个消息我很难过 | 不是道歉，而是安慰。sorry 在这里是“遗憾、难过”。
What a relief! | /ˈwʌt ə rɪˈliːf/ | 那就放心了！ | 和 Phew! 一起说更自然。
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | 天哪！ | Oh my God 的委婉说法。消息里写 OMG。
I'm upset. | /aɪm ʌpˈset/ | 我心里很不舒服 | 介于生气和伤心之间的感觉。
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | 真烦人 | 当面对人说 You're annoying 语气很重。
I can't wait! | /aɪ ˈkænt ˈweɪt/ | 等不及了！ | 字面意思是“没法等了”，表示非常期待。
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | 没什么大不了的 | 对方过意不去时，用来让对方放心。
`,
"赞美与好感": `
You look great! | /ju ˈlʊk ˈgreɪt/ | 你看起来真棒！ | 夸外表用 You look…，熟人之间很自然。
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | 你的鞋子好好看 | love = 非常喜欢。对陌生人也可以随口夸一句。
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | 这个颜色很适合你 | look good on + 人 = 穿在某人身上好看。
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | 你笑起来真好看 | 熟了以后用的温暖赞美。
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | 你真逗 | funny = 好笑的；fun = 和你在一起很开心。
Great job! | /ˈgreɪt ˈdʒɑːb/ | 干得好！ | 职场、学校都能用。Nice work! 也一样。
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | 我为你骄傲 | 对家人、朋友说，上司也会对下属说。
You did it! | /ju ˈdɪd ɪt/ | 你做到了！ | 对达成目标的人说。
Your Chinese is really good! | /jʊr ˌtʃaɪˈniːz ɪz ˈriːəli ˈgʊd/ | 你的中文说得真好！ | 对学中文的外国朋友说，对方会很开心。
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | 你很有品位 | 夸衣着、音乐、装修的品位。
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | 和你在一起很开心 | 约会、聚会结束时说。
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | 改天一起喝杯咖啡吧？ | want to 口语读作 wanna。grab = 随便吃点、喝点。
I miss you. | /aɪ ˈmɪs ju/ | 我想你 | 对分开的人说，家人、朋友都可以。
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | 你对我很重要 | 对朋友、恋人表达真心时说。
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | 你真是救了我！ | 即使是小忙，也可以夸张地表达感谢。
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | 你让我一整天都很开心！ | 收到暖心的话或礼物时说。
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | 你人真好 | 得到帮助或夸奖时礼貌地回应。
`,
"工作与邮件": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | 希望你一切都好 | 正式邮件的开头问候。轻松一点：I hope you're doing well. 不必像中文“您好！”那样句句客气。
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | 写信是想问一下日程安排 | 第一句就说明来意：I'm writing to + 目的。
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | 报告已附上 | Please find attached… 更正式，也更生硬。
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | 提醒一下明天的会议 | 委婉催促的说法。
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | 有问题请随时告诉我 | 邮件结尾最常用的一句。
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | 能在周五之前把文件发给我吗？ | by = 在……之前（截止）；until = 一直到……
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | 抱歉回复晚了 | 也可以说 Thanks for your patience.
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | 感谢回复 | get back to = 回复、再联系。
Best regards, | /ˈbest rɪˈgɑːrdz/ | 祝好（邮件结尾） | 中文的“祝好”“此致敬礼”用 Best regards 就行。关系近：Best, / Thanks,
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | 我们约个时间开会吧 | 美音 /ˈskedʒuːl/，英音 /ˈʃedjuːl/。
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | 我要晚到一会儿 | 在路上提前告知：I'll be there in 10.
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | 会议能推迟到 3 点吗？ | 提前用 move up：Can we move it up to 1?
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | 我确认一下再回复你 | 不能马上答复时争取时间。
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | 能一步步给我讲一下吗？ | walk through = 一步一步讲解。
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | 下周我们再碰一下 | 意思是简单沟通一下进展。
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | 截止日期是什么时候？ | When is this due? 意思一样。
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | 我今天在家办公 | 缩写 WFH。
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | 我明天休息 | 请假：I'm taking a day off tomorrow.
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | 辛苦了 / 感谢你的付出 | 中文的“辛苦了”没有完全对应的说法。下班道别直接说 See you tomorrow! 就好。
`,
"电话与短信缩写": `
Hello, this is Li Wei. | /həˈloʊ ˈðɪs ɪz ˈliː ˈweɪ/ | 喂，我是李伟 | 打电话时不说 I'm Li Wei，而说 This is Li Wei。
Can I speak to Mr. Li? | /kən aɪ ˈspiːk tə ˈmɪstər ˈliː/ | 请问李先生在吗？ | 中文名姓在前，称呼用姓：Mr. Li，不是 Mr. Wei。更礼貌：May I speak to…?
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | 请问是哪位？ | 接电话的一方问。
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | 请稍等一下 | 打电话或说话时请对方稍等。
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | 抱歉，信号不好，听不清 | break up = （电话声音）断断续续。也有“分手”的意思。
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | 我待会儿打给你行吗？ | 忙的时候：I'm in a meeting. Can I call you back?
I'll text you. | /aɪl ˈtekst ju/ | 我发消息给你 | 美国把发短信、发消息都叫 text。
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | 我在路上了 | 消息里写 OMW。
LOL | /ˌel oʊ ˈel/ | 哈哈哈 (laughing out loud) | 不是真的大笑，就像随手打的“哈哈哈”。
BRB | /ˌbiː ɑːr ˈbiː/ | 马上回来 (be right back) | 聊天、打游戏时暂时离开用。
BTW | /ˌbiː tiː ˈdʌbəljuː/ | 顺便说一句 (by the way) | 转换话题时用。
TBH | /ˌtiː biː ˈeɪtʃ/ | 说实话 (to be honest) | 放在句首或句尾都可以。
IDK | /ˌaɪ diː ˈkeɪ/ | 不知道 (I don't know) | 常写成小写 idk。
OMG | /ˌoʊ em ˈdʒiː/ | 天哪 (oh my God) | 口语里也会直接说 O-M-G!
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | 尽快 (as soon as possible) | 职场常用，但对上级最好给出具体日期，更礼貌。
TTYL | /ˌtiː tiː waɪ ˈel/ | 回头聊 (talk to you later) | 结束聊天时用。
NVM | /ˌen viː ˈem/ | 没事了，算了 (never mind) | 收回刚才的问题时用。
FYI | /ˌef waɪ ˈaɪ/ | 供参考 (for your information) | 工作邮件、即时通讯里很常用。
`,
"旅行（机场与酒店）": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | 这是我的护照 | 值机、入境检查时递过去说。
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | 我来旅游观光 | 回答入境问题 What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | 我待一周 | 回答 How long are you staying?
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | 我住希尔顿酒店 | 回答 Where are you staying?
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | 靠窗还是靠过道？ | aisle 的 s 不发音。
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | 我想要靠过道的座位 | 靠窗：a window seat。
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | 行李提取处在哪儿？ | 英国说 baggage reclaim。
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | 我的行李不见了 | luggage 是不可数名词：a piece of luggage。
I have a reservation under Li. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər ˈliː/ | 我用“李”这个姓预订了 | under + 预订人的姓名。报中文名时说姓就行，必要时拼出来：L-I。
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | 几点退房？ | 想晚点走：Can I get a late check-out?
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | 可以提前入住吗？ | check in 要连读。
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | 含早餐吗？ | breakfast 读 /ˈbrekfəst/，不是 break + fast。
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | 空调坏了 | 口语简称 AC。
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | 能再给我几条毛巾吗？ | could I 要连读。
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | 能帮我寄存行李到 3 点吗？ | 退房后寄存行李。hold = 代为保管。
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | 我的航班延误了 | 取消：canceled。
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | 12 号登机口在哪儿？ | 英语把编号放在后面。
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | 需要把笔记本电脑拿出来吗？ | 过安检时问。
`,
"医院与紧急情况": `
Help! | /ˈhelp/ | 救命！ | 紧急时大声喊。
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | 快打 911！ | 美国急救电话是 911（读作 nine one one），英国是 999。
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | 我需要医生 | 情况紧急：I need an ambulance.
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | 我不太舒服 | 最常用的说法。
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | 我头疼 | 疼的部位 + ache：stomachache, toothache。
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | 我发烧了 | f 要用上齿轻碰下唇送气。
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | 我肚子疼 | 部位 + hurts。hurts 结尾的 -ts 要读出来。
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | 我嗓子疼 | sore = 酸痛。throat 是喉咙，不是脖子 (neck)。
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | 我头晕 | 想吐：I feel sick. / I feel nauseous.
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | 我崴了脚 | sprain = 扭伤。手腕是 wrist。
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | 这附近有药店吗？ | 美国也叫 drugstore（比如 CVS）。
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | 需要处方吗？ | 在美国，不用处方就能买的药叫 over-the-counter。
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | 我的钱包丢了 | 丢了手机就说 phone。失物招领处是 lost and found。
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | 有人偷了我的手机 | stole 是 steal（偷）的过去式。
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | 警察局在哪儿？ | police 重音在后。
I need to contact the Chinese embassy. | /aɪ ˈniːd tə ˈkɑːntækt ðə ˌtʃaɪˈniːz ˈembəsi/ | 我需要联系中国大使馆 | 护照丢失时一定用得上。
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | 我买了旅行保险 | 去医疗费高的国家，一定要提前买。
`,
"短语动词": `
pick up | /ˈpɪk ˈʌp/ | （开车）接 / 捡起 | I'll pick you up at 7. 代词 (you, it) 放在中间。
give up | /ˈgɪv ˈʌp/ | 放弃 | Don't give up! 放弃做某事用 -ing：give up smoking。
figure out | /ˈfɪgjər ˈaʊt/ | 弄明白 / 想出办法 | I can't figure out this app.（这个应用我搞不懂怎么用）
find out | /ˈfaɪnd ˈaʊt/ | 发现 / 得知 | 指打听到信息。figure out 是动脑子解决问题。
look for | /ˈlʊk fɔːr/ | 寻找 | I'm looking for my keys. 找到了用 find。
look after | /ˈlʊk ˈæftər/ | 照顾 | Can you look after my cat? 美国也常说 take care of。
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | 期待 | to 后面接名词或 -ing：I'm looking forward to seeing you.
run out of | /ˈrʌn ˈaʊt əv/ | 用完 / 耗尽 | 用完的东西放在 of 后面：We ran out of milk.（牛奶喝完了）
turn on | /ˈtɜːrn ˈɑːn/ | 打开（电器） | “开灯”要说 turn on the light，不说 open the light ✗。代词放中间：Turn it on.
turn off | /ˈtɜːrn ˈɔːf/ | 关掉（电器） | 代词放中间：Turn it off. (turn off it ✗)
turn down | /ˈtɜːrn ˈdaʊn/ | 拒绝 / 调小（音量） | 两个意思都很常用：She turned down the offer. / Turn it down!
put off | /ˈpʊt ˈɔːf/ | 推迟 / 拖延 | 日常口语里比 postpone 常用得多：Stop putting it off!
show up | /ˈʃoʊ ˈʌp/ | 出现 / 露面 | 指到场：He didn't show up to the party.（他没来派对）
hang out | /ˈhæŋ ˈaʊt/ | 一起玩 / 闲逛 | 和朋友出去玩用 hang out，不用 play（play 多用于小孩、游戏、运动）。
check out | /ˈtʃek ˈaʊt/ | 看看 / 查看 | Check out this video! 也有“退房”的意思。
work out | /ˈwɜːrk ˈaʊt/ | 健身 / 顺利解决 | 去健身房锻炼常说 work out：I work out every day. / It'll work out.（会好起来的）
come up with | /ˈkʌm ˈʌp wɪð/ | 想出（主意） | 想出主意、借口、办法：She came up with a great idea.
get along with | /ˈget əˈlɔːŋ wɪð/ | 和……相处融洽 | 关系好：I get along with my coworkers.（我和同事相处得很好）
calm down | /ˈkɑːm ˈdaʊn/ | 冷静下来 | calm 的 l 不发音。对生气的人这么说，可能让对方更生气。
set up | /ˈset ˈʌp/ | 安装 / 设置 / 安排 | 安装设备、准备会议等：Can you help me set up my printer?
break up | /ˈbreɪk ˈʌp/ | 分手 | They broke up last month. 和谁分手：break up with。
fill out | /ˈfɪl ˈaʊt/ | 填写（表格） | Please fill out this form. 英式说 fill in。
grow up | /ˈgroʊ ˈʌp/ | 长大 | 说在哪里长大：I grew up in Chengdu.（我在成都长大）
wake up | /ˈweɪk ˈʌp/ | 醒来 | 醒过来是 wake up，起床下地是 get up。
`,
"发音易错": `
rice | /ˈraɪs/ | 米 / 米饭 | r：嘴唇微微收圆，舌尖不碰任何地方。和 lice 区分。
lice | /ˈlaɪs/ | 虱子 | l：舌尖抵住上齿龈再放开。把 I like rice 说成 lice 就尴尬了。
right | /ˈraɪt/ | 右边 / 正确的 | r 开头，和 light 区分。
light | /ˈlaɪt/ | 光 / 灯 / 轻的 | l 开头，舌尖碰上齿龈。部分地区的同学 n / l 不分，也要和 night 区分。
fan | /ˈfæn/ | 风扇 / 粉丝 | f：上齿轻碰下唇送气。/æ/ 嘴要张大。
pan | /ˈpæn/ | 平底锅 | p：双唇闭合后爆破。
coffee | /ˈkɔːfi/ | 咖啡 | 中间的 f 要咬唇。美音元音是 /ɔː/。
copy | /ˈkɑːpi/ | 复印 / 副本 | 中间是 p。美音元音是 /ɑː/。
think | /ˈθɪŋk/ | 想 / 认为 | /θ/：舌尖轻放在上下齿之间送气。读成 s 就变成 sink。
sink | /ˈsɪŋk/ | 水槽 / 下沉 | 舌尖藏在齿后的 s。
three | /ˈθriː/ | 三 | 舌尖要放在齿间，读成 t 就像 tree。
tree | /ˈtriː/ | 树 | tr 连在一起读，听起来有点像拼音 ch（“出”的声母）。
this | /ˈðɪs/ | 这个 | 带声的 /ð/：舌尖放在齿间，声带振动，别读成 z 或 d。
very | /ˈveri/ | 非常 | v：上齿碰下唇，声带振动。别读成 w (wary)。
berry | /ˈberi/ | 浆果 | 双唇闭合再放开的 b。
vote | /ˈvoʊt/ | 投票 | v 开头，和 boat 区分。
boat | /ˈboʊt/ | 船 | b 开头。结尾的 t 轻轻收住，不要加元音。
walk | /ˈwɔːk/ | 走路 | l 不发音，元音是张大嘴的 /ɔː/。
work | /ˈwɜːrk/ | 工作 | 卷舌元音 /ɜːr/。和 walk 是容易混的一对。
beach | /ˈbiːtʃ/ | 海滩 | /iː/ 要拉长，读短了听起来像骂人的词。
leave | /ˈliːv/ | 离开 | 长音 /iː/。和短音的 live（住）区分。
live | /ˈlɪv/ | 住 / 生活 | 短音 /ɪ/，嘴放松。
banana | /bəˈnænə/ | 香蕉 | 重音在中间。每个音节读得一样重，对方反而听不懂。
hotel | /hoʊˈtel/ | 酒店 | 重音在后。重音放在前面听起来很别扭。
milk | /ˈmɪlk/ | 牛奶 | 结尾不要加“克”那样的元音，轻轻收住 k。
McDonald's | /məkˈdɑːnldz/ | 麦当劳 | 重音在 Don。照着“麦当劳”说，对方很难听懂。
bed | /ˈbed/ | 床 | 结尾的 d 是浊音，短促，不加元音。读成清音就成了 bet。
bet | /ˈbet/ | 打赌 | 结尾是清音 t，元音比 bed 更短促。
card | /ˈkɑːrd/ | 卡片 / 卡 | 结尾的 d 要读出来，丢掉就成了 car。
car | /ˈkɑːr/ | 汽车 | 美音结尾要卷舌读出 r。
cap | /ˈkæp/ | 帽子 | 结尾是清音 p，双唇闭上就行，不加元音。
cab | /ˈkæb/ | 出租车 | 结尾是浊音 b，元音比 cap 稍长。
mouth | /ˈmaʊθ/ | 嘴 | 结尾舌尖伸到齿间送气。读成 s 就是 mouse。
mouse | /ˈmaʊs/ | 老鼠 / 鼠标 | 结尾是 s，舌尖在齿后。
wary | /ˈweri/ | 谨慎的 | w：双唇收圆，不碰牙齿。和 very 区分。
vest | /ˈvest/ | 背心 / 马甲 | v 开头，上齿碰下唇。
west | /ˈwest/ | 西方 / 西边 | w 开头，嘴唇收圆。
night | /ˈnaɪt/ | 夜晚 | n：气流从鼻腔出来。部分地区的同学容易和 light 混淆。
know | /ˈnoʊ/ | 知道 | k 不发音。n 开头，部分地区的同学容易和 low 混淆。
low | /ˈloʊ/ | 低的 | l 开头，舌尖抵住上齿龈，气流从舌头两侧出来。
bad | /ˈbæd/ | 坏的 | /æ/ 嘴张大，嘴角向两边拉。和 bed 区分。
friends | /ˈfrendz/ | 朋友（复数） | 辅音连缀 -ndz 要读全，别说成 frens。
asked | /ˈæskt/ | 问了（ask 的过去式） | 结尾 -skt 三个辅音都要读出来，别只说 as。
months | /ˈmʌnθs/ | 月（复数） | 结尾 -nθs 很难，可以先慢慢读 month，再加 s。
`,
"英语习语": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | 小菜一碟 | 非常容易：The test was a piece of cake.
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | 高兴得要飞起来了 | 特别开心的时候说。
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | 贵得要命 | 贵到要拿胳膊和腿去换。
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | 今天就到这儿吧 | 结束工作、学习时说，开会时也很自然。
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | 我有点不舒服 | 像要感冒那样轻微不适，和天气无关。
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | 我得用功读书了 | 考试前说。不是真的打书。
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | 极少 / 难得一次 | 非常少见：I only eat fast food once in a blue moon.
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | 迟做总比不做好 | 鼓励起步晚的人。
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | 别拐弯抹角 | 让对方直说重点。
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | 不是我喜欢的类型 | 委婉地表示不喜欢。
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | 我们开始吧 | 会议、项目开始时说。
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | 祝你好运 | 常配合食指和中指交叉的手势。
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | 坚持住 | 对处境艰难的人说。中文的“加油”在这种场合就可以说 Hang in there.
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | 说曹操，曹操到！ | 正说着某人，他就出现了。
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | 该你做决定了 | 来自网球。
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | 我保证守口如瓶 | 字面意思是“嘴唇封住了”。
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | 话到嘴边就是想不起来 | 明明知道却一时说不出来的时候。
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | 洗耳恭听 | 意思是“你说吧，我认真听着”。
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | 除非太阳从西边出来 | 绝不可能发生的事：He'll clean his room when pigs fly.
`,
"影视与俚语": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | 快说说有什么八卦 | tea = 八卦、内幕。朋友之间的俚语。
No cap. | /ˈnoʊ ˈkæp/ | 真的，不骗你 | 年轻人的俚语。cap = 谎话。
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | 这首歌太好听了 | slap = （音乐等）超赞，也可以形容食物。
I'm dead. | /aɪm ˈded/ | 笑死我了 | 消息里常配 💀 表情，不是真的死了。
Low-key | /ˌloʊˈkiː/ | 有点 / 偷偷地 | I low-key love this song. 反义词是 high-key（毫不掩饰地）。
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | 这首歌我单曲循环了 | obsessed = 着迷的，多用在正面意思上。
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | 讲的是什么？ | 问电影、电视剧的剧情。
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | 不许剧透！ | Don't spoil it! 意思一样。
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | 我一口气追完了一整季 | binge-watch = 刷剧、一口气看完。
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | 结局太好了 | 不好看：The ending was disappointing.
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | 一定要看 | 强烈推荐时说。
Plot twist! | /ˈplɑːt ˈtwɪst/ | 剧情反转！ | 生活里出现意外时也可以说。
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | 被高估了 | 反义词是 underrated（被低估的）。
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | 那场戏看得我起鸡皮疙瘩 | 因为感动或紧张起鸡皮疙瘩。
Who's your bias? | /ˈhuːz jʊr ˈbaɪəs/ | 你的本命是谁？ | K-pop 粉丝用语，和饭圈说的“本命”差不多。一般说 Who's your favorite member?
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | 你在开玩笑吧？ | 影视剧常见台词，可以表示惊讶，也可以表示恼火。
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | 我挺你 / 有我在 | 意思是会一直支持你、保护你。
Gotcha. | /ˈgɑːtʃə/ | 明白了 / 抓到你了！ | got you 的缩略，最常用来表示“懂了”。
Let's do this! | /ˈlets ˈduː ˈðɪs/ | 开干吧！ | 开始前给大家鼓劲。
`,
"字母表": `
A | /ˈeɪ/ | 字母 A（小写 a） | apple 的 A。名称读 /ˈeɪ/，不是拼音 a 的读法。
B | /ˈbiː/ | 字母 B（小写 b） | bag 的 B。双唇闭合再放开，和 V 区分。
C | /ˈsiː/ | 字母 C（小写 c） | coffee 的 C。名称和 see 同音。拼音里 c 是“次”的声母，别混。
D | /ˈdiː/ | 字母 D（小写 d） | dog 的 D。和 T 只差声带振动，电话里容易听错。
E | /ˈiː/ | 字母 E（小写 e） | email 的 E。名称是 /ˈiː/，不是拼音 e（鹅）；/ˈaɪ/ 是 I 的名称。
F | /ˈef/ | 字母 F（小写 f） | fan 的 F。结尾上齿轻触下唇。coffee 里的 ff 说 double F。
G | /ˈdʒiː/ | 字母 G（小写 g） | go 的 G。拼音 g 是“哥”的声母，字母名称却是 /ˈdʒiː/，别和 J 说反。
H | /ˈeɪtʃ/ | 字母 H（小写 h） | hotel 的 H。名称以元音开头，所以说 an H。结尾的 /tʃ/ 后面不加元音。
I | /ˈaɪ/ | 字母 I（小写 i） | idea 的 I。和表示“我”的 I 同音，不是拼音 i（衣）；/ˈiː/ 是 E 的名称。
J | /ˈdʒeɪ/ | 字母 J（小写 j） | job 的 J。拼音 j 是“鸡”的声母，字母名称是 /ˈdʒeɪ/，和 G 容易说反。
K | /ˈkeɪ/ | 字母 K（小写 k） | key 的 K。和 OK 结尾的音相同。
L | /ˈel/ | 字母 L（小写 l） | light 的 L。舌尖抵住上齿龈就收住，后面不加元音。
M | /ˈem/ | 字母 M（小写 m） | milk 的 M。双唇闭上收住。电话里容易和 N 听混，可以说 M as in Mary。
N | /ˈen/ | 字母 N（小写 n） | name 的 N。电话里容易和 M 混，可以说 N as in name。部分地区的同学还要注意别读成 L。
O | /ˈoʊ/ | 字母 O（小写 o） | OK 的 O。美音是 /oʊ/，结尾嘴唇收圆。在英语里报电话号码时，数字 0 也常读作 O。
P | /ˈpiː/ | 字母 P（小写 p） | pan 的 P。双唇爆破送气，和 B 区分。
Q | /ˈkjuː/ | 字母 Q（小写 q） | question 的 Q。拼音 q 是“七”的声母，字母名称却是 /ˈkjuː/。单词里 Q 后面几乎总跟着 U。
R | /ˈɑːr/ | 字母 R（小写 r） | rice 的 R。先张大嘴读 /ɑː/，再把舌尖向后卷，不碰任何地方。和 L 区分。
S | /ˈes/ | 字母 S（小写 s） | sorry 的 S。/ˈsiː/ 是 C 的名称。class 里的 ss 说 double S。
T | /ˈtiː/ | 字母 T（小写 t） | taxi 的 T。大写说 capital T，两个 T 连在一起说 double T。
U | /ˈjuː/ | 字母 U（小写 u） | university 的 U。名称和 you 同音，以 /j/ 开头，所以是 a U。拼音 u 读“乌”。
V | /ˈviː/ | 字母 V（小写 v） | very 的 V。上齿轻触下唇、声带振动，不要读成拼音的 wei。
W | /ˈdʌbəljuː/ | 字母 W（小写 w） | water 的 W。名称是 double u（两个 U），三个音节都要读出来。
X | /ˈeks/ | 字母 X（小写 x） | X-ray（X 光）的 X，不过 X 更常出现在词尾，比如 box。拼音 x 是“西”的声母，字母名称却是 /ˈeks/，所以说 an X。
Y | /ˈwaɪ/ | 字母 Y（小写 y） | yes 的 Y。名称和 why 同音。
Z | /ˈziː/ | 字母 Z（小写 z） | zero 的 Z。美国人说 zee；课本里的英式 zed 在美国很少用。拼音 z 是“资”的声母。
`,
"中式英语陷阱": `
Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | 开灯 | 中式英语：“开灯”不是 open the light ✗。灯、电视、空调等电器的“开”用 turn on。
Turn off the TV. | /ˈtɜːrn ˈɔːf ðə ˌtiː ˈviː/ | 关电视 | 中式英语：“关电视”不是 close the TV ✗。电器的“关”用 turn off，门窗才用 close。
I'll take you to the station. | /aɪl ˈteɪk ju tə ðə ˈsteɪʃn/ | 我带你去车站 | 一词多义：“带”某人去别处用 take；带到说话人这里才用 bring。
Can you bring me some water? | /kən ju ˈbrɪŋ mi ˈsʌm ˈwɔːtər/ | 能给我拿点水来吗？ | 一词多义：“带来、拿来”（朝说话人的方向）用 bring，和 take 方向相反。
Can you lend me a pen? | /kən ju ˈlend mi ə ˈpen/ | 能借我一支笔吗？ | 一词多义：“借”给别人用 lend。Can you borrow me a pen? ✗
Can I borrow your charger? | /kən aɪ ˈbɑːroʊ jʊr ˈtʃɑːrdʒər/ | 我能借一下你的充电器吗？ | 一词多义：从别人那里“借”用 borrow。记住：lend 是借出，borrow 是借入。
I'm reading a book. | /aɪm ˈriːdɪŋ ə ˈbʊk/ | 我在看书 | 一词多义：“看书”用 read，不说 see a book ✗ 或 look a book ✗。
I'm watching TV. | /aɪm ˈwɑːtʃɪŋ ˌtiː ˈviː/ | 我在看电视 | 一词多义：看电视、看比赛这种持续地看用 watch。watch TV 是固定说法，TV 前不加冠词；指某台电视机时才说 the TV：Turn off the TV.
Look at this picture. | /ˈlʊk ət ˈðɪs ˈpɪktʃər/ | 看看这张照片 | 一词多义：主动去“看”某个东西用 look at，at 不能漏；“看见”用 see。
I was on my phone all night. | /aɪ wəz ɑːn maɪ ˈfoʊn ˈɔːl ˈnaɪt/ | 我玩了一晚上手机 | 中式英语：“玩手机”不是 play the phone ✗，要说 be on my phone 或 use my phone。
Reading helps you gain knowledge. | /ˈriːdɪŋ ˈhelps ju ˈgeɪn ˈnɑːlɪdʒ/ | 读书能帮你增长知识 | 中式英语：“学习知识”不说 learn knowledge ✗，用 gain knowledge，或直接说 learn a lot。knowledge 不可数，没有复数。
Do you play any sports? | /də ju ˈpleɪ ˈeni ˈspɔːrts/ | 你平时做运动吗？ | 一词多义：“运动”指球类说 play sports / play basketball；泛指锻炼说 exercise 或 work out。
Take this medicine twice a day. | /ˈteɪk ˈðɪs ˈmedɪsn ˈtwaɪs ə ˈdeɪ/ | 这个药一天吃两次 | 中式英语：“吃药”不是 eat medicine ✗，要用 take。medicine 泛指药物时不可数。
I'm giving a presentation tomorrow. | /aɪm ˈgɪvɪŋ ə ˌpriːzenˈteɪʃn təˈmɑːroʊ/ | 我明天要做报告 | 中式英语：“做报告”直译成 make a report 不自然。在会上讲给大家听，用 give a presentation。
You've made a lot of progress. | /juv ˈmeɪd ə ˈlɑːt əv ˈprɑːgres/ | 你进步很大 | 中式英语：“取得进步”用 make progress。progress 不可数：a progress ✗、progresses ✗。
I'd like to ask a question. | /aɪd ˈlaɪk tu ˈæsk ə ˈkwestʃən/ | 我想提个问题 | 中式英语：“提问题”不说 put forward a question ✗。日常用 ask a question；在会上提出某个问题供讨论，可以说 raise a question。
You should see a doctor. | /ju ʃəd ˈsiː ə ˈdɑːktər/ | 你应该去看病 | 中式英语：“看病”不是 see a sickness ✗，而是 see a doctor（去看医生）。
It's really crowded. | /ɪts ˈriːəli ˈkraʊdɪd/ | 人山人海 / 太挤了 | 中式英语：“人山人海”不能直译成 people mountain people sea ✗。不过 Long time no see. 这种来自中文的说法已经被英语接受了。
I really like it. | /aɪ ˈriːəli ˈlaɪk ɪt/ | 我很喜欢 | 中式英语：“很喜欢”不是 I very like it. ✗。very 不能直接修饰动词，要说 I really like it. 或 I like it very much.
Although it rained, we went hiking. | /ɔːlðoʊ ɪt ˈreɪnd wi ˈwent ˈhaɪkɪŋ/ | 虽然下雨了，我们还是去徒步了 | 中式英语：“虽然……但是”在英语里只用一个连词。Although it rained, but we went… ✗
Because I was tired, I went to bed early. | /bɪkəz aɪ wəz ˈtaɪərd aɪ ˈwent tə ˈbed ˈɜːrli/ | 因为太累了，所以我早早睡了 | 中式英语：“因为……所以”只用一个，because 和 so 不能同时出现。go to bed 不加冠词。
I'm on the bus. | /aɪm ɑːn ðə ˈbʌs/ | 我在公交车上 | 中式英语：“在公交车上”用 on，不用 in ✗。公交、地铁、火车、飞机用 on，小汽车、出租车用 in。
What do you think? | /ˈwʌt də ju ˈθɪŋk/ | 你觉得怎么样？ | 中式英语：“你觉得怎么样？”不说 How do you think? ✗。问看法用 What do you think?
Tell me the truth. | /ˈtel mi ðə ˈtruːθ/ | 跟我说实话 | 一词多义：“说”：say 后接说的内容，tell 后接人，speak 接语言，talk 指交谈。say the truth ✗ → tell the truth ✓
I'm studying for an exam. | /aɪm ˈstʌdiɪŋ fər ən ɪgˈzæm/ | 我在准备考试 | 一词多义：“学”：learn 指学会 (learn to swim)，study 指花时间学习、备考。
I don't agree. | /aɪ ˈdoʊnt əˈgriː/ | 我不同意 | 中式英语：“我不同意”不是 I'm not agree. ✗。agree 是动词，前面不需要 be 动词。
`,
"数量表达": `
three books | /ˈθriː ˈbʊks/ | 三本书 | 英语数可数名词不用量词：数字后面直接跟名词，名词加复数 -s。
two cats | /ˈtuː ˈkæts/ | 两只猫 | 中文的“只、条、头”英语都没有。复数 -s 要读出来。
a car | /ə ˈkɑːr/ | 一辆车 | 单数可数名词前用冠词 a，就相当于“一辆”。
five people | /ˈfaɪv ˈpiːpl/ | 五个人 | people 本身就是复数，不加 -s。一个人是 a person。
two children | /ˈtuː ˈtʃɪldrən/ | 两个孩子 | child 的复数是不规则的 children。
some information | /ˈsʌm ˌɪnfərˈmeɪʃn/ | 一些信息 | information 不可数：an information ✗、informations ✗。
a piece of advice | /ə ˈpiːs əv ədˈvaɪs/ | 一条建议 | advice 不可数，要数就用 a piece of：two pieces of advice ✓，two advices ✗。
two pieces of furniture | /ˈtuː ˈpiːsɪz əv ˈfɜːrnɪtʃər/ | 两件家具 | furniture 不可数，复数加在 piece 上：pieces。
a piece of news | /ə ˈpiːs əv ˈnuːz/ | 一条新闻 / 一个消息 | news 虽然以 s 结尾，却是不可数名词，动词用单数：The news is good. 也可以说 an item of news。
a cup of coffee | /ə ˈkʌp əv ˈkɔːfi/ | 一杯咖啡 | 热饮用 cup。两杯：two cups of coffee。
a glass of water | /ə ˈglæs əv ˈwɔːtər/ | 一杯水 | 冷饮、玻璃杯用 glass。中文都说“杯”，英语要分 cup 和 glass。
a bottle of water | /ə ˈbɑːtl əv ˈwɔːtər/ | 一瓶水 | water 不可数，按瓶数就说 two bottles of water。
a slice of bread | /ə ˈslaɪs əv ˈbred/ | 一片面包 | bread 不可数：a bread ✗。
a loaf of bread | /ə ˈloʊf əv ˈbred/ | 一条面包 | 整条面包用 loaf，复数是 loaves。
a bowl of rice | /ə ˈboʊl əv ˈraɪs/ | 一碗米饭 | rice 不可数，两碗是 two bowls of rice。
a pair of shoes | /ə ˈper əv ˈʃuːz/ | 一双鞋 | 成双成对的东西用 a pair of，后面的名词用复数。
a pair of jeans | /ə ˈper əv ˈdʒiːnz/ | 一条牛仔裤 | 中文说“一条”，英语因为有两条裤腿，用 a pair of。glasses（眼镜）、scissors（剪刀）也一样。
a lot of homework | /ə ˈlɑːt əv ˈhoʊmwɜːrk/ | 很多作业 | homework 不可数：homeworks ✗、many homework ✗，用 a lot of 或 much。
two pieces of luggage | /ˈtuː ˈpiːsɪz əv ˈlʌgɪdʒ/ | 两件行李 | luggage / baggage 不可数，按件数要用 pieces。
a sheet of paper | /ə ˈʃiːt əv ˈpeɪpər/ | 一张纸 | paper 当“纸”讲时不可数；a paper 是“一份报纸”或“一篇论文”。
`
};
