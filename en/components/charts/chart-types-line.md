---
title: Angular Line Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Line Chart
_keywords: Angular Charts, Line Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
---

# Angular Line Chart

Angular Line Chart, or Line Graph, is a type of category line graph that shows the continuous data values represented by points connected by straight line segments of one or more quantities over a period of time. It’s often used to show trends and perform comparative analysis. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. You can include one or more data sets to compare, which would render as multiple lines in the chart.

With multiple series, our Angular Line Chart requires more visual indicators for end-users to easily perceive what data is displayed. To improve the experience, we need to add a legend for the multiple series. First, we will add a legend object to our application and then we will set it to the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) property of the Angular `XamCategoryChart`. This gives the benefit for our users to more easily comprehend what data set each line corresponds to.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Line Chart With Legend"></iframe>
</div>

<div class="divider--half"></div>

In order to use the Angular Line Chart, the following modules are first required to be added to your application:

<!-- Angular -->

```ts
// app.module.ts
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxCategoryChartModule,
        // ...
    ]
})
export class AppModule {}
```

<!-- end: Angular -->

-   Different than a line chart, the area chart fills the area between the X-Axis (bottom axis) and the line representing the data value with color or texture to visually represent volume.
-   The Angular line chart is identical to the Angular spline chart in all aspects except that the line connecting data points does not have spline interpolation and smoothing for improved presentation of data.

A Line Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

-   Layered Line Chart
-   Stacked Line Chart
-   Stepped Line Chart
-   Polar Line Chart
-   Stacked 100 Line Chart

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

The following code snippet demonstrates a sample data source that can be used to create a Line Chart:

```ts
public initData() {
    this.data = [
        { Year: "2009", Europe: 31, China: 21,  USA: 19 },
        { Year: "2010", Europe: 43, China: 26,  USA: 24 },
        { Year: "2011", Europe: 66, China: 29,  USA: 28 },
        { Year: "2012", Europe: 69, China: 32,  USA: 26 },
        { Year: "2013", Europe: 58, China: 47,  USA: 38 },
        { Year: "2014", Europe: 40, China: 46,  USA: 31 },
        { Year: "2015", Europe: 78, China: 50,  USA: 19 },
        { Year: "2016", Europe: 13, China: 90,  USA: 52 },
        { Year: "2017", Europe: 78, China: 132, USA: 50 },
        { Year: "2018", Europe: 40, China: 134, USA: 34 },
        { Year: "2019", Europe: 80, China: 96,  USA: 38 },
    ];
}
```

## Angular Line Chart with Single Series

The Angular Line Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period, as we have shown in the example below.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-single-source" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-single-source' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="Angular Line Chart with Single Source"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-line-chart-single-source-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Angular Line Chart with Multiple Series

Since the Angular Line Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the line chart will automatically update to fit the additional data.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-multiple-sources" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="Angular Line Chart with Multiple Sources"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-line-chart-multiple-sources'-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Angular Line Chart with Live Data

The Angular Line Chart component is capable of handling high volumes of data, ranging into millions of data points, and updating them every few milliseconds as demonstrated in the following demo.

In this example, we are streaming live data into the Angular Line Chart at an interval of your choosing. You can set the data points from 5,000 to 1 million and update the chart to optimize the scale based on the device you are rendering the chart on.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-high-frequency" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="Angular Line Chart Live Data Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Styling the Angular Line Chart

Once our chart is set up, we may want to make some further styling customizations such as change the line colors, change the legend font family, and/or increase the size of the axis labels to make it easier to read.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-styling" data-src='{environment:dvDemosBaseUrl}/charts/category-chart-line-chart-styling' width="100%" height="100%" seamless frameBorder="0" class="lazyload" alt="Angular Line Chart Styling"></iframe>
</div>
   <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="category-chart-line-chart-styling-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


<div class="divider--half"></div>

<!-- ## Additional Resources

- [Series Animations](chart-features-animations.md)
- [Series Annotations](chart-features-annotations.md)
- [Series Highlighting](chart-features-highlighting.md)
- [Series Markers](chart-features-markers.md)
- [Series Tooltips](chart-features-tooltips.md)
- [Series Trendlines](chart-features-trendlines.md) -->

<!-- TODO list API links used in this topic 
## API Members
- `XamCategoryChart`
- `ChartType`
- `ItemsSource`
- `Legend`
-->
