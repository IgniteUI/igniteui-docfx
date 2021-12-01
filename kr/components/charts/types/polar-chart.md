---
title: Angular Polar Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Polar Chart
_keywords: Angular Charts, Polar Chart, Infragistics
mentionedTypes: ["XamDataChart", "PolarAreaSeries"]
---

# Angular Polar Chart

The Ignite UI for Angular Polar Chart uses the polar coordinate system (angle, radius) instead of the Cartesian coordinate system (x, y) to plot data in chart. In other words, Polar Chart takes concepts of [Scatter Series](scatter-chart.md) and wrap them around a circle rather than stretching data points horizontally.

Polar Chart draws attention to uneven intervals or clusters of data. It is often used to plot scientific data (e.g. wind direction and speed, direction, and strength of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

## Angular Polar Area Chart

The Polar Area Chart renders using a collection of polygons connecting data points and it uses the same concepts of data plotting as the [Category Area Chart](area-chart.md#angular-area-chart-example) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart"
           github-src="charts/data-chart/polar-area-chart"
           alt="Angular Polar Area Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Polar Spline Area Chart

The Polar Spline Area Chart renders also as a collection of polygons but they have curved splines connecting data points instead of straight lines like [Polar Area Chart](polar-chart.md#angular-polar-area-chart) does.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-spline-area-chart"
           github-src="charts/data-chart/polar-spline-area-chart"
           alt="Angular Polar Area Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Polar Marker Chart

The Polar Marker Chart renders using a collection of markers representing data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Marker Chart](scatter-chart.md#angular-scatter-marker-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-scatter-chart"
           github-src="charts/data-chart/polar-scatter-chart"
           alt="Angular Polar Marker Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Polar Line Chart

The Polar Line Chart renders using a collection of straight lines connecting data points in polar (angle/radius) coordinate system. This chart uses the same concepts of data plotting as the [Scatter Line Chart](scatter-chart.md#angular-scatter-line-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-line-chart"
           github-src="charts/data-chart/polar-line-chart"
           alt="Angular Polar Line Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Polar Spline Chart

The Polar Spline Chart renders using a collection of curved splines connecting data points in polar (angle/radius) coordinate system. This Chart uses the same concepts of data plotting as the [Scatter Spline Chart](scatter-chart.md#angular-scatter-spline-chart) with the difference that the visualization wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxPolarSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-spline-chart"
           github-src="charts/data-chart/polar-spline-chart"
           alt="Angular Polar Spline Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Polar Chart Styling

Once our polar chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-polar-area-chart-styling"
           github-src="charts/data-chart/polar-area-chart-styling"
           alt="Angular Polar Area Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Chart](area-chart.md)
-   [Donut Chart](donut-chart.md)
-   [Line Chart](line-chart.md)
-   [Pie Chart](pie-chart.md)
-   [Radial Chart](radial-chart.md)
-   [Scatter Chart](scatter-chart.md)
-   [Spline Chart](spline-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxPolarAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarareaseriescomponent.html)
-   [`IgxPolarLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarlineseriescomponent.html)
-   [`IgxPolarSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineseriescomponent.html)
-   [`IgxPolarSplineAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarsplineareaseriescomponent.html)
-   [`IgxPolarScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarscatterseriescomponent.html)
-   `DataSource`
-   `AngleAxisName`
-   [`angleMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#anglememberpath)
-   `RadiusAxisName`
-   [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpolarbasecomponent.html#radiusmemberpath)
-   [`IgxNumericAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericangleaxiscomponent.html)
-   [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
