/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apcoBlue: '#0F2E5A',
        apcoRed: '#E31E24',
        apcoDark: '#111827',
        apcoGray: '#F3F4F6',
        apcoMuted: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
