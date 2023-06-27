---
title: Angular Scatter Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Scatter Chart
_keywords: Angular Charts, Scatter Chart, Infragistics
mentionedTypes: ["XamDataChart", "ScatterSeries", "ScatterLineSeries", "ScatterSplineSeries", "HighDensityScatterSeries", "ScatterAreaSeries", "ScatterContourSeries", 'Series']
namespace: Infragistics.Controls.Charts
---

# Angular Scatter Charts

The Ignite UI for Angular Scatter Chart belongs to a group of charts that show the relationship among items in distinct series of data or to plot data items using numeric x and y coordinates. These charts draw attention to uneven intervals or clusters of data. They are often used to plot scientific data, and can highlight the deviation of collected data from predicted results. Also, you can use them to organize data chronologically (even if the data is not in chronological order).

## Angular Scatter Marker Chart

Angular Scatter Marker Chart renders as a collection of markers, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Scatter Marker Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-point-chart"
                                                 github-src="charts/data-chart/scatter-point-chart">
</code-view>


<div class="divider--half"></div>

## Angular Scatter Line Chart

Angular Scatter Line Chart renders as a collection of markers connected by a straight lines, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Scatter Line Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-line-chart"
                                                 github-src="charts/data-chart/scatter-line-chart">
</code-view>


<div class="divider--half"></div>

## Angular Scatter Spline Chart

Angular Scatter Spline Chart renders as a collection of markers connected by a curved spline, each having a pair of numeric X/Y values that determines its location in the Cartesian coordinate system. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Scatter Spline Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/scatter-spline-chart"
                                                 github-src="charts/data-chart/scatter-spline-chart">
</code-view>


<div class="divider--half"></div>

## Angular Scatter High Density Chart

Use the Angular Scatter High Density (HD) Chart to bind and show scatter data ranging from thousands to millions of data points with very little loading time. Due to this chart type being designed for such a large amount of points, it is visualized as tiny dots as opposed to full sized markers, and displays areas with the most data using a higher color density representing a cluster of data points. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Scatter HD Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/type-scatter-hd-series"
                                                 github-src="charts/data-chart/type-scatter-hd-series">
</code-view>


<div class="divider--half"></div>

## Angular Scatter Area Chart

Angular Scatter Area Chart draws a colored surface based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Scatter Area Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/type-scatter-area-series"
                                                 github-src="charts/data-chart/type-scatter-area-series">
</code-view>


<div class="divider--half"></div>

## Angular Scatter Contour Chart

Angular Scatter Contour Chart draws colored contour lines based on a triangulation of X and Y data with a numeric data value assigned to each point. This chart is useful for rendering heat maps, magnetic field strength or Wi-Fi strength in an office. You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) control by binding your data to a [`IgxScatterContourSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html), as shown in the example below:

<code-view style="height: 600px" alt="Angular Scatter Contour Chart"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/type-scatter-contour-series"
                                                 github-src="charts/data-chart/type-scatter-contour-series">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

*   [Area Chart](area-chart.md)
*   [Bubble Chart](bubble-chart.md)
*   [Line Chart](line-chart.md)
*   [Spline Chart](spline-chart.md)
*   [Shape Chart](shape-chart.md)

## API References

The following table lists API members mentioned in the above sections:

|Chart Type                  | Control Name   | API Members |
|----------------------------|----------------|------------------------ |
|Scatter Marker              | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterseriescomponent.html) |
|Scatter Line                | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterlineseriescomponent.html) |
|Scatter Spline              | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterSplineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattersplineseriescomponent.html) |
|High Density Scatter        | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxhighdensityscatterseriescomponent.html) |
|Scatter Area                | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscatterareaseriescomponent.html) |
|Scatter Contour             | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) | [`IgxScatterContourSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxscattercontourseriescomponent.html) |
