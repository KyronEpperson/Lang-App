/* vi-en extras. DIALOG: key | A | B | bản dịch "A / B" ;  EXAMPLES: key | sentence | bản dịch
   Keys are card targets in decks.js. Names, cities and food localised per docs/profiles/vi.md §9 (Minh, Hanoi, pho). */
exports.DIALOG = `
How are you? | Hi, Jake! How are you? | Good, thanks! How about you? | Chào Jake! Bạn khỏe không? / Khỏe, cảm ơn! Còn bạn?
What's up? | Hey, what's up? | Not much. Just getting some coffee. | Ê, dạo này sao rồi? / Cũng bình thường. Đang đi mua cà phê thôi.
Nice to meet you. | Hi, I'm Minh. Nice to meet you. | Nice to meet you, too. I'm Ryan. | Xin chào, tôi là Minh. Rất vui được gặp bạn. / Tôi cũng rất vui được gặp bạn. Tôi là Ryan.
Long time no see! | Long time no see! How have you been? | I've been great! You look good! | Lâu quá không gặp! Dạo này bạn thế nào? / Tôi ổn lắm! Trông bạn khỏe đấy!
Have a good one! | Here's your receipt. Have a good one! | Thanks, you too! | Hóa đơn của anh/chị đây ạ. Chúc một ngày tốt lành! / Cảm ơn, bạn cũng vậy nhé!
Good night. | I'm going to bed. Good night! | Good night! Sleep well. | Tôi đi ngủ đây. Chúc ngủ ngon! / Ngủ ngon nhé! Ngủ thật say.
Where are you from? | So, where are you from? | I'm from Vietnam. Hanoi, actually. | Vậy bạn đến từ đâu? / Tôi đến từ Việt Nam. Hà Nội.
What do you do? | What do you do? | I'm a designer. I work at a small startup. | Bạn làm nghề gì? / Tôi là nhà thiết kế. Tôi làm ở một công ty khởi nghiệp nhỏ.
What should I call you? | What should I call you? | Just call me Jay. Everyone does. | Tôi nên gọi bạn là gì? / Cứ gọi tôi là Jay. Mọi người đều gọi vậy.
I'm really into hiking. | What do you do on weekends? | I'm really into hiking. I go almost every Saturday. | Cuối tuần bạn thường làm gì? / Tôi rất mê leo núi. Gần như thứ bảy nào tôi cũng đi.
I'm here on vacation. | Are you here for work? | No, I'm here on vacation. | Bạn đến đây công tác à? / Không, tôi đến đây để đi nghỉ.
Excuse me. | Excuse me, is this the line for tickets? | Yes, it is. The end is over there. | Xin lỗi, đây có phải hàng mua vé không? / Đúng rồi. Cuối hàng ở đằng kia.
Thank you. | Here, let me get the door for you. | Oh, thank you! | Để tôi giữ cửa cho bạn. / Ồ, cảm ơn bạn!
Sorry? | Your total is twenty-three fifty. | Sorry? Could you say that again? | Tổng cộng là 23 đô 50 xu. / Xin lỗi, gì cơ? Anh/chị nói lại được không?
Could you speak more slowly? | Take the B line to Central, then transfer to the red line and... | Sorry, could you speak more slowly? | Đi tuyến B đến ga Central, rồi đổi sang tuyến đỏ và… / Xin lỗi, bạn nói chậm hơn được không?
How do you say this in English? | How do you say this in English? | That's a whisk. | Cái này tiếng Anh nói thế nào? / Đó là "whisk" (cái phới đánh trứng).
Can you help me? | Excuse me, can you help me? I'm looking for this hotel. | Sure! It's just around the corner. | Xin lỗi, bạn giúp tôi được không? Tôi đang tìm khách sạn này. / Được chứ! Nó ở ngay góc phố thôi.
No, thank you. | Would you like a bag? | No, thank you. I have one. | Anh/chị có cần túi không? / Không, cảm ơn. Tôi có rồi.
Where's the restroom? | Excuse me, where's the restroom? | It's down the hall, on the left. | Xin lỗi, nhà vệ sinh ở đâu? / Ở cuối hành lang, bên trái.
Can I get the Wi-Fi password? | Can I get the Wi-Fi password? | Sure, it's on the back of your receipt. | Cho tôi xin mật khẩu Wi-Fi được không? / Vâng, nó ở mặt sau hóa đơn.
Could you take a picture of us? | Excuse me, could you take a picture of us? | Of course! Say cheese! | Xin lỗi, bạn chụp giúp chúng tôi một tấm được không? / Tất nhiên rồi! Cười lên nào!
Can you write it down? | The address is 1428 Elm Street. | Sorry, can you write it down? | Địa chỉ là số 1428 phố Elm. / Xin lỗi, bạn viết ra giúp tôi được không?
No worries. | Sorry I'm a little late! | No worries. I just got here, too. | Xin lỗi, tôi đến hơi muộn! / Không sao đâu. Tôi cũng vừa mới đến.
How do I get to the subway station? | How do I get to the subway station? | Go straight two blocks and turn right. You can't miss it. | Đến ga tàu điện ngầm đi thế nào? / Đi thẳng hai dãy nhà rồi rẽ phải. Bạn sẽ thấy ngay.
Is it within walking distance? | Is the museum within walking distance? | Yeah, it's about a ten-minute walk. | Đi bộ đến bảo tàng được không? / Được, đi bộ khoảng mười phút.
Does this bus go to the airport? | Does this bus go to the airport? | No, you need the 42. It stops across the street. | Xe buýt này có đi sân bay không? / Không, bạn phải đi xe số 42. Nó dừng ở bên kia đường.
Which stop should I get off at? | Which stop should I get off at for the museum? | Get off at Park Street. It's three stops from here. | Đi bảo tàng thì tôi nên xuống ở trạm nào? / Xuống ở trạm Park Street. Cách đây ba trạm.
Can you take me to this address? | Can you take me to this address? | Sure. It'll take about twenty minutes. | Anh chở tôi đến địa chỉ này được không? / Được. Mất khoảng hai mươi phút.
How long does it take? | How long does it take to get downtown? | About fifteen minutes by subway. | Vào trung tâm mất bao lâu? / Đi tàu điện ngầm khoảng mười lăm phút.
Is this seat taken? | Excuse me, is this seat taken? | No, go ahead. | Xin lỗi, chỗ này có ai ngồi chưa? / Chưa, bạn cứ ngồi đi.
A table for two, please. | Hi! How many? | A table for two, please. | Xin chào! Mấy người ạ? / Cho tôi bàn hai người.
What do you recommend? | What do you recommend? | The salmon is really popular. | Bạn gợi ý món gì? / Món cá hồi được gọi nhiều lắm ạ.
I'll have the steak. | Are you ready to order? | Yes, I'll have the steak, please. | Anh/chị gọi món chưa ạ? / Rồi, cho tôi món bít tết.
Medium rare, please. | How would you like your steak? | Medium rare, please. | Anh/chị muốn bít tết chín thế nào ạ? / Cho tôi tái vừa.
I'm allergic to peanuts. | Does this have nuts in it? I'm allergic to peanuts. | Let me check with the kitchen. | Món này có hạt không? Tôi bị dị ứng lạc. / Để tôi hỏi lại nhà bếp ạ.
Everything was great. | How was everything? | Everything was great, thank you! | Bữa ăn thế nào ạ? / Mọi thứ đều rất ngon, cảm ơn bạn!
Can we get the check, please? | Can we get the check, please? | Sure, I'll be right back with it. | Cho chúng tôi tính tiền nhé? / Vâng, tôi mang hóa đơn ra ngay ạ.
It's on me. | Let's split it. | No, no. It's on me today. | Chia đôi đi. / Thôi, thôi. Hôm nay để tôi mời.
Can I get an iced Americano? | Hi, what can I get for you? | Can I get an iced Americano? | Xin chào, anh/chị dùng gì ạ? / Cho tôi một Americano đá.
For here or to go? | For here or to go? | To go, please. | Dùng ở đây hay mang đi ạ? / Mang đi nhé.
Can I get a name for the order? | Can I get a name for the order? | It's Jay. J-A-Y. | Cho tôi xin tên để ghi đơn ạ? / Jay. J-A-Y.
That's it. | Anything else? | No, that's it. Thanks! | Anh/chị cần gì thêm không ạ? / Không, vậy thôi. Cảm ơn!
I'm just looking, thanks. | Can I help you find anything? | I'm just looking, thanks. | Anh/chị cần tìm gì không ạ? / Tôi chỉ xem thôi, cảm ơn.
Can I try this on? | Can I try this on? | Sure, the fitting rooms are in the back. | Tôi thử cái này được không? / Được chứ ạ, phòng thử đồ ở phía trong.
I'll take it. | It fits perfectly! I'll take it. | Great! I can ring you up over here. | Vừa khít luôn! Tôi lấy cái này. / Tuyệt quá! Mời anh/chị qua đây thanh toán ạ.
Cash or card? | Cash or card? | Card, please. | Tiền mặt hay thẻ ạ? / Thẻ nhé.
What time is it? | Excuse me, what time is it? | It's almost three. | Xin lỗi, bây giờ là mấy giờ? / Gần ba giờ rồi.
Thirteen or thirty? | That's thirty dollars. | Sorry, thirteen or thirty? | Của anh/chị là 30 đô ạ. / Xin lỗi, mười ba hay ba mươi?
How was your weekend? | How was your weekend? | It was great! I went to the beach. How about yours? | Cuối tuần của bạn thế nào? / Tuyệt lắm! Tôi đi biển. Còn bạn?
Any plans for the weekend? | Any plans for the weekend? | Not really. I'm just going to relax at home. | Cuối tuần có kế hoạch gì không? / Không hẳn. Tôi chỉ định nghỉ ngơi ở nhà.
Nice weather today, huh? | Nice weather today, huh? | I know! Finally some sun. | Hôm nay trời đẹp nhỉ? / Đúng thế! Cuối cùng cũng có nắng.
What do you do for fun? | What do you do for fun? | I play badminton and watch a lot of TV shows. | Lúc rảnh bạn thường làm gì? / Tôi chơi cầu lông và xem phim truyền hình nhiều lắm.
Me neither. | I don't really like spicy food. | Me neither. | Tôi không thích đồ cay lắm. / Tôi cũng không.
It was nice talking to you. | Well, I should get going. It was nice talking to you. | You too! See you around. | Thôi, tôi phải đi đây. Nói chuyện với bạn rất vui. / Tôi cũng vậy! Hẹn gặp lại nhé.
Congratulations! | I got the job! | Congratulations! I'm so happy for you! | Tôi được nhận việc rồi! / Chúc mừng nhé! Mừng cho bạn quá!
No way! | I met BTS at the airport yesterday. | No way! Did you get a picture? | Hôm qua tôi gặp BTS ở sân bay. / Không thể nào! Bạn có chụp ảnh không?
I'm sorry to hear that. | My grandma is in the hospital. | Oh, I'm sorry to hear that. I hope she feels better soon. | Bà tôi đang nằm viện. / Ôi, tôi rất tiếc. Mong bà sớm khỏe lại.
It's not a big deal. | I'm so sorry I spilled your coffee! | It's not a big deal. Don't worry about it. | Xin lỗi, tôi làm đổ cà phê của bạn rồi! / Chuyện nhỏ thôi mà. Đừng bận tâm.
I love your shoes. | I love your shoes! Where did you get them? | Thanks! I got them in Hanoi. | Giày của bạn đẹp quá! Bạn mua ở đâu thế? / Cảm ơn! Tôi mua ở Hà Nội.
Do you want to grab coffee sometime? | Do you want to grab coffee sometime? | Sure, I'd love to! | Hôm nào đi cà phê nhé? / Được chứ, tôi rất muốn!
You're a lifesaver! | I brought you an extra charger. | You're a lifesaver! Thank you! | Tôi mang thêm cho bạn một cái sạc này. / May mà có bạn! Cảm ơn nhé!
I'll get back to you. | Can you join the meeting on Thursday? | Let me check my schedule, and I'll get back to you. | Anh/chị dự cuộc họp thứ năm được không? / Để tôi xem lịch rồi báo lại nhé.
I'm running late. | Where are you? The meeting starts in five minutes. | Sorry, I'm running late. I'll be there in ten. | Bạn đang ở đâu? Năm phút nữa là họp rồi. / Xin lỗi, tôi đến muộn một chút. Mười phút nữa tôi tới.
Can we push the meeting to 3? | Can we push the meeting to 3? Something came up. | Sure, 3 works for me. | Dời cuộc họp sang 3 giờ được không? Tôi có việc đột xuất. / Được, 3 giờ tôi rảnh.
What's the deadline? | What's the deadline for the proposal? | End of the day Friday. | Hạn chót nộp bản đề xuất là khi nào? / Cuối giờ làm việc thứ sáu.
Who's calling, please? | Hi, can I speak to Ms. Tran? | Sure. Who's calling, please? | Xin chào, cho tôi nói chuyện với chị Trần được không? / Vâng. Xin hỏi ai đang gọi ạ?
Sorry, you're breaking up. | Can you hear me now? | Sorry, you're breaking up. I'll call you back. | Giờ bạn nghe rõ không? / Xin lỗi, tiếng bị ngắt quãng. Tôi sẽ gọi lại.
I'm on my way. | Are you almost here? | Yeah, I'm on my way! | Bạn sắp đến chưa? / Ừ, tôi đang trên đường đến!
I'm here for sightseeing. | What's the purpose of your visit? | I'm here for sightseeing. | Mục đích chuyến đi của anh/chị là gì? / Tôi đến đây để tham quan.
I'm staying for a week. | How long are you staying? | I'm staying for a week. | Anh/chị sẽ ở lại bao lâu? / Tôi ở lại một tuần.
Window or aisle? | Window or aisle? | Aisle, please. | Ghế cạnh cửa sổ hay cạnh lối đi ạ? / Cho tôi ghế cạnh lối đi.
I have a reservation under Nguyen. | Hi, are you checking in? | Yes, I have a reservation under Nguyen. | Xin chào, anh/chị nhận phòng ạ? / Vâng, tôi đã đặt phòng dưới tên Nguyễn.
The air conditioner isn't working. | Front desk. How can I help you? | Hi, the air conditioner isn't working in room 512. | Lễ tân xin nghe. Tôi có thể giúp gì ạ? / Chào bạn, điều hòa phòng 512 không chạy.
My luggage is missing. | My luggage is missing. | I'm sorry about that. Can I see your baggage tag? | Hành lý của tôi bị thất lạc. / Rất xin lỗi anh/chị. Cho tôi xem thẻ hành lý được không ạ?
I don't feel well. | Are you okay? You look pale. | I don't feel well. I think I need to sit down. | Bạn ổn không? Trông bạn xanh xao quá. / Tôi thấy không khỏe. Chắc tôi phải ngồi xuống một lát.
I have a sore throat. | What seems to be the problem? | I have a sore throat and a slight fever. | Anh/chị thấy khó chịu ở đâu? / Tôi bị đau họng và hơi sốt.
I lost my wallet. | I lost my wallet. I think I left it on the bus. | Let's call the bus company's lost and found. | Tôi bị mất ví. Chắc tôi để quên trên xe buýt. / Mình gọi cho bộ phận giữ đồ thất lạc của hãng xe buýt đi.
hang out | Do you want to hang out this weekend? | Sure! Let's go see a movie. | Cuối tuần này đi chơi không? / Đi chứ! Mình đi xem phim đi.
pick up | Can you pick me up at the airport? | Of course. What time does your flight land? | Bạn ra sân bay đón tôi được không? / Tất nhiên rồi. Mấy giờ máy bay hạ cánh?
work out | You look great! Do you work out? | Yeah, I go to the gym three times a week. | Trông bạn khỏe quá! Bạn có tập thể dục không? / Có, tôi đi tập gym mỗi tuần ba buổi.
It's not my cup of tea. | Do you want to go to the jazz concert? | Thanks, but honestly, it's not my cup of tea. | Bạn có muốn đi nghe nhạc jazz không? / Cảm ơn, nhưng thật lòng thì không hợp gu tôi lắm.
Speak of the devil! | Have you seen Mark today? | Speak of the devil! Here he comes. | Hôm nay bạn có thấy Mark không? / Vừa nhắc Tào Tháo, Tào Tháo đến! Anh ấy kia kìa.
I'm feeling under the weather. | Are you coming to the party tonight? | I don't think so. I'm feeling under the weather. | Tối nay bạn có đến bữa tiệc không? / Chắc là không. Tôi thấy hơi mệt trong người.
Spill the tea. | I heard something crazy about Jen and Mike. | Wait, what? Spill the tea! | Tôi vừa nghe một chuyện khó tin về Jen và Mike. / Khoan, gì cơ? Kể nghe đi!
No spoilers! | Did you finish the show? The ending is... | No spoilers! I'm only on episode 3. | Bạn xem hết phim đó chưa? Cái kết là… / Đừng tiết lộ! Tôi mới xem đến tập 3.
Who's your bias? | Who's your bias? | Definitely Jimin. What about you? | Bạn thích thành viên nào nhất? / Tất nhiên là Jimin rồi. Còn bạn?
`;

