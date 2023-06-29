---
title: Angular Pivot Grid Features | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, Angular pivot table, ignite ui for angular, pivot grid features, pivot features
---

# Angular Pivot Grid Features

The pivot and flat grid component classes inherit from a common base and thus share some functionality and features.

>[!NOTE]
>Some features do not have meaningful behavior in the context of a pivot table and therefore cannot be enabled for `IgxPivotGrid`. These include:
> - CRUD operations
> - Grouping
> - Row/Column Pinning
> - Summaries
> - Paging

The Pivot Grid component has additional features and functionalities related to its dimensions as described below.

<code-view style="height: 870px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-features" alt="Angular Pivot Grid with Pivot Selector Example">
</code-view>

## Dimensions filtering

All dimensions (filters, rows, columns) can be filtered via the chip UI or the API. This functionality is embedded and enabled by default.

>[!NOTE]
>You can use the filtering dimension to filter out data values which are not a part of the pivot view.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.

>[!NOTE]
>If there is not enough space for all of the filtering chips, the pivot grid will show the ones that were cut off into a dropdown. End-users can access and manipulate them there.

Dimensions can also be filtered initially via the dimension configuration in `pivotConfiguration` with the dimension's `filter` property.
It can be set to a new `FilteringExpressionsTree` with the related filter condition, for example:

```typescript
public filterExpTree = new FilteringExpressionsTree(FilteringLogic.And);

constructor() {
    this.filterExpTree.filteringOperands = [
        {
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            fieldName: 'SellerName',
            searchVal: 'Stanley'
        }
    ];
}

public pivotConfigHierarchy: IPivotConfiguration = {
    filters: [
        {
            memberName: 'SellerName',
            enabled: true,
            filter: this.filterExpTree
        }
    ]
}
```

## Dimensions sorting

Dimension values in the `rows` or `columns` can be sorted via the related chip or the API. This functionality is embedded and enabled by default.

The dimension is sorted on click of the related chip and as a result the dimension values are sorted in ascending/descending order.

Sorting can also be applied initially via the `sortDirection` property of the dimension definition.

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'SellerName',
            enabled: true,
            sortDirection: SortingDirection.Asc
        }
    ]
}
```

## Dimensions resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - `autoSizeRowDimension`.

A different size can also be set initially with the `width` property available in the dimension definition:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        {
            memberName: 'Country',
            enabled: true,
            width: '400px'
        }
    ]
}
```

## Dimensions selection

The Pivot Grid supports single selection which is enabled just like in the base grid. For example:

```html
<igx-pivot-grid #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

In case there are multiple row or column dimensions which would create groups that span multiple rows/columns, selection is applied to all cells that belong to the selected group.

## Super Compact Mode
The `IgxPivotGrid` component provides a `superCompactMode` `@Input`. It is suitable for cases that require a lot of cells to be present on the screen at once. If enabled the option ignores the `displayDensity` option for the pivot grid. Enabling `superCompactMode` also sets the `displayDensity` input to `compact` for each child component(like `IgxChip`) that does not have the `superCompactMode` option.

```html
<igx-pivot-grid [superCompactMode]="true"></igx-pivot-grid>
```

## Additional summary column

When a `column` dimension defines a hierarchy, the pivot grid will render additional summary/total column, which accumulates the aggregations of all of the columns inside the group. When the group is collapsed only the summary column will remain. And when the group is expanded the additional summary column appears at the end of the group.

## Interactions

### Keyboard navigation

Keyboard navigation in `IgxPivotGrid` works similarly to the one in `IgxGrid`. The pivot grid is split into three areas - `rows`, `columns`, `values`. The areas for `rows` and `columns` are considered headers for the purposes of navigation while the area for `values` is the body.
The keyboard arrows allow navigating the active element within the current area only.

### Dimensions drag & drop
The dimensions are represented by chips, which can be dragged & dropped.
All chips can change their order within their area by drag & drop.
The chips from `rows`, `column`, `filter`(dimension chips) can be moved from any of those areas to any other and at any place.
Chips from these areas can not be moved to the `values` area and chips from the `values` area can not be moved to any of the dimension areas.

>[!NOTE]
>The chips from the Pivot Grid can not be moved to the Pivot Data Selector and items from the Pivot Data Selector can not be moved to the Pivot Grid.

## API References
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
* [IgxPivotDataSelectorComponent]({environment:angularApiUrl}/classes/igxpivotdataselectorcomponent.html)


## Additional Resources
<div class="divider--half"></div>
* [Angular Pivot Grid Overview](pivot-grid.md)
* [Angular Pivot Grid Custom Aggregations](pivot-grid-custom.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)

