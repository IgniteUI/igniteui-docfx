---
title: Angular Pivot Grid | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, angular material pivot table, ignite ui for angular
---

# Pivot Grid Overview

The Angular Pivot Component allows users to configure and display their data in a multi-dimensional pivot table structure where the rows and columns represent distinct data groups and the data cell values represent aggregations (Sum, Min, Max etc.) to allow complex data analysis based on a simple flat data set.
It is a feature rich pivot table that allows easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

Can be used as a stand-alone component as well as in combination with the Pivot Data Selector Component for more flexible runtime configuration options.

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/pivot-with-selector-sample" alt="Angular Pivot Grid with Pivot Selector Example">
</code-view>

# Pivot Grid Configuration

The `igxPivotGrid` can be configured via the [`pivotConfiguration`](({environment:angularApiUrl}/classes/igxgridcomponent.html#pivotConfiguration)) property.

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

It is defined by 3 main dimensions: `rows`, `columns` and `values`. The `rows` and `columns` define the grouped structure that will be displayed in the rows and columns of the grid. The `values` define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the `filters` configurations property. It can be used for fields that you do not want to add as dimension or value but would like to filter their related member's values via the UI.

## Dimensions configuration

Each basic dimension configuration requires a `memberName` that matches a field from the provided `data` or a `memberFunction` that extracts a value from the record in case of complex objects or other custom scenarios.

Multiple sibling dimensions can be defined, which will create a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips via drag & drop.

A dimension can also describe an expandable hierarchy via the `childLevel` property, for example:
```typescript
   {
            memberFunction: () => 'All',
            memberName: 'AllProducts',
            enabled: true,
            childLevel: {
                memberFunction: (data) => data.ProductCategory,
                memberName: 'ProductCategory',
                enabled: true
            }
    }

```
In which case the dimension will render an expander in the related section of the grid (row or column) and will allow the children to be expanded or collapsed as part of the hierarchy.


## Predefined dimensions

As part of the pivot grid some additional predefined dimensions are exposed for easier configuration:
- `IgxPivotDateDimension` 
    Can be used for date fields. Describes the following hierarchy by default:
    - All Periods
    - Years
    - Quarters
    - Months
    - Full Date

Can be set for rows or columns, for example:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        new IgxPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```

Allows further customization via the second option parameter in order to enabled or disable a particular part of the hierarchy, for example:

```typescript
 new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```


## Values configuration

A value configuration requires a `member` that matches a field from the provided `data` or it can define a custom `aggregator` function for more complex custom scenarios. Out of the box there are 4 predefined aggregations that can be used depending on the data type of the data field:

- `IgxPivotNumericAggregate` - for numeric field.
    Contains the following aggregation functions: `SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `IgxPivotDateAggregate` - for date field.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotTimeAggregate` - for time field.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotAggregate` - for any other data type. This is the base aggregation.
    Contains the following aggregation functions: `COUNT`.

The current aggregation function can be changed runtime using the value chip's drop-down. By default it displays a list of available aggregations based on the field's data type.A custom list of aggregations can also be set via the `aggregateList` property, for example:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    values: [
            {
                member: 'AmountOfSale',
                displayName: 'Amount of Sale',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                },
                aggregateList: [{
                    key: 'SUM',
                    aggregator: IgxTotalSaleAggregate.totalSale,
                    label: 'Sum of Sale'
                }, {
                    key: 'MIN',
                    aggregator: IgxTotalSaleAggregate.totalMin,
                    label: 'Minimum of Sale'
                }, {
                    key: 'MAX',
                    aggregator: IgxTotalSaleAggregate.totalMax,
                    label: 'Maximum of Sale'
                }]
            }
        ]
}
```


## Full configuration example:

Let's take a look at a basic pivot configuration:

```typescript
  public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {
                memberName: 'Country',
                enabled: true
            }
        ],
        rows: [
            {
                memberName: 'ProductCategory',
                enabled: true
            }
        ],
        values: [
            {
                member: 'UnitsSold',
                aggregate: {
                    key: 'SUM',
                    aggregator: IgxPivotNumericAggregate.sum,
                    label: 'Sum'
                }
            }
        ]
```

This configuration defines 1 row, 1 column and 1 aggregation that sums the values of each dimension groups.
The members match fields available in the provided data source:

```typescript
public data = [
        {
            ProductCategory: 'Clothing', UnitPrice: 12.81, SellerName: 'Stanley',
            Country: 'Bulgaria', City: 'Sofia', Date: '01/01/2021', UnitsSold: 282
        },
        {
            ProductCategory: 'Clothing', UnitPrice: 49.57, SellerName: 'Elisa',
            Country: 'USA', City: 'New York', Date: '01/05/2019', UnitsSold: 296
        },
        //...
        ];

```


Resulting in the following view, which groups the Product Categories unique rows, Countries in unique columns and displays the related aggregations for those groups in the related cells:

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/pivot-basic-sample" alt="Angular Pivot Grid Basic Example">
</code-view>


# Pivot Grid Features

The `igxPivotGrid` inherits the `igxBaseGrid` and as such inherits some of its functionality and features.

Note that some features don't make sense in the context of a pivot table and as such cannot be enabled for the `igxPivotGrid`, such as:
- CRUD operations
- Grouping 
- Row/Column Pinning
- Summaries 
- Paging

The Pivot Grid has additional features and functionalities related to its dimensions as described below.

## Filtering Dimensions

All dimensions can be filtered via the chip UI or via the API.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.
In case the dimension has a hierarchy, the values are displayed in a tree-like structure to retain the parent-child relationship between the values.

Dimension can also be filtered initially via the dimension configuration from `pivotConfiguration` via the dimension's `filter` property.
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

## Sorting Dimensions

Dimension values in the `rows` or `column` can be sorted via the related chip or via the API.

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

## Resizing Dimensions

Row dimensions can be resized similarly to column resizing - via a resizing indicator that can be found on the right edge of the cells.
They can also be auto-sized via double clicking on the resize indicator or via the related API - `autoSizeRowDimension`.

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

## Selection of Dimensions

The Pivot Grid supports single selection, which can be enabled as in the base grid. For example:

```html
<igx-pivot-grid #grid1 [rowSelection]="'single'" [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

In case there are multiple row or column dimensions, which would create groups that span multiple rows/columns, selection will be applied to all that belong to the selected group.

# Remote Operations

In scenarios where the pivot data is already grouped and aggregated from a remote service and there's no need for further processing on the client the pivot can be configured to use a custom empty strategy that will skip data processing on the client and allow to directly display the data as is:

```typescript
 public pivotConfigHierarchy: IPivotConfiguration = {
        columnStrategy: NoopPivotDimensionsStrategy.instance(),
        rowStrategy: NoopPivotDimensionsStrategy.instance(),
 }
```

Similarly for other remote data operations like sorting and filtering, data processing can be skipped by setting the related empty strategies - `filterStrategy`, `sortStrategy`:

```html
<igx-pivot-grid [filterStrategy]="noopFilterStrategy" [sortStrategy]="noopSortStrategy" ...>
</igx-pivot-grid>
```

```typescript
    public noopFilterStrategy = NoopFilteringStrategy.instance();
    public noopSortStrategy = NoopSortingStrategy.instance();
```

# Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generated its columns based on the `columns` configuration so setting them declaratively like in the base grid is not supported. Such columns will be disregarded. |
| Setting duplicate `memberName` or `member` property values for dimensions/values. | `memberName`/`member` should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in `single` mode. | Multiple selection is currently not supported. |

## API References
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)