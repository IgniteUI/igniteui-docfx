---
title: Angular Spline Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Spline Chart
_keywords: Angular Charts, Spline Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart", "SplineSeries", "StackedSplineSeries", "Stacked100SplineSeries"]
---

# Angular Spline Charts

Angular Spline Charts belong to a group of Category Series that render as a collection of points connected by smooth curves of spline. Values are represented on the y-axis and categories are displayed on the x-axis. Spline Charts emphasize the amount of change over a period of time or compares multiple items as well as the relationship of parts to a whole by displaying the total of the plotted values. Spline Charts are identical to [Line Charts](line-chart.md) in all aspects except that line connecting data points has spline interpolation and smoothing for improved presentation of data.

## Angular Category Spline Chart

The following example shows how to create Category Line Chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to Spline enum.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           alt="Angular Spline Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Spline Chart with Single Series

The Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period for Europe, as shown in the example below.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `Spline`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-single-source"
           alt="Angular Spline Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## Angular Spline Chart with Multiple Series

Since the Spline Chart allows you to combine multiple series and compare or see how they change over time. All we need to do is bind to a data source containing the data for China and the USA, and the chart will automatically update to fit the additional data.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `Spline`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-multiple-sources"
           alt="Angular Spline Chart with Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Angular Spline Chart Styling

If you need a Spline Chart with more features such as composite other series, you can configure the markers, marker brushes, marker outlines, series brushes and series outlines as demonstrated below.

You can create this type of chart in the `XamCategoryChart` control by binding your data and setting the [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `Spline`, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-spline-styling"
           alt="Angular Spline Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Advanced Types of Spline Charts

The following sections explain more advanced types of Angular Spline Charts that can be created using the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control instead of `XamCategoryChart` control with simplified API.

## Angular Stacked Spline Chart

The Stacked Spline Chart is often used to show the change of value over time such as the amount of renewable electricity produced for several years between regions, as we have shown in the example below.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-chart"
           alt="Angular Stacked Spline Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Stacked 100% Spline Chart

The Stacked 100% Spline Chart is identical to the Stacked Spline Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100% Spline Chart presents the data in terms of percent of the sum of all values in a data point. The example below shows a study made for online shopping traffic by departments via tablet, phone and personal computers.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-chart"
           alt="Angular Stacked 100 Spline Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Charts](area-chart.md)
-   [Line Charts](spline-chart.md)
-   [Polar Charts](polar-chart.md)
-   [Radial Charts](radial-chart.md)
-   [Stacked Charts](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

| Chart Type          | Control Name                                                                                                                                   | API Members                                                                                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Spline              | `XamCategoryChart`                                                                                                                             | [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) = `Spline`                                          |
| Stacked Spline      | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStackedSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedsplineseriescomponent.html)       |
| Stacked 100% Spline | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxStacked100SplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100splineseriescomponent.html) |
