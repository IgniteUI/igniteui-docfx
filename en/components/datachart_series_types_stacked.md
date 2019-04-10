---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Stacked Series

This topic explains the various types of stacked series in the `IgxDataChart` control. Stacked series are a group of the simplest and most common form of chart series that take data and render it as collection of data points stretched along a horizontal line (e.g. `IgxColumnSeriesComponent`) or vertical line (e.g. `BarSeries`).

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

Each stacked series has its own `IgxSeriesComponent` collection in which you can place the `StackedFragmentSeries` elements. These fragments are what make up the actual rendering of the chart and are the elements that accept the `ValueMemberPath`.

### Types of Stacked Series

The following table lists all types of category series and their descriptions:

| Series Name                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `StackedAreaSeries`          | This series type is rendered using a collection of points connected by line segments (`StackedFragmentSeries`) with the area below the line filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                      |
| `StackedBarSeries`           | Displays discrete data in bars stacked next to each other. Categories are arranged vertically and values are stacked horizontally. This series is usually used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                                                                                      |
| `StackedColumnSeries`        | Displays discrete data in columns stacked on top of each other. Categories are arranged horizontally and values are stacked vertically. This series is usually used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                                                                                 |
| `StackedLineSeries`          | This series type is rendered using a collection of points connected by line segments (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                                                        |
| `StackedSplineAreaSeries`    | This series type is rendered using a collection of points connected by smooth curves of spline segments (`StackedFragmentSeries`) with the area below the spline filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis. |
| `StackedSplineSeries`        | This series type is rendered using a collection of points connected by smooth curves of spline segments (`StackedFragmentSeries`) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                                     |
| `Stacked100AreaSeries`       | This series is identical to the `StackedAreaSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100AreaSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                             |
| `Stacked100BarSeries`        | This series is the same as the `StackedBarSeries` type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.                                                                                                                                                                                                                                                                                               |
| `Stacked100ColumnSeries`     | This series is the same as the `StackedColumnSeries` type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.                                                                                                                                                                                                                                                                                            |
| `Stacked100LineSeries`       | This series is identical to the `StackedLineSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100LineSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                             |
| `Stacked100SplineAreaSeries` | This series is identical to the `StackedSplineAreaSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100SplineAreaSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                 |
| `Stacked100SplineSeries`     | This series is identical to the `StackedSplineSeries` in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the `Stacked100SplineSeries` presents the data in terms of percent of the sum of all values in a data point.                                                                                                                                                                                                         |

### Required Axes

The `IgxDataChart` control provides various types of axes but only the following types of axes can be used with stacked series.

| Series Type                  | YAxis Type                 | XAxis Type                                                                           |
| ---------------------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `StackedAreaSeries`          | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `StackedBarSeries`           | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedColumnSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedLineSeries`          | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedSplineAreaSeries`    | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `StackedSplineSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100AreaSeries`       | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `Stacked100BarSeries`        | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100ColumnSeries`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100LineSeries`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100SplineAreaSeries` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `Stacked100SplineSeries`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |

### Required Data

Stacked series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the stacked series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `IgxCategoryXAxisComponent`)
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the `StackedFragmentSeries` to be added to the stacked series' `IgxSeriesComponent` collection.

### Required Modules

<!-- Angular -->

In order to use stacked series, you need to import the following modules in your app during load:

```typescript
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxStackedAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-area-series";
import { IgxStackedBarSeries } from "igniteui-angular-charts/ES5/igx-stacked-bar-series";
import { IgxStackedColumnSeries } from "igniteui-angular-charts/ES5/igx-stacked-column-series";
import { IgxStackedLineSeries } from "igniteui-angular-charts/ES5/igx-stacked-line-series";
import { IgxStackedSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-area-series";
import { IgxStackedSplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-spline-series";
import { IgxStacked100AreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-area-series";
import { IgxStacked100BarSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-bar-series";
import { IgxStacked100ColumnSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-column-series";
import { IgxStacked100LineSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-line-series";
import { IgxStacked100SplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-area-series"
import { IgxStacked100SplineSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-series";
import { IgxStacked100SplineAreaSeries } from "igniteui-angular-charts/ES5/igx-stacked-100-spline-area-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category--module';
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
        // ...
    ]
})
```

### Code Example - Stacked Column Series

This code demonstrates how to create an instance of data chart with `StackedColumnSeries` and bind it to the data source. Note that you can also use above code to create other type of category series by replacing `StackedColumnSeries` with name of series that you want to render.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Country"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-stacked-column-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-column-series>
    
</igx-data-chart>
```

### Code Example - Stacked Bar Series

 The `StackedBarSeries` is an exception to the rule that you can replace `StackedColumnSeries` with any series name because it requires different types of axes in that it uses a `CategoryYAxis` and `IgxNumericXAxisComponent`. This code demonstrates how to create an instance of the data chart with a `StackedBarSeries` and bind it to the data source.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>
    
</igx-data-chart>
```
