// @ts-check
import path from 'node:path';
import { createDocsSite } from 'docs-template/integration';
import { generateGridTopics, normalizeImagePaths } from './src/generate-grids.mjs';
import { remarkEnv } from './src/plugins/remark-env.mjs';

// ── Resolve build mode and language from environment variables ───────────────
// NODE_ENV: 'development' | 'staging' | 'production'  (default: 'development')
// DOCS_LANG: 'en' | 'jp' | 'kr'                       (default: 'en')
const nodeEnv = process.env.NODE_ENV || 'development';
const docsLang = process.env.DOCS_LANG || 'en';

/** @type {'dev' | 'staging' | 'prod'} */
const mode = nodeEnv === 'production' ? 'prod'
	: nodeEnv === 'staging' ? 'staging'
		: 'dev';

const docsDir = path.resolve(`./src/content/${docsLang}`);
const templatesDir = path.resolve(`./src/grids_templates/${docsLang}`);

// ── Pre-build steps (run before Astro starts) ───────────────────────────────
generateGridTopics(templatesDir, docsDir);
normalizeImagePaths(docsDir);

// https://astro.build/config
export default createDocsSite({
	site: 'https://www.infragistics.com/products/ignite-ui-angular',
	title: 'Ignite UI for Angular',
	description: 'Component and API reference docs for Ignite UI for Angular.',
	platform: 'angular',
	navLang: docsLang === 'jp' ? 'ja' : docsLang,   // docs-template expects 'ja' not 'jp'
	mode,
	source: {
		tocPath: `./src/content/${docsLang}/toc.json`,
		docsDir: `./src/content/${docsLang}`,
	},
	sidebar: { exclude: [/^internal\//] },
	head: [],
	starlight: {
		logo: { src: './public/favicon.svg' },
	},
	image: { service: { entrypoint: 'astro/assets/services/noop' } },
	markdown: {},
});
