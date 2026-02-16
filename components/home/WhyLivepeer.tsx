"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/* ── Comparative vis: cost bars ── */
function CostVis() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5">
        <span className="w-14 font-mono text-[10px] text-white/25">Cloud</span>
        <div className="h-2 flex-1 rounded-full bg-white/[0.04]">
          <motion.div
            className="h-full rounded-full bg-white/10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <span className="font-mono text-[10px] text-white/25">$1.00</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="w-14 font-mono text-[10px] text-emerald-400/50">
          Livepeer
        </span>
        <div className="h-2 flex-1 rounded-full bg-white/[0.04]">
          <motion.div
            className="h-full rounded-full bg-emerald-500/40"
            initial={{ width: 0 }}
            whileInView={{ width: "10%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          />
        </div>
        <span className="font-mono text-[10px] text-emerald-400/50">$0.10</span>
      </div>
    </div>
  );
}

/* ── Comparative vis: latency bars ── */
function LatencyVis() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2.5">
        <span className="w-14 font-mono text-[10px] text-white/25">Cloud</span>
        <div className="h-2 flex-1 rounded-full bg-white/[0.04]">
          <motion.div
            className="h-full rounded-full bg-white/10"
            initial={{ width: 0 }}
            whileInView={{ width: "70%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <span className="font-mono text-[10px] text-white/25">2-5s</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="w-14 font-mono text-[10px] text-emerald-400/50">
          Livepeer
        </span>
        <div className="h-2 flex-1 rounded-full bg-white/[0.04]">
          <motion.div
            className="h-full rounded-full bg-emerald-500/40"
            initial={{ width: 0 }}
            whileInView={{ width: "15%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          />
        </div>
        <span className="font-mono text-[10px] text-emerald-400/50">
          &lt;1s
        </span>
      </div>
    </div>
  );
}

/* ── Comparative vis: cold start indicators ── */
function ColdStartVis() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-2 w-2 rounded-full border border-white/20 border-t-transparent animate-spin" />
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-white/25">Cloud GPU</span>
          <span className="font-mono text-[10px] text-white/15">30-60s</span>
        </div>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 rounded-md border border-emerald-500/15 bg-emerald-500/[0.04] px-3 py-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.6,
        }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-emerald-400/70"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: 0.8,
          }}
        />
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-emerald-400/60">
            Livepeer
          </span>
          <span className="font-mono text-[10px] text-emerald-400/40">
            Instant
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Comparative vis: elastic scale indicators ── */
function ScaleVis() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2">
        <div className="flex gap-[3px]">
          {[1, 1, 1, 1].map((_, i) => (
            <div key={i} className="h-3 w-1.5 rounded-sm bg-white/10" />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-white/25">Cloud</span>
          <span className="font-mono text-[10px] text-white/15">Fixed</span>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-md border border-emerald-500/15 bg-emerald-500/[0.04] px-3 py-2">
        <div className="flex items-end gap-[3px]">
          {[1, 2, 3, 4, 5, 6].map((h, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-sm"
              style={{
                background: `rgba(64,191,134,${0.25 + i * 0.08})`,
              }}
              initial={{ height: 0 }}
              whileInView={{ height: `${h * 2.5}px` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.4 + i * 0.08,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] text-emerald-400/60">
            Livepeer
          </span>
          <span className="font-mono text-[10px] text-emerald-400/40">
            Elastic
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Card wrapper with accent line and hover effects ── */
function AdvantageCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-7 transition-all duration-300 hover:border-green/20 hover:shadow-[0_0_30px_rgba(24,121,78,0.08)] hover:scale-[1.01] ${className}`}
    >
      {/* Green accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(to right, transparent, #18794e, transparent)",
        }}
      />
      {children}
    </motion.div>
  );
}

export default function WhyLivepeer() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 60%, rgba(24,121,78,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Tile grid overlay */}
      <div className="tile-bg pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Geometric accent lines */}
      <div
        className="pointer-events-none absolute top-[20%] left-0 h-[1px] w-32"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(24,121,78,0.3), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[30%] right-0 w-[1px] h-32"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(24,121,78,0.3), transparent)",
        }}
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionHeader
              label="Why Livepeer"
              title="Built for real-time"
              description="Where generic GPU clouds optimize for batch jobs and static inputs, Livepeer is purpose-built for continuous AI inference on live video."
            />
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <AdvantageCard>
              <div className="font-mono text-5xl font-bold tracking-tight text-gradient lg:text-6xl">
                10x
              </div>
              <h3 className="mt-2 text-base font-medium">Cost Reduction</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                Usage-based GPU pricing with no reserved instances or idle capacity.
              </p>
              <div className="mt-5">
                <CostVis />
              </div>
            </AdvantageCard>

            <AdvantageCard>
              <div className="font-mono text-5xl font-bold tracking-tight text-gradient lg:text-6xl">
                &lt;1s
              </div>
              <h3 className="mt-2 text-base font-medium">
                Real-Time Latency
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                Purpose-built for continuous, frame-by-frame AI inference on
                live video.
              </p>
              <div className="mt-5">
                <LatencyVis />
              </div>
            </AdvantageCard>

            <AdvantageCard>
              <div className="font-mono text-5xl font-bold tracking-tight text-gradient lg:text-6xl">
                0s
              </div>
              <h3 className="mt-2 text-base font-medium">Cold Start</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                Warm GPUs 24/7 — inference starts immediately on every stream.
              </p>
              <div className="mt-5">
                <ColdStartVis />
              </div>
            </AdvantageCard>

            <AdvantageCard>
              <div className="font-mono text-5xl font-bold tracking-tight text-gradient lg:text-6xl">
                ∞
              </div>
              <h3 className="mt-2 text-base font-medium">Elastic Scale</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">
                Go from 1 to 10,000 streams without provisioning a single GPU.
              </p>
              <div className="mt-5">
                <ScaleVis />
              </div>
            </AdvantageCard>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
