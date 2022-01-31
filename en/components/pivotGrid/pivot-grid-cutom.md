---
title: Angular Pivot Grid Custom Remote | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, angular material pivot table, ignite ui for angular, pivot grid customization, pivot grid remote, pivot remote
---


# Remote Operations

In scenarios where the pivot data is already grouped and aggregated from a remote service and there's no need for further processing on the client, the pivot can be configured to use a custom empty strategy that will skip data processing on the client and allow to directly display the data as is:

```typescript
 public pivotConfigHierarchy: IPivotConfiguration = {
        columnStrategy: NoopPivotDimensionsStrategy.instance(),
        rowStrategy: NoopPivotDimensionsStrategy.instance(),
 }
```

The users have the ability to achieve certain scenarios by feeding the pivot grid with already aggregated data.
There are some requirements, how the data should look like. And some specifics if you need to have hierarchies into the pivot view:
```typescript
public aggregatedData = [
    {
        ProductCategory: 'All', AllProducts: 'All Products', All: 1000, 'All-Bulgaria': 774, 'All-USA': 829, 'All-Uruguay': 524, AllProducts_records: [
            { ProductCategory: 'Clothing', 'All-Bulgaria': 774, 'All-USA': 296, 'All-Uruguay': 456 },
            { ProductCategory: 'Bikes', 'All-Uruguay': 68 },
            { ProductCategory: 'Accessories', 'All-USA': 293 },
            { ProductCategory: 'Components', 'All-USA': 240 }
        ]
    }
];
```
The pivot pipes need some fields to be unique and not appear into the actual data fields. They are used to achieve the calculations per record - to store aggregated data, to refer to the child rows, etc.
If there is an interference with them into the data and the data cannot be changed, the `pivotKeys` property can be used to change the default pivotKeys.
The defaults are:

```typescript
export const DEFAULT_PIVOT_KEYS = {
    aggregations: 'aggregations', records: 'records', children: 'children', level: 'level',
    rowDimensionSeparator: '_', columnDimensionSeparator: '-'
};
```
Note that the generation of the columns is not achieved through `igx-column` templates inside the `igx-pivot-grid` template as in `igx-grid`. The columns of the pivot grid should be defined into the `PivotConfiguration`. Also there is no auto-generation so in order for a column to be included into the pivot view, it should declared and enabled in `PivotConfiguration`.

Setting `NoopPivotDimensionsStrategy` for the `columnStrategy` and `rowStrategy` will skip the data grouping and aggregation done by the pipes, but the pivot grid will still need the declarations of the rows, columns, values and filters in order to render the pivot view as expected:
```
rows: [
    {
        memberName: 'AllProducts',
        memberFunction: () => 'All Products',
        enabled: true,
        childLevel: {
            memberName: 'ProductCategory',
            enabled: true
        }
    }
],
columns: [
    {
        memberName: 'All',
        enabled: true,
        childLevel: {
            memberName: 'Country',
            enabled: true
        }
    }
],
values: [
    {
        member: 'UnitsSold',
        aggregate: {
            aggregator: IgxPivotNumericAggregate.sum,
            key: 'sum',
            label: 'Sum'
        },
        enabled: true
    },
]
```
And its important for the data to match the configuration. For best results, no additional fields should be included into the aggregated data and no fields from the provided data should be left undeclared as rows or columns. The `IgxPivotGrid` builds it's data based on the `PivotConfiguration` and it is expected for the configuration and aggregated data to match accordingly.

Similarly for other remote data operations like sorting and filtering, data processing can be skipped by setting the related empty strategies - `filterStrategy`, `sortStrategy`:

```html
<igx-pivot-grid [filterStrategy]="noopFilterStrategy" [sortStrategy]="noopSortStrategy" ...>
</igx-pivot-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```
