---
title: Financial Chart Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Angular Financial Chart component.
_keywords: Ignite UI for Angular, Data Visualization, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Financial Chart component, Angular Chart controls, Angular Financial Chart controls, Data Visualization
---
## Financial Chart Axis 

In the Financial Chart control, an Axis provides base properties for specifying appearance of axis main lines, tickmarks, titles, and axis labels. 

By default, you do not need to explicitly set the labels. The Financial Chart will use the first appropriate property that it finds within the data you provided and will use that for the labels. 

<div class="divider"></div>

### Financial Chart Axis Demo

<div class="sample-container" style="height: 280px">
    <iframe id="financial-chart-axis-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-axis-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-axis-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Axis Labels 

The Financial Chart control allows you full control over configuring and formatting the labels displayed on your chart. You can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility. 

The following code example shows how to style labels on the x-axis using style properties:

```html
<ig-financial-chart
    [dataSource]="data"
    xAxisLabelTextStyle="16pt Verdana"
    xAxisLabelRightMargin="14"
    xAxisLabelTextColor="red">
</ig-financial-chart>
```
<div class="divider--half"></div>

### Axis Titles
The axis title feature of the Financial Chart control allows you to add contextual information to the x and y axes of the chart. You can customize the look and feel of the Financial Chart's x-axis and y-axis titles in many different ways such as applying different font styles, margins, and alignment. 

The following code example shows how to set and customize the titles on the x-axis and y-axis:

```html
 <ig-financial-chart
      [dataSource]="data"
      xAxisTitle="Country"
      xAxisTitleTextColor="blue"
      xAxisTitleTextStyle="20pt Times New Roman|Georgia|Serif"
      yAxisTitle="Millions of People"
      yAxisTitleAngle="90"
      yAxisTitleTextColor="red">
 </ig-financial-chart>
```
<div class="divider--half"></div>

### Axis Tickmarks
Tick marks display points on the axes. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness and color of the x-axis and y-axis labels.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <ig-financial-chart
      [dataSource]="data"
      xAxisTickLength="10"
      xAxisTickStrokeThickness="3"
      xAxisTickStroke="red">
 </ig-financial-chart>
```
<div class="divider--half"></div>

### Axis Range
In the Financial Chart control, the range on numeric axes is the difference in numeric values from the beginning of the axis to the end or from the smallest to largest values in the data. The range minimum is the lowest value of the axis. The range maximum is the highest value of the axis. By default, the Financial Chart control will calculate the minimum and maximum values for the y-axis range based on the lowest and highest data points in order to maximize the chart plot area. The automatic calculation of an axis' minimum and maximum values may not be appropriate for your set of data points. For example, if your data has a minimum value of 850, you may want to set the minimum value of the axis using y-axis’s `yAxisMinimumValue` property to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same can be applied to the axis maximum value and the highest value of data points using y-axis’s `yAxisMaximumValue` property.

The following sample code demonstrates how to change the axis range on the y-axis.

```html
 <ig-financial-chart
      [dataSource]="data"
      yAxisMinimumValue="-200"
      yAxisMaximumValue="1000">
 </ig-financial-chart>
```
<div class="divider--half"></div>

### Axis Interval
In the Financial Chart control, the axis major interval specifies how frequently major gridlines and axis labels are rendered on an axis. Similarly, axis minor interval specifies how frequently minor gridlines are rendered on an axis.

The following code snippet demonstrates how to configure the interval on the y-axis.

```html
 <ig-financial-chart
    [dataSource]="data"
    yAxisInterval="100"
    yAxisMinorInterval="10" 
    yAxisMinorStroke="Red"    
    yAxisMajorStroke="Green"  
    yAxisMinorStrokeThickness="1"
    yAxisMajorStrokeThickness="1">
 </ig-financial-chart>
```
<div class="divider--half"></div>