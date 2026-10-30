import React, { useState } from 'react';
import { MusicIcon, MusicMilestone } from '../data/types';
import { soundEngine } from '../audio/soundEngine';
import { Disc3, Volume2, Sparkles, Quote } from 'lucide-react';

interface IconsSectionProps {
  icons: MusicIcon[];
  milestones: MusicMilestone[];
  playingId: string | null;
  onSelectMilestone: (m: MusicMilestone) => void;
}

export const IconsSection: React.FC<IconsSectionProps> = ({
  icons,
  milestones,
  playingId,
  onSelectMilestone,
}) => {
  const [roleFilter, setRoleFilter] = useState<string>('ALL');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredIcons = icons.filter((ic) => {
    if (roleFilter === 'ALL') return true;
    if (roleFilter === 'CULT') return Boolean(ic.isCultIcon);
    return ic.role === roleFilter;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header & Role Filter */}
      <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400">
            PANTHEON OF SOUND ({icons.length} VISIONARIES)
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-ivory-50">
            Composers, Sonic Architects, Cult Pioneers & Virtuosos
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: 'ALL', label: `All (${icons.length})` },
            { id: 'Composer & Conductor', label: 'Composers' },
            { id: 'Producer & Sonic Architect', label: 'Producers' },
            { id: 'CULT', label: 'Cult & Underground' },
            { id: 'Vocalist & Virtuoso', label: 'Virtuosos & Vocalists' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setRoleFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition ${
                roleFilter === tab.id
                  ? 'bg-amber-400 text-obsidian-950 font-bold'
                  : 'bg-white/5 hover:bg-white/15 text-stone-300 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredIcons.map((icon) => {
          const [c1, c2] = icon.palette;
          const primaryWorkWithMilestone = icon.essentialWorks.find(
            (w) => w.milestoneId
          );
          const linkedMilestone = primaryWorkWithMilestone?.milestoneId
            ? milestones.find(
                (m) => m.id === primaryWorkWithMilestone.milestoneId
              )
            : undefined;
          const isPlaying = linkedMilestone
            ? playingId === linkedMilestone.id
            : false;

          return (
            <article
              key={icon.id}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/25 transition flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Top Identity Row */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-white/20 flex items-center justify-center font-display text-xl font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${c1}, ${c2})`,
                    }}
                  >
                    {icon.photoUrl && !imgErrors[icon.id] ? (
                      <img
                        src={icon.photoUrl}
                        alt={icon.name}
                        loading="lazy"
                        onError={() =>
                          setImgErrors((p) => ({ ...p, [icon.id]: true }))
                        }
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>
                        {icon.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-amber-300">
                        {icon.yearsActive}
                      </span>
                      {icon.isCultIcon && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30">
                          Cult
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-ivory-50">
                      {icon.name}
                    </h3>
                    <p className="text-xs font-mono text-stone-400">
                      {icon.titleBadge} • {icon.nationality}
                    </p>
                  </div>
                </div>

                {/* Signature Sound */}
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    SIGNATURE SONIC STAMP
                  </span>
                  <p className="text-xs text-ivory-100 mt-1">
                    {icon.signatureSound}
                  </p>
                </div>

                <p className="font-serif text-sm text-stone-300 leading-relaxed">
                  {icon.biography}
                </p>

                {/* Quote */}
                <div className="flex items-start gap-2 text-xs italic font-serif text-stone-300 border-l-2 border-amber-400/50 pl-3">
                  <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>"{icon.quote}"</span>
                </div>
              </div>

              {/* Essential Works + Playable Link */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400">
                    ESSENTIAL WORKS
                  </span>
                  {icon.essentialWorks.map((ew, i) => {
                    const m = ew.milestoneId
                      ? milestones.find((item) => item.id === ew.milestoneId)
                      : undefined;
                    return (
                      <div
                        key={i}
                        onClick={() => m && onSelectMilestone(m)}
                        className={`p-2 rounded-lg bg-obsidian-900/70 border border-white/10 flex items-center justify-between text-xs ${
                          m ? 'cursor-pointer hover:border-amber-400/50' : ''
                        }`}
                      >
                        <div>
                          <span className="font-bold text-ivory-50">
                            {ew.title} ({ew.year})
                          </span>
                          <p className="text-[11px] text-stone-400">{ew.note}</p>
                        </div>
                        {m && (
                          <span className="font-mono text-[10px] text-amber-400 px-2 py-0.5 rounded bg-amber-400/10">
                            Open
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {linkedMilestone && (
                  <button
                    type="button"
                    onClick={() =>
                      soundEngine.playMotif(
                        linkedMilestone.id,
                        linkedMilestone.motifNotes,
                        linkedMilestone.instrumentPreset,
                        linkedMilestone.bpm
                      )
                    }
                    className={`w-full py-2 px-3 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition ${
                      isPlaying
                        ? 'bg-amber-400 text-obsidian-950 font-bold'
                        : 'bg-white/10 hover:bg-amber-400 hover:text-obsidian-950 text-ivory-100'
                    }`}
                  >
                    {isPlaying ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        <span>Playing {linkedMilestone.title}</span>
                      </>
                    ) : (
                      <>
                        <Disc3 className="w-3.5 h-3.5" />
                        <span>Hear Motif: {linkedMilestone.title}</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
