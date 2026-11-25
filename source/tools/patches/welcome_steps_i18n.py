#!/usr/bin/env python3
# WS-1: adds the four new welcome-screen lines to tools/i18n/<lang>/ui.json for every language. Safe to run twice.
# Then: python3 tools/i18n/build_keys.py && for each language: python3 tools/i18n/gen.py <lang> && node tools/i18n/validate.js <lang>
import json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
D = os.path.join(ROOT, 'tools', 'i18n')
K1 = 'I already have an account'
K2 = 'Save your progress across devices?'
K3 = 'Optional. Add your email and your progress follows you to any phone or computer. No password.'
K4 = 'Skip for now'
CTX = {K1: ('label', 'pre-native welcome step 1 (nickname): small button under Continue, opens the email sign-in step for someone returning on a new device'),
       K2: ('sentence', 'pre-native welcome step 2: heading over the optional email box, shown after the nickname step'),
       K3: ('sentence', 'pre-native welcome step 2: one paragraph under the heading; the email is optional, sign-in is by emailed link, no password'),
       K4: ('label', 'pre-native welcome step 2: button that finishes without an email (progress stays on this device)')}
T = {
 'ar': ['لدي حساب بالفعل', 'هل تريد حفظ تقدمك على كل الأجهزة؟', 'اختياري. أضف بريدك الإلكتروني ليرافقك تقدمك على أي هاتف أو حاسوب. بدون كلمة مرور.', 'تخطي الآن'],
 'bn': ['আমার আগে থেকেই অ্যাকাউন্ট আছে', 'আপনার অগ্রগতি সব ডিভাইসে সেভ করবেন?', 'ঐচ্ছিক। ইমেইল যোগ করলে যেকোনো ফোন বা কম্পিউটারে আপনার অগ্রগতি পাবেন। পাসওয়ার্ড লাগে না।', 'এখন বাদ দিন'],
 'ceb': ['Naa na koy account', 'I-save ang imong pag-uswag sa tanang device?', 'Opsyonal. Idugang ang imong email ug ang imong pag-uswag mouban nimo sa bisan unsang phone o computer. Walay password.', 'Laktawi sa karon'],
 'cs': ['Už mám účet', 'Ukládat tvůj pokrok na všech zařízeních?', 'Nepovinné. Přidej e-mail a tvůj pokrok tě bude provázet na každém telefonu i počítači. Bez hesla.', 'Zatím přeskočit'],
 'de': ['Ich habe schon ein Konto', 'Deinen Fortschritt auf allen Geräten speichern?', 'Optional. Gib deine E-Mail-Adresse an und dein Fortschritt begleitet dich auf jedes Handy und jeden Computer. Kein Passwort.', 'Vorerst überspringen'],
 'es': ['Ya tengo una cuenta', '¿Guardar tu progreso en todos tus dispositivos?', 'Opcional. Agrega tu correo y tu progreso te acompaña en cualquier teléfono o computadora. Sin contraseña.', 'Saltar por ahora'],
 'fr': ["J'ai déjà un compte", 'Sauvegarder ta progression sur tous tes appareils ?', "Facultatif. Ajoute ton e-mail et ta progression te suit sur n'importe quel téléphone ou ordinateur. Sans mot de passe.", "Passer pour l'instant"],
 'hi': ['मेरा अकाउंट पहले से है', 'अपनी प्रगति सभी डिवाइस पर सेव करें?', 'वैकल्पिक। अपना ईमेल जोड़ें और आपकी प्रगति किसी भी फ़ोन या कंप्यूटर पर आपके साथ रहेगी। पासवर्ड नहीं चाहिए।', 'अभी छोड़ें'],
 'hmn': ['Kuv twb muaj account lawm', 'Kaw cia koj cov Progress rau txhua cuab yeej siv?', 'Yog koj xav sau. Ntxiv koj tus email, koj cov Progress mus nrog koj rau txhua lub xov tooj los yog computer. Tsis siv lo lus zais.', 'Tom qab'],
 'id': ['Saya sudah punya akun', 'Simpan progresmu di semua perangkat?', 'Opsional. Tambahkan emailmu dan progresmu ikut ke ponsel atau komputer mana pun. Tanpa kata sandi.', 'Lewati dulu'],
 'it': ['Ho già un account', 'Salvare i tuoi progressi su tutti i dispositivi?', "Facoltativo. Aggiungi la tua e-mail e i tuoi progressi ti seguono su qualsiasi telefono o computer. Nessuna password.", 'Salta per ora'],
 'ja': ['アカウントをお持ちの方', '記録を複数の端末に保存しますか？', '任意です。メールアドレスを追加すると、どのスマホやパソコンでも記録を引き継げます。パスワードは不要です。', '今はスキップ'],
 'kn': ['ನನಗೆ ಈಗಾಗಲೇ ಖಾತೆ ಇದೆ', 'ನಿಮ್ಮ ಪ್ರಗತಿಯನ್ನು ಎಲ್ಲ ಸಾಧನಗಳಲ್ಲಿ ಉಳಿಸಬೇಕೇ?', 'ಐಚ್ಛಿಕ. ನಿಮ್ಮ ಇಮೇಲ್ ಸೇರಿಸಿದರೆ ಯಾವುದೇ ಫೋನ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಗತಿ ಸಿಗುತ್ತದೆ. ಪಾಸ್‌ವರ್ಡ್ ಬೇಕಿಲ್ಲ.', 'ಸದ್ಯಕ್ಕೆ ಬಿಟ್ಟುಬಿಡಿ'],
 'ko': ['이미 계정이 있어요', '진도를 여러 기기에 저장할까요?', '선택 사항이에요. 이메일을 추가하면 어느 휴대폰이나 컴퓨터에서도 진도가 이어져요. 비밀번호는 필요 없어요.', '나중에 하기'],
 'mr': ['माझं खातं आधीपासून आहे', 'तुमची प्रगती सर्व डिव्हाइसवर सेव्ह करायची?', 'ऐच्छिक. तुमचा ईमेल जोडा आणि तुमची प्रगती कोणत्याही फोन किंवा कॉम्प्युटरवर तुमच्यासोबत राहील. पासवर्ड लागत नाही.', 'आत्ता वगळा'],
 'nan': ['我已經有帳號矣', '你的進度欲佇各台裝置攏儲存無？', '毋是一定愛。加你的電子批，你的進度佇佗一支手機仔抑是電腦攏有。免密碼。', '這馬先跳過'],
 'pa': ['ਮੇਰਾ ਅਕਾਊਂਟ ਪਹਿਲਾਂ ਤੋਂ ਹੈ', 'ਆਪਣੀ ਤਰੱਕੀ ਹਰ ਡਿਵਾਈਸ ਉੱਤੇ ਸੇਵ ਕਰੀਏ?', 'ਮਰਜ਼ੀ ਹੈ। ਆਪਣੀ ਈਮੇਲ ਜੋੜੋ ਅਤੇ ਤੁਹਾਡੀ ਤਰੱਕੀ ਕਿਸੇ ਵੀ ਫ਼ੋਨ ਜਾਂ ਕੰਪਿਊਟਰ ਉੱਤੇ ਤੁਹਾਡੇ ਨਾਲ ਰਹੇਗੀ। ਪਾਸਵਰਡ ਨਹੀਂ ਚਾਹੀਦਾ।', 'ਹੁਣ ਲਈ ਛੱਡੋ'],
 'pl': ['Mam już konto', 'Zapisywać twoje postępy na wszystkich urządzeniach?', 'Opcjonalnie. Dodaj e-mail, a twoje postępy będą z tobą na każdym telefonie i komputerze. Bez hasła.', 'Na razie pomiń'],
 'pt': ['Já tenho uma conta', 'Salvar seu progresso em todos os dispositivos?', 'Opcional. Adicione seu e-mail e seu progresso acompanha você em qualquer celular ou computador. Sem senha.', 'Pular por enquanto'],
 'ru': ['У меня уже есть аккаунт', 'Сохранять твой прогресс на всех устройствах?', 'Необязательно. Добавь почту, и твой прогресс будет с тобой на любом телефоне или компьютере. Без пароля.', 'Пока пропустить'],
 'te': ['నాకు ఇప్పటికే ఖాతా ఉంది', 'మీ ప్రగతిని అన్ని పరికరాల్లో సేవ్ చేయాలా?', 'ఐచ్ఛికం. మీ ఈమెయిల్ చేర్చితే ఏ ఫోన్‌లోనైనా, కంప్యూటర్‌లోనైనా మీ ప్రగతి మీతోనే ఉంటుంది. పాస్‌వర్డ్ అవసరం లేదు.', 'ప్రస్తుతానికి దాటవేయండి'],
 'th': ['ฉันมีบัญชีอยู่แล้ว', 'บันทึกความคืบหน้าของคุณข้ามอุปกรณ์ไหม', 'ไม่บังคับ เพิ่มอีเมลแล้วความคืบหน้าจะตามคุณไปทุกโทรศัพท์หรือคอมพิวเตอร์ ไม่ต้องใช้รหัสผ่าน', 'ข้ามไปก่อน'],
 'tl': ['May account na ako', 'I-save ang pag-unlad mo sa lahat ng device?', 'Opsyonal. Idagdag ang email mo at kasama mo ang pag-unlad mo sa anumang phone o computer. Walang password.', 'Laktawan muna'],
 'ur': ['میرا اکاؤنٹ پہلے سے ہے', 'اپنی پیش رفت ہر ڈیوائس پر محفوظ کریں؟', 'اختیاری۔ اپنی ای میل شامل کریں اور آپ کی پیش رفت کسی بھی فون یا کمپیوٹر پر آپ کے ساتھ رہے گی۔ پاس ورڈ کی ضرورت نہیں۔', 'ابھی چھوڑیں'],
 'vi': ['Tôi đã có tài khoản', 'Lưu tiến độ của bạn trên mọi thiết bị?', 'Không bắt buộc. Thêm email và tiến độ sẽ theo bạn trên mọi điện thoại hay máy tính. Không cần mật khẩu.', 'Tạm bỏ qua'],
 'yue': ['我已經有帳戶', '想唔想跨裝置儲存你嘅進度？', '可以唔填。加入電郵，你嘅進度喺邊部手機或者電腦都跟住你。唔使密碼。', '暫時略過'],
 'zh': ['我已有账号', '要在多设备上保存你的进度吗？', '可选。添加邮箱后，你的进度会同步到任何手机或电脑。无需密码。', '暂时跳过'],
}
KS = [K1, K2, K3, K4]
langs = sorted(d for d in os.listdir(D) if os.path.isfile(os.path.join(D, d, 'ui.json')))
assert not [l for l in langs if l not in T], [l for l in langs if l not in T]
for l in langs:
    f = os.path.join(D, l, 'ui.json'); raw = open(f, encoding='utf8').read(); doc = json.loads(raw); E = doc['exact']; n = 0
    for i, k in enumerate(KS):
        if k in E: continue
        E[k] = T[l][i] if l == 'ko' else {'t': T[l][i], 'ko': T['ko'][i], 'kind': CTX[k][0], 'context': CTX[k][1]}; n += 1
    if n: open(f, 'w', encoding='utf8').write(json.dumps(doc, ensure_ascii=False, indent=1) + ('\n' if raw.endswith('\n') else ''))
    print('%-4s %d added' % (l, n))
