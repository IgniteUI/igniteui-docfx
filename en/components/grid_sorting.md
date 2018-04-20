---
title: Grid sorting
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Sorting, sort
---

### Grid Sorting

In Ignite UI for Angular, **Sorting** is enabled on a per-column level, meaning that the igx-grid can have a mix of sortable and non-sortable columns. This is done via the `sortable` input. With the grid sorting, you can also set the `sortingIgnoreCase` property to perform case sensitive sorting.

### Grid Demo
Additionally there is a custom contextmenu added for sorting using **igx-grid**'s onContextMenu Output.

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


#### Sorting through the API

You can sort any column or a combination of columns through the grid API using the grid `sort` method:

```typescript
import { SortingDirection } from 'igniteui-angular/main';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort('ProductName', SortingDirection.Asc, true);

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

As with the filtering behavior, you can clear sorting state using the `clearSort` method:

```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the grid
this.grid.clearSort();
```

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the grid.

#### Initial sorting state

It is possible to set the initial sorting state of the grid by passing an array of sorting expressions to the `sortingExpressions` property of the grid.

```typescript
public ngOnInit() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName' dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```
<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Summaries](grid_summaries.html)
* [Column Pinning](grid_column_pinning.html)
* [Column Resizing](grid_column_resizing.html)
* [Selection](grid_selection.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
