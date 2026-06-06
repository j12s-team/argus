import { Link } from 'react-router-dom';
import { Github, Mail, Calendar } from 'lucide-react';
import EyeMark from '../ui/EyeMark.jsx';
import { PRODUCTS } from '../../data/products.js';
import { CONTACT } from '../../data/contact.js';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-argus-border bg-argus-bg">
      <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-argus-accent/50 to-transparent" />
      <div className="wrap px-5 md:px-10 lg:px-16 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Argus home">
            <span className="text-argus-accent">
              <EyeMark size={22} />
            </span>
            <span className="font-mono tracking-[0.18em] text-argus-fg text-[13px]">
              ARGUS
            </span>
          </Link>
          <p className="body-sm mt-4 max-w-xs">
            The hundred-eyed guard that never sleeps. Autonomous runtime security for Web3 protocols.
          </p>
          <p className="text-[11px] font-mono text-argus-muted mt-6">
            © 2026 Argus · Built by j12s · São Paulo, BR
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-argus-muted font-mono mb-3">
            Products
          </div>
          <ul className="space-y-2">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to={`/${p.slug}`} className="text-sm text-argus-muted-2 hover:text-argus-accent">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-argus-muted font-mono mb-3">
            Company
          </div>
          <ul className="space-y-2">
            <li>
              <Link to="/team" className="text-sm text-argus-muted-2 hover:text-argus-accent">
                Team
              </Link>
            </li>
            <li>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-argus-muted-2 hover:text-argus-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://ethglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-argus-muted-2 hover:text-argus-accent"
              >
                ETHGlobal Submission
              </a>
            </li>
            <li>
              <a
                href={CONTACT.podcast}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-argus-muted-2 hover:text-argus-accent"
              >
                The Blockrunner Podcast
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-argus-muted font-mono mb-3">
            Contact
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-argus-muted-2 hover:text-argus-accent inline-flex items-center gap-2"
              >
                <Mail size={14} /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-argus-muted-2 hover:text-argus-accent inline-flex items-center gap-2"
              >
                <Calendar size={14} /> Book a call
              </a>
            </li>
            <li>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-argus-muted-2 hover:text-argus-accent inline-flex items-center gap-2"
              >
                <Github size={14} /> github.com/j12s-team
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-argus-border">
        <div className="wrap px-5 md:px-10 lg:px-16 py-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          <span className="text-[11px] font-mono text-argus-muted">
            "Smart contracts can be formally correct and still be economically unsafe."
          </span>
          <span className="text-[11px] font-mono text-argus-muted">
            v0.1 · runtime security · 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
