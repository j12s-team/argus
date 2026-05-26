import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import HeroBackdrop from '../ui/HeroBackdrop.jsx';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function ProductHero({ product, headline }) {
  return (
    <section className="relative pt-32 md:pt-36 pb-12 overflow-hidden">
      <HeroBackdrop />
      <div className="wrap px-5 md:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em]"
              style={{ borderColor: `${product.chainColor}55`, color: product.chainColor, background: `${product.chainColor}10` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: product.chainColor }} />
              {product.chain}
            </span>
            <Badge tone={product.statusTone} dot pulse={product.statusTone === 'live'}>
              {product.status}
            </Badge>
            {product.badge && product.badge !== 'SOLANA' && product.badge !== 'INTERNAL' && product.badge !== 'CROSS-CHAIN' && (
              <Badge tone={product.badgeTone || 'accent'}>{product.badge}</Badge>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="h-display mt-6 text-white">{product.name}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-lg mt-5 max-w-3xl text-white/85">{headline || product.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="body-md mt-4 max-w-3xl">{product.blurb}</p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-wrap gap-3">
            {product.links.live && (
              <Button href={product.links.live} variant="primary" size="lg" external>
                <ExternalLink size={15} /> View Live Dashboard
              </Button>
            )}
            {product.links.github && (
              <Button href={product.links.github} variant="secondary" size="lg" external>
                <Github size={16} /> GitHub
              </Button>
            )}
            {product.links.submission && (
              <Button href={product.links.submission} variant="ghost" size="lg" external>
                Submission <ArrowUpRight size={14} />
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
