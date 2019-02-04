const path = require('path');
const del = require('del');
const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const fs = require('fs');
const environmentVariablesPreConfig = require('./node_modules/igniteui-docfx-template/post-processors/PostProcessors/EnvironmentVariables/preconfig.json');
const fileinclude = require('gulp-file-include');

const LANG = argv.lang === undefined ? "en" : argv.lang;
const DOCFX_BASE = {
    en: './en',
    jp: './jp',
    kr: './kr'
};
const DOCFX_PATH = `${DOCFX_BASE[LANG]}`;
const DOCFX_CONF = `${DOCFX_PATH}/docfx.json`;
const DOCFX_TEMPLATE = path.join(__dirname, `./node_modules/igniteui-docfx-template/template`);
const DOCFX_SITE = `${DOCFX_PATH}/_site`;
const DOCFX_ARTICLES = `${DOCFX_PATH}/components`;

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
    gulp.watch([`${DOCFX_PATH}/**/*.md`, `${DOCFX_ARTICLES}/**`], ['build']);
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

gulp.task('post-processor-configs', ['cleanup'], () => {
    var environmentVariablesConfig = JSON.parse(JSON.stringify(environmentVariablesPreConfig));

    if (process.env.NODE_ENV) {
        environmentVariablesConfig.environment = process.env.NODE_ENV.trim();
    }

    environmentVariablesConfig.variables =
        environmentVariablesConfig.variables[LANG.toLowerCase().trim()][
        environmentVariablesConfig.environment
        ];

    if (!fs.existsSync(`${DOCFX_SITE}`)) {
        fs.mkdirSync(`${DOCFX_SITE}`);
    }

    fs.writeFileSync(
        `${DOCFX_SITE}/${environmentVariablesConfig._configFileName}`,
        JSON.stringify(environmentVariablesConfig)
    );
});

gulp.task('build-site', shell.task([`docfx build ${DOCFX_CONF}`]));

gulp.task('cleanup', () => {
    return del([`${DOCFX_SITE}`]);
});

gulp.task('generate-grid-topics', () => {
    const grids = [
        {
            path: '/grid',
            compRef: "grid",
            component: "Grid",
            componentName: "IgxGrid",
            compdoc: "igxgridcomponent",
            componentSelector: "igx-grid"
        },
        {
            path: '/treeGrid',
            compRef: "treeGrid",
            component: "Tree Grid",
            componentName: "IgxTreeGrid",
            compdoc: "igxtreegridcomponent",
            componentSelector: "igx-tree-grid"
        },
        {
            path: '/hierarchicalGrid',
            compRef: "hierarchicalGrid",
            component: "Hierarchical Grid",
            componentName: "IgxHierarchicalGrid",
            compdoc: "igxhierarchicalgridcomponent",
            componentSelector: "igx-hierarchical-grid"
        }
    ];

    for (let j = 0; j < grids.length; j++) {
        const grid = grids[j]; // Grid topic to be generated

        gulp.src([DOCFX_ARTICLES + '/grids_templates/*.md'])
            .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file',
                context: {
                    "compRef": grid.compRef,
                    "component": grid.component,
                    "componentName": grid.componentName,
                    "compdoc": grid.compdoc,
                    "componentSelector": grid.componentSelector
                }
            }))
            .pipe(gulp.dest('./en/components' + grid.path));
    }
});

gulp.task('build', [
    'styles',
    'cleanup',
    'post-processor-configs',
    'build-site',
    'generate-grid-topics'
]);