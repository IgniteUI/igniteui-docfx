---
title: Financial Chart Annotations and Overlays
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## Financial Chart Annotations and Overlays

This topic provides conceptual information about the annotations and overlay interactions available on the `igx-financial-chart`.

### Demo
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-annotations-and-overlays-iframe" src='{environment:demosBaseUrl}/financial-chart-annotations-and-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-and-overlays-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

## Overlay Types

### Crosshair Layer

The Crosshair Layer provides crossing lines that meet at the actual value of each targeted series.  Crosshair types include: Horizontal, Vertical, and Both.

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

### Category Tool Tip Layer

The Category Tool Tip Layer displays grouped tooltips for series using a category axis.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    toolTipType="Category">
</igx-financial-chart>
```

### Item Tool Tip Layer

The Item Tool Tip Layer displays tooltips for all target series individually.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px"
    toolTipType="Item">
</igx-financial-chart>
```

## Annotation Types

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

The Callout Layer displays a callout at X/Y positions. It can show a label and some extra content as a tooltip when hovering over the annotation.

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
