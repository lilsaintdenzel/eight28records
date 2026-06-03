const ARTISTS = {
  lsd: {
    id:'lsd', name:'LilSaintDenzel', icon:'🎵',
    badge:'ARTIST · EIGHT28 RECORDS',
    role:'Producer · Engineer · Visual Theologian · England, UK',
    heroBg:'linear-gradient(135deg,#050c1e,#0d1e3a,#060e20)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 30% 50%,rgba(0,120,212,0.25),transparent 65%)',
    stats:[{n:'800+',l:'Videos'},{n:'16',l:'Tracks'},{n:'∞',l:'ATWT828'}],
    bio:[
      'LilSaintDenzel (Progress Orish) exists at the intersection of faith, technology, and art. His work is governed by a single mandate: Romans 8:28, all things working together.',
      'He is the founder of Eight28 Records. His music blends gospel theology with trap production, and his generative art fuses code aesthetics with systematic beauty.'
    ],
    details:[
      {i:'📍',t:'England, UK'}
    ],
    releases:['concordia','rescued','thereturn','solas','est1995','heartware','goodfriday','darkclouds','imagodei','euangelion','pantasynergy'],
    links:[
      {i:'🌐',n:'Personal Site',u:'lilsaintdenzel.com'},
      {i:'🛍',n:'Store Hub',u:'eight28.store'},
      {i:'📸',n:'Instagram',u:'@lilsaintdenzel'},
    ]
  },
};

