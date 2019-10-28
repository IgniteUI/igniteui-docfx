---
title: React Data Grid | Table Controls | Ignite UI for Angular | Infragistics
_description: Learn how to use Ignite UI for Angular data grid to create a touch-responsive react component with variety of react events
_keywords: react table, Ignite UI for Angular, infragistics
mentionedTypes: ['Grid']
---

## Angular Table / Grid

The Ignite UI for Angular Data Table / Data Grid is a tabular Angular component that allows you to quickly bind and display your data with little coding or configuration. Features of the Angular data grid include filtering, sorting, templates, row selection, row grouping, row pinning and movable columns.  The Angular data table is optimized for live, streaming data, with the ability to handle unlimited data set size in number of rows or columns.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="live-grid-overview-sample-iframe" src='{environment:demosBaseUrl}/grids/data-grid-local-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="live-grid-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

When installing the Angular grid package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-grids**

### Required Modules

The [`IgxLiveGrid`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlivegrid.html) requires the following modules:

<div class="divider--half"></div>

### Sample Data Source

Now that the Angular data grid module is imported, next is the basic configuration of the Angular grid that binds to local data.

```ts
    this.data = [{
        Discontinued: false,
        OrderDate: new Date("2012-02-12"),
        ProductID: 1,
        ProductName: "Chai",
        QuantityPerUnit: "10 boxes x 20 bags",
        ReorderLevel: 10,
        UnitPrice: 18.0000,
        UnitsInStock: 39
    }, {
        Discontinued: false,
        OrderDate: new Date("2003-03-17"),
        ProductID: 2,
        ProductName: "Chang",
        QuantityPerUnit: "24 - 12 oz bottles",
        ReorderLevel: 25,
        UnitPrice: 19.0000,
        UnitsInStock: 17
    }, {
        Discontinued: false,
        OrderDate: new Date("2006-03-17"),
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        QuantityPerUnit: "12 - 550 ml bottles",
        ReorderLevel: 25,
        UnitPrice: 10.0000,
        UnitsInStock: 13
    }, {
        Discontinued: false,
        OrderDate: new Date("2016-03-17"),
        ProductID: 4,
        ProductName: "Chef Antons Cajun Seasoning",
        QuantityPerUnit: "48 - 6 oz jars",
        ReorderLevel: 0,
        UnitPrice: 22.0000,
        UnitsInStock: 53
    }, {
        Discontinued: true,
        OrderDate: new Date("2011-11-11"),
        ProductID: 5,
        ProductName: "Chef Antons Gumbo Mix",
        QuantityPerUnit: "36 boxes",
        ReorderLevel: 0,
        UnitPrice: 21.3500,
        UnitsInStock: 0
    }];
```

### Code Snippet

The following code demonstrates how to bind the Angular data grid to the above local data.

Auto-generated columns:

Manual definition of columns:

### Additional Resources

-   [Cell Activation](data-grid-cell-activation.md)
-   [Cell Selection](data-grid-cell-selection.md)
-   [Column Animation](data-grid-column-animation.md)
-   [Column Filtering](data-grid-column-filtering.md)
-   [Column Moving](data-grid-column-moving.md)
-   [Column Resizing](data-grid-column-resizing.md)
-   [Column Sorting](data-grid-column-sorting.md)
-   [Column Types](data-grid-column-types.md)
-   [Row Paging](data-grid-row-paging.md)
-   [Row Pinning](data-grid-row-pinning.md)
-   [Row Grouping](data-grid-row-grouping.md)
-   [Performance](data-grid-performance.md)
