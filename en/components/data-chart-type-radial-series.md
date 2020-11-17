---
title: Angular Data Chart | Data Visualization Tools | Radial Charts | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create radial charts such as radial area, radial line, radial pie and many more. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, radial charts, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','RadialPieSeries']
---

# Angular Radial Series

This topic explains various types of radial series in the Angular data chart component. Radial series a group of series that render data as collection of data points wrapped around a circle, rather than stretching along a horizontal line as [Category Series](data-chart-type-category-series.md) do. Radial series are also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the same category grouping mechanisms of [Category Series](data-chart-type-category-series.md).

<!-- Angular, React, WebComponents -->

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## Types of Radial Series

The following table lists all types of radial series and their descriptions:

| Series Name                                                                                                                                                  | Description                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) | Displays a filled polygon enclosed by a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates            |
| `RadialSplineAreaSeries`                                                                                                                                     | Displays a filled polygon enclosed by a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates |
| `RadialSplineSeries`                                                                                                                                         | Displays a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates                              |
| `RadialScatterSeries`                                                                                                                                        | Displays a collection of markers representing data points which are located at the radial (angle/radius) coordinates                                              |
| [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) | Displays a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates                                         |

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with radial series.

| Series Type                                                                                                                                                      | Radius Axis Type                                                                                                                                               | Angle Axis Type                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html)     | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html)       | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html) | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html)     | [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |

## Required Data

Radial series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the radial series.
-   All data items must contain at least one label data column (string or date time) which should be mapped to the [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) property of the category axis (e.g. [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html))
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath) property of radial series (e.g. [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html))

You can use the [SampleRadialData](data-chart-data-sources-radial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRadialData.create();
```

## Required Modules

The radial series requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   DataChartCoreModule
-   DataChartRadialSeriesModule
-   DataChartRadialSeriesCoreModule
-   DataChartInteractivityModule
    <!-- end: Blazor -->

```ts
// axis' modules:
import { IgxCategoryAngleAxis } from 'igniteui-angular-charts';
import { IgxNumericRadiusAxis } from 'igniteui-angular-charts';
// series modules:
import { IgxRadialAreaSeries } from 'igniteui-angular-charts';
import { IgxRadialLineSeries } from 'igniteui-angular-charts';
import { IgxRadialPieSeries } from 'igniteui-angular-charts';
import { IgxRadialColumnSeries } from 'igniteui-angular-charts';
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

This code demonstrates how to create an instance of data chart with [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) and bind it to the data source.

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

Note that you can also use above code to create other type of radial series by replacing [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) with name of radial series that you want to render.

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Types](data-chart-series-types.md)
