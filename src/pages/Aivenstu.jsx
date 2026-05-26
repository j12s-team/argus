import { Compass, Code, Rocket, Repeat } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import ProductHero from '../components/sections/ProductHero.jsx';
import TechStack from '../components/sections/TechStack.jsx';
import ProductCTA from '../components/sections/ProductCTA.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import AccentBox from '../components/ui/AccentBox.jsx';
import { PRODUCT_BY_SLUG } from '../data/products.js';

const PHASES = [
  {
    icon: Compass,
    n: '01',
    title: 'Idea → Spec',
    detail:
      'Distill a fuzzy thesis into a single-page spec — problem, target user, riskiest assumption, MVP boundary.',
  },
  {
    icon: Code,
    n: '02',
    title: 'Spec → Code',
    detail:
      'Codegen + scaffolding scripts that produce a runnable prototype from the spec on day one, not week two.',
  },
  {
    icon: Rocket,
    n: '03',
    title: 'Code → Ship',
    detail:
      'Deploy pipeline, observability, and a hackathon-ready demo path. Default-public on day three.',
  },
  {
    icon: Repeat,
    n: '04',
    title: 'Postmortem Loop',
    detail:
      'Every shipped product writes back what worked into Aivenstu. The next build is faster because of this one.',
  },
];

export default function Aivenstu() {
  const p = PRODUCT_BY_SLUG['aivenstu'];
  return (
    <>
      <SEO
        title="Aivenstu — Argus"
        description="The internal engine that ships AI-native Web3 products at speed. Built by j12s."
        path="/aivenstu"
      />
      <ProductHero
        product={p}
        headline="The Internal Engine That Ships AI-Native Web3 Products at Speed."
      />

      <section className="px-5 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="wrap">
          <Reveal><SectionLabel>The phases</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4 max-w-3xl">
              Four phases. <span className="text-argus-accent">One compounding loop.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {PHASES.map((ph, i) => {
              const Icon = ph.icon;
              return (
                <Reveal key={ph.title} delay={i * 0.07}>
                  <Card accentBar className="p-6 md:p-7 h-full">
                    <div className="flex items-center justify-between">
                      <span className="h-10 w-10 rounded-md border border-argus-border bg-argus-dark/60 flex items-center justify-center text-argus-accent">
                        <Icon size={18} />
                      </span>
                      <span className="font-display font-bold text-argus-accent/50 text-2xl">
                        {ph.n}
                      </span>
                    </div>
                    <h3 className="h-card mt-4 text-argus-fg">{ph.title}</h3>
                    <p className="body-md mt-3">{ph.detail}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-16 py-16 md:py-20 relative">
        <div className="absolute inset-0 -z-10 bg-grid-faint opacity-30" />
        <div className="wrap">
          <Reveal>
            <AccentBox className="max-w-3xl">
              <p className="font-display font-bold text-lg md:text-2xl text-argus-fg leading-snug">
                The proof: <span className="text-argus-accent">4 products shipped in 90 days.</span>
                <br />
                <span className="text-argus-muted-2 text-sm md:text-base font-normal font-mono mt-2 block">
                  Aivenstu is why.
                </span>
              </p>
            </AccentBox>
          </Reveal>

          <div className="grid sm:grid-cols-4 gap-3 mt-10">
            {['Protocol Guardian', 'SolGuard', 'Mosaic', 'Aivenstu'].map((n, i) => (
              <Reveal key={n} delay={i * 0.06}>
                <div className="rounded-md border border-argus-border bg-argus-card p-4 text-center">
                  <div className="font-mono text-[11px] text-argus-muted uppercase tracking-widest">
                    Product 0{i + 1}
                  </div>
                  <div className="font-display font-bold text-argus-fg mt-2">{n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechStack stack={p.stack} />
      <ProductCTA product={p} />
    </>
  );
}
