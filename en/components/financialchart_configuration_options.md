---
title: Financial Chart - Configuration Options
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Financial Chart
---

## Configuration Options

The `IgxFinancialChart` control provides many visuals that can be customized, such as the navigation behavior, trendline layers, overlays, legend, chart titles and subtitles.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="financial-chart-trendlines-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-trendlines-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Configuring Navigation

In the `IgxFinancialChart` control, chart navigation is enabled by default. However, you can customize it by setting the following properties:

-   `isHorizontalZoomEnabled` - This specifies if the chart can be horizontally zoomed through user interactions. By default, this property is set to true.
-   `isVerticalZoomEnabled` - This specifies if the chart can be vertically zoomed through user interactions. By default, this property is set to false.
-   `isWindowSyncedToVisibleRange` - If set to true the Y-Axis will automatically resize to the visible data range. By default, this property is set to false.
-   `windowRect` - This is used to retrieve or specify the scroll and zoom state in the igxFinancialChart. The `windowRect` is expressed as a Rectangle with coordinates and sizes between 0 and 1.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isHorizontalZoomEnabled="true"
    isVerticalZoomEnabled="false">
 </igx-financial-chart>
```

### Configuring Price Pane

The price pane is always displayed in the Financial Chart and you can configure it by changing chart type and customizing appearance of its visuals. The following code demonstrates how to set the brushes and thickness of series in the price pane.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartType="Candle"
    brushes="Green, Blue"
    outlines="Green, Blue"
    negativeBrushes="Red"
    negativeOutlines="Red"
    thickness="2">
 </igx-financial-chart>
```

### Configuring Overlays

By default overlays are not displayed on the igxFinancialChart. There are two types of overlays - `BollingerBands` and `PriceChannel`. You can also customize the default settings of the overlays. The following code demonstrates how to set the color, overlay outlines and thickness.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    overlayTypes="BollingerBands"
    overlayBrushes="Red"
    overlayOutlines="Green"
    overlayThickness="2">
 </igx-financial-chart>
```

### Configuring Indicators

By default the indicator panes are not displayed in the Financial Chart. The toolbar allows the end user to select which indicator to display at run time. In order to display the pane, an indicator type must be set, as demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    indicatorTypes="AverageTrueRange,ForceIndex"
    indicatorBrushes="Green, Blue"
    indicatorNegativeBrushes="Red"
    indicatorDisplayTypes="Line"
    indicatorThickness="2">
 </igx-financial-chart>
```

### Configuring Volume Pane

By default volume pane is not displayed in the Financial Chart. However, you can enable this pane at runtime using chart toolbar or in programmatically as it is demonstrated in the following code:

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    volumeType="Column"
    volumeBrushes="Green, Blue"
    volumeOutlines="White"
    volumeThickness="2">
 </igx-financial-chart>
```

### Configuring Trendlines

By default trendlines are not displayed on the igxFinancialChart. When a trendline is displayed, it is the same trendline displayed on all chart panes. You can also customize the default settings of the trendline.

The following code demonstrates how to set the color and thickness of the trendline.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    trendLineType="QuinticFit"
    trendLineThickness="2"
    trendLineBrushes="Green, Blue">
 </igx-financial-chart>
```

### Configuring Titles

You can set title and subtitle that will be displayed between chart's toolbar and the price pane of the Financial Chart. The following code demonstrates how to set the title and subtitle.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    chartTitle="Stock Prices"
    subtitle="Between 2000 and 2015">
 </igx-financial-chart>
```

### Configuring Legend

The legend is not displayed be default. The following code demonstrates how to enable the legend.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isLegendVisible="true">
 </igx-financial-chart>
```
