import { Check, X } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel.jsx';
import StatCard from '../ui/StatCard.jsx';
import AccentBox from '../ui/AccentBox.jsx';
import Reveal from '../ui/Reveal.jsx';
import { PROBLEM_STATS, COMPARISON } from '../../data/traction.js';

export default function Problem() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>The Problem</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              DeFi protocols are <span className="text-argus-red">blind to attacks</span> until it's too late.
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-10">
          {PROBLEM_STATS.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.08} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="body-lg mt-12 max-w-3xl">
            Current tools audit code before launch. They generate alerts after the fact. Nobody
            monitors the runtime — the actual behavior of live protocols under attack.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <AccentBox className="mt-6 max-w-3xl">
            <p className="font-mono text-sm md:text-base text-argus-fg">
              Smart contracts can be formally correct and still be{' '}
              <span className="text-argus-accent">economically unsafe.</span>
            </p>
          </AccentBox>
        </Reveal>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-4 mt-14">
          <Reveal>
            <div className="rounded-lg border border-argus-border bg-argus-card p-6 md:p-7 h-full">
              <div className="flex items-center gap-3 pb-4 border-b border-argus-border">
                <span className="h-8 w-8 rounded-full bg-argus-red/15 flex items-center justify-center">
                  <X size={16} className="text-argus-red" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-argus-muted">
                  {COMPARISON.current.label}
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {COMPARISON.current.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm md:text-base text-argus-muted-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-argus-red/70 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-lg border border-argus-accent/40 bg-argus-dark/60 p-6 md:p-7 h-full overflow-hidden shadow-argus">
              <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-argus-accent/0 via-argus-accent to-argus-accent/0" />
              <div className="flex items-center gap-3 pb-4 border-b border-argus-border">
                <span className="h-8 w-8 rounded-full bg-argus-accent/15 flex items-center justify-center">
                  <Check size={16} className="text-argus-accent" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-argus-accent">
                  {COMPARISON.argus.label}
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {COMPARISON.argus.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm md:text-base text-argus-fg">
                    <span className="mt-2 h-1 w-1 rounded-full bg-argus-accent shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
