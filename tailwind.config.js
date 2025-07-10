// tailwind.config.js
import typography from '@tailwindcss/typography'

 export default { // module.exports =
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        contentBg: "#FFFFFF",
        headerFooterBg: "#315B7A",  // #626262 gris medio, más elegante #004987
        accent: "#A3C4F3",
        textPrimary: "#333333",
        textSecondary: "#4D4D4D",
        borderLight: "#DDDDDD",
      },
    },
  },
  plugins: [
    typography, 
  ],
};
