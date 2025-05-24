/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["yekanbakh"],
        vazir: ["vazir"],
      },
      colors: {
        main: {
          50: "#f0f5fe",
          100: "#dde7fc",
          200: "#c2d6fb",
          300: "#98bcf8",
          400: "#6799f3",
          500: "#4474ed",
          600: "#234ce0",
          700: "#2642cf",
          800: "#2537a8",
          900: "#233385",
          950: "#1a2251",
        },
        secondary: {
          cyan: "#23cfe0",
          purple: "#7d23e0",
          orange: "#f4a261",
          green: "#23e04b",
        },
      },
    },
  },
  plugins: [],
};
