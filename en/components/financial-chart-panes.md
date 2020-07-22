---
title: Financial Chart | Data Visualization Tools | Ignite UI for Angular | Infragistics | Panes
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information.
_keywords: financial chart, Ignite UI for Angular, infragistics
mentionedTypes: ['FinancialChart', 'FinancialChartYAxisMode']
---

## Chart Panes

The Angular financial chart component has multiple panes to display financial data.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-panes-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-panes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-panes-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

The following panes are available in the Angular financial chart component:

-   Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
-   Indicator Pane - Renders all the financial indicators in a separate chart while the `BollingerBands` and `PriceChannel` overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
-   Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
-   Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Indicator Pane

Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display an indicator pane initially, the [`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes) property must be set to a least one type of indicator, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex">
 </igx-financial-chart>
```

### Volume Pane

The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades.  This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column">
 </igx-financial-chart>
```

### Price Pane

This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to `Auto`. You can override the default setting, as demonstrated in the following code:

```html
<igx-financial-chart
   [dataSource]="data"
   width="850px"
   height="600px"
   chartType="Line">
</igx-financial-chart>
```

Note that is recommended to use line chart type if plotting multiple data sources or if plotting data source with a lot of data points.

### Zoom Pane

This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) to `none` as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```

Note that you should set the [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) option to the same value as the [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Line"
    zoomSliderType="Line">
 </igx-financial-chart>
```

<div class="divider--half"></div>

### Additional Resources

<div class="divider--half"></div>

-   [Chart Performance](financial-chart-performance.md)
