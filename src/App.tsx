import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  MUSIC_ERAS,
  MUSIC_MILESTONES,
  MUSIC_MOVEMENTS,
  LIVE_CONCERT_MOMENTS,
  MUSIC_ICONS,
  MusicEraId,
  MusicCategory,
  MusicMilestone,
} from './data/musicData';
import { soundEngine } from './audio/soundEngine';
import { HarmonicCanvas } from './components/HarmonicCanvas';
import { VinylArtwork } from './components/VinylArtwork';
import { TurntableDeck } from './components/TurntableDeck';
import { SoundStudioSection } from './components/SoundStudioSection';
import { VinylTunnel3D } from './components/VinylTunnel3D';
import { MusicDossierDrawer } from './components/MusicDossierDrawer';
import { MovementsAndConcertsSection } from './components/MovementsAndConcertsSection';
import { IconsSection } from './components/IconsSection';
import {
  Disc3,
  Volume2,
  Piano,
  Sparkles,
  Flame,
  Users,
  Search,
  Layers,
  Grid,
  Box,
  Sun,
  Moon,
  Radio,
} from 'lucide-react';

type ActiveSection =
  | 'chronicle'
  | 'studio'
  | 'movements'
  | 'concerts'
  | 'icons';

type ChronicleViewMode = 'stage' | 'tunnel' | 'grid';

const QUICK_DOCK_NOTES = [
  { note: 'C4', key: 'Q' },
  { note: 'D4', key: 'W' },
  { note: 'E4', key: 'E' },
  { note: 'F4', key: 'R' },
  { note: 'G4', key: 'T' },
  { note: 'A4', key: 'Y' },
  { note: 'B4', key: 'U' },
  { note: 'C5', key: 'I' },
];

