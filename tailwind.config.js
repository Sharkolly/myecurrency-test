/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url("./src/assets/homepage.png")',
        'about': "url('./src/assets/man.png')"
      },
      colors: {
        btnColor: 'rgba(252, 89, 89, 1)',
        mainColor: 'rgba(18, 48, 91, 1)',
        italic: 'rgba(77, 83, 60, 1)',
        sideColor: 'rgba(33, 56, 66, 0.6)',
        jamesRank: 'rgba(21, 41, 52, 1)',
        semiWhite: 'rgba(251, 249, 242, 1)',
        semiCircle: 'rgba(196, 196, 196, 1)',
        footerBg: 'rgba(4, 60, 80, 1)',
        yellowUnderneath: 'rgba(255, 215, 35, 0.1)',
        footerColor: 'rgba(171, 171, 171, 1)',
        footerBorder: 'rgba(93, 101, 68, 1)',
        footerTerms: 'rgba(143, 226, 255, 1)'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif']
      },
      boxShadow: {
        james: '0 100px 100px 0 rgba(0, 0, 0, 0.15)',
        companies: '50px 50px 100px 0 rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}