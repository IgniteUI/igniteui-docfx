# Ignite UI DocFX Documentation Skill

## Project Overview

This repository is a **DocFX-based documentation site builder** for [Ignite UI for Angular](https://github.com/IgniteUI/igniteui-angular) — a complete set of Material-based UI components for Angular by Infragistics.

The site supports three language versions: **English** (`en/`), **Japanese** (`jp/`), and **Korean** (`kr/`).

## Project Structure

```
/
├── en/                        # English documentation
│   ├── components/            # Component documentation (.md files)
│   │   ├── grid/              # Data Grid docs
│   │   ├── treegrid/          # Tree Grid docs
│   │   ├── hierarchicalgrid/  # Hierarchical Grid docs
│   │   ├── pivotGrid/         # Pivot Grid docs
│   │   ├── charts/            # Charts docs
│   │   ├── general/           # Getting started, guides
│   │   ├── themes/            # Theming docs
│   │   └── grids_templates/   # Shared grid topic templates
│   ├── docfx.json             # DocFX build configuration
│   ├── global.json            # Global metadata
│   ├── environment.json       # Environment-specific settings
│   └── toc.yml                # Table of contents
├── jp/                        # Japanese documentation (same structure)
├── kr/                        # Korean documentation (same structure)
├── gulpfile.js                # Gulp build tasks
├── package.json               # Node.js dependencies and npm scripts
├── .markdownlint.json         # Markdown linting rules
└── cspell.json                # Spell-check configuration
```

## Development Commands

```bash
# Install dependencies (also restores dotnet tools)
npm install

# Start development server (pick a language)
npm start -- --lang en
npm start -- --lang jp
npm start -- --lang kr

# Build static site
npm run build -- --lang en

# Build for staging/production
npm run build-staging -- --lang en
npm run build-production -- --lang en

# Lint markdown files
npm run lint:md

# Spell check
npm run spellcheck

# Run both checks
npm run verify
```

## Documentation File Conventions

### Front Matter

All component documentation files use YAML front matter:

```markdown
---
title: Angular Component Name | Brief description | Infragistics
_description: Detailed description for SEO.
_keywords: keyword1, keyword2, ignite ui for angular
_license: commercial
---
```

### Heading Structure

- Use ATX-style headings (`#`, `##`, `###`)
- Only increment heading levels by one at a time (MD001)
- The top-level `#` heading is the page title
- Section headings use `##`
- Sub-section headings use `###`

### Code Blocks

Always use fenced code blocks (backtick style) with a language identifier:

```markdown
    ```typescript
    // TypeScript code here
    ```

    ```html
    <!-- HTML template here -->
    ```

    ```scss
    // SCSS styles here
    ```

    ```cmd
    ng add igniteui-angular
    ```
```

### Live Sample Integration

Use the `<code-view>` custom element to embed interactive samples:

```html
<code-view style="height: 400px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grids/grid/basic-usage"
           alt="Angular Grid Basic Usage Example">
</code-view>
```

To explicitly set the live editor:

```html
<code-view explicit-editor="stackblitz" ... ></code-view>
<code-view explicit-editor="csb" ... ></code-view>
```

### Collapsible Code Snippets

Use `<div class="fancy-details">` for collapsible sections:

```html
<div class="fancy-details">
    <details>
        <summary>Example summary text</summary>
        <code>
            // code here
        </code>
    </details>
</div>
```

### Alerts / Callouts

```markdown
>[!NOTE]
> This is a note.

>[!WARNING]
> This is a warning.

>[!IMPORTANT]
> This is important information.
```

### Internal Links

Always use relative paths for internal links:

```markdown
[Getting Started](general/getting-started.md)
[Themes](../themes.md)
[Internal anchor](#section-heading)
```

### Images

Always provide `alt` text for images (MD045):

```markdown
![Angular Grid Component](../../images/general/grid-component.png)
```

## Table of Contents (toc.yml)

To add a topic to the navigation, edit `[lang]/components/toc.yml`. Labels can be added to mark topics:

```yaml
- name: Component Name
  href: component-name.md
  new: true      # Mark as new
  updated: true  # Mark as updated
  preview: true  # Mark as preview
  beta: true     # Mark as beta
```

## Markdown Linting Rules

This project enforces the following key rules (configured in `.markdownlint.json`):

| Rule   | Description                                      |
|--------|--------------------------------------------------|
| MD001  | Headings increment by one level only             |
| MD003  | ATX heading style (`#` prefix)                   |
| MD004  | Unordered lists use dashes (`-`)                 |
| MD007  | Unordered list indentation: 2 spaces             |
| MD009  | Trailing spaces: 2 allowed (for line breaks)     |
| MD046  | Code blocks must use fenced style                |
| MD048  | Fenced code blocks use backticks (`` ` ``)       |
| MD049  | Emphasis uses underscores (`_italic_`)           |
| MD050  | Strong uses asterisks (`**bold**`)               |

**Disabled rules** (intentionally not enforced):
- MD013: Line length (long URLs/code allowed)
- MD033: Inline HTML (needed for component demos)
- MD040: Code fence language (not required)
- MD041: First line heading (not always applicable)

## Grid Template System

The grids share many documentation topics via a template system in `grids_templates/`. Changes to shared topics are propagated via Gulp tasks:

- `IgxGridComponent` → `en/components/grid/`
- `IgxTreeGridComponent` → `en/components/treegrid/`
- `IgxHierarchicalGridComponent` → `en/components/hierarchicalgrid/`
- `IgxPivotGridComponent` → `en/components/pivotGrid/`

## Environment Variables

The project uses `NODE_ENV` to configure sample URLs:

- `development` — local development server
- `staging` — staging environment
- `production` — production environment

Create a `.env` file at the project root to set the environment:

```
NODE_ENV=development
```

## Spell Checking

The `cspell.json` file contains a custom dictionary of Ignite UI component names and Angular-specific terms. Add new terms to `cspell.json` if they are flagged as misspelled but are valid technical terms for this project.
