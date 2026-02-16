"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ── Illustration: AI-Generated World ── */
function WorldsVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-[#070b0a]">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080f0c] via-[#060d0a] to-[#0a0a0a]" />

      {/* Stars */}
      {[
        [12, 8], [28, 14], [45, 6], [62, 18], [78, 10], [88, 22],
        [18, 24], [52, 20], [70, 12], [35, 16],
      ].map(([x, y], i) => (
        <div
          key={i}
          className="absolute h-px w-px rounded-full bg-white/50"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}

      {/* Terrain layers — SVG landscape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[60%]"
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Far mountains */}
        <path
          d="M0 80 L40 45 L80 65 L130 30 L180 55 L220 25 L270 50 L320 35 L360 55 L400 40 V120 H0Z"
          fill="rgba(24,121,78,0.18)"
        />
        {/* Mid hills */}
        <path
          d="M0 95 L50 70 L100 85 L160 60 L210 78 L260 65 L320 80 L370 70 L400 82 V120 H0Z"
          fill="rgba(24,121,78,0.25)"
        />
        {/* Foreground */}
        <path
          d="M0 105 L60 92 L120 100 L180 88 L240 98 L300 90 L360 96 L400 92 V120 H0Z"
          fill="rgba(24,121,78,0.35)"
        />
        {/* Grid lines overlaying terrain */}
        {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="120" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
        ))}
        {[0, 30, 60, 90, 120].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
        ))}
      </svg>

      {/* Generation scan line */}
      <div
        className="pointer-events-none absolute inset-x-0 h-px"
        style={{
          top: "52%",
          background: "linear-gradient(to right, transparent, rgba(64,191,134,0.35) 30%, rgba(64,191,134,0.5) 50%, rgba(64,191,134,0.35) 70%, transparent)",
        }}
      />

      {/* HUD */}
      <div className="absolute left-3 top-2.5 font-mono text-[9px] text-emerald-400/70">
        GENERATING
      </div>
      <div className="absolute right-3 top-2.5 font-mono text-[9px] text-white/35">
        60 FPS
      </div>
      <div className="absolute bottom-2.5 left-3 font-mono text-[9px] text-white/35">
        Frame 1,847 &middot; 12ms
      </div>
    </div>
  );
}

/* ── Illustration: Live Transcoding & Streaming (ABR Ladder) ── */
function TranscodingVisual() {
  const sparklinePoints = "0,28 8,24 16,26 24,18 32,20 40,14 48,22 56,16 64,12 72,18 80,10 88,14 96,8 104,16 112,12 120,6 128,14 136,10 144,16 152,12";
  const renditions = [
    { res: "1080p", fps: "60fps", width: "100%" },
    { res: "720p", fps: "30fps", width: "78%" },
    { res: "480p", fps: "30fps", width: "58%" },
    { res: "360p", fps: "30fps", width: "42%" },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]" />

      {/* Mini player chrome */}
      <div className="absolute inset-x-3 top-3 bottom-10 rounded-md border border-white/[0.1] bg-[#131313] overflow-hidden">
        {/* Video area gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

        {/* LIVE badge */}
        <div className="absolute left-2.5 top-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[8px] font-medium text-red-400/80">LIVE</span>
        </div>

        {/* ABR Ladder */}
        <div className="absolute inset-x-4 top-10 bottom-8 flex flex-col justify-center gap-2.5">
          {renditions.map((r) => (
            <div key={r.res} className="flex items-center gap-3">
              <div
                className="h-[6px] rounded-full bg-gradient-to-r from-green/80 to-green/30"
                style={{ width: r.width }}
              />
              <span className="font-mono text-[10px] text-white/50 whitespace-nowrap">
                {r.res} {r.fps}
              </span>
            </div>
          ))}
        </div>

        {/* Sparkline bitrate graph */}
        <svg className="absolute bottom-0 left-0 right-0 h-[24px]" viewBox="0 0 160 32" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <polyline points={sparklinePoints} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <polygon points={`0,32 ${sparklinePoints} 152,32`} fill="url(#sparkFill)" />
        </svg>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-2.5 left-3 font-mono text-[9px] text-white/35">
        Bitrate: 4.2 Mbps &middot; Latency: 85ms
      </div>
    </div>
  );
}

