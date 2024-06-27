/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      minHeight:{
        '815': '815px',
      },
      screens: {
        'max-1075': {'max': '1075px'},
        'max-875' : {'max': '875px' },
      },
      height:{
        '496' :'496px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        'img': {
          display: 'inline',
        },
      })
    },
      function ({ addBase }) {
      addBase({
        'h2': {
          fontSize: '24px',
          fontWeight: 'lighter',
        },
      })
    },
    function ({ addBase }) {
      addBase({
        '*, ::before, ::after': {
          boxSizing: 'content-box',
        },
      })
    },
    function ({ addUtilities }) {
      addUtilities({
        'li': {
          paddingRight: '20px',
          marginBottom: '3px',
        },
        'li:hover':{
          textDecoration:'underline',
        },
      }, ['responsive', 'hover'])
    },
  ]
}

