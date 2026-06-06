import { Radio, Cpu, BookOpen } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import ProductHero from '../components/sections/ProductHero.jsx';
import TechStack from '../components/sections/TechStack.jsx';
import ProductCTA from '../components/sections/ProductCTA.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import Terminal from '../components/ui/Terminal.jsx';
import AccentBox from '../components/ui/AccentBox.jsx';
import { PRODUCT_BY_SLUG } from '../data/products.js';

const PILLARS = [
  {
    icon: Radio,
    title: 'Solana-native streaming',
    detail:
      'Solana Web3.js streams account writes, transaction sequences, and program-level activity across 15+ DeFi protocols.',
  },
  {
    icon: Cpu,
    title: 'AI sentinel loop',
    detail:
      'Continuously evaluates protocol state against learned baselines and an exploit knowledge base. Surfaces anomalies, not noise.',
  },
  {
    icon: BookOpen,
    title: 'On-chain Anchor registry',
    detail:
      'A devnet Anchor program registers monitored protocols, signing rotations, and operator authorities — the trust anchor of the sentinel.',
  },
];

export default function SolGuard() {
  const p = PRODUCT_BY_SLUG['solguard'];
  return (
    <>
      <SEO
        title="SolGuard — Argus"
        description="AI security sentinel monitoring 15+ Solana DeFi protocols. Submitted to Colosseum Frontier."
        path="/solguard"
      />
      <ProductHero
        product={p}
        headline="AI Security Sentinel for the Solana Ecosystem."
      />

      <section className="section">
        <div className="wrap">
          <Reveal><SectionLabel>What it monitors</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4 max-w-3xl">
              <span className="text-argus-accent">15+</span> Solana DeFi protocols. Built through SuperTeamBR.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {PILLARS.map((pil, i) => {
              const Icon = pil.icon;
              return (
                <Reveal key={pil.title} delay={i * 0.07}>
                  <Card accentBar className="p-6 h-full">
                    <span className="h-10 w-10 rounded-md border border-argus-border bg-argus-dark/60 flex items-center justify-center text-argus-accent">
                      <Icon size={18} />
                    </span>
                    <h3 className="h-card mt-4 text-argus-fg">{pil.title}</h3>
                    <p className="body-sm mt-3">{pil.detail}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal><SectionLabel>On-chain Registry</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-4">
                Anchor program. <span className="text-argus-accent">Devnet today.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-md mt-5 max-w-md">
                SolGuard publishes monitored protocols, operator signers, and pause authorities into
                an on-chain Anchor registry. The sentinel reads its scope from the registry — no off-chain
                surface to compromise.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Terminal
              title="solguard — anchor"
              lines={[
                'anchor deploy --provider.cluster devnet',
                { label: 'Program'.padEnd(20), value: 'SolGuardRegistry' },
                { label: 'Cluster'.padEnd(20), value: 'devnet' },
                { label: 'Protocols watched'.padEnd(20), value: '15+', tone: 'accent' },
                { label: 'Sentinel'.padEnd(20), value: 'running · alpha', tone: 'yellow' },
                'solguard sentinel start --watch all',
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10 lg:px-16 py-16">
        <div className="wrap">
          <Reveal>
            <AccentBox className="max-w-3xl">
              <p className="font-mono text-sm md:text-base text-argus-fg">
                Submitted to <span className="text-argus-accent">Colosseum Frontier</span> — under review.
                Built through the SuperTeamBR network.
              </p>
            </AccentBox>
          </Reveal>
        </div>
      </section>

      <TechStack stack={p.stack} />
      <ProductCTA product={p} />
    </>
  );
}
