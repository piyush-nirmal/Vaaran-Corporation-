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
          DEFAULT: '#203182',
          dark: '#17235E',
          light: '#2E43A8',
          tint: '#F1F4FD',
          subtle: '#E8ECFA',
        },
        vrnOrange: {
          DEFAULT: '#F58220',
          hover: '#DD6F12',
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
        apcoBlue: '#203182',
        apcoRed: '#F58220',
        apcoDark: '#0F172A',
        apcoGray: '#FFFFFF',
        apcoMuted: '#64748B',
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
