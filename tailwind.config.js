/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue: '#2140E8',
        lightBlue: '#4460F7',
        Orange: '#F9A52B',
        Gray: '#B9BDCF',
        lightGray: '#E0E2EA',
        lighterGray: '#E0E2EA',
        darkGray: '#9194A5',
        darkerGray: '#1A1B1D'
      },
      padding: {
        13: '52px',
        27: '108px',
      },
      spacing: {
        98: '392px'
      }
    },
    screens: {
      'md': '767px',
      'lg': '1023px',
      'xl': '1365px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}
