---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Scatter Area
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','ScatterAreaSeries','ScatterContourSeries']
---

## Scatter Area Chart

This topic explains, with code examples, how to use  [`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html) in the Angular data chart component. This series draws a colored surface based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The [`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html) works a lot like the [`IgxScatterContourSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattercontourseriescomponent.html) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-area-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-area-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) and [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) can be used with [`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html).

### Required Data

The [`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the [`xMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattertriangulationseriescomponent.html#xmemberpath), [`yMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscattertriangulationseriescomponent.html#ymemberpath), and [`colorMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html#colormemberpath) properties.

You can use the [SampleScatterData](data-chart-data-sources-scatter.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterData.create();
```

### Required Modules

The scatter area series requires the following modules:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterAreaSeries } from 'igniteui-angular-charts';
import { IgxCustomPaletteColorScale } from 'igniteui-angular-charts';
import { ColorScaleInterpolationMode } from 'igniteui-angular-charts';
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

### Code Example

This code demonstrates how to create an instance of data chart with  [`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html) and bind it to the data source.

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

Use the [`colorScale`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html#colorscale) property of the[`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html) to resolve values of points and thus fill the surface of the series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.

The provided [`IgxCustomPaletteColorScaleComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) class should satisfy most coloring needs, but you can inherit from the [`colorScale`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html#colorscale) abstract class and provide your own coloring logic.

The following table list properties of the [`IgxCustomPaletteColorScaleComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) affecting surface coloring of the [`IgxScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterareaseriescomponent.html).

-   `Palette`  sets the collection of colors to select from or to interpolate between.
-   [`InterpolationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/interpolationmode.html) sets the method getting a color from the Palette.
-   `MaximumValue` sets the highest value to assign a color. Any given value greater than this value will be Transparent.
-   `MinimumValue` sets the lowest value to assign a color. Any given value less than this value will be Transparent.

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Types](data-chart-series-types.md)
