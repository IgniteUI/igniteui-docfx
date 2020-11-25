---
title: Angular Data Chart | Data Visualization Tools | Axis Settings | Infragistics
_description: Infragistics' Angular charts control allows full control over configuring axis labels, titles, tickmarks, range, gridline, gap and overlap. Learn about our Ignite UI for Angular graph axis!
_keywords: Angular charts, data chart, axis settings, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
---

# Angular Axis Settings

In the Ignite UI for Angular data chart component, an axis provides base properties for specifying the appearance of axis main lines, tickmarks, titles, and axis labels.

## Angular Axis Settings Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-axis-settings-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-settings' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Axis Settings Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-settings-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Axis Labels

The Ignite UI for Angular data chart component allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of these labels.

The following code example shows how to style the labels on a category x-axis in the data chart:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    labelTextStyle="9pt Verdana"
    labelTopMargin=5
    labelTextColor="gray">
</igx-category-x-axis>
```

## Axis Titles

The axis title feature of the data chart component allows you to add contextual information to the axes of the data chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, margins, and alignments.

The following code example shows how to set and customize the titles on a Ignite UI for Angular category x-axis in the chart:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    title="Country"
    titleTextColor="gray"
    titleTextStyle="12pt Verdana"
    titleAngle=0>
</igx-category-x-axis>
```

## Axis Tickmarks

Tick marks display points on the axes in the Angular data chart component. They represent a certain numeric point on a scale or the value of the category in a category axis. You can change the length, thickness, and color of the tick marks on an axis in the data chart component.

The following code example shows how to set and customize the color, length, and thickness of the tick marks on a category x-axis in the data chart:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    tickLength=10
    tickStrokeThickness=0.5
    tickStroke="black">
</igx-category-x-axis>
```

## Axis Range

In the Angular data chart component, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the [`minimumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#minimumvalue) and [`maximumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#maximumvalue) options on the corresponding axes.

By default, the data chart component will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the [`minimumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#minimumvalue) of the numeric axis to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the [`maximumValue`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericaxisbasecomponent.html#maximumvalue) property.

The following code snippet demonstrates changing an axis range in the data chart component:

```html
<igx-numeric-y-axis #yAxis
    name="yAxis"
    minimumValue=0
    maximumValue=1000>
</igx-numeric-y-axis>
```

## Axis Gridlines

In the Angular data chart component, the [`interval`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html#interval) property of an axis determines how frequently the major gridlines and axis labels are rendered on that axis. Similarly, the [`minorInterval`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html#minorinterval) property specifies how frequently minor gridlines are rendered between those major gridlines.

For numeric axes, these intervals will be numeric, but for category axes, these values will represent the frequency of the number of categories that you wish for the lines to be drawn. For example, if you set the [`interval`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html#interval) to 2 on a category axis, the major gridlines would be drawn every 2 categories.

You can also configure the color and thickness of the intervals on the axes in the chart by setting the corresponding stroke and stroke thickness properties.

The following code snippet demonstrates how to configure the intervals on the axes in the data chart:

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

## Axis Gap

The [`gap`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#gap) property on the category axes of the Angular data chart component determines the amount of space between series of the data chart.

This property accepts a numeric value between 0 and 1. The value represents a relative width of the gap out of the available number of pixels between the series. Setting this property to 0 would mean there is no gap rendered between the series, and setting it 1 would render the maximum available gap.

The following sample code demonstrates setting an x-axis gap:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    gap=0.125>
</igx-category-x-axis>
```

## Axis Overlap

The axis [`overlap`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#overlap) feature of the category axes of the Angular data chart component allows setting the overlap of the rendered categories.

This property accepts a numeric value between -1 and 1. The value represents a relative overlap out of the available number of pixels dedicated to each series.

Setting this property to a negative value (down to -1) results in the categories being pushed away from each other, producing a gap between themselves.

Setting this property to a positive value (up to 1) results in the categories overlapping each other. A value of 1 directs the chart to render the categories on top of each other.

The following code snippet sets the x-axis [`overlap`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryaxisbasecomponent.html#overlap) to 0:

```html
<igx-category-x-axis #xAxis
    name="xAxis"
    label="Country"
    overlap=0>
</igx-category-x-axis>
```
