/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish' , 'sans-serif']
      },

      colors: {
        title: '#B52184',
        text: '#312D64',
        bg_white: '#F9F4FB',
        gradientLeft: '#343193',
        gradientRight: '#302C63',
        borderColor: '#312D64'
      }
    },
  },
  plugins: [],
}

