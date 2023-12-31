
// requires
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const sourceMaps = require('gulp-sourcemaps');



// funcões de compressão
function comprimirImagens() {
    return gulp.src('./source/images/*') // input
            .pipe(imagemin()) // função
            .pipe(gulp.dest('./build/images')); // output
}

function comprimirJs(){
    return gulp.src('./source/scripts/*.js')
            .pipe(uglify())
            .pipe(obfuscate())
            .pipe(gulp.dest('./build/scripts'));
}


// funções de compilação
function compilarSass() {
    return gulp.src('./source/styles/main.scss')
            .pipe(sourceMaps.init())
            .pipe(sass({ outputStyle: 'compressed' }))
            .pipe(sourceMaps.write('./maps'))
            .pipe(gulp.dest('./build/styles'));
}


// export modulo default, comando 'npm run gulp'
exports.default = function() {
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimirImagens));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimirJs));
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilarSass));
}