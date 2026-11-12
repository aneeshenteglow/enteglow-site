'use client';

import React, { useEffect, useRef } from 'react';
import type { Scene } from './scene';

export type DrawFn = (ctx: CanvasRenderingContext2D, width: number, height: number, dpr: number) => Scene | void;

interface CanvasArtProps {
  /** Must be a stable reference (module-level function). Coordinates are CSS pixels. */
  draw: DrawFn;
  className?: string;
}

/**
 * Renders procedural artwork onto a canvas sized to its box at the device pixel ratio, so lines and
 * glows stay crisp on any screen. Redraws (once per frame) when the box is resized.
 */
export const CanvasArt: React.FC<CanvasArtProps> = ({ draw, className }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    let frame = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      draw(ctx, w, h, dpr);
    };
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    });
    observer.observe(canvas);
    render();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [draw]);

  return <canvas ref={ref} aria-hidden className={className} />;
};
