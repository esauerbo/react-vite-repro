/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003181',
        secondary: '#2074D5',
        text: '#FBD8BF',
        contrast: {
          100: '#f7dba8',
          200: '#f7cc81',
          300: '#fcb73f',
          400: '#FF9900'
        },
        dark: '#232F3E',
        white: '#FFFFFF',
        neutral: {
          100: '#FFFFFF',
          200: '#F1F3F3',
          300: '#D4DADA',
          400: '#232F3E',
          500: '#161E2D',
        }
      },
    },
  },
  plugins: [],
}

