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
        'coffee-cupBg': "url('/src/assets/more/3.png')",
        'productBg': "url('/src/assets/more/1.png')"
      },
    },
  },
  plugins: [require('daisyui'),
    function({ addUtilities  }){
      addUtilities({
        '.text-shadow': {
          textShadow: '-2px -1px 11px rgba(0,0,0,0.78)',
        },
      })
    }
  ],
}