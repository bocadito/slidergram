var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;

    var options = {
        bowerJson: require('./bower.json'), //Require will return the json object for future use
        directory: './public/lib',
        ignorePath: '../../public'
    }


    // We are going to use gulp-inject for our css and js files (not bower)
    var inject  = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css',
                                './public/js/*.js'], {read: false}); //Read false because we only need their names, not their content
    var injectOptions = {
      ignorePath: '/public'
    };

    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['inject'], function(){
   var options = {
       // What is going to run
       script: 'server.js',
       delayTime: 1,
       env: {
           'PORT': 3000
       },
       watch: jsFiles
   }

    return nodemon(options).on('restart', function(ev){
        console.log('Restarting...');
    })
})
