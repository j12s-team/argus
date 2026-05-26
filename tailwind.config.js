/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        argus: {
          bg: '#0A0A0F',
          accent: '#00FFB2',
          'accent-dim': '#00CC8E',
          card: '#12121A',
          'card-2': '#15151E',
          border: '#1E1E30',
          'border-bright': '#2A2A45',
          muted: '#8888AA',
          'muted-2': '#A5A5C0',
          red: '#E24B4A',
          yellow: '#EF9F27',
          blue: '#378ADD',
          purple: '#9945FF',
          dark: '#0F1A16',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        argus: '0 0 24px rgba(0,255,178,0.08)',
        'argus-lg': '0 0 48px rgba(0,255,178,0.18)',
        'argus-glow': '0 0 80px rgba(0,255,178,0.25)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      backgroundImage: {
        'grid-argus':
          "linear-gradient(rgba(30,30,48,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,48,0.5) 1px, transparent 1px)",
        'radial-accent':
          'radial-gradient(circle at 50% 0%, rgba(0,255,178,0.10), transparent 60%)',
      },
      backgroundSize: {
        grid: '40px 40px',
        'grid-sm': '24px 24px',
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
