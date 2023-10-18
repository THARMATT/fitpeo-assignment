/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '300px' },
        'sm': { 'max': '400px' },
        'md':  { 'max': '700px' },
        'lg': { 'max': '800px' },
        'xl':  { 'max': '1200px' },

      },
    },
  },
  plugins: [],
}
