---
title: Angular Chart Highlight Filter | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Highlight Filter
_keywords: Angular Charts, Highlighting, Filtering, Infragistics
mentionedTypes: ["CategoryChart", "XamDataChart", "Series", "HighlightedValuesDisplayMode"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Highlight Filter

The Ignite UI for Angular Chart components support a data highlighting overlay that can enhance the visualization of the series plotted in those charts by allowing you to view a subset of the data plotted. When enabled, this will highlight a subset of data while showing the total set with a reduced opacity in the case of column and area series types, and a dashed line in the case of line series types. This can help you to visualize things like target values versus actual values with your data set. This feature is demonstrated in the following example:

<code-view style="height: 500px" alt="Angular Highlight Filter Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/chart-highlight-filter-multiple-series"
                                                 github-src="charts/data-chart/chart-highlight-filter-multiple-series">
</code-view>


Note that data highlighting feature is supported by the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), but it is configured in different ways in those controls due to the nature of how those controls work. One thing remains constant with this feature though, in that you need to set the [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property to `Overlay` if you want to see the highlight. The following will explain the different configurations for the highlight filter feature.

## Using Highlight Filter with DataChart

In the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), much of the highlight filter API happens on the series themselves, mainly by setting the `HighlightedItemsSource` property to a collection representing a subset of the data you want to highlight. The count of the items in the `HighlightedItemsSource` needs to match the count of the data bound to the `ItemsSource` of the series that you are looking to highlight, and in the case of category series, it will use the `ValueMemberPath` that you have defined as the highlight path by default. The sample at the top of this page uses the `HighlightedItemsSource` in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) to show the overlay.

In the case that the schema does not match between the `HighlightedItemsSource` and the `ItemsSource` of the series, you can configure this using the `HighlightedValueMemberPath` property on the series. Additionally, if you would like to use the `ItemsSource` of the series itself as the highlight source and have a path on your data item that represents the subset, you can do this. This is done by simply setting the `HighlightedValueMemberPath` property to that path and not providing a `HighlightedItemsSource`.

The reduced opacity of the column and area series types is configurable by setting the [`highlightedValuesFadeOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesFadeOpacity) property on the series. You can also set the [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property to `Hidden` if you do not wish to see the overlay at all.

The part of the series shown by the highlight filter will be represented in the legend and tooltip layers of the chart separately. You can configure the title that this is given in the tooltip and legend by setting the [`highlightedTitleSuffix`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedTitleSuffix). This will append the value that you provide to the end of the [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#chartTitle) of the series.

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control using the `HighlightedValueMemberPath`:

<code-view style="height: 500px" alt="Angular Highlight Filter Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/chart-highlight-filter"
                                                 github-src="charts/data-chart/chart-highlight-filter">
</code-view>


## Using Highlight Filter in CategoryChart

The [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) highlight filter happens on the chart by setting the [`initialHighlightFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialHighlightFilter) property. Since the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) takes all of the properties on your underlying data item into account by default, you will need to define the [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups) on the chart as well so that the data can be grouped and aggregated in a way that you can have a subset of the data to filter on. You can set the [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups) to a value path in your underlying data item to group by a path that has duplicate values.

<!-- Unsure of this part. Need to review -->

<!-- ????? The `InitialHighlightFilter` is done using OData filter query syntax. The syntax for this is an abbreviation of the filter operator. For example, if you wanted to have an InitialHighlightFilter of "Month not equals January" it would be represented as "Month ne 'January'"-->

Similar to the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), the [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode) property is also exposed on the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html). In the case that you do not want to see the overlay, you can set this property to `Hidden`.

The following example demonstrates the usage of the data highlighting overlay feature within the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control:

<code-view style="height: 500px" alt="Angular Highlight Filter Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/chart-highlight-filter"
                                                 github-src="charts/category-chart/chart-highlight-filter">
</code-view>


<!-- TODO add new section that talks about how this feature also applies to Range, Financial series and the HighlightedValueMemberPath property corresponds to:
HighlightedHighMemberPath and HighlightedLowMemberPath in Range Series
HighlightedHighMemberPath, HighlightedLowMemberPath, HighlightedOpenMemberPath, HighlightedCloseMemberPath in Financial Series-->

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Highlighting](chart-highlighting.md)
*   [Chart Data Tooltip](chart-data-tooltip.md)
*   [Chart Data Aggregations](chart-data-aggregations.md)

## API References

The following is a list of API members mentioned in the above sections:

| [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) Properties                    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) Properties |
| ----------------------------------------------|---------------------------|
| `CategoryChart.HighlightedItemsSource`        | `Series.HighlightedItemsSource`  |
| [`highlightedTitleSuffix`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedTitleSuffix)        | [`highlightedTitleSuffix`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedTitleSuffix)  |
| `CategoryChart.HighlightedValueMemberPath`    | `Series.HighlightedValueMemberPath`     |
| [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode)  | [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDisplayMode)   |
| [`highlightedValuesFadeOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesFadeOpacity)  | [`highlightedValuesFadeOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesFadeOpacity)   |
| [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedValuesDisplayMode)  | [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#highlightedValuesDisplayMode)   |
| [`initialHighlightFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialHighlightFilter)        |  |
| [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups)                 |  |
