type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

/**
 * Clitze Clein brand wordmark, rebuilt as crisp inline SVG.
 * Echoes the original emblem: a "CC" monogram framed by the studio name.
 * Replace with the supplied PNG/SVG asset at /public/logo.svg when available.
 */
export default function Logo({ className, variant = "full" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 48"
        className={className}
        role="img"
        aria-label="Clitze Clein"
        fill="none"
      >
        <text
          x="32"
          y="36"
          textAnchor="middle"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="38"
          fontStyle="italic"
          fontWeight="600"
          fill="currentColor"
        >
          CC
        </text>
      </svg>
    );
  }

  return (
    <span className={className} aria-label="Clitze Clein – Tattoo Atelier">
      <span
        style={{ fontFamily: "var(--font-display)" }}
        className="block text-[1.35rem] sm:text-[1.5rem] font-semibold italic leading-none tracking-tight"
      >
        Clitze Clein
      </span>
      <span className="mt-1 block text-[0.58rem] font-medium uppercase tracking-[0.34em] text-gold">
        Tattoo Atelier · Münster
      </span>
    </span>
  );
}
