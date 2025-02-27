@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Sorting - Ignite UI for Angular
_description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: angular sort, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Sorting - Ignite UI for Angular
_description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: angular sort, ignite ui for angular, infragistics
_canonicalLink: grid/sorting
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Sorting - Ignite UI for Angular
_description: Get started with the Angular sorting feature of Ignite for Angular UI grid! Configure a mix of sortable columns & change the display order of data records.
_keywords: angular sort, ignite ui for angular, infragistics
_canonicalLink: grid/sorting
---
}

# Angular @@igComponent Sorting

In Ignite UI for Angular @@igComponent, data sorting is enabled on a per-column level, meaning that the **@@igSelector** can have a mix of sortable and non-sortable columns. Performing angular sort actions enables you to change the display order of the records based on specified criteria.

>[!NOTE]
> Up until now, grouping/sorting worked in conjunction with each other. In 13.2 version, a new behavior which decouples grouping from sorting is introduced. For example - clearing the grouping will not clear sorting expressions in the grid or vice versa. Still, if a column is both sorted and grouped, grouped expressions take precedence.

## Angular @@igComponent Sorting Overview Example

@@if (igxName === 'IgxGrid') {

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-sample" alt="Angular @@igComponent Sorting Overview Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
Additionally there is a custom context menu added for sorting using **@@igSelector**'s [`contextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#contextMenu) Output.


<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-sorting" alt="Angular @@igComponent Sorting Overview Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
Additionally there is a custom context menu added for sorting using **@@igSelector**'s [`contextMenu`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#contextMenu) Output.


<code-view style="height:510px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting" alt="Angular @@igComponent Sorting Overview Example">
</code-view>

}

<div class="divider--half"></div>

This is done via the [`sortable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortable) input. With the @@igComponent sorting, you can also set the [`sortingIgnoreCase`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortingIgnoreCase) property to perform case sensitive sorting:

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-column field="Name" header="Order Product" [dataType]="'string'" sortable="true"></igx-column>
```
}
@@if (igxName !== 'IgxTreeGrid') {
```html
<igx-column field="ProductName" header="Product Name" [dataType]="'string'" sortable="true"></igx-column>
```
}

## Sorting Indicators
Having a certain amount of sorted columns could be really confusing if there is no indication of the sorted order. 

The **@@igxName** provides a solution for this problem by indicating the index of each sorted column.

@@if(igxName === "IgxGrid"){

<code-view style="height:550px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-indicators" >
</code-view>

}

## Sorting through the API

You can sort any column or a combination of columns through the @@igComponent API using the @@igComponent [`sort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sort) method:

@@if (igxName === 'IgxTreeGrid') {
```typescript
import { SortingDirection } from 'igniteui-angular';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'Name', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'Name', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'UnitPrice', dir: SortingDirection.Desc }
]);
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
import { SortingDirection } from 'igniteui-angular';
// import { SortingDirection } from '@infragistics/igniteui-angular'; for licensed package

// Perform a case insensitive ascending sort on the ProductName column.
this.@@igObjectRef.sort({ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true });

// Perform sorting on both the ProductName and Price columns.
this.@@igObjectRef.sort([
    { fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true },
    { fieldName: 'Price', dir: SortingDirection.Desc }
]);
```
}

> [!NOTE]
> Sorting is performed using our [`DefaultSortingStrategy`]({environment:angularApiUrl}/classes/defaultsortingstrategy.html) algorithm. Any [`IgxColumnComponent`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) or [`ISortingExpression`]({environment:angularApiUrl}/interfaces/isortingexpression.html#strategy) can use a custom implementation of the [`ISortingStrategy`]({environment:angularApiUrl}/interfaces/isortingstrategy.html) as a substitute algorithm. This is useful when custom sorting needs to be defined for complex template columns, or image columns, for example.

As with the filtering behavior, you can clear the sorting state by using the [`clearSort`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#clearsort) method:

@@if (igxName === 'IgxTreeGrid') {
```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('Name');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```
}
@@if (igxName !== 'IgxTreeGrid') {
```typescript
// Removes the sorting state from the ProductName column
this.@@igObjectRef.clearSort('ProductName');

// Removes the sorting state from every column in the @@igComponent
this.@@igObjectRef.clearSort();
```
}

> [!NOTE]
> The [`sortStrategy`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortStrategy) of the **@@igComponent** is of different type compared to the [`sortStrategy`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#sortStrategy) of the **column**, since they work in different scopes and expose different parameters.

> [!NOTE]
> The sorting operation **DOES NOT** change the underlying data source of the @@igComponent.

## Initial sorting state

It is possible to set the initial sorting state of the @@igComponent by passing an array of sorting expressions to the [`sortingExpressions`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#sortingExpressions) property of the @@igComponent.

@@if (igxName === 'IgxGrid') {
```typescript
public ngAfterViewInit(): void {
    this.@@igObjectRef.sortingExpressions = [
        {
            dir: SortingDirection.Asc, fieldName: 'CategoryName',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance()
        }
    ];
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
public ngAfterViewInit(): void {
    this.@@igObjectRef.sortingExpressions = [
        { 
            dir: SortingDirection.Asc, fieldName: 'UnitPrice',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance() 
        }
    ];
}
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
public ngOnInit(): void {
    this.@@igObjectRef.sortingExpressions = [
        { 
            dir: SortingDirection.Asc, fieldName: 'Artist',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance() 
        }
    ];
}
```
}

> [!NOTE]
> If values of type `string` are used by a column of [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#dataType) `Date`, the @@igComponent won't parse them to `Date` objects and using @@igComponent `sorting` won't work as expected. If you want to use `string` objects, additional logic should be implemented on an application level, in order to parse the values to `Date` objects.

<div class="divider--half"></div>

@@if (igxName === 'IgxGrid') {
## Remote Sorting

The @@igComponent supports remote sorting, which is demonstrated in the [`@@igComponent Remote Data Operations`](remote-data-operations.md) topic.

<div class="divider--half"></div>
}

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

Following the simplest approach, we create a new theme that extends the [`grid-theme`]({environment:sassApiUrl}/index.html#function-grid-theme) and accepts the `$sorted-header-icon-color` and `sortable-header-icon-hover-color` parameters.

```scss
$custom-theme: grid-theme(
  $sorted-header-icon-color: #ffb06a,
  $sortable-header-icon-hover-color: black
);
```

>[!NOTE]
>Instead of hardcoding the color values like we just did, we can achieve greater flexibility in terms of colors by using the [`palette`]({environment:sassApiUrl}/index.html#function-palette) and [`color`]({environment:sassApiUrl}/index.html#function-color) functions. Please refer to [`Palettes`](../themes/sass/palettes.md) topic for detailed guidance on how to use them.

The last step is to **include** the component mixins: 

```scss
@include css-vars($custom-theme);
```

@@if (igxName === 'IgxGrid') {
### Demo


<code-view style="height:550px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-sorting-styling" >
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {
### Demo


<code-view style="height:550px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-sorting-styling" >
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {
### Demo


<code-view style="height:510px" 
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-sorting-styling" >
</code-view>

}

>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.

## API References
* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-grid-theme)
* [ISortingExpression]({environment:angularApiUrl}/interfaces/isortingexpression.html)

## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Summaries](summaries.md)
* [Column Moving](column-moving.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
