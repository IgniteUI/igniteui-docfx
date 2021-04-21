---
title: Angular Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics Ignite UI for Angular chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamDataChart", "ValueOverlay"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Overlays

The Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html). This can help you to visualize data such as the mean or median of a particular series.

## Angular Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-value-overlay"
           alt="Angular Value Overlay Example"
           github-src="charts/data-chart/series-value-overlay">
</code-view>

<div class="divider--half"></div>

## Angular Value Overlay Properties

Unlike other series types that use a `DataSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) appearance properties are inherited from [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) and so [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) and [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) to show the value of the overlay on the owning axis. In order to show this, you can set the [`isAxisAnnotationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#isaxisannotationenabled) property to true.

## Angular Financial Overlays

You can also plot built-in financial overlays and indicators in Angular [Stock Chart](../types/stock-chart.md).

## Additional Resources

You can find more information about related chart types in these topics:

-   [Chart Annotations](chart-annotations.md)
-   [Column Chart](../types/area-chart.md)
-   [Line Chart](../types/line-chart.md)
-   [Stock Chart](../types/stock-chart.md)

## API Members

The following is a list of API members mentioned in the above sections:

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   `DataSource`
-   [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html)
-   [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axis)
-   [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush)
-   `IsAxisAnnotationsEnabled`
-   [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html)
-   [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness)
