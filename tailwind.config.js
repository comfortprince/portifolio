/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
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
}