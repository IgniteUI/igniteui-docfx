
const fs = require('fs');
const replace = require('gulp-replace');
const fileinclude = require('gulp-file-include');
const slash = require('slash');
const {dest, series, src, watch, parallel} = require('gulp');
const { buildDocfx } = require('igniteui-docfx-template');
const path = require('path');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;
const LANG = argv.lang === undefined ? "en" : argv.lang;

const DOCFX_BASE = {
    en: './en',
    jp: './jp',
    kr: './kr'
};
const DOCFX_PATH = `${DOCFX_BASE[LANG]}`;
const DOCFX_TEMPLATE_GLOBAL = slash(path.join(__dirname, 'node_modules', 'igniteui-docfx-template', 'template', 'bundling.global.json'));
const DOCFX_SITE = `${DOCFX_PATH}/_site`;
const DOCFX_ARTICLES = `${DOCFX_PATH}/components`;
const gridsConfigs = {
  grid: {
      igPath: '/grid',
      igMainTopic: 'grid',
      igObjectRef: "grid",
      igDemoBasePath: "grid",
      igComponent: "Grid",
      igxName: "IgxGrid",
      igTypeDoc: "igxgridcomponent",
      igSelector: "igx-grid"
  },
  treeGrid: {
      igPath: '/treegrid',
      igMainTopic: 'tree-grid',
      igObjectRef: "treeGrid",
      igDemoBasePath: "tree-grid",
      igComponent: "Tree Grid",
      igxName: "IgxTreeGrid",
      igTypeDoc: "igxtreegridcomponent",
      igSelector: "igx-tree-grid"
  },
  hierarchicalGrid: {
      igPath: '/hierarchicalgrid',
      igMainTopic: 'hierarchical-grid',
      igObjectRef: "hierarchicalGrid",
      igDemoBasePath: "hierarchical-grid",
      igComponent: "Hierarchical Grid",
      igxName: "IgxHierarchicalGrid",
      igTypeDoc: "igxhierarchicalgridcomponent",
      igSelector: "igx-hierarchical-grid"
    }
  };
    
const fileInclude = (grid) => {
  return src([DOCFX_ARTICLES + '/grids_templates/*.md'])
      .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file',
          context: {
              "igMainTopic": grid.igMainTopic,
              "igObjectRef": grid.igObjectRef,
              "igDemoBasePath": grid.igDemoBasePath,
              "igComponent": grid.igComponent,
              "igxName": grid.igxName,
              "igTypeDoc": grid.igTypeDoc,
              "igSelector": grid.igSelector
          }
      }))
      .pipe(dest(DOCFX_ARTICLES + grid.igPath));
}

const generateGridsTopics = () => {
  return fileInclude(gridsConfigs.grid);
};

const generateTreeGridsTopics = () => {
  return fileInclude(gridsConfigs.treeGrid);
};

const generateHierarchicalGridsTopics = () => {
  return fileInclude(gridsConfigs.hierarchicalGrid);
};

const buildSite = () => {
  return buildDocfx({
    siteDir: DOCFX_SITE,
    projectDir: DOCFX_PATH,
    environment: process.env.NODE_ENV ? process.env.NODE_ENV.trim() : null
  });
}

const removeHTMLExtensionFromSiteMap = () => {
  return src([DOCFX_SITE + '/sitemap.xml'])
      .pipe(replace(/\.html/g, ''))
      .pipe(dest(DOCFX_SITE));
};

const watchFiles = (done) => {

    const excluded = [
        `!${DOCFX_ARTICLES}/grid/**`,
        `!${DOCFX_ARTICLES}/treegrid/**`,
        `!${DOCFX_ARTICLES}/hierarchicalgrid/**`
    ];

    // All topics that are not auto-generated and are specific to the respective grid, should be here.
    const included = [
        `${DOCFX_ARTICLES}/grid/grid.md`,
        `${DOCFX_ARTICLES}/grid/groupby.md`,
        `${DOCFX_ARTICLES}/grid/paste-excel.md`,
        `${DOCFX_ARTICLES}/grid/master-detail.md`,
        `${DOCFX_ARTICLES}/grid/selection-based-aggregates.md`,
        `${DOCFX_ARTICLES}/treegrid/tree-grid.md`,
        `${DOCFX_ARTICLES}/treegrid/groupby.md`,
        `${DOCFX_ARTICLES}/treegrid/load-on-demand.md`,
        `${DOCFX_ARTICLES}/hierarchicalgrid/hierarchical-grid.md`,
        `${DOCFX_ARTICLES}/hierarchicalgrid/load-on-demand.md`
    ];

    // watch([`${DOCFX_TEMPLATE}/**/*`, `!${DOCFX_TEMPLATE}/styles/css`], series(build));
    watch([
      `${DOCFX_TEMPLATE_GLOBAL}`,
      `${DOCFX_PATH}/components/*.md`,
      `${DOCFX_PATH}/general/**/*.md`,
      `${DOCFX_PATH}/themes/*.md`,
      `${DOCFX_ARTICLES}/**`].concat(excluded).concat(included),
      {delay: 3000, queue: false},
      series(build, browserSyncReload));
    done();
}

const init = (done) => {
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
    done();
};

const  browserSyncReload = (done) => {
    browserSync.reload();
    done();
};

const build = series(
  parallel(generateGridsTopics, generateTreeGridsTopics, generateHierarchicalGridsTopics), 
  buildSite, removeHTMLExtensionFromSiteMap);

const buildTravis = series(generateGridsTopics);

exports.buildTravis = buildTravis;
exports.build = build;
exports.serve = series(build, init, watchFiles);
