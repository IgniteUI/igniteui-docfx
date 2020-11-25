---
title: Angular Charts and Graphs | Data Visualization Tools | Axis Options | Infragistics
_description: Use Infragistics' Angular charts control to plot data using different axis types such as numeric, category and date time axis. Learn about our Ignite UI for Angular graph axis!
_keywords: Angular charts, category chart, Axis Labels, Axis Range, Ignite UI for Angular, Infragistics
mentionedTypes: ['CategoryChart']
---

# Angular Axis Options

In the Ignite UI for Angular category chart component, an Axis provides base properties for specifying appearance of axis main lines, tickmarks, titles, and axis labels.

## Angular Axis Options Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-axis-options-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-axis-options' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Axis Options Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-axis-options-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

By default, you do not need to explicitly set the labels. The category chart component will use the first appropriate string property that it finds within the data you provided and will explicitly set which property to use for the labels.

## Axis Labels

The Ignite UI for Angular category chart component allows you full control over configuring, formatting and styling the font of the labels displayed on your chart. You can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility.

The following code example shows how to style labels on the x-axis using style properties:

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisLabelTextStyle="10pt Verdana"
    xAxisLabelTopMargin="5"
    xAxisLabelTextColor="gray"
    yAxisLabelTextStyle="10pt Verdana"
    yAxisLabelRightMargin="5"
    yAxisLabelTextColor="gray">
</igx-category-chart>
```

<div class="divider--half"></div>

## Axis Titles

The axis title feature of the Ignite UI for Angular category chart allows you to add contextual information to the x and y axes of the chart. You can customize the look and feel of the category chart's x-axis and y-axis titles in many different ways such as applying different font styles, margins, and alignment.

The following code example shows how to set and customize the titles on the x-axis and y-axis:

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTitle="Countries"
      xAxisTitleTextColor="gray"
      xAxisTitleTextStyle="12pt Verdana"
      xAxisTitleAngle="0"
      yAxisTitle="Trillions of Watt-hours (TWh)"
      yAxisTitleTextStyle="12pt Verdana"
      yAxisTitleTextColor="gray"
      yAxisTitleAngle="90"
      yAxisTitleLeftMargin="5">
 </igx-category-chart>
```

## Axis Tickmarks

Tick marks display points on the axes. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness and color of the x-axis and y-axis labels.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTickLength="15"
      xAxisTickStrokeThickness="2"
      xAxisTickStroke="gray"
      yAxisTickLength="0">
 </igx-category-chart>
```

<div class="divider--half"></div>

## Axis Range

In the category chart component, the range on numeric axes is the difference in numeric values from the beginning of the axis to the end or from the smallest to largest values in the data. The range minimum is the lowest value of the axis. The range maximum is the highest value of the axis. By default, the category chart component will calculate the minimum and maximum values for the y-axis range based on the lowest and highest data points in order to maximize the chart plot area. The automatic calculation of an axis' minimum and maximum values may not be appropriate for your set of data points. For example, if your data has a minimum value of 850, you may want to set the minimum value of the axis using y-axis’s [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) property to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same can be applied to the axis maximum value and the highest value of data points using y-axis’s [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) property.

The following sample code demonstrates how to change the axis range on the y-axis.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      yAxisMinimumValue="0"
      yAxisMaximumValue="1000">
 </igx-category-chart>
```

<div class="divider--half"></div>

## Axis Interval

In the category chart component, the [`yAxisInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisinterval) property specifies how frequently major gridlines and axis labels are rendered on an axis. Similarly, the [`yAxisMinorInterval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminorinterval) property specifies how frequently minor gridlines are rendered on an axis.

The following code snippet demonstrates how to configure the interval on the y-axis.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    yAxisInterval="100"
    yAxisMajorStroke="black"
    yAxisMajorStrokeThickness="1"
    yAxisMinorInterval="20"
    yAxisMinorStroke="gray"
    yAxisMinorStrokeThickness="0.5">
</igx-category-chart>
```

<div class="divider--half"></div>

## Axis Gap

The Axis Gap feature of the category chart allows setting the gap between series of the chart.

The property accepts a numeric float value between 0 and 1. The value represents a relative width of the gap out of the available number of pixels between series.
   0 - no gap is rendered between series;
   1 - maximum available gap is rendered between series.

To set the category chart with [`xAxisGap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisgap) of 0.125 the following code can be used:

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisGap="0.125">
</igx-category-chart>
```

<div class="divider--half"></div>

## Axis Overlap

The Axis Overlap feature of the category chart component allows setting overlap of rendered categories.

The property accepts a numeric float value between -1 and 1. The value represents a relative overlap out of the available number of pixels dedicated to each series.

-   Negative value (up to -1): the categories are pushed away from each other producing a gap between themselves.
-   Positive value (up to 1): the categories are overlapping each other. Value of 1 directs the chart to render categories on top of each other.

The following code example sets the [`xAxisOverlap`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#xaxisoverlap) to 0.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisOverlap="0">
</igx-category-chart>
```

<div class="divider--half"></div>
