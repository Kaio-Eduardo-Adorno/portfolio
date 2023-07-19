/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-varelaRound)'],
      },
      colors: {
        main: {
          100: "#fffafa",
          200: "#fdf5f5",
          300: "#F7F6F3",
          400: "#ECE9E1",
          500: "#D7D1C1",
          600: "#BFB69B",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'project': '320px minmax(0, 1fr)',
      },
      gridTemplateRows: {
        'project': 'auto minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}