exports.EXAMPLES = `
I'm a student. | I'm a student at a university in Hanoi. | Tôi là sinh viên một trường đại học ở Hà Nội.
I work in marketing. | I work in marketing at a game company. | Tôi làm tiếp thị ở một công ty game.
I like watching movies. | I like watching movies on the weekends. | Tôi thích xem phim vào cuối tuần.
I've been learning English for a year. | I've been learning English for a year, but speaking is still hard. | Tôi học tiếng Anh được một năm rồi nhưng nói vẫn còn khó.
Thanks a lot. | Thanks a lot for your help today. | Cảm ơn bạn nhiều vì hôm nay đã giúp tôi.
I speak a little English. | Sorry, I only speak a little English. | Xin lỗi, tôi chỉ nói được một chút tiếng Anh.
What does this mean? | What does this word on the sign mean? | Chữ này trên biển báo nghĩa là gì?
How much is this? | How much is this T-shirt? | Cái áo phông này bao nhiêu tiền?
Can I pay by card? | Can I pay by card, or is it cash only? | Trả bằng thẻ được không, hay chỉ nhận tiền mặt?
Just a second. | Just a second, I'm almost done. | Đợi chút nhé, tôi sắp xong rồi.
I'm not sure. | I'm not sure, but I think it's on the second floor. | Tôi không chắc, nhưng hình như nó ở tầng hai.
It's next to the bank. | The café is next to the bank on Main Street. | Quán cà phê ở cạnh ngân hàng trên phố Main.
Turn left at the corner. | Turn left at the corner, and you'll see the station. | Đến góc đường rẽ trái là bạn sẽ thấy nhà ga.
Where do I transfer? | Where do I transfer to get to District 1? | Muốn đến Quận 1 thì tôi đổi tàu ở đâu?
Can I get a Coke? | Can I get a Coke with no ice? | Cho tôi một Coca không đá.
Is it spicy? | Is it spicy? I can't handle spicy food. | Món này có cay không? Tôi không ăn cay được.
Can we split the bill? | Can we split the bill three ways? | Chúng tôi chia hóa đơn làm ba được không?
Can I get this to go? | I can't finish this. Can I get this to go? | Tôi ăn không hết. Cho tôi mang về nhé?
Less ice, please. | Can I get a large iced latte? Less ice, please. | Cho tôi một latte đá cỡ lớn. Ít đá thôi.
Can I get a receipt? | Can I get a receipt? It's for work. | Cho tôi xin hóa đơn được không? Tôi cần nộp cho công ty.
Is this on sale? | Is this jacket on sale? | Cái áo khoác này có giảm giá không?
I'd like to exchange this. | I'd like to exchange this for a smaller size. | Tôi muốn đổi cái này lấy cỡ nhỏ hơn.
It's a bit tight. | These jeans are a bit tight. | Cái quần bò này hơi chật.
It's three thirty. | It's three thirty. We have half an hour left. | Ba giờ rưỡi rồi. Chúng ta còn nửa tiếng.
My birthday is in October. | My birthday is in October, so I'm a Libra. | Sinh nhật tôi vào tháng 10 nên tôi thuộc cung Thiên Bình.
In ten minutes | The train leaves in ten minutes. | Mười phút nữa tàu chạy.
Twice a week | I go to the gym twice a week. | Tôi đi tập gym mỗi tuần hai lần.
It was pretty relaxing. | It was pretty relaxing. I just read and slept. | Khá thư giãn. Tôi chỉ đọc sách và ngủ thôi.
Have you been to Vietnam? | Have you been to Vietnam? You should try the street food. | Bạn đến Việt Nam bao giờ chưa? Nhất định phải thử đồ ăn đường phố nhé.
By the way | By the way, did you see the game last night? | À này, tối qua bạn có xem trận đấu không?
I'm bored. | I'm bored. Do you want to go for a walk? | Chán quá. Đi dạo không?
I'm nervous. | I'm nervous about my job interview tomorrow. | Tôi hồi hộp vì buổi phỏng vấn xin việc ngày mai.
I can't wait! | We're going to Hawaii next week. I can't wait! | Tuần sau chúng tôi đi Hawaii. Mong quá đi!
That color looks good on you. | That color looks good on you. You should wear it more often. | Màu đó hợp với bạn lắm. Bạn nên mặc thường xuyên hơn.
You made my day! | Thanks for the cookies. You made my day! | Cảm ơn bạn vì hộp bánh quy. Bạn làm tôi vui cả ngày!
Let me know if you have any questions. | I've attached the slides. Let me know if you have any questions. | Tôi đã đính kèm bản trình chiếu. Nếu có thắc mắc gì, xin cứ cho tôi biết.
Could you send me the file by Friday? | Could you send me the file by Friday? I need it for the presentation. | Anh/chị gửi tôi tệp trước thứ sáu được không? Tôi cần nó cho buổi thuyết trình.
Let's touch base next week. | Let's touch base next week and see how things are going. | Tuần sau chúng ta trao đổi nhanh để xem mọi việc tiến triển thế nào nhé.
I'm working from home today. | I'm working from home today, so let's meet on Zoom. | Hôm nay tôi làm việc ở nhà, nên chúng ta họp qua Zoom nhé.
Can I call you back? | I'm driving right now. Can I call you back? | Tôi đang lái xe. Tôi gọi lại cho bạn sau được không?
Is breakfast included? | Is breakfast included, or is it extra? | Có bao gồm bữa sáng không, hay phải trả thêm?
My flight was delayed. | My flight was delayed by three hours. | Chuyến bay của tôi bị hoãn ba tiếng.
I have a headache. | I have a headache. Do you have any painkillers? | Tôi bị đau đầu. Bạn có thuốc giảm đau không?
figure out | I can't figure out how to use this machine. | Tôi không biết cách dùng cái máy này.
run out of | We ran out of coffee, so I'm going to the store. | Hết cà phê rồi nên tôi ra cửa hàng mua đây.
look forward to | I'm looking forward to seeing you next week. | Tôi rất mong được gặp bạn vào tuần sau.
put off | Stop putting off your homework! | Đừng trì hoãn bài tập về nhà nữa!
get along with | I get along with my roommate really well. | Tôi rất hòa thuận với bạn cùng phòng.
It costs an arm and a leg. | Living in New York costs an arm and a leg. | Sống ở New York đắt cắt cổ.
Once in a blue moon | I only drink soda once in a blue moon. | Năm thì mười họa tôi mới uống nước ngọt có ga.
Low-key | I low-key want to dye my hair pink. | Tôi hơi hơi muốn nhuộm tóc màu hồng.
I binge-watched the whole season. | I binge-watched the whole season in one weekend. | Tôi cày hết cả mùa phim trong một cuối tuần.
rice | I had rice and spring rolls for lunch. | Trưa nay tôi ăn cơm với nem rán.
think | I think so, too. | Tôi cũng nghĩ vậy.
`;

