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
          // Always-dark code surfaces — Terminal, LiveFeed, EyeIcon backdrop.
          'code-bg': v('argus-code-bg'),
          'code-bg-2': v('argus-code-bg-2'),
          'code-fg': v('argus-code-fg'),
          'code-muted': v('argus-code-muted'),
          'code-border': v('argus-code-border'),
        },
      },
      fontFamily: {
        // Inter handles every display + body role (xAI discipline).
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // JetBrains Mono fills the Geist Mono slot — eyebrows + code.
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // xAI display ladder.
        'display-xl': ['96px', { lineHeight: '96px', letterSpacing: '-2.4px', fontWeight: '400' }],
        'display-lg': ['72px', { lineHeight: '72px', letterSpacing: '-1.8px', fontWeight: '400' }],
        'display-md': ['48px', { lineHeight: '48px', letterSpacing: '-1.2px', fontWeight: '400' }],
        'display-sm': ['32px', { lineHeight: '36px', letterSpacing: '-0.6px', fontWeight: '400' }],
        'display-xs': ['20px', { lineHeight: '28px', letterSpacing: '0', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption-mono': ['14px', { lineHeight: '20px', letterSpacing: '1.4px', fontWeight: '400' }],
        'caption-mono-sm': ['12px', { lineHeight: '16px', letterSpacing: '1.2px', fontWeight: '400' }],
        'button-md': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      borderRadius: {
        none: '0px',
        sm: '8px',
        md: '8px',
        lg: '8px',
        pill: '9999px',
        full: '9999px',
      },
      maxWidth: {
        wrap: '1280px',
      },
      boxShadow: {
        // The brand uses NO drop shadows. Hairlines carry elevation.
        none: 'none',
      },
      backgroundImage: {
        'radial-accent':
          'radial-gradient(circle at 50% 0%, rgb(var(--argus-accent) / 0.10), transparent 60%)',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
