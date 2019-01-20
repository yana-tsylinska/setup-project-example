const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const babel = require('gulp-babel');

const scssInput = 'src/sass/**/*.scss';
const jsInput = 'src/js/**/*.js';
const output = 'dist/';


gulp.task('styles', () => {
	return gulp.src(scssInput)
		.pipe($.sourcemaps.init())
		.pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
		.pipe($.autoprefixer({ browsers: ['last 2 versions'] }))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest(output));
});

gulp.task('js', () => {
	return gulp.src(jsInput)
		.pipe(babel())
		.pipe(gulp.dest(output));
});

gulp.task('default', ['styles'], () => {
  gulp.watch(scssInput, ['styles']);
});
