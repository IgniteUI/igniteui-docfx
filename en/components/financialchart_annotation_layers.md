---
title: Financial Chart Annotation Layers
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## Financial Chart Annotation Layers

This topic provides conceptual information about the annotations and hover interactions available on the `igx-financial-chart`.

### Demo
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-annotation-layers-iframe" src='{environment:demosBaseUrl}/financial-chart-annotation-layers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotation-layers-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

## Annotation Layer Types

### Crosshair Layer

The Crosshair Layer provides crossing lines that meet at the actual value of every targeted series.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-crosshair-layer
        [targetSeries]="GOOG" 
        useInterpolation="false">
    </igx-crosshair-layer>
 </igx-financial-chart>
```

### Category Tool Tip Layer

The Category Tool Tip Layer displays grouped tooltips for series using a category axis.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-category-tool-tip-layer
        shouldRenderAsOverlay="true"></igx-category-tool-tip-layer>
 </igx-financial-chart>
```

### Item Tool Tip Layer

The Item Tool Tip Layer displays tooltips for all target series individually.

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-item-tool-tip-layer></igx-item-tool-tip-layer>
 </igx-financial-chart>
```

### Category Item Highlight Layer

The Category Item Highlight Layer highlights items in a series that use a category axis either by drawing a banded shape at their position or by rendering a marker at their position.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-category-item-highlight-layer
        highlightType="Marker"
        transitionDuration="150">
    </igx-category-item-highlight-layer>
 </igx-financial-chart>
```

### Category Highlight Layer

The Category Highlight Layer targets a category axis, or all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the cursor position.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-category-highlight-layer
        transitionDuration="150">
    </igx-category-highlight-layer>
 </igx-financial-chart>

```

### Final Value Layer

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-final-value-layer></igx-final-value-layer>
 </igx-financial-chart>
```

### Callout Layer

The Callout Layer displays a callout at X/Y positions. It can show a label and some extra content.

> Note: When using a Category axis, the member path should be the numeric index or the time value for a time axis.

```html
<igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">

    <igx-callout-layer
        [dataSource]="data"
        xMemberPath="Index"
        yMemberPath="Pop2015"
        labelMemberPath="Pop2015">
    </igx-callout-layer>
 </igx-financial-chart>
```
