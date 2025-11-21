---
title: Angular Grid Lite Overview | Ignite UI for Angular | MIT license
_description: Create apps with our open-source Angular Grid Lite. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Open Source JavaScript Grid for Any Project

The Ignite UI for Angular Grid Lite component is part of Infragistics’ new open-source UI component set that will be actively supported and maintained. It is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. There are 40+ OSS controls now available under the MIT license across Angular, React, Blazor, and Web Components.

The Angular Grid Lite delivers essential data-display functionality with minimal overhead and the performance users expect. It is designed for developers who need fast, lightweight data presentation without the complexity of an enterprise grid.

Angular Grid Lite features:

- Column Filtering
- Hiding
- Resizing
- Sorting
- Row Virtualization
- Accessibility
- Themes And Styling
- Column Data Types

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/overview" alt="Angular Grid Lite App Sample Main">
</code-view>

Grid Lite controls are completely free, MIT licensed, as a part of our initiative to make Ignite UI more open, transparent, and accessible. However, if your project scales and grows in complexity and functionality, and you require an enterprise-grade application, we have an upgrade strategy for transitioning from the Grid Lite to the full-featured and advanced Data Grid.  

Angular <a href="https://custom-elements-everywhere.com/#angular" target="_blank">supports</a> custom elements, so you can use Grid Lite with ease.

## Installation

To add Grid Lite to your Angular application, install the package from npm.

```shell
npm install igniteui-grid-lite
```

## Configuration

Before starting the application, make sure to import and pass the custom element schema as shown below.

```typescript
// app.component.ts

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IgcGridLite, ColumnConfiguration } from 'igniteui-grid-lite';

IgcGridLite.register();

@Component({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  template: `
    <main>
      <igc-grid-lite [columns]="columns" [data]="products">
      </igc-grid-lite>
    </main>
  `
})
export class AppComponent {
  columns: ColumnConfiguration<Products> = [...];
  products: Products[] = [...];
}

```

## Performance Built In

Row-level virtualization allows you to render unlimited amounts of data with smooth scrolling.

## Automatic Column Types

Column types are automatically generated base on your data source with built-in filtering based on column type.

## Custom Column Templates

Deliver any type of UX with column templates. Anything you imagine can render in a grid column!

## Interactive Features

All the core interactive features your users expect, like column filtering, column hiding, column resizing, columns sorting, and more!

## Beautiful UX & Branding

Built-in theme support for Bootstrap, Material & Fluent, plus endless branding options in color palettes, fonts, elevation, display density & more.

## Rich Keyboard Navigation

Full Excel-style keyboard navigation gives user the experience they expect with high-performance keyboard navigation.
