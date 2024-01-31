---
title: Angular Chart Overlays | Data Visualization Tools | Value Overlay | Infragistics
_description: Use Infragistics Ignite UI for Angular chart control's value overlay feature to place horizontal or vertical lines at a single numeric value. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, value overlay, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamDataChart", "ValueOverlay", "CategoryChart", "FinancialChart"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Overlays

The Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html). This can help you to visualize data such as the mean or median of a particular series.

## Angular Value Overlay Example

The following example depicts a [Column Chart](../types/column-chart.md) with a few horizontal value overlays plotted.

<code-view style="height: 600px" alt="Angular Value Overlay Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/series-value-overlay"
                                                 github-src="charts/data-chart/series-value-overlay">
</code-view>


<div class="divider--half"></div>

## Angular Value Overlay Properties

Unlike other series types that use a `ItemsSource` for data binding, the value overlay uses a `ValueMemberPath` property to bind a single numeric value. In addition, the value overlay requires you to define a single [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the `ValueMemberPath` property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the `ValueMemberPath` should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) appearance properties are inherited from [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) and so [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush) and [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#thickness) for example are available and work the same way they do with other types of series.

It is also possible to show an axis annotation on a [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html) to show the value of the overlay on the owning axis. In order to show this, you can set the [`isAxisAnnotationEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#isAxisAnnotationEnabled) property to true.

## Angular Value Layer

The Angular charting components also expose the ability to use value lines to call out different focal points of your data, such as minimum, maximum, and average values.

Applying the [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) components is done by setting the [`valueLines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) property on the chart. This property takes a collection of the [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumeration. You can mix and match multiple value layers in the same chart by adding multiple [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumerations to the [`valueLines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) collection of the chart.

In the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), this is done by adding a [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) to the [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) collection of the chart and then setting the `ValueMode` property to one of the [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumerations. Each of these enumerations and what they mean is listed below:

*   [`Auto`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Auto): The default value mode of the [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html) enumeration.
*   [`Average`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Average): Applies potentially multiple value lines to call out the average value of each series plotted in the chart.
*   [`GlobalAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#GlobalAverage): Applies a single value line to call out the average of all of the series values in the chart.
*   [`GlobalMaximum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#GlobalMaximum): Applies a single value line to call out the absolute maximum value of all of the series values in the chart.
*   [`GlobalMinimum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#GlobalMinimum): Applies a single value line to call out the absolute minimum value of all of the series values in the chart.
*   [`Maximum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Maximum): Applies potentially multiple value lines to call out the maximum value of each series plotted in the chart.
*   [`Minimum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html#Minimum): Applies potentially multiple value lines to call out the minimum value of each series plotted in the chart.

If you want to prevent any particular series from being taken into account when using the [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) element, you can set the [`targetSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html#targetSeries) property on the layer. This will force the layer to target the series that you define. You can have as many [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) elements within a single [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) as you want.

The following sample demonstrates usage of the different [`valueLines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html):

<code-view style="height: 600px" alt="Angular Value Lines Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/value-lines"
                                                 github-src="charts/category-chart/value-lines">
</code-view>


<div class="divider--half"></div>

## Angular Financial Overlays

You can also plot built-in financial overlays and indicators in Angular [Stock Chart](../types/stock-chart.md).

## Additional Resources

You can find more information about related chart types in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Column Chart](../types/area-chart.md)
*   [Line Chart](../types/line-chart.md)
*   [Stock Chart](../types/stock-chart.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)
*   `ItemsSource`
*   [`IgxValueOverlayComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html)
*   [`axis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvalueoverlaycomponent.html#axis)
*   [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#brush)
*   `IsAxisAnnotationsEnabled`
*   [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html)
*   [`thickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#thickness)
*   [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html)
*   [`ValueLayerValueMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.valuelayervaluemode.html)
*   [`valueLines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines)
