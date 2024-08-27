/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnClr: "#20b8cd",
        btnTextClr: "#191a1a",
        btnClrHover: "#1a7a7a",
        btnClrActive: "#0a4f4f",
        imgBg: '#172527',
        secondaryBg: "#202222",
        secondaryBgHover: "#2f3232",
        primaryBg: "#191a1a",
        defaultBtn: '#2d2f2f',
        defaultBtnHover: '#2f3232',
      }
    },
  },
  plugins: [],
}

