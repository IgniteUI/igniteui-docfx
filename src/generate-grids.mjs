// @ts-check
/**
 * Generates grid-specific markdown files from shared templates in grids_templates/.
 * Mirrors the DocFX gulp fileInclude task: evaluates @@if(condition){…} blocks
 * and substitutes @@variable placeholders for each grid variant.
 *
 * Call generateGridTopics(docsDir) before createDocsSite() in astro.config.mjs.
 */

import fs from 'node:fs';
import path from 'node:path';

const gridsConfigs = {
    grid: {
        igPath: 'grid',
        igMainTopic: 'grid',
        igObjectRef: 'grid',
        igDemoBasePath: 'grid',
        igComponent: 'Grid',
        igxName: 'IgxGrid',
        igTypeDoc: 'igxgridcomponent',
        igSelector: 'igx-grid',
    },
    treeGrid: {
        igPath: 'treegrid',
        igMainTopic: 'tree-grid',
        igObjectRef: 'treeGrid',
        igDemoBasePath: 'tree-grid',
        igComponent: 'Tree Grid',
        igxName: 'IgxTreeGrid',
        igTypeDoc: 'igxtreegridcomponent',
        igSelector: 'igx-tree-grid',
    },
    hierarchicalGrid: {
        igPath: 'hierarchicalgrid',
        igMainTopic: 'hierarchical-grid',
        igObjectRef: 'hierarchicalGrid',
        igDemoBasePath: 'hierarchical-grid',
        igComponent: 'Hierarchical Grid',
        igxName: 'IgxHierarchicalGrid',
        igTypeDoc: 'igxhierarchicalgridcomponent',
        igSelector: 'igx-hierarchical-grid',
    },
    pivotGrid: {
        igPath: 'pivotGrid',
        igMainTopic: 'pivot-grid',
        igObjectRef: 'pivotGrid',
        igDemoBasePath: 'pivot-grid',
        igComponent: 'Pivot Grid',
        igxName: 'IgxPivotGrid',
        igTypeDoc: 'igxpivotgridcomponent',
        igSelector: 'igx-pivot-grid',
    },
};

/**
 * Evaluate a simple `@@if` condition string against the template context.
 * Conditions are plain JS expressions like `igxName === 'IgxGrid'`.
 * @param {string} condition
 * @param {Record<string, string>} context
 * @returns {boolean}
 */
function evaluateCondition(condition, context) {
    try {
        // eslint-disable-next-line no-new-func
        return new Function(...Object.keys(context), `return (${condition});`)(...Object.values(context));
    } catch {
        return false;
    }
}

/**
 * Recursively process all @@if(condition){…} blocks in content.
 * Uses brace-depth counting to find matching closing `}` so nested
 * @@if blocks and balanced `{…}` inside content (e.g. code snippets,
 * {environment:…} tokens) are handled correctly.
 * @param {string} content
 * @param {Record<string, string>} context
 * @returns {string}
 */
function processIfBlocks(content, context) {
    const ifMatch = /@@if\s*\(([^)]+)\)\s*\{/.exec(content);
    if (!ifMatch) return content;

    const before = content.slice(0, ifMatch.index);
    const conditionStr = ifMatch[1].trim();
    const openBrace = ifMatch.index + ifMatch[0].length - 1; // index of `{`

    // Walk forward counting braces to find the matching `}`
    let depth = 1;
    let i = openBrace + 1;
    while (i < content.length && depth > 0) {
        if (content[i] === '{') depth++;
        else if (content[i] === '}') depth--;
        i++;
    }
    const closeBrace = i - 1; // index of matching `}`
    const innerContent = content.slice(openBrace + 1, closeBrace);
    const after = content.slice(closeBrace + 1);

    const keep = evaluateCondition(conditionStr, context);
    const middle = keep ? processIfBlocks(innerContent, context) : '';

    return before + middle + processIfBlocks(after, context);
}

/**
 * Process a single template: evaluate @@if blocks then substitute @@variables.
 * @param {string} content
 * @param {Record<string, string>} context
 * @returns {string}
 */
function processTemplate(content, context) {
    let result = processIfBlocks(content, context);

    for (const [key, value] of Object.entries(context)) {
        result = result.replaceAll(`@@${key}`, value);
    }

    // Strip markdownlint-disable comments (not needed in Astro output)
    result = result.replace(/<!--\s*markdownlint-disable[^>]*-->\s*/g, '');

    // Collapse 3+ consecutive blank lines down to 2 (mirrors gulp replace step)
    result = result.replace(/\n{3,}/g, '\n\n');

    // Astro requires frontmatter to be at position 0.
    // Strip any remaining leading HTML comments and whitespace before ---.
    result = result.replace(/^(<!--[\s\S]*?-->\s*|\s+)*(?=---)/, '');

    return result;
}

/**
 * Generate all grid variant pages from templates.
 * Templates live in src/grids_templates/{lang}/, output goes to src/content/{lang}/.
 *
 * @param {string} templatesDir - Absolute path to the templates directory.
 * @param {string} outBase - Absolute path to the content output directory.
 */
export function generateGridTopics(templatesDir, outBase) {
    if (!fs.existsSync(templatesDir)) {
        console.warn(`[generate-grids] grids_templates dir not found: ${templatesDir}`);
        return;
    }

    const templates = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md'));
    let fileCount = 0;

    for (const config of Object.values(gridsConfigs)) {
        const outDir = path.join(outBase, config.igPath);
        fs.mkdirSync(outDir, { recursive: true });

        const context = {
            igMainTopic: config.igMainTopic,
            igObjectRef: config.igObjectRef,
            igDemoBasePath: config.igDemoBasePath,
            igComponent: config.igComponent,
            igxName: config.igxName,
            igTypeDoc: config.igTypeDoc,
            igSelector: config.igSelector,
        };

        for (const file of templates) {
            const raw = fs.readFileSync(path.join(templatesDir, file), 'utf-8');
            const processed = processTemplate(raw, context);
            const outFile = path.join(outDir, file);
            // Skip (and remove stale output) if template doesn't apply to this grid variant
            if (!processed.startsWith('---')) {
                if (fs.existsSync(outFile)) fs.rmSync(outFile);
                continue;
            }
            fs.writeFileSync(outFile, processed, 'utf-8');
            fileCount++;
        }
    }

    console.log(
        `[generate-grids] Generated ${fileCount} files ` +
        `(${templates.length} templates × ${Object.keys(gridsConfigs).length} grid variants).`
    );
}

/**
 * Rewrite relative `../images/` paths (any depth) to absolute `/images/` paths
 * in all markdown files under docsDir. Idempotent — already-absolute paths are
 * left untouched. This prevents Astro's content-assets pipeline from throwing
 * ImageNotFound when it scans markdown for image references.
 *
 * @param {string} docsDir - Absolute path to the docs content directory.
 */
export function normalizeImagePaths(docsDir) {
    let fileCount = 0;

    /** @param {string} dir */
    function walk(dir) {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                walk(full);
            } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
                const original = fs.readFileSync(full, 'utf-8');
                // Replace all relative ../images/ occurrences (any depth, any context)
                const updated = original.replace(/(?:\.\.\/)+images\//g, '/images/');
                if (updated !== original) {
                    fs.writeFileSync(full, updated, 'utf-8');
                    fileCount++;
                }
            }
        }
    }

    walk(docsDir);
    console.log(`[normalize-image-paths] Updated ${fileCount} files.`);
}
