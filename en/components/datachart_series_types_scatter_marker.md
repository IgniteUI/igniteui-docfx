---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Scatter Marker
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Scatter Marker Series

This topic explains various types of scatter marker series in the Angular data chart component. Scatter marker series is a group of series that plot a marker for each data item using the Cartesian (x, y) coordinate system.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Scatter Marker Series

The following table lists all types of scatter marker series and their descriptions:

| Series Name                                                                                                                              | Description                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)             | Displays a marker for data point mapped to `XMemberPath` and `YMemberPath` properties. |
| [`IgxScatterLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)     | Displays a straight line between each data point in addition to a marker.              |
| [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) | Displays smooth line interpolated between each data point in addition to a marker.     |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with scatter marker series.

| Series Type                                                                                                                              | YAxis Type                                                                                                                 | XAxis Type                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)             | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |
| [`IgxScatterLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |
| [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |

### Required Data

The scatter marker series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 2 numeric data columns which should be mapped to the `XMemberPath` and `YMemberPath` properties

You can use the [SampleScatterStats](datachart_data_sources_stats.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### Required Modules

The scatter marker series requires the following modules:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterSeries } from "igniteui-angular-charts/ES5/igx-scatter-series";
import { IgxScatterLineSeries } from "igniteui-angular-charts/ES5/igx-scatter-line-series";
import { IgxScatterSplineSeries } from "igniteui-angular-charts/ES5/igx-scatter-spline-series";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
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

This code demonstrates how to create an instance of data chart with [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>
    <igx-scatter-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal">
    </igx-scatter-series>
 </igx-data-chart>
```

Note that you can also use above code to create [`IgxScatterLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html) or [`IgxScatterSplineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattersplineseriescomponent.html) by replacing [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html).

### Series Appearance

You can customize appearance of marker using the [Markers](datachart_series_markers.md) properties as well as changing `Brush` and `Thickness` of line visuals between markers. This code snippet below demonstrate how to use these properties.

```html
<igx-scatter-series
 name="series1"
 brush="Blue"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-series>
```

```ts
const series1 = new IgxScatterLineSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Blue";
series1.thickness = 2;
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Tooltips](datachart_series_tooltips.md)
-   [Series Trendlines](datachart_series_trendlines.md)
-   [Series Types](datachart_series_types.md)
