/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["apps/client/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#28D07E",
        dark: "#475569",
        about: "#F0FCFA",
      },
      fontFamily: {
        jost: ["Jost"],
        caveat: ["Caveat"],
      },
    },
  },
  plugins: [],
};
