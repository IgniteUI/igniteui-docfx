---
title: Angular Data Chart | Data Visualization Tools | Scatter Bubble Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create scatter bubble charts. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, scatter bubble charts, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','BubbleSeries']

---

# Angular Scatter Bubble Chart

This topic explains, with code examples, how to use scatter [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) in the Angular data chart component. This series
is similar to [Scatter Marker Series](data-chart-type-scatter-point-series.md) which use the Cartesian (x, y) coordinate system to plot data. This series displays the data as a collection of scaled bubbles, each having a pair of numeric X/Y values that determines its location and 3rd value that determines its size.

## Angular Scatter Bubble Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-bubble-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Scatter Bubble Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-bubble-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only [`IgxNumericYAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) and [`IgxNumericYAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) can be used with [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html).

## Required Data

The [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the [`xMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#xmemberpath), [`yMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterbasecomponent.html#ymemberpath), and [`radiusMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusmemberpath) properties

You can use the [SampleScatterStats](data-chart-data-sources-stats.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## Required Modules

The scatter bubble series requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

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
import { IgxBubbleSeries } from 'igniteui-angular-charts';
import { IgxSizeScale } from 'igniteui-angular-charts';
import { IgxValueBrushScale } from 'igniteui-angular-charts';
import { IgxCustomPaletteBrushScale } from 'igniteui-angular-charts';
import { BrushSelectionMode } from 'igniteui-angular-charts';
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

This code demonstrates how to create an instance of data chart with [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true"></igx-numeric-y-axis>

    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita">
    </igx-bubble-series>
 </igx-data-chart>
```

## Bubble Shapes

You can customize appearance of [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) using the [Markers](data-chart-series-markers.md) properties as well as to change shape of bubbles to one of predefined shapes, for example:

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

```ts
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

## Bubble Radius Scale

The [`radiusScale`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusscale) is an optional feature of [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html) that determines the sizes of bubbles. This feature is implemented through the[`IgxSizeScaleComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html) object. When the radius scale is set, the smallest bubble will be equal to [`minimumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html#minimumvalue), the largest bubble will be equal to [`maximumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html#maximumvalue), and all the remaining bubbles will be scaled accordingly. The size scale can be either linear or logarithmic. When the radius scale is not set, each bubble’s size is equal to the value of data column mapped to [`radiusMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#radiusmemberpath) property

```ts
const sizeScale = new IgxSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

## Bubble Fill Scale

The [`fillScale`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillscale) is an optional feature which determines the color pattern within a single [`IgxBubbleSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html). This series supports the following fill scales:

-   [`IgxValueBrushScaleComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvaluebrushscalecomponent.html) uses a set of values from data column mapped to [`fillMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html#fillmemberpath) property to determine an interpolated brush for bubbles. Also, it can have user-specified [`minimumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvaluebrushscalecomponent.html#minimumvalue) and [`maximumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvaluebrushscalecomponent.html#maximumvalue). When a range is set on this scale, bubbles with values that fall outside the range do not get a brush from the [`brushes`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#brushes) collection and are not colored.
-   [`IgxCustomPaletteBrushScaleComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettebrushscalecomponent.html) uses the index of a bubble marker to select a brush from the [`brushes`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#brushes) collection. When the [`brushSelectionMode`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettebrushscalecomponent.html#brushselectionmode) property is set to the `Select` enumerable value, the bubbles are colored sequentially and it is set to `Interpolate`, the brush is interpolated based on the bubble’s index and the number of brushes in the collection.

```ts
const brushScale = new IgxValueBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.minimumValue = 10;
brushScale.maximumValue = 60;
// or
const brushScale = new IgxCustomPaletteBrushScale({});
brushScale.brushes = ["#ffffff", "#b56ffc"];
brushScale.brushSelectionMode = BrushSelectionMode.Interpolate;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.fillMemberPath = "GdpPerCapita";
series1.fillScale = brushScale;
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
-   [Series Trendlines](data-chart-series-trendlines.md)
-   [Series Types](data-chart-series-types.md)
