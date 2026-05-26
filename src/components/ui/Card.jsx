export default function Card({
  children,
  className = '',
  accentBar = false,
  hover = true,
  as = 'div',
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={`card-base ${hover ? 'card-hover' : ''} ${className}`}
      {...rest}
    >
      {accentBar && <span className="accent-bar" />}
      {children}
    </Tag>
  );
}
