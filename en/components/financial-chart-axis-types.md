---
title: Angular Financial Chart | Axis Types | Infragistics
_description: Learn how to configure Infragistics' Angular charts control axis such as axis interval, axis lables, axis modes, axis range, axis scale, axis tickmarkts and axis titles. View our Ignite UI for Angular financial graph demos!
_keywords: Angular charts, financial chart, stock chart, financial axis, Ignite UI for Angular, Axis type , Infragistics
mentionedTypes: ['FinancialChart']
---

# Angular Chart Axis Types

In the Angular financial chart component, an axis provides base properties for specifying appearance of axis main lines, tickmarks, titles, and axis labels.

## Angular Chart Axis Types Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-axis-types" 
           alt="Angular Chart Axis Types Example" 
           github-src="charts/financial-chart/axis-types">
</code-view>

<div class="divider--half"></div>

By default, you do not need to explicitly set the labels. The financial chart component will use the first appropriate property that it finds within the data you provided and will use that for the labels.

## Axis Interval

In the Financial Chart control, the [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisinterval) property specifies how frequently major gridlines and axis labels are rendered on an axis. Similarly, the [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminorinterval) property specifies how frequently minor gridlines are rendered on an axis.

The following code snippet demonstrates how to configure intervals on the y-axis.

```html
 <igx-financial-chart
    yAxisInterval="200"
    yAxisMinorInterval="50"
    yAxisMajorStroke="Black"
    yAxisMinorStroke="Gray"
    yAxisMinorStrokeThickness="0.5"
    yAxisMajorStrokeThickness="0.5" >
 </igx-financial-chart>
```

<div class="divider--half"></div>

## Axis Labels

The Angular financial chart component allows you full control over configuring and formatting the labels displayed on your chart. You can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility.

The following code example shows how to style labels on the x-axis using style properties:

```html
<igx-financial-chart
    xAxisLabelTextStyle="8pt Verdana"
    xAxisLabelTextColor="Gray"
    xAxisLabelTopMargin="5"
    xAxisLabelAngle="0"
    yAxisLabelTextStyle="8pt Verdana"
    yAxisLabelTextColor="Gray"
    yAxisLabelLeftMargin="5"
    yAxisLabelAngle="0"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

<div class="divider--half"></div>

## Axis Modes

The Angular financial chart component allows you to set different modes on the x-axis and the y-axis.
For the x-axis you can choose between the following modes:

-   Time - This mode will render space along the x-axis for gaps in data, for example no stock trading on weekends or holidays.
-   Ordinal - This mode will collapse date areas where data does not exist. This the default value.

For the y-axis you can choose between the following modes:

-   Numeric - This mode will be charted with the exact value of the data. This is the default value.
-   PercentChange - The mode will the display the data as a percentage change relative to the first data point provided.

The following code example shows how to set the modes for the axes:

```html
<igx-financial-chart
    xAxisMode="time"
    yAxisMode="percentChange"
    width="850px"
    height="600px"
    [dataSource]="data">
</igx-financial-chart>
```

<div class="divider--half"></div>

## Axis Range

In the Angular financial chart component, the range on numeric axes is the difference in numeric values from the beginning of the axis to the end or from the smallest to largest values in the data. The range minimum is the lowest value of the axis. The range maximum is the highest value of the axis. By default, the financial chart component will calculate the minimum and maximum values for the y-axis range based on the lowest and highest data points in order to maximize the chart plot area. The automatic calculation of an axis' minimum and maximum values may not be appropriate for your set of data points. For example, if your data has a minimum value of 850, you may want to set the minimum value of the axis using y-axis’s [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisminimumvalue) property to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same can be applied to the axis maximum value and the highest value of data points using y-axis’s [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxismaximumvalue) property.

The following sample code demonstrates how to change the axis range on the y-axis.

```html
 <igx-financial-chart
    yAxisMinimumValue="-200"
    yAxisMaximumValue="1000"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## Axis Scale

In the Angular financial chart component, you can control if the data in the chart is mapped logarithmically along the y-axis, this is done by setting the following properties:

-   [`yAxisIsLogarithmic`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxisislogarithmic) - This specifies if the y-axis should use a logarithmic scale instead of a linear one. By default this property is set to false.
-   [`yAxisLogarithmBase`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#yaxislogarithmbase) - The base value to use in the log function when mapping the position of data items along the y-axis.
    This is effective only when yAxisIsLogarithmic is true.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <igx-financial-chart
    yAxisIsLogarithmic="true"
    yAxisLogarithmBase="10"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## Axis Tickmarks

Tick marks display points on the axes. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness and color of the x-axis and y-axis labels.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <igx-financial-chart
    xAxisTickLength="10"
    xAxisTickStrokeThickness="1"
    xAxisTickStroke="Gray"
    width="850px"
    height="600px"
    [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>

## Axis Titles

The axis title feature of the financial chart component allows you to add contextual information to the x and y axes of the chart. You can customize the look and feel of the financial chart's x-axis and y-axis titles in many different ways such as applying different font styles, margins, and alignment.

The following code example shows how to set and customize the titles on the x-axis and y-axis:

```html
<igx-financial-chart
      xAxisTitle="Data Range"
      xAxisTitleTextColor="Black"
      xAxisTitleTextStyle="15pt Times New Roman|Georgia|Serif"
      xAxisTitleAngle="0"
      yAxisTitle="Stock Prices ($)"
      yAxisTitleTextColor="Black"
      yAxisTitleAngle="90"
      width="850px"
      height="600px"
      [dataSource]="data">
 </igx-financial-chart>
```

<div class="divider--half"></div>
