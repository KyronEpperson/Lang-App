/* Deck source: one card per line, fields separated by " | " : target | pron | meaning | note
   th-en: pron = IPA written exactly as the zh course writes it (docs/profiles/th.md §6, tools/content/th/PRON-RULES.md); must match profile.json pronPattern.
   Deck names are FINAL (tools/content/th/DECKNAMES.md). The last deck is th-only (profile §9). */
module.exports = {
"คำทักทาย": `
Hello. | /həˈloʊ/ | สวัสดี | คำทักทายพื้นฐานที่สุด ใช้ได้ทุกที่ ทุกเวลา กับทุกคน
Hi! | /ˈhaɪ/ | สวัสดี (แบบเป็นกันเอง) | สบาย ๆ กว่า Hello ในอเมริกาเพื่อนร่วมงานก็ทักกันด้วย Hi
Hey! | /ˈheɪ/ | เฮ้ / หวัดดี | ใช้กับเพื่อนหรือคนสนิท ถ้าใช้กับคนแปลกหน้าอาจฟังดูไม่สุภาพ
Good morning. | /ˈgʊd ˈmɔːrnɪŋ/ | อรุณสวัสดิ์ / สวัสดีตอนเช้า | ใช้ได้จนถึงเที่ยง พูดสั้น ๆ ว่า Morning! ก็ได้
Good afternoon. | /ˈgʊd ˌæftərˈnuːn/ | สวัสดีตอนบ่าย | ใช้ช่วงเที่ยงถึงประมาณหกโมงเย็น ค่อนข้างเป็นทางการ ได้ยินบ่อยในร้านค้าและบริษัท ใช้กับลูกค้าได้
Good evening. | /ˈgʊd ˈiːvnɪŋ/ | สวัสดีตอนเย็น | ใช้ทักตอนเจอกันช่วงเย็น ส่วน Good night ใช้ตอนลาเท่านั้น
How are you? | /ˈhaʊ ər ju/ | สบายดีไหม | เป็นคำทักทาย ไม่ได้ถามเรื่องสุขภาพจริงจัง ตอบสั้น ๆ ว่า Good, thanks. You? ก็พอ
I'm good, thanks. And you? | /aɪm ˈgʊd ˈθæŋks ‖ ənd ˈjuː/ | สบายดี ขอบคุณ แล้วคุณล่ะ | I'm fine, thank you. ที่เรียนกันในโรงเรียนฟังดูเป็นแบบเรียน I'm good เป็นธรรมชาติกว่ามาก
What's up? | /ˈwʌts ˈʌp/ | ว่าไง / มีอะไรใหม่ ๆ ไหม | คำทักแบบสบาย ๆ ระหว่างคนรู้จัก คล้าย “ว่าไง” ของไทย ไม่ได้ต้องการคำตอบยาว ตอบว่า Not much. ได้เลย
Not much. | /ˈnɑːt ˈmʌtʃ/ | ก็เรื่อย ๆ / ไม่มีอะไร | คำตอบที่พบบ่อยที่สุดของ What's up? ถามกลับได้ว่า Not much, you?
How's it going? | /ˈhaʊz ɪt ˈgoʊɪŋ/ | เป็นไงบ้าง | How are you? แบบกันเอง ตอบได้ว่า Pretty good!
Nice to meet you. | /ˈnaɪs tə ˈmiːt ju/ | ยินดีที่ได้รู้จัก | ใช้ตอนเจอกันครั้งแรกเท่านั้น ตอบว่า Nice to meet you, too.
Long time no see! | /ˈlɔːŋ ˈtaɪm ˈnoʊ ˈsiː/ | ไม่เจอกันนานเลย | ใช้กับคนที่สนิทกัน แบบสุภาพขึ้นหน่อยพูดว่า It's been a while.
See you later. | /ˈsiː ju ˈleɪtər/ | แล้วเจอกัน | พูดตอนลาได้แม้ไม่ได้นัดกันไว้ ใช้เหมือน “แล้วเจอกัน” ของไทย
Take care. | /ˈteɪk ˈker/ | ดูแลตัวเองนะ | คำลาที่อบอุ่น ใช้ปิดท้ายข้อความแชตได้ด้วย ไม่ต้องเติม yourself
Have a good one! | /ˈhæv ə ˈgʊd ˈwʌn/ | ขอให้เป็นวันที่ดี | พนักงานร้านมักพูดหลังคิดเงิน ตอบกลับว่า You too! ก็จบ
Bye! | /ˈbaɪ/ | บาย / ไปก่อนนะ | ผู้ใหญ่พูด Bye-bye กันจะฟังเหมือนเด็กอยู่บ้าง Bye! คำเดียวฟังเป็นผู้ใหญ่กว่า
Good night. | /ˈgʊd ˈnaɪt/ | ราตรีสวัสดิ์ / ฝันดี | ใช้ตอนลากันกลางคืนหรือก่อนนอนเท่านั้น ตอนเจอกันให้ใช้ Good evening
`,
"แนะนำตัว": `
My name is Ploy. | /maɪ ˈneɪm ɪz ˈplɔɪ/ | ฉันชื่อพลอย | ในชีวิตประจำวันพูดสั้น ๆ ว่า I'm Ploy. ก็ได้ แนะนำตัวด้วยชื่อเล่นกับเพื่อนได้เลย
Please call me Jay. | /ˈpliːz ˈkɔːl mi ˈdʒeɪ/ | เรียกฉันว่าเจย์ก็ได้ | ใช้เมื่อมีชื่อภาษาอังกฤษหรืออยากให้เรียกชื่อสั้น ๆ คนไทยบอกชื่อเล่นแบบนี้ได้ เช่น Please call me Bank.
What should I call you? | /ˈwʌt ʃəd aɪ ˈkɔːl ju/ | ให้เรียกคุณว่าอะไรดี | มีประโยชน์เมื่อชื่ออีกฝ่ายออกเสียงยาก หรืออยากรู้ชื่อที่เขาชอบให้เรียก
Where are you from? | /ˈwer ər ju frʌm/ | คุณมาจากไหน / คุณเป็นคนที่ไหน | คำถามแรก ๆ ที่จะได้ยินในต่างประเทศ ถามถึงบ้านเกิดหรือประเทศ ต่างจาก “ไปไหนมา” ที่คนไทยใช้ทักทาย
I'm from Thailand. | /aɪm frəm ˈtaɪlænd/ | ฉันมาจากประเทศไทย | บอกเมืองด้วยจะคุยต่อได้ง่ายขึ้น: I'm from Chiang Mai, in Thailand.
I live in Bangkok. | /aɪ ˈlɪv ɪn ˈbæŋkɑːk/ | ฉันอยู่กรุงเทพฯ | v ใน live ไม่ใช่ ว หรือ ฟ ให้ฟันบนแตะริมฝีปากล่างแล้วสั่นเส้นเสียง
I'm a student. | /aɪm ə ˈstuːdnt/ | ฉันเป็นนักเรียน / ฉันเป็นนักศึกษา | หน้าอาชีพต้องมีคำนำหน้านาม a หรือ an เสมอ I'm student. ✗ เป็นข้อผิดพลาดที่พบบ่อยที่สุด
What do you do? | /ˈwʌt də ju ˈduː/ | คุณทำงานอะไร | คำถามมาตรฐานเรื่องอาชีพ ฟังนุ่มนวลกว่า What's your job?
I work at a bank. | /aɪ ˈwɜːrk ət ə ˈbæŋk/ | ฉันทำงานที่ธนาคาร | หน้าชื่อบริษัทหรือสถานที่ทำงานใช้ at: I work at a hotel.
I work in marketing. | /aɪ ˈwɜːrk ɪn ˈmɑːrkɪtɪŋ/ | ฉันทำงานด้านการตลาด | หน้าสายงานหรือแผนกใช้ in แยกจาก at ที่ใช้กับบริษัท
I'm 25 years old. | /aɪm ˌtwentiˈfaɪv ˈjɪrz ˈoʊld/ | ฉันอายุ 25 ปี | คนไทยมักถามอายุเพื่อเลือกเรียกพี่หรือน้อง แต่ในต่างประเทศการถามอายุตอนเพิ่งรู้จักอาจเสียมารยาท
I'm really into hiking. | /aɪm ˈriːəli ɪntə ˈhaɪkɪŋ/ | ฉันชอบเดินป่ามาก | วิธีบอกงานอดิเรกที่เป็นธรรมชาติกว่า My hobby is… มาก
I like watching movies. | /aɪ ˈlaɪk ˈwɑːtʃɪŋ ˈmuːviz/ | ฉันชอบดูหนัง | ถ้ามีกริยาตามหลัง like ใช้รูป -ing หรือ to + กริยาช่อง 1
I've been learning English for a year. | /aɪv bɪn ˈlɜːrnɪŋ ˈɪŋglɪʃ fər ə ˈjɪr/ | ฉันเรียนภาษาอังกฤษมาได้ 1 ปีแล้ว | ภาษาไทยใช้ “มา…แล้ว” โดยไม่เปลี่ยนกริยา แต่ภาษาอังกฤษต้องใช้ have been + -ing (Present Perfect Continuous Tense)
I'm here on vacation. | /aɪm ˈhɪr ɑːn veɪˈkeɪʃn/ | ฉันมาเที่ยวพักผ่อน | อังกฤษแบบบริติชพูดว่า I'm here on holiday.
I'm married. | /aɪm ˈmærid/ | ฉันแต่งงานแล้ว | ถ้ายังโสดพูดว่า I'm single. ไม่ควรถามเรื่องสถานะสมรสตอนเพิ่งรู้จักกัน
I have a younger brother. | /aɪ ˈhæv ə ˈjʌŋgər ˈbrʌðər/ | ฉันมีน้องชายหนึ่งคน | ภาษาอังกฤษไม่มีคำว่าพี่หรือน้องโดยตรง ต้องเติม older หรือ younger: older sister = พี่สาว
`,
"ภาษาอังกฤษเอาตัวรอด 1": `
Excuse me. | /ɪkˈskjuːz mi/ | ขอโทษนะ / ขอทางหน่อย | ใช้เรียกคนหรือขอทาง ถ้าเดินชนแล้วให้พูดว่า Sorry!
Thank you. | /ˈθæŋk ju/ | ขอบคุณ | th ไม่ใช่ ท หรือ ซ ให้วางปลายลิ้นแตะฟันบนแล้วเป่าลม ภาษาไทยเติม ครับ/ค่ะ แต่ภาษาอังกฤษไม่มีคำแบบนี้
Thanks a lot. | /ˈθæŋks ə ˈlɑːt/ | ขอบคุณมาก | สบาย ๆ และเป็นกันเองกว่า Thank you
You're welcome. | /jʊr ˈwelkəm/ | ด้วยความยินดี | แบบสบาย ๆ ใช้ Sure. / No problem. / Anytime. ตอบคำขอบคุณได้เหมือนกัน
No problem. | /ˈnoʊ ˈprɑːbləm/ | ไม่มีปัญหา / ได้เลย | ใช้ตอบคำขอบคุณบ่อยมาก
I'm sorry. | /aɪm ˈsɑːri/ | ขอโทษ | ใช้เมื่อขอโทษจริงจัง ถ้าแค่ชนกันเบา ๆ พูดว่า Sorry! คำเดียวก็พอ
Yes, please. | /ˈjes ˈpliːz/ | เอา ขอบคุณ | ตอบรับข้อเสนออย่าง Would you like some water? คำว่า please ทำหน้าที่สุภาพแทน ครับ/ค่ะ
No, thank you. | /ˈnoʊ ˈθæŋk ju/ | ไม่เป็นไร ขอบคุณ | ปฏิเสธได้สุภาพกว่าพูด No คำเดียวมาก แบบสบาย ๆ: I'm good, thanks.
Sorry? | /ˈsɑːri/ | อะไรนะ / ว่าอะไรนะ | ขึ้นเสียงท้ายจะแปลว่า “ช่วยพูดอีกครั้ง” ในอเมริกาใช้บ่อยกว่า Pardon?
Could you say that again? | /kəd ju ˈseɪ ˈðæt əˈgen/ | ช่วยพูดอีกครั้งได้ไหม | ถ้าฟังไม่ทันถามได้เลยไม่ต้องอาย เจ้าของภาษาเองก็ถามกันบ่อย
Could you speak more slowly? | /kəd ju ˈspiːk ˈmɔːr ˈsloʊli/ | ช่วยพูดช้าลงหน่อยได้ไหม | เติม please จะสุภาพขึ้นอีก
I don't understand. | /aɪ ˈdoʊnt ˌʌndərˈstænd/ | ฉันไม่เข้าใจ | ฟังห้วนไปหน่อย แบบนุ่มนวลกว่า: Sorry, I didn't quite catch that.
Do you speak Thai? | /də ju ˈspiːk ˈtaɪ/ | คุณพูดภาษาไทยได้ไหม | Do you speak…? เป็นธรรมชาติและสุภาพกว่า Can you speak…?
I speak a little English. | /aɪ ˈspiːk ə ˈlɪtl ˈɪŋglɪʃ/ | ฉันพูดภาษาอังกฤษได้นิดหน่อย | l ท้าย little ต้องยกปลายลิ้นแตะเหงือก ไม่ใช่ ว หรือ น ส่วน t ตรงกลางในสำเนียงอเมริกันฟังคล้าย ด เบา ๆ
How do you say this in English? | /ˈhaʊ də ju ˈseɪ ˈðɪs ɪn ˈɪŋglɪʃ/ | อันนี้ภาษาอังกฤษเรียกว่าอะไร | ชี้ของแล้วถาม จะได้คำศัพท์ใหม่ทันที
What does this mean? | /ˈwʌt dəz ˈðɪs ˈmiːn/ | อันนี้แปลว่าอะไร | ชี้เมนูหรือป้ายแล้วถาม
Can you help me? | /kən ju ˈhelp mi/ | ช่วยฉันหน่อยได้ไหม | สุภาพขึ้นอีกขั้น: Could you help me?
`,
"ภาษาอังกฤษเอาตัวรอด 2": `
Where's the restroom? | /ˈwerz ðə ˈrestruːm/ | ห้องน้ำอยู่ที่ไหน | อเมริกาใช้ restroom หรือ bathroom อังกฤษใช้ toilet ในอเมริกา toilet หมายถึงโถส้วม
How much is this? | /ˈhaʊ ˈmʌtʃ ɪz ˈðɪs/ | อันนี้ราคาเท่าไร | ถ้าถามหลายชิ้นใช้ How much are these? และ s ท้าย this ต้องได้ยินชัด
Is there an ATM around here? | /ɪz ðer ən ˌeɪ tiː ˈem əˈraʊnd ˈhɪr/ | แถวนี้มีตู้เอทีเอ็มไหม | ภาษาไทยขึ้นต้นด้วย “มี” ได้เลย แต่ภาษาอังกฤษต้องใช้ Is there…? ไม่ใช่ Have ATM? ✗
Can I get the Wi-Fi password? | /kən aɪ ˈget ðə ˈwaɪfaɪ ˈpæswɜːrd/ | ขอรหัสไวไฟหน่อยได้ไหม | หรือถามว่า Is there Wi-Fi here? ก็ได้
I'm lost. | /aɪm ˈlɔːst/ | ฉันหลงทาง | ชี้แผนที่แล้วถามว่า Where am I on this map? ก็ได้
Can I pay by card? | /kən aɪ ˈpeɪ baɪ ˈkɑːrd/ | จ่ายด้วยบัตรได้ไหม | ในอเมริกาแทบทุกร้านรับบัตร แต่การสแกน QR แบบพร้อมเพย์แทบไม่มี ร้านเล็กอาจมียอดขั้นต่ำ
One moment, please. | /ˈwʌn ˈmoʊmənt ˈpliːz/ | รอสักครู่ | ประโยคสุภาพ ได้ยินบ่อยในร้านค้าและทางโทรศัพท์ ใช้กับลูกค้าได้
Just a second. | /ˈdʒʌst ə ˈsekənd/ | แป๊บนึง / เดี๋ยวนะ | แบบสบาย ๆ สั้นกว่านี้คือ Just a sec.
No worries. | /ˈnoʊ ˈwɜːriz/ | ไม่เป็นไรหรอก / ไม่ต้องห่วง | ใช้บ่อยมากในออสเตรเลียและอังกฤษ ในอเมริกาก็ได้ยินทั่วไป
That's okay. | /ˈðæts oʊˈkeɪ/ | ไม่เป็นไร (ตอบคำขอโทษ) | ถ้ามีคนขอโทษ ตอบว่า That's okay! หรือ Don't worry about it.
Of course. | /əv ˈkɔːrs/ | แน่นอน | ใช้ตอบรับคำขอ ถ้าใช้ตอบคำถามทั่วไปอาจฟังเหมือน “ก็ต้องใช่สิ ถามทำไม” จึงควรพูดด้วยน้ำเสียงนุ่ม ๆ
I'm not sure. | /aɪm ˈnɑːt ˈʃʊr/ | ไม่แน่ใจ | นุ่มนวลกว่า I don't know
I have a question. | /aɪ ˈhæv ə ˈkwestʃən/ | ฉันมีคำถาม | ในห้องเรียนหรือที่ประชุมพูดว่า Can I ask a question? ก็ได้ อย่าลืมคำนำหน้านาม a หน้า question
Can you write it down? | /kən ju ˈraɪt ɪt ˈdaʊn/ | ช่วยเขียนให้หน่อยได้ไหม | วิธีที่ดีที่สุดเมื่อฟังที่อยู่ ตัวเลข หรือชื่อไม่ทัน
Can I take a picture? | /kən aɪ ˈteɪk ə ˈpɪktʃər/ | ถ่ายรูปได้ไหม | ในพิพิธภัณฑ์หรือร้านค้า ถามก่อนเป็นมารยาทพื้นฐาน
Could you take a picture of us? | /kəd ju ˈteɪk ə ˈpɪktʃər əv əs/ | ช่วยถ่ายรูปให้พวกเราหน่อยได้ไหม | ถ่ายเสร็จแล้วพูดว่า Thank you so much!
After you. | /ˈæftər ˈjuː/ | เชิญก่อนเลย | ใช้หลีกทางให้คนอื่นที่ประตูหรือลิฟต์ ในประเทศที่พูดภาษาอังกฤษคนมักจับประตูรอคนข้างหลัง
Watch out! | /ˈwɑːtʃ ˈaʊt/ | ระวัง! | ตะโกนเตือนเมื่อมีอันตราย Look out! ก็ความหมายเดียวกัน
`,
"ถามทางและการเดินทาง": `
How do I get to the subway station? | /ˈhaʊ də aɪ ˈget tə ðə ˈsʌbweɪ ˈsteɪʃn/ | ไปสถานีรถไฟใต้ดินยังไง | อังกฤษเรียก underground หรือ tube ที่กรุงเทพฯ เปลี่ยนเป็น the BTS station หรือ the MRT station ได้เลย
Is it far from here? | /ɪz ɪt ˈfɑːr frəm ˈhɪr/ | ไกลจากที่นี่ไหม | r ใน far ม้วนลิ้นเล็กน้อย ไม่ใช่ ล
Is it within walking distance? | /ɪz ɪt wɪðɪn ˈwɔːkɪŋ ˈdɪstəns/ | เดินไปถึงไหม | ถามว่า Can I walk there? ก็ได้
Go straight. | /ˈgoʊ ˈstreɪt/ | ตรงไป | Go straight for two blocks. คนอเมริกันนับระยะทางเป็น block คือช่วงถนนระหว่างสี่แยก
Turn left at the corner. | /ˈtɜːrn ˈleft ət ðə ˈkɔːrnər/ | เลี้ยวซ้ายตรงหัวมุม | ถ้าเลี้ยวตรงไฟแดงพูดว่า at the light
It's on your right. | /ɪts ɑːn jʊr ˈraɪt/ | อยู่ทางขวามือ | r ใน right ห่อปากและม้วนลิ้น ไม่ใช่ ล ถ้าพูดเป็น light ความหมายจะเปลี่ยน
It's across the street. | /ɪts əkrɔːs ðə ˈstriːt/ | อยู่ฝั่งตรงข้ามถนน | across from… = ตรงข้ามกับ…
It's next to the bank. | /ɪts ˈnekst tə ðə ˈbæŋk/ | อยู่ข้างธนาคาร | next to ออกเสียง t แค่ครั้งเดียวแบบเบา ๆ
Which line goes downtown? | /ˈwɪtʃ ˈlaɪn ˈgoʊz ˌdaʊnˈtaʊn/ | สายไหนไปตัวเมือง | หน้า downtown ไม่ต้องใส่ to
Where do I transfer? | /ˈwer də aɪ trænsˈfɜːr/ | ต้องเปลี่ยนสายที่ไหน | อังกฤษใช้ change: Where do I change? ใช้ตอนเปลี่ยนจาก BTS ไป MRT ได้ด้วย
Does this bus go to the airport? | /dəz ˈðɪs ˈbʌs ˈgoʊ tə ði ˈerpɔːrt/ | รถเมล์คันนี้ไปสนามบินไหม | the หน้าเสียงสระออกเสียงว่า /ði/ และ go ไม่เติม -s เพราะมี does แล้ว
Which stop should I get off at? | /ˈwɪtʃ ˈstɑːp ʃəd aɪ ˈget ˈɔːf æt/ | ต้องลงป้ายไหน | get off = ลงจากรถเมล์หรือรถไฟ ถ้าลงจากแท็กซี่หรือรถยนต์ใช้ get out of
One ticket to Boston, please. | /ˈwʌn ˈtɪkɪt tə ˈbɔːstən ˈpliːz/ | ขอตั๋วไปบอสตันหนึ่งใบ | ใช้ to หน้าจุดหมาย ภาษาอังกฤษไม่มีลักษณนาม ใบ ใช้ one ticket ได้เลย
Round trip or one way? | /ˈraʊnd ˈtrɪp ər ˈwʌn ˈweɪ/ | ไปกลับหรือเที่ยวเดียว | แบบอังกฤษ: Return or single?
Can you take me to this address? | /kən ju ˈteɪk mi tə ˈðɪs ˈædres/ | ช่วยไปส่งที่อยู่นี้หน่อย | เปิดหน้าจอให้คนขับดูด้วยจะไม่ผิดพลาด ใช้กับแท็กซี่หรือรถจากแอปเรียกรถก็ได้
Could you pull over here? | /kəd ju ˈpʊl ˈoʊvər ˈhɪr/ | จอดตรงนี้ได้ไหม | ใช้ตอนอยากลงจากแท็กซี่หรือรถ Right here is fine. ก็ได้ ตรงกับ “จอดตรงนี้เลย”
How long does it take? | /ˈhaʊ ˈlɔːŋ dəz ɪt ˈteɪk/ | ใช้เวลานานเท่าไร | ตอบเช่น About 20 minutes.
Is this seat taken? | /ɪz ˈðɪs ˈsiːt ˈteɪkən/ | ที่นั่งนี้มีคนนั่งไหม | ถ้าว่าง เขาจะตอบว่า No, go ahead. ระวังว่าคำตอบ No ตรงนี้แปลว่า “ว่าง นั่งได้” และ seat ต้องออกเสียง อี ยาว
`,
"สั่งอาหารในร้าน": `
A table for two, please. | /ə ˈteɪbl fər ˈtuː ˈpliːz/ | ขอโต๊ะสำหรับสองคน | ร้านอาหารในอเมริกามักให้รอพนักงานพาไปนั่ง ไม่เดินเข้าไปเลือกโต๊ะเอง
Do you have a reservation? | /də ju ˈhæv ə ˌrezərˈveɪʃn/ | จองโต๊ะไว้หรือเปล่า | พนักงานเป็นคนถาม ตอบเช่น Yes, under Ploy. พนักงานร้านในไทยใช้ถามลูกค้าได้เช่นกัน
Can I see the menu? | /kən aɪ ˈsiː ðə ˈmenjuː/ | ขอดูเมนูหน่อย | menu เน้นพยางค์แรก /ˈmenjuː/ ไม่ใช่ เม-นู ที่เน้นพยางค์ท้ายแบบไทย
What do you recommend? | /ˈwʌt də ju ˌrekəˈmend/ | มีเมนูไหนแนะนำบ้าง | ถามว่า What's popular here? ก็ได้
I'll have the steak. | /aɪl ˈhæv ðə ˈsteɪk/ | ขอสเต๊ก | สูตรสั่งอาหารพื้นฐาน: I'll have + ชื่อเมนู ใช้คำนำหน้านาม the เพราะเป็นเมนูที่อยู่ในรายการของร้าน
Can I get a Coke? | /kən aɪ ˈget ə ˈkoʊk/ | ขอโค้กหนึ่งแก้ว | get a ออกเสียงต่อกันเป็นคำเดียว น้ำอัดลมโคล่ามักเรียกว่า Coke
Medium rare, please. | /ˈmiːdiəm ˈrer ˈpliːz/ | ขอระดับมีเดียมแรร์ | ตอบคำถาม How would you like your steak?
No onions, please. | /ˈnoʊ ˈʌnjənz ˈpliːz/ | ไม่ใส่หัวหอม | Can I get it without onions? ก็ความหมายเดียวกัน onions เป็นรูปพหูพจน์
I'm allergic to peanuts. | /aɪm əˈlɜːrdʒɪk tə ˈpiːnʌts/ | ฉันแพ้ถั่วลิสง | allergic เน้นพยางค์กลาง /əˈlɜːrdʒɪk/ คำนามคือ allergy
Is it spicy? | /ɪz ɪt ˈspaɪsi/ | เผ็ดไหม | เผ็ดแบบฝรั่งมักไม่เผ็ดเท่าแบบไทย ถ้าชอบเผ็ดบอกได้ว่า Extra spicy, please.
Could we get some water? | /kəd wi ˈget ˈsʌm ˈwɔːtər/ | ขอน้ำเปล่าหน่อยได้ไหม | ร้านอาหารในอเมริกามักให้น้ำเปล่าฟรี t ใน water ฟังคล้าย ด เบา ๆ
Everything was great. | /ˈevriθɪŋ wəz ˈgreɪt/ | อร่อยทุกอย่างเลย | ตอบเมื่อพนักงานถามว่า How is everything?
Can we get the check, please? | /kən wi ˈget ðə ˈtʃek ˈpliːz/ | ขอเช็กบิลด้วย | คนไทยมักพูดว่า check bill ซึ่งเจ้าของภาษาไม่ใช้ ประโยคนี้คือแบบที่ใช้จริง อังกฤษเรียก the bill
Can we split the bill? | /kən wi ˈsplɪt ðə ˈbɪl/ | ขอแยกจ่ายได้ไหม | พูดว่า separate checks ก็ได้ ส่วน “อเมริกันแชร์” เจ้าของภาษาไม่ใช้คำนี้
It's on me. | /ɪts ɑːn ˈmiː/ | มื้อนี้ฉันเลี้ยงเอง | My treat! ก็ความหมายเดียวกัน
Can I get this to go? | /kən aɪ ˈget ˈðɪs tə ˈgoʊ/ | ห่อกลับบ้านได้ไหม | ใช้แทน “ใส่ถุง” หรือ “กลับบ้าน” ถ้าจะห่ออาหารที่กินเหลือ: Can I get a box?
Is the tip included? | /ɪz ðə ˈtɪp ɪnˈkluːdɪd/ | รวมทิปแล้วหรือยัง | ร้านอาหารในอเมริกาปกติให้ทิปแยก 15–20% ต่างจากไทยที่ทิ้งเศษเหรียญไว้ก็พอ
Not spicy, please. | /ˈnɑːt ˈspaɪsi ˈpliːz/ | ไม่เผ็ด | ใช้สั่งที่ร้านอาหารไทยหรือร้านอาหารเอเชียในต่างประเทศ ถ้าเอาเผ็ดนิดหน่อย: A little spicy, please.
Can I get the check? | /kən aɪ ˈget ðə ˈtʃek/ | เช็กบิลได้ไหม | แบบพูดในนามตัวเอง ใช้ได้ทั้งร้านอาหารและบาร์ ใช้แทน check bill ที่คนไทยคุ้นเคย
`,
"คาเฟ่และร้านสะดวกซื้อ": `
Can I get an iced Americano? | /kən aɪ ˈget ən ˈaɪst əˌmerɪˈkɑːnoʊ/ | ขออเมริกาโน่เย็นแก้วหนึ่ง | -d ใน iced ออกเสียงเป็น /t/ และต้องได้ยินชัด ไม่งั้นจะกลายเป็น ice การสั่งเครื่องดื่มนิยมใช้ Can I get…? มากที่สุด
What size would you like? | /ˈwʌt ˈsaɪz wəd ju ˈlaɪk/ | รับขนาดไหนดี | พนักงานเป็นคนถาม would you ออกเสียงต่อกัน
Small, please. | /ˈsmɔːl ˈpliːz/ | ขอแก้วเล็ก | ที่ Starbucks เรียกขนาดว่า tall grande venti
For here or to go? | /fər ˈhɪr ər tə ˈgoʊ/ | ทานที่นี่หรือกลับบ้าน | แบบอังกฤษ: Eat in or take away?
Can I get oat milk instead? | /kən aɪ ˈget ˈoʊt ˈmɪlk ɪnˈsted/ | เปลี่ยนเป็นนมโอ๊ตได้ไหม | instead = แทน อาจมีค่าใช้จ่ายเพิ่ม
Less ice, please. | /ˈles ˈaɪs ˈpliːz/ | น้ำแข็งน้อย | ถ้าไม่เอาน้ำแข็ง: No ice, please.
Decaf, please. | /ˈdiːkæf ˈpliːz/ | ขอแบบไม่มีคาเฟอีน | ย่อมาจาก decaffeinated
Can I get a name for the order? | /kən aɪ ˈget ə ˈneɪm fər ði ˈɔːrdər/ | ขอชื่อสำหรับออร์เดอร์ด้วย | พนักงานถามเพื่อเขียนชื่อบนแก้ว ชื่อเล่นสั้น ๆ อย่าง Mint หรือ Bank สะกดง่ายและฟังชัด
Do you need a bag? | /də ju ˈniːd ə ˈbæg/ | รับถุงไหม | ถ้าไม่ต้องการ: No, I'm good. ตรงกับคำถามของพนักงานร้านสะดวกซื้อในไทย
Can I get a receipt? | /kən aɪ ˈget ə rɪˈsiːt/ | ขอใบเสร็จด้วย | p ใน receipt ไม่ออกเสียง: /rɪˈsiːt/
Where can I find batteries? | /ˈwer kən aɪ ˈfaɪnd ˈbætəriz/ | ถ่านไฟฉายอยู่ตรงไหน | ใช้ถามหาของได้ทุกอย่าง batteries เป็นรูปพหูพจน์
Do you sell phone chargers? | /də ju ˈsel ˈfoʊn ˈtʃɑːrdʒərz/ | มีที่ชาร์จโทรศัพท์ขายไหม | Do you have…? ก็ความหมายเดียวกัน
Can you heat this up? | /kən ju ˈhiːt ˈðɪs ˈʌp/ | ช่วยอุ่นอันนี้ให้หน่อยได้ไหม | ตรงกับ “อุ่นไหม” ในร้านสะดวกซื้อไทย heat this up ออกเสียงต่อกันเป็นคำเดียว
That's it. | /ˈðæts ˈɪt/ | แค่นี้ครบแล้ว | ตอบเมื่อพนักงานถาม Anything else?
Here you go. | /ˈhɪr ju ˈgoʊ/ | นี่ / เชิญเลย | ใช้ตอนยื่นเงินหรือสิ่งของให้
Keep the change. | /ˈkiːp ðə ˈtʃeɪndʒ/ | ไม่ต้องทอน | ให้เงินทอนเป็นทิป มักใช้กับแท็กซี่หรือคนส่งของ
`,
"ช้อปปิ้งและจ่ายเงิน": `
I'm just looking, thanks. | /aɪm ˈdʒʌst ˈlʊkɪŋ ˈθæŋks/ | ดูเฉย ๆ ขอบคุณ | ตอบเมื่อพนักงานถามว่า Can I help you find anything?
Do you have this in a medium? | /də ju ˈhæv ˈðɪs ɪn ə ˈmiːdiəm/ | อันนี้มีไซซ์ M ไหม | ไซซ์ที่ใช้คือ small / medium / large
Do you have it in black? | /də ju ˈhæv ɪt ɪn ˈblæk/ | มีสีดำไหม | ใช้ in หน้าสี
Can I try this on? | /kən aɪ ˈtraɪ ˈðɪs ˈɑːn/ | ขอลองได้ไหม | try on = ลองสวมเสื้อผ้าหรือรองเท้า
Where's the fitting room? | /ˈwerz ðə ˈfɪtɪŋ ˈruːm/ | ห้องลองเสื้ออยู่ไหน | อังกฤษเรียก changing room
It's too big. | /ɪts ˈtuː ˈbɪg/ | ใหญ่เกินไป | ถ้าเล็กไป: It's too small.
It's a bit tight. | /ɪts ə ˈbɪt ˈtaɪt/ | คับไปหน่อย | ถ้าหลวม: It's a bit loose.
Is this on sale? | /ɪz ˈðɪs ɑːn ˈseɪl/ | อันนี้ลดราคาไหม | on sale = ลดราคา ส่วน for sale = มีขาย สองคำนี้สับสนกันง่าย
Can you give me a discount? | /kən ju ˈgɪv mi ə ˈdɪskaʊnt/ | ลดให้หน่อยได้ไหม | ร้านทั่วไปในอเมริกาแทบไม่ต่อราคา ต่อได้ที่ตลาดนัดหรือของมือสอง ต่างจากตลาดในไทย
I'll take it. | /aɪl ˈteɪk ɪt/ | เอาอันนี้ | ใช้เมื่อตัดสินใจซื้อ ต้องมี it ด้วย ถ้าหลายชิ้นใช้ I'll take them.
Cash or card? | /ˈkæʃ ər ˈkɑːrd/ | เงินสดหรือบัตร | คำถามที่ได้ยินทุกครั้งที่จุดชำระเงิน
Do you take Apple Pay? | /də ju ˈteɪk ˈæpl ˈpeɪ/ | รับแอปเปิลเพย์ไหม | take = รับชำระด้วยวิธีนั้น
Can I get a refund? | /kən aɪ ˈget ə ˈriːfʌnd/ | ขอคืนเงินได้ไหม | อย่าลืมเก็บใบเสร็จไว้
I'd like to exchange this. | /aɪd ˈlaɪk tu ɪksˈtʃeɪndʒ ˈðɪs/ | ขอเปลี่ยนสินค้าชิ้นนี้ | บอกเหตุผลด้วย: It's the wrong size.
Can you gift wrap it? | /kən ju ˈgɪft ˈræp ɪt/ | ช่วยห่อของขวัญให้หน่อยได้ไหม | w ใน wrap ไม่ออกเสียง
Does that include tax? | /dəz ˈðæt ɪnˈkluːd ˈtæks/ | รวมภาษีแล้วหรือยัง | ป้ายราคาในอเมริกามักไม่รวมภาษี จ่ายจริงจึงแพงกว่าที่เห็น ต่างจากไทยที่ราคามักรวม VAT แล้ว
`,
"ตัวเลข เวลา และวันที่": `
What time is it? | /ˈwʌt ˈtaɪm ɪz ɪt/ | ตอนนี้กี่โมง | ถามคนแปลกหน้า: Excuse me, do you have the time?
It's three thirty. | /ɪts ˈθriː ˈθɜːrti/ | สามโมงครึ่ง | แบบอังกฤษพูดว่า half past three ภาษาอังกฤษนับเวลาเป็น 1 ถึง 12 ไม่มี โมง ทุ่ม ตี แบบไทย
It's a quarter to five. | /ɪts ə ˈkwɔːrtər tə ˈfaɪv/ | อีก 15 นาทีจะห้าโมง | quarter = 15 นาที พูดว่า four forty-five ก็ได้
At noon | /ət ˈnuːn/ | ตอนเที่ยงวัน | เที่ยงคืนคือ midnight ชัดกว่าพูด 12 a.m. หรือ 12 p.m.
What's the date today? | /ˈwʌts ðə ˈdeɪt təˈdeɪ/ | วันนี้วันที่เท่าไร | ถามวันในสัปดาห์: What day is it today?
It's May 3rd. | /ɪts ˈmeɪ ˈθɜːrd/ | วันที่ 3 พฤษภาคม | อ่านวันที่เป็นเลขลำดับที่: first second third อเมริกาเขียนเดือนก่อนวัน 5/3 จึงหมายถึง 3 พฤษภาคม
My birthday is in October. | /maɪ ˈbɜːrθdeɪ ɪz ɪn ɑːkˈtoʊbər/ | วันเกิดฉันอยู่เดือนตุลาคม | หน้าเดือนใช้ in หน้าวันที่ใช้ on: on October 5th
On Monday | /ɑːn ˈmʌndeɪ/ | วันจันทร์ (บอกเวลา) | หน้าวันใช้ on ถ้าทุกสัปดาห์ใช้รูปพหูพจน์ on Mondays
Next weekend | /ˈnekst ˈwiːkend/ | สุดสัปดาห์หน้า | หน้า next last this ไม่ต้องมีคำบุพบท
The day after tomorrow | /ðə ˈdeɪ æftər təˈmɑːroʊ/ | วันมะรืน | เมื่อวานซืนคือ the day before yesterday
Thirteen or thirty? | /ˌθɜːrˈtiːn ər ˈθɜːrti/ | สิบสามหรือสามสิบ | 13 เน้นท้าย (-teen) 30 เน้นหน้า ฟังราคาแล้วถามให้แน่ใจทุกครั้ง
Fifteen dollars | /ˌfɪfˈtiːn ˈdɑːlərz/ | 15 ดอลลาร์ | $15.50 อ่านว่า fifteen fifty ส่วนเงินไทยพูดว่า fifteen baht โดย baht ไม่เติม -s
Two hundred and fifty | /ˈtuː ˈhʌndrəd ənd ˈfɪfti/ | สองร้อยห้าสิบ (250) | ในอเมริกามักตัด and: two hundred fifty
Ten thousand | /ˈten ˈθaʊznd/ | หนึ่งหมื่น (10,000) | ภาษาอังกฤษไม่มีคำว่า หมื่น และ แสน ใช้หลักพันแทน: 100,000 = one hundred thousand
One million | /ˈwʌn ˈmɪljən/ | หนึ่งล้าน (1,000,000) | สิบล้าน = ten million ร้อยล้าน = one hundred million
Twice a week | /ˈtwaɪs ə ˈwiːk/ | สัปดาห์ละสองครั้ง | once (ครั้งเดียว) twice (สองครั้ง) three times (สามครั้ง)
In ten minutes | /ɪn ˈten ˈmɪnɪts/ | อีก 10 นาที | in หน้าเวลาในอนาคตแปลว่า อีก… ไม่ใช่ “ภายใน 10 นาที”
`,
"คุยเล่น": `
How was your weekend? | /ˈhaʊ wəz jʊr ˈwiːkend/ | สุดสัปดาห์เป็นไงบ้าง | คำถามประจำวันจันทร์ ตอบสั้น ๆ หนึ่งสองประโยคแล้วถามกลับ ใช้ was เพราะเป็นเรื่องที่ผ่านไปแล้ว
It was pretty relaxing. | /ɪt wəz ˈprɪti rɪˈlæksɪŋ/ | ค่อนข้างสบาย ๆ | pretty ตรงนี้แปลว่า ค่อนข้าง ไม่ใช่ สวย
Any plans for the weekend? | /ˈeni ˈplænz fər ðə ˈwiːkend/ | สุดสัปดาห์มีแผนอะไรไหม | คำถามประจำวันศุกร์ ถ้าไม่มีแผน: Not really, just relaxing.
Nice weather today, huh? | /ˈnaɪs ˈweðər təˈdeɪ ˈhʌ/ | วันนี้อากาศดีนะ | อากาศเป็นหัวข้อที่ปลอดภัยที่สุด ส่วนน้ำหนัก อายุ และเงินเดือนไม่ควรใช้เปิดบทสนทนา
It's freezing today. | /ɪts ˈfriːzɪŋ təˈdeɪ/ | วันนี้หนาวมาก | ถ้าร้อนพูดว่า It's so hot today! หรือ It's boiling! ซึ่งเข้ากับอากาศเมืองไทยมากกว่า
How long have you lived here? | /ˈhaʊ ˈlɔːŋ həv ju ˈlɪvd ˈhɪr/ | อยู่ที่นี่มานานเท่าไรแล้ว | ตอบเช่น About three years. ภาษาไทยใช้ “มา…แล้ว” ภาษาอังกฤษใช้ have + กริยาช่อง 3
Have you been to Thailand? | /həv ju bɪn tə ˈtaɪlænd/ | เคยไปเมืองไทยไหม | “เคย…ไหม” ใช้ Have you been to…? ตอบว่า Yes, I have. หรือ No, I haven't.
What do you do for fun? | /ˈwʌt də ju ˈduː fər ˈfʌn/ | ปกติชอบทำอะไรตอนว่าง | เป็นธรรมชาติกว่า What's your hobby? มาก
Have you seen any good shows lately? | /həv ju ˈsiːn ˈeni ˈgʊd ˈʃoʊz ˈleɪtli/ | ช่วงนี้ดูซีรีส์อะไรสนุก ๆ บ้างไหม | show = รายการทีวีหรือซีรีส์ เช่นละครไทยหรือซีรีส์ในแอปสตรีมมิง
That sounds fun. | /ˈðæt ˈsaʊndz ˈfʌn/ | ฟังดูสนุกนะ | ใช้ตอบเรื่องที่อีกฝ่ายเล่า That sounds great! ก็ได้
Same here. | /ˈseɪm ˈhɪr/ | ฉันก็เหมือนกัน | ใช้แทน same same ที่คนไทยคุ้นเคย แบบสั้น ๆ พูดว่า Same!
Me neither. | /ˈmiː ˈniːðər/ | ฉันก็ไม่เหมือนกัน | ใช้เห็นด้วยกับประโยคปฏิเสธ: I don't like it. → Me neither. (ไม่ใช่ Me too)
I know, right? | /aɪ ˈnoʊ ˈraɪt/ | นั่นสิ / ใช่เลย | ใช้เห็นด้วยแบบเต็มที่ เป็นภาษาพูดสบาย ๆ
Oh, really? | /ˈoʊ ˈriːəli/ | อ๋อ จริงเหรอ | แสดงว่าสนใจเรื่องที่ฟังอยู่ ขึ้นเสียงท้าย
By the way | /baɪ ðə ˈweɪ/ | ว่าแต่ / อ้อ แล้วก็ | ใช้เปลี่ยนเรื่อง ในแชตเขียนว่า BTW
How's work? | /ˈhaʊz ˈwɜːrk/ | งานเป็นไงบ้าง | ใช้ทักคนรู้จักแทน “กินข้าวหรือยัง” ซึ่งถ้าแปลเป็น Have you eaten? อีกฝ่ายจะคิดว่าชวนไปกินข้าวจริง ๆ ตอบเช่น Busy, but good!
It was nice talking to you. | /ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/ | ยินดีที่ได้คุยด้วย | ใช้จบบทสนทนาอย่างเป็นธรรมชาติ
`,
"ความรู้สึกและปฏิกิริยา": `
I'm so happy for you! | /aɪm ˈsoʊ ˈhæpi fər ju/ | ดีใจด้วยจริง ๆ | ใช้เมื่ออีกฝ่ายมีเรื่องดี ๆ
Congratulations! | /kənˌgrætʃəˈleɪʃnz/ | ยินดีด้วย! | ต้องมี -s ท้ายคำเสมอ พูดสั้น ๆ ว่า Congrats!
That's awesome! | /ˈðæts ˈɔːsəm/ | สุดยอด! / เจ๋งมาก! | คนอเมริกันใช้บ่อยมาก
No way! | /ˈnoʊ ˈweɪ/ | ไม่จริงน่า! / ไม่มีทาง! | ใช้ตอนตกใจ และใช้ปฏิเสธได้ด้วย: No way, I'm not doing that.
Seriously? | /ˈsɪriəsli/ | จริงดิ / เอาจริงเหรอ | น้ำเสียงบอกได้ว่าตกใจหรือรำคาญ
I'm so tired. | /aɪm ˈsoʊ ˈtaɪərd/ | เหนื่อยมาก | ถ้าหมดแรงจริง ๆ: I'm exhausted.
I'm stressed out. | /aɪm ˈstrest ˈaʊt/ | เครียดมาก | เป็นธรรมชาติกว่า I have stress. และไม่ใช้ serious ในความหมายว่า เครียด
I'm bored. | /aɪm ˈbɔːrd/ | เบื่อ | ระวัง I'm boring. แปลว่า “ฉันเป็นคนน่าเบื่อ” ความรู้สึกของผู้พูดใช้ -ed
I'm excited. | /aɪm ɪkˈsaɪtɪd/ | ตื่นเต้น (ดีใจ) | ใช้เมื่อมีเรื่องที่รอคอย -ed คือความรู้สึกของผู้พูด
I'm nervous. | /aɪm ˈnɜːrvəs/ | ประหม่า / ตื่นเต้น (กังวล) | คำว่า ตื่นเต้น ในภาษาไทยมีสองความหมาย ถ้ากังวลก่อนสัมภาษณ์งานหรือพรีเซนต์ใช้ nervous ไม่ใช่ excited
That's too bad. | /ˈðæts ˈtuː ˈbæd/ | น่าเสียดายจัง | ใช้กับเรื่องไม่ร้ายแรง ถ้าเรื่องหนักใช้ I'm sorry to hear that.
I'm sorry to hear that. | /aɪm ˈsɑːri tə ˈhɪr ˈðæt/ | เสียใจด้วยนะ | ไม่ใช่การขอโทษ แต่เป็นการปลอบใจ sorry ตรงนี้แปลว่า เสียใจด้วย
What a relief! | /ˈwʌt ə rɪˈliːf/ | โล่งอกไปที | พูดคู่กับ Phew! จะเป็นธรรมชาติขึ้น
Oh my gosh! | /ˈoʊ maɪ ˈgɑːʃ/ | ตายแล้ว! / โอ้โห! | เป็นรูปสุภาพของ Oh my God ในแชตเขียนว่า OMG
I'm upset. | /aɪm ʌpˈset/ | ไม่พอใจ / เสียใจ | ความรู้สึกที่อยู่ระหว่างโกรธกับเสียใจ
That's so annoying. | /ˈðæts ˈsoʊ əˈnɔɪɪŋ/ | น่ารำคาญจริง ๆ | ถ้าพูดกับคนว่า You're annoying. จะฟังแรงพอสมควร
I can't wait! | /aɪ ˈkænt ˈweɪt/ | รอไม่ไหวแล้ว! | ใช้เมื่อตั้งตารออะไรบางอย่างอย่างมาก
It's not a big deal. | /ɪts ˈnɑːt ə ˈbɪg ˈdiːl/ | ไม่ใช่เรื่องใหญ่ | ใช้ให้อีกฝ่ายสบายใจเมื่อเขารู้สึกผิด คล้าย “ไม่เป็นไร” ของไทย
`,
"คำชมและความประทับใจ": `
You look great! | /ju ˈlʊk ˈgreɪt/ | ดูดีมากเลย! | ชมรูปลักษณ์ใช้ You look… แต่ไม่ควรทักเรื่องน้ำหนักอย่าง อ้วนขึ้น หรือ ผอมลง เพราะในภาษาอังกฤษฟังเสียมารยาท
I love your shoes. | /aɪ ˈlʌv jʊr ˈʃuːz/ | รองเท้าสวยมาก | love = ชอบมาก ชมคนที่เพิ่งเจอแบบสบาย ๆ ได้ shoes เป็นรูปพหูพจน์เพราะมีสองข้าง
That color looks good on you. | /ˈðæt ˈkʌlər ˈlʊks ˈgʊd ɑːn ju/ | สีนี้เข้ากับคุณมาก | look good on + คน = เหมาะกับคนนั้น
You have a great smile. | /ju ˈhæv ə ˈgreɪt ˈsmaɪl/ | ยิ้มสวยมาก | คำชมที่อบอุ่น ใช้กับคนที่สนิทกันแล้ว
You're so funny. | /jʊr ˈsoʊ ˈfʌni/ | ตลกมาก | funny = ตลก ส่วน fun = อยู่ด้วยแล้วสนุก
Great job! | /ˈgreɪt ˈdʒɑːb/ | เก่งมาก! / ทำได้ดีมาก! | ใช้ได้ทั้งที่ทำงานและที่โรงเรียน Nice work! ก็ได้
I'm proud of you. | /aɪm ˈpraʊd əv ju/ | ภูมิใจในตัวคุณ | ใช้กับครอบครัวหรือเพื่อน หัวหน้าก็พูดกับลูกน้องได้
You did it! | /ju ˈdɪd ɪt/ | ทำได้แล้ว! | พูดกับคนที่ทำสำเร็จ
Your Thai is really good! | /jʊr ˈtaɪ ɪz ˈriːəli ˈgʊd/ | พูดภาษาไทยเก่งมาก! | ชาวต่างชาติที่เรียนภาษาไทยจะดีใจมากถ้าได้ยินประโยคนี้
You have good taste. | /ju ˈhæv ˈgʊd ˈteɪst/ | รสนิยมดีนะ | ชมการเลือกเสื้อผ้า เพลง หรือการแต่งบ้าน คำว่า “เทสต์ดี” ที่คนไทยพูดกันก็มาจาก taste คำนี้เอง
I really enjoyed spending time with you. | /aɪ ˈriːəli ɪnˈdʒɔɪd ˈspendɪŋ ˈtaɪm wɪð ju/ | ได้ใช้เวลาด้วยกันแล้วสนุกมาก | ใช้ตอนจบการเดตหรืองานสังสรรค์
Do you want to grab coffee sometime? | /də ju ˈwɑːnt tə ˈgræb ˈkɔːfi ˈsʌmtaɪm/ | ไว้ไปกินกาแฟด้วยกันไหม | grab = ไปกินหรือดื่มแบบสบาย ๆ want to พูดเร็วจะฟังเป็น wanna
I miss you. | /aɪ ˈmɪs ju/ | คิดถึง | ใช้กับคนที่อยู่ห่างกัน ทั้งครอบครัวและเพื่อน
You mean a lot to me. | /ju ˈmiːn ə ˈlɑːt tə mi/ | คุณสำคัญกับฉันมาก | ใช้บอกความรู้สึกจริงใจกับเพื่อนหรือคนรัก
You're a lifesaver! | /jʊr ə ˈlaɪfseɪvər/ | ช่วยชีวิตไว้เลย! | ใช้ขอบคุณแบบเกินจริงแม้เป็นเรื่องเล็ก ๆ
You made my day! | /ju ˈmeɪd maɪ ˈdeɪ/ | ทำให้วันนี้ของฉันดีขึ้นเลย! | ใช้เมื่อได้รับคำพูดดี ๆ หรือของขวัญ
That's very kind of you. | /ˈðæts ˈveri ˈkaɪnd əv ju/ | ใจดีมากเลย | ตอบรับความช่วยเหลือหรือคำชมอย่างสุภาพ
`,
"ที่ทำงานและอีเมล": `
I hope this email finds you well. | /aɪ ˈhoʊp ˈðɪs ˈiːmeɪl ˈfaɪndz ju ˈwel/ | หวังว่าคุณสบายดี | ประโยคเปิดอีเมลแบบทางการ วางต่อจาก Dear… แบบสบายขึ้น: I hope you're doing well.
I'm writing to ask about the schedule. | /aɪm ˈraɪtɪŋ tu ˈæsk əbaʊt ðə ˈskedʒuːl/ | ขอสอบถามเรื่องกำหนดการ | บอกจุดประสงค์ในประโยคแรกเลย: I'm writing to + กริยาช่อง 1
I've attached the report. | /aɪv əˈtætʃt ðə rɪˈpɔːrt/ | แนบรายงานมาแล้ว | Please find attached… เป็นทางการและแข็งกว่า
Just a quick reminder about tomorrow's meeting. | /ˈdʒʌst ə ˈkwɪk rɪˈmaɪndər əbaʊt təˈmɑːroʊz ˈmiːtɪŋ/ | ขอเตือนเรื่องประชุมพรุ่งนี้อีกครั้ง | วิธีทวงหรือเตือนแบบนุ่มนวล
Let me know if you have any questions. | /ˈlet mi ˈnoʊ ɪf ju ˈhæv ˈeni ˈkwestʃənz/ | หากมีคำถามแจ้งได้เลย | ประโยคปิดอีเมลที่ใช้บ่อยที่สุด
Could you send me the file by Friday? | /kəd ju ˈsend mi ðə ˈfaɪl baɪ ˈfraɪdeɪ/ | ช่วยส่งไฟล์ให้ภายในวันศุกร์ได้ไหม | by = ภายใน (กำหนดส่ง) ส่วน until = จนถึง (ต่อเนื่อง)
Sorry for the late reply. | /ˈsɑːri fər ðə ˈleɪt rɪˈplaɪ/ | ขออภัยที่ตอบช้า | แบบไม่ต้องขอโทษมาก: Thanks for your patience.
Thanks for getting back to me. | /ˈθæŋks fər ˈgetɪŋ ˈbæk tə mi/ | ขอบคุณที่ตอบกลับ | get back to = ติดต่อกลับ
Best regards, | /ˈbest rɪˈgɑːrdz/ | ขอแสดงความนับถือ (คำลงท้ายอีเมล) | คำลงท้ายที่ใช้ได้ทั่วไป สั้นและเป็นกันเองกว่าแบบไทย คนที่สนิทกันใช้ Best หรือ Thanks แล้วตามด้วยชื่อ
Let's schedule a meeting. | /ˈlets ˈskedʒuːl ə ˈmiːtɪŋ/ | นัดประชุมกันเถอะ | schedule แบบอเมริกันออกเสียง /ˈskedʒuːl/ แบบอังกฤษขึ้นต้นด้วยเสียง sh
I'm running late. | /aɪm ˈrʌnɪŋ ˈleɪt/ | ฉันน่าจะไปสายหน่อย | ใช้แจ้งล่วงหน้าระหว่างเดินทาง: I'll be there in 10.
Can we push the meeting to 3? | /kən wi ˈpʊʃ ðə ˈmiːtɪŋ tə ˈθriː/ | เลื่อนประชุมไปบ่ายสามได้ไหม | ถ้าเลื่อนให้เร็วขึ้นใช้ move up: Can we move it up to 1?
I'll get back to you. | /aɪl ˈget ˈbæk tə ju/ | เดี๋ยวจะติดต่อกลับไป | ใช้เมื่อยังตอบทันทีไม่ได้
Can you walk me through it? | /kən ju ˈwɔːk mi θruː ɪt/ | ช่วยอธิบายทีละขั้นได้ไหม | walk through = พาทำทีละขั้นตอน
Let's touch base next week. | /ˈlets ˈtʌtʃ ˈbeɪs ˈnekst ˈwiːk/ | สัปดาห์หน้ามาอัปเดตกันสั้น ๆ | หมายถึงคุยสั้น ๆ เพื่อแจ้งความคืบหน้า
What's the deadline? | /ˈwʌts ðə ˈdedlaɪn/ | กำหนดส่งเมื่อไร | When is this due? ก็ความหมายเดียวกัน
I'm working from home today. | /aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/ | วันนี้ฉันทำงานที่บ้าน | ย่อว่า WFH
I'm off tomorrow. | /aɪm ˈɔːf təˈmɑːroʊ/ | พรุ่งนี้ฉันหยุด | ถ้าลางาน: I'm taking a day off tomorrow.
Thanks for all your hard work. | /ˈθæŋks fər ˈɔːl jʊr ˈhɑːrd ˈwɜːrk/ | ขอบคุณที่ทุ่มเทมาตลอด | ใช้ขอบคุณทีมหรือเพื่อนร่วมงานหลังจบงานใหญ่หรือโปรเจกต์
`,
"โทรศัพท์และคำย่อในแชต": `
Hello, this is Ploy. | /həˈloʊ ˈðɪs ɪz ˈplɔɪ/ | ฮัลโหล นี่พลอยเอง | ทางโทรศัพท์ใช้ This is Ploy. แทน I'm Ploy.
Can I speak to Mr. Somchai? | /kən aɪ ˈspiːk tə ˈmɪstər ˈsɑːmtʃaɪ/ | ขอสายคุณสมชายหน่อย | สุภาพขึ้นอีก: May I speak to…? ในบริษัทไทยพูด Mr. Somchai ได้เพราะคนไทยเรียกกันด้วยชื่อต้น แต่กับชาวต่างชาติใช้ Mr. หรือ Ms. + นามสกุล
Who's calling, please? | /ˈhuːz ˈkɔːlɪŋ ˈpliːz/ | ขอทราบว่าใครโทรมา | ฝ่ายรับสายเป็นคนถาม ใช้รับสายลูกค้าได้
Hold on a second. | /ˈhoʊld ˈɑːn ə ˈsekənd/ | ถือสายรอสักครู่ | ใช้ขอให้รอแป๊บหนึ่งระหว่างคุยโทรศัพท์หรือคุยกันอยู่
Sorry, you're breaking up. | /ˈsɑːri jʊr ˈbreɪkɪŋ ˈʌp/ | ขอโทษ เสียงขาด ๆ หาย ๆ | break up = สัญญาณขาดหาย และยังแปลว่า เลิกกัน (คนรัก) ได้ด้วย
Can I call you back? | /kən aɪ ˈkɔːl ju ˈbæk/ | ขอโทรกลับได้ไหม | ตอนยุ่ง: I'm in a meeting. Can I call you back?
I'll text you. | /aɪl ˈtekst ju/ | เดี๋ยวส่งข้อความไป | คนอเมริกันเรียกการส่งข้อความว่า text ส่วน นะ หรือ จ้า ท้ายข้อความไม่มีคำแปลในภาษาอังกฤษ ใช้ :) แทนได้
I'm on my way. | /aɪm ɑːn maɪ ˈweɪ/ | กำลังไป | ในแชตเขียนว่า OMW
LOL | /ˌel oʊ ˈel/ | ขำ / 555 (laughing out loud) | ใช้เหมือน 555 ในแชตไทย ไม่ได้หัวเราะดังจริง ๆ
BRB | /ˌbiː ɑːr ˈbiː/ | เดี๋ยวมา (be right back) | ใช้ในแชตหรือเกมเมื่อจะไม่อยู่หน้าจอแป๊บหนึ่ง
BTW | /ˌbiː tiː ˈdʌbəljuː/ | อ้อ ว่าแต่ (by the way) | ใช้เปลี่ยนเรื่อง
TBH | /ˌtiː biː ˈeɪtʃ/ | พูดตรง ๆ (to be honest) | วางไว้ต้นหรือท้ายประโยคก็ได้
IDK | /ˌaɪ diː ˈkeɪ/ | ไม่รู้ (I don't know) | มักพิมพ์ตัวเล็กว่า idk
OMG | /ˌoʊ em ˈdʒiː/ | โอ้มายก็อด (oh my God) | พูดออกเสียงเป็นตัวอักษร O-M-G ก็ได้
ASAP | /ˌeɪ es eɪ ˈpiː/ /ˈeɪsæp/ | เร็วที่สุด (as soon as possible) | ใช้ในที่ทำงานได้ แต่กับหัวหน้าการระบุวันที่ชัด ๆ จะสุภาพกว่า
TTYL | /ˌtiː tiː waɪ ˈel/ | ไว้คุยกันใหม่ (talk to you later) | ใช้ตอนจบการแชต
NVM | /ˌen viː ˈem/ | ช่างมันเถอะ (never mind) | ใช้ยกเลิกคำถามที่เพิ่งถามไป
FYI | /ˌef waɪ ˈaɪ/ | แจ้งให้ทราบ (for your information) | ใช้บ่อยในอีเมลและแชตที่ทำงาน
`,
"ท่องเที่ยว (สนามบินและโรงแรม)": `
Here's my passport. | /ˈhɪrz maɪ ˈpæspɔːrt/ | นี่หนังสือเดินทางของฉัน | ใช้ตอนยื่นหนังสือเดินทางตอนเช็กอินหรือตรวจคนเข้าเมือง
I'm here for sightseeing. | /aɪm ˈhɪr fər ˈsaɪtsiːɪŋ/ | มาท่องเที่ยวชมเมือง | ตอบเจ้าหน้าที่ตรวจคนเข้าเมืองที่ถามว่า What's the purpose of your visit?
I'm staying for a week. | /aɪm ˈsteɪɪŋ fər ə ˈwiːk/ | จะอยู่หนึ่งสัปดาห์ | ตอบคำถาม How long are you staying? ถ้าเป็นพนักงานโรงแรมถามแขกได้ว่า How many nights?
I'm staying at the Hilton. | /aɪm ˈsteɪɪŋ ət ðə ˈhɪltən/ | พักที่โรงแรมฮิลตัน | ตอบคำถาม Where are you staying? หน้าชื่อโรงแรมมักมีคำนำหน้านาม the
Window or aisle? | /ˈwɪndoʊ ər ˈaɪl/ | ริมหน้าต่างหรือริมทางเดิน | s ใน aisle ไม่ออกเสียง: /ˈaɪl/
I'd like an aisle seat, please. | /aɪd ˈlaɪk ən ˈaɪl ˈsiːt ˈpliːz/ | ขอที่นั่งริมทางเดิน | ริมหน้าต่างคือ a window seat
Where is the baggage claim? | /ˈwer ɪz ðə ˈbægɪdʒ ˈkleɪm/ | จุดรับกระเป๋าอยู่ที่ไหน | อังกฤษเรียก baggage reclaim
My luggage is missing. | /maɪ ˈlʌgɪdʒ ɪz ˈmɪsɪŋ/ | กระเป๋าเดินทางของฉันหาย | luggage เป็นคำนามนับไม่ได้ จึงไม่เติม -s ถ้านับใช้ a piece of luggage
I have a reservation under Suda. | /aɪ ˈhæv ə ˌrezərˈveɪʃn ʌndər ˈsuːdə/ | จองไว้ในชื่อสุดา | under + ชื่อผู้จอง ต่างประเทศมักค้นด้วยนามสกุล นามสกุลไทยยาว จึงควรเตรียมสะกดให้พนักงานฟัง
What time is check-out? | /ˈwʌt ˈtaɪm ɪz ˈtʃekaʊt/ | เช็กเอาต์กี่โมง | ถ้าอยากออกช้า: Can I get a late check-out?
Can I check in early? | /kən aɪ ˈtʃek ˈɪn ˈɜːrli/ | ขอเช็กอินก่อนเวลาได้ไหม | check in ออกเสียงต่อกันเป็นคำเดียว
Is breakfast included? | /ɪz ˈbrekfəst ɪnˈkluːdɪd/ | รวมอาหารเช้าไหม | breakfast ออกเสียง /ˈbrekfəst/ ไม่ใช่ เบรก-ฟาสต์
The air conditioner isn't working. | /ði ˈer kənˈdɪʃənər ˈɪznt ˈwɜːrkɪŋ/ | แอร์ไม่ทำงาน | “แอร์” ในภาษาอังกฤษไม่ใช้ air คำเดียว ใช้ air conditioner หรือ AC
Could I get some extra towels? | /kəd aɪ ˈget ˈsʌm ˈekstrə ˈtaʊəlz/ | ขอผ้าเช็ดตัวเพิ่มได้ไหม | could I ออกเสียงต่อกัน และ towels เป็นรูปพหูพจน์
Can you hold my bags until 3? | /kən ju ˈhoʊld maɪ ˈbægz əntɪl ˈθriː/ | ฝากกระเป๋าไว้ถึงบ่ายสามได้ไหม | ใช้ขอฝากกระเป๋าหลังเช็กเอาต์ hold = เก็บไว้ให้ ในอเมริกาให้ทิปพนักงานยกกระเป๋าเป็นเรื่องปกติ
My flight was delayed. | /maɪ ˈflaɪt wəz dɪˈleɪd/ | เที่ยวบินของฉันล่าช้า (ดีเลย์) | ถ้ายกเลิกใช้ canceled
Where's gate 12? | /ˈwerz ˈgeɪt ˈtwelv/ | เกต 12 อยู่ที่ไหน | ภาษาอังกฤษวางเลขไว้หลังคำนาม และไม่ใช้คำนำหน้านาม
Do I need to take my laptop out? | /də aɪ ˈniːd tə ˈteɪk maɪ ˈlæptɑːp ˈaʊt/ | ต้องเอาโน้ตบุ๊กออกมาไหม | ใช้ที่จุดตรวจความปลอดภัย ที่คนไทยเรียกว่า “โน้ตบุ๊ก” ภาษาอังกฤษอเมริกันเรียก laptop
`,
"โรงพยาบาลและเหตุฉุกเฉิน": `
Help! | /ˈhelp/ | ช่วยด้วย! | ตะโกนเมื่อมีเหตุฉุกเฉิน
Call 911! | /ˈkɔːl ˈnaɪn ˈwʌn ˈwʌn/ | ช่วยโทร 911 ด้วย! | เบอร์ฉุกเฉินของอเมริกาคือ 911 อังกฤษคือ 999 ส่วนในไทยคือ 191 และ 1669
I need a doctor. | /aɪ ˈniːd ə ˈdɑːktər/ | ฉันต้องหาหมอ | ถ้าด่วนมาก: I need an ambulance.
I don't feel well. | /aɪ ˈdoʊnt ˈfiːl ˈwel/ | รู้สึกไม่ค่อยสบาย | ประโยคกลาง ๆ ที่ใช้ได้เสมอ
I have a headache. | /aɪ ˈhæv ə ˈhedeɪk/ | ปวดหัว | ส่วนที่ปวด + ache: stomachache toothache และต้องมีคำนำหน้านาม a
I have a fever. | /aɪ ˈhæv ə ˈfiːvər/ | มีไข้ | f คือ ฟ ส่วน v ตรงกลาง fever ต้องสั่นเส้นเสียง ไม่ใช่ ว
My stomach hurts. | /maɪ ˈstʌmək ˈhɜːrts/ | ปวดท้อง | ส่วนที่เจ็บ + hurts เติม -s เพราะ my stomach เป็นประธานเอกพจน์บุรุษที่ 3
I have a sore throat. | /aɪ ˈhæv ə ˈsɔːr ˈθroʊt/ | เจ็บคอ | sore = เจ็บแสบ หมายถึงในลำคอ ไม่ใช่ต้นคอ (neck)
I feel dizzy. | /aɪ ˈfiːl ˈdɪzi/ | เวียนหัว | ถ้าคลื่นไส้: I feel sick. / I feel nauseous.
I sprained my ankle. | /aɪ ˈspreɪnd maɪ ˈæŋkl/ | ข้อเท้าแพลง | sprain = แพลง ข้อมือคือ wrist
Is there a pharmacy near here? | /ɪz ðer ə ˈfɑːrməsi nɪr ˈhɪr/ | แถวนี้มีร้านขายยาไหม | ในอเมริกาเรียก drugstore ก็ได้
Do I need a prescription? | /də aɪ ˈniːd ə prɪˈskrɪpʃn/ | ต้องมีใบสั่งยาไหม | ยาที่ซื้อได้เองเรียกว่า over-the-counter ยาหลายตัวที่ซื้อเองได้ในไทย ต่างประเทศอาจต้องมีใบสั่งยา
I lost my wallet. | /aɪ ˈlɔːst maɪ ˈwɑːlɪt/ | กระเป๋าสตางค์หาย | ถ้าเป็นโทรศัพท์ใช้ phone จุดรับของหายเรียกว่า lost and found
Someone stole my phone. | /ˈsʌmwʌn ˈstoʊl maɪ ˈfoʊn/ | มีคนขโมยโทรศัพท์ของฉัน | stole เป็นกริยาช่อง 2 ของ steal
Where is the police station? | /ˈwer ɪz ðə pəˈliːs ˈsteɪʃn/ | สถานีตำรวจอยู่ที่ไหน | police เน้นพยางค์หลัง /pəˈliːs/
I need to contact the Thai embassy. | /aɪ ˈniːd tə ˈkɑːntækt ðə ˈtaɪ ˈembəsi/ | ฉันต้องติดต่อสถานทูตไทย | ประโยคจำเป็นเมื่อหนังสือเดินทางหายในต่างประเทศ
I have travel insurance. | /aɪ ˈhæv ˈtrævl ɪnˈʃʊrəns/ | ฉันมีประกันการเดินทาง | ประเทศที่ค่ารักษาพยาบาลแพงควรทำประกันก่อนเดินทาง
`,
"กริยาวลี": `
pick up | /ˈpɪk ˈʌp/ | ไปรับ / หยิบขึ้นมา | I'll pick you up at 7. ถ้ากรรมเป็นคำสรรพนาม (you it) ต้องวางไว้ตรงกลาง
give up | /ˈgɪv ˈʌp/ | ยอมแพ้ / เลิก | Don't give up! เลิกทำอะไรใช้รูป -ing: give up smoking
figure out | /ˈfɪgjər ˈaʊt/ | หาทางออก / คิดออก | I can't figure out this app. (ใช้แอปนี้ไม่เป็น)
find out | /ˈfaɪnd ˈaʊt/ | ได้รู้ / สืบจนรู้ | ใช้เมื่อได้รู้ข้อมูล ส่วน figure out ใช้เมื่อต้องคิดแก้เอง
look for | /ˈlʊk fɔːr/ | กำลังหา | I'm looking for my keys. ถ้าหาเจอแล้วใช้ find
look after | /ˈlʊk ˈæftər/ | ดูแล | Can you look after my cat? ในอเมริกาใช้ take care of บ่อยเช่นกัน
look forward to | /ˈlʊk ˈfɔːrwərd tuː/ | ตั้งตารอ | หลัง to ใช้คำนามหรือรูป -ing: I'm looking forward to seeing you.
run out of | /ˈrʌn ˈaʊt əv/ | หมด (ของใช้) | ของที่หมดวางหลัง of: We ran out of milk. (นมหมดแล้ว)
turn on | /ˈtɜːrn ˈɑːn/ | เปิด (ไฟ เครื่องใช้ไฟฟ้า) | ไฟและเครื่องใช้ไฟฟ้าใช้ turn on ไม่ใช่ open: Turn on the light. ถ้ากรรมเป็นคำสรรพนาม: Turn it on.
turn off | /ˈtɜːrn ˈɔːf/ | ปิด (ไฟ เครื่องใช้ไฟฟ้า) | ไฟไม่ใช้ close คำสรรพนามวางตรงกลาง: Turn it off. (turn off it ✗)
turn down | /ˈtɜːrn ˈdaʊn/ | ปฏิเสธ / ลดเสียง | ใช้บ่อยทั้งสองความหมาย: She turned down the offer. / Turn it down!
put off | /ˈpʊt ˈɔːf/ | เลื่อนออกไป / ผัดวันประกันพรุ่ง | ในบทสนทนาใช้บ่อยกว่า postpone: Stop putting it off!
show up | /ˈʃoʊ ˈʌp/ | มาถึง / โผล่มา | He didn't show up to the party. (เขาไม่มางานปาร์ตี้)
hang out | /ˈhæŋ ˈaʊt/ | ไปเที่ยวเล่น / ไปแฮงเอาต์ | คนไทยพูดว่า “ไปเล่นบ้านเพื่อน” แต่ภาษาอังกฤษใช้ hang out ส่วน play ใช้กับเด็ก เกม หรือกีฬา
check out | /ˈtʃek ˈaʊt/ | ลองดู / เช็กเอาต์ | Check out this video! และยังแปลว่าเช็กเอาต์จากโรงแรมได้ด้วย
work out | /ˈwɜːrk ˈaʊt/ | ออกกำลังกาย / ลงเอยด้วยดี | ออกกำลังที่ยิมใช้ work out: I work out every day. / It'll work out. (เดี๋ยวก็ดีเอง)
come up with | /ˈkʌm ˈʌp wɪð/ | คิดขึ้นมาได้ | ใช้กับไอเดีย ข้ออ้าง หรือวิธีแก้: She came up with a great idea.
get along with | /ˈget əˈlɔːŋ wɪð/ | เข้ากันได้ดีกับ | I get along with my coworkers. (เข้ากับเพื่อนร่วมงานได้ดี)
calm down | /ˈkɑːm ˈdaʊn/ | ใจเย็น ๆ / สงบลง | l ใน calm ไม่ออกเสียง ถ้าพูดกับคนที่กำลังโกรธอาจทำให้เขาโกรธกว่าเดิม
set up | /ˈset ˈʌp/ | ติดตั้ง / จัดเตรียม | ใช้กับการติดตั้งอุปกรณ์หรือเตรียมการประชุม: Can you help me set up my printer?
break up | /ˈbreɪk ˈʌp/ | เลิกกัน | They broke up last month. เลิกกับใครใช้ break up with
fill out | /ˈfɪl ˈaʊt/ | กรอก (แบบฟอร์ม) | Please fill out this form. อังกฤษใช้ fill in
grow up | /ˈgroʊ ˈʌp/ | เติบโต | ใช้บอกที่ที่โตมา: I grew up in Khon Kaen. (ฉันโตที่ขอนแก่น)
wake up | /ˈweɪk ˈʌp/ | ตื่นนอน | ลืมตาตื่นคือ wake up ส่วนลุกจากเตียงคือ get up
`,
"ระวังการออกเสียง": `
rice | /ˈraɪs/ | ข้าว | r: ห่อปาก ม้วนลิ้นไม่ให้แตะ ไม่ใช่ ล ถ้าออกเป็น lice ความหมายเปลี่ยนทันที
lice | /ˈlaɪs/ | เหา | l: ปลายลิ้นแตะปุ่มเหงือกหลังฟันบน ถ้าพูด I like rice. เป็น lice จะกลายเป็น “ชอบเหา”
right | /ˈraɪt/ | ขวา / ถูกต้อง | ขึ้นต้นด้วย r ต่างจาก light
light | /ˈlaɪt/ | แสง / ไฟ / เบา | ขึ้นต้นด้วย l ปลายลิ้นแตะเหงือกบน
fan | /ˈfæn/ | พัดลม / แฟนคลับ | f: ฟันบนแตะริมฝีปากล่างแล้วเป่าลม fan ไม่ได้แปลว่าแฟน (คนรัก) แฟนคือ boyfriend หรือ girlfriend
pan | /ˈpæn/ | กระทะ | p: ปิดริมฝีปากแล้วปล่อยลม คู่นี้คนไทยแยกได้อยู่แล้วเพราะภาษาไทยมีทั้ง ฟ และ พ
coffee | /ˈkɔːfi/ | กาแฟ | สระแรกคือ /ɔː/ ใกล้เคียง ออ และเน้นพยางค์แรก ต่างจาก กาแฟ ที่ลงน้ำหนักพยางค์ท้าย
copy | /ˈkɑːpi/ | สำเนา / ถ่ายเอกสาร | สระแรกคือ /ɑː/ ใกล้เคียง อา ต่างจาก coffee ที่เป็นเสียง ออ
think | /ˈθɪŋk/ | คิด | th: ปลายลิ้นแตะฟันบนแล้วเป่าลม ถ้าออกเป็น ซ จะกลายเป็น sink
sink | /ˈsɪŋk/ | อ่างล้างจาน / จม | s คือ ซ ลิ้นอยู่หลังฟัน
three | /ˈθriː/ | เลข 3 | ลิ้นอยู่ระหว่างฟัน ถ้าออกเป็น ท จะฟังเหมือน tree
tree | /ˈtriː/ | ต้นไม้ | t คือ ท ตามด้วย r ควบกล้ำ
this | /ˈðɪs/ | นี่ / อันนี้ | th แบบก้อง ลิ้นแตะฟันแล้วสั่นเส้นเสียง ไม่ใช่ ด หรือ ซ
very | /ˈveri/ | มาก | v: ฟันบนแตะริมฝีปากล่างแล้วสั่นเส้นเสียง ไม่ใช่ ว แบบที่ภาษาไทยเขียนคำว่า วีดีโอ ถ้าออกเป็น ว จะฟังเหมือน wary
berry | /ˈberi/ | ผลเบอร์รี | b คือ บ ของไทย คู่ very กับ berry ไม่ใช่ปัญหาหลักของคนไทย สิ่งที่ต้องระวังคือ v ที่กลายเป็น ว
vote | /ˈvoʊt/ | ลงคะแนนเสียง | ขึ้นต้นด้วย v ระวังออกเป็น ว ส่วนการสับสนกับ boat ไม่ใช่ปัญหาหลักของคนไทย
boat | /ˈboʊt/ | เรือ | ขึ้นต้นด้วย b ส่วน t ท้ายคำต้องได้ยินเบา ๆ ไม่กลืนหาย
walk | /ˈwɔːk/ | เดิน | l ไม่ออกเสียง สระคือ /ɔː/ ใกล้เคียง ออ
work | /ˈwɜːrk/ | ทำงาน | ม้วนลิ้นใส่ r สระคือ /ɜːr/ คู่กับ walk สับสนกันง่าย
beach | /ˈbiːtʃ/ | ชายหาด | ลากเสียง อี ให้ยาว ถ้าสั้นจะฟังเหมือนคำหยาบ
leave | /ˈliːv/ | ออกไป / จากไป | อี ยาว และ v ท้ายคำต้องสั่นเส้นเสียง ต่างจาก live ที่สระสั้น
live | /ˈlɪv/ | อาศัยอยู่ | อิ สั้น ปากเปิดน้อยกว่า leave
banana | /bəˈnænə/ | กล้วย | เน้นพยางค์กลาง /bəˈnænə/ ไม่ใช่ บา-นา-น่า ที่ลงน้ำหนักท้ายแบบไทย
hotel | /hoʊˈtel/ | โรงแรม | เน้นพยางค์หลัง และ l ท้ายคำต้องแตะเหงือก ไม่ใช่ โฮ-เต็น
milk | /ˈmɪlk/ | นม | l ก่อน k ต้องยกปลายลิ้นแตะเหงือก ไม่กลายเป็นเสียง ว
McDonald's | /məkˈdɑːnldz/ | แมคโดนัลด์ | เน้นพยางค์ Don และออกเสียง -ldz ท้ายคำให้ครบ
bus | /ˈbʌs/ | รถเมล์ / รถบัส | s ท้ายคำต้องลากลมเป็นเสียง ซ ไม่หยุดเป็น t แบบ ส สะกดในภาษาไทย ไม่งั้นจะฟังเป็น but
but | /ˈbʌt/ | แต่ | t ท้ายคำหยุดลม ต่างจาก bus
nice | /ˈnaɪs/ | ดี / ใจดี | s ท้ายคำต้องได้ยิน ถ้าหยุดเป็น t จะกลายเป็น night
night | /ˈnaɪt/ | กลางคืน | t ท้ายคำ ถ้าลากเป็น s จะกลายเป็น nice
fill | /ˈfɪl/ | เติม / ทำให้เต็ม | l ท้ายคำ ยกปลายลิ้นแตะเหงือกค้างไว้ ไม่ใช่ น แบบ ล สะกดในภาษาไทย
fin | /ˈfɪn/ | ครีบปลา | n ท้ายคำ ลมออกทางจมูก ต่างจาก fill ที่ลมออกข้างลิ้น
ball | /ˈbɔːl/ | ลูกบอล | l ท้ายคำไม่ใช่ ว ถ้าออกเป็น บอว จะฟังเหมือน bow และถ้าออกเป็น บอน ก็ผิดเช่นกัน
bag | /ˈbæg/ | กระเป๋า / ถุง | g ท้ายคำก้อง สระยาวกว่า back เล็กน้อย
back | /ˈbæk/ | หลัง / ข้างหลัง | k ท้ายคำไม่ก้อง สระสั้น
dog | /ˈdɔːg/ | หมา | g ท้ายคำก้อง ถ้าหยุดเป็น k จะฟังเหมือน dock
dock | /ˈdɑːk/ | ท่าเรือ | k ท้ายคำไม่ก้อง สระคือ /ɑː/
wary | /ˈweri/ | ระมัดระวัง | w: ห่อปาก ไม่แตะฟัน คือ ว ของไทย ต่างจาก very
shoe | /ˈʃuː/ | รองเท้า (ข้างเดียว) | sh ลากลมยาว ไม่มีจังหวะหยุดแบบ ช ถ้าออกเป็น ช จะฟังเหมือน chew
chew | /ˈtʃuː/ | เคี้ยว | ch คือ ช ของไทย เริ่มด้วยจังหวะหยุดสั้น ๆ
zoo | /ˈzuː/ | สวนสัตว์ | z คือ ซ ที่สั่นเส้นเสียง เอามือแตะคอจะรู้สึกสั่น ถ้าไม่สั่นจะเป็น Sue
Sue | /ˈsuː/ | ซู (ชื่อผู้หญิง) | s ไม่ก้อง คือ ซ ของไทย
months | /ˈmʌnθs/ | หลายเดือน | ท้ายคำ -nθs ออกเสียงยาก ลองพูด month ช้า ๆ ก่อนแล้วเติม s อย่าตัดเสียงท้ายทิ้ง
asked | /ˈæskt/ | ถามแล้ว (กริยาช่อง 2 ของ ask) | ท้ายคำมีพยัญชนะสามเสียง -skt ต้องออกให้ครบ ไม่ใช่แค่ ask
`,
"สำนวนภาษาอังกฤษ": `
It's a piece of cake. | /ɪts ə ˈpiːs əv ˈkeɪk/ | ง่ายมาก / หมู ๆ | ใช้กับงานที่ง่ายมาก: The test was a piece of cake.
I'm on cloud nine. | /aɪm ɑːn ˈklaʊd ˈnaɪn/ | ดีใจจนตัวลอย | ใช้เมื่อมีความสุขมาก
It costs an arm and a leg. | /ɪt ˈkɔːsts ən ˈɑːrm ənd ə ˈleg/ | แพงหูฉี่ | แพงจนต้องแลกด้วยแขนและขา
Let's call it a day. | /ˈlets ˈkɔːl ɪt ə ˈdeɪ/ | วันนี้พอแค่นี้ก่อน | ใช้ตอนเลิกงานหรือเลิกเรียน ในที่ประชุมก็ใช้ได้
I'm feeling under the weather. | /aɪm ˈfiːlɪŋ ʌndər ðə ˈweðər/ | ครั่นเนื้อครั่นตัว | ใช้เมื่อป่วยเล็กน้อยเหมือนจะเป็นหวัด ไม่เกี่ยวกับอากาศ
I need to hit the books. | /aɪ ˈniːd tə ˈhɪt ðə ˈbʊks/ | ต้องอ่านหนังสือหนัก ๆ แล้ว | ใช้ก่อนสอบ ไม่ได้ตีหนังสือจริง ๆ
Once in a blue moon | /ˈwʌns ɪn ə ˈbluː ˈmuːn/ | นาน ๆ ที | ใช้กับเรื่องที่เกิดขึ้นน้อยมาก: I only eat fast food once in a blue moon.
Better late than never. | /ˈbetər ˈleɪt ðən ˈnevər/ | มาช้ายังดีกว่าไม่มา | ใช้ให้กำลังใจคนที่เริ่มช้า
Don't beat around the bush. | /ˈdoʊnt ˈbiːt əraʊnd ðə ˈbʊʃ/ | อย่าอ้อมค้อม | ขอให้พูดเข้าประเด็นเลย
It's not my cup of tea. | /ɪts ˈnɑːt maɪ ˈkʌp əv ˈtiː/ | ไม่ใช่แนวของฉัน | ใช้บอกว่าไม่ชอบแบบนุ่มนวล
Let's get the ball rolling. | /ˈlets ˈget ðə ˈbɔːl ˈroʊlɪŋ/ | เริ่มกันเลยดีกว่า | ใช้ตอนเริ่มประชุมหรือเริ่มโปรเจกต์
I'll keep my fingers crossed. | /aɪl ˈkiːp maɪ ˈfɪŋgərz ˈkrɔːst/ | จะลุ้นให้นะ | ใช้คู่กับท่าไขว้นิ้วชี้กับนิ้วกลาง
Hang in there. | /ˈhæŋ ˈɪn ˈðer/ | อดทนไว้นะ / สู้ ๆ | พูดกับคนที่กำลังลำบาก ใช้แทน “สู้ ๆ” ของไทยได้
Speak of the devil! | /ˈspiːk əv ðə ˈdevl/ | พูดถึงก็มาพอดี! | ใช้เมื่อคนที่กำลังพูดถึงโผล่มา คล้ายที่คนไทยพูดว่า “ตายยาก”
The ball is in your court. | /ðə ˈbɔːl ɪz ɪn jʊr ˈkɔːrt/ | ตอนนี้ขึ้นอยู่กับคุณแล้ว | มาจากกีฬาเทนนิส หมายถึงถึงตาอีกฝ่ายตัดสินใจ
My lips are sealed. | /maɪ ˈlɪps ər ˈsiːld/ | ไม่บอกใครแน่นอน | ริมฝีปากถูกปิดผนึก คือจะเก็บความลับ
It's on the tip of my tongue. | /ɪts ɑːn ðə ˈtɪp əv maɪ ˈtʌŋ/ | นึกออกแล้วแต่พูดไม่ออก | ใช้เมื่อนึกคำหรือชื่อเกือบออก
I'm all ears. | /aɪm ˈɔːl ˈɪrz/ | ฟังอยู่ เล่ามาเลย | ตั้งใจฟังเต็มที่
When pigs fly. | /wen ˈpɪgz ˈflaɪ/ | ชาติหน้าตอนบ่าย ๆ | สิ่งที่ไม่มีวันเกิดขึ้น: He'll clean his room when pigs fly.
`,
"ภาพยนตร์ ซีรีส์ และสแลง": `
Spill the tea. | /ˈspɪl ðə ˈtiː/ | เล่ามาเลย มีเรื่องอะไร | tea = ข่าวซุบซิบ เป็นสแลงระหว่างเพื่อน คล้าย “เม้าท์มอย”
No cap. | /ˈnoʊ ˈkæp/ | ไม่โกหก / เรื่องจริง | สแลงของวัยรุ่น cap = โกหก
That song slaps. | /ˈðæt ˈsɔːŋ ˈslæps/ | เพลงนี้ปังมาก | slap = เจ๋งมาก ใช้กับเพลง และใช้กับอาหารก็ได้
I'm dead. | /aɪm ˈded/ | ขำจะตายอยู่แล้ว | ใช้ในแชตคู่กับอีโมจิหัวกะโหลก ไม่ได้ตายจริง คล้ายที่คนไทยพิมพ์ว่า “ขำตาย”
Low-key | /ˌloʊˈkiː/ | แอบ / นิด ๆ | I low-key love this song. ตรงข้ามคือ high-key (แบบโจ่งแจ้ง)
I'm obsessed with this song. | /aɪm əbˈsest wɪð ˈðɪs ˈsɔːŋ/ | ติดเพลงนี้หนักมาก | obsessed = หลงใหล ใช้ในความหมายดีบ่อย
What's it about? | /ˈwʌts ɪt əˈbaʊt/ | เรื่องเกี่ยวกับอะไร | ใช้ถามเนื้อเรื่องหนังหรือซีรีส์
No spoilers! | /ˈnoʊ ˈspɔɪlərz/ | ห้ามสปอยล์! | Don't spoil it! ก็ความหมายเดียวกัน
I binge-watched the whole season. | /aɪ ˈbɪndʒwɑːtʃt ðə ˈhoʊl ˈsiːzn/ | ดูรวดเดียวจบทั้งซีซัน | binge-watch = ดูมาราธอน
The ending was so good. | /ði ˈendɪŋ wəz ˈsoʊ ˈgʊd/ | ตอนจบดีมาก | ถ้าไม่ชอบ: The ending was disappointing.
It's a must-watch. | /ɪts ə ˈmʌstwɑːtʃ/ | เรื่องนี้ต้องดู | ใช้แนะนำแบบหนักแน่น
Plot twist! | /ˈplɑːt ˈtwɪst/ | หักมุม! | ใช้ในชีวิตจริงเมื่อเกิดเรื่องไม่คาดคิดได้ด้วย
It's overrated. | /ɪts ˌoʊvərˈreɪtɪd/ | ดังเกินจริง | ตรงข้ามคือ underrated (ดีกว่าที่คนพูดถึง)
That scene gave me chills. | /ˈðæt ˈsiːn ˈgeɪv mi ˈtʃɪlz/ | ฉากนั้นขนลุกเลย | ใช้เมื่อซึ้งหรือลุ้นจนขนลุก
Who's your bias? | /ˈhuːz jʊr ˈbaɪəs/ | เมนของคุณคือใคร | ศัพท์แฟนคลับวงไอดอล ตรงกับ “เมน” ที่แฟนคลับไทยใช้ ถ้าคุยทั่วไปพูดว่า Who's your favorite member?
Are you kidding me? | /ər ju ˈkɪdɪŋ mi/ | ล้อเล่นใช่ไหม | บทพูดประจำในซีรีส์ ใช้ได้ทั้งตอนตกใจและตอนหงุดหงิด
I've got your back. | /aɪv ˈgɑːt jʊr ˈbæk/ | ฉันอยู่ข้างคุณเสมอ | หมายถึงพร้อมช่วยและปกป้อง
Gotcha. | /ˈgɑːtʃə/ | เข้าใจแล้ว / จับได้แล้ว! | ย่อมาจาก got you ใช้บ่อยที่สุดในความหมายว่า เข้าใจแล้ว
Let's do this! | /ˈlets ˈduː ˈðɪs/ | ลุยกันเลย! | ใช้ปลุกใจก่อนเริ่มทำอะไร
`,
"ตัวอักษรภาษาอังกฤษ": `
A | /ˈeɪ/ | ตัวอักษร A (ตัวพิมพ์เล็ก a) | apple ขึ้นต้นด้วย A ชื่อคือ /ˈeɪ/ ลากเสียง เอ แล้วปิดท้ายด้วย อิ เบา ๆ ไม่ใช่ “เอ” เสียงเดียวแบบไทย
B | /ˈbiː/ | ตัวอักษร B (ตัวพิมพ์เล็ก b) | book ขึ้นต้นด้วย B ประกบริมฝีปากแล้วสั่นเส้นเสียง ทางโทรศัพท์อาจฟังเป็น P หรือ V ได้ง่าย
C | /ˈsiː/ | ตัวอักษร C (ตัวพิมพ์เล็ก c) | coffee ขึ้นต้นด้วย C ชื่อออกเสียงเหมือนคำว่า see ส่วน Z ต้องสั่นเส้นเสียงด้วย
D | /ˈdiː/ | ตัวอักษร D (ตัวพิมพ์เล็ก d) | dog ขึ้นต้นด้วย D ทางโทรศัพท์ D กับ T ฟังคล้ายกัน ถ้าไม่แน่ใจให้พูด D as in dog
E | /ˈiː/ | ตัวอักษร E (ตัวพิมพ์เล็ก e) | email ขึ้นต้นด้วย E ชื่อคือ /ˈiː/ ส่วน /ˈaɪ/ คือ I ตอนสะกดอีเมลอย่าสลับกัน
F | /ˈef/ | ตัวอักษร F (ตัวพิมพ์เล็ก f) | fan ขึ้นต้นด้วย F คำอ่าน “เอฟ” ชวนให้จบด้วยเสียง พ แต่ต้องจบด้วยฟันบนแตะริมฝีปากล่าง และพูดว่า an F
G | /ˈdʒiː/ | ตัวอักษร G (ตัวพิมพ์เล็ก g) | good ขึ้นต้นด้วย G ชื่อคือเสียง จ ที่สั่นเส้นเสียงแล้วลงท้ายด้วย อี ส่วน J ลงท้ายด้วย เอ
H | /ˈeɪtʃ/ | ตัวอักษร H (ตัวพิมพ์เล็ก h) | hotel ขึ้นต้นด้วย H ชื่อขึ้นต้นด้วยเสียงสระ ไม่มีเสียง ฮ จึงพูดว่า an H และต้องได้ยินเสียง ช ท้ายคำ
I | /ˈaɪ/ | ตัวอักษร I (ตัวพิมพ์เล็ก i) | ice ขึ้นต้นด้วย I ชื่อออกเสียงเหมือนคำว่า I (ฉัน) คือ “ไอ” ไม่ใช่ “อี” ซึ่งเป็นชื่อของ E
J | /ˈdʒeɪ/ | ตัวอักษร J (ตัวพิมพ์เล็ก j) | job ขึ้นต้นด้วย J ชื่อลงท้ายด้วย เอ(อิ) อย่าสับสนกับ G ที่ลงท้ายด้วย อี
K | /ˈkeɪ/ | ตัวอักษร K (ตัวพิมพ์เล็ก k) | key ขึ้นต้นด้วย K ชื่อออกเสียงเหมือนพยางค์ท้ายของ OK
L | /ˈel/ | ตัวอักษร L (ตัวพิมพ์เล็ก l) | light ขึ้นต้นด้วย L ถ้าอ่าน “แอล” ตามตัวสะกดไทยจะกลายเป็น “แอน” ฟังเหมือน N ต้องยกปลายลิ้นแตะปุ่มเหงือกค้างไว้
M | /ˈem/ | ตัวอักษร M (ตัวพิมพ์เล็ก m) | milk ขึ้นต้นด้วย M ปิดริมฝีปากตอนจบ ชื่อขึ้นต้นด้วยเสียงสระจึงพูดว่า an M
N | /ˈen/ | ตัวอักษร N (ตัวพิมพ์เล็ก n) | name ขึ้นต้นด้วย N ทางโทรศัพท์มักฟังสับสนกับ M หรือ L ให้พูดว่า N as in name
O | /ˈoʊ/ | ตัวอักษร O (ตัวพิมพ์เล็ก o) | OK ขึ้นต้นด้วย O ชื่อคือ /ˈoʊ/ ห่อปากปิดท้ายเป็น อุ เวลาบอกเบอร์โทรเป็นภาษาอังกฤษ เลข 0 ก็มักอ่านว่า O
P | /ˈpiː/ | ตัวอักษร P (ตัวพิมพ์เล็ก p) | pan ขึ้นต้นด้วย P ปล่อยลมแรง ๆ ส่วน B สั่นเส้นเสียงและไม่มีลม
Q | /ˈkjuː/ | ตัวอักษร Q (ตัวพิมพ์เล็ก q) | question ขึ้นต้นด้วย Q ชื่อมีเสียง ย อยู่ตรงกลาง ไม่ใช่ “คิว” ที่จบด้วยเสียง ว และในคำศัพท์ Q มักตามด้วย U
R | /ˈɑːr/ | ตัวอักษร R (ตัวพิมพ์เล็ก r) | rice ขึ้นต้นด้วย R ต้องม้วนลิ้นท้ายเสียง อา ไม่ใช่ “อา” เฉย ๆ ตามตัวการันต์ใน “อาร์” และไม่ใช่เสียง ล
S | /ˈes/ | ตัวอักษร S (ตัวพิมพ์เล็ก s) | sorry ขึ้นต้นด้วย S ถ้าอ่าน “เอส” ตามตัวสะกดไทยจะกลายเป็น “เอ็ด” ต้องลากเสียง ซ ท้ายคำ และพูดว่า an S
T | /ˈtiː/ | ตัวอักษร T (ตัวพิมพ์เล็ก t) | taxi ขึ้นต้นด้วย T ตัวพิมพ์ใหญ่พูดว่า capital T และ T สองตัวติดกันพูดว่า double T
U | /ˈjuː/ | ตัวอักษร U (ตัวพิมพ์เล็ก u) | university ขึ้นต้นด้วย U ชื่อออกเสียงเหมือน you ขึ้นต้นด้วยเสียง /j/ จึงพูดว่า a U ไม่ใช่ an U
V | /ˈviː/ | ตัวอักษร V (ตัวพิมพ์เล็ก v) | very ขึ้นต้นด้วย V ฟันบนแตะริมฝีปากล่างแล้วสั่นเส้นเสียง ไม่ใช่เสียง ว แบบคำอ่าน “วี”
W | /ˈdʌbəljuː/ | ตัวอักษร W (ตัวพิมพ์เล็ก w) | water ขึ้นต้นด้วย W ชื่อคือ double u (ยูสองตัว) มีสามพยางค์และเน้นพยางค์แรก
X | /ˈeks/ | ตัวอักษร X (ตัวพิมพ์เล็ก x) | box ลงท้ายด้วย x ต้องได้ยินเสียง ซ ท้ายคำ ไม่ใช่ “เอ็ก” ตามตัวการันต์ใน “เอกซ์” และพูดว่า an X
Y | /ˈwaɪ/ | ตัวอักษร Y (ตัวพิมพ์เล็ก y) | yes ขึ้นต้นด้วย Y ชื่อออกเสียงเหมือนคำว่า why แต่ในคำอย่าง yes ตัว Y แทนเสียง ย
Z | /ˈziː/ | ตัวอักษร Z (ตัวพิมพ์เล็ก z) | zoo ขึ้นต้นด้วย Z คนอเมริกันเรียกว่า zee ไม่ใช่ “แซด” แบบบริติช และต้องสั่นเส้นเสียง ไม่เช่นนั้นจะฟังเป็น C
`,
"กับดักภาษาอังกฤษแบบไทย": `
Turn on the light. | /ˈtɜːrn ˈɑːn ðə ˈlaɪt/ | เปิดไฟ | ภาษาอังกฤษแบบไทย: open the light จาก “เปิดไฟ” ไฟและเครื่องใช้ไฟฟ้าใช้ turn on ส่วน open ใช้กับประตูและหน้าต่าง
Turn off the light. | /ˈtɜːrn ˈɔːf ðə ˈlaɪt/ | ปิดไฟ | ภาษาอังกฤษแบบไทย: close the light จาก “ปิดไฟ” ไฟใช้ turn off ส่วน close ใช้กับประตูและหน้าต่าง
Can you turn on the AC? | /kən ju ˈtɜːrn ˈɑːn ði ˌeɪ ˈsiː/ | เปิดแอร์หน่อยได้ไหม | ภาษาอังกฤษแบบไทย: open the air จาก “เปิดแอร์” แอร์ในภาษาอังกฤษคือ AC หรือ air conditioner ส่วน air เฉย ๆ แปลว่าอากาศ
It's the same. | /ɪts ðə ˈseɪm/ | เหมือนกันเลย | ภาษาอังกฤษแบบไทย: same same จาก “เหมือนกัน” เจ้าของภาษาพูด same คำเดียวและมีคำนำหน้านาม the
They're similar. | /ðer ˈsɪmələr/ | คล้าย ๆ กัน | ภาษาอังกฤษแบบไทย: same same but different เป็นวลีขำ ๆ ที่นักท่องเที่ยวรู้จัก แต่ถ้าจะบอกว่าคล้ายกันใช้ similar
Check, please. | /ˈtʃek ˈpliːz/ | เช็กบิลด้วย | ภาษาอังกฤษแบบไทย: check bill จาก “เช็กบิล” เจ้าของภาษาพูด Check, please. หรือ Can I get the check?
I go shopping on weekends. | /aɪ ˈgoʊ ˈʃɑːpɪŋ ɑːn ˈwiːkendz/ | ฉันไปช้อปปิ้งทุกสุดสัปดาห์ | ภาษาอังกฤษแบบไทย: go to shopping จาก “ไปช้อปปิ้ง” กิจกรรมที่ลงท้ายด้วย -ing ไม่มี to: go shopping go swimming
I'm going to the gym. | /aɪm ˈgoʊɪŋ tə ðə ˈdʒɪm/ | ฉันจะไปยิม | ภาษาอังกฤษแบบไทย: go to fitness จาก “ไปฟิตเนส” สถานที่ออกกำลังกายเรียกว่า the gym ส่วน fitness แปลว่าความฟิต
This movie is boring. | /ˈðɪs ˈmuːvi ɪz ˈbɔːrɪŋ/ | หนังเรื่องนี้น่าเบื่อ | ภาษาอังกฤษแบบไทย: I'm boring จาก “ฉันเบื่อ” boring ใช้กับสิ่งที่ทำให้เบื่อ ส่วนความรู้สึกของเราใช้ I'm bored.
I'm interested in music. | /aɪm ˈɪntrəstɪd ɪn ˈmjuːzɪk/ | ฉันสนใจดนตรี | ภาษาอังกฤษแบบไทย: I'm interesting in… จาก “ฉันสนใจ” ความรู้สึกของเราใช้ interested ส่วน interesting แปลว่าน่าสนใจ
Let's split the bill. | /ˈlets ˈsplɪt ðə ˈbɪl/ | หารกันเถอะ | ภาษาอังกฤษแบบไทย: American share จาก “อเมริกันแชร์” เจ้าของภาษาไม่รู้จักคำนี้ ใช้ split the bill หรือ go Dutch
I'm on my phone. | /aɪm ɑːn maɪ ˈfoʊn/ | ฉันกำลังเล่นมือถือ | ภาษาอังกฤษแบบไทย: play phone หรือ play Facebook จาก “เล่นมือถือ” และ “เล่นเฟซบุ๊ก” ภาษาอังกฤษใช้ be on: I'm on Facebook.
This place is really fancy. | /ˈðɪs ˈpleɪs ɪz ˈriːəli ˈfænsi/ | ที่นี่ไฮโซมาก | ภาษาอังกฤษแบบไทย: hi-so จาก “ไฮโซ” เจ้าของภาษาไม่ใช้คำนี้ สถานที่ใช้ fancy หรือ upscale ส่วนคนใช้ posh (แบบบริติช)
I learned a lot. | /aɪ ˈlɜːrnd ə ˈlɑːt/ | ได้ความรู้เยอะเลย | ภาษาอังกฤษแบบไทย: I get the knowledge จาก “ได้ความรู้” ภาษาอังกฤษใช้กริยา learn และ knowledge เป็นคำนามนับไม่ได้
It's up to you. | /ɪts ˈʌp tə ˈjuː/ | แล้วแต่คุณ | ภาษาอังกฤษแบบไทย: depend on you จาก “แล้วแต่คุณ” ส่วน It depends on you. แปลว่า “ขึ้นอยู่กับสิ่งที่คุณทำ” ไม่ใช่ “เลือกเองเลย” ถ้าให้อีกฝ่ายตัดสินใจใช้ It's up to you.
No, I didn't. | /ˈnoʊ aɪ ˈdɪdnt/ | เปล่า ไม่ได้ทำ | ภาษาอังกฤษแบบไทย: ตอบ Yes ตามคำว่า “ใช่” เมื่อถูกถามว่า You didn't go? ภาษาอังกฤษตอบตามข้อเท็จจริง ถ้าไม่ได้ไปตอบ No เสมอ
That's all right. | /ˈðæts ˈɔːl ˈraɪt/ | ไม่เป็นไร ไม่ต้องคิดมาก | ภาษาอังกฤษแบบไทย: never mind ใช้แทน “ไม่เป็นไร” ทุกกรณี ภาษาอังกฤษใช้ Never mind เมื่อหมายถึง “ช่างเถอะ ไม่ต้องสนใจที่ฉันพูด” แต่ถ้ามีคนขอโทษหรือขอบคุณ ใช้ That's all right. หรือ No problem.
I'm full. | /aɪm ˈfʊl/ | อิ่มแล้ว | ภาษาอังกฤษแบบไทย: I'm full already จาก “อิ่มแล้ว” คำว่า แล้ว ไม่ต้องแปลเป็น already พูดแค่ I'm full. ก็ครบ
Can you make it less sweet? | /kən ju ˈmeɪk ɪt ˈles ˈswiːt/ | ขอหวานน้อย | ภาษาอังกฤษแบบไทย: แปลคำต่อคำจาก “หวานน้อย” เป็น sweet little หรือ sweet less ซึ่งเจ้าของภาษาฟังแล้วงง ภาษาอังกฤษวาง less ไว้หน้าคำคุณศัพท์: less sweet หรือ Not too sweet, please.
I've been to Phuket. | /aɪv bɪn tə ˌpuːˈket/ | ฉันเคยไปภูเก็ต | ภาษาอังกฤษแบบไทย: I used to go Phuket จาก “เคยไปภูเก็ต” used to หมายถึงเคยทำเป็นประจำในอดีต ถ้าเคยไปมาแล้วใช้ have been to
Call me, OK? | /ˈkɔːl mi oʊˈkeɪ/ | โทรหาฉันนะ | ภาษาอังกฤษแบบไทย: Call to me na จาก “โทรหานะ” คำว่า นะ ไม่ใส่ในภาษาอังกฤษ และ call ไม่ต้องมี to ใช้ OK? หรือ please แทน
I'm going to buy some food. | /aɪm ˈgoʊɪŋ tə ˈbaɪ ˈsʌm ˈfuːd/ | ฉันจะไปซื้อข้าว | ภาษาอังกฤษแบบไทย: I go buy food จาก “ไปซื้อข้าว” ประโยคนี้พูดถึงสิ่งที่กำลังจะทำ จึงใช้ be going to และ food เป็นคำนามนับไม่ได้ จึงไม่ใช้ a (ใส่ some ได้)
`
};
