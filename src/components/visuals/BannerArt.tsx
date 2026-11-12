'use client';

import React from 'react';
import { CanvasArt } from './CanvasArt';
import { BANNER_DRAW, type BannerArtKind } from './banner/arts';

export type { BannerArtKind };

/** Service-page banner artwork, drawn procedurally so it stays sharp (see banner/kit.ts for the shared style). */
export const BannerArt: React.FC<{ art: BannerArtKind; className?: string }> = ({ art, className }) => (
  <CanvasArt draw={BANNER_DRAW[art]} className={className} />
);
