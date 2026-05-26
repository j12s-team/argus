/* Square monogram avatar with brand styling.
 * If `src` is provided, render the photo with the same border treatment.
 * Otherwise, render initials in a green-accented monogram. */
export default function AvatarMonogram({
  initials = 'A',
  src,
  alt = '',
  size = 80,
  className = '',
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-argus-border bg-argus-card ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-argus-accent/0 via-argus-accent to-argus-accent/0" />
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-display font-bold text-argus-accent" style={{ fontSize: Math.round(size * 0.42) }}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
