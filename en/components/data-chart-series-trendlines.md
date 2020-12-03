---
title: Angular Data Chart | Data Visualization Tools | Trendline | Infragistics
_description: Use the trendlines of the Infragistics' Angular charts to identify a trend in data bound to a series. Check out the Ignite UI for Angular graph's trendlines feature!
_keywords: Angular charts, data chart, trendlines, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'AreaSeries', 'BarSeries','ColumnSeries', 'PointSeries','SplineSeries','StepAreaSeries','WaterfallSeries']

---

# Angular Trendlines

The Angular data chart component has support for trendlines, which help to identify a trend in data bound to a series.

## Angular Trendlines Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Trendlines Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

Trendlines in the Angular data chart component are not on by default. In order to set them, you can set the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#trendlinetype) property on the corresponding series that you wish the trendline to show up on. You can modify multiple appearance properties of the trendline such as its brush, period, thickness, and dash array.

Trendlines are supported on all series except for stacked and range series. Below is a list of trendlines that can be used with the series of the data chart:

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
