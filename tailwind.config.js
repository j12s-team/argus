/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        argus: {
          bg: v('argus-bg'),
          'bg-2': v('argus-bg-2'),
          accent: v('argus-accent'),
          'accent-strong': v('argus-accent-strong'),
          'accent-dim': v('argus-accent-dim'),
          card: v('argus-card'),
          'card-2': v('argus-card-2'),
          border: v('argus-border'),
          'border-bright': v('argus-border-bright'),
          muted: v('argus-muted'),
          'muted-2': v('argus-muted-2'),
          fg: v('argus-fg'),
          'fg-soft': v('argus-fg-soft'),
          red: v('argus-red'),
          yellow: v('argus-yellow'),
          blue: v('argus-blue'),
          purple: v('argus-purple'),
          dark: v('argus-dark'),
          // Always-dark tokens for terminal/code surfaces that should stay dark
          // even in light mode (intentional design — code reads better dark).
          'code-bg': v('argus-code-bg'),
          'code-bg-2': v('argus-code-bg-2'),
          'code-fg': v('argus-code-fg'),
          'code-muted': v('argus-code-muted'),
          'code-border': v('argus-code-border'),
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        argus: '0 0 24px rgba(0,255,178,0.12)',
        'argus-lg': '0 0 48px rgba(0,255,178,0.20)',
        'argus-glow': '0 0 80px rgba(0,255,178,0.30)',
        'card-light': '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(15, 23, 42, 0.06)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'radial-accent':
          'radial-gradient(circle at 50% 0%, rgb(var(--argus-accent) / 0.12), transparent 60%)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
        eyeBlink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '94%, 98%': { transform: 'scaleY(0.05)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
        eyeBlink: 'eyeBlink 6s ease-in-out infinite',
        scanLine: 'scanLine 4s linear infinite',
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
