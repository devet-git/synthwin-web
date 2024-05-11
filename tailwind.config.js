/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./projects/**/src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#ede8f5",
          2: "#adbbda",
          3: "#8697c4",
          4: "#7091e6",
          5: "#3d52a0",
        },
      },
      spacing: {
        main: "1rem",
      },
      size: {
        main: "10px",
      },
      borderRadius: {
        DEFAULT: "10px",
        none: "0",
      },
    },
  },
  plugins: [],
};
