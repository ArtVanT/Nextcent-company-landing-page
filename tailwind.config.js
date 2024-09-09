/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        Black: "#263238",
        D_Grey: "#4D4D4D",
        Grey: "#717171",
        L_Grey: "#89939E",
        Grey_blue: "#ABBED1",
        Silver: "#F5F7FA",
        White: "#FFFFFF",
        Primary: "#28CB8B",
        Secondary: "#263238",
        Info: "#2194f3",
        Silver: "#F5F7FA",
        Tint4: "#C8E6C9"
      },
      fontFamily: {
        'Inter': ["Inter", "sans-serif"],
        'Montserrat': ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
}

