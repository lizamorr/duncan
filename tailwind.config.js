const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {},
    },
    colors: {
      customBlue: "#ff5733",
      customPink: "#cc8983",
      customRed: "#e20000",
      customLightPink: "#eacfcc",
      black: "#000000",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
