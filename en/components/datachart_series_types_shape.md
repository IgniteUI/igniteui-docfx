---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Scatter Shape Series

This topic explains various types of shape series in the `IgxDataChart` control. Scatter shape series is a group of chart series that take array of shapes (array or arrays of X/Y coordinates) and render them as collection of polygons (`ScatterPolygonSeries`)  or polylines (`ScatterPolylineSeries`) in Cartesian (x, y) coordinate system.

Scatter shape series are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-shape-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-shape-series' width="100%" height="100%" seamless="" frameBorder="0" onload="onDvSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-shape-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Shape Series

The following table lists all types of shape series and their descriptions:

| Series Name             | Description                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ScatterPolygonSeries`  | Displays a polygon for each of shape mapped to `ShapeMemberPath` property. It is useful for rendering shapes such as a country boarders.           |
| `ScatterPolylineSeries` | Displays a polyline for each of shape mapped to `ShapeMemberPath` property. It is useful for rendering disconnected lines such as a network graph. |

### Required Axes

The `IgxDataChart` control provides various types of axes but only the following types of axes can be used with scatter shape series.

| Series Type             | YAxis Type                 | XAxis Type                 |
| ----------------------- | -------------------------- | -------------------------- |
| `ScatterPolygonSeries`  | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |
| `ScatterPolylineSeries` | `IgxNumericYAxisComponent` | `IgxNumericXAxisComponent` |

### Required Data

Scatter shape series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain at one shape data column (array or arrays of X/Y coordinates) which should be mapped to the `ShapeMemberPath` property of scatter shape series (e.g. `ScatterPolygonSeries`)

You can use the [SampleShapeData](datachart_data_sources_shape.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleShapeData.create() }
```

### Required Modules

<!-- Angular -->

In order to use scatter shape series, you need to import the following modules in your app during load and register data chart modules:

```typescript
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
// series' modules:
import { IgxScatterPolygonSeries } from "igniteui-angular-charts/ES5/igx-scatter-polygon-series";
import { IgxScatterPolylineSeries } from "igniteui-angular-charts/ES5/igx-scatter-polyline-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartShapeCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-core-module";
import { IgxDataChartShapeModule } from "igniteui-angular-charts/ES5/igx-data-chart-shape-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

### Code Example

This code demonstrates how to create an instance of data chart with `ShapeColumnSeries` and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis" />
    <igx-numeric-y-axis name="yAxis" />
    <igx-scatter-polygon-series
     name="series1"
     shapeMemberPath="Points"
     title="House Floor Plan"
     brush="Gray"
     outline="Black" />
 </igx-data-chart>
```

Note that you can also use above code to create `ScatterPolygonSeries` by replacing `ScatterPolylineSeries`.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
