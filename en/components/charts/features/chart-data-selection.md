---
title: Angular Chart Data Selection | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data selection!
_keywords: Angular charts, chart data, selection, data selection, Ignite UI for Angular, Infragistics
_language: en
mentionedTypes: ["XamDataChart", "Legend", "CategoryChart", "FinancialChart", "XamDataLegend", "DataToolTipLayer"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Selection

The Ignite UI for Angular selection feature in Angular {ComponentTitle} allows users to interactively select, highlight, outline and vice-versa deselect single or multiple series within a chart. This provides many different possibilities with how users interact with the data presented in more meaningful ways.

## Configuring Selection

The default behavior [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectionMode) turned off and requires opting into one of the following options. There are several selection modes available in the `{ComponentName}`:

- **Auto**
- **None**
- **Brighten**
- **FadeOthers**
- **GrayscaleOthers**
- **FocusColorThickOutline**
- **FocusColorOutline**
- **SelectionColorThickOutline**
- **SelectionColorOutline**
- **FocusColorFill**
- **SelectionColorFill**
- **ThickOutline**

`Brighten` will fade the selected item while `FadeOthers` will cause the opposite effect occur.
`GrayscaleOthers` will behave similarly to `FadeOthers` but instead show a gray color to the rest of the series. Note this will override any [`selectionBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectionBrush) setting.
`SelectionColorOutline` and `SelectionColorThickOutline` will draw a border around the series.

In conjunction, a [`selectionBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectionBehavior) is available to provide greater control on which items get selected. The default behavior for Auto is `PerSeriesAndDataItemMultiSelect`.

- **Auto**
- **PerDataItemMultiSelect**
- **PerDataItemSingleSelect**
- **PerSeriesAndDataItemMultiSelect**
- **PerSeriesAndDataItemSingleSelect**
- **PerSeriesAndDataItemGlobalSingleSelect**
- **PerSeriesMultiSelect**
- **PerSeriesSingleSelect**

## Configuring Selection via Color Fill

The following example shows the combination of both `SelectionColorFill` and `Auto` selection behavior aka `PerSeriesAndDataItemMultiSelect`. Color Fills provide a useful visual cue as it changes the entire series item's back color. By clicking each item you'll see the item change from green to purple.

<code-view style="height: 450px" alt="Angular Category Chart Selection Modes Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/selection-modes"
                                                 github-src="charts/category-chart/selection-modes">
</code-view>


## Configuring Multiple Selection

Other selection modes offer various methods of selection. For example using [`selectionBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectionBehavior) with `PerDataItemMultiSelect` will affect all series in entire category when multiple series are present while allowing selection across categories. Compared to `PerDataItemSingleSelect`, only a single category of items can be selected at a time. This is useful if multiple series are bound to different datasources and provides greater control of selection between categories.
`PerSeriesAndDataItemGlobalSingleSelect` allows single series selection across all categories at a time.

<code-view style="height: 450px" alt="Angular Category Chart Selection Multiple Modes Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/selection-multiple-modes"
                                                 github-src="charts/category-chart/selection-multiple-modes">
</code-view>


## Configuring Outline Selection

When [`focusBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#focusBrush) is applied, selected series will appear with a border when the [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectionMode) property is set to one of the focus options.

## Radial Series Selection

This example demonstrates another series type via the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) where each radial series can be selected with different colors.

<code-view style="height: 450px" alt="Angular Radial Column Chart Selection Multiple Modes Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/radial-column-chart-selection"
                                                 github-src="charts/data-chart/radial-column-chart-selection">
</code-view>


## Programmatic Selection

Chart Selection can also be configured in code where selected items in the chart can be seen on startup or runtime. This can be achieved by adding items to the `SelectedSeriesCollection` of the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html). The `Matcher` property of the [`IgxChartSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxchartselection.html) object allows for selecting a series based on a "matcher", ideal when you do not have access to the actual series from the chart. If you know the properties that your datasource contains, you can use the `ValueMemberPath` that the series would be.

The matcher is ideal for using in charts, such as the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) when you do not have access to the actual series, like the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). In this case you if you know the properties that your datasource contained you can surmise the ValueMemberPaths that the series would have. For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to highlight the series bound to Solar values, you can add a ChartSelection object to the [`selectedSeriesItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectedSeriesItems) collection using a matcher with the following properties set

For example, if you datasource has numeric properties Nuclear, Coal, Oil, Solar then you know there are series created for each of these properties. If you want to select the series bound to Solar values, you can add a ChartSelection object to the SelectedSeriesItems collection using a matcher with the following properties set.

<code-view style="height: 500px" alt="Angular Selection Matcher"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/selection-matcher"
                                                 github-src="charts/category-chart/selection-matcher">
</code-view>


## API References

The following is a list of API members mentioned in the above sections:

| [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) Properties                    | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) Properties |
| ----------------------------------------------|---------------------------|
|                                               |                           |
