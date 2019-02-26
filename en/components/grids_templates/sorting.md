@@if (igxName === 'IgxGrid') {
---
title: Grid Sorting
_description: The Ignite UI for Angular Data Grid control features the fastest, touch-responsive data-rich grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Data Grid Sorting, Data Table Sorting, Angular Data Grid Sorting, Angular Data Table Sorting
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Tree Grid Sorting
_description: The Ignite UI for Angular Tree Grid control features the fastest, touch-responsive data-rich tree grid with popular features, including hierarchical and list views.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Tree Grid, Angular Tree Table, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular Tree Grid component, Angular Tree Table component, Angular Tree Grid control, Angular Tree Table control, Angular High Performance Tree Grid, Angular High Performance Tree Table, Tree Grid Sorting, Tree Table Sorting, Angular Tree Grid Sorting, Angular Tree Table Sorting
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Hierarchical Grid Sorting
_description: The Ignite UI for Angular Hierarchical Grid control features the fastest, touch-responsive data-rich hierarchical grid with popular features.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Hierarchical Grid, Angular Hierarchical Table, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular Hierarchical Grid control, Angular Hierarchical Table control, Angular Hierarchical Grid component, Angular Hierarchical Table component, Angular High Performance Hierarchical Grid, Angular High Performance Hierarchical Table, Hierarchical Grid Sorting, Hierarchical Table Sorting, Angular Hierarchical Grid Sorting, Angular Hierarchical Table Sorting
---
}
### @@igComponent Sorting

In Ignite UI for Angular @@igComponent, **Sorting** is enabled on a per-column level, meaning that the **@@igSelector** can have a mix of sortable and non-sortable columns.

#### Demo
Additionally there is a custom contextmenu added for sorting using **@@igSelector**'s [`onContextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncontextmenu) Output.


@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-sorting-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

<div class="divider--half"></div>

This is done via the [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) input. With the @@igComponent sorting, you can also set the [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingignorecase) property to perform case sensitive sorting:

```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```

#### Sorting through the API

You can sort any column or a combination of columns through the @@igComponent API using the @@igComponent [`sort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sort) method:

```typescript
import { SortingDirection } from 'igniteui-angular';

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```

> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear sorting state using the [`clearSort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsort) method:

```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('ProductName');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the @@igComponent.

#### Initial sorting state

It is possible to set the initial sorting state of the @@igComponent by passing an array of sorting expressions to the [`sortingExpressions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingexpressions) property of the @@igComponent.

```typescript
public ngOnInit() {
    this.@@igObjectRef.sortingExpressions = [
        { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
        { fieldName: 'Price', dir: SortingDirection.Desc }
    ];
}
```

> [!NOTE]
> If values of type `string` are used by column of [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) `Date`, the @@igComponent won't parse it to `Date` objects and using @@igComponent `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` object.

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
#### Remote Sorting
You can provide @@igComponent's remote sorting by subscribing to [`onDataPreLoad`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ondatapreload) and [`onSortingDone`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onsortingdone) outputs. More information on how to use it you can find in the `@@igComponent Virtualization and Performance` [documentation](virtualization.md#remote-sortingfiltering-virtualization).

<div class="divider--half"></div>
}

### API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
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