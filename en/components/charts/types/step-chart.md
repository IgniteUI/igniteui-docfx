---
title: Angular Step Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Step Chart
_keywords: Angular Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "ChartType"]
---

# Angular Step Chart

The Ignite UI for Angular Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. Values are represented on the y-axis and categories are displayed on the x-axis. Step Chart emphasizes the amount of change over a period of time or compares multiple items.

## Angular Step Area Chart

You can create Angular Step Area Chart in the `XamCategoryChart` control by setting [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepArea` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources"
           alt="Angular Step Area Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Step Line Chart

The Angular Step Line Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create Step Line Chart in the `XamCategoryChart` control by binding your data and setting [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `StepLine` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-step-line-multiple-sources"
           alt="Angular Step Line Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Step Chart Styling

If you need Step Charts with more features such as composite other series, you can configure the `MarkerTypes`, `MarkerBrushes`, `MarkerOutlines`, lines' `Brushes`, and lines' `Outlines` properties on the `XamCategoryChart` control as demonstrated below.

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
-   [Chart Markers](../features/chart-markers.md)

## API Members

The following table lists API members mentioned in the above sections:

-   `XamCategoryChart`
-   [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html)
-   `StepArea`
-   `StepLine`
-   `Brushes`
-   `Outlines`
-   `MarkerBrushes`
-   `MarkerOutlines`
-   `MarkerTypes`
