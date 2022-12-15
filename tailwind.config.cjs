/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainRed: '#fa104a',
      },
    },
    fontFamily: {
      display1: ['Staatliches', 'cursive'],
      display2: ['Lobster Two', 'cursive'],
      body: ['Roboto Slab', 'serif'],
    },
  },
  plugins: [],
};
