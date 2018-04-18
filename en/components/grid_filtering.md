---
title: Grid filtering
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Filtering, filter
---

### Grid Filtering


**Filtering** can be enabled on a per-column level, by setting a column `filterable` property to true.

```html
<igx-column field="ProductName" filterable="true" dataType="string"></igx-column>
<igx-column field="Price" filterable="true" dataType="number"></igx-column>
```

#### Grid Demo

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid-filtering-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> The filtering operation **DOES NOT** change the underlying data source of the grid.

Depending on the set `dataType` of the column the correct set of [**filtering conditions**](#filtering-conditions) will be loaded inside the filter UI dropdown. Additionally, you can set the `filteringIgnoreCase` and the initial `filteringCondition` property of the column.

#### Filtering through the API

You can filter any column or a combination of columns through the grid API. The grid exposes two methods for this task:

*   `filter` - filter a single column or a combination of columns.

```typescript
// Single column filtering

// Filter the `ProductName` column for values which `contains` the `myproduct` substring, ignoring case
this.grid.filter('ProductName', 'myproduct', STRING_FILTERS.contains, true);
```

The only required parameters are the column field and the filtering term. Both the condition and the case sensitivity will be inferred from the column properties if not provided. In the case of multiple filtering, the method accepts an array of filtering expressions.

```typescript
// Multi column filtering

this.grid.filter([
    { fieldName: 'ProductName', searchVal: 'myproduct' condition: STRING_FILTERS.contains, ignoreCase: true},
    { fieldName: 'Price', searchVal: 55, condition: NUMBER_FILTERS.greaterThan }
]);
```

*   `filterGlobal` - filter all the columns in the grid

```typescript
// Filter all cells for a value which contains `myproduct`
this.grid.filterGlobal('myproduct', STRING.contains, true);
```

*   `clearFilter` - removes any applied filtering from the target column. If called with no arguments it will clear the filtering of all columns.

```typescript
// Remove the filtering state from the ProductName column
this.grid.clearFilter('ProductName');

// Clears the filtering state from all columns
this.grid.clearFilter();
```

#### Initial filtered state

It is possible to set the initial filtering state of the grid by an array of expressions to the `filteringExpressions` property of the grid.

```typescript
public ngOnInit() {
    this.grid.filteringExpressions = [
        { fieldName: 'ProductName', searchVal: 'myproduct' condition: STRING_FILTERS.contains, ignoreCase: true},
        { fieldName: 'Price', searchVal: 55, condition: NUMBER_FILTERS.greaterThan }
    ];
}
```

#### Filtering logic

The `filteringLogic` property of the grid controls how filtering multiple columns will resolve in the grid. You can change it at any time through the grid API or through the grid input property.

```typescript
import { FilteringLogic } from 'igniteui-angular/main';
...

this.grid.filteringLogic = FilteringLogic.OR;
```

The default value of `AND` returns only the rows that match all the currently applied filtering expressions. Following the example above, a row will be returned when both the 'ProductName' cell value contains 'myproduct' and the 'Price' cell value is greater than 55.

When set to `OR`, a row will be returned when either the 'ProductName' cell value contains 'myproduct' or the 'Price' cell value is greater than 55.

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Virtualization and Performance](grid_virtualization.html)
* [Paging](grid_paging.html)
* [Sorting](grid_sorting.html)
* [Summaries](grid_summaries.html)
* [Column Pinning](grid_column_pinning.html)
* [Column Resizing](grid_column_resizing.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
