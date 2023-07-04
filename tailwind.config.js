/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        convert: "tilt 3s ease-in-out"
      },
      keyframes: {
        convert: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          }
        }
      },
      colors: {
        "gray-background": "#f0f2f5"
      }
    },
  },
  plugins: [],
}
