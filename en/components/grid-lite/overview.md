---
title: Angular Grid Lite Overview
_description: Grid Lite features overview
_keywords: overview, {Platform}, {ComponentKeywords}, {ProductName}, Infragistics
mentionedTypes: [{ComponentApiMembers}]
namespace: Infragistics.Controls
---

# Open Source JavaScript Grid for Any Project

The Grid Lite component is a free, open-source JavaScript data grid built as a Web Component, which means you can use it dependency-free with or without a web framework.

<code-view style="height:510px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid=lite/app-sample-main" alt="Angular Grid Lite App Sample Main">
</code-view>

Grid Lite is designed to give you the core features that you need to deliver a beautiful data grid / data table experience in your apps. Designed for performance and beauty, the Grid Lite component will work in any framework, on any platform.

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
