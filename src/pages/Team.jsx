import { Github, Twitter, Mail, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import HeroBackdrop from '../components/ui/HeroBackdrop.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import AccentBox from '../components/ui/AccentBox.jsx';
import AvatarMonogram from '../components/ui/AvatarMonogram.jsx';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import { FOUNDERS, OPEN_ROLES } from '../data/team.js';
import { CONTACT } from '../data/contact.js';

export default function Team() {
  return (
    <>
      <SEO
        title="Team — Argus"
        description="Built by j12s — two operators from São Paulo. Co-founders, open roles, and how to get in touch."
        path="/team"
      />

      {/* Hero */}
      <section className="relative pt-32 md:pt-36 pb-12 overflow-hidden">
        <HeroBackdrop />
        <div className="wrap px-5 md:px-10 lg:px-16">
          <Reveal><SectionLabel>The Team</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h-display mt-5 text-argus-fg max-w-4xl">
              Built by operators who couldn't find what they needed
              <span className="text-argus-accent"> in the market.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-lg mt-6 max-w-2xl">
              j12s is a two-person team based in São Paulo. We met at the Colosseum Hackathon,
              partnered through SuperTeamBR, and shipped four products in 90 days.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="px-5 md:px-10 lg:px-16 py-16">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-5">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <Card accentBar className="p-6 md:p-8 h-full">
                  <div className="flex items-start gap-5">
                    <AvatarMonogram initials={f.initials} src={f.photo} size={96} />
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display font-bold text-2xl text-argus-fg">{f.name}</h2>
                      <p className="font-mono text-[12px] text-argus-muted mt-1 uppercase tracking-wider">
                        {f.role}
                      </p>
                      <p className="text-[12px] text-argus-muted mt-1.5 flex items-center gap-1.5 font-mono">
                        <MapPin size={12} /> {f.location}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        {f.links.github && (
                          <a
                            href={f.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-argus-muted-2 hover:text-argus-accent"
                            aria-label={`${f.name} GitHub`}
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {f.links.twitter && (
                          <a
                            href={f.links.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-argus-muted-2 hover:text-argus-accent"
                            aria-label={`${f.name} Twitter`}
                          >
                            <Twitter size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="body-md mt-6 text-argus-fg/90 italic">"{f.quality}"</p>
                  <ul className="mt-5 space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 body-sm">
                        <span className="mt-2 h-1 w-1 rounded-full bg-argus-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <AccentBox className="mt-10">
              <p className="font-mono text-sm md:text-base text-argus-fg leading-relaxed">
                Met at <span className="text-argus-accent">Colosseum Hackathon</span> → partnered through{' '}
                <span className="text-argus-accent">SuperTeamBR</span> → shipped{' '}
                <span className="text-argus-accent">4 products</span> across{' '}
                <span className="text-argus-accent">4 hackathons</span> in{' '}
                <span className="text-argus-accent">90 days</span> as a 2-person team.
              </p>
            </AccentBox>
          </Reveal>
        </div>
      </section>

      {/* Honest gap */}
      <section className="px-5 md:px-10 lg:px-16 py-12">
        <div className="wrap">
          <Reveal>
            <div className="relative rounded-xl border border-argus-yellow/30 bg-argus-yellow/[0.08] p-6 md:p-8 overflow-hidden">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-argus-yellow">
                Honest gap
              </div>
              <p className="mt-3 font-display font-bold text-xl md:text-2xl text-argus-fg">
                We're technical founders.
              </p>
              <p className="body-md mt-3 max-w-2xl">
                We need a GTM/BD person to open protocol partnerships at scale. If that's you — or if
                you know that person — talk to us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Open roles */}
      <section className="px-5 md:px-10 lg:px-16 py-16">
        <div className="wrap">
          <Reveal><SectionLabel>Open Roles</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              Build the autonomous security layer <span className="text-argus-accent">with us.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {OPEN_ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <Card accentBar className="p-6 h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-argus-accent">
                      {r.type}
                    </span>
                    <ArrowUpRight size={16} className="text-argus-muted" />
                  </div>
                  <h3 className="h-card mt-4 text-argus-fg">{r.title}</h3>
                  <p className="body-sm mt-4">{r.description}</p>
                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Argus · ${r.title}`)}`}
                    className="link-arrow mt-6 inline-flex"
                  >
                    Apply via email →
                  </a>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 md:px-10 lg:px-16 py-20">
        <div className="wrap">
          <Reveal>
            <div className="relative rounded-xl border border-argus-accent/30 bg-argus-dark/60 p-8 md:p-12 overflow-hidden shadow-argus">
              <span className="accent-bar" />
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-argus-accent">
                    Get in touch
                  </span>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mt-3 text-argus-fg">
                    Tell us what you're building.
                  </h3>
                  <p className="body-md mt-3 max-w-xl">
                    Protocol teams, security researchers, investors — we read every message.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button href={`mailto:${CONTACT.email}`} variant="primary">
                    <Mail size={16} /> Email us
                  </Button>
                  <Button href={CONTACT.scheduleUrl} variant="secondary" external>
                    <Calendar size={16} /> Book a call
                  </Button>
                  <Button href={CONTACT.github} variant="ghost" external>
                    <Github size={16} /> GitHub ↗
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
