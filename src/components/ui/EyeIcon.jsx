/* The Argus eye - signature mark. Pure SVG, animated subtly. */
export default function EyeIcon({
  size = 'lg',
  className = '',
  pulse = true,
}) {
  const dim =
    size === 'sm' ? 32 : size === 'md' ? 56 : size === 'lg' ? 120 : 220;

  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FFB2" stopOpacity="1" />
          <stop offset="55%" stopColor="#00CC8E" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0F1A16" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#00FFB2" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#00FFB2" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#00FFB2" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Halo */}
      {pulse && (
        <circle
          cx="110"
          cy="110"
          r="95"
          fill="url(#halo)"
          className="animate-pulseDot"
          style={{ transformOrigin: '110px 110px' }}
        />
      )}

      {/* Outer eye ring */}
      <ellipse
        cx="110"
        cy="110"
        rx="92"
        ry="55"
        fill="none"
        stroke="#00FFB2"
        strokeWidth="2"
        opacity="0.85"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="80"
        ry="46"
        fill="none"
        stroke="#00FFB2"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Iris */}
      <g
        className="origin-center"
        style={{ transformOrigin: '110px 110px', transformBox: 'fill-box' }}
      >
        <circle cx="110" cy="110" r="34" fill="url(#irisGrad)" />
        {/* Iris stripes */}
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
              stroke="#0A0A0F"
              strokeOpacity="0.5"
              strokeWidth="1"
            />
          );
        })}

        {/* Pupil */}
        <circle cx="110" cy="110" r="13" fill="#0A0A0F" />
        {/* Reflection */}
        <circle cx="116" cy="104" r="3.5" fill="#FFFFFF" opacity="0.95" />
        <circle cx="103" cy="116" r="1.6" fill="#FFFFFF" opacity="0.6" />
      </g>

      {/* Crosshair ticks (outer) */}
      <g stroke="#00FFB2" strokeOpacity="0.4" strokeWidth="1">
        <line x1="10" y1="110" x2="18" y2="110" />
        <line x1="202" y1="110" x2="210" y2="110" />
        <line x1="110" y1="46" x2="110" y2="54" />
        <line x1="110" y1="166" x2="110" y2="174" />
      </g>
    </svg>
  );
}
