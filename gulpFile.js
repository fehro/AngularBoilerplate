var gulp = require('gulp');
var sass = require('gulp-sass');
var rimraf = require('gulp-rimraf');
var bundle = require('gulp-bundle-assets');

//Convert the sass files to css.
gulp.task('sass', function() {
    
    gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
        
});

//Clean up the js folder deleting any js or css files.
gulp.task('clean', function () {
    
  return gulp.src('./app/dist', { read: false })
    .pipe(rimraf());
    
});

//Bundle the bower_component js and css files.
gulp.task('bundle.bower_components', function() {
    
    gulp.src('./bundle.bower_components.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./app/dist'))
        
});

//Bundle the application js and css files.
gulp.task('bundle.app', function() {
    
    gulp.src('./bundle.app.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./app/dist'))
        
});

//The default task that executes the other tasks.
gulp.task('default', ['clean'], function() {
    
    gulp.watch('./src/css/**/*.scss', ['sass']);
    gulp.watch(['./src/js/app/**/*.js', './src/js/src/app.*.js', './src/css/*.css'], ['bundle.app']);
    
    //Run the bundle tasks at start.
    gulp.run('bundle.bower_components');
    gulp.run('bundle.app');
    
})