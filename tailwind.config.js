module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif','system-ui'],
      'Lobster': ['Open Sans'],
     },
     boxShdow:{
       'custom-light': "0 0 10px #313131",
       "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c"
     },

    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181D',
          //?FIX this
          300: '#16181D',
          500: '#0f1115',
          700: '#202125',
       },
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    },
  },
  plugins: [],
}
