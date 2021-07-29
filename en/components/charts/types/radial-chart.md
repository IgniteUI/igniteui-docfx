---
title: Angular Radial Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Radial Chart
_keywords: Angular Charts, Radial Chart, Infragistics
mentionedTypes: ["XamDataChart", "RadialLineSeries"]
---

# Angular Radial Chart

The Ignite UI for Angular Radial Chart takes data and render it as collection of data points wrapped around a circle (rather than stretching along a horizontal line). Radial Chart is also mapping a list of categories from the minimum to the maximum of the extent of the chart, and support the category grouping mechanisms.

## Angular Radial Area Chart

The Angular Radial Area Chart has a shape of a filled polygon that is bound by a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Area Chart](area-chart.md), but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html), as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart"
           alt="Angular Radial Area Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Radial Column Chart

The Radial Column Chart is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Column Chart](column-chart.md), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="Angular Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Radial Line Chart

The Angular Radial Line Chart has renders as a collection of straight lines connecting data points. This chart type uses the same concept of data plotting as the [Line Chart](line-chart.md), but wraps the data points around a circular axis rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-line-chart"
           alt="Angular Radial Line Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Radial Pie Chart

The Radial Pie Chart uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart"
           alt="Angular Radial Pie Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Radial Chart Styling

Once our radial chart is created, we may want to make some further styling customizations such as a change of the line colors, marker types, or outline colors of those markers.

This example demonstrates how to customize Angular Radial Chart.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-area-chart-styling"
           alt="Angular Radial Area Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Chart](area-chart.md)
-   [Column Chart](column-chart.md)
-   [Donut Chart](donut-chart.md)
-   [Line Chart](line-chart.md)
-   [Pie Chart](pie-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   [`IgxRadialAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialareaseriescomponent.html)
-   [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html)
-   [`IgxRadialLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradiallineseriescomponent.html)
-   [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html)
-   `DataSource`
-   `AngleAxisName`
-   `ValueAxisName`
-   [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredradialseriescomponent.html#valuememberpath)
-   [`IgxCategoryAngleAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryangleaxiscomponent.html)
-   [`IgxNumericRadiusAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericradiusaxiscomponent.html)
