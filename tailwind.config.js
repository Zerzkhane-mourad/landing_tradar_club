/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          90: 'rgba(18, 118, 130, 1)',
          70: 'rgba(37, 147, 126, 1)',
          50: 'rgba(32, 199, 171, 1)',
          10: 'rgba(18, 118, 130, 0.1)'
        },
        blue: {
          90: 'rgba(32, 94, 255, 1)',
          70: 'rgba(56, 140, 186, 1)',
          50: 'rgba(75, 177, 233, 1)'
        },
        black: {
          90: 'rgba(37, 37, 37, 0.7)',
          70: 'rgba(230, 234, 240, 1)',
          10: 'rgba(232, 237, 245, 3.5)'
        },
        gold: {
          90: 'rgba(247, 174, 40, 1)',
          70: 'rgba(255, 222, 130, 1)'
        },
        indigo: {
          90: 'rgba(83, 57, 219, 1)',
          70: 'rgba(123, 97, 255, 1)'
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/src/assets/pc.svg')",
        'bg-img-2': "url('/src/assets/backg1.svg')"
      },
    },
  },
  plugins: [],
}