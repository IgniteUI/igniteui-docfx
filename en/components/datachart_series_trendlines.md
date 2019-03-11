---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Trendlines

The `IgxDataChart` control has support for trendlines, which help to identify a trend in data bound to a series.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

Trendlines in the `IgxDataChart` control are not on by default. In order to set them, you can set the `TrendLineType` property on the corresponding series that you wish the trendline to show up on. You can modify multiple appearance properties of the trendline such as its brush, period, thickness, and dash array.

Trendlines are supported on all series except for stacked and range series. Below is a list of trendlines that can be used with the series of the chart:

-   `None`
-   `CubicFit`
-   `CumulativeAverage`
-   `ExponentialAverage`
-   `ExponentialFit`
-   `LinearFit`
-   `LogarithmicFit`
-   `ModifiedAverage`
-   `PowerLawFit`
-   `QuadraticFit`
-   `QuarticFit`
-   `QuinticFit`
-   `SimpleAverage`
-   `WeightedAverage`

The following code snippet demonstrates how to add a trendline to a series in the `IgxDataChart` control:

```html
<igx-data-chart  [dataSource]="data"
    height="400px"
    width="100%">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-financial-price-series
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        highMemberPath="High"
        lowMemberPath="Low"
        closeMemberPath="Close"
        openMemberPath="Open"
        volumeMemberPath="Volume"
        trendLineType="CubicFit">
    </igx-financial-price-series>

</igx-data-chart>
```
