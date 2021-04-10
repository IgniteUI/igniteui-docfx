---
title: Angular Step Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Step Chart
_keywords: Angular Charts, Step Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ChartType"]
---

# Angular Step Charts

Angular Step Charts is to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. For Step Area Chart, the area below lines are filled in. Values are represented on the y-axis and categories are displayed on the x-axis. This emphasizes the amount of change over a period of time or compares multiple items.

## Angular Step Area Chart

You can create a Step Chart in the `XamCategoryChart` control by binding your data to `ItemsSource` property and setting [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `AreaLine` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="Angular Step Line Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Step Line Chart

You can create a Step Chart in the `XamCategoryChart` control by binding your data to `ItemsSource` property and setting [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepLine` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="Angular Step Line Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Step Chart with Single Series

This Step Chart provides example on how to bind single data source that is showing the change of value over time for the amount of renewable electricity produced for several years in Europe.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-single-source"
           alt="Angular Step Line Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## Angular Step Chart with Multiple Series

You can also bind multiple data sources in the Step Chart. It is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions, as we have shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="Angular Step Line Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Step Chart Styling

If you need a Step Chart with more features such as composite other series, you can configure the markers, marker brushes, marker outlines, series brushes and series outlines as demonstrated below.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepLine`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-styling"
           alt="Angular Styling Step Line Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Chart](area-chart.md)
-   [Line Chart](line-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

-   `XamCategoryChart`
-   [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html)
-   `StepArea`
-   `StepLine`
