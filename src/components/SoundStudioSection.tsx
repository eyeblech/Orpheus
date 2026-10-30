import React, { useState, useEffect, useRef, useCallback } from 'react';
import { soundEngine, InstrumentPreset, noteToFreq } from '../audio/soundEngine';
import { MusicMilestone } from '../data/types';
import {
  Play,
  Square,
  Volume2,
  Sliders,
  Sparkles,
  RotateCcw,
  Piano,
  Radio,
  Disc3,
} from 'lucide-react';

interface SoundStudioSectionProps {
  milestones: MusicMilestone[];
  playingId: string | null;
  onSelectMilestone: (m: MusicMilestone) => void;
}

interface PianoKeyDef {
  note: string;
  label: string;
  keyCap: string;
  isSharp: boolean;
}

const PIANO_KEYS: PianoKeyDef[] = [
  { note: 'C3', label: 'C3', keyCap: 'Z', isSharp: false },
  { note: 'C#3', label: 'C#', keyCap: 'S', isSharp: true },
  { note: 'D3', label: 'D3', keyCap: 'X', isSharp: false },
  { note: 'D#3', label: 'D#', keyCap: 'D', isSharp: true },
  { note: 'E3', label: 'E3', keyCap: 'C', isSharp: false },
  { note: 'F3', label: 'F3', keyCap: 'V', isSharp: false },
  { note: 'F#3', label: 'F#', keyCap: 'G', isSharp: true },
  { note: 'G3', label: 'G3', keyCap: 'B', isSharp: false },
  { note: 'G#3', label: 'G#', keyCap: 'H', isSharp: true },
  { note: 'A3', label: 'A3', keyCap: 'N', isSharp: false },
  { note: 'A#3', label: 'A#', keyCap: 'J', isSharp: true },
  { note: 'B3', label: 'B3', keyCap: 'M', isSharp: false },
  { note: 'C4', label: 'C4', keyCap: 'Q', isSharp: false },
  { note: 'C#4', label: 'C#', keyCap: '2', isSharp: true },
  { note: 'D4', label: 'D4', keyCap: 'W', isSharp: false },
  { note: 'D#4', label: 'D#', keyCap: '3', isSharp: true },
  { note: 'E4', label: 'E4', keyCap: 'E', isSharp: false },
  { note: 'F4', label: 'F4', keyCap: 'R', isSharp: false },
  { note: 'F#4', label: 'F#', keyCap: '5', isSharp: true },
  { note: 'G4', label: 'G4', keyCap: 'T', isSharp: false },
  { note: 'G#4', label: 'G#', keyCap: '6', isSharp: true },
  { note: 'A4', label: 'A4', keyCap: 'Y', isSharp: false },
  { note: 'A#4', label: 'A#', keyCap: '7', isSharp: true },
  { note: 'B4', label: 'B4', keyCap: 'U', isSharp: false },
  { note: 'C5', label: 'C5', keyCap: 'I', isSharp: false },
  { note: 'C#5', label: 'C#', keyCap: '9', isSharp: true },
  { note: 'D5', label: 'D5', keyCap: 'O', isSharp: false },
  { note: 'D#5', label: 'D#', keyCap: '0', isSharp: true },
  { note: 'E5', label: 'E5', keyCap: 'P', isSharp: false },
];

const INSTRUMENT_PRESETS: {
  id: InstrumentPreset;
  eraYear: string;
  name: string;
  subtitle: string;
  accent: string;
}[] = [
  {
    id: 'harpsichord',
    eraYear: '1720',
    name: 'Flemish Harpsichord',
    subtitle: 'Plucked Baroque brass-string acoustics (J.S. Bach)',
    accent: '#eab308',
  },
  {
    id: 'piano',
    eraYear: '1900',
    name: 'Concert Grand Piano',
    subtitle: 'Warm hammer-felt overtones (Beethoven, Debussy, Bill Evans)',
    accent: '#f59e0b',
  },
  {
    id: 'organ',
    eraYear: '1959',
    name: 'Cathedral & Drawbar Organ',
    subtitle: 'Sustained harmonic fifths (Sacred Polyphony & Soul)',
    accent: '#ec4899',
  },
  {
    id: 'moog',
    eraYear: '1970',
    name: 'Minimoog Analog Lead',
    subtitle: 'Dual detuned sawtooth + 24dB ladder filter (Kraftwerk, Moroder)',
    accent: '#06b6d4',
  },
  {
    id: 'pad',
    eraYear: '1982',
    name: 'Juno-60 Lush Synth Pad',
    subtitle: 'Slow-attack warm chorus wash (Brian Eno, Vangelis, Kate Bush)',
    accent: '#a855f7',
  },
  {
    id: 'acid',
    eraYear: '1987',
    name: 'Roland TB-303 Acid Bass',
    subtitle: 'High-resonance liquid filter squelch (Chicago Acid & Rave)',
    accent: '#10b981',
  },
];

