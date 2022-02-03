---
title: Angular Pivot Grid | Pivot Tables | Infragistics
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex data analysis via pivot data.
_keywords: angular pivot grid, angular material pivot table, ignite ui for angular
---

# Angular Pivot Grid Overview

The Angular Pivot Grid Component displays data in a [pivot table](http://en.wikipedia.org/wiki/Pivot_table) and helps performing complex analysis on the supplied data set. 

The `IgxPivotGridComponent` allows users to configure and display their data in a multi-dimensional pivot table structure.
 The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows for complex data analysis based on a simple flat data set.
The `IgxPivotGridComponent` is a feature-rich pivot table that allows easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

It can be used as a stand-alone component as well as in combination with the Angular Pivot Data Selector Component for more flexible runtime configuration options.

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-with-selector-sample" alt="Angular Pivot Grid with Pivot Selector Example">
</code-view>

# Angular Pivot Grid Configuration

The Angular Pivot Grid Component can be configured via the [`pivotConfiguration`](({environment:angularApiUrl}/classes/igxgridcomponent.html#pivotConfiguration)) property.

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

It is defined by three main dimensions: `rows`, `columns` and `values`. The `rows` and `columns` define the grouped structure that will be displayed in the rows and columns of the grid. The `values` define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the `filters` configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member's values via the UI.

## Dimensions configuration

Each basic dimension configuration requires a `memberName` that matches a field from the provided `data`, or a `memberFunction` that extracts a value from the record in case of complex objects or other custom scenarios.

Multiple sibling dimensions can be defined, which will create a more complex nested group in the related row or column dimension area.

The dimensions can be reordered or moved from one area to another via their corresponding chips using drag & drop.

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
In this case the dimension will render an expander in the related section of the grid (row or column) and will allow the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded, but this can be controlled with `defaultExpandState` `@Input` of the pivot grid.


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

Allows further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

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

A value configuration requires a `member` that matches a field from the provided `data`, or it can define a custom `aggregator` function for more complex custom scenarios. Out of the box, there are 4 predefined aggregations that can be used depending on the data type of the data field:

- `IgxPivotNumericAggregate` - for numeric fields.
    Contains the following aggregation functions: `SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `IgxPivotDateAggregate` - for date fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotTimeAggregate` - for time fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotAggregate` - for any other data types. This is the base aggregation.
    Contains the following aggregation functions: `COUNT`.

The current aggregation function can be changed runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the `aggregateList` property, for example:

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
The pivot value also provides `displayName` property. It can be used to display custom name of the value instead of member for the column header.

## Enable property

`IPivotConfiguration` is used to describe the current state of the `IgxPivotGridComponent`. There the developer can declare fields of the `data` as `rows`, `columns`, `filters` or `values`. The configuration allows to enable or disable all these elements. If they are enabled, they will be included into the current state of the pivot grid. The `IgxPivotDataSelector` utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there will be a checked or unchecked checkbox accordingly. The users can easily tweak the pivot state by toggling the different elements using their checkboxes.
The property `enable` controls if a given `IPivotDimension` or `IPivotValue` is active and takes part of the pivot view rendered by the pivot grid.

## Full configuration example

Let's take a look at a basic pivot configuration:

```typescript
      public pivotConfigHierarchy: IPivotConfiguration = {
        columns: [
            {

                memberName: 'Product',
                memberFunction: (data) => data.Product.Name,
                enabled: true
            }
            
        ],
        rows: [
            {
                memberName: 'Seller',
                memberFunction: (data) => data.Seller.Name,
                enabled: true,
            }
        ],
        values: [
            {
                member: 'NumberOfUnits',
                aggregate: {
                    aggregator: IgxPivotNumericAggregate.sum,
                    key: 'sum',
                    label: 'Sum'
                },
                enabled: true

            }
        ]
    };
```

This configuration defines 1 row, 1 column and 1 aggregation that sums the values of each dimension groups.
The members match fields available in the provided data source:

```typescript
public data = [
[
    {
        Product: {
            Name: 'Clothing',
            UnitPrice: '12.814860936633712'
        },
        Seller: {
            Name: 'Stanley Brooker',
            City: 'Seattle'
        },
        Date: '2007-01-01T00:00:00',
        Value: '94.2652032683907',
        NumberOfUnits: '282'
    },
    //...
];

```


Resulting in the following view, which groups the Product Categories unique columns, Sellers Countries in unique rows and displays the related aggregations for the number of units in the related cells:

<code-view style="height: 530px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-basic" alt="Angular Pivot Grid Basic Example">
</code-view>


# Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generates its columns based on the `columns` configuration, so setting them declaratively, like in the base grid, is not supported. Such columns will be disregarded. |
| Setting duplicate `memberName` or `member` property values for dimensions/values. | `memberName`/`member` should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in `single` mode. | Multiple selection is currently not supported. |
| Merging the dimension members is case sensitive| The pivot grid creates groups and merges the same (case sensitive) values. But the dimensions provide `memberFunction` and this can be changed there, the result of the `memberFunction` will be compared and used as display value.|

## API References
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)


## Additional Resources
<div class="divider--half"></div>
* [Angular Pivot Grid Features](pivot-grid-features.md)
* [Angular Pivot Grid Custom](pivot-grid-custom.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)