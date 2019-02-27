---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## Scatter Contour Series

This topic explains, with code examples, how to use  `ScatterContourSeries` in the `IgxDataChart` control. This series
draws colored contour lines based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The `ScatterContourSeries` works a lot like the `ScatterAreaSeries` except that it represents data as contour lines colored using a fill scale and the scatter area series represents data as a surface interpolated using a color scale.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-type-contour-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-contour-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The `IgxDataChart` control provides various types of axes but only `IgxNumericYAxisComponent`and `IgxNumericYAxisComponent` can be used with `ScatterContourSeries`.

### Required Data

The `ScatterContourSeries` has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the `XMemberPath`, `YMemberPath`, and `ValueMemberPath` properties.

You can use the [SampleScatterData](datachart_data_sources_scatter.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleScatterData.create() }
```

### Required Modules

<!-- Angular -->

The scatter area series requires the following modules:

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterContourSeries } from "igniteui-angular-charts/ES5/igx-scatter-contour-series";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxLinearContourValueResolver } from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver";
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

This code demonstrates how to create an instance of data chart with  `ScatterContourSeries` and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" />
    <igx-numeric-y-axis name="yAxis" />
    <igx-scatter-contour-series
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="X"
     yMemberPath="Y"
     colorMemberPath="Z" />
 </igx-data-chart>
```

### Contour Fill Scale

Use the `FillScale` property of the`ScatterContourSeries` to resolve fill brushes of the contour lines.

The provided `ValueBrushScale` class should satisfy most coloring needs, but you can inherit from this class and provide your own coloring logic. The following table lists properties of the `ValueBrushScale` affecting the surface coloring of the `ScatterContourSeries`:

-   `Brushes` sets the collection of brushes for filling contours.
-   `MaximumValue` sets the highest value to assign a brush. Any given value greater than this value will be Transparent.
-   `MinimumValue` sets the lowest value to assign a brush. Any given value less than this value will be Transparent.

### Contour Value Resolver

The `ScatterContourSeries` renders using exactly 10 contour lines at even intervals between the minimum and maximum values of the items mapped to the `ValueMemberPath` property. If you desire more or fewer contours, you can assign the `LinearContourValueResolver` with a number of contours to the `ValueResolver` property of the `ScatterContourSeries`.

The following code shows how to configure the number of contour lines in the `ScatterContourSeries`.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Types](datachart_series_types.md)
