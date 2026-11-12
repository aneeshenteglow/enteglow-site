/**
 * Animation hints recorded while a banner is drawn (positions in the artwork's 400 × 320 local
 * space). The overlay layer uses them to add cheap motion without redrawing the artwork.
 */
export interface Scene {
  /** Local → CSS-pixel mapping: x_css = ox + x * s. */
  s: number;
  ox: number;
  oy: number;
  /** Wires from a point on the hero object (a) to an outer node (b). */
  wires: { ax: number; ay: number; bx: number; by: number; cool: boolean }[];
  nodes: { x: number; y: number; r: number; cool: boolean }[];
  /** Bright points on the hero object that gently twinkle. */
  twinkles: { x: number; y: number; cool: boolean }[];
}
