const { yellow } = require("@mui/material/colors");

//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      darkPurple:"#2D0138",
      lightPurple: "#8832A0",
      white :"#FFFFFF",
      yellow :"#FFC855",
      pink :"#FE2260",
      black :"#000000"
    },
    
    extend: {},
  },
  plugins: [],
}   