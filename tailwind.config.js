/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './index.html',
    './**/*.{html,ts}',
    './src/*.{html,ts}',
    './src/**/*.{html,ts}',
    './src/scripts/*.{html,ts}',
  ],
  darkMode: "media",
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    'colors': {
      'plightBlack': '#7e7e7e',
      'blacklight': '#242424',
      'blackcardlight': '#2f2f2f',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'emerald': colors.emerald,
      'indigo': colors.indigo,
      'yellow': colors.yellow,
      'green': colors.emerald,
      'purple': colors.violet,
      'pink': colors.fuchsia,
      'orange': colors.orange,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}