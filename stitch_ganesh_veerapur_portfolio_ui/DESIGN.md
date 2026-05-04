---
name: Developer Excellence
colors:
  surface: '#141218'
  surface-dim: '#141218'
  surface-bright: '#3b383e'
  surface-container-lowest: '#0f0d13'
  surface-container-low: '#1d1b20'
  surface-container: '#211f24'
  surface-container-high: '#2b292f'
  surface-container-highest: '#36343a'
  on-surface: '#e6e0e9'
  on-surface-variant: '#cbc4d2'
  inverse-surface: '#e6e0e9'
  inverse-on-surface: '#322f35'
  outline: '#948e9c'
  outline-variant: '#494551'
  surface-tint: '#cfbcff'
  primary: '#cfbcff'
  on-primary: '#381e72'
  primary-container: '#6750a4'
  on-primary-container: '#e0d2ff'
  inverse-primary: '#6750a4'
  secondary: '#cdc0e9'
  on-secondary: '#342b4b'
  secondary-container: '#4d4465'
  on-secondary-container: '#bfb2da'
  tertiary: '#e7c365'
  on-tertiary: '#3e2e00'
  tertiary-container: '#c9a74d'
  on-tertiary-container: '#503d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbcff'
  on-primary-fixed: '#22005d'
  on-primary-fixed-variant: '#4f378a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0e9'
  on-secondary-fixed: '#1f1635'
  on-secondary-fixed-variant: '#4b4263'
  tertiary-fixed: '#ffdf93'
  tertiary-fixed-dim: '#e7c365'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#594400'
  background: '#141218'
  on-background: '#e6e0e9'
  surface-variant: '#36343a'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  code:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 0.25rem
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 1.5rem
  container-max: 1200px
---

## Brand & Style

The design system is engineered to project a persona of technical precision, modern sophistication, and editorial clarity. It targets a high-end professional audience—tech recruiters, engineering managers, and potential collaborators—who value both aesthetic polish and functional simplicity.

The visual direction blends **Minimalism** with **Glassmorphism**. It relies on generous whitespace and a restricted color palette to emphasize content, while utilizing frosted textures and subtle gradients to provide depth and a "2025 forward" technical edge. The emotional response is one of calm confidence; the UI feels breathable yet high-performance.

## Colors

This design system utilizes a sophisticated Slate-based neutral palette to ensure high legibility and a premium feel across both light and dark modes. 

- **Primary Action:** A linear gradient from Indigo-600 to Blue-500 is reserved for primary calls-to-action and key brand moments.
- **Accents:** Cyan-400 and Purple-500 are used sparingly for highlights, code syntax, and status indicators.
- **Surface Strategy:** In Dark Mode, surfaces use a layered Slate-900 approach to create a sense of hierarchy against the Slate-950 background. In Light Mode, Gray-50/100 provides soft containment for content blocks.

## Typography

The design system employs **Inter** for its neutral, systematic, and highly readable characteristics. The hierarchy is intentionally dramatic; large display headings create clear entry points for scanning, while body text is optimized for long-form reading with generous line heights.

All headings should use a tighter letter spacing to maintain a "locked-in" professional look. Labels and small captions use a medium weight to ensure they don't disappear against the background.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** grid. Content is centered within a 1200px container, utilizing a 12-column grid system for internal card structures. 

Vertical rhythm is governed by a 4px (0.25rem) base unit. Large sections are separated by `xl` spacing to allow the design to "breathe." Horizontal margins on mobile are set to `sm`, scaling to `md` or `lg` on desktop to maintain a professional, airy feel.

## Elevation & Depth

Visual hierarchy in the design system is achieved through **Glassmorphism** and **Ambient Shadows**. 

1.  **The Glass Layer:** Navigation bars and foreground cards utilize a backdrop blur (12px - 20px) and a semi-transparent surface color (approx. 70% opacity). A 1px subtle border (Slate-200 in light, Slate-800 in dark) defines the edge.
2.  **Shadows:** Shadows are extra-diffused and low-opacity. They should not look like "drops" but rather a soft glow or ambient occlusion around the element.
3.  **Interaction Depth:** Elements should use a "lift" metaphor. On hover, cards transition upwards by 4px-8px, and their shadow spread increases slightly to simulate physical movement toward the user.

## Shapes

The design system uses a "Rounded" shape language to soften the technical nature of the content. 

- **Standard Elements:** Buttons and input fields use a `0.5rem` radius.
- **Containers:** Project cards, modal containers, and section blocks use `1rem` (rounded-2xl) to create a modern, approachable container style.
- **Specialty Shapes:** Decorative elements or avatars may use a full pill/circle shape, but the core UI remains consistent with the 1rem+ logic.

## Components

### Buttons
Primary buttons are high-contrast, utilizing the Indigo-Blue gradient with white text. They should include a subtle inner glow (top border) to feel tactile. Secondary buttons use a ghost style with a subtle border and a semi-transparent fill on hover.

### Cards
Cards are the primary content vessel. They feature a 1px border and the "rounded-2xl" corner radius. On hover, the border color should shift toward the primary brand color, and the shadow should deepen.

### Vertical Timeline/Steppers
Used for experience and education. The line is a subtle Slate-800 (dark) or Gray-200 (light). Active nodes are highlighted with the primary gradient. Text is left-aligned to the right of the vertical axis, ensuring a clean scannable flow.

### Chips/Badges
Small, low-contrast pills used for tech stacks. They use a slight background tint of the accent colors (Cyan/Purple) at 10% opacity to categorize skills without overwhelming the primary visual flow.

### Navigation
A sticky "floating" glass bar at the top of the viewport. It uses a heavy backdrop blur to ensure text remains legible as the user scrolls through content.