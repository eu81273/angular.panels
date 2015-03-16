var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

var src = './src';
var dist = './dist';

var paths = {
	js: src + '/*.js',
	css: src + '/*.css'
};

gulp.task('uglify-js', function () {
	return gulp.src(paths.js)
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest(dist + '/'));
});


gulp.task('compress-css', function () {
	return gulp.src(paths.css)
		.pipe(minifycss())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest(dist + '/'));
});

gulp.task('default', ['uglify-js', 'compress-css']);
