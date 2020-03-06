---
title: Financial Chart | Data Visualization Tools | Ignite UI for Angular | Infragistics | Performance
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information.
_keywords: financial chart, Ignite UI for Angular, infragistics
mentionedTypes: ['XamFinancialChart', 'FinancialChartType', 'FinancialOverlayType', 'FinancialChartVolumeType', 'MarkerType', 'FinancialChartXAxisMode', 'FinancialChartZoomSliderType' ]
---

## Chart Performance

The Angular financial chart component has very good performance of rendering a lot of data points. The following demo binds 20 years of data, with 1 day intervals and displays the stock prices using candle sticks.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-performance-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-performance' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-performance-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

The following code demonstrates how to bind the financial chart to high volumes of data.

```ts
import { GenerateOhlcPricesService } from "../services/generate-ohlc-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateOhlcPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

There are several Angular specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

-   When storing lots of data in properties in your components to bind against, you should make sure to set `changeDetection: ChangeDetectionStrategy.OnPush` in your `@Component` decorator. Setting this will tell Angular not to dig deeply into changes within your data array, something you don't want Angular doing every change detection cycle.
-   Instead of Angular automatically telling the charts how they should react to data changes, its your responsibility to notify the components how the data they have been bound to has been modified. Reacting to these delta notifications can be done much more efficiently than to have to compare a 1M record array for any changes, every time Angular runs a change detection. Look for the `notify*` methods on each chart for more information about how to notify the chart of changes to the data it is bound against.
-   When Angular is in Debug mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real world performance always make sure to serve or build with `--prod` version.

<!-- -->

Also, you should consider the following features of the financial chart when optimizing performance in your application.

### Chart Type

Setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) option can have the following impact on chart performance:

-   [`line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#line) - is the least expensive chart type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#column) - is more expensive to render than the [`line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#line) chart type and it is recommended when rendering data items with single numeric value.
-   [`Bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#bar) - is more expensive to render than the [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#column) chart type and it is recommended when rendering data items with OHLC  numeric values.
-   [`Candle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#candle) - is more expensive to render than the [`Bar`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#bar) chart type and it is also recommended when rendering data items with OHLC  numeric values.

### Volume Type

Setting the `VolumeType` option can have the following impact on chart performance:

-   [`line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#line) - is the least expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
-   [`area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#area) - is more expensive to render than the [`line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#line) volume type.
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialcharttype.html#column) - is more expensive to render than the [`area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#area) volume type and it is recommended when rendering volume data of 1-3 stocks.
-   [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartvolumetype.html#none) - does not display the volume pane.

### Marker Type

Setting the [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/markertype.html) option to `none` will decrease the amount of items to render than any other type.

### Legend Visibility

Setting the `IsLegendVisible` option to `false` will increase performance since the legend will not be drawn.

### Zoom Slider Type

Setting the `ZoomSliderType` option to `none` will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Chart Panes

Setting a lot of panes using [`FinancialIndicatorType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialindicatortype.html) and [`FinancialOverlayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialoverlaytype.html) options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### X-Axis Mode

Setting the `XAxisMode` option can have the following impact on chart performance:

-   [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) - is the least expensive x-axis mode to use in the financial chart and it is recommended when rendering of break in data range (e.g. weekends or holidays) is not important.
-   `time` - is more expensive expensive than the [`Ordinal`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/financialchartxaxismode.html#ordinal) to use in the financial chart. It is recommended when rendering of break in data range (e.g. weekends or holidays) is  required.

### Y-Axis Mode

Setting the `YAxisMode` option to `numeric` is recommended for higher performance, as fewer operations are needed than using `PercentChange` mode.

### Annotations

Enabling the Callout Annotations (`calloutsVisible`) or Final Value Annotations (`finalValueAnnotationsVisible`) will decrease performance of the financial chart.

### Axis Visuals

By default, the financial chart is already optimized for the best performance and enabling additional visuals of the chart might decrease performance, for example the following options:

-   `XAxisInterval`
-   `YAxisInterval`
-   `XAxisTitle`
-   `YAxisTitle`
-   `XAxisTick`
-   `YAxisTick`
-   `XAxisMajor`
-   `YAxisMajor`
-   `XAxisMinor`
-   `YAxisMinor`
-   `XAxisLabel`
-   `YAxisLabel`
-   `XAxisStroke`
-   `YAxisStroke`
-   `XAxisStrip`
-   `YAxisStrip`

<div class="divider--half"></div>

### Additional Resources

<div class="divider--half"></div>

-   [Binding High Volume Data](financial-chart-high-volume.md)
-   [Binding Real-Time Data](financial-chart-high-frequency.md)
-   [Binding Multiple Data Sources](financial-chart-multiple-data.md)
