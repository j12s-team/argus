/* Hero backdrop: grid + radial glow + faint scan line */
export default function HeroBackdrop({ className = '' }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-argus-accent/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-argus-border to-transparent" />
    </div>
  );
}
