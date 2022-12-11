/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DarkBlue:'#191A23',
        BabyBlue:"#5CC3E0",
        purple:'#563E91',
        grey:'#B6B9D4',
        transparentGrey:"#595F6D",
        DarkGray:"#B6B9D4",
        anotherGrey:'#5A5E6E',
        DarkerGrey:"#484959",
        pink:'#EA582D',
        orange:'#EA582D'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'custom': '42px -43px 240px -88px #5CC3E0',
      }
    },
  },
  plugins: [],
}
