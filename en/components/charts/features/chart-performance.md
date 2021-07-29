---
title: Angular Chart Performance | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Performance
_keywords: Angular Charts, Performance, Infragistics
mentionedTypes: ["CategoryChart", "FinancialChart", "XamDataChart"]
---

# Angular Chart Performance

Angular charts are optimized for high performance of rendering millions of data points and updating them every few milliseconds. However, there are several chart features that affect performance of the chart and they should be considered when optimizing performance in your application. This topic will guide you to make Angular charts work as fast as possible in your application.

## Angular Chart Performance Examples

The following examples demonstrates two high performance scenarios of Angular charts.

## Angular Chart with High-Frequency

In High-Frequency scenario, the Angular Charts can render data items that are updating in real time or at specified milliseconds intervals. You will experience no lag, no screen-flicker, and no visual delays, even as you interact with the chart on a touch-device. The following sample demonstrates the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) in High-Frequency scenario.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-frequency"
           alt="Angular Chart with High-Frequency" >
</code-view>

<div class="divider--half"></div>

## Angular Chart with High-Volume

In High-Volume scenario, the Angular Charts can render 1 million of data points while the chart keeps providing smooth performance when end-users tries zooming in/out or navigating chart content. The following sample demonstrates the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) in High-Volume scenario.

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-high-volume"
           alt="Angular Chart with High-Volume" >
</code-view>

<div class="divider--half"></div>

## General Performance Guidelines

This section lists guidelines and chart features that add to the overhead and processing updates in the Angular charts.

### Data Size

If you need to plot data sources with large number of data points (e.g. 10,000+), we recommend using Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) with one of the following type of series which where designed for specially for that purpose.

