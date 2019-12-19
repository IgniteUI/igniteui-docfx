---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Polar Area Chart
_description: Create a polar area chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'PolarAreaSeries']
---

## Polar Area Chart

The Ignite UI for Angular polar area chart belongs to a group of polar charts and has a shape of a filled polygon which vertices or corners are located at the polar (angle/radius) coordinates of data points. The [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html) uses the same concepts of data plotting as the [`IgxScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) but wraps data points around a circle rather than stretching them along a horizontal line. Like with other series types, multiple [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html) can be plotted in the same data chart and they can be overlaid on each other to show differences and similarities between data sets.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html).

-   [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)

### Required Data

The [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html).
-   All data items must contain at least two numeric data columns which should be mapped using the [`angleMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#anglememberpath) and [`radiusMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#radiusmemberpath) properties of the [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html).

In polar coordinate systems, the location of data points is determined by an angle (angular coordinate) from a fixed direction and distance (radial coordinate) from a fixed point (analogous to the origin of a Cartesian coordinate) which is called "the pole". The lines that start from the pole and point outwards are gridlines of the angular axis ([`IgxNumericAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)) and the concentric rings that surround the pole are gridlines of the radius axis ([`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html))

You can use the [SamplePolarData](datachart_data_sources_polar.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SamplePolarData.create() }
```

### Required Modules

Creation of the [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxNumericAngleAxis } from "igniteui-angular-charts/ES5/igx-numeric-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxPolarAreaSeries } from "igniteui-angular-charts/ES5/igx-polar-area-series";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";
import { IgxDataChartPolarCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-polar-core-module";
import { IgxDataChartPolarModule } from "igniteui-angular-charts/ES5/igx-data-chart-polar-module";

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

### Code Example - Polar Area Chart

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxPolarAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html) and bind it to a data source.

```html
<igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-area-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-area-series>
</igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
