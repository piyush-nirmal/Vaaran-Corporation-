/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vrnNavy: {
          DEFAULT: '#0F2942', // Deep high-contrast executive navy for accessible text & dark elements
          deep: '#0F2942',
          dark: '#081726',
          light: '#1E3A5F',
          tint: '#F0F5FA',
          subtle: '#E2EAF2',
        },
        vrnSky: {
          DEFAULT: '#8ACFF8', // Brand sky blue accent
          light: '#BAE6FD',
          dark: '#0284C7',
          deep: '#0369A1',
        },
        vrnOrange: {
          DEFAULT: '#F58220',
          hover: '#E06F0F',
          light: '#FFF7ED',
          border: '#FDBA74',
        },
        vrnCyan: {
          DEFAULT: '#00AEEF',
          dark: '#0284C7',
          light: '#F0F9FF',
          tint: '#E0F2FE',
        },
        vrnViolet: {
          DEFAULT: '#8D217B',
          light: '#FDF2F8',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Inter', 'sans-serif'],
        display: ['var(--font-heading)', 'Inter', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        heading: '-0.02em',
        subtle: '-0.01em',
        label: '0.04em',
      },
      lineHeight: {
        heading: '1.15',
        tight: '1.1',
        body: '1.65',
      },
      boxShadow: {
        'navy-sm': '0 2px 8px -2px rgba(32, 49, 130, 0.08)',
        'navy-md': '0 8px 24px -4px rgba(32, 49, 130, 0.12), 0 2px 6px -1px rgba(32, 49, 130, 0.06)',
        'navy-lg': '0 16px 36px -6px rgba(32, 49, 130, 0.16), 0 4px 12px -2px rgba(32, 49, 130, 0.08)',
        'navy-xl': '0 24px 48px -12px rgba(32, 49, 130, 0.22)',
      },
      borderRadius: {
        'sharp': '4px',
        'smooth': '16px',
      },
      fontSize: {
        'fluid-hero': ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'fluid-section': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'fluid-subheading': ['clamp(1.125rem, 1.8vw, 1.35rem)', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
