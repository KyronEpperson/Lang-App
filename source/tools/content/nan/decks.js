/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   nan-en: pron = KK phonetic symbols made by tools/content/nan/kk.js from the zh-style IPA (tools/content/nan/PRON-RULES.md); must match profile.json pronPattern.
   Deck names are FINAL (tools/content/nan/DECKNAMES.md). The last two decks are nan-only (docs/profiles/nan.md §9.3). Meanings and notes are written Taigi in MOE characters (docs/briefs/nan-digest.md). */
module.exports = {
"相借問": `
Hello. | /həˈlo/ | 你好 | 上基本的相借問，啥物場合、對啥人攏會使用。
Hi! | /ˈhaɪ/ | 你好（較輕鬆） | 比 Hello 較輕鬆、較親切。佇美國，同事之間嘛定定講 Hi。
Hey! | /ˈhe/ | 喂 / 你好（熟似的人） | 朋友之間用。對無熟似的人講，可能會予人感覺無禮貌。
Good morning. | /ˈgʊd ˈmɔrnɪŋ/ | 早安 | 中晝進前攏會使用，嘛會使簡單講 Morning!
Good afternoon. | /ˈgʊd ˌæftɚˈnun/ | 午安（下晡見面） | 大約中晝 12 點到暗時 6 點。口氣較正式，佇店頭佮公司定定聽著。台語一般干焦講「你好」。
Good evening. | /ˈgʊd ˈivnɪŋ/ | 你好（暗時見面） | 暗時見面的相借問。Good night 干焦相辭的時才用。
How are you? | /ˈhaʊ ɚ jʊ/ | 你好無？ | 這句是相借問，毋是真正欲問你最近按怎。輕鬆應一句 Good, thanks. You? 就好。
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈju/ | 我真好，多謝。你咧？ | 課本的 I'm fine, thank you. 聽起來較硬，I'm good 較自然。
What's up? | /ˈwʌts ˈʌp/ | 最近按怎？ / 有啥物代誌？ | 熟似的人隨口相借問，免認真報告最近按怎。一般應 Not much.
Not much. | /ˈnɑt ˈmʌtʃ/ | 無啥物特別的 | 應 What's up? 上捷用的講法，閣會使倒問一句 Not much, you?
How's it going? | /ˈhaʊz ɪt ˈgoɪŋ/ | 最近好無？ / 敢順利？ | How are you? 的口語版，會使應 Pretty good!
Nice to meet you. | /ˈnaɪs tə ˈmit jʊ/ | 真歡喜熟似你 | 頭一擺見面才用。回應：Nice to meet you, too.
Long time no see! | /ˈlɔŋ ˈtaɪm ˈno ˈsi/ | 真久無看著矣！ | 一般認為這句是對中文直接翻過去的，講英語的人嘛定定講。較正式：It's been a while.
See you later. | /ˈsi jʊ ˈletɚ/ | 後擺見 | 就算無約欲閣見面，相辭的時嘛會使隨口講。
Take care. | /ˈtek ˈkɛr/ | 保重 | 溫暖的相辭話，嘛定定寫佇訊息的尾仔。
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | 祝你今仔日順序！ | 店員收錢了後定定講。應一句 You too! 就好。
Bye! | /ˈbaɪ/ | 再會！ | 台灣人定定講「掰掰」，毋過大人之間講 Bye-bye 聽起來較囡仔氣，講 Bye! 就夠。
Good night. | /ˈgʊd ˈnaɪt/ | 好睏 / 晚安 | 干焦暗時相辭抑是欲去睏的時才用。見面相借問愛講 Good evening。night 的 n 毋通讀做 l (light)。
`,
"自我介紹": `
My name is Amy. | /maɪ ˈnem ɪz ˈemɪ/ | 我叫做 Amy | 平常較濟講 I'm Amy. 講全名的時，英文名佇頭前、姓佇後壁：Amy Lin。name 的 n 毋通讀做 l。
Please call me Jay. | /ˈpliz ˈkɔl mɪ ˈdʒe/ | 叫我 Jay 就好 | 欲予對方用你的英文名抑是簡稱叫你的時講。真濟台灣人本底就有英文名，直接用就好。
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔl jʊ/ | 我欲按怎稱呼你？ | 對方的名歹讀，抑是想欲知影對方的暱稱的時，真好用。
Where are you from? | /ˈwɛr ɚ jʊ frʌm/ | 你是佗位人？ | 佇外國上先會予人問著的問題之一。
I'm from Taiwan. | /aɪm frəm ˌtaɪˈwɑn/ | 我是台灣人 | Taiwan 頭前無加冠詞 the。from 的 f 是頂排喙齒輕輕觸下脣，毋通讀做 h；r 嘛愛讀出來。
I live in Taipei. | /aɪ ˈlɪv ɪn ˌtaɪˈpe/ | 我蹛佇台北 | live 的 v 愛用頂排喙齒輕輕觸下脣，聲帶振動，毋通讀做 b；母音是短的 /ɪ/，讀傷長就變做 leave。
I'm a student. | /aɪm ə ˈstudṇt/ | 我是學生 | 職業頭前一定愛加冠詞 a / an。I'm student. ✗ 是上捷看著的錯誤。
What do you do? | /ˈwʌt də jʊ ˈdu/ | 你咧做啥物頭路？ | 問職業的標準講法，比 What's your job? 較婉轉。
I work at a bank. | /aɪ ˈwɝk ət ə ˈbæŋk/ | 我佇銀行上班 | 公司、所在頭前用 at：I work at Google.
I work in marketing. | /aɪ ˈwɝk ɪn ˈmɑrkɪtɪŋ/ | 我做行銷 | 領域、部門頭前用 in，佮 at（公司）分開。
I'm 25 years old. | /aɪm ˌtwɛntɪˈfaɪv ˈjɪrz ˈold/ | 我 25 歲 | years 是複數，尾仔的 s 愛讀出來。頭一擺見面就問人幾歲，可能較無禮貌。
I'm really into hiking. | /aɪm ˈriəlɪ ɪntə ˈhaɪkɪŋ/ | 我真佮意爬山 | 講興趣的時，比 My hobby is… 較自然。
I like watching movies. | /aɪ ˈlaɪk ˈwɑtʃɪŋ ˈmuvɪz/ | 我佮意看電影 | like 後壁接動作，用 -ing 形式抑是 to + 原形動詞。美國講 movie，film 較正式。
I've been learning English for a year. | /aɪv bɪn ˈlɝnɪŋ ˈɪŋglɪʃ fɚ ə ˈjɪr/ | 我學英語一冬矣 | 對過去一直延續到這馬的代誌，用 have been + -ing（現在完成進行式）。台語講「學一冬矣」，動詞袂變，英語就愛靠動詞的形式。
I'm here on vacation. | /aɪm ˈhɪr ɑn veˈkeʃən/ | 我是來度假的 | 美國講 vacation；holiday 是英式的講法。
I'm married. | /aɪm ˈmærɪd/ | 我結婚矣 | 單身就講 I'm single. 頭一擺見面上好莫問人結婚未。
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgɚ ˈbrʌðɚ/ | 我有一个小弟 | 英語無分「阿兄」佮「小弟」，干焦用 older / younger brother 分。
`,
"求生英語 1": `
Excuse me. | /ɪkˈskjuz mɪ/ | 歹勢 / 借問 | 叫人抑是請人讓路的時用。挵著人了後講 Sorry!
Thank you. | /ˈθæŋk jʊ/ | 多謝 / 勞力 | 台語分「勞力」（請人做代誌）佮「多謝」，英語兩種攏講 Thank you。th 是舌尖輕輕囥佇頂下喙齒中間歕氣，毋通讀做 "sank you" 抑是 "tank you"。
Thanks a lot. | /ˈθæŋks ə ˈlɑt/ | 真多謝 | 比 Thank you 較輕鬆、較親切。
You're welcome. | /jʊr ˈwɛlkəm/ | 免客氣 | 口語嘛定定講 Sure. / No problem. / Anytime.
No problem. | /ˈno ˈprɑbləm/ | 無問題 / 小代誌 | 人共你講多謝的時，真捷用的回應。problem 的 r 佮 l 攏愛讀出來。
I'm sorry. | /aɪm ˈsɑrɪ/ | 失禮 / 真歹勢 | 真正欲會失禮才用。輕輕挵著人，講一句 Sorry! 就夠。
Yes, please. | /ˈjɛs ˈpliz/ | 好，勞力 | 用來回應 Would you like some water? 這款提議。
No, thank you. | /ˈno ˈθæŋk jʊ/ | 毋免，多謝 | 拒絕的時，比干焦講 No 較有禮貌。口語：I'm good, thanks.
Sorry? | /ˈsɑrɪ/ | 啥物？ / 你講啥？ | 句尾聲調向上，意思是「請閣講一擺」。佇美國比 Pardon? 較捷用。
Could you say that again? | /kəd jʊ ˈse ˈðæt əˈgɛn/ | 會使閣講一擺無？ | 聽無就大方問，講英語的人之間嘛定定按呢講。
Could you speak more slowly? | /kəd jʊ ˈspik ˈmɔr ˈslolɪ/ | 會使講較慢咧無？ | 加 please 較有禮貌。
I don't understand. | /aɪ ˈdont ˌʌndɚˈstænd/ | 我聽無 | 有較硬。較婉轉：Sorry, I didn't quite catch that.
Do you speak Taiwanese? | /də jʊ ˈspik ˌtaɪwəˈniz/ | 你會曉講台語無？ | Do you speak…? 比 Can you speak…? 較自然、較有禮貌。Taiwanese 的重音佇上尾一个音節。
I speak a little English. | /aɪ ˈspik ə ˈlɪtḷ ˈɪŋglɪʃ/ | 我會曉講一屑仔英語 | 美式發音內底，little 中央的 t 讀甲若輕輕的 d。
How do you say this in English? | /ˈhaʊ də jʊ ˈse ˈðɪs ɪn ˈɪŋglɪʃ/ | 這个英語按怎講？ | 指物件問，隨學著新單字。注意是 How do you say…?，毋是 How to say…? ✗
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmin/ | 這是啥物意思？ | 指菜單、告示牌問。
Can you help me? | /kən jʊ ˈhɛlp mɪ/ | 你會使鬥相共無？ | 較有禮貌的講法：Could you help me? help 的 l 佮 p 攏愛讀出來。
`,
"求生英語 2": `
Where's the restroom? | /ˈwɛrz ðə ˈrɛstrum/ | 便所佇佗位？ | 美國講 restroom / bathroom；toilet 佇美國是指馬桶本身。
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | 這个偌濟錢？ | 問幾若項：How much are these?
Is there an ATM around here? | /ɪz ðɛr ən ˌe ti ˈɛm əˈraʊnd ˈhɪr/ | 這附近敢有提款機？ | ATM 一字一字讀：A-T-M。
Can I get the Wi-Fi password? | /kən aɪ ˈgɛt ðə ˈwaɪfaɪ ˈpæswɝd/ | 會使共我講 Wi-Fi 密碼無？ | 嘛會使問 Is there Wi-Fi here?
I'm lost. | /aɪm ˈlɔst/ | 我揣無路矣 | 嘛會使提地圖出來問：Where am I on this map? lost 尾仔的 st 兩个音攏愛讀出來。
Can I pay by card? | /kən aɪ ˈpe baɪ ˈkɑrd/ | 會使刷卡無？ | 悠遊卡佮 LINE Pay 佇外國用袂著，愛先準備信用卡。美國真濟所在攏收信用卡，細間店可能有最低消費。
One moment, please. | /ˈwʌn ˈmomənt ˈpliz/ | 請小等一下 | 有禮貌的講法，佇店頭、電話裡定定聽著。
Just a second. | /ˈdʒʌst ə ˈsɛkənd/ | 等一下 | 口語。閣較短：Just a sec.
No worries. | /ˈno ˈwɝɪz/ | 無要緊 | 澳洲特別捷用，美國嘛真常見。
That's okay. | /ˈðæts oˈke/ | 無要緊（人共你會失禮的時） | 人共你會失禮的時講 That's okay! 抑是 Don't worry about it.
Of course. | /əv ˈkɔrs/ | 當然會使 | 答應人的請求的時用。若用來應問題，可能聽起來像「這閣免問？」，口氣愛較軟。
I'm not sure. | /aɪm ˈnɑt ˈʃʊr/ | 我毋是真確定 | 比 I don't know 較婉轉。
I have a question. | /aɪ ˈhæv ə ˈkwɛstʃən/ | 我有一个問題 | 上課、開會的時嘛會使講 Can I ask a question?
Can you write it down? | /kən jʊ ˈraɪt ɪt ˈdaʊn/ | 會使共寫落來無？ | 地址、數字、名聽無清楚的時，上好的辦法。
Can I take a picture? | /kən aɪ ˈtek ə ˈpɪktʃɚ/ | 會使翕相無？ | 佇博物館、店內先問一句，是基本禮貌。
Could you take a picture of us? | /kəd jʊ ˈtek ə ˈpɪktʃɚ əv əs/ | 會使共阮翕一張相無？ | 翕好講一句 Thank you so much!
After you. | /ˈæftɚ ˈju/ | 你先請 | 佇門口、電梯頭前讓人先行的時講。電梯美國講 elevator。
Watch out! | /ˈwɑtʃ ˈaʊt/ | 細膩！ | 有危險的時大聲叫。Look out! 意思仝款。
`,
"問路佮交通": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈgɛt tə ðə ˈsʌbwe ˈsteʃən/ | 地鐵站欲按怎去？ | subway 是美國的地鐵，就是咱的捷運。台北的捷運叫 MRT，毋過佇美國愛講 subway。
Is it far from here? | /ɪz ɪt ˈfɑr frəm ˈhɪr/ | 離遮敢真遠？ | 美式發音 far 尾仔的 r 愛讀出來。
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔkɪŋ ˈdɪstəns/ | 行路敢會到？ | 嘛會使問 Can I walk there?
Go straight. | /ˈgo ˈstret/ | 直直行 | Go straight for two blocks. 美國定定用 block（一个街仔口的距離）講遠近。
Turn left at the corner. | /ˈtɝn ˈlɛft ət ðə ˈkɔrnɚ/ | 佇轉角向倒手爿斡 | 佇紅綠燈遐：at the light。left 尾仔的 ft 愛讀出來。
It's on your right. | /ɪts ɑn jʊr ˈraɪt/ | 佇你的正手爿 | right 開頭是 r，喙脣小可圓，舌尖無觸著任何所在。台語無 r，毋通讀做 light。
It's across the street. | /ɪts əkrɔs ðə ˈstrit/ | 佇對面 | across from… = 佇……的對面。
It's next to the bank. | /ɪts ˈnɛkst tə ðə ˈbæŋk/ | 佇銀行邊仔 | next to 內底兩个 t 連做伙，干焦讀一个；毋過 next 的 /ks/ 袂使省。
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoz ˌdaʊnˈtaʊn/ | 佗一條線去市中心？ | downtown 頭前無加 to。line 尾仔的 n 愛讀出來。
Where do I transfer? | /ˈwɛr də aɪ trænsˈfɝ/ | 佇佗位轉車？ | 捷運、公車的轉乘，英語攏講 transfer。
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgo tə ðɪ ˈɛrpɔrt/ | 這台公車敢有到機場？ | 母音頭前的 the 讀 /ðɪ/。
Which stop should I get off at? | /ˈwɪtʃ ˈstɑp ʃəd aɪ ˈgɛt ˈɔf æt/ | 我愛佇佗一站落車？ | get off = 落車（公車、捷運）。介系詞 at 囥佇句尾。
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔstən ˈpliz/ | 一張去波士頓的車票，勞力 | 目的地頭前用 to。
Round trip or one way? | /ˈraʊnd ˈtrɪp ɚ ˈwʌn ˈwe/ | 來回抑是單程？ | 美國講 round trip / one way。
Can you take me to this address? | /kən jʊ ˈtek mɪ tə ˈðɪs ˈædrɛs/ | 麻煩載我去這个地址 | 坐計程車的時，共手機頂的地址予司機看，就袂出錯。計程車美國叫 taxi 抑是 cab。
Could you pull over here? | /kəd jʊ ˈpʊl ˈovɚ ˈhɪr/ | 會使佇遮停車無？ | 欲落車的時講。Right here is fine. 嘛會使。
How long does it take? | /ˈhaʊ ˈlɔŋ dəz ɪt ˈtek/ | 愛偌久？ | 回答：About 20 minutes.
Is this seat taken? | /ɪz ˈðɪs ˈsit ˈtekən/ | 這位敢有人坐？ | 無人就會應 No, go ahead. seat 的母音是長的 /i/，sit 的 /ɪ/ 短閣放鬆，兩字毋通讀做仝款。
`,
"餐廳點菜": `
A table for two, please. | /ə ˈtebḷ fɚ ˈtu ˈpliz/ | 兩位，勞力 | 美國餐廳一般愛等服務生來安排座位。
Do you have a reservation? | /də jʊ ˈhæv ə ˌrɛzɚˈveʃən/ | 你有訂位無？ | 服務生會按呢問。回答：Yes, under Lin.
Can I see the menu? | /kən aɪ ˈsi ðə ˈmɛnju/ | 會使看菜單無？ | menu 的重音佇頭前。
What do you recommend? | /ˈwʌt də jʊ ˌrɛkəˈmɛnd/ | 恁有啥物推薦？ | 嘛會使問 What's popular here?
I'll have the steak. | /aɪl ˈhæv ðə ˈstek/ | 我欲牛排 | 點菜的基本句型：I'll have + 菜名。steak 尾仔的 k 愛輕輕讀出來。
Can I get a Coke? | /kən aɪ ˈgɛt ə ˈkok/ | 我欲一杯可樂 | 可樂一般講 Coke。get a 連讀，美式聽起來若 "geda"。
Medium rare, please. | /ˈmidɪəm ˈrɛr ˈpliz/ | 牛排三分熟，勞力 | 用來應 How would you like your steak? 五分熟是 medium，全熟是 well done。
No onions, please. | /ˈno ˈʌnjənz ˈpliz/ | 毋免洋蔥，勞力 | 嘛會使講 Can I get it without onions?
I'm allergic to peanuts. | /aɪm əˈlɝdʒɪk tə ˈpinʌts/ | 我對塗豆過敏 | allergic 的重音佇第二音節。名詞「過敏」是 allergy。
Is it spicy? | /ɪz ɪt ˈspaɪsɪ/ | 敢會薟？ | 驚薟會使講 Not too spicy, please. 欲無薟的就問 Is there anything mild?
Could we get some water? | /kəd wɪ ˈgɛt ˈsʌm ˈwɔtɚ/ | 會使予阮一寡水無？ | 美國餐廳的冰水一般免錢。美式發音內底，water 的 t 讀甲若輕輕的 d。
Everything was great. | /ˈɛvrɪθɪŋ wəz ˈgret/ | 逐項攏真好食 | 服務生問 How is everything? 的時按呢應。
Can we get the check, please? | /kən wɪ ˈgɛt ðə ˈtʃɛk ˈpliz/ | 麻煩結帳 | 美國講 the check（英式講 the bill）。美國餐廳一般坐佇位頂付錢。
Can we split the bill? | /kən wɪ ˈsplɪt ðə ˈbɪl/ | 會使分開算無？ | 嘛講 separate checks。split 頭前三个子音 /spl/ 連做伙，中央毋通加母音。
It's on me. | /ɪts ɑn ˈmi/ | 我請 | My treat! 意思仝款。
Can I get this to go? | /kən aɪ ˈgɛt ˈðɪs tə ˈgo/ | 這會使外帶無？ | to go 就是外帶。食賰的想欲包轉去，嘛會使講 Can I get a box?
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkludɪd/ | 敢有包小費？ | 台灣有的餐廳收一成服務費；美國餐廳一般愛另外予 15% 到 20% 的小費。
`,
"咖啡店佮便利商店": `
Can I get an iced Americano? | /kən aɪ ˈgɛt ən ˈaɪst əˌmɛrɪˈkɑno/ | 我欲一杯冰美式 | 點飲料上捷用 Can I get…? iced 尾仔是 /st/，t 真輕，毋過毋通規个省掉。
What size would you like? | /ˈwʌt ˈsaɪz wəd jʊ ˈlaɪk/ | 你欲大杯抑細杯？ | 店員會按呢問。
Small, please. | /ˈsmɔl ˈpliz/ | 細杯，勞力 | 星巴克用 tall / grande / venti。
For here or to go? | /fɚ ˈhɪr ɚ tə ˈgo/ | 內用抑是外帶？ | 佮台灣店員問的仝款。for here = 內用，to go = 外帶。
Can I get oat milk instead? | /kən aɪ ˈgɛt ˈot ˈmɪlk ɪnˈstɛd/ | 會使換燕麥奶無？ | instead = 代替。可能愛加錢。milk 的 l 佮 k 攏愛讀出來。
Less ice, please. | /ˈlɛs ˈaɪs ˈpliz/ | 冰少一寡，勞力 | 去冰：No ice, please. 甜度嘛會使講 less sugar。
Decaf, please. | /ˈdikæf ˈpliz/ | 欲低咖啡因的，勞力 | decaffeinated 的簡稱。
Can I get a name for the order? | /kən aɪ ˈgɛt ə ˈnem fɚ ðɪ ˈɔrdɚ/ | 請問你的名？（寫佇杯仔頂） | 店員欲佇杯仔頂寫名，講你的英文名就好，像 Amy。
Do you need a bag? | /də jʊ ˈnid ə ˈbæg/ | 你敢欲提袋仔？ | 無愛就講 No, I'm good. bag 尾仔的 g 愛有聲，毋通讀做 back。
Can I get a receipt? | /kən aɪ ˈgɛt ə rɪˈsit/ | 會使予我收據無？ | receipt 內底的 p 無發音。台灣的發票，英語嘛講 receipt。
Where can I find batteries? | /ˈwɛr kən aɪ ˈfaɪnd ˈbætərɪz/ | 電池佇佗位？ | 問物件囥佇佗位的萬用句。
Do you sell phone chargers? | /də jʊ ˈsɛl ˈfon ˈtʃɑrdʒɚz/ | 恁有賣手機充電器無？ | 嘛會使講 Do you have…?
Can you heat this up? | /kən jʊ ˈhit ˈðɪs ˈʌp/ | 會使共我熥燒無？ | 佇超商請店員微波就講這句。heat this up 愛連做伙讀。
That's it. | /ˈðæts ˈɪt/ | 按呢就好 | 店員問 Anything else? 的時按呢應。
Here you go. | /ˈhɪr jʊ ˈgo/ | 予你 | 交錢抑是交物件的時講。
Keep the change. | /ˈkip ðə ˈtʃendʒ/ | 免找矣 | 佇美國坐計程車、提外送的時，定定用來代替小費。
`,
"買物件佮付錢": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | 我看看咧，多謝 | 店員問 Can I help you find anything? 的時用。
Do you have this in a medium? | /də jʊ ˈhæv ˈðɪs ɪn ə ˈmidɪəm/ | 這件敢有中號的？ | 尺寸：small / medium / large。
Do you have it in black? | /də jʊ ˈhæv ɪt ɪn ˈblæk/ | 敢有烏色的？ | 色頭前用 in。black 的 l 愛讀出來，毋通讀做 "back"。
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑn/ | 會使試穿無？ | try on = 試（衫、鞋仔）。
Where's the fitting room? | /ˈwɛrz ðə ˈfɪtɪŋ ˈrum/ | 試衫間佇佗位？ | fitting room 就是試穿的房間。
It's too big. | /ɪts ˈtu ˈbɪg/ | 傷大矣 | 傷細：It's too small.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | 有淡薄仔絚 | 傷鬆：It's a bit loose.
Is this on sale? | /ɪz ˈðɪs ɑn ˈsel/ | 這有咧拍折無？ | on sale = 拍折；for sale = 咧賣。真捷混做伙。
Can you give me a discount? | /kən jʊ ˈgɪv mɪ ə ˈdɪskaʊnt/ | 會使算較俗咧無？ | 美國一般的店無咧講價，干焦跳蚤市場抑是買二手物才會講價。
I'll take it. | /aɪl ˈtek ɪt/ | 我欲買這件 | 決定欲買的時講。兩件以上：I'll take them.
Cash or card? | /ˈkæʃ ɚ ˈkɑrd/ | 現金抑是刷卡？ | 付錢的時一定會聽著。
Do you take Apple Pay? | /də jʊ ˈtek ˈæpḷ ˈpe/ | 會使用 Apple Pay 無？ | take = 接受（某種付款方式）。悠遊卡佮 LINE Pay 佇外國一般袂使用。
Can I get a refund? | /kən aɪ ˈgɛt ə ˈrifʌnd/ | 會使退錢無？ | 收據愛會記得留咧。
I'd like to exchange this. | /aɪd ˈlaɪk tʊ ɪksˈtʃendʒ ˈðɪs/ | 我想欲換這件 | 補充原因：It's the wrong size.
Can you gift wrap it? | /kən jʊ ˈgɪft ˈræp ɪt/ | 會使共我包做禮物無？ | wrap 的 w 無發音。
Does that include tax? | /dəz ˈðæt ɪnˈklud ˈtæks/ | 敢有含稅？ | 台灣的標價已經含稅；美國的標價通常猶未含稅，付錢的時會加一寡。
`,
"數字、時間佮日期": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | 這馬幾點？ | 問無熟似的人：Excuse me, do you have the time? time 尾仔的 m 愛合喙讀出來。
It's three thirty. | /ɪts ˈθri ˈθɝtɪ/ | 三點半 | half past three 嘛著。three 開頭是 th，毋通讀做 "sree" 抑是 tree。
It's a quarter to five. | /ɪts ə ˈkwɔrtɚ tə ˈfaɪv/ | 四點四十五分 | quarter = 15 分鐘。嘛會使講 four forty-five。
At noon | /ət ˈnun/ | 中晝 12 點 | 半暝是 midnight，比 12 a.m. / 12 p.m. 較袂舞毋著。
What's the date today? | /ˈwʌts ðə ˈdet təˈde/ | 今仔日幾號？ | 問拜幾：What day is it today? 美國寫日期先月後日，5/3 是 5 月 3 號，佮台灣仝款。
It's May 3rd. | /ɪts ˈme ˈθɝd/ | 5 月 3 號 | 日期用序數讀：first, second, third, fourth… 樓層嘛用序數：美國的 first floor 就是台灣的 1 樓。
My birthday is in October. | /maɪ ˈbɝθde ɪz ɪn ɑkˈtobɚ/ | 我的生日佇 10 月 | 月份頭前用 in，確定的日子頭前用 on：on October 5th。
On Monday | /ɑn ˈmʌnde/ | （佇）拜一 | 禮拜幾頭前用 on。逐禮拜一：on Mondays。
Next weekend | /ˈnɛkst ˈwikɛnd/ | 下禮拜的週末 | next / last / this 頭前無加介系詞。
The day after tomorrow | /ðə ˈde æftɚ təˈmɑro/ | 後日 | 前日：the day before yesterday。
Thirteen or thirty? | /ˌθɝˈtin ɚ ˈθɝtɪ/ | 13 抑是 30？ | 13 的重音佇後壁（-teen 較長，尾仔有 n），30 的重音佇頭前。聽價數的時一定愛確認清楚。
Fifteen dollars | /ˌfɪfˈtin ˈdɑlɚz/ | 15 箍 | $15.50 讀做 fifteen fifty。新台幣佮美金攏叫 dollars，欲分清楚就講 NT dollars / US dollars。複數尾仔的 s 愛讀出來。
Two hundred and fifty | /ˈtu ˈhʌndrəd ənd ˈfɪftɪ/ | 兩百五十 (250) | 美國定定省略 and：two hundred fifty。
Ten thousand | /ˈtɛn ˈθaʊzṇd/ | 一萬 (10,000) | 英語無「萬」這个單位，數字三位一組：10 thousand。台語的「5 萬」愛講 fifty thousand。
One million | /ˈwʌn ˈmɪljən/ | 一百萬 (1,000,000) | 一千萬 = ten million，一億 = one hundred million。
Twice a week | /ˈtwaɪs ə ˈwik/ | 一禮拜兩擺 | once（一擺）、twice（兩擺）、three times（三擺）。
In ten minutes | /ɪn ˈtɛn ˈmɪnɪts/ | 10 分鐘後 | 講將來時間的 in = ……了後，毋是「10 分鐘以內」。minutes 尾仔的 /ts/ 愛讀出來。
`,
"開講": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwikɛnd/ | 你週末過甲按怎？ | 拜一一定會問。用一兩句簡單應，閣倒問對方。
It was pretty relaxing. | /ɪt wəz ˈprɪtɪ rɪˈlæksɪŋ/ | 誠輕鬆 | pretty 佇遮是「誠、相當」，毋是「媠」。
Any plans for the weekend? | /ˈɛnɪ ˈplænz fɚ ðə ˈwikɛnd/ | 週末有啥物計畫無？ | 拜五一定會問。無計畫就講 Not really, just relaxing.
Nice weather today, huh? | /ˈnaɪs ˈwɛðɚ təˈde ˈhʌ/ | 今仔日天氣真好喔 | 天氣是佮啥人攏會使開講的上安全話題。台語的「食飽未？」佇英語毋是相借問。
It's freezing today. | /ɪts ˈfrizɪŋ təˈde/ | 今仔日寒甲會死 | 熱的時：It's boiling! 抑是 It's so hot!
How long have you lived here? | /ˈhaʊ ˈlɔŋ həv jʊ ˈlɪvd ˈhɪr/ | 你蹛遮偌久矣？ | 回答：About three years. lived 尾仔的 /vd/ 愛讀出來。
Have you been to Taiwan? | /həv jʊ bɪn tə ˌtaɪˈwɑn/ | 你捌來過台灣無？ | 問經驗用 have been to。台語的「捌……過」佇遮對應現在完成式。
What do you do for fun? | /ˈwʌt də jʊ ˈdu fɚ ˈfʌn/ | 你有閒的時攏做啥物？ | 比 What's your hobby? 較自然。
Have you seen any good shows lately? | /həv jʊ ˈsin ˈɛnɪ ˈgʊd ˈʃoz ˈletlɪ/ | 最近敢有看著啥物好看的節目？ | show = 連續劇、綜藝這款節目。
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | 聽起來真好耍 | 回應對方的時用。That sounds great! 嘛真好。
Same here. | /ˈsem ˈhɪr/ | 我嘛是 | 口語直接講 Same!
Me neither. | /ˈmi ˈniðɚ/ | 我嘛無 / 我嘛毋 | 附和否定句：I don't like it. → Me neither.（袂使講 Me too）
I know, right? | /aɪ ˈno ˈraɪt/ | 著啊！ | 非常同意的時的口語講法。
Oh, really? | /ˈo ˈriəlɪ/ | 喔，真的喔？ | 表示有興趣的回應，句尾向上。
By the way | /baɪ ðə ˈwe/ | 順紲講 | 換話題的時用。訊息內底寫 BTW。
How's work? | /ˈhaʊz ˈwɝk/ | 頭路順利無？ | 熟似的人的相借問，會使應 Busy, but good! 薪水、厝稅、年歲、體重攏無適合提來開講。
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔkɪŋ tə jʊ/ | 佮你開講真歡喜 | 自然結束對話的時講。
`,
"心情佮反應": `
I'm so happy for you! | /aɪm ˈso ˈhæpɪ fɚ jʊ/ | 我真替你歡喜！ | 對方有好代誌的時講。
Congratulations! | /kənˌgrætʃəˈleʃənz/ | 恭喜！ | 一定愛加 -s，尾仔的 /nz/ 嘛愛讀出來。簡稱 Congrats!
That's awesome! | /ˈðæts ˈɔsəm/ | 傷讚矣！ | 美國人非常捷用的反應。
No way! | /ˈno ˈwe/ | 哪有可能！ | 真驚訝的時講。嘛會使表示拒絕：No way, I'm not doing that.
Seriously? | /ˈsɪrɪəslɪ/ | 你講真的？ / 認真的？ | 看口氣，會使表示驚訝，嘛會使表示無耐性。
I'm so tired. | /aɪm ˈso ˈtaɪɚd/ | 我真忝 | 忝甲欲死：I'm exhausted.
I'm stressed out. | /aɪm ˈstrɛst ˈaʊt/ | 我壓力真大 | 比 I have stress 較自然。
I'm bored. | /aɪm ˈbɔrd/ | 我真無聊 | 注意：I'm boring 的意思是「我是一个真無聊的人」。
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | 我真興奮 / 真期待 | 有值得期待的代誌的時講。-ed 形容詞表示家己的感覺。
I'm nervous. | /aɪm ˈnɝvəs/ | 我真緊張 | 面試、演講進前。安慰人：Don't be nervous.
That's too bad. | /ˈðæts ˈtu ˈbæd/ | 真可惜 | 小可的遺憾。嚴重的代誌用下一句。
I'm sorry to hear that. | /aɪm ˈsɑrɪ tə ˈhɪr ˈðæt/ | 聽著這个消息，我真艱苦 | 毋是會失禮，是安慰。sorry 佇遮是「遺憾、艱苦」。
What a relief! | /ˈwʌt ə rɪˈlif/ | 好佳哉！ | 佮 Phew! 做伙講較自然。
Oh my gosh! | /ˈo maɪ ˈgɑʃ/ | 天啊！ | Oh my God 較婉轉的講法。訊息內底寫 OMG。
I'm upset. | /aɪm ʌpˈsɛt/ | 我心內真鬱卒 | 佇受氣佮傷心中間的感覺。
That's so annoying. | /ˈðæts ˈso əˈnɔɪɪŋ/ | 真討厭 | 當面共人講 You're annoying 口氣真重。
I can't wait! | /aɪ ˈkænt ˈwet/ | 我等袂赴矣！ | 字面意思是「無法度閣等」，表示非常期待。美式 can't 的母音是 /æ/，尾仔的 t 真輕，愛靠重音聽出否定。
It's not a big deal. | /ɪts ˈnɑt ə ˈbɪg ˈdil/ | 這無啥物 | 對方歹勢的時，用來予對方放心。
`,
"呵咾佮好感": `
You look great! | /jʊ ˈlʊk ˈgret/ | 你看起來真讚！ | 呵咾外表用 You look…，熟似的人之間真自然。
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuz/ | 你的鞋仔真媠 | love = 非常佮意。對無熟似的人嘛會使隨口呵咾一句。
That color looks good on you. | /ˈðæt ˈkʌlɚ ˈlʊks ˈgʊd ɑn jʊ/ | 這个色真適合你 | look good on + 人 = 某人穿起來好看。美式拼字是 color，英式是 colour。
You have a great smile. | /jʊ ˈhæv ə ˈgret ˈsmaɪl/ | 你笑起來真好看 | 熟似了後才用的溫暖呵咾。
You're so funny. | /jʊr ˈso ˈfʌnɪ/ | 你真好笑 | funny = 好笑的；fun = 予人歡喜、好耍的。
Great job! | /ˈgret ˈdʒɑb/ | 做甲真好！ | 職場、學校攏會使用。Nice work! 嘛仝款。
I'm proud of you. | /aɪm ˈpraʊd əv jʊ/ | 我替你感覺驕傲 | 對厝裡的人、朋友講，頂司嘛會對下跤的人講。
You did it! | /jʊ ˈdɪd ɪt/ | 你做到矣！ | 對達成目標的人講。
Your Taiwanese is really good! | /jʊr ˌtaɪwəˈniz ɪz ˈriəlɪ ˈgʊd/ | 你的台語講甲真好！ | 對咧學台語的外國朋友講，對方會真歡喜。Taiwanese 的重音佇上尾一个音節。
You have good taste. | /jʊ ˈhæv ˈgʊd ˈtest/ | 你真有品味 | 呵咾人穿插、音樂、厝內佈置的品味。
I really enjoyed spending time with you. | /aɪ ˈriəlɪ ɪnˈdʒɔɪd ˈspɛndɪŋ ˈtaɪm wɪð jʊ/ | 佮你做伙真歡喜 | 約會、聚會煞的時講。enjoyed 尾仔干焦加一个 /d/，毋通加音節。
Do you want to grab coffee sometime? | /də jʊ ˈwɑnt tə ˈgræb ˈkɔfɪ ˈsʌmtaɪm/ | 有閒做伙去啉咖啡好無？ | want to 佇口語讀做 wanna。grab = 隨便食、啉一寡。
I miss you. | /aɪ ˈmɪs jʊ/ | 我真想你 | 對分開兩地的人講，厝裡的人、朋友攏會使。
You mean a lot to me. | /jʊ ˈmin ə ˈlɑt tə mɪ/ | 你對我真重要 | 對朋友、伴侶表達真心的時講。
You're a lifesaver! | /jʊr ə ˈlaɪfsevɚ/ | 你救我一命！ | 就算干焦小可鬥相共，嘛會使誇張按呢表達感謝。
You made my day! | /jʊ ˈmed maɪ ˈde/ | 你予我今仔日真歡喜！ | 收著窩心的話抑是禮物的時講。
That's very kind of you. | /ˈðæts ˈvɛrɪ ˈkaɪnd əv jʊ/ | 你真好心 | 得著幫助抑是呵咾的時，有禮貌的回應。
`,
"工作佮電子批": `
I hope this email finds you well. | /aɪ ˈhop ˈðɪs ˈimel ˈfaɪndz jʊ ˈwɛl/ | 希望你一切攏好 | 正式電子批的開頭問候。較輕鬆：I hope you're doing well. 美式的電子批較短，嘛較隨意。
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tʊ ˈæsk əbaʊt ðə ˈskɛdʒul/ | 我寫這封批是欲問時間表 | 頭一句就講明來意：I'm writing to + 目的。
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔrt/ | 報告我已經附上矣 | Please find attached… 較正式，嘛較硬。
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndɚ əbaʊt təˈmɑroz ˈmitɪŋ/ | 提醒你明仔載的會議 | 婉轉催人的講法。
Let me know if you have any questions. | /ˈlɛt mɪ ˈno ɪf jʊ ˈhæv ˈɛnɪ ˈkwɛstʃənz/ | 有啥物問題隨時共我講 | 電子批結尾上捷用的一句。
Could you send me the file by Friday? | /kəd jʊ ˈsɛnd mɪ ðə ˈfaɪl baɪ ˈfraɪde/ | 拜五進前會使共檔案寄予我無？ | by = 佇……進前（期限）；until = 一直到……
Sorry for the late reply. | /ˈsɑrɪ fɚ ðə ˈlet rɪˈplaɪ/ | 歹勢，遮爾晏才回 | 嘛會使講 Thanks for your patience.
Thanks for getting back to me. | /ˈθæŋks fɚ ˈgɛtɪŋ ˈbæk tə mɪ/ | 多謝你回覆我 | get back to = 回覆、閣聯絡。
Best regards, | /ˈbɛst rɪˈgɑrdz/ | 祝好（批的結尾） | 一般電子批用 Best regards 就好。Yours sincerely 較正式，大部分用佇正式的批。較熟：Best, / Thanks,
Let's schedule a meeting. | /ˈlɛts ˈskɛdʒul ə ˈmitɪŋ/ | 咱來約一个時間開會 | schedule 美式讀 /ˈskɛdʒul/，頭前是 sk。
I'm running late. | /aɪm ˈrʌnɪŋ ˈlet/ | 我會較晏到 | 佇路裡先通知：I'll be there in 10.
Can we push the meeting to 3? | /kən wɪ ˈpʊʃ ðə ˈmitɪŋ tə ˈθri/ | 會議會使延到 3 點無？ | 提早用 move up：Can we move it up to 1?
I'll get back to you. | /aɪl ˈgɛt ˈbæk tə jʊ/ | 我確定了後才回你 | 無法度隨回答的時，用來爭取時間。
Can you walk me through it? | /kən jʊ ˈwɔk mɪ θru ɪt/ | 會使一步一步共我講明無？ | walk through = 一步一步講予人聽。
Let's touch base next week. | /ˈlɛts ˈtʌtʃ ˈbes ˈnɛkst ˈwik/ | 咱下禮拜閣聯絡 | 意思是簡單交代一下進度。
What's the deadline? | /ˈwʌts ðə ˈdɛdlaɪn/ | 期限是當時？ | When is this due? 意思仝款。
I'm working from home today. | /aɪm ˈwɝkɪŋ frəm ˈhom təˈde/ | 我今仔日佇厝上班 | 縮寫 WFH。
I'm off tomorrow. | /aɪm ˈɔf təˈmɑro/ | 我明仔載歇睏 | 請假：I'm taking a day off tomorrow.
Thanks for all your hard work. | /ˈθæŋks fɚ ˈɔl jʊr ˈhɑrd ˈwɝk/ | 辛苦你矣 / 多謝你的付出 | 台語的「辛苦你矣」佇英語無完全對應的講法。下班相辭直接講 See you tomorrow! 就好。
`,
"電話佮簡訊縮寫": `
Hello, this is Amy. | /həˈlo ˈðɪs ɪz ˈemɪ/ | 喂，我是 Amy | 敲電話的時無講 I'm Amy，是講 This is Amy。
Can I speak to Mr. Lin? | /kən aɪ ˈspik tə ˈmɪstɚ ˈlɪn/ | 請問林先生佇咧無？ | 稱呼後壁接姓：Mr. Lin，毋是 Mr. 加名。較有禮貌：May I speak to…?
Who's calling, please? | /ˈhuz ˈkɔlɪŋ ˈpliz/ | 請問你是佗一位？ | 接電話的人問。
Hold on a second. | /ˈhold ˈɑn ə ˈsɛkənd/ | 小等咧 | 敲電話抑是講話的時，請對方等一下。hold 尾仔的 /ld/ 愛讀出來。
Sorry, you're breaking up. | /ˈsɑrɪ jʊr ˈbrekɪŋ ˈʌp/ | 歹勢，收訊無好，聽無清楚 | break up =（電話聲）斷斷續續。嘛有「分手」的意思。
Can I call you back? | /kən aɪ ˈkɔl jʊ ˈbæk/ | 我等一下才敲予你，好無？ | 無閒的時：I'm in a meeting. Can I call you back?
I'll text you. | /aɪl ˈtɛkst jʊ/ | 我傳訊息予你 | 美國共傳簡訊、傳 LINE 這款訊息攏叫 text。text 尾仔的 /kst/ 三个子音攏愛讀。
I'm on my way. | /aɪm ɑn maɪ ˈwe/ | 我咧來的路裡矣 | 訊息內底寫 OMW。
LOL | /ˌɛl o ˈɛl/ | 哈哈 (laughing out loud) | 毋是真正大笑，就親像 LINE 內底隨手拍的「哈哈」。
BRB | /ˌbi ɑr ˈbi/ | 隨轉來 (be right back) | 開講、拍電動的時暫時離開用。
BTW | /ˌbi ti ˈdʌbəlju/ | 順紲一提 (by the way) | 換話題的時用。
TBH | /ˌti bi ˈetʃ/ | 老實講 (to be honest) | 囥佇句頭抑是句尾攏會使。
IDK | /ˌaɪ di ˈke/ | 毋知 (I don't know) | 定定寫做小寫 idk。
OMG | /ˌo ɛm ˈdʒi/ | 天啊 (oh my God) | 口語嘛會直接講 O-M-G!
ASAP | /ˌe ɛs e ˈpi/ /ˈesæp/ | 愈緊愈好 (as soon as possible) | 職場捷用，毋過對頂司上好予一个具體的日子，較有禮貌。
TTYL | /ˌti ti waɪ ˈɛl/ | 後擺才閣開講 (talk to you later) | 結束開講的時用。台灣人佇訊息尾仔加的「啦」「喔」是咱的習慣，英語訊息免加。
NVM | /ˌɛn vi ˈɛm/ | 無代誌矣，算矣 (never mind) | 收回拄才的問題的時用。
FYI | /ˌɛf waɪ ˈaɪ/ | 予你參考 (for your information) | 工作電子批、即時通訊內底真捷用。
`,
"旅行（機場佮飯店）": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔrt/ | 這是我的護照 | 辦登機、過入境檢查的時交過去講。
I'm here for sightseeing. | /aɪm ˈhɪr fɚ ˈsaɪtsiɪŋ/ | 我來觀光 | 用來應入境問題 What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪŋ fɚ ə ˈwik/ | 我欲蹛一禮拜 | 用來應 How long are you staying?
I'm staying at the Hilton. | /aɪm ˈsteɪŋ ət ðə ˈhɪltən/ | 我蹛希爾頓飯店 | 用來應 Where are you staying?
Window or aisle? | /ˈwɪndo ɚ ˈaɪl/ | 窗仔邊抑是走道邊？ | aisle 的 s 無發音。
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsit ˈpliz/ | 我想欲走道邊的位，勞力 | 窗仔邊的位：a window seat。
Where is the baggage claim? | /ˈwɛr ɪz ðə ˈbægɪdʒ ˈklem/ | 行李提領處佇佗位？ | claim 的 l 佮尾仔的 m 攏愛讀出來。
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | 我的行李揣無矣 | luggage 是不可數名詞，無複數：a piece of luggage。
I have a reservation under Lin. | /aɪ ˈhæv ə ˌrɛzɚˈveʃən ʌndɚ ˈlɪn/ | 我用「林」這个姓訂房 | under + 訂房人的姓名。講姓就好，有需要就一字一字拼出來：L-I-N。
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃɛkaʊt/ | 幾點退房？ | 想欲較晏走：Can I get a late check-out?
Can I check in early? | /kən aɪ ˈtʃɛk ˈɪn ˈɝlɪ/ | 會使較早入住無？ | check in 愛連讀。
Is breakfast included? | /ɪz ˈbrɛkfəst ɪnˈkludɪd/ | 敢有包早頓？ | breakfast 讀 /ˈbrɛkfəst/，毋是 break + fast。
The air conditioner isn't working. | /ðɪ ˈɛr kənˈdɪʃənɚ ˈɪzṇt ˈwɝkɪŋ/ | 冷氣歹去矣 | 口語簡稱 AC。
Could I get some extra towels? | /kəd aɪ ˈgɛt ˈsʌm ˈɛkstrə ˈtaʊəlz/ | 會使加予我幾條仔面巾無？ | could I 愛連讀。towels 是複數，尾仔的 /z/ 愛讀出來。
Can you hold my bags until 3? | /kən jʊ ˈhold maɪ ˈbægz əntɪl ˈθri/ | 會使共我顧行李顧到 3 點無？ | 退房了後寄行李。hold = 替人保管。
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈled/ | 我的班機延誤矣 | 取消是 canceled。flight 的 l 愛讀出來，毋通讀做 fight。
Where's gate 12? | /ˈwɛrz ˈget ˈtwɛlv/ | 12 號登機門佇佗位？ | 英語共號碼囥佇後壁：gate 12、room 305。
Do I need to take my laptop out? | /də aɪ ˈnid tə ˈtek maɪ ˈlæptɑp ˈaʊt/ | 我敢愛共筆電提出來？ | 過安檢的時問。
`,
"病院佮緊急狀況": `
Help! | /ˈhɛlp/ | 救人喔！ | 緊急的時大聲叫。
Call 911! | /ˈkɔl ˈnaɪn ˈwʌn ˈwʌn/ | 緊敲 911！ | 美國的緊急電話是 911（讀做 nine one one）；台灣救護車、火災是 119，警察是 110。
I need a doctor. | /aɪ ˈnid ə ˈdɑktɚ/ | 我愛看醫生 | 情況緊急：I need an ambulance.
I don't feel well. | /aɪ ˈdont ˈfil ˈwɛl/ | 我人無爽快 | 上捷用的講法。
I have a headache. | /aɪ ˈhæv ə ˈhɛdek/ | 我頭殼疼 | 疼的部位 + ache：stomachache, toothache。headache 是可數名詞，頭前愛加冠詞 a。
I have a fever. | /aɪ ˈhæv ə ˈfivɚ/ | 我咧發燒 | fever 中央的 v 愛振動聲帶，毋通讀做 b 抑是 f；開頭的 f 嘛毋通讀做 h。
My stomach hurts. | /maɪ ˈstʌmək ˈhɝts/ | 我腹肚疼 | 部位 + hurts。hurts 尾仔的 /ts/ 愛讀出來。
I have a sore throat. | /aɪ ˈhæv ə ˈsɔr ˈθrot/ | 我嚨喉疼 | throat 是嚨喉，毋是頷頸 (neck)。開頭是 th 加 r，毋通讀做 "sroat"。
I feel dizzy. | /aɪ ˈfil ˈdɪzɪ/ | 我頭殼眩 | 想欲吐：I feel sick. / I feel nauseous. dizzy 中央是有聲的 /z/，毋是 /s/。
I sprained my ankle. | /aɪ ˈsprend maɪ ˈæŋkḷ/ | 我的跤目扭著矣 | sprain = 扭著。手腕是 wrist。
Is there a pharmacy near here? | /ɪz ðɛr ə ˈfɑrməsɪ nɪr ˈhɪr/ | 這附近敢有藥局？ | 美國嘛叫 drugstore（像 CVS）。
Do I need a prescription? | /də aɪ ˈnid ə prɪˈskrɪpʃən/ | 敢愛醫生的處方？ | 佇美國，無處方就買會著的藥叫 over-the-counter。
I lost my wallet. | /aɪ ˈlɔst maɪ ˈwɑlɪt/ | 我的錢袋仔拍無去矣 | 手機拍無去就講 phone。失物招領處是 lost and found。
Someone stole my phone. | /ˈsʌmwʌn ˈstol maɪ ˈfon/ | 有人共我的手機偷提去矣 | stole 是 steal（偷）的過去式。
Where is the police station? | /ˈwɛr ɪz ðə pəˈlis ˈsteʃən/ | 警察局佇佗位？ | police 的重音佇後壁。
I need to contact my consulate. | /aɪ ˈnid tə ˈkɑntækt maɪ ˈkɑnsələt/ | 我愛聯絡我的領事館 | 護照拍無去的時一定用會著。台灣佇外國的辦事處有領事館的功能。consulate 是領事館，embassy 是大使館。
I have travel insurance. | /aɪ ˈhæv ˈtrævḷ ɪnˈʃʊrəns/ | 我有買旅遊保險 | 去醫療費用貴的國家，一定愛先買。
`,
"片語動詞": `
pick up | /ˈpɪk ˈʌp/ | （駛車）載人 / 抾起來 | I'll pick you up at 7. 代名詞 (you, it) 囥佇中央。
give up | /ˈgɪv ˈʌp/ | 放棄 | Don't give up! 放棄做某項代誌用 -ing：give up smoking。
figure out | /ˈfɪgjɚ ˈaʊt/ | 想出辦法 / 想予清楚 | I can't figure out this app.（這个 app 我毋知欲按怎用）
find out | /ˈfaɪnd ˈaʊt/ | 發現 / 得知 | 指探聽著消息。figure out 是用頭腦想辦法解決問題。
look for | /ˈlʊk fɔr/ | 揣 | I'm looking for my keys. 揣著就用 find。
look after | /ˈlʊk ˈæftɚ/ | 照顧 | Can you look after my cat? 美國嘛定定講 take care of。
look forward to | /ˈlʊk ˈfɔrwɚd tu/ | 期待 | to 後壁接名詞抑是 -ing：I'm looking forward to seeing you. 袂使接原形動詞。
run out of | /ˈrʌn ˈaʊt əv/ | 用完 | 用完的物件囥佇 of 後壁：We ran out of milk.（牛奶啉完矣）
turn on | /ˈtɝn ˈɑn/ | 開（電器） | 「開電火」愛講 turn on the light，無講 open the light ✗。代名詞囥中央：Turn it on.
turn off | /ˈtɝn ˈɔf/ | 關（電器） | 「關電火」無講 close the light ✗。代名詞囥中央：Turn it off. (turn off it ✗)
turn down | /ˈtɝn ˈdaʊn/ | 拒絕 / 轉細聲 | 兩个意思攏真捷用：She turned down the offer. / Turn it down!
put off | /ˈpʊt ˈɔf/ | 延後 / 拖 | 日常口語比 postpone 較捷用：Stop putting it off!
show up | /ˈʃo ˈʌp/ | 出現 / 到場 | 指人到現場：He didn't show up to the party.（伊無來 party）
hang out | /ˈhæŋ ˈaʊt/ | 做伙出去耍 | 佮朋友出去耍用 hang out，無用 play（play 大部分用佇囡仔、遊戲、運動）。
check out | /ˈtʃɛk ˈaʊt/ | 看覓 / 查看 | Check out this video! 嘛有「退房」的意思。
work out | /ˈwɝk ˈaʊt/ | 運動 / 順利解決 | 去健身房運動定定講 work out：I work out every day. / It'll work out.（代誌會順利解決）
come up with | /ˈkʌm ˈʌp wɪð/ | 想出（主意） | 想出主意、藉口、辦法：She came up with a great idea.
get along with | /ˈgɛt əˈlɔŋ wɪð/ | 佮……處甲好 | 關係好：I get along with my coworkers.（我佮同事處甲真好）
calm down | /ˈkɑm ˈdaʊn/ | 冷靜落來 | calm 的 l 無發音。對咧受氣的人按呢講，可能予對方閣較受氣。
set up | /ˈsɛt ˈʌp/ | 裝設 / 設定 / 安排 | 裝設機器、準備會議等等：Can you help me set up my printer?
break up | /ˈbrek ˈʌp/ | 分手 | They broke up last month. 佮啥人分手：break up with。
fill out | /ˈfɪl ˈaʊt/ | 填（表格） | Please fill out this form. 英式講 fill in。
grow up | /ˈgro ˈʌp/ | 大漢 | 講佇佗位大漢：I grew up in Tainan.（我佇台南大漢）
wake up | /ˈwek ˈʌp/ | 精神 | 睏醒是 wake up，起床是 get up。
`,
"發音陷阱": `
rice | /ˈraɪs/ | 米 / 飯 | r：喙脣小可圓，舌尖向後捲，無觸著喙內任何所在。台語無 r，讀做 l 就變做 lice（蝨母）。
lice | /ˈlaɪs/ | 蝨母 | l：舌尖頂佇頂排喙齒後壁才放開。共 I like rice 講做 lice 就歹勢矣。
right | /ˈraɪt/ | 正手爿 / 著 | r 開頭，舌尖無觸著喙頂。佮 light 分清楚。
light | /ˈlaɪt/ | 光 / 電火 / 輕 | l 開頭，舌尖頂佇頂排喙齒後壁。台語的 l 佮 n 定定混做伙，英語愛分清楚：light 毋是 night。
fan | /ˈfæn/ | 電風 / 粉絲 | f：頂排喙齒輕輕觸下脣。台語無 f（「風」讀 hong），讀做 h 就毋著。/æ/ 喙愛開大，尾仔的 n 愛讀出來。
pan | /ˈpæn/ | 平底鼎 | 佮 pen 分清楚：pan 的 /æ/ 喙開甲比 pen 的 /ɛ/ 較大。
coffee | /ˈkɔfɪ/ | 咖啡 | 中央的 f 是頂排喙齒觸下脣，毋通讀做 h ("cohee")。重音佇頭前，第二音節輕閣短。
copy | /ˈkɑpɪ/ | 影印 / 複本 | 美式的母音是 /ɑ/，喙開開，無圓。中央是 p，佮 coffee 的 f 分清楚。
think | /ˈθɪŋk/ | 想 / 認為 | /θ/：舌尖輕輕囥佇頂下喙齒中間歕氣。台語無這个音，讀做 s 就變做 sink。尾仔的 /ŋk/ 嘛愛讀出來。
sink | /ˈsɪŋk/ | 洗碗槽 / 沉落去 | 開頭是 s，舌尖佇喙齒後壁。佮 think 是一對。
three | /ˈθri/ | 三 | th 加 r：舌尖先囥佇頂下喙齒中間，才向後捲。讀做 s 會變 "sree"，讀做 t 就像 tree。
tree | /ˈtri/ | 樹仔 | /tr/ 連做伙讀，中央毋通加母音，r 嘛袂使省。
this | /ˈðɪs/ | 這 | 有聲的 /ð/：舌尖囥佇頂下喙齒中間，聲帶振動，毋通讀做 d ("dis") 抑是 l。
very | /ˈvɛrɪ/ | 真 / 非常 | v：頂排喙齒輕輕觸下脣，聲帶振動。台語有 b 無 v，讀做 b 就變做 berry。
berry | /ˈbɛrɪ/ | 莓仔 | b：上下脣合起來才放開。台語本底就有 b（「肉」bah），這个音你袂有問題；重點是佮 very 分清楚。
vote | /ˈvot/ | 投票 | v 開頭，毋是 b，嘛毋是 w。尾仔的 t 輕輕收。
boat | /ˈbot/ | 船 | b 開頭，台語的 b 拄好用會著。雙母音 /o/ 後壁閣有 t，毋通吞掉。
walk | /ˈwɔk/ | 行路 | l 無發音，母音是喙開開的 /ɔ/，尾仔的 k 愛讀出來。
work | /ˈwɝk/ | 工作 | 美式是捲舌的 /ɝ/。佮 walk 是真捷混的一對。
beach | /ˈbitʃ/ | 海墘 | /i/ 是長音，喙角向兩爿拉絚。讀做短閣鬆的 /ɪ/ 會變做罵人的話。
leave | /ˈliv/ | 離開 | 長音 /i/，尾仔的 v 有聲。佮短音的 live（蹛）分清楚。
live | /ˈlɪv/ | 蹛 / 生活 | 短閣鬆的 /ɪ/。尾仔的 v 愛振動聲帶，毋通讀做 b 抑是 f。
banana | /bəˈnænə/ | 芎蕉 | 重音佇中央，頭前佮後壁兩个 a 攏弱讀做 /ə/。台語逐个音節攏平平重，英語毋是。
hotel | /hoˈtɛl/ | 飯店 | 重音佇後壁的 tel。台語無 -l 尾，尾仔的 l 舌尖愛觸起去，毋通讀做 "ho-te-o"。
milk | /ˈmɪlk/ | 牛奶 | l 隨接 k：舌尖先觸頂排喙齒後壁，才輕輕讀出 k，兩个音攏袂使省。
McDonald's | /məkˈdɑnḷdz/ | 麥當勞 | 重音佇 Don，Mc 弱讀做 /mək/。照「麥當勞」三个字平平重的節奏講，外國人真歹聽有。
night | /ˈnaɪt/ | 暗時 / 暝 | n：舌尖頂佇頂排喙齒後壁，氣對鼻空出。台語 n 佮 l 定定無分，讀做 l 就變做 light。
know | /ˈno/ | 知影 | k 無發音。n 開頭，讀做 l 就變做 low。
low | /ˈlo/ | 低 | l 開頭，舌尖頂佇頂排喙齒後壁，氣對舌的兩爿出。
free | /ˈfri/ | 自由的 / 免費的 | f：頂排喙齒輕輕觸下脣，毋通讀做 h。佮 three 是一對：three 的舌尖佇頂下喙齒中間。
they | /ˈðe/ | 𪜶 (in)，伊的複數 | /ð/：舌尖囥佇頂下喙齒中間，聲帶振動。讀做 d 就變做 day。
day | /ˈde/ | 日 / 一工 | d 開頭，舌尖佇頂排喙齒後壁，無伸出來。佮 they 是一對。
wary | /ˈwɛrɪ/ | 謹慎的 | w：喙脣圓圓，無觸著喙齒。佮 very 分清楚：very 是頂排喙齒觸下脣。
vest | /ˈvɛst/ | 背心 | v 開頭，頂排喙齒觸下脣。讀做 b 會變 "best"，讀做 w 就變做 west。尾仔的 /st/ 愛讀齊。
west | /ˈwɛst/ | 西爿 | w 開頭，喙脣圓圓，喙齒無觸著喙脣。
zip | /ˈzɪp/ | 拉鍊 / 拉起來 | /z/ 的喙形佮 s 仝款，毋過聲帶愛振動。無振動就變做 sip。
sip | /ˈsɪp/ | 細細口仔啉 | 開頭是無聲的 s。佮 zip 是一對。
show | /ˈʃo/ | 表演 / 予人看 | /ʃ/：喙脣向前翹、圓圓，舌比 s 較後壁。台語無 /ʃ/，讀做 s 就變做 so；she 佮 see 嘛愛按呢分。
so | /ˈso/ | 所以 / 遮爾 | 開頭是 s，喙脣免向前翹。佮 show 是一對。
full | /ˈfʊl/ | 滿 / 飽 | 短閣鬆的 /ʊ/。讀傷長、傷絚就變做 fool。開頭的 f 毋通讀做 h。
fool | /ˈful/ | 戇人 | 長音 /u/，喙脣收甲較圓、較絚。尾仔的 l 舌尖愛觸起去。
bad | /ˈbæd/ | 䆀 / 歹 | /æ/ 喙開大。開無夠就變做 bed。
bed | /ˈbɛd/ | 眠床 | /ɛ/ 喙開甲比 /æ/ 較細。尾仔的 d 有聲，毋通讀做 bet：台語有 -t 尾，無 -d 尾。
`,
"英語慣用語": `
It's a piece of cake. | /ɪts ə ˈpis əv ˈkek/ | 真簡單 | 非常簡單：The test was a piece of cake.
I'm on cloud nine. | /aɪm ɑn ˈklaʊd ˈnaɪn/ | 我歡喜甲欲飛起來 | 特別歡喜的時講。
It costs an arm and a leg. | /ɪt ˈkɔsts ən ˈɑrm ənd ə ˈlɛg/ | 貴參參 | 貴甲愛提手佮跤去換。
Let's call it a day. | /ˈlɛts ˈkɔl ɪt ə ˈde/ | 今仔日就到遮 | 結束工作、讀冊的時講，開會嘛真自然。
I'm feeling under the weather. | /aɪm ˈfilɪŋ ʌndɚ ðə ˈwɛðɚ/ | 我有淡薄仔無爽快 | 親像欲寒著的小可無爽快，佮天氣無關係。
I need to hit the books. | /aɪ ˈnid tə ˈhɪt ðə ˈbʊks/ | 我愛認真讀冊矣 | 考試進前講。毋是真正去拍冊。
Once in a blue moon | /ˈwʌns ɪn ə ˈblu ˈmun/ | 真罕得 | 非常少有：I only eat fast food once in a blue moon.
Better late than never. | /ˈbɛtɚ ˈlet ðən ˈnɛvɚ/ | 較慢做嘛比無做較好 | 鼓勵較晏起步的人。
Don't beat around the bush. | /ˈdont ˈbit əraʊnd ðə ˈbʊʃ/ | 莫踅來踅去 | 叫對方直接講重點。
It's not my cup of tea. | /ɪts ˈnɑt maɪ ˈkʌp əv ˈti/ | 這毋是我佮意的款 | 婉轉表示無佮意。
Let's get the ball rolling. | /ˈlɛts ˈgɛt ðə ˈbɔl ˈrolɪŋ/ | 咱來開始 | 會議、計畫開始的時講。
I'll keep my fingers crossed. | /aɪl ˈkip maɪ ˈfɪŋgɚz ˈkrɔst/ | 我會替你祈求好運 | 定定配食指佮中指相疊的手勢。
Hang in there. | /ˈhæŋ ˈɪn ˈðɛr/ | 閣忍耐一下 | 對處境艱難的人講。這款場合的「加油」會使講 Hang in there；Add oil 外國人大部分聽無。
Speak of the devil! | /ˈspik əv ðə ˈdɛvḷ/ | 講著曹操，曹操就到！ | 拄講著某人，伊就出現。
The ball is in your court. | /ðə ˈbɔl ɪz ɪn jʊr ˈkɔrt/ | 換你決定 | 對網球來的。
My lips are sealed. | /maɪ ˈlɪps ɚ ˈsild/ | 我絕對袂講出去 | 字面意思是「喙脣封起來矣」。
It's on the tip of my tongue. | /ɪts ɑn ðə ˈtɪp əv maɪ ˈtʌŋ/ | 話到喙邊煞想袂起來 | 明明知影，毋過一時講袂出來的時。
I'm all ears. | /aɪm ˈɔl ˈɪrz/ | 我專心咧聽 | 意思是「你講，我認真咧聽」。
When pigs fly. | /wɛn ˈpɪgz ˈflaɪ/ | 除非日頭對西爿出來 | 絕對無可能發生的代誌：He'll clean his room when pigs fly.
`,
"影劇佮俚語": `
Spill the tea. | /ˈspɪl ðə ˈti/ | 緊講有啥物八卦 | tea = 八卦、內幕。朋友之間的俚語。
No cap. | /ˈno ˈkæp/ | 真的，無騙你 | 少年人的俚語。cap = 白賊話。
That song slaps. | /ˈðæt ˈsɔŋ ˈslæps/ | 這首歌真好聽 | slap =（音樂等等）非常讚，嘛會使形容食物。
I'm dead. | /aɪm ˈdɛd/ | 笑死我 | 訊息內底定定配 💀 表情符號，毋是真正死去。
Low-key | /ˌloˈki/ | 有淡薄仔 / 偷偷仔 | I low-key love this song. 相反是 high-key（無掩崁）。
I'm obsessed with this song. | /aɪm əbˈsɛst wɪð ˈðɪs ˈsɔŋ/ | 我迷著這首歌 | obsessed = 著迷，大部分用佇正面的意思。
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | 咧講啥物？ | 問電影、連續劇的劇情。about 頭一个音節弱讀做 /ə/。
No spoilers! | /ˈno ˈspɔɪlɚz/ | 莫爆雷！ | Don't spoil it! 意思仝款。
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑtʃt ðə ˈhol ˈsizṇ/ | 我一喙氣共規季看完 | binge-watch 就是「追劇」，一喙氣看真濟集。
The ending was so good. | /ðɪ ˈɛndɪŋ wəz ˈso ˈgʊd/ | 結局真好看 | 無好看：The ending was disappointing.
It's a must-watch. | /ɪts ə ˈmʌstwɑtʃ/ | 一定愛看 | 大力推薦的時講。
Plot twist! | /ˈplɑt ˈtwɪst/ | 劇情大逆轉！ | 生活內底有意外嘛會使講。
It's overrated. | /ɪts ˌovɚˈretɪd/ | 名過其實 | 相反是 underrated（予人看輕）。
That scene gave me chills. | /ˈðæt ˈsin ˈgev mɪ ˈtʃɪlz/ | 彼幕看甲我規身軀起雞母皮 | 因為感動抑是緊張起雞母皮。
Who's your favorite singer? | /ˈhuz jʊr ˈfevərɪt ˈsɪŋɚ/ | 你上佮意佗一个歌手？ | 開講音樂、追星的時問。問團體內底上佮意佗一个成員，就講 Who's your favorite member? favorite 是美式拼字。
Are you kidding me? | /ɚ jʊ ˈkɪdɪŋ mɪ/ | 你咧滾笑？ | 電影、連續劇常見的對白，會使表示驚訝，嘛會使表示無滿意。
I've got your back. | /aɪv ˈgɑt jʊr ˈbæk/ | 我挺你 / 有我佇咧 | 意思是會一直支持你、保護你。
Gotcha. | /ˈgɑtʃə/ | 了解 / 掠著你矣！ | got you 的縮寫，上捷用來表示「了解」。
Let's do this! | /ˈlɛts ˈdu ˈðɪs/ | 來，開始！ | 開始進前替大家拍氣。
`,
"英文字母": `
A | /ˈe/ | 字母 A（小寫 a） | apple 的 A。名稱是 /ˈe/，佮 day 的母音仝款。
B | /ˈbi/ | 字母 B（小寫 b） | bag 的 B。上下脣合起來才放開。台語本底就有 b，這个你真好讀。電話內底容易佮 P、D 聽毋著，會使講 B as in boy。
C | /ˈsi/ | 字母 C（小寫 c） | coffee 的 C。名稱佮 see 仝音，開頭是 /s/，毋是 /ʃ/。
D | /ˈdi/ | 字母 D（小寫 d） | dog 的 D。佮 T 干焦差聲帶振動，電話內底容易聽毋著。
E | /ˈi/ | 字母 E（小寫 e） | email 的 E。名稱是長音 /ˈi/；/ˈaɪ/ 是 I 的名稱。
F | /ˈɛf/ | 字母 F（小寫 f） | fan 的 F。名稱干焦一个音節：頂排喙齒輕輕觸下脣就收，後壁無加母音，毋是 "ef-fu"。coffee 內底的 ff 講 double F。
G | /ˈdʒi/ | 字母 G（小寫 g） | go 的 G。名稱是 /ˈdʒi/，J 才是 /ˈdʒe/，毋通共兩个倒反。
H | /ˈetʃ/ | 字母 H（小寫 h） | hotel 的 H。名稱是母音開頭，所以講 an H。干焦一个音節，/tʃ/ 後壁無加母音。
I | /ˈaɪ/ | 字母 I（小寫 i） | idea 的 I。佮「我」的 I 仝音；/ˈi/ 是 E 的名稱。
J | /ˈdʒe/ | 字母 J（小寫 j） | job 的 J。名稱是 /ˈdʒe/，容易佮 G 的 /ˈdʒi/ 倒反。
K | /ˈke/ | 字母 K（小寫 k） | key 的 K。佮 OK 後半的音仝款。
L | /ˈɛl/ | 字母 L（小寫 l） | light 的 L。名稱干焦一个音節：舌尖頂佇頂排喙齒後壁就收。台灣真濟人講 "el-lo"，後壁加一个母音，英語無按呢讀。
M | /ˈɛm/ | 字母 M（小寫 m） | milk 的 M。上下脣合起來收。電話內底容易佮 N 聽毋著，會使講 M as in Mary。
N | /ˈɛn/ | 字母 N（小寫 n） | name 的 N。舌尖頂佇頂排喙齒後壁，氣對鼻空出。電話內底容易佮 M 混，會使講 N as in name。
O | /ˈo/ | 字母 O（小寫 o） | OK 的 O。美式是 /o/，收尾的時喙脣圓起來。講電話號碼的時，數字 0 嘛定定讀做 O。
P | /ˈpi/ | 字母 P（小寫 p） | pan 的 P。上下脣爆開歕氣，佮 B 分清楚。台語本底 p 佮 b 就有分，這對你袂有問題。
Q | /ˈkju/ | 字母 Q（小寫 q） | question 的 Q。名稱是 /ˈkju/，佮 queue（排隊）仝音。佇英語單字內底，Q 後壁幾乎攏綴 U。
R | /ˈɑr/ | 字母 R（小寫 r） | rice 的 R。美式名稱是 /ˈɑr/：先開喙讀 /ɑ/，才共舌尖向後捲，無觸著任何所在。干焦一个音節，毋是 "a-lu"。
S | /ˈɛs/ | 字母 S（小寫 s） | sorry 的 S。名稱干焦一个音節，用 /s/ 收，後壁無加母音，毋是 "es-su"。/ˈsi/ 是 C 的名稱。class 內底的 ss 講 double S。
T | /ˈti/ | 字母 T（小寫 t） | taxi 的 T。大寫講 capital T，兩个 T 連做伙講 double T。
U | /ˈju/ | 字母 U（小寫 u） | university 的 U。名稱佮 you 仝音，用 /j/ 開頭，所以講 a U。
V | /ˈvi/ | 字母 V（小寫 v） | very 的 V。頂排喙齒輕輕觸下脣，聲帶振動。名稱是 /ˈvi/：台語無 v，真濟人共 V 講做 B 的 /ˈbi/，愛分清楚。
W | /ˈdʌbəlju/ | 字母 W（小寫 w） | water 的 W。名稱是 double u（兩个 U），三个音節攏愛讀出來。
X | /ˈɛks/ | 字母 X（小寫 x） | X-ray（X 光）的 X，毋過 X 較捷出現佇字尾，像 box。名稱是母音開頭，所以講 an X；干焦一个音節，/ks/ 後壁無加母音。
Y | /ˈwaɪ/ | 字母 Y（小寫 y） | yes 的 Y。名稱佮 why 仝音。
Z | /ˈzi/ | 字母 Z（小寫 z） | zero 的 Z。美國人講 zee /ˈzi/，台灣學校教的嘛是 zee（英國講 zed）。有人講做 "zei"，愛改做 /ˈzi/。開頭是有聲的 /z/，毋是 /s/。
`,
"台式英語陷阱": `
Turn on the light. | /ˈtɝn ˈɑn ðə ˈlaɪt/ | 開電火 | 台式英語：「開電火」毋是 open the light ✗。電火、電視、冷氣這款電器的「開」用 turn on。
Turn off the TV. | /ˈtɝn ˈɔf ðə ˌti ˈvi/ | 關電視 | 台式英語：「關電視」毋是 close the TV ✗。電器用 turn off，門窗才用 close。
I'll take you to the station. | /aɪl ˈtek jʊ tə ðə ˈsteʃən/ | 我送你去車站 | 一个詞濟个意思：台語的「提」「送」，英語愛看方向。共人抑是物件送去別位用 take；送來講話的人遮才用 bring。
Can you bring me some water? | /kən jʊ ˈbrɪŋ mɪ ˈsʌm ˈwɔtɚ/ | 會使提一寡水來予我無？ | 一个詞濟个意思：「提來」（向講話的人遮）用 bring，佮 take 的方向相反。
Can you lend me a pen? | /kən jʊ ˈlɛnd mɪ ə ˈpɛn/ | 你會當借我一支筆無？ | 一个詞濟个意思：台語的「借」無分方向。借予人用 lend。Can you borrow me a pen? ✗
Can I borrow your charger? | /kən aɪ ˈbɑro jʊr ˈtʃɑrdʒɚ/ | 你的充電器會使借我用一下無？ | 一个詞濟个意思：共人借來用是 borrow。會記得：lend 是借出，borrow 是借入。
I'm reading a book. | /aɪm ˈridɪŋ ə ˈbʊk/ | 我咧看冊 | 一个詞濟个意思：台語的「看」英語分幾若字。「看冊」用 read，無講 see a book ✗ 抑是 look a book ✗。
I'm watching TV. | /aɪm ˈwɑtʃɪŋ ˌti ˈvi/ | 我咧看電視 | 一个詞濟个意思：看電視、看球賽這款一直看用 watch。watch TV 是固定講法，TV 頭前無加冠詞；指某一台電視才講 the TV：Turn off the TV.
Look at this picture. | /ˈlʊk ət ˈðɪs ˈpɪktʃɚ/ | 你看這張相片 | 一个詞濟个意思：主動去看某項物件用 look at，at 袂使漏；「看著」用 see。
Take this medicine twice a day. | /ˈtek ˈðɪs ˈmɛdɪsṇ ˈtwaɪs ə ˈde/ | 這个藥仔一工食兩擺 | 台式英語：「食藥仔」毋是 eat medicine ✗，愛用 take。medicine 泛指藥的時是不可數名詞。
Tell me the truth. | /ˈtɛl mɪ ðə ˈtruθ/ | 共我講實話 | 一个詞濟个意思：「講」英語分幾若字：say 後壁接講的內容，tell 後壁接人，speak 接語言，talk 指開講。say the truth ✗ → tell the truth ✓
I really like it. | /aɪ ˈriəlɪ ˈlaɪk ɪt/ | 我真佮意 | 台式英語：「我真佮意」毋是 I very like it. ✗。very 袂使直接修飾動詞，愛講 I really like it. 抑是 I like it very much.
What do you think? | /ˈwʌt də jʊ ˈθɪŋk/ | 你感覺按怎？ | 台式英語：「你感覺按怎？」無講 How do you think? ✗。問意見用 What do you think?
Although it rained, we went hiking. | /ɔlðo ɪt ˈrend wɪ ˈwɛnt ˈhaɪkɪŋ/ | 雖然有落雨，阮猶是去爬山 | 台式英語：「雖然……毋過」英語干焦用一个連接詞。Although it rained, but we went… ✗
Because I was tired, I went to bed early. | /bɪkəz aɪ wəz ˈtaɪɚd aɪ ˈwɛnt tə ˈbɛd ˈɝlɪ/ | 因為我真忝，所以真早就去睏矣 | 台式英語：「因為……所以」干焦用一个，because 佮 so 袂使做伙出現。go to bed 無加冠詞。
There's a bank near here. | /ðɛrz ə ˈbæŋk nɪr ˈhɪr/ | 這附近有一間銀行 | 台式英語：台語的「有」會使是 have，嘛會使是 there is。「遮有一間銀行」毋是 There has a bank. ✗，愛講 There's a bank.
Many people have this problem. | /ˈmɛnɪ ˈpipḷ ˈhæv ˈðɪs ˈprɑbləm/ | 真濟人攏有這个問題 | 台式英語：There are many people have… ✗ 一句內底有兩个動詞。講 Many people have…，抑是加 who：There are many people who have…
It's difficult for me to wake up early. | /ɪts ˈdɪfɪkəlt fɚ mɪ tə ˈwek ˈʌp ˈɝlɪ/ | 我欲早起真困難 | 台式英語：I am difficult to wake up early. ✗ 是共台語直接翻過去。difficult / easy 的主詞用 it：It's difficult for me to…
Wait for me. | /ˈwet fɚ mɪ/ | 等我一下 | 台式英語：「等我」毋是 Wait me. ✗。wait 後壁愛加 for 才會使接人。
I'm leaving now. | /aɪm ˈlivɪŋ ˈnaʊ/ | 我先來走 | 台式英語：「我先走」直接翻做 I go first. ✗，對方聽袂出你咧相辭。講 I'm leaving now. 抑是 I have to go.
Let's discuss the plan. | /ˈlɛts dɪˈskʌs ðə ˈplæn/ | 咱來討論這个計畫 | 台式英語：discuss about the plan ✗。discuss 後壁直接接欲討論的物件，無加 about。
Good luck! | /ˈgʊd ˈlʌk/ | 加油！ / 祝你好運！ | 台式英語：Add oil! 是對「加油」逐字翻的，外國人大部分聽無。對外國人講 Good luck! / You can do it! / Go for it!
I take the subway to work. | /aɪ ˈtek ðə ˈsʌbwe tə ˈwɝk/ | 我坐捷運去上班 | 台式英語：MRT 佇台北逐家知，毋過佇美國愛講 subway（紐約、波士頓攏按呢叫）。坐捷運、坐公車的「坐」用 take。
I ride a scooter. | /aɪ ˈraɪd ə ˈskutɚ/ | 我騎機車 | 台式英語：台灣的「機車」毋是 machine car ✗。細台的叫 scooter，大台的叫 motorcycle；騎用 ride。
Mr. Lin, I have a question. | /ˈmɪstɚ ˈlɪn ‖ aɪ ˈhæv ə ˈkwɛstʃən/ | 林老師，我有一个問題 | 台式英語：叫老師毋通講 Teacher! ✗。英語國家用 Mr. / Ms. 加姓：Mr. Lin、Ms. Wang。
Two beers, please. | /ˈtu ˈbɪrz ˈpliz/ | 兩罐啤酒，勞力 | 外來語：台語的啤酒 (bì-lù) 是對日語來的，加一个母音。英語 beer 干焦一个音節 /bɪr/，尾仔無 "lu"；複數是 beers。
I went there last year. | /aɪ ˈwɛnt ˈðɛr ˈlæst ˈjɪr/ | 我舊年有去 | 台式英語：台語用「有去」講這件代誌有發生，毋過英語毋通講 I have went there ✗ 抑是 I have go there ✗。過去的代誌用過去式 went。
It's very crowded. | /ɪts ˈvɛrɪ ˈkraʊdɪd/ | 人山人海 | 台式英語：people mountain people sea ✗ 是逐字翻的。英語講 It's very crowded. 抑是 It's packed.
I take the bus to school. | /aɪ ˈtek ðə ˈbʌs tə ˈskul/ | 我坐公車去學校 | 外來語：台語講巴士 (bá-suh)，是對日語來的，尾仔加一个母音。英語 bus 是 /bʌs/，用 s 收尾，毋通加 "suh"。
`,
"字尾發音": `
bag | /ˈbæg/ | 袋仔 | 尾仔的 g 愛有聲，頭前的母音小可拉長。台語無 -g 尾，讀做無聲的 k 就變做 back。
back | /ˈbæk/ | 尻脊骿 / 後壁 | 尾仔是無聲的 k，母音較短。台語的 -k 尾（像「六」la̍k）干焦做喙形無放氣，英語的 k 上好輕輕放出來。
feed | /ˈfid/ | 飼 | 尾仔是有聲的 d，母音 /i/ 拉長。台語無 -d 尾，讀做 t 就變做 feet。
feet | /ˈfit/ | 跤（複數） | 尾仔是無聲的 t，母音較短。foot 的複數是 feet，無加 s。
rope | /ˈrop/ | 索仔 | 雙母音 /o/ 後壁閣有 p：上下脣合起來，才輕輕放開。
robe | /ˈrob/ | 長袍 / 浴袍 | 尾仔是有聲的 b，/o/ 讀甲比 rope 較長。台語有 b 頭無 b 尾，愛特別練。
leaf | /ˈlif/ | 樹葉 | 尾仔是無聲的 f，毋通讀做 h。leave 的尾仔是有聲的 v，母音嘛較長。
cold | /ˈkold/ | 寒 / 冷 | 尾仔 /ld/ 兩个音攏愛讀：舌尖先觸頂排喙齒後壁讀 l，才讀 d。漏掉 l 就變做 code。
code | /ˈkod/ | 密碼 / 程式碼 | /o/ 後壁直接是 d，無 l。佮 cold 是一對。
list | /ˈlɪst/ | 清單 | 尾仔 /st/ 的 t 袂使省，毋通讀做 "lis"，嘛毋通加母音讀做 "lis-tu"。
friends | /ˈfrɛndz/ | 朋友（複數） | 尾仔 /ndz/ 三个子音攏愛讀，毋通讀做 "frens"。複數的 s 佇遮讀 /z/。
asked | /ˈæskt/ | 問（ask 的過去式） | 尾仔是 /skt/：-ed 佇遮干焦讀 /t/，無加音節。毋通干焦讀做 "as"。
months | /ˈmʌnθs/ | 月（複數） | 尾仔 /nθs/ 真歹讀，會使先慢慢讀 month，才加 s。
cats | /ˈkæts/ | 貓（複數） | 尾仔 /ts/ 的 t 佮 s 攏愛讀，毋通讀做 "cass"。少這个音，人聽袂出是複數。
cards | /ˈkɑrdz/ | 卡（複數） | 尾仔 /dz/ 愛有聲。讀做無聲就變做 carts（手推車）。
walked | /ˈwɔkt/ | 行（walk 的過去式） | -ed 佇 k 後壁讀 /t/，規个字干焦一个音節。少 /t/，人聽袂出是過去式。
wanted | /ˈwɑntɪd/ | 想欲（want 的過去式） | 干焦佇 t 抑是 d 後壁，-ed 才加讀一个音節 /ɪd/。其他動詞毋通加音節：enjoyed 毋是 "enjoy-ded"。
time | /ˈtaɪm/ | 時間 | 雙母音 /aɪ/ 後壁愛合喙讀出 m。台語有 -m 尾（像「心」sim），毋過無「雙母音 + m」這款音，真容易吞掉。
like | /ˈlaɪk/ | 佮意 / 親像 | /aɪ/ 後壁閣有 k，毋通讀做 "lai"。
game | /ˈgem/ | 遊戲 / 比賽 | /e/ 愛讀飽，才合喙讀 m，毋通縮短做 "gem"。
nine | /ˈnaɪn/ | 九 | 開頭佮尾仔攏是 n。尾仔的 n 毋通吞掉，開頭的 n 毋通讀做 l。
line | /ˈlaɪn/ | 線 / 隊伍 | l 開頭，n 收尾。佮 nine 干焦差頭一个音。
place | /ˈples/ | 所在 | 開頭 /pl/ 兩个子音連做伙，l 袂使省，若無就變做 pace；嘛毋通加母音讀做 "pu-lace"。
pace | /ˈpes/ | 跤步 / 速度 | p 後壁直接是母音，無 l。佮 place 是一對。
bring | /ˈbrɪŋ/ | 提來 | 開頭是 /br/，r 毋通讀做 l（"bling"），嘛毋通省掉。
present | /ˈprɛzṇt/ | 禮物 / 這馬的 | 開頭是 /pr/，r 袂使省，毋通讀做 "pesent"。尾仔的 /nt/ 嘛愛讀出來。
`
};
