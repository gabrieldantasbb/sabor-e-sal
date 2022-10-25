/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#E28531",
        grey: "#9F9F9F",
        lightBlue: "#31C3E0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        '2xl': '0px 11px 25px rgba(226, 133, 49, 0.25)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [
  ],
}