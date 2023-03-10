/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "var(--color-body)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        primary: "var(--color-primary)",
        light: "var(--color-light)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  plugins: [],
  variants: {
    backgroundColor: ["active"],
  },
};
