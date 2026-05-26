/* The Argus eye — signature mark. Pure SVG, animated subtly.
 * Theme-aware: pulls accent color from the parent's currentColor so it
 * reads bright mint in dark mode and darker mint in light mode. */
export default function EyeIcon({
  size = 'lg',
  className = '',
  pulse = true,
}) {
  const dim =
    size === 'sm' ? 32 : size === 'md' ? 56 : size === 'lg' ? 120 : 220;

  return (
    <span className={`inline-block text-argus-accent ${className}`}>
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="argus-iris" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="55%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.18" />
          </radialGradient>
          <radialGradient id="argus-halo" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Halo */}
        {pulse && (
          <circle
            cx="110"
            cy="110"
            r="95"
            fill="url(#argus-halo)"
            className="animate-pulseDot"
            style={{ transformOrigin: '110px 110px' }}
          />
        )}

        {/* Outer eye rings */}
        <ellipse
          cx="110"
          cy="110"
          rx="92"
          ry="55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.85"
        />
        <ellipse
          cx="110"
          cy="110"
          rx="80"
          ry="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Iris */}
        <g style={{ transformOrigin: '110px 110px', transformBox: 'fill-box' }}>
          <circle cx="110" cy="110" r="34" fill="url(#argus-iris)" />
          {/* Iris stripes — use the page bg so they read as "depth" in both themes */}
          {Array.from({ length: 18 }).map((_, i) => {
            const a = (i / 18) * Math.PI * 2;
            const x1 = 110 + Math.cos(a) * 14;
            const y1 = 110 + Math.sin(a) * 14;
            const x2 = 110 + Math.cos(a) * 32;
            const y2 = 110 + Math.sin(a) * 32;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgb(var(--argus-page))"
                strokeOpacity="0.55"
                strokeWidth="1"
              />
            );
          })}

          {/* Pupil — uses page bg so it always reads as "void" */}
          <circle cx="110" cy="110" r="13" fill="rgb(var(--argus-page))" />
          {/* Highlights — use fg so they read bright in dark, near-white-tinted in light */}
          <circle cx="116" cy="104" r="3.5" fill="rgb(var(--argus-fg))" opacity="0.75" />
          <circle cx="103" cy="116" r="1.6" fill="rgb(var(--argus-fg))" opacity="0.5" />
        </g>

        {/* Crosshair ticks */}
        <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1">
          <line x1="10" y1="110" x2="18" y2="110" />
          <line x1="202" y1="110" x2="210" y2="110" />
          <line x1="110" y1="46" x2="110" y2="54" />
          <line x1="110" y1="166" x2="110" y2="174" />
        </g>
      </svg>
    </span>
  );
}
