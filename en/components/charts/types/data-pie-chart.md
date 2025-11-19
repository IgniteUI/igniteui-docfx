---
title: Angular Pie Charts and Graphs | Ignite UI for Angular | commercial license
_description: The Ignite UI for Angular data pie chart is a specialized UI control that renders a pie chart, consisting of a circular area divided into sections.  Try for FREE.
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, animation, highlighting, legend
_license: commercial
mentionedTypes: ["DataPieChart", "XamDataChart", "OthersCategoryType", "SeriesSelectionMode", "SeriesSelectionBehavior", "SeriesHighlightingBehavior"]
namespace: Infragistics.Controls.Charts
---

# Angular Data Pie Chart

The Ignite UI for Angular Data Pie Chart is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Angular Data Pie Chart Example

You can create the Angular Pie Chart in the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) by binding your data items with a string and a numeric data value. These data values will add up to a value of 100% of visualization.

<code-view style="height: 600px" alt="Angular Data Pie Chart Overview"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/overview"
                                                 github-src="charts/data-pie-chart/overview">
</code-view>


<div class="divider--half"></div>

## Angular Data Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization such as Doughnut (Ring) Chart, Funnel Chart, Stacked Area Chart, Stacked Bar Chart, and Treemap.

The Angular Data Pie Chart includes interactive features that give the viewer tools to analyze data, like:

- Legends
- Slice Selection
- Slice Highlighting
- Chart Animations

Best Practices for a Pie Chart:

- Comparing slices or segments as percentage values in proportion to a total value or whole.
- Showing how a group of categories is broken into smaller segments.
- Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
- Ensuring data segments add up to 100%.
- Arranging the order of data from largest (highest) to smallest (least).
- Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
- Ensuring the color palette is distinguishable for segments/slices of the parts.
- Considering data labels in segments vs. legends for ease of reading.
- Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
- Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

- Comparing change over time —use a Bar, Line or Area chart.
- Requiring precise data comparison —use a Bar, Line or Area chart.
- You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
- It would be easier for the viewer to perceive the value difference in a Bar chart.

## Angular Data Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html) property. The ItemLegend will display its items in vertical orientation as a default, but this can be changed by setting its [`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html#orientation) property.

The labels shown on the legend will display the same content as the label that is shown for each slice in the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) by default, but this can be modified by utilizing the [`legendSliceLabelContentMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#legendSliceLabelContentMode) property on the chart. This exposes an enumeration that allows you to show the label, value, percentage, or any combination of those as the legend's content for each slice in the chart.

You can also modify the ItemLegend badge. By default, it appears as a filled circle corresponding to the color of the associated chart slice. You can configure this by using the [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#legendItemBadgeShape) property on the chart, and you can set this to be a circle, line, bar, column, and more.

Below is an example that demonstrates usage of the ItemLegend with the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html).

<code-view style="height: 600px" alt="Angular Data Pie Chart Legend"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/legend"
                                                 github-src="charts/data-pie-chart/legend">
</code-view>


<div class="divider--half"></div>

## Angular Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice.

The Others category in the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) has three main, configurable properties - [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryType), [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryThreshold), and [`othersCategoryText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryText) that allow you to configure how the Others slice in the chart is shown. These are each described below:

The [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryType) property works in tandem with the [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryThreshold) property of the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html). For the [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryType), you can define whether you want the [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryThreshold) to be evaluated as a number or a percentage. For example, if you decide on number and set the [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryThreshold) to 5, any slices that have a value less than 5 will become part of the Others category. Using the same value of 5 with a percent type, any values that are less than 5 percent of the total values of the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) will become part of the Others category.

