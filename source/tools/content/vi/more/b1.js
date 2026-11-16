/* vi-en stage B1: lessons for Vietnamese speakers (source of truth). English side shared with ko-en (parity.js).
   Shorthand is expanded by _dsl.js. */
module.exports = [
{ id:"perfect-2", title:"Thì hiện tại hoàn thành 2: for và since, kéo dài đến nay", blurb:"Việc bắt đầu trong quá khứ và vẫn tiếp tục đến bây giờ. \"for\" + khoảng thời gian, \"since\" + mốc thời gian.", deck:"Giới thiệu bản thân", body:`
<p>Cách dùng thứ hai của thì hiện tại hoàn thành: việc <b>bắt đầu trong quá khứ và vẫn kéo dài đến bây giờ</b>. Tiếng Việt nói “Tôi sống ở đây từ năm 2020” hay “Tôi sống ở đây được 5 năm rồi”, động từ “sống” không đổi, nên rất dễ nói <b>I live here since 2020.</b> ✗ Tiếng Anh phải dùng <b>have + V3</b>.</p>
{{ex:I've lived in Hanoi for five years.|/aɪv lɪvd‿ɪn hæˈnɔɪ fɚ faɪv jɪrz/|Tôi sống ở Hà Nội được 5 năm rồi}}{{ex:I've worked here since 2020.|/aɪv wɝːkt hɪr sɪns ˈtwenti ˈtwenti/|Tôi làm việc ở đây từ năm 2020}}{{ex:I've known her for a long time.|/aɪv noʊn hɝː fɚ ə lɑːŋ taɪm/|Tôi quen cô ấy lâu rồi}}
<h3>for và since</h3>
<div class="tbl"><table><tr><th>for + khoảng thời gian</th><th>since + mốc thời gian</th></tr><tr><td class="k">for three years</td><td class="k">since 2020</td></tr><tr><td class="k">for two hours</td><td class="k">since Monday</td></tr></table></div>
<p>“được 3 năm” → <b>for three years</b>; “từ năm 2020” → <b>since 2020</b>.</p>
<h3>How long…?</h3>
{{ex:How long have you been here?|/haʊ lɑːŋ hæv ju bɪn hɪr/|Bạn ở đây bao lâu rồi?}}{{ex:How long have you studied English?|/haʊ lɑːŋ hæv ju ˈstʌdid‿ˈɪŋglɪʃ/|Bạn học tiếng Anh được bao lâu rồi?}}
<h3>just, already, yet</h3>
<p>“vừa mới” → <b>just</b>, “rồi” → <b>already</b>, “… chưa?” → <b>yet</b>.</p>
{{ex:I've just finished.|/aɪv dʒʌst ˈfɪnɪʃt/|Tôi vừa làm xong}}{{ex:I've already seen it.|/aɪv‿ɑːlˈredi siːn‿ɪt/|Tôi xem rồi}}{{ex:Have you eaten yet?|/hæv ju ˈiːtən jet/|Bạn ăn chưa?}}
<p>Trong tiếng Việt, “Ăn cơm chưa?” còn là một lời chào. Trong tiếng Anh, <b>Have you eaten yet?</b> chỉ là câu hỏi thật, không dùng để chào.</p>
<div class="tip">Lỗi hay gặp nhất: dùng thì hiện tại đơn. <b>I live here for five years.</b> ✗ → <b>I've lived here for five years.</b> ✓</div>`,
check:[["I've lived here ___ three years. Từ nào điền vào chỗ trống?",["since","for","during","from"],1,"Trước khoảng thời gian dùng \"for\"."],["I've worked here ___ 2020. Từ nào điền vào chỗ trống?",["for","in","since","at"],2,"Trước mốc thời gian dùng \"since\"."],["“Bạn ở đây bao lâu rồi?” trong tiếng Anh là câu nào?",["How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?"],0,"\"How long have you\" + V3."]],
practice:[
["mc","I've known him ___ ten years. Từ nào điền vào chỗ trống?","for","since","from","during","Trước khoảng thời gian dùng \"for\"."],
["mc","She's lived here ___ 2019. Từ nào điền vào chỗ trống?","since","for","in","at","Trước mốc thời gian dùng \"since\"."],
["mc","“Bạn ở đây bao lâu rồi?” =","How long have you been here?","How long are you here?","How long did you been here?","How long you have been here?","\"How long have you\" + V3."],
["mc","“Tôi vừa làm xong” =","I've just finished.","I just have finish.","I've just finish.","I'm just finished have.","\"have\" + \"just\" + V3."],
["mc","“Bạn ăn chưa?” =","Have you eaten yet?","Did you eaten yet?","Have you ate yet?","Have you eat already yet?","Trong câu hỏi, “… chưa?” là \"yet\"."],
["or","Tôi sống ở đây được 5 năm rồi","I've lived here for five years","year since","Có \"five\" nên dùng số nhiều \"years\"; trước khoảng thời gian dùng \"for\"."],
["or","Tôi xem bộ phim đó rồi","I've already seen the movie","a saw","Bộ phim mà cả hai đều biết nên dùng mạo từ \"the\"."],
["or","Bạn đợi bao lâu rồi?","How long have you waited","did","\"How long have you\" + V3."],
["fi","I've worked here __ two years.","Tôi làm việc ở đây được 2 năm rồi","for","since|from|during","Trước khoảng thời gian dùng \"for\"."],
["fi","I've been here __ Monday.","Tôi ở đây từ thứ hai","since","for|at|during","Trước mốc thời gian dùng \"since\"."],
["fi","Have you finished __?","Bạn làm xong chưa?","yet|already","ever|never|since","Trong câu hỏi, “… chưa?” là \"yet\"."],
["ty","Tôi sống ở đây được 3 năm rồi","I've lived here for three years","I've lived · here · for · three · year — số nhiều","year","Có \"three\" nên dùng số nhiều \"years\"."],
["ty","Bạn ở đây bao lâu rồi?","How long have you been here","how long · have you · been here — câu hỏi","are","\"How long have you\" + V3."],
["ty","Tôi đọc quyển sách đó rồi","I've already read the book|I've read the book already|I already read the book","already · read · book — mạo từ \"the\"","a","Quyển sách mà cả hai đều biết nên dùng mạo từ \"the\"."]]},
{ id:"narrative", title:"Thì khi kể chuyện: quá khứ đơn, quá khứ tiếp diễn, quá khứ hoàn thành", blurb:"Bối cảnh dùng quá khứ tiếp diễn, sự việc dùng quá khứ đơn, việc xảy ra trước đó nữa dùng \"had\" + V3.", deck:"Phim ảnh · tiếng lóng", body:`
<p>Khi kể chuyện, tiếng Việt dựa vào từ chỉ thời gian và các chữ “đang”, “đã”, “rồi”, mà những chữ này lại thường bị lược bỏ. Tiếng Anh kết hợp ba thì, mỗi thì một vai trò, và động từ lúc nào cũng phải chia.</p>
<div class="tbl"><table><tr><th>Thì</th><th>Vai trò</th><th>Ví dụ</th></tr><tr><td class="k">Quá khứ tiếp diễn</td><td>bối cảnh, việc đang làm</td><td>I was walking home.</td></tr><tr><td class="k">Quá khứ đơn</td><td>sự việc xảy ra</td><td>I saw an old friend.</td></tr><tr><td class="k">Quá khứ hoàn thành</td><td>việc xảy ra trước đó</td><td>He had moved to Ho Chi Minh City.</td></tr></table></div>
<h3>Bối cảnh + sự việc</h3>
{{ex:I was walking home when I saw an old friend.|/aɪ wəz ˈwɑːkɪŋ hoʊm wen‿aɪ sɑː ən‿oʊld frend/|Tôi đang đi bộ về nhà thì gặp một người bạn cũ}}
<h3>Thì quá khứ hoàn thành: had + V3</h3>
<p>Việc xảy ra <b>trước</b> một thời điểm khác trong quá khứ, gần giống “đã… rồi” trong câu “Khi tôi đến thì phim đã chiếu rồi”.</p>
{{ex:When I arrived, the movie had already started.|/wen‿aɪ əˈraɪvd ðə ˈmuːvi hæd‿ɑːlˈredi ˈstɑːrtɪd/|Khi tôi đến thì phim đã bắt đầu rồi}}{{ex:I had never seen snow before.|/aɪ hæd ˈnevɚ siːn snoʊ bɪˈfɔːr/|Trước đó tôi chưa bao giờ thấy tuyết}}
<h3>Từ nối chỉ thứ tự</h3>
<p>Dùng <b>first</b> (đầu tiên), <b>then</b> (rồi, sau đó), <b>after that</b> (sau đó nữa), <b>finally</b> (cuối cùng) để nối các sự việc.</p>
{{ex:First we ate dinner. Then we watched a movie.|/fɝːst wi eɪt ˈdɪnɚ/ /ðen wi wɑːtʃt‿ə ˈmuːvi/|Đầu tiên chúng tôi ăn tối. Sau đó chúng tôi xem phim}}
<div class="tip"><b>then</b> (sau đó) và <b>than</b> (hơn) phát âm gần giống nhau nhưng là hai từ khác nhau. Khi kể chuyện thì dùng <b>then</b>.</div>`,
check:[["When I arrived, the train ___ already left. Từ nào điền vào chỗ trống?",["has","was","had","did"],2,"Việc xảy ra trước đó dùng \"had\" + V3."],["I ___ walking home when it started to rain. Từ nào điền vào chỗ trống?",["was","had","did","have"],0,"Việc đang làm (bối cảnh) dùng quá khứ tiếp diễn."],["Câu nào diễn tả việc xảy ra trước đó nữa?",["I was eating.","I ate.","I eat.","I had eaten."],3,"\"had\" + V3 là thì quá khứ hoàn thành."]],
practice:[
["mc","When I got there, the movie ___ already started. Từ nào điền vào chỗ trống?","had","has","was","did","Việc xảy ra trước đó dùng \"had\" + V3."],
["mc","I ___ cooking when the phone rang. Từ nào điền vào chỗ trống?","was","had","did","have","Việc đang làm dùng quá khứ tiếp diễn."],
["mc","“Khi tôi đến thì tàu đã chạy rồi” =","When I arrived, the train had already left.","When I arrived, the train already leaves.","When I had arrived, the train left already had.","When I arrive, the train has left already.","Việc xảy ra trước đó dùng \"had\" + V3."],
["mc","Khi nối các sự việc, “sau đó” là từ nào?","then","than","that","them","\"Then\" là “sau đó”, \"than\" là “hơn”."],
["mc","“Trước đó tôi chưa bao giờ thấy tuyết” =","I had never seen snow before.","I never have saw snow before.","I had never see snow before.","I was never seen snow before.","\"had\" + \"never\" + V3."],
["or","Tàu đã chạy rồi","The train had already left","a has","Chuyến tàu định đi thì cả hai đều biết, nên dùng mạo từ \"the\"."],
["or","Tôi gặp một người bạn cũ","I met an old friend","a friends","\"Old\" bắt đầu bằng một nguyên âm nên dùng mạo từ \"an\"."],
["or","Tôi đang đi bộ về nhà","I was walking home","had","Bối cảnh dùng quá khứ tiếp diễn."],
["fi","I was sleeping __ you called.","Lúc bạn gọi, tôi đang ngủ","when","than|so|had","“Khi / lúc” là \"when\"."],
["fi","The bus had already __.","Xe buýt đã chạy rồi","left|gone","leave|leaving|leaves","Sau \"had\" là V3."],
["fi","First we ate. __ we watched a movie.","Đầu tiên chúng tôi ăn. Sau đó chúng tôi xem phim","Then|After that|Next","Than|Because|When","“Sau đó” là \"then\"."],
["ty","Phim đã bắt đầu rồi","The movie had already started|The movie had started already|The movie already started","the movie · had · already · started — mạo từ \"the\"","a","Bộ phim định xem thì cả hai đều biết, nên dùng mạo từ \"the\"."],
["ty","Tôi gặp một người bạn cũ","I met an old friend|I saw an old friend|I ran into an old friend","met · old friend — mạo từ \"an\"","a","\"Old\" bắt đầu bằng một nguyên âm nên dùng mạo từ \"an\"."],
["ty","Tôi đang đi bộ về nhà","I was walking home","was · walking · home — bối cảnh","had","Bối cảnh dùng quá khứ tiếp diễn."]]},
{ id:"conditionals", title:"Câu điều kiện loại 2 và loại 3: giả định và tiếc nuối", blurb:"Trái với hiện tại thì dùng \"would\", tiếc nuối chuyện đã qua thì dùng \"would have\".", deck:"Cảm xúc · phản ứng", body:`
<p>Dùng khi tưởng tượng điều không có thật. Tiếng Việt vẫn dùng “nếu… thì…” và để ngữ cảnh (hoặc “giá mà”, “lẽ ra”) cho biết đó là giả định. Tiếng Anh báo hiệu bằng thì của động từ: lùi về quá khứ một bậc.</p>
<h3>Câu điều kiện loại 2: trái với hiện tại</h3>
<p><b>If + quá khứ đơn, would + động từ nguyên mẫu</b>. Động từ ở quá khứ nhưng nghĩa là hiện tại.</p>
{{ex:If I had time, I would travel.|/ɪf‿aɪ hæd taɪm aɪ wʊd ˈtrævəl/|Nếu có thời gian, tôi đã đi du lịch rồi (tiếc là không có)}}{{ex:If I were you, I'd take it.|/ɪf‿aɪ wɝː ju aɪd teɪk‿ɪt/|Nếu tôi là bạn, tôi sẽ nhận}}{{ex:What would you do?|/wʌt wʊd ju duː/|Trong trường hợp đó bạn sẽ làm gì?}}
<h3>Câu điều kiện loại 3: trái với quá khứ</h3>
<p><b>If + had + V3, would have + V3</b>.</p>
{{ex:If I had studied, I would have passed.|/ɪf‿aɪ hæd ˈstʌdid aɪ wʊd hæv pæst/|Nếu hồi đó tôi học bài thì tôi đã đỗ rồi}}
<h3>Tiếc nuối: should have, I wish</h3>
{{ex:I should have called.|/aɪ ʃʊd hæv kɑːld/|Lẽ ra tôi nên gọi điện}}{{ex:I wish I had more time.|/aɪ wɪʃ‿aɪ hæd mɔːr taɪm/|Ước gì tôi có nhiều thời gian hơn}}
<div class="tbl"><table><tr><th>Loại</th><th>Vế if</th><th>Vế kết quả</th></tr><tr><td>1 (có thể xảy ra)</td><td class="k">hiện tại đơn</td><td class="k">will</td></tr><tr><td>2 (trái với hiện tại)</td><td class="k">quá khứ đơn</td><td class="k">would</td></tr><tr><td>3 (trái với quá khứ)</td><td class="k">had + V3</td><td class="k">would have + V3</td></tr></table></div>
<div class="tip"><b>If I were you</b> là cách nói cố định: sau <b>I</b> cũng dùng <b>were</b>, không phải <b>was</b>.</div>`,
check:[["If I ___ rich, I would travel. Từ nào điền vào chỗ trống?",["am","were","will be","would be"],1,"Trái với hiện tại thì vế \"if\" dùng quá khứ (\"were\")."],["If I had studied, I ___ passed. Từ nào điền vào chỗ trống?",["would","will have","would have","had"],2,"Trái với quá khứ thì dùng \"would have\" + V3."],["“Lẽ ra tôi nên gọi điện” trong tiếng Anh là câu nào?",["I should have called.","I should called.","I should had call.","I would call should."],0,"Tiếc nuối dùng \"should have\" + V3."]],
practice:[
["mc","If I ___ time, I would help. Từ nào điền vào chỗ trống?","had","have","will have","would have","Trái với hiện tại thì vế \"if\" dùng quá khứ đơn."],
["mc","“Nếu tôi là bạn, tôi sẽ mua nó” =","If I were you, I'd buy it.","If I am you, I'll buy it.","If I were you, I buy it.","If I would be you, I'd buy it.","\"If I were you, I'd…\" là cách nói cố định."],
["mc","If I had known, I ___ come. Từ nào điền vào chỗ trống?","would have","would","will have","had","Trái với quá khứ thì dùng \"would have\" + V3."],
["mc","“Lẽ ra tôi nên gọi điện” =","I should have called.","I should called.","I should had call.","I must called.","Tiếc nuối dùng \"should have\" + V3."],
["mc","“Trong trường hợp đó bạn sẽ làm gì?” =","What would you do?","What will you did?","What would you did?","What you would do?","Giả định dùng \"would\" + động từ nguyên mẫu."],
["or","Nếu có thời gian thì tôi đi du lịch rồi","If I had time I'd travel","have will","Trái với hiện tại nên dùng quá khứ \"had\" và \"would\"."],
["or","Là tôi thì tôi sẽ đi taxi","I'd take a taxi","the taxis","Một chiếc taxi bất kỳ nên dùng mạo từ \"a\"."],
["or","Lẽ ra tôi nên mua vé","I should have bought a ticket","the buy","Danh từ đếm được số ít \"ticket\" cần mạo từ \"a\"."],
["fi","If I __ you, I'd go.","Nếu tôi là bạn, tôi sẽ đi","were|was","am|be|would be","\"If I were you\" là cách nói cố định."],
["fi","I would __ helped.","(Nếu biết thì) tôi đã giúp rồi","have","had|has|having","\"would have\" + V3."],
["fi","I wish I __ more time.","Ước gì tôi có nhiều thời gian hơn","had","have|would have|will have","Sau \"I wish\" dùng quá khứ đơn."],
["ty","Nếu tôi là bạn, tôi sẽ đi","If I were you I'd go|I'd go if I were you|If I was you I'd go","if I were you · I'd · go — giả định","am","Cách nói cố định: \"If I were you, I'd…\"."],
["ty","Ước gì tôi có một chiếc ô tô","I wish I had a car","I wish · had · car — mạo từ \"a\"","the","Một chiếc xe bất kỳ nên dùng mạo từ \"a\"."],
["ty","Lẽ ra tôi nên đi taxi","I should have taken a taxi|I should have got a taxi|I should have gotten a taxi","should have · taken · taxi — mạo từ \"a\"","the","Một chiếc taxi bất kỳ nên dùng mạo từ \"a\"."]]},
{ id:"passive", title:"Câu bị động: be + V3", blurb:"Dùng khi việc xảy ra quan trọng hơn ai làm.", deck:"Công sở · email", body:`
<p>Tiếng Việt có “bị” cho việc không hay và “được” cho việc tốt: “Tôi bị phạt”, “Tôi được khen”. Tiếng Anh không phân biệt như vậy: cả hai đều là <b>động từ to be + quá khứ phân từ (V3)</b>. Câu bị động nghe tự nhiên khi không biết hoặc không cần nói ai làm.</p>
{{ex:My phone was stolen.|/maɪ foʊn wəz ˈstoʊlən/|Điện thoại của tôi bị lấy cắp}}{{ex:This was made in Vietnam.|/ðɪs wəz meɪd‿ɪn viːetˈnɑːm/|Cái này được sản xuất ở Việt Nam}}{{ex:The meeting was canceled.|/ðə ˈmiːtɪŋ wəz ˈkænsəld/|Cuộc họp đã bị hủy}}
<h3>Hiện tại: việc luôn diễn ra như vậy</h3>
{{ex:English is spoken here.|/ˈɪŋglɪʃ‿ɪz ˈspoʊkən hɪr/|Ở đây có nói tiếng Anh}}{{ex:Breakfast is served at seven.|/ˈbrekfəst‿ɪz sɝːvd‿ət ˈsevən/|Bữa sáng được phục vụ lúc 7 giờ}}
<h3>Người thực hiện: by</h3>
{{ex:It was written by my teacher.|/ɪt wəz ˈrɪtən baɪ maɪ ˈtiːtʃɚ/|Bài này do thầy giáo tôi viết}}
<h3>Chủ động và bị động</h3>
<div class="tbl"><table><tr><th>Câu chủ động</th><th>Câu bị động</th></tr><tr><td class="k">Someone stole my bag.</td><td class="k">My bag was stolen.</td></tr><tr><td class="k">They canceled the flight.</td><td class="k">The flight was canceled.</td></tr></table></div>
<h3>Động từ không có tân ngữ thì không có bị động</h3>
<p>Câu tiếng Việt có “bị”, “được” chưa chắc là câu bị động trong tiếng Anh. Những động từ không có tân ngữ như <b>happen</b>, <b>become</b>, <b>arrive</b> không dùng ở dạng bị động: <b>The accident was happened.</b> ✗ → <b>The accident happened.</b> ✓, <b>It was become legal.</b> ✗ → <b>It became legal.</b> ✓</p>
<div class="tip">Lỗi hay gặp nhất: quên động từ to be. <b>My phone stolen.</b> ✗ → <b>My phone was stolen.</b> ✓</div>`,
check:[["My bag ___ stolen yesterday. Từ nào điền vào chỗ trống?",["is","was","did","has"],1,"Việc xảy ra hôm qua nên dùng \"was\" + V3."],["This phone ___ made in Korea. Từ nào điền vào chỗ trống?",["was","did","has","does"],0,"Câu bị động: động từ to be + V3."],["“Cuộc họp đã bị hủy” trong tiếng Anh là câu nào?",["The meeting canceled.","The meeting was cancel.","The meeting did canceled.","The meeting was canceled."],3,"Động từ to be + V3 \"canceled\"."]],
practice:[
["mc","My phone ___ stolen. Từ nào điền vào chỗ trống?","was","did","has","is steal","Câu bị động: động từ to be + V3."],
["mc","“Cái này được sản xuất ở Hàn Quốc” =","This was made in Korea.","This made in Korea.","This was make in Korea.","This did made in Korea.","Động từ to be + V3 \"made\"."],
["mc","“Ở đây có nói tiếng Anh” (câu bị động) =","English is spoken here.","English speaks here.","English is speak here.","English spoken is here.","Việc luôn diễn ra như vậy: \"is\" + V3."],
["mc","“Cuộc họp đã bị hủy” =","The meeting was canceled.","The meeting canceled was.","The meeting was cancel.","The meeting did canceled.","Động từ to be + V3."],
["mc","“Bữa sáng được phục vụ lúc 7 giờ” =","Breakfast is served at seven.","Breakfast serves at seven.","Breakfast is serve at seven.","The breakfast is serving at seven.","Tên bữa ăn không có mạo từ; dùng \"is\" + V3."],
["or","Túi của tôi bị lấy cắp","My bag was stolen","stole","Sau động từ to be là V3 \"stolen\"."],
["or","Cuộc họp đã bị hủy","The meeting was canceled","A meetings","Cuộc họp mà cả hai đều biết nên dùng mạo từ \"the\"."],
["or","Cửa sổ bị vỡ","The window was broken","a windows","Cái cửa sổ ở ngay đây nên dùng mạo từ \"the\"."],
["fi","This was __ in Korea.","Cái này được sản xuất ở Hàn Quốc","made","make|making|makes","Sau động từ to be là V3."],
["fi","The room __ cleaned every day.","Phòng được dọn mỗi ngày","is|gets","does|has|did","Việc luôn diễn ra như vậy: \"is\" + V3."],
["fi","It was written __ Han Kang.","Tác phẩm này do Han Kang viết","by","from|of|with","Người thực hiện đứng sau \"by\"."],
["ty","Điện thoại của tôi bị lấy cắp","My phone was stolen|My phone got stolen","my phone · was · stolen — câu bị động","stole","Động từ to be + V3 \"stolen\"."],
["ty","Cuộc họp đó đã bị hủy","The meeting was canceled|The meeting was cancelled|The meeting got canceled","the meeting · was · canceled — mạo từ \"the\"","a","Cuộc họp mà cả hai đều biết nên dùng mạo từ \"the\"."],
["ty","Cửa đã bị khóa","The door was locked","the door · was · locked — mạo từ \"the\"","a","Cánh cửa ở ngay đây nên dùng mạo từ \"the\"."]]},
{ id:"reported", title:"Câu tường thuật: thuật lại lời người khác", blurb:"\"She said she was tired.\" Lùi thì một bậc, sau \"tell\" phải có người nghe.", deck:"Điện thoại · viết tắt khi nhắn tin", body:`
<p>Dùng khi kể lại lời người khác, giống “… nói là …” trong tiếng Việt. Tiếng Việt giữ nguyên động từ (“Cô ấy nói là cô ấy mệt”), còn tiếng Anh <b>lùi thì một bậc</b> về quá khứ.</p>
<div class="tbl"><table><tr><th>Lời nói gốc</th><th>Khi thuật lại</th></tr><tr><td class="k">"I'm tired."</td><td class="k">She said she was tired.</td></tr><tr><td class="k">"I'll come."</td><td class="k">He said he would come.</td></tr><tr><td class="k">"I can help."</td><td class="k">She said she could help.</td></tr></table></div>
{{ex:She said she was tired.|/ʃi sed ʃi wəz ˈtaɪɚd/|Cô ấy nói là cô ấy mệt}}{{ex:He said he would come.|/hi sed hi wʊd kʌm/|Anh ấy nói là sẽ đến}}
<h3>say và tell</h3>
<p>Sau <b>tell</b> bắt buộc có người nghe, sau <b>say</b> thì không. Tiếng Việt nói “nói với tôi”, nhưng tiếng Anh không có <b>said me</b> hay <b>told to me</b>.</p>
{{ex:He told me he was busy.|/hi toʊld mi hi wəz ˈbɪzi/|Anh ấy bảo tôi là anh ấy bận}}
<h3>Thuật lại câu hỏi</h3>
<p>Câu hỏi có/không dùng <b>if</b>; câu hỏi có từ để hỏi thì giữ nguyên từ để hỏi. Phần sau theo <b>trật tự câu khẳng định</b> (chủ ngữ + động từ): không đảo, không dùng <b>do / did</b>.</p>
{{ex:She asked if I was okay.|/ʃi æskt‿ɪf‿aɪ wəz‿oʊˈkeɪ/|Cô ấy hỏi tôi có ổn không}}{{ex:He asked where I lived.|/hi æskt wer aɪ lɪvd/|Anh ấy hỏi tôi sống ở đâu}}
<div class="tip">Lỗi hay gặp nhất: <b>He said me …</b> ✗ → <b>He told me …</b> ✓; <b>He asked where did I live.</b> ✗ → <b>He asked where I lived.</b> ✓</div>`,
check:[["She said she ___ tired. Từ nào điền vào chỗ trống?",["is being","was","be","will"],1,"Khi thuật lại, lùi thì về quá khứ."],["He ___ me he would come. Từ nào điền vào chỗ trống?",["said","say","told","tell to"],2,"Có người nghe (\"me\") thì dùng \"told\"."],["“Anh ấy hỏi tôi sống ở đâu” trong tiếng Anh là câu nào?",["He asked where I lived.","He asked where did I live.","He asked where do I live.","He asked me where lived I."],0,"Câu hỏi được thuật lại theo trật tự câu khẳng định."]],
practice:[
["mc","She said she ___ busy. Từ nào điền vào chỗ trống?","was","is being","be","were being","Khi thuật lại, lùi thì về quá khứ."],
["mc","He ___ me he was late. Từ nào điền vào chỗ trống?","told","said","say","tells to","Có người nghe thì dùng \"told\"."],
["mc","“Anh ấy nói là sẽ đến” =","He said he would come.","He said he will came.","He told he would come.","He said me he would come.","\"Will\" đổi thành \"would\"."],
["mc","“Cô ấy hỏi tôi có ổn không” =","She asked if I was okay.","She asked was I okay.","She asked if was I okay.","She said if I was okay.","Câu hỏi có/không được thuật lại bằng \"if\"."],
["mc","“Anh ấy hỏi tôi sống ở đâu” =","He asked where I lived.","He asked where did I live.","He asked where I did lived.","He asked me where lived I.","Câu hỏi được thuật lại theo trật tự câu khẳng định."],
["or","Cô ấy nói là cô ấy mệt","She said she was tired","told","Không có người nghe thì dùng \"said\"."],
["or","Anh ấy nói là đã mua một chiếc ô tô","He said he bought a car","the cars","Lần đầu nhắc đến một chiếc xe nên dùng mạo từ \"a\"."],
["or","Cô ấy nói là cô ấy thích quyển sách đó","She said she liked the book","a books","Quyển sách mà cả hai đều biết nên dùng mạo từ \"the\"."],
["fi","She __ she was tired.","Cô ấy nói là cô ấy mệt","said","told|asked|say","Không có người nghe thì dùng \"said\"."],
["fi","He told __ he was busy.","Anh ấy bảo tôi là anh ấy bận","me","I|my|to","Sau \"told\" là người nghe, dùng đại từ tân ngữ \"me\"."],
["fi","She asked __ I was okay.","Cô ấy hỏi tôi có ổn không","if|whether","that|what|did","Câu hỏi có/không được thuật lại bằng \"if\"."],
["ty","Anh ấy nói là anh ấy bận","He said he was busy|He said that he was busy|He told me he was busy","he said · he was · busy — lùi thì","is","Khi thuật lại, lùi thì về quá khứ."],
["ty","Cô ấy nói là cô ấy có ô tô","She said she had a car|She said that she had a car|She told me she had a car","she said · had · car — mạo từ \"a\"","the","Lần đầu nhắc đến một chiếc xe nên dùng mạo từ \"a\"."],
["ty","Anh ấy nói là đã xem bộ phim đó","He said he saw the movie|He said he had seen the movie|He said he watched the movie|He told me he saw the movie","he said · saw · movie — mạo từ \"the\"","a","Bộ phim mà cả hai đều biết nên dùng mạo từ \"the\"."]]},
];