/* ── Illustration: Real-Time Video Analysis ── */
function AnalysisVisual() {
  const boxes = [
    { x: 10, y: 15, w: 20, h: 40, label: "person", color: "#34d399" },
    { x: 55, y: 25, w: 16, h: 32, label: "person", color: "#34d399" },
    { x: 35, y: 58, w: 30, h: 18, label: "vehicle", color: "#60a5fa" },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#0a0a0a] to-[#0d1117]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[13%] top-[18%] h-[38%] w-[7%] rounded bg-white/20" />
        <div className="absolute left-[57%] top-[28%] h-[28%] w-[6%] rounded bg-white/15" />
        <div className="absolute left-[37%] top-[60%] h-[12%] w-[26%] rounded bg-white/10" />
      </div>
      {boxes.map((d, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: `${d.w}%`, height: `${d.h}%` }}
        >
          <div className="h-full w-full rounded-sm border" style={{ borderColor: `${d.color}88` }} />
          <div
            className="absolute -top-3 left-0 rounded-sm px-1 font-mono text-[8px]"
            style={{ background: `${d.color}30`, color: `${d.color}dd` }}
          >
            {d.label}
          </div>
        </div>
      ))}
      <div className="absolute left-3 top-2.5 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
        <span className="font-mono text-[9px] text-white/40">LIVE</span>
      </div>
      <div className="absolute right-3 top-2.5 font-mono text-[9px] text-white/35">
        YOLOv8 &middot; 8ms
      </div>
      <div className="absolute bottom-2.5 left-3 flex gap-3 font-mono text-[9px]">
        <span className="text-emerald-400/60">2 persons</span>
        <span className="text-blue-400/60">1 vehicle</span>
      </div>
    </div>
  );
}

/* ── Illustration: AI Avatars & Agents ── */
function AvatarsVisual() {
  const pts: [number, number][] = [
    [35, 28], [65, 28], [50, 23],
    [30, 40], [42, 38], [58, 38], [70, 40],
    [50, 48], [44, 46], [56, 46],
    [38, 58], [50, 60], [62, 58],
    [35, 48], [65, 48], [50, 68],
  ];
  const lines: [number, number][] = [
    [0, 2], [2, 1], [0, 3], [3, 4], [4, 5], [5, 6], [6, 1],
    [4, 8], [5, 9], [8, 7], [9, 7],
    [3, 13], [6, 14], [10, 11], [11, 12], [13, 10], [14, 12], [11, 15],
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-[#0a0a0a]">
      <div className="flex h-full items-center justify-center gap-4 px-4 py-5">
        {/* Input */}
        <div className="relative h-[110px] w-[80px] flex-shrink-0 overflow-hidden rounded-md border border-white/[0.1] bg-[#131313]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[55%] w-[45%] rounded-[50%] bg-white/[0.05]" />
          </div>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            {lines.map(([a, b], i) => (
              <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="rgba(96,165,250,0.35)" strokeWidth="0.5" />
            ))}
            {pts.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="1" fill="rgba(96,165,250,0.7)" />
            ))}
          </svg>
          <div className="absolute left-1.5 top-1 font-mono text-[8px] text-blue-400/70">INPUT</div>
        </div>

        {/* Arrow */}
        <svg className="h-3 w-4 flex-shrink-0 text-white/25" viewBox="0 0 16 12" fill="none">
          <path d="M0 6h12m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Output */}
        <div className="relative h-[110px] w-[80px] flex-shrink-0 overflow-hidden rounded-md border border-white/[0.1] bg-[#131313]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[55%] w-[45%] rounded-[50%] bg-gradient-to-b from-purple-500/[0.12] to-emerald-500/[0.08]">
              <div className="absolute left-[20%] top-[30%] h-[8%] w-[18%] rounded-full bg-purple-400/30" />
              <div className="absolute right-[20%] top-[30%] h-[8%] w-[18%] rounded-full bg-purple-400/30" />
              <div className="absolute bottom-[26%] left-1/2 h-[3%] w-[28%] -translate-x-1/2 rounded-full bg-purple-400/20" />
            </div>
          </div>
          <div className="absolute left-1.5 top-1 font-mono text-[8px] text-purple-400/70">OUTPUT</div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-2.5 left-3 font-mono text-[9px] text-white/35">
        Style: Anime &middot; 22ms
      </div>
    </div>
  );
}

