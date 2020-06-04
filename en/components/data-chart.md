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
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

### Dependencies

When installing the data chart package, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:10px;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

### Required Modules

The Angular data chart component requires the following modules:

```ts
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxNumberAbbreviatorModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartScatterModule } from 'igniteui-angular-charts';
import { IgxBubbleSeriesComponent } from 'igniteui-angular-charts';
import { IgxNumericXAxisComponent } from 'igniteui-angular-charts';
import { IgxNumericYAxisComponent } from 'igniteui-angular-charts';
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartScatterCoreModule,
        IgxDataChartScatterModule,
        IgxNumberAbbreviatorModule
    ]
})
export class AppModule { /* ... */ }
```

<div class="divider--half"></div>

### Supported Series

The Angular data chart component supports over 65 types of series including [Category Series](data-chart-type-category-series.md), [Financial Series](data-chart-type-financial-series.md), [Polar Series](data-chart-type-polar-series.md), [Radial Series](data-chart-type-radial-series.md), [Range Series](data-chart-type-range-series.md), [Scatter Series](data-chart-type-scatter-bubble-series.md), and [Shape Series](data-chart-type-shape-series.md). Refer to the [Series](data-chart-series-types.md) topic, for a full list of supported types of series and how to use them.

### Supported Axes

The Angular data chart component supports various types of axis that are intended to use with specific type of series. The following table lists which axes can be used with type of series.   Refer to the [Series](data-chart-series-types.md) and [Axis](data-chart-axis-types.md) topics, for more information on how to use these types of axis.

| Axis Type          | Supported Series Types                                                                                                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | only [`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) in [Category Series](data-chart-type-category-series.md) group                                                                                                                 |
| CategoryXAxis      | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except [`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar))       |
| TimeXAxis          | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except [`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar))       |
| OrdinalTimeXAxis   | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md),  [Category Series](data-chart-type-category-series.md) (except [`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar))       |
| PercentChangeYAxis | all [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), [Category Series](data-chart-type-category-series.md), [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md)                        |
| NumericYAxis       | all [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md), [Financial Series](data-chart-type-financial-series.md), [Range Series](data-chart-type-range-series.md), [Category Series](data-chart-type-category-series.md)                        |
| NumericXAxis       | all [Scatter Series](data-chart-type-scatter-bubble-series.md), [Shape Series](data-chart-type-shape-series.md), and [`bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bar) in [Category Series](data-chart-type-category-series.md) group |
| NumericAngleAxis   | all [Polar Series](data-chart-type-polar-series.md)                                                                                                                                                                                                                                                     |
| NumericRadiusAxis  | all [Polar Series](data-chart-type-polar-series.md) and [Radial Series](data-chart-type-radial-series.md)                                                                                                                                                                                               |
| CategoryAngleAxis  | all  [Radial Series](data-chart-type-radial-series.md)                                                                                                                                                                                                                                                  |

### Usage

Now that the data chart modules are imported, next step is to bind chart to data. All series require specific number and type of data columns to render correctly and you can find a data source for each type of series in the [Data Sources](data-chart-data-sources.md) topic.

The following code snippet demonstrates how to create scatter [`bubble`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/seriestype.html#bubble) and bind it to [SampleScatterStats](data-chart-data-sources-stats.md) data.

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
        xMemberPath="population"
        yMemberPath="gdpTotal"
        radiusMemberPath="gdpPerCapita"
        [dataSource]="data"  ></igx-bubble-series>
 </igx-data-chart>
```

<div class="divider--half"></div>

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Axis Settings](data-chart-axis-settings.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Types](data-chart-series-types.md)
