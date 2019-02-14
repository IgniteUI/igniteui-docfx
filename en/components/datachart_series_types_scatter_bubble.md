---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Scatter Bubble Series

This topic explains, with code examples, how to use scatter `BubbleSeries` in the `IgxDataChart` control. This series
is similar to [Scatter Marker Series](datachart_series_types_scatter_marker.md) which use the Cartesian (x, y) coordinate system to plot data. This series displays the data as a collection of scaled bubbles, each having a pair of numeric X/Y values that determines its location and 3rd value that determines its size.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-type-scatter-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-type-scatter-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The `IgxDataChart` control provides various types of axes but only `IgxNumericYAxisComponent`and `IgxNumericYAxisComponent` can be used with `BubbleSeries`.

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

<!-- Angular -->

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
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" />
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" />

    <igx-bubble-series
     name="series1"
     xAxisName="xAxis"
     yAxisName="yAxis"
     xMemberPath="Population"
     yMemberPath="GdpTotal"
     radiusMemberPath="GdpPerCapita" />
 </igx-data-chart>
```

### Bubble Shapes

You can customize appearance of `BubbleSeries` using the [Markers](datachart_series_markers.md) properties as well as to change shape of bubbles to one of predefined shapes, for example:

```html
<igx-bubble-series
 name="series1"
 markerType="Square"
 markerBrush="White"
 markerOutline="Blue"
/>
```

### Bubble Radius Scale

The `RadiusScale` is an optional feature of `BubbleSeries` that determines the sizes of bubbles. This feature is implemented through the`SizeScale` object. When the radius scale is set, the smallest bubble will be equal to `MinimumValue`, the largest bubble will be equal to `MaximumValue`, and all the remaining bubbles will be scaled accordingly. The size scale can be either linear or logarithmic. When the radius scale is not set, each bubble’s size is equal to the value of data column mapped to `RadiusMemberPath` property

### Bubble Fill Scale

The `FillScale` is an optional feature which determines the color pattern within a single `BubbleSeries`. This series supports the following fill scales:

-   `ValueBrushScale` uses a set of values from data column mapped to `FillMemberPath` property to determine an interpolated brush for bubbles. Also, it can have user-specified `MinimumValue` and `MaximumValue`. When a range is set on this scale, bubbles with values that fall outside the range do not get a brush from the `Brushes` collection and are not colored.
-   `CustomPaletteBrushScale` uses the index of a bubble marker to select a brush from the `Brushes` collection. When the `BrushSelectionMode` property is set to the `Select` enumerable value, the bubbles are colored sequentially and it is set to `Interpolate`, the brush is interpolated based on the bubble’s index and the number of brushes in the collection.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Locations](datachart_axis_locations.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
