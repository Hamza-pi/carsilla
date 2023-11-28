/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        greyBg:"#F9F9F9",
        btnColor:"#A41F1F",
        textDark:"#00193B",
        textMd:"#273241",
        textLight:"#515C6B",
        textGrey:"#8D8D99",
        bGrey:"#E2E1E1",
        textBlue:"#035ECF",
        primary:"#A41F1F"
      },
      fontFamily:{
        archivo:"Archivo, sans-serif",
        openSans:'Open Sans,sans-serif',
        roboto:"Roboto,sans-serif",
        sourceSans:"Soruce Sans 3,sans-serif"
      }
    },
  },
  plugins: [],
};
