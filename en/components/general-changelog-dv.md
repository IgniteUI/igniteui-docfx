---
title: Angular What's New | Ignite UI for Angular | Infragistics
_description: Learn about new features in the Ignite UI for Angular.
_keywords: Changelog, What's New,  Ignite UI for Angular, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "Toolbar", "XamGeographicMap", "DatePicker", "DataPieChart", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend", "XamRadialGauge", "XamRadialChart", "Toolbar"]
namespace: Infragistics.Controls.Charts
---

# Ignite UI for Angular Changelog

All notable changes for each version of Ignite UI for Angular are documented on this page.

> \[!Note]
> This topic discusses changes only for components that are not included in the igniteui-angular package.
> For changes specific to igniteui-angular components, please see CHANGELOG.MD.

*   [Ignite UI for Angular CHANGELOG.md at Github](https://github.com/IgniteUI/igniteui-angular/blob/master)

## **19.1.0**

### igniteui-angular-charts (Charts)

*   New [Chart Data Annotations](charts/features/chart-data-annotations.md)
    *   Data Annotation Band Layer (Beta)
    *   Data Annotation Line Layer (Beta)
    *   Data Annotation Rect Layer (Beta)
    *   Data Annotation Slice Layer (Beta)
    *   Data Annotation Strip Layer (Beta)

*   The [Data Tooltip](charts/features/chart-data-tooltip.md) and [Data Legend](charts/features/chart-data-legend.md) expose a new `LayoutMode` property that you can use to layout the contents of the tooltip or legend in a table or vertical layout structure.

*   The [`defaultInteraction`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#defaultInteraction) property of the charts has been updated to include a new enumeration - `DragSelect` in which the dragged preview Rect will select the points contained within. (Beta)

*   The [ValueOverlay and ValueLayer](charts/features/chart-overlays.md), in addition to the new [Chart Data Annotations](charts/features/chart-data-annotations.md) listed above now expose an `OverlayText` property that can be used to overlay additional annotation text in the plot area. These appearance of these annotations can be configured by using the many OverlayText-prefixed properties. For example, the `OverlayTextBrush` property will configure the color of the overlay text. (Beta)

*   New [Trendline Layer](charts/features/chart-trendlines.md) series type that allows you to apply a single trend line per trend line layer to a particular series. This allows the usage of multiple trend lines on a single series since you can have multiple [TrendlineLayer](charts/features/chart-overlays.md) series types in the chart.

### igniteui-angular-dashboards (Dashboards)

*   The `DashboardTile` now supports propagating the aggregations from its DataGrid view to the chart visualization such as sorting, grouping, filtering and selection. This is currently supported by binding the `DataSource` of the `DashboardTile` to an instance of `LocalDataSource`.

### igniteui-angular

**Breaking Changes**

*   The 'igniteui-angular-grids' package has been renamed to 'igniteui-angular-data-grids'.

### Enhancements

#### Toolbar

*   Value layers added from the toolbar now appear on the legend.
*   The zoom reset tool has been moved to the zoom drop-down.

#### Data Pie Chart

*   The chart now exposes a `GetOthersContext()` method. This will return the contents of the "others" slice.

### Bug Fixes

| Bug Number | Control | Description      |
|------------|---------|------------------|
|37023|IgxDataChart|Tooltips are cut-off/offscreen if overflow hidden is set.
|37244|Excel|Custom Data Validation is not working.
|37685|IgxSpreadsheet|Poor rendering of numbers formatted with Arial font.

## **19.0.1 (February 2025)**

### Enhancements

#### Toolbar

*   Added new `GroupHeaderTextStyle` property to [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) and [`IgxToolPanelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolpanelcomponent.html). If set, it will apply to all [`IgxToolActionGroupHeaderComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactiongroupheadercomponent.html) actions.
*   Added new property on [`IgxToolActionComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactioncomponent.html) called [`titleHorizontalAlignment`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#titleHorizontalAlignment) which controls the horizontal alignment of the title text.
*   Added new property on [`IgxToolActionSubPanelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolactionsubpanelcomponent.html) called `ItemSpacing` which controls the spacing between items inside the panel.

### Bug Fixes

The following table lists the bug fixes made for the Ignite UI for Angular toolset for this release:

| Bug Number | Control | Description      |
|------------|---------|------------------|
|26218|Excel Library|Chart's plot area right margin becomes narrower and fill pattern and fill foreground are gone just by loading an Excel file|
|30286|IgxDataChart|Bubble Series tooltip content is switched to that of nearby bubble data in clicking a bubble|
|32906|IgxDataChart|IgxDataChart is showing two xAxis on the top|
|33605|IgxDataChart|ScatterLineSeries is not showing the color of the line correctly in the legend|
|34053|IgxRadialGauge|The position of the scale label is shifted|
|34083|Excel Library|TextOperatorConditionalFormat's is not loaded/saved properly if the text contains = in a template Excel file|
|34776|IgxDataChart|Repeatedly showing and hiding the IgxDataChart causes memory leakage in JS Heap|
|35495|Excel Library|Pictures in cells are lost when a template file is loaded|
|35496|IgxSpreadsheet|Error when setting styles in Excel with images|
|35498|IgxDataChart|Tooltips for the series specified in IncludedSeries are not displayed|
|36176|Excel Library|Exception occurs when loading an Excel workbook that has a LET function|
|36379|Excel Library|Colors with any alpha channel in an excel workbook fail to load|

## **19.0.0 (January 2025)**

*   Angular 19 support.

## **18.2.0 (December 2024)**

### igniteui-angular-charts (Charts)

DashboardTile (Beta)

*   New [Dashboard Tile](dashboard-tile.md) component is a container control that analyzes and visualizes a bound ItemsSource collection or single point and returns an appropriate data visualization based on the schema and count of the data. This control utilizes a built-in [Toolbar](menus/toolbar.md) component to allow you to make changes to the visualization at runtime, allowing you to see many different visualizations of your data with minimal code.

### igniteui-angular-charts (Inputs)

*   New ColorEditor (Beta) & Toolbar ToolAction (Beta)

This new [Color Editor](inputs/color-editor.md) can be used as a standalone color picker and is now integrated into the [Toolbar](menus/toolbar.md) component to update visualizations at runtime.

## **18.1.0 (September 2024)**

*   [Data Pie Chart](charts/types/data-pie-chart.md) - The [`IgxDataPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html) is a new component that renders a pie chart. This component works similarly to the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), in that it will automatically detect the properties on your underlying data model while allowing selection, highlighting, animation and legend support via the ItemLegend component.

*   New [Proportional Category Angle Axis](charts/types/radial-chart.md) - New axes for the Radial Pie Series in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), to plot slices similar to a pie chart, a type of data visualization where data points are represented as segments within a circular graph.

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html)

    *   New ToolActionCheckboxList
        A new CheckboxList ToolAction that displays a collection of items with checkboxes for selecting. A grid inside ToolAction CheckboxList grows in height up to 5 items, then a scrollbar is displayed.
        Requires IgxCheckboxListModule to be registered.

    *   New Filtering Support

    *   Axis Field Changes
        New default IconMenu in Toolbar when targeting CategoryChart.
        Label fields are mapped to the X-axis and Value fields are mapped to the Y-axis.
        Target chart reacts in realtime to changes made. IconMenu is hidden when chart has no ItemsSource set.

## **18.0.0 (June 2024)**

*   Angular 18 support.

### igniteui-angular-charts (Charts)

*   [Data Legend Grouping](charts/features/chart-data-legend.md#angular-data-legend-grouping) & [Data Tooltip Grouping](charts/features/chart-data-tooltip.md#angular-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the [`dataLegendGroup`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dataLegendGroup) property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

<!---->

*   [Chart Selection](charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a partcular dataitem. Also  `SelectedSeriesItemsChanged` event and [`selectedSeriesItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectedSeriesItems) are available for additional help to build out robust business requirements surrouding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

*   [Treemap Highlighting](charts/types/treemap-chart.md#angular-treemap-highlighting) - Now exposes a [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingMode) property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the [`highlightingTransitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingTransitionDuration) property.

*   [Treemap Percent-based Highlighting](charts/types/treemap-chart.md#angular-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new [`highlightedDataSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource). Can be toggled via [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightedValuesDisplayMode) and styled via `FillBrushes`.

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### igniteui-angular-gauges (Gauges)

*   [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)
    *   New label for the highlight needle. [`highlightLabelText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelText) and [`highlightLabelSnapsToNeedlePivot`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelSnapsToNeedlePivot) and many other styling related properties for the HighlightLabel were added.

## **18.0.0 (June 2024)**

*   Angular 18 support.

### igniteui-angular-charts (Charts)

*   [Data Legend Grouping](charts/features/chart-data-legend.md#angular-data-legend-grouping) & [Data Tooltip Grouping](charts/features/chart-data-tooltip.md#angular-data-tooltip-grouping-for-data-chart) - New grouping feature added. The property `GroupRowVisible` toggles grouping with each series opting in can assign group text via the [`dataLegendGroup`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dataLegendGroup) property. If the same value is applied to more than one series then they will appear grouped. Useful for large datasets that need to be categorized and organized for all users.

<!---->

*   [Chart Selection](charts/features/chart-data-selection.md) - New series selection styling. This is adopted broadly across all category, financial and radial series for [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). Series can be clicked and shown a different color, brightened or faded, and focus outlines. Manage which items are effected through individual series or entire data item. Multiple series and markers are supported. Useful for illustrating various differences or similarities between values of a partcular dataitem. Also  `SelectedSeriesItemsChanged` event and [`selectedSeriesItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#selectedSeriesItems) are available for additional help to build out robust business requirements surrouding other actions that can take place within an application such as a popup or other screen with data analysis based on the selection.

*   [Treemap Highlighting](charts/types/treemap-chart.md#angular-treemap-highlighting) - Now exposes a [`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingMode) property that allows you to configure the mouse-over highlighting of the items in the tree map. This property takes two options: `Brighten` where the highlight will apply to the item that you hover the mouse over only, and `FadeOthers` where the highlight of the hovered item will remain the same, but everything else will fade out. This highlight is animated, and can be controlled using the [`highlightingTransitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingTransitionDuration) property.

*   [Treemap Percent-based Highlighting](charts/types/treemap-chart.md#angular-treemap-percent-based-highlighting) - New percent-based highlighting, allowing nodes to represent progress or subset of a collection. The appearance is shown as a fill-in of its backcolor up to a specific value either by a member on your data item or by supplying a new [`highlightedDataSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#highlightedDataSource). Can be toggled via [`highlightedValuesDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightedValuesDisplayMode) and styled via `FillBrushes`.

*   [`IgxToolbarComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html) - New `IsHighlighted` option for ToolAction for outlining a border around specific tools of choice.

### igniteui-angular-gauges (Gauges)

*   [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)
    *   New label for the highlight needle. [`highlightLabelText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelText) and [`highlightLabelSnapsToNeedlePivot`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelSnapsToNeedlePivot) and many other styling related properties for the HighlightLabel were added.

## **17.3.0 (March 2024)**

### igniteui-angular-charts

*   New Data Filtering via the [`initialFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialFilter) property. Apply filter expressions to filter the chart data to a subset of records. Can be used for drill down large data.

*   `XamRadialChart`
    *   New Label Mode
        The [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html) for the now exposes a [`labelMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategoryangleaxiscomponent.html#labelMode) property that allows you to further configure the location of the labels. This allows you to toggle between the default mode by selecting the `Center` enum, or use the new mode, `ClosestPoint`, which will bring the labels closer to the circular plot area.

### igniteui-angular-gauges

*   [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)
    *   New title/subtitle properties. [`titleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText), [`subtitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText) will appear near the bottom the gauge. In addition, the various title/subtitle font properties were added such as `TitleFontSize`, `TitleFontFamily`, `TitleFontStyle`, `TitleFontWeight` and [`titleExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleExtent). Finally, the new [`titleDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleDisplaysValue) will allow the value to correspond with the needle's position.
    *   New [`opticalScalingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingEnabled) and [`opticalScalingSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingSize) properties for the [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html). This new feature will manage the size at which labels, titles, and subtitles of the gauge have 100% optical scaling. You can read more about this new feature [here](radial-gauge.md#optical-scaling)
    *   New highlight needle was added. [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValue) and [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
*   [`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html)
    *   New highlight needle was added. [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#highlightValue) and [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxlineargaugecomponent.html#highlightValueDisplayMode) when both are provided a value and 'Overlay' setting, this will make the main needle to appear faded and a new needle will appear.
*   [`IgxBulletGraphComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html)
    *   The Performance bar will now reflect a difference between the value and new [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValue) when the [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxbulletgraphcomponent.html#highlightValueDisplayMode) is applied to the 'Overlay' setting. The highlight value will show a filtered/subset completed measured percentage as a filled in color while the remaining bar's appearance will appear faded to the assigned value, illustrating the performance in real-time.

## **17.2.0 (January 2024)**

### igniteui-angular-charts (Charts)

*   [Chart Highlight Filter](charts/features/chart-highlight-filter.md) - The [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) now expose a way to highlight and animate in and out of a subset of data. The display of this highlight depends on the series type. For column and area series, the subset will be shown on top of the total set of data where the subset will be colored by the actual brush of the series, and the total set will have a reduced opacity. For line series, the subset will be shown as a dotted line.

## **17.0.0 (November 2023)**

### igniteui-angular (Toolbar - Beta)

*   Save tool action has been added to save the chart to an image via the clipboard.
*   Vertical orientation has been added via the toolbar's [`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#orientation) property. By default the toolbar is horizontal, now the toolbar can be shown in vertical orientation where the tools will popup to the left/right respectfully.
*   Custom SVG icons support was added via the toolbar's `renderImageFromText` method, further enhancing custom tool creation.

## **16.1.0 (June 2023)**

### New Components

*   [Toolbar](menus/toolbar.md) - Beta. This component is a companion container for UI operations to be used primarily with our charting components. The toolbar will dynamically update with a preset of properties and tool items when linked to our [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) or [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) components. You'll be able to create custom tools for your project allowing end users to provide changes, offering an endless amount of customization.

### igniteui-angular-charts (Charts)

*   [ValueLayer](charts/features/chart-overlays.md#angular-value-layer) - A new series type named the [`IgxValueLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxvaluelayercomponent.html) is now exposed which can allow you to render an overlay for different focal points of the plotted data such as Maximum, Minimum, and Average. This is applied to the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) by adding to the new [`valueLines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#valueLines) collection.

*   It is now possible to apply a **dash array** to the different parts of the series of the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). You can apply this to the [series](charts/types/line-chart.md#angular-styling-line-chart) plotted in the chart, the [gridlines](charts/features/chart-axis-gridlines.md#angular-axis-gridlines-properties) of the chart, and the [trendlines](charts/features/chart-trendlines.md#angular-chart-trendlines-dash-array-example) of the series plotted in the chart.

## **16.0.0 (May 2023)**

*   Angular 16 support.

## **15.0.0 (December 2022)**

*   Angular 15 support.

## **14.2.0 (November 2022)**

Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use. These new chart improvements include:

*   Responsive layouts for horizontal label rotation based on browser / screen size.
*   Enhanced rendering for rounded labels on all platforms.
*   Added marker properties to StackedFragmentSeries.
*   Added [`shouldPanOnMaximumZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#shouldPanOnMaximumZoom) property.
*   New Category Axis Properties:
    *   ZoomMaximumCategoryRange
    *   ZoomMaximumItemSpan
    *   ZoomToCategoryRange
    *   ZoomToItemSpan
*   New [Chart Aggregation](charts/features/chart-data-aggregations.md) API for Grouping, Sorting and Summarizing Category string and numeric values, eliminating the need to pre-aggregate or calculate chart data:
    *   InitialSortDescriptions
    *   InitialSorts
    *   SortDescriptions
    *   InitialGroups
    *   InitialGroupDescriptions
    *   GroupDescriptions
    *   InitialSummaries
    *   InitialSummaryDescriptions
    *   SummaryDescriptions
    *   InitialGroupSortDescriptions
    *   GroupSorts
    *   GroupSortDescriptions

> \[!Note]
> The Chart's [Aggregation](charts/features/chart-data-aggregations.md) will not work when using [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedProperties) | [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedProperties) because these properties are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.

## **13.2.0 (June 2022)**

### igniteui-angular-charts (Charts)

*   Added the highly-configurable [DataLegend](charts/features/chart-data-legend.md) component, which works much like the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html), but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
*   Added the highly-configurable [DataToolTip](charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
*   Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#isTransitionInEnabled) property to true. From there, you can set the [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#transitionInDuration) property to determine how long your animation should take to complete and the [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatapiechartcomponent.html#transitionInMode) to determine the type of animation that takes place.
*   Added `AssigningCategoryStyle` event, is now available to all series in [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
*   New [`allowedPositions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#allowedPositions) enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
*   New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
    *   [`calloutCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcalloutlayercomponent.html#calloutCornerRadius) for CalloutLayer
    *   [`axisAnnotationBackgroundCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinalvaluelayercomponent.html#axisAnnotationBackgroundCornerRadius) for FinalValueLayer
    *   [`xAxisAnnotationBackgroundCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html#xAxisAnnotationBackgroundCornerRadius) and [`yAxisAnnotationBackgroundCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcrosshairlayercomponent.html#yAxisAnnotationBackgroundCornerRadius) for CrosshairLayer
*   New [`horizontalViewScrollbarMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#horizontalViewScrollbarMode) and [`verticalViewScrollbarMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#verticalViewScrollbarMode) enumeration to enable scrollbars in various ways. When paired with [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isVerticalZoomEnabled) or [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html#isHorizontalZoomEnabled), you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
*   New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericxaxiscomponent.html), [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxnumericyaxiscomponent.html), `PercentChangeAxis`).
*   New [`isSplineShapePartOfRange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isSplineShapePartOfRange) determines whether to include the spline shape in the axis range requested of the axis.
*   New [`xAxisMaximumGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMaximumGap), determines the maximum allowed value for the plotted series when using [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisGap). The gap determines the amount of space between columns or bars of plotted series.
*   New [`xAxisMinimumGapSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisMinimumGapSize), determines the minimum allowed pixel-based value for the plotted series when using [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#xAxisGap) to ensure there is always some spacing between each category.

<div class="divider--half"></div>

## **13.1.0 (November 2021)**

> \[!Note]
> Please ensure package "lit-html": "^2.0.0" or newer is added to your project for optimal compatibility.

### igniteui-angular-charts (Charts)

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

*   Changed [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#yAxisLabelLocation) property's type to **YAxisLabelLocation** from **AxisLabelLocation** in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   Changed [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelLocation) property's type to **XAxisLabelLocation** from **AxisLabelLocation** in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
*   Added [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxxychartcomponent.html#xAxisLabelLocation) property to [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   Added support for representing geographic series of [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicmapcomponent.html) in a legend
*   Added crosshair lines by default in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   Added crosshair annotations by default in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   Added final value annotation by default in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html)
*   Added new properties in Category Chart and Financial Chart:
    *   [`crosshairsLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsLineThickness) and other properties for customizing crosshairs lines
    *   [`crosshairsAnnotationXAxisBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#crosshairsAnnotationXAxisBackground) and other properties for customizing crosshairs annotations
    *   [`finalValueAnnotationsBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#finalValueAnnotationsBackground) and other properties for customizing final value annotations
    *   [`areaFillOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#areaFillOpacity) that allow changing opacity of series fill (e.g. Area chart)
    *   [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerThickness) that allows changing thickness of markers
*   Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
    *   [`markerAutomaticBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#markerAutomaticBehavior) that allows which marker type is assigned to multiple series in the same chart
    *   [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendItemBadgeShape) for setting badge shape of all series represented in a legend
    *   [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendItemBadgeMode) for setting badge complexity on all series in a legend
*   Added new properties in Series in Data Chart and Geographic Map:
    *   [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendItemBadgeShape) for setting badge shape on specific series represented in a legend
    *   [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendItemBadgeMode) for setting badge complexity on specific series in a legend
*   Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
*   Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's [`markerAutomaticBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#markerAutomaticBehavior) property to `SmartIndexed` enum value
*   Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendItemBadgeMode) property to `MatchSeries` enum value
*   Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

<div class="divider--half"></div>

## **11.2.0 (April 2021)**

### igniteui-angular-charts (Charts)

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html), [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), and [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html).

*   Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
*   Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
*   Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
*   Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
*   Changed marker's thickness to 2px from 1px
*   Changed marker's fill to match the marker's outline for [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpointseriescomponent.html), [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxbubbleseriescomponent.html), [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html), [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxpolarscatterseriescomponent.html). You can use set [`markerFillMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerFillMode) property to Normal to undo this change
*   Compressed labelling for the [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxtimexaxiscomponent.html) and [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxordinaltimexaxiscomponent.html)
*   New Marker Properties:
    *   series.[`markerFillMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerFillMode) - Can be set to `MatchMarkerOutline` so the marker depends on the outline
    *   series.[`markerFillOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerFillOpacity) - Can be set to a value 0 to 1
    *   series.[`markerOutlineMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlineMode) - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
*   New Series Property:
    *   series.[`outlineMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#outlineMode) - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
*   New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the [`computedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#computedPlotAreaMarginMode), listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
    *   chart.[`plotAreaMarginLeft`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#plotAreaMarginLeft)
    *   chart.[`plotAreaMarginTop`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#plotAreaMarginTop)
    *   chart.[`plotAreaMarginRight`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#plotAreaMarginRight)
    *   chart.[`plotAreaMarginBottom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#plotAreaMarginBottom)
    *   chart.[`computedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#computedPlotAreaMarginMode)
*   New Highlighting Properties
    *   chart.[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingMode) - Sets whether hovered or non-hovered series to fade, brighten
    *   chart.[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#highlightingBehavior) - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
    *   Note, in previous releases the highlighting was limited to fade on hover.
*   Added Highlighting Stacked, Scatter, Polar, Radial, and Shape series:
*   Added Annotation layers to Stacked, Scatter, Polar, Radial, and Shape series:
*   Added support for overriding the data source of individual stack fragments within a stacked series
*   Added custom style events to Stacked, Scatter, Range, Polar, Radial, and Shape series
*   Added support to automatically sync the vertical zoom to the series content
*   Added support to automatically expanding the horizontal margins of the chart based on the initial labels displayed
*   Redesigned color palette of series and markers:

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#7446B9">#7446B9</span> <br><span style="color:#9FB328">#9FB328</span> <br><span style="color:#F96232">#F96232</span> <br><span style="color:#2E9CA6">#2E9CA6</span> <br><span style="color:#DC3F76">#DC3F76</span> <br><span style="color:#FF9800">#FF9800</span> <br><span style="color:#3F51B5">#3F51B5</span> <br><span style="color:#439C47">#439C47</span> <br><span style="color:#795548">#795548</span> <br><span style="color:#9A9A9A">#9A9A9A</span> | <span style="color:#8bdc5c">#8bdc5c</span> <br><span style="color:#8b5bb1">#8b5bb1</span> <br><span style="color:#6db1ff">#6db1ff</span> <br><span style="color:#f8a15f">#f8a15f</span> <br><span style="color:#ee5879">#ee5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#f7d262">#f7d262</span> <br><span style="color:#8ce7d9">#8ce7d9</span> <br><span style="color:#e051a9">#e051a9</span> <br><span style="color:#a8a8b7">#a8a8b7</span> <br> |

for example:

|   |   |
|---|---|
| <img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" /> |
| <img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" /> |

#### Chart Legend

*   Added horizontal [`orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_layouts.igxtoolbarcomponent.html#orientation) property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
*   Added [`legendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriesviewercomponent.html#legendHighlightingMode) property - Enables series highlighting when hovering over legend items

### igniteui-angular-maps (GeoMap)

> \[!Note]
> These features are CTP

*   Added support for wrap around display of the map (scroll infinitely horizontally)
*   Added support for shifting display of some map series while wrapping around the coordinate origin
*   Added support for highlighting of the shape series
*   Added support for some annotation layers for the shape series

<div class="divider--half"></div>

## **8.2.12**

*   Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> \[!Note]
> These breaking changes were introduce in these packages and components only:

| Affected Packages | Affected Components |
| ------------------|---------------------|
| <a href="https://www.npmjs.com/package/igniteui-angular-excel/v/8.2.12" target="_blank">igniteui-angular-excel</a> | [Excel Library](excel-library.md)  |
| <a href="https://www.npmjs.com/package/igniteui-angular-spreadsheet/v/8.2.12" target="_blank">igniteui-angular-spreadsheet</a> | [Spreadsheet](spreadsheet-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-angular-maps/v/8.2.12" target="_blank">igniteui-angular-maps</a> | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)  |
| <a href="https://www.npmjs.com/package/igniteui-angular-gauges/v/8.2.12" target="_blank">igniteui-angular-gauges</a> |  [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)   |
| <a href="https://www.npmjs.com/package/igniteui-angular-charts/v/8.2.12" target="_blank">igniteui-angular-charts</a>| Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md)  |
| <a href="https://www.npmjs.com/package/igniteui-angular-core/v/8.2.12" target="_blank">igniteui-angular-core</a> | all classes and enums  |

*   Code After Changes

Now, you need to use just package names instead of full paths to API classes and enums.

Please also note that the name of the Data Grid component and its corresponding modules have also changed.

```ts
// gauges:
import { IgxLinearGauge } from "igniteui-angular-gauges";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges";
import { IgxLinearGraphRange } from "igniteui-angular-gauges";
import { IgxRadialGauge } from 'igniteui-angular-gauges}';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGaugeRange } from 'igniteui-angular-gauges';
import { SweepDirection } from 'igniteui-angular-core';
// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts";
import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxDataChartCoreModule } from "igniteui-angular-charts";
// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { IgxGeographicMapModule } from "igniteui-angular-maps";
```

*   Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-angular-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-angular-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-angular-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-angular-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-angular-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-angular-maps/ES5/igx-geographic-map-module";
```
