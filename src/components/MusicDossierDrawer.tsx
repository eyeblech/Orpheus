import React from 'react';
import { MusicMilestone } from '../data/types';
import { VinylArtwork } from './VinylArtwork';
import { soundEngine } from '../audio/soundEngine';
import {
  X,
  Disc3,
  Volume2,
  Sparkles,
  Music,
  Quote,
  Award,
  ArrowRight,
} from 'lucide-react';

interface MusicDossierDrawerProps {
  milestone: MusicMilestone | null;
  onClose: () => void;
  playingId: string | null;
  allMilestones: MusicMilestone[];
  onSelectMilestone: (m: MusicMilestone) => void;
}

export const MusicDossierDrawer: React.FC<MusicDossierDrawerProps> = ({
  milestone,
  onClose,
  playingId,
  allMilestones,
  onSelectMilestone,
}) => {
  if (!milestone) return null;
  const isPlaying = playingId === milestone.id;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-label="Close Dossier"
      />
      <aside className="relative z-10 w-full max-w-2xl h-full overflow-y-auto bg-obsidian-950 border-l border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
            <span>SONIC ARCHIVE DOSSIER</span>
            <span>•</span>
            <span>{milestone.catalogCode}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-ivory-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header + Sleeve + Play Button */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-5 pr-6">
            <VinylArtwork
              milestone={milestone}
              isPlaying={isPlaying}
              size="md"
              className="aspect-square w-full"
            />
          </div>
          <div className="sm:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold">
                {milestone.year}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-ivory-100 font-mono text-xs">
                {milestone.primaryTag}
              </span>
              {milestone.isCultGem && (
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 font-mono text-xs">
                  Cult
                </span>
              )}
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ivory-50 leading-tight">
              {milestone.title}
            </h2>
            <p className="text-base text-amber-300 font-medium">
              {milestone.artist}
            </p>
            <p className="text-xs font-mono text-stone-400">
              Producer / Direction: {milestone.producerOrConductor} •{' '}
              {milestone.country}
            </p>

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
              className={`w-full py-3 px-4 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg ${
                isPlaying
                  ? 'bg-amber-400 text-obsidian-950 font-bold'
                  : 'bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-obsidian-950 border border-amber-400/40'
              }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 animate-pulse" />
                  <span>Stop Signature Motif ({milestone.bpm} BPM)</span>
                </>
              ) : (
                <>
                  <Disc3 className="w-4 h-4" />
                  <span>
                    Play Signature Motif ({milestone.instrumentPreset.toUpperCase()} •{' '}
                    {milestone.bpm} BPM)
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Motif Note Breakdown */}
        <div className="p-4 rounded-2xl bg-obsidian-900/90 border border-amber-400/25 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono text-amber-300">
            <span className="flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5" />
              SYNTHESIZED MOTIF SCORE ({milestone.keySignature})
            </span>
            <span>CLICK ANY NOTE TO AUDITION</span>
          </div>
          <p className="text-xs text-stone-300">{milestone.motifDescription}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {milestone.motifNotes.map((n, i) => {
              const label = Array.isArray(n.note) ? n.note.join('+') : n.note;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    if (Array.isArray(n.note)) {
                      soundEngine.playChord(
                        n.note,
                        milestone.instrumentPreset,
                        0.6
                      );
                    } else {
                      soundEngine.playNote(
                        n.note,
                        milestone.instrumentPreset,
                        0.55
                      );
                    }
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-amber-400 hover:text-obsidian-950 text-ivory-100 font-mono text-xs border border-white/10 transition"
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sonic Breakthrough */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sonic Breakthrough: {milestone.sonicBreakthrough.headline}</span>
          </div>
          <p className="text-sm text-stone-300 leading-relaxed">
            {milestone.sonicBreakthrough.detail}
          </p>
        </div>

        {/* Historical Essay */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-stone-400">
            Historical Context & Architecture
          </h3>
          {milestone.historicalEssay.map((para, idx) => (
            <p
              key={idx}
              className="font-serif text-base text-ivory-100/90 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Essential Track & Quote */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400">
              ESSENTIAL RECORDING
            </span>
            <p className="font-display text-base font-bold text-ivory-50">
              "{milestone.essentialTrack.title}"
            </p>
            <p className="text-xs text-stone-300 leading-relaxed">
              {milestone.essentialTrack.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
            <Quote className="w-4 h-4 text-amber-400" />
            <p className="font-serif italic text-sm text-ivory-100">
              "{milestone.famousQuote.text}"
            </p>
            <p className="font-mono text-[11px] text-stone-400">
              — {milestone.famousQuote.attribution}
            </p>
          </div>
        </div>

        {/* Accolades & Lineage */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-mono">
            <Award className="w-4 h-4" />
            <span>{milestone.accolades}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-stone-400">
                INFLUENCED BY
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {milestone.influencedBy.map((inf) => (
                  <span
                    key={inf}
                    className="px-2 py-0.5 rounded bg-white/5 text-stone-300"
                  >
                    {inf}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase text-stone-400">
                PAVED THE WAY FOR
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {milestone.pavedWayFor.map((p) => (
                  <span
                    key={p}
                    className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Jump to Adjacent Milestone */}
        <div className="pt-2 flex justify-end">
          {(() => {
            const idx = allMilestones.findIndex((m) => m.id === milestone.id);
            const next = allMilestones[(idx + 1) % allMilestones.length];
            return (
              <button
                type="button"
                onClick={() => onSelectMilestone(next)}
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 hover:text-amber-200"
              >
                <span>
                  Next in Archive: {next.year} — {next.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            );
          })()}
        </div>
      </aside>
    </div>
  );
};
