---
title: Angular Data Chart | Data Visualization Tools | Radial Pie Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create radial pie charts. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, radial pie charts,  Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','RadialPieSeries']
---

# Angular Radial Pie Chart

The Ignite UI for Angular radial pie chart belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. The [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) take concepts of categorizing multiple series of data points and wrapping them around on a circle rather than stretching data points along a horizontal line.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-pie-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html).

-   [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)

## Required Data

The [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html).
-   All data items must contain at least one label data column (string or date time) which should be mapped to the [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) property of the category axis (e.g. [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)).
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath) property of the [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html).

You can use the [SampleRadialData](data-chart-data-sources-radial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRadialData.create();
```

## Required Modules

Creation of the [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialPieSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartRadialModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

## Code Example

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department"></igx-category-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-radial-pie-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-pie-series>
 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Types](data-chart-series-types.md)
