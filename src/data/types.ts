import { InstrumentPreset, MotifNote } from '../audio/soundEngine';

export type MusicEraId =
  | 'sacred-baroque'
  | 'classical-romantic'
  | 'blues-jazz-age'
  | 'rock-psychedelia-soul'
  | 'punk-synth-hiphop'
  | 'grunge-idm-rave'
  | 'streaming-global-bass';

export type MusicCategory =
  | 'masterpiece'
  | 'cult'
  | 'electronic'
  | 'rhythm-jazz-hiphop';

export interface MusicEra {
  id: MusicEraId;
  number: string;
  name: string;
  shortName: string;
  years: string;
  startYear: number;
  endYear: number;
  tuningPitch: string;
  dominantFormat: string;
  accentColor: string;
  secondaryGlow: string;
  description: string;
}

export interface MusicMilestone {
  id: string;
  year: number;
  catalogCode: string;
  eraId: MusicEraId;
  category: MusicCategory;
  isCultGem?: boolean;
  title: string;
  subtitleOrAlbum?: string;
  artist: string;
  producerOrConductor: string;
  country: string;
  format: string;
  duration: string;
  keySignature: string;
  bpm: number;
  instrumentPreset: InstrumentPreset;
  motifNotes: MotifNote[];
  motifDescription: string;
  coverUrl?: string;
  primaryTag: string;
  logline: string;
  historicalEssay: string[];
  sonicBreakthrough: {
    headline: string;
    detail: string;
  };
  essentialTrack: {
    title: string;
    description: string;
  };
  famousQuote: {
    text: string;
    attribution: string;
  };
  accolades: string;
  influencedBy: string[];
  pavedWayFor: string[];
  colorPalette: [string, string, string];
}

export interface MusicMovement {
  id: string;
  name: string;
  subtitle: string;
  years: string;
  origin: string;
  accentColor: string;
  bpmRange: string;
  manifesto: string;
  hallmarks: string[];
  keyFigures: string[];
  instrumentPreset: InstrumentPreset;
  demoMotif: MotifNote[];
   demoBpm: number;
  signatureWorks: {
    id: string;
    title: string;
    artist: string;
    year: number;
    coverUrl?: string;
  }[];
}

export interface LiveConcertMoment {
  id: string;
  year: number;
  title: string;
  artist: string;
  venueAndCity: string;
  crowdSize: string;
  badge: string;
  shockOrTriumph: string;
  story: string;
  coverUrl?: string;
  linkedMilestoneId?: string;
  accentColor: string;
}

export interface MusicIcon {
  id: string;
  name: string;
  role: 'Composer & Conductor' | 'Producer & Sonic Architect' | 'Cult & Underground Pioneer' | 'Vocalist & Virtuoso';
  isCultIcon?: boolean;
  eraId: MusicEraId;
  yearsActive: string;
  nationality: string;
  titleBadge: string;
  signatureSound: string;
  biography: string;
  keyInnovations: string[];
  essentialWorks: {
    title: string;
    year: number;
    note: string;
    milestoneId?: string;
  }[];
  quote: string;
  photoUrl?: string;
  palette: [string, string, string];
}
