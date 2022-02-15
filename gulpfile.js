const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', done => {
  gulp.src(['main.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./index'));
    done();
});