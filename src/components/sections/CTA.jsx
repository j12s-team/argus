import { Github, Mail, Calendar } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';
import HeroBackdrop from '../ui/HeroBackdrop.jsx';
import EyeMark from '../ui/EyeMark.jsx';
import { CONTACT } from '../../data/contact.js';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <HeroBackdrop />
      <div className="wrap px-5 md:px-10 lg:px-16 text-center">
        <Reveal>
          <span className="inline-flex items-center justify-center text-argus-accent">
            <EyeMark size={36} className="animate-floatY" />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-section mt-6 max-w-3xl mx-auto">
            Secure your protocol's <span className="text-argus-accent">runtime.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-lg mt-6 max-w-2xl mx-auto">
            Argus is building the autonomous security layer for Web3. If you're a protocol team,
            security researcher, or builder — let's talk.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to="/protocol-guardian" variant="primary" size="lg">
              View Protocol Guardian →
            </Button>
            <Button href={CONTACT.github} variant="secondary" size="lg" external>
              <Github size={16} /> GitHub ↗
            </Button>
            <Button href={`mailto:${CONTACT.email}`} variant="secondary" size="lg">
              <Mail size={16} /> Email
            </Button>
            <Button href={CONTACT.scheduleUrl} variant="outline" size="lg" external>
              <Calendar size={16} /> Book a call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
