---
title: Financial Chart - Performance
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Financial Chart
---

## Performance

The `IgxFinancialChart` control has very good performance of rendering a lot of data points. The following demo binds 20 years of data, with 1 day intervals and displays the stock prices using candle sticks.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="financial-chart-performance-iframe" src='{environment:demosBaseUrl}/financial-chart-performance' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-performance-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

The following code demonstrates how to bind the financial chart to high volumes of data.

```typescript
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
-   When Angular is in Debug mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real would performance always make sure to serve or build with `--prod` version.

Also, you should consider the following features of the financial chart when optimizing performance in your application.

### Chart Type

Setting the `chartType` option can have the following impact on chart performance:

-   `line` - is the least expensive chart type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
-   `column` - is more expensive to render than the `line` chart type and it is recommended when rendering data items with single numeric value.
-   `bar` - is more expensive to render than the `column` chart type and it is recommended when rendering data items with OHLC  numeric values.
-   `candle` - is more expensive to render than the `bar` chart type and it is also recommended when rendering data items with OHLC  numeric values.

### Volume Type

Setting the `volumeType` option can have the following impact on chart performance:

-   `line` - is the least expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
-   `area` - is more expensive to render than the `line` volume type.
-   `column` - is more expensive to render than the `area` volume type and it is recommended when rendering volume data of 1-3 stocks.

### Marker Type

Setting the `markerTypes` option to `none` will decrease the amount of items to render than any other type.

### Legend Visibility

Setting the `isLegendVisible` option to `false` will increase performance since the legend will not be drawn.

### Zoom Slider Type

Setting the `zoomSliderType` option to `none` will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Chart Panes

Setting a lot of panes using `inidicatorTypes` and `overlayTypes` options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### X-Axis Mode

Setting the `xAxisMode` option can have the following impact on chart performance:

-   `ordinal` - is the least expensive x-axis mode to use in the financial chart and it is recommended when rendering of break in data range (e.g. weekends or holidays) is not important.
-   `time` - is more expensive expensive than the `ordinal` to use in the financial chart. It is recommended when rendering of break in data range (e.g. weekends or holidays) is  required.

### Y-Axis Mode

Setting the `yAxisMode` option to `numeric` is recommended for higher performance, as fewer operations are needed than using `percentChange` mode.

### Annotations

Enabling the Callout Annotations (`calloutsVisible`) or Final Value Annotations (`finalValueAnnotationsVisible`) will decrease performance of the financial chart.

### Axis Visuals

By default, the financial chart is already optimized for the best performance and enabling additional visuals of the chart might decrease performance, for example the following options:

-   `xAxisInterval`
-   `yAxisInterval`
-   `xAxisTitle*`
-   `yAxisTitle*`
-   `xAxisTick*`
-   `yAxisTick*`
-   `xAxisMajor*`
-   `yAxisMajor*`
-   `xAxisMinor*`
-   `yAxisMinor*`
-   `xAxisLabel*`
-   `yAxisLabel*`
-   `xAxisStroke*`
-   `yAxisStroke*`
-   `xAxisStrip*`
-   `yAxisStrip*`

<div class="divider--half"></div>

### Additional Resources

<div class="divider--half"></div>

-   [Binding High Volume Data](financialchart_high_volume_data.md)
-   [Binding Real-Time Data](financialchart_real_time_data.md)
-   [Binding Multiple Data Sources](financialchart_binding_to_multiple_data.md)
