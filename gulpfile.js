const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

	browserSync({
		server: {
			baseDir: 'AvtOil/dist'
		},
	});

	gulp.watch('AvtOil/src/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function() {
	return gulp.src('AvtOil/src/assets/sass/**/*.+(scss|sass)')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min', prefix: ''}))
		.pipe(autoprefixer())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('AvtOil/dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch('AvtOil/src/assets/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
	gulp.watch('AvtOil/src/*.html').on('change', gulp.parallel('html'));
	gulp.watch('AvtOil/src/assets/js/**/*.js').on('change', gulp.parallel('scripts'));
	gulp.watch('AvtOil/src/assets/fonts/**/*').on('all', gulp.parallel('fonts'));
	gulp.watch('AvtOil/src/assets/icons/**/*').on('all', gulp.parallel('icons'));
	gulp.watch('AvtOil/src/assets/img/**/*').on('all', gulp.parallel('images'));
});

gulp.task('html', function() {
	return gulp.src('AvtOil/src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('AvtOil/dist/'));
});

gulp.task('scripts', function() {
	return gulp.src('AvtOil/src/assets/js/**/*.js')
		.pipe(gulp.dest('AvtOil/dist/js'))
		.pipe(browserSync.stream());
});

gulp.task('fonts', function() {
	return gulp.src('AvtOil/src/assets/fonts/**/*')
		.pipe(gulp.dest('AvtOil/dist/fonts'))
		.pipe(browserSync.stream());
});

gulp.task('icons', function() {
	return gulp.src('AvtOil/src/assets/icons/**/*')
		.pipe(gulp.dest('AvtOil/dist/icons'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
	return gulp.src('AvtOil/src/assets/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('AvtOil/dist/img'))
		.pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));