/* pattern | giải thích | example | lesson id */
exports.PATTERNS = `
Could you ~? | Nhờ vả lịch sự “Bạn có thể… được không?” Nhẹ nhàng hơn "Can you" | Could you help me with this? | polite
Would you mind ~ing? | Nhờ vả rất lịch sự “Phiền bạn… được không?” Đồng ý thì đáp "No" (nghĩa là “không phiền gì”) | Would you mind closing the window? | polite
Can I get ~? | Gọi món ở quán, cửa hàng “Cho tôi…” (cách nói thông dụng nhất ở Mỹ) | Can I get a large latte? | polite
I'd like ~ | Dạng lịch sự của "want": “Tôi muốn… / Cho tôi…” | I'd like a window seat, please. | polite
a / an + danh từ | Một vật đếm được nhắc đến lần đầu. Trước nguyên âm (theo âm, không theo chữ) dùng "an" | I have an idea. | articles
the + danh từ | Vật cụ thể mà cả hai người đều biết là cái nào | Can you open the door? | articles
I am / You are / She is | Động từ to be: “là / ở / đang (trạng thái)”. Trước tính từ không được bỏ | She is a nurse. | be
Do you ~? / Does he ~? | Câu nghi vấn với động từ thường; ngôi thứ ba số ít dùng "does" | Does he live here? | be
don't / doesn't + động từ nguyên mẫu | Câu phủ định với động từ thường | I don't eat meat. | be
ngôi thứ ba số ít + động từ thêm -s | Sau he, she, it, động từ ở thì hiện tại đơn thêm -s và phải đọc ra | My sister works at a hospital. | be
be + V-ing | Việc đang diễn ra lúc nói / kế hoạch đã định trong tương lai gần | I'm meeting Jake tonight. | tense
động từ + -ed / bất quy tắc | Việc đã xong trong quá khứ (went, ate, saw…). Có từ chỉ thời gian vẫn phải đổi động từ | I went to Da Nang last week. | tense
will + động từ nguyên mẫu | Quyết định ngay lúc nói / lời hứa / dự đoán | I'll call you later. | tense
be going to + động từ nguyên mẫu | Kế hoạch đã định từ trước | I'm going to visit my parents this weekend. | tense
Have you ever ~? | Hỏi về trải nghiệm “Bạn đã từng… chưa?” | Have you ever tried pho? | tense
in + tháng / năm / mùa | Khoảng thời gian rộng | My birthday is in June. | prep
on + thứ / ngày | Một ngày cụ thể | The party is on Saturday. | prep
at + giờ / địa điểm | Giờ chính xác hoặc một điểm cụ thể | Let's meet at 7 at the station. | prep
How about ~ing? | Rủ rê “Hay là… nhé?” | How about getting lunch together? | smalltalk
So do I / Neither do I | Đồng tình “Tôi cũng vậy” (khẳng định / phủ định). Thân mật: Me too / Me neither | I love this song. / So do I. | smalltalk
động từ + it + tiểu từ | Tân ngữ của cụm động từ là đại từ thì đứng giữa | Can you turn it down? | phrasal
look forward to + V-ing | "to" ở đây là giới từ nên sau nó là V-ing | I'm looking forward to hearing from you. | phrasal
It's + giờ | Nói giờ: đọc giờ rồi đọc phút | It's ten fifteen. | numbers
I'm writing to ~ | Nêu mục đích ở câu đầu email | I'm writing to confirm our meeting. | email
Let me know if ~ | “Nếu… thì cho tôi biết” để kết email | Let me know if you need anything else. | email
`;

