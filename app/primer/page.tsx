import type { Metadata } from "next";
import { fetchProtocolStats } from "@/lib/subgraph";
import PrimerContent from "@/components/primer/PrimerContent";

export const metadata: Metadata = {
  title: "Livepeer: A 10-Minute Primer",
  description:
    "Learn how Livepeer works — an open network for real-time AI video infrastructure, powered by distributed GPU providers and coordinated by the LPT protocol.",
  openGraph: {
    title: "Livepeer: A 10-Minute Primer",
    description:
      "Learn how Livepeer works — an open network for real-time AI video infrastructure, powered by distributed GPU providers and coordinated by the LPT protocol.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livepeer: A 10-Minute Primer",
    description:
      "Learn how Livepeer works — an open network for real-time AI video infrastructure, powered by distributed GPU providers and coordinated by the LPT protocol.",
  },
};

export default async function PrimerPage() {
  const stats = await fetchProtocolStats();
  return <PrimerContent stats={stats} />;
}
