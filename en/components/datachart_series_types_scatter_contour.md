---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Scatter Contour
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','ScatterContourSeries']

---

## Scatter Contour Series

This topic explains, with code examples, how to use  [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md) in the Angular data chart component. This series
draws colored contour lines based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md) works a lot like the [`IgxScatterAreaSeriesComponent`](datachart_series_types_scatter_contour.md) except that it represents data as contour lines colored using a fill scale and the scatter area series represents data as a surface interpolated using a color scale.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-contour-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-contour-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-contour-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only [`IgxNumericYAxisComponent`](datachart_series_types_scatter_contour.md) and [`IgxNumericYAxisComponent`](datachart_series_types_scatter_contour.md) can be used with [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md).

### Required Data

The [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md) has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the [`xMemberPath`](datachart_series_types_scatter_contour.md), [`yMemberPath`](datachart_series_types_scatter_contour.md), and [`valueMemberPath`](datachart_series_types_scatter_contour.md) properties.

You can use the [SampleScatterData](datachart_data_sources_scatter.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleScatterData.create() }
```

### Required Modules

The scatter contour series requires the following modules:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterContourSeries } from "igniteui-angular-charts/ES5/igx-scatter-contour-series";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxLinearContourValueResolver } from "igniteui-angular-charts/ES5/igx-linear-contour-value-resolver";
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

This code demonstrates how to create an instance of data chart with  [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-contour-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-contour-series>
 </igx-data-chart>
```

### Contour Fill Scale

Use the [`fillScale`](datachart_series_types_scatter_contour.md) property of the[`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md) to resolve fill brushes of the contour lines.

The provided [`IgxValueBrushScaleComponent`](datachart_series_types_scatter_contour.md) class should satisfy most coloring needs, but you can inherit from this class and provide your own coloring logic. The following table lists properties of the [`IgxValueBrushScaleComponent`](datachart_series_types_scatter_contour.md) affecting the surface coloring of the [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md):

-   [`brushes`](datachart_series_types_scatter_contour.md) sets the collection of brushes for filling contours.
-   `MaximumValue` sets the highest value to assign a brush. Any given value greater than this value will be Transparent.
-   `MinimumValue` sets the lowest value to assign a brush. Any given value less than this value will be Transparent.

### Contour Value Resolver

The [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md) renders using exactly 10 contour lines at even intervals between the minimum and maximum values of the items mapped to the [`valueMemberPath`](datachart_series_types_scatter_contour.md) property. If you desire more or fewer contours, you can assign the [`IgxLinearContourValueResolverComponent`](datachart_series_types_scatter_contour.md) with a number of contours to the [`valueResolver`](datachart_series_types_scatter_contour.md) property of the [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md).

The following code shows how to configure the number of contour lines in the [`IgxScatterContourSeriesComponent`](datachart_series_types_scatter_contour.md).

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Types](datachart_series_types.md)
