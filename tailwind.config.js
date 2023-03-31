/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"],
        delecious: ["Delicious Handrawn", "cursive"],
      },
    },
  },
  plugins: [],
};
