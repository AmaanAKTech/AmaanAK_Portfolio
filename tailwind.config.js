/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'plasma-purple': '#c642f5',
        'matrix-green': '#08ff08',
        'cyber-blue': '#00f7ff',
      },
    },
  },
  plugins: [],
};
