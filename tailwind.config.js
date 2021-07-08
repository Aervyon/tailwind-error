module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#202124',
        'primary-dark': '#292C34',
        'highlight-dark': '#568A97',
        'url-dark': '#0EB363',
        accent: '#B9F5D8'
      },
      fill: {
        dark: '#202124',
        'primary-dark': '#292C34',
        'highlight-dark': '#568A97',
        'url-dark': '#0EB363',
        accent: '#B9F5D8'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
