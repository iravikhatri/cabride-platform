/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#2B66FF",
        "secondary": "#090E2B",
        "alpha": "#B1C5F8",
        "beta": "#6A6D85",
        "off-gray": "#9D9D9D"
      }
    },
  },
  plugins: [],
}