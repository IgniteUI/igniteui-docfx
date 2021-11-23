---
title: Angular What's New | Ignite UI for Angular | Infragistics
_description: Learn about new features in the Ignite UI for Angular.
_keywords: Changelog, What's New,  Ignite UI for Angular, Infragistics
---

# Ignite UI for Angular Changelog (Data Visualization)

<div class="divider--half"></div>

<!-- Angular -->

> [!NOTE]
> This file is specific to igniteui-angular-\* packages only. (eg. igniteui-angular-charts)
>
> For additional changes, please see [Ignite UI Angular Changes](https://github.com/igniteui/igniteui-angular/blob/master/CHANGELOG.md)

<!-- end: Angular -->

<div class="divider--half"></div>


All notable changes for each version of this project will be documented in this file.

## **13.0.0**

### Charts & Maps

This release introduces a few improvements and simplifications to visual design and configuration options for the geographic map and all chart components.

* Changed `YAxisLabelLocation` property's type to **YAxisLabelLocation** from **AxisLabelLocation** in `FinancialChart` and `CategoryChart`
* Changed `XAxisLabelLocation` property's type to **XAxisLabelLocation** from **AxisLabelLocation** in `FinancialChart`
* Added `XAxisLabelLocation` property to `CategoryChart`
* Added support for representing geographic series of `XamGeographicMap` in a legend
* Added crosshair lines by default in `FinancialChart` and `CategoryChart`
* Added crosshair annotations by default in `FinancialChart` and `CategoryChart`
* Added final value annotation by default in `FinancialChart`
* Added new properties in Category Chart and Financial Chart:
   - `CrosshairsLineThickness` and other properties for customizing crosshairs lines
   - `CrosshairsAnnotationXAxisBackground` and other properties for customizing crosshairs annotations
   - `FinalValueAnnotationsBackground` and other properties for customizing final value annotations
   - `AreaFillOpacity` that allow changing opacity of series fill (e.g. Area chart)
   - `MarkerThickness` that allows changing thickness of markers
* Added new properties in Category Chart, Financial Chart, Data Chart, and Geographic Map:
   - `MarkerAutomaticBehavior` that allows which marker type is assigned to multiple series in the same chart
   - `LegendItemBadgeShape` for setting badge shape of all series represented in a legend
   - `LegendItemBadgeMode` for setting badge complexity on all series in a legend
* Added new properties in Series in Data Chart and Geographic Map:
   - `LegendItemBadgeShape` for setting badge shape on specific series represented in a legend
   - `LegendItemBadgeMode` for setting badge complexity on specific series in a legend
* Changed default vertical crosshair line stroke from <span style="color:#000000">#000000</span> to <span style="color:#BBBBBB">#BBBBBB</span> in category chart and series
* Changed shape of markers to circle for all series plotted in the same chart. This can be reverted by setting chart's `MarkerAutomaticBehavior` property to `SmartIndexed` enum value
* Simplified shapes of series in chart's legend to display only circle, line, or square. This can be reverted by setting chart's `LegendItemBadgeMode` property to `MatchSeries` enum value
* Changed color palette of series and markers displayed in all charts to improve accessibility

Old brushes/outlines | New outline/brushes
-------------------- | -------------------
<span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8B5BB1">#8B5BB1</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#F8A15F">#F8A15F</span> <br><span style="color:#EE5879">#EE5879</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F7D262">#F7D262</span> <br><span style="color:#8CE7D9">#8CE7D9</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#A8A8B7">#A8A8B7</span> | <span style="color:#8BDC5C">#8BDC5C</span> <br><span style="color:#8961A9">#8961A9</span> <br><span style="color:#6DB1FF">#6DB1FF</span> <br><span style="color:#82E9D9">#82E9D9</span> <br><span style="color:#EA3C63">#EA3C63</span> <br><span style="color:#735656">#735656</span> <br><span style="color:#F8CE4F">#F8CE4F</span> <br><span style="color:#A8A8B7">#A8A8B7</span> <br><span style="color:#E051A9">#E051A9</span> <br><span style="color:#FF903B">#FF903B</span> <br>


## **11.2.0**

### Charts

This release introduces several new and improved visual design and configuration options for all of the chart components. e.g. Data Chart, Category Chart, and Financial Chart.

Redesigned Chart Defaults:

-   New color palette for series/markers in all charts. - All types of charts/series have new colors for brush/fill and outlines

| Old series brushes outlines | New series outline brushes |
| --------------------------- | -------------------------- |
| `Color_001=#7446B9`         | `Color_001=#8bdc5c`        |
| `Color_002=#9FB328`         | `Color_002=#8b5bb1`        |
| `Color_003=#F96232`         | `Color_003=#6db1ff`        |
| `Color_004=#2E9CA6`         | `Color_004=#f8a15f`        |
| `Color_005=#DC3F76`         | `Color_005=#ee5879`        |
| `Color_006=#FF9800`         | `Color_006=#735656`        |
| `Color_007=#3F51B5`         | `Color_007=#f7d262`        |
| `Color_008=#439C47`         | `Color_008=#8ce7d9`        |
| `Color_009=#795548`         | `Color_009=#e051a9`        |
| `Color_010=#9A9A9A`         | `Color_010=#a8a8b7`        |

eg.

| <img class="responsive-img" src="../images/chartDefaults1.png" /> | <img class="responsive-img" src="../images/chartDefaults2.png" /> |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img class="responsive-img" src="../images/chartDefaults3.png" /> | <img class="responsive-img" src="../images/chartDefaults4.png" /> |

<div class="divider--half"></div>

-   Changed Bar/Column/Waterfall series to have square corners instead of rounded corners
-   Changed Scatter High Density series’ colors for min/max heat properties

    | Old heat min color | New heat min color |
    | ------------------ | ------------------ |
    | `#FF7446B9`        | `#ff8b5bb1`        |

    | Old heat max color | New heat max color |
    | ------------------ | ------------------ |
    | `#FFC62828`        | `#ffee5879`        |

-   Changed Financial/Waterfall series’ colors for negative fill of their visuals

    | Old negative brush | new negative brush |
    | ------------------ | ------------------ |
    | `#FFC62828`        | `#ffee5879`        |

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

### Chart Legend

-   Added Horizontal Orientation for ItemLegend
    -   The following chart types can use ItemLegend in horizontal orientation:
        -   Bubble
        -   Donut
        -   Pie
-   [`LegendHighlightingMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/legendhighlightingmode.html) - Enables series highlighting when hovering over legend items

### Geographic Map

> [!NOTE]
> These features are CTP

-   Added support for wrap around display of the map (scroll infinitely horizontally)
-   Added support for shifting display of some map series while wrapping around the coordinate origin
-   Added support for highlighting of the shape series
-   Added support for some annotation layers for the shape series

<div class="divider--half"></div>

<div class="divider--half"></div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## **8.2.12**

-   Changed Import Statements

Import statements have been simplified to use just package names instead of full paths to API classes and enums.

> [!NOTE]
> These breaking changes were introduce in these packages and components only:

| Affected Packages                                                                                                              | Affected Components                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| <a href="https://www.npmjs.com/package/igniteui-angular-excel/v/8.2.12" target="_blank">igniteui-angular-excel</a>             | [Excel Library](excel-library.md)                                                                           |
| <a href="https://www.npmjs.com/package/igniteui-angular-spreadsheet/v/8.2.12" target="_blank">igniteui-angular-spreadsheet</a> | [Spreadsheet](spreadsheet-overview.md)                                                                      |
| <a href="https://www.npmjs.com/package/igniteui-angular-maps/v/8.2.12" target="_blank">igniteui-angular-maps</a>               | [Geo Map](geo-map.md), [Treemap](charts/types/treemap-chart.md)                                             |
| <a href="https://www.npmjs.com/package/igniteui-angular-gauges/v/8.2.12" target="_blank">igniteui-angular-gauges</a>           | [Bullet Graph](bullet-graph.md), [Linear Gauge](linear-gauge.md), [Radial Gauge](radial-gauge.md)           |
| <a href="https://www.npmjs.com/package/igniteui-angular-charts/v/8.2.12" target="_blank">igniteui-angular-charts</a>           | Category Chart, Data Chart, Donut Chart, Financial Chart], Pie Chart, [Zoom Slider](zoomslider-overview.md) |
| <a href="https://www.npmjs.com/package/igniteui-angular-core/v/8.2.12" target="_blank">igniteui-angular-core</a>               | all classes and enums                                                                                       |

-   Code After Changes

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

-   Code Before Changes

Before, you had to import using full paths to API classes and enums:

```ts
// gauges:
import { IgxLinearGaugeComponent } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-component';
import { IgxLinearGaugeModule } from 'igniteui-webcomponents-gauges/ES5/igx-linear-gauge-module';
import { IgxLinearGraphRange } from 'igniteui-webcomponents-gauges/ES5/igx-linear-graph-range';

import { IgxRadialGaugeComponent } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-component";
import { IgxRadialGaugeModule } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-module";
import { IgxRadialGaugeRange } from "igniteui-webcomponents-gauges/ES5/igx-radial-gauge-range";
import { SweepDirection } from "igniteui-webcomponents-core/ES5/SweepDirection";

// charts:
import { IgxFinancialChartComponent } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-component";
import { IgxFinancialChartModule } from "igniteui-webcomponents-charts/ES5/igx-financial-chart-module";
import { IgxDataChartComponent } from "igniteui-webcomponents-charts/ES5/igx-data-chart-component";
import { IgxDataChartCoreModule } from "igniteui-webcomponents-charts/ES5/igx-data-chart-core-module";

// maps:
import { IgxGeographicMapComponent } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-component";
import { IgxGeographicMapModule } from "igniteui-webcomponents-maps/ES5/igx-geographic-map-module";
```

<!-- end: Angular, React, WebComponents -->
