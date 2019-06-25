---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Trendlines
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
---

## Trendlines

The Angular data chart component has support for trendlines, which help to identify a trend in data bound to a series.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

Trendlines in the Angular data chart component are not on by default. In order to set them, you can set the [`TrendLineType`](/angular-apis/typescript/latest/enums/trendlinetype.html) property on the corresponding series that you wish the trendline to show up on. You can modify multiple appearance properties of the trendline such as its brush, period, thickness, and dash array.

Trendlines are supported on all series except for stacked and range series. Below is a list of trendlines that can be used with the series of the data chart:

-   [`None`](/angular-apis/typescript/latest/enums/trendlinetype.html#none)
-   [`CubicFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#cubicfit)
-   [`CumulativeAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#cumulativeaverage)
-   [`ExponentialAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#exponentialaverage)
-   [`ExponentialFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#exponentialfit)
-   [`LinearFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#linearfit)
-   [`LogarithmicFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#logarithmicfit)
-   [`ModifiedAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#modifiedaverage)
-   [`PowerLawFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#powerlawfit)
-   [`QuadraticFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#quadraticfit)
-   [`QuarticFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#quarticfit)
-   [`QuinticFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#quinticfit)
-   [`SimpleAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#simpleaverage)
-   [`WeightedAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#weightedaverage)

The following code snippet demonstrates how to add a trendline to a series in the Angular data chart component:

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
