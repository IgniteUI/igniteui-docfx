/**
 * Copies markdown content from igniteui-docfx for all languages (en, jp, kr),
 * converts each toc.yml → toc.json, and copies environment.json files.
 *
 * Usage: node scripts/sync-docfx.mjs [--lang en,jp,kr]
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import yaml from 'js-yaml';

const DOCFX_ROOT = 'C:/Repos/docs/igniteui-docfx';
const DEST_ROOT  = 'src/content';

// Parse --lang argument or default to all
const langArg = process.argv.find(a => a.startsWith('--lang='));
const LANGS = langArg
  ? langArg.split('=')[1].split(',')
  : ['en', 'jp', 'kr'];

// ── toc YAML → clean JSON ──────────────────────────────────────────────────
function tocToJson(nodes) {
  if (!Array.isArray(nodes)) return [];
  return nodes.map(node => {
    if (typeof node !== 'object' || !node) return null;
    const entry = {};
    if (node.header) entry.header = true;
    for (const k of ['name', 'href', 'new', 'updated', 'premium', 'sortable']) {
      if (k in node) entry[k] = node[k];
    }
    if (node.items) entry.items = tocToJson(node.items);
    return entry;
  }).filter(Boolean);
}

// ── Collect all hrefs from toc ─────────────────────────────────────────────
function collectHrefs(nodes) {
  const hrefs = [];
  if (!Array.isArray(nodes)) return hrefs;
  for (const node of nodes) {
    if (node?.href) hrefs.push(node.href);
    if (node?.items) hrefs.push(...collectHrefs(node.items));
  }
  return hrefs;
}

// ── Copy a single file with minimal cleanup ────────────────────────────────
function copyFile(src, dest) {
  let text = readFileSync(src, 'utf-8');
  // Normalise Windows CRLF → LF
  text = text.replace(/\r\n/g, '\n');
  // Remove markdownlint-disable comments
  text = text.replace(/<!--\s*markdownlint-disable[^\n]*-->\n?/g, '');
  // Normalize Korean frontmatter key 제목 → title
  text = text.replace(/^(---.*)(\n제목:)/s, '$1\ntitle:');
  // Fix broken frontmatter where closing --- is on same line as a field
  text = text.replace(/^(---\n[\s\S]*?\S)---\n/m, '$1\n---\n');
  // Add frontmatter if missing (required by Starlight)
  if (!text.startsWith('---\n')) {
    const heading = text.match(/^#\s+(.+)/m);
    const title = heading ? heading[1].trim() : dest.split('/').pop().replace('.md', '');
    text = `---\ntitle: ${title}\n---\n${text}`;
  }
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, text, 'utf-8');
}

// ── Process one language ───────────────────────────────────────────────────
function processLanguage(lang) {
  const srcComponents = join(DOCFX_ROOT, lang, 'components');
  const srcTocYml     = join(srcComponents, 'toc.yml');
  const srcEnvJson    = join(DOCFX_ROOT, lang, 'environment.json');
  const destDir       = join(DEST_ROOT, lang);

  if (!existsSync(srcTocYml)) {
    console.log(`[${lang}] SKIP — no toc.yml at ${srcTocYml}`);
    return;
  }

  console.log(`\n[${lang}] Processing...`);

  // 1. Parse toc.yml
  const tocData = yaml.load(readFileSync(srcTocYml, 'utf-8'));
  const hrefs   = collectHrefs(tocData);
  console.log(`[${lang}] Found ${hrefs.length} hrefs in toc.yml`);

  // 2. Copy markdown files
  let copied = 0, missing = 0;
  for (const href of hrefs) {
    // Try direct path first, then grids_templates
    let src = join(srcComponents, href);
    if (!existsSync(src)) {
      const templateSrc = join(srcComponents, 'grids_templates', href.split('/').pop());
      if (existsSync(templateSrc)) {
        src = templateSrc;
      } else {
        missing++;
        continue;
      }
    }
    copyFile(src, join(destDir, href));
    copied++;
  }
  console.log(`[${lang}] Copied ${copied} files (${missing} missing source files)`);

  // 3. Copy grids_templates directory
  const srcGridsTemplates = join(srcComponents, 'grids_templates');
  const destGridsTemplates = join('src', 'grids_templates', lang);
  if (existsSync(srcGridsTemplates)) {
    cpSync(srcGridsTemplates, destGridsTemplates, { recursive: true });
    console.log(`[${lang}] Copied grids_templates/`);
  }

  // 4. Copy images directory
  const srcImages = join(srcComponents, 'images');
  const destImages = join(destDir, 'images');
  if (existsSync(srcImages)) {
    cpSync(srcImages, destImages, { recursive: true });
    console.log(`[${lang}] Copied images/`);
  }

  // 5. Convert toc.yml → toc.json
  const jsonData = tocToJson(tocData);
  const tocJsonPath = join(destDir, 'toc.json');
  mkdirSync(dirname(tocJsonPath), { recursive: true });
  writeFileSync(tocJsonPath, JSON.stringify(jsonData, null, 2) + '\n', 'utf-8');
  console.log(`[${lang}] Wrote toc.json (${jsonData.length} top-level entries)`);

  // 6. Copy environment.json
  if (existsSync(srcEnvJson)) {
    const destEnvPath = join(destDir, 'environment.json');
    cpSync(srcEnvJson, destEnvPath);
    console.log(`[${lang}] Copied environment.json`);
  }
}

// ── Main ───────────────────────────────────────────────────────────────────
for (const lang of LANGS) {
  processLanguage(lang);
}

console.log('\nDone.');
