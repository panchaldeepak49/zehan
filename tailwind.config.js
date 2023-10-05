/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('./Images/Rectangle 32.png')", // Specify the correct image path
      },
    },
  },
  plugins: [],
}

