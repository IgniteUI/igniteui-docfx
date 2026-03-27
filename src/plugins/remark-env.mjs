import { visit } from 'unist-util-visit';
import fs from 'node:fs';
import path from 'node:path';

const ENV_TOKEN = /\{environment:(\w+)\}/g;

/** @type {Record<string, string> | null} */
let _vars = null;

function getVars() {
	if (_vars) return _vars;

	const nodeEnv = process.env.NODE_ENV || 'development';

	const docsLang = process.env.DOCS_LANG || 'en';

	try {
		const envJsonPath = path.resolve(process.cwd(), 'src', 'content', docsLang, 'environment.json');
		const envAll = JSON.parse(fs.readFileSync(envJsonPath, 'utf-8'));
		_vars = envAll[nodeEnv] ?? envAll['development'] ?? {};
	} catch {
		_vars = {};
	}
	return _vars;
}

/**
 * Remark plugin that resolves `{environment:key}` tokens in markdown content
 * at build time. Reads environment.json using NODE_ENV and DOCS_LANG.
 */
export function remarkEnv() {
	return (tree) => {
		const vars = getVars();
		visit(tree, (node) => {
			if (node.type === 'html' && node.value) {
				node.value = node.value.replace(ENV_TOKEN, (_, key) => vars[key] ?? `{environment:${key}}`);
			}
			if (node.type === 'text' && node.value) {
				node.value = node.value.replace(ENV_TOKEN, (_, key) => vars[key] ?? `{environment:${key}}`);
			}
			if (node.type === 'link' && node.url) {
				node.url = node.url.replace(ENV_TOKEN, (_, key) => vars[key] ?? `{environment:${key}}`);
			}
			if (node.type === 'image' && node.url) {
				node.url = node.url.replace(ENV_TOKEN, (_, key) => vars[key] ?? `{environment:${key}}`);
			}
			if (node.type === 'definition' && node.url) {
				node.url = node.url.replace(ENV_TOKEN, (_, key) => vars[key] ?? `{environment:${key}}`);
			}
		});
	};
}
