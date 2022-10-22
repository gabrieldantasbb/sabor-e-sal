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
        gray: "9F9F9F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [
  ],
}