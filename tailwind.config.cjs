/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        it: '0 0 10px rgba(0, 0, 0, 0.3)'
      },
    },
    container: {
      center: true
    },
  },
  plugins: [],
}
