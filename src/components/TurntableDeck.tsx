import React, { useState, useEffect } from 'react';
import { MusicMilestone, MusicEra } from '../data/types';
import { soundEngine } from '../audio/soundEngine';
import {
  Play,
  Square,
  SkipBack,
  SkipForward,
  Disc3,
  Sliders,
  BookOpen,
  Sparkles,
  Volume2,
  Radio,
} from 'lucide-react';

interface TurntableDeckProps {
  milestone: MusicMilestone;
  activeEra: MusicEra;
  filteredMilestones: MusicMilestone[];
  activeIndex: number;
  onSelectIndex: (idx: number) => void;
  onOpenDossier: (m: MusicMilestone) => void;
  onOpenStudio: () => void;
  playingId: string | null;
  isDaylight: boolean;
}

export const TurntableDeck: React.FC<TurntableDeckProps> = ({
  milestone,
  activeEra,
  filteredMilestones,
  activeIndex,
  onSelectIndex,
  onOpenDossier,
  onOpenStudio,
  playingId,
  isDaylight,
}) => {
  const [imgError, setImgError] = useState(false);
  const [vuLevels, setVuLevels] = useState<[number, number]>([14, 18]);
  const isPlaying = playingId === milestone.id;

  useEffect(() => {
    setImgError(false);
  }, [milestone.id]);

  // Animate real-time L/R LED VU Meters when audio plays
  useEffect(() => {
    const buf = new Uint8Array(new ArrayBuffer(64));
    const timer = window.setInterval(() => {
      if (playingId && soundEngine.getFrequencyData(buf)) {
        let low = 0;
        let high = 0;
        for (let i = 0; i < 16; i++) low += buf[i];
        for (let i = 16; i < 40; i++) high += buf[i];
        const lPct = Math.min(100, Math.max(18, Math.round(low / 16 / 2.1)));
        const rPct = Math.min(100, Math.max(18, Math.round(high / 24 / 1.9)));
        setVuLevels([lPct, rPct]);
      } else if (playingId) {
        setVuLevels([
          45 + Math.floor(Math.random() * 45),
          40 + Math.floor(Math.random() * 50),
        ]);
      } else {
        setVuLevels([8, 10]);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [playingId]);

  const [c1, c2] = milestone.colorPalette;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
      {/* COLUMN 1 (4 COLS): BRAUN SK-4 / SL-1200 DIRECT-DRIVE TURNTABLE DECK */}
      <div
        className={`lg:col-span-4 rounded-2xl p-5 border flex flex-col justify-between relative overflow-hidden ${
          isDaylight
            ? 'te-card-light'
            : 'bg-[#161922] border-white/15 text-ivory-50 shadow-2xl'
        }`}
      >
        {/* Top Deck Hardware Header + Corner Screws */}
        <div className="flex items-center justify-between border-b border-current/10 pb-3">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d1c] inline-block" />
            <span className="font-bold">DECK A // DIRECT DRIVE</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] opacity-75">
            <span className="px-2 py-0.5 rounded bg-black/15 border border-current/15">
              33⅓ RPM
            </span>
            <span className="px-2 py-0.5 rounded bg-[#ff4d1c]/15 text-[#ff4d1c] font-bold">
              {milestone.bpm} BPM
            </span>
          </div>
        </div>

        {/* Circular Turntable Platter + Pivoting Tonearm */}
        <div className="relative my-4 mx-auto w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none">
          {/* Outer Aluminum Strobe Platter Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-stone-500/40 bg-[#0d0f14] shadow-2xl flex items-center justify-center">
            <div
              className={`w-[96%] h-[96%] rounded-full border border-dashed border-[#ff4d1c]/40 flex items-center justify-center ${
                isPlaying ? 'animate-vinyl-spin' : ''
              }`}
            >
              {/* Vinyl Record Disc */}
              <div className="w-[92%] h-[92%] rounded-full vinyl-grooves border border-white/15 flex items-center justify-center relative shadow-inner">
                {/* Specular Vinyl Light Sheen */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none opacity-25"
                  style={{
                    background:
                      'conic-gradient(from 40deg, transparent 0deg, rgba(255,255,255,0.35) 25deg, transparent 55deg, transparent 180deg, rgba(255,255,255,0.3) 205deg, transparent 235deg)',
                  }}
                />

                {/* Center Album Cover Label on the Vinyl */}
                <div
                  className="w-[46%] h-[46%] rounded-full overflow-hidden border-4 border-[#0b0c10] relative flex items-center justify-center shadow-lg"
                  style={{
                    background: `radial-gradient(circle, ${c1}, ${c2})`,
                  }}
                >
                  {milestone.coverUrl && !imgError ? (
                    <img
                      src={milestone.coverUrl}
                      alt={milestone.title}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-mono text-[10px] font-bold text-white text-center px-2">
                      {milestone.year}
                    </span>
                  )}
                  {/* Spindle Hole */}
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-[#e5e1d8] border-2 border-black shadow" />
                </div>
              </div>
            </div>
          </div>

          {/* Pivoting Tonearm Assembly */}
          <div className="absolute top-3 right-3 z-20 pointer-events-none">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-stone-300 to-stone-600 border-2 border-black/60 shadow-lg flex items-center justify-center">
              <div
                className="w-1.5 h-36 bg-gradient-to-b from-stone-200 via-stone-400 to-stone-300 rounded-full origin-top transition-transform duration-700 shadow-md"
                style={{
                  transform: isPlaying
                    ? 'translateY(14px) rotate(26deg)'
                    : 'translateY(14px) rotate(2deg)',
                }}
              >
                {/* Cartridge Headshell */}
                <div className="w-3.5 h-5 bg-[#ff4d1c] -ml-1 mt-32 rounded-xs border border-black" />
              </div>
            </div>
          </div>

          {/* Strobe Pilot Lamp */}
          <div
            className={`absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full border border-black/40 transition ${
              isPlaying
                ? 'bg-[#ff4d1c] shadow-[0_0_12px_#ff4d1c]'
                : 'bg-stone-600'
            }`}
          />
        </div>

        {/* Dual L/R Real-Time LED Peak VU Meters */}
        <div className="p-3 rounded-xl bg-[#0e1015] text-ivory-100 border border-white/10 space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-stone-400">
            <span>ANALOG OUTPUT LEVEL (dB)</span>
            <span className={isPlaying ? 'text-[#00e599] font-bold' : ''}>
              {isPlaying ? '● LOCKED ' + milestone.keySignature : '○ STANDBY'}
            </span>
          </div>
          {(['L', 'R'] as const).map((ch, idx) => {
            const val = vuLevels[idx];
            return (
              <div key={ch} className="flex items-center gap-2 font-mono text-[10px]">
                <span className="w-3 text-stone-400 font-bold">{ch}</span>
                <div
                  className="flex-1 grid gap-1 h-2.5"
                  style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
                >
                  {Array.from({ length: 16 }).map((_, seg) => {
                    const threshold = (seg + 1) * 6.25;
                    const lit = val >= threshold;
                    const color =
                      seg >= 13
                        ? 'bg-[#ff4d1c]'
                        : seg >= 10
                        ? 'bg-amber-400'
                        : 'bg-[#00e599]';
                    return (
                      <span
                        key={seg}
                        className={`rounded-xs transition-all duration-75 ${
                          lit ? color : 'bg-white/10'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tactile Hardware Transport Buttons */}
        <div className="grid grid-cols-4 gap-2 pt-3">
          <button
            type="button"
            disabled={activeIndex === 0}
            onClick={() => onSelectIndex(Math.max(0, activeIndex - 1))}
            className="hw-button py-2.5 rounded-lg flex items-center justify-center text-ivory-100 disabled:opacity-35"
            title="Previous Record"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              soundEngine.playMotif(
                milestone.id,
                milestone.motifNotes,
                milestone.instrumentPreset,
                milestone.bpm
              )
            }
            className={`col-span-2 hw-button py-2.5 px-3 rounded-lg font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-white ${
              isPlaying ? 'hw-button-active' : ''
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="w-3.5 h-3.5 fill-current" />
                <span>STOP PLATTER</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>DROP NEEDLE</span>
              </>
            )}
          </button>

          <button
            type="button"
            disabled={activeIndex === filteredMilestones.length - 1}
            onClick={() =>
              onSelectIndex(
                Math.min(filteredMilestones.length - 1, activeIndex + 1)
              )
            }
            className="hw-button py-2.5 rounded-lg flex items-center justify-center text-ivory-100 disabled:opacity-35"
            title="Next Record"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* COLUMN 2 (5 COLS): PIANO-ROLL STEP VISUALIZER & GATEFOLD TELEMETRY */}
      <div
        className={`lg:col-span-5 rounded-2xl p-5 sm:p-6 border flex flex-col justify-between space-y-5 ${
          isDaylight
            ? 'bg-[#f7f4ee] border-[#c8c2b8] text-[#14161b] shadow-xl'
            : 'bg-[#161922] border-white/15 text-ivory-50 shadow-2xl'
        }`}
      >
        <div className="space-y-4">
          {/* Top Catalog Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/10 pb-3">
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded bg-[#ff4d1c] text-white font-bold">
                {milestone.year}
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-600/15 text-blue-500 font-bold border border-blue-500/30">
                {activeEra.shortName}
              </span>
              <span className="px-2 py-0.5 rounded bg-current/10 font-semibold">
                {milestone.primaryTag}
              </span>
              {milestone.isCultGem && (
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-bold border border-emerald-500/30">
                  CULT
                </span>
              )}
            </div>
            <span className="font-mono text-[11px] opacity-60">
              CAT // {milestone.catalogCode}
            </span>
          </div>

          {/* Title & Artist */}
          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
              {milestone.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-1.5 font-mono text-xs">
              <span className="text-[#ff4d1c] font-bold text-sm">
                {milestone.artist}
              </span>
              <span className="opacity-40">/</span>
              <span className="opacity-80">
                PROD: {milestone.producerOrConductor}
              </span>
              <span className="opacity-40">/</span>
              <span className="opacity-70">{milestone.country}</span>
            </div>
          </div>

          {/* Interactive Piano-Roll / Step Sequencer Score Display */}
          <div className="rounded-xl bg-[#0e1016] text-ivory-100 p-3.5 border border-white/15 space-y-2.5 shadow-inner">
            <div className="flex items-center justify-between font-mono text-[10px]">
              <span className="flex items-center gap-1.5 text-[#00e599] font-bold">
                <Radio className="w-3.5 h-3.5" />
                INTERACTIVE PIANO-ROLL SCORE // {milestone.keySignature}
              </span>
              <span className="text-stone-400 uppercase">
                SYNTH VOICE: {milestone.instrumentPreset}
              </span>
            </div>

            {/* Visual Step Bars */}
            <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5 pt-1">
              {milestone.motifNotes.map((item, i) => {
                const label = Array.isArray(item.note)
                  ? item.note[0]
                  : item.note;
                const isChord = Array.isArray(item.note);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      if (Array.isArray(item.note)) {
                        soundEngine.playChord(
                          item.note,
                          milestone.instrumentPreset,
                          0.65
                        );
                      } else {
                        soundEngine.playNote(
                          item.note,
                          milestone.instrumentPreset,
                          0.55
                        );
                      }
                    }}
                    className="group relative h-14 rounded bg-white/5 hover:bg-[#ff4d1c] border border-white/10 hover:border-[#ff4d1c] transition flex flex-col justify-between p-1.5 text-left"
                    title={`Click to play ${
                      Array.isArray(item.note) ? item.note.join('+') : item.note
                    }`}
                  >
                    <span
                      className={`w-full h-1.5 rounded-xs ${
                        isPlaying
                          ? 'bg-[#00e599] animate-pulse'
                          : isChord
                          ? 'bg-blue-400'
                          : 'bg-[#ff4d1c]'
                      }`}
                    />
                    <span className="font-mono text-[10px] font-bold text-white group-hover:text-white truncate">
                      {label}
                    </span>
                    <span className="font-mono text-[8px] text-stone-400 group-hover:text-white/90">
                      {isChord ? 'CHRD' : `${item.duration}B`}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="font-mono text-[11px] text-stone-400">
              {milestone.motifDescription}
            </p>
          </div>

          {/* Editorial Liner Notes */}
          <p className="text-sm sm:text-base font-medium leading-relaxed opacity-95">
            {milestone.logline}
          </p>
          <p className="text-xs sm:text-sm leading-relaxed opacity-80">
            {milestone.historicalEssay[0]}
          </p>

          {/* Technical Sonic Breakthrough & Essential Track Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-current/[0.04] border border-current/10 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#ff4d1c] font-bold">
                <Sparkles className="w-3 h-3" />
                <span>BREAKTHROUGH // {milestone.sonicBreakthrough.headline}</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed line-clamp-3">
                {milestone.sonicBreakthrough.detail}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-current/[0.04] border border-current/10 space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-blue-500 font-bold">
                <Disc3 className="w-3 h-3" />
                <span>KEY CUT // "{milestone.essentialTrack.title}"</span>
              </div>
              <p className="text-xs opacity-80 leading-relaxed line-clamp-3">
                {milestone.essentialTrack.description}
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-current/10">
          <button
            type="button"
            onClick={() => onOpenDossier(milestone)}
            className="px-4 py-2.5 rounded-xl bg-[#ff4d1c] hover:bg-[#e03e10] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition shadow-md"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Inspect Liner Notes & Score</span>
          </button>

          <button
            type="button"
            onClick={onOpenStudio}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition shadow-md"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Load in Synth & 808 Lab</span>
          </button>
        </div>
      </div>

      {/* COLUMN 3 (3 COLS): VERTICAL RECORD CRATE / SPINE DIGGER */}
      <div
        className={`lg:col-span-3 rounded-2xl p-4 border flex flex-col justify-between ${
          isDaylight
            ? 'te-card-light'
            : 'bg-[#161922] border-white/15 text-ivory-50 shadow-2xl'
        }`}
      >
        <div className="flex items-center justify-between border-b border-current/10 pb-3 mb-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff4d1c] font-bold block">
              CRATE DIGGER // {filteredMilestones.length} DISCS
            </span>
            <h3 className="font-display text-base font-bold">
              Select Record to Spin
            </h3>
          </div>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-current/10 font-bold">
            #{activeIndex + 1}
          </span>
        </div>

        {/* Scrollable Vertical Record Spines */}
        <div className="space-y-1.5 max-h-[470px] overflow-y-auto pr-1">
          {filteredMilestones.map((item, idx) => {
            const isSelected = idx === activeIndex;
            const isItemPlaying = playingId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => onSelectIndex(idx)}
                className={`p-2.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-2 ${
                  isSelected
                    ? 'bg-[#ff4d1c] text-white border-[#ff4d1c] shadow-md'
                    : 'bg-current/[0.04] hover:bg-current/[0.09] border-current/10'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 font-mono text-[10px]">
                    <span
                      className={`font-bold ${
                        isSelected ? 'text-white' : 'text-[#ff4d1c]'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="opacity-60">•</span>
                    <span className="truncate opacity-80">{item.artist}</span>
                  </div>
                  <p className="font-display text-xs font-bold truncate mt-0.5">
                    {item.title}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectIndex(idx);
                    soundEngine.playMotif(
                      item.id,
                      item.motifNotes,
                      item.instrumentPreset,
                      item.bpm
                    );
                  }}
                  className={`p-1.5 rounded-lg shrink-0 transition ${
                    isItemPlaying
                      ? 'bg-[#00e599] text-black'
                      : isSelected
                      ? 'bg-black/25 text-white hover:bg-black/40'
                      : 'bg-current/10 hover:bg-[#ff4d1c] hover:text-white'
                  }`}
                  title="Drop Needle on Motif"
                >
                  {isItemPlaying ? (
                    <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
