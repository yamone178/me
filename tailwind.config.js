/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx}' 
   ],
  theme: {
    screens:{
      "sm": '480px',
     "md": '768px',
      "lg": '976px',
      "xl": '1366px',
      '2xl': '1920px'
    },
    fontSize : {
      'title' : "40px",
      'sub-title': "30px", 
      'base'  : "20px",
    },
    colors : {
      'dark-bg' : '#1E293B',
      'dark-text' : '#94A3B8',
      primary:{
        'soft': '#e879f9',
        'dark': '#86198f'
      },
      secondary : '#1f2937'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}
