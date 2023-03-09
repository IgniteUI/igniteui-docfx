---
title: Angular Point Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Point Chart
_keywords: Angular Charts, Point Chart, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Legend", 'Series']
namespace: Infragistics.Controls.Charts
---

# Angular Point Chart

The Ignite UI for Angular Point Chart renders a collection of points. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). These charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

## Angular Point Chart Example

You can create the Angular Point Chart in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control by binding your data to `ItemsSource` property and setting [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) property to **Point** enum, as shown in the example below.

<code-view style="height: 600px" alt="Angular Point Chart Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/point-chart-multiple-sources"
                                        github-src="charts/category-chart/point-chart-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular Point Chart with Single Series

In the following example, the Angular Point Chart plots a single data source by automatically selecting numeric data column for y-axis and non-numeric data column for x-axis.

<code-view style="height: 600px" alt="Angular Point Chart with Single Series"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/point-chart-single-source"
                                        github-src="charts/category-chart/point-chart-single-source">
</code-view>


<div class="divider--half"></div>

## Angular Point Chart with Multiple Series

Since the Angular Point Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the point chart will automatically update to fit the additional data.

<code-view style="height: 600px" alt="Angular Point Chart with Multiple Series"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/point-chart-multiple-sources"
                                        github-src="charts/category-chart/point-chart-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular Point Chart Styling

Once the Angular Point Chart is set up, we may want to make some further styling customizations such as change the markers and its outlines, brushes and thickness.

<code-view style="height: 600px" alt="Angular Point Chart Styling"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/point-chart-styling"
                                        github-src="charts/category-chart/point-chart-styling">
</code-view>


<div class="divider--half"></div>

## Advanced Types of Point Charts

You can create more advanced types of Angular Point Charts using the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control instead of [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control by following these topics:

*   [Scatter Bubble Chart](bubble-chart.md)
*   [Scatter Marker Chart](scatter-chart.md#angular-scatter-marker-chart)
*   [Scatter HD Chart](scatter-chart.md#angular-scatter-high-density-chart)
*   [Polar Marker Chart](polar-chart.md#angular-polar-marker-chart)

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Performance](../features/chart-performance.md)
*   [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
*   [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype)
*   [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markertypes)
*   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlines)
*   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerbrushes)
*   [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerthickness)
