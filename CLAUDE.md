# CLAUDE.md

**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion 11. Package manager: npm. No test framework.

**Environment variables** (set in Vercel / `.env.local`):
- `RESEND_API_KEY` — Resend email service (early access signups)
- `RESEND_AUDIENCE_ID` — Resend audience/contact list
- `THEGRAPH_API_KEY` — optional; authenticated subgraph requests for live protocol stats (falls back to hardcoded values)

## Commands

- `npm run dev` — start Next.js dev server on localhost:3000
- `npm run build` — production build (use to verify changes compile)
- `npm run start` — start production server (requires prior build)
- `npm run lint` — run ESLint

## Project Structure

### `app/`

- **Routes**: home (`/`), blog, blog/[slug], primer, foundation, brand
- **Redirects**: developers, lpt, community → `/` via `redirect()`; use-cases/world-models → `/`
- **API routes**: `api/early-access` — POST endpoint that creates contacts in a Resend audience
- **Use cases**: `use-cases/` has 7 sub-routes — all currently redirect to home. No `/use-cases` index page.
- **Layout**: `layout.tsx` wraps all pages with Header + Footer. Global metadata and font classes defined here.
- **SEO**: OG images generated via `next/og` at root and `/blog` levels. Primer and blog pages have per-page metadata.
- **Styling**: `globals.css` — Tailwind v4 `@theme` block, utility classes, keyframe animations.

### `components/`

- **`home/`** — self-contained homepage sections. Render order in `app/page.tsx`: Hero, Capabilities, WhatIsLivepeer, WhyLivepeer, BuiltOnLivepeer, NetworkStats, DeveloperCTA, CommunityCTA. (`NetworkParticipants.tsx` exists but is not currently rendered.)
- **`layout/`** — Header, Footer. Header has headroom behavior on `/primer` (hides on scroll down, reveals on scroll up).
- **`ui/`** — shared primitives (Button, Card, Container, SectionHeader, Badge, ImageMask, GlowOverlay, EarlyAccessCTA, etc.). Reuse these; don't create new wrappers for the same purpose. Also contains canvas components: `GenerativeCanvas.tsx` (GLSL shader), `LiveNetwork.tsx` (Canvas 2D particle trails), `AiVideoHero.tsx` (Sobel edge detection on video texture). All canvas components follow `useEffect` + `useRef<HTMLCanvasElement>` + `requestAnimationFrame` + cleanup.
- **`blog/`** — blog listing page (`BlogListingClient`, `BlogCategoryFilter`, `BlogPostCard`) and post detail (`BlogPostHeader`, `BlogPostContent`).
- **`primer/`** — 10-chapter educational primer with chapter navigation, scroll-based background color transitions, and live protocol stats from subgraph. Primer uses a light theme override. Components: `PrimerContent`, `InflationMeter`, `MintingDiagram`.
- **`icons/`** — `LivepeerLogo.tsx` exports `LivepeerSymbol` (icon), `LivepeerWordmark` (text), `LivepeerLockup` (icon + text).

### `lib/`

- `constants.ts` — `NAV_ITEMS` and `EXTERNAL_LINKS`
- `fonts.ts` — Favorit Pro and Favorit Mono config via `next/font/local`
- `useCountUp.ts` — IntersectionObserver-triggered count-up animation hook
- `blog.ts` — blog content loading, markdown→HTML pipeline (gray-matter + unified/remark/rehype), reading time calculation
- `subgraph.ts` — fetches live protocol stats (inflation, participation, supply) from The Graph Livepeer subgraph with hardcoded fallbacks

### `public/`

- `images/` — static images and SVGs (including `primer/` and `blog/` subdirectories)
- `videos/` — MP4 files for hero backgrounds and visual effects
- `fonts/` — Favorit Pro (.woff2, .otf) and Favorit Mono (.woff2)

### `content/`

- `blog/` — markdown blog posts with YAML frontmatter (title, description, date, author, category, tags, image, draft). Draft posts are hidden in production.

### Reference docs

- `brand-tokens.md` — full brand spec (colors, typography, logo, gradients, greyscale ramp, graphic elements)
- `livepeer-website-brief.md` — project brief with messaging and positioning context

## Conventions

### Component patterns

- All homepage sections and interactive components use `"use client"`.
- Scroll animations: Framer Motion `whileInView` with `viewport={{ once: true }}` and staggered children. Hero/brand pages use `initial`/`animate` (fires on mount) instead.
- Section headers: use the `SectionHeader` component with `label`, `title`, `description` props.
- Section dividers: `.divider-gradient` divs between sections.
- Imports: path alias `@/*` maps to repo root. Use `@/components/...`, `@/lib/...`.

### Assets

- Static files in `public/images/`, `public/videos/`, `public/fonts/`.
- Videos use `autoPlay muted loop playsInline`.
- `globals.css` includes `prefers-reduced-motion` to blanket-disable all animations.

### Don't

- **No `next/image`** — use raw `<img>` tags. `ImageMask` needs direct CSS filter/absolute stacking that `next/image`'s wrapper breaks. Primer SVGs are incompatible with required width/height props. WebGL components use `<video>` as GPU textures. Don't introduce without discussion.
- **No global state** — local `useState` only. No context providers, no state libraries.
- **No CMS** — page content is static/hardcoded. Blog posts are local markdown files, not fetched from an external CMS.
- **Minimal server-side fetching** — the only external data sources are the Livepeer subgraph (protocol stats, ISR-cached) and Resend (email signups via API route). Don't add new external dependencies without discussion.

