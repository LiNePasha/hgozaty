/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      listStyleType: {
        arabic : 'arabic-indic'
      },
      animation : {
        slideLeft : 'slideLeft 500ms linear',
        slideRight : 'slideRight 500ms linear',
      },
      keyframes: {
        slideLeft: {
          '0%' : {transform: 'translateX(-100%)'},
          '100%' : {transform: 'translateX(0)'},
        },
        slideRight : {
          '0%' : {transform: 'translateX(100%)'},
          '100%' : {transform: 'translateX(0)'},
        }
      }
    },
  },
  plugins: [],
}
