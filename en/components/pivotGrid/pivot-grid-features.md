---
title: Angular Pivot Grid Features | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, angular material pivot table, ignite ui for angular, pivot grid features, pivot features
---

# Pivot Grid Features

The `igxPivotGrid` inherits the `igxBaseGrid` and as such inherits some of its functionality and features.

>[!NOTE]
>Some features don't make sense in the context of a pivot table and as such cannot be enabled for the `igxPivotGrid`, such as:
> - CRUD operations
> - Grouping 
> - Row/Column Pinning
> - Summaries 
> - Paging

The Pivot Grid has additional features and functionalities related to its dimensions as described below.

## Dimensions filtering

All dimensions (filters, rows, columns) can be filtered via the chip UI or via the API. This functionality is embedded and enabled by default.

>[!NOTE]
>You can use the filtering dimension to filter out data values, which are not a part of the pivot view.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.
In case the dimension has a hierarchy, the values are displayed in a tree-like structure to retain the parent-child relationship between the values.

Dimensions can also be filtered initially via the dimension configuration in `pivotConfiguration`, via the dimension's `filter` property.
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
```

## Dimensions sorting

Dimension values in the `rows` or `columns` can be sorted via the related chip or via the API. This functionality is embedded and enabled by default.

The dimension is sorted on click of the related chip and as a result the dimension values will be sorted in ascending/descending order.

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
```

## Dimensions resizing

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized by double clicking the resize indicator, or by using the related API - `autoSizeRowDimension`.

A different size can also be set initially via the `width` property available in the dimension definition:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
rows: [
{
            memberName: 'Country',
            enabled: true,
            width: '400px'
}]
```

## Dimensions selection

The Pivot Grid supports single selection, which can be enabled as in the base grid. For example:

```html
<igx-pivot-grid #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

In case there are multiple row or column dimensions, which would create groups that span multiple rows/columns, selection will be applied to all cells that belong to the selected group.

## Super Compact Mode
The `igxPivotGridComponent` provides a `superCompactMode` `@Input` to enable a super compact theme. Suitable for bigger data sets with smaller cell sizes. If enabled the option ignores the `displayDensity` option.
```html
<igx-pivot-grid [superCompactMode]="true"></igx-pivot-grid>
```

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-with-selector-sample" alt="Angular Pivot Grid with Pivot Selector Example">
</code-view>
