---
title: Angular Data Chart | Data Visualization Tools | Polar Scatter Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create polar scatter charts. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, polar scatter charts, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'PolarScatterSeries']
---

# Angular Polar Scatter Chart

The Ignite UI for Angular polar scatter chart belongs to a group of polar charts and is rendered using markers at the locations of data points without connecting lines. The [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html) uses the same concepts of data plotting as the [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html) but wraps data points around a circle rather than stretching them along a horizontal line. Like with other series types, multiple [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html) can be plotted in the same data chart and they can overlay each other to show differences and similarities between data sets.

## Angular Polar Scatter Chart Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-scatter-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Polar Scatter Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-polar-scatter-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html).

-   [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
-   [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)

## Required Data

The [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html).
-   All data items must contain at least two numeric data columns which should be mapped using the [`angleMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#anglememberpath) and [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#radiusmemberpath) properties of the [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html).

In polar coordinate systems, the location of data points is determined by an angle (angular coordinate) from a fixed direction and distance (radial coordinate) from a fixed point (analogous to the origin of a Cartesian coordinate) which is called "the pole". The lines that start from the pole and point outwards are gridlines of the angular axis ([`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)) and the concentric rings that surround the pole are gridlines of the radius axis ([`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html))

You can use the [SamplePolarData](data-chart-data-sources-polar.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SamplePolarData.create();
```

## Required Modules

Creation of the [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxNumericAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxPolarScatterSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartPolarModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartPolarCoreModule,
        IgxDataChartPolarModule,
        // ...
    ]
})
```

## Code Example

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html) and bind it to a data source.

```html
<igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-angle-axis  name="angleAxis" startAngleOffset="-90"></igx-numeric-angle-axis>
    <igx-numeric-radius-axis name="radiusAxis"></igx-numeric-radius-axis>
    <igx-polar-scatter-series
        name="series1"
        angleMemberPath="Direction"
        radiusMemberPath="WindSpeed"
        radiusAxisName="radiusAxis"
        angleAxisName="angleAxis">
    </igx-polar-scatter-series>
</igx-data-chart>
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Types](data-chart-series-types.md)
