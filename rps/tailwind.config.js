/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors:{
        'grad-1':'hsl(214, 47%, 23%)',
        'grad-2':'hsl(237, 49%, 15%)',
        'ScissorsGradient-from':'hsl(39, 89%, 49%)',
        'ScissorsGradient-to':'hsl(40, 84%, 53%)',
        'DarkText': 'hsl(229, 25%, 31%)',
        'ScoreText': 'hsl(229, 64%, 46%)',
        'HeaderOutline': 'hsl(217, 16%, 45%)',
        'paperFrom':'hsl(230, 89%, 62%)',
        'paperTO':'hsl(230, 89%, 65%)',
        'spockFrom':'hsl(189, 59%, 53%)',
        'spockTo':'hsl(189, 58%, 57%)'
      },
      screens:{
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        'xs':{'max':'375px'}
      },
    extend: {
      backgroundImage:{
        'rad-gradient':'radial-gradient(var(--tw-gradient-stops))'
      }
    },
  },
  plugins: [],
}