import { Link } from 'react-router-dom';

/* Pill button vocabulary — xAI discipline + Argus mint identity.
 * - All variants share the rounded-full pill shape.
 * - `primary` is the rare mint-filled pill (the only filled variant).
 * - `secondary` / `ghost` are translucent-bordered outline pills.
 * - No drop shadows. Hairline borders + mint border tint on hover. */

const base =
  'inline-flex items-center justify-center gap-2 font-sans whitespace-nowrap select-none rounded-pill transition-colors duration-200';

const sizes = {
  sm: 'h-8 px-3 text-[13px]',
  md: 'h-10 px-4 text-[14px]',
  lg: 'h-12 px-5 text-[15px]',
};

const variants = {
  primary:
    'bg-argus-accent text-argus-bg border border-argus-accent ' +
    'hover:bg-argus-accent-dim hover:border-argus-accent-dim',

  secondary:
    'bg-transparent text-argus-fg border border-argus-border ' +
    'hover:border-argus-accent/70 hover:text-argus-accent',

  ghost:
    'bg-transparent text-argus-fg-soft border border-transparent ' +
    'hover:text-argus-fg',

  outline:
    'bg-transparent text-argus-accent border border-argus-accent/50 ' +
    'hover:bg-argus-accent hover:text-argus-bg',

  /* Always-dark outline pill for use on top of code surfaces (Terminal etc.). */
  'outline-dark':
    'bg-transparent text-argus-code-fg border border-argus-code-border ' +
    'hover:border-argus-accent/70 hover:text-argus-accent',
};

export default function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = false,
  ...rest
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
  const Tag = as;
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
