---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart component is TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Scatter Area Series

This topic explains, with code examples, how to use  `ScatterAreaSeries` in the `IgxDataChart` control. This series draws a colored surface based on a triangulation of X and Y data with a numeric value assigned to each point. This type of series is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. The `ScatterAreaSeries` works a lot like the `ScatterContourSeries` except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

### Demo

<div class="sample-container" style="height: 300px">
    <iframe id="data-chart-type-area-series-iframe" src='{environment:demosBaseUrl}/data-chart-type-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-type-area-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Required Axes

The `IgxDataChart` control provides various types of axes but only `IgxNumericYAxisComponent`and `IgxNumericYAxisComponent` can be used with `ScatterAreaSeries`.

### Required Data

The `ScatterAreaSeries` has the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain 3 numeric data columns which should be mapped to the `XMemberPath`, `YMemberPath`, and `ColorMemberPath` properties.

You can use the [SampleScatterData](datachart_data_sources_scatter.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleScatterData.create() }
```

### Required Modules

<!-- Angular -->

The scatter area series requires the following modules:

```typescript
// axis' modules:
TODO Angular
// category series' modules:
TODO Angular
// data chart's modules:
TODO Angular
```

### Code Example

This code demonstrates how to create an instance of data chart with  `ScatterAreaSeries` and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    TODO

 </igx-data-chart>
```

### Color Scale

Use the `ColorScale` property of the`ScatterAreaSeries` to resolve values of points and thus fill the surface of the series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.

The provided `CustomPaletteColorScale` class should satisfy most coloring needs, but you can inherit from the `ColorScale` abstract class and provide your own coloring logic.

The following table list properties of the `CustomPaletteColorScale` affecting surface coloring of the `ScatterAreaSeries`.

-   `Palette`  sets the collection of colors to select from or to interpolate between.
-   `InterpolationMode` sets the method getting a color from the Palette.
-   `MaximumValue` sets the highest value to assign a color. Any given value greater than this value will be Transparent.
-   `MinimumValue` sets the lowest value to assign a color. Any given value less than this value will be Transparent.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Locations](datachart_axis_locations.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Requirements](datachart_series_requirements.md)
-   [Series Types](datachart_series_types.md)
