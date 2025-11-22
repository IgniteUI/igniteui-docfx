---
title: Angular Chart Highlighting | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Highlighting
_keywords: Angular Charts, Highlighting, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
---

## Angular Chart Highlighting Example

The following example demonstrates the different highlighting options that are available on the Angular chart.

<code-view style="height: 500px" alt="Angular Highlighting Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/annotations-highlighting"
                                                 github-src="charts/category-chart/annotations-highlighting">
</code-view>


<div class="divider--half"></div>

# Angular Chart Highlighting Modes & Behaviors

All Angular Charts support a variety of highlighting options. [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode) can be set to brighten or fade when the mouse is hovering over a series/data item rendered in the plot area. [`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior) can be set to directly over or the nearest data item to trigger the highlighting effect. Highlighting modes and behaviors is supported by the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) controls and they have the same API for using the highlighting feature.

The following example demonstrates the [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode) Angular chart.

<code-view style="height: 500px" alt="Angular Highlighting Mode Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/highlighting-mode"
                                                 github-src="charts/category-chart/highlighting-mode">
</code-view>


The following example demonstrates the [`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior) Angular chart.

<code-view style="height: 500px" alt="Angular Highlighting Mode Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/highlighting-behavior"
                                                 github-src="charts/category-chart/highlighting-behavior">
</code-view>


# Angular Chart Legend Highlighting

All Angular Charts support legend highlighting. [`legendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#legendHighlightingMode) can enabled so that when mouse is hovering over a legend marker item then the rendered series will highlight in the plot area. Legend highlighting is supported by the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) controls and they have the same API for using the highlighting feature.

The following example demonstrates the legend series highlighting Angular chart.

<code-view style="height: 500px" alt="Angular Highlighting Mode Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/legend-highlighting"
                                                 github-src="charts/category-chart/legend-highlighting">
</code-view>


## Highlight Layers

The Ignite UI for Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) can enable three types of highlighting when hovering over data items.

1.  Series Highlighting will highlight the single data point represented by a marker or column when the pointer is positioned over it. This is enabled by setting the [`isSeriesHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#isSeriesHighlightingEnabled) property to true.

2.  Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position. This is enabled by setting the [`isItemHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isItemHighlightingEnabled) property to true.

3.  Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position. This is enabled by setting the [`isCategoryHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isCategoryHighlightingEnabled) property to true.

The following example demonstrates the different highlighting layers that are available on the Angular chart.

<code-view style="height: 500px" alt="Angular Highlighting Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/column-chart-with-highlighting"
                                                 github-src="charts/category-chart/column-chart-with-highlighting">
</code-view>


## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Animations](chart-animations.md)
- [Chart Annotations](chart-annotations.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode)
- [`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior)
- `LegendHighlightingBehavior`
- [`isCategoryHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isCategoryHighlightingEnabled)
- [`isItemHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isItemHighlightingEnabled)
- [`isSeriesHighlightingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#isSeriesHighlightingEnabled)
- [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
- [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
- [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
