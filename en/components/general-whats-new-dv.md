---
title: Angular What's New | Ignite UI for Angular | Infragistics
_description: Learn about new features in the Ignite UI for Angular.
_keywords: What's New,  Ignite UI for Angular, Infragistics
---

# What's New in Ignite UI for Angular

This topic provides information about breaking changes in Ignite UI for Angular as well as how to update older code to latest API.

## Chart Features

This release introduces several new and improved visual design and configuration options for all of the chart components. e.g. Data Chart, Category Chart, and Financial Chart.

### Redesigned Chart Defaults:

-   New color palette for series/markers in all charts

eg.

| <img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" /> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" /> |

<div class="divider--half"></div>

-   Changed Bar/Column/Waterfall series to have square corners instead of rounded corners 
-   Changed Scatter High Density series’ colors for min/max heat properties
-   Changed Financial/Waterfall series’ colors for negative fill of their visuals 
-   Changed marker's thickness to 2px from 1px
-   Changed marker's fill to match the marker's outline for PointSeries, BubbleSeries, ScatterSeries, PolarScatterSeries 
    -   Note, you can use set `MarkerFillMode` property to Normal to undo this change
-   Compressed labelling for the TimeXAxis and OrdinalTimeXAxis
-   New Marker Properties:
    -   `MarkerFillMode` - Can be set to 'MatchMarkerOutline' so the marker depends on the outline
    -   `MarkerFillOpacity` - Can be set to a value 0 to 1
    -   `MarkerOutlineMode` - Can be set to 'MatchMarkerBrush' so the marker's outline depends on the fill brush color
-   New Series `OutlineMode` Property:
    -   Can be set to toggle the series outline visibility. Note, for Data Chart, the property is on the series
-   New Plot Area Margin Properties:
    -   `PlotAreaMarginLeft` 
    -   `PlotAreaMarginTop`
    -   `PlotAreaMarginRight`
    -   `PlotAreaMarginBottom`
    -   [`ComputedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/computedplotareamarginmode.html)
    -   The plot area margin properties define the bleed over area introduced into the viewport when the chart is at the default zoom level. A common use case is to provide space between the axes and first/last data points. Note, the [`ComputedPlotAreaMarginMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/computedplotareamarginmode.html), listed below, will automatically set the margin when markers are enabled. The others are designed to specify a `Double` to represent the thickness, where PlotAreaMarginLeft etc. adjusts the space to all four sides of the chart.   
-   New Highlighting Properties
    -   [`HighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/highlightingmode.html) - Sets whether hovered or non-hovered series to fade, brighten
    -   `HighlightingBehavior` - Sets whether the series highlights depending on mouse position eg. directly over or nearest item
    -   Note, in previous releases the highlighting was limited to fade on hover. 
-   Added Highlighting for the following series:
    -   Stacked
    -   Scatter
    -   Polar
    -   Radial 
    -   Shape
-   Added Annotation layers to the following series:
    -   Stacked
    -   Scatter
    -   Polar
    -   Radial
    -   Shape
-   Added support for overriding the data source of individual stack fragments within a stacked series 
-   Added custom style events to Stacked, Scatter, Range, Polar, Radial, and Shape series
-   Added support to automatically sync the vertical zoom to the series content
-   Added support to automatically expanding the horizontal margins of the chart based on the initial labels displayed 

### Chart Legend Features:

-   Added Horizontal Orientation for ItemLegend
    -   The following chart types can use ItemLegend in horizontal orientation:
        -   Bubble
        -   Donut
        -   Pie 
-   [`LegendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/legendhighlightingmode.html) - Enables series highlighting when hovering over legend items

### Geographic Map Features (CTP):

-   Added support for wrap around display of the map (scroll infinitely horizontally)  
-   Added support for shifting display of some map series while wrapping around the coordinate origin  
-   Added support for highlighting of the shape series
-   Added support for some annotation layers for the shape series
