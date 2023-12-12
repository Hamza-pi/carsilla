/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary:'#4A85F6',
        greyBg: "#F9F9F9",
        btnColor: "#A41F1F",
        textDark: "#00193B",
        textMd: "#273241",
        textLight: "#515C6B",
        textGrey: "#8D8D99",
        bGrey: "#E2E1E1",
        textBlue: "#035ECF",
        primary: "#A41F1F",
        borderColor:"#F1F1F1",
        neutral:"#0A0A0A",
        neutralGrey:"#757575",
        textDarkG:"#404040",
        lightBlue:"#EFF4FA",
        textBluish:"#222B45",
        darkGrey:"#717171",
        lightGrey:"#8F9BB3",
        pink:"#FF5470",
        green:"#02A189",
        darkBtn:"#0E335F",
        profileCard:"#6E757F",
      },
      boxShadow: {
        sideShadow: "0px 3px 14px 0px rgba(226, 225, 225, 0.7672)",
        btnShadow:"2.5px 4.300000190734863px 10px 0px #0000001A",
        boxShadow:"0px 3px 14px 0px #E2E1E1C4",
        btnShadow2:"0px 1px 10px 0px #02CAAB5B",
        pageBtn:"0px 1px 6px 0px #035ECF48"
      },
      fontFamily: {
        archivo: "Archivo, sans-serif",
        openSans: "Open Sans,sans-serif",
        roboto: "Roboto,sans-serif",
        sourceSans: "Soruce Sans 3,sans-serif",
      },
    },
  },
  plugins: [],
};
