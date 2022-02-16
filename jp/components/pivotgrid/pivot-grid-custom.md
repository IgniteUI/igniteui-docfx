---
title: Angular Pivot Grid Custom Remote | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, angular material pivot table, ignite ui for angular, pivot grid customization, pivot grid remote, pivot remote
---


# Remote Operations

In scenarios where the pivot data is already grouped and aggregated from a remote service and there's no need for further processing on the client, the pivot grid can be configured to use a custom empty strategy that will skip data processing on the client and allow it to directly display the data as is:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    columnStrategy: NoopPivotDimensionsStrategy.instance(),
    rowStrategy: NoopPivotDimensionsStrategy.instance(),
}
```

The following example show how to handle scenarios, where the data is already aggregated and how its structure should look like:
<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-noop" alt="Angular Pivot Grid Custom Predefined Aggregations Example">
</code-view>

Users have the ability to achieve certain scenarios by feeding the pivot grid with already aggregated data.
There are some requirements on how the data should look like and some specifics regarding hierarchies in the pivot view. For example, to declare hierarchy in `rows` dimension:

```typescript
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
]
```

And an example of the aggregated would be:

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

The Pivot grid provides the object keys fields it uses to do its pivot calculations.
- `children` - Field that stores children for hierarchy building.
- `records` - Field that stores reference to the original data records.
- `aggregations` - Field that stores aggregation values.
- `level` - Field that stores dimension level based on its hierarchy.
- `columnDimensionSeparator` - Separator used when generating the unique column field values.
- `rowDimensionSeparator` - Separator used when generating the unique row field values.

All of these are stored in the `pivotKeys` property which is part of the `PivotConfiguration` and can be used to change the default pivot keys.
These defaults are:

```typescript
export const DEFAULT_PIVOT_KEYS = {
    aggregations: 'aggregations', records: 'records', children: 'children', level: 'level',
    rowDimensionSeparator: '_', columnDimensionSeparator: '-'
};
```

Setting `NoopPivotDimensionsStrategy` for the `columnStrategy` and `rowStrategy` skips the data grouping and aggregation done by the data pipes, but the pivot grid still needs declarations for the rows, columns, values and filters in order to render the pivot view as expected:

```typescript
public pivotConfig: IPivotConfiguration = {
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
}
```

It is important for the data to match the configuration. For the best results no additional fields should be included into the aggregated data and no fields from the provided data should be left undeclared as rows or columns. The `IgxPivotGrid` component builds its data based on the `PivotConfiguration` and it is expected for the configuration and aggregated data to match accordingly.

Similarly for other remote data operations like sorting and filtering, data processing can be skipped by setting the related empty strategies - `filterStrategy`, `sortStrategy`:

```html
<igx-pivot-grid [filterStrategy]="noopFilterStrategy" [sortStrategy]="noopSortStrategy" ...>
</igx-pivot-grid>
```

```typescript
public noopFilterStrategy = NoopFilteringStrategy.instance();
public noopSortStrategy = NoopSortingStrategy.instance();
```
