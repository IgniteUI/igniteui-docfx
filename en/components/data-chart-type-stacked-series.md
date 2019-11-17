---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Stacked
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['StackedColumnSeries','CategoryXAxis']
namespace: Infragistics.Controls.Charts
---

## Stacked Series

This topic explains the various types of stacked series in the Angular data chart component. Stacked series are a group of the simplest and most common form of chart series that take data and render it as collection of data points stretched along a horizontal line (e.g. [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html)) or vertical line (e.g. [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)).

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

Each stacked series has its own [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection in which you can place the [`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) elements. These fragments are what make up the actual rendering of the chart and are the elements that accept the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html#valuememberpath).

### Types of Stacked Series

The following table lists all types of category series and their descriptions:

| Series Name                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxStackedAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html)                   | This series type is rendered using a collection of points connected by line segments ([`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) with the area below the line filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                      |
| [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)                     | Displays discrete data in bars stacked next to each other. Categories are arranged vertically and values are stacked horizontally. This series is usually used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                                                                                                                                                                                                           |
| [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)               | Displays discrete data in columns stacked on top of each other. Categories are arranged horizontally and values are stacked vertically. This series is usually used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                                                                                                                                                                                                      |
| [`IgxStackedLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html)                   | This series type is rendered using a collection of points connected by line segments ([`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                                                        |
| [`IgxStackedSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html)       | This series type is rendered using a collection of points connected by smooth curves of spline segments ([`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) with the area below the spline filled in and stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis. |
| [`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)               | This series type is rendered using a collection of points connected by smooth curves of spline segments ([`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) that are stacked on top of each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the y-axis, and all negative values are grouped on the negative side of the y-axis.                                     |
| [`IgxStacked100AreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html)             | This series is identical to the [`IgxStackedAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html) in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the [`IgxStacked100AreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html) presents the data in terms of percent of the sum of all values in a data point.                                                                                             |
| [`IgxStacked100BarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html)               | This series is the same as the [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.                                                                                                                                                                                                                                                                                                    |
| [`IgxStacked100ColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)         | This series is the same as the [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) type with the added feature of presenting data in terms of percent of all values in category instead of presenting a direct representation of the data.                                                                                                                                                                                                                                                                                              |
| [`IgxStacked100LineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html)             | This series is identical to the [`IgxStackedLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html) in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the [`IgxStacked100LineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html) presents the data in terms of percent of the sum of all values in a data point.                                                                                             |
| [`IgxStacked100SplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) | This series is identical to the [`IgxStackedSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html) in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the [`IgxStacked100SplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) presents the data in terms of percent of the sum of all values in a data point.                                                                     |
| [`IgxStacked100SplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html)         | This series is identical to the [`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html) in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the [`IgxStacked100SplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html) presents the data in terms of percent of the sum of all values in a data point.                                                                                     |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with stacked series.

| Series Type                                                                                                                                            | YAxis Type                                                                                                                   | XAxis Type                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxStackedAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedareaseriescomponent.html)                   | [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)                                                                                                                                                                                                                                                             |
| [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)                     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)               | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedlineseriescomponent.html)                   | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineareaseriescomponent.html)       | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStackedSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)               | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100AreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100areaseriescomponent.html)             | [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)                                                                                                                                                                                                                                                             |
| [`IgxStacked100BarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html)               | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100ColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)         | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100LineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100lineseriescomponent.html)             | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100SplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineareaseriescomponent.html) | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStacked100SplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html)         | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |

### Required Data

Stacked series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the stacked series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the [`label`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#label) property of the category axis (e.g. [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the [`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) to be added to [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the stacked series.

### Required Modules

The stacked series requires the following modules:

```ts
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
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";
import { IgxDataChartStackedModule } from "igniteui-angular-charts/ES5/igx-data-chart-stacked-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
        // ...
    ]
})
```

### Code Example - Stacked Column Series

This code demonstrates how to create an instance of data chart with [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) and bind it to the data source. Note that you can also use above code to create other type of category series by replacing [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) with name of series that you want to render.

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

 The [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) is an exception to the rule that you can replace [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) with any series name because it requires different types of axes in that it uses a [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) and [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html). This code demonstrates how to create an instance of the data chart with a [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) and bind it to the data source.

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
