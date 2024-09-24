/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fefefe",
        primary: "#0eb4bd",
        secondary: "#d3e9ff",
        accent: "#92d400",
        text: "#4d4c5f",
      },
    },
  },
  plugins: [],
};
