/* en-am extras, writer EN-AM-A. DIALOG: card | A | B | English A / English B. EXAMPLES: card | sentence | English. PATTERNS: frame | English frame | example | English. Pron fields do not exist here. No romanisation. */
exports.DIALOG = `
በ | ይህ በ ነው? | አዎ በ ነው | Is this በ? / Yes, it is በ.
ብ | ይህ ብ ነው? | አዎ ብ ነው | Is this ብ? / Yes, it is ብ.
ልብ | ይህ ልብ ነው? | አዎ ልብ ነው | Is this a heart? / Yes, it is a heart.
ለ | ይህ ለ ነው? | አዎ ለ ነው | Is this ለ? / Yes, it is ለ.
ቀ | ይህ ቀ ነው? | አዎ ቀ ነው | Is this ቀ? / Yes, it is ቀ.
ቤት | ይህ ቤት ነው? | አዎ ቤት ነው | Is this a house? / Yes, it is a house.
አ | ይህ አ ነው? | አዎ አ ነው | Is this አ? / Yes, it is አ.
ከ | ይህ ከ ነው ወይስ ቀ? | ይህ ከ ነው | Is this ከ or ቀ? / This is ከ.
ውሻ | ይህ ውሻ ነው? | አዎ ውሻ ነው | Is this a dog? / Yes, it is a dog.
ጠ | ይህ ጠ ነው? | አዎ ጠ ነው | Is this ጠ? / Yes, it is ጠ.
ድመት | ድመት ትንሽ ነው? | አዎ ትንሽ ነው | Is a cat small? / Yes, it is small.
ገበያ | ገበያ ትልቅ ነው? | አዎ ትልቅ ነው | Is the market big? / Yes, it is big.
ገና | ገና ጠዋት ነው? | አዎ ገና ጠዋት ነው | Is it still morning? / Yes, it is still morning.
አማርኛ | ይህ አማርኛ ነው? | አዎ አማርኛ ነው | Is this Amharic? / Yes, it is Amharic.
አገር | ይህ አገር ኢትዮጵያ ነው? | አዎ ኢትዮጵያ ነው | Is this country Ethiopia? / Yes, it is Ethiopia.
ጤና ይስጥልኝ | ጤና ይስጥልኝ | ጤና ይስጥልኝ | Hello. / Hello.
ደህና አደርክ? | ደህና አደርክ? | ደህና እግዚአብሔር ይመስገን | Good morning (to a man). / Fine, thank God.
እባክሽ | እባክሽ ስምሽ ማን ነው | ስሜ ትግስት ነው | Please, what's your name (to a woman)? / My name is Tigist.
ስምሽ ማን ነው | ሰላም ስምሽ ማን ነው | ስሜ አበበች ነው | Hello, what's your name (to a woman)? / My name is Abebech.
እኔ አሜሪካዊ ነኝ | አንተ አሜሪካዊ ነህ? | አዎ እኔ አሜሪካዊ ነኝ | Are you American (to a man)? / Yes, I'm American.
አገሬ አሜሪካ ነው | አገርህ የት ነው | አገሬ አሜሪካ ነው | Where is your country (to a man)? / My country is the United States.
አባትህ | አባትህ ማን ነው | አባቴ አቶ ከበደ ነው | Who is your father (to a man)? / My father is Ato Kebede.
እናቴ | እሷ ማን ናት | እናቴ አበበች ናት | Who is she? / My mother is Abebech.
ጓደኛ | ይህ ጓደኛ ነው? | አዎ እሱ አዳም ነው | Is this a friend? / Yes, he is Adam.
ስንት ሰዓት ነው | ይቅርታ ስንት ሰዓት ነው | ጠዋት አስራ ሁለት ሰዓት ነው | Excuse me, what time is it? / It's twelve in the morning, 6 a.m.
ዋጋው ስንት ነው | ዋጋው ስንት ነው | አራት ብር ነው | How much is it? / It's four birr.
አራት ብር | አራት ብር ነው? | አዎ አራት ብር ነው | Is it four birr? / Yes, it's four birr.
`;
exports.EXAMPLES = `
ሎ | ሎ ቦ አይደለም | ሎ is not ቦ.
ማ | ማ ሚ አይደለም | ማ is not ሚ.
ሰው | ይህ ሰው አዳም ነው | This person is Adam.
ሸሚዝ | ይህ ሸሚዝ አዲስ ነው | This shirt is new.
አዲስ | ቤት አዲስ ነው | The house is new.
ዛፍ | ዛፍ ትልቅ ነው | The tree is big.
ጥሩ | ገበያ ጥሩ ነው | The market is good.
ፍቅር | ፍቅር ጥሩ ነው | Love is good.
ስልክ | ይህ ስልክ አዲስ ነው | This telephone is new.
አዲስ አበባ | አዲስ አበባ ትልቅ ናት | Addis Ababa is big.
ደህና አደርሽ? | ደህና አደርሽ እናቴ | Good morning, my mother.
አመሰግናለሁ | ደህና ነኝ አመሰግናለሁ | I'm well, thank you.
እሷ ናት | እሷ ትግስት ናት | She is Tigist.
እኔ ኢትዮጵያዊ ነኝ | እኔ ኢትዮጵያዊ ነኝ እና አገሬ ኢትዮጵያ ነው | I am Ethiopian, and my country is Ethiopia.
ቤተሰብ | የአቶ ከበደ ቤተሰብ ትልቅ ነው | Ato Kebede's family is big.
ወንድሜ | ወንድሜ አዳም ነው | My brother is Adam.
አስር | ይህ አስር ብር ነው | This is ten birr.
ሃያ | ሃያ ብር ውድ ነው | Twenty birr is expensive.
`;
exports.PATTERNS = `
ደህና ___ | Good ___ (the ending matches the person) | ደህና አደርክ? | Good morning (to a man)
ስሜ ___ ነው | My name is ___ | ስሜ ትግስት ነው | My name is Tigist
እኔ ___ ነኝ | I am ___ | እኔ አሜሪካዊ ነኝ | I am American (a man)
___ ነህ | you (a man) are ___ | ደህና ነህ | you (a man) are well
___ ነሽ | you (a woman) are ___ | ደህና ነሽ | you (a woman) are well
___ ነዎት | you (polite) are ___ | ደህና ነዎት | you (polite) are well
አባት___ | father plus whose | አባትሽ | your father (to a woman)
___ ብር | ___ birr | አራት ብር | four birr
___ ሰዓት | ___ on the clock | ጠዋት አስራ ሁለት ሰዓት | twelve in the morning (6 a.m.)
`;
