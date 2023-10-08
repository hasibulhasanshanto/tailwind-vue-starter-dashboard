/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#ffffff",
          200: "#fffefe",
          300: "#fefdfe",
          400: "#fffdfd",
          500: "#f6fdfc",
          600: "#f2f6fb",
          700: "#f1f2f2",
          800: "#f1f5f9",
          900: "#f8fafc",
        },
        dark: {
          100: "#121212",
          200: "#282828",
          300: "#3f3f3f",
          400: "#575757",
          500: "#717171",
          600: "#8b8b8b",
          light: "#908d96",
        },
        primary: "#ff0000",
      },
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    }, 
  },
  plugins: [require("flowbite/plugin")],
};
