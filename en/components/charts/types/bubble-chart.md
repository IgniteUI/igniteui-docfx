---
title: Angular Bubble Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Bubble Chart
_keywords: Angular Charts, Bubble Chart, Infragistics
mentionedTypes: ["Series", "BubbleSeries", "ScatterSeries", "MarkerType"]
namespace: Infragistics.Controls.Charts
---

# Angular Bubble Chart

The Ignite UI for Angular Bubble Chart is a type of [Scatter Chart](scatter-chart.md) that show markers with variable scaling to represent the relationship among items in several distinct series of data or to plot data items using x and y coordinates. These coordinates of the data point are determined by two numeric data columns. The Bubble Chart draws attention to uneven intervals or clusters of data. This chart is often used to plot scientific data, and can highlight the deviation of collected data from predicted results. The Bubble Chart has many of the characteristics of the [Scatter Marker Chart](scatter-chart.md#angular-scatter-marker-chart) but with the option to have various radius scale sizes.

## Angular Bubble Chart Example

You can create Ignite UI for Angular Bubble Chart in [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control using the [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) and two numeric axes, as shown in the example below.

<code-view style="height: 600px" alt="Angular Bubble Chart Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-multiple-sources"
                                                 github-src="charts/data-chart/scatter-bubble-chart-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular Bubble Chart with Single Series

You can bind your data to `ItemsSource` property of [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html) and map data columns using its [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#xMemberPath), [`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#yMemberPath), [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusMemberPath) properties, as shown in the example below:

<code-view style="height: 600px" alt="Angular Bubble Chart with Single Series"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-single-source"
                                                 github-src="charts/data-chart/scatter-bubble-chart-single-source">
</code-view>


<div class="divider--half"></div>

## Angular Bubble Chart with Multiple Series

In Angular Bubble Chart, binding multiple data sources works by setting each new data source to `ItemsSource` property of a additional [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Bubble Chart with Multiple Series"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-multiple-sources"
                                                 github-src="charts/data-chart/scatter-bubble-chart-multiple-sources">
</code-view>


<div class="divider--half"></div>

## Angular Bubble Chart Styling

In Angular Bubble Chart, you can customize shape of bubble markers using [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerType) property, their size with [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusScale) property, and their appearance using [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerBrush), [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerOutline), [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerThickness) properties. In addition, you can also color bubble markers based on a data column using [`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillMemberPath) and [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillScale) properties. In this example, usage of above properties is demonstrated.

<code-view style="height: 600px" alt="Angular Bubble Chart Styling"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-bubble-chart-styling"
                                                 github-src="charts/data-chart/scatter-bubble-chart-styling">
</code-view>


<div class="divider--half"></div>

## Additional Resources

*   [Scatter Chart](scatter-chart.md)
*   [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html)
*   [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html)
*   `ItemsSource`
*   [`fillMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillMemberPath)
*   [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#fillScale)
*   [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerType)
*   [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerBrush)
*   [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerOutline)
*   [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxmarkerseriescomponent.html#markerThickness)
*   [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusScale)
*   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html#radiusMemberPath)
*   [`xMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#xMemberPath)
*   [`yMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterbasecomponent.html#yMemberPath)
