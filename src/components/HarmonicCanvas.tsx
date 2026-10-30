import React, { useEffect, useRef } from 'react';
import { soundEngine } from '../audio/soundEngine';

interface HarmonicCanvasProps {
  accentColor: string;
  secondaryGlow: string;
  isPlaying?: boolean;
}

export const HarmonicCanvas: React.FC<HarmonicCanvasProps> = ({
  accentColor,
  secondaryGlow,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let phase = 0;
    const waveBuffer = new Uint8Array(new ArrayBuffer(256));

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const render = () => {
      phase += 0.015;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Ambient radial studio glow
      const grad = ctx.createRadialGradient(
        width * 0.65,
        height * 0.36,
        30,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.78
      );
      grad.addColorStop(0, `${accentColor}19`);
      grad.addColorStop(0.45, `${secondaryGlow}0e`);
      grad.addColorStop(1, 'rgba(7, 7, 12, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle 5-line musical staff across the background
      ctx.strokeStyle = 'rgba(245, 242, 235, 0.035)';
      ctx.lineWidth = 1;
      const staffCenter = height * 0.48;
      for (let i = -2; i <= 2; i++) {
        const y = staffCenter + i * 22;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Check real-time audio waveform energy
      const hasAudio = soundEngine.getWaveformData(waveBuffer);
      let maxDeviation = 0;
      if (hasAudio) {
        for (let i = 0; i < waveBuffer.length; i++) {
          const dev = Math.abs(waveBuffer[i] - 128);
          if (dev > maxDeviation) maxDeviation = dev;
        }
      }

      // Draw live oscilloscope or gentle harmonic standing waves
      ctx.beginPath();
      ctx.strokeStyle = maxDeviation > 3 ? `${accentColor}88` : `${accentColor}26`;
      ctx.lineWidth = maxDeviation > 3 ? 2.2 : 1.2;

      const sliceWidth = width / (waveBuffer.length - 1);
      for (let i = 0; i < waveBuffer.length; i++) {
        const x = i * sliceWidth;
        let y = staffCenter;
        if (maxDeviation > 3) {
          const v = (waveBuffer[i] - 128) / 128;
          y = staffCenter + v * (height * 0.22);
        } else {
          y =
            staffCenter +
            Math.sin(i * 0.045 + phase) * 18 +
            Math.cos(i * 0.02 - phase * 0.7) * 12;
        }
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [accentColor, secondaryGlow]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
