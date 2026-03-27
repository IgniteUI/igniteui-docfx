---
title: Angular Grid Sorting - Ignite UI for Angular
_description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: angular sort, ignite ui for angular, infragistics
_license: commercial
---





# Angular Grid Sorting

In Ignite UI for Angular Grid, data sorting is enabled on a per-column level, meaning that the **igx-grid** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.

>[!NOTE]
> Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

## Angular Grid Sorting Overview Example



<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-sample/" alt="Angular Grid Sorting Overview Example">
</code-view>





<div class="divider--half"></div>

This is done via the [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) input. With the Grid sorting, you can also set the [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingIgnoreCase) property to perform case sensitive sorting:




```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```



## Sorting Indicators

Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order.

The **IgxGrid** provides a solution for this problem by indicating the index of each sorted column.



<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-indicators/" >
</code-view>



## Sorting through the API

You can sort any column or a combination of columns through the Grid API using the Grid [`sort`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sort) method:




```typescript
import { SortingDirection } from 'igniteui-angular/grids/core';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package

// Perform a case insensitive ascending sort on the ProductName column.
this.grid.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.grid.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```



> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`]({environment:angularApiUrl}/classes/igxgridcomponent.html#clearsort) method:




```typescript
// Removes the sorting state from the ProductName column
this.grid.clearSort('ProductName');

// Removes the sorting state from every column in the Grid
this.grid.clearSort();
```



> [!NOTE]
> The [`sortStrategy`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortStrategy) of the **Grid** is of different type compared to the [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) of the **column**, since they work in different scopes and expose different parameters.
> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the Grid.

## Initial sorting state

It is possible to set the initial sorting state of the Grid by passing an array of sorting expressions to the [`sortingExpressions`]({environment:angularApiUrl}/classes/igxgridcomponent.html#sortingExpressions) property of the Grid.



```typescript
public ngAfterViewInit(): void {
    this.grid.sortingExpressions = [
        {
            dir: SortingDirection.Asc, fieldName: 'CategoryName',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance()
        }
    ];
}
```







> [!NOTE]
> If values of type `string` are used by a column of [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) `Date`, the Grid won't parse them to `Date` objects and using Grid `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<div class="divider--half"></div>



## Remote Sorting

The Grid supports remote sorting, which is demonstrated in the [`Grid Remote Data Operations`](remote-data-operations.md) topic.

<div class="divider--half"></div>


## Sorting Indicators Templates

The sorting indicator icon in the column header can be customized using a template. The following directives are available for templating the sorting indicator for any sorting state (ascending, descending, none):

- `IgxSortHeaderIconDirective` – re-templates the sorting icon when no sorting is applied.

```html
<ng-template igxSortHeaderIcon>
    <igx-icon>unfold_more</igx-icon>
</ng-template>
```

- `IgxSortAscendingHeaderIconDirective` – re-templates the sorting icon when the column is sorted in ascending order.

```html
<ng-template igxSortAscendingHeaderIcon>
    <igx-icon>expand_less</igx-icon>
</ng-template>
```

- `IgxSortDescendningHeaderIconDirective` – re-templates the sorting icon when the column is sorted in descending order.

```html
<ng-template igxSortDescendingHeaderIcon>
    <igx-icon>expand_more</igx-icon>
</ng-template>
```

<div class="divider--half"></div>

## Styling

To get started with styling the sorting behavior, we need to import the `index` file, where all the theme functions and component mixins live:

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) and accepts the `$sorted-header-icon-color` and `sortable-header-icon-hover-color` parameters.

```scss
$custom-theme: grid-theme(
  $sorted-header-icon-color: #ffb06a,
  $sortable-header-icon-hover-color: black
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/palettes#function-palette) and [`color`]({environment:sassApiUrl}/palettes#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component mixins:

```scss
:host {
  @include tokens($custom-theme);
}
```



### Demo


<code-view style="height:550px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-styling/" >
</code-view>





>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References

- [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
- [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

## Additional Resources

<div class="divider--half"></div>

- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
