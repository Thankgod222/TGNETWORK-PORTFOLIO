/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./src/input.css"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "26.5rem",
      },
    },
  },
  plugins: [],
};
