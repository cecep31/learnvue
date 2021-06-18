module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      Animation:{
        'spin-slow':'spin 5s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
