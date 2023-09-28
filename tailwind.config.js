/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', "sans-serif"],
      },
      colors: {
        'veryBlue':'#2A4DD0', 
        'veryGreen':'#4CA154', 
        'veryDark':'#111729', 
        'veryGray':'#223344', 
        'veryDesaturedGray':'#909193', 
        'lightWhite':'#F2F9FE', 
        'veryWhite':'#FFFFFF', 
      }
    },
  },
  plugins: [],
}

