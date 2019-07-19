---
title: Category Chart | Data Visualization Tools | Ignite UI for Angular | Configuration Options | Infragistics
_description: Use the category chart component to analyze and  automatically choose the best chart type to represent data. Learn about our chart types for visualization.
_keywords: category chart, Ignite UI for Angular, infragistics
mentionedTypes: ['XamCategoryChart']
---

## Configuration Options

There are many areas of the Ignite UI for Angular category chart component that can be customized, such as the markers, chart titles and subtitles, and the chart types.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-config-options-sample-iframe" src='{environment:demosBaseUrl}/charts/category-chart-config-options-sample' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
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

Markers are visual elements that display the values of data points in the category chart component's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

The appearance of chart markers is managed through the [`MarkerType`](categorychart_configuration_options.md), `MarkerBrushes`, `MarkerOutlines` properties of the category chart, as demonstrated in the following code example.

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

### Configuring Chart Titles and Subtitles

The title and subtitle feature of the category chart component allows you to add information to the top section of the chart.
When adding a title or subtitle to the chart, the content of the chart automatically resizes allowing for the title and subtitle information.

You can customize the look and feel of the category chart’s subtitle and title in many different ways such as applying different font styles, margins, and alignment as demonstrated in the following code example.

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    chartTitle="Energy Use Per Country"
    titleTextColor = "Red"
    titleTextStyle="20pt Verdana"
    subtitle="Results over a two year periods"
    subtitleTextColor = "Blue"
    subtitleTextStyle = "10pt Verdana">
</igx-category-chart>
```

### Transition In Animations

This feature allows you to animate the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the y-axis.

The chart resizes allowing for the title and subtitle information.

By default, transition in animations are disabled and you can enable transition-in animations by setting the `IsTransitionInEnabled` option to “true”.

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
