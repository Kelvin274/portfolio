/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         screens: {
            xs: { min: "362px" },
            ...defaultTheme.screens,
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            clickerScript: ["Clicker-Script", "cursive"],
         },
      },
      plugins: [],
   },
};
