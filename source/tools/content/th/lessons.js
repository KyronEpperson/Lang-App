/* TRANSLATE/ADAPT (th): scaffolded from tools/content/ko/lessons.js by new_lang.js.
   Translate/adapt everything that is not English (the ko text) for th speakers (prompts, why, hint, meanings, pron per profile.json, deck and group names,
   explanations written from the th point of view — PILOT-SPEC §3). Keep every English string, lesson id and answer position
   identical to ko-en unless deviations.json gives a reason (parity.js enforces it). Delete this banner when the file is done. */
exports.LESSONS = [
{ id:"pron", title:"1 · กับดักการออกเสียง: เสียงท้ายคำ TH V และ R/L", blurb:"อ่านสัทอักษรให้เป็น แล้วแก้เสียงที่คนไทยพลาดบ่อยที่สุด: เสียงท้ายคำ TH V R/L และการเน้นเสียง", deck:"ระวังการออกเสียง", body:`
<p>การ์ดและตัวอย่างทุกแถวในคอร์สนี้มีคำอ่านเป็น<b>สัทอักษร (IPA)</b> แบบอเมริกันกำกับไว้ คำอ่านภาษาไทยเขียนเสียงท้ายคำ /s/ /l/ /v/ /z/ และเสียงควบกล้ำท้ายคำไม่ได้ และยังพาวรรณยุกต์ไทยติดเข้ามาด้วย สัทอักษรจึงบอกเสียงที่ภาษาไทยไม่มีได้ตรงกว่า ถ้าไม่อยากเห็นคำอ่าน ปิดได้ที่ตั้งค่า “แสดงคำอ่าน (IPA)”</p>
<h3>อ่านสัทอักษรใน 2 นาที</h3>
<p>ช่องกลางเป็นแค่เสียงไทยที่ใกล้เคียง ช่องที่เขียนว่า “ไม่มีในภาษาไทย” คือเสียงที่ต้องฝึกใหม่ เพราะตัวอักษรไทยที่เรานึกถึงก่อนคือเสียงที่ผิด</p>
<div class="tbl"><table><tr><th>IPA</th><th>เสียงไทยที่ใกล้เคียง</th><th>ตัวอย่าง</th></tr><tr><td class="k">iː / ɪ</td><td>สระอี ยาว / สระอิ สั้น</td><td>leave /ˈliːv/ live /ˈlɪv/</td></tr><tr><td class="k">e / æ</td><td>สระเอะ / สระแอ อ้าปากกว้างกว่า</td><td>bed /ˈbed/ bad /ˈbæd/</td></tr><tr><td class="k">ʌ / ə</td><td>สระอะ / เสียงเออะ เบา ๆ ในพยางค์ที่ไม่เน้น</td><td>cup /ˈkʌp/ about /əˈbaʊt/</td></tr><tr><td class="k">ɑː / ɔː</td><td>สระอา / สระออ</td><td>hot /ˈhɑːt/ talk /ˈtɔːk/</td></tr><tr><td class="k">uː / ʊ</td><td>สระอู / สระอุ</td><td>food /ˈfuːd/ book /ˈbʊk/</td></tr><tr><td class="k">ɜːr / ər</td><td>เออ แล้วม้วนลิ้น r / เออร์ เบา ๆ</td><td>bird /ˈbɜːrd/ water /ˈwɔːtər/</td></tr><tr><td class="k">eɪ aɪ ɔɪ aʊ oʊ</td><td>เอ(อิ) ไอ ออย เอา โอ(อุ)</td><td>day my boy now go /ˈgoʊ/</td></tr><tr><td class="k">i / u</td><td>อิ / อุ สั้น ไม่เน้น</td><td>very /ˈveri/ movie /ˈmuːvi/</td></tr><tr><td class="k">p t k / b d</td><td>พ ท ค / บ ด ท้ายคำต้องปล่อยเสียงให้ได้ยิน ไม่กักไว้แบบไทย</td><td>stop /ˈstɑːp/ bed /ˈbed/</td></tr><tr><td class="k">g</td><td>ไม่มีในภาษาไทย: ก ที่สั่นเส้นเสียง ไม่ใช่ ค</td><td>good /ˈgʊd/</td></tr><tr><td class="k">f / v</td><td>ฟ / ไม่มีในภาษาไทย: ฟ ที่สั่นเส้นเสียง ฟันบนแตะริมฝีปากล่าง ไม่ใช่ ว</td><td>fan /ˈfæn/ very /ˈveri/</td></tr><tr><td class="k">θ / ð</td><td>ไม่มีในภาษาไทย: ปลายลิ้นแตะฟันบน ลมผ่าน (θ ไม่ก้อง ð ก้อง) ไม่ใช่ ท ซ ด</td><td>think /ˈθɪŋk/ this /ˈðɪs/</td></tr><tr><td class="k">s / z</td><td>ซ / ไม่มีในภาษาไทย: ซ ที่สั่นเส้นเสียง</td><td>bus /ˈbʌs/ zoo /ˈzuː/</td></tr><tr><td class="k">ʃ / ʒ</td><td>ไม่มีในภาษาไทย: ชู่ว ลมเสียดยาว ไม่มีจังหวะกัก / แบบเดียวกันแต่ก้อง</td><td>shop /ˈʃɑːp/ usually /ˈjuːʒuəli/</td></tr><tr><td class="k">tʃ / dʒ</td><td>ช / ไม่มีในภาษาไทย: จ ที่สั่นเส้นเสียง</td><td>check /ˈtʃek/ job /ˈdʒɑːb/</td></tr><tr><td class="k">m n ŋ</td><td>ม น ง</td><td>sing /ˈsɪŋ/</td></tr><tr><td class="k">l</td><td>ล ท้ายคำต้องยกปลายลิ้นแตะปุ่มเหงือก ไม่ใช่ น หรือ ว</td><td>fill /ˈfɪl/ ball /ˈbɔːl/</td></tr><tr><td class="k">r</td><td>ร แบบอเมริกัน: ม้วนลิ้น ไม่แตะ ไม่รัว และไม่ใช่ ล</td><td>rice /ˈraɪs/</td></tr><tr><td class="k">w j h</td><td>ว ย ฮ</td><td>wet /ˈwet/ yes /ˈjes/</td></tr><tr><td class="k">ˈ</td><td>เครื่องหมายเน้นเสียง: พยางค์ถัดไปดังและยาวกว่า</td><td>about /əˈbaʊt/</td></tr></table></div>
<p>คอร์สนี้ใส่ ˈ ให้คำหลักทุกคำ แม้คำนั้นจะมีพยางค์เดียว ส่วนคำเล็กที่ไม่มี ˈ อย่าง a the to can ให้พูดเบาและเร็ว</p>
<h3>เสียงท้ายคำ: ปัญหาอันดับหนึ่งของคนไทย</h3>
<p>ภาษาไทยมีตัวสะกดได้ไม่กี่เสียง และตามหลักการอ่าน ส สะกดออกเสียงแม่กด ล สะกดออกเสียงแม่กน ถ้าพูดภาษาอังกฤษด้วยนิสัยนี้ bus จะกลายเป็น but และ fill จะกลายเป็น fin ส่วน /l/ ท้ายคำต้องยกปลายลิ้นแตะปุ่มเหงือกค้างไว้ อย่าให้กลายเป็นเสียง ว หรือ น</p>
{{ex:bus|/ˈbʌs/|รถบัส}}{{ex:but|/ˈbʌt/|แต่}}{{ex:fill|/ˈfɪl/|เติม ทำให้เต็ม}}{{ex:fin|/ˈfɪn/|ครีบปลา}}{{ex:ball|/ˈbɔːl/|ลูกบอล}}
<p>เสียงท้ายที่ก้องก็ต้องก้อง เสียงท้ายคำเปลี่ยนความหมายได้: bag (กระเป๋า) / back (หลัง) เสียงท้ายคำยังบอกไวยากรณ์ด้วย -s ใน works และ -ed ใน watched อยู่ท้ายคำทั้งคู่ ถ้ากลืนหายไปก็เท่ากับพูดไวยากรณ์ผิด แต่ก็อย่าเติมสระต่อท้าย</p>
{{ex:bag|/ˈbæg/|กระเป๋า}}{{ex:back|/ˈbæk/|หลัง ด้านหลัง}}{{ex:He works at a hotel.|/hi ˈwɜːrks ət ə hoʊˈtel/|เขาทำงานที่โรงแรม}}{{ex:I watched a movie.|/aɪ ˈwɑːtʃt ə ˈmuːvi/|ฉันดูหนังเรื่องหนึ่ง}}
<h3>TH: ไม่ใช่ ท ซ หรือ ด</h3>
<p>ยื่นปลายลิ้นออกมาระหว่างฟันบนกับฟันล่าง<b>เล็กน้อย</b>แล้วปล่อยลม ถ้ามีแค่ลมคือ /θ/ ใน think ถ้าสั่นเส้นเสียงด้วยคือ /ð/ ใน this ถ้าใช้เสียง ซ หรือ ท แทน think จะกลายเป็น sink และ three จะกลายเป็น tree</p>
{{ex:think|/ˈθɪŋk/|คิด}}{{ex:sink|/ˈsɪŋk/|อ่างล้างจาน จม}}{{ex:three|/ˈθriː/|เลข 3}}{{ex:tree|/ˈtriː/|ต้นไม้}}{{ex:this|/ˈðɪs/|นี่ สิ่งนี้}}
<h3>V และ F: ฟันบนแตะริมฝีปากล่าง</h3>
<p>ภาษาไทยเขียน v ด้วย ว (วีดีโอ) คนไทยจึงมักพูด very เป็น wary ทั้งที่ /v/ ไม่ห่อปากเลย ส่วน F ใช้ท่าเดียวกันแต่มีแค่ลม ถ้าปิดริมฝีปากทั้งสองข้างจะกลายเป็น P หรือ B</p>
<div class="tbl"><table><tr><th>เสียง</th><th>ท่าปาก</th><th>ตัวอย่าง</th></tr><tr><td class="k">F</td><td>ฟันบนแตะริมฝีปากล่าง ปล่อยแค่ลม</td><td>fan coffee</td></tr><tr><td class="k">P</td><td>ปิดริมฝีปากทั้งสองข้างแล้วเปิดออก</td><td>pan copy</td></tr><tr><td class="k">V</td><td>ท่าเดียวกับ F แต่สั่นเส้นเสียง</td><td>very vote</td></tr><tr><td class="k">B</td><td>ท่าเดียวกับ P แต่สั่นเส้นเสียง</td><td>berry boat</td></tr><tr><td class="k">W</td><td>ห่อริมฝีปาก ฟันไม่แตะปาก</td><td>wary</td></tr></table></div>
{{ex:very|/ˈveri/|มาก}}{{ex:wary|/ˈweri/|ระมัดระวัง}}{{ex:vote|/ˈvoʊt/|ลงคะแนนเสียง}}{{ex:boat|/ˈboʊt/|เรือ}}{{ex:fan|/ˈfæn/|พัดลม แฟนคลับ}}{{ex:pan|/ˈpæn/|กระทะ}}
<h3>R และ L</h3>
<p>ภาษาพูดไทยมักออกเสียง ร เป็น ล และนิสัยนี้ติดมาในภาษาอังกฤษ <b>L</b> คือปลายลิ้นแตะปุ่มเหงือกหลังฟันบนแล้วปล่อย <b>R</b> แบบอเมริกันคือปลายลิ้น<b>ไม่แตะตรงไหนเลย</b> ม้วนลิ้นไปข้างหลังเล็กน้อยและห่อปากนิดหน่อย ไม่รัวแบบ ร ไทย ถ้าพูด rice ด้วยเสียง ล จะกลายเป็น lice (เหา)</p>
{{ex:rice|/ˈraɪs/|ข้าว}}{{ex:lice|/ˈlaɪs/|เหา}}{{ex:right|/ˈraɪt/|ขวา ถูกต้อง}}{{ex:light|/ˈlaɪt/|แสง เบา}}
<h3>SH Z และ G</h3>
<p>/ʃ/ ใน shoe เป็นลมเสียดยาว ไม่มีจังหวะกักแบบ ช ใน chew /z/ คือ ซ ที่สั่นเส้นเสียง ลองแตะคอดูจะรู้สึกว่าสั่น และ /g/ ใน good คือ ก ที่สั่นเส้นเสียง ไม่ใช่ ค</p>
{{ex:shoe|/ˈʃuː/|รองเท้า (หนึ่งข้าง)}}{{ex:chew|/ˈtʃuː/|เคี้ยว}}{{ex:zoo|/ˈzuː/|สวนสัตว์}}
<h3>ภาษาอังกฤษไม่มีวรรณยุกต์ แต่มีการเน้นเสียง</h3>
<p>ภาษาไทยใช้วรรณยุกต์แยกความหมาย ภาษาอังกฤษไม่มีวรรณยุกต์ แต่ทุกคำที่มีหลายพยางค์จะมีพยางค์หนึ่งที่พูด<b>ดังกว่า ยาวกว่า และสูงกว่า</b> คนไทยมักพูดทุกพยางค์เท่ากัน หรือเน้นพยางค์ท้ายตามนิสัยคำยืม ต่อให้ออกเสียงถูกทุกตัว ถ้าเน้นผิดคนฟังก็อาจไม่เข้าใจ</p>
<div class="tbl"><table><tr><th>คำ</th><th>การเน้นเสียง</th><th>IPA</th></tr><tr><td class="k">banana</td><td>ba-<b>NA</b>-na</td><td>/bəˈnænə/</td></tr><tr><td class="k">hotel</td><td>ho-<b>TEL</b></td><td>/hoʊˈtel/</td></tr><tr><td class="k">McDonald's</td><td>mc-<b>DON</b>-ald's</td><td>/məkˈdɑːnəldz/</td></tr><tr><td class="k">thirteen / thirty</td><td>thir-<b>TEEN</b> / <b>THIR</b>-ty</td><td>/ˌθɜːrˈtiːn/ /ˈθɜːrti/</td></tr></table></div>
<div class="tip">วิธีเช็กตัวเอง: ส่องกระจกตอนพูด F และ V ต้อง<b>เห็น</b>ฟันบนแตะริมฝีปากล่าง ตอนพูด TH ต้องเห็นปลายลิ้นอยู่ระหว่างฟัน และพูดเสียงท้ายคำให้คนฟังได้ยินทุกครั้ง</div>`},

{ id:"articles", title:"2 · a และ the: คำนำหน้านามที่ภาษาไทยไม่มี", blurb:"คนไทยมักลืมใส่ a และ the มากกว่าใส่เกิน จำแค่สามกรณีก็พอ", deck:"แนะนำตัว", body:`
<p>ภาษาไทยไม่มี<b>คำนำหน้านาม (article)</b> คนไทยจึงมัก<b>ลืมใส่</b> a และ the มากกว่าใส่เกิน ภาษาไทยพูดว่า “ฉันเป็นนักเรียน” โดยไม่ต้องมีคำว่า “หนึ่ง” แต่ภาษาอังกฤษต้องมี a เสมอ: I'm <b>a</b> student. ลักษณนามอย่าง คน ตัว อัน ก็ไม่ใช่คำนำหน้านาม และ หนึ่ง เป็นตัวเลข ไม่ได้แปลว่า a ทุกครั้ง</p>
<h3>a / an: สิ่งหนึ่งที่พูดถึงเป็นครั้งแรก</h3>
<p>ใช้กับคำนามนับได้ที่เป็นเอกพจน์ เมื่อพูดถึง<b>ครั้งแรก</b> และต้องใส่หน้าอาชีพเสมอ</p>
{{ex:I'm a student.|/aɪm ə ˈstuːdnt/|ฉันเป็นนักเรียน}}{{ex:I have a dog.|/aɪ ˈhæv ə ˈdɔːg/|ฉันเลี้ยงหมาหนึ่งตัว}}
<p>จะใช้ <b>an</b> หรือไม่ ดูที่<b>เสียง</b> ไม่ได้ดูที่ตัวสะกด ถ้าคำถัดไปขึ้นต้นด้วยเสียงสระ ใช้ an</p>
<div class="tbl"><table><tr><th>a</th><th>an</th></tr><tr><td class="k">a university (เสียง /j/)</td><td class="k">an hour (h ไม่ออกเสียง)</td></tr><tr><td class="k">a uniform</td><td class="k">an idea</td></tr><tr><td class="k">a one-way ticket (เสียง /w/)</td><td class="k">an MBA (เสียง /e/)</td></tr></table></div>
<h3>the: สิ่งที่ทั้งสองฝ่ายรู้ว่าอันไหน</h3>
<p>ใช้กับสิ่งที่พูดถึงไปแล้ว หรือสิ่งที่ทั้งคนพูดและคนฟังรู้ว่าหมายถึงอันไหน รวมถึงสิ่งที่มีอยู่หนึ่งเดียว (the sun, the internet) ภาษาไทยใช้ นี้ หรือ นั้น ในบางครั้ง แต่ภาษาอังกฤษต้องใส่ the ทุกครั้งที่เข้าเงื่อนไข</p>
{{ex:I have a dog. The dog is so cute.|/aɪ ˈhæv ə ˈdɔːg ‖ ðə ˈdɔːg ɪz ˈsoʊ ˈkjuːt/|ฉันเลี้ยงหมาตัวหนึ่ง หมาตัวนั้นน่ารักมาก}}{{ex:Can you close the door?|/kən ju ˈkloʊz ðə ˈdɔːr/|ช่วยปิดประตูหน่อยได้ไหม (ประตูห้องนี้)}}
<h3>ไม่ใช้คำนำหน้านาม: พูดถึงแบบทั่วไป</h3>
<p>ถ้าพูดถึงสิ่งนั้นทั้งประเภท ใช้รูปพหูพจน์หรือคำนามนับไม่ได้โดยไม่มีคำนำหน้านาม ชื่อมื้ออาหาร ภาษา และกีฬาก็ไม่ใช้คำนำหน้านาม</p>
{{ex:I love dogs.|/aɪ ˈlʌv ˈdɔːgz/|ฉันชอบหมามาก (หมาทุกตัว ทั้งประเภท)}}{{ex:I don't drink coffee.|/aɪ ˈdoʊnt ˈdrɪŋk ˈkɔːfi/|ฉันไม่ดื่มกาแฟ}}{{ex:Let's have lunch.|/ˈlets ˈhæv ˈlʌntʃ/|ไปกินข้าวกลางวันกัน}}
<div class="tip">ข้อผิดพลาดที่พบบ่อยที่สุด: <b>I'm teacher.</b> ✗ → <b>I'm a teacher.</b> ✓ หน้าอาชีพต้องมี a เสมอ แม้ภาษาไทยจะพูดแค่ “ฉันเป็นครู”</div>`},

{ id:"be", title:"3 · Verb to be กับกริยาแท้", blurb:"am is are ไม่ใช่ เป็น เสมอไป: ต้องมีหน้าคำคุณศัพท์ และห้ามใส่หน้ากริยาอื่น", deck:"แนะนำตัว", body:`
<p>ประโยคภาษาอังกฤษต้องมีกริยาเสมอ กริยานั้นอาจเป็น <b>Verb to be</b> (am is are) หรือ<b>กริยาแท้</b>อย่าง like live work และการทำประโยคปฏิเสธกับคำถามของสองแบบนี้ต่างกัน</p>
<h3>Verb to be ไม่เท่ากับ “เป็น”</h3>
<p>ภาษาไทยใช้ เป็น หรือ คือ เฉพาะหน้าคำนาม (ฉันเป็นนักเรียน) ส่วนคำคุณศัพท์ใช้ได้เลยโดยไม่ต้องมีกริยา (เธอสวยมาก ฉันหิว) แต่ภาษาอังกฤษต้องมี Verb to be หน้าคำคุณศัพท์และหน้าคำบอกสถานที่ด้วย: She very beautiful. ✗ → She's very beautiful. ✓</p>
{{ex:She's very beautiful.|/ʃiz ˈveri ˈbjuːtɪfl/|เธอสวยมาก}}{{ex:I'm hungry.|/aɪm ˈhʌŋgri/|ฉันหิว}}{{ex:She's at work.|/ʃiz ət ˈwɜːrk/|เธออยู่ที่ทำงาน}}{{ex:Are you okay?|/ər ju oʊˈkeɪ/|เป็นอะไรหรือเปล่า}}
<p>Verb to be เปลี่ยนตามประธาน: <b>I am</b> / <b>you we they are</b> / <b>he she it is</b> และเวลาพูดมักใช้รูปย่อ: I'm you're she's</p>
<h3>สองแบบเทียบกัน</h3>
<div class="tbl"><table><tr><th></th><th>Verb to be</th><th>กริยาแท้</th></tr><tr><td>ใช้กับ</td><td>เป็นใคร อยู่ที่ไหน รู้สึกหรือมีสภาพอย่างไร</td><td>การกระทำ นิสัย ความชอบ (กิน อยู่ ชอบ)</td></tr><tr><td>ตัวอย่าง</td><td class="k">I am tired.</td><td class="k">I like coffee.</td></tr><tr><td>ปฏิเสธ</td><td class="k">I'm not tired.</td><td class="k">I don't like coffee.</td></tr><tr><td>คำถาม</td><td class="k">Are you tired?</td><td class="k">Do you like coffee?</td></tr></table></div>
<h3>ห้ามใส่ Verb to be หน้ากริยาแท้</h3>
<p>อีกด้านหนึ่ง คนไทยจำนวนมากใส่ am is are หน้ากริยาแท้ เพราะคิดว่าเป็นคำที่ต้องมีในประโยคบอกเล่า: I am go to school. ✗ → I go to school. ✓</p>
{{ex:I like Thai food.|/aɪ ˈlaɪk ˈtaɪ ˈfuːd/|ฉันชอบอาหารไทย (I am like ✗)}}{{ex:I live in Chiang Mai.|/aɪ ˈlɪv ɪn ˌtʃɑːŋ ˈmaɪ/|ฉันอยู่เชียงใหม่ (I am live ✗)}}
<h3>he she it: กริยาเติม -s</h3>
<p>ภาษาไทยไม่เปลี่ยนกริยาตามประธาน แต่ถ้าประธานเป็นเอกพจน์บุรุษที่ 3 (he she it หรือคนคนเดียวที่ไม่ใช่ฉันหรือคุณ) กริยาแท้ใน Present Simple Tense ต้องเติม <b>-s</b> และต้องออกเสียง s ท้ายคำให้ได้ยินด้วย ประโยคปฏิเสธและคำถามใช้ <b>does</b> แล้วกริยาไม่เติม -s อีก</p>
{{ex:My brother works in Bangkok.|/maɪ ˈbrʌðər ˈwɜːrks ɪn ˈbæŋkɑːk/|พี่ชายฉันทำงานที่กรุงเทพฯ}}{{ex:Does he speak English?|/dəz hi ˈspiːk ˈɪŋglɪʃ/|เขาพูดภาษาอังกฤษได้ไหม}}{{ex:She doesn't eat meat.|/ʃi ˈdʌznt ˈiːt ˈmiːt/|เธอไม่กินเนื้อสัตว์}}
<div class="tip">ถ้าไม่แน่ใจ ให้ถามตัวเองว่า: ในประโยคนี้มี<b>กริยาอื่นนอกจาก be</b> (like live want go) หรือเปล่า ถ้ามี ใช้ do / does ถ้าไม่มี (บอกว่าเป็นใคร อยู่ที่ไหน หรือรู้สึกอย่างไร) ใช้ Verb to be</div>`},

{ id:"polite", title:"4 · ขอร้องอย่างสุภาพ", blurb:"ภาษาอังกฤษไม่มี ครับ ค่ะ แต่สุภาพได้ด้วย Can you → Could you → Would you mind เลิกพูด Give me ได้แล้ว", deck:"ภาษาอังกฤษเอาตัวรอด 1", body:`
<p>ภาษาไทยทำให้ประโยคสุภาพด้วยคำลงท้ายอย่าง ครับ ค่ะ หรือ นะ แต่ภาษาอังกฤษไม่มีคำแบบนั้น ความสุภาพอยู่ที่<b>รูปประโยคที่ใช้ขอร้อง</b> และคำอย่าง please could would ประโยคคำสั่งเปล่า ๆ อย่าง Give me water. ฟังห้วนมากในภาษาอังกฤษ แม้คนไทยจะคิดว่าเติม นะ ในใจแล้วก็ตาม</p>
<h3>บันไดความสุภาพ</h3>
<div class="tbl"><table><tr><th>รูปประโยค</th><th>ความรู้สึก</th><th>ใช้กับใคร</th></tr><tr><td class="k">Give me ~.</td><td>คำสั่ง ฟังไม่สุภาพ</td><td>ไม่ควรใช้</td></tr><tr><td class="k">Can you ~?</td><td>ขอร้องแบบเป็นกันเอง</td><td>เพื่อน ร้านค้า</td></tr><tr><td class="k">Could you ~?</td><td>ขอร้องอย่างสุภาพ</td><td>คนแปลกหน้า ที่ทำงาน ลูกค้า</td></tr><tr><td class="k">Would you mind ~ing?</td><td>สุภาพมาก</td><td>ขอเรื่องใหญ่ ผู้ใหญ่ หัวหน้า</td></tr></table></div>
{{ex:Could you help me?|/kəd ju ˈhelp mi/|ช่วยฉันหน่อยได้ไหม}}{{ex:Could you say that again?|/kəd ju ˈseɪ ˈðæt əˈgen/|ช่วยพูดอีกครั้งได้ไหม}}{{ex:Would you mind taking a picture of us?|/wəd ju ˈmaɪnd ˈteɪkɪŋ ə ˈpɪktʃər əv əs/|รบกวนช่วยถ่ายรูปให้พวกเราหน่อยได้ไหม}}
<h3>เวลาสั่งของ: Can I get ~? / I'd like ~</h3>
<p>“ขอ…หน่อย” ในภาษาไทยตรงกับ <b>Can I get ~?</b> หรือ <b>Could I have ~?</b> ไม่ใช่ I want ~ ซึ่งฟังเหมือนเด็กงอแงขอของ</p>
{{ex:Can I get a latte, please?|/kən aɪ ˈget ə ˈlɑːteɪ ˈpliːz/|ขอลาเต้หนึ่งแก้ว}}{{ex:I'd like a window seat.|/aɪd ˈlaɪk ə ˈwɪndoʊ ˈsiːt/|ขอที่นั่งริมหน้าต่าง}}
<p>ตอนจะจ่ายเงินที่ร้านอาหาร อย่าพูดว่า Check bill! ให้พูดว่า <b>Check, please.</b> หรือ <b>Can we get the check, please?</b></p>
<h3>กับดักของ Would you mind…?</h3>
<p>mind แปลว่า “รังเกียจ ขัดข้อง” คำตอบ <b>No</b> จึงแปลว่า “ได้เลย ไม่ขัดข้อง”</p>
{{ex:Would you mind opening the window?|/wəd ju ˈmaɪnd ˈoʊpənɪŋ ðə ˈwɪndoʊ/|รบกวนเปิดหน้าต่างหน่อยได้ไหม}}{{ex:No, not at all.|/ˈnoʊ ˈnɑːt ət ˈɔːl/|ได้เลย (ไม่ขัดข้องเลย)}}
<div class="tip">คำว่า <b>please</b> และ <b>thank you</b> ใช้เท่าไรก็ไม่มากเกินไป แค่เติม please ท้ายประโยคก็นุ่มนวลขึ้นมาก และใช้แทน ครับ ค่ะ ได้ดี น้ำเสียงก็สำคัญ: ขึ้นเสียงท้ายเล็กน้อยฟังเป็นการขอร้อง ลงเสียงท้ายฟังเป็นคำสั่ง</div>`},

{ id:"tense", title:"5 · สรุป Tense: ปัจจุบัน อดีต อนาคต", blurb:"คำบอกเวลาไม่ได้แทน Tense: นิสัยใช้ Present Simple ตอนนี้ใช้ be + -ing แผนใช้ going to", deck:"คุยเล่น", body:`
<p>ภาษาไทยไม่เปลี่ยนรูปกริยาเลย “ฉันกินข้าว” ใช้ได้ทั้งนิสัย สิ่งที่ทำอยู่ตอนนี้ และเรื่องที่ผ่านไปแล้ว เพราะเราบอกเวลาด้วยคำอย่าง เมื่อวาน ตอนนี้ แล้ว กำลัง จะ แต่ภาษาอังกฤษต้อง<b>เปลี่ยนรูปกริยา</b>ทุกครั้ง และคำบอกเวลาเป็นแค่ส่วนเสริม ไม่ได้แทน Tense: Yesterday I eat rice. ✗ → Yesterday I ate rice. ✓</p>
<h3>Present Simple กับ Present Continuous</h3>
<div class="tbl"><table><tr><th>รูป</th><th>ใช้เมื่อ</th><th>ตัวอย่าง</th></tr><tr><td class="k">Present Simple</td><td>นิสัย สิ่งที่เป็นจริงเสมอ</td><td>I drink coffee every morning.</td></tr><tr><td class="k">be + -ing</td><td>กำลังทำอยู่ตอนนี้ / นัดที่ตกลงไว้แล้วในเร็ว ๆ นี้</td><td>I'm drinking coffee right now.</td></tr></table></div>
<p>กำลัง ตรงกับ be + -ing แต่ be ตัดทิ้งไม่ได้: She studying. ✗ → She's studying. ✓</p>
{{ex:I work at a bank.|/aɪ ˈwɜːrk ət ə ˈbæŋk/|ฉันทำงานที่ธนาคาร (เป็นประจำ)}}{{ex:I'm working from home today.|/aɪm ˈwɜːrkɪŋ frəm ˈhoʊm təˈdeɪ/|วันนี้ฉันทำงานที่บ้าน}}
<h3>Past Simple</h3>
<p>กริยาปกติเติม <b>-ed</b> แต่กริยาที่ใช้บ่อยส่วนใหญ่เป็นกริยาไม่ปกติ: go → went, eat → ate, see → saw, have → had, get → got คำว่า แล้ว หรือ เมื่อวาน ไม่ได้ทำหน้าที่แทน -ed หรือกริยาช่อง 2</p>
{{ex:I went to the beach last weekend.|/aɪ ˈwent tə ðə ˈbiːtʃ ˈlæst ˈwiːkend/|สุดสัปดาห์ที่แล้วฉันไปทะเล}}{{ex:Did you have fun?|/dɪd ju ˈhæv ˈfʌn/|สนุกไหม}}
<h3>อนาคต: will กับ be going to</h3>
<p>ภาษาไทยใช้ จะ คำเดียว แต่ภาษาอังกฤษแยกเป็นสองแบบ</p>
<div class="tbl"><table><tr><th></th><th>ใช้เมื่อ</th><th>ตัวอย่าง</th></tr><tr><td class="k">will</td><td>ตัดสินใจตอนพูด สัญญา</td><td>I'll get the door!</td></tr><tr><td class="k">be going to</td><td>แผนที่วางไว้ก่อนแล้ว</td><td>I'm going to visit Phuket next month.</td></tr></table></div>
{{ex:I'll call you later.|/aɪl ˈkɔːl ju ˈleɪtər/|เดี๋ยวโทรหาทีหลัง}}{{ex:I'm going to take a cooking class.|/aɪm ˈgoʊɪŋ tə ˈteɪk ə ˈkʊkɪŋ ˈklæs/|ฉันจะไปเรียนทำอาหาร}}
<p>เวลาพูด going to มักฟังเป็น <b>gonna</b> แต่เวลาเขียนให้ใช้ going to</p>
<div class="tip">ตอบ How was your weekend? ด้วย Past Simple และตอบ Any plans for the weekend? ด้วย going to วิธีที่ง่ายที่สุดคือใช้ Tense เดียวกับคำถาม บทเรียนเรื่องคำบอกเวลาภาษาไทย (แล้ว กำลัง จะ เคย ยัง) จะกลับมาเรื่องนี้อีกครั้ง</div>`},

{ id:"prep", title:"6 · คำบุพบท in / on / at", blurb:"ที่ กับ ใน ในภาษาไทยแตกออกเป็นสามคำ: กว้างใช้ in วันใช้ on จุดเดียวใช้ at", deck:"ตัวเลข เวลา และวันที่", body:`
<p>ภาษาไทยใช้ ที่ กับ ใน เกือบทุกกรณี แต่ภาษาอังกฤษแบ่งเป็น<b>คำบุพบท</b>สามคำ คือ in on at ทั้งเรื่องเวลาและสถานที่ หลักง่าย ๆ คือ <b>ยิ่งกว้างยิ่งใช้ in ยิ่งแคบยิ่งใช้ at</b> แล้วส่วนใหญ่จะถูก</p>
<h3>เวลา</h3>
<div class="tbl"><table><tr><th>คำบุพบท</th><th>ขอบเขต</th><th>ตัวอย่าง</th></tr><tr><td class="k">in</td><td>เดือน ปี ฤดู ช่วงเวลาของวัน</td><td>in May, in 2026, in summer, in the morning</td></tr><tr><td class="k">on</td><td>วันในสัปดาห์ วันที่ วันสำคัญ</td><td>on Monday, on May 3rd, on my birthday</td></tr><tr><td class="k">at</td><td>เวลาที่แน่นอน ช่วงเวลาสั้น ๆ</td><td>at 7, at noon, at night</td></tr></table></div>
{{ex:See you on Friday.|/ˈsiː ju ɑːn ˈfraɪdeɪ/|เจอกันวันศุกร์}}{{ex:The meeting is at three.|/ðə ˈmiːtɪŋ ɪz ət ˈθriː/|ประชุมตอนบ่ายสามโมง}}{{ex:I was born in 1998.|/aɪ wəz ˈbɔːrn ɪn ˌnaɪnˈtiːn ˌnaɪnti ˈeɪt/|ฉันเกิดปี 1998}}
<h3>สถานที่</h3>
<div class="tbl"><table><tr><th>คำบุพบท</th><th>ความรู้สึก</th><th>ตัวอย่าง</th></tr><tr><td class="k">in</td><td>อยู่ข้างในพื้นที่ เมือง ประเทศ</td><td>in the car, in the taxi, in Bangkok, in Thailand</td></tr><tr><td class="k">on</td><td>อยู่บนพื้นผิว ถนน รถสาธารณะคันใหญ่</td><td>on the table, on Sukhumvit Road, on the bus</td></tr><tr><td class="k">at</td><td>จุดหนึ่ง สถานที่ที่ไปเพื่อทำกิจกรรม</td><td>at the station, at work, at home</td></tr></table></div>
<p>ระวัง: รถแท็กซี่และรถยนต์ใช้ in ไม่ใช่ at: at the taxi ✗ → in the taxi ✓ แต่รถบัส รถไฟฟ้า และเครื่องบินใช้ on</p>
{{ex:I'm on the bus.|/aɪm ɑːn ðə ˈbʌs/|ฉันอยู่บนรถบัส}}{{ex:Let's meet at the station.|/ˈlets ˈmiːt ət ðə ˈsteɪʃn/|เจอกันที่สถานี}}
<h3>กรณีที่ไม่ใช้คำบุพบท</h3>
<p>หน้า <b>next last this every tomorrow yesterday</b> ไม่ใช้คำบุพบท และ กับ ในภาษาไทยก็ไม่ได้แปลว่า with เสมอไป: I stay with home. ✗ → I stay home. ✓</p>
{{ex:See you next week.|/ˈsiː ju ˈnekst ˈwiːk/|เจอกันสัปดาห์หน้า (on next week ✗)}}
<div class="tip">ข้อยกเว้นที่ควรจำ: <b>at night</b> (ตอนกลางคืน) แต่ <b>in the morning / afternoon / evening</b> ส่วนสุดสัปดาห์ อังกฤษแบบอเมริกันใช้ <b>on the weekend</b> อังกฤษแบบบริติชใช้ <b>at the weekend</b></div>`},

{ id:"smalltalk", title:"7 · วัฒนธรรมการคุยเล่น", blurb:"How are you? คือคำทักทาย ไม่ใช่คำถามจริง ๆ เรื่องที่คุยได้สบายใจกับเรื่องที่ควรเลี่ยง", deck:"คุยเล่น", body:`
<p>ในประเทศที่ใช้ภาษาอังกฤษ คนมักคุยเล่นกับคนที่ไม่รู้จักในลิฟต์ ที่จุดชำระเงิน หรือก่อนเริ่มประชุม ไม่ใช่บทสนทนาลึกซึ้ง แต่เป็น<b>บทสนทนาสั้น ๆ ที่ทำให้บรรยากาศเป็นกันเอง</b> (small talk)</p>
<h3>How are you? คือคำทักทาย</h3>
<p>เหมือน “ไปไหนมา” หรือ “กินข้าวหรือยัง” ในภาษาไทย ที่ไม่ได้อยากรู้คำตอบจริง ๆ ตอบสั้น ๆ แล้ว<b>ถามกลับ</b>ก็พอ แต่กลับกัน ถ้าถามคนต่างชาติว่า Have you eaten? หรือ Where are you going? เขาจะคิดว่าเป็นคำถามจริง และอาจงงว่าทำไมถาม</p>
{{ex:Hey, how's it going?|/ˈheɪ ˈhaʊz ɪt ˈgoʊɪŋ/|หวัดดี เป็นไงบ้าง}}{{ex:Pretty good! How about you?|/ˈprɪti ˈgʊd ‖ ˈhaʊ əbaʊt ˈjuː/|สบายดี แล้วคุณล่ะ}}
<h3>เรื่องที่คุยได้กับเรื่องที่ควรเลี่ยง</h3>
<div class="tbl"><table><tr><th>คุยได้สบายใจ</th><th>เลี่ยงเมื่อเพิ่งรู้จัก</th></tr><tr><td>อากาศ (ร้อนมาก ฝนตก) แผนวันหยุด</td><td>อายุ สถานะแต่งงานหรือแฟน</td></tr><tr><td>อาหาร ร้านอร่อย การท่องเที่ยว</td><td>น้ำหนักและรูปร่าง (“อ้วนขึ้นนะ”)</td></tr><tr><td>หนัง ซีรีส์ กีฬา</td><td>เงินเดือน ราคาบ้าน</td></tr><tr><td>งาน (แบบเบา ๆ) ย่านที่อยู่</td><td>การเมือง ศาสนา</td></tr></table></div>
<p>ในไทย การทักเรื่องน้ำหนักหรือถามอายุเป็นเรื่องปกติ แต่ในภาษาอังกฤษถือว่าเสียมารยาท แม้จะพูดด้วยความเป็นห่วงก็ตาม</p>
<h3>ทำให้บทสนทนาไม่สะดุด</h3>
<p>ตอบคำถาม + <b>เล่าเพิ่มอีกหนึ่งเรื่อง</b> + <b>ถามกลับ</b> แค่สามจังหวะนี้บทสนทนาก็ไม่เงียบ</p>
{{ex:It was great! I went hiking. What about you?|/ɪt wəz ˈgreɪt ‖ aɪ ˈwent ˈhaɪkɪŋ ‖ ˈwʌt əbaʊt ˈjuː/|ดีมาก ฉันไปเดินป่ามา แล้วคุณล่ะ}}
<p>การตอบรับก็สำคัญ: <b>Oh, really?</b> / <b>That sounds fun!</b> / <b>No way!</b> / <b>I know, right?</b></p>
<h3>จบบทสนทนาอย่างเป็นธรรมชาติ</h3>
{{ex:Well, I should get going.|/ˈwel aɪ ʃəd ˈget ˈgoʊɪŋ/|งั้นฉันขอตัวก่อน}}{{ex:It was nice talking to you.|/ɪt wəz ˈnaɪs ˈtɔːkɪŋ tə ju/|ดีใจที่ได้คุยกัน}}
<div class="tip">ถ้าจะเห็นด้วยกับประโยคปฏิเสธ ใช้ <b>Me neither</b>: “I don't like horror movies.” → “Me neither.” (ไม่ใช่ Me too) ภาษาไทยพูดว่า “เหมือนกัน” ได้ทั้งสองกรณี แต่ภาษาอังกฤษต้องแยก</div>`},

{ id:"phrasal", title:"8 · 구동사 입문", blurb:"동사 + 작은 단어 = 완전히 새로운 뜻. 원어민 대화의 절반이에요.", deck:"구동사", body:`
<p>구동사(phrasal verb)는 <b>동사 + up/out/off/on 같은 작은 단어</b>가 합쳐져 새로운 뜻을 만든 거예요. 교과서식 단어(postpone, discover)보다 일상 대화에서 훨씬 많이 들려요.</p>
<div class="tbl"><table><tr><th>딱딱한 단어</th><th>구동사 (일상)</th><th>뜻</th></tr><tr><td>postpone</td><td class="k">put off</td><td>미루다</td></tr><tr><td>discover</td><td class="k">find out</td><td>알게 되다</td></tr><tr><td>exercise</td><td class="k">work out</td><td>운동하다</td></tr><tr><td>tolerate</td><td class="k">put up with</td><td>참다</td></tr></table></div>
<h3>작은 단어에 힌트가 있어요</h3>
<p><b>up</b>은 '완전히·위로', <b>out</b>은 '밖으로·끝까지', <b>off</b>는 '떨어져·멈춤', <b>on</b>은 '붙어서·계속'이라는 느낌이 있어요.</p>
{{ex:I grew up in Daegu.|아이 그루 업 인 대구|대구에서 자랐어요}}{{ex:We ran out of milk.|위 래나우로브 밀크|우유가 다 떨어졌어요}}{{ex:Turn off your phone, please.|터노프 유어 폰, 플리즈|휴대폰 꺼 주세요}}
<h3>대명사는 가운데에!</h3>
<p>목적어를 받는 구동사 중 많은 것은 둘로 나눌 수 있어요. 명사는 앞뒤 어디든 괜찮지만, <b>it·them·me 같은 대명사는 반드시 가운데</b>에 와요.</p>
{{ex:Turn on the light. / Turn the light on.|턴 온 더 라잇 / 턴 더 라잇 온|불 켜 줘 (둘 다 O)}}{{ex:Turn it on.|터니론|그거 켜 줘 (turn on it X)}}{{ex:I'll pick you up at seven.|아일 픽 유 업 앳 쎄븐|7시에 데리러 갈게}}
<h3>나눌 수 없는 구동사</h3>
<p>look after, look for, get along with처럼 전치사가 붙는 것은 나누지 않아요: <i>look after my cat</i>, <i>look after her</i>.</p>
<div class="tip">구동사는 단어처럼 <b>통째로</b> 외우세요. 예문과 함께 외우면 대명사 위치도 자연스럽게 익혀져요. 하루에 세 개씩만 실제로 써 보세요!</div>`},

{ id:"numbers", title:"9 · 숫자·시간·가격 말하기", blurb:"'만'이 없는 영어 숫자, 13과 30 구분, 가격 읽는 법.", deck:"숫자·시간·날짜", body:`
<p>숫자는 여행과 일에서 바로 쓰이는데, 한국어와 단위가 달라서 실수가 많아요.</p>
<h3>세 자리씩 끊어요</h3>
<p>한국어는 네 자리(만, 억), 영어는 <b>세 자리(thousand, million, billion)</b>로 끊어요. 쉼표 위치가 바로 단위예요.</p>
<div class="tbl"><table><tr><th>숫자</th><th>한국어</th><th>영어</th></tr><tr><td class="k">10,000</td><td>만</td><td>ten thousand</td></tr><tr><td class="k">50,000</td><td>오만</td><td>fifty thousand</td></tr><tr><td class="k">100,000</td><td>십만</td><td>one hundred thousand</td></tr><tr><td class="k">1,000,000</td><td>백만</td><td>one million</td></tr><tr><td class="k">100,000,000</td><td>일억</td><td>one hundred million</td></tr></table></div>
<h3>-teen과 -ty</h3>
<p>13~19는 <b>뒤</b>를, 30·40·50…은 <b>앞</b>을 세게 말해요. 미국식 thirty는 t가 굴러서 "써리"처럼 들려요.</p>
{{ex:thirteen|써틴|숫자 13}}{{ex:thirty|써리|숫자 30}}{{ex:fifteen / fifty|피프틴 / 피프티|숫자 15 / 50}}
<h3>시간</h3>
<p>가장 쉬운 방법은 시와 분을 그대로 읽는 거예요. 1~9분은 "oh"를 붙여요.</p>
{{ex:It's seven fifteen.|잇츠 쎄븐 피프틴|7시 15분이에요}}{{ex:It's nine oh five.|잇츠 나인 오 파이브|9시 5분이에요}}{{ex:It's a quarter past ten.|잇츠 어 쿼러 패스트 텐|10시 15분이에요}}
<h3>가격과 연도</h3>
<p>가격은 달러와 센트를 따로 읽거나, 그냥 숫자 두 개로 읽어요. 연도는 두 자리씩 끊어요.</p>
{{ex:It's four ninety-nine.|잇츠 포 나인티나인|4달러 99센트예요}}{{ex:That's twelve fifty.|댓츠 트웰브 피프티|12달러 50센트입니다}}{{ex:twenty twenty-six|트웬티 트웬티식스|2026년}}
<div class="tip">날짜 표기 주의! 미국은 <b>월/일</b>(5/3 = 5월 3일), 영국은 <b>일/월</b>(5/3 = 3월 5일)이에요. 헷갈리면 May 3rd처럼 월을 글자로 쓰는 게 안전해요.</div>`},

{ id:"email", title:"10 · 이메일 영어", blurb:"인사 → 목적 → 요청 → 마무리. 짧고 분명하게.", deck:"직장·이메일", body:`
<p>영어 업무 이메일은 <b>짧고, 목적이 분명하고, 친절하게</b>가 원칙이에요. 한국식으로 길게 사과하거나 겸손을 표현하면 오히려 요점이 흐려져요.</p>
<h3>기본 구조</h3>
<div class="tbl"><table><tr><th>부분</th><th>예시</th></tr><tr><td>인사</td><td class="k">Hi Sarah, / Dear Mr. Smith,</td></tr><tr><td>첫 줄 (안부·목적)</td><td class="k">I hope you're doing well. I'm writing to ask about…</td></tr><tr><td>본문 (요청)</td><td class="k">Could you send me… by Friday?</td></tr><tr><td>마무리</td><td class="k">Let me know if you have any questions.</td></tr><tr><td>맺음말</td><td class="k">Best regards, / Best, / Thanks,</td></tr></table></div>
<h3>인사는 Hi가 기본</h3>
<p>미국 회사에서는 처음 연락하는 사람에게도 <b>Hi + 이름</b>이 무난해요. 아주 격식 있는 경우에만 Dear를 써요. 이름 대신 직함만 쓰는 건(Dear Manager) 어색해요.</p>
{{ex:I hope this email finds you well.|아이 호프 디스 이메일 파인즈 유 웰|잘 지내고 계시길 바랍니다}}{{ex:I'm writing to follow up on our meeting.|아임 롸이팅 투 팔로우 업 온 아워 미팅|지난 회의 관련해서 후속으로 연락드립니다}}
<h3>요청은 부드럽게, 기한은 분명하게</h3>
{{ex:Could you send me the report by Thursday?|쿠쥬 쎈드 미 더 리포트 바이 써즈데이?|목요일까지 보고서 보내 주실 수 있나요?}}{{ex:Thanks for your patience.|땡스 포 유어 페이션스|기다려 주셔서 감사합니다}}
<p>ASAP는 상대를 재촉하는 느낌이 있어요. 가능하면 <b>by + 날짜</b>로 기한을 주세요.</p>
<h3>"수고하셨습니다"는?</h3>
<p>영어에 딱 맞는 말은 없어요. 상황에 맞게 바꿔 말해요.</p>
<ul><li>프로젝트가 끝났을 때: <b>Thanks for all your hard work!</b></li><li>금요일 이메일 끝: <b>Have a great weekend!</b></li><li>도움을 받았을 때: <b>I really appreciate your help.</b></li></ul>
<div class="tip">"Sorry for the late reply"를 매번 쓸 필요는 없어요. 대신 <b>Thanks for your patience</b>를 쓰면 사과 없이도 예의 바르고 긍정적으로 들려요.</div>`},

{ id:"idioms", title:"11 · 관용구와 슬랭 쓰는 법", blurb:"직역하면 이상한 표현들. 언제, 누구에게 써야 할까요?", deck:"영어 관용구", body:`
<p>관용구(idiom)는 단어 뜻을 합쳐도 전체 뜻이 나오지 않는 표현이에요. "a piece of cake"는 케이크 이야기가 아니라 "아주 쉽다"는 뜻이죠. 영화·드라마를 자막 없이 보려면 꼭 알아야 해요.</p>
<h3>그림으로 기억하세요</h3>
<p>대부분의 관용구는 머릿속에 장면을 그리면 쉽게 외워져요.</p>
{{ex:It's a piece of cake.|잇츠 어 피스 오브 케익|식은 죽 먹기예요 (케이크 한 조각 먹듯 쉽다)}}{{ex:It costs an arm and a leg.|잇 코스츠 언 암 앤 어 레그|엄청 비싸요 (팔다리를 줘야 할 만큼)}}{{ex:I'm all ears.|아임 올 이어즈|잘 듣고 있어요 (온몸이 귀)}}
<h3>한국어와 비슷한 표현</h3>
<div class="tbl"><table><tr><th>영어</th><th>한국어</th></tr><tr><td class="k">Speak of the devil!</td><td>호랑이도 제 말 하면 온다</td></tr><tr><td class="k">Kill two birds with one stone</td><td>일석이조</td></tr><tr><td class="k">When pigs fly</td><td>해가 서쪽에서 뜨면</td></tr><tr><td class="k">A blessing in disguise</td><td>전화위복</td></tr></table></div>
<h3>관용구 vs 슬랭</h3>
<p><b>관용구</b>는 오래된 표현이라 나이와 상관없이, 직장에서도 써요(Let's call it a day). <b>슬랭</b>은 젊은 층의 유행어라 친구끼리만 써요(No cap, That song slaps). 슬랭은 빨리 바뀌고, 어른이 쓰면 어색하게 들릴 수도 있어요.</p>
{{ex:Let's call it a day.|렛츠 콜 잇 어 데이|오늘은 여기까지 해요 (회의에서도 OK)}}{{ex:No cap, this is the best pizza ever.|노 캡, 디스 이즈 더 베스트 핏자 에버|진짜로, 이거 인생 피자야 (친구끼리만)}}
<div class="tip">관용구는 너무 많이 넣으면 오히려 부자연스러워요. 대화 한 번에 하나 정도, 상황에 딱 맞을 때 쓰면 "영어 잘한다!"는 인상을 줄 수 있어요.</div>`}
];

