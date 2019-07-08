---
title: ig build 
_description: The ig build command builds the application to an output directory.
_keywords: Ignite UI for Angular, UI controls, CLI, Templates, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library
---

## ig build
The ig build command builds the application to an output directory.

### Creating a build

```bash
ig build
```

The build artifacts will be stored in the `output/` directory.

### NPM packages

The `build` command will install the npm packages that the project depends on. By default, it will install the [OSS version of Ignite UI](https://github.com/IgniteUI/ignite-ui) but it checks if a full version is required (if a grid component is added, for example) and will swap the OSS package for the full version, after asking you for your Infragistics credentials. You can find more information on how to install the full package in [this topic](https://www.igniteui.com/help/using-ignite-ui-npm-packages).

### CSS resources

Resources in CSS, such as images and fonts, will be copied over automatically as part of a build.

You'll see these resources be outputted at the root of `output/`.

### Full ES2015 support

Your project is build in ES2015 mode by default.