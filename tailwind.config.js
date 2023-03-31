/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
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
