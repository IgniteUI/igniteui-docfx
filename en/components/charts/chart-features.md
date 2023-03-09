---
title: Angular Chart Features | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Features
_keywords: Angular Charts, Features, Infragistics
mentionedTypes: ["FinancialChart", "CategoryChart", "XamDataChart"]
---

# Angular Chart Features

The Ignite UI for Angular Charts allow you to display many different features to portray the full data story to be told with your chart. Each of these features are fully customizable, and can be styled to suit your design needs - allowing you full control. Interactions such as highlighting and annotations allow you to call out important data details allowing for a deeper data analysis within your chart.

The Angular Charts offer the following chart features:

## Axis

Modify or customize all aspects of both the X-Axis and Y-Axis using the different axis properties. You can display gridlines, customize the style of tickmarks, change axis titles, and even modify axis locations and crossing values. You can learn more about customizations of the Angular chart's [Axis Gridlines](features/chart-axis-gridlines.md), [Axis Layouts](features/chart-axis-layouts.md), and [Axis Options](features/chart-axis-options.md) topic.

<code-view style="height: 500px" alt="Angular Axis Crossing Axes Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/axis-crossing"
                                        github-src="charts/data-chart/axis-crossing">
</code-view>


<div class="divider--half"></div>

## Annotations

These additional layers are on top of the chart which are mouse / touch dependent. Used individually or combined, they provide powerful interactions that help to highlight certain values within the chart. You can learn more about this feature in the [Chart Annotations](features/chart-annotations.md) topic.

<code-view style="height: 500px" alt="Angular Annotations Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/line-chart-with-annotations"
                                        github-src="charts/category-chart/line-chart-with-annotations">
</code-view>


<div class="divider--half"></div>

## Animations

Animate your chart as it loads a new data source by enabling animations. These are customizable by setting different types of animations and the speed at which those animations take place. You can learn more about this feature in the [Chart Animations](features/chart-animations.md) topic.

<code-view style="height: 500px" alt="Angular Configuration Options Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/line-chart-with-animations"
                                        github-src="charts/category-chart/line-chart-with-animations">
</code-view>


<div class="divider--half"></div>

## Highlighting

Bring focus to visuals such as lines, columns, or markers by highlighting them as the mouse hovers over the data items. This features is enabled on all chart types. You can learn more about this feature in the [Chart Highlighting](features/chart-highlighting.md) topic.

<code-view style="height: 500px" alt="Angular Highlighting Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/column-chart-with-highlighting"
                                        github-src="charts/category-chart/column-chart-with-highlighting">
</code-view>


<div class="divider--half"></div>

## Markers

Identify data points quickly, even if the value falls between major gridlines with the use of markers on the chart series. These are fully customizable in style, color, and shape. You can learn more about this feature in the [Chart Markers](features/chart-markers.md) topic.

<code-view style="height: 500px" alt="Angular Configuration Options Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/marker-options"
                                        github-src="charts/category-chart/marker-options">
</code-view>


<div class="divider--half"></div>

## Navigation

You can navigate the chart by zooming and panning with the mouse, keyboard, and touch interactions. You can learn more about this feature in the [Chart Navigation](features/chart-navigation.md) topic.

<code-view style="height: 500px" alt="Angular Navigation Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/chart-navigation"
                                        github-src="charts/data-chart/chart-navigation">
</code-view>


<div class="divider--half"></div>

## Overlays

Overlays allows you to annotate important values and thresholds by plotting horizontal or vertical lines in charts. You can learn more about this feature in the [Chart Overlays](features/chart-overlays.md) topic.

<code-view style="height: 600px" alt="Angular Value Overlay Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/series-value-overlay"
                                        github-src="charts/data-chart/series-value-overlay">
</code-view>


<div class="divider--half"></div>

## Performance

Angular charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the charts and they should be considered when optimizing performance in your application. You can learn more about this feature in the [Chart Performance](features/chart-performance.md) topic.

<code-view style="height: 600px" alt="Angular Chart Performance Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/high-volume"
                                        github-src="charts/category-chart/high-volume">
</code-view>


<div class="divider--half"></div>

## Tooltips

Display all information relevant to the particular series type via Tooltips. There are different tooltips that can be enabled, such as Item-level and Category-level tooltips. You can learn more about this feature in the [Chart Tooltips](features/chart-tooltips.md) topic.

<code-view style="height: 500px" alt="Angular Tooltip Types Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/column-chart-with-tooltips"
                                        github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>


<div class="divider--half"></div>

## Trendlines

Use trendlines to identify a trend or find patterns in your data. There are many different trendlines supported by the Angular chart, such as CubicFit and LinearFit. You can learn more about this feature in the [Chart Trendlines](features/chart-trendlines.md) topic.

<code-view style="height: 500px" alt="Angular Trendlines Example"
  data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/trendlines"
                                        github-src="charts/financial-chart/trendlines">
</code-view>


<div class="divider--half"></div>

## API References

*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
*   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
