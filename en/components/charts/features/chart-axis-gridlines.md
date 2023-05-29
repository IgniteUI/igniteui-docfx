---
title: Angular Axis Gridlines | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Gridlines
_keywords: Angular Axis, Gridlines, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "XYChart", "DomainChart", "XamDataChart", "NumericXAxis", "NumericYAxis", "NumericAxisBase" ]
namespace: Infragistics.Controls.Charts
---

# Angular Axis Gridlines

All Ignite UI for Angular charts include built-in capability to modify appearance of axis lines as well as frequency of major/minor gridlines and tickmarks that are rendered on the X-Axis and Y-Axis.

> \[!Note]
> the following examples can be applied to [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) as well as [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) controls.

Axis major gridlines are long lines that extend horizontally along the Y-Axis or vertically along the X-Axis from locations of axis labels, and they render through the plot area of the chart. Axis minor gridlines are lines that render between axis major gridlines.

Axis tickmarks are displayed along all horizontal and vertical axes at each label at all major line positions of the Angular chart.

## Angular Axis Gridlines Example

This example shows how configure the axis gridline to display major and minor gridlines at specified intervals:

<code-view style="height: 450px" alt="Angular Axis Gridlines Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-gridlines"
                                                 github-src="charts/category-chart/axis-gridlines">
</code-view>


<div class="divider--half"></div>

## Angular Axis Gridlines Properties

Setting the axis interval property specifies how often major gridlines and axis labels are rendered on an axis. Similarly, the axis minor interval property specifies how frequent minor gridlines are rendered on an axis.

In order to display minor gridlines that correspond to minor interval, you need to set [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisminorstroke) and [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisminorstrokethickness) properties on the axis. This is because minor gridlines do not have a default color or thickness and they will not be displayed without first assigning them.

You can customize how the gridlines are displayed in your Angular chart by setting the following properties:

| Axis Visuals           | Type    | Property Names                                               | Description |
| -----------------------|---------|--------------------------------------------------------------|---------------- |
| Major Stroke Color     | string  | [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxismajorstroke) <br> [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxismajorstroke)                   | These properties set the color of axis major gridlines. |
| Minor Stroke Color     | string  | [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisminorstroke) <br> [`yAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisminorstroke)                   | These properties set the color of axis minor gridlines. |
| Major Stroke Thickness | number  | [`xAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxismajorstrokethickness) <br> [`yAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxismajorstrokethickness) | These properties set the thickness in pixels of the axis major gridlines. |
| Minor Stroke Thickness | number  | [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisminorstrokethickness) <br> [`yAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisminorstrokethickness) | These properties set the thickness in pixels of the axis minor gridlines. |
| Major Interval         | number  | [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xaxisinterval) <br> [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yaxisinterval)                         | These properties set interval between axis major gridlines and labels. |
| Minor Interval         | number  | [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xaxisminorinterval) <br> [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html#yaxisminorinterval)               | These properties set interval between axis minor gridlines, if used. |
| Axis Line Stroke Color | string  | [`xAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisstroke) <br> [`yAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisstroke)                   | These properties set the color of an axis line. |
| Axis Stroke Thickness  | number  | [`xAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisstrokethickness) <br> [`yAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisstrokethickness) | These properties set the thickness in pixels of an axis line. |

Regarding the Major and Minor Interval in the table above, it is important to note that the major interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval. The minor interval gridlines are always rendered between the major gridlines, and as such, the minor interval properties should always be set to something much smaller (usually 2-5 times smaller) than the value of the major Interval properties.

On category axes, the intervals are represented as an index between first item and last category item. Generally, this value should equal to 10-20% of total numbers of category items for the major Interval so that all axis labels fit on axis so that they are not clipped by other axis labels. For minor intervals, this is represented as a fraction of the major interval properties. This value generally should equal between 0.25 and 0.5.

On numeric axes, the interval values are represented as a double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.

On date time axes, this value is represented as time span between axis minimum value and axis maximum value.

The following example demonstrates how to customize the gridlines by setting the properties above:

<code-view style="height: 450px" alt="Angular Axis Gridlines Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-gridlines"
                                                 github-src="charts/category-chart/axis-gridlines">
</code-view>


<div class="divider--half"></div>

## Angular Axis Tickmarks Example

Axis tick marks are enabled by setting the [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisticklength) and [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisticklength) properties to a value greater than 0. These properties specifies the length of the line segments forming the tick marks.

Tick marks are always extend from the axis line and point to the direction of the labels. Labels are offset by the value of the length of tickmarks to avoid overlapping. For example, with the [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisticklength) property is set to 5, axis labels will be shifted left by that amount.

The following example demonstrates how to customize the tickmarks by setting the properties above:

<code-view style="height: 450px" alt="Angular Axis Tickmarks Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/axis-tickmarks"
                                                 github-src="charts/category-chart/axis-tickmarks">
</code-view>


<div class="divider--half"></div>

## Angular Axis Tickmarks Properties

You can customize how the axis tickmarks are displayed in our Angular chats by setting the following properties:

| Axis Visuals           | Type    | Property Names                                             | Description |
| -----------------------|---------|------------------------------------------------------------|------------------------- |
| Tick Stroke Color      | string  | [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxistickstroke) <br> [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxistickstroke)                   | These properties set the color of the tickmarks. |
| Tick Stroke Thickness  | number  | [`xAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxistickstrokethickness) <br> [`yAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxistickstrokethickness) | These properties set the thickness of the axis tick marks. |
| Tick Stroke Length     | number  | [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisticklength) <br> [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisticklength)                   | These properties set the length of the axis tick marks. |

## Additional Resources

You can find more information about related chart features in these topics:

*   [Axis Layout](chart-axis-layouts.md)
*   [Axis Options](chart-axis-options.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)                                     | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) or [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) |
| -------------------------------------------------- | ----------------------------------- |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval)             | [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xaxisinterval) (Major Interval) |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#interval)             | [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yaxisinterval) (Major Interval) |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`minorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#minorinterval)        | [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xaxisminorinterval)    |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`minorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericaxisbasecomponent.html#minorinterval)        | [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#yaxisminorinterval)    |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`majorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorstroke)          | [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxismajorstroke)    |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`majorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorstroke)          | [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxismajorstroke)    |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`majorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorstrokethickness) | [`xAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxismajorstrokethickness) |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`majorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#majorstrokethickness) | [`yAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxismajorstrokethickness) |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`minorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#minorstrokethickness) | [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisminorstrokethickness) |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`minorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#minorstrokethickness) | [`yAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisminorstrokethickness) |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`strokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strokethickness)      | [`xAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisstrokethickness)   |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`strokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strokethickness)      | [`yAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisstrokethickness)   |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`stroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#stroke)               | [`xAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisstroke) (Axis Line Color) |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`stroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#stroke)               | [`yAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisstroke) (Axis Line Color) |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`tickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#ticklength)           | [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisticklength)    |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`tickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#ticklength)           | [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisticklength)    |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`tickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#tickstroke)           | [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxistickstroke)    |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`tickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#tickstroke)           | [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxistickstroke)    |
| `Axes` ➔ [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html) ➔ [`strip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strip)                | [`xAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xaxisstrip) (Space between Major Gridlines) |
| `Axes` ➔ [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html) ➔ [`strip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxaxiscomponent.html#strip)                | [`yAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yaxisstrip) (Space between Major Gridlines) |
