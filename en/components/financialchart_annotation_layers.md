---
title: Financial Chart | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information. 
_keywords: financial chart, Ignite UI for Angular, infragistics
---

## Annotations

This topic provides conceptual information about the annotations available on the Angular financial chart component.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:demosBaseUrl}/charts/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### Crosshair Layer

The Crosshair Layer provides crossing lines that meet at the actual value of every targeted series.  Crosshair types include: Horizontal, Vertical, and Both.  The Crosshairs can also be configured to snap to data points by setting the `crosshairsSnapToData` property to true, otherwise the crosshairs will be interpolated between data points.  Annotations can also be enabled to display the crosshair's value along the axis.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-financial-chart>
```

### Final Value Layer

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    finalValueAnnotationsVisible="true">
</igx-financial-chart>
```

### Callout Layer

The Callout Layer displays a callout at X/Y positions.

> Note: When using the ordinal X axis mode, the `calloutsXMemberPath` should point to the numeric index of the item, otherwise `calloutsXMemberPath` should point to the time value.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutsContentMemberPath="content">
</igx-financial-chart>
```
