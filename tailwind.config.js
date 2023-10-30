/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      height:{
        'heroh':'calc(100vh - 4rem)'
      },
      animation: {
        'moveLeft': 'moveLeft 3.2s ease-in-out forwards',
        'moveRight': 'moveRight 2s ease-in-out forwards',
        'moveDown': 'moveDown 0.8s forwards',
      },
      keyframes: {
        moveRight:{
          '0%': { transform: 'translateX(800px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        moveLeft:{
          '0%': { transform: 'translateX(-800px)' },
          '100%': { transform: 'translateX(0px)' },
        },
        moveDown: {
          '0%': { transform: 'translateY(-80px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
=======
>>>>>>> 9dd497c391acd36953f791d25043db4cf2d8dcdb
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'about-background': "url('/about-bg.png')"
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
<<<<<<< HEAD
  
=======
>>>>>>> 9dd497c391acd36953f791d25043db4cf2d8dcdb
}
