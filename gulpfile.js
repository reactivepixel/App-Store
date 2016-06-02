var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('dev',function(){
    nodemon({ script: 'src/server.js', ext: 'js'}).on('restart',function(){
        console.log('=-=-=-=-=-=-=-=-=-restarted!-=-=-=-=-=-=-=-=-=-=-=-==');
    });
});

gulp.task('startup', ['dev']);
