---
name: Lumina Tech System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4851'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7882'
  outline-variant: '#bdc8d2'
  surface-tint: '#006492'
  primary: '#006492'
  on-primary: '#ffffff'
  primary-container: '#00b2ff'
  on-primary-container: '#004161'
  inverse-primary: '#8bceff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#895100'
  on-tertiary: '#ffffff'
  tertiary-container: '#ef9206'
  on-tertiary-container: '#5a3400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#8bceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004b6f'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdcbc'
  tertiary-fixed-dim: '#ffb86b'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#683d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  electric-blue: '#00B2FF'
  vibrant-purple: '#8B5CF6'
  soft-pink: '#FFA4FB'
  deep-slate: '#0F172A'
  glass-stroke: rgba(255, 255, 255, 0.4)
typography:
  display-lg:
    fontFamily: Oswald
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Oswald
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The design system is built for a forward-thinking technology consultancy, emphasizing innovation, clarity, and high-performance engineering. It targets enterprise clients and startups looking for cutting-edge digital transformation.

The aesthetic follows a **Modern Corporate Glassmorphism** style. It balances the professional reliability of a traditional tech firm with the vibrant, energetic visual language of the Web3 and AI era. Key characteristics include:
- **Luminosity:** High-contrast accents against pristine white surfaces.
- **Depth:** Multi-layered layouts using blurred translucent panels rather than heavy lines.
- **Precision:** Tight typography and geometric alignment that suggests technical expertise.
- **Breathability:** Excessive whitespace to allow complex technical information to remain digestible.

## Colors

The palette is anchored by "Electric Blue," symbolizing connectivity and intelligence. A secondary "Vibrant Purple" is used to create gradients, adding a sense of modern depth and energy. 

**Color Usage:**
- **Primary:** Action items, active states, and brand-defining icons.
- **Secondary:** Used primarily in linear gradients (45° or 135°) transitioning from Primary to Secondary to create focal points.
- **Backgrounds:** Use `#FFFFFF` for the main canvas. Use `#F8FAFC` for section differentiation and subtle bento-grid backgrounds.
- **Text:** Use `Deep Slate` (#0F172A) for high-contrast body text to maintain accessibility against the bright background.

## Typography

This design system utilizes a high-contrast typographic pairing. **Oswald** provides a bold, condensed, and architectural feel for headlines, while **Inter** ensures maximum readability for functional interface elements and long-form content.

**Key Rules:**
- Headlines should utilize tight tracking (letter spacing) to enhance the "tech" aesthetic.
- Use `display-lg` exclusively for hero sections or major impact statements.
- Body text should maintain a generous line height (1.6) to support the "breathable" brand attribute.
- All-caps styling is reserved for `display`, `headline-lg`, and `labels` to provide a structured, authoritative tone.

## Layout & Spacing

The layout philosophy follows a **Bento-style Grid** model, where content is organized into distinct, rounded containers of varying sizes.

**Grid System:**
- **Desktop:** 12-column fluid grid with 24px gutters and a 1280px max-width container.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

**Rhythm:**
- Use a 120px vertical rhythm between major sections to emphasize the "clean and breathable" nature of the brand.
- Internal component spacing should follow an 8px base unit (8, 16, 24, 32, 48, 64).

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism** and soft, ambient shadows.

- **Surface 0 (Base):** White or Light Gray (#F8FAFC) background.
- **Surface 1 (Floating Cards):** White background with a 15% opacity blur effect and a very subtle 1px border (`glass-stroke`).
- **Surface 2 (Interactive):** Elements that are hovered or active use a "Deep Ambient Shadow": `0 20px 40px rgba(0, 178, 255, 0.08)`.
- **Blur Effect:** Use a standard `backdrop-filter: blur(12px)` for all floating navigation and glass panels to maintain legibility over photography.

## Shapes

The shape language is modern and friendly, using significant rounding to soften the "high-tech" edge.

- **Primary Radius:** 12px for standard cards, inputs, and buttons.
- **Large Radius:** 24px-32px for large section containers or "Bento" blocks.
- **Buttons:** Use `rounded-lg` (16px) or pill-shapes for a more approachable feel.
- **Gradients:** Apply 45-degree linear gradients to primary buttons and iconography to suggest movement and progress.

## Components

### Buttons
- **Primary:** Gradient fill (Electric Blue to Vibrant Purple), white text, 16px radius.
- **Secondary:** Transparent background with an Electric Blue 2px border or "Ghost" style with a glass background.

### Navigation
- **Floating Header:** A "Glassmorphism" bar anchored to the top with 24px margins from the screen edges. It uses a `backdrop-filter` and a subtle 1px white border.

### Bento Cards
- Used for service listings. Each card has a white background, 24px internal padding, and 16px-24px corner radius. Icons within these cards should use the Electric Blue color or gradients.

### Input Fields
- Subtle gray background (#F1F5F9) with a 1px border that glows Electric Blue on focus. Labels should be small, uppercase, and bold Inter.

### Imagery & Overlays
- Use high-resolution tech photography. Apply a 20% opacity Electric Blue gradient overlay to keep photography consistent with the brand palette. Cutout subjects (e.g., people or hardware) should sit on top of subtle geometric blue/purple glow effects.