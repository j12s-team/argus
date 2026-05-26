import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider.jsx';

/* Sun/Moon toggle. The icon shown is the theme you'd switch INTO,
 * matching the convention of macOS, GitHub, Vercel, etc. */
export default function ThemeToggle({ className = '', size = 'md' }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  const sz = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      className={`${sz} inline-flex items-center justify-center rounded-md border border-argus-border bg-argus-card text-argus-muted-2 hover:text-argus-accent hover:border-argus-accent/40 transition-colors ${className}`}
    >
      {/* Show the icon for the OPPOSITE mode = what clicking will give you */}
      <span className="relative h-4 w-4">
        <Sun
          size={16}
          className={`absolute inset-0 transition-all ${
            isLight ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          size={16}
          className={`absolute inset-0 transition-all ${
            isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
          }`}
        />
      </span>
    </button>
  );
}
