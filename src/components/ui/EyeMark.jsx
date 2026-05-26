/* Compact eye mark used in the navbar/footer logo lockup */
export default function EyeMark({ size = 22, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="32" cy="32" rx="26" ry="15" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="32" cy="32" r="9" fill="currentColor" />
      <circle cx="32" cy="32" r="4" fill="rgb(var(--argus-page))" />
      <circle cx="34" cy="30" r="1.3" fill="rgb(var(--argus-fg))" opacity="0.9" />
    </svg>
  );
}
