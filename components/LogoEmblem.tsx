type Props = { className?: string };

/**
 * Recreated Clitze Clein crest as scalable inline SVG.
 * Double-ring oval · arched "CLITZE CLEIN" · center CC monogram ·
 * "DAS CLITZE CLEINE TATTOO ATELIER" below. Uses currentColor.
 */
export default function LogoEmblem({ className }: Props) {
  return (
    <svg viewBox="0 0 600 470" className={className} role="img" aria-label="Clitze Clein – Das Clitze Cleine Tattoo Atelier" fill="none">
      <defs>
        <path id="cc-arc-top" d="M 95 250 A 215 175 0 0 1 505 250" />
      </defs>

      {/* Oval double ring */}
      <ellipse cx="300" cy="235" rx="250" ry="200" stroke="currentColor" strokeWidth="3.5" />
      <ellipse cx="300" cy="235" rx="234" ry="186" stroke="currentColor" strokeWidth="1.6" opacity="0.85" />

      {/* Side flourishes */}
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M50 235 C 25 235, 18 222, 40 220 C 60 218, 58 240, 36 238 C 18 236, 22 226, 38 226" />
        <path d="M550 235 C 575 235, 582 222, 560 220 C 540 218, 542 240, 564 238 C 582 236, 578 226, 562 226" />
      </g>

      {/* Arched studio name */}
      <text fill="currentColor" fontFamily="'Playfair Display', Georgia, serif" fontSize="42" fontWeight="500" letterSpacing="8" style={{ textTransform: "uppercase" }}>
        <textPath href="#cc-arc-top" startOffset="50%" textAnchor="middle">
          Clitze Clein
        </textPath>
      </text>

      {/* Center monogram */}
      <text x="300" y="300" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', Georgia, serif" fontSize="170" fontStyle="italic" fontWeight="600" letterSpacing="-6">
        CC
      </text>

      {/* Lower wordmark */}
      <text x="300" y="378" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', Georgia, serif" fontSize="33" fontWeight="600" letterSpacing="2" style={{ textTransform: "uppercase" }}>
        Das Clitze Cleine Tattoo
      </text>
      <text x="300" y="416" textAnchor="middle" fill="currentColor" fontFamily="'Playfair Display', Georgia, serif" fontSize="33" fontWeight="600" letterSpacing="6" style={{ textTransform: "uppercase" }}>
        Atelier
      </text>
    </svg>
  );
}
