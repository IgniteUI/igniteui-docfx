---
title: Angular Data Chart | Data Visualization Tools | Scatter Shape Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create shape charts such as ScatterPolygonSeries and ScatterPolylineSeries. View the demo for more information!
_keywords: Angular charts, data chart, shape charts, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','ShapeColumnSeries','ScatterPolygonSeries','ScatterPolylineSeries']

---

# Angular Scatter Shape Series

This topic explains various types of shape series in the Angular data chart component. Scatter shape series is a group of chart series that take array of shapes (array or arrays of X/Y coordinates) and render them as collection of polygons ([`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html))  or polylines ([`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html)) in Cartesian (x, y) coordinate system.

Scatter shape series are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## Angular Scatter Shape Series Example

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-shape-series" 
           alt="Angular Scatter Shape Series Example" 
           github-src="charts/data-chart/type-shape-series">
</code-view>

<div class="divider--half"></div>

## Types of Shape Series

The following table lists all types of shape series and their descriptions:

| Series Name                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)   | Displays a polygon for each of shape mapped to [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxshapeseriesbasecomponent.html#shapememberpath) property. It is useful for rendering shapes such as a country boarders.           |
| [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) | Displays a polyline for each of shape mapped to [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxshapeseriesbasecomponent.html#shapememberpath) property. It is useful for rendering disconnected lines such as a network graph. |

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with scatter shape series.

| Series Type                                                                                                                                                            | YAxis Type                                                                                                                                           | XAxis Type                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)   | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |
| [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) | [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) |

## Required Data

Scatter shape series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain at one shape data column (array or arrays of X/Y coordinates) which should be mapped to the [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxshapeseriesbasecomponent.html#shapememberpath) property of scatter shape series (e.g. [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html))

You can use the [SampleShapeData](data-chart-data-sources-shape.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleShapeData.create();
```

## Required Modules

The scatter polygon series requires the following modules:

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxScatterPolygonSeries } from 'igniteui-angular-charts';
import { IgxScatterPolylineSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartShapeModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartShapeCoreModule,
        IgxDataChartShapeModule,
    ]
})
export class AppModule { /* ... */ }
```

## Code Example

This code demonstrates how to create an instance of data chart with `ShapeColumnSeries` and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polygon-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polygon-series>
 </igx-data-chart>
```

Note that you can also use above code to create [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html) by replacing [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html).

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Types](data-chart-series-types.md)
