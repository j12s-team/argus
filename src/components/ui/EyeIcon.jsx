/* The Argus eye — signature brand mark.
 *
 * Designed as an always-dark "console viewport": the mark stays vibrant mint
 * on a dark backdrop regardless of theme, the same way Terminal/LiveFeed keep
 * their code surface. The dark backdrop fades to transparent at the edges so
 * it blends seamlessly with the dark page in dark mode and reads as a "lens"
 * cut-out in light mode.
 *
 * Brand identity is consistent across themes — like a logo, not a UI element.
 */
export default function EyeIcon({
  size = 'lg',
  className = '',
  pulse = true,
}) {
  const dim =
    size === 'sm' ? 32 : size === 'md' ? 56 : size === 'lg' ? 120 : 240;

  // Always-dark palette — explicitly hardcoded so themes can't bleed in.
  const INK = '#0A0A0F'; // deep void
  const INK_2 = '#08080C'; // backdrop
  const MINT = '#00FFB2'; // bright mint accent
  const MINT_2 = '#00CC8E'; // darker iris band
  const WHITE = '#FFFFFF';

  return (
    <span className={`inline-block ${className}`}>
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Dark backdrop — fades to transparent at edges so it blends */}
          <radialGradient id="argus-eye-backdrop" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={INK_2} stopOpacity="1" />
            <stop offset="55%" stopColor={INK_2} stopOpacity="0.97" />
            <stop offset="80%" stopColor={INK_2} stopOpacity="0.55" />
            <stop offset="100%" stopColor={INK_2} stopOpacity="0" />
          </radialGradient>

          {/* Iris radial — bright mint center, darker outer band */}
          <radialGradient id="argus-iris" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={MINT} stopOpacity="1" />
            <stop offset="55%" stopColor={MINT_2} stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0F1A16" stopOpacity="1" />
          </radialGradient>

          {/* Halo — soft mint bloom around the eye */}
          <radialGradient id="argus-halo" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor={MINT} stopOpacity="0.45" />
            <stop offset="60%" stopColor={MINT} stopOpacity="0.05" />
            <stop offset="100%" stopColor={MINT} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Always-dark backdrop "lens" */}
        <circle cx="120" cy="120" r="118" fill="url(#argus-eye-backdrop)" />

        {/* Halo — animated pulse */}
        {pulse && (
          <circle
            cx="120"
            cy="120"
            r="100"
            fill="url(#argus-halo)"
            className="animate-pulseDot"
            style={{ transformOrigin: '120px 120px' }}
          />
        )}

        {/* Outer eye rings */}
        <ellipse
          cx="120"
          cy="120"
          rx="100"
          ry="58"
          fill="none"
          stroke={MINT}
          strokeWidth="2"
          opacity="0.9"
        />
        <ellipse
          cx="120"
          cy="120"
          rx="86"
          ry="48"
          fill="none"
          stroke={MINT}
          strokeWidth="1"
          opacity="0.45"
        />

        {/* Iris */}
        <g style={{ transformOrigin: '120px 120px', transformBox: 'fill-box' }}>
          <circle cx="120" cy="120" r="36" fill="url(#argus-iris)" />

          {/* Iris stripes for depth */}
          {Array.from({ length: 18 }).map((_, i) => {
            const a = (i / 18) * Math.PI * 2;
            const x1 = 120 + Math.cos(a) * 14;
            const y1 = 120 + Math.sin(a) * 14;
            const x2 = 120 + Math.cos(a) * 34;
            const y2 = 120 + Math.sin(a) * 34;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={INK}
                strokeOpacity="0.55"
                strokeWidth="1"
              />
            );
          })}

          {/* Pupil — always dark void */}
          <circle cx="120" cy="120" r="13" fill={INK} />

          {/* Specular highlights — always bright */}
          <circle cx="126" cy="114" r="3.6" fill={WHITE} opacity="0.95" />
          <circle cx="113" cy="126" r="1.6" fill={WHITE} opacity="0.6" />
        </g>

        {/* Crosshair ticks — outside the rings */}
        <g stroke={MINT} strokeOpacity="0.5" strokeWidth="1.2">
          <line x1="14" y1="120" x2="26" y2="120" />
          <line x1="214" y1="120" x2="226" y2="120" />
          <line x1="120" y1="50" x2="120" y2="62" />
          <line x1="120" y1="178" x2="120" y2="190" />
        </g>
      </svg>
    </span>
  );
}
