---
title: Angular What's New | Ignite UI for Angular | Infragistics
_description: Learn about new features in the Ignite UI for Angular.
_keywords: Changelog, What's New,  Ignite UI for Angular, Infragistics
mentionedTypes: ["SeriesViewer", "XYChart", "DomainChart", "XamDataChart", "XamGeographicMap", "DatePicker", "MultiColumnComboBox", "CategoryChart", "CrosshairLayer", "FinalValueLayer", "CalloutLayer", "DataLegend"]
namespace: Infragistics.Controls.Charts
---

# Ignite UI for Angular Changelog

All notable changes for each version of Ignite UI for Angular are documented on this page.

> \[!Note]
> This topic discusses changes only for components that are not included in the igniteui-angular package.
> For changes specific to igniteui-angular components, please see [Ignite UI Angular Changes](https://github.com/igniteui/igniteui-angular/blob/master/changelog.md)

## **15.0.0**

*   Angular 15 support.

## **14.2.0**

Added significant improvements to default behaviors, and refined the Category Chart API to make it easier to use.

These new chart improvements include:

*   Responsive layouts for horizontal label rotation based on browser / screen size.
*   Enhanced rendering for rounded labels on all platforms.
*   Added marker properties to StackedFragmentSeries.
*   Added [`shouldPanOnMaximumZoom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#shouldpanonmaximumzoom) property.
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
> The Chart's [Aggregation](charts/features/chart-data-aggregations.md) will not work when using [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#includedproperties) | [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#excludedproperties) because these properties are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.

## **13.2.0**

### igniteui-angular-charts

*   Added the highly-configurable [DataLegend](charts/features/chart-data-legend.md) component, which works much like the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html), but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values.
*   Added the highly-configurable [DataToolTip](charts/features/chart-data-tooltip.md) which displays values and titles of series as well as legend badges of series in a tooltip. This is now the default tooltip for all chart types.
*   Added animation and transition-in support for Stacked Series. Animations can be enabled by setting the [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#istransitioninenabled) property to true. From there, you can set the [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninduration) property to determine how long your animation should take to complete and the [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#transitioninmode) to determine the type of animation that takes place.
*   Added `AssigningCategoryStyle` event, is now available to all series in `DataChart`. This event is handled when you want to conditionally configure aspects of the series items such as `Fill` background-color and highlighting.
*   New [`allowedPositions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#allowedpositions) enumeration for CalloutLayer. Used to limit where the callouts are to be placed within the chart. By default, the callouts are intelligently placed in the best place but this used to force for example `TopLeft`, `TopRight`, `BottomLeft` or `BottomRight`.
*   New corner radius properties added for Annotation Layers; used to round-out the corners of each of the callouts. Note, a corner radius has now been added by default.
    *   [`calloutCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcalloutlayercomponent.html#calloutcornerradius) for CalloutLayer
    *   [`axisAnnotationBackgroundCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinalvaluelayercomponent.html#axisannotationbackgroundcornerradius) for FinalValueLayer
    *   [`xAxisAnnotationBackgroundCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#xaxisannotationbackgroundcornerradius) and [`yAxisAnnotationBackgroundCornerRadius`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcrosshairlayercomponent.html#yaxisannotationbackgroundcornerradius) for CrosshairLayer
*   New [`horizontalViewScrollbarMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#horizontalviewscrollbarmode) and [`verticalViewScrollbarMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#verticalviewscrollbarmode) enumeration to enable scrollbars in various ways. When paired with [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#isverticalzoomenabled) or [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#ishorizontalzoomenabled), you'll be able to persist or fade-in and out the scrollbars along the axes to navigate the chart.
*   New `FavorLabellingScaleEnd`, determines whether the axis should favor emitting a label at the end of the scale. Only compatible with numeric axes (e.g. [`IgxNumericXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html), [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html), `PercentChangeAxis`).
*   New [`isSplineShapePartOfRange`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#issplineshapepartofrange) determines whether to include the spline shape in the axis range requested of the axis.
*   New [`xAxisMaximumGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxismaximumgap), determines the maximum allowed value for the plotted series when using [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap). The gap determines the amount of space between columns or bars of plotted series.
*   New [`xAxisMinimumGapSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminimumgapsize), determines the minimum allowed pixel-based value for the plotted series when using [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) to ensure there is always some spacing between each category.

<div class="divider--half"></div>

## **13.1.0**

> \[!Note]
> Please ensure package "lit-html": "^2.0.0" or newer is added to your project for optimal compatibility.

### igniteui-angular-charts

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

*   Changed [`yAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabellocation) property's type to **YAxisLabelLocation** from **AxisLabelLocation** in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
*   Changed [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabellocation) property's type to **XAxisLabelLocation** from **AxisLabelLocation** in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
*   Added [`xAxisLabelLocation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabellocation) property to [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
*   Added support for representing geographic series of [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html) in a legend
*   Added crosshair lines by default in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
*   Added crosshair annotations by default in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) and [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
*   Added final value annotation by default in [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
*   Added new properties in Category Chart and Financial Chart:
    *   [`crosshairsLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairslinethickness) and other properties for customizing crosshairs lines
    *   [`crosshairsAnnotationXAxisBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairsannotationxaxisbackground) and other properties for customizing crosshairs annotations
    *   [`finalValueAnnotationsBackground`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#finalvalueannotationsbackground) and other properties for customizing final value annotations
    *   [`areaFillOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#areafillopacity) that allow changing opacity of series fill (e.g. Area chart)
    *   [`markerThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerthickness) that allows changing thickness of markers
*   Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
    *   [`markerAutomaticBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#markerautomaticbehavior) that allows which marker type is assigned to multiple series in the same chart
    *   [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgeshape) for setting badge shape of all series represented in a legend
    *   [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgemode) for setting badge complexity on all series in a legend
*   Added new properties in Series in Data Chart and Geographic Map:
    *   [`legendItemBadgeShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgeshape) for setting badge shape on specific series represented in a legend
    *   [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgemode) for setting badge complexity on specific series in a legend
*   Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
*   Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's [`markerAutomaticBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#markerautomaticbehavior) property to `SmartIndexed` enum value
*   Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's [`legendItemBadgeMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legenditembadgemode) property to `MatchSeries` enum value
*   Changed color palette of series and markers displayed in all charts to improve accessibility

| Old brushes/outlines | New outline/brushes |
| -------------------- | ------------------- |
| <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br> |

<div class="divider--half"></div>

## **11.2.0**

### igniteui-angular-charts

This release introduces several new and improved visual design and configuration options for all of the chart components, e.g. `DataChart`, [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html), and [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html).

*   Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
*   Changed Scatter High Density series’ colors for heat min property from <span style="color:#8a5bb1">#8a5bb1</span> to <span style="color:#000000">#000000</span>
*   Changed Scatter High Density series’ colors for heat max property from <span style="color:#ee5879">#ee5879</span> to <span style="color:#ee5879">#ee5879</span>
*   Changed Financial/Waterfall series’ `NegativeBrush` and `NegativeOutline` properties from <span style="color:#C62828">#C62828</span> to <span style="color:#ee5879">#ee5879</span>
*   Changed marker's thickness to 2px from 1px
*   Changed marker's fill to match the marker's outline for [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html), [`IgxBubbleSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbubbleseriescomponent.html), [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html), [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html). You can use set [`markerFillMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerfillmode) property to Normal to undo this change
*   Compressed labelling for the [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) and [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)
*   New Marker Properties:
    *   series.[`markerFillMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerfillmode) - Can be set to `MatchMarkerOutline` so the marker depends on the outline
    *   series.[`markerFillOpacity`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markerfillopacity) - Can be set to a value 0 to 1
    *   series.[`markerOutlineMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#markeroutlinemode) - Can be set to `MatchMarkerBrush` so the marker's outline depends on the fill brush color
*   New Series Property:
    *   series.[`outlineMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#outlinemode) - Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
*   New chart properties that define bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the [`computedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#computedplotareamarginmode), listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart:
    *   chart.[`plotAreaMarginLeft`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamarginleft)
    *   chart.[`plotAreaMarginTop`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamargintop)
    *   chart.[`plotAreaMarginRight`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamarginright)
    *   chart.[`plotAreaMarginBottom`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#plotareamarginbottom)
    *   chart.[`computedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#computedplotareamarginmode)
*   New Highlighting Properties
    *   chart.[`highlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#highlightingmode) - Sets whether hovered or non-hovered series to fade, brighten
    *   chart.[`highlightingBehavior`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#highlightingbehavior) - Sets whether the series highlights depending on mouse position e.g. directly over or nearest item
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

*   Added horizontal [`Orientation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/orientation.html) property to ItemLegend that can be used with Bubble, Donut, and Pie Chart
*   Added [`legendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#legendhighlightingmode) property - Enables series highlighting when hovering over legend items

### igniteui-angular-maps

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
