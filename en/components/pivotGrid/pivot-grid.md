---
title: Angular Pivot Grid & Table – Ignite UI for Angular
_description: Create fast, responsive Angular pivot grids and tables with Ignite UI for Angular. Perform complex analysis and apply data sorting, grouping, or filtering.
_keywords: angular pivot grid, angular pivot grid component, angular pivot table, angular pivot table component, angular pivot data table, Angular pivot table, angular ui components, ignite ui for angular
---

# Angular Pivot Grid Component Overview

Ignite UI for Angular Pivot Grid is one of our best [Angular Components](https://www.infragistics.com/products/ignite-ui-angular), representing a table of grouped values and aggregates that lets you organize and summarize data in a tabular form. It is a data summarization tool that is used to reorganize and summarize selected columns and rows of data coming from a spreadsheet or database table to obtain a desired report.

## What is Angular Pivot Grid? 

The Angular Pivot Grid component presents data in a pivot table and helps perform complex analysis on the supplied data set. This sophisticated Pivot Grid control is used for organizing, summarizing, and filtering large volumes of data which is later displayed in a cross-table format. Key features of an Angular Pivot Grid are row dimensions, column dimensions, aggregations, and filters.

The `IgxPivotGridComponent` gives the ability to users to configure and display their data in a multi-dimensional pivot table structure.
The rows and columns represent distinct data groups, and the data cell values represent aggregations. This allows complex data analysis based on a simple flat data set. The `IgxPivotGridComponent` is a feature-rich pivot table that provides easy configuration of the different dimensions and values as well as additional data operations on them like filtering and sorting.

## Angular Pivot Grid Example

The following is an Angular Pivot Grid example in combination with the Angular Pivot Data Selector Component. This way you can have more flexible runtime configuration options.

<code-view style="height: 870px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-datasource" alt="Angular Pivot Grid with Pivot Selector Example">
</code-view>

## Getting started with Ignite UI for Angular Pivot Grid

To get started with the Ignite UI for Angular Pivot Grid component, first you need to install Ignite UI for Angular. In an existing Angular application, type the following command:

```cmd
ng add igniteui-angular
```

For a complete introduction to the Ignite UI for Angular, read the [*getting started*](../general/getting-started.md) topic.

The next step is to import the `IgxPivotGridModule` in your **app.module.ts** file.

```typescript
// app.module.ts

import { IgxPivotGridModule } from 'igniteui-angular';
// import { IgxPivotGridModule } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
    imports: [
        ...
        IgxPivotGridModule,
        ...
    ]
})
export class AppModule {}
```

Alternatively, as of `16.0.0` you can import the `IgxPivotGridComponent` as a standalone dependency, or use the [`IGX_PIVOT_GRID_DIRECTIVES`](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/grids/pivot-grid/public_api.ts) token to import the component and all of its supporting components and directives.

```typescript
// home.component.ts

import { IGX_PIVOT_GRID_DIRECTIVES } from 'igniteui-angular';
// import { IGX_PIVOT_GRID_DIRECTIVES } from '@infragistics/igniteui-angular'; for licensed package

@Component({
    selector: 'app-home',
    template: `
    <igx-pivot-grid [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
    </igx-pivot-grid>
    `,
    styleUrls: ['home.component.scss'],
    standalone: true,
    imports: [IGX_PIVOT_GRID_DIRECTIVES]
    /* or imports: [IgxPivotGridComponent] */
})
export class HomeComponent {
    public data: Transaction [];
}
```

Now that you have the Ignite UI for Angular Pivot Grid module or directives imported, you can start using the `igx-pivot-grid` component.

## Using the Angular Pivot Grid

The Angular Pivot Grid Component can be configured via the [`pivotConfiguration`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#pivotConfiguration) property.

```html
<igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="pivotConfigHierarchy">
</igx-pivot-grid>
```

It is defined by three main dimensions: `rows`, `columns` and `values`. The `rows` and `columns` define the grouped structure that is displayed in the rows and columns of the [Angular grid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid). The `values` define the aggregation fields and the aggregation that will be used to calculate and display the related values of the groups.

A filter can also be defined via the `filters` configuration property. It can be used for fields that you do not want to add as a dimension or a value but would like to filter their related member values via the UI.

### Dimensions configuration

Each basic dimension configuration requires a `memberName` that matches a field from the provided `data`, or a `memberFunction` that extracts a value from the record in case of complex objects or other custom scenarios.

Multiple sibling dimensions can be defined, which creates a more complex nested group in the related row or column dimension area.

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
In this case the dimension renders an expander in the related section of the grid (row or column) and allows the children to be expanded or collapsed as part of the hierarchy. By default the row dimensions are initially expanded. This behavior can be controlled with the `defaultExpandState` `@Input` of the pivot grid.

### Predefined dimensions

As part of the pivot grid some additional predefined dimensions are exposed for easier configuration:
- `IgxPivotDateDimension`
    Can be used for date fields. Describes the following hierarchy by default:
    - All Periods
    - Years
    - Quarters
    - Months
    - Full Date

It can be set for rows or columns, for example:

```typescript
public pivotConfigHierarchy: IPivotConfiguration = {
    rows: [
        new IgxPivotDateDimension({ memberName: 'Date', enabled: true });
    ]
}
```

It also allows for further customization via the second option parameter in order to enable or disable a particular part of the hierarchy, for example:

```typescript
 new IgxPivotDateDimension({ memberName: 'Date', enabled: true }, {
    total: true,
    years: true,
    months: true,
    fullDate: true,
    quarters: false
});
```


### Values configuration

A value configuration requires a `member` that matches a field from the provided `data`, or it can define either an `aggregatorName` or custom `aggregator` function for more complex scenarios. Out of the box, there are 4 predefined aggregations that can be used depending on the data type of the data field:

- `IgxPivotNumericAggregate` - for numeric fields.
    Contains the following aggregation functions: `SUM`, `AVG`, `MIN`, `MAX`, `COUNT`.
- `IgxPivotDateAggregate` - for date fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotTimeAggregate` - for time fields.
    Contains the following aggregation functions: `LATEST`, `EARLIEST`, `COUNT`.
- `IgxPivotAggregate` - for any other data types. This is the base aggregation.
    Contains the following aggregation functions: `COUNT`.

The current aggregation function can be changed at runtime using the value chip's drop-down. By default, it displays a list of available aggregations based on the field's data type. A custom list of aggregations can also be set via the `aggregateList` property, for example:

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

public static totalSale: PivotAggregation = (members, data: any) =>
    data.reduce((accumulator, value) => accumulator + value.UnitPrice * value.UnitsSold, 0);

public static totalMin: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.min(a, b));
};

public static totalMax: PivotAggregation = (members, data: any) => {
    return data.map(x => x.UnitPrice * x.UnitsSold).reduce((a, b) => Math.max(a,b));
};
```
The pivot value also provides a `displayName` property. It can be used to display a custom name for this value in the column header.

>[!NOTE]
> If you define both `aggregatorName` and `aggregator` function, `aggregatorName` takes precedence. If none is set then an error is thrown.

### Enable property

`IPivotConfiguration` is the interface that describes the current state of the `IgxPivotGrid` component. With it the developer can declare fields of the data as `rows`, `columns`, `filters` or `values`. The configuration allows enabling or disabling each of these elements separately. Only enabled elements are included in the current state of the pivot grid. The `IgxPivotDataSelector` component utilizes the same configuration and shows a list of all elements - enabled and disabled. For each of them there is a checkbox in the appropriate state. End-users can easily tweak the pivot state by toggling the different elements using these checkboxes.
The `enable` property controls if a given `IPivotDimension` or `IPivotValue` is active and takes part in the pivot view rendered by the pivot grid.

### Full configuration example

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
            },
            {
                member: 'AmountOfSale',
                aggregate: {
                    aggregatorName: 'SUM',
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

And if you want to streamline the entire app development process, you can try out our [WYSIWYG App Builder™](https://www.infragistics.com/products/appbuilder) for your next Angular app. 

## Known Issues and Limitations

|Limitation|Description|
|--- |--- |
| Setting columns declaratively is not supported. | The Pivot grid generates its columns based on the `columns` configuration, so setting them declaratively, like in the base grid, is not supported. Such columns are disregarded. |
| Setting duplicate `memberName` or `member` property values for dimensions/values. | `memberName`/`member` should be unique for each dimension/value. Duplication may result in loss of data from the final result. |
| Row Selection is only supported in `single` mode. | Multiple selection is currently not supported. |
| Merging the dimension members is case sensitive| The pivot grid creates groups and merges the same (case sensitive) values. But the dimensions provide `memberFunction` and this can be changed there, the result of the `memberFunction` are compared and used as display value.|

## API References
* [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
* [IgxPivotDataSelectorComponent]({environment:angularApiUrl}/classes/igxpivotdataselectorcomponent.html)


## Additional Resources
<div class="divider--half"></div>

* [Angular Pivot Grid Features](pivot-grid-features.md)
* [Angular Pivot Grid Custom Aggregations](pivot-grid-custom.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
