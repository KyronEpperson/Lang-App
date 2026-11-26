import os,glob,re
N={'en':'English','es':'Spanish','zh':'Mandarin','yue':'Cantonese','nan':'Taiwanese','ja':'Japanese','ko':'Korean','vi':'Vietnamese','th':'Thai','hmn':'Hmong','id':'Indonesian','tl':'Tagalog','ceb':'Cebuano','pt':'Portuguese','fr':'French','it':'Italian','de':'German','ar':'Arabic','am':'Amharic',
'hi':'Hindi','bn':'Bengali','ur':'Urdu','pa':'Punjabi','te':'Telugu','kn':'Kannada','mr':'Marathi','ru':'Russian','pl':'Polish','cs':'Czech','spr':'Puerto Rican Spanish'}
T=['yue','vi','zh','ko','ja','nan','th','hmn','id','tl','ceb']
have=set(os.path.basename(f)[7:-3] for f in glob.glob('packs/course-*.js'))
ui=set(os.path.basename(f)[5:-3] for f in glob.glob('packs/i18n-*.js'))|{'en'}
W1=['en','es']; W2=['zh','yue','nan','ja','ko','vi','th','hmn','id','tl','ceb']; W3=['pt','fr','it','de','ar','am']; W4=['hi','bn','ur','pa','te','kn','mr','ru','pl','cs','spr']
o=[]
o.append('# Pending courses: East and Southeast Asian languages\n')
o.append('Owner, 2026-11-25: "lets go east asia and southeast asia. english, spanish first. then the asian countries not india group. then portuguese, french, italian, german, arabic, and amharic then put the rest in a file saying that its pending work to do". This file is that list. **Everything marked pending is work still to do.** Update it in the release that builds a pair.\n')
o.append('## How each language is built (owner, 2026-11-25)\n')
o.append('**Rule (owner, 2026-11-25): no course for a language is assembled from halves until BOTH English to X and X to English exist as hand-built reference courses. If either is missing, it is hand-built first.** ("dont build any engine if it doesnt have x for both directions with english")\n')
o.append('1. **Reference pair first, by hand.** For each language X: English to X (`en-<x>`) and X to English (`<x>-en`), both with the lesson flow (teach a section, its cards five at a time, quiz, final review), the writing-system foundation first, and section-matched cards. Owner: "so we should make english <-> x then build the engines for the langauge on both sides? so it can quickly make whichever side it needs?" and "the engines would work better if they always could refer to one course from the that language".\n2. **Then the two halves.** `en-<x>` is exported into the target half `tools/halves/target/<x>/` (everything the course teaches about X, no learner language in it). `<x>-en` is the reference for the native half: how X speakers are addressed, their interface, their names for decks and grammar terms. Recipe: `docs/HALVES-BLUEPRINT.md`.\n3. **Then any pair is assembled**, never written from nothing: target half of the language being learned + native half of the learner\'s language (`mk_native.js`, four writers, cold review, `assemble.js`). Writers always get the reference course of that language on their reading list.\n4. A pair is released only with its foundation in `FOUND` (`tools/tests/foundations.js`) and its section tables (`tools/sections/`); `ship.sh` checks both.\n')
o.append('Order of languages: Cantonese first (owner: "vantonese first"), then Vietnamese, then Mandarin, Korean, Japanese, Taiwanese, Thai, Hmong, Indonesian, Tagalog, Cebuano. Coming soon, no course at all yet: Wu, Burmese, Javanese, Hiligaynon, Waray.\n')
o.append('## Step 1: reference pairs and halves\n')
o.append('| Language | English to X | X to English | Foundation in English to X | Target half |\n|---|---|---|---|---|')
half={'ko','zh','yue','vi'}
found_done={'zh','ja','th','yue','vi'}
for t in T:
    o.append('| %s | %s | %s | %s | %s |'%(N[t],'released' if 'en-'+t in have or t=='ko' else 'pending','released' if t+'-en' in have else 'pending','done' if t in found_done or t=='ko' else 'pending','done' if t in half else 'pending'))
o.append('\nKorean for English speakers is the built-in course. Taiwanese to English is pending and waits on the owner\'s script choice (Traditional Chinese (Taiwan) or written Taiwanese), as does Taiwanese to Korean.\n')
def wave(title,nat,note=''):
    o.append('## '+title+'\n'); 
    if note: o.append(note+'\n')
    o.append('| Learner speaks | '+' | '.join(N[t] for t in T)+' |\n|---|'+'---|'*len(T))
    for n in nat:
        row=[]
        for t in T:
            if n==t: row.append('n/a')
            elif n+'-'+t in have or (n=='en' and t=='ko'): row.append('released')
            else: row.append('pending')
        o.append('| %s%s | '%(N[n],'' if n in ui else ' (no interface yet)')+' | '.join(row)+' |')
    o.append('')
wave('Wave 1: English and Spanish speakers',W1,'"released" means the course is live; it still gets the foundation and the reference-pair treatment in step 1 if the table above says pending.')
wave('Wave 2: speakers of the other East and Southeast Asian languages',W2)
wave('Wave 3: Portuguese, French, Italian, German, Arabic and Amharic speakers',W3,'Amharic has no interface dictionary and no English course yet; both come before any course for Amharic speakers.')
wave('Pending, not scheduled: everyone else',W4,'The India group and the remaining interface languages. Not started; no order set by the owner. Kannada to Korean is paused by the owner. Korean for Telugu, Bengali, Urdu and Punjabi speakers: writer files exist, not merged (see `docs/HANDOFF.md`, queue item 4).')
cnt=sum(l.count('pending') for l in o if l.startswith('| '))
o.append('Counted on 2026-11-25 from `packs/`: regenerate with `python3 tools/curriculum/pending_courses.py` (run in the build home) after a pair is released; the lists of finished foundations and halves are at the top of that script.\n')
open('docs/PENDING-COURSES.md','w',encoding='utf8').write('\n'.join(o))
print(cnt)
