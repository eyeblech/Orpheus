import { MusicIcon } from './types';

export const MUSIC_ICONS: MusicIcon[] = [
  {
    id: 'hildegard-von-bingen',
    name: 'Hildegard von Bingen',
    role: 'Composer & Conductor',
    eraId: 'sacred-baroque',
    yearsActive: '1140–1179',
    nationality: 'German (Rhineland)',
    titleBadge: 'The Sibyl of the Rhine',
    signatureSound: 'Soaring two-octave monophonic chant leaps and ecstatic liturgical drama.',
    biography: 'Benedictine abbess, polymath, mystic, and composer of the earliest known liturgical musical drama (Ordo Virtutum). While orthodox Gregorian chant moved in cautious steps, Hildegard’s melodies vaulted across two and a half octaves to mirror spiritual ecstasy.',
    keyInnovations: ['First named composer of liturgical musical drama', 'Extreme melodic range exceeding two octaves', 'Unified poetic mysticism and modal architecture'],
    essentialWorks: [
      { title: 'Ordo Virtutum', year: 1151, note: 'Allegorical morality play with 82 melodies', milestoneId: 'ordo-virtutum-1151' },
      { title: 'Symphonia armonie celestium revelationum', year: 1158, note: 'Cycle of 77 liturgical chants' }
    ],
    quote: 'The soul is symphonic: every human breath is a string tuned to the cosmos.',
    photoUrl: '/portraits/hildegard-von-bingen.jpg',
    palette: ['#d97706', '#f59e0b', '#1c1208']
  },
  {
    id: 'johann-sebastian-bach',
    name: 'Johann Sebastian Bach',
    role: 'Composer & Conductor',
    eraId: 'sacred-baroque',
    yearsActive: '1703–1750',
    nationality: 'German',
    titleBadge: 'Architect of Counterpoint',
    signatureSound: 'Mathematical polyphony, four-voice fugues, and deeply human harmonic tension.',
    biography: 'The supreme master of Baroque counterpoint. Bach synthesized German, Italian, and French musical styles into an architecture of unprecedented harmonic complexity, proving equal temperament across all 24 major and minor keys.',
    keyInnovations: ['Codified universal 24-key keyboard temperament', 'Perfected the multi-voice fugue and canon', 'Elevated solo cello and violin to polyphonic instruments'],
    essentialWorks: [
      { title: 'The Well-Tempered Clavier', year: 1722, note: '48 preludes and fugues across all keys', milestoneId: 'well-tempered-clavier-1722' },
      { title: 'Goldberg Variations, BWV 988', year: 1741, note: 'Monumental cycle of 30 contrapuntal variations' }
    ],
    quote: 'It’s easy to play any musical instrument: all you have to do is touch the right key at the right time and the instrument will play itself.',
    photoUrl: '/portraits/johann-sebastian-bach.jpg',
    palette: ['#eab308', '#a855f7', '#140f1d']
  },
  {
    id: 'ludwig-van-beethoven',
    name: 'Ludwig van Beethoven',
    role: 'Composer & Conductor',
    eraId: 'classical-romantic',
    yearsActive: '1792–1827',
    nationality: 'German',
    titleBadge: 'Titan of the Symphony',
    signatureSound: 'Explosive dynamic contrasts, cellular rhythmic motifs, and heroic symphonic scale.',
    biography: 'Composing his greatest works in total deafness, Beethoven shattered the polite proportions of the Classical era and willed Romanticism into existence. He transformed the symphony from aristocratic entertainment into a philosophical battleground.',
    keyInnovations: ['Built entire symphonies from a four-note rhythmic cell', 'Introduced voices and chorus into the symphony (No. 9)', 'Pushed string quartets into proto-modernist abstraction'],
    essentialWorks: [
      { title: 'Symphony No. 5 in C minor', year: 1808, note: 'The four-note fate motif that changed music', milestoneId: 'beethoven-symphony-5-1808' },
      { title: 'Symphony No. 9 ("Choral")', year: 1824, note: 'Monumental Ode to Joy finale' }
    ],
    quote: 'Music should strike fire from the heart of man, and bring tears from the eyes of woman.',
    photoUrl: '/portraits/ludwig-van-beethoven.jpg',
    palette: ['#ef4444', '#f59e0b', '#1c0b0b']
  },
  {
    id: 'claude-debussy',
    name: 'Claude Debussy',
    role: 'Composer & Conductor',
    eraId: 'classical-romantic',
    yearsActive: '1884–1918',
    nationality: 'French',
    titleBadge: 'Father of Musical Modernism',
    signatureSound: 'Whole-tone and pentatonic scales, floating unresolved chords, and shimmering orchestral color.',
    biography: 'After hearing Javanese gamelan at the 1889 Paris Exposition, Debussy dissolved three centuries of German functional harmony. By treating timbre and color as primary structural elements, he opened the door to 20th-century modernism and modal jazz.',
    keyInnovations: ['Liberated harmony from dominant-to-tonic resolution', 'Integrated Javanese gamelan polyrhythms and whole-tone scales', 'Direct harmonic ancestor of Bill Evans and ambient music'],
    essentialWorks: [
      { title: 'Prélude à l’après-midi d’un faune', year: 1894, note: 'The birth of modern orchestral timbre', milestoneId: 'debussy-prelude-faune-1894' },
      { title: 'La Mer', year: 1905, note: 'Three symphonic sketches of the ocean' }
    ],
    quote: 'Music is the space between thenotes.',
    photoUrl: '/portraits/claude-debussy.jpg',
    palette: ['#06b6d4', '#10b981', '#071b1e']
  },
  {
    id: 'igor-stravinsky',
    name: 'Igor Stravinsky',
    role: 'Composer & Conductor',
    eraId: 'classical-romantic',
    yearsActive: '1908–1971',
    nationality: 'Russian',
    titleBadge: 'Revolutionary of Rhythm',
    signatureSound: 'Jagged shifting meters, bitonal chords, and percussive orchestral violence.',
    biography: 'With the 1913 premiere of The Rite of Spring, Stravinsky overthrew the supremacy of melody and harmony in favor of primal, irregular rhythm. Across six decades he reinvented himself through Russian primitivism, neoclassicism, and serialism.',
    keyInnovations: ['Elevated asymmetric rhythm and polyrhythm to the center of Western composition', 'Bitonal chord superimposition (the Augurs chord)', 'Redefined orchestration as percussive propulsion'],
    essentialWorks: [
      { title: 'The Rite of Spring', year: 1913, note: 'Provoked the most famous riot in music history', milestoneId: 'rite-of-spring-1913' },
      { title: 'The Firebird', year: 1910, note: 'Breakthrough Ballets Russes score' }
    ],
    quote: 'Lesser artists borrow; great artists steal.',
    photoUrl: '/portraits/igor-stravinsky.jpg',
    palette: ['#dc2626', '#d97706', '#1e0909']
  },
  {
    id: 'robert-johnson',
    name: 'Robert Johnson',
    role: 'Vocalist & Virtuoso',
    eraId: 'blues-jazz-age',
    yearsActive: '1932–1938',
    nationality: 'American',
    titleBadge: 'Phantom of the Mississippi Crossroads',
    signatureSound: 'Boogie basslines on thumb combined with crying bottleneck slide guitar.',
    biography: 'Recording just 29 songs in two makeshift Texas hotel rooms in 1936 and 1937 before dying at 27, Robert Johnson created the foundational vocabulary of rock and roll guitar—playing bass, rhythm, and lead simultaneously.',
    keyInnovations: ['Independent thumb-bass boogie pattern on acoustic guitar', 'Haunting falsetto vocal leaps paired with bottleneck slide', 'Direct blueprint for Chicago electric blues and rock'],
    essentialWorks: [
      { title: 'Cross Road Blues', year: 1936, note: 'Recorded in Room 414 of the Gunter Hotel', milestoneId: 'cross-road-blues-1936' },
      { title: 'Hellhound on My Trail', year: 1937, note: 'Masterwork of modal Delta blues tuning' }
    ],
    quote: 'I went to the crossroad, fell down on my knees.',
    photoUrl: '/portraits/robert-johnson.jpg',
    palette: ['#b45309', '#78350f', '#150d06']
  },
  {
    id: 'louis-armstrong',
    name: 'Louis Armstrong',
    role: 'Vocalist & Virtuoso',
    eraId: 'blues-jazz-age',
    yearsActive: '1919–1971',
    nationality: 'American',
    titleBadge: 'Architect of Jazz Soloing & Swing',
    signatureSound: 'Blazing high-register trumpet cadenza, swung eighth-note phrasing, and gravelly scat vocals.',
    biography: 'Born in New Orleans, Armstrong transformed jazz from collective polyphonic marching music into a soloist’s art. His 1925–1928 Hot Five and Hot Seven recordings invented swing time and modern popular singing.',
    keyInnovations: ['Invented the extended improvised jazz solo', 'Pioneered vocal scat singing ("Heebie Jeebies")', 'Codified swing rhythmic feel across American music'],
    essentialWorks: [
      { title: 'West End Blues', year: 1928, note: 'Opening trumpet cadenza that launched modern jazz', milestoneId: 'west-end-blues-1928' },
      { title: 'Potato Head Blues', year: 1927, note: 'Stop-time solo masterpiece' }
    ],
    quote: 'What we play is life.',
    photoUrl: '/portraits/louis-armstrong.jpg',
    palette: ['#f59e0b', '#ef4444', '#1a1005']
  },
  {
    id: 'billie-holiday',
    name: 'Billie Holiday',
    role: 'Vocalist & Virtuoso',
    eraId: 'blues-jazz-age',
    yearsActive: '1933–1959',
    nationality: 'American',
    titleBadge: 'Lady Day',
    signatureSound: 'Intimate behind-the-beat micro-timing and devastating emotional candor.',
    biography: 'Without a massive operatic range, Billie Holiday revolutionized vocal music by phrasing like a jazz horn player—lagging just behind the beat and bending syllables with unbearable intimacy. Her 1939 recording of "Strange Fruit" inaugurated modern protest music.',
    keyInnovations: ['Pioneered microphone-era intimate vocal phrasing', 'Behind-the-beat rhythmic suspension', 'First landmark civil rights protest recording ("Strange Fruit")'],
    essentialWorks: [
      { title: 'Strange Fruit', year: 1939, note: 'Time magazine’s Song of the Century', milestoneId: 'strange-fruit-1939' },
      { title: 'Lady in Satin', year: 1958, note: 'Late-career orchestral masterpiece' }
    ],
    quote: 'If I’m going to sing like someone else, then I don’t need to sing at all.',
    photoUrl: '/portraits/billie-holiday.jpg',
    palette: ['#a855f7', '#ec4899', '#190b1e']
  },
  {
    id: 'miles-davis',
    name: 'Miles Davis',
    role: 'Composer & Conductor',
    eraId: 'blues-jazz-age',
    yearsActive: '1944–1991',
    nationality: 'American',
    titleBadge: 'Prince of Darkness & Reinvention',
    signatureSound: 'Harmon-muted trumpet lyricism, spacious modal stillness, and electric jazz-funk.',
    biography: 'Miles Davis reinvented jazz at least five times: cool jazz (Birth of the Cool), hard bop, modal jazz (Kind of Blue), orchestral third stream (Sketches of Spain), and electric jazz-rock fusion (Bitches Brew). He prized space and silence over virtuosic clutter.',
    keyInnovations: ['Replaced dense chord changes with spacious modal scales', 'Fused electric rock instrumentation and studio splicing with jazz', 'Mentored John Coltrane, Bill Evans, Herbie Hancock, and Wayne Shorter'],
    essentialWorks: [
      { title: 'Kind of Blue', year: 1959, note: 'The best-selling and most influential jazz album in history', milestoneId: 'kind-of-blue-1959' },
      { title: 'Bitches Brew', year: 1970, note: 'Electric fusion double LP' }
    ],
    quote: 'Don’t play what’s there; play what’s not there.',
    photoUrl: '/portraits/miles-davis.jpg',
    palette: ['#3b82f6', '#06b6d4', '#081226']
  },
  {
    id: 'delia-derbyshire',
    name: 'Delia Derbyshire',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1960–2001',
    nationality: 'British',
    titleBadge: 'Matriarch of Electronic Tape Music',
    signatureSound: 'Hand-spliced magnetic tape loops, oscillating test-tone generators, and eerie sci-fi atmospheres.',
    biography: 'Working inside the BBC Radiophonic Workshop in 1963 before commercial synthesizers existed, mathematician and musician Delia Derbyshire realized the Doctor Who theme entirely by cutting, speed-shifting, and gluing hundreds of inches of magnetic tape.',
    keyInnovations: ['Constructed complex electronic melodies without keyboards or sequencers', 'Pioneered tape-loop basslines and filtered white-noise percussion', 'Laid the groundwork for British synth-pop and IDM'],
    essentialWorks: [
      { title: 'Doctor Who Theme', year: 1963, note: 'First wholly electronic television signature tune', milestoneId: 'doctor-who-theme-1963' },
      { title: 'An Electric Storm (with White Noise)', year: 1969, note: 'Cult psychedelic tape-collage album' }
    ],
    quote: 'Every note was individually cut from magnetic tape with a razor blade and measured with a ruler.',
    photoUrl: '/portraits/delia-derbyshire.jpg',
    palette: ['#10b981', '#06b6d4', '#061c17']
  },
  {
    id: 'brian-wilson',
    name: 'Brian Wilson',
    role: 'Producer & Sonic Architect',
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1961–present',
    nationality: 'American',
    titleBadge: 'Architect of Chamber Pop',
    signatureSound: 'Lush inverted seventh chords, angelic six-part vocal stacks, and Electro-Theremin.',
    biography: 'Retiring from touring at age 22 to work exclusively in Los Angeles recording studios with the Wrecking Crew, Brian Wilson transformed the pop single into a pocket symphony—layering harpsichords, bicycle bells, bass harmonicas, and aching vocal harmonies.',
    keyInnovations: ['Modular multi-studio tape recording ("Good Vibrations")', 'Introduced jazz/classical chord inversions into pop music', 'Direct catalyst for The Beatles’ Sgt. Pepper'],
    essentialWorks: [
      { title: 'Pet Sounds', year: 1966, note: 'The blueprint of baroque and chamber pop', milestoneId: 'pet-sounds-1966' },
      { title: 'SMiLE', year: 1967, note: 'Legendary lost teenage symphony to God' }
    ],
    quote: 'I wanted to write joyful music that made you feel loved.',
    photoUrl: '/portraits/brian-wilson.jpg',
    palette: ['#10b981', '#f59e0b', '#0c1f17']
  },
  {
    id: 'george-martin',
    name: 'George Martin',
    role: 'Producer & Sonic Architect',
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1950–2006',
    nationality: 'British',
    titleBadge: 'The Fifth Beatle',
    signatureSound: 'Orchestral arrangements fused with varispeed tape manipulation and Abbey Road experimentation.',
    biography: 'Classically trained oboist and head of Parlophone Records, Sir George Martin translated The Beatles’ boundless imagination into reality—scoring string quartets for "Eleanor Rigby", splicing two different keys together on "Strawberry Fields Forever", and pioneering artificial double tracking.',
    keyInnovations: ['Treated the multi-track recording studio as a primary compositional instrument', 'Spliced varispeed takes across different tempos and pitches', 'Bridged classical orchestration and rock production'],
    essentialWorks: [
      { title: 'Sgt. Pepper’s Lonely Hearts Club Band', year: 1967, note: '700 hours of Abbey Road studio alchemy', milestoneId: 'sgt-peppers-1967' },
      { title: 'Revolver', year: 1966, note: 'Introduced tape loops ("Tomorrow Never Knows") to pop' }
    ],
    quote: 'The recording studio should not be a camera taking a snapshot; it should be a painter’s canvas.',
    photoUrl: '/portraits/george-martin.jpg',
    palette: ['#ef4444', '#eab308', '#1f0d0d']
  },
  {
    id: 'aretha-franklin',
    name: 'Aretha Franklin',
    role: 'Vocalist & Virtuoso',
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1956–2018',
    nationality: 'American',
    titleBadge: 'The Queen of Soul',
    signatureSound: 'Four-octave gospel vocal power, call-and-response arrangements, and church-rooted piano.',
    biography: 'Raised singing in her father C.L. Franklin’s Detroit church alongside Mahalia Jackson and Clara Ward, Aretha Franklin fused sacred gospel fervor with Southern R&B grit—creating the definitive sound of 1960s soul and black feminist liberation.',
    keyInnovations: ['Brought unvarnished gospel piano and vocal melisma to the top of the pop charts', 'Arranged her own backing vocal counter-hooks ("R-E-S-P-E-C-T")', 'First woman inducted into the Rock and Roll Hall of Fame'],
    essentialWorks: [
      { title: 'I Never Loved a Man the Way I Love You', year: 1967, note: 'Featuring the anthem "Respect"', milestoneId: 'aretha-respect-1967' },
      { title: 'Amazing Grace', year: 1972, note: 'Best-selling live gospel album of all time' }
    ],
    quote: 'Being the Queen is not all about singing; it’s about service and truth.',
    photoUrl: '/portraits/aretha-franklin.jpg',
    palette: ['#ec4899', '#f59e0b', '#1f0b16']
  },
  {
    id: 'jimi-hendrix',
    name: 'Jimi Hendrix',
    role: 'Vocalist & Virtuoso',
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1963–1970',
    nationality: 'American',
    titleBadge: 'Sculptor of Electric Feedback',
    signatureSound: 'Upside-down Fender Stratocaster, Fuzz Face distortion, Octavia, and controlled amplifier feedback.',
    biography: 'In a four-year recording span (1966–1970), Jimi Hendrix reinvented the electric guitar from a plucked string instrument into a continuous generator of electronic sound—turning feedback, whammy-bar dive bombs, and stereo panning into expressive poetry.',
    keyInnovations: ['Controlled harmonic feedback at high volume as a melodic voice', 'Pioneered stereo phasing and backwards guitar orchestration at Electric Lady Studios', 'Deconstructed "The Star-Spangled Banner" at Woodstock'],
    essentialWorks: [
      { title: 'Are You Experienced', year: 1967, note: 'Shattered the sonic limits of the electric guitar', milestoneId: 'are-you-experienced-1967' },
      { title: 'Electric Ladyland', year: 1968, note: 'Double-LP psychedelic studio tour de force' }
    ],
    quote: 'Blues is easy to play, but hard to feel.',
    photoUrl: '/portraits/jimi-hendrix.jpg',
    palette: ['#a855f7', '#f59e0b', '#1a0b26']
  },
  {
    id: 'wendy-carlos',
    name: 'Wendy Carlos',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1966–present',
    nationality: 'American',
    titleBadge: 'Virtuoso of the Modular Moog',
    signatureSound: 'Precision-patched monophonic Moog synthesizer realizations and microtonal ambient scales.',
    biography: 'Collaborating directly with engineer Bob Moog, Wendy Carlos proved that the voltage-controlled synthesizer could be a deeply expressive musical instrument with Switched-On Bach (1968), before composing landmark electronic film scores for A Clockwork Orange and The Shining.',
    keyInnovations: ['Advised Bob Moog on touch-sensitive keyboards and portamento controls', 'Recorded polyphonic synthesizer works line-by-line on homemade 8-track tape', 'Pioneered ambient music (Sonic Seasonings, 1972) and microtonal tuning'],
    essentialWorks: [
      { title: 'Switched-On Bach', year: 1968, note: 'First Platinum classical album; popularized the synthesizer', milestoneId: 'switched-on-bach-1968' },
      { title: 'A Clockwork Orange (Score)', year: 1971, note: 'First commercial vocoder performance of Beethoven' }
    ],
    quote: 'The synthesizer is only as cold or as human as the hands patching its cables.',
    photoUrl: '/portraits/wendy-carlos.jpg',
    palette: ['#06b6d4', '#a855f7', '#081822']
  },
  {
    id: 'fela-kuti',
    name: 'Fela Anikulapo Kuti',
    role: 'Composer & Conductor',
    isCultIcon: true,
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1960–1997',
    nationality: 'Nigerian',
    titleBadge: 'Black President & Father of Afrobeat',
    signatureSound: 'Hypnotic 15-minute polyrhythmic grooves, interlocking guitars, blaring horns, and Pidgin English political fire.',
    biography: 'Merging Yoruba traditional percussion, Ghanaian highlife, James Brown funk, and modal jazz with his band Africa 70 (and master drummer Tony Allen), Fela Kuti forged Afrobeat—using his Kalakuta Republic commune and Afrika Shrine club as a fearless weapon against Nigerian military dictatorships.',
    keyInnovations: ['Co-created the Afrobeat genre with drummer Tony Allen', 'Extended tracks into 15-to-30-minute trance-inducing political symphonies', 'Direct ancestor of modern Afrobeats, hypnotic house, and Talking Heads'],
    essentialWorks: [
      { title: 'Zombie', year: 1976, note: 'Scathing critique of the Nigerian military regime', milestoneId: 'fela-zombie-1976' },
      { title: 'Expensive Shit', year: 1975, note: 'Afrobeat polyrhythmic pinnacle' }
    ],
    quote: 'Music is the weapon of the future.',
    photoUrl: '/portraits/fela-kuti.jpg',
    palette: ['#eab308', '#dc2626', '#1e1506']
  },
  {
    id: 'lee-scratch-perry',
    name: 'Lee "Scratch" Perry',
    role: 'Producer & Sonic Architect',
    isCultIcon: true,
    eraId: 'rock-psychedelia-soul',
    yearsActive: '1958–2021',
    nationality: 'Jamaican',
    titleBadge: 'The Upsetter & Alchemist of Dub',
    signatureSound: 'Cavernous Roland Space Echo tape delay, spring reverb thunderclaps, and sub-bass drop-outs.',
    biography: 'At his backyard Black Ark Studio in Kingston, Jamaica, Lee "Scratch" Perry blew cigarette smoke onto magnetic tapes, buried microphones under palm trees for bass thud, and turned a rudimentary 4-track Teac recorder into a cosmic dub spaceship—producing Bob Marley & The Wailers, Max Romeo, and The Congos.',
    keyInnovations: ['Co-invented dub remixing alongside King Tubby', 'Treated the mixing console as a live dub performance instrument', 'Shaped post-punk, jungle, drum & bass, and trip-hop'],
    essentialWorks: [
      { title: 'Super Ape (The Upsetters)', year: 1976, note: 'Masterwork of Black Ark Studio dub alchemy', milestoneId: 'super-ape-1976' },
      { title: 'Heart of the Congos', year: 1977, note: 'Sublime roots reggae tapestry' }
    ],
    quote: 'The studio must be a living creature, breathing bass and lightning.',
    photoUrl: '/portraits/lee-scratch-perry.jpg',
    palette: ['#10b981', '#eab308', '#091d12']
  },
  {
    id: 'brian-eno',
    name: 'Brian Eno',
    role: 'Producer & Sonic Architect',
    eraId: 'punk-synth-hiphop',
    yearsActive: '1971–present',
    nationality: 'British',
    titleBadge: 'Inventor of Ambient Music',
    signatureSound: 'Incommensurable generative tape loops, shimmering Lexicon reverb, and Oblique Strategies.',
    biography: 'A self-described "non-musician" who started in Roxy Music, Brian Eno coined the term "Ambient Music" to describe soundscapes as ignorable as they are interesting—while producing towering rock landmarks for David Bowie (the Berlin Trilogy), Talking Heads, and U2.',
    keyInnovations: ['Formulated Ambient Music and generative system-based composition', 'Co-created Oblique Strategies lateral-thinking cards', 'Produced Bowie’s "Heroes", Talking Heads’ Remain in Light, and U2’s The Joshua Tree'],
    essentialWorks: [
      { title: 'Ambient 1: Music for Airports', year: 1978, note: 'Foundational manifesto of ambient music', milestoneId: 'music-for-airports-1978' },
      { title: 'Another Green World', year: 1975, note: 'Art-pop and electronic miniature masterpiece' }
    ],
    quote: 'Stop thinking about art works as objects, and start thinking about them as triggers for experiences.',
    photoUrl: '/portraits/brian-eno.jpg',
    palette: ['#38bdf8', '#a855f7', '#081824']
  },
  {
    id: 'giorgio-moroder',
    name: 'Giorgio Moroder',
    role: 'Producer & Sonic Architect',
    eraId: 'punk-synth-hiphop',
    yearsActive: '1968–present',
    nationality: 'Italian',
    titleBadge: 'Father of Electronic Dance Music',
    signatureSound: 'Click-track-synced Moog modular 16th-note arpeggios and four-on-the-floor kick drums.',
    biography: 'Working at Musicland Studios in Munich with vocalist Donna Summer and engineer Robbie Wedel, Giorgio Moroder replaced the lush string orchestra of 1970s disco with a hypnotic, clock-locked Moog modular synthesizer—single-handedly inventing Hi-NRG, synth-pop, techno, and EDM.',
    keyInnovations: ['First producer to lock a modular synthesizer arpeggio to a drum click-track for dance music', 'Pioneered the first all-electronic film score for Midnight Express (1978)', 'Immortalized by Daft Punk on "Giorgio by Moroder"'],
    essentialWorks: [
      { title: 'I Feel Love (with Donna Summer)', year: 1977, note: 'Brian Eno declared: "This single is going to change the sound of club music for the next fifteen years"', milestoneId: 'i-feel-love-1977' },
      { title: 'From Here to Eternity', year: 1977, note: 'Solo electronic disco blueprint' }
    ],
    quote: 'Once you free your mind about a concept of harmony and of music being correct, you can do whatever you want.',
    photoUrl: '/portraits/giorgio-moroder.jpg',
    palette: ['#ec4899', '#06b6d4', '#1d0919']
  },
  {
    id: 'ralf-and-florian-kraftwerk',
    name: 'Ralf Hütter & Florian Schneider (Kraftwerk)',
    role: 'Producer & Sonic Architect',
    eraId: 'punk-synth-hiphop',
    yearsActive: '1970–present',
    nationality: 'German',
    titleBadge: 'The Man-Machines of Kling Klang',
    signatureSound: 'Crisp electronic drum pads, vocoder vocals, and crystalline Minimoog melodies.',
    biography: 'Isolating themselves inside their Kling Klang Studio in Düsseldorf, Ralf Hütter and Florian Schneider stripped away every trace of American blues-rock swing to construct pure European machine music—laying the rhythmic and melodic foundation for Detroit techno, electro, hip-hop, and synth-pop.',
    keyInnovations: ['Built custom metallic electronic percussion triggers', 'Fused industrial modernism with infectious melodic hooks', 'Sampled by Afrika Bambaataa on "Planet Rock" to birth electro'],
    essentialWorks: [
      { title: 'Trans-Europe Express', year: 1977, note: 'Motorik electronic train rhythm masterpiece', milestoneId: 'trans-europe-express-1977' },
      { title: 'The Man-Machine', year: 1978, note: 'Featuring "The Model" and "The Robots"' }
    ],
    quote: 'We are not artists, we are Musikarbeiter—music workers.',
    photoUrl: '/portraits/kraftwerk.jpg',
    palette: ['#ef4444', '#eab308', '#1b0909']
  },
  {
    id: 'haruomi-hosono',
    name: 'Haruomi Hosono',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'punk-synth-hiphop',
    yearsActive: '1969–present',
    nationality: 'Japanese',
    titleBadge: 'Godfather of Japanese Electronic & City Pop',
    signatureSound: 'Computer-sequenced synth-pop, Roland TR-808 rhythms, and playful tropical-ambient fusion.',
    biography: 'From co-founding folk-rock pioneers Happy End to spearheading Yellow Magic Orchestra (YMO) alongside Ryuichi Sakamoto and Yukihiro Takahashi, Haruomi Hosono made the first album in history driven by programmable microprocessor sequencers and the Roland TR-808.',
    keyInnovations: ['First group to program the Roland MC-8 Microcomposer and TR-808 in pop music', 'Sampled classic arcade video games (Space Invaders) on 1978’s Yellow Magic Orchestra', 'Pioneered Japanese ambient/environmental music (Kankyō Ongaku)'],
    essentialWorks: [
      { title: 'Solid State Survivor (YMO)', year: 1979, note: 'Landmark of global technopop and electro', milestoneId: 'solid-state-survivor-1979' },
      { title: 'Watering a Flower', year: 1984, note: 'Minimalist ambient cassette commissioned by Muji' }
    ],
    quote: 'Computers had no soul until we taught them how to groove.',
    photoUrl: '/portraits/haruomi-hosono.jpg',
    palette: ['#f59e0b', '#ef4444', '#1f1207']
  },
  {
    id: 'quincy-jones',
    name: 'Quincy Jones',
    role: 'Producer & Sonic Architect',
    eraId: 'punk-synth-hiphop',
    yearsActive: '1951–2024',
    nationality: 'American',
    titleBadge: 'Master Architect of Global Pop',
    signatureSound: 'Razor-sharp horn arrangements, lush synth-funk beds, and cross-genre blockbuster polish.',
    biography: 'Trained in jazz trumpet with Lionel Hampton and classical counterpoint in Paris under Nadia Boulanger, Quincy Jones bridged big-band jazz, film scoring, and R&B to produce Michael Jackson’s Off the Wall, Thriller, and Bad—creating the highest-selling album in recorded history.',
    keyInnovations: ['Blended rock guitar (Eddie Van Halen), Minimoog bass, and cinematic horror on Thriller', '28-time Grammy Award winner across seven decades', 'Masterminded precision multi-track vocal and horn arranging'],
    essentialWorks: [
      { title: 'Thriller (with Michael Jackson)', year: 1982, note: 'Best-selling album in music history (70M+ copies)', milestoneId: 'thriller-1982' },
      { title: 'Off the Wall', year: 1979, note: 'Transcendent disco-funk masterpiece' }
    ],
    quote: 'Leave room for God to walk through the studio.',
    photoUrl: '/portraits/quincy-jones.jpg',
    palette: ['#dc2626', '#eab308', '#1d0808']
  },
  {
    id: 'kate-bush',
    name: 'Kate Bush',
    role: 'Producer & Sonic Architect',
    eraId: 'punk-synth-hiphop',
    yearsActive: '1978–present',
    nationality: 'British',
    titleBadge: 'High Priestess of Art-Pop & the Fairlight CMI',
    signatureSound: 'Fairlight CMI digital sampling, gated thunderous drums, and theatrical multi-octave vocals.',
    biography: 'Building her own 48-track studio in a barn behind her family home, Kate Bush became the first self-produced female artist to top the UK album chart. She turned the $30,000 Fairlight CMI digital sampler from a novelty into an instrument of gothic romance and psychological vulnerability.',
    keyInnovations: ['Early master of the Fairlight CMI digital sampling workstation', 'Self-produced Hounds of Love in her private studio', 'Invented the wireless headset microphone for expressive stage dance'],
    essentialWorks: [
      { title: 'Hounds of Love', year: 1985, note: 'Featuring "Running Up That Hill" and "The Ninth Wave"', milestoneId: 'hounds-of-love-1985' },
      { title: 'The Dreaming', year: 1982, note: 'Avant-garde art-pop tour de force' }
    ],
    quote: 'If we could actually swap places with each other, I think we’d be very surprised.',
    photoUrl: '/portraits/kate-bush.jpg',
    palette: ['#a855f7', '#ec4899', '#190a21']
  },
  {
    id: 'arthur-russell',
    name: 'Arthur Russell',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'punk-synth-hiphop',
    yearsActive: '1973–1992',
    nationality: 'American',
    titleBadge: 'Mystic Cellist of the NYC Loft',
    signatureSound: 'Echo-drenched amplified cello, whispered vocals, and mutant disco rhythms.',
    biography: 'Moving seamlessly between Allen Ginsberg’s Buddhist poetry readings, minimal classical concerts at The Kitchen, and David Mancuso’s underground Loft disco parties in downtown Manhattan, Arthur Russell left behind over 1,000 unreleased reels of transcendent cello ambient and mutant disco.',
    keyInnovations: ['Bridged avant-garde minimalism, folk intimacy, and underground NYC club music', 'Processed classical cello through distortion, chorus, and tape delay', 'Posthumously recognized as a patron saint of bedroom pop and indie electronic music'],
    essentialWorks: [
      { title: 'World of Echo', year: 1986, note: 'Solo voice and echo-cello masterpiece', milestoneId: 'world-of-echo-1986' },
      { title: 'Is It All Over My Face (as Loose Joints)', year: 1980, note: 'Underground Paradise Garage disco classic' }
    ],
    quote: 'A song can dissolve into pure echo and still keep dancing.',
    photoUrl: '/portraits/arthur-russell.jpg',
    palette: ['#06b6d4', '#3b82f6', '#071722']
  },
  {
    id: 'kevin-shields',
    name: 'Kevin Shields',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'grunge-idm-rave',
    yearsActive: '1979–present',
    nationality: 'Irish',
    titleBadge: 'Architect of Glide Guitar & Shoegaze',
    signatureSound: 'Tremolo-bent open tunings, reverse-reverb vocal clouds, and blissful wall-of-noise guitar.',
    biography: 'Spending two years and nearly bankrupting Creation Records across 19 studios, My Bloody Valentine’s Kevin Shields invented "glide guitar"—strumming open-tuned chords while holding the Jazzmaster tremolo bar and routing the signal through reverse-reverb units to create an ocean of dreamlike distortion.',
    keyInnovations: ['Invented the "glide guitar" tremolo pitch-warping technique', 'Eliminated traditional chorus pedals in favor of pure phase/pitch bending', 'Defined the sonic vocabulary of shoegaze and dream pop'],
    essentialWorks: [
      { title: 'Loveless (My Bloody Valentine)', year: 1991, note: 'The pinnacle of shoegaze guitar architecture', milestoneId: 'loveless-1991' },
      { title: 'You Made Me Realise EP', year: 1988, note: 'Famous for its 120dB live "Holocaust" noise section' }
    ],
    quote: 'What sounds like noise at first is actually pure tenderness turned up very loud.',
    photoUrl: '/portraits/kevin-shields.jpg',
    palette: ['#ec4899', '#a855f7', '#23091a']
  },
  {
    id: 'richard-d-james',
    name: 'Richard D. James (Aphex Twin)',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'grunge-idm-rave',
    yearsActive: '1988–present',
    nationality: 'British',
    titleBadge: 'Mad Scientist of IDM & Drill ’n’ Bass',
    signatureSound: 'Custom-soldered analog synths, hyper-detailed breakbeat programming, and fragile ambient melodies.',
    biography: 'Emerging from Cornwall with homemade circuit-bent synthesizers, Richard D. James simultaneously created the warmest ambient techno ever recorded (Selected Ambient Works 85-92), hyper-kinetic drill ’n’ bass (Drukqs), and haunting prepared-piano miniatures ("Avril 14th").',
    keyInnovations: ['Pioneered Ambient Techno and Intelligent Dance Music (IDM)', 'Programmed hyper-complex micro-edited breakbeats and algorithmic rhythms', 'Embedded spectrogram images inside audio tracks'],
    essentialWorks: [
      { title: 'Selected Ambient Works 85-92', year: 1992, note: 'Foundational masterpiece of ambient techno', milestoneId: 'selected-ambient-works-1992' },
      { title: 'Richard D. James Album', year: 1996, note: 'Landmark of drill ’n’ bass programming' }
    ],
    quote: 'I never read instructions; I just open the machine up and re-solder it until it sings.',
    photoUrl: '/portraits/aphex-twin.jpg',
    palette: ['#10b981', '#38bdf8', '#071b16']
  },
  {
    id: 'j-dilla',
    name: 'J Dilla (James Dewitt Yancey)',
    role: 'Producer & Sonic Architect',
    isCultIcon: true,
    eraId: 'streaming-global-bass',
    yearsActive: '1992–2006',
    nationality: 'American',
    titleBadge: 'Poet Laureate of the Akai MPC3000',
    signatureSound: 'Unquantized "drunk" micro-rhythmic swing, warm vinyl soul micro-chops, and sub-bass pulse.',
    biography: 'Switching off the quantization grid on his Akai MPC3000 drum machine, Detroit producer J Dilla invented a new rhythmic feel ("Dilla Time") where kick, snare, and hi-hat tugged in different micro-directions simultaneously. He completed his masterpiece Donuts from a hospital bed days before his death at 32.',
    keyInnovations: ['Invented unquantized "Dilla Time" swing that reshaped modern jazz and hip-hop drumming', 'Elevated the 60-second beat vignette into high emotional art', 'Co-founded Soulquarians (D’Angelo’s Voodoo, Erykah Badu, Common)'],
    essentialWorks: [
      { title: 'Donuts', year: 2006, note: '31 instrumental vignettes created in his final days', milestoneId: 'donuts-2006' },
      { title: 'Fantastic, Vol. 2 (Slum Village)', year: 2000, note: 'Blueprint of neo-soul and underground hip-hop' }
    ],
    quote: 'Never let the machine tell your fingers where the beat is supposed to land.',
    photoUrl: '/portraits/j-dilla.jpg',
    palette: ['#f59e0b', '#ec4899', '#1e1108']
  },
  {
    id: 'sopHIE-xeon',
    name: 'SOPHIE',
    role: 'Cult & Underground Pioneer',
    isCultIcon: true,
    eraId: 'streaming-global-bass',
    yearsActive: '2010–2021',
    nationality: 'Scottish',
    titleBadge: 'Visionary of Hyperpop & Physical Synthesis',
    signatureSound: 'Elektron Monomachine FM synthesis sculpted into hyper-tactile latex, metal, bubbles, and soaring pop.',
    biography: 'Rejecting audio samples Entirely, SOPHIE synthesized every metallic crash, latex stretch, and carbonated bubble from scratch using raw waveforms on an Elektron Monomachine—forging the sound of hyperpop and futuristic electronic production for Charli XCX, Vince Staples, and Madonna.',
    keyInnovations: ['Synthesized physical material textures (metal, plastic, water) purely from FM sine/square waves', 'Dissolved the boundary between avant-garde sound design and bubblegum pop', 'Created the sonic blueprint for 2020s hyperpop'],
    essentialWorks: [
      { title: 'Oil of Every Pearl’s Un-Insides', year: 2018, note: 'Transcendent marriage of industrial synthesis and pop rapture', milestoneId: 'oil-of-every-pearls-2018' },
      { title: 'PRODUCT', year: 2015, note: 'Collection of revolutionary synthetic singles ("Bipp", "Lemonade")' }
    ],
    quote: 'I try to create sounds that match the physical sensation of materials—latex, metal, electricity, or tears.',
    photoUrl: '/portraits/sophie.jpg',
    palette: ['#ec4899', '#38bdf8', '#1d0a1f']
  }
];
