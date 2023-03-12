/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Colors
      colors: {
        dark: {
          100: "#7d7d7d",
          200: "#b9b9b9",
          300: "#212121",
          400: "#1D1B1F",
          500: "#1B191C", // Navbar
          600: "#18171B",
          700: "#242124",
          800: "#141417",
          900: "#1F1C1F",
        },

        light: {
          100: "#D9D8D9",
          200: "#2a8be8",
          300: "#c1c1c1",
          400: "#6E6871",
          500: "#515151",
          600: "#CDD2D8",
          700: "#555555",
          800: "#211F23",
          900: "#646265",
        },
      },
    },
  },
  plugins: [],
};
