---
title: Angular Bar Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Bar Chart
_keywords: Angular Charts, Bar Chart, Infragistics
mentionedTypes: ["XamDataChart"]
---

# Angular Bar Chart

Angular Bar Charts, Bar Graphs, or Horizontal Bar Charts, are among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by horizontal bars or equal width and differing lengths. They are ideal for showing variations in the value of an item over time. Data is represented using a collection of rectangles that extend from the left to right of the chart towards the values of data points. Like a Column Chart, or Column Graph, where bars are displayed vertically (up and down), the bar chart is rendered like the column chart, but with 90 degrees clockwise rotation and a horizontal display (left to right).

There are several common use cases for choosing a Bar Chart:

-   You need to show trends over time or a numeric value change in a category of data
-   You need to compare data values of 1 or more data series
-   You want to show a part-to-whole comparison
-   You want to show top or bottom percentage of categories
-   Analyzing multiple data points grouped in sub-categories (Stacked Bar)

The Angular Bar Chart includes several variants based on your data or how you want to tell the correct story with your data. These include:

-   Grouped Bar Chart
-   Stacked Bar Chart
-   Polar Bar Chart
-   Stacked 100 Bar Chart

Bar Chart Best Practices:

-   Start you numeric Axis at 0
-   Use a single color for the bars
-   Be sure the space separating each bar is 1/2 the width of the bar itself
-   Be sure ranking or comparing ordered categories (items) are  sorted in increasing or decreasing order
-   Right-align category values on the Y-Axis (left side labels of chart) for readability

Don't Use a Bar Chart When:

-   You have too much data so the Y-Axis can't fit in the space or is not legible
-   You need a Detailed Time-Series analysis  - consider a Line Chart with a Time-Series for this type of data.

Bar Chart Data Structure:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item
-   The list must contain at least one data column (string or date time)
-   The list must contain at least one numeric data column

Common Angular Bar Chart Scenarios:

-   Sales Management
-   Inventory Management
-   Stock Charts
-   Any String Value Comparing a Numeric Value or Time-Series Value

## Angular Bar Chart Example

In this example, the Bar Chart is comparing the total number of Olympic Medals (the Category) won between the USA and Russia from 1996 to 2016. The Y-Axis, or labels on the left of the chart, are displaying the time-series values of Year. The X-Axis, or labels on the bottom of the chart, are displaying the number of medals won. The Bar Chart is paired with a CategoryYAxis and a NumericXAxis.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Bar Chart with Legend"></iframe>
</div>

<div class="divider--half"></div>

## Angular Bar Chart with Single Series

Bar Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points.
In this example, the Bar Chart is comparing percent-based retail shopping data. 

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-single-source' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Bar Chart with Single Source"></iframe>
</div>

<div class="divider--half"></div>

## Angular Bar Chart with Multiple Series

The Bar Chart is able to render multiple columns per category for comparison purposes. In this example, the Bar Chart is comparing box office revenue amongst popular move franchises. 

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Bar Chart with Multiple Sources"></iframe>
</div>

<div class="divider--half"></div>

## Angular Advanced Bar Chart

In this example, the Bar Chart uses annotations to show a callout with the value for each bar.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-bar-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Bar Chart Styling"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stacked Bar Chart

A Stacked Bar Chart, or Stacked Bar Graph, is a type of category chart that is used to compare the composition of different categories of data by displaying different sized fragments in the horizontal bars of the chart. The length of each bar, or stack of fragments, is proportionate to its overall value.

The Stacked Bar Chart differs from the Bar Chart in that the data points representing your data are stacked next to each other horizontally to visually group your data. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the X-Axis, and all negative values are grouped on the negative side of the X-Axis.

### Angular Stacked Bar Chart Example

In this example of an Stacked Bar Chart, we have a Numeric X Axis (bottom labels of the chart) and a Category Y Axis (left labels of the chart).

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-bar-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked Bar Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stacked 100 Bar Chart

The Angular Stacked 100 Bar Chart is identical to the Angular stacked bar chart in all aspects except in their treatment of the values on X-Axis (bottom labels of the chart). Instead of presenting a direct representation of the data, the stacked 100 bar chart presents the data in terms of percent of the sum of all values in a data point.

### Angular Stacked 100 Bar Chart Example

In this example of a Stacked 100 Bar Chart, the Energy Product values are shown as a 100% value of all of the data in the fragments of the horizontal bars.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-bar-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked 100 Bar Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Range Bar Chart

The Ignite UI for Angular range column chart belongs to a group of range charts and is rendered using two lines with the area between the lines filled in. This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the y-axis and categories are displayed on the X-Axis.

### Angular Range Bar Chart Example

In this Range Bar Chart example, weather data variance between high and low temperatures by date is shown.

<!-- <div class="sample-container loading" style="height: 500px">
    <iframe></iframe>
</div>
<div class="divider--half"></div> -->

## Styling the Angular Bar Chart

Annotations can be added to the Bar Chart. The following example demonstrates a percent comparison between popular online retail shopping sites.

<!-- <div class="sample-container loading" style="height: 500px">
    <iframe></iframe>
</div>
<div class="divider--half"></div> -->

## Additional Resources

-   [Column Chart](chart-types-column.md)

## API Members

<!-- TODO list API links used in this topic -->
