---
title: Financial Chart Panes
_description: The Ignite UI for Angular Financial Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing financial data a breeze.
_keywords: Ignite UI for Angular, Data Visualization, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Financial Chart component, Angular Chart controls, Angular Financial Chart controls
---
## Financial Chart Panes 

The Financial Chart has multiple panes to display financial data. 

* Indicator Pane - Renders all the financial indicators in a separate chart while the BollingerBands and PriceChannel overlays are rendered in the Price Pane because they share the same values range on Y-Axis. 
* Volume Pane - Renders stocks volumes using Column, Line, and Area chart types.
* Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
* Zoom Pane - Controls the zoom of all the panes.

### Financial Chart Panes Demo
<div class="sample-container" style="height: 650px">
    <iframe id="financial-chart-panes-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-panes-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-panes-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
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
    indicatorTypes="AverageTrueRange">
 </igx-financial-chart>
```
<div class="divider"></div>

### Volume Pane
The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades.  This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="column">
 </igx-financial-chart>
```
<div class="divider"></div>

### Price Pane
This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to `auto`. You can override the default setting, as demonstrated in the following code:

 ```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="line">
 </igx-financial-chart>
```

### Zoom Pane
This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the 'zoomSliderType' to 'none' as demonstrated in the following code:
```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    zoomSliderType="none">
 </igx-financial-chart>
```