/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-primary': 'var(--color-primary)',
        'text-secondary': 'var(--color-secondary)',
        terracotta: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-secondary)',
        },
      },
      fontFamily: {
        'league-spartan': ['var(--font-display)'],
        'sans': ['var(--font-sans)'],
        'merriweather': ['var(--font-serif)'],
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};