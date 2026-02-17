export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  size = "default",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "small";
}) {
  const headingClass =
    size === "small"
      ? "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance"
      : "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance";

  return (
    <div className={align === "center" ? "text-center" : ""}>
      {label && (
        <p className="mb-4 font-mono text-xs font-medium tracking-wider text-white/30 uppercase">
          {label}
        </p>
      )}
      <h2 className={headingClass}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-white/50 text-pretty ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
