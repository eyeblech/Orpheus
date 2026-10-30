import { MusicMilestone } from './types';

export const MILESTONES_GREATEST_ALBUMS: MusicMilestone[] = [
  {
    id: 'goldberg-variations-gould-1955',
    year: 1955,
    catalogCode: 'COL-ML5060',
    eraId: 'blues-jazz-age',
    category: 'masterpiece',
    title: 'Bach: The Goldberg Variations (1955 Debut Recording)',
    artist: 'Glenn Gould',
    producerOrConductor: 'Howard Scott (Columbia 30th Street Studio)',
    country: 'Canada / USA',
    format: '12-inch Mono LP (Columbia Masterworks)',
    duration: '38:25',
    keySignature: 'G Major',
    bpm: 108,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: 'G4', duration: 0.9, delay: 0 },
      { note: 'G4', duration: 0.9, delay: 1.0 },
      { note: 'A4', duration: 0.7, delay: 2.0 },
      { note: 'B4', duration: 0.4, delay: 2.8 },
      { note: 'A4', duration: 0.5, delay: 3.3 },
      { note: 'G4', duration: 0.6, delay: 3.9 },
      { note: 'F#4', duration: 0.9, delay: 4.6 },
      { note: 'D4', duration: 1.4, delay: 5.6 },
    ],
    motifDescription: 'The luminous sarabande opening of Bach’s Aria in G Major, played with Glenn Gould’s crystalline detached articulation.',
    coverUrl: '/covers/well-tempered-clavier-1722.jpg',
    primaryTag: 'Baroque Piano Reinvention',
    logline: 'A 22-year-old Canadian pianist walked into Columbia’s 30th Street Church in Manhattan and transformed J.S. Bach from academic museum piece into high-velocity modern architecture.',
    historicalEssay: [
      'Before June 1955, Bach’s Goldberg Variations (BWV 988) was considered an esoteric keyboard exercise belonging to the harpsichord. Sitting on a sawed-off folding chair fourteen inches off the floor and humming audibly into the microphones, 22-year-old Glenn Gould recorded the 30 variations on a Steinway grand piano with laser-like contrapuntal independence.',
      'The album became an overnight sensation and the best-selling classical piano recording of its era, bookending Gould’s life when he recorded a hauntingly slow, meditative second version in 1981 shortly before his death.'
    ],
    sonicBreakthrough: {
      headline: 'Non-Legato Contrapuntal X-Ray',
      detail: 'By avoiding the sustain pedal and striking each key with detached finger-staccato precision, Gould allowed listeners to hear three and four simultaneous voices with unprecedented clarity.'
    },
    essentialTrack: {
      title: 'Aria & Variation 1',
      description: 'Serene G-major contemplation followed immediately by a dazzling, percussive two-part sprint.'
    },
    famousQuote: {
      text: 'The purpose of art is not the release of a momentary ejection of adrenaline, but rather the gradual, lifelong construction of a state of wonder and serenity.',
      attribution: 'Glenn Gould'
    },
    accolades: 'Library of Congress National Recording Registry; Grammy Hall of Fame',
    influencedBy: ['J.S. Bach', 'Rosalyn Tureck', 'Artur Schnabel'],
    pavedWayFor: ['Wendy Carlos', 'Keith Jarrett', 'Brad Mehldau', 'Ryuichi Sakamoto'],
    colorPalette: ['#2563eb', '#f59e0b', '#0d1526']
  },
  {
    id: 'time-out-brubeck-1959',
    year: 1959,
    catalogCode: 'COL-CL1397',
    eraId: 'blues-jazz-age',
    category: 'rhythm-jazz-hiphop',
    title: 'Time Out ("Take Five")',
    artist: 'The Dave Brubeck Quartet',
    producerOrConductor: 'Teo Macero',
    country: 'United States',
    format: '12-inch Stereo LP (Columbia)',
    duration: '38:32',
    keySignature: 'E-flat Minor',
    bpm: 172,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['Eb3', 'Gb4', 'Bb4'], duration: 1.2, delay: 0 },
      { note: ['Eb4', 'Gb4', 'Bb4'], duration: 0.8, delay: 1.5 },
      { note: ['Bb2', 'Db4', 'F4'], duration: 1.2, delay: 3.0 },
      { note: 'Bb4', duration: 0.4, delay: 5.0 },
      { note: 'Db5', duration: 0.4, delay: 5.5 },
      { note: 'Eb5', duration: 0.4, delay: 6.0 },
      { note: 'F5', duration: 0.4, delay: 6.5 },
      { note: 'Gb5', duration: 0.8, delay: 7.0 },
      { note: 'F5', duration: 0.8, delay: 8.0 },
      { note: 'Eb5', duration: 1.4, delay: 9.0 },
    ],
    motifDescription: 'The 5/4 vamp (3+2 pulse) in E-flat minor paired with Paul Desmond’s soaring blues-inflected alto melody.',
    coverUrl: '/covers/kind-of-blue-1959.jpg',
    primaryTag: 'Odd-Meter Cool Jazz',
    logline: 'Defying Columbia executives who warned you could never dance to 5/4 or 9/8 time, Brubeck and Paul Desmond created the first million-selling jazz single in history.',
    historicalEssay: [
      'Inspired by Turkish street musicians heard on a US State Department tour of Eurasia, Dave Brubeck, alto saxophonist Paul Desmond, bassist Eugene Wright, and drummer Joe Morello recorded an entire album of original compositions in odd meters—5/4, 9/8 (grouped 2+2+2+3), and double-time waltzes.',
      'Desmond’s "Take Five", built around Joe Morello’s hypnotic drum ostinato and Brubeck’s two-chord vamp, became the best-selling jazz single of all time.'
    ],
    sonicBreakthrough: {
      headline: 'Asymmetric Meter in Popular Music',
      detail: 'Proved that complex polyrhythms and non-4/4 signatures could feel natural, swinging, and irresistibly melodic.'
    },
    essentialTrack: {
      title: 'Take Five & Blue Rondo à la Turk',
      description: 'Cool-jazz sophistication fused with Balkan and Turkish rhythmic architecture.'
    },
    famousQuote: {
      text: 'I actually wrote "Take Five" to give Joe Morello a drum solo in 5/4, never dreaming it would become the Quartet’s signature.',
      attribution: 'Paul Desmond'
    },
    accolades: 'First Jazz Album Certified Platinum by RIAA; National Recording Registry',
    influencedBy: ['Darius Milhaud', 'Turkish Aksak Rhythms', 'Lennie Tristano'],
    pavedWayFor: ['King Crimson', 'Radiohead ("15 Step")', 'Math Rock'],
    colorPalette: ['#06b6d4', '#ef4444', '#081b24']
  },
  {
    id: 'black-saint-sinner-lady-1963',
    year: 1963,
    catalogCode: 'IMP-A35',
    eraId: 'rock-psychedelia-soul',
    category: 'rhythm-jazz-hiphop',
    isCultGem: true,
    title: 'The Black Saint and the Sinner Lady',
    artist: 'Charles Mingus',
    producerOrConductor: 'Bob Thiele',
    country: 'United States',
    format: '12-inch Gatefold LP (Impulse!)',
    duration: '39:23',
    keySignature: 'G Minor',
    bpm: 94,
    instrumentPreset: 'organ',
    motifNotes: [
      { note: ['G3', 'Bb3', 'D4'], duration: 1.4, delay: 0 },
      { note: 'F#4', duration: 0.7, delay: 1.5 },
      { note: 'G4', duration: 0.9, delay: 2.3 },
      { note: 'Bb4', duration: 1.2, delay: 3.3 },
      { note: 'A4', duration: 0.8, delay: 4.6 },
      { note: ['D3', 'F#3', 'C4', 'Eb4'], duration: 1.8, delay: 5.5 },
    ],
    motifDescription: 'Mingus’s brooding Ellingtonian minor brass voicings colliding with flamenco guitar and wailing alto saxophone.',
    coverUrl: '/covers/ko-ko-1945.jpg',
    primaryTag: 'Avant-Garde Jazz Ballet',
    logline: 'A continuous 39-minute four-part symphonic jazz ballet featuring flamenco guitar, studio overdubbing, and liner notes written by Mingus’s psychotherapist.',
    historicalEssay: [
      'Recorded on January 20, 1963 for Impulse! Records, The Black Saint and the Sinner Lady is one of the greatest achievements in orchestration by any composer in history. Combining Duke Ellington’s lush voicings with ferocious collective improvisation and Spanish flamenco acoustic guitar, Mingus sculpted a deeply psychological self-portrait.',
      'Unusually for jazz in 1963, Mingus and engineer Bob Simpson spent days editing tape and overdubbing Charlie Mariano’s weeping alto saxophone lines to achieve the density of a 30-piece orchestra with just an 11-piece band.'
    ],
    sonicBreakthrough: {
      headline: 'Multi-Track Overdubbing in Avant-Garde Jazz',
      detail: 'Used tape splicing, tempo accelerations, and overdubbed horn counter-lines to construct a seamless through-composed suite.'
    },
    essentialTrack: {
      title: 'Track A — Solo Dancer (Stop! Look! And Listen, Sinner Jim Whitney!)',
      description: 'Opens with Dannie Richmond’s hypnotic snare roll and builds into a seismic brass catharsis.'
    },
    famousQuote: {
      text: 'Throw away all your old records except Ellington, and listen to this with your whole soul.',
      attribution: 'Charles Mingus'
    },
    accolades: 'Frequently ranked among the Top 3 Jazz Albums of All Time',
    influencedBy: ['Duke Ellington', 'Igor Stravinsky', 'Andalusian Flamenco'],
    pavedWayFor: ['Kamasi Washington', 'Colin Stetson', 'Godspeed You! Black Emperor'],
    colorPalette: ['#f97316', '#dc2626', '#1e0d06']
  },
  {
    id: 'highway-61-revisited-1965',
    year: 1965,
    catalogCode: 'COL-CL2389',
    eraId: 'rock-psychedelia-soul',
    category: 'masterpiece',
    title: 'Highway 61 Revisited ("Like a Rolling Stone")',
    artist: 'Bob Dylan',
    producerOrConductor: 'Tom Wilson & Bob Johnston',
    country: 'United States',
    format: '12-inch LP (Columbia)',
    duration: '51:26',
    keySignature: 'C Major',
    bpm: 112,
    instrumentPreset: 'organ',
    motifNotes: [
      { note: ['C4', 'E4', 'G4'], duration: 0.7, delay: 0 },
      { note: ['D4', 'F4', 'A4'], duration: 0.7, delay: 0.8 },
      { note: ['E4', 'G4', 'B4'], duration: 0.7, delay: 1.6 },
      { note: ['F4', 'A4', 'C5'], duration: 0.7, delay: 2.4 },
      { note: ['G4', 'B4', 'D5'], duration: 1.8, delay: 3.2 },
    ],
    motifDescription: 'Al Kooper’s accidental, church-like Hammond B-3 organ chord climb (C–Dm–Em–F–G) on "Like a Rolling Stone".',
    coverUrl: '/covers/cross-road-blues-1936.jpg',
    primaryTag: 'Folk-Rock Revolution',
    logline: 'With a pistol-shot snare hit and a six-minute torrent of surrealist electric poetry, Bob Dylan shattered the three-minute radio single forever.',
    historicalEssay: [
      'When session guitarist Al Kooper snuck behind the Hammond B-3 organ at Columbia Studio A despite barely knowing how to play the instrument, he hesitated a fraction of a second behind every chord change—waiting to hear what Paul Griffin played on the piano first. Producer Tom Wilson turned the organ up in the mix, and rock music was reborn.',
      'Clocking in at over six minutes, "Like a Rolling Stone" forced AM radio stations to play a song twice the standard length, marrying Rimbaud-esque literary symbolism with blistering Chicago electric blues.'
    ],
    sonicBreakthrough: {
      headline: 'The 6-Minute Literary Rock Epic',
      detail: 'Destroyed the division between "serious" poetry and loud, raw rock and roll.'
    },
    essentialTrack: {
      title: 'Like a Rolling Stone & Desolation Row',
      description: 'Opening snare crack by Bobby Gregg and Mike Bloomfield’s razor-wire Telecaster.'
    },
    famousQuote: {
      text: 'That snare shot sounded like somebody kicked open the door to your mind.',
      attribution: 'Bruce Springsteen'
    },
    accolades: '#1 Greatest Song of All Time (Rolling Stone); Grammy Hall of Fame',
    influencedBy: ['Robert Johnson', 'Woody Guthrie', 'Arthur Rimbaud', 'Chuck Berry'],
    pavedWayFor: ['The Beatles (Rubber Soul)', 'Jimi Hendrix', 'Patti Smith', 'The Clash'],
    colorPalette: ['#ef4444', '#3b82f6', '#180c12']
  },
  {
    id: 'nina-simone-sinnerman-1965',
    year: 1965,
    catalogCode: 'PHS-600-187',
    eraId: 'rock-psychedelia-soul',
    category: 'rhythm-jazz-hiphop',
    title: 'Pastel Blues & Wild Is the Wind ("Sinnerman")',
    artist: 'Nina Simone',
    producerOrConductor: 'Hal Mooney',
    country: 'United States',
    format: '12-inch LP (Philips)',
    duration: '10:22',
    keySignature: 'E Minor',
    bpm: 152,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: 'E3', duration: 0.4, delay: 0 },
      { note: 'E4', duration: 0.4, delay: 0.5 },
      { note: 'G4', duration: 0.4, delay: 1.0 },
      { note: 'A4', duration: 0.4, delay: 1.5 },
      { note: 'B4', duration: 0.8, delay: 2.0 },
      { note: 'A4', duration: 0.4, delay: 3.0 },
      { note: 'G4', duration: 0.4, delay: 3.5 },
      { note: 'E4', duration: 1.0, delay: 4.0 },
    ],
    motifDescription: 'Nina Simone’s relentless, driving E-minor piano ostinato that powers the 10-minute spiritual "Sinnerman".',
    coverUrl: '/covers/strange-fruit-1939.jpg',
    primaryTag: 'Classical Soul & Civil Rights Fire',
    logline: 'Trained in J.S. Bach at Juilliard, the High Priestess of Soul turned an African-American spiritual into a 10-minute polyrhythmic hurricane.',
    historicalEssay: [
      'Denied entry to the Curtis Institute of Music because of her race despite her prodigal command of Bach and Chopin, Eunice Waymon took the stage name Nina Simone and forged a genre-defying synthesis of classical counterpoint, gospel ecstasy, jazz improvisation, and fearless Civil Rights activism.',
      'Closing her 1965 album Pastel Blues, "Sinnerman" was recorded live in the studio in a single ten-minute take—building from a whispered handclap groove into a thunderous piano-and-vocal exorcism.'
    ],
    sonicBreakthrough: {
      headline: 'Classical Counterpoint Meets Spiritual Trance',
      detail: 'Sustained a 10-minute one-chord modal tension through polyrhythmic piano voicings and dramatic vocal dynamics.'
    },
    essentialTrack: {
      title: 'Sinnerman & Strange Fruit',
      description: 'One of the most sampled and cinema-synced recordings of the 20th century.'
    },
    famousQuote: {
      text: 'An artist’s duty, as far as I’m concerned, is to reflect the times.',
      attribution: 'Nina Simone'
    },
    accolades: 'Grammy Hall of Fame; National Recording Registry',
    influencedBy: ['J.S. Bach', 'Billie Holiday', 'Mahalia Jackson'],
    pavedWayFor: ['Aretha Franklin', 'Lauryn Hill', 'Kanye West', 'Anohni'],
    colorPalette: ['#d97706', '#9333ea', '#1b1109']
  },
  {
    id: 'aretha-never-loved-a-man-1967',
    year: 1967,
    catalogCode: 'ATL-SD8139',
    eraId: 'rock-psychedelia-soul',
    category: 'rhythm-jazz-hiphop',
    title: 'I Never Loved a Man the Way I Love You ("Respect")',
    artist: 'Aretha Franklin',
    producerOrConductor: 'Jerry Wexler',
    country: 'United States',
    format: '12-inch LP (Atlantic)',
    duration: '33:14',
    keySignature: 'C Major',
    bpm: 115,
    instrumentPreset: 'organ',
    motifNotes: [
      { note: 'A4', duration: 0.35, delay: 0 },
      { note: 'G4', duration: 0.35, delay: 0.4 },
      { note: 'E4', duration: 0.35, delay: 0.8 },
      { note: 'C4', duration: 0.45, delay: 1.2 },
      { note: ['F3', 'A3', 'C4', 'Eb4'], duration: 0.8, delay: 1.8 },
      { note: ['C3', 'E3', 'G3', 'Bb3'], duration: 1.2, delay: 2.8 },
    ],
    motifDescription: 'The "R-E-S-P-E-C-T" vocal hook and gospel seventh-chord piano/horn stabs.',
    coverUrl: '/covers/aretha-respect-1967.jpg',
    primaryTag: 'Southern Soul & Gospel Liberation',
    logline: 'Sitting down at the piano in Muscle Shoals, Alabama, Aretha Franklin turned Otis Redding’s song inside out and crowned herself the Queen of Soul.',
    historicalEssay: [
      'After years of polite jazz-pop recordings at Columbia, producer Jerry Wexler brought 24-year-old Aretha Franklin to FAME Studios in Muscle Shoals and Atlantic Studios in New York. Placed at the piano where she could direct the groove with her own gospel chords, she erupted.',
      'With her sisters Erma and Carolyn adding the immortal "R-E-S-P-E-C-T" and "TCB (Taking Care of Business)" bridge, "Respect" became the universal anthem of both the Civil Rights and feminist movements.'
    ],
    sonicBreakthrough: {
      headline: 'Gospel Piano-Driven Soul Architecture',
      detail: 'Built the entire rhythm section arrangement around Aretha’s church-trained left-hand piano patterns and call-and-response vocal harmonies.'
    },
    essentialTrack: {
      title: 'Respect & I Never Loved a Man (The Way I Love You)',
      description: 'King Curtis’s blistering tenor sax solo paired with Aretha’s four-octave vocal authority.'
    },
    famousQuote: {
      text: 'That girl just stole that song from me—it’s her song now.',
      attribution: 'Otis Redding (at the 1967 Monterey Pop Festival)'
    },
    accolades: '#1 Song of All Time (Rolling Stone 2021); 2 Grammy Awards',
    influencedBy: ['Clara Ward', 'Sam Cooke', 'Ray Charles'],
    pavedWayFor: ['Chaka Khan', 'Whitney Houston', 'Beyoncé', 'Alicia Keys'],
    colorPalette: ['#ec4899', '#f59e0b', '#1f0b15']
  },
  {
    id: 'sgt-peppers-abbey-road-1967',
    year: 1967,
    catalogCode: 'PMC-7027',
    eraId: 'rock-psychedelia-soul',
    category: 'masterpiece',
    title: 'Sgt. Pepper’s Lonely Hearts Club Band & Abbey Road',
    artist: 'The Beatles',
    producerOrConductor: 'George Martin & Geoff Emerick',
    country: 'United Kingdom',
    format: '12-inch Gatefold LP (Parlophone)',
    duration: '39:52',
    keySignature: 'G Major / E Minor',
    bpm: 78,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['G3', 'B3', 'E4'], duration: 0.9, delay: 0 },
      { note: ['F#3', 'B3', 'D4'], duration: 0.9, delay: 1.0 },
      { note: ['E3', 'G3', 'B3'], duration: 0.9, delay: 2.0 },
      { note: ['C3', 'E3', 'G3', 'B3'], duration: 1.2, delay: 3.0 },
      { note: ['E2', 'E3', 'G#3', 'B3', 'E4'], duration: 2.8, delay: 4.5 },
    ],
    motifDescription: 'The melancholic descending piano walk of "A Day in the Life" resolving into the famous 40-second three-piano E-major final chord.',
    coverUrl: '/covers/sgt-peppers-1967.jpg',
    primaryTag: 'Psychedelic Studio Symphony',
    logline: 'Retiring permanently from live stadium touring, The Beatles locked themselves inside EMI Studio Two for 700 hours and turned the LP into the unified artistic medium of the 20th century.',
    historicalEssay: [
      'Working on four-track Studer tape machines with producer George Martin and 19-year-old engineer Geoff Emerick, The Beatles bounced tracks between machines to layer 40-piece aleatoric orchestras, Mellotrons, Indian sitars and tablas, varispeed vocals, and spliced calliope organ tapes.',
      'Its closing masterpiece, "A Day in the Life", fused John Lennon’s surreal dreamscapes with Paul McCartney’s brisk waking-world bridge via a terrifying 24-bar orchestral glissando—ending on a single E-major chord struck simultaneously on three pianos and held for 42 seconds.'
    ],
    sonicBreakthrough: {
      headline: '4-Track Tape Bouncing & Aleatoric Orchestration',
      detail: 'Synchronized two separate 4-track tape machines to achieve 8-track orchestral density and seamless crossfades with zero gaps between songs.'
    },
    essentialTrack: {
      title: 'A Day in the Life & Lucy in the Sky with Diamonds',
      description: 'The pinnacle of 1960s psychedelic studio craftsmanship.'
    },
    famousQuote: {
      text: 'I’d love to turn you on.',
      attribution: 'John Lennon & Paul McCartney ("A Day in the Life")'
    },
    accolades: 'First Rock Album to Win Grammy Award for Album of the Year (1968)',
    influencedBy: ['The Beach Boys (Pet Sounds)', 'Karlheinz Stockhausen', 'Ravi Shankar'],
    pavedWayFor: ['Pink Floyd', 'Radiohead', 'Electric Light Orchestra', 'Tame Impala'],
    colorPalette: ['#ef4444', '#eab308', '#1f0d09']
  },
  {
    id: 'led-zeppelin-iv-1971',
    year: 1971,
    catalogCode: 'ATL-SD7208',
    eraId: 'rock-psychedelia-soul',
    category: 'masterpiece',
    title: 'Led Zeppelin IV ("Stairway to Heaven" & "When the Levee Breaks")',
    artist: 'Led Zeppelin',
    producerOrConductor: 'Jimmy Page & Andy Johns',
    country: 'United Kingdom',
    format: '12-inch LP (Atlantic)',
    duration: '42:34',
    keySignature: 'A Minor',
    bpm: 82,
    instrumentPreset: 'harpsichord',
    motifNotes: [
      { note: 'A3', duration: 0.6, delay: 0 },
      { note: 'C4', duration: 0.6, delay: 0.6 },
      { note: 'E4', duration: 0.6, delay: 1.2 },
      { note: 'A4', duration: 0.6, delay: 1.8 },
      { note: ['G#3', 'B4'], duration: 0.6, delay: 2.4 },
      { note: 'E4', duration: 0.6, delay: 3.0 },
      { note: 'C4', duration: 0.6, delay: 3.6 },
      { note: 'B4', duration: 0.6, delay: 4.2 },
      { note: ['G3', 'C5'], duration: 0.6, delay: 4.8 },
      { note: 'E4', duration: 0.6, delay: 5.4 },
      { note: 'C4', duration: 0.6, delay: 6.0 },
      { note: 'C5', duration: 0.6, delay: 6.6 },
      { note: ['F#3', 'D4', 'F#4'], duration: 1.4, delay: 7.2 },
    ],
    motifDescription: 'Jimmy Page’s iconic chromatic descending A-minor acoustic arpeggio that opens "Stairway to Heaven".',
    coverUrl: '/covers/are-you-experienced-1967.jpg',
    primaryTag: 'Hard Rock & Acoustic Mysticism',
    logline: 'Setting up John Bonham’s drum kit at the bottom of a three-story stone stairwell at Headley Grange, Led Zeppelin captured the most colossal drum sound in rock history.',
    historicalEssay: [
      'Refusing to print their name or an album title on the sleeve, Led Zeppelin recorded their fourth album inside a drafty Victorian poorhouse in Hampshire using the Rolling Stones Mobile Studio. Engineer Andy Johns hung two Beyerdynamic M160 microphones from the second-floor landing above John Bonham’s drums and ran them through a Binson Echorec.',
      'The resulting drum break on "When the Levee Breaks" became one of the most sampled beats in hip-hop history (Beastie Boys, Dr. Dre, Massive Attack, Beyoncé), while the 8-minute crescendo of "Stairway to Heaven" defined stadium rock.'
    ],
    sonicBreakthrough: {
      headline: 'Ambient Stairwell Room-Mic Recording',
      detail: 'Replaced close-miked dead studio drums with massive natural room reflections and limiting.'
    },
    essentialTrack: {
      title: 'Stairway to Heaven & When the Levee Breaks',
      description: 'From Renaissance wooden recorders to earth-shattering double-neck Gibson EDS-1275 overdrive.'
    },
    famousQuote: {
      text: 'The secret of a huge guitar and drum sound isn’t volume—it’s distance and air.',
      attribution: 'Jimmy Page'
    },
    accolades: '37 Million Copies Sold Globally; Grammy Hall of Fame',
    influencedBy: ['Memphis Minnie', 'Bert Jansch', 'Howlin’ Wolf', 'Fairport Convention'],
    pavedWayFor: ['Beastie Boys (Licensed to Ill)', 'Queens of the Stone Age', 'Tool'],
    colorPalette: ['#b45309', '#f59e0b', '#181007']
  },
  {
    id: 'clube-da-esquina-1972',
    year: 1972,
    catalogCode: 'EMI-MOAB6005',
    eraId: 'rock-psychedelia-soul',
    category: 'cult',
    isCultGem: true,
    title: 'Clube da Esquina (Corner Club)',
    artist: 'Milton Nascimento & Lô Borges',
    producerOrConductor: 'Milton Miranda & Lindolfo Gaya',
    country: 'Brazil (Minas Gerais)',
    format: 'Double 12-inch LP (Odeon)',
    duration: '64:26',
    keySignature: 'E Major',
    bpm: 104,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['E3', 'B3', 'F#4', 'G#4'], duration: 1.0, delay: 0 },
      { note: ['D3', 'A3', 'F#4', 'A4'], duration: 1.0, delay: 1.1 },
      { note: ['C3', 'G3', 'E4', 'B4'], duration: 1.0, delay: 2.2 },
      { note: ['B2', 'F#3', 'D#4', 'A4'], duration: 1.4, delay: 3.3 },
    ],
    motifDescription: 'Lush Minas Gerais open-string ninth and eleventh chord voicings blending bossa nova, Beatles baroque pop, and sacred choral harmony.',
    coverUrl: '/covers/what-s-going-on-1971.jpg',
    primaryTag: 'Brazilian Baroque-Psych Masterpiece',
    logline: 'Renting a beach house in Mar Azul under the shadow of Brazil’s military dictatorship, 30-year-old Milton Nascimento and 19-year-old Lô Borges created the sun-drenched pinnacle of South American art-pop.',
    historicalEssay: [
      'While Rio de Janeiro had Bossa Nova and Bahia had Tropicália, the landlocked mountains of Minas Gerais birthed a deeply spiritual, harmonically labyrinthine sound known as Clube da Esquina. Fusing 18th-century colonial church polyphony with The Beatles, Miles Davis, and Afro-Brazilian rhythms, Milton Nascimento’s otherworldly falsetto soared over Lô Borges’s chiming acoustic guitars.',
      'spanning 21 tracks across four vinyl sides, Clube da Esquina has become a revered touchstone for jazz giants (Wayne Shorter, Pat Metheny) and modern indie visionaries alike.'
    ],
    sonicBreakthrough: {
      headline: 'Minas Gerais Modal & Quartal Guitar Harmony',
      detail: 'Used unconventional guitar voicings incorporating open upper strings against descending chromatic basslines.'
    },
    essentialTrack: {
      title: 'Tudo O Que Você Podia Ser & Cravo e Canela',
      description: 'Sunlit nylon-string guitar propulsion giving way to cinematic orchestral swells.'
    },
    famousQuote: {
      text: 'If God sang, He would sound like Milton Nascimento.',
      attribution: 'Elis Regina'
    },
    accolades: 'Voted #1 Greatest Brazilian Album of All Time (Discoteca Básica)',
    influencedBy: ['João Gilberto', 'The Beatles', 'Wayne Shorter', 'Villa-Lobos'],
    pavedWayFor: ['Pat Metheny', 'Fleet Foxes', 'Stereolab', 'Hiatus Kaiyote'],
    colorPalette: ['#f59e0b', '#06b6d4', '#1a1208']
  },
  {
    id: 'ziggy-stardust-1972',
    year: 1972,
    catalogCode: 'RCA-SF8287',
    eraId: 'rock-psychedelia-soul',
    category: 'masterpiece',
    title: 'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
    artist: 'David Bowie',
    producerOrConductor: 'David Bowie & Ken Scott',
    country: 'United Kingdom',
    format: '12-inch LP (RCA Victor)',
    duration: '38:37',
    keySignature: 'F Major',
    bpm: 100,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['Bb3', 'D4', 'F4'], duration: 1.0, delay: 0 },
      { note: 'F4', duration: 1.2, delay: 1.2 },
      { note: 'F5', duration: 1.6, delay: 2.5 },
      { note: 'E5', duration: 0.5, delay: 4.2 },
      { note: 'D5', duration: 0.5, delay: 4.8 },
      { note: 'C5', duration: 0.8, delay: 5.4 },
      { note: 'A4', duration: 1.2, delay: 6.3 },
    ],
    motifDescription: 'The "Over the Rainbow" octave vocal leap ("There’s a starman waiting in the sky") from F4 to F5.',
    coverUrl: '/covers/dark-side-of-the-moon-1973.jpg',
    primaryTag: 'Glam Rock & Theatrical Concept Art',
    logline: 'Creating an androgynous alien rock messiah with five years left before Earth’s apocalypse, David Bowie turned identity itself into a work of high art.',
    historicalEssay: [
      'Recorded at Trident Studios in Soho with guitarist Mick Ronson, Ziggy Stardust fused the theatricality of Japanese Kabuki theater and French mime with ferocious proto-punk guitar riffs and sweeping string arrangements.',
      'When Bowie performed "Starman" on the UK’s Top of the Pops in July 1972 draped in a rainbow jumpsuit and slinging his arm around Mick Ronson’s shoulder, an entire generation of British post-punk, new wave, and synth-pop artists was born overnight.'
    ],
    sonicBreakthrough: {
      headline: 'Theatrical Persona & Dry Acoustic/Electric Contrast',
      detail: 'Ken Scott paired bone-dry 12-string acoustic guitars directly against Mick Ronson’s cocked-wah Les Paul sustain.'
    },
    essentialTrack: {
      title: 'Starman, Five Years & Moonage Daydream',
      description: 'Apocalyptic cabaret drum waltzes and soaring glam hooks.'
    },
    famousQuote: {
      text: 'TO BE PLAYED AT MAXIMUM VOLUME.',
      attribution: 'Back sleeve inscription on Ziggy Stardust (1972)'
    },
    accolades: 'National Recording Registry; Rolling Stone Top 40 Albums of All Time',
    influencedBy: ['The Velvet Underground', 'Jacques Brel', 'Iggy Pop', 'T. Rex'],
    pavedWayFor: ['Joy Division', 'The Cure', 'Pulp', 'Lady Gaga', 'St. Vincent'],
    colorPalette: ['#ef4444', '#06b6d4', '#1b0b14']
  },
  {
    id: 'songs-in-the-key-of-life-1976',
    year: 1973,
    catalogCode: 'TAM-T326L',
    eraId: 'rock-psychedelia-soul',
    category: 'rhythm-jazz-hiphop',
    title: 'Innervisions & Songs in the Key of Life',
    artist: 'Stevie Wonder',
    producerOrConductor: 'Stevie Wonder, Robert Margouleff & Malcolm Cecil',
    country: 'United States',
    format: 'Double 12-inch LP + 7-inch EP (Tamla / Motown)',
    duration: '104:40',
    keySignature: 'E-flat Minor',
    bpm: 101,
    instrumentPreset: 'harpsichord',
    motifNotes: [
      { note: 'Eb3', duration: 0.35, delay: 0 },
      { note: 'Eb4', duration: 0.35, delay: 0.4 },
      { note: 'Db4', duration: 0.35, delay: 0.8 },
      { note: 'Eb4', duration: 0.35, delay: 1.2 },
      { note: 'Gb4', duration: 0.4, delay: 1.6 },
      { note: 'F4', duration: 0.35, delay: 2.1 },
      { note: 'Eb4', duration: 0.4, delay: 2.5 },
      { note: 'Db4', duration: 0.4, delay: 3.0 },
      { note: 'Bb3', duration: 0.5, delay: 3.5 },
      { note: 'Eb3', duration: 0.9, delay: 4.1 },
    ],
    motifDescription: 'Stevie Wonder’s multi-tracked Hohner Clavinet C funk riff in E-flat minor coupled with his Moog bass and live drum kit.',
    coverUrl: '/covers/what-s-going-on-1971.jpg',
    primaryTag: 'One-Man Synthesizer & Funk Odyssey',
    logline: 'Renegotiating his Motown contract at age 21 for total creative control, Stevie Wonder played drums, Hohner Clavinet, Fender Rhodes, and the massive TONTO modular synthesizer himself.',
    historicalEssay: [
      'Between 1972 and 1976, Stevie Wonder embarked on the most astonishing streak in popular music history—releasing Talking Book, Innervisions, Fulfillingness’ First Finale, and the double-album magnum opus Songs in the Key of Life. Collaborating with synth pioneers Malcolm Cecil and Robert Margouleff on TONTO (The Original New Timbral Orchestra), he proved that analog synthesizers could sweat and groove.',
      'Playing nearly every instrument himself on tracks like "Superstition", "Living for the City", and "As", Wonder won three Album of the Year Grammys in four years.'
    ],
    sonicBreakthrough: {
      headline: 'Multi-Tracked Hohner Clavinet & TONTO Synth Bass',
      detail: 'Replaced traditional electric bass guitars with expressive, pitch-bent Minimoog and ARP basslines.'
    },
    essentialTrack: {
      title: 'Superstition, Living for the City & As',
      description: 'Syncopated Clavinet funk and ecstatic jazz-gospel chord modulations.'
    },
    famousQuote: {
      text: 'Let’s thank God Stevie Wonder took a break in 1975, or none of the rest of us would ever win a Grammy.',
      attribution: 'Paul Simon (at the 1976 Grammy Awards)'
    },
    accolades: '3× Grammy Award for Album of the Year; Library of Congress Registry',
    influencedBy: ['Ray Charles', 'Marvin Gaye', 'Duke Ellington', 'Sly Stone'],
    pavedWayFor: ['Prince', 'Michael Jackson', 'Herbie Hancock', 'D’Angelo', 'Thundercat'],
    colorPalette: ['#f97316', '#eab308', '#1e1005']
  },
  {
    id: 'head-hunters-hancock-1973',
    year: 1973,
    catalogCode: 'COL-KC32731',
    eraId: 'rock-psychedelia-soul',
    category: 'rhythm-jazz-hiphop',
    title: 'Head Hunters ("Chameleon" & "Watermelon Man")',
    artist: 'Herbie Hancock',
    producerOrConductor: 'Herbie Hancock & David Rubinson',
    country: 'United States',
    format: '12-inch LP (Columbia)',
    duration: '41:52',
    keySignature: 'B-flat Minor',
    bpm: 96,
    instrumentPreset: 'moog',
    motifNotes: [
      { note: 'G2', duration: 0.35, delay: 0 },
      { note: 'Ab2', duration: 0.35, delay: 0.4 },
      { note: 'A2', duration: 0.35, delay: 0.8 },
      { note: 'Bb2', duration: 0.6, delay: 1.2 },
      { note: 'F3', duration: 0.4, delay: 2.0 },
      { note: 'Ab3', duration: 0.4, delay: 2.5 },
      { note: 'Bb3', duration: 0.8, delay: 3.0 },
      { note: 'C2', duration: 0.35, delay: 4.0 },
      { note: 'Db2', duration: 0.35, delay: 4.4 },
      { note: 'D2', duration: 0.35, delay: 4.8 },
      { note: 'Eb2', duration: 0.8, delay: 5.2 },
    ],
    motifDescription: 'The chromatic three-note pickup into the squelching ARP Odyssey synth-bass groove of "Chameleon".',
    coverUrl: '/covers/switched-on-bach-1968.jpg',
    primaryTag: 'Jazz-Funk & Analog Synth Groove',
    logline: 'Trading his avant-garde acoustic sextet for an ARP Odyssey synthesizer, Fender Rhodes, Clavinet, and beer-bottle hindewhu pipes, Herbie Hancock bridged Miles Davis and Sly Stone.',
    historicalEssay: [
      'After years of boundary-pushing experimental jazz with his Mwandishi sextet, former Miles Davis pianist Herbie Hancock craved a visceral, earthbound groove inspired by Sly & the Family Stone and Curtis Mayfield. Forming The Headhunters with saxophonist Bennie Maupin, bassist Paul Jackson, and drummer Harvey Mason, he banned guitars entirely in favor of stacked keyboards.',
      'Opening with the 15-minute synth-funk odyssey "Chameleon" and reimagining "Watermelon Man" with percussionist Bill Summers blowing across beer bottles to imitate Central African Ba-Benzélé pygmies, Head Hunters became the first platinum-selling jazz album in history.'
    ],
    sonicBreakthrough: {
      headline: 'ARP Odyssey Synth Bass + Afro-Pygmy Hindewhu Hocketing',
      detail: 'Layered analog synthesizer basslines with interlocking Clavinet rhythms and Central African vocal-flute hocketing.'
    },
    essentialTrack: {
      title: 'Chameleon & Watermelon Man (1973 Version)',
      description: 'Sampled on hundreds of hip-hop classics from Tupac to Nas.'
    },
    famousQuote: {
      text: 'I realized that jazz didn’t have to sit in an ivory tower—it could make your whole body move.',
      attribution: 'Herbie Hancock'
    },
    accolades: 'National Recording Registry; Platinum Jazz Landmark',
    influencedBy: ['Miles Davis', 'Sly & the Family Stone', 'James Brown', 'Ba-Benzélé Music'],
    pavedWayFor: ['Parliament-Funkadelic', 'Flying Lotus', 'Thundercat', 'Kamasi Washington'],
    colorPalette: ['#eab308', '#10b981', '#1a1506']
  },
  {
    id: 'fela-zombie-1976',
    year: 1976,
    catalogCode: 'CREC-LP001',
    eraId: 'punk-synth-hiphop',
    category: 'rhythm-jazz-hiphop',
    isCultGem: true,
    title: 'Zombie & Expensive Shit',
    artist: 'Fela Anikulapo Kuti & Africa 70',
    producerOrConductor: 'Fela Kuti (feat. Tony Allen on Drums)',
    country: 'Nigeria (Lagos)',
    format: '12-inch LP (Coconut / Creole)',
    duration: '25:14',
    keySignature: 'D Minor',
    bpm: 122,
    instrumentPreset: 'organ',
    motifNotes: [
      { note: 'D4', duration: 0.4, delay: 0 },
      { note: 'F4', duration: 0.4, delay: 0.5 },
      { note: 'G4', duration: 0.4, delay: 1.0 },
      { note: 'A4', duration: 0.8, delay: 1.5 },
      { note: 'G4', duration: 0.4, delay: 2.5 },
      { note: 'F4', duration: 0.4, delay: 3.0 },
      { note: 'D4', duration: 1.0, delay: 3.5 },
    ],
    motifDescription: 'Fela’s biting tenor sax/electric organ horn riff over Tony Allen’s four-way independent Afrobeat drum polyrhythm.',
    coverUrl: '/covers/fela-zombie-1976.jpg',
    primaryTag: 'Afrobeat Political Revolution',
    logline: 'Mocking the Nigerian military junta as mindless robots over a 12-minute hypnotic polyrhythm, Fela Kuti provoked 1,000 armed soldiers to lay siege to his Kalakuta Republic commune.',
    historicalEssay: [
      'Alongside master drummer Tony Allen—whom Brian Eno called "perhaps the greatest drummer who has ever lived"—Fela Kuti synthesized Yoruba percussion, Ghanaian highlife, James Brown funk, and modal jazz into Afrobeat. Each side of a Fela LP contained a single 12-to-15-minute composition that built for seven minutes of instrumental groove before Fela entered on saxophone and Pidgin English vocals.',
      'Released in 1976, Zombie ridiculed Nigerian soldiers who obeyed orders without thinking ("Zombie no go go, unless you tell am to go"). Enraged, the military regime sent 1,000 soldiers to burn down Fela’s Kalakuta Republic compound—yet Fela returned with even fiercer anthems.'
    ],
    sonicBreakthrough: {
      headline: 'Interlocking Tenor/Rhythm Guitars & 4-Limb Polyrhythm',
      detail: 'Tony Allen played four distinct rhythmic patterns simultaneously across hi-hat, snare, kick, and cross-stick while two guitarists locked into a perpetual hypnotic grid.'
    },
    essentialTrack: {
      title: 'Zombie & Water No Get Enemy',
      description: 'Relentless brass stabs, electric piano solos, and call-and-response chorus.'
    },
    famousQuote: {
      text: 'Without Tony Allen, there would be no Afrobeat.',
      attribution: 'Fela Kuti'
    },
    accolades: 'Grammy Hall of Fame; Cornerstone of African Popular Music',
    influencedBy: ['James Brown', 'Geraldo Pino', 'Miles Davis', 'Yoruba Fuji Percussion'],
    pavedWayFor: ['Talking Heads (Remain in Light)', 'Burna Boy', 'Antibalas', 'Ezra Collective'],
    colorPalette: ['#eab308', '#dc2626', '#1e1306']
  },
  {
    id: 'rumours-fleetwood-mac-1977',
    year: 1977,
    catalogCode: 'WB-BSK3010',
    eraId: 'punk-synth-hiphop',
    category: 'masterpiece',
    title: 'Rumours ("The Chain" & "Dreams")',
    artist: 'Fleetwood Mac',
    producerOrConductor: 'Fleetwood Mac, Ken Caillat & Richard Dashut',
    country: 'UK / United States',
    format: '12-inch LP (Warner Bros.)',
    duration: '39:43',
    keySignature: 'E Minor',
    bpm: 151,
    instrumentPreset: 'moog',
    motifNotes: [
      { note: 'A2', duration: 0.8, delay: 0 },
      { note: 'A2', duration: 0.35, delay: 1.0 },
      { note: 'B2', duration: 0.35, delay: 1.4 },
      { note: 'C3', duration: 0.35, delay: 1.8 },
      { note: 'B2', duration: 0.35, delay: 2.2 },
      { note: 'A2', duration: 0.35, delay: 2.6 },
      { note: 'G2', duration: 0.35, delay: 3.0 },
      { note: 'E2', duration: 0.6, delay: 3.4 },
      { note: 'G2', duration: 0.4, delay: 4.1 },
      { note: 'A2', duration: 1.2, delay: 4.6 },
    ],
    motifDescription: 'John McVie’s legendary fretless bass breakdown riff that ignites the final crescendo of "The Chain".',
    coverUrl: '/covers/dark-side-of-the-moon-1973.jpg',
    primaryTag: 'Studio Pop Alchemy',
    logline: 'While both romantic couples in the band were breaking up simultaneously inside a windowless Sausalito studio, Fleetwood Mac transmuted heartbreak into 45 million copies of gold.',
    historicalEssay: [
      'Recorded over a year at the Record Plant in Sausalito, California, Rumours saw Christine and John McVie divorcing, Stevie Nicks and Lindsey Buckingham splitting up, and Mick Fleetwood’s marriage collapsing—yet every member had to sing harmonies on songs written directly about their own betrayals.',
      '"The Chain", the only song credited to all five members, was literally spliced together with a razor blade from fragments of four different unfinished recordings—culminating in John McVie’s iconic bassline and Buckingham’s blistering outro solo.'
    ],
    sonicBreakthrough: {
      headline: 'Razor-Spliced Multi-Track Pop Perfection',
      detail: 'Combined hyper-intimate close-miked acoustic fingerpicking with tape-looped drum beds ("Dreams").'
    },
    essentialTrack: {
      title: 'The Chain, Dreams & Go Your Own Way',
      description: 'Every single track on the 11-song album became a classic radio staple.'
    },
    famousQuote: {
      text: 'Listen to the wind blow, watch the sun rise.',
      attribution: 'Fleetwood Mac ("The Chain")'
    },
    accolades: 'Grammy Award for Album of the Year; 45M+ Copies Sold (21× Platinum)',
    influencedBy: ['The Byrds', 'Joni Mitchell', 'Peter Green', 'CSNY'],
    pavedWayFor: ['HAIM', 'Lana Del Rey', 'Phoebe Bridgers', 'Taylor Swift (Folklore)'],
    colorPalette: ['#f59e0b', '#78716c', '#181512']
  },
  {
    id: 'marquee-moon-television-1977',
    year: 1977,
    catalogCode: 'ELK-7E-1098',
    eraId: 'punk-synth-hiphop',
    category: 'cult',
    isCultGem: true,
    title: 'Marquee Moon',
    artist: 'Television',
    producerOrConductor: 'Andy Johns & Tom Verlaine',
    country: 'United States (New York City)',
    format: '12-inch LP (Elektra)',
    duration: '45:54',
    keySignature: 'B Mixolydian',
    bpm: 120,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['B3', 'F#4'], duration: 0.4, delay: 0 },
      { note: ['A3', 'E4'], duration: 0.4, delay: 0.5 },
      { note: ['B3', 'F#4'], duration: 0.4, delay: 1.0 },
      { note: 'D#4', duration: 0.4, delay: 1.5 },
      { note: 'E4', duration: 0.4, delay: 2.0 },
      { note: 'F#4', duration: 0.4, delay: 2.5 },
      { note: 'G#4', duration: 0.4, delay: 3.0 },
      { note: 'F#4', duration: 0.8, delay: 3.5 },
    ],
    motifDescription: 'Tom Verlaine and Richard Lloyd’s interlocking clean twin-Fender Jazzmaster/Stratocaster arpeggio lattice.',
    coverUrl: '/covers/trans-europe-express-1977.jpg',
    primaryTag: 'CBGB Art-Punk Guitar Architecture',
    logline: 'The band that convinced CBGB owner Hilly Kristal to let underground rock groups play his Bowery bar rejected fuzzy power chords for crystalline, John Coltrane-inspired dual guitar counterpoint.',
    historicalEssay: [
      'While the Ramones stripped punk down to three buzzsaw chords at CBGB, Television’s Tom Verlaine and Richard Lloyd built towering, ten-minute cathedrals of clean, trebly, interlocking guitar lines. Rejecting blues clichés and heavy distortion pedals, one guitar would play a mathematical rhythmic staircase while the other spiraled upward like a jazz horn.',
      'Recorded live in the studio with virtually no overdubs—including the 10-minute title track captured in a single breathtaking take—Marquee Moon became the foundational blueprint for post-punk and indie rock guitar.'
    ],
    sonicBreakthrough: {
      headline: 'Zero-Distortion Interlocking Twin-Guitar Counterpoint',
      detail: 'Replaced traditional rhythm-and-lead guitar roles with two equal contrapuntal voices panned left and right.'
    },
    essentialTrack: {
      title: 'Marquee Moon (10:40 Uncut Version) & See No Evil',
      description: 'Ascends through a modal guitar solo that resolves in a weightless, bell-like chime.'
    },
    famousQuote: {
      text: 'I never listened to guitar players; I listened to John Coltrane and Albert Ayler.',
      attribution: 'Tom Verlaine'
    },
    accolades: 'Ranked #2 Greatest Album of the 1970s (Pitchfork); Post-Punk Cornerstone',
    influencedBy: ['The Velvet Underground', 'John Coltrane', '13th Floor Elevators'],
    pavedWayFor: ['The Strokes', 'Sonic Youth', 'Joy Division', 'R.E.M.', 'Interpol'],
    colorPalette: ['#06b6d4', '#3b82f6', '#061521']
  },
  {
    id: 'solid-state-survivor-ymo-1979',
    year: 1979,
    catalogCode: 'ALR-6022',
    eraId: 'punk-synth-hiphop',
    category: 'electronic',
    isCultGem: true,
    title: 'Solid State Survivor ("Behind the Mask" & "Rydeen")',
    artist: 'Yellow Magic Orchestra (Hosono, Sakamoto, Takahashi)',
    producerOrConductor: 'Haruomi Hosono & Kunihiko Murai',
    country: 'Japan (Tokyo)',
    format: '12-inch LP (Alfa Records)',
    duration: '34:28',
    keySignature: 'F Minor',
    bpm: 138,
    instrumentPreset: 'moog',
    motifNotes: [
      { note: 'F4', duration: 0.35, delay: 0 },
      { note: 'G4', duration: 0.35, delay: 0.4 },
      { note: 'Ab4', duration: 0.5, delay: 0.8 },
      { note: 'C5', duration: 0.5, delay: 1.4 },
      { note: 'Bb4', duration: 0.4, delay: 2.0 },
      { note: 'Ab4', duration: 0.4, delay: 2.5 },
      { note: 'G4', duration: 0.4, delay: 3.0 },
      { note: 'F4', duration: 0.9, delay: 3.5 },
    ],
    motifDescription: 'Ryuichi Sakamoto’s galloping ARP Odyssey lead melody on "Rydeen" and vocoder chords on "Behind the Mask".',
    coverUrl: '/covers/solid-state-survivor-1979.jpg',
    primaryTag: 'Technopop & Microprocessor Pioneer',
    logline: 'Armed with the Roland MC-8 Microcomposer, Moog III-C, and Roland VP-330 Vocoder, Tokyo’s Yellow Magic Orchestra invented computer-sequenced technopop, video-game music, and electro.',
    historicalEssay: [
      'Formed in Tokyo by bassist/producer Haruomi Hosono, classical/electronic polymath Ryuichi Sakamoto, and drummer Yukihiro Takahashi, Yellow Magic Orchestra (YMO) embraced digital microprocessor sequencing years before Western pop. Alongside fourth member and programmer Hideki Matsutake, they typed numerical pitch and gate voltages directly into a Roland MC-8 computer.',
      'Solid State Survivor sold over two million copies worldwide, was covered by Michael Jackson and Eric Clapton ("Behind the Mask"), and directly inspired Bronx electro, Detroit techno, and the entire history of Japanese video-game soundtracks.'
    ],
    sonicBreakthrough: {
      headline: 'Roland MC-8 Microcomputer Sequencing',
      detail: 'First pop album built around microprocessor-controlled CV/Gate synthesis synced to live acoustic-electronic drums.'
    },
    essentialTrack: {
      title: 'Rydeen, Behind the Mask & Technopolis',
      description: 'Hyper-melodic synth hooks and robotic Roland VP-330 vocoder harmonies.'
    },
    famousQuote: {
      text: 'When we played the Apollo Theater in Harlem in 1980, the crowd went crazy for our electronic grooves.',
      attribution: 'Ryuichi Sakamoto'
    },
    accolades: 'Japan Record Award for Best Album; 2M+ Copies Sold',
    influencedBy: ['Kraftwerk', 'Isao Tomita', 'Giorgio Moroder', 'Martin Denny'],
    pavedWayFor: ['Afrika Bambaataa', 'Derrick May', 'Koji Kondo (Nintendo)', 'Daft Punk'],
    colorPalette: ['#ef4444', '#eab308', '#1e0b0b']
  },
  {
    id: 'blue-monday-new-order-1983',
    year: 1983,
    catalogCode: 'FAC-73',
    eraId: 'punk-synth-hiphop',
    category: 'electronic',
    title: 'Blue Monday & Power, Corruption & Lies',
    artist: 'New Order',
    producerOrConductor: 'New Order & Michael Johnson',
    country: 'United Kingdom (Manchester)',
    format: '12-inch Die-Cut Floppy-Disk Single (Factory Records)',
    duration: '7:29',
    keySignature: 'D Minor',
    bpm: 130,
    instrumentPreset: 'moog',
    motifNotes: [
      { note: 'D3', duration: 0.3, delay: 0 },
      { note: 'D4', duration: 0.3, delay: 0.35 },
      { note: 'C3', duration: 0.3, delay: 0.7 },
      { note: 'C4', duration: 0.3, delay: 1.05 },
      { note: 'D3', duration: 0.3, delay: 1.4 },
      { note: 'D4', duration: 0.3, delay: 1.75 },
      { note: 'A2', duration: 0.3, delay: 2.1 },
      { note: 'A3', duration: 0.3, delay: 2.45 },
      { note: 'F4', duration: 0.6, delay: 3.0 },
      { note: 'G4', duration: 0.6, delay: 3.7 },
      { note: 'D4', duration: 1.0, delay: 4.4 },
    ],
    motifDescription: 'Gillian Gilbert’s off-beat Moog Source octave bassline coupled with Peter Hook’s high-register 6-string bass melody.',
    coverUrl: '/covers/planet-rock-1982.jpg',
    primaryTag: 'Post-Punk Meets NYC Club Synth',
    logline: 'Rising from the ashes of Joy Division, New Order accidentally triggered their sequencer a sixteenth-note off the beat and created the best-selling 12-inch single in music history.',
    historicalEssay: [
      'Originally written so the band wouldn’t have to play encores, "Blue Monday" fused the melancholy of Manchester post-punk with the electronic club sounds New Order discovered in New York clubs like the Funhouse and Paradise Garage. Using an Oberheim DMX drum machine for the stuttering 16th-note kick intro, a home-soldered Powertran sequencer, and an Emulator I sampler playing a choir sample stolen from Kraftwerk’s "Uranium", they rewrote dance music.',
      'Packaged by designer Peter Saville in an iconic die-cut sleeve resembling a 5¼-inch floppy disk with no band name or title on the cover, it bridged indie rock and rave culture.'
    ],
    sonicBreakthrough: {
      headline: 'Accidental Off-Grid Sequencer Sync & DMX Stutter',
      detail: 'Gillian Gilbert entered the Moog bass sequence one step late against the Oberheim DMX drum clock, creating a syncopated groove that felt irresistibly human.'
    },
    essentialTrack: {
      title: 'Blue Monday & Age of Consent',
      description: 'Machine-gun Oberheim DMX kicks and Peter Hook’s soaring high-melody bass.'
    },
    famousQuote: {
      text: 'The machine played it wrong, and it sounded ten times better than what we intended.',
      attribution: 'Bernard Sumner'
    },
    accolades: 'Best-Selling 12-Inch Vinyl Single of All Time',
    influencedBy: ['Joy Division', 'Kraftwerk', 'Giorgio Moroder', 'Sylvester'],
    pavedWayFor: ['Pet Shop Boys', 'The Chemical Brothers', 'LCD Soundsystem', 'Depeche Mode'],
    colorPalette: ['#3b82f6', '#10b981', '#091426']
  },
  {
    id: 'world-of-echo-russell-1986',
    year: 1986,
    catalogCode: 'UPS-004',
    eraId: 'punk-synth-hiphop',
    category: 'cult',
    isCultGem: true,
    title: 'World of Echo',
    artist: 'Arthur Russell',
    producerOrConductor: 'Arthur Russell & Peter Zummo',
    country: 'United States (New York City)',
    format: '12-inch LP (Upside / Rough Trade)',
    duration: '55:18',
    keySignature: 'A Major',
    bpm: 88,
    instrumentPreset: 'pad',
    motifNotes: [
      { note: ['A2', 'E3', 'C#4'], duration: 1.5, delay: 0 },
      { note: 'B4', duration: 0.9, delay: 1.6 },
      { note: 'A4', duration: 0.9, delay: 2.6 },
      { note: 'E4', duration: 1.2, delay: 3.6 },
      { note: ['F#2', 'C#3', 'A3', 'E4'], duration: 2.0, delay: 5.0 },
    ],
    motifDescription: 'Amplified cello harmonics swimming through Lexicon digital delay and whispered vocal prayer.',
    coverUrl: '/covers/world-of-echo-1986.jpg',
    primaryTag: 'Avant-Cello & Downtown Echo Mysticism',
    logline: 'With nothing but an amplified cello, a microphone, and a rack of digital delay units, Arthur Russell dissolved the boundary between downtown minimalism, folk intimacy, and dub space.',
    historicalEssay: [
      'During his lifetime, Iowa-born Manhattan cellist, Buddhist meditator, and underground disco producer Arthur Russell released only one solo album under his own name: 1986’s World of Echo. Recorded inside Battery Sound and his East Village apartment, Russell routed his cello and fragile voice through cascading echo chambers and distortion pedals.',
      'Largely overlooked upon release before his death in 1992, World of Echo is now hailed as one of the most original and deeply moving records of the 20th century—predicting bedroom pop, ambient folk, and experimental R&B by thirty years.'
    ],
    sonicBreakthrough: {
      headline: 'Rhythmic Cello & Delay Feedback Architecture',
      detail: 'Used slap-back and long-tail delays on plucked, bowed, and struck cello strings to generate percussion, bass, and atmosphere simultaneously.'
    },
    essentialTrack: {
      title: 'Soon-To-Be Innocent Fun / Let’s See & Answers Me',
      description: 'Sub-aquatic cello pulses and weightless vocal melodies.'
    },
    famousQuote: {
      text: 'Arthur played the cello the way Jimi Hendrix played the Stratocaster and King Tubby played the mixing board.',
      attribution: 'Peter Gordon'
    },
    accolades: 'Pitchfork 10.0 Rating; Cult Touchstone of Downtown NYC Avant-Garde',
    influencedBy: ['Philip Glass', 'Allen Ginsberg', 'David Mancuso (The Loft)', 'Nick Drake'],
    pavedWayFor: ['Frank Ocean', 'James Blake', 'Bon Iver', 'Blood Orange', 'Tirzah'],
    colorPalette: ['#06b6d4', '#6366f1', '#071524']
  },
  {
    id: 'queen-is-dead-smiths-1986',
    year: 1986,
    catalogCode: 'ROUGH-96',
    eraId: 'punk-synth-hiphop',
    category: 'masterpiece',
    title: 'The Queen Is Dead ("There Is a Light That Never Goes Out")',
    artist: 'The Smiths',
    producerOrConductor: 'Morrissey, Johnny Marr & Stephen Street',
    country: 'United Kingdom (Manchester)',
    format: '12-inch LP (Rough Trade)',
    duration: '37:07',
    keySignature: 'F# Minor / A Major',
    bpm: 134,
    instrumentPreset: 'harpsichord',
    motifNotes: [
      { note: 'C#4', duration: 0.4, delay: 0 },
      { note: 'F#4', duration: 0.4, delay: 0.45 },
      { note: 'G#4', duration: 0.4, delay: 0.9 },
      { note: 'A4', duration: 0.6, delay: 1.35 },
      { note: 'G#4', duration: 0.4, delay: 2.0 },
      { note: 'F#4', duration: 0.4, delay: 2.45 },
      { note: 'E4', duration: 0.8, delay: 2.9 },
      { note: ['A3', 'E4', 'B4'], duration: 1.2, delay: 3.8 },
    ],
    motifDescription: 'Johnny Marr’s shimmering capoed guitar arpeggios and synthesized E-mu Emulator flute/string melody on "There Is a Light That Never Goes Out".',
    coverUrl: '/covers/hounds-of-love-1985.jpg',
    primaryTag: 'Indie Guitar Pop & Literary Wit',
    logline: 'At just 22 years old, guitarist Johnny Marr layered dozen-track symphonies of chiming Rickenbackers and open-tuned acoustics that defined British independent music.',
    historicalEssay: [
      'Rejecting the synthesizer-heavy orthodoxy of mid-1980s pop, Manchester’s The Smiths built a fiercely independent sonic world on Rough Trade Records. Johnny Marr eschewed rock guitar solos completely, instead weaving intricate multi-tracked lattices of capoed guitars, Andy Rourke’s melodic funk-inflected basslines, and Mike Joyce’s propulsive drums.',
      'Anchored by "There Is a Light That Never Goes Out"—featuring a poignant synthesized string and flute melody played by Marr on an E-mu Emulator—The Queen Is Dead became the foundational bible of indie rock and Britpop.'
    ],
    sonicBreakthrough: {
      headline: 'Capoed Multi-Track Jangle & Zero-Solo Guitar Orchestration',
      detail: 'Tuned guitars up a full step (F# standard) with capos to achieve harpsichord-like bell clarity across six overdubbed acoustic and electric layers.'
    },
    essentialTrack: {
      title: 'There Is a Light That Never Goes Out & Bigmouth Strikes Again',
      description: 'Romantic desperation set to sparkling 12-string propulsion.'
    },
    famousQuote: {
      text: 'To die by your side is such a heavenly way to die.',
      attribution: 'The Smiths ("There Is a Light That Never Goes Out")'
    },
    accolades: 'Named #1 Greatest Album of All Time by NME (2013)',
    influencedBy: ['The Byrds', 'Roxy Music', 'Bert Jansch', 'New York Dolls'],
    pavedWayFor: ['Radiohead', 'Oasis', 'The Stone Roses', 'Belle and Sebastian', 'Alvvays'],
    colorPalette: ['#10b981', '#ec4899', '#081d15']
  },
  {
    id: 'grace-jeff-buckley-1994',
    year: 1994,
    catalogCode: 'COL-CK57528',
    eraId: 'grunge-idm-rave',
    category: 'masterpiece',
    title: 'Grace ("Hallelujah" & "Lover, You Should’ve Come Over")',
    artist: 'Jeff Buckley',
    producerOrConductor: 'Andy Wallace',
    country: 'United States',
    format: 'CD / 12-inch LP (Columbia)',
    duration: '51:53',
    keySignature: 'C Major',
    bpm: 64,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: 'C3', duration: 0.4, delay: 0 },
      { note: 'G3', duration: 0.4, delay: 0.45 },
      { note: 'C4', duration: 0.4, delay: 0.9 },
      { note: 'E4', duration: 0.4, delay: 1.35 },
      { note: 'C4', duration: 0.4, delay: 1.8 },
      { note: 'G3', duration: 0.4, delay: 2.25 },
      { note: 'A2', duration: 0.4, delay: 2.7 },
      { note: 'E3', duration: 0.4, delay: 3.15 },
      { note: 'A3', duration: 0.4, delay: 3.6 },
      { note: 'C4', duration: 0.4, delay: 4.05 },
      { note: 'E4', duration: 1.4, delay: 4.5 },
    ],
    motifDescription: 'Jeff Buckley’s reverb-drenched Fender Telecaster 6/8 arpeggio on "Hallelujah" (C major to A minor).',
    coverUrl: '/covers/ok-computer-1997.jpg',
    primaryTag: 'Transcendent Vocal & Guitar Catharsis',
    logline: 'With a four-octave voice that channeled Nina Simone, Nusrat Fateh Ali Khan, and Robert Plant, Jeff Buckley recorded a single studio album before his tragic drowning at age 30.',
    historicalEssay: [
      'Honing his craft in tiny East Village coffeehouses like Sin-é, Jeff Buckley possessed an almost supernatural vocal range and harmonic vocabulary. Recorded at Bearsville Studios in Woodstock with producer Andy Wallace, Grace moved effortlessly from Qawwali-inspired vocal improvisation and Ravel-like guitar chords to heavy post-grunge dynamics.',
      'His solo Telecaster reading of Leonard Cohen’s "Hallelujah"—inspired by John Cale’s arrangement—transformed a little-known 1984 song into a secular hymn known across the planet.'
    ],
    sonicBreakthrough: {
      headline: 'Taj Mahal-Style Long-Decay Reverb & Multi-Octave Falsetto',
      detail: 'Combined shimmering clean Telecaster neck-pickup arpeggios with a custom 7-second studio reverb algorithm.'
    },
    essentialTrack: {
      title: 'Hallelujah, Grace & Lover, You Should’ve Come Over',
      description: 'Heart-stopping seven-second final vocal sustain.'
    },
    famousQuote: {
      text: 'After hearing Jeff Buckley sing at Sin-é, we went back to the studio and recorded "Fake Plastic Trees" in two takes and broke down crying.',
      attribution: 'Thom Yorke (Radiohead)'
    },
    accolades: 'Library of Congress National Recording Registry; 2M+ Copies Sold',
    influencedBy: ['Nina Simone', 'Nusrat Fateh Ali Khan', 'Led Zeppelin', 'The Smiths'],
    pavedWayFor: ['Radiohead (The Bends)', 'Muse', 'Sufjan Stevens', 'Moses Sumney'],
    colorPalette: ['#8b5cf6', '#3b82f6', '#130b24']
  },
  {
    id: 'endtroducing-dj-shadow-1996',
    year: 1996,
    catalogCode: 'MW-059',
    eraId: 'grunge-idm-rave',
    category: 'rhythm-jazz-hiphop',
    isCultGem: true,
    title: 'Endtroducing.....',
    artist: 'DJ Shadow',
    producerOrConductor: 'DJ Shadow (Josh Davis)',
    country: 'United States (California)',
    format: 'Double 12-inch LP (Mo’ Wax)',
    duration: '63:05',
    keySignature: 'A Minor',
    bpm: 84,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['A3', 'C4', 'E4'], duration: 1.0, delay: 0 },
      { note: 'B4', duration: 0.6, delay: 1.1 },
      { note: 'C5', duration: 0.6, delay: 1.8 },
      { note: 'A4', duration: 0.8, delay: 2.5 },
      { note: ['F3', 'A3', 'C4', 'E4'], duration: 1.4, delay: 3.4 },
      { note: ['E3', 'G#3', 'B3', 'D4'], duration: 1.4, delay: 5.0 },
    ],
    motifDescription: 'The melancholic sampled piano and organ arpeggio of "Building Steam with a Grain of Salt" & "Midnight in a Perfect World".',
    coverUrl: '/covers/donuts-2006.jpg',
    primaryTag: '100% Sample-Built Turntablist Symphony',
    logline: 'Digging through 60,000 forgotten vinyl records in a Sacramento basement and chopping them on an Akai MPC60 with 1.3MB of memory, DJ Shadow created the first album in Guinness World Records made entirely from samples.',
    historicalEssay: [
      'Without a single live musician, microphone, or synthesizer, 23-year-old Josh Davis (DJ Shadow) assembled Endtroducing..... using only a Technics SL-1200 turntable, an Akai MPC60 sampler, and a four-track Alesis ADAT recorder. Digging through dusty crates at Rare Records in Sacramento, he wove obscure 1970s Finnish progressive rock, psychic spoken-word records, soul drum breaks, and Metallica basslines into a haunting, cinematic tapestry.',
      'Certified by Guinness World Records as the first 100% sampled album, it proved that crate-digging and sampler collage were a legitimate compositional art form.'
    ],
    sonicBreakthrough: {
      headline: '12-Bit Akai MPC60 Micro-Collage',
      detail: 'Layered dozens of disparate vinyl fragments per track by pitch-shifting and time-slicing drums to match melodic loops.'
    },
    essentialTrack: {
      title: 'Midnight in a Perfect World & Building Steam with a Grain of Salt',
      description: 'Haunting piano loops colliding with thunderous boom-bap breakbeats.'
    },
    famousQuote: {
      text: 'Every forgotten record in a basement bin has a ghost waiting to speak again.',
      attribution: 'DJ Shadow'
    },
    accolades: 'Guinness World Record: First 100% Sampled Album; Time All-TIME 100 Albums',
    influencedBy: ['Public Enemy (The Bomb Squad)', 'Grandmaster Flash', 'Steinski', 'Portishead'],
    pavedWayFor: ['The Avalanches (Since I Left You)', 'J Dilla (Donuts)', 'RJD2', 'Madlib'],
    colorPalette: ['#64748b', '#f59e0b', '#0f1319']
  },
  {
    id: 'music-has-the-right-boc-1998',
    year: 1998,
    catalogCode: 'WARP-LP55',
    eraId: 'grunge-idm-rave',
    category: 'electronic',
    isCultGem: true,
    title: 'Music Has the Right to Children ("Roygbiv")',
    artist: 'Boards of Canada',
    producerOrConductor: 'Mike Sandison & Marcus Eoin',
    country: 'United Kingdom (Scotland)',
    format: 'Double 12-inch LP (Warp / Skam)',
    duration: '62:49',
    keySignature: 'B Minor',
    bpm: 86,
    instrumentPreset: 'moog',
    motifNotes: [
      { note: 'B2', duration: 0.45, delay: 0 },
      { note: 'F#3', duration: 0.45, delay: 0.5 },
      { note: 'A3', duration: 0.45, delay: 1.0 },
      { note: 'E3', duration: 0.6, delay: 1.5 },
      { note: 'D4', duration: 0.5, delay: 2.2 },
      { note: 'E4', duration: 0.5, delay: 2.8 },
      { note: 'F#4', duration: 0.9, delay: 3.4 },
      { note: 'A4', duration: 1.2, delay: 4.4 },
    ],
    motifDescription: 'The warm, tape-warped Roland SH-101 bassline and nostalgic lead melody of "Roygbiv".',
    coverUrl: '/covers/music-has-the-right-to-children-1998.jpg',
    primaryTag: 'Hauntology & Analog Tape Nostalgia',
    logline: 'Running Roland SH-101 synthesizers and hip-hop drum breaks through degraded reel-to-reel tape machines and 1970s nature-documentary transmitters, Scottish brothers Mike Sandison and Marcus Eoin invented sonic nostalgia.',
    historicalEssay: [
      'Named after the National Film Board of Canada’s 1970s educational nature films they watched as children, Scottish duo Boards of Canada rejected the cold, sterile digital sheen of late-90s electronica. Inside their rural Hexagon Sun studio near Edinburgh, they recorded analog synthesizers onto worn magnetic tape, intentionally introducing pitch wow and flutter so every chord sounded like a half-remembered childhood dream.',
      'Tracks like "Roygbiv" and "Aquarius" birthed the entire genres of hauntology, chillwave, and lo-fi beats.'
    ],
    sonicBreakthrough: {
      headline: 'Intentional Tape Wow, Flutter & Analog Degradation',
      detail: 'Re-sampled clean synthesizers through aging reel-to-reel decks and shortwave radio transmitters to evoke memory decay.'
    },
    essentialTrack: {
      title: 'Roygbiv, Turquoise Hexagon Sun & Olson',
      description: 'Two minutes of pure, sun-bleached analog synth bliss.'
    },
    famousQuote: {
      text: 'Imperfection and pitch drift are what make electronic music feel like a human memory.',
      attribution: 'Mike Sandison (Boards of Canada)'
    },
    accolades: 'Pitchfork 10.0 Rating; Fact Magazine #1 Album of the 1990s',
    influencedBy: ['Brian Eno', 'De La Soul', 'My Bloody Valentine', 'NFB Documentary Scores'],
    pavedWayFor: ['Tycho', 'Four Tet', 'Oneohtrix Point Never', 'Tame Impala', 'Lo-Fi Hip-Hop'],
    colorPalette: ['#06b6d4', '#10b981', '#071b1e']
  },
  {
    id: 'miseducation-lauryn-hill-1998',
    year: 1998,
    catalogCode: 'RUF-C67500',
    eraId: 'grunge-idm-rave',
    category: 'rhythm-jazz-hiphop',
    title: 'The Miseducation of Lauryn Hill',
    artist: 'Ms. Lauryn Hill',
    producerOrConductor: 'Lauryn Hill',
    country: 'United States / Jamaica',
    format: 'Double 12-inch LP / CD (Ruffhouse / Columbia)',
    duration: '77:39',
    keySignature: 'F Major',
    bpm: 99,
    instrumentPreset: 'piano',
    motifNotes: [
      { note: ['G3', 'Bb3', 'D4', 'F4'], duration: 0.9, delay: 0 },
      { note: ['C3', 'G3', 'Bb3', 'E4'], duration: 0.9, delay: 1.0 },
      { note: ['F3', 'A3', 'C4', 'E4'], duration: 1.2, delay: 2.0 },
      { note: 'A4', duration: 0.4, delay: 3.4 },
      { note: 'G4', duration: 0.4, delay: 3.9 },
      { note: 'F4', duration: 0.8, delay: 4.4 },
    ],
    motifDescription: 'The warm Kingston studio piano/horn progression (Gm7–C7–Fmaj7) of "Doo Wop (That Thing)" and "Ex-Factor".',
    coverUrl: '/covers/to-pimp-a-butterfly-2015.jpg',
    primaryTag: 'Neo-Soul & Hip-Hop Classicism',
    logline: 'Recording inside Bob Marley’s Tuff Gong Studios in Kingston, Jamaica at age 22, Lauryn Hill seamlessly united razor-sharp East Coast rap lyricism with golden-era soul, reggae, and gospel.',
    historicalEssay: [
      'After rising to global fame with The Fugees on The Score, 22-year-old Lauryn Hill wrote, arranged, and produced her solo debut primarily at Tuff Gong Studios in Kingston, Jamaica. Surrounding herself with live horns, strings, and Jamaican rhythm sections (and a young John Legend on piano on "Everything Is Everything"), she dissolved the barrier between hip-hop MC and soul vocalist.',
      'The Miseducation of Lauryn Hill became the first hip-hop album in history to win the Grammy Award for Album of the Year, taking home five Grammys in a single night.'
    ],
    sonicBreakthrough: {
      headline: 'Live Kingston Analog Soul Fused with Boom-Bap Drums',
      detail: 'Blended live Tuff Gong studio instrumentation and Wu-Tang-style hard drum breaks with 1960s Motown/Philly Soul harmonic warmth.'
    },
    essentialTrack: {
      title: 'Doo Wop (That Thing), Ex-Factor & To Zion',
      description: 'Sampled by Drake ("Nice For What") and Cardi B ("Be Careful").'
    },
    famousQuote: {
      text: 'How you gonna win when you ain’t right within?',
      attribution: 'Ms. Lauryn Hill ("Doo Wop (That Thing)")'
    },
    accolades: '5 Grammy Awards including Album of the Year; Library of Congress Registry',
    influencedBy: ['Nina Simone', 'Bob Marley', 'Stevie Wonder', 'Aretha Franklin', 'Wu-Tang Clan'],
    pavedWayFor: ['Amy Winehouse', 'Beyoncé', 'Kendrick Lamar', 'SZA', 'Little Simz'],
    colorPalette: ['#d97706', '#ef4444', '#1f1106']
  },
  {
    id: 'voodoo-dangelo-2000',
    year: 2000,
    catalogCode: 'VIR-72438',
    eraId: 'streaming-global-bass',
    category: 'rhythm-jazz-hiphop',
    title: 'Voodoo ("Untitled (How Does It Feel)")',
    artist: 'D’Angelo',
    producerOrConductor: 'D’Angelo, Questlove & Russell Elevado',
    country: 'United States',
    format: 'Double 12-inch LP (Virgin)',
    duration: '78:54',
    keySignature: 'G Major / E Minor',
    bpm: 72,
    instrumentPreset: 'organ',
    motifNotes: [
      { note: ['G3', 'B3', 'D4', 'F#4'], duration: 1.4, delay: 0 },
      { note: ['F#3', 'A3', 'C#4', 'E4'], duration: 1.4, delay: 1.6 },
      { note: ['E3', 'G3', 'B3', 'D4'], duration: 1.4, delay: 3.2 },
      { note: ['A2', 'E3', 'G3', 'C#4'], duration: 1.8, delay: 4.8 },
    ],
    motifDescription: 'Swaying, behind-the-beat 6/8 Fender Rhodes, Hammond organ, and Pino Palladino bass pocket on "Untitled (How Does It Feel)".',
    coverUrl: '/covers/donuts-2006.jpg',
    primaryTag: 'Soulquarian Micro-Rhythmic Pocket',
    logline: 'Camping inside Jimi Hendrix’s Electric Lady Studios in Greenwich Village using vintage analog consoles, D’Angelo, Questlove, and Pino Palladino played so far behind the beat it felt like gravity was bending.',
    historicalEssay: [
      'Inspired by J Dilla’s unquantized MPC drum programming, D’Angelo and Roots drummer Questlove spent three years at Electric Lady Studios with engineer Russell Elevado translating "drunk" micro-rhythmic hip-hop swing onto live instruments. Bassist Pino Palladino would strike his note milliseconds after Questlove’s kick drum, creating an intoxicating, elastic pocket.',
      'Tracked entirely to 2-inch analog tape using vintage gear once owned by Jimi Hendrix and Stevie Wonder, Voodoo became the crown jewel of the Soulquarians movement.'
    ],
    sonicBreakthrough: {
      headline: 'Live "Drunk" Unquantized Micro-Timing Pocket',
      detail: 'Humanized J Dilla’s off-grid sampler swing with live drums, fretless-style P-bass slides, and stacked Prince-inspired falsetto choirs.'
    },
    essentialTrack: {
      title: 'Untitled (How Does It Feel), Devil’s Pie & Send It On',
      description: 'Seven minutes of slow-burning 6/8 soul ecstasy.'
    },
    famousQuote: {
      text: 'D’Angelo told me to play the drums like a drunk toddler trying to walk down a hallway—and it changed how every drummer in the world plays.',
      attribution: 'Questlove'
    },
    accolades: 'Grammy Award for Best R&B Album; Rolling Stone Top 30 Albums of All Time',
    influencedBy: ['Prince', 'Marvin Gaye', 'J Dilla', 'Sly & the Family Stone', 'Jimi Hendrix'],
    pavedWayFor: ['Frank Ocean', 'Anderson .Paak', 'Solange', 'Robert Glasper', 'Steve Lacy'],
    colorPalette: ['#a16207', '#eab308', '#191206']
  },
  {
    id: 'blonde-frank-ocean-2016',
    year: 2016,
    catalogCode: 'BDC-001',
    eraId: 'streaming-global-bass',
    category: 'masterpiece',
    title: 'Blonde ("Nights" & "Pink + White")',
    artist: 'Frank Ocean',
    producerOrConductor: 'Frank Ocean, Malay, Buddy Ross & Vegyn',
    country: 'United States',
    format: 'Independent Digital / Black Friday Double LP (Boys Don’t Cry)',
    duration: '60:08',
    keySignature: 'E-flat Major',
    bpm: 89,
    instrumentPreset: 'pad',
    motifNotes: [
      { note: ['Ab3', 'C4', 'Eb4', 'G4'], duration: 1.2, delay: 0 },
      { note: ['G3', 'Bb3', 'D4', 'F4'], duration: 1.2, delay: 1.3 },
      { note: ['F3', 'Ab3', 'C4', 'Eb4'], duration: 1.2, delay: 2.6 },
      { note: ['Eb3', 'G3', 'Bb3', 'D4'], duration: 1.6, delay: 3.9 },
    ],
    motifDescription: 'Dreamlike varispeed electric guitar and Buddy Ross synthesizer chords leading into the iconic 3:30 beat switch of "Nights".',
    coverUrl: '/covers/oil-of-every-pearls-2018.jpg',
    primaryTag: 'Avant-R&B & Varispeed Minimalism',
    logline: 'Stripping away traditional drums across half the album in favor of pitch-shifted vocals, shimmering guitars, and a mid-album beat switch that bisects the entire 60-minute record to the exact second.',
    historicalEssay: [
      'After four years of near-total silence following Channel Orange, Frank Ocean fulfilled his major-label contract with visual album Endless and independently released Blonde the next day—earning $20 million in its first week as an independent artist. Recorded at Abbey Road, Electric Lady, and Shangri-La with contributors ranging from Jonny Greenwood (Radiohead) and James Blake to Beyoncé and André 3000, Blonde reimagined R&B as an impressionistic collage.',
      'At the exact 30-minute, 00-second midpoint of the 60-minute album—inside the song "Nights"—a jarring synth-and-808 beat switch splits the album from sunlit youth into nocturnal reflection.'
    ],
    sonicBreakthrough: {
      headline: 'Varispeed Vocal Formant Shifting & Drumless R&B Space',
      detail: 'Used hardware pitch-shifters to present multiple age-versions of his own voice and eliminated percussion on key ballads ("White Ferrari", "Self Control").'
    },
    essentialTrack: {
      title: 'Nights, Self Control & White Ferrari',
      description: 'The most celebrated mid-song beat switch of the 21st century.'
    },
    famousQuote: {
      text: 'Every night fucks every day up; every day patches the night up.',
      attribution: 'Frank Ocean ("Nights")'
    },
    accolades: 'Pitchfork #1 Album of the 2010s; Apple Music Top 5 Albums of All Time',
    influencedBy: ['Stevie Wonder', 'The Beatles', 'Arthur Russell', 'Prince', 'Elliott Smith'],
    pavedWayFor: ['SZA (SOS)', 'Dijon', 'Mk.gee', 'Daniel Caesar', '070 Shake'],
    colorPalette: ['#10b981', '#f97316', '#091a12']
  }
];
