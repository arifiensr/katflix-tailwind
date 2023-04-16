/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        cream: '#fff3cd',
        brown: '#2c2727',
        'light-brown': '#3e3939',
        text: '#f6f4f4'
      },
    },
  },
  plugins: [],
}
