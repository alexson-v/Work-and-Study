const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "bus/dist"
        },
    });

    gulp.watch("bus/src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("bus/src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("bus/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("bus/src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("bus/src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("bus/src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("bus/src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("bus/src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("bus/src/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function() {
    return gulp.src("bus/src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("bus/dist/"));
});

gulp.task('scripts', function() {
    return gulp.src("bus/src/js/**/*.js")
        .pipe(gulp.dest("bus/dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src("bus/src/fonts/**/*")
        .pipe(gulp.dest("bus/dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    return gulp.src("bus/src/icons/**/*")
        .pipe(gulp.dest("bus/dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src("bus/src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("bus/dist/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));