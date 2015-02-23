var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');

gulp.task('browserify', function () {
	gulp.src('public/js/main.jsx')
		.pipe(plumber())
		.pipe(browserify({
			debug: true,
			transform: ['babelify']
		}))
		.pipe(rename('main.js'))
		.pipe(gulp.dest('public/build'))
		.pipe(livereload());
});

gulp.task('compass', function() {
	gulp.src('./public/sass/main.scss')
		.pipe(plumber())
		.pipe(compass({
			css: 'public/css',
			sass: 'public/sass'
		}))
		.pipe(gulp.dest('public/css'))
		.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();

	watch(['public/js/**/*.js', 'public/js/**/*.jsx'], function () {
		gulp.start('browserify');
	});
	watch(['public/sass/**/*.scss'], function () {
		gulp.start('compass');
	});
	gulp.watch('public/**/*.html').on('change', function(file) {
		livereload.changed(file.path);
	});
});

gulp.task('build', ['browserify', 'compass']);
gulp.task('start', ['build', 'watch']);

gulp.task('default', ['build']);