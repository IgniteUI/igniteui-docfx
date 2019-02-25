---
title: Tree Grid Sorting
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Sorting, sort
---

### Tree Grid Sorting

In Ignite UI for Angular Tree Grid, **Sorting** is enabled on a per-column level, meaning that the **igx-tree-grid** can have a mix of sortable and non-sortable columns.

#### Demo
Additionally there is a custom contextmenu added for sorting using **igx-tree-grid**'s [`onContextMenu`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#oncontextmenu) Output.




<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>



<div class="divider--half"></div>

This is done via the [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) input. With the Tree Grid sorting, you can also set the [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) property to perform case sensitive sorting:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

#### Sorting through the API

You can sort any column or a combination of columns through the Tree Grid API using the Tree Grid [`sort`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#sort) method:

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.treeGrid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.treeGrid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear sorting state using the [`clearSort`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#clearsort) method:

```typescript
// Removes the sorting state from the ProductName column
this.treeGrid.clearSort('ProductName');

// Removes the sorting state from every column in the Tree Grid
this.treeGrid.clearSort();
```

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the Tree Grid.

#### Initial sorting state

It is possible to set the initial sorting state of the Tree Grid by passing an array of sorting expressions to the [`sortingExpressions`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#sortingexpressions) property of the Tree Grid.

```typescript
public ngOnInit() {
    this.treeGrid.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> If values of type `string` are used by column of [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date`, the Tree Grid won't parse it to `Date` objects and using Tree Grid `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` object.

<div class="divider--half"></div>



### API References
* [IgxTreeGridComponent API]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxTreeGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

### Additional Resources
<div class="divider--half"></div>

* [Tree Grid overview](tree_grid.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)