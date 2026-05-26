import { Github } from 'lucide-react';
import Button from '../ui/Button.jsx';
import HeroBackdrop from '../ui/HeroBackdrop.jsx';
import SectionLabel from '../ui/SectionLabel.jsx';
import Typewriter from '../ui/Typewriter.jsx';
import EyeIcon from '../ui/EyeIcon.jsx';
import LiveFeed from '../ui/LiveFeed.jsx';
import Reveal from '../ui/Reveal.jsx';
import { TRUST_BADGES } from '../../data/traction.js';
import { CONTACT } from '../../data/contact.js';

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <HeroBackdrop />
      <div className="wrap px-5 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel>Autonomous Web3 Security</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="h-display mt-5 text-white">
              <Typewriter lines={['The Hundred-Eyed Guard', 'That Never Sleeps.']} />
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="body-lg mt-6 max-w-xl">
              Argus builds autonomous AI agents that monitor, detect, and respond to DeFi
              exploits — <span className="text-white">before damage occurs.</span> Not alerts.
              Autonomous action.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/protocol-guardian" variant="primary" size="lg">
                View Protocol Guardian →
              </Button>
              <Button
                href={CONTACT.github}
                variant="secondary"
                size="lg"
                external
              >
                <Github size={16} /> GitHub ↗
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 items-center">
              <span className="text-[10px] uppercase tracking-[0.18em] text-argus-muted font-mono">
                Trusted signals
              </span>
              {TRUST_BADGES.map((b) => (
                <span
                  key={b}
                  className="font-mono text-[11px] text-argus-muted-2 inline-flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-argus-accent/60" />
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 relative">
          <Reveal delay={0.15} y={28}>
            <div className="relative flex items-center justify-center">
              <EyeIcon size="xl" className="opacity-80" />
              <div className="absolute inset-0 -z-10 bg-radial-accent rounded-full" />
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-6">
              <LiveFeed />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
