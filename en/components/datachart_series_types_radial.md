---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Radial
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','RadialPieSeries']
---

## Radial Series

This topic explains various types of radial series in the Angular data chart component. Radial series a group of series that render data as collection of data points wrapped around a circle, rather than stretching along a horizontal line as [Category Series](datachart_series_types_category.md) do. Radial series are also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the same category grouping mechanisms of [Category Series](datachart_series_types_category.md).

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Radial Series

The following table lists all types of radial series and their descriptions:

| Series Name                                                                                                                        | Description                                                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRadialAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) | Displays a filled polygon enclosed by a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates            |
| `RadialSplineAreaSeries`                                                                                                           | Displays a filled polygon enclosed by a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates |
| `RadialSplineSeries`                                                                                                               | Displays a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates                              |
| `RadialScatterSeries`                                                                                                              | Displays a collection of markers representing data points which are located at the radial (angle/radius) coordinates                                              |
| [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html) | Displays a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates                                         |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with radial series.

| Series Type                                                                                                                            | Radius Axis Type                                                                                                                     | Angle Axis Type                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`IgxRadialAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html)     | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialPieSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html)       | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html) | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |
| [`IgxRadialLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html)     | [`IgxNumericRadiusAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html) | [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html) |

### Required Data

Radial series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the radial series.
-   All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryAngleAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html))
-   All data items must contain at least one numeric data column which should be mapped using the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath) property of radial series (e.g. [`IgxRadialAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html))

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
import { IgxRadialAreaSeries } from "igniteui-angular-charts/ES5/igx-radial-area-series";
import { IgxRadialLineSeries } from "igniteui-angular-charts/ES5/igx-radial-line-series";
import { IgxRadialPieSeries } from "igniteui-angular-charts/ES5/igx-radial-pie-series";
import { IgxRadialColumnSeries } from "igniteui-angular-charts/ES5/igx-radial-column-series";
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

This code demonstrates how to create an instance of data chart with [`IgxRadialAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) and bind it to the data source.

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

Note that you can also use above code to create other type of radial series by replacing [`IgxRadialAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html) with name of radial series that you want to render.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
