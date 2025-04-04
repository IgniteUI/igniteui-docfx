---
title: Angular Step Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Step Chart
_keywords: Angular Charts, Step Chart, Step Area Chart, Step Line Chart, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "CategoryChartType", "Series", "CategoryChartType"]
namespace: Infragistics.Controls.Charts
---

# Angular Step Chart

The Ignite UI for Angular Step Chart belongs to a group of category charts that render as a collection of points connected by continuous vertical and horizontal lines. Values are represented on the y-axis and categories are displayed on the x-axis. Step Chart emphasizes the amount of change over a period of time or compares multiple items.

## Angular Step Area Chart

You can create Angular Step Area Chart in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by setting [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`StepArea`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#StepArea) enum, as shown in the example below.

<code-view style="height: 600px" alt="Angular Step Area Chart Multiple Sources"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/step-area-multiple-sources"
                                                 github-src="charts/category-chart/step-area-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular Step Line Chart

The Angular Step Line Chart is very similar to Step Area Chart, except that the area below lines are filled in.

You can create Step Line Chart in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control by binding your data and setting [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) property to [`StepLine`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#StepLine) value, as shown in the example below.

<code-view style="height: 600px" alt="Angular Step Line Chart Multiple Sources"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/step-line-multiple-sources"
                                                 github-src="charts/category-chart/step-line-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular Step Chart Styling

If you need Step Charts with more features such as composite other series, you can configure the [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerTypes), [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes), [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines), lines' [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#brushes), and lines' [`outlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#outlines) properties on the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control as demonstrated below.

<code-view style="height: 600px" alt="Angular Styling Step Line Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/step-line-styling"
                                                 github-src="charts/category-chart/step-line-styling">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

*   [Area Chart](area-chart.md)
*   [Line Chart](line-chart.md)
*   [Chart Markers](../features/chart-markers.md)

## API References

The following table lists API members mentioned in the above sections:

*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType)
*   [`StepArea`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#StepArea)
*   [`StepLine`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.categorycharttype.html#StepLine)
*   [`brushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#brushes)
*   [`outlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#outlines)
*   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes)
*   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines)
*   [`markerTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerTypes)
