---
title: Grid sorting
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Sorting, sort
---

### Grid Sorting

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the grid.


**Sorting** is also enabled on a per-column level, meaning that the **igx-grid** can have a mix of sortable and non-sortable columns. This is done via the `sortable` input. As with the grid filtering you can also set the `sortingIgnoreCase` property to perform case sensitive sorting.

#### Sorting through the API

You can sort any column or a combination of columns through the grid API using the grid `sort` method:

```typescript
import { SortingDirection } from 'igniteui-angular/main';

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort('ProductName', SortingDirection.Asc, true);

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName' dir: SortingDirection.Asc, true },
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

#### Initial sorting state

It is possible to set the initial sorting state of the grid by passing an array of sorting expressions to the `sortingExpressions` property of the grid.

```typescript
public ngOnInit() {
    this.grid.sortingExpressions = [
        { fieldName: 'ProductName' dir: SortingDirection.Asc, true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```
<div class="divider--half"></div>