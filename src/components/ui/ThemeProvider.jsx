import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'argus-theme';
const ThemeCtx = createContext({ theme: 'dark', setTheme: () => {}, toggleTheme: () => {} });

/* Reads stored preference → falls back to system preference → defaults to dark.
 * Runs synchronously on first paint via an inline <script> in index.html
 * to avoid the flash of incorrect theme. */
function readInitialTheme() {
  if (typeof document === 'undefined') return 'dark';
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {}
  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => readInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
    // Update the browser chrome (mobile address bar) color.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#F8FAFC' : '#0A0A0F');
  }, [theme]);

  // Listen for system changes if user hasn't explicitly chosen one yet.
  useEffect(() => {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch {}
    if (stored) return;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e) => setThemeState(e.matches ? 'light' : 'dark');
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  const setTheme = useCallback((t) => setThemeState(t === 'light' ? 'light' : 'dark'), []);
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === 'light' ? 'dark' : 'light')),
    []
  );

  return (
    <ThemeCtx.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeCtx);
}
