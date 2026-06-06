/* Code/terminal surface — stays dark in light mode (intentional design).
 * Uses --argus-code-* tokens, which are defined once and never overridden. */
export default function Terminal({ title = 'argus@panoptes:~', lines = [], className = '' }) {
  return (
    <div
      className={`rounded-lg border border-argus-code-border bg-argus-code-bg overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between border-b border-argus-code-border bg-argus-code-bg-2/60 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-argus-red/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-argus-yellow/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-argus-accent/60" />
        </div>
        <span className="font-mono text-[11px] text-argus-code-muted">{title}</span>
        <span className="h-2.5 w-2.5" />
      </div>
      <pre className="p-4 md:p-5 text-[12px] md:text-[13px] leading-relaxed font-mono text-argus-code-muted overflow-x-auto">
        {lines.map((line, i) => {
          if (typeof line === 'string') {
            return (
              <div key={i}>
                <span className="text-argus-accent select-none">$</span>{' '}
                <span className="text-argus-code-fg">{line}</span>
              </div>
            );
          }
          const { label, value, tone } = line;
          const toneCls =
            tone === 'red'
              ? 'text-argus-red'
              : tone === 'yellow'
              ? 'text-argus-yellow'
              : tone === 'blue'
              ? 'text-argus-blue'
              : 'text-argus-accent';
          return (
            <div key={i} className="flex flex-wrap gap-x-3">
              <span className="text-argus-code-muted min-w-[180px]">{label}</span>
              <span className={toneCls}>{value}</span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
