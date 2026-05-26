export default function SectionLabel({ children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-argus-accent" />
      {children}
    </span>
  );
}
