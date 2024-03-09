const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "0px",
      // => @media (min-width: 640px) { ... }
      tablet: "700px",
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      notebook: "1356px",
      desktop: "1707px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        colorLogo: "#EDCCAB",
        primary: {
          DEFAULT: "#000000",
        },
      },
    },
    darkMode: "class",
  },
  plugins: [nextui()],
};
