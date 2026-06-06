import { Eye, Brain, ShieldCheck, Sparkles, Handshake } from 'lucide-react';
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
import { LOOP_STEPS } from '../data/traction.js';

const LAYERS = [
  {
    icon: Eye,
    label: 'Layer 1',
    title: 'Observability',
    items: [
      'Alchemy mempool WebSocket — every pending tx, sub-second',
      'On-chain event indexer for protocol-level state',
      'Wallet behavior tracking (suspicious approvals, dust attacks)',
      'Permissioned action stream for governance & upgrades',
    ],
  },
  {
    icon: Brain,
    label: 'Layer 2',
    title: 'Risk Engine',
    items: [
      'Composite risk score per transaction (0–100)',
      'Contextual analysis — what does this address normally do?',
      'Behavioral baselines per protocol',
      'Cross-tx correlation for multi-step exploits',
    ],
  },
  {
    icon: ShieldCheck,
    label: 'Layer 3',
    title: 'Policy Enforcement',
    items: [
      'Configurable policies — pause, require approval, cancel, alert',
      'On-chain enforcement primitives (Sepolia today)',
      'Operator override + dry-run mode',
      'Audit log of every agent decision',
    ],
  },
  {
    icon: Sparkles,
    label: 'Layer 4',
    title: 'AI Layer',
    items: [
      'Adaptive heuristics tuned to each protocol\'s shape',
      'Anomaly detection over behavioral baselines',
      'RAG knowledge base of 21 historical exploits ($3.7B total)',
      'Contextual classification, false-positive reduction loop',
    ],
  },
];

export default function ProtocolGuardian() {
  const p = PRODUCT_BY_SLUG['protocol-guardian'];

  return (
    <>
      <SEO
        title="Protocol Guardian — Argus"
        description="The autonomous AI agent that guards Ethereum DeFi protocols in real time. Live on Sepolia."
        path="/protocol-guardian"
      />
      <ProductHero
        product={p}
        headline="The AI Agent That Guards Ethereum DeFi — In Real Time."
      />

      {/* 4-step loop */}
      <section className="section">
        <div className="wrap">
          <Reveal><SectionLabel>The Loop</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4 max-w-3xl">
              Monitor → Classify → Simulate → <span className="text-argus-accent">Act.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-4 mt-10">
            {LOOP_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <Card accentBar className="p-6 h-full">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow-sm text-argus-muted">Step {s.n}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-argus-accent animate-pulseDot" />
                  </div>
                  <div className="font-sans text-argus-fg text-[24px] leading-none tracking-[-0.02em] mt-4">
                    {s.title}
                  </div>
                  <p className="body-sm mt-3">{s.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4-layer architecture */}
      <section className="section relative">
        <div className="absolute inset-0 -z-10 bg-grid-faint opacity-30" />
        <div className="wrap">
          <Reveal><SectionLabel>Architecture</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4 max-w-3xl">
              Four layers. <span className="text-argus-accent">One agent loop.</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {LAYERS.map((l, i) => {
              const Icon = l.icon;
              return (
                <Reveal key={l.title} delay={i * 0.07}>
                  <Card accentBar className="p-6 md:p-7 h-full">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-md border border-argus-border bg-argus-dark/60 flex items-center justify-center text-argus-accent">
                        <Icon size={18} />
                      </span>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-argus-accent">
                          {l.label}
                        </div>
                        <div className="text-lg md:text-xl text-argus-fg">
                          {l.title}
                        </div>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {l.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 body-sm">
                          <span className="mt-2 h-1 w-1 rounded-full bg-argus-accent shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contract addresses */}
      <section className="section">
        <div className="wrap grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal><SectionLabel>Deployed Contracts</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-4">
                Live on <span className="text-argus-accent">Sepolia.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body-md mt-5 max-w-md">
                The Argus agent is wired to two contracts on Sepolia: a mock lending pool target and the
                Protocol Guardian enforcement primitive. Watch the agent flag, simulate, and act in real
                time on the live dashboard.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Terminal
              title="contracts — sepolia"
              lines={[
                'argus deploy --network sepolia',
                ...p.contracts.map((c) => ({ label: c.label.padEnd(20), value: c.value })),
                { label: 'Status'.padEnd(20), value: 'verified · active', tone: 'accent' },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* KeeperHub integration */}
      <section className="section">
        <div className="wrap">
          <Reveal><SectionLabel>Partner Integration</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 relative rounded-xl border border-argus-border bg-argus-card overflow-hidden">
              <span className="accent-bar" />
              <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-md border border-argus-border bg-argus-dark/60 flex items-center justify-center text-argus-accent">
                      <Handshake size={18} />
                    </span>
                    <div>
                      <div className="text-lg md:text-xl text-argus-fg">
                        KeeperHub
                      </div>
                      <div className="font-mono text-[12px] text-argus-muted mt-0.5">
                        Inbound integration · #protocol-guardian channel
                      </div>
                    </div>
                  </div>
                  <p className="body-md mt-5">
                    KeeperHub opened a dedicated <span className="font-mono text-argus-accent">#protocol-guardian</span>{' '}
                    channel inside their #partners Discord and invited a reference integration PR. We're shipping
                    the first version of that integration now — Protocol Guardian becomes a callable
                    enforcement primitive any KeeperHub job can route into.
                  </p>
                </div>
                <AccentBox tone="accent">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-argus-accent">
                    Status
                  </div>
                  <div className="text-argus-fg mt-2 font-mono text-sm">
                    Reference PR in progress
                  </div>
                  <div className="text-argus-muted text-xs mt-1 font-mono">
                    inbound · zero outbound
                  </div>
                </AccentBox>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TechStack stack={p.stack} />
      <ProductCTA product={p} />
    </>
  );
}
