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
            baseDir: "NGO/dist"
        },
    });

    gulp.watch("NGO/src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("NGO/src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("NGO/dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("NGO/src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("NGO/src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("NGO/src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("NGO/src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("NGO/src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("NGO/src/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function() {
    return gulp.src("NGO/src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("NGO/dist/"));
});

gulp.task('scripts', function() {
    return gulp.src("NGO/src/js/**/*.js")
        .pipe(gulp.dest("NGO/dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src("NGO/src/fonts/**/*")
        .pipe(gulp.dest("NGO/dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    return gulp.src("NGO/src/icons/**/*")
        .pipe(gulp.dest("NGO/dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src("NGO/src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("NGO/dist/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));