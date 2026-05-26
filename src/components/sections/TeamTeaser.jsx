import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import AvatarMonogram from '../ui/AvatarMonogram.jsx';
import AccentBox from '../ui/AccentBox.jsx';
import { FOUNDERS } from '../../data/team.js';

export default function TeamTeaser() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>The Team</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              Built by operators who couldn't find what they needed
              <span className="text-argus-accent"> in the market.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08}>
              <div className="relative h-full rounded-lg border border-argus-border bg-argus-card p-6 md:p-7 overflow-hidden">
                <span className="accent-bar" />
                <div className="flex items-start gap-5">
                  <AvatarMonogram initials={f.initials} src={f.photo} size={72} />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-lg md:text-xl text-argus-fg">
                      {f.name}
                    </h3>
                    <p className="font-mono text-[12px] text-argus-muted mt-1 uppercase tracking-wider">
                      {f.role}
                    </p>
                  </div>
                </div>
                <p className="body-md mt-5 text-argus-fg/90 italic">"{f.quality}"</p>
                <ul className="mt-5 space-y-2">
                  {f.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-3 body-sm">
                      <span className="mt-2 h-1 w-1 rounded-full bg-argus-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <AccentBox className="mt-10 max-w-4xl">
            <p className="font-mono text-sm md:text-base text-argus-fg leading-relaxed">
              Met at <span className="text-argus-accent">Colosseum Hackathon</span> → partnered through{' '}
              <span className="text-argus-accent">SuperTeamBR</span> → shipped <span className="text-argus-accent">4 products</span> across{' '}
              <span className="text-argus-accent">4 hackathons</span> in <span className="text-argus-accent">90 days</span> as a 2-person team.
            </p>
          </AccentBox>
        </Reveal>

        <div className="mt-10">
          <Link to="/team" className="link-arrow">
            Meet the team
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
