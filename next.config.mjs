import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/**
 * `next dev` and `next build` get separate output folders. When they shared `.next`, every
 * `npm run build` (run by the agent workflow after each edit) wiped the running dev server's
 * CSS/JS chunks and the site rendered unstyled until the dev server was restarted.
 *
 * @param {string} phase
 * @returns {import('next').NextConfig}
 */
const nextConfig = (phase) => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});

export default nextConfig;
