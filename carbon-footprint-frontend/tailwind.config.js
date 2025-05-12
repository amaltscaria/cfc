/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  plugins: [],
  theme: {
    extend: {
      screens: {
        'custom': '450px',
      },
    },
  },
}
