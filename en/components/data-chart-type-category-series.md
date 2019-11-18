---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Category Series
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Category Series

This topic explains various types of category series in the Angular data chart component. Category series is a group of the simplest and most common form of chart series that take data and render it as collection of data points stretched along a horizontal line (e.g. [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html)) or vertical line (e.g. [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)).

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Category Series

The following table lists all types of category series and their descriptions:

| Series Name                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxareaseriescomponent.html)             | Displays a set of evenly placed points connected by a line below which area is filled in. Categories are arranged horizontally and values – vertically.                                                                                                                                                                                                                                      |
| [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)               | Displays discrete data in separate rows. Unlike other series, categories are arranged vertically and values are plotted horizontally. In other words, this series is like [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) but rotated 90 degrees clockwise.                                                       |
| [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html)         | Displays discrete data in separate columns. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                 |
| [`IgxLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html)             | Displays a set of evenly placed points connected by straight lines. Used for showing data or information that changes continuously over time. Useful when emphasizing the relationship between the points is required.                                                                                                                                                                       |
| [`IgxPointSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html)           | Displays markers at locations of data points without connecting them by lines. Shape of these markers can be changed using `markerType` property                                                                                                                                                                                                                                             |
| [`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html)         | Displays a set of evenly placed points connected by smooth lines that are generated using spline interpolation for improved presentation of data.                                                                                                                                                                                                                                            |
| [`IgxSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineareaseriescomponent.html) | Same as the [`IgxAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxareaseriescomponent.html) type with the added feature of spline interpolation and smoothing for improved presentation of data.                                                                                                                                                      |
| [`IgxStepLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html)     | Same as the [`IgxLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html) type, except that the values are connected by continuous vertical and horizontal lines forming a step-like progression instead of a straight line tracing the shortest path between points.                                                               |
| [`IgxStepAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html)     | Same as the [`IgxStepLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html) type, except that the area below values is filled out instead of continuous vertical and horizontal lines forming a step-like progression for the changes between data points.                                                                    |
| [`IgxWaterfallSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwaterfallseriescomponent.html)   | Displays a set of points as vertical columns that show the difference between values of consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a consecutive data points over time or for comparing multiple items. |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with category series.

| Series Type                                                                                                                        | YAxis Type                                                                                                                   | XAxis Type                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)               | [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)                                                                                                                                                                                                                                                             |
| [`IgxAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxareaseriescomponent.html)             | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html)         | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html)             | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineseriescomponent.html)         | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxSplineAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsplineareaseriescomponent.html) | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStepAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html)     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxStepLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html)     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxWaterfallSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwaterfallseriescomponent.html)   | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)   | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |

### Required Data

Category series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the category series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of a category series (e.g. [`IgxLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html))

You can use the [SampleCategoryData](data-chart-data-sources-category.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleCategoryData.create() }
```

### Required Modules

The category series require the following modules:

```ts
// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxCategoryYAxis } from "igniteui-angular-charts/ES5/igx-category-y-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxAreaSeries } from "igniteui-angular-charts/ES5/igx-area-series";
import { IgxBarSeries } from "igniteui-angular-charts/ES5/igx-bar-series";
import { IgxColumnSeries } from "igniteui-angular-charts/ES5/igx-column-series";
import { IgxLineSeries } from "igniteui-angular-charts/ES5/igx-line-series";
import { IgxPointSeries } from "igniteui-angular-charts/ES5/igx-point-series";
import { IgxSplineSeries } from "igniteui-angular-charts/ES5/igx-spline-series";
import { IgxSplineAreaSeries } from "igniteui-angular-charts/ES5/igx-spline-area-series";
import { IgxStepAreaSeries } from "igniteui-angular-charts/ES5/igx-step-area-series";
import { IgxStepLineSeries } from "igniteui-angular-charts/ES5/igx-step-line-series";
import { IgxWaterfallSeries } from "igniteui-angular-charts/ES5/igx-waterfall-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### Code Example - Column Series

This code demonstrates how to create an instance of data chart with [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-column-series>
 </igx-data-chart>
```

### Code Example - Bar Series

Note that you can also use above code to create other type of category series by replacing [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) with name of series that you want to render. However, the [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) is an exception from this rule because it requires different types of axes. This code demonstrates how to create an instance of data chart with [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis"></igx-numeric-x-axis>
    <igx-category-y-axis name="yAxis" label="Year"></igx-category-y-axis>
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-bar-series>
 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Annotations](data-chart-series-annotations.md)
-   [Series Highlighting](data-chart-series-highlighting.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
-   [Series Trendlines](data-chart-series-trendlines.md)
-   [Series Types](data-chart-series-types.md)
