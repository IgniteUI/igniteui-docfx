---
title: Angular Line Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Line Chart
_keywords: Angular Charts, Line Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
---

# Angular Line Chart

A Line Chart, or Line Graph, is a type of category line graph that shows the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

<div class="sample-container loading" style="height: 400px">
    <iframe></iframe>	    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Line Chart Example"></iframe>
</div>	

<div class="divider--half"></div>

-   Different than a line chart, the area chart fills the area between the X-Axis (bottom axis) and the line representing the data value with color or texture to visually represent volume.
-   The Angular line chart is identical to the Angular spline chart in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

-   Layered Area Chart
-   Stacked Area Chart
-   Stepped Area Chart
-   Stepped Line Chart
-   Polar Area Chart
-   Polar Line Chart
-   Stacked 100 Area Chart

There are several use cases for a Line Chart. When you:

-   Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming and Drill-down
-   Need to compare the trends over time
-   Want to show the difference between 2 or more data series
-   Want to show cumulative part-to-whole comparisons of distinct categories
-   Need to show data trends for one or more categories for comparative analysis
-   Need to visualize detailed time-series data

Line Chart Best Practices:

-   Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate
-   Order time-series data  from left to right
-   Use visual attributes like solid lines to show a series of data

Do not Use a Line Chart When:

-   You have many (more than 7 or 10) series of data. Your goal is to ensure the chart is readable.
-   Time-series data has similar values (data over the same period), it makes overlapped lines impossible to differentiate.

Data Structure:

-   The data source must be an array or a list of data items (for single series)
-   The data source must be an array of arrays or a list of lists (for multiple series)
-   The data source must contain at least one data item
-   All data items must contain at least one data column (string or date time)
-   All data items must contain at least one numeric data column

## Angular Line Chart with Single Series

The Angular Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-single-source' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Line Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Angular Line Chart with Multiple Series

Since the Angular Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Line Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Angular Line Chart Legend

With multiple series, our Angular Line Chart requires more visual indicators for end-users to easily perceive what data is displayed. To improve the experience, we need to add a legend for the multiple series. First, we will add a legend object to our application and then we will set it to the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) property of the Angular `XamCategoryChart`. This gives the benefit for our users to more easily comprehend what data set each line corresponds to.

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Line Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Angular Line Chart with Live Data

The Angular Line Chart component is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the Angular Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Line Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Styling the Angular Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the [`ChartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/charttitle.html) to make it easier to read.

<!-- <div class="sample-container loading" style="height: 500px">
    <iframe></iframe>
</div>
<div class="divider--half"></div> -->

## Additional Resources

-   [Area Chart](chart-types-area.md)
-   [Column Chart](chart-types-column.md)
-   [Financial Chart](chart-types-financial.md)
-   [Scatter Chart](chart-types-scatter.md)
-   [Shape Chart](chart-types-scatter.md#angular-scatter-polygon-chart)
-   [Spline Chart](chart-types-spline.md)
-   [Step Chart](chart-types-step.md)
-   [Sparkline](../sparkline.md)

## API Members

-   `XamCategoryChart`
-   [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html)
-   `ItemsSource`
-   [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html)