To get the underlying data items that are contained within the Others slice in the chart, you can utilize the [`getOthersContext`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#getOthersContext) method on the chart. This return type of this method is an [`IgxOthersCategoryContextComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxotherscategorycontextcomponent.html) which exposes an [`items`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxotherscategorycontextcomponent.html#items) property. The [`items`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxotherscategorycontextcomponent.html#items) property returns an array that will contain the items in the Others slice. Additionally, when clicking the Others slice, the `Item` property of the event arguments for the `SeriesClick` event will be will also return this [`IgxOthersCategoryContextComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxotherscategorycontextcomponent.html).

By default, the Others slice will be represented by a label of "Others." You can change this by modifying the [`othersCategoryText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryText) property of the chart.

If you want to ensure that the Others category does not show up in the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html), you can set the [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryThreshold) to 0.

The following sample demonstrates usage of the Others slice in the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html):

<code-view style="height: 600px" alt="Angular Data Pie Chart Others"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/others"
                                                 github-src="charts/data-pie-chart/others">
</code-view>


<div class="divider--half"></div>

## Angular Data Pie Chart Selection

The [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) supports slice selection by mouse click on the slices plotted in the chart. This can be configured by utilizing the [`selectionBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#selectionBehavior) and [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#selectionMode) properties of the chart, described below:

The main two options of the [`selectionBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#selectionBehavior) are [`PerDataItemSingleSelect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionbehavior.html#PerDataItemSingleSelect) and [`PerDataItemMultiSelect`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionbehavior.html#PerDataItemMultiSelect), which will enable single and multiple selection, respectively.

The [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#selectionMode) property exposes an enumeration that determines how the pie chart slices respond to being selected. The following are the options of that enumeration and what they do:

- [`Brighten`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#Brighten): The selected slices will be highlighted.
- [`FadeOthers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#FadeOthers): The selected slices will remain their same color and others will fade.
- [`FocusColorFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#FocusColorFill): The selected slices will change their background to the FocusBrush of the chart.
- [`FocusColorOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#FocusColorOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart.
- [`FocusColorThickOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#FocusColorThickOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- [`GrayscaleOthers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#GrayscaleOthers): The unselected slices will have a gray color filter applied to them.
- [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#None): There is no effect on the selected slices.
- [`SelectionColorFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#SelectionColorFill): The selected slices will change their background to the SelectionBrush of the chart.
- [`SelectionColorOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#SelectionColorOutline): The selected slices will have an outline with the color defined by the SelectionBrush of the chart.
- [`SelectionColorThickOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#SelectionColorThickOutline): The selected slices will have an outline with the color defined by the FocusBrush of the chart. The thickness of this outline can be configured via the Thickness property of the control as well.
- [`ThickOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#ThickOutline): The selected slices will apply an outline with the thickness dependent on the Thickness property of the chart.

When a slice is selected, its underlying data item will be added to the SelectedSeriesItems collection of the chart. As such, the XamDataPieChart exposes the SelectedSeriesItemsChanged event to detect when a slice has been selected and this collection is changed.

The following sample demonstrates the selection feature of the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) control:

<code-view style="height: 600px" alt="Angular Data Pie Chart Selection"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/selection"
                                                 github-src="charts/data-pie-chart/selection">
</code-view>


<div class="divider--half"></div>

## Angular Data Pie Chart Highlighting

The [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) supports mouse over highlighting, as well as a highlighting overlay that can be configured by providing a separate data source.

First, the [`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingBehavior) enumerated property determines how a slice will be highlighted. The following are the options of that property and what they do:

- [`DirectlyOver`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.serieshighlightingbehavior.html#DirectlyOver): The slices are only highlighted when the mouse is directly over them.
- [`NearestItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.serieshighlightingbehavior.html#NearestItems): The nearest slice to the mouse position will be highlighted.
- [`NearestItemsAndSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.serieshighlightingbehavior.html#NearestItemsAndSeries): The nearest slice and series to the mouse position will be highlighted.
- [`NearestItemsRetainMainShapes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.serieshighlightingbehavior.html#NearestItemsRetainMainShapes): The nearest items to the mouse position will be highlighted and the main shapes of the series will not be de-emphasized.

The [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightingMode) enumerated property determines how the data pie chart slices respond to being highlighted. The following are the options of that property and what they do:

- [`Brighten`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#Brighten): The series will have its color brightened when the mouse position is over or near it.
- `BrightenSpecific`: The specific slice will have its color brightened when the mouse position is over or near it.
- [`FadeOthers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#FadeOthers): The series will retain its color when the mouse position is over or near it, while the others will appear faded.
- `FadeOthersSpecific`: The specific slice will retain its color when the mouse position is over or near it, while the others will appear faded.
- [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_charts.seriesselectionmode.html#None): The series and slices will not be highlighted.

The following example demonstrates the mouse highlighting behaviors of the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) component:

<code-view style="height: 600px" alt="Angular Data Pie Chart Highlighting"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/highlighting"
                                                 github-src="charts/data-pie-chart/highlighting">
</code-view>


In addition to the mouse highlighting, the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) exposes a highlight filter capability that can display a subset of your data. This is applied by specifying a `HighlightedDataSource` for the control and by setting the [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property to `Overlay`. The `HighlightedDataSource` expects a subset of the data assigned to the `DataSource` property of the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html).

When these conditions are met, the values of the subset will be highlighted, while the remainder of the full set of data will be faded - effectively creating a highlight for the subset and allowing easier visualization of a subset of your data within the same control.

The following example demonstrates highlight filtering.

<code-view style="height: 600px" alt="Angular Data Pie Chart Highlight Filtering"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/highlight-filter"
                                                 github-src="charts/data-pie-chart/highlight-filter">
</code-view>


<div class="divider--half"></div>

## Angular Data Pie Chart Animation

The [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) supports animating its slices into view, as well as when a value changes.

You can set the [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#isTransitionInEnabled) property to **true** to have the pie chart animate into view. The type of animation performed can be configured by setting the [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#transitionInMode) enumerated property to the type of animation you would like to see. Additionally, you can also set the [`transitionInSpeedType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#transitionInSpeedType) property to scale with index, value, normal, or randomized. The duration of this animation can be controlled by the [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#transitionInDuration) property, which takes a `TimeSpan`.

If you would like to animate data changes, this can also be done by setting the [`animateSeriesWhenAxisRangeChanges`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#animateSeriesWhenAxisRangeChanges) property to **true**. The duration of this change can be configured by setting the [`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#transitionDuration) property as well.

The following sample demonstrates the usage of animation in the [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html):

<code-view style="height: 600px" alt="Angular Data Pie Chart Animation"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-pie-chart/animation-replay"
                                                 github-src="charts/data-pie-chart/animation-replay">
</code-view>


<div class="divider--half"></div>

## Additional Resources

- [Donut Chart](donut-chart.md)
- [Polar Chart](polar-chart.md)
- [Radial Chart](radial-chart.md)

## API References

The following table lists API members mentioned in the above sections:

- [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#chartType)
- [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryThreshold)
- [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiebasechartcomponent.html#othersCategoryType)
- [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#selectionMode)
- [`selectionBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#selectionBehavior)

|Chart Type       | Control Name   | API Members |
|-----------------|----------------|------------ |
|Data Pie Chart      | [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html)     | [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) |
|Item Legend | [`IgxItemLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemlegendcomponent.html) | [`IgxItemLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemlegendcomponent.html) |
