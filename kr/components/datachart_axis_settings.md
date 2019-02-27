---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: kr
---

## Axis Settings

In the `IgxDataChart` control, an axis provides base properties for specifying the appearance of axis main lines, tickmarks, titles, and axis labels.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-axis-settings-iframe" src='{environment:demosBaseUrl}/charts/data-chart-axis-settings' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-settings-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Axis Labels

The `IgxDataChart` control allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of these labels.

The following code example shows how to style the labels on a category x-axis in the chart:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    labelTextStyle="9pt Verdana"
    labelTopMargin=5
    labelTextColor="gray">
</igx-category-x-axis>
```

### Axis Titles

The axis title feature of the `IgxDataChart` control allows you to add contextual information to the axes of the chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, margins, and alignments.

The following code example shows how to set and customize the titles on a category x-axis in the chart:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    title="Country"
    titleTextColor="gray"
    titleTextStyle="12pt Verdana"
    titleAngle=0>
</igx-category-x-axis>
```

### Axis Tickmarks

Tick marks display points on the axes in the chart. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness, and color of the tick marks on an axis in the `IgxDataChart` control.

The following code example shows how to set and customize the color, length, and thickness of the tick marks on a category x-axis in the chart:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    tickLength=10
    tickStrokeThickness=0.5
    tickStroke="black">
</igx-category-x-axis>
```

### Axis Range

In the `IgxDataChart` control, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the `MinimumValue` and `MaximumValue` options on the corresponding axes.

By default, the `IgxDataChart` control will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the `MinimumValue` of the numeric axis to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the `MaximumValue` property.

The following code snippet demonstrates changing an axis range in the `IgxDataChart` control:

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    minimumValue=0
    maximumValue=1000>
</igx-numeric-y-axis>
```

### Axis Gridlines

In the `IgxDataChart` control, the `Interval` property of an axis determines how frequently the major gridlines and axis labels are rendered on that axis. Similarly, the `MinorInterval` property specifies how frequently minor gridlines are rendered between those major gridlines.

For numeric axes, these intervals will be numeric, but for category axes, these values will represent the frequency of the number of categories that you wish for the lines to be drawn. For example, if you set the `Interval` to 2 on a category axis, the major gridlines would be drawn every 2 categories.

You can also configure the color and thickness of the intervals on the axes in the chart by setting the corresponding stroke and stroke thickness properties.

The following code snippet demonstrates how to configure the intervals on the axes in the chart:

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    interval=100
    majorStroke="black"
    majorStrokeThickness=1
    minorInterval=25
    minorStroke="gray"
    minorStrokeThickness=0.5>
</igx-numeric-y-axis>
```

### Axis Gap

The `Gap` property on the category axes of the `IgxDataChart` control determines the amount of space between series of the chart.

This property accepts a numeric value between 0 and 1. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 woudl render the maximum available gap.

The following sample code demonstrates setting an x-axis gap:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    gap=0.125>
</igx-category-x-axis>
```

### Axis Overlap

The axis `Overlap` feature of the category axes of the `IgxDataChart` control allows setting the overlap of the rendered categories.

This property accepts a numeric value between -1 and 1. The value represents a relative overlap out of the available number of pixels dedicated to each series.

Setting this property to a negative value (down to -1) results in the categories being pushed away from each other, producing a gap between themselves.

Setting this property to a positive value (up to 1) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following code snippet sets the x-axis `Overlap` to 0:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    overlap=0>
</igx-category-x-axis>
```
