---
title: Category Chart | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: Use the category chart component to analyze and  automatically choose the best chart type to represent data. Learn about our chart types for visualization.
_keywords: category chart, Ignite UI for Angular, infragistics
mentionedTypes: ['XamCategoryChart', 'CategoryChartType']
---

## Category Chart

The category chart component is a Ignite UI for Angular charting component that makes visualizing category data easy to do. The control simplifies the complexities of the data visualization domain into manageable API.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/category-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

 A user can bind a collection of data, a group of collections, and a data property and let the charting control do the rest. The component will analyze the data and then automatically choose the best chart type to represent the data.

By using a smart Data Adapter, the data is analyzed and the appropriate visualization is rendered. For example, if the [`ChartType`](categorychart.md) property is set to [`Auto`](categorychart.md), the control will use a column chart for a small data sets or a line chart for larger data sets.

However, you can also explicitly specify the chart type by setting the [`ChartType`](categorychart.md) to:

-   [`line`](categorychart.md)
-   [`area`](categorychart.md)
-   [`Column`](categorychart.md)
-   [`Point`](categorychart.md)
-   [`Spline`](categorychart.md)
-   [`SplineArea`](categorychart.md)
-   [`StepArea`](categorychart.md)
-   [`StepLine`](categorychart.md)
-   [`waterfall`](categorychart.md)

Another example of the intuitive behavior of the category chart component is that you do not need to explicitly set the labels. The category chart will use the first appropriate string property that it finds within the data you provided and will use that for the labels.

### Dependencies

When installing the chart package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### Required Modules

The [`IgxCategoryChartComponent`](categorychart.md) requires the following modules:

```ts
// app.module.ts
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";

@NgModule({
    imports: [
        // ...
        IgxCategoryChartModule,
        // ...
    ]
})
export class AppModule {}
```

It's also possible to load a more minimal configuration of category chart whereby it can only load a subset of the possible series, and exclude other optional features by instead loading the [`IgxCategoryChartCoreModule`](categorychart.md), and the dynamic module for the series in question, e.g. [`IgxLineSeriesDynamicModule`](categorychart.md). If the [`chartType`](categorychart.md) is [`Auto`](categorychart.md), it wil make sure to select a series type that has been loaded.

<div class="divider--half"></div>

### Usage

Now that the category chart module is imported, next step is to bind it to data.

In order to create a category chart component, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```ts
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

You can override the default behavior of the category chart and set which type of chart should be displayed. This is done by setting the [`chartType`](categorychart.md) property.
Below are listed all of the types that the category chart supports.

> [!NOTE]
> Special case is the [`Auto`](categorychart.md) setting of that property. If [`Auto`](categorychart.md) is used the chart will analyze assigned data and will assign the most suitable chart type.

### Supported chart types

| Property                                                                                | Description                                                                        | Example                                      |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------- |
| [`Line`](categorychart.md)             | Specifies category line series with markers at each data point                     | ![](../images/category_chart_line.png)       |
| [`Area`](categorychart.md)             | Specifies category area series                                                     | ![](../images/category_chart_area.png)       |
| [`Column`](categorychart.md)         | Specifies category column chart with vertical rectangles at each data point        | ![](../images/category_chart_column.png)     |
| [`Point`](categorychart.md)           | Specifies category point chart with markers at each data point                     | ![](../images/category_chart_point.png)      |
| [`StepLine`](categorychart.md)     | Specifies category step line chart                                                 | ![](../images/category_chart_stepline.png)   |
| [`StepArea`](categorychart.md)     | Specifies category step area chart                                                 | ![](../images/category_chart_steparea.png)   |
| [`Spline`](categorychart.md)         | Specifies category spline line series with markers at each data point              | ![](../images/category_chart_spline.png)     |
| [`SplineArea`](categorychart.md) | Specifies category spline area series                                              | ![](../images/category_chart_splinearea.png) |
| [`Waterfall`](categorychart.md)   | Specifies category waterfall chart                                                 | ![](../images/category_chart_waterfall.png)  |
| [`Auto`](categorychart.md)             | Specifies automatic selection of chart type based on suggestions from Data Adapter |                                              |
