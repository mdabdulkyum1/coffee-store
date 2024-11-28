/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'coffee': '#372727',
          'coffeeBtn': '#e3b577'
      },
      backgroundImage:{
        'navbarBg': "url('/src/assets/more/navbarBg.jpg')",
      }
    },
  },
  plugins: [require('daisyui'),],
}