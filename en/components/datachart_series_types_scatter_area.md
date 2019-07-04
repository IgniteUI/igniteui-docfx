---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Scatter Area
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','ScatterAreaSeries','ScatterContourSeries']
---

## Scatter Area Series

This topic explains, with code examples, how to use  [`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html) in the Angular data chart component. This series draws a colored surface based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The [`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html) works a lot like the [`IgxScatterContourSeriesComponent`](/components/datachart_series_types_scatter_area.html) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-area-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-area-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only [`IgxNumericYAxisComponent`](/components/datachart_series_types_scatter_area.html) and [`IgxNumericYAxisComponent`](/components/datachart_series_types_scatter_area.html) can be used with [`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html).

### Required Data

The [`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html) has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the [`xMemberPath`](/components/datachart_series_types_scatter_area.html), [`yMemberPath`](/components/datachart_series_types_scatter_area.html), and [`colorMemberPath`](/components/datachart_series_types_scatter_area.html) properties.

You can use the [SampleScatterData](datachart_data_sources_scatter.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleScatterData.create() }
```

### Required Modules

The scatter area series requires the following modules:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterAreaSeries } from "igniteui-angular-charts/ES5/igx-scatter-area-series";
import { IgxCustomPaletteColorScale } from "igniteui-angular-charts/ES5/igx-custom-palette-color-scale";
import { ColorScaleInterpolationMode } from "igniteui-angular-charts/ES5/ColorScaleInterpolationMode";
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

This code demonstrates how to create an instance of data chart with  [`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="X"
        yMemberPath="Y"
        colorMemberPath="Z">
    </igx-scatter-area-series>
 </igx-data-chart>
```

### Color Scale

Use the [`colorScale`](/components/datachart_series_types_scatter_area.html) property of the[`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html) to resolve values of points and thus fill the surface of the series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.

The provided [`IgxCustomPaletteColorScaleComponent`](/components/datachart_series_types_scatter_area.html) class should satisfy most coloring needs, but you can inherit from the [`colorScale`](/components/datachart_series_types_scatter_area.html) abstract class and provide your own coloring logic.

The following table list properties of the [`IgxCustomPaletteColorScaleComponent`](/components/datachart_series_types_scatter_area.html) affecting surface coloring of the [`IgxScatterAreaSeriesComponent`](/components/datachart_series_types_scatter_area.html).

-   `Palette`  sets the collection of colors to select from or to interpolate between.
-   [`InterpolationMode`](/components/datachart_series_types_scatter_area.html) sets the method getting a color from the Palette.
-   `MaximumValue` sets the highest value to assign a color. Any given value greater than this value will be Transparent.
-   `MinimumValue` sets the lowest value to assign a color. Any given value less than this value will be Transparent.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Types](datachart_series_types.md)
