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
      green: "#3FFFB2",
      aqua: "#3EECFF",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-cera-pro)"],
      },
    },
  },
  plugins: [],
};
