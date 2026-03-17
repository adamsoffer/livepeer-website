import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bundler-agnostic polling interval for file watching — works with both
  // Turbopack (default in Next 15) and Webpack. Needed because the native
  // file watcher doesn't pick up changes reliably in git worktrees.
  watchOptions: {
    pollIntervalMs: 1000,
  },
  webpack: (config) => {
    // Additional Webpack-specific watch tweaks for git worktree symlinks
    // (only takes effect when Turbopack is disabled).
    config.watchOptions = {
      ...config.watchOptions,
      followSymlinks: true,
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  async redirects() {
    return [
      // Existing routes that no longer have dedicated pages
      {
        source: "/developers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/lpt",
        destination: "/",
        permanent: true,
      },
      {
        source: "/community",
        destination: "/",
        permanent: true,
      },
      {
        source: "/use-cases/world-models",
        destination: "/",
        permanent: true,
      },
      {
        source: "/use-cases/ai-generated-worlds",
        destination: "/",
        permanent: true,
      },
      // Old livepeer.org routes → new site equivalents
      {
        source: "/learn",
        destination: "/primer",
        permanent: true,
      },
      {
        source: "/network",
        destination: "https://explorer.livepeer.org",
        permanent: true,
      },
      {
        source: "/delegate",
        destination: "https://explorer.livepeer.org/",
        permanent: true,
      },
      {
        source: "/orchestrate",
        destination:
          "https://docs.livepeer.org/orchestrators/guides/get-started",
        permanent: true,
      },
      {
        source: "/dev-hub",
        destination: "https://docs.livepeer.org",
        permanent: true,
      },
      {
        source: "/community-hub",
        destination: "https://discord.gg/livepeer",
        permanent: true,
      },
      {
        source: "/ecosystem",
        destination: "/",
        permanent: true,
      },
      {
        source: "/developers/quick-start",
        destination: "https://docs.livepeer.org",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/media-kit",
        destination: "/brand",
        permanent: true,
      },
      {
        source: "/primer-new-design",
        destination: "/primer",
        permanent: true,
      },
      {
        source: "/reference/:path*",
        destination: "https://docs.livepeer.org",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
