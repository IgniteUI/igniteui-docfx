---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'SeriesType']
---

## Data Chart

The Angular data chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this data chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

When installing the data chart package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### Required Modules

The Angular data chart component requires the following modules:

```ts
// data chart's modules required for all series:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
// scatter series' modules:
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
// scatter series elements:
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts/ES5/igx-value-brush-scale-component";

@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
    ]
})
export class AppModule { /* ... */ }
```

<div class="divider--half"></div>

### Supported Series

The Angular data chart component supports over 65 types of series including [Category Series](datachart_series_types_category.md), [Financial Series](datachart_series_types_financial.md), [Polar Series](datachart_series_types_polar.md), [Radial Series](datachart_series_types_radial.md), [Range Series](datachart_series_types_range.md), [Scatter Series](datachart_series_types_scatter_bubble.md), and [Shape Series](datachart_series_types_shape.md). Refer to the [Series](datachart_series_types.md) topic, for a full list of supported types of series and how to use them.

### Supported Axes

The Angular data chart component supports various types of axis that are intended to use with specific type of series. The following table lists which axes can be used with type of series.   Refer to the [Series](datachart_series_types.md) and [Axis](datachart_axis_types.md) topics, for more information on how to use these types of axis.

| Axis Type          | Supported Series Types                                                                                                                                                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | only [`bar`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) in [Category Series](datachart_series_types_category.md) group                                                                                                                    |
| CategoryXAxis      | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`bar`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar))          |
| TimeXAxis          | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`bar`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar))          |
| OrdinalTimeXAxis   | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`bar`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar))          |
| PercentChangeYAxis | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), [Category Series](datachart_series_types_category.md), [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md) |
| NumericYAxis       | all [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md), [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), [Category Series](datachart_series_types_category.md) |
| NumericXAxis       | all [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md), and [`bar`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) in [Category Series](datachart_series_types_category.md) group    |
| NumericAngleAxis   | all [Polar Series](datachart_series_types_polar.md)                                                                                                                                                                                                                              |
| NumericRadiusAxis  | all [Polar Series](datachart_series_types_polar.md) and [Radial Series](datachart_series_types_radial.md)                                                                                                                                                                        |
| CategoryAngleAxis  | all  [Radial Series](datachart_series_types_radial.md)                                                                                                                                                                                                                           |

### Usage

Now that the data chart modules are imported, next step is to bind chart to data. All series require specific number and type of data columns to render correctly and you can find a data source for each type of series in the [Data Sources](datachart_data_sources.md) topic.

The following code snippet demonstrates how to create scatter [`bubble`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bubble) and bind it to [SampleScatterStats](datachart_data_sources_stats.md) data.

> [!NOTE]
>
> Setting a data source on the chart component will apply to all series but you can also set different data sources on each series added in the data chart.

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" ></igx-numeric-x-axis>
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" ></igx-numeric-y-axis>
    <igx-bubble-series
        name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita"
        [dataSource]="data"  ></igx-bubble-series>
 </igx-data-chart>
```

<div class="divider--half"></div>

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Axis Settings](datachart_axis_settings.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
