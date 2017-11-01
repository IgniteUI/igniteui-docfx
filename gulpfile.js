const path = require('path');
const del = require('del');
const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const DOCFX_BASE = './docfx_project';
const DOCFX_CONF = `${DOCFX_BASE}/docfx.json`;
const DOCFX_TEMPLATE = path.join(
    __dirname,
    `${DOCFX_BASE}//ignite-ui-template`
);
const DOCFX_SITE = `${DOCFX_BASE}/_site`;
const DOCFX_API = `${DOCFX_BASE}/api`;
const DOCFX_ARTICLES = `${DOCFX_BASE}/components`;

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: `${DOCFX_SITE}`
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
                margin: '0px',
                padding: '5px',
                position: 'fixed',
                fontSize: '10px',
                zIndex: '9999',
                borderRadius: '5px 0px 0px',
                color: 'white',
                textAlign: 'center',
                display: 'block',
                backgroundColor: 'rgba(60, 197, 31, 0.498039)'
            }
        }
    });

    gulp.watch(`${DOCFX_TEMPLATE}/**/*`, ['watch']);
    gulp.watch(`${DOCFX_ARTICLES}/**/*`, ['build']);
});

gulp.task('styles', () => {
    return gulp
        .src(`${DOCFX_TEMPLATE}/styles/sass/main.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                browsers: ['last 2 versions'],
                cascase: false
            })
        )
        .pipe(gulp.dest(`${DOCFX_TEMPLATE}/styles/css`));
});

gulp.task('watch', ['build'], done => {
    browserSync.reload();
    done();
});

gulp.task('build-site', shell.task([`docfx build ${DOCFX_CONF}`]));

gulp.task('cleanup', () => {
    return del([`${DOCFX_SITE}`]);
});

gulp.task('build', ['styles', 'cleanup', 'build-site']);
