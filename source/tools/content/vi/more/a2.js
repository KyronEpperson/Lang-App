/* vi-en stage A2: lessons for Vietnamese speakers (source of truth). English side shared with ko-en (parity.js).
   Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"past-continuous", title:"Thì quá khứ tiếp diễn: was / were + -ing", blurb:"Việc đang diễn ra tại một thời điểm trong quá khứ — phần bối cảnh của câu chuyện.", deck:"Cảm xúc · phản ứng", body:`
<p>Thì quá khứ tiếp diễn nói về việc <b>đang xảy ra</b> tại một thời điểm trong quá khứ. Tiếng Việt chỉ cần thêm “đang” (“lúc đó tôi đang ngủ”), động từ giữ nguyên. Tiếng Anh phải đưa động từ to be về quá khứ: <b>was / were</b> + dạng V-ing.</p>
<p><b>I, he, she, it</b> → <b>was</b>; <b>you, we, they</b> → <b>were</b>. Không được bỏ <b>was / were</b>: <b>I sleeping.</b> ✗ → <b>I was sleeping.</b> ✓</p>
{{ex:I was sleeping.|/aɪ wəz ˈsliːpɪŋ/|Lúc đó tôi đang ngủ}}{{ex:We were watching TV.|/wi wɝː ˈwɑːtʃɪŋ tiː ˈviː/|Chúng tôi đang xem ti vi}}{{ex:It was raining.|/ɪt wəz ˈreɪnɪŋ/|Trời đang mưa}}
<h3>Câu nghi vấn</h3>
<p>Đưa <b>was / were</b> lên trước chủ ngữ. Ở đây không dùng <b>did</b>.</p>
{{ex:What were you doing?|/wʌt wɝː ju ˈduːɪŋ/|Lúc đó bạn đang làm gì?}}{{ex:Were you working at nine?|/wɝː ju ˈwɝːkɪŋ‿ət naɪn/|Lúc chín giờ bạn có đang làm việc không?}}
<h3>Với when: đang làm thì có việc xen vào</h3>
<p>Việc kéo dài dùng <b>thì quá khứ tiếp diễn</b>, việc ngắn xen vào dùng <b>thì quá khứ đơn</b>, giống câu “Tôi đang nấu ăn thì bạn gọi”.</p>
{{ex:I was cooking when you called.|/aɪ wəz ˈkʊkɪŋ wen ju kɑːld/|Lúc bạn gọi, tôi đang nấu ăn}}{{ex:I was walking home when it started to rain.|/aɪ wəz ˈwɑːkɪŋ hoʊm wen‿ɪt ˈstɑːrtɪd tə reɪn/|Tôi đang đi bộ về nhà thì trời bắt đầu mưa}}
<div class="tip">Khi kể chuyện, tiếng Việt hay bỏ “đang”, nhưng tiếng Anh không bỏ được. <b>I cooked when you called.</b> nghĩa là “Bạn gọi xong thì tôi mới bắt đầu nấu”.</div>`,
check:[["“Lúc chín giờ bạn đang làm gì?” trong tiếng Anh là câu nào?",["What did you doing at nine?","What were you doing at nine?","What was you doing at nine?","What were you do at nine?"],1,"Chủ ngữ \"you\" đi với \"were\", sau đó là dạng V-ing."],["I was cooking ___ you called. Từ nào điền vào chỗ trống?",["when","so","or","than"],0,"“Khi / lúc” là \"when\"."],["They ___ watching TV. Từ nào điền vào chỗ trống?",["was","did","were","are being"],2,"Chủ ngữ \"they\" đi với \"were\"."]],
practice:[
["mc","I ___ sleeping at ten. Từ nào điền vào chỗ trống?","was","were","did","am","Chủ ngữ \"I\" đi với \"was\"."],
["mc","“Lúc bạn gọi, tôi đang nấu ăn” =","I was cooking when you called.","I cooked when you were calling.","I was cook when you called.","I cooking when you called.","Việc đang làm dùng quá khứ tiếp diễn, việc xen vào dùng quá khứ đơn."],
["mc","“Lúc đó bạn đang làm gì?” =","What were you doing?","What did you doing?","What was you doing?","What were you do?","\"You\" đi với \"were\", sau đó là dạng V-ing."],
["mc","They ___ playing soccer. Từ nào điền vào chỗ trống?","were","was","did","are","Chủ ngữ \"they\" đi với \"were\"."],
["mc","“Lúc đó trời đang mưa” =","It was raining.","It were raining.","It was rain.","It rained was.","Tiếng Việt không cần chủ ngữ, tiếng Anh phải có \"it\": \"it\" + \"was\" + V-ing."],
["or","Lúc đó tôi đang đọc một quyển sách","I was reading a book","read books","Một quyển sách bất kỳ: danh từ đếm được số ít cần mạo từ \"a\"."],
["or","Bọn trẻ đang ngủ","The kids were sleeping","kid was","Nhiều đứa trẻ nên dùng số nhiều \"kids\" và \"were\"."],
["or","Chúng tôi đang xem ti vi","We were watching TV","was","Chủ ngữ \"we\" đi với \"were\"."],
["fi","I was __ dinner.","Tôi đang nấu bữa tối","cooking|making","cook|cooked|cooks","Sau \"was\" là dạng V-ing."],
["fi","What __ you doing?","Lúc đó bạn đang làm gì?","were","was|did|does","Chủ ngữ \"you\" đi với \"were\"."],
["fi","I was sleeping __ you called.","Lúc bạn gọi, tôi đang ngủ","when","so|than|or","“Khi / lúc” là \"when\"."],
["ty","Lúc đó tôi đang làm việc","I was working","was · work — dạng V-ing","were","Chủ ngữ \"I\" đi với \"was\" + V-ing."],
["ty","Lúc đó tôi đang xem một bộ phim","I was watching a movie","was · watching · movie — mạo từ \"a\"","the","Một bộ phim bất kỳ: danh từ đếm được số ít cần mạo từ \"a\"."],
["ty","Bọn trẻ đang chơi","The kids were playing|The children were playing","kids · were · playing — số nhiều","kid","Nhiều đứa trẻ nên dùng số nhiều \"kids\" và \"were\"."]]},
{ id:"will", title:"Thì tương lai đơn (will): quyết định tức thì, lời hứa, dự đoán", blurb:"Quyết định ngay lúc nói thì dùng \"will\", đã lên kế hoạch từ trước thì dùng \"going to\".", deck:"Trò chuyện xã giao", body:`
<p>Cấu trúc: <b>will + động từ nguyên mẫu</b>. Khi nói, gần như luôn rút gọn thành <b>I'll, you'll, it'll</b>. Phủ định là <b>won't</b>.</p>
<p>Tiếng Việt chỉ có một chữ “sẽ” cho cả <b>will</b> lẫn <b>be going to</b>, và hay bỏ “sẽ” khi đã có từ chỉ thời gian. Tiếng Anh thì phải chọn một trong hai, và không được bỏ.</p>
<h3>Quyết định ngay lúc nói</h3>
{{ex:I'll have the pasta.|/aɪl hæv ðə ˈpɑːstə/|Cho tôi món mì Ý}}{{ex:I'll get it.|/aɪl get‿ɪt/|Để tôi nghe máy}}
<h3>Lời hứa và lời đề nghị</h3>
{{ex:I'll help you.|/aɪl help ju/|Tôi sẽ giúp bạn}}{{ex:I'll call you later.|/aɪl kɑːl ju ˈleɪtɚ/|Lát nữa tôi sẽ gọi cho bạn}}{{ex:I won't be late.|/aɪ woʊnt biː leɪt/|Tôi sẽ không đến muộn đâu}}
<h3>Dự đoán</h3>
{{ex:It'll be fine.|/ˈɪtəl biː faɪn/|Sẽ ổn thôi}}{{ex:I think it will rain.|/aɪ θɪŋk‿ɪt wɪl reɪn/|Tôi nghĩ trời sẽ mưa}}
<h3>will và be going to</h3>
<div class="tbl"><table><tr><th></th><th>Khi nào</th><th>Ví dụ</th></tr><tr><td class="k">will</td><td>quyết định ngay lúc nói, lời hứa</td><td>I'll get the door.</td></tr><tr><td class="k">be going to</td><td>kế hoạch có từ trước</td><td>I'm going to visit Da Nang next month.</td></tr></table></div>
<div class="tip">Lỗi hay gặp nhất: <b>I will to go.</b>, <b>I'll going.</b> ✗ → <b>I'll go.</b> ✓ Sau <b>will</b> chỉ dùng động từ nguyên mẫu.</div>`,
check:[["Điện thoại reo, bạn nói “Để tôi nghe”. Câu nào đúng?",["I'm going to get it.","I get it.","I'll get it.","I'm getting it will."],2,"Việc quyết định ngay lúc nói dùng \"will\"."],["I ___ be late. (Tôi sẽ không đến muộn đâu)",["won't","willn't","don't will","not will"],0,"Phủ định của \"will\" là \"won't\"."],["Câu nào nói về kế hoạch đã có từ trước?",["I'll get the door.","I will to visit Jeju.","I visit Jeju will.","I'm going to visit Jeju next month."],3,"Kế hoạch có từ trước dùng \"be going to\"."]],
practice:[
["mc","“Tôi sẽ giúp bạn” =","I'll help you.","I help you will.","I'll helping you.","I'll to help you.","Sau \"will\" là động từ nguyên mẫu."],
["mc","Gọi món ngay tại bàn: “Cho tôi món mì Ý” =","I'll have the pasta.","I'm have the pasta.","I'll having the pasta.","I will to have the pasta.","Quyết định ngay lúc nói dùng \"will\"."],
["mc","“Tôi sẽ không đến muộn đâu” =","I won't be late.","I willn't be late.","I don't will be late.","I won't late.","\"Will not\" rút gọn thành \"won't\"."],
["mc","“Bạn sẽ đến chứ?” =","Will you come?","Do you will come?","Will you coming?","Will come you?","\"Will\" + chủ ngữ + động từ nguyên mẫu."],
["mc","Câu nào nói về kế hoạch đã có từ trước?","I'm going to visit Jeju next month.","I'll get the door.","I visit Jeju next month will.","I will to visit Jeju.","Kế hoạch có từ trước dùng \"be going to\"."],
["or","Lát nữa tôi sẽ gọi cho bạn","I'll call you later","calling","Sau \"will\" là động từ nguyên mẫu."],
["or","Cho tôi một cốc cà phê","I'll have a coffee","the coffees","Gọi một cốc nên dùng mạo từ \"a\" và danh từ số ít \"coffee\"."],
["or","Để tôi mở cửa","I'll open the door","a doors","Cánh cửa ở ngay đây, cả hai đều biết là cửa nào, nên dùng mạo từ \"the\"."],
["fi","I __ call you tomorrow.","Mai tôi sẽ gọi cho bạn","will","am|going|do","Lời hứa dùng \"will\"."],
["fi","I __ forget.","Tôi sẽ không quên đâu","won't|will not","don't|not|willn't","Phủ định của \"will\" là \"won't\"."],
["fi","__ you help me?","Bạn giúp tôi được không?","Will|Can|Could|Would","Do|Are|Is","Khi nhờ ai đó, dùng \"Will you…?\" (hoặc \"Can / Could / Would you…?\")."],
["ty","Tôi sẽ giúp bạn","I'll help you|I'll help","I'll · help · you — động từ nguyên mẫu","helping","Sau \"will\" là động từ nguyên mẫu."],
["ty","Cho tôi một phần salad","I'll have a salad|I'll have the salad","I'll have · salad — chú ý mạo từ","salads","Gọi một phần nên dùng mạo từ \"a\" (món salad có trong thực đơn thì dùng \"the\")."],
["ty","Để tôi đóng cửa","I'll close the door|I'll shut the door","I'll · close · door — mạo từ \"the\"","a","Cánh cửa ở ngay đây nên dùng mạo từ \"the\"."]]},
{ id:"perfect", title:"Thì hiện tại hoàn thành: đã từng làm gì", blurb:"\"have\" + quá khứ phân từ (V3) để kể trải nghiệm. Nói rõ lúc nào thì dùng quá khứ đơn.", deck:"Du lịch (sân bay · khách sạn)", body:`
<p><b>have + quá khứ phân từ (V3)</b> nghĩa là “đã từng… (tính đến bây giờ)”, và câu <b>không nói lúc nào</b>. Tiếng Việt dùng “đã từng”, “chưa bao giờ”, “… chưa?” mà động từ không đổi; tiếng Anh phải đổi động từ sang V3.</p>
{{ex:I've been to Japan.|/aɪv bɪn tə dʒəˈpæn/|Tôi đã từng đến Nhật Bản}}{{ex:She has visited Vietnam twice.|/ʃi hæz ˈvɪzɪtɪd viːetˈnɑːm twaɪs/|Cô ấy đã đến Việt Nam hai lần}}
<h3>ever và never</h3>
<p>“Bạn đã bao giờ… chưa?” → <b>Have you ever…?</b>; “chưa bao giờ” → <b>never</b>.</p>
{{ex:Have you ever eaten pho?|/hæv ju ˈevɚ ˈiːtən fʌ/|Bạn đã bao giờ ăn phở chưa?}}{{ex:I've never seen it.|/aɪv ˈnevɚ siːn‿ɪt/|Tôi chưa bao giờ xem cái đó}}
<p>Trả lời: <b>Yes, I have.</b> / <b>No, I haven't.</b>, giống “Rồi.” / “Chưa.” trong tiếng Việt.</p>
<h3>Quá khứ phân từ hay gặp</h3>
<div class="tbl"><table><tr><th>Nguyên mẫu</th><th>Quá khứ (V2)</th><th>Quá khứ phân từ (V3)</th></tr><tr><td class="k">be</td><td class="k">was</td><td class="k">been</td></tr><tr><td class="k">eat</td><td class="k">ate</td><td class="k">eaten</td></tr><tr><td class="k">see</td><td class="k">saw</td><td class="k">seen</td></tr><tr><td class="k">do</td><td class="k">did</td><td class="k">done</td></tr><tr><td class="k">try</td><td class="k">tried</td><td class="k">tried</td></tr></table></div>
<h3>Có thời điểm cụ thể thì dùng quá khứ đơn</h3>
<p>Có <b>last year, yesterday, in 2020</b> thì không dùng thì hiện tại hoàn thành. Tiếng Việt vẫn nói “Năm ngoái tôi đã đi Nhật”, nhưng chữ “đã” ở đây ứng với thì quá khứ đơn, không phải <b>have</b>.</p>
{{ex:I went to Japan last year.|/aɪ went tə dʒəˈpæn læst jɪr/|Năm ngoái tôi đi Nhật Bản}}
<div class="tip">Lỗi hay gặp nhất: <b>I've been to Japan last year.</b> ✗ → <b>I went to Japan last year.</b> ✓</div>`,
check:[["“Bạn đã bao giờ đến Nhật Bản chưa?” trong tiếng Anh là câu nào?",["Did you ever go Japan?","Have you ever been to Japan?","Have you ever went to Japan?","Are you ever been to Japan?"],1,"Hỏi về trải nghiệm: \"Have you ever\" + V3."],["I ___ never seen that movie. Từ nào điền vào chỗ trống?",["am","did","have","was"],2,"\"have\" + \"never\" + V3."],["Câu nào đúng?",["I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju."],0,"Có thời điểm như \"last year\" thì dùng quá khứ đơn."]],
practice:[
["mc","“Tôi đã từng đến Nhật Bản” =","I've been to Japan.","I've go to Japan.","I was been to Japan.","I've went to Japan.","\"have\" + quá khứ phân từ \"been\"."],
["mc","Quá khứ phân từ (V3) của \"see\" là gì?","seen","saw","seed","seeing","Ba dạng của \"see\": see – saw – seen (V3)."],
["mc","“Bạn đã bao giờ ăn kim chi chưa?” =","Have you ever eaten kimchi?","Did you ever eaten kimchi?","Have you ever ate kimchi?","Do you have eaten kimchi?","\"Have you ever\" + V3."],
["mc","“Tôi chưa bao giờ xem cái đó” =","I've never seen it.","I never have saw it.","I've never see it.","I didn't never seen it.","\"have\" + \"never\" + V3."],
["mc","Có “năm ngoái” thì câu nào đúng?","I went to Jeju last year.","I've been to Jeju last year.","I have go to Jeju last year.","I've went to Jeju last year.","Có thời điểm cụ thể thì dùng quá khứ đơn."],
["or","Tôi đã xem bộ phim đó rồi","I've seen the movie","a saw","Bộ phim mà cả hai đều biết nên dùng mạo từ \"the\"."],
["or","Tôi đã đến Hàn Quốc hai lần","I've been to Korea twice","went","Sau \"have\" là quá khứ phân từ \"been\"."],
["or","Tôi chưa từng thấy con rắn nào","I've never seen a snake","the snakes","Một con rắn bất kỳ: danh từ đếm được số ít cần mạo từ \"a\"."],
["fi","Have you ever __ to Busan?","Bạn đã bao giờ đến Busan chưa?","been","be|went|go","Sau \"have\" là quá khứ phân từ \"been\"."],
["fi","I've __ eaten that.","Tôi chưa bao giờ ăn món đó","never","ever|no|not never","“Chưa bao giờ” là \"never\"."],
["fi","She __ visited Korea twice.","Cô ấy đã đến Hàn Quốc hai lần","has","have|is|did","\"She\" là ngôi thứ ba số ít nên dùng \"has\"."],
["ty","Bạn đã bao giờ đến Nhật Bản chưa?","Have you ever been to Japan|Have you been to Japan","have you ever · been · Japan — câu hỏi","went","Hỏi về trải nghiệm: \"Have you ever been to…?\""],
["ty","Tôi đã đọc quyển sách đó rồi","I've read the book|I've read that book","I've · read · book — mạo từ \"the\"","a","Quyển sách mà cả hai đều biết nên dùng mạo từ \"the\"."],
["ty","Tôi chưa bao giờ nuôi mèo","I've never had a cat","never · had · cat — mạo từ \"a\"","the","Một con mèo bất kỳ: danh từ đếm được số ít cần mạo từ \"a\"."]]},
{ id:"modals", title:"Động từ khuyết thiếu: have to, must, should, might", blurb:"Phải làm, nên làm, có thể sẽ làm.", deck:"Bệnh viện · khẩn cấp", body:`
<p>Bốn cách nói về sự bắt buộc, lời khuyên và khả năng. Sau tất cả đều là <b>động từ nguyên mẫu</b>. Tiếng Việt nói “nên đi”, “phải đi”, không có gì chen giữa, nên đừng thêm <b>to</b> sau <b>should</b>, <b>must</b>, <b>might</b>: <b>You should to go.</b> ✗ (<b>to</b> chỉ có sẵn trong <b>have to</b>).</p>
<h3>have to: phải</h3>
<p>Dùng nhiều nhất trong đời sống. Với <b>he, she, it</b> (ngôi thứ ba số ít) là <b>has to</b>.</p>
{{ex:I have to work tomorrow.|/aɪ hæv tə wɝːk təˈmɑːroʊ/|Mai tôi phải đi làm}}{{ex:She has to go now.|/ʃi hæz tə goʊ naʊ/|Cô ấy phải đi bây giờ}}
<h3>don't have to và must not khác nhau</h3>
<p>Giống như “không cần phải” khác “không được” trong tiếng Việt.</p>
<div class="tbl"><table><tr><th>Câu</th><th>Nghĩa</th></tr><tr><td class="k">You don't have to come.</td><td>Bạn không cần phải đến (không bắt buộc)</td></tr><tr><td class="k">You must not smoke here.</td><td>Bạn không được hút thuốc ở đây (cấm)</td></tr></table></div>
<h3>should: nên</h3>
{{ex:You should see a doctor.|/ju ʃʊd siː ə ˈdɑːktɚ/|Bạn nên đi khám bác sĩ}}{{ex:You shouldn't worry.|/ju ˈʃʊdənt ˈwɝːi/|Bạn không nên lo lắng}}
<h3>might: có thể sẽ</h3>
{{ex:It might rain.|/ɪt maɪt reɪn/|Trời có thể sẽ mưa}}{{ex:I might be late.|/aɪ maɪt biː leɪt/|Tôi có thể sẽ đến muộn}}
<div class="tip">Lỗi hay gặp nhất: <b>You should to go.</b>, <b>It might rains.</b> ✗ → <b>You should go.</b>, <b>It might rain.</b> ✓ Sau động từ khuyết thiếu, động từ không thêm -s, kể cả với ngôi thứ ba số ít.</div>`,
check:[["“Bạn không cần phải đến” trong tiếng Anh là câu nào?",["You must not come.","You don't have to come.","You shouldn't to come.","You haven't to come."],1,"“Không cần phải” là \"don't have to\"."],["Khuyên ai đó: You ___ see a doctor.",["might","have","should","must to"],2,"Lời khuyên dùng \"should\" + động từ nguyên mẫu."],["She ___ to work today. Từ nào điền vào chỗ trống?",["have","must","should","has"],3,"\"She\" là ngôi thứ ba số ít nên dùng \"has to\"."]],
practice:[
["mc","“Mai tôi phải đi làm” =","I have to work tomorrow.","I have work tomorrow.","I must to work tomorrow.","I should to work tomorrow.","\"have to\" + động từ nguyên mẫu."],
["mc","“Bạn không cần phải đến” =","You don't have to come.","You must not come.","You don't must come.","You haven't come to.","“Không cần phải” là \"don't have to\"."],
["mc","“Bạn nên đi khám bác sĩ” =","You should see a doctor.","You should to see a doctor.","You should seeing a doctor.","You might a doctor see.","\"should\" + động từ nguyên mẫu; một bác sĩ nên dùng mạo từ \"a\"."],
["mc","“Trời có thể sẽ mưa” =","It might rain.","It might rains.","It might to rain.","It mights rain.","\"might\" + động từ nguyên mẫu, không thêm -s."],
["mc","“Không được hút thuốc ở đây” =","You must not smoke here.","You don't have to smoke here.","You not must smoke here.","You must not to smoke here.","Cấm đoán dùng \"must not\"."],
["or","Bạn nên đi khám bác sĩ","You should see a doctor","the doctors","Một bác sĩ bất kỳ: danh từ đếm được số ít cần mạo từ \"a\"."],
["or","Tôi phải đi bây giờ","I have to go now","going","Sau \"have to\" là động từ nguyên mẫu."],
["or","Bạn phải mua vé","You have to buy a ticket","the tickets","Tiếng Việt nói “mua vé”, nhưng tiếng Anh cần mạo từ \"a\" trước danh từ đếm được số ít \"ticket\"."],
["fi","She __ to study tonight.","Tối nay cô ấy phải học bài","has","have|must|should","\"She\" là ngôi thứ ba số ít nên dùng \"has to\"."],
["fi","You __ have to pay.","Bạn không cần phải trả tiền","don't|do not","must not|not|aren't","“Không cần phải” là \"don't have to\"."],
["fi","It __ rain tomorrow.","Mai trời có thể sẽ mưa","might|may|could","must to|has to|should to","Nói về khả năng dùng \"might\"."],
["ty","Tôi phải làm việc","I have to work|I must work|I need to work","have to · work — bắt buộc","should","Sự bắt buộc dùng \"have to\"."],
["ty","Bạn nên đi khám bác sĩ","You should see a doctor|You should go to a doctor|You should go see a doctor|You should go to the doctor","should · see · doctor — mạo từ \"a\"","the","Một bác sĩ bất kỳ nên dùng mạo từ \"a\"."],
["ty","Phải mua vé","You have to buy a ticket|I have to buy a ticket|We have to buy a ticket","have to · buy · ticket — mạo từ \"a\"","the","Danh từ đếm được số ít \"ticket\" cần mạo từ \"a\"."]]},
{ id:"to-ing", title:"to hay -ing sau động từ: want to, enjoy -ing", blurb:"Sau \"want\" là \"to\", sau \"enjoy\" là -ing. Mỗi động từ đi với một dạng cố định.", deck:"Trò chuyện xã giao", body:`
<p>Tiếng Việt nối hai động từ liền nhau: “muốn đi”, “thích nấu ăn”, không cần thêm gì. Trong tiếng Anh, động từ thứ hai phải ở dạng <b>to + động từ</b> hoặc <b>V-ing</b>, tùy động từ đứng trước. Hãy học theo nhóm, bắt đầu từ những động từ hay gặp.</p>
<div class="tbl"><table><tr><th>Sau là to</th><th>Sau là -ing</th></tr><tr><td class="k">want, need, hope, plan, decide, would like</td><td class="k">enjoy, finish, mind, keep, stop</td></tr></table></div>
<h3>to + động từ: việc sắp làm</h3>
{{ex:I want to go home.|/aɪ wɑːnt tə goʊ hoʊm/|Tôi muốn về nhà}}{{ex:I need to study.|/aɪ niːd tə ˈstʌdi/|Tôi cần học bài}}{{ex:I'd like to order.|/aɪd laɪk tu ˈɔːrdɚ/|Tôi muốn gọi món}}{{ex:I decided to learn English.|/aɪ dɪˈsaɪdɪd tə lɝːn‿ˈɪŋglɪʃ/|Tôi đã quyết định học tiếng Anh}}
<h3>V-ing: sau enjoy, finish, mind, keep, stop</h3>
{{ex:I enjoy cooking.|/aɪ ɪnˈdʒɔɪ ˈkʊkɪŋ/|Tôi thích nấu ăn}}{{ex:I finished working.|/aɪ ˈfɪnɪʃt ˈwɝːkɪŋ/|Tôi làm xong việc rồi}}{{ex:I don't mind waiting.|/aɪ doʊnt maɪnd ˈweɪtɪŋ/|Tôi chờ cũng được}}
<h3>Động từ đi được với cả hai</h3>
<p><b>like, love, start</b> dùng được cả <b>to</b> lẫn <b>-ing</b>.</p>
<h3>Chỉ mục đích: to, không phải for</h3>
<p>Chữ “để” trong tiếng Việt rất dễ bị dịch thành <b>for</b>. Muốn nói mục đích của một hành động thì dùng <b>to</b>: <b>He stopped for getting gas.</b> ✗ → <b>He stopped to get gas.</b> ✓ Lưu ý: <b>stop smoking</b> là “bỏ thuốc”, còn <b>stop to smoke</b> là “dừng lại để hút thuốc”.</p>
{{ex:He stopped to get gas.|/hi stɑːpt tə get gæs/|Anh ấy dừng lại để đổ xăng}}
<div class="tip">Lỗi hay gặp nhất: <b>I want go.</b>, <b>I enjoy to cook.</b> ✗ → <b>I want to go.</b>, <b>I enjoy cooking.</b> ✓</div>`,
check:[["I want ___ home. Từ nào điền vào chỗ trống?",["go","going","to go","to going"],2,"Sau \"want\" là \"to\" + động từ."],["I enjoy ___ movies. Từ nào điền vào chỗ trống?",["watching","to watch","watch","to watching"],0,"Sau \"enjoy\" là dạng V-ing."],["“Tôi muốn gọi món” trong tiếng Anh là câu nào?",["I'd like order.","I'd like ordering.","I like to ordering.","I'd like to order."],3,"Sau \"would like\" là \"to\" + động từ."]],
practice:[
["mc","I need ___ now. Từ nào điền vào chỗ trống?","to go","going","go","to going","Sau \"need\" là \"to\" + động từ."],
["mc","I enjoy ___. Từ nào điền vào chỗ trống?","cooking","to cook","cook","to cooking","Sau \"enjoy\" là dạng V-ing."],
["mc","“Tôi muốn gọi món” =","I'd like to order.","I'd like order.","I'd like ordering.","I like order to.","Sau \"would like\" là \"to\" + động từ."],
["mc","“Tôi làm xong việc rồi” =","I finished working.","I finished to work.","I finished work to.","I finish worked.","Sau \"finish\" là dạng V-ing."],
["mc","“Tôi chờ cũng được” =","I don't mind waiting.","I don't mind to wait.","I don't mind wait.","I'm not mind waiting.","Sau \"mind\" là dạng V-ing."],
["or","Tôi muốn mua một chiếc ô tô","I want to buy a car","the buying","Sau \"want\" là \"to\"; một chiếc xe nên dùng mạo từ \"a\"."],
["or","Tôi thích xem phim","I enjoy watching movies","movie watch","Sau \"enjoy\" là V-ing; nói về phim nói chung thì dùng số nhiều \"movies\"."],
["or","Tôi cần nghỉ ngơi","I need to rest","resting","Sau \"need\" là \"to\" + động từ."],
["fi","I want __ a coffee.","Tôi muốn uống một cốc cà phê","to have|to drink|to get","have|having|drinking","Sau \"want\" là \"to\" + động từ."],
["fi","She enjoys __.","Cô ấy thích bơi","swimming","to swim|swim|swims","Sau \"enjoy\" là dạng V-ing."],
["fi","I decided __ English.","Tôi đã quyết định học tiếng Anh","to study|to learn","study|studying|studied","Sau \"decide\" là \"to\" + động từ."],
["ty","Tôi muốn về nhà","I want to go home","want to · go · home — không dùng mạo từ","the","Sau \"want\" là \"to\"; trước \"home\" không dùng mạo từ."],
["ty","Tôi thích đọc sách (dùng enjoy)","I enjoy reading books|I enjoy reading","enjoy · read · book — số nhiều","book","Sau \"enjoy\" là V-ing; sách nói chung thì dùng số nhiều \"books\"."],
["ty","Tôi muốn gọi món","I'd like to order|I want to order","I'd like · to · order — cách nói lịch sự","ordering","Sau \"would like\" là \"to\" + động từ."]]},
{ id:"articles-2", title:"Mạo từ the nâng cao: thứ duy nhất và số nhiều không mạo từ", blurb:"Nhạc cụ có \"the\", môn thể thao thì không. Thêm tên nước và cách nói về cả một loại.", deck:"Du lịch (sân bay · khách sạn)", body:`
<p>Bài thứ ba về mạo từ. Tiếng Việt không có mạo từ, nên cách chắc nhất là nhớ theo nhóm: nhóm nào luôn có <b>the</b>, nhóm nào không bao giờ có.</p>
<h3>Trường hợp dùng the</h3>
<div class="tbl"><table><tr><th>Trường hợp</th><th>Ví dụ</th></tr><tr><td>Thứ duy nhất trên đời</td><td class="k">the sun, the internet</td></tr><tr><td>Nhạc cụ</td><td class="k">play the piano</td></tr><tr><td>Sông, biển</td><td class="k">the Mekong, the Pacific</td></tr><tr><td>Tên nước có dạng số nhiều hoặc liên bang</td><td class="k">the United States, the Philippines</td></tr></table></div>
{{ex:I play the piano.|/aɪ pleɪ ðə piˈænoʊ/|Tôi chơi đàn piano}}{{ex:She's from the United States.|/ʃiz frəm ðə juˈnaɪtɪd steɪts/|Cô ấy đến từ Mỹ}}{{ex:I found it on the internet.|/aɪ faʊnd‿ɪt‿ɑːn ði ˈɪntɚnet/|Tôi tìm thấy nó trên mạng}}
<h3>Trường hợp không dùng mạo từ</h3>
<div class="tbl"><table><tr><th>Trường hợp</th><th>Ví dụ</th></tr><tr><td>Phần lớn tên nước, thành phố</td><td class="k">Vietnam, Hanoi</td></tr><tr><td>Môn thể thao, ngôn ngữ, bữa ăn</td><td class="k">play soccer, speak English, have lunch</td></tr><tr><td>Nói về cả một loại</td><td class="k">Dogs are cute. I love music.</td></tr></table></div>
{{ex:I live in Vietnam.|/aɪ lɪv‿ɪn viːetˈnɑːm/|Tôi sống ở Việt Nam}}{{ex:I play soccer.|/aɪ pleɪ ˈsɑːkɚ/|Tôi chơi bóng đá}}{{ex:Dogs are cute.|/dɑːgz‿ɑːr kjuːt/|Chó thì dễ thương}}
<h3>Nói chung và nói cụ thể</h3>
<p>Tiếng Việt nói “Tôi thích chó” cho cả hai nghĩa. Tiếng Anh phân biệt: nói chung thì dùng <b>số nhiều, không mạo từ</b>; nói về những con cụ thể thì dùng <b>the</b>.</p>
{{ex:I like dogs.|/aɪ laɪk dɑːgz/|Tôi thích chó (chó nói chung)}}{{ex:The dogs in this park are cute.|/ðə dɑːgz‿ɪn ðɪs pɑːrk‿ɑːr kjuːt/|Mấy con chó ở công viên này dễ thương (những con cụ thể)}}
<div class="tip">Nói về cả một loại thì không dùng <b>the</b>, chỉ dùng số nhiều. <b>I like the dogs.</b> nghĩa là “Tôi thích mấy con chó đó”.</div>`,
check:[["I play ___ soccer. Từ nào điền vào chỗ trống?",["a","the","an","(không có)"],3,"Tên môn thể thao không dùng mạo từ."],["She's from ___ United States. Từ nào điền vào chỗ trống?",["the","a","an","(không có)"],0,"Trước \"United States\" phải có \"the\"."],["“Chó thì dễ thương” (nói về chó nói chung) trong tiếng Anh là câu nào?",["The dog are cute.","Dogs are cute.","A dogs are cute.","Dog is cute."],1,"Nói về cả một loại thì dùng số nhiều, không mạo từ."]],
practice:[
["mc","I play ___ piano. Từ nào điền vào chỗ trống?","the","a","an","some","Trước tên nhạc cụ dùng \"the\"."],
["mc","“Tôi sống ở Hàn Quốc” =","I live in Korea.","I live in the Korea.","I live in a Korea.","I live Korea in.","Phần lớn tên nước không có mạo từ."],
["mc","“Tôi chơi bóng đá” =","I play soccer.","I play the soccer.","I play a soccer.","I play soccers.","Tên môn thể thao không có mạo từ và không thêm -s."],
["mc","“Mèo thì dễ thương” (mèo nói chung) =","Cats are cute.","The cat are cute.","A cats are cute.","Cat is cute.","Nói về cả một loại thì dùng số nhiều, không mạo từ."],
["mc","She's from ___ United States. Từ nào điền vào chỗ trống?","the","a","an","some","Trước \"United States\" phải có \"the\"."],
["or","Tôi chơi đàn piano","I play the piano","a pianos","Trước tên nhạc cụ dùng mạo từ \"the\"."],
["or","Chó thì dễ thương","Dogs are cute","The dog","Nói về chó nói chung: số nhiều \"dogs\", không mạo từ."],
["or","Tôi tìm thấy nó trên mạng","I found it on the internet","a","\"Internet\" là thứ duy nhất nên dùng mạo từ \"the\"."],
["fi","I speak __.","Tôi nói tiếng Anh","English","the English|an English|a English","Tên ngôn ngữ không có mạo từ."],
["fi","The sun rises in __ east.","Mặt trời mọc ở hướng đông","the","a|an|some","Trước phương hướng dùng \"the\"."],
["fi","I love __.","Tôi rất thích âm nhạc","music","the musics|a music|musics","Âm nhạc nói chung: không mạo từ, và vì là danh từ không đếm được nên không thêm -s."],
["ty","Tôi đến từ Mỹ","I'm from the United States|I'm from the US|I'm from America","I'm from · United States — mạo từ \"the\"","a","Trước \"United States\" dùng mạo từ \"the\"."],
["ty","Tôi chơi đàn guitar","I play the guitar|I play guitar","play · guitar — mạo từ \"the\"","a","Trước tên nhạc cụ dùng mạo từ \"the\"."],
["ty","Mèo thì dễ thương","Cats are cute","cat — số nhiều, không mạo từ","The cat","Nói về mèo nói chung: số nhiều \"cats\", không mạo từ."]]},
{ id:"first-conditional", title:"Câu điều kiện loại 1: If + hiện tại, will", blurb:"“Nếu… thì sẽ…”. Sau \"if\" không dùng \"will\".", deck:"Công sở · email", body:`
<p>Nói về việc có thể xảy ra thật. Cấu trúc: <b>If + thì hiện tại đơn, will + động từ</b>. Dù nghĩa là tương lai, vế <b>if</b> vẫn dùng <b>thì hiện tại đơn</b>.</p>
<p>Tiếng Việt có cặp “Nếu… thì…”. Tiếng Anh chỉ cần <b>if</b> và một dấu phẩy, không cần dịch “thì”, và vế <b>if</b> không có <b>will</b>.</p>
{{ex:If it rains, I'll stay home.|/ɪf‿ɪt reɪnz aɪl steɪ hoʊm/|Nếu trời mưa thì tôi sẽ ở nhà}}{{ex:If you don't hurry, you'll miss the bus.|/ɪf ju doʊnt ˈhɝːi juːl mɪs ðə bʌs/|Nếu không nhanh lên, bạn sẽ lỡ xe buýt}}
<h3>Có thể đảo vế</h3>
<p>Khi <b>if</b> đứng sau thì không cần dấu phẩy.</p>
{{ex:I'll help you if I have time.|/aɪl help ju ɪf‿aɪ hæv taɪm/|Nếu có thời gian, tôi sẽ giúp bạn}}
<h3>Với câu mệnh lệnh</h3>
{{ex:If you're late, call me.|/ɪf jʊr leɪt kɑːl mi/|Nếu đến muộn thì gọi cho tôi nhé}}{{ex:If you need help, let me know.|/ɪf ju niːd help let mi noʊ/|Nếu cần giúp thì cứ báo tôi}}
<h3>when: khi (chắc chắn xảy ra)</h3>
<p>Nếu việc chắc chắn sẽ xảy ra thì dùng <b>when</b> thay cho <b>if</b>. Sau <b>when</b> cũng không dùng <b>will</b>.</p>
{{ex:When I get home, I'll call you.|/wen‿aɪ get hoʊm aɪl kɑːl ju/|Về đến nhà tôi sẽ gọi cho bạn}}
<div class="tip">Lỗi hay gặp nhất: <b>If it will rain, …</b> ✗ → <b>If it rains, …</b> ✓ Chữ “sẽ” chỉ thuộc về vế kết quả.</div>`,
check:[["If it ___ tomorrow, I'll stay home. Từ nào điền vào chỗ trống?",["will rain","rains","rained","raining"],1,"Sau \"if\" dùng thì hiện tại đơn."],["If you study, you ___ pass. Từ nào điền vào chỗ trống?",["pass will","passing","will pass","passed"],2,"Vế kết quả dùng \"will\" + động từ nguyên mẫu."],["Câu nào đúng?",["If I have time, I'll call you.","If I will have time, I call you.","If I'll have time, I'll call you.","If I have time, I calling you."],0,"Vế \"if\" dùng thì hiện tại đơn, vế kết quả dùng \"will\"."]],
practice:[
["mc","If it ___, I'll stay home. Từ nào điền vào chỗ trống?","rains","will rain","rained","is rain","Sau \"if\" dùng thì hiện tại đơn; \"it\" là ngôi thứ ba số ít nên là \"rains\"."],
["mc","If you're late, ___ me. Từ nào điền vào chỗ trống?","call","will calling","calls","to call","Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu."],
["mc","“Nếu có thời gian, tôi sẽ giúp bạn” =","I'll help you if I have time.","I help you if I'll have time.","I'll help you if I will have time.","I'll helping you if I have time.","Sau \"if\" không dùng \"will\"."],
["mc","“Nếu không nhanh lên, bạn sẽ lỡ xe buýt” =","If you don't hurry, you'll miss the bus.","If you won't hurry, you miss the bus.","If you don't hurry, you miss will the bus.","If you not hurry, you'll miss bus.","Vế \"if\" dùng phủ định của thì hiện tại đơn: \"don't\"."],
["mc","“Về đến nhà tôi sẽ gọi cho bạn” =","When I get home, I'll call you.","When I'll get home, I call you.","When I will get home, I'll call you.","When I get the home, I call you.","Sau \"when\" cũng dùng thì hiện tại đơn."],
["or","Nếu trời mưa thì tôi sẽ ở nhà","If it rains I'll stay home","will the","Sau \"if\" dùng thì hiện tại đơn; trước \"home\" không dùng mạo từ."],
["or","Nếu có thời gian thì gọi cho tôi","If you have time call me","will","Sau \"if\" không dùng \"will\"."],
["or","Bạn sẽ lỡ xe buýt mất","You'll miss the bus","a buses","Chuyến xe buýt định đi thì cả hai đều biết, nên dùng mạo từ \"the\"."],
["fi","If it __ tomorrow, we'll cancel.","Nếu mai trời mưa, chúng tôi sẽ hủy","rains","will rain|rained|raining","Sau \"if\" dùng thì hiện tại đơn."],
["fi","If you study, you __ pass.","Nếu học bài, bạn sẽ thi đỗ","will|can|might","are|did|passing","Vế kết quả dùng \"will\" + động từ nguyên mẫu."],
["fi","__ you need help, call me.","Nếu cần giúp thì gọi cho tôi","If|When","So|But|Because","“Nếu” là \"if\"."],
["ty","Nếu có thời gian, tôi sẽ giúp bạn","I'll help if I have time|I'll help you if I have time|If I have time I'll help|If I have time I'll help you","I'll help · if · have time — sau \"if\" không dùng \"will\"","will","Sau \"if\" không dùng \"will\"."],
["ty","Nếu trời mưa, tôi sẽ đi taxi","If it rains I'll take a taxi|I'll take a taxi if it rains|If it rains I'll get a taxi","if · rains · take · taxi — mạo từ \"a\"","the","Một chiếc taxi bất kỳ nên dùng mạo từ \"a\"."],
["ty","Sẽ lỡ xe buýt mất","You'll miss the bus|We'll miss the bus|I'll miss the bus","miss · bus — mạo từ \"the\"","a","Chuyến xe buýt định đi thì cả hai đều biết, nên dùng mạo từ \"the\"."]]},
{ id:"relative", title:"Mệnh đề quan hệ: who / that", blurb:"Tin vui: tiếng Việt cũng bổ nghĩa sau danh từ. Chỉ cần nhớ thêm \"who\" hoặc \"that\".", deck:"Mua sắm · thanh toán", body:`
<p>Tin vui: trật tự này giống tiếng Việt. Ta nói “quyển sách <b>tôi mua</b>”, tiếng Anh cũng nói <b>the book that I bought</b>: danh từ trước, phần giải thích sau.</p>
<p>Chỗ dễ sai là <b>đại từ quan hệ</b>. Tiếng Việt có thể bỏ “mà” (“người bạn [mà] sống ở Hà Nội”), nhưng khi phần giải thích không có chủ ngữ riêng, tiếng Anh bắt buộc phải có <b>who / that</b>: <b>I have a friend lives in Hanoi.</b> ✗ → <b>I have a friend who lives in Hanoi.</b> ✓</p>
<h3>Người: who</h3>
{{ex:I have a friend who speaks Korean.|/aɪ hæv‿ə frend huː spiːks kəˈriːən/|Tôi có một người bạn nói được tiếng Hàn}}{{ex:the man who lives next door|/ðə mæn huː lɪvz nekst dɔːr/|người đàn ông sống ở nhà bên cạnh}}
<h3>Vật: that</h3>
{{ex:the book that I bought|/ðə bʊk ðæt‿aɪ bɑːt/|quyển sách tôi đã mua}}{{ex:This is the phone that I want.|/ðɪs‿ɪz ðə foʊn ðæt‿aɪ wɑːnt/|Đây là cái điện thoại tôi muốn có}}
<h3>Thường bỏ that</h3>
<p>Nếu ngay sau là “chủ ngữ + động từ” thì có thể bỏ <b>that</b>, giống như bỏ “mà” trong tiếng Việt. Khi nói, người ta gần như luôn bỏ. Còn <b>who lives…</b>, <b>who speaks…</b> thì không bỏ được, vì phần sau không có chủ ngữ.</p>
{{ex:The movie we saw was great.|/ðə ˈmuːvi wi sɑː wəz greɪt/|Bộ phim chúng tôi xem hay lắm}}
<h3>Nơi chốn: where</h3>
{{ex:the cafe where we met|/ðə kæˈfeɪ wer wi met/|quán cà phê nơi chúng ta gặp nhau}}
<div class="tip">Không dùng <b>what</b>: <b>the book what I bought</b> ✗ → <b>the book (that) I bought</b> ✓</div>`,
check:[["I have a friend ___ lives in Busan. Từ nào điền vào chỗ trống?",["which","who","what","he"],1,"Bổ nghĩa cho người dùng \"who\"."],["“quyển sách tôi đã mua” trong tiếng Anh là cụm nào?",["the I bought book","the book what I bought","the book that I bought","the bought book I"],2,"Danh từ đứng trước, rồi giải thích bằng \"that\", giống trật tự tiếng Việt."],["Câu nào đúng?",["The lives next door man is kind.","The who lives next door man is kind.","Man the who lives next door is kind.","The man who lives next door is kind."],3,"Phần bổ nghĩa đứng sau danh từ và mở đầu bằng \"who\"."]],
practice:[
["mc","I have a friend ___ speaks English. Từ nào điền vào chỗ trống?","who","which","what","she","Bổ nghĩa cho người dùng \"who\"."],
["mc","“quyển sách tôi đã mua” =","the book that I bought","the I bought book","the book what I bought","the bought I book","Danh từ trước, phần giải thích sau."],
["mc","“người đàn ông sống ở nhà bên cạnh” =","the man who lives next door","the lives next door man","the man lives who next door","the man what lives next door","Bổ nghĩa cho người dùng \"who\"; không bỏ được vì phần sau không có chủ ngữ."],
["mc","This is the phone ___ I want. Từ nào điền vào chỗ trống?","that","who","what","it","Bổ nghĩa cho vật dùng \"that\"."],
["mc","“bộ phim chúng tôi đã xem” =","the movie we saw","the we saw movie","the movie what we saw","movie the that we saw","Có thể bỏ \"that\", giống bỏ “mà” trong tiếng Việt."],
["or","Đây là quyển sách tôi đã mua","This is the book I bought","a what","Chính quyển sách tôi đã mua, đã xác định, nên dùng mạo từ \"the\"."],
["or","Tôi có một người bạn hay nấu ăn","I have a friend who cooks","the which","Lần đầu nhắc đến một người bạn nên dùng mạo từ \"a\"."],
["or","Bộ phim chúng tôi xem hay lắm","The movie we saw was great","A movies","Chính bộ phim chúng tôi đã xem nên dùng mạo từ \"the\"."],
["fi","the man __ lives here","người đàn ông sống ở đây","who|that","what|he|which","Bổ nghĩa cho người dùng \"who\"."],
["fi","the book __ I read","quyển sách tôi đã đọc","that|which","who|what|it","Bổ nghĩa cho vật dùng \"that\"."],
["fi","the cafe __ we met","quán cà phê nơi chúng ta gặp nhau","where","who|what|it","Nơi chốn dùng \"where\"."],
["ty","Đây là quyển sách tôi đã mua","This is the book I bought|This is the book that I bought|It's the book I bought|It's the book that I bought","the book · I bought — mạo từ \"the\"","a","Chính quyển sách tôi đã mua, đã xác định, nên dùng mạo từ \"the\"."],
["ty","Tôi có một người bạn nói được tiếng Hàn","I have a friend who speaks Korean|I have a friend that speaks Korean","a friend · who · speaks Korean — mạo từ \"a\"","the","Lần đầu nhắc đến một người bạn nên dùng mạo từ \"a\"."],
["ty","Bộ phim chúng tôi xem hay lắm","The movie we saw was great|The movie we saw was good|The movie that we saw was great|The movie that we saw was good","the movie · we saw · was great — không dùng \"what\"","what","Danh từ trước, phần giải thích sau; không dùng \"what\"."]]},
];
