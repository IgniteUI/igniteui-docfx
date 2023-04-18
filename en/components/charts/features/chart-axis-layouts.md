---
title: Angular Axis Layouts | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Layouts
_keywords: Angular Axis, Layouts, Location, Position, Share, Multiple, Crossing, Infragistics
mentionedTypes: [ "DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "Axis", "AxisLabelSettings", "ScatterSplineSeries", "TimeXAxis" ]
---

# Angular Axis Layouts

All Ignite UI for Angular charts include options to configure many axis layout options such as location as well as having the ability to share axis between series or have multiple axes in the same chart. These features are demonstrated in the examples given below.

> \[!Note]
> the following examples can be applied to [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) as well as [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) controls.

## Axis Locations Example

For all axes, you can specify axis location in relationship to chart plot area. The [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabellocation) property of the Angular charts, allows you to position x-axis line and its labels on above or below plot area. Similarly, you can use the [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabellocation) property to position y-axis on left side or right side of plot area.

The following example depicts the amount of renewable electricity produced since 2009, represented by a [Line Chart](../types/line-chart.md). There is a drop-down that lets you configure the [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabellocation) so that you can visualize what the axes look like when the labels are placed on the left or right side on the inside or outside of the chart's plot area.

<code-view style="height: 450px" alt="Angular Axis Locations Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-locations"
                                                 github-src="charts/category-chart/axis-locations">
</code-view>


<!-- ## Axis Orientation Example

TODO add info/example of 4 charts with all possible combinations of XAxisInverted and YAxisInverted
e.g. https://www.infragistics.com/help/wpf/datachart-axis-orientation
 -->

## Axis Advanced Scenarios

For more advanced axis layout scenarios, you can use Angular Data Chart to share axis, add multiple y-axis and/or x-axis in the same plot area, or even cross axes at specific values. The following examples show how to use these features of the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html).

### Axis Sharing Example

You can share and add multiple axes in the same plot area of the Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html). It a common scenario to use share [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) and add multiple [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) to plot many data sources that have wide range of values (e.g. stock prices and stock trade volumes).

The following example depicts a stock price and trade volume chart with a [Stock Chart](../types/stock-chart.md) and a [Column Chart](../types/column-chart.md) plotted. In this case, the Y-Axis on the left is used by the [Column Chart](../types/column-chart.md) and the Y-Axis on the right is used by the [Stock Chart](../types/stock-chart.md), while the X-Axis is shared between the two.

<code-view style="height: 450px" alt="Angular Axis Sharing Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/axis-sharing"
                                                 github-src="charts/data-chart/axis-sharing">
</code-view>


<div class="divider--half"></div>

### Axis Crossing Example

In addition to placing axes outside plot area, the Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) also provides options to position axes inside of plot area and make them cross at specific values. For example, you can create trigonometric chart by setting [`crossingAxis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#crossingaxis) and [`crossingValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#crossingvalue) properties on both x-axis and y-axis to render axis lines and axis labels such that they are crossing at (0, 0) origin point.

The following example shows a Sin and Cos wave represented by a [Scatter Spline Chart](../types/scatter-chart.md) with the X and Y axes crossing each other at the (0, 0) origin point.

<code-view style="height: 450px" alt="Angular Axis Crossing Axes Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/axis-crossing"
                                                 github-src="charts/data-chart/axis-crossing">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

*   [Axis Gridlines](chart-axis-gridlines.md)
*   [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:
d in the above sections:

| [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)                                         | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)                 |
| ------------------------------------------------------ | ------------------------------- |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`crossingAxis`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#crossingaxis)             | None                            |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`crossingValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#crossingvalue)            | None                            |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ [`isInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#isinverted)               | [`xAxisInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisinverted)                 |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ [`isInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html#isinverted)               | [`yAxisInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisinverted)                 |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ `LabelLocation`            | [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabellocation)            |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ `LabelLocation`            | [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabellocation)            |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ `LabelHorizontalAlignment` | [`yAxisLabelHorizontalAlignment`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelhorizontalalignment) |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ `LabelVerticalAlignment`   | [`xAxisLabelVerticalAlignment`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelverticalalignment)   |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) ➔ `LabelVisibility`          | [`yAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelvisibility)          |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) ➔ `LabelVisibility`          | [`xAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelvisibility)          |

<!-- TODO correct links in Transformer -->

<!--
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.location`            | `YAxisLabelLocation`            |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.location`            | `XAxisLabelLocation`            |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.horizontalAlignment` | `YAxisLabelHorizontalAlignment` |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.verticalAlignment`   | `XAxisLabelVerticalAlignment`   |
| `Axes` &#10132; `NumericYAxis` &#10132; `labelSettings.visibility`          | `YAxisLabelVisibility`          |
| `Axes` &#10132; `NumericXAxis` &#10132; `labelSettings.visibility`          | `XAxisLabelVisibility`          | -->