export function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('chronicle');
  const [viewMode, setViewMode] = useState<ChronicleViewMode>('stage');
  const [selectedEra, setSelectedEra] = useState<MusicEraId | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<MusicCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [dossierItem, setDossierItem] = useState<MusicMilestone | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  // Default to Braun / Teenage Engineering Warm Anodized Studio Daylight so it looks 100% distinct from the dark cinema app!
  const [isDaylight, setIsDaylight] = useState<boolean>(true);

  const scrubberRef = useRef<HTMLDivElement | null>(null);
  const isScrubbingRef = useRef(false);

  useEffect(() => {
    return soundEngine.onPlaybackChange((id) => {
      setPlayingId(id);
    });
  }, []);

  const filteredMilestones = useMemo(() => {
    return MUSIC_MILESTONES.filter((m) => {
      if (selectedEra !== 'ALL' && m.eraId !== selectedEra) return false;
      if (selectedCategory !== 'ALL') {
        if (selectedCategory === 'cult') {
          if (!m.isCultGem && m.category !== 'cult') return false;
        } else if (m.category !== selectedCategory) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match =
          m.title.toLowerCase().includes(q) ||
          m.artist.toLowerCase().includes(q) ||
          m.primaryTag.toLowerCase().includes(q) ||
          m.country.toLowerCase().includes(q) ||
          String(m.year).includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [selectedEra, selectedCategory, searchQuery]);

  useEffect(() => {
    if (activeIndex >= filteredMilestones.length) {
      setActiveIndex(0);
    }
  }, [filteredMilestones.length, activeIndex]);

  const activeMilestone =
    filteredMilestones[activeIndex] || MUSIC_MILESTONES[0];

  const activeEraObj = useMemo(() => {
    return (
      MUSIC_ERAS.find((e) => e.id === activeMilestone?.eraId) || MUSIC_ERAS[0]
    );
  }, [activeMilestone]);

  // Keyboard navigation in Chronicle room
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (
        activeSection !== 'chronicle' ||
        ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        setActiveIndex((p) =>
          Math.min(filteredMilestones.length - 1, p + 1)
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((p) => Math.max(0, p - 1));
      } else if (e.key === ' ') {
        e.preventDefault();
        if (activeMilestone) {
          soundEngine.playMotif(
            activeMilestone.id,
            activeMilestone.motifNotes,
            activeMilestone.instrumentPreset,
            activeMilestone.bpm
          );
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeSection, filteredMilestones.length, activeMilestone]);

  const scrubToClientX = (clientX: number) => {
    if (!scrubberRef.current || filteredMilestones.length === 0) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (clientX - rect.left) / Math.max(1, rect.width))
    );
    const targetIdx = Math.round(ratio * (filteredMilestones.length - 1));
    setActiveIndex(targetIdx);
  };

  return (
    <div
      className={`min-h-screen studio-grid-bg relative overflow-x-hidden transition-colors duration-300 selection:bg-[#ff4d1c] selection:text-white ${
        isDaylight
          ? 'studio-daylight bg-[#e6e1d6] text-[#14161b]'
          : 'bg-[#10131a] text-[#f4f1ea]'
      }`}
    >
      {/* Background Harmonic Oscilloscope */}
      <HarmonicCanvas
        accentColor="#ff4d1c"
        secondaryGlow="#2563eb"
        isPlaying={Boolean(playingId)}
      />

      {/* TOP TACTILE HARDWARE CONSOLE BRIDGE (TEENAGE ENGINEERING / BRAUN STYLE) */}
      <header className="sticky top-0 z-40 bg-[#151821] text-ivory-50 border-b-2 border-[#ff4d1c]/80 shadow-2xl">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Speaker Grille + Model Nameplate */}
          <div className="flex items-center gap-3.5">
            <div className="hidden sm:flex w-12 h-10 rounded-lg bg-[#0c0e13] border border-white/15 speaker-grille items-center justify-center shadow-inner">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  playingId
                    ? 'bg-[#00e599] shadow-[0_0_10px_#00e599] animate-ping'
                    : 'bg-[#ff4d1c]'
                }`}
              />
            </div>

            <button
              type="button"
              onClick={() => setActiveSection('chronicle')}
              className="text-left group"
            >
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
                  ORPHEUS
                </span>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#ff4d1c] text-white tracking-widest">
                  TE-808
                </span>
                <span className="hidden md:inline-block font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-[#00e599] border border-white/10">
                  WEB AUDIO SYNTHESIZER
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                1151–2026 ACOUSTIC CHRONICLE • DIRECT-DRIVE TURNTABLE & 808 LAB
              </p>
            </button>
          </div>

          {/* Center: 5 Mechanical Hardware Mode Keys with LED Indicators */}
          <nav className="flex items-center gap-1.5 overflow-x-auto py-1">
            {[
              {
                id: 'chronicle' as ActiveSection,
                code: 'CH-01',
                label: 'Turntable & Crate',
                badge: MUSIC_MILESTONES.length,
                icon: Disc3,
              },
              {
                id: 'studio' as ActiveSection,
                code: 'CH-02',
                label: 'Synth & 808 Lab',
                badge: 'PLAY',
                icon: Piano,
              },
              {
                id: 'movements' as ActiveSection,
                code: 'CH-03',
                label: 'Sonic Movements',
                badge: MUSIC_MOVEMENTS.length,
                icon: Sparkles,
              },
              {
                id: 'concerts' as ActiveSection,
                code: 'CH-04',
                label: 'Concerts & Riots',
                badge: LIVE_CONCERT_MOMENTS.length,
                icon: Flame,
              },
              {
                id: 'icons' as ActiveSection,
                code: 'CH-05',
                label: 'Pantheon Icons',
                badge: MUSIC_ICONS.length,
                icon: Users,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSection(tab.id)}
                  className={`hw-button px-3.5 py-2 rounded-lg font-mono text-xs flex items-center gap-2 shrink-0 ${
                    isActive ? 'hw-button-active' : 'text-stone-300'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive
                        ? 'bg-white shadow-[0_0_6px_#fff]'
                        : tab.badge === 'PLAY'
                        ? 'bg-[#00e599]'
                        : 'bg-stone-500'
                    }`}
                  />
                  <Icon className="w-3.5 h-3.5" />
                  <span className="font-bold">{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] ${
                      isActive
                        ? 'bg-black/25 text-white'
                        : tab.badge === 'PLAY'
                        ? 'bg-[#00e599]/20 text-[#00e599] font-bold'
                        : 'bg-white/10 text-stone-400'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right: Quick-Play Mini-Piano Notes + Daylight/Midnight Hardware Switch */}
          <div className="flex items-center gap-2">
            {/* Mini Quick-Note Strip right in the header for instant playability */}
            <div className="hidden 2xl:flex items-center gap-1 bg-[#0b0d12] p-1 rounded-lg border border-white/15">
              <span className="font-mono text-[9px] text-stone-400 px-1.5">
                TAP NOTE:
              </span>
              {QUICK_DOCK_NOTES.slice(0, 5).map((n) => (
                <button
                  key={n.note}
                  type="button"
                  onClick={() =>
                    soundEngine.playNote(
                      n.note,
                      activeMilestone?.instrumentPreset || 'moog',
                      0.45
                    )
                  }
                  className="px-2 py-1 rounded bg-ivory-100 hover:bg-[#ff4d1c] text-obsidian-950 hover:text-white font-mono text-[10px] font-bold transition"
                  title={`Play ${n.note}`}
                >
                  {n.note}
                </button>
              ))}
            </div>

            {playingId && (
              <button
                type="button"
                onClick={() => soundEngine.stopMotif()}
                className="px-3 py-2 rounded-lg bg-[#00e599] text-black font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg animate-pulse"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>MUTE</span>
              </button>
            )}

            {/* Studio Daylight (Braun Alabaster) vs Midnight Synth Switch */}
            <button
              type="button"
              onClick={() => setIsDaylight((p) => !p)}
              className="hw-button px-3 py-2 rounded-lg font-mono text-[11px] text-ivory-100 flex items-center gap-1.5"
              title="Switch Studio Chassis Finish"
            >
              {isDaylight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#00e599]" />
                  <span className="hidden sm:inline">NIGHT RACK</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#ff4d1c]" />
                  <span className="hidden sm:inline">BRAUN LAB</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* FREQUENCY BAND EQUALIZER BAR — Only visible in Turntable & Crate room */}
        {activeSection === 'chronicle' && (
          <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-2 bg-[#0e1017] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            {/* Era Frequency Bands */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              <span className="font-mono text-[10px] text-stone-400 mr-1 flex items-center gap-1 shrink-0">
                <Radio className="w-3 h-3 text-[#ff4d1c]" />
                BAND:
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedEra('ALL');
                  setActiveIndex(0);
                }}
                className={`px-2.5 py-1 rounded font-mono text-[11px] transition shrink-0 ${
                  selectedEra === 'ALL'
                    ? 'bg-[#ff4d1c] text-white font-bold'
                    : 'bg-white/5 hover:bg-white/10 text-stone-300'
                }`}
              >
                ALL (1151–2018)
              </button>
              {MUSIC_ERAS.map((era) => (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => {
                    setSelectedEra(era.id);
                    setActiveIndex(0);
                  }}
                  className={`px-2.5 py-1 rounded font-mono text-[11px] transition shrink-0 flex items-center gap-1.5 ${
                    selectedEra === era.id
                      ? 'bg-[#ff4d1c] text-white font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-stone-300'
                  }`}
                >
                  <span>{era.shortName}</span>
                  <span className="text-[9px] opacity-65">
                    {era.tuningPitch.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Category + Search + Deck Mode Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 bg-[#181b24] p-1 rounded-lg border border-white/10">
                {[
                  { id: 'ALL', label: 'ALL' },
                  { id: 'masterpiece', label: 'CANON' },
                  { id: 'cult', label: 'CULT' },
                  { id: 'electronic', label: 'SYNTH' },
                  { id: 'rhythm-jazz-hiphop', label: 'GROOVE' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.id as MusicCategory | 'ALL');
                      setActiveIndex(0);
                    }}
                    className={`px-2 py-0.5 rounded font-mono text-[10px] transition ${
                      selectedCategory === cat.id
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  placeholder="Filter crate..."
                  className="pl-8 pr-3 py-1 rounded-lg bg-[#181b24] border border-white/15 font-mono text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-[#ff4d1c] w-40 sm:w-52"
                />
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 bg-[#181b24] p-1 rounded-lg border border-white/10">
                {[
                  { id: 'stage' as ChronicleViewMode, label: 'Turntable', icon: Layers },
                  { id: 'tunnel' as ChronicleViewMode, label: '3D Tunnel', icon: Box },
                  { id: 'grid' as ChronicleViewMode, label: 'Record Wall', icon: Grid },
                ].map((vm) => {
                  const VIcon = vm.icon;
                  return (
                    <button
                      key={vm.id}
                      type="button"
                      onClick={() => setViewMode(vm.id)}
                      className={`px-2.5 py-1 rounded font-mono text-[10px] uppercase flex items-center gap-1 transition ${
                        viewMode === vm.id
                          ? 'bg-[#ff4d1c] text-white font-bold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      <VIcon className="w-3 h-3" />
                      <span>{vm.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MAIN FULL-BLEED 16:9 STUDIO WORKSPACE */}
      <main className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 pt-6 pb-16">
        {activeSection === 'studio' && (
          <SoundStudioSection
            milestones={MUSIC_MILESTONES}
            playingId={playingId}
            onSelectMilestone={(m) => setDossierItem(m)}
          />
        )}

        {activeSection === 'movements' && (
          <MovementsAndConcertsSection
            mode="movements"
            movements={MUSIC_MOVEMENTS}
            concerts={LIVE_CONCERT_MOMENTS}
            milestones={MUSIC_MILESTONES}
            playingId={playingId}
            onSelectMilestone={(m) => setDossierItem(m)}
          />
        )}

        {activeSection === 'concerts' && (
          <MovementsAndConcertsSection
            mode="concerts"
            movements={MUSIC_MOVEMENTS}
            concerts={LIVE_CONCERT_MOMENTS}
            milestones={MUSIC_MILESTONES}
            playingId={playingId}
            onSelectMilestone={(m) => setDossierItem(m)}
          />
        )}

        {activeSection === 'icons' && (
          <IconsSection
            icons={MUSIC_ICONS}
            milestones={MUSIC_MILESTONES}
            playingId={playingId}
            onSelectMilestone={(m) => setDossierItem(m)}
          />
        )}

        {activeSection === 'chronicle' && (
          <div className="space-y-5">
            {filteredMilestones.length === 0 ? (
              <div className="rounded-2xl p-12 text-center space-y-3 bg-[#161922] text-white border border-white/15">
                <p className="font-display text-2xl">
                  No records match your current frequency filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEra('ALL');
                    setSelectedCategory('ALL');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#ff4d1c] text-white font-mono text-xs font-bold"
                >
                  RESET CONSOLE FILTERS
                </button>
              </div>
            ) : (
              <>
                {/* MODE 1: TACTILE 3-COLUMN TURNTABLE DECK + PIANO-ROLL + CRATE DIGGER */}
                {viewMode === 'stage' && activeMilestone && (
                  <TurntableDeck
                    milestone={activeMilestone}
                    activeEra={activeEraObj}
                    filteredMilestones={filteredMilestones}
                    activeIndex={activeIndex}
                    onSelectIndex={setActiveIndex}
                    onOpenDossier={(m) => setDossierItem(m)}
                    onOpenStudio={() => setActiveSection('studio')}
                    playingId={playingId}
                    isDaylight={isDaylight}
                  />
                )}

                {/* MODE 2: 3D RECORD VAULT TUNNEL */}
                {viewMode === 'tunnel' && (
                  <VinylTunnel3D
                    milestones={filteredMilestones}
                    activeIndex={activeIndex}
                    onSelectIndex={setActiveIndex}
                    onOpenDossier={(m) => setDossierItem(m)}
                    playingId={playingId}
                  />
                )}

                {/* MODE 3: RECORD WALL GRID (Bottom Scrubber Hidden in Grid Mode!) */}
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-8">
                    {filteredMilestones.map((item) => {
                      const isPlaying = playingId === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setDossierItem(item)}
                          className={`rounded-2xl p-4 border transition cursor-pointer flex flex-col justify-between group ${
                            isDaylight
                              ? 'te-card-light hover:border-[#ff4d1c]'
                              : 'bg-[#161922] border-white/15 hover:border-[#ff4d1c] text-white'
                          }`}
                        >
                          <div>
                            <div className="aspect-square w-full pr-4 mb-3">
                              <VinylArtwork
                                milestone={item}
                                isPlaying={isPlaying}
                                size="sm"
                                onPlayToggle={(e) => {
                                  e.stopPropagation();
                                  soundEngine.playMotif(
                                    item.id,
                                    item.motifNotes,
                                    item.instrumentPreset,
                                    item.bpm
                                  );
                                }}
                                className="w-full h-full"
                              />
                            </div>

                            <div className="flex items-center justify-between font-mono text-[10px]">
                              <span className="text-[#ff4d1c] font-bold">
                                {item.year} // {item.country}
                              </span>
                              {item.isCultGem && (
                                <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-600 font-bold">
                                  CULT
                                </span>
                              )}
                            </div>

                            <h3 className="font-display text-base font-bold group-hover:text-[#ff4d1c] transition mt-1 line-clamp-1">
                              {item.title}
                            </h3>
                            <p className="text-xs opacity-75 line-clamp-1">
                              {item.artist}
                            </p>
                          </div>

                          <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between font-mono text-[10px] opacity-70">
                            <span>{item.keySignature}</span>
                            <span>{item.bpm} BPM</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* BOTTOM STUDIO TAPE & FREQUENCY DIAL (Hidden in Record Wall Grid Mode) */}
                {viewMode !== 'grid' && (
                  <div className="rounded-2xl p-4 bg-[#14171f] text-ivory-100 border border-white/15 space-y-2.5 select-none shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                      <span className="flex items-center gap-2 text-stone-300">
                        <span className="w-2 h-2 rounded-full bg-[#ff4d1c]" />
                        <span>
                          ANALOG FM DIAL // {filteredMilestones[0]?.year} —{' '}
                          {filteredMilestones[filteredMilestones.length - 1]?.year}
                        </span>
                      </span>
                      <span className="text-[#00e599]">
                        NOW CUED: [{activeMilestone?.year}] {activeMilestone?.title} (
                        {activeMilestone?.bpm} BPM)
                      </span>
                    </div>

                    {/* Interactive Radio Dial Scale */}
                    <div
                      ref={scrubberRef}
                      onMouseDown={(e) => {
                        isScrubbingRef.current = true;
                        scrubToClientX(e.clientX);
                      }}
                      onMouseMove={(e) => {
                        if (isScrubbingRef.current) {
                          scrubToClientX(e.clientX);
                        }
                      }}
                      onMouseUp={() => {
                        isScrubbingRef.current = false;
                      }}
                      onMouseLeave={() => {
                        isScrubbingRef.current = false;
                      }}
                      className="relative h-11 w-full rounded-lg bg-[#0b0d12] border border-white/15 px-3 flex items-center cursor-pointer overflow-hidden"
                    >
                      {/* Red Tuning Needle Progress */}
                      <div
                        className="absolute left-0 top-0 bottom-0 bg-[#ff4d1c]/15 border-r-2 border-[#ff4d1c] pointer-events-none transition-all duration-100"
                        style={{
                          width: `${
                            filteredMilestones.length > 1
                              ? (activeIndex / (filteredMilestones.length - 1)) *
                                100
                              : 100
                          }%`,
                        }}
                      />

                      <div className="relative z-10 w-full flex items-center justify-between">
                        {filteredMilestones.map((m, idx) => {
                          const isCurrent = idx === activeIndex;
                          const isPlaying = playingId === m.id;
                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveIndex(idx);
                              }}
                              title={`${m.year} — ${m.title}`}
                              className="group py-2 px-0.5 flex flex-col items-center focus:outline-none"
                            >
                              <span
                                className={`transition-all ${
                                  isCurrent
                                    ? 'w-2 h-7 bg-[#ff4d1c] rounded-xs shadow-[0_0_8px_#ff4d1c]'
                                    : isPlaying
                                    ? 'w-2 h-6 bg-[#00e599] animate-pulse'
                                    : 'w-0.5 h-3.5 bg-white/30 group-hover:bg-white group-hover:h-5'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </main>

      {/* Slide-Over Archival Dossier Drawer */}
      <MusicDossierDrawer
        milestone={dossierItem}
        onClose={() => setDossierItem(null)}
        playingId={playingId}
        allMilestones={MUSIC_MILESTONES}
        onSelectMilestone={(m) => setDossierItem(m)}
      />
    </div>
  );
}

export default App;
