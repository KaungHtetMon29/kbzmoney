/** @type {import('tailwindcss').Config} */
import test from "./public/";
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
        BG1: "url('/BG1.png')",
        BG2: "url('/Hero5.png')",
      },
    },
  },
  plugins: [],
};
