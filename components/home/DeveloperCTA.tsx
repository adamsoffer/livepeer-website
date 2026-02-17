"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { EXTERNAL_LINKS } from "@/lib/constants";

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides to integrate Livepeer into your application.",
    href: EXTERNAL_LINKS.docs,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4V4zm4 4h8m-8 4h8m-8 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SDKs & Tools",
    description: "Client libraries, CLI tools, and developer utilities.",
    href: EXTERNAL_LINKS.github,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Grants Program",
    description: "Funding for teams building on the Livepeer network.",
    href: EXTERNAL_LINKS.grants,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function DeveloperCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.06 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 font-mono text-xs font-medium tracking-wider text-white/30 uppercase">
              Developers
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Start building today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/50 text-pretty">
              Everything you need to integrate real-time video and AI processing
              into your application.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={EXTERNAL_LINKS.docs} variant="primary">
                Read the Docs <span aria-hidden="true">&rarr;</span>
              </Button>
              <Button href={EXTERNAL_LINKS.github} variant="secondary">
                View on GitHub
              </Button>
            </div>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <motion.a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="group rounded-xl border border-white/[0.07] bg-[#1a1a1a] p-6 transition-colors duration-200 hover:border-white/[0.12]"
              >
                <div className="text-green">{resource.icon}</div>
                <h3 className="mt-4 text-lg font-medium">{resource.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {resource.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-white/40 transition-colors group-hover:text-white/60">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
