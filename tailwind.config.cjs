/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        ocean: "var(--color-ocean)",
        light: "var(--color-light)",
      },
    },
  },
  plugins: [],
  variants: {
    backgroundColor: ["active"],
  },
};
