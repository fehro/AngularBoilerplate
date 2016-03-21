module.exports = {
  bundle: {
    vendor: {
      scripts: [
        {src: './src/js/bower_components/jquery/dist/jquery.js', minSrc: './src/js/bower_components/jquery/dist/jquery.min.js'},
        {src: './src/js/bower_components/bootstrap/dist/js/bootstrap.js', minSrc: './src/js/bower_components/bootstrap/dist/js/bootstrap.min.js'},
        {src: './src/js/bower_components/angular/angular.js', minSrc: './src/js/bower_components/angular/angular.min.js'},
        {src: './src/js/bower_components/angular-ui-router/release/angular-ui-router.js', minSrc: './src/js/bower_components/angular-ui-router/release/angular-ui-router.min.js'},
        {src: './src/js/bower_components/angular-resource/angular-resource.js', minSrc: './src/js/bower_components/angular-resource/angular-resource.min.js'},
        {src: './src/js/bower_components/angular-bootstrap/ui-bootstrap-tpls.js', minSrc: './src/js/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'},
        {src: './src/js/bower_components/angular-deferred-bootstrap/angular-deferred-bootstrap.js', minSrc: './src/js/bower_components/angular-deferred-bootstrap/angular-deferred-bootstrap.min.js'}
      ],           
      styles: [
        './src/js/bower_components/bootstrap/dist/css/bootstrap.css'
      ], 
      options: {
        useMin: false,
        uglify: false,
        minCss: false,
        rev: false
      }
    }
  }
};