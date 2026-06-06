import { Layers, GitBranch, BarChart3 } from 'lucide-react';
import SEO from '../components/ui/SEO.jsx';
import ProductHero from '../components/sections/ProductHero.jsx';
import TechStack from '../components/sections/TechStack.jsx';
import ProductCTA from '../components/sections/ProductCTA.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Card from '../components/ui/Card.jsx';
import AccentBox from '../components/ui/AccentBox.jsx';
import { PRODUCT_BY_SLUG } from '../data/products.js';

const PILLARS = [
  {
    icon: Layers,
    title: 'Thesis-driven baskets',
    detail:
      'Compose investable baskets from a written thesis. Mosaic translates intent into screened, on-chain executable allocations.',
  },
  {
    icon: GitBranch,
    title: 'Cross-chain context',
    detail:
      'Correlates protocol, sector, and token signals across EVM and Solana — the same allocator view across the whole stack.',
  },
  {
    icon: BarChart3,
    title: 'SosoValue + SoDEX',
    detail:
      'Sector indices (SSI) from SosoValue and SoDEX execution surface plug directly into Mosaic\'s screening and routing.',
  },
];

export default function Mosaic() {
  const p = PRODUCT_BY_SLUG['mosaic'];
  return (
    <>
      <SEO
        title="Mosaic — Argus"
        description="AI-powered on-chain intelligence. Thesis-driven basket construction across chains."
        path="/mosaic"
      />
      <ProductHero
        product={p}
        headline="AI-Powered On-Chain Intelligence. See the Full Picture."
      />

      <section className="section">
        <div className="wrap">
          <Reveal><SectionLabel>What it does</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4 max-w-3xl">
              Cross-chain context for protocols and capital.
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

      {/* AKINDO Scores leaderboard */}
      <section className="section relative">
        <div className="absolute inset-0 -z-10 bg-grid-faint opacity-30" />
        <div className="wrap">
          <Reveal><SectionLabel>AKINDO Scores — Wave 1</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4 max-w-3xl">
              Wave 1 complete. <span className="text-argus-accent">Wave 2 in progress.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-lg border border-argus-border bg-argus-card overflow-hidden">
              <span className="accent-bar" />
              <div className="grid grid-cols-12 gap-2 px-5 md:px-7 py-3 border-b border-argus-border text-[10px] uppercase tracking-[0.18em] text-argus-muted font-mono">
                <div className="col-span-8">Criterion</div>
                <div className="col-span-2 text-right">Score</div>
                <div className="col-span-2">Bar</div>
              </div>
              <ul className="divide-y divide-argus-border/60">
                {p.scores.map((s, i) => (
                  <li key={s.label} className="grid grid-cols-12 gap-2 px-5 md:px-7 py-4 items-center">
                    <div className="col-span-8 text-sm md:text-base text-argus-fg">{s.label}</div>
                    <div className="col-span-2 text-right text-xl md:text-2xl text-argus-accent">
                      {s.value}<span className="text-argus-muted text-sm font-mono">/100</span>
                    </div>
                    <div className="col-span-2">
                      <div className="h-1.5 w-full rounded-full bg-argus-border overflow-hidden">
                        <div
                          className="h-full bg-argus-accent"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <AccentBox className="mt-8 max-w-3xl">
              <p className="font-mono text-sm md:text-base text-argus-fg">
                Wave 2 is open. We're focused on user value lift and UX clarity — the two lowest-scoring axes
                from Wave 1.
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
