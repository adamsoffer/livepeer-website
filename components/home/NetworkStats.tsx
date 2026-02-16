"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useCountUp } from "@/lib/useCountUp";

function StatCell({
  target,
  prefix,
  suffix,
  label,
  description,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}) {
  const { ref, display } = useCountUp(target, { prefix, suffix, duration: 2500 });

  return (
    <div ref={ref} className="px-6 py-8 text-center lg:px-8">
      <div className="font-mono text-5xl font-bold text-gradient lg:text-6xl">
        {display}
      </div>
      <div className="mt-3 text-sm font-medium text-white/90">{label}</div>
      <p className="mt-1 text-xs text-white/40">{description}</p>
    </div>
  );
}

export default function NetworkStats() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="mb-3 font-mono text-sm font-medium tracking-wider text-white/40 uppercase">
              Proven at Scale
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Proven at scale
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/60">
              The Livepeer network is live, battle-tested, and growing every day.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 overflow-hidden rounded-2xl border border-dark-border bg-dark-card/80 backdrop-blur-sm"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 divide-x divide-dark-border lg:grid-cols-4">
              <StatCell
                target={100}
                suffix="K+"
                label="GPUs on network"
                description="Distributed globally across independent operators"
              />
              <StatCell
                target={40}
                prefix="$"
                suffix="M+"
                label="Total stake"
                description="LPT staked securing the network"
              />
              <div className="border-t border-dark-border lg:border-t-0">
                <StatCell
                  target={150}
                  suffix="M+"
                  label="Minutes transcoded"
                  description="Video processed through the network to date"
                />
              </div>
              <div className="border-t border-dark-border lg:border-t-0">
                <StatCell
                  target={99}
                  suffix=".9%"
                  label="Uptime"
                  description="Network availability across all regions"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
