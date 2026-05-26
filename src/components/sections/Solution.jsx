import { ArrowDown } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import AccentBox from '../ui/AccentBox.jsx';
import { LOOP_STEPS } from '../../data/traction.js';

export default function Solution() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 -z-10 bg-grid-faint opacity-30" />
      <div className="wrap">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>The Solution</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              An AI agent that acts <span className="text-argus-accent">before</span> the transaction lands.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-lg mt-5">
              Not a scanner. Not an alerting tool. A runtime security layer that sees, classifies,
              simulates, and responds — autonomously.
            </p>
          </Reveal>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-14">
          {LOOP_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative h-full rounded-lg border border-argus-border bg-argus-card p-6 overflow-hidden">
                <span className="accent-bar" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-argus-muted">STEP {s.n}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-argus-accent animate-pulseDot" />
                </div>
                <div className="h-card mt-3 text-argus-fg uppercase tracking-wider">{s.title}</div>
                <p className="body-sm mt-3 leading-relaxed">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden mt-10 space-y-4">
          {LOOP_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="relative rounded-lg border border-argus-border bg-argus-card p-5 overflow-hidden">
                <span className="accent-bar" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-argus-muted">STEP {s.n}</span>
                  <span className="font-display font-bold text-argus-fg">{s.title}</span>
                </div>
                <p className="body-sm mt-2">{s.detail}</p>
              </div>
              {i < LOOP_STEPS.length - 1 && (
                <div className="flex justify-center my-1">
                  <ArrowDown size={16} className="text-argus-accent/60" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <AccentBox className="mt-14 max-w-3xl mx-auto">
            <p className="font-display font-bold text-lg md:text-2xl text-argus-fg leading-snug">
              "Most tools stop at observability.
              <br />
              <span className="text-argus-accent">Argus moves toward autonomous enforcement.</span>"
            </p>
          </AccentBox>
        </Reveal>
      </div>
    </section>
  );
}
