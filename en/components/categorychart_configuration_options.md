---
title: Configuration Options
_description: The Ignite UI for Category Chart component simplifies the complexities of the data visualization domain into manageable API so that a user can bind a collection of data, a group of collections, and a data property, and let the charting control do the rest.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Category Chart
---
## Configuration Options

There are many areas of the category chart that can be customized, such as the markers, chart titles and subtitles, and the chart types.

### Demo
<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-config-options-sample-iframe" src='{environment:demosBaseUrl}/category-chart-config-options-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-config-options-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Configuring Chart Visuals

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

By default, transition in animations are disabled and you can enable transition-in animations by setting the `isTransitionInEnabled` option to “true”.

Transition in animations can be configured in terms of transition type, speed of the individual data points relative to each other, and the easing transition (managed by an easing function).

The transition type is configured by setting the transitionInMode option to the desired transition name. Automatic selection of the transition type based on the series type is possible, too, by setting the property to `Auto` (default).

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