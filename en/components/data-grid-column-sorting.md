---
title: React Data Grid | Table Controls | Ignite UI for Angular | Sorting | Infragistics
_description: Get started with the Ignite UI for Angular Data Table / Data Grid sort feature and learn how to configure a mix of sortable columns with rich API and react events
_keywords: react table, sorting, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid', 'HeaderClickAction']
---

## Column Sorting

The Ignite UI for Angular Data Table / Data Grid supports ascending and descending column sorting with a Single Column, Multi-Column and Tri-State Column Sorting configuration.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-grid-column-sorting-iframe" src='{environment:demosBaseUrl}/grids/data-grid-column-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="data-grid-column-sorting-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Snippet

You can sort by a single or multiple column ascending or descending in the Angular data grid by using the [`headerClickAction`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegridcomponent.html#headerclickaction) property. If TriState is enabled you can remove the sort applied to a column.

-   [`SortByMultipleColumns`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/headerclickaction.html#sortbymultiplecolumns)
-   [`SortByMultipleColumnsTriState`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/headerclickaction.html#sortbymultiplecolumnstristate)
-   [`SortByOneColumnOnly`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/headerclickaction.html#sortbyonecolumnonly)
-   [`SortByOneColumnOnlyTriState`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/headerclickaction.html#sortbyonecolumnonlytristate)

```ts
import { HeaderClickAction } from "igniteui-react-grids/ES5/HeaderClickAction";
```

### Sorting through API

```ts
import { ColumnSortDescription } from "igniteui-react-grids/ES5/igr-column-sort-description";
import { ListSortDirection } from "igniteui-react-core/ES5/ListSortDirection";
```
