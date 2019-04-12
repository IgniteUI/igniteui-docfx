---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Scatter Marker Series

This topic explains various types of scatter marker series in the `IgxDataChart` control. Scatter marker series is a group of series that plot a marker for each data item using the Cartesian (x, y) coordinate system.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless="" frameBorder="0" onload="onDvSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Scatter Marker Series

The following table lists all types of scatter marker series and their descriptions:

| Series Name           | Description                                                                            |
| --------------------- | -------------------------------------------------------------------------------------- |
| `ScatterSeries`       | Displays a marker for data point mapped to `XMemberPath` and `YMemberPath` properties. |
| `ScatterLineSeries`   | Displays a straight line between each data point in addition to a marker.              |
| `ScatterSplineSeries` | Displays smooth line interpolated between each data point in addition to a marker.     |

### Required Axes

The `IgxDataChart` control provides various types of axes but only the following types of axes can be used with scatter marker series.

| Series Type           | YAxis Type                 | XAxis Type                 |
| --------------------- | -------------------------- | -------------------------- |
| `ScatterSeries`       | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |
| `ScatterLineSeries`   | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |
| `ScatterSplineSeries` | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |

### Required Data

The scatter marker series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 2 numeric data columns which should be mapped to the `XMemberPath` and `YMemberPath` properties

You can use the [SampleScatterStats](datachart_data_sources_stats.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### Required Modules

<!-- Angular -->

The scatter marker series requires the following modules:

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterSeries } from "igniteui-angular-charts/ES5/igx-scatter-series";
import { IgxScatterLineSeries } from "igniteui-angular-charts/ES5/igx-scatter-line-series";
import { IgxScatterSplineSeries } from "igniteui-angular-charts/ES5/igx-scatter-spline-series";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

### Code Example

This code demonstrates how to create an instance of data chart with `ScatterSeries` and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"/>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"/>
    <igx-scatter-series
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="Population"
     yMemberPath="GdpTotal" />
 </igx-data-chart>
```

Note that you can also use above code to create `ScatterLineSeries` or `ScatterSplineSeries` by replacing `ScatterSeries`.

### Series Appearance

You can customize appearance of marker using the [Markers](datachart_series_markers.md) properties as well as changing `Brush` and `Thickness` of line visuals between markers. This code snippet below demonstrate how to use these properties.

```html
<igx-scatter-series
 name="series1"
 brush="Blue"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2" />
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Tooltips](datachart_series_tooltips.md)
-   [Series Trendlines](datachart_series_trendlines.md)
-   [Series Types](datachart_series_types.md)
