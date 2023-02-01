/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'1048px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlue:"#0c1825",
        body:"#353535",
        signBlue:"#062863"
      },
      fontFamily:{
        'sans': 'DM Sans'
      },
      backgroundImage:(theme) =>({
        'oyetolas': "url('../images/piggyvest oyetolas.jpg')"
      })
    },
  },
  plugins: [],
}

//#0c1825