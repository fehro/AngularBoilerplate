module.exports = {
  bundle: {
    main: {
      scripts: [
        './src/js/app/app.module.js',
        './src/js/app/app.module.config.js',
        './src/js/app/app.module.routes.js',
        './src/js/app/controllers/*.js',
        './src/js/app/directives/*.js',
        './src/js/app/factories/*.js',
        './src/js/app/services/*.js'
      ],        
      styles: [
        './src/css/*.css'
      ],   
      options: {
        uglify: false,
        minCss: false,
        rev: false
      }
    }
  }
};