"use client";

interface GlowOverlayProps {
  /** Horizontal position of glow center as percentage. Default: 50 */
  x?: number;
  /** Vertical position of glow center as percentage. Default: 50 */
  y?: number;
  /** Glow radius as percentage of container. Default: 50 */
  radius?: number;
  /** Glow opacity 0-1. Default: 0.15 */
  opacity?: number;
  /** Enable breathing/pulsing animation. Default: true */
  animate?: boolean;
  /** Animation duration in seconds. Default: 8 */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** Whether the overlay is rendered. Default: true */
  enabled?: boolean;
}

export default function GlowOverlay({
  x = 50,
  y = 50,
  radius = 50,
  opacity = 0.15,
  animate = true,
  duration = 8,
  className = "",
  enabled = true,
}: GlowOverlayProps) {
  if (!enabled) return null;

  return (
    <div
      className={`pointer-events-none ${className || "absolute inset-0"}`}
      aria-hidden="true"
      style={{
        background: `radial-gradient(
          ellipse ${radius}% ${radius * 0.7}% at ${x}% ${y}%,
          rgba(24, 121, 78, ${opacity}),
          rgba(64, 191, 134, ${opacity * 0.5}) 30%,
          rgba(109, 176, 156, ${opacity * 0.15}) 60%,
          transparent 100%
        )`,
        animation: animate
          ? `breathe ${duration}s ease-in-out infinite`
          : "none",
      }}
    />
  );
}
