import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import Card from '../ui/Card.jsx';
import { INBOUND_SIGNALS, TRACTION_STATS } from '../../data/traction.js';

export default function Traction() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 -z-10 bg-grid-faint opacity-30" />
      <div className="wrap">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Traction</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              Three inbound signals. <span className="text-argus-accent">Zero outbound.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-lg mt-5">
              The market is pulling us. We didn't pitch anyone on this list.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {INBOUND_SIGNALS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <Card accentBar className="p-6 md:p-7 h-full">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-argus-accent">
                    {s.tag}
                  </span>
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full animate-pulseDot bg-argus-accent" />
                    <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-argus-accent" />
                  </span>
                </div>
                <h3 className="h-card mt-4 text-argus-fg">{s.name}</h3>
                <p className="font-mono text-[12px] text-argus-muted mt-1">{s.handle}</p>
                <p className="body-md mt-4">{s.blurb}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 border-y border-argus-border py-6">
          {TRACTION_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-center md:text-left px-3">
                <div className="font-display font-bold text-3xl md:text-4xl text-argus-accent leading-none">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-argus-muted-2 mt-2 uppercase tracking-wider font-mono">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
