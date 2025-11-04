var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('bildjs', function(){
    gulp.src('*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});