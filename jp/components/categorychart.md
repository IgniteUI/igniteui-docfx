---
title: Category Chart Component - Native Angular | Ignite UI for Angular
mentionedTypes: ['CategoryChart', 'CategoryChartType']
_description: The Ignite UI for Angular Category Chart component simplifies the complexities of the data visualization domain into manageable API so that a user can bind a collection of data, a group of collections, and a data property, and let the charting control do the rest.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Category Chart
_language: ja
---

## Category Chart

The `IgxCategoryChart` is a charting component that makes visualizing category data easy to do. The control simplifies the complexities of the data visualization domain into manageable API.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="category-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/category-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

 A user can bind a collection of data, a group of collections, and a data property and let the charting control do the rest. The component will analyze the data and then automatically choose the best series type to represent the data.

By using a smart Data Adapter, the data is analyzed and the appropriate visualization is rendered. For example, if the `chartType` property is set to `Auto`, the control will use a column chart for a small data sets or a line chart for larger data sets.

However, you can also explicitly specify the chart type by setting the `chartType` to:

-   `Line`
-   `Area`
-   `Column`
-   `Point`
-   `Spline`
-   `SplineArea`
-   `StepArea`
-   `StepLine`
-   `Waterfall`

Another example of the intuitive behavior of the Category Chart control is that you do not need to explicitly set the labels. The Category Chart will use the first appropriate string property that it finds within the data you provided and will use that for the labels.

### Dependencies

When installing the chart package, the core package must also be installed.

**npm install igniteui-angular-charts igniteui-angular-core**

The category chart is exported as an `NgModule`, you need to import the 
`IgxCategoryChartModule` inside your `AppModule`:

<!-- -->

<!-- -->

```typescript
// app.module.ts
import { IgxCategoryChartModule } from 'igniteui-angular-charts/ES5/igx-category-chart-module';

@NgModule({
    imports: [
        ...
        IgxCategoryChartModule,
        ...
    ]
})
export class AppModule {}
```

It's also possible to load a more minimal configuration of category chart whereby it can only load a subset of the possible series, and exclude other optional features by instead loading the `IgxCategoryChartCoreModule`, and the dynamic module for the series in question, e.g. `IgxLineSeriesDynamicModule`. If the `chartType` is `Auto`, it wil make sure to select a series type that has been loaded.

<div class="divider--half"></div>

### Usage

Now that the category chart module is imported, next step is to bind it to data.

In order to create an `IgxCategoryChartComponent` control, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```typescript
var data = [
 { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
 { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
 { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
 { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
 { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
];
```

The following code demonstrates how to bind the category chart to the above data.

```html
 <igx-category-chart [dataSource]="data"
                     width="700px"
                     height="500px">
 </igx-category-chart>
```

<div class="divider--half"></div>

### Chart Types

You can override the default behavior of the category chart and set which type of chart should be displayed. This is done by setting the `chartType` property.
Below are listed all of the types that the Category Chart supports.

> [!NOTE]
> Special case is the `Auto` setting of that property. If `Auto` is used the chart will analyze assigned data and will assign the most suitable chart type.

#### Supported chart types

| Property     | Description                                                                        | Example                                      |
| ------------ | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| `Line`       | Specifies category line series with markers at each data point                     | ![](../images/category_chart_line.png)       |
| `Area`       | Specifies category area series                                                     | ![](../images/category_chart_area.png)       |
| `Column`     | Specifies category column chart with vertical rectangles at each data point        | ![](../images/category_chart_column.png)     |
| `Point`      | Specifies category point chart with markers at each data point                     | ![](../images/category_chart_point.png)      |
| `StepLine`   | Specifies category step line chart                                                 | ![](../images/category_chart_stepline.png)   |
| `StepArea`   | Specifies category step area chart                                                 | ![](../images/category_chart_steparea.png)   |
| `Spline`     | Specifies category spline line series with markers at each data point              | ![](../images/category_chart_spline.png)     |
| `SplineArea` | Specifies category spline area series                                              | ![](../images/category_chart_splinearea.png) |
| `Waterfall`  | Specifies category waterfall chart                                                 | ![](../images/category_chart_waterfall.png)  |
| `Auto`       | Specifies automatic selection of chart type based on suggestions from Data Adapter |                                              |
