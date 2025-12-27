/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clivy: {
          purple: '#8B5CF6',
          'purple-dark': '#7C3AED',
          dark: '#0D0D0D',
          'dark-light': '#1A1A1A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
