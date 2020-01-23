var argv = require('yargs').argv,
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	rename = require('gulp-rename'),
	fileinclude = require('gulp-file-include'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	gutil = require('gulp-util'),
	browsersync = require('browser-sync').create();

function compileSass()  {
	var sassOptions = {
		compress: argv.prod ? true : false
	};
	var apOptions = {
		browsers: ['> 0.5%', 'last 5 versions', 'Firefox ESR', 'not dead']
	};
	return gulp.src('./src/style.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer(apOptions))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('Sass done');
		if (argv.prod) log('CSS minified');
	});
}

function compileHtml()  {
	// gulp.task('fileinclude', function() {
	return gulp.src(['src/**/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('./'));
}


function watchFiles() {
	gulp.watch('./src/*.scss', compileSass);
	gulp.watch('./src/**/*.html', compileHtml);
}

gulp.task('watch', gulp.parallel(compileSass, compileHtml, watchFiles));
gulp.task('build', gulp.parallel(compileSass, compileHtml));

function log(message) {
	gutil.log(gutil.colors.bold.green(message));
}