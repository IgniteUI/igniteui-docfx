---
title: Category Chart Component
_description: The Ignite UI for Angular Category Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing category data a breeze.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Category Chart component, Angular Chart controls, Angular Category Chart controls, Data Visualization
---
## Category Chart 

The igxCategoryChart is a lightweight, highly performant chart. This chart can be easily configured to display category data using an extremely simple and intuitive API. All you need to do is bind your data (a collection or a collection of collections) and the chart takes care of everything else.

By using a smart Data Adapter, the data is analyzed and the appropriate visualization is rendered. For example, if the `chartType` is set to `Auto`, the control can determine that if it is provided a small data set then a column chart should be plotted, while a larger data set will draw a line chart.

However, you can also explicitly specify the chart type by setting the `chartType` to:
    
- Line
- Area
- Column
- Point
- Spline
- SplineArea
- StepArea
- StepLine
- Waterfall

Another example of the intuitive behavior of the Category Chart control is that you do not need to explicitly set the labels. The Category Chart will use the first appropriate string property that it finds within the data you provided and will use that for the labels.

<div class="divider"></div>

### Category Chart Demo

<div class="sample-container" style="height: 650px">
    <iframe id="category-chart-overview-sample-1-iframe" src='{environment:demosBaseUrl}/category-chart-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

The category chart is exported as an `NgModule`, you need to import the _IgxCategoryChartModule_ inside your `AppModule`:

```typescript
// app.module.ts
import { IgxCategoryChartModule } from '@infragistics/ignite-ui-xplatform-for-angular/Debug/ES5/ig-categorychart-module';

@NgModule({
    imports: [
        ...
        IgxCategoryChartModule,
        ...
    ]
})
export class AppModule {}
```

It's also possible to load a more minimal configuration of category chart whereby it can only load a subset of the possible series, and exclude other optional features by instead loading the CategoryChartCoreModule, and the dynamic module for the series in question, e.g. LineSeriesDynamicModule. If the chartType is auto, it wil make sure to select a series type that has been loaded.

<div class="divider--half"></div>

### Usage

Now that the category chart module is imported, next step is to bind it to data.

In order to create an igxCategoryChart control, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source. 

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

You can overwrite the default behavior of the category chart and set which type of chart should be displayed. This is done by setting the `chartType` property.
Below are listed all of the types that the Category Chart supports.

> [!NOTE]
> Special case is the `auto` setting of that property. If `auto` is used the chart will analyze assigned data and will assign the most suitable chart type.

#### Supported chart types

Property|Description|Example
---|---|---
`line`|Specifies category line series with markers at each data point|![](../images/category_chart_line.png)
`area`|Specifies category area series|![](../images/category_chart_area.png)
`column`|Specifies category column chart with vertical rectangles at each data point|![](../images/category_chart_column.png)
`point`|Specifies category point chart with markers at each data point|![](../images/category_chart_point.png)
`stepLine`|Specifies category step line chart|![](../images/category_chart_stepline.png)
`stepArea`|Specifies category step area chart|![](../images/category_chart_steparea.png)
`spline`|Specifies category spline line series with markers at each data point|![](../images/category_chart_spline.png)
`splineArea`|Specifies category spline area series|![](../images/category_chart_splinearea.png)
`waterfall`|Specifies category waterfall chart|![](../images/category_chart_waterfall.png)
`auto`|Specifies automatic selection of chart type based on suggestions from Data Adapter

