---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Radial Pie Chart
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','RadialPieSeries']
---

## Radial Pie Chart

[`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) uses pie slices that extend from the center of chart towards locations of data points. The [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) take concepts of categorizing multiple series of data points and wrapping them around on a circle rather than stretching data points along a horizontal line.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-radial-pie-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html).

-   [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)

### Required Data

The [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html).
-   All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)).
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath) property of the [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html).

You can use the [SampleRadialData](datachart_data_sources_radial.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleRadialData.create() }
```

### Required Modules

<!-- Angular -->

In order to use radial series, you need to import the following modules in your app during load:

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from "igniteui-angular-charts/ES5/igx-category-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxRadialPieSeries } from "igniteui-angular-charts/ES5/igx-radial-pie-series";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartRadialCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-core-module";
import { IgxDataChartRadialModule } from "igniteui-angular-charts/ES5/igx-data-chart-radial-module";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartRadialCoreModule,
        IgxDataChartRadialModule,
        // ...
    ]
})
```

### Code Example

This code demonstrates how to create an instance of data chart with [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) and bind it to the data source.

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

Note that you can also use above code to create other type of radial series by replacing [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) with name of radial series that you want to render.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
