import React from 'react';
import {
  MusicMovement,
  LiveConcertMoment,
  MusicMilestone,
} from '../data/types';
import { soundEngine } from '../audio/soundEngine';
import {
  Disc3,
  Volume2,
  Flame,
  MapPin,
  Users,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface MovementsAndConcertsSectionProps {
  mode: 'movements' | 'concerts';
  movements: MusicMovement[];
  concerts: LiveConcertMoment[];
  milestones: MusicMilestone[];
  playingId: string | null;
  onSelectMilestone: (m: MusicMilestone) => void;
}

export const MovementsAndConcertsSection: React.FC<
  MovementsAndConcertsSectionProps
> = ({
  mode,
  movements,
  concerts,
  milestones,
  playingId,
  onSelectMilestone,
}) => {
  if (mode === 'movements') {
    return (
      <div className="space-y-8 pb-12">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400">
              GLOBAL SONIC REVOLUTIONS • PLAYABLE MANIFESTOS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ivory-50">
              Underground & Avant-Garde Music Movements
            </h2>
            <p className="text-sm text-stone-300 max-w-3xl">
              From Düsseldorf’s hypnotic Motorik pulse and Kingston’s Black Ark
              dub chambers to Tokyo’s Ambient Kankyō Ongaku and London’s
              wall-of-noise Shoegaze—audition each movement’s signature sonic
              pattern directly in your browser.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {movements.map((mov) => {
            const playKey = `mov-${mov.id}`;
            const isPlaying = playingId === playKey;

            return (
              <article
                key={mov.id}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/25 transition flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className="font-mono text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${mov.accentColor}22`,
                        color: mov.accentColor,
                        border: `1px solid ${mov.accentColor}55`,
                      }}
                    >
                      {mov.years} • {mov.origin}
                    </span>
                    <span className="font-mono text-xs text-stone-400">
                      {mov.bpmRange}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ivory-50">
                    {mov.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-amber-300">
                    {mov.subtitle}
                  </p>
                  <p className="font-serif text-sm sm:text-base text-stone-200 leading-relaxed">
                    {mov.manifesto}
                  </p>

                  {/* Sonic Hallmarks */}
                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                      SONIC HALLMARKS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mov.hallmarks.map((h, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-ivory-100"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Playable Demo & Signature Works */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs text-stone-400">
                      <span className="font-mono text-[10px] uppercase text-stone-400 block">
                        KEY ARCHITECTS
                      </span>
                      <span className="text-ivory-100 font-medium">
                        {mov.keyFigures.join(' • ')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        soundEngine.playMotif(
                          playKey,
                          mov.demoMotif,
                          mov.instrumentPreset,
                          mov.demoBpm
                        )
                      }
                      className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-lg ${
                        isPlaying
                          ? 'bg-amber-400 text-obsidian-950 font-bold'
                          : 'bg-amber-400/15 hover:bg-amber-400 text-amber-300 hover:text-obsidian-950 border border-amber-400/40'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="w-4 h-4 animate-pulse" />
                          <span>Playing Demo</span>
                        </>
                      ) : (
                        <>
                          <Disc3 className="w-4 h-4" />
                          <span>Audition Movement ({mov.demoBpm} BPM)</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mov.signatureWorks.map((sw) => {
                      const linked = milestones.find((m) => m.id === sw.id);
                      return (
                        <button
                          key={sw.id}
                          type="button"
                          onClick={() => linked && onSelectMilestone(linked)}
                          className="p-2.5 rounded-xl bg-obsidian-900/80 hover:bg-white/10 border border-white/10 text-left flex items-center justify-between transition"
                        >
                          <div>
                            <p className="font-display text-xs font-bold text-ivory-50 line-clamp-1">
                              {sw.title} ({sw.year})
                            </p>
                            <p className="text-[11px] text-stone-400">
                              {sw.artist}
                            </p>
                          </div>
                          {linked && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  // Live Concerts & Riots Mode
  return (
    <div className="space-y-8 pb-12">
      <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-1">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-400">
          NIGHTS THAT SHOOK CULTURE • 1913–2006
        </span>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-ivory-50">
          Legendary Live Concerts, Riots & Sonic Shockwaves
        </h2>
        <p className="text-sm text-stone-300 max-w-3xl">
          From fistfights in the aisles at the 1913 Paris premiere of{' '}
          <em>The Rite of Spring</em> and Bob Dylan plugging in his Fender
          Stratocaster in 1965 to Woodstock, Fela Kuti’s Afrika Shrine, and Daft
          Punk’s 2006 Coachella pyramid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concerts.map((c) => {
          const linked = c.linkedMilestoneId
            ? milestones.find((m) => m.id === c.linkedMilestoneId)
            : undefined;
          const isPlaying = linked ? playingId === linked.id : false;

          return (
            <article
              key={c.id}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/25 transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${c.accentColor}22`,
                      color: c.accentColor,
                      border: `1px solid ${c.accentColor}55`,
                    }}
                  >
                    {c.year} • {c.badge}
                  </span>
                  <Flame
                    className="w-4 h-4"
                    style={{ color: c.accentColor }}
                  />
                </div>

                <h3 className="font-display text-xl font-bold text-ivory-50 leading-snug">
                  {c.title}
                </h3>
                <p className="text-sm font-medium text-amber-300">{c.artist}</p>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {c.venueAndCity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    {c.crowdSize}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-amber-400 mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>THE FLASHPOINT</span>
                  </div>
                  <p className="text-xs text-ivory-100 font-medium">
                    {c.shockOrTriumph}
                  </p>
                </div>

                <p className="font-serif text-sm text-stone-300 leading-relaxed">
                  {c.story}
                </p>
              </div>

              {linked && (
                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      soundEngine.playMotif(
                        linked.id,
                        linked.motifNotes,
                        linked.instrumentPreset,
                        linked.bpm
                      )
                    }
                    className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs flex items-center justify-center gap-1.5 transition ${
                      isPlaying
                        ? 'bg-amber-400 text-obsidian-950 font-bold'
                        : 'bg-white/10 hover:bg-amber-400 hover:text-obsidian-950 text-ivory-100'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        <span>Playing Motif</span>
                      </>
                    ) : (
                      <>
                        <Disc3 className="w-3.5 h-3.5" />
                        <span>Play Motif</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectMilestone(linked)}
                    className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-mono text-amber-300 border border-white/10"
                  >
                    Dossier
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