interface DrumPatternPreset {
  id: string;
  name: string;
  year: number;
  bpm: number;
  description: string;
  kick: number[];
  snare: number[];
  hihat: number[];
  clap: number[];
}

const DRUM_PRESETS: DrumPatternPreset[] = [
  {
    id: 'planet-rock-808',
    name: 'Planet Rock Electro 808',
    year: 1982,
    bpm: 126,
    description: 'Afrika Bambaataa & Kraftwerk syncopated Bronx electro',
    kick:  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    hihat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    clap:  [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  },
  {
    id: 'funky-drummer',
    name: 'Funky Drummer Break',
    year: 1970,
    bpm: 102,
    description: 'Clyde Stubblefield’s ghost-note funk groove (James Brown)',
    kick:  [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    snare: [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    hihat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    clap:  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  },
  {
    id: 'motorik-pulse',
    name: 'Krautrock Motorik 4/4',
    year: 1972,
    bpm: 132,
    description: 'Jaki Liebezeit (Can) & Klaus Dinger (Neu!) Autobahn pulse',
    kick:  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    hihat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    clap:  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: 'dilla-boom-bap',
    name: 'Detroit Soul Boom-Bap',
    year: 2006,
    bpm: 90,
    description: 'J Dilla MPC3000 head-nod pocket with late snare slap',
    kick:  [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    hihat: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    clap:  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  },
  {
    id: 'amen-jungle',
    name: '1994 London Jungle Break',
    year: 1994,
    bpm: 160,
    description: 'Chopped Amen Brother breakbeat at high-velocity UK rave tempo',
    kick:  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    snare: [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    hihat: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    clap:  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  },
];

export const SoundStudioSection: React.FC<SoundStudioSectionProps> = ({
  milestones,
  playingId,
  onSelectMilestone,
}) => {
  const [preset, setPreset] = useState<InstrumentPreset>('moog');
  const [noteDuration, setNoteDuration] = useState<number>(0.65);
  const [activeNotes, setActiveNotes] = useState<Set<string>>(new Set());
  const [lastPlayedNote, setLastPlayedNote] = useState<string>('A4 (440 Hz)');

  // 16-Step Drum Sequencer State
  const [isSeqPlaying, setIsSeqPlaying] = useState(false);
  const [bpm, setBpm] = useState<number>(126);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedDrumPreset, setSelectedDrumPreset] = useState<string>('planet-rock-808');
  const [kickRow, setKickRow] = useState<number[]>(DRUM_PRESETS[0].kick);
  const [snareRow, setSnareRow] = useState<number[]>(DRUM_PRESETS[0].snare);
  const [hihatRow, setHihatRow] = useState<number[]>(DRUM_PRESETS[0].hihat);
  const [clapRow, setClapRow] = useState<number[]>(DRUM_PRESETS[0].clap);

  // Refs for accurate step timer
  const kickRef = useRef(kickRow);
  const snareRef = useRef(snareRow);
  const hihatRef = useRef(hihatRow);
  const clapRef = useRef(clapRow);
  kickRef.current = kickRow;
  snareRef.current = snareRow;
  hihatRef.current = hihatRow;
  clapRef.current = clapRow;

  // Live Oscilloscope Canvas
  const scopeCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const triggerNote = useCallback(
    (note: string) => {
      soundEngine.playNote(note, preset, noteDuration);
      const hz = Math.round(noteToFreq(note));
      setLastPlayedNote(`${note} (${hz} Hz)`);
      setActiveNotes((prev) => {
        const next = new Set(prev);
        next.add(note);
        return next;
      });
      window.setTimeout(() => {
        setActiveNotes((prev) => {
          const next = new Set(prev);
          next.delete(note);
          return next;
        });
      }, 240);
    },
    [preset, noteDuration]
  );

  // Computer Keyboard Listener
  useEffect(() => {
    const keyMap: Record<string, string> = {};
    PIANO_KEYS.forEach((k) => {
      keyMap[k.keyCap.toLowerCase()] = k.note;
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.repeat ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)
      ) {
        return;
      }
      const mapped = keyMap[e.key.toLowerCase()];
      if (mapped) {
        e.preventDefault();
        triggerNote(mapped);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerNote]);

  // 16-Step Sequencer Loop
  useEffect(() => {
    if (!isSeqPlaying) return;
    const stepMs = (60 / bpm / 4) * 1000;
    const interval = window.setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % 16;
        if (kickRef.current[next]) soundEngine.playKick();
        if (snareRef.current[next]) soundEngine.playSnare();
        if (hihatRef.current[next]) soundEngine.playHiHat(next % 4 === 2);
        if (clapRef.current[next]) soundEngine.playClap();
        return next;
      });
    }, stepMs);
    return () => clearInterval(interval);
  }, [isSeqPlaying, bpm]);

  // Live Studio Oscilloscope & Spectrum Visualizer
  useEffect(() => {
    const canvas = scopeCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const waveData = new Uint8Array(new ArrayBuffer(256));
    const freqData = new Uint8Array(new ArrayBuffer(128));

    const draw = () => {
      const { width, height } = canvas;
      ctx.fillStyle = '#090910';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      const hasFreq = soundEngine.getFrequencyData(freqData);
      if (hasFreq) {
        const barW = width / 48;
        for (let i = 0; i < 48; i++) {
          const val = freqData[i] / 255;
          const barH = val * (height * 0.82);
          ctx.fillStyle = 'rgba(245, 158, 11, 0.20)';
          ctx.fillRect(i * barW, height - barH, barW - 2, barH);
        }
      }

      const hasWave = soundEngine.getWaveformData(waveData);
      ctx.beginPath();
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2.2;
      const slice = width / (waveData.length - 1);
      for (let i = 0; i < waveData.length; i++) {
        const v = hasWave ? (waveData[i] - 128) / 128 : 0;
        const y = height / 2 + v * (height * 0.42);
        const x = i * slice;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  const loadDrumPreset = (p: DrumPatternPreset) => {
    setSelectedDrumPreset(p.id);
    setBpm(p.bpm);
    setKickRow([...p.kick]);
    setSnareRow([...p.snare]);
    setHihatRow([...p.hihat]);
    setClapRow([...p.clap]);
  };

  const toggleStep = (
    row: number[],
    setter: React.Dispatch<React.SetStateAction<number[]>>,
    idx: number,
    previewFn: () => void
  ) => {
    const next = [...row];
    next[idx] = next[idx] ? 0 : 1;
    if (next[idx]) previewFn();
    setter(next);
  };

  const whiteKeys = PIANO_KEYS.filter((k) => !k.isSharp);

  return (
    <div className="space-y-8 pb-12">
      {/* Top Studio Header & Live Oscilloscope */}
      <div className="glass-panel rounded-2xl p-5 sm:p-7 border border-amber-400/25 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Web Audio Synthesizer & 808 Lab</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ivory-50">
              Play the Instruments of Music History
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Use your <span className="text-amber-300 font-semibold">mouse</span> or{' '}
              <span className="text-amber-300 font-semibold">computer keyboard</span> (
              <code className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs text-ivory-100">
                Q W E R T Y U I O P
              </code>{' '}
              &{' '}
              <code className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs text-ivory-100">
                Z X C V B N M
              </code>
              ) to play notes and chords across 6 historical instruments, or program the 16-step
              Roland TR-808 drum machine below.
            </p>
          </div>

          {/* Real-time Oscilloscope Screen */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-white/15 bg-obsidian-950 p-3 shadow-inner">
              <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-2">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  LIVE WEB AUDIO OSCILLOSCOPE
                </span>
                <span className="text-ivory-100 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  PITCH: {lastPlayedNote}
                </span>
              </div>
              <canvas
                ref={scopeCanvasRef}
                width={560}
                height={100}
                className="w-full h-24 rounded-lg border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 6 Historical Instrument Presets + Sustain Control */}
      <div className="glass-panel rounded-2xl p-5 sm:p-7 border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Piano className="w-5 h-5 text-amber-400" />
            <h3 className="font-display text-xl font-bold text-ivory-50">
              1. Choose Historical Synthesizer / Instrument Voice
            </h3>
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-stone-300">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>Note Sustain: {noteDuration.toFixed(2)}s</span>
            <input
              type="range"
              min={0.2}
              max={1.8}
              step={0.05}
              value={noteDuration}
              onChange={(e) => setNoteDuration(parseFloat(e.target.value))}
              className="w-28 accent-amber-400 cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
          {INSTRUMENT_PRESETS.map((item) => {
            const active = preset === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setPreset(item.id);
                  soundEngine.playChord(['C4', 'E4', 'G4'], item.id, 0.55);
                }}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  active
                    ? 'bg-amber-400/15 border-amber-400 shadow-lg scale-[1.01]'
                    : 'bg-obsidian-900/70 border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${item.accent}25`,
                      color: item.accent,
                    }}
                  >
                    {item.eraYear}
                  </span>
                  {active && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  )}
                </div>
                <p className="font-display text-sm font-bold text-ivory-50 mt-1">
                  {item.name}
                </p>
                <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Playable 2-Octave Keyboard */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-2">
            <span>2-OCTAVE POLYPHONIC KEYBOARD (C3 – E5)</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => soundEngine.playChord(['D4', 'F4', 'A4', 'C5'], preset, 0.9)}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-amber-400/20 text-amber-300 border border-white/10 transition"
              >
                Dm7 Chord (So What)
              </button>
              <button
                type="button"
                onClick={() => soundEngine.playChord(['C4', 'G4', 'B4', 'E5'], preset, 0.9)}
                className="px-2.5 py-1 rounded bg-white/5 hover:bg-amber-400/20 text-amber-300 border border-white/10 transition"
              >
                Cmaj9Lush Chord
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-x-auto pb-2">
            <div className="min-w-[760px] h-52 bg-obsidian-950 p-3 rounded-2xl border border-white/15 flex gap-1 relative select-none shadow-2xl">
              {whiteKeys.map((wk) => {
                const isPressed = activeNotes.has(wk.note);
                // Check if this white key has a sharp right after it
                const notePrefix = wk.note.slice(0, 1);
                const octave = wk.note.slice(1);
                const sharpNote = `${notePrefix}#${octave}`;
                const sharpDef = PIANO_KEYS.find((k) => k.note === sharpNote);
                const isSharpPressed = sharpDef ? activeNotes.has(sharpDef.note) : false;

                return (
                  <div key={wk.note} className="relative flex-1 h-full">
                    {/* White Key */}
                    <button
                      type="button"
                      onMouseDown={() => triggerNote(wk.note)}
                      className={`w-full h-full rounded-b-xl border transition-all flex flex-col justify-end items-center pb-3 ${
                        isPressed
                          ? 'bg-amber-300 border-amber-400 translate-y-0.5 shadow-inner'
                          : 'bg-ivory-100 hover:bg-ivory-50 border-stone-300 shadow-md'
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold text-obsidian-900">
                        {wk.label}
                      </span>
                      <span className="mt-1 px-1.5 py-0.5 rounded bg-obsidian-950/10 font-mono text-[9px] text-stone-600">
                        {wk.keyCap}
                      </span>
                    </button>

                    {/* Black Sharp Key */}
                    {sharpDef && (
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          e.stopPropagation();
                          triggerNote(sharpDef.note);
                        }}
                        className={`absolute top-0 -right-[30%] z-20 w-[58%] h-[60%] rounded-b-lg border transition-all flex flex-col justify-end items-center pb-2 shadow-xl ${
                          isSharpPressed
                            ? 'bg-amber-400 text-obsidian-950 border-amber-300 translate-y-0.5'
                            : 'bg-obsidian-900 hover:bg-obsidian-800 text-ivory-100 border-white/20'
                        }`}
                      >
                        <span className="font-mono text-[9px] opacity-80">
                          {sharpDef.label}
                        </span>
                        <span className="font-mono text-[8px] px-1 rounded bg-white/10 mt-0.5">
                          {sharpDef.keyCap}
                        </span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 16-Step Roland TR-808 Rhythm Composer */}
      <div className="glass-panel rounded-2xl p-5 sm:p-7 border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
              RHYTHM COMPOSER • 16-STEP SEQUENCER
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory-50 mt-0.5">
              2. Roland TR-808 Historical Drum Machine
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSeqPlaying((p) => !p)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition shadow-lg ${
                isSeqPlaying
                  ? 'bg-rose-500 text-white'
                  : 'bg-amber-400 text-obsidian-950 hover:bg-amber-300'
              }`}
            >
              {isSeqPlaying ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current" />
                  <span>Stop 808 Loop</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start 808 Loop</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 bg-obsidian-950 px-3 py-2 rounded-xl border border-white/10 font-mono text-xs">
              <span className="text-amber-400 font-bold">{bpm} BPM</span>
              <input
                type="range"
                min={68}
                max={168}
                value={bpm}
                onChange={(e) => setBpm(parseInt(e.target.value, 10))}
                className="w-24 accent-amber-400 cursor-pointer"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setKickRow(new Array(16).fill(0));
                setSnareRow(new Array(16).fill(0));
                setHihatRow(new Array(16).fill(0));
                setClapRow(new Array(16).fill(0));
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-stone-300 font-mono text-xs border border-white/10 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Historical Beat Presets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {DRUM_PRESETS.map((dp) => (
            <button
              key={dp.id}
              type="button"
              onClick={() => loadDrumPreset(dp)}
              className={`p-3 rounded-xl border text-left transition ${
                selectedDrumPreset === dp.id
                  ? 'bg-amber-400/15 border-amber-400 text-ivory-50'
                  : 'bg-obsidian-900/60 border-white/10 text-stone-300 hover:border-white/25'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[10px] text-amber-400">
                <span>{dp.year} PRESET</span>
                <span>{dp.bpm} BPM</span>
              </div>
              <p className="font-display text-sm font-bold text-ivory-50 mt-1">
                {dp.name}
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                {dp.description}
              </p>
            </button>
          ))}
        </div>

        {/* 16-Step Matrix */}
        <div className="overflow-x-auto">
          <div className="min-w-[680px] space-y-2.5 bg-obsidian-950 p-4 rounded-2xl border border-white/10">
            {[
              {
                label: '808 SUB KICK',
                color: '#ef4444',
                row: kickRow,
                setter: setKickRow,
                preview: () => soundEngine.playKick(),
              },
              {
                label: '808 SNARE',
                color: '#f59e0b',
                row: snareRow,
                setter: setSnareRow,
                preview: () => soundEngine.playSnare(),
              },
              {
                label: 'CLOSED HI-HAT',
                color: '#eab308',
                row: hihatRow,
                setter: setHihatRow,
                preview: () => soundEngine.playHiHat(false),
              },
              {
                label: 'ANALOG CLAP',
                color: '#ec4899',
                row: clapRow,
                setter: setClapRow,
                preview: () => soundEngine.playClap(),
              },
            ].map((track) => (
              <div key={track.label} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={track.preview}
                  className="w-32 shrink-0 text-left font-mono text-[11px] font-bold px-2.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-ivory-100 flex items-center justify-between"
                >
                  <span>{track.label}</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: track.color }}
                  />
                </button>

                <div
                  className="grid gap-1.5 flex-1"
                  style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}
                >
                  {track.row.map((active, idx) => {
                    const isCurrent = isSeqPlaying && currentStep === idx;
                    const isQuarterBeat = idx % 4 === 0;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          toggleStep(track.row, track.setter, idx, track.preview)
                        }
                        className={`h-9 rounded-lg border transition-all flex items-center justify-center font-mono text-[10px] ${
                          active
                            ? 'border-white/40 text-obsidian-950 font-bold shadow-md'
                            : isQuarterBeat
                            ? 'bg-white/[0.07] border-white/15 text-stone-500 hover:bg-white/15'
                            : 'bg-white/[0.03] border-white/10 text-stone-600 hover:bg-white/10'
                        } ${isCurrent ? 'ring-2 ring-ivory-50 scale-105' : ''}`}
                        style={
                          active
                            ? { backgroundColor: track.color }
                            : undefined
                        }
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Instant Historical Riff Jukebox */}
      <div className="glass-panel rounded-2xl p-5 sm:p-7 border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-amber-400">
              SYNTHESIZED SCORE ARCHIVE
            </span>
            <h3 className="font-display text-xl font-bold text-ivory-50">
              3. Audition Signature Historical Motifs ({milestones.length} Works)
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {milestones.slice(0, 12).map((m) => {
            const isPlaying = playingId === m.id;
            return (
              <div
                key={m.id}
                className={`p-3.5 rounded-xl border transition flex flex-col justify-between gap-3 ${
                  isPlaying
                    ? 'bg-amber-400/15 border-amber-400'
                    : 'bg-obsidian-900/60 border-white/10 hover:border-white/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span>
                      {m.year} • {m.keySignature}
                    </span>
                    <span className="uppercase text-amber-400">
                      {m.instrumentPreset}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectMilestone(m)}
                    className="text-left font-display text-sm font-bold text-ivory-50 hover:text-amber-300 transition mt-1 line-clamp-1"
                  >
                    {m.title}
                  </button>
                  <p className="text-xs text-stone-400 line-clamp-1">{m.artist}</p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    soundEngine.playMotif(
                      m.id,
                      m.motifNotes,
                      m.instrumentPreset,
                      m.bpm
                    )
                  }
                  className={`w-full py-1.5 px-3 rounded-lg font-mono text-xs flex items-center justify-center gap-1.5 transition ${
                    isPlaying
                      ? 'bg-amber-400 text-obsidian-950 font-bold'
                      : 'bg-white/10 hover:bg-amber-400 hover:text-obsidian-950 text-ivory-100'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      <span>Stop Motif</span>
                    </>
                  ) : (
                    <>
                      <Disc3 className="w-3.5 h-3.5" />
                      <span>Play Motif ({m.bpm} BPM)</span>
                    </>
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
