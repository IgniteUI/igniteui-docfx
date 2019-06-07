---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Radial
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
---

## Radial Series

This topic explains various types of radial series in the Angular data chart component. Radial series a group of series that render data as collection of data points wrapped around a circle, rather than stretching along a horizontal line as [Category Series](datachart_series_types_category.md) do. Radial series are also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the same category grouping mechanisms of [Category Series](datachart_series_types_category.md).

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-type-radial-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-radial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-radial-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Radial Series

The following table lists all types of radial series and their descriptions:

| Series Name              | Description                                                                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RadialAreaSeries`       | Displays a filled polygon enclosed by a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates            |
| `RadialSplineAreaSeries` | Displays a filled polygon enclosed by a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates |
| `RadialSplineSeries`     | Displays a collection of smooth/interpolated lines connecting data points which are located at the radial (angle/radius) coordinates                              |
| `RadialScatterSeries`    | Displays a collection of markers representing data points which are located at the radial (angle/radius) coordinates                                              |
| `RadialLineSeries`       | Displays a collection of straight lines connecting data points which are located at the radial (angle/radius) coordinates                                         |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with radial series.

| Series Type          | Radius Axis Type                | Angle Axis Type                 |
| -------------------- | ------------------------------- | ------------------------------- |
| `RadialAreaSeries`   | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |
| `RadialPieSeries`    | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |
| `RadialColumnSeries` | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |
| `RadialLineSeries`   | `IgxNumericRadiusAxisComponent` | `IgxCategoryAngleAxisComponent` |

### Required Data

Radial series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the radial series.
-   All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. `IgxCategoryAngleAxisComponent`)
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of radial series (e.g. `RadialAreaSeries`)

You can use the [SampleRadialData](datachart_data_sources_radial.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SampleRadialData.create() }
```

### Required Modules

<!-- Angular -->

In order to use radial series, you need to import the following modules in your app during load:

```typescript
// axis' modules:
import { IgxCategoryAngleAxis } from "igniteui-angular-charts/ES5/igx-category-angle-axis";
import { IgxNumericRadiusAxis } from "igniteui-angular-charts/ES5/igx-numeric-radius-axis";
// series modules:
import { IgxRadialAreaSeries } from "igniteui-angular-charts/ES5/igx-radial-area-series";
import { IgxRadialLineSeries } from "igniteui-angular-charts/ES5/igx-radial-line-series";
import { IgxRadialPieSeries } from "igniteui-angular-charts/ES5/igx-radial-pie-series";
import { IgxRadialColumnSeries } from "igniteui-angular-charts/ES5/igx-radial-column-series";
// data chart's modules:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
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

This code demonstrates how to create an instance of data chart with `RadialAreaSeries` and bind it to the data source.

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

Note that you can also use above code to create other type of radial series by replacing `RadialAreaSeries` with name of radial series that you want to render.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