exports.PAUSE = {
compliment: `
You're amazing | Bạn thật tuyệt vời
You nailed it | Bạn làm hoàn hảo luôn
You're a natural | Bạn đúng là có năng khiếu
Looking sharp! | Hôm nay trông bảnh quá!
You're so thoughtful | Bạn thật chu đáo
You have a great sense of humor | Bạn rất có khiếu hài hước
You're one of a kind | Bạn thật có một không hai
You light up the room | Có bạn là không khí sáng bừng lên
I admire you | Tôi rất ngưỡng mộ bạn
You inspire me | Bạn truyền cảm hứng cho tôi
You're really talented | Bạn thật tài năng
You're a great listener | Bạn biết lắng nghe lắm
You've got this | Bạn làm được mà
That's brilliant | Ý tưởng tuyệt quá
You're so easy to talk to | Nói chuyện với bạn thật dễ chịu
You always know what to say | Bạn lúc nào cũng nói đúng điều cần nói
You're a good friend | Bạn là một người bạn tốt
Your hard work shows | Công sức của bạn ai cũng thấy
You're glowing | Trông bạn rạng rỡ quá
Well said | Nói hay lắm
`,
expression: `
Sounds good | Được đấy
Fair enough | Cũng có lý
Makes sense | Hợp lý / Hiểu rồi
Got it | Rõ rồi
I see | Ra vậy
No kidding | Thật á? / Đúng thế còn gì
Good point | Ý hay đấy
Exactly | Chính xác
Totally | Hoàn toàn đồng ý
Never mind | Thôi, không có gì
My bad | Lỗi của tôi
It depends | Còn tùy
Whatever works | Sao cũng được, miễn tiện
Let me think | Để tôi nghĩ đã
Here we go | Bắt đầu nào
Hang on | Đợi chút
Fingers crossed | Cầu mong mọi việc suôn sẻ
You bet | Chắc chắn rồi
Count me in | Cho tôi tham gia với
Sort of | Cũng gần như vậy / Hơi hơi
`,
polite: `
Please | Làm ơn / Vui lòng
Thank you so much | Cảm ơn bạn rất nhiều
Pardon me | Xin thứ lỗi
Go ahead | Bạn cứ tự nhiên
May I come in? | Tôi vào được không?
Sorry to bother you | Xin lỗi đã làm phiền
I appreciate it | Tôi rất cảm kích
Bless you | Chúc bạn khỏe (nói khi ai đó hắt hơi)
Have a nice day | Chúc một ngày vui vẻ
Nice to see you | Rất vui được gặp lại bạn
If you don't mind | Nếu bạn không phiền
Would you like some? | Bạn dùng một chút không?
Help yourself | Cứ tự nhiên nhé
It's my pleasure | Đó là niềm vui của tôi
Sorry I'm late | Xin lỗi tôi đến muộn
Thank you for your time | Cảm ơn bạn đã dành thời gian
I beg your pardon? | Xin lỗi, bạn vừa nói gì? (trang trọng)
Don't mention it | Có gì đâu mà
Cheers | Cảm ơn (tiếng Anh-Anh) / Nâng ly, chúc sức khỏe
Excuse me, coming through | Xin lỗi, cho tôi đi qua
`,
saying: `
Practice makes perfect | Có công mài sắt, có ngày nên kim
Where there's a will, there's a way | Có chí thì nên
Rome wasn't built in a day | Thành Rome không xây xong trong một ngày
Time is money | Thời gian là vàng bạc
Better safe than sorry | Cẩn tắc vô áy náy
Two heads are better than one | Hai cái đầu vẫn hơn một
Don't judge a book by its cover | Đừng trông mặt mà bắt hình dong
When in Rome, do as the Romans do | Nhập gia tùy tục
Slow and steady wins the race | Chậm mà chắc
Knowledge is power | Tri thức là sức mạnh
Honesty is the best policy | Trung thực là thượng sách
Seeing is believing | Trăm nghe không bằng một thấy
Out of sight, out of mind | Xa mặt cách lòng
Laughter is the best medicine | Một nụ cười bằng mười thang thuốc bổ
Live and learn | Sống là để học
A friend in need is a friend indeed | Hoạn nạn mới biết bạn hiền
It's never too late to learn | Học không bao giờ là muộn
Every expert was once a beginner | Chuyên gia nào cũng từng là người mới bắt đầu
Stay hungry, stay foolish | Hãy luôn khát khao, hãy cứ dại khờ
Small steps every day | Mỗi ngày một bước nhỏ
`
};

