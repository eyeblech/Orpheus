import React, { useEffect, useRef } from 'react';
import { MusicMilestone } from '../data/types';
import { VinylArtwork } from './VinylArtwork';
import { soundEngine } from '../audio/soundEngine';
import { ChevronLeft, ChevronRight, Disc3, Volume2, Eye } from 'lucide-react';

interface VinylTunnel3DProps {
  milestones: MusicMilestone[];
  activeIndex: number;
  onSelectIndex: (idx: number) => void;
  onOpenDossier: (milestone: MusicMilestone) => void;
  playingId: string | null;
}

export const VinylTunnel3D: React.FC<VinylTunnel3DProps> = ({
  milestones,
  activeIndex,
  onSelectIndex,
  onOpenDossier,
  playingId,
}) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = 0;
    const animate = () => {
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * 0.1;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * 0.1;
      if (stageRef.current) {
        stageRef.current.style.transform = `rotateY(${currentTilt.current.x.toFixed(
          2
        )}deg) rotateX(${currentTilt.current.y.toFixed(2)}deg)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    targetTilt.current = { x: nx * 6, y: -ny * 4 };
  };

  const handleMouseLeave = () => {
    targetTilt.current = { x: 0, y: 0 };
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={(e) => {
        if (Math.abs(e.deltaY) > 12) {
          if (e.deltaY > 0 && activeIndex < milestones.length - 1) {
            onSelectIndex(activeIndex + 1);
          } else if (e.deltaY < 0 && activeIndex > 0) {
            onSelectIndex(activeIndex - 1);
          }
        }
      }}
      className="relative w-full h-[540px] sm:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-obsidian-950/90 flex items-center justify-center select-none"
      style={{ perspective: '1300px' }}
    >
      {/* Subtle Perspective Corridor Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="w-[75%] h-[75%] rounded-full border border-amber-400/20" />
        <div className="absolute w-[50%] h-[50%] rounded-full border border-amber-400/15" />
        <div className="absolute w-[28%] h-[28%] rounded-full border border-amber-400/10" />
      </div>

      {/* 3D Stage */}
      <div
        ref={stageRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {milestones.map((item, idx) => {
          const offset = idx - activeIndex;
          if (offset < -2 || offset > 5) return null;

          const isActive = offset === 0;
          const isPlaying = playingId === item.id;
          const translateZ = -offset * 235;
          const translateX = offset === 0 ? 0 : (idx % 2 === 0 ? 1 : -1) * (155 + offset * 48);
          const translateY = offset === 0 ? 0 : (idx % 3 === 0 ? -1 : 1) * 28;
          const rotateY = offset === 0 ? 0 : idx % 2 === 0 ? -14 : 14;
          const opacity =
            offset < 0 ? Math.max(0, 0.25 + offset * 0.2) : Math.max(0.15, 1 - offset * 0.17);

          return (
            <div
              key={item.id}
              onClick={() => {
                if (isActive) onOpenDossier(item);
                else onSelectIndex(idx);
              }}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex: 50 - offset,
                willChange: 'transform, opacity',
              }}
              className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                isActive ? 'w-[300px] sm:w-[360px]' : 'w-[220px] sm:w-[250px]'
              }`}
            >
              <div
                className={`rounded-2xl p-4 border transition-colors ${
                  isActive
                    ? 'bg-obsidian-900/95 border-amber-400/70 shadow-2xl'
                    : 'bg-obsidian-900/80 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="relative h-52 sm:h-60 mb-3">
                  <VinylArtwork
                    milestone={item}
                    lightweight3D={!isActive}
                    isPlaying={isPlaying}
                    className="w-full h-full"
                  />
                  <span className="absolute top-2.5 left-2.5 z-20 px-2.5 py-0.5 rounded-full bg-obsidian-950/90 border border-white/15 font-mono text-xs text-amber-300 font-bold">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-ivory-50 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                  {item.artist}
                </p>

                {isActive && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundEngine.playMotif(
                          item.id,
                          item.motifNotes,
                          item.instrumentPreset,
                          item.bpm
                        );
                      }}
                      className={`flex-1 py-2 px-3 rounded-xl font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition ${
                        isPlaying
                          ? 'bg-amber-400 text-obsidian-950 font-bold'
                          : 'bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-obsidian-950 border border-amber-400/40'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                          <span>Playing</span>
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
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenDossier(item);
                      }}
                      className="py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-ivory-100 font-mono text-xs flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Dossier</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-30">
        <div className="px-3.5 py-1.5 rounded-full bg-obsidian-950/85 border border-white/10 font-mono text-xs text-stone-300">
          3D RECORD VAULT • {activeIndex + 1} / {milestones.length} • SCROLL OR CLICK TO FLY
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            type="button"
            disabled={activeIndex === 0}
            onClick={() => onSelectIndex(Math.max(0, activeIndex - 1))}
            className="p-2.5 rounded-full bg-obsidian-900/90 hover:bg-amber-400 hover:text-obsidian-950 text-ivory-100 border border-white/15 disabled:opacity-30 transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            disabled={activeIndex === milestones.length - 1}
            onClick={() =>
              onSelectIndex(Math.min(milestones.length - 1, activeIndex + 1))
            }
            className="p-2.5 rounded-full bg-obsidian-900/90 hover:bg-amber-400 hover:text-obsidian-950 text-ivory-100 border border-white/15 disabled:opacity-30 transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