const RELEASES = {
  concordia:{
    id:'concordia', artistId:'lsd',
    name:'Concordia Sonorum', icon:'𝄞',
    type:'ALBUM', meta:'Eight28 Records · 2025 · 11 Tracks',
    spotifyId:'7psLFRAt2V5zunuvs3W6Wg',
    coverBg:'linear-gradient(135deg,#0d0a06,#1a1408)',
    tracks:[
      {n:'Skopos',album:'Concordia Sonorum',dur:'3:42'},
      {n:'Ahavah',album:'Concordia Sonorum',dur:'4:15'},
      {n:'Nishmah',album:'Concordia Sonorum',dur:'3:58'},
      {n:'Geshem',album:'Concordia Sonorum',dur:'4:30'},
      {n:'8:28',album:'Concordia Sonorum',dur:'5:01'},
      {n:'Kavah',album:'Concordia Sonorum',dur:'3:22'},
      {n:'Hypomone',album:'Concordia Sonorum',dur:'4:44'},
      {n:'Echad',album:'Concordia Sonorum',dur:'3:55'},
      {n:'Selah',album:'Concordia Sonorum',dur:'4:08'},
      {n:'Shalom',album:'Concordia Sonorum',dur:'3:36'},
      {n:'Emmaus',album:'Concordia Sonorum',dur:'5:22'},
    ]
  },
  goodfriday:{
    id:'goodfriday', artistId:'lsd',
    name:'Good Friday EP', icon:'✝',
    type:'EP', meta:'Eight28 Records · 2024 · 5 Tracks',
    coverBg:'linear-gradient(135deg,#120808,#0a0408)',
    tracks:[
      {n:'Crown Of Thorns',album:'Good Friday EP',dur:'4:12'},
      {n:'Sunday Is Coming',album:'Good Friday EP',dur:'3:48'},
      {n:'Christos Anesti',album:'Good Friday EP',dur:'4:55'},
      {n:'Kavod',album:'Good Friday EP',dur:'3:30'},
      {n:'Psalm 30:5',album:'Good Friday EP',dur:'4:20'},
    ]
  },
  rescued:{
    id:'rescued', artistId:'lsd',
    name:'Rescued: The Hundred', icon:'💯',
    type:'EP', meta:'Eight28 Records · 2026 · 5 Tracks',
    coverBg:'linear-gradient(135deg,#1a1206,#2a1e08)',
    tracks:[
      {n:'One Left',album:'Rescued: The Hundred',dur:'1:36'},
      {n:'Hounds',album:'Rescued: The Hundred',dur:'1:46'},
      {n:"Shepherd's Voice",album:'Rescued: The Hundred',dur:'3:44'},
      {n:'99',album:'Rescued: The Hundred',dur:'2:18'},
      {n:'Arms of the Father',album:'Rescued: The Hundred',dur:'2:44'},
    ]
  },
  thereturn:{
    id:'thereturn', artistId:'lsd',
    name:'The Return', icon:'↩',
    type:'EP', meta:'Eight28 Records · 2025 · 6 Tracks',
    coverBg:'linear-gradient(135deg,#0e0e0e,#1a1a1a)',
    tracks:[
      {n:'Eden',album:'The Return',dur:'2:48'},
      {n:'Pneuma',album:'The Return',dur:'2:20'},
      {n:'Kathairesis',album:'The Return',dur:'2:33'},
      {n:'Teshuvah',album:'The Return',dur:'1:52'},
      {n:'Elul',album:'The Return',dur:'3:12'},
      {n:'Menuchah',album:'The Return',dur:'1:46'},
    ]
  },
  solas:{
    id:'solas', artistId:'lsd',
    name:'SOLAS', icon:'✠',
    type:'EP', meta:'Eight28 Records · 2025 · 5 Tracks',
    coverBg:'linear-gradient(135deg,#1a0e06,#2a1808)',
    tracks:[
      {n:'Sola Scriptura',album:'SOLAS',dur:'2:52'},
      {n:'Sola Fide',album:'SOLAS',dur:'2:57'},
      {n:'Sola Gratia',album:'SOLAS',dur:'2:29'},
      {n:'Solus Christus',album:'SOLAS',dur:'2:30'},
      {n:'Soli Deo Gloria',album:'SOLAS',dur:'1:36'},
    ]
  },
  est1995:{
    id:'est1995', artistId:'lsd',
    name:'EST. 1995', icon:'9̶5',
    type:'ALBUM', meta:'Eight28 Records · 2025',
    coverBg:'linear-gradient(135deg,#0a0a12,#1a1428)',
    tracks:[]
  },
  heartware:{
    id:'heartware', artistId:'lsd',
    name:'HeartWare', icon:'♥',
    type:'ALBUM', meta:'Eight28 Records · 2025 · 13 Tracks',
    coverBg:'linear-gradient(135deg,#0e0a14,#1e0a1a)',
    tracks:[]
  },
  darkclouds:{
    id:'darkclouds', artistId:'lsd',
    name:'Dark Clouds Deep Mercy', icon:'☁',
    type:'ALBUM', meta:'Eight28 Records · 2024',
    coverBg:'linear-gradient(135deg,#080c14,#0a1020)',
    tracks:[]
  },
  imagodei:{
    id:'imagodei', artistId:'lsd',
    name:'Imago Dei', icon:'✦',
    type:'ALBUM', meta:'Eight28 Records · 2024',
    coverBg:'linear-gradient(135deg,#0a0a08,#1a1a10)',
    tracks:[]
  },
  euangelion:{
    id:'euangelion', artistId:'lsd',
    name:'Euangelion', icon:'☩',
    type:'ALBUM', meta:'Eight28 Records · 2024',
    coverBg:'linear-gradient(135deg,#080a10,#10141e)',
    tracks:[]
  },
  pantasynergy:{
    id:'pantasynergy', artistId:'lsd',
    name:'PantaSynergy', icon:'∞',
    type:'ALBUM', meta:'Eight28 Records · 2023',
    coverBg:'linear-gradient(135deg,#060e08,#0e1e10)',
    tracks:[]
  }
};

