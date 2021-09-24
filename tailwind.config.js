module.exports = {
  purge: {
    content: ['./src/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'),require('tailwind-scroll-behavior')()],
}