/* idiom | nghĩa | phiên âm | giải thích */
exports.IDIOMS = `
Break a leg | Chúc may mắn! | /breɪk‿ə leg/ | Lời chúc trước buổi biểu diễn, kỳ thi, buổi phỏng vấn; dùng thay cho "Good luck".
Bite the bullet | Cắn răng chịu đựng | /baɪt ðə ˈbʊlɪt/ | Khi quyết tâm làm một việc khó chịu nhưng không tránh được.
Cut corners | Làm ẩu / đốt cháy giai đoạn | /kʌt ˈkɔːrnɚz/ | Bỏ bớt các bước cần thiết để tiết kiệm tiền, thời gian (nghĩa tiêu cực).
Hit the sack | Đi ngủ | /hɪt ðə sæk/ | Cách nói thân mật: "I'm tired. I'm going to hit the sack."
Let the cat out of the bag | Lỡ miệng để lộ bí mật | /let ðə kæt‿aʊt‿əv ðə bæg/ | Ví dụ lỡ kể ra kế hoạch tiệc bất ngờ.
Kill two birds with one stone | Một công đôi việc | /kɪl tuː bɝːdz wɪð wʌn stoʊn/ | Giải quyết hai việc cùng một lúc.
Burn the midnight oil | Thức khuya làm việc, học bài | /bɝːn ðə ˈmɪdnaɪt‿ɔɪl/ | Mùa thi hoặc trước hạn chót.
The best of both worlds | Vẹn cả đôi đường | /ðə best‿əv boʊθ wɝːldz/ | Khi được hưởng ưu điểm của cả hai lựa chọn.
A blessing in disguise | Trong cái rủi có cái may | /ə ˈblesɪŋ‿ɪn dɪsˈgaɪz/ | Lúc đầu tưởng là chuyện xấu, cuối cùng lại thành chuyện tốt.
Every cloud has a silver lining | Sau cơn mưa trời lại sáng | /ˈevri klaʊd hæz‿ə ˈsɪlvɚ ˈlaɪnɪŋ/ | An ủi người đang gặp chuyện buồn.
Get cold feet | Chùn bước vào phút chót | /get koʊld fiːt/ | Ngập ngừng ngay trước đám cưới hay một quyết định lớn.
Hit the nail on the head | Nói trúng phóc | /hɪt ðə neɪl‿ɑːn ðə hed/ | Khi ai đó nói đúng ngay vấn đề.
In the same boat | Cùng cảnh ngộ | /ɪn ðə seɪm boʊt/ | An ủi người cùng gặp khó khăn: "Don't worry, we're all in the same boat."
Miss the boat | Lỡ mất cơ hội | /mɪs ðə boʊt/ | Khi cơ hội tốt đã trôi qua.
No pain, no gain | Có khổ luyện mới có thành công | /noʊ peɪn noʊ geɪn/ | Hay nói khi tập thể dục, học hành.
On the fence | Còn phân vân, chưa quyết | /ɑːn ðə fens/ | Như đứng trên hàng rào, chưa nhảy sang bên nào: "I'm still on the fence about the job offer."
Pull someone's leg | Trêu chọc / nói đùa | /pʊl ˈsʌmwʌnz leg/ | Nói dối cho vui: "Relax, I'm just pulling your leg!"
Sit tight | Cứ kiên nhẫn chờ đợi | /sɪt taɪt/ | Bảo người khác ngồi yên chờ kết quả.
The last straw | Giọt nước tràn ly | /ðə læst strɑː/ | Chuyện cuối cùng khiến người ta không chịu nổi nữa.
Throw in the towel | Đầu hàng / bỏ cuộc | /θroʊ ɪn ðə ˈtaʊəl/ | Bắt nguồn từ quyền anh: ném khăn vào sàn đấu để xin thua.
Actions speak louder than words | Nói ít làm nhiều / việc làm quan trọng hơn lời nói | /ˈækʃənz spiːk ˈlaʊdɚ ðən wɝːdz/ | Đừng chỉ nói, hãy chứng minh bằng hành động.
Easier said than done | Nói thì dễ, làm mới khó | /ˈiːziɚ sed ðən dʌn/ | Thực tế khó hơn nhiều so với lời nói.
Go the extra mile | Cố gắng hơn cả mong đợi | /goʊ ði ˈekstrə maɪl/ | Hay dùng để khen: "She always goes the extra mile."
Get out of hand | Vượt khỏi tầm kiểm soát | /get‿aʊt‿əv hænd/ | Khi tình hình không còn kiểm soát được.
Take a rain check | Hẹn dịp khác | /teɪk‿ə reɪn tʃek/ | Từ chối lời mời một cách nhẹ nhàng: "Can I take a rain check?"
The early bird catches the worm | Trâu chậm uống nước đục | /ði ˈɝːli bɝːd ˈkætʃɪz ðə wɝːm/ | Ai nhanh chân, chăm chỉ thì nắm được cơ hội.
`;
