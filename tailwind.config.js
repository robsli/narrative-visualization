module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'max-content': 'max-content',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