/* ── Illustration: Synthetic Data Generation ── */
function SyntheticDataVisual() {
  const thumbnails = [
    { label: "batch_0042", from: "from-emerald-900/40", to: "to-cyan-900/30" },
    { label: "batch_0043", from: "from-cyan-900/30", to: "to-emerald-900/40" },
    { label: "batch_0044", from: "from-emerald-900/50", to: "to-amber-900/20" },
    { label: "batch_0045", from: "from-amber-900/20", to: "to-emerald-900/40" },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]" />

      {/* 2x2 thumbnail grid */}
      <div className="absolute inset-x-3 top-3 bottom-10 grid grid-cols-2 gap-1.5">
        {thumbnails.map((t) => (
          <div
            key={t.label}
            className={`relative overflow-hidden rounded-md border border-white/[0.1] bg-gradient-to-br ${t.from} ${t.to}`}
          >
            {/* Subtle noise texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0ibiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')] opacity-50" />
            <div className="absolute bottom-1 left-1.5 font-mono text-[7px] text-white/40">
              {t.label}
            </div>
          </div>
        ))}
      </div>

      {/* Progress counter */}
      <div className="absolute bottom-2.5 left-3 font-mono text-[9px] text-amber-400/70">
        2,847 / 10,000 frames
      </div>
      <div className="absolute bottom-2.5 right-3 flex gap-3 font-mono text-[9px]">
        <span className="text-amber-400/60">GPU: 94%</span>
        <span className="text-amber-400/60">Queue: 12</span>
      </div>
    </div>
  );
}

/* ── Illustration: Composable AI Pipelines (3 nodes) ── */
function PipelinesVisual() {
  const nodes = [
    { label: "Ingest", x: 20 },
    { label: "Model", x: 120, active: true },
    { label: "Output", x: 220 },
  ];
  const nodeW = 64;
  const nodeH = 26;
  const nodeY = 14;
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#0d0d0d]" />

      {/* Pipeline node graph */}
      <div className="absolute inset-x-3 top-3 bottom-10 flex items-center justify-center">
        <svg viewBox="0 0 304 54" className="w-full max-w-[320px] h-auto" fill="none">
          {/* Connection lines */}
          {nodes.slice(0, -1).map((node, i) => {
            const next = nodes[i + 1];
            return (
              <line
                key={`line-${i}`}
                x1={node.x + nodeW}
                y1={nodeY + nodeH / 2}
                x2={next.x}
                y2={nodeY + nodeH / 2}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.label}>
              <rect
                x={node.x}
                y={nodeY}
                width={nodeW}
                height={nodeH}
                rx="5"
                fill={node.active ? "rgba(24,121,78,0.25)" : "rgba(255,255,255,0.05)"}
                stroke={node.active ? "rgba(24,121,78,0.7)" : "rgba(255,255,255,0.12)"}
                strokeWidth="1"
              />
              <text
                x={node.x + nodeW / 2}
                y={nodeY + nodeH / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-mono"
                fontSize="9"
                fill={node.active ? "rgba(64,191,134,0.9)" : "rgba(255,255,255,0.5)"}
              >
                {node.label}
              </text>
              {/* Green pulse dot on active node */}
              {node.active && (
                <circle
                  cx={node.x + nodeW / 2}
                  cy={nodeY - 5}
                  r="2.5"
                  fill="#18794e"
                  className="animate-pulse"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-2.5 left-3 font-mono text-[9px] text-white/35">
        Pipeline: img2img &middot; 3 stages
      </div>
      <div className="absolute bottom-2.5 right-3 font-mono text-[9px] text-emerald-400/60">
        Active
      </div>
    </div>
  );
}

/* ── Capabilities data ── */
const capabilities: {
  title: string;
  description: string;
  Visual: React.ComponentType;
  colSpan: 2 | 3 | 4;
}[] = [
  {
    title: "AI-Generated Worlds",
    description:
      "Interactive environments produced frame-by-frame with real-time inference on live video.",
    Visual: WorldsVisual,
    colSpan: 4,
  },
  {
    title: "Real-Time Video Analysis",
    description:
      "Computer vision and object detection running as always-on AI pipelines with low latency.",
    Visual: AnalysisVisual,
    colSpan: 2,
  },
  {
    title: "Composable AI Pipelines",
    description:
      "Chain inference models into multi-stage pipelines that process video end to end.",
    Visual: PipelinesVisual,
    colSpan: 2,
  },
  {
    title: "Live Transcoding & Streaming",
    description:
      "Adaptive bitrate transcoding across a global GPU network with sub-second latency.",
    Visual: TranscodingVisual,
    colSpan: 4,
  },
  {
    title: "AI Avatars & Agents",
    description:
      "Motion capture and style transfer powering persistent digital identities in real time.",
    Visual: AvatarsVisual,
    colSpan: 3,
  },
  {
    title: "Synthetic Data Generation",
    description:
      "Generate labeled training data at scale — video frames, annotations, and augmentations.",
    Visual: SyntheticDataVisual,
    colSpan: 3,
  },
];

const colSpanClass: Record<number, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
};

export default function Capabilities() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeader
              label="Use Cases"
              title="What you can build"
              description="Real-time AI video workloads on open, elastic GPU infrastructure."
            />
          </motion.div>

          {/* Asymmetric bento grid — 6-col with zigzag */}
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className={`group overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-card/80 transition-colors hover:border-green/20 md:col-span-1 ${colSpanClass[cap.colSpan]}`}
              >
                <div className={`p-2.5 pb-0 ${cap.colSpan === 4 ? "h-[180px] lg:h-[240px]" : "h-[180px]"}`}>
                  <cap.Visual />
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-lg font-medium">{cap.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
