'use client';

import React from 'react';
import { AnimatedArt } from './AnimatedArt';
import { BANNER_DRAW, type BannerArtKind } from './banner/arts';

export type { BannerArtKind };

/**
 * Service-page banner artwork: drawn procedurally so it stays sharp (shared style in banner/kit.ts),
 * with subtle motion layered on top (see AnimatedArt).
 */
export const BannerArt: React.FC<{ art: BannerArtKind; className?: string }> = ({ art, className }) => (
  <AnimatedArt draw={BANNER_DRAW[art]} className={className} />
);
