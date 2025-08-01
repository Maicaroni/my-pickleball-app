/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nuBlue: '#234255',
        nuYellow: '#FFC107',
        nuWhite: '#F8F9FA',
      },
    },
  },
  plugins: [],
}
