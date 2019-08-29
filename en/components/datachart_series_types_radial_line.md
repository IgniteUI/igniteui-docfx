---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Radial Line Chart
_description: Create a radial line chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','RadialLineSeries']
---

## Radial Line Chart

The Ignite UI for Angular radial line chart belongs to a group of radial charts and is rendered using a collection of straight lines connecting data points. The [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) uses the same concepts of data plotting as the [`IgxLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html), but wraps data points around a circle rather than stretching them along a horizontal line.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-line-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html).

-   [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)

### Required Data

The [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html).
-   All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)).
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath) property of the [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html).

You can use the [SampleRadialData](datachart_data_sources_radial.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleRadialData.create() }
```

### Required Modules

Creation of the [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from "igniteui-angular-charts/ES5/igx-category-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxRadialLineSeries } from "igniteui-angular-charts/ES5/igx-radial-line-series";
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

### Code Example - Radial Line Chart

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-angle-axis name="angleAxis" label="Department"></igx-category-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-radial-line-series
        name="series1"
        valueMemberPath="Budget"
        valueAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-radial-line-series>
 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
