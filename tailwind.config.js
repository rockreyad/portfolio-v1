/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#050810",
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
