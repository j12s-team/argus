import { useState } from 'react';

/* Square avatar with brand styling.
 * If `src` is provided AND loads successfully, render the photo.
 * Otherwise (missing or 404), fall back to initials with brand accent. */
export default function AvatarMonogram({
  initials = 'A',
  src,
  alt = '',
  size = 80,
  className = '',
}) {
  const [errored, setErrored] = useState(false);
  const showPhoto = src && !errored;

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-argus-border bg-argus-card ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-argus-accent/0 via-argus-accent to-argus-accent/0 z-10" />
      {showPhoto ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span
            className="font-display font-bold text-argus-accent"
            style={{ fontSize: Math.round(size * 0.42) }}
          >
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
