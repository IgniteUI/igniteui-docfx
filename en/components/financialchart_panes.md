---
title: Financial Chart Panes
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## Financial Chart Panes

The `igxFinancialChart` control has multiple panes to display financial data.

* Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
* Indicator Pane - Renders all the financial indicators in a separate chart while the `BollingerBands` and `PriceChannel` overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
* Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
* Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Financial Indicator Pane Demo
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-indicator-pane-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-indicator-pane-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-indicator-pane-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Indicator Pane
Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display the pane, an indicator type must be set, as demonstrated in the following code:

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
This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to `auto`. You can override the default setting, as demonstrated in the following code:

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
This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the `zoomSliderType` to `none` as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```

Note that you should set the `zoomSliderType` option to the same value as the `chartType` option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

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

* [Chart Performance](financialchart_performance.html)