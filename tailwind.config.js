/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'button': 'var(--color-button)',
        'secondary': 'var(--color-secondary)',
        'background': 'var(--color-background)',
        'hover': 'var(--color-hover)',
        'hover-text': 'var(--color-hover-text)',
        'text': 'var(--color-text)'
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