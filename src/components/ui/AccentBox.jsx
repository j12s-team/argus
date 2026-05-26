export default function AccentBox({ children, className = '', tone = 'accent' }) {
  const borderColor =
    tone === 'red'
      ? 'border-l-argus-red bg-argus-red/5'
      : tone === 'yellow'
      ? 'border-l-argus-yellow bg-argus-yellow/5'
      : tone === 'blue'
      ? 'border-l-argus-blue bg-argus-blue/5'
      : 'border-l-argus-accent bg-argus-accent/[0.06]';
  return (
    <div
      className={`relative rounded-md border border-argus-border border-l-4 ${borderColor} p-5 md:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
