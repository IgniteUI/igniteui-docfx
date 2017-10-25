const path = require('path');
const del = require('del');
const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();

const DOCFX_BASE = './docfx_project';
const DOCFX_CONF = `${DOCFX_BASE}/docfx.json`;
const DOCFX_TEMPLATE = path.join(
    __dirname,
    `${DOCFX_BASE}//ignite-ui-template`
);
const DOCFX_SITE = `${DOCFX_BASE}/_site`;
const DOCFX_API = `${DOCFX_BASE}/api`;
const DOCFX_ARTICLES = `${DOCFX_BASE}/articles`;

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: `${DOCFX_SITE}`
        }
    });

    gulp.watch(`${DOCFX_TEMPLATE}/**/*.*`, ['watch']);
    gulp.watch(`${DOCFX_ARTICLES}/**/*.md`, ['watch']);
});

gulp.task('watch', ['build'], done => {
    browserSync.reload();
    done();
});

gulp.task(
    'build-site',
    shell.task([`docfx build ${DOCFX_CONF} -t ${DOCFX_TEMPLATE}`])
);

gulp.task('cleanup', () => {
    return del([`${DOCFX_SITE}`]);
});

gulp.task('build', ['cleanup', 'build-site']);
