---
title: React Data Grid | Table Controls | Ignite UI for Angular | Column Types | Infragistics 
_description: The Ignite UI for Angular Table / Grid component simplifies the complexities of the grid domain into manageable API so that a user can bind a collection of data.
_keywords: react table, Ignite UI for Angular, infragistics
---

## Column Moving

The Ignite UI for Angular Data Grid supports the ability to move columns, giving you the flexibility over how you wish to display your columns with respect to the order of the columns shown.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-moving' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

Column moving in the Ignite UI for Angular Data Grid is on by default, and can be controlled by setting the [`ColumnMovingMode`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html) property of the grid. This property has two options, [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#deferred) or [`None`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#none). [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#deferred) will allow column moving, while [`None`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#none) will disable column moving for the entire grid.

When column moving is set to [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovingmode.html#deferred), a separator will show up while moving a column. While moving a column, once the mouse pointer is released, the moved column will take the place of the column placed to the right of the separator. This separator can also be customized in width and color by using the `ColumnMovingSeparatorWidth` and `ColumnMovingSeparatorBackground` properties, respectively.

You can also animate the column movements, if you wish. This can be done by setting the [`ColumnMovingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnmovinganimationmode.html) property of the grid. Animations are not on by default.

### Code Snippet

The following demonstrates how to implement column moving in the Ignite UI for Angular Data Grid with deferred column moving, animations enabled, and a 5px wide separator:

```ts
import { ColumnMovingAnimationMode } from 'igniteui-react-grids/ES5/ColumnMovingAnimationMode';
import { ColumnMovingMode } from 'igniteui-react-grids/ES5/ColumnMovingMode';
```
