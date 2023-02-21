module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'karla':['Karla'],
      'source':['Source Code Pro'],
      'inter':['Inter'],
    },
    screens: {
      'xs': '435px',
      // => @media (min-width :435px) { ... } 

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        luxBrown:"#352b2c"
      },
      keyframes:{
        slideRight: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        slideRight: 'slideRight 1s ease-in-out',
        slideLeft: 'slideLeft 1s ease-in-out',
        slideDown:'slideDown 1s ease',
        slideUp:'slideUp 1s ease'
      }
    },
  },
  plugins: [],
}