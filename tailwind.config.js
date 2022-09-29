/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#050810",
        darkPrimaryColor: "#576F72",
        darkYellow: "#F4DB7E",
        darkPurple: "#9DA9F1",
        darkOrange: "#FE693E",
        graySoft: "#1F2128",
      },
    },
    fontFamily: {
      AeroSans: ["AeroSans", "sans-serif"],
      MarkPro: ["Mark-Pro", "sans-serif"],
      Din: ["Din", "sans-serif"],
      Hess: ["Hess", "sans-serif"],
    },
  },
  plugins: [],
};
