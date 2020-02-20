var jsonlint = require('gulp-jsonlint');
var log = require('fancy-log');

gulp.src('./src/*.json')
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(failureReporter));

// Custom reporter for jsonlint to ensure Gulp exits correctly on fail for Travis tests.
var failureReporter = function (file) {
    log('File ' + file.path + ' is not valid JSON.');
};
