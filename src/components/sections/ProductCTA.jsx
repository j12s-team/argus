import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function ProductCTA({ product }) {
  return (
    <section className="px-5 md:px-10 lg:px-16 py-20">
      <div className="wrap">
        <Reveal>
          <div className="relative rounded-xl border border-argus-accent/30 bg-argus-dark/60 p-8 md:p-12 overflow-hidden shadow-argus">
            <span className="accent-bar" />
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-argus-accent">
                  Get involved
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl mt-3 text-argus-fg">
                  Contribute to {product.name}.
                </h3>
                <p className="body-md mt-3 max-w-xl">
                  {product.name} is open source and under active development. PRs, issues, and integration requests welcome.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {product.links.live && (
                  <Button href={product.links.live} variant="primary" external>
                    <ExternalLink size={15} /> View Dashboard
                  </Button>
                )}
                {product.links.github && (
                  <Button href={product.links.github} variant="secondary" external>
                    <Github size={16} /> GitHub
                  </Button>
                )}
                {product.links.submission && (
                  <Button href={product.links.submission} variant="ghost" external>
                    Submission <ArrowUpRight size={14} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
