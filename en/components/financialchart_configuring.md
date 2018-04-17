---
title: Configuring Financial Chart
_description: The Ignite UI for Angular Financial Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing financial data a breeze.
_keywords: Ignite UI for Angular, Data Visualization, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Financial Chart component, Angular Chart controls, Angular Financial Chart controls, Data Visualization
---
## Configuring Financial Chart 

There are many areas of the financial chart that can be customized, such as the navigation behavior, trendline layers,  overlays, chart titles and subtitles.
This page will walk you through with code samples the different properties that required to be set in order to achieve a customized financial chart.

### Configuring Financial Chart Demo

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-configuring-iframe" src='{environment:demosBaseUrl}/financial-chart-configuring' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-configuring-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Configuring Navigations
In the igxFinancialChart control, chart navigation is enabled by default. However, you can customize it by setting the following properties:

- IsHorizontalZoomEnabled - This specifies if the chart can be horizontally zoomed through user interactions. By default, this property is set to true.
- IsVerticalZoomEnabled - This specifies if the chart can be vertically zoomed through user interactions. By default, this property is set to false.
- IsWindowSyncedToVisibleRange - If set to true the Y-Axis will automatically resize to the visible data range. By default, this property is set to false.
- WindowRect - This is used to retrieve or specify the scroll and zoom state in the igxFinancialChart. WindowRect is expressed as a Rectangle with coordinates and sizes between 0 and 1.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    isHorizontalZoomEnabled="false"
    isVerticalZoomEnabled="true">
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
    trendLineBrushes="Green"
    trendLineThickness="2">
 </igx-financial-chart>
```

### Configuring Overlays
By default overlays are not displayed on the igxFinancialChart. There are two types of overlays - BollingerBands and PriceChannel. You can also customize the default settings of the overlays.

The following code demonstrates how to set the color, overlay outlines and thickness.

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
