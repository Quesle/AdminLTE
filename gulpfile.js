
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
    connect.server({
        port: 8001,
        livereload: true
    });
});

/* Concat multi js files, and uglify them. */
function minJs(filename, dir, files) {
  return gulp.src(files)
    .pipe(concat(filename))
    .pipe(gulp.dest(dir))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir));
}

var mainJs = [
  'bower_components/domReady/domReady.js',
  'app/library/bootstrap.js',
  'app/library/app.js',
  'app/library/ngRoute.js',
  'app/library/main.js'
];

var require = [
  'bower_components/requirejs/require.js'
];

/* Get main.min.js for require.js data-main */
gulp.task('require-main', function() {
  return minJs('main.min.js', 'app', mainJs);
});

gulp.task('require', function() {
  return minJs('require.min.js', 'app/dist/lib', require);
});

gulp.task('watch-require-main', function() {
  gulp.watch(mainJs, [ 'require-main' ]);
});

gulp.task('watch', [ 'watch-require-main' ]);

gulp.task('build', [ 'require-main' ]);

gulp.task('server', ['connect']);
