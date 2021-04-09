---
title: Angular Bar Charts and Graphs | Ignite UI for Angular
_description: Angular Bar Charts are among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories. Try for FREE.
_keywords: Angular Charts, Bar Chart, Infragistics
mentionedTypes: ["XamDataChart", "BarSeries", "StackedBarSeries", "Stacked100BarSeries"]
---

# Angular Bar Chart

Angular Bar Charts, Bar Graphs, or Horizontal Bar Charts, are among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars or equal width and differing lengths. They are ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Like a [Column Chart](column-chart.md), or [Column Graph](column-chart.md), where bars are displayed vertically (up and down), the bar chart is rendered like the [column chart](column-chart.md), but with 90 degrees clockwise rotation and a horizontal display (left to right).

## Angular Bar Chart Example

In this example, the bar chart is comparing movie series total world box office revenue versus the highest grossing movie in that series. The Y-Axis, or labels on the left of the chart, are displaying the string-values of the series. The X-Axis, or labels on the bottom of the chart, are displaying the value in billions of U.S. dollars.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources"
           alt="Angular Bar Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Bar Chart Recommendations

### Are Angular Bar Charts right for your project?

Angular Bar Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

-   Grouped Bar Chart
-   Stacked Bar Chart
-   Polar Bar Chart
-   Stacked 100 Bar Chart

### Bar Chart Use Cases

There are several common use cases for choosing a Bar Chart:

-   You need to show trends over time or a numeric value change in a category of data.
-   You need to compare data values of 1 or more data series.
-   You want to show a part-to-whole comparison.
-   You want to show top or bottom percentage of categories.
-   Analyzing multiple data points grouped in sub-categories (Stacked Bar).

These use cases are commonly used for the following scenarios:

-   Sales Management.
-   Inventory Management.
-   Stock Charts.
-   Any String Value Comparing a Numeric Value or Time-Series Value.

### Bar Chart Best Practices:

-   Start you numeric Axis at 0.
-   Use a single color for the bars.
-   Be sure the space separating each bar is 1/2 the width of the bar itself.
-   Be sure ranking or comparing ordered categories (items) are sorted in increasing or decreasing order.
-   Right-align category values on the Y-Axis (left side labels of chart) for readability.

### When Not to Use Bar Chart

-   You have too much data so the Y-Axis can't fit in the space or is not legible.
-   You need a detailed Time-Series analysis  - consider a [Line Chart](line-chart.md) with a Time-Series for this type of data.

### Bar Chart Data Structure:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item.
-   The list must contain at least one data column (string or date time).
-   The list must contain at least one numeric data column.

<div class="divider--half"></div>

## Angular Bar Chart with Single Series

Bar Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-single-source"
           alt="Angular Bar Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## Angular Bar Chart with Multiple Series

The Bar Chart is able to render multiple bars per category for comparison purposes. In this example, the Bar Chart is comparing box office revenue amongst popular movie franchises. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to multiple [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources"
           alt="Angular Bar Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Bar Chart Styling

The Bar Chart can be styled, and allows for the ability to use [annotation values](../features/chart-annotations.md) for each bar, for example, to demonstrate percent comparisons. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) and adding a [`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-styling"
           alt="Angular Bar Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Angular Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart"
           alt="Angular Stacked Bar Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Stacked 100% Bar Chart

The Ignite UI for Angular Stacked 100% Bar Chart is identical to the Angular stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart"
           alt="Angular Stacked 100 Bar Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Charts](area-chart.md)
-   [Column Charts](column-chart.md)
-   [Line Charts](line-chart.md)
-   [Spline Charts](spline-chart.md)
-   [Stacked Charts](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

| Chart Type       | Control Name                                                                                                                                   | API Members                                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bar              | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)                     |
| Stacked Bar      | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)       |
| Stacked 100% Bar | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html) |
| Callout Layer    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxCalloutLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html)               |
