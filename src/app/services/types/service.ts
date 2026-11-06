import type { ServiceVisualKind } from '@/app/_home/components/ServiceVisuals';

export interface ServiceDetail {
  /** URL segment: /services/[slug]. */
  slug: string;
  title: string;
  /** Approved one-line positioning, where the source content provides one. */
  tagline?: string;
  /** Short card copy for the /services grid (2–3 lines). */
  summary: string;
  /** "About the service" paragraphs, where content exists. */
  overview?: string[];
  /** Illustration shown on the card (and on the detail hero when there is no photo). */
  visual: ServiceVisualKind;
  /** Card accent colour, from the homepage service palette. */
  accent: string;
  /** Approved banner photo; focusX (0–1) is the subject's horizontal position. */
  image?: { src: string; focusX: number };
  keyCapabilities?: string[];
  problemsSolved?: string[];
  deliverables?: string[];
  approach?: string;
  technologies?: string[];
  /** Slugs of related services. */
  related: string[];
}
