# Livepeer "What You Can Build" — Stripe-Inspired Bento Section

## Overview

Redesign the homepage use cases section below the hero, inspired by Stripe.com's "Flexible solutions for every business model" bento grid. Replace the current flat 3-card layout with a dynamic, visually rich bento grid that showcases Livepeer's AI video use cases with varied card sizes, interactive mini-UI preview elements inside each card, and clear visual hierarchy.

## Reference: What Makes Stripe's Section Work

Study https://stripe.com — the second section below the hero ("Flexible solutions for every business model"). Key patterns to replicate:

- **Section header**: Small label + large headline + subtitle, all center-aligned
- **Bento grid layout**: Cards are NOT uniform — a large hero card takes more space while others are smaller, creating visual rhythm and hierarchy
- **Cards contain mini UIs**: Each card has a functional-looking preview (billing UI mockup, payment form, code snippet) that communicates the use case instantly — not stock images
- **Subtle interactivity**: Hover states with elevation/glow, some animated elements
- **Typography**: Bold title + 1-line description BELOW the preview area
- **No CTAs inside cards**: The cards themselves are the visual

## Section Header

Label: "USE CASES" (small caps, green accent, tracked out)
Headline: "What you can build"
Subtitle: "Real-time AI video workloads on open, elastic GPU infrastructure."

## Bento Grid Layout (6 cards, asymmetric)

Row 1: [=== AI-Generated Worlds (large, ~60%) ===] [== Live Transcoding (~40%) ==]
Row 2: [== Real-Time Video Analysis (~40%) ==] [=== AI Avatars & Agents (large, ~60%) ===]
Row 3: [=== Synthetic Data Gen (~50%) ===] [=== AI Pipelines (~50%) ===]

The alternating large/small creates a zigzag visual rhythm. Mobile: single-column stack. Tablet: 2-col uniform. Desktop: 5-col grid where hero cards span 3, default cards span 2.

## Card Definitions

Each card has a **preview area** (top, ~65% of card height) with a miniature UI/visualization built entirely in code (CSS/SVG/HTML — no raster images), and a **text area** (bottom) with title + description.

### Card 1: AI-Generated Worlds (HERO CARD — large)

- **Preview**: Dark canvas with HUD overlay. Top-left: green pill badge GENERATING. Top-right: 60 FPS. Bottom: green progress bar + Frame 1,847 · 12ms latency indicator. Terrain visual = CSS gradient mesh with scanline overlay.
- **Title**: "AI-Generated Worlds"
- **Description**: "Interactive environments produced frame-by-frame with real-time inference on live video."
- **Accent color**: Green
- **Optional animation**: Slowly shifting gradient or pulsing scanlines

### Card 2: Live Transcoding & Streaming (default)

- **Preview**: Mini video player UI mockup. Quality selector dropdown showing 1080p 60fps, 720p 30fps, 480p 30fps. Red LIVE dot indicator top-left. Mini bitrate sparkline graph along the bottom.
- **Title**: "Live Transcoding & Streaming"
- **Description**: "Adaptive bitrate transcoding across a global network of GPU operators in real time."
- **Accent color**: Red for live indicator

### Card 3: Real-Time Video Analysis (default)

- **Preview**: Dark video frame with cyan/teal bounding boxes (CSS borders). Labels on boxes: person (x2), vehicle (x1). Top-right overlay: YOLOv8 8ms. Bottom status bar: 2 persons 1 vehicle. Green LIVE indicator top-left.
- **Title**: "Real-Time Video Analysis"
- **Description**: "Computer vision and object detection running as always-on AI pipelines with low latency."
- **Accent color**: Cyan/teal
- **Optional animation**: Subtle bounding box pulse

### Card 4: AI Avatars & Agents (HERO CARD — large)

- **Preview**: Split view with INPUT label (left) and OUTPUT label (right) with an arrow between them. Input side: wireframe face mesh made of SVG dots/lines. Output side: stylized avatar with a soft glow. Bottom: Style: Anime 22ms in monospace.
- **Title**: "AI Avatars & Agents"
- **Description**: "Motion capture and style transfer powering persistent digital identities in real time."
- **Accent color**: Purple/violet for the avatar glow

### Card 5: Synthetic Data Generation (default)

- **Preview**: 2x2 grid of small generated thumbnail placeholders (CSS gradient squares) with monospace labels like batch_0042. Progress counter: 2,847 / 10,000 frames. Mini stats readout: GPU: 94% Queue: 12.
- **Title**: "Synthetic Data Generation"
- **Description**: "Generate labeled training datasets for robotics, autonomous vehicles, and simulation at scale."
- **Accent color**: Amber/yellow

### Card 6: Composable AI Pipelines (default)

- **Preview**: Horizontal node-graph/flow diagram with nodes: Ingest, Segment, Model, Compose, Output. Each node is a small rounded rectangle connected by lines/arrows. The Model node glows green to show it is the active processing step.
- **Title**: "Composable AI Pipelines"
- **Description**: "Chain models, filters, and processing steps into programmable video workflows."
- **Accent color**: Green glow on active node, gray connecting lines
- **Optional animation**: Processing pulse moving along the pipeline nodes

## Design Principles

1. **Cards are mini products, not marketing images.** Each preview should look like a real UI — monospace fonts, status indicators, data readouts, progress bars. No stock photos or abstract blobs.
2. **Visual hierarchy through size variation.** The bento layout makes 2 cards feel primary (hero) and 4 secondary. The zigzag large/small pattern creates dynamic visual flow.
3. **Consistent but distinct.** All cards share the same shell (rounded corners, dark bg, padding) but each preview has its own accent color and visual language.
4. **Dark-mode native.** Subtle borders and shadows, not heavy dividers. Content floats on near-black.
5. **Performance first.** All previews built in CSS/SVG — no raster images. Fast loading and crisp at any resolution.

## Build Order

1. Section shell — header text + grid layout with placeholder cards
2. Shared card component — container with preview slot + text area
3. Preview components one at a time, simplest first: AI Pipelines (rectangles + lines) then Video Analysis (bounding boxes) then Live Transcoding (player UI) then Synthetic Data (thumbnail grid) then AI Avatars (split view) then AI Generated Worlds (gradient terrain + HUD)
4. Scroll reveal animations + hover states
5. Subtle ambient animations in 2-3 cards max
6. Responsive polish at all breakpoints
7. Final pass — spacing, typography, color consistency

## Key Differences: Current vs New

| Current Design                    | New (Stripe-Inspired)                        |
| --------------------------------- | -------------------------------------------- |
| 3 equal-width cards in a row      | 6 cards in asymmetric bento grid             |
| Static screenshot images in cards | Interactive mini-UI previews built in code   |
| Flat, uniform layout              | Visual hierarchy with hero + secondary cards |
| No hover interaction              | Hover elevation + accent glow effects        |
| No scroll animation               | Staggered fade-up on scroll                  |
| Raster image dependent            | CSS/SVG previews (resolution-independent)    |
| Same visual weight per card       | Zigzag large/small pattern draws the eye     |

```

---

Save that as `use-cases-section.md` in your project, then in Claude Code just run:
```

Read use-cases-section.md and implement the use cases bento section described in it.
