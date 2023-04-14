/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: "#3E8BFF",
      lightGreen: "#3FFFB2",
      aqua: "#3EECFF",
      gray: "#5A5D7A",
      lightGray: "#DFDEE2",
      red: "#F96256",
      yellow: "#FDBC3C",
      green: "#32C948",
      white: "#F7F7F7",
      gold: "#E6D184",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-cera-pro)"],
      },
    },
  },
  plugins: [],
};
