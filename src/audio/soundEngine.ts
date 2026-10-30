export type InstrumentPreset =
  | 'harpsichord'
  | 'piano'
  | 'organ'
  | 'moog'
  | 'pad'
  | 'acid';

export interface MotifNote {
  note: string | string[]; // single note ("C4") or chord (["D4", "F4", "A4", "C5"])
  duration: number; // in beats
  delay: number; // start beat offset
}

const NOTE_OFFSETS: Record<string, number> = {
  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11,
};

export function noteToFreq(note: string): number {
  const match = note.trim().match(/^([A-G][#b]?)(-?\d)$/);
  if (!match) return 440;
  const [, pitch, octStr] = match;
  const semitone = NOTE_OFFSETS[pitch] ?? 9;
  const octave = parseInt(octStr, 10);
  const midi = (octave + 1) * 12 + semitone;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

class SoundEngine {
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private masterGain: GainNode | null = null;
  private activeTimeouts: number[] = [];
  private currentPlayingId: string | null = null;
  private listeners: Set<(playingId: string | null) => void> = new Set();

  private initContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.42;

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.82;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public onPlaybackChange(cb: (playingId: string | null) => void): () => void {
    this.listeners.add(cb);
    return () => this.listeners.delete(cb);
  }

  private notifyListeners(id: string | null) {
    this.currentPlayingId = id;
    this.listeners.forEach((cb) => cb(id));
  }

  public getPlayingId(): string | null {
    return this.currentPlayingId;
  }

  public playNote(
    noteOrFreq: string | number,
    preset: InstrumentPreset = 'piano',
    durationSec = 0.55,
    velocity = 0.75
  ) {
    const ctx = this.initContext();
    if (!this.masterGain) return;

    const freq = typeof noteOrFreq === 'number' ? noteOrFreq : noteToFreq(noteOrFreq);
    const now = ctx.currentTime;

    const voiceGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.connect(voiceGain);
    voiceGain.connect(this.masterGain);

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const osc2Gain = ctx.createGain();
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    osc1.connect(filter);

    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq, now);

    switch (preset) {
      case 'harpsichord': {
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 2, now);
        osc2Gain.gain.value = 0.35;
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(freq * 3.2, now);
        filter.Q.value = 1.4;
        voiceGain.gain.setValueAtTime(0.001, now);
        voiceGain.gain.linearRampToValueAtTime(velocity * 0.45, now + 0.008);
        voiceGain.gain.exponentialRampToValueAtTime(0.0008, now + Math.min(durationSec, 0.65));
        break;
      }

      case 'piano': {
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2, now);
        osc2Gain.gain.value = 0.25;
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 5.5, now);
        filter.frequency.exponentialRampToValueAtTime(freq * 1.6, now + durationSec);
        voiceGain.gain.setValueAtTime(0.001, now);
        voiceGain.gain.linearRampToValueAtTime(velocity * 0.6, now + 0.012);
        voiceGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec + 0.15);
        break;
      }

      case 'organ': {
        osc1.type = 'sine';
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 1.498, now); // 5th drawbar harmonic
        osc2Gain.gain.value = 0.22;
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2400, now);
        voiceGain.gain.setValueAtTime(0.001, now);
        voiceGain.gain.linearRampToValueAtTime(velocity * 0.5, now + 0.03);
        voiceGain.gain.setValueAtTime(velocity * 0.45, now + durationSec * 0.8);
        voiceGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec + 0.1);
        break;
      }

      case 'moog': {
        osc1.type = 'sawtooth';
        osc2.type = 'sawtooth';
        osc2.detune.setValueAtTime(11, now);
        osc2Gain.gain.value = 0.7;
        filter.type = 'lowpass';
        filter.Q.value = 5.5;
        filter.frequency.setValueAtTime(freq * 1.2, now);
        filter.frequency.exponentialRampToValueAtTime(Math.min(7500, freq * 8), now + 0.09);
        filter.frequency.exponentialRampToValueAtTime(freq * 2.2, now + durationSec);
        voiceGain.gain.setValueAtTime(0.001, now);
        voiceGain.gain.linearRampToValueAtTime(velocity * 0.42, now + 0.018);
        voiceGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec + 0.08);
        break;
      }

      case 'pad': {
        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc2.detune.setValueAtTime(-14, now);
        osc2Gain.gain.value = 0.85;
        filter.type = 'lowpass';
        filter.Q.value = 2.0;
        filter.frequency.setValueAtTime(freq * 3.2, now);
        voiceGain.gain.setValueAtTime(0.001, now);
        voiceGain.gain.linearRampToValueAtTime(velocity * 0.36, now + 0.12);
        voiceGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec + 0.35);
        break;
      }

      case 'acid': {
        osc1.type = 'sawtooth';
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(freq * 0.5, now);
        osc2Gain.gain.value = 0.35;
        filter.type = 'lowpass';
        filter.Q.value = 13.5;
        filter.frequency.setValueAtTime(freq * 11, now);
        filter.frequency.exponentialRampToValueAtTime(Math.max(120, freq * 1.15), now + durationSec * 0.85);
        voiceGain.gain.setValueAtTime(0.001, now);
        voiceGain.gain.linearRampToValueAtTime(velocity * 0.48, now + 0.006);
        voiceGain.gain.exponentialRampToValueAtTime(0.001, now + durationSec + 0.04);
        break;
      }
    }

    const stopTime = now + durationSec + 0.4;
    osc1.start(now);
    osc2.start(now);
    osc1.stop(stopTime);
    osc2.stop(stopTime);
  }

  public playChord(notes: string[], preset: InstrumentPreset = 'piano', durationSec = 0.7) {
    notes.forEach((n) => this.playNote(n, preset, durationSec, 0.55 / Math.sqrt(notes.length)));
  }

  // Synthesized Roland TR-808 Drum Voices
  public playKick() {
    const ctx = this.initContext();
    if (!this.masterGain) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(145, now);
    osc.frequency.exponentialRampToValueAtTime(36, now + 0.12);
    gain.gain.setValueAtTime(0.95, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  public playSnare() {
    const ctx = this.initContext();
    if (!this.masterGain) return;
    const now = ctx.currentTime;

    // Noise burst
    const bufferSize = ctx.sampleRate * 0.18;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(900, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.45, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    noise.start(now);

    // Body tone
    const osc = ctx.createOscillator();
    const bodyGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(190, now);
    osc.frequency.exponentialRampToValueAtTime(95, now + 0.08);
    bodyGain.gain.setValueAtTime(0.45, now);
    bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.connect(bodyGain);
    bodyGain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.11);
  }

  public playHiHat(open = false) {
    const ctx = this.initContext();
    if (!this.masterGain) return;
    const now = ctx.currentTime;
    const dur = open ? 0.28 : 0.055;
    const bufferSize = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * (open ? 0.12 : 0.018)));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6800, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.32, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  public playClap() {
    const ctx = this.initContext();
    if (!this.masterGain) return;
    const now = ctx.currentTime;
    const bufferSize = Math.floor(ctx.sampleRate * 0.16);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1350, now);
    filter.Q.value = 1.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.42, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  public stopMotif() {
    this.activeTimeouts.forEach((id) => window.clearTimeout(id));
    this.activeTimeouts = [];
    this.notifyListeners(null);
  }

  public playMotif(
    id: string,
    notes: MotifNote[],
    preset: InstrumentPreset = 'piano',
    bpm = 120
  ) {
    if (this.currentPlayingId === id) {
      this.stopMotif();
      return;
    }
    this.stopMotif();
    this.initContext();
    this.notifyListeners(id);

    const beatSec = 60 / bpm;
    let maxEndSec = 0;

    notes.forEach((item) => {
      const startMs = item.delay * beatSec * 1000;
      const durSec = Math.max(0.12, item.duration * beatSec);
      const endSec = item.delay * beatSec + durSec;
      if (endSec > maxEndSec) maxEndSec = endSec;

      const tId = window.setTimeout(() => {
        if (Array.isArray(item.note)) {
          this.playChord(item.note, preset, durSec);
        } else {
          this.playNote(item.note, preset, durSec);
        }
      }, startMs);
      this.activeTimeouts.push(tId);
    });

    const endId = window.setTimeout(() => {
      this.notifyListeners(null);
    }, (maxEndSec + 0.25) * 1000);
    this.activeTimeouts.push(endId);
  }

  public getWaveformData(targetArray: Uint8Array<ArrayBuffer>): boolean {
    if (!this.analyser) return false;
    this.analyser.getByteTimeDomainData(targetArray);
    return true;
  }

  public getFrequencyData(targetArray: Uint8Array<ArrayBuffer>): boolean {
    if (!this.analyser) return false;
    this.analyser.getByteFrequencyData(targetArray);
    return true;
  }
}

export const soundEngine = new SoundEngine();
