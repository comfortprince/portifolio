/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#06172b',
        'light-blue': '#92f9f9',
        'light-gray': '#636d89',
        'cream': '#f4feff'    
      },
    },
  },
  plugins: [
    plugin(( { addVariant } ) => { addVariant('active', '&[data-status="active"]') })
  ],
}