-   [Scatter HD Chart](../types/scatter-chart.md#angular-scatter-high-density-chart) instead of [Category Point Chart](../types/point-chart.md) or [Scatter Marker Chart](../types/scatter-chart.md#angular-scatter-marker-chart)
-   [Scatter Polyline Chart](../types/shape-chart.md#angular-scatter-polyline-chart) instead of [Category Line Chart](../types/line-chart.md#angular-line-chart-example) or [Scatter Line Chart](../types/scatter-chart.md#angular-scatter-line-chart)
-   [Scatter Polygon Chart](../types/shape-chart.md#angular-scatter-polygon-chart) instead of [Category Area Chart](../types/area-chart.md#angular-area-chart-example) or [Column Chart](../types/column-chart.md#angular-column-chart-example)

### Data Structure

Although Angular charts support rendering of multiple data sources by binding array of arrays of data points to `DataSource` property. It is much faster for charts if multiple data sources are flatten into single data source where each data item contains multiple data columns rather just one data column. For example:

```ts
this.CategoryChart.dataSource = FlattenDataSource.create();
this.FinancialChart.dataSource = FlattenDataSource.create();

export class FlattenDataSource {
    public static create(): any[] {
        const data: any[] = [];
        data.push({ "Year": "1996", "USA": 148, "CHN": 110 });
        data.push({ "Year": "2000", "USA": 142, "CHN": 115 });
        return data;
    }
}
// instead of this data structure:
export class MultiDataSources {
    public static create(): any[] {
        const dataSource1: any[] = [];
        dataSource1.push({ "Year": "1996", "Value": 148 });
        dataSource1.push({ "Year": "2000", "Value": 142 });

        const dataSource2: any[] = [];
        dataSource2.push({ "Year": "1996", "Value": 110 });
        dataSource2.push({ "Year": "2000", "Value": 115 });

        const multipleSources: any[] = [dataSource1, dataSource2];
        return multipleSources;
    }
}
```

### Data Filtering

Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) and the [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) controls have built-in data adapter that analyzes your data and generates chart series for you. However, it works faster if you use [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#includedproperties) and [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#excludedproperties) to filter only those data columns that you actually want to render. For example,

<!-- Angular, React, WebComponents -->

```ts
this.Chart.includedProperties = [ "Year", "USA", "RUS" ];
this.Chart.excludedProperties = [ "CHN",  "FRN", "GER" ];
```

## Chart Performance Guidelines

### Chart Types

Simpler chart types such as [Line Chart](../types/line-chart.md) have faster performance than using [Spline Chart](../types/spline-chart.md) because of the complex interpolation of spline lines between data points. Therefore, you should use [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) property of Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) or the [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) control to select type of chart that renders faster. Alternatively, you can change a type of series to a faster series in Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control.

The following table lists chart types in order from the fastest performance to slower performance in each group of charts:

| Chart Group      | Chart Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pie Charts       | - [Pie Chart](../types/pie-chart.md) <br> - [Donut Chart](../types/donut-chart.md) <br> - [Radial Pie Chart](../types/radial-chart.md#angular-radial-pie-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Line Charts      | - [Category Line Chart](../types/line-chart.md#angular-line-chart-example) <br> - [Category Spline Chart](../types/spline-chart.md#angular-spline-chart-example) <br> - [Step Line Chart](../types/step-chart.md#angular-step-line-chart) <br> - [Radial Line Chart](../types/radial-chart.md#angular-radial-line-chart) <br> - [Polar Line Chart](../types/polar-chart.md#angular-polar-line-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#angular-scatter-line-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#angular-scatter-polyline-chart) (\*)  <br> - [Scatter Contour Chart](../types/scatter-chart.md#angular-scatter-contour-chart) <br> - [Stacked Line Chart](../types/stacked-chart.md#angular-stacked-line-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#angular-stacked-100-line-chart) <br>                                               |
| Area Charts      | - [Category Area Chart](../types/area-chart.md#angular-area-chart-example) <br> - [Step Area Chart](../types/step-chart.md#angular-step-area-chart) <br> - [Range Area Chart](../types/area-chart.md#angular-range-area-chart) <br> - [Radial Area Chart](../types/radial-chart.md#angular-radial-area-chart) <br> - [Polar Area Chart](../types/polar-chart.md#angular-polar-area-chart) <br> - [Scatter Polygon Chart](../types/shape-chart.md#angular-scatter-polygon-chart) (\*) <br> - [Scatter Area Chart](../types/scatter-chart.md#angular-scatter-area-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#angular-stacked-area-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#angular-stacked-100-area-chart) <br>                                                                                                                                                     |
| Column Charts    | - [Column Chart](../types/column-chart.md#angular-column-chart-example) <br> - [Bar Chart](../types/bar-chart.md#angular-bar-chart-example) <br> - [Waterfall Chart](../types/column-chart.md#angular-waterfall-chart) <br> - [Range Column Chart](../types/column-chart.md#angular-range-column-chart) <br> - [Radial Column Chart](../types/radial-chart.md#angular-radial-column-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#angular-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#angular-stacked-bar-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#angular-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#angular-stacked-100-bar-chart)                                                                                                                                                     |
| Spline Charts    | - [Category Spline Chart](../types/spline-chart.md#angular-spline-chart-example) <br> - [Polar Spline Chart](../types/polar-chart.md#angular-polar-spline-chart) <br> - [Scatter Spline Chart](../types/scatter-chart.md#angular-scatter-spline-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#angular-stacked-spline-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#angular-stacked-100-spline-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Point Charts     | - [Category Point Chart](../types/point-chart.md) <br> - [Scatter HD Chart](../types/scatter-chart.md#angular-scatter-high-density-chart)  <br> - [Scatter Marker Chart](../types/scatter-chart.md#angular-scatter-marker-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Polar Marker Chart](../types/polar-chart.md#angular-polar-marker-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Financial Charts | - [Stock Chart in Line Mode](../types/stock-chart.md) <br> - [Stock Chart in Column Mode](../types/stock-chart.md) <br> - [Stock Chart in Bar Mode](../types/stock-chart.md) <br> - [Stock Chart in Candle Mode](../types/stock-chart.md) <br> - [Stock Chart with Overlays](../types/stock-chart.md) <br> - [Stock Chart with Zoom Pane](../types/stock-chart.md) <br> - [Stock Chart with Volume Pane](../types/stock-chart.md#volume-pane) <br> - [Stock Chart with Indicator Pane](../types/stock-chart.md#indicator-pane) <br>                                                                                                                                                                                                                                                                                                                                                                          |
| Scatter Charts   | - [Scatter HD Chart](../types/scatter-chart.md#angular-scatter-high-density-chart) <br> - [Scatter Marker Chart](../types/scatter-chart.md#angular-scatter-marker-chart) <br> - [Scatter Line Chart](../types/scatter-chart.md#angular-scatter-line-chart) <br> - [Scatter Bubble Chart](../types/bubble-chart.md) <br> - [Scatter Spline Chart](../types/scatter-chart.md#angular-scatter-spline-chart) <br> - [Scatter Area Chart](../types/scatter-chart.md#angular-scatter-area-chart) <br> - [Scatter Contour Chart](../types/scatter-chart.md#angular-scatter-contour-chart) <br> - [Scatter Polyline Chart](../types/shape-chart.md#angular-scatter-polyline-chart) (\*) <br> - [Scatter Polygon Chart](../types/shape-chart.md#angular-scatter-polygon-chart) (\*) <br>                                                                                                                              |
| Radial Charts    | - [Radial Line Chart](../types/radial-chart.md#angular-radial-line-chart) <br> - [Radial Area Chart](../types/radial-chart.md#angular-radial-area-chart) <br> - [Radial Pie Chart](../types/radial-chart.md#angular-radial-pie-chart) <br> - [Radial Column Chart](../types/radial-chart.md#angular-radial-column-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Polar Charts     | - [Polar Marker Chart](../types/polar-chart.md#angular-polar-marker-chart) <br> - [Polar Line Chart](../types/polar-chart.md#angular-polar-line-chart) <br> - [Polar Area Chart](../types/polar-chart.md#angular-polar-area-chart) <br> - [Polar Spline Chart](../types/polar-chart.md#angular-polar-spline-chart) <br> - [Polar Spline Area Chart](../types/polar-chart.md#angular-polar-spline-area-chart) <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Stacked Charts   | - [Stacked Line Chart](../types/stacked-chart.md#angular-stacked-line-chart) <br> - [Stacked Area Chart](../types/stacked-chart.md#angular-stacked-area-chart) <br> - [Stacked Column Chart](../types/stacked-chart.md#angular-stacked-column-chart) <br> - [Stacked Bar Chart](../types/stacked-chart.md#angular-stacked-bar-chart) <br> - [Stacked Spline Chart](../types/stacked-chart.md#angular-stacked-spline-chart) <br> - [Stacked 100% Line Chart](../types/stacked-chart.md#angular-stacked-100-line-chart) <br> - [Stacked 100% Area Chart](../types/stacked-chart.md#angular-stacked-100-area-chart) <br> - [Stacked 100% Column Chart](../types/stacked-chart.md#angular-stacked-100-column-chart) <br> - [Stacked 100% Bar Chart](../types/stacked-chart.md#angular-stacked-100-bar-chart) <br> - [Stacked 100% Spline Chart](../types/stacked-chart.md#angular-stacked-100-spline-chart) <br> |

\* Note that the [Scatter Polygon Chart](../types/shape-chart.md) and [Scatter Polyline Chart](../types/shape-chart.md) have better performance than rest of charts if you have a lot of data sources bound to the chart. For more info, see [Series Collection](#series-collection) section. Otherwise, other chart types are faster.

### Chart Animations

Enabling [Chart Animations](chart-animations.md) will slightly delay final rendering series in the Angular charts while they play transition-in animations.

### Chart Annotations

Enabling [Chart Annotations](chart-annotations.md) such as the Callout Annotations, Crosshairs Annotations, or Final Value Annotations, will slightly decrease performance of the Angular chart.

### Chart Highlighting

Enabling the [Chart Highlighting](chart-highlighting.md) will slightly decrease performance of the Angular chart.

### Chart Legend

Adding a legend to the Angular charts might decrease performance if titles of series or data items mapped to legend are changing often at runtime.

### Chart Markers

In Angular charts, [Markers](chart-markers.md) are especially expensive when it comes to chart performance because they add to the layout complexity of the chart, and perform data binding to obtain certain information. Also, markers decrease performance when there are a lot of data points or if there are many data sources bound. Therefore, if markers are not needed, they should be removed from the chart.

This code snippet shows how to remove markers from the Angular charts.

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart
this.Chart.markerTypes.clear();
this.Chart.markerTypes.add(MarkerType.None);

// on LineSeries of DataChart
this.LineSeries.markerType = MarkerType.None;
```

### Chart Resolution

Setting the [`resolution`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#resolution) property to a higher value will improve performance, but it will lower the graphical fidelity of lines of plotted series. As such, it can be increased up until the fidelity is unacceptable.

This code snippet shows how to decrease resolution in the Angular charts.

<!-- Angular, React, WebComponents -->

```ts
// on CategoryChart or FinancialChart:
this.Chart.Resolution = 10;

// on LineSeries of DataChart:
this.LineSeries.Resolution = 10;
```

### Chart Overlays

Enabling [Chart Overlays](chart-overlays.md) will slightly decrease performance of the Angular chart.

### Chart Trendlines

Enabling [Chart Trendlines](chart-trendlines.md) will slightly decrease performance of the Angular chart.

### Axis Types

Usage of x-axis with DateTime support is not recommended if spaces between data points, based on the amount of time span between them, are not important. Instead, ordinal/category axis should be used because it is more efficient in the way it coalesces data. Also, ordinal/category axis doesn’t perform any sorting on the data like the time-based x-axis does.

> Note The [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) already uses ordinal/category axis so there is no need to change its properties.

This code snippet shows how to ordinal/category x-axis in the [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) controls.

```html
<igx-financial-chart xAxisMode="Ordinal"></igx-financial-chart>

<igx-data-chart>
    <igx-category-x-axis label="Time"></igx-category-x-axis>
</igx-data-chart>
```

### Axis Intervals

By default, Angular charts will automatically calculate [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval) based on range of your data. Therefore, you should avoid setting axis interval especially to a small value to prevent rendering of too many of axis gridlines and axis labels. Also, you might want to consider increasing [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval) property to a larger value than the automatically calculated axis interval if you do not need many axis gridlines or axis labels.

> Note, we do not recommend setting axis minor interval as it will decrease chart performance.

This code snippet shows how to set axis major interval in the Angular charts.

```html
<igx-category-chart xAxisInterval="5" yAxisInterval="50"></igx-category-chart>

<igx-financial-chart xAxisInterval="5" yAxisInterval="50"></igx-financial-chart>

<igx-data-chart>
    <igx-category-x-axis name="xAxis" interval="5"></igx-category-x-axis>
    <igx-numeric-y-axis name="yAxis" interval="50"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Scale

Setting the [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic) property to false is recommended for higher performance, as fewer operations are needed than calculating axis range and values of axis labels in logarithmic scale.

### Axis Labels Visibility

In the same way as Markers, axis labels are also expensive because they use templates and bindings, and may have their data context changed often. If labels are not used, they should be hidden or their interval should be increased to decrease number of axis labels.

This code snippet shows how to hide axis labels in the Angular charts.

```html
<igx-category-chart xAxisLabelVisibility="Collapsed" yAxisLabelVisibility="Collapsed">
</igx-category-chart>

<igx-financial-chart xAxisLabelVisibility="Collapsed" yAxisLabelVisibility="Collapsed">
</igx-financial-chart>

<igx-data-chart>
    <igx-category-x-axis name="xAxis" labelVisibility="Collapsed"></igx-category-x-axis>
    <igx-numeric-y-axis name="yAxis" labelVisibility="Collapsed"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Labels Abbreviation

Although, the Angular charts support abbreviation of large numbers (e.g. 10,000+) displayed in axis labels when [`yAxisAbbreviateLargeNumbers`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisabbreviatelargenumbers) is set to true. We recommend, instead pre-processing large values in your data items by dividing them a common factor and then setting [`yAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitle) to a string that represents factor used used to abbreviate your data values.

This code snippet shows how to set axis title in the Angular charts.

```html
<igx-category-chart yAxisTitle="In millions of Dollars"></igx-category-chart>

<igx-financial-chart yAxisTitle="In millions of Dollars"></igx-financial-chart>

<igx-data-chart>
    <igx-numeric-y-axis title="In millions of Dollars"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Labels Extent

At runtime, the Angular charts adjust extent of labels on y-axis based on a label with longest value. This might decrease chart performance if range of data changes and labels need to be updated often. Therefore, it is recommended to set label extent at design time in order to improve chart performance.

The following code snippet shows how to set a fixed extent for labels on y-axis in the Angular charts.

```html
<igx-category-chart xAxisLabelExtent="50" yAxisLabelExtent="50"></igx-category-chart>

<igx-financial-chart xAxisLabelExtent="50" yAxisLabelExtent="50"></igx-financial-chart>

<igx-data-chart>
    <igx-category-x-axis name="xAxis" labelExtent="50"></igx-category-x-axis>
    <igx-numeric-y-axis name="yAxis" labelExtent="50"></igx-numeric-y-axis>
</igx-data-chart>
```

### Axis Other Visuals

Enabling additional axis visuals (e.g. axis titles) or changing their default values might decrease performance in the Angular charts.

For example, changing these properties on the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) or [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) control:

| Axis Visual          | X-Axis Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Y-Axis Properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All Axis Visual      | [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisinterval)<br>  [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminorinterval)                                                                                                                                                                      | [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval)<br>  [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminorinterval)                                                                                                                                                                    |
| Axis Tickmarks       | [`xAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstroke) <br>  [`xAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistickstrokethickness)<br>  [`xAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisticklength)<br> | [`yAxisTickStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstroke) <br>  [`yAxisTickStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistickstrokethickness)<br>  [`yAxisTickLength`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisticklength)<br> |
| Axis Major Gridlines | [`xAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstroke)<br>  [`xAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxismajorstrokethickness)<br>                                                                                                                                                          | [`yAxisMajorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstroke)<br>  [`yAxisMajorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxismajorstrokethickness)<br>                                                                                                                                                          |
| Axis Minor Gridlines | [`xAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstroke)<br>  [`xAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisminorstrokethickness)<br>                                                                                                                                                          | [`yAxisMinorStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstroke)<br>  [`yAxisMinorStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisminorstrokethickness)<br>                                                                                                                                                          |
| Axis Main Line       | [`xAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstroke)<br>  [`xAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstrokethickness)<br>                                                                                                                                                                              | [`yAxisStroke`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstroke)<br>  [`yAxisStrokeThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstrokethickness)<br>                                                                                                                                                                              |
| Axis Titles          | [`xAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistitle)<br>  [`xAxisTitleAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxistitleangle)<br>                                                                                                                                                                                          | [`yAxisTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitle)<br>  [`yAxisTitleAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxistitleangle)<br>                                                                                                                                                                                          |
| Axis Strips          | [`xAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxisstrip)<br>                                                                                                                                                                                                                                                                                                                                                      | [`yAxisStrip`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxisstrip)<br>                                                                                                                                                                                                                                                                                                                                                      |

Or changing properties of an [`IgxAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxaxiscomponent.html) in the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control:

| Axis Visual          | Axis Properties                                                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| All Axis Visuals     | `Interval`, `MinorInterval`                                                                                                                                    |
| Axis Tickmarks       | `TickStroke` , `TickStrokeThickness`, `TickLength`                                                                                                             |
| Axis Major Gridlines | `MajorStroke`, `MajorStrokeThickness`                                                                                                                          |
| Axis Minor Gridlines | `MinorStroke`, `MinorStrokeThickness`                                                                                                                          |
| Axis Main Line       | `Stroke`, `StrokeThickness`                                                                                                                                    |
| Axis Titles          | [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#charttitle), `TitleAngle` |
| Axis Strips          | `Strip`                                                                                                                                                        |

## Performance in Financial Chart

In addition to above performance guidelines, the Angular [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) control has the following unique features that affect performance.

### Y-Axis Mode

Setting the [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode) option to `Numeric` is recommended for higher performance, as fewer operations are needed than using `PercentChange` mode.

### Chart Panes

Setting a lot of panes using [`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes) and [`overlayTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#overlaytypes) options, might decrease performance and it is recommended to use a few financial indicators and one financial overlay.

### Zoom Slider

Setting the [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) option to `None` will improve chart performance and enable more vertical space for other indicators and the volume pane.

### Volume Type

Setting the [`volumeType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#volumetype) property can have the following impact on chart performance:

-   `None` - is the least expensive since it does not display the volume pane.
-   `Line` - is more expensive volume type to render and it is recommended when rendering a lot of data points or when plotting a lot of data sources.
-   `Area` - is more expensive to render than the `Line` volume type.
-   [`IgxColumnComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumncomponent.html) - is more expensive to render than the `Area` volume type and it is recommended when rendering volume data of 1-3 stocks.

## Performance in Data Chart

In addition to the general performance guidelines, the Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control has the following unique features that affect performance.

### Axes Collection

Adding too many axis to the `Axes` collection of the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control will decrease chart performance and we recommend [Sharing Axes](chart-axis-layouts.md#axis-sharing-example) between series.

### Series Collection

Also, adding a lot of series to the [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the Angular [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) control will add overhead to rendering because each series has its own rendering canvas. This is especially important if you have more than 10 series in the Data Chart. We recommend combining multiple data sources into flatten data source (see [Data Structure](#data-structure) section) and then using conditional styling feature of the following series:

| Slower Performance Scenario                                                                                                                                           | Faster Scenario with Conditional Styling                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10+ of [`IgxLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html)               | Single [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html)               |
| 20+ of [`IgxLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineseriescomponent.html)               | Single [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html)       |
| 10+ of [`IgxScatterLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterlineseriescomponent.html) | Single [`IgxScatterPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolylineseriescomponent.html)       |
| 10+ of [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html)             | Single [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)                       |
| 20+ of [`IgxPointSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpointseriescomponent.html)             | Single [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxhighdensityscatterseriescomponent.html) |
| 20+ of [`IgxScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterseriescomponent.html)         | Single [`IgxHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxhighdensityscatterseriescomponent.html) |
| 10+ of [`IgxAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxareaseriescomponent.html)               | Single [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)         |
| 10+ of [`IgxColumnSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html)           | Single [`IgxScatterPolygonSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxscatterpolygonseriescomponent.html)         |

## Additional Resources

You can find more information about related chart types in these topics:

-   [Area Chart](../types/area-chart.md)
-   [Bar Chart](../types/bar-chart.md)
-   [Bubble Chart](../types/bubble-chart.md)
-   [Column Chart](../types/column-chart.md)
-   [Donut Chart](../types/donut-chart.md)
-   [Pie Chart](../types/pie-chart.md)
-   [Point Chart](../types/point-chart.md)
-   [Polar Chart](../types/polar-chart.md)
-   [Radial Chart](../types/radial-chart.md)
-   [Shape Chart](../types/shape-chart.md)
-   [Spline Chart](../types/spline-chart.md)
-   [Scatter Chart](../types/scatter-chart.md)
-   [Stacked Chart](../types/stacked-chart.md)
-   [Step Chart](../types/shape-chart.md)
-   [Stock Chart](../types/stock-chart.md)
-   [Chart Animations](chart-animations.md)
-   [Chart Annotations](chart-annotations.md)
-   [Chart Highlighting](chart-highlighting.md)
-   [Chart Markers](chart-markers.md)
-   [Chart Overlays](chart-overlays.md)
-   [Chart Trendlines](chart-trendlines.md)

## API Members

The following table lists API members mentioned in above sections:

-   [`resolution`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#resolution)
-   [`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes)
-   [`overlayTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#overlaytypes)
-   [`volumeType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#volumetype)
-   [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype)
-   [`xAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#xaxismode)
-   [`yAxisMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismode)
-   [`xAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisinterval)
-   [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval)
-   [`xAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisminorinterval)
-   [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminorinterval)
-   [`xAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#xaxislabelvisibility)
-   [`yAxisLabelVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxxychartcomponent.html#yaxislabelvisibility)
-   [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisislogarithmic)
