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

/* Centered hero — matches xAI's hero layout pattern.
 * Headline at display-xl (96px) is allowed to wrap naturally to 2-3 lines.
 * Body, CTAs, and trust signals all centred underneath.
 * Eye + LiveFeed sit in a 2-col row below, centred in the container. */
export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <HeroBackdrop />

      <div className="wrap px-5 md:px-8 lg:px-12 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel>Autonomous Web3 Security</SectionLabel>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="h-display-xl mt-6 max-w-[1000px] mx-auto">
            <Typewriter lines={['The Hundred-Eyed Guard', 'That Never Sleeps.']} />
          </h1>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="body-lg mt-8 max-w-[640px] mx-auto">
            Argus builds autonomous AI agents that monitor, detect, and respond to
            DeFi exploits — <span className="text-argus-fg">before damage occurs.</span>{' '}
            Not alerts. Autonomous action.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/protocol-guardian" variant="primary" size="lg">
              View Protocol Guardian →
            </Button>
            <Button href={CONTACT.github} variant="secondary" size="lg" external>
              <Github size={16} /> GitHub ↗
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 items-center">
            <span className="eyebrow-sm text-argus-muted">Trusted signals</span>
            {TRUST_BADGES.map((b) => (
              <span
                key={b}
                className="font-mono text-[12px] text-argus-fg-soft inline-flex items-center gap-2"
              >
                <span className="h-1 w-1 rounded-full bg-argus-accent" />
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Eye + live feed — centred 2-col row under the centred headline. */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center text-left">
          <Reveal delay={0.1} y={28}>
            <div className="relative flex items-center justify-center">
              <EyeIcon size="xl" />
              <div className="absolute inset-0 -z-10 bg-radial-accent rounded-full" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <LiveFeed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
