---
title: Data Chart Component - Native Angular | Ignite UI for Angular
mentionedTypes: ['DataChart']
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Data Chart
---

## Data Chart

The `IgxDataChart` is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-overview' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

When installing the chart package, the core package must also be installed.

**npm install igniteui-angular-charts igniteui-angular-core**

The data chart is exported as an `NgModule`, you need to import the
`IgxDataChartCoreModule` inside your `AppModule`:

<!-- -->

<!-- -->

```typescript
// data chart's modules required for all series:
import { IgxDataChartModule } from 'igniteui-angular-charts/ES5/igx-data-chart-module';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts/ES5/igx-data-chart-core--module';
// scatter series' modules:
import { IgxDataChartScatterCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-core-module";
import { IgxDataChartScatterModule } from "igniteui-angular-charts/ES5/igx-data-chart-scatter-module";
// scatter series elements:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxNumericXAxis } from "igniteui-angular-charts/ES5/igx-numeric-x-axis";
import { IgxBubbleSeries } from "igniteui-angular-charts/ES5/igx-bubble-series";
import { IgxSizeScale } from "igniteui-angular-charts/ES5/igx-size-scale";
import { IgxValueBrushScale } from "igniteui-angular-charts/ES5/igx-value-brush-scale";

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

The `IgxDataChart` control supports over 65 types of series including [Category Series](datachart_series_types_category.md), [Financial Series](datachart_series_types_financial.md), [Polar Series](datachart_series_types_polar.md), [Radial Series](datachart_series_types_radial.md), [Range Series](datachart_series_types_range.md), [Scatter Series](datachart_series_types_scatter_bubble.md), and [Shape Series](datachart_series_types_shape.md). Refer to the [Series](datachart_series_types.md) topic, for a full list of supported types of series and how to use them.

### Usage

Now that the data chart modules are imported, next step is to bind chart to data. All series require specific number and type of data columns to render correctly and you can find a data source for each type of series in the [Data Sources](datachart_data_sources.md) topic.

The following code snippet demonstrates how to create scatter `BubbleSeries` and bind it to [SampleScatterStats](datachart_data_sources_stats.md) data.

> [!NOTE]
>
> Setting a data source on the chart component will apply to all series but you can also set different data sources on each series added in the data chart.

```html
 <igx-data-chart [dataSource]="data"
                 width="700px"
                 height="500px">
    <igx-numeric-x-axis name="xAxis" isLogarithmic="true" />
    <igx-numeric-y-axis name="yAxis" isLogarithmic="true" />
    <igx-bubble-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        xMemberPath="Population"
        yMemberPath="GdpTotal"
        radiusMemberPath="GdpPerCapita"
        [dataSource]="data"  />
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
