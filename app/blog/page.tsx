import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogListingClient from "@/components/blog/BlogListingClient";
import { getAllPosts, getCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Livepeer",
  description:
    "News, insights, and updates from across the Livepeer ecosystem.",
  openGraph: {
    title: "Blog — Livepeer",
    description:
      "News, insights, and updates from across the Livepeer ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Livepeer",
    description:
      "News, insights, and updates from across the Livepeer ecosystem.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <Container>
        <SectionHeader
          label="Blog"
          title="Latest Updates"
          description="News, insights, and updates from across the Livepeer ecosystem."
          align="left"
        />

        <div className="mt-12">
          <BlogListingClient posts={posts} categories={categories} />
        </div>
      </Container>
    </section>
  );
}
