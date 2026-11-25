import type { BannerArtKind } from '@/components/visuals/BannerArt';
import type { ServiceVisualKind } from '@/app/_home/components/ServiceVisuals';

export interface ServiceDetail {
  /** URL segment: /services/[slug]. */
  slug: string;
  title: string;
  /** Approved one-line positioning, where the source content provides one. */
  tagline?: string;
  /** Short card copy for the /services grid (2–3 lines). */
  summary: string;
  /** Card-only copy for the /services grid, where it must differ from `summary` (used by the detail page). */
  cardSummary?: string;
  /** "About the service" paragraphs, where content exists. */
  overview?: string[];
  /** Illustration shown on the card (and on the detail hero when there is no photo). */
  visual: ServiceVisualKind;
  /** Card accent colour, from the homepage service palette. */
  accent: string;
  /** Approved banner photo; focusX (0–1) is the subject's horizontal position. */
  image?: { src: string; focusX: number };
  /** Hero intro line, where the page's header differs from the short card summary. */
  heroIntro?: string;
  /** Full-width banner header (replaces the side illustration); the artwork is drawn on a canvas. */
  banner?: { art: BannerArtKind; ctaLabel: string };
  /** Replaces the "About the Service" heading. */
  overviewTitle?: string;
  /** Replaces the heading above `sections` (default: "Why It Matters" / "How We Help"). */
  sectionsHeading?: { eyebrow: string; title: string };
  /** Numbered list shown directly under the overview paragraph (no separate section heading). */
  overviewList?: string[];
  /** The service's numbered list from the content document. */
  keyCapabilities?: string[];
  /** Titled copy blocks from the content document (heading + one or more paragraphs). */
  sections?: { title: string; body: string[] }[];
  problemsSolved?: string[];
  deliverables?: string[];
  approach?: string;
  technologies?: string[];
  /** Slugs of related services. */
  related: string[];
}
