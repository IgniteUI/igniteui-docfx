---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Scatter Bubble
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
---

## Scatter Bubble Series

This topic explains, with code examples, how to use scatter `BubbleSeries` in the Angular data chart component. This series
is similar to [Scatter Marker Series](datachart_series_types_scatter_marker.md) which use the Cartesian (x, y) coordinate system to plot data. This series displays the data as a collection of scaled bubbles, each having a pair of numeric X/Y values that determines its location and 3rd value that determines its size.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only `IgxNumericYAxisComponent`and `IgxNumericYAxisComponent` can be used with `BubbleSeries`.

### Required Data

The `BubbleSeries` has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the `XMemberPath`, `YMemberPath`, and `RadiusMemberPath` properties

You can use the [SampleScatterStats](datachart_data_sources_stats.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleScatterStats.getCountries() }
```

### Required Modules

The scatter bubble series requires the following modules:

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxBubbleSeries } from "igniteui-angular-charts/ES5/igx-bubble-series";
import { IgxSizeScale } from "igniteui-angular-charts/ES5/igx-size-scale";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";
import { IgxCustomPaletteBrushScale } from "igniteui-angular-charts/ES5/igx-custom-palette-brush-scale";
import { BrushSelectionMode } from "igniteui-angular-charts/ES5/BrushSelectionMode";
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

This code demonstrates how to create an instance of data chart with `BubbleSeries` and bind it to the data source.

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

### Bubble Shapes

You can customize appearance of `BubbleSeries` using the [Markers](datachart_series_markers.md) properties as well as to change shape of bubbles to one of predefined shapes, for example:

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue">
</igx-bubble-series>
```

```typescript
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.markerType = MarkerType.Square;
series1.markerBrush = "White";
series1.markerOutline = "Blue";
```

### Bubble Radius Scale

The `RadiusScale` is an optional feature of `BubbleSeries` that determines the sizes of bubbles. This feature is implemented through the`SizeScale` object. When the radius scale is set, the smallest bubble will be equal to `MinimumValue`, the largest bubble will be equal to `MaximumValue`, and all the remaining bubbles will be scaled accordingly. The size scale can be either linear or logarithmic. When the radius scale is not set, each bubble’s size is equal to the value of data column mapped to `RadiusMemberPath` property

```typescript
const sizeScale = new IgxSizeScale({});
sizeScale.minimumValue = 10;
sizeScale.maximumValue = 60;
const series1 = new IgxBubbleSeries({ name: "series1" });
series1.radiusMemberPath = "GdpPerCapita";
series1.radiusScale = sizeScale;
```

### Bubble Fill Scale

The `FillScale` is an optional feature which determines the color pattern within a single `BubbleSeries`. This series supports the following fill scales:

-   `ValueBrushScale` uses a set of values from data column mapped to `FillMemberPath` property to determine an interpolated brush for bubbles. Also, it can have user-specified `MinimumValue` and `MaximumValue`. When a range is set on this scale, bubbles with values that fall outside the range do not get a brush from the `Brushes` collection and are not colored.
-   `CustomPaletteBrushScale` uses the index of a bubble marker to select a brush from the `Brushes` collection. When the `BrushSelectionMode` property is set to the `Select` enumerable value, the bubbles are colored sequentially and it is set to `Interpolate`, the brush is interpolated based on the bubble’s index and the number of brushes in the collection.

```typescript
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

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Tooltips](datachart_series_tooltips.md)
-   [Series Trendlines](datachart_series_trendlines.md)
-   [Series Types](datachart_series_types.md)
