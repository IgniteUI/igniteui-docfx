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

## Dimensions configuration

Each basic dimension configuration requires a `memberName` that matches a field from the provided `data` or a `memberFunction` that extracts a value from the record in case of complex objects or other custom scenarios.

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

The following predefined hierarchies can also be used:
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

Similarly a value configuration requires a `member` that matches a field from the provided `data` or it can define a custom `aggregator` function for more complex custom scenarios. Out of the box there are the following aggregations that can be used out of the box depending on the data type of the field:
- `IgxPivotNumericAggregate` - for numeric field. Contains the following aggregation functions: sum, avg, min, max.
- `IgxPivotDateAggregate` - for date field - Contains the following aggregation functions: latest, earliest.
- `IgxPivotTimeAggregate` - for time field. - Contains the following aggregation functions: latest, earliest.
- `IgxPivotAggregate`, ` - for any other data type. Contains the following aggregation functions:  - count.

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

This configuration defines 1 row, 1 column and 1 aggregation that sums the values of each dimension groups, resulting in the following view:

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/pivot-basic-sample" alt="Angular Pivot Grid Basic Example">
</code-view>

Row groups are displayed vertically on the left.


# Pivot Grid Features

## Filtering

## Sorting

## Resizing

## Selection

# Remote Operations
