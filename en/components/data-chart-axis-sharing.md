---
title: Angular Data Chart | Data Visualization Tools | Axis Sharing | Infragistics
_description: Infragistics' Angular charts control allows for muliple axes to be displayed in the same plot area. Create a Ignite UI for Angular graph with multiple axis!
_keywords: Angular charts, data chart, axis sharing, Ignite UI for Angular, Infragistics, multiple axes
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
---

# Angular Axis Sharing and Multiple Axes

 You can share and add multiple axes in the same plot area of the Angular data chart component. For all axes, you can specify locations in relationship to chart plot area. It a common scenario to use multiple axes when you want to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

## Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-sharing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Code Example

This code demonstrates how to create Ignite UI for Angular data chart with two [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) and one [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) that will be shared between two series.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="sharedXAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="rightYAxis" labelLocation="OutsideRight"></igx-numeric-y-axis>
    <igx-numeric-y-axis  name="leftYAxis" labelLocation="OutsideLeft"></igx-numeric-y-axis>

    <igx-financial-price-series
    name="series2"
    xAxisName="sharedXAxis"
    yAxisName="rightYAxis"
    displayType="Candlestick"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-money-flow-index-indicator
    name="series3"
    xAxisName="sharedXAxis"
    yAxisName="leftYAxis"
    displayType="Column"
    lowMemberPath="Low"
    highMemberPath="High"
    openMemberPath="Open"
    closeMemberPath="Close"
    volumeMemberPath="Volume">
    </igx-money-flow-index-indicator>

 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Series Types](data-chart-series-types.md)
