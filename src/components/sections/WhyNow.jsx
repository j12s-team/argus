import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import { WHY_NOW } from '../../data/traction.js';

export default function WhyNow() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>Why Now</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              The window to build the autonomous security layer is open —
              <span className="text-argus-accent"> and closing fast.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {WHY_NOW.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="relative h-full rounded-lg border border-argus-border bg-argus-card p-6 md:p-7 overflow-hidden">
                <span className="font-display font-bold text-argus-accent/40 text-5xl absolute -top-2 -right-2 select-none">
                  0{i + 1}
                </span>
                <h3 className="h-card text-argus-fg relative">{c.title}</h3>
                <p className="body-md mt-4 relative">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
