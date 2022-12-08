/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display1: ["Staatliches", "cursive"],
      body: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
