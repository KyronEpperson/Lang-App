/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   vi-en: pron = IPA between slashes in the General American key of docs/profiles/vi.md §6 (ˈ stress, ‿ linking, endings always written);
   must match profile.json pronPattern. Deck names are FINAL (tools/content/vi/DECKNAMES.md). The last two decks are vi-only (profile §9). */
module.exports = {
"Chào hỏi": `
Hello. | /həˈloʊ/ | Xin chào | Câu chào cơ bản nhất, dùng được mọi lúc, mọi nơi, với mọi người.
Hi! | /haɪ/ | Chào! / Xin chào (thân mật) | Nhẹ nhàng, thân thiện hơn "Hello". Ở Mỹ, đồng nghiệp cũng chào nhau bằng "Hi".
Hey! | /heɪ/ | Ê! / Chào nhé! | Dùng giữa bạn bè. Nói với người lạ có thể nghe thiếu lịch sự.
Good morning. | /gʊd ˈmɔːrnɪŋ/ | Chào buổi sáng | Dùng trước buổi trưa. Nói gọn: "Morning!"
Good afternoon. | /gʊd‿ˌæftɚˈnuːn/ | Chào buổi chiều | Khoảng 12 giờ trưa đến 6 giờ chiều. Hơi trang trọng, hay nghe ở cửa hàng, công ty.
Good evening. | /gʊd‿ˈiːvnɪŋ/ | Chào buổi tối | Chào khi gặp nhau buổi tối. "Good night" chỉ dùng khi chia tay!
How are you? | /haʊ ɑːr ju/ | Bạn khỏe không? | Đây là lời chào hơn là hỏi thăm thật. Đáp nhẹ nhàng: "Good, thanks. You?"
I'm good, thanks. And you? | /aɪm gʊd θæŋks/ /ænd ju/ | Tôi khỏe, cảm ơn. Còn bạn? | "I'm fine, thank you" nghe như sách giáo khoa; "I'm good" tự nhiên hơn nhiều.
What's up? | /wʌts‿ʌp/ | Dạo này sao rồi? / Có gì mới không? | Không liên quan gì đến “ở trên” (up). Thường đáp: "Not much."
Not much. | /nɑːt mʌtʃ/ | Cũng bình thường thôi | Câu đáp phổ biến nhất cho "What's up?". Hỏi lại: "Not much, you?"
How's it going? | /haʊz‿ɪt ˈgoʊɪŋ/ | Mọi chuyện thế nào? / Ổn cả chứ? | Cách hỏi thân mật của "How are you?". Đáp: "Pretty good!"
Nice to meet you. | /naɪs tə miːt ju/ | Rất vui được gặp bạn | Chỉ dùng khi gặp lần đầu. Đáp: "Nice to meet you, too."
Long time no see! | /lɑːŋ taɪm noʊ siː/ | Lâu quá không gặp! | Dùng với người quen thân. Trang trọng hơn: "It's been a while."
See you later. | /siː ju ˈleɪtɚ/ | Hẹn gặp lại | Dùng khi chia tay, kể cả khi chưa hẹn ngày gặp lại.
Take care. | /teɪk ker/ | Giữ gìn sức khỏe nhé | Lời chào ấm áp khi chia tay; cũng hay viết ở cuối tin nhắn.
Have a good one! | /hæv‿ə gʊd wʌn/ | Chúc một ngày tốt lành! | Nhân viên cửa hàng hay nói sau khi tính tiền. Đáp "You too!" là đủ.
Bye! | /baɪ/ | Tạm biệt! | Người lớn nói "Bye-bye" với nhau nghe hơi trẻ con.
Good night. | /gʊd naɪt/ | Chúc ngủ ngon / Chào (khi chia tay buổi tối) | Chỉ dùng khi chia tay buổi tối hoặc đi ngủ. Gặp nhau thì nói "Good evening".
`,
"Giới thiệu bản thân": `
My name is Minh. | /maɪ neɪm‿ɪz mɪn/ | Tên tôi là Minh | Thường ngày nói ngắn hơn: "I'm Minh."
Please call me Jay. | /pliːz kɑːl mi dʒeɪ/ | Cứ gọi tôi là Jay | Khi bạn có tên tiếng Anh hoặc muốn người khác gọi tên ngắn cho dễ.
What should I call you? | /wʌt ʃʊd‿aɪ kɑːl ju/ | Tôi nên gọi bạn là gì? | Hữu ích khi tên người kia khó đọc. Tiếng Anh không cần chọn “anh / chị / em”: cứ gọi bằng tên.
Where are you from? | /wer ɑːr ju frʌm/ | Bạn đến từ đâu? / Bạn là người nước nào? | Một trong những câu hỏi đầu tiên bạn sẽ nghe ở nước ngoài.
I'm from Vietnam. | /aɪm frəm viːetˈnɑːm/ | Tôi đến từ Việt Nam | Nói thêm thành phố để câu chuyện tiếp tục: "I'm from Da Nang, in Vietnam."
I live in Hanoi. | /aɪ lɪv‿ɪn hæˈnɔɪ/ | Tôi sống ở Hà Nội | Âm /v/ cuối của "live": răng trên chạm nhẹ môi dưới; nối sang "in" thành /lɪvɪn/.
I'm a student. | /aɪm‿ə ˈstuːdənt/ | Tôi là sinh viên | Trước nghề nghiệp luôn có mạo từ "a / an"! "I'm student" là lỗi rất phổ biến vì tiếng Việt không có mạo từ.
What do you do? | /wʌt duː ju duː/ | Bạn làm nghề gì? | Câu hỏi chuẩn về nghề nghiệp, nhẹ nhàng hơn "What's your job?".
I work at a bank. | /aɪ wɝːk‿ət‿ə bæŋk/ | Tôi làm ở ngân hàng | Trước tên công ty, nơi làm việc dùng "at": "I work at Google."
I work in marketing. | /aɪ wɝːk‿ɪn ˈmɑːrkətɪŋ/ | Tôi làm trong ngành tiếp thị | Trước lĩnh vực, phòng ban dùng "in"; phân biệt với "at" (công ty).
I'm 25 years old. | /aɪm ˈtwenti faɪv jɪrz‿oʊld/ | Tôi 25 tuổi | Người Việt hỏi tuổi để chọn cách xưng hô; tiếng Anh không cần, và hỏi tuổi khi mới gặp có thể bị coi là bất lịch sự.
I'm really into hiking. | /aɪm ˈriːli ˈɪntuː ˈhaɪkɪŋ/ | Tôi rất mê leo núi | Tự nhiên hơn nhiều so với "My hobby is…".
I like watching movies. | /aɪ laɪk ˈwɑːtʃɪŋ ˈmuːviz/ | Tôi thích xem phim | Sau "like", động từ ở dạng V-ing hoặc "to" + động từ nguyên mẫu. Không nói "I like watch".
I've been learning English for a year. | /aɪv bɪn ˈlɝːnɪŋ‿ˈɪŋglɪʃ fɚ ə jɪr/ | Tôi học tiếng Anh được một năm rồi | Việc bắt đầu từ trước và vẫn đang tiếp tục: have been + V-ing.
I'm here on vacation. | /aɪm hɪr ɑːn veɪˈkeɪʃən/ | Tôi đến đây để đi nghỉ | Tiếng Anh-Anh: "I'm here on holiday."
I'm married. | /aɪm ˈmærid/ | Tôi đã lập gia đình | Độc thân: "I'm single." Mới gặp không nên hỏi người khác đã kết hôn chưa.
I have a younger brother. | /aɪ hæv‿ə ˈjʌŋgɚ ˈbrʌðɚ/ | Tôi có một em trai | Tiếng Anh chỉ phân biệt anh trai / em trai bằng older / younger brother.
`,
"Tiếng Anh cấp tốc 1": `
Excuse me. | /ɪkˈskjuːz mi/ | Xin lỗi (cho tôi hỏi / cho tôi đi qua) | Dùng để gọi ai đó hoặc xin đi qua. Lỡ va vào người khác thì nói "Sorry!"
Thank you. | /θæŋk ju/ | Cảm ơn | "th" là /θ/: đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi — không phải chữ “th” /tʰ/ của tiếng Việt.
Thanks a lot. | /θæŋks‿ə lɑːt/ | Cảm ơn nhiều | Nhẹ nhàng, thân mật hơn "Thank you".
You're welcome. | /jʊr ˈwelkəm/ | Không có gì | Thân mật hơn: "Sure.", "No problem.", "Anytime."
No problem. | /noʊ ˈprɑːbləm/ | Không sao đâu | Câu đáp lời cảm ơn rất phổ biến.
I'm sorry. | /aɪm ˈsɑːri/ | Tôi xin lỗi | Dùng khi thật sự xin lỗi. Va chạm nhẹ chỉ cần "Sorry!"
Yes, please. | /jes pliːz/ | Vâng, cho tôi xin | Đáp lại lời mời như "Would you like some water?"
No, thank you. | /noʊ θæŋk ju/ | Không, cảm ơn | Lịch sự hơn nhiều so với chỉ nói "No". Thân mật: "I'm good, thanks."
Sorry? | /ˈsɑːri/ | Xin lỗi, bạn nói gì cơ? | Lên giọng ở cuối nghĩa là “Bạn nói lại được không?”. Ở Mỹ phổ biến hơn "Pardon?".
Could you say that again? | /kʊd ju seɪ ðæt‿əˈgen/ | Bạn nói lại được không? | Cứ tự tin dùng khi nghe không kịp; người bản xứ cũng hay hỏi lại.
Could you speak more slowly? | /kʊd ju spiːk mɔːr ˈsloʊli/ | Bạn nói chậm hơn được không? | Thêm "please" sẽ lịch sự hơn.
I don't understand. | /aɪ doʊnt‿ˌʌndɚˈstænd/ | Tôi không hiểu | Hơi cứng. Nhẹ nhàng hơn: "Sorry, I didn't quite catch that."
Do you speak Vietnamese? | /duː ju spiːk viːetnəˈmiːz/ | Bạn có nói được tiếng Việt không? | "Do you speak…?" tự nhiên và lịch sự hơn "Can you speak…?".
I speak a little English. | /aɪ spiːk‿ə ˈlɪtəl‿ˈɪŋglɪʃ/ | Tôi nói được một chút tiếng Anh | "tt" trong "little" giọng Mỹ đọc nhanh gần như /d/; phiên âm vẫn ghi /t/.
How do you say this in English? | /haʊ duː ju seɪ ðɪs‿ɪn‿ˈɪŋglɪʃ/ | Cái này tiếng Anh nói thế nào? | Chỉ vào đồ vật khi hỏi để học từ mới ngay. Không nói "How to say this?".
What does this mean? | /wʌt dʌz ðɪs miːn/ | Cái này nghĩa là gì? | Chỉ vào thực đơn, biển báo khi hỏi.
Can you help me? | /kən ju help mi/ | Bạn giúp tôi được không? | Lịch sự hơn: "Could you help me?"
`,
"Tiếng Anh cấp tốc 2": `
Where's the restroom? | /werz ðə ˈrestruːm/ | Nhà vệ sinh ở đâu? | Mỹ: restroom, bathroom; tiếng Anh-Anh: toilet, loo. Ở Mỹ "toilet" là cái bồn cầu.
How much is this? | /haʊ mʌtʃ‿ɪz ðɪs/ | Cái này bao nhiêu tiền? | Nhiều món: "How much are these?"
Is there an ATM around here? | /ɪz ðer ən‿eɪ tiː ˈem‿əˈraʊnd hɪr/ | Gần đây có cây ATM không? | Ở Anh còn gọi là "cash machine".
Can I get the Wi-Fi password? | /kən‿aɪ get ðə ˈwaɪfaɪ ˈpæswɝːd/ | Cho tôi xin mật khẩu Wi-Fi được không? | Hỏi có Wi-Fi không: "Is there Wi-Fi here?"
I'm lost. | /aɪm lɑːst/ | Tôi bị lạc đường | Đưa bản đồ ra và hỏi thêm: "Where am I on this map?" Đọc rõ cụm âm cuối /st/.
Can I pay by card? | /kən‿aɪ peɪ baɪ kɑːrd/ | Trả bằng thẻ được không? | Ở Mỹ hầu như đâu cũng nhận thẻ; cửa hàng nhỏ có thể yêu cầu số tiền tối thiểu.
One moment, please. | /wʌn ˈmoʊmənt pliːz/ | Xin vui lòng chờ một chút | Cách nói lịch sự, hay nghe ở cửa hàng và qua điện thoại.
Just a second. | /dʒʌst‿ə ˈsekənd/ | Đợi chút nhé | Thân mật. Ngắn hơn nữa: "Just a sec."
No worries. | /noʊ ˈwɝːiz/ | Không sao đâu / Đừng bận tâm | Rất phổ biến ở Úc, Anh, và ở Mỹ cũng hay dùng.
That's okay. | /ðæts‿oʊˈkeɪ/ | Không sao (khi người khác xin lỗi) | Khi ai đó xin lỗi: "That's okay!" hoặc "Don't worry about it."
Of course. | /əv kɔːrs/ | Tất nhiên rồi | Dùng khi nhận lời giúp ai. Dùng để trả lời câu hỏi có thể nghe như “Hỏi thừa!”, nên nói nhẹ nhàng.
I'm not sure. | /aɪm nɑːt ʃʊr/ | Tôi không chắc | Mềm mỏng hơn "I don't know".
I have a question. | /aɪ hæv‿ə ˈkwestʃən/ | Tôi có một câu hỏi | Trong lớp, cuộc họp: "Can I ask a question?"
Can you write it down? | /kən ju raɪt‿ɪt daʊn/ | Bạn viết ra giúp tôi được không? | Cách tốt nhất khi nghe không rõ địa chỉ, con số, tên riêng.
Can I take a picture? | /kən‿aɪ teɪk‿ə ˈpɪktʃɚ/ | Tôi chụp ảnh được không? | Ở bảo tàng, cửa hàng nên hỏi trước — đó là phép lịch sự.
Could you take a picture of us? | /kʊd ju teɪk‿ə ˈpɪktʃɚ əv‿ʌs/ | Bạn chụp giúp chúng tôi một tấm được không? | Chụp xong nhớ cảm ơn: "Thank you so much!"
After you. | /ˈæftɚ ju/ | Mời bạn đi trước | Nhường ở cửa hoặc thang máy. Giữ cửa cho người phía sau là phép lịch sự cơ bản ở các nước nói tiếng Anh.
Watch out! | /wɑːtʃ‿aʊt/ | Cẩn thận! | Hét to khi có nguy hiểm. "Look out!" cũng cùng nghĩa.
`,
"Hỏi đường · giao thông": `
How do I get to the subway station? | /haʊ duː aɪ get tə ðə ˈsʌbweɪ ˈsteɪʃən/ | Đến ga tàu điện ngầm đi thế nào? | Tiếng Anh-Anh: underground / tube station. Chỉ cần thay điểm đến.
Is it far from here? | /ɪz‿ɪt fɑːr frəm hɪr/ | Từ đây có xa không? | Âm /r/ cuối trong "far": cong lưỡi nhẹ, đừng bỏ.
Is it within walking distance? | /ɪz‿ɪt wɪˈðɪn ˈwɑːkɪŋ ˈdɪstəns/ | Đi bộ tới đó được không? | "Can I walk there?" cũng được.
Go straight. | /goʊ streɪt/ | Đi thẳng | "Go straight for two blocks." Ở Mỹ người ta tính quãng đường bằng block (dãy nhà).
Turn left at the corner. | /tɝːn left‿ət ðə ˈkɔːrnɚ/ | Đến góc đường thì rẽ trái | Ở đèn giao thông: "at the light".
It's on your right. | /ɪts‿ɑːn jʊr raɪt/ | Nó ở bên tay phải bạn | Âm /r/ đầu của "right": tròn môi, lưỡi không chạm đâu — không đọc thành /z/ như “d”, “gi”.
It's across the street. | /ɪts‿əˈkrɑːs ðə striːt/ | Nó ở bên kia đường | "across from ~" = đối diện ~.
It's next to the bank. | /ɪts nekst tə ðə bæŋk/ | Nó ở cạnh ngân hàng | Cụm phụ âm /kst/ trong "next": nói nhanh thì /t/ rất nhẹ, nhưng /ks/ phải rõ.
Which line goes downtown? | /wɪtʃ laɪn goʊz ˌdaʊnˈtaʊn/ | Tuyến nào đi vào trung tâm? | Trước "downtown" không dùng "to".
Where do I transfer? | /wer duː aɪ trænsˈfɝː/ | Tôi đổi tàu ở đâu? | Tiếng Anh-Anh dùng "change": "Where do I change?"
Does this bus go to the airport? | /dʌz ðɪs bʌs goʊ tə ði ˈerpɔːrt/ | Xe buýt này có đi sân bay không? | "the" trước nguyên âm đọc là /ði/. Đọc rõ /s/ cuối của "bus".
Which stop should I get off at? | /wɪtʃ stɑːp ʃʊd‿aɪ get‿ɑːf‿æt/ | Tôi nên xuống ở trạm nào? | "get off" = xuống (xe buýt, tàu).
One ticket to Boston, please. | /wʌn ˈtɪkɪt tə ˈbɑːstən pliːz/ | Cho tôi một vé đi Boston | Trước điểm đến dùng "to".
Round trip or one way? | /raʊnd trɪp‿ɔːr wʌn weɪ/ | Khứ hồi hay một chiều? | Tiếng Anh-Anh: "Return or single?"
Can you take me to this address? | /kən ju teɪk mi tə ðɪs‿ˈædres/ | Cho tôi đến địa chỉ này | Đưa màn hình điện thoại cho tài xế xem là chắc nhất.
Could you pull over here? | /kʊd ju pʊl‿ˈoʊvɚ hɪr/ | Bạn dừng xe ở đây được không? | Khi muốn xuống xe. "Right here is fine." cũng được.
How long does it take? | /haʊ lɑːŋ dʌz‿ɪt teɪk/ | Mất bao lâu? | Đáp: "About 20 minutes."
Is this seat taken? | /ɪz ðɪs siːt ˈteɪkən/ | Chỗ này có ai ngồi chưa? | Nếu trống: "No, go ahead." "seat" có nguyên âm dài /iː/ — đừng đọc thành "sit".
`,
"Gọi món ở nhà hàng": `
A table for two, please. | /ə ˈteɪbəl fɚ tuː pliːz/ | Cho tôi bàn hai người | Ở nhà hàng Mỹ, thường đợi nhân viên dẫn đến bàn.
Do you have a reservation? | /duː ju hæv‿ə rezɚˈveɪʃən/ | Anh/chị có đặt bàn trước không? | Nhân viên hỏi. Đáp theo tên người đặt: "Yes, under Nguyen."
Can I see the menu? | /kən‿aɪ siː ðə ˈmenjuː/ | Cho tôi xem thực đơn | Trọng âm ở âm tiết đầu: ME-nu.
What do you recommend? | /wʌt duː ju rekəˈmend/ | Bạn gợi ý món gì? | "What's popular here?" cũng hay.
I'll have the steak. | /aɪl hæv ðə steɪk/ | Cho tôi món bít tết | Công thức gọi món: I'll have + tên món.
Can I get a Coke? | /kən‿aɪ get‿ə koʊk/ | Cho tôi một Coca | "get a" nối thành /getə/. Coca-Cola thường gọi là "Coke".
Medium rare, please. | /ˈmiːdiəm rer pliːz/ | Cho tôi tái vừa (medium rare) | Đáp câu "How would you like your steak?"
No onions, please. | /noʊ ˈʌnjənz pliːz/ | Không cho hành tây | "Can I get it without onions?" cũng cùng nghĩa. Đọc rõ /z/ cuối.
I'm allergic to peanuts. | /aɪm‿əˈlɝːdʒɪk tə ˈpiːnʌts/ | Tôi bị dị ứng lạc / đậu phộng | Trọng âm ở giữa: a-LLER-gic. Danh từ là "allergy" /ˈælɚdʒi/.
Is it spicy? | /ɪz‿ɪt ˈspaɪsi/ | Món này có cay không? | "Spicy" ở Mỹ thường không cay lắm so với khẩu vị của nhiều người Việt.
Could we get some water? | /kʊd wi get sʌm ˈwɑːtɚ/ | Cho chúng tôi xin ít nước | Nước lọc ở nhà hàng Mỹ thường miễn phí. "t" trong "water" giọng Mỹ gần như /d/.
Everything was great. | /ˈevriθɪŋ wəz greɪt/ | Mọi thứ đều rất ngon | Đáp khi nhân viên hỏi "How is everything?"
Can we get the check, please? | /kən wi get ðə tʃek pliːz/ | Cho chúng tôi tính tiền | Tiếng Anh-Anh: the bill. Ở Mỹ thường thanh toán ngay tại bàn.
Can we split the bill? | /kən wi splɪt ðə bɪl/ | Chúng tôi trả riêng được không? | Cũng có thể nói "separate checks".
It's on me. | /ɪts‿ɑːn miː/ | Để tôi mời | "My treat!" cũng cùng nghĩa.
Can I get this to go? | /kən‿aɪ get ðɪs tə goʊ/ | Cho tôi mang về | Gói đồ ăn thừa: "Can I get a box?"
Is the tip included? | /ɪz ðə tɪp‿ɪnˈkluːdɪd/ | Đã gồm tiền tip chưa? | Ở nhà hàng Mỹ thường để tip riêng 15–20%; ở Việt Nam thì ít khi.
`,
"Quán cà phê · cửa hàng tiện lợi": `
Can I get an iced Americano? | /kən‿aɪ get‿ən‿aɪst‿əmerɪˈkɑːnoʊ/ | Cho tôi một Americano đá | Đuôi -d của "iced" đọc là /t/, rất nhẹ nhưng có. Gọi đồ uống thường dùng "Can I get ~?".
What size would you like? | /wʌt saɪz wʊd ju laɪk/ | Anh/chị muốn cỡ nào? | Nhân viên hỏi. "would you" nói nhanh nghe như /wʊdʒu/.
Small, please. | /smɑːl pliːz/ | Cho tôi cỡ nhỏ | Starbucks dùng tên riêng: tall, grande, venti.
For here or to go? | /fɚ hɪr ɔːr tə goʊ/ | Dùng ở đây hay mang đi? | Tiếng Anh-Anh: "Eat in or take away?"
Can I get oat milk instead? | /kən‿aɪ get‿oʊt mɪlk‿ɪnˈsted/ | Đổi sang sữa yến mạch được không? | "instead" = thay vào đó. Có thể phải trả thêm tiền.
Less ice, please. | /les‿aɪs pliːz/ | Ít đá thôi | Không đá: "No ice, please."
Decaf, please. | /ˈdiːkæf pliːz/ | Cho tôi loại không caffeine | Viết tắt của "decaffeinated".
Can I get a name for the order? | /kən‿aɪ get‿ə neɪm fɚ ði ˈɔːrdɚ/ | Cho tôi xin tên để ghi đơn | Nhân viên hỏi để viết tên lên cốc. Chọn sẵn một cái tên dễ đọc cho tiện.
Do you need a bag? | /duː ju niːd‿ə bæg/ | Anh/chị có cần túi không? | Không cần: "No, I'm good." /g/ cuối của "bag" là âm hữu thanh — đừng đọc thành "back".
Can I get a receipt? | /kən‿aɪ get‿ə rɪˈsiːt/ | Cho tôi hóa đơn | Chữ p trong "receipt" là âm câm.
Where can I find batteries? | /wer kən‿aɪ faɪnd ˈbætɚiz/ | Pin để ở chỗ nào? | Câu vạn năng để hỏi chỗ để hàng. Lưu ý: “pin” tiếng Việt là "battery".
Do you sell phone chargers? | /duː ju sel foʊn ˈtʃɑːrdʒɚz/ | Ở đây có bán sạc điện thoại không? | "Do you have ~?" cũng được.
Can you heat this up? | /kən ju hiːt ðɪs‿ʌp/ | Hâm nóng giúp tôi được không? | "this up" nối liền thành /ðɪsʌp/.
That's it. | /ðæts‿ɪt/ | Vậy thôi | Khi nhân viên hỏi "Anything else?"
Here you go. | /hɪr ju goʊ/ | Của bạn đây | Dùng khi đưa tiền hoặc đồ cho người khác.
Keep the change. | /kiːp ðə tʃeɪndʒ/ | Không cần trả lại tiền thừa | Hay dùng khi đi taxi hoặc nhận đồ giao tận nơi, thay cho tiền tip.
`,
"Mua sắm · thanh toán": `
I'm just looking, thanks. | /aɪm dʒʌst ˈlʊkɪŋ θæŋks/ | Tôi chỉ xem thôi, cảm ơn | Khi nhân viên hỏi "Can I help you find anything?"
Do you have this in a medium? | /duː ju hæv ðɪs‿ɪn‿ə ˈmiːdiəm/ | Cái này có cỡ M không? | Cỡ: small / medium / large.
Do you have it in black? | /duː ju hæv‿ɪt‿ɪn blæk/ | Có màu đen không? | Trước màu sắc dùng "in".
Can I try this on? | /kən‿aɪ traɪ ðɪs‿ɑːn/ | Tôi thử cái này được không? | "try on" = mặc thử, đi thử (quần áo, giày dép).
Where's the fitting room? | /werz ðə ˈfɪtɪŋ ruːm/ | Phòng thử đồ ở đâu? | Tiếng Anh-Anh: changing room.
It's too big. | /ɪts tuː bɪg/ | Rộng quá | Chật quá: "It's too small." Đọc rõ /g/ cuối.
It's a bit tight. | /ɪts‿ə bɪt taɪt/ | Hơi chật | Hơi rộng: "It's a bit loose."
Is this on sale? | /ɪz ðɪs‿ɑːn seɪl/ | Cái này có giảm giá không? | "on sale" = đang giảm giá; "for sale" = đang bán. Rất dễ nhầm!
Can you give me a discount? | /kən ju gɪv mi ə ˈdɪskaʊnt/ | Bớt cho tôi được không? | Cửa hàng thông thường ở Mỹ hầu như không mặc cả; chỉ chợ trời, đồ cũ thì có.
I'll take it. | /aɪl teɪk‿ɪt/ | Tôi lấy cái này | Khi đã chọn xong. Hai món trở lên: "I'll take them."
Cash or card? | /kæʃ‿ɔːr kɑːrd/ | Tiền mặt hay thẻ? | Câu chắc chắn sẽ nghe ở quầy tính tiền.
Do you take Apple Pay? | /duː ju teɪk‿ˈæpəl peɪ/ | Có nhận Apple Pay không? | "take" = nhận (hình thức thanh toán).
Can I get a refund? | /kən‿aɪ get‿ə ˈriːfʌnd/ | Tôi được hoàn tiền không? | Nhớ giữ hóa đơn.
I'd like to exchange this. | /aɪd laɪk tu ɪksˈtʃeɪndʒ ðɪs/ | Tôi muốn đổi cái này | Nói thêm lý do: "It's the wrong size."
Can you gift wrap it? | /kən ju gɪft ræp‿ɪt/ | Gói quà giúp tôi được không? | Chữ w trong "wrap" câm: /ræp/.
Does that include tax? | /dʌz ðæt‿ɪnˈkluːd tæks/ | Đã gồm thuế chưa? | Ở Mỹ giá niêm yết thường chưa có thuế, nên lúc tính tiền sẽ cao hơn.
`,
"Số · giờ · ngày tháng": `
What time is it? | /wʌt taɪm‿ɪz‿ɪt/ | Bây giờ là mấy giờ? | Hỏi người lạ: "Excuse me, do you have the time?"
It's three thirty. | /ɪts θriː ˈθɝːti/ | Ba giờ rưỡi | "half past three" (tiếng Anh-Anh) cũng cùng nghĩa. Âm đầu là /θ/, không phải /t/.
It's a quarter to five. | /ɪts‿ə ˈkwɔːrtɚ tə faɪv/ | Năm giờ kém mười lăm | "quarter" = 15 phút. Nói "four forty-five" cũng được.
At noon | /ət nuːn/ | Lúc 12 giờ trưa | Nửa đêm là "midnight" — rõ ràng hơn "12 a.m./p.m.".
What's the date today? | /wʌts ðə deɪt təˈdeɪ/ | Hôm nay ngày bao nhiêu? | Hỏi thứ: "What day is it today?"
It's May 3rd. | /ɪts meɪ θɝːd/ | Hôm nay ngày 3 tháng 5 | Ngày đọc bằng số thứ tự: first, second, third… Người Mỹ viết tháng trước: 5/3 = ngày 3 tháng 5.
My birthday is in October. | /maɪ ˈbɝːθdeɪ ɪz‿ɪn‿ɑːkˈtoʊbɚ/ | Sinh nhật tôi vào tháng 10 | Trước tháng dùng "in", trước ngày dùng "on": on October 5th.
On Monday | /ɑːn ˈmʌndeɪ/ | Vào thứ hai | Trước thứ dùng "on". Hằng tuần: "on Mondays".
Next weekend | /nekst ˈwiːkend/ | Cuối tuần sau | Trước next, last, this không dùng giới từ.
The day after tomorrow | /ðə deɪ ˈæftɚ təˈmɑːroʊ/ | Ngày kia / ngày mốt | Hôm kia: "the day before yesterday".
Thirteen or thirty? | /ˌθɝːˈtiːn‿ɔːr ˈθɝːti/ | Mười ba hay ba mươi? | 13 nhấn ở "-teen", 30 nhấn ở âm đầu. Nghe giá tiền nhớ hỏi lại cho chắc.
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlɚz/ | 15 đô la | $15.50 đọc là "fifteen fifty". Đọc rõ /z/ cuối của "dollars".
Two hundred and fifty | /tuː ˈhʌndrəd‿ən ˈfɪfti/ | Hai trăm năm mươi (250) | Người Mỹ hay bỏ "and": two hundred fifty.
Ten thousand | /ten ˈθaʊzənd/ | Mười nghìn (10.000) | Tiếng Việt viết 10.000, tiếng Anh viết 10,000: dấu chấm và dấu phẩy đổi chỗ cho nhau.
One million | /wʌn ˈmɪljən/ | Một triệu (1.000.000) | Tỷ = "billion". 50.000 đồng = "fifty thousand dong".
Twice a week | /twaɪs‿ə wiːk/ | Mỗi tuần hai lần | once (một lần), twice (hai lần), three times (ba lần).
In ten minutes | /ɪn ten ˈmɪnɪts/ | 10 phút nữa | "in" + thời gian = sau ~ nữa, không phải “trong vòng 10 phút”.
`,
"Trò chuyện xã giao": `
How was your weekend? | /haʊ wəz jʊr ˈwiːkend/ | Cuối tuần của bạn thế nào? | Câu hỏi quen thuộc ngày thứ hai. Đáp ngắn một hai câu rồi hỏi lại.
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | Khá thư giãn | "pretty" = khá; ở đây không có nghĩa là “xinh”.
Any plans for the weekend? | /ˈeni plænz fɚ ðə ˈwiːkend/ | Cuối tuần có kế hoạch gì không? | Câu hỏi quen thuộc ngày thứ sáu. Không có kế hoạch: "Not really, just relaxing."
Nice weather today, huh? | /naɪs ˈweðɚ təˈdeɪ hʌ/ | Hôm nay trời đẹp nhỉ | Thời tiết là chủ đề an toàn nhất để nói với bất kỳ ai.
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | Hôm nay lạnh cóng | Nóng thì nói "It's boiling!" hoặc "It's so hot!"
How long have you lived here? | /haʊ lɑːŋ hæv ju lɪvd hɪr/ | Bạn sống ở đây bao lâu rồi? | Đáp: "About three years."
Have you been to Vietnam? | /hæv ju bɪn tə viːetˈnɑːm/ | Bạn đến Việt Nam bao giờ chưa? | Hỏi về trải nghiệm: have been to.
What do you do for fun? | /wʌt duː ju duː fɚ fʌn/ | Lúc rảnh bạn thường làm gì? | Tự nhiên hơn nhiều so với "What's your hobby?".
Have you seen any good shows lately? | /hæv ju siːn‿ˈeni gʊd ʃoʊz ˈleɪtli/ | Dạo này bạn có xem gì hay không? | "show" = chương trình truyền hình, phim bộ.
That sounds fun. | /ðæt saʊndz fʌn/ | Nghe vui đấy | Phản hồi khi người khác kể chuyện. "That sounds great!" cũng hay.
Same here. | /seɪm hɪr/ | Tôi cũng vậy | Thân mật: "Same!"
Me neither. | /miː ˈniːðɚ/ | Tôi cũng không | Đồng tình với câu phủ định: "I don't like it." → "Me neither." (không phải "Me too"!)
I know, right? | /aɪ noʊ raɪt/ | Đúng thế còn gì! | Đồng ý mạnh, thân mật.
Oh, really? | /oʊ ˈriːli/ | Ồ, thật à? | Thể hiện sự quan tâm; lên giọng ở cuối.
By the way | /baɪ ðə weɪ/ | Nhân tiện / À này | Dùng để đổi chủ đề. Nhắn tin viết là BTW.
How's work? | /haʊz wɝːk/ | Công việc thế nào? | Hỏi thăm người quen. Đáp: "Busy, but good!"
It was nice talking to you. | /ɪt wəz naɪs ˈtɑːkɪŋ tə ju/ | Nói chuyện với bạn rất vui | Dùng để kết thúc cuộc trò chuyện một cách tự nhiên.
`,
"Cảm xúc · phản ứng": `
I'm so happy for you! | /aɪm soʊ ˈhæpi fɚ ju/ | Mừng cho bạn quá! | Khi người khác có chuyện vui.
Congratulations! | /kəngrætʃəˈleɪʃənz/ | Chúc mừng! | Luôn có -s ở cuối. Nói gọn: "Congrats!"
That's awesome! | /ðæts‿ˈɑːsəm/ | Tuyệt quá! | Câu phản ứng người Mỹ dùng rất thường xuyên.
No way! | /noʊ weɪ/ | Không thể nào! | Khi ngạc nhiên. Cũng dùng để từ chối: "No way, I'm not doing that."
Seriously? | /ˈsɪriəsli/ | Thật hả? / Nghiêm túc đấy à? | Tùy giọng mà thể hiện ngạc nhiên hoặc bực mình.
I'm so tired. | /aɪm soʊ ˈtaɪɚd/ | Mệt quá | Kiệt sức: "I'm exhausted."
I'm stressed out. | /aɪm strest‿aʊt/ | Căng thẳng quá | Tự nhiên hơn "I have stress". Đuôi -ed đọc /t/.
I'm bored. | /aɪm bɔːrd/ | Chán quá | Chú ý! "I'm boring" nghĩa là “Tôi là người nhàm chán”.
I'm excited. | /aɪm‿ɪkˈsaɪtɪd/ | Háo hức quá | Khi đang mong chờ điều gì. Tính từ đuôi -ed chỉ cảm xúc của chính mình; đuôi -ed ở đây đọc /ɪd/.
I'm nervous. | /aɪm ˈnɝːvəs/ | Tôi hồi hộp quá | Trước phỏng vấn, thuyết trình. Với người khác: "Don't be nervous."
That's too bad. | /ðæts tuː bæd/ | Tiếc quá | Tiếc nuối nhẹ. Chuyện nghiêm trọng thì dùng câu dưới.
I'm sorry to hear that. | /aɪm ˈsɑːri tə hɪr ðæt/ | Tôi rất tiếc khi nghe chuyện đó | Đây là lời chia buồn, không phải xin lỗi. "sorry" = lấy làm tiếc.
What a relief! | /wʌt‿ə rɪˈliːf/ | May quá! / Nhẹ cả người! | Đi kèm "Phew!" nghe tự nhiên hơn.
Oh my gosh! | /oʊ maɪ gɑːʃ/ | Trời ơi! | Cách nói nhẹ của "Oh my God". Nhắn tin: OMG.
I'm upset. | /aɪm‿ʌpˈset/ | Tôi buồn bực quá | Cảm giác lưng chừng giữa giận và buồn.
That's so annoying. | /ðæts soʊ əˈnɔɪɪŋ/ | Bực mình thật | Nói thẳng "You're annoying" với ai đó nghe khá nặng.
I can't wait! | /aɪ kænt weɪt/ | Mong quá đi! | Dịch sát chữ: “Tôi không đợi được”.
It's not a big deal. | /ɪts nɑːt‿ə bɪg diːl/ | Chuyện nhỏ thôi mà | Trấn an khi người khác thấy áy náy.
`,
"Lời khen · thiện cảm": `
You look great! | /ju lʊk greɪt/ | Trông bạn tuyệt lắm! | Khen ngoại hình dùng "You look ~"; tự nhiên giữa người quen.
I love your shoes. | /aɪ lʌv jʊr ʃuːz/ | Giày của bạn đẹp quá | "love" = rất thích. Khen nhẹ nhàng như vậy thì người mới gặp cũng được.
That color looks good on you. | /ðæt ˈkʌlɚ lʊks gʊd‿ɑːn ju/ | Màu đó hợp với bạn lắm | "look good on" + người = hợp với ai.
You have a great smile. | /ju hæv‿ə greɪt smaɪl/ | Nụ cười của bạn đẹp lắm | Lời khen ấm áp khi đã thân nhau.
You're so funny. | /jʊr soʊ ˈfʌni/ | Bạn hài hước thật | "funny" = buồn cười, hài hước; "fun" = ở cùng thấy vui.
Great job! | /greɪt dʒɑːb/ | Làm tốt lắm! | Dùng được ở cơ quan, trường học. "Nice work!" cũng vậy.
I'm proud of you. | /aɪm praʊd‿əv ju/ | Tôi tự hào về bạn | Nói với gia đình, bạn bè; cấp trên nói với cấp dưới cũng được.
You did it! | /ju dɪd‿ɪt/ | Bạn làm được rồi! | Nói với người vừa đạt được mục tiêu.
Your Vietnamese is really good! | /jʊr viːetnəˈmiːz‿ɪz ˈriːli gʊd/ | Bạn nói tiếng Việt giỏi thật! | Bạn nước ngoài đang học tiếng Việt nghe câu này sẽ rất vui.
You have good taste. | /ju hæv gʊd teɪst/ | Bạn có gu thật đấy | Khen gu ăn mặc, âm nhạc, trang trí. “Gu” tiếng Anh là "taste".
I really enjoyed spending time with you. | /aɪ ˈriːli ɪnˈdʒɔɪd ˈspendɪŋ taɪm wɪð ju/ | Đi chơi với bạn vui lắm | Khi kết thúc buổi hẹn hoặc buổi gặp mặt.
Do you want to grab coffee sometime? | /duː ju wɑːnt tə græb ˈkɑːfi ˈsʌmtaɪm/ | Hôm nào đi cà phê nhé? | "want to" nói nhanh thành "wanna". "grab" = ăn, uống nhanh.
I miss you. | /aɪ mɪs ju/ | Tôi nhớ bạn | Nói với người đang ở xa; dùng cả với gia đình, bạn bè.
You mean a lot to me. | /ju miːn‿ə lɑːt tə mi/ | Bạn rất quan trọng với tôi | Nói lời thật lòng với bạn bè, người yêu.
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvɚ/ | May mà có bạn! | Hay nói phóng đại để cảm ơn, kể cả khi chỉ được giúp chuyện nhỏ.
You made my day! | /ju meɪd maɪ deɪ/ | Bạn làm tôi vui cả ngày! | Khi nhận được lời nói hay món quà dễ thương.
That's very kind of you. | /ðæts ˈveri kaɪnd‿əv ju/ | Bạn tốt quá | Đáp lịch sự khi được giúp đỡ hay được khen.
`,
"Công sở · email": `
I hope this email finds you well. | /aɪ hoʊp ðɪs‿ˈiːmeɪl faɪndz ju wel/ | Hy vọng anh/chị vẫn khỏe | Câu mở đầu email trang trọng. Nhẹ hơn: "I hope you're doing well." Không dịch “Kính gửi anh/chị”: chỉ cần "Hi" hoặc "Dear" + tên.
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu æsk‿əˈbaʊt ðə ˈskedʒuːl/ | Tôi viết thư này để hỏi về lịch trình | Nêu mục đích ngay câu đầu: I'm writing to + mục đích.
I've attached the report. | /aɪv‿əˈtætʃt ðə rɪˈpɔːrt/ | Tôi đã đính kèm báo cáo | "Please find attached…" nghe cứng hơn. Đuôi -ed đọc /t/.
Just a quick reminder about tomorrow's meeting. | /dʒʌst‿ə kwɪk rɪˈmaɪndɚ əˈbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | Xin nhắc lại về cuộc họp ngày mai | Cách nhắc nhở nhẹ nhàng.
Let me know if you have any questions. | /let mi noʊ ɪf ju hæv‿ˈeni ˈkwestʃənz/ | Nếu có thắc mắc gì, xin cứ cho tôi biết | Câu kết email quen thuộc.
Could you send me the file by Friday? | /kʊd ju send mi ðə faɪl baɪ ˈfraɪdeɪ/ | Anh/chị gửi tôi tệp trước thứ sáu được không? | "by" = trước (hạn chót); "until" = cho đến (liên tục).
Sorry for the late reply. | /ˈsɑːri fɚ ðə leɪt rɪˈplaɪ/ | Xin lỗi vì trả lời muộn | Bớt nặng nề hơn: "Thanks for your patience."
Thanks for getting back to me. | /θæŋks fɚ ˈgetɪŋ bæk tə mi/ | Cảm ơn anh/chị đã phản hồi | "get back to" = liên lạc lại.
Best regards, | /best rɪˈgɑːrdz/ | Trân trọng, | Lời kết an toàn. Thân hơn: "Best," "Thanks,"
Let's schedule a meeting. | /lets ˈskedʒuːl‿ə ˈmiːtɪŋ/ | Chúng ta lên lịch họp nhé | Mỹ đọc /ˈskedʒuːl/, Anh đọc /ˈʃedjuːl/.
I'm running late. | /aɪm ˈrʌnɪŋ leɪt/ | Tôi sẽ đến muộn một chút | Báo trước khi đang trên đường. "I'll be there in 10."
Can we push the meeting to 3? | /kən wi pʊʃ ðə ˈmiːtɪŋ tə θriː/ | Dời cuộc họp sang 3 giờ được không? | Dời sớm hơn dùng "move up": "Can we move it up to 1?"
I'll get back to you. | /aɪl get bæk tə ju/ | Tôi sẽ kiểm tra rồi báo lại | Khi chưa trả lời ngay được.
Can you walk me through it? | /kən ju wɑːk mi θruː ɪt/ | Anh/chị hướng dẫn tôi từng bước được không? | "walk through" = hướng dẫn từng bước.
Let's touch base next week. | /lets tʌtʃ beɪs nekst wiːk/ | Tuần sau chúng ta trao đổi nhanh nhé | Gặp ngắn để cập nhật tiến độ.
What's the deadline? | /wʌts ðə ˈdedlaɪn/ | Hạn chót là khi nào? | "When is this due?" cũng cùng nghĩa.
I'm working from home today. | /aɪm ˈwɝːkɪŋ frəm hoʊm təˈdeɪ/ | Hôm nay tôi làm việc ở nhà | Viết tắt: WFH.
I'm off tomorrow. | /aɪm‿ɑːf təˈmɑːroʊ/ | Mai tôi nghỉ | Nghỉ phép: "I'm taking a day off tomorrow."
Thanks for all your hard work. | /θæŋks fɚ ɑːl jʊr hɑːrd wɝːk/ | Cảm ơn mọi người đã vất vả | Không có câu nào tương đương hẳn với “Mọi người vất vả rồi”. Chào ra về chỉ cần "See you tomorrow!"
`,
"Điện thoại · viết tắt khi nhắn tin": `
Hello, this is Minh. | /həˈloʊ ðɪs‿ɪz mɪn/ | A lô, Minh đây | Qua điện thoại nói "This is Minh", không nói "I'm Minh".
Can I speak to Mr. Nguyen? | /kən‿aɪ spiːk tə ˈmɪstɚ wɪn/ | Cho tôi nói chuyện với ông Nguyễn được không? | Lịch sự hơn: "May I speak to…?" Người Mỹ thường đọc "Nguyen" gần giống "win".
Who's calling, please? | /huːz ˈkɑːlɪŋ pliːz/ | Xin hỏi ai đang gọi? | Người nghe máy hỏi.
Hold on a second. | /hoʊld‿ɑːn‿ə ˈsekənd/ | Vui lòng chờ một chút | Nhờ người khác đợi khi đang nói chuyện, gọi điện.
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ‿ʌp/ | Xin lỗi, tiếng bị ngắt quãng | "break up" = (tiếng) bị ngắt quãng; cũng có nghĩa là chia tay.
Can I call you back? | /kən‿aɪ kɑːl ju bæk/ | Tôi gọi lại cho bạn sau được không? | Khi bận: "I'm in a meeting. Can I call you back?"
I'll text you. | /aɪl tekst ju/ | Tôi sẽ nhắn tin cho bạn | Ở Mỹ gửi tin nhắn gọi là "text". Tiếng Anh cũng viết tắt như “k”, “dc” của tiếng Việt: xem các thẻ dưới đây.
I'm on my way. | /aɪm‿ɑːn maɪ weɪ/ | Tôi đang trên đường đến | Nhắn tin viết là OMW.
LOL | /el‿oʊ ˈel/ | cười lớn (laughing out loud) | Giống “haha” khi nhắn tin, không phải cười thật to.
BRB | /biː ɑːr ˈbiː/ | quay lại ngay (be right back) | Khi tạm rời cuộc trò chuyện hay ván game.
BTW | /biː tiː ˈdʌbəljuː/ | nhân tiện (by the way) | Để đổi chủ đề.
TBH | /tiː biː ˈeɪtʃ/ | nói thật là (to be honest) | Đặt ở đầu hoặc cuối câu.
IDK | /aɪ diː ˈkeɪ/ | không biết (I don't know) | Hay viết thường: idk. Giống “k biết” khi nhắn tin tiếng Việt.
OMG | /oʊ em ˈdʒiː/ | trời ơi (oh my God) | Nói thành lời cũng được: "Oh-em-gee!"
ASAP | /eɪ es‿eɪ ˈpiː/ / /ˈeɪsæp/ | càng sớm càng tốt (as soon as possible) | Dùng cả ở công sở, nhưng với cấp trên, ghi rõ ngày giờ sẽ lịch sự hơn.
TTYL | /tiː tiː waɪ ˈel/ | nói chuyện sau nhé (talk to you later) | Dùng để kết thúc cuộc trò chuyện.
NVM | /en viː ˈem/ | thôi, không có gì (never mind) | Khi muốn rút lại câu hỏi.
FYI | /ef waɪ ˈaɪ/ | cho bạn biết (for your information) | Hay dùng trong email, tin nhắn công việc.
`,
"Du lịch (sân bay · khách sạn)": `
Here's my passport. | /hɪrz maɪ ˈpæspɔːrt/ | Hộ chiếu của tôi đây | Đưa khi làm thủ tục hoặc nhập cảnh.
I'm here for sightseeing. | /aɪm hɪr fɚ ˈsaɪtsiːɪŋ/ | Tôi đến đây để tham quan | Trả lời câu hỏi ở quầy nhập cảnh: "What's the purpose of your visit?"
I'm staying for a week. | /aɪm ˈsteɪɪŋ fɚ ə wiːk/ | Tôi ở lại một tuần | Trả lời câu "How long are you staying?"
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ‿ət ðə ˈhɪltən/ | Tôi ở khách sạn Hilton | Trả lời câu "Where are you staying?"
Window or aisle? | /ˈwɪndoʊ ɔːr aɪl/ | Ghế cạnh cửa sổ hay cạnh lối đi? | Chữ s trong "aisle" câm: /aɪl/.
I'd like an aisle seat, please. | /aɪd laɪk‿ən‿aɪl siːt pliːz/ | Cho tôi ghế cạnh lối đi | Cạnh cửa sổ: "a window seat".
Where is the baggage claim? | /wer ɪz ðə ˈbægɪdʒ kleɪm/ | Khu nhận hành lý ở đâu? | Ở Anh gọi là "baggage reclaim".
My luggage is missing. | /maɪ ˈlʌgɪdʒ‿ɪz ˈmɪsɪŋ/ | Hành lý của tôi bị thất lạc | "luggage" là danh từ không đếm được: "a piece of luggage", không nói "two luggages".
I have a reservation under Nguyen. | /aɪ hæv‿ə rezɚˈveɪʃən‿ˈʌndɚ wɪn/ | Tôi đã đặt phòng dưới tên Nguyễn | under + tên người đặt. Dùng họ như trên hộ chiếu.
What time is check-out? | /wʌt taɪm‿ɪz ˈtʃekaʊt/ | Mấy giờ trả phòng? | Muốn trả phòng muộn: "Can I get a late check-out?"
Can I check in early? | /kən‿aɪ tʃek‿ɪn‿ˈɝːli/ | Tôi nhận phòng sớm được không? | "check in" nối thành /tʃekɪn/.
Is breakfast included? | /ɪz ˈbrekfəst‿ɪnˈkluːdɪd/ | Có bao gồm bữa sáng không? | "breakfast" đọc /ˈbrekfəst/, không phải “break-fast”.
The air conditioner isn't working. | /ði er kənˈdɪʃənɚ ˈɪzənt ˈwɝːkɪŋ/ | Điều hòa / máy lạnh không chạy | Gọi tắt là AC /eɪ ˈsiː/.
Could I get some extra towels? | /kʊd‿aɪ get sʌm‿ˈekstrə ˈtaʊəlz/ | Cho tôi xin thêm khăn tắm được không? | "could I" nối thành /kʊdaɪ/.
Can you hold my bags until 3? | /kən ju hoʊld maɪ bægz‿ənˈtɪl θriː/ | Giữ hành lý giúp tôi đến 3 giờ được không? | Gửi đồ sau khi trả phòng. "hold" = giữ hộ.
My flight was delayed. | /maɪ flaɪt wəz dɪˈleɪd/ | Chuyến bay của tôi bị hoãn | Bị hủy: "canceled". Đuôi -ed ở đây đọc /d/.
Where's gate 12? | /werz geɪt twelv/ | Cửa 12 ở đâu? | Tiếng Anh đặt số sau danh từ: gate 12. Đọc rõ cụm âm cuối /lv/.
Do I need to take my laptop out? | /duː aɪ niːd tə teɪk maɪ ˈlæptɑːp‿aʊt/ | Tôi có cần lấy máy tính xách tay ra không? | Ở cửa soi chiếu an ninh. Máy tính xách tay tiếng Anh là "laptop".
`,
"Bệnh viện · khẩn cấp": `
Help! | /help/ | Cứu tôi với! | Hét to khi nguy cấp.
Call 911! | /kɑːl naɪn wʌn wʌn/ | Gọi 911 đi! | Số khẩn cấp ở Mỹ là 911, ở Anh là 999 (ở Việt Nam: 113, 114, 115).
I need a doctor. | /aɪ niːd‿ə ˈdɑːktɚ/ | Tôi cần gặp bác sĩ | Gấp: "I need an ambulance."
I don't feel well. | /aɪ doʊnt fiːl wel/ | Tôi thấy không khỏe | Cách nói thông dụng nhất.
I have a headache. | /aɪ hæv‿ə ˈhedeɪk/ | Tôi bị đau đầu | Chỗ đau + ache: stomachache, toothache.
I have a fever. | /aɪ hæv‿ə ˈfiːvɚ/ | Tôi bị sốt | /f/: răng trên chạm môi dưới rồi thổi hơi; /v/ thì rung dây thanh.
My stomach hurts. | /maɪ ˈstʌmək hɝːts/ | Tôi đau bụng | Bộ phận + hurts. Đọc rõ cụm âm cuối /ts/.
I have a sore throat. | /aɪ hæv‿ə sɔːr θroʊt/ | Tôi bị đau họng | "sore" = đau rát. Là cổ họng, không phải cả cái cổ (neck).
I feel dizzy. | /aɪ fiːl ˈdɪzi/ | Tôi thấy chóng mặt | Buồn nôn: "I feel sick." / "I feel nauseous."
I sprained my ankle. | /aɪ spreɪnd maɪ ˈæŋkəl/ | Tôi bị trật mắt cá chân | "sprain" = trật, bong gân. Cổ tay: wrist.
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr hɪr/ | Gần đây có hiệu thuốc không? | Ở Mỹ cũng gọi là "drugstore" (ví dụ CVS).
Do I need a prescription? | /duː aɪ niːd‿ə prɪˈskrɪpʃən/ | Tôi có cần đơn thuốc không? | Thuốc mua không cần đơn gọi là "over-the-counter".
I lost my wallet. | /aɪ lɑːst maɪ ˈwɑːlɪt/ | Tôi bị mất ví | Điện thoại thì "phone". Nơi giữ đồ thất lạc: lost and found.
Someone stole my phone. | /ˈsʌmwʌn stoʊl maɪ foʊn/ | Có người lấy trộm điện thoại của tôi | "stole" là quá khứ của "steal" (ăn trộm).
Where is the police station? | /wer ɪz ðə pəˈliːs ˈsteɪʃən/ | Đồn cảnh sát ở đâu? | Trọng âm của "police" ở âm sau: po-LICE.
I need to contact the Vietnamese embassy. | /aɪ niːd tə ˈkɑːntækt ðə viːetnəˈmiːz‿ˈembəsi/ | Tôi cần liên hệ Đại sứ quán Việt Nam | Câu rất cần khi mất hộ chiếu.
I have travel insurance. | /aɪ hæv ˈtrævəl‿ɪnˈʃʊrəns/ | Tôi có bảo hiểm du lịch | Ở nước có viện phí đắt, nhất định nên mua trước khi đi.
`,
"Cụm động từ": `
pick up | /pɪk‿ʌp/ | đón (bằng xe) / nhặt lên | "I'll pick you up at 7." Đại từ (you, it) đứng giữa.
give up | /gɪv‿ʌp/ | từ bỏ | "Don't give up!" Bỏ việc gì thì dùng V-ing: give up smoking.
figure out | /ˈfɪgjɚ aʊt/ | tìm ra / hiểu ra | "I can't figure out this app." (Tôi không biết dùng ứng dụng này.)
find out | /faɪnd‿aʊt/ | biết được (sự thật) | Khi tìm ra thông tin. "figure out" là tự suy nghĩ để giải.
look for | /lʊk fɔːr/ | tìm (đang tìm) | "I'm looking for my keys." Tìm thấy rồi thì dùng "find".
look after | /lʊk‿ˈæftɚ/ | chăm sóc | "Can you look after my cat?" Ở Mỹ cũng hay dùng "take care of".
look forward to | /lʊk ˈfɔːrwɚd tuː/ | mong chờ | Sau "to" là danh từ hoặc V-ing: "I'm looking forward to seeing you."
run out of | /rʌn‿aʊt‿ʌv/ | hết (cái gì) | Thứ bị hết đặt sau "of": "We ran out of milk."
turn on | /tɝːn‿ɑːn/ | bật | Bật đèn, máy: "Turn on the light." Không nói "open the light". Đại từ đứng giữa: "Turn it on."
turn off | /tɝːn‿ɑːf/ | tắt | Đại từ đứng giữa: "Turn it off." ("turn off it" ✗)
turn down | /tɝːn daʊn/ | từ chối / vặn nhỏ (âm lượng) | Cả hai nghĩa đều hay dùng: "She turned down the offer." / "Turn it down!"
put off | /pʊt‿ɑːf/ | hoãn lại | Trong giao tiếp dùng nhiều hơn "postpone": "Stop putting it off!"
show up | /ʃoʊ ʌp/ | xuất hiện / đến | Khi ai đó có mặt ở chỗ hẹn: "He didn't show up to the party." (Anh ấy không đến bữa tiệc.)
hang out | /hæŋ‿aʊt/ | đi chơi / tụ tập | Đi chơi với bạn là "hang out", không phải "play" (play dùng cho trẻ con, game, thể thao).
check out | /tʃek‿aʊt/ | xem thử / kiểm tra | "Check out this video!" Cũng có nghĩa là trả phòng khách sạn.
work out | /wɝːk‿aʊt/ | tập thể dục / diễn ra suôn sẻ | Tập ở phòng gym: "I work out every day." / "It'll work out." (Rồi sẽ ổn thôi.)
come up with | /kʌm‿ʌp wɪð/ | nghĩ ra (ý tưởng) | Nghĩ ra ý tưởng, lý do, giải pháp: "She came up with a great idea."
get along with | /get‿əˈlɑːŋ wɪð/ | hòa thuận với | Khi quan hệ tốt: "I get along with my coworkers." (Tôi hòa thuận với đồng nghiệp.)
calm down | /kɑːm daʊn/ | bình tĩnh lại | Chữ l trong "calm" câm. Nói câu này với người đang giận có thể khiến họ giận thêm.
set up | /set‿ʌp/ | lắp đặt / chuẩn bị | Cài đặt thiết bị, chuẩn bị cuộc họp: "Can you help me set up my printer?"
break up | /breɪk‿ʌp/ | chia tay (với người yêu) | "They broke up last month." Chia tay với ai: break up with.
fill out | /fɪl‿aʊt/ | điền (đơn) | "Please fill out this form." Tiếng Anh-Anh: fill in.
grow up | /groʊ ʌp/ | lớn lên | Nói nơi mình lớn lên: "I grew up in Hue." (Tôi lớn lên ở Huế.)
wake up | /weɪk‿ʌp/ | thức dậy | Lúc tỉnh giấc là "wake up"; ra khỏi giường là "get up".
`,
"Phát âm dễ sai": `
rice | /raɪs/ | gạo / cơm | /r/: tròn môi, cong lưỡi về sau, đầu lưỡi không chạm đâu. Phân biệt với "lice"; âm cuối là /s/ (khác "rise" /z/ ở bộ Âm cuối).
lice | /laɪs/ | con chấy / chí | /l/: đầu lưỡi chạm lợi sau răng trên. Nói "I like rice" thành "lice" thì to chuyện!
right | /raɪt/ | bên phải / đúng | Bắt đầu bằng /r/ — không đọc thành /z/ như “d”, “gi”. Phân biệt với "light".
light | /laɪt/ | ánh sáng / nhẹ | Bắt đầu bằng /l/, đầu lưỡi chạm lợi trên. Đừng đọc thành "night" (xem thẻ "night").
fan | /fæn/ | quạt / người hâm mộ | /f/: răng trên chạm nhẹ môi dưới rồi thổi hơi. Nguyên âm /æ/ mở miệng rộng hơn “e”.
pan | /pæn/ | cái chảo | /p/: bật hơi mạnh từ hai môi.
coffee | /ˈkɑːfi/ | cà phê | Trọng âm ở âm đầu: CO-ffee. Giữ âm /f/ ở giữa.
copy | /ˈkɑːpi/ | sao chép / bản sao | Âm giữa là /p/ bật hơi. Trọng âm ở âm đầu.
think | /θɪŋk/ | nghĩ | /θ/: đầu lưỡi giữa hai hàm răng rồi thổi hơi. Đọc theo chữ “th” tiếng Việt (/tʰ/) sẽ thành “tink”; đọc /s/ sẽ thành "sink".
sink | /sɪŋk/ | bồn rửa / chìm | Âm /s/, lưỡi ở sau răng.
three | /θriː/ | số 3 | Lưỡi giữa hai hàm răng! Đọc /t/ sẽ thành "tree".
tree | /triː/ | cái cây | /tr/ khác /tʃ/: đừng đọc thành “chi”. Cong lưỡi cho âm /r/.
this | /ðɪs/ | cái này | /ð/ hữu thanh: lưỡi giữa hai hàm răng, rung dây thanh. Không đọc thành /z/ hay /d/.
very | /ˈveri/ | rất | /v/: răng trên chạm môi dưới, rung dây thanh. Đọc thành /b/ sẽ nghe như "berry".
berry | /ˈberi/ | quả mọng (như dâu tây) | Âm /b/ bằng hai môi.
vote | /voʊt/ | bỏ phiếu | Bắt đầu bằng /v/; phân biệt với "boat". Đọc rõ /t/ cuối.
boat | /boʊt/ | con thuyền | Bắt đầu bằng /b/. Nguyên âm đôi /oʊ/, không phải “ô”.
walk | /wɑːk/ | đi bộ | Chữ l câm. Miệng mở rộng /ɑː/.
work | /wɝːk/ | làm việc | Cong lưỡi cho âm /ɝː/. Hay nhầm với "walk".
beach | /biːtʃ/ | bãi biển | /iː/ dài! Đọc ngắn sẽ nghe như một từ chửi tục.
leave | /liːv/ | rời đi | /iː/ dài, giữ âm /v/ cuối. Phân biệt với "live".
live | /lɪv/ | sống | /ɪ/ ngắn và thả lỏng. Đừng bỏ /v/ cuối.
banana | /bəˈnænə/ | quả chuối | Trọng âm ở giữa: ba-NA-na; hai âm kia đọc nhẹ thành /ə/.
hotel | /hoʊˈtel/ | khách sạn | Trọng âm ở sau: ho-TEL. Đọc rõ /l/ cuối.
milk | /mɪlk/ | sữa | Cụm phụ âm cuối /lk/: đừng thêm “ơ” sau /k/, cũng đừng bỏ /l/.
McDonald's | /məkˈdɑːnəldz/ | nhà hàng McDonald's | Trọng âm ở "DO". Cụm âm cuối /ldz/.
thank | /θæŋk/ | cảm ơn (động từ) | /θ/ vô thanh. Đọc theo chữ “th” tiếng Việt sẽ thành "tank".
tank | /tæŋk/ | bể chứa / xe tăng | Âm /t/ thường, lưỡi sau răng.
she | /ʃiː/ | cô ấy | /ʃ/: tròn môi, lưỡi lùi về sau. Đọc thành /s/ sẽ thành "see".
see | /siː/ | nhìn thấy | /s/: đầu lưỡi gần răng, môi không tròn.
ship | /ʃɪp/ | con tàu | /ʃ/ + /ɪ/ ngắn. Phân biệt với "sip" (âm đầu) và "sheep" (nguyên âm dài).
sip | /sɪp/ | nhấp một ngụm | /s/ chứ không phải /ʃ/.
sheep | /ʃiːp/ | con cừu | /iː/ dài; "ship" thì ngắn.
chair | /tʃer/ | cái ghế | /tʃ/ bật ra mạnh. Phân biệt với "share" /ʃ/.
share | /ʃer/ | chia sẻ | /ʃ/ là âm xát, kéo dài được; /tʃ/ thì bật ra.
pie | /paɪ/ | bánh nướng có nhân | /p/ đầu từ bật hơi. Tiếng Việt chỉ có “p” đầu trong từ vay mượn (pin), nên dễ đọc thành /b/.
buy | /baɪ/ | mua (động từ) | /b/ không bật hơi, rung dây thanh.
pea | /piː/ | hạt đậu Hà Lan | Bật hơi /p/ thật rõ. Đọc thành /b/ sẽ thành "bee".
bee | /biː/ | con ong mật | Âm /b/ hữu thanh.
night | /naɪt/ | ban đêm | /n/ đi qua mũi, /l/ ("light") thì không. Nếu giọng địa phương hay lẫn l / n, hãy luyện kỹ cặp này.
full | /fʊl/ | no / đầy | /ʊ/ ngắn. Phân biệt với "fool".
fool | /fuːl/ | kẻ ngốc | /uː/ dài, môi tròn.
`,
"Thành ngữ tiếng Anh": `
It's a piece of cake. | /ɪts‿ə piːs‿əv keɪk/ | Dễ như ăn kẹo | Việc rất dễ: "The test was a piece of cake."
I'm on cloud nine. | /aɪm‿ɑːn klaʊd naɪn/ | Tôi vui như mở cờ trong bụng | Khi cực kỳ hạnh phúc.
It costs an arm and a leg. | /ɪt kɑːsts‿ən‿ɑːrm‿ən‿ə leg/ | Đắt cắt cổ | Đắt đến mức phải đổi cả tay lẫn chân.
Let's call it a day. | /lets kɑːl‿ɪt‿ə deɪ/ | Hôm nay đến đây thôi | Khi kết thúc công việc, học tập. Dùng trong cuộc họp cũng tự nhiên.
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ‿ˈʌndɚ ðə ˈweðɚ/ | Tôi thấy hơi mệt trong người | Ốm nhẹ như sắp cảm. Không liên quan đến thời tiết.
I need to hit the books. | /aɪ niːd tə hɪt ðə bʊks/ | Tôi phải lo học thôi | Trước kỳ thi. Không phải đánh sách!
Once in a blue moon | /wʌns‿ɪn‿ə bluː muːn/ | Năm thì mười họa | Việc rất hiếm: "I only eat fast food once in a blue moon."
Better late than never. | /ˈbetɚ leɪt ðən ˈnevɚ/ | Muộn còn hơn không | Động viên người bắt đầu muộn.
Don't beat around the bush. | /doʊnt biːt‿əˈraʊnd ðə bʊʃ/ | Đừng vòng vo nữa | Muốn người kia nói thẳng vào vấn đề.
It's not my cup of tea. | /ɪts nɑːt maɪ kʌp‿əv tiː/ | Không hợp gu tôi lắm | Cách từ chối nhẹ nhàng.
Let's get the ball rolling. | /lets get ðə bɑːl ˈroʊlɪŋ/ | Nào, bắt đầu thôi | Khi bắt đầu cuộc họp, dự án.
I'll keep my fingers crossed. | /aɪl kiːp maɪ ˈfɪŋgɚz krɑːst/ | Tôi sẽ cầu mong mọi việc suôn sẻ | Thường đi kèm cử chỉ bắt chéo ngón trỏ và ngón giữa.
Hang in there. | /hæŋ‿ɪn ðer/ | Cố lên, gắng thêm chút nữa | Nói với người đang gặp khó khăn.
Speak of the devil! | /spiːk‿əv ðə ˈdevəl/ | Vừa nhắc Tào Tháo, Tào Tháo đến! | Khi người đang được nhắc đến bỗng xuất hiện.
The ball is in your court. | /ðə bɑːl‿ɪz‿ɪn jʊr kɔːrt/ | Giờ đến lượt bạn quyết định | Xuất phát từ môn quần vợt.
My lips are sealed. | /maɪ lɪps‿ɑːr siːld/ | Tôi sẽ giữ bí mật | Nghĩa đen: môi đã được niêm phong.
It's on the tip of my tongue. | /ɪts‿ɑːn ðə tɪp‿əv maɪ tʌŋ/ | Nó ở ngay đầu lưỡi mà chưa nhớ ra | Khi sắp nhớ ra mà vẫn chưa nhớ được.
I'm all ears. | /aɪm‿ɑːl‿ɪrz/ | Tôi đang nghe đây | Lắng tai nghe, mời người kia nói tiếp.
When pigs fly. | /wen pɪgz flaɪ/ | Còn lâu mới có chuyện đó! | Việc không bao giờ xảy ra: "He'll clean his room when pigs fly."
`,
"Phim ảnh · tiếng lóng": `
Spill the tea. | /spɪl ðə tiː/ | Kể nghe chuyện gì nào! | "tea" = chuyện bên lề, tin đồn. Tiếng lóng giữa bạn bè.
No cap. | /noʊ kæp/ | Thật đấy, không xạo | Tiếng lóng của giới trẻ. "cap" = nói dối.
That song slaps. | /ðæt sɑːŋ slæps/ | Bài đó đỉnh thật | "slap" = (nhạc) cực hay. Dùng cả cho đồ ăn.
I'm dead. | /aɪm ded/ | Cười chết mất | Nhắn tin hay kèm biểu tượng đầu lâu. Không phải chết thật.
Low-key | /ˈloʊkiː/ | hơi hơi / ngầm | "I low-key love this song." Ngược lại là high-key (công khai).
I'm obsessed with this song. | /aɪm‿əbˈsest wɪð ðɪs sɑːŋ/ | Tôi nghiện bài này rồi | "obsessed" = mê mẩn. Hay dùng với nghĩa tích cực.
What's it about? | /wʌts‿ɪt‿əˈbaʊt/ | Phim đó nói về gì? | Hỏi nội dung phim, phim bộ.
No spoilers! | /noʊ ˈspɔɪlɚz/ | Đừng tiết lộ nội dung! | "Don't spoil it!" cũng cùng nghĩa.
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə hoʊl ˈsiːzən/ | Tôi cày hết cả mùa phim | "binge-watch" = xem một lèo nhiều tập.
The ending was so good. | /ði ˈendɪŋ wəz soʊ gʊd/ | Cái kết hay thật sự | Không hay: "The ending was disappointing."
It's a must-watch. | /ɪts‿ə ˈmʌstwɑːtʃ/ | Phim này nhất định phải xem | Khi rất muốn giới thiệu.
Plot twist! | /plɑːt twɪst/ | Bước ngoặt bất ngờ! | Cũng dùng khi ngoài đời có chuyện không ngờ.
It's overrated. | /ɪts‿ˌoʊvɚˈreɪtɪd/ | Được khen quá lời | Ngược lại: underrated (bị đánh giá thấp).
That scene gave me chills. | /ðæt siːn geɪv mi tʃɪlz/ | Cảnh đó làm tôi nổi da gà | Khi xúc động hoặc hồi hộp.
Who's your bias? | /huːz jʊr ˈbaɪəs/ | Bạn thích thành viên nào nhất? | Từ của fan K-pop. Nói chung: "Who's your favorite member?"
Are you kidding me? | /ɑːr ju ˈkɪdɪŋ mi/ | Đùa à? | Câu thoại quen thuộc trong phim; có thể là ngạc nhiên hoặc bực mình.
I've got your back. | /aɪv gɑːt jʊr bæk/ | Có tôi đây rồi | Sẽ luôn ủng hộ, bảo vệ bạn.
Gotcha. | /ˈgɑːtʃə/ | Hiểu rồi / Bắt được rồi nhé! | Rút gọn của "got you". Hay dùng nhất với nghĩa “hiểu rồi”.
Let's do this! | /lets duː ðɪs/ | Làm thôi! | Cổ vũ tinh thần trước khi bắt đầu.
`,
"Âm cuối": `
six | /sɪks/ | số 6 | Cụm phụ âm cuối /ks/. Chỉ đọc /k/ sẽ thành "sick".
sick | /sɪk/ | ốm | Âm cuối /k/, giống “c” cuối tiếng Việt nhưng được bật nhẹ ra.
bag | /bæg/ | cái túi | Âm cuối /g/ hữu thanh, nguyên âm kéo dài hơn. Đọc thành /k/ sẽ thành "back".
back | /bæk/ | phía sau / lưng | Âm cuối /k/ vô thanh; nguyên âm ngắn hơn "bag".
dog | /dɑːg/ | con chó | Âm cuối /g/. Đọc kiểu “đóc” là thành "dock".
dock | /dɑːk/ | bến tàu | Âm cuối /k/ vô thanh.
seed | /siːd/ | hạt giống | Âm cuối /d/ hữu thanh. Đọc kiểu “sít” là thành "seat".
seat | /siːt/ | chỗ ngồi | Âm cuối /t/ vô thanh.
rise | /raɪz/ | tăng lên / mọc (mặt trời) | Âm cuối /z/ rung dây thanh; "rice" (bộ Phát âm dễ sai) kết thúc bằng /s/.
nine | /naɪn/ | số 9 | Âm cuối /n/. Đừng nhầm với "night" (âm cuối /t/, bộ Phát âm dễ sai).
card | /kɑːrd/ | thẻ / tấm thiệp | Âm cuối /rd/: bỏ /d/ sẽ thành "car".
car | /kɑːr/ | xe ô tô | Kết thúc bằng /r/, không có /d/.
wash | /wɑːʃ/ | rửa / giặt | Âm cuối /ʃ/ kéo dài được. Phân biệt với "watch".
watch | /wɑːtʃ/ | xem / đồng hồ đeo tay | Âm cuối /tʃ/ bật ra. Đừng đọc thành "wash".
mice | /maɪs/ | lũ chuột | Âm cuối /s/: số nhiều bất quy tắc của "mouse". Bỏ /s/ sẽ thành "my".
my | /maɪ/ | của tôi | Không có phụ âm cuối. Phân biệt với "mice".
books | /bʊks/ | những quyển sách | Đuôi -s đọc /s/ sau âm vô thanh /k/: cụm /ks/.
dogs | /dɑːgz/ | những con chó | Đuôi -s đọc /z/ sau âm hữu thanh /g/.
buses | /ˈbʌsɪz/ | những chiếc xe buýt | Đuôi -es đọc /ɪz/ sau /s/, thêm một âm tiết.
watched | /wɑːtʃt/ | đã xem | Đuôi -ed đọc /t/ sau âm vô thanh /tʃ/.
played | /pleɪd/ | đã chơi | Đuôi -ed đọc /d/ sau nguyên âm.
wanted | /ˈwɑːntɪd/ | đã muốn | Đuôi -ed đọc /ɪd/ sau /t/, thêm một âm tiết.
last | /læst/ | cuối cùng / vừa qua | Cụm phụ âm cuối /st/: đọc cả /s/ lẫn /t/.
next | /nekst/ | tiếp theo | Cụm phụ âm cuối /kst/.
desks | /desks/ | những cái bàn làm việc | Cụm phụ âm cuối /sks/ — khó, nhưng phải đọc đủ thì người nghe mới biết là số nhiều.
months | /mʌnθs/ | những tháng | Cụm phụ âm cuối /nθs/: đưa lưỡi ra giữa răng cho /θ/ rồi đến /s/.
asked | /æskt/ | đã hỏi | Cụm phụ âm cuối /skt/: đuôi -ed đọc /t/.
students | /ˈstuːdənts/ | những học sinh | Cụm phụ âm cuối /nts/: đuôi -s số nhiều sau /t/.
hobby | /ˈhɑːbi/ | sở thích | Không có phụ âm cuối: đừng thêm /s/ khi chỉ nói một sở thích ("my hobby", không phải "my hobbies").
`,
"Lỗi dịch từ tiếng Việt": `
Turn on the light. | /tɝːn‿ɑːn ðə laɪt/ | Bật đèn lên | Open the light. ✗ → Turn on the light. ✓ “Mở / tắt” đèn, máy là "turn on / turn off", không phải "open / close".
Turn off the TV. | /tɝːn‿ɑːf ðə tiː ˈviː/ | Tắt ti vi đi | Close the TV. ✗ → Turn off the TV. ✓ "close" dùng cho cửa, hộp, ứng dụng.
There are many people here. | /ðer ɑːr ˈmeni ˈpiːpəl hɪr/ | Ở đây có nhiều người | Have many people here. ✗ → There are many people here. ✓ “Có” chỉ sự tồn tại là "there is / there are", không phải "have".
I really like it. | /aɪ ˈriːli laɪk‿ɪt/ | Tôi rất thích nó | I very like it. ✗ → I really like it. ✓ "very" không đứng trước động từ; hoặc nói "I like it very much."
I hung out with my friends. | /aɪ hʌŋ‿aʊt wɪð maɪ frendz/ | Tôi đi chơi với bạn bè | I played with my friends. ✗ (người lớn) → I hung out with my friends. ✓ “Đi chơi” của người lớn là "hang out"; "play" dành cho trẻ con, game, thể thao.
How do you pronounce this word? | /haʊ duː ju prəˈnaʊns ðɪs wɝːd/ | Từ này phát âm thế nào? | How to pronounce this word? ✗ → How do you pronounce this word? ✓ Câu hỏi trực tiếp cần trợ động từ "do".
I need to go grocery shopping. | /aɪ niːd tə goʊ ˈgroʊsəri ˈʃɑːpɪŋ/ | Tôi phải đi chợ | “Đi chợ” thường là đi mua thực phẩm, kể cả ở siêu thị: "go grocery shopping". "Go to the market" chỉ dùng khi đến một khu chợ thật.
Take this medicine twice a day. | /teɪk ðɪs ˈmedɪsən twaɪs‿ə deɪ/ | Uống thuốc này ngày hai lần | Drink this medicine. ✗ → Take this medicine. ✓ “Uống thuốc” là "take medicine"; "drink" chỉ dùng cho đồ uống.
I agree with you. | /aɪ əˈgriː wɪð ju/ | Tôi đồng ý với bạn | I am agree. ✗ → I agree. ✓ "agree" là động từ thường, không cần "am".
He is hungry. | /hi ɪz ˈhʌŋgri/ | Anh ấy đói | He hungry. ✗ → He is hungry. ✓ Tiếng Việt nói “Anh ấy đói”, nhưng tính từ tiếng Anh cần động từ to be đi trước.
It's raining. | /ɪts ˈreɪnɪŋ/ | Trời đang mưa | The sky is raining. ✗ → It's raining. ✓ “Trời” trong “trời mưa, trời nóng” là "it", không phải "the sky".
Where are you going? | /wer ɑːr ju ˈgoʊɪŋ/ | Bạn đi đâu đấy? | You go where? ✗ → Where are you going? ✓ Từ để hỏi đứng đầu câu, không đứng ở chỗ của câu trả lời như “đi đâu”.
Do you like spicy food? | /duː ju laɪk ˈspaɪsi fuːd/ | Bạn có thích đồ cay không? | You like spicy food, yes or no? ✗ → Do you like spicy food? ✓ “Có… không?” là "Do / Does…?" ở đầu câu.
This is Lan's phone. | /ðɪs‿ɪz lɑːnz foʊn/ | Đây là điện thoại của Lan | This is phone of Lan. ✗ → This is Lan's phone. ✓ “… của Lan” là "Lan's" đặt trước danh từ.
Let's meet at the coffee shop. | /lets miːt‿ət ðə ˈkɑːfi ʃɑːp/ | Gặp nhau ở quán cà phê nhé | shop coffee ✗ → coffee shop ✓ Trong cụm danh từ tiếng Anh, từ bổ nghĩa đứng trước, danh từ chính đứng sau.
There are four people in my family. | /ðer ɑːr fɔːr ˈpiːpəl‿ɪn maɪ ˈfæməli/ | Nhà tôi có bốn người | My house has four people. ✗ → There are four people in my family. ✓ “Nhà” ở đây là gia đình (family), không phải ngôi nhà (house).
Can you lend me your pen? | /kən ju lend mi jʊr pen/ | Bạn cho tôi mượn cây bút được không? | Can you borrow me your pen? ✗ → Can you lend me your pen? ✓ "lend" = cho mượn; "borrow" = mượn.
I'm going home now. | /aɪm ˈgoʊɪŋ hoʊm naʊ/ | Tôi về nhà đây | I'm going to home. ✗ → I'm going home. ✓ Trước "home" không dùng "to".
I went to Da Nang last year. | /aɪ went tə dɑː ˈnɑːŋ læst jɪr/ | Năm ngoái tôi đã đi Đà Nẵng | I already go to Da Nang last year. ✗ → I went to Da Nang last year. ✓ “Đã” không phải là "already"; có "last year" vẫn phải dùng thì quá khứ đơn.
`
};
