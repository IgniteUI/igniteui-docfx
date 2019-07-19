---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Range
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Range Series

This topic explains various types of range series in the Angular data chart component. The range series is a group of chart series that takes two numeric data columns and render them as collection of data points stretched in horizontal orientation (e.g. [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md))

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Range Series

The following table lists all types of range series and their descriptions:

| Series Name                                                                                                   | Description                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md)     | Displays filled region/area between pairs of High/Low values of data points. Categories are arranged horizontally and values – vertically.                 |
| [`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) | Displays discrete data in separate columns between High/Low values of data points. Categories are arranged horizontally and values are plotted vertically. |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with range series.

| Series Type                                                                                                   | YAxis Type                                                                                          | XAxis Type                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md)     | [`IgxNumericYAxisComponent`](datachart_series_types_range.md) | [`IgxCategoryXAxisComponent`](datachart_series_types_range.md), [`IgxOrdinalTimeXAxisComponent`](datachart_series_types_range.md), [`IgxTimeXAxisComponent`](datachart_series_types_range.md) |
| [`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) | [`IgxNumericYAxisComponent`](datachart_series_types_range.md) | [`IgxCategoryXAxisComponent`](datachart_series_types_range.md), [`IgxOrdinalTimeXAxisComponent`](datachart_series_types_range.md), [`IgxTimeXAxisComponent`](datachart_series_types_range.md) |

### Required Data

Range series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the range series.
-   All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryXAxisComponent`](datachart_series_types_range.md))
-   All data items must contain at least two numeric data column which should be mapped using the `HighMemberPath` and `LowMemberPath` properties of range series (e.g. [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md))

You can use the [SampleRangeData](datachart_data_sources_range.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleRangeData.create() }
```

### Required Modules

In order to use range series, you need to import the following modules in your app during load:

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
// series' modules:
import { IgxRangeAreaSeries } from "igniteui-angular-charts/ES5/igx-range-area-series";
import { IgxRangeColumnSeries } from "igniteui-angular-charts/ES5/igx-range-column-series";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";

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

### Code Example

This code demonstrates how to create an instance of data chart with [`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
 </igx-data-chart>
```

Note that you can also use above code to create [`IgxRangeAreaSeriesComponent`](datachart_series_types_range.md) by replacing [`IgxRangeColumnSeriesComponent`](datachart_series_types_range.md).

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
