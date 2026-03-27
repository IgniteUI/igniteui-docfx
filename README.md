# Ignite UI for Angular Docs (Astro + Starlight)

The Astro-based migration of the [igniteui-docfx](https://github.com/IgniteUI/igniteui-docfx) documentation site for Ignite UI for Angular. Built with [Astro Starlight](https://starlight.astro.build) and the internal `docs-template` integration.

---

## Prerequisites

- **Node.js** 18 or later
- **docs-template** package at `C:/Repos/docs/docs-template`
  (referenced as a `file:` dependency in `package.json`)

---

## Getting started

```bash
npm install
npm run dev          # English, development env → http://localhost:4321
```

---

## Build commands

The build depends on two environment variables:

| Variable    | Values                                    | Default       |
| :---------- | :---------------------------------------- | :------------ |
| `NODE_ENV`  | `development`, `staging`, `production`    | `development` |
| `DOCS_LANG` | `en`, `jp`, `kr`                          | `en`          |

All combinations are available as npm scripts:

### Development server

```bash
npm run dev            # English (default)
npm run dev:en         # English (explicit)
npm run dev:jp         # Japanese
npm run dev:kr         # Korean
```

### Build (development URLs)

```bash
npm run build          # English (default)
npm run build:en       # English (explicit)
npm run build:jp       # Japanese
npm run build:kr       # Korean
```

### Build for staging

```bash
npm run build-staging         # English (default)
npm run build-staging:en      # English (explicit)
npm run build-staging:jp      # Japanese
npm run build-staging:kr      # Korean
```

### Build for production

```bash
npm run build-production         # English (default)
npm run build-production:en      # English (explicit)
npm run build-production:jp      # Japanese
npm run build-production:kr      # Korean
```

### Preview

```bash
npm run preview        # serve the last build locally
```

---

## Environment variables

Documentation uses `{environment:variableName}` tokens inside markdown that are resolved **at build time**.

All variable values are defined in each language's `environment.json` (e.g. `src/content/en/environment.json`), keyed by `NODE_ENV` (`development`, `staging`, `production`).

At startup, `astro.config.mjs` reads `NODE_ENV` and `DOCS_LANG`, and the `remark-env` plugin resolves every `{environment:key}` token at render time using the matching variable set from `environment.json`.

Key variables:

| Token | Description |
| :---- | :---------- |
| `{environment:demosBaseUrl}` | Base URL for Angular sample iframes |
| `{environment:dvDemosBaseUrl}` | Data Visualization samples base URL |
| `{environment:lobDemosBaseUrl}` | LOB samples base URL |
| `{environment:angularApiUrl}` | TypeScript API docs base URL |
| `{environment:sassApiUrl}` | SASS API docs base URL |
| `{environment:infragisticsBaseUrl}` | Main Infragistics site base URL |

You can also set these via a `.env` file at the project root:

```
NODE_ENV=development
DOCS_LANG=en
```

---

## How it works

### 1. Content source

Markdown files live in `src/content/{lang}/` (e.g. `src/content/en/`). They are either:

- **Flat docs** — individual `.md` files (e.g. `accordion.md`, `calendar.md`).
- **Grid template pages** — shared templates in `src/content/{lang}/grids_templates/` expanded at build time into per-variant pages.

### 2. Grid page generation (`src/generate-grids.mjs`)

Grid, Tree Grid, Hierarchical Grid, and Pivot Grid share documentation via DocFX-style conditional templates:

```
@@if (igxName === 'IgxGrid') { ... }
@@if (igxName === 'IgxTreeGrid') { ... }
```

`generateGridTopics()` runs before Astro starts, evaluates the `@@if` blocks and replaces `@@variable` placeholders for each grid variant, writing resolved files into `src/content/{lang}/grid/`, `treegrid/`, `hierarchicalgrid/`, and `pivotGrid/`.

### 3. Environment token resolution

The `remark-env` remark plugin resolves `{environment:key}` tokens at render time using the values from `src/content/{lang}/environment.json` matching the current `NODE_ENV`.

### 4. Image path normalization

`normalizeImagePaths()` rewrites relative `../images/` paths to absolute `/images/` so Astro resolves them from `public/`.

### 5. Navigation (`src/content/{lang}/toc.json`)

The sidebar is driven by `toc.json`, consumed by the `docs-template` integration via `source.tocPath`.

### 6. Site configuration (`astro.config.mjs`)

```js
createDocsSite({
  site: 'https://www.infragistics.com/products/ignite-ui-angular',
  platform: 'angular',
  navLang: docsLang === 'jp' ? 'ja' : docsLang,
  mode,                          // 'dev' | 'staging' | 'prod'
  source: {
    tocPath: `./src/content/${docsLang}/toc.json`,
    docsDir: `./src/content/${docsLang}`,
  },
})
```

---

## Project structure

```
.
├── .github/
│   └── CONTRIBUTING.md            Contribution guidelines
├── public/
│   └── images/                    Static images referenced by docs
├── scripts/
│   └── sync-docfx.mjs             Pull content from igniteui-docfx
├── src/
│   ├── content/
│   │   ├── en/                    English docs + toc.json + environment.json
│   │   ├── jp/                    Japanese docs + toc.json + environment.json
│   │   └── kr/                    Korean docs + toc.json + environment.json
│   │       ├── grids_templates/   Shared @@if-templated source files
│   │       ├── grid/              Generated IgxGrid pages
│   │       ├── treegrid/          Generated IgxTreeGrid pages
│   │       ├── hierarchicalgrid/  Generated IgxHierarchicalGrid pages
│   │       ├── pivotGrid/         Generated IgxPivotGrid pages
│   │       ├── toc.json           Sidebar navigation
│   │       └── environment.json   Environment variables (dev/staging/prod)
│   ├── content.config.ts          Astro content collection schema
│   ├── generate-grids.mjs         Build-time grid page generator
│   └── plugins/
│       └── remark-env.mjs         Remark plugin for {environment:} tokens
├── astro.config.mjs               Main site config (grid gen, createDocsSite)
└── package.json                   Build scripts for all lang/env combinations
```

---

## Migrated from igniteui-docfx

This project replaces the DocFX + Gulp build pipeline with Astro + Starlight. Key changes:

| DocFX | Astro |
| :---- | :---- |
| `gulp serve --lang en` | `npm run dev:en` |
| `cross-env NODE_ENV=staging gulp build --lang jp` | `npm run build-staging:jp` |
| `cross-env NODE_ENV=production gulp build --lang kr` | `npm run build-production:kr` |
| DocFX `docfx.json` | `astro.config.mjs` + `createDocsSite()` |
| `gulp-file-include` (@@if/@@var) | `src/generate-grids.mjs` |
| `environment.json` per locale dir | `src/content/{lang}/environment.json` per locale |
| DocFX template (`igniteui-docfx-template`) | `docs-template` Astro integration |