const STORIES = {
  concordia:{
    title:'Concordia Sonorum', type:'FULL ALBUM · 2025',
    meta:'Eight28 Records · 11 Tracks · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#06080e,#0d1420,#08100a)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(200,164,74,0.22),transparent 65%)',
    heroArt:'𝄞',
    narrative:'Concordia Sonorum, Latin for "harmony of sounds", is the debut full-length record from LilSaintDenzel under Eight28 Records. It is not merely an album. It is a sonic theology: eleven movements through the Hebrew and Greek words that form the architecture of the ATWT828 faith.',
    body:'Written, produced, and recorded in England, the album traces the journey of a believer who has decided to trust the Romans 8:28 mandate completely. Each track is named after a word from scripture - Hebrew, Greek, or Aramaic - that captures a distinct posture of faith. Together they form a single, unified declaration: all things are working together for good.',
    verse:{text:'"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."',ref:'Romans 8:28'},
    tracks:[
      {num:'01',name:'Skopos',dur:'3:42',meaning:'Greek - Purpose, Target, Goal',story:'The opener. A declaration of intentionality. Before any sound is made, there must be a target. Skopos sets the north star for the entire album - you are not drifting, you are aimed.'},
      {num:'02',name:'Ahavah',dur:'4:15',meaning:'Hebrew - Steadfast Love',story:'The theology of divine love that is not conditional on performance. Ahavah is the kind of love that pursues, that remains. The production reflects something warm and unrelenting.'},
      {num:'03',name:'Nishmah',dur:'3:58',meaning:'Hebrew - Breath, Soul, Living Being',story:'A meditation on the imago dei - the breath of God that makes humanity more than matter. Nishmah asks: what does it mean to be animated by the divine?'},
      {num:'04',name:'Geshem',dur:'4:30',meaning:'Hebrew - Rain, Material World, Physical Reality',story:'The album\'s most grounded track. Geshem confronts the weight of living in a physical world - bills, grief, delay - and insists that even here, the promise holds.'},
      {num:'05',name:'8:28',dur:'5:01',meaning:'Romans 8:28 - The Mandate',story:'The title track and centrepiece. A five-minute anthem built around the core text. This is the hinge of the album: everything before leads here, everything after flows from it.'},
      {num:'06',name:'Kavah',dur:'3:22',meaning:'Hebrew - Hope, Wait with Expectation',story:'Waiting is not passive. Kavah is active anticipation - the posture of someone who has already decided the answer is coming. The production is sparse, deliberate, unhurried.'},
      {num:'07',name:'Hypomone',dur:'4:44',meaning:'Greek - Endurance, Patient Continuance Under Pressure',story:'The longest and most intense track on the album. Hypomone is for the season of prolonged pressure - not a sprint but a sustained forward movement under weight.'},
      {num:'08',name:'Echad',dur:'3:55',meaning:'Hebrew - One, Unity, Wholeness',story:'A corporate track. Where most of the album is personal, Echad zooms out to the body - the community of believers called together into one mission, one family.'},
      {num:'09',name:'Selah',dur:'4:08',meaning:'Hebrew - Pause, Reflect, Measure',story:'An interlude in spirit, a full track in form. Selah is the album\'s invitation to stop and receive what has already been said. A moment of liturgical stillness.'},
      {num:'10',name:'Shalom',dur:'3:36',meaning:'Hebrew - Peace, Wholeness, Nothing Missing',story:'The penultimate track and the most restful. Shalom is not the absence of conflict but the presence of completeness. Everything accounted for, nothing left out.'},
      {num:'11',name:'Emmaus',dur:'5:22',meaning:'The Road to Emmaus - Recognition, Revelation',story:'The closer. The disciples on the road to Emmaus did not recognise Jesus until the breaking of bread. Emmaus is about recognition coming late - and still being enough. A journey that ends with fire in the chest.'},
    ],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Philosophy',name:'ATWT828'},{role:'Year',name:'2025'}]
  },
  goodfriday:{
    title:'Good Friday EP', type:'EP · 2024',
    meta:'Eight28 Records · 5 Tracks · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#060408,#100810,#08040a)',
    heroGlow:'radial-gradient(ellipse 65% 70% at 50% 40%,rgba(200,164,74,0.18),transparent 60%)',
    heroArt:'✝',
    narrative:'The Good Friday EP is a five-track devotional released in the season of Holy Week. It is not a commercial project. It is an act of worship - a sonic Stations of the Cross, beginning at the foot of Golgotha and ending in the light of an empty tomb.',
    body:'Each track was written and produced in a single creative week, guided by the liturgical calendar and the weight of what Good Friday means - not as a religious holiday but as the moment everything changed. The EP does not resolve immediately. It sits in the tension of Saturday - the day between death and resurrection - before arriving at its answer.',
    verse:{text:'"For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures."',ref:'1 Corinthians 15:3'},
    tracks:[
      {num:'01',name:'Crown Of Thorns',dur:'4:12',meaning:'Matthew 27:29 - The Mockery of the King',story:'The opening track begins at the moment of humiliation. The crown that should have been gold is made of thorns. The production is sparse, almost violent in its restraint.'},
      {num:'02',name:'Sunday Is Coming',dur:'3:48',meaning:'The Promise of Resurrection',story:'Written in the voice of Saturday - the darkest day, when nothing had happened yet. The title is the sermon: Sunday is coming. A declaration made before the evidence arrives.'},
      {num:'03',name:'Christos Anesti',dur:'4:55',meaning:'Greek - Christ Is Risen',story:'The Greek Easter proclamation becomes the centrepiece of the EP. This is the moment everything shifts. The track breaks open - production expanding, textures brightening.'},
      {num:'04',name:'Kavod',dur:'3:30',meaning:'Hebrew - Glory, Weight, Honour',story:'The post-resurrection response. When you have witnessed Kavod - the weighty glory of God - nothing else can claim the same space. A track of awe, not celebration.'},
      {num:'05',name:'Psalm 30:5',dur:'4:20',meaning:'"Weeping may endure for a night, but joy comes in the morning."',story:'The closer and the thesis. Good Friday is the night. Easter Sunday is the morning. Psalm 30:5 holds both in one breath.'},
    ],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Season',name:'Holy Week 2024'},{role:'Year',name:'2024'}]
  },
  rescued:{
    title:'Rescued: The Hundred', type:'EP · 2026',
    meta:'Eight28 Records · 5 Tracks · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#0e0a04,#1c1408,#100c06)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(180,140,40,0.22),transparent 65%)',
    heroArt:'💯',
    narrative:'Rescued: The Hundred is a five-track EP built on the parable of the lost sheep - the one who leaves the ninety-nine to find the single lost one. It is a record about the extravagance of divine pursuit.',
    body:'Released January 2026 under Eight28 Records, The Hundred asks a simple, devastating question: what if you were the one? Each track follows the arc of being found - the search, the recognition, the voice, the return, and the embrace.',
    verse:{text:'"What do you think? If a man owns a hundred sheep, and one of them wanders away, will he not leave the ninety-nine on the hills and go to look for the one that wandered off?"',ref:'Matthew 18:12'},
    tracks:[
      {num:'01',name:'One Left',dur:'1:36',meaning:'The departure - one is missing',story:'The opening track establishes the premise: one has gone. The production is sparse, almost a question. Before any rescue can happen, the absence must be named.'},
      {num:'02',name:'Hounds',dur:'1:46',meaning:'The pursuit - relentless and intentional',story:'The Shepherd does not wait. Hounds captures the velocity of divine pursuit - not aggressive but unstoppable. Something has been sent after you.'},
      {num:'03',name:"Shepherd's Voice",dur:'3:44',meaning:'The recognition - you know that voice',story:'The centrepiece of the EP. The lost sheep does not find its way back by its own wisdom - it hears a voice it knows. Shepherd\'s Voice is about the moment of recognition that precedes restoration.'},
      {num:'04',name:'99',dur:'2:18',meaning:'The cost - what was left behind',story:'A track written from the perspective of the ninety-nine - those who remained. It is not about abandonment but about the maths of mercy: one matters enough to upend the whole arrangement.'},
      {num:'05',name:'Arms of the Father',dur:'2:44',meaning:'The return - received, not tolerated',story:'The closer. The parable ends not with scolding but with celebration. Arms of the Father is about the quality of the welcome - not conditional, not grudging, but full.'},
    ],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2026'}]
  },
  thereturn:{
    title:'The Return', type:'EP · 2025',
    meta:'Eight28 Records · 6 Tracks · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#080808,#141414,#0c0c0c)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(220,220,220,0.1),transparent 65%)',
    heroArt:'↩',
    narrative:'The Return is a six-track EP about coming back - to God, to self, to purpose. Released October 2025, each track is named after a Hebrew or Greek word that captures a posture of homecoming.',
    body:'Written and produced under Eight28 Records, The Return does not romanticise the journey back. It sits honestly in the disorientation of return - the guilt, the wonder, the stillness, and the new beginning. Six tracks, 14 minutes, one direction.',
    verse:{text:'"Return to me, and I will return to you, says the Lord Almighty."',ref:'Malachi 3:7'},
    tracks:[
      {num:'01',name:'Eden',dur:'2:48',meaning:'Hebrew - Delight, The Original State',story:'The opener imagines the beginning - not as nostalgia but as direction. Eden is where you are headed, not just where you came from. The production is open, unhurried, full of space.'},
      {num:'02',name:'Pneuma',dur:'2:20',meaning:'Greek - Breath, Spirit, Wind',story:'A meditation on the Spirit as the power of return. You cannot make your own way back. Pneuma acknowledges that the breath that first animated you is the same one that leads you home.'},
      {num:'03',name:'Kathairesis',dur:'2:33',meaning:'Greek - Pulling Down, Demolition',story:'Before return comes deconstruction. Kathairesis is the track that names what must be torn down - the false structures, the self-sufficient postures - before something true can be built.'},
      {num:'04',name:'Teshuvah',dur:'1:52',meaning:'Hebrew - Repentance, Turning, Return',story:'The Hebrew word for repentance literally means to turn around. Teshuvah is the shortest track on the EP - some decisions do not require a long speech. You simply turn.'},
      {num:'05',name:'Elul',dur:'3:12',meaning:'Hebrew - The Month of Return and Preparation',story:'Elul is the month before the Jewish High Holy Days - a season of searching and returning. The track captures the atmosphere of intentional preparation: slow, searching, expectant.'},
      {num:'06',name:'Menuchah',dur:'1:46',meaning:'Hebrew - Rest, Resting Place, Repose',story:'The closer. After the turn, after the demolition, after the walk home - there is rest. Menuchah is the destination. Not achievement but arrival. A track of settled stillness.'},
    ],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2025'}]
  },
  solas:{
    title:'SOLAS', type:'EP · 2025',
    meta:'Eight28 Records · 5 Tracks · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#0e0806,#1c1208,#120e06)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(180,120,40,0.2),transparent 65%)',
    heroArt:'✠',
    narrative:'SOLAS is a five-track EP built on the Five Solas of the Reformation - the five Latin phrases that captured what the Reformers believed the Gospel to be at its core. Each track is one Sola.',
    body:'Released July 2025, SOLAS is one of the most theologically precise projects under Eight28 Records. Five tracks, five convictions: Scripture alone, Faith alone, Grace alone, Christ alone, Glory to God alone. Each one examined sonically - not as doctrine to be recited but as lived reality.',
    verse:{text:'"For it is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God."',ref:'Ephesians 2:8'},
    tracks:[
      {num:'01',name:'Sola Scriptura',dur:'2:52',meaning:'Latin - Scripture Alone',story:'The foundation. Before any other conviction can stand, there must be a source - an authority outside of human opinion. Sola Scriptura opens the EP with the weight of that claim.'},
      {num:'02',name:'Sola Fide',dur:'2:57',meaning:'Latin - Faith Alone',story:'Not works, not performance, not religious achievement. Faith alone. The track holds the simplicity and the scandal of that claim in equal measure.'},
      {num:'03',name:'Sola Gratia',dur:'2:29',meaning:'Latin - Grace Alone',story:'You did not earn your way here. Sola Gratia is about the unconditional nature of divine grace - unmerited, undeserved, and therefore completely secure.'},
      {num:'04',name:'Solus Christus',dur:'2:30',meaning:'Latin - Christ Alone',story:'One mediator. One name. Solus Christus confronts the exclusivity claim at the centre of the Gospel - not as arrogance but as precision. There is one door.'},
      {num:'05',name:'Soli Deo Gloria',dur:'1:36',meaning:'Latin - Glory to God Alone',story:'The closer and the conclusion of all five. Everything - Scripture, faith, grace, Christ - points in one direction. Soli Deo Gloria is the final note: not to us, but to Him.'},
    ],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2025'}]
  },
  est1995:{
    title:'EST. 1995', type:'ALBUM · 2025',
    meta:'Eight28 Records · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#06060e,#0e0c1c,#080a14)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(100,80,200,0.2),transparent 65%)',
    heroArt:'9̶5',
    narrative:'EST. 1995 is a personal record - a sonic document of origin. The title marks the year of birth and the questions that come with it: what were you made for, and are you living it?',
    body:'Written and produced under Eight28 Records, EST. 1995 confronts identity, calling, and the weight of becoming. It is not nostalgia. It is a reckoning with the beginning so the present makes sense.',
    verse:{text:'"Before I formed you in the womb I knew you, before you were born I set you apart."',ref:'Jeremiah 1:5'},
    tracks:[],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2025'}]
  },
  heartware:{
    title:'HeartWare', type:'ALBUM · 2025',
    meta:'Eight28 Records · 13 Tracks · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#0e0810,#1c0c1a,#0e0814)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(180,60,120,0.2),transparent 65%)',
    heroArt:'♥',
    narrative:'HeartWare is a 13-track exploration of the interior life - the software of the soul. Named for the idea that what runs the heart determines everything that follows.',
    body:'Released April 2025 under Eight28 Records, HeartWare examines what occupies the inner space: faith, fear, love, grief, desire, and surrender. Thirteen movements through the architecture of the human heart, submitted to the Romans 8:28 mandate.',
    verse:{text:'"Keep your heart with all vigilance, for from it flow the springs of life."',ref:'Proverbs 4:23'},
    tracks:[],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2025'}]
  },
  darkclouds:{
    title:'Dark Clouds Deep Mercy', type:'ALBUM · 2024',
    meta:'Eight28 Records · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#060810,#0a0e1e,#060c16)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(40,80,160,0.2),transparent 65%)',
    heroArt:'☁',
    narrative:'Dark Clouds Deep Mercy sits in the tension between suffering and sovereignty. The title holds the paradox: the clouds are real, and so is the mercy beneath them.',
    body:'A 2024 record that refuses easy resolution. Each track is written from inside the storm - not from the other side of it. The promise of Romans 8:28 is claimed not as a conclusion but as an anchor held in the dark.',
    verse:{text:'"Though he slay me, yet will I hope in him."',ref:'Job 13:15'},
    tracks:[],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2024'}]
  },
  imagodei:{
    title:'Imago Dei', type:'ALBUM · 2024',
    meta:'Eight28 Records · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#080a08,#141a10,#0c1208)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(80,160,80,0.18),transparent 65%)',
    heroArt:'✦',
    narrative:'Imago Dei, the image of God. A 2024 record built on a single theological conviction: every human being carries the imprint of the divine, and that changes everything.',
    body:'Written and produced under Eight28 Records, Imago Dei explores what it means to be made in the image of God in a world that frequently contradicts that reality. The production reflects dignity - unhurried, considered, layered with intention.',
    verse:{text:'"So God created mankind in his own image, in the image of God he created them."',ref:'Genesis 1:27'},
    tracks:[],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2024'}]
  },
  euangelion:{
    title:'Euangelion', type:'ALBUM · 2024',
    meta:'Eight28 Records · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#06080e,#0c1018,#080c14)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(60,120,200,0.2),transparent 65%)',
    heroArt:'☩',
    narrative:'Euangelion, the Greek word for Gospel, meaning "good news." A 2024 record that returns to the original announcement: something has happened that changes the terms of existence.',
    body:'Not a religious project in the institutional sense. Euangelion is a sonic re-proclamation of the most significant event in history - and what it demands of those who believe it. Produced under Eight28 Records.',
    verse:{text:'"For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes."',ref:'Romans 1:16'},
    tracks:[],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2024'}]
  },
  pantasynergy:{
    title:'PantaSynergy', type:'ALBUM · 2023',
    meta:'Eight28 Records · LilSaintDenzel',
    heroBg:'linear-gradient(135deg,#060e06,#0c1a0c,#081208)',
    heroGlow:'radial-gradient(ellipse 70% 80% at 40% 50%,rgba(60,180,80,0.18),transparent 65%)',
    heroArt:'∞',
    narrative:'PantaSynergy is the debut record - the opening statement. The title combines the Greek "panta" (all things) with synergy: the idea that all things working together produce something greater than their sum.',
    body:'LilSaintDenzel\'s first full project under Eight28 Records, PantaSynergy establishes the theological and sonic foundation of everything that follows. It is a declaration of the ATWT828 mandate in its most elemental form: all things, without exception, are working together.',
    verse:{text:'"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."',ref:'Romans 8:28'},
    tracks:[],
    credits:[{role:'Artist',name:'LilSaintDenzel'},{role:'Production',name:'LilSaintDenzel'},{role:'Label',name:'Eight28 Records'},{role:'Year',name:'2023'}]
  }
};
