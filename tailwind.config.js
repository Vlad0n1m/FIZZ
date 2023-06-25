/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      'lg': '2em',
    },
    extend: {
      dropShadow: {
        'wxl': '0 25px 25px rgba(255, 255, 255, 0.09)',
      },
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        "ghost": "#1D1B1E",
        "white": "#EEFFFF",
        "green": "#00C399",
        "yellow": "#FFC13C",
        "pink": "#FF6D7A",
        "gray": "#8D8B8E",
        "primary": "#8423FC"
      }
    },



  },
  plugins: [],
}
