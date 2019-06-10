---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Category Series
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
---

## Category Series

This topic explains various types of category series in the Angular data chart component. Category series is a group of the simplest and most common form of chart series that take data and render it as collection of data points stretched along a horizontal line (e.g. `IgxColumnSeriesComponent`) or vertical line (e.g. `BarSeries`).

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-category-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Category Series

The following table lists all types of category series and their descriptions:

| Series Name                    | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `IgxAreaSeriesComponent`       | Displays a set of evenly placed points connected by a line below which area is filled in. Categories are arranged horizontally and values – vertically.                                                                                                                                                                                                                                      |
| `BarSeries`                    | Displays discrete data in separate rows. Unlike other series, categories are arranged vertically and values are plotted horizontally. In other words, this series is like `IgxColumnSeriesComponent` but rotated 90 degrees clockwise.                                                                                                                                                       |
| `IgxColumnSeriesComponent`     | Displays discrete data in separate columns. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a data series over time or for comparing multiple items.                                                                                                                                                                                 |
| `IgxLineSeriesComponent`       | Displays a set of evenly placed points connected by straight lines. Used for showing data or information that changes continuously over time. Useful when emphasizing the relationship between the points is required.                                                                                                                                                                       |
| `IgxPointSeriesComponent`      | Displays markers at locations of data points without connecting them by lines. Shape of these markers can be changed using `markerType` property                                                                                                                                                                                                                                             |
| `IgxSplineSeriesComponent`     | Displays a set of evenly placed points connected by smooth lines that are generated using spline interpolation for improved presentation of data.                                                                                                                                                                                                                                            |
| `IgxSplineAreaSeriesComponent` | Same as the `IgxAreaSeriesComponent` type with the added feature of spline interpolation and smoothing for improved presentation of data.                                                                                                                                                                                                                                                    |
| `IgxStepLineSeriesComponent`   | Same as the `IgxLineSeriesComponent` type, except that the values are connected by continuous vertical and horizontal lines forming a step-like progression instead of a straight line tracing the shortest path between points.                                                                                                                                                             |
| `IgxStepAreaSeriesComponent`   | Same as the `IgxStepLineSeriesComponent` type, except that the area below values is filled out instead of continuous vertical and horizontal lines forming a step-like progression for the changes between data points.                                                                                                                                                                      |
| `IgxWaterfallSeriesComponent`  | Displays a set of points as vertical columns that show the difference between values of consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. Categories are arranged horizontally and values are plotted vertically. Used for showing the changes in a consecutive data points over time or for comparing multiple items. |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with category series.

| Series Type                    | YAxis Type                 | XAxis Type                                                                           |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------ |
| `BarSeries`                    | `CategoryYAxis`            | `IgxNumericXAxisComponent`                                                           |
| `IgxAreaSeriesComponent`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxColumnSeriesComponent`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxLineSeriesComponent`       | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxSplineSeriesComponent`     | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxSplineAreaSeriesComponent` | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxStepAreaSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxStepLineSeriesComponent`   | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |
| `IgxWaterfallSeriesComponent`  | `IgxNumericYAxisComponent` | `IgxCategoryXAxisComponent`, `IgxOrdinalTimeXAxisComponent`, `IgxTimeXAxisComponent` |

### Required Data

Category series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the category series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `IgxCategoryXAxisComponent`)
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of a category series (e.g. `IgxLineSeriesComponent`)

You can use the [SampleCategoryData](datachart_data_sources_category.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleCategoryData.create() }
```

### Required Modules

The category series require the following modules:

```typescript
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
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts/ES5/igx-data-chart-category--module';

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### Code Example - Column Series

This code demonstrates how to create an instance of data chart with `IgxColumnSeriesComponent` and bind it to the data source.

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

Note that you can also use above code to create other type of category series by replacing `IgxColumnSeriesComponent` with name of series that you want to render. However, the `BarSeries` is an exception from this rule because it requires different types of axes. This code demonstrates how to create an instance of data chart with `BarSeries` and bind it to the data source.

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

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Annotations](datachart_series_annotations.md)
-   [Series Highlighting](datachart_series_highlighting.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Tooltips](datachart_series_tooltips.md)
-   [Series Trendlines](datachart_series_trendlines.md)
-   [Series Types](datachart_series_types.md)
