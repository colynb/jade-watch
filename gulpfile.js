var gulp = require('gulp');
var jade = require('gulp-jade');
var fm = require('front-matter');

var opts = {
  pretty: true,
  getData: function(file) {
    var content = fm(String(file.contents));
    file.contents = new Buffer(content.body);
    return content.attributes;
  }
};
gulp.task('jade', function() {
  gulp.src('./*.jade')
    .pipe(jade(opts))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['./*.jade', './gulpfile.js'], ['jade']);
});

gulp.task('default', ['jade', 'watch']);
