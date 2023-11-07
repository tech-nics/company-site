/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height:{
        'heroh':'calc(100vh - 4rem)'
      },
      animation: {
        'moveLeft': 'moveLeft 3.2s ease-in-out forwards',
        'moveRight': 'moveRight 2s ease-in-out forwards',
        'moveDown': 'moveDown 0.8s forwards',
        'moveUp': 'moveUp 0.8s forwards',
        "arrow": "arrow 1s infinite",
        "blink": " blink 1s  infinite forwards "
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
        moveUp:{
          '0%': { transform: 'translateY(8000px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        arrow:{
            "0%": { fontSize: "1rem" },
            "100%": { fontSize: "5rem" },
        },
        blink:{
            "0%": {opacity: "60%"},
            "100%": {opacity: "100%"}
        }
      },
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
  daisyui: {
    themes: ["light","dark"],
  },
}
