/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sspai: {
          red: '#d71a21',
          bg: '#f4f4f4',
          text: '#292525',
          gray: '#999999',
          border: '#e0e0e0'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          '"Helvetica Neue"', 
          'Arial', 
          '"Noto Sans"', 
          'sans-serif', 
          '"Apple Color Emoji"', 
          '"Segoe UI Emoji"', 
          '"Segoe UI Symbol"', 
          '"Noto Color Emoji"'
        ],
        serif: [
          'Merriweather',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ]
      },
      boxShadow: {
        'sspai': '0 1px 3px rgba(0,0,0,0.05)',
        'sspai-hover': '0 4px 12px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
