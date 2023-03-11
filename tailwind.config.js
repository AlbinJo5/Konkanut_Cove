const { transform } = require('@babel/core');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        sans: ['Lora', 'Helvetica', 'Arial', 'sans-serif'],
        sansation: ['Sansation', 'Helvetica', 'Arial', 'sans-serif'],
        mullish: ['Mullish', 'Arial', 'sans-serif'],
      },

      screens:{
        'xs':'480px'
      },

      keyframes:{
        "carousel-1-l":{
         '0%':{transform:'translateX(0%)'},
         '100%':{transform:'translateX(100%)'}
        },
        "carousel-1-r":{
          '0%':{transform:'translateX(100%)'},
          '100%':{transform:'translateX(0%)'}
         },
         "scale-dropdown":{
            "0%":{transform:'scale(0)'},
            "100%":{transform:'scale(1)'}
         }
      }
    },
    content: [
      "./node_modules/flowbite-react/**/*.js",
      "./pages/**/*.{ts,tsx}",
      "./public/**/*.html",
    ],
    animation:{
      "carousel-1-l":"carousel-1-l 1s forwards",
      "carousel-1-r":"carousel-1-r 1s forwards",
      "scale-dropdown":"scale-dropdown 8s forwards"
    },
    ripple: theme => ({
      colors: theme('colors'),
      modifierTransition: 'background 0.2s',
      activeTransition: 'background 0.1s'
   }),
  },
  plugins: [
    require('tailwindcss-ripple')(),
    require("flowbite/plugin")
  ],
  
}