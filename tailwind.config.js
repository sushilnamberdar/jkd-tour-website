/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D47A1', // A deep blue
        'primary-dark': '#093170',
        'secondary': '#4CAF50', // A vibrant green
        'secondary-dark': '#388E3C',
        'accent': '#FFC107', // A warm yellow
      },
    },
  },
  plugins: [],
}