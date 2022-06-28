/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {

    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        utama: '#14b8a6',
        gelap: '#0f172a',
        kedua: '#64748b',
      },

      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}