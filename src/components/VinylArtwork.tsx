import React, { useState } from 'react';
import { MusicMilestone } from '../data/types';
import { Volume2, Disc3 } from 'lucide-react';

interface VinylArtworkProps {
  milestone: MusicMilestone;
  isPlaying?: boolean;
  onPlayToggle?: (e: React.MouseEvent) => void;
  size?: 'sm' | 'md' | 'lg';
  lightweight3D?: boolean;
  className?: string;
}

export const VinylArtwork: React.FC<VinylArtworkProps> = ({
  milestone,
  isPlaying = false,
  onPlayToggle,
  size = 'md',
  lightweight3D = false,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const [c1, c2, c3] = milestone.colorPalette;

  if (lightweight3D) {
    return (
      <div
        className={`relative overflow-hidden rounded-lg border border-white/20 select-none ${className}`}
        style={{
          background: `linear-gradient(135deg, ${c1} 0%, ${c3} 100%)`,
        }}
      >
        {milestone.coverUrl && !imgError ? (
          <img
            src={milestone.coverUrl}
            alt={milestone.title}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover opacity-90"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/80">
              {milestone.year} // {milestone.catalogCode}
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white leading-tight line-clamp-2">
                {milestone.title}
              </p>
              <p className="text-xs text-white/75 mt-1">{milestone.artist}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative group select-none ${className}`}>
      {/* Spinning Vinyl Disc peeking from the right side of the sleeve */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 rounded-full vinyl-grooves shadow-2xl border border-white/20 transition-all duration-500 flex items-center justify-center pointer-events-none ${
          size === 'lg'
            ? 'w-[88%] h-[88%] -right-8 group-hover:-right-12'
            : size === 'md'
            ? 'w-[84%] h-[84%] -right-5 group-hover:-right-8'
            : 'w-[80%] h-[80%] -right-3'
        } ${isPlaying ? '!right-[-18%] animate-sleeve-vinyl-spin' : ''}`}
      >
        <div
          className="w-[34%] h-[34%] rounded-full border-2 border-black/70 flex items-center justify-center shadow-inner"
          style={{
            background: `radial-gradient(circle, ${c1}, ${c2})`,
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-obsidian-950 border border-white/40" />
        </div>
      </div>

      {/* Main Album Sleeve with Blue Note / ECM Technical Top Strip */}
      <div
        className="relative z-10 w-full h-full rounded-lg overflow-hidden border border-white/20 shadow-2xl bg-obsidian-900 flex flex-col"
        style={{
          background: `linear-gradient(145deg, ${c3} 0%, #101218 65%, ${c1}44 100%)`,
        }}
      >
        {/* Top Archival Obi / Telemetry Strip */}
        <div className="px-2.5 py-1 bg-[#14161c]/95 border-b border-white/15 flex items-center justify-between font-mono text-[9px] tracking-widest uppercase text-stone-300 z-20 shrink-0">
          <span className="text-[#ff4d1c] font-bold">{milestone.catalogCode}</span>
          <span>
            {milestone.year} • {milestone.bpm} BPM
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          {milestone.coverUrl && !imgError ? (
            <img
              src={milestone.coverUrl}
              alt={`${milestone.title} — ${milestone.artist}`}
              loading="lazy"
              decoding="async"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full p-4 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full opacity-35 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${c1}, transparent 70%)`,
                }}
              />
              <div className="my-auto z-10">
                <div
                  className="w-8 h-1 mb-2"
                  style={{ backgroundColor: c1 }}
                />
                <h4 className="font-display text-base sm:text-lg font-bold text-white leading-snug line-clamp-3">
                  {milestone.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 font-medium">
                  {milestone.artist}
                </p>
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-stone-400 border-t border-white/10 pt-1.5 z-10">
                <span>{milestone.keySignature}</span>
                <span className="uppercase">{milestone.instrumentPreset}</span>
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {onPlayToggle && (
            <button
              type="button"
              onClick={onPlayToggle}
              title={isPlaying ? 'Stop Motif' : `Play Motif: ${milestone.title}`}
              className={`absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded font-mono text-[10px] uppercase tracking-wider transition-all shadow-lg ${
                isPlaying
                  ? 'bg-[#ff4d1c] text-white font-bold scale-105'
                  : 'bg-[#14161d]/90 hover:bg-[#ff4d1c] text-white border border-white/25'
              }`}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>SPINNING</span>
                </>
              ) : (
                <>
                  <Disc3 className="w-3.5 h-3.5" />
                  <span>AUDITION</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
