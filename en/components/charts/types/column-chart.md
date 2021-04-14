---
title: Angular Column Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Column Chart
_keywords: Angular Charts, Column Chart, Column Graph, Vertical Bar Chart, Infragistics
mentionedTypes: ["CategoryChart", "XamDataChart", "ColumnSeries", "WaterfallSeries", "StackedColumnSeries", "Stacked100ColumnSeries", "RangeColumnSeries", "RadialColumnSeries"]
---

# Angular Column Chart

The Ignite UI for Angular Column Char, Column Graph, or Vertical Bar Chart is among the most common category chart types used to quickly compare frequency, count, total, or average of data in different categories with data encoded by columns with equal widths but different heights. These columns extend from the bottom to top of the chart towards the values of data points. This chart emphasizes the amount of change over a period of time or compares multiple items. Column Chart is very similar to [Bar Chart](bar-chart.md) except that Column Chart renders in vertical orientation (up and down) while [Bar Chart](bar-chart.md) has horizontal orientation (left to right) or 90 degrees clockwise rotation.

## Angular Column Chart Example

The Angular Category Column Chart groups data items from multiple data sources into categories and renders them as vertical columns or rectangles. Values are represented on the Y-Axis and categories are displayed on the X-Axis.

You can create this type of chart in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control by binding your data and setting [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) to Column enum, as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="Angular Column Chart Multiple Sources" >
</code-view>

<div class="divider--half"></div>

## Column Charts Recommendations

### Column Charts Use Cases

There are several uses cases for Column Charts. When you:

-   Need to compare data values of related categories.
-   Need to compare data over a time period.
-   Need to display negative values as well as positive values in the same data set.
-   Have a large, high-volume data set that fits well with the chart interactions like Panning, Zooming, and Drill-down.

### Column Charts Best Practices:

-   Always start the Y-Axis (left or right axis) at 0 so data comparison is accurate.
-   Order time-series data from left to right.

### When Not to Use Column Charts

-   You have many (more than 10 or 12) series of data. Your goal is to ensure the chart is readable.

### Column Charts Data Structure:

-   The data model must contain at least one numeric property.
-   The data model may contain an options string or date-time property for labels.
-   The data source should contain at least one data item.

## Angular Column Chart with Single Series

Column Chart belongs to a group of Category Series and it is rendered using a collection of rectangles that extend from the bottom to top of the chart towards the values of data points.

You can create this type of chart in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) property to [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-single-source"
           alt="Angular Column Chart with Single Source" >
</code-view>

<div class="divider--half"></div>

## Angular Column Chart with Multiple Series

The Column Chart is able to render multiple columns per category for comparison purposes. You can create this type of chart in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control by binding your data and setting the [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) property to [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-multiple-sources"
           alt="Angular Column Chart with Multiple Sources"
           github-src="charts/category-chart/column-chart-multiple-sources" >
</code-view>

<div class="divider--half"></div>

## Angular Column Chart Styling

The Angular Column Chart has many options for styling and modification of the visual appearance. For example, the sample below demonstrates changing appearance of columns and using [Marker Templates](../features/chart-markers.md) to display the value of an item above (or below) its corresponding column.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-styling"
           alt="Angular Column Chart Styling"
           github-src="charts/category-chart/column-chart-styling">
</code-view>

<div class="divider--half"></div>

## Advanced Types of Column Charts

The following sections explain more advanced types of Angular Column Charts that can be created using the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control instead of [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control with simplified API.

## Angular Waterfall Chart

The Waterfall Chart belongs to a group of category charts and it is rendered using a collection of vertical columns that show the difference between consecutive data points. The columns are color coded for distinguishing between positive and negative changes in value. The Waterfall Chart is similar in appearance to the [Range Column Chart](column-chart.md#angular-range-column-chart), but it requires only one numeric data column rather than two columns for each data point.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxWaterfallSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwaterfallseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-waterfall-chart"
           alt="Angular Waterfall Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Stacked Column Chart

The Stacked Column Chart is similar to the [Category Column Chart](column-chart.md#angular-column-chart-example) in all aspects, except the series are represented on top of one another rather than to the side. The Stacked Column Chart is used to show comparing results between series. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the Y-Axis, and all negative values are grouped on the negative side of the Y-Axis. The Stacked Column Chart uses the same concepts of data plotting as the [Stacked Bar Chart](stacked-chart.md#angular-stacked-bar-chart) but data points are stacked along vertical line (Y-Axis) rather than along horizontal line (X-Axis).

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxStackedBarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-column-chart"
           alt="Angular Stacked Column Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Stacked 100% Column Chart

The Stacked 100% Column Chart is identical to the [Stacked Column Chart](stacked-chart.md#angular-stacked-column-chart) in all aspects except in their treatment of the values on Y-Axis. Instead of presenting a direct representation of the data, the Stacked 100 Column Chart presents the data in terms of percent of the sum of all values in a data point.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxStacked100BarSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100barseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-stacked-100-column-chart"
           alt="Angular Stacked 100 Column Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Range Column Chart

The Angular Range Column Chart belongs to a group of range charts and is rendered using vertical rectangles that can appear in the middle of the plot area of the chart, rather than stretching from the bottom like the traditional [Category Column Chart](column-chart.md#angular-column-chart-example). This type of series emphasizes the amount of change between low values and high values in the same data point over a period of time or compares multiple items. Range values are represented on the Y-Axis and categories are displayed on the X-Axis.

The Range Column Chart is identical to the [Range Area Chart](area-chart.md)(area-chart.md#Angular-Range-Area-chart) in all aspects except that the ranges are represented as a set of vertical columns rather than a filled area.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-range-column-chart"
           alt="Angular Range Column Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Radial Column Chart

The Radial Column Chart belongs to a group of [Radial Chart](radial-chart.md), and is visualized by using a collection of rectangles that extend from the center of the chart toward the locations of data points. This utilizes the same concepts of data plotting as the [Category Column Chart](column-chart.md#angular-column-chart-example), but wraps data points around a circle rather than stretching them horizontally.

You can create this type of chart in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control by binding your data to a [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html), as shown in the example below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-column-chart"
           alt="Angular Radial Column Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart types in these topics:

-   [Bar Chart](bar-chart.md)
-   [Composite Chart](composite-chart.md)
-   [Radial Chart](radial-chart.md)
-   [Stacked Chart](stacked-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

| Chart Type          | Control Name                                                                                                                                           | API Members                                                                                                                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column              | [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) | [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#charttype) = [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) |
| Radial Column       | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxRadialColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialcolumnseriescomponent.html)                                                                                                                            |
| Range Column        | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxRangeColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html)                                                                                                                              |
| Stacked Column      | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStackedColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html)                                                                                                                          |
| Stacked 100% Column | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxStacked100ColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstacked100columnseriescomponent.html)                                                                                                                    |
| Waterfall           | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)         | [`IgxWaterfallSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxwaterfallseriescomponent.html)                                                                                                                                  |
