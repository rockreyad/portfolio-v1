/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
