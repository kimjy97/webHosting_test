const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', async function() {
  gulp.src(['./*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./index'));
});

gulp.task( "default", gulp.parallel("fileinclude") );
