/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "src./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["OpenSans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        dosis: ["Dosis", "Ubuntu", "sans-serif"],
      },
      colors: {
        // "blue-robin": "#07D7D3",
        "blue-robin": "#42CCDF",
        "blue-pitcon": "#59ACDC",
        "blue-green": "#2362AC",
        "blue-steel": "#3498DB",
        "blue-uranian": "#B6DEF5",
        "blue-light": "#A4D2E7",
        "green-steel": "#00AF80",
        "white-100": "#FEFEFE",
      },
      screens: {
        phone: "450px",
        // => @media (min-width: 450px) { ... }

        laptop: "1150px",
        // => @media (min-width: 1100px) { ... }
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require('@tailwindcss/typography'),
  ],
};
