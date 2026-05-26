import { Link } from 'react-router-dom';

const base =
  'inline-flex items-center justify-center gap-2 font-mono text-sm font-medium tracking-wide rounded-md transition-all duration-200 select-none whitespace-nowrap';

const sizes = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-2.5',
  lg: 'px-6 py-3.5 text-base',
};

const variants = {
  primary:
    'bg-argus-accent text-argus-bg hover:bg-white hover:shadow-argus-lg shadow-argus',
  secondary:
    'border border-argus-border bg-argus-card text-white hover:border-argus-accent/60 hover:text-argus-accent hover:shadow-argus',
  ghost:
    'text-argus-muted-2 hover:text-argus-accent border border-transparent hover:border-argus-border',
  outline:
    'border border-argus-accent/40 text-argus-accent hover:bg-argus-accent hover:text-argus-bg',
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
