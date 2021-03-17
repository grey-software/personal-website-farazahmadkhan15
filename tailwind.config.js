module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {

      'fans': ['Operator Mono Lig', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
 
     },
    extend: {
      backgroundImage: theme => ({

        'hero': "url('static/home-bg-img.jpg')",

       
       })
    },
  },
  variants: {},
  plugins: [],
}