## Brand & Styling

Full spec in `brand-tokens.md` — colors, typography, logo rules, greyscale ramp, gradients, graphic elements.

**Theme tokens** (`globals.css` `@theme`):
- Colors: `green`, `green-light`, `green-dark`, `green-bright`, `green-subtle`, `blue`, `blue-light`, `blue-bright`, `blue-dark`, `blue-subtle`, `dark`, `dark-lighter`, `dark-card`, `dark-border`
- Fonts: `--font-sans` (Favorit Pro — Light/Book/Regular/Medium/Bold), `--font-mono` (Favorit Mono — Regular/Medium/Bold)

**Primary colors:** Green `#18794E`, Black `#121212`, White `#FFFFFF`. Use Tailwind tokens, not raw hex.

**Utility classes:** `.text-gradient` (green gradient text), `.divider-gradient` (section separator), `.tile-bg` (subtle grid)

**Keyframes:** `breathe`, `node-pulse`, `scanLine`, `imageMaskFlow`

Dark theme only — except `/primer`, which uses a light theme override with scroll-based background color transitions per chapter.

## Messaging

### Positioning

- **Canonical headline:** "Open infrastructure for real-time AI video"
- **Tagline (footer):** "The world's open video infrastructure."
- Lead with AI video, not transcoding. Transcoding is a capability, not the identity.
- The network IS the product. Daydream, Livepeer Studio, Streamplace, Embody are built ON it — they are ecosystem proof, not Livepeer products.
- **Network vs. Gateway:** The Livepeer Network is the open protocol (orchestrators, delegators, staking, distributed GPU compute). The Livepeer Gateway is the developer-facing product layer on top — API keys, request routing, billing, SLA enforcement. "Build on Livepeer" = use the Gateway. "Run the network" = be an orchestrator/delegator.
- **Differentiation:** real-time, frame-by-frame AI inference on live video — not batch processing, not generic GPU compute. Centralized GPU clouds are optimized for batch/static and structurally disadvantaged here.
- **Three demand drivers:** AI-generated worlds/games, real-time video analysis, AI-mediated avatars/agents.

### Voice

- Confident, technical but accessible, no-nonsense.
- Lead with what the network does and why it matters. Use concrete numbers (10x cost reduction, <1s latency, 100K+ GPUs).
- Explain technical concepts simply on first reference.
- **Avoid:** "revolutionary," "game-changing," empty superlatives, hype language, "web3 bro" tone, lorem ipsum.

### Terminology

| Use | Don't use |
|-----|-----------|
| "the network" | "the platform," "the service" |
| "open infrastructure" | "decentralized infrastructure" (too web3-coded) |
| "GPU providers" (dev-facing) | "nodes" (too generic) |
| "orchestrators" (protocol/network context) | "miners," "validators" (wrong mental model) |
| "gateway" | "API endpoint" (gateway is the product concept) |
| "delegators" | "stakers" (delegators is the protocol term) |
| "frames," "streams" | "requests," "calls" (video-native language) |
| "inference" | "processing" (when referring to AI specifically) |
| "Livepeer Gateway" | "NaaP" (internal-only project name), "Livepeer platform" (too generic) |

## Strategic Context

This website is a redesign of livepeer.org to reflect Livepeer's repositioning from decentralized video transcoding to **infrastructure purpose-built for real-time AI video**, guided by the **Cascade vision**. As of late 2025, 70%+ of network fees come from AI inference (not transcoding), with ~3x YoY fee growth — AI is already the primary economic driver. Core strengths: low-latency video pipelines, distributed GPU operator network, open stake-coordinated execution, permissionless protocol on public blockchain.

### Livepeer Gateway (internally "NaaP")

"NaaP" is an **internal project name** for the canonical open-source gateway and developer platform. **Do not surface "NaaP" as user-facing terminology on the website.** The user-facing name is **Livepeer Gateway**.

The 2026 focus is preparing the network for scalable demand. This platform is the developer-facing product layer — a "single pane of glass" for core network services. Stewarded by the Livepeer Foundation.

**Product principles:** Observable (transparent network data, LLM/agent-readable), Performant (production-grade real-time execution), User-Centric (developers who drive demand).

**Priority personas:**
1. **App Developers** — build demand-generating apps. "Get an API key and go."
2. **Service Providers** — build plugins for app devs: billing, analytics, CDN.
3. **Orchestrators** — provide GPU compute by meeting SLAs.

### Daydream

Flagship product and design partner. Translates the real-time AI video thesis into developer workflows and generates early production demand.
- **Scope**: open-source local tool for designing real-time AI video workflows (integrates with TouchDesigner, Unity, Unreal)
- **Daydream API**: remote inference on Livepeer GPU backends
- **Community Hub**: workflow discovery and collaboration

### 2026 Roadmap Phases

1. **Now:** Drive network performance — observability, reliability, security; expand dev tooling; remove barriers to production use
2. **Next:** Accelerate network GTM — convert readiness into demand; design partners, onboarding, ecosystem support
3. **Beyond:** Scale enterprise adoption — higher demand, GPU supply expansion, enterprise-grade ops

### Website Design Direction

- **AI-first positioning** — lead with real-time AI video, not legacy transcoding
- **Brand source of truth:** Holographic Agency brand guidelines (see `brand-tokens.md`)
- **Design references:** Vercel, Linear, Stripe, Raycast — clean, developer-focused, premium feel
- **Target audience:** Developers building real-time AI/video applications
