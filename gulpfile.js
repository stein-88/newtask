const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const del = require('del')

const paths = {
  scripts: {
    src: 'src/**/*.js',
    dest: 'assets/scripts/'
  }
}

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
const clean = () => {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(['assets'])
}

const scripts = () => {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel()) // babel converte o ecma script para js browser
    .pipe(uglify()) // deixa feio tudo como sopa de letrinha minificando tudo
    .pipe(concat('main.min.js')) // junta todos arquivos js em apenas um
    .pipe(gulp.dest(paths.scripts.dest)) // colocando na pasta assets (pipe eh tipo await mas n eh nativo eh usado no gulp)
}

const watch = () => {
  return gulp.watch(paths.scripts.src, scripts)
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.series(clean, gulp.parallel(scripts))
/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean
exports.scripts = scripts
exports.watch = watch
exports.build = build
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build