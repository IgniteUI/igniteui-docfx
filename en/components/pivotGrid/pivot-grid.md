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

The pivot grid can be configured via the `pivotConfiguration` property.

```
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
```
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

```
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        new IgxPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```

Allows further customization via the second option parameter in order to enabled or disable a particular part of the hierarchy, for example:

```
 new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```


## Values configuration

Similarly a value configuration requires a `member` that matches a field from the provided `data` or it can define a custom `aggregator` function for more complex custom scenarios. Out of the box there are 4 aggregations that can be used depending on the data type of the field:

- `IgxPivotNumericAggregate` - for numeric field. Contains the following aggregation functions: sum, avg, min, max.
- `IgxPivotDateAggregate` - for date field - Contains the following aggregation functions: latest, earliest.
- `IgxPivotTimeAggregate` - for time field. - Contains the following aggregation functions: latest, earliest.
- `IgxPivotAggregate` - for any other data type. Contains the following aggregation functions: count.

The current aggregation can also be changed runtime using the value chip's drop-down. By default it displays a list of available aggregations based on the field's data type.A custom list of aggregations can also be set via the `aggregateList` property, for example:

```
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

```
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

```
public data = [
        {
            ProductCategory: 'Clothing', UnitPrice: 12.81, SellerName: 'Stanley',
            Country: 'Bulgaria', City: 'Sofia', Date: '01/01/2021', UnitsSold: 282
        },
        {
            ProductCategory: 'Clothing', UnitPrice: 49.57, SellerName: 'Elisa',
            Country: 'USA', City: 'New York', Date: '01/05/2019', UnitsSold: 296
        },
        {
            ProductCategory: 'Bikes', UnitPrice: 3.56, SellerName: 'Lydia',
            Country: 'Uruguay', City: 'Ciudad de la Costa', Date: '01/06/2020', UnitsSold: 68
        },
        {
            ProductCategory: 'Accessories', UnitPrice: 85.58, SellerName: 'David',
            Country: 'USA', City: 'New York', Date: '04/07/2021', UnitsSold: 293
        },
        {
            ProductCategory: 'Components', UnitPrice: 18.13, SellerName: 'John',
            Country: 'USA', City: 'New York', Date: '12/08/2021', UnitsSold: 240
        },
        {
            ProductCategory: 'Clothing', UnitPrice: 68.33, SellerName: 'Larry',
            Country: 'Uruguay', City: 'Ciudad de la Costa', Date: '05/12/2020', UnitsSold: 456
        },
        {
            ProductCategory: 'Clothing', UnitPrice: 16.05, SellerName: 'Walter',
            Country: 'Bulgaria', City: 'Plovdiv', Date: '02/19/2020', UnitsSold: 492
        }];

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

The Pivot Grid has additional features and functionalities related to its dimensions:

## Filtering Dimensions

All dimensions can be filtered via the chip UI or via the API.

The filtering UI can be opened via the dimension chips filter icon and allows excel-style filtering of the unique dimension values.
In case the dimension has a hierarchy, the values are displayed in a tree-like structure to retain the parent-child relationship between the values.

Dimension can also be filtered initially via the dimension configuration from `pivotConfiguration` via the dimension's `filter` property.
It can be set to a new `FilteringExpressionsTree` with the related filter condition, for example:

```
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
...
 public pivotConfigHierarchy: IPivotConfiguration = {
...
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

```
 public pivotConfigHierarchy: IPivotConfiguration = {
...
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

```
public pivotConfigHierarchy: IPivotConfiguration = {
...
rows: [
{
            memberName: 'Country',
            enabled: true,
            width: '400px'
}]
```

## Selection of Dimensions

The Pivot Grid supports single selection, which can be enabled as in the base grid. For example:

```
<igx-pivot-grid #grid1 [rowSelection]="'single'" ...>
</igx-pivot-grid>
```

In case there are multiple row or column dimensions, which would create groups that span multiple rows/columns, selection will be applied to all that belong to the selected group.

# Remote Operations

# Known Issues and Limitations
