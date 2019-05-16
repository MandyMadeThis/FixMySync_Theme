var gulp = require('gulp')
var requireDir = require('require-dir')

requireDir('./gulp')

gulp.task('build', gulp.series([
  'styles',
  'vendor-scripts',
  'browserify',
  'browsersync'
]))

gulp.task('default', gulp.series(['build', 'watch']))
