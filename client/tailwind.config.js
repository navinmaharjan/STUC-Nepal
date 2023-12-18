/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
     
    },
    extend: {
      colors: {
        redbrand: "#F3140F",
        bluebrand: "#4582C7",
        darkblue: "#2068A9",
        offWhite: "#F5F5F6",
        gray: "#6D6E7F",
      },
    },
  },
  plugins: [],
};
