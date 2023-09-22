/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["jost", "sans-serif"],
      },
      colors: {
        contactbar: "#DFF6FF",
        footermail: "#06458D",
        footermain: "#063A78",
        custorange: "#FFB547",
        secblue: "#00B9FF",
        primarybluelight: "#0054A6",
        lightred: "#FF545F",
      },
      backgroundImage: {
        BG1: "url('./dist/img/background.jpg')",
        BG2: "url('./dist/img/background.jpg')",
      },
    },
  },
  plugins: [],
};
