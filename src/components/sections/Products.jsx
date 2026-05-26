import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '../ui/SectionLabel.jsx';
import Reveal from '../ui/Reveal.jsx';
import Badge from '../ui/Badge.jsx';
import { PRODUCTS } from '../../data/products.js';

export default function Products() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-3xl">
          <Reveal><SectionLabel>The Stack</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-4">
              Four products. <span className="text-argus-accent">One security thesis.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link
                to={`/${p.slug}`}
                className={`group relative block h-full rounded-lg border bg-argus-card overflow-hidden transition-all duration-300 hover:shadow-argus ${
                  p.flagship
                    ? 'border-argus-accent/40 shadow-argus'
                    : 'border-argus-border hover:border-argus-accent/40'
                }`}
              >
                <span className="accent-bar" />
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: p.chainColor }}
                      />
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-argus-muted">
                        {p.chain}
                      </span>
                    </div>
                    {p.flagship && <Badge tone="accent">Flagship</Badge>}
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-argus-fg group-hover:text-argus-accent transition-colors">
                      {p.name}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-argus-muted group-hover:text-argus-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>

                  <p className="body-md mt-3">{p.tagline}</p>

                  <div className="mt-6 pt-5 border-t border-argus-border flex flex-wrap items-center gap-3">
                    <Badge tone={p.statusTone} dot pulse={p.statusTone === 'live'}>
                      {p.status}
                    </Badge>
                    {p.partners?.length > 0 && (
                      <span className="font-mono text-[11px] text-argus-muted-2">
                        Partner: {p.partners.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
