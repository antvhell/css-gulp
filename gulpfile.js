const { src, dest, watch, series, parallel } = require("gulp");

// CSS Y SASS
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

// Imagenes
// const imagemin = require("gulp-imagemin");
// import imagemin from "gulp-imagemin";

function css(done) {
  // Compilar sass
  // paso 1 - Identificar archivo, 2 - Compilarla, 3 - Guardar e. .css

  src("src/scss/app.scss")
    //compressed o expanded
    .pipe(sass())
    .pipe(postcss([autoprefixer]))
    .pipe(dest("build/css"));
  done();
}

// function imagenes() {
//   return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("build/img"));
// }

function dev() {
  watch("src/scss/**/*.scss", css);
  // watch("src/img/**/*", imagenes);
}

exports.css = css;
exports.dev = dev;
// exports.imagenes = imagenes;
exports.default = series(css, dev);

// series - Se inicia una tarea, y hasta que finaliza, inicia la siguiente
// parallel - Todas inician al mismo tiempo
