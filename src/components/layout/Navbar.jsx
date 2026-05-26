import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Github, ArrowUpRight } from 'lucide-react';
import EyeMark from '../ui/EyeMark.jsx';
import Button from '../ui/Button.jsx';
import { PRODUCTS } from '../../data/products.js';
import { CONTACT } from '../../data/contact.js';

const linkBase =
  'font-mono text-[12px] uppercase tracking-[0.16em] text-argus-muted-2 hover:text-white transition-colors';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProdOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-argus-bg/85 backdrop-blur-xl border-b border-argus-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="wrap flex items-center justify-between px-5 md:px-10 lg:px-16 h-16">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Argus home">
          <span className="text-argus-accent group-hover:drop-shadow-[0_0_8px_rgba(0,255,178,0.5)] transition-all">
            <EyeMark size={22} />
          </span>
          <span className="font-display font-bold tracking-[0.18em] text-white text-[15px]">
            ARGUS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setProdOpen(true)}
            onMouseLeave={() => setProdOpen(false)}
          >
            <button
              className={`${linkBase} flex items-center gap-1`}
              onClick={() => setProdOpen((v) => !v)}
            >
              Products <ChevronDown size={14} className="opacity-70" />
            </button>
            {prodOpen && (
              <div className="absolute left-0 top-full pt-3 w-[320px]">
                <div className="rounded-lg border border-argus-border bg-argus-card shadow-argus-lg overflow-hidden">
                  <span className="block h-[2px] bg-gradient-to-r from-argus-accent/0 via-argus-accent to-argus-accent/0" />
                  <ul className="py-2">
                    {PRODUCTS.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/${p.slug}`}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-argus-card-2 group"
                        >
                          <span
                            className="mt-1.5 h-2 w-2 rounded-full"
                            style={{ background: p.chainColor }}
                          />
                          <span className="flex-1">
                            <span className="block font-mono text-[13px] text-white group-hover:text-argus-accent">
                              {p.name}
                            </span>
                            <span className="block text-[11px] text-argus-muted mt-0.5">
                              {p.chain} · {p.status}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/team" className={linkBase}>
            Team
          </NavLink>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} flex items-center gap-1.5`}
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} flex items-center gap-1`}
          >
            Docs <ArrowUpRight size={13} className="opacity-70" />
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/protocol-guardian" variant="primary" size="sm">
            View Protocol Guardian →
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-argus-border bg-argus-bg">
          <div className="px-5 py-6 flex flex-col gap-1">
            <div className="text-[10px] uppercase tracking-[0.18em] text-argus-muted font-mono px-2 mt-2 mb-1">
              Products
            </div>
            {PRODUCTS.map((p) => (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                className="flex items-center justify-between px-2 py-3 rounded-md hover:bg-argus-card"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: p.chainColor }} />
                  <span className="font-mono text-sm text-white">{p.name}</span>
                </span>
                <span className="text-[10px] text-argus-muted uppercase tracking-wider">
                  {p.chain}
                </span>
              </Link>
            ))}

            <div className="divider my-4" />

            <Link to="/team" className="px-2 py-3 font-mono text-sm text-white hover:text-argus-accent">
              Team
            </Link>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-3 font-mono text-sm text-white hover:text-argus-accent flex items-center gap-2"
            >
              <Github size={15} /> GitHub
            </a>

            <div className="mt-4">
              <Button to="/protocol-guardian" variant="primary" size="md" className="w-full">
                View Protocol Guardian →
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
