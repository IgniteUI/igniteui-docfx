---
title: Angular Step Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Step Chart
_keywords: Angular Charts, Step Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "ChartType"]
---

# Angular Step Chart

Angular Step Chart belongs to a group of Category Series and it is rendered using a collection of points connected by continuous vertical and horizontal lines. For Step Area Chart, the area below lines are filled in. Values are represented on the y-axis and categories are displayed on the x-axis. This emphasizes the amount of change over a period of time or compares multiple items.

## Angular Step Chart Example

In the following example, the step chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

You can create a Step Chart in the `XamCategoryChart` control by binding your data to `ItemsSource` property and setting [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepLine` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="Angular Step Line Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Step Chart with Single Series

In this example, the Step Chart is showing the change of value over time for the amount of renewable electricity produced for several years in Europe.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepLine`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-single-source"
           alt="Angular Step Line Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## Angular Step Chart with Multiple Series

The Step Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions, as we have shown in the example below.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepLine`, as shown in the example below:

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

| Chart Type | Control Name       | API Members                                                                                                                       |
| ---------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Step       | `XamCategoryChart` | [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) = `StepLine` |
