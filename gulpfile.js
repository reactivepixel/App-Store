const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('dev', () => {
  nodemon({ script: 'src/server.js', ext: 'js' }).on('restart', () => {
    console.log('=-=-=-=-=-=-=-=-=-restarted!-=-=-=-=-=-=-=-=-=-=-=-==');
  });
});

gulp.task('startup', ['dev']);
