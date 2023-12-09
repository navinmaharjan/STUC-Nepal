/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redbrand: "#F3140F",
        bluebrand: "#4582C7",
        offWhite: "#F5F5F6",
      },
    },
  },
  plugins: [],
}