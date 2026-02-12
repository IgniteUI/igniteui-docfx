---
title: Free Angular Data Grid (Open Source) - Ignite UI Grid Lite | MIT license
_description: Create apps with our open-source Angular Grid Lite. It’s lightweight and packed with essential features - filtering, hiding, sorting, and more. Try now.
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
_license: MIT
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Free & Open-Source Angular Data Grid (Grid Lite) 

The Ignite UI for Angular Grid Lite is a lightweight, high-performance Angular data grid that’s free to use, open-source, and built for modern Angular applications.

This free Angular data grid is open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework. It delivers essential data-display functionality with minimal overhead and the performance users expect. The Angular Grid Lite is designed for developers who need fast and lightweight data presentation. 

## What You Get with our Free Angular Data Grid 

Our free, open-source Angular Grid Lite comes with the following column-based features: sorting, filtering, hiding, resizing and a variety of pre-defined data types. Blazing-fast performance is delivered with the use of row virtualization. In addition, the component supports keyboard navigation and theming through the [Ignite UI Theming Framework](../themes.md). 

Angular <a href="https://custom-elements-everywhere.com/#angular" target="_blank">supports</a> custom elements, so you can use Grid Lite with ease.

## Grid Lite in Action

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid-lite/overview/" alt="Angular Grid Lite App Sample Main">
</code-view>

## Installation and Setup

To add Grid Lite to your Angular application, install the package from npm.

```shell
npm install igniteui-grid-lite
```

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

## Features

### Performance Built In

When you use our Angular data grid for free, you are enabled to implement row-level virtualization. This allows you to render unlimited amounts of data with smooth scrolling.

### Automatic Column Types

Column types are automatically generated base on your data source with built-in filtering based on column type.

### Custom Column Templates

With our Angular data grid open-source control you can also deliver any type of UX with column templates. Anything you imagine can render in a grid column!

### Interactive Features

All the core interactive features your users expect, like column filtering, column hiding, column resizing, columns sorting, and more!

### Beautiful UX & Branding

This free Angular data grid (Grid Lite) comes with built-in theme support for Bootstrap, Material & Fluent, plus endless branding options in color palettes, fonts, elevation, display density & more.

### Rich Keyboard Navigation

Full Excel-style keyboard navigation gives user the experience they expect with high-performance keyboard navigation.

## Is Grid Lite a Free & Open-Source Angular Data Grid?

Yes. Ignite UI Grid Lite is a free, open-source Angular data grid released under the MIT license. You can use it in commercial or personal projects with no licensing fees. It is part of our initiative to make Ignite UI more open, transparent, and accessible. 

- MIT-licensed 

- Free for commercial use 

- Community-driven development 

- No feature gating 

However, if your project scales and grows in complexity and functionality, and you require an enterprise-grade application, we have a seamless upgrade strategy. It will make the transitioning from the free Angular data grid (Grid Lite) to the full-featured and advanced Data Grid simpler and faster. 

Angular supports custom elements, so you can use Grid Lite with ease. 
