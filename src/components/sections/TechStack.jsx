import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function TechStack({ stack = [] }) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <SectionLabel>Tech Stack</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md border border-argus-border bg-argus-card px-3 py-1.5 font-mono text-[12px] text-argus-muted-2 hover:text-argus-accent hover:border-argus-accent/40 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