exports.CHECKS = {
  pron: [
    ["ตอนออกเสียง R ปลายลิ้นอยู่ตรงไหน", ["แตะปุ่มเหงือกหลังฟันบน","ยื่นออกมาระหว่างฟัน","ไม่แตะตรงไหนเลย","แตะริมฝีปากล่าง"], 2, "R ปลายลิ้นไม่แตะตรงไหนเลย ถ้าแตะปุ่มเหงือกจะกลายเป็น L"],
    ["ออกเสียง th ใน think อย่างไร", ["ยื่นปลายลิ้นออกมาระหว่างฟันเล็กน้อยแล้วปล่อยลม","ปิดริมฝีปากทั้งสองข้างแล้วเปิดออก","ให้ฟันบนแตะริมฝีปากล่าง","ม้วนลิ้นไปข้างหลัง"], 0, "TH ต้องเห็นปลายลิ้นอยู่ระหว่างฟัน ถ้าใช้เสียง ซ จะกลายเป็น sink"],
    ["hotel เน้นเสียงพยางค์ไหน", ["ho (พยางค์แรก)","ไม่มีการเน้นเสียง","เน้นเท่ากันทั้งสองพยางค์","tel (พยางค์หลัง)"], 3, "ho-TEL เน้นพยางค์หลังให้ดังและยาวกว่า ไม่พูดทุกพยางค์เท่ากัน"]
  ],
  articles: [
    ["I'm ___ engineer. ช่องว่างควรเติมคำใด", ["a","an","the","(ไม่ใส่)"], 1, "engineer ขึ้นต้นด้วยเสียงสระ จึงใช้ an และหน้าอาชีพต้องมีคำนำหน้านามเสมอ"],
    ["นั่งอยู่ในร้านอาหารแล้วพูดกับพนักงาน: Can I see ___ menu?", ["the","a","an","(ไม่ใส่)"], 0, "เป็นเมนูของร้านนี้ที่ทั้งสองฝ่ายรู้ว่าอันไหน จึงใช้ the"],
    ["“ฉันชอบแมว” (หมายถึงแมวทั้งประเภท)", ["I like a cat.","I like the cat.","I like cat.","I like cats."], 3, "พูดถึงทั้งประเภทใช้รูปพหูพจน์และไม่ใช้คำนำหน้านาม a cat คือแมวตัวหนึ่ง the cat คือแมวตัวนั้น"]
  ],
  be: [
    ["เลือกประโยคที่ถูกต้อง", ["I am like K-pop.","I like K-pop.","I liking K-pop.","I am likes K-pop."], 1, "like เป็นกริยาแท้ จึงไม่ใช้ Verb to be (am) คู่กัน"],
    ["“พี่สาวฉันอยู่ที่โซล” ภาษาอังกฤษพูดว่าอย่างไร", ["My sister live in Seoul.","My sister is live in Seoul.","My sister living in Seoul.","My sister lives in Seoul."], 3, "ประธานเป็นเอกพจน์บุรุษที่ 3 (she) กริยาต้องเติม -s: lives"],
    ["ถ้าจะตอบ Are you hungry? ว่า “ไม่หิว” ตอบอย่างไร", ["No, I don't.","No, I'm not.","No, I amn't.","No, I doesn't."], 1, "ถามด้วย Verb to be ก็ตอบด้วย Verb to be: No, I'm not."]
  ],
  polite: [
    ["ข้อไหนเป็นการขอร้องคนแปลกหน้าที่สุภาพที่สุด", ["Give me directions.","I want directions.","Could you give me directions?","Directions, now."], 2, "Could you ~? คือรูปพื้นฐานของการขอร้องอย่างสุภาพ ส่วน Give me ฟังเหมือนคำสั่ง"],
    ["คำตอบของ Would you mind opening the window? ข้อไหนแปลว่า “ได้เลย เดี๋ยวเปิดให้”", ["No, not at all.","Yes, I mind.","Yes, I would.","No, I can't."], 0, "mind แปลว่า รังเกียจ การตอบ No (ไม่รังเกียจ) จึงแปลว่า ยินดีทำให้"],
    ["กริยาหลัง Would you mind ต้องเป็นรูปไหน", ["กริยาช่อง 1 (open)","to + กริยาช่อง 1 (to open)","กริยาช่อง 2 (opened)","รูป -ing (opening)"], 3, "หลัง mind ใช้รูป -ing: Would you mind waiting?"]
  ],
  tense: [
    ["“ฉันดื่มกาแฟทุกเช้า” (เป็นนิสัย)", ["I'm drinking coffee every morning.","I drank coffee every morning.","I drink coffee every morning.","I will drink coffee every morning."], 2, "นิสัยใช้ Present Simple Tense ส่วน be + -ing แปลว่ากำลังดื่มอยู่ตอนนี้"],
    ["เห็นว่าเพื่อนลืมกระเป๋าสตางค์ แล้วพูดทันทีว่า “ฉันจ่ายเอง!”", ["I'll pay!","I'm going to pay!","I pay!","I paid!"], 0, "ตัดสินใจตอนพูดใช้ will ส่วน going to ใช้กับแผนที่วางไว้ก่อน"],
    ["กริยาช่อง 2 ของ go", ["goed","gone","going","went"], 3, "go เป็นกริยาไม่ปกติ: go - went - gone"]
  ],
  prep: [
    ["“เจอกันตอน 7 โมง” = Let's meet ___ 7.", ["in","at","on","to"], 1, "หน้าเวลาที่แน่นอนใช้ at"],
    ["“วันจันทร์” = ___ Monday", ["on","in","at","by"], 0, "หน้าวันในสัปดาห์และวันที่ใช้ on"],
    ["เลือกประโยคที่ถูกต้อง", ["See you on next week.","See you at next week.","See you in next week.","See you next week."], 3, "หน้า next last this every ไม่ใช้คำบุพบท"]
  ],
  smalltalk: [
    ["พนักงานคาเฟ่ทักว่า How are you today? ตอบแบบไหนเป็นธรรมชาติที่สุด", ["Why do you ask?","Good, thanks! How about you?","I'm tired and my boss is mean.","Yes."], 1, "How are you? คือคำทักทาย ตอบสั้น ๆ แล้วถามกลับก็สมบูรณ์แบบ"],
    ["คำถามไหนควรเลี่ยงเมื่อเพิ่งรู้จักกัน", ["How was your weekend?","Have you been here before?","How old are you?","Do you like this place?"], 2, "ในวัฒนธรรมที่ใช้ภาษาอังกฤษ การถามอายุคนที่เพิ่งรู้จักอาจถือว่าเสียมารยาท ต่างจากในไทยที่ถามกันเป็นเรื่องปกติ"],
    ["อีกฝ่ายพูดว่า I don't like horror movies. ถ้าจะบอกว่า “ฉันก็ไม่ชอบเหมือนกัน” พูดว่าอย่างไร", ["Me too.","So do I.","Me neither.","Me also."], 2, "เห็นด้วยกับประโยคปฏิเสธใช้ Me neither (หรือ Neither do I)"]
  ],
  phrasal: [
    ["'그거 좀 꺼 줄래?' 올바른 문장은?", ["Can you turn off it?","Can you off turn it?","Can you turn it of?","Can you turn it off?"], 3, "대명사(it)는 구동사 가운데에 와요: turn it off."],
    ["run out of의 뜻은?", ["밖으로 뛰어나가다","~이 다 떨어지다","~에서 도망치다","늦게 도착하다"], 1, "We ran out of milk. = 우유가 다 떨어졌어요."],
    ["'회의를 다음 주로 미루자' =", ["Let's put off the meeting until next week.","Let's put on the meeting until next week.","Let's put up the meeting until next week.","Let's put out the meeting until next week."], 0, "put off = 미루다. put on은 '입다·켜다', put out은 '(불을) 끄다'예요."]
  ],
  numbers: [
    ["50,000(오만)을 영어로 하면?", ["five ten thousand","fifty hundred","five million","fifty thousand"], 3, "영어는 세 자리씩 끊어요: 50 + thousand = fifty thousand."],
    ["thirteen은 어디를 세게 말하나요?", ["thir (앞)","teen (뒤)","둘 다 똑같이","강세가 없다"], 1, "-teen 숫자는 뒤에 강세가 있어요. thirty는 앞이에요."],
    ["$12.50을 가장 자연스럽게 읽으면?", ["one two five zero","twelve fifty","twelve point five dollar","twelve dollar fifty cent"], 1, "가격은 숫자 두 덩어리로 읽어요: twelve fifty."]
  ],
  email: [
    ["처음 연락하는 거래처 담당자 Jenny Park에게 가장 무난한 인사는?", ["Hey dude,","Yo Jenny,","Hi Jenny,","To manager,"], 2, "미국 업무 이메일에선 Hi + 이름이 가장 무난해요. 아주 격식 있을 땐 Dear Ms. Park,"],
    ["프로젝트를 마친 팀에게 '수고하셨습니다'를 전하려면?", ["You suffered a lot.","Thanks for all your hard work!","Good suffering.","Please work harder."], 1, "영어엔 수고하셨습니다에 딱 맞는 말이 없어요. 노력에 고마움을 표현해요."],
    ["기한을 정중하게 요청하는 문장은?", ["Send it ASAP.","You must send it.","Send now.","Could you send it by Thursday?"], 3, "Could you ~? + by + 날짜로 부드럽지만 분명하게 요청해요."]
  ],
  idioms: [
    ["The test was a piece of cake.의 뜻은?", ["시험이 아주 쉬웠어요","시험 중에 케이크를 먹었어요","시험이 아주 어려웠어요","시험을 망쳤어요"], 0, "a piece of cake = 식은 죽 먹기."],
    ["I'm feeling under the weather.의 뜻은?", ["날씨가 나빠요","밖에 있어요","몸이 좀 안 좋아요","비를 맞았어요"], 2, "날씨와 상관없이 '컨디션이 안 좋다'는 뜻이에요."],
    ["회사 상사에게 보고할 때 쓰기에 가장 어색한 것은?", ["Let's call it a day.","Let's get the ball rolling.","I'll keep my fingers crossed.","No cap, this report slaps."], 3, "No cap, slaps는 친구끼리 쓰는 슬랭이에요. 관용구는 직장에서도 써요."]
  ]
};
