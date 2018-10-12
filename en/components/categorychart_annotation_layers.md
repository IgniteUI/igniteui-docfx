---
title: Category Chart Annotations and Overlays
_description: The Ignite UI for Category Chart component simplifies the complexities of the data visualization domain into manageable API so that a user can bind a collection of data, a group of collections, and a data property, and let the charting control do the rest.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Category Chart
---
## Category Chart Annotations and Overlays

This topic provides conceptual information about the annotations and overlay interactions available on the `igx-category-chart`.

### Demo
<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-annotations-and-overlays-iframe" src='{environment:demosBaseUrl}/category-chart-annotations-and-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-annotations-and-overlays-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

## Overlay Types

### Crosshair Layer

The Crosshair Layer provides crossing lines that meet at the actual value of every targeted series.  Crosshair types include: Horizontal, Vertical, and Both.

```html
<igx-category-chart
    [dataSource]="data"
    crosshairsDisplayMode="Horizontal"
    crosshairsSnapToData="true"
    crosshairsAnnotationEnabled="true">
</igx-category-chart>
```

### Category Tool Tip Layer

The Category Tool Tip Layer displays grouped tooltips for series using a category axis.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```

### Item Tool Tip Layer

The Item Tool Tip Layer displays tooltips for all target series individually.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Item">
</igx-category-chart>
```

### Category Item Highlight Layer

The Category Item Highlight Layer highlights items in a series that use a category axis either by drawing a banded shape at their position or by rendering a marker at their position.

```html
<igx-category-chart
    [dataSource]="data"
    isCategoryHighlightingEnabled="true">
</igx-category-chart>
```

### Category Highlight Layer

The Category Highlight Layer targets a category axis, or all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the cursor position.

```html
<igx-category-chart
    [dataSource]="data"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```

## Annotation Types

### Final Value Layer

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

```html
<igx-category-chart
    [dataSource]="data"
    finalValueAnnotationsVisible="true">
</igx-category-chart>
```

### Callout Layer

The Callout Layer displays a callout at X/Y positions. It can show a label and some extra content as a tooltip when hovering over the annotation.

> Note: When using a Category axis, the `calloutsXMemberPath` should point to the numeric index or the time value for a time axis.

```html
<igx-category-chart
    [dataSource]="data"
    calloutsVisible="true"
    [calloutsDataSource]="calloutData"
    calloutsXMemberPath="index"
    calloutsYMemberPath="yValue"
    calloutsLabelMemberPath="title"
    calloutssContentMemberPath="content">
</igx-category-chart>
```
