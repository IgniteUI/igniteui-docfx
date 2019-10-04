---
title: Category Chart | Data Visualization Tools | Ignite UI for Angular | Annotations | Infragistics
_description: Use the category chart component to analyze and  automatically choose the best chart type to represent data. Learn about our chart types for visualization.
_keywords: category chart, Ignite UI for Angular, infragistics
mentionedTypes: ['XamCategoryChart']
---

## Annotations

This topic provides conceptual information about the annotations and overlay interactions available on the Ignite UI for Angular category chart component.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-annotations-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-annotations-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### Crosshair Layer

The Crosshair Layer of the category chart provides crossing lines that meet at the actual value of every targeted series.  Crosshair types include: Horizontal, Vertical, and Both.  The Crosshairs can also be configured to snap to data points by setting the `CrosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points.  Annotations can also be enabled to display the crosshair's value along the axis.

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

### Final Value Layer

The Final Value Layer of the category chart component provides a quick view along the axis of the ending value displayed in a series.

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

### Callout Layer

The Callout Layer of the category chart component displays a text callout at X/Y positions given in the data.

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title">
</igx-category-chart>
```
