---
title: React Data Grid | Table Controls | Ignite UI for Angular | Column Types | Infragistics
_description: Start using the Ignite UI for Angular Data Grid Column Resizing feature in order to change grid column width easily.
_keywords: react table, column resizing, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid', 'ColumnResizingMode', 'ColumnResizingAnimationMode']
---

## Column Resizing

The Ignite UI for Angular Data Grid supports the ability to resize columns, giving you flexibility over how you wish to display your columns with respect to the width of each.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-resizing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

Column resizing in the Ignite UI for Angular DataGrid is on by default, and can be controlled by using the [`columnResizingMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnresizingmode) property of the grid. This property has three options. Each option is explained below:

-   [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnresizingmode.html#deferred): The default option. When resizing, a separator will appear showing how large or small the column will become when resized.
-   [`Immediate`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnresizingmode.html#immediate): When resizing, there will be no separator. The column's width will follow the pointer as you drag the edge of the column and resize accordingly.
-   [`None`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnresizingmode.html#none): Columns cannot be resized.

When column resizing is set to [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnresizingmode.html#deferred), the separator that shows up can be modified in color and width by using the [`columnResizingSeparatorBackground`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnresizingseparatorbackground) and [`columnResizingSeparatorWidth`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnresizingseparatorwidth) properties of the grid, respectively.

You can also animate the columns as they resize when the resizing mode is set to [`Deferred`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnresizingmode.html#deferred) only. This is done by setting the [`columnResizingAnimationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#columnresizinganimationmode) property to [`Interpolate`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/columnresizinganimationmode.html#interpolate).

Each column in the grid can be determined whether or not it can resize individually. If you want to enable or disable resizing on a particular column, you can set the <b>IsResizingEnabled</b> property of that column.

When resizing a star-width column, it will change that column to a fixed column.

### Code Snippet

The following code snippet demonstrates how to implement column resizing in the grid, where the <b>Street</b> column in this case will not be resizable. In this case, the column resizing separator will be 5 pixels wide and the columns that are resizable would animate when resized as well:

```ts
import { ColumnResizingMode } from 'igniteui-react-grids/ES5/ColumnResizingMode';
import { ColumnResizingAnimationMode } from 'igniteui-react-grids/ES5/ColumnResizingAnimationMode';
```
