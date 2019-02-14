---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Axis Sharing and Multiple Axes

 You can share and add multiple axes in the same plot area of the `IgxDataChart` control. For all axes, you can specify [Axis Locations](datachart_axis_sharing.md) in relationship to chart plot area. It a common scenario to use multiple axes when you want to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

### Demo

<div class="sample-container" style="height: 300px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:demosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-axis-sharing-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Example

This code demonstrates how to create data chart with two `IgxNumericYAxisComponent` and one `IgxCategoryXAxisComponent` that will be shared between two series.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="xAxisShared" label="Date"/>
    <igx-numeric-y-axis  name="yAxisRight" labelLocation="OutsideRight" />
    <igx-numeric-y-axis  name="yAxisLeft" labelLocation="OutsideLeft" />

    <igx-financial-price-series
    name="series2"
    xAxisName="xAxisShared"
    yAxisName="yAxisRight"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

    <igx-money-flow-index-indicator
    name="series3"
    xAxisName="xAxisShared"
    yAxisName="yAxisLeft"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume" />

 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Locations](datachart_axis_locations.md)
-   [Series Types](datachart_series_types.md)
