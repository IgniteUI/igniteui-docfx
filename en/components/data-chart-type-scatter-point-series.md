---
title: Angular Data Chart | Data Visualization Tools | Scatter Point Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create scatter point charts. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, scatter point charts, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'ScatterSeries']
---

# Angular Scatter Point Chart

The Ignite UI for Angular scatter point chart belongs to a group of scatter charts that use the Cartesian (x, y) coordinate system to plot data. This series is rendered as a collection of markers, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system.

The [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) draws attention to uneven intervals or clusters of data. They can highlight the deviation of collected data from predicted results and they are often used to plot scientific and statistical data. The [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) organizes and plots data chronologically (even if the data is not in chronological order before binding) on X-Axis and Y-Axis.

## Angular Scatter Point Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-point-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-point-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Scatter Point Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-point-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html).

-   [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

## Required Data

The [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 2 numeric data columns which should be mapped to the [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#xmemberpath) and [`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#ymemberpath) properties

You can use the [SampleScatterStats](data-chart-data-sources-stats.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## Required Modules

Creation of the [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   DataChartCoreModule
-   DataChartScatterCoreModule
-   DataChartScatterModule
-   DataChartInteractivityModule
-   NumberAbbreviatorModule
    <!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterSeries } from 'igniteui-angular-charts';
import { MarkerType } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

## Code Example

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) and bind it to a data source.

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

## Series Appearance

You can customize appearance of marker using the [Markers](data-chart-series-markers.md) properties as well as changing [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) and [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness) of line visuals between markers. This code snippet below demonstrate how to use these properties.

```html
<igx-scatter-series
 name="series1"
 brush="Purple"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
 thickness="2">
</igx-scatter-series>
```

```ts
const series1 = new IgxScatterSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
series1.brush = "Purple";
series1.thickness = 2;
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
-   [Series Trendlines](data-chart-series-trendlines.md)
-   [Series Types](data-chart-series-types.md)
