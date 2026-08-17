---
name: Crimson Precision
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393B'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201F21'
  surface-container-high: '#2A2A2C'
  surface-container-highest: '#353437'
  on-surface: '#E5E1E4'
  on-surface-variant: '#e7bdb8'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#303032'
  outline: '#ae8883'
  outline-variant: '#5d3f3c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690006'
  primary-container: '#e31e24'
  on-primary-container: '#fffafa'
  inverse-primary: '#c00014'
  secondary: '#ffb3ac'
  on-secondary: '#680008'
  secondary-container: '#911719'
  on-secondary-container: '#ff9e96'
  tertiary: '#8ecdff'
  on-tertiary: '#00344f'
  tertiary-container: '#007bb5'
  on-tertiary-container: '#fbfcff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ac'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#8d1417'
  tertiary-fixed: '#cbe6ff'
  tertiary-fixed-dim: '#8ecdff'
  on-tertiary-fixed: '#001e30'
  on-tertiary-fixed-variant: '#004b71'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  accent-glow: rgba(227, 30, 36, 0.12)
  technical-outline: rgba(255, 255, 255, 0.1)
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Oswald
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-sm: 16px
  margin-lg: 48px
  section-padding: 80px
  container-max: 1440px
---

## Brand & Style

The brand personality is authoritative, sophisticated, and engineering-driven, tailored for enterprise-level decision-makers and technical directors. This design system departs from common "gamer" red aesthetics, instead embracing a **Corporate Minimalist-Techno** style that prioritizes legibility, structural integrity, and industrial quality.

The emotional response should be one of "command and control"—evoking the feeling of high-end automotive engineering or aerospace instrumentation. The visual language relies on a deep charcoal foundation, accented by a mature, professional red that signals importance without aggression. The style is characterized by thin, technical borders, subtle light-emission (glows), and high-density information layouts.

## Colors

The palette is centered on a high-contrast relationship between a deep charcoal "Obsidian" background and a sophisticated "Command Red."

- **Primary Red (#E31E24):** A strong, professional red used for primary calls to action, critical status indicators, and branding. It is calibrated for maximum visibility against dark neutrals.
- **Secondary Red (#8B1216):** A deeper, blood-red used for low-opacity backgrounds, hover states, and to provide depth in gradients.
- **Surface Strategy:** The system uses a hierarchy of dark neutrals. The background stays fixed at `#131315`, while elevated components use progressively lighter shades (e.g., `#201F21`) to simulate physical layers.
- **Accents:** Red is used sparingly as a "technical glow" rather than a fill color to maintain the professional, understated aesthetic.

## Typography

This design system utilizes a high-contrast pairing of **Oswald** and **Inter** to balance industrial character with technical legibility.

- **Oswald** is the display typeface, reserved for headlines and primary data points. Its condensed, geometric structure evokes blueprints and precision machinery. It should always be used in White or Off-white (`#E5E1E4`) to maintain peak contrast.
- **Inter** provides a clean, neutral balance for body copy, documentation, and UI labels. It ensures that complex information remains readable against dark backgrounds.
- **Formatting:** UI labels and secondary headers often utilize `uppercase` with tracking set between 0.05em and 0.1em to reinforce the "engineered" feel.

## Layout & Spacing

The design system employs a **Fixed Grid** philosophy for desktop layouts (centered, max-width 1440px) and a fluid, single-column approach for mobile. 

- **Grid:** A 12-column grid is used for desktop with 24px gutters. Content should align to the grid to maintain a structured, "blueprinted" appearance.
- **Rhythm:** All spacing (padding, margins, component heights) must be multiples of the 4px base unit. 
- **Responsive Behavior:** At the 768px (Tablet) breakpoint, section padding reduces by 40%. At the 480px (Mobile) breakpoint, margins are fixed at 16px and all grid elements stack vertically.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Technical Glows** rather than traditional drop shadows.

- **Surface Tiers:** Background elements are at the lowest level (`#131315`). Floating cards and modals are elevated using the `surface-container` (`#201F21`) color with a 1px `technical-outline`.
- **The Glow:** Active states or high-priority elements use a subtle outer glow: `box-shadow: 0 0 15px rgba(227, 30, 36, 0.12)`. This creates a sense of "powered-on" hardware.
- **Borders:** Depth is reinforced by thin (1px), low-opacity borders. This defines edges clearly without adding visual weight.

## Shapes

The shape language is **Soft-Technical**. We avoid perfectly sharp corners to ensure the UI feels modern and premium, but keep the radii tight to maintain an "industrial" edge.

- **Standard Radius:** 4px (`0.25rem`) is the default for most buttons, inputs, and small containers.
- **Component Large:** Cards and larger panels use 8px (`0.5rem`) to provide a subtle distinction from the background.
- **Technical Accents:** Pill shapes are reserved exclusively for status indicators and small informational badges.

## Components

- **Primary Buttons:** Solid Command Red (`#E31E24`) background with white text. They feature a sharp 4px radius and a subtle red glow on hover.
- **Technical Inputs:** Backgrounds should be `surface-container-high` with a 1px `technical-outline`. On focus, the border transitions to Primary Red with a subtle inner glow.
- **Engineering Cards:** Dark surfaces (`#201F21`) with a 1px border. They utilize the "Glow Hover" effect, where the border opacity increases and a faint red ambient shadow appears.
- **Chips & Badges:** Small, semi-transparent red backgrounds (10-15% opacity) with Primary Red text. These are used for technical categorization and status.
- **Lists:** High-density lists with 1px dividers in `technical-outline` color. Each list item should have a subtle hover highlight using a 5% white overlay.
- **Icons:** Use linear, technical icon sets (e.g., Material Symbols Outlined). Default icon color is `#E5E1E4`, switching to Primary Red only for interactive or "Alert" states.