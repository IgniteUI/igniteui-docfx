---
title: Angular Data Chart | Data Visualization Tools | Scatter Polyline Chart | Data Binding | Infragistics
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: Angular charts, data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','ShapeColumnSeries', 'ScatterPolylineSeries']

---

# Angular Scatter Polyline Chart

The Ignite UI for Angular scatter polyline chart belongs to a group of shape charts that take an array of shapes (array or arrays of X/Y coordinates). This series renders that array of shapes as a collection of polylines in the Cartesian (x, y) system.

Scatter shape series are often used highlight regions in scientific data or they can be used to plot diagrams, blueprints, or even floor plan of buildings.

## Angular Scatter Polyline Chart Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-scatter-polyline-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-scatter-polyline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Scatter Polyline Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-scatter-polyline-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html).

-   [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

## Required Data

The [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the scatter shape series.
-   All data items must contain at one shape data column (array or arrays of X/Y coordinates) which should be mapped to the [`shapeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxshapeseriesbasecomponent.html#shapememberpath) property of scatter shape series.

You can use the [SampleShapeData](data-chart-data-sources-shape.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleScatterStats.getCountries();
```

## Required Modules

Creation of the [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   DataChartCoreModule
-   DataChartScatterCoreModule
-   DataChartScatterModule
-   DataChartInteractivityModule
-   ScatterPolylineSeriesModule
    <!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxNumericXAxis } from 'igniteui-angular-charts';
// series' modules:
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

This code demonstrates how to create an instance the Ignite UI for Angular data chart with [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html) and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis name="xAxis"></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis"></igx-numeric-y-axis>
    <igx-scatter-polyline-series
        name="series1"
        shapeMemberPath="Points"
        title="House Floor Plan"
        brush="Gray"
        outline="Black">
    </igx-scatter-polyline-series>
 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Types](data-chart-series-types.md)
