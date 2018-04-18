---
title: Explore Chart Types
_description: The Ignite UI for Angular Category Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing category data a breeze.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Category Chart component, Angular Chart controls, Angular Category Chart controls, Data Visualization
---
## Explore Chart Types

In the Category Chart control, an Axis provides base properties for specifying appearance of axis main lines, tickmarks, titles, and axis labels. 

### Explore Chart Types Demo

<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-axis-sample-iframe" src='{environment:demosBaseUrl}/category-chart-axis-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-axis-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

By default, you do not need to explicitly set the labels. The Category Chart will use the first appropriate string property that it finds within the data you provided and will explicitly set which property to use for the labels. 

### Axis Labels 
The Category Chart control allows you full control over configuring, formatting and styling the font of the labels displayed on your chart. You can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility. 

The following code example shows how to style labels on the x-axis using style properties:

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    xAxisLabelTextStyle="16pt Verdana"
    xAxisLabelRightMargin="14"
    xAxisLabelTextColor="red">
</igx-category-chart>
```

<div class="divider--half"></div>

### Axis Titles
The axis title feature of the Category Chart control allows you to add contextual information to the x and y axes of the chart. You can customize the look and feel of the Category Chart's x-axis and y-axis titles in many different ways such as applying different font styles, margins, and alignment. 

The following code example shows how to set and customize the titles on the x-axis and y-axis:

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTitle="Country"
      xAxisTitleTextColor="blue"
      xAxisTitleTextStyle="20pt Times New Roman|Georgia|Serif"
      yAxisTitle="Millions of People"
      yAxisTitleAngle="90"
      yAxisTitleTextColor="red">
 </igx-category-chart>
```

### Axis Tickmarks
Tick marks display points on the axes. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness and color of the x-axis and y-axis labels.

The following code snippet demonstrates how to set the color, length and thickness of the tickmark on the x-axis.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      xAxisTickLength="10"
      xAxisTickStrokeThickness="3"
      xAxisTickStroke="red">
 </igx-category-chart>
```

<div class="divider--half"></div>

### Axis Range
In the Category Chart control, the range on numeric axes is the difference in numeric values from the beginning of the axis to the end or from the smallest to largest values in the data. The range minimum is the lowest value of the axis. The range maximum is the highest value of the axis. By default, the Category Chart control will calculate the minimum and maximum values for the y-axis range based on the lowest and highest data points in order to maximize the chart plot area. The automatic calculation of an axis' minimum and maximum values may not be appropriate for your set of data points. For example, if your data has a minimum value of 850, you may want to set the minimum value of the axis using y-axis’s `yAxisMinimumValue` property to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same can be applied to the axis maximum value and the highest value of data points using y-axis’s `yAxisMaximumValue` property.

The following sample code demonstrates how to change the axis range on the y-axis.

```html
 <igx-category-chart
      [dataSource]="data"
      width="700px"
      height="500px"
      yAxisMinimumValue="-200"
      yAxisMaximumValue="1000">
 </igx-category-chart>
```

<div class="divider--half"></div>

### Axis Interval
In the Category Chart control, the axis major interval specifies how frequently major gridlines and axis labels are rendered on an axis. Similarly, axis minor interval specifies how frequently minor gridlines are rendered on an axis.

The following code snippet demonstrates how to configure the interval on the y-axis.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    yAxisInterval="100"
    yAxisMinorInterval="10" 
    yAxisMinorStroke="Red"    
    yAxisMajorStroke="Green"  
    yAxisMinorStrokeThickness="1"
    yAxisMajorStrokeThickness="1">
 </igx-category-chart>
```

<div class="divider--half"></div>

### Axis Gap 
The Axis Gap feature of the Category Chart control allows setting the gap between series of the chart.

The property accepts a numeric float value between 0 and 1. The value represents a relative width of the gap out of the available number of pixels between series. 
   0 - no gap is rendered between series; 
   1 - maximum available gap is rendered between series.

To set the Category Chart with `xAxisGap` of `0.5` the following code can be used:

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    title="Countries population"
    xAxisTitle="Countries"
    yAxisTitle="Millions of people"
    chartType="column"
    xAxisGap="0.5">
</igx-category-chart>
```

<div class="divider--half"></div>

### Axis Overlap
The Axis Overlap feature of the Category Chart control allows setting overlap of rendered categories. 

The property accepts a numeric float value between -1 and 1. The value represents a relative overlap out of the available number of pixels dedicated to each series.

* Negative value (up to -1): the categories are pushed away from each other producing a gap between themselves.
* Positive value (up to 1): the categories are overlapping each other. Value of 1 directs the chart to render categories on top of each other.

The following code example sets the `xAxisOverlap` to 0.5, which is a half of the available space is used to draw categories overlapping each other.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    title="Countries population"
    xAxisTitle="Countries"
    yAxisTitle="Millions of people"
    chartType="column"
    xAxisOverlap="0.5">
</igx-category-chart>
```

<div class="divider--half"></div>