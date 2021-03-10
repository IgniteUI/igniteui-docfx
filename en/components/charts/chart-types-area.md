---
title: Angular Area Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Area Chart
_keywords: Angular Charts, Area Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataChart"]
---

# Angular Area Chart

Angular Area Chart, or Area Graph, is a type of category area graph that shows a collection of points connected by line segments with the area below the line filled in. The Y-Axis (labels on left side) show a numeric value, while the X-Axis (bottom labels) show a time-series or comparison category. Area Chart emphasizes the amount of change over a period of time or compares multiple items as well as the relationship of parts to a whole by displaying the total of the plotted values. You can include one or more data sets to compare, which would render as multiple areas in the chart.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-with-legend' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Area Chart with Legend"></iframe>
</div>

<div class="divider--half"></div>

## Angular Area Chart with Single Series

Angular Area Chart is often used to show the change of value over time such as the amount of renewable electricity produced since 2009 over a ten-year period for Europe, as shown in the example below.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-single-source' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Area Chart with Single Series"></iframe>
</div>

<div class="divider--half"></div>

## Angular Area Chart with Multiple Series

Angular Area Chart allows you to combine multiple series and compare or see how they change over time. All we need to do is bind to a data source containing the data for Europe, China and the USA, and the area chart will automatically update to fit the additional data.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Area Chart with Multiple Sources"></iframe>
</div>

<div class="divider--half"></div>

## Angular Styling Area Chart

Additional styling settings can be configured on Area Chart series such marker outlines, marker brushes, series brushes, and series outlines as demonstrated below.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-area-chart-styling' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Area Chart Styling"></iframe>
</div>

<div class="divider--half"></div>

## Angular Step Area Chart

The Step Area Chart belongs to a group of category charts and it is rendered using a collection of points connected by continuous vertical and horizontal lines with the area below lines filled in. Values are represented on the y-axis and categories are displayed on the x-axis. The step area chart emphasizes the amount of change over a period of time or compares multiple items. 

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/category-chart-step-area-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Step Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Range Area Chart

The Range Area Chart belongs to a group of range charts and is rendered using two lines with the area between the lines filled in. This type of series emphasizes the amount of change between low and high values for the same data point over a period of time. This is demonstrated in the sample below, showing the high and low temperature for New York City for a particular month in the year 2020.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-range-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Range Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stacked Area Chart

Stacked Area Charts are rendered using a collection of points connected by line segments, with the area below the line filled in and stacked on top of each other. Stacked Area charts follow all the same requirements as area charts, the only difference is that visually the shaded areas are stacked on top of each other. Renewable electricity produced between USA, Europe and China is demonstrated in the example below.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stacked 100 Area Series

The Stacked 100 Area Chart is identical to the Stacked Area Chart in all aspects except in their treatment of the values on y-axis. Instead of presenting a direct representation of the data, the Stacked 100 Area presents the data in terms of percent of the sum of all values in a data point. Sometimes the series represent part of a whole being changed over time e.g. a country’s energy consumption related to the sources from which it is produced. In such cases representing all stacked elements equally may be a better idea. 

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked 100 Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stacked Spline Area Series

Stacked Spline Area Charts are rendered using a collection of points connected by curved spline segments, with the area below the curved spline fill in and stacked on top of each other. Stacked Spline Area Charts follow all of the same requirements as area charts, with the only difference being that the visually shaded areas are stacked on top of each other.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-spline-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked Spline Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stacked 100 Spline Area Series

The Stacked 100 Spline Area Chart is identical to the Stacked Spline Area Chart in all aspects except for the treatment of the values on the y-axis. Instead of presenting a direct representation of the data, the Stacked 100 Spline Area Chart presents the data in terms of a percent of the sum of all values in a particular data point. Sometimes the chart represents part of a whole being changed over time. For example, a country's energy consumption related to the sources from which it is produced. In such cases, representing all stacked elements equally may be a better idea.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-spline-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stacked 100 Spline Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Radial Area Chart

The Radial Area Chart belongs to a group of radial charts and has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the Area Chart, but wraps the data points around a circular axis rather than stretching them along a horizontal line.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Radial Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Polar Area Chart

Polar Area Charts belong to a group of polar charts and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a straight line and then filling the area represented by the connected points. The Polar Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Polar Area Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Polar Spline Area Chart

Polar Spline Area Charts belong to a group of polar charts and have a shape of a filled polygon, where vertices or corners are located at the polar (angle/radius) coordinates of data points and are connected by a curved spline and then filling the area represented by the connected points. The Polar Spline Area Chart uses the same concepts of data plotting as the Scatter Marker Chart, but instead wraps the points around a circle and fills in the area that is drawn, rather than stretching the points and area filled along a horizontal line.

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-polar-spline-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Polar Spline Area Chart"></iframe>
</div>

<div class="divider--half"></div>

<!-- TODO list API links used in this topic 
## API Members
-->
