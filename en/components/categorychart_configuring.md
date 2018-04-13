---
title: Category Chart Configuring
_description: The Ignite UI for Angular Category Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing category data a breeze.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Category Chart component, Angular Chart controls, Angular Category Chart controls
---
## Configuring Category Chart 

There are many areas of the category chart that can be customized, such as the markers, chart titles and subtitles, and the chart types.
This page will walk you through with code samples the different properties that required to be set in order to achieve a customized category chart.

<div class="divider"></div>

### Configuring Category Chart Demo
<div class="sample-container" style="height: 650px">
    <iframe id="category-chart-configuring-sample-iframe" src='{environment:demosBaseUrl}/category-chart-configuring-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-configuring-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Configuring Chart Types

As shown in the above demo, the brushes for the chart types can be configured. The following code example sets the chart type to waterfall and changes the default color of the brushes.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartType="waterfall"
	brushes="blue, green"
	negativeBrushes="red, yellow"
	outlines="black"
	thickness="5">
</igx-category-chart>
```

### Configuring Chart Markers

Markers are visual elements that display the values of data points in the Category Chart control's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

The appearance of chart markers is managed through the `markerType`, `markerBrushes`, `markerOutlines` properties of the Category Chart, as demonstrated in the following code example.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    markerType="diamondMarker"
    markerBrushes="red"
    markerOutlines="yellow">
</igx-category-chart>
```

### Transition In Animations

This feature allows you to animate the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the y-axis.

The chart resizes allowing for the title and subtitle information.

By default, animated transitions are disabled and you can enable transition-in animations by setting the `isTransitionInEnabled` option to “true”.

Animated transitions can be configured in terms of transition type, speed of the individual data points relative to each other, and the easing transition (managed by an easing function).

The transition type is configured by setting the transitionInMode option to the desired transition name. Automatic selection of the transition type based on the series type is possible, too, by setting the property to “Auto” (default).

The following code example demonstrates how to enable transition in animations and have the chart accordion in from the right.

```html
 <igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    isTransitionInEnabled="true"
    transitionInDuration="5000"
    transitionInMode="AccordionFromRight">
</igx-category-chart>
```