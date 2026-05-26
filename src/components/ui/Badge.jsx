const tones = {
  accent: 'border-argus-accent/40 text-argus-accent bg-argus-accent/5',
  live: 'border-argus-accent/40 text-argus-accent bg-argus-accent/10',
  review: 'border-argus-yellow/40 text-argus-yellow bg-argus-yellow/5',
  info: 'border-argus-blue/40 text-argus-blue bg-argus-blue/5',
  purple: 'border-[#9945FF]/40 text-[#C399FF] bg-[#9945FF]/10',
  red: 'border-argus-red/40 text-argus-red bg-argus-red/5',
  muted: 'border-argus-border text-argus-muted-2 bg-argus-card-2',
};

export default function Badge({
  children,
  tone = 'accent',
  dot = false,
  pulse = false,
  className = '',
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      {dot && (
        <span
          className={`relative inline-block h-1.5 w-1.5 rounded-full ${
            tone === 'live' || tone === 'accent'
              ? 'bg-argus-accent'
              : tone === 'review'
              ? 'bg-argus-yellow'
              : tone === 'info'
              ? 'bg-argus-blue'
              : tone === 'purple'
              ? 'bg-[#C399FF]'
              : 'bg-argus-muted'
          }`}
        >
          {pulse && (
            <span
              className={`absolute inset-0 rounded-full animate-pulseDot ${
                tone === 'live' || tone === 'accent'
                  ? 'bg-argus-accent'
                  : 'bg-current'
              }`}
            />
          )}
        </span>
      )}
      {children}
    </span>
  );
}
