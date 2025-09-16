/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'coldea': {
          'green-dark': '#1B5E20',
          'green': '#2E7D32',
          'green-light': '#4CAF50',
          'gold': '#F9A825',
          'gold-light': '#FFF176',
          'gold-dark': '#F57F17',
        },
      },
    },
  },
  plugins: [],
};
